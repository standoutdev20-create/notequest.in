"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock3, Highlighter, ListTree, Loader2, PartyPopper, StickyNote, X } from "lucide-react";
import { api } from "@/lib/client";
import { track } from "@/components/analytics/track";
import StickyNotes from "@/components/notes/StickyNotes";

/** True when the three-column (xl) layout is showing. Only one notes panel is ever mounted. */
function useIsWide() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 1280px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 1280px)").matches,
    () => true
  );
}

/** Thin bar at the top of the viewport showing how far through the lesson you are. */
function ReadingProgress({ target }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = target.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      setPct(Math.min(100, Math.max(0, (-rect.top / Math.max(1, total)) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [target]);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-[width] duration-150" style={{ width: `${pct}%` }} />
    </div>
  );
}

function Outline({ subject, modules, current, completed }) {
  return (
    <nav aria-label="Course outline" className="space-y-5">
      {modules.map((m, mi) => (
        <div key={m.title}>
          <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {mi + 1}. {m.title}
          </p>
          <ul className="space-y-0.5">
            {m.lessons.map((l) => {
              const key = `${subject.slug}/${l.slug}`;
              const done = completed.has(key);
              const active = l.slug === current;
              return (
                <li key={l.slug}>
                  <Link
                    href={`/subjects/${subject.slug}/${l.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-start gap-2.5 rounded-xl px-2.5 py-2 text-sm transition ${
                      active ? "bg-indigo-50 font-bold text-indigo-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    ) : (
                      <Circle className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-indigo-500" : "text-slate-300"}`} />
                    )}
                    <span className="leading-5">{l.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function LessonReader({ subject, lesson, modules, position, prev, next, completedKeys, notes, signedIn, children }) {
  const router = useRouter();
  const articleRef = useRef(null);
  const [completed, setCompleted] = useState(() => new Set(completedKeys));
  const [saving, setSaving] = useState(false);
  const [justFinished, setJustFinished] = useState(false);
  const [selection, setSelection] = useState(null); // { text, x, y }
  const [pendingQuote, setPendingQuote] = useState(null);
  const [drawer, setDrawer] = useState(null); // "outline" | "notes" | null
  const isWide = useIsWide();
  const key = `${subject.slug}/${lesson.slug}`;
  const isDone = completed.has(key);
  const total = modules.reduce((s, m) => s + m.lessons.length, 0);
  const doneCount = modules.reduce((s, m) => s + m.lessons.filter((l) => completed.has(`${subject.slug}/${l.slug}`)).length, 0);
  const percent = total ? Math.round((doneCount / total) * 100) : 0;
  const loginHref = `/login?next=${encodeURIComponent(`/subjects/${subject.slug}/${lesson.slug}`)}`;

  useEffect(() => {
    track("lesson_view", { target: key, meta: { title: lesson.title } });
  }, [key, lesson.title]);

  // Offer "Add to note" when the reader highlights text inside the lesson.
  useEffect(() => {
    function onUp() {
      const sel = window.getSelection();
      const text = sel?.toString().trim();
      if (!text || text.length < 3 || !articleRef.current?.contains(sel.anchorNode)) {
        setSelection(null);
        return;
      }
      const rect = sel.getRangeAt(0).getBoundingClientRect();
      setSelection({ text: text.slice(0, 1500), x: rect.left + rect.width / 2, y: rect.top });
    }
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
    };
  }, []);

  function quoteToNote() {
    if (!signedIn) {
      router.push(loginHref);
      return;
    }
    setPendingQuote(selection.text);
    setSelection(null);
    window.getSelection()?.removeAllRanges();
    if (!isWide) setDrawer("notes");
  }

  async function toggleComplete() {
    if (!signedIn) {
      router.push(loginHref);
      return;
    }
    setSaving(true);
    try {
      const res = await api(`/subjects/${subject.slug}/lessons/${lesson.slug}/complete`, { method: "POST" });
      setCompleted((prevSet) => {
        const s = new Set(prevSet);
        if (res.completed) s.add(key);
        else s.delete(key);
        return s;
      });
      setJustFinished(res.completed);
    } finally {
      setSaving(false);
    }
  }

  const source = { type: "lesson", slug: key, title: lesson.title };
  const notesPanel = (onClose) => (
    <StickyNotes
      source={source}
      initialNotes={notes}
      signedIn={signedIn}
      loginHref={loginHref}
      pendingQuote={pendingQuote}
      onQuoteUsed={() => setPendingQuote(null)}
      onClose={onClose}
    />
  );

  return (
    <div className="bg-[#fafbff]">
      <ReadingProgress target={articleRef} />

      {/* Course header */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <Link href="/subjects" className="text-slate-400 hover:text-indigo-600">Subjects</Link>
            <span className="text-slate-300">/</span>
            <Link href={`/subjects/${subject.slug}`} className="truncate font-semibold text-slate-700 hover:text-indigo-600">{subject.title}</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${percent}%` }} />
              </div>
              <span className="text-xs font-semibold text-slate-500">{doneCount}/{total} done</span>
            </div>
            <button type="button" onClick={() => setDrawer("outline")} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 lg:hidden">
              <ListTree className="h-4 w-4" /> Lessons
            </button>
            <button type="button" onClick={() => setDrawer("notes")} className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 xl:hidden">
              <StickyNote className="h-4 w-4" /> Notes
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_320px]">
        {/* Outline */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <Outline subject={subject} modules={modules} current={lesson.slug} completed={completed} />
          </div>
        </aside>

        {/* Lesson */}
        <main className="min-w-0">
          <article ref={articleRef} className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
              {lesson.module} · Lesson {position.index + 1} of {position.total}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[2.6rem]">{lesson.title}</h1>
            {lesson.summary && <p className="mt-4 text-lg leading-8 text-slate-500">{lesson.summary}</p>}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> {lesson.duration} min</span>
              <span className="inline-flex items-center gap-1.5"><Highlighter className="h-4 w-4" /> Highlight text to save it as a note</span>
              {isDone && <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600"><CheckCircle2 className="h-4 w-4" /> Completed</span>}
            </div>

            <div className="mt-10">{children}</div>

            {/* Complete + navigation */}
            <div className={`mt-14 rounded-3xl border p-6 sm:p-8 ${isDone ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200 bg-white"}`}>
              {justFinished && isDone ? (
                <div className="flex items-center gap-3">
                  <PartyPopper className="h-6 w-6 text-emerald-600" />
                  <p className="font-bold text-emerald-800">Nice work, lesson complete! {next ? "Keep the momentum going." : "You've reached the end of this course 🎉"}</p>
                </div>
              ) : (
                <p className="font-bold text-slate-900">{isDone ? "You completed this lesson." : "Finished reading?"}</p>
              )}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={toggleComplete}
                  disabled={saving}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition disabled:opacity-60 ${
                    isDone ? "border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50" : "gradient-bg text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5"
                  }`}
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                  {isDone ? "Mark as not done" : "Mark lesson complete"}
                </button>
                {next && (
                  <Link href={`/subjects/${subject.slug}/${next.slug}`} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                    Next: {next.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link href={`/subjects/${subject.slug}/${prev.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-indigo-200 hover:shadow-md">
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400"><ArrowLeft className="h-3.5 w-3.5" /> Previous</span>
                  <span className="mt-1 block font-bold text-slate-800 group-hover:text-indigo-700">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link href={`/subjects/${subject.slug}/${next.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-4 text-right transition hover:border-indigo-200 hover:shadow-md">
                  <span className="flex items-center justify-end gap-1 text-xs font-semibold text-slate-400">Next <ArrowRight className="h-3.5 w-3.5" /></span>
                  <span className="mt-1 block font-bold text-slate-800 group-hover:text-indigo-700">{next.title}</span>
                </Link>
              )}
            </div>
          </article>
        </main>

        {/* Sticky notes */}
        {isWide && (
          <aside className="hidden xl:block">
            <div className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              {notesPanel()}
            </div>
          </aside>
        )}
      </div>

      {/* Highlight popover */}
      {selection && (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={quoteToNote}
          style={{ left: selection.x, top: selection.y - 12 }}
          className="fixed z-[70] inline-flex -translate-x-1/2 -translate-y-full items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-2xl"
        >
          <StickyNote className="h-3.5 w-3.5 text-amber-300" /> Add to note
        </button>
      )}

      {/* Mobile drawers */}
      {drawer && !(drawer === "notes" && isWide) && (
        <div className="fixed inset-0 z-[80] flex justify-end bg-slate-900/40 backdrop-blur-sm" onClick={() => setDrawer(null)}>
          <div className="flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {drawer === "notes" && !isWide ? (
              notesPanel(() => setDrawer(null))
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-extrabold text-slate-900">{subject.title}</p>
                  <button type="button" onClick={() => setDrawer(null)} aria-label="Close" className="rounded-lg p-2 hover:bg-slate-100"><X className="h-4 w-4" /></button>
                </div>
                <Outline subject={subject} modules={modules} current={lesson.slug} completed={completed} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
