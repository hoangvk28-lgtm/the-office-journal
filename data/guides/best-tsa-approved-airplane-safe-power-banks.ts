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

export const guideSlug = "best-tsa-approved-airplane-safe-power-banks";

export const guideTitle = "The Best TSA-Approved/Airplane-Safe Power Banks for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/41oHGJzpk+L._SL500_.jpg";

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
          "Eissix for Magsafe Portable Charger"
        ],
        [
          "Phone plus tablet, daily use",
          ""
        ],
        [
          "",
          ""
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
          "Eissix for Magsafe Portable Charger"
        ],
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "More charges before a recharge, but heavier and bulkier to carry."
      },
      {
        "label": "Eissix for Magsafe Portable Charger)",
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
          ""
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
        "text": "Anker Prime Power Bank is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where Anker Prime Power Bank justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where Eissix for Magsafe Portable Charger already covers the job at the lowest price here."
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
  "Across best tsa-approved/airplane-safe power banks, vary more than the keyword suggests, given that the real gap is in the details.",
  "What separates these picks is real usable capacity and charging speed, since these details matter more than claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank allowed in flight";

export const metaDescription = "We compared 8 TSA-approved/airplane-safe power banks on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best TSA-Approved/Airplane-Safe Power Banks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "65W Portable Laptop Charger",
    "price": "$39.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41oHGJzpk+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1Y37QTL?tag=theofficejournal-20",
    "description": "65W Portable Laptop Charger is our overall pick in this lineup.\n\nSet next to Eissix for Magsafe Portable Charger, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis fits best if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Dual 65w USB-C fast charging & triple-port powerhouse",
      "Airline-approved 26,800mAh beast: TSA-friendly 99.1wh capacity (iata pi965 section ii certified)",
      "Say goodbye to cable chaos"
    ],
    "pros": [
      "Dual 65w USB-C fast charging & triple-port powerhouse",
      "Airline-approved 26,800mAh beast: TSA-friendly 99.1wh capacity (iata pi965 section ii certified)",
      "Say goodbye to cable chaos",
      "Intelligent safety & adaptive charging"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "Eissix for Magsafe Portable Charger",
    "price": "$23.72",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31VZ7yq8dXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H1RFJBN4?tag=theofficejournal-20",
    "description": "Eissix for Magsafe Portable Charger is the best-value option in this roundup, priced lowest without a real capability gap. 9 oz, about the weight of an iphone 16 pro max), this power bank slips easily into your pocket or bag without adding bulk.\n\nAgainst 65W Portable Laptop Charger, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis makes sense for anyone who want a capable pick without paying for headroom you won't use. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Strong magnetic hold with n52 magnets",
      "Compact, lightweight & travel-ready",
      "Stay powered up anywhere with this high-capacity 10000mAh portable charger"
    ],
    "pros": [
      "Strong magnetic hold with n52 magnets",
      "Compact, lightweight & travel-ready",
      "Stay powered up anywhere with this high-capacity 10000mAh portable charger",
      "Up to 22.5w wired and 15w magnetic wireless output"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "INIU Portable Charger",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Pf6QOYn2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFLHZQ18?tag=theofficejournal-20",
    "description": "INIU Portable Charger is a strong alternative worth comparing directly against the top pick. Massive power for your pocket. The ultimate travel power bank.\n\n65W Portable Laptop Charger lands in a similar spot overall, but the deciding factor between the two is join 38 million+ global users relying on iniu’s safecharge tech.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Massive power for your pocket",
      "Detachable nylon lanyard.",
      "True 22.5w fast charge."
    ],
    "pros": [
      "Massive power for your pocket",
      "Detachable nylon lanyard.",
      "True 22.5w fast charge.",
      "Flight approved & flashlight."
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "EF ECOFLOW Rapid Pro Power Bank",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31nTAFO++SL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHB6HFPJ?tag=theofficejournal-20",
    "description": "EF ECOFLOW Rapid Pro Power Bank is a strong alternative worth comparing directly against the top pick. 300W total output with 4 ports. Recharges to 80% in just 20 minutes.\n\nThe gap between this and 65W Portable Laptop Charger isn't in the essentials, it shows up in airline-friendly large capacity.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "300W total output with 4 ports",
      "140W high speed charging",
      "Recharges to 80% in just 20 minutes"
    ],
    "pros": [
      "300W total output with 4 ports",
      "140W high speed charging",
      "Recharges to 80% in just 20 minutes",
      "Airline-friendly large capacity"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Mukiya 20000mAh Laptop Power Bank with Retractable Cable & Stand",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41g4ZihGmGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMHRLTHK?tag=theofficejournal-20",
    "description": "Mukiya 20000mAh Laptop Power Bank with Retractable Cable & Stand is a strong alternative worth comparing directly against the top pick. Mukiya laptop power bank travel lighter and stay organized. Power that lasts when you need it most.\n\nHeld up against 65W Portable Laptop Charger, both cover the basics equally well, what actually separates them is fast charging portable laptop power bank charge faster and do more.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Mukiya laptop power bank travel lighter and stay organized",
      "Power that lasts when you need",
      "Fast charging portable laptop power bank charge faster and do"
    ],
    "pros": [
      "Mukiya laptop power bank travel lighter and stay organized",
      "Power that lasts when you need",
      "Fast charging portable laptop power bank charge faster and do",
      "Stay informed at a glance"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "INIU Mini Portable Charger",
    "price": "$29.68",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tJgJ3SZlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQD35SQ4?tag=theofficejournal-20",
    "description": "INIU Mini Portable Charger is a strong alternative worth comparing directly against the top pick. Roughly the size of an airpods pro case, this smallest power bank packs 10,000mAh of long lasting power into a tiny, nano footprint. Delivering desktop-grade, rapid speed anywhere, this 45w pd fast charging bank blasts a samsung s26 ultra from 20% to 92% or an iphone 17 pro max to 75% in just 30 minutes.\n\n65W Portable Laptop Charger lands in a similar spot overall, but the deciding factor between the two is join over 38 million global users who rely on iniu's sleek design and top-tier safety standards.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Roughly the size of an airpods pro case",
      "True 45w super fast charging",
      "Detachable lanyard for multiple devices"
    ],
    "pros": [
      "Roughly the size of an airpods pro case",
      "True 45w super fast charging",
      "Detachable lanyard for multiple devices",
      "Airline approved travel essentials"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "PISEN 3C Wireless Power Bank",
    "price": "$36.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31V+xfH8MXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGPVZ8JR?tag=theofficejournal-20",
    "description": "PISEN 3C Wireless Power Bank is a strong alternative worth comparing directly against the top pick. Pisen qi2 10,000mAh ccc wireless power bank supports up to 15w wireless charging and 30w pd fast charging.\n\nWeighing this against 65W Portable Laptop Charger, stay powered on the go and enjoy hands-free video calls and streaming with the stand ends up being the detail that matters most for most buyers.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Flight-approved and travel-ready",
      "Pisen qi2",
      "Pisen 3c certified portable charger power bank measures just 4 x"
    ],
    "pros": [
      "Flight-approved and travel-ready",
      "Pisen qi2",
      "Pisen 3c certified portable charger power bank measures just 4 x",
      "Magnetic power bank with foldable stand"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-tsa-approved-airplane-safe-power-banks-8",
    "rank": 8,
    "badge": "Best Premium Pick",
    "name": "Anker Prime Power Bank",
    "price": "$179.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31OvXybeSGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BYP2F3SG?tag=theofficejournal-20",
    "description": "Anker Prime Power Bank is the priciest pick in this lineup. Experience 250w multi-device fast charging that keeps your laptop at 140w while simultaneously powering your tablet and phone. Customize your charging experience with the \"Anker\" app.\n\nReach for this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Power multiple devices at once",
      "Customize your charging experience with the \"Anker\" app",
      "High capacity, portable power"
    ],
    "pros": [
      "Power multiple devices at once",
      "Customize your charging experience with the \"Anker\" app",
      "High capacity, portable power",
      "Lightning-fast recharge"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
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

export const breadcrumbLabel = "Best TSA-Approved/Airplane-Safe Power Banks";
