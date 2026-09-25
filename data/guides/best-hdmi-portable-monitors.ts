// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-hdmi-portable-monitors";

export const guideTitle = "The Best HDMI Portable Monitors for Consoles, Older Laptops and PCs";

export const breadcrumbLabel = "Best HDMI Portable Monitors";

export const metaTitle = "Best HDMI Portable Monitors for Consoles and Older Laptops (2026)";

export const metaDescription = "We compared 15.6-inch HDMI portable monitors on full-size versus mini-HDMI, power setup, stand design, VESA mounting and warranty, for consoles, desktops and laptops without USB-C video.";

export const mainKeyword = "HDMI portable monitor";

export const introParagraphs = [
  "An HDMI portable monitor is the answer when your device cannot send video over USB-C: consoles such as the PS5 and Xbox Series X|S, many desktop graphics cards and older laptops. Every monitor here accepts HDMI, but the port differs. Some use full-size HDMI, which takes a standard cable; others use mini-HDMI, which needs the right cable or an adapter.",
  "The other practical point is power. HDMI carries no power, so when you connect over HDMI each of these monitors also needs a USB cable to a wall adapter or powered port. Stands differ too: folding covers, built-in kickstands, or VESA holes for a monitor arm.",
  "All seven are 15.6-inch 1080p IPS monitors. Our comparison is based on published specifications, included accessories, warranty terms and price position, not hands-on testing."
];

export const lastUpdated = "2026-07-28";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "kyy-156-1080p-portable-monitor-cover",
    "rank": 1,
    "badge": "Best Overall",
    "name": "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender w/Cover",
    "price": "$62.99",
    "rating": "4.4 stars from 13,089 Amazon ratings",
    "reviews": "13,089 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088D8JG3L?tag=theofficejournal-20",
    "description": "The KYY with smart cover is the sensible all-rounder: a 15.6-inch 1080p IPS panel with two USB-C ports and mini-HDMI, and a mini-HDMI-to-HDMI cable in the box. It is the most widely reviewed monitor here.\n\nAt 1.7 lb and 0.3 inches thick it travels easily, and it has built-in speakers and a headphone jack. The magnetic cover doubles as a stand with two angle positions.\n\nThe mini-HDMI port ties you to the included cable or an adapter, and on HDMI it still needs USB power.",
    "specs": [
      "Panel: 15.6\" 1080p IPS",
      "Inputs: 2 x USB-C, mini-HDMI",
      "Mini-HDMI-to-HDMI cable included",
      "Stand: magnetic cover, two angles",
      "Weight: 1.7 lb",
      "Speakers, 3.5mm audio out"
    ],
    "pros": [
      "Most widely reviewed here",
      "HDMI cable included",
      "Light and slim"
    ],
    "cons": [
      "Mini-HDMI rather than full-size",
      "Only two stand angles",
      "Needs USB power over HDMI"
    ],
    "bestFor": "Most buyers connecting a laptop, phone or console, at home or on the move.",
    "summary": "A widely reviewed 15.6-inch 1080p monitor with mini-HDMI, two USB-C ports and a cover-stand.",
    "skipIf": "You want a standard HDMI port; the UPERFECT or cocopar have full-size HDMI."
  },
  {
    "id": "cocopar-156-1080p-vesa-mountable",
    "rank": 2,
    "badge": "Best Color and Mounting Options",
    "name": "cocopar Portable Monitor 15.6 Inch 1080P FHD 60Hz 85% sRGB Travel Monitor with Speaker HDMI USB-C",
    "price": "$109.99",
    "rating": "4.8 stars from 6,300 Amazon ratings",
    "reviews": "6,300 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31y1n0H2EtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZLY26FW?tag=theofficejournal-20",
    "description": "The cocopar is the step up: a full-size HDMI port with two full-featured USB-C ports, a panel listed at 85 percent sRGB, and VESA mounting holes on the back for a monitor arm. It is also the best-rated monitor here.\n\nIt weighs 1.5 lb without its case and includes a smart stand case.\n\nIt is the most expensive monitor here at the time of writing, the case adds weight (2.4 lb together), and it still needs USB power over HDMI.",
    "specs": [
      "Panel: 15.6\" 1080p IPS, 85% sRGB",
      "Inputs: 2 x USB-C, full-size HDMI",
      "VESA mounting holes",
      "Weight: 1.5 lb (2.4 lb with case)",
      "Smart stand case included"
    ],
    "pros": [
      "Full-size HDMI",
      "VESA mounting",
      "Wider listed color coverage"
    ],
    "cons": [
      "Most expensive here",
      "Heavier with the case",
      "Needs USB power over HDMI"
    ],
    "bestFor": "Buyers who want full-size HDMI, better color on paper and arm mounting.",
    "summary": "Full-size HDMI, two USB-C ports, 85% sRGB and VESA mounting holes.",
    "skipIf": "Price matters most; the UPERFECT has full-size HDMI and VESA for much less."
  },
  {
    "id": "uperfect-156-fhd-vesa-otg",
    "rank": 3,
    "badge": "Best Value Full-Size HDMI",
    "name": "UPERFECT Portable Monitor, 15.6\" IPS 1920x1080 FHD Eye Care Travel Screen",
    "price": "$65.99",
    "rating": "4.5 stars from 5,189 Amazon ratings",
    "reviews": "5,189 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41GAXbxIzZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07TWGBG3P?tag=theofficejournal-20",
    "description": "The UPERFECT is the value pick for consoles, desktop graphics cards and older PCs: a standard full-size HDMI input, two USB-C ports, an OTG port for a mouse or keyboard, and a 75 x 75mm VESA mount.\n\nIt has a flicker-free backlight, built-in speakers and a lined smart cover, and it is well reviewed for its price.\n\nThe listing does not clearly confirm USB-C video (DisplayPort Alt Mode), so treat HDMI as the main video input, and it needs USB power over HDMI.",
    "specs": [
      "Panel: 15.6\" 1080p IPS, flicker-free",
      "Inputs: full-size HDMI, 2 x USB-C, OTG",
      "VESA: 75 x 75mm",
      "Smart cover",
      "Built-in speakers"
    ],
    "pros": [
      "Full-size HDMI",
      "VESA mount",
      "OTG port"
    ],
    "cons": [
      "USB-C video not clearly confirmed",
      "Needs USB power over HDMI"
    ],
    "bestFor": "Consoles, desktops and older laptops that output full-size HDMI.",
    "summary": "Full-size HDMI, dual USB-C, an OTG port and a 75 x 75mm VESA mount for about $66.",
    "skipIf": "You mainly connect a USB-C laptop; the KYY supports USB-C clearly."
  },
  {
    "id": "asus-zenscreen-mb169ck-156",
    "rank": 4,
    "badge": "Best Warranty",
    "name": "ASUS ZenScreen 15.6\" Portable Monitor for Laptop (MB169CK)",
    "price": "$89.00",
    "rating": "4.4 stars from 2,879 Amazon ratings",
    "reviews": "2,879 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41I0gueZ9NL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPFYVPBG?tag=theofficejournal-20",
    "description": "The ASUS ZenScreen MB169CK is the choice if warranty and build matter: ASUS backs it for three years, the longest here, and lists TÜV certification for low blue light and flicker-free operation.\n\nA 360-degree kickstand replaces the folding cover, it has a tripod socket, and ASUS's auto-rotate software helps with portrait use on Windows. Inputs are two USB-C ports and mini-HDMI.\n\nMini-HDMI means checking your cable, and it costs more than the KYY and UPERFECT without a large specification advantage.",
    "specs": [
      "Panel: 15.6\" 1080p IPS, anti-glare",
      "Inputs: 2 x USB-C, mini-HDMI",
      "Stand: 360° kickstand, tripod socket",
      "TÜV low blue light and flicker-free",
      "Weight: 0.78kg",
      "Warranty: 3 years"
    ],
    "pros": [
      "Three-year warranty",
      "Certified eye-care features",
      "Sturdy kickstand"
    ],
    "cons": [
      "Mini-HDMI",
      "Auto-rotate is Windows-focused",
      "Costs more than similar monitors"
    ],
    "bestFor": "Buyers who value a longer warranty and an established brand.",
    "summary": "ASUS's ZenScreen with a three-year warranty, TÜV eye-care certification and a 360° kickstand.",
    "skipIf": "You want full-size HDMI; the UPERFECT costs less and has it."
  },
  {
    "id": "arzopa-156-fhd-kickstand",
    "rank": 5,
    "badge": "Best Built-In Kickstand",
    "name": "ARZOPA Portable Monitor 15.6'' FHD 1080P - Ultra-Slim with Kickstand",
    "price": "$79.99",
    "rating": "4.6 stars from 3,042 Amazon ratings",
    "reviews": "3,042 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51qgAD7WZSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH9XW8RK?tag=theofficejournal-20",
    "description": "The ARZOPA builds its kickstand into the metal housing, so there is no cover to carry or lose. It supports duplicate, extend and second-screen modes, and ARZOPA lists compatibility with PS4, PS5, Xbox and Switch as well as computers.\n\nIt weighs 1.6 lb and is well rated by buyers.\n\nThe listing does not specify full-size or mini-HDMI, so check before buying for a console, and it has no VESA mount.",
    "specs": [
      "Panel: 15.6\" 1080p IPS",
      "Inputs: USB-C and HDMI (port size not specified)",
      "Built-in kickstand, metal housing",
      "Weight: 1.6 lb",
      "Listed console compatibility"
    ],
    "pros": [
      "Kickstand always attached",
      "Metal housing",
      "Listed console support"
    ],
    "cons": [
      "HDMI port size not stated",
      "No VESA mount"
    ],
    "bestFor": "People who set the monitor up often and want the stand built in.",
    "summary": "A metal-bodied monitor with a kickstand built into the housing and listed console support.",
    "skipIf": "You want to mount it on an arm; the cocopar or UPERFECT have VESA holes."
  },
  {
    "id": "kyy-156-fhd-gaming-hdmi-cable-included",
    "rank": 6,
    "badge": "Best Console Bundle",
    "name": "KYY Portable Monitor 15.6'' FHD 1080P USB C HDMI Gaming Monitor Ultra-Slim IPS Display",
    "price": "$62.99",
    "rating": "4.5 stars from 5,126 Amazon ratings",
    "reviews": "5,126 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51zvuRNUGoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B088TLQR3K?tag=theofficejournal-20",
    "description": "This KYY is the pick if you want everything for a console in the box: it includes a mini-HDMI-to-HDMI cable, two USB-C cables and a screen protector, and adds an HDR mode with a listed 1000:1 contrast ratio.\n\nIt otherwise matches the top KYY: 1.7 lb, 0.3 inches thick, two USB-C ports, mini-HDMI and a two-angle folding cover, for the same price at the time of writing.\n\nThe port is still mini-HDMI, and it needs USB power over HDMI.",
    "specs": [
      "Panel: 15.6\" 1080p IPS, HDR mode, 1000:1",
      "Inputs: 2 x USB-C, mini-HDMI",
      "Includes mini-HDMI cable, 2 USB-C cables, screen protector",
      "Stand: folding cover, two angles",
      "Weight: 1.7 lb"
    ],
    "pros": [
      "Cables included",
      "Screen protector included",
      "Same price as the top KYY"
    ],
    "cons": [
      "Mini-HDMI",
      "Two stand angles"
    ],
    "bestFor": "Console players who want all the cables included.",
    "summary": "A KYY with HDR mode, HDMI and USB-C cables and a screen protector in the box.",
    "skipIf": "You want full-size HDMI; the UPERFECT has it."
  },
  {
    "id": "mnn-156-fhd-budget-usb-c-hdmi",
    "rank": 7,
    "badge": "Lowest-Cost Option",
    "name": "MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR Gaming Laptop",
    "price": "$49.99",
    "rating": "4.3 stars from 11,979 Amazon ratings",
    "reviews": "11,979 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/5130Dsp2DML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9NNWXVP?tag=theofficejournal-20",
    "description": "The MNN is the lowest-priced monitor here at about $50 at the time of writing, with a 1080p IPS panel, an HDR mode, two full-featured USB-C ports and HDMI, and a smart cover that doubles as a stand.\n\nIt supports copy, extended and portrait modes and has a large review base for its price.\n\nBuyer feedback is a little weaker than for the other picks, the listing does not confirm full-size or mini-HDMI, and there is no VESA mount.",
    "specs": [
      "Panel: 15.6\" 1080p IPS, 60Hz, HDR mode",
      "Inputs: 2 x USB-C, HDMI (size not specified)",
      "Stand: smart cover",
      "Copy, extended, portrait modes"
    ],
    "pros": [
      "Lowest price here",
      "Two USB-C ports",
      "Large review base"
    ],
    "cons": [
      "HDMI port size not stated",
      "No VESA mount",
      "Slightly weaker buyer feedback"
    ],
    "bestFor": "Tight budgets.",
    "summary": "A 15.6-inch 1080p monitor with HDR mode, two USB-C ports and HDMI for about $50.",
    "skipIf": "You need to know the HDMI port type for a console; choose a model that states it."
  }
];

export const howWeEvaluated = [
  {
    "title": "HDMI port type",
    "description": "We recorded whether each monitor uses full-size or mini-HDMI and flagged listings that do not say."
  },
  {
    "title": "Power and cables",
    "description": "We noted power requirements over HDMI and included cables."
  },
  {
    "title": "Stand and mounting",
    "description": "We compared covers, kickstands and VESA mounting."
  },
  {
    "title": "Panel, warranty and price",
    "description": "We compared listed color coverage, certifications and warranties against price position. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Full-size or mini-HDMI",
    "explanation": "Full-size HDMI (cocopar, UPERFECT) takes a standard cable from a console or graphics card. Mini-HDMI (both KYYs, ASUS) needs the right cable. The ARZOPA and MNN listings do not specify."
  },
  {
    "criterion": "Power over HDMI",
    "explanation": "HDMI carries no power. Plan for a USB cable to a wall adapter or powered port whenever you use HDMI."
  },
  {
    "criterion": "Stand and mounting",
    "explanation": "Folding covers are light but offer few angles; kickstands (ASUS, ARZOPA) are always attached; VESA holes (cocopar, UPERFECT) allow a monitor arm."
  },
  {
    "criterion": "Included cables",
    "explanation": "The KYY monitors include a mini-HDMI-to-HDMI cable; the KYY console bundle adds USB-C cables and a screen protector."
  },
  {
    "criterion": "Warranty",
    "explanation": "The ASUS lists three years, the longest here. Check the other listings for warranty terms."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By setup",
    "table": {
      "headers": [
        "Setup",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "All-round, widely reviewed",
          "KYY with cover",
          "USB-C and mini-HDMI, cable included"
        ],
        [
          "Console, full-size HDMI",
          "UPERFECT",
          "Full-size HDMI, VESA, OTG"
        ],
        [
          "Console, everything in the box",
          "KYY console bundle",
          "Cables and screen protector"
        ],
        [
          "Better color and arm mounting",
          "cocopar",
          "85% sRGB, full-size HDMI, VESA"
        ],
        [
          "Long warranty",
          "ASUS ZenScreen",
          "Three years, kickstand"
        ],
        [
          "Built-in stand",
          "ARZOPA",
          "Metal kickstand"
        ],
        [
          "Lowest cost",
          "MNN",
          "About $50"
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
        "Monitors"
      ],
      "rows": [
        [
          "About $50–$66",
          "MNN, KYY (both), UPERFECT"
        ],
        [
          "About $80–$89",
          "ARZOPA, ASUS ZenScreen"
        ],
        [
          "About $110",
          "cocopar"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Does an HDMI portable monitor need its own power?",
    "a": "Yes. HDMI carries video only, so each monitor here needs a USB cable to a wall adapter, powered USB port or second port on your device when using HDMI."
  },
  {
    "q": "Can I use a USB-C-only portable monitor with a PS5 or Xbox?",
    "a": "Not directly. Those consoles output video over HDMI, so you need a monitor with an HDMI input like the ones here."
  },
  {
    "q": "What's the difference between full-size and mini-HDMI?",
    "a": "Full-size HDMI takes a standard cable. Mini-HDMI is smaller and needs a mini-HDMI-to-HDMI cable or adapter. The cocopar and UPERFECT use full-size; both KYYs and the ASUS use mini-HDMI."
  },
  {
    "q": "Which monitor is easiest to set up for a console?",
    "a": "The KYY console bundle includes the cables you need. If you prefer a standard HDMI port, the UPERFECT avoids adapters."
  },
  {
    "q": "Can I mount a portable monitor on an arm?",
    "a": "Only if it has VESA holes. Here, the cocopar and UPERFECT (75 x 75mm) do; the others rely on a cover or kickstand."
  },
  {
    "q": "What refresh rate will I get?",
    "a": "All seven are 1080p 60Hz monitors, which suits office work and most console play."
  }
];

export const bottomLine = [
  "For most people, the KYY with smart cover is the proven all-rounder, and its console bundle version adds all the cables. If you want a standard HDMI port, the UPERFECT is the value choice with VESA mounting, and the cocopar adds better listed color at a higher price.",
  "The ASUS ZenScreen is worth paying more for if you want a three-year warranty and a sturdy kickstand, the ARZOPA suits anyone who wants the stand built in, and the MNN is the budget option, though check its HDMI port type before relying on it for a console."
];

export const relatedGuides = [
  {
    "href": "/guide/best-tablet-stands-for-desk",
    "title": "Best Tablet Stands for Desk (2026)"
  },
  {
    "href": "/guide/usb-c-hub-vs-docking-station",
    "title": "USB-C Hub vs Docking Station (2026)"
  },
  {
    "href": "/guide/best-monitor-under-100",
    "title": "Best Monitor Under $100 (2026)"
  },
  {
    "href": "/guide/best-webcam-for-video-calls",
    "title": "Best Webcam for Video Calls (2026)"
  }
];
