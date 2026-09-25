export const guideSlug = "best-tv-stand-small";
export const guideTitle = "The Best Small TV Stands for Everyday Use";
export const metaTitle = "Best Small TV Stands for Home Offices (2026)";
export const metaDescription =
  "A practical comparison of 9 small TV stands, focused on features, build and practical fit, and the trade-offs between them.";
export const mainKeyword = "tv stand small";
export const introParagraphs = [
  "A small footprint doesn't have to mean giving up storage or style. Compact TV stands are especially useful in apartments, dorm-adjacent living spaces, and bedrooms where a full-size media console would eat up too much floor space, the same small-space-first thinking that guides everything we cover.",
  "We compared these eight small TV stands based on product specs and buyer feedback, ranking them by footprint, storage layout, and how large a TV each one supports, from budget open-shelf designs to enclosed cabinet styles.",
];
export const lastUpdated = "2026-07-16";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/31o9dCJjkyL._SL500_.jpg";

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
    id: "furinno-turn-s-tube-3tier",
    rank: 1,
    badge: "Best Budget Pick",
    name: "Furinno TURN-S-TUBE Toolless Assembly 3-Tier TV Stand",
    price: "$37.91",
    rating: "4.2 stars",
    reviews: "4,012 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31o9dCJjkyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00X83JMUA?tag=theofficejournal-20",
    description: "The Furinno TURN-S-TUBE is the lowest-priced small TV stand in this guide, with 3-tier open shelving that keeps a streaming box, game console, and media accessories visible and within reach. Tool-free assembly means the tube-style frame snaps together without a screwdriver, which is a real time-saver for a quick apartment setup. The compact footprint suits TVs up to 55 inches and fits easily into bedrooms, dorm-adjacent spaces, or secondary living areas.",
    specs: ["3-tier open shelving", "Tool-free assembly", "Compact footprint", "Fits TV up to 55\"", "Lowest price in this guide"],
    pros: ["Lowest price in this guide at $37.91", "4,012 ratings, largest review base here", "Tool-free assembly", "Open shelving keeps media accessible"],
    cons: ["Open shelving offers no concealed storage", "Fits only up to 55\" TVs", "Basic materials at this price point"],
    bestFor: "Budget shoppers who want a proven, easy-to-assemble small TV stand for a bedroom or secondary room.",
  },
  {
    id: "furologee-55inch",
    rank: 2,
    badge: "Best Compact Footprint",
    name: "Furologee TV Stand for TVs up to 55 Inch",
    price: "$45.99",
    rating: "4.4 stars",
    reviews: "2,434 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51udeT9Ii8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CHDKQFJ8?tag=theofficejournal-20",
    description: "8 inches high, giving it one of the smallest footprints in this guide while still supporting TVs up to 55 inches. Open storage shelves keep a soundbar, streaming device, or game console within easy reach without needing to open a cabinet door. 4 stars, it offers a step up in rating over the Furinno pick for a modest price increase. The rustic brown finish and soundbar shelf design make it a practical fit for small bedrooms or apartment living rooms where floor space is limited.",
    specs: ["46.7\"L x 21.8\"H footprint", "Fits TV up to 55\"", "Open storage shelves", "Soundbar shelf", "Rustic brown finish"],
    pros: ["Compact 46.7\" x 21.8\" footprint", "4.4 stars across 2,434 ratings", "Dedicated soundbar shelf", "Affordable at $45.99"],
    cons: ["Fits only up to 55\" TVs", "Open shelving, no enclosed storage", "Limited to one finish option"],
    bestFor: "Buyers who want one of the smallest footprints in this guide while still supporting a 55-inch TV.",
  },
  {
    id: "vasagle-65inch-adjustable",
    rank: 3,
    badge: "Best Overall",
    name: "VASAGLE TV Stand for 65-Inch TVs",
    price: "$99.99",
    rating: "4.5 stars",
    reviews: "3,358 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/5145xFEr1jL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DXPQT1ZF?tag=theofficejournal-20",
    description: "7-inch footprint, a strong balance of TV size support and small-space efficiency. Two enclosed cabinets hide clutter like cable boxes and remotes, while two open compartments keep frequently used items accessible, and an adjustable shelf lets you customize the interior layout. 5 stars, it strikes a strong balance between proven reliability and support for a larger TV than the budget open-shelf picks in this guide. The mix of enclosed and open storage makes it one of the more versatile small stands here.",
    specs: ["58\"L x 19.7\"H footprint", "Fits TV up to 65\"", "2 enclosed cabinets", "2 open compartments", "Adjustable shelf"],
    pros: ["Fits up to 65\" TV in a compact footprint", "4.5 stars across 3,358 ratings", "Mix of enclosed and open storage", "Adjustable interior shelf"],
    cons: ["$99.99, mid-range price in this guide", "Larger than the budget open-shelf picks", "Cabinet assembly takes longer than open-shelf designs"],
    bestFor: "Buyers who want the best balance of compact footprint, larger TV support, and mixed storage.",
  },
  {
    id: "casaottima-65inch-farmhouse",
    rank: 4,
    badge: "Best Farmhouse Style",
    name: "Casaottima TV Stand for 65 Inch TV",
    price: "$129.99",
    rating: "4.4 stars",
    reviews: "445 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51lvFmey9eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FJR8WV91?tag=theofficejournal-20",
    description: "6 inches high while still fitting TVs up to 65 inches. 6-inch height gives it a more substantial, furniture-like presence than the lower-profile stands in this guide, which suits living rooms where the TV stand doubles as a visual anchor. The farmhouse finish and styling make it a natural match for buyers who want their small TV stand to coordinate with rustic or farmhouse-style decor elsewhere in the room.",
    specs: ["59\"L x 25.6\"H footprint", "Fits TV up to 65\"", "Farmhouse style", "Taller profile than most stands here"],
    pros: ["Fits up to 65\" TV", "4.4 stars across 445 ratings", "Farmhouse styling matches rustic decor", "Taller profile adds furniture presence"],
    cons: ["$129.99, upper-middle price in this guide", "Taller height uses more vertical wall space", "Farmhouse look won't suit all interiors"],
    bestFor: "Buyers who want farmhouse styling in a small TV stand with a taller, more substantial profile.",
  },
  {
    id: "jummico-65inch-barn-door",
    rank: 5,
    badge: "Highest Rated",
    name: "JUMMICO TV Stand for 65 Inch TV",
    price: "$119.99",
    rating: "4.6 stars",
    reviews: "4,218 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41GxiO7g3pL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SHDW2KT?tag=theofficejournal-20",
    description: "Sliding barn doors conceal the interior storage while adding a distinct rustic design element that stands out from plain cabinet doors.\n\n5 inches high, it has the tallest footprint of the 65-inch-capable stands in this guide, giving it extra presence in the room. The bright white finish keeps the barn door design from feeling too heavy, making it a versatile pick for both modern and farmhouse-adjacent living rooms.\n\n5\" height, tallest footprint in this guide.",
    specs: ["58\"L x 27.5\"H footprint", "Fits TV up to 65\"", "Sliding barn door design", "Bright white finish"],
    pros: ["4.6 stars, highest rating in this guide", "4,218 ratings, largest sample among 65\" stands", "Sliding barn doors conceal storage", "Fits up to 65\" TV"],
    cons: ["27.5\" height, tallest footprint in this guide", "$119.99, mid-to-upper price", "Barn door styling may not suit minimalist decor"],
    bestFor: "Buyers who want the most proven, highest-rated small TV stand that still fits a large 65-inch TV.",
  },
  {
    id: "superjare-boho-65inch",
    rank: 6,
    badge: "Best Boho Style",
    name: "SUPERJARE Boho TV Stand for 65 Inch TV",
    price: "$84.99",
    rating: "4.4 stars",
    reviews: "989 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51WMzKM-PrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BF8PCQWS?tag=theofficejournal-20",
    description: "The SUPERJARE brings a boho and rattan-inspired look to this guide, with natural wood legs and woven rattan-style door panels that stand apart from the farmhouse and modern designs elsewhere in this list. 7 inches high, it's one of the lower-profile stands here while still fitting TVs up to 65 inches.\n\nFor buyers decorating a room with boho, rattan, or natural-material accents, this is the clearest style match among the small TV stands in this guide.",
    specs: ["53.9\"L x 19.7\"H footprint", "Fits TV up to 65\"", "Boho/rattan styling", "Natural wood legs"],
    pros: ["Fits up to 65\" TV", "4.4 stars across 989 ratings", "Distinct boho/rattan styling", "Compact 19.7\" height"],
    cons: ["Rattan-style doors may show wear faster than solid wood", "$84.99, mid-range price", "Boho look is a narrower style fit than farmhouse or modern"],
    bestFor: "Buyers who want a boho or rattan aesthetic in a compact TV stand that still fits a 65-inch TV.",
  },
  {
    id: "lcrbol-fluted-doors-65inch",
    rank: 7,
    badge: "Best Mid-Century Style",
    name: "LCRBOL TV Stand with Fluted Doors for TVs up to 65\"",
    price: "$139.99",
    rating: "4.4 stars",
    reviews: "381 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41WH1pkWGVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCGBBB1S?tag=theofficejournal-20",
    description: "The LCRBOL features fluted door detailing in a walnut finish, giving it a mid-century modern look that's more refined than the plain-panel cabinets in this guide. 6 inches high, it has one of the smallest and lowest-profile footprints among the stands that fit a 65-inch TV. The walnut finish and fluted door texture make this the clearest mid-century modern option in this guide for buyers who want design detail beyond a flat door panel.",
    specs: ["54.3\"L x 19.6\"H footprint", "Fits TV up to 65\"", "Mid-century fluted door design", "Walnut finish"],
    pros: ["Compact 54.3\" x 19.6\" footprint", "4.4 stars across 381 ratings", "Distinct fluted door detailing", "Mid-century modern walnut finish"],
    cons: ["$139.99, highest price in this guide", "381 ratings, smaller sample than most picks here", "Fluted doors add cost over plain-panel designs"],
    bestFor: "Buyers who want mid-century modern design detail in a compact 65-inch-capable TV stand.",
  },
  {
    id: "vasagle-farmhouse-65inch",
    rank: 8,
    badge: "Best Farmhouse Value",
    name: "VASAGLE Farmhouse TV Stand for TVs up to 65 Inches",
    price: "$107.99",
    rating: "4.6 stars",
    reviews: "1,803 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41juGQmpQaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DS26WK98?tag=theofficejournal-20",
    description: "Sliding barn doors conceal interior storage and a 58-inch by 24-inch footprint fits TVs up to 65 inches without demanding excessive floor space. As a second farmhouse-style entry from VASAGLE alongside their non-farmhouse pick earlier in this guide, it demonstrates the brand's consistency across styles. For buyers who want farmhouse styling at a better price than the JUMMICO without sacrificing rating or storage capacity, this is the strongest match in this guide.",
    specs: ["58\"L x 24\"H footprint", "Fits TV up to 65\"", "Farmhouse style", "Sliding barn doors"],
    pros: ["4.6 stars, tied for highest rating in this guide", "1,803 ratings, strong review base", "Farmhouse styling at a lower price than the JUMMICO", "Fits up to 65\" TV"],
    cons: ["24\" height is on the taller side", "Barn door styling won't suit all interiors", "Similar footprint to the pricier JUMMICO pick"],
    bestFor: "Buyers who want farmhouse styling and a top rating at a better price than the JUMMICO.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand small often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand small holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand small over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand small you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand small that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  { q: "What size TV stand do I need for a small room?", a: "Match the stand's footprint to your available wall space first, then confirm it supports your TV's width. 7-inch Furologee up to a 59-inch Casaottima, so measure your space before assuming a stand will fit." },
  { q: "Can a small TV stand still support a 65-inch TV?", a: "Several stands in this guide, including the VASAGLE, JUMMICO, and Casaottima, fit TVs up to 65 inches while keeping a footprint under 60 inches long. The TV's stand or mount base needs to fit within the stand's top surface, not the TV's diagonal screen size." },
  { q: "Are open-shelf TV stands less durable than enclosed cabinet stands?", a: "Not necessarily less durable, but they offer less protection from dust and no way to hide cords and cable boxes. Open-shelf designs like the Furinno trade concealment for lower cost and simpler assembly, while enclosed cabinets like the VASAGLE add doors that keep clutter out of sight." },
  { q: "Do sliding barn door TV stands need extra clearance?", a: "They need side clearance for the door to slide open rather than front clearance for a swinging door. This can actually help in tight rooms where a standard cabinet door would bump into a sofa or wall when opened." },
  { q: "Is a taller or shorter TV stand better for a small room?", a: "7-inch options in this guide, sits lower and can make a room feel more open, especially with a wall-mounted TV. 5-inch options, adds furniture presence and can work well if the TV sits directly on top of the stand rather than being wall-mounted." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-and-coffee-table-set", title: "Best TV Stand and Coffee Table Sets (2026)" },
  { href: "/guide/best-tv-stand-bookshelf", title: "Best TV Stand Bookshelf Combos (2026)" },
];
