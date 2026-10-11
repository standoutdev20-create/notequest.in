import {
  Code2,
  Globe2,
  Database,
  Brain,
  Cloud,
  Smartphone,
  Cpu,
  Network,
  ArrowUpRight,
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
      className="relative overflow-hidden bg-slate-50 py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

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
      </div>
    </section>
  );
}