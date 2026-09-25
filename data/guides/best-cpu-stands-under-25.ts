// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-stands-under-25";

export const guideTitle = "The Best CPU Stands Under $25 for Getting a Tower Off the Floor";

export const breadcrumbLabel = "Best CPU Stands Under $25";

export const metaTitle = "Best CPU Stands Under $25 (2026)";

export const metaDescription = "Under $25, CPU stands are simple rolling platforms. We compared six on adjustment, locking wheels and stated capacity, and flag which listings give specifications.";

export const mainKeyword = "cpu stands under $25";

export const introParagraphs = [
  "Under $25, a CPU stand is a simple rolling platform that lifts the tower off the floor and lets you pull it out to clean or reach cables. The designs are similar, so the useful differences are small: whether width and length adjust, whether the casters lock, and whether a weight capacity is stated.",
  "Several listings here give few specifications; only the suptek states a capacity (110 lb). Measure your case before buying.",
  "Our comparison is based on published specifications and prices at the time of writing, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-stands-under-25-1",
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
    "skipIf": "You want listed features; the Liitrton or PC Stand for Floor states them for a dollar or two more."
  },
  {
    "id": "best-cpu-stands-under-25-2",
    "rank": 2,
    "badge": "Best Adjustable Length and Width for Less",
    "name": "Liitrton Mobile CPU Stand Adjustable Computer Tower Stand Fits Most PC",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hxCzq3j0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083DMYKC9?tag=theofficejournal-20",
    "description": "The Liitrton adjusts both length (from 16.93 inches) and width to fit most towers, with four 360-degree casters, at under $15 at the time of writing.\n\nThat makes it the low-cost alternative to the AGPTEK for longer cases. Locking isn't mentioned in the listing summary.",
    "specs": [
      "Length: adjustable from 16.93\"",
      "Width: adjustable",
      "Casters: 4, 360°"
    ],
    "pros": [
      "Length and width adjust",
      "Low price",
      "Rolling"
    ],
    "cons": [
      "Locking not mentioned",
      "Full range not in summary",
      "Capacity not stated"
    ],
    "bestFor": "Longer cases on a small budget.",
    "summary": "Liitrton's stand with adjustable length and width and four 360-degree casters.",
    "skipIf": "You want locking wheels; the PC Stand for Floor lists them."
  },
  {
    "id": "best-cpu-stands-under-25-3",
    "rank": 3,
    "badge": "Alternate Liitrton Listing",
    "name": "Liitrton Mobile CPU Stand Adjustable PC Stand Fits Most PC Towers",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21GekOiJKQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08F6ZZHVD?tag=theofficejournal-20",
    "description": "This is another Liitrton listing with the same description: adjustable length and width, four 360-degree casters, at about $1 more at the time of writing.\n\nIt likely differs in color or size; compare both Liitrton pages and buy the one that fits for less.",
    "specs": [
      "Length and width: adjustable",
      "Casters: 4, 360°"
    ],
    "pros": [
      "Length and width adjust",
      "Low price",
      "Rolling"
    ],
    "cons": [
      "Duplicates the other Liitrton",
      "Locking not mentioned",
      "Capacity not stated"
    ],
    "bestFor": "Readers comparing Liitrton variants.",
    "summary": "A second Liitrton listing with the same adjustable length and width, a dollar more.",
    "skipIf": "The other Liitrton listing fits your case for less."
  },
  {
    "id": "best-cpu-stands-under-25-4",
    "rank": 4,
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
    "skipIf": "You need a stated weight rating; the suptek lists 110 lb."
  },
  {
    "id": "best-cpu-stands-under-25-5",
    "rank": 5,
    "badge": "Basic Steel Rolling Stand",
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
      "Steel frame",
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
    "skipIf": "You want stated fit; the suptek lists its range and capacity for about $5 more."
  },
  {
    "id": "best-cpu-stands-under-25-6",
    "rank": 6,
    "badge": "Best Stated Capacity",
    "name": "suptek Computer Tower Stand, Mobile CPU Rolling Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318uOjWV-IL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CM2VFKV5?tag=theofficejournal-20",
    "description": "The suptek is the only stand here with a stated capacity, 110 lb, on a steel frame with a hollow base design for airflow and four wheels.\n\nIts listing gives conflicting width figures (7.8 to 14 inches in one place, 5.5 to 9.8 inches in another), so confirm the fit for your case. It was just under $25 at the time of writing.",
    "specs": [
      "Capacity: 110 lb",
      "Material: steel",
      "Base: hollow design",
      "Width: conflicting figures, check listing"
    ],
    "pros": [
      "Stated 110 lb capacity",
      "Steel",
      "Hollow base"
    ],
    "cons": [
      "Conflicting width figures",
      "Most expensive here",
      "Locking not mentioned"
    ],
    "bestFor": "Heavier towers on a small budget.",
    "summary": "suptek's steel rolling stand rated for 110 lb, with a hollow base design.",
    "skipIf": "Your case is very wide; confirm the range first."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit",
    "description": "We compared adjustment where listed."
  },
  {
    "title": "Mobility",
    "description": "We noted casters and locks."
  },
  {
    "title": "Capacity",
    "description": "We noted stated load ratings."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing, all under $25."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fit",
    "explanation": "Check width and length against your case; the Liitrton adjusts both."
  },
  {
    "criterion": "Locking wheels",
    "explanation": "The PC Stand for Floor lists lockable casters."
  },
  {
    "criterion": "Capacity",
    "explanation": "Only the suptek states one (110 lb)."
  },
  {
    "criterion": "Listed specifications",
    "explanation": "The YOSE and AGPTEK listings say little; confirm details before buying."
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
          "Length and width adjust",
          "Liitrton"
        ],
        [
          "Locking wheels",
          "PC Stand for Floor"
        ],
        [
          "Stated capacity",
          "suptek"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is a $15 stand good enough?",
    "a": "For lifting a standard tower off the floor, a simple stand does the job; check fit and wheels."
  },
  {
    "q": "Which states a weight limit?",
    "a": "Only the suptek, at 110 lb."
  },
  {
    "q": "Do I need locking wheels?",
    "a": "They help on hard floors; the PC Stand for Floor has them."
  },
  {
    "q": "Will it fit my case?",
    "a": "Compare the stand's range with your case; confirm on the listing."
  },
  {
    "q": "Why two Liitrton listings?",
    "a": "They share a description and likely differ by color or size."
  }
];

export const bottomLine = [
  "For most towers, the PC Stand for Floor offers locking wheels and broad case support, and the Liitrton adjusts length for longer cases. The suptek is the one to choose if you want a stated capacity.",
  "The YOSE and AGPTEK are the cheapest, but their listings give few details."
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
    "href": "/guide/best-cpu-stands-under-100",
    "title": "Best CPU Stands Under $100 in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-20",
    "title": "Best CPU Stands Under $20 in 2026"
  }
];
