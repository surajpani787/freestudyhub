"use client";

import { useEffect, useRef, useCallback } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

const ONE_HOUR_MS = 60 * 60 * 1000; // 1 hour of inactivity in milliseconds
const ACTIVITY_THROTTLE_MS = 15 * 1000; // Update last active timestamp at most once every 15s

const hasValidClerkKey = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_CLERK") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 30
);

export interface StoredUserSession {
  userId: string;
  name: string;
  email: string;
  avatar: string;
  provider: string;
  loggedInAt: string;
  lastActiveAt: number;
  expiresAt: number;
}

/**
 * Clerk Inactivity Session Tracker
 * Active when valid Clerk publishable keys are in place.
 */
function ClerkSessionTracker() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const lastActiveRef = useRef<number>(Date.now());

  const handleAutoLogout = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("fsh_user_session");
        sessionStorage.removeItem("fsh_last_active");
        sessionStorage.setItem("fsh_logout_reason", "inactivity");
      }
      await signOut();
      window.location.href = "/sign-in?reason=inactivity";
    } catch {
      window.location.href = "/sign-in?reason=inactivity";
    }
  }, [signOut]);

  // Store auth details in sessionStorage upon successful Clerk login
  useEffect(() => {
    if (isLoaded && isSignedIn && user && typeof window !== "undefined") {
      const now = Date.now();
      lastActiveRef.current = now;

      const sessionData: StoredUserSession = {
        userId: user.id,
        name: user.fullName || user.username || "Student",
        email: user.primaryEmailAddress?.emailAddress || "",
        avatar: user.imageUrl || "/user.png",
        provider: user.externalAccounts?.[0]?.provider || "oauth",
        loggedInAt: new Date(now).toISOString(),
        lastActiveAt: now,
        expiresAt: now + ONE_HOUR_MS,
      };

      sessionStorage.setItem("fsh_user_session", JSON.stringify(sessionData));
      sessionStorage.setItem("fsh_last_active", now.toString());
      document.cookie = `fsh_demo_session=${encodeURIComponent(JSON.stringify(sessionData))}; path=/; max-age=604800; SameSite=Lax`;
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: sessionData }));
    } else if (isLoaded && !isSignedIn && typeof window !== "undefined") {
      const hasDemo = document.cookie.includes("fsh_demo_session=");
      if (!hasDemo) {
        sessionStorage.removeItem("fsh_user_session");
        sessionStorage.removeItem("fsh_last_active");
        window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: null }));
      }
    }
  }, [isLoaded, isSignedIn, user]);

  // Track user activity and auto-logout after 1 hour of inactivity
  useEffect(() => {
    if (!isSignedIn) return;

    const recordActivity = () => {
      const now = Date.now();
      // Throttle storage updates
      if (now - lastActiveRef.current > ACTIVITY_THROTTLE_MS) {
        lastActiveRef.current = now;
        if (typeof window !== "undefined") {
          sessionStorage.setItem("fsh_last_active", now.toString());
          const stored = sessionStorage.getItem("fsh_user_session");
          if (stored) {
            try {
              const parsed: StoredUserSession = JSON.parse(stored);
              parsed.lastActiveAt = now;
              parsed.expiresAt = now + ONE_HOUR_MS;
              sessionStorage.setItem("fsh_user_session", JSON.stringify(parsed));
            } catch {
              // ignore
            }
          }
        }
      }
    };

    const checkInactivity = () => {
      if (typeof window === "undefined") return;
      const lastActiveStr = sessionStorage.getItem("fsh_last_active");
      const lastActive = lastActiveStr ? parseInt(lastActiveStr, 10) : lastActiveRef.current;
      const now = Date.now();

      if (now - lastActive >= ONE_HOUR_MS) {
        handleAutoLogout();
      }
    };

    const events = ["mousedown", "mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((evt) => window.addEventListener(evt, recordActivity, { passive: true }));

    // Periodic check every 30 seconds
    const interval = setInterval(checkInactivity, 30 * 1000);

    // Immediate check when returning to tab / computer wake
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkInactivity();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", checkInactivity);

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, recordActivity));
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", checkInactivity);
    };
  }, [isSignedIn, handleAutoLogout]);

  return null;
}

/**
 * Demo Session Inactivity Tracker
 * Active when running in demo/fallback mode before Clerk keys are configured.
 */
function DemoSessionTracker() {
  const lastActiveRef = useRef<number>(Date.now());

  const handleAutoLogout = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("fsh_user_session");
        sessionStorage.removeItem("fsh_last_active");
        sessionStorage.setItem("fsh_logout_reason", "inactivity");
        window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: null }));
      }
      await fetch("/api/demo-auth", { method: "DELETE" });
      document.cookie = "fsh_demo_session=; path=/; max-age=0";
      window.location.href = "/sign-in?reason=inactivity";
    } catch {
      window.location.href = "/sign-in?reason=inactivity";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if demo user cookie is present
    const match = document.cookie.match(/fsh_demo_session=([^;]+)/);
    if (!match) {
      sessionStorage.removeItem("fsh_user_session");
      sessionStorage.removeItem("fsh_last_active");
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: null }));
      return;
    }

    try {
      const demoUser = JSON.parse(decodeURIComponent(match[1]));
      const now = Date.now();
      lastActiveRef.current = now;

      const sessionData: StoredUserSession = {
        userId: "demo_usr_" + (demoUser.provider || "oauth"),
        name: demoUser.name || "Student",
        email: demoUser.email || "student@freestudyhub.com",
        avatar: demoUser.avatar || "/user.png",
        provider: demoUser.provider || "google",
        loggedInAt: demoUser.loggedInAt || new Date(now).toISOString(),
        lastActiveAt: now,
        expiresAt: now + ONE_HOUR_MS,
      };

      sessionStorage.setItem("fsh_user_session", JSON.stringify(sessionData));
      sessionStorage.setItem("fsh_last_active", now.toString());
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: sessionData }));
    } catch {
      // ignore
    }

    const recordActivity = () => {
      const now = Date.now();
      if (now - lastActiveRef.current > ACTIVITY_THROTTLE_MS) {
        lastActiveRef.current = now;
        sessionStorage.setItem("fsh_last_active", now.toString());
        const stored = sessionStorage.getItem("fsh_user_session");
        if (stored) {
          try {
            const parsed: StoredUserSession = JSON.parse(stored);
            parsed.lastActiveAt = now;
            parsed.expiresAt = now + ONE_HOUR_MS;
            sessionStorage.setItem("fsh_user_session", JSON.stringify(parsed));
          } catch {
            // ignore
          }
        }
      }
    };

    const checkInactivity = () => {
      const lastActiveStr = sessionStorage.getItem("fsh_last_active");
      const lastActive = lastActiveStr ? parseInt(lastActiveStr, 10) : lastActiveRef.current;
      const now = Date.now();

      if (now - lastActive >= ONE_HOUR_MS) {
        handleAutoLogout();
      }
    };

    const events = ["mousedown", "mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((evt) => window.addEventListener(evt, recordActivity, { passive: true }));

    const interval = setInterval(checkInactivity, 30 * 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkInactivity();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", checkInactivity);

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, recordActivity));
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", checkInactivity);
    };
  }, [handleAutoLogout]);

  return null;
}

/**
 * Global Session Manager Component
 * Handles storing user auth data into sessionStorage and auto-logging out after 1 hour of inactivity.
 */
export default function SessionManager() {
  if (hasValidClerkKey) {
    return <ClerkSessionTracker />;
  }
  return <DemoSessionTracker />;
}
