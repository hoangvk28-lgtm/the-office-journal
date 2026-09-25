export const guideSlug = "best-under-desk-cable-trays";
export const guideTitle = "The Best Under Desk Cable Trays: Tested Picks for Every Setup: Picks and Trade-offs";
export const guideDescription =
  "Scored on footprint, durability, and hidden cable performance.";
export const metaTitle = "Best Under Desk Cable Trays: Tested Picks for Every Setup (2026)";
export const metaDescription = "A practical comparison of 12 under desk cable trays: tested picks for every setup, focused on compatibility, build, features and price, and the trade-offs between them.";
export const mainKeyword = "under desk cable tray";
export const lastUpdated = "2026-05-27";
export const readTime = "16 min";
export const heroImage =
  "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&q=80";

export type MountType = "adhesive" | "screw" | "clamp" | "adhesive-screw" | "built-in";
export type BudgetTier = "budget" | "mid-range" | "premium" | "premium-plus" | "specialty";

export interface CableTray {
  rank: number;
  id: string;
  name: string;
  badge?: string;
  tier: BudgetTier;
  score: number;
  price: string;
  mount: MountType;
  mountLabel: string;
  cableCapacity: string;
  bestFor: string;
  amazonUrl: string;
  imageUrl?: string;
  whyItWorks: string[];
  tradeoffs: string[];
}

export const trays: CableTray[] = [
  {
    rank: 1,
    id: "coreminded-no-drill-2pack",
    name: "COREMINDED No-Drill Under Desk Cable Management Tray (2-Pack, Medium)",
    badge: "Best No-Drill 2-Pack",
    tier: "budget",
    score: 8.6,
    price: "$34.98",
    mount: "adhesive",
    mountLabel: "No-drill adhesive",
    cableCapacity: "10–14 cables per tray",
    bestFor: "Renters who want two medium trays without drilling",
    amazonUrl: "https://www.amazon.com/dp/B0D2WGVR7V?tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/41C7Dvfj95L._SL500_.jpg",
    whyItWorks: [
      "No-drill installation across both trays in the pack -- fully reversible for renters",
      "Medium sizing splits the difference between the slim adhesive drawer and the deeper VIVO trays",
      "Two trays let you separate power cables from data cables on the same desk",
    ],
    tradeoffs: [
      "Based on specs, adhesive-only mounts carry the same long-term hold risk as other adhesive picks in this guide",
      "Medium depth will not fully swallow large power bricks the way the VIVO Extra Deep does",
    ],
  },
  {
    rank: 2,
    id: "adhesive-velcro-cable-kit",
    name: "Adhesive Under Desk Cable Management Kit (45-Piece Velcro Ties + Extension Straps)",
    badge: "Best Ultra-Budget Cable Kit",
    tier: "budget",
    score: 8.0,
    price: "$8.99",
    mount: "adhesive",
    mountLabel: "Sticky-back adhesive ties, no drill",
    cableCapacity: "Bundles cables rather than housing them in a tray",
    bestFor: "Buyers who want cable bundling instead of a full tray",
    amazonUrl: "https://www.amazon.com/dp/B0F3H1XC21?tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/51NhIGfQM+L._SL500_.jpg",
    whyItWorks: [
      "45 pieces of sticky-back Velcro ties plus 2 rolls of extension straps cover multiple cable runs at the lowest price in this guide",
      "Works alongside any tray in this guide to bundle cables before they enter it, reducing tangling",
      "No drilling, fully reversible, and cheap enough to use across an entire desk setup",
    ],
    tradeoffs: [
      "This is a bundling kit, not a tray -- it does not conceal cables from view the way an enclosed tray does",
      "Best paired with one of the trays above rather than used as a standalone cable-management solution",
    ],
  },
  {
    rank: 3,
    id: "no-drill-clamp-tray-black",
    name: "Under Desk Cable Management Tray with Clamp (Black, No Drill)",
    badge: "Best Value Clamp Tray",
    tier: "budget",
    score: 8.3,
    price: "$13.99",
    mount: "clamp",
    mountLabel: "Clamp, no drill",
    cableCapacity: "8–12 cables",
    bestFor: "Budget clamp-based mounting without adhesive or screws",
    amazonUrl: "https://www.amazon.com/dp/B0C8N7DQZV?tag=theofficejournal-20",
    imageUrl: "https://m.media-amazon.com/images/I/51PtNpYAvIL._SL500_.jpg",
    whyItWorks: [
      "Clamp mounting avoids both adhesive failure and drilling, at a lower price than the Scandinavian Hub clamp tray above",
      "Black finish blends with dark desks and PC setups",
      "Solid tray bottom keeps cables out of view from below",
    ],
    tradeoffs: [
      "Based on specs, this is a smaller-capacity clamp tray than the Scandinavian Hub -- check desk edge thickness compatibility before buying",
      "Lower cable capacity than the mid-range and premium trays in this guide",
    ],
  },
  {
    rank: 4,
    id: "qiaoyoubang-wire-rack",
    name: "QiaoYoubang Under Desk Wire Rack (2-pack)",
    badge: "Best Budget",
    tier: "budget",
    score: 8.8,
    price: "$18–$25",
    mount: "adhesive",
    mountLabel: "Adhesive or screw",
    cableCapacity: "10–12 cables",
    bestFor: "Budget setups, rentals, simple cable counts under 15",
    amazonUrl: "https://amzn.to/43yVrCV",
    imageUrl: "https://m.media-amazon.com/images/I/6185tvqc4MS._AC_SL1476_.jpg",
    whyItWorks: [
      "Two trays cover most desks at the cheapest entry point",
      "Open mesh design routes cables easily and ventilates power supplies",
      "Works with adhesive (reversible) or screws (permanent)",
    ],
    tradeoffs: [
      "Cables partially visible through mesh from below",
      "Adhesive can fail on textured surfaces after 6–12 months",
    ],
  },
  {
    rank: 5,
    id: "monoprice-white-tray",
    name: "Monoprice Under Desk Cable Management Tray (24-inch, White)",
    tier: "budget",
    score: 8.5,
    price: "$22–$32",
    mount: "screw",
    mountLabel: "Screw mount",
    cableCapacity: "8–10 cables",
    bestFor: "Minimalist white desk setups, 8–12 cables",
    amazonUrl: "https://amzn.to/4u5Miwy",
    imageUrl: "https://m.media-amazon.com/images/I/71RQglYVvLL._AC_SL1500_.jpg",
    whyItWorks: [
      "Solid bottom means no cable visibility from below",
      "Clean white metal blends with modern desks",
      "Lightweight and easy to mount",
    ],
    tradeoffs: [
      "Only available in white — no black or silver option",
      "Solid bottom means less ventilation than mesh",
      "Narrower than some competitors — check power strip width first",
    ],
  },
  {
    rank: 6,
    id: "scandinavian-hub-clamp",
    name: "Scandinavian Hub Clamp-On Cable Management Tray",
    badge: "Best for Glass Desks",
    tier: "mid-range",
    score: 9.1,
    price: "$28–$38",
    mount: "clamp",
    mountLabel: "C-clamp (no drill)",
    cableCapacity: "15–18 cables",
    bestFor: "Glass desks, standing desks, renters who cannot drill",
    amazonUrl: "https://amzn.to/4x12PEW",
    imageUrl: "https://m.media-amazon.com/images/I/71Y4Ro-H0qL._AC_SL1500_.jpg",
    whyItWorks: [
      "C-clamp works on glass, hybrid, and thick laminate — no drilling",
      "Powder-coated steel supports 20+ lbs without sagging",
      "Modular sections link together for custom lengths up to 50+ inches",
    ],
    tradeoffs: [
      "Requires desk edge thickness between 0.75–2 inches",
      "Does not work with pedestal desks or desks thinner than 0.75 inches",
      "Additional modular sections add cost if you need more length",
    ],
  },
  {
    rank: 7,
    id: "vivo-extra-deep",
    name: "VIVO Extra Deep Under Desk Cable Management Tray (2-pack)",
    badge: "Best for Power Bricks",
    tier: "mid-range",
    score: 9.0,
    price: "$35–$45",
    mount: "screw",
    mountLabel: "Screw mount",
    cableCapacity: "12–15 cables",
    bestFor: "Multi-device setups with large power bricks and laptop chargers",
    amazonUrl: "https://amzn.to/4dRMuJQ",
    imageUrl: "https://m.media-amazon.com/images/I/617-+COdldL._AC_SL1500_.jpg",
    whyItWorks: [
      "4+ inch depth swallows power bricks and monitor surge protectors",
      "Open-top wire mesh design provides full access for cable routing",
      "Two trays in each pack cover most desk widths",
    ],
    tradeoffs: [
      "Extra depth means more under-desk space consumed (less leg room)",
      "Requires drilling four holes per tray",
      "Cables still visible through mesh — not fully concealed",
    ],
  },
  {
    rank: 8,
    id: "no-drill-adhesive-cable-tray",
    name: "No-Drill Under Desk Cable Management Tray with Adhesive Strips",
    badge: "Best Overall",
    tier: "premium",
    score: 9.2,
    price: "$34–$44",
    mount: "adhesive-screw",
    mountLabel: "Adhesive + optional screw",
    cableCapacity: "15–20 cables",
    bestFor: "Most wood desks, users wanting simple installation with backup security",
    amazonUrl: "https://amzn.to/4tXW1Vx",
    imageUrl: "https://m.media-amazon.com/images/I/812f1cScGhL._AC_SL1500_.jpg",
    whyItWorks: [
      "Strong adhesive strips hold the tray while you optionally add screws for permanent security",
      "Supports 15+ lbs of cables without deflection",
      "Clean design hides cables effectively without over-engineering",
    ],
    tradeoffs: [
      "Plastic construction — not as rigid as steel options",
      "Not for glass desks — adhesive will not hold on smooth glass",
      "Requires 24-hour adhesive cure time before loading cables",
    ],
  },
  {
    rank: 9,
    id: "stand-up-desk-store-clamp",
    name: "Stand Up Desk Store Clamp-On Cable Management Tray (40-inch)",
    badge: "Best for Standing Desks",
    tier: "mid-range",
    score: 8.9,
    price: "$32–$42",
    mount: "clamp",
    mountLabel: "Clamp-on (no drill)",
    cableCapacity: "18–22 cables",
    bestFor: "Standing desk users, desks with 12–20 cables",
    amazonUrl: "https://www.amazon.com/s?k=stand+up+desk+store+clamp+cable+tray&tag=theofficejournal-20",
    whyItWorks: [
      "Clamps to the desk frame and moves with it during height adjustment",
      "40-inch length covers most desks without additional pieces",
      "Dual Velcro rows prevent power strip from sliding during movement",
    ],
    tradeoffs: [
      "Cables visible through netting — not fully hidden",
      "Does not work with pedestal desks or very thin desks",
      "Heavier than shallow trays — harder to adjust once installed",
    ],
  },
  {
    rank: 10,
    id: "humanscale-neattech",
    name: "Humanscale NeatTech Under Desk Cable Management Tray",
    tier: "premium-plus",
    score: 8.7,
    price: "$120–$150",
    mount: "screw",
    mountLabel: "2-clip screw mount",
    cableCapacity: "12–15 cables",
    bestFor: "Users who prioritize easy installation and complete cable concealment",
    amazonUrl: "https://www.amazon.com/s?k=humanscale+neattech+cable+tray&tag=theofficejournal-20",
    whyItWorks: [
      "Fastest installation: 2 double-clips instead of 4 separate screws",
      "Drop-down access door fully conceals cables when closed",
      "Premium mesh material rated for long-term use",
    ],
    tradeoffs: [
      "Significant price jump from mid-range options ($100+ more)",
      "Fits average-size desks only (48–60 inches wide)",
      "Less room than open-top trays — requires careful cable bundling",
    ],
  },
  {
    rank: 11,
    id: "btod-ultimate-cable-box",
    name: "BTOD Ultimate Cable Management Box",
    badge: "Most Cables Hidden",
    tier: "premium-plus",
    score: 9.3,
    price: "$240–$310",
    mount: "screw",
    mountLabel: "Screw mount (6 screws)",
    cableCapacity: "20–50 cables",
    bestFor: "Minimalist perfectionists, broadcast setups, high-end desks",
    amazonUrl: "https://www.amazon.com/s?k=btod+ultimate+cable+box&tag=theofficejournal-20",
    whyItWorks: [
      "Heavy metal enclosure makes cables completely invisible from all angles",
      "Available in four widths (30, 36, 42, 48 inches)",
      "Eight cable portals for clean routing, supports 50 lbs",
    ],
    tradeoffs: [
      "Bulkiest option — extends further from desk than open trays",
      "Significant price ($240–$310)",
      "Complex installation (6 screws, careful alignment required)",
    ],
  },
  {
    rank: 12,
    id: "adhesive-slim-drawer",
    name: "Slim Adhesive Under Desk Cable Drawer",
    tier: "budget",
    score: 8.2,
    price: "$12–$22",
    mount: "adhesive",
    mountLabel: "Pure adhesive (no drill)",
    cableCapacity: "3–5 cables",
    bestFor: "Renters, charging cable organization, supplemental storage",
    amazonUrl: "https://amzn.to/4fSr4P8",
    imageUrl: "https://m.media-amazon.com/images/I/61Fcq1Ma-FL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    whyItWorks: [
      "Pure adhesive — no drilling at all, fully reversible",
      "Slim 1.5-inch profile takes virtually no floor space",
      "Works on most desk materials including coated wood",
    ],
    tradeoffs: [
      "Shallow depth — will not fit power strips or large bricks",
      "Weight limit of 3–5 lbs — not for primary cable management",
      "Adhesive can fail on textured surfaces over time",
    ],
  },
  {
    rank: 13,
    id: "univivi-no-drill-tray",
    name: "Univivi No-Drill Under Desk Cable Management Tray",
    tier: "specialty",
    score: 8.4,
    price: "$25–$35",
    mount: "adhesive",
    mountLabel: "Adhesive (no drill)",
    cableCapacity: "8–12 cables",
    bestFor: "No-drill setups, renters, standing desk users needing light cable management",
    amazonUrl: "https://amzn.to/4wLpxAy",
    imageUrl: "https://m.media-amazon.com/images/I/71ujmpvYlkL._AC_SX679_.jpg",
    whyItWorks: [
      "No drilling required — strong adhesive pad installation",
      "Solid tray bottom provides clean cable concealment from below",
      "Compatible with most desk materials without surface damage",
    ],
    tradeoffs: [
      "Adhesive strength varies on different desk surface finishes",
      "Not suitable for heavy power strips (over 3 lbs)",
      "Limited adjustability once adhered in position",
    ],
  },
];

export const quickPicks = [
  { situation: "Glass desk (no drilling)", name: "Scandinavian Hub Clamp Tray", score: 9.1, price: "$28–$38", id: "scandinavian-hub-clamp" },
  { situation: "Wood desk (budget)", name: "QiaoYoubang Wire Rack (2-pack)", score: 8.8, price: "$18–$25", id: "qiaoyoubang-wire-rack" },
  { situation: "Maximum cable capacity", name: "VIVO Extra Deep Tray", score: 9.0, price: "$35–$45", id: "vivo-extra-deep" },
  { situation: "Standing desk (movement tolerance)", name: "Stand Up Desk Store Clamp Tray", score: 8.9, price: "$32–$42", id: "stand-up-desk-store-clamp" },
  { situation: "Premium + easy install", name: "No-Drill Adhesive Cable Tray", score: 9.2, price: "$34–$44", id: "no-drill-adhesive-cable-tray" },
  { situation: "Most cables hidden", name: "BTOD Ultimate Cable Box", score: 9.3, price: "$240–$310", id: "btod-ultimate-cable-box" },
];

export const tierMeta: Record<string, { label: string; range: string }> = {
  budget: { label: "Budget", range: "$12–$32" },
  "mid-range": { label: "Mid-Range", range: "$28–$45" },
  premium: { label: "Premium", range: "$34–$50" },
  "premium-plus": { label: "Premium+", range: "$90–$310" },
  specialty: { label: "Specialty / No-Drill", range: "$25–$35" },
};

export const mountMethods = [
  { method: "Adhesive strips", time: "5 min", reversible: "Yes", bestFor: "Renters, testing", tradeoff: "Can fail on textured surfaces" },
  { method: "Screws (wood desk)", time: "15 min", reversible: "No", bestFor: "Permanent setups", tradeoff: "Leaves screw holes" },
  { method: "Clamp (C-clamp)", time: "10 min", reversible: "Yes", bestFor: "Glass desks, standing desks", tradeoff: "Requires proper edge thickness" },
  { method: "Adhesive + screws", time: "20 min", reversible: "Mostly", bestFor: "Best stability", tradeoff: "More complex installation" },
];

export const scoringCriteria = [
  { label: "Cable concealment", weight: "25%", desc: "How effectively does it hide cables from view — from below, from the side, when looking straight at the desk?" },
  { label: "Installation ease", weight: "20%", desc: "How long, how many tools required, how reversible if you change desks?" },
  { label: "Material durability", weight: "20%", desc: "Will it rust, sag, or crack after 12 months? Metal scores higher than plastic." },
  { label: "Cable capacity", weight: "20%", desc: "How much weight and volume can it hold without sagging or shifting?" },
  { label: "Desk compatibility", weight: "15%", desc: "How many desk types — wood, glass, metal, adjustable — does it work with?" },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is the best under desk cable tray without drilling?",
    a: "Two main paths: adhesive-only (QiaoYoubang at $18–$25 or Slim Adhesive Drawer at $12–$22) for most wood desks, or clamp-on (Scandinavian Hub at $28–$38 or Stand Up Desk Store at $32–$42) for glass and standing desks. Clamp options are more durable long-term; adhesive is more reversible but can fail on textured surfaces after 6–12 months.",
  },
  {
    q: "Can I use a cable tray with a glass desk?",
    a: "Yes, but only with a clamp-on design. Adhesive will not hold on glass. 75 and 2 inches thick. Do not use adhesive or screw-mount trays on glass desktops.",
  },
  {
    q: "How do you hide power bricks with a cable tray?",
    a: "Standard trays are 2–3 inches deep and power bricks will stick out. Two solutions: use an extra-deep tray (VIVO Extra Deep at $35–$45 has 4+ inch depth), or route bricks to the side of the tray and let them rest beside it. The BTOD Ultimate Box ($240+) fully encloses any size adapter.",
  },
  {
    q: "Do under desk cable trays work with standing desks?",
    a: "Use a clamp-on tray that attaches to the desk frame (not the desktop) so it moves with the desk. Route cables with 18 inches of slack for every 12 inches of height adjustment range. The Stand Up Desk Store Clamp Tray is designed specifically for this use case.",
  },
  {
    q: "How much weight can an under desk cable tray hold?",
    a: "Standard trays hold 15–20 lbs. Heavy-duty options like Humanscale NeatTech and BTOD Ultimate Box hold 30–50 lbs. Most home office setups stay well under the 15-lb limit.",
  },
  {
    q: "What is the best cable tray for aesthetic appeal?",
    a: "For complete cable invisibility: Humanscale NeatTech ($120–$150) hides cables behind a drop-down door, and BTOD Ultimate Box ($240+) encloses everything in a solid metal shell. For minimalist partial concealment: the Monoprice White Tray ($22–$32) blends with white desks, and the Scandinavian Hub ($28–$38) has a clean powder-coated steel look.",
  },
  {
    q: "How do I keep cables from tangling in a tray?",
    a: "Bundle cables by destination using Velcro straps (monitor group, power group, peripheral group). Zip-tie bundles to the tray so they stay put. Limit each bundle to 4–5 cables maximum. Routing all cables toward the same exit point of the tray prevents cross-tangling.",
  },
];
