/** Infinitely sliding row. Children are rendered twice for a seamless loop. */
export default function Marquee({ children, reverse = false, duration = 40, className = "" }) {
  return (
    <div className={`marquee marquee-mask overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
