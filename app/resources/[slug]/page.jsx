import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  PlayCircle,
  Sparkles,
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
    topics: [
      "System Design Basics",
      "Client & Server",
      "APIs",
      "Databases",
      "Caching",
      "Authentication",
      "Load Balancing",
      "Scalability",
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
      "Flexbox",
      "Grid",
      "Spacing",
      "Typography",
      "Colors",
      "Components",
      "Modern UI Patterns",
    ],
  },
};

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;

  const resource = resources[slug];

  if (!resource) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Resource Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The resource you are looking for does not exist.
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

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Background Decorations */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">

          {/* Back Button */}
          <Link
            href="/resources"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <div className="max-w-4xl">

            {/* Type */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Icon size={16} />
              {resource.type}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {resource.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {resource.description}
            </p>

            {/* Resource Info */}
            <div className="mt-8 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
                <Clock3 size={18} className="text-blue-600" />
                {resource.duration}
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm">
                <BookOpen size={18} className="text-purple-600" />
                Structured Learning
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

          {/* Topics */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What You Will Learn
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Topics Covered
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {resource.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="font-medium text-slate-700">
                    {topic}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-7 text-white shadow-xl">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Sparkles size={24} />
            </div>

            <h2 className="text-2xl font-bold">
              Start Learning
            </h2>

            <p className="mt-3 text-sm leading-6 text-blue-50">
              Start exploring this resource and build your knowledge step by
              step with NoteQuest.
            </p>

            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Start Resource
            </button>

          </aside>

        </div>
      </section>
    </main>
  );
}