"use client";

import React from "react";
import {
ArrowRight,
BookOpen,
CheckCircle2,
Code2,
Compass,
Sparkles,
} from "lucide-react";

const steps = [
{
number: "01",
title: "Choose a Path",
description:
"Pick a career path or technology based on what you want to learn and achieve.",
icon: Compass,
iconBg: "bg-blue-50",
iconColor: "text-blue-600",
},
{
number: "02",
title: "Learn Step by Step",
description:
"Follow structured topics in the right order instead of jumping between random resources.",
icon: BookOpen,
iconBg: "bg-purple-50",
iconColor: "text-purple-600",
},
{
number: "03",
title: "Practice & Build",
description:
"Strengthen your understanding with coding problems, exercises and practical projects.",
icon: Code2,
iconBg: "bg-emerald-50",
iconColor: "text-emerald-600",
},
{
number: "04",
title: "Track Your Progress",
description:
"Keep moving forward, complete milestones and see how far you have come.",
icon: CheckCircle2,
iconBg: "bg-rose-50",
iconColor: "text-rose-600",
},
];

export default function HowStudyPathWorks() {
return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-16 sm:py-20">
{/* Same Background as HeroSection */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" /> <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" /> <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" /> </div>


        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Simple Learning Process
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    How Study Paths Work
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                    A clear learning process that helps you know what to learn,
                    what to practice and what to do next.
                </p>
            </div>

            {/* Steps */}
            <div className="relative">
                {/* Connecting Line */}
                <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-blue-200 via-purple-200 to-rose-200 lg:block" />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group relative rounded-3xl border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40"
                            >
                                {/* Number + Icon */}
                                <div className="relative flex items-center justify-between">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconBg}`}
                                    >
                                        <Icon
                                            className={`h-6 w-6 ${step.iconColor}`}
                                        />
                                    </div>

                                    <span className="text-3xl font-black tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-6">
                                    <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-blue-700">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom Indicator */}
                                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors group-hover:text-blue-600">
                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors group-hover:bg-blue-500" />
                                    Step {index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Message */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-center text-sm font-medium text-slate-500">
                <span>Learn at your own pace.</span>
                <ArrowRight className="h-4 w-4 text-blue-500" />
                <span>Keep moving forward.</span>
            </div>
        </div>
    </section>
);


}
