import { createElement } from "react";
import { Brain, Cloud, Code2, Cpu, Database, Globe2, Network, Smartphone, BookOpen } from "lucide-react";

export const SUBJECT_ICONS = {
  "programming-languages": Code2,
  "web-development": Globe2,
  "data-structures-algorithms": Cpu,
  "database-sql": Database,
  "ai-machine-learning": Brain,
  "cloud-devops": Cloud,
  "mobile-development": Smartphone,
  "computer-networks": Network,
};

export const subjectIcon = (slug) => SUBJECT_ICONS[slug] || BookOpen;

/** Renders the icon for a subject slug. */
export function SubjectIcon({ slug, ...props }) {
  return createElement(SUBJECT_ICONS[slug] || BookOpen, props);
}
