"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If a chunk failed to load due to outdated client manifest or server restart, auto-reload once to fetch fresh assets
    if (
      error?.name === "ChunkLoadError" ||
      error?.message?.includes("Loading chunk") ||
      error?.message?.includes("ChunkLoadError")
    ) {
      const storageKey = "chunk_load_failed_retry";
      const hasRetried = sessionStorage.getItem(storageKey);
      if (!hasRetried) {
        sessionStorage.setItem(storageKey, "true");
        window.location.reload();
        return;
      }
    } else {
      sessionStorage.removeItem("chunk_load_failed_retry");
    }

    console.error("App error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-6">
        <AlertTriangle size={36} />
      </div>

      <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
        Something went wrong!
      </h1>

      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        An unexpected error occurred while loading this page. You can try refreshing or return to the home page.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:opacity-95 transition cursor-pointer"
        >
          <RotateCcw size={16} />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-sm font-semibold transition"
        >
          <Home size={16} />
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
}
