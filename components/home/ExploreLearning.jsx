
const learningPaths = [
  {
    title: "Programming Languages",
    description: "Learn programming fundamentals and core coding concepts.",
    label: "01",
    icon: "</>",
    iconStyle: "bg-blue-50 text-blue-600",
    image:
      "https://placehold.co/800x450/e0f2fe/2563eb?text=Programming+Languages",
  },
  {
    title: "Web Development",
    description: "Explore frontend, backend, and full-stack web development.",
    label: "02",
    icon: "WEB",
    iconStyle: "bg-indigo-50 text-indigo-600",
    image:
      "https://placehold.co/800x450/e0e7ff/4f46e5?text=Web+Development",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Build problem-solving skills with algorithms and data structures.",
    label: "03",
    icon: "DSA",
    iconStyle: "bg-purple-50 text-purple-600",
    image:
      "https://placehold.co/800x450/f3e8ff/9333ea?text=Data+Structures+%26+Algorithms",
  },
  {
    title: "Database & SQL",
    description: "Understand databases, SQL queries, and data management.",
    label: "04",
    icon: "DB",
    iconStyle: "bg-violet-50 text-violet-600",
    image:
      "https://placehold.co/800x450/ede9fe/7c3aed?text=Database+%26+SQL",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn cloud platforms, deployment, CI/CD, and DevOps.",
    label: "05",
    icon: "☁",
    iconStyle: "bg-sky-50 text-sky-600",
    image:
      "https://placehold.co/800x450/e0f2fe/0284c7?text=Cloud+%26+DevOps",
  },
  {
    title: "AI & Machine Learning",
    description: "Explore AI concepts, machine learning, and modern AI tools.",
    label: "06",
    icon: "AI",
    iconStyle: "bg-fuchsia-50 text-fuchsia-600",
    image:
      "https://placehold.co/800x450/fae8ff/c026d3?text=AI+%26+Machine+Learning",
  },
];

export default function ExploreLearning() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 font-sans text-slate-800 antialiased selection:bg-blue-200 lg:py-20">
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

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Explore & Learn
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore IT Learning Paths
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover structured resources across the technologies, concepts,
            and skills you need to grow in IT.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <div
              key={path.title}
              className="group relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                <img
                  src={path.image}
                  alt={path.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Number */}
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-500 shadow-sm backdrop-blur-sm">
                  {path.label}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Title + Icon */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {path.title}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white ${path.iconStyle}`}
                  >
                    {path.icon}
                  </div>
                </div>

                {/* Short Description */}
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  {path.description}
                </p>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Learning Path
                  </span>

                  <span className="text-sm font-bold text-blue-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Explore →
                  </span>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="gradient-bg absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

