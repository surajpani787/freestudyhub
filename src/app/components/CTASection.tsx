import Link from "next/link";
import { ArrowRight, BookOpen, Map } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden w-full min-w-0 max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 bg-[#111624] border border-slate-800 shadow-2xl shadow-black/80 text-center overflow-hidden w-full">
          {/* Subtle Warm Overhead Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161c2e] border border-slate-800 text-xs font-medium text-slate-300 mb-6 tracking-wide">
              <BookOpen size={14} className="text-amber-400" />
              <span>Free Forever • Open Archive</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to build real software depth?
              <span className="font-serif italic font-normal text-amber-200/95 block mt-2 text-2xl sm:text-4xl">
                No subscriptions. No paywalls. Ever.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300/80 max-w-xl mx-auto">
              Access 5,000+ curated tutorials, download verified study notes, and master step-by-step career tracks today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/resources"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/60 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <BookOpen size={18} />
                <span>Explore Curated Resources</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/roadmaps"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-200 bg-[#161d2e] hover:bg-[#1c2438] border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              >
                <Map size={18} className="text-amber-400" />
                <span>View Roadmaps</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
