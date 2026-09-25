// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-vintage-style-desk-pads";

export const guideTitle = "The Best Vintage-Style Desk Pads for a Warm, Classic Desk";

export const breadcrumbLabel = "Best Vintage-Style Desk Pads";

export const metaTitle = "Best Vintage-Style Desk Pads: Real Leather, Distressed PU and Printed (2026)";

export const metaDescription = "We compared vintage-look desk pads, from full-grain leather blotters to distressed PU and dark academia prints, on material, thickness, size and price.";

export const mainKeyword = "desk pad design";

export const introParagraphs = [
  "A vintage-style desk pad softens a modern desk with the look of an old leather blotter or a library table. The first decision is material: genuine leather ages and darkens with use, distressed PU imitates that look for less, and printed rubber mats reproduce a vintage pattern.",
  "Beyond that, compare thickness, which affects how the pad feels under the wrists, and size. Real leather here is about 2mm thick; the printed mats are rubber-backed and cheaper.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $15 to $50 at the time of writing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41G9+UcfuAL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-vintage-style-desk-pads-1",
    "rank": 1,
    "badge": "Best Budget Leather Look",
    "name": "Distressed Leather Desk Mat",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41G9+UcfuAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8NHC9JZ?tag=theofficejournal-20",
    "description": "The distressed leather mat is the sensible way to get the look for little money: crazy-horse-style PU leather with a distressed pattern, which the seller says resists water, heat and dirt.\n\nIt costs about $19 at the time of writing, far less than genuine leather.\n\nIt is PU, so it will not develop the patina of real leather, and the listing does not give dimensions.",
    "specs": [
      "Surface: distressed PU leather (crazy horse style)",
      "Water, heat and dirt resistance (seller claim)",
      "Size: not stated"
    ],
    "pros": [
      "Vintage look at a low price",
      "Wipe clean"
    ],
    "cons": [
      "PU, not real leather",
      "Dimensions not stated"
    ],
    "bestFor": "Buyers who want the worn-leather look on a budget.",
    "summary": "A distressed \"crazy horse\" PU leather mat with a worn vintage look for about $19.",
    "skipIf": "You want real leather that ages; the Elizo or YSAGi are genuine leather."
  },
  {
    "id": "best-vintage-style-desk-pads-2",
    "rank": 2,
    "badge": "Best Large Printed Mat",
    "name": "Auhoahsil Large Gaming Mouse Pad",
    "price": "$16.14",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51jpEfH4NmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08FG68RPR?tag=theofficejournal-20",
    "description": "The Auhoahsil is a large printed mat rather than a leather pad: 35.4 x 15.7 inches of 3mm natural rubber, which the seller describes as recyclable and odorless, with a printed design.\n\nIt covers a full keyboard, mouse and more, and the 3mm rubber gives more cushion than thin PU.\n\nIt is a fabric-and-rubber mouse mat, so the vintage feel comes from the print, not the material.",
    "specs": [
      "Size: 35.4 x 15.7\"",
      "Material: 3mm natural rubber",
      "Printed design"
    ],
    "pros": [
      "Large",
      "Cushioned",
      "Low price"
    ],
    "cons": [
      "Vintage look is printed",
      "Fabric top absorbs spills"
    ],
    "bestFor": "A big, cushioned mat with a vintage-style print.",
    "summary": "A 35.4 x 15.7-inch, 3mm natural-rubber mat with a printed design.",
    "skipIf": "You want a leather feel; choose a leather or PU pad."
  },
  {
    "id": "best-vintage-style-desk-pads-3",
    "rank": 3,
    "badge": "Best Premium Leather",
    "name": "YSAGi Leather Desk Mat",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41N1ubdsrkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1T6XMKM?tag=theofficejournal-20",
    "description": "The YSAGi leather mat is the premium pick: natural leather treated for a pull-up, oil-wax finish, 2mm thick, which YSAGi says is thicker than normal chrome-tanned leather and will not peel.\n\nPull-up leather lightens where it is pressed and darkens with use, which suits the vintage look.\n\nIt is the most expensive pad here at about $50 at the time of writing, and the listing does not give dimensions.",
    "specs": [
      "Material: natural leather, pull-up oil-wax finish",
      "Thickness: 2mm",
      "Size: not stated"
    ],
    "pros": [
      "Real leather that ages",
      "Will not peel like PU, per YSAGi"
    ],
    "cons": [
      "Most expensive here",
      "Dimensions not stated"
    ],
    "bestFor": "Buyers who want genuine leather that develops character.",
    "summary": "A 2mm natural leather mat with a pull-up, oil-wax finish.",
    "skipIf": "You want a set with accessories; the Elizo includes them."
  },
  {
    "id": "best-vintage-style-desk-pads-4",
    "rank": 4,
    "badge": "Best Leather Set",
    "name": "Elizo Real Leather Desk Mat Set (32x16) Large Desk Cover Desk Blotter Protector",
    "price": "$39.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41MXmxgXWXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BKTZGQ41?tag=theofficejournal-20",
    "description": "The Elizo set is full-grain leather at 2mm thick, in a 32 x 16-inch size that works like a traditional desk blotter, with accessories included according to the listing.\n\nIt costs about $10 less than the YSAGi at the time of writing, and it states its dimensions.",
    "specs": [
      "Size: 32 x 16\"",
      "Material: full-grain leather, 2mm",
      "Set with accessories (per listing)"
    ],
    "pros": [
      "Full-grain leather",
      "Stated size",
      "Costs less than the YSAGi"
    ],
    "cons": [
      "Accessories not detailed"
    ],
    "bestFor": "A real-leather blotter look at a moderate price.",
    "summary": "A 32 x 16-inch full-grain leather desk mat set, 2mm thick.",
    "skipIf": "You want the pull-up oil-wax finish; the YSAGi has it."
  },
  {
    "id": "best-vintage-style-desk-pads-5",
    "rank": 5,
    "badge": "Best With Cable Management",
    "name": "Nordik Leather Desk Mat",
    "price": "$22.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41sQK-rQ1ZS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07N5K716Y?tag=theofficejournal-20",
    "description": "The Nordik is vegan PU leather with a textured finish and a feature the others lack: built-in cable management.\n\nIt costs about $23 at the time of writing.\n\nThe listing does not describe the cable feature or give dimensions, so check the photos.",
    "specs": [
      "Surface: vegan PU leather",
      "Cable management (details not stated)",
      "Size: not stated"
    ],
    "pros": [
      "Cable management",
      "Vegan material"
    ],
    "cons": [
      "Details and dimensions not stated"
    ],
    "bestFor": "Buyers who want a leather look and tidier cables.",
    "summary": "A vegan PU leather mat with built-in cable management.",
    "skipIf": "You want real leather."
  },
  {
    "id": "best-vintage-style-desk-pads-6",
    "rank": 6,
    "badge": "Best Dark Academia Print",
    "name": "Dark Academia Large Mouse Pad Desk Pad",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Lq1yIpjHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTZFXL76?tag=theofficejournal-20",
    "description": "The Dark Academia mat is the pick for a library-inspired look on a budget: a 27.5 x 11.8-inch, 2mm printed mat, the lowest-priced pad here.\n\nIt is sized for a keyboard and mouse rather than a whole desk.",
    "specs": [
      "Size: 27.5 x 11.8\", 2mm",
      "Printed dark academia design"
    ],
    "pros": [
      "Lowest price",
      "Distinctive design"
    ],
    "cons": [
      "Smallest here",
      "Printed rather than leather"
    ],
    "bestFor": "A themed keyboard-and-mouse mat.",
    "summary": "A 27.5 x 11.8-inch printed mat with a dark academia design for about $15.",
    "skipIf": "You want to cover more of the desk; the Auhoahsil is larger."
  }
];

export const howWeEvaluated = [
  {
    "title": "Material",
    "description": "We separated genuine leather, PU and printed rubber mats."
  },
  {
    "title": "Size and thickness",
    "description": "We recorded stated dimensions and thickness."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Real leather or look-alike",
    "explanation": "Genuine leather (YSAGi, Elizo) ages and darkens; PU and printed mats keep their look and cost less."
  },
  {
    "criterion": "Thickness",
    "explanation": "2mm leather and 3mm rubber feel more substantial under the wrists than thin PU."
  },
  {
    "criterion": "Size",
    "explanation": "Sizes here run from 27.5 x 11.8 inches to 35.4 x 15.7 inches; several listings omit dimensions."
  },
  {
    "criterion": "Care",
    "explanation": "PU wipes clean; real leather benefits from occasional care; fabric-topped mats absorb spills."
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
          "Budget leather look",
          "Distressed PU mat",
          "About $19"
        ],
        [
          "Real leather blotter",
          "Elizo 32 x 16\"",
          "Full-grain, 2mm"
        ],
        [
          "Leather that ages most",
          "YSAGi",
          "Pull-up oil-wax finish"
        ],
        [
          "Cable management",
          "Nordik",
          "Vegan PU"
        ],
        [
          "Large, cushioned print",
          "Auhoahsil",
          "35.4 x 15.7\", 3mm"
        ],
        [
          "Themed print",
          "Dark Academia mat",
          "About $15"
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
          "About $15–$23",
          "Dark Academia, Auhoahsil, distressed PU, Nordik"
        ],
        [
          "About $40–$50",
          "Elizo, YSAGi"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is real leather worth it?",
    "a": "If you want a pad that develops character with use, yes. PU keeps its look and costs less."
  },
  {
    "q": "What does pull-up leather mean?",
    "a": "Leather treated with oils and waxes that lightens where it is pressed or folded and darkens with use."
  },
  {
    "q": "How do I care for a leather desk pad?",
    "a": "Wipe with a dry or slightly damp cloth, and follow the maker's care advice."
  },
  {
    "q": "Do printed mats look vintage?",
    "a": "The design does; the surface is fabric over rubber, so it feels like a mouse mat."
  }
];

export const bottomLine = [
  "For the real thing, the Elizo is the value full-grain leather blotter, and the YSAGi is worth paying more for if you want a pull-up finish that ages visibly.",
  "For the look on a budget, the distressed PU mat is the closest imitation, the Nordik adds cable management, and the Auhoahsil and Dark Academia mats give a vintage print at the lowest prices."
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
