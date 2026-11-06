"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, Download, GraduationCap, NotebookPen, Plus, Search, StickyNote } from "lucide-react";
import { noteColor, COLOR_KEYS } from "./colors";
import { downloadAllNotes } from "./download";
import { timeAgo } from "@/lib/format";

const TABS = [
  { key: "all", label: "All notes", icon: StickyNote },
  { key: "lesson", label: "From lessons", icon: GraduationCap },
  { key: "article", label: "From articles", icon: BookOpen },
  { key: "personal", label: "Personal", icon: NotebookPen },
];

const typeOf = (n) => (n.source?.type === "lesson" ? "lesson" : n.source?.type === "article" ? "article" : "personal");
const hrefOf = (n) => (n.source?.type === "lesson" ? `/subjects/${n.source.slug}` : `/notes/${n.id}`);

export default function NotesBoard({ notes }) {
  const [tab, setTab] = useState("all");
  const [color, setColor] = useState("");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c = { all: notes.length, lesson: 0, article: 0, personal: 0 };
    for (const n of notes) c[typeOf(n)]++;
    return c;
  }, [notes]);

  const shown = notes.filter((n) => {
    if (tab !== "all" && typeOf(n) !== tab) return false;
    if (color && (n.color || "yellow") !== color) return false;
    if (q) {
      const hay = `${n.title} ${n.body} ${n.quote || ""} ${n.source?.title || ""}`.toLowerCase();
      if (!hay.includes(q.toLowerCase())) return false;
    }
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                tab === key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
              <span className={`rounded-full px-1.5 text-[11px] ${tab === key ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>{counts[key]}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <button type="button" onClick={() => setColor("")} className={`rounded-full px-2 text-xs font-semibold ${!color ? "text-slate-900" : "text-slate-400"}`}>Any</button>
            {COLOR_KEYS.map((k) => (
              <button key={k} type="button" onClick={() => setColor(color === k ? "" : k)} aria-label={`${k} notes`} className={`h-5 w-5 rounded-full ${noteColor(k).dot} ring-offset-2 ${color === k ? "ring-2 ring-slate-700" : ""}`} />
            ))}
          </div>
          <label className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search notes" className="w-56 rounded-2xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm shadow-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" />
          </label>
          <button type="button" onClick={() => downloadAllNotes(shown)} disabled={!shown.length} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:text-indigo-700 disabled:opacity-50">
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="mt-8 rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <StickyNote className="mx-auto h-10 w-10 text-amber-400" />
          <h2 className="mt-4 text-xl font-bold text-slate-900">{notes.length ? "No notes match" : "Your board is empty"}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Open any lesson and highlight text, or add a sticky note from the side panel. Notes appear here automatically.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/subjects" className="gradient-bg rounded-xl px-5 py-2.5 text-sm font-bold text-white">Start a lesson</Link>
            <Link href="/notes/new" className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700">Write a note</Link>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/notes/new" className="flex min-h-40 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white/60 px-4 py-10 text-sm font-semibold text-slate-500 transition hover:border-indigo-300 hover:text-indigo-700">
            <Plus className="mb-2 h-6 w-6" /> New note
          </Link>
          {shown.map((n, i) => {
            const c = noteColor(n.color);
            return (
              <Link
                key={n.id}
                href={hrefOf(n)}
                className={`relative block rounded-3xl border p-5 pt-6 shadow-[0_14px_30px_-16px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-xl ${c.card} ${i % 3 === 0 ? "-rotate-[0.6deg]" : i % 3 === 1 ? "rotate-[0.5deg]" : ""}`}
              >
                <span className={`absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 rounded-sm ${c.tape}`} />
                {n.quote && <blockquote className={`mb-3 border-l-2 border-current/30 pl-3 text-xs italic leading-5 opacity-80 ${c.text}`}>“{n.quote}”</blockquote>}
                <p className={`whitespace-pre-line text-sm font-medium leading-6 ${c.text} line-clamp-[10]`}>{n.body || n.title}</p>
                <div className="mt-4 flex items-center justify-between gap-2 border-t border-black/5 pt-3 text-[11px] text-slate-500">
                  <span className="flex min-w-0 items-center gap-1 truncate font-semibold">
                    {typeOf(n) === "lesson" ? <GraduationCap className="h-3.5 w-3.5 shrink-0" /> : typeOf(n) === "article" ? <BookOpen className="h-3.5 w-3.5 shrink-0" /> : <NotebookPen className="h-3.5 w-3.5 shrink-0" />}
                    <span className="truncate">{n.source?.title || n.title}</span>
                  </span>
                  <span className="shrink-0">{timeAgo(n.updatedAt)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
