import BlogHero from "../../components/blog/BlogHero";
import FeaturedArticle from "../../components/blog/FeaturedArticle";
import BlogCategories from "../../components/blog/BlogCategories";
import LatestArticles from "../../components/blog/LatestArticles";
import BlogCTA from "../../components/blog/BlogCTA";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedArticle />
      <BlogCategories />
      <LatestArticles />
      <BlogCTA />
    </main>
  );
}