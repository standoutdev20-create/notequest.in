import Link from "next/link";
import { BookOpen, Target, TrendingUp } from "lucide-react";

export default function OurStory() {
return ( <section id="our-story" className="bg-white px-6 py-20 sm:py-24"> <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"> <div> <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
Our Story </span>


      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Making IT learning easier to understand
      </h2>

      <p className="mt-6 leading-8 text-slate-600">
        Learning programming can feel confusing when concepts, notes,
        tutorials, and practice problems are spread across different
        places. NoteQuest aims to bring these learning resources into
        one organized space.
      </p>

      <p className="mt-4 leading-8 text-slate-600">
        Our goal is to help learners explore computer science topics,
        build their understanding step by step, and practice what they
        learn at their own pace.
      </p>

      <Link
        href="/study-path"
        className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Explore Learning Paths
      </Link>
    </div>

    <div
      className="relative min-h-[420px] overflow-hidden rounded-3xl bg-cover bg-center shadow-xl"
      style={{
       backgroundImage: "url('/images/about/our-story.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-indigo-950/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 space-y-4 p-7 sm:p-9">
        <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
          <BookOpen className="shrink-0 text-blue-200" size={28} />
          <div>
            <h3 className="font-semibold text-white">
              Structured Learning
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              Concepts organized for easier learning.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
          <Target className="shrink-0 text-violet-200" size={28} />
          <div>
            <h3 className="font-semibold text-white">
              Focused Practice
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              Learn concepts and apply them.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
          <TrendingUp className="shrink-0 text-cyan-200" size={28} />
          <div>
            <h3 className="font-semibold text-white">
              Continuous Growth
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              Make progress at your own pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
