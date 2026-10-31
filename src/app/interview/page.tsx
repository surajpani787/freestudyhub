"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { interview } from "../lib/interview";
import {
  HelpCircle,
  Search,
  Download,
  Layers,
  X,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

export default function InterviewPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInterview = useMemo(() => {
    return interview.filter((item) => {
      const lower = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(lower) ||
        (item.description && item.description.toLowerCase().includes(lower))
      );
    });
  }, [searchTerm]);

  return (
    <div className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-semibold text-violet-300 mb-4 uppercase tracking-wider">
          <Briefcase size={14} />
          <span>Ace Technical Rounds</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Interview Preparation Vault
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base">
          Curated interview question sets, behavioral tips, coding questions, and architectural scenarios for top tech companies.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={20} className="text-cyan-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search interview topics (e.g. React, AWS, Frontend, System Design)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 shadow-lg text-sm sm:text-base"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Interview Grid */}
      {filteredInterview.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterview.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl p-6 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(99,102,241,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                    <HelpCircle size={22} />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                    Interview Kit
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description || "Frequently asked technical questions, key answers, and live code examples."}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 size={13} />
                  <span>Verified Q&A Handbook</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <Link
                  href={item.gdriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] group-hover:bg-indigo-600 group-hover:text-white border border-white/10 group-hover:border-indigo-500 transition-all duration-200"
                >
                  <Download size={15} />
                  <span>Open Q&A Document</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl bg-slate-900/30 border border-white/10 p-8">
          <Layers size={48} className="mx-auto text-slate-600 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No interview kits found</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any questions matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition"
          >
            Show All Interview Kits
          </button>
        </div>
      )}
    </div>
  );
}
