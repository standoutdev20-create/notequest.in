import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Play,
  BookOpen,
  Cloud,
  Users,
} from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-white py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full border border-blue-100 opacity-70" />
        <div className="absolute -left-20 top-32 h-80 w-80 rounded-full border border-purple-100 opacity-70" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full border border-purple-100 opacity-70" />
        <div className="absolute -right-20 bottom-12 h-80 w-80 rounded-full border border-blue-100 opacity-70" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                STRUCTURED IT PROGRESSION
              </div>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learning Journey?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Build strong IT fundamentals, follow structured learning
                paths, practice real problems, and grow your skills one step
                at a time.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/subjects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Learning

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative mx-auto h-[480px] w-full max-w-lg">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-3xl" />

              {/* Main Card */}
              <div className="absolute inset-x-8 bottom-0 top-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/20" />

                <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full border border-white/10" />

                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/15">
                    <BookOpen size={48} className="text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    Learn. Build. Grow.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
                    Everything you need to build your IT knowledge and improve
                    your technical skills.
                  </p>

                  <div className="mt-8 flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
                    <Users size={18} className="text-white" />

                    <span className="text-sm font-medium text-white">
                      Your learning journey starts here
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}

              <div className="absolute left-0 top-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                <Code2 size={25} className="text-blue-600" />
              </div>

              <div className="absolute right-0 top-32 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                <Play
                  size={24}
                  className="fill-purple-600 text-purple-600"
                />
              </div>

              <div className="absolute bottom-24 left-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                <BookOpen size={24} className="text-blue-600" />
              </div>

              <div className="absolute bottom-16 right-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
                <span className="text-lg font-bold text-purple-600">
                  AI
                </span>
              </div>

              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-xl">
                <Cloud size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}