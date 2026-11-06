import LessonReader from "@/components/learn/LessonReader";
import LessonBody from "@/components/learn/LessonBody";
import { apiFetch, getCurrentUser } from "@/lib/api";
import { getCompleted, getLesson } from "@/lib/learning";

export async function generateMetadata({ params }) {
  const { slug, lesson } = await params;
  try {
    const data = await getLesson(slug, lesson);
    return { title: `${data.lesson.title} · ${data.subject.title} | NoteQuest`, description: data.lesson.summary };
  } catch {
    return {};
  }
}

export default async function LessonPage({ params }) {
  const { slug, lesson: lessonSlug } = await params;
  const [data, user] = await Promise.all([getLesson(slug, lessonSlug), getCurrentUser()]);
  const key = `${slug}/${lessonSlug}`;
  const [completed, notes] = await Promise.all([
    getCompleted(user, slug),
    user ? apiFetch(`/notes?source=${encodeURIComponent(key)}`).then((r) => r.notes) : [],
  ]);

  return (
    <LessonReader
      subject={data.subject}
      lesson={data.lesson}
      modules={data.modules}
      position={data.position}
      prev={data.prev}
      next={data.next}
      completedKeys={completed}
      notes={notes}
      signedIn={Boolean(user)}
    >
      <LessonBody lesson={data.lesson} />
    </LessonReader>
  );
}
