"use client";

import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  Layers3,
  Network,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const categories = [
  {
    name: "JavaScript",
    description: "Modern JavaScript concepts and practical techniques.",
    href: "/blog?category=javascript",
    icon: Braces,
    gradient: "from-yellow-100 via-orange-50 to-white",
    iconBg: "bg-yellow-400",
    iconColor: "text-white",
  },
  {
    name: "React",
    description: "Build modern and reusable interfaces with React.",
    href: "/blog?category=react",
    icon: Code2,
    gradient: "from-cyan-100 via-blue-50 to-white",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
  },
  {
    name: "Web Development",
    description: "Frontend, UI and modern web development ideas.",
    href: "/blog?category=web-development",
    icon: Layers3,
    gradient: "from-blue-100 via-indigo-50 to-white",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    name: "DSA",
    description: "Understand data structures and algorithms step by step.",
    href: "/blog?category=dsa",
    icon: Network,
    gradient: "from-purple-100 via-fuchsia-50 to-white",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
  },
  {
    name: "Database",
    description: "SQL, databases and backend data concepts.",
    href: "/blog?category=database",
    icon: Database,
    gradient: "from-emerald-100 via-teal-50 to-white",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
  },
  {
    name: "Career",
    description: "Guidance, skills and practical advice for developers.",
    href: "/blog?category=career",
    icon: BriefcaseBusiness,
    gradient: "from-rose-100 via-pink-50 to-white",
    iconBg: "bg-rose-500",
    iconColor: "text-white",
  },
];

export default function BlogCategories() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-20">
      {/* Background decorations */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Explore Topics
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learn What Matters to You
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Explore focused articles across programming, development,
            databases, problem solving and career growth.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
              >
                {/* Card gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}
                />

                {/* Decorative glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/80 blur-2xl transition duration-500 group-hover:scale-150" />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.iconBg} shadow-lg`}
                    >
                      <Icon
                        className={`h-6 w-6 ${category.iconColor}`}
                      />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">
                      <ArrowRight className="h-4 w-4 text-slate-400 transition duration-300 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-blue-600">
                    Explore articles
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}