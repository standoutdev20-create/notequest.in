"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
Search,
BookOpen,
PlayCircle,
FileText,
Sparkles,
ArrowRight,
Code2,
Terminal,
Bookmark,
ExternalLink,
Layers,
} from "lucide-react";

export default function ResourcesHero() {
const [activeFilter, setActiveFilter] = useState("All");
const [searchQuery, setSearchQuery] = useState("");


const resources = [
    {
        id: 1,
        title: "React 19 & Next.js 15 Masterclass Notes",
        category: "Notes",
        icon: <BookOpen className="h-5 w-5 text-blue-500" />,
        description:
            "Comprehensive guide covering Server Components, Actions, and modern state management patterns.",
        stats: "24 Pages • Updated 2 days ago",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
        href: "/resources/react-nextjs-notes",
    },
    {
        id: 2,
        title: "Data Structures & Algorithms Cheat Sheet",
        category: "Cheat Sheets",
        icon: <FileText className="h-5 w-5 text-emerald-500" />,
        description:
            "Quick reference guide for Big-O complexity, Trees, Graphs, Sorting, and Dynamic Programming.",
        stats: "12 Pages • High Res PDF",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        href: "/resources/dsa-cheat-sheet",
    },
    {
        id: 3,
        title: "Full-Stack System Design Deep Dive",
        category: "Videos",
        icon: <PlayCircle className="h-5 w-5 text-purple-500" />,
        description:
            "4-hour step-by-step walkthrough of building scalable microservices and caching strategies.",
        stats: "4.5 Hours • HD Video + Code",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
        href: "/resources/system-design",
    },
    {
        id: 4,
        title: "Tailwind CSS & Web UI Design Guide",
        category: "Notes",
        icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
        description:
            "Design tokens, responsive layouts, dark mode implementation, and modern UI components.",
        stats: "18 Pages • Code Snippets",
        badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
        href: "/resources/tailwind-ui-guide",
    },
];

const filteredResources = resources.filter((resource) => {
    const matchesFilter =
        activeFilter === "All" || resource.category === activeFilter;

    const searchText =
        `${resource.title} ${resource.description}`.toLowerCase();

    const matchesSearch = searchText.includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
});

const scrollToResources = () => {
    document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

return (
    <main className="min-h-screen bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white pb-16 pt-20 sm:pb-20 sm:pt-24">
            {/* Same Background as HeroSection */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />
                <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Content */}
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm backdrop-blur-sm">
                        <Sparkles className="h-4 w-4" />
                        Learning Resources Hub
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Everything You Need to{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Learn & Grow
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Discover structured notes, tutorials, videos,
                        documentation, cheat sheets, and practice resources
                        designed to make IT learning simple, visual, and effective.
                    </p>

                    {/* Search */}
                    <div className="mx-auto mt-9 max-w-2xl">
                        <div className="flex items-center rounded-2xl border border-white/80 bg-white/80 p-2 shadow-xl shadow-blue-100/50 backdrop-blur-sm transition-all focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-100">
                            <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        scrollToResources();
                                    }
                                }}
                                placeholder="Search notes, tutorials, videos, topics..."
                                aria-label="Search learning resources"
                                className="w-full bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
                            />

                            <button
                                type="button"
                                onClick={scrollToResources}
                                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                        <ResourceType
                            icon={<Layers className="h-4 w-4" />}
                            label="All"
                            active={activeFilter === "All"}
                            onClick={() => setActiveFilter("All")}
                        />

                        <ResourceType
                            icon={<BookOpen className="h-4 w-4" />}
                            label="Notes"
                            active={activeFilter === "Notes"}
                            onClick={() => setActiveFilter("Notes")}
                        />

                        <ResourceType
                            icon={<PlayCircle className="h-4 w-4" />}
                            label="Videos"
                            active={activeFilter === "Videos"}
                            onClick={() => setActiveFilter("Videos")}
                        />

                        <ResourceType
                            icon={<FileText className="h-4 w-4" />}
                            label="Cheat Sheets"
                            active={activeFilter === "Cheat Sheets"}
                            onClick={() => setActiveFilter("Cheat Sheets")}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                    <ResourceStat number="100+" label="Learning Resources" />
                    <ResourceStat number="6+" label="Core Subjects" />
                    <ResourceStat number="50+" label="Topics" />
                    <ResourceStat number="Free" label="To Learn" />
                </div>

                {/* Featured Resources */}
                <div
                    id="resource-library"
                    className="mt-16 scroll-mt-8 rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-blue-100/50 backdrop-blur-sm lg:p-8"
                >
                    {/* Section Header */}
                    <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                                Featured Resources
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Explore curated study materials matched to your learning path
                            </p>
                        </div>

                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                        >
                            View All Library
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Resource Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {filteredResources.length > 0 ? (
                            filteredResources.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex flex-col justify-between rounded-2xl border border-white/80 bg-white/70 p-6 transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-blue-500/5"
                                >
                                    <div>
                                        {/* Card Top */}
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold ${item.badgeColor}`}
                                            >
                                                {item.icon}
                                                {item.category}
                                            </span>

                                            <Bookmark className="h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-500" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Card Bottom */}
                                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-4 text-xs font-medium text-slate-500">
                                        <span>{item.stats}</span>

                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center gap-1 font-semibold text-blue-600 transition-transform hover:text-blue-700 group-hover:translate-x-0.5"
                                        >
                                            Explore
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-slate-500">
                                <Search className="mx-auto mb-3 h-8 w-8 text-slate-300" />
                                <p className="font-semibold text-slate-700">
                                    No resources found
                                </p>
                                <p className="mt-1 text-sm">
                                    Try a different keyword or resource category.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveFilter("All");
                                    }}
                                    className="mt-4 font-semibold text-blue-600 hover:text-blue-700"
                                >
                                    Clear search and filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Practice Banner */}
                    <div className="relative mt-8 overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

                        <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                    <Terminal className="h-3.5 w-3.5" />
                                    Interactive Learning
                                </div>

                                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                    Ready to practice with real code?
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    Access instant interactive code playgrounds,
                                    downloadable cheat sheets, and guided video paths
                                    directly inside your browser.
                                </p>
                            </div>

                            <Link
                                href="/practice"
                                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                            >
                                <Code2 className="h-4 w-4" />
                                Start Practicing Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);


}

function ResourceType({ icon, label, active, onClick }) {
return (
<button
type="button"
onClick={onClick}
aria-pressed={active}
className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active
                    ? "bg-slate-900 text-white shadow-md"
                    : "border border-white/80 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            }`}
>
{icon}
{label} </button>
);
}

function ResourceStat({ number, label }) {
return ( <div className="rounded-2xl border border-white/80 bg-white/70 px-4 py-5 text-center backdrop-blur-sm transition-all hover:border-blue-100 hover:bg-white hover:shadow-md"> <div className="text-xl font-extrabold text-slate-900 sm:text-2xl">
{number} </div> <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
{label} </div> </div>
);
}
