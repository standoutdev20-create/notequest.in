'use client';

import React, { useState } from 'react';
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
  HelpCircle as QuestionIcon,
} from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Do I need prior experience to start learning on NetQuest?',
    answer:
      'No. NetQuest is designed for learners at different skill levels. Explore foundational concepts, structured learning resources, and practice material at your own pace without prerequisite barriers.',
    icon: GraduationCapIcon,
  },
  {
    id: 2,
    question: 'What kind of learning resources does NetQuest provide?',
    answer:
      'NetQuest provides curated notes, video tutorials, reference docs, interactive code snippets, and practice problems organized by topics.',
    icon: BookOpen,
  },
  {
    id: 3,
    question: 'How are topics and learning resources organized?',
    answer:
      'Resources are organized systematically by technology tracks, difficulty levels, and step-by-step learning roadmaps.',
    icon: Code,
  },
  {
    id: 4,
    question: 'Can I learn at my own pace?',
    answer:
      'Yes, all content is self-paced. You can access materials anytime, track your progress, and revisit concepts Whenever needed.',
    icon: Clock,
  },
  {
    id: 5,
    question: 'Can I practice what I learn on NetQuest?',
    answer:
      'Yes, we offer practice exercises and interactive components to reinforce your conceptual understanding.',
    icon: Code,
  },
  {
    id: 6,
    question: 'Can I access NetQuest on mobile devices?',
    answer:
      'Yes, NetQuest is fully responsive and optimized for mobile, tablet, and desktop browsing.',
    icon: Smartphone,
  },
];

// Helper icon component matching the image design
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
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#EBF3FF] via-[#F4F7FF] to-[#EBF3FF] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">

      {/* Background Radial Light Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* --- Top Floating Badges & Header --- */}
        <div className="relative text-center mb-12">

          {/* Floating Pill Badges (Left & Right) */}
          <div className="hidden sm:flex justify-between items-center absolute -top-4 left-0 right-0 pointer-events-none">

            <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/60 text-[11px] font-semibold text-slate-600 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>FAQ / SUPPORT</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/60 text-[11px] font-semibold text-slate-600 shadow-sm">
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>24/7 Knowledge Base</span>
            </div>

          </div>

          {/* Center Primary Tag */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-100 text-xs font-semibold text-blue-600 shadow-sm mb-6">
            <QuestionIcon className="w-4 h-4 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Questions?{' '}
            <span className="text-[#3B82F6]">
              We’ve Got You Covered.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Find answers to common questions about NetQuest, learning resources, and your engineering journey.
          </p>

          {/* Dot Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="w-8 h-0.5 bg-blue-300 rounded-full" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>

        </div>

        {/* --- FAQ Accordion List --- */}
        <div className="space-y-3.5 mb-8">

          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#EEF4FF] border-blue-200/80 shadow-sm'
                    : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
              >

                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                >

                  <div className="flex items-center gap-3.5">

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <span className="text-sm sm:text-base font-bold text-slate-800">
                      {faq.question}
                    </span>

                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />

                </button>

                {/* Expanded Answer */}
                {isOpen && (
                  <div className="px-5 pb-5 pl-16 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/40 pt-3">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* --- Bottom Support Callout Card --- */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3.5">

            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4" />
            </div>

            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Still have questions or need personalized guidance?
            </span>

          </div>

          <a
            href="#support"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>Reach out to our learning support team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>
    </section>
  );
}