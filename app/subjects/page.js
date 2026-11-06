import SubjectsHero from "@/components/subjects/SubjectsHero";
import SubjectSearch from "@/components/subjects/SubjectSearch";
import SubjectCategories from "@/components/subjects/SubjectCategories";
import LearningPaths from "@/components/subjects/LearningPaths";
import WhyLearn from "@/components/subjects/WhyLearn";
import SubjectsCTA from "@/components/subjects/SubjectsCTA";
import { getCurrentUser } from "@/lib/api";
import { getCompleted, getSubjects } from "@/lib/learning";

export const metadata = { title: "Subjects | NoteQuest" };

export default async function SubjectsPage() {
  const [subjects, user] = await Promise.all([getSubjects(), getCurrentUser()]);
  const completed = await getCompleted(user);
  const stats = Object.fromEntries(subjects.map((s) => [s.slug, { lessons: s.lessons, minutes: s.minutes }]));
  const progress = Object.fromEntries(
    subjects.map((s) => [s.slug, s.lessons ? Math.round((completed.filter((k) => k.startsWith(`${s.slug}/`)).length / s.lessons) * 100) : 0])
  );

  return (
    <main>
      <SubjectsHero />
      <SubjectSearch />
      <SubjectCategories stats={stats} progress={progress} />
      <LearningPaths />
      <WhyLearn />
      <SubjectsCTA />
    </main>
  );
}
