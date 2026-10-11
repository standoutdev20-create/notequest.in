import StudyPathHero from "../../components/study-path/StudyPathHero";
import StudyPathCards from "../../components/study-path/StudyPathCards";
import HowStudyPathWorks from "../../components/study-path/HowStudyPathWorks";
import StudyPathCTA from "../../components/study-path/StudyPathCTA";

export default function StudyPathPage() {
  return (
    <main>
      <StudyPathHero />
      <StudyPathCards />
      <HowStudyPathWorks />
      <StudyPathCTA />
    </main>
  );
}