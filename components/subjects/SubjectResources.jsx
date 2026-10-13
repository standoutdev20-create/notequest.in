"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  PlayCircle,
  Play,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import VideoModal from "@/components/video/VideoModal";

export default function SubjectResources({ details }) {
  const sectionRef = useReveal();
  const [activeVideo, setActiveVideo] = useState(null);
  const resources = details.featuredResources || [];

  const resourceIcons = {
    Notes: FileText,
    Video: PlayCircle,
    Practice: Code2,
    Project: BookOpen,
  };

  const handleResourceClick = (resource) => {
    if (resource.type === "Video") {
      setActiveVideo({
        title: resource.title,
        category: `${details.title} Masterclass`,
        duration: "45 Mins",
        embedUrl: "https://www.youtube.com/embed/TNhaISAUyvc",
        description: resource.description,
        topics: [
          `${details.title} Overview`,
          "Core Syntax & Concepts",
          "Step-by-step Demo",
          "Common Pitfalls & Best Practices",
        ],
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Learn With NoteQuest
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to practice
          </h2>

          <p className="mt-4 text-lg leading-7 text-slate-600">
            Explore structured notes, learning videos and practical exercises
            to strengthen your {details.title} knowledge.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resourceIcons[resource.type] || BookOpen;
            const isVideo = resource.type === "Video";

            return (
              <div
                key={`${resource.title}-${index}`}
                className={`reveal reveal-delay-${(index + 1) * 100} group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 flex flex-col justify-between`}
              >
                <div>
                  {/* Image */}
                  <div
                    className={`relative h-48 overflow-hidden bg-slate-100 ${
                      isVideo ? "cursor-pointer" : ""
                    }`}
                    onClick={() => isVideo && handleResourceClick(resource)}
                  >
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                        <Icon size={14} className="text-blue-600" />
                        {resource.type}
                      </span>
                    </div>

                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-lg transition group-hover:scale-110">
                          <Play size={20} className="fill-current translate-x-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {isVideo ? (
                    <button
                      type="button"
                      onClick={() => handleResourceClick(resource)}
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Watch Video Session
                      <Play
                        size={15}
                        className="fill-current transition-transform duration-300 group-hover/btn:scale-110"
                      />
                    </button>
                  ) : resource.type === "Practice" ? (
                    <Link
                      href="/practice"
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                    >
                      Explore Practice
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <Link
                      href="/resources"
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                    >
                      Explore Resource
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resource Stats */}
        {details.stats && (
          <div className="reveal reveal-delay-300 mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ResourceStat
              value={details.stats.notes}
              label="Learning Notes"
            />

            <ResourceStat
              value={details.stats.videos}
              label="Learning Videos"
            />

            <ResourceStat
              value={details.stats.practice}
              label="Practice Problems"
            />

            <ResourceStat
              value={details.stats.projects}
              label="Projects"
            />
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        video={activeVideo}
      />
    </section>
  );
}

function ResourceStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      <p className="text-2xl font-extrabold text-slate-900">{value}+</p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
