// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "MAh vs Real Usable Charge",
    "explanation": "The mAh number on a power bank's packaging describes total stored energy at the battery's internal voltage, but your phone charges at a different voltage, and the conversion between the two loses real capacity along the way. Expect to get roughly 60 to 70% of the rated mAh as actual usable charge, which means a 20,000mAh power bank realistically covers 3 to 4 phone charges rather than the higher number simple division would suggest."
  },
  {
    "criterion": "Watt-Hours Determine Airline Legality, Not mAh",
    "explanation": "Airlines don't restrict power banks by mAh, they use watt-hours (Wh), calculated as mAh times voltage divided by 1000. The FAA and TSA cap carry-on power banks at 100Wh without airline approval, up to 160Wh with prior permission, and anything above 160Wh is banned outright from commercial flights. 7 volts works out to roughly 100Wh, right at the unapproved limit, so check the Wh figure specifically before flying with a high-capacity power bank, not just the mAh number on the label."
  },
  {
    "criterion": "Fast-Charging Wattage vs Your Actual Devices",
    "explanation": "Fast-charging wattage is capped by whichever device in the chain supports less, so a power bank rated for 65W delivers nothing extra to a phone that only accepts 18W charging, that headroom only matters if you're also charging a laptop or another higher-wattage device from the same power bank. Check your specific devices' actual charging specs before paying extra for wattage you can't use."
  },
  {
    "criterion": "Pass-Through Charging for Desk Setups",
    "explanation": "Pass-through charging lets a power bank charge your device while it's simultaneously being charged itself, useful for a desk setup where the power bank stays plugged in as backup power. Not every power bank supports this safely, some support simultaneous charge/discharge, while others explicitly warn against it in the manual due to heat buildup, so check for this feature specifically if you're planning to leave the power bank connected at your desk rather than carrying it around."
  },
  {
    "criterion": "Cycle Life and Long-Term Battery Degradation",
    "explanation": "The capacity printed on a power bank's box describes day-one performance, not what it'll deliver after months of regular charging: a standard lithium-ion cell typically drops to about 80% of its original capacity after 300 to 500 full charge cycles, while a higher-quality lithium-polymer or LiFePO4 cell holds up meaningfully longer. If daily use is the plan, that cycle-life spec matters as much as the headline mAh number."
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

export const guideSlug = "best-power-banks-under-100";

export const guideTitle = "The Best Power Banks Under $100: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/41Nj43I11FL._SL500_.jpg";

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
          "45W Fast Charging Portable Charger"
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
          "45W Fast Charging Portable Charger"
        ],
        [
          "",
          "Portable Charger Power Bank 40800mAh with 3 Built-in Cables, 25W Fast Phone"
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
        "label": "45W Fast Charging Portable Charger)",
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
        "text": "Anker Laptop Power Bank is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where Anker Laptop Power Bank justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where 45W Fast Charging Portable Charger already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "MAh vs Real Usable Charge",
    "description": "The mAh number on a power bank's packaging describes total stored energy at the battery's internal voltage, but your phone charges at a different voltage, and the conversion between the two loses real capacity along the way."
  },
  {
    "title": "Watt-Hours Determine Airline Legality, Not mAh",
    "description": "Airlines don't restrict power banks by mAh, they use watt-hours (Wh), calculated as mAh times voltage divided by 1000."
  },
  {
    "title": "Fast-Charging Wattage vs Your Actual Devices",
    "description": "Fast-charging wattage is capped by whichever device in the chain supports less, so a power bank rated for 65W delivers nothing extra to a phone that only accepts 18W charging, that headroom only matters if you're also charging a laptop or another higher-wattage device from the same power bank."
  },
  {
    "title": "Pass-Through Charging for Desk Setups",
    "description": "Pass-through charging lets a power bank charge your device while it's simultaneously being charged itself, useful for a desk setup where the power bank stays plugged in as backup power."
  },
  {
    "title": "Cycle Life and Long-Term Battery Degradation",
    "description": "The capacity printed on a power bank's box describes day-one performance, not what it'll deliver after months of regular charging: a standard lithium-ion cell typically drops to about 80% of its original capacity after 300 to 500 full charge cycles, while a higher-quality lithium-polymer or LiFePO4 cell holds up meaningfully longer."
  }
];

export const introParagraphs = [
  "Best Power Banks Under $100 cover a wide range of capacities and charging speeds. That means marketing copy alone is risky.",
  "This roundup weighs real usable capacity and charging speed, given that marketing copy tends to obscure this."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank 100w";

export const metaDescription = "A practical comparison of 8 power banks under $100, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Power Banks Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-power-banks-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "OHOVIV Portable Charger Power Bank 50000mAh, PD 22.5W Battery Pack",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Nj43I11FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F43Z98VS?tag=theofficejournal-20",
    "description": "5W Battery Pack is the top pick in this comparison. Without extra worry about low phone battery. 5w output) ports, 1 USB-C (18w input/22w output) port and 1, and it can charge three devices at the same time.\n\nSet next to Portable Charger Power Bank 40800mAh with 3 Built-in Cables, 25W Fast Phone, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nChoose this if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Huge capacity 50000mAh portable charger - the 50000mAh power",
      "Latest pd 22.5w high-speed charging - ohoviv 50000mAh portable",
      "Power 3 devices at once - cell phone external"
    ],
    "pros": [
      "Huge capacity 50000mAh portable charger - the 50000mAh power",
      "Latest pd 22.5w high-speed charging - ohoviv 50000mAh portable",
      "Power 3 devices at once - cell phone external",
      "Ohoviv 50000mAh cell phone portable charger comes with smart LED digital display"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-power-banks-under-100-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Portable Charger Power Bank 40800mAh with 3 Built-in Cables, 25W Fast Phone",
    "price": "$28.76",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31OgY6U3eEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9WVKQMV?tag=theofficejournal-20",
    "description": "Portable Charger Power Bank 40800mAh with 3 Built-in Cables, 25W Fast Phone is a strong alternative worth comparing directly against the top pick. A massive 40,800mAh capacity with over 2,000 charge cycles and cables tested for 30,000+ bends, this portable charger provides multiple full charges for your devices and is built to last for years of reliable service.\n\n5W Battery Pack, the real difference worth noting is no more choosing which device to charge first.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Massive 40,800mAh capacity with over 2,000 charge cycles and cables tested for 30,000+ bends",
      "Warm tip",
      "25W power bank super fast charging"
    ],
    "pros": [
      "Massive 40,800mAh capacity with over 2,000 charge cycles and cables tested for 30,000+ bends",
      "Warm tip",
      "25W power bank super fast charging",
      "Charge 5 devices simultaneously"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-100-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "ZZI Portable Charger Power Bank 60000mAh",
    "price": "$48.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hoLl4n1RL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRSRFFZR?tag=theofficejournal-20",
    "description": "ZZI Portable Charger Power Bank 60000mAh is a strong alternative worth comparing directly against the top pick. Huge capacity 60000mAh power bank: zzi portable charger features a new high-density polymer battery that provides 10 charges for iphone 15, freeing you from battery anxiety. 5W super fast charging & battery protection: the battery charger can charge your iphone 15 to 60% in just 30 minutes, 3 times faster than a standard portable phone charger.\n\n5W Battery Pack, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Huge capacity 60000mAh power bank: zzi portable charger",
      "22.5W super fast charging & battery protection: the battery",
      "Massive 60,000mAh capacity, zzi battery bank provides long-lasting power without feeling bulky"
    ],
    "pros": [
      "Huge capacity 60000mAh power bank: zzi portable charger",
      "22.5W super fast charging & battery protection: the battery",
      "Massive 60,000mAh capacity, zzi battery bank provides long-lasting power without feeling bulky",
      "Reliable 5-layer safety protection"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-100-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "SABANI Portable Charger 35000mAh Power Bank",
    "price": "$26.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+Rw55JT-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3J6MRTZ?tag=theofficejournal-20",
    "description": "SABANI Portable Charger 35000mAh Power Bank is a strong alternative worth comparing directly against the top pick. 35,000mAh huge capacity with remarkable compact design: must the high-capacity charger be big and heavy? 1*35000mAh portable charger with 4 built-in cables and 3 ports, 1*USB c cable for recharging portable charger, 1*user manual.\n\n5W Battery Pack, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Widely compatibility power bank with built-in cables",
      "All in one portable charger",
      "35,000mAh huge capacity with remarkable compact design: must the high-capacity charger be big"
    ],
    "pros": [
      "Widely compatibility power bank with built-in cables",
      "All in one portable charger",
      "35,000mAh huge capacity with remarkable compact design: must the high-capacity charger be big",
      "3X faster 22.5w pd fast charging output: the n6 portable battery supports 22.5w pd fast charging"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-100-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Portable Charger 56800mAh",
    "price": "$28.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nkmLzgnOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQZKGGQH?tag=theofficejournal-20",
    "description": "Portable Charger 56800mAh is a strong alternative worth comparing directly against the top pick. Built for extended use, this high-capacity power bank keeps your devices charged for days. This portable charger battery pack features 2 USB-an outputs and one two-way USB-C port, so you can charge up to 3 devices at once without waiting.\n\n5W Battery Pack, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Built for extended use",
      "Triple device charging with USB-a & USB-C",
      "Fast charging & 10+ device charges: this portable charger delivers fast"
    ],
    "pros": [
      "Built for extended use",
      "Triple device charging with USB-a & USB-C",
      "Fast charging & 10+ device charges: this portable charger delivers fast",
      "LED display & multi-layer safety protection"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-100-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "DIAMUAR Portable Charger 30000mAh",
    "price": "$31.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31gqi5VBkkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G25W4XBP?tag=theofficejournal-20",
    "description": "DIAMUAR Portable Charger 30000mAh is a strong alternative worth comparing directly against the top pick. 0 Fast charging + triple ports:our portable charger delivers 30w power delivery fast charging, capable of 100% charging for iphone 16 in just 60 minutes. This portable battery pack features a clear digital display for real-time power monitoring.\n\n5W Battery Pack, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "4.0 Fast charging + triple ports:our portable charger delivers 30w power delivery fast charging",
      "Portable battery pack features a clear digital display for real-time power monitoring",
      "30000mAh & 5+ phone charges:packed with 30000mAh high-capacity battery"
    ],
    "pros": [
      "4.0 Fast charging + triple ports:our portable charger delivers 30w power delivery fast charging",
      "Portable battery pack features a clear digital display for real-time power monitoring",
      "30000mAh & 5+ phone charges:packed with 30000mAh high-capacity battery",
      "Upgraded portable battery pack is crafted with premium top-grade materials"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-100-7",
    "rank": 7,
    "badge": "Best Value",
    "name": "45W Fast Charging Portable Charger",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BwswK+NvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8MWCL8T?tag=theofficejournal-20",
    "description": "45W Fast Charging Portable Charger is the most affordable pick here that still clears the capability floor for this category. Charge your phone 4 times: this portable charger features a new high-density polymer battery that provides 4 charges for iphone 15, freeing you from battery anxiety. 35% Smaller than devices with the same capacity: our power bank boasts a massive capacity of up to 20,000mAh, providing long-lasting power without feeling bulky at all.\n\n5W Battery Pack, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis one is the right call if you want a capable pick without paying for headroom you won't use. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Charges to 70% in 30 minutes",
      "Charge your phone 4 times",
      "35% Smaller than devices with the same capacity"
    ],
    "pros": [
      "Charges to 70% in 30 minutes",
      "Charge your phone 4 times",
      "35% Smaller than devices with the same capacity",
      "Charge 4 devices simultaneously"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-power-banks-under-100-8",
    "rank": 8,
    "badge": "Best Premium Pick",
    "name": "Anker Laptop Power Bank",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31TACmxxIGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DCBB2YTR?tag=theofficejournal-20",
    "description": "Anker Laptop Power Bank is the premium option here, positioned above the rest on price. 25,000mAh for long-haul power: tackle week-long trips or extended camping with 25,000mAh capacity and ultra-fast recharge speeds for the power bank when used with a 100w or higher charger. 98 ft cable that doubles as a durable carrying strap capable of enduring more than 20,000 bends.\n\n5W Battery Pack, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Triple 100w USB-C ports for multi-device charging: ideal for laptop users",
      "25,000mAh for long-haul power: tackle week-long trips or extended",
      "Dual built-in cables for travel"
    ],
    "pros": [
      "Triple 100w USB-C ports for multi-device charging: ideal for laptop users",
      "25,000mAh for long-haul power: tackle week-long trips or extended",
      "Dual built-in cables for travel",
      "Charge 4 devices at once"
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

export const breadcrumbLabel = "Best Power Banks Under $100";
