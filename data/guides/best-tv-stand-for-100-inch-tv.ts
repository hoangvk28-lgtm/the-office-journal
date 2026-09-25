const BASE = "/images/guides/best-tv-stand-for-100-inch-tv";

export const guideSlug = "best-tv-stand-for-100-inch-tv";
export const guideTitle = "The Best TV Stands for 100 Inch TVs: Our Picks";
export const metaTitle = "Best TV Stands for 100 Inch TVs (2026)";
export const metaDescription =
  "How 9 TV stands for 100 inch TVs compare on features, build and practical fit, with clear notes on who each one suits.";
export const lastUpdated = "2026-07-16";
export const readTime = "12 min";
export const heroImage = `https://m.media-amazon.com/images/I/51REdLokClL._SL500_.jpg`;

export const mainKeyword = "tv stand for 100 inch tv";
export const introParagraphs = [
  "A 100 inch TV is a different category of purchase than a 65 or 75 inch screen, and the stand underneath it needs to match that scale. The panel itself can weigh anywhere from 100 to over 150 lbs before you add a soundbar, streaming box, or gaming console, so a stated weight capacity that only clears the TV by a slim margin is a real risk rather than a formality.",
  "Width matters just as much as capacity. A 100 inch TV measures roughly 87 inches diagonally corner to corner, so a stand under about 90 inches wide will visually and physically undersize the screen. The eight stands below range from fixed 90+ inch consoles to one extendable design, with several including built-in electric fireplaces for buyers who want to combine media storage with a heat source.",
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

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "fitueyes-eiffel-large-tv-floor-stand",
    rank: 1,
    badge: "Best Overall",
    name: "FITUEYES Large TV Floor Stand (Eiffel Series, Walnut)",
    price: "$329.00",
    rating: "4.7 stars",
    reviews: "432 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51REdLokClL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B09P7Y8JSZ?tag=theofficejournal-20",
    description: "The FITUEYES Eiffel Series uses a trapezoid frame design rather than a straight box shape, which spreads the load of a large TV across a wider stance and reduces the tipping leverage that flat-back stands create. It is rated to hold 187 lbs, the highest capacity margin in this roundup, and the frame is purpose-built to fit screens from 75 to 100 inches.\n\nA large media shelf runs the width of the unit for a soundbar and streaming devices, and built-in cable management keeps the wiring behind the frame instead of hanging loose. Two-level height adjustment lets you set the mounting point to match seated eye level, which most fixed-height consoles do not offer.\n\nTrapezoid frame improves tip resistance.",
    specs: ["Trapezoid frame design", "187 lbs weight capacity", "Fits TV 75-100 inch", "Large media shelf", "Built-in cable management", "2-level height adjustment"],
    pros: ["187 lbs capacity, highest margin here", "Trapezoid frame improves tip resistance", "Height adjustable in 2 positions", "Cable management built into frame"],
    cons: ["Floor stand style, not a full media console", "No fireplace or drawer storage", "$329 mid-range price for the category"],
    bestFor: "Buyers who prioritize weight capacity and tip stability over storage cabinets.",
  },
  {
    id: "amerlife-90-fireplace-tv-stand",
    rank: 2,
    badge: "Best with Fireplace",
    name: "AMERLIFE 90\" Fireplace TV Stand (White, LED + 50\" Fireplace)",
    price: "$384.99",
    rating: "4.5 stars",
    reviews: "2,325 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51Dt1lU6qtL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0F598T1FK?tag=theofficejournal-20",
    description: "The AMERLIFE 90 inch console pairs a media stand rated for TVs up to 100 inches with a 50 inch electric fireplace insert built into the lower center section. Twelve LED color options across 96 combinations run along the shelving, and the two-tier layout separates open display shelves from closed cabinet storage.\n\nEight stainless steel shelves plus two enclosed cabinets give this the most total storage compartments in this roundup. The fireplace insert ships as a separate component inside the same box and needs to be wired into the console during assembly, which adds time compared to a stand without a heat element.",
    specs: ["90 inch wide console", "50 inch electric fireplace included", "12-color LED, 96 combinations", "8 stainless shelves + 2 cabinets", "Two-tier design", "Fits TV up to 100 inch"],
    pros: ["Includes 50 inch electric fireplace", "Highest review count in this roundup", "8 shelves plus 2 cabinets for storage", "96 LED color combinations"],
    cons: ["Fireplace wiring adds assembly time", "$384.99 near the top of this price range", "90 inch width is the minimum recommended for a 100 inch TV"],
    bestFor: "Living rooms that want a combined media console and supplemental heat source.",
  },
  {
    id: "bedeep-94-5-fluted-mid-century-tv-stand",
    rank: 3,
    badge: "Best Design",
    name: "Bedeep 94.5\" Fluted Mid Century TV Stand (Walnut, RGB LED)",
    price: "$219.99",
    rating: "4.2 stars",
    reviews: "46 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51+AQ8xXCQL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GV2TSTZJ?tag=theofficejournal-20",
    description: "5 inch console uses fluted tambour sliding doors across a walnut finish, giving it a mid century look that most straight-panel media stands lack. Five flexible storage compartments sit behind the sliding doors, and remote-controlled RGB LED lighting runs along the base for ambient accent lighting.\n\n5 inch span, which is wider than the 90 inch minimum recommended for a 100 inch TV. Bedeep backs the unit with a lifetime warranty, and the stand is rated to fit screens up to 100 inches and larger.",
    specs: ["94.5 inch wide", "Tambour sliding doors", "5 storage compartments", "Remote-controlled RGB LED", "7 wood legs", "Lifetime warranty", "Fits TV up to 100 inch+"],
    pros: ["94.5 inch width comfortably clears a 100 inch TV", "Lifetime warranty", "Distinct mid century fluted design", "5 flexible storage compartments"],
    cons: ["Lowest rating count in this roundup at 46 ratings", "4.2 stars is the lowest average here", "No fireplace or power outlet option"],
    bestFor: "Buyers who want a design-forward console with warranty coverage over brand recognition.",
  },
  {
    id: "chartustriable-93-led-tv-stand",
    rank: 4,
    badge: "Best Value",
    name: "chartustriable 93\" LED TV Stand (Black, High Gloss + Power)",
    price: "$259.98",
    rating: "4.4 stars",
    reviews: "253 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51vH+xL-jUL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0G2RB9B7Z?tag=theofficejournal-20",
    description: "The chartustriable 93 inch stand has a high-gloss black finish and app-controllable LED lighting on top of the standard remote control. Two AC outlets and two USB ports are built into the frame, so streaming devices, a router, or phone chargers can plug in without running a power strip across the floor. Four upper compartments sit above two larger enclosed cabinets, splitting the storage between open display space and closed doors. At 93 inches wide it fits screens between 85 and 100 inches, and the price undercuts most other fireplace and premium finish options in this roundup.",
    specs: ["93 inch wide", "High-gloss finish", "App + remote LED control", "2 AC outlets + 2 USB ports", "4 upper compartments + 2 cabinets", "Fits TV 85-100 inch"],
    pros: ["Built-in power outlets and USB ports", "App-controlled LED lighting", "$259.98 competitive price", "6 total storage sections"],
    cons: ["High-gloss finish shows fingerprints and dust", "93 inch width fits but leaves little margin for a 100 inch panel", "No fireplace option"],
    bestFor: "Buyers who want built-in power access for streaming gear without paying for a fireplace insert.",
  },
  {
    id: "breezestival-98-farmhouse-tv-stand",
    rank: 5,
    badge: "Widest Fireplace Option",
    name: "Breezestival 98\" Farmhouse TV Stand (Black, 36\" Fireplace)",
    price: "$439.99",
    rating: "4.3 stars",
    reviews: "46 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51iwpjfbieL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GRSM1S25?tag=theofficejournal-20",
    description: "The Breezestival 98 inch console is the widest fixed-width stand in this roundup outside of the extendable option, giving a 100 inch TV substantial overhang margin on both sides. A 36 inch fireplace insert sits in the center section with 12 flame colors and 12 strip LED colors, plus a heat range from 60 to 99 degrees Fahrenheit and a 9-hour shutoff timer. Two glass-front cabinets flank the fireplace along with an open shelf section for a streaming box or gaming console. Because the fireplace insert ships as its own component inside the console box, plan for an added wiring step during assembly separate from the frame itself.",
    specs: ["98 inch wide", "36 inch fireplace insert included", "12 flame colors + 12 strip LED colors", "60-99°F heat range", "9-hour timer", "2 glass cabinets + open shelf", "Fits TV up to 100 inch"],
    pros: ["98 inch width, widest fixed stand here", "9-hour fireplace timer with auto shutoff", "12 flame color options", "2 enclosed glass cabinets"],
    cons: ["$439.99 highest price in this roundup", "46 ratings is a small sample size", "Fireplace ships separately and requires wiring during setup"],
    bestFor: "Buyers who want maximum width margin around a 100 inch TV along with a fireplace insert.",
  },
  {
    id: "oneblis-97-fireplace-tv-stand",
    rank: 6,
    badge: "Largest Fireplace",
    name: "OneBlis 97\" Fireplace TV Stand (Walnut, Mid Century + 60\" Fireplace)",
    price: "$423.89",
    rating: "4.5 stars",
    reviews: "35 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51+Rx+4UoLL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0G1M8NGZ5?tag=theofficejournal-20",
    description: "The OneBlis 97 inch console includes a 60 inch electric fireplace insert, the largest fireplace of any stand in this roundup, set into a walnut mid century frame with curved sliding doors. Twelve flame LED colors are controllable from the included remote, and the ETL certification on the electrical components covers both the fireplace and the LED accent lighting.\n\nThree open compartments sit alongside two enclosed cabinet sections behind the curved sliding doors. At 97 inches wide the stand comfortably clears a 100 inch TV's roughly 87 inch panel width, though buyers should confirm floor space before ordering given the insert's size and weight when combined with the frame.",
    specs: ["97 inch wide", "60 inch electric fireplace included", "12-color flame LED", "Curved walnut sliding doors", "3 open + 2 cabinet compartments", "ETL certified", "Fits TV up to 100 inch"],
    pros: ["60 inch fireplace, largest in this roundup", "ETL certified electrical components", "97 inch width with strong overhang margin", "Curved mid century door design"],
    cons: ["35 ratings is the smallest sample size here", "$423.89 near the top of this price range", "Large fireplace insert adds significant assembly weight"],
    bestFor: "Buyers who want the largest available fireplace insert paired with a wide 100 inch TV console.",
  },
  {
    id: "aiegle-95-1-tv-stand",
    rank: 7,
    badge: "Best Budget Pick",
    name: "AIEGLE 95.1\" TV Stand (Dark Brown, 4 Flip-Down Drawers)",
    price: "$149.99",
    rating: "3.8 stars",
    reviews: "152 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41zd19WEvZL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0CZHGRQSY?tag=theofficejournal-20",
    description: "1 inch stand is the lowest priced option in this roundup, using four different-sized flip-down drawers instead of standard cabinet doors or open shelving. The drawers open downward on hinges, which keeps items visible and accessible without needing to pull a full drawer track out. The top surface is treated to resist moisture and scratches, useful for setting down drinks or remote controls near a large TV setup. 8 star rating is the lowest in this roundup and buyers should weigh the price savings against that feedback. 1 inch width fits a 100 inch TV. 8 stars, lowest rating in this roundup.",
    specs: ["95.1 inch wide", "4 flip-down drawers, different sizes", "Moisture and scratch resistant top", "Minimalist design", "Fits TV up to 100 inch", "Lowest price in this roundup"],
    pros: ["$149.99, lowest price by a wide margin", "95.1 inch width fits a 100 inch TV", "Flip-down drawers keep contents visible", "Moisture-resistant top surface"],
    cons: ["3.8 stars, lowest rating in this roundup", "No fireplace, LED, or power outlet features", "Flip-down drawer hinges may wear faster than standard drawer slides"],
    bestFor: "Budget-focused buyers who need a wide stand without fireplace or lighting extras.",
  },
  {
    id: "etelifrank-extendable-tv-stand",
    rank: 8,
    badge: "Best Extendable",
    name: "Etelifrank Extendable TV Stand (Walnut, 68.5\"-98.4\" Adjustable)",
    price: "$374.67",
    rating: "4.4 stars",
    reviews: "52 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41uG7Hdf0uL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0F9F3RFGF?tag=theofficejournal-20",
    description: "4 inches wide on internal rails. That range means the same unit can serve a smaller TV today and extend later for a 100 inch upgrade, which fixed-width consoles cannot do without buying a second piece of furniture.\n\nThe mid century walnut frame includes three drawers and one open compartment, and Etelifrank rates the stand for screens between 65 and 100 inches. Assembly is described as straightforward relative to the fireplace models in this roundup, since there is no electrical insert to wire in.\n\nGrows with you from a smaller TV to 100 inch. 4 inch extension, width margin is tighter than fixed 97-98 inch stands.",
    specs: ["Extendable 68.5\"-98.4\" width", "Mid century walnut finish", "3 drawers + 1 open compartment", "Fits TV 65-100 inch", "No electrical insert to assemble"],
    pros: ["Only extendable stand in this roundup", "Grows with you from a smaller TV to 100 inch", "Easier assembly with no fireplace wiring", "3 drawers for enclosed storage"],
    cons: ["4 inch extension, width margin is tighter than fixed 97-98 inch stands", "52 ratings is a modest sample size", "Extension rails add a moving part that fixed consoles don't have"],
    bestFor: "Buyers who are upgrading toward a 100 inch TV but don't want to commit to a fixed maximum width yet.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "How wide should a TV stand be for a 100 inch TV?",
    a: "A 100 inch TV's screen measures roughly 87 inches diagonally corner to corner, so a stand between 90 and 98 inches wide gives comfortable overhang on both sides. Going narrower than 90 inches can leave the TV looking oversized for its base and reduces the stand's practical stability margin.",
  },
  {
    q: "What weight capacity do I need for a 100 inch TV stand?",
    a: "Most 100 inch TVs weigh between 100 and 150+ lbs before adding a soundbar or streaming devices, so look for a stand rated well above that figure rather than right at it. A stated capacity of 150 to 187 lbs or higher gives a safer working margin once accessories are added on top.",
  },
  {
    q: "Do fireplace TV stands require extra assembly work?",
    a: "The electric fireplace insert typically ships as a separate component inside the console's shipping box rather than pre-installed, which means wiring and mounting it into the frame is an added step beyond assembling the console itself. Plan for more assembly time than a stand without a fireplace.",
  },
  {
    q: "Should I anchor a TV stand to the wall for a 100 inch TV?",
    a: "Yes, anti-tip anchoring is strongly recommended for any freestanding stand holding a screen this large. The combination of a heavy panel and a mounting point that sits several feet off the floor increases tipping leverage, so a wall strap or bracket engaged into a stud adds a meaningful layer of safety.",
  },
  {
    q: "Is an extendable TV stand a good choice for a 100 inch TV?",
    a: "An extendable stand can be a good option if you're planning to upgrade to a 100 inch TV later but currently own a smaller screen, since it avoids buying two separate consoles. At full extension the width margin is typically tighter than a comparable fixed-width stand, so measure your specific TV before relying on the maximum extended width.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-90-inch", title: "Best TV Stands for 90 Inch TVs (2026)" },
  { href: "/guide/best-tv-stand-for-85-inch-tv", title: "Best TV Stands for 85 Inch TVs (2026)" },
];
