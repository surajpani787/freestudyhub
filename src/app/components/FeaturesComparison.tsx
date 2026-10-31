import { Check, X, ShieldCheck, BookOpen, HeartHandshake } from "lucide-react";

export default function FeaturesComparison() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#131826] border border-slate-800 text-xs font-medium text-slate-300 mb-3 tracking-wide">
            <ShieldCheck size={14} className="text-amber-400" />
            <span>The FreeStudyHub Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why FreeStudyHub?
            <span className="font-serif italic font-normal text-amber-200/90 block mt-2 text-2xl sm:text-3xl lg:text-4xl">
              Education built for the learner, not the paywall.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            We believe world-class technology education should be open to anyone, anywhere, without financial barriers or subscription gates.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl p-6 bg-[#121724] border border-slate-800/90 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/50">
            <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-amber-400 mb-5">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Free & Open Access</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No subscription tiers, no credit cards required, and no hidden gated chapters. Everything in FreeStudyHub is open for learners globally.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-[#121724] border border-slate-800/90 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/50">
            <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-indigo-400 mb-5">
              <BookOpen size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Careful Human Curation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instead of wading through thousands of unvetted videos, learn from hand-picked playlists, verified project walkthroughs, and official documentation.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-[#121724] border border-slate-800/90 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/50">
            <div className="w-12 h-12 rounded-xl bg-[#0e121d] border border-slate-800 flex items-center justify-center text-emerald-400 mb-5">
              <HeartHandshake size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Resource Access</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              One-click Google Drive links for PDF notes, cheat sheets, and interview prep guides. No email capture walls or download speed caps.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-800 bg-[#10141f] shadow-2xl shadow-black/80 w-full">
          <div className="overflow-x-auto scrollbar-thin w-full">
            <div className="min-w-[440px] sm:min-w-full">
              <div className="grid grid-cols-3 p-3.5 sm:p-6 bg-[#0d101a] border-b border-slate-800/80 text-[11px] sm:text-sm font-semibold uppercase tracking-wider">
                <div className="text-slate-400">Features</div>
                <div className="text-amber-300 text-center font-medium">FreeStudyHub</div>
                <div className="text-slate-400 text-center">Paid Bootcamps ($1000+)</div>
              </div>

              <div className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {[
                  { feature: "Access Cost", fsh: "100% Free Forever", other: "$500 – $15,000" },
                  { feature: "Curated Roadmaps", fsh: "18+ Updated Paths", other: "1 Fixed Curriculum" },
                  { feature: "Downloadable PDF Notes", fsh: "Direct Google Drive", other: "Locked in proprietary apps" },
                  { feature: "Interview Prep Kit", fsh: "High-yield Q&As included", other: "Extra upsell" },
                  { feature: "Learning Pace", fsh: "Self-paced & Flexible", other: "Rigid cohort schedules" },
                  { feature: "Modern Stacks (React 19, Next 15)", fsh: "Regularly Updated", other: "Often outdated by years" },
                ].map((row, idx) => (
                  <div key={row.feature} className={`grid grid-cols-3 p-4 sm:p-5 items-center ${idx % 2 === 0 ? "bg-[#121724]/30" : "bg-[#121724]/60"}`}>
                    <div className="font-medium text-slate-200">{row.feature}</div>
                    <div className="text-center font-medium text-amber-200/90 flex items-center justify-center gap-1.5">
                      <Check size={16} className="text-emerald-400 shrink-0" />
                      <span>{row.fsh}</span>
                    </div>
                    <div className="text-center text-slate-400 flex items-center justify-center gap-1.5">
                      <X size={16} className="text-rose-400/80 shrink-0" />
                      <span>{row.other}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
