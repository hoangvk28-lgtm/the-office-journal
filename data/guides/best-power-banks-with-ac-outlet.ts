// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "MAh vs Real Usable Charge",
    "explanation": "A power bank's advertised mAh rating is measured at the battery's own internal voltage, not the 5V (or higher) your phone actually charges at, so the real usable charge you get is meaningfully lower than the number on the box suggests, often 60 to 70% of the rated capacity once conversion losses are accounted for. A 20,000mAh power bank realistically delivers something closer to 3 to 4 full phone charges, not the 5-plus a naive mAh-to-phone-battery math would suggest."
  },
  {
    "criterion": "Watt-Hours Determine Airline Legality, Not mAh",
    "explanation": "If you're buying a power bank with air travel in mind, the relevant spec is watt-hours, not mAh: the standard rule allows up to 100Wh without airline approval, up to 160Wh with prior permission, and nothing above that on any commercial flight, since power banks must also travel in carry-on luggage, never checked bags. Convert mAh to Wh (mAh times voltage, divided by 1000) before assuming a high-mAh power bank is automatically flight-legal."
  },
  {
    "criterion": "Fast-Charging Wattage vs Your Actual Devices",
    "explanation": "A power bank's fast-charging wattage only helps if your specific device can actually accept that charging speed, an 18W-capable phone won't charge any faster from a 65W power bank than it would from an 18W one, so match the power bank's output wattage to your device's actual charging spec rather than assuming a higher number always means faster real-world charging. For laptop charging specifically, check that the power bank supports USB-PD at a wattage your laptop actually requires (often 45 to 100W), not just any USB-C port."
  },
  {
    "criterion": "Pass-Through Charging for Desk Setups",
    "explanation": "For a power bank you plan to keep plugged in at your desk as backup power rather than carrying around, pass-through charging (charging your device while the power bank itself charges) is the feature that actually matters, not raw capacity. Not all power banks handle this safely due to heat buildup during simultaneous charge and discharge, so check the listing or manual specifically rather than assuming every USB-C power bank supports it."
  },
  {
    "criterion": "Cycle Life and Long-Term Battery Degradation",
    "explanation": "Every rechargeable power bank loses capacity over repeated charge cycles, typically retaining 80% of its original capacity after 300 to 500 full cycles for a standard lithium-ion cell, or meaningfully more for a lithium-polymer or LiFePO4 cell in premium models. If you'll be charging the power bank daily, that degradation curve matters more than the day-one capacity spec, since a cheaper cell can noticeably underperform its rated capacity within a year of regular use."
  }
];

export const faq = [
  {
    "q": "Why does my power bank charge my phone fewer times than the mAh suggests?",
    "a": "The mAh rating is measured at the battery's internal voltage, not the voltage your phone charges at, so conversion losses mean you get roughly 60 to 70% of the rated capacity as real usable charge, closer to 3 to 4 phone charges from a 20,000mAh power bank rather than 5-plus."
  },
  {
    "q": "Can I bring my power bank on a plane?",
    "a": "It depends on watt-hours (Wh), not mAh: up to 100Wh is allowed without airline approval, up to 160Wh with prior permission, and nothing above that on any commercial flight; power banks must also go in carry-on luggage, never checked bags."
  },
  {
    "q": "How do I convert power bank mAh to Wh for flying?",
    "a": "7V works out to roughly 100Wh, right at the limit allowed without airline approval."
  },
  {
    "q": "Does a higher-wattage power bank charge my phone faster?",
    "a": "Only if your phone supports that charging speed; an 18W-capable phone won't charge any faster from a 65W power bank than an 18W one, so match the power bank's wattage to your specific device's actual charging spec, not just the highest number available."
  },
  {
    "q": "What is pass-through charging on a power bank?",
    "a": "It lets the power bank charge your device while it's simultaneously being charged itself, useful if you're leaving it plugged in at a desk as backup power; not every power bank supports this safely due to heat buildup, so check the listing specifically."
  },
  {
    "q": "How long does a power bank's battery actually last?",
    "a": "A standard lithium-ion cell typically retains about 80% of its original capacity after 300 to 500 full charge cycles, while premium lithium-polymer or LiFePO4 cells hold up longer, so daily charging habits matter as much as the day-one capacity spec."
  }
];

export const guideSlug = "best-power-banks-with-ac-outlet";

export const guideTitle = "The Best Power Banks with AC Outlet: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/41CQeTs7kzL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Apowking Portable Power Bank with AC Outlet"
        ],
        [
          "Phone plus tablet, daily use",
          "Portable Power Bank with AC Outlet"
        ],
        [
          "",
          "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W"
        ]
      ]
    }
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
          "Lowest price in this lineup",
          "Apowking Portable Power Bank with AC Outlet"
        ],
        [
          "",
          "6Wh LiFePO4 Battery 100W(200W Peak) Solar Power"
        ],
        [
          "",
          "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W)",
        "text": "More charges before a recharge, but heavier and bulkier to carry."
      },
      {
        "label": "Apowking Portable Power Bank with AC Outlet)",
        "text": "Pocket-friendly and light, but needs more frequent recharging."
      }
    ],
    "note": "Match this to whether you're carrying it daily or leaving it in a bag for emergencies."
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
          "",
          "Check the watt-hour (Wh) rating stays under 100Wh"
        ],
        [
          "",
          "Portable Power Bank with AC Outlet"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "USB-PD support at 45W or higher, not just any USB-C port."
      },
      {
        "label": "",
        "text": "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where Apowking Portable Power Bank with AC Outlet already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "MAh vs Real Usable Charge",
    "description": "A power bank's advertised mAh rating is measured at the battery's own internal voltage, not the 5V (or higher) your phone actually charges at, so the real usable charge you get is meaningfully lower than the number on the box suggests, often 60 to 70% of the rated capacity once conversion losses are accounted for."
  },
  {
    "title": "Watt-Hours Determine Airline Legality, Not mAh",
    "description": "If you're buying a power bank with air travel in mind, the relevant spec is watt-hours, not mAh: the standard rule allows up to 100Wh without airline approval, up to 160Wh with prior permission, and nothing above that on any commercial flight, since power banks must also travel in carry-on luggage, never checked bags."
  },
  {
    "title": "Fast-Charging Wattage vs Your Actual Devices",
    "description": "A power bank's fast-charging wattage only helps if your specific device can actually accept that charging speed, an 18W-capable phone won't charge any faster from a 65W power bank than it would from an 18W one, so match the power bank's output wattage to your device's actual charging spec rather than assuming a higher number always means faster real-world charging."
  },
  {
    "title": "Pass-Through Charging for Desk Setups",
    "description": "For a power bank you plan to keep plugged in at your desk as backup power rather than carrying around, pass-through charging (charging your device while the power bank itself charges) is the feature that actually matters, not raw capacity."
  },
  {
    "title": "Cycle Life and Long-Term Battery Degradation",
    "description": "Every rechargeable power bank loses capacity over repeated charge cycles, typically retaining 80% of its original capacity after 300 to 500 full cycles for a standard lithium-ion cell, or meaningfully more for a lithium-polymer or LiFePO4 cell in premium models."
  }
];

export const introParagraphs = [
  "Across best power banks with ac outlet, vary more than the keyword suggests, given that the real gap is in the details.",
  "What separates these picks is real usable capacity and charging speed, since this predicts real day-to-day battery life."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank with ac outlet";

export const metaDescription = "A practical comparison of 8 power banks with AC outlet, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Power Banks with AC Outlet (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-power-banks-with-ac-outlet-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Portable Power Bank with AC Outlet",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41CQeTs7kzL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLFY6TGQ?tag=theofficejournal-20",
    "description": "Portable Power Bank with AC Outlet is the top pick in this comparison. The ac outlet up to 100w, which can meet the charging and on-load needs of electrical appliances less than 100w. The pd type-c port provides 65w output and input, well suited solution for your USB-C devices and charge at the fastest speeds.\n\n6Wh LiFePO4 Battery 100W(200W Peak) Solar Power, both cover the basics equally well, what actually separates them is it is easier to carry on a trip, fishing, or camping than other power banks.\n\nThis makes sense for anyone who want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Portable ac power bank",
      "65W pd output & input",
      "Huge 27000mAh capacity: this power bank has a capacity"
    ],
    "pros": [
      "Portable ac power bank",
      "65W pd output & input",
      "Huge 27000mAh capacity: this power bank has a capacity",
      "Easy to carry"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-power-banks-with-ac-outlet-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Daran Portable Power Station 89.6Wh LiFePO4 Battery 100W(200W Peak) Solar Power",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RqhJSR3sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQT5G1ZR?tag=theofficejournal-20",
    "description": "6Wh LiFePO4 Battery 100W(200W Peak) Solar Power is a strong alternative worth comparing directly against the top pick.\n\n3500+ Life cycles (far exceeding standard batteries), which is the main thing that distinguishes this pick from Portable Power Bank with AC Outlet.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Slim & pocketable",
      "Dual input/output (ac + dc)",
      "Unique fast charging technology, the portable generator can be charged from 0-80% just in 1.5hrs"
    ],
    "pros": [
      "Slim & pocketable",
      "Dual input/output (ac + dc)",
      "Unique fast charging technology, the portable generator can be charged from 0-80% just in 1.5hrs",
      "Experience silent, fanless operation well suited to sleeping, working, or camping"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-with-ac-outlet-3",
    "rank": 3,
    "badge": "Best Value",
    "name": "Apowking Portable Power Bank with AC Outlet",
    "price": "$59.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bMgO7etGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXBZHF8R?tag=theofficejournal-20",
    "description": "Apowking Portable Power Bank with AC Outlet is a low-cost pick that doesn't skip the essentials. 8wh 24000mAh, rechargeable battery pack and is equipped with a 110v/65w (peak 65w) ac outlet. 7 pounds), the solar power charger bank fits perfectly in backpack or suitcase, easy to be carried wherever you go.\n\nPortable Power Bank with AC Outlet is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nThis fits best if you want a capable pick without paying for headroom you won't use. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "High capacity power bank",
      "Camping power bank with 4 output ports",
      "Easy to carry & safer"
    ],
    "pros": [
      "High capacity power bank",
      "Camping power bank with 4 output ports",
      "Easy to carry & safer",
      "3 Recharging modes"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-power-banks-with-ac-outlet-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Jackery Explorer 300 Portable Power Station, 292Wh",
    "price": "$259.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=theofficejournal-20",
    "description": "Jackery Explorer 300 Portable Power Station, 292Wh is a strong alternative worth comparing directly against the top pick. 5 lbs, the explorer 300 delivers a robust 292wh capacity while remaining 17% lighter than the industry average. Versatile power for 6 devices: equipped with 2 ac outlets, a 100w USB-C pd port, 2 USB-a ports, and a 120w car port.\n\nSet next to Portable Power Bank with AC Outlet, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "At only 7.5 lbs",
      "Versatile power for 6 devices",
      "Built to last"
    ],
    "pros": [
      "At only 7.5 lbs",
      "Versatile power for 6 devices",
      "Built to last",
      "Fast solar charging"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-with-ac-outlet-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "SinKeu 24000mAh Portable Power Bank with AC Outlet",
    "price": "$79.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-kLfY1KiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQ2J6Q1W?tag=theofficejournal-20",
    "description": "SinKeu 24000mAh Portable Power Bank with AC Outlet is a strong alternative worth comparing directly against the top pick. 8wh portable power bank with 110v/65w ac outlet, a great solution to ac power supply. Recharges itself less in 4 hours with a high-speed dc15v/2a (30w) input.\n\nPortable Power Bank with AC Outlet lands in a similar spot overall, but the deciding factor between the two is this electric generator within clear lcd screen shows all operating status easily and timely.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Compact & power",
      "High-speed charging",
      "Universal charger"
    ],
    "pros": [
      "Compact & power",
      "High-speed charging",
      "Universal charger",
      "Multiple safety backup power"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-with-ac-outlet-6",
    "rank": 6,
    "badge": "Best Premium Pick",
    "name": "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W",
    "price": "$499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31+D1tNXreL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7PPG25F?tag=theofficejournal-20",
    "description": "Jackery Explorer 1000 v2 Portable Power Station, 1070Wh, 1500W is the priciest pick in this lineup. Boasting a 1,500w ac output and a 3,000w surge peak, the solar generator 1000 v2 can power multiple appliances, including ac units, fridges, and electric pots. Charge your explorer 1000 v2 portable power station from 0% to 100% battery level in just one hour with emergency charging activated via the Jackery app.\n\nWeighing this against Portable Power Bank with AC Outlet, 1 * Explorer 1000 v2, 1 * user manual ends up being the detail that matters most for most buyers.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Boasting",
      "One hour fast charging",
      "10 Year lifespan"
    ],
    "pros": [
      "Boasting",
      "One hour fast charging",
      "10 Year lifespan",
      "Tailored for versatility"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-power-banks-with-ac-outlet-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "ZOUPW 140W Portable Power Bank",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xJUfUZxhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FW3NCH2D?tag=theofficejournal-20",
    "description": "ZOUPW 140W Portable Power Bank is a strong alternative worth comparing directly against the top pick. This zoupw power bank is driven by premium 21700 ev-grade li-ion cells with a 3c high-discharge rating, enabling a massive 160w total output. Unlike standard portable chargers, this zoupw power bank features a built-in 100w ac outlet (150w peak with x-boost).\n\nPortable Power Bank with AC Outlet covers similar ground, though this zoupw power bank eliminates charging anxiety with support for 100w USB-C input is what tips the choice one way or the other.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Zoupw power bank is driven by premium 21700 ev-grade li-ion cells with a 3c high-discharge rating",
      "Unlike standard portable chargers",
      "1.82 Lbs airline safe design"
    ],
    "pros": [
      "Zoupw power bank is driven by premium 21700 ev-grade li-ion cells with a 3c high-discharge rating",
      "Unlike standard portable chargers",
      "1.82 Lbs airline safe design",
      "1-Hour flash recharging"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-with-ac-outlet-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "JIYHF Portable Power Bank with AC Outlet",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-CapVoH7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F47M43HS?tag=theofficejournal-20",
    "description": "JIYHF Portable Power Bank with AC Outlet is a strong alternative worth comparing directly against the top pick. 9wh, this power bank meets faa regulations for carry-on luggage. 0 USB-a ports, and a 12v dc output to power all your devices simultaneously.\n\nSet next to Portable Power Bank with AC Outlet, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Airline carry-on friendly",
      "Portable charger power bank features a 110v/100w ac outlet",
      "Portable battery pack can be fully recharged quickly in 2 hours"
    ],
    "pros": [
      "Airline carry-on friendly",
      "Portable charger power bank features a 110v/100w ac outlet",
      "Portable battery pack can be fully recharged quickly in 2 hours",
      "Battery bank will generate some heat during use"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-power-banks",
    "title": "Best Power Banks"
  },
  {
    "href": "/guide/best-power-banks-for-laptops",
    "title": "Best Power Banks for Laptops"
  },
  {
    "href": "/guide/best-tsa-approved-airplane-safe-power-banks",
    "title": "Best TSA-Approved Power Banks"
  }
];

export const breadcrumbLabel = "Best Power Banks with AC Outlet";
