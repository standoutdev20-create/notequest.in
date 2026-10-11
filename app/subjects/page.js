
import SubjectsHero from "@/components/subjects/SubjectsHero";
import SubjectSearch from "@/components/subjects/SubjectSearch";
import SubjectCategories from "@/components/subjects/SubjectCategories";
import LearningPaths from "@/components/subjects/LearningPaths";
import WhyLearn from "@/components/subjects/WhyLearn";
import SubjectsCTA from "@/components/subjects/SubjectsCTA";

export default function SubjectsPage() {
  return (
    <main>
      <SubjectsHero />

      <SubjectSearch />

      <SubjectCategories />

      <LearningPaths />

      <WhyLearn />

      <SubjectsCTA />
    </main>
  );
}

