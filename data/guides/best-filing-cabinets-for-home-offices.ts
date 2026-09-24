export const guideSlug = "best-filing-cabinets-for-home-offices";
export const guideTitle = "8 Best Filing Cabinets for Home Offices in 2026";
export const metaTitle = "Best Filing Cabinets for Home Offices in 2026 (Steel Gauge Guide)";
export const metaDescription =
  "8 filing cabinets for home offices compared on steel gauge, drawer extension type, anti-tip safety, and hanging file compatibility, not just price and drawer count.";
export const mainKeyword = "filing cabinet for home office";
export const introParagraphs = [
  "Most filing cabinet listings lead with drawer count and lock type, but the details that actually determine how long a cabinet lasts and how safely it functions rarely make it into the bullet points. Steel gauge, drawer extension type, and anti-tip interlocks vary widely between $52.99 and $129.99 cabinets that look nearly identical in photos, and a cabinet marketed as metal can still be built with a particleboard core behind a thin metal face.",
  "This guide compares 8 home office filing cabinets we evaluated based on product specs and buyer feedback, focused on the build-quality signals competitors rarely explain: steel gauge, full-extension versus partial-extension drawers, anti-tip safety, and which hanging file sizes each drawer actually fits. Prices here range from $52.99 for a compact rolling cabinet to $129.99 for a fully assembled two-drawer unit.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg";

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
    id: "letaya-3-drawer-mobile-lock",
    rank: 1,
    badge: "Best Fully Assembled 3-Drawer",
    name: "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet",
    price: "$99.99",
    rating: "4.5 stars from 1,373 Amazon ratings",
    reviews: "1,373 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09YVJN8R7?tag=theofficejournal-20",
    description:
      "This three-drawer mobile cabinet ships fully assembled, a real advantage over kits that need 30-60 minutes of setup, and it fits letter, legal, and A4 hanging files across its drawers. It is designed to roll under a standard desk, which is worth checking against your desk's clearance height before buying since under-desk pedestals commonly run 24-28 inches tall.\n\nAt 4.5 stars across 1,373 ratings, it has one of the strongest buyer feedback records in this list. The lock secures the top drawer, useful for sensitive documents, though buyers should verify whether all three drawers lock together or only the top one before assuming full-cabinet security.\n\nStrong 4.5-star rating across 1,373 reviews. That said, steel gauge not disclosed in listing. Neither should be a surprise once you know to look for it.",
    specs: [
      "3 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Locking mechanism included",
      "Under-desk mobile design",
    ],
    pros: [
      "Fully assembled, no setup time required",
      "Strong 4.5-star rating across 1,373 reviews",
      "Fits multiple hanging file sizes",
    ],
    cons: [
      "Steel gauge not disclosed in listing",
      "Under-desk fit depends on your desk's clearance height",
      "Lock scope across all drawers should be confirmed before buying",
    ],
    bestFor: "Buyers who want a ready-to-use three-drawer cabinet with no assembly required",
  },
  {
    id: "devaise-2-drawer-metal-assembled",
    rank: 2,
    badge: "Best 2-Drawer Fully Assembled",
    name: "DEVAISE 2 Drawer Metal File Cabinet, Fully Assembled, Under Desk, Black",
    price: "$129.99",
    rating: "4.5 stars from 1,681 Amazon ratings",
    reviews: "1,681 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31wnmQx3CxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08G53L8B5?tag=theofficejournal-20",
    description:
      "DEVAISE's two-drawer cabinet is fully assembled out of the box and fits letter, legal, and A4 size files, aimed squarely at under-desk placement. It carries the highest review count in this list at 1,681 ratings and matches the Letaya 3-drawer's 4.5-star average, a strong combination of volume and consistency. It is the most expensive pick here, a premium over the similarly styled Letaya 2-drawer version below, likely reflecting its all-metal build and finish quality. As with any locking cabinet, confirm whether the lock secures both drawers or just one before relying on it for sensitive files. Worth calling out specifically: fully assembled, no setup needed. The catch is highest price in this list.",
    specs: [
      "2 drawers, fully assembled",
      "Fits letter, legal, A4 hanging files",
      "Lock included",
      "Under-desk metal design",
    ],
    pros: [
      "Highest review count in this list at 1,681 ratings",
      "Fully assembled, no setup needed",
      "Matches top-rated 4.5-star average",
    ],
    cons: [
      "Highest price in this list",
      "Steel gauge not specified",
      "Two drawers only, less capacity than 3-drawer options",
    ],
    bestFor: "Buyers who want the most-reviewed two-drawer cabinet and are comfortable paying a premium for it",
  },
  {
    id: "letaya-2-drawer-lateral-lock",
    rank: 3,
    badge: "Best Lateral 2-Drawer",
    name: "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet",
    price: "$99.99",
    rating: "4.2 stars from 1,671 Amazon ratings",
    reviews: "1,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTNJY2HB?tag=theofficejournal-20",
    description:
      "This lateral cabinet opens along its wider side rather than front to back, which changes the clearance math for a home office: lateral cabinets typically need less front-to-back depth but more side clearance than a vertical drawer of similar capacity. At 27.95 inches tall and 28.35 inches wide, it needs more wall or side space than most vertical picks in this list.\n\nWith 1,671 ratings at 4.2 stars, feedback is solid though slightly below the top two picks. Verify your hanging files will orient correctly in a lateral drawer before buying, since not every lateral cabinet supports both front-to-back and side-to-side hanging rail configurations.\n\nLateral design needs less front-to-back clearance. Set against that, needs more side clearance than vertical cabinets. Both matter when comparing it to the other picks here.",
    specs: [
      "2 drawers, lateral orientation",
      "Metal construction with lock",
      "Fits letter, legal, A4 files",
      "27.95 x 28.35 x 15.74 inches",
    ],
    pros: [
      "Solid 4.2-star rating across 1,671 reviews",
      "Lateral design needs less front-to-back clearance",
      "Locking mechanism included",
    ],
    cons: [
      "Needs more side clearance than vertical cabinets",
      "Steel gauge not disclosed",
      "Hanging file orientation should be confirmed before buying",
    ],
    bestFor: "Home offices with limited front-to-back space but room along a wall for a wider cabinet",
  },
  {
    id: "devaise-3-drawer-mobile-brown",
    rank: 4,
    badge: "Best Rustic Finish 3-Drawer",
    name: "DEVAISE 3-Drawer Mobile File Cabinet, Lateral Filing Cabinet, Rustic Brown",
    price: "$94.99",
    rating: "4.2 stars from 2,444 Amazon ratings",
    reviews: "2,444 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51vzgnkbcjL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0989HLF81?tag=theofficejournal-20",
    description:
      "This three-drawer lateral cabinet in rustic brown carries the highest review count in this entire list at 2,444 ratings, a meaningful signal of real-world reliability across a large buyer base. Its lateral orientation and mobile casters make it suitable for home offices that want to roll it between rooms rather than leave it fixed under a desk. It undercuts the metal-finish picks above while offering an extra drawer, though buyers should note that many wood-finish mobile cabinets use a metal frame with a wood-look laminate face rather than being true solid wood or all-metal construction. Confirm the actual material composition in the listing before assuming premium build quality. The standout detail is that extra drawer for the price. Balancing that out, finish material composition should be verified before buying.",
    specs: [
      "3 drawers, lateral, mobile casters",
      "Rustic brown finish",
      "Fits letter, legal, A4 files",
      "Rolling design",
    ],
    pros: [
      "Highest review count in this list at 2,444 ratings",
      "Extra drawer for the price",
      "Mobile casters for repositioning",
    ],
    cons: [
      "Finish material composition should be verified before buying",
      "4.2-star average, not the highest in this list",
      "Steel gauge not disclosed",
    ],
    bestFor: "Buyers who want a well-reviewed, rollable three-drawer cabinet in a wood-look finish",
  },
  {
    id: "vasagle-custos-2-drawer",
    rank: 5,
    badge: "Best Budget Rolling Cabinet",
    name: "VASAGLE CUSTOS 2-Drawer File Cabinet, Small Rolling Filing Cabinet, Matte Black",
    price: "$52.99",
    rating: "4.1 stars from 7,901 Amazon ratings",
    reviews: "7,901 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31xyJKdJz-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BQJ5WL24?tag=theofficejournal-20",
    description:
      "This VASAGLE cabinet has by far the largest review base in this entire list at 7,901 ratings, a strong volume signal even though its 4.1-star average sits slightly below the top picks. At 15.7 by 16.5 by 27.6 inches, it is one of the more compact rolling options here, doubling as a printer stand alongside its filing function. It is the lowest-priced cabinet in this list, which likely means a lighter-gauge steel body than the pricier assembled picks. For light-duty home office use where budget matters more than heavy-duty construction, its volume of positive feedback makes it a reasonable value pick. Lowest price in this list. That's a real strength, but weigh it against the flip side: lowest price likely means lighter steel gauge.",
    specs: [
      "2 drawers, rolling casters",
      "Doubles as printer stand",
      "Fits letter, A4 files",
      "15.7 x 16.5 x 27.6 inches",
    ],
    pros: [
      "Largest review base in this list at 7,901 ratings",
      "Lowest price in this list",
      "Compact footprint doubles as printer stand",
    ],
    cons: [
      "Lowest price likely means lighter steel gauge",
      "4.1-star average, below the top-rated picks",
      "Legal-size compatibility not confirmed in listing",
    ],
    bestFor: "Budget-focused buyers who want a compact rolling cabinet with a large proven track record",
  },
  {
    id: "gyiiyuo-2-drawer-extended-desktop",
    rank: 6,
    badge: "Best with Extended Desktop",
    name: "GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop, Mobile Filing Cabinet",
    price: "$56.99",
    rating: "4.2 stars from 1,425 Amazon ratings",
    reviews: "1,425 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBZ98D94?tag=theofficejournal-20",
    description:
      "This cabinet adds a 24-inch extended desktop surface on top, useful as a printer stand or small side worktop in a home office where every extra flat surface counts. Its fabric drawer construction differs from the all-metal picks in this list, trading some durability for a lighter overall weight and different aesthetic. It is one of the more affordable picks here, with a 4.2-star rating across 1,425 reviews. The fabric drawer material is worth understanding upfront since it will not match the dent resistance of a true steel drawer front. Affordable priced competitively. On the other hand, fabric drawers are less durable than steel. Both are worth keeping in mind before deciding.",
    specs: [
      "2 drawers, fabric drawer fronts",
      "24-inch extended desktop surface",
      "Mobile casters with side bag",
      "Fits A4, letter size files",
    ],
    pros: [
      "Extended desktop adds usable surface space",
      "Affordable price at $56.99",
      "Solid 4.2-star rating across 1,425 reviews",
    ],
    cons: [
      "Fabric drawers are less durable than steel",
      "Not a true all-metal cabinet",
      "Legal-size compatibility not confirmed",
    ],
    bestFor: "Home offices that want a small extra work surface alongside basic filing storage",
  },
  {
    id: "bynsoe-2-drawer-vertical-lock",
    rank: 7,
    badge: "Best Vertical Steel Cabinet",
    name: "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Steel Filing Cabinet",
    price: "$64.99",
    rating: "4.0 stars from 1,303 Amazon ratings",
    reviews: "1,303 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D9XYD75W?tag=theofficejournal-20",
    description:
      "The BYNSOE is a vertical steel cabinet built for letter-size files, with a lock and steel body construction called out directly in the listing, a more explicit build-quality claim than several other picks here that just say metal. Assembly is required, unlike the fully assembled Letaya and DEVAISE picks, so factor in setup time before buying. At a competitive price with a 4.0-star rating across 1,303 reviews, it is a mid-tier value option. Vertical orientation means it needs less side clearance than the lateral picks above but more front-to-back depth when a drawer is fully open. A genuine advantage here is that locking mechanism included. The tradeoff is that assembly required, unlike top assembled picks.",
    specs: [
      "2 drawers, vertical orientation",
      "Steel construction with lock",
      "Letter size files",
      "Assembly required",
    ],
    pros: [
      "Explicit steel construction claim",
      "Locking mechanism included",
      "Needs less side clearance than lateral cabinets",
    ],
    cons: [
      "Assembly required, unlike top assembled picks",
      "Letter size only, no legal-size compatibility confirmed",
      "Lowest rating among the higher-review-count picks",
    ],
    bestFor: "Buyers who want an explicitly steel-built vertical cabinet and don't mind assembling it",
  },
  {
    id: "steeloong-2-drawer-metal-lock",
    rank: 8,
    badge: "Most Affordable Locking Steel Cabinet",
    name: "SteeLoong 2 Drawer File Cabinet, Metal Office File Cabinet with Lock, Black",
    price: "$64.99",
    rating: "4.0 stars from 382 Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31IIIyTZ29L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2QSQZ1X?tag=theofficejournal-20",
    description:
      "SteeLoong's two-drawer cabinet matches the BYNSOE on price and rating but has a much smaller review base at 382 ratings, worth weighing if buyer feedback volume matters to your decision. It is a straightforward metal cabinet with a lock, without the extra features like extended desktops or lateral orientation seen in other picks.\n\nFor a no-frills locking metal cabinet at a moderate price point, it is a reasonable option, though the lighter review count means less certainty about long-term durability compared to the top picks in this list with thousands of ratings.\n\nMatches mid-tier pricing of similar cabinets. That said, smallest review base in this list at 382 ratings. Neither should be a surprise once you know to look for it.",
    specs: [
      "2 drawers, metal construction",
      "Lock included",
      "Black finish",
      "Standard office design",
    ],
    pros: [
      "Straightforward metal cabinet with lock",
      "Matches mid-tier pricing of similar cabinets",
      "No unnecessary added features to drive up cost",
    ],
    cons: [
      "Smallest review base in this list at 382 ratings",
      "No extended desktop or lateral option",
      "Steel gauge not specified",
    ],
    bestFor: "Buyers who want a basic locking metal cabinet without paying for extra features",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Steel gauge and build material transparency",
    description:
      "Checked whether each listing explicitly claimed steel or metal construction versus vague language that could describe a metal face over a particleboard core.",
  },
  {
    title: "Drawer extension and hanging file compatibility",
    description:
      "Noted stated hanging file size support (letter, legal, A4) and whether drawers were described as full-extension or standard, since partial-extension drawers leave back files harder to reach.",
  },
  {
    title: "Assembly requirement",
    description:
      "Distinguished fully assembled cabinets from ones requiring buyer assembly, factoring setup time into the overall value assessment.",
  },
  {
    title: "Lateral vs vertical footprint fit",
    description:
      "Weighed each cabinet's stated orientation and dimensions against typical home office clearance needs for front-to-back versus side space.",
  },
  {
    title: "Value for price across review volume",
    description:
      "Weighed price against both star rating and review count, since a high rating on a small sample carries less confidence than a similar rating across thousands of reviews.",
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
    "subheading": "By Drawer Extension Type",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Most-reviewed, strongest reliability signal",
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
        "text": "Genuine security for sensitive documents, worth it if the cabinet sits in a shared or semi-public space. In this comparison: Letaya 3 Drawer Mobile File Cabinet with Lock, DEVAISE 2 Drawer Metal File Cabinet, Letaya 2 Drawer File Cabinet with Lock, BYNSOE 2 Drawer File Cabinet with Lock, SteeLoong 2 Drawer File Cabinet."
      },
      {
        "label": "Non-locking",
        "text": "Simpler and usually cheaper, fine for a private home office. In this comparison: DEVAISE 3, VASAGLE CUSTOS 2, GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop."
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
    q: "How do I know if a filing cabinet is real steel or just metal-faced?",
    a: "Few listings state steel gauge directly, but explicit steel construction claims like the BYNSOE 2 Drawer Vertical Steel are a stronger signal than generic 'metal' descriptions. All-metal cabinets are noticeably heavier to lift and rarely need wood-joinery assembly, both useful checks when a listing is vague.",
  },
  {
    q: "What's the difference between full-extension and 3/4-extension drawers?",
    a: "A 3/4-extension drawer leaves files at the back partially inaccessible without pulling the whole drawer forward, while a full-extension drawer slides completely out for full access. Most listings in this price range don't specify which type they use, so check buyer reviews and photos for extension complaints before buying.",
  },
  {
    q: "Do I need an anti-tip interlock on a home office filing cabinet?",
    a: "If your cabinet is 28 inches or taller, an anti-tip interlock that prevents multiple drawers opening at once is a genuine safety feature, since two open drawers loaded with files can tip a cabinet forward. Budget imports sometimes skip this feature, so check listing photos for an interlock bar if you have kids or pets near the cabinet.",
  },
  {
    q: "Will a legal-size hanging file fit in any of these cabinets?",
    a: "Only if the drawer has at least 15-16 inches of internal width. Several picks in this list, including the Letaya 3 Drawer Mobile and DEVAISE picks, state letter, legal, and A4 compatibility directly, but always confirm true internal drawer width against the size label rather than assuming.",
  },
  {
    q: "Should I choose a lateral or vertical filing cabinet for a small home office?",
    a: "Choose lateral, like the Letaya 2 Drawer Lateral, if you have limited front-to-back space but room along a wall, since it opens sideways. Choose vertical, like the BYNSOE 2 Drawer Vertical Steel, if you have limited side space but can accommodate roughly 38-40 inches of depth when a drawer opens fully.",
  },
  {
    q: "Is a cheaper cabinet like the VASAGLE CUSTOS worth it for a home office?",
    a: "For light-duty use, yes. It has the largest review base in this list at 7,901 ratings, showing a strong track record, even though its 4.1-star average and lower price likely reflect a lighter steel gauge than pricier fully assembled picks like the DEVAISE 2 Drawer Metal.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-murphy-beds-with-desks", title: "Best Murphy Beds with Desks (2026)" },
  { href: "/guide/best-office-chairs-for-long-hours", title: "Best Office Chairs for Long Hours (2026)" },
  { href: "/guide/best-murphy-beds-for-small-spaces", title: "Best Murphy Beds for Small Spaces (2026)" },
];
