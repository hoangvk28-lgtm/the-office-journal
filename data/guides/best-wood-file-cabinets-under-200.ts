const BASE = "/images/guides/best-wood-file-cabinets-under-200";

export const guideSlug = "best-wood-file-cabinets-under-200";
export const guideTitle = "Best Wood File Cabinets Under $200 (2026)";
export const metaTitle = "Best Wood File Cabinets Under $200 (2026)";
export const metaDescription =
  "Best wood file cabinets under $200: DEVAISE rustic brown, VASAGLE CUSTOS white, INNOD fluted oak. Honest pros, cons, and lock options for home offices.";
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
      "The DEVAISE Rustic Brown earns the top spot with the highest rating and the largest review base in this category by a significant margin. Over 5,300 verified buyers at 4.2 stars is a reliable quality signal. The warm rustic brown finish suits farmhouse, natural wood, and transitional home office setups. Three drawers give you enough storage for several years of active paperwork. The bottom drawer holds letter and legal-size hanging files. Rolling casters with two lockable wheels let you slide it under a desk and lock it in place. At this price and review volume, any systematic quality problem would be clearly visible in the review text - the 4.2 star average holds up.",
    tradeoffs: [
      "No lock - all contents are accessible without a key",
      "Engineered wood core is moisture-sensitive - keep away from exterior walls in humid environments",
      "Assembly required, typically 30 to 60 minutes based on buyer feedback",
    ],
    skipIf:
      "Skip if you need a lock - the DEVAISE with Lock White (Pick 6) is the right call. Skip if you only need two drawers and want the lowest price - the VASAGLE CUSTOS (Pick 2) saves over $30.",
    pros: [
      "Highest-rated and most-reviewed option in this guide - 5,342 reviews at 4.2 stars",
      "Warm rustic brown finish works with most home office styles",
      "Rolling casters with locking mechanism for repositioning",
      "Three drawers including a bottom drawer sized for letter and legal files",
    ],
    cons: [
      "No lock",
      "Assembly required (30 to 60 minutes)",
      "Moisture-sensitive engineered wood core",
    ],
  },
  {
    id: "vasagle-snow-white",
    rank: 2,
    badge: "Best Budget",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Snow White",
    price: "~$62.99",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 3,262 reviews",
    imageUrl: `${BASE}/vasagle-2-drawer-snow-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BRXQ1DKF?tag=theofficejournal-20",
    whyItWorks:
      "At $62.99, the VASAGLE CUSTOS is the most affordable option in this guide with the second-highest review count. The snow white finish is clean and versatile, fitting naturally into minimalist, Scandinavian, and modern home office setups. Two drawers handle light-to-moderate filing needs. VASAGLE is a well-known home furniture brand with consistent quality across their product lines, which is why 3,262 buyers have left reviews at a 4.0 star average. For buyers who need a budget-conscious, stationary white cabinet with decent storage, this is the obvious pick.",
    tradeoffs: [
      "Only 2 drawers - storage capacity is limited compared to 3-drawer options",
      "No casters - this is a stationary unit that does not roll",
      "No lock",
    ],
    skipIf:
      "Skip if you need three drawers - any of the DEVAISE options give you more storage. Skip if you plan to use the cabinet as a printer stand or mobile unit - it does not roll.",
    pros: [
      "Most affordable option at $62.99",
      "Over 3,200 reviews provides strong buyer confidence",
      "Compact footprint for small spaces",
      "Clean white finish matches most desks",
    ],
    cons: [
      "Only 2 drawers",
      "No casters (stationary)",
      "No lock",
    ],
  },
  {
    id: "devaise-white-3drawer",
    rank: 3,
    badge: "Best White Option",
    name: "DEVAISE 3-Drawer Wood File Cabinet, White",
    price: "~$94.99",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.1 stars, 2,784 reviews",
    imageUrl: `${BASE}/devaise-3-drawer-wood-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09Z2C8N2Q?tag=theofficejournal-20",
    whyItWorks:
      "The white DEVAISE 3-drawer is the same functional package as the rustic brown best overall pick but in a lighter, more modern finish. Nearly 2,800 reviews at 4.1 stars confirms consistent quality across the DEVAISE line. Works especially well in offices with white or light-colored desks, matching popular setups with IKEA and minimalist furniture. Rolling casters included. If your desk is white or light gray and you want a cohesive look, this is the straightforward pick over the rustic brown version.",
    tradeoffs: [
      "White finish shows scuffs and marks more visibly than darker finishes",
      "No lock",
      "Same engineered wood construction as other options - not solid wood",
    ],
    skipIf:
      "Skip if your office has a warm or dark wood aesthetic - the rustic brown (Pick 1) or walnut (Pick 4) will blend better. Skip if you need a lock - DEVAISE Lock White (Pick 6) is the white locking option.",
    pros: [
      "Nearly 2,800 reviews confirms reliable quality",
      "Clean white finish pairs well with white and light-colored desks",
      "Rolling casters for repositioning",
      "Three drawers including letter and legal-size filing",
    ],
    cons: [
      "White surface shows marks more easily",
      "No lock",
      "Same price as rustic brown at $94.99",
    ],
  },
  {
    id: "devaise-walnut",
    rank: 4,
    badge: "Best Walnut Finish",
    name: "DEVAISE 3 Drawer Mobile File Cabinet, Walnut",
    price: "~$74.99",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 2,318 reviews",
    imageUrl: `${BASE}/devaise-3-drawer-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0875YH1LD?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE Walnut is the most affordable 3-drawer rolling option in this guide at $74.99 - a full $20 less than the rustic brown and white variants. The rich dark walnut-tone laminate suits mid-century modern and traditional home office setups. Over 2,300 reviews at 4.0 stars is a solid quality signal for the price. Dark finishes also hide minor scuffs and surface marks better than white or lighter options, which matters over years of regular use.",
    tradeoffs: [
      "Lower review count than the rustic brown best overall pick",
      "No lock",
      "Walnut tone is a laminate, not real walnut veneer",
    ],
    skipIf:
      "Skip if you want the most validated option in the DEVAISE line - the rustic brown (Pick 1) has over twice the reviews. Skip if a bright, modern aesthetic is the goal - walnut reads as darker and more traditional.",
    pros: [
      "Most affordable 3-drawer rolling option at $74.99",
      "Rich walnut finish works well in mid-century and traditional setups",
      "Dark finish hides minor scuffs better than white",
      "Rolling casters included",
    ],
    cons: [
      "No lock",
      "Walnut tone is a laminate finish, not real wood veneer",
      "Fewer reviews than the rustic brown variant",
    ],
  },
  {
    id: "vasagle-honey-brown",
    rank: 5,
    badge: "Best Farmhouse Style",
    name: "VASAGLE 3-Drawer Honey Brown Farmhouse File Cabinet",
    price: "~$85.49",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 1,310 reviews",
    imageUrl: `${BASE}/vasagle-honey-brown-farmhouse.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09XF4Z5GP?tag=theofficejournal-20",
    whyItWorks:
      "The honey brown finish is rare in this price category and fills a clear gap for farmhouse, boho, and warm-toned home offices. No other pick on this list offers this color tone. VASAGLE is a reliable brand in the budget furniture space with consistent build quality, and 1,310 reviews at 4.0 stars is a respectable sample size for a color variant. Three drawers and rolling casters round out a practical package. If your workspace leans farmhouse or rustic and the DEVAISE rustic brown is too dark, the honey brown fills that gap.",
    tradeoffs: [
      "Lower review count than the top DEVAISE picks",
      "No lock",
      "Honey brown tone is a laminate - not solid wood",
    ],
    skipIf:
      "Skip if review volume is your primary confidence signal - the DEVAISE rustic brown (Pick 1) has over four times more reviews. Skip if a lock is required.",
    pros: [
      "Unique honey brown finish not available on other picks",
      "Three drawers with rolling casters",
      "VASAGLE brand build quality is consistent",
      "Good fit for farmhouse and warm-toned office aesthetics",
    ],
    cons: [
      "Fewer reviews than top picks",
      "No lock",
      "Honey brown is a laminate, not solid wood",
    ],
  },
  {
    id: "devaise-lock-white",
    rank: 6,
    badge: "Best With Lock",
    name: "DEVAISE 3 Drawer Mobile File Cabinet with Lock, White",
    price: "~$69.99",
    drawers: "3 Drawers",
    lock: "With Lock",
    rating: "4.0 stars, 797 reviews",
    imageUrl: `${BASE}/devaise-3-drawer-mobile-lock-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08SWJZ5SC?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE lock white is the only locking cabinet in this guide and is competitively priced at $69.99 for a 3-drawer rolling unit. The cam lock secures all three drawers simultaneously from a single key. Fewer reviews than top picks (797), but 4.0 stars at this niche feature level is respectable. If document security is a priority - shared office spaces, home offices with children nearby, or sensitive paperwork - this is the only option in the under-$200 category that addresses it.",
    tradeoffs: [
      "Only 797 reviews - the smallest sample size in this guide",
      "Consumer-grade cam lock - not a high-security mechanism",
      "White finish shows scuffs and marks more visibly",
    ],
    skipIf:
      "Skip if you do not need a lock - you can get more buyer-validated options (DEVAISE rustic brown or white) for the same or similar price without the lock niche premium. Skip if you need a dark or warm finish - this only comes in white.",
    pros: [
      "Only locking option in this guide",
      "Competitively priced at $69.99 for a 3-drawer rolling unit",
      "Cam lock secures all drawers simultaneously",
      "Rolling casters for mobility",
    ],
    cons: [
      "Only 797 reviews - limited buyer validation",
      "Consumer-grade lock, not high-security",
      "White finish only",
    ],
  },
  {
    id: "innod-fluted-oak",
    rank: 7,
    badge: "Best Modern Design",
    name: "INNOD 3 Drawer Fluted Mobile File Cabinet, Oak",
    price: "~$109.99",
    drawers: "3 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 41 reviews",
    imageUrl: `${BASE}/innod-3-drawer-fluted-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0GJZPVMG8?tag=theofficejournal-20",
    whyItWorks:
      "The INNOD fluted cabinet is the most visually distinctive pick in this guide. The fluted panel drawer fronts have become a popular detail in contemporary interior design, and the oak finish gives it a more furniture-like appearance than typical budget laminate cabinets. At $109.99, it is the most expensive option here. The 4.0 star rating is currently based on only 41 reviews, which means the signal is early and may shift. For design-conscious buyers who want a cabinet that reads as a piece of furniture rather than office equipment, this is the pick - with the caveat that buyer data is limited.",
    tradeoffs: [
      "Only 41 reviews at time of writing - rating may not be stable as more buyers weigh in",
      "Most expensive option in this guide at $109.99",
      "No lock",
    ],
    skipIf:
      "Skip if you prioritize buyer-validated quality signals - every other pick has significantly more reviews. Skip if budget is a concern - this is the most expensive option in the guide by $15 or more.",
    pros: [
      "Distinctive fluted design stands out among budget options",
      "Oak finish is on-trend for 2025 to 2026 home office aesthetics",
      "Rolling casters for mobility",
      "Furniture-like appearance suits design-forward spaces",
    ],
    cons: [
      "Only 41 reviews - limited buyer validation",
      "Most expensive option at $109.99",
      "No lock",
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
    q: "Are wood file cabinets under $200 actually made of real wood?",
    a: "No. At the $60 to $120 price range, every cabinet is built from engineered wood (MDF or particleboard) with a laminate or foil surface printed to look like wood grain. This is completely standard for the category at this price. Solid hardwood file cabinets typically start at $300 to $400 and go much higher.",
  },
  {
    q: "Which wood file cabinet under $200 is the best overall?",
    a: "The DEVAISE 3 Drawer Mobile File Cabinet in Rustic Brown (B0989HLF81) at $94.99 is the best overall pick. It has the highest rating (4.2 stars) and the largest review count in the category (over 5,300), a warm finish that works in most home offices, and rolling casters for easy repositioning.",
  },
  {
    q: "Which wood file cabinet under $200 includes a lock?",
    a: "The DEVAISE 3 Drawer Mobile File Cabinet with Lock, White (B08SWJZ5SC) at $69.99 is the only locking option in this guide. It includes a cam lock that secures all three drawers and rolls on casters. Note that this is a consumer-grade lock, not a high-security mechanism.",
  },
  {
    q: "Can I use a wood file cabinet as a printer stand?",
    a: "Yes. Three-drawer rolling cabinets in this guide sit at approximately 27 to 29 inches tall, which is close to standard desk height. Most home inkjet printers fit comfortably on the top surface. Confirm the weight capacity in the product specifications before placing a heavy laser printer on top.",
  },
  {
    q: "How long does assembly take for these file cabinets?",
    a: "Based on buyer feedback, most buyers report 30 to 60 minutes for DEVAISE and VASAGLE cabinets. All include hardware and illustrated instructions. Reading recent buyer reviews focused on assembly experience is a good way to set expectations before purchasing.",
  },
  {
    q: "Do these wood file cabinets hold legal-size files?",
    a: "Most 3-drawer options in this guide are described as fitting both letter and legal-size hanging files in the bottom drawer. Always verify the interior drawer dimensions in the specific product listing before purchasing, especially if you primarily use legal-size folders.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2-Drawer Wood File Cabinets in 2026" },
  { href: "/guide/best-2-drawer-wood-file-cabinets-under-150", title: "Best 2-Drawer Wood File Cabinets Under $150" },
  { href: "/guide/best-wood-file-cabinets-under-500", title: "Best Wood File Cabinets Under $500" },
];
