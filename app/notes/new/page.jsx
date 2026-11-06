import NoteEditor from "@/components/notes/NoteEditor";
import { requireUser } from "@/lib/api";

export const metadata = { title: "New note | NoteQuest" };

export default async function NewNotePage({ searchParams }) {
  const { article, title } = await searchParams;
  await requireUser(article ? `/notes/new?article=${encodeURIComponent(article)}` : "/notes/new");
  const source = typeof article === "string" ? { slug: article, title: typeof title === "string" ? title : article } : null;

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-[#F4F8FF] via-white to-white px-4 py-10 sm:py-14">
      <NoteEditor source={source} />
    </section>
  );
}
