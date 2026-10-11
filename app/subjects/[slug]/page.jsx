import { notFound } from "next/navigation";

import { subjects } from "@/data/subjects";
import { subjectDetails } from "@/data/subjectDetails";

import SubjectDetailsHero from "@/components/subjects/SubjectDetailsHero";
import SubjectLearning from "@/components/subjects/SubjectLearning";
import SubjectResources from "@/components/subjects/SubjectResources";
import SubjectCTA from "@/components/subjects/SubjectCTA";

export default async function SubjectDetailsPage({ params }) {
  const { slug } = await params;

  const subject = subjects.find((item) => item.slug === slug);

  if (!subject) {
    notFound();
  }

  /*
   * If detailed data exists in subjectDetails.js,
   * use that data.
   *
   * Otherwise create the details automatically
   * from subjects.js.
   */
  const details = subjectDetails[slug] || {
    slug: subject.slug,
    title: subject.title,
    heroImage: subject.image,
    tagline: `Build your ${subject.title} skills step by step`,
    overview: subject.overview || subject.description,

    topics: (subject.topicsList || []).map((topic) => ({
      title: topic,
      description: `Learn the fundamentals and practical concepts of ${topic}.`,
      image: subject.image,
    })),

    learningPath: subject.topicsList || [],

    whatYouLearn:
      subject.whatYouLearn ||
      subject.topicsList ||
      [],

    featuredResources: [
      {
        title: `${subject.title} Notes`,
        type: "Notes",
        description: `Learn important ${subject.title} concepts through structured notes.`,
        image: subject.image,
      },
      {
        title: `${subject.title} Videos`,
        type: "Video",
        description: `Watch tutorials and understand important concepts step by step.`,
        image: subject.image,
      },
      {
        title: `${subject.title} Practice`,
        type: "Practice",
        description: `Practice what you learn and improve your technical skills.`,
        image: subject.image,
      },
    ],

    stats: {
      notes: subject.topics || 0,
      videos: Math.max(Math.floor((subject.topics || 0) * 0.7), 5),
      practice: Math.max((subject.topics || 0) * 2, 10),
      projects: Math.max(Math.floor((subject.topics || 0) / 2), 3),
    },

    skills: subject.skills || [],
    careerPaths: subject.careerPaths || [],
  };

  return (
    <main className="min-h-screen bg-white">
      <SubjectDetailsHero
        subject={subject}
        details={details}
      />

      <SubjectLearning
        details={details}
      />

      <SubjectResources
        details={details}
      />

      <SubjectCTA
        details={details}
      />
    </main>
  );
}
