import Link from "next/link";
import {
ArrowRight,
BookOpen,
Code2,
Database,
Brain,
Cloud,
Globe2,
} from "lucide-react";

const paths = [
{
title: "Programming Foundation",
description:
"Start with programming fundamentals, logic building, data structures and problem solving.",
level: "Beginner",
duration: "6–8 Weeks",
icon: Code2,
color: "blue",
subjects: ["Programming", "DSA", "Problem Solving"],
},
{
title: "Web Development",
description:
"Learn how modern websites and web applications are designed and developed.",
level: "Beginner → Intermediate",
duration: "8–12 Weeks",
icon: Globe2,
color: "purple",
subjects: ["HTML", "CSS", "JavaScript", "React"],
},
{
title: "Data & Database",
description:
"Understand databases, SQL, data management and the concepts used in modern applications.",
level: "Beginner → Intermediate",
duration: "5–7 Weeks",
icon: Database,
color: "green",
subjects: ["SQL", "DBMS", "MongoDB", "Data"],
},
{
title: "AI & Machine Learning",
description:
"Explore artificial intelligence, machine learning concepts and practical applications.",
level: "Intermediate",
duration: "10–14 Weeks",
icon: Brain,
color: "orange",
subjects: ["Python", "AI", "ML", "Data"],
},
{
title: "Cloud & DevOps",
description:
"Learn cloud fundamentals, deployment, DevOps practices and modern development workflows.",
level: "Intermediate",
duration: "8–10 Weeks",
icon: Cloud,
color: "blue",
subjects: ["Cloud", "Git", "DevOps", "Deployment"],
},
];

const colorStyles = {
blue: {
icon: "bg-blue-50 text-blue-600",
badge: "bg-blue-50 text-blue-600",
border: "hover:border-blue-200",
},
purple: {
icon: "bg-purple-50 text-purple-600",
badge: "bg-purple-50 text-purple-600",
border: "hover:border-purple-200",
},
green: {
icon: "bg-emerald-50 text-emerald-600",
badge: "bg-emerald-50 text-emerald-600",
border: "hover:border-emerald-200",
},
orange: {
icon: "bg-orange-50 text-orange-600",
badge: "bg-orange-50 text-orange-600",
border: "hover:border-orange-200",
},
};

export default function LearningPaths() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Background Glow Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" /> <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" /> <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" /> </div>


  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Section Header */}
    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
          Learning Paths
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Not sure where to start?
        </h2>

        <p className="mt-4 text-lg leading-7 text-slate-600">
          Follow a structured learning path and gradually build the skills
          you need for your IT career.
        </p>
      </div>

      <Link
        href="/study-path"
        className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
      >
        View Study Paths
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>

    {/* Learning Path Cards */}
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {paths.map((path) => {
        const Icon = path.icon;
        const styles = colorStyles[path.color];

        return (
          <div
            key={path.title}
            className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.border}`}
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">
              {/* Icon and Level */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${styles.badge}`}
                >
                  {path.level}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {path.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                {path.description}
              </p>

              {/* Duration */}
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                <BookOpen size={16} className="text-blue-500" />
                {path.duration}
              </div>

              {/* Subjects */}
              <div className="mt-5 flex flex-wrap gap-2">
                {path.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              {/* Bottom Link */}
              <Link
                href="/study-path"
                className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
              >
                Explore Path
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom Information */}
    <div className="mt-10 rounded-3xl border border-blue-100/80 bg-gradient-to-r from-blue-50/90 via-white/90 to-purple-50/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
            <BookOpen size={22} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Learn at your own pace
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Start with the basics, practice regularly and move toward
              advanced concepts when you are ready.
            </p>
          </div>
        </div>

        <Link
          href="/study-path"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Explore Learning Paths
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  </div>
</section>


);
}
