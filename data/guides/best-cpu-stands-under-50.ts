// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-stands-under-50";

export const guideTitle = "The Best CPU Stands Under $50 for Floor, Shelf or Under-Desk Mounting";

export const breadcrumbLabel = "Best CPU Stands Under $50";

export const metaTitle = "Best CPU Stands Under $50 (2026)";

export const metaDescription = "Under $50 you can roll a tower on casters, add a storage tier or hang it under the desk. We compared six stands on format, fit, wheels and stated capacity.";

export const mainKeyword = "cpu stands under $50";

export const introParagraphs = [
  "Under $50, a CPU stand comes in three forms: a single rolling platform, a two-tier cart with a shelf for a UPS, router or storage, and an under-desk mount that gets the tower off the floor entirely.",
  "The rolling stands suit anyone who wants to slide the PC out for cleaning; the two-tier carts add storage; the under-desk holder frees floor space but depends on your desk's structure. Measure your case, and check desk thickness for the mount.",
  "Only the under-desk holder here states a load capacity (77 lb), so check capacity on the others before loading a heavy tower. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-stands-under-50-1",
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
    "skipIf": "You want listed features; the PC Stand for Floor states fit, locking wheels and ventilation."
  },
  {
    "id": "best-cpu-stands-under-50-2",
    "rank": 2,
    "badge": "Best Value Rolling Stand",
    "name": "PC Stand for Floor",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417w+8zgeSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3JJPBP4?tag=theofficejournal-20",
    "description": "The PC Stand for Floor is the value rolling stand: it adjusts to fit ATX, micro-ATX and mini-ITX cases, rolls on four universal casters that lock, and has a ventilated base.\n\nIt was under $20 at the time of writing. The listing summary doesn't give dimensions or capacity.",
    "specs": [
      "Fit: ATX, micro-ATX, mini-ITX",
      "Casters: 4, lockable",
      "Base: ventilated",
      "Adjustable width"
    ],
    "pros": [
      "Low price",
      "Locking casters",
      "Broad case support"
    ],
    "cons": [
      "Dimensions not stated here",
      "Capacity not stated",
      "Brand not named"
    ],
    "bestFor": "Rolling a standard tower out for cleaning.",
    "summary": "An adjustable rolling stand for ATX, micro-ATX and mini-ITX cases with lockable casters.",
    "skipIf": "You want storage too; the HOOBRO adds a second tier."
  },
  {
    "id": "best-cpu-stands-under-50-3",
    "rank": 3,
    "badge": "Best Two-Tier Cart",
    "name": "HOOBRO PC Stand, 2-Tier PC Tower Stand Fits Most Computer Towers, CPU Holder",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415ztv69sUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9YH8SDG?tag=theofficejournal-20",
    "description": "The HOOBRO adds a second tier for storage, with three height adjustment options so you can fit a UPS, printer paper or a router below the tower.\n\nIt rolls on four 360-degree casters and fits most towers, according to HOOBRO. It costs less than the other two-tier cart here at the time of writing.",
    "specs": [
      "Design: 2-tier",
      "Height options: 3",
      "Casters: 4, 360°",
      "Fit: most towers (per listing)"
    ],
    "pros": [
      "Extra storage tier",
      "Adjustable height",
      "Lower price than the Bfttlity"
    ],
    "cons": [
      "Larger footprint",
      "Capacity not stated",
      "Dimensions not stated here"
    ],
    "bestFor": "A tower plus accessories on one rolling cart.",
    "summary": "HOOBRO's two-tier PC stand with three height options and four swivel casters.",
    "skipIf": "You only need the tower lifted; the PC Stand for Floor costs less."
  },
  {
    "id": "best-cpu-stands-under-50-4",
    "rank": 4,
    "badge": "Best Steel Rolling Stand",
    "name": "PEGZONE Adjustable PC Stand for Floor Ventilated CPU Cart, Black",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41cs12dUAgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDQTPNCZ?tag=theofficejournal-20",
    "description": "The PEGZONE is a sturdier-looking single platform: a steel frame, adjustable width, a ventilated base and four 360-degree casters with locks, which PEGZONE says roll on carpet, hardwood or tile.\n\nIt costs more than the basic rolling stands. Capacity isn't given in the listing summary.",
    "specs": [
      "Frame: steel",
      "Casters: 4, 360°, locking",
      "Base: ventilated",
      "Adjustable"
    ],
    "pros": [
      "Steel frame",
      "Locking casters",
      "Works across floor types (per listing)"
    ],
    "cons": [
      "Costs more than basic stands",
      "Capacity not stated",
      "Single tier"
    ],
    "bestFor": "A heavier tower on carpet that you roll out occasionally.",
    "summary": "PEGZONE's adjustable steel stand with locking 360-degree casters for carpet or hard floors.",
    "skipIf": "You want storage; the HOOBRO or Bfttlity adds a tier."
  },
  {
    "id": "best-cpu-stands-under-50-5",
    "rank": 5,
    "badge": "Iron Two-Tier Cart",
    "name": "Bfttlity Computer Tower Stand 2-Tier Metal PC Stand for Floor Carpet",
    "price": "$37.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41m5-Ow5nQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRSHH8WM?tag=theofficejournal-20",
    "description": "The Bfttlity is an iron two-tier stand, with the second tier for desktop storage, which Bfttlity describes as resistant to deformation and able to move on carpet.\n\nIt costs more than the HOOBRO two-tier at the time of writing, and the listing summary doesn't mention height adjustment or give dimensions.",
    "specs": [
      "Design: 2-tier",
      "Material: iron",
      "Use: floor or carpet",
      "Mobile"
    ],
    "pros": [
      "Iron construction",
      "Storage tier",
      "Suited to carpet (per listing)"
    ],
    "cons": [
      "Costs more than the HOOBRO",
      "Height adjustment not stated",
      "Dimensions not stated here"
    ],
    "bestFor": "A two-tier cart where a metal build matters.",
    "summary": "A two-tier iron PC stand designed for floor or carpet, with storage below.",
    "skipIf": "You want adjustable tier height; the HOOBRO has three options."
  },
  {
    "id": "best-cpu-stands-under-50-6",
    "rank": 6,
    "badge": "Best Under-Desk Mount",
    "name": "Heavy Duty Under Desk PC Holder, Up to 77 lbs Load Capacity",
    "price": "$49.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31DzC4Wn1JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DGQR4DNJ?tag=theofficejournal-20",
    "description": "This under-desk holder lifts the tower off the floor entirely, and it is the only stand here with a stated capacity: 77 lb. It adjusts in height and width to fit a range of cases and the space under your desk.\n\nIt was the most expensive option here at the time of writing, just under $50, and it depends on your desk being thick and solid enough to mount to; check the listing's requirements.",
    "specs": [
      "Type: under-desk mount",
      "Capacity: 77 lb",
      "Adjustment: height and width"
    ],
    "pros": [
      "Frees floor space",
      "Stated 77 lb capacity",
      "Adjustable"
    ],
    "cons": [
      "Most expensive here",
      "Depends on desk structure",
      "Harder to access the tower"
    ],
    "bestFor": "Clearing the floor under a solid desk.",
    "summary": "An under-desk PC holder rated for 77 lb, adjustable in height and width.",
    "skipIf": "You rent furniture or have a thin desktop; a rolling stand avoids mounting."
  }
];

export const howWeEvaluated = [
  {
    "title": "Format",
    "description": "We grouped stands as platforms, two-tier carts or mounts."
  },
  {
    "title": "Fit",
    "description": "We compared listed case compatibility and adjustment."
  },
  {
    "title": "Mobility and build",
    "description": "We noted casters, locks, materials and ventilation."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing, all under $50."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pick a format",
    "explanation": "Rolling platform, two-tier cart, or under-desk mount."
  },
  {
    "criterion": "Measure your case",
    "explanation": "Check width and depth against the stand, and case type (ATX, micro-ATX, mini-ITX)."
  },
  {
    "criterion": "Check capacity",
    "explanation": "Only the under-desk holder states one (77 lb); ask or check the full listing for others."
  },
  {
    "criterion": "Locking casters",
    "explanation": "They stop a rolling stand drifting; the PC Stand for Floor and PEGZONE list them."
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
          "Cheapest riser",
          "YOSE"
        ],
        [
          "Value rolling stand",
          "PC Stand for Floor"
        ],
        [
          "Steel rolling stand",
          "PEGZONE"
        ],
        [
          "Storage tier",
          "HOOBRO (or Bfttlity)"
        ],
        [
          "Clear the floor",
          "Heavy Duty Under Desk PC Holder"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Rolling stand or under-desk mount?",
    "a": "A rolling stand is simplest and moves easily; a mount frees the floor but depends on your desk."
  },
  {
    "q": "Will it fit my case?",
    "a": "Check the listed case types and dimensions against your tower."
  },
  {
    "q": "How much weight can they hold?",
    "a": "Only the under-desk holder lists a capacity, 77 lb. Check the others before loading a heavy tower."
  },
  {
    "q": "Are two-tier carts worth it?",
    "a": "If you have a UPS, router or storage to place near the PC, yes."
  },
  {
    "q": "Do I need locking wheels?",
    "a": "They help, particularly on hard floors."
  }
];

export const bottomLine = [
  "For a simple rolling stand, the PC Stand for Floor offers locking casters for under $20, and the PEGZONE adds a steel frame. The HOOBRO is the two-tier cart to consider if you want storage.",
  "To clear the floor, the under-desk holder is the only stand here with a stated capacity. The YOSE is cheapest but lists no specifications."
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
