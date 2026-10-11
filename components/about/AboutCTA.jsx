import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCTA() {
return (
<section
className="relative isolate overflow-hidden bg-cover bg-center px-6 py-20 sm:py-24"
style={{
backgroundImage: "url('/images/about/about-cta.jpg')",
}}
> <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-indigo-950/90 to-violet-950/75" />


  <div className="mx-auto max-w-4xl text-center">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-violet-200 backdrop-blur-md">
      <Sparkles size={28} />
    </div>

    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
      Your next learning chapter starts here
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
      Explore new concepts, build your fundamentals, and take the next
      step in your programming journey with NoteQuest.
    </p>

    <div className="mt-9 flex flex-wrap justify-center gap-4">
      <Link
        href="/subjects"
        className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
      >
        Start Exploring
        <ArrowRight size={18} />
      </Link>

      <Link
        href="/study-path"
        className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
      >
        View Study Paths
      </Link>
    </div>
  </div>
</section>


);
}
