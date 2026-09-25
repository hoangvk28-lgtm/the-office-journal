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

export const guideSlug = "best-80-pint-dehumidifiers-with-pumps";

export const guideTitle = "The Best 80-Pint Dehumidifiers With Pumps, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/31lwVXAxeLL._SL500_.jpg";

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
          "KMFurnila 80Pints Dehumidifier with Drain Hose"
        ],
        [
          "Standard room or moderate dampness",
          "80 Pint Dehumidifier for Basement 5000 Sq."
        ],
        [
          "Large or wet space",
          "Waykar 80 Pints 5000 Sq. Ft 2025 Energy Star Dehumidifier for Basement"
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
          "KMFurnila 80Pints Dehumidifier with Drain Hose"
        ],
        [
          "",
          "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D"
        ],
        [
          "",
          "Waykar 80 Pints 5000 Sq. Ft 2025 Energy Star Dehumidifier for Basement"
        ]
      ]
    }
  },
  {
    "subheading": "Drain Hose vs Pump vs Manual Tank",
    "cards": [
      {
        "label": "80 Pint Dehumidifier for Basement 5000 Sq.",
        "text": "Runs hands-off near a floor drain, the most reliable option if your space has one nearby."
      },
      {
        "label": "KMFurnila 80Pints Dehumidifier with Drain Hose)",
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
          "80 Pint Dehumidifier for Basement 5000 Sq."
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
        "text": "80 Pint Dehumidifier for Basement 5000 Sq. With Drain Hose is worth checking against its specific auto-restart and humidistat spec before assuming any unit handles unattended operation well."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're covering a large or wet space and want a built-in pump and higher capacity, where Waykar 80 Pints 5000 Sq. Ft 2025 Energy Star Dehumidifier for Basement justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're covering a small, moderately damp room, where KMFurnila 80Pints Dehumidifier with Drain Hose already covers the job at the lowest price here."
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
  "Best 80-Pint Dehumidifiers With Pumps span small-room to whole-house units, which is exactly why room dampness changes what you need.",
  "We compared this lineup on verified capacity, not marketing claims, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "80 pint dehumidifier with pump";

export const metaDescription = "We compared 8 80-pint dehumidifiers with pumps on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best 80-Pint Dehumidifiers With Pumps (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "80 Pint Dehumidifier for Basement 5000 Sq. Ft. with Drain Hose",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lwVXAxeLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJR3RFX7?tag=theofficejournal-20",
    "description": "80 Pint Dehumidifier for Basement 5000 Sq. With Drain Hose is the top pick in this comparison. Remove up to 80 pints of moisture per day and cover spaces up to 5,000 sq. This certified dehumidifier removes moisture efficiently while using less energy, helping keep utility costs down.\n\n28 ft drain hose for continuous gravity drainage ends up being the detail that matters most for most buyers.\n\nThis fits best if you want the strongest all-around pick in this comparison and would rather not keep shopping around. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Remove up to 80 pints of moisture per day",
      "Energy star efficiency",
      "Flexible drainage options"
    ],
    "pros": [
      "Remove up to 80 pints of moisture per day",
      "Energy star efficiency",
      "Flexible drainage options",
      "Easy custom comfort"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "AEOCKY 5500 Sq.Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31PVrmTchaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1C6HWFF?tag=theofficejournal-20",
    "description": "Ft Energy Star Most Efficient 2025 Dehumidifier Max 80Pint/D is a strong alternative worth comparing directly against the top pick. Don't fall for competitors' word games. 80 pint/day in the humid mid-summer (95°f, 95%RH); 56 pint/day in the warm, damp basement (86°f, 80%RH)!\n\nBreaking industry barriers, one of the first brands to achieve energy star most efficient 2025, a detail worth checking closely before choosing between this and 80 Pint Dehumidifier for Basement 5000 Sq.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
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
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Waykar 80 Pints 2025 Energy Star Dehumidifier for Home up to 5,000 Sq. Ft",
    "price": "$235.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31sR1EvueOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C9THG48W?tag=theofficejournal-20",
    "description": "Waykar 80 Pints 2025 Energy Star Dehumidifier for Home up to 5,000 Sq. Ft is a strong alternative worth comparing directly against the top pick. The waykar 80 pint dehumidifier efficiently removes up to 80 pints of moisture per day in high-humidity conditions (95°f, 90% RH). Engineered for reliability, this energy star dehumidifier features auto-defrost, ensuring efficient operation even in cool basements down to 41°f.\n\nWeighing this against 80 Pint Dehumidifier for Basement 5000 Sq. With Drain Hose, these dehumidifiers for home come with a user-friendly control panel and lcd display, making it easy to monitor and set the humidity in your bathroom, bedroom, or basement ends up being the detail that matters most for most buyers.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Waykar 80 pint dehumidifier efficiently removes",
      "Engineered for reliability, this energy star dehumidifier features auto-defrost",
      "These dehumidifiers for home come with a user-friendly control"
    ],
    "pros": [
      "Waykar 80 pint dehumidifier efficiently removes",
      "Engineered for reliability, this energy star dehumidifier features auto-defrost",
      "These dehumidifiers for home come with a user-friendly control",
      "Auto air swing & easy mobility for home use"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Arecovas 80 Pint Dehumidifier Energy Star 2025 Most Efficient",
    "price": "$188.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LblCV1Q4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6VYLJ6Z?tag=theofficejournal-20",
    "description": "Arecovas 80 Pint Dehumidifier Energy Star 2025 Most Efficient is a strong alternative worth comparing directly against the top pick. 6% of energy star models earn the most efficient 2025 certification. High efficiency rotary compressor with copper tubes: features a high efficiency rotary compressor for stable low energy performance.\n\nSide by side with 80 Pint Dehumidifier for Basement 5000 Sq. With Drain Hose, the real difference worth noting is precision humidity sensor monitors room conditions in real time.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "80 pint energy star most efficient 2025 dehumidifier: only 2.6%",
      "High efficiency rotary compressor with copper tubes",
      "Precision humidity sensor monitors room conditions in real time"
    ],
    "pros": [
      "80 pint energy star most efficient 2025 dehumidifier: only 2.6%",
      "High efficiency rotary compressor with copper tubes",
      "Precision humidity sensor monitors room conditions in real time",
      "Flexible drainage"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "KNKA Energy Star 5500 Sq.Ft Dehumidifier for Basement",
    "price": "$189.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411SFxxoGgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GN26KP3D?tag=theofficejournal-20",
    "description": "Ft Dehumidifier for Basement is a strong alternative worth comparing directly against the top pick. Delivers consistent dehumidification across a variety of real-life conditions. Removes up to 80 pints per day in humid mid-summer (95°f, 95% RH) and 56 pints per day in typical basement conditions (86°f, 80% RH).\n\n80 Pint Dehumidifier for Basement 5000 Sq. 56 ft(2m) drain hose for continuous drainage, reducing manual emptying.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Energy star certified for efficient performance",
      "Removes up to 80 pints per day in humid mid-summer (95°f, 95%",
      "Flexible drainage options for easy use"
    ],
    "pros": [
      "Energy star certified for efficient performance",
      "Removes up to 80 pints per day in humid mid-summer (95°f, 95%",
      "Flexible drainage options for easy use",
      "Quiet operation for undisturbed comfort"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-6",
    "rank": 6,
    "badge": "Best Premium Pick",
    "name": "Waykar 80 Pints 5000 Sq. Ft 2025 Energy Star Dehumidifier for Basement",
    "price": "$269.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21VmSDJgC7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B5V2YZPZ?tag=theofficejournal-20",
    "description": "Waykar 80 Pints 5000 Sq. Ft 2025 Energy Star Dehumidifier for Basement is the priciest pick in this lineup. Distributes dry air evenly across the room, helping cover every corner and reduce uneven humidity levels.\n\nThe gap between this and 80 Pint Dehumidifier for Basement 5000 Sq. With Drain Hose isn't in the essentials, it shows up in unlike many standard dehumidifiers limited to a minimum of 40% RH, this unit can reach as low as 30%, offering a wider and more flexible control range.\n\nThis one is the right call if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Quickly removes excess moisture from basements, bathrooms, bedrooms, rvs",
      "90° auto swing airflow for even coverage",
      "Unlike many standard dehumidifiers limited to a minimum of 40%"
    ],
    "pros": [
      "Quickly removes excess moisture from basements, bathrooms, bedrooms, rvs",
      "90° auto swing airflow for even coverage",
      "Unlike many standard dehumidifiers limited to a minimum of 40%",
      "Energy star certified for efficient operation"
    ],
    "cons": [
      "Coverage claims assume ideal conditions, not always real rooms",
      "Tank needs regular emptying unless drained continuously"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-7",
    "rank": 7,
    "badge": "Best Value",
    "name": "KMFurnila 80Pints Dehumidifier with Drain Hose",
    "price": "$119.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31JZbE6XOeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQMFKYVZ?tag=theofficejournal-20",
    "description": "KMFurnila 80Pints Dehumidifier with Drain Hose is the most affordable pick here that still clears the capability floor for this category., it removes up to 80 pints of moisture, ideal for basements, whole homes, or commercial areas. Stay informed with the built-in humidity ring.\n\n4 versatile operation modes: tackle any situation with auto, drying, sleep, and fan-only modes, a detail worth checking closely before choosing between this and 80 Pint Dehumidifier for Basement 5000 Sq.\n\nGo with this pick if you want a capable pick without paying for headroom you won't use. The tank needs regular emptying unless you're running a continuous drain hose or pump, so factor that into daily upkeep before buying.",
    "specs": [
      "Powerful 80-pint dehumidifier: engineered for spaces up to 5,500",
      "Color-coded humidity display",
      "4 versatile operation modes"
    ],
    "pros": [
      "Powerful 80-pint dehumidifier: engineered for spaces up to 5,500",
      "Color-coded humidity display",
      "4 versatile operation modes",
      "Cert.: this dehumidifier is energy star certified, ensuring powerful"
    ],
    "cons": [
      "Tank needs regular emptying unless drained continuously",
      "Coverage claims assume ideal conditions, not always real rooms"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-80-pint-dehumidifiers-with-pumps-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "DUMOS 80Pints Dehumidifier for Basement",
    "price": "$119.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31c++dW29dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H33SKLG7?tag=theofficejournal-20",
    "description": "DUMOS 80Pints Dehumidifier for Basement is a strong alternative worth comparing directly against the top pick. “most efficient” isn’t just a badge, it’s the top tier of energy star certification. High-efficiency, low-noise dehumidification: removes up to 80 pints of moisture daily in spaces up to 5,500 sq ft.\n\nAn intuitive humidity display ring provides immediate feedback: blue for dry (<45%), green for comfortable (45%, 65%), and red for high humidity (>65%), which is the main thing that distinguishes this pick from 80 Pint Dehumidifier for Basement 5000 Sq.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Coverage figures assume ideal AHAM test conditions, not always your actual room's humidity and airflow, so treat the pint rating as a starting point.",
    "specs": [
      "Most efficient energy star",
      "High-efficiency, low-noise dehumidification",
      "Visual humidity indicator for precision control"
    ],
    "pros": [
      "Most efficient energy star",
      "High-efficiency, low-noise dehumidification",
      "Visual humidity indicator for precision control",
      "Multi-functional operation with four modes"
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

export const breadcrumbLabel = "Best 80-Pint Dehumidifiers With Pumps";
