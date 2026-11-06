"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Download, FileText, Loader2, Trash2, BookOpen } from "lucide-react";
import { api } from "@/lib/client";
import { downloadNote } from "./download";
import { COLOR_KEYS, noteColor } from "./colors";

/** Create (note = null) or edit a note. Existing notes autosave. */
export default function NoteEditor({ note = null, source = null }) {
  const router = useRouter();
  const [title, setTitle] = useState(note?.title ?? (source?.title ? `Notes: ${source.title}` : ""));
  const [body, setBody] = useState(note?.body ?? "");
  const [status, setStatus] = useState(note ? "saved" : "new"); // new | dirty | saving | saved | error
  const [error, setError] = useState("");
  const [color, setColor] = useState(note?.color || "yellow");
  const noteSource = note?.source?.slug ? note.source : source;

  function edit(setter) {
    return (e) => {
      setter(e.target.value);
      if (note) setStatus("dirty");
    };
  }

  // Debounced autosave for existing notes (runs once edits pause).
  useEffect(() => {
    if (!note || status !== "dirty") return;
    const t = setTimeout(async () => {
      setStatus("saving");
      try {
        await api(`/notes/${note.id}`, { method: "PATCH", body: { title, body } });
        setStatus("saved");
        setError("");
      } catch (err) {
        setStatus("error");
        setError(err.message);
      }
    }, 800);
    return () => clearTimeout(t);
  }, [title, body, note, status]);

  async function createNote() {
    setStatus("saving");
    try {
      const { note: created } = await api("/notes", {
        method: "POST",
        body: { title, body, color, source: source ? { type: "article", ...source } : undefined },
      });
      router.replace(`/notes/${created.id}`);
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  async function removeNote() {
    if (!confirm("Delete this note? This cannot be undone.")) return;
    await api(`/notes/${note.id}`, { method: "DELETE" });
    router.replace("/notes");
    router.refresh();
  }

  const current = { id: note?.id, title: title || "Untitled note", body, quote: note?.quote, source: noteSource };

  async function pickColor(c) {
    setColor(c);
    if (note) await api(`/notes/${note.id}`, { method: "PATCH", body: { color: c } }).catch(() => {});
  }
  const words = body.trim() ? body.trim().split(/\s+/).length : 0;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600">
          <ArrowLeft className="h-4 w-4" /> All notes
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400" aria-live="polite">
            {status === "saving" && (<><Loader2 className="h-3.5 w-3.5 animate-spin" /> Saving…</>)}
            {status === "saved" && (<><Check className="h-3.5 w-3.5 text-emerald-500" /> Saved</>)}
            {status === "dirty" && "Unsaved changes"}
            {status === "error" && <span className="text-red-500">{error || "Could not save"}</span>}
          </span>

          <button type="button" onClick={() => downloadNote(current, "md")} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-blue-200 hover:text-blue-600">
            <Download className="h-4 w-4" /> .md
          </button>
          <button type="button" onClick={() => downloadNote(current, "txt")} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-blue-200 hover:text-blue-600">
            <FileText className="h-4 w-4" /> .txt
          </button>

          {note ? (
            <button type="button" onClick={removeNote} className="inline-flex items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-600 hover:bg-red-100">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          ) : (
            <button type="button" onClick={createNote} disabled={status === "saving"} className="gradient-bg inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 disabled:opacity-70">
              {status === "saving" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />} Save note
            </button>
          )}
        </div>
      </div>

      {status === "error" && !note && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">{error}</p>}

      <div className="mb-3 flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">Colour</span>
        {COLOR_KEYS.map((k) => (
          <button key={k} type="button" onClick={() => pickColor(k)} aria-label={`${k} note`} className={`h-5 w-5 rounded-full ${noteColor(k).dot} ring-offset-2 ${color === k ? "ring-2 ring-slate-700" : ""}`} />
        ))}
      </div>
      <div className={`overflow-hidden rounded-[2rem] border shadow-[0_25px_70px_rgba(15,23,42,0.06)] ${noteColor(color).card}`}>
        {noteSource?.slug && (
          <Link href={`/blog/${noteSource.slug}`} className="flex items-center gap-2 border-b border-slate-100 bg-blue-50/60 px-6 py-3 text-xs font-semibold text-blue-700 hover:bg-blue-50">
            <BookOpen className="h-4 w-4" /> From article: {noteSource.title || noteSource.slug}
          </Link>
        )}
        {note?.quote && (
          <blockquote className="mx-6 mt-5 border-l-4 border-amber-300 pl-4 text-sm italic text-slate-600 sm:mx-8">“{note.quote}”</blockquote>
        )}
        <input
          value={title}
          onChange={edit(setTitle)}
          placeholder="Note title"
          maxLength={200}
          aria-label="Note title"
          className="w-full border-b border-black/5 bg-transparent px-6 py-5 text-2xl font-extrabold text-slate-900 outline-none placeholder:text-slate-300 sm:px-8"
        />
        <textarea
          value={body}
          onChange={edit(setBody)}
          placeholder={"Start writing… Markdown works great here:\n\n## Key ideas\n- map() returns a new array\n\n```js\nconst doubled = nums.map(n => n * 2)\n```"}
          aria-label="Note body"
          className="block min-h-[55vh] w-full resize-y bg-transparent px-6 py-5 font-mono text-[15px] leading-7 text-slate-700 outline-none placeholder:text-slate-300 sm:px-8"
        />
        <div className="border-t border-black/5 px-6 py-3 text-xs text-slate-400 sm:px-8">
          {words} words · {note ? "Changes save automatically" : "Click “Save note” to keep it in your account"}
        </div>
      </div>
    </div>
  );
}
