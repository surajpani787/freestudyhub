"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Cookie, X, Clock, ExternalLink } from "lucide-react";

const SNOOZE_DURATION_MS = 3 * 60 * 1000; // 3 minutes snooze if dismissed without accepting

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [snoozeNotice, setSnoozeNotice] = useState(false);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkConsentStatus = useCallback(() => {
    if (typeof window === "undefined") return;

    // 1. Check if user has already permanently accepted
    const isAccepted =
      localStorage.getItem("fsh_cookie_consent") === "accepted" ||
      localStorage.getItem("fsh_cookie_consent") === "essential" ||
      document.cookie.includes("fsh_cookie_consent=accepted") ||
      document.cookie.includes("fsh_cookie_consent=essential");

    if (isAccepted) {
      setIsVisible(false);
      return;
    }

    // 2. Check if currently snoozed
    const snoozeUntilStr = sessionStorage.getItem("fsh_cookie_snooze_until");
    if (snoozeUntilStr) {
      const snoozeUntil = parseInt(snoozeUntilStr, 10);
      if (Date.now() < snoozeUntil) {
        // Still in snooze window
        setIsVisible(false);
        return;
      }
    }

    // If not accepted and not snoozed, show the mandatory consent banner
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check immediately on mount
    checkConsentStatus();

    // Periodic check every 15 seconds to re-open banner if 3-minute snooze elapsed
    checkIntervalRef.current = setInterval(() => {
      checkConsentStatus();
    }, 15000);

    return () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
    };
  }, [checkConsentStatus]);

  // Permanently accept cookies & privacy policy (stored purely in local client storage, zero database overhead)
  const handleAccept = (type: "accepted" | "essential") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fsh_cookie_consent", type);
      localStorage.setItem("fsh_cookie_consent_time", Date.now().toString());
      sessionStorage.removeItem("fsh_cookie_snooze_until");

      // 1-year client cookie for persistent recognition
      document.cookie = `fsh_cookie_consent=${type}; path=/; max-age=31536000; SameSite=Lax`;
    }
    setIsVisible(false);
  };

  // If user closes via 'X' without accepting, snooze for 3 minutes, then re-appear
  const handleSnoozeClose = () => {
    if (typeof window !== "undefined") {
      const snoozeUntil = Date.now() + SNOOZE_DURATION_MS;
      sessionStorage.setItem("fsh_cookie_snooze_until", snoozeUntil.toString());
    }
    setSnoozeNotice(true);
    setTimeout(() => {
      setSnoozeNotice(false);
      setIsVisible(false);
    }, 1200);
  };

  if (!isVisible && !snoozeNotice) return null;

  return (
    <aside
      aria-label="Mandatory Cookies and Privacy Policy Consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative w-full bg-[#0a0f1d]/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.15)] overflow-hidden">
        {/* Subtle Ambient Glowing Top Strip */}
        <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

        {/* Temporary Snooze Notice State */}
        {snoozeNotice ? (
          <div className="py-4 text-center space-y-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Clock size={16} />
            </div>
            <p className="text-xs font-semibold text-white">Consent Snoozed for 3 Minutes</p>
            <p className="text-[11px] text-slate-400">
              Cookies &amp; Privacy Policy acceptance is required. This reminder will reappear shortly until accepted.
            </p>
          </div>
        ) : (
          <>
            {/* Close / Snooze Button with clear tooltip */}
            <button
              type="button"
              onClick={handleSnoozeClose}
              title="Close temporarily (will remind again in 3 minutes until accepted)"
              aria-label="Close temporarily"
              className="absolute top-3.5 right-3.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Header Content */}
            <div className="flex items-start gap-3.5 pr-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <Cookie size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    Cookies &amp; Privacy Policy
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-500/40 rounded-full">
                    Mandatory
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 bg-white/[0.05] rounded-md">
                    Browser Only
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                  We use essential cookies to maintain your login session, protect you with 1-hour auto-logout security, and store roadmap progress. Acceptance is mandatory to use FreeStudyHub. Stored strictly in your browser (not in any tracking database).
                </p>

                <div className="mt-1.5 flex items-center gap-2.5 flex-wrap">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition"
                  >
                    <span>Privacy Policy</span>
                    <ExternalLink size={10} />
                  </Link>
                  <span className="text-slate-500 text-[10px]">•</span>
                  <Link
                    href="/terms"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition"
                  >
                    <span>Terms &amp; Conditions</span>
                    <ExternalLink size={10} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleAccept("accepted")}
                className="shine-sweep flex-1 py-2 px-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:opacity-95 shadow-md shadow-cyan-500/25 transition-all cursor-pointer text-center"
              >
                Accept &amp; Continue
              </button>

              <button
                type="button"
                onClick={() => handleAccept("essential")}
                className="py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all cursor-pointer text-center"
              >
                Essential Only
              </button>

              <button
                type="button"
                onClick={handleSnoozeClose}
                className="py-2 px-2.5 rounded-xl text-xs text-slate-400 hover:text-slate-200 transition-all cursor-pointer text-center text-[11px]"
                title="Remind me in 3 minutes"
              >
                Later
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
