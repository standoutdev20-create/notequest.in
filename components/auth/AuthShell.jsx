import Link from "next/link";
import { CheckCircle2, Flame, NotebookPen, Route, Sparkles } from "lucide-react";

const perks = [
  { icon: Sparkles, text: "45+ hands-on lessons across web, DSA, SQL, AI and cloud" },
  { icon: NotebookPen, text: "Sticky notes on every lesson, downloadable anytime" },
  { icon: Route, text: "Career study paths with progress that follows you" },
];

/** Split-screen layout for login and signup. */
export default function AuthShell({ title, subtitle, children }) {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-600/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-extrabold">
            <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black">NQ</span>
            NoteQuest
          </Link>
          <h1 className="mt-14 max-w-md text-4xl font-extrabold leading-tight tracking-tight">
            Learn to code, one focused lesson at a time.
          </h1>
          <ul className="mt-8 space-y-4">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-4 w-4 text-indigo-300" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Product preview */}
        <div className="relative mt-12 max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Continue learning</p>
                <p className="mt-1 font-bold">Layout with Flexbox and Grid</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-orange-500/15 px-3 py-1 text-sm font-bold text-orange-300">
                <Flame className="h-4 w-4" /> 12
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              {[["Web Dev", "67%"], ["SQL", "40%"], ["DSA", "20%"]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/5 py-2">
                  <p className="font-bold">{v}</p>
                  <p className="text-slate-400">{k}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-44 top-6 w-44 rotate-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 shadow-xl">
            <span className="absolute -top-1.5 left-1/2 h-3 w-10 -translate-x-1/2 rounded-sm bg-amber-200" />
            <b>gap</b> only adds space <i>between</i> items, with no edge margins 📌
          </div>
        </div>

        <p className="relative mt-12 flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Free forever. No credit card.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-white px-5 py-12 sm:px-10">
        <div className="w-full max-w-[400px]">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
          <p className="mb-8 mt-2 text-slate-500">{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
