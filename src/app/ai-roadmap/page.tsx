"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Target,
  Terminal,
  Coins,
  BookOpen,
  Mail,
  GraduationCap,
  Youtube,
  FileCode,
  Compass,
  ArrowUpRight,
} from "lucide-react";

interface MilestoneLink {
  type: "university" | "video" | "doc" | "repo";
  title: string;
  source: string;
  duration?: string;
}

interface TrackData {
  title: string;
  timeline: string;
  promptExample: string;
  milestones: {
    period: string;
    headline: string;
    description: string;
    freeLinks: MilestoneLink[];
  }[];
}

const TRACK_PREVIEWS: Record<string, TrackData> = {
  "Full Stack AI Engineer": {
    title: "Full Stack AI Engineer",
    timeline: "12 – 14 Weeks • 15 hrs/week",
    promptExample:
      "I know basic JavaScript and Python. I want to build production-grade AI & LLM applications in 12 weeks. I only want high-yield, world-class free resources with zero paid course traps.",
    milestones: [
      {
        period: "Week 1–3",
        headline: "Modern Async Python, FastAPI & Concurrency",
        description:
          "Master non-blocking I/O, Pydantic v2 schemas, and high-throughput async API design tailored for streaming LLM responses.",
        freeLinks: [
          {
            type: "university",
            title: "Harvard CS50: Web Programming with Python & JavaScript",
            source: "Harvard Open Learning • 100% Free",
          },
          {
            type: "doc",
            title: "FastAPI & AsyncIO Production Architecture Deep Dive",
            source: "Official Tiangolo Docs & RFCs",
          },
          {
            type: "video",
            title: "Python Concurrency & Memory Profiling Masterclass",
            source: "ArjanCodes • Vetted YouTube Deep-Dive",
          },
        ],
      },
      {
        period: "Week 4–7",
        headline: "Embeddings, Vector Search & RAG Architecture",
        description:
          "Build production-grade Retrieval-Augmented Generation pipelines with hybrid search, reranking, and low-latency chunking.",
        freeLinks: [
          {
            type: "university",
            title: "Stanford CS25: Transformers & Large Language Models",
            source: "Stanford University Lectures • Free",
          },
          {
            type: "repo",
            title: "Production RAG Architecture with Qdrant & LangChain",
            source: "Verified GitHub Open-Source Blueprint",
          },
          {
            type: "doc",
            title: "Vector Similarity Metrics (Cosine vs Dot Product vs HNSW)",
            source: "Pinecone Engineering Docs",
          },
        ],
      },
      {
        period: "Week 8–12+",
        headline: "Autonomous Agents, Containerized Inference & Capstone",
        description:
          "Deploy self-hosted models with vLLM/Ollama, containerize with Docker, and ship a production multi-tenant AI copilot.",
        freeLinks: [
          {
            type: "video",
            title: "Docker & Kubernetes for AI Engineering Masterclass",
            source: "TechWorld with Nana • Free Course",
          },
          {
            type: "repo",
            title: "Full-Stack AI Capstone: Next.js 15 + FastAPI + vLLM",
            source: "Production GitHub Repo & CI/CD Spec",
          },
        ],
      },
    ],
  },
  "Backend & Distributed Systems": {
    title: "Backend & Distributed Systems",
    timeline: "14 – 16 Weeks • 15 hrs/week",
    promptExample:
      "I know core Java/C++. I want to switch to Go and master distributed microservices, message queues, and high-scale databases.",
    milestones: [
      {
        period: "Week 1–4",
        headline: "Go Internals, Goroutines & Memory Models",
        description:
          "Skip syntax tutorials. Dive straight into channels, CSP concurrency, garbage collection tuning, and atomic primitives.",
        freeLinks: [
          {
            type: "university",
            title: "MIT 6.824: Distributed Systems Engineering",
            source: "MIT OpenCourseWare • 100% Free",
          },
          {
            type: "doc",
            title: "The Go Memory Model & Concurrency Primitives",
            source: "Go Official Specification & Go Blog",
          },
        ],
      },
      {
        period: "Week 5–9",
        headline: "Event Streaming with Kafka & Redis Clusters",
        description:
          "Partition rebalancing, exactly-once delivery semantics, distributed caching, and cache-stampede mitigation strategies.",
        freeLinks: [
          {
            type: "video",
            title: "Apache Kafka Architecture & Event Sourcing in Production",
            source: "Confluent Developer Hub • Vetted Series",
          },
          {
            type: "repo",
            title: "System Design Primer by Donne Martin (High-Yield)",
            source: "GitHub Open-Source (250k+ Stars)",
          },
        ],
      },
      {
        period: "Week 10–14+",
        headline: "PostgreSQL Sharding, Idempotency & Fault Tolerance",
        description:
          "Design two-phase commits, saga patterns, database connection pooling, and live zero-downtime database migrations.",
        freeLinks: [
          {
            type: "university",
            title: "CMU 15-445: Database Systems Architecture",
            source: "Carnegie Mellon University • Free Lectures",
          },
          {
            type: "repo",
            title: "Distributed Rate Limiter & Idempotency Key Gateway",
            source: "Production Blueprint on GitHub",
          },
        ],
      },
    ],
  },
  "Production DevOps & Cloud SRE": {
    title: "Production DevOps & Cloud SRE",
    timeline: "10 – 12 Weeks • 12 hrs/week",
    promptExample:
      "I'm a developer who wants to transition into Cloud Platform & SRE. I need to master Kubernetes, Terraform, and GitOps CI/CD from scratch.",
    milestones: [
      {
        period: "Week 1–3",
        headline: "Linux Kernel Internals, Cgroups & Networking",
        description:
          "Namespaces, cgroups v2, iptables, eBPF telemetry, and bash automation for high-reliability systems.",
        freeLinks: [
          {
            type: "university",
            title: "MIT The Missing Semester of Your CS Education",
            source: "MIT OpenCourseWare • 100% Free",
          },
          {
            type: "doc",
            title: "Linux Performance Tuning & Syscall Tracing",
            source: "Brendan Gregg Engineering Archives",
          },
        ],
      },
      {
        period: "Week 4–7",
        headline: "Kubernetes Production Orchestration & Helm",
        description:
          "Ingress controllers, daemonsets, statefulsets, custom resource definitions (CRDs), and RBAC security policies.",
        freeLinks: [
          {
            type: "video",
            title: "Kubernetes Complete Zero-to-Production Bootcamp",
            source: "freeCodeCamp / Nana • Free Masterclass",
          },
          {
            type: "doc",
            title: "Production Kubernetes Best Practices Checklist",
            source: "Kubernetes Official Documentation",
          },
        ],
      },
      {
        period: "Week 8–12+",
        headline: "Terraform IaC, Prometheus Monitoring & ArgoCD",
        description:
          "Modular Infrastructure as Code, GitOps progressive delivery with ArgoCD, and automated incident triage alerts.",
        freeLinks: [
          {
            type: "repo",
            title: "Production AWS / GCP Terraform Multi-Region Blueprint",
            source: "Verified GitHub Infrastructure Spec",
          },
          {
            type: "doc",
            title: "Google Site Reliability Engineering (SRE) Handbook",
            source: "Google Books • 100% Free Online Edition",
          },
        ],
      },
    ],
  },
  "DSA & FAANG L5 Ready": {
    title: "DSA & FAANG L5 Ready",
    timeline: "8 – 10 Weeks • 10 hrs/week",
    promptExample:
      "I have 3 years of work experience and want to crack FAANG/Tier-1 coding interviews without spending months solving 500 random problems.",
    milestones: [
      {
        period: "Week 1–3",
        headline: "Pattern-Based Problem Solving (Top 14 Patterns)",
        description:
          "Two pointers, sliding window, fast & slow pointers, monotonic stacks, and in-place reversal of linked lists.",
        freeLinks: [
          {
            type: "video",
            title: "14 LeetCode Patterns That Actually Matter",
            source: "NeetCode • Vetted YouTube Deep-Dive",
          },
          {
            type: "doc",
            title: "DSA High-Yield Visual Cheat Sheets & Code Templates",
            source: "FreeStudyHub PDF Archive • Direct Download",
          },
        ],
      },
      {
        period: "Week 4–6",
        headline: "Graphs, Disjoint Sets, DP & Backtracking",
        description:
          "Topological sorting, Dijkstra shortest path, union-find with path compression, and multidimensional dynamic programming.",
        freeLinks: [
          {
            type: "university",
            title: "MIT 6.006: Introduction to Algorithms",
            source: "MIT OpenCourseWare (Prof. Erik Demaine)",
          },
          {
            type: "repo",
            title: "Top 75 High-Frequency Tier-1 Questions with Explanations",
            source: "Curated GitHub Coding Repository",
          },
        ],
      },
      {
        period: "Week 7–10+",
        headline: "Mock System Design & Behavior Interview Rubrics",
        description:
          "Design scalable URL shortener, global chat system, and distributed metrics collector under real 45-minute whiteboard constraints.",
        freeLinks: [
          {
            type: "video",
            title: "Real Ex-Google / Meta Mock System Design Interviews",
            source: "Exponent / Gaurav Sen • Vetted Free Videos",
          },
        ],
      },
    ],
  },
};

export default function AIRoadmapPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [targetRole, setTargetRole] = useState("Full Stack AI Engineer");

  const currentTrack = TRACK_PREVIEWS[targetRole] || TRACK_PREVIEWS["Full Stack AI Engineer"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("email", email.trim());
      formData.append("preferred_track", targetRole);
      formData.append("source", "FreeStudyHub AI Roadmap Bot Early Access");
      formData.append("submitted_at", new Date().toISOString());

      await fetch("https://getform.io/f/aolzgdxb", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Waitlist error:", err);
      // Still show success to student so they are not blocked
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const getLinkIcon = (type: MilestoneLink["type"]) => {
    switch (type) {
      case "university":
        return <GraduationCap size={14} className="text-amber-400 shrink-0" />;
      case "video":
        return <Youtube size={14} className="text-red-400 shrink-0" />;
      case "doc":
        return <BookOpen size={14} className="text-indigo-400 shrink-0" />;
      case "repo":
        return <FileCode size={14} className="text-emerald-400 shrink-0" />;
    }
  };

  return (
    <div className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Top Breadcrumb & Badge */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-5 tracking-wide shadow-sm">
          <Bot size={14} className="text-amber-400" />
          <span className="text-amber-200/90 font-medium">FreeStudyHub AI Roadmap Bot</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Coming Soon</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
          Personalized Roadmaps.
          <span className="font-serif italic font-normal text-amber-200/95 block mt-2 text-2xl sm:text-4xl lg:text-5xl">
            Generated by AI with top-tier FREE study links for every single step.
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
          Static roadmaps give everyone the exact same tree with vague buzzwords, leaving you stranded.
          Our upcoming <strong>AI Roadmap Bot</strong> analyzes your starting background and dream role, builds a step-by-step master path, and links <strong>curated, world-class 100% free study resources</strong> (Harvard, MIT, Stanford, official docs & verified masterclasses) directly to each milestone.
        </p>

        {/* Minimal Micro-Compute Fee Announcement Banner */}
        <div className="mt-7 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:px-5 sm:py-2.5 rounded-2xl bg-[#141926] border border-amber-400/25 text-left max-w-xl mx-auto shadow-lg shadow-black/40">
          <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
            <Coins size={18} />
          </div>
          <div className="text-xs sm:text-[13px] text-slate-300">
            <span className="font-semibold text-amber-300">Pocket-Friendly Compute Fee: </span>
            <span>
              All existing 5,000+ tutorials and 18+ roadmaps remain 100% free. The AI Roadmap Bot will carry only a nominal micro-charge (less than a coffee) strictly to cover high-grade LLM compute.
            </span>
          </div>
        </div>
      </div>

      {/* The 3-Pillar Superpower Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-14 sm:mb-18">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#121724] border border-slate-800 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
            <Target size={20} />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
            1. Calibrated to Your Exact Level
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Tell the bot what you already know. It automatically skips redundant syntax tutorials and starts right at your growth edge.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#121724] border border-slate-800 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-3">
            <GraduationCap size={20} />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
            2. Vetted World-Class Free Links
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            No searching through clickbait or paying $2,000 for bootcamps. Every milestone pairs with verified MIT, Stanford, Harvard, and official documentation links.
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#121724] border border-slate-800 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-indigo-400/10 text-indigo-400 flex items-center justify-center mb-3">
            <Terminal size={20} />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
            3. Real Capstones & Interview Drills
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Every path culminates in complete production project architectures and calibrated technical interview question banks.
          </p>
        </div>
      </div>

      {/* Interactive AI Bot Conversation & Generated Path Sandbox */}
      <div className="relative max-w-5xl mx-auto mb-16 sm:mb-20">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#10141f] shadow-2xl shadow-black/80 overflow-hidden">
          {/* Mockup Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#0d101a] border-b border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                <Bot size={13} className="text-amber-400" />
                freestudyhub.com/ai-roadmap-bot
              </span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20">
              Interactive Bot Simulation
            </span>
          </div>

          <div className="p-5 sm:p-8 lg:p-10 space-y-6">
            {/* Interactive Specialization Picker */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Compass size={13} className="text-amber-400" />
                Select a Career Track to Preview Generated Roadmaps:
              </span>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {Object.keys(TRACK_PREVIEWS).map((role) => (
                  <button
                    key={role}
                    onClick={() => setTargetRole(role)}
                    className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition cursor-pointer ${
                      targetRole === role
                        ? "bg-amber-400 text-slate-900 font-semibold shadow-sm shadow-amber-400/20"
                        : "bg-[#141926] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Student Query Chat Bubble */}
            <div className="rounded-2xl p-4 bg-[#141926] border border-slate-800/90 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                You
              </div>
              <div>
                <p className="font-semibold text-white text-xs mb-0.5">Your Prompt to the Bot:</p>
                <p className="text-slate-300/90 italic leading-relaxed">
                  &ldquo;{currentTrack.promptExample}&rdquo;
                </p>
              </div>
            </div>

            {/* Simulated AI Bot Generated Roadmap Response Bubble */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#0a0d14] border border-slate-800 font-sans space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      AI Generated Master Curriculum: {currentTrack.title}
                    </h4>
                    <p className="text-xs text-amber-300/90 font-mono">
                      {currentTrack.timeline} • Direct Free Links Included
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 size={14} />
                  <span>100% Free World-Class Links</span>
                </div>
              </div>

              {/* Generated Step-by-Step Milestones with Real Free Links */}
              <div className="space-y-4">
                {currentTrack.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[#121724] border border-slate-800/90 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-300 text-xs font-mono font-bold">
                          {m.period}
                        </span>
                        <h5 className="text-sm font-bold text-white">{m.headline}</h5>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed">
                      {m.description}
                    </p>

                    {/* Vetted World-Class Free Study Links for this specific milestone */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Attached World-Class Free Resources:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {m.freeLinks.map((link, lIdx) => (
                          <div
                            key={lIdx}
                            className="p-2.5 rounded-lg bg-[#0d101a] border border-slate-800 hover:border-slate-700 transition flex items-start gap-2.5"
                          >
                            <div className="mt-0.5">{getLinkIcon(link.type)}</div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-medium text-slate-200 truncate">
                                {link.title}
                              </p>
                              <p className="text-[10px] text-slate-400 truncate mt-0.5">
                                {link.source}
                              </p>
                            </div>
                            <ArrowUpRight size={12} className="text-slate-600 shrink-0 mt-0.5" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Pillar Comparison: Static Roadmaps vs FreeStudyHub AI Bot */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why the AI Roadmap Bot is a Game-Changer
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Designed for self-taught developers, college students, and engineers making serious career transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-[#121724]/70 border border-slate-800/80">
            <h3 className="text-base font-bold text-slate-300 mb-3 flex items-center gap-2">
              <span className="text-red-400">✕</span> Typical Generic Online Roadmaps
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>The exact same static diagram for thousands of people regardless of your experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>Lists vague buzzwords (&ldquo;Learn Docker&rdquo;) with zero vetted links or tutorials.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                <span>Leaves you drowning in random low-yield YouTube videos or $500 paid courses.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#141b2b] border border-amber-400/30 shadow-lg shadow-black/40">
            <h3 className="text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
              <span className="text-emerald-400">✓</span> FreeStudyHub AI Roadmap Bot
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>100% Tailored:</strong> Builds a granular schedule around your existing skills and time budget.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>World-Class Free Links:</strong> Every step comes linked with verified MIT, Stanford, Harvard, and top engineer masterclasses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span><strong>Production Capstones:</strong> Real-world GitHub project blueprints to prove your competence to hiring teams.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Early Access Waitlist Reservation Box */}
      <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#121724] border border-slate-800 text-center shadow-xl shadow-black/60">
        <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
          <Sparkles size={22} />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Reserve Priority Access to the AI Bot
        </h3>
        <p className="mt-3 text-sm text-slate-300/80 max-w-lg mx-auto">
          Early supporters on the reservation list get their first <strong className="text-amber-300">2 custom generated roadmaps with zero fee</strong> when the bot launches.
        </p>

        {submitted ? (
          <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2">
            <CheckCircle2 size={18} />
            <span>You&apos;re on the priority early-access list! We&apos;ll notify you when the AI Bot goes live.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-lg mx-auto w-full"
          >
            <div className="relative flex-1 w-full">
              <Mail
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address for early access waitlist"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d101a] border border-slate-700/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/20 transition"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 shadow-sm transition whitespace-nowrap cursor-pointer shrink-0"
            >
              {submitting ? "Reserving..." : "Reserve Early Access"}
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>In the meantime:</span>
          <Link
            href="/roadmaps"
            className="text-amber-300/90 hover:text-white font-medium inline-flex items-center gap-1 underline underline-offset-4"
          >
            Explore our 18+ free standard roadmaps <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
