import { notFound } from "next/navigation";
import NoteEditor from "@/components/notes/NoteEditor";
import { ApiError, apiFetch, requireUser } from "@/lib/api";

export const metadata = { title: "Note | NoteQuest" };

export default async function NotePage({ params }) {
  const { id } = await params;
  await requireUser(`/notes/${id}`);

  let note;
  try {
    ({ note } = await apiFetch(`/notes/${encodeURIComponent(id)}`));
  } catch (err) {
    if (err instanceof ApiError && (err.status === 404 || err.status === 400)) notFound();
    throw err;
  }

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-[#F4F8FF] via-white to-white px-4 py-10 sm:py-14">
      <NoteEditor key={note.id} note={note} />
    </section>
  );
}
