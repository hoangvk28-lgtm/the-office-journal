// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-desk-pad-calendars";

export const guideTitle = "The Best Desk Pad Calendars for Planning at a Glance";

export const breadcrumbLabel = "Best Desk Pad Calendars";

export const metaTitle = "Best Desk Pad Calendars for 2026–2027 (2026)";

export const metaDescription = "Desk pad calendars differ in date range, size and extras like protective film or Julian dates. We compared six on months covered, dimensions, paper and backing.";

export const mainKeyword = "desk pad calendar";

export const introParagraphs = [
  "A desk pad calendar puts the month in front of you while you work. The first thing to check is the date range: some run a calendar year, while academic-style pads start in June or July 2026 and run 18 or 19 months to December 2027.",
  "Size is next. The 22 x 17-inch pads sit under a keyboard as a working surface; 17 x 12-inch pads sit beside it. Then consider extras: a protective film, a reusable backboard, heavier paper or Julian dates.",
  "Our comparison is based on listed date ranges, sizes and paper specifications, not hands-on testing. Paper surfaces aren't designed for a mouse, so plan to keep a mouse pad alongside."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41ju+Cq82hL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-desk-pad-calendars-1",
    "rank": 1,
    "badge": "Best with Reusable Backboard",
    "name": "Desk Calendar 2026-2027 with Desk Mat, 22\" x 17\" Large Desk Pad Calendar Runs",
    "price": "$21.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ju+Cq82hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FLPNDP8T?tag=theofficejournal-20",
    "description": "This calendar pairs a large 22 x 17-inch, 18-month calendar, July 2026 to December 2027, with a reusable double-layer PU leather backboard that protects the desk and can take a new pad later.\n\nIt was the most expensive calendar here at the time of writing, reflecting the backboard.",
    "specs": [
      "Size: 22 x 17\"",
      "Dates: July 2026–December 2027",
      "Backboard: reusable PU leather"
    ],
    "pros": [
      "Reusable backboard",
      "Large planning grid",
      "18 months"
    ],
    "cons": [
      "Most expensive here",
      "Brand not named",
      "Paper not for mousing"
    ],
    "bestFor": "A long-term planning surface that also protects the desk.",
    "summary": "An 18-month, 22 x 17-inch calendar (July 2026 to December 2027) on a reusable PU leather backboard.",
    "skipIf": "You only want the paper; the SUNEE is the same size for less."
  },
  {
    "id": "best-desk-pad-calendars-2",
    "rank": 2,
    "badge": "Low-Cost Compact Calendar",
    "name": "Taja Desk Calendar 2026-2027",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Hq1rYzi0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWDYQBHX?tag=theofficejournal-20",
    "description": "The Taja is a compact, low-cost calendar: 17 x 12 inches with 2.3 x 2.3-inch daily squares on 120gsm paper, heavier than standard printer paper.\n\nThe product name says 2026–2027 but the description refers to 2027; confirm the months covered on the listing.",
    "specs": [
      "Size: 17 x 12\"",
      "Daily squares: 2.3 x 2.3\"",
      "Paper: 120gsm",
      "Dates: confirm on listing"
    ],
    "pros": [
      "Low price",
      "Heavier paper",
      "Compact"
    ],
    "cons": [
      "Date range unclear",
      "Smaller grid",
      "Sits beside rather than under keyboard"
    ],
    "bestFor": "A monthly planner beside the keyboard.",
    "summary": "A 17 x 12-inch calendar with 2.3-inch daily squares on 120gsm paper.",
    "skipIf": "You want a pad under your keyboard; the 22 x 17-inch options are larger."
  },
  {
    "id": "best-desk-pad-calendars-3",
    "rank": 3,
    "badge": "Best Calendar-Year Pad",
    "name": "AT-A-GLANCE 2027 Desk Pad Calendar",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hLTxuy2ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVGSF9WV?tag=theofficejournal-20",
    "description": "The AT-A-GLANCE is the calendar-year choice: January to December 2027, with Julian dates and ruled daily blocks, on paper AT-A-GLANCE says resists ink bleed.\n\nIt doesn't cover the rest of 2026, so pair it with something else for the remaining months.",
    "specs": [
      "Dates: January–December 2027",
      "Extras: Julian dates",
      "Daily blocks: ruled",
      "Paper: ink-bleed resistant (per manufacturer)"
    ],
    "pros": [
      "Julian dates",
      "Established brand",
      "Ruled blocks"
    ],
    "cons": [
      "Starts January 2027",
      "Size not stated in summary",
      "No backboard"
    ],
    "bestFor": "Offices that plan by calendar year or use Julian dates.",
    "summary": "AT-A-GLANCE's January to December 2027 desk pad with Julian dates and ruled daily blocks.",
    "skipIf": "You need the rest of 2026; the 18-month pads start mid-2026."
  },
  {
    "id": "best-desk-pad-calendars-4",
    "rank": 4,
    "badge": "Minimal Design",
    "name": "Aesthetic 2026-2027 Desk Calendar",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31xMdjEIPZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQT9L1RZ?tag=theofficejournal-20",
    "description": "The Aesthetic calendar runs from June 2026 to December 2027 in a minimalist black-and-white design and can hang on a wall as well as sit on a desk.\n\nIts size isn't stated in the listing summary.",
    "specs": [
      "Dates: June 2026–December 2027",
      "Design: minimalist black and white",
      "Use: desk or wall"
    ],
    "pros": [
      "19-month range",
      "Clean design",
      "Low price"
    ],
    "cons": [
      "Size not stated here",
      "Paper spec not given",
      "No backboard"
    ],
    "bestFor": "A clean look on a desk or wall.",
    "summary": "A black-and-white June 2026 to December 2027 calendar for desk or wall.",
    "skipIf": "You want protective film; the SUNEE has it."
  },
  {
    "id": "best-desk-pad-calendars-5",
    "rank": 5,
    "badge": "Best Protected Surface",
    "name": "SUNEE Desk Calendar 2026 Large 22x17 from July 2026 to December 2027",
    "price": "$16.14",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wrEuxRE+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CTTF5V8X?tag=theofficejournal-20",
    "description": "The SUNEE is a large 22 x 17-inch academic-year calendar, July 2026 to December 2027, bound with a transparent film that SUNEE says keeps stains and dust off, with non-bleeding paper.\n\nIt costs less than the backboard calendar of the same size at the time of writing.",
    "specs": [
      "Size: 22 x 17\"",
      "Dates: July 2026–December 2027",
      "Surface: transparent protective film",
      "Paper: non-bleeding (per manufacturer)"
    ],
    "pros": [
      "Protective film",
      "Large size",
      "Academic-year range"
    ],
    "cons": [
      "No reusable backboard",
      "Film may affect writing feel",
      "Paper weight not stated"
    ],
    "bestFor": "A large calendar that stays clean.",
    "summary": "A 22 x 17-inch, July 2026 to December 2027 calendar with a transparent protective film.",
    "skipIf": "You want a reusable backboard; the first pick includes one."
  },
  {
    "id": "best-desk-pad-calendars-6",
    "rank": 6,
    "badge": "Lowest-Cost 19-Month Calendar",
    "name": "GuassLee Desk Calendar 2026-2027",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sQ+O+K4zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B58WYNBY?tag=theofficejournal-20",
    "description": "The GuassLee covers June 2026 to December 2027 on 19 sheets, with paper designed to resist feathering and seepage, and can be used on a desk or wall.\n\nIt was tied for the lowest price here at the time of writing. Its size isn't stated in the listing summary.",
    "specs": [
      "Dates: June 2026–December 2027",
      "Sheets: 19",
      "Paper: anti-feathering (per manufacturer)",
      "Use: desk or wall"
    ],
    "pros": [
      "Lowest price, tied",
      "19 months",
      "Anti-feathering paper"
    ],
    "cons": [
      "Size not stated here",
      "No backboard",
      "Less established brand"
    ],
    "bestFor": "The longest range for the least money.",
    "summary": "A June 2026 to December 2027 desk or wall calendar with 19 sheets of anti-feathering paper.",
    "skipIf": "You want a known size; the SUNEE lists 22 x 17 inches."
  }
];

export const howWeEvaluated = [
  {
    "title": "Date range",
    "description": "We compared months covered."
  },
  {
    "title": "Size",
    "description": "We compared listed dimensions."
  },
  {
    "title": "Extras",
    "description": "We noted backboards, film, Julian dates and paper."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the date range",
    "explanation": "Calendar-year (AT-A-GLANCE, 2027) or academic-style from June or July 2026 to December 2027."
  },
  {
    "criterion": "Choose the size",
    "explanation": "22 x 17-inch pads work under a keyboard; 17 x 12 inches sits beside it."
  },
  {
    "criterion": "Consider protection",
    "explanation": "A backboard or protective film keeps the pad and desk cleaner."
  },
  {
    "criterion": "Check paper",
    "explanation": "Heavier or anti-bleed paper suits pens and markers."
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
          "Reusable backboard",
          "22 x 17\" calendar with desk mat"
        ],
        [
          "Large, protected surface",
          "SUNEE"
        ],
        [
          "Calendar year, Julian dates",
          "AT-A-GLANCE"
        ],
        [
          "Compact, low cost",
          "Taja"
        ],
        [
          "Minimal look",
          "Aesthetic"
        ],
        [
          "Lowest cost, 19 months",
          "GuassLee"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Which range should I choose?",
    "a": "Calendar-year if you plan January to December; an 18- or 19-month pad if you want to start now or follow an academic year."
  },
  {
    "q": "What size fits under a keyboard?",
    "a": "22 x 17 inches is the common large size; smaller calendars sit beside the keyboard."
  },
  {
    "q": "Can I use a mouse on it?",
    "a": "Paper isn't designed for mousing; keep a mouse pad alongside."
  },
  {
    "q": "What are Julian dates?",
    "a": "Day-of-year numbers used in some scheduling, manufacturing and logistics work. The AT-A-GLANCE includes them."
  },
  {
    "q": "Is a backboard worth it?",
    "a": "It protects the desk and can be reused with a new pad."
  }
];

export const bottomLine = [
  "For a large planning surface, the calendar with a reusable backboard protects the desk long-term, while the SUNEE offers the same size with a protective film for less.",
  "For a calendar year with Julian dates, choose the AT-A-GLANCE. On a small budget, the GuassLee and Taja are the lowest-cost options; confirm their sizes and dates."
];

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
