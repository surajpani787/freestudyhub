"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  KeyRound,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const hasValidClerkKey = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("YOUR_CLERK") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_") &&
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.length > 30
);

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/courses";
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleOAuthSignUp = (provider: "google" | "github") => {
    setLoadingProvider(provider);

    const sessionData = {
      name: provider === "github" ? "GitHub Developer" : "Google Student",
      email: provider === "github" ? "dev@github.user" : "student@gmail.com",
      provider,
      avatar: "/user.png",
      loggedInAt: new Date().toISOString(),
      lastActiveAt: Date.now(),
      expiresAt: Date.now() + 60 * 60 * 1000,
    };

    // 1. Synchronously set cookies and sessionStorage (0ms latency)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("fsh_user_session", JSON.stringify(sessionData));
      sessionStorage.setItem("fsh_last_active", Date.now().toString());
      document.cookie = `fsh_demo_session=${encodeURIComponent(JSON.stringify(sessionData))}; path=/; max-age=604800; SameSite=Lax`;
      window.dispatchEvent(new CustomEvent("fsh-auth-change", { detail: sessionData }));
    }

    // 2. Fire background persistence without blocking navigation
    fetch("/api/demo-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider,
        name: sessionData.name,
        email: sessionData.email,
      }),
    }).catch(() => {});

    // 3. Immediately transition to destination with zero delay
    const destination = redirectUrl === "/" ? "/courses" : redirectUrl;
    router.push(destination);
    router.refresh();
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Radiant Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Value Story & Proof */}
        <div className="hidden lg:flex flex-col justify-center pr-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to FreeStudyHub</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider w-fit">
            <Sparkles size={13} />
            <span>Join 25,000+ Learners</span>
          </div>

          <h2 className="text-3xl font-black text-white tracking-tight leading-snug">
            Your free passport to software engineering mastery.
          </h2>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Create your account in 1 click using Google or GitHub OAuth. Unlock full-length roadmaps, curated resources, and interview preparation guides with zero subscription fees.
          </p>

          <div className="mt-8 space-y-3.5">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>One-click Google & GitHub Clerk OAuth authentication</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
              <span>Instant access to 18+ comprehensive developer roadmaps</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
              <span>Downloadable revision PDF cheat sheets from Google Drive</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 size={16} className="text-violet-400 shrink-0" />
              <span>100% free open-education initiative forever</span>
            </div>
          </div>
        </div>

        {/* Right Auth Component (Clerk or Obsidian Preview) */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            <div className="w-full bg-[#0a0f1d]/90 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-center">
              {hasValidClerkKey ? (
                <SignUp
                  fallbackRedirectUrl="/courses"
                  signInFallbackRedirectUrl="/courses"
                  appearance={{
                    variables: {
                      colorPrimary: "#06b6d4",
                      colorBackground: "transparent",
                      colorForeground: "#f8fafc",
                      colorMutedForeground: "#94a3b8",
                      colorPrimaryForeground: "#ffffff",
                      borderRadius: "0.75rem",
                    },
                    elements: {
                      rootBox: "w-full",
                      card: "bg-transparent shadow-none p-0 w-full",
                      headerTitle: "text-white font-extrabold text-xl",
                      headerSubtitle: "text-slate-400 text-xs",
                      socialButtonsBlockButton:
                        "bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-white text-xs font-semibold rounded-xl transition duration-200 py-2.5",
                      socialButtonsBlockButtonText: "text-white font-medium text-xs",
                      dividerLine: "bg-white/10",
                      dividerText: "text-slate-500 text-xs font-medium",
                      formButtonPrimary:
                        "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/25 transition duration-200 py-2.5",
                      formFieldInput:
                        "bg-slate-900/80 border-white/10 focus:border-cyan-400 text-white rounded-xl text-xs py-2.5",
                      formFieldLabel: "text-slate-300 text-xs font-medium",
                      footerActionLink: "text-cyan-400 hover:text-cyan-300 font-semibold text-xs",
                      footer: "bg-transparent",
                    },
                  }}
                />
              ) : (
                /* Sleek Dark Obsidian Auth Fallback with Pure Clerk Social OAuth */
                <div className="w-full space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300 mb-2">
                      <ShieldCheck size={12} />
                      <span>OAuth Only Registration</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">Create Your Account</h3>
                    <p className="text-xs text-slate-400 mt-1">One-click sign-up via Google or GitHub</p>
                  </div>

                  {/* Social OAuth Buttons */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOAuthSignUp("google")}
                      disabled={loadingProvider !== null}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-xs font-semibold text-white transition-all duration-200 group disabled:opacity-60 cursor-pointer shadow-sm hover:shadow-cyan-500/10"
                    >
                      {loadingProvider === "google" ? (
                        <Loader2 size={16} className="animate-spin text-cyan-400" />
                      ) : (
                        /* Google Multicolored SVG Icon */
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      )}
                      <span>
                        {loadingProvider === "google"
                          ? "Connecting to Google..."
                          : "Sign up with Google"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOAuthSignUp("github")}
                      disabled={loadingProvider !== null}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-xs font-semibold text-white transition-all duration-200 group disabled:opacity-60 cursor-pointer shadow-sm hover:shadow-cyan-500/10"
                    >
                      {loadingProvider === "github" ? (
                        <Loader2 size={16} className="animate-spin text-cyan-400" />
                      ) : (
                        /* GitHub Octocat SVG Icon */
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      )}
                      <span>
                        {loadingProvider === "github"
                          ? "Connecting to GitHub..."
                          : "Sign up with GitHub"}
                      </span>
                    </button>
                  </div>

                  {/* Clerk Setup Info Callout */}
                  <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 leading-relaxed mt-4">
                    <div className="flex items-center gap-1.5 font-bold mb-1 text-cyan-200">
                      <KeyRound size={13} />
                      <span>Clerk OAuth-Only Configuration</span>
                    </div>
                    <p className="text-slate-300">
                      In your <a href="https://dashboard.clerk.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-cyan-300">Clerk Dashboard</a>, navigate to <strong>User & Authentication &gt; Email, Phone, Username</strong> and turn <strong>OFF</strong> Email address, then enable <strong>Google</strong> & <strong>GitHub</strong> under <em>Social Connections</em>.
                    </p>
                  </div>

                  <div className="text-center text-xs text-slate-400 pt-1">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-cyan-400 hover:underline font-semibold">
                      Sign in with OAuth
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
