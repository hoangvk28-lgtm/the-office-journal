// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-office-chair-for-short-people";

export const guideTitle = "The Best Office Chairs for Shorter People";

export const breadcrumbLabel = "Best Office Chairs for Short People";

export const metaTitle = "Best Office Chairs for Short People: Low Seat Heights (2026)";

export const metaDescription = "We compared office chairs for shorter people on minimum seat height, seat depth, lumbar position and armrests, from budget mesh chairs to a petite-specific design.";

export const introParagraphs = [
  "For shorter people, the chair's lowest setting matters more than its highest. If the seat can't drop far enough for your feet to rest flat, you end up perched on the front edge, away from the backrest and its lumbar support.",
  "Seat depth is the second problem. A seat pan sized for an average adult can press behind the knees of a shorter sitter, which pushes you forward again. Adjustable seat depth, or a seat that is simply shallower, addresses it.",
  "The eight chairs below all reach 16.5 inches or lower at their minimum, and range from under $40 to about $350 at the time of writing. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-11";

export const readTime = "10 min";

export const heroImage = "/images/guides/best-office-chair-for-short-people/hero.webp";

export const products: GuideProduct[] = [
  {
    "id": "bestoffice-budget-short",
    "rank": 1,
    "badge": "Best Budget Choice",
    "name": "BestOffice Ergonomic Office Chair",
    "price": "$38.99",
    "rating": "4.3 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/71cMYhSQ8+L._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQDM23S4?tag=theofficejournal-20",
    "description": "The BestOffice is the lowest-cost way here to get a seat that drops to 15.7 inches, with a compact 17.3-inch-wide seat and a mesh back.\n\nThat low minimum is the key feature for shorter users, and the stated 250 lb capacity and adjustable armrests cover the basics. Lumbar support comes from a cushion, which you can at least reposition by hand.\n\nAdjustment is limited beyond height, and the build is basic. For seat-depth adjustment, the SIHOO B100 is the step up.",
    "specs": [
      "Seat height: 15.7–19.3\"",
      "Seat width: 17.3\"",
      "Lumbar: cushion",
      "Back: mesh",
      "Armrests: adjustable",
      "Weight capacity: 250 lb"
    ],
    "pros": [
      "Low 15.7-inch minimum seat height",
      "Compact seat width",
      "Lowest price tier here"
    ],
    "cons": [
      "Basic build",
      "Lumbar is a cushion",
      "Little adjustment beyond height"
    ],
    "bestFor": "Shorter people on a tight budget who mainly need a seat that goes low enough.",
    "summary": "A 15.7-inch minimum seat height, a 17.3-inch-wide seat and a mesh back for under $40.",
    "skipIf": "The seat is too deep for you on current chairs; the SIHOO B100's seat-depth adjustment addresses that."
  },
  {
    "id": "neo-chair-certified-short",
    "rank": 2,
    "badge": "Best Certified Budget",
    "name": "NEO CHAIR Office Chair",
    "price": "$36.98",
    "rating": "4.3 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/71YwSR6jIoL._AC_SL1250_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXGB6L96?tag=theofficejournal-20",
    "description": "The NEO CHAIR goes slightly lower than the BestOffice, to 15.5 inches, and lists BIFMA certification, an industry standard for office furniture that few chairs at this price mention.\n\nIt has a mesh back, lumbar support, adjustable armrests and tilt. Its 18.9-inch maximum is low, which suits shorter users but limits who else can share it.\n\nPadding is minimal and lumbar adjustment is limited.",
    "specs": [
      "Seat height: 15.5–18.9\"",
      "Back: mesh",
      "Lumbar: built-in support",
      "Armrests: adjustable",
      "BIFMA certified (per listing)"
    ],
    "pros": [
      "15.5-inch minimum seat height",
      "BIFMA certification listed",
      "Very low price"
    ],
    "cons": [
      "Minimal padding",
      "Limited lumbar adjustment",
      "Low maximum height if the chair is shared"
    ],
    "bestFor": "Shorter people who want a very low-cost chair with a listed industry certification.",
    "summary": "A 15.5-inch minimum seat and BIFMA certification listed, at a budget price.",
    "skipIf": "You want adjustable lumbar; the HeroSet or Brick Attic offers it for a little more."
  },
  {
    "id": "heroset-leather-short",
    "rank": 3,
    "badge": "Best Leather-Style",
    "name": "HeroSet High-Back Leather Office Chair",
    "price": "$99.99",
    "rating": "4.6 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/81LG+VImyTL._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4C4GPKB?tag=theofficejournal-20",
    "description": "The HeroSet suits shorter people who want a leather-style executive look: it combines PU leather and a high backrest with a 14.6-inch minimum seat height, one of the two lowest here.\n\nIt adds adjustable lumbar, 2D armrests and a stated 250 lb capacity at a moderate price. Adjustable lumbar matters for shorter torsos, since fixed lumbar is positioned for an average back.\n\nPU leather holds more heat than mesh, and the listing doesn't mention seat-depth adjustment.",
    "specs": [
      "Seat height: 14.6–18.5\"",
      "Upholstery: PU leather",
      "Back: high backrest",
      "Lumbar: adjustable",
      "Armrests: 2D",
      "Weight capacity: 250 lb"
    ],
    "pros": [
      "Very low 14.6-inch minimum",
      "Adjustable lumbar",
      "Leather-style look at a moderate price"
    ],
    "cons": [
      "PU leather is warmer than mesh",
      "No seat-depth adjustment listed",
      "2D armrests"
    ],
    "bestFor": "Shorter people who want a professional leather look and a very low seat.",
    "summary": "A PU leather high-back chair that drops to 14.6 inches, with adjustable lumbar.",
    "skipIf": "You run warm; the Brick Attic offers a mesh back and lumbar at the same price."
  },
  {
    "id": "brick-attic-short",
    "rank": 4,
    "badge": "Best Compact Seat",
    "name": "Brick Attic Ergonomic Office Chair",
    "price": "$99.99",
    "rating": "4.3 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/81R1fahxU2L._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3KYSY3F?tag=theofficejournal-20",
    "description": "The Brick Attic is built around the seat-depth problem: its listing describes a compact seat depth intended to keep the front edge from pressing behind shorter users' knees.\n\nIt pairs that with a 15-inch minimum seat height, adjustable lumbar, a headrest and a mesh back at a moderate price, which makes it a well-rounded option if you can't adjust seat depth on your current chair.\n\nThe arms are 2D flip-up, so they fold away but offer limited adjustment. The listing gives no depth measurement, so compare its dimensions with your thigh length if you can.",
    "specs": [
      "Seat height: 15–19\"",
      "Seat depth: compact (not quantified)",
      "Lumbar: adjustable",
      "Headrest: yes",
      "Back: mesh",
      "Armrests: 2D flip-up"
    ],
    "pros": [
      "Compact seat depth for shorter legs",
      "Adjustable lumbar and headrest",
      "Mesh back at a moderate price"
    ],
    "cons": [
      "Seat depth isn't quantified",
      "Flip-up arms with limited adjustment",
      "No stated warranty"
    ],
    "bestFor": "Shorter people whose knees press against the front edge of standard seats.",
    "summary": "A compact seat depth, adjustable lumbar and a headrest for about $100.",
    "skipIf": "You want adjustable rather than fixed compact depth; the SIHOO B100 lets you set it."
  },
  {
    "id": "gtplayer-gaming-short",
    "rank": 5,
    "badge": "Best Gaming-Style",
    "name": "GTPLAYER Gaming Chair",
    "price": "$113.34",
    "rating": "4.3 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/71oIVTS7MrL._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5GRYWTJ?tag=theofficejournal-20",
    "description": "The GTPLAYER is for shorter people who prefer a gaming-style chair: it reaches 15.5 inches, reclines, and comes with lumbar and headrest pillows.\n\nIt also carries a stated 300 lb capacity, higher than most chairs here, and adjustable armrests. The pillows can be repositioned by hand, which helps when a fixed lumbar sits too high for a shorter back.\n\nThe PU leather gaming look won't suit every room, and it holds more heat than mesh. Seat depth isn't listed.",
    "specs": [
      "Seat height: 15.5–19.5\"",
      "Upholstery: PU leather",
      "Lumbar and headrest: pillows",
      "Recline: yes",
      "Armrests: adjustable",
      "Weight capacity: 300 lb"
    ],
    "pros": [
      "15.5-inch minimum seat height",
      "Movable lumbar pillow",
      "300 lb capacity"
    ],
    "cons": [
      "Gaming look won't suit every room",
      "PU leather holds heat",
      "Seat depth isn't listed"
    ],
    "bestFor": "Shorter people who want a reclining gaming-style chair with a low seat.",
    "summary": "A gaming-style chair with a 15.5-inch minimum, recline and a 300 lb rating.",
    "skipIf": "You want a quieter office look; the Brick Attic or SIHOO B100 is the better fit."
  },
  {
    "id": "comhoma-swing-short",
    "rank": 6,
    "badge": "Best Rocking Option",
    "name": "COMHOMA Office Chair with Swing Mode",
    "price": "$79.99",
    "rating": "4.6 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/717Tlu+mQKL._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR8W9CS1?tag=theofficejournal-20",
    "description": "The COMHOMA's distinguishing feature is a swing mode that lets the chair rock gently, which COMHOMA presents as a way to move while you work.\n\nFor shorter users, it also reaches 15.4 inches, has a mesh back, a lumbar cushion and adjustable armrests, and lists a 250 lb capacity at a low price.\n\nWhether you want a chair that rocks is personal, and it may not suit a shared or quiet space. Lumbar support is a cushion rather than adjustable.",
    "specs": [
      "Seat height: 15.4–18.9\"",
      "Swing / rocking mode",
      "Back: mesh",
      "Lumbar: cushion",
      "Armrests: adjustable",
      "Weight capacity: 250 lb"
    ],
    "pros": [
      "Low 15.4-inch minimum",
      "Swing mode for movement",
      "Low price"
    ],
    "cons": [
      "Rocking isn't for everyone",
      "Lumbar is a cushion",
      "Low maximum height if shared"
    ],
    "bestFor": "Shorter people who like to move in their chair and want to stay on a small budget.",
    "summary": "A 15.4-inch minimum seat with a swing mode for gentle rocking.",
    "skipIf": "You prefer a stable seat; the Brick Attic costs a little more and adds adjustable lumbar."
  },
  {
    "id": "sihoo-b100-short",
    "rank": 7,
    "badge": "Best Seat-Depth Adjustment",
    "name": "SIHOO B100 Ergonomic Office Chair",
    "price": "$159.99",
    "rating": "4.2 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/71TkxS-LUHL._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G5WQ65P2?tag=theofficejournal-20",
    "description": "The SIHOO B100 addresses the seat-depth problem directly: its seat depth adjusts, so you can shorten it until the front edge clears the back of your knees with your back against the lumbar.\n\nIt adds adjustable lumbar, a headrest, a mesh back and a stated three-year warranty at a mid-range price, which makes it the most complete ergonomic option here short of the TopJob Mochi.\n\nIts 16.5-inch minimum is the highest in this guide. For the shortest users, or at a desk above standard height, that may still be too high without a footrest.",
    "specs": [
      "Seat height: 16.5–20.5\"",
      "Seat depth: adjustable",
      "Lumbar: adjustable",
      "Headrest: yes",
      "Back: mesh",
      "Warranty: 3 years"
    ],
    "pros": [
      "Adjustable seat depth",
      "Adjustable lumbar and headrest",
      "Three-year warranty"
    ],
    "cons": [
      "Highest minimum seat height here",
      "Costs more than the budget picks",
      "May need a footrest for the shortest users"
    ],
    "bestFor": "Shorter people whose main issue is seat depth rather than seat height.",
    "summary": "Adjustable seat depth, adjustable lumbar, a headrest and a three-year warranty.",
    "skipIf": "You need the lowest possible seat; the TopJob Mochi or HeroSet goes lower."
  },
  {
    "id": "topjob-mochi-petite",
    "rank": 8,
    "badge": "Best Petite-Specific Design",
    "name": "TopJob Mochi Petite Office Chair",
    "price": "$349.00",
    "rating": "4.2 stars",
    "reviews": "Verified ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/71rKDjDjbBL._AC_SL1500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9W7C2H5?tag=theofficejournal-20",
    "description": "The TopJob Mochi is the only chair here designed specifically for petite users rather than adapted from a standard size: TopJob sizes the seat depth, seat width and backrest height for smaller frames.\n\nIt also has the lowest minimum seat height in this guide, 14.5 inches, plus adjustable lumbar, 3D armrests and a five-year warranty, the longest here.\n\nIt is the most expensive chair in the guide, and its smaller dimensions are unlikely to suit a household where people of different sizes share one chair.",
    "specs": [
      "Seat height: 14.5–18.5\"",
      "Seat and back: sized for petite users",
      "Lumbar: adjustable",
      "Armrests: 3D",
      "Warranty: 5 years"
    ],
    "pros": [
      "Lowest minimum seat height here",
      "Seat and backrest sized for petite frames",
      "Five-year warranty"
    ],
    "cons": [
      "Most expensive chair in this guide",
      "Less suitable for shared use",
      "Weight capacity isn't listed"
    ],
    "bestFor": "Petite users who want a chair sized for them throughout, not just a low seat.",
    "summary": "A chair sized for petite users, with a 14.5-inch minimum, 3D arms and a five-year warranty.",
    "skipIf": "The chair will be shared with taller people; the SIHOO B100's adjustable depth is more flexible."
  }
];

export const howWeEvaluated = [
  {
    "title": "Minimum seat height",
    "description": "We compared listed minimum seat heights, since reaching the floor is the first requirement for shorter users."
  },
  {
    "title": "Seat depth",
    "description": "We noted adjustable seat depth and seats described as compact or petite-sized."
  },
  {
    "title": "Lumbar",
    "description": "We compared adjustable lumbar, movable pillows and cushions."
  },
  {
    "title": "Adjustment and warranty",
    "description": "We recorded armrest type, recline and stated warranty."
  },
  {
    "title": "Price position",
    "description": "We compared what each price step adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Start with the minimum seat height",
    "explanation": "A common guideline is to sit with your feet flat on the floor, thighs roughly level and elbows near desk height. Compare the chair's minimum seat height with your own seated height, measured from the floor to the back of your knee with your feet flat. In this guide, minimums range from 14.5 inches (TopJob Mochi) to 16.5 inches (SIHOO B100)."
  },
  {
    "criterion": "Check seat depth",
    "explanation": "If the seat is too deep, the front edge presses behind your knees and pushes you forward, away from the backrest. The SIHOO B100 has adjustable seat depth, the TopJob Mochi is sized for petite users, and the Brick Attic describes a compact seat."
  },
  {
    "criterion": "Look for lumbar you can move",
    "explanation": "Fixed lumbar is positioned for an average torso and may sit too high on a shorter back. Adjustable lumbar, or a movable cushion or pillow, lets you place support where you need it."
  },
  {
    "criterion": "Consider your desk height",
    "explanation": "If your desk is taller than about 29 to 30 inches, you may need to raise the chair to reach it, which lifts your feet. In that case a footrest, or a keyboard tray that lowers the work surface, can help."
  },
  {
    "criterion": "Think about who else uses the chair",
    "explanation": "Chairs with low maximum heights, or petite-specific sizing, suit one shorter user well but may not work for taller people in the same household."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By the problem you have",
    "table": {
      "headers": [
        "Problem",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Feet don't reach the floor",
          "TopJob Mochi or HeroSet",
          "Lowest minimum seat heights here"
        ],
        [
          "Seat edge presses behind your knees",
          "SIHOO B100 or Brick Attic",
          "Adjustable or compact seat depth"
        ],
        [
          "Lumbar sits too high",
          "HeroSet, Brick Attic or SIHOO B100",
          "Adjustable lumbar"
        ],
        [
          "A chair sized for you throughout",
          "TopJob Mochi",
          "Petite-specific design"
        ],
        [
          "Tight budget",
          "BestOffice or NEO CHAIR",
          "Low seat heights for under $40"
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
        "Chairs"
      ],
      "rows": [
        [
          "Under $40",
          "NEO CHAIR, BestOffice"
        ],
        [
          "About $80–$115",
          "COMHOMA, HeroSet, Brick Attic, GTPLAYER"
        ],
        [
          "About $160",
          "SIHOO B100"
        ],
        [
          "About $350",
          "TopJob Mochi"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What seat height do I need?",
    "a": "It depends on your leg length and desk, not height alone. Sit with your feet flat and measure from the floor to the back of your knee; a chair whose minimum is at or below that figure should let your feet rest flat."
  },
  {
    "q": "Do I need a footrest if I'm short?",
    "a": "If your chair can't go low enough, or you raise it to reach a tall desk, a footrest supports your feet at the right height. It is a practical fix when the chair and desk can't both fit you."
  },
  {
    "q": "Why doesn't my chair's lumbar support reach my lower back?",
    "a": "Fixed lumbar is positioned for an average torso, so on a shorter back it may sit too high. A chair with adjustable lumbar, or a separate lumbar cushion you can place yourself, solves this."
  },
  {
    "q": "Can a shorter person use a standing desk comfortably?",
    "a": "Yes, if the desk's minimum height is low enough for sitting and its range suits you when standing. Check the desk's minimum height before buying."
  }
];

export const bottomLine = [
  "Start with the problem you actually have. If your feet don't reach the floor, the TopJob Mochi and HeroSet go lowest; if the seat is too deep, the SIHOO B100's adjustable depth is the most direct fix.",
  "The Brick Attic is a well-rounded middle option with a compact seat, adjustable lumbar and a headrest, while the BestOffice and NEO CHAIR cover the basics on a small budget. The Mochi is the choice if you want a chair sized for petite users throughout."
];

export const relatedGuides = [
  {
    "href": "/guide/best-office-chair-for-back-pain",
    "title": "Best Office Chairs for Back Pain (2026)"
  },
  {
    "href": "/guide/best-mesh-office-chair",
    "title": "Best Mesh Office Chairs (2026)"
  },
  {
    "href": "/guide/best-executive-office-chair",
    "title": "Best Executive Office Chairs (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-300",
    "title": "Best Office Chairs Under $300 (2026)"
  }
];
