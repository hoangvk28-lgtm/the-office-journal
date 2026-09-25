// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Create a dated US-new-retail qualifying set at up to $300",
    "explanation": "Create a dated US-new-retail qualifying set at up to $300 and keep sale/coupon, refurbished and used pricing separate. Calculate minimum usable setup cost rather than bare-device cost alone. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Define the entry mainstream capability floor",
    "explanation": "Define the entry mainstream capability floor: A realistic compressor-AC pool opens; hose design, SACC and window kit become important. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Make DOE SACC cooling capacity + single vs dual",
    "explanation": "Make DOE SACC cooling capacity + single vs dual hose/inverter the primary threshold-specific comparison instead of copying a generic best-list order. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Verify efficiency/power + noise through first-party",
    "explanation": "Verify efficiency/power + noise through first-party documentation and repeatable testing; explain exactly what the up to $300 limit forces the buyer to give up. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Evaluate window/drain installation and run this protocol",
    "explanation": "Evaluate window/drain installation and run this protocol: Install with a sealed window kit, log room temperature/humidity and power draw under a fixed heat load, then compare steady-state SACC-class cooling and noise. Use the result to state whether spending to $300 is justified or whether the next-lower tier already covers the use case. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  }
];

export const faq = [
  {
    "q": "What should I check before buying from this best portable air conditioners under $300 comparison?",
    "a": "Confirm the current price is still at or below this guide's ceiling, since sale pricing changes; also verify the exact spec that matters most for your use case directly on the listing rather than assuming it from the category average."
  },
  {
    "q": "Does the cheapest option in a price tier always mean lower quality?",
    "a": "Within a defined price ceiling, the cheapest qualifying pick can still meet the core capability floor for that tier; the real question is whether it meets your specific requirements, not just the price ceiling."
  },
  {
    "q": "Is it worth stepping up to the next price tier?",
    "a": "Only if the next tier buys a specific, verifiable capability you actually need, not just a bigger number on the spec sheet; compare the exact features gained against the extra cost before deciding."
  },
  {
    "q": "How often do prices change in this category?",
    "a": "Retail prices in this category shift often due to sales, coupons, and stock changes, so treat any listed price as a snapshot and reverify it on the actual product page before buying."
  },
  {
    "q": "What's the minimum setup cost beyond the listed price?",
    "a": "Some picks in this comparison require additional accessories, cables, or mounting hardware to be usable; check the listing's included-items section so the real total cost is clear before you buy."
  }
];

export const guideSlug = "best-portable-air-conditioners-under-300";

export const guideTitle = "The Best Portable Air Conditioners Under $300: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31eTGko28fL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Priority Up to $300",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "The best all-around option in this comparison",
          "Garvee 8000 BTU (5000 BTU SACC) AC Unit"
        ],
        [
          "A strong alternative with a different tradeoff",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "By Budget Within This Tier",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "Lowest price in this lineup",
          ""
        ],
        [
          "",
          "Garvee 8000 BTU (5000 BTU SACC) AC Unit"
        ]
      ]
    }
  },
  {
    "subheading": "Garvee 8000 BTU vs Tehanld 12000 BTU",
    "cards": [
      {
        "label": "Garvee 8000 BTU (5000 BTU SACC) AC Unit",
        "text": "The top pick in this comparison based on its documented spec set relative to the rest of this lineup."
      },
      {
        "label": "Tehanld 12000 BTU Portable Air Conditioner",
        "text": "A meaningfully different option worth checking against your specific requirements before assuming the top pick is automatically the right fit."
      }
    ],
    "note": "Most buyers should default to Garvee 8000 BTU (5000 BTU SACC) AC Unit unless your specific use case points toward Tehanld 12000 BTU Portable Air Conditioner's particular tradeoffs."
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
          "Matches this guide's core use case most closely",
          "Garvee 8000 BTU (5000 BTU SACC) AC Unit"
        ],
        [
          "A close secondary option worth comparing",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "For This Guide's Core Use Case Specifically",
    "cards": [
      {
        "label": "",
        "text": "The specific spec called out in this guide's title verified directly on the product listing, not assumed from the category average."
      },
      {
        "label": "",
        "text": "Garvee 8000 BTU (5000 BTU SACC) AC Unit is worth checking first against that specific requirement before comparing the rest of this lineup."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need the fuller feature set found on Tehanld 12000 BTU Portable Air Conditioner, where the extra capability has a real, verifiable use case for you."
      },
      {
        "label": "",
        "text": "Black without needing the higher-tier features."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Every pick must be new, in stock and up to $300 on the update date; expired sale pricing removes it from the qualifying set."
  },
  {
    "title": "",
    "description": "Show the previous tier, entry mainstream tier and next-higher tier so readers see the real capability step instead of duplicate lists."
  },
  {
    "title": "",
    "description": "Normalize DOE SACC cooling capacity, single vs dual hose/inverter and required accessory/setup cost against price."
  },
  {
    "title": "",
    "description": "Label efficiency/power and noise as official-documentation-confirmed, WorkCocoon-measured, manufacturer-claimed or unverified."
  },
  {
    "title": "",
    "description": "Judge window/drain installation, warranty, software/parts/support and whether the reader should spend less or move above $300 for a meaningful upgrade."
  }
];

export const introParagraphs = [
  "Best Portable Air Conditioners Under $300 listings span a wide range of real capability even within the same price ceiling, and comparing them on price alone misses which picks actually meet the core use case.",
  "We compared this lineup on verified specs pulled directly from current listings, checked against a real capability floor for this exact price tier, rather than ranking by price or feature count alone."
];

export const lastUpdated = "2026-08-22";

export const mainKeyword = "portable air conditioners under $300";

export const metaDescription = "A practical comparison of 4 portable air conditioners under $300, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Portable Air Conditioners Under $300 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-portable-air-conditioners-under-300-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Garvee 8000 BTU (5000 BTU SACC) AC Unit",
    "price": "See price on Amazon",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eTGko28fL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H878HWJ9?tag=theofficejournal-20",
    "description": "Garvee 8000 BTU (5000 BTU SACC) AC Unit is the top pick in this comparison. Fast & efficient spot cooling for rooms up to 350 sq. 3-in-1 climate control: cooling, dehumidifier & fan: this portable ac offers adjustable cooling (61°f, 88°f), dehumidification (removes up to 45 pints/day), and a 2-speed fan.\n\nCompared with 10,000 BTU Portable Air Conditioners, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: smart controls & energy-saving features: the intuitive LED panel and full-function remote make it easy to adjust settings from across the room.\n\nChoose this if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Fast & efficient spot cooling for rooms up to 350 sq",
      "3-in-1 climate control: cooling",
      "Smart controls & energy-saving features: the intuitive LED panel"
    ],
    "pros": [
      "Fast & efficient spot cooling for rooms up to 350 sq",
      "3-in-1 climate control: cooling, dehumidifier & fan: this portable ac offers",
      "Smart controls & energy-saving features: the intuitive LED panel and full-function"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-portable-air-conditioners-under-300-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "10,000 BTU Portable Air Conditioners",
    "price": "$249.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31j-NMIDBIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BTHGM7NM?tag=theofficejournal-20",
    "description": "10,000 BTU Portable Air Conditioners is a strong alternative worth comparing directly against the top pick. The 10,000 btu portable air conditioners will provide powerful cooling air for rooms up to 450 sq. This portable ac acts as a fan, air cooler and dehumidifier.\n\nIt sits close to Garvee 8000 BTU (5000 BTU SACC) AC Unit on paper, so the real decision comes down to a specific detail rather than a big capability gap: our ac unit portable feature an easily-read deluxe pcb display and a big soft-touch control panel, which could be effortlessly switched the power, mode, fan speed, temperature, timer and lock setting.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "The 10,000 btu portable air conditioners will provide powerful",
      "This portable ac acts as a fan, air cooler and dehumidifier",
      "Our ac unit portable feature an easily-read deluxe pcb display"
    ],
    "pros": [
      "10,000 btu portable air conditioners will provide powerful cooling air",
      "Portable ac acts as a fan, air cooler and dehumidifier",
      "Ac unit portable feature an easily-read deluxe pcb display and"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-portable-air-conditioners-under-300-3",
    "rank": 3,
    "badge": "Best Value",
    "name": "HOMCOM 8000 BTU Portable Air Conditioner for Rooms up to 344 Sq.Ft. Black",
    "price": "$210.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H2RjV14PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09T8Z8NVD?tag=theofficejournal-20",
    "description": "Black is the most affordable pick here that still clears the capability floor for this price tier. 8,000 btu cooling: featuring a 8,000 btu cooling capacity, this portable ac unit is a good choice for cooling rooms up to 344 sq. Easy to move and use: you can move this portable air conditioner from room to room using its side handle and four wheels.\n\nCompared with Garvee 8000 BTU (5000 BTU SACC) AC Unit, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: sleep mode (52 db) combined with a 24-hour off timer and children lock helps reduce power consumption overnight and when you don't need, you can enjoy peaceful night while saving on energy bills.\n\nThis one is the right call if you want to stay at the lower end of this price tier without dropping below the real capability floor. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "8,000 btu cooling: featuring a 8,000 btu cooling capacity",
      "Easy to move and use: you can move this portable air conditioner",
      "Sleep mode (52 db) combined with a 24-hour off timer and children"
    ],
    "pros": [
      "8,000 btu cooling: featuring a 8,000 btu cooling capacity, this portable",
      "Easy to move and use: you can move this portable air",
      "Sleep mode (52 db) combined with a 24-hour off timer"
    ],
    "cons": [
      "Manufacturer claims here aren't independently lab-verified",
      "Budget tier means fewer premium finish options"
    ],
    "bestFor": "Buyers who want to stay at the lower end of this price tier without dropping below the real capability floor"
  },
  {
    "id": "best-portable-air-conditioners-under-300-4",
    "rank": 4,
    "badge": "Best Premium Pick",
    "name": "Tehanld 12000 BTU Portable Air Conditioner",
    "price": "$289.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fzkmQBVJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GR4LPW14?tag=theofficejournal-20",
    "description": "Tehanld 12000 BTU Portable Air Conditioner is the priciest pick in this lineup. More than just a portable ac, this unit combines cooling, dehumidifying, fan, and sleep functions in one compact design.\n\n1 ceer rating for efficient cooling and lower energy use.\n\nChoose this if you are willing to spend the most in this tier for the fuller feature set that comes with it. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Delivering powerful 12,000 btu (ashrae) / 8",
      "More than just a portable ac, this unit combines cooling",
      "This air conditioner is designed with a high 8.1 ceer rating for"
    ],
    "pros": [
      "Delivering powerful 12,000 btu (ashrae) / 8,000 btu (sacc) cooling, this",
      "More than just a portable ac, this unit combines cooling, dehumidifying,",
      "Air conditioner is designed with a high 8.1 ceer rating"
    ],
    "cons": [
      "Compatibility varies by exact model, double-check before ordering",
      "Verify exact fit and specs against your device before buying"
    ],
    "bestFor": "Buyers who are willing to spend the most in this tier for the fuller feature set that comes with it"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-air-conditioners-under-400",
    "title": "Best Portable Air Conditioners Under $400"
  },
  {
    "href": "/guide/best-portable-air-conditioners-under-500",
    "title": "Best Portable Air Conditioners Under $500"
  },
  {
    "href": "/guide/best-portable-air-conditioners-under-700",
    "title": "Best Portable Air Conditioners Under $700"
  }
];

export const breadcrumbLabel = "Best Portable Air Conditioners Under $300";
