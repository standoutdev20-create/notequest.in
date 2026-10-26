"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Study Path", href: "/study-path" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md transition-colors duration-300">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight"
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 sm:block"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="gradient-bg rounded-full px-3 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:px-5 sm:text-sm"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}