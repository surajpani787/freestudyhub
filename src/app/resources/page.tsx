"use client";

import { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { resources } from "../lib/data";
import ResourceCard, { ResourceItem } from "../components/ResourcesCard";
import {
  Search,
  Layers,
  X,
  BookOpen,
  Filter,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const categories = ["All", ...Object.keys(resources)] as (
  | "All"
  | keyof typeof resources
)[];

const INITIAL_LIMIT = 20;
const BATCH_SIZE = 12;

function ResourcesContent() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<"All" | keyof typeof resources>("All");
  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [itemLimit, setItemLimit] = useState(INITIAL_LIMIT);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
  }, [urlSearch]);

  // Memoize flattened resources
  const allResources = useMemo(
    () =>
      Object.entries(resources).flatMap(([category, items]) =>
        items.map((res) => ({ ...res, category }))
      ),
    []
  );

  // Filtered resources
  const filteredResources = useMemo(() => {
    let result = allResources;

    if (selectedCategory !== "All") {
      result = result.filter((res) => res.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      const lower = searchTerm.toLowerCase();
      result = result.filter(
        (res) =>
          res.title.toLowerCase().includes(lower) ||
          res.description.toLowerCase().includes(lower) ||
          (res.category && res.category.toLowerCase().includes(lower))
      );
    }

    return result;
  }, [searchTerm, selectedCategory, allResources]);

  const displayedResources = filteredResources.slice(0, itemLimit);
  const hasMore = displayedResources.length < filteredResources.length;

  // Infinite Scroll on scroll via IntersectionObserver (no button)
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setItemLimit((prev) => Math.min(prev + BATCH_SIZE, filteredResources.length));
        }
      },
      {
        root: null,
        rootMargin: "400px 0px", // Trigger well before hitting absolute bottom for seamless UX
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, filteredResources.length]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setItemLimit(INITIAL_LIMIT);
  };

  return (
    <div className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300 mb-2.5 uppercase tracking-wider">
          <BookOpen size={13} />
          <span>Curated Video Courses & Guides</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Learning Courses Vault
        </h1>
        <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Browse verified video courses, complete masterclasses, and project-based tutorials hand-selected for real-world software engineering.
        </p>
      </div>

      {/* Search and Filters Hub */}
      <div className="mb-6 sm:mb-8 space-y-3.5 w-full min-w-0">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search size={16} className="text-cyan-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setItemLimit(INITIAL_LIMIT);
            }}
            placeholder="Search tutorials (React, DSA, Docker)..."
            className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm transition shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setItemLimit(INITIAL_LIMIT);
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Mobile Dropdown Select for Instant Category Pick */}
        <div className="block sm:hidden w-full">
          <label htmlFor="mobile-category" className="sr-only">
            Select Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-400">
              <Filter size={14} />
            </div>
            <select
              id="mobile-category"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value as "All" | keyof typeof resources);
                setItemLimit(INITIAL_LIMIT);
              }}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-900/90 border border-white/15 text-slate-200 text-xs font-medium focus:outline-none focus:border-cyan-400"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-slate-900 text-white">
                  {cat === "All" ? "All Categories" : cat.replace(/_/g, " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Horizontal Scrolling Pill List */}
        <div className="w-full max-w-full min-w-0 overflow-x-auto pb-1.5 scrollbar-thin">
          <div className="flex items-center gap-1.5 flex-nowrap sm:flex-wrap sm:justify-center w-max sm:w-full min-w-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setItemLimit(INITIAL_LIMIT);
                  }}
                  className={`px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm shadow-cyan-500/25 border border-cyan-400/40"
                      : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.replace(/_/g, " ")}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1.5 border-t border-white/[0.06]">
          <span>
            Showing <strong className="text-cyan-400 font-semibold">{displayedResources.length}</strong> of{" "}
            <strong className="text-white font-semibold">{filteredResources.length}</strong>
            {selectedCategory !== "All" && ` in ${selectedCategory.replace(/_/g, " ")}`}
          </span>

          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={resetFilters}
              className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
            >
              <X size={12} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Resources Cards Grid (Smaller & 4-Column on Desktop) */}
      {displayedResources.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-3.5 w-full min-w-0">
          {displayedResources.map((res, index) => (
            <ResourceCard
              key={`${res.title}-${index}`}
              resource={res as ResourceItem}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-14 rounded-2xl bg-slate-900/30 border border-white/10 p-6">
          <Layers size={36} className="mx-auto text-slate-600 mb-2.5" />
          <h3 className="text-base font-bold text-white mb-1.5">No resources found</h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto mb-4">
            We couldn&apos;t find any tutorials matching your current search or category filter.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Infinite Scroll Sentinel & Status Indicator (No Button) */}
      <div ref={sentinelRef} className="w-full py-8 flex flex-col items-center justify-center">
        {hasMore ? (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-400 backdrop-blur-md">
            <Loader2 size={15} className="animate-spin text-cyan-400" />
            <span>Loading more tutorials...</span>
          </div>
        ) : displayedResources.length > 0 ? (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>All {filteredResources.length} tutorials loaded</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-400 text-sm">Loading resources...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}
