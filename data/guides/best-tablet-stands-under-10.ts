// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-tablet-stands-under-10";

export const guideTitle = "The Best Tablet Stands Under $10 for Desk and Travel";

export const breadcrumbLabel = "Best Tablet Stands Under $10";

export const metaTitle = "Best Tablet Stands Under $10: Adjustable iPad Holders (2026)";

export const metaDescription = "We compared tablet stands under $10 on device size range, case thickness, adjustment, weight and folded size, from a weighted Lamicall to a pocketable UGREEN.";

export const mainKeyword = "best tablet stands under $10";

export const introParagraphs = [
  "A tablet stand under $10 can raise a tablet to a more comfortable viewing angle for video calls, reading or a second screen, and fold away when you travel. The differences are practical: whether the tablet fits with its case on, how stable the stand is with a large tablet, and how far it adjusts.",
  "Check two numbers before ordering: the device size range, and how thick a tablet-plus-case the hooks accept. Heavier bases resist tipping when you tap the screen; lighter stands are easier to carry.",
  "Our comparison is based on published specifications and price position, not hands-on testing. All four cost under $10 at the time of writing."
];

export const lastUpdated = "2026-09-14";

export const readTime = "7 min";

export const heroImage = "https://m.media-amazon.com/images/I/41Ua3RJQA0L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-tablet-stands-under-10-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lamicall Adjustable iPad Stand for Desk, Ultra-Slim Foldable",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Ua3RJQA0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FP9GJBMV?tag=theofficejournal-20",
    "description": "The Lamicall is the sensible pick for a desk: a weighted metal base and alloy steel arm that Lamicall designs to resist tipping, for devices from 4.7 to 13 inches.\n\nIts widened hooks accept a device and case up to 0.75 inches thick, the most here, so you likely will not need to remove the case. It rotates 360 degrees and folds to 0.59 inches thick.\n\nA weighted base is heavier to carry than the UGREEN or VOVIGGOL.",
    "specs": [
      "Device size: 4.7–13\"",
      "Case thickness: up to 0.75\"",
      "Weighted metal base, alloy steel rod",
      "360° rotation; folds to 0.59\""
    ],
    "pros": [
      "Fits thick cases",
      "Stable weighted base",
      "Rotates"
    ],
    "cons": [
      "Heavier to carry"
    ],
    "bestFor": "Desk use with a tablet in a protective case.",
    "summary": "A weighted metal stand for 4.7- to 13-inch devices with cases up to 0.75 inches thick.",
    "skipIf": "You carry the stand daily; the UGREEN folds smaller."
  },
  {
    "id": "best-tablet-stands-under-10-2",
    "rank": 2,
    "badge": "Best Height Adjustment",
    "name": "Tonmom Tablet Stand for iPad Holder, Adjustable Tablet Holder for Desk",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Qc5HRR5DL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNK31PFT?tag=theofficejournal-20",
    "description": "The Tonmom is the pick if you want to raise the screen higher: two rotating shafts adjust both height and angle, which can bring a tablet closer to eye level. It fits devices from 4 to 16 inches, the widest range here.\n\nA heavy-duty metal base with rubber and silicone pads resists sliding, and it includes a tool for adjusting the shafts.\n\nThe listing does not state a maximum case thickness.",
    "specs": [
      "Device size: 4–16\"",
      "Two rotating shafts (height and angle)",
      "Heavy-duty metal base, rubber pads",
      "Adjustment tool included"
    ],
    "pros": [
      "Height and angle adjustment",
      "Widest size range"
    ],
    "cons": [
      "Case thickness not stated"
    ],
    "bestFor": "Raising a tablet or large phone higher on the desk.",
    "summary": "A stand with two rotating shafts for height and angle, for 4- to 16-inch devices.",
    "skipIf": "You want the smallest folded size; the UGREEN is more compact."
  },
  {
    "id": "best-tablet-stands-under-10-3",
    "rank": 3,
    "badge": "Most Portable",
    "name": "UGREEN Tablet Stand Holder Adjustable Portable Desktop Dock",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311Xfyq9JaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CG71KQ1?tag=theofficejournal-20",
    "description": "The UGREEN is the travel choice: it folds to 4.7 x 4.2 inches, the smallest here, and adjusts from 15 to 100 degrees.\n\nIt fits 4- to 11-inch devices up to 0.55 inches thick with a case.\n\nIt is not listed for 12.9- or 13-inch tablets, and a light stand may be less steady when you tap a large screen.",
    "specs": [
      "Device size: 4–11\"",
      "Max thickness with case: 0.55\"",
      "Folded: 4.7 x 4.2\"",
      "Angle: 15–100°"
    ],
    "pros": [
      "Smallest folded size",
      "Established brand"
    ],
    "cons": [
      "Not for 12.9-inch tablets",
      "Thinner case limit"
    ],
    "bestFor": "Carrying in a bag for phones and tablets up to 11 inches.",
    "summary": "A pocket-size UGREEN stand, 4.7 x 4.2 inches folded, for devices up to 11 inches.",
    "skipIf": "You use a 12.9- or 13-inch tablet; the Lamicall or VOVIGGOL fit it."
  },
  {
    "id": "best-tablet-stands-under-10-4",
    "rank": 4,
    "badge": "Lowest-Cost Option",
    "name": "VOVIGGOL Adjustable Tablet Stand Holder, Non-Slip Foldable",
    "price": "$7.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RYPfekUqS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08RNBRCSV?tag=theofficejournal-20",
    "description": "The VOVIGGOL is the cheapest stand here: a 3.1-ounce metal frame with rubber-covered hooks, adjusting from 0 to 180 degrees, for 5.5- to 12.9-inch devices.\n\nIts very light weight makes it easy to carry.\n\nIt lacks a weighted base, so it may be less stable than the Lamicall with a large tablet, and the listing does not state case thickness.",
    "specs": [
      "Device size: 5.5–12.9\"",
      "Angle: 0–180°",
      "Weight: 3.1 oz",
      "Metal, rubber-covered hooks"
    ],
    "pros": [
      "Lowest price",
      "Very light",
      "Fits 12.9-inch tablets"
    ],
    "cons": [
      "No weighted base",
      "Case thickness not stated"
    ],
    "bestFor": "Budget buyers who want a light stand for large tablets.",
    "summary": "A 3.1-ounce metal stand for 5.5- to 12.9-inch devices with 0–180° adjustment.",
    "skipIf": "You tap the screen a lot; the weighted Lamicall is steadier."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit",
    "description": "We compared device size ranges and case thickness limits."
  },
  {
    "title": "Stability and adjustment",
    "description": "We noted base type and adjustment ranges."
  },
  {
    "title": "Portability and price",
    "description": "We compared folded size, weight and price position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Device size",
    "explanation": "Ranges here run from 4 to 16 inches. The UGREEN tops out at 11 inches."
  },
  {
    "criterion": "Case thickness",
    "explanation": "The Lamicall accepts up to 0.75 inches; the UGREEN 0.55 inches. Others do not state a limit."
  },
  {
    "criterion": "Stability",
    "explanation": "Weighted bases (Lamicall, Tonmom) resist tipping when you touch the screen."
  },
  {
    "criterion": "Adjustment and portability",
    "explanation": "The Tonmom adjusts height; the UGREEN and VOVIGGOL are lightest to carry."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Desk, tablet in a case",
          "Lamicall",
          "0.75\" case limit, weighted"
        ],
        [
          "Higher viewing position",
          "Tonmom",
          "Height adjustment"
        ],
        [
          "Travel",
          "UGREEN",
          "Smallest folded"
        ],
        [
          "Lowest cost",
          "VOVIGGOL",
          "About $8"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Stands"
      ],
      "rows": [
        [
          "About $8",
          "VOVIGGOL, UGREEN"
        ],
        [
          "About $9–$10",
          "Tonmom, Lamicall"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Will my tablet fit with its case on?",
    "a": "Check the listed thickness limit. The Lamicall accepts up to 0.75 inches; the UGREEN up to 0.55 inches."
  },
  {
    "q": "Will a cheap stand hold a 12.9-inch tablet?",
    "a": "The Lamicall, Tonmom and VOVIGGOL list sizes up to 12.9 inches or more. A weighted base is steadier with large tablets."
  },
  {
    "q": "Can a tablet stand help my posture?",
    "a": "Raising the screen can make it easier to look at without bending your neck as far. The Tonmom offers the most height adjustment."
  }
];

export const bottomLine = [
  "For a desk, the Lamicall is the pick, with a weighted base and room for thick cases. The Tonmom is the better fit if you want to raise the screen higher.",
  "For travel, the UGREEN folds smallest, and the VOVIGGOL is the lightest and cheapest option for large tablets."
];

export const relatedGuides = [
  {
    "href": "/guide/best-tablet-stands-under-15",
    "title": "Best Tablet Stands Under $15"
  },
  {
    "href": "/guide/best-tablet-stands-under-20",
    "title": "Best Tablet Stands Under $20"
  },
  {
    "href": "/guide/best-office-chairs-under-100",
    "title": "Best Office Chairs Under $100"
  },
  {
    "href": "/guide/best-desk-hutches-under-50",
    "title": "Best Desk Hutches Under $50"
  },
  {
    "href": "https://www.worthrated.com/guide/best-tablets-under-50",
    "title": "Need a tablet too? Best Tablets Under $50 (WorthRated)"
  }
];
