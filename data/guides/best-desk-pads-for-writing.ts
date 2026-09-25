// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-desk-pads-for-writing";

export const guideTitle = "The Best Desk Pads for Writing by Hand";

export const breadcrumbLabel = "Best Desk Pads for Writing";

export const metaTitle = "Best Desk Pads for Writing: Clear, Leather Blotter and Paper Pads (2026)";

export const metaDescription = "We compared desk pads for handwriting, from clear PVC and leather-look blotters to a recycled paper doodle pad, on surface, size and how they feel under a pen.";

export const mainKeyword = "desk pad to write on";

export const introParagraphs = [
  "Writing on a hard desk can feel slippery or unforgiving; a pad gives the pen a slightly softer, more even surface and protects the desk from pen marks. For writing, the surface matters more than for a mouse: smooth PU leather and blotters give a little cushion, clear PVC keeps the desk visible, and a paper pad gives you somewhere to jot notes.",
  "The pads here include a clear PVC mat, a recycled paper doodle pad, leather-look blotters and plain PU pads. Several are size variants of the same PU pads from Aothia and YSAGi.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $10 to $26 at the time of writing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/51ibCTsXCML._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-desk-pads-for-writing-1",
    "rank": 1,
    "badge": "Best Clear Pad",
    "name": "Oterri Clear Writing Desk Pad",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51ibCTsXCML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08LGFN8Z3?tag=theofficejournal-20",
    "description": "The Oterri clear pad is the pick if you want to protect a nice desk without hiding it: a clear PVC pad with rounded edges that is waterproof and wipes clean.\n\nA firm, smooth surface suits writing on loose paper, and you can slide notes or a calendar underneath.\n\nThe listing does not give dimensions, and PVC is firmer under the pen than leather-look pads.",
    "specs": [
      "Material: clear PVC",
      "Waterproof, oil-proof",
      "Rounded edges",
      "Size: not stated"
    ],
    "pros": [
      "Desk stays visible",
      "Notes can go underneath",
      "Wipe clean"
    ],
    "cons": [
      "Firm surface",
      "Dimensions not stated"
    ],
    "bestFor": "Attractive desks and writing on loose paper.",
    "summary": "A clear, waterproof PVC pad with rounded edges that keeps the desk visible.",
    "skipIf": "You want a softer writing feel; a leather-look blotter suits that."
  },
  {
    "id": "best-desk-pads-for-writing-2",
    "rank": 2,
    "badge": "Best Paper Pad",
    "name": "Doolittle 40003 100% Recycled Doodle Desk Pad",
    "price": "$22.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31H0BvC7PLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00160251U?tag=theofficejournal-20",
    "description": "The Doolittle is a desk pad of tear-off paper rather than a mat: 22 x 17 inches of 100 percent recycled paper for notes, doodles and phone numbers, with padded corners.\n\nIt suits people who think on paper and want a large scratch surface in front of them.\n\nIt does not protect against spills, and sheets are used up over time.",
    "specs": [
      "Size: 22 x 17\"",
      "Material: 100% recycled paper",
      "Padded corners"
    ],
    "pros": [
      "Large writing surface",
      "Recycled paper"
    ],
    "cons": [
      "Not spill-proof",
      "Consumable"
    ],
    "bestFor": "Note-takers and doodlers who want paper in front of them.",
    "summary": "A 22 x 17-inch recycled paper doodle pad with padded corners.",
    "skipIf": "You want a mouse surface; choose a PU pad."
  },
  {
    "id": "best-desk-pads-for-writing-3",
    "rank": 3,
    "badge": "Best Compact PU Pad",
    "name": "Aothia Non-Slip Waterproof PU Leather Desk Pad Protector for Mouse",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086BLQZ5L?tag=theofficejournal-20",
    "description": "The compact Aothia is a smooth PU leather pad, 23.6 x 13.7 inches, waterproof with a non-slip back, for about $10 at the time of writing.\n\nPU gives a little cushion under a pen and wipes clean of ink.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Surface: PU leather, waterproof",
      "Non-slip back"
    ],
    "pros": [
      "Low price",
      "Smooth writing surface"
    ],
    "cons": [
      "Compact"
    ],
    "bestFor": "Small desks where you write and mouse on the same pad.",
    "summary": "A 23.6 x 13.7-inch waterproof PU pad for about $10.",
    "skipIf": "You want more room; the larger Aothia is about 15.7 inches deep."
  },
  {
    "id": "best-desk-pads-for-writing-4",
    "rank": 4,
    "badge": "Best Traditional Blotter",
    "name": "Nekmit Leather Desk Blotter Pad 17 x 12 Inches",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nkyjWYBQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B013SBWSSO?tag=theofficejournal-20",
    "description": "The Nekmit is a traditional desk blotter: 17 x 12 inches of leather-look material on a non-slip felt base that Nekmit says is safe for any surface.\n\nIts compact size frames a writing area rather than covering the desk, and it also works under a mouse.\n\nIt is the most expensive pad here at about $26 at the time of writing, and it is faux leather.",
    "specs": [
      "Size: 17 x 12\"",
      "Surface: leather-look",
      "Base: non-slip felt"
    ],
    "pros": [
      "Classic blotter look",
      "Felt base protects the desk"
    ],
    "cons": [
      "Small",
      "Most expensive here"
    ],
    "bestFor": "A dedicated writing spot with a traditional look.",
    "summary": "A 17 x 12-inch leather-look blotter with a felt base.",
    "skipIf": "You want to cover keyboard and mouse too; a larger PU pad does."
  },
  {
    "id": "best-desk-pads-for-writing-5",
    "rank": 5,
    "badge": "YSAGi PU Pad",
    "name": "YSAGi Leather Desk Protector",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oQvh4OHlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTSL48B?tag=theofficejournal-20",
    "description": "The YSAGi is a PU leather desk protector that wipes clean and doubles as a mouse pad. This variant costs about $14 at the time of writing.\n\nThe listing does not state dimensions; YSAGi sells several sizes.",
    "specs": [
      "Surface: PU leather",
      "Size: not stated"
    ],
    "pros": [
      "Wipe clean",
      "Low price"
    ],
    "cons": [
      "Dimensions not stated"
    ],
    "bestFor": "Buyers choosing a YSAGi size.",
    "summary": "A YSAGi PU leather desk protector variant.",
    "skipIf": "You want stated dimensions."
  },
  {
    "id": "best-desk-pads-for-writing-6",
    "rank": 6,
    "badge": "Best Full-Size PU Pad",
    "name": "Aothia Leather Office Desk Pad Protector",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4167ktE912L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082F5ZLS5?tag=theofficejournal-20",
    "description": "The larger Aothia offers the same waterproof PU surface as the compact version with more depth, about 15.7 inches, leaving room to write beside the keyboard.\n\nThe listing's width is truncated, so confirm the size.",
    "specs": [
      "Size: about 15.7\" deep",
      "Surface: PU leather, waterproof",
      "Non-slip back"
    ],
    "pros": [
      "More writing room",
      "Wipe clean"
    ],
    "cons": [
      "Width not clearly listed"
    ],
    "bestFor": "Desks with a keyboard, mouse and notebook.",
    "summary": "The larger Aothia PU pad, about 15.7 inches deep.",
    "skipIf": "Your desk is small."
  },
  {
    "id": "best-desk-pads-for-writing-7",
    "rank": 7,
    "badge": "Best for a Tidy Look",
    "name": "Cossini XL Desk Pad",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-djupS1dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B58ZQJRF?tag=theofficejournal-20",
    "description": "The Cossini XL is designed around appearance: a smooth desk pad with a defined border that Cossini says makes everything on it look more organized, and a surface that tools and mouse glide on.\n\nThe listing does not give dimensions or material details.",
    "specs": [
      "Size: XL (not stated)",
      "Smooth surface",
      "Defined border"
    ],
    "pros": [
      "Tidy appearance",
      "Smooth surface"
    ],
    "cons": [
      "Specifications not stated"
    ],
    "bestFor": "Buyers who want the desk to look orderly.",
    "summary": "An XL desk pad whose border makes items on it look organized.",
    "skipIf": "You want stated dimensions."
  },
  {
    "id": "best-desk-pads-for-writing-8",
    "rank": 8,
    "badge": "Lowest-Cost Option",
    "name": "YSAGi Leather Office Desk Pad Protector",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CF62OPpgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTPC44X?tag=theofficejournal-20",
    "description": "This YSAGi variant is the cheapest PU pad here at about $10 at the time of writing, with the same wipe-clean surface as the other YSAGi listing.\n\nCheck the size before ordering.",
    "specs": [
      "Surface: PU leather",
      "Size: not stated"
    ],
    "pros": [
      "Lowest price",
      "Wipe clean"
    ],
    "cons": [
      "Dimensions not stated",
      "Duplicate listing"
    ],
    "bestFor": "Budget buyers.",
    "summary": "A $10 YSAGi PU leather desk protector variant.",
    "skipIf": "You want stated dimensions; the Aothia pads list them."
  }
];

export const howWeEvaluated = [
  {
    "title": "Surface",
    "description": "We compared PVC, PU, leather-look and paper surfaces for writing."
  },
  {
    "title": "Size",
    "description": "We recorded stated dimensions and flagged missing ones."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Writing feel",
    "explanation": "PU and leather-look blotters give a little cushion; clear PVC is firmer; paper pads give you something to write on directly."
  },
  {
    "criterion": "Protection",
    "explanation": "PU and PVC are waterproof and wipe clean; paper is not."
  },
  {
    "criterion": "Size",
    "explanation": "A blotter frames a writing spot; larger pads cover keyboard, mouse and notebook."
  },
  {
    "criterion": "Look",
    "explanation": "Clear pads show the desk; blotters look traditional; PU pads look neat."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Show off the desk",
          "Oterri clear pad",
          "Clear PVC"
        ],
        [
          "Paper to jot on",
          "Doolittle doodle pad",
          "22 x 17\" recycled paper"
        ],
        [
          "Traditional blotter",
          "Nekmit 17 x 12\"",
          "Leather-look, felt base"
        ],
        [
          "Everyday PU pad",
          "Aothia (compact or larger)",
          "Wipe clean, stated sizes"
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
        "Pads"
      ],
      "rows": [
        [
          "About $10–$16",
          "Aothia, YSAGi, Oterri"
        ],
        [
          "About $19–$26",
          "Cossini, Doolittle, Nekmit"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What surface is best for writing?",
    "a": "A smooth surface with slight give, such as PU leather or a blotter, feels comfortable under a pen. Clear PVC is firmer."
  },
  {
    "q": "Can I put notes under a clear pad?",
    "a": "Yes, that is a common use of clear desk pads like the Oterri."
  },
  {
    "q": "Will ink stain a PU pad?",
    "a": "PU wipes clean of most spills; wipe ink promptly."
  },
  {
    "q": "What is a desk blotter?",
    "a": "A pad, traditionally leather-framed, that gives a defined writing area and protects the desk."
  }
];

export const bottomLine = [
  "For writing, the Nekmit blotter gives a traditional dedicated spot, the Oterri clear pad protects a desk you want to see, and the Doolittle suits people who want paper to jot on.",
  "For an everyday pad that handles writing and a mouse, the Aothia PU pads are inexpensive with stated sizes; the YSAGi variants are similar."
];

export const relatedGuides = [
  {
    "href": "/guide/best-leather-desk-pads",
    "title": "Best Leather Desk Pads"
  },
  {
    "href": "/guide/best-large-desk-pads",
    "title": "Best Large Desk Pads"
  },
  {
    "href": "/guide/best-desk-pads-with-wrist-support",
    "title": "Best Desk Pads with Wrist Support"
  }
];
