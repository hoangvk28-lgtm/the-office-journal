// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Decide whether a built-in camera is a feature or a privacy concern for your desk",
    "explanation": "Some smart displays include a front-facing camera for casual video calls or as a security-camera-style monitor, while others are explicitly camera-free by design, marketed specifically for privacy-conscious buyers who don't want a camera pointed at their workspace all day.\n\nThis distinction matters directly depending on your actual use case, a camera is useful if you'll use the display for video calls, but it's a real consideration if the display sits on a desk where you'd rather not have an always-on camera present, even one you can physically cover.\n\nCheck the listing specifically for camera presence or absence, and check whether a physical camera shutter or cover is included if privacy matters to you."
  },
  {
    "criterion": "Match screen size to your actual desk space and how much information you want at a glance",
    "explanation": "A smaller 5-7 inch display fits easily beside a keyboard without blocking your monitor or eating meaningful desk space, but shows less information at a glance, calendar, weather, and notifications compete for limited screen real estate, while a larger 8-10 inch display shows considerably more at once but demands more desk real estate and can start competing visually with your main monitor.\n\nThis matters more the tighter your desk space actually is, and more the more you plan to rely on the display as a genuine information hub versus a simple clock and notification glance.\n\nCheck the listed screen size in inches against your actual available desk space, not just the general size category."
  },
  {
    "criterion": "Confirm your voice assistant ecosystem before buying, since Alexa and Google Assistant aren't interchangeable",
    "explanation": "Smart displays are built around one specific voice assistant ecosystem, either Amazon's Alexa or Google Assistant, and each integrates differently with different smart home devices, calendar services, and existing voice assistant hardware, so a display built for the ecosystem you don't already use can mean losing compatibility with smart home devices or routines you've already set up.\n\nThis matters directly if you already own other smart home devices or use a specific calendar service regularly, checking ecosystem compatibility before buying avoids a real functionality gap after purchase.\n\nCheck which ecosystem, Alexa or Google Assistant, the display uses, and confirm it matches what your other smart home devices and calendar service actually support."
  },
  {
    "criterion": "Consider display motorization if the display needs to track you around the desk",
    "explanation": "A small number of smart displays include a motorized base that automatically rotates or tracks a person's position during a video call, keeping you framed in view even if you move around while working, a useful feature for anyone who moves between multiple monitors or stands up periodically during calls, but an added cost and complexity that's wasted if you sit relatively still.\n\nThis matters more for anyone with a multi-monitor setup who shifts position frequently during calls, less for a single fixed desk position.\n\nCheck the listing specifically for motorized tracking as a named feature, and weigh its added cost against how much you'd actually benefit from it given your desk setup."
  },
  {
    "criterion": "Weigh audio quality if the display will also serve as a music or podcast speaker",
    "explanation": "Speaker quality varies meaningfully between smart display models even within the same product line, some prioritize a compact footprint at the cost of thinner, tinnier sound, while others include improved bass and clarity as a specific upgrade.\n\nThis matters more if you plan to actually use the display as your primary desk speaker for music, podcasts, or calls throughout the day, less if audio is a secondary consideration behind the visual display itself.\n\nCheck reviews and the listing specifically for audio quality mentions, not just screen specs, if sound quality is a real factor in your decision."
  }
];

export const faq = [
  {
    "q": "What smart display fits under a monitor without blocking it?",
    "a": "The compact Echo Show 5 and the 7 inch Nest Hub are both short enough to sit under or beside most monitors without blocking your view."
  },
  {
    "q": "Can I put a 10 inch smart display under my monitor?",
    "a": "It's possible on a very deep desk, but the Echo Show 10's height makes it a poor fit for most under-monitor setups, it's better suited to an adjacent open desk space."
  },
  {
    "q": "Is a smaller smart display always shorter?",
    "a": "Generally yes among these picks, but always check actual physical dimensions rather than screen diagonal alone, since stand height varies by model."
  }
];

export const guideSlug = "best-smart-displays-under-monitors";

export const guideTitle = "The Best Smart Displays for Under a Monitor: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg";

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
          "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant"
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
          "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant"
        ]
      ]
    }
  },
  {
    "subheading": "Alexa vs Google Assistant Ecosystem",
    "cards": [
      {
        "label": "",
        "text": "Integrates with Amazon smart home devices and services. In this comparison: Amazon Echo Show 5, Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant."
      },
      {
        "label": "",
        "text": "Integrates with Google Calendar and Google smart home devices. In this comparison: Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant."
      }
    ],
    "note": "Default to whichever ecosystem matches your existing smart home devices and calendar service."
  },
  {
    "subheading": "",
    "note": "Check each pick's voice assistant ecosystem against your existing smart home devices and calendar service before buying, not just screen specs."
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "A genuine front-facing camera with decent resolution, and motorized tracking if you move around during calls."
      },
      {
        "label": "",
        "text": "Amazon Echo Show 5 includes a front-facing camera for video calls."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want a larger screen, motorized tracking, or better audio, where Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant's features give real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need a simple clock and notification glance display, where Amazon Echo Show 5 covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Physical height and depth prioritized over screen diagonal",
    "description": "Focused on how short and shallow each display actually is, since a wide but short display fits under a monitor better than a narrow but tall one."
  },
  {
    "title": "",
    "description": "Left out the 10 and 15 inch displays from our other guides, since their height makes them a poor fit specifically for under-monitor placement."
  },
  {
    "title": "Viewing angle from a seated position considered",
    "description": "Checked whether each compact display remains legible when placed low and viewed from a normal seated position at a desk."
  },
  {
    "title": "Cable and stand footprint checked for tight spaces",
    "description": "Considered the base and cable routing needed for each model in the narrow space typically available under or beside a monitor."
  }
];

export const introParagraphs = [
  "Fitting a smart display under or directly beside a monitor without blocking your view requires genuine shortness, not just a small screen diagonal. Out of our verified research pool, only the compact Echo Show 5 and the 7 inch Nest Hub are short enough to sit low beside a monitor without competing for eye-level space.",
  "The 10 and 15 inch models we cover in other guides are simply too tall and wide for this specific placement, they belong beside your desk setup or on an adjacent surface, not tucked directly under a monitor. We excluded them here rather than pretend they fit this narrow use case."
];

export const lastUpdated = "2026-08-06";

export const mainKeyword = "smart display under monitor";

export const metaDescription = "A practical comparison of 2 smart displays for under a monitor, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Smart Displays for Under a Monitor (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b09b2sbhqk-echoshow5",
    "rank": 1,
    "badge": "Shortest, Most Under-Monitor-Friendly Pick",
    "name": "Amazon Echo Show 5 (newest model), Smart display, Designed for Alexa+, 2x the bass and clearer sound, Charcoal",
    "price": "$89.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B2SBHQK?tag=theofficejournal-20",
    "description": "5 inches this is the smallest and most desk-appropriate Echo Show in this guide, small enough to sit beside a keyboard without blocking a monitor. It carries a basic camera suitable for casual video calls, plus improved bass and clearer sound over earlier Show 5 generations.\n\nIts small screen limits how much information fits at a glance compared to the 10 or 15 inch models, so treat it as a bedside or compact desk clock-and-notifications display rather than a full home organization hub. The low price makes it an easy add-on even for a secondary desk.",
    "specs": [
      "Approximately 5.5 inch display",
      "Basic camera for video calls",
      "Improved bass and sound over earlier generations",
      "Designed for Alexa+"
    ],
    "pros": [
      "compact, fits beside a keyboard without blocking a monitor",
      "Lowest price among the Echo Show models here",
      "Camera included for casual video calls",
      "Improved audio over earlier Show 5 versions"
    ],
    "cons": [
      "Small screen limits at-a-glance information",
      "Basic camera resolution versus larger Echo Show models",
      "Not intended as a primary home organization hub"
    ],
    "bestFor": "Compact desks wanting a small clock, notifications, and casual video call display"
  },
  {
    "id": "b0clbmvwk2-nesthub7",
    "rank": 2,
    "badge": "Best Slightly Larger Pick That Still Fits",
    "name": "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant - Charcoal",
    "price": "See price on Amazon",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31xy1VOYHUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLBMVWK2?tag=theofficejournal-20",
    "description": "The Nest Hub is a genuine 7 inch display and, unlike every Echo Show in this guide, it has no built-in camera at all, an important distinction for anyone specifically avoiding a camera on their desk. It runs Google Assistant instead of Alexa, a real difference if your calendar and reminders already live in a Google account.\n\nThe compact size and lack of camera make it well suited to a desk or nightstand where a lens pointed at you is unwelcome, though it also means it cannot do Alexa-style video calling that the Echo Show models support. It also ships in a lighter Chalk color option for buyers who prefer that finish.\n\nCompact 7 inch size fits small spaces easily.",
    "specs": [
      "7 inch display",
      "No built-in camera",
      "Google Assistant integration",
      "Also available in Chalk color"
    ],
    "pros": [
      "no built-in camera, a real privacy advantage on a desk",
      "Compact 7 inch size fits small spaces easily",
      "Deep Google Assistant and Google Calendar integration",
      "Lower typical price point than most Echo Show models"
    ],
    "cons": [
      "No camera means no built-in video calling",
      "Google Assistant only, not Alexa",
      "Price not independently confirmed at publish time, check current listing"
    ],
    "bestFor": "Privacy-conscious buyers wanting a compact Google Assistant display with no camera"
  }
];

export const readTime = "6 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-smart-displays-for-desks",
    "title": "Best Small Smart Displays for Desks (2026)"
  },
  {
    "href": "/guide/best-5-inch-smart-displays",
    "title": "Best 5 Inch Smart Displays (2026)"
  },
  {
    "href": "/guide/best-7-inch-smart-displays",
    "title": "Best 7 Inch Smart Displays (2026)"
  }
];

export const breadcrumbLabel = "Best Smart Displays for Under a Monitor";
