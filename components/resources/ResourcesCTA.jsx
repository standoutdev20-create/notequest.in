
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Code2,
  PlayCircle,
} from "lucide-react";

export default function ResourcesCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 sm:py-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-12 text-center shadow-xl shadow-blue-100/30 sm:px-10 sm:py-16">
          {/* Decorative Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />

          {/* Floating Icons */}
          <div className="pointer-events-none absolute left-[8%] top-[20%] hidden h-11 w-11 rotate-[-8deg] items-center justify-center rounded-2xl border border-blue-100 bg-white/80 text-blue-500 shadow-sm sm:flex">
            <BookOpen className="h-5 w-5" />
          </div>

          <div className="pointer-events-none absolute right-[8%] top-[25%] hidden h-11 w-11 rotate-[8deg] items-center justify-center rounded-2xl border border-purple-100 bg-white/80 text-purple-500 shadow-sm sm:flex">
            <PlayCircle className="h-5 w-5" />
          </div>

          <div className="pointer-events-none absolute bottom-[18%] left-[15%] hidden h-10 w-10 rotate-[6deg] items-center justify-center rounded-xl border border-indigo-100 bg-white/80 text-indigo-500 shadow-sm lg:flex">
            <Code2 className="h-4 w-4" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Keep Learning
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Ready to Take Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                IT Skills Further?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Explore more resources, practice real problems, and follow
              structured learning paths to keep growing every day.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/subjects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:scale-95"
              >
                Explore Subjects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/practice"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Practice Problems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

