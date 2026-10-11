"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Structured Notes",
    description:
      "Understand concepts through simple, organized and easy-to-follow notes.",
    image: "/images/structured-notes.png",
  },
  {
    title: "Learning Videos",
    description:
      "Learn difficult concepts through practical and focused video resources.",
    image: "/images/learning-videos.png",
  },
  {
    title: "References",
    description:
      "Find useful documentation, guides and references for deeper learning.",
    image: "/images/references.png",
  },
  {
    title: "Practice",
    description:
      "Strengthen your knowledge through questions, coding and practical exercises.",
    image: "/images/practice.png",
  },
  {
    title: "Study Paths",
    description:
      "Follow structured learning paths designed to guide you from basics to advanced concepts.",
    image: "/images/study-paths.png",
  },
  {
    title: "Project Ideas",
    description:
      "Turn your knowledge into practical projects and build real development experience.",
    image: "/images/project-ideas.png",
  },
];

export default function FeatureCards() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const totalCards = features.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getCardPosition = (index) => {
    const leftIndex = (currentIndex - 1 + totalCards) % totalCards;
    const middleLeftIndex = currentIndex;
    const middleRightIndex = (currentIndex + 1) % totalCards;
    const rightIndex = (currentIndex + 2) % totalCards;

    if (index === leftIndex) return "left";
    if (index === middleLeftIndex) return "middle-left";
    if (index === middleRightIndex) return "middle-right";
    if (index === rightIndex) return "right";

    return "hidden";
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute right-[-120px] bottom-20 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Learn Your Way
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything you need to keep learning
            </h2>

            <p className="mt-4 text-lg leading-7 text-slate-600">
              Explore different learning formats designed to help you
              understand concepts and apply them in practice.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous feature"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next feature"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="relative mt-12 hidden h-[390px] md:block">
          {features.map((feature, index) => {
            const position = getCardPosition(index);

            return (
              <div
                key={feature.title}
                className={`
                  absolute left-1/2 top-1/2
                  w-[25%]
                  transition-all duration-700 ease-in-out

                  ${
                    position === "middle-left"
                      ? "z-30 -translate-x-[104%] -translate-y-1/2 scale-100 opacity-100"
                      : position === "middle-right"
                        ? "z-30 translate-x-[4%] -translate-y-1/2 scale-100 opacity-100"
                        : position === "left"
                          ? "z-10 -translate-x-[190%] -translate-y-[40%] scale-[0.82] opacity-55 blur-[2px]"
                          : position === "right"
                            ? "z-10 translate-x-[90%] -translate-y-[40%] scale-[0.82] opacity-55 blur-[2px]"
                            : "pointer-events-none z-0 -translate-x-1/2 translate-y-10 scale-75 opacity-0"
                  }
                `}
              >
                <div
                  className={`
                    group relative mx-auto h-[340px]
                    w-full max-w-[360px]
                    overflow-hidden rounded-[2rem]
                    border border-slate-200
                    bg-slate-100
                    shadow-xl
                    transition-shadow duration-500

                    ${
                      position === "middle-left" ||
                      position === "middle-right"
                        ? "shadow-[0_25px_70px_rgba(37,99,235,0.22)]"
                        : "shadow-lg"
                    }
                  `}
                >
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

                  {/* Glow */}
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl transition duration-500 group-hover:bg-purple-500/30" />

                  <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/85">
                      {feature.description}
                    </p>

                    <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      Explore
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DOTS ================= */}
        <div className="mt-6 hidden items-center justify-center gap-2 md:flex">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to feature ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-7 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative mt-10 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="w-full shrink-0 px-1"
                >
                  <div className="group relative h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/85">
                        {feature.description}
                      </p>

                      <div className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}