const BASE = "/images/guides/best-wood-file-cabinets";

export const guideSlug = "best-wood-file-cabinets";
export const guideTitle =
  "Best Wood File Cabinets in 2026: Top Picks for Home Offices";
export const metaTitle = "Best Wood File Cabinets in 2026";
export const metaDescription =
  "Best wood file cabinets in 2026: DEVAISE 3-drawer, VASAGLE CUSTOS, GYIIYUO desktop extension, DEVAISE 4-drawer with lock. Honest picks for home offices.";
export const lastUpdated = "2026-07-02";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface FileCabinet {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  drawers: string;
  lock: string;
  rating: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: FileCabinet[] = [
  {
    id: "devaise-rustic-brown",
    rank: 1,
    badge: "Best Overall",
    name: "DEVAISE 3 Drawer Mobile File Cabinet, Rustic Brown",
    price: "~$94.99",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.2 stars, 5,342 reviews",
    imageUrl: `${BASE}/devaise-3-drawer-mobile-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE 3 Drawer Rustic Brown earns the top spot because it hits the best intersection of price, practicality, and style. With over 5,300 reviews and a 4.2-star average, it has a much larger feedback base than most competing models in this category. Three drawers give you meaningful storage without the footprint of a four-drawer unit. The bottom drawer is sized for hanging letter or legal-size folders. The mobile base with locking casters lets you slide it under your desk and roll it out when you need access. Buyers consistently note that assembly is straightforward, the finished look is better than expected at this price, and the casters roll smoothly on both hardwood and carpet.",
    tradeoffs: [
      "No lock - not suitable for storing sensitive documents",
      "Engineered wood with laminate finish is moisture-sensitive - avoid damp environments",
      "Assembly required, typically 30 to 60 minutes",
    ],
    skipIf:
      "Skip if you need document security - the DEVAISE 4-Drawer with Lock (Pick 5) is the only locking wood option in this guide. Skip if you prefer a white finish - the VASAGLE CUSTOS (Pick 2) or DEVAISE White (Pick 3) are better matches.",
    pros: [
      "Highest-rated and most-reviewed wood file cabinet in this guide at 5,342 reviews",
      "Warm rustic finish works in farmhouse, natural, and transitional office setups",
      "Rolling casters with locking mechanism for easy desk positioning",
      "Three drawers handle three to five years of organized home office files",
      "Bottom drawer accommodates hanging letter and legal-size folders",
    ],
    cons: [
      "No lock - not suitable for sensitive documents",
      "Engineered wood is moisture-sensitive",
      "Assembly required",
    ],
  },
  {
    id: "vasagle-custos-snow-white",
    rank: 2,
    badge: "Best Budget Pick",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Snow White",
    price: "~$62.99",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 3,262 reviews",
    imageUrl: `${BASE}/vasagle-custos-2-drawer-snow-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BRXQ1DKF?tag=theofficejournal-20",
    whyItWorks:
      "At $62.99, the VASAGLE CUSTOS is the most affordable option on this list with the second-highest review count at 3,262. The snow white finish is clean and modern, a natural match for Scandinavian, minimalist, or all-white setups. Two drawers handle light-to-moderate filing - one to two years of active documents without the footprint of a three-drawer unit. VASAGLE is a recognized home furniture brand with a solid track record of consistent quality in the $50 to $100 range.",
    tradeoffs: [
      "Two drawers only - less capacity than three-drawer options",
      "No lock",
      "White laminate finish shows scuffs more visibly than darker finishes",
    ],
    skipIf:
      "Skip if you need more than two drawers of capacity - the DEVAISE 3-Drawer White (Pick 3) offers a matching white finish with an extra drawer. Skip if you need a lock on any drawer.",
    pros: [
      "Lowest price on the main list at $62.99",
      "3,262 reviews at 4.0 stars - well-validated for a budget pick",
      "Snow white finish is a clean match for minimalist and all-white setups",
      "VASAGLE is a reputable furniture brand with consistent quality at this price tier",
    ],
    cons: [
      "Two drawers only",
      "No lock",
      "White finish can show scuffs and marks more easily",
    ],
  },
  {
    id: "devaise-white-3drawer",
    rank: 3,
    badge: "Best White Finish",
    name: "DEVAISE 3-Drawer Wood File Cabinet, White",
    price: "~$94.99",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.1 stars, 2,784 reviews",
    imageUrl: `${BASE}/devaise-3-drawer-wood-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09Z2C8N2Q?tag=theofficejournal-20",
    whyItWorks:
      "If you want more storage than two drawers but need a white finish to match your setup, the DEVAISE 3-Drawer White is the natural choice. At 2,784 reviews and 4.1 stars, this is a well-tested product with a strong feedback base for a mid-range cabinet. Rolling casters allow repositioning. The bottom drawer accommodates hanging letter-size folders. The white finish sits alongside the VASAGLE CUSTOS for all-white desk setups, but adds a third drawer for buyers who have outgrown two.",
    tradeoffs: [
      "No lock",
      "White laminate finish is more visible to scuffs and scratches than darker finishes",
      "Same price as the Rustic Brown version - you are paying for the finish preference, not added features",
    ],
    skipIf:
      "Skip if two drawers is enough storage and budget is a concern - the VASAGLE CUSTOS (Pick 2) covers the white finish at a lower price point. Skip if you need a lock.",
    pros: [
      "Three drawers in a white finish - the only option in this guide combining both",
      "2,784 reviews at 4.1 stars - strong validation for a mid-range pick",
      "Rolling casters with locking mechanism",
      "Bottom drawer fits hanging letter-size folders",
    ],
    cons: [
      "No lock",
      "White finish shows wear more visibly than darker alternatives",
      "Same price as the Rustic Brown variant for fewer unique features",
    ],
  },
  {
    id: "gyiiyuo-extended-desktop",
    rank: 4,
    badge: "Best with Desktop Extension",
    name: "GYIIYUO 2-Drawer File Cabinet with Extended Desktop",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/gyiiyuo-2-drawer-extended-desktop.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=theofficejournal-20",
    whyItWorks:
      "The GYIIYUO is the most unusual pick on this list. It comes with a 24-inch extended desktop surface that provides a bonus work area or dedicated printer platform without adding extra furniture. If your home office printer currently sits on the floor, a chair, or a makeshift surface, this cabinet solves that problem in a single piece. The desktop extension typically extends to the side, giving a small staging area while the two drawers handle hanging files. For buyers who need both file storage and a printer stand, this eliminates the need to purchase two separate pieces.",
    tradeoffs: [
      "Two drawers only - less filing capacity than three-drawer options",
      "Extended desktop surface is not rated for very heavy equipment like large laser printers",
      "Verify current review count and rating on Amazon before ordering",
    ],
    skipIf:
      "Skip if you already have adequate desk space and do not need the extra surface. Skip if three or four drawers of storage are a priority - the DEVAISE picks (1, 3, and 5) cover higher drawer counts.",
    pros: [
      "Extended desktop surface solves printer placement without extra furniture",
      "Light brown finish photographs warmly and pairs well with natural desk setups",
      "Rolling casters for repositioning",
      "Two-in-one function reduces total furniture pieces in a small office",
    ],
    cons: [
      "Two drawers only",
      "Extended desktop not rated for very heavy printers",
      "Verify current listing specs and reviews before purchasing",
    ],
  },
  {
    id: "devaise-4drawer-lock",
    rank: 5,
    badge: "Best 4-Drawer With Lock",
    name: "DEVAISE 4-Drawer Wood File Cabinet with Lock, Rustic Brown",
    price: "Check Amazon",
    drawers: "4 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/devaise-4-drawer-lock-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DBQ6TPDH?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE 4-Drawer with Lock is the only option in this guide that combines four drawers, a cylinder lock, and wood-look aesthetics under $130. Four drawers handle a high volume of physical records - appropriate for power users or small business owners with years of accumulated paperwork. The cylinder lock secures all drawers, making it the right call when document security is a requirement. Rolling casters add mobility. Note: verify current review count on Amazon before ordering, as this model has fewer reviews than the other DEVAISE picks in this guide.",
    tradeoffs: [
      "Fewer reviews than other picks in this guide - verify current rating before ordering",
      "Larger footprint than two or three-drawer options",
      "Engineered wood - not suitable for damp environments",
    ],
    skipIf:
      "Skip if you do not need a lock and four drawers - the DEVAISE 3-Drawer Rustic Brown (Pick 1) is the better-validated option at a similar price. Skip if a white finish is required - no four-drawer white option is included in this guide.",
    pros: [
      "Only pick in this guide with both four drawers and a lock",
      "Cylinder lock secures all drawers",
      "Rolling casters for desk positioning",
      "Rustic brown finish matches the top-rated Pick 1 in style",
    ],
    cons: [
      "Fewer reviews than other DEVAISE picks - smaller validation sample",
      "Larger footprint may not suit compact home offices",
      "Engineered wood is moisture-sensitive",
    ],
  },
];

export const metalAlternatives: FileCabinet[] = [
  {
    id: "letaya-metal",
    rank: 0,
    badge: "Steel Alternative",
    name: "Letaya 3-Drawer Metal File Cabinet",
    price: "Check Amazon",
    drawers: "3 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/letaya-3-drawer-metal-assembled.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=theofficejournal-20",
    whyItWorks:
      "The Letaya earns a place here because it arrives fully assembled, eliminating the flat-pack build entirely. Metal construction handles moisture and heavy use far better than engineered wood. For buyers who prioritize durability over a wood-look aesthetic, or who find flat-pack assembly frustrating, the Letaya is the practical alternative. Three drawers, a lock, and full pre-assembly at delivery make this a strong option for buyers in the right situation.",
    tradeoffs: [
      "Metal aesthetic does not match wood or natural desk setups",
      "Fully assembled shipping means a larger box and potentially more difficult delivery logistics",
      "Verify current price and rating before ordering",
    ],
    skipIf:
      "Skip if a wood-look finish is important for your setup. Skip if you are on a tight budget - verify current pricing against the wood picks before deciding.",
    pros: [
      "Arrives fully assembled - no flat-pack build required",
      "Metal construction handles moisture and heavy use better than engineered wood",
      "Includes a lock",
      "Three drawers with standard hanging file support",
    ],
    cons: [
      "Metal finish does not suit wood or natural home office setups",
      "Larger and heavier than wood-look alternatives",
      "Verify current rating and reviews before ordering",
    ],
  },
  {
    id: "bynsoe-steel",
    rank: 0,
    badge: "Steel Alternative",
    name: "BYNSOE 2-Drawer Steel File Cabinet",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/bynsoe-2-drawer-steel.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=theofficejournal-20",
    whyItWorks:
      "Budget-friendly metal option at a similar price to the VASAGLE CUSTOS. Choose this over the VASAGLE if durability matters more than aesthetics. Two drawers handle light to moderate filing. Steel construction is more resistant to moisture, dents from daily use, and long-term wear than engineered wood at the same price.",
    tradeoffs: [
      "No lock",
      "Metal aesthetic does not match wood-look desk setups",
      "Two drawers only - less capacity than three-drawer options",
    ],
    skipIf:
      "Skip if a wood-look finish matters for your desk setup. Skip if you need a lock on any drawer - the Letaya (above) is the locking metal option.",
    pros: [
      "Steel construction outperforms engineered wood on durability and moisture resistance",
      "Budget-friendly pricing comparable to wood options",
      "Two drawers for light to moderate filing",
    ],
    cons: [
      "No lock",
      "Metal finish does not match natural or wood-themed office setups",
      "Two drawers only",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  drawers: string;
  lock: string;
  rating: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  drawers: p.drawers,
  lock: p.lock,
  rating: p.rating,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "Are wood file cabinets actually made of real wood?",
    a: "At the $57 to $120 price range covered by this guide, no. All five main picks use engineered wood (MDF or particleboard) with a wood-grain laminate surface. Solid hardwood file cabinets exist but typically start at $300 to $400 and go higher. For higher-budget options, see the guide to wood file cabinets under $500.",
  },
  {
    q: "Which wood file cabinet is best overall?",
    a: "The DEVAISE 3 Drawer Mobile File Cabinet in Rustic Brown at approximately $94.99 is the best overall pick. It has the highest rating combined with the largest review count in the category (over 5,300 reviews), three drawers, and rolling casters for easy desk positioning.",
  },
  {
    q: "Which wood file cabinet is best with a lock?",
    a: "The DEVAISE 4 Drawer File Cabinet with Lock in Rustic Brown is the only locking option among the main wood picks in this guide. It includes a cylinder lock, four drawers, and rolling casters. Verify the current review count and rating on Amazon before purchasing.",
  },
  {
    q: "How many drawers do I need in a file cabinet?",
    a: "Two drawers is appropriate for light to moderate filing: one to two years of active documents. Three drawers is the sweet spot for most home office users - enough capacity for three to five years of organized files without overwhelming a smaller room. Four drawers is for power users with a high volume of physical records.",
  },
  {
    q: "Can I use a wood file cabinet as a printer stand?",
    a: "Yes. Three-drawer rolling units in this guide sit at approximately 27 to 29 inches tall, close to standard desk height. The GYIIYUO with extended desktop is the most purpose-built option for this use. For any cabinet used as a printer stand, confirm the top surface weight capacity before placing a heavy laser printer on it.",
  },
  {
    q: "Do rolling casters on file cabinets lock?",
    a: "Yes. The casters on all five main wood picks in this guide include a locking mechanism to keep the unit stationary when needed. Two casters per unit are typically lockable. Check the product listing to confirm locking caster details for the specific model you are considering.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-wood-file-cabinets-under-200",
    title: "Best Wood File Cabinets Under $200",
  },
  {
    href: "/guide/best-2-drawer-wood-file-cabinets",
    title: "Best 2-Drawer Wood File Cabinets in 2026",
  },
  {
    href: "/guide/best-2-drawer-wood-file-cabinets-under-150",
    title: "Best 2-Drawer Wood File Cabinets Under $150",
  },
  {
    href: "/guide/best-wood-file-cabinets-under-500",
    title: "Best Wood File Cabinets Under $500",
  },
];
