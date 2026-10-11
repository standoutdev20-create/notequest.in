export default function PracticeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="section-container relative py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <span className="text-base">✦</span>
            Learn by solving
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Practice IT
            <br />
            <span className="gradient-text">Problems</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Build your skills with hands-on problems across programming,
            data structures, databases, algorithms, and more.
          </p>

          {/* Supporting Text */}
          <p className="mt-5 text-sm font-semibold text-slate-500">
            Solve problems. Improve your logic. Build confidence.
          </p>

        </div>
      </div>
    </section>
  );
}