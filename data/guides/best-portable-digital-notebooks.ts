// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Check whether AI or handwriting-conversion features are included or require a subscription",
    "explanation": "Digital notebook brands take different approaches to their software features: some bundle handwriting-to-text conversion, document summarization, and cloud sync into the purchase price, while others, most notably reMarkable's Connect plan, gate the more advanced versions of these same features behind an ongoing monthly subscription that continues costing money long after the initial purchase.\n\nThis is a real total-cost-of-ownership difference that a one-time hardware price comparison completely misses, since a cheaper device with a required subscription can cost more over two or three years than a pricier device with everything included upfront.\n\nCheck the specific listing and manufacturer's website for whether the features you actually want are included in the base purchase or require an ongoing plan, and factor that recurring cost into your real comparison."
  },
  {
    "criterion": "Understand that \"AI\" and \"handwriting conversion\" mean different things across different devices",
    "explanation": "The marketing term \"AI\" gets applied to several different features across this product category: converting your handwriting into typed text, summarizing a long document or your own notes, organizing notes automatically by topic, or simply offering a chatbot-style writing assistant, and a device marketed heavily around \"AI\" doesn't necessarily include all, or even most, of these specific capabilities.\n\nThis matters because two devices can both claim AI features while actually doing completely different things, so a buyer specifically wanting handwriting-to-text conversion could end up with a device whose \"AI\" feature is actually a summarization tool that doesn't address their actual need at all.\n\nRead the specific feature list rather than the marketing headline, and confirm the device does the exact task you need (handwriting conversion specifically, not just \"AI\" generally) before buying."
  },
  {
    "criterion": "Confirm the stylus situation: included, sold separately, or requiring a specific model",
    "explanation": "Some digital notebooks include a compatible stylus in the box as part of the purchase price, while others sell the device and stylus as separate purchases, or require a specific proprietary stylus model that isn't interchangeable with a generic capacitive pen, and this distinction can add a meaningful hidden cost on top of the listed device price if you assumed a stylus was included.\n\nBeyond just the cost, stylus quality itself varies in pressure sensitivity, tilt detection, and palm rejection quality, features that matter significantly more for sketching and detailed note-taking than for simple text entry.\n\nCheck the listing specifically for whether a stylus ships in the box, and if writing feel matters to you, look for mentions of pressure levels and palm rejection quality rather than assuming any included stylus performs the same as another."
  },
  {
    "criterion": "Check the export and sync ecosystem, since notes trapped on one device have limited long-term value",
    "explanation": "A digital notebook's real usefulness depends heavily on getting your notes and documents off the device and into a format you can actually use elsewhere, whether that's cloud sync to a phone or computer, export to PDF or Word, or direct integration with a note-taking platform like OneNote or Google Drive, and devices differ meaningfully in which of these paths they actually support natively versus not at all.\n\nThis matters concretely for anyone using the device for professional or academic work where notes need to end up in a shared document, an email, or a specific software ecosystem, since a device with limited export options can leave your handwritten notes effectively stranded on the device itself.\n\nCheck the manufacturer's stated export formats and sync options against the specific software or workflow you actually need to feed notes into, rather than assuming any device syncs to everything."
  },
  {
    "criterion": "Weigh review volume against star rating, especially for newer AI-branded entrants",
    "explanation": "Established digital notebook brands with years on the market carry review counts in the thousands, giving genuine statistical confidence in their ratings, while newer devices, especially ones marketing themselves heavily around AI features to ride current interest in the category, sometimes carry only a few dozen or a few hundred reviews, which is a meaningfully thinner sample to judge long-term reliability and whether the marketed features actually work as claimed.\n\nThis doesn't mean a newer, less-reviewed device is automatically worse, but it does mean the claims on its listing carry less independently verified weight than a device with years of real-world feedback behind it.\n\nWhen comparing an established brand against a newer AI-branded entrant, check both the star rating and the review count together, and weigh a smaller but heavily AI-marketed device's claims more skeptically until more real-world feedback accumulates."
  }
];

export const faq = [
  {
    "q": "What is the most portable type of digital notebook?",
    "a": "A mini reusable paper notepad is generally the lightest and most pocket-friendly since it has no battery or screen, though it offers the least writing space."
  },
  {
    "q": "Are e-ink tablets portable for travel?",
    "a": "Yes, especially models like the reMarkable 2 which are thinner and lighter than premium color alternatives, and their long battery life reduces the need to pack a charger."
  },
  {
    "q": "Are smart pen sets bulky to carry?",
    "a": "The pen itself is usually slim, but check the companion notebook size too, since a bulky notebook offsets a compact pen's portability."
  },
  {
    "q": "Do I sacrifice writing space with a portable notebook?",
    "a": "Generally yes, mini formats trade writing area for compactness, a full letter-size notebook offers more space but is bulkier to carry."
  }
];

export const guideSlug = "best-portable-digital-notebooks";

export const guideTitle = "The Best Portable Digital Notebooks for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "What you need it for",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "",
          "Rocketbook Mini Reusable Smart Notepad"
        ],
        [
          "",
          "ReMarkable 2 with Marker Plus"
        ]
      ]
    }
  },
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
          "Rocketbook Mini Reusable Smart Notepad"
        ],
        [
          "",
          "SyncPen Digital Notebook Smart Pen Set"
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "ReMarkable 2 with Marker Plus"
        ]
      ]
    }
  },
  {
    "subheading": "AI Features Included vs Subscription-Gated",
    "cards": [
      {
        "label": "",
        "text": "AI note tools come with the purchase price, no ongoing cost. In this comparison: check each listing's terms directly."
      },
      {
        "label": "",
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: none explicitly confirmed in this specific roundup, check the listing before assuming."
      }
    ],
    "note": "Check each specific listing for current subscription terms, since these change over time."
  },
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Rocketbook Mini Reusable Smart Notepad"
        ],
        [
          "",
          "Rocketbook Mini Reusable Smart Notepad"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Explicit confirmation of handwriting-to-text conversion (not just \"AI\" generally), and whether that specific feature is included or requires a subscription."
      },
      {
        "label": "",
        "text": "SyncPen Digital Notebook Smart Pen Set fits this specifically: Slim, pocket-friendly pen design."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what reMarkable 2 with Marker Plus offers: Thinner and lighter than the Paper Pro. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Actual size and weight compared within each type",
    "description": "Compared stated dimensions and weight against other products in the same category rather than assuming brand reputation implies portability."
  },
  {
    "title": "Battery weight and charging dependence considered",
    "description": "Weighed how battery life affects real-world portability, e-ink's long battery life reduces the need to carry a charger while traveling."
  },
  {
    "title": "Writing area tradeoff against compactness noted",
    "description": "Flagged where a more portable format, like the Rocketbook Mini, sacrifices writing space compared to a full letter-size option."
  },
  {
    "title": "Pen and notebook bulk assessed together for smart pen sets",
    "description": "Considered the companion notebook size alongside the pen itself, since a compact pen paired with a bulky notebook is not portable overall."
  }
];

export const introParagraphs = [
  "Portability means something different across the three digital notebook types: a paper-based notepad can be pocket-sized, an e-ink tablet's portability depends on screen size and weight, and a smart pen set's bulk usually comes down to the companion notebook rather than the pen itself.",
  "We prioritized the most compact, lightweight option within each type here rather than assuming bigger names are automatically more portable."
];

export const lastUpdated = "2026-08-05";

export const mainKeyword = "portable digital notebook";

export const metaDescription = "How 6 portable digital notebooks compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Portable Digital Notebooks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "rb-mini-black-port",
    "rank": 1,
    "badge": "Most Pocket-Sized Reusable Notepad",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Black",
    "price": "$14.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JFY1Q?tag=theofficejournal-20",
    "description": "5 inches, the most compact reusable paper notebook in this guide. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nOn price, it comes in below Rocketbook Mini Reusable Smart Notepad, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, No on-device digital storage.",
    "specs": [
      "Reusable paper notebook, Type 1",
      "3.5x5.5 inch mini size",
      "Dotted pages, wipe clean and reuse",
      "App-connected scanning"
    ],
    "pros": [
      "pocket-sized at 3.5x5.5 inches",
      "App-connected scanning like larger Rocketbook models",
      "low-cost, one of the cheapest picks here",
      "Wipes clean and reuses"
    ],
    "cons": [
      "Small writing area limits longer notes",
      "Requires a compatible erasable pen",
      "No on-device digital storage"
    ],
    "bestFor": "Buyers who want the smallest possible reusable paper notebook for quick notes on the go."
  },
  {
    "id": "rb-mini-navy-port",
    "rank": 2,
    "badge": "Most Pocket-Sized Reusable Notepad, Navy",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Navy Blue",
    "price": "$14.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41TPpwMWTXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JGGJ9?tag=theofficejournal-20",
    "description": "5 inch footprint for on-the-go notes. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nOn the other side, No on-device digital storage.",
    "specs": [
      "Reusable paper notebook, Type 1",
      "3.5x5.5 inch mini size",
      "Dotted pages, wipe clean and reuse",
      "App-connected scanning"
    ],
    "pros": [
      "pocket-sized footprint",
      "No battery weight, just lightweight coated paper",
      "App-connected scanning",
      "low-cost price"
    ],
    "cons": [
      "Small writing area limits longer notes",
      "Requires a compatible erasable pen",
      "No on-device digital storage"
    ],
    "bestFor": "Buyers wanting the lightest possible portable notebook with a color choice."
  },
  {
    "id": "remarkable2-port",
    "rank": 3,
    "badge": "Most Portable E-Ink Tablet",
    "name": "reMarkable 2 with Marker Plus",
    "price": "$449.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "The reMarkable 2 is noticeably thinner and lighter than the Paper Pro, making it the more portable choice among standalone e-ink tablets when you need an actual screen on the go. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOn the other side, Black and white display only.",
    "specs": [
      "E-ink digital notebook device, Type 2",
      "Thinner and lighter than the Pro model",
      "Marker Plus included",
      "Weeks of battery life"
    ],
    "pros": [
      "Thinner and lighter than the Paper Pro",
      "Long battery life reduces charger dependence",
      "Marker Plus included",
      "Genuine digital screen for on-the-go note taking"
    ],
    "cons": [
      "Heavier and bulkier than any paper-based option",
      "Higher price than portable paper notebooks",
      "Black and white display only"
    ],
    "bestFor": "Buyers who need a genuine digital screen while traveling and want the lightest e-ink option."
  },
  {
    "id": "syncpen-port",
    "rank": 4,
    "badge": "Most Compact Smart Pen Set",
    "name": "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    "price": "$79.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5P2186C?tag=theofficejournal-20",
    "description": "SyncPen's pen itself is slim and pocket-friendly, and the companion notebook is not much bulkier than a standard paper notepad. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe real tradeoff against that pick: Pen requires periodic charging.\n\nOn the other side, OCR accuracy should be verified through current reviews.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Compact Bluetooth pen",
      "Real-time sync from paper to app",
      "Budget price point"
    ],
    "pros": [
      "Slim, pocket-friendly pen design",
      "Real-time sync while writing, no separate scanning step",
      "low-cost for a smart pen set",
      "OCR and audio recording included"
    ],
    "cons": [
      "Pen requires periodic charging",
      "Still bulkier overall than a paper-only notepad",
      "OCR accuracy should be verified through current reviews"
    ],
    "bestFor": "Buyers wanting a compact real-time smart pen for travel."
  },
  {
    "id": "ophayapen-port",
    "rank": 5,
    "badge": "Most Compact Mid-Range Smart Pen Set",
    "name": "Ophayapen Smart Pen and Smart Digital Notebook, Real-time Mobile Sync",
    "price": "$99.13",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/411Fba5TlmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM3WLT2H?tag=theofficejournal-20",
    "description": "The Ophayapen set pairs a compact pen with a modestly sized notebook, keeping the whole kit reasonably travel-friendly. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nOn the other side, Smaller brand, verify current reviews.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Real-time mobile sync",
      "Compact pen and notebook set",
      "Mid-range price"
    ],
    "pros": [
      "Compact pen and notebook combination",
      "Real-time mobile sync while writing",
      "Mid-range price for the feature set",
      "Still writes on real paper"
    ],
    "cons": [
      "Pen requires periodic charging",
      "Bulkier overall than a paper-only notepad",
      "Smaller brand, verify current reviews"
    ],
    "bestFor": "Buyers wanting a compact real-time smart pen set."
  },
  {
    "id": "rb-core-port",
    "rank": 6,
    "badge": "Best Full-Size Notebook That Still Packs Flat",
    "name": "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    "price": "$26.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B071Y3MSRK?tag=theofficejournal-20",
    "description": "The Rocketbook Core is a full letter-size notebook, but since it's just coated paper with no battery or screen, it still packs flat and light in a bag compared to any electronic tablet. This is a reusable paper notebook (write with a pen, then scan the pages with a phone app to digitize them before wiping the pages clean and reusing the notebook).\n\nOn the other side, No on-device digital storage.",
    "specs": [
      "Reusable paper notebook, Type 1",
      "Letter size 8.5x11, dotted pages",
      "Wipe clean and reuse",
      "Packs flat in a bag"
    ],
    "pros": [
      "Packs flat and light despite full letter size",
      "No battery weight at all",
      "More writing space than the Mini format",
      "App-connected scanning"
    ],
    "cons": [
      "Bulkier than the Mini notepad format",
      "Requires a compatible erasable pen",
      "No on-device digital storage"
    ],
    "bestFor": "Buyers wanting full-size writing space in a still lightweight package."
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-for-students",
    "title": "Best Digital Notebooks for Students (2026)"
  },
  {
    "href": "/guide/best-budget-digital-notebooks",
    "title": "Best Budget Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Portable Digital Notebooks";
