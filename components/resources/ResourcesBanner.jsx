
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  FileText,
  Code2,
  Bookmark,
  Sparkles,
} from "lucide-react";

export default function ResourcesBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue Animated Glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] animate-pulse rounded-full bg-blue-300/20 blur-3xl" />

        {/* Purple Animated Glow */}
        <div
          className="absolute -right-32 top-20 h-[420px] w-[420px] animate-pulse rounded-full bg-purple-300/20 blur-3xl"
          style={{ animationDelay: "700ms" }}
        />

        {/* Soft Coral Glow */}
        <div
          className="absolute left-[42%] top-[18%] h-[220px] w-[220px] animate-pulse rounded-full bg-rose-300/15 blur-[100px]"
          style={{ animationDelay: "1200ms" }}
        />

        {/* Bottom Indigo Glow */}
        <div
          className="absolute bottom-[-120px] left-1/2 h-[360px] w-[600px] -translate-x-1/2 animate-pulse rounded-full bg-indigo-300/20 blur-[120px]"
          style={{ animationDelay: "500ms" }}
        />

        {/* Moving Light */}
        <div
          className="absolute left-[20%] top-[30%] h-24 w-24 animate-pulse rounded-full bg-sky-300/20 blur-[60px]"
          style={{ animationDelay: "900ms" }}
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Image Area */}
        <div className="relative flex min-h-[430px] items-center justify-center sm:min-h-[500px]">
          {/* Large Image Glow */}
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-tr from-blue-300/30 via-indigo-300/25 to-purple-300/30 blur-[90px] sm:h-[500px] sm:w-[500px]" />

          {/* Coral Light */}
          <div
            className="absolute left-[25%] top-[35%] h-28 w-28 animate-pulse rounded-full bg-rose-300/20 blur-[70px]"
            style={{ animationDelay: "1000ms" }}
          />

          <div
            className="absolute right-[23%] top-[28%] h-32 w-32 animate-pulse rounded-full bg-blue-300/20 blur-[75px]"
            style={{ animationDelay: "400ms" }}
          />

          {/* Decorative Dots */}
          <div className="absolute right-[12%] top-[10%] grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400"
                style={{ animationDelay: `${index * 120}ms` }}
              />
            ))}
          </div>

          {/* Floating Notes Icon */}
          <div className="absolute left-[7%] top-[22%] hidden h-12 w-12 animate-bounce items-center justify-center rounded-2xl border border-blue-100 bg-white/90 text-blue-500 shadow-lg shadow-blue-100/50 backdrop-blur-sm sm:flex lg:left-[15%]">
            <BookOpen className="h-5 w-5" />
          </div>

          {/* Floating Video Icon */}
          <div
            className="absolute right-[7%] top-[27%] hidden h-12 w-12 animate-bounce items-center justify-center rounded-2xl border border-purple-100 bg-white/90 text-purple-500 shadow-lg shadow-purple-100/50 backdrop-blur-sm sm:flex lg:right-[15%]"
            style={{ animationDelay: "800ms" }}
          >
            <PlayCircle className="h-5 w-5" />
          </div>

          {/* Floating Reference Icon */}
          <div
            className="absolute bottom-[12%] left-[15%] hidden h-11 w-11 animate-pulse items-center justify-center rounded-xl border border-indigo-100 bg-white/90 text-indigo-500 shadow-lg shadow-indigo-100/50 backdrop-blur-sm lg:flex"
            style={{ animationDelay: "500ms" }}
          >
            <FileText className="h-5 w-5" />
          </div>

          {/* Floating Practice Icon */}
          <div
            className="absolute bottom-[10%] right-[15%] hidden h-11 w-11 animate-pulse items-center justify-center rounded-xl border border-blue-100 bg-white/90 text-blue-500 shadow-lg shadow-blue-100/50 backdrop-blur-sm lg:flex"
            style={{ animationDelay: "1100ms" }}
          >
            <Code2 className="h-5 w-5" />
          </div>

          {/* Sparkle */}
          <div
            className="absolute left-[22%] top-[12%] hidden animate-pulse text-indigo-400 sm:block"
            style={{ animationDelay: "300ms" }}
          >
            <Sparkles className="h-5 w-5" />
          </div>

          {/* Bookmark */}
          <div
            className="absolute bottom-[17%] right-[22%] hidden animate-pulse text-purple-400 sm:block"
            style={{ animationDelay: "900ms" }}
          >
            <Bookmark className="h-5 w-5" />
          </div>

          {/* Main Image */}
          <div className="relative z-10 flex w-full items-center justify-center">
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-rose-300/15 blur-[90px]" />

            <div
              className="relative w-full max-w-[650px]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 72% 70% at center, black 48%, rgba(0,0,0,0.85) 62%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 72% 70% at center, black 48%, rgba(0,0,0,0.85) 62%, transparent 100%)",
              }}
            >
              <Image
                src="/images/resources/resources-hero.png"
                alt="Student exploring learning resources"
                width={900}
                height={700}
                priority
                className="h-auto w-full object-contain drop-shadow-[0_25px_45px_rgba(37,99,235,0.16)]"
              />
            </div>
          </div>

          {/* Bottom Atmospheric Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-[#F4F8FE] via-[#F4F8FE]/50 to-transparent" />
        </div>

        {/* Text */}
        <div className="relative z-30 mx-auto -mt-1 max-w-3xl text-center sm:-mt-3">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Your Learning Library
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find What You Need.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learn Something New.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Discover useful notes, tutorials, references and practice
            resources — all organized to help you learn concepts faster and
            build stronger IT skills.
          </p>

          {/* Resource Types */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
              Quick Notes
            </span>

            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600">
              Tutorials
            </span>

            <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-600">
              References
            </span>

            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-600">
              Practice
            </span>
          </div>

          {/* CTA */}
          <Link
            href="#explore"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:scale-95"
          >
            Browse Learning Library
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

