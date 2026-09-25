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

export const guideSlug = "best-ecoflow-portable-air-conditioners";

export const guideTitle = "The Best EcoFlow Portable Air Conditioners for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/31w6TBTm9xL._SL500_.jpg";

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
          "Outohome Portable Camping Air Conditioner"
        ],
        [
          "",
          "EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe"
        ],
        [
          "",
          "EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe"
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
          "Outohome Portable Camping Air Conditioner"
        ],
        [
          "",
          "EF ECOFLOW WAVE 3 Portable Air Conditioner with Add-on Battery & Drain Pipe"
        ],
        [
          "",
          "EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Outohome Portable Camping Air Conditioner)",
        "text": "Simpler and cheaper, adequate for rooms up to about 10,000-12,000 BTU, but loses some efficiency from negative room pressure."
      },
      {
        "label": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe)",
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
          "EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe"
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
        "text": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe is worth checking against its specific decibel rating before assuming any unit is quiet enough for a bedroom."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're cooling a large room and want dual-hose efficiency and higher real cooling power, where EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're cooling a small room or bedroom, where Outohome Portable Camping Air Conditioner already covers the job at the lowest price here."
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
  "Best EcoFlow Portable Air Conditioners aren't as interchangeable as they seem. That means a title alone won't tell you enough.",
  "This roundup weighs real SACC output and hose design, given that this is the real gap to watch."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "ecoflow portable air conditioner";

export const metaDescription = "A practical comparison of 8 EcoFlow portable air conditioners, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best EcoFlow Portable Air Conditioners for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-ecoflow-portable-air-conditioners-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe",
    "price": "$849.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31w6TBTm9xL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GV3WDM8G?tag=theofficejournal-20",
    "description": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe is the top pick in this comparison. Ecoflow wave 3 portable air conditioner uses 1024wh lfp battery delivers 8hrs cordless operation. Compact 20\" luggage size with ergonomic handle fits effortlessly in suvs/overlanders/semitrucks.\n\nEF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe covers similar ground, though app remote controls temp/mode/timer with water&power alerts is what tips the choice one way or the other.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Cordless freedom anywhere",
      "All-terrain compatibility",
      "Intelligent ecosystem"
    ],
    "pros": [
      "Cordless freedom anywhere",
      "All-terrain compatibility",
      "Intelligent ecosystem",
      "Eco-conscious innovation"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-2",
    "rank": 2,
    "badge": "Best Premium Pick",
    "name": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe",
    "price": "$1,499.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3144-ZH+HaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4KVGW59?tag=theofficejournal-20",
    "description": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Battery and Drain Pipe is the priciest pick in this lineup. 1800w cooling (20% more BTU than competitors) drops 15°f in 15mins under extreme heat. Ecoflow wave 3 portable air conditioner use 1024wh lfp battery delivers 8hrs cordless operation.\n\nR290 refrigerant reduces 4500lbs co2 emissions per unit(equal to 130 trees) in 10 years, which is the main thing that distinguishes this pick from EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe.\n\nThis one is the right call if you are willing to spend the most in this comparison for the fuller feature set that comes with it. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Hyperspeed climate control",
      "Cordless freedom anywhere",
      "All-terrain compatibility"
    ],
    "pros": [
      "Hyperspeed climate control",
      "Cordless freedom anywhere",
      "All-terrain compatibility",
      "Intelligent ecosystem"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Add-on Battery & Drain Pipe",
    "price": "$1,369.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3144-ZH+HaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTYTZMYQ?tag=theofficejournal-20",
    "description": "EF ECOFLOW WAVE 3 Portable Air Conditioner with Add-on Battery & Drain Pipe is a strong alternative worth comparing directly against the top pick. Ecoflow wave 3 portable air conditioner uses 1024wh lfp battery delivers 8hrs cordless operation. Compact 20\" luggage size with ergonomic handle fits effortlessly in suvs/overlanders/semitrucks.\n\nThe gap between this and EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe isn't in the essentials, it shows up in app remote controls temp/mode/timer with water&power alerts.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Cordless freedom anywhere",
      "All-terrain compatibility",
      "Intelligent ecosystem"
    ],
    "pros": [
      "Cordless freedom anywhere",
      "All-terrain compatibility",
      "Intelligent ecosystem",
      "Eco-conscious innovation"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "GOUKA Portable Ac 6100 BTU Cooling Camping Air Conditioner App Control No",
    "price": "$559.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FwaUK2I2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYN6WZV2?tag=theofficejournal-20",
    "description": "GOUKA Portable Ac 6100 BTU Cooling Camping Air Conditioner App Control No is a strong alternative worth comparing directly against the top pick. Powerful inverter cooling & heating stay comfy year-round with 6100 BTU cooling and 3000 BTU heating. Smart app & 6 versatile modes control your climate from anywhere via the smart app!\n\nWeighing this against EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe, maintenance-free no-drain system forget the hassle of emptying water tanks ends up being the detail that matters most for most buyers.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Powerful inverter cooling & heating stay comfy year-round with 6100 BTU",
      "Smart app & 6 versatile modes control your climate",
      "Maintenance-free no-drain system forget the hassle of emptying water"
    ],
    "pros": [
      "Powerful inverter cooling & heating stay comfy year-round with 6100 BTU",
      "Smart app & 6 versatile modes control your climate",
      "Maintenance-free no-drain system forget the hassle of emptying water",
      "60-second \"flash\" installation get cool in seconds"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "EF ECOFLOW Portable Power Station Delta 3 Classic",
    "price": "$529.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31F8BqUk3HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQVC4RF5?tag=theofficejournal-20",
    "description": "EF ECOFLOW Portable Power Station Delta 3 Classic is a strong alternative worth comparing directly against the top pick. Ecoflow delta 3 classic delivers 1800w output (3600w surge) with x-boost technology, enough for refrigerators, microwaves, laptops, and more. Go from 0 to 80% in just 45 minutes with x-stream ac charging.\n\nHeld up against EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe, both cover the basics equally well, what actually separates them is <10ms ups: protect sensitive electronics like pcs, servers, and medical devices.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Power for every scenario",
      "Go from 0 to 80% in just 45 minutes",
      "10ms ups"
    ],
    "pros": [
      "Power for every scenario",
      "Go from 0 to 80% in just 45 minutes",
      "10ms ups",
      "Built to last"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Cybertake S2 Pro Portable Camping Air Conditioner",
    "price": "$779.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414sBEqBljL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMKN82GQ?tag=theofficejournal-20",
    "description": "Cybertake S2 Pro Portable Camping Air Conditioner is a strong alternative worth comparing directly against the top pick. For your tent, rv, or cabin.\n\nHeld up against EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe, both cover the basics equally well, what actually separates them is forget complicated installations and ready in 30 seconds.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Is true independence",
      "& heating power",
      "For your tent, rv, or cabin"
    ],
    "pros": [
      "Is true independence",
      "& heating power",
      "For your tent, rv, or cabin",
      "Forget complicated installations and ready in 30 seconds"
    ],
    "cons": [
      "SACC cooling is usually lower than the headline BTU number",
      "Single-hose models lose efficiency from negative room pressure"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-7",
    "rank": 7,
    "badge": "Best Value",
    "name": "Outohome Portable Camping Air Conditioner",
    "price": "$369.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41RfhylHEpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVRYWTSG?tag=theofficejournal-20",
    "description": "Outohome Portable Camping Air Conditioner is the most affordable pick here that still clears the capability floor for this category. Equipped with premium gmcc compressor, this portable camping air conditioner delivers strong 5200 BTU cooling power. 8 inches and weighs merely 31lbs.\n\nWeighing this against EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe, 4 functional modes: this portable air conditioner supports cooling, dehumidifying, sleep and fan modes, all controllable via remote ends up being the detail that matters most for most buyers.\n\nGo with this pick if you want a capable pick without paying for headroom you won't use. Single-hose models pull replacement air from cracks around doors and windows, so real cooling can fall short of the headline BTU rating.",
    "specs": [
      "Fast cooling performance",
      "Compact design",
      "4 functional modes"
    ],
    "pros": [
      "Fast cooling performance",
      "Compact design",
      "4 functional modes",
      "Versatile application"
    ],
    "cons": [
      "Single-hose models lose efficiency from negative room pressure",
      "SACC cooling is usually lower than the headline BTU number"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-ecoflow-portable-air-conditioners-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "14,000 BTU Portable Air Conditioner",
    "price": "$379.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31GDG31afML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMGR4BJV?tag=theofficejournal-20",
    "description": "14,000 BTU Portable Air Conditioner is a strong alternative worth comparing directly against the top pick. Summer electric bills shouldn't make you sweat twice. Most portable air conditioners sound like a constant conversation in your room.\n\nStart cooling before you walk through the door, which is the main thing that distinguishes this pick from EF ECOFLOW WAVE 3 Portable Air Conditioner with Drain Pipe.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. The SACC rating, not the marketed ASHRAE BTU number, predicts real cooling performance, so check which figure a listing is actually quoting.",
    "specs": [
      "Cool the heat, not your bills",
      "Whisper at 41 DB, you won't hear",
      "Start cooling before you walk through the door"
    ],
    "pros": [
      "Cool the heat, not your bills",
      "Whisper at 41 DB, you won't hear",
      "Start cooling before you walk through the door",
      "4-in-1 comfort for every season"
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

export const breadcrumbLabel = "Best EcoFlow Portable Air Conditioners";
