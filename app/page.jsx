import { redirect } from "next/navigation";
import Hero from "@/components/home/Hero";
import TechMarquee from "@/components/home/TechMarquee";
import ExploreLearning from "@/components/home/ExploreLearning";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ImageShowcase from "@/components/home/ImageShowcase";
import FeatureCards from "@/components/home/FeatureCards";
import ItKnowledgeLibrary from "@/components/home/ItKnowledgeLibrary";
import LearningSection from "@/components/home/LearningSection";
import FaqSection from "@/components/home/FaqSection";
import CTASection from "@/components/home/CTASection";
import HomeDashboard from "@/components/dashboard/HomeDashboard";
import { apiFetch, getCurrentUser } from "@/lib/api";
import { getPosts } from "@/lib/blog";

export default async function HomePage() {
  const user = await getCurrentUser();

  // Signed-in learners get their personal dashboard instead of the marketing page.
  if (user) {
    if (!user.onboarded) redirect("/welcome");
    const [data, posts] = await Promise.all([apiFetch("/me/dashboard"), getPosts()]);
    return <HomeDashboard data={data} posts={posts} />;
  }

  return (
    <>
      <Hero />
      <TechMarquee />
      <ExploreLearning />
      <WhyChooseUs />
      <ImageShowcase />
      <FeatureCards />
      <ItKnowledgeLibrary />
      <LearningSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
