import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  PlayCircle,
} from "lucide-react";

export default function SubjectResources({ details }) {
  const resources = details.featuredResources || [];

  const resourceIcons = {
    Notes: FileText,
    Video: PlayCircle,
    Practice: Code2,
    Project: BookOpen,
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            to strengthen your {details.title} knowledge.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resourceIcons[resource.type] || BookOpen;

            return (
              <div
                key={`${resource.title}-${index}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                      <Icon size={14} className="text-blue-600" />
                      {resource.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <button
                    type="button"
                    className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                  >
                    Explore Resource

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resource Stats */}
        {details.stats && (
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
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-extrabold text-slate-900">{value}+</p>

      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
