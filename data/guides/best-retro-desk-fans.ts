// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "CFM (Airflow) vs Your Actual Desk Distance",
    "explanation": "CFM (cubic feet per minute) measures how much air a fan actually moves, and for a fan sitting at typical desk distance, roughly 100 to 300 CFM is enough to feel a real, comfortable breeze without turning your desk into a wind tunnel; a fan pushing well over that at close range can scatter papers and dry out your eyes rather than just cooling you. Larger pedestal or tower fans built for whole-room circulation often exceed 600 CFM, but that's the wrong comparison for a fan that'll sit two to three feet from your face all day."
  },
  {
    "criterion": "Noise Level in DB at Working Speeds",
    "explanation": "Decibel ratings only tell the real story if you check them at the speed you'll actually run the fan at: many listings quote the noise level for the lowest, weakest setting, which isn't useful if you need medium or high speed to feel any real airflow. As a benchmark, below 25 DB is quiet enough for calls or focus work, 30-45 DB is noticeable but tolerable for most people, and above 45 DB will compete with conversation in a quiet room."
  },
  {
    "criterion": "Blade Size vs Portability Tradeoff",
    "explanation": "For desk use specifically, a 6 to 8 inch blade diameter tends to hit the best balance: noticeably more airflow than a 3 to 4 inch USB mini fan, while still compact enough to sit on a desk without eating into your workspace. A USB mini fan is portable and fine for a brief personal cooling boost, but its airflow drops off sharply as fan size shrinks, so don't expect whole-desk cooling from something that fits in a bag."
  },
  {
    "criterion": "Oscillation Range and Desk Placement",
    "explanation": "Oscillation range determines coverage area, not just airflow strength: a fan that sweeps 90 to 120 degrees spreads cooling across a wider desk or shared space, while a fixed or narrow-oscillation fan concentrates all its airflow on one spot. Match this to your actual desk layout, a single small desk usually doesn't need wide oscillation, while a shared table or an L-shaped setup benefits from it."
  },
  {
    "criterion": "Power Source: USB, AC Plug, or Rechargeable Battery",
    "explanation": "A USB-powered fan is convenient for a laptop-only setup with no nearby outlet, but it's limited to whatever power a USB port supplies, generally producing less airflow than an AC-powered fan plugged directly into a wall outlet. A rechargeable battery fan adds portability for moving between rooms or desks but needs periodic recharging and will eventually lose battery capacity over repeated charge cycles, the same tradeoff as any rechargeable device. Match the power source to where the fan will actually live, not just which sounds most convenient on paper."
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

export const guideSlug = "best-retro-desk-fans";

export const guideTitle = "The Best Retro Desk Fans for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/51mHhTQP3hL._SL500_.jpg";

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
          "Vornado VFANTM Mini Classic Vintage Metal Desk Fan"
        ],
        [
          "",
          "Lasko Oscillating Table Top Fan"
        ],
        [
          "Large desk, need real airflow",
          "Good Housekeeping 92603 All-Metal 12\" Retro Desk Office Table Fan with Wide"
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
          "Vornado VFANTM Mini Classic Vintage Metal Desk Fan"
        ],
        [
          "",
          ""
        ],
        [
          "",
          "Good Housekeeping 92603 All-Metal 12\" Retro Desk Office Table Fan with Wide"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Vornado VFANTM Mini Classic Vintage Metal Desk Fan)",
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
          "Lasko Oscillating Table Top Fan"
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
        "text": "Lasko Oscillating Table Top Fan is worth checking against its specific oscillation range before assuming any 'wide coverage' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want stronger airflow, lower noise, and extra features like a remote or timer, where Good Housekeeping 92603 All-Metal 12\" Retro Desk Office Table Fan with Wide justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just want a straightforward personal cooling boost, where Vornado VFANTM Mini Classic Vintage Metal Desk Fan already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "CFM (Airflow) vs Your Actual Desk Distance",
    "description": "CFM (cubic feet per minute) measures how much air a fan actually moves, and for a fan sitting at typical desk distance, roughly 100 to 300 CFM is enough to feel a real, comfortable breeze without turning your desk into a wind tunnel; a fan pushing well over that at close range can scatter papers and dry out your eyes rather than just cooling you."
  },
  {
    "title": "Noise Level in DB at Working Speeds",
    "description": "Decibel ratings only tell the real story if you check them at the speed you'll actually run the fan at: many listings quote the noise level for the lowest, weakest setting, which isn't useful if you need medium or high speed to feel any real airflow."
  },
  {
    "title": "Blade Size vs Portability Tradeoff",
    "description": "For desk use specifically, a 6 to 8 inch blade diameter tends to hit the best balance: noticeably more airflow than a 3 to 4 inch USB mini fan, while still compact enough to sit on a desk without eating into your workspace."
  },
  {
    "title": "Oscillation Range and Desk Placement",
    "description": "Oscillation range determines coverage area, not just airflow strength: a fan that sweeps 90 to 120 degrees spreads cooling across a wider desk or shared space, while a fixed or narrow-oscillation fan concentrates all its airflow on one spot."
  },
  {
    "title": "Power Source: USB, AC Plug, or Rechargeable Battery",
    "description": "A USB-powered fan is convenient for a laptop-only setup with no nearby outlet, but it's limited to whatever power a USB port supplies, generally producing less airflow than an AC-powered fan plugged directly into a wall outlet."
  }
];

export const introParagraphs = [
  "Across best retro desk fans, range widely in real noise output, given that differences show up at your actual desk distance.",
  "What separates these picks is honest blade size and portability tradeoff, since these separate real capability from claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desk fan retro design";

export const metaDescription = "We compared 8 retro desk fans on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Retro Desk Fans for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-retro-desk-fans-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Lasko Oscillating Table Top Fan",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mHhTQP3hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01BQDUVMQ?tag=theofficejournal-20",
    "description": "Lasko Oscillating Table Top Fan is the strongest all-around choice here. This small oscillating fan is built with a durable all-metal design, finished with oil-rubbed bronze for a vintage look and feel. Keep your cool where you need it most.\n\nVintage Air Circulator Fan, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nChoose this if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Portable style",
      "Oscillating desktop fan",
      "Convenient and practical"
    ],
    "pros": [
      "Portable style",
      "Oscillating desktop fan",
      "Convenient and practical",
      "Built in safety"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-retro-desk-fans-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Vornado VFAN Jr. Vintage Air Circulator Fan",
    "price": "$53.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51NsLRIk-YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00TX79BK6?tag=theofficejournal-20",
    "description": "Vintage Air Circulator Fan is a strong alternative worth comparing directly against the top pick. This desk fan features vintage green metal construction with 2-speed settings, ideal as a dorm room fan for bedroom, office, or tabletop placement. Multi-directional tilt head allows you to direct powerful air circulation exactly where needed.\n\nSide by side with Lasko Oscillating Table Top Fan, the real difference worth noting is the vintage fan design combines nostalgic appeal with modern performance.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Desk fan features vintage green metal construction with 2-speed settings",
      "Multi-directional tilt head allows you to direct powerful air circulation exactly where needed",
      "Vintage fan design combines nostalgic appeal with modern performance"
    ],
    "pros": [
      "Desk fan features vintage green metal construction with 2-speed settings",
      "Multi-directional tilt head allows you to direct powerful air circulation exactly where needed",
      "Vintage fan design combines nostalgic appeal with modern performance",
      "2-Speed dial control provides whisper-quiet operation or gentle white noise for sleeping"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-retro-desk-fans-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "AMACOOL Oscillating Vintage Fan",
    "price": "$70.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51mdX-BP77L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14R1FNV?tag=theofficejournal-20",
    "description": "AMACOOL Oscillating Vintage Fan is a strong alternative worth comparing directly against the top pick. Power cord with exclusive safety fuse to shut off power if there any electrical fault, fully assembled out of box, fan grilles can be take off for easy cleaning, 12-month product service.\n\nLasko Oscillating Table Top Fan is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Fit size & timeless design",
      "Long-lasting durability",
      "Quiet white noise from real fan"
    ],
    "pros": [
      "Fit size & timeless design",
      "Long-lasting durability",
      "Quiet white noise from real fan",
      "Wide angle oscillation"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-retro-desk-fans-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Good Housekeeping (92604) All-Metal 12\" Retro Desk Office Table Fan with Wide",
    "price": "$72.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51cCKqbAs-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6YLKBK9?tag=theofficejournal-20",
    "description": "Good Housekeeping (92604) All-Metal 12\" Retro Desk Office Table Fan with Wide is a strong alternative worth comparing directly against the top pick. 70° Smooth oscillation with manual vertical tilt adjustment.\n\nWeighing this against Lasko Oscillating Table Top Fan, 3-Speed settings with read-accessed speed selector ends up being the detail that matters most for most buyers.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Durable, all-metal construction",
      "70° Smooth oscillation with manual vertical tilt adjustment",
      "3-Speed settings with read-accessed speed selector"
    ],
    "pros": [
      "Durable, all-metal construction",
      "70° Smooth oscillation with manual vertical tilt adjustment",
      "3-Speed settings with read-accessed speed selector",
      "Multiple finishes available to match all home décor styles and preferences"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-retro-desk-fans-5",
    "rank": 5,
    "badge": "Best Value",
    "name": "Vornado VFANTM Mini Classic Vintage Metal Desk Fan",
    "price": "$37.86",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41HrYneL0YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N39W04I?tag=theofficejournal-20",
    "description": "Vornado VFANTM Mini Classic Vintage Metal Desk Fan is the best-value option in this roundup, priced lowest without a real capability gap. This mini desk fan delivers powerful personal cooling with Vornado' s signature air circulation technology. Featuring retro metal construction and classic styling, this tabletop fan combines timeless design with modern performance.\n\nLasko Oscillating Table Top Fan covers similar ground, though our standards are high, and so are your expectations is what tips the choice one way or the other.\n\nGo with this pick if you want a capable pick without paying for headroom you won't use. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Mini desk fan delivers powerful personal cooling with Vornado' s signature air circulation technology",
      "Retro metal construction and classic styling",
      "Multi-directional tilt head allows you to direct cooling precisely where needed"
    ],
    "pros": [
      "Mini desk fan delivers powerful personal cooling with Vornado' s signature air circulation technology",
      "Retro metal construction and classic styling",
      "Multi-directional tilt head allows you to direct cooling precisely where needed",
      "Measuring 7.1 in x 8.3 in x 5.7"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-retro-desk-fans-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Holmes 12\" Vintage Metal Table Fan 3-Speed Brushed Copper Finish",
    "price": "$65.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51RHZ2qC2BL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GD2HW295?tag=theofficejournal-20",
    "description": "Holmes 12\" Vintage Metal Table Fan 3-Speed Brushed Copper Finish is a strong alternative worth comparing directly against the top pick. 3 Speed settings allow personalized airflow control. 4 ft/sec velocity for efficient cooling.\n\nWeighing this against Lasko Oscillating Table Top Fan, 80° Oscillation circulates cool air evenly throughout your space ends up being the detail that matters most for most buyers.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "Custom comfort",
      "4-Blade system delivers up to 16.4 ft/sec velocity for efficient cooling",
      "Wide-angle oscillation"
    ],
    "pros": [
      "Custom comfort",
      "4-Blade system delivers up to 16.4 ft/sec velocity for efficient cooling",
      "Wide-angle oscillation",
      "Adjustable tilt head"
    ],
    "cons": [
      "USB-powered models cap out at lower airflow than AC-plugged fans",
      "Noise rating usually reflects the lowest speed, not daily use"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-retro-desk-fans-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Good Housekeeping (92605) All-Metal 12\" Retro Desk Office Table Fan with Wide",
    "price": "$73.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51C6AMS2-rL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6YLHYV7?tag=theofficejournal-20",
    "description": "Good Housekeeping (92605) All-Metal 12\" Retro Desk Office Table Fan with Wide is a strong alternative worth comparing directly against the top pick. 70° Smooth oscillation with manual vertical tilt adjustment.\n\n3-Speed settings with read-accessed speed selector, which is the main thing that distinguishes this pick from Lasko Oscillating Table Top Fan.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many listings only quote the DB rating at the lowest speed, so check the noise level at the speed you'll actually run daily before assuming it stays that quiet.",
    "specs": [
      "Durable, all-metal construction",
      "70° Smooth oscillation with manual vertical tilt adjustment",
      "3-Speed settings with read-accessed speed selector"
    ],
    "pros": [
      "Durable, all-metal construction",
      "70° Smooth oscillation with manual vertical tilt adjustment",
      "3-Speed settings with read-accessed speed selector",
      "Multiple finishes available to match all home décor styles and preferences"
    ],
    "cons": [
      "Noise rating usually reflects the lowest speed, not daily use",
      "USB-powered models cap out at lower airflow than AC-plugged fans"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-retro-desk-fans-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Good Housekeeping 92603 All-Metal 12\" Retro Desk Office Table Fan with Wide",
    "price": "$69.88",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51IPUYpCD1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C6YKK17Y?tag=theofficejournal-20",
    "description": "Good Housekeeping 92603 All-Metal 12\" Retro Desk Office Table Fan with Wide is a strong alternative worth comparing directly against the top pick.\n\nLasko Oscillating Table Top Fan is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. USB-powered fans are convenient for a laptop-only desk but cap out at lower airflow than an AC-plugged model, so match the power source to how much cooling you actually need.",
    "specs": [
      "All metal construction",
      "All-metal construction"
    ],
    "pros": [
      "All metal construction",
      "All-metal construction",
      "Straightforward setup based on the listed specs"
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

export const breadcrumbLabel = "Best Retro Desk Fans";
