"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  Compass,
  Bookmark,
  Zap,
  CheckCircle2,
  FileText,
  Video,
  Code2,
  BookOpen,
  Database,
  Cloud,
} from "lucide-react";

const hubNodes = [
  { icon: FileText, label: "Notes",   pos: "absolute left-10 top-4"             },
  { icon: Video,    label: "Videos",  pos: "absolute right-10 top-4"            },
  { icon: BookOpen, label: "Docs",    pos: "absolute left-4 top-1/2 -translate-y-1/2" },
  { icon: Code2,    label: "Code",    pos: "absolute right-4 top-1/2 -translate-y-1/2" },
  { icon: Database, label: "Data",    pos: "absolute bottom-4 left-10"          },
  { icon: Cloud,    label: "Cloud",   pos: "absolute bottom-4 right-10"         },
];

const checklist = ["Build Skills", "Practice", "Track Progress", "Achieve Goals"];

export default function WhyChooseUs() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-white px-4 py-20 antialiased sm:px-6 lg:px-8 lg:py-24">
      <div className="section-container">

        {/* ─── Header ─── */}
        <div className="reveal mb-14 text-center">
          <span className="section-badge">
            <Compass className="h-3.5 w-3.5" />
            Why Choose NoteQuest
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Learners Choose{" "}
            <span className="gradient-text">NoteQuest</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            A focused, well-organized and reliable learning platform designed
            for IT students, developers and lifelong learners.
          </p>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">

          {/* Card 1 — Expert Content */}
          <div className="reveal reveal-delay-1 card-hover flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[20px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Learner using NoteQuest"
                className="h-full w-full object-cover"
              />
              {/* Floating labels */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {["Learn", "Watch", "Read", "Practice"].map((label) => (
                  <span
                    key={label}
                    className="self-start rounded-full border border-white/60 bg-white/95 px-3.5 py-1 text-[11px] font-bold text-slate-800 shadow-sm backdrop-blur-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Expert-Curated Content</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Learn from well-structured, easy-to-understand resources
                created and curated around real IT concepts.
              </p>
            </div>
          </div>

          {/* Card 2 — Everything in One Place */}
          <div className="reveal reveal-delay-2 card-hover flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            {/* Hub visual */}
            <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-blue-50/60 via-purple-50/40 to-blue-50/20 border border-slate-100/80 p-6">
              {/* Center hub */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <BookOpen className="h-8 w-8" />
              </div>

              {/* Satellite nodes */}
              {hubNodes.map(({ icon: Icon, label, pos }) => (
                <div key={label} className={`${pos} text-center`}>
                  <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">{label}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Everything in One Place</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Explore notes, videos, references and practice resources
                through one organized learning experience.
              </p>
            </div>
          </div>

          {/* Card 3 — Two stacked cards */}
          <div className="reveal reveal-delay-3 flex flex-col gap-6">
            {/* Learn Your Way */}
            <div className="card-hover flex flex-1 flex-col justify-center rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Bookmark className="h-5 w-5 fill-current" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Learn Your Way</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Access notes, videos, references and practice resources at
                your own pace.
              </p>
            </div>

            {/* Checklist image card */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-100 bg-slate-900 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Students studying together"
                className="h-full w-full object-cover opacity-80"
              />
              {/* Checklist overlay */}
              <div className="absolute right-4 top-1/2 flex w-44 -translate-y-1/2 flex-col gap-2.5 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-2xl backdrop-blur-md">
                {checklist.map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span className="text-[11px] font-bold tracking-tight text-slate-800">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}