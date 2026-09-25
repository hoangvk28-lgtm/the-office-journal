// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-stands-under-40";

export const guideTitle = "The Best CPU Stands Under $40, From Basic Dollies to Fan-Cooled Stands";

export const breadcrumbLabel = "Best CPU Stands Under $40";

export const metaTitle = "Best CPU Stands Under $40: Rolling, Cooled and Charging Stands (2026)";

export const metaDescription = "We compared CPU stands under $40 on size range, load rating, casters and extras such as cooling fans, a wood finish and a charging station.";

export const mainKeyword = "cpu stands under $40";

export const introParagraphs = [
  "Under $40 you can get more than a basic dolly. The stands here range from a $14 rolling base to options with a stated 110 lb rating, built-in cooling fans, a walnut-look finish and a two-tier stand with a charging station.",
  "Start with fit: compare your case's width with the stand's range. Then decide whether an extra is worth paying for. Fans help only if your case draws air from the bottom; a charging tier helps if your desk is short of outlets.",
  "Our comparison is based on published specifications and price position, not hands-on testing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-stands-under-40-1",
    "rank": 1,
    "badge": "Lowest Price (Few Specs)",
    "name": "YOSE Computer Tower Stand",
    "price": "$13.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31O90iJpE+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0919X8SZ7?tag=theofficejournal-20",
    "description": "The YOSE is the cheapest stand here, but its listing gives almost no specifications: no size range, capacity or caster details.\n\nIt is a reasonable gamble for a standard tower if you can confirm fit from the photos; otherwise the Hovadova or suptek list more.",
    "specs": [
      "Specifications: not listed"
    ],
    "pros": [
      "Lowest price"
    ],
    "cons": [
      "No specifications listed"
    ],
    "bestFor": "Standard towers where fit can be checked from photos.",
    "summary": "A YOSE stand at about $14, with almost no listed specifications.",
    "skipIf": "You want stated dimensions or capacity."
  },
  {
    "id": "best-cpu-stands-under-40-2",
    "rank": 2,
    "badge": "Best Budget Stand With Locks",
    "name": "Adjustable Computer Tower Stand",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318IsyAsPXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4T42TPC?tag=theofficejournal-20",
    "description": "This Hovadova stand is the budget pick with locking casters, which keep the PC in place once positioned, and tool-free setup, for about $17 at the time of writing.\n\nThe listing does not state a size range or capacity.",
    "specs": [
      "Casters: 4 x 360°, locking",
      "Tool-free setup"
    ],
    "pros": [
      "Locking wheels",
      "Low price"
    ],
    "cons": [
      "Size range and capacity not stated"
    ],
    "bestFor": "Standard towers that should stay put.",
    "summary": "A Hovadova stand with four 360° locking casters and tool-free setup.",
    "skipIf": "You need a stated load rating; the suptek lists 110 lb."
  },
  {
    "id": "best-cpu-stands-under-40-3",
    "rank": 3,
    "badge": "Best Stated Capacity",
    "name": "suptek Computer Tower Stand, Mobile CPU Rolling Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318uOjWV-IL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CM2VFKV5?tag=theofficejournal-20",
    "description": "The suptek is the stand with a stated load rating: 110 lb, with a hollow design for airflow and casters, for about $25 at the time of writing.\n\nThe listing gives conflicting width figures (7.8 to 14 inches in one place, 5.5 to 9.8 inches in another), so confirm the range for your case.",
    "specs": [
      "Load rating: 110 lb",
      "Width: conflicting figures in listing",
      "Hollow, ventilated design",
      "Rolling"
    ],
    "pros": [
      "Stated 110 lb rating",
      "Ventilated"
    ],
    "cons": [
      "Width range unclear"
    ],
    "bestFor": "Heavier towers on a budget.",
    "summary": "A suptek rolling stand rated for 110 lb with a hollow, ventilated design.",
    "skipIf": "You want a clear width range; check with the seller first."
  },
  {
    "id": "best-cpu-stands-under-40-4",
    "rank": 4,
    "badge": "Best Looking Stand",
    "name": "fulkun Adjustable Mobile CPU Stand, Ventilated PC stand for floor",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dVJ17mlHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DHZTNS8Y?tag=theofficejournal-20",
    "description": "The fulkun is the choice if the stand will be seen: wood pieces with PVC in a walnut look, with a perforated top for ventilation and casters.\n\nIt costs about $29 at the time of writing. The listing does not state size range or capacity.",
    "specs": [
      "Material: wood and PVC, walnut look",
      "Perforated platform",
      "Rolling"
    ],
    "pros": [
      "Furniture-like look",
      "Ventilated"
    ],
    "cons": [
      "Size range and capacity not stated"
    ],
    "bestFor": "Visible setups where appearance matters.",
    "summary": "A walnut-look wood and PVC stand with a perforated platform.",
    "skipIf": "You need a stated capacity."
  },
  {
    "id": "best-cpu-stands-under-40-5",
    "rank": 5,
    "badge": "Best With Cooling Fans",
    "name": "Hovadova Adjustable PC Tower Stand with Cooling Fans",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UxqPRdt3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GZTB52WV?tag=theofficejournal-20",
    "description": "The fan-equipped Hovadova adds two fans under the tower to move air beneath it, and adjusts from 9.05 to 12.59 inches wide, which suits wider cases.\n\nIt costs about $33 at the time of writing. Fans help most with cases that draw air from the bottom, and they need power.",
    "specs": [
      "Built-in fans: 2",
      "Width: 9.05–12.59\"",
      "Rolling"
    ],
    "pros": [
      "Active airflow",
      "Fits wider cases"
    ],
    "cons": [
      "Needs power for fans",
      "Capacity not stated"
    ],
    "bestFor": "Gaming towers with bottom intakes.",
    "summary": "A Hovadova stand with two built-in fans, adjustable from 9.05 to 12.59 inches wide.",
    "skipIf": "Your case has no bottom intake; a plain stand is enough."
  },
  {
    "id": "best-cpu-stands-under-40-6",
    "rank": 6,
    "badge": "Best Two-Tier Stand With Charging",
    "name": "ZIIWIND PC Stand with Charging Station",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Cb5I502SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH8S496M?tag=theofficejournal-20",
    "description": "The ZIIWIND is a two-tier stand, 16.9 x 11.4 inches with height adjustable from 19.7 to 31.5 inches, that holds the tower and adds a charging station for other devices.\n\nIt can sit under or beside the desk and costs about $40 at the time of writing.\n\nThe listing does not state capacity or the charging station's outputs.",
    "specs": [
      "Footprint: 16.9 x 11.4\"",
      "Height: 19.7–31.5\"",
      "Two tiers",
      "Charging station (outputs not stated)"
    ],
    "pros": [
      "Storage and charging",
      "Adjustable height"
    ],
    "cons": [
      "Charging outputs and capacity not stated"
    ],
    "bestFor": "Desks short of outlets or storage.",
    "summary": "A ZIIWIND two-tier stand adjustable from 19.7 to 31.5 inches with a charging station.",
    "skipIf": "You only need to lift the tower; a $15 stand does."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit and capacity",
    "description": "We recorded stated size ranges and load ratings, and flagged conflicts."
  },
  {
    "title": "Features",
    "description": "We compared casters, fans, finish and charging."
  },
  {
    "title": "Price position",
    "description": "All cost under $40 at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Fit",
    "explanation": "Compare your case width with the stand's range; the fan Hovadova lists 9.05–12.59 inches."
  },
  {
    "criterion": "Load rating",
    "explanation": "Only the suptek states one (110 lb)."
  },
  {
    "criterion": "Extras",
    "explanation": "Fans, a wood finish or a charging tier add cost; choose them only if they solve a problem."
  },
  {
    "criterion": "Casters",
    "explanation": "Locking casters keep the PC in place."
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
          "Heavier tower",
          "suptek",
          "110 lb rating"
        ],
        [
          "Bottom-intake cooling",
          "Hovadova with fans",
          "Two fans"
        ],
        [
          "Visible setup",
          "fulkun",
          "Walnut look"
        ],
        [
          "Charging and storage",
          "ZIIWIND",
          "Two tiers"
        ],
        [
          "Lowest cost",
          "YOSE or Hovadova",
          "About $14–$17"
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
        "Stands"
      ],
      "rows": [
        [
          "About $14–$17",
          "YOSE, Hovadova"
        ],
        [
          "About $25–$33",
          "suptek, fulkun, Hovadova with fans"
        ],
        [
          "About $40",
          "ZIIWIND"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Do cooling fans in a stand help?",
    "a": "They add airflow under the case, which helps most if your case draws air from the bottom."
  },
  {
    "q": "How much weight can these hold?",
    "a": "Only the suptek states a capacity (110 lb). Check with the seller for the others."
  },
  {
    "q": "Is a two-tier stand worth it?",
    "a": "If your desk lacks storage or outlets, yes. Otherwise a simple stand is enough."
  }
];

export const bottomLine = [
  "For a heavier tower, the suptek is the pick with a stated 110 lb rating, once you confirm its width. The Hovadova with fans suits gaming towers with bottom intakes, and the fulkun suits visible setups.",
  "The ZIIWIND adds storage and charging, and the YOSE and basic Hovadova are the budget options for standard towers."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-100",
    "title": "Best CPU Stands Under $100 in 2026"
  },
  {
    "href": "/guide/best-under-desk-cpu-stands",
    "title": "Best Under-Desk CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-20",
    "title": "Best CPU Stands Under $20 in 2026"
  }
];
