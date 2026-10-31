"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play, BookOpen, CheckCircle2 } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export interface ResourceItem {
  title: string;
  description: string;
  link: string;
  image: string;
  category?: string;
}

interface ResourceCardProps {
  resource: ResourceItem;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative flex flex-col justify-between h-full w-full max-w-full min-w-0 rounded-xl bg-[#121724] hover:bg-[#161d2e] border border-slate-800/90 hover:border-slate-700 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50">
      <div className="w-full min-w-0">
        {/* Clickable Thumbnail Container */}
        <Link
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
          aria-label={`Open ${resource.title}`}
        >
          {!imageError && resource.image ? (
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#0d101a] text-center">
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 mb-1.5">
                <BookOpen size={20} />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300">
                {resource.category || "Tutorial"}
              </span>
            </div>
          )}

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none gap-1.5">
            {resource.category && (
              <span className="truncate max-w-[110px] px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#0e121d]/90 text-slate-300 border border-slate-700/80 shadow-sm">
                {resource.category}
              </span>
            )}
            <span className="shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-red-950/80 text-red-300 border border-red-500/30 shadow-sm">
              <FaYoutube size={11} className="text-red-400 shrink-0" />
              <span>Video</span>
            </span>
          </div>

          {/* Play Icon Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform">
              <Play size={15} fill="currentColor" className="ml-0.5" />
            </div>
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-2.5 sm:p-3 flex flex-col justify-between">
          <div>
            <Link
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/title focus:outline-none"
            >
              <h3 className="font-semibold text-white text-xs sm:text-[13px] group-hover/title:text-amber-200 transition-colors line-clamp-2 leading-snug tracking-tight">
                {resource.title}
              </h3>
            </Link>
            <p className="mt-1 text-[11px] text-slate-400 line-clamp-1 leading-relaxed">
              {resource.description || "Curated in-depth tutorial and real-world project guide."}
            </p>
          </div>

          <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
            <CheckCircle2 size={11} className="shrink-0" />
            <span>100% Free Full Tutorial</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-2.5 sm:p-3 pt-0">
        <Link
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-[11px] font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-all duration-150 group/btn"
        >
          <span>Watch Tutorial</span>
          <ExternalLink size={11} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
