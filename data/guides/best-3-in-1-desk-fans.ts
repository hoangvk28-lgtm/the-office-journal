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

export const guideSlug = "best-3-in-1-desk-fans";

export const guideTitle = "The Best 3-in-1 Desk Fans for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41H9C3WL86L._SL500_.jpg";

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
          "Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt"
        ],
        [
          "Large desk, need real airflow",
          "Levoit Tower Fan for Bedroom"
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
          ""
        ],
        [
          "",
          "Levoit Tower Fan for Bedroom"
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
          "Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt"
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
        "text": "Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt is worth checking against its specific oscillation range before assuming any 'wide coverage' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want stronger airflow, lower noise, and extra features like a remote or timer, where Levoit Tower Fan for Bedroom justifies the extra cost."
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
  "Best 3-in-1 Desk Fans carry very different real airflow, which is exactly why a CFM spec rarely tells the story.",
  "We compared this lineup on real airflow and noise level, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desk fan 3 in 1";

export const metaDescription = "How 8 3-in-1 desk fans compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best 3-in-1 Desk Fans for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-3-in-1-desk-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41H9C3WL86L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXQ7C4Y9?tag=theofficejournal-20",
    "description": "Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt is our overall pick in this lineup. With premium motor and 7‐blade design, the desk fans small quiet delivers a strong wind that cools you down fast. 360° Adjustable tilt: the table fan features 360° free rotation to adjust airflow direction effortlessly.\n\nSet next to Amazon Basics Air Circulator Desk Fan for Bedroom, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nReach for this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Premium motor and 7‐blade design, the desk fans small",
      "360° Adjustable tilt: the table fan features 360° free rotation to adjust airflow direction effortlessly",
      "LED digital display"
    ],
    "pros": [
      "Premium motor and 7‐blade design, the desk fans small",
      "360° Adjustable tilt: the table fan features 360° free rotation to adjust airflow direction effortlessly",
      "LED digital display",
      "USB rechargeable battery operated"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-3-in-1-desk-fans-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Amazon Basics Air Circulator Desk Fan for Bedroom",
    "price": "$15.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41xkPFkQlbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082MY2MX3?tag=theofficejournal-20",
    "description": "Amazon Basics Air Circulator Desk Fan for Bedroom is a strong alternative worth comparing directly against the top pick. 9 inches (lxwxh) with three 7-inch blades, this fan occupies minimal space on floors or tables, well suited to various room types such as bedrooms, living rooms, home offices, and kitchens. Enjoy personalized airflow with a 90-degree variable tilt feature, allowing you to direct the airflow precisely where you need it.\n\nSave energy without sacrificing performance, a detail worth checking closely before choosing between this and Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
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
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "coldSky Portable Handheld Fan",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41jCqTEJoRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BYJ2S1B6?tag=theofficejournal-20",
    "description": "ColdSky Portable Handheld Fan is a strong alternative worth comparing directly against the top pick. Coldsky personal fan is equipped with a high-quality brushless motor and 7-blade design that will provide powerful airflow. Coldsky battery operated fan built-in 4000mah battery and energy-efficient technology.\n\nSet next to Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "3 Seconds cooling & 5 speeds",
      "20Hrs max cooling time",
      "Small fan features smart digital screen that displays the remaining battery life and speed level"
    ],
    "pros": [
      "3 Seconds cooling & 5 speeds",
      "20Hrs max cooling time",
      "Small fan features smart digital screen that displays the remaining battery life and speed level",
      "3-In-1 multifunction fan"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Honeywell TurboForce Air Circulator",
    "price": "$18.79",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lT-5dMvLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B001R1RXUG?tag=theofficejournal-20",
    "description": "Honeywell TurboForce Air Circulator is a strong alternative worth comparing directly against the top pick. ** it’s sized to be a table or desk fan or wall-mounted, and provides cooling in small to medium-sized rooms. Honeywell turboforce fans have an aerodynamic turbo design to maximize air movement and power for intense cooling or energy-saving air circulation.\n\nThe gap between this and Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt isn't in the essentials, it shows up in with 3 speeds and a 90° pivoting adjustable head, you’ll always be comfortable and cool!.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Small floor or tabletop fan",
      "Feel the power",
      "Customize your comfort"
    ],
    "pros": [
      "Small floor or tabletop fan",
      "Feel the power",
      "Customize your comfort",
      "Quiet fans for bedroom and home are an easy"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Honeywell QuietSet Personal Table Fan",
    "price": "$27.06",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KnE-wpqML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00YU1O15U?tag=theofficejournal-20",
    "description": "Honeywell QuietSet Personal Table Fan is a strong alternative worth comparing directly against the top pick. Help improve cooling and energy savings* throughout the indoors from living room to bedroom with a Honeywell tower fan; choose from tower fans to personal portable fans and whole room fans that are all a great choice. The #1 selling tower fan* is not just a personal fan.\n\nDesk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Honeywell quality",
      "Quiet cooling bedroom fan",
      "Cooling oscillating fan savings"
    ],
    "pros": [
      "Honeywell quality",
      "Quiet cooling bedroom fan",
      "Cooling oscillating fan savings",
      "Oscillating table fan"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Gaiatop Desk Fan",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416mBwrrx7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3V143RM?tag=theofficejournal-20",
    "description": "Gaiatop Desk Fan is a strong alternative worth comparing directly against the top pick. 73 lb, combines deep-pitched blades and aerodynamic design to propel air and help room fan to circulate strong cold air and cooling large areas faster. 2 m/s; the cooling fan is powerful and quiet enough to give you a comfortable working and resting environment.\n\nAgainst Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Small desk fan is only 5.59*5.65*4.33 inch/ 0.73 lb",
      "Convenient & portable fan",
      "360° Ajustable tilt: 360° tilt and 3 speed"
    ],
    "pros": [
      "Small desk fan is only 5.59*5.65*4.33 inch/ 0.73 lb",
      "Convenient & portable fan",
      "360° Ajustable tilt: 360° tilt and 3 speed",
      "Whisper-quiet cooling"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Coolhill USB Desk Fan for Bedroom: 100 Speeds Digital Display Quiet Portable",
    "price": "$19.78",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dBGc46DcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FBMD2FR9?tag=theofficejournal-20",
    "description": "Coolhill USB Desk Fan for Bedroom: 100 Speeds Digital Display Quiet Portable is a strong alternative worth comparing directly against the top pick. 100 Adjustable speeds & digital display - coolhill desk fan with 1 - 100 adjustable wind speeds. Powerful airflow & 120° oscillation - the desk fan delivers powerful gentle airflow through turbocharging with a max of 6m/s.\n\nDesk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "100 Adjustable speeds & digital display - coolhill desk fan",
      "Ultra quiet personal fan - coolhill table fan equipped with advanced noise-reduction technology",
      "Powerful airflow & 120° oscillation - the desk fan"
    ],
    "pros": [
      "100 Adjustable speeds & digital display - coolhill desk fan",
      "Ultra quiet personal fan - coolhill table fan equipped with advanced noise-reduction technology",
      "Powerful airflow & 120° oscillation - the desk fan",
      "Suitable for all occasion - portable fan can be more flexibly used on bedroom"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-3-in-1-desk-fans-8",
    "rank": 8,
    "badge": "Best Premium Pick",
    "name": "Levoit Tower Fan for Bedroom",
    "price": "$39.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31DDI+JvQoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GH7X9FGS?tag=theofficejournal-20",
    "description": "Levoit Tower Fan for Bedroom is the premium option here, positioned above the rest on price. With an efficient dc motor and vortexair technology, this fan produces high-performance airflow and a strong, focused breeze for consistent comfort. Our upgraded dc motor maintains low noise output, from 20 to 43db across all speed levels, with optional sound and display-off functions, creating a peaceful environment for work, rest, or distraction-free sleep.\n\nWith 5 fan speeds and an additional turbo speed, this fan delivers personalized comfort, a detail worth checking closely before choosing between this and Desk Fan, Small Quiet Table Fan, Digital Display, 360° Adjustable Tilt.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Comfort without compromise",
      "Quiet without disruption",
      "Portable without being a burden"
    ],
    "pros": [
      "Comfort without compromise",
      "Quiet without disruption",
      "Portable without being a burden",
      "Efficient cooling"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
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

export const breadcrumbLabel = "Best 3-in-1 Desk Fans";
