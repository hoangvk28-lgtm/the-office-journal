export const guideSlug = "best-air-purifiers-for-dorm-rooms";
export const guideTitle = "5 Best Air Purifiers for Dorm Rooms in 2026";
export const metaTitle = "Best Air Purifiers for Dorm Rooms, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers we evaluated for dorm rooms, with the compliance check competitors skip: many universities have specific fire-safety or electrical policies restricting certain appliance types or wattage in dorm rooms.";
export const mainKeyword = "air purifier dorm";
export const introParagraphs = [
  "Many universities have specific fire-safety or electrical policies restricting certain appliance types or wattage in dorm rooms, verify your specific school's housing policy before assuming any air purifier is automatically permitted.",
  "Dorm rooms are frequently small, shared, and poorly ventilated with variable furniture arrangements each semester, sizing guidance should account for shared occupancy and furniture-crowded conditions rather than assuming an empty-room CADR test applies.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-small-dorm",
    rank: 1,
    badge: "Best Air Purifier for Dorm Rooms Overall",
    name: "Levoit Air Purifiers for Bedroom Home Pets Dorm Room, Small Air Purifiers",
    price: "$49.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41ODC2Uu41L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09GTRVJQM?tag=theofficejournal-20",
    description:
      "Explicitly marketed for dorm room use with a large review base, genuinely compact for shared, space-constrained living. Affordable price.\n\nVerify your specific university's fire-safety or electrical wattage policy for personal appliances before assuming this or any purifier is automatically permitted.\n\nWorth calling out specifically: large, well-established review base. The catch is verify your school's specific appliance policy.",
    specs: ["Dorm-room marketed", "Large review base", "Affordable", "Compact design"],
    pros: ["Explicitly marketed for dorm room use", "Large, well-established review base", "Very affordable", "Compact for shared, space-constrained living"],
    cons: ["Verify your school's specific appliance policy", "Limited storage-friendly packability not confirmed", "No smart features"],
    bestFor: "Buyers who want an affordable, dorm-appropriate purifier",
  },
  {
    id: "levoit-smallquiet-dormalt",
    rank: 2,
    badge: "Best Quiet Dorm Pick for Roommate Situations",
    name: "Levoit Air Purifiers for Home Bedroom Dorm Room, Small Quiet Air Purifiers",
    price: "$44.99",
    rating: "4.6 stars from 44,671 Amazon ratings",
    reviews: "44,671 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31e6d46ZnyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LMF648R?tag=theofficejournal-20",
    description:
      "A large review base for a quiet-focused design, genuinely useful for a shared two-person dorm room where roommate noise tolerance overnight matters as much as air cleaning. Affordable.\n\nRoommate noise tolerance and shared-space etiquette introduce a joint-decision noise threshold, discuss this with your roommate before committing to running it overnight.\n\nQuiet-focused design for shared roommate situations. Set against that, verify your school's specific appliance policy. Both matter when comparing it to the other picks here.",
    specs: ["Small, quiet-focused design", "Large review base", "Affordable", "Compact footprint"],
    pros: ["Large, well-established review base", "Quiet-focused design for shared roommate situations", "Very affordable", "Compact for a shared dorm room"],
    cons: ["Verify your school's specific appliance policy", "Roommate agreement on overnight operation needed", "No smart features"],
    bestFor: "Buyers sharing a dorm room who want quiet operation overnight",
  },
  {
    id: "fulminare-dormalt2",
    rank: 3,
    badge: "Best Certified HEPA Dorm Pick",
    name: "Air Purifiers for Bedroom, FULMINARE H13 True HEPA Air Filter, Quiet Air Cleaner With Night Light, Portable Small Air Purifier for Home, Office, Living Room",
    price: "$24.99",
    rating: "4.4 stars from 5,517 Amazon ratings",
    reviews: "5,517 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414NIpA+xLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B4ZSKPNL?tag=theofficejournal-20",
    description:
      "Certified True HEPA H13 filtration with a night light feature, genuinely useful for a dorm room where a nightlight can be practical for a shared space. Solid review base.\n\nNo ionizer feature confirmed, a genuine plus given the elevated ozone-risk consideration in a small, poorly ventilated, overnight-occupied dorm room specifically.\n\nThe standout detail is that night light feature useful for a shared dorm room. Balancing that out, lower rating than the top picks.",
    specs: ["True HEPA H13 filter", "Night light feature", "Portable, small design", "Solid review base"],
    pros: ["Certified True HEPA H13 filtration", "Night light feature useful for a shared dorm room", "No ionizer feature to worry about ozone risk", "Affordable"],
    cons: ["Lower rating than the top picks", "Verify your school's specific appliance policy", "Smaller filter media, frequent replacement"],
    bestFor: "Buyers who want certified True HEPA without an ionizer's ozone risk in a dorm setting",
  },
  {
    id: "voopnu-dormalt3",
    rank: 4,
    badge: "Best Budget Dorm Pick",
    name: "VOOPNU Air Purifiers for Home, High Efficiency Filter Up to 1076 Ft², White",
    price: "$26.99",
    rating: "4.5 stars from 4,026 Amazon ratings",
    reviews: "4,026 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41BE3lVftQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DY4S3HP2?tag=theofficejournal-20",
    description:
      "The most affordable pick in this guide with a solid review base, genuinely oversized capacity for a small dorm room's actual furniture-crowded, shared-occupancy conditions.\n\nDorm room move-in and move-out logistics mean limited storage over summer break, verify this unit's storage footprint fits your realistic summer-storage situation.\n\nSolid review base. That's a real strength, but weigh it against the flip side: verify storage footprint for summer break.",
    specs: ["Up to 1076 sq ft rated", "Solid review base", "Most affordable in this guide", "High efficiency filter"],
    pros: ["Most affordable pick in this guide", "Solid review base", "Genuine headroom for shared occupancy", "High efficiency filter"],
    cons: ["Verify storage footprint for summer break", "Verify your school's specific appliance policy", "No smart features"],
    bestFor: "Budget-conscious students who want headroom for shared occupancy",
  },
  {
    id: "purivortex-dormalt4",
    rank: 5,
    badge: "Best Compact Storage-Friendly Pick",
    name: "Purivortex Air Purifiers for Bedroom, Covers Up to 880 Sq Ft, PX500 Black",
    price: "$32.99",
    rating: "4.5 stars from 2,997 Amazon ratings",
    reviews: "2,997 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Apo3YcVHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9SL7894?tag=theofficejournal-20",
    description:
      "A solid review base at an affordable price, compact enough to be genuinely storage-friendly during dorm move-out over summer break. \n\nDorm rooms compete for outlet access with a mini-fridge and microwave, verify your room's realistic outlet availability before committing to running this alongside other shared appliances.\n\nAffordable price. On the other hand, verify your school's specific appliance policy. Both are worth keeping in mind before deciding.",
    specs: ["Up to 880 sq ft rated", "Solid review base", "Affordable", "Compact design"],
    pros: ["Solid review base", "Affordable price", "Compact, storage-friendly design", "Genuine headroom for shared occupancy"],
    cons: ["Verify your school's specific appliance policy", "Verify realistic outlet availability alongside other dorm appliances", "No smart features"],
    bestFor: "Buyers who want a compact, storage-friendly purifier for dorm move-out logistics",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "University policy compliance flagged as a first-step consideration", description: "Emphasized verifying a specific school's fire-safety or electrical wattage policy for personal appliances before assuming any purifier is automatically permitted in a dorm room." },
  { title: "Shared-occupancy, furniture-crowded room sizing adjustment", description: "Adjusted sizing guidance for shared dorm rooms with variable furniture arrangements each semester, rather than assuming an empty-room CADR test applies." },
  { title: "Move-in/move-out storage and shared-outlet practical constraints", description: "Considered dorm-specific practical constraints like limited storage over summer break and shared mini-fridge or microwave outlet competition, rarely addressed in general small-room purifier guidance." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Filtration Type",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Certified True HEPA",
          "Air Purifiers for Bedroom"
        ],
        [
          "Most-reviewed, strongest reliability signal",
          "Levoit Air Purifiers for Bedroom Home Pets Dorm Room"
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
          "Under $25",
          "Air Purifiers for Bedroom"
        ],
        [
          "Up to $50",
          "Levoit Air Purifiers for Bedroom Home Pets Dorm Room"
        ]
      ]
    }
  },
  {
    "subheading": "Review Base vs Price",
    "cards": [
      {
        "label": "Air Purifiers for Bedroom",
        "text": "The lower-priced option in this comparison, worth checking its filtration type against your actual concern."
      },
      {
        "label": "Levoit Air Purifiers for Bedroom Home Pets Dorm Room",
        "text": "The higher-priced option, worth it if it offers real filtration or coverage headroom above the cheaper pick."
      }
    ],
    "note": "Default to Air Purifiers for Bedroom unless your room size or air-quality concern genuinely calls for the pricier pick."
  },
  {
    "subheading": "By Certified HEPA Filtration",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Certified True HEPA needed",
          "Air Purifiers for Bedroom"
        ],
        [
          "Basic filtration is enough",
          "Levoit Air Purifiers for Bedroom Home Pets Dorm Room"
        ]
      ]
    }
  },
  {
    "subheading": "For Allergies or Pet Dander Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Certified True HEPA filtration with an H13 or higher rating, sized for a room at least as large as where it'll actually run."
      },
      {
        "label": "In this comparison",
        "text": "Air Purifiers for Bedroom discloses certified True HEPA filtration."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real odor, VOC, or large-room coverage, where Levoit Air Purifiers for Bedroom Home Pets Dorm Room's higher price buys real filtration or CADR headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You're covering a small space with a basic dust or allergen concern, where Air Purifiers for Bedroom covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Verify True HEPA certification, not a \"HEPA-type\" or \"HEPA-like\" claim",
    "explanation": "Certified True HEPA means a filter is independently rated to capture 99.97% of particles at 0.3 microns, a specific, testable standard, while \"HEPA-type\" or \"HEPA-like\" are marketing phrases that carry no such guarantee and often describe filters with meaningfully lower real-world capture rates.\n\nThis distinction matters a great deal if you're buying for allergies, asthma, or pet dander specifically, since a HEPA-type filter can look identical in a listing photo while performing well below the certified standard.\n\nCheck the listing for the specific phrase \"True HEPA\" or an H13/H14 filter class rating, and treat a listing that only says \"HEPA filtration\" with no qualifier as an unverified claim."
  },
  {
    "criterion": "Check for activated carbon if odors or VOCs are your actual concern",
    "explanation": "A HEPA filter, even a certified one, only captures solid particles like dust, pollen, and pet dander, it does essentially nothing for gases, smoke smell, cooking odors, or volatile organic compounds, since those pass straight through a particulate filter.\n\nOnly a substantial layer of activated carbon media actually adsorbs those gaseous odors, and a thin carbon pre-filter strip is a much weaker version of this than a dedicated carbon chamber. This matters most if your primary concern is smoke, cooking smell, or chemical odors rather than dust or allergens.\n\nCheck the listing specifically for the amount or type of carbon media included, not just whether the word \"carbon\" appears somewhere in the description."
  },
  {
    "criterion": "Match CADR and room coverage to your actual room size, not the max-rated size",
    "explanation": "CADR (Clean Air Delivery Rate) and a listed maximum room-size coverage figure describe how quickly a purifier can filter air in an ideal, mostly empty room, real rooms with furniture, partial walls, or open floor plans to a hallway perform meaningfully worse than the rated figure suggests.\n\nBuying a purifier rated for exactly your room's square footage often means it runs at a slower effective air-change rate than you'd want, sizing up to a unit rated for 1.5 to 2 times your actual room size generally gives noticeably better real-world air turnover.\n\nMeasure your room's actual square footage and compare it against the unit's stated coverage area, favoring the higher end of that range rather than the bare minimum."
  },
  {
    "criterion": "Check the actual noise level in decibels, not just \"quiet\" in the title",
    "explanation": "\"Quiet\" is a subjective marketing word with no fixed meaning, while a stated decibel figure at the lowest fan speed is a concrete, comparable number, generally anything at or below 30dB is genuinely unobtrusive for a home office or bedroom, while a unit only quoting its high-speed noise level can be considerably louder in practice on the setting you'd actually run overnight or during calls.\n\nThis matters most if the purifier will run near a desk during video calls or overnight in a bedroom, less if it's placed in a room you're not actively working or sleeping in.\n\nCheck whether the listing states a specific low-speed decibel number, and be skeptical of a purifier that only advertises being \"whisper quiet\" without an actual figure attached."
  },
  {
    "criterion": "Factor in filter replacement cost and frequency, not just the purchase price",
    "explanation": "A cheaper purifier upfront can end up costing more over a year or two if its replacement filters are expensive or need swapping every 2-3 months, while a pricier unit with a 6-12 month filter life and a lower-cost replacement filter can work out cheaper in total ownership cost.\n\nThis is easy to overlook when comparing sticker prices alone, but it's a real recurring cost, not a one-time purchase decision.\n\nCheck the listing or manufacturer's site for the recommended filter replacement interval and the actual replacement filter price, then estimate a rough annual cost before comparing purchase price alone across different picks."
  }
];

export const faq: FaqItem[] = [
  { q: "Are air purifiers allowed in dorm rooms?", a: "Usually, but verify your specific university's fire-safety or electrical wattage policy for personal appliances first, some schools have restrictions worth checking before purchase." },
  { q: "Should I avoid air purifiers with an ionizer feature in a dorm room?", a: "Generally a good idea. Ozone-generating ionizer features are a more elevated risk consideration in a small, poorly ventilated, overnight-occupied dorm room, given the smaller air volume per occupant than in a larger home." },
  { q: "Do I need my roommate's agreement to run an air purifier overnight?", a: "It's worth discussing. Roommate noise tolerance and shared-space etiquette introduce a joint-decision noise threshold distinct from a single-occupant bedroom, talk to your roommate before committing to overnight operation." },
  { q: "How do I handle a dorm air purifier during summer break?", a: "Consider its storage footprint when moving out, dorm move-in and move-out logistics mean limited storage space over summer, a more compact purifier is genuinely easier to manage during this transition." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-for-small-rooms", title: "Best Air Purifiers for Small Rooms (2026)" },
  { href: "/guide/best-air-purifiers-for-bedrooms-and-home-offices", title: "Best Air Purifiers for Bedrooms and Home Offices (2026)" },
  { href: "/guide/best-ozone-free-air-purifiers", title: "Best Ozone-Free Air Purifiers (2026)" },
];
