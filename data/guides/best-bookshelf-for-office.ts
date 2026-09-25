export const guideSlug = "best-bookshelf-for-office";
export const guideTitle = "The Best Bookshelves for Office: Picks and Trade-offs";
export const metaTitle = "Best Bookshelves for Office (2026)";
export const metaDescription =
  "A practical comparison of 9 bookshelves for office, focused on features, build and practical fit, and the trade-offs between them.";
export const mainKeyword = "bookshelf for office";
export const introParagraphs = [
  "An office bookshelf needs to do more than hold novels. It has to support binders, reference books, and files without sagging, and often needs at least some space to hide paperwork you don't want on display during a video call.",
  "Below are 8 office bookshelves we compared on weight capacity, build stability, and how much of their storage is open versus concealed, ranging from a 374-lb farmhouse cabinet to a compact desktop hutch that sits right on your desk.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg";

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
    id: "vasagle-liry-farmhouse-cabinet",
    rank: 1,
    badge: "Highest Capacity",
    name: "VASAGLE Liry 6-Tier Farmhouse Bookcase + 2-Door Cabinet",
    price: "$79.99",
    rating: "4.6",
    reviews: "2,298",
    imageUrl: "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H5VH3H97?tag=theofficejournal-20",
    description:
      "8 lbs, built from particleboard and MDF with three adjustable open shelves up top and an enclosed 2-door cabinet below for files and paperwork you'd rather keep out of view. Its cloud white and warm brown farmhouse styling looks intentional in a home office rather than purely functional.\n\n5-inch base is specifically designed to let a robot vacuum pass underneath, a small but useful detail for anyone who keeps their office floor on a cleaning schedule.\n\n2-door cabinet conceals clutter and paperwork.",
    specs: [
      "24.8\"W x 10\"D x 70.7\"H",
      "Particleboard + MDF",
      "374.8 lb total capacity (highest in this list)",
      "3 adjustable shelves + 2-door cabinet",
      "3.5\" robot-vacuum-friendly base",
    ],
    pros: [
      "Highest total capacity in this list at 374.8 lbs",
      "2-door cabinet conceals clutter and paperwork",
      "Robot-vacuum-friendly base clears easily",
      "Farmhouse styling looks great in a home office",
    ],
    cons: [
      "Larger footprint than the narrower VASAGLE picks",
      "Higher price point than most on this list",
      "Adjustable shelves are limited to the top section only",
    ],
    bestFor: "A home office that needs maximum capacity and a mix of open and hidden storage",
  },
  {
    id: "vasagle-6-tier-wide-office",
    rank: 2,
    badge: "Best-Selling",
    name: "VASAGLE 6-Tier Wide Bookcase",
    price: "$69.99",
    rating: "4.7",
    reviews: "6,779",
    imageUrl: "https://m.media-amazon.com/images/I/41zgzmQKuwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FR5SMRW?tag=theofficejournal-20",
    description:
      "7-star average, this is the best-selling pick in this entire list. An X-brace reinforcement keeps the wide 26-inch frame from racking under load, and a 22 lb per-shelf rating adds up to 132 lbs total across the alloy steel and particleboard build.\n\nIts industrial rustic brown and steel look suits a home office or a shared workspace equally well, and adjustable feet plus an anti-tip kit round out a build that's proven itself over thousands of reviews.\n\nX-brace reinforcement adds real rigidity.",
    specs: [
      "11.8\"D x 26\"W x 73.2\"H",
      "Particleboard + alloy steel",
      "X-brace reinforcement",
      "22 lb/shelf (132 lb total)",
      "Adjustable feet, anti-tip kit",
    ],
    pros: [
      "Best-selling pick with nearly 6,800 ratings",
      "X-brace reinforcement adds real rigidity",
      "Widest VASAGLE option at 26 inches",
      "Most industrial styling of the group",
    ],
    cons: [
      "Open-shelf design offers no concealed storage",
      "Wide footprint needs more wall space than the narrow VASAGLE",
      "Particleboard shelves, not solid wood",
    ],
    bestFor: "Buyers who want the most proven, best-reviewed office bookshelf",
  },
  {
    id: "vasagle-6-tier-narrow-office",
    rank: 3,
    badge: "Smallest Footprint",
    name: "VASAGLE 6-Tier Narrow Bookcase",
    price: "$49.99",
    rating: "4.7",
    reviews: "2,206",
    imageUrl: "https://m.media-amazon.com/images/I/41dxHGUL7hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08NDZ1119?tag=theofficejournal-20",
    description:
      "7 inches while keeping the same X-brace reinforcement and alloy steel frame. It's the pick to reach for in a small home office or a corner where the 26-inch version simply won't fit.\n\n7-star rating as its wider counterpart, and adjustable feet plus an anti-tip kit make it just as stable.",
    specs: [
      "11.8\"D x 15.7\"W x 73.2\"H",
      "Particleboard + alloy steel",
      "X-brace reinforcement",
      "Compact 15.7\" width",
      "Adjustable feet, anti-tip kit",
    ],
    pros: [
      "Smallest footprint among VASAGLE picks at 15.7 inches wide",
      "Same trusted X-brace reinforcement as the wider model",
      "Ideal for a compact home office",
      "Strong 4.7-star rating",
    ],
    cons: [
      "Narrower shelves hold fewer items per tier",
      "No enclosed storage",
      "Tall and narrow profile needs anchoring",
    ],
    bestFor: "A compact home office where floor space is limited",
  },
  {
    id: "ironck-6-tier-doors-office",
    rank: 4,
    badge: "Best for Document Storage",
    name: "IRONCK 6-Tier Bookshelf with Doors",
    price: "$84.99",
    rating: "4.5",
    reviews: "2,431",
    imageUrl: "https://m.media-amazon.com/images/I/41kTT7kaFgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BFFFKXRX?tag=theofficejournal-20",
    description:
      "IRONCK's doored bookshelf pairs four open display shelves with two concealing doors at the base, giving you a dedicated place to lock away office documents and files during video calls or when clients visit. An MDF build with a tipover-resistance device keeps the tall unit steady.\n\nIndustrial vintage black styling and strengthened hardware make it the most versatile pick here for buyers who want to combine open display with genuine hidden storage in one unit.\n\nIndustrial vintage styling suits a work office.",
    specs: [
      "23.8\"W x 9.3\"D x 70.9\"H",
      "MDF construction",
      "4 open shelves + 2 concealing doors",
      "132 lb total capacity",
      "Tipover-resistance device, industrial vintage styling",
    ],
    pros: [
      "2 concealing doors hide office documents",
      "Industrial vintage styling suits a work office",
      "Combines open display and closed storage in one unit",
      "Tipover-resistance device included",
    ],
    cons: [
      "Highest price point in this list",
      "9.3-inch depth limits shelf capacity per tier",
      "Doors add assembly steps compared to open-shelf options",
    ],
    bestFor: "An office that needs part of its storage locked away from view",
  },
  {
    id: "ironck-6-tier-open-office",
    rank: 5,
    badge: "Best-Selling IRONCK",
    name: "IRONCK 6-Tier Bookshelf",
    price: "$74.99",
    rating: "4.6",
    reviews: "4,474",
    imageUrl: "https://m.media-amazon.com/images/I/31zcIjQrqVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LM3FMXH?tag=theofficejournal-20",
    description:
      "It shares the same 132 lb total capacity and strengthened screw construction as the doored version but skips the cabinet for a cleaner, more open industrial look.\n\nA tipover-resistance device is included as standard, and the vintage black finish and clean lines make it an easy match for most office decor.",
    specs: [
      "23.8\"W x 9.3\"D x 70.8\"H",
      "MDF particleboard",
      "22 lb/shelf (132 lb total)",
      "Strengthened screws",
      "Tipover-resistance device included",
    ],
    pros: [
      "Best-selling IRONCK option with 4,474 ratings",
      "Clean industrial lines suit most office styles",
      "Strengthened screw construction for consistent load support",
      "Tipover-resistance device included",
    ],
    cons: [
      "No concealed storage, unlike the doored version",
      "9.3-inch depth limits larger book or binder storage",
      "Tall, narrow profile needs wall anchoring",
    ],
    bestFor: "Buyers who want IRONCK's proven build without paying for doors",
  },
  {
    id: "numenn-5-tier-vintage-office",
    rank: 6,
    badge: "Best Overall",
    name: "NUMENN 5-Tier Bookshelf",
    price: "$50.99",
    rating: "4.7",
    reviews: "4,299",
    imageUrl: "https://m.media-amazon.com/images/I/41p8nGWmCmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08DR542S9?tag=theofficejournal-20",
    description:
      "An X-shaped back rod removes the wobble that plagues cheaper metal-frame shelves.\n\nWaterproof and anti-scratch coatings help it survive the daily wear of an office environment, and its 150 lb total capacity across premium metal and teak particle board handles a real reference library.",
    specs: [
      "23.6\"L x 11.8\"W x 62.2\"H",
      "Premium metal + teak particle board",
      "X-shaped back rod",
      "30 lb/shelf (150 lb total)",
      "Waterproof + anti-scratch",
    ],
    pros: [
      "Best-selling vintage-tone pick for offices and study rooms",
      "Waterproof and scratch-resistant finish",
      "X-back rod eliminates wobble",
      "Strong 4.7-star rating",
    ],
    cons: [
      "No concealed storage",
      "Mid-range capacity compared to the wider units on this list",
      "Vintage tone won't match every office aesthetic",
    ],
    bestFor: "A well-rounded, trusted bookshelf for an office or study",
  },
  {
    id: "shintenchi-5-tier-office",
    rank: 7,
    badge: "Highest Per-Shelf Capacity",
    name: "Shintenchi 5-Tier Bookshelf",
    price: "$40.09",
    rating: "4.7",
    reviews: "1,816",
    imageUrl: "https://m.media-amazon.com/images/I/510fPP+lFkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BXDP61M2?tag=theofficejournal-20",
    description:
      "Shintenchi rates each shelf for 40 lbs, the highest per-shelf capacity among the standard 5-tier picks in this list, for a 200 lb total. FSC-certified eco wood pairs with a metal frame and X-shaped back rod for the same anti-wobble reinforcement found on pricier office bookshelves.\n\n6-inch frame gives you more usable shelf surface for binders and reference books than the narrower picks on this list.",
    specs: [
      "23.6\"W x 11.8\"D x 62.2\"H",
      "FSC-certified wood + metal",
      "40 lb/shelf (highest among standard 5-tier picks, 200 lb total)",
      "X-shaped back rod",
      "Waterproof + anti-scratch",
    ],
    pros: [
      "Highest per-shelf capacity among standard office bookshelves at 40 lbs",
      "FSC-certified eco wood",
      "X-back rod reinforcement",
      "Budget-friendly under $45",
    ],
    cons: [
      "No concealed storage",
      "Fewer reviews than the top-selling picks in this list",
      "Industrial look may not suit every office",
    ],
    bestFor: "An office that needs maximum per-shelf load capacity on a budget",
  },
  {
    id: "tangkula-desktop-hutch",
    rank: 8,
    badge: "Best Desktop Pick",
    name: "Tangkula Desktop Bookshelf with Hutch",
    price: "$79.99",
    rating: "4.5",
    reviews: "582",
    imageUrl: "https://m.media-amazon.com/images/I/51rHIYOuk6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C2KR6BVM?tag=theofficejournal-20",
    description:
      "The only desktop-mounted pick in this list, the Tangkula hutch sits directly on your desk surface and spans over a 27-inch monitor, turning otherwise wasted vertical desk space into five shelves of storage. Anti-falling baffles and two anti-tip wall anchors keep books and folders from sliding off during use.\n\nRounded corners and an engineered wood build make it a safe, practical addition to a desk that's short on room for a full floor-standing bookcase, ideal for organizing reference books, files, and desk supplies within arm's reach.",
    specs: [
      "37\"L x 10\"W x 29\"H",
      "Engineered wood",
      "5 shelves, fits over a 27\" monitor",
      "Anti-falling baffles",
      "2 anti-tip wall anchors, rounded corners",
    ],
    pros: [
      "Only desktop/countertop pick in this list",
      "Fits directly over a 27-inch monitor",
      "Integrates storage onto the desk surface itself",
      "Rounded corners for safety",
    ],
    cons: [
      "Limited to desktop use, not a floor-standing bookshelf",
      "Smaller total capacity than the floor units on this list",
      "Fewer reviews than the established brands here",
    ],
    bestFor: "A desk that has no floor space left for a standalone bookcase",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a bookshelf often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the bookshelf holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this bookshelf over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any bookshelf you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A bookshelf that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What's the best bookshelf for a home office?",
    a: "8 lbs and a mix of open shelves and an enclosed cabinet for hiding clutter.",
  },
  {
    q: "Which office bookshelf has concealed storage for documents?",
    a: "The IRONCK 6-Tier Bookshelf with Doors is the only pick in this list with concealing doors, letting you hide paperwork and files behind a closed cabinet front.",
  },
  {
    q: "Is there a bookshelf that fits on a desk instead of the floor?",
    a: "The Tangkula Desktop Bookshelf with Hutch sits directly on your desk and spans over a 27-inch monitor, making it the only desktop option in this list.",
  },
  {
    q: "Which bookshelf has the highest per-shelf weight capacity?",
    a: "The Shintenchi 5-Tier Bookshelf has the highest per-shelf capacity among standard 5-tier picks at 40 lbs per shelf, ideal for heavy binders and reference books.",
  },
  {
    q: "What's the most reviewed office bookshelf on this list?",
    a: "The VASAGLE 6-Tier Wide Bookcase is the best-selling pick with nearly 6,800 ratings and a 4.7-star average.",
  },
  {
    q: "Is a narrow or wide bookshelf better for a small office?",
    a: "7 inches wide offers the same build quality as the wider version in a much smaller footprint.",
  },
  {
    q: "How much weight can an office bookshelf actually hold per shelf?",
    a: "It depends on the material more than the shelf count. Particleboard typically manages 30-50 lbs per shelf, plywood around 50-80 lbs, and metal-reinforced frames like the VASAGLE Liry and Shintenchi can handle 70-80+ lbs per shelf, which matters if you're storing binders or file boxes instead of paperbacks.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-desk", title: "Best Bookshelf Desks (2026)" },
  { href: "/guide/best-bookshelf-with-doors", title: "Best Bookshelves with Doors (2026)" },
  { href: "/guide/best-bookshelf-for-bedroom", title: "Best Bookshelves for Bedroom (2026)" },
];

export const howWeEvaluated: { title: string; description: string }[] = [];

export const howToChoose: { subheading: string }[] = [];
