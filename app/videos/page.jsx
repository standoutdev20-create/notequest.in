"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  PlayCircle,
  Search,
  Sparkles,
  Clock,
  Eye,
  BookOpen,
  Filter,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import VideoModal from "@/components/video/VideoModal";

const videoLibrary = [
  {
    id: 1,
    title: "React 19 & Next.js 15 Full Architecture Course",
    category: "Web Development",
    duration: "4.5 Hours",
    views: "24.8K",
    level: "Intermediate",
    embedUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    image: "/images/subjects/web-dev.png",
    description:
      "Deep dive into React 19 Server Components, Actions, useActionState, Suspense streaming, and Next.js App Router patterns.",
    topics: ["Server Actions", "Suspense", "React 19 Hooks", "Streaming SSR"],
  },
  {
    id: 2,
    title: "System Design for High-Throughput Web Apps",
    category: "System Design",
    duration: "6 Hours",
    views: "38.2K",
    level: "Advanced",
    embedUrl: "https://www.youtube.com/embed/i_Q0b_4h6bA",
    image: "/images/learning-videos.png",
    description:
      "Learn microservices architecture, caching layers with Redis, message queues (Kafka/RabbitMQ), and database sharding.",
    topics: ["Load Balancing", "Redis Caching", "Database Sharding", "Cap Theorem"],
  },
  {
    id: 3,
    title: "React Hooks Masterclass: From Basics to Custom Hooks",
    category: "Web Development",
    duration: "2.5 Hours",
    views: "18.1K",
    level: "Beginner",
    embedUrl: "https://www.youtube.com/embed/TNhaISAUyvc",
    image: "/images/references.png",
    description:
      "Understand useState, useEffect, useContext, useRef, useMemo, and build your own reusable production hooks.",
    topics: ["useState", "useEffect", "Custom Hooks", "useMemo Performance"],
  },
  {
    id: 4,
    title: "Data Structures & Algorithms in JavaScript / Python",
    category: "Algorithms",
    duration: "8 Hours",
    views: "52.4K",
    level: "All Levels",
    embedUrl: "https://www.youtube.com/embed/8hly31xKli0",
    image: "/images/practice.png",
    description:
      "Master Big-O notation, linked lists, binary trees, recursion, graphs, and dynamic programming for technical interviews.",
    topics: ["Big-O Complexity", "Binary Trees", "Graphs BFS/DFS", "Dynamic Programming"],
  },
  {
    id: 5,
    title: "Operating Systems, Concurrency & Threads Explained",
    category: "Computer Science",
    duration: "3.5 Hours",
    views: "14.9K",
    level: "Intermediate",
    embedUrl: "https://www.youtube.com/embed/26QPDBe-NB8",
    image: "/images/subjects/programming.png",
    description:
      "Everything you need to know about threads, race conditions, semaphores, CPU scheduling, and virtual memory.",
    topics: ["Processes vs Threads", "Deadlocks", "Paging", "Scheduling"],
  },
  {
    id: 6,
    title: "SQL & Database Optimization Masterclass",
    category: "Databases",
    duration: "3 Hours",
    views: "21.6K",
    level: "Beginner",
    embedUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    image: "/images/study-paths.png",
    description:
      "Write high performance SQL queries, understand indexes (B-Tree), analyze EXPLAIN plans, and normalize schemas.",
    topics: ["Joins & Subqueries", "B-Tree Indexes", "Transactions", "ACID Guarantees"],
  },
];

const categories = ["All", "Web Development", "System Design", "Algorithms", "Computer Science", "Databases"];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = videoLibrary.filter((video) => {
    const matchesCategory =
      activeCategory === "All" || video.category === activeCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
              <PlayCircle size={15} />
              Curated Video Masterclasses
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Learn Faster with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Focused Video Lessons
              </span>
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Stream clear, topic-by-topic developer lectures designed to simplify
              complex concepts with hands-on practical coding demonstrations.
            </p>

            {/* Search Input */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search video tutorials, topics, concepts..."
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Banner */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">
                <TrendingUp size={13} />
                Featured Masterclass
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                React 19 & Next.js 15 Full Architecture
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-slate-300 leading-6">
                Master modern Full-Stack development from zero to production. Includes Server Actions, App Router caching, streaming SSR, and database integrations.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-blue-400" />
                  4.5 Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye size={15} className="text-emerald-400" />
                  24.8K Learners
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedVideo(videoLibrary[0])}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
            >
              <Play size={18} className="fill-current" />
              Watch Now (Free)
            </button>
          </div>
        </div>
      </section>

      {/* Video Cards Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              All Video Tutorials
            </h3>
            <p className="text-xs text-slate-500 sm:text-sm mt-0.5">
              Showing {filteredVideos.length} educational tutorials
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200"
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 transition duration-300 group-hover:bg-slate-950/30" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                    {video.category}
                  </span>
                </div>

                <div className="absolute right-4 bottom-4">
                  <span className="rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-mono font-semibold text-white">
                    {video.duration}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-xl shadow-blue-600/40 transition-transform duration-300 group-hover:scale-110">
                    <Play size={22} className="fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-base font-bold text-slate-900 transition group-hover:text-blue-600 line-clamp-2">
                  {video.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500 line-clamp-2">
                  {video.description}
                </p>

                {/* Topics */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {video.topics.slice(0, 3).map((topic, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={13} />
                      {video.views}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Play Video
                    <Play size={12} className="fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
      />
    </main>
  );
}
