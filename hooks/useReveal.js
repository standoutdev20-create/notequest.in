"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal — Watches all `.reveal` elements inside the ref container.
 * When they enter the viewport, adds the `.visible` class to trigger
 * the CSS animation defined in globals.css.
 *
 * Usage:
 *   const sectionRef = useReveal();
 *   <section ref={sectionRef}>
 *     <div className="reveal">...</div>
 *     <div className="reveal reveal-delay-2">...</div>
 *   </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing after animation fires (perf optimization)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
