// Shared formatting helpers (safe to import from server and client code).

/** Parse SQLite `datetime('now')` strings (UTC, no zone) and ISO strings. */
export function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const s = String(value);
  const iso = s.includes("T") ? s : s.replace(" ", "T") + "Z";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatDate(value, opts = { month: "long", day: "numeric", year: "numeric" }) {
  const d = toDate(value);
  return d ? d.toLocaleDateString("en-US", opts) : "";
}

export function formatDateTime(value) {
  const d = toDate(value);
  return d
    ? d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
    : "";
}

export function timeAgo(value) {
  const d = toDate(value);
  if (!d) return "never";
  const s = Math.round((Date.now() - d.getTime()) / 1000);
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const days = Math.round(h / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(d, { month: "short", day: "numeric", year: "numeric" });
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}
