"use client";

import React from "react";
import Link from "next/link";
import {
ArrowRight,
BookOpen,
CheckCircle2,
Code2,
GraduationCap,
Sparkles,
Layers3,
} from "lucide-react";

export default function StudyPathHero() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 sm:py-20 lg:py-24">
{/* Background Glows */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" /> <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" /> <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" /> </div>

  {/* Grid Pattern */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.35]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, black 0%, transparent 85%)",
    }}
  />

  <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      {/* Left Content */}
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          Structured Learning Paths
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Your Learning Journey
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Starts Here.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Follow structured IT learning paths designed to take you from
          the basics to practical skills. Learn concepts, practice what
          you learn, and build your way forward.
        </p>

        {/* Learning Points */}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
            Beginner-friendly roadmaps
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600" />
            Step-by-step learning
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-indigo-600" />
            Practice along the way
          </div>

          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-rose-500" />
            Project-focused learning
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#learning-paths"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-200/60"
          >
            Explore Learning Paths
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/subjects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            <BookOpen className="h-4 w-4" />
            Explore Subjects
          </Link>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative mx-auto w-full max-w-lg">
        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-300/30 via-purple-300/25 to-rose-200/20 blur-3xl" />

        {/* Main Roadmap Card */}
        <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_25px_70px_rgba(37,99,235,0.12)] backdrop-blur-xl sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Frontend Development
                </p>
                <p className="text-xs text-slate-400">
                  Beginner → Advanced
                </p>
              </div>
            </div>

            <span className="shrink-0 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 text-[11px] font-bold text-indigo-600">
              Learning Path
            </span>
          </div>

          {/* Roadmap Heading */}
          <div className="mt-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50">
              <Layers3 className="h-4 w-4 text-indigo-600" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Step-by-Step Roadmap
              </p>
              <p className="mt-0.5 text-sm font-bold text-slate-800">
                Follow the learning sequence
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mt-7 space-y-5">
            {/* HTML & CSS */}
            <div className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-200">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="absolute top-9 h-10 w-px bg-gradient-to-b from-blue-200 to-indigo-200" />
              </div>

              <div className="pt-1">
                <p className="text-sm font-bold text-slate-900">
                  HTML & CSS
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Web foundations
                </p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md shadow-indigo-200">
                  <Code2 className="h-4 w-4" />
                </div>
                <div className="absolute top-9 h-10 w-px bg-gradient-to-b from-indigo-200 to-purple-200" />
              </div>

              <div className="pt-1">
                <p className="text-sm font-bold text-slate-900">
                  JavaScript
                </p>
                <p className="mt-1 text-xs text-indigo-500">
                  Programming fundamentals
                </p>
              </div>
            </div>

            {/* React */}
            <div className="flex gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-md shadow-purple-200">
                <BookOpen className="h-4 w-4" />
              </div>

              <div className="pt-1">
                <p className="text-sm font-bold text-slate-700">
                  React.js
                </p>
                <p className="mt-1 text-xs text-purple-500">
                  Build modern interfaces
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-7 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">
            <div className="text-center">
              <p className="text-base font-extrabold text-slate-900">
                12
              </p>
              <p className="mt-1 text-[10px] font-medium text-slate-400">
                Topics
              </p>
            </div>

            <div className="border-x border-slate-100 text-center">
              <p className="text-base font-extrabold text-slate-900">
                6
              </p>
              <p className="mt-1 text-[10px] font-medium text-slate-400">
                Projects
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                Step-by-Step
              </p>
              <p className="mt-1 text-[10px] font-medium text-slate-400">
                Learning
              </p>
            </div>
          </div>
        </div>

        {/* Floating Practice Card */}
        <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-blue-100/50 backdrop-blur-sm sm:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50">
              <Code2 className="h-4 w-4 text-purple-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-800">
                Practice
              </p>
              <p className="text-[9px] text-slate-400">
                Keep improving
              </p>
            </div>
          </div>
        </div>

        {/* Floating Learning Card */}
        <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl shadow-purple-100/50 backdrop-blur-sm sm:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-800">
                Keep Learning
              </p>
              <p className="text-[9px] text-slate-400">
                One step at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
