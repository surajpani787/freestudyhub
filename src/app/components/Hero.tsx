"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  BookOpen,
  Map,
  FileText,
  HelpCircle,
  Play,
  CheckCircle2,
  TrendingUp,
  Download,
  Star,
  ShieldCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

const trendingTags = [
  "React 19",
  "DSA & LeetCode",
  "Next.js 15",
  "System Design",
  "Python & AI",
  "Docker & DevOps",
];

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"courses" | "roadmaps" | "notes" | "interview">("courses");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/resources?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/resources");
    }
  };

  const handleTagClick = (tag: string) => {
    router.push(`/resources?search=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative pt-6 pb-20 sm:pt-14 sm:pb-32 overflow-hidden w-full min-w-0 max-w-full">
      {/* Subtle Warm Atmospheric Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.10),rgba(245,158,11,0.03)_50%,transparent_80%)] blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Curator Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121622] border border-slate-800 text-xs sm:text-sm text-slate-300 shadow-sm hover:border-slate-700 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span className="text-slate-200 font-medium">Curated Developer Archive</span>
            <span className="text-slate-600">/</span>
            <span className="text-amber-200/90 font-medium">100% Free & Open-Access</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.1]">
            Master Modern Tech.{" "}
            <span className="block mt-2 font-serif italic font-normal text-amber-100/95 tracking-normal">
              Without the subscription traps.
            </span>
          </h1>

          <p className="mt-5 sm:mt-7 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything essential in software engineering is already open. We curate battle-tested career roadmaps, verified video courses, high-yield interview questions, and direct-download PDF cheat sheets—hand-picked by software engineers who know what it takes to break into tech.
          </p>
        </div>

        {/* Integrated Omni-Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 w-full min-w-0">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center p-1.5 sm:p-2 rounded-2xl bg-[#121724] border border-slate-800 focus-within:border-slate-600 focus-within:ring-2 focus-within:ring-indigo-500/20 shadow-xl shadow-black/40 transition-all duration-200 w-full"
          >
            <div className="pl-3.5 pr-2 text-slate-400">
              <Search size={19} className="text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search roadmaps, courses, or notes..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none py-2 px-1"
            />
            <button
              type="submit"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-sm transition-all active:scale-95"
            >
              <span>Search</span>
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Zero-friction Trust Assurance Micro-Banner */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-2.5 text-[11px] sm:text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 size={13} className="shrink-0" />
              <span>100% Free Forever</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck size={13} className="text-amber-400 shrink-0" />
              <span>No Account or Card Required</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Download size={13} className="text-indigo-400 shrink-0" />
              <span>Direct Google Drive PDFs</span>
            </span>
          </div>

          {/* Quick Trending Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5 w-full">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <TrendingUp size={13} className="text-amber-400" />
              Trending:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-[#141926] hover:bg-[#1a2133] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition duration-150"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Primary CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14 sm:mb-18 w-full">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/60 hover:scale-[1.01] active:scale-[0.99] transition-all duration-150"
          >
            <BookOpen size={17} />
            <span>Explore 500+ Curated Courses</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/roadmaps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#121622] hover:bg-[#181e2e] border border-slate-800 hover:border-slate-700 hover:text-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 shadow-sm"
          >
            <Map size={17} className="text-amber-400" />
            <span>Career Roadmaps (18+ Tracks)</span>
          </Link>
        </div>

        {/* Trust & Social Proof Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold text-slate-200">4.9/5 Rating</span>
            <span className="text-slate-500">(25,000+ Learners)</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-400" />
            <span className="font-semibold text-slate-200">Curated by Engineers</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-emerald-400" />
            <span className="font-semibold text-slate-200">Zero Paywalls & No Signup Walls</span>
          </div>
        </div>

        {/* Hero Interactive Showcase Centerpiece */}
        <div className="relative max-w-5xl mx-auto w-full min-w-0">
          <div className="rounded-2xl border border-slate-800 bg-[#10141f] shadow-2xl shadow-black/80 overflow-hidden w-full">
            {/* Window Top Controls Header */}
            <div className="px-4 py-3 bg-[#0d101a] border-b border-slate-800/80 flex items-center justify-between gap-3 overflow-hidden">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="hidden md:inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-md bg-slate-900 text-[11px] text-slate-400 font-mono border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  freestudyhub.com/vault
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 bg-[#131826] p-1 rounded-xl border border-slate-800/80 overflow-x-auto scrollbar-none max-w-full">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === "courses"
                      ? "bg-slate-800 text-amber-200 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Masterclasses
                </button>
                <button
                  onClick={() => setActiveTab("roadmaps")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === "roadmaps"
                      ? "bg-slate-800 text-amber-200 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Roadmaps
                </button>
                <button
                  onClick={() => setActiveTab("notes")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === "notes"
                      ? "bg-slate-800 text-amber-200 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  PDF Notes
                </button>
                <button
                  onClick={() => setActiveTab("interview")}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === "interview"
                      ? "bg-slate-800 text-amber-200 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Interview Kit
                </button>
              </div>
            </div>

            {/* Window Interactive Content Showcase */}
            <div className="p-4 sm:p-6 lg:p-8">
              {activeTab === "courses" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  <div className="group rounded-xl p-4 bg-[#121724] border border-slate-800/90 hover:border-slate-700 hover:bg-[#161d2e] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                          Frontend
                        </span>
                        <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> 4.9
                        </span>
                      </div>
                      <h4 className="font-bold text-white group-hover:text-amber-200 transition text-sm sm:text-base line-clamp-2">
                        Next.js 15 & React 19 Full Stack Architecture Masterclass
                      </h4>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        Master App Router, Server Actions, Turbopack, and dynamic caching from beginner to production deployment.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <Play size={13} fill="currentColor" /> Free Masterclass
                      </span>
                      <Link href="/resources" className="text-amber-300/90 hover:text-amber-200 font-medium flex items-center gap-1">
                        Watch Free <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="group rounded-xl p-4 bg-[#121724] border border-slate-800/90 hover:border-slate-700 hover:bg-[#161d2e] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                          DSA & Algorithms
                        </span>
                        <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> 5.0
                        </span>
                      </div>
                      <h4 className="font-bold text-white group-hover:text-amber-200 transition text-sm sm:text-base line-clamp-2">
                        Data Structures & Algorithms In-Depth Problem Solving
                      </h4>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        Visual breakdowns of Binary Trees, Graphs, Dynamic Programming, and LeetCode blind 75 problem patterns.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <Play size={13} fill="currentColor" /> 75+ Modules
                      </span>
                      <Link href="/resources" className="text-amber-300/90 hover:text-amber-200 font-medium flex items-center gap-1">
                        Watch Free <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="group rounded-xl p-4 bg-[#121724] border border-slate-800/90 hover:border-slate-700 hover:bg-[#161d2e] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                          DevOps & Cloud
                        </span>
                        <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                          <Star size={12} fill="currentColor" /> 4.9
                        </span>
                      </div>
                      <h4 className="font-bold text-white group-hover:text-amber-200 transition text-sm sm:text-base line-clamp-2">
                        Docker, Kubernetes & Microservices Architecture
                      </h4>
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        Containerize modern web applications, configure CI/CD pipelines, and deploy resilient cloud services.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <Play size={13} fill="currentColor" /> Complete Track
                      </span>
                      <Link href="/resources" className="text-amber-300/90 hover:text-amber-200 font-medium flex items-center gap-1">
                        Watch Free <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "roadmaps" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 animate-in fade-in duration-300">
                  {[
                    { name: "Frontend Engineer", steps: "HTML, CSS, JS, React, Next.js, Tailwind", level: "Beginner → Pro" },
                    { name: "Backend Architect", steps: "Node.js, Python, PostgreSQL, REST, GraphQL", level: "Beginner → Pro" },
                    { name: "DevOps & Cloud", steps: "Linux, Git, Docker, K8s, AWS & Terraform", level: "Intermediate" },
                    { name: "AI & ML Specialist", steps: "Python, Math, Pandas, PyTorch, LangChain", level: "Advanced" },
                  ].map((rm) => (
                    <div key={rm.name} className="p-4 rounded-xl bg-[#121724] border border-slate-800/90 hover:border-slate-700 hover:bg-[#161d2e] transition flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">{rm.level}</span>
                        <h4 className="text-sm font-bold text-white mt-1.5">{rm.name}</h4>
                        <p className="text-xs text-slate-400 mt-2 font-mono leading-relaxed">{rm.steps}</p>
                      </div>
                      <Link href="/roadmaps" className="inline-flex items-center gap-1 mt-4 text-xs text-amber-300/90 hover:text-white font-medium">
                        View Pathway <ArrowRight size={13} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "notes" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  {[
                    { title: "Data Structures & Algorithms Cheat Sheets", format: "Direct Google Drive", iconColor: "text-amber-400" },
                    { title: "React & Next.js Production Architecture Handout", format: "Direct Google Drive", iconColor: "text-indigo-400" },
                    { title: "System Design Patterns & Microservices Guide", format: "Direct Google Drive", iconColor: "text-emerald-400" },
                  ].map((n) => (
                    <div key={n.title} className="p-4 rounded-xl bg-[#121724] border border-slate-800/90 flex items-center justify-between hover:border-slate-700 hover:bg-[#161d2e] transition">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/80 text-amber-400">
                          <FileText size={18} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white">{n.title}</h4>
                          <span className="text-[11px] text-slate-400 font-medium">{n.format}</span>
                        </div>
                      </div>
                      <Link href="/notes" className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition">
                        <Download size={15} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "interview" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  {[
                    { title: "Frontend & React 19 Interview Vault", count: "150+ Questions & Answers" },
                    { title: "AWS Cloud & DevOps Scenario Guide", count: "100+ Real Case Studies" },
                    { title: "Core Java, Python & OOP Mastery", count: "80+ Code Walkthroughs" },
                  ].map((i) => (
                    <div key={i.title} className="p-4 rounded-xl bg-[#121724] border border-slate-800/90 flex items-center justify-between hover:border-slate-700 hover:bg-[#161d2e] transition">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700/80 text-indigo-400">
                          <HelpCircle size={18} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white">{i.title}</h4>
                          <span className="text-[11px] text-emerald-400 font-semibold">{i.count}</span>
                        </div>
                      </div>
                      <Link href="/interview" className="text-xs text-amber-300/90 hover:text-amber-200 font-medium flex items-center gap-1">
                        Open Vault <ArrowRight size={13} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Window Bottom Stats Ribbon */}
            <div className="px-6 py-4 bg-[#0d101a] border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Free Tutorials</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Map size={16} className="text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">18+ Guided Roadmaps</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Download size={16} className="text-indigo-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Direct Drive Notes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star size={16} className="text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Community Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
