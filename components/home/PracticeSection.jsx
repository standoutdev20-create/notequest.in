"use client";

import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";

const practiceTopics = [
  { title: "Programming",      description: "Core coding problems",       icon: "</>", color: "text-blue-600",   bg: "bg-blue-50"   },
  { title: "Data Structures",  description: "Arrays, trees & graphs",     icon: "DS",  color: "text-violet-600", bg: "bg-violet-50" },
  { title: "Algorithms",       description: "Logic & problem solving",    icon: "AL",  color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "SQL & Database",   description: "SQL & DBMS practice",        icon: "DB",  color: "text-purple-600", bg: "bg-purple-50" },
];

export default function PracticeSection() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-24">
      <div className="section-container">

        <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-slate-50 to-blue-50/30 shadow-sm">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">

            {/* ─── Left Content ─── */}
            <div className="reveal from-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                <span>✦</span>
                Learn by solving
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Practice IT
                <br />
                <span className="gradient-text">Problems</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Strengthen your programming and problem-solving skills with
                hands-on problems across programming, data structures,
                algorithms, databases, and more.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/practice"
                  className="gradient-bg inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start Practicing →
                </Link>

                <Link
                  href="/practice"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
                >
                  View Problems
                </Link>
              </div>
            </div>

            {/* ─── Right Card ─── */}
            <div className="reveal from-right rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-blue-100/20">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Practice</p>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-900">Solve & Improve</h3>
                </div>
                <div className="gradient-bg flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md">
                  NQ
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {practiceTopics.map((topic) => (
                  <div
                    key={topic.title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/50 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold shadow-sm ${topic.color}`}>
                      {topic.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900">{topic.title}</h4>
                      <p className="mt-0.5 text-xs text-slate-500">{topic.description}</p>
                    </div>

                    <span className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-500">→</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl gradient-bg p-4 text-white">
                <p className="text-sm font-bold">Learn by solving.</p>
                <p className="mt-1 text-xs leading-5 text-blue-100">
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