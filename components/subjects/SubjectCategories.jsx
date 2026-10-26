import {
  Code2,
  Globe2,
  Database,
  Brain,
  Cloud,
  Smartphone,
  Cpu,
  Network,
} from "lucide-react";

import SubjectCard from "./SubjectCard";
import { subjects } from "@/data/subjects";

const icons = {
  "programming-languages": Code2,
  "web-development": Globe2,
  "data-structures-algorithms": Cpu,
  "database-sql": Database,
  "ai-machine-learning": Brain,
  "cloud-devops": Cloud,
  "mobile-development": Smartphone,
  "computer-networks": Network,
};

export default function SubjectCategories() {
  return (
    <section
      id="subjects"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24"
    >
      {/* Hero-style Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Explore Subjects
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Build your IT knowledge
          </h2>

          <p className="mt-4 text-lg leading-7 text-slate-600">
            Choose a subject and explore structured resources designed to
            help you understand concepts and build practical skills.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => {
            const Icon = icons[subject.slug];

            return (
              <SubjectCard
                key={subject.slug}
                title={subject.title}
                description={subject.description}
                icon={Icon}
                topics={subject.topics}
                color={subject.color}
                href={`/subjects/${subject.slug}`}
              />
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className="mt-10 rounded-3xl border border-blue-100/80 bg-gradient-to-r from-blue-50/90 via-white/90 to-purple-50/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <Code2 size={22} />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Learn one concept at a time
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Explore your interests, strengthen your fundamentals, and
                gradually develop practical IT skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


