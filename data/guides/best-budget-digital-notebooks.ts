// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-budget-digital-notebooks";

export const guideTitle = "The Best Budget Digital Notebooks for Digitizing Handwritten Notes";

export const breadcrumbLabel = "Best Budget Digital Notebooks";

export const metaTitle = "Best Budget Digital Notebooks Under $30 (2026)";

export const metaDescription = "Under $30, a digital notebook means a reusable Rocketbook you scan with your phone. We compared seven by size, page style, binding and whether a pen is included.";

export const mainKeyword = "budget digital notebook";

export const introParagraphs = [
  "On a budget under $30, a digital notebook is a reusable paper notebook, not an electronic device. You write with an erasable pen, scan the pages with a phone app to send them to cloud services, then wipe the pages clean and start again. E Ink tablets and smart pens cost considerably more.",
  "All seven picks here are Rocketbooks, so the decision is about format: pocket-size Mini, executive-size Flip, or letter-size Flip and Core, and whether the listing includes the pen. Rocketbook pages need a compatible erasable pen, so factor one in if it isn't included.",
  "Prices ran from about $15 to $27 at the time of writing. Our comparison is based on listed sizes, page styles and included accessories, not hands-on testing."
];

export const lastUpdated = "2026-08-05";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "rb-mini-black-budget",
    "rank": 1,
    "badge": "Lowest Price, Pocket Size",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Black",
    "price": "$14.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41-otDgyvAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JFY1Q?tag=theofficejournal-20",
    "description": "The Rocketbook Mini is the least expensive way to try a reusable notebook: a pocket-size 3.5 x 5.5-inch notepad with dotted pages, about $15 at the time of writing.\n\nLike every Rocketbook here, you scan pages with the app, then wipe them clean.\n\nThe small page suits lists and quick notes rather than meetings or lectures, and you'll need a compatible erasable pen if you don't have one.",
    "specs": [
      "Size: 3.5 x 5.5\"",
      "Pages: dotted",
      "Capture: Rocketbook app scanning",
      "Pen: not listed as included"
    ],
    "pros": [
      "Lowest price here",
      "Pocket-size",
      "Reusable pages"
    ],
    "cons": [
      "Small writing area",
      "Pen may be extra",
      "Scan-then-sync, not live"
    ],
    "bestFor": "Quick notes and lists on the move.",
    "summary": "A 3.5 x 5.5-inch Rocketbook Mini with dotted pages, the lowest price here.",
    "skipIf": "You take long notes; the letter-size Rocketbook Core gives far more space."
  },
  {
    "id": "rb-mini-navy-budget",
    "rank": 2,
    "badge": "Mini in Navy",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Navy Blue",
    "price": "$14.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41TPpwMWTXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JGGJ9?tag=theofficejournal-20",
    "description": "This is the Rocketbook Mini in navy rather than black: the same 3.5 x 5.5-inch size, dotted pages and app scanning, at the same price at the time of writing.\n\nChoose between them on color alone.\n\nThe same limits apply: a small page and a pen that may need buying separately.",
    "specs": [
      "Size: 3.5 x 5.5\"",
      "Pages: dotted",
      "Color: navy",
      "Capture: Rocketbook app scanning"
    ],
    "pros": [
      "Same low price as the black Mini",
      "Color choice",
      "Pocket-size"
    ],
    "cons": [
      "Small writing area",
      "Pen may be extra",
      "Duplicates the black Mini"
    ],
    "bestFor": "Readers who want the Mini in navy.",
    "summary": "The same Rocketbook Mini in navy blue, at the same price.",
    "skipIf": "Color doesn't matter; the black Mini is identical."
  },
  {
    "id": "rb-flip-navy-budget",
    "rank": 3,
    "badge": "Best Executive Size",
    "name": "Rocketbook Flip Reusable Smart Notepad, Executive Size 6x8.8, Navy Blue",
    "price": "$24.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41dnaLOfVqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JPMDC?tag=theofficejournal-20",
    "description": "The executive-size Flip is the middle ground: 6 x 8.8 inches gives much more room than the Mini while staying portable, at about $25 at the time of writing.\n\nIt uses the same scan-and-wipe workflow.\n\nThe listing doesn't include a pen; the version with pen and cloth costs about $1 more.",
    "specs": [
      "Size: 6 x 8.8\" (executive)",
      "Color: navy",
      "Capture: Rocketbook app scanning",
      "Pen: not listed as included"
    ],
    "pros": [
      "Portable yet roomy",
      "Reusable pages",
      "Moderate price"
    ],
    "cons": [
      "Pen not included",
      "Scan-then-sync, not live",
      "Smaller than letter size"
    ],
    "bestFor": "Meeting and daily notes in a bag-friendly size.",
    "summary": "A 6 x 8.8-inch Rocketbook Flip in navy, more room than the Mini.",
    "skipIf": "You don't own a compatible pen; the Flip bundle includes one for about $1 more."
  },
  {
    "id": "rb-flip-pen-budget",
    "rank": 4,
    "badge": "Best Starter Kit",
    "name": "Rocketbook Flip Reusable Smart Notepad, Eco-Friendly, Digitally Connected, Dotted and Lined Combo, 6x8.8, Navy, with Pen, Cloth, and App Included",
    "price": "$25.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41oSOgieC8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B087QN42VM?tag=theofficejournal-20",
    "description": "The Flip bundle is the complete starter kit: a 6 x 8.8-inch notepad with a mix of dotted and lined pages, plus a compatible pen and cleaning cloth, at about $26 at the time of writing.\n\nThat makes it the simplest way to start without buying anything else.\n\nIt is a notepad format rather than a full-size notebook.",
    "specs": [
      "Size: 6 x 8.8\"",
      "Pages: dotted and lined",
      "Included: pen, cloth",
      "Capture: Rocketbook app scanning"
    ],
    "pros": [
      "Pen and cloth included",
      "Two page styles",
      "Ready to use"
    ],
    "cons": [
      "Executive rather than letter size",
      "Scan-then-sync, not live",
      "Costs slightly more than the plain Flip"
    ],
    "bestFor": "First-time users who want everything in one box.",
    "summary": "An executive-size Flip with dotted and lined pages, plus pen and cleaning cloth.",
    "skipIf": "You already own a compatible pen; the plain navy Flip is slightly cheaper."
  },
  {
    "id": "rb-flip-gray-budget",
    "rank": 5,
    "badge": "Executive Spiral in Gray",
    "name": "Rocketbook Smart Reusable Notebook, Flip Executive Size Spiral Notebook, Gray",
    "price": "$25.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/314ISfhnV8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B087QPTC7B?tag=theofficejournal-20",
    "description": "This gray Flip is the executive-size spiral-bound notebook, about $26 at the time of writing, for readers who prefer a spiral binding.\n\nIt uses the same scan-and-wipe workflow as the others.\n\nIt costs the same as the Flip bundle but doesn't list a pen, so the bundle offers more for the money unless you want this color or binding.",
    "specs": [
      "Size: executive",
      "Binding: spiral",
      "Color: gray",
      "Capture: Rocketbook app scanning"
    ],
    "pros": [
      "Spiral binding",
      "Portable size",
      "Reusable pages"
    ],
    "cons": [
      "Pen not listed",
      "Same price as the pen bundle",
      "Overlaps with the navy Flip"
    ],
    "bestFor": "Readers who prefer a gray spiral notebook.",
    "summary": "An executive-size spiral-bound Rocketbook Flip in gray.",
    "skipIf": "You need a pen; the Flip bundle includes one at the same price."
  },
  {
    "id": "rb-flip-graylet-budget",
    "rank": 6,
    "badge": "Best Letter Size for Less",
    "name": "Rocketbook Flip Reusable Smart Notepad, Letter Size 8.5x11, Gray",
    "price": "$24.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41+bVLfjAdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW9HH53V?tag=theofficejournal-20",
    "description": "The letter-size Flip gives the most writing space for the money: 8.5 x 11 inches at about $25 at the time of writing, slightly less than the Rocketbook Core.\n\nIt suits lectures, long meetings and sketches.\n\nIt is bulkier than the executive and Mini formats, and a pen isn't listed.",
    "specs": [
      "Size: 8.5 x 11\" (letter)",
      "Color: gray",
      "Capture: Rocketbook app scanning",
      "Pen: not listed as included"
    ],
    "pros": [
      "Full letter size",
      "Lower price than the Core",
      "Reusable pages"
    ],
    "cons": [
      "Bulkier",
      "Pen not listed",
      "Scan-then-sync, not live"
    ],
    "bestFor": "Long-form notes on a budget.",
    "summary": "A letter-size 8.5 x 11-inch Rocketbook Flip in gray, at about $25.",
    "skipIf": "You carry it daily; the executive Flip is more portable."
  },
  {
    "id": "rb-core-budget",
    "rank": 7,
    "badge": "Most Established Letter-Size",
    "name": "Rocketbook Core Reusable Spiral Notebook, Letter Size 8.5x11, Black, Dotted Pages, App-Connected, Erasable, Durable Cover",
    "price": "$26.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41-39oI5gtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B071Y3MSRK?tag=theofficejournal-20",
    "description": "The Rocketbook Core is the brand's standard notebook: letter-size, spiral-bound, with dotted pages and a durable cover, about $27 at the time of writing.\n\nIt is the most established model in the range, with the same app-connected scanning to cloud services.\n\nIt costs a little more than the letter-size Flip for similar space, and a pen isn't listed.",
    "specs": [
      "Size: 8.5 x 11\" (letter)",
      "Pages: dotted",
      "Binding: spiral",
      "Cover: durable",
      "Capture: Rocketbook app scanning"
    ],
    "pros": [
      "Established standard model",
      "Full letter size",
      "Durable cover"
    ],
    "cons": [
      "Most expensive here, slightly",
      "Pen not listed",
      "Bulkier than smaller formats"
    ],
    "bestFor": "A standard full-size reusable notebook.",
    "summary": "Rocketbook's standard letter-size Core with dotted pages and a durable cover.",
    "skipIf": "You want the lowest letter-size price; the gray letter Flip costs slightly less."
  }
];

export const howWeEvaluated = [
  {
    "title": "Price",
    "description": "We compared prices at the time of writing, all under $30."
  },
  {
    "title": "Size and format",
    "description": "We compared page size, page style and binding."
  },
  {
    "title": "Included accessories",
    "description": "We noted whether a pen and cloth are included."
  },
  {
    "title": "Workflow",
    "description": "We noted the scan-to-cloud workflow common to all picks."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pick a size for how you write",
    "explanation": "Mini (3.5 x 5.5 in) for lists, executive (6 x 8.8 in) for daily notes, letter (8.5 x 11 in) for lectures and long meetings."
  },
  {
    "criterion": "Budget for the pen",
    "explanation": "Rocketbook pages need a compatible erasable pen. Only the Flip bundle here lists one included."
  },
  {
    "criterion": "Expect scan-then-sync",
    "explanation": "Notes reach the cloud when you scan them with the app, not as you write."
  },
  {
    "criterion": "Choose page style and binding",
    "explanation": "Most here have dotted pages; the Flip bundle adds lined pages. Some are spiral-bound."
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
          "Lowest price, pocket notes",
          "Rocketbook Mini (black or navy)"
        ],
        [
          "Everything in one box",
          "Rocketbook Flip bundle with pen"
        ],
        [
          "Portable daily notebook",
          "Rocketbook Flip executive"
        ],
        [
          "Most space for less",
          "Rocketbook Flip letter size"
        ],
        [
          "Standard full-size",
          "Rocketbook Core"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What's the cheapest digital notebook?",
    "a": "The Rocketbook Mini, about $15 at the time of writing."
  },
  {
    "q": "Can I get an E Ink notebook under $30?",
    "a": "Not among the options here. E Ink tablets cost considerably more; at this price, reusable paper notebooks are the realistic option."
  },
  {
    "q": "Do these include a pen?",
    "a": "Only the Flip bundle lists a pen. Rocketbook pages need a compatible erasable pen."
  },
  {
    "q": "Do notes sync automatically?",
    "a": "No. You scan each page with the Rocketbook app, which sends it to your chosen cloud service."
  },
  {
    "q": "Are reusable notebooks worth it?",
    "a": "If you like writing by hand and want a digital copy, they're a low-cost way to do both, and the pages can be wiped and reused."
  }
];

export const bottomLine = [
  "If you're new to reusable notebooks, the Flip bundle is the easiest start because it includes the pen. For the lowest cost, the Rocketbook Mini covers quick notes.",
  "For more space, the letter-size Flip is slightly cheaper than the Core, while the Core is the established standard. Several picks here differ only by color, so buy whichever format fits and is cheapest when you shop."
];

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-for-students",
    "title": "Best Digital Notebooks for Students (2026)"
  },
  {
    "href": "/guide/best-portable-digital-notebooks",
    "title": "Best Portable Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-under-300",
    "title": "Best Digital Notebooks Under $300 (2026)"
  }
];
