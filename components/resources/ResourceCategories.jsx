
"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  PlayCircle,
  FileText,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Quick Notes",
    description:
      "Short and structured notes to understand important IT concepts quickly.",
    icon: BookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    count: "40+ Resources",
    href: "/resources?type=notes",
  },
  {
    title: "Tutorials",
    description:
      "Step-by-step tutorials to learn technologies and build practical skills.",
    icon: PlayCircle,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    count: "25+ Tutorials",
    href: "/resources?type=tutorials",
  },
  {
    title: "References",
    description:
      "Useful references, guides, and documentation for quick technical lookup.",
    icon: FileText,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    count: "30+ Guides",
    href: "/resources?type=references",
  },
  {
    title: "Practice",
    description:
      "Practice problems and coding challenges to improve your programming skills.",
    icon: Code2,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    count: "50+ Problems",
    href: "/practice",
  },
];

export default function ResourceCategories() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 sm:py-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-indigo-600 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Explore Resources
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Learn Your Way
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Choose the type of learning resource that fits your current goal
            and start learning at your own pace.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100/40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${category.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-semibold text-slate-400">
                    {category.count}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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

