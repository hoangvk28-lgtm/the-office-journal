import { MIGRATED_GUIDE_SLUGS_TO_SILO } from "@/lib/migrated-silos";

// categorySlug/subcategorySlug values that make up each aggregate editorial
// department. Presentation-only grouping — it does not move or redirect any URL.
const siloKeys = (...silos: string[]) =>
  Object.entries(MIGRATED_GUIDE_SLUGS_TO_SILO)
    .filter(([, silo]) => silos.includes(silo))
    .map(([key]) => key);

export const DEPARTMENT_MATCH_SLUGS: Record<string, string[]> = {
  "office-furniture": [
    ...siloKeys("chairs", "desks"),
    "task-chairs",
    "ergonomic-chairs",
    "footrests",
    "file-cabinets",
    "desk-organizers",
  ],
  ergonomics: [
    "ergonomics",
    "ergonomic-chairs",
    "ergonomic-keyboards",
    "ergonomic-accessories",
    "vertical-mice",
    "eye-comfort",
    "standing-accessories",
    "anti-fatigue-mats",
  ],
};
