import Marquee from "@/components/ui/Marquee";

const rowOne = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛" },
  { name: "Java", icon: "☕" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "HTML & CSS", icon: "</>" },
  { name: "C++", icon: "C+" },
  { name: "Git", icon: "⎇" },
];

const rowTwo = [
  { name: "SQL", icon: "DB" },
  { name: "Data Structures", icon: "DS" },
  { name: "Algorithms", icon: "AL" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁" },
  { name: "Machine Learning", icon: "AI" },
  { name: "Networking", icon: "🌐" },
  { name: "Linux", icon: "🐧" },
  { name: "Operating Systems", icon: "OS" },
];

function Chip({ name, icon }) {
  return (
    <div className="group mx-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-xs font-extrabold text-blue-600 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
        {icon}
      </span>
      <span className="whitespace-nowrap text-sm font-bold text-slate-700">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section data-no-reveal className="relative overflow-hidden border-y border-slate-100 bg-white py-10">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        Learn the technologies that matter
      </p>

      <div className="space-y-4">
        <Marquee duration={45}>
          {rowOne.map((t) => (
            <Chip key={t.name} {...t} />
          ))}
        </Marquee>

        <Marquee duration={50} reverse>
          {rowTwo.map((t) => (
            <Chip key={t.name} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
