import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  PlayCircle,
  Sparkles,
  Share2,
  Bookmark,
  Play,
  Check,
} from "lucide-react";

const resources = {
  "react-nextjs-notes": {
    title: "React 19 & Next.js 15 Masterclass Notes",
    type: "Notes",
    description:
      "Complete notes covering React fundamentals, hooks, components and modern Next.js concepts.",
    duration: "8 hours",
    icon: BookOpen,
    topics: [
      "React Fundamentals",
      "Components & Props",
      "State & Hooks",
      "React Router",
      "Next.js App Router",
      "Server & Client Components",
      "API Routes",
      "Performance Optimization",
    ],
  },

  "dsa-cheat-sheet": {
    title: "Data Structures & Algorithms Cheat Sheet",
    type: "Cheat Sheets",
    description:
      "Quick revision material covering important data structures and algorithms with simple explanations and examples.",
    duration: "5 hours",
    icon: FileText,
    topics: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees",
      "Graphs",
      "Searching",
      "Sorting",
      "Time Complexity",
    ],
  },

  "system-design": {
    title: "Full-Stack System Design Deep Dive",
    type: "Videos",
    description:
      "Understand APIs, databases, scalability, authentication and modern system design concepts.",
    duration: "6 hours",
    icon: PlayCircle,
    videoUrl: "https://www.youtube.com/embed/i_Q0b_4h6bA",
    topics: [
      "System Design Basics",
      "Client & Server Architecture",
      "REST & GraphQL APIs",
      "SQL vs NoSQL Databases",
      "Redis Caching Strategies",
      "JWT & OAuth Authentication",
      "Load Balancing & Reverse Proxies",
      "Horizontal vs Vertical Scalability",
    ],
  },

  "tailwind-ui-guide": {
    title: "Tailwind CSS & Web UI Design Guide",
    type: "Notes",
    description:
      "Learn how to create responsive, clean and modern interfaces using Tailwind CSS.",
    duration: "4 hours",
    icon: BookOpen,
    topics: [
      "Tailwind Fundamentals",
      "Responsive Design",
      "Flexbox & Grid Layouts",
      "Spacing & Typography Scales",
      "Color Palettes & Dark Mode",
      "Component Reusability",
      "Modern UI Patterns",
    ],
  },

  "javascript-fundamentals": {
    title: "JavaScript Fundamentals Master Guide",
    type: "Tutorial",
    description:
      "Master variables, functions, arrays, objects, DOM manipulation, and modern ES6+ concepts with practical exercises.",
    duration: "8 hours",
    icon: FileText,
    topics: [
      "Variables & Scopes (let, const, var)",
      "Functions & Closures",
      "Array Methods (map, filter, reduce)",
      "Object Destructuring & Spread",
      "Async JavaScript & Promises",
      "DOM Traversal and Events",
      "Error Handling & Debugging",
    ],
  },

  "operating-systems": {
    title: "Operating Systems Complete Revision Notes",
    type: "Notes",
    description:
      "Learn process management, threads, concurrency, virtual memory, paging, CPU scheduling algorithms, and file systems.",
    duration: "6 hours",
    icon: BookOpen,
    topics: [
      "Processes & Process States",
      "Threads & Concurrency",
      "CPU Scheduling Algorithms",
      "Deadlock Prevention & Avoidance",
      "Memory Management & Paging",
      "Virtual Memory & Page Replacement",
      "File Systems & I/O Management",
    ],
  },

  "sql-interview": {
    title: "SQL & Relational Database Interview Preparation",
    type: "Practice",
    description:
      "Practice commonly asked SQL queries, complex joins, nested subqueries, window functions, and indexing strategies.",
    duration: "5 hours",
    icon: FileText,
    topics: [
      "Basic Queries (SELECT, WHERE, GROUP BY)",
      "Inner, Left, Right & Full Outer Joins",
      "Subqueries & CTEs",
      "Window Functions (ROW_NUMBER, RANK)",
      "Indexing & Query Optimization",
      "Database Normalization (1NF to BCNF)",
      "Transactions & ACID Properties",
    ],
  },

  "react-hooks": {
    title: "React Hooks Explained with Video & Code",
    type: "Video",
    description:
      "Understand useState, useEffect, useContext, useRef, useMemo, and custom hooks with real-world interactive code examples.",
    duration: "2.5 hours",
    icon: PlayCircle,
    videoUrl: "https://www.youtube.com/embed/TNhaISAUyvc",
    topics: [
      "useState Deep Dive & State Batches",
      "useEffect Lifecycles & Cleanup",
      "useRef for DOM & Persistent Values",
      "useContext for Global State Sharing",
      "useMemo & useCallback Performance Tuning",
      "Building Custom Reusable Hooks",
    ],
  },

  "computer-networks": {
    title: "Computer Networks Quick Revision Guide",
    type: "Reference",
    description:
      "Revise OSI 7-Layer model, TCP/IP stack, HTTP/HTTPS, DNS resolution, socket programming, and routing protocols.",
    duration: "4 hours",
    icon: BookOpen,
    topics: [
      "OSI & TCP/IP Reference Models",
      "Application Layer (HTTP/1.1, HTTP/2, HTTP/3, DNS)",
      "Transport Layer (TCP Handshake, UDP, Flow Control)",
      "Network Layer (IP Addressing, Subnetting, Routing)",
      "Data Link & Physical Layer",
      "Network Security (SSL/TLS, Firewalls)",
    ],
  },

  "git-github": {
    title: "Git & GitHub Complete Practical Workflow",
    type: "Guide",
    description:
      "Master branches, commits, rebasing, pull requests, merge conflict resolution, and collaborative open-source workflows.",
    duration: "3.5 hours",
    icon: FileText,
    topics: [
      "Git Architecture & Core Commands",
      "Branching Strategies (GitFlow, Trunk-Based)",
      "Merging vs Rebasing",
      "Resolving Merge Conflicts Confidently",
      "GitHub Pull Request Best Practices",
      "Stashing, Cherry-Picking & Resetting",
      "GitHub Actions CI/CD Basics",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({
    slug,
  }));
}

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;
  const resource = resources[slug];

  if (!resource) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Resource Not Found
          </h1>
          <p className="mt-4 text-slate-600">
            The resource you are looking for does not exist or may have moved.
          </p>
          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  const Icon = resource.icon;
  const isVideo = resource.type === "Video" || resource.type === "Videos";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
              <Icon size={14} />
              {resource.type}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {resource.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {resource.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm">
                <Clock3 size={16} className="text-blue-600" />
                {resource.duration}
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm">
                <BookOpen size={16} className="text-purple-600" />
                Structured Guide
              </div>
              {isVideo && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-700 shadow-sm">
                  <PlayCircle size={16} className="text-emerald-600" />
                  Video Masterclass Available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Left Column: Video Player if video + Topics */}
          <div className="space-y-8">
            {isVideo && (
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-3.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-semibold text-white">Video Player</span>
                  </div>
                  <span className="font-mono text-slate-400">{resource.duration} HD</span>
                </div>
                <div className="relative aspect-video w-full bg-slate-900">
                  {resource.videoUrl ? (
                    <iframe
                      src={resource.videoUrl}
                      title={resource.title}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-white">
                      <PlayCircle size={56} className="text-blue-500 animate-pulse" />
                      <h4 className="mt-4 text-lg font-bold">Video Lecture Ready</h4>
                      <p className="mt-1 text-xs text-slate-400">
                        Interactive media is stream-optimized for NoteQuest students.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Topics Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Curriculum & Syllabus
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Topics Covered
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Check off each section as you work through the material:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {resource.topics.map((topic, i) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:bg-blue-50/40"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-7 text-white shadow-xl shadow-blue-500/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <Sparkles size={22} />
              </div>
              <h3 className="text-xl font-bold">Start Learning</h3>
              <p className="mt-2 text-xs leading-6 text-blue-100">
                Dive in right away. Review notes, practice corresponding problems, and track your progress.
              </p>
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-blue-700 shadow-md transition hover:bg-blue-50"
              >
                <Play size={16} />
                Begin Now
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Resource Actions
              </h4>
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <Bookmark size={16} className="text-blue-600" />
                  Bookmark Resource
                </button>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <Share2 size={16} className="text-purple-600" />
                  Share with Friends
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}