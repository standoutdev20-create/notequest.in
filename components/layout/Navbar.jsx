"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Study Path", href: "/study-path" },
  { name: "Practice", href: "/practice" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div
        className={`section-container flex items-center justify-between gap-6 transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight">
          <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black text-white shadow-md shadow-blue-500/30 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
            NQ
          </span>
          <span>
            Note<span className="gradient-text">Quest</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm xl:px-4 font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/study-path"
            className="gradient-bg btn-shine group hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300 sm:inline-flex lg:hidden xl:inline-flex"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:text-blue-600 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`rounded-xl px-4 py-3 text-base font-semibold transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              } ${
                isActive(link.href)
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/study-path"
            onClick={() => setOpen(false)}
            className="gradient-bg mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
