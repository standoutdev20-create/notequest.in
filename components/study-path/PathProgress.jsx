"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, CheckCircle2, Circle, Loader2, PlayCircle, Trophy } from "lucide-react";
import { api } from "@/lib/client";

/**
 * Interactive roadmap: signed-in learners start the path and tick off steps.
 * Progress is stored in the API so it follows them across devices.
 */
export default function PathProgress({ slug, roadmap, signedIn, stepLessons = [] }) {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(signedIn);
  const [busyStep, setBusyStep] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!signedIn) return;
    api(`/paths/${slug}/progress`)
      .then((r) => setProgress(r.progress))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug, signedIn]);

  const completed = new Set(progress?.completedSteps || []);
  const percent = progress?.percent ?? 0;
  const nextIndex = roadmap.findIndex((_, i) => !completed.has(i));

  async function start() {
    setBusyStep("start");
    try {
      setProgress((await api(`/paths/${slug}/start`, { method: "POST" })).progress);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyStep(null);
    }
  }

  async function toggle(index) {
    setBusyStep(index);
    setError("");
    try {
      setProgress((await api(`/paths/${slug}/steps/${index}/toggle`, { method: "POST" })).progress);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyStep(null);
    }
  }

  const loginHref = `/login?next=${encodeURIComponent(`/study-path/${slug}`)}`;

  return (
    <div>
      {/* Progress header */}
      <div className="mb-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-5 sm:p-6">
        {!signedIn ? (
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-extrabold text-slate-900">Track your progress</p>
              <p className="mt-1 text-sm text-slate-500">Log in to follow this path step by step and pick up where you left off.</p>
            </div>
            <Link href={loginHref} className="gradient-bg inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-md">
              <PlayCircle className="h-4 w-4" /> Start this path
            </Link>
          </div>
        ) : loading ? (
          <div className="flex items-center gap-2 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" /> Loading your progress…</div>
        ) : !progress ? (
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-extrabold text-slate-900">Ready when you are</p>
              <p className="mt-1 text-sm text-slate-500">Start the path, then mark each step complete as you finish it.</p>
            </div>
            <button type="button" onClick={start} disabled={busyStep === "start"} className="gradient-bg inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-md disabled:opacity-70">
              {busyStep === "start" ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-4 w-4" />} Start this path
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="font-extrabold text-slate-900">
                {percent === 100 ? (
                  <span className="inline-flex items-center gap-2"><Trophy className="h-5 w-5 text-amber-500" /> Path complete — great work!</span>
                ) : (
                  <>Next up: <span className="text-indigo-700">{roadmap[nextIndex]?.title}</span></>
                )}
              </p>
              <span className="text-sm font-bold text-indigo-700">{percent}%</span>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500" style={{ width: `${percent}%` }} />
            </div>
            <p className="mt-2 text-xs text-slate-500">{progress.done} of {progress.total} steps complete</p>
          </div>
        )}
        {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}
      </div>

      {/* Steps */}
      <div className="space-y-5">
        {roadmap.map((item, index) => {
          const done = completed.has(index);
          const isNext = progress && index === nextIndex;
          return (
            <div
              key={item.step}
              className={`group relative rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/30 ${
                done ? "border-emerald-200 bg-emerald-50/30" : isNext ? "border-blue-300 ring-4 ring-blue-50" : "border-slate-200 hover:border-blue-200"
              }`}
            >
              <div className="flex gap-5">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold ${done ? "bg-emerald-500 text-white" : "bg-gradient-to-br from-blue-50 to-purple-50 text-indigo-600"}`}>
                  {done ? <CheckCircle2 className="h-5 w-5" /> : item.step}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                    <span className="w-fit rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold text-slate-400">
                      {isNext ? "Up next" : `Step ${index + 1}`}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span key={topic} className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {stepLessons[index]?.length > 0 && (
                    <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
                      <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">Learn this step</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {stepLessons[index].map((l) => (
                          <Link
                            key={l.ref}
                            href={`/subjects/${l.ref}`}
                            className="group flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 text-sm shadow-sm ring-1 ring-slate-100 transition hover:ring-indigo-200"
                          >
                            {l.done ? <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> : <BookOpen className="h-4 w-4 shrink-0 text-indigo-500" />}
                            <span className="min-w-0">
                              <span className="block truncate font-semibold text-slate-800 group-hover:text-indigo-700">{l.title}</span>
                              <span className="block text-[11px] text-slate-400">{l.subject} · {l.duration} min</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {signedIn && !loading && (
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      disabled={busyStep !== null}
                      className={`mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition disabled:opacity-60 ${
                        done ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
                      }`}
                    >
                      {busyStep === index ? <Loader2 className="h-4 w-4 animate-spin" /> : done ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                      {done ? "Completed" : "Mark as complete"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
