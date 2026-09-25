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

export const guideSlug = "best-xiaomi-power-banks";

export const guideTitle = "The Best Xiaomi Power Banks for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/21lAc27se-L._SL500_.jpg";

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
          "Xiaomi Mi Ultra Compact 10000mAh Power Bank"
        ],
        [
          "Phone plus tablet, daily use",
          "XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger"
        ],
        [
          "",
          "XIAOMI Magnetic Power Bank 5000mAh"
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
          "Xiaomi Mi Ultra Compact 10000mAh Power Bank"
        ],
        [
          "",
          ""
        ],
        [
          "",
          "XIAOMI Magnetic Power Bank 5000mAh"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "XIAOMI Magnetic Power Bank 5000mAh)",
        "text": "More charges before a recharge, but heavier and bulkier to carry."
      },
      {
        "label": "Xiaomi Mi Ultra Compact 10000mAh Power Bank)",
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
          "XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger"
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
        "text": "XIAOMI Magnetic Power Bank 5000mAh is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where XIAOMI Magnetic Power Bank 5000mAh justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where Xiaomi Mi Ultra Compact 10000mAh Power Bank already covers the job at the lowest price here."
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
  "Best Xiaomi Power Banks look similar but differ in practice, so the listing hides real capacity gaps.",
  "Every pick here was judged on true watt-hours versus advertised mAh, because these details matter more than claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank xiaomi";

export const metaDescription = "We compared 4 xiaomi power banks on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Xiaomi Power Banks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-xiaomi-power-banks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger",
    "price": "$42.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21lAc27se-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN25NS2Z?tag=theofficejournal-20",
    "description": "XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger is the top pick in this comparison. 5×60×10mm) with ncvm-coated metal finish, slipping seamlessly into pockets or slim bags., charges Xiaomi 14 to 39% in 30 mins*).\n\nXiaomi Mi Ultra Compact 10000mAh Power Bank is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nGo with this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "At only 10mm thick and 3oz weight",
      "20W max fast charging & bidirectional USB-C",
      "Built-in intelligent chip detects connected devices"
    ],
    "pros": [
      "At only 10mm thick and 3oz weight",
      "20W max fast charging & bidirectional USB-C",
      "Built-in intelligent chip detects connected devices",
      "Utilizes high-quality polymer battery cells with 12-layer protection (overcharge/over-discharge/short-circuit/high-temperature resistance)"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-xiaomi-power-banks-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "Xiaomi Mi Ultra Compact 10000mAh Power Bank",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xUDVj13zS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LWWWH5F?tag=theofficejournal-20",
    "description": "Xiaomi Mi Ultra Compact 10000mAh Power Bank is the most affordable pick here that still clears the capability floor for this category. Xiaomi ultra compact power bank comes with USB-C two-way fast charging. Compatible with smartphones, tablets and the switch.\n\nThe gap between this and XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger isn't in the essentials, it shows up in high-quality ic chips for safer using everyday.\n\nChoose this if you want a capable pick without paying for headroom you won't use. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "22.5W fast charging",
      "Charging three devices simultaneously",
      "Safe high quality ic chips"
    ],
    "pros": [
      "22.5W fast charging",
      "Charging three devices simultaneously",
      "Safe high quality ic chips",
      "Small & slim"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-xiaomi-power-banks-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Portable Charger",
    "price": "$44.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/219aebMoGvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075Q5G3JN?tag=theofficejournal-20",
    "description": "Portable Charger is a strong alternative worth comparing directly against the top pick. 10000mAh mi portable charger can hold up enough power for prolonged periods of use, even vacations and business trips. 0 compatibility, mi power bank pro intelligently adjusts up to 18w and well suited to quick increase in battery life.\n\nPassed ce and eu regulations, a detail worth checking closely before choosing between this and XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "High capacity",
      "18W fast charging",
      "Ergonomic design"
    ],
    "pros": [
      "High capacity",
      "18W fast charging",
      "Ergonomic design",
      "Certified safety"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-xiaomi-power-banks-4",
    "rank": 4,
    "badge": "Best Premium Pick",
    "name": "XIAOMI Magnetic Power Bank 5000mAh",
    "price": "$53.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31sG2JevYjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMWWY2NH?tag=theofficejournal-20",
    "description": "XIAOMI Magnetic Power Bank 5000mAh is the priciest pick in this lineup. Features 10n magnetic force to securely attach to magsafe-compatible iphones (12 series and later). 5w wireless charging and 18w wired fast charging via USB-C.\n\n9g weight fits effortlessly in pockets, which is the main thing that distinguishes this pick from XIAOMI Ultra Slim Power Bank 5000mAh 10mm Ultra Slim & 3oz Lightweight Charger.\n\nReach for this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Strong magnetic attachment & auto-charging",
      "Dual-mode charging & 18w fast output",
      "Slim & travel-ready design"
    ],
    "pros": [
      "Strong magnetic attachment & auto-charging",
      "Dual-mode charging & 18w fast output",
      "Slim & travel-ready design",
      "Reliable 5000mAh capacity & safety: fully charges a smart phone like iphone 15 once"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  }
];

export const readTime = "9 min";

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

export const breadcrumbLabel = "Best Xiaomi Power Banks";
