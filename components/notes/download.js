import { track } from "@/components/analytics/track";

function fileName(title, ext) {
  const base = String(title || "note").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "note";
  return `${base.slice(0, 60)}.${ext}`;
}

export function noteToMarkdown(note) {
  const lines = [`# ${note.title || "Untitled note"}`, ""];
  if (note.source?.title) lines.push(`> From: ${note.source.title}`, "");
  if (note.quote) lines.push(...note.quote.split("\n").map((l) => `> ${l}`), "");
  lines.push(note.body || "");
  return lines.join("\n");
}

/** Save a note to the user's computer. */
export function downloadNote(note, format = "md") {
  const text = format === "md" ? noteToMarkdown(note) : `${note.title}\n\n${note.body || ""}`;
  saveFile(text, fileName(note.title, format), format === "md" ? "text/markdown" : "text/plain");
  track("note_downloaded", { target: note.id || "unsaved", meta: { format, title: note.title } });
}

export function downloadAllNotes(notes, name = "notequest-notes") {
  const text = notes.map(noteToMarkdown).join("\n\n---\n\n");
  saveFile(text, fileName(name, "md"), "text/markdown");
  track("note_downloaded", { target: "all", meta: { format: "md", count: notes.length } });
}

function saveFile(text, name, type) {
  const url = URL.createObjectURL(new Blob([text], { type: `${type};charset=utf-8` }));
  const a = Object.assign(document.createElement("a"), { href: url, download: name });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
