"use client";

import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-4 tracking-wide">
          <BookOpen size={14} className="text-amber-400" />
          <span>Our Vision & Manifesto</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
          Democratizing Tech Education
          <span className="font-serif italic font-normal text-amber-200/90 block mt-2 text-2xl sm:text-4xl lg:text-5xl">
            for aspiring engineers worldwide.
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300/80 leading-relaxed">
          FreeStudyHub is an open digital learning ecosystem created to eliminate financial barriers in computer science, software engineering, and cloud technologies.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {[
          { label: "Free Tutorials & Guides", value: "5,000+" },
          { label: "Step-by-Step Roadmaps", value: "18+" },
          { label: "PDF Notes & Q&As", value: "100+" },
          { label: "Open Access For All", value: "100% Free" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 rounded-2xl bg-[#121724] border border-slate-800/90 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-amber-300">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mission & Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="rounded-2xl p-8 bg-[#121724] border border-slate-800/90">
          <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-amber-400 mb-6">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            To provide high-quality, structured, and curated software engineering education without demanding expensive tuition fees or forcing subscriptions.
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-[#121724] border border-slate-800/90">
          <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-indigo-400 mb-6">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Carefully Vetted</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            We spend hours filtering through millions of videos and tutorials across the internet to bring you only the most complete, clean, and modern resources.
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-[#121724] border border-slate-800/90">
          <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-emerald-400 mb-6">
            <Heart size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">By Learners, For Learners</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            FreeStudyHub was built by developers who understand the overwhelming feeling of tutorial hell. We structure learning so you can build real projects.
          </p>
        </div>
      </div>

      {/* Visual Feature Story */}
      <div className="rounded-3xl p-8 sm:p-12 bg-[#10141f] border border-slate-800 shadow-2xl shadow-black/80 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Why We Built FreeStudyHub
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4 leading-snug">
              Stop Paying Thousands For Information That Belongs To The World
            </h2>
            <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed mb-6">
              The modern web has thousands of brilliant instructors and engineers sharing gold-standard tutorials for free on YouTube, GitHub, and technical blogs.
            </p>
            <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed mb-8">
              However, finding the right sequence of content is chaotic. FreeStudyHub organizes this vast ocean of knowledge into sequential pathways, complete with downloadable revision notes and interview questions.
            </p>

            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/60 transition"
            >
              <span>Explore The Learning Vault</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-[#0c101a] flex items-center justify-center p-8 text-center">
            <div className="space-y-4">
              <div className="inline-block p-4 rounded-2xl bg-slate-800 border border-slate-700 text-amber-400">
                <BookOpen size={36} />
              </div>
              <h4 className="text-xl font-bold text-white">Open Education Initiative</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                Empowering the next generation of engineers, self-taught creators, and tech leaders across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
