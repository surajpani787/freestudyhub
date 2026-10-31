"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { notes } from "../lib/notes";
import {
  FileText,
  Search,
  Download,
  Layers,
  X,
  CheckCircle2,
} from "lucide-react";

export default function PremiumNotesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      const lower = searchTerm.toLowerCase();
      return (
        n.title.toLowerCase().includes(lower) ||
        (n.description && n.description.toLowerCase().includes(lower))
      );
    });
  }, [searchTerm]);

  return (
    <div className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
          <FileText size={14} />
          <span>Curated PDF Cheat Sheets</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Notes Library
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base">
          Download high-yield study summaries, revision handbooks, and architecture cheat sheets directly from verified Google Drive links.
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
            placeholder="Search notes (e.g. React, DSA, Next, Java, System Design)..."
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

      {/* Notes Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="group rounded-2xl p-6 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.2)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <FileText size={22} />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                    PDF Document
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {note.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {note.description || "Comprehensive notes, diagrams, and code snippets in PDF format."}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 size={13} />
                  <span>Direct Google Drive Download</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <Link
                  href={note.gdriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] group-hover:bg-cyan-500 group-hover:text-slate-950 border border-white/10 group-hover:border-cyan-400 transition-all duration-200"
                >
                  <Download size={15} />
                  <span>Download / Open PDF</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl bg-slate-900/30 border border-white/10 p-8">
          <Layers size={48} className="mx-auto text-slate-600 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No notes found</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any note matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition"
          >
            Show All Notes
          </button>
        </div>
      )}
    </div>
  );
}
