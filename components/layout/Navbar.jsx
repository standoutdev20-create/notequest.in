"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, LayoutDashboard, NotebookPen, ShieldCheck, LogOut, ChevronDown, Settings2 } from "lucide-react";
import { api } from "@/lib/client";

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || "http://localhost:3001";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subjects", href: "/subjects" },
  { name: "Resources", href: "/resources" },
  { name: "Study Path", href: "/study-path" },
  { name: "My Notes", href: "/notes" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

/** @param {{ user?: { name: string, email: string, role: string } | null }} props */
export default function Navbar({ user = null }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    try {
      await api("/auth/logout", { method: "POST" });
    } finally {
      setOpen(false);
      router.push("/");
      router.refresh();
    }
  }
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Signed-in learners: "Home" is their dashboard; About is for visitors.
  const links = user
    ? navLinks.filter((l) => l.href !== "/about").map((l) => (l.href === "/" ? { ...l, name: "Dashboard" } : l))
    : navLinks.filter((l) => l.href !== "/notes");

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
          {links.map((link) => {
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
          {user ? (
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200"
              >
                <span className="gradient-bg flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white">
                  {user.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="max-w-[8rem] truncate">{user.name.split(" ")[0]}</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl">
                  <p className="truncate px-3 py-2 text-xs text-slate-400">{user.email}</p>
                  <Link onClick={() => setMenuOpen(false)} href="/" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} href="/notes" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <NotebookPen className="h-4 w-4" /> My Notes
                  </Link>
                  <Link onClick={() => setMenuOpen(false)} href="/welcome" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <Settings2 className="h-4 w-4" /> Interests &amp; goal
                  </Link>
                  {user.role === "admin" && (
                    <a onClick={() => setMenuOpen(false)} href={CRM_URL} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">
                      <ShieldCheck className="h-4 w-4" /> Admin CRM
                    </a>
                  )}
                  <div>
                    <button type="button" onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                      <LogOut className="h-4 w-4" /> Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-blue-600 sm:inline-flex"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="gradient-bg btn-shine group hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300 sm:inline-flex"
              >
                Sign up
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </>
          )}

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
          {links.map((link, i) => (
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

          <div className="mt-3 border-t border-slate-100 pt-3">
            {user ? (
              <div className="flex flex-col gap-1">
                <Link href="/" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50">
                  Dashboard
                </Link>
                {user.role === "admin" && (
                  <a href={CRM_URL} className="rounded-xl px-4 py-3 text-base font-semibold text-indigo-700 hover:bg-indigo-50">
                    Admin CRM
                  </a>
                )}
                <div>
                  <button type="button" onClick={logout} className="w-full rounded-xl px-4 py-3 text-left text-base font-semibold text-red-600 hover:bg-red-50">
                    Log out
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">
                  Log in
                </Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="gradient-bg inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md">
                  Sign up <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
