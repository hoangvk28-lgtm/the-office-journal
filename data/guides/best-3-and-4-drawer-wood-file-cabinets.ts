const BASE = "/images/guides/best-3-and-4-drawer-wood-file-cabinets";

export const guideSlug = "best-3-and-4-drawer-wood-file-cabinets";
export const guideTitle = "Best 3 and 4-Drawer Wood File Cabinets (2026)";
export const metaTitle = "Best 3 and 4-Drawer Wood File Cabinets (2026)";
export const metaDescription =
  "Need more than 2 drawers? Compare the best 3-drawer and 4-drawer wood file cabinets for home offices. Ranked by reviews, storage, and style fit.";
export const lastUpdated = "2026-07-02";
export const readTime = "9 min";
export const heroImage = `${BASE}/devaise-3-drawer-mobile-rustic-brown.webp`;

export interface MultiDrawerCabinet {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  format: string;
  drawers: string;
  rating: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: MultiDrawerCabinet[] = [
  {
    id: "devaise-3-drawer-mobile-rustic-brown",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "DEVAISE 3-Drawer Mobile File Cabinet, Printer Stand, Rustic Brown",
    price: "$80.74",
    format: "3-Drawer Mobile",
    drawers: "3 Drawers + Open Shelves",
    rating: "4.1 stars, 2,800+ reviews",
    imageUrl: `${BASE}/devaise-3-drawer-mobile-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE is the most trusted pick in this roundup by a significant margin. With more than 2,800 reviews at 4.1 stars, it has the most validated real-world usage data of any multi-drawer wood-look file cabinet in this format. This is a 3-drawer mobile unit, not a traditional vertical filing cabinet. It sits at desk height on wheels and includes open shelves in addition to the file drawers. The top surface is explicitly positioned as a printer stand. The rustic brown finish with black metal accents follows the farmhouse-industrial style common in the wood-and-metal home office category. Under $100 is excellent value for this feature set.",
    tradeoffs: [
      "Mobile format may feel less substantial than a stationary unit",
      "Rustic brown plus black is a specific aesthetic that does not suit all home offices",
      "Verify exact drawer vs open shelf configuration on the current Amazon listing",
    ],
    skipIf:
      "Skip if you need a stationary 4-drawer vertical filing unit against the wall. The Sauder Clifford Place (Pick 3) covers that use case. Skip if you need a 3-drawer cabinet in a white or honey-brown finish.",
    pros: [
      "By far the highest review count in this roundup - 2,800 plus verified buyers",
      "Mobility on casters is a practical advantage in home offices",
      "Open shelves provide accessible storage for frequently used items",
      "Printer stand top explicitly designed for that use case",
      "Under $100 is excellent value for this feature set",
    ],
    cons: [
      "4.1 stars is solid but not exceptional",
      "Mobile format may feel less substantial than a stationary cabinet",
      "Rustic brown finish is not for every office aesthetic",
    ],
  },
  {
    id: "vasagle-3-drawer-honey-brown",
    rank: 2,
    badge: "Best 3-Drawer Farmhouse Style",
    name: "VASAGLE 3-Drawer File Cabinet, Farmhouse Style, Honey Brown and Black",
    price: "Check Amazon",
    format: "3-Drawer",
    drawers: "3 Drawers",
    rating: "Check Amazon",
    imageUrl: `${BASE}/vasagle-3-drawer-honey-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09XF4Z5GP?tag=theofficejournal-20",
    whyItWorks:
      "The VASAGLE in Honey Brown and Black brings a lighter, warmer farmhouse tone that pairs well with light wood desks, natural oak furniture, and mixed wood-and-metal setups. VASAGLE is a recognized brand in the home office furniture space with a large catalog of well-reviewed wood-and-metal style products. The honey brown plus ink black combination is versatile for farmhouse and Scandinavian-adjacent home offices. Verify the drawer count (2-drawer or 3-drawer) and current price and rating on the Amazon listing before ordering.",
    tradeoffs: [
      "Drawer count and price require manual verification on current listing before ordering",
      "Engineered wood with metal frame, not solid wood",
      "No locking option confirmed on this finish",
    ],
    skipIf:
      "Skip if you need the most statistically validated quality signal. The DEVAISE (Pick 1) has significantly more reviews. Skip if you need a locking cabinet - verify lock availability before ordering this pick.",
    pros: [
      "Honey brown plus black is a versatile and popular farmhouse combination",
      "VASAGLE is a recognized and trusted brand",
      "Pairs naturally with warm wood desk setups and Scandinavian furniture",
    ],
    cons: [
      "Drawer count and price require listing verification before ordering",
      "Engineered wood, not solid wood",
      "Lock status not confirmed",
    ],
  },
  {
    id: "sauder-clifford-4-drawer-grand-walnut",
    rank: 3,
    badge: "Best 4-Drawer Vertical by Reviews",
    name: "Sauder Clifford Place 4-Drawer Vertical File Cabinet, Grand Walnut",
    price: "$303.99",
    format: "4-Drawer Vertical",
    drawers: "4 Drawers",
    rating: "4.0 stars, 465 reviews",
    imageUrl: `${BASE}/sauder-clifford-place-4-drawer-grand-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07C659WC3?tag=theofficejournal-20",
    whyItWorks:
      "The Sauder Clifford Place is the only clearly verified 4-drawer vertical cabinet in this roundup with a meaningful review count. At 465 reviews and 4.0 stars, it is the strongest traditional 4-drawer pick available from a recognized brand in the wood-look file cabinet space. The Grand Walnut finish is a dark, warm brown that reads as traditional home office furniture. It suits traditional home offices with dark wood desks, bookshelves, and classic furniture. A 4-drawer vertical cabinet at 50-plus inches provides significant filing capacity for growing document collections.",
    tradeoffs: [
      "$303.99 is a premium price for engineered wood",
      "At 50-plus inches tall, requires planning around room height and shelf clearance",
      "Heavy when fully loaded - not easy to relocate once positioned",
    ],
    skipIf:
      "Skip if you have limited floor-to-ceiling clearance or want a mobile solution. The DEVAISE (Pick 1) is far more flexible. Skip if you are budget-conscious - $303.99 for engineered wood is a significant spend.",
    pros: [
      "Highest review count among 4-drawer vertical picks (465 reviews)",
      "Sauder is a trusted brand with consistent product quality",
      "Grand walnut finish suits traditional and classic home office setups",
      "4 drawers provides maximum filing capacity in this roundup",
    ],
    cons: [
      "$303.99 is a premium price for engineered wood construction",
      "50-plus inches tall - visually dominant in small rooms",
      "Difficult to relocate once loaded with files",
    ],
  },
];

export const backupProducts: MultiDrawerCabinet[] = [
  {
    id: "modernmate-4-drawer-walnut-power-strip",
    rank: 0,
    badge: "Backup: 4-Drawer With Power Strip",
    name: "ModernMate 4-Drawer File Cabinet, Mid-Century Walnut with Power Strip",
    price: "$269.99",
    format: "4-Drawer Vertical",
    drawers: "4 Drawers",
    rating: "4.3 stars, 32 reviews",
    imageUrl: `${BASE}/modernmate-4-drawer-walnut-power-strip.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0F29HRN9M?tag=theofficejournal-20",
    whyItWorks:
      "The ModernMate is included as a backup pick for one specific feature: a built-in power strip integrated into the cabinet. This is the only 4-drawer wood-look cabinet in this list with that capability. However, 32 reviews is insufficient for confident recommendation as a primary pick. Verify current listing for power strip configuration before purchasing.",
    tradeoffs: [
      "32 reviews is not enough data for confident recommendation",
      "Low-review products can have volatile ratings",
    ],
    skipIf: "Skip for most buyers. Only consider if you specifically need the power strip integration.",
    pros: ["Built-in power strip is unique in this category", "Mid-century walnut finish is design-forward"],
    cons: ["32 reviews is insufficient for a primary recommendation", "Rating may shift as more buyers review"],
  },
  {
    id: "tribesigns-4-drawer-dark-walnut",
    rank: 0,
    badge: "Backup: 4-Drawer Dark Walnut",
    name: "Tribesigns 4-Drawer Vertical Wood Filing Cabinet, Classic Dark Walnut",
    price: "$219.99",
    format: "4-Drawer Vertical",
    drawers: "4 Drawers",
    rating: "4.3 stars, 8 reviews",
    imageUrl: `${BASE}/tribesigns-4-drawer-dark-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0G23FCHMG?tag=theofficejournal-20",
    whyItWorks:
      "Eight reviews is not enough data to recommend this product with confidence. It is included as a backup option for buyers who specifically want a 4-drawer dark walnut vertical cabinet at $219.99 and are comfortable with very limited review validation.",
    tradeoffs: [
      "8 reviews is far too low for confident recommendation",
      "Rating not validated at any meaningful scale",
    ],
    skipIf: "Skip for most buyers. The Sauder Clifford Place (Pick 3) is far better validated.",
    pros: ["Dark walnut finish is a classic home office look", "4-drawer capacity"],
    cons: ["8 reviews is not enough data for any recommendation", "No meaningful buyer validation"],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  format: string;
  drawers: string;
  rating: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  format: p.format,
  drawers: p.drawers,
  rating: p.rating,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "Is a 3-drawer mobile cabinet the same as a 3-drawer filing cabinet?",
    a: "No. A 3-drawer mobile file cabinet (like the DEVAISE) sits low, moves on wheels, and typically combines file drawers with open shelves. A traditional 3-drawer filing cabinet is taller, stationary, and designed purely for hanging files. Both store documents, but they serve different workflows.",
  },
  {
    q: "What is the best 3-drawer wood file cabinet?",
    a: "The DEVAISE 3-Drawer Mobile in Rustic Brown is the strongest pick by a wide margin: 2,800 plus reviews at 4.1 stars at $94.99. It includes rolling casters, open shelves, and a printer stand top. For a farmhouse honey-brown finish, the VASAGLE 3-Drawer is a good alternative, but verify the current drawer count and pricing on the listing.",
  },
  {
    q: "Can a 4-drawer vertical cabinet hold legal size files?",
    a: "Some can, but not all. Legal size files (8.5 by 14 inches) require a wider drawer than letter size. Check the specific listing for letter-and-legal compatibility before ordering.",
  },
  {
    q: "How heavy is a fully loaded 4-drawer file cabinet?",
    a: "A fully loaded 4-drawer vertical filing cabinet can weigh 100 to 150 pounds or more. Do not plan to move it frequently once loaded. Position it on hard flooring rather than thick carpet for stability.",
  },
  {
    q: "Do 3-drawer mobile cabinets fit under a standard desk?",
    a: "It depends on the cabinet height and desk clearance. A standard desk has approximately 29 to 30 inches of clearance from floor to underside. Most 3-drawer mobile units are 24 to 28 inches tall. Verify both measurements before assuming the cabinet will fit under your specific desk.",
  },
  {
    q: "What is the difference between a 4-drawer lateral and a 4-drawer vertical?",
    a: "A 4-drawer lateral cabinet is wider and shorter, with each drawer spanning the full cabinet width. A 4-drawer vertical is narrower and taller, with each drawer extending the full depth front-to-back. Lateral cabinets take more wall space but are shorter. Vertical cabinets require less wall width but are significantly taller.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-lateral-wood-file-cabinets", title: "Best Lateral Wood File Cabinets" },
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2-Drawer Wood File Cabinets" },
  { href: "/guide/best-wood-file-cabinets-under-200", title: "Best Wood File Cabinets Under $200" },
  { href: "/guide/best-wood-file-cabinets-under-500", title: "Best Wood File Cabinets Under $500" },
  { href: "/guide/best-solid-wood-file-cabinets", title: "Best Solid Wood File Cabinets" },
];
