const BASE = "/images/guides/best-2-drawer-wood-file-cabinets";

export const guideSlug = "best-2-drawer-wood-file-cabinets";
export const guideTitle = "Best 2-Drawer Wood File Cabinets in 2026";
export const metaTitle = "Best 2-Drawer Wood File Cabinets in 2026";
export const metaDescription =
  "Best 2-drawer wood file cabinets in 2026: VASAGLE CUSTOS, VINGLI rattan lateral, VASAGLE honey brown. Lock options, pros, cons for home offices.";
export const lastUpdated = "2026-07-02";
export const readTime = "9 min";
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
    id: "vasagle-custos-snow-white",
    rank: 1,
    badge: "Best Overall",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Snow White",
    price: "~$62.99",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 3,262 reviews",
    imageUrl: `${BASE}/vasagle-custos-2-drawer-snow-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BRXQ1DKF?tag=theofficejournal-20",
    whyItWorks:
      "The VASAGLE CUSTOS Snow White is the pick for most buyers. The largest review base on this list by a significant margin gives the 4.0-star rating real statistical weight. At $62.99, it undercuts most competitors in this category while delivering a clean, neutral finish that works with white desks, light wood furniture, and minimalist home office setups. The two-drawer design handles everyday paperwork efficiently. Steel frame rails inside drawers provide smooth glide action. Open-frame metal legs in matte black add a modern two-tone detail that keeps the piece from looking like a purely utilitarian filing cabinet.",
    tradeoffs: [
      "No lock on this version - upgrade to Pick 2 if document security is needed",
      "No casters on this version",
      "Engineered wood core is sensitive to moisture - keep away from humid basements",
    ],
    skipIf:
      "Skip if you need to lock documents - the VASAGLE CUSTOS Locking White (Pick 2) adds a cylinder lock for about $17 more. Skip if you want a warm-toned finish - the VASAGLE Honey Brown (Pick 3) is the right call.",
    pros: [
      "Largest review base on this list (3,262 verified buyers) - quality confirmed at scale",
      "Most competitive price at ~$62.99",
      "Clean snow white finish easy to coordinate with most office furniture",
      "Compact footprint fits corners and under-desk spaces in smaller rooms",
    ],
    cons: [
      "No lock - not suitable for sensitive documents",
      "No casters - repositioning requires lifting",
      "Engineered wood is not as durable as solid hardwood at this price",
    ],
  },
  {
    id: "vasagle-custos-locking",
    rank: 2,
    badge: "Best With Lock",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet with Lock, White",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/vasagle-custos-2-drawer-locking-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C1CB1YJZ?tag=theofficejournal-20",
    whyItWorks:
      "If you want the VASAGLE CUSTOS look but need locking security, this is the natural upgrade. You pay a modest premium over the base model for a cylinder lock that secures both drawers simultaneously. Over 1,700 reviews at 4.0 stars confirms the locking version is a well-validated choice. The style is virtually identical to the non-locking version - same matte black open-frame legs, same snow white laminate finish. Two keys are included. The lock is consumer-grade: effective for preventing casual access but not a high-security mechanism.",
    tradeoffs: [
      "Consumer-grade cylinder lock - deterrent level, not tamper-proof security",
      "No casters on this version",
      "Slightly higher price than the non-locking Pick 1",
    ],
    skipIf:
      "Skip if you do not need a lock - the base VASAGLE CUSTOS (Pick 1) is more affordable. Skip if you want a warm or rustic finish with a lock - the VINGLI Rustic Gray (Pick 4) delivers lock plus a distinctive finish.",
    pros: [
      "Same VASAGLE CUSTOS quality and finish as Pick 1 with added security",
      "Cylinder lock secures both drawers simultaneously with one key",
      "Two keys included",
      "Well-validated by 1,700+ reviews at 4.0 stars",
    ],
    cons: [
      "Consumer-grade lock only - not high-security",
      "No casters",
      "Premium over the non-locking version",
    ],
  },
  {
    id: "vasagle-honey-brown",
    rank: 3,
    badge: "Best Farmhouse Style",
    name: "VASAGLE 2-Drawer Honey Brown File Cabinet",
    price: "~$85.49",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 1,310 reviews",
    imageUrl: `${BASE}/vasagle-2-drawer-honey-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09XF4Z5GP?tag=theofficejournal-20",
    whyItWorks:
      "Not every home office runs on white and gray. The VASAGLE honey brown farmhouse cabinet brings warmth and character to a space, pairing naturally with shiplap, natural wood accents, rattan baskets, and earthy color palettes. The 1,300-plus reviews at 4.0 stars back up the quality. Black iron-style metal frame legs provide farmhouse contrast against the warm laminate finish. If your desk is in a walnut, oak, or reclaimed-wood finish, this cabinet coordinates instead of clashing.",
    tradeoffs: [
      "No locking option available in this finish",
      "Higher price than Pick 1 and Pick 4 at ~$85.49",
      "Farmhouse finish may not suit minimalist or all-white office setups",
    ],
    skipIf:
      "Skip if you need a lock - no locking version is available in honey brown. Skip if your office is white or gray-dominant - the VASAGLE CUSTOS Snow White (Pick 1) coordinates better.",
    pros: [
      "Warm honey brown finish works well in farmhouse, cottage, and traditional interiors",
      "1,310 reviews at 4.0 stars - well-validated quality signal",
      "Black iron-style legs add farmhouse contrast",
      "Pairs well with warm wood desks in walnut or oak",
    ],
    cons: [
      "No lock option",
      "Higher price than the white VASAGLE options",
      "Laminate finish, not solid hardwood",
    ],
  },
  {
    id: "vingli-rustic-gray",
    rank: 4,
    badge: "Best Rustic Look With Lock",
    name: "VINGLI 2-Drawer Wood File Cabinet with Lock, Rustic Gray",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/vingli-2-drawer-lock-rustic-gray.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C8JKCZRR?tag=theofficejournal-20",
    whyItWorks:
      "The VINGLI Rustic Gray is the best value for anyone who wants document security and a distinctive finish. It includes a lock and carries a strong rating for the category. The rustic gray finish suits industrial, farmhouse-adjacent, and eclectic spaces better than standard smooth gray laminates - the aging effect is part of the surface treatment, not a defect. If you want a lock at an accessible price and do not need a white finish, this is the pick.",
    tradeoffs: [
      "Rustic gray finish may not suit minimalist or all-white offices",
      "Consumer-grade cylinder lock - deterrent level security only",
      "Verify current price and rating on Amazon before ordering",
    ],
    skipIf:
      "Skip if your office is white or gray-neutral and you want the cabinet to blend in - the VASAGLE CUSTOS Locking White (Pick 2) is the better match. Skip if you do not need a lock and want the widest review base - Pick 1 has more reviews.",
    pros: [
      "Lock included at a competitive price point",
      "Distinctive rustic gray finish suits industrial and farmhouse-adjacent aesthetics",
      "Strong review rating at time of research",
    ],
    cons: [
      "Rustic gray finish limits compatibility with all-white or minimalist setups",
      "Consumer-grade lock only",
      "Verify current availability before ordering",
    ],
  },
  {
    id: "vingli-rattan-oak",
    rank: 5,
    badge: "Most Unique Design",
    name: "VINGLI 2-Drawer Rattan Lateral File Cabinet, Oak",
    price: "Check Amazon",
    drawers: "2 Drawers Lateral",
    lock: "No Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/vingli-2-drawer-rattan-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BT9T2WW5?tag=theofficejournal-20",
    whyItWorks:
      "The VINGLI rattan lateral cabinet is genuinely unlike everything else on this list. The drawer fronts feature woven rattan panels set into an oak-finish wood frame, creating a boho-meets-natural-materials look popular in design-forward home offices. As a lateral cabinet, it is wider and lower than vertical 2-drawer options, which works well as a credenza-height piece beside a desk. Real woven rattan is a premium material touch at this price point. Note: this pick has a smaller review count than the other picks on this list - factor that into your confidence level.",
    tradeoffs: [
      "Lower review count than other picks - smaller sample size for quality validation",
      "No lock",
      "Pricier than the VASAGLE options",
      "Rattan panels can be more sensitive to humidity than standard laminate",
    ],
    skipIf:
      "Skip if you need a lock - no locking version is available. Skip if you want the most statistically validated quality signal - Pick 1 or Pick 3 have significantly more reviews. Skip if your office is modern or minimalist - the rattan detail is specifically a boho or natural-materials aesthetic.",
    pros: [
      "Most visually distinctive pick on this list - works as a decorative furniture piece",
      "Real woven rattan drawer fronts on an oak-finish frame",
      "Lateral format sits lower and wider, useful as a credenza-height side piece",
      "Works in boho, coastal, eclectic, and natural-material interior styles",
    ],
    cons: [
      "Smaller review base - less validated quality signal",
      "No lock",
      "Higher price point",
      "Rattan more sensitive to humidity than laminate surfaces",
    ],
  },
];

export const nonWoodAlternatives: FileCabinet[] = [
  {
    id: "devaise-metal-lock-white",
    rank: 0,
    badge: "Metal Alternative",
    name: "DEVAISE 2-Drawer Metal File Cabinet with Lock, White",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/devaise-2-drawer-mobile-lock-white.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08B68KQX9?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE metal cabinet carries strong ratings and arrives fully assembled. All-metal construction is more durable than engineered wood for heavy daily use. If you do not care about wood styling and want the most practical, durable option regardless of material, this is worth considering.",
    tradeoffs: [
      "Metal construction - does not provide wood aesthetics",
      "Heavier than engineered wood options",
    ],
    skipIf:
      "Skip if wood styling is important to your office decor. This is a purely practical alternative for buyers who prioritize durability over aesthetics.",
    pros: [
      "All-metal construction - more durable than engineered wood",
      "Arrives fully assembled",
      "Lock included",
    ],
    cons: [
      "No wood aesthetics",
      "Heavier than wood-finish options",
    ],
  },
  {
    id: "devaise-fabric-rustic",
    rank: 0,
    badge: "Fabric Alternative",
    name: "DEVAISE 2-Drawer Fabric File Cabinet, Rustic Brown",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/devaise-2-drawer-fabric-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09ZX5W7L5?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE fabric cabinet is the most affordable option in the roundup. The rustic brown fabric exterior is not wood-look, but it shows strong buyer satisfaction at its price point. Good for a closet office, utility storage area, or a secondary filing solution where aesthetics are secondary to budget.",
    tradeoffs: [
      "Fabric exterior - not wood appearance",
      "No lock",
      "Less polished appearance than wood or metal options",
    ],
    skipIf:
      "Skip if visual coordination with wood furniture matters. This is a budget-first alternative for secondary storage.",
    pros: [
      "Most affordable option in the roundup",
      "Strong buyer satisfaction at price point",
      "Good secondary storage solution",
    ],
    cons: [
      "Fabric exterior only - no wood appearance",
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
    q: "What is the best 2-drawer wood file cabinet overall?",
    a: "The VASAGLE CUSTOS Snow White at ~$62.99 is the best overall for most buyers. It has the largest review base on this list (over 3,200 ratings at 4.0 stars), a clean neutral finish, and the most competitive price. If you need a lock, the VASAGLE CUSTOS Locking White (Pick 2) adds a cylinder lock for a modest premium.",
  },
  {
    q: "Which 2-drawer wood file cabinet has the best lock?",
    a: "The VASAGLE CUSTOS Locking White (Pick 2) is the best locking option for white-finish buyers. The VINGLI Rustic Gray (Pick 4) is a strong value option that includes a lock in a distinctive rustic finish. Both use consumer-grade cylinder locks that secure both drawers simultaneously - effective as a deterrent, not a high-security mechanism.",
  },
  {
    q: "Is the VASAGLE CUSTOS file cabinet good quality?",
    a: "Yes, for the price range. The VASAGLE CUSTOS is built from engineered wood with a laminate finish - standard for this category at $60 to $80. Over 3,200 reviews at 4.0 stars confirms consistent quality across a large buyer sample. The most common wear points are drawer edges and corners, which is typical for laminate furniture in this price tier.",
  },
  {
    q: "What is the VINGLI rattan file cabinet like?",
    a: "The VINGLI 2-Drawer Rattan Lateral Oak is a wider, lower cabinet with woven rattan panel drawer fronts on an oak-finish wood frame. It is the most visually distinctive pick on this list and works well in boho, coastal, or eclectic home offices. Key consideration: verify the current review count before ordering - a lower review count means less statistical confidence in the rating compared to picks with 1,000-plus reviews.",
  },
  {
    q: "Are 2-drawer wood file cabinets good for small offices?",
    a: "Yes. A 2-drawer vertical cabinet sits at desk height or just below, so the top surface can serve double duty as a printer stand or side surface. Most 2-drawer vertical cabinets are 14 to 16 inches wide and 18 to 20 inches deep - compact enough for corners, under-desk spaces, and beside bookcases in smaller rooms.",
  },
  {
    q: "What is the difference between a vertical and lateral 2-drawer file cabinet?",
    a: "A vertical 2-drawer cabinet is taller and narrower, with drawers that pull straight out toward you. A lateral 2-drawer cabinet is wider and lower, with drawers that pull out from the side. Vertical cabinets use less floor space but stand taller; lateral cabinets have more of a furniture or credenza appearance and suit wider spaces. The VINGLI Rattan Oak (Pick 5) is the lateral option on this list.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-2-drawer-wood-file-cabinets-under-150", title: "Best 2-Drawer Wood File Cabinets Under $150" },
  { href: "/guide/best-wood-file-cabinets-under-200", title: "Best Wood File Cabinets Under $200" },
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-wood-file-cabinets-under-500", title: "Best Wood File Cabinets Under $500" },
];
