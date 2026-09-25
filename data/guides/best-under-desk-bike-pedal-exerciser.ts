// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-under-desk-bike-pedal-exerciser";

export const guideTitle = "The Best Under-Desk Pedal Exercisers for Moving While You Work";

export const breadcrumbLabel = "Best Under-Desk Pedal Exercisers";

export const metaTitle = "Best Under-Desk Bike Pedal Exercisers: Quiet and Compact Picks (2026)";

export const metaDescription = "We compared under-desk pedal exercisers on resistance type, noise, desk clearance, user weight and app support, from basic friction models to magnetic and motorized designs.";

export const mainKeyword = "under desk bike pedal exerciser";

export const introParagraphs = [
  "An under-desk pedal exerciser only works at a desk if it fits under it and stays quiet enough for calls. Clearance between the floor and the desk underside, including any crossbar or drawer, rules out some models before resistance or features come into it.",
  "The biggest divide is resistance type. Friction models are the cheapest but tend to be louder and less smooth; magnetic models run quieter and cost more. Beyond that, the options here add apps, resistance bands for arm work, heavier flywheels, or, in one case, a motor that moves the pedals for you.",
  "Our comparison is based on published specifications, including resistance, weight limits, noise claims and dimensions, plus price position, not hands-on testing. Prices range from about $32 to $172 at the time of writing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/41vbdc4txHL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "vaunn-pedal-exerciser",
    "rank": 1,
    "badge": "Best Basic Folding Model",
    "name": "Vaunn Under Desk Bike Pedal Exerciser",
    "price": "$35.99",
    "rating": "4.2",
    "reviews": "16,185",
    "imageUrl": "https://m.media-amazon.com/images/I/41vbdc4txHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XLP3WZK?tag=theofficejournal-20",
    "description": "The Vaunn is the no-frills option: a 5.4 lb alloy steel pedal exerciser with five levels of friction resistance, an LCD showing count and calories, and quick-release folding for storage.\n\nIt works for arms on a tabletop as well as legs, and non-skid rubber feet help it stay put. It is widely reviewed.\n\nFriction resistance tends to be louder than magnetic, which matters on calls, and five levels is the narrowest range here.",
    "specs": [
      "Resistance: friction, 5 levels",
      "Display: LCD (count, calories)",
      "Weight: 5.4 lb",
      "Folding, quick release",
      "Arms or legs"
    ],
    "pros": [
      "Low price",
      "Light and folding",
      "Widely reviewed"
    ],
    "cons": [
      "Friction is louder than magnetic",
      "Only five levels"
    ],
    "bestFor": "Occasional use where price and storage matter most.",
    "summary": "A light, folding friction pedal exerciser with five levels and an LCD counter.",
    "skipIf": "You pedal during calls; a magnetic model such as the himaly Mini should be quieter."
  },
  {
    "id": "himaly-mini-exercise-bike",
    "rank": 2,
    "badge": "Best Budget Magnetic Model",
    "name": "himaly Mini Exercise Bike",
    "price": "$44.09",
    "rating": "4.0",
    "reviews": "18,313",
    "imageUrl": "https://m.media-amazon.com/images/I/41+7zbVyflL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07JFTQ2MS?tag=theofficejournal-20",
    "description": "The himaly Mini is the lowest-cost magnetic option here, and magnetic belt-drive resistance should be quieter than the friction models at a similar price.\n\nIt offers eight levels and an LCD showing time, count, calories and distance. At about 4kg it is easy to move, and it works for arms or legs. It is widely reviewed among the magnetic picks.\n\nIt has no app connection, and a light base may shift more than heavier units such as the DeskCycle V2.",
    "specs": [
      "Resistance: magnetic belt drive, 8 levels",
      "Display: LCD (time, count, calories, distance)",
      "Weight: about 4kg",
      "Anti-slip pedals and base",
      "Arms or legs"
    ],
    "pros": [
      "Magnetic resistance at a budget price",
      "Fuller display",
      "Light"
    ],
    "cons": [
      "No app",
      "Light base"
    ],
    "bestFor": "Budget buyers who want quieter pedaling than a friction model.",
    "summary": "Magnetic belt-drive resistance with eight levels and a fuller LCD, for about $44.",
    "skipIf": "You want app workouts; the Sunny SF-B023005 adds them."
  },
  {
    "id": "wakeman-pedal-exerciser",
    "rank": 3,
    "badge": "Lowest-Cost Option",
    "name": "Wakeman Fitness Folding Pedal Exerciser",
    "price": "$31.64",
    "rating": "4.0",
    "reviews": "9,859",
    "imageUrl": "https://m.media-amazon.com/images/I/41cUJFooYIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01E3CPAK0?tag=theofficejournal-20",
    "description": "The Wakeman is the lowest-priced model here and the one to choose if you want no setup at all: it arrives fully assembled.\n\nIt uses friction resistance set by a dial, and its LCD shows time, revolutions, RPM, calories and a scan mode. It folds, weighs 5.82 lb and works for arms or legs.\n\nA dial gives less repeatable settings than numbered levels, and friction resistance tends to be louder than magnetic.",
    "specs": [
      "Resistance: friction, adjustable dial",
      "Display: 5-function LCD",
      "No assembly required",
      "Weight: 5.82 lb",
      "Folding"
    ],
    "pros": [
      "Lowest price here",
      "No assembly",
      "Detailed display"
    ],
    "cons": [
      "Friction is louder than magnetic",
      "Dial rather than set levels"
    ],
    "bestFor": "Trying desk pedaling for as little money and effort as possible.",
    "summary": "The cheapest pedal exerciser here, arriving fully assembled with a five-function LCD.",
    "skipIf": "Noise matters; a magnetic model is likely quieter."
  },
  {
    "id": "sunny-sf-b023005-pedal-exerciser",
    "rank": 4,
    "badge": "Best Budget App-Connected Model",
    "name": "Sunny Health & Fitness SF-B023005",
    "price": "$69.99",
    "rating": "4.3",
    "reviews": "8,023",
    "imageUrl": "https://m.media-amazon.com/images/I/41EfhD7GoGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C15YQW98?tag=theofficejournal-20",
    "description": "The Sunny SF-B023005 is the budget pick for app-guided workouts: Bluetooth connects it to the SunnyFit app, which Sunny says offers more than 1,000 workouts and 10,000 virtual routes.\n\nIt uses stepless friction resistance across 16 levels with a mesh belt drive, which Sunny describes as quieter than standard friction designs. At 11.7 lb it is heavier and steadier than the entry-level models.\n\nIt costs about twice as much as the basic models, and it is still friction resistance rather than magnetic.",
    "specs": [
      "Resistance: stepless friction, 16 levels",
      "Bluetooth, SunnyFit app",
      "Mesh belt drive",
      "Weight: 11.7 lb",
      "Arms or legs"
    ],
    "pros": [
      "App workouts at a budget price",
      "Fine resistance control",
      "Heavier and steadier than basic models"
    ],
    "cons": [
      "Friction rather than magnetic",
      "App adds complexity"
    ],
    "bestFor": "Buyers who want structured workouts without paying for a premium unit.",
    "summary": "A 16-level pedal exerciser with Bluetooth and the SunnyFit app for about $70.",
    "skipIf": "You want a simple unit with no app; the himaly Mini is magnetic and cheaper."
  },
  {
    "id": "sunny-sf-b020026smart-pedal-exerciser",
    "rank": 5,
    "badge": "Best 3-in-1 With Bands",
    "name": "Sunny Health & Fitness SF-B020026SMART",
    "price": "$152.99",
    "rating": "4.4",
    "reviews": "5,061",
    "imageUrl": "https://m.media-amazon.com/images/I/51rsj24ng8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D85WGTCQ?tag=theofficejournal-20",
    "description": "The Sunny SF-B020026SMART suits anyone who wants more than pedaling: it combines eight-level magnetic resistance with included 20 lb resistance bands for upper-body exercises, plus the SunnyFit app.\n\nSunny describes it as whisper-quiet, and a floor stabilizer adds steadiness. It weighs 20.5 lb and is cordless.\n\nThe 200 lb maximum user weight is lower than several models here, and it costs more than the YOSUDA Pro, which also has bands.",
    "specs": [
      "Resistance: magnetic, 8 levels",
      "Includes 20 lb resistance bands",
      "SunnyFit app",
      "Floor stabilizer",
      "Weight: 20.5 lb",
      "Max user weight: 200 lb"
    ],
    "pros": [
      "Bands add upper-body work",
      "Magnetic resistance",
      "Stabilizer"
    ],
    "cons": [
      "200 lb user limit",
      "Costs more than the YOSUDA Pro"
    ],
    "bestFor": "People who want pedaling and light band exercises in one unit.",
    "summary": "Magnetic resistance, resistance bands for upper-body work and the SunnyFit app.",
    "skipIf": "You weigh over 200 lb; the DeskCycle V2 or Exerpeutic are rated higher."
  },
  {
    "id": "deskcycle-v2-pedal-exerciser",
    "rank": 6,
    "badge": "Best Overall",
    "name": "DeskCycle V2 Under Desk Bike",
    "price": "$159.99",
    "rating": "4.5",
    "reviews": "5,983",
    "imageUrl": "https://m.media-amazon.com/images/I/317D79BdGEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BDRFMZK?tag=theofficejournal-20",
    "description": "The DeskCycle V2 is the most desk-focused model here: DeskCycle lists a height adjustable from 9 to 10 inches and fit under desks as low as 27 inches, and it has the strongest resistance here, up to 39 lb across eight magnetic levels.\n\nA high-inertia flywheel is designed for a smoother pedal stroke, strap-in pedals keep feet in place, and the LCD detaches so you can keep it on the desk. It is rated for 270 lb.\n\nAt 24.7 lb it is heavy to move, and it costs more than most models here.",
    "specs": [
      "Resistance: magnetic, 8 levels, up to 39 lb",
      "High-inertia flywheel",
      "Height: 9–10\" (fits desks from 27\", per listing)",
      "Detachable LCD, strap-in pedals",
      "Weight: 24.7 lb",
      "Max user weight: 270 lb"
    ],
    "pros": [
      "Strongest resistance here",
      "Designed around desk clearance",
      "Detachable display"
    ],
    "cons": [
      "Heavy",
      "Among the pricier models"
    ],
    "bestFor": "Regular desk pedaling where clearance and a smooth stroke matter.",
    "summary": "Eight magnetic levels up to 39 lb of resistance, a heavy flywheel and adjustable height.",
    "skipIf": "You want app workouts; the YOSUDA Pro connects to Zwift and Kinomap."
  },
  {
    "id": "yosuda-under-desk-bike-pro",
    "rank": 7,
    "badge": "Best for Quiet Operation",
    "name": "YOSUDA Under Desk Bike Pro",
    "price": "$119.99",
    "rating": "4.5",
    "reviews": "3,559",
    "imageUrl": "https://m.media-amazon.com/images/I/51HpgYlwtaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJNPBTJ4?tag=theofficejournal-20",
    "description": "The YOSUDA Pro is the pick if noise is the main concern: YOSUDA rates it under 10dB, the lowest claim here, with 16 levels of magnetic resistance.\n\nBluetooth connects it to Kinomap and Zwift, and the 3-in-1 design adds resistance bands. Dual anti-slip feet and a non-slip mat help it stay put, and YOSUDA says it ships 95 percent assembled.\n\nThe 220 lb user limit is lower than the DeskCycle V2's, and it has fewer buyer reviews than the budget models.",
    "specs": [
      "Resistance: magnetic, 16 levels",
      "Noise: under 10dB (manufacturer claim)",
      "Bluetooth: Kinomap, Zwift",
      "Resistance bands included",
      "Weight: 17.9 lb",
      "Max user weight: 220 lb"
    ],
    "pros": [
      "Lowest noise claim here",
      "16 magnetic levels",
      "Works with Zwift and Kinomap"
    ],
    "cons": [
      "220 lb user limit",
      "Fewer buyer reviews"
    ],
    "bestFor": "People who pedal during calls and want app-based workouts.",
    "summary": "16 magnetic levels, a listed noise level under 10dB and Zwift and Kinomap support.",
    "skipIf": "You weigh over 220 lb; the DeskCycle V2 is rated for 270 lb."
  },
  {
    "id": "exerpeutic-2000m-pedal-exerciser",
    "rank": 8,
    "badge": "Only Motorized Model",
    "name": "Exerpeutic 2000M Motorized Elliptical",
    "price": "$172.17",
    "rating": "4.3",
    "reviews": "976",
    "imageUrl": "https://m.media-amazon.com/images/I/41-ppoSRPiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085DBBQM9?tag=theofficejournal-20",
    "description": "The Exerpeutic 2000M is different from everything else here: an electric motor moves the pedals, so it provides passive movement rather than a workout you power yourself.\n\nA remote on a 6-foot cord adjusts speed without bending down, and an automatic 15-minute timer ends each session. Foldable pedals with straps work for arms or legs, a floor mat is included, and it is rated for 286 lb.\n\nIt is the most expensive model here at the time of writing. If you are considering it for rehabilitation, ask a clinician whether passive movement suits you.",
    "specs": [
      "Drive: electric motor",
      "Remote on 6-foot cord",
      "Automatic 15-minute timer",
      "Foldable strapped pedals",
      "Floor mat included",
      "Max user weight: 286 lb"
    ],
    "pros": [
      "Passive, motor-driven movement",
      "Remote speed control",
      "Highest user weight here"
    ],
    "cons": [
      "Not an active workout",
      "Most expensive model here",
      "Needs power"
    ],
    "bestFor": "People who want gentle, motor-driven leg or arm movement while seated.",
    "summary": "An electric model that moves the pedals for you, with a remote and a 15-minute timer.",
    "skipIf": "You want exercise you power yourself; any of the other models suit that."
  }
];

export const howWeEvaluated = [
  {
    "title": "Resistance",
    "description": "We compared friction, magnetic and motorized designs, and the number of levels."
  },
  {
    "title": "Noise and stability",
    "description": "We noted listed noise claims and weight, treating noise figures as manufacturer claims."
  },
  {
    "title": "Fit",
    "description": "We recorded height, clearance claims and user weight limits where listed."
  },
  {
    "title": "Features and price",
    "description": "We compared displays, apps and extras against price position. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Desk clearance",
    "explanation": "Measure from the floor to the lowest point under your desk, including crossbars or drawers, and allow for your knees at the top of the stroke. The DeskCycle V2 lists fit under desks as low as 27 inches."
  },
  {
    "criterion": "Friction or magnetic",
    "explanation": "Friction models (Vaunn, Wakeman, Sunny SF-B023005) are cheaper; magnetic models (himaly, Sunny 3-in-1, DeskCycle, YOSUDA) tend to be quieter and smoother."
  },
  {
    "criterion": "Noise",
    "explanation": "If you pedal on calls, favor magnetic resistance. The YOSUDA Pro makes the lowest noise claim, under 10dB."
  },
  {
    "criterion": "User weight and stability",
    "explanation": "Limits here range from 200 lb (Sunny 3-in-1) to 286 lb (Exerpeutic). Heavier units are generally less likely to slide."
  },
  {
    "criterion": "Apps and extras",
    "explanation": "Apps (SunnyFit, Zwift, Kinomap) add structured workouts; resistance bands add upper-body work. Neither is essential for simple movement."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Lowest cost",
          "Wakeman or Vaunn",
          "Friction, folding, about $32–$36"
        ],
        [
          "Quieter on a budget",
          "himaly Mini",
          "Magnetic, about $44"
        ],
        [
          "App workouts on a budget",
          "Sunny SF-B023005",
          "SunnyFit app, 16 levels"
        ],
        [
          "Quiet with apps",
          "YOSUDA Pro",
          "Under 10dB claim, Zwift and Kinomap"
        ],
        [
          "Desk fit and strong resistance",
          "DeskCycle V2",
          "Adjustable height, up to 39 lb"
        ],
        [
          "Pedaling plus bands",
          "Sunny SF-B020026SMART",
          "Magnetic, bands, app"
        ],
        [
          "Passive movement",
          "Exerpeutic 2000M",
          "Motor-driven"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Models"
      ],
      "rows": [
        [
          "About $32–$44",
          "Wakeman, Vaunn, himaly Mini"
        ],
        [
          "About $70–$120",
          "Sunny SF-B023005, YOSUDA Pro"
        ],
        [
          "About $150–$172",
          "Sunny SF-B020026SMART, DeskCycle V2, Exerpeutic 2000M"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "How much desk clearance do I need?",
    "a": "It depends on the model's height and your leg length. Measure from the floor to the lowest part of the desk underside and compare it with the model's height plus the rise of your knees while pedaling. The DeskCycle V2 lists fit under desks from 27 inches."
  },
  {
    "q": "Which model is quietest?",
    "a": "The YOSUDA Pro makes the lowest noise claim here, under 10dB. Magnetic models are generally quieter than friction models like the Vaunn and Wakeman."
  },
  {
    "q": "What's the difference between friction and magnetic resistance?",
    "a": "Friction resistance presses a pad against the flywheel; it is simple and cheap but can be louder and less smooth. Magnetic resistance uses magnets without contact, which tends to be quieter and smoother, at a higher price."
  },
  {
    "q": "Which model has the strongest resistance?",
    "a": "The DeskCycle V2, which lists up to 39 lb across eight magnetic levels."
  },
  {
    "q": "Does pedal size matter if I have larger feet?",
    "a": "It can. Check the pedal dimensions and whether straps are adjustable before buying."
  },
  {
    "q": "Is there a model that pedals for you?",
    "a": "Yes, the Exerpeutic 2000M uses a motor. It provides passive movement rather than exercise you power yourself. If you are recovering from an injury, ask a clinician whether it suits you."
  }
];

export const bottomLine = [
  "For regular pedaling at a desk, the DeskCycle V2 is the model we would start with, with its adjustable height, desk-clearance guidance and strong resistance. The YOSUDA Pro is the better fit if quiet operation and app workouts matter more, and the himaly Mini is the budget route to magnetic resistance.",
  "For occasional use, the Wakeman and Vaunn are inexpensive, folding friction models. The Sunny SF-B023005 adds app workouts on a budget, the Sunny 3-in-1 adds resistance bands, and the Exerpeutic 2000M is a separate category: motor-driven, passive movement."
];

export const relatedGuides = [
  {
    "href": "/guide/best-under-desk-elliptical",
    "title": "Best Under Desk Ellipticals (2026)"
  },
  {
    "href": "/guide/best-under-desk-elliptical-for-seniors",
    "title": "Best Under Desk Ellipticals for Seniors (2026)"
  },
  {
    "href": "/guide/best-adjustable-under-desk-footrests",
    "title": "Best Adjustable Under Desk Footrests (2026)"
  }
];
