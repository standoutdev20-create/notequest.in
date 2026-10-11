"use client";

import { useState } from "react";

export default function ProblemFilters() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All Topics");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

      {/* Search */}
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search problems..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 placeholder:text-slate-400"
        />
      </div>

      {/* Filters */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">

        {/* Difficulty */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Difficulty
          </label>

          <div className="flex flex-wrap gap-2">
            {["All", "Easy", "Medium", "Hard"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDifficulty(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  difficulty === item
                    ? "bg-slate-900 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Topic */}
        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Topic
          </label>

          <select
            id="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          >
            <option>All Topics</option>
            <option>Array</option>
            <option>Hash Table</option>
            <option>Linked List</option>
            <option>Stack</option>
            <option>String</option>
            <option>Searching</option>
            <option>Sorting</option>
            <option>Sliding Window</option>
            <option>Two Pointers</option>
            <option>Graph</option>
            <option>BFS</option>
            <option>DFS</option>
            <option>Design</option>
            <option>Topological Sort</option>
          </select>
        </div>

      </div>
    </div>
  );
}