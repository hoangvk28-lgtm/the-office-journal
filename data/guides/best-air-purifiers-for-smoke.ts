export const guideSlug = "best-air-purifiers-for-smoke";
export const guideTitle = "5 Best Air Purifiers for Smoke in 2026";
export const metaTitle = "Best Air Purifiers for Smoke, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers we evaluated for smoke, with the CADR-for-smoke specificity competitors skip: a general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box.";
export const mainKeyword = "air purifier for smoke";
export const introParagraphs = [
  "A general CADR (Clean Air Delivery Rate) rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number printed on the same box, since smoke particles are finer and behave differently in airflow.",
  "Activated carbon mass, not just HEPA filtration, is what actually captures smoke odor at the molecular level, a HEPA-only unit removes visible particulate but does little for the lingering smell without a substantial carbon stage.",
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
    id: "levoit-core300-smoke",
    rank: 1,
    badge: "Best Air Purifier for Smoke Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=theofficejournal-20",
    description:
      "Explicitly marketed for smoke with by far the largest review base of any pick here as real-world evidence, True HEPA H13 captures fine smoke particulate at 99.97%.\n\nA HEPA-only design removes visible particulate but does little for lingering smell without a substantial carbon stage, check whether persistent odor is your bigger concern than particulate.\n\nA genuine advantage here is that by far the largest review base of any pick here. The tradeoff is that standard carbon layer, not the deepest odor-control pick here.",
    specs: ["True HEPA H13, marketed for smoke", "24dB quoted noise level", "Removes 99.97% of particulates", "Largest review base in this guide"],
    pros: ["Explicitly marketed and reviewed for smoke", "By far the largest review base of any pick here", "Certified True HEPA H13 filtration", "Affordable price"],
    cons: ["Standard carbon layer, not the deepest odor-control pick here", "No smart app control", "Smoke-specific CADR not separately published"],
    bestFor: "Buyers wanting the most-proven pick for smoke particulate",
  },
  {
    id: "winix5520-smoke",
    rank: 2,
    badge: "Best for Lingering Smoke Odor",
    name: "WINIX 5520 Air Purifier with PlasmaWave Technology",
    price: "$179.99",
    rating: "4.6 stars from 31,954 Amazon ratings",
    reviews: "31,954 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Wb8TGSnPL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT4F8T4L?tag=theofficejournal-20",
    description:
      "PlasmaWave technology adds a genuine odor-neutralizing layer beyond mechanical carbon filtration alone, meaningful for lingering smoke smell rather than just particulate removal.\n\nActivated carbon mass, not HEPA alone, is what actually captures smoke odor at the molecular level, this unit's added PlasmaWave layer complements that mechanical carbon stage.\n\nLarge, well-established review base. That said, higher price than the top pick. Neither should be a surprise once you know to look for it.",
    specs: ["PlasmaWave odor-neutralizing technology", "Large, established review base", "True HEPA filtration", "Multi-stage filtration"],
    pros: ["PlasmaWave specifically targets lingering smoke odor", "Large, well-established review base", "True HEPA captures fine smoke particulate too", "Proven, established design"],
    cons: ["Higher price than the top pick", "Larger footprint than compact alternatives", "Carbon and plasma stages still saturate and need periodic filter replacement"],
    bestFor: "Buyers dealing with lingering smoke odor beyond particulate",
  },
  {
    id: "nuwave-oxypure-smoke",
    rank: 3,
    badge: "Best High-Capacity Smoke Pick",
    name: "Nuwave OxyPure Smart Air Purifier",
    price: "$799.99",
    rating: "4.6 stars from 616 Amazon ratings",
    reviews: "616 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CulL9tCOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08K3R8QPF?tag=theofficejournal-20",
    description:
      "A multi-stage design with a substantial carbon mass genuinely built for heavier smoke exposure, appropriate for a wildfire-smoke season or a heavy indoor-smoking household.\n\nThe higher price reflects genuinely more carbon mass and filtration stages than a standard HEPA-only unit, worth it for a heavier or more persistent smoke exposure scenario.\n\nWorth calling out specifically: multi-stage filtration for both particulate and odor. The catch is highest price in this guide by a wide margin.",
    specs: ["Multi-stage filtration with substantial carbon mass", "Smart app control", "5-stage filtration system", "Higher capacity for heavy smoke exposure"],
    pros: ["Substantial carbon mass genuinely built for heavy smoke odor", "Multi-stage filtration for both particulate and odor", "Smart app control for monitoring", "Higher capacity for wildfire-season or heavy indoor smoke"],
    cons: ["Highest price in this guide by a wide margin", "Smaller review base than budget alternatives", "Overkill for occasional light smoke exposure"],
    bestFor: "Wildfire-smoke season or heavy indoor-smoking households",
  },
  {
    id: "germguardian-smoke",
    rank: 4,
    badge: "Best Budget Smoke Pick",
    name: "Germ Guardian True HEPA Filter Air Purifier for Home",
    price: "$80.74",
    rating: "4.6 stars from 63,485 Amazon ratings",
    reviews: "63,485 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316AtkHoSdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B004VGIGVY?tag=theofficejournal-20",
    description:
      "A large review base at the lowest price in this guide, genuinely capable for occasional light smoke exposure rather than heavy or persistent smoke odor.\n\nOccasional light exposure is a reasonable fit here, a heavier or more persistent smoke scenario likely needs one of the deeper-carbon picks in this guide instead.\n\nLarge, well-established review base. Set against that, not built for heavy or persistent smoke odor. Both matter when comparing it to the other picks here.",
    specs: ["True HEPA filtration", "Large review base", "Budget-friendly", "Compact design"],
    pros: ["Lowest price in this guide", "Large, well-established review base", "True HEPA captures fine smoke particulate", "Compact footprint"],
    cons: ["Not built for heavy or persistent smoke odor", "Standard carbon layer, saturates faster under heavy smoke load", "Fewer smart features than premium alternatives"],
    bestFor: "Budget-conscious buyers with occasional light smoke exposure",
  },
  {
    id: "levoit-vital200s-smoke",
    rank: 5,
    badge: "Best High-Coverage Smoke Pick",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=theofficejournal-20",
    description:
      "Rated up to 1875 sq ft with smart app control, genuine headroom for a larger room affected by smoke where the smoke-specific CADR runs lower than the general dust or pollen number.\n\nSize up from a standard-capacity unit for a larger affected room, since a general CADR rating overstates real smoke-clearing speed for that specific space.\n\nThe standout detail is that smart app control for monitoring. Balancing that out, higher price than budget alternatives.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Extra headroom for larger smoke-affected rooms"],
    pros: ["Large rated coverage compensates for lower smoke-specific CADR", "Smart app control for monitoring", "Large, well-established review base", "Genuine headroom for a larger room"],
    cons: ["Higher price than budget alternatives", "Larger footprint than compact picks", "Smoke-specific CADR not separately published, sizing up is still the safest approach"],
    bestFor: "Larger rooms affected by smoke needing extra coverage headroom",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Smoke-specific CADR versus general CADR", description: "Considered that a general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box." },
  { title: "Carbon mass as the actual odor-capture mechanism", description: "Weighed that activated carbon mass, not HEPA filtration alone, is what actually captures smoke odor at the molecular level, a HEPA-only unit does little for lingering smell." },
  { title: "Exposure intensity matched to filtration depth", description: "Distinguished occasional light smoke exposure from heavy or persistent exposure (wildfire season, indoor smoking), matching filtration depth and coverage to the real scenario." },
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
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
        ],
        [
          "Odor and VOC reduction, carbon filter",
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
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
          "Under $81",
          "Germ Guardian True HEPA Filter Air Purifier for Home"
        ],
        [
          "Up to $800",
          "Nuwave OxyPure Smart Air Purifier"
        ]
      ]
    }
  },
  {
    "subheading": "Smart App-Connected vs Basic Manual Controls",
    "cards": [
      {
        "label": "Smart, app-connected",
        "text": "Lets you monitor air quality and adjust fan speed remotely, useful if you want automation or scheduling. In this comparison: Nuwave OxyPure Smart Air Purifier, LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S."
      },
      {
        "label": "Basic manual controls",
        "text": "Simpler and usually cheaper, with nothing to set up or connect. In this comparison: LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, WINIX 5520 Air Purifier with PlasmaWave Technology, Germ Guardian True HEPA Filter Air Purifier for Home."
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
          "Nuwave OxyPure Smart Air Purifier"
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
        "text": "You need real odor, VOC, or large-room coverage, where Nuwave OxyPure Smart Air Purifier's higher price buys real filtration or CADR headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You're covering a small space with a basic dust or allergen concern, where Germ Guardian True HEPA Filter Air Purifier for Home covers the same job at a lower price."
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
  { q: "Does a high CADR rating mean fast smoke clearing?", a: "Not necessarily. A general CADR rating doesn't tell you the smoke-specific CADR, which is often meaningfully lower than the dust or pollen number on the same box, since smoke particles behave differently in airflow." },
  { q: "Will a HEPA filter alone remove smoke smell?", a: "Not fully. HEPA filtration removes visible smoke particulate, but activated carbon mass is what actually captures smoke odor at the molecular level, a HEPA-only unit does little for lingering smell." },
  { q: "Do I need a more powerful air purifier for wildfire smoke season?", a: "Yes. Heavy or persistent smoke exposure like wildfire season needs deeper carbon mass and multi-stage filtration than a standard budget unit designed for occasional light exposure." },
  { q: "Should I size up coverage rating for a smoke-affected room?", a: "Yes. Since a general CADR rating overstates real smoke-clearing speed for that specific space, choosing a unit rated for a larger room than your actual space gives useful real-world headroom." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-air-purifiers-for-odors", title: "Best Air Purifiers for Odors (2026)" },
  { href: "/guide/best-air-purifiers-for-vocs", title: "Best Air Purifiers for VOCs (2026)" },
  { href: "/guide/best-hepa-and-carbon-air-purifiers", title: "Best HEPA and Carbon Air Purifiers (2026)" },
];
