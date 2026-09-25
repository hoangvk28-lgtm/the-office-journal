// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-hexagon-shaped-desk-pads";

export const guideTitle = "The Best Hexagon Desk Pads, from Honeycomb Prints to Full-Desk Mats";

export const breadcrumbLabel = "Best Hexagon Desk Pads";

export const metaTitle = "Best Hexagon and Honeycomb Desk Pads (2026)";

export const metaDescription = "These desk pads are rectangular with hexagon honeycomb prints. We compared five on size, surface, coating and base so you can pick the right pattern at the right size.";

export const mainKeyword = "desk pad hexagon";

export const introParagraphs = [
  "One clarification first: all five pads here are rectangular with a hexagon honeycomb print, not cut in a hexagon shape. If you want a pad that is itself hexagonal, these won't be it.",
  "Among the honeycomb prints, the practical choice is size. Two are 31.5 x 11.8 inches, which covers a keyboard and mouse on a shallow strip; three are 35.4 x 15.7 inches, which covers more of the desk. All use cloth surfaces, some with a waterproof coating.",
  "All five cost under $20 at the time of writing. Our comparison is based on listed dimensions and materials, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41C1YH6eGeL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-hexagon-shaped-desk-pads-1",
    "rank": 1,
    "badge": "Blue and Red Honeycomb, Standard Size",
    "name": "Hexagon Honeycomb Large Mouse Pad, Gaming Keyboard Desk Pad, Extended Mouse Mat",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41C1YH6eGeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGPYV8GQ?tag=theofficejournal-20",
    "description": "This pad prints a blue-and-red honeycomb pattern on a 31.5 x 11.8-inch cloth surface, 3mm thick, enough to cover a keyboard and mouse.\n\nIts 11.8-inch depth is shallower than the XXL pads here, so it won't reach under a monitor.",
    "specs": [
      "Size: 31.5 x 11.8\" (800 x 300 mm)",
      "Thickness: 3mm",
      "Surface: cloth",
      "Print: blue/red honeycomb"
    ],
    "pros": [
      "Stated size and thickness",
      "Moderate price",
      "Two-color pattern"
    ],
    "cons": [
      "Shallow depth",
      "Cloth absorbs spills",
      "Base not described"
    ],
    "bestFor": "A keyboard-and-mouse strip with a honeycomb look.",
    "summary": "A 31.5 x 11.8-inch, 3mm-thick cloth pad with a blue-and-red hexagon honeycomb print.",
    "skipIf": "You want more coverage; the XXL pads are 35.4 x 15.7 inches."
  },
  {
    "id": "best-hexagon-shaped-desk-pads-2",
    "rank": 2,
    "badge": "Best XXL Honeycomb (Blue)",
    "name": "Blue Honeycomb Mouse Pad, XXL 35.4\"x15.7\" Big Gaming Mousepad, Geometric Hexagon",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41p+6h-iDcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G9KJX4RX?tag=theofficejournal-20",
    "description": "The blue XXL honeycomb pad covers more of the desk, 35.4 x 15.7 inches, with a superfine cloth surface, a waterproof coating that wipes clean and a non-slip rubber base.\n\nIt's the same design as the red XXL pad at the same price; choose by color.",
    "specs": [
      "Size: 35.4 x 15.7\"",
      "Surface: superfine cloth, waterproof coating",
      "Base: non-slip rubber",
      "Print: blue honeycomb"
    ],
    "pros": [
      "Large coverage",
      "Waterproof coating",
      "Rubber base"
    ],
    "cons": [
      "Duplicates the red version",
      "Thickness not stated",
      "Bold pattern"
    ],
    "bestFor": "A full keyboard-and-mouse area in blue.",
    "summary": "A 35.4 x 15.7-inch blue honeycomb pad with waterproof coating and rubber base.",
    "skipIf": "You prefer red; the red XXL pad is identical."
  },
  {
    "id": "best-hexagon-shaped-desk-pads-3",
    "rank": 3,
    "badge": "Lowest Price (Gold)",
    "name": "Desk Mat, Hexagon Gold Honeycomb XL 31.5\"x11.8\"Large Gaming Mouse Pad, 3mm",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413ybvZkP6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRB1KFPV?tag=theofficejournal-20",
    "description": "The gold honeycomb pad is the least expensive here, under $10 at the time of writing: 31.5 x 11.8 inches, 3mm thick, with a gold hexagon print.\n\nLike the other 31.5-inch pad, it's shallow and covers keyboard and mouse only.",
    "specs": [
      "Size: 31.5 x 11.8\"",
      "Thickness: 3mm",
      "Surface: cloth",
      "Print: gold honeycomb"
    ],
    "pros": [
      "Lowest price here",
      "Stated thickness",
      "Distinct gold look"
    ],
    "cons": [
      "Shallow depth",
      "Base not described",
      "Cloth absorbs spills"
    ],
    "bestFor": "A low-cost honeycomb pad.",
    "summary": "A 31.5 x 11.8-inch, 3mm gold honeycomb cloth pad, the cheapest here.",
    "skipIf": "You need a deeper surface; an XXL pad covers 15.7 inches."
  },
  {
    "id": "best-hexagon-shaped-desk-pads-4",
    "rank": 4,
    "badge": "XXL Honeycomb (Red)",
    "name": "Red Honeycomb Mouse Pad, XXL 35.4\"x15.7\" Big Gaming Mousepad, Geometric Hexagon",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UUbKxd3ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G9LJ2CWD?tag=theofficejournal-20",
    "description": "This is the red counterpart of the blue XXL pad: 35.4 x 15.7 inches, superfine cloth with a waterproof coating, and a non-slip rubber base, at the same price at the time of writing.",
    "specs": [
      "Size: 35.4 x 15.7\"",
      "Surface: superfine cloth, waterproof coating",
      "Base: non-slip rubber",
      "Print: red honeycomb"
    ],
    "pros": [
      "Large coverage",
      "Waterproof coating",
      "Rubber base"
    ],
    "cons": [
      "Duplicates the blue version",
      "Thickness not stated",
      "Bold pattern"
    ],
    "bestFor": "A full keyboard-and-mouse area in red.",
    "summary": "The red version of the 35.4 x 15.7-inch waterproof-coated honeycomb pad.",
    "skipIf": "You prefer blue; the blue XXL pad is identical."
  },
  {
    "id": "best-hexagon-shaped-desk-pads-5",
    "rank": 5,
    "badge": "High-Definition Print (Red)",
    "name": "Large Gaming Mouse Pad for Desk, Red Honeycomb Science Technology Desk",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GrFq6AhLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5MCYVKD?tag=theofficejournal-20",
    "description": "This pad offers a different red honeycomb design at 35.4 x 15.7 inches, with a smooth, soft surface and printing the maker describes as high-definition.\n\nIt was the most expensive pad here at the time of writing, by a dollar. The listing summary doesn't mention a waterproof coating or base type.",
    "specs": [
      "Size: 35.4 x 15.7\"",
      "Surface: smooth, soft cloth",
      "Print: red honeycomb, high-definition (per listing)"
    ],
    "pros": [
      "Large coverage",
      "Distinct design",
      "Soft surface"
    ],
    "cons": [
      "Most expensive here",
      "Waterproofing not mentioned",
      "Base not described"
    ],
    "bestFor": "A detailed tech-style honeycomb print.",
    "summary": "A 35.4 x 15.7-inch red honeycomb \"science technology\" print with a smooth, soft surface.",
    "skipIf": "You want a waterproof coating; the blue or red XXL pads list one."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size",
    "description": "We compared listed dimensions and thickness."
  },
  {
    "title": "Surface",
    "description": "We noted cloth type and coatings."
  },
  {
    "title": "Base",
    "description": "We noted listed non-slip bases."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pattern, not shape",
    "explanation": "These are rectangular pads with hexagon prints. Look elsewhere for a hexagon-cut pad."
  },
  {
    "criterion": "Choose the size",
    "explanation": "31.5 x 11.8 inches covers keyboard and mouse; 35.4 x 15.7 inches covers more desk."
  },
  {
    "criterion": "Check spill protection",
    "explanation": "The blue and red XXL pads list a waterproof coating."
  },
  {
    "criterion": "Check the base",
    "explanation": "A rubber base, listed on the XXL pads, helps stop sliding."
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
          "Gold honeycomb 31.5\""
        ],
        [
          "Two-color strip",
          "Blue/red honeycomb 31.5\""
        ],
        [
          "Large, waterproof",
          "Blue or red XXL"
        ],
        [
          "Different red design",
          "Red Honeycomb Science Technology"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Are these hexagon-shaped?",
    "a": "No. They're rectangular with hexagon honeycomb prints."
  },
  {
    "q": "What size should I get?",
    "a": "35.4 x 15.7 inches if you want keyboard, mouse and some desk covered; 31.5 x 11.8 inches for a narrower strip."
  },
  {
    "q": "Are they waterproof?",
    "a": "The blue and red XXL pads list a waterproof coating; others don't mention one."
  },
  {
    "q": "Will they slide?",
    "a": "The XXL pads list rubber bases; check the others' listings."
  },
  {
    "q": "Are they good for gaming?",
    "a": "They use cloth surfaces designed for mice; performance details aren't specified."
  }
];

export const bottomLine = [
  "For the most coverage and spill protection, the blue or red XXL honeycomb pads are the practical choice. The gold 31.5-inch pad is the lowest-cost option.",
  "If you specifically want a hexagon-cut pad, none of these fit that brief."
];

export const sectionHeadings = {
  "howWeChose": "How We Chose These Desk Pads",
  "whatToLookFor": "What to Look for in a Honeycomb Desk Pad",
  "howToChoose": "How to Choose a Hexagon Desk Pad"
};

export const relatedGuides = [
  {
    "href": "/guide/best-leather-desk-pads",
    "title": "Best Leather Desk Pads"
  },
  {
    "href": "/guide/best-large-desk-pads",
    "title": "Best Large Desk Pads"
  },
  {
    "href": "/guide/best-desk-pads-with-wrist-support",
    "title": "Best Desk Pads with Wrist Support"
  }
];
