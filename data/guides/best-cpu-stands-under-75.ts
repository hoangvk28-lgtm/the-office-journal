// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-stands-under-75";

export const guideTitle = "The Best CPU Stands Under $75, from Rolling Bases to Desk Mounts";

export const breadcrumbLabel = "Best CPU Stands Under $75";

export const metaTitle = "Best CPU Stands Under $75 (2026)";

export const metaDescription = "Spending up to $75 on a CPU stand buys formats beyond a basic rolling base. We compared six, including a charging cart and a standing-desk mount, on fit and features.";

export const mainKeyword = "cpu stands under $75";

export const introParagraphs = [
  "Most rolling CPU stands cost under $30, so a $75 budget mainly opens up different formats: a two-tier cart with a charging station, and an under-desk holder that moves with a standing desk.",
  "Fit still matters most. Width ranges here run from as narrow as 4.87 inches (Mount-It!) to larger stands for gaming cases, and the FLEXISPOT mount only works on dual-crossbeam standing desks.",
  "Our comparison is based on published specifications and prices at the time of writing, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-stands-under-75-1",
    "rank": 1,
    "badge": "Lowest Price",
    "name": "YOSE Computer Tower Stand",
    "price": "$13.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0919X8SZ7?tag=theofficejournal-20",
    "description": "The YOSE stand was the least expensive option here at the time of writing, at under $15.\n\nIts listing summary gives no specifications, so check dimensions, adjustment range and whether it has wheels on the product page before buying.",
    "specs": [
      "Specifications: see product listing"
    ],
    "pros": [
      "Lowest price here",
      "Simple stand",
      "Low risk to try"
    ],
    "cons": [
      "No specifications in the listing summary",
      "Fit unconfirmed",
      "Capacity not stated"
    ],
    "bestFor": "A basic riser when price is the main concern.",
    "summary": "YOSE's basic computer tower stand, the lowest-priced option here.",
    "skipIf": "You want listed features; the Hovadova adjustable states locking wheels for about $4 more."
  },
  {
    "id": "best-cpu-stands-under-75-2",
    "rank": 2,
    "badge": "Best with Locking Wheels",
    "name": "Hovadova Adjustable Computer Tower Stand",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ywKqvAx6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4T4R1NN?tag=theofficejournal-20",
    "description": "The Hovadova adjustable stand adds locking wheels to the basics: four 360-degree casters, two of which lock, with tool-free setup. Hovadova says it lifts the tower away from dust, spills, carpet fibers and moisture.\n\nIt was under $17 at the time of writing. Dimensions aren't given in the listing summary.",
    "specs": [
      "Casters: 4, 360°, locking",
      "Setup: tool-free",
      "Width: adjustable"
    ],
    "pros": [
      "Locking wheels",
      "Tool-free",
      "Low price"
    ],
    "cons": [
      "Dimensions not stated here",
      "Capacity not stated",
      "Rails not mentioned"
    ],
    "bestFor": "Hard floors, where locking wheels stop drift.",
    "summary": "Hovadova's adjustable stand with four 360-degree casters, locking wheels and tool-free setup.",
    "skipIf": "You need side rails; the Hovadova Extra Large has them."
  },
  {
    "id": "best-cpu-stands-under-75-3",
    "rank": 3,
    "badge": "Best for Large Cases with Rails",
    "name": "Hovadova Extra Large Computer Tower Stand",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413u6H16yJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C89JQV8Y?tag=theofficejournal-20",
    "description": "The Hovadova Extra Large suits bigger towers, with protective rails on both sides to keep the case from slipping off and four 360-degree wheels.\n\nIt costs more than Hovadova's standard stand at the time of writing, and dimensions aren't given in the listing summary.",
    "specs": [
      "Size: extra large (check listing)",
      "Side rails: yes",
      "Wheels: 4, 360°"
    ],
    "pros": [
      "Side rails",
      "Larger platform",
      "Rolling"
    ],
    "cons": [
      "Dimensions not stated here",
      "Locking not mentioned",
      "Costs more than the standard Hovadova"
    ],
    "bestFor": "Large gaming or full towers.",
    "summary": "Hovadova's extra-large rolling stand with side rails and four 360-degree wheels.",
    "skipIf": "Your case is mid-size; the standard Hovadova is cheaper."
  },
  {
    "id": "best-cpu-stands-under-75-4",
    "rank": 4,
    "badge": "Best for Slim Cases",
    "name": "Mount-It! Computer Tower Stand",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TVmLwLO0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B072P29CMJ?tag=theofficejournal-20",
    "description": "The Mount-It! fits narrower cases than most, adjusting from 4.87 to 8.5 inches wide, with lockable wheels and a ventilated design intended to improve airflow and reduce dust.\n\nIts 8.5-inch maximum width rules out many larger gaming cases.",
    "specs": [
      "Width: 4.87–8.5\" adjustable",
      "Wheels: lockable",
      "Ventilated"
    ],
    "pros": [
      "Fits slim cases",
      "Lockable wheels",
      "Established brand"
    ],
    "cons": [
      "Too narrow for wide cases",
      "Length not stated in summary",
      "Capacity not stated"
    ],
    "bestFor": "Slim and small-form-factor towers.",
    "summary": "Mount-It!'s rolling stand adjusting 4.87 to 8.5 inches wide, with lockable wheels.",
    "skipIf": "Your case is wider than 8.5 inches; the Hovadova Extra Large suits bigger towers."
  },
  {
    "id": "best-cpu-stands-under-75-5",
    "rank": 5,
    "badge": "Best Two-Tier Cart with Charging",
    "name": "ZIIWIND PC Stand with Charging Station",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Cb5I502SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH8S496M?tag=theofficejournal-20",
    "description": "The ZIIWIND is a two-tier PC cart rather than a low stand: 16.9 x 11.4 inches, with height adjustable from 19.7 to 31.5 inches, and a built-in charging station for your devices.\n\nLifting the tower well above the carpet keeps it clear of the pile. It was the most expensive option here at the time of writing and takes more space than a low stand.",
    "specs": [
      "Size: 16.9\"W x 11.4\"D",
      "Height: 19.7–31.5\" adjustable",
      "Design: 2-tier",
      "Charging station: built in"
    ],
    "pros": [
      "Lifts tower well off the floor",
      "Charging station",
      "Second tier"
    ],
    "cons": [
      "Costs more than low stands",
      "Larger footprint",
      "Wheel details not stated in summary"
    ],
    "bestFor": "A tower cart that doubles as a charging spot.",
    "summary": "A 2-tier, 16.9 x 11.4-inch PC cart adjustable from 19.7 to 31.5 inches tall, with a charging station.",
    "skipIf": "You only want the tower off the carpet; a low stand costs far less."
  },
  {
    "id": "best-cpu-stands-under-75-6",
    "rank": 6,
    "badge": "Best Under-Desk Mount for Standing Desks",
    "name": "FLEXISPOT Computer Tower Stand",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41EMFjgitpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GL78HHPF?tag=theofficejournal-20",
    "description": "The FLEXISPOT holder mounts under a standing desk so the tower rises and lowers with it, and it adjusts from 5.63 to 9.53 inches wide and 11.81 to 20.47 inches long for small to mid-size towers, with tool-free setup.\n\nFLEXISPOT states it is for dual-crossbeam standing desks only, so confirm your desk frame before ordering. It was the most expensive option here at the time of writing.",
    "specs": [
      "Type: under-desk mount",
      "Compatibility: dual-crossbeam standing desks only",
      "Width: 5.63–9.53\"",
      "Length: 11.81–20.47\"",
      "Setup: tool-free"
    ],
    "pros": [
      "Moves with a standing desk",
      "Frees floor space",
      "Tool-free"
    ],
    "cons": [
      "Dual-crossbeam desks only",
      "Most expensive here",
      "Small to mid-size towers only"
    ],
    "bestFor": "Standing desks where the tower should move with the desktop.",
    "summary": "FLEXISPOT's tool-free under-desk tower holder for dual-crossbeam standing desks.",
    "skipIf": "Your desk has a single crossbar or no frame; a floor stand is the safer choice."
  }
];

export const howWeEvaluated = [
  {
    "title": "Format",
    "description": "We grouped by base, cart or mount."
  },
  {
    "title": "Fit",
    "description": "We compared width and length ranges."
  },
  {
    "title": "Features",
    "description": "We noted locks, rails, charging and compatibility."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Choose the format",
    "explanation": "Rolling base, two-tier cart, or under-desk mount."
  },
  {
    "criterion": "Match the case width",
    "explanation": "The Mount-It! suits slim cases; the Hovadova Extra Large suits bigger ones."
  },
  {
    "criterion": "Check desk compatibility for mounts",
    "explanation": "The FLEXISPOT requires a dual-crossbeam standing desk."
  },
  {
    "criterion": "Locking wheels",
    "explanation": "The Hovadova adjustable and Mount-It! list them."
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
          "Lowest price",
          "YOSE"
        ],
        [
          "Locking wheels, low cost",
          "Hovadova adjustable"
        ],
        [
          "Large case with rails",
          "Hovadova Extra Large"
        ],
        [
          "Slim case",
          "Mount-It!"
        ],
        [
          "Cart with charging",
          "ZIIWIND"
        ],
        [
          "Moves with standing desk",
          "FLEXISPOT mount"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Do I need to spend $75?",
    "a": "Not for a basic rolling stand; the extra budget buys carts or mounts."
  },
  {
    "q": "Will the FLEXISPOT fit my desk?",
    "a": "Only dual-crossbeam standing desks, per FLEXISPOT."
  },
  {
    "q": "Which fits slim cases?",
    "a": "The Mount-It!, from 4.87 inches wide."
  },
  {
    "q": "Do these lock?",
    "a": "The Hovadova adjustable and Mount-It! list locking wheels."
  },
  {
    "q": "What about capacity?",
    "a": "Most listings don't state one; check before loading a heavy tower."
  }
];

export const bottomLine = [
  "For a simple rolling base, the Hovadova adjustable with locking wheels is enough, the Extra Large suits big cases, and the Mount-It! suits slim ones.",
  "Spend more only for a different format: the ZIIWIND cart adds storage and charging, and the FLEXISPOT mount keeps a tower moving with a dual-crossbeam standing desk."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-under-desk-cpu-stands",
    "title": "Best Under-Desk CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-20",
    "title": "Best CPU Stands Under $20 in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-25",
    "title": "Best CPU Stands Under $25 in 2026"
  }
];
