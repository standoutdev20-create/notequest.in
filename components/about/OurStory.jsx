"use client";

import Link from "next/link";
import { BookOpen, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function OurStory() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} id="our-story" className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal from-left">
          <span className="section-badge inline-flex items-center gap-1.5">
            <Sparkles size={13} className="text-blue-600" />
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Making IT learning easier to understand
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Learning programming can feel confusing when concepts, notes,
            tutorials, and practice problems are spread across different
            places. NoteQuest brings these learning resources into
            one organized space.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Our goal is to help learners explore computer science topics,
            build their understanding step by step, and practice what they
            learn at their own pace.
          </p>

          <Link
            href="/study-path"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Explore Learning Paths
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          className="reveal from-right relative min-h-[440px] overflow-hidden rounded-3xl bg-cover bg-center shadow-xl border border-slate-200/50"
          style={{
            backgroundImage: "url('/images/about/our-story.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-indigo-950/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 space-y-3.5 p-7 sm:p-9">
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
              <BookOpen className="shrink-0 text-blue-200" size={26} />
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Structured Learning
                </h3>
                <p className="mt-0.5 text-xs text-slate-200">
                  Concepts organized for easier learning.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
              <Target className="shrink-0 text-violet-200" size={26} />
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Focused Practice
                </h3>
                <p className="mt-0.5 text-xs text-slate-200">
                  Learn concepts and apply them with real code.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/15">
              <TrendingUp className="shrink-0 text-cyan-200" size={26} />
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Continuous Growth
                </h3>
                <p className="mt-0.5 text-xs text-slate-200">
                  Make measurable progress at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
