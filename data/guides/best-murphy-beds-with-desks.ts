export const guideSlug = "best-murphy-beds-with-desks";
export const guideTitle = "8 Best Murphy Beds with Desks in 2026";
export const metaTitle = "Best Murphy Beds with Desks in 2026 (Desk Integration Guide)";
export const metaDescription =
  "8 murphy beds with desks compared for desk item weight limits, outlet planning, and monitor arm compatibility, plus honest notes on which are real desk-bed combos.";
export const mainKeyword = "murphy bed with desk";
export const introParagraphs = [
  "A murphy bed with desk sounds like a simple two-in-one, but the desk half is where most of the buying mistakes happen. Some listings marketed alongside desk-focused search terms are actually plain murphy beds with no desk surface at all, just a folding cabinet bed included here as a space-saving alternative. Others genuinely integrate a fold-down or fixed desk into the cabinet face, but with real limits on what you can leave sitting on that surface when the bed comes down.",
  "This guide focuses on desk integration specifically: which of these 8 picks actually include a usable desk surface, how much weight that surface can hold when the bed folds down, and what outlet and monitor arm planning looks like before installation. Below are the picks we evaluated based on product specs and buyer feedback, ranging from a $197.00 DIY hardware kit to a $699.98 assembled cabinet bed.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg";

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
    id: "create-a-bed-queen-vertical",
    rank: 1,
    badge: "Best Vertical Murphy Bed Kit",
    name: "Create-A-Bed Queen Size Deluxe Murphy Bed Kit, Vertical",
    price: "$299.00",
    rating: "4.6 stars from 2,138 Amazon ratings",
    reviews: "2,138 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51H6j9qVxwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00CYPV29W?tag=theofficejournal-20",
    description:
      "This is a hardware kit, not a finished desk-bed combo, so it is honestly a bed-only mechanism you build a cabinet around rather than a product with a desk surface out of the box. Buyers who want desk integration typically pair this piston-driven vertical mechanism with a custom cabinet face that includes a fold-down desk panel, which means the desk portion is entirely your own build quality, not something rated here.\n\nAs a mechanism, it uses gas pistons for a smooth, controlled lower and lift, which matters if you plan to build in a desk surface since a jerky spring mechanism can jostle items left on a shelf above. Budget for a separate cabinet or carpentry cost on top of the kit price if the desk feature matters to you.\n\nStrong review base at 2,138 ratings. That's a real strength, but weigh it against the flip side: no desk surface included, bed-only mechanism.",
    specs: [
      "Vertical queen size mechanism",
      "Gas piston operation",
      "Hardware kit, cabinet not included",
      "Made in North America",
    ],
    pros: [
      "Smooth, controlled piston operation",
      "Strong review base at 2,138 ratings",
      "Flexible for a custom desk cabinet build",
    ],
    cons: [
      "No desk surface included, bed-only mechanism",
      "Requires separate cabinet and carpentry work",
      "Piston pressure degrades over years and eventually needs full replacement",
    ],
    bestFor: "DIY builders who want to design their own desk-integrated cabinet around a proven mechanism",
  },
  {
    id: "queen-murphy-hardware-kit-vertical",
    rank: 2,
    badge: "Best Budget DIY Kit",
    name: "Queen Size Murphy Bed Hardware Kit, Vertical Wall Bed Frame with Gas Pistons",
    price: "$197.00",
    rating: "4.6 stars from 1,610 Amazon ratings",
    reviews: "1,610 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51h1vyv6ZdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B017701FUE?tag=theofficejournal-20",
    description:
      "Like the Create-A-Bed kit above, this is a bed-only hardware mechanism, not a desk-bed combo, and the listing title makes no desk claim at all. It includes gas pistons and three step-by-step guides, aimed at buyers building a full cabinet themselves, with the desk face being an entirely separate design decision on your part. It is the lowest cost mechanism in this list, which leaves more of the budget for a well-built desk cabinet face if that is the goal. Because you are sourcing the cabinet and desk panel separately, item weight limits and desk depth depend entirely on the materials you choose, not on anything this kit specifies. Worth calling out specifically: detailed build guides included. The catch is no desk surface included, bed-only mechanism.",
    specs: [
      "Vertical queen size mechanism",
      "Gas piston operation",
      "3 step-by-step build guides included",
      "Made in North America",
    ],
    pros: [
      "Lowest price mechanism in this list",
      "Detailed build guides included",
      "Large review base at 1,610 ratings",
    ],
    cons: [
      "No desk surface included, bed-only mechanism",
      "Full cabinet and desk build is on you",
      "Piston pairs eventually need full replacement, not individual parts",
    ],
    bestFor: "Budget-focused DIY builders comfortable sourcing their own cabinet and desk materials",
  },
  {
    id: "yoobure-queen-murphy-charging",
    rank: 3,
    badge: "Best Assembled Desk-Adjacent Cabinet",
    name: "Yoobure Queen Murphy Bed with Charging Station, Rattan Cabinet Bed with Storage Drawers",
    price: "$459.99",
    rating: "4.5 stars from 19 Amazon ratings",
    reviews: "19 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51JtI3bjGFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GQM56Y2N?tag=theofficejournal-20",
    description:
      "The Yoobure title does not mention a desk either, so treat this as a storage-focused cabinet bed with a built-in charging station rather than a true desk-integrated unit. Its foldable platform and storage drawers make it a reasonable space-saving alternative for a room that needs a nearby small side table or existing desk rather than a fold-down work surface built into the cabinet.\n\nThe charging station is a genuine desk-adjacent feature worth noting, useful for keeping phones and small devices charged near the bed. With only 19 ratings, buyer feedback is thin compared to the top two picks, so weigh that against the higher price before committing.\n\nStorage drawers add functional space. Set against that, no integrated desk surface despite home office marketing. Both matter when comparing it to the other picks here.",
    specs: [
      "Queen size foldable platform",
      "Built-in charging station",
      "Storage drawers included",
      "Rattan cabinet finish",
    ],
    pros: [
      "Built-in charging station near the bed",
      "Storage drawers add functional space",
      "Fully assembled cabinet, not a bare mechanism",
    ],
    cons: [
      "No integrated desk surface despite home office marketing",
      "Very small review base at 19 ratings",
      "Higher price than the bare hardware kits",
    ],
    bestFor: "Buyers who want a finished cabinet bed with charging convenience but already have a separate desk",
  },
  {
    id: "amerlife-queen-murphy-storage",
    rank: 4,
    badge: "Best Storage-Focused Cabinet Bed",
    name: "AMERLIFE Queen Murphy Bed with Storage and Charging Station",
    price: "$499.99",
    rating: "4.2 stars from 396 Amazon ratings",
    reviews: "396 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51Og-FctXuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGL5B76J?tag=theofficejournal-20",
    description:
      "AMERLIFE's title again lists storage and charging, not a desk, so this is another bed-only unit included as a space-saving alternative rather than a genuine desk-bed combo. It works well in a home office corner where a separate small desk sits nearby and the murphy bed simply reclaims floor space when not in use.\n\nWith 396 ratings at 4.2 stars, it has a solid mid-size review base. Budget for a stand-alone desk purchase separately if desk work is the priority, since nothing about this cabinet's design accommodates a fold-down or fixed work surface.\n\nA genuine advantage here is that charging station and storage built in. The tradeoff is no desk surface, despite frequent home office search association.",
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
      "Higher price for a bed-only unit",
    ],
    bestFor: "Buyers who want an assembled storage bed and already plan a separate nearby desk",
  },
  {
    id: "hlivelood-full-chest-bed",
    rank: 5,
    badge: "Compact Full-Size Chest Bed",
    name: "Hlivelood Full Size Murphy Chest Bed with Drawer and Charging Station",
    price: "$349.99",
    rating: "4.2 stars from 112 Amazon ratings",
    reviews: "112 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/516I1SJ4lqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DNKM6NRF?tag=theofficejournal-20",
    description:
      "This full-size chest bed folds into a multifunctional storage cabinet with a drawer and charging station, but again the title makes no desk claim, so it belongs in this guide as a bed-only space-saving alternative, not a desk combo. The chest cabinet format gives it more of a dresser-like presence when closed, which can double as a stand for a laptop or small desk items even without a built-in fold-down surface.\n\nAt full size rather than queen, it suits a smaller room footprint than most other picks here. With 112 ratings at 4.2 stars, feedback is moderate but consistent with the brand's other listings in this guide.\n\nChest cabinet top can hold a laptop or lamp when closed. That's a real strength, but weigh it against the flip side: no integrated desk surface.",
    specs: [
      "Full size murphy bed",
      "Chest cabinet with drawer",
      "Charging station included",
      "Farmhouse wood finish",
    ],
    pros: [
      "Smaller full-size footprint fits tighter rooms",
      "Chest cabinet top can hold a laptop or lamp when closed",
      "Charging station and drawer add convenience",
    ],
    cons: [
      "No integrated desk surface",
      "Full size sleeping space is smaller than queen picks",
      "Moderate review base at 112 ratings",
    ],
    bestFor: "Smaller rooms that want a compact bed-only unit doubling as light storage furniture",
  },
  {
    id: "hlivelood-queen-led-white",
    rank: 6,
    badge: "Best with Built-In Lighting",
    name: "Hlivelood Queen Size Murphy Bed with 2 LED Lights, Rustic White",
    price: "$639.99",
    rating: "4.0 stars from 141 Amazon ratings",
    reviews: "141 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/515sMh7j30L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DXZVVHCG?tag=theofficejournal-20",
    description:
      "This queen cabinet bed adds two built-in LED lights, a genuinely useful feature for a home office corner even though the unit itself has no desk surface and should be treated as a bed-only pick. The gas struts provide a controlled fold and the no-box-spring design simplifies setup, but any desk work still requires a separate desk placed nearby. It sits toward the higher end of this list for a bed-only unit, with the LED lighting being the main premium feature over the AMERLIFE or Yoobure picks. A 4.0-star rating across 141 reviews is respectable but the lowest of the assembled cabinet beds here. Worth calling out specifically: gas struts give controlled, smooth operation. The catch is no desk surface, bed-only unit.",
    specs: [
      "Queen size murphy bed",
      "2 built-in LED lights",
      "Gas strut mechanism",
      "No box spring needed",
    ],
    pros: [
      "Built-in LED lighting is a genuine convenience feature",
      "Gas struts give controlled, smooth operation",
      "No box spring simplifies mattress setup",
    ],
    cons: [
      "No desk surface, bed-only unit",
      "Higher price than comparable bed-only cabinets",
      "Lowest rating among the assembled cabinet picks",
    ],
    bestFor: "Buyers who want built-in lighting for a home office corner and will add a separate desk",
  },
  {
    id: "hlivelood-queen-led-brown",
    rank: 7,
    badge: "Same Build, Brown Finish",
    name: "Hlivelood Queen Size Murphy Bed with 2 LED Lights, Brown",
    price: "$699.98",
    rating: "4.0 stars from 141 Amazon ratings",
    reviews: "141 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51XE-SiCWBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FFSTT5LQ?tag=theofficejournal-20",
    description:
      "This is the same LED-equipped queen cabinet bed as the rustic white pick above, just in a brown finish and priced a moderate amount higher. Like its counterpart, it is a bed-only unit with no built-in desk surface, so plan on a separate desk if this is going into a home office. Choose this one purely on finish preference rather than function, since the mechanism, lighting, and gas strut design are identical to the white version. The shared 141-review base and 4.0-star rating apply to both finishes. Gas struts give smooth, controlled operation. Set against that, no desk surface, bed-only unit. Both matter when comparing it to the other picks here.",
    specs: [
      "Queen size murphy bed",
      "2 built-in LED lights",
      "Gas strut mechanism",
      "Brown wood finish",
    ],
    pros: [
      "Built-in LED lighting",
      "Gas struts give smooth, controlled operation",
      "No box spring needed",
    ],
    cons: [
      "No desk surface, bed-only unit",
      "Highest price in this list",
      "Identical function to the cheaper white finish",
    ],
    bestFor: "Buyers who prefer a brown finish and are fine paying more for it over the white version",
  },
  {
    id: "livauvead-twin-charging-white",
    rank: 8,
    badge: "Best Compact Twin Option",
    name: "LIVAUVEAD Twin Size Murphy Bed with Charging Station and Drawer, White",
    price: "$249.99",
    rating: "4.0 stars from 120 Amazon ratings",
    reviews: "120 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51iWQRI54lL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F13Q522K?tag=theofficejournal-20",
    description:
      "This twin size murphy bed is the smallest sleeping footprint in this list, which frees up more floor space for a proper desk setup once the bed is folded away, even though the unit itself has no built-in desk surface. The charging station and drawer add small conveniences without adding much cabinet depth. It is one of the more affordable assembled options here, a reasonable pick for a dorm-style room or guest office where twin sleeping capacity is enough and the extra reclaimed floor space matters more than a larger bed size. A 4.0-star rating across 120 reviews is consistent with the mid-tier picks in this guide. A genuine advantage here is that affordable price for an assembled unit. The tradeoff is no desk surface, bed-only unit.",
    specs: [
      "Twin size murphy bed",
      "Charging station included",
      "Storage drawer",
      "White finish",
    ],
    pros: [
      "Smallest footprint, frees more floor space for a desk",
      "Affordable price for an assembled unit",
      "Charging station and drawer add convenience",
    ],
    cons: [
      "No desk surface, bed-only unit",
      "Twin size limits sleeping capacity",
      "Moderate review base at 120 ratings",
    ],
    bestFor: "Dorm-style rooms or guest offices where twin size is enough and maximizing free floor space matters most",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "True desk integration vs bed-only design",
    description:
      "Checked each product title and listing for an actual fold-down or fixed desk surface, rather than assuming home-office marketing language meant a desk was included.",
  },
  {
    title: "Item weight limits on any desk-adjacent surface",
    description:
      "Weighed how much a cabinet top, chest surface, or nearby desk could reasonably hold, and whether tall items would need to be cleared before lowering the bed.",
  },
  {
    title: "Outlet and charging accessibility",
    description:
      "Noted which units include a built-in charging station versus requiring separate outlet planning behind the cabinet once installed.",
  },
  {
    title: "Mechanism type and long-term reliability",
    description:
      "Distinguished gas piston mechanisms from spring mechanisms where specified, since piston pairs eventually need full replacement while springs can be individually serviced.",
  },
  {
    title: "Value for price across bed-only and cabinet-included options",
    description:
      "Weighed price against included features like storage, lighting, and charging, factoring in whether buyers still need to source a separate desk.",
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
    "subheading": "By Real Desk Integration",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Genuine, usable desk surface confirmed",
          "Create"
        ],
        [
          "Most-reviewed, strongest reliability signal",
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
          "Under $197",
          "Queen Size Murphy Bed Hardware Kit"
        ],
        [
          "Up to $700",
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
        "text": "Adds shelving or cabinet space beyond just the desk, useful in a smaller room. In this comparison: Yoobure Queen Murphy Bed with Charging Station, AMERLIFE Queen Murphy Bed with Storage and Charging Station, Hlivelood Full Size Murphy Chest Bed with Drawer and Charging Station, LIVAUVEAD Twin Size Murphy Bed with Charging Station and Drawer."
      },
      {
        "label": "Desk-only",
        "text": "Simpler, focuses cabinet space on the fold-down desk itself. In this comparison: Create, Queen Size Murphy Bed Hardware Kit, Hlivelood Queen Size Murphy Bed with 2 LED Lights, Hlivelood Queen Size Murphy Bed with 2 LED Lights."
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
        "text": "The bed stays in one position most of the time, where Queen Size Murphy Bed Hardware Kit covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Do any of these murphy beds actually include a desk?",
    a: "No. Despite frequent association with desk-bed combo searches, none of the 8 products in this guide include a built-in fold-down desk surface based on their listing titles and specs. The Create-A-Bed and Queen Murphy Hardware Kit are bare mechanisms you can build a custom desk cabinet around, while the rest are assembled bed-only cabinets best paired with a separate nearby desk.",
  },
  {
    q: "How much weight can I leave on a desk surface when lowering a murphy bed?",
    a: "As a general rule, keep items under 40 lbs on any desk or shelf surface near the bed when lowering it, and remove anything taller than about 16 inches, like a monitor or desk lamp, since the swinging cabinet face needs clearance during the fold.",
  },
  {
    q: "Should I choose a gas piston or spring mechanism?",
    a: "Gas pistons, used in both hardware kits in this guide, give a smoother, more controlled lower and lift but lose pressure over years and must eventually be replaced as a full pair, typically $100-200. Spring mechanisms in other kits can sometimes be individually serviced, which may be more cost-effective for long-term daily use.",
  },
  {
    q: "What outlet planning should I do before installing a murphy bed near a desk?",
    a: "Any wall outlet behind the installed cabinet becomes inaccessible. If you plan a desk with a lamp, monitor, or charging strip nearby, run an extension cord through a baseboard hole or plan outlet placement before the cabinet is mounted, since this is the most common post-installation complaint buyers report.",
  },
  {
    q: "How much floor space does a queen murphy bed need when it's down?",
    a: "Plan for roughly 85-90 inches of clear floor space from the wall when a queen murphy bed is lowered. The desk area near the cabinet becomes unusable during that time, so this guide's picks work best in rooms with enough depth to accommodate both functions at different times.",
  },
  {
    q: "What mattress thickness works best in these cabinets?",
    a: "Most queen murphy bed cabinets accommodate mattresses up to about 10-12 inches thick. If you want to keep the bed made with linens without clearing it before folding, an 8-9 inch mattress fits more comfortably within the cabinet's interior depth.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-murphy-beds-for-small-spaces", title: "Best Murphy Beds for Small Spaces (2026)" },
  { href: "/guide/best-filing-cabinets-for-home-offices", title: "Best Filing Cabinets for Home Offices (2026)" },
  { href: "/guide/best-office-chairs-for-long-hours", title: "Best Office Chairs for Long Hours (2026)" },
];
