"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Compass,
  Map,
  FileText,
  HelpCircle,
  Mail,
  BookOpen,
  ChevronRight,
  LogIn,
  UserPlus,
  LogOut,
  ShieldCheck,
  Bot,
} from "lucide-react";
import { useUser, useClerk } from "@clerk/nextjs";

const hasValidClerkKey = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_CLERK") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 30
);

// Public navigation links (Before login: Home, About, Contact)
const publicNavLinks = [
  { href: "/", label: "Home", icon: Compass },
  { href: "/about", label: "About", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

// Authenticated navigation links (After login: Courses, Roadmaps, Notes, Interview Kit, AI Roadmap, Contact)
const authenticatedNavLinks = [
  { href: "/courses", label: "Courses", icon: Compass },
  { href: "/roadmaps", label: "Roadmaps", icon: Map },
  { href: "/notes", label: "Notes", icon: FileText },
  { href: "/interview", label: "Interview Kit", icon: HelpCircle },
  { href: "/ai-roadmap", label: "AI Roadmap", icon: Bot },
  { href: "/contact", label: "Contact", icon: Mail },
];

export interface StoredUserSession {
  userId?: string;
  name: string;
  email: string;
  provider: string;
  avatar?: string;
  loggedInAt?: string;
  lastActiveAt?: number;
  expiresAt?: number;
}

/**
 * Synchronous session reader from local client storage
 */
function getStoredUserSession(): StoredUserSession | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = sessionStorage.getItem("fsh_user_session");
    if (stored) {
      const parsed: StoredUserSession = JSON.parse(stored);
      if (!parsed.expiresAt || parsed.expiresAt > Date.now()) {
        return parsed;
      }
    }

    const match = document.cookie.match(/fsh_demo_session=([^;]+)/);
    if (match) {
      return JSON.parse(decodeURIComponent(match[1]));
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Background non-blocking Clerk Bridge Component
 * Syncs Clerk session to storage without causing re-render loops
 */
function ClerkBridge({
  signOutRef,
}: {
  signOutRef: React.MutableRefObject<(() => Promise<void>) | null>;
}) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const lastSyncedIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (signOut) {
      signOutRef.current = async () => {
        try {
          await signOut();
        } catch {
          // ignore background signout errors
        }
      };
    }
  }, [signOut, signOutRef]);

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn && user) {
      if (lastSyncedIdRef.current === user.id) return;
      lastSyncedIdRef.current = user.id;

      const clerkSession: StoredUserSession = {
        userId: user.id,
        name: user.fullName || user.username || "Student",
        email: user.primaryEmailAddress?.emailAddress || "student@freestudyhub.com",
        avatar: user.imageUrl || "/user.png",
        provider: user.externalAccounts?.[0]?.provider || "google",
        loggedInAt: new Date().toISOString(),
        lastActiveAt: Date.now(),
        expiresAt: Date.now() + 60 * 60 * 1000,
      };

      sessionStorage.setItem("fsh_user_session", JSON.stringify(clerkSession));
      sessionStorage.setItem("fsh_last_active", Date.now().toString());
      document.cookie = `fsh_demo_session=${encodeURIComponent(JSON.stringify(clerkSession))}; path=/; max-age=604800; SameSite=Lax`;
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: clerkSession }));
    } else if (isLoaded && !isSignedIn) {
      if (lastSyncedIdRef.current === null) return;
      lastSyncedIdRef.current = null;

      const hasDemoCookie = document.cookie.includes("fsh_demo_session=");
      if (!hasDemoCookie) {
        sessionStorage.removeItem("fsh_user_session");
        sessionStorage.removeItem("fsh_last_active");
        document.cookie = "fsh_demo_session=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: null }));
      }
    }
  }, [isLoaded, isSignedIn, user]);

  return null;
}

export default function Navbar({
  initialSession = null,
}: {
  initialSession?: StoredUserSession | null;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Initialize with server-provided session to guarantee 0ms instant display and zero SSR flash on reload
  const [userSession, setUserSession] = useState<StoredUserSession | null>(initialSession);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const clerkSignOutRef = useRef<(() => Promise<void>) | null>(null);

  // Sync state if server passes updated initialSession
  useEffect(() => {
    if (initialSession !== undefined) {
      setUserSession(initialSession);
    }
  }, [initialSession]);

  // Synchronize on mount and subscribe to local client auth changes
  useEffect(() => {
    const clientSession = getStoredUserSession();
    if (clientSession) {
      setUserSession(clientSession);
    } else if (initialSession === null) {
      setUserSession(null);
    }

    const handleAuthEvent = (e: Event) => {
      const customEvent = e as CustomEvent<StoredUserSession | null>;
      if (customEvent.detail !== undefined) {
        setUserSession(customEvent.detail);
      } else {
        setUserSession(getStoredUserSession());
      }
    };

    const handleStorage = () => {
      setUserSession(getStoredUserSession());
    };

    window.addEventListener("fsh-auth-change", handleAuthEvent);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("fsh-auth-change", handleAuthEvent);
      window.removeEventListener("storage", handleStorage);
    };
  }, [initialSession]);

  // Sync on route change
  useEffect(() => {
    const fresh = getStoredUserSession();
    if (fresh) {
      setUserSession(fresh);
    }
    setIsOpen(false);
    setProfileDropdownOpen(false);
  }, [pathname]);

  // Throttled scroll listener with requestAnimationFrame to prevent re-render thrashing
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 15;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Instant 0ms Logout handler
  const handleInstantSignOut = () => {
    // 1. Immediately reset state in 0ms (UI flips to guest instantly)
    setUserSession(null);
    setProfileDropdownOpen(false);
    setIsOpen(false);

    // 2. Synchronously wipe all local storage and cookies
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("fsh_user_session");
      sessionStorage.removeItem("fsh_last_active");
      sessionStorage.removeItem("fsh_logout_reason");

      // Expire all auth cookies immediately
      document.cookie = "fsh_demo_session=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "__session=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "__client_uat=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      // Broadcast instant 0ms auth change event to all components
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: null }));
    }

    // 3. Instant client router transition to home page
    router.push("/");
    router.refresh();

    // 4. Background fire-and-forget server / Clerk cleanup (asynchronous & non-blocking)
    if (clerkSignOutRef.current) {
      clerkSignOutRef.current().catch(() => {});
    }
    fetch("/api/demo-auth", { method: "DELETE" }).catch(() => {});
  };

  // Immediate synchronous auth check - zero flash on SSR or reload
  const isUserAuthenticated = Boolean(userSession);

  // Render Public Links (Home, About, Contact)
  const renderPublicLinks = () => (
    <div className="flex items-center space-x-7 lg:space-x-8">
      {publicNavLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`group relative py-2 text-xs sm:text-sm transition-all duration-150 ${
              isActive
                ? "text-white font-semibold"
                : "text-slate-400 hover:text-white font-medium"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <span>{label}</span>
              {href === "/ai-roadmap" && (
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Bot
                </span>
              )}
            </span>

            {/* Subtle Warm Bottom Active Tab Indicator */}
            {isActive ? (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-amber-400" />
            ) : (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-slate-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-center" />
            )}
          </Link>
        );
      })}
    </div>
  );

  // Render Authenticated Links (Courses, Roadmaps, Notes, Interview Kit, AI Roadmap, Contact)
  const renderAuthLinks = () => (
    <div className="flex items-center space-x-5 xl:space-x-7">
      {authenticatedNavLinks.map(({ href, label }) => {
        const isActive =
          pathname === href ||
          (href === "/courses" &&
            (pathname === "/resources" ||
              pathname.startsWith("/courses") ||
              pathname.startsWith("/resources")));

        return (
          <Link
            key={href}
            href={href}
            className={`group relative py-2 text-xs sm:text-sm transition-all duration-150 ${
              isActive
                ? "text-white font-semibold"
                : "text-slate-400 hover:text-white font-medium"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <span>{label}</span>
              {href === "/ai-roadmap" && (
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Bot
                </span>
              )}
            </span>

            {/* Subtle Warm Bottom Active Tab Indicator */}
            {isActive ? (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-amber-400" />
            ) : (
              <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-slate-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-center" />
            )}
          </Link>
        );
      })}
    </div>
  );

  // Render Guest Actions (Sign In & Sign Up)
  const renderGuestActions = () => (
    <>
      <Link
        href="/sign-in"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition"
      >
        <LogIn size={15} />
        <span>Sign In</span>
      </Link>

      <Link
        href="/sign-up"
        className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl bg-amber-400 hover:bg-amber-300 shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all"
      >
        <UserPlus size={15} />
        <span>Sign Up</span>
      </Link>
    </>
  );

  // Render Authenticated User Actions (Custom Avatar + Emerald Dot + Popover with Logout inside)
  const renderUserActions = () => {
    const isGoogle = userSession?.provider?.toLowerCase().includes("google");
    const initial = userSession?.name?.charAt(0).toUpperCase() || "S";

    return (
      <div
        ref={profileDropdownRef}
        className="relative"
        onMouseEnter={() => setProfileDropdownOpen(true)}
        onMouseLeave={() => setProfileDropdownOpen(false)}
      >
        {/* User Avatar Button on Navbar */}
        <button
          type="button"
          onClick={() => setProfileDropdownOpen((prev) => !prev)}
          className="relative flex items-center justify-center p-0.5 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          aria-expanded={profileDropdownOpen}
          aria-label="User profile menu"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1px] bg-slate-800 border border-slate-700 shadow-sm group-hover:border-slate-600 group-hover:scale-105 transition-all duration-200">
            <div className="w-full h-full bg-[#0e121d] rounded-full flex items-center justify-center font-bold text-xs text-slate-200 uppercase tracking-wider overflow-hidden">
              {userSession?.avatar && userSession.avatar !== "/user.png" ? (
                <img
                  src={userSession.avatar}
                  alt={userSession.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                initial
              )}
            </div>
            {/* Active Emerald Online Status Indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0d14]" />
          </div>
        </button>

        {/* Hover / Click User Info Popup Card */}
        {profileDropdownOpen && (
          <div className="absolute right-0 top-full pt-2.5 z-50 w-72 animate-in fade-in zoom-in-95 duration-150">
            <div className="relative w-full bg-[#10141f] rounded-2xl border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden p-4">
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-amber-400/80" />

              {/* User Identity Header */}
              <div className="flex items-start gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-full p-[1px] bg-slate-800 border border-slate-700 shrink-0">
                  <div className="w-full h-full bg-[#0e121d] rounded-full flex items-center justify-center font-bold text-sm text-white uppercase overflow-hidden">
                    {userSession?.avatar && userSession.avatar !== "/user.png" ? (
                      <img
                        src={userSession.avatar}
                        alt={userSession.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      initial
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate leading-snug">
                    {userSession?.name || "Student"}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {userSession?.email || "student@freestudyhub.com"}
                  </p>
                  <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[10px] font-semibold text-cyan-300">
                    <ShieldCheck size={11} className="text-cyan-400" />
                    <span>{isGoogle ? "Google OAuth" : "GitHub OAuth"}</span>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Shortcuts */}
              <div className="py-2 space-y-0.5 border-b border-white/10">
                <Link
                  href="/courses"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass size={15} className="text-cyan-400" />
                    <span>My Courses</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-500" />
                </Link>

                <Link
                  href="/roadmaps"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Map size={15} className="text-indigo-400" />
                    <span>Tech Roadmaps</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-500" />
                </Link>

                <Link
                  href="/ai-roadmap"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center gap-2.5">
                    <Bot size={15} className="text-amber-400" />
                    <span>AI Roadmap Bot</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-500" />
                </Link>

                <Link
                  href="/notes"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText size={15} className="text-emerald-400" />
                    <span>PDF Revision Notes</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-500" />
                </Link>
              </div>

              {/* Logout Button (Kept cleanly INSIDE the popup) */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleInstantSignOut}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition group cursor-pointer"
                >
                  <LogOut size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  <span>Log Out of FreeStudyHub</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? "pt-2 sm:pt-2.5" : "pt-3 sm:pt-4"
      }`}
    >
      {/* Background non-blocking Clerk bridge */}
      {hasValidClerkKey && <ClerkBridge signOutRef={clerkSignOutRef} />}

      <nav
        suppressHydrationWarning
        aria-label="Main Navigation"
        className={`relative max-w-7xl mx-auto rounded-2xl transition-all duration-200 ${
          scrolled
            ? "bg-[#0d111c]/95 backdrop-blur-xl shadow-xl shadow-black/50 border border-slate-800"
            : "bg-[#0d111c]/80 backdrop-blur-lg border border-slate-800/80 shadow-md"
        }`}
      >
        {/* Ambient Top Glow Highlight */}
        <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent pointer-events-none" />

        <div
          className={`relative z-50 px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between ${
            isUserAuthenticated
              ? "lg:grid lg:grid-cols-[1fr_auto_1fr]"
              : "md:grid md:grid-cols-[1fr_auto_1fr]"
          }`}
        >
          {/* Brand Logo - Flush to Start */}
          <div className="flex items-center justify-start">
            <Link
              href="/"
              onClick={(e) => {
                if (isUserAuthenticated) {
                  e.preventDefault();
                  router.push("/courses");
                }
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-[1px] bg-slate-800 border border-slate-700/80 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/user.png"
                    alt="FreeStudyHub Logo"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
                    FreeStudy<span className="text-amber-300">Hub</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-200/90 bg-slate-800/90 border border-slate-700/80 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Navigation Links - True Geometric Center of Navbar */}
          <div className={`${isUserAuthenticated ? "hidden lg:flex" : "hidden md:flex"} items-center justify-center`}>
            {isUserAuthenticated ? renderAuthLinks() : renderPublicLinks()}
          </div>

          {/* Right Action Area - Flush to End */}
          <div className="flex items-center justify-end gap-2.5">
            <div className={`hidden ${isUserAuthenticated ? "lg:flex" : "md:flex"} items-center gap-2.5`}>
              {isUserAuthenticated ? renderUserActions() : renderGuestActions()}
            </div>

            {/* Mobile Menu Button */}
            <div className={`flex ${isUserAuthenticated ? "lg:hidden" : "md:hidden"} items-center gap-2 relative z-50`}>
            {isUserAuthenticated && (
              <button
                onClick={handleInstantSignOut}
                title="Sign Out"
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-red-400 hover:bg-slate-700 transition cursor-pointer"
              >
                <LogOut size={16} />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer relative z-50 ${
                isOpen
                  ? "bg-slate-800 text-amber-300 border-amber-400/60 shadow-lg shadow-amber-400/10 ring-2 ring-amber-400/40"
                  : "bg-slate-800/80 border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              }`}
            >
              {isOpen ? (
                <X size={20} className="text-amber-300 shrink-0" strokeWidth={2.5} />
              ) : (
                <Menu size={20} className="shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>

        {/* Floating Mobile Navigation Drawer - Floats ABOVE the Hero section without pushing down content */}
        {isOpen && (
          <>
            {/* Backdrop Dimmer to click outside and close */}
            <div
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-xs ${
                isUserAuthenticated ? "lg:hidden" : "md:hidden"
              } animate-in fade-in duration-200`}
              aria-hidden="true"
            />

            {/* Floating Popover Card */}
            <div
              className={`absolute top-[calc(100%+8px)] inset-x-0 z-50 ${
                isUserAuthenticated ? "lg:hidden" : "md:hidden"
              } p-4 sm:p-5 rounded-2xl bg-[#0d111c]/95 backdrop-blur-2xl border border-slate-800 shadow-2xl shadow-black/90 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 ease-out`}
            >
              {/* In-drawer Close Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                >
                  <X size={15} className="text-amber-300" strokeWidth={2.5} />
                  <span>Close</span>
                </button>
              </div>
              {isUserAuthenticated ? (
                <>
                  <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 font-bold text-xs overflow-hidden">
                        {userSession?.avatar && userSession.avatar !== "/user.png" ? (
                          <img
                            src={userSession.avatar}
                            alt={userSession.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          userSession?.name?.charAt(0).toUpperCase() || "S"
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate">{userSession?.name}</p>
                        <p className="text-[10px] text-amber-300/80 capitalize">
                          {userSession?.provider} OAuth
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleInstantSignOut}
                      className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                    >
                      <LogOut size={13} />
                      <span>Sign Out</span>
                    </button>
                  </div>

                  <div className="flex flex-col space-y-1 mb-2">
                    {authenticatedNavLinks.map(({ href, label, icon: Icon }) => {
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "text-white bg-[#141b2b] border-l-2 border-l-amber-400 shadow-sm"
                              : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={17}
                              className={isActive ? "text-amber-400" : "text-slate-500"}
                            />
                            <span className="inline-flex items-center gap-1.5">
              <span>{label}</span>
              {href === "/ai-roadmap" && (
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Bot
                </span>
              )}
            </span>
                          </div>

                          <ChevronRight
                            size={15}
                            className={isActive ? "text-amber-400" : "text-slate-600"}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col space-y-1 mb-4">
                    {publicNavLinks.map(({ href, label, icon: Icon }) => {
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "text-white bg-[#141b2b] border-l-2 border-l-amber-400 shadow-sm"
                              : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={isActive ? "text-amber-400" : "text-slate-500"}
                            />
                            <span className="inline-flex items-center gap-1.5">
              <span>{label}</span>
              {href === "/ai-roadmap" && (
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  Bot
                </span>
              )}
            </span>
                          </div>
                          <ChevronRight
                            size={15}
                            className={isActive ? "text-amber-400" : "text-slate-600"}
                          />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                    <Link
                      href="/sign-in"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition"
                    >
                      <LogIn size={15} />
                      <span>Sign In</span>
                    </Link>

                    <Link
                      href="/sign-up"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-sm transition-all"
                    >
                      <UserPlus size={16} />
                      <span>Create Free Account</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
