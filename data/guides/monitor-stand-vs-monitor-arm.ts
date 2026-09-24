// ─── Compare: Monitor Stand vs Monitor Arm ───────────────────────────────────

export const compareSlug = "monitor-stand-vs-monitor-arm";
export const compareTitle = "Monitor Stand vs Monitor Arm: Which Is Worth It Under $50?";
export const compareDescription =
  "Monitor stand vs monitor arm — we compare adjustability, desk space, stability, and value with picks under $50, plus a decision flowchart and scoring.";
export const lastUpdated = "2026-05-27";
export const readTime = "14 min";
export const heroImageA =
  "https://m.media-amazon.com/images/I/71TJOGfSKhL._AC_SL1500_.jpg";
export const heroImageB =
  "https://m.media-amazon.com/images/I/61s2OB8mVjL._AC_SL1500_.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CompareCategory = "stand" | "arm";

export interface ComparePick {
  rank: number;
  id: string;
  category: CompareCategory;
  name: string;
  badge?: string;
  score: number;
  price: string;
  weightLimit: string;
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
  standSummary: string;
  armSummary: string;
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
    id: "bamboo-riser-drawer",
    category: "stand",
    name: "Bamboo Monitor Riser with Drawer",
    badge: "Best Overall Stand",
    score: 9.2,
    price: "$35–$45",
    weightLimit: "50 lbs",
    adjustability: "Fixed height (4.5 in)",
    amazonUrl: "https://amzn.to/4vebguA",
    imageUrl: "https://m.media-amazon.com/images/I/71TJOGfSKhL._AC_SL1500_.jpg",
    whyItWorks: [
      "Pull-out drawer adds hidden storage without extra footprint",
      "Bamboo finish looks premium — works with most desk aesthetics",
      "Supports up to 50 lbs (any monitor size)",
      "Fits desks 36 inches and wider",
    ],
    tradeoffs: [
      "Fixed 4.5-inch height — can't adjust",
      "Drawer is shallow (1.5 inches deep)",
    ],
  },
  {
    rank: 2,
    id: "adjustable-4-level-riser",
    category: "stand",
    name: "Adjustable Height Desktop Riser (4-Level)",
    score: 8.6,
    price: "$18–$28",
    weightLimit: "44 lbs",
    adjustability: "4 height levels (3–6 in)",
    amazonUrl: "https://amzn.to/4nV8sAh",
    imageUrl: "https://m.media-amazon.com/images/I/61ovYckyZEL._AC_SL1500_.jpg",
    whyItWorks: [
      "Four stackable height levels — experiment without committing",
      "Metal construction at a plastic price",
      "Under $25 — cheapest functional option",
    ],
    tradeoffs: [
      "No storage drawer",
      "Adjusting height requires lifting the monitor off",
      "Basic aesthetics",
    ],
  },
  {
    rank: 3,
    id: "usbc-hub-stand",
    category: "stand",
    name: "USB-C Monitor Stand with Charging Hub",
    score: 8.4,
    price: "$40–$50",
    weightLimit: "40 lbs",
    adjustability: "Fixed height",
    amazonUrl: "https://amzn.to/4tZwfjG",
    imageUrl: "https://m.media-amazon.com/images/I/613M-TAsyoL._AC_SL1500_.jpg",
    whyItWorks: [
      "Built-in USB hub (2x USB-A + 1x USB-C) saves buying separately",
      "Charges phone while elevating monitor",
      "Cables route cleanly through the stand",
    ],
    tradeoffs: [
      "At the top of the $50 budget",
      "USB hub quality varies — check reviews before buying",
      "Fixed height only",
    ],
  },
  {
    rank: 4,
    id: "vivo-v001-arm",
    category: "arm",
    name: "VIVO Single Monitor Arm (STAND-V001)",
    badge: "Best Budget Arm",
    score: 8.9,
    price: "$30–$38",
    weightLimit: "22 lbs",
    adjustability: "Full range (height, tilt, swivel, rotate)",
    amazonUrl: "https://amzn.to/49nrnxI",
    imageUrl: "https://m.media-amazon.com/images/I/61s2OB8mVjL._AC_SL1500_.jpg",
    whyItWorks: [
      "Full adjustment range: height, tilt, swivel, rotation",
      "Supports 75x75 and 100x100 VESA",
      "C-clamp fits desks 0.4–3.5 inches thick",
      "Cable management clips included",
    ],
    tradeoffs: [
      "Some wobble with heavier monitors (20+ lbs)",
      "Tension adjustment requires Allen key",
      "No gas spring — manual positioning only",
    ],
    redditNote:
      "Most recommended arm in r/StandingDesk and r/battlestations under $50. Multiple users report 3+ years of reliable use.",
  },
  {
    rank: 5,
    id: "huanuo-gas-spring",
    category: "arm",
    name: "HUANUO Single Monitor Arm (Gas Spring)",
    score: 8.7,
    price: "$35–$45",
    weightLimit: "17.6 lbs",
    adjustability: "Full range + gas spring",
    amazonUrl: "https://www.amazon.com/s?k=huanuo+single+monitor+arm+gas+spring&tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/61k4fefKv1L._AC_UY218_.jpg",
    whyItWorks: [
      "Gas spring: adjust height with one hand",
      "Smoother movement than friction-based arms",
      "Built-in cable management channel",
      "Full range: height, tilt, swivel, rotate",
    ],
    tradeoffs: [
      "Lower weight limit (17.6 lbs vs. VIVO's 22 lbs)",
      "Gas spring can lose tension after 2–3 years",
      "Slightly more expensive than VIVO",
    ],
  },
  {
    rank: 6,
    id: "ergear-heavy-duty",
    category: "arm",
    name: "ErGear Single Monitor Arm (Heavy Duty)",
    score: 8.5,
    price: "$40–$50",
    weightLimit: "26.4 lbs",
    adjustability: "Full range + gas spring",
    amazonUrl: "https://amzn.to/3PH8FdJ",
    imageUrl: "https://m.media-amazon.com/images/I/51l46uDoPbL._AC_SL1500_.jpg",
    whyItWorks: [
      "Highest weight capacity under $50 (26.4 lbs)",
      "Handles ultrawide monitors (34–35 inch)",
      "Gas spring for smooth adjustment",
      "Sturdy steel construction",
    ],
    tradeoffs: [
      "At the $50 ceiling — overkill for standard 24–27 in monitors",
      "Bulkier arm (less minimalist look)",
      "Heavier clamp — needs a sturdy desk edge",
    ],
  },
];

export const dualArmPick = {
  name: "VIVO Dual Monitor Arm",
  price: "$35–$45",
  amazonUrl: "https://amzn.to/4tZtsak",
  imageUrl: "https://m.media-amazon.com/images/I/71MzRgGoXUL._AC_SL1500_.jpg",
};

// ─── Head-to-head criteria ─────────────────────────────────────────────────────

export const headToHead: HeadToHead[] = [
  {
    criterion: "Desk Space",
    winner: "arm",
    winnerLabel: "Monitor Arm wins",
    summary:
      "A typical monitor stand occupies 20x9 inches of desk surface. A monitor arm's clamp takes 3x3 inches at the desk edge — the monitor floats above, leaving the entire surface clear.",
    standSummary: "180 sq in footprint. Gains storage underneath, but occupies the surface.",
    armSummary: "9 sq in clamp. Entire monitor zone reclaimed — transformative on small desks.",
  },
  {
    criterion: "Adjustability",
    winner: "arm",
    winnerLabel: "Monitor Arm wins",
    summary:
      "Stands offer 1–4 fixed height levels. Arms adjust continuously across five axes: height, depth, tilt, swivel, and portrait rotation.",
    standSummary: "1–4 fixed height levels only. No depth, tilt, or rotation.",
    armSummary: "Height, depth, tilt, swivel, rotation — fully independent adjustment.",
  },
  {
    criterion: "Stability",
    winner: "stand",
    winnerLabel: "Monitor Stand wins",
    summary:
      "Stands sit on the desk — gravity does the work. Arms introduce variables: desk material, edge thickness, monitor weight. Budget arms can wobble.",
    standSummary: "Rock-solid on any desk. No installation variables.",
    armSummary: "Stable when properly installed, but desk quality and monitor weight matter.",
  },
  {
    criterion: "Ergonomics",
    winner: "arm",
    winnerLabel: "Monitor Arm wins",
    summary:
      "Arms nail all three ergonomic axes: height, depth, and tilt. Stands get height right but can't adjust depth or tilt independently.",
    standSummary: "Height only. Depth and tilt are fixed wherever the stand sits.",
    armSummary: "Height + depth + tilt — full ergonomic positioning. Recommended by ergonomists.",
  },
  {
    criterion: "Setup Difficulty",
    winner: "stand",
    winnerLabel: "Monitor Stand wins",
    summary:
      "Stands take 2 minutes — unbox, place, done. Arms require VESA check, clamp install, stand removal, VESA plate mounting: 15–20 minutes.",
    standSummary: "2 minutes. No tools, no VESA check needed.",
    armSummary: "15–20 minutes. VESA compatibility required. Tools needed.",
  },
  {
    criterion: "Price / Value",
    winner: "stand",
    winnerLabel: "Monitor Stand wins",
    summary:
      "Stands are solid across the entire $15–$50 range. Arms under $25 have noticeable quality drop. Sweet spot for arms is $30–$45.",
    standSummary: "Excellent quality from $15. No budget floor.",
    armSummary: "Quality drops noticeably below $28. Budget $30–$45 for a reliable arm.",
  },
];

// ─── Decision flowchart steps ─────────────────────────────────────────────────

export const flowSteps: FlowStep[] = [
  {
    question: "Is your monitor VESA compatible?",
    yesAnswer: null,
    yesLabel: "Yes, has 4 mounting holes",
    noLabel: "No VESA holes",
  },
  {
    question: "Is your desk glass, thin particle board, or has beveled edges?",
    yesAnswer: "stand",
    yesLabel: "Yes",
    noLabel: "No, solid desk",
  },
  {
    question: "Do you use a standing desk (sit-stand)?",
    yesAnswer: "arm",
    yesLabel: "Yes",
    noLabel: "No",
  },
  {
    question: "Is your desk under 40 inches wide?",
    yesAnswer: "arm",
    yesLabel: "Yes",
    noLabel: "No",
  },
  {
    question: "Do you have neck or eye strain from your current monitor position?",
    yesAnswer: "arm",
    yesLabel: "Yes",
    noLabel: "No",
  },
  {
    question: "Do you just need the monitor a few inches higher?",
    yesAnswer: "stand",
    yesLabel: "Yes",
    noLabel: "No",
  },
  {
    question: "Do you want portrait mode (vertical rotation)?",
    yesAnswer: "arm",
    yesLabel: "Yes",
    noLabel: "Either works — pick based on budget",
    terminal: true,
  },
];

// ─── Scenarios ─────────────────────────────────────────────────────────────────

export const scenarios: Scenario[] = [
  {
    title: "Gaming Setup",
    pick: "arm",
    pickLabel: "Monitor Arm",
    productName: "VIVO V001",
    productId: "vivo-v001-arm",
    price: "$30–$38",
    detail:
      "Pull the screen closer during intense sessions, push it back for casual use. Portrait rotation on a secondary monitor is ideal for Discord or chat apps.",
    exception:
      "Heavy 34-inch ultrawide (20+ lbs)? Upgrade to ErGear Heavy Duty to avoid drooping.",
  },
  {
    title: "Home Office / Remote Work (desk under 48 in)",
    pick: "arm",
    pickLabel: "Monitor Arm",
    productName: "HUANUO Gas Spring",
    productId: "huanuo-gas-spring",
    price: "$35–$45",
    detail:
      "Gas spring lets you adjust height quickly when switching postures. Small desks benefit most from the reclaimed surface space.",
  },
  {
    title: "Home Office / Remote Work (desk over 48 in)",
    pick: "stand",
    pickLabel: "Monitor Stand",
    productName: "Bamboo Riser with Drawer",
    productId: "bamboo-riser-drawer",
    price: "$35–$45",
    detail:
      "More desk space means the stand's footprint isn't a constraint. The drawer adds storage and the bamboo finish looks clean in a professional home office.",
  },
  {
    title: "Standing Desk",
    pick: "arm",
    pickLabel: "Monitor Arm",
    productName: "HUANUO Gas Spring",
    productId: "huanuo-gas-spring",
    price: "$35–$45",
    detail:
      "A fixed stand can't compensate for 12–18 inches of height change. The gas spring mechanism adjusts with one hand — seamless sit-stand transitions.",
  },
];

// ─── Common mistakes ──────────────────────────────────────────────────────────

export const mistakes = [
  {
    title: "Buying an arm for a non-VESA monitor",
    body: "Check the back of your monitor first. If there are no four-hole mounting points (75x75mm or 100x100mm), an arm won't attach without a separate VESA adapter ($10–$20). Budget monitors and all-in-ones like iMacs often need adapters.",
  },
  {
    title: "Clamping an arm to a weak desk",
    body: "Particle board desks (common IKEA models like LINNMON) can crack under arm clamp pressure with heavy monitors. If your desk feels flimsy, reinforce the clamp point with a steel plate ($5–$10) or use a stand instead.",
  },
  {
    title: "Forgetting cable length",
    body: "Monitor arms position the screen further from the desk edge. Your existing HDMI or DisplayPort cable may be too short. Budget for a 6-foot cable ($8–$12) when buying an arm.",
  },
  {
    title: "Over-spending on a stand",
    body: "The difference between a $20 stand and a $45 stand is usually storage drawers and USB ports — not monitor support quality. If you just need height, the $20 adjustable riser works fine.",
  },
  {
    title: "Ignoring monitor weight",
    body: "Every arm has a weight limit. A 27-inch monitor typically weighs 10–15 lbs. A 32-inch ultrawide can weigh 18–22 lbs. If your monitor exceeds the arm's limit, it will droop over time.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "Is a monitor arm worth it?",
    a: "For most users spending 6+ hours daily at a desk, yes. The ergonomic benefits (proper height, depth, and tilt) reduce neck and eye strain that compounds over months. At $30–$45 for a budget arm, the cost is comparable to a decent keyboard — and the health impact is arguably larger. For casual users or those with large desks, a stand is perfectly fine.",
  },
  {
    q: "Do monitor arms work with any monitor?",
    a: "Only monitors with VESA mounting holes (75x75mm or 100x100mm). Most monitors 24 inches and above have VESA holes, but check the back of your monitor or its spec sheet to confirm. Monitors without VESA holes need an adapter or are limited to stands.",
  },
  {
    q: "Are monitor arms worth it for gaming?",
    a: "Yes, particularly if you play competitive games where pulling the monitor closer helps reaction time, or if you use a secondary monitor in portrait mode for chat/streaming. The VIVO V001 ($32) is the most popular gaming arm under $50.",
  },
  {
    q: "Can I use a monitor arm with a glass desk?",
    a: "Not with a standard clamp — the clamp pressure can crack glass. Use a freestanding monitor arm (sits on the desk with a weighted base) or a grommet mount (bolts through a hole in the desk). Both options cost $40–$60 and are less common at the budget end.",
  },
  {
    q: "Do I need a monitor arm for a standing desk?",
    a: "Strongly recommended. A fixed stand can't adjust when you switch between sitting and standing — your monitor will be at the wrong height for one position. A gas spring arm ($35–$45) adjusts with one hand, making the transition seamless.",
  },
  {
    q: "Monitor arm vs monitor stand for dual monitors?",
    a: "Arms win decisively for dual setups. Two stands consume roughly 400 square inches of desk space. A dual arm uses one 9-square-inch clamp point. At $35–$45 for a budget dual arm, it's also cost-competitive with buying two separate stands.",
  },
  {
    q: "What's the best monitor arm under $50?",
    a: "The VIVO V001 ($30–$38) is the most recommended budget arm across Reddit, YouTube, and buyer reviews. It supports monitors up to 32 inches (22 lbs), has full adjustment range, and includes cable management clips. For gas spring convenience, the HUANUO ($35–$45) is the upgrade pick.",
  },
];

// ─── Summary scores ───────────────────────────────────────────────────────────

export const summaryTable = [
  { factor: "Price (budget)", stand: "$15–$35", arm: "$25–$50" },
  { factor: "Desk space reclaimed", stand: "Some (storage below)", arm: "Maximum (floats)" },
  { factor: "Adjustability", stand: "Height only", arm: "Height, depth, tilt, swivel, rotate" },
  { factor: "Setup time", stand: "2 minutes", arm: "15–20 minutes" },
  { factor: "Stability", stand: "Excellent", arm: "Good (install-dependent)" },
  { factor: "Best for", stand: "Height + storage", arm: "Ergonomics + space saving" },
];
