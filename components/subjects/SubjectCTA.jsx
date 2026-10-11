import Link from "next/link";
import { ArrowRight, BookOpen, Code2 } from "lucide-react";

export default function SubjectCTA({ details }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-12 shadow-2xl shadow-blue-500/20 sm:px-12 sm:py-16">
          {/* Background Decorations */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <BookOpen size={26} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-blue-100">
              Start Learning Today
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to learn {details.title}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Build your knowledge step by step with structured learning
              resources, practical exercises and useful projects.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/resources"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start Learning

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/practice"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <Code2 size={18} />
                Practice Problems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
