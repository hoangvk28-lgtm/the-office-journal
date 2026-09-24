export const guideSlug = "best-air-purifiers-under-100";
export const guideTitle = "5 Best Air Purifiers Under $100 in 2026";
export const metaTitle = "Best Air Purifiers Under $100, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers under $100 we evaluated, with the true cost-of-ownership angle competitors skip: the sticker price is only part of the story, ongoing filter replacement cost over a year can rival or exceed the unit's original price.";
export const mainKeyword = "air purifier under $100";
export const introParagraphs = [
  "The sticker price is only part of the true cost, ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, a real factor competitors rarely mention when comparing budget units.",
  "A budget unit under $100 can still be genuinely capable for a small-to-medium room, the price cut is more often in smart features and app control than in core filtration quality, worth knowing before assuming cheaper means meaningfully worse performance.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "levoit-core300-under100",
    rank: 1,
    badge: "Best Air Purifier Under $100 Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=theofficejournal-20",
    description:
      "By far the largest review base of any pick here at a budget-friendly price, genuine True HEPA H13 filtration that doesn't cut corners on the core filtration quality despite the budget price. The price cut here is in smart features and app control, not core filtration, factor in the replacement filter cost over a year when comparing this to pricier alternatives. Genuine True HEPA H13 filtration despite budget price. Set against that, no smart app control. Both matter when comparing it to the other picks here.",
    specs: ["True HEPA H13, 99.97% particulate removal", "24dB quoted noise level", "Largest review base in this guide", "Under $90 at time of writing"],
    pros: ["By far the largest review base of any pick here", "Genuine True HEPA H13 filtration despite budget price", "Very quiet at 24dB", "Affordable replacement filters"],
    cons: ["No smart app control", "No air quality sensor", "Standard CADR, not the highest airflow pick"],
    bestFor: "Buyers wanting the most-proven budget pick with genuine HEPA filtration",
  },
  {
    id: "germguardian-under100",
    rank: 2,
    badge: "Best Value Pick Under $100",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316AtkHoSdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=theofficejournal-20",
    description:
      "A large, well-established review base at a low price, genuine True HEPA filtration with a carbon component included at this budget tier.\n\nCheck the manufacturer's stated filter lifespan and current replacement filter price before buying, since ongoing cost over a year can rival the unit's original purchase price.\n\nThe standout detail is that low upfront price. Balancing that out, no filter indicator to track replacement timing.",
    specs: ["True HEPA filtration with carbon component", "Large review base", "Compact design", "Budget-friendly"],
    pros: ["Large, well-established review base", "Low upfront price", "True HEPA filtration plus a carbon component", "Compact footprint"],
    cons: ["No filter indicator to track replacement timing", "No smart features", "No air quality sensor"],
    bestFor: "Buyers wanting a proven value pick with HEPA and carbon filtration",
  },
  {
    id: "mooka-pr1-under100",
    rank: 3,
    badge: "Best Budget Pick for a Larger Room",
    name: "MOOKA Air Purifiers for Home Large Room, PR1 HEPA Air Purifier",
    price: "$79.99",
    rating: "4.6 stars from 4,454 Amazon ratings",
    reviews: "4,454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51nlbgobV2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCBC8KKV?tag=theofficejournal-20",
    description:
      "An affordable option with a solid review base, marketed for a larger room than a typical budget desktop unit while staying at a budget-friendly price. A budget unit at a budget-friendly price can still be genuinely capable for a small-to-medium room, this pick's disclosed coverage rating supports that at its price point. Solid review base. That's a real strength, but weigh it against the flip side: no smart app control.",
    specs: ["HEPA filtration", "Solid review base", "Larger-room marketing at a budget price", "Under $80 at time of writing"],
    pros: ["Affordable price for a larger-room-marketed unit", "Solid review base", "Genuine HEPA filtration", "Good value for the coverage claimed"],
    cons: ["No smart app control", "No air quality sensor", "No filter indicator"],
    bestFor: "Buyers wanting more coverage for the money at a budget price",
  },
  {
    id: "afloia-under100",
    rank: 4,
    badge: "Best Compact Budget Pick",
    name: "Afloia Air Purifiers for Home Large Room Up to 900 Sq Ft, H13 True HEPA Air Purifier PM2.5",
    price: "$79.99",
    rating: "4.6 stars from 1,384 Amazon ratings",
    reviews: "1,384 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31MxpE4keLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CHW2LLSJ?tag=theofficejournal-20",
    description:
      "An affordable pick with a genuine 900 sq ft coverage claim and True HEPA PM2.5 filtration, a solid review base backing its performance at this price tier.\n\nCompare the manufacturer's filter lifespan claim against your actual usage before buying, cooking or pet-heavy homes will need more frequent replacement than the standard estimate.\n\nSolid review base. On the other hand, no smart app control. Both are worth keeping in mind before deciding.",
    specs: ["True HEPA PM2.5 filtration", "Up to 900 sq ft rated (open room)", "Solid review base", "Under $80 at time of writing"],
    pros: ["Affordable price for the coverage offered", "Solid review base", "True HEPA captures particulate effectively", "Reasonable performance for the price"],
    cons: ["No smart app control", "No air quality sensor", "No filter indicator"],
    bestFor: "Budget buyers wanting a disclosed coverage rating for a larger small room",
  },
  {
    id: "mooka-under100",
    rank: 5,
    badge: "Best Ultra-Budget Pick",
    name: "MOOKA Small Air Purifier for Bedroom",
    price: "$45.30",
    rating: "4.5 stars from 9,252 Amazon ratings",
    reviews: "9,252 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41zOBElZS-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PJQ3MWB?tag=theofficejournal-20",
    description:
      "The lowest price in this guide by a wide margin with a large review base, genuinely appropriate for a desk zone or small personal space on a tight budget.\n\nAt this price point, the ongoing filter replacement cost matters even more proportionally, factor that into your true cost of ownership over a year.\n\nA genuine advantage here is that large, well-established review base. The tradeoff is that lower CADR appropriate only for a desk zone, not a full room.",
    specs: ["Compact desktop footprint", "Large review base", "Lowest price in this guide", "Under $50 at time of writing"],
    pros: ["Lowest price in this guide by a wide margin", "Large, well-established review base", "Good value for a desk-zone unit", "Very compact footprint"],
    cons: ["Lower CADR appropriate only for a desk zone, not a full room", "No smart features", "Basic filtration compared to premium picks"],
    bestFor: "Tightest-budget buyers wanting a desk zone or personal-space unit",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "True cost of ownership beyond the sticker price", description: "Considered that ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, not just the upfront number." },
  { title: "What the budget price cut actually sacrifices", description: "Weighed that the price cut on a budget unit is more often in smart features and app control than in core filtration quality, evaluating each pick's actual HEPA and carbon filtration honestly." },
  { title: "Coverage claims verified against price point", description: "Checked whether each pick's disclosed coverage rating was reasonable for its price, rather than assuming a low price automatically means reduced coverage." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
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
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
        ],
        [
          "Largest review base, strongest reliability signal",
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
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
          "Under $46",
          "MOOKA Small Air Purifier for Bedroom"
        ],
        [
          "Up to $90",
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
        ]
      ]
    }
  },
  {
    "subheading": "Smart App-Connected vs Basic Manual Controls",
    "cards": [
      {
        "label": "Smart, app-connected",
        "text": "Lets you monitor air quality and adjust fan speed remotely, useful if you want automation or scheduling. In this comparison: LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom."
      },
      {
        "label": "Basic manual controls",
        "text": "Simpler and usually cheaper, with nothing to set up or connect. In this comparison: Germ Guardian True HEPA Filter Air Purifier for Home, MOOKA Air Purifiers for Home Large Room, Afloia Air Purifiers for Home Large Room Up to 900 Sq Ft, MOOKA Small Air Purifier for Bedroom."
      }
    ],
    "note": "Default to basic manual controls unless you specifically want app-based monitoring or automation."
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
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
        ],
        [
          "Basic filtration is enough",
          "MOOKA Air Purifiers for Home Large Room"
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
        "text": "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom discloses certified True HEPA filtration."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real odor, VOC, or large-room coverage, where LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom's higher price buys real filtration or CADR headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You're covering a small space with a basic dust or allergen concern, where MOOKA Small Air Purifier for Bedroom covers the same job at a lower price."
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
  { q: "Is a budget air purifier under $100 actually worth it?", a: "Often yes for core filtration. The price cut is more often in smart features and app control than in core HEPA filtration quality, a genuine True HEPA budget unit can be a reasonable choice." },
  { q: "What's the real cost of owning a cheap air purifier over time?", a: "More than the sticker price suggests. Ongoing filter replacement cost over a year of regular use can rival or exceed the unit's original purchase price, factor that into your comparison." },
  { q: "How do I know if a budget air purifier can cover my room?", a: "Check for a specific disclosed square-footage or CADR rating rather than trusting vague 'large room' marketing language, which doesn't tell you much about actual capacity." },
  { q: "Is the cheapest air purifier under $50 good enough for a bedroom?", a: "It's best matched to a desk zone or small personal space rather than a full bedroom, expect a lower CADR at that price point." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-under-200", title: "Best Air Purifiers Under $200 (2026)" },
  { href: "/guide/best-small-air-purifiers", title: "Best Small Air Purifiers (2026)" },
  { href: "/guide/best-hepa-air-purifiers", title: "Best HEPA Air Purifiers (2026)" },
];
