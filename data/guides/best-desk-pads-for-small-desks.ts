// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-desk-pads-for-small-desks";

export const guideTitle = "The Best Desk Pads for Small Desks and Tight Spaces";

export const breadcrumbLabel = "Best Desk Pads for Small Desks";

export const metaTitle = "Best Desk Pads for Small Desks: Compact Mats Under $10 (2026)";

export const metaDescription = "We compared compact desk pads for small desks on size, surface and backing, from 23.6-inch PU pads to a checkered scalloped mat and a Logitech cloth pad, all around $10.";

export const mainKeyword = "desk pad small";

export const introParagraphs = [
  "On a small desk, a full-size 31-inch pad hangs over the edges or covers space you need for other things. A compact pad around 23.6 x 13.7 inches fits a laptop and mouse, or a compact keyboard and mouse, while still protecting the surface and giving the mouse a consistent track.",
  "Every pad here costs about $10 or less at the time of writing, and several are near-identical PU pads, so the useful differences are exact size, surface (PU leather or coated cloth) and style.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Measure the space you want to cover first."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/21NnLPUiwgL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-desk-pads-for-small-desks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Smead Vegan Leather Desk Pad Mat",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21NnLPUiwgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKLRPKD8?tag=theofficejournal-20",
    "description": "The Smead is the sensible pick for a small desk: a thin vegan leather pad bonded to a faux suede underside that Smead says will not slide on wood, glass or laminate, and a surface where spills bead up and wipe away.\n\nIt works as both a mouse surface and a writing pad, from an established office-supply brand, for about $7 at the time of writing.\n\nThe listing does not give dimensions, so confirm the size.",
    "specs": [
      "Surface: vegan leather",
      "Back: faux suede",
      "Spill-resistant",
      "Size: not stated"
    ],
    "pros": [
      "Grips glass and wood, per Smead",
      "Low price",
      "Established brand"
    ],
    "cons": [
      "Dimensions not stated"
    ],
    "bestFor": "Small desks, including glass tops.",
    "summary": "A thin vegan leather pad on a faux suede back that grips wood, glass and laminate.",
    "skipIf": "You need a confirmed size; the Aothia lists 23.6 x 13.7 inches."
  },
  {
    "id": "best-desk-pads-for-small-desks-2",
    "rank": 2,
    "badge": "Compact PU Pad",
    "name": "Aothia Non-Slip Waterproof PU Leather Desk Pad Protector for Mouse",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086BLQZ5L?tag=theofficejournal-20",
    "description": "The Aothia is a 23.6 x 13.7-inch waterproof PU pad with a non-slip back, for about $10 at the time of writing, sized for a laptop and mouse.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Surface: PU, waterproof",
      "Non-slip back"
    ],
    "pros": [
      "Stated size",
      "Wipe clean"
    ],
    "cons": [
      "Near-identical to cheaper pads"
    ],
    "bestFor": "Small desks with a laptop and mouse.",
    "summary": "A 23.6 x 13.7-inch waterproof PU pad with a non-slip back.",
    "skipIf": "The unbranded 23.6-inch pad costs about $3 less."
  },
  {
    "id": "best-desk-pads-for-small-desks-3",
    "rank": 3,
    "badge": "Suede-Backed YSAGi Pad",
    "name": "YSAGi Non-Slip Leather Desk Pad",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41WcT-+T-kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YFBYSQ4?tag=theofficejournal-20",
    "description": "This YSAGi has a PVC leather top that wipes clean and a suede back for slip resistance, for about $10 at the time of writing.\n\nThe listing does not state dimensions.",
    "specs": [
      "Surface: PVC leather",
      "Back: suede",
      "Size: not stated"
    ],
    "pros": [
      "Suede grip",
      "Wipe clean"
    ],
    "cons": [
      "Dimensions not stated"
    ],
    "bestFor": "Buyers who prefer YSAGi and will check the size.",
    "summary": "A YSAGi PVC leather pad with a suede back for grip.",
    "skipIf": "You want a stated size."
  },
  {
    "id": "best-desk-pads-for-small-desks-4",
    "rank": 4,
    "badge": "YSAGi PU Variant",
    "name": "YSAGi Leather Office Desk Pad Protector",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CF62OPpgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTPC44X?tag=theofficejournal-20",
    "description": "This YSAGi PU desk protector doubles as a mouse pad and wipes clean, for about $10 at the time of writing. The listing does not state dimensions; YSAGi sells several sizes.",
    "specs": [
      "Surface: PU leather",
      "Size: not stated"
    ],
    "pros": [
      "Wipe clean"
    ],
    "cons": [
      "Dimensions not stated",
      "Duplicate listing"
    ],
    "bestFor": "Buyers choosing a YSAGi variant.",
    "summary": "Another YSAGi PU leather desk protector listing.",
    "skipIf": "You want a stated size."
  },
  {
    "id": "best-desk-pads-for-small-desks-5",
    "rank": 5,
    "badge": "Lowest-Cost Compact Pad",
    "name": "Leather Desk Pad Protector, Non-Slip Desk Pad(Black, 23.6\" x 13.7\")",
    "price": "$6.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41aoSrfEj3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CNX4MTB9?tag=theofficejournal-20",
    "description": "This unbranded 23.6 x 13.7-inch black PU pad matches the Aothia in size, with a non-slip design, for about $7 at the time of writing.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Surface: PU leather",
      "Non-slip back"
    ],
    "pros": [
      "Lowest price",
      "Stated size"
    ],
    "cons": [
      "Unbranded"
    ],
    "bestFor": "Budget small desks.",
    "summary": "A black 23.6 x 13.7-inch PU pad with a non-slip back for about $7.",
    "skipIf": "You want a named brand."
  },
  {
    "id": "best-desk-pads-for-small-desks-6",
    "rank": 6,
    "badge": "Best Cloth Mouse Pad",
    "name": "Logitech Studio Series Small Mouse Pad",
    "price": "$9.78",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/319GzM0EaHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09DV56338?tag=theofficejournal-20",
    "description": "The Logitech Studio Series small pad is a cloth mouse pad rather than a desk pad: a fine-weave surface for quiet gliding with a spill-repellent coating that wipes clean.\n\nIt suits a very small desk where only the mouse needs a surface.\n\nIt will not sit under a keyboard or laptop.",
    "specs": [
      "Type: small mouse pad",
      "Surface: coated cloth, spill-repellent"
    ],
    "pros": [
      "Established brand",
      "Quiet, smooth surface"
    ],
    "cons": [
      "Mouse only"
    ],
    "bestFor": "The smallest desks, where only the mouse needs a pad.",
    "summary": "Logitech's small Studio Series cloth pad with a spill-repellent coating.",
    "skipIf": "You want keyboard coverage too."
  },
  {
    "id": "best-desk-pads-for-small-desks-7",
    "rank": 7,
    "badge": "Best Decorative Compact Pad",
    "name": "Scalloped Desk Mat",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tDuGOSlBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR4QFN15?tag=theofficejournal-20",
    "description": "The scalloped desk mat adds style to a small desk: 23.6 x 11.8 inches of waterproof PU with a checkered pattern and scalloped edges.\n\nAt 11.8 inches deep it is shallower than the other compact pads, which suits a narrow desk.",
    "specs": [
      "Size: 23.6 x 11.8\"",
      "Surface: PU, checkered",
      "Scalloped edge",
      "Waterproof"
    ],
    "pros": [
      "Decorative",
      "Shallow for narrow desks"
    ],
    "cons": [
      "Less depth for a laptop"
    ],
    "bestFor": "Narrow desks where style matters.",
    "summary": "A 23.6 x 11.8-inch checkered PU mat with scalloped edges.",
    "skipIf": "You want a plain look."
  },
  {
    "id": "best-desk-pads-for-small-desks-8",
    "rank": 8,
    "badge": "Faux Leather Compact Pad",
    "name": "Faux Leather Large Mouse Pad",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uFPncc29L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJZDSSKC?tag=theofficejournal-20",
    "description": "This faux leather pad is 23.6 x 13.8 inches (60 x 35 cm), water-resistant, with a non-slip underside, for about $10 at the time of writing.\n\nIt is another near-identical compact pad; choose it if you prefer its color.",
    "specs": [
      "Size: 23.6 x 13.8\" (60 x 35 cm)",
      "Surface: faux leather, water-resistant",
      "Non-slip underside"
    ],
    "pros": [
      "Stated size",
      "Wipe clean"
    ],
    "cons": [
      "Near-identical to cheaper pads"
    ],
    "bestFor": "Buyers who like its color.",
    "summary": "A 23.6 x 13.8-inch water-resistant faux leather pad.",
    "skipIf": "The unbranded pad costs less for the same size."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size and fit",
    "description": "We recorded stated dimensions and flagged missing ones."
  },
  {
    "title": "Surface and backing",
    "description": "We compared materials and grip claims."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size",
    "explanation": "Measure the area. Most pads here are about 23.6 x 13.7 inches; the scalloped mat is shallower and the Logitech covers only the mouse."
  },
  {
    "criterion": "Surface",
    "explanation": "PU and vegan leather wipe clean; the Logitech's coated cloth is quieter under a mouse."
  },
  {
    "criterion": "Backing",
    "explanation": "Suede and non-slip backs keep the pad in place; the Smead lists grip on glass."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By desk",
    "table": {
      "headers": [
        "Desk",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Glass or slippery top",
          "Smead",
          "Faux suede grip"
        ],
        [
          "Laptop and mouse",
          "Unbranded 23.6\" or Aothia",
          "Stated size"
        ],
        [
          "Narrow desk",
          "Scalloped mat",
          "11.8 inches deep"
        ],
        [
          "Mouse only",
          "Logitech Studio small",
          "Cloth mouse pad"
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
          "About $7",
          "Smead, unbranded 23.6\""
        ],
        [
          "About $10",
          "Aothia, YSAGi (both), Logitech, scalloped, faux leather"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What size pad suits a small desk?",
    "a": "Around 23.6 x 13.7 inches fits a laptop and mouse. For a very narrow desk, the 11.8-inch-deep scalloped mat is shallower."
  },
  {
    "q": "Will a pad stay put on a glass desk?",
    "a": "The Smead's faux suede back is listed as gripping glass. Plain rubber backs may slide more on glossy surfaces."
  },
  {
    "q": "Why do so many pads look the same?",
    "a": "Many brands sell near-identical 23.6-inch PU pads. Choose on price and color."
  }
];

export const bottomLine = [
  "For most small desks, the Smead is the pick, especially on glass, and the unbranded 23.6-inch pad is the cheapest stated-size option. The Aothia and faux leather pads are near-identical alternatives.",
  "For a narrow desk, the scalloped mat is shallower, and if only the mouse needs a surface, the Logitech Studio small pad is enough."
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
