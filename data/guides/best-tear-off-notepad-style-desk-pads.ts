// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-tear-off-notepad-style-desk-pads";

export const guideTitle = "The Best Tear-Off Planner Pads for Keeping the Week on Your Desk";

export const breadcrumbLabel = "Best Tear-Off Planner Pads";

export const metaTitle = "Best Tear-Off Notepad Desk Pads and Weekly Planners (2026)";

export const metaDescription = "We compared tear-off weekly and monthly planner pads on layout, sheet count, size, paper weight and backing, from compact to-do pads to an extra-large desk planner.";

export const mainKeyword = "desk pad refill";

export const introParagraphs = [
  "A tear-off planner pad sits on the desk where you can see it, which is the whole point: the week's tasks stay in view instead of in an app you have to open. Each sheet covers a week (or a month), and you tear it off when it is done.",
  "The differences between pads are practical. Layout comes first: a plain to-do list, a day-by-day week, a monthly grid, or sections for priorities and habits. Then size, which decides whether the pad sits beside the keyboard or under it; paper weight, which affects bleed-through from markers; and a stiff backing if you write on it away from the desk.",
  "Every pad here is undated or planner-style and costs under $20 at the time of writing. Our comparison is based on published specifications and price position, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/51CRSkxfDLL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-tear-off-notepad-style-desk-pads-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Weekly Planner Pad: To Do List Desk Notepad with Multiple Sections",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51CRSkxfDLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BS2L4Z3F?tag=theofficejournal-20",
    "description": "This Weekly Planner Pad is the sensible default for task lists: it is split into multiple sections, so you can separate priorities, calls and errands rather than keeping one long list.\n\nThe seller says the paper resists bleed-through from pens and markers, and a sturdy backing lets you write on it away from the desk. The design is minimal, which suits a shared or professional workspace.\n\nThe listing does not give dimensions or sheet count, so check both before ordering.",
    "specs": [
      "Layout: to-do list with multiple sections",
      "Bleed-resistant paper (seller claim)",
      "Sturdy backing"
    ],
    "pros": [
      "Sectioned to-do layout",
      "Sturdy backing",
      "Minimal design"
    ],
    "cons": [
      "Size and sheet count not listed"
    ],
    "bestFor": "People who organize their week as task lists rather than by day.",
    "summary": "A to-do list pad with multiple sections, thicker paper and a sturdy backing.",
    "skipIf": "You plan day by day; the Weekly Planning Pad has a day-by-day spread."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-2",
    "rank": 2,
    "badge": "Best Decorative Design",
    "name": "Yoment Weekly Planner Notepad Tear Off Weekly Calendar Pad, 52 Undated, Blue",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tSvjh5-rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PTWYL23?tag=theofficejournal-20",
    "description": "The Yoment pad is the pick if you want the planner to brighten the desk: 52 undated weekly sheets with hand-drawn artwork in blue.\n\nUndated sheets mean you can start any week of the year without wasting pages, and the layout includes space for a shopping or to-do list.\n\nThe decorative style may feel busy on a minimal desk, and the listing does not state dimensions or paper weight.",
    "specs": [
      "Sheets: 52, undated, weekly",
      "Hand-drawn artwork",
      "Shopping and to-do list space"
    ],
    "pros": [
      "Decorative design",
      "A year of undated weekly sheets"
    ],
    "cons": [
      "Dimensions and paper weight not listed",
      "Busy style may not suit every desk"
    ],
    "bestFor": "Home desks where a cheerful design is part of the appeal.",
    "summary": "An undated weekly tear-off pad with 52 sheets and hand-drawn artwork.",
    "skipIf": "You want a plain, professional look; the Weekly Planner Pad is more minimal."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-3",
    "rank": 3,
    "badge": "Best Monthly Planner",
    "name": "CDXHOME Monthly Planner Notepad",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419we1QYXjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FB2Z6V3S?tag=theofficejournal-20",
    "description": "The CDXHOME pad is the one to choose if you plan by the month: an undated monthly planner with 52 sheets, 100gsm paper and a sturdy cardboard backing.\n\nA monthly grid gives a better view of deadlines and appointments than a weekly sheet, and heavier paper should reduce bleed-through.\n\nThe listing describes it as A4-sized and also as 8 x 11 inches, which do not match exactly; check the current listing if size matters.",
    "specs": [
      "Layout: monthly, undated",
      "Sheets: 52",
      "Paper: 100gsm",
      "Cardboard backing",
      "Size: listed as A4 / 8 x 11\""
    ],
    "pros": [
      "Monthly overview",
      "Heavier paper",
      "Stiff backing"
    ],
    "cons": [
      "Size description is inconsistent",
      "Less room for daily detail than a weekly pad"
    ],
    "bestFor": "Planning deadlines and appointments across a month.",
    "summary": "An undated monthly planner pad with 100gsm paper and a cardboard backing.",
    "skipIf": "You plan day to day; a weekly pad gives more room per day."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-4",
    "rank": 4,
    "badge": "Best Budget Pick",
    "name": "Beautiful Weekly Planner",
    "price": "$5.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51N2uxMO+NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVXHFWQ1?tag=theofficejournal-20",
    "description": "The zicoto weekly planner is the lowest-priced pad here and one of the more structured: each of its 52 sheets has daily sections, priority spaces and a built-in habit tracker.\n\nIt uses 100gsm paper, which should handle most pens without bleeding through.\n\nThe colorful design is bold, and the extra sections leave less free space for notes. The listing does not give dimensions.",
    "specs": [
      "Layout: weekly, daily sections, priorities, habit tracker",
      "Sheets: 52",
      "Paper: 100gsm"
    ],
    "pros": [
      "Lowest price here",
      "Habit tracker and priority sections",
      "Heavier paper"
    ],
    "cons": [
      "Bold colors",
      "Less free space",
      "Dimensions not listed"
    ],
    "bestFor": "People who like structure and want to track habits alongside tasks.",
    "summary": "A colorful 52-sheet weekly planner with priorities and a habit tracker for about $6.",
    "skipIf": "You prefer open space; the Weekly Planner Pad is simpler."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-5",
    "rank": 5,
    "badge": "Best Day-by-Day Weekly Pad",
    "name": "Weekly Planning Pad",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41j3yyiW3TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08XLWVF9W?tag=theofficejournal-20",
    "description": "The Weekly Planning Pad is a straightforward day-by-day planner: an undated weekly spread with a notes section, enough sheets for a year, on 100gsm paper that the seller says reduces ink bleed.\n\nIt suits people who plan each day of the week separately rather than keeping one list.\n\nIts listing is almost identical to the Weekly Planner Notepad further down, so compare the current prices and choose the cheaper one if the designs look the same to you.",
    "specs": [
      "Layout: weekly day spread with notes",
      "Undated, a year of sheets",
      "Paper: 100gsm"
    ],
    "pros": [
      "Clear day-by-day layout",
      "Heavier paper",
      "Undated"
    ],
    "cons": [
      "Nearly identical to another pad here",
      "Dimensions not listed"
    ],
    "bestFor": "Planning the week one day at a time.",
    "summary": "An undated weekly pad with a day spread, notes section and 100gsm paper.",
    "skipIf": "The Weekly Planner Notepad is cheaper when you buy; they appear to be very similar."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-6",
    "rank": 6,
    "badge": "Best Large Desk Planner",
    "name": "Clear Mind Concepts Weekly Desk Planner",
    "price": "$17.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BQnZr++BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0921LD54S?tag=theofficejournal-20",
    "description": "The Clear Mind Concepts planner is the pick if you want the week to be impossible to miss: at 11.3 x 16.5 inches it is the largest pad here, big enough to sit in front of the keyboard as a working surface.\n\nIt has 52 undated tear-off sheets with space for schedule, goals, priorities and daily planning, and Clear Mind Concepts says the paper resists bleed-through from pens, markers and highlighters.\n\nIt costs about twice as much as the other pads at the time of writing and needs a clear stretch of desk.",
    "specs": [
      "Size: 11.3 x 16.5\"",
      "Sheets: 52, undated, weekly",
      "Sections: schedule, goals, priorities, daily",
      "Bleed-resistant paper (manufacturer claim)"
    ],
    "pros": [
      "Largest pad here",
      "Room for goals and daily detail",
      "Marker-friendly paper, per the maker"
    ],
    "cons": [
      "Most expensive pad here",
      "Needs desk space"
    ],
    "bestFor": "People who plan in detail and want the week in full view.",
    "summary": "An extra-large 11.3 x 16.5-inch weekly planner with 52 tear-off sheets.",
    "skipIf": "Your desk is crowded; a smaller pad fits beside the keyboard."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-7",
    "rank": 7,
    "badge": "Minimal-Detail Listing",
    "name": "Notsu Weekly Planner Notepad",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21Gg2xxljyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07RYP1SRV?tag=theofficejournal-20",
    "description": "The Notsu pad is a weekly planner aimed at office workers who want to replace sticky notes and scattered reminders with one sheet on the desk.\n\nThe listing focuses on the idea rather than the product: it does not give sheet count, dimensions, paper weight or a clear layout description.\n\nCheck the product images before buying; the other pads here are better documented at similar prices.",
    "specs": [
      "Layout: weekly (details not listed)"
    ],
    "pros": [
      "Aimed at office use"
    ],
    "cons": [
      "Few specifications listed",
      "Costs more than several better-documented pads"
    ],
    "bestFor": "Buyers who like its design in the product photos.",
    "summary": "A Notsu weekly planner pad whose listing gives little detail about layout or size.",
    "skipIf": "You want to know exactly what you are getting; the other pads list more detail."
  },
  {
    "id": "best-tear-off-notepad-style-desk-pads-8",
    "rank": 8,
    "badge": "Alternative Weekly Pad",
    "name": "Weekly Planner Notepad",
    "price": "$8.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uaynWipxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08P58NVTV?tag=theofficejournal-20",
    "description": "This Weekly Planner Notepad appears to be a near-twin of the Weekly Planning Pad above: an undated weekly day spread with a notes section on 100gsm paper.\n\nThe seller also markets it as a gift, which suits a pad bought for someone else.\n\nIf the two look the same to you, choose whichever is cheaper at the time you buy.",
    "specs": [
      "Layout: weekly day spread with notes",
      "Undated",
      "Paper: 100gsm"
    ],
    "pros": [
      "Heavier paper",
      "Undated"
    ],
    "cons": [
      "Nearly identical to the Weekly Planning Pad",
      "Dimensions not listed"
    ],
    "bestFor": "Buyers comparing it with the Weekly Planning Pad for the better price.",
    "summary": "An undated weekly planner notepad with 100gsm paper and a notes section.",
    "skipIf": "You want something distinctive; the Yoment or zicoto pads have more character."
  }
];

export const howWeEvaluated = [
  {
    "title": "Layout",
    "description": "We compared weekly, monthly and to-do layouts and the sections each includes."
  },
  {
    "title": "Paper and build",
    "description": "We recorded listed paper weight, sheet count and backing, treating bleed-resistance claims as seller claims."
  },
  {
    "title": "Size",
    "description": "We noted dimensions where listed and flagged where they are missing or inconsistent."
  },
  {
    "title": "Price position",
    "description": "We compared prices at the time of writing and noted near-identical listings."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Layout",
    "explanation": "Choose between a sectioned to-do list, a day-by-day week, a monthly grid, or a structured page with priorities and habit tracking."
  },
  {
    "criterion": "Size and placement",
    "explanation": "A large pad like the Clear Mind Concepts (11.3 x 16.5 inches) can sit in front of the keyboard; smaller pads sit beside it. Many listings here do not give dimensions, so check."
  },
  {
    "criterion": "Paper weight",
    "explanation": "Several pads list 100gsm paper, heavier than typical copy paper, which should reduce bleed-through from markers and highlighters."
  },
  {
    "criterion": "Undated sheets and count",
    "explanation": "Undated pads let you start any week. Fifty-two weekly sheets cover a year."
  },
  {
    "criterion": "Backing",
    "explanation": "A stiff backing (Weekly Planner Pad, CDXHOME) makes it easier to write on the pad away from the desk."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By planning style",
    "table": {
      "headers": [
        "Planning style",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Task lists",
          "Weekly Planner Pad",
          "Multiple sections, sturdy backing"
        ],
        [
          "Day by day",
          "Weekly Planning Pad or Weekly Planner Notepad",
          "Weekly day spread, 100gsm"
        ],
        [
          "Monthly overview",
          "CDXHOME",
          "Undated monthly grid"
        ],
        [
          "Habits and priorities",
          "zicoto weekly planner",
          "Habit tracker, lowest price"
        ],
        [
          "Big, in front of the keyboard",
          "Clear Mind Concepts",
          "11.3 x 16.5 inches"
        ],
        [
          "Decorative",
          "Yoment",
          "Hand-drawn artwork"
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
        "Pads"
      ],
      "rows": [
        [
          "About $6–$9",
          "zicoto, Weekly Planning Pad, Weekly Planner Notepad, Weekly Planner Pad, Yoment"
        ],
        [
          "About $10",
          "CDXHOME, Notsu"
        ],
        [
          "About $17",
          "Clear Mind Concepts"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What is a tear-off desk planner?",
    "a": "A pad of planner sheets, usually one per week, that sits on the desk. You fill in the week, then tear off the sheet when it is done."
  },
  {
    "q": "Weekly or monthly?",
    "a": "Weekly pads give more room for daily tasks; monthly pads, like the CDXHOME, give a better overview of deadlines. Some people use both."
  },
  {
    "q": "Will markers bleed through?",
    "a": "Heavier paper helps. Several pads here list 100gsm paper, and the Clear Mind Concepts and Weekly Planner Pad sellers claim bleed resistance. Test with your usual pen on the first sheet."
  },
  {
    "q": "What does undated mean?",
    "a": "The sheets have no printed dates, so you can start any week and skip weeks without wasting pages."
  },
  {
    "q": "Can a planner pad replace a desk pad?",
    "a": "A large one, like the Clear Mind Concepts, can sit in front of the keyboard as a writing surface. It does not protect the desk or work as a mouse pad the way a fabric or leather desk pad does."
  }
];

export const bottomLine = [
  "For most desks, the Weekly Planner Pad is the practical choice for task lists, the Weekly Planning Pad (or its near-twin, the Weekly Planner Notepad) for day-by-day planning, and the CDXHOME for a monthly view.",
  "The zicoto pad is the budget pick with the most structure, the Yoment the decorative option, and the Clear Mind Concepts is worth paying more for if you want a large sheet in front of the keyboard. The Notsu's listing is too thin to recommend over the better-documented pads."
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
