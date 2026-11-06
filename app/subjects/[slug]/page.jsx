import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BarChart3, BookOpen, Briefcase, CheckCircle2, Circle, Clock3, Layers3, PlayCircle, Sparkles, StickyNote } from "lucide-react";
import { apiFetch, getCurrentUser } from "@/lib/api";
import { getCompleted, getSubject, theme } from "@/lib/learning";
import { SubjectIcon } from "@/components/learn/subjectIcons";
import { studyPaths } from "@/data/studyPaths";
import { pathLessons } from "@/data/pathLessons";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { subject } = await getSubject(slug);
    return { title: `${subject.title} course | NoteQuest`, description: subject.description };
  } catch {
    return {};
  }
}

const hours = (min) => (min >= 60 ? `${Math.floor(min / 60)}h ${min % 60 ? `${min % 60}m` : ""}`.trim() : `${min} min`);

export default async function SubjectPage({ params }) {
  const { slug } = await params;
  const [{ subject, modules, stats }, user] = await Promise.all([getSubject(slug), getCurrentUser()]);
  const [completedList, notes] = await Promise.all([
    getCompleted(user, slug),
    user ? apiFetch(`/notes?sourcePrefix=${encodeURIComponent(`${slug}/`)}`).then((r) => r.notes).catch(() => []) : [],
  ]);
  const completed = new Set(completedList);
  const t = theme(subject.color);

  const all = modules.flatMap((m) => m.lessons);
  const done = all.filter((l) => completed.has(`${slug}/${l.slug}`)).length;
  const percent = all.length ? Math.round((done / all.length) * 100) : 0;
  const nextLesson = all.find((l) => !completed.has(`${slug}/${l.slug}`)) || all[0];
  const relatedPaths = Object.entries(pathLessons)
    .filter(([, steps]) => steps.flat().some((ref) => ref.startsWith(`${slug}/`)))
    .map(([p]) => ({ slug: p, ...studyPaths[p] }))
    .filter((p) => p.title)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fafbff]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        {subject.image && (
          <Image src={subject.image} alt="" fill priority className="object-cover opacity-20" sizes="100vw" />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${t.from} ${t.to} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:pb-20">
          <Link href="/subjects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/15">
            <ArrowLeft className="h-4 w-4" /> All subjects
          </Link>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                <SubjectIcon slug={subject.slug} className="h-7 w-7" />
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{subject.title}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{subject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2.5 text-sm">
                {[
                  { icon: BookOpen, label: `${stats.lessons} lessons` },
                  { icon: Layers3, label: `${modules.length} modules` },
                  { icon: Clock3, label: hours(stats.minutes) },
                  { icon: BarChart3, label: subject.level },
                ].map(({ icon: I, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-medium text-white backdrop-blur">
                    <I className="h-4 w-4 opacity-80" /> {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress card */}
            <div className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur">
              {user ? (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-900">Your progress</p>
                    <p className={`text-2xl font-extrabold ${t.text}`}>{percent}%</p>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${percent}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    {done} of {all.length} lessons · <StickyNote className="inline h-3 w-3" /> {notes.length} {notes.length === 1 ? "note" : "notes"}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-bold text-slate-900">Learn {subject.title} for free</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Create an account to track progress and keep sticky notes on every lesson.</p>
                </>
              )}
              {nextLesson && (
                <Link
                  href={`/subjects/${slug}/${nextLesson.slug}`}
                  className="gradient-bg mt-5 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5"
                >
                  <PlayCircle className="h-4 w-4" />
                  {done === 0 ? "Start course" : done === all.length ? "Review course" : `Continue: ${nextLesson.title}`}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Curriculum */}
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Course content</h2>
          {subject.overview && <p className="mt-3 max-w-3xl leading-7 text-slate-600">{subject.overview}</p>}

          <div className="mt-8 space-y-6">
            {modules.map((m, mi) => {
              const mDone = m.lessons.filter((l) => completed.has(`${slug}/${l.slug}`)).length;
              return (
                <div key={m.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/60 px-5 py-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Module {mi + 1}</p>
                      <h3 className="font-extrabold text-slate-900">{m.title}</h3>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                      {user ? `${mDone}/${m.lessons.length} done` : `${m.lessons.length} lessons`}
                    </span>
                  </div>
                  <ol className="divide-y divide-slate-100">
                    {m.lessons.map((l) => {
                      const isDone = completed.has(`${slug}/${l.slug}`);
                      const isNext = user && nextLesson?.slug === l.slug && done < all.length;
                      return (
                        <li key={l.slug}>
                          <Link href={`/subjects/${slug}/${l.slug}`} className={`group flex items-start gap-4 px-5 py-4 transition hover:bg-indigo-50/40 ${isNext ? "bg-indigo-50/50" : ""}`}>
                            {isDone ? (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                            ) : (
                              <Circle className={`mt-0.5 h-5 w-5 shrink-0 ${isNext ? "text-indigo-500" : "text-slate-300"}`} />
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-slate-800 group-hover:text-indigo-700">
                                {l.title}
                                {isNext && <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 align-middle text-[10px] font-bold text-white">Up next</span>}
                              </p>
                              {l.summary && <p className="mt-1 text-sm leading-6 text-slate-500">{l.summary}</p>}
                            </div>
                            <span className="shrink-0 text-xs font-medium text-slate-400">{l.duration} min</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
            {modules.length === 0 && (
              <p className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">Lessons for this subject are coming soon.</p>
            )}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          {subject.whatYouLearn?.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-extrabold text-slate-900"><Sparkles className={`h-4 w-4 ${t.text}`} /> What you&apos;ll learn</h3>
              <ul className="mt-4 space-y-2.5">
                {subject.whatYouLearn.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {w}</li>
                ))}
              </ul>
            </div>
          )}
          {subject.careerPaths?.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-extrabold text-slate-900"><Briefcase className={`h-4 w-4 ${t.text}`} /> Where it leads</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {subject.careerPaths.map((c) => (
                  <span key={c} className={`rounded-full ${t.soft} px-3 py-1 text-xs font-semibold ${t.text}`}>{c}</span>
                ))}
              </div>
            </div>
          )}
          {relatedPaths.length > 0 && (
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Study paths using this course</p>
              <div className="mt-4 space-y-2">
                {relatedPaths.map((p) => (
                  <Link key={p.slug} href={`/study-path/${p.slug}`} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/10">
                    {p.title} <ArrowRight className="h-4 w-4 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
