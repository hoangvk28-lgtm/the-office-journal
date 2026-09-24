// ─── Compare: Desk Mat vs Mouse Pad ──────────────────────────────────────────

const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/desk-mat-vs-mouse-pad";

export const compareSlug = "desk-mat-vs-mouse-pad";
export const compareTitle = "Desk Mat vs Mouse Pad: Which One Is Right for Your Setup?";
export const compareDescription =
  "Desk mat vs mouse pad — we compare tracking surface, desk protection, aesthetics, price, and size with 5 picks, plus a decision flowchart for gamers and WFH.";
export const lastUpdated = "2026-06-06";
export const readTime = "10 min";
export const heroImage = `${BASE}/06-desk-mat-vs-mouse-pad-hero.webp`;
export const sapo =
  "Both cover your desk and improve mousing — but that's where the similarity ends. A desk mat protects the full surface and ties the aesthetic together; a mouse pad optimizes tracking for precision work or gaming. At $10–$30, neither is a big commitment, but choosing the wrong one means buying both anyway. Here's how to get it right the first time.";


// ─── Types ────────────────────────────────────────────────────────────────────

export type CompareCategory = "mat" | "pad";

export interface ComparePick {
  rank: number;
  id: string;
  category: CompareCategory;
  name: string;
  badge?: string;
  score: number;
  price: string;
  size: string;
  material: string;
  amazonUrl: string;
  imageUrl: string;
  whyItWorks: string[];
  tradeoffs: string[];
  redditNote?: string;
}

export interface HeadToHead {
  criterion: string;
  winner: CompareCategory | "tie";
  winnerLabel: string;
  summary: string;
  matSummary: string;
  padSummary: string;
}

export interface Scenario {
  title: string;
  pick: CompareCategory;
  pickLabel: string;
  productName: string;
  productId: string;
  price: string;
  detail: string;
  exception?: string;
}

export interface FlowStep {
  question: string;
  yesAnswer: CompareCategory | null;
  yesLabel: string;
  noLabel: string;
  terminal?: boolean;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export const picks: ComparePick[] = [
  {
    rank: 1,
    id: "k-knodel-large-desk-mat",
    category: "mat",
    name: "K KNODEL Large Desk Mat (31.5 × 15.7 in)",
    badge: "Best Overall Desk Mat",
    score: 9.1,
    price: "$22–$30",
    size: "31.5 × 15.7 in",
    material: "PU leather top, non-slip rubber base",
    amazonUrl: `https://www.amazon.com/dp/B07D6559YM?tag=theofficejournal-20`,
    imageUrl: `${BASE}/01-k-knodel-large-desk-mat.webp`,
    whyItWorks: [
      "Covers the full desk surface — protects from scratches and spills",
      "Smooth PU leather top works well with optical mice",
      "Non-slip rubber base stays in place without adhesive",
      "Wipes clean in seconds — spill-resistant surface",
    ],
    tradeoffs: [
      "PU leather can feel warm in summer",
      "Edges may curl if stored rolled for a long time",
    ],
    redditNote:
      "Frequently recommended in r/battlestations for budget desk protection. Popular with people who want a clean, minimal desk aesthetic.",
  },
  {
    rank: 2,
    id: "aothia-leather-desk-pad",
    category: "mat",
    name: "Aothia Dual-Sided Leather Desk Pad",
    score: 8.6,
    price: "$18–$25",
    size: "31.5 × 15.7 in",
    material: "PU leather / felt dual-sided",
    amazonUrl: `https://www.amazon.com/dp/B091F3Y53V?tag=theofficejournal-20`,
    imageUrl: `${BASE}/02-aothia-leather-desk-pad.webp`,
    whyItWorks: [
      "Dual-sided: PU leather for smooth mousing, felt for a softer look",
      "Felt side protects surface better from impact",
      "Budget price at $18–$25",
      "Available in multiple colors to match desk setups",
    ],
    tradeoffs: [
      "Thinner than single-sided mats — less padding",
      "Felt side attracts dust and lint",
    ],
  },
  {
    rank: 3,
    id: "dawntrees-felt-desk-mat",
    category: "mat",
    name: "DAWNTREES Felt Desk Mat (35.4 × 17.3 in)",
    score: 8.8,
    price: "$20–$28",
    size: "35.4 × 17.3 in",
    material: "Premium wool felt",
    amazonUrl: `https://www.amazon.com/dp/B09MVT9Y98?tag=theofficejournal-20`,
    imageUrl: `${BASE}/03-dawntrees-felt-desk-mat.webp`,
    whyItWorks: [
      "Wool felt has a premium, textured look that elevates minimalist setups",
      "Largest coverage at 35.4 × 17.3 in — fits wide desks",
      "Soft surface muffles keyboard noise",
      "Natural material stays cool even in warm climates",
    ],
    tradeoffs: [
      "Felt surface is less smooth for gaming mice at high DPI",
      "Harder to clean spills vs PU leather",
    ],
  },
  {
    rank: 4,
    id: "logitech-studio-mouse-pad",
    category: "pad",
    name: "Logitech Studio Series Mouse Pad",
    badge: "Best Premium Mouse Pad",
    score: 8.9,
    price: "$10–$18",
    size: "11.6 × 9.1 in standard",
    material: "Consistent textile top, rubber base",
    amazonUrl: `https://www.amazon.com/dp/B09DV56338?tag=theofficejournal-20`,
    imageUrl: `${BASE}/04-logitech-studio-series-mouse-pad.webp`,
    whyItWorks: [
      "Consistent surface texture works with all optical and laser mice",
      "Stitched edges prevent fraying after months of use",
      "Premium feel at a $10–$18 price",
      "Matches Logitech's Studio Series keyboard and mouse aesthetics",
    ],
    tradeoffs: [
      "Standard size only — doesn't cover the full desk",
      "Not waterproof — spills seep through",
    ],
  },
  {
    rank: 5,
    id: "ktrio-extended-gaming-pad",
    category: "pad",
    name: "Ktrio Extended Gaming Mouse Pad (35.4 × 15.7 in)",
    score: 8.7,
    price: "$14–$19",
    size: "35.4 × 15.7 in XL",
    material: "Micro-weave cloth, rubber base",
    amazonUrl: `https://www.amazon.com/dp/B0819ZNG4H?tag=theofficejournal-20`,
    imageUrl: `${BASE}/05-ktrio-extended-gaming-mouse-pad.webp`,
    whyItWorks: [
      "XL size covers keyboard and mouse zone completely",
      "Micro-weave cloth optimized for fast mouse movements and precision",
      "Thick 3mm base absorbs desk vibration",
      "Best value for gaming use at $14–$19",
    ],
    tradeoffs: [
      "Gaming aesthetic (dark color, logo) — not ideal for minimalist setups",
      "Cloth surface absorbs spills — needs careful maintenance",
    ],
    redditNote:
      "Consistent top pick in r/MouseReview for budget extended pads. Praised for surface speed and durability.",
  },
];

// ─── Head-to-head criteria ─────────────────────────────────────────────────────

export const headToHead: HeadToHead[] = [
  {
    criterion: "Desk Coverage",
    winner: "mat",
    winnerLabel: "Desk Mat wins",
    summary:
      "Desk mats cover the entire desk surface (30–35+ inches wide). Mouse pads cover only the mouse zone. For full desk protection and a cohesive look, mats win.",
    matSummary: "Full desk coverage. Keyboard, mouse, and accessories on one surface.",
    padSummary: "Mouse zone only. Rest of desk is unprotected.",
  },
  {
    criterion: "Mouse Tracking",
    winner: "pad",
    winnerLabel: "Mouse Pad wins",
    summary:
      "Dedicated mouse pads — especially gaming-optimized cloth pads — have more consistent surface textures that improve tracking precision. Desk mats are functional but not optimized for precision gaming.",
    matSummary: "Functional for everyday use. Not ideal for high-DPI competitive gaming.",
    padSummary: "Optimized surface texture. Consistent glide and precision for gaming.",
  },
  {
    criterion: "Desk Protection",
    winner: "mat",
    winnerLabel: "Desk Mat wins",
    summary:
      "Mats protect the entire desk surface from scratches, spills, and wear. Mouse pads leave the rest of the desk exposed. For wooden or expensive desks, a mat is the smarter protection layer.",
    matSummary: "Full-desk scratch and spill protection. PU leather options are waterproof.",
    padSummary: "Protects only the mouse zone. Rest of desk takes wear normally.",
  },
  {
    criterion: "Aesthetics",
    winner: "mat",
    winnerLabel: "Desk Mat wins",
    summary:
      "A desk mat unifies the desk surface visually — all accessories sit on the same material. Mouse pads look good on their own but create a visual inconsistency with the rest of the desk.",
    matSummary: "Unified desk look. Available in leather, felt, and fabric to match any setup.",
    padSummary: "Good standalone look, but breaks the visual flow of the full desk.",
  },
  {
    criterion: "Price",
    winner: "pad",
    winnerLabel: "Mouse Pad wins",
    summary:
      "Mouse pads start at $10 and a quality pick costs $10–$19. Desk mats start at $18 and a quality mat runs $20–$30. Both are affordable, but pads are cheaper per dollar of value.",
    matSummary: "$18–$30 for a quality mat. Still affordable.",
    padSummary: "$10–$19 for an excellent pad. Lowest entry cost.",
  },
  {
    criterion: "Cleaning",
    winner: "mat",
    winnerLabel: "Desk Mat wins",
    summary:
      "PU leather desk mats wipe clean with a damp cloth in seconds. Cloth mouse pads absorb spills and require hand washing. For coffee-prone desks, mats win on maintenance.",
    matSummary: "PU leather: wipe clean instantly. Felt: harder to clean.",
    padSummary: "Cloth pads absorb spills and need washing. Longer drying time.",
  },
];

// ─── Decision flowchart steps ─────────────────────────────────────────────────

export const flowSteps: FlowStep[] = [
  {
    question: "Do you play games competitively where mouse precision matters?",
    yesAnswer: "pad",
    yesLabel: "Yes, competitive gaming",
    noLabel: "No, casual or work use",
  },
  {
    question: "Do you want to protect the full surface of your desk from scratches?",
    yesAnswer: "mat",
    yesLabel: "Yes, full desk protection",
    noLabel: "No, just the mouse area",
  },
  {
    question: "Is your desk aesthetic important to you (minimalist, unified look)?",
    yesAnswer: "mat",
    yesLabel: "Yes, aesthetics matter",
    noLabel: "No, functional is fine",
  },
  {
    question: "Is your budget under $15?",
    yesAnswer: "pad",
    yesLabel: "Yes",
    noLabel: "No, $20+ is fine",
  },
  {
    question: "Do you frequently spill coffee or drinks on your desk?",
    yesAnswer: "mat",
    yesLabel: "Yes, spill-prone",
    noLabel: "No, careful at desk",
  },
  {
    question: "Do you primarily need better mouse tracking for work (spreadsheets, design)?",
    yesAnswer: "pad",
    yesLabel: "Yes, precision work",
    noLabel: "No, general desk use",
    terminal: true,
  },
];

// ─── Scenarios ─────────────────────────────────────────────────────────────────

export const scenarios: Scenario[] = [
  {
    title: "Minimalist / Aesthetic Setup",
    pick: "mat",
    pickLabel: "Desk Mat",
    productName: "DAWNTREES Felt Desk Mat",
    productId: "dawntrees-felt-desk-mat",
    price: "$20–$28",
    detail:
      "The wool felt surface has a premium, textured look that elevates any minimal setup. Large 35.4-inch coverage unifies keyboard, mouse, and accessories on one cohesive surface.",
  },
  {
    title: "Gaming / High-Precision Mouse Use",
    pick: "pad",
    pickLabel: "Mouse Pad",
    productName: "Ktrio Extended Gaming Pad",
    productId: "ktrio-extended-gaming-pad",
    price: "$14–$19",
    detail:
      "Micro-weave cloth, 3mm thick base, and an XL surface that fits keyboard and mouse — the right tool for competitive tracking at a price that leaves no reason to compromise.",
  },
  {
    title: "WFH / Small Desk (Under 36 in)",
    pick: "mat",
    pickLabel: "Desk Mat",
    productName: "K KNODEL Large Desk Mat",
    productId: "k-knodel-large-desk-mat",
    price: "$22–$30",
    detail:
      "PU leather surface works well with all mice, wipes clean from coffee spills, and looks professional on camera during video calls. Best all-round desk mat for home offices.",
  },
  {
    title: "Budget / First Desk Setup",
    pick: "pad",
    pickLabel: "Mouse Pad",
    productName: "Logitech Studio Series Mouse Pad",
    productId: "logitech-studio-mouse-pad",
    price: "$10–$18",
    detail:
      "At $10–$18, the Logitech Studio Series gives you stitched edges, consistent tracking, and a quality feel that justifies the cost over a $5 no-name pad. Simple and reliable.",
  },
];

// ─── Common mistakes ──────────────────────────────────────────────────────────

export const mistakes = [
  {
    title: "Buying a thin desk mat that curls at the edges",
    body: "Ultra-thin mats (under 1.5mm) curl after a few weeks, especially at corners. Look for mats with a thick rubber base (2mm+) and stitched or rolled edges. The K KNODEL and DAWNTREES mats both avoid this issue.",
  },
  {
    title: "Using a cloth pad without a waterproof layer on a coffee desk",
    body: "Cloth mouse pads absorb spills and develop odors if not dried promptly. If you regularly have drinks at your desk, a PU leather desk mat that wipes clean is a more practical choice.",
  },
  {
    title: "Buying an XL gaming pad for a small desk",
    body: "A 35-inch extended pad on a 30-inch desk will overhang the edge and bunch up. Measure your desk first and buy a pad that leaves 2–3 inches on each side.",
  },
  {
    title: "Assuming a desk mat replaces a proper mouse pad for gaming",
    body: "Leather desk mats have inconsistent texture — fine for work mice at 800–1600 DPI, but at 3200+ DPI used in competitive gaming, dedicated gaming cloth pads track more accurately. Use a gaming pad on top of the mat if you need both desk protection and precision.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is the difference between a desk mat and a mouse pad?",
    a: "A desk mat covers the full desk surface (30–35+ inches wide) to protect the desk and unify the aesthetic. A mouse pad covers only the mouse zone and is optimized for tracking performance. Desk mats are better for desk protection and aesthetics; mouse pads are better for precision and gaming.",
  },
  {
    q: "Is a desk mat worth it?",
    a: "Yes, especially for desks that cost $100+. A $20–$30 desk mat protects the entire surface from scratches, heat, and spills, and makes the desk look significantly cleaner. For wooden desks, it's particularly worth it. For pure mouse tracking, a dedicated mouse pad still wins on surface consistency.",
  },
  {
    q: "Can I use a desk mat as a mouse pad?",
    a: "Yes — most desk mats work fine as mouse surfaces for everyday computing. For casual use, work tasks, and gaming at 800–1600 DPI, a PU leather or felt mat is fully adequate. For competitive gaming at 3200+ DPI, a dedicated cloth gaming pad offers more consistent tracking.",
  },
  {
    q: "What size desk mat should I get?",
    a: "Measure your desk and subtract 3–4 inches from each side for the mat. A 40-inch desk works well with a 31–35-inch mat. Make sure the mat doesn't overhang the front edge — it should sit flush with room for your wrists to rest naturally.",
  },
  {
    q: "How do you clean a desk mat?",
    a: "PU leather mats: wipe with a damp cloth. For stains, a drop of mild dish soap on a microfiber cloth works well. Felt mats: use a lint roller for dust; spot-clean with a damp cloth for spills and let air-dry. Cloth mouse pads: hand wash with mild soap and cold water, then air-dry flat.",
  },
  {
    q: "Are extended mouse pads the same as desk mats?",
    a: "They overlap but are not identical. Extended mouse pads (like the Ktrio XL) are cloth-based and optimized for mouse tracking — they cover the keyboard and mouse zone but are typically thinner and gaming-focused. Desk mats are usually PU leather or felt, thicker, and focused on desk protection and aesthetics over tracking performance.",
  },
];

// ─── Summary table ─────────────────────────────────────────────────────────────

export const summaryTable = [
  { factor: "Coverage", mat: "Full desk (30–35+ in)", pad: "Mouse zone only" },
  { factor: "Mouse tracking", mat: "Functional for most use", pad: "Optimized for precision" },
  { factor: "Desk protection", mat: "Full surface protection", pad: "Mouse area only" },
  { factor: "Aesthetics", mat: "Unified desk look", pad: "Standalone piece" },
  { factor: "Price", mat: "$18–$30", pad: "$10–$19" },
  { factor: "Cleaning", mat: "PU leather: wipe clean", pad: "Cloth: hand wash needed" },
];
