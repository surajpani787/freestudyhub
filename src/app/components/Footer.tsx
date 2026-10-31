"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  MessageCircle,
  ArrowUp,
  Heart,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About FreeStudyHub" },
  { href: "/courses", label: "Video Courses Vault" },
  { href: "/roadmaps", label: "Developer Roadmaps" },
  { href: "/notes", label: "PDF Notes Library" },
  { href: "/interview", label: "Interview Preparation Kit" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
];

const popularTopics = [
  { href: "/resources?search=React", label: "React 19 Tutorials" },
  { href: "/resources?search=Next", label: "Next.js 15 Masterclasses" },
  { href: "/resources?search=DSA", label: "Data Structures & Algorithms" },
  { href: "/resources?search=Python", label: "Python & Machine Learning" },
  { href: "/resources?search=Docker", label: "Docker & DevOps Pipelines" },
  { href: "/resources?search=Angular", label: "Angular & RxJS Guides" },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/freestudyhub",
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
  },
  {
    href: "https://twitter.com/FreeStudyHub",
    label: "Twitter / X",
    icon: <Twitter size={18} />,
  },
  {
    href: "https://wa.me/91XXXXXXXXXX",
    label: "WhatsApp",
    icon: <MessageCircle size={18} />,
  },
  {
    href: "mailto:freestudyhub24@gmail.com",
    label: "Email",
    icon: <Mail size={18} />,
  },
  {
    href: "https://instagram.com/freestudyhub",
    label: "Instagram",
    icon: <Instagram size={18} />,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto border-t border-white/[0.08] bg-slate-950/90 backdrop-blur-xl w-full min-w-0 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand & Manifesto */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-slate-800 border border-slate-700/80">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/user.png"
                    alt="FreeStudyHub Logo"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                FreeStudy<span className="text-amber-300">Hub</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Empowering self-taught developers, students, and engineers worldwide with 100% free, curated learning resources, industry roadmaps, and cheat sheets.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-[#121724] hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-amber-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Learning Paths */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Top Technologies
            </h4>
            <ul className="space-y-2.5">
              {popularTopics.map((topic) => (
                <li key={topic.label}>
                  <Link
                    href={topic.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-amber-200 transition-colors"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Mission & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Open Education
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                FreeStudyHub is an open educational initiative. All courses and roadmaps reference authorized open educational materials and trusted video sources.
              </p>
              <div className="p-3 rounded-xl bg-[#121724] border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <Heart size={15} className="text-amber-400 shrink-0" />
                <span>Handcrafted for developers worldwide.</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-[#121724] hover:bg-slate-800 border border-slate-800 hover:border-slate-700 hover:text-white transition"
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
            <p>© {new Date().getFullYear()} FreeStudyHub. All rights reserved.</p>
            <span>•</span>
            <Link href="/privacy" className="hover:text-amber-300 transition underline underline-offset-2">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-amber-300 transition underline underline-offset-2">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Built with care for learners worldwide</span>
            <Heart size={13} className="text-rose-400 inline" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}
