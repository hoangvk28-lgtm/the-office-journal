const BASE = "/images/guides/best-tv-stand-90-inch";

export const guideSlug = "best-tv-stand-90-inch";
export const guideTitle = "The Best TV Stands for 90 Inch TVs, Compared";
export const metaTitle = "Best TV Stands for 90 Inch TVs (2026)";
export const metaDescription =
  "We compared 8 TV stands for 90 inch TVs on features, build and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-07-16";
export const readTime = "12 min";
export const heroImage = `https://m.media-amazon.com/images/I/516d2hh1fJL._SL500_.jpg`;

export const mainKeyword = "90 inch tv stand";
export const introParagraphs = [
  "A 90 inch TV is heavier and wider than most living room furniture is built to handle, so a stand rated only for a general \"large TV\" category can leave the screen overhanging the edges or resting near its weight limit. The stands below are explicitly rated up to 90 inches and list a real weight capacity, not just a diagonal screen size on the box.",
  "Some of the picks add a fireplace insert or wall-mounted floating design, both of which change the installation process compared with a standard console. We call out those differences below so you know what to expect before the stand arrives.",
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
    id: "huuger-79-tv-stand-led",
    rank: 1,
    badge: "Best Overall",
    name: "Huuger 79\" TV Stand for 85/90\" TV (LED + Power)",
    price: "$139.99",
    rating: "4.6 stars",
    reviews: "612 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/516d2hh1fJL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0F6TLS4WJ?tag=theofficejournal-20",
    description: "The Huuger 79 inch stand is built specifically for 85 and 90 inch TVs, with a black frame, app-controlled 60,000-color LED strip along the base, and a PU leather front panel. The power center includes 4 AC outlets, 2 USB ports, and 1 USB-C port, so a soundbar, streaming box, and console can all plug in without a separate power strip on the floor.\n\nInside, a mesh shelf keeps a router or cable box ventilated while a closed drawer hides remotes and cables out of sight. At 79 inches wide it sits narrower than the TV itself for a clean look, and the listing confirms fit up to 90 inch screens rather than a vague large-TV claim.\n\nBuilt-in power center with USB-C.",
    specs: ["79\" wide", "Fits TV up to 90\"", "App-controlled 60,000-color LED", "4 AC + 2 USB + 1 USB-C outlets", "PU leather front", "Mesh shelf + drawer"],
    pros: ["Explicitly rated for 85/90\" TVs", "Built-in power center with USB-C", "App-controlled LED lighting", "Mesh shelf keeps electronics ventilated"],
    cons: ["79\" width narrower than some 90\" TVs edge to edge", "LED app requires Bluetooth pairing", "Drawer is small for larger accessories"],
    bestFor: "Buyers who want a stand purpose-built for 90 inch TVs with built-in charging and lighting.",
  },
  {
    id: "comfycorner-866-power-outlet",
    rank: 2,
    badge: "Best Value Storage",
    name: "ComfyCorner 86.6\" TV Stand (Mid-Century, Power Outlet)",
    price: "$239.99",
    rating: "4.6 stars",
    reviews: "209 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41blorC5dTL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GQ2VMXX6?tag=theofficejournal-20",
    description: "6 inch stand follows the same mid-century sliding door layout as pricier competitors but adds three dedicated cable ports and a faster 50-minute assembly time based on the included instructions. Six compartments behind the walnut sliding doors split cleanly between media components and general storage.\n\nA built-in strip provides 2 USB and 2 AC outlets inside the cabinet, so a streaming box or gaming console can stay plugged in without cords crossing the front of the unit. The stand is rated to fit TVs up to 90 inches and comes in at a lower price than the closest sliding-door alternative.",
    specs: ["86.6\" wide", "Fits TV up to 90\"", "Walnut sliding doors", "6 storage compartments", "2 USB + 2 AC outlets", "3 cable ports", "50-minute assembly"],
    pros: ["Faster assembly than comparable sliding-door stands", "Lower price than similar walnut competitors", "3 dedicated cable ports", "6 compartments for media and general storage"],
    cons: ["No LED lighting", "Fewer ratings than top-ranked pick", "Walnut finish only, no color options"],
    bestFor: "Buyers who want the sliding-door storage layout at a lower price point.",
  },
  {
    id: "bestier-80-led-gaming-black-marble",
    rank: 3,
    badge: "Best for Gaming Setups",
    name: "Bestier 80\" LED Gaming TV Stand (Black Marble)",
    price: "$169.99",
    rating: "4.4 stars",
    reviews: "149 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/5148GSEHdHL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0CHML4J66?tag=theofficejournal-20",
    description: "The Bestier 80 inch stand pairs a black marble-look surface with a 7-color, 22-mode LED strip aimed at gaming and home theater rooms. A center cabinet handles a console or receiver while adjustable glass shelves on either side hold speakers or additional gear, and the frame is rated to 266 lbs total capacity.\n\nThe listing specifies fit for TVs between 85 and 90 inches rather than a general large-screen claim, which matters at this size since some similarly priced stands cap out closer to 80 inches. The glass shelves are tempered and adjustable in height to fit taller components.\n\nAdjustable glass shelves fit taller gear.",
    specs: ["80\" wide", "Fits TV 85-90\"", "7-color 22-mode LED", "266 lbs capacity", "Center cabinet", "Adjustable glass shelves"],
    pros: ["266 lbs capacity, highest listed here", "Adjustable glass shelves fit taller gear", "22 LED lighting modes", "Explicit 85-90\" TV fit range"],
    cons: ["Glass shelves require careful handling during assembly", "Black marble finish shows dust and fingerprints", "80\" width is narrower than some competitors"],
    bestFor: "Gamers and home theater setups that want RGB lighting and open shelving for multiple components.",
  },
  {
    id: "bonzy-home-86-led-white",
    rank: 4,
    badge: "Best White Finish",
    name: "Bonzy Home 86\" LED TV Stand (White, 2 Cabinets)",
    price: "$169.99",
    rating: "4.3 stars",
    reviews: "284 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41RsS1jfL-L._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D2CTWXYG?tag=theofficejournal-20",
    description: "6 inches wide and is one of the few white-finish options in this size range, which suits brighter living rooms where black stands can look heavy against light walls. A 15-color LED strip runs along the base, and two closed cabinets with doors keep media equipment and clutter out of view.\n\nThe minimalist design skips the mesh shelving and drawers found on other picks in favor of a simpler two-cabinet layout. The listing states fit for TVs between 75 and 100 inches, giving it the widest stated compatibility range of any stand in this roundup, though buyers with a 90 inch TV should still confirm the TV's stand-mount width before ordering.",
    specs: ["86.6\" wide", "Fits TV 75-100\"", "15-color LED", "2 cabinets with doors", "Minimalist design"],
    pros: ["White finish option, uncommon at this size", "Widest stated TV compatibility range", "15-color LED base lighting", "Simple 2-cabinet layout is easy to keep tidy"],
    cons: ["Fewer storage compartments than sliding-door competitors", "No built-in USB or AC outlets", "4.3 rating is lowest among top picks"],
    bestFor: "Buyers who want a lighter-finish stand for bright rooms and don't need extensive built-in storage.",
  },
  {
    id: "mxv-90-fireplace-tv-stand",
    rank: 5,
    badge: "Best Fireplace Combo",
    name: "MXV 90\" Fireplace TV Stand (60\" Electric Fireplace)",
    price: "$331.48",
    rating: "4.3 stars",
    reviews: "57 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/51GKtHmXdAL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GCHVQVS1?tag=theofficejournal-20",
    description: "5 inches long and built around a 60 inch electric fireplace insert, which arrives as a separate component that needs to be wired into the console during assembly rather than a purely decorative panel. Alexa and app control cover both the fireplace and the 12-color LED strip, and two enclosed cabinets provide storage on either side of the firebox.\n\nThe frame is rated to 132 lbs capacity, noticeably lower than the non-fireplace stands in this roundup, since a portion of the internal structure is dedicated to housing the heating unit. Buyers should measure the fireplace insert's own box dimensions separately from the console, since fireplace TV stands typically ship the insert and the cabinet in two packages.\n\nAlexa and app control for fireplace and LED.",
    specs: ["90.5\" wide", "Fits TV up to 90\"", "60\" electric fireplace insert", "Alexa + app control", "12-color LED", "2 storage cabinets", "132 lbs capacity"],
    pros: ["Includes a full 60\" electric fireplace insert", "Alexa and app control for fireplace and LED", "Longest stand in the roundup at 90.5\"", "Two enclosed storage cabinets"],
    cons: ["132 lbs capacity is the lowest here", "Fireplace insert ships and installs separately from the cabinet", "Highest price in this roundup"],
    bestFor: "Buyers who specifically want a working electric fireplace built into a 90 inch TV stand.",
  },
  {
    id: "dhh-866-fluted-tv-stand",
    rank: 6,
    badge: "Best for Robot Vacuums",
    name: "DHH 86.6\" Fluted TV Stand (Mid-Century, Black)",
    price: "$204.99",
    rating: "4.5 stars",
    reviews: "51 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41rTN-y5a1L._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GMH5R3K1?tag=theofficejournal-20",
    description: "The DHH stand sits on elevated legs that leave clearance underneath for a robot vacuum to pass through, a detail most 90 inch TV stands skip since their sliding-door cabinets sit flush to the floor. The fluted black front panel gives it a more modern texture than the flat walnut sliding-door stands in this roundup, while still offering eight total storage compartments.\n\nBuilt-in power includes 2 USB and 2 AC outlets, and the sliding doors need no swing clearance in front of the unit. The listing confirms fit for TVs up to 90 inches.\n\n8 storage compartments, most in this roundup.",
    specs: ["86.6\" wide", "Fits TV up to 90\"", "Elevated legs for robot vacuum clearance", "8 storage compartments", "2 USB + 2 AC outlets", "Sliding doors", "Fluted modern design"],
    pros: ["Elevated legs allow robot vacuum clearance", "8 storage compartments, most in this roundup", "Fluted design stands out from flat-panel competitors", "Built-in 2 USB + 2 AC outlets"],
    cons: ["Smallest review count among top picks", "Elevated legs mean visible floor space underneath", "Black only, no lighter finish option"],
    bestFor: "Households with a robot vacuum that needs to clean under the entertainment center.",
  },
  {
    id: "amerlife-80-floating-fireplace",
    rank: 7,
    badge: "Best Wall-Mounted Floating",
    name: "AMERLIFE 80\" Floating Fireplace TV Stand (Wall Mount, Black)",
    price: "$239.99",
    rating: "4.4 stars",
    reviews: "737 ratings",
    imageUrl: `https://m.media-amazon.com/images/I/41j4Yuw-RjL._SL500_.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0CGHNR9KT?tag=theofficejournal-20",
    description: "The AMERLIFE stand mounts directly to the wall rather than sitting on the floor, which frees up the space beneath it for a rug, bench, or floor cleaning and works well in rooms where floor space is at a premium. It includes a 40 inch electric fireplace insert, LED lighting, and a premium mirrored top surface, with a rated capacity of 200 lbs for the TV and stand combined.\n\nBecause the unit is fully wall-mounted rather than resting on legs, installation requires anchoring into real wall studs rather than drywall anchors alone, especially given the combined weight of a 90 inch TV plus the fireplace insert and cabinet itself.",
    specs: ["80\" wide", "Fits TV up to 90\"", "Wall-mounted floating design", "40\" electric fireplace insert", "LED lighting", "200 lbs capacity", "Mirrored surface"],
    pros: ["Floating design frees up floor space", "Includes 40\" electric fireplace insert", "200 lbs capacity for TV plus stand", "Most-reviewed product in this roundup"],
    cons: ["Wall mounting requires locating real studs, not just anchors", "Installation is more involved than floor-standing stands", "Mirrored surface shows fingerprints and dust"],
    bestFor: "Rooms with limited floor space where a wall-mounted floating console makes sense.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a 90 inch tv stand often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the 90 inch tv stand holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this 90 inch tv stand over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any 90 inch tv stand you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A 90 inch tv stand that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: { q: string; a: string }[] = [
  { q: "Will any TV stand fit a 90 inch TV?", a: "Many stands marketed for \"large TVs\" are only tested and rated up to 85 inches. Always check the listing for an explicit statement that the stand fits TVs up to 90 inches, and compare the stand's weight capacity against your specific TV's actual weight, which can be 60 to 90 lbs for a 90 inch panel." },
  { q: "Do fireplace TV stands for 90 inch TVs come fully assembled?", a: "The fireplace insert and the cabinet typically ship as separate components in separate boxes. Assembly involves building the cabinet frame and then installing and wiring the fireplace insert into its designated opening, which takes longer than assembling a standard TV console." },
  { q: "Is a floating wall-mounted TV stand safe for a 90 inch TV?", a: "It can be, but only if it is anchored into real wall studs rather than drywall anchors alone. The combined weight of a 90 inch TV, the cabinet, and any fireplace insert can exceed 150 to 200 lbs, so the mounting hardware needs to span multiple studs and be rated for that total load." },
  { q: "How wide should a TV stand be for a 90 inch TV?", a: "Most 90 inch TVs measure between 78 and 80 inches wide edge to edge. A stand between 79 and 87 inches wide generally looks proportional and provides enough surface area for the TV base or wall-mount bracket clearance plus a soundbar in front." },
  { q: "What is the difference between sliding doors and hinged cabinet doors on a TV stand?", a: "Sliding doors move sideways within the frame and require no clearance in front of the stand to open, which works well in narrower living rooms. Hinged doors swing outward and need several inches of open floor space in front of the cabinet to fully open." },
  { q: "Do 90 inch TV stands include built-in power outlets?", a: "Several stands in this size range include a built-in power strip inside one cabinet compartment, typically offering 2 AC outlets and 2 USB ports, which lets a streaming device or router stay powered without a separate extension cord crossing the floor." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-for-85-inch-tv", title: "Best TV Stands for 85 Inch TVs (2026)" },
];
