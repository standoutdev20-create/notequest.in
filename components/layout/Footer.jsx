import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

const columns = [
  {
    title: "Learn",
    links: [
      { name: "Subjects", href: "/subjects" },
      { name: "Study Paths", href: "/study-path" },
      { name: "My Notes", href: "/notes" },
      { name: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Popular Subjects",
    links: [
      { name: "Programming", href: "/subjects/programming-languages" },
      { name: "Web Development", href: "/subjects/web-development" },
      { name: "DSA", href: "/subjects/data-structures-algorithms" },
      { name: "Database & SQL", href: "/subjects/database-sql" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl animate-blob" style={{ animationDelay: "-9s" }} />

      <div className="section-container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-white">
              <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black">
                NQ
              </span>
              Note<span className="gradient-text">Quest</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7">
              Hands-on lessons, sticky notes and study paths for IT students
              and developers — all organized in one place.
            </p>

            <Link
              href="/subjects"
              className="btn-shine group mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <BookOpen className="h-4 w-4" />
              Start learning
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NoteQuest. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Learn · Build · Grow
          </p>
        </div>
      </div>
    </footer>
  );
}
