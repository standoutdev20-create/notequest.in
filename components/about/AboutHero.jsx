"use client";

import Link from "next/link";
import { BookOpen, Code2, Sparkles } from "lucide-react";

export default function AboutHero() {
return (
<section
className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-slate-950 bg-cover bg-center"
style={{
backgroundImage: "url('/images/about/AboutHero.jpg')",
}}
> <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-indigo-950/90 to-slate-950/45" /> <div className="absolute inset-0 -z-10 bg-slate-950/20" />


  <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-md">
        <Sparkles size={16} />
        About NoteQuest
      </span>

      <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        Learn with purpose.
        <span className="mt-2 block bg-gradient-to-r from-blue-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
          Grow with confidence.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
        NoteQuest brings programming concepts, structured notes,
        learning resources, and practice together to make your IT
        learning journey clearer and more practical.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/subjects"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500"
        >
          Explore Subjects
        </Link>

        <Link
          href="#our-story"
          className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
        >
          Our Story
        </Link>
      </div>
    </div>

    <div className="hidden lg:flex lg:justify-end">
      <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-slate-950/50 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
            <BookOpen size={25} />
          </div>
          <div>
            <p className="font-semibold text-white">Learn the concepts</p>
            <p className="mt-1 text-sm text-slate-300">
              Build a strong foundation
            </p>
          </div>
        </div>

        <div className="my-5 h-px bg-white/10" />

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">
            <Code2 size={25} />
          </div>
          <div>
            <p className="font-semibold text-white">Practice with purpose</p>
            <p className="mt-1 text-sm text-slate-300">
              Turn knowledge into skills
            </p>
          </div>
        </div>

        <div className="my-5 h-px bg-white/10" />

        <div className="rounded-2xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 p-4">
          <p className="text-sm font-medium text-indigo-100">
            Your learning journey
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            Learn. Build. Improve.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


);
}