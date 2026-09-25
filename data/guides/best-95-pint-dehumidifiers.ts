// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Pint Capacity vs Your Actual Room Size",
    "explanation": "Pint capacity describes how many pints of moisture a unit removes per day under standardized AHAM test conditions (65°F and 60% relative humidity), not necessarily your actual room. A 20-pint model suits a small, slightly damp bedroom, while a wet 1,500 square foot basement typically needs 45 to 50 pints. Check the manufacturer's stated square footage coverage against your specific room size and dampness level, not just the pint number alone, since a 'wet' room needs meaningfully more capacity than a 'moderately damp' one at the same square footage."
  },
  {
    "criterion": "Drain Hose vs Pump vs Manual Tank",
    "explanation": "How a dehumidifier gets rid of collected water matters as much as how much it collects: a gravity drain hose is the most reliable option but needs a nearby floor drain or lower elevation to work, while a built-in pump can send water uphill to a sink but adds a component that fails more often than a simple hose. A tank alone requires regular manual emptying, which quickly becomes impractical in a wet space running around the clock. Check your room's actual layout for a nearby drain before assuming any drain method will work as advertised."
  },
  {
    "criterion": "",
    "explanation": "Compressor (refrigerant-based) dehumidifiers work well at typical room temperatures but lose efficiency below about 65°F and can ice up below 40°F, making them a poor fit for an unheated garage or cold basement in winter. Desiccant dehumidifiers use moisture-absorbing material instead of refrigeration, running effectively in cooler spaces where a compressor model would struggle or ice over. Check your space's typical temperature range, not just its humidity level, before choosing between the two technologies."
  },
  {
    "criterion": "Tank Size and How Often You'll Empty It",
    "explanation": "Daily pint removal and tank capacity are two different numbers that both matter: a unit rated to remove 50 pints a day but with only a 10-pint tank will need emptying multiple times daily without a drain hose connected. Check the actual tank size specifically if you don't plan to use continuous drainage, since relying on manual emptying in a wet space quickly becomes impractical with a small tank."
  },
  {
    "criterion": "",
    "explanation": "An auto-restart feature resumes operation automatically after a power outage, important for basements and crawl spaces where you might not notice the unit stopped for days. A built-in humidistat lets you set a target humidity percentage and the unit cycles on and off automatically to maintain it, rather than running continuously and over-drying the air or wasting energy. Check for both features specifically if the unit will run unattended in a space you don't check daily."
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

export const guideSlug = "best-95-pint-dehumidifiers";

export const guideTitle = "The Best 95-Pint Dehumidifiers for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/21VXFjxyg0L._SL500_.jpg";

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
          ""
        ],
        [
          "Standard room or moderate dampness",
          "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft"
        ],
        [
          "Large or wet space",
          "DREO Energy Star 2025 Smart Dehumidifier for Basement"
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
          "DREO Energy Star 2025 Smart Dehumidifier for Basement"
        ],
        [
          "",
          "DREO Energy Star 2025 Smart Dehumidifier for Basement"
        ]
      ]
    }
  },
  {
    "subheading": "Drain Hose vs Pump vs Manual Tank",
    "cards": [
      {
        "label": "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft)",
        "text": "Runs hands-off near a floor drain, the most reliable option if your space has one nearby."
      },
      {
        "label": "",
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
          "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft"
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
        "text": "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft is worth checking against its specific auto-restart and humidistat spec before assuming any unit handles unattended operation well."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're covering a large or wet space and want a built-in pump and higher capacity, where DREO Energy Star 2025 Smart Dehumidifier for Basement justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're covering a small, moderately damp room, where ToLife Dehumidifier already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Pint Capacity vs Your Actual Room Size",
    "description": "Pint capacity describes how many pints of moisture a unit removes per day under standardized AHAM test conditions (65°F and 60% relative humidity), not necessarily your actual room."
  },
  {
    "title": "Drain Hose vs Pump vs Manual Tank",
    "description": "How a dehumidifier gets rid of collected water matters as much as how much it collects: a gravity drain hose is the most reliable option but needs a nearby floor drain or lower elevation to work, while a built-in pump can send water uphill to a sink but adds a component that fails more often than a simple hose."
  },
  {
    "title": "",
    "description": "Compressor (refrigerant-based) dehumidifiers work well at typical room temperatures but lose efficiency below about 65°F and can ice up below 40°F, making them a poor fit for an unheated garage or cold basement in winter."
  },
  {
    "title": "Tank Size and How Often You'll Empty It",
    "description": "Daily pint removal and tank capacity are two different numbers that both matter: a unit rated to remove 50 pints a day but with only a 10-pint tank will need emptying multiple times daily without a drain hose connected."
  },
  {
    "title": "",
    "description": "An auto-restart feature resumes operation automatically after a power outage, important for basements and crawl spaces where you might not notice the unit stopped for days."
  }
];

export const introParagraphs = [
  "Best 95-Pint Dehumidifiers look similar but differ in practice, so the spec sheet hides real gaps.",
  "Every pick here was judged on real pint capacity and drain options, because these separate real capability from claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "95 pint dehumidifier";

export const metaDescription = "A practical comparison of 8 95-pint dehumidifiers, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best 95-Pint Dehumidifiers for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-95-pint-dehumidifiers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft",
    "price": "$154.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21VXFjxyg0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBPQ1VTR?tag=theofficejournal-20",
    "description": "Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft is the top pick in this comparison. This dehumidifier is designed to remove from spaces up to 4,500 sq ft, with a removal capacity of 35 pints per day under standard conditions(max 95 pint at 95°f, 90% RH). This unit is certified, indicating it meets specific energy efficiency guidelines set by the epa, which may contribute to lower energy consumption during operation.\n\nWeighing this against DREO Energy Star 2025 Smart Dehumidifier for Basement, use the included water tank or connect a standard hose (not included) to the built-in port for continuous draining ends up being the detail that matters most for most buyers.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "High-capacity removal for large areas",
      "Certified for efficiency",
      "Convenient drainage options & auto shut-off"
    ],
    "pros": [
      "High-capacity removal for large areas",
      "Certified for efficiency",
      "Convenient drainage options & auto shut-off",
      "Portable design with easy controls"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-95-pint-dehumidifiers-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "DREO Energy Star 2025 Smart Dehumidifier for Basement",
    "price": "$269.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31bGfiQwLPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXY5QQ45?tag=theofficejournal-20",
    "description": "DREO Energy Star 2025 Smart Dehumidifier for Basement is a strong alternative worth comparing directly against the top pick. Powerful 95-pint dehumidifier, fast moisture removal: removes up to 95-pint(95°f, rh90%) of moisture per day with high-efficiency performance. 41db ultra-quiet operation, peaceful comfort day & night: runs at just 41db to provide quiet, uninterrupted humidity in bedrooms, offices, nurseries, and living spaces.\n\n85 gallons) tank keep your space dry for up to 10 hours without constant refills.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Powerful 95-pint dehumidifier, fast moisture removal: removes",
      "Certified, save energy & lower bills: uses 49% less",
      "41db ultra-quiet operation, peaceful comfort day & night: runs"
    ],
    "pros": [
      "Powerful 95-pint dehumidifier, fast moisture removal: removes",
      "Certified, save energy & lower bills: uses 49% less",
      "41db ultra-quiet operation, peaceful comfort day & night: runs",
      "7l large water tank, extended runtime & hassle-free draining"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-95-pint-dehumidifiers-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "AEOCKY 5500 Sq.Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PVrmTchaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1C6HWFF?tag=theofficejournal-20",
    "description": "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D is a strong alternative worth comparing directly against the top pick. Don't fall for competitors' word games. 80 pint/day in the humid mid-summer (95°f, 95%RH); 56 pint/day in the warm, damp basement (86°f, 80%RH)!\n\nGarvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft lands in a similar spot overall, but the deciding factor between the two is breaking industry barriers, one of the first brands to achieve energy star most efficient 2025.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
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
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-95-pint-dehumidifiers-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "120 Pint Dehumidifier for Basement 6000 Sq. Ft with Drain Hose",
    "price": "$237.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lwVXAxeLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJR1GVYR?tag=theofficejournal-20",
    "description": "120 Pint Dehumidifier for Basement 6000 Sq. Ft with Drain Hose is a strong alternative worth comparing directly against the top pick. 120-pint/day dehumidifier for large spaces up to 6,000 sq. The yaufey dehumidifier is up to 30% more efficient than non-energy star models, helping you cut electricity costs without sacrificing performance.\n\nThe gap between this and Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft isn't in the essentials, it shows up in 2 drainage options for easy use: unlike standard dehumidifiers that offer just one drainage method, the yaufey dehumidifier with drain hose provides both manual and continuous drainage options.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "120-pint/day dehumidifier for large spaces up to 6,000 sq",
      "Energy star certified dehumidifier",
      "2 drainage options for easy use"
    ],
    "pros": [
      "120-pint/day dehumidifier for large spaces up to 6,000 sq",
      "Energy star certified dehumidifier",
      "2 drainage options for easy use",
      "Tired of complicated home dehumidifiers"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-95-pint-dehumidifiers-5",
    "rank": 5,
    "badge": "Best Premium Pick",
    "name": "DREO Energy Star 2025 Smart Dehumidifier for Basement",
    "price": "$269.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31OBTBqeJpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GXY1WBCB?tag=theofficejournal-20",
    "description": "DREO Energy Star 2025 Smart Dehumidifier for Basement is the priciest pick in this lineup. Powerful 95-pint dehumidifier, fast moisture removal: removes up to 95-pint(95°f, rh90%) of moisture per day with high-efficiency performance. 41db ultra-quiet operation, peaceful comfort day & night: runs at just 41db to provide quiet, uninterrupted humidity in bedrooms, offices, nurseries, and living spaces.\n\n85 gallons) tank keep your space dry for up to 10 hours without constant refills.\n\nThis one is the right call if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Powerful 95-pint dehumidifier, fast moisture removal: removes",
      "Certified, save energy & lower bills: uses 49% less",
      "41db ultra-quiet operation, peaceful comfort day & night: runs"
    ],
    "pros": [
      "Powerful 95-pint dehumidifier, fast moisture removal: removes",
      "Certified, save energy & lower bills: uses 49% less",
      "41db ultra-quiet operation, peaceful comfort day & night: runs",
      "7l large water tank, extended runtime & hassle-free draining"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-95-pint-dehumidifiers-6",
    "rank": 6,
    "badge": "Best Value",
    "name": "ToLife Dehumidifier",
    "price": "$59.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412SvBqPdfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJQKQYWS?tag=theofficejournal-20",
    "description": "ToLife Dehumidifier is the most affordable pick here that still clears the capability floor for this category. Dehumidifier utilize semi conductor condensation technology, ensuring quiet operation while effectively extracting moisture from the air. The dehumidifiers for home offers a powerful mode that efficiently reduces humidity, allowing for quick and effective moisture elimination.\n\nThe gap between this and Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft isn't in the essentials, it shows up in this dehumidifier comes in 7 different colors that are constantly changing.\n\nGo with this pick if you want a capable pick without paying for headroom you won't use. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Upgrade high efficient dehumidification",
      "Two dehumidifier modes",
      "Seven color options for amblance lighting"
    ],
    "pros": [
      "Upgrade high efficient dehumidification",
      "Two dehumidifier modes",
      "Seven color options for amblance lighting",
      "Automatic shutdown protection"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-95-pint-dehumidifiers-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Dehumidifier, 4500 Sq.Ft Dehumidifier for Basement, with Drain Hose, Humidity",
    "price": "$189.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31RomUBikUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H71FKS98?tag=theofficejournal-20",
    "description": "Ft Dehumidifier for Basement, with Drain Hose, Humidity is a strong alternative worth comparing directly against the top pick. This dehumidifier for basement and home features flexible 45 to 80 pints dehumidification output with an ultra-wide 4500 square feet coverage range, offering premium whole-space moisture control. Ft with 45‐80 pints adjustable dehumidification output this home dehumidifier holds the prestigious energy star 2026 certification.\n\nBuilt‐in high‐precision smart sensors track ambient humidity and auto‐adjust operation to maintain well‐balanced indoor moisture, a detail worth checking closely before choosing between this and Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Dehumidifier for basement and home features flexible 45 to 80 pints",
      "Covering up to 4500 sq.ft with 45‐80 pints adjustable",
      "Built‐in high‐precision smart sensors track ambient humidity and auto‐adjust"
    ],
    "pros": [
      "Dehumidifier for basement and home features flexible 45 to 80 pints",
      "Covering up to 4500 sq.ft with 45‐80 pints adjustable",
      "Built‐in high‐precision smart sensors track ambient humidity and auto‐adjust",
      "Boasting a whisper-quiet 40db operating volume, this whole house"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-95-pint-dehumidifiers-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "4500 Sq. Ft Dehumidifier for Basement Quilt Compressor Dehumidifiers for Home",
    "price": "$189.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31N3hNxG5QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYJCD46Z?tag=theofficejournal-20",
    "description": "Ft Dehumidifier for Basement Quilt Compressor Dehumidifiers for Home is a strong alternative worth comparing directly against the top pick. Massive capacity + wide coverage. At just 40 DB, quieter than a library, this unit lets you work, rest, or sleep without distraction.\n\nDehumidifier built-in intelligence monitors coil frosting and system stress in real time, a detail worth checking closely before choosing between this and Garvee Max 95 Pint Dehumidifier for up to 4,500 Sq Ft.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Reduce humidity - enhance comfort",
      "90° adjustable airflow for targeted drying",
      "Library‐level quiet operation"
    ],
    "pros": [
      "Reduce humidity - enhance comfort",
      "90° adjustable airflow for targeted drying",
      "Library‐level quiet operation",
      "Dehumidifier built-in intelligence monitors coil frosting and system stress"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
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

export const breadcrumbLabel = "Best 95-Pint Dehumidifiers";
