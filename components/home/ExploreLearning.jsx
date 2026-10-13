"use client";

import { useReveal } from "@/hooks/useReveal";

const learningPaths = [
  {
    title: "Programming Languages",
    description: "Learn programming fundamentals and core coding concepts.",
    label: "01",
    icon: "</>",
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    image: "https://placehold.co/800x450/dbeafe/1d4ed8?text=Programming+Languages",
  },
  {
    title: "Web Development",
    description: "Explore frontend, backend, and full-stack web development.",
    label: "02",
    icon: "WEB",
    gradient: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
    image: "https://placehold.co/800x450/e0e7ff/3730a3?text=Web+Development",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Build problem-solving skills with algorithms and data structures.",
    label: "03",
    icon: "DSA",
    gradient: "from-purple-500 to-purple-600",
    lightBg: "bg-purple-50",
    textColor: "text-purple-600",
    image: "https://placehold.co/800x450/ede9fe/6d28d9?text=DSA",
  },
  {
    title: "Database & SQL",
    description: "Understand databases, SQL queries, and data management.",
    label: "04",
    icon: "DB",
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
    image: "https://placehold.co/800x450/ede9fe/5b21b6?text=Database+%26+SQL",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn cloud platforms, deployment, CI/CD, and DevOps.",
    label: "05",
    icon: "☁",
    gradient: "from-sky-500 to-sky-600",
    lightBg: "bg-sky-50",
    textColor: "text-sky-600",
    image: "https://placehold.co/800x450/e0f2fe/0369a1?text=Cloud+%26+DevOps",
  },
  {
    title: "AI & Machine Learning",
    description: "Explore AI concepts, machine learning, and modern AI tools.",
    label: "06",
    icon: "AI",
    gradient: "from-fuchsia-500 to-fuchsia-600",
    lightBg: "bg-fuchsia-50",
    textColor: "text-fuchsia-600",
    image: "https://placehold.co/800x450/fae8ff/a21caf?text=AI+%26+ML",
  },
];

export default function ExploreLearning() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 lg:py-24">
      <div className="section-container">

        {/* Section Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-badge">
            ✦ Explore & Learn
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore IT{" "}
            <span className="gradient-text">Learning Paths</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Discover structured resources across the technologies,
            concepts, and skills you need to grow in IT.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path, i) => (
            <div
              key={path.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200`}
            >
              {/* Image */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                <img
                  src={path.image}
                  alt={path.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number badge */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-500 shadow-sm backdrop-blur-sm">
                  {path.label}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-base font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {path.title}
                  </h3>

                  {/* Icon badge */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all duration-300 group-hover:scale-105 ${path.lightBg} ${path.textColor} group-hover:bg-gradient-to-br ${path.gradient} group-hover:text-white`}>
                    {path.icon}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {path.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Learning Path
                  </span>
                  <span className={`text-sm font-bold transition-all duration-300 group-hover:translate-x-1 ${path.textColor} opacity-70 group-hover:opacity-100`}>
                    Explore →
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r ${path.gradient} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}