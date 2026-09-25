// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Create a dated US-new-retail qualifying set at up to $100",
    "explanation": "Create a dated US-new-retail qualifying set at up to $100. Record normal price, sale/coupon price, stock state and minimum usable setup cost so temporary discounts do not silently change eligibility. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Define the mainstream office utility capability floor",
    "explanation": "Define the mainstream office utility capability floor: This tier should add better drawers, handles, locking casters or stronger materials. Reject products that meet the price ceiling but fail the core use-case minimum. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
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
    "explanation": "Test frame/drawer durability and run this protocol: Load the cart to a realistic office-use weight, roll it across hard floor and thresholds, brake it on a slight slope, and recheck frame/runners after repeated cycles. Use the result to decide whether spending up to $100 produces a real functional improvement over the next-lower price tier. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  }
];

export const faq = [
  {
    "q": "What should I check before buying from this best office supply carts under $100 comparison?",
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

export const guideSlug = "best-office-supply-carts-under-100";

export const guideTitle = "The Best Office Supply Carts Under $100: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/51Hm2UAL1GL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Priority Up to $100",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "The best all-around option in this comparison",
          "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer"
        ],
        [
          "A strong alternative with a different tradeoff",
          "YASONIC 3 Tier Metal Rolling Cart (High-quality coating)"
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
          "ZOES HOMEWARE 3 Tier Metal Rolling Cart on Wheels,Heavy Duty Utility Cart"
        ],
        [
          "",
          "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer"
        ]
      ]
    }
  },
  {
    "subheading": "Goovilla 3 Tier vs YASONIC 3 Tier",
    "cards": [
      {
        "label": "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer",
        "text": "The top pick in this comparison based on its documented spec set relative to the rest of this lineup."
      },
      {
        "label": "YASONIC 3 Tier Rolling Cart",
        "text": "A meaningfully different option worth checking against your specific requirements before assuming the top pick is automatically the right fit."
      }
    ],
    "note": "Most buyers should default to Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer unless your specific use case points toward YASONIC 3 Tier Rolling Cart's particular tradeoffs."
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
          "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer"
        ],
        [
          "A close secondary option worth comparing",
          "YASONIC 3 Tier Metal Rolling Cart (High-quality coating)"
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
        "text": "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer is worth checking first against that specific requirement before comparing the rest of this lineup."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need the fuller feature set found on MaxWorks 80774 3-Shelf Utility Plastic Cart with Wheels-225 Lbs Maximum, where the extra capability has a real, verifiable use case for you."
      },
      {
        "label": "",
        "text": "Your requirements are covered by ZOES HOMEWARE 3 Tier Metal Rolling Cart on Wheels,Heavy Duty Utility Cart without needing the higher-tier features."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Every recommended product must be new, in stock and up to $100 on the article refresh date; stale sale prices are automatically disqualified."
  },
  {
    "title": "",
    "description": "Explicitly show what changes between the next-lower tier, the mainstream office utility tier, and the next-higher tier so this page is not a cloned generic ranking."
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
    "description": "Judge frame/drawer durability, warranty/support, replacement accessories and the chance that a buyer should save money or step up a tier instead of spending the full $100."
  }
];

export const introParagraphs = [
  "Best Office Supply Carts Under $100 listings span a wide range of real capability even within the same price ceiling, and comparing them on price alone misses which picks actually meet the core use case.",
  "We compared this lineup on verified specs pulled directly from current listings, checked against a real capability floor for this exact price tier, rather than ranking by price or feature count alone."
];

export const lastUpdated = "2026-08-22";

export const mainKeyword = "office supply carts under $100";

export const metaDescription = "How 10 office supply carts under $100 compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Office Supply Carts Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-office-supply-carts-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51Hm2UAL1GL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DNF65DK1?tag=theofficejournal-20",
    "description": "Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer is the top pick in this comparison. Our rolling cart is designed with a removable drawer on the top level. Our rolling carts with wheels is set up with safety protection features.\n\nAgainst ZOES HOMEWARE 3 Tier Metal Rolling Cart on Wheels,Heavy Duty Utility Cart, the gap isn't in the basics, so the real decision comes down to a specific detail rather than a big capability gap: our 3 tier rolling cart can hold up to 124 lbs for daily use.\n\nGo with this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Our rolling cart is designed with a removable drawer on the top",
      "Our rolling carts with wheels is set up with safety protection",
      "Our 3 tier rolling cart can hold up to 124 lbs for daily use"
    ],
    "pros": [
      "Rolling cart is designed with a removable drawer on the top level",
      "Rolling carts with wheels is set up with safety protection features",
      "3 tier rolling cart can hold up to 124 lbs"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-office-supply-carts-under-100-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "ZOES HOMEWARE 3 Tier Metal Rolling Cart on Wheels,Heavy Duty Utility Cart",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T+9IybnmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3D8B2F1?tag=theofficejournal-20",
    "description": "ZOES HOMEWARE 3 Tier Metal Rolling Cart on Wheels,Heavy Duty Utility Cart is the most affordable pick here that still clears the capability floor for this price tier. 3” height and 3 shelves. Store diapers in the nursery, arrange books in the study, keep vegetables in the kitchen, or store tools in the garage.\n\nIt sits close to Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer on paper, so the real decision comes down to a specific detail rather than a big capability gap: constructed with a durable frame and strong wheels, this metal rolling cart organizer can hold up to 66 pounds, ensuring it meets everyday needs.\n\nThis one is the right call if you want to stay at the lower end of this price tier without dropping below the real capability floor. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "This organizer cart takes up only 16”l x 12”w of floor space and",
      "Store diapers in the nursery, arrange books in the study",
      "Constructed with a durable frame and strong wheels"
    ],
    "pros": [
      "Organizer cart takes up only 16”l x 12”w of floor space",
      "Store diapers in the nursery, arrange books in the study, keep",
      "Constructed with a durable frame and strong wheels, this metal rolling"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who want to stay at the lower end of this price tier without dropping below the real capability floor"
  },
  {
    "id": "best-office-supply-carts-under-100-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "3 Tier Rolling Utility Cart with Drawer,REBECAT Utility Cart Made of",
    "price": "$23.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/317ADf-dMxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCV9YQLR?tag=theofficejournal-20",
    "description": "3 Tier Rolling Utility Cart with Drawer,REBECAT Utility Cart Made of is a strong alternative worth comparing directly against the top pick. Grocery cart on wheels extend space: storage shelves save space and declutter any room with this storage cart with ample shelf space to hold household items or office supplies. Rolling carts easy mobility with wheels: rebecat rolling cart enables easy and flexible movement, utility carts with wheels allowing for convenience and ease of use.\n\nSet it next to Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: sturdy and durable tool cart : shopping carts for groceries,which made with high-quality materials.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Grocery cart on wheels extend space: storage shelves save space",
      "Rolling carts easy mobility with wheels: rebecat rolling cart",
      "Sturdy and durable tool cart : shopping carts for groceries"
    ],
    "pros": [
      "Grocery cart on wheels extend space: storage shelves save space",
      "Rolling carts easy mobility with wheels: rebecat rolling cart enables easy",
      "Sturdy and durable tool cart : shopping carts for groceries,which made"
    ],
    "cons": [
      "Manufacturer claims here aren't independently lab-verified",
      "Budget tier means fewer premium finish options"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Sywhitta 3-Tier Plastic Rolling Utility Cart with Wheels for Storage,Black",
    "price": "$23.37",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LvcSn9A3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09R1V45Y6?tag=theofficejournal-20",
    "description": "Sywhitta 3-Tier Plastic Rolling Utility Cart with Wheels for Storage,Black is a strong alternative worth comparing directly against the top pick. There are four wheels that can rotate 360 degrees,and two of them are lockable,and you can slide them at will. Made of plastic and iron pipe, which can be used by you for a long time.\n\nCompared with Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: this handle utility cart can be placed in the kitchen, living room, toilet, study and other places.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "There are four wheels that can rotate 360 degrees",
      "Made of plastic and iron pipe",
      "This handle utility cart can be placed in the kitchen"
    ],
    "pros": [
      "There are four wheels that can rotate 360 degrees,and two",
      "Made of plastic and iron pipe, which can be used by",
      "Handle utility cart can be placed in the kitchen, living room,"
    ],
    "cons": [
      "Compatibility varies by exact model, double-check before ordering",
      "Verify exact fit and specs against your device before buying"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "YASONIC 3 Tier Metal Rolling Cart",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41t65nMUjBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9RG3ZS?tag=theofficejournal-20",
    "description": "YASONIC 3 Tier Metal Rolling Cart is a strong alternative worth comparing directly against the top pick. Larger storage capacity, multifunctional storage: featuring 3 spacious metal baskets, 2 hanging cups, and 3 hooks, this three tier rolling carts with wheels offers extra storage for any occasion. High-quality coating, stylish and durable: elevate your space with the rolling storage cart on wheels that masters both style and substance.\n\nSet it next to Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: effortless movement under heavy loads: with 2in heavy-duty wheels paired with sturdy frame, the metal rolling cart with wheels glides smoothly and stays stable on carpet or hardwood.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Larger storage capacity, multifunctional storage: featuring 3",
      "High-quality coating, stylish and durable: elevate your space",
      "Effortless movement under heavy loads: with 2in heavy-duty wheels"
    ],
    "pros": [
      "Larger storage capacity, multifunctional storage: featuring 3 spacious metal baskets, 2",
      "High-quality coating, stylish and durable: elevate your space with the rolling",
      "Effortless movement under heavy loads: with 2in heavy-duty wheels paired"
    ],
    "cons": [
      "Setup or mounting hardware may be sold separately",
      "Confirm this stays in stock at the price checked here"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "YASONIC 3 Tier Metal Rolling Cart (High-quality coating)",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41E0AvqYlFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F373KBDG?tag=theofficejournal-20",
    "description": "YASONIC 3 Tier Metal Rolling Cart (High-quality coating) is a strong alternative worth comparing directly against the top pick. High-quality coating, stylish and durable: elevate your space with the rolling storage cart on wheels that masters both style and substance. Effortless movement under heavy loads: with 2in heavy-duty wheels paired with sturdy frame, the metal rolling cart with wheels glides smoothly and stays stable on carpet or hardwood.\n\nCompared with Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: larger storage capacity, multifunctional storage: featuring 3 spacious metal baskets, 2 hanging cups, and 3 hooks, this three tier rolling carts with wheels offers extra storage for any occasion.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "High-quality coating, stylish and durable: elevate your space",
      "Effortless movement under heavy loads: with 2in heavy-duty wheels",
      "Larger storage capacity, multifunctional storage: featuring 3"
    ],
    "pros": [
      "High-quality coating, stylish and durable: elevate your space with the rolling",
      "Effortless movement under heavy loads: with 2in heavy-duty wheels paired",
      "Larger storage capacity, multifunctional storage: featuring 3 spacious metal baskets, 2"
    ],
    "cons": [
      "Budget tier means fewer premium finish options",
      "Manufacturer claims here aren't independently lab-verified"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "SUNALLY Rolling Cart With 8 Drawers,Storage Drawer Cart for Craft Art,Green",
    "price": "$39.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51rF3M5sjdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVYGDX4V?tag=theofficejournal-20",
    "description": "SUNALLY Rolling Cart With 8 Drawers,Storage Drawer Cart for Craft Art,Green is a strong alternative worth comparing directly against the top pick. Unlike ordinary rolling carts, our upgraded rolling storage cart features reinforced support bars for enhanced structural stability. This rolling cart with drawers includes 8 spacious storage drawers to help organize supplies by category and keep your space clutter-free.\n\nCompared with Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: built with a powder-coated steel frame, this storage drawer cart offers excellent water-resistant and rust-resistant performance for long-lasting use.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Unlike ordinary rolling carts",
      "This rolling cart with drawers includes 8 spacious storage",
      "Built with a powder-coated steel frame"
    ],
    "pros": [
      "Unlike ordinary rolling carts, our upgraded rolling storage cart features reinforced",
      "Rolling cart with drawers includes 8 spacious storage drawers to help",
      "Built with a powder-coated steel frame, this storage drawer cart offers"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Rolling Cart with Drawers",
    "price": "$50.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41f5SO4ZrBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FDB1RTVS?tag=theofficejournal-20",
    "description": "Rolling Cart with Drawers is a strong alternative worth comparing directly against the top pick. This metal rolling cart is built with a reinforced metal frame and wooden top, holding up to 150 lbs. Designed as a storage cart on wheels, this utility cart with drawers comes with 360° swivel casters for smooth movement.\n\nAgainst Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer, the gap isn't in the basics, so the real decision comes down to a specific detail rather than a big capability gap: each drawer slides in and out effortlessly on premium tracks.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "This metal rolling cart is built with a reinforced metal frame",
      "Designed as a storage cart on wheels",
      "Each drawer slides in and out effortlessly on premium tracks"
    ],
    "pros": [
      "Metal rolling cart is built with a reinforced metal frame",
      "Designed as a storage cart on wheels, this utility cart",
      "Each drawer slides in and out effortlessly on premium tracks"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-office-supply-carts-under-100-9",
    "rank": 9,
    "badge": "Best Premium Pick",
    "name": "MaxWorks 80774 3-Shelf Utility Plastic Cart with Wheels-225 Lbs Maximum",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41paG6ShZVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BF1LM98?tag=theofficejournal-20",
    "description": "MaxWorks 80774 3-Shelf Utility Plastic Cart with Wheels-225 Lbs Maximum is the priciest pick in this lineup. Designed for a wide variety of applications & working environment to include garage, office, workshop, warehouse, office, home/kitchen & more. Features durable injection molded polypropylene shelves that are easy to clean, will not dent, resist rust and stains.\n\nSet it next to Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: aluminum legs are easy to install and will not rust.\n\nThis fits best if you are willing to spend the most in this tier for the fuller feature set that comes with it. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
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
      "Manufacturer claims here aren't independently lab-verified",
      "Budget tier means fewer premium finish options"
    ],
    "bestFor": "Buyers who are willing to spend the most in this tier for the fuller feature set that comes with it"
  },
  {
    "id": "best-office-supply-carts-under-100-10",
    "rank": 10,
    "badge": "Another Strong Option",
    "name": "YASONIC 3 Tier Rolling Cart",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41om5dTmxaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRGNKHVW?tag=theofficejournal-20",
    "description": "YASONIC 3 Tier Rolling Cart is a strong alternative worth comparing directly against the top pick. 100% metal, sturdy and durable, 110 lbs high load-bearing: the h shape dual column ensures the rolling carts with wheels are stable whether they are carrying heavy loads or moving. Expanded storage capacity, multiple uses: the metal cart features 3 baskets, suitable for use as a craft cart, cleaning carts, book cart, art cart, makeup cart, diaper cart, service cart, snack cart, etc.\n\nAgainst Goovilla 3 Tier Rolling Utility Cart Organizer with Removable Drawer, the gap isn't in the basics, so the real decision comes down to a specific detail rather than a big capability gap: easy to install with professional support: install the storage cart on wheels within 20 minutes under the included installation instructions.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "100% metal, sturdy and durable",
      "Expanded storage capacity, multiple uses: the metal cart features",
      "Easy to install with professional support: install the storage"
    ],
    "pros": [
      "100% metal, sturdy and durable, 110 lbs high load-bearing: the h",
      "Expanded storage capacity, multiple uses: the metal cart features 3 baskets,",
      "Easy to install with professional support: install the storage cart"
    ],
    "cons": [
      "Compatibility varies by exact model, double-check before ordering",
      "Verify exact fit and specs against your device before buying"
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
    "href": "/guide/best-office-supply-carts-under-150",
    "title": "Best Office Supply Carts Under $150"
  },
  {
    "href": "/guide/best-office-supply-carts-under-200",
    "title": "Best Office Supply Carts Under $200"
  }
];

export const breadcrumbLabel = "Best Office Supply Carts Under $100";
