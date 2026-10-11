import {
BookOpen,
Code2,
Compass,
Layers3,
Lightbulb,
TrendingUp,
} from "lucide-react";

const principles = [
{
icon: BookOpen,
title: "Organized Resources",
description:
"Find notes and learning materials arranged around useful topics.",
},
{
icon: Lightbulb,
title: "Clear Explanations",
description:
"Build understanding by learning concepts one step at a time.",
},
{
icon: Code2,
title: "Learn by Practicing",
description:
"Strengthen your knowledge by applying it to coding problems.",
},
{
icon: Compass,
title: "Structured Learning",
description:
"Follow learning paths to give your studies more direction.",
},
{
icon: Layers3,
title: "Multiple Formats",
description:
"Explore notes, tutorials, references, and other learning resources.",
},
{
icon: TrendingUp,
title: "Your Own Pace",
description:
"Keep improving steadily according to your learning goals.",
},
];

export default function WhatMakesUsDifferent() {
return (
<section
className="relative isolate overflow-hidden bg-cover bg-center px-6 py-20 sm:py-24"
style={{
backgroundImage: "url('/images/about/what-makes-us-different.jpg')",
}}
> <div className="absolute inset-0 -z-10 bg-slate-950/85" />


  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
        Why NoteQuest
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        A better way to explore IT
      </h2>
      <p className="mt-4 leading-7 text-slate-300">
        A learning experience designed around clarity, practice, and
        consistent progress.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.12]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-blue-200">
              <Icon size={25} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  </div>
</section>

);
}
