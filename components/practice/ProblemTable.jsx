import Link from "next/link";
import { problems } from "@/data/problems";

function getDifficultyStyle(difficulty) {
  if (difficulty === "Easy") {
    return "bg-emerald-50 text-emerald-600";
  }

  if (difficulty === "Medium") {
    return "bg-amber-50 text-amber-600";
  }

  return "bg-red-50 text-red-600";
}

export default function ProblemTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 md:grid md:grid-cols-[70px_minmax(0,1fr)_130px_280px] md:gap-4">
        <div>#</div>
        <div>Problem</div>
        <div>Difficulty</div>
        <div>Topics</div>
      </div>

      {/* Problems */}
      <div>
        {problems.map((problem) => (
          <Link
            key={problem.id}
            href={`/practice/${problem.slug}`}
            className="group grid grid-cols-1 gap-3 border-b border-slate-100 px-5 py-5 transition-colors last:border-b-0 hover:bg-blue-50/40 md:grid-cols-[70px_minmax(0,1fr)_130px_280px] md:items-center md:gap-4 md:px-6"
          >
            {/* Number */}
            <div className="text-sm font-semibold text-slate-400">
              <span className="md:hidden"># </span>
              {problem.id}
            </div>

            {/* Problem */}
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-800 transition-colors group-hover:text-blue-600">
                {problem.title}
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-400 md:hidden">
                {problem.topics.join(" · ")}
              </p>
            </div>

            {/* Difficulty */}
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${getDifficultyStyle(
                  problem.difficulty
                )}`}
              >
                {problem.difficulty}
              </span>
            </div>

            {/* Topics */}
            <div className="hidden flex-wrap gap-2 md:flex">
              {problem.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-500 sm:px-6">
        Showing{" "}
        <span className="font-semibold text-slate-700">
          1–{problems.length}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-700">
          {problems.length}
        </span>{" "}
        selected practice problems
      </div>
    </div>
  );
}