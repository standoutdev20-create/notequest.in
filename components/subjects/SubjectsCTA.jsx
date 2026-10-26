import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function SubjectsCTA() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Background Decorations */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-12 shadow-2xl shadow-blue-500/15 sm:px-10 lg:px-14 lg:py-16">
      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-white/10" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
          <Sparkles size={27} strokeWidth={1.8} />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-blue-100">
          Start Learning Today
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to build your IT skills?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
          Choose a subject, follow a structured learning path and start
          building the knowledge you need for your IT journey.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#subjects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Subjects
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/study-path"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            <BookOpen size={18} />
            View Study Paths
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
