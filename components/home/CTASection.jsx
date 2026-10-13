"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Code2, Play, BookOpen, Cloud, Users, Sparkles } from "lucide-react";

const floatingIcons = [
  { icon: Code2,    pos: "absolute left-0 top-20",    bg: "bg-white", color: "text-blue-600"   },
  { icon: Play,     pos: "absolute right-0 top-32",   bg: "bg-white", color: "text-purple-600", fill: true },
  { icon: BookOpen, pos: "absolute bottom-24 left-2", bg: "bg-white", color: "text-blue-600"   },
  { icon: Cloud,    pos: "absolute left-1/2 top-0 -translate-x-1/2", bg: "bg-white", color: "text-blue-600" },
];

const footerLinks = {
  "Quick Links": [
    { label: "Home",       href: "/" },
    { label: "Study Path", href: "/study-path" },
    { label: "Practice",   href: "/practice" },
    { label: "About",      href: "/about" },
  ],
  "Learning Resources": [
    { label: "Subjects",        href: "/subjects" },
    { label: "Resources",       href: "/resources" },
    { label: "Learning Videos", href: "/videos" },
    { label: "Blog",            href: "/blog" },
  ],
};

export default function CTASection() {
  const ctaRef = useReveal();
  const footerRef = useReveal();

  return (
    <>
      {/* ════════════════ CTA SECTION ════════════════ */}
      <section ref={ctaRef} className="relative overflow-hidden bg-white py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Decorative rings */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full border border-blue-100 opacity-60" />
        <div className="absolute -left-20 top-32 h-80 w-80 rounded-full border border-purple-100 opacity-60" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-purple-100 opacity-60" />
        <div className="absolute -right-20 bottom-12 h-80 w-80 rounded-full border border-blue-100 opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* ─── Left Content ─── */}
            <div className="reveal from-left relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                STRUCTURED IT PROGRESSION
              </div>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learning Journey?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Build strong IT fundamentals, follow structured learning
                paths, practice real problems, and grow your skills one step
                at a time.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/subjects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* ─── Right Visual ─── */}
            <div className="reveal from-right relative mx-auto h-[480px] w-full max-w-lg">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-3xl" />

              {/* Main gradient card */}
              <div className="absolute inset-x-8 bottom-0 top-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/20" />
                <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-white">Learn. Build. Grow.</h3>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-blue-100">
                    Everything you need to build your IT knowledge and improve
                    your technical skills.
                  </p>

                  <div className="mt-8 flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 backdrop-blur-sm">
                    <Users className="h-5 w-5 text-white" />
                    <span className="text-sm font-semibold text-white">Your learning journey starts here</span>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              {floatingIcons.map(({ icon: Icon, pos, bg, color, fill }, i) => (
                <div
                  key={i}
                  className={`${pos} animate-float flex h-14 w-14 items-center justify-center rounded-2xl ${bg} shadow-xl`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <Icon className={`h-6 w-6 ${color} ${fill ? "fill-current" : ""}`} />
                </div>
              ))}

              {/* AI badge */}
              <div className="absolute bottom-16 right-2 animate-float-delay flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                <span className="text-lg font-extrabold text-purple-600">AI</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer ref={footerRef} className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">

            {/* ─── Brand ─── */}
            <div className="reveal lg:col-span-4">
              <Link href="/">
                <h3 className="text-2xl font-extrabold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NoteQuest
                  </span>
                </h3>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                Learn programming and computer science with structured
                resources, practical learning paths, videos, references, and
                coding practice.
              </p>

              <form className="mt-6 flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-l-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 transition-colors focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="gradient-bg rounded-r-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* ─── Links ─── */}
            {Object.entries(footerLinks).map(([title, links], i) => (
              <div key={title} className={`reveal reveal-delay-${i + 2} lg:col-span-2`}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {title}
                </h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-gray-400 transition-colors hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ─── Connect ─── */}
            <div className="reveal reveal-delay-4 lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Connect With Us
              </h4>
              <p className="mt-5 text-sm leading-6 text-gray-400">
                Stay connected and get the latest learning resources and updates.
              </p>

              <div className="mt-6 flex gap-3">
                {[
                  { label: "in",  aria: "LinkedIn",  hover: "hover:border-blue-500 hover:text-blue-400"  },
                  { label: <Code2 className="h-4 w-4" />, aria: "GitHub", hover: "hover:border-blue-500 hover:text-blue-400" },
                  { label: "@",   aria: "Instagram", hover: "hover:border-pink-500 hover:text-pink-400"  },
                  { label: "YT",  aria: "YouTube",   hover: "hover:border-red-500 hover:text-red-400"    },
                ].map(({ label, aria, hover }) => (
                  <a
                    key={aria}
                    href="#"
                    aria-label={aria}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-xs font-bold text-gray-400 transition-all ${hover}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ─── Divider + Bottom ─── */}
          <div className="my-10 h-px bg-gray-800" />

          <div className="flex flex-col gap-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 NoteQuest. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="#" className="transition-colors hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}