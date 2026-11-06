"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { api } from "@/lib/client";

function safeNext(next, fallback) {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : fallback;
}

function strength(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(4, score);
}
const STRENGTH = [
  { label: "Too short", bar: "bg-red-400" },
  { label: "Weak", bar: "bg-orange-400" },
  { label: "Okay", bar: "bg-amber-400" },
  { label: "Strong", bar: "bg-emerald-500" },
  { label: "Very strong", bar: "bg-emerald-600" },
];

function Field({ icon: Icon, label, children, right }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-sm font-semibold text-slate-700">{label}{right}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        {children}
      </span>
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100";

export default function AuthForm({ mode, next }) {
  const isSignup = mode === "signup";
  const router = useRouter();
  const [error, setError] = useState("");
  const [values, setValues] = useState({ name: "", email: "" });
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [pending, setPending] = useState(false);
  const qs = next ? `?next=${encodeURIComponent(next)}` : "";
  const s = strength(password);

  async function onSubmit(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    setPending(true);
    setError("");
    try {
      await api(isSignup ? "/auth/signup" : "/auth/login", { method: "POST", body: form });
      router.replace(safeNext(next, isSignup ? "/welcome" : "/"));
      router.refresh();
    } catch (err) {
      setError(err.message);
      setValues({ name: form.name || "", email: form.email || "" });
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {isSignup && (
        <Field icon={User} label="Full name">
          <input name="name" required minLength={2} autoComplete="name" defaultValue={values.name} className={inputCls} placeholder="Asha Raman" />
        </Field>
      )}

      <Field icon={Mail} label="Email">
        <input name="email" type="email" required autoComplete="email" defaultValue={values.email} className={inputCls} placeholder="you@example.com" />
      </Field>

      <div>
        <Field icon={Lock} label="Password">
          <input
            name="password"
            type={show ? "text" : "password"}
            required
            minLength={isSignup ? 8 : undefined}
            autoComplete={isSignup ? "new-password" : "current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${inputCls} pr-11`}
            placeholder={isSignup ? "At least 8 characters" : "Your password"}
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </Field>
        {isSignup && password && (
          <div className="mt-2.5">
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={`h-1 flex-1 rounded-full ${i < s ? STRENGTH[s].bar : "bg-slate-200"}`} />
              ))}
            </div>
            <p className="mt-1.5 text-xs text-slate-500">
              Password strength: <b className="text-slate-700">{password.length < 8 ? STRENGTH[0].label : STRENGTH[s].label}</b>
            </p>
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 disabled:opacity-70"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSignup ? "Create free account" : "Log in"}
        {!pending && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}
      </button>

      {isSignup && (
        <p className="text-center text-xs leading-5 text-slate-400">
          Your notes and progress are stored in your NoteQuest account so you can access them anywhere.
        </p>
      )}

      <div className="relative py-1 text-center">
        <span className="absolute inset-x-0 top-1/2 h-px bg-slate-100" />
        <span className="relative bg-white px-3 text-xs text-slate-400">{isSignup ? "Already learning with us?" : "New to NoteQuest?"}</span>
      </div>

      <Link
        href={`${isSignup ? "/login" : "/signup"}${qs}`}
        className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700"
      >
        {isSignup ? "Log in instead" : "Create a free account"}
      </Link>
    </form>
  );
}
