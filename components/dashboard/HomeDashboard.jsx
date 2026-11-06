import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Compass,
  Flame,
  NotebookPen,
  PlayCircle,
  Plus,
  Route,
  Scale,
  Settings2,
  Sparkles,
  StickyNote,
  Target,
  Trophy,
} from "lucide-react";
import Heatmap from "./Heatmap";
import GoalRing from "./GoalRing";
import { SubjectIcon } from "@/components/learn/subjectIcons";
import { theme } from "@/lib/learning";
import { noteColor } from "@/components/notes/colors";
import { timeAgo } from "@/lib/format";

function greeting() {
  const h = Number(new Date().toLocaleString("en-US", { hour: "numeric", hour12: false, timeZone: "Asia/Kolkata" }));
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

function SectionTitle({ icon: Icon, title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
        <Icon className="h-5 w-5 text-indigo-600" /> {title}
      </h2>
      {action}
    </div>
  );
}

export default function HomeDashboard({ data, posts }) {
  const { user, stats, continueLesson, recommendations, subjects, focus, heatmap, notes, paths, recentlyCompleted } = data;
  const first = user.name.split(" ")[0];
  const goalMet = stats.lessonsToday >= stats.dailyGoal;
  const mySubjects = [...subjects].sort((a, b) => Number(b.interested) - Number(a.interested) || b.percent - a.percent);
  const weakest = focus.length > 1 ? [...focus].sort((a, b) => a.percent - b.percent)[0] : null;
  const strongest = focus.length > 1 ? [...focus].sort((a, b) => b.percent - a.percent)[0] : null;
  const contTheme = theme(subjects.find((s) => s.slug === continueLesson?.subject)?.color);

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold text-indigo-300">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "Asia/Kolkata" })}</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {greeting()}, {first} 👋
              </h1>
              <p className="mt-3 max-w-xl text-base text-slate-300">
                {stats.lessonsCompleted === 0
                  ? "Let's start your first lesson. A few minutes a day adds up fast."
                  : goalMet
                    ? "Daily goal reached. Anything more today is a bonus. 🎯"
                    : `You're ${stats.dailyGoal - stats.lessonsToday} ${stats.dailyGoal - stats.lessonsToday === 1 ? "lesson" : "lessons"} away from today's goal.`}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 pr-6 backdrop-blur">
                <GoalRing value={stats.lessonsToday} goal={stats.dailyGoal} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Daily goal</p>
                  <p className="mt-1 text-sm font-bold text-white">{goalMet ? "Completed!" : `${stats.dailyGoal} ${stats.dailyGoal === 1 ? "lesson" : "lessons"}/day`}</p>
                  <Link href="/welcome" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-indigo-200">
                    <Settings2 className="h-3 w-3" /> Adjust
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 to-amber-400/10 p-4 text-center backdrop-blur">
                <Flame className={`mx-auto h-7 w-7 ${stats.streak ? "text-orange-400" : "text-slate-500"}`} />
                <p className="mt-1 text-2xl font-extrabold text-white">{stats.streak}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-orange-200/80">day streak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto -mt-20 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* ===== Stat strip ===== */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { icon: CheckCircle2, label: "Lessons completed", value: stats.lessonsCompleted, hint: `${stats.lessonsThisWeek} this week` },
            { icon: Clock3, label: "Time learned", value: stats.minutesLearned >= 60 ? `${Math.floor(stats.minutesLearned / 60)}h ${stats.minutesLearned % 60}m` : `${stats.minutesLearned}m`, hint: "from completed lessons" },
            { icon: StickyNote, label: "Notes", value: stats.notes, hint: "saved to your account" },
            { icon: Target, label: "Active days", value: stats.activeDays, hint: "last 12 weeks" },
          ].map(({ icon: Icon, label, value, hint }) => (
            <div key={label} className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                <Icon className="h-4 w-4 text-indigo-500" />
              </div>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">{value}</p>
              <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-8">
            {/* ===== Continue learning ===== */}
            {continueLesson && (
              <Link
                href={`/subjects/${continueLesson.subject}/${continueLesson.slug}`}
                className={`group relative block overflow-hidden rounded-[2rem] bg-gradient-to-br ${contTheme.from} ${contTheme.to} p-7 text-white shadow-2xl shadow-indigo-500/20 transition hover:-translate-y-1 sm:p-9`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                <SubjectIcon slug={continueLesson.subject} className="pointer-events-none absolute -bottom-6 right-6 h-40 w-40 text-white/10" strokeWidth={1.2} />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  {stats.lessonsCompleted ? "Continue learning" : "Start here"} · {continueLesson.subjectTitle}
                </p>
                <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl">{continueLesson.title}</h2>
                {continueLesson.summary && <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">{continueLesson.summary}</p>}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition group-hover:gap-3">
                    <PlayCircle className="h-4 w-4" /> {stats.lessonsCompleted ? "Resume lesson" : "Start lesson"}
                  </span>
                  <span className="text-sm text-white/80">{continueLesson.module} · {continueLesson.duration} min</span>
                </div>
              </Link>
            )}

            {/* ===== Balanced growth ===== */}
            <section className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm sm:p-7">
              <SectionTitle
                icon={Scale}
                title="Grow evenly across your interests"
                action={<Link href="/welcome" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">Edit interests</Link>}
              />
              {focus.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center">
                  <p className="text-sm text-slate-600">Pick the topics you care about and we&apos;ll balance your learning across them.</p>
                  <Link href="/welcome" className="gradient-bg mt-4 inline-flex rounded-xl px-4 py-2 text-sm font-bold text-white">Choose interests</Link>
                </div>
              ) : (
                <>
                  {weakest && strongest && weakest.slug !== strongest.slug && strongest.percent - weakest.percent >= 10 && (
                    <p className="mb-5 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                      <b>{strongest.title}</b> is pulling ahead ({strongest.percent}%). A lesson in <b>{weakest.title}</b> ({weakest.percent}%) next will keep your skills balanced.
                    </p>
                  )}
                  <div className="space-y-4">
                    {focus.map((f) => {
                      const t = theme(subjects.find((s) => s.slug === f.slug)?.color);
                      return (
                        <Link key={f.slug} href={`/subjects/${f.slug}`} className="group flex items-center gap-4">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.soft} ${t.text}`}><SubjectIcon slug={f.slug} className="h-5 w-5" /></span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-bold text-slate-800 group-hover:text-indigo-700">{f.title}</span>
                              <span className="font-semibold tabular-nums text-slate-500">{f.done}/{f.total} · {f.percent}%</span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div className={`h-full rounded-full bg-gradient-to-r ${t.from} ${t.to}`} style={{ width: `${Math.max(f.percent, 2)}%` }} />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
            </section>

            {/* ===== Recommended ===== */}
            {recommendations.length > 0 && (
              <section>
                <SectionTitle icon={Sparkles} title="Recommended for you" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {recommendations.map((r, i) => {
                    const t = theme(subjects.find((s) => s.slug === r.subject)?.color);
                    return (
                      <Link key={`${r.subject}/${r.slug}`} href={`/subjects/${r.subject}/${r.slug}`} className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg">
                        <div className="flex items-center justify-between">
                          <span className={`rounded-full ${t.soft} px-2.5 py-1 text-[11px] font-bold ${t.text}`}>{r.subjectTitle}</span>
                          {i === 0 && <span className="text-[11px] font-bold text-amber-600">Best next step</span>}
                        </div>
                        <h3 className="mt-3 font-extrabold text-slate-900 group-hover:text-indigo-700">{r.title}</h3>
                        <p className="mt-1 line-clamp-2 flex-1 text-sm leading-6 text-slate-500">{r.summary}</p>
                        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                          <span>{r.module} · {r.duration} min</span>
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-indigo-600" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ===== Activity ===== */}
            <section className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm sm:p-7">
              <SectionTitle icon={Flame} title="Learning activity" />
              <Heatmap days={heatmap} />
            </section>

            {/* ===== All subjects ===== */}
            <section>
              <SectionTitle icon={Compass} title="Your courses" action={<Link href="/subjects" className="text-xs font-semibold text-indigo-600">Browse all</Link>} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {mySubjects.map((s) => {
                  const t = theme(s.color);
                  return (
                    <Link key={s.slug} href={s.next ? `/subjects/${s.slug}/${s.next.slug}` : `/subjects/${s.slug}`} className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                      <div className={`relative h-20 bg-gradient-to-br ${t.from} ${t.to}`}>
                        {s.image && <Image src={s.image} alt="" fill className="object-cover opacity-30 mix-blend-overlay" sizes="300px" />}
                        <SubjectIcon slug={s.slug} className="absolute bottom-3 left-4 h-7 w-7 text-white" />
                        {s.interested && <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-700">Interest</span>}
                      </div>
                      <div className="p-4">
                        <p className="font-extrabold text-slate-900 group-hover:text-indigo-700">{s.title}</p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${s.percent}%` }} />
                        </div>
                        <p className="mt-2 truncate text-xs text-slate-500">
                          {s.percent === 100 ? "Completed 🎉" : s.done ? `${s.done}/${s.total} · next: ${s.next?.title}` : `${s.total} lessons · not started`}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ===== Right column ===== */}
          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <SectionTitle
                icon={StickyNote}
                title="Sticky notes"
                action={
                  <Link href="/notes/new" className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-100">
                    <Plus className="h-3.5 w-3.5" /> New
                  </Link>
                }
              />
              {notes.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500">
                  Highlight text in any lesson to save your first sticky note.
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {notes.slice(0, 6).map((n, i) => {
                    const c = noteColor(n.color);
                    return (
                      <Link key={n.id} href={n.source?.type === "lesson" ? `/subjects/${n.source.slug}` : `/notes/${n.id}`} className={`relative rounded-2xl border p-3 pt-4 text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${c.card} ${i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"}`}>
                        <span className={`absolute -top-1.5 left-1/2 h-3 w-10 -translate-x-1/2 rounded-sm ${c.tape}`} />
                        <p className={`line-clamp-4 font-medium leading-5 ${c.text}`}>{n.body || n.quote || n.title}</p>
                        <p className="mt-2 truncate text-[10px] text-slate-500">{n.source?.title || "Personal"} · {timeAgo(n.updatedAt)}</p>
                      </Link>
                    );
                  })}
                </div>
              )}
              <Link href="/notes" className="mt-4 flex items-center justify-center gap-1 text-xs font-semibold text-indigo-600">
                All notes <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <section className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm">
              <SectionTitle icon={Route} title="Study paths" action={<Link href="/study-path" className="text-xs font-semibold text-indigo-600">Explore</Link>} />
              {paths.length === 0 ? (
                <p className="text-sm text-slate-500">Follow a career path step by step. Each step links to the lessons that teach it.</p>
              ) : (
                <div className="space-y-4">
                  {paths.slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/study-path/${p.slug}`} className="block">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-800">{p.title}</span>
                        <span className="font-semibold text-indigo-700">{p.percent}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-indigo-600" style={{ width: `${p.percent}%` }} />
                      </div>
                      <p className="mt-1 text-xs text-slate-400">{p.nextStep ? `Next: ${p.nextStep.title}` : "Completed"}</p>
                    </Link>
                  ))}
                </div>
              )}
            </section>

            {recentlyCompleted.length > 0 && (
              <section className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm">
                <SectionTitle icon={Trophy} title="Recently completed" />
                <ul className="space-y-3">
                  {recentlyCompleted.map((l) => (
                    <li key={`${l.subject}/${l.slug}`}>
                      <Link href={`/subjects/${l.subject}/${l.slug}`} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>
                          <span className="block font-semibold text-slate-800">{l.title}</span>
                          <span className="text-xs text-slate-400">{l.subjectTitle}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl">
              <SectionTitle icon={BookOpen} title={<span className="text-white">Fresh from the blog</span>} />
              <div className="space-y-3">
                {posts.slice(0, 3).map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-2xl bg-white/5 p-3 transition hover:bg-white/10">
                    <p className="text-sm font-bold">{p.title}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{p.category} · {p.readTime}</p>
                  </Link>
                ))}
              </div>
              <Link href="/notes/new" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900">
                <NotebookPen className="h-4 w-4" /> Write a note
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
