import { apiFetch, requireUser } from "@/lib/api";
import NotesBoard from "@/components/notes/NotesBoard";

export const metadata = { title: "My Notes | NoteQuest" };

export default async function NotesPage() {
  await requireUser("/notes");
  const { notes } = await apiFetch("/notes");

  return (
    <section className="min-h-[70vh] bg-[#f6f7fb] px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">Your notebook</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">My Notes</h1>
          <p className="mt-2 max-w-2xl text-slate-500">
            Sticky notes from your lessons and articles, plus your own notes. Everything is saved to your account and downloadable as Markdown.
          </p>
        </div>
        <NotesBoard notes={notes} />
      </div>
    </section>
  );
}
