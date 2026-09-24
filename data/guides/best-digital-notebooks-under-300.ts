// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-digital-notebooks-under-300";

export const guideTitle = "The Best Digital Notebooks Under $300: Reusable Pages and Smart Pens";

export const breadcrumbLabel = "Best Digital Notebooks Under $300";

export const metaTitle = "Best Digital Notebooks Under $300: Reusable and Smart Pen Picks (2026)";

export const metaDescription = "We compared reusable smart notebooks and smart pen sets on page format, how notes sync, pen inclusion and charging, all well under $300.";

export const mainKeyword = "digital notebook under 300";

export const introParagraphs = [
  "The most useful thing to know about this budget is that you probably won't spend it. None of the notebooks and pen sets below cost more than about $100 at the time of writing; E Ink tablets mostly sit above this range.",
  "What you are really choosing between is two ways of digitizing handwriting. Reusable notebooks, like Rocketbook, let you write with an erasable pen, scan the page with your phone and wipe it clean. Smart pen sets capture what you write on special paper and sync it as you go. The first is cheaper and needs no charging; the second syncs live but needs a charged pen and compatible paper.",
  "Our comparison is based on published specifications and listing details, not hands-on testing."
];

export const lastUpdated = "2026-08-05";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "rb-core-u300",
    "rank": 1,
    "badge": "Best Reusable Notebook",
    "name": "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    "price": "$26.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B071Y3MSRK?tag=theofficejournal-20",
    "description": "The Rocketbook Core is the straightforward starting point: a letter-size spiral notebook with dotted pages that you write on with an erasable pen, scan with the Rocketbook app, then wipe clean and reuse.\n\nLetter size gives you the most writing space of the reusable options here, and Rocketbook's app is well established. Syncing happens when you scan a page, not as you write.\n\nYou need a compatible erasable pen, and there is no on-device storage; your notes live in the app and whatever cloud service you send them to.",
    "specs": [
      "Type: reusable notebook",
      "Size: letter (8.5 x 11\"), dotted pages",
      "Sync: scan with phone app",
      "Reuse: wipe clean"
    ],
    "pros": [
      "Full letter-size writing space",
      "Established companion app",
      "Low price and no charging"
    ],
    "cons": [
      "Needs a compatible erasable pen",
      "Syncs only when you scan",
      "No on-device storage"
    ],
    "bestFor": "Anyone who wants to try digitizing handwritten notes at low cost with plenty of page space.",
    "summary": "A letter-size reusable notebook with dotted pages and established app support.",
    "skipIf": "You want notes to sync as you write; a smart pen set like the SyncPen does that."
  },
  {
    "id": "rb-flip-u300",
    "rank": 2,
    "badge": "Best Lined and Dot Grid Mix",
    "name": "Rocketbook Flip Smart Notepad, Teal Cover, Lined/Dot Grid Rule, 8.5x11, 16 Sheets",
    "price": "$26.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31PNIC3U3AL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B33BQL8X?tag=theofficejournal-20",
    "description": "The teal Rocketbook Flip is a notepad-style alternative to the Core, with a mix of lined and dot grid pages in a 16-sheet, letter-size format.\n\nThe combination suits people who switch between written notes and sketches or diagrams. It works the same way as the other Rocketbooks: erasable pen, scan, wipe.\n\nThe listing's description calls it compact, but its stated size is letter, 8.5 x 11 inches. If you want a smaller notepad, the executive-size Flip is the better fit.",
    "specs": [
      "Type: reusable notepad",
      "Size: 8.5 x 11\" (per listing), 16 sheets",
      "Pages: lined and dot grid",
      "Sync: scan with phone app"
    ],
    "pros": [
      "Lined and dot grid pages in one pad",
      "Same scan-and-wipe system as the Core",
      "Low price"
    ],
    "cons": [
      "Needs a compatible erasable pen",
      "Syncs only when you scan",
      "Size description in the listing is inconsistent"
    ],
    "bestFor": "People who alternate between written notes and diagrams.",
    "summary": "A letter-size Rocketbook notepad with both lined and dot grid pages.",
    "skipIf": "You want a pen included; the Flip kit with pen is about the same price."
  },
  {
    "id": "rb-flip-navy-u300",
    "rank": 3,
    "badge": "Best Executive Size",
    "name": "Rocketbook Flip Reusable Smart Notepad, Executive Size 6x8.8, Navy Blue",
    "price": "$24.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41dnaLOfVqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JPMDC?tag=theofficejournal-20",
    "description": "The navy Rocketbook Flip comes in executive size, 6 x 8.8 inches, which is easier to carry than letter size while leaving more room than a pocket notebook.\n\nIt uses the same erasable-pen and app-scanning system as the other Rocketbooks, and it is one of the least expensive options here at the time of writing.\n\nThe pen isn't listed as included. For the same format with a pen and cleaning cloth, the Flip kit costs about a dollar more.",
    "specs": [
      "Type: reusable notepad",
      "Size: executive (6 x 8.8\")",
      "Sync: scan with phone app",
      "Reuse: wipe clean"
    ],
    "pros": [
      "Portable executive size",
      "Low price",
      "No charging"
    ],
    "cons": [
      "Pen isn't listed as included",
      "Syncs only when you scan",
      "Less writing space than letter size"
    ],
    "bestFor": "People who carry a notebook between rooms or meetings.",
    "summary": "A 6 x 8.8-inch reusable notepad, a middle ground between letter and pocket sizes.",
    "skipIf": "You don't already own a compatible pen; the Flip kit includes one."
  },
  {
    "id": "rb-flip-pen-u300",
    "rank": 4,
    "badge": "Best Complete Kit",
    "name": "Rocketbook Flip Reusable Smart Notepad, Eco-Friendly, Digitally Connected, Dotted and Lined Combo, 6x8.8, Navy, with Pen, Cloth, and App Included",
    "price": "$25.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41oSOgieC8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B087QN42VM?tag=theofficejournal-20",
    "description": "The Flip kit is the executive-size Rocketbook with everything you need in the box: a compatible pen, a cleaning cloth and access to the app, plus dotted and lined pages.\n\nFor a first reusable notebook, that removes the most common extra purchase. At the time of writing it costs only slightly more than the Flip without a pen.\n\nLike the other Rocketbooks, notes sync when you scan them, and there is no on-device storage.",
    "specs": [
      "Type: reusable notepad",
      "Size: executive (6 x 8.8\")",
      "Included: pen, cleaning cloth",
      "Pages: dotted and lined"
    ],
    "pros": [
      "Pen and cloth included",
      "Dotted and lined pages",
      "Ready to use out of the box"
    ],
    "cons": [
      "Syncs only when you scan",
      "Smaller than letter size",
      "No on-device storage"
    ],
    "bestFor": "A first reusable notebook, bought as a complete kit.",
    "summary": "The executive-size Flip with a pen and cleaning cloth included.",
    "skipIf": "You want letter-size pages; the Rocketbook Core is the better fit."
  },
  {
    "id": "rb-fusion-u300",
    "rank": 5,
    "badge": "Best Planner Layout",
    "name": "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8, Black",
    "price": "$29.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41Rr5sOXeTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07RSH69HC?tag=theofficejournal-20",
    "description": "The Rocketbook Fusion is the one to choose if you want structure: it combines planner pages for agendas and tasks with regular note pages, in executive size.\n\nThat suits people who plan their week and take meeting notes in the same book. It works on the same erasable-pen and scanning system as the rest of the range.\n\nThe structured pages are less flexible for open-ended brainstorming, and a compatible pen is required.",
    "specs": [
      "Type: reusable planner notebook",
      "Size: executive (6 x 8.8\")",
      "Pages: planner and note pages",
      "Sync: scan with phone app"
    ],
    "pros": [
      "Planner and note pages in one book",
      "Reusable",
      "Portable size"
    ],
    "cons": [
      "Less flexible for free-form notes",
      "Needs a compatible erasable pen",
      "Syncs only when you scan"
    ],
    "bestFor": "People who plan tasks and take notes in the same notebook.",
    "summary": "A reusable notebook that mixes planner pages with free notes.",
    "skipIf": "You mostly brainstorm or sketch; the Core's open dotted pages suit that better."
  },
  {
    "id": "syncpen-u300",
    "rank": 6,
    "badge": "Best Real-Time Smart Pen",
    "name": "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    "price": "$79.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5P2186C?tag=theofficejournal-20",
    "description": "The SyncPen is the entry point to live syncing: its Bluetooth pen captures your handwriting on special dot-pattern paper and sends it to an app as you write.\n\nThe listing also mentions OCR, which converts handwriting to text, and audio recording, useful for lectures or meetings. That makes it the most capable option here for turning notes into searchable text.\n\nThe pen needs charging, it depends on compatible paper, and the listing doesn't quantify OCR accuracy, so check recent buyer feedback before relying on it.",
    "specs": [
      "Type: smart pen and paper set",
      "Sync: real time via Bluetooth",
      "OCR and audio recording (per listing)",
      "Pen: rechargeable"
    ],
    "pros": [
      "Syncs as you write",
      "OCR and audio recording listed",
      "Least expensive smart pen here"
    ],
    "cons": [
      "Pen needs charging",
      "Requires compatible paper",
      "OCR accuracy isn't quantified"
    ],
    "bestFor": "Students and meeting-heavy workers who want handwriting turned into searchable notes as they write.",
    "summary": "A smart pen that syncs what you write on paper in real time, with OCR and audio recording.",
    "skipIf": "You don't want another device to charge; a Rocketbook needs none."
  },
  {
    "id": "smartsync-u300",
    "rank": 7,
    "badge": "Eco-Focused Smart Set",
    "name": "Smart Sync Reusable Notebook, Functional Digital Notepad, Eco-Friendly",
    "price": "$79.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41vRcKAD-ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F7LDXHC2?tag=theofficejournal-20",
    "description": "The Smart Sync set pairs a smart pen with a reusable notebook for real-time writing capture, and it is positioned around its reusable, eco-friendly design.\n\nIt costs about the same as the SyncPen at the time of writing. The listing doesn't mention OCR or audio recording the way the SyncPen's does, so if text conversion matters, the SyncPen is the clearer choice.\n\nIt is a smaller brand with less buyer feedback, and the pen needs charging.",
    "specs": [
      "Type: smart pen and reusable pad set",
      "Sync: real time",
      "Included: pen and pad"
    ],
    "pros": [
      "Real-time capture on paper",
      "Reusable pad",
      "Pen and pad included"
    ],
    "cons": [
      "OCR and text conversion aren't described",
      "Smaller brand with less feedback",
      "Pen needs charging"
    ],
    "bestFor": "People who want live syncing and a reusable pad in one set.",
    "summary": "A smart pen and reusable pad set with real-time capture.",
    "skipIf": "You need handwriting-to-text conversion; the SyncPen lists OCR."
  },
  {
    "id": "ophayapen-u300",
    "rank": 8,
    "badge": "Compact Smart Pen Set",
    "name": "Ophayapen Smart Pen and Smart Digital Notebook, Real-time Mobile Sync",
    "price": "$99.13",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/411Fba5TlmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM3WLT2H?tag=theofficejournal-20",
    "description": "The Ophayapen set is a compact pen-and-notebook combination that syncs to your phone in real time.\n\nIt is the most expensive option here at the time of writing, and the listing doesn't describe features beyond real-time sync that the less expensive SyncPen lacks.\n\nThe pen needs charging, the set is bulkier than a paper-only notepad, and it is a smaller brand with less buyer feedback.",
    "specs": [
      "Type: smart pen and notebook set",
      "Sync: real time to phone"
    ],
    "pros": [
      "Real-time sync",
      "Compact pen and notebook combination",
      "Writes on real paper"
    ],
    "cons": [
      "Most expensive option here",
      "No clear feature advantage over the SyncPen",
      "Pen needs charging"
    ],
    "bestFor": "People who prefer this particular pen and notebook format for live syncing.",
    "summary": "A compact smart pen and notebook set with real-time phone sync.",
    "skipIf": "You want OCR or audio recording; the SyncPen lists both for less."
  }
];

export const howWeEvaluated = [
  {
    "title": "Sync method",
    "description": "We separated scan-to-sync reusable notebooks from real-time smart pen sets."
  },
  {
    "title": "Page format",
    "description": "We compared page size and layout as listed."
  },
  {
    "title": "What's included",
    "description": "We noted whether a pen, cloth or paper is included."
  },
  {
    "title": "Listed features",
    "description": "We recorded OCR, audio recording and charging requirements where listed."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Decide how you want notes to sync",
    "explanation": "Reusable notebooks sync when you scan a page with your phone. Smart pens sync as you write. Scanning is cheaper and needs no charging; live syncing is more convenient for fast note-taking but depends on a charged pen and special paper."
  },
  {
    "criterion": "Choose a page size and layout",
    "explanation": "Letter size gives the most room; executive size (6 x 8.8 inches) is easier to carry. Dotted, lined and planner pages suit different ways of working."
  },
  {
    "criterion": "Confirm the pen",
    "explanation": "Rocketbooks need a compatible erasable pen, which isn't always included. The Flip kit includes one; smart pen sets include their own rechargeable pen."
  },
  {
    "criterion": "Check text conversion",
    "explanation": "If you want handwriting turned into searchable text, look for OCR in the listing. The SyncPen lists it; accuracy isn't quantified, so recent buyer feedback is worth checking."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By how you write",
    "table": {
      "headers": [
        "You want",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "The most page space",
          "Rocketbook Core",
          "Letter-size dotted pages"
        ],
        [
          "A portable notebook",
          "Rocketbook Flip (executive)",
          "6 x 8.8 inches"
        ],
        [
          "Everything in the box",
          "Rocketbook Flip kit",
          "Pen and cloth included"
        ],
        [
          "Planning and notes together",
          "Rocketbook Fusion",
          "Planner and note pages"
        ],
        [
          "Live syncing and searchable text",
          "SyncPen",
          "Real-time sync, OCR listed"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Do I need to spend close to $300?",
    "a": "Not for these types of notebook. Everything in this guide cost about $100 or less at the time of writing. E Ink tablets mostly sit above this range."
  },
  {
    "q": "What's the difference between a reusable notebook and a smart pen?",
    "a": "A reusable notebook syncs when you scan a page with your phone, then wipes clean. A smart pen captures your writing on special paper as you go and syncs it live, but needs charging."
  },
  {
    "q": "Do Rocketbooks need a special pen?",
    "a": "Yes, a compatible erasable pen. The Flip kit in this guide includes one."
  },
  {
    "q": "Can these convert handwriting to text?",
    "a": "The SyncPen lists OCR. For the others, check the companion app's features before buying."
  }
];

export const bottomLine = [
  "For most people, a Rocketbook is the sensible starting point: the Flip kit is the easiest first purchase because the pen is included, the Core gives you letter-size pages, and the Fusion adds planner pages.",
  "If you want notes to sync as you write and become searchable text, the SyncPen is the smart pen to start with. Several Rocketbook picks here overlap closely, so choose on size and layout rather than ranking."
];

export const relatedGuides = [
  {
    "href": "/guide/best-budget-digital-notebooks",
    "title": "Best Budget Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-under-500",
    "title": "Best Digital Notebooks Under $500 (2026)"
  },
  {
    "href": "/guide/best-smart-digital-notebooks",
    "title": "Best Smart Digital Notebooks (2026)"
  }
];
