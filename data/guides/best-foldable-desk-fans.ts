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

export const guideSlug = "best-foldable-desk-fans";

export const guideTitle = "The Best Foldable Desk Fans for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/51wb7z5JSLL._SL500_.jpg";

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
          "Warmco D3 10000mAh Portable Travel Fan"
        ],
        [
          "",
          ""
        ],
        [
          "Large desk, need real airflow",
          "Warmco D3 10000mAh Portable Travel Fan"
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
          "Warmco D3 10000mAh Portable Travel Fan"
        ],
        [
          "",
          "Otlonpe Personal Portable Desk Fan"
        ],
        [
          "",
          "Warmco D3 10000mAh Portable Travel Fan"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Warmco D3 10000mAh Portable Travel Fan)",
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
          ""
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
        "text": "Koonie USB Desk Fan is worth checking against its specific oscillation range before assuming any 'wide coverage' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want stronger airflow, lower noise, and extra features like a remote or timer, where Warmco D3 10000mAh Portable Travel Fan justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just want a straightforward personal cooling boost, where Warmco D3 10000mAh Portable Travel Fan already covers the job at the lowest price here."
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
  "Best Foldable Desk Fans carry very different real airflow, which is exactly why a CFM spec rarely tells the story.",
  "We compared this lineup on honest blade size and portability tradeoff, since marketing copy tends to obscure this."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desk fan foldable travel";

export const metaDescription = "A practical comparison of 8 foldable desk fans, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Foldable Desk Fans for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-foldable-desk-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Koonie USB Desk Fan",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51wb7z5JSLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C27NGKCV?tag=theofficejournal-20",
    "description": "Koonie USB Desk Fan is the top pick in this comparison. The desk fan with upgraded dc motor generates airflow up to 16ft/s. As compact as a tablet, this real space-saving desk fan can be placed on the office desk or bedroom nightstand with utmost ease to save limited space.\n\nWarmco D3 10000mAh Portable Travel Fan covers similar ground, though acoustically constructed airflow systems greatly decrease motor and fan noise down to 30db is what tips the choice one way or the other.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Optimal airflow",
      "Stylish & space saving",
      "Personalized cooling"
    ],
    "pros": [
      "Optimal airflow",
      "Stylish & space saving",
      "Personalized cooling",
      "Quiet at all speed"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-foldable-desk-fans-2",
    "rank": 2,
    "badge": "Best Premium Pick",
    "name": "Warmco D3 10000mAh Portable Travel Fan",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lT9WEGigL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP4F63BV?tag=theofficejournal-20",
    "description": "Warmco D3 10000mAh Portable Travel Fan is the priciest pick in this lineup. 10,000Mah battery powers 24h on low / 10h on high, all-day cooling without recharging: this warmco rechargeable desk fan runs a full workday on low speed and overnight camping sessions on a single charge. 89 lbs, slides into any backpack: slim and light enough to slide into any backpack ready for commutes, camping, and cruise travel.\n\nAgainst Koonie USB Desk Fan, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nReach for this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "10,000Mah battery powers 24h on low / 10h on high",
      "1.61\" Slim, 7\"w × 8.4\"h, 5.1\" blade at 0.89 lbs",
      "Soft steady airflow for sleep"
    ],
    "pros": [
      "10,000Mah battery powers 24h on low / 10h on high",
      "1.61\" Slim, 7\"w × 8.4\"h, 5.1\" blade at 0.89 lbs",
      "Soft steady airflow for sleep",
      "Built-in LED display shows live battery percentage and current speed"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-foldable-desk-fans-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Otlonpe Personal Portable Desk Fan",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/515eZds8PyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CTGZ3TPC?tag=theofficejournal-20",
    "description": "Otlonpe Personal Portable Desk Fan is a strong alternative worth comparing directly against the top pick. Up to 23 hours cooling time in one full charge with battery mode or USB mode for no stop working. Experience customizable cooling and comfort with the 4 speed settings of our rechargeable fan portable.\n\n3 oz, and foldable fan bracket making our small fan more easy to carry, which is the main thing that distinguishes this pick from Koonie USB Desk Fan.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
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
    "id": "best-foldable-desk-fans-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Otlonpe Portable Desk Fan 6.5 Inch",
    "price": "$13.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51a0XyWlVQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7PYSRDD?tag=theofficejournal-20",
    "description": "5 Inch is a strong alternative worth comparing directly against the top pick. Experience true cable-free freedom with our versatile personal fan. Stay cool all day and through the night.\n\nKoonie USB Desk Fan lands in a similar spot overall, but the deciding factor between the two is tailor your breeze to any moment with our 4-speed adjustable fan.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Dual-power flexibility: battery & USB operation",
      "Long-lasting 23-hour runtime",
      "4 Customizable speed settings"
    ],
    "pros": [
      "Dual-power flexibility: battery & USB operation",
      "Long-lasting 23-hour runtime",
      "4 Customizable speed settings",
      "Designed for peace and focus"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-foldable-desk-fans-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "JISULIFE Desk Fan Battery Rechargeable",
    "price": "$24.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41+fUUqFbcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PDC3JLB?tag=theofficejournal-20",
    "description": "JISULIFE Desk Fan Battery Rechargeable is a strong alternative worth comparing directly against the top pick. 180° Foldable: equipped with a 180-degree swivel stand, this small desk fan can stand or hang. 4 Custom airflow speeds: experience the gentle breeze by selecting from this personal fan's 4 unique wind speed settings, including a natural wind mode.\n\nKoonie USB Desk Fan is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "180° Foldable: equipped with a 180-degree swivel stand",
      "4 Custom airflow speeds",
      "Long-lasting rechargeable battery"
    ],
    "pros": [
      "180° Foldable: equipped with a 180-degree swivel stand",
      "4 Custom airflow speeds",
      "Long-lasting rechargeable battery",
      "Portable & compact"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-foldable-desk-fans-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Portable Foldable Rechargeable Oscillating Fan",
    "price": "$31.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41KYk0ymfKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7YJ191J?tag=theofficejournal-20",
    "description": "Portable Foldable Rechargeable Oscillating Fan is a strong alternative worth comparing directly against the top pick. 6 inch in diameter, adjustable height - 4\" when folded and 40\" full stretched, easily meet your different needs for height. 70° Smooth oscillating fan, the remote with switch, timer, oscillation, speed levels, you can easily control your personal fan as you like, enjoy a convenient life.\n\nAgainst Koonie USB Desk Fan, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
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
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-foldable-desk-fans-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Zuvas Desk Fan Small Rechargeable Battery Table Fans for travel Ultra Quiet",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LWVQuqKkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08T8TTVHC?tag=theofficejournal-20",
    "description": "Zuvas Desk Fan Small Rechargeable Battery Table Fans for travel Ultra Quiet is a strong alternative worth comparing directly against the top pick. Ultra quiet - the blades design has been upgraded with new technology and high quality ABS, so this small desk fan advanced the sound 25% quieter than others. 180° Vertical rotation - rotate the stand to adjust the wind angles you need, cooling at various angles and improving airflow in small rooms.\n\nKoonie USB Desk Fan covers similar ground, though 3 Speeds strong airflow - press the button to adjust the speed is what tips the choice one way or the other.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Ultra quiet - the blades design has been upgraded with new technology and high quality ABS",
      "180° Vertical rotation - rotate the stand to adjust the wind angles you need",
      "3 Speeds strong airflow - press the button to adjust the speed"
    ],
    "pros": [
      "Ultra quiet - the blades design has been upgraded with new technology and high quality ABS",
      "180° Vertical rotation - rotate the stand to adjust the wind angles you need",
      "3 Speeds strong airflow - press the button to adjust the speed",
      "Dual power supply - the rechargeable fan built in 2000 mah"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-foldable-desk-fans-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Gaiatop Foldable Desk Fan with Night Light",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41T2zJ0SZYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZ6KKX5K?tag=theofficejournal-20",
    "description": "Gaiatop Foldable Desk Fan with Night Light is a strong alternative worth comparing directly against the top pick. 7in, making it easy to pack in a backpack or suitcase. 6000Mah rechargeable fan, up to 20 hours runtime: runs 4 to 20 hours per charge (less with light on), fully recharges in 5 hours.\n\nKoonie USB Desk Fan covers similar ground, though fan head tilts 180° and stand folds 90° for flexible airflow is what tips the choice one way or the other.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "From 10.6in to 2.7in: designed as a travel-friendly portable fan",
      "6000Mah rechargeable fan",
      "Built-in LED night light"
    ],
    "pros": [
      "From 10.6in to 2.7in: designed as a travel-friendly portable fan",
      "6000Mah rechargeable fan",
      "Built-in LED night light",
      "Foldable fan with adjustable airflow"
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

export const breadcrumbLabel = "Best Foldable Desk Fans";
