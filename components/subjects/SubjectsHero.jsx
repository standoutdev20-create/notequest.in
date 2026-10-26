import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function SubjectsHero() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white">
{/* Background Decorations */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
      {/* Left Side: Content */}
      <div className="lg:col-span-7">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-sm">
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
            className="inline-flex items-center gap-2 rounded-xl border border-white/80 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
          >
            <BookOpen size={18} />
            Study Path
          </Link>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="flex justify-center lg:col-span-5 lg:justify-end">
        <div className="relative w-full max-w-lg">
          {/* Soft Glow Behind Image */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-2 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
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
