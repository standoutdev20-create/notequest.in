
"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  BookOpen,
  Clock,
  Code,
  Smartphone,
  Headphones,
  ArrowRight,
  HelpCircle as QuestionIcon,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Do I need prior experience to start learning on NetQuest?",
    answer:
      "No. NetQuest is designed for learners at different skill levels. Explore foundational concepts, structured learning resources, and practice material at your own pace without prerequisite barriers.",
    icon: GraduationCapIcon,
  },
  {
    id: 2,
    question: "What kind of learning resources does NetQuest provide?",
    answer:
      "NetQuest provides curated notes, video tutorials, reference docs, interactive code snippets, and practice problems organized by topics.",
    icon: BookOpen,
  },
  {
    id: 3,
    question: "How are topics and learning resources organized?",
    answer:
      "Resources are organized systematically by technology tracks, difficulty levels, and step-by-step learning roadmaps.",
    icon: Code,
  },
  {
    id: 4,
    question: "Can I learn at my own pace?",
    answer:
      "Yes, all content is self-paced. You can access materials anytime, track your progress, and revisit concepts whenever needed.",
    icon: Clock,
  },
  {
    id: 5,
    question: "Can I practice what I learn on NetQuest?",
    answer:
      "Yes, we offer practice exercises and interactive components to reinforce your conceptual understanding.",
    icon: Code,
  },
  {
    id: 6,
    question: "Can I access NetQuest on mobile devices?",
    answer:
      "Yes, NetQuest is fully responsive and optimized for mobile, tablet, and desktop browsing.",
    icon: Smartphone,
  },
];

function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white px-4 py-20 font-sans text-slate-800 antialiased selection:bg-blue-200 sm:px-6 lg:px-8">
      {/* Background Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Top Floating Badges & Header */}
        <div className="relative mb-12 text-center">
          {/* Floating Pill Badges */}
          <div className="absolute -top-4 right-0 left-0 hidden items-center justify-between sm:flex">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur-md">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>FAQ / SUPPORT</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur-md">
              <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
              <span>24/7 Knowledge Base</span>
            </div>
          </div>

          {/* Center Primary Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-sm backdrop-blur-sm">
            <QuestionIcon className="h-4 w-4 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?{" "}
            <span className="text-[#3B82F6]">
              We’ve Got You Covered.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-lg text-xs leading-relaxed text-slate-500 sm:text-sm">
            Find answers to common questions about NetQuest, learning
            resources, and your engineering journey.
          </p>

          {/* Dot Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="h-0.5 w-8 rounded-full bg-blue-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mb-8 space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = faq.icon;

            return (
              <div
                key={faq.id}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200/80 bg-[#EEF4FF]/90 shadow-sm backdrop-blur-sm"
                    : "border-blue-100/70 bg-white/80 shadow-sm backdrop-blur-sm hover:border-blue-200 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="flex w-full items-center justify-between p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 sm:p-5"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-bold text-slate-800 sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`ml-3 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Expanded Answer */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="border-t border-blue-100/60 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-600 sm:pl-16 sm:text-sm"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout Card */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:p-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Headphones className="h-4 w-4" />
            </div>

            <span className="text-xs font-semibold text-slate-700 sm:text-sm">
              Still have questions or need personalized guidance?
            </span>
          </div>

          <a
            href="#support"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            <span>Reach out to our learning support team</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

