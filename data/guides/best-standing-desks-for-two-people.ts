export const guideSlug = "best-standing-desks-for-two-people";
export const guideTitle = "8 Best Standing Desks for Two People in 2026";
export const metaTitle = "Best Standing Desks for Two People, Honestly Reviewed (2026)";
export const metaDescription =
  "8 desks we evaluated for two-person use, with an honest split between the one purpose-built dual-workstation desk and single-user desks wide enough to share.";
export const mainKeyword = "standing desk for two people";
export const introParagraphs = [
  "Very few Amazon listings for standing desks are actually built for two people to use at once, and most guides on this topic quietly ignore that. Of the 8 picks below, only one is explicitly marketed as a two-person desk in its own title. The rest are single-user standing desks that can work for two people sharing a room only if the width, depth, and preset count happen to fit that use case, and we say so directly rather than pretending otherwise.",
  "If you and a partner are setting up side by side, the details that matter most are per-person surface width, independent versus shared height presets when you differ in height, and whether the desk has enough cable management capacity for two full workstations instead of one. Below we rank 8 options with an honest read on which ones genuinely suit two people and which ones are single desks that happen to be wide enough to consider.",
];
export const lastUpdated = "2026-07-26";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41jMGauB1nL._SL500_.jpg";

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
    id: "hsh-extra-large-home-office-desk-for-2",
    rank: 1,
    badge: "Only Purpose-Built Two-Person Desk",
    name: "HSH Extra Large Home Office Desk for 2 People, 78 Inch Long, Rustic Wood and Metal",
    price: "$219.97",
    rating: "4.6 stars from 263 Amazon ratings",
    reviews: "263 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41jMGauB1nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DLL4H69Z?tag=theofficejournal-20",
    description:
      "This is the only pick in this guide explicitly marketed for two people, with a 78-inch length that gives each person roughly 39 inches of surface, enough for a monitor and keyboard without crowding a shared centerline. It is a fixed-height desk rather than an electric standing desk, so there is no motorized height adjustment.\n\nBecause it is not height adjustable, both people sit at the same fixed height, which works fine if you are similar in height but is a real limitation if you differ by more than a few inches. The rustic wood and metal build is stable across its long span, though a fixed desk this wide should still be checked for center sag if you plan to load it heavily.\n\nWorth calling out specifically: 78-inch length gives real per-person surface area. The catch is fixed height only, no electric sit-stand adjustment.",
    specs: [
      "78-inch length, purpose-built for 2 people",
      "Rustic wood and metal construction",
      "Fixed height, not electric",
      "Supports dual monitor setups",
      "~39 inches of surface per person",
    ],
    pros: [
      "The only desk in this guide actually built for two users",
      "78-inch length gives real per-person surface area",
      "Stable wood and metal construction",
      "Supports two full monitor setups",
    ],
    cons: [
      "Fixed height only, no electric sit-stand adjustment",
      "Not ideal if users differ significantly in height",
      "Long span may need a center support check under heavy load",
    ],
    bestFor: "Two people of similar height who want a dedicated shared desk and do not need electric height adjustment",
  },
  {
    id: "huanuo-32-small-electric-standing-desk-two",
    rank: 2,
    badge: "Not Built for Two, Too Narrow",
    name: "HUANUO 32-inch Small Electric Standing Desk Adjustable Height, 4 Memory Height Settings",
    price: "$75.99",
    rating: "4.6 stars from 2,226 Amazon ratings",
    reviews: "2,226 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F9X3FDYY?tag=theofficejournal-20",
    description:
      "This is a single-user electric standing desk with a 32-inch width, well under the 36-inch-plus per-person minimum that makes side-by-side sharing workable. It is included here only as a reference point for how narrow a desk needs to avoid becoming for two people, not as a genuine recommendation for shared use.\n\nIts 4 memory height presets are shared by whoever is at the desk, which is fine for one person but would mean constant re-adjusting between two users with different heights. Treat this as a single-person desk, not a two-person option.\n\nCompact footprint for small rooms. Set against that, 32-inch width is too narrow for two people side by side. Both matter when comparing it to the other picks here.",
    specs: [
      "32-inch width, single-user desk",
      "4 memory height presets",
      "Electric height adjustment",
      "LightWalnut finish",
      "Not suited for side-by-side use",
    ],
    pros: [
      "Affordable single-person desk",
      "Compact footprint for small rooms",
      "Simple 4-preset memory control",
      "Strong review base",
    ],
    cons: [
      "32-inch width is too narrow for two people side by side",
      "Only one set of height presets to share",
      "No cable management capacity for two workstations",
    ],
    bestFor: "A single user, not recommended for two-person use despite appearing in searches for shared desks",
  },
  {
    id: "veken-55-large-electric-standing-desk-two",
    rank: 3,
    badge: "Borderline Width for Two",
    name: "Veken 55 Inch Large Electric Standing Desk, Gaming Table, White",
    price: "$109.99",
    rating: "4.6 stars from 1,747 Amazon ratings",
    reviews: "1,747 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41k4VBjAQzL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DWMNPW7D?tag=theofficejournal-20",
    description:
      "At 55 inches wide, this desk sits right at the edge of workable per-person surface area for two people, giving roughly 27 to 28 inches each, tighter than the 36-inch-plus that comfortable side-by-side use generally needs. It is marketed as a single-user gaming desk, not a two-person desk, so treat any shared use as a tight compromise rather than the intended design.\n\nIt has one set of shared electric height presets, meaning two people of different heights would need to renegotiate the setting every time they swap places. It could work for two people who are close in height and keep setups minimal, like two laptops rather than two full monitor rigs.\n\nA genuine advantage here is that could work as a tight two-person split for minimal setups. The tradeoff is marketed as single-user, not a genuine two-person desk.",
    specs: [
      "55-inch width, marketed as single-user",
      "White finish",
      "Shared electric height presets",
      "Gaming desk design",
      "~27 inches of surface per person if split",
    ],
    pros: [
      "Widest single-user desk in this guide at 55 inches",
      "Could work as a tight two-person split for minimal setups",
      "Strong review volume and rating",
      "Competitive price for the width",
    ],
    cons: [
      "Marketed as single-user, not a genuine two-person desk",
      "Only one shared set of height presets",
      "Per-person surface area is tight for two full monitor setups",
    ],
    bestFor: "Two people close in height running laptops or light setups who accept a tighter shared surface",
  },
  {
    id: "ergear-48x24-two-person-reference",
    rank: 4,
    badge: "Single-User Desk, Not Recommended for Two",
    name: "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk, Black",
    price: "$94.98",
    rating: "4.5 stars from 11,572 Amazon ratings",
    reviews: "11,572 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/415He+cLvaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B41YH9B6?tag=theofficejournal-20",
    description:
      "This is a well-reviewed single-user desk at 48 inches wide, still under the roughly 60 to 72 inches needed for two people to each get 30 or more inches of usable surface. It appears in searches for two-person desks mainly because of its width, not because it is designed for shared use.\n\nWith one shared set of height presets and a single cable management channel, this desk is best treated as a solid single-user pick rather than a genuine two-person option. Two people could split it in a pinch for very minimal setups, but it is not what this desk was built for.\n\nSolid mid-size footprint for one person. On the other hand, 48-inch width is tight for genuine two-person use. Neither should be a surprise once you know to look for it.",
    specs: [
      "48 x 24 inch, single-user desk",
      "Black finish",
      "Shared electric height presets",
      "Single cable management channel",
      "Largest review base in this guide",
    ],
    pros: [
      "Massive review volume for a proven single-user desk",
      "Solid mid-size footprint for one person",
      "Affordable price point",
      "Reliable electric height adjustment",
    ],
    cons: [
      "48-inch width is tight for genuine two-person use",
      "Single cable management channel, not built for two workstations",
      "One shared preset set forces renegotiating heights",
    ],
    bestFor: "A single user who wants a proven, widely reviewed desk, not a dedicated two-person setup",
  },
  {
    id: "fezibo-48x24-two-person-reference",
    rank: 5,
    badge: "Single-User Desk with a Matched Top",
    name: "FEZIBO Standing Desk, 48 x 24 Inches Electric Height Adjustable, White Frame/Maple Top",
    price: "$99.99",
    rating: "4.5 stars from 8,463 Amazon ratings",
    reviews: "8,463 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/418JjdqdnpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8MHPVPH?tag=theofficejournal-20",
    description:
      "Like the ErGear pick above, this is a 48 by 24 inch single-user desk, not a two-person design, and it lacks the surface width, independent presets, or doubled cable capacity that a genuine shared desk needs. Its splice-board maple top is a step up in material over basic laminate.\n\nIf two people were to share this desk, each would get about 24 inches of surface, tight even for two laptops side by side. This is a strong single-user pick that happens to surface in two-person searches due to its width, not a recommendation for actual shared use.\n\nHigh review volume with solid rating. That's a real strength, but weigh it against the flip side: not built for two people, surface too tight if split.",
    specs: [
      "48 x 24 inch, single-user desk",
      "White frame, maple splice-board top",
      "Shared electric height presets",
      "Not built for two workstations",
      "Strong review base",
    ],
    pros: [
      "Thicker maple splice-board top than basic laminate desks",
      "High review volume with solid rating",
      "Good single-user footprint",
      "Reasonable price",
    ],
    cons: [
      "Not built for two people, surface too tight if split",
      "Single shared preset set",
      "No doubled cable management capacity",
    ],
    bestFor: "A single user who wants a nicer desktop material, not a two-person setup",
  },
  {
    id: "vivo-42-converter-two-person-reference",
    rank: 6,
    badge: "Dual Monitor, Still Single-User",
    name: "VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand",
    price: "$219.99",
    rating: "4.5 stars from 598 Amazon ratings",
    reviews: "598 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41daFWT9JPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CNH9SQT7?tag=theofficejournal-20",
    description:
      "This converter's dual monitor stand supports two displays for one person, not two separate users, and it is worth clarifying that distinction since dual monitor and two-person are easy to conflate in a search. It sits on top of an existing desk rather than being a standalone two-person surface.\n\nAt 42 inches wide with a single riser platform, it has no independent space for a second person's keyboard and mouse. This is a genuinely useful single-user upgrade for someone who wants two screens, not a shared-desk solution.\n\nWorth calling out specifically: no floor assembly needed, sits on existing desk. The catch is dual monitor stand is for one person, not two users.",
    specs: [
      "42-inch width, single riser platform",
      "Dual monitor stand for one user",
      "Sits on top of an existing desk",
      "Not a two-person surface",
      "Solid rating for the category",
    ],
    pros: [
      "Dual monitor support for a single user's productivity setup",
      "No floor assembly needed, sits on existing desk",
      "Solid rating and reasonable review base",
      "Good for renters",
    ],
    cons: [
      "Dual monitor stand is for one person, not two users",
      "No independent surface for a second person's keyboard and mouse",
      "Reduces usable desktop depth once installed",
    ],
    bestFor: "A single user who wants two monitors, not a genuine two-person workstation",
  },
  {
    id: "claiks-24x48-two-person-reference",
    rank: 7,
    badge: "Single-User Desk, Budget Option",
    name: "Claiks Electric Standing Desk, 24x48 Inches, Black Frame/Rustic Brown Top",
    price: "$99.99",
    rating: "4.4 stars from 5,316 Amazon ratings",
    reviews: "5,316 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41oErF+y4gL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BZ7GXM4M?tag=theofficejournal-20",
    description:
      "This 24x48 inch desk is another single-user design that surfaces in two-person searches due to its width, but at 48 inches it offers the same tight per-person split as the similarly sized ErGear and FEZIBO picks above. The rustic brown finish gives it a warmer look than plain black or white options.\n\nWith one shared preset set and no doubled cable channel, it is best treated as a solid single-user desk at a reasonable price rather than a two-person recommendation. Two people would each get about 24 inches, workable only for the lightest of setups.\n\nReasonable price for the size. Set against that, not built for two people, tight surface split. Both matter when comparing it to the other picks here.",
    specs: [
      "24x48 inch, single-user desk",
      "Black frame, rustic brown top",
      "Shared electric height presets",
      "Splice board top design",
      "Solid review base",
    ],
    pros: [
      "Rustic finish adds warmth for a home office look",
      "Reasonable price for the size",
      "Solid review base",
      "Comparable footprint to other budget single-user picks",
    ],
    cons: [
      "Not built for two people, tight surface split",
      "Single shared preset set",
      "No doubled cable management capacity",
    ],
    bestFor: "A single user on a budget who wants a warmer wood-look finish, not a shared setup",
  },
  {
    id: "huuger-55x28-two-person-reference",
    rank: 8,
    badge: "Widest Single-User Desk, Deep Top",
    name: "Huuger 55 x 28 Large Electric Standing Desk, 27.6-inch Deep Desktop, Rustic Brown",
    price: "$139.99",
    rating: "4.4 stars from 555 Amazon ratings",
    reviews: "555 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41oHg37v77L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT3Y1X96?tag=theofficejournal-20",
    description:
      "At 55 inches wide and 27.6 inches deep, this is the widest and deepest single-user desk in this guide, which puts it closest to workable two-person dimensions among the non-purpose-built options. It is still marketed as a single-user desk, not a shared design, and includes only one set of height presets.\n\nIf two people share this desk, each gets roughly 27 to 28 inches of width with a genuinely useful 27.6-inch depth, better than the other single-user picks here for fitting two keyboards and monitors. It remains a compromise compared to the purpose-built HSH desk, but the extra depth helps.\n\nA genuine advantage here is that extra depth helps a tight two-person split more than shallower desks. The tradeoff is still marketed and built as single-user, not two-person.",
    specs: [
      "55 x 28 inch, single-user desk",
      "27.6-inch deep desktop",
      "Rustic Brown finish",
      "3 preset heights",
      "2 hooks included",
    ],
    pros: [
      "Widest and deepest single-user desk in this guide",
      "Extra depth helps a tight two-person split more than shallower desks",
      "Included hooks for bags or headphones",
      "Reasonable price for the size",
    ],
    cons: [
      "Still marketed and built as single-user, not two-person",
      "Only 3 height presets shared between users",
      "No doubled cable management for two full workstations",
    ],
    bestFor: "Two people who need the closest single-user substitute to a shared desk when the HSH is not an option",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Genuine two-person marketing versus width-only matches",
    description: "Checked each listing's actual marketing language to separate the one desk explicitly built for two people from single-user desks that merely appear in two-person searches due to width.",
  },
  {
    title: "Per-person surface area",
    description: "Divided total desk width by two to estimate realistic per-person surface, comparing that figure against the 36-inch-plus threshold that supports comfortable side-by-side use.",
  },
  {
    title: "Height preset flexibility across users",
    description: "Weighed whether a desk offers enough presets and adjustment range to accommodate two people differing in height, versus a single shared setting that forces renegotiation.",
  },
  {
    title: "Cable management capacity for two workstations",
    description: "Assessed whether cable routing on each desk realistically supports doubled cable volume from two full setups, not just one person's cables.",
  },
  {
    title: "Stability across a long or wide span",
    description: "Considered whether wider desks show signs of center sag or wobble risk under a heavier two-person load, especially on fixed-height designs without a center support.",
  },
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
          "HSH Extra Large Home Office Desk for 2 People"
        ],
        [
          "Largest review base, strongest reliability signal",
          "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk"
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
          "Under $76",
          "HUANUO 32"
        ],
        [
          "Up to $220",
          "VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand"
        ]
      ]
    }
  },
  {
    "subheading": "HUANUO 32 vs VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand",
    "cards": [
      {
        "label": "HUANUO 32",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to HUANUO 32 unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk"
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
        "text": "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where HUANUO 32 covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a standing desk often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the standing desk holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this standing desk over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any standing desk you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A standing desk that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "Which desk in this guide is actually built for two people?",
    a: "Only the HSH Extra Large Home Office Desk is explicitly marketed for 2 people, with a 78-inch length giving each person roughly 39 inches of surface. The other 7 picks are single-user desks that appear in two-person searches mainly due to their width, not because they were designed for shared use.",
  },
  {
    q: "Can two people share a 48 to 55 inch single-user standing desk?",
    a: "It is possible but tight. A 48-inch desk gives each person only about 24 inches, and a 55-inch desk gives about 27 to 28 inches, both below the roughly 36-inch-plus per-person width that comfortable side-by-side use generally needs. It works better for light setups like laptops than for two full monitor rigs.",
  },
  {
    q: "How many height presets do I need for two people sharing a desk?",
    a: "At least 4 memory presets are recommended so each person can save a preferred height rather than manually re-adjusting every time they swap places. A desk with a single shared setting or only 2 presets becomes a daily friction point once two different-height users are involved.",
  },
  {
    q: "Does dual monitor support mean a desk is built for two people?",
    a: "No. A dual monitor stand, like the one on the VIVO converter in this guide, supports two screens for one person's setup, not two separate users. It is a common point of confusion in search results but a different feature entirely from genuine two-person desk design.",
  },
  {
    q: "What happens if two people differ significantly in height and share one desk?",
    a: "Independent height zones or motors matter once users differ by about 5 inches or more, since a single shared motor forces the whole desk to one height at a time. None of the desks in this guide offer independent dual-zone height adjustment, so significant height differences are a genuine limitation to weigh before buying any of these.",
  },
  {
    q: "Will a wide single-surface desk sag in the middle under two people's equipment?",
    a: "Desks spanning 72 inches or more without a center leg support are more prone to visible midpoint sag under a loaded two-person setup. None of the picks in this guide reach that width, but it is worth checking for a center support on any wider desk you consider elsewhere.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-standing-desk-frames", title: "Best Standing Desk Frames for Desktop Compatibility (2026)" },
  { href: "/guide/best-standing-desks-for-heavy-setups", title: "Best Standing Desks for Heavy Setups (2026)" },
  { href: "/guide/best-dual-motor-standing-desks", title: "Best Dual-Motor Standing Desks (2026)" },
  { href: "/guide/best-standing-desks-with-storage", title: "Best Standing Desks with Storage (2026)" },
];
