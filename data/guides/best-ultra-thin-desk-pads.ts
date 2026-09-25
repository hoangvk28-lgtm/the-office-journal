// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-ultra-thin-desk-pads";

export const guideTitle = "The Best Thin Desk Pads for a Low-Profile Desk Surface";

export const breadcrumbLabel = "Best Ultra-Thin Desk Pads";

export const metaTitle = "Best Ultra-Thin Desk Pads and Mouse Mats (2026)";

export const metaDescription = "Only a few desk pads state their thickness. We compared eight thin PU leather, felt and hard mats, plus two thicker charging pads, on size, surface and what's actually listed.";

export const mainKeyword = "desk pad ultralight";

export const introParagraphs = [
  "A thin desk pad keeps your keyboard and wrists close to the desk surface and avoids a noticeable step at the pad's edge. The difficulty is that most listings don't state thickness. Of the eight picks here, only the Razer Sphex V3 (0.4mm) gives a figure for a thin pad; the PU leather protectors are thin by construction, and two RGB charging pads are thicker by design.",
  "Beyond thickness, compare size and surface. PU leather wipes clean and protects the desk; felt is soft but absorbs spills; a hard polycarbonate mat like the Razer is built for mouse tracking rather than covering the desk.",
  "Our comparison is based on published specifications, not hands-on testing. If thickness matters, check each listing or ask the seller."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-ultra-thin-desk-pads-1",
    "rank": 1,
    "badge": "Best Low-Cost Leather Protector",
    "name": "Aothia Non-Slip Waterproof PU Leather Desk Pad Protector for Mouse",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411bezC-CcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086BLQZ5L?tag=theofficejournal-20",
    "description": "The Aothia is a simple, low-cost PU leather pad, 23.6 x 13.7 inches, described as protecting the desk from scratches, stains, spills, heat and scuffs, with a non-slip design.\n\nIt is smaller than most pads here, enough for a compact keyboard and mouse or a laptop. Thickness isn't stated.",
    "specs": [
      "Size: 23.6 x 13.7\"",
      "Material: PU leather",
      "Non-slip design",
      "Thickness: not stated"
    ],
    "pros": [
      "Low price",
      "Wipe-clean",
      "Thin leather construction"
    ],
    "cons": [
      "Smaller than most",
      "Thickness not stated",
      "Plain design"
    ],
    "bestFor": "A compact desk that needs a thin protective surface.",
    "summary": "A 23.6 x 13.7-inch PU leather desk protector with a non-slip design.",
    "skipIf": "You need more width; the DAWNTREES felt mat is 36 inches wide."
  },
  {
    "id": "best-ultra-thin-desk-pads-2",
    "rank": 2,
    "badge": "YSAGi Leather Protector",
    "name": "YSAGi Leather Office Desk Pad Protector",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CF62OPpgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTPC44X?tag=theofficejournal-20",
    "description": "The YSAGi Leather Office Desk Pad is a plain PU leather protector that YSAGi says guards against scratches, stains, spills, heat and scuffs, large enough to replace a separate mouse pad.\n\nIts size and thickness aren't given in the listing summary. It appears very similar to the other YSAGi listing here, which cost more at the time of writing.",
    "specs": [
      "Material: PU leather",
      "Waterproof, easy to clean (per listing)",
      "Size and thickness: check listing"
    ],
    "pros": [
      "Low price",
      "Wipe-clean",
      "Desk protection"
    ],
    "cons": [
      "Size not stated here",
      "Thickness not stated",
      "Overlaps with the other YSAGi listing"
    ],
    "bestFor": "A basic protective pad at the lowest price.",
    "summary": "A YSAGi PU leather desk protector described as waterproof and easy to clean.",
    "skipIf": "You want a stated size; the Hsurbtra lists 30 x 14 inches."
  },
  {
    "id": "best-ultra-thin-desk-pads-3",
    "rank": 3,
    "badge": "Alternate YSAGi Listing",
    "name": "YSAGi Leather Desk Protector",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oQvh4OHlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BMTSL48B?tag=theofficejournal-20",
    "description": "This YSAGi listing uses the same description as the one above, likely in a different size or color, and cost about $4 more at the time of writing.\n\nCompare both YSAGi pages for size and finish, and buy whichever matches your desk at the lower price.",
    "specs": [
      "Material: PU leather",
      "Easy to clean",
      "Size and color: check listing"
    ],
    "pros": [
      "Wipe-clean",
      "Desk protection",
      "Possibly a different size or color"
    ],
    "cons": [
      "Costs more than the other YSAGi",
      "Size not stated here",
      "Thickness not stated"
    ],
    "bestFor": "Readers comparing YSAGi sizes and colors.",
    "summary": "Another YSAGi PU leather protector listing with the same description at a higher price.",
    "skipIf": "The other YSAGi listing suits your desk; it cost less."
  },
  {
    "id": "best-ultra-thin-desk-pads-4",
    "rank": 4,
    "badge": "Charging RGB Mat (Not Ultra-Thin)",
    "name": "Wireless Charging Mouse Pad",
    "price": "$19.78",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DxnTqCodL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCFB3MTM?tag=theofficejournal-20",
    "description": "This RGB pad adds a 15W Qi-certified wireless charger, listed for iPhone 12 to 17 and Samsung Galaxy phones, plus 11 lighting colors and 5 modes, on a 31.5 x 11.81-inch surface.\n\nAt 4mm thick with charging and lighting built in, it isn't an ultra-thin pad, and it needs a power connection.",
    "specs": [
      "Size: 31.5 x 11.81\"",
      "Thickness: 4mm",
      "Charging: 15W Qi",
      "Lighting: RGB, 11 colors, 5 modes"
    ],
    "pros": [
      "Wireless charging",
      "RGB lighting",
      "Moderate price"
    ],
    "cons": [
      "Not ultra-thin",
      "Needs power",
      "Shallow depth"
    ],
    "bestFor": "A gaming desk that wants charging and lighting in the mat.",
    "summary": "A 31.5 x 11.81-inch, 4mm RGB mouse pad with 15W Qi wireless charging.",
    "skipIf": "Thinness is the goal; the Razer Sphex V3 is 0.4mm."
  },
  {
    "id": "best-ultra-thin-desk-pads-5",
    "rank": 5,
    "badge": "Thinnest Stated: 0.4mm",
    "name": "Razer Sphex V3 Hard Gaming Mouse Mat: Ultra-Thin Form Factor",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21GIiujpZ8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B091D5Y2Z7?tag=theofficejournal-20",
    "description": "The Razer Sphex V3 is the thinnest pad with a stated figure here: 0.4mm, which Razer says is 20% thinner than before, with a hard polycarbonate surface optimized for optical sensors and an adhesive base that holds it to the desk.\n\nRazer says it is lab-tested for impact, rip and tear strength. It is a mouse mat rather than a full desk pad, so it won't sit under your keyboard.",
    "specs": [
      "Thickness: 0.4mm",
      "Surface: hard polycarbonate",
      "Base: adhesive",
      "Type: mouse mat"
    ],
    "pros": [
      "Thinnest stated here",
      "Adhesive base stays put",
      "Hard tracking surface"
    ],
    "cons": [
      "Mouse area only",
      "Adhesive needs care on some finishes",
      "Hard surface isn't for writing"
    ],
    "bestFor": "A near-flush mouse surface.",
    "summary": "A 0.4mm hard polycarbonate mouse mat with adhesive base, built for optical sensor tracking.",
    "skipIf": "You want to cover the whole desk area; a PU leather pad suits that."
  },
  {
    "id": "best-ultra-thin-desk-pads-6",
    "rank": 6,
    "badge": "Best Felt Pad",
    "name": "DAWNTREES Felt Desk Mat",
    "price": "$14.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zw8rzQFGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MVT9Y98?tag=theofficejournal-20",
    "description": "The DAWNTREES is the felt option: 36 x 12 inches, the widest here, with a soft felt surface.\n\nThe listing calls it water-absorbing, so spills soak in rather than wipe off, and its 12-inch depth is shallow. Thickness isn't stated.",
    "specs": [
      "Size: 36 x 12\"",
      "Material: felt",
      "Thickness: not stated"
    ],
    "pros": [
      "Widest here",
      "Soft felt",
      "Moderate price"
    ],
    "cons": [
      "Absorbs spills",
      "Shallow depth",
      "Thickness not stated"
    ],
    "bestFor": "A soft, wide strip under keyboard and mouse.",
    "summary": "A 36 x 12-inch felt desk mat, soft and wide.",
    "skipIf": "You drink at the desk; a PU leather pad wipes clean."
  },
  {
    "id": "best-ultra-thin-desk-pads-7",
    "rank": 7,
    "badge": "Charging Mat with Phone Holder",
    "name": "Mouse Pad with Phone Holder",
    "price": "$26.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51eReml90uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DY4NQ2K8?tag=theofficejournal-20",
    "description": "This pad combines 15W wireless charging with a phone holder and RGB lighting in 11 static modes and 2 dynamic effects. It was the most expensive pad here at the time of writing.\n\nLike the other charging pad, it isn't an ultra-thin product, and its size and thickness aren't stated in the listing summary.",
    "specs": [
      "Charging: 15W wireless",
      "Phone holder: yes",
      "Lighting: RGB",
      "Size and thickness: check listing"
    ],
    "pros": [
      "Phone holder",
      "Wireless charging",
      "RGB lighting"
    ],
    "cons": [
      "Most expensive here",
      "Not ultra-thin",
      "Size not stated"
    ],
    "bestFor": "Keeping a phone upright and charging on the mat.",
    "summary": "An RGB mouse pad with 15W wireless charging and a phone holder.",
    "skipIf": "You don't need a phone holder; the other charging pad costs less."
  },
  {
    "id": "best-ultra-thin-desk-pads-8",
    "rank": 8,
    "badge": "Best Mid-Size Leather Pad",
    "name": "Hsurbtra Desk Pad",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413kOQ8uDkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08T1SJR5D?tag=theofficejournal-20",
    "description": "The Hsurbtra is a mid-size synthetic leather pad, 30 x 14 inches, large enough for a laptop, keyboard and mouse, with a buffed, coated and glazed finish.\n\nIt costs slightly more than the Aothia but covers more of the desk. Thickness isn't stated.",
    "specs": [
      "Size: 30 x 14\"",
      "Material: synthetic leather (buffed, coated, glazed)",
      "Thickness: not stated"
    ],
    "pros": [
      "Stated mid-size dimensions",
      "Wipe-clean surface",
      "Moderate price"
    ],
    "cons": [
      "Thickness not stated",
      "Base type not detailed",
      "Plain design"
    ],
    "bestFor": "A thin leather surface for a standard keyboard and mouse.",
    "summary": "A 30 x 14-inch synthetic leather pad with buffed, coated finish.",
    "skipIf": "Your desk is small; the Aothia is 23.6 inches wide."
  }
];

export const howWeEvaluated = [
  {
    "title": "Profile",
    "description": "We noted stated thickness and flagged where it's missing."
  },
  {
    "title": "Size and surface",
    "description": "We compared dimensions and materials."
  },
  {
    "title": "Extras",
    "description": "We noted charging and lighting, which add thickness."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Look for a stated thickness",
    "explanation": "Few listings give one. The Razer Sphex V3 lists 0.4mm; the charging pads are 4mm or thicker by design."
  },
  {
    "criterion": "Desk pad or mouse mat",
    "explanation": "PU leather and felt pads cover keyboard and mouse; the Razer covers only the mouse area."
  },
  {
    "criterion": "Choose the surface",
    "explanation": "PU leather wipes clean; felt is soft but absorbs spills; hard polycarbonate is for mouse tracking."
  },
  {
    "criterion": "Measure the desk",
    "explanation": "Pads here range from 23.6 to 36 inches wide and 12 to 14 inches deep."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider"
      ],
      "rows": [
        [
          "Thinnest mouse surface",
          "Razer Sphex V3"
        ],
        [
          "Compact leather protector",
          "Aothia"
        ],
        [
          "Mid-size leather pad",
          "Hsurbtra"
        ],
        [
          "Wide, soft felt",
          "DAWNTREES"
        ],
        [
          "Lowest-cost basic pad",
          "YSAGi"
        ],
        [
          "Charging (not thin)",
          "Wireless Charging Mouse Pad"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "How thin is ultra-thin?",
    "a": "There's no standard. The Razer Sphex V3 lists 0.4mm; most leather pads here don't state thickness."
  },
  {
    "q": "Why choose a thin pad?",
    "a": "It keeps your hands close to the desk and avoids a step at the edge. It also offers less cushioning."
  },
  {
    "q": "Are charging pads thin?",
    "a": "No. The charging pad here lists 4mm, and built-in electronics add bulk."
  },
  {
    "q": "Will a thin pad slide?",
    "a": "Look for a non-slip or adhesive base; the Razer uses adhesive."
  },
  {
    "q": "Leather or felt?",
    "a": "Leather wipes clean; felt is softer but absorbs spills."
  }
];

export const bottomLine = [
  "For the thinnest mouse surface with a stated figure, the Razer Sphex V3 is the pick. To cover the whole desk thinly, the Hsurbtra and Aothia PU leather pads are simple, low-cost options, and the DAWNTREES is the soft felt alternative.",
  "The two charging pads are here for readers who want charging in the mat, but they aren't ultra-thin."
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
