import PracticeHero from "@/components/practice/PracticeHero";
import PracticeCategories from "@/components/practice/PracticeCategories";
import ProblemFilters from "@/components/practice/ProblemFilters";
import ProblemTable from "@/components/practice/ProblemTable";

export default function PracticePage() {
  return (
    <>
      <PracticeHero />

      <PracticeCategories />

      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">

          {/* Section Heading */}
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Practice Problems
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Choose a problem and start solving
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Search problems by name, filter them by difficulty,
              and explore different programming topics.
            </p>
          </div>

          {/* Filters */}
          <ProblemFilters />

          {/* Problem Table */}
          <div className="mt-6">
            <ProblemTable />
          </div>

        </div>
      </section>
    </>
  );
}