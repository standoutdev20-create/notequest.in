/** Daily goal ring: lessons completed today vs the learner's goal. */
export default function GoalRing({ value, goal, size = 92 }) {
  const pct = Math.min(1, value / Math.max(1, goal));
  const r = (size - 12) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="9" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-2xl font-extrabold leading-none">{value}/{goal}</span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70">today</span>
      </div>
    </div>
  );
}
