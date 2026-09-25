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

export const guideSlug = "best-power-banks-under-30";

export const guideTitle = "The Best Power Banks Under $30, Compared";

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
          "INIU 10000mAh 45W Fast Charging Portable Charger"
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
          "INIU 10000mAh 45W Fast Charging Portable Charger"
        ],
        [
          "",
          "Anker Power Bank, 10,000mAh 30W with USB-C Travel Essential Portable Charger"
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
        "label": "INIU 10000mAh 45W Fast Charging Portable Charger)",
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
        "text": "Anker MagGo Power Bank is worth checking against your specific laptop's wattage requirement before assuming any power bank charges it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need higher capacity, faster charging, and support for a laptop, where Anker MagGo Power Bank justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need backup charges for a phone, where INIU 10000mAh 45W Fast Charging Portable Charger already covers the job at the lowest price here."
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
  "Best Power Banks Under $30 aren't as interchangeable as they seem. That means a title alone won't tell you enough.",
  "This roundup weighs honest cycle life and long-term capacity, given that this is the real gap to watch."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "power bank under 1000";

export const metaDescription = "We compared 6 power banks under $30 on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Power Banks Under $30 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-power-banks-under-30-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Evopow 2 Pack Portable Charger",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417i8Tql58L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGDCY95C?tag=theofficejournal-20",
    "description": "Evopow 2 Pack Portable Charger is our overall pick in this lineup. 55-inch power bank that breaks the 10000mAh limit, weighing just 219g and only 14mm thick.\n\nFast charging fuels iphone up to 79% in just one hour, which is the main thing that distinguishes this pick from INIU 10000mAh 45W Fast Charging Portable Charger.\n\nIt's worth picking this one if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
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
    "id": "best-power-banks-under-30-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "INIU 10000mAh 45W Fast Charging Portable Charger",
    "price": "$21.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41GzEENvuwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CB1FW5FC?tag=theofficejournal-20",
    "description": "INIU 10000mAh 45W Fast Charging Portable Charger is a strong alternative worth comparing directly against the top pick. 45W pro speed portable phone charger: this 45w fast charger boosts an iphone 17 pro max to 76%, a galaxy s25 ultra to 84%, or an ipad pro to 60% in just 30 minutes (charging from 20%). 4ft detachable braided USB-C cable can be swapped anytime to save your investment.\n\nAgainst Evopow 2 Pack Portable Charger, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "40% Smaller & lighter portable charger",
      "45W pro speed portable phone charger",
      "Detachable cable for multiple devices"
    ],
    "pros": [
      "40% Smaller & lighter portable charger",
      "45W pro speed portable phone charger",
      "Detachable cable for multiple devices",
      "Airline-safe travel essentials"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-30-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Anker Power Bank, 10,000mAh 30W with USB-C Travel Essential Portable Charger",
    "price": "$25.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31FQ+m0Lt2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9M6X8Q?tag=theofficejournal-20",
    "description": "Anker Power Bank, 10,000mAh 30W with USB-C Travel Essential Portable Charger is a strong alternative worth comparing directly against the top pick. Speedy 30w charging: experience cutting-edge 30w fast charging technology, twice as fast as 5v/3a chargers. 4-inch built-in USB-C cable is tested to endure over 10,000 bends, ensuring it stands up to the rigors of everyday use.\n\n98\", which is the main thing that distinguishes this pick from Evopow 2 Pack Portable Charger.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "Speedy 30w charging",
      "Ready for endless use",
      "Mighty compact power"
    ],
    "pros": [
      "Speedy 30w charging",
      "Ready for endless use",
      "Mighty compact power",
      "30W bi-directional charging"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-30-4",
    "rank": 4,
    "badge": "Best Premium Pick",
    "name": "Anker MagGo Power Bank",
    "price": "$69.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31qFmYH0WXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7DKJ75M?tag=theofficejournal-20",
    "description": "Anker MagGo Power Bank is the top-tier pick in this comparison. 09 inches, this 10,000mAh Anker power bank delivers exceptional portability without compromising power capacity. Equipped with a 15w max Qi wireless charging pad and a 30w max USB-C port, you can effortlessly charge your devices at home or on the go.\n\nAgainst Evopow 2 Pack Portable Charger, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nGo with this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
    "specs": [
      "Slim and portable",
      "Versatile charging options",
      "Sleek matte finish"
    ],
    "pros": [
      "Slim and portable",
      "Versatile charging options",
      "Sleek matte finish",
      "Device compatibility"
    ],
    "cons": [
      "Real-world output is usually lower than the advertised mAh figure",
      "Capacity above 100Wh needs airline approval or can't fly at all"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-power-banks-under-30-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "INIU Power Bank, Compact 10000mAh 45W PD Fast Charging Portable Charger",
    "price": "$22.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mcsPxuJ2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DC9PV394?tag=theofficejournal-20",
    "description": "INIU Power Bank, Compact 10000mAh 45W PD Fast Charging Portable Charger is a strong alternative worth comparing directly against the top pick. 45W fast charge, more than phones why settle for phone-only charging? A power bank only helps if you actually bring it.\n\nYour lanyard is your cable no more digging for a cable before heading out, which is the main thing that distinguishes this pick from Evopow 2 Pack Portable Charger.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Airlines cap carry-on power banks at 100 watt-hours without prior approval, and 160Wh is the hard ceiling even with permission, so check the Wh rating, not just the mAh number, before flying with one.",
    "specs": [
      "45W fast charge",
      "Power bank only helps if you actually",
      "Your lanyard is your cable no more digging for a cable before heading"
    ],
    "pros": [
      "45W fast charge",
      "Power bank only helps if you actually",
      "Your lanyard is your cable no more digging for a cable before heading",
      "Built-in phone stand keeps your screen propped up for calls"
    ],
    "cons": [
      "Capacity above 100Wh needs airline approval or can't fly at all",
      "Real-world output is usually lower than the advertised mAh figure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-power-banks-under-30-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "INIU Mini Portable Charger",
    "price": "$29.68",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tJgJ3SZlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQD35SQ4?tag=theofficejournal-20",
    "description": "INIU Mini Portable Charger is a strong alternative worth comparing directly against the top pick. Roughly the size of an airpods pro case, this smallest power bank packs 10,000mAh of long lasting power into a tiny, nano footprint. Delivering desktop-grade, rapid speed anywhere, this 45w pd fast charging bank blasts a samsung s26 ultra from 20% to 92% or an iphone 17 pro max to 75% in just 30 minutes.\n\nEvopow 2 Pack Portable Charger lands in a similar spot overall, but the deciding factor between the two is join over 38 million global users who rely on iniu's sleek design and top-tier safety standards.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The mAh figure on the box is measured at the battery's internal voltage, not the 5V your phone actually charges at, so the real usable charge is meaningfully lower than the advertised number suggests.",
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

export const breadcrumbLabel = "Best Power Banks Under $30";
