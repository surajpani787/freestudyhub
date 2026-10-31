"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { allRoadmaps } from "../lib/roaddata";
import {
  Map,
  Search,
  ExternalLink,
  Compass,
  Layers,
  X,
  Share2,
  Check,
} from "lucide-react";

export default function RoadmapsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [copiedTrack, setCopiedTrack] = useState<string | null>(null);

  const handleCopyShare = (title: string, url: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedTrack(title);
      setTimeout(() => setCopiedTrack(null), 2000);
    }
  };

  const tags = ["All", "Developer", "Engineer", "Design", "Data", "Security"];

  const filteredRoadmaps = useMemo(() => {
    return allRoadmaps.filter((rm) => {
      const matchesSearch = rm.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag =
        selectedTag === "All" ||
        rm.name.toLowerCase().includes(selectedTag.toLowerCase());
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-4 tracking-wide">
          <Compass size={14} className="text-amber-400" />
          <span>Interactive Career Pathways</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Developer Roadmaps{" "}
          <span className="font-serif italic font-normal text-amber-200/90 block mt-2 text-2xl sm:text-4xl">
            for real software craft.
          </span>
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Step-by-step career blueprints and structured technical pathways to guide your learning from beginner to senior engineer.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-3xl mx-auto mb-10 space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={19} className="text-slate-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search roadmaps (e.g. Frontend, DevOps, AI, Python)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#121724] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xl shadow-black/40 text-sm sm:text-base transition-all"
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

        {/* Quick Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-center flex-wrap">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition ${
                selectedTag === t
                  ? "bg-slate-800 text-amber-200 border border-slate-700/80 shadow-sm"
                  : "bg-[#121724] hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmaps Grid */}
      {filteredRoadmaps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoadmaps.map((rm) => (
            <div
              key={rm.name}
              className="group rounded-2xl p-6 bg-[#121724] hover:bg-[#161d2e] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0e121d] border border-slate-800 text-amber-400 group-hover:scale-105 transition-transform duration-200">
                    <Map size={22} />
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    Interactive Track
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {rm.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Comprehensive topic breakdown, recommended courses, and industry milestones for {rm.name}.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <Link
                  href={rm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-all"
                >
                  <span>Explore Pathway</span>
                  <ExternalLink size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => handleCopyShare(rm.name, rm.url)}
                  title="Share link with study groups"
                  className="p-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {copiedTrack === rm.name ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Share2 size={14} className="text-slate-400 hover:text-white" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl bg-[#121724] border border-slate-800 p-8">
          <Layers size={48} className="mx-auto text-slate-600 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No roadmaps found</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any roadmap matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedTag("All");
            }}
            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm transition"
          >
            Show All Roadmaps
          </button>
        </div>
      )}
    </div>
  );
}
