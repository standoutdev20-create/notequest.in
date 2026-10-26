import Link from "next/link";
import {
ArrowRight,
ArrowLeft,
BookOpen,
Clock3,
Layers3,
} from "lucide-react";

export default function SubjectDetailsHero({ subject, details }) {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white">
{/* Hero-style Background Glow Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
    {/* Back Button */}
    <Link
      href="/subjects"
      className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
    >
      <ArrowLeft size={17} />
      Back to Subjects
    </Link>

    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left Content */}
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-sm">
          <BookOpen size={16} />
          {subject?.title}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {details?.title}
        </h1>

        <p className="mt-5 text-xl font-semibold text-blue-600">
          {details?.tagline}
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {details?.overview}
        </p>

        {/* Quick Information */}
        <div className="mt-7 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
            <Layers3 size={17} className="text-blue-600" />
            {subject?.topics} Topics
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
            <Clock3 size={17} className="text-purple-600" />
            {subject?.duration}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/resources"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start Learning
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
          >
            Practice
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-lg">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-3 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={details?.heroImage}
              alt={details?.title || "Subject learning"}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
