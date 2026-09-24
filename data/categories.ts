export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
  /**
   * Optional list of underlying guide categorySlug/subcategorySlug values this
   * category aggregates. When present, guide matching uses this array instead
   * of a single exact `categorySlug === slug` check. Existing categories that
   * omit this keep their original single-slug matching behavior unchanged.
   */
  matchSlugs?: string[];
}

export const categories: Category[] = [
  {
    slug: "desk-setup",
    name: "Desk Setup",
    description:
      "The core equipment that makes a desk work well day to day - monitor arms, keyboards, lighting, and the accessories that turn a bare desk into a real workspace.",
    shortDescription: "Desks, monitor arms, lighting, and daily-use accessories.",
    icon: "Monitor",
    color: "#7c9068",
    subcategories: ["desk-lamps", "monitor-stands", "laptop-stands", "cable-management", "monitor-arms", "microphones", "webcams", "ergonomic-keyboards", "mechanical-keyboards", "printer-stands", "printers"],
  },
  {
    slug: "dorm-essentials",
    name: "Compact Essentials",
    description:
      "Practical, space-saving gear for a workspace that has to share a room with everything else - small desks, tight corners, and anywhere square footage is limited.",
    shortDescription: "Space-saving essentials for a smaller footprint.",
    icon: "GraduationCap",
    color: "#a8875a",
    subcategories: ["cable-management", "desk-lamps"],
  },
  {
    slug: "small-room-storage",
    name: "Storage & Organization",
    description:
      "Organization, storage, and cable management that keep a workspace clear and focused - so the space works for you instead of adding to the clutter.",
    shortDescription: "Organization and storage for a clearer, calmer desk.",
    icon: "Archive",
    color: "#63635a",
    subcategories: ["bookshelves"],
  },
  {
    slug: "compact-home-office",
    name: "Workspace",
    description:
      "Guides for building a home office that actually works, from a single corner desk to a full dedicated room - setup ideas, layout advice, and the gear that ties it together.",
    shortDescription: "Setup ideas and gear for a real working home office.",
    icon: "Briefcase",
    color: "#5c6f4b",
    subcategories: ["monitor-stands", "laptop-stands", "desk-lamps", "cable-management", "tv-stands", "chair-mats", "under-desk-fitness", "nas-storage", "docking-stations"],
  },
  {
    slug: "chairs",
    name: "Chairs",
    description:
      "A workday is only as good as the seat underneath it. Task chairs, ergonomic and kneeling options, drafting chairs for standing desks, and the mats that protect the floor beneath them.",
    shortDescription: "Task, ergonomic, kneeling, and drafting chairs for long workdays.",
    icon: "Chair",
    color: "#5f7a4a",
    subcategories: [],
    matchSlugs: ["task-chairs", "office-seating", "kneeling-chairs", "drafting-chairs", "chair-mats", "office-chairs"],
  },
  {
    slug: "monitors",
    name: "Monitors",
    description:
      "The screen you look at all day matters - 4K and USB-C displays, gaming monitors, portable second screens, monitor arms and stands, and the privacy screens and light bars that round things out.",
    shortDescription: "4K, USB-C, gaming, and portable monitors, plus arms and stands.",
    icon: "Monitor",
    color: "#5c6f4b",
    subcategories: ["monitor-stands"],
    matchSlugs: ["4k-monitors", "gaming-monitors", "displays", "usb-c-monitors", "monitor-stands", "portable-monitors", "monitor-arms", "monitor-privacy-screens", "monitors", "under-monitor-storage-shelves"],
  },
  {
    slug: "lighting",
    name: "Lighting",
    description:
      "Good light changes how a workspace feels - desk lamps that don't strain your eyes, ring lights and video lighting for calls and content, and the fixtures that make a dim corner usable.",
    shortDescription: "Desk lamps, ring lights, and video lighting for a well-lit desk.",
    icon: "Lightbulb",
    color: "#a8875a",
    subcategories: ["desk-lamps"],
    matchSlugs: ["ring-lights", "video-lighting", "desk-lamps"],
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "The small things that finish a setup - mouse pads and desk pads, document holders, cable management, keyboards, docking stations, and the everyday organizers that keep a desk clear and working.",
    shortDescription: "Cable management, keyboards, docking stations, and desk organizers.",
    icon: "Tag",
    color: "#c9a876",
    subcategories: ["desk-organizers", "cable-management", "laptop-stands", "keyboards", "power-strips", "wireless-charging", "storage-bins"],
    matchSlugs: ["desk-accessories", "mouse-pads", "desk-pads", "document-holders", "cable-management", "cord-organizers", "cable-sleeves", "copy-holders", "bookends", "tape-dispensers", "desk-staplers", "sticky-note-dispensers", "business-card-holders", "id-badge-holders", "paper-letter-trays", "mug-warmers", "coffee-warmers", "power-banks", "power-strips", "surge-protectors", "ergonomic-keyboards", "mechanical-keyboards", "keyboards", "webcams", "microphones", "docking-stations", "kvm-switches", "usb-c-ethernet-adapters"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
