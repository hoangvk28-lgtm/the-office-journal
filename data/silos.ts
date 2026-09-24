// Topic-first top-level silos (see architecture decision, 2026-09-23).
// Each of these is a real top-level route (e.g. /desks, not /categories/desks).
// New content must be assigned to exactly one of these six silos.

export interface Silo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
}

export const silos: Silo[] = [
  {
    slug: "workspace-ideas",
    name: "Workspace Ideas",
    tagline: "Inspiration for every kind of space",
    description:
      "Setup ideas and inspiration organized by space and style — small home offices, bedroom offices, apartment setups, and more.",
  },
  {
    slug: "desks",
    name: "Desks",
    tagline: "Standing desks, small desks, and everything in between",
    description:
      "Buying guides, reviews, and comparisons for standing desks, small desks, corner desks, and computer desks.",
  },
  {
    slug: "chairs",
    name: "Chairs",
    tagline: "Ergonomic and office chairs for long work sessions",
    description:
      "Buying guides, reviews, and comparisons for ergonomic chairs, office chairs, mesh chairs, and chairs for small spaces.",
  },
  {
    slug: "lighting",
    name: "Lighting",
    tagline: "Desk lamps, light bars, and ambient lighting",
    description:
      "Buying guides, reviews, and comparisons for desk lamps, monitor light bars, and ambient and video-call lighting.",
  },
  {
    slug: "desk-setup",
    name: "Desk Setup",
    tagline: "Monitors, arms, keyboards, and cable management",
    description:
      "Everything that goes on and around the desk — monitor arms, laptop stands, keyboards, mice, desk mats, cable management, and organization.",
  },
  {
    slug: "work-better",
    name: "Work Better",
    tagline: "Ergonomics, focus, and productivity at home",
    description:
      "Non-commercial advice on ergonomics, organization, focus, productivity, and remote work — the habits and setup choices that make a home workspace work.",
  },
];

// Aggregate editorial departments (The Office Journal nav). These are hub
// pages only — they list guides that keep their existing canonical URLs and
// have no /<slug>/[slug] detail routes. No redirects point at them.
export const departmentHubs: Silo[] = [
  {
    slug: "office-furniture",
    name: "Office Furniture",
    tagline: "Chairs, desks, storage and the furniture a workday rests on",
    description:
      "Guides and reviews for office chairs, standing desks, storage, footrests and the furniture that shapes a home workspace.",
  },
  {
    slug: "ergonomics",
    name: "Ergonomics",
    tagline: "Posture, comfort and setups that are kinder to your body",
    description:
      "Practical ergonomics for home offices — chair and desk height, monitor position, keyboards, footrests and eye comfort.",
  },
];

export function getSiloBySlug(slug: string): Silo | undefined {
  return silos.find((s) => s.slug === slug) ?? departmentHubs.find((s) => s.slug === slug);
}
