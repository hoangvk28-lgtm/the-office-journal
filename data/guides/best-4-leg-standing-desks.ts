// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-4-leg-standing-desks";

export const guideTitle = "The Best Standing Desk Frames for Small Offices, and How to Spot a True 4-Leg Design";

export const breadcrumbLabel = "Best 4-Leg Standing Desks";

export const metaTitle = "Best 4-Leg Standing Desks and Frames: What to Know (2026)";

export const metaDescription = "Few listings confirm a genuine 4-leg frame. We compared eight standing desks, frames and a rolling cart on capacity, desktop fit and frame design, and explain how to check leg count.";

export const mainKeyword = "standing desk frame";

export const introParagraphs = [
  "If you're searching for a 4-leg standing desk, start with a caution: most listings never state the leg count. Terms like dual motor, T-shaped legs or 3-stage columns describe features of the common two-leg frame, not a four-leg design, and none of the eight listings in this guide confirms a genuine four-leg frame.",
  "That doesn't make them poor choices for a small office; it means the real comparison is capacity, desktop size, whether a top is included, and frame design. If a four-leg frame is a firm requirement, check the product photos for four independent columns and read the listing's questions and answers before buying.",
  "The picks below range from a rolling laptop cart to a full 55-inch desk with a bamboo top. Our comparison is based on published specifications and listing descriptions, not hands-on testing."
];

export const lastUpdated = "2026-07-25";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/41WJcV8uQrL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "huanuo-32-small-electric-standing-desk",
    "rank": 1,
    "badge": "Best for Very Small Spaces",
    "name": "HUANUO 32-inch Small Electric Standing Desk Adjustable Height, 4 Memory Height Settings",
    "price": "$75.99",
    "rating": "4.6 stars from 2,226 Amazon ratings",
    "reviews": "2,226 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9X3FDYY?tag=theofficejournal-20",
    "description": "The HUANUO 32-inch desk is the pick when space is the limit: it gives push-button height adjustment and 4 memory presets in a footprint small enough for a dorm room or a corner.\n\nIt comes in a light walnut finish option. The listing doesn't state a leg configuration or a weight capacity.\n\nA 32-inch top fits a laptop or one small monitor; for two screens or monitor arms, a larger frame with a stated capacity is the safer choice.",
    "specs": [
      "Desktop: 32\" wide",
      "Memory presets: 4",
      "Adjustment: electric",
      "Leg configuration: not stated",
      "Capacity: not stated in the listing summary"
    ],
    "pros": [
      "Very compact",
      "4 memory presets",
      "Low price at the time of writing"
    ],
    "cons": [
      "Small work surface",
      "No stated capacity",
      "Leg configuration not stated"
    ],
    "bestFor": "A laptop desk in a small room.",
    "summary": "A 32-inch electric desk with 4 memory presets for a dorm or tight corner.",
    "skipIf": "You use two monitors; the FLEXISPOT E6 or a frame with a stated capacity suits that better."
  },
  {
    "id": "topsky-dual-motor-standing-desk-frame",
    "rank": 2,
    "badge": "Best Value Frame Only",
    "name": "TOPSKY Dual Motor Electric Standing Desk Frame, Fits Table Tops up to 70.8 x 31.5 Inch",
    "price": "$150.99",
    "rating": "4.6 stars from 4,345 Amazon ratings",
    "reviews": "4,345 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31Wq-+TZNRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08C2LC3H2?tag=theofficejournal-20",
    "description": "The TOPSKY is a frame-only kit with a lot of range for its price: it fits desktops up to 70.8 x 31.5 inches and is rated for 225 lb.\n\nThe listing describes a dual-motor, two-leg C-frame design, one motor per leg.\n\nYou need to supply your own top, and a wide top needs floor space to match.",
    "specs": [
      "Type: frame only",
      "Desktop fit: up to 70.8 x 31.5\"",
      "Motors: dual",
      "Design: two-leg C-frame",
      "Capacity: 225 lb"
    ],
    "pros": [
      "225 lb capacity",
      "Wide desktop range",
      "Dual motors"
    ],
    "cons": [
      "No desktop included",
      "Two-leg design",
      "Needs space for a large top"
    ],
    "bestFor": "Reusing a desktop you already own, up to about 70 inches wide.",
    "summary": "A dual-motor two-leg frame for tops up to 70.8 x 31.5 inches, rated for 225 lb.",
    "skipIf": "You want a top included; the FLEXISPOT E6 is a complete desk."
  },
  {
    "id": "furmax-electric-standing-desk",
    "rank": 3,
    "badge": "Best Complete Desk for Less",
    "name": "Furmax Electric Standing Desk, 45 x 24 Inches, 4 Height Position Memory",
    "price": "$79.99",
    "rating": "4.6 stars from 222 Amazon ratings",
    "reviews": "222 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41XkTgfpQgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FK3DD4F1?tag=theofficejournal-20",
    "description": "The Furmax is the simplest complete desk here: a 45 x 24-inch top in rustic brown, electric adjustment and 4 memory presets in one box, at a low price at the time of writing.\n\nAt 45 inches, it sits between the compact HUANUO and full-size desks.\n\nThe listing doesn't state a leg configuration or capacity, and it has less buyer feedback than several picks here.",
    "specs": [
      "Desktop: 45 x 24\", included",
      "Memory presets: 4",
      "Finish: rustic brown",
      "Leg configuration: not stated"
    ],
    "pros": [
      "Top included",
      "Mid-size footprint",
      "Low price"
    ],
    "cons": [
      "No stated capacity",
      "Leg configuration not stated",
      "Less buyer feedback"
    ],
    "bestFor": "A complete small-office desk without sourcing a top.",
    "summary": "A complete 45 x 24-inch electric desk with top and 4 memory presets.",
    "skipIf": "You want a stated capacity; the FLEXISPOT E6 lists 220 lb."
  },
  {
    "id": "ergear-dual-motor-standing-desk-legs",
    "rank": 4,
    "badge": "Best for Wide Desktops",
    "name": "ErGear Dual Motor Standing Desk Legs for 44-90 inch Desktops, 264 lbs",
    "price": "$169.98",
    "rating": "4.7 stars from 547 Amazon ratings",
    "reviews": "547 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41S5Krgo22L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQNV8WBS?tag=theofficejournal-20",
    "description": "The ErGear frame covers the widest range of desktops, 44 to 90 inches, and has the highest capacity here at 264 lb.\n\nIts leg width adjusts to suit the top. It is a dual-motor frame without a desktop.\n\nMatch the frame width to your top rather than stretching to the extremes of the range. Like the other dual-motor frames, it is not described as a four-leg design.",
    "specs": [
      "Type: frame only",
      "Desktop fit: 44–90\"",
      "Capacity: 264 lb",
      "Motors: dual",
      "Adjustable width"
    ],
    "pros": [
      "Highest capacity here",
      "Widest desktop range",
      "Adjustable width"
    ],
    "cons": [
      "No desktop included",
      "Two-leg design",
      "Costs more than the TOPSKY"
    ],
    "bestFor": "Large or heavy desktops, or a top you plan to upgrade later.",
    "summary": "A dual-motor frame for 44- to 90-inch desktops, rated for 264 lb, the highest here.",
    "skipIf": "Your desk is small; the HUANUO or Furmax is a better fit."
  },
  {
    "id": "huanuo-t-shaped-standing-desk-frame",
    "rank": 5,
    "badge": "Best Frame for Stability on a Budget",
    "name": "HUANUO Standing Desk Frame with 220lbs Brushless Motor, T-Shaped Legs, for Max 75 x 35 Desktop",
    "price": "$107.34",
    "rating": "4.7 stars from 353 Amazon ratings",
    "reviews": "353 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/312SqhEUIaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D21VTP3R?tag=theofficejournal-20",
    "description": "The HUANUO T-shaped frame puts its stability into the feet: T-shaped legs spread the base on a two-leg frame. It fits tops up to 75 x 35 inches and uses a brushless motor rated for 220 lb.\n\nHUANUO describes the steel as automotive-grade.\n\nT-shaped feet are not the same as four legs. On uneven floors, check that the feet have leveling adjustment.",
    "specs": [
      "Type: frame only",
      "Legs: T-shaped, two-leg frame",
      "Motor: brushless",
      "Capacity: 220 lb",
      "Desktop fit: up to 75 x 35\""
    ],
    "pros": [
      "T-shaped base",
      "Brushless motor",
      "Large desktop range"
    ],
    "cons": [
      "Two-leg design",
      "No desktop included",
      "Check leveling for uneven floors"
    ],
    "bestFor": "A frame-only build where a wider footprint at the feet matters.",
    "summary": "A T-leg steel frame with a brushless motor, rated for 220 lb and tops up to 75 x 35 inches.",
    "skipIf": "You need more than 220 lb; the ErGear is rated for 264 lb."
  },
  {
    "id": "flexispot-e6-standing-desk",
    "rank": 6,
    "badge": "Best Complete Desk",
    "name": "FLEXISPOT E6 3-Stage Dual Motor Electric Standing Desk, 55 x 28, Black Desktop and Frame",
    "price": "$284.99",
    "rating": "4.4 stars from 311 Amazon ratings",
    "reviews": "311 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41WJcV8uQrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVQMQMY2?tag=theofficejournal-20",
    "description": "The FLEXISPOT E6 is the complete desk to choose if you want a full-size setup: a 55 x 28-inch top on a 3-stage dual-motor frame, rated for 220 lb, with memory presets.\n\nThe 3-stage columns give a wider height range than 2-stage frames; they are not extra legs, and the frame is a two-leg design.\n\nIt ships in two boxes and is more involved to assemble than the simpler desks, easier with a second person. It costs considerably more than the Furmax.",
    "specs": [
      "Desktop: 55 x 28\", included",
      "Frame: 3-stage, dual motor, two-leg",
      "Capacity: 220 lb",
      "Memory presets: yes",
      "Ships in 2 boxes"
    ],
    "pros": [
      "Complete full-size desk",
      "3-stage height range",
      "220 lb capacity"
    ],
    "cons": [
      "Costs more than smaller desks",
      "Involved assembly",
      "Two-leg design"
    ],
    "bestFor": "A full-size home-office desk with room for two monitors.",
    "summary": "A 55 x 28-inch desk on a 3-stage dual-motor frame, rated for 220 lb.",
    "skipIf": "Your room is small; the Furmax is 45 inches wide."
  },
  {
    "id": "flexispot-e6-bamboo-standing-desk",
    "rank": 7,
    "badge": "Best Bamboo Top",
    "name": "FlexiSpot E6 Bamboo 3-Stage Dual Motor Electric Standing Desk, 55 x 28, Solid Bamboo Desktop",
    "price": "$329.99",
    "rating": "4.4 stars from 763 Amazon ratings",
    "reviews": "763 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41PnkwnA3VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09DYF1SRQ?tag=theofficejournal-20",
    "description": "The E6 Bamboo is the same 3-stage dual-motor frame and 220 lb rating as the standard E6, with a solid bamboo top in place of the laminate, on a white frame.\n\nThe bamboo is the reason to pay more: a warmer, natural surface.\n\nIt was the most expensive desk here at the time of writing and has the same two-box, two-person assembly as the standard E6.",
    "specs": [
      "Desktop: 55 x 28\", solid bamboo",
      "Frame: 3-stage, dual motor, two-leg, white",
      "Capacity: 220 lb",
      "Ships in 2 boxes"
    ],
    "pros": [
      "Solid bamboo top",
      "Same frame as the E6",
      "White frame"
    ],
    "cons": [
      "Most expensive here at the time of writing",
      "Involved assembly",
      "Two-leg design"
    ],
    "bestFor": "A natural-wood look on a full-size desk.",
    "summary": "The FLEXISPOT E6 frame with a solid bamboo top and white frame.",
    "skipIf": "The surface finish isn't important; the standard E6 is the same frame for less."
  },
  {
    "id": "techni-mobili-rolling-laptop-cart",
    "rank": 8,
    "badge": "Rolling Cart Alternative",
    "name": "Techni Mobili Sit-to-Stand Rolling Adjustable Height Laptop Cart with Storage",
    "price": "$28.80",
    "rating": "4.5 stars from 7,239 Amazon ratings",
    "reviews": "7,239 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31+f1oDDjoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B003M96GY0?tag=theofficejournal-20",
    "description": "The Techni Mobili is not a desk frame at all: it is a rolling laptop cart on casters with manual sit-to-stand height adjustment and built-in storage, 22 x 16 x 46 inches in graphite.\n\nIt costs a fraction of any frame here, moves between rooms and has an extensive base of buyer feedback.\n\nIt suits a laptop and light accessories, not a monitor setup, and a cart on casters won't be as steady as a fixed desk.",
    "specs": [
      "Type: rolling cart on casters",
      "Adjustment: manual",
      "Storage: built in",
      "Footprint: 22 x 16 x 46\""
    ],
    "pros": [
      "Lowest price here",
      "Mobile",
      "Built-in storage"
    ],
    "cons": [
      "Not a desk frame",
      "Laptop only",
      "Less steady than a fixed desk"
    ],
    "bestFor": "A laptop that moves between rooms.",
    "summary": "A rolling sit-to-stand laptop cart with storage, at a fraction of a desk's price.",
    "skipIf": "You need a fixed desk for a monitor; the Furmax is the lowest-cost complete desk here."
  }
];

export const howWeEvaluated = [
  {
    "title": "Frame design",
    "description": "We read each listing for leg configuration and flagged where it isn't stated."
  },
  {
    "title": "Capacity and desktop fit",
    "description": "We compared stated capacities and desktop size ranges."
  },
  {
    "title": "Completeness",
    "description": "We noted whether a top is included and what assembly involves where listed."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Verify leg count yourself",
    "explanation": "Look at product photos for four independent columns and read the listing's questions and answers. Don't infer four legs from dual motors, T-shaped feet or 3-stage columns."
  },
  {
    "criterion": "Check the stated capacity",
    "explanation": "Capacities here range from 220 to 264 lb where stated; several listings don't give one. Monitor arms and heavy screens add load at the edge of the desk."
  },
  {
    "criterion": "Frame only or complete desk",
    "explanation": "Frame-only kits (TOPSKY, ErGear, HUANUO T-leg) need your own top; the HUANUO 32-inch, Furmax and FLEXISPOT E6 include one."
  },
  {
    "criterion": "Size to your room",
    "explanation": "Tops here range from 32 to 55 inches, and frames support tops up to 90 inches. Measure the space, including room to stand."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By situation",
    "table": {
      "headers": [
        "Situation",
        "Consider"
      ],
      "rows": [
        [
          "Very small room",
          "HUANUO 32-inch"
        ],
        [
          "Complete desk for less",
          "Furmax 45 x 24"
        ],
        [
          "Full-size complete desk",
          "FLEXISPOT E6 (or E6 Bamboo)"
        ],
        [
          "Frame for your own top",
          "TOPSKY or HUANUO T-leg"
        ],
        [
          "Very wide or heavy top",
          "ErGear 44–90\""
        ],
        [
          "Laptop that moves around",
          "Techni Mobili cart"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Are any of these confirmed 4-leg desks?",
    "a": "No. None of the eight listings confirms a genuine four-leg frame. If that's essential, check product photos and listing questions before buying."
  },
  {
    "q": "How can I tell leg count from a listing?",
    "a": "Look for four separate vertical columns in the photos, and check the questions and answers. Dual motors, T-shaped feet and 3-stage columns usually describe two-leg frames."
  },
  {
    "q": "Is the Techni Mobili a standing desk?",
    "a": "It is a rolling laptop cart with manual height adjustment, not a fixed desk frame. It suits laptop-only use."
  },
  {
    "q": "Does higher capacity mean less wobble?",
    "a": "Not necessarily. Capacity describes load, not stability at full height. Frame design, column stages and desktop size all affect wobble."
  },
  {
    "q": "How long does assembly take?",
    "a": "It varies. Complete desks shipped in two boxes, like the FLEXISPOT E6, involve more parts and are easier with two people."
  }
];

export const bottomLine = [
  "If you specifically want four legs, verify it from photos; none of these listings confirms it. For a small office, the Furmax is a low-cost complete desk, the HUANUO 32-inch fits the tightest spaces, and the FLEXISPOT E6 is the full-size option with a stated 220 lb capacity.",
  "If you have your own top, the TOPSKY is the value frame, the HUANUO T-leg adds a wider base, and the ErGear handles the widest and heaviest tops. The Techni Mobili cart is the alternative for a laptop that moves."
];

export const sectionHeadings = {
  "howWeChose": "How We Chose These Desks and Frames",
  "whatToLookFor": "What to Look for in a Standing Desk Frame",
  "howToChoose": "How to Choose a Frame for a Small Office"
};

export const relatedGuides = [
  {
    "href": "/guide/best-standing-desk-under-300",
    "title": "Best Standing Desks Under $300 (2026)"
  },
  {
    "href": "/guide/best-standing-desk-with-drawers",
    "title": "Best Standing Desks with Drawers (2026)"
  },
  {
    "href": "/guide/best-corner-standing-desk",
    "title": "Best Corner Standing Desks (2026)"
  },
  {
    "href": "/guide/best-electric-standing-desk",
    "title": "Best Electric Standing Desks (2026)"
  }
];
