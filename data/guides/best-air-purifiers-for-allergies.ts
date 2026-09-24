export const guideSlug = "best-air-purifiers-for-allergies";
export const guideTitle = "5 Best Air Purifiers for Allergies in 2026";
export const metaTitle = "Best Air Purifiers for Allergies, Honestly Reviewed (2026)";
export const metaDescription =
  "5 air purifiers we evaluated for allergies, with the specific target competitors skip: allergist-recommended guidance specifies 4-5 air changes per hour for meaningful symptom relief, a checkable target most consumer marketing never states.";
export const mainKeyword = "air purifier for allergies";
export const introParagraphs = [
  "Allergist-recommended guidance specifies 4-5 air changes per hour (ACH) for meaningful allergy symptom relief, a specific, checkable target that almost no consumer air purifier marketing states, verify a unit's real ACH against your room size to confirm it meets this threshold.",
  "Some allergy sufferers are also sensitive to ozone byproduct from ionizer-equipped units, creating a real risk that an allergy purifier with an ionizer feature could exacerbate respiratory symptoms rather than help.",
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
    id: "levoit-core300-allergies",
    rank: 1,
    badge: "Best Air Purifier for Allergies Overall",
    name: "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, H13 True HEPA Filter, 24db Filtration System Cleaner Odor Eliminators, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White",
    price: "$89.99",
    rating: "4.7 stars from 108,251 Amazon ratings",
    reviews: "108,251 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VVK39F7?tag=theofficejournal-20",
    description:
      "Explicitly marketed for allergies with certified True HEPA H13 removing 99.97% of particulates, by far the largest review base of any pick in this guide as real-world allergy-relief evidence.\n\nVerify the 4-5 ACH target against your specific room size, and note that allergens settling on surfaces are only recirculated by disturbance, placement and timing relative to cleaning matter too.\n\nBy far the largest review base of any pick in this guide. On the other hand, verify 4-5 ACH target against your specific room size. Both are worth keeping in mind before deciding.",
    specs: ["True HEPA H13, marketed for allergies", "24dB quoted noise level", "Removes 99.97% of particulates", "Largest review base in this guide"],
    pros: ["Explicitly marketed and reviewed for allergy relief", "By far the largest review base of any pick in this guide", "Certified True HEPA H13 filtration", "Affordable price"],
    cons: ["Verify 4-5 ACH target against your specific room size", "No ionizer feature to worry about, but also verify this explicitly", "No activated carbon layer for pet odor specifically"],
    bestFor: "Buyers who want the most-proven allergy-relief purifier",
  },
  {
    id: "coway-mighty-allergiesalt",
    rank: 2,
    badge: "Best Established Brand Allergy Pick",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH, Black",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/419pAe7T0EL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00BTKAPUU?tag=theofficejournal-20",
    description:
      "Explicitly marketed for allergies and pet dander with an air quality monitor, large review base and 3-year warranty for real long-term confidence.\n\nSeasonal allergy sufferers may need higher ACH during peak pollen weeks than a unit sized for average year-round need, this larger coverage rating gives real headroom for those periods.\n\nA genuine advantage here is that explicitly marketed for allergies and pet dander. The tradeoff is that higher price than the top pick.",
    specs: ["HEPA filter, marketed for allergies and pet dander", "Air quality monitor, Auto/Eco mode", "3-year warranty", "Large review base"],
    pros: ["Large, well-established review base", "Explicitly marketed for allergies and pet dander", "3-year warranty", "Large rated coverage for seasonal peak-need headroom"],
    cons: ["Higher price than the top pick", "Verify 4-5 ACH target against your specific room size", "No confirmed ozone-free ionizer status"],
    bestFor: "Allergy sufferers who want an established brand with a warranty and seasonal headroom",
  },
  {
    id: "levoit-vital200s-allergiesalt2",
    rank: 3,
    badge: "Best Smart Pick for Seasonal Adjustment",
    name: "LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S-P",
    price: "$174.99",
    rating: "4.7 stars from 14,571 Amazon ratings",
    reviews: "14,571 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGPF71Q6?tag=theofficejournal-20",
    description:
      "Smart app control lets you genuinely adjust speed for seasonal pollen peaks versus a lower year-round baseline. Large rated coverage supports a real 4-5 ACH target across a bigger room.\n\nUse the app scheduling to run higher speeds during peak pollen weeks specifically, rather than a flat year-round setting that may underperform during your worst symptom periods.\n\nLarge rated coverage supports a real 4-5 ACH target. That said, higher price than compact alternatives. Neither should be a surprise once you know to look for it.",
    specs: ["Up to 1875 sq ft rated (open room)", "Smart app control", "Large review base", "Higher capacity for ACH headroom"],
    pros: ["Smart app control for seasonal speed adjustment", "Large rated coverage supports a real 4-5 ACH target", "Large, well-established review base", "Genuine headroom for peak pollen periods"],
    cons: ["Higher price than compact alternatives", "Verify ozone-free ionizer status explicitly", "Larger footprint for a small room"],
    bestFor: "Allergy sufferers who want to adjust for seasonal pollen peaks specifically",
  },
  {
    id: "coway-mighty-white-allergiesalt3",
    rank: 4,
    badge: "Best White Finish Alternative",
    name: "COWAY Air Purifier for Home Up to 1,748ft², HEPA Filter for Smoke, Allergies, Pet Dander, Odor, Air Quality Monitor, Auto&Eco Mode, Timer, Filter Indicator, 3yr Warranty, Mighty AP-1512HH(W), White",
    price: "$229.99",
    rating: "4.6 stars from 28,866 Amazon ratings",
    reviews: "28,866 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31pCHKKqN2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01728NLRG?tag=theofficejournal-20",
    description:
      "The same proven allergy and pet dander design in a white finish, appropriate for a lighter aesthetic while keeping the same 3-year warranty and ACH headroom.\n\nSame seasonal and ACH considerations apply as the black variant, verify your specific room's ACH need and seasonal peaks.\n\nWorth calling out specifically: 3-year warranty. The catch is higher price than the top pick.",
    specs: ["HEPA filter, marketed for allergies and pet dander", "Air quality monitor, Auto/Eco mode", "3-year warranty", "White finish"],
    pros: ["Same proven design as the black variant", "3-year warranty", "White finish for lighter aesthetics", "Large, well-established review base"],
    cons: ["Higher price than the top pick", "Verify 4-5 ACH target against your specific room size", "No confirmed ozone-free ionizer status"],
    bestFor: "Allergy sufferers who want the proven Coway design in a white finish",
  },
  {
    id: "membrane-solutions-allergiesalt4",
    rank: 5,
    badge: "Best Budget Allergy Pick",
    name: "Membrane Solutions MSA3 Air Purifier for Home",
    price: "$99.39",
    rating: "4.5 stars from 10,110 Amazon ratings",
    reviews: "10,110 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31CcBFzC6wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ND7C7P4?tag=theofficejournal-20",
    description:
      "A genuinely more affordable option with a solid review base, appropriate for basic allergy relief on a budget. Verify HEPA certification level before assuming premium particulate capture.\n\nPet dander (finer, more allergenic) requires genuine HEPA-level filtration to capture effectively, verify this certification specifically if pet dander is your main allergen concern.\n\nSolid review base. Set against that, verify certified True HEPA vs. HEPA-type claim for dander capture. Both matter when comparing it to the other picks here.",
    specs: ["HEPA filtration", "Solid review base", "Budget-friendly", "Compact design"],
    pros: ["More affordable than premium alternatives", "Solid review base", "Compact design", "Reasonable performance for the price"],
    cons: ["Verify certified True HEPA vs. HEPA-type claim for dander capture", "No 4-5 ACH target verification available", "No smart features"],
    bestFor: "Budget-conscious allergy sufferers who will verify HEPA certification specifics",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Explicit 4-5 ACH target verification against room size", description: "Emphasized verifying a unit's real air-changes-per-hour against room size for allergist-recommended effectiveness, a specific, checkable target that almost no consumer marketing states directly." },
  { title: "Ozone-byproduct risk flagged specifically for allergy-sensitive buyers", description: "Noted that some allergy sufferers are also sensitive to ozone byproduct from ionizer-equipped units, creating a real risk that an ionizer feature could exacerbate respiratory symptoms." },
  { title: "Seasonal ACH-need adjustment guidance for peak pollen periods", description: "Provided guidance for seasonal allergy sufferers who may need higher ACH during specific pollen seasons than year-round, since a unit sized for average need may underperform during peak weeks." },
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
          "Under $90",
          "LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom"
        ],
        [
          "Up to $230",
          "COWAY Air Purifier for Home Up to 1"
        ]
      ]
    }
  },
  {
    "subheading": "Smart App-Connected vs Basic Manual Controls",
    "cards": [
      {
        "label": "Smart, app-connected",
        "text": "Lets you monitor air quality and adjust fan speed remotely, useful if you want automation or scheduling. In this comparison: LEVOIT Smart Air Purifier for Home Large Room up to 1875 ft Vital 200S."
      },
      {
        "label": "Basic manual controls",
        "text": "Simpler and usually cheaper, with nothing to set up or connect. In this comparison: LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom, COWAY Air Purifier for Home Up to 1, COWAY Air Purifier for Home Up to 1, Membrane Solutions MSA3 Air Purifier for Home."
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
          "COWAY Air Purifier for Home Up to 1"
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
        "text": "You need real odor, VOC, or large-room coverage, where COWAY Air Purifier for Home Up to 1's higher price buys real filtration or CADR headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You're covering a small space with a basic dust or allergen concern, where LEVOIT Air Purifier for Home Allergies and Pets Hair Smokers in Bedroom covers the same job at a lower price."
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
  { q: "What air-changes-per-hour rate do allergists recommend for allergy relief?", a: "4-5 air changes per hour (ACH) is the allergist-recommended guidance for meaningful symptom relief, a specific target rarely stated in consumer marketing, verify a unit's real ACH against your room size using its rated CADR." },
  { q: "Can an air purifier's ionizer feature make my allergies worse?", a: "Potentially, if you're also sensitive to ozone. Some allergy sufferers have respiratory sensitivity to ozone byproduct from ionizer-equipped units, creating a real risk of exacerbating symptoms rather than helping." },
  { q: "Do I need a bigger air purifier during allergy season?", a: "Possibly. Seasonal allergy sufferers may need higher ACH during specific pollen seasons than year-round, a unit sized for average need may underperform during peak weeks, consider extra headroom or smart scheduling." },
  { q: "Does air purifier placement matter for allergy relief?", a: "Yes. Allergens like dust mite debris and pet dander settle on surfaces and are only recirculated into the air by disturbance, walking, cleaning, purifier placement and timing relative to cleaning activity affects real exposure reduction." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-hepa-air-purifiers", title: "Best HEPA Air Purifiers (2026)" },
  { href: "/guide/best-ozone-free-air-purifiers", title: "Best Ozone-Free Air Purifiers (2026)" },
  { href: "/guide/best-air-purifiers-for-dust", title: "Best Air Purifiers for Dust (2026)" },
];
