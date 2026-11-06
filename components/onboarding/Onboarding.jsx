"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { api } from "@/lib/client";
import { SubjectIcon } from "@/components/learn/subjectIcons";

const GOALS = [
  { value: 1, label: "Casual", hint: "1 lesson a day · ~10 min" },
  { value: 2, label: "Regular", hint: "2 lessons a day · ~25 min" },
  { value: 3, label: "Serious", hint: "3 lessons a day · ~40 min" },
  { value: 5, label: "Intense", hint: "5 lessons a day · ~1 hour" },
];

export default function Onboarding({ user, subjects }) {
  const router = useRouter();
  const [interests, setInterests] = useState(user.interests || []);
  const [goal, setGoal] = useState(user.dailyGoal || 1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const editing = user.onboarded;

  const toggle = (slug) => setInterests((list) => (list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]));

  async function save(skip = false) {
    setSaving(true);
    setError("");
    try {
      await api("/auth/me", {
        method: "PATCH",
        body: skip ? { onboarded: true } : { interests, dailyGoal: goal, onboarded: true },
      });
      router.replace("/");
      router.refresh();
    } catch (e) {
      setError(e.message);
      setSaving(false);
    }
  }

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-[#eef2ff] via-white to-white px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-indigo-300/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">{editing ? "Your learning profile" : `Welcome, ${user.name.split(" ")[0]}`}</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What do you want to get better at?</h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Pick a few areas. Your dashboard recommends lessons from whichever interest you&apos;ve practised least, so your skills grow evenly.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s) => {
            const on = interests.includes(s.slug);
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggle(s.slug)}
                aria-pressed={on}
                className={`relative rounded-3xl border-2 bg-white p-5 text-left transition ${
                  on ? "border-indigo-600 shadow-lg shadow-indigo-100" : "border-slate-200 hover:border-indigo-200"
                }`}
              >
                <span className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 ${on ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-200"}`}>
                  {on && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${on ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                  <SubjectIcon slug={s.slug} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-extrabold text-slate-900">{s.title}</p>
                <p className="mt-1 text-xs text-slate-500">{s.lessons} lessons</p>
              </button>
            );
          })}
        </div>

        <h2 className="mt-12 text-xl font-extrabold text-slate-900">Set a daily goal</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {GOALS.map((g) => (
            <button
              key={g.value}
              type="button"
              onClick={() => setGoal(g.value)}
              aria-pressed={goal === g.value}
              className={`rounded-2xl border-2 bg-white p-4 text-left transition ${goal === g.value ? "border-indigo-600 shadow-md" : "border-slate-200 hover:border-indigo-200"}`}
            >
              <p className="font-extrabold text-slate-900">{g.label}</p>
              <p className="mt-1 text-xs text-slate-500">{g.hint}</p>
            </button>
          ))}
        </div>

        {error && <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">{error}</p>}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => save()}
            disabled={saving || interests.length === 0}
            className="gradient-bg inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {editing ? "Save changes" : "Build my dashboard"} <ArrowRight className="h-4 w-4" />
          </button>
          {!editing && (
            <button type="button" onClick={() => save(true)} disabled={saving} className="text-sm font-semibold text-slate-500 hover:text-slate-700">
              Skip for now
            </button>
          )}
          {interests.length === 0 && <span className="text-xs text-slate-400">Choose at least one interest</span>}
        </div>
      </div>
    </section>
  );
}
