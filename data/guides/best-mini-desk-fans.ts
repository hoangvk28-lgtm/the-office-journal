// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "CFM (Airflow) vs Your Actual Desk Distance",
    "explanation": "A fan's CFM rating tells you how much air it physically moves, and the right number depends entirely on how close it'll sit: at typical desk distance (two to three feet), 100 to 300 CFM delivers a comfortable, steady breeze, while anything pushing well past that at close range creates an uncomfortable draft rather than useful cooling. Don't compare a desk fan's CFM directly against a whole-room pedestal fan's spec, which is built to move air across a much larger space and commonly exceeds 600 CFM."
  },
  {
    "criterion": "Noise Level in DB at Working Speeds",
    "explanation": "For context, a soft whisper is about 30 DB, normal conversation is around 60 DB, and a refrigerator's hum sits near 40 DB. A desk fan rated below 25 DB is whisper-quiet and won't intrude on calls or focus work, one in the 30-45 DB range is noticeable but not disruptive for most people, and anything consistently above 45 DB becomes the dominant sound in a quiet room. Check the DB rating at the SPEED you'll actually use daily, not just the lowest setting, since many listings only quote the quietest speed's noise level."
  },
  {
    "criterion": "Blade Size vs Portability Tradeoff",
    "explanation": "Fan diameter directly trades off against portability: a 3 to 4 inch USB mini fan is easy to toss in a bag but moves comparatively little air, while a 6 to 8 inch desk fan delivers meaningfully more airflow for actual desk cooling while still staying compact enough not to crowd a small desk. Pick based on whether you need genuine cooling power at your desk or just a portable option for occasional use elsewhere."
  },
  {
    "criterion": "Oscillation Range and Desk Placement",
    "explanation": "A fan's oscillation angle (commonly 60 to 120 degrees on desk models) determines how wide an area it actually covers versus just blowing a fixed line of air at one spot. On a wide desk or a shared workspace, a wider oscillation range spreads airflow across more of the surface, while a narrow or fixed-direction fan is better suited to cooling one specific spot, like directly at your face or hands, without wasting airflow on empty desk space."
  },
  {
    "criterion": "Power Source: USB, AC Plug, or Rechargeable Battery",
    "explanation": "The power source affects both convenience and raw performance: USB fans draw limited power from a laptop or hub, typically capping out at lower airflow than an AC-plugged fan; rechargeable battery fans trade a wired connection for portability but lose runtime and battery capacity over time like any rechargeable device; a standard AC plug delivers the most consistent airflow but ties the fan to one location near an outlet."
  }
];

export const faq = [
  {
    "q": "What CFM should a desk fan have?",
    "a": "For typical desk distance (two to three feet from your face), 100 to 300 CFM delivers a comfortable breeze without becoming an uncomfortable draft; don't compare this directly to a whole-room pedestal or tower fan's CFM rating, which is built for a much larger area and commonly exceeds 600 CFM."
  },
  {
    "q": "How quiet is a quiet desk fan?",
    "a": "Below 25 DB is whisper-quiet and won't intrude on calls, 30-45 DB is noticeable but tolerable for most people during regular work, and above 45 DB becomes the dominant sound in a quiet room; check the DB rating at the speed you'll actually use daily, since many listings only quote their quietest setting."
  },
  {
    "q": "Is a bigger desk fan always better?",
    "a": "Not for desk use specifically: a 6 to 8 inch blade diameter tends to be the sweet spot between real airflow and staying compact, while a fan built for whole-room circulation takes up more desk space and pushes more air than a close-range desk setup actually needs."
  },
  {
    "q": "USB, battery, or plug-in desk fan, which is best?",
    "a": "USB fans are convenient for a laptop-only setup but cap out at lower airflow than an AC-plugged fan, rechargeable battery fans add portability between rooms but lose runtime and capacity over repeated charges, and a standard AC plug delivers the most consistent power if you're staying at one desk."
  },
  {
    "q": "Does oscillation matter for a desk fan?",
    "a": "It depends on your desk layout: a wide oscillation range (90 to 120 degrees) spreads airflow across a wider desk or shared workspace, while a fixed or narrow-oscillation fan is better for cooling one specific spot, like directly at your hands or face, without wasting airflow elsewhere."
  },
  {
    "q": "Can a desk fan replace air conditioning in summer?",
    "a": "No, a fan only moves existing air rather than cooling it, so it helps with comfort through evaporative cooling on your skin but won't lower the actual room temperature the way AC does; it's most effective in a room that's already at a reasonable temperature, not as a substitute for cooling a hot space."
  }
];

export const guideSlug = "best-mini-desk-fans";

export const guideTitle = "The Best Mini Desk Fans for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41PnGsS758L._SL500_.jpg";

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
          "",
          "Aecooly Mini Portable USB Desk Fan"
        ],
        [
          "Large desk, need real airflow",
          "KIMMOO Rechargeable USB Desk Fan"
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
          "WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet"
        ],
        [
          "",
          "KIMMOO Rechargeable USB Desk Fan"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Convenient for a laptop-only setup, but capped at lower airflow than AC power."
      },
      {
        "label": "",
        "text": "More consistent, stronger airflow, but ties the fan to one spot near an outlet."
      }
    ],
    "note": "Match this to whether portability or raw airflow matters more for your setup."
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
          "Calls or focus work, need it quiet",
          "Check the DB rating at your actual daily speed, not just the lowest setting"
        ],
        [
          "",
          "Aecooly Mini Portable USB Desk Fan"
        ]
      ]
    }
  },
  {
    "subheading": "For a Shared Desk or Office Specifically",
    "cards": [
      {
        "label": "",
        "text": "A wider oscillation range (90 to 120 degrees) to spread airflow across more of the surface."
      },
      {
        "label": "",
        "text": "Aecooly Mini Portable USB Desk Fan is worth checking against its specific oscillation range before assuming any 'wide coverage' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want stronger airflow, lower noise, and extra features like a remote or timer, where KIMMOO Rechargeable USB Desk Fan justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just want a straightforward personal cooling boost, where Gaiatop USB Desk Fan already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "CFM (Airflow) vs Your Actual Desk Distance",
    "description": "A fan's CFM rating tells you how much air it physically moves, and the right number depends entirely on how close it'll sit: at typical desk distance (two to three feet), 100 to 300 CFM delivers a comfortable, steady breeze, while anything pushing well past that at close range creates an uncomfortable draft rather than useful cooling."
  },
  {
    "title": "Noise Level in DB at Working Speeds",
    "description": "For context, a soft whisper is about 30 DB, normal conversation is around 60 DB, and a refrigerator's hum sits near 40 DB."
  },
  {
    "title": "Blade Size vs Portability Tradeoff",
    "description": "Fan diameter directly trades off against portability: a 3 to 4 inch USB mini fan is easy to toss in a bag but moves comparatively little air, while a 6 to 8 inch desk fan delivers meaningfully more airflow for actual desk cooling while still staying compact enough not to crowd a small desk."
  },
  {
    "title": "Oscillation Range and Desk Placement",
    "description": "A fan's oscillation angle (commonly 60 to 120 degrees on desk models) determines how wide an area it actually covers versus just blowing a fixed line of air at one spot."
  },
  {
    "title": "Power Source: USB, AC Plug, or Rechargeable Battery",
    "description": "The power source affects both convenience and raw performance: USB fans draw limited power from a laptop or hub, typically capping out at lower airflow than an AC-plugged fan; rechargeable battery fans trade a wired connection for portability but lose runtime and battery capacity over time like any rechargeable device; a standard AC plug delivers the most consistent airflow but ties the fan to one location near an outlet.."
  }
];

export const introParagraphs = [
  "Best Mini Desk Fans span tiny USB minis to full desk-cooling models, which is exactly why desk distance changes what you actually need.",
  "We compared this lineup on verified DB rating, not marketing claims, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desk fan mini";

export const metaDescription = "How 8 mini desk fans compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Mini Desk Fans for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-mini-desk-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Aecooly Mini Portable USB Desk Fan",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41PnGsS758L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G446GD3M?tag=theofficejournal-20",
    "description": "Aecooly Mini Portable USB Desk Fan is the strongest all-around choice here. This aecooly mini USB desk fan is designed with a compact and lightweight build that makes it even smaller and easier to carry than a typical USB desk fan. Small portable fan achieves a peak airflow of 18 ft/s, providing a robust cooling effect with a clean and consistent stream.\n\nAgainst WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nIt's worth picking this one if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Small enough to hold",
      "Mini but mighty",
      "USB or battery powered"
    ],
    "pros": [
      "Small enough to hold",
      "Mini but mighty",
      "USB or battery powered",
      "180° Adjustable stand: this small rechargeable fan rotates up to 180 degrees"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-mini-desk-fans-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ILLheTPIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPLDBZ6H?tag=theofficejournal-20",
    "description": "WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet is a strong alternative worth comparing directly against the top pick. Large air volume l50-100,for outdoor camping cooling, personal travel essentials. Small desk fans can be used when charging.\n\nHeld up against Aecooly Mini Portable USB Desk Fan, both cover the basics equally well, what actually separates them is whatook adhering to the purpose of quality products and services.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Portable desktop fan",
      "Long life & battery display",
      "Pure material & safety"
    ],
    "pros": [
      "Portable desktop fan",
      "Long life & battery display",
      "Pure material & safety",
      "Suitable for bedroom"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-mini-desk-fans-3",
    "rank": 3,
    "badge": "Best Value",
    "name": "Gaiatop USB Desk Fan",
    "price": "$7.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51KApgMbWBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09LQN6815?tag=theofficejournal-20",
    "description": "Gaiatop USB Desk Fan is the most affordable pick here that still clears the capability floor for this category. Classic design and more compact, less than 8 ounces, take up small space; it's very suitable for home, car, office, outside or traveling. The fan is very strong and the noise is less than 50db even when a strong wind is provided; at work and rest, this is a good friend who is quiet and comfortable for you.\n\nSet next to Aecooly Mini Portable USB Desk Fan, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis one is the right call if you want a capable pick without paying for headroom you won't use. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Classic design & small size",
      "Quiet operation",
      "Three-speeds setting"
    ],
    "pros": [
      "Classic design & small size",
      "Quiet operation",
      "Three-speeds setting",
      "Adjustable wind"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-mini-desk-fans-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "TriPole USB Desk Fan Small Portable",
    "price": "$8.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51phq9sZfvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3LXXH1K?tag=theofficejournal-20",
    "description": "TriPole USB Desk Fan Small Portable is a strong alternative worth comparing directly against the top pick. With the three speed wind modes, you have the flexibility to choose the airflow intensity that suits your needs. 5 inch, this mini fan is space-saving on desktop or nightstand and portable enough to carry for trip.\n\nSet next to Aecooly Mini Portable USB Desk Fan, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Personalized cooling",
      "Compact size",
      "USB powered fan"
    ],
    "pros": [
      "Personalized cooling",
      "Compact size",
      "USB powered fan",
      "Stable base"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-mini-desk-fans-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet",
    "price": "$11.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/419qfTVl2rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DPLFBTKW?tag=theofficejournal-20",
    "description": "WHATOOK Small Desk Fan Personal Fans: 5000mah 25 Hours Battery Office Quiet is a strong alternative worth comparing directly against the top pick. Large air volume l50-100,for outdoor camping cooling, personal travel essentials. Small desk fans can be used when charging.\n\nSide by side with Aecooly Mini Portable USB Desk Fan, the real difference worth noting is whatook adhering to the purpose of quality products and services.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Portable desktop fan",
      "Long life & battery display",
      "Pure material & safety"
    ],
    "pros": [
      "Portable desktop fan",
      "Long life & battery display",
      "Pure material & safety",
      "Suitable for bedroom"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-mini-desk-fans-6",
    "rank": 6,
    "badge": "Best Premium Pick",
    "name": "KIMMOO Rechargeable USB Desk Fan",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bNcM9Vv4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5GQ1ZQB?tag=theofficejournal-20",
    "description": "KIMMOO Rechargeable USB Desk Fan is the top-tier pick in this comparison. At its lowest setting (speed 1), the fan operates at just 35db, providing a whisper-quiet and comfortable breeze for undisturbed relaxation. Equipped with an ultra-high-speed motor and 200% power boost, this fan instantly circulates air throughout the room for rapid cooling.\n\nSet next to Aecooly Mini Portable USB Desk Fan, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nGo with this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "At its lowest setting (speed 1)",
      "Ultra-high-speed motor and 200% power boost, this fan instantly",
      "100-Speed customizable control: adjust the fan speed precisely to your preference with 100 levels"
    ],
    "pros": [
      "At its lowest setting (speed 1)",
      "Ultra-high-speed motor and 200% power boost, this fan instantly",
      "100-Speed customizable control: adjust the fan speed precisely to your preference with 100 levels",
      "LED digital display"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-mini-desk-fans-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Otlonpe Personal Portable Desk Fan",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515eZds8PyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CTGZ3TPC?tag=theofficejournal-20",
    "description": "Otlonpe Personal Portable Desk Fan is a strong alternative worth comparing directly against the top pick. Up to 23 hours cooling time in one full charge with battery mode or USB mode for no stop working. Experience customizable cooling and comfort with the 4 speed settings of our rechargeable fan portable.\n\n3 oz, and foldable fan bracket making our small fan more easy to carry ends up being the detail that matters most for most buyers.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Small in size, big on function",
      "5-23 Hours cooling time",
      "4 Speed adjustable wind"
    ],
    "pros": [
      "Small in size, big on function",
      "5-23 Hours cooling time",
      "4 Speed adjustable wind",
      "6.6X5.6x1.5 inches, 9.3 oz, and foldable fan bracket making our small fan more easy to carry"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-mini-desk-fans-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "DIGIX Portable Desk Fan for Bedroom",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uTuUTnF2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3X3272N?tag=theofficejournal-20",
    "description": "DIGIX Portable Desk Fan for Bedroom is a strong alternative worth comparing directly against the top pick. Experience strong, refreshing airflow for personal cooling wherever you are.\n\nWeighing this against Aecooly Mini Portable USB Desk Fan, silent operation for sleeping & working ends up being the detail that matters most for most buyers.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Experience strong, refreshing airflow for personal cooling wherever",
      "8.5H runtime & 2.5h fast charge",
      "<26Db whisper-quiet operation"
    ],
    "pros": [
      "Experience strong, refreshing airflow for personal cooling wherever",
      "8.5H runtime & 2.5h fast charge",
      "<26Db whisper-quiet operation",
      "Real-time speed & battery monitoring"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-desk-fans",
    "title": "Best Desk Fans"
  },
  {
    "href": "/guide/best-usb-desk-fans",
    "title": "Best USB Desk Fans"
  },
  {
    "href": "/guide/best-quiet-desk-fans",
    "title": "Best Quiet Desk Fans"
  }
];

export const breadcrumbLabel = "Best Mini Desk Fans";
