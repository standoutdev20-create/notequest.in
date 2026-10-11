const categories = [
  {
    title: "Programming",
    description: "Core languages",
    icon: "</>",
    style: "bg-blue-50 text-blue-600",
  },
  {
    title: "Data Structures",
    description: "Arrays, Trees, Graphs",
    icon: "DS",
    style: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Algorithms",
    description: "Problem Solving",
    icon: "AL",
    style: "bg-purple-50 text-purple-600",
  },
  {
    title: "SQL & Database",
    description: "SQL, DBMS",
    icon: "DB",
    style: "bg-violet-50 text-violet-600",
  },
  {
    title: "Web Development",
    description: "Frontend & Backend",
    icon: "WEB",
    style: "bg-sky-50 text-sky-600",
  },
  {
    title: "Computer Science",
    description: "CS Fundamentals",
    icon: "CS",
    style: "bg-fuchsia-50 text-fuchsia-600",
  },
];

export default function PracticeCategories() {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="section-container">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white ${category.style}`}
              >
                {category.icon}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {category.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {category.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-lg text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                →
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}