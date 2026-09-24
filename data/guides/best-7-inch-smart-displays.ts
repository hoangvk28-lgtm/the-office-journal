export const guideSlug = "best-7-inch-smart-displays";
export const guideTitle = "1 Best 7 Inch Smart Display in 2026";
export const metaTitle = "Best 7 Inch Smart Displays (2026)";
export const metaDescription =
  "The Google Nest Hub is the only verified genuine 7 inch smart display we found this pass. Here is a detailed, honest look at it.";
export const mainKeyword = "7 inch smart display";
export const introParagraphs = [
  "Our verified research pool contains exactly one genuine 7 inch class smart display, the Google Nest Hub 2nd generation. We looked for a comparable 7 inch Echo Show or other competing model, but Amazon's Echo Show lineup jumps from the roughly 5.5 inch Echo Show 5 straight to the 8.7 inch and larger models, with no verified genuine 7 inch Echo Show in current production.",
  "Rather than round an 8 inch display down to fit this search term, we're giving the Nest Hub a thorough single-product review below, including its most distinctive trait: no built-in camera at all.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/31xy1VOYHUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0clbmvwk2-nesthub7",
    rank: 1,
    badge: "The Only Verified 7 Inch Class Pick",
    name: "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant - Charcoal",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31xy1VOYHUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CLBMVWK2?tag=theofficejournal-20",
    description: "The Nest Hub is a genuine 7 inch display and, unlike every Echo Show in this guide, it has no built-in camera at all, an important distinction for anyone specifically avoiding a camera on their desk. It runs Google Assistant instead of Alexa, a real difference if your calendar and reminders already live in a Google account.\n\nThe compact size and lack of camera make it well suited to a desk or nightstand where a lens pointed at you is unwelcome, though it also means it cannot do Alexa-style video calling that the Echo Show models support. It also ships in a lighter Chalk color option for buyers who prefer that finish.\n\nCompact 7 inch size fits small spaces easily. Set against that, no camera means no built-in video calling. Both matter when comparing it to the other picks here.",
    specs: ["7 inch display", "No built-in camera", "Google Assistant integration", "Also available in Chalk color"],
    pros: ["Genuinely no built-in camera, a real privacy advantage on a desk", "Compact 7 inch size fits small spaces easily", "Deep Google Assistant and Google Calendar integration", "Lower typical price point than most Echo Show models"],
    cons: ["No camera means no built-in video calling", "Google Assistant only, not Alexa", "Price not independently confirmed at publish time, check current listing"],
    bestFor: "Privacy-conscious buyers wanting a compact Google Assistant display with no camera",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Applied a strict 7 inch class size definition", description: "Only counted displays genuinely at or near 7 inches, rather than rounding an 8 inch or larger display down to fit this guide's search term." },
  { title: "Checked for a competing 7 inch Echo Show model", description: "Confirmed Amazon's current Echo Show lineup has no genuine 7 inch class model, jumping from roughly 5.5 inches to 8.7 inches and larger." },
  { title: "Camera absence verified and treated as a defining trait", description: "Confirmed directly that this specific model has no built-in camera, an important, easy-to-miss distinction from other Nest Hub generations." },
  { title: "Reviewed the single confirmed pick in depth", description: "Chose a thorough single-product writeup over padding the list with a rounded-up or rounded-down size match." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Screen Size",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "This guide's featured display",
          "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "See price on Amazon",
          "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant"
        ]
      ]
    }
  },
  {
    "subheading": "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant vs a Basic Smart Speaker",
    "cards": [
      {
        "label": "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant",
        "text": "Adds a visual display for at-a-glance info and video calls, worth checking against your desk space and privacy preferences."
      },
      {
        "label": "A basic smart speaker",
        "text": "Cheaper and no camera concerns, but no visual glance information or video call capability."
      }
    ],
    "note": "Most buyers evaluating this guide's keyword should default to Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant unless a basic smart speaker meets your specific, limited need."
  },
  {
    "subheading": "By Voice Assistant Ecosystem",
    "table": {
      "headers": [
        "Priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Matches your existing smart home devices",
          "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant"
        ]
      ]
    }
  },
  {
    "subheading": "For Video Calls Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A genuine front-facing camera with decent resolution, and motorized tracking if you move around during calls."
      },
      {
        "label": "In this comparison",
        "text": "Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant is worth checking against its listed camera specs before buying."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a larger screen, motorized tracking, or better audio, where Google Nest Hub 7\" Smart Display 2nd Generation with Google Assistant's features give real headroom over a basic display."
      },
      {
        "label": "Save if",
        "text": "You just need a simple clock and notification glance display."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Decide whether a built-in camera is a feature or a privacy concern for your desk",
    "explanation": "Some smart displays include a front-facing camera for casual video calls or as a security-camera-style monitor, while others are explicitly camera-free by design, marketed specifically for privacy-conscious buyers who don't want a camera pointed at their workspace all day.\n\nThis distinction matters directly depending on your actual use case, a camera is genuinely useful if you'll use the display for video calls, but it's a real consideration if the display sits on a desk where you'd rather not have an always-on camera present, even one you can physically cover.\n\nCheck the listing specifically for camera presence or absence, and check whether a physical camera shutter or cover is included if privacy matters to you."
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
    "explanation": "A small number of smart displays include a motorized base that automatically rotates or tracks a person's position during a video call, keeping you framed in view even if you move around while working, a genuinely useful feature for anyone who moves between multiple monitors or stands up periodically during calls, but an added cost and complexity that's wasted if you sit relatively still.\n\nThis matters more for anyone with a multi-monitor setup who shifts position frequently during calls, less for a single fixed desk position.\n\nCheck the listing specifically for motorized tracking as a named feature, and weigh its added cost against how much you'd actually benefit from it given your desk setup."
  },
  {
    "criterion": "Weigh audio quality if the display will also serve as a music or podcast speaker",
    "explanation": "Speaker quality varies meaningfully between smart display models even within the same product line, some prioritize a compact footprint at the cost of thinner, tinnier sound, while others include genuinely improved bass and clarity as a specific upgrade.\n\nThis matters more if you plan to actually use the display as your primary desk speaker for music, podcasts, or calls throughout the day, less if audio is a secondary consideration behind the visual display itself.\n\nCheck reviews and the listing specifically for audio quality mentions, not just screen specs, if sound quality is a real factor in your decision."
  }
];

export const faq: FaqItem[] = [
  { q: "Is the Google Nest Hub the only 7 inch smart display available?", a: "It's the only one we could verify in our research pool this pass. Amazon's current Echo Show lineup has no model at this exact 7 inch size class." },
  { q: "Does the 7 inch Nest Hub have a camera?", a: "No, this specific 2nd generation model has no built-in camera at all, an important distinction from other smart displays and even other Nest Hub generations." },
  { q: "Can I use Alexa skills on the Nest Hub?", a: "No, the Nest Hub runs Google Assistant exclusively and does not support Alexa skills or routines." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-5-inch-smart-displays", title: "Best 5 Inch Smart Displays (2026)" },
  { href: "/guide/best-8-inch-smart-displays", title: "Best 8 Inch Smart Displays (2026)" },
  { href: "/guide/best-smart-displays-under-monitors", title: "Best Smart Displays Under Monitors (2026)" }
];
