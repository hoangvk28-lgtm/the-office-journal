const BASE = "/images/guides/best-under-desk-footrests";

export const guideSlug = "best-under-desk-footrests";
export const guideTitle = "The Best Under-Desk Footrests for Everyday Work";
export const metaTitle = "Best Under-Desk Footrests for Home Offices (2026)";
export const metaDescription = "How 9 under-desk footrests compare on features, comfort and practical fit, with clear notes on who each one suits.";
export const lastUpdated = "2026-07-10";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export const products: GuideProduct[] = [
  {
    id: "everlasting-comfort",
    rank: 1,
    badge: "Best Overall",
    name: "Everlasting Comfort Foot Rest Cushion",
    price: "$29.78",
    rating: "4.6 stars",
    reviews: "28,108 ratings",
    imageUrl: `${BASE}/everlasting-comfort.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07PGLBCFG?tag=theofficejournal-20",
    description: "The Everlasting Comfort footrest operates in two modes: a stationary flat position for consistent elevation and a rocking position for active calf movement during long desk sessions. The memory foam top layer provides cushioning underfoot while the non-slip bottom keeps it in place on hard floors. It is the most affordable pick in this roundup and the one with the largest buyer feedback base confirming consistent performance. The dual-mode design means users can switch between static support and active rocking without buying two separate products.",
    specs: ["Dual-mode: stationary + rocker","Memory foam with mesh cover","Non-slip bottom","Machine washable cover","Universal size"],
    pros: ["4.6 stars with the largest buyer base in this roundup","Dual-mode stationary and rocker","Memory foam cushioning","Machine washable cover"],
    cons: ["Memory foam compresses over extended use","No height adjustment"],
    bestFor: "",
  },
  {
    id: "comfilife-adjustable",
    rank: 2,
    badge: "Best Adjustable Height",
    name: "ComfiLife Adjustable Height Foot Rest",
    price: "$39.99",
    rating: "4.6 stars",
    reviews: "13,977 ratings",
    imageUrl: `${BASE}/comfilife-adjustable.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08DHMMBFF?tag=theofficejournal-20",
    description: "The ComfiLife adjustable height footrest changes height to match different chair and desk configurations, making it practical for users who share a desk or alternate between different chairs. The high-density foam maintains its shape across multiple height settings and the removable cover is machine washable. It is the height-adjustable mid-range pick. Users who cannot find a fixed-height footrest at the correct lift for their setup benefit from the adjustability more than users who always work at the same desk and chair combination.",
    specs: ["Adjustable to multiple heights","Multi-purpose use","High-density foam","Non-slip bottom","Removable washable cover"],
    pros: ["4.6 stars","Adjustable height for different chair heights","Multi-purpose for under desk and as a seat cushion","Removable washable cover"],
    cons: ["$34.19 higher than single-mode alternatives","Fixed angle within each height setting"],
    bestFor: "",
  },
  {
    id: "huanuo-footrest",
    rank: 3,
    badge: "Best with Massage Rollers",
    name: "HUANUO Under Desk Footrest",
    price: "$29.99",
    rating: "4.2 stars",
    reviews: "13,143 ratings",
    imageUrl: `${BASE}/huanuo-footrest.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07L3RVF7C?tag=theofficejournal-20",
    description: "The HUANUO footrest provides three height settings and a massage roller strip on the top surface that users roll their feet over during desk sessions to improve circulation. The combination of height adjustment and active massage functionality in one unit differentiates it from simple foam platforms. It covers the mid-range price with added active functionality. Users who want to incorporate foot massage into their desk routine without buying a separate foot massager find the HUANUO a practical two-in-one option. Massage rollers for foot circulation. 2 stars lower than top picks.",
    specs: ["3 height settings","Massage roller surface","Non-slip bottom","Adjustable tilt","ABS frame"],
    pros: ["3 height settings","Massage rollers for foot circulation","Under $30","Large buyer base confirming function"],
    cons: ["4.2 stars lower than top picks","ABS frame less premium than foam alternatives"],
    bestFor: "",
  },
  {
    id: "ergofoam-standard",
    rank: 4,
    badge: "Best High-Density Foam",
    name: "ErgoFoam Ergonomic Foot Rest",
    price: "$33.95",
    rating: "4.6 stars",
    reviews: "6,579 ratings",
    imageUrl: `${BASE}/ergofoam-standard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07C8836PN?tag=theofficejournal-20",
    description: "The ErgoFoam standard footrest uses high-density foam developed with chiropractor input to provide firm, consistent support without compressing flat over time like standard pillow foam alternatives. The velvet cover is soft underfoot whether worn with socks or bare feet. It is the ergonomics-focused mid-range option. Users who prioritize long-term foam integrity and professional ergonomic validation over adjustability or active features choose the ErgoFoam for sustained daily use.",
    specs: ["High-density chiropractor-endorsed foam","Non-slip bottom","Velvet cover","Compact size","No assembly required"],
    pros: ["4.6 stars","Chiropractor-endorsed ergonomic design","High-density foam holds shape longer","Velvet cover soft underfoot"],
    cons: ["Fixed single height","No rocking mode","Velvet cover shows dirt faster"],
    bestFor: "",
  },
  {
    id: "strongtek-wood",
    rank: 5,
    badge: "Best Wood Rocker",
    name: "StrongTek Ergonomic Wood Foot Rest",
    price: "$39.99",
    rating: "4.7 stars",
    reviews: "3,135 ratings",
    imageUrl: `${BASE}/strongtek-wood.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07N1QCJGZ?tag=theofficejournal-20",
    description: "The StrongTek wood footrest is a rocker balance board rather than a foam cushion, using the curved wood base to create active calf and ankle engagement during desk sessions. The wood material does not compress, deform, or develop permanent indentations over years of use. Users who prefer firm, durable materials over foam and want the added circulation benefit of rocking movement find the StrongTek the clear premium choice. Wood material does not compress over time.",
    specs: ["Wood rocker balance board","Natural wood surface","Curved rocking bottom","Non-marking finish","No foam or fabric"],
    pros: ["4.7 stars, highest in this roundup","Wood material does not compress over time","Rocking balance board for calf activation","Natural aesthetic"],
    cons: ["Hardwood underfoot, not cushioned","Louder rocking sound than foam alternatives","$39.99 premium"],
    bestFor: "",
  },
  {
    id: "blistends-dual",
    rank: 6,
    badge: "Best Budget Adjustable",
    name: "BlissTrends Under Desk Footrest",
    price: "$19.99",
    rating: "4.4 stars",
    reviews: "8,952 ratings",
    imageUrl: `${BASE}/blistends-dual.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BFQX3YFY?tag=theofficejournal-20",
    description: "The BlissTrends footrest provides two height settings via a removable foam layer, letting users choose between a lower profile and a taller stance with the same base unit. The dual-layer foam design uses a softer top layer for comfort and a denser base layer for structural support. It is the most affordable height-adjustable option with a large confirmed buyer base. Users who want the flexibility of two height options without paying for the fully adjustable ComfiLife find the BlissTrends a practical mid-step. 4 stars with large buyer base.",
    specs: ["2 adjustable heights","Dual-layer foam","Soft top layer + firm base","Non-slip bottom","Machine washable cover"],
    pros: ["Under $20","4.4 stars with large buyer base","Dual-layer foam for comfort and support","Two height settings"],
    cons: ["Top layer softness varies by user weight","No rocking mode"],
    bestFor: "",
  },
  {
    id: "casazenith-6height",
    rank: 7,
    badge: "Best 6-Height Settings",
    name: "CasaZenith Under Desk Footrest",
    price: "$19.99",
    rating: "4.4 stars",
    reviews: "1,162 ratings",
    imageUrl: `${BASE}/casazenith-6height.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CW1ZYZ7S?tag=theofficejournal-20",
    description: "The CasaZenith footrest provides six height settings plus massage rollers in one unit, the highest height-setting count of any adjustable footrest in this roundup. The tilt adjustment changes the surface angle independently of the height, providing more fit options than single-axis adjustable alternatives. It combines height adjustment, tilt, and massage functionality at the lowest combined-feature price in this roundup. Users who want maximum adjustability on a budget find the CasaZenith covers more positions than any other option.",
    specs: ["6 height settings","Massage rollers","Adjustable tilt angle","Non-slip bottom","ABS frame + foam surface"],
    pros: ["6 height settings","Massage rollers for foot circulation","Tilt adjustment","Under $20"],
    cons: ["Newer product with fewer buyer ratings","4.4 stars","ABS frame"],
    bestFor: "",
  },
  {
    id: "ergofoam-xl",
    rank: 8,
    badge: "Best for Tall Desks",
    name: "ErgoFoam Tall Foot Rest for Tall Desks",
    price: "$54.95",
    rating: "4.7 stars",
    reviews: "588 ratings",
    imageUrl: `${BASE}/ergofoam-xl.webp`,
    amazonUrl: "https://www.amazon.com/dp/B093RF1S5J?tag=theofficejournal-20",
    description: "5-inch tall high-density foam block designed for users at tall standing-desk heights or bar stools where standard 3 to 5-inch footrests do not provide enough lift. The wide footprint accommodates both feet side by side at the elevated height. It is the premium option for a specific use case: users who need substantially more elevation than standard footrests provide. For average desk and chair height combinations, the standard ErgoFoam is sufficient. The XL addresses the tall desk and stool segment directly. 5 inch height for tall desk users.",
    specs: ["7.5 inch tall foam block","High-density foam","For tall desks and bar stools","Velvet cover","Wide footprint"],
    pros: ["4.7 stars","7.5 inch height for tall desk users","High-density foam holds shape","Handles more lift than any competitor"],
    cons: ["$54.95 premium price","Fewer ratings","Overkill for standard desk heights"],
    bestFor: "",
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a 8 best under-desk footrests (2026) often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the 8 best under-desk footrests (2026) holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this 8 best under-desk footrests (2026) over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any 8 best under-desk footrests (2026) you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A 8 best under-desk footrests (2026) that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: { q: string; a: string }[] = [
  { q: "Do under-desk footrests actually help with posture?", a: "Yes, when feet dangle without reaching the floor the thigh pressure on the seat edge reduces circulation and increases lower back tension. A footrest restores the natural foot-to-floor contact angle without requiring desk or chair height changes, which directly reduces the fatigue from dangling feet." },
  { q: "What height footrest do I need?", a: "The correct height depends on your chair and desk combination. With your chair at the proper height for your desk, measure the gap between your feet and the floor. That measurement is your target footrest height. Most standard under-desk footrests provide 2 to 4 inches of lift, which covers most common desk and chair combinations." },
  { q: "Are rocking footrests better than flat ones?", a: "Rocking footrests actively engage calf muscles and improve circulation, which is beneficial for users who sit for long consecutive hours. Flat stationary footrests provide consistent elevation and are quieter. For users who find active foot movement distracting, a flat footrest is the better choice." },
  { q: "Can I use a footrest at a standing desk?", a: "At a sitting height, a footrest works normally. The ErgoFoam XL is specifically designed for users whose standing desk is set to a taller sitting height or who use a bar stool at a standing desk. For standard floor-level sitting, the standard height footrests are sufficient." },
  { q: "How long do foam footrests last?", a: "High-density foam footrests (ErgoFoam) maintain their shape for 2 to 3 years of daily use. Standard memory foam compresses faster, typically within 1 to 2 years. Wood rockers (StrongTek) last indefinitely as wood does not compress. Removable and washable covers extend the usable life of foam footrests by keeping the cover in good condition." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-under-desk-footrests-for-short-people", title: "Best Under-Desk Footrests for Short People (2026)" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
  { href: "/guide/best-rocking-footrests-under-desk", title: "Best Rocking Footrests Under Desk (2026)" }
];
