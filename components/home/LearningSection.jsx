"use client";

import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    n: "1",
    title: "Start with the fundamentals",
    desc: "Build a strong foundation before moving to advanced topics.",
  },
  {
    n: "2",
    title: "Practice what you learn",
    desc: "Apply concepts through examples and practical resources.",
  },
  {
    n: "3",
    title: "Keep progressing",
    desc: "Move from beginner concepts to advanced skills at your pace.",
  },
];

const pathItems = ["HTML & CSS", "JavaScript", "React", "Projects"];

export default function LearningSection() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 lg:py-24">
      <div className="section-container grid items-center gap-14 lg:grid-cols-2">

        {/* ─── Left Content ─── */}
        <div className="reveal from-left">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Learn With Direction
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Follow a learning path{" "}
            <span className="gradient-text">instead of learning randomly.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            Build your knowledge step-by-step with structured paths
            designed around beginner, intermediate and advanced levels.
          </p>

          <div className="mt-10 space-y-6">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-5">
                <div className="gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-md shadow-blue-200/60">
                  {n}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Right Visual Card ─── */}
        <div className="reveal from-right rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-100/20">
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/40 p-6">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Your Study Path</p>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">Frontend Development</h3>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-blue-600 ring-1 ring-blue-200/60">
                45%
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700" />
            </div>

            <div className="mt-6 space-y-3">
              {pathItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 rounded-2xl p-4 shadow-sm transition-all ${
                    index < 2
                      ? "bg-white ring-1 ring-blue-100"
                      : "bg-white"
                  }`}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold transition-all ${
                    index < 2
                      ? "gradient-bg text-white shadow-md shadow-blue-200/50"
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    {index < 2 ? "✓" : index + 1}
                  </div>

                  <p className={`font-semibold ${index < 2 ? "text-slate-800" : "text-slate-400"}`}>
                    {item}
                  </p>

                  {index < 2 && (
                    <span className="ml-auto text-xs font-bold text-green-500">Done</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}