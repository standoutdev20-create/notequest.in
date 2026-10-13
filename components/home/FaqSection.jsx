"use client";

import React, { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  ChevronDown,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Clock,
  Code,
  Smartphone,
  Headphones,
  ArrowRight,
} from "lucide-react";

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

const faqs = [
  {
    id: 1,
    question: "Do I need prior experience to start learning on NoteQuest?",
    answer:
      "No. NoteQuest is designed for learners at different skill levels. Explore foundational concepts, structured learning resources, and practice material at your own pace without prerequisite barriers.",
    icon: GraduationCapIcon,
  },
  {
    id: 2,
    question: "What kind of learning resources does NoteQuest provide?",
    answer:
      "NoteQuest provides curated notes, video tutorials, reference docs, interactive code snippets, and practice problems organized by topics.",
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
    question: "Can I practice what I learn on NoteQuest?",
    answer:
      "Yes, we offer practice exercises and interactive components to reinforce your conceptual understanding.",
    icon: Code,
  },
  {
    id: 6,
    question: "Can I access NoteQuest on mobile devices?",
    answer:
      "Yes, NoteQuest is fully responsive and optimized for mobile, tablet, and desktop browsing.",
    icon: Smartphone,
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F7FF] to-[#EBF3FF] py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">

        {/* ─── Header ─── */}
        <div className="reveal mb-12 text-center">
          {/* Floating side badges */}
          <div className="mb-6 hidden items-center justify-between sm:flex">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm backdrop-blur-md">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              FAQ / SUPPORT
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/60 bg-white/80 px-3.5 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm backdrop-blur-md">
              <MessageSquare className="h-3.5 w-3.5 text-blue-600" />
              24/7 Knowledge Base
            </div>
          </div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
            <HelpCircle className="h-4 w-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?{" "}
            <span className="gradient-text">We&apos;ve Got You Covered.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            Find answers to common questions about NoteQuest, learning resources, and your engineering journey.
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="h-0.5 w-8 rounded-full bg-blue-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </div>
        </div>

        {/* ─── Accordion ─── */}
        <div className="reveal reveal-delay-2 mb-6 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = faq.icon;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200/80 bg-white shadow-md shadow-blue-100/40"
                    : "border-slate-100 bg-white/90 hover:border-slate-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between p-4 text-left focus:outline-none sm:p-5"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "gradient-bg text-white shadow-md shadow-blue-500/20"
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
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* Answer — CSS max-height transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-blue-100/50 px-5 pb-5 pl-16 pt-3 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Bottom Support Card ─── */}
        <div className="reveal reveal-delay-3 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:flex-row sm:p-5">
          <div className="flex items-center gap-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Headphones className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Still have questions or need personalized guidance?
            </span>
          </div>

          <a
            href="#support"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Reach out to our learning support team
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}