"use client";

import { useEffect } from "react";
import { track } from "./track";

export default function ArticleViewTracker({ slug, title }) {
  useEffect(() => {
    track("article_view", { target: slug, meta: { title } });
  }, [slug, title]);
  return null;
}
