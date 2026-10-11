import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SubjectCard({
  title,
  description,
  icon: Icon,
  topics,
  color = "blue",
  href = "#",
}) {
  const colorStyles = {
    blue: {
      icon: "bg-blue-50 text-blue-600",
      badge: "bg-blue-50 text-blue-600",
      hover: "group-hover:border-blue-200",
    },
    purple: {
      icon: "bg-purple-50 text-purple-600",
      badge: "bg-purple-50 text-purple-600",
      hover: "group-hover:border-purple-200",
    },
    green: {
      icon: "bg-emerald-50 text-emerald-600",
      badge: "bg-emerald-50 text-emerald-600",
      hover: "group-hover:border-emerald-200",
    },
    orange: {
      icon: "bg-orange-50 text-orange-600",
      badge: "bg-orange-50 text-orange-600",
      hover: "group-hover:border-orange-200",
    },
  };

  const styles = colorStyles[color] || colorStyles.blue;

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.hover}`}
    >
      {/* Decorative background */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon}`}
        >
          {Icon && <Icon size={27} strokeWidth={1.8} />}
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>

        {/* Topics */}
        <div className="mt-5">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
          >
            {topics} Topics
          </span>
        </div>

        {/* Explore */}
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
          Explore Subject

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}