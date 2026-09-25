// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-adjustable-cpu-stands";

export const guideTitle = "The Best Adjustable CPU Stands for Getting a PC Off the Floor";

export const breadcrumbLabel = "Best Adjustable CPU Stands";

export const metaTitle = "Best Adjustable CPU Stands: Width, Height and Wheels (2026)";

export const metaDescription = "Adjustable CPU stands differ in what adjusts: width, length or height. We compared eight on adjustment range, wheels, rails and build to fit your tower and desk.";

export const mainKeyword = "adjustable cpu stand";

export const introParagraphs = [
  "A CPU stand lifts a desktop tower off the floor, which can help keep dust and carpet away from the intake vents and makes the PC easier to roll out for cleaning or cable changes. \"Adjustable\" usually means the width expands to grip the case; a few also adjust length or height.",
  "Measure your tower's width and depth before comparing. Width ranges here run from about 6.3 to 11.8 inches, and at least one stand adjusts height to sit a tower closer to a standing desk.",
  "Most stands here have four swivel casters, and several include side rails. Our comparison is based on published dimensions and features, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41A13obhQPL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-adjustable-cpu-stands-1",
    "rank": 1,
    "badge": "Best Value Width-Adjustable Stand",
    "name": "Hovadova Computer Tower Stand",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A13obhQPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6G47BW7?tag=theofficejournal-20",
    "description": "The Hovadova is the simple, low-cost choice: a metal stand whose width adjusts from 7.87 to 10.23 inches, 16.9 inches long, with protective rails on both sides, a ventilated base and wheels.\n\nIts 16.9-inch length is shorter than some stands here, so check it against a deeper full-tower case.",
    "specs": [
      "Width: 7.87–10.23\" adjustable",
      "Length: 16.9\"",
      "Side rails: yes",
      "Base: ventilated metal",
      "Wheels: yes"
    ],
    "pros": [
      "Low price",
      "Side rails",
      "Ventilated base"
    ],
    "cons": [
      "Shorter length",
      "Width only adjusts",
      "Capacity not stated in the summary"
    ],
    "bestFor": "Standard mid-tower cases on a budget.",
    "summary": "A metal stand adjusting from 7.87 to 10.23 inches wide, 16.9 inches long, with side rails and wheels.",
    "skipIf": "Your case is long or wide; the AGPTEK adjusts length and width further."
  },
  {
    "id": "best-adjustable-cpu-stands-2",
    "rank": 2,
    "badge": "Best Height-Adjustable Stand",
    "name": "PUTORSEN Computer Tower Stand Under Desk for Most Mid-Tower",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415+8Y1WozL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FNWMM9XN?tag=theofficejournal-20",
    "description": "The PUTORSEN adjusts height, from 5.2 to 11.9 inches, which lets you raise a mid-tower closer to a sit-stand desk or lift it well off the carpet. It is steel and needs no drilling.\n\nIt costs more than the width-only stands, and PUTORSEN lists it for most mid-towers; check full-tower fit.",
    "specs": [
      "Height: 5.2–11.9\" adjustable",
      "Construction: steel",
      "Mounting: freestanding, no drilling",
      "Fit: most mid-towers (per listing)"
    ],
    "pros": [
      "Height adjustment",
      "Steel build",
      "No drilling"
    ],
    "cons": [
      "Costs more than width-only stands",
      "Mid-tower focus",
      "Width range not stated here"
    ],
    "bestFor": "Raising a tower higher off the floor or nearer a sit-stand desk.",
    "summary": "A steel rolling stand whose height adjusts from 5.2 to 11.9 inches, for mid-towers.",
    "skipIf": "You only need the tower off the carpet; a width-adjustable stand costs less."
  },
  {
    "id": "best-adjustable-cpu-stands-3",
    "rank": 3,
    "badge": "Best for Larger Cases",
    "name": "Computer Tower Stand",
    "price": "$28.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vEvm6xUXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2N9FHMY?tag=theofficejournal-20",
    "description": "This stand suits bigger cases: its 19.29-inch length and 8.07- to 10.63-inch width are designed for standard and gaming PC cases, with a ventilated base.\n\nIt has four 360-degree casters, two of which lock, so it can be fixed in place. The brand isn't named in the listing.",
    "specs": [
      "Width: 8.07–10.63\" adjustable",
      "Length: 19.29\"",
      "Casters: 4, 2 locking",
      "Base: ventilated"
    ],
    "pros": [
      "Long platform",
      "Locking casters",
      "Ventilated"
    ],
    "cons": [
      "Brand not named",
      "Width only adjusts",
      "Capacity not stated in the summary"
    ],
    "bestFor": "Gaming or full-size cases that need a longer base.",
    "summary": "A stand 19.29 inches long, adjusting 8.07 to 10.63 inches wide, with two locking casters.",
    "skipIf": "You want length adjustment too; the AGPTEK adjustable stand offers it."
  },
  {
    "id": "best-adjustable-cpu-stands-4",
    "rank": 4,
    "badge": "Basic Rolling Stand with Rails",
    "name": "Adjustable Computer Tower Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sb0MsVmIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C89RMK9B?tag=theofficejournal-20",
    "description": "This stand covers the basics: side rails to keep the case from slipping off and four 360-degree wheels so you can roll the tower out to clean.\n\nThe listing summary doesn't give its width range or dimensions, so check them against your case before buying.",
    "specs": [
      "Side rails: yes",
      "Wheels: 4, 360°",
      "Adjustment range: check listing"
    ],
    "pros": [
      "Side rails",
      "Rolls for cleaning",
      "Low price"
    ],
    "cons": [
      "Dimensions not stated here",
      "Brand not named",
      "Locking wheels not mentioned"
    ],
    "bestFor": "A basic rolling platform for a standard case.",
    "summary": "An adjustable rolling stand with side rails and four 360-degree wheels.",
    "skipIf": "You want stated dimensions; the Hovadova lists its range."
  },
  {
    "id": "best-adjustable-cpu-stands-5",
    "rank": 5,
    "badge": "Widest Adjustment Range",
    "name": "AGPTEK Adjustable CPU Stand",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sf7YBwzFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D53MPF7X?tag=theofficejournal-20",
    "description": "The AGPTEK adjustable stand has the widest ranges here: 6.3 to 11.8 inches wide and 15.7 to 20 inches long, so it can fit a slim case or a large tower.\n\nIt rolls on four 360-degree casters. Its price sits in the middle of this guide at the time of writing.",
    "specs": [
      "Width: 6.3–11.8\" adjustable",
      "Length: 15.7–20\" adjustable",
      "Casters: 4, 360°"
    ],
    "pros": [
      "Widest width and length range",
      "Fits slim to large cases",
      "Rolling"
    ],
    "cons": [
      "Locking casters not mentioned",
      "Capacity not stated here",
      "Mid-range price"
    ],
    "bestFor": "Unusual case sizes, or a stand that may move to a new PC later.",
    "summary": "An AGPTEK stand adjusting 6.3 to 11.8 inches wide and 15.7 to 20 inches long.",
    "skipIf": "Your case is a standard mid-tower; the Hovadova costs less."
  },
  {
    "id": "best-adjustable-cpu-stands-6",
    "rank": 6,
    "badge": "Best Wood-Look Stand",
    "name": "fulkun Adjustable Mobile CPU Stand, Ventilated PC stand for floor",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dVJ17mlHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHZTNS8Y?tag=theofficejournal-20",
    "description": "The fulkun is the stand to choose if it will be visible: wood pieces with PVC in a walnut finish, with a ventilated platform and four universal wheels that lock.\n\nfulkun describes it as having greater load-bearing capacity, but the listing summary doesn't give a figure or dimensions.",
    "specs": [
      "Material: wood + PVC, walnut finish",
      "Wheels: 4, locking",
      "Platform: ventilated",
      "Capacity and dimensions: check listing"
    ],
    "pros": [
      "Furniture-like look",
      "Locking wheels",
      "Ventilated"
    ],
    "cons": [
      "Capacity not quantified",
      "Dimensions not stated here",
      "Wood less tolerant of damp floors"
    ],
    "bestFor": "A tower in view in a living space.",
    "summary": "A walnut-finish wood and PVC stand with lockable wheels and a ventilated platform.",
    "skipIf": "Looks don't matter; the metal stands cost less."
  },
  {
    "id": "best-adjustable-cpu-stands-7",
    "rank": 7,
    "badge": "Best Two-Tier Cart",
    "name": "EUREKA ERGONOMIC PC Stand Height Adjustable Black",
    "price": "$109.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CKxoxTcgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SCYSFP9?tag=theofficejournal-20",
    "description": "The EUREKA ERGONOMIC stand is a two-tier cart rather than a simple platform: height-adjustable, with a second shelf for a UPS, router or storage, and four 360-degree wheels described as quiet and suited to carpet.\n\nIt was the most expensive stand here at the time of writing, several times the price of the basic stands.",
    "specs": [
      "Design: 2-tier cart",
      "Height: adjustable",
      "Wheels: 4, 360°, quiet (per manufacturer)",
      "Suited to carpet (per listing)"
    ],
    "pros": [
      "Second shelf",
      "Height adjustable",
      "Wider, stable base (per listing)"
    ],
    "cons": [
      "Most expensive here",
      "Larger footprint",
      "Dimensions not stated here"
    ],
    "bestFor": "A tower plus UPS or router on one rolling cart.",
    "summary": "EUREKA ERGONOMIC's height-adjustable two-tier PC cart with quiet wheels for carpet.",
    "skipIf": "You only need to lift the tower; any basic stand does that for far less."
  },
  {
    "id": "best-adjustable-cpu-stands-8",
    "rank": 8,
    "badge": "Lowest Price",
    "name": "AGPTEK CPU Stand",
    "price": "$19.39",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fhZCJk82L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07W965K7D?tag=theofficejournal-20",
    "description": "The AGPTEK CPU Stand is the least expensive option here: a steel rolling stand with four wheels AGPTEK describes as upgraded.\n\nThe listing summary doesn't state an adjustment range or dimensions, so confirm it fits your case.",
    "specs": [
      "Construction: steel",
      "Wheels: 4",
      "Adjustment range: check listing"
    ],
    "pros": [
      "Lowest price here",
      "Steel",
      "Rolling"
    ],
    "cons": [
      "Adjustment not detailed",
      "Dimensions not stated here",
      "No rails mentioned"
    ],
    "bestFor": "The simplest, cheapest way to get a tower off the floor.",
    "summary": "AGPTEK's basic steel rolling CPU stand with four upgraded wheels.",
    "skipIf": "You need a wide range; the AGPTEK adjustable model fits more cases."
  }
];

export const howWeEvaluated = [
  {
    "title": "Adjustment",
    "description": "We compared width, length and height ranges as listed."
  },
  {
    "title": "Mobility",
    "description": "We noted wheels and locking casters."
  },
  {
    "title": "Build",
    "description": "We noted materials, rails and ventilated bases."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Measure the case",
    "explanation": "Compare your tower's width and depth with the stand's range. Widths here run from about 6.3 to 11.8 inches; lengths from 15.7 to 20 inches."
  },
  {
    "criterion": "Decide what should adjust",
    "explanation": "Most stands adjust width; the AGPTEK adjustable adds length; the PUTORSEN and EUREKA adjust height."
  },
  {
    "criterion": "Check wheels and locks",
    "explanation": "Locking casters keep the tower from drifting; several listings here don't mention locks."
  },
  {
    "criterion": "Look for rails",
    "explanation": "Side rails help stop a case from sliding off when rolled."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider"
      ],
      "rows": [
        [
          "Standard mid-tower, low cost",
          "Hovadova"
        ],
        [
          "Height adjustment",
          "PUTORSEN"
        ],
        [
          "Long gaming case",
          "19.29\" Computer Tower Stand"
        ],
        [
          "Widest range",
          "AGPTEK Adjustable"
        ],
        [
          "Wood look",
          "fulkun"
        ],
        [
          "Two tiers",
          "EUREKA ERGONOMIC"
        ],
        [
          "Lowest price",
          "AGPTEK CPU Stand"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why use a CPU stand?",
    "a": "It lifts the tower off the floor, which can reduce dust and carpet fibers near the intake, and lets you roll it out for cleaning."
  },
  {
    "q": "Will it fit my case?",
    "a": "Compare your case's width and depth with the stand's listed range."
  },
  {
    "q": "Do I need locking wheels?",
    "a": "They help stop the stand drifting, especially on hard floors. The 19.29-inch stand and fulkun list them."
  },
  {
    "q": "Height or width adjustment?",
    "a": "Width fits the case; height raises it further, which helps with sit-stand desks."
  },
  {
    "q": "What about weight?",
    "a": "Most listings here don't state a capacity; check before loading a heavy full tower."
  }
];

export const bottomLine = [
  "For a standard mid-tower, the Hovadova is the low-cost choice with side rails, and the AGPTEK adjustable stand fits the widest range of cases. For long gaming cases, the 19.29-inch stand adds locking casters.",
  "If you want height, the PUTORSEN raises the tower up to 11.9 inches, and the EUREKA two-tier cart adds a shelf for more money. The fulkun suits a visible spot."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-bottom-stands",
    "title": "Best CPU Bottom Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-100",
    "title": "Best CPU Stands Under $100 in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-for-gaming-pcs",
    "title": "Best CPU Stands for Gaming PCs in 2026"
  }
];
