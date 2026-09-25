// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-room-divider-freestanding";

export const guideTitle = "The Best Freestanding Room Dividers for Privacy Without Drilling";

export const breadcrumbLabel = "Best Freestanding Room Dividers";

export const metaTitle = "Best Freestanding Room Dividers and Folding Screens (2026)";

export const metaDescription = "Freestanding screens rely on panel count, hinges and feet to stay up. We compared eight, from a shoji screen to a wheeled fabric divider, on width, material, weight and setup.";

export const mainKeyword = "room dividers free standing";

export const introParagraphs = [
  "A freestanding divider has to stand up by itself, so its design matters more than its materials list. Multi-panel screens stay upright by folding into a zigzag; single panels rely on wide feet. Hinges, foot width and weight decide how steady it feels and how easily it moves.",
  "Width is the other decision. Screens here span 63 to 120 inches flat, but a zigzag takes up less width than the flat measurement, so measure the opening you want to cover and allow for the angles.",
  "Then choose the look and the light: translucent shoji panels let daylight through, while fabric and woven screens block more. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/51xVErogV9L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "legacy-decor-6-panel-shoji",
    "rank": 1,
    "badge": "Best Shoji Screen",
    "name": "Legacy Decor 6-Panel Shoji Room Divider",
    "price": "$179.00",
    "rating": "4.6",
    "reviews": "4,805",
    "imageUrl": "https://m.media-amazon.com/images/I/51xVErogV9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00YFQ3F52?tag=theofficejournal-20",
    "description": "The Legacy Decor shoji is the classic choice: a solid wood grid with translucent panels that let daylight through while marking a clear boundary, and a large, positive base of buyer feedback.\n\nIt is 105 inches wide and 71 inches tall across six panels, uses two-way hinges, arrives assembled and weighs 22 lb.\n\nTranslucent panels offer less privacy than opaque fabric, and it was the most expensive screen here at the time of writing.",
    "specs": [
      "Size: 105\"W x 71\"H (6 panels)",
      "Material: solid wood + translucent panels",
      "Hinges: two-way",
      "Weight: 22 lb",
      "Assembly: none"
    ],
    "pros": [
      "Solid wood grid",
      "Lets light through",
      "No assembly"
    ],
    "cons": [
      "Most expensive here",
      "Less privacy than opaque panels",
      "Needs a wide space"
    ],
    "bestFor": "Dividing a room while keeping it light.",
    "summary": "A 6-panel solid wood shoji screen, 105 inches wide, with translucent panels and no assembly.",
    "skipIf": "You need full visual privacy; an opaque fabric screen like the HOMSCREENER blocks more."
  },
  {
    "id": "rhf-rattan-4-panel",
    "rank": 2,
    "badge": "Best Handmade Look for Less",
    "name": "RHF 6 ft. 4-Panel Rattan Room Divider",
    "price": "$34.28",
    "rating": "4.5",
    "reviews": "2,024",
    "imageUrl": "https://m.media-amazon.com/images/I/518FUSm-OqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QQ25W3P?tag=theofficejournal-20",
    "description": "The RHF brings a handmade, bohemian look at a low price: RHF says its 5-medallion diamond weave is handmade, in woven fabric over a rattan-style frame.\n\nIt is 63 inches wide and 72 inches tall, uses two-way hinges and needs no assembly.\n\nIt is the narrowest multi-panel screen here, and woven fabric is less hard-wearing than wood or heavy polyester in a busy spot.",
    "specs": [
      "Size: 63\"W x 72\"H (4 panels)",
      "Material: rattan-style frame + woven fabric",
      "Hinges: two-way",
      "Assembly: none"
    ],
    "pros": [
      "Handmade look",
      "Low price",
      "No assembly"
    ],
    "cons": [
      "Narrowest multi-panel screen",
      "Less hard-wearing",
      "Weight not stated"
    ],
    "bestFor": "A decorative screen for a small opening.",
    "summary": "A 4-panel, 63-inch screen with a woven diamond pattern on a rattan-style frame.",
    "skipIf": "You need wide coverage; the HOMSCREENER spans 88 inches for a little more."
  },
  {
    "id": "rantila-single-panel",
    "rank": 3,
    "badge": "Lightest and Simplest",
    "name": "RANTILA Single Large Panel Room Divider",
    "price": "$30.99",
    "rating": "4.3",
    "reviews": "1,590",
    "imageUrl": "https://m.media-amazon.com/images/I/414lHGwu+qL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTBSB7R?tag=theofficejournal-20",
    "description": "The RANTILA takes a different approach: one 71-inch-wide panel on a steel frame with four stiffeners, rather than hinged panels, so there's no zigzag to set.\n\nAt 8.8 lb it is the lightest divider here and the lowest priced at the time of writing. Its HDPE fabric is listed as UV-protected and waterproof, which suits a spot near a window or patio door.\n\nIt's more utilitarian than the wood and woven screens, and buyer feedback is less positive than for the top picks.",
    "specs": [
      "Size: 71\"W x 69.5\"H (single panel)",
      "Material: HDPE fabric + steel frame",
      "Stiffeners: 4",
      "UV-protected, waterproof",
      "Weight: 8.8 lb"
    ],
    "pros": [
      "Lightest here",
      "Lowest price",
      "Weather-resistant fabric"
    ],
    "cons": [
      "Utilitarian look",
      "Single panel can't wrap corners",
      "Less positive feedback"
    ],
    "bestFor": "Quick, movable screening, indoors or near a patio.",
    "summary": "An 8.8 lb single 71-inch panel with steel frame and UV-protected, waterproof fabric.",
    "skipIf": "You want a decorative piece; the FDW or Legacy Decor looks warmer."
  },
  {
    "id": "homscreener-4-panel-fabric",
    "rank": 4,
    "badge": "Best Wide 4-Panel Fabric Screen",
    "name": "HOMSCREENER 4-Panel Fabric Room Divider",
    "price": "$56.99",
    "rating": "4.1",
    "reviews": "1,715",
    "imageUrl": "https://m.media-amazon.com/images/I/31IhKdy8YFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BQMR29TC?tag=theofficejournal-20",
    "description": "The HOMSCREENER covers the most width of the fixed 4-panel screens, 88 inches, with heavier 240g polyester than many fabric screens and wrinkle-resistant treatment.\n\nIts triple-buckle hinges and extra-wide 17.7-inch feet are designed for stability, on a steel frame 71.3 inches tall.\n\nWide feet need floor clearance, and buyer feedback is the least positive here.",
    "specs": [
      "Size: 88\"W x 71.3\"H (4 panels)",
      "Material: 240g polyester + steel",
      "Hinges: triple-buckle",
      "Feet: 17.7\" wide",
      "Wrinkle-resistant"
    ],
    "pros": [
      "Wide coverage",
      "Heavier fabric",
      "Wide feet"
    ],
    "cons": [
      "Least positive feedback here",
      "Feet take floor space",
      "Fabric look"
    ],
    "bestFor": "Opaque privacy across a wide opening.",
    "summary": "An 88-inch, 4-panel steel screen with 240g fabric, triple-buckle hinges and 17.7-inch feet.",
    "skipIf": "You'll move it often; the SUNALLY adds lockable wheels at a similar price."
  },
  {
    "id": "mayoliah-6-panel-120-wide",
    "rank": 5,
    "badge": "Widest Screen",
    "name": "MAYOLIAH 6-Panel Folding Privacy Screen",
    "price": "$89.99",
    "rating": "4.2",
    "reviews": "1,063",
    "imageUrl": "https://m.media-amazon.com/images/I/31WhDsMWr+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B42BP1HF?tag=theofficejournal-20",
    "description": "The MAYOLIAH is the widest divider here at 120 inches, and its panels can be separated to use 2 to 6 at a time, so it adapts to different openings.\n\nIt uses 180g polyester on a powder-coated iron frame, is 72 inches tall, has wider feet and a one-year warranty.\n\nThe full span needs a big room, and it's a larger package to set up.",
    "specs": [
      "Size: 120\"W x 72\"H (6 panels, 2–6 configurable)",
      "Material: 180g polyester + iron frame",
      "Feet: wider support",
      "Warranty: 1 year"
    ],
    "pros": [
      "Widest here",
      "Reconfigurable",
      "One-year warranty"
    ],
    "cons": [
      "Needs a large room",
      "Bulky package",
      "Lighter fabric than the 240g screens"
    ],
    "bestFor": "Large rooms, or openings that change size.",
    "summary": "A 120-inch, 6-panel fabric screen that reconfigures from 2 to 6 panels, with a one-year warranty.",
    "skipIf": "Your opening is modest; the FDW or HOMSCREENER is smaller and simpler."
  },
  {
    "id": "fdw-wood-mesh-4-panel",
    "rank": 6,
    "badge": "Best Value Wood-Look Screen",
    "name": "FDW 4-Panel Wood Mesh Room Divider",
    "price": "$63.99",
    "rating": "4.4",
    "reviews": "7,623",
    "imageUrl": "https://m.media-amazon.com/images/I/51eN5STzThL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0135AV5XC?tag=theofficejournal-20",
    "description": "The FDW offers a wood look for a moderate price: hand-woven mesh panels in a wood frame, with the largest base of buyer feedback in this guide.\n\nIt is 70.5 inches wide and 71 inches tall, uses metal hinges and weighs 15.4 lb, so it folds compactly.\n\nThe mesh weave lets some light and view through, and it's narrower than the widest screens.",
    "specs": [
      "Size: 70.5\"W x 71\"H (4 panels)",
      "Material: wood frame + hand-woven mesh",
      "Hinges: metal",
      "Weight: 15.4 lb"
    ],
    "pros": [
      "Most buyer feedback here",
      "Metal hinges",
      "Light and foldable"
    ],
    "cons": [
      "Mesh isn't fully opaque",
      "Narrower coverage",
      "Lighter-duty wood"
    ],
    "bestFor": "A natural-looking screen at a moderate price.",
    "summary": "A 4-panel woven wood mesh screen with metal hinges, 15.4 lb, with the most buyer feedback here.",
    "skipIf": "You want an authentic shoji look; the Legacy Decor is solid wood."
  },
  {
    "id": "sunally-wheeled-4-panel",
    "rank": 7,
    "badge": "Best for Moving Often",
    "name": "SUNALLY 4-Panel Room Divider with Lockable Wheels",
    "price": "$58.49",
    "rating": "4.2",
    "reviews": "554",
    "imageUrl": "https://m.media-amazon.com/images/I/412nDJFwHPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMDTGYK2?tag=theofficejournal-20",
    "description": "The SUNALLY is the only divider here on lockable wheels, so it rolls to a new spot and locks, useful for a home office that becomes a guest area at weekends.\n\nIt has 240g polyester on a powder-coated steel frame, 88 inches wide and 72 inches tall, with extended feet.\n\nWheels add bulk to the base, and it has less buyer feedback than the most popular screens.",
    "specs": [
      "Size: 88\"W x 72\"H (4 panels)",
      "Material: 240g polyester + steel",
      "Mobility: lockable wheels",
      "Feet: extended"
    ],
    "pros": [
      "Lockable wheels",
      "Wide coverage",
      "Heavier fabric"
    ],
    "cons": [
      "Bulkier base",
      "Less buyer feedback",
      "Fabric look"
    ],
    "bestFor": "Rooms whose layout changes during the week.",
    "summary": "An 88-inch, 4-panel fabric screen on lockable wheels, the only wheeled divider here.",
    "skipIf": "It will stay in one place; the HOMSCREENER is similar without wheels."
  },
  {
    "id": "homcom-6-panel-pp-woven",
    "rank": 8,
    "badge": "Best Woven Screen for Durability",
    "name": "HOMCOM 6-Panel PP Hand-Woven Room Divider",
    "price": "$98.99",
    "rating": "4.5",
    "reviews": "371",
    "imageUrl": "https://m.media-amazon.com/images/I/51gHMv9twBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1V2K8XC?tag=theofficejournal-20",
    "description": "The HOMCOM swaps paper-fiber weave for polypropylene panels, which should resist tearing and moisture better, on a paulownia wood frame with an arched top.\n\nIt spans 106.3 inches across six panels, is 70.9 inches tall, needs no assembly and has a 90-day warranty.\n\nIt costs more than most screens here at the time of writing, and polypropylene looks more synthetic than natural weave.",
    "specs": [
      "Size: 106.3\"W x 70.9\"H (6 panels)",
      "Material: paulownia frame + PP panels",
      "Top: arched",
      "Assembly: none",
      "Warranty: 90 days"
    ],
    "pros": [
      "Moisture-resistant PP panels",
      "Wide coverage",
      "No assembly"
    ],
    "cons": [
      "Costs more than most here",
      "Synthetic look",
      "Short warranty"
    ],
    "bestFor": "A woven-look screen for a humid or busy room.",
    "summary": "A 6-panel polypropylene woven screen on a paulownia frame, 106.3 inches wide, with an arched top.",
    "skipIf": "You prefer natural materials; the FDW or RHF looks less synthetic."
  }
];

export const howWeEvaluated = [
  {
    "title": "Stability",
    "description": "We compared panel count, hinges, feet and stiffeners."
  },
  {
    "title": "Size",
    "description": "We compared flat width and height."
  },
  {
    "title": "Material",
    "description": "We compared wood, woven, polypropylene and fabric panels."
  },
  {
    "title": "Portability and price",
    "description": "We compared weight, wheels, assembly and prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Plan for the zigzag",
    "explanation": "Multi-panel screens need to angle to stand, so they cover less than their flat width. Measure the opening and allow for the fold."
  },
  {
    "criterion": "Check the base",
    "explanation": "Wider feet (HOMSCREENER, MAYOLIAH, SUNALLY) and stiffeners (RANTILA) add stability; consider floor type and foot traffic."
  },
  {
    "criterion": "Decide on light versus privacy",
    "explanation": "Shoji and mesh let light through; polyester and HDPE block more."
  },
  {
    "criterion": "Weigh mobility",
    "explanation": "The SUNALLY rolls; the RANTILA (8.8 lb) and FDW (15.4 lb) are easy to carry."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider"
      ],
      "rows": [
        [
          "Light-filtering shoji",
          "Legacy Decor"
        ],
        [
          "Handmade look for less",
          "RHF"
        ],
        [
          "Lightest, simplest",
          "RANTILA"
        ],
        [
          "Opaque, wide, fixed",
          "HOMSCREENER"
        ],
        [
          "Widest, reconfigurable",
          "MAYOLIAH"
        ],
        [
          "Wood look, most feedback",
          "FDW"
        ],
        [
          "Moves often",
          "SUNALLY"
        ],
        [
          "Moisture-resistant weave",
          "HOMCOM"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "How do freestanding dividers stay up?",
    "a": "Multi-panel screens stand by angling into a zigzag; single panels like the RANTILA use wide, stiffened feet."
  },
  {
    "q": "How many panels should I get?",
    "a": "More panels cover more width and fold into more positions. Choose based on the width you need to cover once angled."
  },
  {
    "q": "Which is easiest to move?",
    "a": "The SUNALLY rolls on lockable wheels. The RANTILA and FDW are light enough to carry."
  },
  {
    "q": "Do fabric screens sag?",
    "a": "Heavier fabric, like the 240g polyester on the HOMSCREENER and SUNALLY, is designed to hold shape better than thinner fabric."
  },
  {
    "q": "How much space does a set-up screen take?",
    "a": "Less width and more depth than its flat measurement. Unfold it in the space to check before settling on a position."
  }
];

export const bottomLine = [
  "For a light, classic divider, the Legacy Decor shoji is worth paying more for; the FDW gives a wood look for less with the most buyer feedback, and the RHF is the low-cost decorative option.",
  "For opaque privacy, the HOMSCREENER covers a wide opening and the SUNALLY adds wheels. The MAYOLIAH suits the largest rooms, and the RANTILA is the lightest, simplest screen to move."
];

export const sectionHeadings = {
  "howWeChose": "How We Chose These Dividers",
  "whatToLookFor": "What to Look for in a Freestanding Room Divider",
  "howToChoose": "How to Choose a Freestanding Divider"
};

export const relatedGuides = [
  {
    "href": "/guide/best-room-divider-studio-apartment",
    "title": "Best Room Dividers for Studio Apartments (2026)"
  },
  {
    "href": "/guide/best-room-divider-with-shelves",
    "title": "Best Room Dividers with Shelves (2026)"
  },
  {
    "href": "/guide/best-room-divider-bookcase",
    "title": "Best Room Divider Bookcases (2026)"
  }
];
