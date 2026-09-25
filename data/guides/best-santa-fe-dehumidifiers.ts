// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Pint Capacity vs Your Actual Room Size",
    "explanation": "The pint rating on a dehumidifier reflects lab-tested moisture removal under AHAM's standard conditions, which rarely match your actual room's humidity level or airflow. As a rough guide, 20 pints suits a bedroom or space up to about 1,500 square feet if only slightly damp, while a wet basement of similar size often needs 45 to 50 pints. Match the manufacturer's coverage claim to both your square footage and how damp the space actually feels, not the pint number in isolation."
  },
  {
    "criterion": "Drain Hose vs Pump vs Manual Tank",
    "explanation": "A gravity drain hose is continuous, passive, and reliable, but only works if you can position the unit near a floor drain or somewhere lower than the hose outlet. A built-in pump can push water uphill to a sink or window, useful in a basement with no nearby drain, but pumps have a somewhat higher failure rate than simple gravity drains over time. A manual tank needs regular emptying and isn't practical for a wet room running continuously. Match the drain method to your specific room's layout, not just whichever option sounds more convenient on paper."
  },
  {
    "criterion": "",
    "explanation": "Temperature, not just humidity, determines which dehumidifier technology actually works in your space: compressor models are the standard choice for typical room temperatures but lose efficiency and can ice up below roughly 40 to 65°F, while desiccant models keep working in cooler, unheated spaces where a compressor unit would struggle. If your space regularly drops below 65°F, like an unheated garage or crawl space in cooler months, check specifically for a desiccant model rather than assuming any dehumidifier handles cold conditions equally well."
  },
  {
    "criterion": "Tank Size and How Often You'll Empty It",
    "explanation": "A dehumidifier with a small tank, under about 15 pints of water capacity, needs to be emptied noticeably more often than one with a larger tank, which matters a lot if you're not running a continuous drain hose. In a wet room pulling several pints of moisture per day, a small tank can fill up multiple times daily without a drain connection. Check the actual tank capacity in the spec sheet, not just the daily pint-removal rating, if you plan to rely on manual emptying rather than continuous drainage."
  },
  {
    "criterion": "",
    "explanation": "Two features matter more than they seem for a dehumidifier running unattended: auto-restart brings the unit back on after a power blip without you having to notice and manually restart it, and a built-in humidistat automatically cycles the unit to hold a target humidity level instead of running continuously. Both matter most in a basement or crawl space you don't check every day, so verify both are included rather than assuming any dehumidifier has them."
  }
];

export const faq = [
  {
    "q": "What size dehumidifier do I need for my room?",
    "a": "As a rough guide, a 20-pint model suits a bedroom or space up to about 1,500 square feet if only slightly damp, while a wet basement of similar size often needs 45 to 50 pints; match the manufacturer's coverage claim to both your square footage and how damp the space feels."
  },
  {
    "q": "Should I get a dehumidifier with a pump or just a drain hose?",
    "a": "A gravity drain hose is simpler and more reliable but needs a nearby floor drain or lower elevation to work, while a pump can send water uphill to a sink, which matters most in a basement with no nearby drain; check your room's actual layout before choosing."
  },
  {
    "q": "Can I use a dehumidifier in a cold garage or basement?",
    "a": "A standard compressor dehumidifier loses efficiency below about 65°F and can ice up below 40°F, so a cold, unheated space needs a desiccant model instead, which keeps working effectively in cooler conditions."
  },
  {
    "q": "How often do I need to empty a dehumidifier's tank?",
    "a": "It depends on both the tank size and how much moisture your room actually produces daily; a small tank under 15 pints in a wet room can fill multiple times a day without a drain hose connected, so check tank capacity specifically if you're not running continuous drainage."
  },
  {
    "q": "Is a bigger dehumidifier always better?",
    "a": "An oversized unit for a small room can over-dry the air and waste energy cycling on and off more than necessary; match the pint capacity to your actual room size and dampness level rather than buying the largest model available."
  },
  {
    "q": "Does a dehumidifier help with mold?",
    "a": "Yes, keeping indoor humidity below roughly 50% meaningfully slows mold growth, but a dehumidifier addresses the humidity that feeds existing mold, it doesn't remove mold that's already present, so active mold growth still needs direct cleaning or remediation."
  }
];

export const guideSlug = "best-santa-fe-dehumidifiers";

export const guideTitle = "The Best Santa Fe Dehumidifiers for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/31gTrjiY-bL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Room Size and Dampness",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D"
        ],
        [
          "Standard room or moderate dampness",
          ""
        ],
        [
          "Large or wet space",
          "Ventilating Dehumidifier by Santa Fe"
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
          "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D"
        ],
        [
          "",
          "Santa Fe Compact70 Complete Crawl Space Kit"
        ],
        [
          "",
          "Ventilating Dehumidifier by Santa Fe"
        ]
      ]
    }
  },
  {
    "subheading": "Drain Hose vs Pump vs Manual Tank",
    "cards": [
      {
        "label": "",
        "text": "Runs hands-off near a floor drain, the most reliable option if your space has one nearby."
      },
      {
        "label": "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D)",
        "text": "No drain needed, but requires regular emptying, more practical in a less humid space."
      }
    ],
    "note": "Match the drain method to whether your room actually has a nearby floor drain, not to which sounds more convenient."
  },
  {
    "subheading": "By Technology: Compressor vs Desiccant",
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
          "Cold, unheated space below 65°F",
          "Look specifically for a desiccant model"
        ]
      ]
    }
  },
  {
    "subheading": "For a Basement or Crawl Space Specifically",
    "cards": [
      {
        "label": "",
        "text": "Auto-restart after a power outage and a built-in humidistat, since these spaces often run unattended for days at a time."
      },
      {
        "label": "",
        "text": "Santa Fe Compact70 Dehumidifier is worth checking against its specific auto-restart and humidistat spec before assuming any unit handles unattended operation well."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're covering a large or wet space and want a built-in pump and higher capacity, where Ventilating Dehumidifier by Santa Fe justifies the extra cost."
      },
      {
        "label": "",
        "text": "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Pint Capacity vs Your Actual Room Size",
    "description": "The pint rating on a dehumidifier reflects lab-tested moisture removal under AHAM's standard conditions, which rarely match your actual room's humidity level or airflow."
  },
  {
    "title": "Drain Hose vs Pump vs Manual Tank",
    "description": "A gravity drain hose is continuous, passive, and reliable, but only works if you can position the unit near a floor drain or somewhere lower than the hose outlet."
  },
  {
    "title": "",
    "description": "Temperature, not just humidity, determines which dehumidifier technology actually works in your space: compressor models are the standard choice for typical room temperatures but lose efficiency and can ice up below roughly 40 to 65°F, while desiccant models keep working in cooler, unheated spaces where a compressor unit would struggle."
  },
  {
    "title": "Tank Size and How Often You'll Empty It",
    "description": "A dehumidifier with a small tank, under about 15 pints of water capacity, needs to be emptied noticeably more often than one with a larger tank, which matters a lot if you're not running a continuous drain hose."
  },
  {
    "title": "",
    "description": "Two features matter more than they seem for a dehumidifier running unattended: auto-restart brings the unit back on after a power blip without you having to notice and manually restart it, and a built-in humidistat automatically cycles the unit to hold a target humidity level instead of running continuously."
  }
];

export const introParagraphs = [
  "Best Santa Fe Dehumidifiers span small-room to whole-house units, which is exactly why room dampness changes what you need.",
  "We compared this lineup on honest coverage and drain reliability, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "santa fe dehumidifier";

export const metaDescription = "How 8 santa fe dehumidifiers compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Santa Fe Dehumidifiers for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-santa-fe-dehumidifiers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Santa Fe Compact70 Dehumidifier",
    "price": "$1,628.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31gTrjiY-bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07HCLL7FY?tag=theofficejournal-20",
    "description": "Santa Fe Compact70 Dehumidifier is the top pick in this comparison. Auto restart allows the dehumidifier to automatically restart after a power outage.\n\nSanta Fe Compact70 Complete Crawl Space Kit covers similar ground, though engineered for low temperature operation and the air flow issues that crawl spaces present is what tips the choice one way or the other.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Auto restart allows the dehumidifier to automatically restart after",
      "Unmatched 6-year warranty",
      "Engineered for low temperature operation and the air flow"
    ],
    "pros": [
      "Auto restart allows the dehumidifier to automatically restart after",
      "Unmatched 6-year warranty",
      "Engineered for low temperature operation and the air flow",
      "Simple humidity control"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-santa-fe-dehumidifiers-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Santa Fe Compact70 Complete Crawl Space Kit",
    "price": "$1,659.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41d-ftB7VML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B014FV14UO?tag=theofficejournal-20",
    "description": "Santa Fe Compact70 Complete Crawl Space Kit is a strong alternative worth comparing directly against the top pick. Two-stage air filtration - merv 13.\n\nHeld up against Santa Fe Compact70 Dehumidifier, both cover the basics equally well, what actually separates them is low operating oemperature down to 49 degrees f.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Simple dial humidity control",
      "Two-stage air filtration - merv",
      "Built-in humidistat"
    ],
    "pros": [
      "Simple dial humidity control",
      "Two-stage air filtration - merv",
      "Built-in humidistat",
      "Low operating oemperature down to 49 degrees f"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-santa-fe-dehumidifiers-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Santa Fe UltraMD33 Dehumidifier",
    "price": "$1,845.27",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31KvHLj8UZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DS2VPWL3?tag=theofficejournal-20",
    "description": "Santa Fe UltraMD33 Dehumidifier is a strong alternative worth comparing directly against the top pick. The ultra series md33 is the first true in-wall dehumidifier designed to drain directly into a hub-drain or plumbing line making it truly a hands-off dehumidification system. Energy efficient and runs independent of the HVAC system, removing up to 33 pints of water a day.\n\nWeighing this against Santa Fe Compact70 Dehumidifier, sized for up to 1,200 square feet, the ultramd33 is the well suited solution to control moisture in multi-family applications and features a digital RH control behind a tamper-proof cover ends up being the detail that matters most for most buyers.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Ultra series md33 is the first true in-wall dehumidifier",
      "Energy efficient and runs independent of the HVAC system, removing up to 33 pints",
      "Sized for up to 1,200 square feet, the ultramd33"
    ],
    "pros": [
      "Ultra series md33 is the first true in-wall dehumidifier",
      "Energy efficient and runs independent of the HVAC system, removing up to 33 pints",
      "Sized for up to 1,200 square feet, the ultramd33",
      "Unit can be hardwired into existing electrical or directly"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-santa-fe-dehumidifiers-4",
    "rank": 4,
    "badge": "Best Premium Pick",
    "name": "Ventilating Dehumidifier by Santa Fe",
    "price": "$2,682.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413jPXPMe9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV4N7HQL?tag=theofficejournal-20",
    "description": "Ventilating Dehumidifier by Santa Fe is the priciest pick in this lineup. Eliminates up to 100 pints of moisture daily in AHAM conditions (80°f, 60% RH) to safeguard your home from mold, rot, and moisture damage. An 8-inch port mixes indoor pollutants with outdoor air, aiding compliance with ASHRAE ventilation standards without additional equipment.\n\nWeighing this against Santa Fe Compact70 Dehumidifier, equipped with merv-13 filtration ends up being the detail that matters most for most buyers.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "High moisture removal",
      "Integrated fresh-air ventilation",
      "Merv-13 filtration"
    ],
    "pros": [
      "High moisture removal",
      "Integrated fresh-air ventilation",
      "Merv-13 filtration",
      "385 cfm blower circulates conditioned air through lengthy 8-inch"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-santa-fe-dehumidifiers-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Santa Fe Ultra70 Dehumidifier",
    "price": "$1,900.56",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3143biKmzqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DRWFC4BN?tag=theofficejournal-20",
    "description": "Santa Fe Ultra70 Dehumidifier is a strong alternative worth comparing directly against the top pick. The santa fe ultra70 is the first compact, high-efficiency, whole house ventilating dehumidifier designed to fit in tight, low-clearance applications. The unit removes up to 70 pints per day, is exceeds department of energy standards and provides effective air filtration (merv-13).\n\nThe santa fe ultra70 it ideal for a small home, condo, or apartment - basements, crawl spaces, garages, home theatres, workshos, exercise rooms, commercial, which is the main thing that distinguishes this pick from Santa Fe Compact70 Dehumidifier.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Santa fe ultra70 is the first compact, high-efficiency, whole",
      "Unit removes up to 70 pints per day",
      "Santa fe ultra70 it ideal for a small home"
    ],
    "pros": [
      "Santa fe ultra70 is the first compact, high-efficiency, whole",
      "Unit removes up to 70 pints per day",
      "Santa fe ultra70 it ideal for a small home",
      "Santa fe ultra70 has an innovative cabinet design"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-santa-fe-dehumidifiers-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Airzentti 155 Pint Commercial Dehumidifier with Pump and Drain",
    "price": "$529.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41h2rgbsCOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGYBZN35?tag=theofficejournal-20",
    "description": "Airzentti 155 Pint Commercial Dehumidifier with Pump and Drain is a strong alternative worth comparing directly against the top pick. 5m) power cord, 6-inch (150mm) air duct collar diamater. This energy efficient dehumidifier is energy star certified and tuv compliant.\n\nSet next to Santa Fe Compact70 Dehumidifier, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Commercial grade dehumidifier",
      "Multiple applications",
      "Built-in functions"
    ],
    "pros": [
      "Commercial grade dehumidifier",
      "Multiple applications",
      "Built-in functions",
      "Smart whole house dehumidifiers for home is ideal"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-santa-fe-dehumidifiers-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Santa Fe Advance DRY110 Dehumidifier",
    "price": "$2,475.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fifa7ocZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKNNXJWL?tag=theofficejournal-20",
    "description": "Santa Fe Advance DRY110 Dehumidifier is a strong alternative worth comparing directly against the top pick. Ducting options - auto restart -dew point cut-out - patented efficiency capacity coil optimization - molded base.\n\nSet next to Santa Fe Compact70 Dehumidifier, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Ducting options - auto restart -dew point cut-out"
    ],
    "pros": [
      "Ducting options - auto restart -dew point cut-out",
      "Straightforward setup based on the listed specs",
      "Covers the core feature set for this category"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-santa-fe-dehumidifiers-8",
    "rank": 8,
    "badge": "Best Value",
    "name": "AEOCKY 5500 Sq.Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PVrmTchaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1C6HWFF?tag=theofficejournal-20",
    "description": "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D is the most affordable pick here that still clears the capability floor for this category. Don't fall for competitors' word games. 80 pint/day in the humid mid-summer (95°f, 95%RH); 56 pint/day in the warm, damp basement (86°f, 80%RH)!\n\nSanta Fe Compact70 Dehumidifier covers similar ground, though breaking industry barriers, one of the first brands to achieve energy star most efficient 2025 is what tips the choice one way or the other.\n\nChoose this if you want a capable pick without paying for headroom you won't use. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Don't fall for competitors' word games",
      "80 pint/day in the humid mid-summer (95°f, 95%RH)",
      "Top-rated efficiency - save more energy"
    ],
    "pros": [
      "Don't fall for competitors' word games",
      "80 pint/day in the humid mid-summer (95°f, 95%RH)",
      "Top-rated efficiency - save more energy",
      "Powered by exceptional core components"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-dehumidifiers",
    "title": "Best Dehumidifiers"
  },
  {
    "href": "/guide/best-dehumidifiers-for-basements",
    "title": "Best Dehumidifiers for Basements"
  },
  {
    "href": "/guide/best-portable-air-conditioners",
    "title": "Best Portable Air Conditioners"
  }
];

export const breadcrumbLabel = "Best Santa Fe Dehumidifiers";
