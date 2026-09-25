export const guideSlug = "best-tv-stand-mobile";
export const guideTitle = "The Best Mobile TV Stands for Home Offices";
export const metaTitle = "Best Mobile TV Stands for Home Offices (2026)";
export const metaDescription =
  "We compared 7 mobile TV stands on features, build and practical fit to help you choose the right one for your space.";
export const mainKeyword = "tv stand mobile";
export const introParagraphs = [
  "A mobile TV stand isn't just a living room console with wheels bolted on, it's a rolling cart built to move between conference rooms, classrooms, and AV setups where the display needs to relocate regularly rather than sit against one wall.",
  "Below are 6 mobile TV stands we compared on caster quality, tilt range, and weight capacity, all built around VESA mount plates rather than open shelving, since a rolling cart's core job is holding the screen steady while it travels.",
];
export const lastUpdated = "2026-07-17";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41zp5fky0cL._SL500_.jpg";

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
    id: "bontec-rolling-tilt",
    rank: 1,
    badge: "Best Overall",
    name: "BONTEC Rolling TV Stand with Tilt",
    price: "$49.99",
    rating: "4.6",
    reviews: "16,088",
    imageUrl: "https://m.media-amazon.com/images/I/41zp5fky0cL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BNZXBGJ1?tag=theofficejournal-20",
    description:
      "The BONTEC Rolling TV Stand with Tilt fits TVs from 23 to 65 inches up to 88 pounds, with a VESA pattern up to 400x400mm. Four heavy-duty casters swivel a full 360 degrees and lock in place with brakes, so an office or classroom can wheel it between rooms and dock it firmly once positioned. A 10 degree tilt cuts glare from overhead lighting.\n\nAn adjustable AV shelf holds a laptop, streaming box, or game console alongside the mount, and cable routing keeps cords tucked out of sight during transport.\n\nAll four casters lock, not just two.",
    specs: [
      "Fits TV 23-65 inches, up to 88 lbs",
      "Max VESA 400x400mm",
      "4 locking 360° casters",
      "10° tilt",
      "Adjustable AV shelf",
      "Cable management",
    ],
    pros: [
      "Largest review base in this list at 16,088 ratings",
      "All four casters lock, not just two",
      "10° tilt reduces glare",
      "Adjustable shelf fits laptops and consoles",
    ],
    cons: [
      "88 lb capacity is on the lower end for larger commercial displays",
      "65\" max TV size limits use for bigger conference rooms",
      "Fixed height, no height adjustment range",
    ],
    bestFor: "Offices and classrooms that need a proven, low-cost rolling cart with all-wheel locking",
  },
  {
    id: "perlesmith-pstvmc06",
    rank: 2,
    badge: "Quietest Wheels",
    name: "PERLESMITH Rolling TV Stand PSTVMC06",
    price: "$44.99",
    rating: "4.6",
    reviews: "14,784",
    imageUrl: "https://m.media-amazon.com/images/I/41OqSe-Qh8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B084SW7WFY?tag=theofficejournal-20",
    description:
      "The PERLESMITH PSTVMC06 fits TVs from 23 to 60 inches up to 88 pounds and rolls on quiet PU wheels rather than the harder plastic casters found on some rivals, which matters in a quiet office or classroom where a squeaky cart rolling by can be distracting. Tilt adjusts from 0 to 15 degrees for glare control.\n\nA cold-rolled steel frame keeps the base rigid, and anti-drop safety screws add a second point of attachment beyond the standard VESA bracket. A 22 lb capacity AV shelf holds a small streaming device. PERLESMITH backs the frame with a 10-year warranty, the longest of any pick in this list, and the combination of quiet wheels and long warranty coverage makes this a dependable everyday office pick.\n\nLongest warranty in this list at 10 years.",
    specs: [
      "Fits TV 23-60 inches, up to 88 lbs",
      "Max VESA 400x400mm",
      "Quiet PU wheels",
      "0-15° tilt",
      "22 lb AV shelf",
      "10-year warranty",
    ],
    pros: [
      "Quiet PU wheels, less noise rolling on hard floors",
      "Longest warranty in this list at 10 years",
      "Anti-drop safety screws for added security",
      "Large review base (14,784 ratings)",
    ],
    cons: [
      "60\" max TV size is the smallest fit in this list",
      "22 lb AV shelf capacity is on the lighter side",
      "No stated tilt-lock detail beyond the standard range",
    ],
    bestFor: "Quiet offices or shared workspaces where wheel noise during transport is a concern",
  },
  {
    id: "perlesmith-pstvmc04",
    rank: 3,
    badge: "Most Flexible Shelf",
    name: "PERLESMITH Rolling TV Stand PSTVMC04",
    price: "$39.99",
    rating: "4.6",
    reviews: "11,515",
    imageUrl: "https://m.media-amazon.com/images/I/31dOVMla6zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BYSC5TG5?tag=theofficejournal-20",
    description:
      "The PERLESMITH PSTVMC04 fits TVs from 23 to 65 inches up to 99 pounds, a step up in both size and capacity from its PSTVMC06 sibling above. Its standout feature is an AV shelf that adjusts anywhere from 12 to 24 inches up the steel column, more range than most fixed-shelf competitors, useful for fitting taller AV gear or a laptop stand. Cable management is built directly into the steel column rather than added as a clip-on accessory, keeping cords fully hidden as the cart rolls. Locking casters hold the cart steady once positioned, and the design suits home, office, or retail settings equally well., it's the least expensive pick in this list while still covering the widest TV size and capacity range of the three PERLESMITH-style options here.",
    specs: [
      "Fits TV 23-65 inches, up to 99 lbs",
      "Max VESA 400x400mm",
      "AV shelf adjusts 12\"-24\"",
      "Column-integrated cable management",
      "Locking casters",
      "Suited for home, office, or retail",
    ],
    pros: [
      "Least expensive pick in this list",
      "Highest weight capacity among the PERLESMITH-style picks (99 lbs)",
      "AV shelf adjusts across a 12-inch range",
      "Cable management built into the column, not clipped on",
    ],
    cons: [
      "Large review base but slightly behind the top two picks in count",
      "No stated tilt range in the listing",
      "65\" max TV size, same ceiling as most other picks here",
    ],
    bestFor: "Budget-conscious buyers who want the most adjustable AV shelf in this list",
  },
  {
    id: "bontec-tc-003b",
    rank: 4,
    badge: "Best for High-Traffic Settings",
    name: "BONTEC Mobile TV Stand TC-003B",
    price: "$39.98",
    rating: "4.6",
    reviews: "6,458",
    imageUrl: "https://m.media-amazon.com/images/I/41cyXrYX3KL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08DNV8WW7?tag=theofficejournal-20",
    description:
      "The BONTEC TC-003B fits TVs from 23 to 65 inches up to 88 pounds and pairs a steel and aluminum frame with rolling wheels that include locking brakes. An anti-tip base adds extra stability in crowded environments like schools, hotels, or airports, where the cart is more likely to get bumped as people move through the space. A media shelf holds a laptop or gaming console alongside the TV mount, and cable management routes wiring along the frame. Steel and aluminum build for durability.",
    specs: [
      "Fits TV 23-65 inches, up to 88 lbs",
      "Max VESA 400x400mm",
      "Steel + aluminum frame",
      "Anti-tip base",
      "Rolling wheels + locking brakes",
      "Media shelf",
    ],
    pros: [
      "Anti-tip base suited for crowded, high-traffic environments",
      "Steel and aluminum build for durability",
      "Strong review base (6,458 ratings)",
      "Affordable at under $40",
    ],
    cons: [
      "88 lb capacity is on the lower end for larger commercial displays",
      "No stated tilt range in the listing",
      "65\" max TV size limits use for larger screens",
    ],
    bestFor: "Schools, hotels, and airports that need a stable, anti-tip cart for busy public spaces",
  },
  {
    id: "rfiver-mt2004-x-base",
    rank: 5,
    badge: "Best Stability",
    name: "Rfiver Mobile TV Stand MT2004",
    price: "$41.99",
    rating: "4.6",
    reviews: "7,353",
    imageUrl: "https://m.media-amazon.com/images/I/4194GAytP+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CT7P4FC?tag=theofficejournal-20",
    description:
      "The Rfiver MT2004 fits TVs from 23 to 65 inches up to 88 pounds and stands on a sturdy X-shape base, a wider footprint than the simpler four-post frames used by some rivals, which helps resist tipping when the cart rolls over an uneven threshold. A 5 degree tilt reduces glare from overhead lighting.\n\nThe height-adjustable AV shelf accommodates different equipment sizes, and clipped cable routing keeps cords from tangling as the cart moves. Built from all-metal construction rather than a mix of metal and plastic, it's well suited to a bedroom, home office, or dorm room where the stand doubles as both a display mount and a media cart. Rfiver backs the frame with a 5-year warranty.",
    specs: [
      "Fits TV 23-65 inches, up to 88 lbs",
      "Max VESA 400x400mm",
      "X-shape base",
      "5° tilt",
      "Height-adjustable AV shelf",
      "5-year warranty",
    ],
    pros: [
      "Sturdy X-shape base improves tip-over resistance",
      "All-metal construction, no plastic components",
      "5-year warranty",
      "Strong review base (7,353 ratings)",
    ],
    cons: [
      "88 lb capacity is on the lower end for larger commercial displays",
      "5° tilt range is narrower than some rivals",
      "65\" max TV size limits use for larger screens",
    ],
    bestFor: "Bedrooms, home offices, and dorm rooms that want a stable, all-metal rolling cart",
  },
  {
    id: "rfiver-power-outlet",
    rank: 6,
    badge: "Best Built-in Power",
    name: "Rfiver Rolling TV Stand + Power Outlet",
    price: "$62.99",
    rating: "3.9",
    reviews: "56",
    imageUrl: "https://m.media-amazon.com/images/I/417Eobq+JLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F89BJFHH?tag=theofficejournal-20",
    description:
      "The Rfiver Rolling TV Stand with Power Outlet is built for smaller displays, fitting TVs from 13 to 50 inches up to 55 pounds with a VESA pattern from 75x75mm to 200x200mm. It's the only pick in this list with 4 built-in AC outlets and a safety switch, letting a laptop, camera, or small AV device plug in directly at the cart instead of trailing a cord to a wall outlet.\n\nThe mount rotates between portrait and landscape orientation and tilts from -2 to 10 degrees, with 6 height levels to dial in the right eye line. It also runs in dual mode, rolling on casters or standing on fixed legs when you don't want it to move. Setup takes about 15 minutes, though its smaller size range and lower rating make it a more specialized pick than the general-purpose carts above.",
    specs: [
      "Fits TV 13-50 inches, up to 55 lbs",
      "VESA 75x75mm to 200x200mm",
      "4 built-in AC outlets + safety switch",
      "Portrait/landscape rotation",
      "-2° to 10° tilt, 6 height levels",
      "Dual mode: rolling or fixed legs",
    ],
    pros: [
      "Only pick in this list with built-in AC outlets",
      "Portrait/landscape rotation",
      "Dual mode, rolls on casters or locks to fixed legs",
      "6 height levels for fine adjustment",
    ],
    cons: [
      "Lowest rating and smallest review base in this list",
      "50\" max TV size, smallest fit in this list",
      "Lower weight capacity (55 lbs) than the other picks here",
    ],
    bestFor: "Small displays or presentation setups that need built-in power at the cart itself",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand mobile often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand mobile holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand mobile over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand mobile you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand mobile that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What is the best mobile TV stand overall?",
    a: "The BONTEC Rolling TV Stand with Tilt (Pick 1) has the largest review base in this list at over 16,000 ratings, all four casters lock, and it includes a 10 degree tilt for glare control, making it the strongest general-purpose pick for offices and classrooms.",
  },
  {
    q: "How is a mobile TV stand different from a TV stand on wheels for a living room?",
    a: "Mobile TV stands in this list are built around VESA mount plates for rolling between rooms in offices, schools, or AV setups, prioritizing locking casters, tilt range, and a compact wheeled base. A living-room stand on wheels, like the picks in our TV Stands on Wheels guide, typically adds open or enclosed media shelving since it's expected to sit in one spot most of the time.",
  },
  {
    q: "Which mobile TV stand has the highest weight capacity?",
    a: "The PERLESMITH PSTVMC04 (Pick 3) has the highest weight capacity in this list at 99 lbs. Most other general-purpose picks here cap out around 88 lbs, while the smaller Rfiver Power Outlet pick (Pick 6) is rated for 55 lbs on smaller displays.",
  },
  {
    q: "Do any mobile TV stands include built-in power outlets?",
    a: "Yes, the Rfiver Rolling TV Stand with Power Outlet (Pick 6) is the only pick in this list with built-in AC outlets and a safety switch, though it's sized for smaller TVs from 13 to 50 inches.",
  },
  {
    q: "Are mobile TV stands stable enough for schools and high-traffic areas?",
    a: "Several picks in this list are specifically built for this use case. The BONTEC TC-003B (Pick 4) includes an anti-tip base for crowded environments, and the Rfiver MT2004 (Pick 5) uses a wide X-shape base for extra tip-over resistance.",
  },
  {
    q: "What TV size range do mobile TV stands typically support?",
    a: "Most general-purpose mobile TV stands in this list support 23 to 65 inch TVs, which covers the vast majority of office, classroom, and conference room displays. The Rfiver Power Outlet pick (Pick 6) is the exception, built for smaller 13 to 50 inch displays.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-on-wheels", title: "Best TV Stands on Wheels in 2026" },
  { href: "/guide/best-tv-stand-universal", title: "Best Universal TV Stands in 2026" },
  { href: "/guide/best-tv-stand-heavy-duty", title: "Best Heavy Duty TV Stands in 2026" },
];
