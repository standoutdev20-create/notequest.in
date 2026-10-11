
import {
  BookOpen,
  Video,
  Code2,
  FolderKanban,
  Route,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Structured Notes",
    description:
      "Learn important IT concepts through clear, organized and easy-to-follow notes.",
    icon: BookOpen,
    color: "blue",
  },
  {
    title: "Learning Videos",
    description:
      "Understand difficult concepts through practical tutorials and visual explanations.",
    icon: Video,
    color: "purple",
  },
  {
    title: "Practice Problems",
    description:
      "Improve your problem-solving skills by practicing questions based on what you learn.",
    icon: Code2,
    color: "emerald",
  },
  {
    title: "Practical Projects",
    description:
      "Turn your knowledge into practical skills by building real-world projects.",
    icon: FolderKanban,
    color: "orange",
  },
  {
    title: "Learning Paths",
    description:
      "Follow a clear path from fundamentals to advanced concepts without getting lost.",
    icon: Route,
    color: "blue",
  },
  {
    title: "Career Focused",
    description:
      "Build skills that can help you prepare for projects, internships and IT careers.",
    icon: Target,
    color: "purple",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    hover: "group-hover:border-blue-200",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    hover: "group-hover:border-purple-200",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    hover: "group-hover:border-emerald-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    hover: "group-hover:border-orange-200",
  },
};

export default function WhyLearn() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Learn With NoteQuest
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to learn IT
          </h2>

          <p className="mt-4 text-lg leading-7 text-slate-600">
            Go beyond reading concepts. Learn, practice and build your skills
            with a complete learning experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            const styles = colorStyles[feature.color];

            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hover}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 shadow-xl shadow-blue-500/10 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">
                Your Learning Journey
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Learn → Practice → Build → Grow
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Choose a subject, understand the fundamentals, practice what
                you learn and build projects to turn knowledge into practical
                skills.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-white">
              <span className="rounded-full bg-white/15 px-4 py-2">
                Learn
              </span>

              <span className="text-white/60">→</span>

              <span className="rounded-full bg-white/15 px-4 py-2">
                Practice
              </span>

              <span className="text-white/60">→</span>

              <span className="rounded-full bg-white/15 px-4 py-2">
                Build
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

