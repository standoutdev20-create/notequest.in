"use client";

import { useState, useEffect } from "react";

const features = [
{
title: "Structured Notes",
description:
"Understand concepts through simple, organized and easy-to-follow notes.",
image: "/images/Home/Structured.jpg",
},
{
title: "Learning Videos",
description:
"Learn difficult concepts through practical and focused video resources.",
image: "/images/Home/learning.jpg",
},
{
title: "References",
description:
"Find useful documentation, guides and references for deeper learning.",
image: "/images/Home/references.jpg",
},
{
title: "Practice",
description:
"Strengthen your knowledge through questions, coding and practical exercises.",
image: "/images/practice.jpg",
},
{
title: "Study Paths",
description:
"Follow structured learning paths designed to guide you from basics to advanced concepts.",
image: "/images/Home/Study_Paths.jpg",
},
{
title: "Project Ideas",
description:
"Turn your knowledge into practical projects and build real development experience.",
image: "/images/Home/Project_Ideas.jpg",
},
];

export default function FeatureCards() {
const [currentIndex, setCurrentIndex] = useState(1);
const totalCards = features.length;

// Automatically slide every 3 seconds
useEffect(() => {
const interval = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % totalCards);
}, 3000);


return () => clearInterval(interval);


}, [totalCards]);

const getCardPosition = (index) => {
const leftIndex = (currentIndex - 1 + totalCards) % totalCards;
const middleLeftIndex = currentIndex;
const middleRightIndex = (currentIndex + 1) % totalCards;
const rightIndex = (currentIndex + 2) % totalCards;

if (index === leftIndex) return "left";
if (index === middleLeftIndex) return "middle-left";
if (index === middleRightIndex) return "middle-right";
if (index === rightIndex) return "right";

return "hidden";


};

return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Hero-style background glow effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
        Learn Your Way
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Everything you need to keep learning
      </h2>

      <p className="mt-4 text-lg leading-7 text-slate-600">
        Explore different learning formats designed to help you
        understand concepts and apply them in practice.
      </p>
    </div>

    {/* Desktop Auto Slider */}
    <div className="relative mt-12 hidden h-[390px] md:block">
      {features.map((feature, index) => {
        const position = getCardPosition(index);

        return (
          <div
            key={feature.title}
            className={`
              absolute left-1/2 top-1/2
              w-[25%]
              transition-all duration-700 ease-in-out
              ${
                position === "middle-left"
                  ? "z-30 -translate-x-[104%] -translate-y-1/2 scale-100 opacity-100"
                  : position === "middle-right"
                    ? "z-30 translate-x-[4%] -translate-y-1/2 scale-100 opacity-100"
                    : position === "left"
                      ? "z-10 -translate-x-[190%] -translate-y-[40%] scale-[0.82] opacity-55 blur-[2px]"
                      : position === "right"
                        ? "z-10 translate-x-[90%] -translate-y-[40%] scale-[0.82] opacity-55 blur-[2px]"
                        : "pointer-events-none z-0 -translate-x-1/2 translate-y-10 scale-75 opacity-0"
              }
            `}
          >
            <div
              className={`
                group relative mx-auto h-[340px]
                w-full max-w-[360px]
                overflow-hidden rounded-[2rem]
                border border-slate-200
                bg-slate-100
                shadow-xl
                transition-shadow duration-500
                ${
                  position === "middle-left" ||
                  position === "middle-right"
                    ? "shadow-[0_25px_70px_rgba(37,99,235,0.22)]"
                    : "shadow-lg"
                }
              `}
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

              {/* Card Glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl transition duration-500 group-hover:bg-purple-500/30" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  {feature.description}
                </p>

                <div className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  Explore
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Mobile Auto Slider */}
    <div className="relative mt-10 md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {features.map((feature) => (
            <div key={feature.title} className="w-full shrink-0 px-1">
              <div className="group relative h-[330px] overflow-hidden rounded-[2rem] border border-blue-100/70 shadow-xl shadow-blue-100/30">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {feature.description}
                  </p>

                  <div className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                    Explore
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


);
}
