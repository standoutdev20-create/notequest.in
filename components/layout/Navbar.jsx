import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Study Path", href: "/study-path" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="section-container flex h-20 items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          Note<span className="gradient-text">Quest</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 sm:block"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started →
          </Link>
        </div>

      </div>
    </header>
  );
}