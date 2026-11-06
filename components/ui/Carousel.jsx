"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Sliding carousel with autoplay, swipe, arrows and dots.
 *
 * Props:
 *  - items: array of data
 *  - renderItem: (item, index, isActive) => ReactNode
 *  - perView: { base, md, lg } slides visible per breakpoint
 *  - interval: autoplay delay in ms (0 disables)
 *  - gap: px between slides
 */
export default function Carousel({
  items,
  renderItem,
  perView = { base: 1, md: 2, lg: 3 },
  interval = 4500,
  gap = 20,
  ariaLabel = "Carousel",
  className = "",
}) {
  const [visible, setVisible] = useState(perView.base);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  // Slides visible depends on screen width.
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w >= 1024 ? perView.lg ?? perView.md ?? perView.base : w >= 768 ? perView.md ?? perView.base : perView.base);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView.base, perView.md, perView.lg]);

  const maxIndex = Math.max(0, items.length - visible);
  const current = Math.min(index, maxIndex);

  const go = useCallback(
    (next) => setIndex(next > maxIndex ? 0 : next < 0 ? maxIndex : next),
    [maxIndex]
  );

  useEffect(() => {
    if (!interval || paused || maxIndex === 0) return;
    const id = setTimeout(() => go(current + 1), interval);
    return () => clearTimeout(id);
  }, [current, paused, interval, maxIndex, go]);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) go(current + (delta < 0 ? 1 : -1));
    touchStart.current = null;
    setPaused(false);
  };

  const slideWidth = `calc((100% - ${gap * (visible - 1)}px) / ${visible})`;
  const offset = `calc(-${current} * (${slideWidth} + ${gap}px))`;

  return (
    <div
      className={`relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden px-1 py-4 -mx-1 -my-4">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ gap: `${gap}px`, transform: `translateX(${offset})` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: slideWidth }}
              aria-hidden={i < current || i >= current + visible}
            >
              {renderItem(item, i, i >= current && i < current + visible)}
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
