import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Sparkles,
  Play,
} from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800" />

      {/* Colorful glows */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 px-6 py-14 shadow-2xl backdrop-blur-xl sm:px-10 lg:px-16 lg:py-16">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Keep Learning
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                One article can change the way you understand technology.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Keep exploring practical concepts, build stronger
                fundamentals and take your next step with NoteQuest.
              </p>

              {/* Benefits */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                  <BookOpen className="h-4 w-4 text-cyan-300" />
                  Learn concepts
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                  <Code2 className="h-4 w-4 text-purple-300" />
                  Build projects
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                  <Sparkles className="h-4 w-4 text-pink-300" />
                  Keep growing
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/resources"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Explore Resources
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Play className="h-4 w-4" />
                  Practice Problems
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto hidden h-64 w-64 lg:block">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />

              <div className="absolute left-8 top-8 flex h-40 w-40 rotate-3 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <BookOpen className="h-20 w-20 text-white" />
              </div>

              <div className="absolute right-0 top-4 flex h-16 w-16 -rotate-6 items-center justify-center rounded-2xl bg-cyan-400 shadow-xl">
                <Code2 className="h-8 w-8 text-white" />
              </div>

              <div className="absolute bottom-4 left-0 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-fuchsia-500 shadow-xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              <div className="absolute bottom-0 right-5 flex h-14 w-14 rounded-2xl bg-white shadow-xl items-center justify-center">
                <ArrowRight className="h-7 w-7 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}