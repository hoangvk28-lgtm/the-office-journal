export const guideSlug = "best-tv-stand-vesa";
export const guideTitle = "The Best VESA TV Stands for Everyday Use";
export const metaTitle = "Best VESA TV Stands for Home Offices (2026)";
export const metaDescription =
  "A practical comparison of 8 VESA TV stands, focused on features, build and practical fit, and the trade-offs between them.";
export const mainKeyword = "tv stand vesa";
export const introParagraphs = [
  "VESA refers to the standardized hole-spacing pattern on the back of a TV that a mount or stand's bracket has to match, measured in millimeters like 400x400mm or 600x400mm rather than by TV screen size alone.",
  "Before buying any of the picks below, check your TV's exact VESA hole pattern and weight on the manufacturer spec sheet. A stand rated for a wide max VESA range still needs your screen's specific pattern to fall inside that range, and the bracket holes need to line up exactly.",
];
export const lastUpdated = "2026-07-17";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31MxmRl745L._SL500_.jpg";

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
    id: "perlesmith-pstvs33-legs",
    rank: 1,
    badge: "Best Overall",
    name: "PERLESMITH Universal TV Stand Legs PSTVS33",
    price: "$34.99",
    rating: "4.7",
    reviews: "16,433",
    imageUrl: "https://m.media-amazon.com/images/I/31MxmRl745L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KFDS3PT?tag=theofficejournal-20",
    description:
      "The PERLESMITH Universal TV Stand Legs PSTVS33 fits TVs from 24 to 60 inches and holds up to 99 pounds, with a max VESA pattern of 400x400mm, covering the vast majority of common mid-size TV mount patterns. It offers 12 total height levels, more adjustment range than any other pick in this list, and the base swivels up to 50 degrees to each side.\n\n7 stars, it's both the most reviewed and the highest rated stand here. An 8mm tempered glass base anchors the unit, and 2 included cable clips keep cords tidy. It's compatible with most major brands including Samsung, LG, and Sony, and installs without drilling into furniture. For most VESA patterns up to 400x400mm, this is the safest starting point.",
    specs: [
      "Fits TVs 24-60 inches",
      "Max VESA 400x400mm",
      "99 lb weight capacity",
      "12 height levels",
      "Swivels 50 degrees each side",
      "8mm tempered glass base",
    ],
    pros: [
      "Most height levels in this list (12 total)",
      "Widest swivel range among tabletop picks at 50 degrees",
      "Compatible with most major TV brands",
      "Lifetime warranty",
    ],
    cons: [
      "Max VESA 400x400mm won't fit TVs with a wider mount pattern",
      "99 lb capacity caps out mid-size TVs",
      "Tempered glass base adds weight versus steel-only designs",
    ],
    bestFor: "Buyers with a VESA 400x400mm or smaller pattern who want the most height and swivel adjustment",
  },
  {
    id: "perlesmith-pstvs01-800x600",
    rank: 2,
    badge: "Best for Wide VESA Patterns",
    name: "PERLESMITH Universal TV Stand PSTVS01",
    price: "$23.99",
    rating: "4.5",
    reviews: "18,262",
    imageUrl: "https://m.media-amazon.com/images/I/41J3pnn8IWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MBL6KM?tag=theofficejournal-20",
    description:
      "The PERLESMITH Universal TV Stand PSTVS01 is rated for TVs from 20 to 75 inches and up to 110 pounds, with a max VESA support of 800x600mm, the largest hole-pattern range in this list. That wide range is what lets it accommodate larger, heavier TVs whose mount holes are spaced further apart than typical mid-size sets.\n\n5 stars, and it ships with 2 different mounting configurations to match whichever holes your TV actually uses within that range. A 10-year warranty backs the stand, the longest coverage among the tabletop options here. If your TV's VESA pattern runs wide, this is the pick built to reach it.\n\nHighest capacity among tabletop stands at 110 lbs.",
    specs: [
      "Fits TVs 20-75 inches",
      "Max VESA 800x600mm",
      "110 lb weight capacity",
      "2 mounting configurations",
      "Steel construction",
      "10-year warranty",
    ],
    pros: [
      "Largest max VESA range in this list at 800x600mm",
      "Highest capacity among tabletop stands at 110 lbs",
      "2 mounting configurations to match different hole spacings",
      "10-year warranty",
    ],
    cons: [
      "No swivel function mentioned",
      "Fewer height levels than the Pick 1 PERLESMITH",
      "Steel-only base, no glass reinforcement",
    ],
    bestFor: "Buyers whose TV has a wide VESA pattern up to 800x600mm and needs a tabletop stand",
  },
  {
    id: "perlesmith-pstvs02-swivel",
    rank: 3,
    badge: "Best Height Adjustment",
    name: "PERLESMITH Universal Swivel TV Stand PSTVS02",
    price: "$49.99",
    rating: "4.7",
    reviews: "1,968",
    imageUrl: "https://m.media-amazon.com/images/I/41IgKR8lCkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096M4G1H6?tag=theofficejournal-20",
    description:
      "The PERLESMITH Universal Swivel TV Stand PSTVS02 fits TVs from 32 to 75 inches and supports a max VESA pattern of 600x400mm, a middle ground between the two picks above. It offers 9 height levels and swivels up to 35 degrees, with a center-column design that saves more floor and tabletop space than the two-leg stands elsewhere in this list.\n\nA tempered glass base adds stability, and the compact center-post footprint makes it well suited to bedrooms, offices, and classrooms where desk space is tight. For a VESA 600x400mm pattern with strong height flexibility, this is the standout.\n\n9 height levels for fine-tuned eye-level adjustment.",
    specs: [
      "Fits TVs 32-75 inches",
      "Max VESA 600x400mm",
      "99 lb weight capacity",
      "9 height levels",
      "Swivels 35 degrees each side",
      "Tempered glass base",
    ],
    pros: [
      "VESA 600x400mm covers a wide range of mid-to-large TVs",
      "9 height levels for fine-tuned eye-level adjustment",
      "Center-column design saves more space than two-leg stands",
      "Tempered glass base adds stability",
    ],
    cons: [
      "Pricier than the other two PERLESMITH picks in this list",
      "Lower capacity than the PSTVS01 mount (Pick 2)",
      "Minimum TV size of 32 inches excludes smaller screens",
    ],
    bestFor: "Buyers with a VESA 600x400mm TV who want a compact, space-saving center-post design",
  },
  {
    id: "vivo-mobile-cart-stand-tv03e",
    rank: 4,
    badge: "Best Mobile Floor Stand",
    name: "VIVO Mobile TV Cart STAND-TV03E",
    price: "$99.99",
    rating: "4.7",
    reviews: "11,446",
    imageUrl: "https://m.media-amazon.com/images/I/41486-cr87L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00TFXO4Q4?tag=theofficejournal-20",
    description:
      "The VIVO Mobile TV Cart STAND-TV03E fits TVs from 32 to 83 inches and holds up to 110 pounds, with a max VESA support of 600x400mm, the largest mount-pattern range among the mobile floor stands in this list. Four locking casters let it roll between rooms and then lock firmly in place, and the frame tilts up to 15 degrees for better viewing angles.\n\nA built-in AV shelf holds a DVD player or streaming box, and the cart supports very large TVs up to 83 inches. For anyone who needs the TV to move between spaces while still matching a wide VESA pattern, this is the strongest option.",
    specs: [
      "Fits TVs 32-83 inches (mobile floor stand)",
      "Max VESA 600x400mm",
      "110 lb weight capacity",
      "4 locking wheels",
      "Tilts up to 15 degrees",
      "Built-in AV shelf",
    ],
    pros: [
      "Largest VESA range among mobile floor stands at 600x400mm",
      "Fits very large TVs up to 83 inches at 110 lbs",
      "4 locking casters for stable repositioning",
      "AV shelf holds a streaming box or DVD player",
    ],
    cons: [
      "Larger floor footprint than tabletop stands",
      "Tilt range is more limited than swivel-focused tabletop picks",
      "No cable management system built into the frame",
    ],
    bestFor: "Buyers who need to move a large, wide-VESA TV between rooms on a mobile cart",
  },
  {
    id: "perlegear-pgfs06-power",
    rank: 5,
    badge: "Best Floor Stand With Power",
    name: "Perlegear Floor TV Stand with Power Outlet PGFS06",
    price: "$89.99",
    rating: "4.6",
    reviews: "1,511",
    imageUrl: "https://m.media-amazon.com/images/I/31Fu+CumYsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BYRKVRG6?tag=theofficejournal-20",
    description:
      "The Perlegear Floor TV Stand with Power Outlet PGFS06 fits TVs from 32 to 75 inches and holds up to 110 pounds, with a max VESA support of 600x400mm. What sets it apart from the other floor stands here is a built-in power strip with 3 AC outlets and 2 USB ports directly on the frame, so streaming boxes and consoles don't need a separate extension cord.\n\n6 stars, it has a solid track record. 7 inch range, swivels up to 30 degrees, and rests on a scratch-resistant wood base. A 22 pound capacity AV shelf holds additional gear. For a VESA-compatible floor stand with power built in, this is the strongest pick.\n\n12-18 height levels, the most range among floor stands here.",
    specs: [
      "Fits TVs 32-75 inches (fixed floor stand)",
      "Max VESA 600x400mm",
      "110 lb weight capacity",
      "3 AC outlets + 2 USB ports built in",
      "12-18 height levels (35.2\"-46.7\")",
      "Swivels 30 degrees each side",
    ],
    pros: [
      "Built-in power strip with 3 AC outlets and 2 USB ports",
      "12-18 height levels, the most range among floor stands here",
      "Scratch-resistant wood base",
      "22 lb capacity AV shelf for extra gear",
    ],
    cons: [
      "Fixed floor footprint, no wheels for repositioning",
      "Lower review count than the top tabletop picks",
      "Requires nearby outlet access to use the built-in power strip",
    ],
    bestFor: "Buyers who want a VESA 600x400mm floor stand with built-in power for streaming boxes and consoles",
  },
  {
    id: "yomt-universal-floor-stand",
    rank: 6,
    badge: "Best Space-Saving Floor Stand",
    name: "YOMT Universal TV Floor Stand",
    price: "$59.90",
    rating: "4.7",
    reviews: "1,845",
    imageUrl: "https://m.media-amazon.com/images/I/419IRtOt9uL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08JV1P92F?tag=theofficejournal-20",
    description:
      "The YOMT Universal TV Floor Stand fits TVs from 27 to 70 inches and holds up to 88 pounds, with a max VESA support of 400x400mm. Its slim, space-saving frame tucks under a media console more easily than bulkier floor stands, while still swiveling up to 30 degrees on a tempered glass base for stability.\n\nVelcro cable ties keep wiring organized along the pole, and installation is drill-free. For anyone who wants a fixed floor stand that doesn't dominate the room visually, this is the best-looking option evaluated here.\n\n7 star rating among floor stands in this list.",
    specs: [
      "Fits TVs 27-70 inches (fixed floor stand)",
      "Max VESA 400x400mm",
      "88 lb weight capacity",
      "Swivels 30 degrees each side",
      "Tempered glass base",
      "Velcro cable management",
    ],
    pros: [
      "Slim, space-saving frame tucks under furniture",
      "High 4.7 star rating among floor stands in this list",
      "Tempered glass base adds stability",
      "No-drill installation with velcro cable ties",
    ],
    cons: [
      "Max VESA 400x400mm, narrower than the other floor stands here",
      "Lower weight capacity than the VIVO or Perlegear floor stands",
      "Fixed base, no wheels for mobility",
    ],
    bestFor: "Buyers with a VESA 400x400mm TV who want the slimmest, best-looking fixed floor stand",
  },
  {
    id: "hemudu-ht1002b-floor-stand",
    rank: 7,
    badge: "Best Swivel & Tilt Range",
    name: "Hemudu Universal Floor TV Stand HT1002B",
    price: "$56.99",
    rating: "4.6",
    reviews: "3,391",
    imageUrl: "https://m.media-amazon.com/images/I/31BecNVNatL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08SJGQLFW?tag=theofficejournal-20",
    description:
      "The Hemudu Universal Floor TV Stand HT1002B fits TVs from 27 to 65 inches and holds up to 88 pounds, with a max VESA support of 400x400mm. It offers the widest adjustment range in this list, swiveling a full 80 degrees and tilting up to 40 degrees, useful for corner placements or rooms with seating spread across a wide angle.\n\n6 stars, it has a strong, well-established track record. A 10mm tempered glass base is the thickest of any pick here, and 4 height levels allow basic eye-line adjustment. Setup takes about 15 minutes. For tight room corners where the viewing angle changes throughout the day, this is the strongest pick.\n\nWidest tilt range in this list at 40 degrees.",
    specs: [
      "Fits TVs 27-65 inches (fixed floor stand)",
      "Max VESA 400x400mm",
      "88 lb weight capacity",
      "Swivels 80 degrees, tilts 40 degrees",
      "10mm tempered glass base",
      "4 height levels",
    ],
    pros: [
      "Widest swivel range in this list at 80 degrees",
      "Widest tilt range in this list at 40 degrees",
      "Thickest tempered glass base among all picks (10mm)",
      "Quick roughly 15-minute setup",
    ],
    cons: [
      "Max VESA 400x400mm, narrower than the larger-capacity floor stands",
      "Only 4 height levels, less range than the Perlegear PGFS06",
      "Max TV size of 65 inches, smallest among the floor stands here",
    ],
    bestFor: "Buyers placing a VESA 400x400mm TV in a corner who need maximum swivel and tilt range",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand vesa often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand vesa holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand vesa over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand vesa you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand vesa that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What does VESA mean for a TV stand?",
    a: "VESA refers to the standardized spacing between the mounting holes on the back of a TV, measured in millimeters like 400x400mm or 800x600mm. A TV stand's bracket needs to match your TV's specific VESA pattern, not just fall within its screen size range.",
  },
  {
    q: "How do I find my TV's VESA pattern?",
    a: "Check your TV's user manual or the manufacturer's spec sheet, which lists the VESA mount pattern in millimeters. You can also measure the horizontal and vertical distance between the mounting holes on the back of the TV directly if the manual is unavailable.",
  },
  {
    q: "Which VESA TV stand covers the widest range of hole patterns?",
    a: "The PERLESMITH Universal TV Stand PSTVS01 (Pick 2) supports the widest max VESA range in this list at 800x600mm, with 2 mounting configurations to match different hole spacings within that range.",
  },
  {
    q: "Can I use a VESA stand rated for a larger pattern on a smaller TV?",
    a: "A stand's max VESA rating is an upper limit, and the bracket needs holes that also match smaller, more common patterns like 200x200mm or 400x400mm. Check the stand's full compatible range, not just its maximum, before assuming it will fit a smaller TV.",
  },
  {
    q: "What is the best VESA TV stand for a large or heavy TV?",
    a: "For TVs up to 75 inches with a wide VESA pattern, the PERLESMITH Universal TV Stand PSTVS01 (Pick 2) offers 800x600mm VESA support and 110 lb capacity, the widest range and highest capacity among the tabletop picks in this list.",
  },
  {
    q: "Should I get a tabletop VESA mount or a floor-standing VESA stand?",
    a: "A tabletop stand works if you already have a media console, dresser, or table to place the TV on and just need the VESA bracket and height mechanism. A floor-standing unit like the Perlegear PGFS06 (Pick 5) is freestanding and often adds an AV shelf or built-in power outlets, useful if you do not already have furniture for the TV.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-universal", title: "Best Universal TV Stands in 2026" },
  { href: "/guide/best-tv-stand-heavy-duty", title: "Best Heavy Duty TV Stands in 2026" },
];
