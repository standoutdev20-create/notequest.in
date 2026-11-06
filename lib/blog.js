import { unstable_rethrow } from "next/navigation";
import { apiFetch } from "./api.js";
import { formatDate } from "./format.js";
import fallbackPosts from "../data/blogPosts.js";

const DEFAULT_IMAGE = "/images/blog/modern-web-development.jpg";

function normalize(post) {
  return {
    ...post,
    image: post.image || DEFAULT_IMAGE,
    date: post.publishedAt ? formatDate(post.publishedAt) : post.date,
    readTime: post.readTime || "5 min read",
  };
}

/** Published articles from the API (falls back to the bundled starter posts if the API is down). */
export async function getPosts({ category } = {}) {
  try {
    const qs = category ? `?category=${encodeURIComponent(category)}` : "";
    return (await apiFetch(`/posts${qs}`)).posts.map(normalize);
  } catch (err) {
    unstable_rethrow(err);
    console.error("[blog] API unavailable, using bundled posts:", err.message);
    return fallbackPosts;
  }
}

export async function getPost(slug) {
  try {
    return normalize((await apiFetch(`/posts/${encodeURIComponent(slug)}`)).post);
  } catch (err) {
    unstable_rethrow(err);
    if (err.status === 404) return null;
    console.error("[blog] API unavailable, using bundled posts:", err.message);
    return fallbackPosts.find((p) => p.slug === slug) || null;
  }
}
