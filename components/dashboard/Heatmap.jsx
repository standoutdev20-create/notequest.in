/**
 * 12-week learning activity heatmap (sequential, single hue).
 * Each cell has a hover tooltip; the caption states the totals as text.
 */
const STEPS = ["bg-slate-100", "bg-indigo-200", "bg-indigo-400", "bg-indigo-600", "bg-indigo-800"];

function level(count, max) {
  if (!count) return 0;
  return Math.min(4, Math.ceil((count / Math.max(1, max)) * 4));
}

export default function Heatmap({ days }) {
  const max = Math.max(1, ...days.map((d) => d.count));
  // Pad the start so columns are Monday–Sunday weeks.
  const firstDow = (new Date(`${days[0].day}T00:00:00Z`).getUTCDay() + 6) % 7;
  const cells = [...Array(firstDow).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const active = days.filter((d) => d.count).length;
  const fmt = (day) => new Date(`${day}T00:00:00Z`).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

  return (
    <figure>
      <div className="flex gap-[3px] overflow-x-auto pb-1">
        <div className="mr-1 grid grid-rows-7 gap-[3px] text-[9px] font-medium leading-[13px] text-slate-400">
          {["Mon", "", "Wed", "", "Fri", "", ""].map((d, i) => <span key={i} className="h-[13px]">{d}</span>)}
        </div>
        {weeks.map((w, wi) => (
          <div key={wi} className="grid grid-rows-7 gap-[3px]">
            {w.map((d, di) =>
              d ? (
                <div key={d.day} className={`group relative h-[13px] w-[13px] rounded-[3px] ${STEPS[level(d.count, max)]}`}>
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white shadow-lg group-hover:block">
                    {d.count} {d.count === 1 ? "activity" : "activities"} · {fmt(d.day)}
                  </span>
                </div>
              ) : (
                <div key={`pad-${di}`} className="h-[13px] w-[13px]" />
              )
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <span>{active} active {active === 1 ? "day" : "days"} in the last 12 weeks</span>
        <span className="flex items-center gap-1">
          Less {STEPS.map((c) => <span key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />)} More
        </span>
      </figcaption>
    </figure>
  );
}
