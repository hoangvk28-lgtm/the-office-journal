// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Measure your actual under-desk clearance before comparing treadmill height",
    "explanation": "An under-desk treadmill needs to physically slide into the same clearance a chair would otherwise occupy, and this clearance varies by desk, both the standing desk's lowest sit height and any crossbar or cable tray underneath can limit how tall a treadmill fits.\n\nThis matters because a treadmill that looks compact in photos can still be too tall for your specific desk's clearance, a mismatch that's only discovered after the treadmill arrives.\n\nMeasure the actual clear height under your desk at its lowest working position, and compare that against the treadmill's listed height, leaving real margin rather than an exact match."
  },
  {
    "criterion": "Match motor power and speed range to walking, not running, since that's what these are built for",
    "explanation": "Most under-desk treadmills are built for a slow 1-4 mph walking pace during work, not a running pace, and their motors are sized accordingly, a lighter-duty motor rated for walking speeds will struggle or wear out faster if pushed toward running speeds it wasn't designed for.\n\nThis matters directly if you're specifically hoping to run rather than walk while working, a genuine running-capable treadmill needs a meaningfully more powerful motor and a different category of product than most under-desk walking pads.\n\nCheck the listed max speed and motor horsepower rating against your actual intended pace, and don't assume any \"treadmill\" labeled product supports running speeds."
  },
  {
    "criterion": "Check noise level specifically for video calls and shared office spaces",
    "explanation": "A treadmill's motor and belt generate continuous noise while walking, and that noise level matters far more for this category than a typical treadmill, since you'll likely be on video calls or in a shared workspace while using it, a treadmill quiet enough for a private home gym can still be distracting on a work call in an open office.\n\nThis matters more the more of your work involves calls or a shared space, less if you work in a private office with the door closed.\n\nCheck reviews specifically for noise mentions during video calls or in shared spaces, not just a general decibel rating that may be measured under different conditions."
  },
  {
    "criterion": "Verify safety features like an auto-stop cord and remote start/stop for working while walking",
    "explanation": "An auto-stop safety cord (clipped to your clothing, stopping the belt if you step off unexpectedly) and a remote or app-based start/stop control matter more for this category than a typical gym treadmill, since you'll be dividing attention between the treadmill and actual work rather than fully focused on walking.\n\nThis matters because a moment of distraction while multitasking is exactly when an unexpected stumble is most likely, and having quick, reliable stop control reduces that risk.\n\nCheck the listing specifically for a safety cord and remote control features, not just speed and incline specs."
  },
  {
    "criterion": "Consider incline if you want a genuine calorie-burn increase, not just flat walking",
    "explanation": "An incline feature meaningfully increases calorie burn and leg engagement compared to flat walking at the same speed, but it's a feature most under-desk treadmills skip entirely to keep the profile slim and the price down, and even among models that offer it, incline range varies from a token few degrees to an adjustable range.\n\nThis matters more if fitness intensity is a real goal beyond just light movement during work, less if you're primarily looking for gentle activity while working.\n\nCheck whether incline is offered at all and, if so, the specific adjustable range in degrees, not just the word \"incline\" in the listing."
  }
];

export const faq = [
  {
    "q": "What's the thinnest under-desk treadmill for a tight desk clearance?",
    "a": "Even at that thickness, plan for roughly 9-12 inches of total vertical clearance under your desk, since you need room for your feet and stride, not just the unit's own height."
  },
  {
    "q": "Do I need to measure my desk before buying a compact treadmill?",
    "a": "Standard desks run 28-30 inches tall, but crossbars, drawers, and cable trays can reduce the usable clearance well below that. Measure the actual gap between the floor and the underside of your desk rather than assuming any compact treadmill in this guide will fit based on the desk's listed height alone."
  },
  {
    "q": "Which compact treadmill has the longest warranty?",
    "a": ""
  },
  {
    "q": "Is it worth paying more for a handlebar and incline on a compact treadmill?",
    "a": "The Viamotion Walking Pad is the only pick in this guide with both a handlebar and adjustable incline, useful if you want extra balance support or a bit more workout intensity. It's also the thickest and priciest of the four, so it's a tradeoff against the ultra-thin, bare-bones designs of the other picks."
  },
  {
    "q": "Which compact treadmill is the cheapest?",
    "a": "99, and it's also the lightest, making it easy to slide fully out of the way after a walking session."
  }
];

export const guideSlug = "best-compact-under-desk-treadmill";

export const guideTitle = "The Best Compact Under-Desk Treadmills for Home-Office Comfort";

export const heroImage = "https://m.media-amazon.com/images/I/41ZbsmaRmVL._SL500_.jpg";

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
          "Incline for higher calorie burn",
          ""
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
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Meaningfully increases calorie burn and leg engagement over flat walking. In this comparison: Viamotion Walking Pad."
      },
      {
        "label": "",
        "text": "Simpler and usually slimmer, fine for light movement rather than a fitness goal. In this comparison: Buztrio Walking Pad, Vhorilix Walking Pad, Rythkore Walking Pad."
      }
    ],
    "note": "Default to flat walking unless calorie burn intensity is a real goal beyond light movement."
  },
  {
    "subheading": "",
    "note": "Check each pick's listed motor horsepower and max speed against your actual intended pace before buying, not just the general \"treadmill\" label."
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "A quiet motor and belt confirmed in reviews specifically during video call use, not just a general decibel spec."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want incline, remote control, and heavy daily-use durability, where Viamotion Walking Pad's features give real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just want light, occasional movement during the workday, where Rythkore Walking Pad covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Compared stated height in inches across every pick, since this guide specifically targets the thinnest treadmills for the tightest desk clearances rather than general under-desk fit."
  },
  {
    "title": "",
    "description": "Checked total unit weight and wheel design, since a compact treadmill should be easy for one person to slide out of the way or reposition without help."
  },
  {
    "title": "",
    "description": "Weighed motor type and stated DB ratings against the reality of taking calls nearby, since quiet operation matters even more in a small home office where the treadmill sits close to a desk."
  },
  {
    "title": "Feature tradeoffs at a compact size",
    "description": "Compared which picks add a handlebar or incline versus which stay completely flat and bare, since added features generally come with a small increase in thickness or footprint."
  }
];

export const introParagraphs = [
  "A compact under-desk treadmill is built specifically around one constraint: fitting into the narrow gap between the floor and the underside of a desk without needing to be dragged out for every walking session. That means overall thickness matters more here than in the wider treadmill category, since a couple extra inches of height can be the difference between sliding smoothly under a desk and not fitting at all.",
  "89 model with a handlebar and incline."
];

export const lastUpdated = "2026-07-18";

export const mainKeyword = "under desk treadmill small";

export const metaDescription = "A practical comparison of 4 compact under-desk treadmills, focused on features, comfort and practical fit, and the trade-offs between them.";

export const metaTitle = "Best Compact Under-Desk Treadmills for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "buztrio-walking-pad",
    "rank": 1,
    "badge": "Thinnest + Highest-Rated",
    "name": "Buztrio Walking Pad",
    "price": "$89.99",
    "rating": "4.6",
    "reviews": "680",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZbsmaRmVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVNFJJSG?tag=theofficejournal-20",
    "description": "It ships with no assembly required and slides easily under a desk, bed, or sofa when it's not in use.\n\nAn LED display and remote control let you adjust speed without bending over, and built-in wheels and an anti-slip belt round out the design.\n\nAmong the thinnest profiles in this guide.",
    "specs": [
      "2.5HP motor, 0.6-4 mph speed range",
      "4.1 inches tall",
      "Carbon steel frame, anti-slip belt",
      "LED display, remote control, built-in wheels",
      "No assembly required"
    ],
    "pros": [
      "Among the thinnest profiles in this guide",
      "No assembly required",
      "Built-in wheels for easy repositioning"
    ],
    "cons": [
      "No incline adjustment",
      "No handlebar for balance support",
      "Top speed capped at 4 mph"
    ],
    "bestFor": "Buyers who want the thinnest, best-reviewed compact treadmill"
  },
  {
    "id": "vhorilix-walking-pad-compact",
    "rank": 2,
    "badge": "Best Warranty",
    "name": "Vhorilix Walking Pad",
    "price": "$89.98",
    "rating": "4.4",
    "reviews": "486",
    "imageUrl": "https://m.media-amazon.com/images/I/51JbSk7t+uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGB9BV77?tag=theofficejournal-20",
    "description": "A carbon steel frame, 5-layer anti-slip belt, and silicone shock absorbers give it a sturdy feel for its size.\n\nNo assembly is required, and built-in wheels make it simple to move between spots. It carries a 2-year warranty, the longest coverage of any pick in this guide.",
    "specs": [
      "2.5HP motor, 0.6-4 mph speed range",
      "4.33 inches tall",
      "Carbon steel frame, 5-layer anti-slip belt",
      "Silicone shock absorbers, built-in wheels",
      "2-year warranty, longest in this guide"
    ],
    "pros": [
      "Longest warranty in this guide at 2 years",
      "Still a compact 4.33-inch profile",
      "No assembly required",
      "Silicone shock absorbers add cushioning"
    ],
    "cons": [
      "Slightly thicker than the Buztrio",
      "No incline adjustment",
      "No handlebar for balance support"
    ],
    "bestFor": "Buyers who want the longest warranty on a compact treadmill"
  },
  {
    "id": "rythkore-walking-pad",
    "rank": 3,
    "badge": "Thinnest Overall + Lightest",
    "name": "Rythkore Walking Pad",
    "price": "$79.99",
    "rating": "4.2",
    "reviews": "331",
    "imageUrl": "https://m.media-amazon.com/images/I/41x4f3fulZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FXLYZSGB?tag=theofficejournal-20",
    "description": "1 inches thick, it matches the thinnest profile in this guide while being the lightest pick here by weight. That combination makes it especially easy to slide fully out of the way after a walking session.\n\nOmnidirectional wheels make repositioning simple in any direction, not just forward and back. It's also the cheapest pick in this entire guide.\n\nThinnest and lightest profile in this guide.",
    "specs": [
      "2.0HP vortex quiet motor, 0.6-4 mph speed range",
      "About 10.5cm (4.1 inches) thick",
      "Lightest pick in this guide",
      "Omnidirectional wheels"
    ],
    "pros": [
      "Cheapest pick in this entire guide",
      "Thinnest and lightest profile in this guide",
      "Omnidirectional wheels for easy repositioning",
      "Quiet vortex motor design"
    ],
    "cons": [
      "Lower rating than the top two picks",
      "No incline adjustment",
      "No handlebar for balance support"
    ],
    "bestFor": "Buyers who want the lightest, cheapest treadmill that's still ultra-thin"
  },
  {
    "id": "viamotion-walking-pad-compact",
    "rank": 4,
    "badge": "Best Incline + Handlebar Support",
    "name": "Viamotion Walking Pad",
    "price": "$119.89",
    "rating": "4.4",
    "reviews": "1,226",
    "imageUrl": "https://m.media-amazon.com/images/I/41HOnI215TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGLS9NQV?tag=theofficejournal-20",
    "description": "The Viamotion is the only pick in this guide with a handlebar, giving it an edge for anyone who wants something to hold onto for balance while walking and typing. A manually adjustable incline up to 4 degrees adds a bit more intensity than the completely flat pads above.\n\n8 mph range, with a 265 lb max user weight.",
    "specs": [
      "2.5HP brushless motor, 0.6-3.8 mph speed range",
      "Manually adjustable incline up to 4 degrees",
      "Handlebar for support, only pick in this guide with one",
      "Max user weight 265 lbs",
      "Quiet motor, rated around 45dB"
    ],
    "pros": [
      "Only pick in this guide with a handlebar",
      "Only pick in this guide with incline adjustment",
      "Solid 265 lb weight capacity"
    ],
    "cons": [
      "Thicker and pricier than the other 3 picks in this guide",
      "Slightly slower top speed at 3.8 mph",
      "Handlebar adds a bit of footprint versus a bare pad"
    ],
    "bestFor": "Buyers who want handlebar support and incline in a still-compact footprint"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-under-desk-treadmill",
    "title": "Best Under-Desk Treadmills in 2026"
  },
  {
    "href": "/guide/best-desk-bike-chair",
    "title": "Best Desk Bike Chairs in 2026"
  },
  {
    "href": "/guide/best-adjustable-under-desk-footrests",
    "title": "Best Adjustable Under-Desk Footrests"
  }
];

export const breadcrumbLabel = "Best Compact Under-Desk Treadmills";
