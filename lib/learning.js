import { notFound, unstable_rethrow } from "next/navigation";
import { apiFetch } from "./api.js";

async function getOrNotFound(path) {
  try {
    return await apiFetch(path);
  } catch (err) {
    unstable_rethrow(err);
    if (err.status === 404) notFound();
    throw err;
  }
}

export async function getSubjects() {
  try {
    return (await apiFetch("/subjects")).subjects;
  } catch (err) {
    unstable_rethrow(err);
    console.error("[learning] subjects unavailable:", err.message);
    return [];
  }
}

export const getSubject = (slug) => getOrNotFound(`/subjects/${encodeURIComponent(slug)}`);

export const getLesson = (subject, lesson) =>
  getOrNotFound(`/subjects/${encodeURIComponent(subject)}/lessons/${encodeURIComponent(lesson)}`);

/** Completed lesson keys ("subject/lesson") for the signed-in user, or an empty set. */
export async function getCompleted(user, subject) {
  if (!user) return [];
  try {
    const { completed } = await apiFetch(`/learning${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`);
    return completed.map((c) => `${c.subject}/${c.lesson}`);
  } catch (err) {
    unstable_rethrow(err);
    return [];
  }
}

export const SUBJECT_THEMES = {
  blue: { from: "from-blue-600", to: "to-cyan-500", soft: "bg-blue-50", text: "text-blue-700", ring: "ring-blue-200", hex: "#2563eb" },
  purple: { from: "from-violet-600", to: "to-fuchsia-500", soft: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-200", hex: "#7c3aed" },
  green: { from: "from-emerald-600", to: "to-teal-500", soft: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-200", hex: "#059669" },
  orange: { from: "from-orange-500", to: "to-amber-400", soft: "bg-orange-50", text: "text-orange-700", ring: "ring-orange-200", hex: "#ea580c" },
  pink: { from: "from-pink-600", to: "to-rose-500", soft: "bg-pink-50", text: "text-pink-700", ring: "ring-pink-200", hex: "#db2777" },
  cyan: { from: "from-cyan-600", to: "to-sky-500", soft: "bg-cyan-50", text: "text-cyan-700", ring: "ring-cyan-200", hex: "#0891b2" },
  indigo: { from: "from-indigo-600", to: "to-blue-500", soft: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-200", hex: "#4f46e5" },
  red: { from: "from-red-600", to: "to-orange-500", soft: "bg-red-50", text: "text-red-700", ring: "ring-red-200", hex: "#dc2626" },
};
export const theme = (color) => SUBJECT_THEMES[color] || SUBJECT_THEMES.blue;
