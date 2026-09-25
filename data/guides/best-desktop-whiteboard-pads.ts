// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Confirm the product is flat or low-angle, not upright",
    "explanation": "This guide is limited to pad-style products for in-front-of-keyboard placement, not freestanding upright boards."
  },
  {
    "criterion": "Weigh paper pad cost against glass durability",
    "explanation": "Paper pads are cheaper but wear faster over repeated erasing than a glass surface."
  },
  {
    "criterion": "Check double-sided for more writing area",
    "explanation": "Some pads are double-sided, effectively doubling usable writing space within the same footprint."
  },
  {
    "criterion": "Consider desk depth used by the specific placement",
    "explanation": "Larger pads (9x12 in) use more desk depth in front of your keyboard than smaller ones (5x7 in)."
  },
  {
    "criterion": "Use review volume for confidence in durability claims",
    "explanation": ""
  }
];

export const faq = [
  {
    "q": "How is a pad different from an upright whiteboard?",
    "a": "A pad lies flat or at a low angle in front of your keyboard, rather than standing upright on its own base, which changes wrist posture and desk depth used."
  },
  {
    "q": "Should I get a paper pad or glass?",
    "a": "Paper pads are cheaper but wear faster over repeated use. Glass costs more but resists ghosting better long-term."
  },
  {
    "q": "",
    "a": ""
  },
  {
    "q": "Which has the most writing area?",
    "a": "The Scribbledo 9x12 double-sided board, which offers the most usable space within the flat-pad format."
  },
  {
    "q": "Which has the highest rating?",
    "a": ""
  }
];

export const guideSlug = "best-desktop-whiteboard-pads";

export const guideTitle = "The Best Desktop Whiteboard Pads for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/41fFLL-HlwL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Cheapest option, flat, but wears faster than glass over repeated use."
      },
      {
        "label": "Glass low-angle (TSJ, Mini Pure Glass)",
        "text": "Better long-term ghosting resistance, at a moderate price increase."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Flat or low-angle placement only",
    "description": "We excluded freestanding upright boards, keeping this comparison to products that sit flat or at a low angle in front of a keyboard."
  },
  {
    "title": "",
    "description": "We compared cheaper paper-pad products against glass surfaces, noting glass's better long-term ghosting resistance versus the paper pads' lower cost."
  },
  {
    "title": "Writing area within the low-profile format",
    "description": "We noted where double-sided or larger pads offer more usable writing area within the same flat-format constraint."
  },
  {
    "title": "Review volume as reliability evidence",
    "description": "We weighted established review history for confidence in each specific product's durability and quality."
  }
];

export const introParagraphs = [
  "A pad-style whiteboard lies flat or at a low angle in front of your keyboard, which is a different placement than an upright stand-mounted board — it affects wrist posture and how much desk depth it takes up.",
  "We excluded freestanding upright boards from this list entirely, since those belong in a different use case with different clearance considerations."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "desktop whiteboard pad";

export const metaDescription = "A practical comparison of 5 desktop whiteboard pads, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Desktop Whiteboard Pads for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0c8777yjq-padwb",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Scribbledo Mini Dry Erase Notepad 5x7, Lined Whiteboard Memo, 2 Pack",
    "price": "$8.99",
    "rating": "4.7",
    "reviews": "1,027",
    "imageUrl": "https://m.media-amazon.com/images/I/41fFLL-HlwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C8777YJQ?tag=theofficejournal-20",
    "description": "A genuine flat pad format at 5x7 inches, lined for structured notes, and cheap enough that a 2-pack costs less than most single upright boards.",
    "specs": [
      "5x7 in, flat pad format",
      "Lined surface",
      "2-pack"
    ],
    "pros": [
      "Cheapest option, and you get two",
      "flat, low-profile design"
    ],
    "cons": [
      "Small writing area per pad"
    ],
    "bestFor": "Buyers who want the cheapest genuine flat pad option."
  },
  {
    "id": "b0b72f9vjq-padwb",
    "rank": 2,
    "badge": "Best Larger Pad Format",
    "name": "Scribbledo Dry Erase Board with Lines for Desk, 9x12 Notebook, Double Sided",
    "price": "$8.99",
    "rating": "4.7",
    "reviews": "1,027",
    "imageUrl": "https://m.media-amazon.com/images/I/418NG2kDqiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B72F9VJQ?tag=theofficejournal-20",
    "description": "Same brand and price as the pick above but larger (9x12 in) and double-sided, giving more usable writing area in the same flat-pad format.",
    "specs": [
      "9x12 in, double-sided",
      "Lined surface"
    ],
    "pros": [
      "More writing area than the 5x7 pad at the same price",
      "Double-sided doubles usable space"
    ],
    "cons": [
      "Larger footprint means more desk depth used"
    ],
    "bestFor": "Buyers who want more writing room in the same low-profile pad format."
  },
  {
    "id": "b0f5lzxs3w-padwb",
    "rank": 3,
    "badge": "Best Low-Profile Board With Stand",
    "name": "Lumspax Small Desktop White Board with Stand, 10\" x 10\" Double-Sided",
    "price": "$9.99",
    "rating": "4.6",
    "reviews": "212",
    "imageUrl": "https://m.media-amazon.com/images/I/31YDQS8Gh1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5LZXS3W?tag=theofficejournal-20",
    "description": "Includes a low-profile stand rather than lying completely flat, useful if you want the pad slightly elevated for visibility without a full upright placement.",
    "specs": [
      "10 x 10 in, double-sided",
      "Low-profile stand"
    ],
    "pros": [
      "Stand gives slight elevation for visibility without full upright placement"
    ],
    "cons": [
      "Smaller review base than the Scribbledo pads above"
    ],
    "bestFor": "Buyers who want a middle ground between flat and fully upright placement."
  },
  {
    "id": "b09k7g5vw8-padwb",
    "rank": 4,
    "badge": "Best Glass Low-Angle Option",
    "name": "Small Glass Desktop Whiteboard Dry-Erase, Mini Pure Glass Whiteboard Stand",
    "price": "$14.44",
    "rating": "4.6",
    "reviews": "1,254",
    "imageUrl": "https://m.media-amazon.com/images/I/31noWsDrPcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09K7G5VW8?tag=theofficejournal-20",
    "description": "A glass surface with a low-angle stand rather than a paper pad, resisting ghosting better than the paper-based options while still sitting close to keyboard level.",
    "specs": [
      "Glass surface, low-angle stand"
    ],
    "pros": [
      "Glass resists ghosting better than paper-based pads over time"
    ],
    "cons": [
      "More expensive than the flat paper pad options"
    ],
    "bestFor": "Buyers who want a low-angle glass surface rather than a paper pad."
  },
  {
    "id": "b09mz5zd4n-padwb",
    "rank": 5,
    "badge": "Smallest Glass Option",
    "name": "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    "price": "$16.99",
    "rating": "4.7",
    "reviews": "1,191",
    "imageUrl": "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MZ5ZD4N?tag=theofficejournal-20",
    "description": "The smallest glass option in this comparison, with the highest rating, for buyers who want minimal desk footprint even in a low-profile glass format.",
    "specs": [
      "8 x 6 in, glass surface"
    ],
    "pros": [
      "Highest rating of any pick in this comparison",
      "Smallest glass footprint"
    ],
    "cons": [
      "Smallest writing area of the low-profile options here"
    ],
    "bestFor": "Buyers who want the smallest low-profile glass footprint."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-compact-desktop-whiteboards",
    "title": "Best Compact Desktop Whiteboards (2026)"
  },
  {
    "href": "/guide/best-freestanding-desktop-whiteboards",
    "title": "Best Freestanding Desktop Whiteboards (2026)"
  },
  {
    "href": "/guide/best-desktop-whiteboards",
    "title": "Best Desktop Whiteboards (2026)"
  }
];

export const breadcrumbLabel = "Best Desktop Whiteboard Pads";
