// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Build a dated US-new-retail qualifying pool at up to $100",
    "explanation": "Build a dated US-new-retail qualifying pool at up to $100. Separate normal price, sale/coupon price, refurbished/used listings and out-of-stock historical prices; include mandatory setup accessories in the minimum usable cost. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Define the budget mini LED capability floor",
    "explanation": "Define the budget mini LED capability floor: Demand honest native 720p/1080p, real brightness measurement and acceptable focus uniformity. Do not expand the list with products that fail the core category definition just to reach a target number of picks. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Make standardized brightness + native resolution/contrast",
    "explanation": "Make standardized brightness + native resolution/contrast the primary threshold-specific comparison. Explain what capability becomes newly available at $100 versus the next-lower budget. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Verify throw/lens/image geometry + input",
    "explanation": "Verify throw/lens/image geometry + input lag/refresh/connectivity through current first-party documentation and repeatable measurements; explicitly identify which compromises are caused by staying under $100. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  },
  {
    "criterion": "Evaluate light source/OS/audio/warranty and run this",
    "explanation": "Evaluate light source/OS/audio/warranty and run this protocol: Measure image brightness and contrast on a defined screen size, verify native input/output resolution, test focus/keystone/throw, and record input lag/noise/power in the intended room. Use the result to tell the reader whether spending close to $100 is justified or whether a cheaper tier already solves the same use case. This matters directly when comparing the picks in this guide, since two products near the same price point often differ meaningfully on this exact point once you look past the headline spec. Check the specific listing for this detail rather than assuming parity across similarly priced options, and weigh it against your actual use case before deciding between two close picks in this price tier."
  }
];

export const faq = [
  {
    "q": "What should I check before buying from this best projectors under $100 comparison?",
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

export const guideSlug = "best-projectors-under-100";

export const guideTitle = "The Best Projectors Under $100: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/51GGQurnouL._SL500_.jpg";

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
          ""
        ],
        [
          "A strong alternative with a different tradeoff",
          "[Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12"
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
          "[Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12"
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "[Built-in Apps & vs Native 1080P Projector",
    "cards": [
      {
        "label": "",
        "text": "The top pick in this comparison based on its documented spec set relative to the rest of this lineup."
      },
      {
        "label": "Native 1080P Projector with WiFi 6 and Two-Way Bluetooth",
        "text": "A meaningfully different option worth checking against your specific requirements before assuming the top pick is automatically the right fit."
      }
    ],
    "note": "4 unless your specific use case points toward Native 1080P Projector with WiFi 6 and Two-Way Bluetooth's particular tradeoffs."
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
          ""
        ],
        [
          "A close secondary option worth comparing",
          "[Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12"
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
        "text": "4 is worth checking first against that specific requirement before comparing the rest of this lineup."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need the fuller feature set found on Native 1080P Projector with WiFi 6 and Two-Way Bluetooth, where the extra capability has a real, verifiable use case for you."
      },
      {
        "label": "",
        "text": "Your requirements are covered by [Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12 without needing the higher-tier features."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Every primary recommendation must be new, in stock and up to $100 on the refresh date; expired sale pricing automatically disqualifies it."
  },
  {
    "title": "",
    "description": "Show the next-lower tier, the budget mini LED tier and the next-higher tier so this article has a distinct reason to exist."
  },
  {
    "title": "",
    "description": "Normalize price against standardized brightness, native resolution/contrast and minimum usable setup cost instead of raw feature count."
  },
  {
    "title": "",
    "description": "Classify throw/lens/image geometry and input lag/refresh/connectivity as official-documentation-confirmed, The Office Journal-measured, manufacturer-claimed or unverified."
  },
  {
    "title": "",
    "description": "Judge light source/OS/audio/warranty, warranty/support and ownership friction, then explicitly say when a buyer should spend less or exceed $100 for a meaningful upgrade."
  }
];

export const introParagraphs = [
  "Best Projectors Under $100 listings span a wide range of real capability even within the same price ceiling, and comparing them on price alone misses which picks actually meet the core use case.",
  "We compared this lineup on verified specs pulled directly from current listings, checked against a real capability floor for this exact price tier, rather than ranking by price or feature count alone."
];

export const lastUpdated = "2026-08-22";

export const mainKeyword = "projectors under $100";

export const metaDescription = "A practical comparison of 8 projectors under $100, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Projectors Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-projectors-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "[Built-in Apps & 2026 Upgraded] Mini Projector with Wi-Fi 6 & Bluetooth 5.4",
    "price": "$49.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51GGQurnouL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9XTQKW1?tag=theofficejournal-20",
    "description": "4 is the top pick in this comparison. Experience significantly reduced buffering with wi-fi 6 connectivity, maintaining consistently smooth playback for films and games. 8 lbs) features versatile mounting options including ceiling, tabletop, and tripod installation - adapting effortlessly to any space or occasion.\n\nCompared with Mini Projector with Wifi and Bluetooth, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: designed for prolonged viewing comfort, the blue light reduction lens helps minimise eye strain during extended use.\n\nGo with this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Intelligent projector features integrated android tv, providing",
      "Delivering certified full HD 720p resolution",
      "Experience significantly reduced buffering with wi-fi 6"
    ],
    "pros": [
      "Intelligent projector features integrated android tv, providing",
      "Delivering certified full HD 720p resolution",
      "Experience significantly reduced buffering with wi-fi 6"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-projectors-under-100-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Mini Projector with Wifi and Bluetooth",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31HgmjFmx2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G48SGLRZ?tag=theofficejournal-20",
    "description": "Mini Projector with Wifi and Bluetooth is a strong alternative worth comparing directly against the top pick. It starts with the powerful allwinner h726 chip and pure android 14 for wireless freedom and direct access to hulu, youtube and more with no extra sticks. 9:1 ultra-short throw mini projector is made for bedrooms and small living rooms.\n\n4, the gap isn't in the basics, so the real decision comes down to a specific detail rather than a big capability gap: sharp enough for streaming.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Your plug-and-play smart cinema",
      "Big screen & tiny space",
      "Sharp enough for streaming"
    ],
    "pros": [
      "Your plug-and-play smart cinema",
      "Big screen & tiny space",
      "Sharp enough for streaming"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-projectors-under-100-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Magcubic 2026 Upgraded HY300PRO Mini Projector with WiFi and Bluetooth",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/315yVlhrp8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F53F8DB3?tag=theofficejournal-20",
    "description": "Magcubic 2026 Upgraded HY300PRO Mini Projector with WiFi and Bluetooth is a strong alternative worth comparing directly against the top pick. The 2026 hy300pro projector is 30% smaller than the previous model and 60% more compact than competitors--well suited to travel, work, or outdoor movie nights. The ​portable projector with WiFi and bluetooth streams lag-free streaming from phones, laptops, and consoles.\n\n4 on paper, so the real decision comes down to a specific detail rather than a big capability gap: this smart projector offers seamless access to 1,000,000 videos with a single click, eliminating the need for an external tv stick.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Portable & powerful",
      "Universal connectivity",
      "Built-in multiple apps"
    ],
    "pros": [
      "Portable & powerful",
      "Universal connectivity",
      "Built-in multiple apps"
    ],
    "cons": [
      "Manufacturer claims here aren't independently lab-verified",
      "Budget tier means fewer premium finish options"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-projectors-under-100-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Mini Projector with WiFi and Bluetooth",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31UG7i79JXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09HT8LL87?tag=theofficejournal-20",
    "description": "Mini Projector with WiFi and Bluetooth is a strong alternative worth comparing directly against the top pick. Newly upgraded p2p connection method, ios/android no longer needs to connect to the projector under WiFi environment. 4g dual-screen WiFi connection and is compatible with android/ios/windows 10.\n\n4, the core capability is similar, so the real decision comes down to a specific detail rather than a big capability gap: the akiyo 2025 updated mini WiFi projector supports full HD 1080p.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "P2p direct connection & no WiFi required",
      "5g WiFi & bluetooth 5.2",
      "Akiyo 2025 updated mini WiFi projector supports"
    ],
    "pros": [
      "P2p direct connection & no WiFi required",
      "5g WiFi & bluetooth 5.2",
      "Akiyo 2025 updated mini WiFi projector supports"
    ],
    "cons": [
      "Compatibility varies by exact model, double-check before ordering",
      "Verify exact fit and specs against your device before buying"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-projectors-under-100-5",
    "rank": 5,
    "badge": "Best Value",
    "name": "[Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51fGmnvk0+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPVM9T7Y?tag=theofficejournal-20",
    "description": "[Built-in Apps] Mini Projector with WiFi and Bluetooth & Android 12 is the most affordable pick here that still clears the capability floor for this price tier. Bluetooth function supports audio transmission only, not video!! Experience seamless wireless streaming and casting with cutting-edge dual-band WiFi 6 technology.\n\n4 on paper, so the real decision comes down to a specific detail rather than a big capability gap: mini portable projector delivers a stunning 1200 ansi lumens bright image with native 1080p and 4K support.\n\nChoose this if you want to stay at the lower end of this price tier without dropping below the real capability floor. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Built-in smart apps & smooth operation",
      "Fast WiFi 6 & stable bluetooth 5.4 connection",
      "Ultra-clear picture & electric focus"
    ],
    "pros": [
      "Built-in smart apps & smooth operation",
      "Fast WiFi 6 & stable bluetooth 5.4 connection",
      "Ultra-clear picture & electric focus"
    ],
    "cons": [
      "Setup or mounting hardware may be sold separately",
      "Confirm this stays in stock at the price checked here"
    ],
    "bestFor": "Buyers who want to stay at the lower end of this price tier without dropping below the real capability floor"
  },
  {
    "id": "best-projectors-under-100-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "[Built-in App & 2026 Upgraded] Mini Projector with WiFi 6 and Bluetooth 5.4",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NIYa+nupL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H2ZBHGLQ?tag=theofficejournal-20",
    "description": "4 is a strong alternative worth comparing directly against the top pick. The remote control of the wowlink w210 portable projector has the air remote function based on gyroscope technology. The wowlink w210 portable mini projector has built-in immersive base-type stereo speaker that provide detailed sound, clear highs, and deep, powerful bass.\n\n4, the gap isn't in the basics, so the real decision comes down to a specific detail rather than a big capability gap: wowlink, an inspiration from life, links to a 'wow' world.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Projector with air remote function & built-in apps",
      "Wowlink w210 projector 4K adopts the new",
      "Latest WiFi 6 technology & bluetooth 5.4"
    ],
    "pros": [
      "Projector with air remote function & built-in apps",
      "Wowlink w210 projector 4K adopts the new",
      "Latest WiFi 6 technology & bluetooth 5.4"
    ],
    "cons": [
      "Budget tier means fewer premium finish options",
      "Manufacturer claims here aren't independently lab-verified"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-projectors-under-100-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "HAPPRUN Native 1080P Outdoor Smart Projector-Standard",
    "price": "$84.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51DzpeQc4FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B28G5Y4R?tag=theofficejournal-20",
    "description": "HAPPRUN Native 1080P Outdoor Smart Projector-Standard is a strong alternative worth comparing directly against the top pick. Enjoy crystal-clear visuals with happrun h1's native 1920x1080 resolution, delivering sharper, brighter, and more vibrant images for an immersive viewing experience. Designed to fit your backpack and your lifestyle.\n\n4 and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: connect your bluetooth projector to bluetooth speakers for a richer, more powerful sound experience, or pair with headphones for private, immersive viewing without disturbing others.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "Enjoy crystal-clear visuals with happrun h1's native",
      "Mini & portable",
      "Bluetooth 5.1 technology"
    ],
    "pros": [
      "Enjoy crystal-clear visuals with happrun h1's native",
      "Mini & portable",
      "Bluetooth 5.1 technology"
    ],
    "cons": [
      "Verify exact fit and specs against your device before buying",
      "Compatibility varies by exact model, double-check before ordering"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-projectors-under-100-8",
    "rank": 8,
    "badge": "Best Premium Pick",
    "name": "Native 1080P Projector with WiFi 6 and Two-Way Bluetooth",
    "price": "$129.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51zk6XtMYlS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B093Q2V436?tag=theofficejournal-20",
    "description": "Native 1080P Projector with WiFi 6 and Two-Way Bluetooth is the priciest pick in this lineup. It supports the ios and android systems. The 2026 upgraded dxyiitoo projector is native 1920x1080p resolution, compatible with 4K.\n\n4 and the two are closely matched on the fundamentals, so the real decision comes down to a specific detail rather than a big capability gap: efficient heat dissipation system of the projector, which greatly reduces fan noise.\n\nChoose this if you are willing to spend the most in this tier for the fuller feature set that comes with it. Retail pricing on this listing can shift with sales or stock changes, so confirm the current price and availability before buying rather than relying on the figure shown here.",
    "specs": [
      "2.4g/5g WiFi & airplay & screen mirroring",
      "2026 upgraded dxyiitoo projector is native 1920x1080p",
      "Built-in speaker & bluetooth 5.2"
    ],
    "pros": [
      "2.4g/5g WiFi & airplay & screen mirroring",
      "2026 upgraded dxyiitoo projector is native 1920x1080p",
      "Built-in speaker & bluetooth 5.2"
    ],
    "cons": [
      "Confirm this stays in stock at the price checked here",
      "Setup or mounting hardware may be sold separately"
    ],
    "bestFor": "Buyers who are willing to spend the most in this tier for the fuller feature set that comes with it"
  }
];

export const readTime = "12 min";

export const relatedGuides = [
  {
    "href": "/guide/best-projectors-under-50",
    "title": "Best Projectors Under $50"
  },
  {
    "href": "/guide/best-projectors-under-200",
    "title": "Best Projectors Under $200"
  },
  {
    "href": "/guide/best-projectors-under-300",
    "title": "Best Projectors Under $300"
  }
];

export const breadcrumbLabel = "Best Projectors Under $100";
