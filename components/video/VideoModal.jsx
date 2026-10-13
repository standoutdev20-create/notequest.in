"use client";

import React, { useEffect } from "react";
import { X, Play, Clock, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";

export default function VideoModal({ isOpen, onClose, video }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl animate-scale-in text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 text-blue-400">
              <Play size={14} className="fill-current" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                {video.title || "NoteQuest Video Lecture"}
              </h3>
              <p className="text-xs text-slate-400">
                {video.category || "Full Masterclass"} • {video.duration || "45 Mins"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={video.embedUrl || "https://www.youtube.com/embed/TNhaISAUyvc"}
            title={video.title || "NoteQuest Video"}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info & Topics */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Interactive Learning Session
              </p>
              <h4 className="mt-1 text-lg font-bold text-white sm:text-xl">
                {video.title}
              </h4>
              <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                {video.description ||
                  "Follow along with this step-by-step masterclass video and reinforce your understanding with hands-on coding."}
              </p>
            </div>
          </div>

          {/* Chapters / Topics Covered */}
          {video.topics && video.topics.length > 0 && (
            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Topics Covered in Video
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {video.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
