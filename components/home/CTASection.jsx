
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
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-24">
        {/* Hero-style Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />

          <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-sm">
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
                  className="inline-flex items-center rounded-xl border border-gray-200 bg-white/80 px-6 py-3.5 font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
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
                <span className="text-lg font-bold text-purple-600">AI</span>
              </div>

              <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-xl">
                <Cloud size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — Original Dark Theme Preserved */}
      <footer className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* BRAND */}
            <div className="lg:col-span-4">
              <Link href="/">
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NoteQuest
                  </span>
                </h3>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                Learn programming and computer science with structured
                resources, practical learning paths, videos, references, and
                coding practice.
              </p>

              {/* Newsletter — UI only, no submit handler */}
              <div className="mt-6 flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-l-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                />

                <button
                  type="button"
                  className="rounded-r-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h4>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/study-path" className="text-gray-400 transition hover:text-white">
                    Study Path
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className="text-gray-400 transition hover:text-white">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 transition hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Learning Resources
              </h4>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/subjects" className="text-gray-400 transition hover:text-white">
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-400 transition hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="text-gray-400 transition hover:text-white">
                    Learning Videos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 transition hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Connect With Us
              </h4>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                Stay connected with NoteQuest and get the latest learning
                resources and updates.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
                >
                  <span className="text-sm font-bold">in</span>
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-gray-400 transition hover:border-blue-500 hover:text-blue-400"
                >
                  <Code2 size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-gray-400 transition hover:border-pink-500 hover:text-pink-400"
                >
                  <span className="text-sm font-bold">@</span>
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 text-gray-400 transition hover:border-red-500 hover:text-red-400"
                >
                  <span className="text-xs font-bold">YT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-800" />

          {/* Bottom Footer */}
          <div className="flex flex-col gap-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 NoteQuest. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="#" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

