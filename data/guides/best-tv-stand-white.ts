const BASE = "/images/guides/best-tv-stand-white";

export const guideSlug = "best-tv-stand-white";
export const guideTitle = "The Best White TV Stands for Home Offices";
export const metaTitle = "Best White TV Stands for Home Offices (2026)";
export const metaDescription =
  "We compared 9 white TV stands on features, build and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-07-16";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GxiO7g3pL._SL500_.jpg";

export const mainKeyword = "tv stand white";
export const introParagraphs = [
  "A white TV stand can brighten a living room in a way wood tones and black finishes cannot, but not every white finish holds up the same way over time. Matte finishes resist scuffs and fingerprints better than high gloss, and solid or high-quality engineered wood resists yellowing from sunlight far better than cheap particleboard laminate.",
  "Before buying, think about how the white will sit against your existing furniture. A stark cool white can clash with warm wood tones elsewhere in the room, while a soft or off-white finish tends to blend more easily. The picks below cover farmhouse barn door styles, modern glass-shelf designs, and low-cost options across a range of TV sizes and storage needs.",
];

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
    id: "jummico-sliding-barn-door",
    rank: 1,
    badge: "Best Overall",
    name: "JUMMICO Sliding Barn Door White TV Stand",
    price: "$119.99",
    rating: "4.6 stars",
    reviews: "4,214 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41GxiO7g3pL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SHDW2KT?tag=theofficejournal-20",
    description: "The JUMMICO combines two sliding barn doors with two enclosed cabinets and three adjustable shelves, giving it more configurable storage than most stands in its price range. It fits TVs up to 65 inches and holds up to 175 lbs, which covers the vast majority of flat panel TVs sold today.\n\nThe barn door styling reads as farmhouse without being overly rustic, so it works in both traditional and transitional living rooms. Adjustable shelves behind the cabinet doors mean you can reconfigure the interior for a cable box, gaming console, or soundbar without being locked into fixed compartments.\n\n3 adjustable shelves for flexible storage.",
    specs: ["Fits TV up to 65\"", "175 lbs capacity", "2 sliding barn doors", "2 cabinets", "3 adjustable shelves"],
    pros: ["Highest review count in this roundup at 4.6 stars", "3 adjustable shelves for flexible storage", "Farmhouse styling fits most living rooms", "175 lbs weight capacity"],
    cons: ["Barn doors need floor clearance to slide", "White finish shows scuffs more than wood tones", "No built-in cable routing holes"],
    bestFor: "Buyers who want the most storage flexibility and broad TV compatibility.",
  },
  {
    id: "vasagle-farmhouse-barn-door",
    rank: 2,
    badge: "Best Farmhouse Style",
    name: "VASAGLE Farmhouse Sliding Barn Door TV Stand",
    price: "$119.99",
    rating: "4.6 stars",
    reviews: "1,799 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41juGQmpQaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DS26WK98?tag=theofficejournal-20",
    description: "VASAGLE leans further into farmhouse design with a sliding barn door front and four separate storage compartments, which suits buyers who want visually distinct zones for media equipment rather than one continuous cabinet. Assembly is straightforward according to buyers, and the frame supports up to 170 lbs.\n\nThe four-compartment layout means each section is a fixed size rather than adjustable, so it works best if you already know what you are storing (router, streaming box, game console, decor). This is a tradeoff worth knowing before buying if you need flexible shelf heights.",
    specs: ["Fits TV up to 65\"", "170 lbs capacity", "Sliding barn door", "4 storage compartments", "Easy assembly"],
    pros: ["Strong farmhouse aesthetic", "4 distinct storage compartments", "Easy assembly per buyer feedback", "170 lbs capacity"],
    cons: ["Compartments are fixed size, not adjustable", "White finish requires regular dusting to look crisp", "Barn door adds visual weight to smaller rooms"],
    bestFor: "Farmhouse-style living rooms where distinct storage zones matter more than adjustable shelving.",
  },
  {
    id: "okd-modern-70-inch",
    rank: 3,
    badge: "Best for Large TVs",
    name: "OKD Modern 70\" White TV Stand",
    price: "$229.99",
    rating: "4.7 stars",
    reviews: "396 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41KExjmt83L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FDGHM391?tag=theofficejournal-20",
    description: "The OKD is built for larger televisions, fitting TVs up to 80 inches across its 70-inch-wide frame while holding up to 300 lbs, easily the highest capacity in this lineup. Two side cabinets flank an open center section, and four cable management holes route power and HDMI cables out of sight.\n\nThe wider footprint means it needs a correspondingly large wall to look proportional, so measure your space before ordering. For anyone upgrading to a 75 or 80 inch TV, this is one of the few white stands built with that scale of screen in mind.\n\nFits TVs up to 80 inches.",
    specs: ["Fits TV up to 80\"", "70\" wide", "300 lbs capacity", "2 side cabinets", "4 cable management holes"],
    pros: ["Highest weight capacity in roundup at 300 lbs", "Fits TVs up to 80 inches", "4 cable management holes for clean setup", "Modern design suits contemporary rooms"],
    cons: ["Most expensive pick in this roundup", "70\" width needs a large wall", "Fewer enclosed storage sections than farmhouse styles"],
    bestFor: "Buyers with a large TV (75 to 80 inches) who need a stand rated for real weight, not just screen size.",
  },
  {
    id: "yeshomy-metal-barn-door",
    rank: 4,
    badge: "Best Cable Management",
    name: "YESHOMY Metal Sliding Barn Door TV Stand",
    price: "$129.99",
    rating: "4.5 stars",
    reviews: "1,679 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/515o-kBBPOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2R4RPBS?tag=theofficejournal-20",
    description: "YESHOMY uses metal sliding barn doors instead of wood-look panels, which gives the hardware a more durable sliding action over years of daily use. Convenient cable routing holes are built into the back panel, so power strips and streaming devices can stay hidden without drilling anything yourself. It fits TVs up to 65 inches.\n\nThe metal door track tends to hold up better than plastic rollers found on cheaper barn door stands, which matters if the doors get opened and closed daily. The farmhouse-white finish pairs well with both black metal fixtures and warm wood accents in the same room.",
    specs: ["Fits TV up to 65\"", "Metal sliding barn doors", "Built-in cable routing holes", "Farmhouse style"],
    pros: ["Metal door hardware more durable than plastic tracks", "Built-in cable routing holes", "Farmhouse white pairs with mixed decor", "1,679 verified ratings at 4.5 stars"],
    cons: ["No published weight capacity beyond general use", "Doors add depth when open", "White finish needs a soft cloth, not abrasive cleaners"],
    bestFor: "Buyers who want barn door styling with hardware built to hold up to daily sliding.",
  },
  {
    id: "wlive-mid-century",
    rank: 5,
    badge: "Best Mid-Century Style",
    name: "WLIVE Mid-Century White TV Stand",
    price: "$84.54",
    rating: "4.5 stars",
    reviews: "812 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/416IGnEAjLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CBTT8CM1?tag=theofficejournal-20",
    description: "The WLIVE breaks from the farmhouse trend with a mid-century silhouette, featuring retro angled legs and three adjustable compartments instead of enclosed cabinets. It is sized for TVs up to 55 inches, making it a better fit for bedrooms, apartments, or secondary living spaces than a full-size living room. The angled legs lift the frame off the floor, which makes the room feel more open and simplifies vacuuming or sweeping underneath. It is one of the more affordable ways to get a mid-century aesthetic in white rather than the more common walnut or oak finishes. Angled legs open up floor space visually.",
    specs: ["Fits TV up to 55\"", "Mid-century style", "Retro angled legs", "3 adjustable compartments"],
    pros: ["Distinct mid-century look, uncommon in white", "Angled legs open up floor space visually", "Affordable at $84.54", "3 adjustable open compartments"],
    cons: ["Smaller 55\" TV size limit", "Open compartments show clutter more than closed cabinets", "Legs require careful leveling on uneven floors"],
    bestFor: "Bedrooms or secondary rooms with TVs up to 55 inches where a retro look is preferred over farmhouse.",
  },
  {
    id: "led-glass-shelf-modern",
    rank: 6,
    badge: "Best for Maximum Drawer Storage",
    name: "WLIVE 7 Drawer Dresser TV Stand (White)",
    price: "$59.99",
    rating: "4.4 stars",
    reviews: "7,880 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41H8gk8T2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B8NYH6CC?tag=theofficejournal-20",
    description: "This dresser-style stand swaps open shelving for 7 fabric drawers, giving it the most enclosed storage in this roundup at one of the lowest prices. The clean white finish and 4-way adjustable feet let it level out on uneven flooring, and it fits TVs up to 45 inches.\n\nBecause it is built as a dresser first, it doubles as bedroom or closet storage if the TV setup ever changes, which the farmhouse cabinet stands in this list cannot do. Assembly takes about 15 to 20 minutes, faster than most cabinet-style stands here.\n\nLowest price among the picks here.",
    specs: ["Fits TV up to 45\"", "7 fabric drawers", "4-way adjustable feet", "15-20 minute assembly"],
    pros: ["7 drawers, most enclosed storage in this roundup", "Lowest price among the picks here", "Doubles as bedroom dresser storage", "Fast 15-20 minute assembly"],
    cons: ["Rated for TVs up to 45\" only", "Fabric drawer fronts less durable than solid wood", "No LED or power outlet features"],
    bestFor: "Buyers who want maximum drawer storage in white at the lowest price in this roundup.",
  },
  {
    id: "casaottima-power-outlet",
    rank: 7,
    badge: "Best with Built-in Power Outlet",
    name: "Casaottima Farmhouse TV Stand with Power Outlet",
    price: "$129.99",
    rating: "4.4 stars",
    reviews: "441 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51lvFmey9eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FJR8WV91?tag=theofficejournal-20",
    description: "The Casaottima includes a built-in power outlet on the stand itself, which removes the need to run an extension cord across the floor to reach a wall outlet. LED lighting, two enclosed cabinets, and four open compartments round out the storage, and it fits TVs up to 65 inches in a farmhouse-styled frame.\n\nThe combination of enclosed cabinets and open compartments gives more display flexibility than an all-cabinet design, letting you show off a streaming box or speaker while keeping cables and remotes out of sight in the closed sections.",
    specs: ["Fits TV up to 65\"", "Built-in power outlet", "LED lighting", "2 cabinets + 4 open compartments"],
    pros: ["Built-in power outlet reduces cord clutter", "LED lighting included", "Mix of open and closed storage", "Farmhouse styling"],
    cons: ["Lower review count than top picks at 441 ratings", "Power outlet placement is fixed, not user-adjustable", "White finish over MDF needs gentle cleaning"],
    bestFor: "Buyers who want to plug devices directly into the stand instead of running cords to a wall outlet.",
  },
  {
    id: "furinno-turn-n-tube-budget",
    rank: 8,
    badge: "Best Budget Pick",
    name: "Furinno Turn-N-Tube 3-Tier White TV Stand",
    price: "$40.99",
    rating: "4.5 stars",
    reviews: "9,660 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31kH0aOS+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZMNHXLZ?tag=theofficejournal-20",
    description: "The Furinno Turn-N-Tube is the lowest-cost option here by a wide margin, using tool-free assembly and a simple three-tier open shelf design. It is sized for TVs up to 32 inches, which makes it a fit for bedrooms, dorms, and secondary rooms rather than a primary living room TV.\n\nThe open three-tier layout has no doors or drawers, so it is best suited to buyers who do not need to hide cables or equipment.",
    specs: ["Fits TV up to 32\"", "3 tiers", "Tool-free assembly", "1-year warranty"],
    pros: ["Lowest price in roundup at $40.99", "Tool-free assembly", "Most-reviewed pick at 9,660 ratings", "1-year warranty included"],
    cons: ["Only fits TVs up to 32 inches", "Open shelving, no enclosed storage", "Particleboard construction is lighter duty than solid wood options"],
    bestFor: "Dorm rooms, bedrooms, or secondary spaces with a small TV and a tight budget.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand white often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand white holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand white over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand white you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand white that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: { q: string; a: string }[] = [
  { q: "Do white TV stands show scratches more than wood or black stands?", a: "White surfaces make scuffs, scratches, and handprints more visible than darker wood grains or black finishes, which naturally camouflage minor wear. A matte white finish hides marks better than a glossy one, but based on product specs and buyer feedback, any white stand in a high-traffic living room will need more frequent wiping down than a dark wood equivalent." },
  { q: "Will a white TV stand yellow over time?", a: "Cheaper high-gloss white finishes are more prone to yellowing, particularly with prolonged direct sunlight exposure. Stands built from solid wood or higher-quality engineered wood with a proper sealed finish resist yellowing much better than thin laminate over particleboard. If your stand will sit near a sunny window, a matte or satin finish on quality engineered wood is the safer choice." },
  { q: "How do I match a white TV stand to warm wood furniture in the same room?", a: "Look for a warm or off-white finish rather than a stark, cool white if your room already has warm wood tones, beige walls, or cream furniture. Several stands in this roundup blend a white cabinet with visible wood-grain accents, which bridges the gap between all-white and all-wood rooms more naturally than a single stark white piece." },
  { q: "What size white TV stand do I need for a 65-inch TV?", a: "For a 65-inch TV, look for a stand in the 55 to 65 inch width range so the screen does not visually overhang the stand on both sides. Also confirm the stand's weight capacity comfortably exceeds your TV's actual weight, since most 65-inch TVs weigh between 35 and 55 lbs depending on the model." },
  { q: "Are sliding barn door TV stands harder to clean than regular cabinet doors?", a: "Barn door tracks can collect dust over time and need occasional wiping with a dry or slightly damp microfiber cloth, similar to any hardware track. Based on product specs and buyer feedback, metal door tracks tend to hold up better long-term than plastic rollers found on some budget barn door stands." },
  { q: "Can I put a small TV on a stand rated for a larger TV?", a: "Yes, sizing ratings like 'fits up to 65 inches' are a maximum, not a minimum. A smaller TV on a larger stand is fine visually and functionally, though for the best proportions, aim for a stand width around 2/3 to 3/4 of your TV's diagonal screen size." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-black", title: "Best Black TV Stands" },
  { href: "/guide/best-tv-stand-with-storage", title: "Best TV Stands with Storage" },
  { href: "/guide/best-tv-stand-for-65-inch-tv", title: "Best TV Stands for 65-Inch TVs" },
];
