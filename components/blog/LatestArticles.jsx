"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import blogPosts from "../../data/blogPosts";

export default function LatestArticles() {
  const sectionRef = useReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = blogPosts.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getCardPosition = (index) => {
    if (index === currentIndex) {
      return "center";
    }

    if (index === (currentIndex - 1 + totalCards) % totalCards) {
      return "left";
    }

    if (index === (currentIndex + 1) % totalCards) {
      return "right";
    }

    return "hidden";
  };

  return (
    <section
      ref={sectionRef}
      id="latest-articles"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-40 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute right-[-100px] bottom-20 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-badge mb-3 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Fresh from NoteQuest
            </div>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Latest Articles
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              Practical articles and useful concepts to keep your learning
              journey moving forward.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="group mr-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View all articles

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous article"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next article"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div className="relative mt-12 hidden h-[390px] md:block">
          {blogPosts.map((article, index) => {
            const position = getCardPosition(index);

            return (
              <div
                key={article.slug}
                className={`
                  absolute left-1/2 top-1/2
                  w-[34%]
                  transition-all duration-700 ease-in-out
                  ${
                    position === "center"
                      ? "z-30 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
                      : position === "left"
                        ? "z-10 -translate-x-[108%] -translate-y-[42%] scale-[0.86] opacity-65 blur-[1.5px]"
                        : position === "right"
                          ? "z-10 translate-x-[8%] -translate-y-[42%] scale-[0.86] opacity-65 blur-[1.5px]"
                          : "pointer-events-none z-0 -translate-x-1/2 translate-y-10 scale-75 opacity-0"
                  }
                `}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className={`
                    group relative block h-[340px] overflow-hidden
                    rounded-[2rem]
                    border border-slate-200
                    bg-slate-100
                    shadow-xl
                    transition-shadow duration-500
                    ${
                      position === "center"
                        ? "shadow-[0_25px_70px_rgba(37,99,235,0.22)]"
                        : "shadow-lg"
                    }
                  `}
                >
                  {/* Image */}
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 60vw, 34vw"
                  />

                  {/* Main Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

                  {/* Color Glow */}
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />

                  <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-lg backdrop-blur">
                      {article.category}
                    </span>
                  </div>

                  {/* Center Content */}
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="line-clamp-2 text-xl font-bold leading-7 text-white drop-shadow-lg">
                      {article.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-white/75">
                        {article.date}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Read Article

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
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
              {blogPosts.map((article) => (
                <div
                  key={article.slug}
                  className="w-full shrink-0 px-1"
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group relative block h-[330px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-xl"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-lg backdrop-blur">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5">
                      <h3 className="line-clamp-2 text-xl font-bold leading-7 text-white">
                        {article.title}
                      </h3>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-white/75">
                          {article.date}
                        </span>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                          Read Article

                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {blogPosts.map((article, index) => (
                <button
                  key={article.slug}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to article ${index + 1}`}
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

        {/* Desktop Dots */}
        <div className="mt-4 hidden items-center justify-center gap-2 md:flex">
          {blogPosts.map((article, index) => (
            <button
              key={article.slug}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to article ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-7 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}