// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Weigh price heavily given typical student budgets",
    "explanation": "We prioritized affordability across this comparison, since student spending is generally more constrained than a home-office or professional budget."
  },
  {
    "criterion": "Check dorm-desk footprint before choosing a larger board",
    "explanation": "Dorm desks are often smaller and shared — measure your actual available space before picking the largest option."
  },
  {
    "criterion": "Consider an organizer for consolidating study materials",
    "explanation": "The Varhomax and Amazon Basics options combine whiteboard and storage, useful on a cramped dorm desk."
  },
  {
    "criterion": "Use review volume as evidence of durability under active study use",
    "explanation": ""
  },
  {
    "criterion": "Compare near-identical large boards by price and rating",
    "explanation": "The AMUSIGHT and Cazeyoo boards are the same size — compare current price and rating to pick between them."
  }
];

export const faq = [
  {
    "q": "What's the cheapest option for students?",
    "a": ""
  },
  {
    "q": "Which has the most writing area for study notes?",
    "a": "The AMUSIGHT Double-Sided Magnetic White Board at 16x12 inches, or the nearly identical Cazeyoo option at a slightly lower price."
  },
  {
    "q": "Is there an option with storage for study materials?",
    "a": "Yes, the Varhomax Glass Desk Whiteboard with Storage and the cheaper Amazon Basics alternative."
  },
  {
    "q": "Are the AMUSIGHT and Cazeyoo boards different products?",
    "a": "They're the same size (16x12 in) at slightly different prices and ratings — compare the current listings to decide between them."
  },
  {
    "q": "Which is best for a small dorm desk?",
    "a": "The compact Small Dry Erase Board 10x10, which uses minimal desk space."
  }
];

export const guideSlug = "best-desktop-whiteboards-for-students";

export const guideTitle = "The Best Desktop Whiteboards for Students, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/41sEyXE5tML._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Small Dry Erase Board 10x10"
        ],
        [
          "",
          "AMUSIGHT Double-Sided Magnetic White Board"
        ],
        [
          "",
          "Cazeyoo Magnetic Desktop Whiteboard 16x12"
        ],
        [
          "Combined storage for study materials",
          "Varhomax Glass Desk Whiteboard with Storage"
        ],
        [
          "",
          "Amazon Basics Desktop Dry Erase Whiteboard"
        ]
      ]
    }
  }
];

export const howWeEvaluated = [
  {
    "title": "Price weighted more heavily for student budgets",
    "description": "We prioritized affordable options more than in our home-office or professional whiteboard guides, reflecting typical student budget constraints."
  },
  {
    "title": "",
    "description": "We noted where a board's size fits a typical, often shared or limited, dorm-room desk."
  },
  {
    "title": "Durability under frequent study-session erasing",
    "description": "We weighted review volume as evidence a board holds up to the repeated use of active studying, not occasional office notes."
  },
  {
    "title": "Organizer value for consolidating study materials",
    "description": "We noted where combined storage helps students manage pens and materials on a small desk."
  }
];

export const introParagraphs = [
  "",
  "Dorm-room desk space is also usually shared or limited, so compact footprint matters more here than for a dedicated home office."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "desktop whiteboard for students";

export const metaDescription = "We compared 5 desktop whiteboards for students on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Desktop Whiteboards for Students (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b091y79cxz-studentwb",
    "rank": 1,
    "badge": "Best Budget Pick",
    "name": "Small Dry Erase Board, 10\" X 10\" Small Whiteboard with Stand, Portable Magnetic",
    "price": "$8.99",
    "rating": "4.6",
    "reviews": "307",
    "imageUrl": "https://m.media-amazon.com/images/I/41sEyXE5tML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B091Y79CXZ?tag=theofficejournal-20",
    "description": "The cheapest board in this comparison, portable and magnetic, ideal for a tight student budget and dorm-desk footprint.",
    "specs": [
      "10 x 10 in, portable, magnetic"
    ],
    "pros": [
      "Cheapest option in this comparison",
      "Portable if you need to move between study spaces"
    ],
    "cons": [
      "Small writing area compared to the larger picks"
    ],
    "bestFor": "Budget-conscious students with limited dorm-desk space."
  },
  {
    "id": "b0bvm9yjcs-studentwb",
    "rank": 2,
    "badge": "Best Overall",
    "name": "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    "price": "$18.99",
    "rating": "4.6",
    "reviews": "1,356",
    "imageUrl": "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVM9YJCS?tag=theofficejournal-20",
    "description": "The largest writing area in this comparison for study notes and practice problems, with a substantial review base backing its durability.",
    "specs": [
      "16 x 12 in, double-sided, magnetic"
    ],
    "pros": [
      "Largest writing area for study notes and practice work"
    ],
    "cons": [
      "Larger footprint may be tight on a small dorm desk"
    ],
    "bestFor": "Students who want the most study-note space and have adequate desk room."
  },
  {
    "id": "b0brzz26fs-studentwb",
    "rank": 3,
    "badge": "Best Value Large Board",
    "name": "Dry Erase White Board, Cazeyoo Magnetic Desktop Whiteboard 16 x 12inch",
    "price": "$16.99",
    "rating": "4.7",
    "reviews": "1,055",
    "imageUrl": "https://m.media-amazon.com/images/I/41+fn-v10QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRZZ26FS?tag=theofficejournal-20",
    "description": "Same 16x12 footprint as the AMUSIGHT pick above at a slightly lower price and marginally higher rating.",
    "specs": [
      "16 x 12 in, magnetic"
    ],
    "pros": [
      "Slightly cheaper than the AMUSIGHT equivalent with a higher rating"
    ],
    "cons": [
      "Smaller review base than the AMUSIGHT pick"
    ],
    "bestFor": "Students who want the same large size for slightly less money."
  },
  {
    "id": "b09phht8dm-studentwb",
    "rank": 4,
    "badge": "Best With Organizer for Study Materials",
    "name": "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    "price": "$24.99",
    "rating": "4.7",
    "reviews": "723",
    "imageUrl": "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PHHT8DM?tag=theofficejournal-20",
    "description": "Combines whiteboard and storage, useful for keeping pens, notes, and small study materials organized on a limited dorm desk.",
    "specs": [
      "Glass surface with organizer"
    ],
    "pros": [
      "Organizer helps consolidate study materials on a small desk"
    ],
    "cons": [
      "Highest price in this comparison, though still reasonable"
    ],
    "bestFor": "Students who want combined storage and writing surface on a tight desk."
  },
  {
    "id": "b0dmzyk585-studentwb",
    "rank": 5,
    "badge": "Best Budget Organizer",
    "name": "Amazon Basics Desktop Dry Erase Whiteboard with Organizer and Accessories",
    "price": "$15.74",
    "rating": "4.7",
    "reviews": "279",
    "imageUrl": "https://m.media-amazon.com/images/I/313bG76j1CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMZYK585?tag=theofficejournal-20",
    "description": "Organizer functionality at a lower price than the Varhomax option, a reasonable middle ground for budget-conscious students.",
    "specs": [
      "Dry erase surface with organizer accessories"
    ],
    "pros": [
      "Cheaper organizer option than the Varhomax pick"
    ],
    "cons": [
      "Smaller review base than the more established options"
    ],
    "bestFor": "Students who want organizer features without the higher Varhomax price."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-desktop-whiteboards-for-gre-and-toefl",
    "title": "Best Desktop Whiteboards for GRE and TOEFL (2026)"
  },
  {
    "href": "/guide/best-compact-desktop-whiteboards",
    "title": "Best Compact Desktop Whiteboards (2026)"
  },
  {
    "href": "/guide/best-desktop-whiteboards",
    "title": "Best Desktop Whiteboards (2026)"
  }
];

export const breadcrumbLabel = "Best Desktop Whiteboards for Students";
