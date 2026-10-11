import Link from "next/link";
import {
BookOpen,
Code2,
GraduationCap,
Map,
PlayCircle,
ArrowUpRight,
} from "lucide-react";

const features = [
{
title: "Notes & Resources",
description:
"Explore useful notes and references to strengthen your fundamentals.",
href: "/resources",
image: "/images/about/feature-notes.jpg",
icon: BookOpen,
},
{
title: "IT Subjects",
description:
"Discover programming languages and important computer science topics.",
href: "/subjects",
image: "/images/about/feature-subjects.jpg",
icon: GraduationCap,
},
{
title: "Coding Practice",
description:
"Improve your problem-solving skills with programming challenges.",
href: "/practice",
image: "/images/about/feature-practice.jpg",
icon: Code2,
},
{
  title: "Learning Videos",
  description: "Learn concepts through helpful video tutorials.",
  href: "/videos",
  image: "/images/about/feature-videos.jpg",
  icon: PlayCircle,
},
{
title: "Study Paths",
description:
"Give your learning journey direction with structured topic paths.",
href: "/study-path",
image: "/images/about/feature-study-paths.jpg",
icon: Map,
},
];

export default function AboutFeatures() {
return ( <section className="bg-white px-6 py-20 sm:py-24"> <div className="mx-auto max-w-7xl"> <div className="mx-auto max-w-2xl text-center"> <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
Explore NoteQuest </span> <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
Everything to support your learning </h2> <p className="mt-4 leading-7 text-slate-600">
Explore different ways to learn, practice, and grow your technical
knowledge. </p> </div>


    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <Link
            key={feature.title}
            href={feature.href}
            className="group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl bg-cover bg-center p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            style={{
              backgroundImage: `url('${feature.image}')`,
            }}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/15 transition duration-300 group-hover:via-indigo-950/75" />

            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition group-hover:bg-white/20">
              <ArrowUpRight size={20} />
            </div>

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-blue-200 backdrop-blur-md">
              <Icon size={25} />
            </div>

            <h3 className="text-xl font-bold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">
              {feature.description}
            </p>
          </Link>
        );
      })}
    </div>
  </div>
</section>

);
}
