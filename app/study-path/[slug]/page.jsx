import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Code2,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";

import { studyPaths } from "../../../data/studyPaths";

export function generateStaticParams() {
  return Object.keys(studyPaths).map((slug) => ({
    slug,
  }));
}

export default async function StudyPathDetailPage({ params }) {
  const { slug } = await params;
  const path = studyPaths[slug];

  if (!path) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Learning Path Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The learning path you are looking for does not exist.
          </p>

          <Link
            href="/study-path"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Study Paths
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F4F8FF] via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-purple-300/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/study-path"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            All Learning Paths
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold text-indigo-600 shadow-sm">
                <Sparkles className="h-4 w-4" />
                {path.category}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {path.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {path.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-700">
                  <GraduationCap className="h-4 w-4" />
                  {path.level}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-purple-100 bg-purple-50 px-4 py-2.5 text-xs font-bold text-purple-700">
                  <Clock3 className="h-4 w-4" />
                  {path.duration}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700">
                  <Code2 className="h-4 w-4" />
                  {path.projects}
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-[0_25px_70px_rgba(37,99,235,0.10)] backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                <Layers3 className="h-6 w-6 text-indigo-600" />
              </div>

              <h2 className="mt-5 text-xl font-extrabold text-slate-900">
                Learning Path Overview
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {path.overview}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                <div className="text-center">
                  <p className="text-lg font-extrabold text-slate-900">
                    {path.topics}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Topics
                  </p>
                </div>

                <div className="border-x border-slate-100 text-center">
                  <p className="text-lg font-extrabold text-slate-900">
                    {path.projects}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Practice
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-lg font-extrabold text-slate-900">
                    {path.duration}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Duration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Roadmap */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
                <BookOpen className="h-4 w-4" />
                Learning Roadmap
              </div>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Follow the Path Step by Step
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Learn each concept in sequence and build your knowledge
                gradually.
              </p>
            </div>

            <div className="space-y-5">
              {path.roadmap.map((item, index) => (
                <div
                  key={item.step}
                  className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/30"
                >
                  <div className="flex gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-sm font-extrabold text-indigo-600">
                      {item.step}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-extrabold text-slate-900">
                          {item.title}
                        </h3>

                        <span className="w-fit rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-400">
                          Step {index + 1}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-600" />

                <h3 className="font-extrabold text-slate-900">
                  Skills You Will Learn
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                {path.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-xl shadow-blue-200/40">
              <Sparkles className="h-6 w-6" />

              <h3 className="mt-4 text-xl font-extrabold">
                Ready to Start?
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Start learning step by step and build your skills with
                practical projects.
              </p>

              <Link
                href="/resources"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-700 transition hover:bg-blue-50"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-bold text-purple-600">
              <Code2 className="h-4 w-4" />
              Practical Learning
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Projects & Practice
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Apply what you learn by working on practical projects and
              strengthening your understanding.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {path.projects.map((project, index) => (
              <div
                key={project}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Code2 className="h-4 w-4" />
                  </div>

                  <span className="text-xs font-bold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {project}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Practical project
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-12 text-center shadow-xl shadow-blue-200/40 sm:px-10">
          <Sparkles className="mx-auto h-7 w-7 text-white/90" />

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Keep Learning. Keep Building.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100">
            Explore more learning paths, resources and practice opportunities
            on NoteQuest.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/study-path"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 transition hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              All Study Paths
            </Link>

            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Practice Problems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}