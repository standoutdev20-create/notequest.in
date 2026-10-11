import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function SubjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
              <Sparkles size={16} />
              EXPLORE & LEARN
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Explore IT{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Subjects
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore programming, web development, databases, computer
              science, AI, cloud and other essential IT subjects through
              structured learning resources.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#subjects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Browse Subjects

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/study-path"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
              >
                <BookOpen size={18} />
                Study Path
              </Link>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Soft glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl shadow-purple-500/10 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/subjects/SubjectHero.png"
                  alt="IT Learning Workspace"
                  width={600}
                  height={450}
                  className="h-auto w-full rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}

