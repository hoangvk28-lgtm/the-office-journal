// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Confirm the cooling accessory actually matches your mini PC's chassis shape and airflow design",
    "explanation": "Mini PC cooling accessories, whether a cooling stand, an external fan, or a cooling pad, work by improving airflow around the device's existing vents, so their effectiveness depends heavily on where your specific mini PC's own intake and exhaust vents are located, which varies meaningfully between brands and even between generations of the same product line.\n\nAn accessory designed to blow air upward into a bottom-vented chassis provides little benefit to a mini PC that vents primarily from the rear or sides, regardless of how much airflow the accessory itself generates, since the cooling benefit only materializes when moving air actually reaches the device's real intake points.\n\nCheck your specific mini PC model's vent locations (usually visible in official product photos or its spec sheet) before assuming any generically-marketed cooling accessory will meaningfully help."
  },
  {
    "criterion": "Understand that passive stands and active fans solve different problems",
    "explanation": "A passive cooling stand improves airflow purely through elevation and often an open or perforated design that lets ambient air circulate more freely around the chassis than sitting flat on a desk, requiring no power and adding zero noise, while an active cooling fan or pad forces air movement and can meaningfully lower temperatures under sustained heavy load in a way passive elevation alone cannot.\n\nThis matters because a passive stand is a reasonable solution for a mini PC that only occasionally runs warm, while a thermally-constrained device under sustained load, like one running a home server or transcoding video continuously, benefits more from active airflow that a passive stand simply can't provide regardless of its design quality.\n\nMatch the accessory type to your actual thermal problem: light everyday use rarely needs active cooling, while continuous heavy workloads benefit from genuine forced airflow."
  },
  {
    "criterion": "Check the noise level if the accessory uses an active fan",
    "explanation": "Any cooling accessory with its own fan adds a new noise source to your desk or media setup, and the noise level, when disclosed at all, is typically given in decibels (DBA) measured at a specific distance, though sellers rarely specify testing conditions consistently, making direct comparisons across listings imperfect but still directionally useful.\n\nThis matters specifically because the whole point of many mini PC setups, home theater boxes and quiet home office machines especially, is to avoid the noise of a traditional desktop tower, and adding a loud aftermarket cooling fan can undermine that goal entirely.\n\nCheck for a stated noise level and prioritize fans with speed control if quiet operation matters, since a fan that can be throttled down during light use and sped up only under real load offers the best of both a quiet baseline and real cooling headroom when needed."
  },
  {
    "criterion": "Verify the power source, since not every cooling accessory is self-powered",
    "explanation": "Cooling fans and some cooling pads draw power either from a USB connection to the mini PC or host device itself, or from a separate wall adapter, and this distinction affects both setup complexity and whether the accessory turns on and off automatically with the device it's cooling.\n\nA USB-powered accessory typically only runs while the mini PC itself is powered on and providing that USB power, which is usually the desired behavior for cooling, while a separately wall-powered accessory needs its own outlet and stays on independently unless manually switched off, adding a cable and a decision point the buyer needs to plan for in their setup.\n\nCheck the listing's stated power source and confirm it matches how you want the cooling accessory to behave relative to your mini PC's own power state."
  },
  {
    "criterion": "Check physical clearance and desk space the accessory adds, not just its footprint",
    "explanation": "A cooling stand or external fan adds real height, width, or depth beyond your mini PC's own dimensions, and on an already-tight desk setup, this added footprint can conflict with a monitor stand, other peripherals, or the available desk depth in ways that aren't obvious from a product photo showing the accessory in isolation.\n\nThis is particularly relevant for stands that elevate the mini PC significantly or fans that mount to a specific side, since the resulting combined footprint of mini PC plus accessory is what actually needs to fit your space, not the accessory's dimensions alone.\n\nMeasure your actual available desk space with the mini PC's own footprint already accounted for, then check the accessory's added dimensions against what's left over, rather than assuming any accessory marketed as \"compact\" will automatically fit."
  }
];

export const faq = [
  {
    "q": "Are these fans made specifically for Mini PCs?",
    "a": "All seven are general-purpose compact USB fans also marketed for routers, TV boxes, and game consoles. That's the normal way most Mini PC owners source a cooling fan, since dedicated Mini PC-only fans are uncommon."
  },
  {
    "q": "Where should I place a Mini PC cooling fan?",
    "a": "Place it so airflow reaches the Mini PC's real intake or helps hot exhaust move away. Avoid blowing against a closed panel while leaving the intake starved for air."
  },
  {
    "q": "Is a 120mm fan always better than a 40mm fan?",
    "a": "A 120mm fan moves more air per the CFM figures in this guide, but a 40mm fan fits tight gaps a larger fan physically cannot, which matters more in a cramped desk setup."
  },
  {
    "q": "How much fan noise is acceptable?",
    "a": "That depends on your desk environment. Fans with a stated DBA rating, like the GSCOLER X1 at 18dB, give you a number to compare rather than guessing from a vague 'quiet' claim."
  },
  {
    "q": "Should I power the fan from the Mini PC?",
    "a": "USB power is convenient but uses a port and draws power from the host. A separate USB adapter or power bank keeps your Mini PC's ports free."
  }
];

export const guideSlug = "best-mini-pc-cooling-fans";

export const guideTitle = "The Best Mini PC Cooling Fans for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/41lX2RvlrbL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "note": "Every pick in this specific comparison uses a similar cooling approach; check the product names and specs above for the exact passive-versus-fan design."
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
          "",
          "GSCOLER X1 USB Cooling Fan"
        ],
        [
          "",
          "Marame Quiet Router Cooling Fan Stand"
        ],
        [
          "No firm budget ceiling, prioritizing active cooling power",
          "Easy Cloud 120mm USB Fan"
        ]
      ]
    }
  },
  {
    "subheading": "Passive Stand vs Active Fan",
    "cards": [
      {
        "label": "",
        "text": "Zero noise, no power needed, improves airflow through elevation alone. In this comparison: check each listing to confirm whether it's passive or fan-equipped."
      },
      {
        "label": "",
        "text": "Genuine forced airflow that helps more under sustained load, at the cost of some noise and a power connection. In this comparison: Wathai Cooling Case Fan, GSCOLER X1 USB Cooling Fan, Marame Quiet Router Cooling Fan Stand."
      }
    ],
    "note": "Default to a passive pick for light everyday use, and only step up to an active fan if your mini PC runs warm under sustained load."
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
          "Widest confirmed mini PC compatibility",
          ""
        ],
        [
          "Most tailored fit for a specific chassis shape",
          "ELUTENG 40mm USB Fan with 3 Speed Control"
        ]
      ]
    }
  },
  {
    "subheading": "For a 24/7 Home Server or Media Server Specifically",
    "cards": [
      {
        "label": "",
        "text": "Confirmed active airflow rather than passive elevation alone, a stated noise level or speed control, and USB power so it only runs while the mini PC itself is on."
      },
      {
        "label": "",
        "text": "Wathai Cooling Case Fan fits this specifically: Specific CFM and DBA figures instead of vague marketing claims."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Easy Cloud 120mm USB Fan offers: Two fans for under $20 total. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "GSCOLER X1 USB Cooling Fan already covers the essentials: Lowest stated noise rating in this guide. The main thing you'd be paying extra for elsewhere in this list is cooling power you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "We compared whether each fan can be aimed at a real Mini PC intake or exhaust instead of relying on broad desk airflow."
  },
  {
    "title": "",
    "description": "We gave more weight to listings that state specific CFM airflow or DBA noise numbers over vague quiet or powerful claims."
  },
  {
    "title": "",
    "description": "We compared 40mm compact fans against 120mm larger fans for fit in different desk setups and gap sizes."
  },
  {
    "title": "",
    "description": "We considered USB power draw, cable length, and whether powering the fan from the Mini PC creates an unnecessary port tradeoff."
  }
];

export const introParagraphs = [
  "Standalone Mini PC cooling fans are different from cooling stands and pads because the fan is the product, not part of a support platform. Their usefulness depends on where the fan sits, where it points, how it attaches, and whether the directed airflow reaches an actual intake or exhaust instead of simply moving room air around the chassis.",
  "Worth noting upfront: none of the fans in this guide are marketed exclusively for Mini PCs. They're general-purpose compact USB fans also sold for routers, TV boxes, and game consoles, which is how most buyers use them since dedicated Mini PC-only fans are rare. This guide compares seven based on attachment method, airflow direction, noise rating, and power source."
];

export const lastUpdated = "2026-08-06";

export const mainKeyword = "mini PC cooling fans";

export const metaDescription = "A practical comparison of 7 mini PC cooling fans, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Mini PC Cooling Fans for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b07r659j8z-mpcf",
    "rank": 1,
    "badge": "Best Overall Pick",
    "name": "Wathai Cooling Case Fan, 120mm x 25mm, 5V USB",
    "price": "$15.99",
    "rating": "4.6",
    "reviews": "1,542",
    "imageUrl": "https://m.media-amazon.com/images/I/41lX2RvlrbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07R659J8Z?tag=theofficejournal-20",
    "description": "Both numbers give you something concrete to compare against other fans rather than relying on a vague quiet claim.\n\nSpecific CFM and DBA figures instead of vague marketing claims. On price, it's actually priced above GSCOLER X1 USB Cooling Fan, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, No adjustable speed control, runs at a single rated RPM.",
    "specs": [
      "120mm x 120mm x 25mm",
      "5V 0.2A, 1500 RPM",
      "56.7 CFM airflow, 23 DBA noise",
      "Sleeve bearing, 35,000 hour rated life"
    ],
    "pros": [
      "Specific CFM and DBA figures instead of vague marketing claims",
      "Explicitly lists Mini PC as an intended use",
      "Includes mounting hardware for a more permanent setup",
      "Long rated bearing life"
    ],
    "cons": [
      "120mm size needs more desk space than the smaller 40mm fans in this list",
      "Freestanding placement means it can be bumped or moved accidentally",
      "No adjustable speed control, runs at a single rated RPM"
    ],
    "bestFor": "Buyers who want documented airflow and noise numbers rather than a vague quiet claim."
  },
  {
    "id": "b0fqmp5zf8-mpcf",
    "rank": 2,
    "badge": "Best Documented Noise Rating",
    "name": "GSCOLER X1 USB Cooling Fan, 18dB Ultra Quiet",
    "price": "$9.99",
    "rating": "4.3",
    "reviews": "73",
    "imageUrl": "https://m.media-amazon.com/images/I/41DGdx-u6QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FQMP5ZF8?tag=theofficejournal-20",
    "description": "The listing explicitly names Mini PC among its intended devices, along with routers, PS5, and streaming boxes.\n\nOn the other side, Shock pads help but the housing is described as ABS plastic, less durable than metal-framed alternatives.",
    "specs": [
      "130mm x 130mm x 48.6mm",
      "120mm fan, 850 RPM, 55.8 CFM",
      "18dB(A) rated noise",
      "Integrated 20.87in USB cable, 40,000 hour rated life"
    ],
    "pros": [
      "Lowest stated noise rating in this guide",
      "Explicitly lists Mini PC as an intended device",
      "Built-in cable simplifies setup",
      "Withstands up to 11 lbs of weight per the listing"
    ],
    "cons": [
      "850 RPM is on the lower end, less airflow than higher-RPM options",
      "Shock pads help but the housing is described as ABS plastic, less durable than metal-framed alternatives"
    ],
    "bestFor": "Noise-sensitive desks where the lowest possible fan sound matters more than maximum airflow."
  },
  {
    "id": "b0gjj6p1ft-mpcf",
    "rank": 3,
    "badge": "Best Adjustable Speed Control",
    "name": "Marame Quiet Router Cooling Fan Stand, 3 Adjustable Speeds",
    "price": "$13.29",
    "rating": "4.9",
    "reviews": "22",
    "imageUrl": "https://m.media-amazon.com/images/I/41B3e-6btEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJJ6P1FT?tag=theofficejournal-20",
    "description": "This 120mm fan includes a 3-speed switch (low, medium, high), letting you dial down noise for light use and increase airflow for sustained workloads on the same device. Eight rubber shock-absorbing feet aim to reduce vibration buzz, a detail smaller fans in this list don't mention.\n\nOn the other side, No stated CFM or DBA figures to compare directly against the Wathai or GSCOLER.",
    "specs": [
      "120mm fan",
      "3-speed switch: low/medium/high",
      "8 anti-vibration rubber feet",
      "Metal safety wire grille"
    ],
    "pros": [
      "Adjustable 3-speed control on one unit",
      "Anti-vibration feet reduce buzz and desk noise",
      "Metal grille protects against scratches and finger contact",
      "Highest star rating in this guide"
    ],
    "cons": [
      "Long flexible cable can add desk clutter if not routed carefully",
      "No stated CFM or DBA figures to compare directly against the Wathai or GSCOLER"
    ],
    "bestFor": "Buyers who want to switch between quiet and high-airflow modes on the same fan rather than buying two."
  },
  {
    "id": "b0fj24t3km-mpcf",
    "rank": 4,
    "badge": "Best Value 2-Pack",
    "name": "Easy Cloud 120mm USB Fan, 3 Speeds, 2-Pack",
    "price": "$19.49",
    "rating": "4.5",
    "reviews": "225",
    "imageUrl": "https://m.media-amazon.com/images/I/41dzDJ+4mTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJ24T3KM?tag=theofficejournal-20",
    "description": "This listing includes two 120mm fans for total, useful if you want to cool both intake and exhaust sides of a Mini PC setup, or simply want a spare. Eight anti-vibration feet and a 3-speed controller are included on each unit. The real tradeoff against that pick: No specific CFM or DBA figures published.",
    "specs": [
      "120mm fan x2",
      "3-speed controller, up to 2000 RPM",
      "8 anti-vibration feet per fan",
      "Dual-ball bearings"
    ],
    "pros": [
      "Two fans for under $20 total",
      "Higher max RPM than several single-fan alternatives",
      "Anti-vibration feet on each unit",
      "Can be positioned at both intake and exhaust simultaneously"
    ],
    "cons": [
      "No specific CFM or DBA figures published",
      "Higher top speed likely means more noise at max setting"
    ],
    "bestFor": "Buyers who want to cool two locations on their setup, or keep a spare, without buying two separate listings."
  },
  {
    "id": "b08zy7x4cr-mpcf",
    "rank": 5,
    "badge": "Best Compact Dual-Fan Pick",
    "name": "ELUTENG Dual 40mm USB Fan, 3 Speeds",
    "price": "$12.99",
    "rating": "4.4",
    "reviews": "2,005",
    "imageUrl": "https://m.media-amazon.com/images/I/41ylokGU3jL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08ZY7X4CR?tag=theofficejournal-20",
    "description": "This is two 40mm fans on one USB cord, small enough to tuck into a tight gap next to a Mini PC rather than sitting as a large freestanding unit. The listing notes some audible noise at higher speeds given the small fan size, which is a fair tradeoff for the compact footprint.\n\nOn the other side, No specific CFM or DBA rating published.",
    "specs": [
      "40mm x 40mm x 25mm fans, dual",
      "3-speed control (low/medium/high)",
      "Metal frame with finger safety protection",
      "Hydraulic bearing motor"
    ],
    "pros": [
      "Small enough to fit tight gaps a 120mm fan can't",
      "Dual fans cool from two angles at once",
      "3-speed adjustability"
    ],
    "cons": [
      "Small fan size means audible noise at higher speeds per the listing",
      "Lower airflow volume than the 120mm options in this list",
      "No specific CFM or DBA rating published"
    ],
    "bestFor": "Tight desk setups where a full-size 120mm fan won't physically fit next to the Mini PC."
  },
  {
    "id": "b07cnj4dyx-mpcf",
    "rank": 6,
    "badge": "Quietest Documented 40mm Pick",
    "name": "AC Infinity MULTIFAN Mini, Compact 40mm x 20mm USB Fan",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "1,146",
    "imageUrl": "https://m.media-amazon.com/images/I/31OMXsv3wWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CNJ4DYX?tag=theofficejournal-20",
    "description": "AC Infinity states specific figures for this fan, 12 CFM airflow and 18 DBA noise, at a compact 40mm size that fits in a small gap beside a Mini PC. Dual-ball bearings are rated for a 67,000 hour lifespan, notably longer than several other picks here.\n\nOn the other side, Small size limits how much heat it can move from a larger Mini PC chassis.",
    "specs": [
      "40mm x 40mm x 20mm",
      "12 CFM airflow, 18 DBA noise",
      "Dual-ball bearings, 67,000 hour rated life",
      "Multi-speed controller"
    ],
    "pros": [
      "Specific CFM and DBA figures published",
      "Longest rated bearing lifespan in this guide",
      "Fits flat or upright depending on desk layout"
    ],
    "cons": [
      "Lower total airflow than the 120mm fans in this list, appropriate mainly for smaller devices",
      "Single fan versus the dual-fan ELUTENG at a similar price",
      "Small size limits how much heat it can move from a larger Mini PC chassis"
    ],
    "bestFor": "Buyers who want a documented, reputable-brand compact fan for a tight space and don't need maximum airflow."
  },
  {
    "id": "b071jb9wyb-mpcf",
    "rank": 7,
    "badge": "Best Budget Pick",
    "name": "ELUTENG 40mm USB Fan with 3 Speed Control",
    "price": "$9.99",
    "rating": "4.3",
    "reviews": "1,149",
    "imageUrl": "https://m.media-amazon.com/images/I/41cEKT7EI6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B071JB9WYB?tag=theofficejournal-20",
    "description": "It's a reasonable low-risk way to test whether directed airflow near your Mini PC's vents makes a noticeable difference before spending more. The real tradeoff against that pick: Lowest airflow figures of any pick in this guide. On the other side, Requires care not to exceed the 5V/1A input rating.",
    "specs": [
      "40mm fan",
      "3-speed: 3.5/3.88/4.4 CFM at 3.5/4.2/5V",
      "Metal grill front",
      "100cm USB cable"
    ],
    "pros": [
      "Lowest price in this guide",
      "Specific CFM figures at each speed setting",
      "Metal grill protects cable and hands",
      "Compact enough for tight spaces"
    ],
    "cons": [
      "Lowest airflow figures of any pick in this guide",
      "Best suited as supplementary spot cooling, not a primary solution",
      "Requires care not to exceed the 5V/1A input rating"
    ],
    "bestFor": "Buyers on a tight budget who want to test directed spot-cooling before investing in a larger fan."
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-external-cooling-fans-for-mini-pcs",
    "title": "Best External Cooling Fans for Mini PCs (2026)"
  },
  {
    "href": "/guide/best-mini-pc-cooling-stands",
    "title": "Best Mini PC Cooling Stands (2026)"
  },
  {
    "href": "/guide/best-mini-pc-stands-with-fans",
    "title": "Best Mini PC Stands with Fans (2026)"
  }
];

export const breadcrumbLabel = "Best Mini PC Cooling Fans";
