const BASE = "/images/guides/best-2-drawer-wood-file-cabinets-under-150";

export const guideSlug = "best-2-drawer-wood-file-cabinets-under-150";
export const guideTitle = "Best 2-Drawer Wood File Cabinets Under $150 (2026)";
export const metaTitle = "Best 2-Drawer Wood File Cabinets Under $150 (2026)";
export const metaDescription =
  "Best 2-drawer wood file cabinets under $150: VASAGLE CUSTOS, VINGLI rustic gray, DEVAISE gray oak. Lock options, pros, cons for compact home offices.";
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
      "The VASAGLE CUSTOS Snow White has the largest review base on this list by a wide margin. With over 3,200 ratings at 4.0 stars and the most affordable entry price at $62.99, this is the default recommendation for most buyers. Clean white finish works in most home office styles. For a small desk setup, it fits neatly beside or under a desk without dominating the space. At this sales volume, any systematic quality problem would generate a visible pattern of negative reviews - the fact that 4.0 stars holds across 3,200+ purchases means the quality is consistent and well-documented.",
    tradeoffs: [
      "No lock - documents are not secured against casual access",
      "No casters on this version - not mobile",
      "Engineered wood core is moisture-sensitive - avoid humid environments",
    ],
    skipIf:
      "Skip if you need a lock - the VASAGLE CUSTOS Locking White (Pick 2) adds a lock for about $17 more. Skip if you want a warm-toned finish - the VASAGLE Honey Brown (Pick 4) suits farmhouse and earthy setups.",
    pros: [
      "Largest review base on this list at 3,262 reviews",
      "Most affordable entry at ~$62.99",
      "Clean white finish is versatile across most office styles",
      "Compact footprint for small offices and desk-adjacent placement",
    ],
    cons: [
      "No lock - no document security",
      "No mobility options on this version",
      "Engineered wood core - not real wood grain through the material",
    ],
  },
  {
    id: "vasagle-custos-locking-white",
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
      "This is the natural upgrade from the base VASAGLE CUSTOS for anyone who needs document security. The cylinder lock secures both drawers simultaneously with one key. Over 1,700 reviews at 4.0 stars validates the quality claim. Style is identical to the non-locking version - same clean white finish, same compact dimensions. Locks on cabinets in this price range are consumer-grade deterrents, not high-security mechanisms. They prevent casual access but are not designed to resist a determined effort. For remote workers storing tax records, contracts, or sensitive documents, this level of protection is usually sufficient.",
    tradeoffs: [
      "Lock is basic consumer-grade, not high-security - deters casual access only",
      "Premium over the non-locking version - verify current price difference on Amazon",
      "Review count lower than the base VASAGLE CUSTOS",
    ],
    skipIf:
      "Skip if you do not need document security - the non-locking VASAGLE CUSTOS (Pick 1) is the better value. Skip if you want a rustic finish with a lock at the same budget - the VINGLI Rustic Gray (Pick 3) offers a lock at a competitive price.",
    pros: [
      "Lock secures both drawers with one key",
      "1,700+ reviews provides strong buyer confidence",
      "Same clean white VASAGLE aesthetic as the base model",
    ],
    cons: [
      "Consumer-grade lock only - not tamper-proof",
      "Higher price than the non-locking base model",
    ],
  },
  {
    id: "vingli-rustic-gray",
    rank: 3,
    badge: "Best Rustic Look",
    name: "VINGLI 2-Drawer Wood File Cabinet with Lock, Rustic Gray",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/vingli-2-drawer-lock-rustic-gray.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C8JKCZRR?tag=theofficejournal-20",
    whyItWorks:
      "The VINGLI Rustic Gray is the standout value pick for buyers who need a lock. Based on buyer feedback at the time of research, it matched the VASAGLE base model on price but added a lock and edged it out on star rating at 4.1 stars across 1,333 reviews. That made it the best combination of price, lock, and rating among picks in this guide. The rustic gray finish suits industrial, farmhouse-adjacent, and eclectic home office spaces where white or honey brown would look out of place.",
    tradeoffs: [
      "Rustic gray finish may not suit modern or all-white office aesthetics",
      "No mobility options - not rolling",
      "Verify current pricing on Amazon as it fluctuates",
    ],
    skipIf:
      "Skip if your office is modern or minimalist and a gray rustic finish would not fit. Skip if you specifically want a white finish with a lock - the VASAGLE CUSTOS Locking White (Pick 2) is the right call.",
    pros: [
      "Includes a lock at a competitive price point",
      "4.1-star rating is among the highest for picks with over 1,000 reviews",
      "Rustic gray is a visually interesting finish for industrial and farmhouse setups",
    ],
    cons: [
      "Rustic gray finish limits style versatility",
      "No casters or mobility",
    ],
  },
  {
    id: "vasagle-honey-brown",
    rank: 4,
    badge: "Best Farmhouse Style",
    name: "VASAGLE 2-Drawer Honey Brown Farmhouse File Cabinet",
    price: "~$85.49",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "4.0 stars, 1,310 reviews",
    imageUrl: `${BASE}/vasagle-2-drawer-honey-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09XF4Z5GP?tag=theofficejournal-20",
    whyItWorks:
      "The honey brown farmhouse version fills a gap that white and gray models leave open. Warm brown tone is rare in this price category and pairs naturally with medium-brown wood desks, reclaimed wood accents, and earthy decor. 1,310 reviews at 4.0 stars confirms consistent quality at an accessible price. For buyers furnishing a farmhouse-style, boho, or eclectic home office, this is the only pick on the list that matches that aesthetic at under $150.",
    tradeoffs: [
      "No lock - documents are not secured",
      "Warm honey brown finish limits versatility for modern or minimalist spaces",
      "Higher price than the base VASAGLE CUSTOS",
    ],
    skipIf:
      "Skip if you need a lock - none of the VASAGLE Honey Brown variants include one. Skip if your office is modern, minimalist, or white-dominant - the warm brown finish will not match.",
    pros: [
      "Warm honey brown finish is rare in this price tier",
      "1,310 reviews at 4.0 stars confirms consistent quality",
      "Natural pairing with farmhouse and earthy desk setups",
    ],
    cons: [
      "No lock",
      "Warm finish not suited to modern or all-white office styles",
    ],
  },
  {
    id: "devaise-gray-oak",
    rank: 5,
    badge: "Best Gray Oak Finish",
    name: "DEVAISE 2-Drawer Wood File Cabinet with Lock, Gray Oak",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "With Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/devaise-2-drawer-lock-gray-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DF7JS6JV?tag=theofficejournal-20",
    whyItWorks:
      "The DEVAISE Gray Oak carries a high star rating at the time of research - 4.4 stars - the highest on the list among wood picks. The caveat is a limited review count of 228, which is a smaller sample compared to the other picks. The rating may shift as more buyers weigh in. Worth considering if the gray oak finish matches your space and you are comfortable with a less validated product. Includes a lock and a finish that bridges modern and rustic styles.",
    tradeoffs: [
      "Limited review count - 228 reviews is a smaller sample than other picks",
      "Rating may shift as more buyers review the product",
      "Higher price than comparable non-locking options",
    ],
    skipIf:
      "Skip if review volume is important to you - the VASAGLE CUSTOS Snow White (Pick 1) has 14 times more reviews. Skip if you do not need a gray oak finish - the VINGLI Rustic Gray (Pick 3) offers a lock with more buyer validation.",
    pros: [
      "High star rating at time of research (4.4 stars)",
      "Includes a lock",
      "Gray oak finish bridges modern and rustic styles",
    ],
    cons: [
      "Limited review pool - less validated than top picks",
      "Rating may not be stable with few reviews",
    ],
  },
  {
    id: "fatigos-2drawer",
    rank: 6,
    badge: "Budget Pick",
    name: "FATIGOS 2-Drawer Wood File Cabinet",
    price: "Check Amazon",
    drawers: "2 Drawers",
    lock: "No Lock",
    rating: "Check Amazon",
    imageUrl: `${BASE}/fatigos-2-drawer-wood-vertical.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D41LHRP5?tag=theofficejournal-20",
    whyItWorks:
      "The FATIGOS is included for completeness and as a budget alternative when the higher-reviewed picks are out of stock or priced higher than expected. With only 72 reviews at the time of research, it has the least buyer validation on this list. The 4.0-star rating does not yet have enough data behind it to be as reliable as the top picks. Consider it only if the other options are unavailable or the specific aesthetic fits your space and your budget is especially tight.",
    tradeoffs: [
      "Least validated pick on the list - 72 reviews at time of research",
      "No lock",
      "Limited data on long-term build quality compared to VASAGLE or VINGLI",
    ],
    skipIf:
      "Skip if review validation matters - the VASAGLE CUSTOS Snow White (Pick 1) has 45 times more reviews at the same star rating. Consider the FATIGOS only if the top picks are unavailable or out of stock.",
    pros: [
      "Budget-friendly option when higher-reviewed picks are unavailable",
      "Wood-look finish",
      "Vertical orientation suits narrow spaces",
    ],
    cons: [
      "72 reviews is a very limited validation sample",
      "No lock",
      "Less established brand compared to VASAGLE or VINGLI",
    ],
  },
];

export const metalAlternative: FileCabinet = {
  id: "devaise-metal-white",
  rank: 0,
  badge: "Metal Alternative",
  name: "DEVAISE 2-Drawer Metal File Cabinet with Lock, White",
  price: "Check Amazon",
  drawers: "2 Drawers",
  lock: "With Lock",
  rating: "4.5 stars, 1,667 reviews",
  imageUrl: `${BASE}/devaise-2-drawer-metal-lock-white.webp`,
  amazonUrl: "https://www.amazon.com/dp/B08B68KQX9?tag=theofficejournal-20",
  whyItWorks:
    "The DEVAISE Metal White leads the entire page on both rating and validated review count - 4.5 stars across 1,667 reviews. It arrives fully assembled with no flat-pack build required. If wood styling is not a priority, this is arguably the smartest purchase in the under-$150 file cabinet category. The white powder-coated finish is clean and professional and blends with modern home office setups. The trade-off is that it is steel construction, not wood-look laminate.",
  tradeoffs: [
    "Metal construction - no wood-look finish",
    "Fully assembled means larger shipping box - confirm delivery access before ordering",
    "Heavier than engineered wood alternatives",
  ],
  skipIf:
    "Skip if you specifically need a wood-look or warm-toned finish to match your desk setup. Skip if a wood-grain aesthetic is the reason you are reading this guide.",
  pros: [
    "4.5 stars across 1,667 reviews - highest rating and strongest validation in this comparison",
    "Fully assembled - no flat-pack build required",
    "Includes a lock",
    "Clean white powder-coated finish",
  ],
  cons: [
    "Metal construction - not wood-look",
    "Heavier than engineered wood picks",
  ],
};

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
    q: "Are any of these 2-drawer file cabinets solid wood?",
    a: "No. All picks in this guide are built from engineered wood (MDF or particleboard) with a laminate surface. Solid wood file cabinets cost considerably more than $150. We call this out clearly for each pick.",
  },
  {
    q: "Which 2-drawer wood file cabinet under $150 has the best reviews?",
    a: "The VASAGLE CUSTOS Snow White has the largest review base with over 3,200 ratings at 4.0 stars. For locking options, the VINGLI Rustic Gray had the highest combined rating and review count at the time of research. The DEVAISE Gray Oak has a higher star rating but fewer total reviews.",
  },
  {
    q: "Which 2-drawer file cabinet under $150 includes a lock?",
    a: "Three picks in this guide include locks: the VASAGLE CUSTOS Locking White, the VINGLI Rustic Gray, and the DEVAISE Gray Oak. The VINGLI offers the best value - a lock at a competitive price point with strong buyer ratings. The metal alternative, the DEVAISE Metal White, also includes a lock and has the highest overall rating on the page.",
  },
  {
    q: "Do these 2-drawer file cabinets fit legal-size files?",
    a: "Most are described as fitting both letter and legal-size hanging files, but drawer depth varies. Always confirm the interior drawer dimensions on the specific product page before purchasing, especially if you primarily use legal-size folders.",
  },
  {
    q: "How hard are these 2-drawer file cabinets to assemble?",
    a: "Most buyers report 30 to 60 minutes with standard hand tools. All include hardware and illustrated instructions. The included hardware quality is mixed at this price point - reading a few recent buyer reviews focused on the assembly experience before purchasing is worthwhile.",
  },
  {
    q: "What is the difference between a wood-look and a metal file cabinet at this price?",
    a: "Wood-look cabinets use engineered wood (MDF or particleboard) with a laminate veneer. They provide a warmer aesthetic that matches wood desks better but are heavier per cubic inch and sensitive to moisture. Metal cabinets like the DEVAISE Metal White are lighter, more moisture-resistant, and typically arrive assembled. The metal option on this page outperforms all wood picks on both star rating and review count.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2-Drawer Wood File Cabinets in 2026" },
  { href: "/guide/best-wood-file-cabinets-under-200", title: "Best Wood File Cabinets Under $200" },
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-wood-file-cabinets-under-500", title: "Best Wood File Cabinets Under $500" },
];
