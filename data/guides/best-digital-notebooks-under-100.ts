// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-digital-notebooks-under-100";

export const guideTitle = "The Best Digital Notebooks Under $100: Reusable Paper and Bluetooth Writing Pads";

export const breadcrumbLabel = "Best Digital Notebooks Under $100";

export const metaTitle = "Best Digital Notebooks Under $100: Rocketbook, XPPen and Huion (2026)";

export const metaDescription = "Under $100 there are no E Ink tablets, but reusable Rocketbook notebooks and Bluetooth writing pads can still digitize handwriting. We compare how each captures and exports notes.";

export const mainKeyword = "digital notebook under 100";

export const introParagraphs = [
  "Set expectations first: there is no E Ink writing tablet like a reMarkable under $100. What this budget buys is either a reusable Rocketbook notebook, where you write on special paper, scan pages with a phone app and wipe them clean, or a Bluetooth writing pad from XPPen or Huion that records handwriting and syncs it to your phone.",
  "The choice comes down to how notes should reach your phone. Rocketbooks cost $15 to $27 at the time of writing and need a scan step; the XPPen and Huion pads cost more and capture notes as you write. Very cheap LCD \"writing tablets\" that cannot save anything are not included.",
  "Our comparison is based on published specifications, included accessories and price position, not hands-on testing."
];

export const lastUpdated = "2026-08-08";

export const readTime = "7 min";

export const heroImage = "https://m.media-amazon.com/images/I/41XNHQEwuyL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "b0dp3jf67q-under100dn",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Rocketbook Core Reusable Smart Notebook, Letter Size, Blue",
    "price": "$26.99",
    "rating": "4.5",
    "reviews": "100",
    "imageUrl": "https://m.media-amazon.com/images/I/41XNHQEwuyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JF67Q?tag=theofficejournal-20",
    "description": "The letter-size Rocketbook Core is the sensible default: full 8.5 x 11-inch pages you write on, scan with the Rocketbook app and wipe with a damp cloth, for about $27 at the time of writing.\n\nThe full page leaves plenty of room for meeting notes or sketches, and notes can be sent from the app to cloud services.\n\nIt needs a compatible erasable pen, and notes only become digital when you scan them.",
    "specs": [
      "Size: 8.5 x 11\"",
      "Reusable pages, erase with damp cloth",
      "Capture: scan with Rocketbook app"
    ],
    "pros": [
      "Full letter-size page",
      "Low price",
      "App capture and export"
    ],
    "cons": [
      "Needs a compatible erasable pen",
      "Scanning step required"
    ],
    "bestFor": "Most note-takers who want handwritten notes on their phone for little money.",
    "summary": "A letter-size reusable Rocketbook that you scan with an app and wipe clean.",
    "skipIf": "You want notes to sync as you write; the XPPen Note Plus does that."
  },
  {
    "id": "b0dp3hly4j-under100dn",
    "rank": 2,
    "badge": "Best Portable Rocketbook",
    "name": "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8",
    "price": "$25.99",
    "rating": "4.5",
    "reviews": "226",
    "imageUrl": "https://m.media-amazon.com/images/I/41BvyAlSv+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3HLY4J?tag=theofficejournal-20",
    "description": "The executive-size Rocketbook Core works exactly like the letter-size version in a smaller 6 x 8.8-inch format that is easier to carry, and it costs slightly less at the time of writing.\n\nThe smaller page means more frequent scanning and erasing if you write a lot.\n\nIt has fewer buyer reviews than the letter-size and mini Rocketbooks.",
    "specs": [
      "Size: 6 x 8.8\"",
      "Reusable pages",
      "Capture: scan with Rocketbook app"
    ],
    "pros": [
      "More portable",
      "Slightly cheaper than letter size"
    ],
    "cons": [
      "Smaller page",
      "Scanning step required"
    ],
    "bestFor": "People who carry a notebook between meetings or classes.",
    "summary": "The same Rocketbook Core system in a 6 x 8.8-inch executive size.",
    "skipIf": "You need room to spread out; the letter-size Core is larger for about a dollar more."
  },
  {
    "id": "b07czf628c-under100dn",
    "rank": 3,
    "badge": "Lowest-Cost Option",
    "name": "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "11,065",
    "imageUrl": "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CZF628C?tag=theofficejournal-20",
    "description": "The Rocketbook Mini is the cheapest way to try the system: a small spiral notebook for quick notes and lists, for about $15 at the time of writing. It is widely reviewed.\n\nIt uses the same scan-and-erase routine as the larger Rocketbooks.\n\nThe small page fills quickly, so it suits lists and reminders better than long notes.",
    "specs": [
      "Size: mini, spiral-bound",
      "Reusable pages",
      "Capture: scan with Rocketbook app"
    ],
    "pros": [
      "Lowest price here",
      "Pocketable",
      "Widely reviewed"
    ],
    "cons": [
      "Small page",
      "Scanning step required"
    ],
    "bestFor": "Trying reusable notebooks, or keeping a pocket notebook for lists.",
    "summary": "A mini spiral Rocketbook for quick notes, for about $15.",
    "skipIf": "You take long notes; a Core notebook gives more space."
  },
  {
    "id": "b0gcdrfjqg-under100dn",
    "rank": 4,
    "badge": "Best Bluetooth Writing Pad",
    "name": "XPPen Note Plus Digital Notebook with Pen, Syncs to Phone",
    "price": "$69.98",
    "rating": "4.4",
    "reviews": "1,889",
    "imageUrl": "https://m.media-amazon.com/images/I/31djMiO0-jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GCDRFJQG?tag=theofficejournal-20",
    "description": "The XPPen Note Plus is the pick if the scanning step is what puts you off a Rocketbook: it is a writing pad with a pen that syncs your handwriting to your phone over Bluetooth, for about $70 at the time of writing.\n\nIt is widely reviewed for its category. It is not an E Ink tablet, and the listing does not detail export formats or handwriting-to-text conversion, so check XPPen's app features for what you need.\n\nIt costs more than any Rocketbook, and the pen or pad may need charging; check the listing for power details.",
    "specs": [
      "Type: Bluetooth writing pad with pen",
      "Sync: to phone app"
    ],
    "pros": [
      "Notes sync without scanning",
      "Widely reviewed"
    ],
    "cons": [
      "Costs more than a Rocketbook",
      "App features and export formats not detailed in the listing"
    ],
    "bestFor": "People who want notes on their phone as they write without paying for an E Ink tablet.",
    "summary": "A writing pad with pen that syncs handwriting to your phone over Bluetooth.",
    "skipIf": "You are happy to scan pages; a Rocketbook costs far less."
  },
  {
    "id": "b0bg2t9sgv-under100dn",
    "rank": 5,
    "badge": "Best for Notes and Drawing",
    "name": "HUION Note 2-in-1 Digital Notebook Drawing Tablet",
    "price": "$87.99",
    "rating": "4.2",
    "reviews": "671",
    "imageUrl": "https://m.media-amazon.com/images/I/41PJ-F0w37L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BG2T9SGV?tag=theofficejournal-20",
    "description": "The Huion Note is the choice if you also want to draw: a 2-in-1 digital notebook and drawing tablet with a battery-free pen, so the pen never needs charging.\n\nIt costs about $88 at the time of writing, the most here, and buyer feedback is slightly less positive than for the XPPen.\n\nAs with the XPPen, check Huion's app and export options against how you plan to use your notes.",
    "specs": [
      "Type: notebook and drawing tablet",
      "Pen: battery-free"
    ],
    "pros": [
      "Doubles as a drawing tablet",
      "Battery-free pen"
    ],
    "cons": [
      "Most expensive option here",
      "Slightly weaker buyer feedback than the XPPen"
    ],
    "bestFor": "Students or creatives who want note capture and a drawing tablet in one.",
    "summary": "A Huion notebook-and-drawing tablet with a battery-free pen.",
    "skipIf": "You only take notes; the XPPen costs less."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capture method",
    "description": "We separated scan-based reusable notebooks from Bluetooth writing pads, and excluded LCD pads that cannot save notes."
  },
  {
    "title": "Size and accessories",
    "description": "We compared page sizes and pen details."
  },
  {
    "title": "Price position",
    "description": "We compared what each step up in price adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Scan or live sync",
    "explanation": "Rocketbooks need a phone scan after writing; the XPPen and Huion pads capture notes as you write."
  },
  {
    "criterion": "Page size",
    "explanation": "Rocketbooks here come in letter (8.5 x 11 inches), executive (6 x 8.8 inches) and mini sizes."
  },
  {
    "criterion": "Export and handwriting conversion",
    "explanation": "Check where notes can go (cloud services, PDF, note apps) and whether handwriting-to-text is included or costs extra."
  },
  {
    "criterion": "Pen and power",
    "explanation": "Rocketbooks need a compatible erasable pen. The Huion's pen is battery-free; check the XPPen listing for charging details."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Most note-takers",
          "Rocketbook Core letter",
          "Full page, low price"
        ],
        [
          "Portability",
          "Rocketbook Core executive",
          "6 x 8.8 inches"
        ],
        [
          "Lowest cost",
          "Rocketbook Mini",
          "About $15"
        ],
        [
          "No scanning",
          "XPPen Note Plus",
          "Bluetooth sync"
        ],
        [
          "Notes and drawing",
          "Huion Note",
          "Battery-free pen, drawing tablet"
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
        "Products"
      ],
      "rows": [
        [
          "About $15–$27",
          "Rocketbook Mini, Core executive, Core letter"
        ],
        [
          "About $70–$88",
          "XPPen Note Plus, Huion Note"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Can I get an E Ink smart notebook under $100?",
    "a": "Not new, at the time of writing. Under $100 the realistic choices are reusable paper notebooks and Bluetooth writing pads."
  },
  {
    "q": "What's the closest thing to a digital notebook under $100?",
    "a": "The XPPen Note Plus, which syncs handwriting to your phone over Bluetooth instead of requiring a scan."
  },
  {
    "q": "What's the cheapest option that still captures notes?",
    "a": "The Rocketbook Mini, at about $15 at the time of writing."
  },
  {
    "q": "Do these save notes automatically?",
    "a": "Rocketbooks require you to scan each page with the app before erasing. The XPPen and Huion pads sync to your phone as you write."
  },
  {
    "q": "Are there cheap writing tablets that can't save notes?",
    "a": "Yes. Basic LCD writing pads often cannot save or export anything. None are included here."
  }
];

export const bottomLine = [
  "For most people, a Rocketbook is enough: the letter-size Core for general notes, the executive size for carrying, or the Mini to try the system for about $15.",
  "If scanning each page is the obstacle, the XPPen Note Plus syncs as you write for about $70, and the Huion Note adds drawing-tablet use with a battery-free pen at the top of the budget."
];

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-under-200",
    "title": "Best Digital Notebooks Under $200 (2026)"
  },
  {
    "href": "/guide/best-reusable-digital-notebooks",
    "title": "Best Reusable Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  }
];
