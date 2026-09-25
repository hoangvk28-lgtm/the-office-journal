// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Expect real-world sheet capacity to run below the rated figure",
    "explanation": "A shredder's rated sheet capacity, like \"10-sheet\" or \"15-sheet\", is measured under ideal lab conditions with fresh, single-type paper fed perfectly straight, real-world use with mixed paper stock, folded sheets, or slightly misaligned feeding typically shreds closer to 70-80% of the rated capacity before jamming or straining the motor.\n\nThis matters because buying exactly at your expected daily volume often means the shredder is already operating past its comfortable real-world limit on day one.\n\nSize up from your actual typical stack thickness rather than matching the rated number exactly, and check reviews for mentions of real-world jamming at the rated capacity."
  },
  {
    "criterion": "Match security level (P-rating) to what you're actually shredding",
    "explanation": "The P-rating (P-2 through P-7) describes the physical size and shape of the shredded particles, not how good the shredder feels, P-2 strip-cut produces long strips that are technically reconstructible, P-4 cross-cut produces confetti-sized pieces suitable for most personal and financial documents, and P-5 or higher micro-cut produces particles small enough for sensitive material.\n\nThis matters directly for documents with account numbers, social security numbers, or other identity-theft-relevant information, where strip-cut offers meaningfully weaker protection than cross-cut or micro-cut.\n\nCheck the listing for the specific P-rating number, not just the marketing terms \"cross-cut\" or \"micro-cut\" alone, since those terms can be applied loosely."
  },
  {
    "criterion": "Check continuous run time against your actual shredding sessions",
    "explanation": "Every shredder has a maximum continuous run time before its motor needs to cool down, often just 2-5 minutes on budget models, after which it locks out for 15-30 minutes or longer while the motor cools.\n\nThis matters a great deal if you regularly shred a large stack in one sitting, hitting the run-time limit mid-task means stopping and waiting, sometimes repeatedly, before finishing the job.\n\nCheck the listing specifically for continuous run time in minutes, and compare that against how large your typical shredding sessions actually are, not just how often you shred."
  },
  {
    "criterion": "Consider bin capacity relative to how often you're willing to empty it",
    "explanation": "A larger waste bin means fewer interruptions to empty it, but it also means a heavier bin to lift and empty when it does fill, and a shredder placed in a tight space under a desk may not have room for an oversized bin at all.\n\nBin size ranges widely across this category, from compact under-desk units around 3-4 gallons to larger office units at 6 gallons or more.\n\nCheck the listed bin capacity in gallons, and weigh it against both your available floor space and how often you're realistically willing to stop and empty it."
  },
  {
    "criterion": "Verify jam-clearing and safety features if this will see frequent or shared use",
    "explanation": "Features like anti-jam reverse function, overload sensors, and a safety lock that disables the blades when the bin is removed vary meaningfully between models at similar prices, and their absence turns an occasional paper jam into a genuine hassle involving manual disassembly.\n\nThis matters more for a shredder used frequently or by multiple people in a shared office setting than for occasional light personal use.\n\nCheck the specific listed safety and anti-jam features rather than assuming any shredder in this price range includes them, since budget models frequently omit auto-reverse or safety locks entirely."
  }
];

export const faq = [
  {
    "q": "Can I get a high-security P-5 shredder for under $100?",
    "a": "Every pick in this guide sits at P-3 or P-4 security, the realistic ceiling for sub-$100 shredders. If you need P-5+ for highly sensitive documents, look at higher price tiers."
  },
  {
    "q": "How long can I shred continuously with a sub-$100 shredder?",
    "a": "Typically only 3-15 minutes before needing a cooldown of 30-40+ minutes. This is the shortest duty-cycle range in the shredder category, plan for light, occasional sessions rather than one large purge."
  },
  {
    "q": "Are warranties shorter on budget shredders?",
    "a": "Sub-$100 shredders commonly carry around 1-year warranties, shorter than premium models, a real cost-of-ownership factor since these units also tend to wear faster."
  },
  {
    "q": "Which pick in this guide has the longest run time under $100?",
    "a": "The Bonsaii 12-sheet C282-A pick (rank 4) offers 15 minutes of continuous run time, capable of roughly 900 sheets per cycle, the longest confirmed duty cycle among the picks in this guide."
  }
];

export const guideSlug = "best-paper-shredders-under-100";

export const guideTitle = "The Best Paper Shredders Under $100: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/31QbluTUmKL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "The lower-priced option in this comparison, worth checking its security rating against your document sensitivity."
      },
      {
        "label": "",
        "text": "The higher-priced option, worth it if it offers real capacity or security headroom above the cheaper pick."
      }
    ],
    "note": "Default to Amazon Basics 8 unless your document volume or sensitivity calls for the pricier pick."
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "For Sensitive Financial Documents Specifically",
    "cards": [
      {
        "label": "",
        "text": "A P-4 cross-cut rating or higher, not just the marketing term \"cross-cut\" without a specific P-rating attached."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You regularly shred large stacks or sensitive documents, where Bonsaii 12's higher price buys real capacity or security headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You only shred occasionally with a low sheet volume, where Amazon Basics 8 covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Explicit security-level ceiling disclosure at this price tier",
    "description": "Confirmed that every pick in this guide sits at P-3 or P-4 security, the realistic ceiling, buyers needing higher security destruction won't find it reliably in this price range."
  },
  {
    "title": "Duty cycle and cooldown as a cost-of-ownership factor",
    "description": "Highlighted that budget-tier shredders have the shortest duty cycles in the category (3-15 minutes), front-and-center rather than buried, since this directly affects realistic bulk-purge expectations."
  },
  {
    "title": "Blade hardness disclosure (or its absence) as a reliability signal",
    "description": "Noted that none of the picks in this guide explicitly confirm hardened steel blades, the sub-a competitive tier is the segment least likely to disclose this detail, making staple-tolerance claims less verifiable here than at higher price points."
  }
];

export const introParagraphs = [
  "Sub-$100 shredders sit almost universally at P-3 to P-4 security, a real ceiling worth knowing upfront if your documents need higher-security destruction. Duty cycle at this price point is also the shortest in the category, often 3-9 minutes with 30-40 minute cooldowns, plan for that if you're purging a large document backlog.",
  "Warranty coverage at this price tier is also typically the shortest available, often 1 year, and staple/clip tolerance is generally weakest here due to standard (non-hardened) steel blades, both real cost-of-ownership factors beyond the sticker price."
];

export const lastUpdated = "2026-07-28";

export const mainKeyword = "paper shredder under 100";

export const metaDescription = "How 8 paper shredders under $100 compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Paper Shredders Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "amazonbasics-8-under100",
    "rank": 1,
    "badge": "Best Overall Under $100",
    "name": "Amazon Basics 8-Sheet High Security Cross Cut Paper and Credit Card Shredder",
    "price": "$33.16",
    "rating": "4.3 stars from 77,112 Amazon ratings",
    "reviews": "77,112 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31QbluTUmKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6LZ8S34?tag=theofficejournal-20",
    "description": "As with every genuine budget pick, expect a short 3-minute duty cycle and standard (not confirmed hardened) steel blades. Handles credit cards alongside paper, a useful combination at this price tier. Balancing that out, short 3-minute continuous run time.",
    "specs": [
      "8-sheet cross-cut, P-4 high security",
      "3-minute continuous run time",
      "3.7-gallon bin"
    ],
    "pros": [
      "Cheapest P-4-rated pick in this guide",
      "Handles credit cards",
      "Reliable at this exact price point"
    ],
    "cons": [
      "Short 3-minute continuous run time",
      "Standard steel blades, not confirmed hardened for heavy staple use",
      "Small 3.7-gallon bin needs frequent emptying"
    ],
    "bestFor": "Buyers who want the cheapest P-4-secure shredder"
  },
  {
    "id": "amazonbasics-8-white-under100",
    "rank": 2,
    "badge": "Same Value, White Finish",
    "name": "Amazon Basics 8-Sheet Cross Cut Paper and Credit Card Shredder for Security, White",
    "price": "$33.16",
    "rating": "4.3 stars from 77,112 Amazon ratings",
    "reviews": "77,112 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31WGmZ4xo0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6LXGNY1?tag=theofficejournal-20",
    "description": "Choose based on finish preference, the underlying value proposition is the same.",
    "specs": [
      "8-sheet cross-cut, P-4 high security",
      "3-minute continuous run time",
      "3.7-gallon bin, white finish"
    ],
    "pros": [
      "Same P-4 security as the rank-1 pick",
      "White finish option",
      "Handles credit cards too"
    ],
    "cons": [
      "Same short 3-minute duty cycle as the rank-1 pick",
      "Same non-hardened blade caveat",
      "Small bin needs frequent emptying"
    ],
    "bestFor": "Buyers who want the same value as rank 1 in a white finish"
  },
  {
    "id": "bonsen-8-under100",
    "rank": 3,
    "badge": "Best Compact Under-Desk Value",
    "name": "BONSEN Shredder for Home Office, 4 Gallons 8-Sheet Cross Cut Credit Card Shredder",
    "price": "$39.09",
    "rating": "4.4 stars from 7,466 Amazon ratings",
    "reviews": "7,466 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31AtA7qsSwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08J2N4CS2?tag=theofficejournal-20",
    "description": "Explicitly designed to fit under a desk, with a larger 4-gallon bin than the basic Amazon Basics picks at a similar price. P-4 security and ETL certification are genuine value adds at this exact price point.\n\nA reasonable step up if bin size and under-desk fit matter more to you than the absolute lowest price.\n\nLarger 4-gallon bin than the cheapest picks. Both are worth keeping in mind before deciding.",
    "specs": [
      "8-sheet cross-cut, P-4, compact under-desk design",
      "5-minute continuous run time",
      "4-gallon bin, ETL certified",
      "Lift-off handle"
    ],
    "pros": [
      "Explicitly designed to fit under a desk",
      "Larger 4-gallon bin than the cheapest picks",
      "Longer 5-minute run time than the cheapest options",
      "ETL certified"
    ],
    "cons": [
      "Slightly higher price than the cheapest picks in this guide",
      "Same P-4 security ceiling as the rest of this guide"
    ],
    "bestFor": "Buyers who want a larger bin and confirmed under-desk fit at a modest premium"
  },
  {
    "id": "bonsaii-282-under100",
    "rank": 4,
    "badge": "Longest Run Time Under $100",
    "name": "Bonsaii 12-Sheet Cross Cut Heavy Duty Paper Shredder for Home Office",
    "price": "$79.99",
    "rating": "4.5 stars from 1,685 Amazon ratings",
    "reviews": "1,685 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/310qS+3q87L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5XPJ524?tag=theofficejournal-20",
    "description": ", this is the priciest pick in this guide but delivers the longest continuous run time at 15 minutes, capable of roughly 900 sheets per cycle, a substantial duty cycle for the price ceiling. 5-gallon bin round out a strong value proposition near the top of this budget range. A reasonable choice if you're willing to spend closer to the ceiling for meaningfully more run time and capacity than the cheapest picks.",
    "specs": [
      "12-sheet cross-cut, P-4",
      "15-minute continuous run, ~900 sheets/cycle",
      "5.5-gallon bin, jam-proof reverse",
      "Solid rating"
    ],
    "pros": [
      "Longest continuous run time under $100 in this guide",
      "Large 5.5-gallon bin",
      "Jam-proof reverse system",
      "Higher per-pass capacity than the 8-sheet picks"
    ],
    "cons": [
      "Priciest pick in this guide, close to the $100 ceiling",
      "Not the cheapest option here",
      "Same P-4 security ceiling as the rest of this guide"
    ],
    "bestFor": "Buyers willing to spend near the top of this budget for the longest available run time"
  },
  {
    "id": "bonsaii-9-under100",
    "rank": 5,
    "badge": "Compact Budget Alternative",
    "name": "Bonsaii 9-Sheet Crosscut Paper Shredder for Home, P-4 Security Level",
    "price": "$45.99",
    "rating": "4.4 stars from 17,486 Amazon ratings",
    "reviews": "17,486 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31CCjvn4JRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK73XJCX?tag=theofficejournal-20",
    "description": "P-4 security and manual reverse for jam clearing round out a solid mid-budget option.\n\nA reasonable choice if you want slightly more capacity than the cheapest 8-sheet picks without approaching the higher end of this price range.\n\nSlightly higher capacity than the basic 8-sheet picks. That said, same P-4 security ceiling as every pick in this guide.",
    "specs": [
      "9-sheet cross-cut, P-4",
      "5-minute continuous run time, ~180 sheets/cycle",
      "Compact size (7.34 x 12.2 x 14.88 in)"
    ],
    "pros": [
      "Slightly higher capacity than the basic 8-sheet picks",
      "Compact footprint",
      "P-4 security level"
    ],
    "cons": [
      "Same P-4 security ceiling as every pick in this guide",
      "Not the cheapest option here",
      "Modest 5-minute run time"
    ],
    "bestFor": "Buyers who want slightly more capacity than entry-level 8-sheet picks at a moderate price"
  },
  {
    "id": "bonsaii-10-under100",
    "rank": 6,
    "badge": "Best Large Bin Under $60",
    "name": "Bonsaii 10-Sheet Heavy Duty Cross Cut Paper Shredder for Home Office",
    "price": "$53.09",
    "rating": "4.4 stars from 9,810 Amazon ratings",
    "reviews": "9,810 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31wkQYg97oL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MHR4457?tag=theofficejournal-20",
    "description": "5-gallon bin at just, real value at this budget tier, with 10-sheet capacity and confirmed staple/credit card handling. A sensible mid-budget pick if bin size matters more to you than run time.",
    "specs": [
      "10-sheet cross-cut, P-4",
      "4-minute continuous run time",
      "5.5-gallon bin",
      "Handles staples, credit cards"
    ],
    "pros": [
      "Large 5.5-gallon bin for the price",
      "Handles staples and credit cards",
      "Good balance of capacity and price"
    ],
    "cons": [
      "Short 4-minute continuous run time",
      "Same P-4 security ceiling as the rest of this guide",
      "Not the absolute cheapest option here"
    ],
    "bestFor": "Buyers who want a large bin without approaching the top of this budget range"
  },
  {
    "id": "amazonbasics-12-under100",
    "rank": 7,
    "badge": "Highest Capacity Under $60",
    "name": "Amazon Basics 12-Sheet Cross-Cut Paper and Credit Card Shredder",
    "price": "$58.00",
    "rating": "4.3 stars from 77,112 Amazon ratings",
    "reviews": "77,112 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31GNS0CdNOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6LZG69W?tag=theofficejournal-20",
    "description": "P-3 security here, a step below the P-4 picks elsewhere in this guide, a real tradeoff at this specific price point. A 9-minute continuous run time is a genuine step up from the shortest budget picks, worth the modest premium over the 8-sheet options.",
    "specs": [
      "12-sheet cross-cut, P-3 security",
      "9-minute continuous run time",
      "5-gallon bin"
    ],
    "pros": [
      "Highest capacity under $60 in this guide",
      "Longer run time than the 8-sheet budget picks",
      "Large 5-gallon bin"
    ],
    "cons": [
      "P-3 security, lower than the P-4 picks elsewhere in this guide",
      "Not the cheapest option here",
      "Standard blade hardness, not confirmed"
    ],
    "bestFor": "Buyers who want the highest capacity in the sub-$60 range and accept P-3 security"
  },
  {
    "id": "bonsaii-c275-under100",
    "rank": 8,
    "badge": "Most Compact, Lowest Run Time",
    "name": "Bonsaii 12-Sheet Cross Cut Paper Shredder, 5.5 Gal Home Office Heavy Duty",
    "price": "$55.24",
    "rating": "4.5 stars from 8,974 Amazon ratings",
    "reviews": "8,974 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31H0gGU7jHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09N991KVT?tag=theofficejournal-20",
    "description": "5-gallon bin, priced in the middle of this guide's range. Its short 6-minute continuous run time is typical of this price tier, plan for occasional light use rather than large bulk sessions.\n\nA reasonable, well-rated all-around choice for light home-office needs within this budget.\n\nBalancing that out, short 6-minute continuous run time typical of this price tier.",
    "specs": [
      "12-sheet cross-cut, P-4",
      "6-minute continuous run time",
      "5.5-gallon bin, compact"
    ],
    "pros": [
      "Compact footprint fits under a desk",
      "Large 5.5-gallon bin",
      "P-4 security level"
    ],
    "cons": [
      "Short 6-minute continuous run time typical of this price tier",
      "Same P-4 security ceiling as the rest of this guide",
      "Not suited for large bulk purges"
    ],
    "bestFor": "Buyers who want a compact, well-rated shredder for light regular home-office use"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-8-sheet-paper-shredders",
    "title": "Best 8-Sheet Paper Shredders (2026)"
  },
  {
    "href": "/guide/best-10-sheet-paper-shredders",
    "title": "Best 10-Sheet Paper Shredders (2026)"
  },
  {
    "href": "/guide/best-paper-shredders-for-credit-cards",
    "title": "Best Paper Shredders for Credit Cards (2026)"
  }
];

export const breadcrumbLabel = "Best Paper Shredders Under $100";
