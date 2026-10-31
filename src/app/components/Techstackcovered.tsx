"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
} from "react-icons/si";
import { ArrowRight, Layers } from "lucide-react";

type Category = "All" | "Frontend" | "Backend" | "Database" | "DevOps & Cloud";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Cloud";
  icon: React.ReactNode;
  color: string;
  tag: string;
  description: string;
}

const technologies: TechItem[] = [
  {
    name: "React 19",
    category: "Frontend",
    icon: <FaReact className="text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30",
    tag: "UI Library",
    description: "Hooks, Server Components, Concurrent Mode",
  },
  {
    name: "Next.js 15",
    category: "Frontend",
    icon: <SiNextdotjs className="text-white" />,
    color: "from-slate-500/20 to-slate-800/20 border-white/20",
    tag: "Full Stack",
    description: "App Router, SSR, Server Actions",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: <SiTypescript className="text-blue-400" />,
    color: "from-blue-500/20 to-indigo-600/20 border-blue-500/30",
    tag: "Typed JS",
    description: "Type safety, generics, interfaces",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-teal-400" />,
    color: "from-teal-500/20 to-cyan-600/20 border-teal-500/30",
    tag: "Styling",
    description: "Utility-first modern styling engine",
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: <FaAngular className="text-red-500" />,
    color: "from-red-500/20 to-pink-600/20 border-red-500/30",
    tag: "Enterprise",
    description: "Signals, standalone components, RxJS",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript className="text-yellow-400" />,
    color: "from-yellow-500/20 to-amber-600/20 border-yellow-500/30",
    tag: "Core Web",
    description: "ES6+, Async/Await, DOM manipulation",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="text-emerald-500" />,
    color: "from-emerald-500/20 to-green-600/20 border-emerald-500/30",
    tag: "Runtime",
    description: "Event-driven REST APIs & microservices",
  },
  {
    name: "Python",
    category: "Backend",
    icon: <FaPython className="text-yellow-400" />,
    color: "from-yellow-500/20 to-blue-600/20 border-yellow-500/30",
    tag: "Language",
    description: "Backend APIs, AI/ML, automation scripting",
  },
  {
    name: "Django",
    category: "Backend",
    icon: <SiDjango className="text-emerald-600" />,
    color: "from-emerald-600/20 to-teal-700/20 border-emerald-600/30",
    tag: "Framework",
    description: "Batteries-included secure web framework",
  },
  {
    name: "Java",
    category: "Backend",
    icon: <FaJava className="text-orange-400" />,
    color: "from-orange-500/20 to-red-600/20 border-orange-500/30",
    tag: "Enterprise",
    description: "Spring Boot, OOP, high-concurrency systems",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="text-green-500" />,
    color: "from-green-500/20 to-emerald-600/20 border-green-500/30",
    tag: "NoSQL",
    description: "Document store, aggregation pipeline",
  },
  {
    name: "MySQL / SQL",
    category: "Database",
    icon: <SiMysql className="text-blue-400" />,
    color: "from-blue-500/20 to-cyan-600/20 border-blue-500/30",
    tag: "Relational",
    description: "Relational schemas, queries, indexing",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="text-indigo-400" />,
    color: "from-indigo-500/20 to-blue-600/20 border-indigo-500/30",
    tag: "RDBMS",
    description: "Advanced relational, JSONB, indexing",
  },
  {
    name: "Docker",
    category: "DevOps & Cloud",
    icon: <FaDocker className="text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30",
    tag: "Containers",
    description: "Images, Compose, containerized workflows",
  },
  {
    name: "Kubernetes",
    category: "DevOps & Cloud",
    icon: <SiKubernetes className="text-blue-500" />,
    color: "from-blue-500/20 to-indigo-600/20 border-blue-500/30",
    tag: "Orchestration",
    description: "Cluster management, pods, deployments",
  },
  {
    name: "AWS Cloud",
    category: "DevOps & Cloud",
    icon: <FaAws className="text-amber-500" />,
    color: "from-amber-500/20 to-orange-600/20 border-amber-500/30",
    tag: "Cloud Services",
    description: "EC2, S3, Lambda serverless, IAM",
  },
];

const categories: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Cloud",
];

export default function Techstackcovered() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filtered =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-12 sm:py-20 relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-3 tracking-wide">
              <Layers size={14} className="text-amber-400" />
              <span>Full Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Technologies You Can Master{" "}
              <span className="font-serif italic font-normal text-amber-200/90 hidden sm:inline">
                in depth.
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-xs sm:text-base max-w-xl">
              From foundational computer science to distributed systems and cloud infrastructure—explore curated pathways for each discipline.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 mt-5 md:mt-0 p-1.5 rounded-2xl bg-[#121724] border border-slate-800/90 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-slate-800 text-amber-200 border border-slate-700/80 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-6 w-full min-w-0">
          {filtered.map((item) => (
            <Link
              key={item.name}
              href={`/resources?search=${encodeURIComponent(item.name.replace(/\s\d+$/, ""))}`}
              className="group relative p-3.5 sm:p-5 rounded-2xl bg-[#121724] hover:bg-[#161d2e] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl sm:text-4xl p-2.5 rounded-xl bg-[#0e121d] border border-slate-800 group-hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-300 transition-colors">
                <span>View Free Resources</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
