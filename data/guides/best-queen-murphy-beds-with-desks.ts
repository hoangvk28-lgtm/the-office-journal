export const guideSlug = "best-queen-murphy-beds-with-desks";
export const guideTitle = "8 Best Queen Murphy Beds with Desks in 2026";
export const metaTitle = "Best Queen Murphy Beds with Desks in 2026 (Size Guide)";
export const metaDescription =
  "8 queen murphy beds with desks compared for ceiling clearance, room width, and mattress weight calibration, plus honest notes on which listings actually include a desk.";
export const mainKeyword = "queen murphy bed with desk";
export const introParagraphs = [
  "A queen murphy bed is the largest size most home offices can realistically fit, and it comes with size requirements that a full or twin bed does not. A vertical queen cabinet typically needs about 93 inches of ceiling clearance, accounting for an 88 inch closed cabinet plus roughly 5 inches of anchor and swing clearance, and the room itself needs close to 108 inches (9 feet) of width for comfortable side access to the mattress once it is down.",
  "This guide focuses on queen-specific sizing: ceiling height, room width, and how mattress weight needs to match the mechanism's counterbalance calibration, since a queen mattress can weigh anywhere from 60 to 130 lbs depending on the type. Below are the 8 picks we evaluated based on product specs and buyer feedback, ranging from a $197.00 hardware kit to a $1,239.99 assembled desk-integrated cabinet.",
];
export const lastUpdated = "2026-07-26";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41WkdwEwOOL._SL500_.jpg";

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
    id: "merax-queen-desk-lights",
    rank: 1,
    badge: "Best Confirmed Desk-Bed Combo",
    name: "Merax Queen Size Murphy Bed with Desk and Lights, Power Outlet",
    price: "$1,239.99",
    rating: "4.4 stars from 4 Amazon ratings",
    reviews: "4 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41WkdwEwOOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H33PY32C?tag=theofficejournal-20",
    description:
      "This is the only pick in this guide whose listing title directly confirms a built-in desk surface alongside a queen mattress, plus a power outlet and open storage shelves and drawers. The desk panel folds clear of the cabinet face, which matters for a queen unit since the swing radius is larger than a full or twin design. It is the most expensive pick here, reflecting the added desk hardware, lighting, and storage. With only 4 ratings, buyer feedback is thin for a queen-size cabinet at this price point, so weigh that against the confirmed desk feature before ordering. Power outlet and lighting integrated into the cabinet. That's a real strength, but weigh it against the flip side: highest price in this guide.",
    specs: [
      "Queen size cabinet with fold-down desk",
      "Built-in LED lights and power outlet",
      "Open storage shelves and drawers",
      "Antique white finish",
    ],
    pros: [
      "Only pick here with a confirmed built-in desk surface",
      "Power outlet and lighting integrated into the cabinet",
      "Storage shelves and drawers add functional space",
    ],
    cons: [
      "Highest price in this guide",
      "Very small review base at 4 ratings",
      "Shipping weight for queen cabinets like this often runs 300-500 lbs, so confirm delivery access before ordering",
    ],
    bestFor: "Buyers who specifically need a confirmed fold-down desk built into a queen cabinet and can verify freight delivery access",
  },
  {
    id: "create-a-bed-queen-vertical",
    rank: 2,
    badge: "Best Vertical Hardware Kit",
    name: "Create-A-Bed Queen Size Deluxe Murphy Bed Kit, Vertical",
    price: "$299.00",
    rating: "4.6 stars from 2,138 Amazon ratings",
    reviews: "2,138 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00CYPV29W?tag=theofficejournal-20",
    description:
      "This is a bare gas-piston mechanism, not a finished desk-bed combo, so the desk portion is entirely your own cabinet build. For a queen vertical build using this kit, plan on close to 93 inches of ceiling clearance for the 88 inch cabinet plus anchor swing room, and confirm your queen mattress weight against the piston calibration before ordering, since pistons are matched to a specific weight range.\n\nWith 2,138 ratings at 4.6 stars, it has the strongest review base in this guide by a wide margin. Because the desk face is entirely your own build, item weight limits and desk depth depend on the materials you choose, not on anything this kit specifies.\n\nWorth calling out specifically: smooth, controlled piston operation. The catch is no desk surface included, bed-only mechanism.",
    specs: [
      "Vertical queen size mechanism",
      "Gas piston operation",
      "Hardware kit, cabinet and desk not included",
      "Made in North America",
    ],
    pros: [
      "Largest review base in this guide at 2,138 ratings",
      "Smooth, controlled piston operation",
      "Flexible for a custom desk cabinet build",
    ],
    cons: [
      "No desk surface included, bed-only mechanism",
      "Requires separate cabinet and carpentry work",
      "Mattress weight must be matched to piston calibration or the fold will feel unbalanced",
    ],
    bestFor: "DIY builders who want a proven queen vertical mechanism and will design their own desk cabinet around it",
  },
  {
    id: "queen-murphy-hardware-kit-vertical",
    rank: 3,
    badge: "Best Budget Vertical Kit",
    name: "Queen Size Murphy Bed Hardware Kit, Vertical Wall Bed Frame with Gas Pistons",
    price: "$197.00",
    rating: "4.6 stars from 1,610 Amazon ratings",
    reviews: "1,610 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51h1vyv6ZdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B017701FUE?tag=theofficejournal-20",
    description:
      "Like the Create-A-Bed kit above, this is a bed-only mechanism with no desk claim in the listing, aimed at buyers who plan to build a full cabinet themselves, including any desk face. It is the lowest cost mechanism here, which can leave more budget toward a well-built desk panel if that is the goal. As a queen mechanism, the same 93 inch ceiling clearance and mattress weight matching rules apply as with the Create-A-Bed kit. With 1,610 ratings at 4.6 stars, it has a strong review base for a DIY hardware product. Detailed build guides included. Set against that, no desk surface included, bed-only mechanism. Both matter when comparing it to the other picks here.",
    specs: [
      "Vertical queen size mechanism",
      "Gas piston operation",
      "3 step-by-step build guides included",
      "Made in North America",
    ],
    pros: [
      "Lowest price mechanism in this guide",
      "Detailed build guides included",
      "Large review base at 1,610 ratings",
    ],
    cons: [
      "No desk surface included, bed-only mechanism",
      "Full cabinet and desk build is on you",
      "Mattress weight must be verified against piston calibration",
    ],
    bestFor: "Budget-focused DIY builders comfortable sourcing their own queen cabinet and desk materials",
  },
  {
    id: "yoobure-queen-murphy-charging",
    rank: 4,
    badge: "Best Assembled Cabinet with Charging",
    name: "Yoobure Queen Murphy Bed with Charging Station, Rattan Cabinet Bed with Storage Drawers",
    price: "$459.99",
    rating: "4.5 stars from 19 Amazon ratings",
    reviews: "19 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51JtI3bjGFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GQM56Y2N?tag=theofficejournal-20",
    description:
      "The Yoobure listing does not mention a desk, so treat this as a storage-focused queen cabinet with a charging station rather than a true desk-integrated unit. It is a fully assembled cabinet, which removes the carpentry step required by the hardware kits above.\n\nAt queen size, confirm your room has close to 108 inches of width for comfortable side access once the bed is lowered. With only 19 ratings, buyer feedback is thin compared to the hardware kits above, so weigh that against the higher price.\n\nA genuine advantage here is that storage drawers add functional space. The tradeoff is no integrated desk surface despite home office marketing.",
    specs: [
      "Queen size foldable platform",
      "Built-in charging station",
      "Storage drawers included",
      "Rattan cabinet finish",
    ],
    pros: [
      "Built-in charging station near the bed",
      "Storage drawers add functional space",
      "Fully assembled cabinet, no carpentry required",
    ],
    cons: [
      "No integrated desk surface despite home office marketing",
      "Very small review base at 19 ratings",
      "Higher price than the bare hardware kits",
    ],
    bestFor: "Buyers who want a finished queen cabinet with charging convenience but already have a separate desk",
  },
  {
    id: "bestar-claremont-65w-queen",
    rank: 5,
    badge: "Most Established Assembled Brand",
    name: "Bestar Claremont 65W Queen Murphy Bed in White",
    price: "$1,009.99",
    rating: "4.0 stars from 181 Amazon ratings",
    reviews: "181 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21HUtlnOKaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLDV21TZ?tag=theofficejournal-20",
    description:
      "Bestar's listing describes it as a sleeping arrangement for a multipurpose area, bedroom, or living room, with no desk feature mentioned, so this is a bed-only queen unit despite frequent appearance in desk-bed searches. It is a well-established brand in the assembled murphy bed space with a moderate review base.\n\nAt 181 ratings and a 4.0-star average, it sits in the middle of the pack for buyer feedback among assembled units in this guide. Confirm your room's ceiling height and width before ordering, since this is priced as a finished cabinet and returns on large furniture like this are costly.\n\nFully assembled, no desk carpentry needed. That's a real strength, but weigh it against the flip side: no desk surface, bed-only unit.",
    specs: [
      "Queen size murphy bed cabinet",
      "White finish",
      "65 inch width footprint",
      "Assembled cabinet, ready to mount",
    ],
    pros: [
      "Established brand with a 181-rating review base",
      "Fully assembled, no desk carpentry needed",
      "Clean white finish suits most home office decor",
    ],
    cons: [
      "No desk surface, bed-only unit",
      "High price for a unit without desk integration",
      "4.0-star rating is the lowest among the assembled queen picks",
    ],
    bestFor: "Buyers who want an established assembled queen cabinet and already have a separate desk in the room",
  },
  {
    id: "hlivelood-queen-led-white-34",
    rank: 6,
    badge: "Best with Built-In Lighting",
    name: "Hlivelood Queen Size Murphy Bed with 2 LED Lights, Rustic White",
    price: "$639.99",
    rating: "4.0 stars from 141 Amazon ratings",
    reviews: "141 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/515sMh7j30L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DXZVVHCG?tag=theofficejournal-20",
    description:
      "This queen cabinet adds two built-in LED lights, useful for a home office corner, though the listing makes no desk claim and should be treated as a bed-only unit. The gas struts give a controlled fold, and the no-box-spring design simplifies mattress setup for a queen size. It lands mid-range for an assembled queen cabinet with lighting as the standout feature. A 4.0-star rating across 141 reviews is a reasonably sized feedback base for this price tier. Worth calling out specifically: gas struts give controlled, smooth operation. The catch is no desk surface, bed-only unit.",
    specs: [
      "Queen size murphy bed",
      "2 built-in LED lights",
      "Gas strut mechanism",
      "No box spring needed",
    ],
    pros: [
      "Built-in LED lighting is a genuine convenience feature",
      "Gas struts give controlled, smooth operation",
      "No box spring simplifies queen mattress setup",
    ],
    cons: [
      "No desk surface, bed-only unit",
      "Mid-range price for a unit without desk integration",
      "Struts eventually need replacement like any gas mechanism",
    ],
    bestFor: "Buyers who want built-in lighting in a queen cabinet for a home office corner and will add a separate desk",
  },
  {
    id: "luxoak-queen-storage-charging",
    rank: 7,
    badge: "Best Storage-Focused Queen Cabinet",
    name: "LUXOAK Queen Murphy Cabinet Bed with Storage and Charging Station",
    price: "$469.99",
    rating: "4.3 stars from 340 Amazon ratings",
    reviews: "340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51k+vfJQZGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DN5P11PP?tag=theofficejournal-20",
    description:
      "LUXOAK's listing focuses on storage and a charging station, with no desk mentioned, so this is a bed-only queen cabinet best paired with a separate nearby desk. It has a solid mid-size review base for a queen assembled unit. At a competitive price with 340 ratings at 4.3 stars, it offers a reasonable balance of price and feedback volume among the assembled queen cabinets in this guide, though the desk gap is the same limitation shared by most picks here. Charging station and storage built in. Set against that, no desk surface, despite frequent home office search association. Both matter when comparing it to the other picks here.",
    specs: [
      "Queen size murphy cabinet",
      "Built-in storage compartments",
      "Charging station included",
      "Assembled cabinet design",
    ],
    pros: [
      "Solid review base at 340 ratings",
      "Charging station and storage built in",
      "Fully assembled, no separate cabinet build needed",
    ],
    cons: [
      "No desk surface, despite frequent home office search association",
      "Requires a separate desk purchase for actual desk work",
      "Storage capacity is modest compared to the Merax pick above",
    ],
    bestFor: "Buyers who want an assembled queen storage cabinet and already plan a separate nearby desk",
  },
  {
    id: "amerlife-queen-murphy-storage-34",
    rank: 8,
    badge: "Best Value Assembled Cabinet",
    name: "AMERLIFE Queen Murphy Bed with Storage and Charging Station",
    price: "$499.99",
    rating: "4.2 stars from 396 Amazon ratings",
    reviews: "396 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51Og-FctXuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGL5B76J?tag=theofficejournal-20",
    description:
      "AMERLIFE's title again lists storage and charging, not a desk, so this is another bed-only queen unit best treated as a space-saving alternative rather than a genuine desk-bed combo. It works well in a home office corner where a separate small desk sits nearby.\n\nWith 396 ratings at 4.2 stars, it has the second-largest assembled-cabinet review base in this guide after the Bestar pick. Budget for a stand-alone desk purchase separately if desk work is the priority.\n\nA genuine advantage here is that charging station and storage built in. The tradeoff is no desk surface, despite frequent home office search association.",
    specs: [
      "Queen size murphy bed",
      "Built-in storage compartments",
      "Charging station included",
      "Assembled cabinet design",
    ],
    pros: [
      "Solid 4.2-star rating across 396 reviews",
      "Charging station and storage built in",
      "Fully assembled, no separate cabinet build needed",
    ],
    cons: [
      "No desk surface, despite frequent home office search association",
      "Requires a separate desk purchase for actual desk work",
      "Higher price for a bed-only unit compared to LUXOAK",
    ],
    bestFor: "Buyers who want an assembled queen storage bed at a reasonable price and already plan a separate nearby desk",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Confirmed desk integration vs bed-only design",
    description:
      "Checked each listing title and spec sheet for an actual fold-down desk surface rather than assuming home office marketing language meant a desk was included, since only one of these 8 queen picks confirms a built-in desk.",
  },
  {
    title: "Ceiling clearance for vertical queen cabinets",
    description:
      "Weighed the roughly 93 inch ceiling clearance a vertical queen cabinet needs, accounting for an 88 inch closed cabinet plus anchor and swing clearance, against each product's stated dimensions where available.",
  },
  {
    title: "Room width for queen side access",
    description:
      "Considered the approximately 108 inch (9 foot) room width needed for comfortable side access to a queen mattress once lowered, since queen is the widest bed size most of these cabinets support.",
  },
  {
    title: "Mattress weight vs mechanism calibration",
    description:
      "Noted that queen mattress weight can range from 60 to 130 lbs depending on type, and that gas piston or strut mechanisms are calibrated to a specific weight range, which affects fold smoothness if mismatched.",
  },
  {
    title: "Shipping and installation cost disclosure",
    description:
      "Factored in that queen cabinets like these often ship at 300-500 lbs across multiple boxes, and that white glove delivery or professional installation can add a competitive price-800 or more on top of the listed price.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Verify the desk surface is real and usable, not just marketing alongside a plain murphy bed",
    "explanation": "Some products marketed alongside desk-focused search terms are actually plain murphy beds with no integrated desk surface at all, just a folding cabinet bed that happens to show up in these results, while others genuinely build a fold-down or fixed desk into the cabinet face.\n\nThis distinction matters directly if desk integration is the actual reason you're buying, discovering after purchase that a \"murphy bed with desk\" has no real desk surface is a common and entirely avoidable disappointment.\n\nCheck the listing photos and description specifically for a described, dimensioned desk surface, not just the presence of desk-related keywords in the title."
  },
  {
    "criterion": "Check the desk surface's weight limit for items left sitting when the bed folds down",
    "explanation": "A fold-down desk built into a murphy bed cabinet has a real weight limit on what can safely sit on it when the bed mechanism operates, and unlike a standalone desk, that weight isn't just about the desk holding items, it's about whether those items interfere with or get damaged by the folding motion itself.\n\nThis matters directly for anyone planning to leave a monitor, laptop, or other equipment on the desk regularly, some cabinet beds require clearing the desk completely before folding, while others accommodate lighter items left in place.\n\nCheck the listing specifically for the desk's stated weight capacity and whether it requires being cleared before folding, not just the bed's own mattress weight rating."
  },
  {
    "criterion": "Plan outlet and monitor arm placement before installation, not after",
    "explanation": "A murphy bed with desk changes position between folded-up and folded-down states, meaning any outlet you'll use for a monitor, lamp, or charger needs to remain accessible in both positions, and a monitor arm clamped to the desk edge needs clearance to move with the mechanism without hitting the wall or cabinet frame.\n\nThis matters because retrofitting outlet access or monitor arm clearance after installation is far more difficult than planning it beforehand, especially if the unit is wall-mounted.\n\nCheck the listing for outlet cutout or pass-through details, and measure your intended monitor arm's clearance needs against the cabinet's fold range before ordering."
  },
  {
    "criterion": "Match room ceiling height and wall space to your specific model's clearance requirements",
    "explanation": "Murphy bed cabinets require specific minimum ceiling height and wall clearance to operate the folding mechanism safely, and these requirements vary between models and mattress sizes, a queen-size unit needs meaningfully more clearance than a twin, and horizontal-mounted units have different wall-width requirements than vertical ones.\n\nThis matters because a unit that doesn't fit your room's actual ceiling height or wall dimensions simply can't be installed safely regardless of how good the desk integration looks in photos.\n\nCheck the listing's specific minimum ceiling height and wall clearance requirements against your room's actual measured dimensions before ordering, not just the general size category."
  },
  {
    "criterion": "Consider professional installation versus DIY assembly for a mechanism you'll operate daily",
    "explanation": "A murphy bed's folding mechanism sees repeated daily stress if used as a genuine daily-fold desk-bed combo, and installation quality directly affects long-term safety and smooth operation, a mechanism installed slightly out of alignment can bind, sag, or wear unevenly over time.\n\nThis matters more for a unit that folds daily as part of an active desk-bed routine, less for one that stays in one position most of the time.\n\nCheck whether the listing includes or recommends professional installation, and factor that cost and time into your total decision if you're not confident assembling a wall-mounted mechanical system yourself."
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
          "Create"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Create"
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
          "Under $1",
          "Merax Queen Size Murphy Bed with Desk and Lights"
        ],
        [
          "Up to $640",
          "Hlivelood Queen Size Murphy Bed with 2 LED Lights"
        ]
      ]
    }
  },
  {
    "subheading": "Built-In Storage vs Desk-Only",
    "cards": [
      {
        "label": "Built-in storage",
        "text": "Adds shelving or cabinet space beyond just the desk, useful in a smaller room. In this comparison: Merax Queen Size Murphy Bed with Desk and Lights, Yoobure Queen Murphy Bed with Charging Station, LUXOAK Queen Murphy Cabinet Bed with Storage and Charging Station, AMERLIFE Queen Murphy Bed with Storage and Charging Station."
      },
      {
        "label": "Desk-only",
        "text": "Simpler, focuses cabinet space on the fold-down desk itself. In this comparison: Create, Queen Size Murphy Bed Hardware Kit, Bestar Claremont 65W Queen Murphy Bed in White, Hlivelood Queen Size Murphy Bed with 2 LED Lights."
      }
    ],
    "note": "Default to desk-only unless extra built-in storage genuinely solves a real space problem for you."
  },
  {
    "subheading": "By Room Clearance Requirements",
    "note": "Check each pick's listed minimum ceiling height and wall clearance against your room's actual measured dimensions before buying, not just the general size category. Create is the most-reviewed option here if you want the safer bet."
  },
  {
    "subheading": "For a Studio Apartment Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Verified real desk integration with a stated weight limit, plus confirmed ceiling height and wall clearance for your specific room."
      },
      {
        "label": "In this comparison",
        "text": "Create is worth checking against its listed clearance requirements before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You'll fold the unit daily as part of an active desk-bed routine, where Hlivelood Queen Size Murphy Bed with 2 LED Lights's build quality and mechanism give real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "The bed stays in one position most of the time, where Merax Queen Size Murphy Bed with Desk and Lights covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Do any of these queen murphy beds actually include a desk?",
    a: "Only one. The Merax Queen Size Murphy Bed with Desk and Lights is the single pick in this guide whose listing confirms a built-in fold-down desk surface. The other 7 picks are either bare hardware kits or assembled bed-only cabinets, so verify the current listing before assuming a desk is included on any other pick.",
  },
  {
    q: "How much ceiling clearance does a vertical queen murphy bed need?",
    a: "Plan for roughly 93 inches of ceiling clearance for a vertical queen cabinet. This accounts for an 88 inch closed cabinet plus about 5 inches of additional space for wall anchor hardware and swing clearance during the fold.",
  },
  {
    q: "How much room width do I need for a queen murphy bed?",
    a: "For comfortable access to both sides of the bed once it is lowered, plan for close to 108 inches (9 feet) of room width. Narrower rooms still work but will typically only allow access from one side of the mattress.",
  },
  {
    q: "Does mattress weight matter for a queen murphy bed mechanism?",
    a: "Yes. Queen mattresses range from about 60 lbs for a basic foam mattress to 130 lbs for a thick hybrid, and murphy bed mechanisms are calibrated to a specific weight range. A mismatched mattress can make the fold feel too heavy or spring up too quickly, so check the manufacturer's recommended weight range before ordering.",
  },
  {
    q: "What should I budget for shipping and installation on a queen murphy bed?",
    a: "Assembled queen cabinets often ship at 300-500 lbs across multiple boxes, and white glove delivery or professional installation commonly adds $400-800 on top of the product price. Factor this into your total budget rather than comparing sticker prices alone.",
  },
  {
    q: "Is the desk surface as wide as the cabinet on a confirmed desk pick?",
    a: "Not necessarily. Even on a confirmed desk pick like the Merax, the usable desk surface inside the cabinet face is typically narrower than the full cabinet width once hinges and side clearance are accounted for. Check the specific desk dimension in the current listing rather than assuming it matches the cabinet's overall width.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-full-size-murphy-beds-with-desks", title: "Best Full-Size Murphy Beds with Desks (2026)" },
  { href: "/guide/best-murphy-beds-with-desks", title: "Best Murphy Beds with Desks (2026)" },
  { href: "/guide/best-murphy-beds-for-home-offices", title: "Best Murphy Beds for Home Offices (2026)" },
  { href: "/guide/best-murphy-beds-with-storage-and-desks", title: "Best Murphy Beds with Storage and Desks (2026)" },
];
