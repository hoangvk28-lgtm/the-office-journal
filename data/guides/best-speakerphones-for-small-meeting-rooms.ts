export const guideSlug = "best-speakerphones-for-small-meeting-rooms";
export const guideTitle = "5 Best Speakerphones for Small Meeting Rooms in 2026";
export const metaTitle = "Best Speakerphones for Small Meeting Rooms, Honestly Reviewed (2026)";
export const metaDescription =
  "5 speakerphones we evaluated for small meeting rooms, with the pickup-radius math competitors skip: a device's stated pickup radius assumes ideal conditions, real rooms with hard surfaces need real margin.";
export const mainKeyword = "speakerphone for small meeting room";
export const introParagraphs = [
  "A speakerphone's stated pickup radius (e.g., 13ft) assumes close-to-ideal acoustic conditions, small meeting rooms with hard surfaces, glass walls, or minimal sound absorption will perform worse in practice, buy a device rated for more radius than your room's actual size to build in real margin.",
  "Mic count matters more than raw pickup radius for a small room with several people spread around a table, since isolating individual voices from each other is a different problem than simply hearing sound from further away.",
];
export const lastUpdated = "2026-07-30";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "anker-powerconf-smallroom",
    rank: 1,
    badge: "Best 6-Mic Pick for Small Meeting Rooms",
    name: "Anker PowerConf Speakerphone, Zoom Certified Conference Speaker with 6 Mics",
    price: "$149.99",
    rating: "4.4 stars from 5,801 Amazon ratings",
    reviews: "5,801 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41x468UYHLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08CV6MGJH?tag=theofficejournal-20",
    description:
      "6 physical microphones genuinely handle voice isolation across a small meeting table with several people, a different challenge from simply picking up sound from a distance. Zoom certified and backed by a large, well-established review base.\n\nGenuinely well-suited to a small dedicated meeting room rather than an open desk, the mic array is built for a table setting.\n\nLarge, well-established review base. Set against that, higher price than budget alternatives. Both matter when comparing it to the other picks here.",
    specs: ["6 microphones, Zoom certified", "Echo cancellation, background noise reduction", "Bluetooth and USB connectivity", "Table-centered design"],
    pros: ["6 mics genuinely handle a small meeting table with several people", "Large, well-established review base", "Zoom certified", "Strong echo and noise handling"],
    cons: ["Higher price than budget alternatives", "Not certified for other platforms beyond Zoom", "Bluetooth range may need testing in rooms with interference"],
    bestFor: "Small meeting rooms hosting several people around a table",
  },
  {
    id: "yealink-sp92-smallroom",
    rank: 2,
    badge: "Best Pickup Radius for a Small Room",
    name: "Yealink SP92 Conference Speaker and Microphone with AI Noise Cancellation, 20H Call Time, 13ft Pick-up, 360 Omni Mic 50mm Full-Duplex Speaker, Bluetooth 5.3 USB Speakerphone for Teams",
    price: "$60.20",
    rating: "4.2 stars from 127 Amazon ratings",
    reviews: "127 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31E89kCEPNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F28HTJP3?tag=theofficejournal-20",
    description:
      "An explicit 13ft pickup radius spec, genuinely useful for planning around a small meeting room's actual dimensions, remember this assumes near-ideal conditions, so a room with hard surfaces or glass will perform somewhat below that stated figure.\n\n360° omni mic and full-duplex speaker at a genuinely affordable price for a dedicated small-room device.\n\nA genuine advantage here is that very affordable for a dedicated small-room device. The tradeoff is stated radius assumes near-ideal acoustic conditions, build in margin for hard-surface rooms.",
    specs: ["13ft pickup radius, 360° omni mic", "AI noise cancellation, full-duplex", "20H call time, Bluetooth 5.3", "Budget-friendly"],
    pros: ["Explicit pickup radius spec aids room-size planning", "Very affordable for a dedicated small-room device", "AI noise cancellation", "Long call time"],
    cons: ["Stated radius assumes near-ideal acoustic conditions, build in margin for hard-surface rooms", "Smaller review base than Anker/Jabra alternatives", "360° pickup may capture hallway noise near a door"],
    bestFor: "Buyers who want an explicit pickup-radius spec to plan around their room's actual size",
  },
  {
    id: "jabra-speak2-40-smallroom",
    rank: 3,
    badge: "Best Dual-Certified Small Room Pick",
    name: "Jabra Speak2 40 Portable Speakerphone - 4 Noise-Cancelling Mics, Full-Range 50mm Portable Speaker, Wideband Audio and USB-A and USB-C Connections - Certified for Zoom and Google Meet - Dark Grey",
    price: "$146.99",
    rating: "4.3 stars from 68 Amazon ratings",
    reviews: "68 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31oHJerSTwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BWKTR73Y?tag=theofficejournal-20",
    description:
      "4 noise-cancelling mics genuinely suited to a small meeting room's table size, certified for both Zoom and Google Meet if your small room hosts calls on either platform. Full-range 50mm speaker for clear audio playback in an enclosed space.\n\nA smaller review base than the top Anker pick, but dual certification adds real flexibility for a shared small meeting room.\n\nDual platform certification for Zoom and Google Meet. On the other hand, smaller review base than the top Anker pick. Neither should be a surprise once you know to look for it.",
    specs: ["4 noise-cancelling mics, certified for Zoom and Google Meet", "USB-A and USB-C connections", "Full-range 50mm speaker", "Portable design"],
    pros: ["4 mics genuinely fit a small meeting room's table size", "Dual platform certification for Zoom and Google Meet", "Full-range speaker for clear playback in an enclosed room", "Both USB-A and USB-C connections"],
    cons: ["Smaller review base than the top Anker pick", "Fewer mics than the 6-mic option", "Higher price relative to its review count"],
    bestFor: "Small meeting rooms that host both Zoom and Google Meet calls",
  },
  {
    id: "emeet-m0plus-smallroom",
    rank: 4,
    badge: "Best Budget Small Room Pick",
    name: "EMEET M0 Plus Conference Speaker and Microphone, 4 Mics 360° Voice Pickup",
    price: "$52.23",
    rating: "4.3 stars from 1,596 Amazon ratings",
    reviews: "1,596 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/51zfICZQrEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVZLS5GZ?tag=theofficejournal-20",
    description:
      "4 mics with 360° voice pickup at a genuinely affordable price for a small dedicated meeting room, solid review base gives real-world confidence at this budget tier without paying for premium certification.\n\n360° pickup pattern suits a small round table specifically, verify your room's table shape before buying.\n\nSolid review base for the price. That's a real strength, but weigh it against the flip side: no specific platform certification.",
    specs: ["4 mics, 360° voice pickup", "USB and Bluetooth connectivity", "Compact design", "Budget-friendly"],
    pros: ["Very affordable for a 4-mic small-room design", "Solid review base for the price", "360° pickup suits a small round table", "Compact, unobtrusive design"],
    cons: ["No specific platform certification", "360° pickup less directional for narrow rectangular tables", "Fewer premium features than certified alternatives"],
    bestFor: "Budget-conscious small meeting rooms with a round table",
  },
  {
    id: "jabra-speak510uc-smallroom",
    rank: 5,
    badge: "Best Proven Track Record for Small Rooms",
    name: "Jabra Speak 510 UC Wireless Bluetooth Speakerphone, Outstanding Sound Quality, Portable Conference Speaker for Holding Meetings Anywhere - Certified for Zoom & Google Meet",
    price: "$119.49",
    rating: "4.7 stars from 5,905 Amazon ratings",
    reviews: "5,905 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Hwa9J+9XL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00AQUO5RI?tag=theofficejournal-20",
    description:
      "The highest rating of any pick in this guide on a large, well-established review base, strong long-term evidence of reliable performance in small meeting room settings specifically. Portable wireless design if the room doubles for other uses.\n\nCertified for both Zoom and Google Meet, genuinely flexible for whatever platform your small room's calls run on.\n\nWorth calling out specifically: large, well-established review base. The catch is fewer physical mics than the 6-mic Anker pick.",
    specs: ["Wireless Bluetooth, certified for Zoom and Google Meet", "Portable conference speaker", "Established sound quality reputation", "Long track record"],
    pros: ["Highest rating of any pick in this guide", "Large, well-established review base", "Certified for both Zoom and Google Meet", "Portable if the room serves multiple purposes"],
    cons: ["Fewer physical mics than the 6-mic Anker pick", "Older design than 2025-edition alternatives", "Wireless-only, no wired USB fallback confirmed"],
    bestFor: "Small meeting rooms that want the most-proven, longest track record option",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Pickup radius as a planning spec, not a guarantee", description: "Noted that stated pickup radius figures assume near-ideal acoustic conditions, and recommended buying with real margin above your room's actual dimensions for rooms with hard surfaces or glass." },
  { title: "Mic count for voice isolation, distinct from raw pickup distance", description: "Weighed physical mic count for handling several people around a small table, a different challenge from simply hearing sound from further away, which pickup radius alone measures." },
  { title: "Platform certification for whichever software the room actually uses", description: "Checked which picks carry Zoom, Google Meet, or dual certification, relevant to matching a small meeting room's speakerphone to the platform it will actually run." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "Jabra Speak 510 UC Wireless Bluetooth Speakerphone, Outstanding Sound Quality"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Jabra Speak 510 UC Wireless Bluetooth Speakerphone, Outstanding Sound Quality"
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
          "Under $53",
          "EMEET M0 Plus Conference Speaker and Microphone"
        ],
        [
          "Up to $150",
          "Anker PowerConf Speakerphone"
        ]
      ]
    }
  },
  {
    "subheading": "EMEET M0 Plus Conference Speaker and Microphone vs Anker PowerConf Speakerphone",
    "cards": [
      {
        "label": "EMEET M0 Plus Conference Speaker and Microphone",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Anker PowerConf Speakerphone",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to EMEET M0 Plus Conference Speaker and Microphone unless your specific need genuinely calls for the pricier pick's extra headroom."
  },
  {
    "subheading": "By Review Base Confidence",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Largest, most-established review base",
          "Jabra Speak 510 UC Wireless Bluetooth Speakerphone, Outstanding Sound Quality"
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Buyer Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Clear, specific dimensions or capacity and a real, established review history, not just marketing language."
      },
      {
        "label": "In this comparison",
        "text": "Jabra Speak 510 UC Wireless Bluetooth Speakerphone, Outstanding Sound Quality is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Anker PowerConf Speakerphone's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where EMEET M0 Plus Conference Speaker and Microphone covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a speakerphone often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the speakerphone holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this speakerphone over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any speakerphone you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A speakerphone that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  { q: "How much pickup radius do I need for a small meeting room?", a: "Buy more than your room's actual dimensions suggest. Stated pickup radius figures assume near-ideal acoustic conditions, a room with hard surfaces or glass walls will perform somewhat below that stated figure in practice." },
  { q: "Does mic count matter more than pickup radius for a small room?", a: "They solve different problems. Mic count drives how well a device isolates individual voices from each other around a table, pickup radius measures how far away it can hear sound at all. A small room with several people needs both." },
  { q: "What pickup pattern works best for a small meeting room?", a: "360° omni pickup suits a small round table, while a more directional pickup pattern can perform better across a narrow rectangular table, match the pattern to your room's actual table shape." },
  { q: "Do I need a platform-certified speakerphone for a small meeting room?", a: "If the room is dedicated to one video platform, a certified device offers a stronger tested guarantee. If it hosts calls on multiple platforms, a dual-certified pick like the Jabra Speak2 40 offers more flexibility." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-speakerphones-for-two-person-offices", title: "Best Speakerphones for Two-Person Offices (2026)" },
  { href: "/guide/best-noise-canceling-speakerphones", title: "Best Noise-Canceling Speakerphones (2026)" },
  { href: "/guide/best-speakerphones-for-zoom", title: "Best Speakerphones for Zoom (2026)" },
];
