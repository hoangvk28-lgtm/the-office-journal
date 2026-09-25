// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-bottom-stands";

export const guideTitle = "The Best CPU Stands for Lifting a PC Off the Floor";

export const breadcrumbLabel = "Best CPU Bottom Stands";

export const metaTitle = "Best CPU Floor Stands: Low Rolling Stands and Carts (2026)";

export const metaDescription = "We compared low CPU floor stands and one desk-height cart on lift height, size range, casters and price, from a $14 stand to the ZUAVIALA cart.";

export const mainKeyword = "cpu bottom stands";

export const introParagraphs = [
  "A CPU floor stand raises a desktop tower an inch or two off the floor, which keeps carpet fibers and dust away from bottom intake vents and makes it easier to roll the PC out to reach cables. Most here are low, adjustable-width stands on casters costing under $20.",
  "The differences are small but practical: lift height, whether the listing states a size range, and whether the wheels lock. One product, the ZUAVIALA, is a taller cart that raises the tower to near desk height instead.",
  "None of these listings state a weight capacity. Our comparison is based on published specifications and price position, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41R2fUTfTqL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-bottom-stands-1",
    "rank": 1,
    "badge": "Desk-Height Cart",
    "name": "ZUAVIALA Computer Tower Stand",
    "price": "$40.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R2fUTfTqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9VHJCP?tag=theofficejournal-20",
    "description": "The ZUAVIALA is different from the other stands: a metal cart that raises the tower to 21.34–28.3 inches, near desk height, and adds surface space.\n\nIt costs about $41 at the time of writing, far more than the low stands. Choose it if you want the tower within reach rather than just off the floor.",
    "specs": [
      "Height: 21.34–28.3\"",
      "Construction: metal",
      "Adds surface space"
    ],
    "pros": [
      "Tower within reach",
      "Extra surface"
    ],
    "cons": [
      "Much more expensive",
      "Larger footprint"
    ],
    "bestFor": "Keeping the PC beside the desk at reach height.",
    "summary": "A ZUAVIALA metal cart adjustable from 21.34 to 28.3 inches high.",
    "skipIf": "You only want the tower off the floor; a $15 stand does that."
  },
  {
    "id": "best-cpu-bottom-stands-2",
    "rank": 2,
    "badge": "Best Airflow Lift",
    "name": "Hmseng Computer Tower Stand",
    "price": "$17.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41TseS21yeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH2CZHL3?tag=theofficejournal-20",
    "description": "The Hmseng raises the tower 2 inches, the most lift listed among the low stands, with an open bottom that Hmseng says helps cooling and reduces dust intake.\n\nIt has adjustable width and casters, for about $18 at the time of writing. The width range is not stated.",
    "specs": [
      "Lift: 2\"",
      "Open bottom",
      "Adjustable width",
      "Rolling"
    ],
    "pros": [
      "Most lift among low stands",
      "Open base"
    ],
    "cons": [
      "Width range not stated"
    ],
    "bestFor": "PCs with bottom intake vents on carpet.",
    "summary": "A Hmseng adjustable-width stand with an open bottom, 2 inches off the floor.",
    "skipIf": "You need a stated size range; the Liitrton lists one."
  },
  {
    "id": "best-cpu-bottom-stands-3",
    "rank": 3,
    "badge": "Best With Locking Wheels",
    "name": "Adjustable Computer Tower Stand",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318IsyAsPXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4T42TPC?tag=theofficejournal-20",
    "description": "This Hovadova stand has locking casters to keep the PC in place once positioned, with tool-free setup, for about $17 at the time of writing.\n\nThe listing does not give a size range.",
    "specs": [
      "Casters: 4 x 360°, locking",
      "Tool-free setup"
    ],
    "pros": [
      "Locking wheels",
      "Tool-free"
    ],
    "cons": [
      "Size range not stated"
    ],
    "bestFor": "PCs that should not roll when bumped.",
    "summary": "A Hovadova stand with four 360° casters that lock.",
    "skipIf": "You need a stated size range."
  },
  {
    "id": "best-cpu-bottom-stands-4",
    "rank": 4,
    "badge": "Carpet Stand",
    "name": "Pc Stand, Adjustable Computer Tower Stand for Carpet Fits Most PC-Black",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sn9jzQPHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH28XGY5?tag=theofficejournal-20",
    "description": "This stand lifts the tower 1.75 inches with adjustable width and casters, for about $16 at the time of writing. The width range is not stated.",
    "specs": [
      "Lift: 1.75\"",
      "Adjustable width",
      "Rolling"
    ],
    "pros": [
      "Low price"
    ],
    "cons": [
      "Size range not stated"
    ],
    "bestFor": "Standard towers on carpet.",
    "summary": "An adjustable-width stand that lifts the PC 1.75 inches.",
    "skipIf": "You want more lift; the Hmseng gives 2 inches."
  },
  {
    "id": "best-cpu-bottom-stands-5",
    "rank": 5,
    "badge": "Lowest Price (Few Specs)",
    "name": "YOSE Computer Tower Stand",
    "price": "$13.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0919X8SZ7?tag=theofficejournal-20",
    "description": "The YOSE is the cheapest stand here at about $14 at the time of writing, but its listing gives no size, lift or caster details. The Liitrton costs about a dollar more and states its dimensions.",
    "specs": [
      "Specifications: not listed"
    ],
    "pros": [
      "Lowest price"
    ],
    "cons": [
      "No specifications listed"
    ],
    "bestFor": "Buyers who can check fit from photos.",
    "summary": "A YOSE stand with almost no listed specifications.",
    "skipIf": "You want stated dimensions; choose the Liitrton."
  },
  {
    "id": "best-cpu-bottom-stands-6",
    "rank": 6,
    "badge": "Best Overall Low Stand",
    "name": "Liitrton Mobile CPU Stand Adjustable Computer Tower Stand Fits Most PC",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hxCzq3j0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083DMYKC9?tag=theofficejournal-20",
    "description": "The Liitrton is the low stand with the clearest specifications: adjustable length from 16.93 to 22.44 inches and width from about 9 inches, on four 360-degree casters, for about $15 at the time of writing.\n\nThe long range suits most cases, including large towers. The lift height is not stated.",
    "specs": [
      "Length: 16.93–22.44\"",
      "Width: adjustable from about 9\"",
      "Casters: 4 x 360°"
    ],
    "pros": [
      "Stated size range",
      "Fits long cases",
      "Low price"
    ],
    "cons": [
      "Lift height not stated"
    ],
    "bestFor": "Most towers, including long ones.",
    "summary": "A Liitrton stand adjustable from 16.93 to 22.44 inches long, on 360° casters.",
    "skipIf": "You want locking wheels; the Hovadova has them."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit and lift",
    "description": "We recorded stated size ranges and lift heights."
  },
  {
    "title": "Casters",
    "description": "We noted locking and swivel casters."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Lift height",
    "explanation": "More clearance helps bottom intake vents. The Hmseng lists 2 inches; the carpet stand 1.75 inches."
  },
  {
    "criterion": "Size range",
    "explanation": "Only the Liitrton states length and width ranges. Measure your case."
  },
  {
    "criterion": "Locking wheels",
    "explanation": "Locks keep the PC from rolling. The Hovadova lists them."
  },
  {
    "criterion": "Weight",
    "explanation": "None of the listings state a capacity; confirm with the seller for heavy towers."
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
          "Stated fit",
          "Liitrton",
          "16.93–22.44\" long"
        ],
        [
          "Most lift",
          "Hmseng",
          "2 inches, open bottom"
        ],
        [
          "Locking wheels",
          "Hovadova",
          "Locks"
        ],
        [
          "Tower at desk height",
          "ZUAVIALA",
          "Cart"
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
          "About $14–$18",
          "YOSE, Liitrton, carpet stand, Hovadova, Hmseng"
        ],
        [
          "About $41",
          "ZUAVIALA"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why raise a PC off the floor?",
    "a": "It keeps carpet fibers and dust away from bottom vents and makes the PC easier to move for cleaning and cabling."
  },
  {
    "q": "How much lift do I need?",
    "a": "An inch or two is typical. The Hmseng lists 2 inches."
  },
  {
    "q": "How much weight can these hold?",
    "a": "None of the listings state a capacity. Check with the seller for a heavy tower."
  }
];

export const bottomLine = [
  "For most towers, the Liitrton is the low stand with the clearest fit. The Hmseng gives the most lift for bottom vents, and the Hovadova adds locking wheels.",
  "The ZUAVIALA is a different product, a desk-height cart, worth it only if you want the PC beside you. The YOSE is cheapest but lists too little to recommend confidently."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-dual-cpu-stands",
    "title": "Best Dual CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-with-wheels",
    "title": "Best CPU Stands With Wheels in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-for-large-pc-towers",
    "title": "Best CPU Stands for Large PC Towers in 2026"
  }
];
