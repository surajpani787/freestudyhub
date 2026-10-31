import Link from "next/link";
import {
  ShieldCheck,
  Cookie,
  Lock,
  Eye,
  Database,
  Clock,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Mail,
  UserCheck,
  Video,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | FreeStudyHub",
  description:
    "Official Privacy Policy, Cookie Usage, and Data Protection Standards for FreeStudyHub.",
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck size={14} />
          <span>Transparent &amp; Privacy-First Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          At FreeStudyHub, privacy is a fundamental human right. We believe in providing free software engineering education without compromising your personal privacy or exploiting your personal data.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Last Updated: October 2026 • Compliant with GDPR, California CCPA/CPRA, and India DPDP Act 2023 • Version 2.4
        </p>
      </div>

      {/* Key Guarantees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
            <Database size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Zero Tracking Databases</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your cookie preferences and UI settings are stored purely inside your browser client (localStorage and local cookies). We never store ad profiles in any database.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
            <Lock size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">OAuth Only (No Passwords)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            We use Google and GitHub OAuth via Clerk. We never receive, store, or process plaintext passwords on our servers.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0a0f1d]/80 border border-white/10">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
            <Clock size={18} />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">1-Hour Inactivity Auto-Logout</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our automated session protector wipes your active tokens after 60 minutes of dormancy to safeguard your privacy on public and shared machines.
          </p>
        </div>
      </div>

      {/* Detailed Legal Sections */}
      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Eye size={18} className="text-cyan-400" />
            <h2>1. Information We Collect &amp; Receive</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub collects only the minimal data strictly necessary to authenticate your learning session and maintain security:
          </p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>OAuth Profile Data:</strong> When you sign in via Google or GitHub OAuth, our authentication provider (Clerk) provides us with your display name, public avatar URL, and verified email address.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Session Security Timestamps:</strong> We record timestamp activity in your browser&apos;s <code className="text-cyan-300 bg-white/[0.06] px-1 py-0.5 rounded">sessionStorage</code> to enforce our 1-hour auto-logout security safeguard.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Financial or Payment Information:</strong> FreeStudyHub is 100% free with no paid tiers. We never collect, process, or store credit card, bank, or billing details.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Cookie size={18} className="text-indigo-400" />
            <h2>2. Cookie Usage &amp; Local Storage Architecture</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub operates exclusively with essential client-side cookies and browser web storage mechanisms. We do NOT use invasive cross-site tracking cookies or marketing pixels.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-2.5 pr-4 font-semibold">Storage Key / Cookie</th>
                  <th className="py-2.5 pr-4 font-semibold">Storage Type</th>
                  <th className="py-2.5 pr-4 font-semibold">Duration</th>
                  <th className="py-2.5 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-400">
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-cyan-300">fsh_cookie_consent</td>
                  <td className="py-2.5 pr-4">localStorage &amp; Cookie</td>
                  <td className="py-2.5 pr-4">1 Year</td>
                  <td className="py-2.5">Stores your mandatory cookie &amp; privacy acceptance.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-cyan-300">fsh_user_session</td>
                  <td className="py-2.5 pr-4">sessionStorage</td>
                  <td className="py-2.5 pr-4">Active Session (Max 1 hr)</td>
                  <td className="py-2.5">Provides instant 0ms navbar rendering. Wiped upon logout.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-cyan-300">fsh_last_active</td>
                  <td className="py-2.5 pr-4">sessionStorage</td>
                  <td className="py-2.5 pr-4">Active Session</td>
                  <td className="py-2.5">Tracks user inactivity to trigger auto-logout after 60 mins.</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-mono text-cyan-300">__session</td>
                  <td className="py-2.5 pr-4">HTTP Cookie</td>
                  <td className="py-2.5 pr-4">Session</td>
                  <td className="py-2.5">Encrypted authentication token managed by Clerk OAuth.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 - Third-Party Educational Resources & YouTube */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Video size={18} className="text-emerald-400" />
            <h2>3. Third-Party Educational Resources &amp; YouTube Privacy</h2>
          </div>
          <p className="mb-3">
            FreeStudyHub curates and organizes publicly accessible video courses hosted on YouTube and community platforms. When you interact with embedded YouTube video players on our site:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-400 pl-2">
            <li>
              YouTube may receive standard playback data according to the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-0.5"
              >
                Google Privacy Policy
              </a>.
            </li>
            <li>FreeStudyHub does not monitor, sell, or collect your video watch history or browsing behavior.</li>
            <li>All creator views and YouTube analytics flow directly to the original video publishers.</li>
          </ul>
        </section>

        {/* Section 4 - Global Data Rights (GDPR, CCPA, DPDP) */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <UserCheck size={18} className="text-cyan-400" />
            <h2>4. Your Global Privacy Rights (GDPR, CCPA/CPRA, India DPDP)</h2>
          </div>
          <p className="mb-3">
            Regardless of where you reside, FreeStudyHub guarantees the following universal privacy rights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
              <p className="font-bold text-white mb-1">Right to Access &amp; Portability</p>
              <p className="text-slate-400">You may inspect all profile and session information stored in your account at any time.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
              <p className="font-bold text-white mb-1">Right to Complete Deletion (&quot;Forget Me&quot;)</p>
              <p className="text-slate-400">Upon request, we will permanently purge all account records from our authentication registry.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
              <p className="font-bold text-white mb-1">Right to Non-Discrimination</p>
              <p className="text-slate-400">FreeStudyHub is 100% free for all students. Exercising your privacy rights never degrades your learning access.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
              <p className="font-bold text-white mb-1">Right to Opt Out of Sale / Sharing</p>
              <p className="text-slate-400">We do not sell, rent, or commercialize your personal information to any third party under any circumstance.</p>
            </div>
          </div>
        </section>

        {/* Section 5 - Data Retention & Security */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Lock size={18} className="text-violet-400" />
            <h2>5. Data Security &amp; Encryption</h2>
          </div>
          <p className="mb-3">
            All data transmitted between your browser and FreeStudyHub is encrypted in transit using industry-standard TLS 1.3 (HTTPS). Authentication tokens are cryptographically signed using modern asymmetric key algorithms via Clerk.
          </p>
          <p className="text-xs text-slate-400">
            When you click &quot;Log Out of FreeStudyHub&quot;, all local session data in <code className="text-cyan-300 bg-white/[0.06] px-1 py-0.5 rounded">sessionStorage</code> and authentication cookies are completely purged in real time (0ms).
          </p>
        </section>

        {/* Section 6 - Contact */}
        <section className="p-6 rounded-2xl bg-slate-900/40 border border-white/10">
          <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
            <Mail size={18} className="text-cyan-400" />
            <h2>6. Privacy Inquiries &amp; Data Officer Contact</h2>
          </div>
          <p className="mb-3">
            If you have questions regarding this Privacy Policy, wish to exercise your data rights, or want to submit an account deletion request, please reach out to our privacy team:
          </p>
          <div className="p-4 rounded-xl bg-slate-950/40 border border-white/10 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-white">FreeStudyHub Privacy Team</p>
              <p className="text-slate-400">Email: <a href="mailto:freestudyhub24@gmail.com" className="text-cyan-300 underline font-semibold">freestudyhub24@gmail.com</a></p>
            </div>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold transition text-xs border border-white/10"
            >
              <FileText size={14} />
              <span>Read Terms and Conditions</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
