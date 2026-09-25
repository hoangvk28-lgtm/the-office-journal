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

export const guideSlug = "best-desk-fans-for-standing-desks";

export const guideTitle = "The Best Desk Fans for Standing Desks: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31cWBCZiz+L._SL500_.jpg";

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
          "Amazon Basics Air Circulator Desk Fan for Bedroom"
        ],
        [
          "",
          "Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s"
        ],
        [
          "Large desk, need real airflow",
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
          "Amazon Basics Air Circulator Desk Fan for Bedroom"
        ],
        [
          "",
          "DREO Tower Fan for Bedroom"
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
        "label": "Amazon Basics Air Circulator Desk Fan for Bedroom)",
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
          "Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s"
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
        "text": "Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s is worth checking against its specific oscillation range before assuming any 'wide coverage' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want stronger airflow, lower noise, and extra features like a remote or timer, where DREO Fan for Bedroom justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just want a straightforward personal cooling boost, where Amazon Basics Air Circulator Desk Fan for Bedroom already covers the job at the lowest price here."
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
  "Best Desk Fans for Standing Desks span tiny USB minis to full desk-cooling models, which is exactly why desk distance changes what you actually need.",
  "We compared this lineup on real airflow and noise level, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desk fan for standing desk";

export const metaDescription = "A practical comparison of 8 desk fans for standing desks, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Desk Fans for Standing Desks (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-desk-fans-for-standing-desks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s",
    "price": "$32.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31cWBCZiz+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVB8SHMR?tag=theofficejournal-20",
    "description": "Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s is our overall pick in this lineup. Stay cool and comfortable with the tower fan, designed to deliver rapid airflow up to 24ft/s for instant relief from heat. 60° For focused airflow and 110° for full-room circulation, this stand up fan adapts to different cooling needs.\n\nSet next to DREO Fan for Bedroom, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Stay cool and comfortable with the tower fan",
      "60° For focused airflow and 110° for full-room circulation",
      "Ultra-quiet operation(25-45db), this bedroom fan"
    ],
    "pros": [
      "Stay cool and comfortable with the tower fan",
      "60° For focused airflow and 110° for full-room circulation",
      "Ultra-quiet operation(25-45db), this bedroom fan",
      "Izing power consumption"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-desk-fans-for-standing-desks-2",
    "rank": 2,
    "badge": "Best Premium Pick",
    "name": "DREO Fan for Bedroom",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31eMKbfErlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQDQVTT3?tag=theofficejournal-20",
    "description": "DREO Fan for Bedroom is the priciest pick in this lineup. Powered by a dc motor, Dreo's unique blade design delivers smooth airflow with quiet operation. This oscillating fan offers 90 ̊ horizontal oscillation, a 105 ̊ pivoting head, and an adjustable height range (38\", 42\").\n\nAgainst Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Compared with previous Dreo fan for bedroom",
      "Powered by a dc motor",
      "Direct air where you need"
    ],
    "pros": [
      "Compared with previous Dreo fan for bedroom",
      "Powered by a dc motor",
      "Direct air where you need",
      "Auto mode handles wind"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-desk-fans-for-standing-desks-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "DREO Tower Fan for Bedroom",
    "price": "$64.94",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318XyhpvUuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09MKPDJRT?tag=theofficejournal-20",
    "description": "DREO Tower Fan for Bedroom is a strong alternative worth comparing directly against the top pick. Thanks to Dreo's upgraded brushless dc motor combined, the tower fan achieves faster spin to deliver stronger airflow, with airflow speeds reaching up to 28ft/s and projecting up to 34ft. Featuring an algorithmic impeller design, and an upgraded dc motor, this tower fan delivers quiet operation, making it ideal for work and nighttime use.\n\nRemovable rear grille and impeller simplify cleaning, a detail worth checking closely before choosing between this and Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Thanks to Dreo's upgraded brushless dc motor combined",
      "Quiet-optimized performance",
      "Customizable comfort"
    ],
    "pros": [
      "Thanks to Dreo's upgraded brushless dc motor combined",
      "Quiet-optimized performance",
      "Customizable comfort",
      "Broad room coverage"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desk-fans-for-standing-desks-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Amazon Basics 16\" Pedestal Fan with Remote for Bedroom",
    "price": "$40.07",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41IsETbLFmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BNGPWT4?tag=theofficejournal-20",
    "description": "Amazon Basics 16\" Pedestal Fan with Remote for Bedroom is a strong alternative worth comparing directly against the top pick. This 16-inch pedestal fan with remote effectively circulates air in spaces like living rooms, kitchens, and offices. Featuring an advanced ac motor, this electric fan delivers airflow using only 60 watts.\n\nPersonal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s covers similar ground, though manage your fan with ease using the included remote control is what tips the choice one way or the other.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Optimized design for medium to large rooms",
      "Energy-efficient quiet operation",
      "Customized comfort with 3 speeds"
    ],
    "pros": [
      "Optimized design for medium to large rooms",
      "Energy-efficient quiet operation",
      "Customized comfort with 3 speeds",
      "Adjustable airflow and height"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desk-fans-for-standing-desks-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Portable Foldable Rechargeable Oscillating Fan",
    "price": "$31.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KYk0ymfKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7YJ191J?tag=theofficejournal-20",
    "description": "Portable Foldable Rechargeable Oscillating Fan is a strong alternative worth comparing directly against the top pick. 6 inch in diameter, adjustable height - 4\" when folded and 40\" full stretched, easily meet your different needs for height. 70° Smooth oscillating fan, the remote with switch, timer, oscillation, speed levels, you can easily control your personal fan as you like, enjoy a convenient life.\n\nAgainst Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "8.6\" Portable folding fan: unique foldable design",
      "Oscillating fan with romote control",
      "Super quiet fan"
    ],
    "pros": [
      "8.6\" Portable folding fan: unique foldable design",
      "Oscillating fan with romote control",
      "Super quiet fan",
      "8000Mah battery powered fan: bulit-in 8000mah rechargeable battery"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desk-fans-for-standing-desks-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "DR.PREPARE Tower Fan for Bedroom",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+d8wNWVHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C1YC72FQ?tag=theofficejournal-20",
    "description": "PREPARE Tower Fan for Bedroom is a strong alternative worth comparing directly against the top pick. Efficient dc motor delivers powerful cool winds to your living space. Engineered for ultra-quiet cooling and high wind speeds.\n\nThe gap between this and Personal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s isn't in the essentials, it shows up in the upper control panel and smart remote controller make this table fan easy to use.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Efficient dc motor delivers powerful cool winds to your living space",
      "Near silent cooling",
      "Convenient touchscreen & remote control"
    ],
    "pros": [
      "Efficient dc motor delivers powerful cool winds to your living space",
      "Near silent cooling",
      "Convenient touchscreen & remote control",
      "1-8 Hours timer & 80° oscillation"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desk-fans-for-standing-desks-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Levoit Tower Fan for Bedroom",
    "price": "$74.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31lXmYJeMpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BVZFQ4DF?tag=theofficejournal-20",
    "description": "Levoit Tower Fan for Bedroom is a strong alternative worth comparing directly against the top pick. From a gentle breeze to a powerful wind, it adapts to your everyday needs with up to 28 ft/s airflow and a wide oscillation angle to deliver fast, whole-room cooling. Well suited bedroom fan with a near-silent noise level on low speed.\n\nPersonal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "One fan for all your needs",
      "Quiet sleep all night",
      "Auto-adjusts to your room"
    ],
    "pros": [
      "One fan for all your needs",
      "Quiet sleep all night",
      "Auto-adjusts to your room",
      "Simple operation"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desk-fans-for-standing-desks-8",
    "rank": 8,
    "badge": "Best Value",
    "name": "Amazon Basics Air Circulator Desk Fan for Bedroom",
    "price": "$15.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xkPFkQlbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082MY2MX3?tag=theofficejournal-20",
    "description": "Amazon Basics Air Circulator Desk Fan for Bedroom is the best-value option in this roundup, priced lowest without a real capability gap. 9 inches (lxwxh) with three 7-inch blades, this fan occupies minimal space on floors or tables, well suited to various room types such as bedrooms, living rooms, home offices, and kitchens. Enjoy personalized airflow with a 90-degree variable tilt feature, allowing you to direct the airflow precisely where you need it.\n\nPersonal Tower Cooling Fans that Blow Cold Air, 25dB Quiet Fan with 24ft/s covers similar ground, though save energy without sacrificing performance is what tips the choice one way or the other.\n\nIt's worth picking this one if you want a capable pick without paying for headroom you won't use. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Compact design",
      "Adjustable tilt",
      "3 Speed settings"
    ],
    "pros": [
      "Compact design",
      "Adjustable tilt",
      "3 Speed settings",
      "Portable convenience"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
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

export const breadcrumbLabel = "Best Desk Fans for Standing Desks";
