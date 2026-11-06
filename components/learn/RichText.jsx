// Renders lesson paragraph markup: `code`, **bold**, *italic*, and "- " bullet lists.

function inline(text, keyPrefix) {
  const parts = String(text).split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={key} className="rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.86em] text-pink-700">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={key} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function RichText({ text, className = "" }) {
  const lines = String(text).split("\n");
  const isList = lines.length > 0 && lines.every((l) => l.trim().startsWith("- "));

  if (isList) {
    return (
      <ul className={`space-y-2.5 ${className}`}>
        {lines.map((l, i) => (
          <li key={i} className="flex gap-3 text-[17px] leading-8 text-slate-600">
            <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            <span>{inline(l.trim().slice(2), `li${i}`)}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className={`text-[17px] leading-8 text-slate-600 ${className}`}>{inline(text, "p")}</p>;
}
