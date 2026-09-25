const BASE = "/images/guides/best-solid-wood-file-cabinets";

export const guideSlug = "best-solid-wood-file-cabinets";
export const guideTitle = "The Best Solid Wood File Cabinets and Real-Wood Alternatives for Everyday Use";
export const metaTitle = "Best Solid Wood File Cabinets and Real-Wood Alternatives for Home Offices (2026)";
export const metaDescription =
  "A practical comparison of 8 solid wood file cabinets and real-wood alternatives, focused on features, build and practical fit, and the trade-offs between them.";
export const lastUpdated = "2026-07-02";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface WoodCabinet {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  format: string;
  finish: string;
  rating: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: WoodCabinet[] = [
  {
    id: "bush-home-key-west-white-oak",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "Bush Home Key West 2-Drawer Lateral File Cabinet, Pure White Oak",
    price: "$139.99",
    format: "Lateral, 2-Drawer",
    finish: "Pure White Oak",
    rating: "4.4 stars, 4,283 reviews",
    imageUrl: `${BASE}/bush-home-key-west-white-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B081ZP7MLY?tag=theofficejournal-20",
    whyItWorks:
      "The Bush Home Key West has the strongest combination of rating and review count in this category. The Pure White Oak name refers to the finish, not confirmed solid wood construction. Bush Furniture is known for furniture-grade engineered wood products with realistic wood-grain surfaces. This cabinet fits well in light, airy home offices beside white or light wood desks and in Scandinavian or minimalist setups. Locking drawers, letter and legal file compatibility, and full-extension slides are all included.",
    tradeoffs: [
      "Engineered wood, not solid hardwood",
      "White finish may show scuffs over time in high-use areas",
      "Pure White Oak name could mislead buyers expecting real oak",
    ],
    skipIf:
      "Skip if you need a warm cherry, walnut, or dark finish. The Sauder Palladia (Pick 2), Bush Cabot (Pick 4), or Sauder Clifford Place (Pick 5) cover warm and dark tones respectively.",
    pros: [
      "Highest review count in this roundup by a wide margin (4,283 reviews)",
      "4.4 stars is the highest rating in the top 5 picks",
      "Competitive price for the quality tier at $130.68",
      "Wide flat top suitable for printer or monitor riser",
      "Locking drawers and letter-plus-legal compatibility included",
    ],
    cons: [
      "Engineered wood, not solid hardwood",
      "White finish can show wear in high-traffic environments",
      "No warm wood tone available in this model",
    ],
  },
  {
    id: "sauder-palladia-vintage-oak",
    rank: 2,
    badge: "Best Vintage-Inspired Quality",
    name: "Sauder Palladia 2-Drawer Lateral File Cabinet, Vintage Oak Finish",
    price: "$289.99",
    format: "Lateral, 2-Drawer",
    finish: "Vintage Oak",
    rating: "4.0 stars, 1,741 reviews",
    imageUrl: `${BASE}/sauder-palladia-vintage-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B01MR4Q0WA?tag=theofficejournal-20",
    whyItWorks:
      "Sauder is one of the most recognized names in home office furniture. The Palladia line uses a vintage oak finish that replicates the worn, warm look of aged hardwood. 0 stars, it has enough real-world validation to recommend with confidence. This cabinet suits home offices with a warm, traditional, or farmhouse aesthetic. It pairs well with vintage wooden desks and dark wood desk setups.",
    tradeoffs: [
      "Engineered wood, not solid oak",
      "Higher price than some competitors for the material type at $289.99",
      "4.0 stars is lower than the top pick",
    ],
    skipIf:
      "Skip if you want the most affordable option. The Bush Key West (Pick 1) provides stronger trust signal at a much lower price. Skip if you need a cherry or dark espresso finish.",
    pros: [
      "Warm vintage finish is harder to find at this price tier",
      "Strong review sample of 1,741 from a trusted brand",
      "Pairs naturally with warm-toned and traditional wood desks",
      "Lateral format provides wide top surface for printer use",
    ],
    cons: [
      "Engineered wood, not solid oak",
      "$289.99 is a significant spend for an engineered wood product",
      "4.0 stars is adequate but not exceptional",
    ],
  },
  {
    id: "sauder-edge-water-estate-black",
    rank: 3,
    badge: "Best Dark Wood-Look Option",
    name: "Sauder Edge Water 2-Drawer Lateral Filing Cabinet, Estate Black Finish",
    price: "$205.81",
    format: "Lateral, 2-Drawer",
    finish: "Estate Black",
    rating: "4.3 stars, 979 reviews",
    imageUrl: `${BASE}/sauder-edge-water-estate-black.webp`,
    amazonUrl: "https://www.amazon.com/dp/B002ZJ9IJI?tag=theofficejournal-20",
    whyItWorks:
      "The Edge Water in Estate Black is the right pick for buyers who want a dark, rich wood-look finish rather than a light oak or cherry tone. 3 stars is solid validation for this price tier. This finish pairs well with dark walnut desks, espresso-finished furniture, and modern home offices with black metal accents. The flat, wide top surface doubles well as a printer stand.",
    tradeoffs: [
      "Engineered wood construction",
      "Estate Black may show dust more visibly than lighter finishes",
      "$205.62 is mid-range for engineered wood",
    ],
    skipIf:
      "Skip if you want a warm, light, or neutral finish. The Bush Key West (Pick 1) and Sauder Palladia (Pick 2) cover those tones. Skip if you are budget-conscious.",
    pros: [
      "Dark finish fills a gap the lighter-toned picks cannot",
      "4.3 stars across nearly 1,000 reviews",
      "Flat top surface usable as a printer stand",
      "Trusted Sauder quality at this price tier",
    ],
    cons: [
      "Engineered wood construction",
      "Dark finish shows dust more visibly",
      "$205.62 is on the higher side for engineered wood",
    ],
  },
  {
    id: "bush-home-cabot-harvest-cherry",
    rank: 4,
    badge: "Best Cherry Finish Lateral",
    name: "Bush Home Cabot 2-Drawer Lateral File Cabinet, Harvest Cherry",
    price: "$227.92",
    format: "Lateral, 2-Drawer",
    finish: "Harvest Cherry",
    rating: "4.3 stars, 972 reviews",
    imageUrl: `${BASE}/bush-home-cabot-harvest-cherry.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00E24N48K?tag=theofficejournal-20",
    whyItWorks:
      "The Bush Home Cabot in Harvest Cherry is one of the few readily available lateral file cabinets in a warm cherry finish. Cherry is a classic wood tone for traditional home offices and complements solid cherry or mahogany-finish desks. Like the other Bush Furniture products here, this is engineered wood with a cherry-toned laminate surface, not solid cherry wood. 3 stars reflects good buyer satisfaction for the price.",
    tradeoffs: [
      "Engineered wood, not solid cherry",
      "Cherry finish may read as corporate office furniture in some settings",
      "$207.26 is mid-range for this category",
    ],
    skipIf:
      "Skip if your office is white, minimalist, or modern. Cherry finish suits traditional setups. Skip if you need a dark walnut or espresso tone - the Sauder Edge Water (Pick 3) is the better fit.",
    pros: [
      "Cherry finish is hard to find at this price point",
      "Trusted Bush Furniture brand with 972 reviews at 4.3 stars",
      "Works with traditional home office and dark-wood desk pairings",
    ],
    cons: [
      "Engineered wood, not solid cherry",
      "Cherry finish limits pairing to traditional or classic setups",
      "$207.26 is mid-range pricing",
    ],
  },
  {
    id: "sauder-clifford-place-grand-walnut",
    rank: 5,
    badge: "Best Walnut Finish Option",
    name: "Sauder Clifford Place Lateral File, Grand Walnut Finish",
    price: "$303.99",
    format: "Lateral",
    finish: "Grand Walnut",
    rating: "4.0 stars, 465 reviews",
    imageUrl: `${BASE}/sauder-clifford-place-grand-walnut.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07C659WC3?tag=theofficejournal-20",
    whyItWorks:
      "The Clifford Place in Grand Walnut is Sauder's walnut-toned entry in the lateral file cabinet space. Walnut finishes are increasingly popular in home offices paired with mid-century modern or contemporary wood desks. 0 stars, it has a meaningful validation sample. 99 price is on the higher end for an engineered wood product, but Sauder's build quality at this tier is generally reliable.",
    tradeoffs: [
      "Engineered wood at a premium price of $303.99",
      "465 reviews is a smaller sample than the top picks",
      "4.0 stars is adequate but not exceptional",
    ],
    skipIf:
      "Skip if budget is under $200. The Bush Key West (Pick 1) is a stronger value at less than half the price. Skip if you do not specifically need the walnut finish.",
    pros: [
      "Walnut finish is on-trend for modern and mid-century home offices",
      "Reliable Sauder construction at this price tier",
      "Lateral format provides a wider top surface than vertical cabinets",
    ],
    cons: [
      "Engineered wood at a premium price",
      "465 reviews is a smaller sample",
      "4.0 stars is lower than most other picks",
    ],
  },
  {
    id: "realspace-vertical-mulled-cherry",
    rank: 6,
    badge: "Best Compact Vertical Pick",
    name: "Realspace 17-inch Vertical 2-Drawer File Cabinet, Mulled Cherry",
    price: "$161.01",
    format: "Vertical, 2-Drawer",
    finish: "Mulled Cherry",
    rating: "4.3 stars, 195 reviews",
    imageUrl: `${BASE}/realspace-vertical-mulled-cherry.webp`,
    amazonUrl: "https://www.amazon.com/dp/B094YS5K81?tag=theofficejournal-20",
    whyItWorks:
      "The Realspace vertical cabinet in Mulled Cherry is the only vertical-format option in this roundup. It suits smaller home offices where floor space is limited and a narrow footprint matters more than a wide lateral cabinet. The 17-inch depth keeps it compact. 3 stars, it has adequate validation. Vertical format means less floor space but full drawer clearance is required in front when accessing files.",
    tradeoffs: [
      "Smaller review sample at 195",
      "Vertical cabinets require pulling drawers fully out to access rear files",
      "Narrower top surface than lateral picks",
    ],
    skipIf:
      "Skip if you have enough wall space for a lateral cabinet and want a wider top surface for a printer. Skip if you need the widest review validation - Pick 1 has 20 times the buyer data.",
    pros: [
      "Vertical format takes up less floor space than lateral cabinets",
      "Competitive price in the cherry finish tier at $161.01",
      "17-inch depth suits tight spaces",
    ],
    cons: [
      "Smaller review sample than top picks",
      "Narrow top surface compared to lateral cabinets",
      "Drawers require full clearance to open",
    ],
  },
  {
    id: "martin-huntington-oxford-oak",
    rank: 7,
    badge: "Premium Fully Assembled Pick",
    name: "Martin Furniture Huntington Oxford 2-Drawer File Cabinet, Oak Finish, Fully Assembled",
    price: "$499.00",
    format: "Lateral, 2-Drawer",
    finish: "Oak Finish",
    rating: "4.2 stars, 143 reviews",
    imageUrl: `${BASE}/martin-huntington-oxford-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B002N1BMGA?tag=theofficejournal-20",
    whyItWorks:
      "Martin Furniture is positioned significantly above the other brands in this list, both in price and claimed build quality. The Huntington Oxford is fully assembled (no flat-pack assembly required) and uses an oak finish. Martin Furniture has a reputation for furniture-grade construction. Verify the current material specifications on the Amazon listing before ordering. If confirmed as a premium or solid wood product, it becomes the top pick by a wide margin for buyers who prioritize quality and convenience.",
    tradeoffs: [
      "$499 with only 143 reviews requires careful evaluation before purchasing",
      "Material type not explicitly verified as solid hardwood in listing data",
      "4.2 stars is the lowest rating in this roundup",
    ],
    skipIf:
      "Skip if your budget is under $300. Every other pick in this roundup provides strong value at a fraction of this price. Skip if you are comfortable with flat-pack assembly.",
    pros: [
      "Fully assembled - no flat-pack construction required",
      "Martin Furniture is known for furniture-grade construction",
      "Premium pick for buyers with a higher budget",
    ],
    cons: [
      "$499 with only 143 reviews is a significant investment without strong buyer data",
      "4.2 stars is the lowest rating in this roundup",
      "Material type requires verification before purchasing",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  format: string;
  finish: string;
  rating: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  format: p.format,
  finish: p.finish,
  rating: p.rating,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "Are any of these file cabinets actually solid wood?",
    a: "Based on available listing data, none of the products in this roundup are verified as solid hardwood. They are engineered wood products with realistic wood finishes. The Martin Furniture Oxford at $499 may use higher-quality materials, but this needs to be confirmed on the current listing before purchase. If you specifically need confirmed solid hardwood, custom furniture or specialty wood furniture retailers are a better search path than Amazon's mass-market catalog.",
  },
  {
    q: "What is the best quality wood file cabinet for home office?",
    a: "68 is a hard combination to argue against. If you want a warmer vintage-inspired finish, the Sauder Palladia earns its higher price through reliable brand quality and an attractive vintage oak look. For dark walnut aesthetic, the Sauder Clifford Place fills that gap.",
  },
  {
    q: "What is the difference between a veneer finish and a laminate finish?",
    a: "Veneer is a thin layer of real wood applied over an engineered wood core. Laminate is a printed film over the core. Both can look realistic, but veneer typically has more natural variation and a more tactile feel. Laminate is more resistant to scratching in many cases.",
  },
  {
    q: "Can I use a lateral file cabinet as a printer stand?",
    a: "Lateral cabinets have a wide, flat top surface that works well as a printer stand. Most standard home office inkjet printers sit comfortably on the top of the lateral picks in this list. Verify the weight capacity on the product listing before placing heavy equipment.",
  },
  {
    q: "Do engineered wood file cabinets last as long as solid wood?",
    a: "High-quality engineered wood furniture from established brands like Bush and Sauder is designed for 5 to 10 or more years of normal home office use. The main risk factors are moisture, overloading drawers, and damage to the laminate surface. Keep engineered wood furniture away from humidity and direct sunlight to maximize lifespan.",
  },
  {
    q: "What is the best cherry wood file cabinet?",
    a: "01 is a more affordable choice with a narrower footprint.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-wood-file-cabinets", title: "Best Wood File Cabinets in 2026" },
  { href: "/guide/best-lateral-wood-file-cabinets", title: "Best Lateral Wood File Cabinets" },
  { href: "/guide/best-wood-file-cabinets-under-200", title: "Best Wood File Cabinets Under $200" },
  { href: "/guide/best-wood-file-cabinets-under-500", title: "Best Wood File Cabinets Under $500" },
  { href: "/guide/best-vintage-wood-file-cabinets", title: "Best Vintage Wood File Cabinets" },
  { href: "/guide/best-2-drawer-wood-file-cabinets", title: "Best 2-Drawer Wood File Cabinets" },
];
