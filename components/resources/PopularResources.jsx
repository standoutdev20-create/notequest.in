"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  PlayCircle,
  Code2,
  Clock,
  Eye,
  TrendingUp,
  Star,
} from "lucide-react";

const popularResources = [
  {
    title: "JavaScript Fundamentals",
    description:
      "Master variables, functions, arrays, objects, DOM, and modern JavaScript concepts.",
    type: "Tutorial",
    icon: Code2,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    rating: "4.9",
    views: "12.4K",
    time: "8 Hours",
    level: "Beginner",
    levelStyle: "bg-emerald-50 text-emerald-600",
    href: "/resources/javascript-fundamentals",
  },
  {
    title: "Operating Systems Complete Notes",
    description:
      "Learn processes, threads, memory management, scheduling, deadlocks, and file systems.",
    type: "Notes",
    icon: BookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    rating: "4.8",
    views: "9.8K",
    time: "32 Pages",
    level: "Intermediate",
    levelStyle: "bg-blue-50 text-blue-600",
    href: "/resources/operating-systems",
  },
  {
    title: "SQL Interview Preparation",
    description:
      "Practice commonly asked SQL queries, joins, subqueries, aggregations, and database concepts.",
    type: "Practice",
    icon: FileText,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    rating: "4.9",
    views: "15.2K",
    time: "60 Problems",
    level: "Intermediate",
    levelStyle: "bg-blue-50 text-blue-600",
    href: "/resources/sql-interview",
  },
  {
    title: "React Hooks Explained",
    description:
      "Understand useState, useEffect, useContext, useRef and custom hooks with practical examples.",
    type: "Video",
    icon: PlayCircle,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    rating: "4.9",
    views: "11.7K",
    time: "2.5 Hours",
    level: "Intermediate",
    levelStyle: "bg-blue-50 text-blue-600",
    href: "/resources/react-hooks",
  },
  {
    title: "Computer Networks Quick Guide",
    description:
      "Revise OSI model, TCP/IP, HTTP, DNS, routing, switching, and networking fundamentals.",
    type: "Reference",
    icon: BookOpen,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    rating: "4.7",
    views: "8.6K",
    time: "26 Pages",
    level: "Beginner",
    levelStyle: "bg-emerald-50 text-emerald-600",
    href: "/resources/computer-networks",
  },
  {
    title: "Git & GitHub Practical Guide",
    description:
      "Learn branches, commits, pull requests, merging, conflicts, and professional Git workflows.",
    type: "Guide",
    icon: Code2,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    rating: "4.8",
    views: "10.1K",
    time: "18 Pages",
    level: "Beginner",
    levelStyle: "bg-emerald-50 text-emerald-600",
    href: "/resources/git-github",
  },
];

export default function PopularResources() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-160px] top-20 h-80 w-80 rounded-full bg-blue-200/20 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-160px] bottom-10 h-80 w-80 rounded-full bg-purple-200/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600">
              <TrendingUp className="h-3.5 w-3.5" />
              Trending Now
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Popular Resources
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore the resources other learners are using most to improve
              their IT skills.
            </p>
          </div>

          <Link
            href="/resources"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore Library
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Resource Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {popularResources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${resource.iconBg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${resource.iconColor}`}
                    />
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-500">
                    <TrendingUp className="h-3 w-3" />
                    Popular
                  </span>
                </div>

                {/* Type */}
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    {resource.type}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-2 flex-1">
                  <h3 className="text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-700">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>
                </div>

                {/* Rating + Views */}
                <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
                    {resource.rating}
                  </span>

                  <span className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {resource.views}
                  </span>
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <Clock className="h-3.5 w-3.5" />
                    {resource.time}
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${resource.levelStyle}`}
                  >
                    {resource.level}
                  </span>
                </div>

                {/* Link */}
                <Link
                  href={resource.href}
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}