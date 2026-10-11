import React from "react";
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

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F7F9FF] px-4 py-16 font-sans antialiased text-slate-800 sm:px-6 lg:px-8 lg:py-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
            <Compass className="h-4 w-4 text-indigo-600" />
            <span>Why Choose NoteQuest</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Learners Choose{" "}
            <span className="text-[#4361EE]">NoteQuest</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            A focused, well-organized and reliable learning platform designed
            for IT students, developers and lifelong learners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-6">
            {/* Image */}
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[20px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Learner using NoteQuest"
                className="h-full w-full object-cover"
              />

              {/* Floating Labels */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {["Learn", "Watch", "Read", "Practice"].map((label) => (
                  <span
                    key={label}
                    className="self-start rounded-full border border-white/60 bg-white/95 px-3.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 text-slate-400">
                <BookOpen className="h-5 w-5" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Expert-Curated Content
              </h3>

              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                Learn from well-structured, easy-to-understand resources
                created and curated around real IT concepts.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-6">
            {/* Learning Hub */}
            <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-slate-100/80 bg-gradient-to-b from-blue-50/40 via-purple-50/30 to-blue-50/20 p-6">
              {/* Center */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <BookOpen className="h-8 w-8" />
              </div>

              {/* Notes */}
              <div className="absolute left-10 top-4 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <FileText className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Notes
                </span>
              </div>

              {/* Videos */}
              <div className="absolute right-10 top-4 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <Video className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Videos
                </span>
              </div>

              {/* Docs */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Docs
                </span>
              </div>

              {/* Code */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <Code2 className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Code
                </span>
              </div>

              {/* Data */}
              <div className="absolute bottom-4 left-10 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <Database className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Data
                </span>
              </div>

              {/* Cloud */}
              <div className="absolute bottom-4 right-10 text-center">
                <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm">
                  <Cloud className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium text-slate-500">
                  Cloud
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-white shadow-md shadow-blue-500/20">
                <Zap className="h-5 w-5 fill-current" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Everything in One Place
              </h3>

              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                Explore notes, videos, references and practice resources
                through one organized learning experience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-6">
            {/* Learn Your Way */}
            <div className="flex flex-1 flex-col justify-center rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#3B82F6]">
                <Bookmark className="h-5 w-5 fill-current" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Learn Your Way
              </h3>

              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                Access notes, videos, references and practice resources at
                your own pace.
              </p>
            </div>

            {/* Checklist Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-100 bg-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Students studying together"
                className="h-full w-full object-cover opacity-85"
              />

              {/* Checklist */}
              <div className="absolute right-4 top-1/2 flex w-40 -translate-y-1/2 flex-col gap-2.5 rounded-2xl border border-white/60 bg-white/95 p-3.5 shadow-xl backdrop-blur-md">
                {[
                  "Build Skills",
                  "Practice",
                  "Track Progress",
                  "Achieve Goals",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                    <span className="text-[11px] font-bold tracking-tight text-slate-800">
                      {text}
                    </span>
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