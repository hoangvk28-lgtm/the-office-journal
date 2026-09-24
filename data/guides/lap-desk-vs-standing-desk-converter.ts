// ─── Compare: Lap Desk vs Standing Desk Converter ─────────────────────────────

const BASE = "/images/media/guides/lap-desk-vs-standing-desk-converter";

export const compareSlug = "lap-desk-vs-standing-desk-converter";
export const compareTitle = "Lap Desk vs Standing Desk Converter: Which Solves Your Space Problem?";
export const compareDescription =
  "Lap desk vs standing desk converter — we compare ergonomics, portability, price, and space with 5 picks, plus a flowchart for remote workers and students.";
export const lastUpdated = "2026-06-06";
export const readTime = "11 min";
export const heroImage = `${BASE}/06-lap-desk-vs-standing-desk-converter-hero.webp`;
export const sapo =
  "A lap desk costs $30 and works anywhere — couch, bed, or floor. A standing desk converter costs $80–$150 and lives on a desk permanently. They solve different problems, and picking the wrong one wastes money. Whether you're a student without a dedicated desk or a remote worker logging 8-hour days, this guide tells you exactly which one fits.";


// ─── Types ────────────────────────────────────────────────────────────────────

export type CompareCategory = "lapdesk" | "converter";

export interface ComparePick {
  rank: number;
  id: string;
  category: CompareCategory;
  name: string;
  badge?: string;
  score: number;
  price: string;
  surface: string;
  adjustability: string;
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
  lapSummary: string;
  convSummary: string;
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
    id: "saiji-adjustable-bed-tray",
    category: "lapdesk",
    name: "SAIJI Adjustable Bed Tray Laptop Stand",
    badge: "Best Overall Lap Desk",
    score: 9.0,
    price: "$75–$98",
    surface: "23.6 × 14 in bamboo + metal",
    adjustability: "Height 10–17 in, tilt 0–45°",
    amazonUrl: `https://www.amazon.com/dp/B086WBG56J?tag=theofficejournal-20`,
    imageUrl: `${BASE}/01-saiji-adjustable-bed-tray.webp`,
    whyItWorks: [
      "Independent height and angle adjustment for any posture",
      "Bamboo surface is cool, durable, and stable",
      "Folds flat against a wall for minimal storage footprint",
      "Works on bed, sofa, or floor — truly versatile",
    ],
    tradeoffs: [
      "At the top of the lap desk price range",
      "Legs can wobble on very soft mattresses",
    ],
  },
  {
    rank: 2,
    id: "lapgear-home-office-pro",
    category: "lapdesk",
    name: "LapGear Home Office Pro Lap Desk",
    score: 8.6,
    price: "$28–$40",
    surface: "19.5 × 14.5 in with wrist rest",
    adjustability: "Fixed angle, 5 color options",
    amazonUrl: `https://www.amazon.com/dp/B07N9L5934?tag=theofficejournal-20`,
    imageUrl: `${BASE}/02-lapgear-home-office-pro.webp`,
    whyItWorks: [
      "Built-in wrist rest reduces fatigue during long typing sessions",
      "Phone holder frees up desk space",
      "Lightweight at 2.1 lbs — easy to carry room to room",
      "Affordable at under $40",
    ],
    tradeoffs: [
      "Fixed flat angle — no height or tilt adjustment",
      "Phone holder is plastic and can wobble",
    ],
    redditNote:
      "Top recommendation in r/RemoteWork for couch workers who need a budget lap desk. Praised for the wrist rest at the price.",
  },
  {
    rank: 3,
    id: "nnewvante-bamboo-lap-desk",
    category: "lapdesk",
    name: "Nnewvante Bamboo Lap Desk with USB Fan",
    score: 8.7,
    price: "$45–$55",
    surface: "23.6 × 13 in bamboo",
    adjustability: "Tilt 0–25°, built-in USB fan",
    amazonUrl: `https://www.amazon.com/dp/B01MAUGLDO?tag=theofficejournal-20`,
    imageUrl: `${BASE}/03-nnewvante-bamboo-lap-desk.webp`,
    whyItWorks: [
      "Built-in USB cooling fan prevents laptop overheating during extended sessions",
      "Bamboo surface dissipates heat better than plastic",
      "Tilt adjustment for comfortable typing angle",
      "Large surface fits 15-inch laptops with room for a mouse",
    ],
    tradeoffs: [
      "No height adjustment — fixed leg height",
      "USB fan adds a cable to manage",
    ],
  },
  {
    rank: 4,
    id: "vivo-32-desk-converter",
    category: "converter",
    name: "VIVO 32\" Standing Desk Converter",
    badge: "Best Overall Converter",
    score: 9.1,
    price: "$120–$150",
    surface: "32 × 15.7 in with lower keyboard tray",
    adjustability: "Height 4.7–19.7 in, pneumatic spring",
    amazonUrl: `https://www.amazon.com/dp/B075JYG2TB?tag=theofficejournal-20`,
    imageUrl: `${BASE}/04-vivo-32-desk-converter.webp`,
    whyItWorks: [
      "Pneumatic spring for smooth one-hand height adjustment",
      "Separate keyboard tray keeps wrists at ergonomic angle while standing",
      "32-inch surface fits dual monitors",
      "Sits on existing desk — no desk replacement needed",
    ],
    tradeoffs: [
      "Takes up permanent desk space when lowered",
      "32-inch width limits use on compact desks (under 40 in)",
      "$120+ investment",
    ],
  },
  {
    rank: 5,
    id: "flexispot-31-converter",
    category: "converter",
    name: "FLEXISPOT 31\" Standing Desk Converter",
    score: 8.7,
    price: "$80–$110",
    surface: "31 × 14 in with keyboard platform",
    adjustability: "Height 4.7–19.7 in, spring-assisted",
    amazonUrl: `https://www.amazon.com/dp/B08JGXPH84?tag=theofficejournal-20`,
    imageUrl: `${BASE}/05-flexispot-31-converter.webp`,
    whyItWorks: [
      "More affordable than VIVO while keeping spring-assisted lift",
      "31-inch surface fits standard single-monitor setups",
      "Separate keyboard tray for ergonomic typing while standing",
      "Sturdy steel frame holds up to 33 lbs",
    ],
    tradeoffs: [
      "Slightly noisier spring mechanism vs VIVO",
      "Less smooth lift action at heavier loads",
    ],
  },
];

// ─── Head-to-head criteria ─────────────────────────────────────────────────────

export const headToHead: HeadToHead[] = [
  {
    criterion: "Portability",
    winner: "lapdesk",
    winnerLabel: "Lap Desk wins",
    summary:
      "Lap desks weigh 2–7 lbs and move room to room in seconds. Converters are 20–35 lbs and stay on the desk permanently — they are not portable devices.",
    lapSummary: "2–7 lbs. Move from bedroom to sofa to balcony effortlessly.",
    convSummary: "20–35 lbs permanent desk fixture. Zero portability.",
  },
  {
    criterion: "Ergonomics",
    winner: "converter",
    winnerLabel: "Desk Converter wins",
    summary:
      "Converters deliver true sit-stand ergonomics: monitor at eye level, keyboard at elbow height, and the ability to alternate postures throughout the day. Lap desks improve couch posture but can't replicate proper desk ergonomics.",
    lapSummary: "Better than hunching on a couch. Still not ideal for 8-hour work sessions.",
    convSummary: "Full sit-stand ergonomics. Reduces back and neck strain over full workdays.",
  },
  {
    criterion: "Price",
    winner: "lapdesk",
    winnerLabel: "Lap Desk wins",
    summary:
      "Lap desks start at $28 and top out at $100. Converters start at $80 and go past $200. If budget is the constraint, a lap desk is the practical choice.",
    lapSummary: "$28–$100 range. Entry-level is genuinely functional.",
    convSummary: "$80–$200+. Budget models sacrifice lift quality.",
  },
  {
    criterion: "Desk Space Required",
    winner: "lapdesk",
    winnerLabel: "Lap Desk wins",
    summary:
      "Lap desks require zero desk space — they're used on your lap or floor. Converters sit permanently on your desk and occupy 31–32 inches of surface, even when lowered.",
    lapSummary: "No desk footprint at all — works without a desk.",
    convSummary: "Permanent 31–32 in footprint. Shrinks your usable desk.",
  },
  {
    criterion: "Standing Work Support",
    winner: "converter",
    winnerLabel: "Desk Converter wins",
    summary:
      "Converters are designed for standing work — raise, type, lower. Lap desks are not usable while standing by design.",
    lapSummary: "Not usable while standing.",
    convSummary: "Purpose-built for sit-stand alternation throughout the workday.",
  },
  {
    criterion: "Stability",
    winner: "converter",
    winnerLabel: "Desk Converter wins",
    summary:
      "Converters are rigidly mounted on a desk — rock solid for typing, external mouse, and multiple monitors. Lap desks shift with body movement.",
    lapSummary: "Can shift on laps or soft surfaces. Not ideal for precise mouse work.",
    convSummary: "Desk-mounted. Completely stable for any input device.",
  },
];

// ─── Decision flowchart steps ─────────────────────────────────────────────────

export const flowSteps: FlowStep[] = [
  {
    question: "Do you want to alternate between sitting and standing during the workday?",
    yesAnswer: "converter",
    yesLabel: "Yes, sit-stand throughout the day",
    noLabel: "No, seated is fine",
  },
  {
    question: "Do you work primarily on a sofa, bed, or floor — not at a desk?",
    yesAnswer: "lapdesk",
    yesLabel: "Yes, away from a desk",
    noLabel: "No, I have a desk",
  },
  {
    question: "Is your desk 40 inches or wider?",
    yesAnswer: null,
    yesLabel: "Yes",
    noLabel: "No, smaller desk",
  },
  {
    question: "Is your budget under $60?",
    yesAnswer: "lapdesk",
    yesLabel: "Yes",
    noLabel: "No, $80+ is fine",
  },
  {
    question: "Do you work 6+ hours daily and have back or neck pain?",
    yesAnswer: "converter",
    yesLabel: "Yes",
    noLabel: "No, shorter sessions",
  },
  {
    question: "Do you need to move your work surface between rooms or locations?",
    yesAnswer: "lapdesk",
    yesLabel: "Yes, I move around",
    noLabel: "No, fixed location",
    terminal: true,
  },
];

// ─── Scenarios ─────────────────────────────────────────────────────────────────

export const scenarios: Scenario[] = [
  {
    title: "Student / Couch Worker",
    pick: "lapdesk",
    pickLabel: "Lap Desk",
    productName: "LapGear Home Office Pro",
    productId: "lapgear-home-office-pro",
    price: "$28–$40",
    detail:
      "The wrist rest and phone holder handle the essentials for 3–4 hour study sessions from a couch or bed. At under $40, it's the lowest-friction improvement to couch computing.",
  },
  {
    title: "Freelancer / Remote Worker (Single Desk)",
    pick: "converter",
    pickLabel: "Desk Converter",
    productName: "VIVO 32\" Desk Converter",
    productId: "vivo-32-desk-converter",
    price: "$120–$150",
    detail:
      "8-hour workdays demand proper ergonomics. The VIVO's pneumatic lift and separate keyboard tray let you switch postures hourly — the most effective intervention against sitting fatigue.",
    exception:
      "Desk under 40 inches? Consider the FLEXISPOT 31\" which fits compact desks better.",
  },
  {
    title: "Shared / Apartment Living",
    pick: "lapdesk",
    pickLabel: "Lap Desk",
    productName: "SAIJI Adjustable Bed Tray",
    productId: "saiji-adjustable-bed-tray",
    price: "$75–$98",
    detail:
      "No dedicated desk? The SAIJI works on any surface — bed, sofa, floor — and folds flat for storage. Height and angle adjustment bring surprising ergonomic quality to non-desk environments.",
  },
  {
    title: "Compact Desk (Under 40 inches)",
    pick: "converter",
    pickLabel: "Desk Converter",
    productName: "FLEXISPOT 31\" Converter",
    productId: "flexispot-31-converter",
    price: "$80–$110",
    detail:
      "At 31 inches wide, the FLEXISPOT fits desks down to 36 inches without overhanging. Brings sit-stand capability to small-desk setups at $80–$110.",
  },
];

// ─── Common mistakes ──────────────────────────────────────────────────────────

export const mistakes = [
  {
    title: "Buying a converter for a desk under 30 inches wide",
    body: "Most converters need 30–32 inches of desk width and 15+ inches of depth to sit stably. Measure your desk before buying. A desk under 30 inches wide cannot safely support a standard converter.",
  },
  {
    title: "Expecting a lap desk to replace ergonomics",
    body: "Lap desks are better than hunching, but they cannot replicate proper monitor height (eye level) or keyboard ergonomics. For 6+ hour workdays, a converter (or a height-adjustable desk) is the appropriate tool.",
  },
  {
    title: "Over-buying a converter for occasional standing",
    body: "If you stand for 30 minutes a day, a $120+ converter is hard to justify. For light use, a simple monitor riser + standing mat achieves similar posture changes at a fraction of the cost.",
  },
  {
    title: "Using a lap desk without a cooling pad on a hot laptop",
    body: "Lap desks reduce airflow under the laptop. For resource-intensive tasks (video editing, gaming), use a lap desk with a built-in cooling fan (like the Nnewvante) or add a USB cooling pad.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "Is a lap desk worth it?",
    a: "Yes, if you regularly work or study on a couch, bed, or without a desk. A lap desk with a wrist rest (like the LapGear Home Office Pro at $28–$40) reduces neck strain and provides a stable typing surface. For 8-hour desk workers, a converter is a better investment.",
  },
  {
    q: "Is a standing desk converter worth buying?",
    a: "For 6+ hour workdays with back or neck pain, yes. Alternating between sitting and standing every 30–60 minutes reduces the health risks of prolonged sitting. A $80–$150 converter is significantly cheaper than replacing a full desk and works on any existing surface.",
  },
  {
    q: "Can a standing desk converter fit on a small desk?",
    a: "Yes — the FLEXISPOT 31\" fits desks as narrow as 36 inches. Measure your desk's width and depth before buying. Most converters need at least 30 in width and 15 in depth.",
  },
  {
    q: "What is the best lap desk for working in bed?",
    a: "The SAIJI Adjustable Bed Tray ($75–$98) is the most versatile — height adjusts 10–17 inches, tilt adjusts 0–45°, and the bamboo surface is stable and heat-resistant. For a budget option, the LapGear Home Office Pro ($28–$40) is the most popular choice.",
  },
  {
    q: "How long do you need to stand each day to benefit?",
    a: "Research suggests alternating sitting and standing every 30–60 minutes is more beneficial than extended standing. Total standing time of 2–4 hours per workday is a reasonable target. A converter that's easy to raise and lower encourages this habit more than one with friction-heavy mechanisms.",
  },
];

// ─── Summary table ─────────────────────────────────────────────────────────────

export const summaryTable = [
  { factor: "Price", lapdesk: "$28–$100", converter: "$80–$200+" },
  { factor: "Portability", lapdesk: "Pocket-portable (2–7 lbs)", converter: "Fixed desk appliance (20–35 lbs)" },
  { factor: "Ergonomics", lapdesk: "Better than nothing", converter: "Full sit-stand ergonomics" },
  { factor: "Standing work", lapdesk: "Not supported", converter: "Purpose-built for it" },
  { factor: "Desk space needed", lapdesk: "None", converter: "31–32 in permanent footprint" },
  { factor: "Best for", lapdesk: "Couch/bed workers, students", converter: "6+ hr desk workers, back pain" },
];
