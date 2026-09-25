// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "BTU vs SACC, Which Rating Actually Predicts Cooling",
    "explanation": "A portable AC's advertised BTU figure and its real-world SACC rating are often two very different numbers, since ASHRAE BTU is measured under ideal lab conditions while SACC accounts for the heat the unit's own compressor adds back into the room you're trying to cool. This gap can be 20 to 40%, meaning a unit's actual cooling power is meaningfully lower than the headline BTU suggests. Check the spec sheet specifically for a SACC number, since a listing that only advertises ASHRAE BTU is likely quoting the more flattering figure."
  },
  {
    "criterion": "",
    "explanation": "A single-hose unit draws air from inside your room to cool its condenser, then exhausts that warm air outside, which creates negative pressure that pulls hot, humid outside air back in through door and window gaps, reducing real efficiency. A dual-hose unit uses a separate dedicated intake hose for the condenser, avoiding that negative-pressure effect entirely, which is why a dual-hose unit's SACC rating is typically significantly higher than a single-hose unit with the same ASHRAE BTU rating. Single-hose units are usually adequate up to about 10,000-12,000 BTU; above that, a dual-hose design is worth the added cost and setup complexity."
  },
  {
    "criterion": "Room Size Sizing: The 20 BTU Per Square Foot Rule",
    "explanation": "Sizing a portable AC starts with roughly 20 BTU per square foot under typical conditions, adjusted up around 10% for a sun-facing room and down about 10% for a shaded one, plus roughly 600 BTU for each additional occupant beyond two and about 10% more per extra foot of ceiling height above 8 feet. This gives a real target BTU figure to compare against a unit's SACC rating, not its inflated ASHRAE number, since the SACC figure is what actually predicts whether the unit cools your specific room adequately."
  },
  {
    "criterion": "Venting Requirements and Window Kit Compatibility",
    "explanation": "Nearly every portable AC, single-hose or dual-hose, still needs to vent hot air somewhere, typically through an included window kit that seals around a sliding or crank window; a ventless (evaporative) unit works differently and isn't as effective as a true refrigerant-based portable AC in humid climates. Check the included window kit's compatibility with your specific window type before buying, since sliding windows, casement windows, and hung windows each need different adapter designs. A unit marketed as 'no window needed' is usually a smaller evaporative cooler, not a substitute for real refrigerant-based cooling in a humid room."
  },
  {
    "criterion": "Noise Level and Where You'll Actually Use It",
    "explanation": "Because a portable AC's compressor runs inside the room being cooled, rather than outdoors like a window or split unit, noise level is a bigger practical concern than with other AC types, with 50 to 60+ decibels being typical depending on the model. Check the manufacturer's specific decibel rating and cross-reference it against independent reviews before buying for a bedroom or other noise-sensitive space, since compressor hum is a frequent real-world complaint that spec sheets sometimes understate."
  }
];

export const faq = [
  {
    "q": "What size portable AC do I need for my room?",
    "a": "A practical starting point is roughly 20 BTU per square foot under standard conditions, adjusted up about 10% for a sunny room and down 10% for a shaded one, plus about 600 BTU per person beyond two occupants; compare this target against a unit's SACC rating, not the inflated ASHRAE BTU number."
  },
  {
    "q": "What's the difference between BTU and SACC ratings?",
    "a": "The BTU figure is usually the ASHRAE rating, measured under ideal lab conditions, while SACC (Seasonally Adjusted Cooling Capacity) is the real-world figure required by the Department of Energy that accounts for heat the unit's own motor adds back into the room; SACC is typically 20 to 40% lower than the headline BTU number."
  },
  {
    "q": "Should I get a single-hose or dual-hose portable AC?",
    "a": "Single-hose units are adequate and cheaper for rooms needing up to about 10,000-12,000 BTU, but they pull replacement air from cracks around doors and windows, reducing efficiency; dual-hose units avoid that negative-pressure effect and deliver more real cooling, worth the extra cost for larger rooms or hotter climates."
  },
  {
    "q": "Do all portable air conditioners need a window for venting?",
    "a": "Nearly all effective refrigerant-based portable ACs need to vent hot air outside through an included window kit; units marketed as 'no window needed' are typically much less powerful evaporative coolers, not a substitute for real air conditioning in a humid room."
  },
  {
    "q": "How loud are portable air conditioners?",
    "a": "Typical noise levels run 50 to 60+ decibels since the compressor sits inside the room with you, louder than a window or split unit whose compressor is outdoors; check the manufacturer's specific decibel rating and independent reviews if noise matters for a bedroom or quiet space."
  },
  {
    "q": "Can a portable AC also work as a dehumidifier?",
    "a": "Many portable ACs include a dehumidify-only mode that removes moisture without running the cooling function fully, useful in humid but not necessarily hot conditions, though a dedicated dehumidifier is generally more efficient at moisture removal alone."
  }
];

export const guideSlug = "best-windowless-portable-air-conditioners";

export const guideTitle = "The Best Windowless Portable Air Conditioners for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/41wlWqYjSDL._SL500_.jpg";

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
          "Windowless Portable Air Conditioners Fan"
        ],
        [
          "",
          "Windowless Portable Air Conditioner for Room"
        ],
        [
          "",
          "DREO Portable Air Conditioner 318S"
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
          "Windowless Portable Air Conditioners Fan"
        ],
        [
          "",
          "Air Choice 10000 BTU Portable Air Conditioners"
        ],
        [
          "",
          "DREO Portable Air Conditioner 318S"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Windowless Portable Air Conditioners Fan)",
        "text": "Simpler and cheaper, adequate for rooms up to about 10,000-12,000 BTU, but loses some efficiency from negative room pressure."
      },
      {
        "label": "DREO Portable Air Conditioner 318S)",
        "text": "Avoids negative pressure entirely for meaningfully better real (SACC) cooling, worth it for larger rooms or hotter climates."
      }
    ],
    "note": "For rooms needing 12,000+ BTU of real cooling, dual-hose is generally worth the extra cost."
  },
  {
    "subheading": "By SACC vs ASHRAE BTU Rating",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "Standard room, verify the SACC figure",
          "Windowless Portable Air Conditioner for Room"
        ],
        [
          "Always check SACC, not just the headline BTU",
          "Compare the SACC rating specifically before assuming cooling power"
        ]
      ]
    }
  },
  {
    "subheading": "For a Bedroom or Noise-Sensitive Space Specifically",
    "cards": [
      {
        "label": "",
        "text": "A specific decibel rating at standard operating speed, since compressor noise is one of the most common complaints about portable AC units."
      },
      {
        "label": "",
        "text": "Windowless Portable Air Conditioner for Room is worth checking against its specific decibel rating before assuming any unit is quiet enough for a bedroom."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're cooling a large room and want dual-hose efficiency and higher real cooling power, where DREO Portable Air Conditioner 318S justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're cooling a small room or bedroom, where Windowless Portable Air Conditioners Fan already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "BTU vs SACC, Which Rating Actually Predicts Cooling",
    "description": "A portable AC's advertised BTU figure and its real-world SACC rating are often two very different numbers, since ASHRAE BTU is measured under ideal lab conditions while SACC accounts for the heat the unit's own compressor adds back into the room you're trying to cool."
  },
  {
    "title": "",
    "description": "A single-hose unit draws air from inside your room to cool its condenser, then exhausts that warm air outside, which creates negative pressure that pulls hot, humid outside air back in through door and window gaps, reducing real efficiency."
  },
  {
    "title": "Room Size Sizing: The 20 BTU Per Square Foot Rule",
    "description": "Sizing a portable AC starts with roughly 20 BTU per square foot under typical conditions, adjusted up around 10% for a sun-facing room and down about 10% for a shaded one, plus roughly 600 BTU for each additional occupant beyond two and about 10% more per extra foot of ceiling height above 8 feet."
  },
  {
    "title": "Venting Requirements and Window Kit Compatibility",
    "description": "Nearly every portable AC, single-hose or dual-hose, still needs to vent hot air somewhere, typically through an included window kit that seals around a sliding or crank window; a ventless (evaporative) unit works differently and isn't as effective as a true refrigerant-based portable AC in humid climates."
  },
  {
    "title": "Noise Level and Where You'll Actually Use It",
    "description": "Because a portable AC's compressor runs inside the room being cooled, rather than outdoors like a window or split unit, noise level is a bigger practical concern than with other AC types, with 50 to 60+ decibels being typical depending on the model."
  }
];

export const introParagraphs = [
  "Best Windowless Portable Air Conditioners cover a wide BTU range. That means marketing copy alone is risky.",
  "This roundup weighs true BTU rating and venting needs, given that marketing copy tends to obscure this."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "portable air conditioner windowless";

export const metaDescription = "A practical comparison of 8 windowless portable air conditioners, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Windowless Portable Air Conditioners for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-windowless-portable-air-conditioners-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Windowless Portable Air Conditioner for Room",
    "price": "$111.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wlWqYjSDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9F9151J?tag=theofficejournal-20",
    "description": "Windowless Portable Air Conditioner for Room is the top pick in this comparison. Air conditioner portable combines bernoulli's principle and coanda effect for smooth, and even airflow. In cooling mode, the ventless portable air conditioner generates a powerful airflow of 1350 cfm.\n\nWindowless Portable Air Conditioners Fan is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Air conditioner portable combines bernoulli's principle and coanda effect",
      "Rapid cooling"
    ],
    "pros": [
      "Air conditioner portable combines bernoulli's principle and coanda effect",
      "Rapid cooling",
      "Straightforward setup based on the listed specs"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-windowless-portable-air-conditioners-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Windowless Portable Air Conditioners Fan",
    "price": "$157.10",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Pp1emcqjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVXQBRHK?tag=theofficejournal-20",
    "description": "Windowless Portable Air Conditioners Fan is a strong alternative worth comparing directly against the top pick. 3-in-1 evaporative air cooler : beat the summer heat with our 3-in-1 evaporative air cooler! Advanced cooling technology for maximum efficiency:experience instant relief with our advanced portable air cooler.\n\nWindowless Portable Air Conditioner for Room covers similar ground, though no hoses or window installation needed, just unpack and use is what tips the choice one way or the other.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "3-in-1 evaporative air cooler",
      "Advanced cooling technology for maximum efficiency:experience instant relief",
      "Portable and plug-and-play"
    ],
    "pros": [
      "3-in-1 evaporative air cooler",
      "Advanced cooling technology for maximum efficiency:experience instant relief",
      "Portable and plug-and-play",
      "36db cooling"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-windowless-portable-air-conditioners-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Air Choice 10000 BTU Portable Air Conditioners",
    "price": "$249.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31q7b-TQHPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBB9P6SY?tag=theofficejournal-20",
    "description": "Air Choice 10000 BTU Portable Air Conditioners is a strong alternative worth comparing directly against the top pick. Powerful 10,000 BTU cooling: with 10,000 BTU (ASHRAE) cooling capacity, this portable air conditioner cools rooms up to 450 sq. This portable ac unit with built-in sleep mode ensures quiet operation for restful nights, while the 24-hour timer lets you schedule cooling to fit your routine.\n\nThis portable ac comes with a complete window kit and exhaust hose, just attach and go, a detail worth checking closely before choosing between this and Windowless Portable Air Conditioner for Room.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Powerful 10,000 BTU cooling: with 10,000 BTU (ASHRAE) cooling",
      "Sleep-friendly design",
      "No-drill setup for apartments & rentals"
    ],
    "pros": [
      "Powerful 10,000 BTU cooling: with 10,000 BTU (ASHRAE) cooling",
      "Sleep-friendly design",
      "No-drill setup for apartments & rentals",
      "Easy remote & touch panel control"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-windowless-portable-air-conditioners-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Windowless Portable Air Conditioner",
    "price": "$144.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/412DW2fCObL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQXWCC4K?tag=theofficejournal-20",
    "description": "Windowless Portable Air Conditioner is a strong alternative worth comparing directly against the top pick. Stylish bladeless fan offers gentle airflow, safe for kids and pets. 15-hour timer & remote control: set up to 15 hours of cooling and adjust settings effortlessly from across the room.\n\nWindowless Portable Air Conditioner for Room covers similar ground, though 4 modes & 3 wind speeds: choose from cool, natural, sleep, or eco mode with three adjustable fan speeds to meet different cooling needs is what tips the choice one way or the other.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Bladeless & safe design",
      "15-hour timer & remote control",
      "4 modes & 3 wind speeds"
    ],
    "pros": [
      "Bladeless & safe design",
      "15-hour timer & remote control",
      "4 modes & 3 wind speeds",
      "2-gallon extra-large water tank"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-windowless-portable-air-conditioners-5",
    "rank": 5,
    "badge": "Best Premium Pick",
    "name": "DREO Portable Air Conditioner 318S",
    "price": "$389.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31XoXjXBtuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DYDRXDG3?tag=theofficejournal-20",
    "description": "DREO Portable Air Conditioner 318S is the priciest pick in this lineup. Increase coverage up to 14 ft. 3-in-1 versatile ac unit: you can not only choose from cool/fan/dry modes, but the portable air conditioner 318s also has three functions to control within each mode, making it well suited to all scenarios.\n\nWeighing this against Windowless Portable Air Conditioner for Room, this self evaporating portable ac equipped with dreo's patented algorithm, sensors and pump evaporate excess water automatically eliminating the need for drainage in environments under 90% humidity ends up being the detail that matters most for most buyers.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Increase coverage up to 14 ft",
      "3-in-1 versatile ac unit",
      "Self evaporating portable ac equipped with dreo's patented algorithm"
    ],
    "pros": [
      "Increase coverage up to 14 ft",
      "3-in-1 versatile ac unit",
      "Self evaporating portable ac equipped with dreo's patented algorithm",
      "Control this smart ac unit for bedroom"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-windowless-portable-air-conditioners-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Hisense 8,000 BTU DOE/SACC (10,000 ASHRAE) Portable Air Conditioner Dual Hose &",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/11GnmMSKD-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9LM6CJD?tag=theofficejournal-20",
    "description": "Hisense 8,000 BTU DOE/SACC (10,000 ASHRAE) Portable Air Conditioner Dual Hose & is a strong alternative worth comparing directly against the top pick. 8,000 BTU doe/SACC (10,000 ASHRAE). 3-in-1 operation - enjoy cooling, dehumidifying, and fan mode with our versatile 3-in-1 portable air conditioner.\n\nWeighing this against Windowless Portable Air Conditioner for Room, dual-hose technology - dual hose technology provides faster, more efficient cooling and consistent room temperatures ends up being the detail that matters most for most buyers.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "8,000 BTU doe/SACC (10,000 ASHRAE)",
      "3-in-1 operation - enjoy cooling, dehumidifying, and fan mode",
      "Dual-hose technology - dual hose technology provides faster"
    ],
    "pros": [
      "8,000 BTU doe/SACC (10,000 ASHRAE)",
      "3-in-1 operation - enjoy cooling, dehumidifying, and fan mode",
      "Dual-hose technology - dual hose technology provides faster",
      "Inverter technology - energy efficient (up to 40%"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-windowless-portable-air-conditioners-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Windowless Portable Air Conditioners Fan",
    "price": "$133.65",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415v3BUVJOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7LSF2BG?tag=theofficejournal-20",
    "description": "Windowless Portable Air Conditioners Fan is a strong alternative worth comparing directly against the top pick. 3-in-1 evaporative air cooler: conquer the summer heat with our 3-in-1 evaporative air cooler! 20 hours of continuous operation: this evaporative air cooler features a large 2-gallon water tank, allowing for up to 20 hours of continuous operation.\n\nThis portable air cooler comes with a remote control with a range of up to 16 feet, which is the main thing that distinguishes this pick from Windowless Portable Air Conditioner for Room.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "20 hours of continuous operation",
      "Portable air cooler with remote control",
      "No hose or window installation required"
    ],
    "pros": [
      "20 hours of continuous operation",
      "Portable air cooler with remote control",
      "No hose or window installation required",
      "Portable air conditioner"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-windowless-portable-air-conditioners-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Midea 8,500 BTU ASHRAE Portable Air Conditioner",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31NTecSYRgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQW6R81R?tag=theofficejournal-20",
    "description": "Midea 8,500 BTU ASHRAE Portable Air Conditioner is a strong alternative worth comparing directly against the top pick. Midea 8,500 BTU ASHRAE (5,000 BTU SACC) portable air conditioner delivers fast, effective cooling for spaces up to 150 sq. Control your portable ac from anywhere using the smarthome app for ios and android.\n\nWindowless Portable Air Conditioner for Room lands in a similar spot overall, but the deciding factor between the two is enjoy the simplicity and comfort of digital controls.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Midea 8,500 BTU ASHRAE (5,000 BTU SACC) portable air",
      "Control your portable ac from anywhere using the smarthome",
      "Enjoy the simplicity and comfort of digital controls"
    ],
    "pros": [
      "Midea 8,500 BTU ASHRAE (5,000 BTU SACC) portable air",
      "Control your portable ac from anywhere using the smarthome",
      "Enjoy the simplicity and comfort of digital controls",
      "Easy installation"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-air-conditioners",
    "title": "Best Portable Air Conditioners"
  },
  {
    "href": "/guide/best-quiet-portable-air-conditioners",
    "title": "Best Quiet Portable Air Conditioners"
  },
  {
    "href": "/guide/best-dehumidifiers",
    "title": "Best Dehumidifiers"
  }
];

export const breadcrumbLabel = "Best Windowless Portable Air Conditioners";
