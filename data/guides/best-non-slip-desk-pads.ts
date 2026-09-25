// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-non-slip-desk-pads";

export const guideTitle = "The Best Non-Slip Desk Pads That Stay Where You Put Them";

export const breadcrumbLabel = "Best Non-Slip Desk Pads";

export const metaTitle = "Best Non-Slip Desk Pads (2026)";

export const metaDescription = "A desk pad that slides is worse than none. We compared eight low-cost PU leather pads on non-slip backing, size and material, and flag which listings explain their grip.";

export const mainKeyword = "desk pad keeps moving";

export const introParagraphs = [
  "A desk pad that creeps as you type or move the mouse quickly becomes an annoyance. Grip comes from the underside: a textured or suede-like backing, or a dense rubbery material, holds better than a smooth plastic back.",
  "Most listings here say \"non-slip\" without describing the backing, so the AFIING, which lists a dedicated non-slip backing, stands out. Desk finish matters too: very glossy or glass desks are harder for any pad to grip.",
  "All eight are PU leather pads under $15 at the time of writing, and several are variants of the same Aothia and YSAGi products. Our comparison is based on listed specifications, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-non-slip-desk-pads-1",
    "rank": 1,
    "badge": "Best Named-Brand Compact Pad",
    "name": "Aothia Non-Slip Waterproof PU Leather Desk Pad Protector for Mouse",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086BLQZ5L?tag=theofficejournal-20",
    "description": "The Aothia is a simple, clearly sized protector: 23.6 x 13.7 inches of waterproof PU leather, described as guarding against scratches, stains, spills, heat and scuffs, with a non-slip design.\n\nThat size suits a laptop or compact keyboard and mouse rather than a full desk.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Material: PU leather, waterproof",
      "Non-slip design"
    ],
    "pros": [
      "Stated size",
      "Wipe-clean",
      "Low price"
    ],
    "cons": [
      "Compact",
      "Plain design",
      "Thickness not stated"
    ],
    "bestFor": "Protecting a compact work area.",
    "summary": "Aothia's 23.6 x 13.7-inch waterproof PU leather protector with non-slip design.",
    "skipIf": "You need more coverage; the QiyI is 31.5 x 15.7 inches."
  },
  {
    "id": "best-non-slip-desk-pads-2",
    "rank": 2,
    "badge": "YSAGi Office Protector",
    "name": "YSAGi Leather Office Desk Pad Protector",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CF62OPpgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTPC44X?tag=theofficejournal-20",
    "description": "The YSAGi Leather Office Desk Pad Protector is a PU leather pad YSAGi says protects against scratches, stains, spills, heat and scuffs.\n\nThe listing summary doesn't state size. YSAGi has three listings here with the same description, so compare sizes and colors across them.",
    "specs": [
      "Material: PU leather",
      "Easy to clean",
      "Size: check listing"
    ],
    "pros": [
      "Low price",
      "Wipe-clean",
      "Several variants"
    ],
    "cons": [
      "Size not stated here",
      "Duplicates other YSAGi listings",
      "Plain"
    ],
    "bestFor": "A basic leather protector once size is confirmed.",
    "summary": "A YSAGi PU leather protector; confirm size on the listing.",
    "skipIf": "You want a stated size; the Aothia lists 23.6 x 13.7 inches."
  },
  {
    "id": "best-non-slip-desk-pads-3",
    "rank": 3,
    "badge": "Lowest Price",
    "name": "Leather Desk Pad Protector, Non-Slip Desk Pad(Black, 23.6\" x 13.7\")",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aoSrfEj3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CNX4MTB9?tag=theofficejournal-20",
    "description": "This unbranded protector matches the Aothia's 23.6 x 13.7-inch size in black PU leather with a non-slip design, at about $7 at the time of writing, the lowest price here.\n\nThe brand isn't named in the listing.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Material: PU leather",
      "Non-slip design"
    ],
    "pros": [
      "Lowest price here",
      "Stated size",
      "Wipe-clean"
    ],
    "cons": [
      "Brand not named",
      "Compact",
      "Plain"
    ],
    "bestFor": "The cheapest compact protector.",
    "summary": "A black 23.6 x 13.7-inch PU leather protector with non-slip design, the cheapest here.",
    "skipIf": "You prefer a named brand; the Aothia is the same size."
  },
  {
    "id": "best-non-slip-desk-pads-4",
    "rank": 4,
    "badge": "Best Value Non-Slip Backing",
    "name": "AFIING Desk Pad Protector 23.6\" x 13.7\"",
    "price": "$8.54",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+8BA7OsUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D98Q9HXK?tag=theofficejournal-20",
    "description": "The AFIING lists a dedicated non-slip backing, the feature this guide is about, on a 23.6 x 13.7-inch waterproof PU leather pad with a smooth surface, for under $9 at the time of writing.\n\nIt's compact, suited to a laptop or compact keyboard and mouse.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Material: PU leather, waterproof",
      "Backing: non-slip"
    ],
    "pros": [
      "Non-slip backing listed",
      "Low price",
      "Wipe-clean"
    ],
    "cons": [
      "Compact",
      "Backing material not specified",
      "Plain design"
    ],
    "bestFor": "A compact pad that needs to stay put.",
    "summary": "AFIING's 23.6 x 13.7-inch waterproof PU leather pad with a dedicated non-slip backing.",
    "skipIf": "You need a larger pad; the QiyI is 31.5 x 15.7 inches."
  },
  {
    "id": "best-non-slip-desk-pads-5",
    "rank": 5,
    "badge": "YSAGi Protector (Third Listing)",
    "name": "YSAGi Leather Desk Pad Protector",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31g8oYEiMtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5H71DWY?tag=theofficejournal-20",
    "description": "The third YSAGi listing uses the same description at about $10 at the time of writing.\n\nAs with the others, check the size and color it covers before buying.",
    "specs": [
      "Material: PU leather",
      "Easy to clean",
      "Size: check listing"
    ],
    "pros": [
      "Low price",
      "Wipe-clean",
      "Simple"
    ],
    "cons": [
      "Size not stated here",
      "Duplicative",
      "Plain"
    ],
    "bestFor": "Comparing YSAGi variants.",
    "summary": "A third YSAGi PU leather protector listing.",
    "skipIf": "You need a stated size; the Aothia or unbranded pad lists one."
  },
  {
    "id": "best-non-slip-desk-pads-6",
    "rank": 6,
    "badge": "YSAGi Protector (Alternate)",
    "name": "YSAGi Leather Desk Protector",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oQvh4OHlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTSL48B?tag=theofficejournal-20",
    "description": "This YSAGi listing shares the same description as the other two and cost about $4 more at the time of writing, which likely reflects a larger size or different color.\n\nConfirm what the extra cost buys on the listing.",
    "specs": [
      "Material: PU leather",
      "Easy to clean",
      "Size: check listing"
    ],
    "pros": [
      "Wipe-clean",
      "Possibly larger size",
      "Several colors"
    ],
    "cons": [
      "Costs more than other YSAGi listings",
      "Size not stated here",
      "Duplicative"
    ],
    "bestFor": "A specific YSAGi size or color.",
    "summary": "Another YSAGi PU leather listing with the same description, at a higher price.",
    "skipIf": "A cheaper YSAGi listing has the size you need."
  },
  {
    "id": "best-non-slip-desk-pads-7",
    "rank": 7,
    "badge": "Deeper Aothia Pad",
    "name": "Aothia Leather Office Desk Pad Protector",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4167ktE912L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082F5ZLS5?tag=theofficejournal-20",
    "description": "This Aothia listing is a larger version, 15.7 inches deep, which Aothia says fits a laptop, mouse and keyboard.\n\nThe full width isn't given in the listing summary; it cost about $4 more than the compact Aothia at the time of writing.",
    "specs": [
      "Depth: 15.7\" (width: check listing)",
      "Material: PU leather",
      "Non-slip design"
    ],
    "pros": [
      "Deeper than the compact Aothia",
      "Wipe-clean",
      "Non-slip"
    ],
    "cons": [
      "Width not stated here",
      "Costs more than compact version",
      "Plain"
    ],
    "bestFor": "A standard keyboard-and-mouse setup.",
    "summary": "Aothia's PU leather protector in a 15.7-inch-deep size for laptop, keyboard and mouse.",
    "skipIf": "Your space is compact; the 23.6-inch Aothia costs less."
  },
  {
    "id": "best-non-slip-desk-pads-8",
    "rank": 8,
    "badge": "Best Full-Size Pad",
    "name": "QiyI PU Leather Large Mouse Pad",
    "price": "$13.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/4165b4PimxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08JLW4KWN?tag=theofficejournal-20",
    "description": "The QiyI is the largest pad here, 31.5 x 15.7 inches, in water-resistant PU leather that QiyI describes as dense and non-slip, with many colors and patterns.\n\nIt covers a keyboard, mouse and laptop together. The listing doesn't describe a separate backing layer.",
    "specs": [
      "Size: 31.5 x 15.7\" (80 x 40 cm)",
      "Material: PU leather, water-resistant",
      "Non-slip: dense PU (per listing)",
      "Many colors"
    ],
    "pros": [
      "Largest here",
      "Many designs",
      "Wipe-clean"
    ],
    "cons": [
      "No separate grip backing described",
      "Slick for some mice",
      "Costs more than compact pads"
    ],
    "bestFor": "Full keyboard-and-mouse coverage.",
    "summary": "An 80 x 40 cm PU leather pad in many colors, with dense non-slip PU material.",
    "skipIf": "You want a dedicated grip backing; the AFIING lists one."
  }
];

export const howWeEvaluated = [
  {
    "title": "Grip",
    "description": "We noted how each listing describes its non-slip design."
  },
  {
    "title": "Size",
    "description": "We compared dimensions and flagged missing ones."
  },
  {
    "title": "Material",
    "description": "We compared PU leather surfaces."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Look for a described backing",
    "explanation": "Listings that describe a non-slip backing (AFIING) tell you more than a bare \"non-slip\" claim."
  },
  {
    "criterion": "Consider your desk finish",
    "explanation": "Glass and glossy lacquer are harder to grip; wood and laminate are easier."
  },
  {
    "criterion": "Size it to your setup",
    "explanation": "Pads here are 23.6 x 13.7 inches or 31.5 x 15.7 inches, or unstated; measure first."
  },
  {
    "criterion": "Weight helps",
    "explanation": "Larger, heavier pads tend to shift less than small, light ones."
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
          "Described non-slip backing",
          "AFIING 23.6 x 13.7\""
        ],
        [
          "Full-size pad",
          "QiyI 31.5 x 15.7\""
        ],
        [
          "Lowest price",
          "Unbranded 23.6 x 13.7\""
        ],
        [
          "Named-brand compact",
          "Aothia"
        ],
        [
          "YSAGi variants",
          "Compare the three YSAGi listings"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why does my desk pad slide?",
    "a": "A smooth backing on a smooth desk has little friction. A textured or suede-like backing, or a heavier pad, helps."
  },
  {
    "q": "Do non-slip pads work on glass?",
    "a": "Glass is harder to grip. Look for a pad with a described grip backing and check the listing for glass-desk guidance."
  },
  {
    "q": "What size should I get?",
    "a": "Measure your keyboard and mouse side by side and allow a margin."
  },
  {
    "q": "Why several YSAGi listings?",
    "a": "They share a description and likely differ in size or color; buy whichever fits for the least."
  },
  {
    "q": "Does a bigger pad slide less?",
    "a": "A larger pad has more contact area and weight, which tends to help."
  }
];

export const bottomLine = [
  "For grip, the AFIING is the pad that describes a dedicated non-slip backing, at a low price. For more coverage, the QiyI is the full-size option.",
  "The Aothia, YSAGi and unbranded pads are low-cost alternatives, but their listings say less about how they grip; confirm size before buying."
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
