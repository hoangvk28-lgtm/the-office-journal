export const guideSlug = "best-standing-desks-with-storage";
export const guideTitle = "8 Best Standing Desks with Storage in 2026";
export const metaTitle = "Best Standing Desks with Storage in 2026 (Drawer Clearance Guide)";
export const metaDescription =
  "8 best standing desks with storage in 2026, compared on drawer weight impact on motor stability, floor clearance at minimum height, and true usable surface area.";
export const mainKeyword = "standing desk with storage";
export const introParagraphs = [
  "Adding drawers or shelves to a standing desk sounds like a simple upgrade until you factor in what storage actually costs you elsewhere. A loaded drawer stresses a motor differently depending on whether it's mounted center or off to one side, drawer contents can drag the floor before the desk reaches its lowest height, and the storage itself eats into the desk surface area you thought you were getting. None of these tradeoffs show up in a typical product photo.",
  "This guide looks specifically at how storage interacts with the standing desk mechanism itself, not just how many drawers a desk has. Below are 8 desks and desk-plus-cart combinations we evaluated for motor stability under load, floor clearance, combined weight capacity, and real usable surface area, ranging from $28.80 for a rolling laptop cart to $329.99 for a dual-motor bamboo-top desk.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41PNTa55d1L._SL500_.jpg";

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
    id: "furologee-l-shaped-power-outlet",
    rank: 1,
    badge: "Best L-Shaped with File Drawer",
    name: "Furologee 66-Inch L Shaped Desk with Power Outlet, File Drawer, Monitor Stands",
    price: "$99.99",
    rating: "4.4 stars",
    reviews: "2,032 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41PNTa55d1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C4XW9167?tag=theofficejournal-20",
    description:
      "This is a fixed-height L-shaped desk rather than a height-adjustable standing desk, but it earns a spot on this list for buyers weighing storage against sit-stand capability, since its file drawer and two built-in monitor stands offer real storage and surface organization that many standing desk frames lack entirely. The reversible L-shape design also gives more total surface area than most single-motor standing desks, useful if storage is your bigger priority than adjustability.\n\nBecause the height is fixed, there's no motor stability tradeoff to worry about with a loaded drawer, and no floor clearance concern from raising and lowering. If you decide you need height adjustment later, pair a separate standing desk converter with this surface rather than expecting this desk itself to adjust.\n\nA genuine advantage here is that power outlet built into the desk. The tradeoff is not height-adjustable.",
    specs: [
      "66 inch L-shaped fixed-height desk",
      "Built-in file drawer",
      "Power outlet included",
      "2 monitor stands",
      "Reversible corner configuration",
    ],
    pros: [
      "File drawer for real document storage",
      "Power outlet built into the desk",
      "Large total surface area",
      "No motor stability tradeoff since it's fixed height",
    ],
    cons: [
      "Not height-adjustable",
      "Would need a separate desk converter for sit-stand use",
      "Corner footprint doesn't suit every room layout",
    ],
    bestFor: "Buyers who prioritize file storage and surface area over height adjustability",
  },
  {
    id: "lufeiya-white-l-shaped",
    rank: 2,
    badge: "Best White L-Shaped with Drawers",
    name: "Lufeiya White L Shaped Computer Desk with Drawers and Storage Shelves",
    price: "$89.98",
    rating: "4.4 stars",
    reviews: "1,754 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41A3q0YLcML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJ8SSP2Q?tag=theofficejournal-20",
    description:
      "Like the Furologee above, this is a fixed-height L-shaped desk, chosen here for buyers who want a fabric drawer and open storage shelves without any of the drawer-versus-motor tradeoffs that come with an adjustable frame. The reversible corner design and built-in power outlet make it flexible for either side of a room.\n\nOpen shelves add visible storage that a closed drawer doesn't, useful for items you want within reach rather than tucked away. As with the Furologee, if height adjustment matters later, plan on adding it separately rather than expecting this desk to convert.\n\nPower outlet included. On the other hand, not height-adjustable. Neither should be a surprise once you know to look for it.",
    specs: [
      "47 inch L-shaped fixed-height desk",
      "Fabric drawer included",
      "Open storage shelves",
      "Power outlet built in",
      "Reversible corner configuration",
    ],
    pros: [
      "Fabric drawer plus open shelves for mixed storage",
      "Power outlet included",
      "No motor stability tradeoff, fixed height",
      "Lower price than most adjustable options with storage",
    ],
    cons: [
      "Not height-adjustable",
      "Open shelves less private than a closed drawer",
      "Corner footprint requirement",
    ],
    bestFor: "Buyers who want mixed open and closed storage on a budget fixed desk",
  },
  {
    id: "sweetcrispy-6-drawer",
    rank: 3,
    badge: "Most Drawers on a Fixed Desk",
    name: "Sweetcrispy 47-Inch Computer Desk with 6 Fabric Drawers and Storage Shelves",
    price: "$59.98",
    rating: "4.5 stars",
    reviews: "365 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/5106rxAZBUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FVDDHRRH?tag=theofficejournal-20",
    description:
      "Six fabric drawers make this the highest-storage-capacity desk in this list, all built into a fixed-height frame so there's no motor to stress and no floor clearance issue to worry about as the drawers fill up. Storage-heavy desks like this reduce usable desktop surface area by design, since drawer units take up depth that would otherwise be open desktop space. It's also one of the most affordable picks here. If you need this much closed storage on a height-adjustable frame instead, expect to pay significantly more and to actively manage drawer weight and placement to protect motor performance. No motor stability concerns. That's a real strength, but weigh it against the flip side: fixed height only.",
    specs: [
      "47 inch fixed-height desk",
      "6 fabric storage drawers",
      "Additional open shelves",
      "Compact corner-friendly footprint",
      "No motor, no height adjustment",
    ],
    pros: [
      "Most drawer storage in this list",
      "No motor stability concerns",
      "Affordable price",
      "Good for organizing many small items",
    ],
    cons: [
      "Fixed height only",
      "Six drawers meaningfully reduce open desktop surface",
      "Not a true standing desk",
    ],
    bestFor: "Buyers who need maximum drawer storage and don't need height adjustment",
  },
  {
    id: "techni-mobili-laptop-cart",
    rank: 4,
    badge: "Best Rolling Sit-to-Stand Cart with Storage",
    name: "Techni Mobili Sit-to-Stand Rolling Adjustable Height Laptop Cart with Storage",
    price: "$28.80",
    rating: "4.5 stars",
    reviews: "7,239 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31+f1oDDjoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B003M96GY0?tag=theofficejournal-20",
    description:
      "This is a manually adjustable rolling cart rather than a motorized standing desk, and its low price and small footprint make it a genuinely different category of storage-plus-adjustability than the larger desks on this list. Because the height adjustment is manual, there's no motor to worry about stressing under a loaded shelf, though you should still confirm the shelf itself stays level and doesn't shift as you roll and adjust it.\n\nIts open shelf storage is minimal compared to a drawer-equipped desk, better suited to a laptop, a notebook, and a few accessories than files or heavier equipment. For genuinely tight spaces where a full standing desk doesn't fit, this cart is the most flexible and least expensive option here.\n\nWorth calling out specifically: no motor, so no motor stability concern. The catch is manual adjustment, not motorized.",
    specs: [
      "Manual height adjustment",
      "Rolling casters",
      "Open shelf storage",
      "Compact 22 x 16 inch footprint",
      "Graphite finish",
    ],
    pros: [
      "Lowest price on this list by far",
      "No motor, so no motor stability concern",
      "Small footprint fits tight spaces",
      "Large review base with a strong rating",
    ],
    cons: [
      "Manual adjustment, not motorized",
      "Minimal storage compared to drawer desks",
      "Not suited to heavier equipment",
    ],
    bestFor: "Tight spaces that need a cheap, flexible rolling option over a full desk",
  },
  {
    id: "huanuo-32-electric-storage",
    rank: 5,
    badge: "Best Compact Motorized Desk for Storage Pairing",
    name: "HUANUO 32-Inch Small Electric Standing Desk, 4 Memory Height Settings",
    price: "$75.99",
    rating: "4.6 stars",
    reviews: "2,226 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F9X3FDYY?tag=theofficejournal-20",
    description:
      "The HUANUO is a genuine motorized standing desk without built-in storage, included here because its compact 32 inch top and single-motor frame make it a realistic base for pairing with a separate rolling storage cart or under-desk drawer, a common real-world setup for buyers who want both adjustability and storage without an expensive combined unit. Because it's a single-motor frame, an off-center loaded add-on drawer stresses it more than a centered load would, so plan any added storage carefully.\n\nFour memory height presets make repeated sit-stand transitions simple. Before pairing this desk with an under-desk drawer, confirm the combined desktop plus drawer load stays within the frame's stated capacity, and check that any drawer clears the floor at the desk's lowest height setting.\n\nCompact size suits small offices. Set against that, no built-in storage, requires separate cart or drawer. Both matter when comparing it to the other picks here.",
    specs: [
      "32 inch motorized standing desk",
      "4 memory height presets",
      "Single motor",
      "No built-in storage",
      "Compact footprint",
    ],
    pros: [
      "True motorized height adjustment",
      "Compact size suits small offices",
      "Memory presets for quick transitions",
      "Strong rating and review base",
    ],
    cons: [
      "No built-in storage, requires separate cart or drawer",
      "Single motor is more sensitive to off-center loads",
      "Smaller surface than the L-shaped fixed desks",
    ],
    bestFor: "Buyers who want a real motorized desk and will add their own storage separately",
  },
  {
    id: "furmax-electric-storage-pairing",
    rank: 6,
    badge: "Best Value Motorized Desk for Storage Pairing",
    name: "Furmax Electric Standing Desk, 45 x 24 Inches, 4 Height Position Memory",
    price: "$79.99",
    rating: "4.6 stars",
    reviews: "222 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41XkTgfpQgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FK3DD4F1?tag=theofficejournal-20",
    description:
      "Furmax offers a larger 45 by 24 inch top than the HUANUO at a similar price, another genuinely motorized desk without built-in storage that's best paired with a separate cart or under-desk unit. Its four memory height positions work the same way, letting you save your preferred sit and stand heights.\n\nThe larger surface leaves more usable desktop space even after accounting for a paired storage cart taking up some of the footprint beside it. As with any single-motor desk, watch drawer or cart placement to avoid an off-center load that stresses the motor unevenly over time.\n\nA genuine advantage here is that true motorized height adjustment. The tradeoff is no built-in storage.",
    specs: [
      "45 x 24 inch motorized standing desk",
      "4 height position memory",
      "Single motor",
      "No built-in storage",
      "Rustic brown finish",
    ],
    pros: [
      "Larger surface than the HUANUO for the same price range",
      "True motorized height adjustment",
      "Memory height presets",
      "Strong rating",
    ],
    cons: [
      "No built-in storage",
      "Smaller review sample than top picks",
      "Single motor, sensitive to off-center loads",
    ],
    bestFor: "Buyers who want a larger motorized surface to pair with their own storage",
  },
  {
    id: "flexispot-e6-dual-motor",
    rank: 7,
    badge: "Best Dual-Motor Desk for Heavier Storage Loads",
    name: "FLEXISPOT E6 3-Stage Dual Motor Electric Standing Desk, 55 x 28, Holds 220 lbs",
    price: "$284.99",
    rating: "4.4 stars",
    reviews: "311 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41WJcV8uQrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVQMQMY2?tag=theofficejournal-20",
    description:
      "A dual-motor frame handles an off-center loaded drawer or paired storage cart far more evenly than a single-motor desk, since the second motor compensates for the load imbalance a single motor would otherwise absorb alone. At 220 lbs of stated desktop capacity and a 55 by 28 inch surface, the E6 has real headroom to pair with under-desk storage while keeping the combined system load in check.\n\nNo storage is built in, so you'll still need to add your own drawer or cart, and you should still confirm any added unit clears the floor at the desk's lowest height setting. For buyers who want to store meaningfully heavier items than a rolling laptop cart, the dual-motor stability here is worth the higher price.\n\nHigh stated desktop capacity. On the other hand, no built-in storage. Neither should be a surprise once you know to look for it.",
    specs: [
      "55 x 28 inch dual motor standing desk",
      "220 lbs stated desktop capacity",
      "3-stage height adjustment",
      "Memory height presets",
      "One-piece desktop, ships in 2 boxes",
    ],
    pros: [
      "Dual motor handles off-center loads better than single motor",
      "High stated desktop capacity",
      "Large surface area",
      "Suited to pairing with heavier storage add-ons",
    ],
    cons: [
      "No built-in storage",
      "Highest price on this list",
      "Smaller review sample relative to price point",
    ],
    bestFor: "Buyers planning to add heavier storage who need dual-motor load stability",
  },
  {
    id: "flexispot-e6-bamboo-dual",
    rank: 8,
    badge: "Best Dual-Motor Bamboo Top for Storage Pairing",
    name: "FlexiSpot E6 Bamboo 3-Stage Dual Motor Electric Standing Desk, 55 x 28, Holds 220 lbs",
    price: "$329.99",
    rating: "4.4 stars",
    reviews: "763 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41PnkwnA3VL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09DYF1SRQ?tag=theofficejournal-20",
    description:
      "Same dual-motor frame and 220 lb stated desktop capacity as the E6 above, in a solid bamboo desktop with a white frame instead of the standard black one-piece top. The dual motor advantage for off-center storage loads applies equally here, a meaningful stability benefit if you're pairing this desk with an under-desk drawer or filing cart rather than relying on the bare desktop alone.\n\nBamboo is a genuinely more durable and premium desktop material than laminate, though it adds to the price over the standard E6. As with the other motorized desks here, no storage is built in, so budget separately for a cart or drawer and check its floor clearance at your desk's lowest setting.\n\nPremium bamboo desktop material. That's a real strength, but weigh it against the flip side: highest price on this list.",
    specs: [
      "55 x 28 inch dual motor standing desk",
      "Solid bamboo desktop",
      "220 lbs stated desktop capacity",
      "3-stage height adjustment",
      "Memory height presets",
    ],
    pros: [
      "Dual motor for stable off-center storage loads",
      "Premium bamboo desktop material",
      "High stated desktop capacity",
      "Large review base",
    ],
    cons: [
      "Highest price on this list",
      "No built-in storage",
      "Heavier desktop material adds to shipping weight",
    ],
    bestFor: "Buyers who want a premium bamboo surface with dual-motor storage stability",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Motor stability under storage load",
    description:
      "Distinguished single-motor from dual-motor frames and noted which desks are better suited to carrying an off-center loaded drawer or storage cart without added stress.",
  },
  {
    title: "Floor clearance at minimum height",
    description:
      "Considered whether an added drawer or cart's contents, especially hanging files, could realistically drag the floor as the desk lowers to its minimum height setting.",
  },
  {
    title: "Combined desktop and storage load capacity",
    description:
      "Checked stated desktop weight capacity against what a loaded drawer or cart would realistically add, since these are separate ratings that combine into one system load.",
  },
  {
    title: "Usable surface area after storage",
    description:
      "Weighed how much a desk's drawers, shelves, or a paired storage cart actually reduce open desktop working area, not just the desk's raw listed dimensions.",
  },
  {
    title: "Value for price",
    description:
      "Weighed storage capacity, motor type, and surface area against price across the range of price points in this comparison in this list.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a standing desk with storage often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the standing desk with storage holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this standing desk with storage over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any standing desk with storage you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A standing desk with storage that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "HUANUO 32"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Techni Mobili Sit"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $29",
          "Techni Mobili Sit"
        ],
        [
          "Up to $330",
          "FlexiSpot E6 Bamboo 3"
        ]
      ]
    }
  },
  {
    "subheading": "Techni Mobili Sit vs FlexiSpot E6 Bamboo 3",
    "cards": [
      {
        "label": "Techni Mobili Sit",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "FlexiSpot E6 Bamboo 3",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Techni Mobili Sit unless your specific need genuinely calls for the pricier pick's extra headroom."
  },
  {
    "subheading": "By Review Base Confidence",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Largest, most-established review base",
          "Techni Mobili Sit"
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Buyer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Clear, specific dimensions or capacity and a real, established review history, not just marketing language."
      },
      {
        "label": "In this comparison",
        "text": "Techni Mobili Sit is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where FlexiSpot E6 Bamboo 3's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Techni Mobili Sit covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Does adding a drawer really affect a standing desk's motor?",
    a: "Yes, if the drawer is off-center. A single-motor frame absorbs an unevenly distributed load less smoothly than a dual-motor frame, which can add wear over years of daily raising and lowering. If you're adding meaningful storage weight, a dual-motor desk like the FLEXISPOT E6 is the more stable choice.",
  },
  {
    q: "Can a drawer drag the floor when the desk is at its lowest height?",
    a: "It can, especially if the drawer holds hanging files or heavier contents. Test floor clearance at your desk's actual minimum height setting with the drawer loaded the way you intend to use it, not empty, before assuming it clears.",
  },
  {
    q: "Is a desk's weight capacity the same as its combined storage capacity?",
    a: "No. A desk's stated weight capacity usually refers to the desktop surface alone. If you add a drawer, cart, or pedestal, add that weight to your desktop items and confirm the total stays within the frame's overall rated capacity, not just the desktop rating in isolation.",
  },
  {
    q: "How much desktop space does built-in storage actually take away?",
    a: "Drawers, pedestals, and paired rolling carts commonly reduce usable desktop depth or width by 2 to 4 inches or more. Factor that into your real working surface area rather than relying on the desk's raw listed dimensions alone.",
  },
  {
    q: "Should I buy a desk with built-in storage or pair a motorized desk with a separate cart?",
    a: "It depends on your priority. A fixed-height desk with built-in drawers, like the Furologee or Sweetcrispy in this list, sidesteps every motor and floor clearance concern but gives up sit-stand adjustability. A motorized desk paired with a separate cart, like the HUANUO or FLEXISPOT E6, keeps adjustability but requires checking motor type and floor clearance carefully.",
  },
  {
    q: "Can a drawer block cable management on a standing desk?",
    a: "It can if the drawer sits directly under or beside the desk's cable grommet, blocking a clean pass-through to a power strip or dock below. Check drawer position against grommet location before buying if cable routing matters to your setup.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-standing-desks-for-short-people", title: "Best Standing Desks for Short People (2026)" },
  { href: "/guide/best-4-leg-standing-desks", title: "Best 4-Leg Standing Desks (2026)" },
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
];
