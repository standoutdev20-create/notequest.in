"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const learningPaths = [
  {
    title: "Frontend Developer",
    description:
      "Learn how to build modern, responsive and interactive web applications.",
    type: "Career Path",
    level: "Beginner → Advanced",
    topics: "12 Topics",
    projects: "6 Projects",
    duration: "8–12 Weeks",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "Popular",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-100",
    href: "/study-path/frontend-developer",
  },
  {
    title: "Backend Developer",
    description:
      "Understand servers, APIs, databases and the fundamentals of backend development.",
    type: "Career Path",
    level: "Beginner → Advanced",
    topics: "14 Topics",
    projects: "5 Projects",
    duration: "10–14 Weeks",
    icon: Database,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "Career",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-100",
    href: "/study-path/backend-developer",
  },
  {
    title: "Full Stack Developer",
    description:
      "Build complete web applications by learning frontend, backend and databases.",
    type: "Career Path",
    level: "Intermediate → Advanced",
    topics: "20 Topics",
    projects: "8 Projects",
    duration: "14–18 Weeks",
    icon: Layers3,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    badge: "Recommended",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-100",
    href: "/study-path/full-stack-developer",
  },
  {
    title: "JavaScript",
    description:
      "Master JavaScript fundamentals, modern syntax, DOM, async programming and more.",
    type: "Technology Path",
    level: "Beginner → Advanced",
    topics: "10 Topics",
    projects: "4 Projects",
    duration: "6–8 Weeks",
    icon: Code2,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    badge: "Core Skill",
    badgeStyle: "bg-yellow-50 text-yellow-700 border-yellow-100",
    href: "/study-path/javascript",
  },
  {
    title: "React.js",
    description:
      "Learn React from components and hooks to routing, state management and real projects.",
    type: "Technology Path",
    level: "Intermediate",
    topics: "9 Topics",
    projects: "4 Projects",
    duration: "5–7 Weeks",
    icon: Code2,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    badge: "Popular",
    badgeStyle: "bg-cyan-50 text-cyan-700 border-cyan-100",
    href: "/study-path/react",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Build strong problem-solving skills with essential data structures and algorithms.",
    type: "Technology Path",
    level: "Beginner → Advanced",
    topics: "16 Topics",
    projects: "100+ Problems",
    duration: "10–16 Weeks",
    icon: Brain,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    badge: "Practice",
    badgeStyle: "bg-rose-50 text-rose-700 border-rose-100",
    href: "/study-path/dsa",
  },
  {
    title: "Database & SQL",
    description:
      "Learn SQL, relational databases, queries, joins, normalization and database design.",
    type: "Technology Path",
    level: "Beginner → Intermediate",
    topics: "8 Topics",
    projects: "3 Projects",
    duration: "4–6 Weeks",
    icon: Database,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    badge: "Foundation",
    badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-100",
    href: "/study-path/database-sql",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Understand cloud fundamentals, deployment, CI/CD, containers and DevOps workflows.",
    type: "Technology Path",
    level: "Intermediate",
    topics: "11 Topics",
    projects: "4 Projects",
    duration: "8–12 Weeks",
    icon: Cloud,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    badge: "Trending",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-100",
    href: "/study-path/cloud-devops",
  },
];

export default function StudyPathCards() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      id="learning-paths"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-200/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="reveal mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
            <Sparkles className="h-3.5 w-3.5" />
            Explore Learning Paths
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Choose Your Path
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Whether you are preparing for a career or mastering a specific
            technology, follow a structured path and learn step by step.
          </p>
        </div>

        {/* Career / Technology Filter Visual */}
        <div className="reveal reveal-delay-100 mb-8 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Career + Technology
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500">
            Beginner Friendly
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500">
            Project Based
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path, idx) => {
            const Icon = path.icon;

            return (
              <div
                key={path.title}
                className={`reveal reveal-delay-${((idx % 3) + 1) * 100} group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30`}
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top Row */}
                <div className="relative flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${path.iconBg}`}
                  >
                    <Icon className={`h-6 w-6 ${path.iconColor}`} />
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${path.badgeStyle}`}
                  >
                    {path.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {path.type}
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-blue-700">
                    {path.title}
                  </h3>

                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                    {path.description}
                  </p>
                </div>

                {/* Level */}
                <div className="relative mt-4 rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Level
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-700">
                    {path.level}
                  </p>
                </div>

                {/* Stats */}
                <div className="relative mt-4 grid grid-cols-3 divide-x divide-slate-100 border-y border-slate-100 py-4">
                  <div className="text-center">
                    <p className="text-sm font-extrabold text-slate-900">
                      {path.topics.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {path.topics.split(" ").slice(1).join(" ")}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-extrabold text-slate-900">
                      {path.projects.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {path.projects.split(" ").slice(1).join(" ")}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-extrabold text-slate-900">
                      {path.duration.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {path.duration.includes("Weeks")
                        ? "Weeks"
                        : path.duration}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative mt-5">
                  <Link
                    href={path.href}
                    className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    Start Learning Path
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}