"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is FreeStudyHub really 100% free? Are there any hidden fees?",
    answer:
      "Yes, FreeStudyHub is completely 100% free forever. There are zero subscriptions or hidden charges. All roadmaps, video courses, PDF notes, and interview prep kits are free to access and download.",
  },
  {
    question: "How do I download the PDF study notes and interview kits?",
    answer:
      "Simply navigate to the Notes or Interview Kit pages and click 'Download PDF' or 'Open Document'. You will be taken directly to the verified Google Drive files where you can read online or download straight to your device.",
  },
  {
    question: "How are the tutorials and learning resources curated?",
    answer:
      "We manually review and vet content based on production relevance, clarity, up-to-date syntax (e.g. Next.js 15, React 19, TypeScript), and practical hands-on projects. We filter out fluff and outdated material so you only learn what modern tech companies look for.",
  },
  {
    question: "Which roadmap should I start with if I am a complete beginner?",
    answer:
      "If you are new to programming, we recommend starting with the 'Frontend Developer' roadmap. It provides immediate visual feedback as you learn HTML, CSS, and JavaScript. Alternatively, if you are interested in data or AI, start with the 'Python' and 'Computer Science' roadmaps.",
  },
  {
    question: "Can I contribute new resources or request a topic?",
    answer:
      "Absolutely! We love community suggestions. Visit our Contact page to send recommendations for high-quality tutorials, notes, or topics you want to see added to FreeStudyHub.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-20 relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3 uppercase tracking-wider">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to know about FreeStudyHub and how to accelerate your learning.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="font-semibold text-sm sm:text-base text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300/90 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
