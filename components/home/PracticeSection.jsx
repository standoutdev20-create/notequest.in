import Link from "next/link";

const practiceTopics = [
{
title: "Programming",
description: "Core coding problems",
icon: "</>",
},
{
title: "Data Structures",
description: "Arrays, trees & graphs",
icon: "DS",
},
{
title: "Algorithms",
description: "Logic & problem solving",
icon: "AL",
},
{
title: "SQL & Database",
description: "SQL & DBMS practice",
icon: "DB",
},
];

export default function PracticeSection() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Hero-style background glow effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="section-container">
    <div className="overflow-hidden rounded-[32px] border border-blue-100/70 bg-white/60 shadow-sm backdrop-blur-sm">
      <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-600">
            <span>✦</span>
            Learn by solving
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Practice IT
            <br />
            <span className="gradient-text">Problems</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Strengthen your programming and problem-solving skills with
            hands-on problems across programming, data structures,
            algorithms, databases, and more.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/practice"
              className="gradient-bg inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Practicing →
            </Link>

            <Link
              href="/practice"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
            >
              View Problems
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="rounded-3xl border border-blue-100/70 bg-white/85 p-5 shadow-lg shadow-blue-100/30 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Practice
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                Solve & Improve
              </h3>
            </div>

            <div className="gradient-bg flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white">
              NQ
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {practiceTopics.map((topic) => (
              <div
                key={topic.title}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/70"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-blue-600 shadow-sm">
                  {topic.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    {topic.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {topic.description}
                  </p>
                </div>

                <span className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>
              </div>
            ))}
          </div>

          <div className="gradient-bg mt-4 rounded-2xl p-4 text-white">
            <p className="text-sm font-bold">Learn by solving.</p>

            <p className="mt-1 text-xs leading-5 text-blue-50">
              Pick a problem, write your solution, and improve your logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
