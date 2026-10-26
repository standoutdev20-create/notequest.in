import {
CheckCircle2,
ArrowRight,
BookOpen,
Target,
} from "lucide-react";

export default function SubjectLearning({ details }) {
const whatYouLearn = subjectWhatYouLearn(details);
const topics = details?.topics || [];
const learningPath = details?.learningPath || [];

return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Hero-style Background Glow Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" /> <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" /> <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" /> </div>


  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Section Heading */}
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
        Learn &amp; Grow
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Build your {details?.title || "skills"} skills
      </h2>

      <p className="mt-4 text-lg leading-7 text-slate-600">
        Follow a structured learning experience and understand the most
        important concepts step by step.
      </p>
    </div>

    {/* What You'll Learn and Learning Goal */}
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-blue-100/80 bg-white/80 p-7 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <BookOpen size={21} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              What You&apos;ll Learn
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Core concepts covered in this subject
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {whatYouLearn.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md"
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-7 text-white shadow-xl shadow-blue-500/10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative">
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
          {topics.length} Topics
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, index) => (
          <div
            key={`${topic.title || "topic"}-${index}`}
            className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            {/* Topic Image */}
            <div className="h-32 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
              {topic.image ? (
                <img
                  src={topic.image}
                  alt={topic.title || "Subject topic"}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <BookOpen
                    size={36}
                    className="text-blue-300"
                  />
                </div>
              )}
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
                {topic.description ||
                  `Explore the fundamentals of ${topic.title}.`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Learning Path */}
    <div className="mt-20 rounded-3xl border border-blue-100/80 bg-white/70 p-7 shadow-sm backdrop-blur-sm sm:p-10">
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

      {learningPath.length > 0 ? (
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {learningPath.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <span className="font-semibold text-slate-800">
                  {item}
                </span>
              </div>

              {index < learningPath.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <ArrowRight
                    size={18}
                    className="text-blue-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-5 text-sm text-slate-600">
          The learning path for this subject will be available soon.
        </p>
      )}
    </div>
  </div>
</section>


);
}

function GoalItem({ text }) {
return ( <div className="flex items-center gap-3"> <CheckCircle2 size={18} className="shrink-0 text-white" /> <span className="text-sm font-medium text-white/90">{text}</span> </div>
);
}

function subjectWhatYouLearn(details) {
if (details?.whatYouLearn?.length) {
return details.whatYouLearn;
}

return details?.topics?.map((topic) => topic.title) || [];
}
