"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll reveal.
 *
 * Runs on every route and animates content in as it scrolls into view:
 *  - every <section> inside <main> fades up
 *  - children of grids inside those sections fade up one after another
 *  - any element with data-reveal="up|left|right|zoom" is animated explicitly
 *
 * Opt out with data-no-reveal on an element (and everything inside it).
 * Classes are only added on the client, and never to elements already on
 * screen, so there is no flash and content stays visible without JS.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const targets = new Set();
    const viewportHeight = window.innerHeight;

    const isOptedOut = (el) => Boolean(el.closest("[data-no-reveal]"));
    const isOnScreen = (el) => el.getBoundingClientRect().top < viewportHeight * 0.92;

    const add = (el, variant, delay = 0) => {
      if (targets.has(el) || isOptedOut(el) || isOnScreen(el)) return;
      targets.add(el);
      el.classList.add("reveal");
      if (variant && variant !== "up") el.classList.add(`reveal-${variant}`);
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(el);
    };

    // Explicit targets first, so their variant wins.
    main.querySelectorAll("[data-reveal]").forEach((el) => {
      add(el, el.dataset.reveal, Number(el.dataset.revealDelay) || 0);
    });

    main.querySelectorAll("section").forEach((section) => {
      // Stagger grid items; skip grids nested inside other grid items.
      const grids = section.querySelectorAll(".grid");
      const staggered = new Set();

      grids.forEach((grid) => {
        const insideItem = [...staggered].some((item) => item.contains(grid));
        if (insideItem) return;

        const items = [...grid.children];
        if (items.length < 2 || items.length > 24) return;

        items.forEach((item, i) => {
          staggered.add(item);
          add(item, "up", (i % 6) * 90);
        });
      });

      // Section headings and intro copy.
      section.querySelectorAll("h2").forEach((heading) => {
        const block = heading.parentElement;
        if (block && ![...staggered].some((item) => item.contains(block))) {
          add(block, "up");
        }
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
