import BlogHero from "../../components/blog/BlogHero";
import FeaturedArticle from "../../components/blog/FeaturedArticle";
import BlogCategories from "../../components/blog/BlogCategories";
import LatestArticles from "../../components/blog/LatestArticles";
import BlogCTA from "../../components/blog/BlogCTA";
import { getPosts } from "@/lib/blog";

export default async function BlogPage({ searchParams }) {
  const { category } = await searchParams;
  const posts = await getPosts({ category: typeof category === "string" ? category : undefined });

  return (
    <main>
      <BlogHero />
      <FeaturedArticle posts={posts} />
      <BlogCategories />
      <LatestArticles posts={posts} />
      <BlogCTA />
    </main>
  );
}
