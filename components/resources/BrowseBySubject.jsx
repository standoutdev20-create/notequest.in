"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Globe,
  Database,
  Cloud,
  Brain,
  ShieldCheck,
  Network,
  Boxes,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const subjects = [
  {
    title: "Programming",
    description: "Learn programming concepts, syntax, logic and problem solving.",
    resources: "35+ Resources",
    icon: Code2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/subjects/programming",
  },
  {
    title: "Web Development",
    description: "Build modern websites and web applications from the ground up.",
    resources: "45+ Resources",
    icon: Globe,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/subjects/web-development",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Understand DSA concepts and improve your coding problem solving.",
    resources: "50+ Resources",
    icon: Boxes,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/subjects/dsa",
  },
  {
    title: "Database & SQL",
    description: "Learn databases, SQL queries, normalization and data management.",
    resources: "30+ Resources",
    icon: Database,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    href: "/subjects/database",
  },
  {
    title: "Cloud & DevOps",
    description: "Explore cloud platforms, deployment, CI/CD and DevOps basics.",
    resources: "25+ Resources",
    icon: Cloud,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    href: "/subjects/cloud-devops",
  },
  {
    title: "AI & Machine Learning",
    description: "Explore AI concepts, machine learning and modern intelligent systems.",
    resources: "28+ Resources",
    icon: Brain,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    href: "/subjects/ai-ml",
  },
  {
    title: "Cyber Security",
    description: "Learn security fundamentals, threats, protection and best practices.",
    resources: "20+ Resources",
    icon: ShieldCheck,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/subjects/cyber-security",
  },
  {
    title: "Computer Networks",
    description: "Understand networking fundamentals, protocols and communication.",
    resources: "22+ Resources",
    icon: Network,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    href: "/subjects/computer-networks",
  },
];

export default function BrowseBySubject() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-200/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Explore By Subject
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Find Resources By Subject
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Choose a subject and explore notes, tutorials, references and
              practice resources related to it.
            </p>
          </div>

          <Link
            href="/subjects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            View All Subjects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subject Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <Link
                key={subject.title}
                href={subject.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-2xl ${subject.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 ${subject.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="relative mt-5 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-700">
                  {subject.title}
                </h3>

                {/* Description */}
                <p className="relative mt-2 text-sm leading-6 text-slate-500">
                  {subject.description}
                </p>

                {/* Footer */}
                <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-400">
                    {subject.resources}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}