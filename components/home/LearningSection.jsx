export default function LearningSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Learn With Direction
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Follow a learning path instead of learning randomly.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Build your knowledge step-by-step with structured paths
            designed around beginner, intermediate and advanced levels.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex gap-4">
              <div className="gradient-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                1
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Start with the fundamentals
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Build a strong foundation before moving to advanced topics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="gradient-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                2
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Practice what you learn
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Apply concepts through examples and practical resources.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="gradient-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                3
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Keep progressing
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Move from beginner concepts to advanced skills at your pace.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
          <div className="rounded-3xl bg-slate-50 p-6">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Your Study Path
                </p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  Frontend Development
                </h3>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                45%
              </span>
            </div>

            <div className="mt-6 space-y-4">

              {[
                "HTML & CSS",
                "JavaScript",
                "React",
                "Projects",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                    {index + 1}
                  </div>

                  <p className="font-semibold text-slate-800">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}