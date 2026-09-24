export const guideSlug = "best-5-inch-smart-displays";
export const guideTitle = "1 Best 5 Inch Smart Display in 2026";
export const metaTitle = "Best 5 Inch Smart Displays (2026)";
export const metaDescription =
  "Only one genuinely 5 inch class smart display exists in our verified research pool, the Echo Show 5. Here is an honest, detailed look at it.";
export const mainKeyword = "5 inch smart display";
export const introParagraphs = [
  "We're being direct about this one: our verified research pool contains exactly one genuinely 5 inch class smart display, the Amazon Echo Show 5 at roughly 5.5 inches. We looked for a second true 5 inch option, including a Lenovo Smart Clock Essential-style device, but could not confirm current pricing or imagery for one this research pass, so we're not padding this guide with an unverified product.",
  "Rather than stretch a 7 inch or 10 inch display into a false '5 inch' claim, we're giving the Echo Show 5 a thorough single-product review below and pointing you toward our related size guides if a 5 inch screen specifically isn't a hard requirement.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09b2sbhqk-echoshow5",
    rank: 1,
    badge: "The Only Verified 5 Inch Class Pick",
    name: "Amazon Echo Show 5 (newest model), Smart display, Designed for Alexa+, 2x the bass and clearer sound, Charcoal",
    price: "$89.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31qOIWagKNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09B2SBHQK?tag=theofficejournal-20",
    description: "At roughly 5.5 inches this is the genuinely smallest and most desk-appropriate Echo Show in this guide, small enough to sit beside a keyboard without blocking a monitor. It carries a basic camera suitable for casual video calls, plus improved bass and clearer sound over earlier Show 5 generations.\n\nIts small screen limits how much information fits at a glance compared to the 10 or 15 inch models, so treat it as a bedside or compact desk clock-and-notifications display rather than a full home organization hub. The low price makes it an easy add-on even for a secondary desk.\n\nWorth calling out specifically: lowest price among the Echo Show models here. The catch is small screen limits at-a-glance information.",
    specs: ["Approximately 5.5 inch display", "Basic camera for video calls", "Improved bass and sound over earlier generations", "Designed for Alexa+"],
    pros: ["Genuinely compact, fits beside a keyboard without blocking a monitor", "Lowest price among the Echo Show models here", "Camera included for casual video calls", "Improved audio over earlier Show 5 versions"],
    cons: ["Small screen limits at-a-glance information", "Basic camera resolution versus larger Echo Show models", "Not intended as a primary home organization hub"],
    bestFor: "Compact desks wanting a small clock, notifications, and casual video call display",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Applied a strict 5 inch class size definition", description: "Only counted displays genuinely in the 5 to 5.5 inch range, rather than rounding a 7 inch display down to fit this guide's search term." },
  { title: "Searched for a second genuine 5 inch option before finalizing", description: "Looked specifically for smaller compact smart displays like a Lenovo Smart Clock-style device but could not verify current pricing or imagery this research pass." },
  { title: "Reviewed the single confirmed pick in depth rather than padding the list", description: "Chose to give the Echo Show 5 a thorough, detailed writeup instead of including unrelated larger displays to reach a longer list." },
  { title: "Cross-referenced against our other size-specific guides", description: "Pointed toward our 7 and 10 inch guides for buyers whose actual need is a small display broadly, not specifically 5 inches." }
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
          "Amazon Echo Show 5"
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
          "$89.99",
          "Amazon Echo Show 5"
        ]
      ]
    }
  },
  {
    "subheading": "Amazon Echo Show 5 vs a Basic Smart Speaker",
    "cards": [
      {
        "label": "Amazon Echo Show 5",
        "text": "Adds a visual display for at-a-glance info and video calls, worth checking against your desk space and privacy preferences."
      },
      {
        "label": "A basic smart speaker",
        "text": "Cheaper and no camera concerns, but no visual glance information or video call capability."
      }
    ],
    "note": "Most buyers evaluating this guide's keyword should default to Amazon Echo Show 5 unless a basic smart speaker meets your specific, limited need."
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
          "Amazon Echo Show 5"
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
        "text": "Amazon Echo Show 5 is worth checking against its listed camera specs before buying."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want a larger screen, motorized tracking, or better audio, where Amazon Echo Show 5's features give real headroom over a basic display."
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
  { q: "Is the Echo Show 5 the only 5 inch smart display available?", a: "It's the only one we could verify with confirmed pricing and imagery in our research pool this pass. Other compact options may exist but we could not confirm their current listings." },
  { q: "How big is the Echo Show 5's screen exactly?", a: "Roughly 5.5 inches diagonally, placing it in the 5 inch size class along with a low price point relative to larger Echo Show models." },
  { q: "Should I get a 5 inch display or go slightly bigger?", a: "If desk space is very tight, the 5 inch class works well. If you have a bit more room, a 7 inch Nest Hub shows meaningfully more information at a glance." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-smart-displays-for-desks", title: "Best Small Smart Displays for Desks (2026)" },
  { href: "/guide/best-7-inch-smart-displays", title: "Best 7 Inch Smart Displays (2026)" },
  { href: "/guide/best-smart-displays-under-monitors", title: "Best Smart Displays Under Monitors (2026)" }
];
