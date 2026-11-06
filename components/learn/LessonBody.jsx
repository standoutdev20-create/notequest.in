import { Lightbulb } from "lucide-react";
import RichText from "./RichText";
import CodeBlock from "./CodeBlock";

/** Server-rendered lesson content: sections, code examples and key takeaways. */
export default function LessonBody({ lesson }) {
  return (
    <>
      {lesson.sections.map((section, i) => (
        <section key={i} className="mb-12 scroll-mt-24" id={`section-${i + 1}`}>
          {section.heading && (
            <h2 className="mb-5 flex items-baseline gap-3 text-2xl font-extrabold tracking-tight text-slate-900">
              <span className="text-sm font-black text-indigo-300">{String(i + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
          )}
          <div className="space-y-5">
            {section.paragraphs.map((p, j) => (
              <RichText key={j} text={p} />
            ))}
          </div>
          {section.code && <CodeBlock code={section.code} language={section.language} />}
        </section>
      ))}

      {lesson.keyPoints?.length > 0 && (
        <aside className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 sm:p-8">
          <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-indigo-700">
            <Lightbulb className="h-4 w-4" /> Key takeaways
          </p>
          <ul className="mt-4 space-y-3">
            {lesson.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-7 text-slate-700">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">{i + 1}</span>
                <RichText text={k} className="!text-[15px] !leading-7 !text-slate-700" />
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
