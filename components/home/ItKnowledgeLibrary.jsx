'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Code2,
  Globe,
  Database,
  Monitor,
  Cpu,
  Cloud,
  Smartphone,
  BookOpen,
  Play,
  FileText,
  Sparkles,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const categories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: Code2,
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: Globe,
  },
  {
    id: 'data',
    label: 'Data & Databases',
    icon: Database,
  },
  {
    id: 'cs',
    label: 'Computer Science',
    icon: Monitor,
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: Cpu,
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: Smartphone,
  },
];

const techCards = [
  {
    name: 'Python',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: '🐍',
    href: '/subjects/programming-languages',
  },
  {
    name: 'Java',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: '☕',
    href: '/subjects/programming-languages',
  },
  {
    name: 'JavaScript',
    category: 'Web Technology',
    categoryId: 'web',
    icon: 'JS',
    href: '/study-path/javascript',
  },
  {
    name: 'TypeScript',
    category: 'Web Technology',
    categoryId: 'web',
    icon: 'TS',
    href: '/resources/react-nextjs-notes',
  },
  {
    name: 'C++',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: 'C++',
    href: '/subjects/programming-languages',
  },
  {
    name: 'C#',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: 'C#',
    href: '/subjects/programming-languages',
  },
  {
    name: 'Go',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: 'GO',
    href: '/subjects/programming-languages',
  },
  {
    name: 'Rust',
    category: 'Programming Language',
    categoryId: 'programming',
    icon: '🦀',
    href: '/subjects/programming-languages',
  },
  {
    name: 'React',
    category: 'Web Framework',
    categoryId: 'web',
    icon: '⚛️',
    href: '/study-path/react',
  },
  {
    name: 'Next.js',
    category: 'Web Framework',
    categoryId: 'web',
    icon: '▲',
    href: '/resources/react-nextjs-notes',
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    categoryId: 'web',
    icon: '🟢',
    href: '/study-path/backend-developer',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    categoryId: 'web',
    icon: '🌊',
    href: '/resources/tailwind-ui-guide',
  },
  {
    name: 'SQL',
    category: 'Database Querying',
    categoryId: 'data',
    icon: '🗄️',
    href: '/resources/sql-interview',
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    categoryId: 'data',
    icon: '🐘',
    href: '/study-path/database-sql',
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    categoryId: 'data',
    icon: '🍃',
    href: '/study-path/database-sql',
  },
  {
    name: 'Redis',
    category: 'In-Memory Cache',
    categoryId: 'data',
    icon: '⚡',
    href: '/resources/system-design',
  },
  {
    name: 'Operating Systems',
    category: 'Core Computer Science',
    categoryId: 'cs',
    icon: '💻',
    href: '/resources/operating-systems',
  },
  {
    name: 'Computer Networks',
    category: 'Core Computer Science',
    categoryId: 'cs',
    icon: '🌐',
    href: '/resources/computer-networks',
  },
  {
    name: 'DBMS',
    category: 'Database Management',
    categoryId: 'cs',
    icon: '📊',
    href: '/study-path/database-sql',
  },
  {
    name: 'Data Structures',
    category: 'Algorithms & Structures',
    categoryId: 'cs',
    icon: '🌳',
    href: '/study-path/dsa',
  },
  {
    name: 'Docker',
    category: 'Containerization',
    categoryId: 'cloud',
    icon: '🐳',
    href: '/study-path/cloud-devops',
  },
  {
    name: 'Kubernetes',
    category: 'Orchestration',
    categoryId: 'cloud',
    icon: '☸️',
    href: '/study-path/cloud-devops',
  },
  {
    name: 'AWS',
    category: 'Cloud Infrastructure',
    categoryId: 'cloud',
    icon: '☁️',
    href: '/study-path/cloud-devops',
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    categoryId: 'cloud',
    icon: '🐙',
    href: '/resources/git-github',
  },
  {
    name: 'Machine Learning',
    category: 'AI Fundamentals',
    categoryId: 'ai',
    icon: '🤖',
    href: '/videos',
  },
  {
    name: 'Deep Learning',
    category: 'Neural Networks',
    categoryId: 'ai',
    icon: '🧠',
    href: '/videos',
  },
  {
    name: 'React Native',
    category: 'Cross-Platform Mobile',
    categoryId: 'mobile',
    icon: '📱',
    href: '/study-path/frontend-developer',
  },
  {
    name: 'Flutter',
    category: 'Cross-Platform Mobile',
    categoryId: 'mobile',
    icon: '💙',
    href: '/study-path/frontend-developer',
  },
];

export default function ItKnowledgeLibrary() {
  const sectionRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('programming');

  const filteredTechCards = techCards.filter(
    (tech) => tech.categoryId === activeCategory
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#EBF3FF] via-[#F4F7FF] to-[#EBF3FF] p-4 sm:p-8 flex items-center justify-center font-sans antialiased text-slate-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* --- LEFT BLUE GRADIENT SIDEBAR --- */}
        <div className="reveal from-left lg:col-span-4 bg-gradient-to-b from-[#1D63FE] via-[#2A6CFF] to-[#437BFF] rounded-[28px] p-6 text-white shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[580px]">

          {/* Subtle Top Glow */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-white/10 blur-2xl pointer-events-none" />

          <div>
            {/* Top Pill Header */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white/90 mb-6 border border-white/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>NOTEQUEST LIBRARY</span>
            </div>

            {/* Main Sidebar Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 leading-tight">
              IT Knowledge <br /> Library
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-normal">
              Explore essential technologies, concepts, and learning resources — all organized in one place.
            </p>

            {/* Category Navigation Pills */}
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#1D63FE] shadow-md scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? 'text-[#1D63FE]' : 'text-white'
                        }`}
                      />

                      <span>{cat.label}</span>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? 'text-[#1D63FE]' : 'text-white/60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Illustration Container */}
          <div className="relative mt-8 pt-6 border-t border-white/10 flex items-center justify-center">
            <div className="relative flex items-center justify-center">

              {/* Floating Media Icons */}
              <div className="absolute -top-3 -left-8 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30 text-white animate-float">
                <Code2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute -top-4 -right-6 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30 text-white animate-float-reverse">
                <Play className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-0 -right-8 bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/30 text-white animate-float">
                <FileText className="w-3.5 h-3.5" />
              </div>

              {/* Central Book Icon Graphic */}
              <div className="w-24 h-14 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white drop-shadow-sm" />
              </div>

            </div>
          </div>

        </div>

        {/* --- RIGHT TECHNOLOGY CARDS GRID --- */}
        <div className="reveal from-right lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">

          {filteredTechCards.length > 0 ? (
            filteredTechCards.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href || '/resources'}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between min-h-[120px] relative"
              >

                {/* Top Row: Icon Badge + Decorative Dot */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50/90 flex items-center justify-center text-slate-700 group-hover:text-blue-600 font-bold text-sm transition-colors border border-slate-100/80">
                    {tech.icon}
                  </div>

                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
                </div>

                {/* Title & Category Label */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {tech.category}
                  </p>
                </div>

              </Link>
            ))
          ) : (
            <div className="col-span-full bg-white/90 rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300 mb-3" />

              <h3 className="text-sm font-bold text-slate-700">
                Resources coming soon
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                More technologies will be added to this category.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}