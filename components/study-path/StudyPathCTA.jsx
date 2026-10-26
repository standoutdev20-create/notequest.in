"use client";

import React from "react";
import Link from "next/link";
import {
ArrowRight,
BookOpen,
CheckCircle2,
Sparkles,
} from "lucide-react";

export default function StudyPathCTA() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 sm:py-20">
{/* Background Glows */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" /> <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" /> <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" /> </div>


  <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-blue-50/90 via-white/90 to-purple-50/90 px-6 py-12 text-center shadow-xl shadow-blue-100/30 backdrop-blur-sm sm:px-10 sm:py-16">
      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-200/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-purple-200/30 blur-2xl" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          Start Your Journey
        </div>

        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Ready to Build Your
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Learning Path?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Stop wondering what to learn next. Choose a path, follow the
          roadmap, practice consistently and keep growing one step at a
          time.
        </p>

        {/* Benefits */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            Structured learning
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-indigo-600" />
            Practical projects
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-purple-600" />
            Learn at your pace
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#learning-paths"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-200/70"
          >
            Explore Learning Paths
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:text-blue-700"
          >
            <BookOpen className="h-4 w-4" />
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
