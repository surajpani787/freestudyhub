"use client";

import { useState } from "react";
import Link from "next/link";
import { Map, ArrowRight, CheckCircle2, Compass, Share2, Check } from "lucide-react";

const highlightedRoadmaps = [
  {
    title: "Frontend Architect",
    description: "HTML/CSS, modern JavaScript, React 19, Next.js 15, state management, testing, and web performance.",
    steps: ["Web Basics", "React / Next.js", "State & Cache", "Web Vitals"],
    badge: "Most Popular",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    url: "https://roadmap.sh/frontend",
  },
  {
    title: "Backend & Systems",
    description: "RESTful & GraphQL APIs, Node.js, Python, PostgreSQL, Redis caching, microservices, and system design.",
    steps: ["Language Core", "Relational DBs", "Auth & APIs", "System Architecture"],
    badge: "High Demand",
    color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
    url: "https://roadmap.sh/backend",
  },
  {
    title: "DevOps & Cloud Engineer",
    description: "Linux internals, CI/CD with GitHub Actions, Docker, Kubernetes orchestration, Terraform, and AWS/GCP.",
    steps: ["Linux & Git", "Docker/K8s", "CI/CD Automations", "Cloud Infrastructure"],
    badge: "Trending",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    url: "https://roadmap.sh/devops",
  },
  {
    title: "AI & Data Scientist",
    description: "Linear algebra, statistics, Python for Data Science, Scikit-Learn, PyTorch, Deep Learning, and LLMs.",
    steps: ["Math & Python", "Data Wrangling", "Machine Learning", "GenAI & LLMs"],
    badge: "Future-Ready",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    url: "https://roadmap.sh/ai-data-scientist",
  },
];

export default function FeaturedRoadmaps() {
  const [copiedTrack, setCopiedTrack] = useState<string | null>(null);

  const handleCopyShare = (title: string, url: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedTrack(title);
      setTimeout(() => setCopiedTrack(null), 2000);
    }
  };

  return (
    <section className="py-12 sm:py-20 relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-3 tracking-wide">
              <Compass size={14} className="text-amber-400" />
              <span>Step-by-Step Pathways</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Developer Career Roadmaps{" "}
              <span className="font-serif italic font-normal text-amber-200/90 hidden sm:inline">
                for real craft.
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
              Don&apos;t get lost in tutorial hell. Follow structured, visual career pathways vetted by thousands of senior engineers.
            </p>
          </div>

          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 text-amber-300/90 hover:text-amber-200 font-medium text-xs sm:text-sm mt-4 md:mt-0 group"
          >
            <span>Explore All 18+ Roadmaps</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full min-w-0">
          {highlightedRoadmaps.map((rm) => (
            <div
              key={rm.title}
              className="rounded-2xl p-6 bg-[#121724] border border-slate-800/90 hover:border-slate-700 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    {rm.badge}
                  </span>
                  <Map size={18} className="text-amber-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{rm.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {rm.description}
                </p>

                {/* Milestones */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Core Milestones:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {rm.steps.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800/80">
                <Link
                  href={rm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-all"
                >
                  <span>Open Roadmap</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => handleCopyShare(rm.title, rm.url)}
                  title="Share link with study groups"
                  className="p-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {copiedTrack === rm.title ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <Check size={14} />
                    </span>
                  ) : (
                    <Share2 size={14} className="text-slate-400 group-hover:text-white" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
