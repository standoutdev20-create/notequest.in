"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/gallery/laptop-study.jpg",
    tag: "Structured Notes",
    title: "Clear notes that make concepts click",
    text: "Short, organized notes for every topic — so you spend time understanding, not searching.",
    href: "/subjects",
    cta: "Browse subjects",
  },
  {
    image: "/images/gallery/workspace.jpg",
    tag: "Notes",
    title: "Write notes as you learn",
    text: "Capture ideas while reading articles, then download them to your computer.",
    href: "/notes",
    cta: "Open my notes",
  },
  {
    image: "/images/gallery/students.jpg",
    tag: "Study Paths",
    title: "Follow a path from basics to advanced",
    text: "Step-by-step roadmaps that tell you exactly what to learn next.",
    href: "/study-path",
    cta: "Pick a path",
  },
  {
    image: "/images/gallery/classroom.jpg",
    tag: "Resources",
    title: "Hand-picked videos & references",
    text: "The best tutorials, docs and guides — curated and grouped by subject.",
    href: "/resources",
    cta: "Explore resources",
  },
];

const DURATION = 6000;

export default function ImageShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  const go = (i) => setActive((i + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % slides.length), DURATION);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="section-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Inside NoteQuest
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One place for every way you learn
          </h2>
        </div>

        <div
          className="group relative h-[480px] overflow-hidden rounded-[32px] bg-slate-900 shadow-2xl shadow-blue-900/20 sm:h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const d = e.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(d) > 40) go(active + (d < 0 ? 1 : -1));
            touchStart.current = null;
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="NoteQuest highlights"
        >
          {slides.map((slide, i) => {
            const isActive = i === active;
            return (
              <div
                key={slide.title}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`h-full w-full object-cover ${isActive ? "ken-burns" : ""}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-7 sm:px-12 lg:px-16">
                    {isActive && (
                      <>
                        <span className="animate-fade-up inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                          {slide.tag}
                        </span>
                        <h3 className="animate-fade-up delay-100 mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                          {slide.title}
                        </h3>
                        <p className="animate-fade-up delay-200 mt-4 text-base leading-7 text-slate-200 sm:text-lg">
                          {slide.text}
                        </p>
                        <Link
                          href={slide.href}
                          tabIndex={isActive ? 0 : -1}
                          className="animate-fade-up delay-300 btn-shine group/btn mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          {slide.cta}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Arrows */}
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white/25 group-hover:opacity-100 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white/25 group-hover:opacity-100 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Progress tabs */}
          <div data-no-reveal className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-4 gap-3 px-7 pb-6 sm:px-12 lg:px-16">
            {slides.map((slide, i) => (
              <button
                key={slide.tag}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${slide.tag}`}
                className="group/tab text-left"
              >
                <span className="block h-1 overflow-hidden rounded-full bg-white/25">
                  {i === active && (
                    <span
                      key={`${active}-${paused}`}
                      className="progress-fill block h-full rounded-full bg-white"
                      style={{
                        "--progress-duration": `${DURATION}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                  {i < active && <span className="block h-full w-full rounded-full bg-white/70" />}
                </span>
                <span
                  className={`mt-2 hidden text-xs font-semibold transition-colors duration-300 sm:block ${
                    i === active ? "text-white" : "text-white/60 group-hover/tab:text-white"
                  }`}
                >
                  {slide.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
