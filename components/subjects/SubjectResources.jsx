import Link from "next/link";
import {
ArrowRight,
BookOpen,
Code2,
FileText,
PlayCircle,
} from "lucide-react";

export default function SubjectResources({ details }) {
const resources = details?.featuredResources || [];

const resourceIcons = {
Notes: FileText,
Video: PlayCircle,
Practice: Code2,
Project: BookOpen,
};

return ( <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-[#F4F8FE] to-white py-20 lg:py-24">
{/* Hero-style Background Glow Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-3xl" />


    <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-3xl" />

    <div className="absolute bottom-0 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
        Learn With NoteQuest
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Everything you need to practice
      </h2>

      <p className="mt-4 text-lg leading-7 text-slate-600">
        Explore structured notes, learning videos and practical exercises
        to strengthen your {details?.title || "subject"} knowledge.
      </p>
    </div>

    {/* Resource Cards */}
    {resources.length > 0 ? (
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => {
          const Icon = resourceIcons[resource.type] || BookOpen;

          return (
            <div
              key={`${resource.title || "resource"}-${index}`}
              className="group overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Resource Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                {resource.image ? (
                  <img
                    src={resource.image}
                    alt={resource.title || "Learning resource"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Icon size={42} className="text-blue-300" />
                  </div>
                )}

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                    <Icon size={14} className="text-blue-600" />
                    {resource.type}
                  </span>
                </div>
              </div>

              {/* Resource Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {resource.description}
                </p>

                {resource.href ? (
                  <Link
                    href={resource.href}
                    className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                  >
                    Explore Resource
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex cursor-not-allowed items-center gap-2 text-sm font-bold text-slate-400">
                    Explore Resource
                    <ArrowRight size={17} />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="mt-10 rounded-3xl border border-dashed border-blue-200 bg-white/70 px-6 py-12 text-center backdrop-blur-sm">
        <BookOpen size={36} className="mx-auto text-blue-400" />

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Resources coming soon
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Learning resources for this subject will be available soon.
        </p>
      </div>
    )}

    {/* Resource Stats */}
    {details?.stats && (
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <ResourceStat
          value={details.stats.notes}
          label="Learning Notes"
        />

        <ResourceStat
          value={details.stats.videos}
          label="Learning Videos"
        />

        <ResourceStat
          value={details.stats.practice}
          label="Practice Problems"
        />

        <ResourceStat
          value={details.stats.projects}
          label="Projects"
        />
      </div>
    )}
  </div>
</section>


);
}

function ResourceStat({ value, label }) {
return ( <div className="rounded-2xl border border-blue-100/80 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"> <p className="text-2xl font-extrabold text-slate-900">
{value ?? 0}+ </p>


  <p className="mt-1 text-sm font-medium text-slate-500">
    {label}
  </p>
</div>


);
}
