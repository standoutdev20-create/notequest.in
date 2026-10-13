"use client";

import {
  BookOpen,
  Code2,
  Compass,
  Layers3,
  Lightbulb,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const principles = [
  {
    icon: BookOpen,
    title: "Organized Resources",
    description:
      "Find notes and learning materials arranged around useful topics.",
  },
  {
    icon: Lightbulb,
    title: "Clear Explanations",
    description:
      "Build understanding by learning concepts one step at a time.",
  },
  {
    icon: Code2,
    title: "Learn by Practicing",
    description:
      "Strengthen your knowledge by applying it to coding problems.",
  },
  {
    icon: Compass,
    title: "Structured Learning",
    description:
      "Follow learning paths to give your studies more direction.",
  },
  {
    icon: Layers3,
    title: "Multiple Formats",
    description:
      "Explore notes, tutorials, references, and other learning resources.",
  },
  {
    icon: TrendingUp,
    title: "Your Own Pace",
    description:
      "Keep improving steadily according to your learning goals.",
  },
];

export default function WhatMakesUsDifferent() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-cover bg-center px-6 py-20 sm:py-24"
      style={{
        backgroundImage: "url('/images/about/what-makes-us-different.jpg')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-slate-950/85 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md">
            <Sparkles size={13} />
            Why NoteQuest
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A better way to explore IT
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            A learning experience designed around clarity, practice, and
            consistent progress.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, idx) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`reveal reveal-delay-${((idx % 3) + 1) * 100} rounded-3xl border border-white/15 bg-white/[0.08] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/50 hover:bg-white/[0.14] hover:shadow-2xl hover:shadow-blue-500/10`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/20 text-blue-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
