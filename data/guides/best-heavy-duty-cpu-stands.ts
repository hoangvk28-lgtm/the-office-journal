// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-heavy-duty-cpu-stands";

export const guideTitle = "The Best Heavy-Duty CPU Stands for Getting Your PC Off the Floor";

export const breadcrumbLabel = "Best Heavy-Duty CPU Stands";

export const metaTitle = "Best Heavy-Duty CPU Stands and Tower Carts (2026)";

export const metaDescription = "We compared rolling CPU stands on adjustable width and length, stated weight capacity, casters and side rails, and flag which listings give a load rating.";

export const mainKeyword = "heavy-duty cpu stands";

export const introParagraphs = [
  "A CPU stand lifts a desktop tower off carpet, where dust and blocked vents are a problem, and puts it on casters so you can reach the back panel or clean underneath. For a heavy gaming or workstation tower, the stand's width range, stated load rating and side rails matter most.",
  "Only one stand here states a weight capacity, the Hovadova adjustable model at 176 lb. The others describe steel construction without a figure, so weigh your tower and treat the unrated stands with more caution. One product, the Korfile, is a desk rather than a stand and is marked as such.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $20 to $85 at the time of writing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/415+8Y1WozL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-heavy-duty-cpu-stands-1",
    "rank": 1,
    "badge": "Best Height-Adjustable Stand",
    "name": "PUTORSEN Computer Tower Stand Under Desk for Most Mid-Tower",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415+8Y1WozL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNWMM9XN?tag=theofficejournal-20",
    "description": "The PUTORSEN stand is the pick if height matters: it adjusts from 5.2 to 11.9 inches, which PUTORSEN suggests can match a sit-stand desk setup, and it needs no drilling.\n\nIt is steel and designed for most mid-tower cases.\n\nThe listing does not state a weight capacity or width range, so check your case size and weight against PUTORSEN's full specifications, especially for a large or heavy tower.",
    "specs": [
      "Height: 5.2–11.9\" adjustable",
      "Construction: steel",
      "Fits: most mid-tower cases",
      "No drilling",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Adjustable height",
      "Steel construction",
      "No installation"
    ],
    "cons": [
      "Weight capacity not stated",
      "Mid-tower focus"
    ],
    "bestFor": "Mid-tower owners who want the PC raised to a set height.",
    "summary": "A steel tower stand adjustable from 5.2 to 11.9 inches high, for mid-tower cases.",
    "skipIf": "You need a stated load rating for a heavy tower; the Hovadova adjustable stand lists 176 lb."
  },
  {
    "id": "best-heavy-duty-cpu-stands-2",
    "rank": 2,
    "badge": "Best Rated Capacity",
    "name": "Hovadova Adjustable Computer Tower Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317CEfgWSsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DS5WYM5G?tag=theofficejournal-20",
    "description": "The Hovadova adjustable stand is the only stand here with a stated load rating: 176 lb, well above what typical towers weigh. It is steel, adjusts from 7.87 to 10.24 inches wide and is 16.93 inches long.\n\nAn open, ventilated design lets air reach the case's underside, and it costs about $25 at the time of writing.\n\nCheck that your case fits the width range and length; very large full towers may exceed them.",
    "specs": [
      "Width: 7.87–10.24\" adjustable",
      "Length: 16.93\"",
      "Weight capacity: 176 lb",
      "Construction: steel",
      "Ventilated"
    ],
    "pros": [
      "Stated 176 lb rating",
      "Low price",
      "Ventilated"
    ],
    "cons": [
      "Fixed length",
      "Casters not mentioned in listing"
    ],
    "bestFor": "Heavy towers that fit its width range.",
    "summary": "A steel stand adjustable from 7.87 to 10.24 inches wide, rated for 176 lb.",
    "skipIf": "Your case is longer than about 17 inches; the AGPTEK adjusts to 20 inches."
  },
  {
    "id": "best-heavy-duty-cpu-stands-3",
    "rank": 3,
    "badge": "Best for Large Cases",
    "name": "AGPTEK Adjustable CPU Stand",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sf7YBwzFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D53MPF7X?tag=theofficejournal-20",
    "description": "The AGPTEK is the most adjustable stand here, adjusting from 6.3 to 11.8 inches wide and 15.7 to 20 inches long, which suits larger cases, on four 360-degree casters.\n\nIt costs about $33 at the time of writing.\n\nThe listing does not state a weight capacity, so check with AGPTEK for a heavy full tower.",
    "specs": [
      "Width: 6.3–11.8\" adjustable",
      "Length: 15.7–20\" adjustable",
      "Casters: 4 x 360°",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Widest size range",
      "Rolling casters"
    ],
    "cons": [
      "Weight capacity not stated"
    ],
    "bestFor": "Larger towers that need a longer platform.",
    "summary": "A stand adjustable from 6.3 to 11.8 inches wide and 15.7 to 20 inches long, on four swivel casters.",
    "skipIf": "You want a stated load rating; the Hovadova lists 176 lb."
  },
  {
    "id": "best-heavy-duty-cpu-stands-4",
    "rank": 4,
    "badge": "Rolling Stand With Side Rails",
    "name": "Adjustable Computer Tower Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sb0MsVmIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C89RMK9B?tag=theofficejournal-20",
    "description": "This unbranded stand has protective rails on both sides to stop the case sliding off and four 360-degree wheels for moving the PC to clean underneath.\n\nIt costs about $25 at the time of writing.\n\nThe listing gives no dimensions or weight rating, which makes it harder to match to a heavy tower.",
    "specs": [
      "Side rails",
      "Casters: 4 x 360°",
      "Ventilated design",
      "Dimensions and capacity: not stated"
    ],
    "pros": [
      "Side rails",
      "Rolling"
    ],
    "cons": [
      "No dimensions or capacity listed",
      "Unbranded"
    ],
    "bestFor": "Standard towers that need to roll.",
    "summary": "A rolling stand with side rails and four swivel wheels.",
    "skipIf": "You want specifications to check against; choose a stand that lists them."
  },
  {
    "id": "best-heavy-duty-cpu-stands-5",
    "rank": 5,
    "badge": "Best Budget Stand",
    "name": "Hovadova Computer Tower Stand",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A13obhQPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6G47BW7?tag=theofficejournal-20",
    "description": "The cheaper Hovadova stand adjusts from 7.87 to 10.23 inches wide, is 16.9 inches long, and adds side rails to keep the case in place, for about $20 at the time of writing.\n\nIt is ventilated and designed to move easily.\n\nUnlike the other Hovadova, this listing does not state a weight capacity.",
    "specs": [
      "Width: 7.87–10.23\" adjustable",
      "Length: 16.9\"",
      "Side rails",
      "Ventilated",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Lowest price",
      "Side rails"
    ],
    "cons": [
      "Weight capacity not stated"
    ],
    "bestFor": "Budget buyers with a standard tower.",
    "summary": "A Hovadova steel stand with side rails, 7.87–10.23 inches wide, for about $20.",
    "skipIf": "You need a stated load rating; the $25 Hovadova lists 176 lb."
  },
  {
    "id": "best-heavy-duty-cpu-stands-6",
    "rank": 6,
    "badge": "Desk, Not a Stand",
    "name": "Korfile 54\" Computer Desk with Power Outlets",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416BZh71CtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HH9KNCD6?tag=theofficejournal-20",
    "description": "The Korfile is a 54-inch computer desk rather than a CPU stand. It is included here because it offers a place for a tower along with storage, a built-in power hub and customizable RGB lighting.\n\nIt costs about $85 at the time of writing. If you only need to lift a tower off the floor, any of the stands above is simpler.\n\nThe listing does not detail its tower shelf size or weight rating.",
    "specs": [
      "Type: 54\" computer desk",
      "Built-in power outlets",
      "Storage",
      "RGB lighting"
    ],
    "pros": [
      "Desk, storage and power in one"
    ],
    "cons": [
      "Not a CPU stand",
      "Tower space and rating not detailed"
    ],
    "bestFor": "Buyers replacing their desk anyway.",
    "summary": "A 54-inch computer desk with power outlets, storage and RGB lighting.",
    "skipIf": "You only need a CPU stand."
  }
];

export const howWeEvaluated = [
  {
    "title": "Load rating",
    "description": "We recorded stated weight capacities and flagged listings without one."
  },
  {
    "title": "Fit",
    "description": "We compared width, length and height ranges."
  },
  {
    "title": "Mobility and safety",
    "description": "We noted casters and side rails."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Stated weight capacity",
    "explanation": "Weigh your tower. Only the $25 Hovadova states a rating (176 lb) here."
  },
  {
    "criterion": "Width and length range",
    "explanation": "Measure your case. The AGPTEK has the widest range (up to 11.8 x 20 inches)."
  },
  {
    "criterion": "Casters and rails",
    "explanation": "Casters make cleaning and cable access easier; side rails help keep the case in place."
  },
  {
    "criterion": "Airflow",
    "explanation": "An open frame lets air reach intake vents under the case, especially on carpet."
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
          "Heavy tower, stated rating",
          "Hovadova adjustable ($25)",
          "176 lb"
        ],
        [
          "Large case",
          "AGPTEK",
          "Up to 11.8 x 20 inches"
        ],
        [
          "Height adjustment",
          "PUTORSEN",
          "5.2–11.9 inches"
        ],
        [
          "Lowest cost",
          "Hovadova ($20)",
          "Side rails"
        ],
        [
          "New desk with power",
          "Korfile",
          "Desk, not a stand"
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
        "Products"
      ],
      "rows": [
        [
          "About $20–$33",
          "Hovadova (both), unbranded stand, AGPTEK"
        ],
        [
          "About $40",
          "PUTORSEN"
        ],
        [
          "About $85",
          "Korfile desk"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why use a CPU stand?",
    "a": "It lifts the tower off carpet and dust, keeps vents clear, and makes it easier to move the PC for cleaning or cabling."
  },
  {
    "q": "How much weight capacity do I need?",
    "a": "More than your tower weighs, with margin. Weigh the PC; most listings here do not state a rating."
  },
  {
    "q": "Will my case fit?",
    "a": "Compare your case's width and length with the stand's adjustable range."
  },
  {
    "q": "Should I lock the casters?",
    "a": "If the stand has locking casters, lock them so the PC does not roll when you bump it."
  }
];

export const bottomLine = [
  "For a heavy tower, the $25 Hovadova is the safest choice on paper, as the only stand with a stated 176 lb rating. The AGPTEK fits larger cases, and the PUTORSEN adds height adjustment.",
  "The $20 Hovadova and the unbranded rolling stand suit standard towers on a budget. The Korfile is a desk, worth considering only if you are replacing your desk anyway."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-with-casters",
    "title": "Best CPU Stands With Casters in 2026"
  },
  {
    "href": "/guide/best-mobile-cpu-stands",
    "title": "Best Mobile CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-for-desktop-towers",
    "title": "Best CPU Stands for Desktop Towers in 2026"
  }
];
