"use client";

import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  BookOpen,
  Play,
  Link as LinkIcon,
  Lightbulb,
  GraduationCap,
  Code2,
  Database,
  Box,
  Layers,
  Sparkles,
} from "lucide-react";

const featureCards = [
  {
    icon: BookOpen,
    title: "Structured Notes",
    desc: "Learn concepts with clean, organized notes.",
    link: "Explore",
    color: "blue",
  },
  {
    icon: LinkIcon,
    title: "References",
    desc: "Useful documentation and learning resources.",
    link: "Explore",
    color: "indigo",
  },
  {
    icon: Play,
    title: "Learning Videos",
    desc: "Watch curated tutorials and explanations.",
    link: "Watch",
    color: "purple",
  },
  {
    icon: Lightbulb,
    title: "Practice",
    desc: "Strengthen your skills with real problems.",
    link: "Practice",
    color: "emerald",
  },
];

const colorMap = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",    link: "text-blue-600"    },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600",  link: "text-indigo-600"  },
  purple:  { bg: "bg-purple-50",  text: "text-purple-600",  link: "text-purple-600"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", link: "text-emerald-600" },
};

const floatingIcons = [
  { icon: Code2,    pos: "absolute left-[28%] top-[18%]",           rotate: "-10deg", color: "text-blue-500",   border: "border-blue-100",   delay: "animate-float" },
  { icon: Database, pos: "absolute right-[28%] top-[18%]",          rotate: "10deg",  color: "text-indigo-500", border: "border-indigo-100", delay: "animate-float-delay" },
  { icon: Box,      pos: "absolute bottom-[22%] left-[28%]",         rotate: "8deg",   color: "text-purple-500", border: "border-purple-100", delay: "animate-float-slow" },
  { icon: Layers,   pos: "absolute bottom-[22%] right-[28%]",        rotate: "-8deg",  color: "text-sky-500",    border: "border-sky-100",   delay: "animate-float-reverse" },
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#E8F0FE] via-[#F2F7FF] to-white font-sans text-slate-800 antialiased">

      {/* ─── Background Glows ─── */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />

      {/* ─── Main ─── */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">

        {/* Hero Intro */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-5 py-2 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Your IT Learning Companion
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[64px]">
            Everything You Need
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learn IT.
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Notes, videos, references and practice resources — organized in
            one place to help you learn, practice and progress.
          </p>

          {/* Search */}
          <div className="animate-fade-in-up animate-delay-300 mx-auto mt-8 max-w-2xl">
            <div className="flex items-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-blue-100/40 transition-all focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100/60">
              <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for any topic (e.g. Python, DBMS, Operating Systems...)"
                className="w-full bg-transparent px-3 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="hidden shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:block"
              >
                Search
              </button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="animate-fade-in-up animate-delay-400 mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="mr-1 font-semibold text-slate-400">Popular:</span>
            {[
              "Data Structures",
              "DBMS",
              "Operating Systems",
              "Web Development",
              "Computer Networks",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSearchQuery(item)}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-semibold text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Hero Visual ─── */}
        <div className="animate-fade-in-up animate-delay-500 relative mt-10 flex min-h-[460px] items-center justify-center">

          {/* Dashed Arrow – Left */}
          <svg
            className="pointer-events-none absolute left-[15%] top-[32%] hidden h-24 w-28 text-blue-300 lg:block"
            viewBox="0 0 120 100"
            fill="none"
          >
            <path d="M5 85 C35 85, 55 65, 105 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M98 24 L106 23 L103 31" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Dashed Arrow – Right */}
          <svg
            className="pointer-events-none absolute right-[15%] top-[32%] hidden h-24 w-28 text-indigo-300 lg:block"
            viewBox="0 0 120 100"
            fill="none"
          >
            <path d="M115 85 C85 85, 65 65, 15 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M22 24 L14 23 L17 31" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Feature Cards — positioned around the center */}
          {/* Top Left — Structured Notes */}
          <div className="animate-float absolute left-0 top-8 hidden w-56 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-xl shadow-blue-100/40 transition-shadow duration-300 hover:shadow-2xl lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Structured Notes</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Learn concepts with clean, organized and easy-to-understand notes.</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Top Right — References */}
          <div className="animate-float-delay absolute right-0 top-8 hidden w-56 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-xl shadow-indigo-100/40 transition-shadow duration-300 hover:shadow-2xl lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <LinkIcon className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">References</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Discover useful documentation, websites and learning resources.</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Bottom Left — Learning Videos */}
          <div className="animate-float-slow absolute bottom-6 left-[8%] hidden w-56 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-xl shadow-purple-100/40 transition-shadow duration-300 hover:shadow-2xl lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Play className="h-5 w-5 fill-current" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Learning Videos</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Watch selected tutorials and visual explanations for difficult concepts.</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-purple-600">
              Watch <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Bottom Right — Practice */}
          <div className="animate-float-delay absolute bottom-6 right-[8%] hidden w-56 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-xl shadow-emerald-100/40 transition-shadow duration-300 hover:shadow-2xl lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Practice</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">Strengthen your skills with programming and IT practice problems.</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
              Practice <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Floating Tech Icons */}
          {floatingIcons.map(({ icon: Icon, pos, rotate, color, border, delay }, i) => (
            <div
              key={i}
              style={{ transform: `rotate(${rotate})` }}
              className={`${pos} ${delay} hidden h-12 w-12 items-center justify-center rounded-2xl border bg-white ${border} ${color} shadow-lg lg:flex`}
            >
              <Icon className="h-5 w-5" />
            </div>
          ))}

          {/* ─── Center Visual ─── */}
          <div className="relative z-10 flex items-end justify-center">
            {/* Circular glow */}
            <div className="absolute bottom-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 blur-2xl" />
            {/* Decorative ring */}
            <div className="absolute bottom-0 h-[400px] w-[400px] animate-float-slow rounded-full border border-blue-200/50" />
            {/* White arch base */}
            <div className="absolute bottom-0 h-[340px] w-[300px] rounded-t-[160px] bg-white/85 shadow-xl shadow-blue-100/30" />

            <img
              src="/images/girlImage.svg"
              alt="NoteQuest Student Companion"
              className="relative z-10 h-auto w-full max-w-[340px] rounded-b-2xl object-contain object-bottom drop-shadow-[0_20px_30px_rgba(37,99,235,0.15)]"
            />
          </div>
        </div>

        {/* ─── Mobile Feature Cards (shown below hero on small screens) ─── */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
          {featureCards.map(({ icon: Icon, title, desc, link, color }) => {
            const c = colorMap[color];
            return (
              <div key={title} className="card-hover rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
                <div className={`mt-3 flex items-center gap-1 text-xs font-semibold ${c.link}`}>
                  {link} <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}