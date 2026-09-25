// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-standing-desk-frames";

export const guideTitle = "The Best Complete Standing Desks for Skipping the Frame-and-Top Guesswork";

export const breadcrumbLabel = "Best Standing Desk Frames";

export const metaTitle = "Best Standing Desk Frames and Complete Desks (2026)";

export const metaDescription = "Every desk here ships with a matched top, which avoids frame-to-desktop fit questions. We compared seven complete desks and one converter on size, depth, presets and extras.";

export const mainKeyword = "standing desk frame";

export const introParagraphs = [
  "Buying a frame on its own means matching a desktop to its width range, mounting points and thickness requirements. Every desk in this guide avoids that question: seven ship as complete desks with the top matched to the frame, and one is a converter that sits on the desk you already have.",
  "That trade-off matters in both directions. A complete desk removes compatibility risk, but you can't later swap the top for a different size or material. If you want to reuse a desktop you own, this guide won't have the frame-only kit you need.",
  "Among the complete desks, the useful differences are width and depth, preset count, built-in power and top finish. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-26";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "huanuo-32-small-electric-standing-desk",
    "rank": 1,
    "badge": "Best for Small Rooms",
    "name": "HUANUO 32-inch Small Electric Standing Desk Adjustable Height, 4 Memory Height Settings",
    "price": "$75.99",
    "rating": "4.6 stars from 2,226 Amazon ratings",
    "reviews": "2,226 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41ikoMgen5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9X3FDYY?tag=theofficejournal-20",
    "description": "The HUANUO 32-inch is the smallest complete desk here and the least expensive at the time of writing, with electric adjustment and 4 memory presets in a light walnut finish.\n\nIts compact footprint suits a dorm room or tight corner.\n\nThe top is fixed, and 32 inches suits a laptop or one small monitor rather than a dual-screen setup.",
    "specs": [
      "Desktop: 32\" wide, included",
      "Memory presets: 4",
      "Adjustment: electric",
      "Finish: light walnut"
    ],
    "pros": [
      "Smallest footprint here",
      "Lowest price here",
      "4 presets"
    ],
    "cons": [
      "Small surface",
      "Fixed top",
      "Capacity not stated in the listing summary"
    ],
    "bestFor": "A laptop desk in a small room.",
    "summary": "A complete 32-inch electric desk with 4 memory presets, for a dorm or corner.",
    "skipIf": "You use two monitors; the Veken or Huuger 55 x 28 offers more width."
  },
  {
    "id": "veken-55-large-electric-standing-desk",
    "rank": 2,
    "badge": "Best Wide Desk for the Money",
    "name": "Veken 55 Inch Large Electric Standing Desk, Gaming Table, White",
    "price": "$109.99",
    "rating": "4.6 stars from 1,747 Amazon ratings",
    "reviews": "1,747 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41k4VBjAQzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWMNPW7D?tag=theofficejournal-20",
    "description": "The Veken gives a 55-inch surface, enough for two monitors, for close to the price of the 48-inch desks at the time of writing. It comes in white with electric adjustment.\n\nIt has a substantial base of buyer feedback.\n\nThe listing summary doesn't give depth or preset count, and white shows scuffs more readily.",
    "specs": [
      "Desktop: 55\" wide, included",
      "Finish: white",
      "Adjustment: electric"
    ],
    "pros": [
      "55-inch width for less",
      "Room for two monitors",
      "Established feedback"
    ],
    "cons": [
      "Depth and presets not stated",
      "White shows marks",
      "Fixed top"
    ],
    "bestFor": "Two monitors on a moderate budget.",
    "summary": "A complete 55-inch white electric desk with room for two monitors.",
    "skipIf": "You need a stated deep top; the Huuger 55 x 28 lists 27.6 inches."
  },
  {
    "id": "ergear-height-adjustable-electric-standing-desk",
    "rank": 3,
    "badge": "Most Established 48-Inch Desk",
    "name": "ErGear 48 x 24 Inch Height Adjustable Electric Standing Desk, Black",
    "price": "$94.98",
    "rating": "4.5 stars from 11,572 Amazon ratings",
    "reviews": "11,572 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/415He+cLvaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B41YH9B6?tag=theofficejournal-20",
    "description": "The ErGear is the standard-size default: 48 x 24 inches in black, with electric adjustment, and the largest base of buyer feedback in this guide, which is broadly positive.\n\nIt was among the lowest-priced full-size desks at the time of writing.\n\nAt 24 inches deep, space is tight for a monitor, keyboard and accessories together, and it has no built-in power.",
    "specs": [
      "Desktop: 48 x 24\", included",
      "Finish: black",
      "Adjustment: electric"
    ],
    "pros": [
      "Extensive, positive feedback",
      "Standard size",
      "Low price"
    ],
    "cons": [
      "24-inch depth",
      "No built-in power",
      "Presets not stated"
    ],
    "bestFor": "A standard single-monitor home office desk.",
    "summary": "A standard 48 x 24-inch black electric desk with the largest base of buyer feedback here.",
    "skipIf": "You need depth; the Huuger 55 x 28 is 27.6 inches deep."
  },
  {
    "id": "fezibo-electric-standing-desk-splice-board",
    "rank": 4,
    "badge": "Best Light Finish",
    "name": "FEZIBO Standing Desk, 48 x 24 Inches Electric Height Adjustable, with Splice Board, White Frame/Maple Top",
    "price": "$99.99",
    "rating": "4.5 stars from 8,463 Amazon ratings",
    "reviews": "8,463 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/418JjdqdnpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8MHPVPH?tag=theofficejournal-20",
    "description": "The FEZIBO is chosen mainly for looks: a maple-tone splice-board top on a white frame, 48 x 24 inches, with electric adjustment and a solid base of buyer feedback.\n\nA splice board is made from joined panels, so there's a visible seam.\n\nIf you plan to clamp a monitor arm, check the top's thickness on the listing; the summary doesn't state it.",
    "specs": [
      "Desktop: 48 x 24\" splice board, included",
      "Finish: white frame, maple-tone top",
      "Adjustment: electric"
    ],
    "pros": [
      "Light two-tone look",
      "Established feedback",
      "Low price"
    ],
    "cons": [
      "Visible seam",
      "Top thickness not stated",
      "24-inch depth"
    ],
    "bestFor": "A light, Scandinavian-leaning room.",
    "summary": "A 48 x 24-inch desk with a maple-tone splice-board top on a white frame.",
    "skipIf": "You prefer a darker look; the Claiks is the rustic-brown alternative."
  },
  {
    "id": "claiks-electric-standing-desk-splice-board",
    "rank": 5,
    "badge": "Best Warm Finish",
    "name": "Claiks Electric Standing Desk, 24x48 Inches, Black Frame/Rustic Brown Top",
    "price": "$99.99",
    "rating": "4.4 stars from 5,316 Amazon ratings",
    "reviews": "5,316 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41oErF+y4gL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZ7GXM4M?tag=theofficejournal-20",
    "description": "The Claiks is the warm-toned counterpart to the FEZIBO: a rustic brown splice-board top on a black steel frame, the same 48 x 24-inch size and price at the time of writing.\n\nFunctionally it lines up with the FEZIBO and ErGear, so choose on finish.\n\nBuyer feedback is slightly less positive than for the similarly priced desks, and the splice-board top has a seam.",
    "specs": [
      "Desktop: 48 x 24\" splice board, included",
      "Finish: black frame, rustic brown top",
      "Adjustment: electric"
    ],
    "pros": [
      "Warm wood-tone look",
      "Low price",
      "Standard size"
    ],
    "cons": [
      "Visible seam",
      "Slightly less positive feedback",
      "24-inch depth"
    ],
    "bestFor": "A warmer home office look on a budget.",
    "summary": "A 48 x 24-inch desk with a rustic brown splice-board top on a black frame.",
    "skipIf": "You want built-in power; the Huuger 47 x 24 has outlets."
  },
  {
    "id": "huuger-power-outlets-standing-desk",
    "rank": 6,
    "badge": "Best with Built-In Power",
    "name": "Huuger Electric Standing Desk with Power Outlets and USB-C Port, 47 x 24 Inch",
    "price": "$104.99",
    "rating": "4.6 stars from 155 Amazon ratings",
    "reviews": "155 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41rUtvN6YIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GS9B1X5X?tag=theofficejournal-20",
    "description": "The Huuger 47 x 24 builds power into the frame: outlets and a USB-C port mean no extension lead across the desk. It has 4 height presets and a steel frame.\n\nIt costs slightly more than the plain 48-inch desks at the time of writing.\n\nIt has the least buyer feedback here, and its 24-inch depth is tight for accessories.",
    "specs": [
      "Desktop: 47 x 24\", included",
      "Power: outlets + USB-C",
      "Memory presets: 4",
      "Frame: steel"
    ],
    "pros": [
      "Built-in outlets and USB-C",
      "4 presets",
      "Compact"
    ],
    "cons": [
      "Least buyer feedback here",
      "24-inch depth",
      "Fixed top"
    ],
    "bestFor": "Charging devices at the desk without a power strip.",
    "summary": "A 47 x 24-inch desk with outlets, a USB-C port and 4 height presets.",
    "skipIf": "You need more surface; the Huuger 55 x 28 is larger."
  },
  {
    "id": "huuger-55x28-large-electric-standing-desk",
    "rank": 7,
    "badge": "Best Deep Desk",
    "name": "Huuger 55 x 28 Large Electric Standing Desk, 27.6-inch Deep Desktop, Rustic Brown",
    "price": "$139.99",
    "rating": "4.4 stars from 555 Amazon ratings",
    "reviews": "555 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41oHg37v77L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DT3Y1X96?tag=theofficejournal-20",
    "description": "The Huuger 55 x 28 is the deepest desk here at 27.6 inches, which leaves room for a keyboard and a monitor arm base without crowding the front edge. It comes in rustic brown with two hooks.\n\nIt has 3 height presets.\n\nIt needs more floor space than the other desks and has one fewer preset than the 4-preset models.",
    "specs": [
      "Desktop: 55 x 28\" (27.6\" deep), included",
      "Memory presets: 3",
      "Extras: 2 hooks",
      "Finish: rustic brown"
    ],
    "pros": [
      "Deepest desk here",
      "Wide surface",
      "Hooks included"
    ],
    "cons": [
      "3 presets",
      "Large footprint",
      "Costs more than 48-inch desks"
    ],
    "bestFor": "Monitor arms and multi-device setups.",
    "summary": "A 55 x 28-inch desk, 27.6 inches deep, with 3 presets and two hooks.",
    "skipIf": "Your room is small; the HUANUO 32-inch or a 48-inch desk fits better."
  },
  {
    "id": "vivo-42-standing-desk-converter",
    "rank": 8,
    "badge": "Converter Alternative",
    "name": "VIVO Height Adjustable 42 Inch Standing Desk Converter with Dual Monitor Stand",
    "price": "$219.99",
    "rating": "4.5 stars from 598 Amazon ratings",
    "reviews": "598 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41daFWT9JPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CNH9SQT7?tag=theofficejournal-20",
    "description": "The VIVO is not a desk at all: it is a 42-inch converter that sits on your existing desk and includes a built-in dual monitor stand for 13- to 30-inch screens.\n\nIt suits renters or anyone who wants sit-stand use without replacing a desk.\n\nIt was the most expensive option here at the time of writing, needs a desk underneath, and takes up desktop depth.",
    "specs": [
      "Type: tabletop converter",
      "Width: 42\"",
      "Monitor stand: dual, 13–30\" screens",
      "Sits on an existing desk"
    ],
    "pros": [
      "Keeps your existing desk",
      "Dual monitor stand included",
      "No floor assembly"
    ],
    "cons": [
      "Most expensive here at the time of writing",
      "Needs a desk underneath",
      "Uses desktop depth"
    ],
    "bestFor": "Adding sit-stand use to a desk you want to keep.",
    "summary": "A 42-inch tabletop converter with a built-in dual monitor stand, for use on an existing desk.",
    "skipIf": "You're replacing the desk anyway; the Veken costs half as much."
  }
];

export const howWeEvaluated = [
  {
    "title": "Format",
    "description": "We noted whether each is a complete desk, frame or converter."
  },
  {
    "title": "Surface",
    "description": "We compared width, depth and top construction."
  },
  {
    "title": "Controls and extras",
    "description": "We compared presets, built-in power and accessories."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Complete desk or frame only",
    "explanation": "Complete desks remove fit questions but lock in the top. If you want to reuse a desktop, look for a frame-only kit and check its width range and mounting requirements."
  },
  {
    "criterion": "Depth matters as much as width",
    "explanation": "Most desks here are 24 inches deep; the Huuger 55 x 28 is 27.6. Extra depth helps with monitor arms and keyboards."
  },
  {
    "criterion": "Presets and power",
    "explanation": "Four presets suit shared desks; built-in outlets, like the Huuger 47 x 24's, reduce cable clutter."
  },
  {
    "criterion": "Check top thickness for clamps",
    "explanation": "If you'll clamp a monitor arm, check the top's thickness against the arm's clamp range; several listings here don't state it."
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
          "Small room",
          "HUANUO 32-inch"
        ],
        [
          "Two monitors, value",
          "Veken 55-inch"
        ],
        [
          "Standard desk, established",
          "ErGear 48 x 24"
        ],
        [
          "Light or warm finish",
          "FEZIBO or Claiks"
        ],
        [
          "Built-in power",
          "Huuger 47 x 24"
        ],
        [
          "Deep surface",
          "Huuger 55 x 28"
        ],
        [
          "Keep your current desk",
          "VIVO 42-inch converter"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Are any of these frame-only kits?",
    "a": "No. All seven desks ship with matched tops, and the VIVO is a converter. For a frame to pair with your own desktop, look for a frame-only listing."
  },
  {
    "q": "How thick should a desktop be?",
    "a": "Follow the frame maker's stated minimum. If you'll clamp a monitor arm, also check the arm's clamp range."
  },
  {
    "q": "Will leveling feet fix an uneven floor?",
    "a": "They can handle minor unevenness. Check the listed leveling range; a noticeably sloped floor may need shims."
  },
  {
    "q": "Is the VIVO converter a standing desk?",
    "a": "It sits on an existing desk and raises your monitors and keyboard; it isn't a floor-standing frame."
  },
  {
    "q": "Which desk is deepest?",
    "a": "The Huuger 55 x 28, at 27.6 inches."
  }
];

export const bottomLine = [
  "For a standard home office, the ErGear is the established 48-inch choice, with the FEZIBO and Claiks as finish alternatives and the Huuger 47 x 24 adding built-in power. For two monitors, the Veken is the value 55-inch desk and the Huuger 55 x 28 the deeper one.",
  "The HUANUO 32-inch suits the smallest spaces, and the VIVO converter is the alternative if you'd rather keep your current desk. If you need a true frame-only kit, look beyond this guide."
];

export const sectionHeadings = {
  "howWeChose": "How We Chose These Desks",
  "whatToLookFor": "What to Look for in a Complete Standing Desk",
  "howToChoose": "How to Choose a Standing Desk Setup"
};

export const relatedGuides = [
  {
    "href": "/guide/best-standing-desks-with-built-in-power-outlets",
    "title": "Best Standing Desks with Built-In Power Outlets (2026)"
  },
  {
    "href": "/guide/best-standing-desks-under-1000",
    "title": "Best Standing Desks Under $1,000 (2026)"
  },
  {
    "href": "/guide/best-4-leg-standing-desks",
    "title": "Best Standing Desk Frames for Small Home Offices (2026)"
  },
  {
    "href": "/guide/best-dual-motor-standing-desks",
    "title": "Best Dual-Motor Standing Desks (2026)"
  }
];
