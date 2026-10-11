import { CheckCircle2, ArrowRight, BookOpen, Target } from "lucide-react";

export default function SubjectLearning({ details }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Learn & Grow
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Build your {details.title} skills
          </h2>

          <p className="mt-4 text-lg leading-7 text-slate-600">
            Follow a structured learning experience and understand the most
            important concepts step by step.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <BookOpen size={21} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  What You'll Learn
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Core concepts covered in this subject
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {subjectWhatYouLearn(details).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />

                  <span className="text-sm font-medium leading-5 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goal */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-7 text-white shadow-xl shadow-blue-500/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <Target size={21} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Your Learning Goal
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Build a strong foundation, understand important concepts and
              develop practical skills that you can use in real-world
              projects.
            </p>

            <div className="mt-7 space-y-3">
              <GoalItem text="Understand the fundamentals" />
              <GoalItem text="Practice important concepts" />
              <GoalItem text="Build practical skills" />
              <GoalItem text="Prepare for real projects" />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-purple-600">
                Topics
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                Explore important concepts
              </h3>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              {details.topics?.length || 0} Topics
            </span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.topics?.map((topic, index) => (
              <div
                key={`${topic.title}-${index}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Topic Image */}
                <div className="h-32 overflow-hidden bg-slate-100">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <h4 className="mt-4 font-bold text-slate-900">
                    {topic.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Learning Path
            </p>

            <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
              Learn step by step
            </h3>

            <p className="mt-3 text-slate-600">
              Follow this path to gradually move from fundamentals to
              practical knowledge.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {details.learningPath?.map((item, index) => (
              <div
                key={item}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <span className="font-semibold text-slate-800">
                    {item}
                  </span>
                </div>

                {index < details.learningPath.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <ArrowRight size={18} className="text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoalItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={18} className="shrink-0 text-white" />
      <span className="text-sm font-medium text-white/90">{text}</span>
    </div>
  );
}

function subjectWhatYouLearn(details) {
  if (details.whatYouLearn?.length) {
    return details.whatYouLearn;
  }

  return details.topics?.map((topic) => topic.title) || [];
}
