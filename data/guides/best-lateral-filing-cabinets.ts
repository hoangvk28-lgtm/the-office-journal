export const guideSlug = "best-lateral-filing-cabinets";
export const guideTitle = "8 Best Lateral Filing Cabinets in 2026";
export const metaTitle = "Best Lateral Filing Cabinets in 2026 (Honest Lateral vs Vertical Guide)";
export const metaDescription =
  "8 best lateral filing cabinets in 2026, honestly compared against vertical pedestal alternatives on clearance, file orientation, top surface load, and workflow speed.";
export const mainKeyword = "lateral filing cabinet";
export const introParagraphs = [
  "A lot of listings labeled 'lateral filing cabinet' on Amazon are actually narrow vertical pedestal cabinets wearing the keyword for search visibility, not true side-opening lateral units. That distinction matters because a genuine lateral cabinet needs clearance for its full width in front of every drawer, while a vertical cabinet needs less floor space but holds fewer hanging files per drawer and opens differently. We're flagging that difference honestly in this guide rather than calling every wide-ish 2-drawer cabinet lateral just because the word appears in its title.",
  "Below are 8 file cabinets we evaluated for genuine lateral versus vertical construction, front clearance needs, file orientation support, and top surface load capacity for workspace use. Two picks are confirmed genuinely lateral by their listed dimensions and description, and the rest are narrower vertical or mobile pedestal cabinets included as honest budget or small-footprint alternatives, clearly marked as such.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31wnmQx3CxL._SL500_.jpg";

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
    id: "letaya-2-drawer-lateral",
    rank: 1,
    badge: "Genuinely Lateral, Best Overall",
    name: "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet for Home Office",
    price: "$99.99",
    rating: "4.2 stars",
    reviews: "1,671 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=theofficejournal-20",
    description:
      "This is a genuinely lateral cabinet, confirmed by both its title and its listed dimensions of roughly 28.35 inches wide by 15.74 inches deep, a wide-and-shallow footprint that's the actual defining shape of a lateral file rather than a vertical pedestal. Its side-to-side width means files hang parallel to the front of the cabinet, which lets you see more folder tabs at a glance than a vertical drawer does.\n\nThe tradeoff of that width is front clearance: you need floor space for the full 28.35 inch width in front of the cabinet to open drawers comfortably, which can conflict with a chair path in a tight office. A lock is included, and the anti-tip interlock common to lateral cabinets means only one drawer opens at a time, worth knowing if you're used to a vertical cabinet where that's less commonly enforced.\n\nWide file view for faster browsing. That's a real strength, but weigh it against the flip side: needs full-width front clearance to open drawers.",
    specs: [
      "Genuinely lateral, 28.35 inch width",
      "2 locking drawers",
      "Hanging file support for Letter/Legal/A4",
      "Metal construction",
      "Anti-tip drawer interlock",
    ],
    pros: [
      "Confirmed true lateral footprint by dimensions",
      "Wide file view for faster browsing",
      "Locking drawers included",
      "Solid metal build",
    ],
    cons: [
      "Needs full-width front clearance to open drawers",
      "Only one drawer opens at a time due to the anti-tip interlock",
      "Wider footprint won't fit every small office layout",
    ],
    bestFor: "Buyers who specifically need a true lateral cabinet and have the front clearance for it",
  },
  {
    id: "devaise-3-drawer-lateral-mobile",
    rank: 2,
    badge: "Genuinely Lateral, Most Drawers",
    name: "DEVAISE 3-Drawer Mobile File Cabinet, Lateral Filing Cabinet, Rustic Brown",
    price: "$94.99",
    rating: "4.2 stars",
    reviews: "2,444 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51vzgnkbcjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=theofficejournal-20",
    description:
      "The second confirmed genuinely lateral cabinet on this list, this DEVAISE model adds a third drawer and rolls on casters, useful if you need to reposition it away from a doorway or chair path when it's not in active use. Its lateral construction means the same front-clearance consideration applies as with the Letaya above: budget floor space for the cabinet's full width, not just its depth.\n\nThe wood-look rustic brown finish suits a home office better than bare metal for buyers who want the cabinet visible rather than tucked away. As with any lateral file, check that the hanging rails support your preferred file orientation, front-to-back or side-to-side, before assuming both work out of the box.\n\nExtra third drawer over the 2-drawer lateral pick. On the other hand, still needs full-width front clearance when in use. Both are worth keeping in mind before deciding.",
    specs: [
      "Genuinely lateral, 3 drawers",
      "Rolling casters",
      "Wood-look rustic brown finish",
      "Hanging file support",
      "Mobile design",
    ],
    pros: [
      "Confirmed true lateral construction",
      "Extra third drawer over the 2-drawer lateral pick",
      "Casters allow repositioning away from clearance conflicts",
      "Attractive finish for visible placement",
    ],
    cons: [
      "Still needs full-width front clearance when in use",
      "Only one drawer opens at a time",
      "Casters add a small amount of height to check under desks",
    ],
    bestFor: "Buyers who want a third lateral drawer and the flexibility to reposition the cabinet",
  },
  {
    id: "devaise-2-drawer-under-desk",
    rank: 3,
    badge: "Vertical Pedestal, Not True Lateral",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Fully Assembled, Under Desk, Black",
    price: "$129.99",
    rating: "4.5 stars",
    reviews: "1,681 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wnmQx3CxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=theofficejournal-20",
    description:
      "To be direct about this pick: it's a narrow under-desk vertical pedestal cabinet, not a genuine lateral file, despite appearing in lateral filing cabinet search results. Its design is built to slide under a desk rather than sit beside it with wide front clearance, which is actually an advantage in a small office where a true lateral cabinet's width wouldn't fit.\n\nIt earns a spot here as an honest alternative for buyers who searched for a lateral cabinet but whose room genuinely fits a vertical pedestal better. Fully assembled on arrival and finished in black, it's a strong choice if minimal floor footprint matters more than the wide file view a true lateral cabinet offers.\n\nA genuine advantage here is that fully assembled, no setup required. The tradeoff is that not a true lateral cabinet despite category placement.",
    specs: [
      "Vertical pedestal style, not lateral",
      "Fully assembled",
      "Fits under a standard desk",
      "Lock included",
      "Letter/Legal/A4 support",
    ],
    pros: [
      "Smallest footprint of the higher-rated picks",
      "Fully assembled, no setup required",
      "Fits under most desks",
      "Strong 4.5 star rating",
    ],
    cons: [
      "Not a true lateral cabinet despite category placement",
      "Fewer files visible per drawer than a lateral cabinet",
      "Narrower drawers hold less per pull than a lateral drawer",
    ],
    bestFor: "Buyers who need under-desk vertical storage, not genuine lateral filing",
  },
  {
    id: "letaya-3-drawer-mobile-vertical",
    rank: 4,
    badge: "Vertical Mobile, Best Under-Desk Capacity",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinets",
    price: "$99.99",
    rating: "4.5 stars",
    reviews: "1,373 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=theofficejournal-20",
    description:
      "Also a vertical mobile pedestal cabinet, not a lateral one, this Letaya model is built specifically for under-desk placement with three drawers instead of two. It's included as an honest alternative for the same reason as the DEVAISE above: a lot of buyers searching for lateral cabinets actually need the smaller footprint a vertical pedestal provides.\n\nThree drawers give more sorting capacity than a 2-drawer vertical option, useful if you want to separate active files, archived files, and general supplies without a true lateral cabinet's wide footprint. It arrives fully assembled and includes a lock across all drawers.\n\nFully assembled. That said, not a true lateral cabinet despite category placement. Neither should be a surprise once you know to look for it.",
    specs: [
      "Vertical mobile pedestal, not lateral",
      "3 locking drawers",
      "Fully assembled",
      "Fits under desk",
      "Letter/Legal/A4 support",
    ],
    pros: [
      "Three drawers for more sorting capacity",
      "Fully assembled",
      "Small footprint fits under most desks",
      "Strong rating and large review base",
    ],
    cons: [
      "Not a true lateral cabinet despite category placement",
      "Narrower drawers than a lateral file",
      "Fewer files visible per drawer at a glance",
    ],
    bestFor: "Buyers who want more under-desk drawer capacity without a lateral cabinet's width",
  },
  {
    id: "gyiiyuo-2-drawer-extended-desktop",
    rank: 5,
    badge: "Vertical Mobile with Extended Desktop",
    name: "GYIIYUO 2 Drawer File Cabinet with 24-Inch Extended Desktop, Mobile Filing Cabinet",
    price: "$56.99",
    rating: "4.2 stars",
    reviews: "1,425 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=theofficejournal-20",
    description:
      "Another vertical mobile pedestal cabinet rather than a true lateral, the GYIIYUO's standout feature is its 24 inch extended desktop, which doubles as a printer stand or small work surface on top of the file storage. It's worth checking the top surface load rating before placing a printer and monitor combo on it together, since a budget cabinet like this typically tops out well below what a dedicated lateral cabinet's flat top can hold.\n\nA side bag adds a small extra storage pocket, a nice touch for a mobile cabinet meant to roll between a desk and a closet. As with the other vertical picks here, expect narrower drawers and fewer visible files per pull than a genuine lateral cabinet.\n\nWorth calling out specifically: lowest price on this list. The catch is not a true lateral cabinet.",
    specs: [
      "Vertical mobile pedestal, not lateral",
      "24 inch extended desktop surface",
      "Side storage bag",
      "Fabric drawer",
      "Rolling casters",
    ],
    pros: [
      "Extended desktop adds usable surface, not just storage",
      "Lowest price on this list",
      "Side bag for small extra storage",
      "Mobile casters for repositioning",
    ],
    cons: [
      "Not a true lateral cabinet",
      "Top surface load capacity likely limited for heavy printer plus monitor setups",
      "Fabric drawer less durable than metal over years of use",
    ],
    bestFor: "Buyers who want a small desk extension and light storage together, not lateral filing",
  },
  {
    id: "vasagle-custos-2-drawer",
    rank: 6,
    badge: "Vertical, Smallest True Footprint",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Small Rolling Filing Cabinet for Home Office",
    price: "$52.99",
    rating: "4.1 stars",
    reviews: "7,901 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31xyJKdJz-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BQJ5WL24?tag=theofficejournal-20",
    description:
      "At 15.7 by 16.5 by 27.6 inches, the VASAGLE is a genuinely narrow vertical cabinet, the smallest true footprint on this list and clearly not a lateral file by its own listed dimensions. It carries the largest review base here by a wide margin, a strong signal of reliability at this price and size tier even though the category match to 'lateral' is a search-term mismatch, not an accurate description.\n\nIt doubles as a printer stand thanks to its flat top, and its rolling casters make it easy to tuck under a desk or move to a closet when not needed. If a genuinely small footprint matters more than a lateral cabinet's wide file view, this is a well-reviewed vertical option worth considering honestly on its own terms.\n\nGenuinely smallest footprint here. Set against that, not a lateral cabinet, despite appearing in lateral search results. Both matter when comparing it to the other picks here.",
    specs: [
      "Vertical, not lateral, 15.7 inch width",
      "2 drawers",
      "Rolling casters",
      "Doubles as printer stand",
      "Matte black finish",
    ],
    pros: [
      "Largest review base on this list",
      "Genuinely smallest footprint here",
      "Doubles as a printer stand",
      "Affordable price",
    ],
    cons: [
      "Not a lateral cabinet, despite appearing in lateral search results",
      "Narrower drawers than any lateral pick",
      "Smaller top surface load capacity than a full lateral cabinet",
    ],
    bestFor: "Buyers who actually want the smallest possible footprint, not true lateral capacity",
  },
  {
    id: "bynsoe-2-drawer-vertical-locked",
    rank: 7,
    badge: "Explicitly Vertical, Budget Lock Option",
    name: "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Filing Storage Cabinet",
    price: "$64.99",
    rating: "4 stars",
    reviews: "1,303 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=theofficejournal-20",
    description:
      "This one calls itself vertical right in the title, so there's no ambiguity here: it's a straightforward vertical filing cabinet, included as a clearly labeled budget alternative for buyers whose search led them to a lateral filing cabinet list but whose actual space or budget favors a vertical cabinet instead. Assembly is required, unlike several fully-assembled picks above.\n\nA lock is included across its two drawers, and steel construction keeps the price reasonable. If you specifically need lateral filing, skip this pick and choose the Letaya or DEVAISE lateral cabinets above instead.\n\nThe standout detail is that lock included. Balancing that out, assembly required.",
    specs: [
      "Explicitly vertical, not lateral",
      "2 locking drawers",
      "Steel construction",
      "Letter size file support",
      "Assembly required",
    ],
    pros: [
      "Clearly labeled vertical design, no ambiguity",
      "Lock included",
      "Affordable steel build",
      "Reasonable size for a small office corner",
    ],
    cons: [
      "Assembly required",
      "Not suitable if you specifically need lateral filing",
      "Lower rating than the other picks on this list",
    ],
    bestFor: "Budget buyers who are fine with a vertical cabinet, clearly not seeking true lateral filing",
  },
  {
    id: "fluted-mobile-file-cabinet-wood",
    rank: 8,
    badge: "Vertical Mobile, Best Design Accent",
    name: "3 Drawers Fluted Mobile File Cabinet with Lock, Rolling Printer Stand Table, Oak",
    price: "$109.99",
    rating: "4.1 stars",
    reviews: "66 Amazon ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51et6Q1hCpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJZPVMG8?tag=theofficejournal-20",
    description:
      "This is a vertical mobile pedestal cabinet with a decorative fluted wood front, not a lateral cabinet, and its three narrower drawers plus rolling design make it better suited as a printer stand and light storage than genuine lateral hanging-file capacity. Its review count is the smallest on this list, so weigh the design appeal against that limited feedback sample.\n\nA lock secures the drawers, and the oak fluted styling stands out visually against the plain metal cabinets elsewhere on this list, a real consideration if the cabinet will be visible in a shared or client-facing space. For genuine lateral filing needs, this is not the pick, but for a decorative rolling storage and printer stand combo, it's a reasonable niche option.\n\nDoubles as a printer stand. That's a real strength, but weigh it against the flip side: smallest review sample on this list.",
    specs: [
      "Vertical mobile pedestal, not lateral",
      "3 drawers",
      "Fluted oak wood front",
      "Lock included",
      "Rolling printer stand top",
    ],
    pros: [
      "Distinctive fluted design accent",
      "Doubles as a printer stand",
      "Lock included",
      "Rolling mobility",
    ],
    cons: [
      "Smallest review sample on this list",
      "Not a lateral cabinet",
      "Narrower drawers limit hanging file capacity",
    ],
    bestFor: "Buyers who want a decorative rolling printer stand with light drawer storage, not lateral filing",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Genuine lateral vs vertical construction",
    description:
      "Checked each listing's stated dimensions and description against the actual defining shape of a lateral cabinet, wide and shallow, rather than trusting the word 'lateral' in a title alone.",
  },
  {
    title: "Front clearance requirements",
    description:
      "Weighed how much floor space each cabinet's full width needs in front of its drawers, and flagged where that clearance could conflict with a chair path in a tight office.",
  },
  {
    title: "File orientation support",
    description:
      "Considered whether a cabinet's hanging rails support front-to-back or side-to-side file orientation, since not every model supports both.",
  },
  {
    title: "Top surface load capacity",
    description:
      "Evaluated whether a cabinet's flat top could realistically support a printer, monitor, or both together without exceeding a reasonable load estimate for its build.",
  },
  {
    title: "Value for price",
    description:
      "Weighed genuine lateral versus vertical construction, drawer count, and finish quality against price across the range of price points in this comparison in this list.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Verify actual steel gauge, not just \"metal\" in the listing",
    "explanation": "A filing cabinet described as \"metal\" can still be built with a thin metal face over a particleboard or MDF core rather than genuine steel construction throughout, and even among fully steel cabinets, gauge thickness (a lower number means thicker, sturdier steel) varies meaningfully between products that look nearly identical in listing photos.\n\nThis matters directly for how the cabinet holds up to years of drawer use and how well it resists denting or flexing under a fully loaded drawer's weight.\n\nCheck the listing specifically for a stated steel gauge number, and be skeptical of the word \"metal\" alone without a gauge figure or a clear description of full-steel versus metal-faced construction."
  },
  {
    "criterion": "Check for full-extension versus partial-extension drawer slides",
    "explanation": "Full-extension drawer slides let a drawer pull completely out of the cabinet body, giving access to files at the very back, while partial-extension slides only pull the drawer out part way, leaving files at the rear harder to reach without leaning or reaching awkwardly into the cabinet.\n\nThis distinction matters a lot for daily usability, especially for a deep drawer holding hanging files toward the back, but rarely gets mentioned clearly in listing bullet points that focus on drawer count instead.\n\nCheck the listing specifically for \"full-extension\" language, and check reviews for mentions of how far drawers actually pull out in practice."
  },
  {
    "criterion": "Confirm anti-tip safety features if you have kids, pets, or plan a fully loaded cabinet",
    "explanation": "A filing cabinet with multiple drawers can tip forward if more than one drawer is pulled open at once while loaded with paper, a real safety hazard, and better-designed cabinets include an anti-tip interlock mechanism that physically prevents opening a second drawer while another is already open.\n\nThis matters more in a household with kids or pets who might pull on drawers, or if you plan to keep the cabinet fully loaded with heavy paper files rather than lightly used.\n\nCheck the listing specifically for a stated anti-tip or interlock safety feature, since this detail is frequently omitted from budget cabinet listings entirely."
  },
  {
    "criterion": "Match hanging file compatibility to your actual folder sizes",
    "explanation": "Not every filing cabinet drawer accommodates both letter-size and legal-size hanging files, some are sized for letter only, and a drawer that looks roomy in a photo may not actually fit the wider legal-size folders many home offices and small businesses still use for certain documents.\n\nThis matters directly if any portion of your filing includes legal-size paperwork, buying based on drawer count or overall cabinet size alone without checking hanging-file compatibility is a common and easily avoidable mistake.\n\nCheck the listing specifically for stated letter and/or legal-size hanging file compatibility, not just the general drawer dimensions."
  },
  {
    "criterion": "Weigh assembly requirements and real delivered weight before ordering",
    "explanation": "Filing cabinets range from fully assembled units shipped ready to use to flat-packed kits requiring meaningful assembly time and, for a genuinely heavy steel cabinet, more than one person to safely maneuver into place.\n\nThis matters because assembly difficulty and real shipped weight are easy to underestimate from a product photo, and a fully assembled cabinet costs more but eliminates that setup friction and the risk of a DIY assembly not being as sturdy as a factory-built one.\n\nCheck the listing for whether the cabinet ships assembled or requires assembly, and check the stated shipping weight against how much lifting and maneuvering you're actually prepared to handle at delivery."
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
          "DEVAISE 2 Drawer Metal File Cabinet"
        ],
        [
          "Largest review base, strongest reliability signal",
          "VASAGLE CUSTOS 2"
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
          "Under $53",
          "VASAGLE CUSTOS 2"
        ],
        [
          "Up to $130",
          "DEVAISE 2 Drawer Metal File Cabinet"
        ]
      ]
    }
  },
  {
    "subheading": "Locking vs Non-Locking",
    "cards": [
      {
        "label": "Locking cabinet",
        "text": "Genuine security for sensitive documents, worth it if the cabinet sits in a shared or semi-public space. In this comparison: Letaya 2 Drawer File Cabinet with Lock, DEVAISE 2 Drawer Metal File Cabinet, Letaya 3 Drawer Mobile File Cabinet with Lock, BYNSOE 2 Drawer File Cabinet with Lock, 3 Drawers Fluted Mobile File Cabinet with Lock."
      },
      {
        "label": "Non-locking",
        "text": "Simpler and usually cheaper, fine for a private home office. In this comparison: DEVAISE 3, GYIIYUO 2 Drawer File Cabinet with 24, VASAGLE CUSTOS 2."
      }
    ],
    "note": "Default to locking unless the cabinet stays in a fully private, controlled-access space."
  },
  {
    "subheading": "By Drawer Count",
    "note": "Check each pick's listed drawer count and interior dimensions against your actual filing volume before buying. VASAGLE CUSTOS 2 is the most-reviewed option here if you want the safer bet."
  },
  {
    "subheading": "For Legal-Size Documents Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Confirmed letter and legal-size hanging file compatibility, not just general drawer dimensions."
      },
      {
        "label": "In this comparison",
        "text": "VASAGLE CUSTOS 2 is worth checking against its listed hanging-file compatibility before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real steel construction, anti-tip safety, and full-extension drawers, where DEVAISE 2 Drawer Metal File Cabinet's higher price buys real build-quality headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just need light, occasional storage for a small volume of documents, where VASAGLE CUSTOS 2 covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Are all the cabinets in this guide actually lateral filing cabinets?",
    a: "No, and we're upfront about that. Only the Letaya 2 Drawer and DEVAISE 3-Drawer Lateral Mobile are genuinely lateral by their listed dimensions. The rest are vertical or mobile pedestal cabinets included honestly as budget or small-footprint alternatives, since many buyers searching for 'lateral filing cabinet' actually need a smaller vertical unit instead.",
  },
  {
    q: "Why does a lateral cabinet only let one drawer open at a time?",
    a: "Genuine lateral cabinets include an anti-tip interlock, a safety mechanism that prevents more than one drawer opening at once to avoid tipping the cabinet forward under load. It does slow down workflows where you'd want two drawers open simultaneously, which is worth knowing before buying if that's how you work.",
  },
  {
    q: "How much floor clearance does a lateral filing cabinet actually need?",
    a: "A lateral cabinet needs clearance for its full width, typically 28 to 36 inches, in front of the drawers to open them comfortably, not just the depth the cabinet occupies against a wall. Measure your actual open floor space in front of the intended spot before buying, since this can conflict with a chair path in a tight office.",
  },
  {
    q: "Can I put a printer and monitor on top of a filing cabinet?",
    a: "It depends on the specific cabinet's top surface load rating, which typically ranges from 50 to 180 lbs depending on construction. A printer alone is usually fine on most picks here, but a printer plus monitor combo can exceed a budget lateral cabinet's rating, so check the current listing's weight rating before loading up the top surface.",
  },
  {
    q: "What's the difference between a lateral filing cabinet and a credenza?",
    a: "A lateral filing cabinet is built specifically around hanging file rails and stores files only, while a credenza offers mixed storage with shelves and cabinets for more than just files. If you need general storage beyond hanging files, a credenza is a different purchase, not something a lateral cabinet substitutes for.",
  },
  {
    q: "Why does a small vertical cabinet keep appearing in lateral filing cabinet search results?",
    a: "Many sellers use the word 'lateral' in a listing title for search visibility even when the product is a narrow vertical pedestal cabinet by its actual dimensions. Check the listed width and depth directly. A true lateral cabinet runs roughly 28 to 36 inches wide and shallow front to back, while a vertical cabinet is typically 15 to 18 inches wide and deeper.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
  { href: "/guide/best-filing-cabinets-for-small-spaces", title: "Best Filing Cabinets for Small Spaces (2026)" },
  { href: "/guide/best-rolling-filing-cabinets", title: "Best Rolling Filing Cabinets (2026)" },
];
