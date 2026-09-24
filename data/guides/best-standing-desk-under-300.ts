const BASE = "/guides/best-standing-desk-under-300";

export const guideSlug = "best-standing-desk-under-300";
export const guideTitle =
  "7 Best Standing Desks Under $300 in 2026: Dual Motor, Compact, and Small Apartment Picks";
export const metaTitle = "7 Best Standing Desks Under $300 in 2026";
export const metaDescription =
  "Best standing desks under $300: FlexiSpot EN1, VIVO 55x24, Fezibo dual motor, Vari Essential (5-yr warranty). 7 picks for home office and dorm setups.";
export const lastUpdated = "2026-06-20";
export const readTime = "13 min";
export const heroImage = `${BASE}/best-standing-desk-under-300-hero.webp`;

export interface StandingDesk300 {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  motor: string;
  heightRange: string;
  capacity: string;
  desktopSize: string;
  presets: string;
  warranty: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: StandingDesk300[] = [
  {
    id: "flexispot-en1",
    rank: 1,
    badge: "Best Overall",
    name: "FlexiSpot EN1 48x24",
    price: "~$150-$250",
    motor: "Single",
    heightRange: '28.9"-46.5"',
    capacity: "176 lb",
    desktopSize: '48x24" one-piece',
    presets: "4",
    warranty: "2 years",
    imageUrl: `${BASE}/flexispot-en1-48x24-white-maple.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DJ2XKJJT?tag=theofficejournal-20",
    whyItWorks:
      "One-piece seamless laminate top (no center seam), 176 lb capacity, 4 memory presets, anti-collision sensor, FlexiSpot 2-year warranty. Best value-dense desk under $250. Ships in two boxes, assembles in under an hour. Available in multiple frame/top color combinations.",
    tradeoffs: [
      "Single motor - more lateral movement at max height vs dual",
      '46.5" max height - limited for users 6\'1"+',
      "One-piece top cannot be swapped independently",
    ],
    skipIf:
      'You are 6\'1" or taller. The VIVO 55x24 at $230-$270 reaches 48.4" standing height.',
    pros: [
      "One-piece seamless desktop - cleaner look",
      "176 lb capacity",
      "4 memory presets + anti-collision",
      "FlexiSpot brand reliability",
      "Multiple color combinations",
    ],
    cons: [
      "Single motor - wobble at max height",
      '46.5" max height limits taller users',
      "One-piece top not swappable",
    ],
  },
  {
    id: "vivo-electric-55",
    rank: 2,
    badge: "Best Large Surface",
    name: "VIVO Electric 55x24",
    price: "~$230-$270",
    motor: "Single, brushless",
    heightRange: '28.5"-48.4"',
    capacity: "176 lb",
    desktopSize: '55x24"',
    presets: "3",
    warranty: "3 years",
    imageUrl: `${BASE}/vivo-electric-55x24-light-wood-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08RSK243M?tag=theofficejournal-20",
    whyItWorks:
      "Widest desktop in this guide at 55 inches - fits two 24\" monitors side by side with room for keyboard. 48.4\" max height (best in this guide for complete desks) suits users up to 6'2\". 3-year VIVO warranty is the longest in this guide. Anti-collision protection.",
    tradeoffs: [
      "Larger footprint - not ideal for very small rooms",
      "Single motor",
      "3 memory presets vs 4 on FlexiSpot EN1",
      "Light Wood color may show wear faster",
    ],
    skipIf:
      "You have a small room or only need a single monitor. The FlexiSpot EN1 at $150-$250 is the better value for standard setups.",
    pros: [
      '55x24" desktop fits dual monitors',
      '48.4" max height for users up to 6\'2"',
      "3-year warranty - longest for complete desks here",
      "Anti-collision protection",
      "Multiple color options",
    ],
    cons: [
      "Larger footprint",
      "Single motor",
      "3 presets vs 4",
      "Light Wood shows wear faster",
    ],
  },
  {
    id: "fezibo-dual-motor",
    rank: 3,
    badge: "Best Stability",
    name: "Fezibo Dual Motor 48x24",
    price: "~$250-$270",
    motor: "Dual (one per leg)",
    heightRange: '27.3"-45.5"',
    capacity: "154-176 lb",
    desktopSize: '48x24"',
    presets: "4",
    warranty: "1-2 years",
    imageUrl: `${BASE}/fezibo-dual-motor-48x24-white-natural.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08B4M8Z68?tag=theofficejournal-20",
    whyItWorks:
      "Only confirmed dual-motor desk in this guide under $275. Each leg has its own independent motor - eliminates the racking twist that single-motor desks develop over time. Less lateral wobble at full standing height. 27.3\" minimum height suits shorter users. Under 50dB during adjustment.",
    tradeoffs: [
      '45.5" max height - not suitable for users 6\'0"+',
      "Splice-board top (two-piece) - visible center seam",
      "Slightly heavier to move and assemble",
      "1-2 year warranty shorter than EN1 or VIVO",
    ],
    skipIf:
      "You are 6'0\" or taller. The 45.5\" max height cannot reach ergonomic standing position for users above that height.",
    pros: [
      "Dual motor - significantly less wobble at standing height",
      '27.3" min height - good for shorter users',
      "4 memory presets + anti-collision",
      "Under 50dB - quieter than most single-motor options",
      "White/Natural colorway",
    ],
    cons: [
      '45.5" max height - not for users 6\'0"+',
      "Splice-board top with visible seam",
      "Heavier assembly",
      "1-2 year warranty",
    ],
  },
  {
    id: "shw-48-drawer",
    rank: 4,
    badge: "Best Built-In Storage",
    name: 'SHW 48" Electric with Drawer',
    price: "~$200-$240",
    motor: "Single",
    heightRange: '28"-45.3"',
    capacity: "154 lb",
    desktopSize: '48x24" with built-in drawer + cable tray',
    presets: "3",
    warranty: "1 year",
    imageUrl: `${BASE}/shw-48-electric-drawer-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07GVRKCWP?tag=theofficejournal-20",
    whyItWorks:
      "Built-in storage drawer and under-desk cable management tray included at base price - features that cost $20-$40 extra on competing desks. Digital LED display showing exact desk height. Multiple finish options (Oak, Maple, Black, White). Second most affordable complete desk here.",
    tradeoffs: [
      "45.3\" max standing height - restrictive for users 5'10\"+",
      "1-year warranty only",
      "154 lb capacity - lighter than EN1 or VIVO",
    ],
    skipIf:
      "You are over 5'10\". The 45.3\" max height cannot reach ergonomic standing position for taller users.",
    pros: [
      "Built-in drawer + cable management tray included",
      "Digital LED height display",
      "Multiple finish options (Oak, Maple, Black, White)",
      "Among the most affordable here",
    ],
    cons: [
      '45.3" max height - limits users 5\'10"+',
      "1-year warranty",
      "154 lb capacity - lowest here",
    ],
  },
  {
    id: "flexispot-ec1-frame",
    rank: 5,
    badge: "Best Frame for Custom Tops",
    name: "FlexiSpot EC1 Frame Only",
    price: "~$120-$170 (frame only)",
    motor: "Single",
    heightRange: '28.3"-47.6"',
    capacity: "110 lb",
    desktopSize: 'Fits tops 43"-83" wide, 24"-32" deep',
    presets: "2",
    warranty: "2 years",
    imageUrl: `${BASE}/flexispot-ec1-frame-only.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07H8WGW3M?tag=theofficejournal-20",
    whyItWorks:
      "Lowest entry price in this guide (frame only). Fits tops from 43-83 inches wide - maximum flexibility for custom or IKEA surfaces. IKEA LINNMON and KARLBY are popular pairings. 47.6\" max height is second highest in this guide - suits most users up to 6'2\". FlexiSpot 2-year warranty.",
    tradeoffs: [
      "No desktop included - total cost requires adding a top ($40-$150+ depending on choice)",
      "110 lb capacity - lowest in this guide",
      "Only 2 memory presets",
      "Not turnkey - requires selecting and purchasing a compatible top",
    ],
    skipIf:
      "You want a ready-to-use desk. Total cost with IKEA LINNMON ($60) is $180-$230, similar to EN1 but with more effort.",
    pros: [
      'Lowest price in this guide - frame from $120',
      'Fits tops from 43"-83" - maximum size flexibility',
      '47.6" max height - excellent for taller users',
      "IKEA compatible",
      "2-year FlexiSpot warranty",
    ],
    cons: [
      "No desktop included - additional cost required",
      "110 lb capacity - lowest here",
      "Only 2 memory presets",
      "Not ready-to-use",
    ],
  },
  {
    id: "vari-essential",
    rank: 6,
    badge: "Best Build Quality + 5-Year Warranty",
    name: "Vari Essential Electric 48x24",
    price: "~$295-$299",
    motor: "Single, commercial-grade",
    heightRange: '27.5"-47.2"',
    capacity: "150 lb",
    desktopSize: '48x24" Hazel Wood laminate',
    presets: "4",
    warranty: "5 years",
    imageUrl: `${BASE}/vari-essential-48x24-hazel-wood.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09BRF3QFK?tag=theofficejournal-20",
    whyItWorks:
      "5-year warranty (2.5-5x longer than all other desks in this guide). Commercial T-style leg frame - the same used in Vari's office furniture line. Tool-free assembly in 30 minutes. Vari is a standing desk specialist brand. Hazel Wood finish suits warm desk aesthetics.",
    tradeoffs: [
      "Highest price in this guide at $295-$299",
      "150 lb capacity - slightly lower than EN1 or VIVO",
      "Single motor",
      "Two-piece laminate top - visible seam",
    ],
    skipIf:
      "Budget is under $250. The FlexiSpot EN1 provides a one-piece top at lower cost if you do not need the 5-year warranty.",
    pros: [
      "5-year warranty - 2.5-5x longer than all others here",
      "Tool-free assembly in 30 min",
      "Commercial T-style frame",
      "Vari specialist brand support",
      "Hazel Wood finish suits warm aesthetics",
    ],
    cons: [
      "Highest price at $295-$299",
      "150 lb capacity slightly lower",
      "Single motor",
      "Two-piece laminate top",
    ],
  },
  {
    id: "fezibo-double-drawer",
    rank: 7,
    badge: "Best Storage Desk",
    name: "Fezibo 48x24 Double Drawer + Shelf",
    price: "~$250-$280",
    motor: "Single",
    heightRange: '28.4"-45.5"',
    capacity: "176 lb",
    desktopSize: '48x24" with 2 drawers + shelf',
    presets: "3",
    warranty: "1 year",
    imageUrl: `${BASE}/fezibo-48x24-double-drawer-shelf.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08GL98LG3?tag=theofficejournal-20",
    whyItWorks:
      "Two built-in drawers plus an open storage shelf - more storage than any other desk in this guide. For a small apartment where the desk must function as both workstation and storage unit, this eliminates the need for a separate drawer unit. 176 lb capacity handles dual monitor setups.",
    tradeoffs: [
      '45.5" max height - not suitable for users 6\'0"+',
      "Single motor",
      "Heavier and more complex assembly",
      "Rustic Brown is the primary available colorway",
    ],
    skipIf:
      "You do not need extra storage. The FlexiSpot EN1 is lighter, simpler, and has a seamless one-piece top at similar pricing.",
    pros: [
      "2 built-in drawers + open shelf - most storage here",
      "176 lb capacity",
      "Anti-collision sensor",
      "Eliminates need for separate under-desk storage",
      "Replaces desk + drawer unit",
    ],
    cons: [
      '45.5" max height - not for 6\'0"+',
      "Single motor",
      "Heavier assembly",
      "Limited to Rustic Brown colorway",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  motor: string;
  heightRange: string;
  capacity: string;
  price: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  motor: p.motor,
  heightRange: p.heightRange,
  capacity: p.capacity,
  price: p.price,
}));

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Is a single-motor standing desk good enough?",
    a: "For most users with a single-monitor setup under 40 lb, yes. Single-motor desks handle everyday use well. The wobble at maximum height is noticeable but not problematic for a stationary standing work session. If you type aggressively at standing height or use a heavy monitor arm, dual motor is worth the premium.",
  },
  {
    q: "What size standing desk should I get for a small apartment?",
    a: "48x24 inches is the standard recommendation for small apartments and dorm rooms. It fits against most walls without consuming excessive floor space, accommodates a single monitor with peripherals, and is available from every major brand in this price tier.",
  },
  {
    q: "How long does a standing desk last?",
    a: "Budget standing desks with 1-2 year warranties typically last 3-7 years with regular use before motor or controller issues arise. The Vari Essential's 5-year warranty reflects higher build confidence. Commercial-grade frames are designed for 10+ years.",
  },
  {
    q: "Do I need an anti-fatigue mat?",
    a: "Yes for any extended standing use. Standing on a hard floor for 30+ minutes causes significantly more leg and lower back fatigue than standing on a cushioned mat. Budget $20-$40 for a basic mat.",
  },
  {
    q: "Can I pair a standing desk with an IKEA ALEX drawer unit?",
    a: 'Yes - the ALEX drawer unit (depth: 23.2") fits under most 24"-deep standing desks when at sitting height. At standing height the desk rises above the ALEX unit. The FlexiSpot EC1 frame is the most documented option for IKEA pairings.',
  },
];

export const relatedGuides = [
  {
    href: "/guide/best-standing-desk-under-500",
    title: "Best Standing Desk Under $500",
  },
  {
    href: "/guide/best-ergonomic-chair-under-300",
    title: "Best Ergonomic Chair Under $300",
  },
  {
    href: "/guide/best-monitor-under-100",
    title: "Best Monitor Under $100",
  },
  {
    href: "/guide/best-compact-keyboard-under-50",
    title: "Best Compact Keyboard Under $50",
  },
  {
    href: "/guide/ergonomic-desk-setup",
    title: "Ergonomic Desk Setup Guide",
  },
];
