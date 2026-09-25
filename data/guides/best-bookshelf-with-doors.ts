export const guideSlug = "best-bookshelf-with-doors";
export const guideTitle = "The Best Bookshelves with Doors: Our Picks";
export const metaTitle = "Best Bookshelves with Doors (2026)";
export const metaDescription =
  "How 9 bookshelves with doors compare on features, build and practical fit, with clear notes on who each one suits.";
export const mainKeyword = "bookshelf with doors";
export const introParagraphs = [
  "A bookshelf with doors hides clutter and keeps dust off stored items while still leaving room for open display shelves above or beside the enclosed section. Styles range from simple cabinet doors on an industrial frame to sliding barn doors and more formal framed glass or wood panels.",
  "Below are 8 bookshelves with doors we compared on weight capacity, door style, and how much of the unit stays open versus enclosed, useful for living rooms, home offices, or any space where you want a bookcase that can hide as much as it shows.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "11 min";
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
    id: "vasagle-liry-farmhouse-6-tier",
    rank: 1,
    badge: "Best Overall",
    name: "VASAGLE Liry Farmhouse 6-Tier Bookshelf (White + Warm Brown)",
    price: "$79.99",
    rating: "4.7",
    reviews: "2,298",
    imageUrl: "https://m.media-amazon.com/images/I/51P0hhxgYxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H5VH3H97?tag=theofficejournal-20",
    description:
      "The VASAGLE Liry pairs 2 open display tiers on top with a fully enclosed 2-door cabinet below, giving you both visible shelf space for decor and hidden storage for clutter in one unit. 8 lbs, backed by 3 adjustable shelves with 5 different height options to fit taller books or bins.\n\n5 inches of clearance means you can keep the floor underneath clean without moving the bookcase, a small detail that makes a real difference in day-to-day upkeep. The two-tone Cloud White and Warm Brown finish gives it a farmhouse look that fits a wide range of living rooms and home offices.\n\nRobot-vacuum-friendly base for easy cleaning.",
    specs: [
      "24.8\"W x 10\"D x 70.7\"H",
      "Engineered wood (P2 MDF)",
      "2 open tiers + 2-door bottom cabinet",
      "3 adjustable shelves, 5 height options",
      "374.8 lb total capacity (highest in this guide)",
      "3.5\" robot-vacuum-friendly base",
    ],
    pros: [
      "Highest weight capacity in this guide at 374.8 lbs",
      "Robot-vacuum-friendly base for easy cleaning",
      "Attractive two-tone farmhouse finish",
      "Adjustable shelves with 5 height options",
    ],
    cons: [
      "Only 2 tiers stay open for display versus fully open bookcases",
      "Shallow 10\" depth limits larger book collections",
      "Cabinet doors add assembly steps versus fully open shelving",
    ],
    bestFor: "Buyers who want the highest weight capacity plus a clean, easy-to-clean farmhouse design",
  },
  {
    id: "shintenchi-6-tier-industrial-doors",
    rank: 2,
    badge: "Best Value",
    name: "Shintenchi 6-Tier Industrial Bookshelf with Doors (Black)",
    price: "$79.99",
    rating: "4.3",
    reviews: "746",
    imageUrl: "https://m.media-amazon.com/images/I/31OuUlfdpbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DLB54QRV?tag=theofficejournal-20",
    description:
      "The Shintenchi matches the VASAGLE on price while taking a more industrial approach, mixing 4 open shelves with 2 fully enclosed shelves behind doors for a balance tilted toward visible display.\n\n3 inches deep, it has the shallowest footprint of any pick in this guide, making it a good fit for narrow hallways or tight corners where a deeper bookcase wouldn't work. Total capacity comes in at 300 lbs across the frame.",
    specs: [
      "23.6\"W x 9.3\"D x 70.9\"H",
      "P2 MDF + metal frame",
      "4 open shelves + 2 enclosed shelves with doors",
      "300 lb weight capacity",
      "Stability device included",
      "Shallow 9.3\" footprint",
    ],
    pros: [
      "Best value pick with doors, tied for lowest price at $79.99",
      "4 open plus 2 enclosed shelves for balanced storage",
      "Shallowest footprint in this guide at 9.3 inches",
      "Includes a stability device for the tall frame",
    ],
    cons: [
      "Lowest rating among the enclosed-cabinet picks",
      "Shallow depth limits how much fits on each shelf",
      "Industrial black look may not suit every room",
    ],
    bestFor: "Buyers who want an affordable bookshelf with doors that fits into a narrow or tight space",
  },
  {
    id: "ironck-71in-doors-3-drawers",
    rank: 3,
    badge: "Most Storage Variety",
    name: "IRONCK 71\" Bookshelf + Doors + 3 Drawers (Black)",
    price: "$134.99",
    rating: "4.6",
    reviews: "294",
    imageUrl: "https://m.media-amazon.com/images/I/5190O+yC6RL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DP7DR8TM?tag=theofficejournal-20",
    description:
      "The IRONCK combines 3 open tier shelves, 1 enclosed cabinet door, and 3 fabric drawers, the most complete mix of storage types in this guide. That variety lets it double as a bookshelf, a small file cabinet, or a display case depending on which section you use for what, useful if you have several different kinds of items to organize.\n\nMDF construction is scratch-resistant, and built-in anti-falling devices plus a reinforced load-bearing base add stability given the tall 71-inch frame. Each shelf handles up to 44 lbs, solid capacity for a unit balancing this many different storage formats.\n\nDoubles as a bookshelf, file cabinet, or display case.",
    specs: [
      "29.5\"L x 11.8\"W x 71\"H",
      "MDF construction",
      "3 open shelves + 1 cabinet door + 3 fabric drawers",
      "44 lb per shelf capacity",
      "Scratch-resistant finish",
      "Anti-falling devices + load-bearing base",
    ],
    pros: [
      "Most complete storage mix: drawers, a cabinet door, and open shelves",
      "Doubles as a bookshelf, file cabinet, or display case",
      "Scratch-resistant MDF construction",
      "Reinforced load-bearing base for stability",
    ],
    cons: [
      "Only 1 door versus 2 on several other picks",
      "Smaller review sample than the top 2 picks",
      "Mixing 3 storage types means less pure shelf space than dedicated open bookcases",
    ],
    bestFor: "Buyers who want one unit that handles books, files, and display items with drawers and a door",
  },
  {
    id: "sauder-palladia-library-bookcase",
    rank: 4,
    badge: "Most Classic Design",
    name: "Sauder Palladia Library Bookcase with Doors (Vintage Oak)",
    price: "$258.74",
    rating: "4.4",
    reviews: "1,775",
    imageUrl: "https://m.media-amazon.com/images/I/41S845HyZML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01NARXXJ1?tag=theofficejournal-20",
    description:
      "The Sauder Palladia takes the most traditional approach in this guide, with framed double doors that fully enclose the entire bookcase rather than just a lower section, ideal if you want to hide clutter completely rather than leave any shelves on display. Five total compartments include 2 adjustable shelves so you can customize the interior layout. A Vintage Oak finish with black hardware gives it a classic library look that fits more formal or traditional home offices, and hidden cord access lets you route electronics behind the closed doors without unsightly cables. It's also the only pick in this guide backed by a 5-year warranty.",
    specs: [
      "29.38\"W x 13.88\"D x 71.85\"H",
      "Engineered wood",
      "Framed double doors, fully enclosed",
      "5 compartments, 2 adjustable shelves",
      "Hidden cord access",
      "5-year warranty",
    ],
    pros: [
      "Most classic design with framed double doors",
      "Fully enclosed, hides all shelves from view",
      "Only pick in this guide with a 5-year warranty",
      "Hidden cord access for electronics",
    ],
    cons: [
      "Most expensive pick in this guide at $258.74",
      "Fully enclosed design leaves no open display space",
      "Heavier and bulkier to assemble than the metal-frame picks",
    ],
    bestFor: "Buyers who want a traditional, fully enclosed library bookcase backed by a long warranty",
  },
  {
    id: "sedeta-farmhouse-6-tier-drawer",
    rank: 5,
    badge: "Best Farmhouse Style",
    name: "SEDETA Farmhouse 6-Tier Bookshelf + Doors + Drawer (White)",
    price: "$145.99",
    rating: "4.5",
    reviews: "167",
    imageUrl: "https://m.media-amazon.com/images/I/51kB0TR8G4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DPHMTB47?tag=theofficejournal-20",
    description:
      "The SEDETA brings a soft white farmhouse finish with a hand-crafted groove texture that adds visual interest without going as rustic as the barn-door picks in this guide. Six tiers combine with cabinet doors and a single drawer, giving a mix of open, enclosed, and drawer storage in one elegant frame.\n\nP2-grade MDF construction keeps the piece sturdy at 300 lbs of total capacity, and an anti-tip kit is included for safety in households with kids or pets. If you want a bookshelf with doors that leans elegant rather than industrial, this is one of the more polished options here.\n\nCombines 6 tiers, cabinet doors, and a drawer.",
    specs: [
      "31.5\"W x 13.8\"D x 70.7\"H",
      "P2 MDF construction",
      "6 tiers + cabinet doors + 1 drawer",
      "300 lb weight capacity",
      "Hand-crafted groove texture",
      "Anti-tip kit included",
    ],
    pros: [
      "Elegant farmhouse white finish with groove texture detailing",
      "Combines 6 tiers, cabinet doors, and a drawer",
      "Solid 300 lb weight capacity",
      "Includes an anti-tip kit for safety",
    ],
    cons: [
      "Smaller review sample than most other picks",
      "White finish shows scuffs more than darker tones",
      "Pricier than the industrial-style Shintenchi or VASAGLE",
    ],
    bestFor: "Buyers who want an elegant farmhouse-style bookshelf combining doors, drawer, and open shelves",
  },
  {
    id: "joaxswe-5-tier-barn-door",
    rank: 6,
    badge: "Best Barn Door Style",
    name: "Joaxswe 5-Tier Barn Door Bookcase (White Farmhouse)",
    price: "$219.99",
    rating: "4.6",
    reviews: "306",
    imageUrl: "https://m.media-amazon.com/images/I/51eGqFV-UGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D48HC6MQ?tag=theofficejournal-20",
    description:
      "The Joaxswe stands out with sliding barn doors instead of swinging cabinet doors, a distinctive farmhouse detail that also saves floor clearance since the doors don't need to swing open. A unique wood grain pattern runs across the panels, and metal edge decoration along the frame adds a rustic-industrial accent.\n\nFive adjustable shelves sit behind and beside the sliding doors, and a wider wooden base than most picks in this guide adds extra stability. An anti-tip-over device is included, important given the barn-door mechanism's added hardware at the top of the frame.\n\nUnique grain pattern and metal edge accents.",
    specs: [
      "31.49\"W x 15.35\"D x 69.68\"H",
      "Engineered wood",
      "Sliding barn doors + 5 adjustable shelves",
      "Unique grain pattern",
      "Metal edge decoration",
      "Wider wooden base + anti-tip-over device",
    ],
    pros: [
      "Distinctive sliding barn doors save floor clearance",
      "Unique grain pattern and metal edge accents",
      "Classic farmhouse barn shape stands out visually",
      "Wider base adds extra stability",
    ],
    cons: [
      "Higher price than most non-barn-door picks",
      "Sliding doors only cover part of the shelving",
      "Distinctive style may not suit more minimalist decor",
    ],
    bestFor: "Buyers who want a standout farmhouse barn-door look with space-saving sliding doors",
  },
  {
    id: "orrd-70in-arched-set-of-2",
    rank: 7,
    badge: "Highest Rated / Premium Pick",
    name: "ORRD 70\" Arched Bookshelf Set of 2 (Natural/Walnut)",
    price: "$399.99",
    rating: "4.9",
    reviews: "26",
    imageUrl: "https://m.media-amazon.com/images/I/515C0UkaFhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FZTSHJSM?tag=theofficejournal-20",
    description:
      "9 stars, sold as a matched pair of arched bookshelves designed to flank a doorway, sofa, or fireplace as a coordinated statement piece. Each unit combines an arched silhouette with scalloped cabinet doors and gold accent handles, a mid-century modern look that stands well apart from the farmhouse and industrial styles elsewhere in this guide. Each bookshelf in the pair offers 4 open display shelves plus 1 closed cabinet section, so you still get plenty of visible shelving alongside the enclosed storage. An anti-tip kit is included on each unit, and the set is available in Natural or Walnut finishes.",
    specs: [
      "Set of 2, 31.49\"W x 11.81\"D x 70.86\"H each",
      "MDF construction",
      "Arched design + scalloped doors + gold accent handles",
      "4 open display shelves + 1 closed cabinet each",
      "Anti-tip kit included",
      "Available in Natural or Walnut",
    ],
    pros: [
      "Highest-rated pick in this entire guide at 4.9 stars",
      "Striking arched silhouette with scalloped doors and gold handles",
      "Sold as a matched pair for a coordinated statement look",
      "Balances open display shelves with enclosed cabinet storage",
    ],
    cons: [
      "Most expensive pick in this guide at $399.99 for the pair",
      "Smallest review sample in this guide (26 ratings)",
      "Distinctive arched design needs the right room to shine",
    ],
    bestFor: "Buyers who want a premium, design-forward statement pair to flank a doorway or fireplace",
  },
  {
    id: "facbotall-75in-triple-wide-barn-doors",
    rank: 8,
    badge: "Widest / Most Shelves",
    name: "FACBOTALL 75\" Triple Wide + 6 Barn Doors (Black)",
    price: "$269.99",
    rating: "4.5",
    reviews: "78",
    imageUrl: "https://m.media-amazon.com/images/I/51kneUck0LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FN7KR57S?tag=theofficejournal-20",
    description:
      "The FACBOTALL is the widest single unit in this guide at 71 inches, spreading 18 shelves across 6 tiers behind 6 individual farmhouse barn doors with gold handles, more doors and more total shelving than any other pick here. That scale makes it well suited to serving as a home library or even a room divider in an open floor plan.\n\nFPB and MDF construction keeps shelves thickened to 24mm for durability under a full load of books, and each shelf handles up to 66 lbs. An anti-tipping device is included given the unit's height and width, and the black finish with gold hardware gives it a bold, modern-farmhouse look.\n\n18 shelves and 6 barn doors, the most of any pick here.",
    specs: [
      "75\"H x 71\"W x 11.7\"D",
      "FPB + MDF construction",
      "18 shelves across 6 tiers + 6 barn doors with gold handles",
      "66 lb per shelf capacity",
      "24mm thickened shelves",
      "Anti-tipping device included",
    ],
    pros: [
      "Widest single unit in this guide at 71 inches",
      "18 shelves and 6 barn doors, the most of any pick here",
      "Doubles as a home library or room divider",
      "Thickened 24mm shelves rated for 66 lbs each",
    ],
    cons: [
      "Very large footprint needs a spacious room",
      "Smaller review sample than the top-selling picks",
      "6 separate barn doors add more assembly and moving parts",
    ],
    bestFor: "Buyers who want the widest, highest-capacity bookshelf with doors for a home library setup",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a bookshelf with door often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the bookshelf with door holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this bookshelf with door over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any bookshelf with door you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A bookshelf with door that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What is the best bookshelf with doors overall?",
    a: "8 lbs plus a robot-vacuum-friendly base and attractive two-tone finish.",
  },
  {
    q: "What is the most affordable bookshelf with doors?",
    a: "The Shintenchi 6-Tier Industrial Bookshelf (Pick 2) and VASAGLE Liry Farmhouse Bookshelf (Pick 1) are tied for the lowest price in this guide at $79.99.",
  },
  {
    q: "Which bookshelf with doors is the highest rated?",
    a: "The ORRD 70\" Arched Bookshelf Set of 2 (Pick 7) is the highest rated in this guide at 4.9 stars, though on a smaller review sample of 26 ratings.",
  },
  {
    q: "Is there a bookshelf with sliding barn doors?",
    a: "Yes, both the Joaxswe 5-Tier Barn Door Bookcase (Pick 6) and the FACBOTALL 75\" Triple Wide (Pick 8) use sliding barn doors instead of swinging cabinet doors.",
  },
  {
    q: "Which bookshelf with doors has the most shelves?",
    a: "The FACBOTALL 75\" Triple Wide (Pick 8) has the most total shelving in this guide, with 18 shelves across 6 tiers behind 6 barn doors.",
  },
  {
    q: "Is there a fully enclosed, traditional-style bookcase with doors?",
    a: "Yes, the Sauder Palladia Library Bookcase (Pick 4) is the most traditional design in this guide, with framed double doors that fully enclose the shelving and a 5-year warranty.",
  },
  {
    q: "Is a bookshelf with doors better than open shelving?",
    a: "It depends on your priorities. Doors block dust and hide clutter, which saves you from dusting exposed shelves every week, but they add cost and, for swinging cabinet doors, need extra clearance in front to open. Open shelving is cheaper, gives instant access, and feels more spacious in a smaller room, but leaves everything exposed to dust with nothing stopping items from sliding off.",
  },
  {
    q: "How much clearance do cabinet doors need to open?",
    a: "Swinging cabinet doors, used on most picks in this guide, typically need at least 24-30 inches of clearance in front of the unit to open fully, so measure your walking space before placing one against a wall in a tight room. Sliding barn doors, like on the Joaxswe and FACBOTALL, avoid this issue entirely since they slide sideways along the frame instead of swinging outward.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-bookshelf-with-drawers", title: "Best Bookshelves with Drawers in 2026" },
  { href: "/guide/best-bookshelf-with-storage", title: "Best Bookshelves with Storage in 2026" },
  { href: "/guide/best-bookshelf-5-tier", title: "Best 5-Tier Bookshelves in 2026" },
];
