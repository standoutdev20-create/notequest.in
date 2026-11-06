# notequest.in

Public NoteQuest website (Next.js 16): articles, personal notes with download, and study paths with progress tracking.

Data comes from the Express API in `../notequest-backend`. `/api/*` and `/uploads/*` are proxied there
(see `next.config.ts`), so the login cookie is first-party.

```bash
cp .env.example .env.local   # API_URL, NEXT_PUBLIC_CRM_URL
npm install
npm run dev                  # http://localhost:3000  (start the API first)
```

- `/`: marketing page for visitors; **personal dashboard** for signed-in learners (streak, daily goal,
  continue learning, balanced recommendations across interests, activity heatmap, sticky notes, paths)
- `/signup` → `/welcome`: pick interests and a daily goal (editable later)
- `/subjects/[slug]`: course page with modules, lessons and progress
- `/subjects/[slug]/[lesson]`: lesson reader with outline, reading progress, mark complete, and a
  **sticky notes** panel (highlight any text → "Add to note"; notes autosave and download as Markdown)
- `/notes`: sticky-note board (filter by lessons / articles / personal, colour, search, download)
- `/study-path/[slug]`: path steps linked to the lessons that teach them (`data/pathLessons.js`)
- `/blog/[slug]`: articles from the API, with a "Take notes" shortcut

If the API is down, the blog falls back to the bundled starter posts in `data/blogPosts.js`.
