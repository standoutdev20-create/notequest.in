import Hero from "@/components/home/Hero";
import ExploreLearning from "@/components/home/ExploreLearning";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeatureCards from "@/components/home/FeatureCards";
import PracticeSection from "@/components/home/PracticeSection";
import ItKnowledgeLibrary from "@/components/home/ItKnowledgeLibrary";
import LearningSection from "@/components/home/LearningSection";
import FaqSection from "../components/home/FaqSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreLearning />
      <WhyChooseUs />
      <FeatureCards />
      <PracticeSection />
      <ItKnowledgeLibrary />
      <LearningSection />
      <FaqSection />
      <CTASection/>

      
    </>
  );
}