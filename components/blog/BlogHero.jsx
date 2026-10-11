"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Sparkles,
  BookOpen,
  Code2,
  Database,
  Layers3,
  Lightbulb,
} from "lucide-react";

export default function BlogHero() {
  const [search, setSearch] = useState("");

  const quickTopics = [
    "JavaScript",
    "React",
    "Web Development",
    "DSA",
    "Database",
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-pink-400/15 blur-3xl" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Soft Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Learn • Explore • Grow
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Ideas, Insights &
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Knowledge for Developers.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore practical articles, programming concepts, development
              tutorials and career insights designed to help you learn
              technology one step at a time.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-2xl">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_15px_45px_rgba(37,99,235,0.10)]">
                <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, topics or technologies..."
                  className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Quick Topics */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-medium text-slate-500">
                Popular:
              </span>

              {quickTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSearch(topic)}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Main glow */}
            <div className="absolute inset-10 rounded-[3rem] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-3xl" />

            {/* Decorative circles */}
            <div className="absolute -right-4 top-8 h-24 w-24 rounded-full border border-purple-200 bg-purple-100/40 blur-sm" />
            <div className="absolute -left-5 bottom-10 h-20 w-20 rounded-full border border-blue-200 bg-blue-100/50" />

            {/* Main Visual */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 p-5 shadow-[0_30px_80px_rgba(79,70,229,0.18)]">
              {/* Inner background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.20),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.14),transparent_40%)]" />

              {/* Image-like content panel */}
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-xl backdrop-blur-xl">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <div className="h-3 w-3 rounded-full bg-pink-500" />
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    NoteQuest Blog
                  </span>
                </div>

                {/* Central visual */}
                <div className="relative mt-8 flex min-h-[290px] items-center justify-center">
                  <div className="absolute h-52 w-52 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl" />

                  <div className="relative flex h-48 w-48 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-indigo-500/30">
                    <div className="absolute inset-3 rounded-[2rem] border border-white/20" />

                    <BookOpen className="h-20 w-20 text-white" />

                    <div className="absolute -right-5 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                      <Code2 className="h-7 w-7 text-blue-600" />
                    </div>

                    <div className="absolute -bottom-5 -left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                      <Database className="h-7 w-7 text-purple-600" />
                    </div>

                    <div className="absolute -bottom-7 right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl">
                      <Lightbulb className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      Featured
                    </span>
                    <span className="text-xs text-slate-400">
                      Developer Insights
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Learn something useful every day.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Tutorials, concepts and practical knowledge for your
                    development journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Article Card */}
            <div className="absolute -left-8 top-20 hidden w-52 rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur md:block">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                <Layers3 className="h-5 w-5 text-blue-600" />
              </div>

              <p className="text-xs font-semibold text-blue-600">
                WEB DEVELOPMENT
              </p>

              <p className="mt-1 text-sm font-bold leading-5 text-slate-800">
                Build better websites step by step.
              </p>
            </div>

            {/* Floating Learning Card */}
            <div className="absolute -right-6 bottom-14 hidden w-48 rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Keep learning</p>
                  <p className="text-sm font-bold text-slate-800">
                    One article at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Topic Strip */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Explore what interests you
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Find practical knowledge across popular IT topics.
              </p>
            </div>

            <Link
              href="#latest-articles"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Browse Latest Articles
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}