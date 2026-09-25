// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-portable-monitors-under-200";

export const guideTitle = "The Best Portable Monitors Under $200 for Work and Travel";

export const breadcrumbLabel = "Best Portable Monitors Under $200";

export const metaTitle = "Best Portable Monitors Under $200 (2026)";

export const metaDescription = "Under $200, portable monitors trade size, sharpness and refresh rate. We compared eight 15.6- to 18.5-inch models on resolution, refresh, inputs, weight and stand.";

export const mainKeyword = "portable monitor under 200";

export const introParagraphs = [
  "A portable monitor adds a second screen to a laptop anywhere. Under $200, the trade-offs are size (15.6 to 18.5 inches), sharpness (1080p or 2.5K), refresh rate (60 to 144Hz) and how it stands, from folding covers to kickstands and VESA mounts.",
  "Check connections first. A single USB-C cable can carry video and power only if your laptop's USB-C port supports video output; otherwise you'll use HDMI plus a USB power cable. Mini-HDMI needs a specific cable.",
  "Every monitor here was under $200 at the time of writing, most under $125. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-28";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "kyy-156-under200",
    "rank": 1,
    "badge": "Best Everyday 15.6-Inch",
    "name": "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender w/Cover",
    "price": "$62.99",
    "rating": "4.4 stars from 13,090 Amazon ratings",
    "reviews": "13,090 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088D8JG3L?tag=theofficejournal-20",
    "description": "The KYY is a sensible everyday portable monitor: a 15.6-inch 1080p IPS panel, two USB-C ports and a mini-HDMI input, a cover that doubles as a stand at two fixed angles, and a 1.7 lb weight.\n\nIt was one of the lower-priced monitors here at the time of writing. The cover stand offers only two angles, and mini-HDMI needs a specific cable.",
    "specs": [
      "Panel: 15.6\" 1080p IPS",
      "Inputs: 2x USB-C, mini-HDMI",
      "Stand: cover, 2 angles",
      "Weight: 1.7 lb"
    ],
    "pros": [
      "Low price",
      "Two USB-C ports",
      "Protective cover"
    ],
    "cons": [
      "Two fixed angles only",
      "Mini-HDMI",
      "Refresh and brightness not stated"
    ],
    "bestFor": "A laptop second screen for travel and everyday work.",
    "summary": "A 15.6-inch 1080p IPS monitor with two USB-C and mini-HDMI inputs and a cover stand, 1.7 lb.",
    "skipIf": "You want a sharper screen; the ARZOPA 16-inch 2.5K has 2560 x 1600."
  },
  {
    "id": "mnn-156-under200",
    "rank": 2,
    "badge": "Lowest Price",
    "name": "MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR",
    "price": "$49.99",
    "rating": "4.3 stars from 11,984 Amazon ratings",
    "reviews": "11,984 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/5130Dsp2DML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9NNWXVP?tag=theofficejournal-20",
    "description": "The MNN is the least expensive monitor here, about $50 at the time of writing: a 15.6-inch 1080p 60Hz panel with dual USB-C, HDMI, several display modes and an HDR mode.\n\nAn HDR mode on a budget panel is unlikely to match true HDR displays, and brightness isn't stated.",
    "specs": [
      "Panel: 15.6\" 1080p, 60Hz",
      "Inputs: 2x USB-C, HDMI",
      "Modes: multiple, HDR mode"
    ],
    "pros": [
      "Lowest price here",
      "Dual USB-C",
      "Standard HDMI"
    ],
    "cons": [
      "Brightness not stated",
      "HDR mode likely limited",
      "Less established brand"
    ],
    "bestFor": "A basic second screen for as little as possible.",
    "summary": "A 15.6-inch 1080p 60Hz monitor with dual USB-C, HDMI and an HDR mode, the cheapest here.",
    "skipIf": "You want better color; the EVICIV lists 125% sRGB."
  },
  {
    "id": "eviciv-185-under200",
    "rank": 3,
    "badge": "Best Large Screen",
    "name": "EVICIV Portable Monitor 18.5 Inch 120Hz, 125% sRGB FreeSync",
    "price": "$119.99",
    "rating": "4.4 stars from 10,899 Amazon ratings",
    "reviews": "10,899 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51OlDMVIAEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWXLCTGZ?tag=theofficejournal-20",
    "description": "The EVICIV offers the largest screen here, 18.5 inches, at 120Hz with FreeSync and a listed 125% sRGB color range, plus full-size HDMI, dual USB-C, a 75mm VESA mount and a 360-degree bracket.\n\nIts size makes it less portable, closer to a compact desk monitor you can move.",
    "specs": [
      "Panel: 18.5\", 120Hz, FreeSync",
      "Color: 125% sRGB (listed)",
      "Inputs: HDMI + 2x USB-C",
      "Mount: 75 x 75mm VESA, 360° bracket"
    ],
    "pros": [
      "Largest screen",
      "120Hz with FreeSync",
      "VESA mount"
    ],
    "cons": [
      "Less portable",
      "Resolution not stated in summary",
      "Heavier than 15.6-inch models"
    ],
    "bestFor": "A movable second screen on a desk, or light gaming.",
    "summary": "An 18.5-inch 120Hz monitor with 125% sRGB, FreeSync, full-size HDMI and VESA.",
    "skipIf": "You travel often; a 15.6-inch model is lighter."
  },
  {
    "id": "arzopa-16-under200",
    "rank": 4,
    "badge": "Best Sharp 2.5K",
    "name": "ARZOPA 16\" 2.5K Portable Monitor, 2560x1600 QHD IPS Display 123% sRGB",
    "price": "$124.98",
    "rating": "4.3 stars from 1,226 Amazon ratings",
    "reviews": "1,226 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41bfhtn2lOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH9XR3G4?tag=theofficejournal-20",
    "description": "The ARZOPA 16-inch 2.5K is the sharpest option here with a clear resolution: 2560 x 1600 on a 16-inch 16:10 panel, rated at 350 nits and 123% sRGB, weighing 1.46 lb, with USB-C and HDMI.\n\nIts refresh rate isn't stated in the summary, so assume 60Hz unless the listing says otherwise.",
    "specs": [
      "Panel: 16\" 2560 x 1600",
      "Brightness: 350 nits",
      "Color: 123% sRGB (listed)",
      "Inputs: USB-C + HDMI",
      "Weight: 1.46 lb"
    ],
    "pros": [
      "Sharp 2.5K",
      "Light",
      "Stated brightness"
    ],
    "cons": [
      "Refresh not stated",
      "Fewer ports than some",
      "Costs more than 1080p models"
    ],
    "bestFor": "Text-heavy work where sharpness matters.",
    "summary": "A 16-inch 2560 x 1600 IPS monitor, 350 nits, 123% sRGB, 1.46 lb.",
    "skipIf": "You want high refresh; the cocopar 2.5K adds 144Hz."
  },
  {
    "id": "innoview-16-under200",
    "rank": 5,
    "badge": "Value High-Refresh 2.5K",
    "name": "InnoView 16\" Portable Monitor 120Hz 2.5K QHD 2160x1600 100% sRGB",
    "price": "$109.99",
    "rating": "4.2 stars from 1,768 Amazon ratings",
    "reviews": "1,768 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/511XKdZvQQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FFRQFGML?tag=theofficejournal-20",
    "description": "The InnoView pairs a 16-inch panel with 120Hz and 100% sRGB, at a lower price than the other 2.5K monitors at the time of writing, with dual USB-C and HDMI and a lightweight stand.\n\nThe listing gives 2160 x 1600, an unusual figure that may be a typo for 2560 x 1600; confirm before buying. A power adapter isn't included, which you may need for HDMI use.",
    "specs": [
      "Panel: 16\", 120Hz",
      "Resolution: 2160 x 1600 (as listed; confirm)",
      "Color: 100% sRGB",
      "Inputs: 2x USB-C + HDMI",
      "Adapter: not included"
    ],
    "pros": [
      "120Hz for less",
      "Good color listed",
      "Dual USB-C"
    ],
    "cons": [
      "Resolution figure unclear",
      "No power adapter",
      "Stand design basic"
    ],
    "bestFor": "High refresh on a budget.",
    "summary": "A 16-inch 120Hz monitor listed at 2160 x 1600, 100% sRGB; power adapter not included.",
    "skipIf": "You need a clearly stated resolution; the ARZOPA 2.5K lists 2560 x 1600."
  },
  {
    "id": "cocopar-156-under200",
    "rank": 6,
    "badge": "Best 1080p with VESA",
    "name": "cocopar Portable Monitor 15.6 Inch 1080P FHD 60Hz 85% sRGB",
    "price": "$109.99",
    "rating": "4.8 stars from 6,301 Amazon ratings",
    "reviews": "6,301 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31y1n0H2EtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZLY26FW?tag=theofficejournal-20",
    "description": "The cocopar 15.6-inch is a straightforward 1080p 60Hz monitor with an 85% sRGB listing, full-size HDMI, dual USB-C and VESA mounting holes, useful for fixing it to an arm.\n\nIt cost about as much as the higher-spec InnoView at the time of writing, so its VESA mount and brand feedback are the reasons to choose it.",
    "specs": [
      "Panel: 15.6\" 1080p, 60Hz",
      "Color: 85% sRGB",
      "Inputs: HDMI + 2x USB-C",
      "Mount: VESA holes"
    ],
    "pros": [
      "VESA mountable",
      "Full-size HDMI",
      "Positive buyer feedback"
    ],
    "cons": [
      "Priced like higher-spec models",
      "Narrower color",
      "60Hz"
    ],
    "bestFor": "Mounting a portable monitor on an arm.",
    "summary": "A 15.6-inch 1080p 60Hz monitor with full-size HDMI, dual USB-C and VESA holes.",
    "skipIf": "You want more for the money; the InnoView adds 120Hz."
  },
  {
    "id": "arzopa-161-144-under200",
    "rank": 7,
    "badge": "Best 144Hz Under $100",
    "name": "ARZOPA 16.1'' 144Hz Portable Gaming Monitor, 106% sRGB",
    "price": "$96.99",
    "rating": "4.5 stars from 2,739 Amazon ratings",
    "reviews": "2,739 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51wFOAMcM4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH9WTW56?tag=theofficejournal-20",
    "description": "The ARZOPA 16.1-inch runs at 144Hz, the highest refresh among the 1080p monitors here, with 106% sRGB listed, two USB-C and mini-HDMI inputs and a built-in kickstand, under $100 at the time of writing.\n\nThe listing doesn't mention adaptive sync, which helps smooth games with varying frame rates.",
    "specs": [
      "Panel: 16.1\" 1080p, 144Hz",
      "Color: 106% sRGB",
      "Inputs: 2x USB-C + mini-HDMI",
      "Stand: built-in kickstand"
    ],
    "pros": [
      "144Hz",
      "Kickstand",
      "Low price"
    ],
    "cons": [
      "No adaptive sync listed",
      "Mini-HDMI",
      "1080p"
    ],
    "bestFor": "Console or laptop gaming on the go.",
    "summary": "A 16.1-inch 1080p 144Hz monitor with 106% sRGB and a built-in kickstand.",
    "skipIf": "You want FreeSync; the EVICIV lists it."
  },
  {
    "id": "cocopar-16-under200",
    "rank": 8,
    "badge": "Best High-End Under $200",
    "name": "cocopar Portable Monitor 16 Inch 2.5K QHD 110% sRGB 144Hz USB-C, 120Hz HDMI",
    "price": "$164.98",
    "rating": "4.8 stars from 6,301 Amazon ratings",
    "reviews": "6,301 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41taGyfYchL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR8D6BQ3?tag=theofficejournal-20",
    "description": "The cocopar 16-inch 2.5K combines sharpness and speed: a 2.5K panel at 144Hz over USB-C or 120Hz over HDMI, 110% sRGB, a metal chassis, full-size HDMI, dual USB-C and VESA holes.\n\nIt was the most expensive monitor here at the time of writing, close to the $200 ceiling.",
    "specs": [
      "Panel: 16\" 2.5K",
      "Refresh: 144Hz (USB-C) / 120Hz (HDMI)",
      "Color: 110% sRGB",
      "Build: metal chassis",
      "Inputs: HDMI + 2x USB-C; VESA"
    ],
    "pros": [
      "Sharp and fast",
      "Metal build",
      "VESA mountable"
    ],
    "cons": [
      "Most expensive here",
      "Heavier than plastic models",
      "Needs capable source for 144Hz"
    ],
    "bestFor": "Sharp text and smooth motion in one monitor.",
    "summary": "A 16-inch 2.5K monitor with 144Hz over USB-C, 120Hz over HDMI, 110% sRGB and a metal chassis.",
    "skipIf": "Budget matters; the ARZOPA 144Hz costs much less at 1080p."
  }
];

export const howWeEvaluated = [
  {
    "title": "Panel",
    "description": "We compared size, resolution, refresh and listed color."
  },
  {
    "title": "Connections",
    "description": "We noted USB-C, HDMI and mini-HDMI inputs."
  },
  {
    "title": "Portability",
    "description": "We noted weight and stand type."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check your laptop's USB-C",
    "explanation": "Single-cable use needs video output (DisplayPort Alt Mode or Thunderbolt)."
  },
  {
    "criterion": "Choose resolution",
    "explanation": "2.5K (ARZOPA 16, cocopar 16) is sharper for text than 1080p."
  },
  {
    "criterion": "Choose refresh rate",
    "explanation": "60Hz suits office work; 120–144Hz suits gaming and smooth scrolling."
  },
  {
    "criterion": "Consider size and stand",
    "explanation": "18.5 inches is less portable; VESA holes allow arm mounting."
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
          "Everyday travel screen",
          "KYY 15.6\""
        ],
        [
          "Lowest price",
          "MNN 15.6\""
        ],
        [
          "Largest screen",
          "EVICIV 18.5\""
        ],
        [
          "Sharp text",
          "ARZOPA 16\" 2.5K"
        ],
        [
          "High refresh on a budget",
          "ARZOPA 16.1\" 144Hz or InnoView 120Hz"
        ],
        [
          "VESA mount",
          "cocopar 15.6\" or 16\""
        ],
        [
          "Sharp and fast",
          "cocopar 16\" 2.5K 144Hz"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Can one USB-C cable run it?",
    "a": "Yes, if your laptop's USB-C port supports video output and enough power."
  },
  {
    "q": "1080p or 2.5K?",
    "a": "2.5K is noticeably sharper for text on a 16-inch screen; 1080p costs less."
  },
  {
    "q": "Do I need 144Hz?",
    "a": "For gaming or smooth motion; office work is fine at 60Hz."
  },
  {
    "q": "Can I mount it on an arm?",
    "a": "The models with VESA holes, such as the cocopar and EVICIV, can be mounted."
  },
  {
    "q": "Will it work with a phone or console?",
    "a": "Many support USB-C or HDMI sources; check the listing for your device."
  }
];

export const bottomLine = [
  "For most laptop users, the KYY 15.6-inch is an inexpensive everyday second screen, and the ARZOPA 16-inch 2.5K is worth a little more for sharper text.",
  "For gaming, the ARZOPA 144Hz is the value pick and the cocopar 16-inch 2.5K 144Hz the high-end option. The EVICIV suits a movable desk screen."
];

export const relatedGuides = [
  {
    "href": "/guide/best-monitor-under-100",
    "title": "Best Monitor Under $100 (2026)"
  },
  {
    "href": "/guide/best-2k-portable-monitors",
    "title": "Best 2K Portable Monitors (2026)"
  },
  {
    "href": "/guide/best-portable-monitors-with-vesa-mounts",
    "title": "Best Portable Monitors with VESA Mounts (2026)"
  }
];
