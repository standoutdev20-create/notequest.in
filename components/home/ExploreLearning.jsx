"use client";

import Link from "next/link";
import Carousel from "@/components/ui/Carousel";

const learningPaths = [
  {
    title: "Programming Languages",
    description: "Learn programming fundamentals and core coding concepts.",
    label: "01",
    icon: "</>",
    iconStyle: "bg-blue-50 text-blue-600",
    image: "/images/subjects/programming.jpg",
    href: "/subjects/programming-languages",
  },
  {
    title: "Web Development",
    description: "Explore frontend, backend, and full-stack web development.",
    label: "02",
    icon: "WEB",
    iconStyle: "bg-indigo-50 text-indigo-600",
    image: "/images/subjects/web-development.jpg",
    href: "/subjects/web-development",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Build problem-solving skills with algorithms and data structures.",
    label: "03",
    icon: "DSA",
    iconStyle: "bg-purple-50 text-purple-600",
    image: "/images/subjects/dsa.jpg",
    href: "/subjects/data-structures-algorithms",
  },
  {
    title: "Database & SQL",
    description: "Understand databases, SQL queries, and data management.",
    label: "04",
    icon: "DB",
    iconStyle: "bg-violet-50 text-violet-600",
    image: "/images/subjects/database.jpg",
    href: "/subjects/database-sql",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn cloud platforms, deployment, CI/CD, and DevOps.",
    label: "05",
    icon: "☁",
    iconStyle: "bg-sky-50 text-sky-600",
    image: "/images/subjects/cloud.jpg",
    href: "/subjects/cloud-devops",
  },
  {
    title: "AI & Machine Learning",
    description: "Explore AI concepts, machine learning, and modern AI tools.",
    label: "06",
    icon: "AI",
    iconStyle: "bg-fuchsia-50 text-fuchsia-600",
    image: "/images/subjects/ai.jpg",
    href: "/subjects/ai-machine-learning",
  },
];

export default function ExploreLearning() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Explore & Learn
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore IT Learning Paths
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover structured resources across the technologies,
            concepts, and skills you need to grow in IT.
          </p>
        </div>

        {/* Learning Cards Carousel */}
        <Carousel
          className="mt-10"
          items={learningPaths}
          ariaLabel="IT learning paths"
          perView={{ base: 1, md: 2, lg: 3 }}
          renderItem={(path) => (
            <Link
              href={path.href}
              className="group relative block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={path.image}
                  alt={path.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Number */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-500 shadow-sm backdrop-blur-sm">
                  {path.label}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {path.title}
                  </h3>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white ${path.iconStyle}`}
                  >
                    {path.icon}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-5 text-slate-600">
                  {path.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Learning Path
                  </span>

                  <span className="text-sm font-bold text-blue-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 gradient-bg transition-all duration-500 group-hover:w-full" />
            </Link>
          )}
        />
      </div>
    </section>
  );
}