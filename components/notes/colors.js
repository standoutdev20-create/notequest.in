// Sticky-note colours shared by the notes page, lesson panel and editor.
export const NOTE_COLORS = {
  yellow: { card: "bg-amber-50 border-amber-200", dot: "bg-amber-300", tape: "bg-amber-200/70", text: "text-amber-900" },
  blue: { card: "bg-sky-50 border-sky-200", dot: "bg-sky-300", tape: "bg-sky-200/70", text: "text-sky-900" },
  green: { card: "bg-emerald-50 border-emerald-200", dot: "bg-emerald-300", tape: "bg-emerald-200/70", text: "text-emerald-900" },
  pink: { card: "bg-pink-50 border-pink-200", dot: "bg-pink-300", tape: "bg-pink-200/70", text: "text-pink-900" },
  purple: { card: "bg-violet-50 border-violet-200", dot: "bg-violet-300", tape: "bg-violet-200/70", text: "text-violet-900" },
};
export const COLOR_KEYS = Object.keys(NOTE_COLORS);
export const noteColor = (c) => NOTE_COLORS[c] || NOTE_COLORS.yellow;
