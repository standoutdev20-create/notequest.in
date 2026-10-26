
"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Code2,
  Globe,
  Database,
  Monitor,
  Cpu,
  Cloud,
  Smartphone,
  BookOpen,
  Play,
  FileText,
} from "lucide-react";

const categories = [
  { id: "programming", label: "Programming", icon: Code2 },
  { id: "web", label: "Web Development", icon: Globe },
  { id: "data", label: "Data & Databases", icon: Database },
  { id: "cs", label: "Computer Science", icon: Monitor },
  { id: "ai", label: "AI & Machine Learning", icon: Cpu },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "mobile", label: "Mobile Development", icon: Smartphone },
];

const techCards = [
  {
    name: "Python",
    category: "Programming Language",
    categoryId: "programming",
    icon: "🐍",
  },
  {
    name: "Java",
    category: "Programming Language",
    categoryId: "programming",
    icon: "☕",
  },
  {
    name: "JavaScript",
    category: "Web Technology",
    categoryId: "web",
    icon: "JS",
  },
  {
    name: "TypeScript",
    category: "Web Technology",
    categoryId: "web",
    icon: "TS",
  },
  {
    name: "C++",
    category: "Programming Language",
    categoryId: "programming",
    icon: "C++",
  },
  {
    name: "C#",
    category: "Programming Language",
    categoryId: "programming",
    icon: "C#",
  },
  {
    name: "Go",
    category: "Programming Language",
    categoryId: "programming",
    icon: "GO",
  },
  {
    name: "Rust",
    category: "Programming Language",
    categoryId: "programming",
    icon: "🦀",
  },
  {
    name: "React",
    category: "Frontend Development",
    categoryId: "web",
    icon: "⚛️",
  },
  {
    name: "Node.js",
    category: "Backend Development",
    categoryId: "web",
    icon: "⬢",
  },
  {
    name: "SQL",
    category: "Database",
    categoryId: "data",
    icon: "🛢️",
  },
  {
    name: "MongoDB",
    category: "Database",
    categoryId: "data",
    icon: "🍃",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    categoryId: "cloud",
    icon: "🐙",
  },
  {
    name: "Docker",
    category: "DevOps",
    categoryId: "cloud",
    icon: "🐳",
  },
  {
    name: "AWS",
    category: "Cloud Platform",
    categoryId: "cloud",
    icon: "☁️",
  },
  {
    name: "HTML & CSS",
    category: "Web Development",
    categoryId: "web",
    icon: "🌐",
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    categoryId: "web",
    icon: "N",
  },
  {
    name: "Express.js",
    category: "Backend Framework",
    categoryId: "web",
    icon: "ex",
  },
  {
    name: "Linux",
    category: "Operating System",
    categoryId: "cs",
    icon: "🐧",
  },
  {
    name: "AI & ML",
    category: "Artificial Intelligence",
    categoryId: "ai",
    icon: "🧠",
  },
];

export default function ItKnowledgeLibrary() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const filteredTechCards = techCards.filter(
    (tech) => tech.categoryId === activeCategory
  );

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white p-4 font-sans text-slate-800 antialiased selection:bg-blue-200 sm:p-8">
      {/* Background Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-12">
        {/* Left Blue Gradient Sidebar */}
        <div className="relative flex min-h-[620px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-b from-[#1D63FE] via-[#2A6CFF] to-[#437BFF] p-6 text-white shadow-xl lg:col-span-4">
          {/* Subtle Top Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-white/10 blur-2xl"
          />

          <div className="relative z-10">
            {/* Top Pill Header */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
              <BookOpen className="h-3.5 w-3.5" />
              <span>NOTEQUEST LIBRARY</span>
            </div>

            {/* Main Sidebar Title */}
            <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              IT Knowledge
              <br />
              Library
            </h2>

            {/* Description */}
            <p className="mb-6 text-xs font-normal leading-relaxed text-white/80 sm:text-sm">
              Explore essential technologies, concepts, and learning resources
              — all organized in one place.
            </p>

            {/* Category Navigation */}
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                      isActive
                        ? "scale-[1.02] border-white bg-white text-[#1D63FE] shadow-md"
                        : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`h-4 w-4 ${
                          isActive ? "text-[#1D63FE]" : "text-white"
                        }`}
                      />
                      <span>{cat.label}</span>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 ${
                        isActive ? "text-[#1D63FE]" : "text-white/60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Illustration */}
          <div className="relative mt-8 flex items-center justify-center border-t border-white/10 pt-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-8 -top-3 rounded-lg border border-white/30 bg-white/20 p-1.5 text-white backdrop-blur-md">
                <Code2 className="h-3.5 w-3.5" />
              </div>

              <div className="absolute -right-6 -top-4 rounded-lg border border-white/30 bg-white/20 p-1.5 text-white backdrop-blur-md">
                <Play className="h-3.5 w-3.5" />
              </div>

              <div className="absolute -right-8 bottom-0 rounded-lg border border-white/30 bg-white/20 p-1.5 text-white backdrop-blur-md">
                <FileText className="h-3.5 w-3.5" />
              </div>

              <div className="flex h-14 w-24 items-center justify-center rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-md">
                <BookOpen className="h-8 w-8 text-white drop-shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Technology Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8">
          {filteredTechCards.length > 0 ? (
            filteredTechCards.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex min-h-[115px] cursor-pointer flex-col justify-between rounded-2xl border border-blue-100/70 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-5"
              >
                {/* Icon Badge and Decorative Dot */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100/80 bg-slate-50 text-sm font-bold text-slate-700 transition-colors group-hover:bg-blue-50/80 group-hover:text-blue-600">
                    {tech.icon}
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-colors group-hover:bg-blue-400" />
                </div>

                {/* Title and Category */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                    {tech.name}
                  </h3>

                  <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-blue-100/70 bg-white/85 p-10 text-center shadow-sm backdrop-blur-sm">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-slate-300" />

              <h3 className="text-sm font-bold text-slate-700">
                Resources coming soon
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                More technologies will be added to this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
