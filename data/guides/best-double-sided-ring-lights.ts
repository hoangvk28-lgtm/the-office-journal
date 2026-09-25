// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Ring Size vs Your Actual Shooting Distance",
    "explanation": "Match the ring's diameter to your real shooting distance rather than assuming bigger is always better: an 8-inch ring covers close-up makeup work under 30cm, a 10-inch ring is the sweet spot for typical video-call distance (45 to 60cm behind a monitor), and anything beyond 80cm for full-body streaming benefits from 12 inches or more. A too-small ring at a long distance leaves you underlit; a too-large ring at close range is just wasted desk space."
  },
  {
    "criterion": "Lux Ratings Are Often Inflated 2 to 3x",
    "explanation": "Many ring light listings advertise a lux rating that's inflated 2 to 3 times what the light actually outputs at a realistic distance, so a listed '3000 lux' figure might deliver closer to 1000 to 1500 lux once you're actually sitting at typical desk distance. 5m or 1m) rather than trusting a single headline number with no distance specified."
  },
  {
    "criterion": "",
    "explanation": "Size and brightness are two separate specs that don't automatically scale together: a poorly built large ring light can underperform a smaller, better-engineered one at the exact same distance, since LED density and power delivery matter more than diameter alone. Compare actual lux output at a matched distance across products rather than assuming the largest ring in a lineup is also the brightest."
  },
  {
    "criterion": "Dimmable Range and Color Temperature Adjustment",
    "explanation": "A ring light with a wide dimmable range (not just on/off or a couple of fixed steps) lets you match the light to your room's existing lighting rather than blowing out your camera in a bright room or leaving you underlit in a dim one. Adjustable color temperature (typically 3000K warm to 6500K daylight) matters just as much, since a fixed-temperature light can clash badly with your room's ambient lighting on camera."
  },
  {
    "criterion": "Mount Type: Desk Stand vs Clamp vs Tripod",
    "explanation": "The mounting style affects your desk space more than any other single spec: a desk stand is simplest but occupies permanent desk real estate, a clamp mount frees up that space but requires enough clamp throat depth for your specific desk edge, and a tripod trades a larger floor footprint for the most flexible positioning, useful if you need the ring light higher or further back than a desk mount allows."
  }
];

export const faq = [
  {
    "q": "What size ring light do I need for video calls?",
    "a": "For typical video-call distance (45 to 60cm behind your monitor), a 10 to 12 inch ring light is the sweet spot; smaller 8-inch rings suit close-up work under 30cm, and anything beyond 80cm for full-body streaming benefits from 12 inches or larger."
  },
  {
    "q": "Can I trust the lux rating listed on a ring light?",
    "a": "Not without skepticism, many brands inflate their listed lux by 2 to 3 times the light's real output at a usable distance, so treat an unqualified lux number as a rough starting point rather than a guarantee, especially if no measurement distance is specified."
  },
  {
    "q": "Is a bigger ring light always brighter?",
    "a": "No, LED density and driver quality matter more than diameter alone; a cheaply built large ring can underperform a smaller, well-engineered one at the same distance, so compare actual lux output at a matched distance rather than assuming size predicts brightness."
  },
  {
    "q": "Should I get a dimmable ring light with adjustable color temperature?",
    "a": "Yes if your room's lighting conditions vary at all, since a fixed-brightness, fixed-temperature ring light can blow out your camera in a bright room or clash with your room's ambient tone, while a wide dimming range and adjustable color temperature adapt to both."
  },
  {
    "q": "Desk stand, clamp, or tripod, which ring light mount is best?",
    "a": "A desk stand is simplest but takes permanent desk space, a clamp mount frees up the desk but needs enough clamp depth for your desk edge, and a tripod offers the most positioning flexibility at the cost of a larger floor footprint."
  },
  {
    "q": "Will a ring light work with my webcam or phone?",
    "a": "Most ring lights include a center mount or clip compatible with a standard webcam or phone, but check the specific mount's opening size against your camera or phone case thickness before buying, since a too-narrow clip won't securely hold a thicker device."
  }
];

export const guideSlug = "best-double-sided-ring-lights";

export const guideTitle = "The Best Double-Sided Ring Lights for a Better-Lit Workspace";

export const heroImage = "https://m.media-amazon.com/images/I/41fDvi1ZJEL._SL500_.jpg";

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
          "EMART 10\" Ring Light with 55\" Extendable Tripod Stands and Phone Holder"
        ],
        [
          "",
          "UBeesize 12\" LED Ring Light with 62\" Tripod Stand"
        ],
        [
          "",
          "Ring Light with Stand Tripod for iPhone, Evershop 10” Overhead Camera Mount"
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
          "EMART 10\" Ring Light with 55\" Extendable Tripod Stands and Phone Holder"
        ],
        [
          "",
          "Magnetic 6000mAh Selfie Ring Light for iPhone 448LED RGB Light with Stand"
        ],
        [
          "",
          "Ring Light with Stand Tripod for iPhone, Evershop 10” Overhead Camera Mount"
        ]
      ]
    }
  },
  {
    "subheading": "Desk Stand vs Clamp Mount",
    "cards": [
      {
        "label": "UBeesize 12\" LED Ring Light with 62\" Tripod Stand)",
        "text": "Simple setup, but occupies permanent desk space."
      },
      {
        "label": "",
        "text": "Frees up desk space, but needs enough clamp depth for your desk edge."
      }
    ],
    "note": "Match this to how much desk surface you're willing to give up permanently."
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
          "Check for a wide, adjustable color temperature range"
        ],
        [
          "",
          "UBeesize 12\" LED Ring Light with 62\" Tripod Stand"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "A 10 to 12 inch diameter and a real (not inflated) lux rating at video-call distance."
      },
      {
        "label": "",
        "text": "UBeesize 12\" LED Ring Light with 62\" Tripod Stand is worth checking against its specific lux rating before assuming any ring light performs the same at your desk distance."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want verified brightness, adjustable color temperature, and reliable build quality, where Ring Light with Stand Tripod for iPhone, Evershop 10” Overhead Camera Mount justifies the extra cost."
      },
      {
        "label": "",
        "text": "You just need basic, even lighting for occasional video calls, where EMART 10\" Ring Light with 55\" Extendable Tripod Stands and Phone Holder already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Ring Size vs Your Actual Shooting Distance",
    "description": "Match the ring's diameter to your real shooting distance rather than assuming bigger is always better: an 8-inch ring covers close-up makeup work under 30cm, a 10-inch ring is the sweet spot for typical video-call distance (45 to 60cm behind a monitor), and anything beyond 80cm for full-body streaming benefits from 12 inches or more."
  },
  {
    "title": "Lux Ratings Are Often Inflated 2 to 3x",
    "description": "Many ring light listings advertise a lux rating that's inflated 2 to 3 times what the light actually outputs at a realistic distance, so a listed '3000 lux' figure might deliver closer to 1000 to 1500 lux once you're actually sitting at typical desk distance."
  },
  {
    "title": "",
    "description": "Size and brightness are two separate specs that don't automatically scale together: a poorly built large ring light can underperform a smaller, better-engineered one at the exact same distance, since LED density and power delivery matter more than diameter alone."
  },
  {
    "title": "Dimmable Range and Color Temperature Adjustment",
    "description": "A ring light with a wide dimmable range (not just on/off or a couple of fixed steps) lets you match the light to your room's existing lighting rather than blowing out your camera in a bright room or leaving you underlit in a dim one."
  },
  {
    "title": "Mount Type: Desk Stand vs Clamp vs Tripod",
    "description": "The mounting style affects your desk space more than any other single spec: a desk stand is simplest but occupies permanent desk real estate, a clamp mount frees up that space but requires enough clamp throat depth for your specific desk edge, and a tripod trades a larger floor footprint for the most flexible positioning, useful if you need the ring light higher or further back than a desk mount allows.."
  }
];

export const introParagraphs = [
  "Best Double-Sided Ring Lights span tiny clip-ons to full studio-size rings, which is exactly why your shooting distance changes what you need.",
  "We compared this lineup on verified brightness, not marketing claims, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "ring light double sided";

export const metaDescription = "We compared 8 double-sided ring lights on brightness, color temperature, adjustability and power to help you choose the right one for your space.";

export const metaTitle = "Best Double-Sided Ring Lights for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-double-sided-ring-lights-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "UBeesize 12\" LED Ring Light with 62\" Tripod Stand",
    "price": "$29.69",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41fDvi1ZJEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08L5VKNWR?tag=theofficejournal-20",
    "description": "UBeesize 12\" LED Ring Light with 62\" Tripod Stand is the strongest all-around choice here. Equipped with 240 high-efficiency leds, this 10w ring light delivers bright, stable and evenly diffused illumination. Adjust power, color temperature and brightness directly from the responsive touch-control panel.\n\nSet next to Magnetic 6000mAh Selfie Ring Light for iPhone 448LED RGB Light with Stand, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nIt's worth picking this one if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Many brands inflate their listed lux rating by 2 to 3 times what the light actually outputs at a standardized distance, so treat the number on the box as a starting point, not a guarantee.",
    "specs": [
      "240 high-efficiency leds",
      "Adjust power, color temperature and brightness directly from the responsive touch-control panel",
      "62-Inch tripod & handheld selfie stick"
    ],
    "pros": [
      "240 high-efficiency leds",
      "Adjust power, color temperature and brightness directly from the responsive touch-control panel",
      "62-Inch tripod & handheld selfie stick",
      "Rotatable light head and adjustable phone holder make it easy to switch between portrait"
    ],
    "cons": [
      "Listed lux ratings are often inflated 2 to 3x by the brand",
      "Larger diameter alone doesn't guarantee brighter, more even light"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-double-sided-ring-lights-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Magnetic 6000mAh Selfie Ring Light for iPhone 448LED RGB Light with Stand",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41G9oGeH8GL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGDB8NHK?tag=theofficejournal-20",
    "description": "Magnetic 6000mAh Selfie Ring Light for iPhone 448LED RGB Light with Stand is a strong alternative worth comparing directly against the top pick. This ring light features a dual-sided magnetic phone mount, allowing you to attach your phone on either side for different shooting needs. 6000 mAh rechargeable battery:powered by a high-capacity 6000mAh battery, this selfie light for iphone provides ultra-long runtime, up to 900 minutes (15 hours) at the lowest brightness setting.\n\nSet next to UBeesize 12\" LED Ring Light with 62\" Tripod Stand, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A larger diameter doesn't automatically mean brighter or more even light, a well-engineered smaller ring can outperform a cheap oversized one, so check independent lux measurements when they're available.",
    "specs": [
      "Double-sided magnetic phone holder",
      "6000 mAh rechargeable battery:powered by a high-capacity 6000mAh battery",
      "RGB/normal color mode & brightness"
    ],
    "pros": [
      "Double-sided magnetic phone holder",
      "6000 mAh rechargeable battery:powered by a high-capacity 6000mAh battery",
      "RGB/normal color mode & brightness",
      "Handheld stabilizer & mini tripod"
    ],
    "cons": [
      "Larger diameter alone doesn't guarantee brighter, more even light",
      "Listed lux ratings are often inflated 2 to 3x by the brand"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-double-sided-ring-lights-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Weilisi 10.2\" Ring Light with 69\" Tripod Stand and Phone Holder Kit",
    "price": "$38.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FuYi++BaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3LM6Q73?tag=theofficejournal-20",
    "description": "2\" Ring Light with 69\" Tripod Stand and Phone Holder Kit is a strong alternative worth comparing directly against the top pick. The phone tripod with light kits is equipped with 10-level brightness from 10%-100% & 3 color temperatures from 3000-6000k (warm, natural and cold ), ensuring you can get proper brightness anytime anywhere. Adjustable tripod for iphone with light is made of high-quality aluminum, extending from 39 to 69 inches (to the top of the light head) to meet your various height needs.\n\nAgainst UBeesize 12\" LED Ring Light with 62\" Tripod Stand, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many brands inflate their listed lux rating by 2 to 3 times what the light actually outputs at a standardized distance, so treat the number on the box as a starting point, not a guarantee.",
    "specs": [
      "Newest full screen design",
      "Brighter & soft lighting",
      "Meet your lighting needs"
    ],
    "pros": [
      "Newest full screen design",
      "Brighter & soft lighting",
      "Meet your lighting needs",
      "Adjustable tripod stand"
    ],
    "cons": [
      "Listed lux ratings are often inflated 2 to 3x by the brand",
      "Larger diameter alone doesn't guarantee brighter, more even light"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-double-sided-ring-lights-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "SENSYNE Ring Light with Stand",
    "price": "$25.64",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kFDjToliL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08B3X7NXC?tag=theofficejournal-20",
    "description": "SENSYNE Ring Light with Stand is a strong alternative worth comparing directly against the top pick. 3 Color modes (warm, natural, cool) with 10 brightness levels let you easily create soft, even lighting for tiktok, zoom calls, makeup, and video recording. 7\" to 50\", well suited to desk use, standing filming, or full-body shots.\n\nSet next to UBeesize 12\" LED Ring Light with 62\" Tripod Stand, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A larger diameter doesn't automatically mean brighter or more even light, a well-engineered smaller ring can outperform a cheap oversized one, so check independent lux measurements when they're available.",
    "specs": [
      "well suited lighting for video, makeup & streaming",
      "50\" Adjustable tripod, desk to full height",
      "Flexible phone holder and adjustable head allow portrait"
    ],
    "pros": [
      "well suited lighting for video, makeup & streaming",
      "50\" Adjustable tripod, desk to full height",
      "Flexible phone holder and adjustable head allow portrait",
      "Wireless remote, shoot hands-free"
    ],
    "cons": [
      "Larger diameter alone doesn't guarantee brighter, more even light",
      "Listed lux ratings are often inflated 2 to 3x by the brand"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-double-sided-ring-lights-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Weilisi 10\" Ring Light with Stand 72'' Tall & Phone Holder, 38 Color Modes",
    "price": "$25.49",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51hLOYHG5nL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08JPCSDMP?tag=theofficejournal-20",
    "description": "Weilisi 10\" Ring Light with Stand 72'' Tall & Phone Holder, 38 Color Modes is a strong alternative worth comparing directly against the top pick. New RGB dynamic modes and 3 normal colors: selfie ring light has warm light, white light, daylight, red, yellow, green, sky blue, blue, purple, RGB light provide 39 dynamic, breathing and illusory color mode. Our light ring features exclusive stepless speed regulation and dimming.\n\nThis tripod for the ring light reaches a maximum height of 62\" and an overall height of up to 72\", a detail worth checking closely before choosing between this and UBeesize 12\" LED Ring Light with 62\" Tripod Stand.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Many brands inflate their listed lux rating by 2 to 3 times what the light actually outputs at a standardized distance, so treat the number on the box as a starting point, not a guarantee.",
    "specs": [
      "New RGB dynamic modes and 3 normal colors",
      "Precise control",
      "Tripod for the ring light reaches a maximum height of 62\""
    ],
    "pros": [
      "New RGB dynamic modes and 3 normal colors",
      "Precise control",
      "Tripod for the ring light reaches a maximum height of 62\"",
      "Versatility at its best"
    ],
    "cons": [
      "Listed lux ratings are often inflated 2 to 3x by the brand",
      "Larger diameter alone doesn't guarantee brighter, more even light"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-double-sided-ring-lights-6",
    "rank": 6,
    "badge": "Best Value",
    "name": "EMART 10\" Ring Light with 55\" Extendable Tripod Stands and Phone Holder",
    "price": "$18.89",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411b-RrcpqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CC4RQ5YL?tag=theofficejournal-20",
    "description": "EMART 10\" Ring Light with 55\" Extendable Tripod Stands and Phone Holder is the most affordable pick here that still clears the capability floor for this category. Our 10 inch ring light with stand has 3 colour temperature (white, warm white and yellow white) and 10 brightness levels, a variety of options fill light for your video recording and picture. Our ringlight tripod stand can be adjust from 20\" to 51\" that applies to desktop or floor.\n\nSet next to UBeesize 12\" LED Ring Light with 62\" Tripod Stand, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nGo with this pick if you want a capable pick without paying for headroom you won't use. A larger diameter doesn't automatically mean brighter or more even light, a well-engineered smaller ring can outperform a cheap oversized one, so check independent lux measurements when they're available.",
    "specs": [
      "Dimmable LED fill light",
      "Adjustable light tripod stand",
      "2 Remote control"
    ],
    "pros": [
      "Dimmable LED fill light",
      "Adjustable light tripod stand",
      "2 Remote control",
      "Ring light comes with 2 types of phoner holder compatible for most phones"
    ],
    "cons": [
      "Larger diameter alone doesn't guarantee brighter, more even light",
      "Listed lux ratings are often inflated 2 to 3x by the brand"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-double-sided-ring-lights-7",
    "rank": 7,
    "badge": "Best Premium Pick",
    "name": "Ring Light with Stand Tripod for iPhone, Evershop 10” Overhead Camera Mount",
    "price": "$59.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/311mDtMo3TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CP3XCSRX?tag=theofficejournal-20",
    "description": "Ring Light with Stand Tripod for iPhone, Evershop 10” Overhead Camera Mount is the top-tier pick in this comparison. This phone tripod with light combines the flexibility of an overhead light with the stability of a floor stand. The ultra-flexible arm on this overhead phone mount with light tilts, swivels, and extends in just 1 second, offering wider lighting coverage than standard stands.\n\nSide by side with UBeesize 12\" LED Ring Light with 62\" Tripod Stand, the real difference worth noting is the 1/4” screw fits phones, gopros, webcams, and more (not for heavy cameras).\n\nIt's worth picking this one if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Many brands inflate their listed lux rating by 2 to 3 times what the light actually outputs at a standardized distance, so treat the number on the box as a starting point, not a guarantee.",
    "specs": [
      "All-in-one ring light for any space",
      "Super flexible & shoot at any angle",
      "Pro-quality lighting with 30 settings"
    ],
    "pros": [
      "All-in-one ring light for any space",
      "Super flexible & shoot at any angle",
      "Pro-quality lighting with 30 settings",
      "Tall, stable support for reliable shooting"
    ],
    "cons": [
      "Listed lux ratings are often inflated 2 to 3x by the brand",
      "Larger diameter alone doesn't guarantee brighter, more even light"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-double-sided-ring-lights-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Evershop Ring Light for Laptop Desk Clip On, Small Computer Video Conference",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51taeRRFx3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BLHHV648?tag=theofficejournal-20",
    "description": "Evershop Ring Light for Laptop Desk Clip On, Small Computer Video Conference is a strong alternative worth comparing directly against the top pick. 2025New upgraded ring light, using a new design concept. The evershop small ring light features a USB-powered design, excluding batteries, and can be used with PC/laptop/mobile power/charging plug, making it plug and play.\n\nUBeesize 12\" LED Ring Light with 62\" Tripod Stand is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A larger diameter doesn't automatically mean brighter or more even light, a well-engineered smaller ring can outperform a cheap oversized one, so check independent lux measurements when they're available.",
    "specs": [
      "New adjustable multifunctional stand",
      "All-in-one service",
      "Light and portable & plug and play"
    ],
    "pros": [
      "New adjustable multifunctional stand",
      "All-in-one service",
      "Light and portable & plug and play",
      "10-Level brightness & 3 lighting colors"
    ],
    "cons": [
      "Larger diameter alone doesn't guarantee brighter, more even light",
      "Listed lux ratings are often inflated 2 to 3x by the brand"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-ring-lights",
    "title": "Best Ring Lights"
  },
  {
    "href": "/guide/best-ring-lights-for-webcam",
    "title": "Best Ring Lights for Webcam"
  },
  {
    "href": "/guide/best-ring-lights-with-stand",
    "title": "Best Ring Lights with Stand"
  }
];

export const breadcrumbLabel = "Best Double-Sided Ring Lights";
