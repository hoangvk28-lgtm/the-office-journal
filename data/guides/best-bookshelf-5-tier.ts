export const guideSlug = "best-bookshelf-5-tier";
export const guideTitle = "The Best 5-Tier Bookshelves for Home Offices";
export const metaTitle = "Best 5-Tier Bookshelves for Home Offices (2026)";
export const metaDescription =
  "We compared 9 5-tier bookshelves on features, build and practical fit to help you choose the right one for your space.";
export const mainKeyword = "5 tier bookshelf";
export const introParagraphs = [
  "A 5-tier bookshelf hits a sweet spot for most rooms, tall enough to hold a substantial book or decor collection without dominating a wall the way a 6- or 7-tier unit can.",
  "Below are 8 five-tier bookshelves we compared on weight capacity, footprint, and assembly complexity, ranging from budget ladder shelves to no-assembly folding designs, useful for living rooms, home offices, and bedrooms alike.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41QNB+nv3uL._SL500_.jpg";

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

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "vasagle-barnet-ladder-shelf",
    rank: 1,
    badge: "Best Overall",
    name: "VASAGLE BARNET 5-Tier Ladder Shelf",
    price: "$49.99",
    rating: "4.7",
    reviews: "19,027",
    imageUrl: "https://m.media-amazon.com/images/I/41QNB+nv3uL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CMTMWC6?tag=theofficejournal-20",
    description:
      "An alloy steel frame paired with particleboard shelves gives it a 235 lb total weight capacity, the highest of any pick here, and an X-shaped support bar adds rigidity that keeps the ladder shape from wobbling under load.\n\nBetween the rustic brown shelving and ink black frame, it fits a wide range of decor styles, and an anti-tip kit plus adjustable feet round out a well-built budget pick.",
    specs: [
      "22\"W x 13.6\"D x 67.5\"H",
      "Alloy steel frame + particleboard",
      "X-shaped support bar",
      "235 lb total capacity",
      "Anti-tip kit, adjustable feet",
    ],
    pros: [
      "Highest weight capacity in this list at 235 lbs",
      "Most-reviewed pick with nearly 19,000 ratings",
      "X-shaped bar adds real rigidity",
      "Rustic brown and ink black finish suits most decor",
    ],
    cons: [
      "Ladder shape uses more floor space at the base than a straight bookcase",
      "No drawers or enclosed storage",
      "Particleboard shelves, not solid wood",
    ],
    bestFor: "Buyers who want the best-proven, highest-capacity 5-tier ladder shelf on the market",
  },
  {
    id: "numenn-vintage-baffle",
    rank: 2,
    badge: "Easiest Assembly",
    name: "NUMENN 5-Tier Bookshelf",
    price: "$50.99",
    rating: "4.7",
    reviews: "4,299",
    imageUrl: "https://m.media-amazon.com/images/I/41p8nGWmCmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08DR542S9?tag=theofficejournal-20",
    description:
      "The NUMENN adds a wooden baffle panel behind each shelf, a detail most competitors skip, which stops books and smaller items from sliding out the back of the unit rather than just the front. Engineered wood shelves sit on a metal frame rated for 150 lbs total, and the whole thing assembles in just 8 steps, noticeably fewer than most comparable bookshelves.\n\nAssembles in only 8 steps.",
    specs: [
      "23.6\"L x 11.8\"W x 62.2\"H",
      "Engineered wood + metal frame",
      "Wooden baffle backing on each shelf",
      "30 lb/shelf (150 lb total)",
      "8-step assembly",
      "Anti-rust coating, anti-tilt tool included",
    ],
    pros: [
      "Wooden baffle backing prevents items falling out the back",
      "Assembles in only 8 steps",
      "Premium anti-rust coating on the frame",
      "Strong 4.7-star rating across 4,299 ratings",
    ],
    cons: [
      "Lower total capacity (150 lbs) than the VASAGLE BARNET",
      "Vintage styling may not suit every room",
      "No drawers or enclosed storage",
    ],
    bestFor: "Buyers who want the fastest, easiest assembly plus a backing panel that stops items falling out the rear",
  },
  {
    id: "furologee-tall-compact",
    rank: 3,
    badge: "Most Compact",
    name: "Furologee 5-Tier Tall Bookshelf",
    price: "$39.99",
    rating: "4.7",
    reviews: "1,324",
    imageUrl: "https://m.media-amazon.com/images/I/41lGE4uN00L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPM7T7D8?tag=theofficejournal-20",
    description:
      "3 inches wide, the Furologee is the most compact pick in this list, built from P2 MDF with a metal frame that includes both X-bars and 4 side poles to guard against items falling off any edge, not just the front or back. It's rated for 30 lbs per shelf, 150 lbs total, and includes 4 adjustable feet along with an anti-tip kit. The matte rustic industrial finish and low price make it an easy pick for tight corners, hallways, or apartments where floor space is at a premium.",
    specs: [
      "15.3\"W x 10.6\"D x 48\"H",
      "P2 MDF + metal frame",
      "X-bars + 4 side poles",
      "30 lb/shelf (150 lb total)",
      "4 adjustable feet, anti-tip kit",
      "Waterproof finish",
    ],
    pros: [
      "Most compact footprint at 15.3\" wide",
      "X-bars plus 4 side poles guard all sides",
      "Low $39.99 price",
      "Strong 4.7-star rating",
    ],
    cons: [
      "Shortest pick in this list at 48\" tall",
      "Lower per-unit capacity than wider straight bookshelves",
      "No drawers or enclosed storage",
    ],
    bestFor: "Tight corners, hallways, or apartments where a narrow footprint matters most",
  },
  {
    id: "hoobro-arched",
    rank: 4,
    badge: "Best Design",
    name: "HOOBRO 5-Tier Arched Bookshelf",
    price: "$56.99",
    rating: "4.7",
    reviews: "373",
    imageUrl: "https://m.media-amazon.com/images/I/41whI381uZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5DH86H5?tag=theofficejournal-20",
    description:
      "The HOOBRO stands out visually with an arched top design that also happens to add real structural stability, tying the two side frames together at the top the way a straight crossbar would. Curved panels throughout continue the retro vintage look, and 13 inches of spacing between tiers accommodates taller items like binders or decorative pieces that wouldn't fit on tighter shelving.\n\nAssembly uses a tool-free hand-twist system, a step up from the usual screwdriver-and-Allen-key process, and an anti-tip kit is included for wall anchoring.",
    specs: [
      "16.9\"W x 11.8\"D x 69.3\"H",
      "Particleboard + matte black metal frame",
      "Arched top design",
      "13\" spacing between tiers",
      "Tool-free hand-twist assembly",
      "Anti-tip kit included",
    ],
    pros: [
      "Most distinctive arched-top silhouette in this list",
      "Genuinely tool-free hand-twist assembly",
      "13\" tier spacing fits taller items",
      "Retro vintage styling",
    ],
    cons: [
      "More expensive than several straight-shelf alternatives",
      "Smaller review sample than the top sellers",
      "Arched top uses slightly more vertical space per tier",
    ],
    bestFor: "Buyers who want a distinctive arched silhouette with tool-free assembly",
  },
  {
    id: "shintenchi-fsc",
    rank: 5,
    badge: "Highest Per-Shelf Capacity",
    name: "Shintenchi 5-Tier Bookshelf",
    price: "$40.09",
    rating: "4.7",
    reviews: "1,816",
    imageUrl: "https://m.media-amazon.com/images/I/510fPP+lFkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BXDP61M2?tag=theofficejournal-20",
    description:
      "The Shintenchi is built from FSC-certified wood, meeting sustainable-sourcing standards, and carries the highest per-shelf capacity among straight bookshelves in this list at 40 lbs per shelf, 200 lbs total. An X-shaped back rod runs across the rear of the frame, which the brand says eliminates wobble entirely rather than just reducing it. The waterproof, anti-scratch surface and anti-rust coated metal frame make it a durable pick at just, and the rustic brown finish matches several other picks in this list if you're buying multiple units for a matched look.",
    specs: [
      "23.6\"W x 11.8\"D x 62.2\"H",
      "FSC-certified wood + metal frame",
      "40 lb/shelf (200 lb total)",
      "X-shaped back rod",
      "Waterproof + anti-scratch, anti-rust coating",
    ],
    pros: [
      "Highest per-shelf capacity among straight bookshelves at 40 lbs",
      "FSC-certified sustainable wood",
      "X-shaped back rod eliminates wobble",
      "Strong 4.7-star rating across 1,816 ratings",
    ],
    cons: [
      "No drawers or enclosed storage",
      "Standard rustic brown finish, less distinctive than the arched or ladder designs",
      "Wider footprint than the compact Furologee pick",
    ],
    bestFor: "Buyers who want the sturdiest, highest per-shelf capacity straight bookshelf plus sustainable materials",
  },
  {
    id: "dumos-value",
    rank: 6,
    badge: "Best Value",
    name: "DUMOS 5-Tier Bookshelf",
    price: "$39.98",
    rating: "4.5",
    reviews: "1,581",
    imageUrl: "https://m.media-amazon.com/images/I/41YThBuGdBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CQP34Q9D?tag=theofficejournal-20",
    description:
      "The DUMOS is the cheapest full-size 5-tier bookshelf in this list, combining a metal frame with particle board shelving and the same waterproof, anti-scratch coating found on pricier picks. An anti-tipping tool and anti-rust metal frame come standard, and the brand includes an assembly video, which speeds up setup compared to written instructions alone. At 30 lbs per shelf, it handles a typical mixed book and decor collection without issue, and the rustic brown finish keeps it visually consistent with several other picks here. Assembly video speeds up setup.",
    specs: [
      "23.62\"W x 11.81\"D x 62.2\"H",
      "Metal + particle board",
      "30 lb/shelf",
      "Waterproof + anti-scratch coating",
      "Anti-tipping tool, anti-rust frame",
      "Assembly video included",
    ],
    pros: [
      "Best overall value, cheapest full-size pick",
      "Assembly video speeds up setup",
      "Waterproof, anti-scratch coating",
      "Anti-rust metal frame",
    ],
    cons: [
      "Lower rating than most other picks in this list at 4.5 stars",
      "30 lb/shelf capacity is lower than the Shintenchi",
      "No drawers or enclosed storage",
    ],
    bestFor: "Budget-focused buyers who want the cheapest full-size 5-tier bookshelf without giving up durability",
  },
  {
    id: "4nm-no-assembly-folding",
    rank: 7,
    badge: "Zero Assembly",
    name: "4NM No-Assembly 5-Tier Folding Bookshelf",
    price: "$149.99",
    rating: "4.6",
    reviews: "804",
    imageUrl: "https://m.media-amazon.com/images/I/51DwhuknToL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CQCB1MTT?tag=theofficejournal-20",
    description:
      "The 4NM is the only pick in this list that requires zero assembly, unfolding into a full 5-tier bookshelf in about 30 seconds straight out of the box. When you no longer need it, or you're moving, it folds back down to just 2 inches thick for flat storage or transport, a unique feature among the picks in this guide. P2 MDF panels over a metal frame are finished with scratch- and stain-resistant coating, and adjustable foot pads keep it level on uneven flooring. The premium price reflects the folding mechanism, but for renters who move frequently, it may be worth it.",
    specs: [
      "23\"W x 11.6\"D x 65.7\"H",
      "P2 MDF + metal frame",
      "Unfolds in 30 seconds, no tools",
      "Folds flat to 2\" thick for storage",
      "Scratch + stain resistant",
      "Adjustable foot pads",
    ],
    pros: [
      "Only pick that requires zero assembly",
      "Unfolds in 30 seconds",
      "Folds flat to 2\" thick for moving or storage",
      "Ideal for renters who relocate often",
    ],
    cons: [
      "Most expensive pick in this list at $149.99",
      "Folding mechanism adds complexity versus a fixed frame",
      "Fewer total ratings than the top sellers",
    ],
    bestFor: "Renters or frequent movers who want a 5-tier bookshelf that sets up and breaks down in seconds",
  },
  {
    id: "furologee-2-drawers",
    rank: 8,
    badge: "Best with Drawers",
    name: "Furologee 5-Tier Bookshelf + 2 Storage Drawers",
    price: "$56.99",
    rating: "4.6",
    reviews: "2,608",
    imageUrl: "https://m.media-amazon.com/images/I/41b+6PB4L4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B099W25JT6?tag=theofficejournal-20",
    description:
      "This Furologee is the only pick in this list built with drawers rather than fully open shelving, adding 2 removable fabric drawers at the base for items you'd rather keep out of sight. It carries the highest per-shelf capacity among 5-tier bookshelves with drawers in this guide at 55 lbs per shelf, and an adjustable middle tier lets you customize spacing for taller items.\n\nA backboard runs behind the shelving for added stability, and an anti-tip kit is included. For anyone who wants the 5-tier format but also wants a couple of enclosed drawers, this is the pick that delivers both.",
    specs: [
      "20\"W x 11.8\"D x 60.8\"H",
      "Metal + particleboard",
      "2 removable fabric drawers",
      "Adjustable middle tier",
      "55 lb/shelf",
      "Anti-tip kit, backboard stability",
    ],
    pros: [
      "Highest per-shelf capacity among 5-tier bookshelves with drawers at 55 lbs",
      "2 removable fabric drawers for hidden storage",
      "Adjustable middle tier",
      "Strong 4.6-star rating across 2,608 ratings",
    ],
    cons: [
      "Pricier than several open-shelf-only picks in this list",
      "Fabric drawers less durable than hard-sided cabinets",
      "Narrower shelves than the wider straight bookshelves here",
    ],
    bestFor: "Buyers who want a 5-tier bookshelf with built-in drawer storage rather than fully open shelving",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a 5 tier bookshelf often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the 5 tier bookshelf holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this 5 tier bookshelf over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any 5 tier bookshelf you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A 5 tier bookshelf that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What is the best 5-tier bookshelf overall?",
    a: "The VASAGLE BARNET 5-Tier Ladder Shelf (Pick 1) is the best overall choice, with the highest weight capacity in this list at 235 lbs and nearly 19,000 ratings backing its 4.7-star average.",
  },
  {
    q: "Which 5-tier bookshelf requires the least assembly?",
    a: "The 4NM No-Assembly 5-Tier Folding Bookshelf (Pick 7) requires zero assembly, unfolding in about 30 seconds, while the NUMENN (Pick 2) assembles in just 8 steps if you prefer a fixed frame.",
  },
  {
    q: "Is there a 5-tier bookshelf with drawers in this list?",
    a: "Yes, the Furologee 5-Tier Bookshelf + 2 Storage Drawers (Pick 8) is the only pick with built-in drawer storage, carrying the highest per-shelf capacity among drawer-equipped 5-tier bookshelves at 55 lbs.",
  },
  {
    q: "Which 5-tier bookshelf is most compact?",
    a: "3 inches wide, ideal for tight corners or narrow hallways.",
  },
  {
    q: "Is there a sustainably sourced 5-tier bookshelf?",
    a: "Yes, the Shintenchi 5-Tier Bookshelf (Pick 5) is built from FSC-certified wood and also carries the highest per-shelf capacity among straight bookshelves in this list at 40 lbs.",
  },
  {
    q: "What is the most affordable 5-tier bookshelf in this list?",
    a: "The DUMOS 5-Tier Bookshelf (Pick 6) is the cheapest full-size option at $39.98, followed closely by the Furologee 5-Tier Tall Bookshelf (Pick 3) at $39.99.",
  },
  {
    q: "How much space should I leave between shelves on a 5-tier bookshelf?",
    a: "10-11 inches works for most standard hardcovers and paperbacks, while 8-9 inches is enough if your collection is paperbacks only. If you need room for oversized books or binders, look for a pick with an adjustable tier, like the Furologee with 2 Storage Drawers, rather than a fixed frame built for standard spacing.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-with-drawers", title: "Best Bookshelves with Drawers in 2026" },
  { href: "/guide/best-bookshelf-with-storage", title: "Best Bookshelves with Storage in 2026" },
  { href: "/guide/best-bookshelf-with-doors", title: "Best Bookshelves with Doors in 2026" },
];
