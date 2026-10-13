"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, CalendarDays, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import blogPosts from "../../data/blogPosts";

export default function FeaturedArticle() {
  const sectionRef = useReveal();
  const article = blogPosts.find((post) => post.featured);

  if (!article) return null;

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20">
      {/* Background */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-badge mb-3 inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Featured Article
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Worth Reading
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              A practical article selected to help you learn something useful
              and apply it in your projects.
            </p>
          </div>
        </div>

        {/* Featured Card */}
        <article className="reveal reveal-delay-200 group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(37,99,235,0.14)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* IMAGE AREA */}
            <div className="relative min-h-[340px] overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 lg:min-h-[470px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-blue-500/10" />

              <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-400/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-500/30 blur-3xl" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-bold text-blue-700 shadow-lg backdrop-blur">
                  {article.category}
                </span>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-blue-500" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4 text-purple-500" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 transition duration-300 group-hover:text-blue-600 sm:text-3xl">
                  {article.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  {article.excerpt}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-bold text-white shadow-sm">
                    NQ
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {article.author}
                    </p>
                    <p className="text-xs text-slate-400">
                      NoteQuest Editorial
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={`/blog/${article.slug}`}
                  className="group/button inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}