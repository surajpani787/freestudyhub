"use client";

import React, { useRef, useState } from "react";
import {
  Mail,
  User,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Clock,
} from "lucide-react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await fetch("https://getform.io/f/aolzgdxb", {
        method: "POST",
        body: formData,
      });

      if (formRef.current) {
        formRef.current.reset();
      }

      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0 max-w-full overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
          <MessageSquare size={14} />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          We&apos;d Love to Hear From You
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Have queries, feedback, or a tutorial recommendation? Send us a message and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Mail size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Email Us Directly</h3>
            <p className="text-xs text-slate-400 mb-3">For resource requests, partnerships, or bugs:</p>
            <a
              href="mailto:freestudyhub24@gmail.com"
              className="text-sm font-semibold text-cyan-400 hover:underline"
            >
              freestudyhub24@gmail.com
            </a>
          </div>

          <div className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <Clock size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Response Time</h3>
            <p className="text-xs text-slate-400 mb-1">
              We usually respond within 24–48 hours on business days.
            </p>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-2">
              <CheckCircle2 size={13} /> Active Volunteer Community
            </span>
          </div>

          <div className="rounded-2xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Suggest A Tutorial</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Found an incredible free YouTube course or written guide that helped you? Let us know so thousands of other learners can benefit from it!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-10 bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill in the details below and we&apos;ll get back to you as soon as possible.
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center animate-in fade-in duration-300">
                <CheckCircle2 size={40} className="mx-auto text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-200/80">
                  Thank you for reaching out. We will review your message and reply soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User size={18} />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail size={18} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. alex@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message Or Resource Suggestion
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind, what topic you want to learn, or suggest a resource..."
                    className="w-full p-4 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
