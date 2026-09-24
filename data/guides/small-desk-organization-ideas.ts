export const guideSlug = "small-desk-organization-ideas";
export const guideTitle =
  "Small Desk Organization Ideas: 7 Methods That Actually Keep a Tiny Desk Clean";
export const guideDescription =
  "7 proven small desk organization ideas - from vertical stacking to under-desk drawers - that keep compact workspaces clutter-free. Includes product picks, scoring, and a step-by-step setup checklist.";
export const metaTitle = "Small Desk Organization Ideas (2026)";
export const metaDescription = "7 desk organization methods for small workspaces -- zone systems, vertical storage, and under-desk drawers. Product picks, scoring, and a setup checklist.";
export const mainKeyword = "small desk organization ideas";
export const lastUpdated = "2026-05-27";
export const readTime = "14 min";
export const heroImage =
  "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/small-desk-organization-ideas-thumbnail.jpg";

export interface OrgProduct {
  id: string;
  name: string;
  method: number;
  score: number;
  price: string;
  footprint: string;
  amazonUrl: string;
  imageUrl: string;
  whyItWorks: string[];
  tradeoffs: string[];
}

export const products: OrgProduct[] = [
  {
    id: "desktop-shelf-riser",
    name: "Desktop Shelf Riser",
    method: 1,
    score: 8.8,
    price: "$25–$40",
    footprint: "16–24 x 8 in",
    amazonUrl: "https://amzn.to/4fbur3E",
    imageUrl: "https://m.media-amazon.com/images/I/71aqzr5zrhL._AC_SL1500_.jpg",
    whyItWorks: [
      "Adds storage without consuming new surface area",
      "Adjustable width fits desks from 30 to 48 inches",
      "Creates a visual back wall that frames the workspace",
    ],
    tradeoffs: [
      "Adds visual height - can feel cramped in very tight spaces",
      "Cheaper models wobble under weight",
    ],
  },
  {
    id: "wall-mounted-pegboard",
    name: "Wall-Mounted Pegboard",
    method: 1,
    score: 8.5,
    price: "$20–$35",
    footprint: "0 (wall mounted)",
    amazonUrl: "https://amzn.to/4v4U62o",
    imageUrl: "https://m.media-amazon.com/images/I/71-qghkuORL._AC_SL1500_.jpg",
    whyItWorks: [
      "Zero desktop footprint",
      "Fully customizable layout with hooks and shelves",
      "Modular - add or remove hooks as needs change",
    ],
    tradeoffs: [
      "Requires wall mounting (screws or heavy-duty adhesive)",
      "Can look cluttered if overloaded - edit ruthlessly",
    ],
  },
  {
    id: "adhesive-under-desk-drawer",
    name: "Adhesive Under-Desk Drawer",
    method: 2,
    score: 8.6,
    price: "$12–$22",
    footprint: "0 (mounted under desk)",
    amazonUrl: "https://amzn.to/4fFtFfm",
    imageUrl: "https://m.media-amazon.com/images/I/71VFUgYerpL._AC_SL1500_.jpg",
    whyItWorks: [
      "Adds drawer storage to any flat surface",
      "Completely invisible when closed",
      "No tools required for adhesive models",
    ],
    tradeoffs: [
      "Adhesive can fail on textured wood - screw-in versions are more reliable",
      "Limited depth means bulkier items won't fit",
    ],
  },
  {
    id: "stackable-plastic-drawers",
    name: "Stackable Plastic Drawer Units",
    method: 2,
    score: 8.4,
    price: "$18–$30",
    footprint: "Under-desk floor space",
    amazonUrl:
      "https://www.amazon.com/s?k=stackable+plastic+drawers+desk&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/71Wxh5qmm7L._AC_UL320_.jpg",
    whyItWorks: [
      "Scales to any height - stack 2, 3, or 4 units",
      "Clear drawers mean no rummaging",
      "Portable - easy to rearrange or move",
    ],
    tradeoffs: [
      "Plastic construction feels less premium",
      "Taller stacks become wobbly",
    ],
  },
  {
    id: "under-desk-cable-tray",
    name: "Under-Desk Cable Management Tray",
    method: 2,
    score: 9.0,
    price: "$25–$32",
    footprint: "0 (mounted under desk)",
    amazonUrl: "https://amzn.to/4f6BbzJ",
    imageUrl: "https://m.media-amazon.com/images/I/71EZI1CHQqL._AC_SL1500_.jpg",
    whyItWorks: [
      "Removes the power strip from your desktop entirely",
      "Hides 6–8 cables in one tray",
      "Clamp-on design - no permanent modifications",
    ],
    tradeoffs: [
      "Installation takes 15–20 minutes",
      "Desk thickness must be under 1.5 inches for most clamps",
    ],
  },
  {
    id: "compact-mesh-organizer",
    name: "Compact Mesh Desk Organizer",
    method: 3,
    score: 8.7,
    price: "$12–$18",
    footprint: "4 x 6 in",
    amazonUrl:
      "https://www.amazon.com/s?k=compact+mesh+desk+organizer&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/91acTNhrcgL._AC_UL320_.jpg",
    whyItWorks: [
      "Small enough to enforce the one-bin rule",
      "Mesh visibility prevents junk-drawer syndrome",
      "Sub-$20 - low commitment",
    ],
    tradeoffs: [
      "Small items (paper clips, pins) fall through mesh gaps",
      "Not the most aesthetic option for design-conscious setups",
    ],
  },
  {
    id: "bamboo-desktop-tray",
    name: "Bamboo Desktop Tray",
    method: 3,
    score: 8.3,
    price: "$15–$25",
    footprint: "6 x 8 in",
    amazonUrl: "https://amzn.to/4a0dGF1",
    imageUrl: "https://m.media-amazon.com/images/I/71Bb3MH1xFL._AC_SL1500_.jpg",
    whyItWorks: [
      "Looks intentional, not utilitarian",
      "Bamboo is durable and easy to clean",
      "Natural material blends with most desk setups",
    ],
    tradeoffs: [
      "No visibility into contents - you'll forget what's inside",
      "Bamboo stains if wet items sit in it",
    ],
  },
  {
    id: "bamboo-monitor-riser-drawer",
    name: "Bamboo Monitor Riser with Drawer",
    method: 4,
    score: 9.2,
    price: "$35–$45",
    footprint: "22 x 9 in",
    amazonUrl:
      "https://www.amazon.com/s?k=bamboo+monitor+riser+drawer&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/71DAhif-qoL._AC_UL320_.jpg",
    whyItWorks: [
      "Dual function: ergonomic lift + hidden storage in one",
      "22-inch width fits desks as narrow as 36 inches",
      "Drawer keeps small items out of sight but within reach",
    ],
    tradeoffs: [
      "Fixed height - not adjustable",
      "Drawer depth is shallow at 1.5 inches",
    ],
  },
  {
    id: "monitor-arm-clamp",
    name: "Monitor Arm (Clamp-On)",
    method: 4,
    score: 8.5,
    price: "$25–$40",
    footprint: "0 (clamped to desk edge)",
    amazonUrl:
      "https://www.amazon.com/s?k=monitor+arm+clamp+small+desk&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/61IOtMmY4cL._AC_UY218_.jpg",
    whyItWorks: [
      "Reclaims the full footprint of the monitor stand (8x10 in)",
      "Adjustable height, angle, and distance from the desk",
      "Works with most VESA-compatible monitors",
    ],
    tradeoffs: [
      "Not all monitors are VESA-compatible - check first",
      "Clamp requires a sturdy desk edge (skip for glass desks)",
    ],
  },
  {
    id: "felt-cork-desk-mat",
    name: "Felt and Cork Desk Mat",
    method: 5,
    score: 8.9,
    price: "$20–$28",
    footprint: "24 x 12 in",
    amazonUrl: "https://amzn.to/3PFnP39",
    imageUrl: "https://m.media-amazon.com/images/I/71kW3gobk-L._AC_UL320_.jpg",
    whyItWorks: [
      "Visually marks the active work zone - nothing outside it belongs in Zone 1",
      "Felt side feels premium under hands during extended use",
      "Cork backing prevents any sliding on smooth desk surfaces",
    ],
    tradeoffs: [
      "Felt collects dust and shows pet hair visibly",
      "Spills can stain the felt side - not water-resistant",
    ],
  },
  {
    id: "stackable-letter-trays",
    name: "Stackable Letter Trays (2-Pack)",
    method: 6,
    score: 8.3,
    price: "$15–$22",
    footprint: "10 x 13 in",
    amazonUrl:
      "https://www.amazon.com/s?k=stackable+letter+tray+desk&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/91e1bxRbTJL._AC_UL320_.jpg",
    whyItWorks: [
      "Forces a limit on paper accumulation",
      "Vertical stacking minimizes surface use",
      "Clear inbox/outbox system prevents random piles",
    ],
    tradeoffs: [
      "Standard letter size may not fit desks under 36 inches",
      "Paper piles up if you don't process regularly",
    ],
  },
  {
    id: "vertical-file-sorter",
    name: "Compact Vertical File Sorter",
    method: 6,
    score: 8.1,
    price: "$12–$18",
    footprint: "5 x 10 in",
    amazonUrl:
      "https://www.amazon.com/s?k=vertical+file+sorter+desk+compact&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/91ye5zMi1mL._AC_UL320_.jpg",
    whyItWorks: [
      "Keeps multiple paper categories separated without a filing cabinet",
      "Vertical orientation uses minimal surface area",
      "Works on desk shelf riser or beside the desk",
    ],
    tradeoffs: [
      "Only works if you commit to filing - random papers still pile up",
      "3–5 slot versions fill quickly for heavy paper users",
    ],
  },
];

export const comparisonTable = [
  { name: "Bamboo Monitor Riser w/ Drawer", method: 4, score: 9.2, footprint: "22×9 in", price: "$35–$45", id: "bamboo-monitor-riser-drawer" },
  { name: "Under-Desk Cable Tray", method: 2, score: 9.0, footprint: "0 (mounted)", price: "$25–$32", id: "under-desk-cable-tray" },
  { name: "Felt and Cork Desk Mat", method: 5, score: 8.9, footprint: "24×12 in", price: "$20–$28", id: "felt-cork-desk-mat" },
  { name: "Desktop Shelf Riser", method: 1, score: 8.8, footprint: "16–24×8 in", price: "$25–$40", id: "desktop-shelf-riser" },
  { name: "Compact Mesh Organizer", method: 3, score: 8.7, footprint: "4×6 in", price: "$12–$18", id: "compact-mesh-organizer" },
  { name: "Adhesive Under-Desk Drawer", method: 2, score: 8.6, footprint: "0 (mounted)", price: "$12–$22", id: "adhesive-under-desk-drawer" },
  { name: "Monitor Arm (Clamp-On)", method: 4, score: 8.5, footprint: "0 (clamped)", price: "$25–$40", id: "monitor-arm-clamp" },
  { name: "Wall-Mounted Pegboard", method: 1, score: 8.5, footprint: "0 (wall)", price: "$20–$35", id: "wall-mounted-pegboard" },
  { name: "Stackable Plastic Drawers", method: 2, score: 8.4, footprint: "Under-desk", price: "$18–$30", id: "stackable-plastic-drawers" },
  { name: "Stackable Letter Trays", method: 6, score: 8.3, footprint: "10×13 in", price: "$15–$22", id: "stackable-letter-trays" },
  { name: "Bamboo Desktop Tray", method: 3, score: 8.3, footprint: "6×8 in", price: "$15–$25", id: "bamboo-desktop-tray" },
  { name: "Vertical File Sorter", method: 6, score: 8.1, footprint: "5×10 in", price: "$12–$18", id: "vertical-file-sorter" },
];

export const checklistPhases = [
  {
    phase: "Phase 1: Clear and Audit",
    time: "15 minutes",
    items: [
      "Remove everything from the desk surface",
      "Sort into Daily / Weekly / Rarely piles",
      "Remove Rarely items from the desk area entirely",
      "Move Weekly items to nearby shelves, closet, or storage bin",
      "Only Daily items return to the desk",
    ],
  },
  {
    phase: "Phase 2: Add Infrastructure",
    time: "30 minutes",
    items: [
      "Install under-desk cable tray (hides power strip and cables)",
      "Add under-desk drawers if desk has none (adhesive or stackable)",
      "Place monitor riser or mount monitor arm",
      "Mount pegboard or shelf riser if wall space allows",
    ],
  },
  {
    phase: "Phase 3: Organize the Surface",
    time: "10 minutes",
    items: [
      "Place desk mat to define active work zone",
      "Position one organizer caddy in the supply zone",
      "Return only daily-use items to the desk",
      "Route all cables through tray or clips",
    ],
  },
  {
    phase: "Phase 4: Build the Habit",
    time: "Ongoing",
    items: [
      "Set a daily 2-minute end-of-day reset",
      "Review and declutter monthly - remove anything unused in 30 days",
      "Resist adding new organizers - if you need more storage, declutter first",
    ],
  },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is the best way to organize a small desk?",
    a: "Start by removing everything and keeping only daily-use items on the surface. Add vertical storage (shelf riser or pegboard) above and hidden storage (under-desk drawers, cable tray) below. Finish with a 2-minute daily reset habit to prevent clutter from returning.",
  },
  {
    q: "How do you organize a small desk with no drawers?",
    a: "Create your own drawer system using adhesive under-desk drawers ($12–$22) or stackable plastic drawer units placed under the desk. Pair with a cable management tray to remove the power strip from the surface. This combination gives a basic tabletop the storage of a full desk.",
  },
  {
    q: "How do I keep a small desk clean?",
    a: "The end-of-day reset is the most effective method: spend 2 minutes before closing your laptop returning every item to its assigned place. This single habit prevents clutter from accumulating and makes every other organization method sustainable.",
  },
  {
    q: "What should I put on a small desk?",
    a: "Only items you use daily: laptop or monitor, keyboard, mouse, one pen or pen cup, and your phone. Everything else should live near the desk (on shelves, in drawers, on the wall) - not on the surface. A desk mat and one compact organizer are the only accessories that earn permanent surface placement.",
  },
  {
    q: "How can I organize a small desk for studying?",
    a: "Use a monitor riser to create shelf space for textbooks, a desk mat to define your active study zone, and a compact organizer for pens and highlighters. Keep only the current subject's materials on the desk - store everything else on a nearby shelf. A flip Pomodoro timer ($18–$28) helps maintain focus sessions.",
  },
  {
    q: "How to organize a small office desk at work?",
    a: "Apply the zone system: active work in the center, one organizer on the side, reference materials above or behind. Add stackable paper trays (inbox/outbox) if your job involves physical documents. Keep personal items to one small area and enforce the one-bin rule for supplies.",
  },
];
