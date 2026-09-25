// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-tablet-stands-under-30";

export const guideTitle = "The Best Tablet Stands Under $30 for Reading, Calls and a Second Screen";

export const breadcrumbLabel = "Best Tablet Stands Under $30";

export const metaTitle = "Best Tablet Stands Under $30 (2026)";

export const metaDescription = "Low-cost aluminum tablet stands differ in device size range, load rating and how they adjust. We compared four on fit, stability features and folding.";

export const mainKeyword = "best tablet stands under $30";

export const introParagraphs = [
  "Around $30, tablet stands are almost all aluminum; the differences are how large a device they hold, whether they state a load rating, and how they adjust, from continuous joints to fixed tilt slots.",
  "Check your device's size and weight first, especially if you plan to use a heavier 13-inch tablet or a portable monitor. Two stands here state a load rating (about 2.2 to 2.4 lb); the others don't.",
  "Three of the four were under $30 at the time of writing; the Urmust was slightly over. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-09-14";

export const readTime = "7 min";

export const heroImage = "https://m.media-amazon.com/images/I/41u-SRwk20L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-tablet-stands-under-30-1",
    "rank": 1,
    "badge": "Best Adjustable Stand (Slightly Over $30)",
    "name": "Urmust Tablet Stand for Desk, Adjustable iPad Holder for Bed",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41u-SRwk20L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM3QYF5W?tag=theofficejournal-20",
    "description": "The Urmust offers the most adjustment and a stated load rating: 2.42 lb, for devices from 4.7 to 15.6 inches, with adjustable joints tightened by an included wrench and clips to route the charging cable.\n\nIt was slightly above $30 at the time of writing. Urmust describes a base designed for stability with heavier devices.",
    "specs": [
      "Device size: 4.7–15.6\"",
      "Load: 2.42 lb",
      "Material: aluminum alloy",
      "Adjustment: jointed, wrench included",
      "Cable clips: yes"
    ],
    "pros": [
      "Stated load rating",
      "Wide size range",
      "Cable management"
    ],
    "cons": [
      "Slightly over $30",
      "Joints need tightening",
      "Larger than folding stands"
    ],
    "bestFor": "Larger tablets at a desk, where height and angle matter.",
    "summary": "An aluminum stand for 4.7- to 15.6-inch devices, rated to 2.42 lb, with adjustable joints and cable clips.",
    "skipIf": "You want a stand to carry around; the slim foldable stand packs flat."
  },
  {
    "id": "best-tablet-stands-under-30-2",
    "rank": 2,
    "badge": "Most Stable Design",
    "name": "UGREEN Tablet Stand Holder for Desk, Dual Rod Support Aluminum",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WK12ieOqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P87NBYS?tag=theofficejournal-20",
    "description": "The UGREEN uses two support rods rather than one, a design intended to reduce wobble, with silicone padding to protect the device and rubber feet to stop sliding. It fits 4- to 13-inch devices and folds for storage.\n\nIt doesn't state a load rating, and 13 inches is its upper limit.",
    "specs": [
      "Device size: 4–13\"",
      "Design: dual rod",
      "Material: aluminum alloy",
      "Pads: silicone; feet: rubber",
      "Foldable"
    ],
    "pros": [
      "Dual-rod support",
      "Protective padding",
      "Folds"
    ],
    "cons": [
      "No stated load rating",
      "Up to 13 inches",
      "Less height adjustment than the Urmust"
    ],
    "bestFor": "Using a tablet as a steady second screen beside a laptop.",
    "summary": "UGREEN's dual-rod aluminum stand for 4- to 13-inch devices, with silicone pads and rubber feet.",
    "skipIf": "Your device is larger than 13 inches; the Bimo goes to 16."
  },
  {
    "id": "best-tablet-stands-under-30-3",
    "rank": 3,
    "badge": "Best for Portable Monitors",
    "name": "Bimo 360 Rotatable Aluminum Tablet Stand, 4.7-16in",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jEUEKrCYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14FMS59?tag=theofficejournal-20",
    "description": "The Bimo covers the largest devices here, up to 16 inches, with a stated 1kg (2.2 lb) load rating, which makes it suitable for many portable monitors as well as tablets. It rotates 360 degrees.\n\nA full-coverage non-slip foam base helps it stay put, and it folds as one piece. Check your monitor's weight against the rating.",
    "specs": [
      "Device size: 4–16\"",
      "Load: 1kg (2.2 lb)",
      "Rotation: 360°",
      "Base: non-slip foam",
      "Foldable, one-piece"
    ],
    "pros": [
      "Largest size range",
      "Stated load rating",
      "Rotates"
    ],
    "cons": [
      "Heavy monitors may exceed 1kg",
      "Foam base may wear",
      "Less height adjustment"
    ],
    "bestFor": "Portable monitors and large tablets.",
    "summary": "Bimo's 360-degree rotating aluminum stand for 4- to 16-inch devices, rated to 1kg.",
    "skipIf": "You need more height; the Urmust's jointed arm adjusts further."
  },
  {
    "id": "best-tablet-stands-under-30-4",
    "rank": 4,
    "badge": "Best Value Folding Stand",
    "name": "Tablet Stand Adjustable and Foldable, Slim Portable Aluminum",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41HylQmnnbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZXLZX8V?tag=theofficejournal-20",
    "description": "This slim stand uses 8 fixed tilt slots rather than a continuous hinge, so each angle locks in place, and it supports portrait or landscape orientation. It fits 7- to 13-inch devices, has silicone grips and folds flat.\n\nIt was the lowest-priced stand here at the time of writing, and it doesn't state a load rating.",
    "specs": [
      "Device size: 7–13\"",
      "Tilt: 8 slots",
      "Material: aluminum alloy",
      "Grip: silicone",
      "Orientation: portrait or landscape"
    ],
    "pros": [
      "Lowest price here",
      "Locking tilt slots",
      "Folds flat"
    ],
    "cons": [
      "No height adjustment",
      "No stated load rating",
      "Brand not named"
    ],
    "bestFor": "Reading, recipes and video calls, at home or on the move.",
    "summary": "A slim foldable aluminum stand for 7- to 13-inch devices with 8 fixed tilt slots.",
    "skipIf": "You need eye-level height; the Urmust raises the device."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit",
    "description": "We compared device size ranges and load ratings."
  },
  {
    "title": "Adjustment",
    "description": "We compared joints, rotation and tilt slots."
  },
  {
    "title": "Stability",
    "description": "We noted rods, bases and pads."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match size and weight",
    "explanation": "Check the size range and, where stated, load rating: Urmust 2.42 lb, Bimo 1kg."
  },
  {
    "criterion": "Decide on adjustment",
    "explanation": "Jointed arms (Urmust) raise and angle; slot stands (the slim foldable) lock fixed angles."
  },
  {
    "criterion": "Look for anti-slip features",
    "explanation": "Rubber feet, foam bases and silicone pads help stability and protect the device."
  },
  {
    "criterion": "Consider portability",
    "explanation": "The UGREEN, Bimo and slim stand fold."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By use",
    "table": {
      "headers": [
        "Use",
        "Consider"
      ],
      "rows": [
        [
          "Desk, adjustable height",
          "Urmust"
        ],
        [
          "Second screen beside laptop",
          "UGREEN dual-rod"
        ],
        [
          "Portable monitor",
          "Bimo"
        ],
        [
          "Travel, lowest price",
          "Slim foldable stand"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Will it hold a 13-inch tablet?",
    "a": "All four list 13 inches or more; check weight against the Urmust's or Bimo's rating."
  },
  {
    "q": "Can I use a portable monitor?",
    "a": "The Bimo is designed for it, within its 1kg rating."
  },
  {
    "q": "Slots or joints?",
    "a": "Slots lock set angles; joints give continuous adjustment but may need tightening."
  },
  {
    "q": "Do they fold?",
    "a": "The UGREEN, Bimo and slim stand fold; the Urmust is a desk stand."
  },
  {
    "q": "Can I charge while it's on the stand?",
    "a": "Yes; the Urmust includes cable clips to route the cable."
  }
];

export const bottomLine = [
  "For a desk, the Urmust offers the most adjustment and a stated load rating, just over $30; the UGREEN's dual rods are the steadier simple option.",
  "For portable monitors, the Bimo covers up to 16 inches, and for travel or reading, the slim foldable stand is the lowest-cost pick."
];

export const relatedGuides = [
  {
    "href": "/guide/best-tablet-stands-under-20",
    "title": "Best Tablet Stands Under $20"
  },
  {
    "href": "/guide/best-tablet-stands-under-15",
    "title": "Best Tablet Stands Under $15"
  },
  {
    "href": "/guide/best-office-chairs-under-150",
    "title": "Best Office Chairs Under $150"
  },
  {
    "href": "/guide/best-desk-hutches-under-100",
    "title": "Best Desk Hutches Under $100"
  },
  {
    "href": "https://www.worthrated.com/guide/best-tablets-under-100",
    "title": "Need a tablet too? Best Tablets Under $100 (WorthRated)"
  }
];
