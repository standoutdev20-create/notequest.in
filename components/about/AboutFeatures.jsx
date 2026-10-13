"use client";

import Link from "next/link";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Map,
  PlayCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    title: "Notes & Resources",
    description:
      "Explore useful notes and references to strengthen your fundamentals.",
    href: "/resources",
    image: "/images/about/feature-notes.jpg",
    icon: BookOpen,
  },
  {
    title: "IT Subjects",
    description:
      "Discover programming languages and important computer science topics.",
    href: "/subjects",
    image: "/images/about/feature-subjects.jpg",
    icon: GraduationCap,
  },
  {
    title: "Coding Practice",
    description:
      "Improve your problem-solving skills with programming challenges.",
    href: "/practice",
    image: "/images/about/feature-practice.jpg",
    icon: Code2,
  },
  {
    title: "Learning Videos",
    description: "Learn concepts through helpful video tutorials and masterclasses.",
    href: "/videos",
    image: "/images/about/feature-videos.jpg",
    icon: PlayCircle,
  },
  {
    title: "Study Paths",
    description:
      "Give your learning journey direction with structured topic paths.",
    href: "/study-path",
    image: "/images/about/feature-study-paths.jpg",
    icon: Map,
  },
];

export default function AboutFeatures() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-badge inline-flex items-center gap-1.5">
            <Sparkles size={13} className="text-blue-600" />
            Explore NoteQuest
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything to support your learning
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Explore different ways to learn, practice, and grow your technical
            knowledge with structured paths and interactive tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.title}
                href={feature.href}
                className={`reveal reveal-delay-${((idx % 3) + 1) * 100} group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-cover bg-center p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-7 border border-slate-200/50`}
                style={{
                  backgroundImage: `url('${feature.image}')`,
                }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 transition duration-300 group-hover:via-indigo-950/80" />

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <ArrowUpRight size={18} />
                </div>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-blue-200 backdrop-blur-md shadow-sm">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-300">
                  {feature.title}
                </h3>
                <p className="mt-2.5 max-w-sm text-sm leading-6 text-slate-200">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
