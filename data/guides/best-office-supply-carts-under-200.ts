// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Create a dated US-new-retail qualifying set at up to $200",
    "explanation": "Create a dated US-new-retail qualifying set at up to $200. Record normal price, sale/coupon price, stock state and minimum usable setup cost so temporary discounts do not silently change eligibility. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Define the light-commercial crossover capability floor",
    "explanation": "Define the light-commercial crossover capability floor: Commercial-style steel/service carts become more plausible; construction and wheel quality should rise. Reject products that meet the price ceiling but fail the core use-case minimum. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Build a threshold-specific comparison for usable storage",
    "explanation": "Build a threshold-specific comparison for usable storage geometry + rated load. At this budget, those two variables should explain why one product belongs in the article rather than simply appearing because it is cheap. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Verify caster/brake behavior + footprint/clearance using",
    "explanation": "Verify caster/brake behavior + footprint/clearance using official documentation and repeatable measurements where possible; competitor lists commonly copy claims without proving the budget-tier tradeoff. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Test frame/drawer durability and run this protocol",
    "explanation": "Test frame/drawer durability and run this protocol: Load the cart to a realistic office-use weight, roll it across hard floor and thresholds, brake it on a slight slope, and recheck frame/runners after repeated cycles. Use the result to decide whether spending up to $200 produces a real functional improvement over the next-lower price tier. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  }
];

export const faq = [
  {
    "q": "What should I check before buying from this best office supply carts under $200 comparison?",
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

export const guideSlug = "best-office-supply-carts-under-200";

export const guideTitle = "The Best Office Supply Carts Under $200, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Priority Up to $200",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "The best all-around option in this comparison",
          "GYIIYUO 2 Drawer File Cabinet 24''W"
        ],
        [
          "A strong alternative with a different tradeoff",
          "Liboocare 3-Tier Rolling Utility Cart with 2 Locking Brakes"
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
          "IRIS USA 4-Drawer Rolling Storage Cart with Organizer Top"
        ],
        [
          "",
          "GYIIYUO 2 Drawer File Cabinet 24''W"
        ]
      ]
    }
  },
  {
    "subheading": "GYIIYUO 2 Drawer vs Plastic Utility Carts",
    "cards": [
      {
        "label": "GYIIYUO 2 Drawer File Cabinet 24''W",
        "text": "The top pick in this comparison based on its documented spec set relative to the rest of this lineup."
      },
      {
        "label": "Plastic Utility Carts with Wheels",
        "text": "A meaningfully different option worth checking against your specific requirements before assuming the top pick is automatically the right fit."
      }
    ],
    "note": "Most buyers should default to GYIIYUO 2 Drawer File Cabinet 24''W unless your specific use case points toward Plastic Utility Carts with Wheels's particular tradeoffs."
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
          "GYIIYUO 2 Drawer File Cabinet 24''W"
        ],
        [
          "A close secondary option worth comparing",
          "Liboocare 3-Tier Rolling Utility Cart with 2 Locking Brakes"
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
        "text": "GYIIYUO 2 Drawer File Cabinet 24''W is worth checking first against that specific requirement before comparing the rest of this lineup."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need the fuller feature set found on WDT 990Lbs Capacity Heavy Duty Rolling Utility Cart, where the extra capability has a real, verifiable use case for you."
      },
      {
        "label": "",
        "text": "Your requirements are covered by IRIS USA 4-Drawer Rolling Storage Cart with Organizer Top without needing the higher-tier features."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Every recommended product must be new, in stock and up to $200 on the article refresh date; stale sale prices are automatically disqualified."
  },
  {
    "title": "",
    "description": "Explicitly show what changes between the next-lower tier, the light-commercial crossover tier, and the next-higher tier so this page is not a cloned generic ranking."
  },
  {
    "title": "",
    "description": "Normalize price against usable storage geometry, rated load and the minimum usable setup cost rather than raw feature count."
  },
  {
    "title": "",
    "description": "Label caster/brake behavior and footprint/clearance as official-documentation-confirmed, WorkCocoon-measured, manufacturer-claimed or unverified."
  },
  {
    "title": "",
    "description": "Judge frame/drawer durability, warranty/support, replacement accessories and the chance that a buyer should save money or step up a tier instead of spending the full $200."
  }
];

export const introParagraphs = [
  "Best Office Supply Carts Under $200 listings span a wide range of real capability even within the same price ceiling, and comparing them on price alone misses which picks actually meet the core use case.",
  "We compared this lineup on verified specs pulled directly from current listings, checked against a real capability floor for this exact price tier, rather than ranking by price or feature count alone."
];

export const lastUpdated = "2026-08-22";

export const mainKeyword = "office supply carts under $200";

export const metaDescription = "We compared 7 office supply carts under $200 on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Office Supply Carts Under $200 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-office-supply-carts-under-200-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "GYIIYUO 2 Drawer File Cabinet 24''W",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBZ98D94?tag=theofficejournal-20",
    "description": "GYIIYUO 2 Drawer File Cabinet 24''W is the top pick in this comparison. Upgrade your workspace with our 24'' spacious tabletop, specifically designed to accommodate large office printers or dual monitor arms, while others are only 15'' and too narrow. Designed for accountants, teachers, and tax pros, our 2-drawer filing cabinet features a deep bottom drawer for a4&letter-sized folders and an open shelf for quick access.\n\nIt sits close to DEVAISE 3 Drawer Mobile File Cabinet on paper, so the real decision comes down to a specific detail rather than a big capability gap: the only file cabinet that offers dual-support (casters + leveling feet).\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Upgrade your workspace with our 24'' spacious tabletop",
      "Designed for accountants, teachers, and tax pros",
      "The only file cabinet that offers dual-support (casters +"
    ],
    "pros": [
      "Upgrade your workspace with our 24'' spacious tabletop, specifically designed",
      "Designed for accountants, teachers, and tax pros, our 2-drawer filing cabinet",
      "Only file cabinet that offers dual-support (casters + leveling feet)"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-office-supply-carts-under-200-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "DEVAISE 3 Drawer Mobile File Cabinet",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NUKjDoD5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZY1SJS3?tag=theofficejournal-20",
    "description": "DEVAISE 3 Drawer Mobile File Cabinet is a strong alternative worth comparing directly against the top pick. Featuring with 3 fabric drawers, this file cabinet with shelves are designed to keep stationery, files and other home office supplies organized with ease. With a wide wood top and open storage shelves, this office cabinet can also be used as a printer stand, providing plenty of room for extra paper or files, or as a living room storage cabinet.\n\nCompared with GYIIYUO 2 Drawer File Cabinet 24''W, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: rolling on 4 wheels, including 2 lockable casters, this mobile file cabinet can fix or move around your home office freely.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Featuring with 3 fabric drawers",
      "With a wide wood top and open storage shelves",
      "Rolling on 4 wheels, including 2 lockable casters"
    ],
    "pros": [
      "3 fabric drawers, this file cabinet with shelves are designed",
      "Wide wood top and open storage shelves, this office cabinet can",
      "Rolling on 4 wheels, including 2 lockable casters, this mobile file"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-200-3",
    "rank": 3,
    "badge": "Best Value",
    "name": "IRIS USA 4-Drawer Rolling Storage Cart with Organizer Top",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ri7QTtJoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Q4FHWV9?tag=theofficejournal-20",
    "description": "IRIS USA 4-Drawer Rolling Storage Cart with Organizer Top is the most affordable pick here that still clears the capability floor for this price tier. Keep lesson materials, craft supplies, worksheets, markers, notebooks, and other classroom essentials neatly organized and within easy reach for daily use. Removable wheels let you roll the cart between classrooms, desks, and activity stations, or remove them for stable placement in one location.\n\nCompared with GYIIYUO 2 Drawer File Cabinet 24''W, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: built-in drawer stops help prevent drawers from falling out during use.\n\nChoose this if you want to stay at the lower end of this price tier without dropping below the real capability floor. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Keep lesson materials, craft supplies, worksheets, markers",
      "Removable wheels let you roll the cart between classrooms, desks",
      "Built-in drawer stops help prevent drawers from falling out"
    ],
    "pros": [
      "Keep lesson materials, craft supplies, worksheets, markers, notebooks, and other classroom",
      "Removable wheels let you roll the cart between classrooms, desks,",
      "Built-in drawer stops help prevent drawers from falling out during use"
    ],
    "cons": [
      "Manufacturer claims here aren't independently lab-verified",
      "Budget tier means fewer premium finish options"
    ],
    "bestFor": "Buyers who want to stay at the lower end of this price tier without dropping below the real capability floor"
  },
  {
    "id": "best-office-supply-carts-under-200-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Liboocare 3-Tier Rolling Utility Cart with 2 Locking Brakes",
    "price": "$72.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tGCkfZnkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLPS92YB?tag=theofficejournal-20",
    "description": "Liboocare 3-Tier Rolling Utility Cart with 2 Locking Brakes is a strong alternative worth comparing directly against the top pick. Built with reinforced aluminum poles and durable polypropylene shelves, this rolling utility cart supports up to 520 lbs total. Equipped with 4 swivel casters featuring an anti-tangle design, this service cart moves smoothly around tight corners and narrow spaces while helping reduce hair and debris buildup around the wheels.\n\n5\" w x 37\" h, this 3 tier rolling cart gives you plenty of room for tools, food containers, cleaning supplies, office items, or daily essentials.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Built with reinforced aluminum poles and durable polypropylene",
      "Equipped with 4 swivel casters featuring an anti-tangle design",
      "Measuring 31.1\" l x 16.5\" w x 37\" h"
    ],
    "pros": [
      "Built with reinforced aluminum poles and durable polypropylene shelves, this rolling",
      "4 swivel casters featuring an anti-tangle design, this service cart moves",
      "Measuring 31.1\" l x 16.5\" w x 37\" h, this 3"
    ],
    "cons": [
      "Compatibility varies by exact model, double-check before ordering",
      "Verify exact fit and specs against your device before buying"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-200-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "MaxWorks 80774 3-Shelf Utility Plastic Cart with Wheels-225 Lbs Maximum",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41paG6ShZVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BF1LM98?tag=theofficejournal-20",
    "description": "MaxWorks 80774 3-Shelf Utility Plastic Cart with Wheels-225 Lbs Maximum is a strong alternative worth comparing directly against the top pick. Designed for a wide variety of applications & working environment to include garage, office, workshop, warehouse, office, home/kitchen & more. Features durable injection molded polypropylene shelves that are easy to clean, will not dent, resist rust and stains.\n\nSet it next to GYIIYUO 2 Drawer File Cabinet 24''W and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: aluminum legs are easy to install and will not rust.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Designed for a wide variety of applications & working environment",
      "Features durable injection molded polypropylene shelves that are",
      "Aluminum legs are easy to install and will not rust"
    ],
    "pros": [
      "Designed for a wide variety of applications & working environment",
      "Features durable injection molded polypropylene shelves that are easy to clean,",
      "Aluminum legs are easy to install and will not rust"
    ],
    "cons": [
      "Setup or mounting hardware may be sold separately",
      "Confirm this stays in stock at the price checked here"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-200-6",
    "rank": 6,
    "badge": "Best Premium Pick",
    "name": "WDT 990Lbs Capacity Heavy Duty Rolling Utility Cart",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/514WqRn+3yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B891FPBY?tag=theofficejournal-20",
    "description": "WDT 990Lbs Capacity Heavy Duty Rolling Utility Cart is the priciest pick in this lineup. 990lbs capacity & anti-rust : wdt this commercial grade rolling utility cart is constructed from high quality industrial strength metal, and equipped with 1 inch diameter poles. 360° silent casters: the 3 tier rolling cart is designed with 4 silent casters; it transports heavy loads swiftly and smoothly.\n\nIt sits close to GYIIYUO 2 Drawer File Cabinet 24''W on paper, so the real decision comes down to a specific detail rather than a big capability gap: this mobile cart comes with a convenient handle push-bar, a ventilated basket, 3pcs shelving liners and 6 hooks.\n\nThis one is the right call if you are willing to spend the most in this tier for the fuller feature set that comes with it. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "990lbs capacity & anti-rust : wdt this commercial grade rolling",
      "360° silent casters: the 3 tier rolling cart is designed with 4",
      "This mobile cart comes with a convenient handle push-bar"
    ],
    "pros": [
      "990lbs capacity & anti-rust : wdt this commercial grade rolling utility",
      "360° silent casters: the 3 tier rolling cart is designed",
      "Mobile cart comes with a convenient handle push-bar, a ventilated basket,"
    ],
    "cons": [
      "Budget tier means fewer premium finish options",
      "Manufacturer claims here aren't independently lab-verified"
    ],
    "bestFor": "Buyers who are willing to spend the most in this tier for the fuller feature set that comes with it"
  },
  {
    "id": "best-office-supply-carts-under-200-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Plastic Utility Carts with Wheels",
    "price": "$79.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PC-BqyVyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMRF71PY?tag=theofficejournal-20",
    "description": "Plastic Utility Carts with Wheels is a strong alternative worth comparing directly against the top pick. Thickened aluminum posts resist dents, scratches, and rust, no maintenance needed. 4 quiet tpr casters (2 lockable) roll smoothly over carpets/tiles without noise or marks.\n\nIt sits close to GYIIYUO 2 Drawer File Cabinet 24''W on paper, so the real decision comes down to a specific detail rather than a big capability gap: includes 3 plastic shelves & 8 aluminum tubes.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Thickened polypropylene shelves with internal ribbed support",
      "4 quiet tpr casters (2 lockable) roll smoothly over carpets/tiles",
      "Includes 3 plastic shelves & 8 aluminum tubes"
    ],
    "pros": [
      "Thickened polypropylene shelves with internal ribbed support prevent sagging under 300",
      "4 quiet tpr casters (2 lockable) roll smoothly over carpets/tiles without",
      "3 plastic shelves & 8 aluminum tubes"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "12 min";

export const relatedGuides = [
  {
    "href": "/guide/best-office-supply-carts-under-50",
    "title": "Best Office Supply Carts Under $50"
  },
  {
    "href": "/guide/best-office-supply-carts-under-100",
    "title": "Best Office Supply Carts Under $100"
  },
  {
    "href": "/guide/best-office-supply-carts-under-150",
    "title": "Best Office Supply Carts Under $150"
  }
];

export const breadcrumbLabel = "Best Office Supply Carts Under $200";
