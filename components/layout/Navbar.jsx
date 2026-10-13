"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Videos", href: "/videos" },
  { name: "Practice", href: "/practice" },
  { name: "Study Path", href: "/study-path" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow + stronger backdrop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-slate-200/50 bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex h-[68px] items-center justify-between gap-6">

        {/* ─── Logo ─── */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900 transition-opacity hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          Note<span className="gradient-text">Quest</span>
        </Link>

        {/* ─── Desktop Nav ─── */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ─── Desktop Actions ─── */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-blue-600"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="gradient-bg rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/50"
          >
            Get Started →
          </Link>
        </div>

        {/* ─── Mobile: Get Started + Hamburger ─── */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/signup"
            className="gradient-bg rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50"
          >
            {mobileOpen ? (
              <X className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>

      </div>

      {/* ─── Mobile Menu Drawer ─── */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="gradient-bg rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}