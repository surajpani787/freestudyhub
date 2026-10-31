import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  Video,
  AlertTriangle,
  Mail,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | FreeStudyHub",
  description:
    "Official Terms and Conditions and Fair Use Educational Disclaimer for FreeStudyHub.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full min-w-0">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to FreeStudyHub</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
          <Scale size={14} />
          <span>Legal Agreement &amp; Fair Use Terms</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          Welcome to FreeStudyHub. These Terms and Conditions govern your access to and use of our educational directory, roadmap aggregator, and learning vault. By using FreeStudyHub, you agree to comply with and be bound by these terms.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Effective Date: October 2026 • Agreement Version 2.4 • Compliant with Global Curation &amp; Copyright Standards
        </p>
      </div>

      {/* Key Guiding Principles Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
            <BookOpen size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Centralized Free Education</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We index and curate publicly available free resources from YouTube and open-education platforms so learners never need to scour dozens of disparate websites.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
            <Video size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">YouTube &amp; Creator Rights</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We do not host or claim ownership of third-party videos. All content is linked or embedded via standard YouTube API guidelines with full credit to original creators.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
            <ShieldCheck size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">100% Non-Commercial</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Zero paywalls, zero subscription fees, and zero monetization of creators&apos; materials. FreeStudyHub exists solely for public student empowerment.
          </p>
        </div>
      </div>

      {/* Detailed Legal Sections */}
      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Scale size={18} className="text-cyan-400" />
            <h2>1. Acceptance of Terms &amp; Eligibility</h2>
          </div>
          <p className="mb-3">
            By creating an account, browsing courses, or using any service provided by FreeStudyHub (&quot;the Platform&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions and our{" "}
            <Link href="/privacy" className="text-cyan-400 hover:underline font-semibold">
              Privacy Policy
            </Link>.
          </p>
          <p className="text-xs text-slate-400">
            You must be at least 13 years of age (or the minimum legal age for digital consent in your jurisdiction) to use our platform. If you are under the legal age, you may use FreeStudyHub only under the direct supervision of a parent or legal guardian.
          </p>
        </section>

        {/* Section 2 - Core Mission & Content Aggregation */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <BookOpen size={18} className="text-indigo-400" />
            <h2>2. Educational Curation &amp; Aggregator Disclaimer</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub functions strictly as a centralized educational aggregator, indexing engine, and directory. Our primary mission is to solve fragmentation in technical education by organizing publicly accessible YouTube masterclasses, verified open-source roadmaps, and community revision notes in one intuitive portal.
          </p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>No Video Hosting or File Duplication:</strong> We do not store, download, re-encode, or host any third-party video tutorials or protected copyright files on our own servers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Compliance with YouTube Terms of Service:</strong> All video courses are presented either via standard YouTube embed players or direct hyperlinks pointing to the original publisher&apos;s YouTube channel, strictly adhering to the{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-0.5"
                >
                  YouTube Terms of Service <ExternalLink size={11} />
                </a>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Attribution &amp; Views:</strong> All video views, watch time, and advertising revenue generated through embedded playback accrue directly to the original YouTube content creator.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3 - Intellectual Property & Fair Use */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <ShieldCheck size={18} className="text-emerald-400" />
            <h2>3. Intellectual Property, Trademarks, &amp; Fair Use</h2>
          </div>
          <p className="mb-3">
            All trademarks, logos, brand names, course titles, channel names, and video materials referenced on FreeStudyHub remain the exclusive intellectual property of their respective owners and educational creators.
          </p>
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
            <p>
              Our inclusion of channel names, tutorial titles, and educational thumbnails constitutes <strong>nominative fair use</strong> under applicable international copyright conventions (including 17 U.S. Code § 107 and equivalent doctrines). This usage is transformative, non-commercial, and aimed purely at cataloging resources for students worldwide.
            </p>
            <p>
              The original software architecture, user interface, brand identity, and proprietary curation algorithms of FreeStudyHub are protected by international copyright and intellectual property laws.
            </p>
          </div>
        </section>

        {/* Section 4 - DMCA & Fast-Track Takedown Policy */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <AlertTriangle size={18} className="text-amber-400" />
            <h2>4. Copyright Protection &amp; DMCA Fast-Track Takedown Policy</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub respects the intellectual property rights of all educators and creators. If you are a copyright owner, content author, or authorized representative and you believe that any curated link, thumbnail, or embedded reference on our platform violates your rights or you simply wish to have your content unlisted, we provide an immediate, fast-track removal process.
          </p>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-xs space-y-3">
            <p className="font-semibold text-white">To submit a takedown or unlisting request, please provide:</p>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-400 pl-1">
              <li>Identification of the copyrighted work claimed to be infringed or linked.</li>
              <li>The exact URL on FreeStudyHub where the curated resource appears.</li>
              <li>Your contact information (name, organization, and official email address).</li>
              <li>A statement confirming your ownership or authorization to act on behalf of the creator.</li>
            </ol>
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-cyan-300">
              <Mail size={15} />
              <span>
                Send requests directly to:{" "}
                <a href="mailto:freestudyhub24@gmail.com" className="font-bold underline hover:text-cyan-200">
                  freestudyhub24@gmail.com
                </a>{" "}
                (Subject: &quot;Content Takedown Request&quot;). We process and remove validated requests within 24 to 48 hours.
              </span>
            </div>
          </div>
        </section>

        {/* Section 5 - User Conduct */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <FileText size={18} className="text-violet-400" />
            <h2>5. User Conduct &amp; Acceptable Use</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub is provided for genuine educational and non-commercial study purposes. When accessing our services, you agree that you will NOT:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-400 pl-2">
            <li>Engage in automated scraping, mass data harvesting, or denial-of-service attacks against our platform.</li>
            <li>Attempt to bypass, disable, or tamper with security features, including our 1-hour session inactivity protector.</li>
            <li>Impersonate any person or misrepresent your affiliation with educational institutions.</li>
            <li>Use the platform for any illegal purpose or in violation of any applicable local, state, national, or international law.</li>
          </ul>
        </section>

        {/* Section 6 - Disclaimers & Limitation of Liability */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Scale size={18} className="text-cyan-400" />
            <h2>6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to index high-yield, accurate, and safe educational materials, we do not guarantee the completeness, accuracy, or continuous availability of third-party external content.
          </p>
          <p className="text-xs text-slate-400">
            To the maximum extent permitted by applicable law, FreeStudyHub and its contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, the platform or any linked educational resources.
          </p>
        </section>

        {/* Section 7 - Governing Law & Contact */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Mail size={18} className="text-indigo-400" />
            <h2>7. Governing Law, Modifications, &amp; Contact</h2>
          </div>
          <p className="mb-3">
            We reserve the right to modify or replace these Terms and Conditions at any time. Material revisions will be accompanied by an updated effective date at the top of this page. Your continued use of the platform after changes are posted constitutes your acceptance of the updated terms.
          </p>
          <div className="p-4 rounded-xl bg-slate-950/40 border border-white/10 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-white">Questions about our Terms?</p>
              <p className="text-slate-400">Our legal and support team is available to assist you.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition text-xs"
            >
              <Mail size={14} />
              <span>Contact Legal Support</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
