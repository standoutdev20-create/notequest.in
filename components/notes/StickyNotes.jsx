"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, Download, Loader2, Plus, StickyNote, Trash2, X } from "lucide-react";
import { api } from "@/lib/client";
import { COLOR_KEYS, noteColor } from "./colors";
import { downloadAllNotes } from "./download";

const titleFrom = (body, fallback) => {
  const first = String(body || "").split("\n").find((l) => l.trim());
  return (first || fallback || "Sticky note").replace(/^#+\s*/, "").slice(0, 80);
};

/** One editable sticky note that autosaves. */
function Sticky({ note, onChange, onDelete, autoFocus }) {
  const [body, setBody] = useState(note.body);
  const [state, setState] = useState("saved"); // saved | dirty | saving | error
  const c = noteColor(note.color);
  const ref = useRef(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (state !== "dirty") return;
    const t = setTimeout(async () => {
      setState("saving");
      try {
        const { note: saved } = await api(`/notes/${note.id}`, {
          method: "PATCH",
          body: { body, title: titleFrom(body, note.source?.title) },
        });
        onChange(saved);
        setState("saved");
      } catch {
        setState("error");
      }
    }, 700);
    return () => clearTimeout(t);
  }, [state, body, note.id, note.source?.title, onChange]);

  async function setColor(color) {
    const { note: saved } = await api(`/notes/${note.id}`, { method: "PATCH", body: { color } });
    onChange(saved);
  }

  return (
    <div className={`group relative rounded-2xl border p-4 pt-5 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.25)] transition ${c.card}`}>
      <span className={`absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rotate-[-2deg] rounded-sm ${c.tape}`} aria-hidden />
      {note.quote && (
        <blockquote className={`mb-2 border-l-2 border-current/30 pl-3 text-xs italic leading-5 opacity-80 ${c.text}`}>
          “{note.quote}”
        </blockquote>
      )}
      <textarea
        ref={ref}
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setState("dirty");
        }}
        rows={Math.min(10, Math.max(3, body.split("\n").length + 1))}
        placeholder="Write your note…"
        aria-label="Sticky note"
        className={`w-full resize-none bg-transparent text-sm leading-6 outline-none placeholder:opacity-50 ${c.text}`}
      />
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          {COLOR_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setColor(key)}
              aria-label={`${key} note`}
              className={`h-4 w-4 rounded-full ${noteColor(key).dot} ring-offset-1 transition ${note.color === key ? "ring-2 ring-slate-500" : "opacity-70 hover:opacity-100"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
          {state === "saving" && <Loader2 className="h-3 w-3 animate-spin" />}
          {state === "saved" && <Check className="h-3 w-3 text-emerald-600" />}
          {state === "error" && <span className="text-red-600">Not saved</span>}
          <button type="button" onClick={() => onDelete(note)} aria-label="Delete note" className="rounded-md p-1 text-slate-400 opacity-0 transition hover:bg-white/60 hover:text-red-600 group-hover:opacity-100 focus:opacity-100">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Sticky notes pinned to a lesson (or any source). Notes save to the account
 * and can be downloaded. `pendingQuote` creates a note from highlighted text.
 */
export default function StickyNotes({ source, initialNotes = [], signedIn, loginHref, pendingQuote, onQuoteUsed, onClose }) {
  const [notes, setNotes] = useState(initialNotes);
  const [busy, setBusy] = useState(false);
  const [focusId, setFocusId] = useState(null);
  const [error, setError] = useState("");

  async function add(quote) {
    setBusy(true);
    setError("");
    try {
      const { note } = await api("/notes", {
        method: "POST",
        body: { title: titleFrom("", `Note: ${source.title}`), body: "", quote: quote || undefined, color: "yellow", source },
      });
      setNotes((n) => [note, ...n]);
      setFocusId(note.id);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  // Create a note when the reader highlights text and clicks "Add to note".
  useEffect(() => {
    if (!pendingQuote || !signedIn) return;
    const t = setTimeout(() => {
      add(pendingQuote);
      onQuoteUsed?.();
    }, 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuote]);

  async function remove(note) {
    if (!confirm("Delete this sticky note?")) return;
    await api(`/notes/${note.id}`, { method: "DELETE" });
    setNotes((n) => n.filter((x) => x.id !== note.id));
  }

  const update = (saved) => setNotes((n) => n.map((x) => (x.id === saved.id ? saved : x)));

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <StickyNote className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-slate-900">Sticky notes</p>
            <p className="text-[11px] text-slate-500">{signedIn ? `${notes.length} on this lesson` : "Saved to your account"}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {notes.length > 0 && (
            <button type="button" onClick={() => downloadAllNotes(notes, `${source.title} notes`)} title="Download these notes (.md)" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-indigo-600">
              <Download className="h-4 w-4" />
            </button>
          )}
          {onClose && (
            <button type="button" onClick={onClose} aria-label="Close notes" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {!signedIn ? (
        <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/60 p-5 text-center">
          <p className="text-sm font-semibold text-amber-900">Take notes while you read</p>
          <p className="mt-1 text-xs text-amber-800/80">Highlight any text or add a sticky note. It&apos;s saved to your account and downloadable.</p>
          <Link href={loginHref} className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white">Log in to take notes</Link>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={() => add()}
            disabled={busy}
            className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800 disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Add sticky note
          </button>
          {error && <p className="mb-3 text-xs font-medium text-red-600">{error}</p>}
          <div className="-mx-1 flex-1 space-y-4 overflow-y-auto px-1 pb-2 pt-2">
            {notes.length === 0 && (
              <p className="px-2 text-center text-xs leading-5 text-slate-400">
                Tip: highlight a sentence in the lesson and choose <b>Add to note</b>.
              </p>
            )}
            {notes.map((n) => (
              <Sticky key={n.id} note={n} onChange={update} onDelete={remove} autoFocus={n.id === focusId} />
            ))}
          </div>
          <Link href="/notes" className="mt-3 text-center text-xs font-semibold text-indigo-600 hover:text-indigo-700">
            Open all my notes →
          </Link>
        </>
      )}
    </div>
  );
}
