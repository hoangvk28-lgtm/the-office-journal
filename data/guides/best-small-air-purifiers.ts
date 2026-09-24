export const guideSlug = "best-small-air-purifiers";
export const guideTitle = "5 Best Small Air Purifiers in 2026";
export const metaTitle = "Best Small Air Purifiers, Honestly Reviewed (2026)";
export const metaDescription =
  "5 small air purifiers we evaluated, with the CADR-per-square-foot tradeoff competitors skip: a small footprint often means a smaller fan and filter surface, meaning genuinely lower CADR than its size alone would suggest.";
export const mainKeyword = "small air purifier";
export const introParagraphs = [
  "A small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR (Clean Air Delivery Rate) than the compact size alone would suggest, worth checking the actual coverage rating rather than assuming small equals sufficient.",
  "Desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment, a scope mismatch that leads to disappointing results when a compact unit is asked to cover more space than it's rated for.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/51SEA4kds4L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "medify-ma35-small",
    rank: 1,
    badge: "Best Small Air Purifier Overall",
    name: "Medify MA-35 Air Purifier with H13 True HEPA Filter | 330 sq ft Coverage | for Allergies, Pets, Smoke, Smokers, Dust, Odors | Quiet 99.9% Removal to 0.1 Microns | White, 1-Pack",
    price: "$107.99",
    rating: "3.9 stars from 197 Amazon ratings",
    reviews: "197 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51SEA4kds4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08GQ9BQB4?tag=theofficejournal-20",
    description:
      "A compact footprint with genuine 330 sq ft coverage rating and a specific 0.1-micron removal specification, appropriate for a small bedroom or home office rather than a whole apartment.\n\nA small footprint doesn't automatically mean lower performance here, this unit's disclosed coverage and micron specification give real confidence in its capacity for its size.\n\nA genuine advantage here is that explicit 0.1-micron removal specification. The tradeoff is that lower average rating than other picks in this guide.",
    specs: ["99.9% removal to 0.1 microns", "330 sq ft coverage", "H13 True HEPA", "Compact footprint"],
    pros: ["Genuine disclosed coverage rating for its compact size", "Explicit 0.1-micron removal specification", "Marketed for multiple issues (allergies, pets, smoke, odors)", "Reasonable price"],
    cons: ["Lower average rating than other picks in this guide", "Smaller review base", "Not intended for a whole small apartment"],
    bestFor: "Buyers wanting a compact unit with a genuinely disclosed coverage rating",
  },
  {
    id: "levoit-core300-small",
    rank: 2,
    badge: "Best Small Air Purifier for Proven Reliability",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=theofficejournal-20",
    description:
      "A compact cylindrical footprint with by far the largest review base of any pick here, genuinely proven for a small bedroom or desk zone at 24dB quoted noise.\n\nDesktop and small-room units like this are appropriate for a single space specifically, not a whole small apartment, match your expectation to that scope.\n\nCompact footprint fits a small room or desk zone. That said, not rated for a whole small apartment. Neither should be a surprise once you know to look for it.",
    specs: ["True HEPA H13, 99.97% particulate removal", "24dB quoted noise level", "Compact cylindrical footprint", "Largest review base in this guide"],
    pros: ["By far the largest review base of any pick here", "Compact footprint fits a small room or desk zone", "Certified True HEPA H13 filtration", "Very quiet at 24dB"],
    cons: ["Not rated for a whole small apartment", "No smart app control", "Standard CADR, not the highest airflow pick here"],
    bestFor: "Buyers wanting the most-proven compact pick for a single small room",
  },
  {
    id: "mooka-pr1-small",
    rank: 3,
    badge: "Best Budget Small Air Purifier",
    name: "MOOKA Air Purifiers for Home Large Room, PR1 HEPA Air Purifier",
    price: "$79.99",
    rating: "4.6 stars from 4,454 Amazon ratings",
    reviews: "4,454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51nlbgobV2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DCBC8KKV?tag=theofficejournal-20",
    description:
      "An affordable compact option with a solid review base, genuinely capable for a small room or desk zone rather than an open-plan space.\n\nCheck the disclosed coverage rating against your actual room size before buying, a small footprint here does correspond to a genuinely smaller-room CADR rather than an oversized promise.\n\nWorth calling out specifically: solid review base. The catch is lower CADR than larger-footprint alternatives.",
    specs: ["HEPA filtration", "Compact footprint", "Solid review base", "Budget-friendly"],
    pros: ["Affordable price for a compact unit", "Solid review base", "Compact footprint fits a small room", "Reasonable performance for its size"],
    cons: ["Lower CADR than larger-footprint alternatives", "Not intended for an open-plan or larger space", "Fewer smart features than premium picks"],
    bestFor: "Budget-conscious buyers with a genuinely small single room",
  },
  {
    id: "mooka-small2",
    rank: 4,
    badge: "Best Ultra-Compact Small Air Purifier",
    name: "MOOKA Small Air Purifier for Bedroom",
    price: "$45.30",
    rating: "4.5 stars from 9,252 Amazon ratings",
    reviews: "9,252 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41zOBElZS-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PJQ3MWB?tag=theofficejournal-20",
    description:
      "The lowest price and most compact footprint in this guide with a large review base, genuinely appropriate for a small desk zone or a personal space within a larger room.\n\nA small footprint often means a smaller fan and less filter surface area, resulting in a genuinely lower CADR, this unit is best matched to a desk-zone scope rather than a full small bedroom.\n\nLarge, well-established review base. Set against that, lower CADR appropriate only for a desk zone, not a full room. Both matter when comparing it to the other picks here.",
    specs: ["Compact desktop footprint", "Large review base", "Lowest price in this guide", "Budget-friendly"],
    pros: ["Lowest price in this guide", "Large, well-established review base", "Very compact, fits on a desk", "Good value for a desk-zone unit"],
    cons: ["Lower CADR appropriate only for a desk zone, not a full room", "No smart features", "Basic filtration compared to premium picks"],
    bestFor: "A desk zone or personal space rather than a full small bedroom",
  },
  {
    id: "germguardian-small",
    rank: 5,
    badge: "Best Small Air Purifier with Largest Track Record",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316AtkHoSdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=theofficejournal-20",
    description:
      "A compact, well-established design with a large review base, genuinely capable for a small bedroom or home office at a reasonable price.\n\nMatch your expectation of coverage to this unit's actual rated small-room size, not a whole apartment, for realistic results.\n\nThe standout detail is that compact footprint for a small room. Balancing that out, not rated for a whole small apartment.",
    specs: ["True HEPA filtration", "Large review base", "Compact design", "Budget-friendly"],
    pros: ["Large, well-established review base", "Compact footprint for a small room", "True HEPA filtration", "Reasonable price"],
    cons: ["Not rated for a whole small apartment", "No filter indicator", "Fewer smart features than premium alternatives"],
    bestFor: "Small bedrooms or home offices wanting a proven compact pick",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "CADR relative to compact footprint", description: "Considered that a small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR than the compact size alone would suggest." },
  { title: "Realistic scope: single room versus whole apartment", description: "Weighed that desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment." },
  { title: "Disclosed coverage rating verified against claims", description: "Checked whether each pick published a genuine coverage or CADR figure rather than relying on compact size alone to imply adequate performance." },
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
          "Medify MA"
        ],
        [
          "Most-reviewed, strongest reliability signal",
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
          "Up to $108",
          "Medify MA"
        ]
      ]
    }
  },
  {
    "subheading": "Quiet Operation vs Maximum Airflow",
    "cards": [
      {
        "label": "Quiet operation",
        "text": "Better suited for a bedroom or a desk during calls. In this comparison: LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom."
      },
      {
        "label": "Maximum airflow",
        "text": "Faster air turnover for a larger room, usually at a higher noise level on top speed. In this comparison: Medify MA, MOOKA Air Purifiers for Home Large Room, MOOKA Small Air Purifier for Bedroom, Germ Guardian True HEPA Filter Air Purifier for Home."
      }
    ],
    "note": "Default to the quieter pick unless your room is large enough that airflow speed matters more than noise."
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
          "Medify MA"
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
        "text": "Medify MA discloses certified True HEPA filtration."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real odor, VOC, or large-room coverage, where Medify MA's higher price buys real filtration or CADR headroom over the cheaper picks."
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
  { q: "Does a smaller air purifier clean air slower than a larger one?", a: "Often yes. A small footprint often comes with a smaller fan and less filter surface area, meaning a genuinely lower CADR than the compact size alone would suggest, check the disclosed coverage rating." },
  { q: "Can a small air purifier cover my whole studio apartment?", a: "Usually not well. Desktop-sized units are appropriate for a single small room or a desk zone specifically, not a whole small apartment, that's a common scope mismatch leading to disappointing results." },
  { q: "What should I check before buying a compact air purifier?", a: "Verify it has a genuine disclosed coverage or CADR rating rather than assuming its small size alone implies adequate performance for your specific room." },
  { q: "Should I buy one compact unit or several for a small multi-room apartment?", a: "Several is often better. A studio or small apartment with multiple distinct areas typically does better with one compact unit per room than a single unit expected to cover everything." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-air-purifiers-for-desks", title: "Best Compact Air Purifiers for Desks (2026)" },
  { href: "/guide/best-desktop-air-purifiers", title: "Best Desktop Air Purifiers (2026)" },
  { href: "/guide/best-portable-air-purifiers", title: "Best Portable Air Purifiers (2026)" },
];
