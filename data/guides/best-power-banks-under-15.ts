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

export const guideSlug = "best-power-banks-under-15";

export const guideTitle = "The Best Power Banks Under $15, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/417i8Tql58L._SL500_.jpg";

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
          ""
        ],
        [
          "Phone plus tablet, daily use",
          "Evopow 2 Pack Portable Charger"
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
          ""
        ],
        [
          "",
          "5W Fast Power Bank with Built-in 2 Cables"
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
        "label": "",
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
          "Evopow 2 Pack Portable Charger"
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
        "text": "Byobyc Portable Charger is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where Byobyc Portable Charger justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where Byobyc Portable Charger already covers the job at the lowest price here."
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
  "Across best power banks under $15, vary more than the keyword suggests, given that the real gap is in the details.",
  "What separates these picks is true watt-hours versus advertised mAh, since this predicts real day-to-day battery life."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank under 500";

export const metaDescription = "We compared 4 power banks under $15 on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Power Banks Under $15 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-power-banks-under-15-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Evopow 2 Pack Portable Charger",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417i8Tql58L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGDCY95C?tag=theofficejournal-20",
    "description": "Evopow 2 Pack Portable Charger is our overall pick in this lineup. 55-inch power bank that breaks the 10000mAh limit, weighing just 219g and only 14mm thick.\n\n5W Fast Power Bank with Built-in 2 Cables.\n\nIt's worth picking this one if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Smaller & slimmer",
      "3 Output & 2 input",
      "High-speed charging"
    ],
    "pros": [
      "Smaller & slimmer",
      "3 Output & 2 input",
      "High-speed charging",
      "Charge three devices simultaneously"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-power-banks-under-15-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Portable Charger 10000mAh 22.5W Fast Power Bank with Built-in 2 Cables",
    "price": "$13.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31X3agTA6JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DLSNGYS5?tag=theofficejournal-20",
    "description": "5W Fast Power Bank with Built-in 2 Cables is a strong alternative worth comparing directly against the top pick. E portable phone charger combines advanced pd & qc fast charging technologies. E external battery with 2 cables, no need extra cables, easy to use when going ou.\n\nAgainst Evopow 2 Pack Portable Charger, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Pd22.5w fast charging battery pack:grnoas.e portable phone charger combines advanced pd & qc fast charging technologies",
      "4 Outputs and 2 inputs",
      "Portable charger with built in cables"
    ],
    "pros": [
      "Pd22.5w fast charging battery pack:grnoas.e portable phone charger combines advanced pd & qc fast charging technologies",
      "4 Outputs and 2 inputs",
      "Portable charger with built in cables",
      "Safety charging"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-15-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "10000mAh Power Bank Built-in 2 Cables, 40% Thinner 22.5W PD Portable Charger",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41X8vS3PsrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYRY2ZWG?tag=theofficejournal-20",
    "description": "5W PD Portable Charger is a strong alternative worth comparing directly against the top pick. This 10000mAh portable charger with built-in type-c and lightning cords is a travel useful.\n\nAgainst Evopow 2 Pack Portable Charger, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Power bank measuring 5.3×2.7x0.55 inch and weighing only 8.1oz",
      "All-in-one power bank, no extra cables",
      "Delivers 22.5w fast charging"
    ],
    "pros": [
      "Power bank measuring 5.3×2.7x0.55 inch and weighing only 8.1oz",
      "All-in-one power bank, no extra cables",
      "Delivers 22.5w fast charging",
      "Precise LED display & multi-layer safety"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-15-4",
    "rank": 4,
    "badge": "Best Value",
    "name": "Byobyc Portable Charger",
    "price": "$9.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31LPZs+1XpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FVY26VPM?tag=theofficejournal-20",
    "description": "Byobyc Portable Charger is a low-cost pick that doesn't skip the essentials. 76 oz, making it as convenient to hold as a phone case. 5w pd charging, delivering a reliable and efficient power supply for your devices.\n\nEvopow 2 Pack Portable Charger is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nThis fits best if you want a capable pick without paying for headroom you won't use. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Slim portable charger boasts a compact size of just 5.53 x",
      "Efficient charging with type-c in& out port",
      "Clear LED digital display"
    ],
    "pros": [
      "Slim portable charger boasts a compact size of just 5.53 x",
      "Efficient charging with type-c in& out port",
      "Clear LED digital display",
      "Portable charger for multiple devices"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
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

export const breadcrumbLabel = "Best Power Banks Under $15";
