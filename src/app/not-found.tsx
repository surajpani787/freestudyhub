"use client";

import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6 uppercase tracking-wider">
        <Compass size={14} />
        <span>Error 404</span>
      </div>

      <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500 mb-4 tracking-tighter">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
        Page Not Found
      </h2>

      <p className="text-slate-400 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        The learning pathway or resource you are looking for might have been moved, updated, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:opacity-95 transition"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-sm font-semibold transition"
        >
          <span>Explore Resources</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
