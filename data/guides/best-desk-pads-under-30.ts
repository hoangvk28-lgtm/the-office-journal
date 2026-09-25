// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-desk-pads-under-30";

export const guideTitle = "The Best Felt Desk Pads Under $30";

export const breadcrumbLabel = "Best Desk Pads Under $30";

export const metaTitle = "Best Desk Pads Under $30: Felt Mats for Every Desk Size (2026)";

export const metaDescription = "We compared affordable felt desk pads on size, thickness, grip and finish, from a $10 40-inch mat to a desk-covering 47-inch felt pad.";

export const mainKeyword = "desk pad reviews";

export const introParagraphs = [
  "Every pad in this guide is felt, which gives a desk a soft, warm, quiet surface for typing, mousing and writing. The trade-off is care: felt absorbs spills instead of repelling them, so it suits desks where drinks stay off to the side.",
  "With the material the same, size is the main decision, from 36 x 12 inches for keyboard and mouse to 47.2 x 23.6 inches, which covers most of a desk. Grip and finish vary too: rubber dots, stitched or unstitched edges, and thickness.",
  "Our comparison is based on published specifications and price position, not hands-on testing. One pad, the large DAWNTREES, was slightly above $30 at the time of writing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/51zw8rzQFGL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-desk-pads-under-30-1",
    "rank": 1,
    "badge": "Best Keyboard-and-Mouse Strip",
    "name": "DAWNTREES Felt Desk Mat",
    "price": "$14.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zw8rzQFGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MVT9Y98?tag=theofficejournal-20",
    "description": "The DAWNTREES 36 x 12-inch mat is the simple choice for covering keyboard and mouse: soft felt that DAWNTREES describes as durable, for about $15 at the time of writing.\n\nAt 12 inches deep it leaves the rest of the desk bare, which suits a small or shared desk.\n\nFelt absorbs liquids, so spills need prompt blotting.",
    "specs": [
      "Size: 36 x 12\"",
      "Material: felt"
    ],
    "pros": [
      "Low price",
      "Soft, quiet surface"
    ],
    "cons": [
      "Shallow",
      "Absorbs spills"
    ],
    "bestFor": "Keyboard and mouse on a small or narrow desk.",
    "summary": "A 36 x 12-inch felt mat for keyboard and mouse, about $15.",
    "skipIf": "You want room for a laptop too; the 40 x 16-inch mat is deeper for less."
  },
  {
    "id": "best-desk-pads-under-30-2",
    "rank": 2,
    "badge": "Best Finished Felt Mat",
    "name": "Nordik Felt Desk Mat",
    "price": "$24.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+Gtgg8jyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQBMX7C6?tag=theofficejournal-20",
    "description": "The Nordik is the more finished option: a 35 x 17-inch felt mat without stitching for a clean edge, rubber dots underneath for grip and a leather logo tab, in a choice of warm colors.\n\nIt costs about $25 at the time of writing, more than the basic felt mats.",
    "specs": [
      "Size: 35 x 17\"",
      "Material: felt, unstitched edge",
      "Rubber grip dots",
      "Leather tab"
    ],
    "pros": [
      "Clean finish",
      "Grip dots",
      "Deeper than basic strips"
    ],
    "cons": [
      "Costs more than basic mats"
    ],
    "bestFor": "Desks where the pad's look matters.",
    "summary": "A 35 x 17-inch unstitched felt mat with rubber grip dots and a leather tab.",
    "skipIf": "You want the lowest price; the 40 x 16-inch mat is about $10."
  },
  {
    "id": "best-desk-pads-under-30-3",
    "rank": 3,
    "badge": "Best Full-Desk Felt Mat",
    "name": "DAWNTREES Large Felt Desk Mat",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51J2v5kEtrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3X1RNQG?tag=theofficejournal-20",
    "description": "The large DAWNTREES covers almost the entire desktop at 47.2 x 23.6 inches, with room for laptop, keyboard, mouse and more.\n\nIt was slightly above $30 at the time of writing, so it is a small stretch for this budget.",
    "specs": [
      "Size: 47.2 x 23.6\" (120 x 60 cm)",
      "Material: felt"
    ],
    "pros": [
      "Covers most of the desk"
    ],
    "cons": [
      "Just over $30",
      "Absorbs spills"
    ],
    "bestFor": "Wide desks that want one soft surface.",
    "summary": "A 47.2 x 23.6-inch felt mat that covers most of a desk.",
    "skipIf": "You must stay under $30; the Nordik is the largest under that."
  },
  {
    "id": "best-desk-pads-under-30-4",
    "rank": 4,
    "badge": "DAWNTREES Alternative",
    "name": "DAWNTREES Felt Desk Pad",
    "price": "$14.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51YcV3OQc-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MVVQKSY?tag=theofficejournal-20",
    "description": "This DAWNTREES listing is a felt tabletop protector that DAWNTREES says guards glass, wood and plastic surfaces against scratches, spills, heat and abrasion, for about $14 at the time of writing.\n\nThe listing does not give dimensions; it may be another size of the 36 x 12-inch mat.",
    "specs": [
      "Material: felt",
      "Size: not stated"
    ],
    "pros": [
      "Low price"
    ],
    "cons": [
      "Dimensions not stated"
    ],
    "bestFor": "Buyers choosing a DAWNTREES size.",
    "summary": "A DAWNTREES felt desk pad that protects glass, wood or plastic tops.",
    "skipIf": "You want a stated size."
  },
  {
    "id": "best-desk-pads-under-30-5",
    "rank": 5,
    "badge": "Best Thick Felt Mat",
    "name": "Bright Stone Felt Desk Mat, Non-Slip Mouse Pad",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51z3z7yI6+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09X9YBSR5?tag=theofficejournal-20",
    "description": "The Bright Stone is 3mm felt with a fine texture and an anti-slip design, which Bright Stone says resists heat and abrasion and suits writing.\n\nIt costs about $17 at the time of writing. The listing does not give dimensions.",
    "specs": [
      "Material: 3mm felt",
      "Anti-slip design",
      "Size: not stated"
    ],
    "pros": [
      "Stated thickness",
      "Anti-slip"
    ],
    "cons": [
      "Dimensions not stated"
    ],
    "bestFor": "Writing and mousing on a felt surface.",
    "summary": "A 3mm felt desk mat with an anti-slip design for writing and mousing.",
    "skipIf": "You want a confirmed size."
  },
  {
    "id": "best-desk-pads-under-30-6",
    "rank": 6,
    "badge": "Best Value",
    "name": "Large Felt Desk mat",
    "price": "$9.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418LlWYB6fL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZDJ7W47?tag=theofficejournal-20",
    "description": "This 40 x 16-inch felt mat is the value pick: large enough for a laptop, keyboard and mouse, with plastic grip dots underneath, for about $10 at the time of writing.\n\nThe brand is not named in the listing.",
    "specs": [
      "Size: 40 x 16\" (100 x 40 cm)",
      "Material: felt",
      "Plastic grip dots"
    ],
    "pros": [
      "Lowest price",
      "Generous size"
    ],
    "cons": [
      "Unbranded",
      "Absorbs spills"
    ],
    "bestFor": "Most desks on a small budget.",
    "summary": "A 40 x 16-inch felt mat with plastic grip dots for about $10.",
    "skipIf": "You want a finished look; the Nordik has a clean edge and leather tab."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size",
    "description": "We recorded stated dimensions and flagged missing ones."
  },
  {
    "title": "Construction",
    "description": "We noted thickness, edge finish and grip."
  },
  {
    "title": "Price position",
    "description": "We compared prices at the time of writing against the $30 budget."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Size",
    "explanation": "From 36 x 12 inches (keyboard and mouse) to 47.2 x 23.6 inches (most of a desk). Measure first."
  },
  {
    "criterion": "Spills",
    "explanation": "Felt absorbs liquids. Keep drinks off the pad or blot quickly."
  },
  {
    "criterion": "Grip",
    "explanation": "Rubber or plastic dots help the mat stay put."
  },
  {
    "criterion": "Finish",
    "explanation": "Unstitched edges (Nordik) look cleaner; thickness adds cushion."
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
          "Most desks, budget",
          "40 x 16\" felt mat",
          "About $10"
        ],
        [
          "Keyboard and mouse only",
          "DAWNTREES 36 x 12\"",
          "Narrow strip"
        ],
        [
          "Finished look",
          "Nordik 35 x 17\"",
          "Clean edge, grip dots"
        ],
        [
          "Whole desk",
          "DAWNTREES 47.2 x 23.6\"",
          "Slightly over $30"
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
        "Mats"
      ],
      "rows": [
        [
          "About $10–$17",
          "40 x 16\" mat, DAWNTREES (two), Bright Stone"
        ],
        [
          "About $25",
          "Nordik"
        ],
        [
          "About $33",
          "DAWNTREES large"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is felt good for a desk pad?",
    "a": "It feels soft and quiet and suits writing and mousing, but it absorbs spills."
  },
  {
    "q": "How do I clean a felt desk pad?",
    "a": "Blot spills quickly and spot-clean; follow the maker's care instructions."
  },
  {
    "q": "Will a felt mat slide?",
    "a": "Mats with rubber or plastic dots, like the Nordik and the 40 x 16-inch mat, are designed to stay put."
  }
];

export const bottomLine = [
  "For most desks, the 40 x 16-inch felt mat is the value pick, and the Nordik is worth a little more for its clean edge and grip dots. The DAWNTREES 36 x 12 suits keyboard-and-mouse strips.",
  "If you want to cover the whole desk, the large DAWNTREES does so for just over $30."
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
