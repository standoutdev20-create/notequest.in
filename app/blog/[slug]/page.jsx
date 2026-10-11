import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
  BookOpen,
} from "lucide-react";

import blogPosts from "../../../data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  const article = blogPosts.find((post) => post.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogPosts
    .filter((post) => post.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background gradients */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute right-[-120px] top-20 h-[28rem] w-[28rem] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
          {/* Back */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold text-blue-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {article.category}
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {article.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-blue-300" />
                  {article.date}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-purple-300" />
                  {article.readTime}
                </span>

                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-pink-300" />
                  NoteQuest
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-pink-500/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[400px] lg:h-[460px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-blue-500/10" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 left-6 hidden rounded-2xl border border-white/20 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md sm:block">
                <p className="text-xs font-semibold text-slate-400">
                  Written for
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  Developers & Learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute left-[-150px] top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute right-[-150px] top-[40%] h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* Main Content */}
            <article className="max-w-4xl">
              {article.content?.map((section, index) => (
                <section key={`${section.heading}-${index}`} className="mb-12">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-slate-600 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.code && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        <span className="ml-2 text-xs text-slate-500">
                          JavaScript
                        </span>
                      </div>

                      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                        <code>{section.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}

              {/* End Article */}
              <div className="mt-16 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Keep learning with NoteQuest
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Explore more programming concepts, resources and
                      practical articles to strengthen your development
                      journey.
                    </p>

                    <Link
                      href="/blog"
                      className="group mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Explore more articles
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Article Info
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs text-slate-400">Category</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {article.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Published</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {article.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Reading Time</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {article.readTime}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Author</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {article.author}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= RELATED ARTICLES ================= */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-purple-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-600">
              Keep Exploring
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              You May Also Like
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              Continue learning with more practical articles from NoteQuest.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group relative h-[320px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-lg backdrop-blur">
                    {related.category}
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="line-clamp-2 text-xl font-bold leading-7 text-white">
                    {related.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read Article
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 py-16">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <BookOpen className="mx-auto h-10 w-10 text-white" />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Ready to learn more?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Discover more articles, resources and practice content on
            NoteQuest.
          </p>

          <Link
            href="/blog"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Explore NoteQuest Blog
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}