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
} from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white font-sans text-slate-800 antialiased selection:bg-blue-200">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* Hero Intro */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur">
            <GraduationCap className="h-4 w-4" />
            Your IT Learning Companion
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything You Need
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learn IT.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Notes, videos, references and practice resources — organized in
            one place to help you learn, practice and progress.
          </p>

          {/* Search */}
          <div className="mx-auto mt-7 max-w-2xl">
            <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-blue-100/40 transition-all focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100/60">
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
                className="hidden shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 sm:block"
              >
                Search
              </button>
            </div>
          </div>

          {/* Quick Search */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="mr-1 font-medium text-slate-400">
              Popular:
            </span>

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
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 font-medium text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative mt-8 flex min-h-[460px] items-center justify-center">
          {/* Dashed Arrow - Left */}
          <svg
            className="pointer-events-none absolute left-[15%] top-[32%] hidden h-24 w-28 text-blue-300 lg:block"
            viewBox="0 0 120 100"
            fill="none"
          >
            <path
              d="M5 85 C35 85, 55 65, 105 25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <path
              d="M98 24 L106 23 L103 31"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          {/* Dashed Arrow - Right */}
          <svg
            className="pointer-events-none absolute right-[15%] top-[32%] hidden h-24 w-28 text-indigo-300 lg:block"
            viewBox="0 0 120 100"
            fill="none"
          >
            <path
              d="M115 85 C85 85, 65 65, 15 25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <path
              d="M22 24 L14 23 L17 31"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          {/* Structured Notes Card */}
          <div className="absolute left-0 top-8 hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-100/40 transition-transform duration-300 hover:-translate-y-1 lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BookOpen className="h-5 w-5" />
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              Structured Notes
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Learn concepts with clean, organized and easy-to-understand
              notes.
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* References Card */}
          <div className="absolute right-0 top-8 hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-indigo-100/40 transition-transform duration-300 hover:-translate-y-1 lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <LinkIcon className="h-5 w-5" />
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              References
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Discover useful documentation, websites and learning resources.
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600">
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Learning Videos Card */}
          <div className="absolute bottom-6 left-[8%] hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-purple-100/40 transition-transform duration-300 hover:-translate-y-1 lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Play className="h-5 w-5 fill-current" />
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              Learning Videos
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Watch selected tutorials and visual explanations for difficult
              concepts.
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-purple-600">
              Watch
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Practice Card */}
          <div className="absolute bottom-6 right-[8%] hidden w-56 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-emerald-100/40 transition-transform duration-300 hover:-translate-y-1 lg:block">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Lightbulb className="h-5 w-5" />
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              Practice
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Strengthen your skills with programming and IT practice
              problems.
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-600">
              Practice
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute left-[28%] top-[18%] hidden h-12 w-12 rotate-[-10deg] items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-500 shadow-lg shadow-blue-100/50 lg:flex">
            <Code2 className="h-5 w-5" />
          </div>

          <div className="absolute right-[28%] top-[18%] hidden h-12 w-12 rotate-[10deg] items-center justify-center rounded-2xl border border-indigo-100 bg-white text-indigo-500 shadow-lg shadow-indigo-100/50 lg:flex">
            <Database className="h-5 w-5" />
          </div>

          <div className="absolute bottom-[22%] left-[28%] hidden h-12 w-12 rotate-[8deg] items-center justify-center rounded-2xl border border-purple-100 bg-white text-purple-500 shadow-lg shadow-purple-100/50 lg:flex">
            <Box className="h-5 w-5" />
          </div>

          <div className="absolute bottom-[22%] right-[28%] hidden h-12 w-12 rotate-[-8deg] items-center justify-center rounded-2xl border border-sky-100 bg-white text-sky-500 shadow-lg shadow-sky-100/50 lg:flex">
            <Layers className="h-5 w-5" />
          </div>

          {/* Center Student */}
          <div className="relative z-10 flex items-end justify-center">
            {/* Circular Glow */}
            <div className="absolute bottom-0 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 blur-2xl" />

            {/* Decorative Circle */}
            <div className="absolute bottom-0 h-[380px] w-[380px] rounded-full border border-blue-200/60" />

            {/* White Arch */}
            <div className="absolute bottom-0 h-[340px] w-[300px] rounded-t-[160px] bg-white/80 shadow-xl shadow-blue-100/30" />

            <img
              src="/images/girlImage.svg"
              alt="NoteQuest Student Companion"
              className="relative z-10 h-auto w-full max-w-[340px] rounded-b-2xl object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(37,99,235,0.12)]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}