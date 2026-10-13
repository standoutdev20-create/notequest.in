"use client";

import { Compass, Eye, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function MissionVision() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-slate-50 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-badge inline-flex items-center gap-1.5">
            <Sparkles size={13} className="text-blue-600" />
            Our Purpose
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What guides NoteQuest
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A clear purpose for learning today and building skills for tomorrow.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          <article
            className="reveal from-left relative isolate min-h-[340px] overflow-hidden rounded-3xl bg-cover bg-center p-8 sm:p-10 shadow-lg border border-slate-200/50 transition-transform duration-300 hover:-translate-y-1"
            style={{
              backgroundImage: "url('/images/about/mission.jpg')",
            }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/95 via-indigo-950/85 to-blue-950/70" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-blue-200 backdrop-blur-md">
              <Compass size={28} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Our Mission
            </h3>
            <p className="mt-4 max-w-lg leading-8 text-slate-200">
              To make programming and computer science easier to learn by
              bringing organized notes, useful resources, tutorials, and
              practical exercises into one accessible platform.
            </p>
          </article>

          <article
            className="reveal from-right relative isolate min-h-[340px] overflow-hidden rounded-3xl bg-cover bg-center p-8 sm:p-10 shadow-lg border border-slate-200/50 transition-transform duration-300 hover:-translate-y-1"
            style={{
              backgroundImage: "url('/images/about/vision.jpg')",
            }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/95 via-violet-950/85 to-indigo-950/70" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-violet-200 backdrop-blur-md">
              <Eye size={28} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Our Vision
            </h3>
            <p className="mt-4 max-w-lg leading-8 text-slate-200">
              To create a welcoming learning space where students can
              strengthen their fundamentals, develop practical skills, and
              move forward with confidence in technology.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
