export const guideSlug = "best-desk-lights-for-video-calls";
export const guideTitle = "6 Best Desk Lights for Video Calls in 2026";
export const metaTitle = "Best Desk Lights for Video Calls, Honestly Reviewed (2026)";
export const metaDescription =
  "6 desk lights we evaluated for video calls, with the PWM flicker issue competitors rarely mention: cheap LED dimming can introduce flicker invisible to the eye but noticeable as banding on camera.";
export const mainKeyword = "desk light for video calls";
export const introParagraphs = [
  "Some budget LED lights use PWM (pulse-width modulation) dimming, which can introduce flicker invisible to the naked eye but visible as banding or strobing on camera, especially at lower brightness settings, a real issue most listings never mention.",
  "A dedicated video-call desk light differs from a general-purpose desk lamp in beam angle and diffusion, video lights are designed to illuminate your face evenly without harsh shadows, while a standard desk lamp is designed to light a work surface, not a face.",
];
export const lastUpdated = "2026-07-30";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/414WSIzKGyL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "logitech-litraglow-desklight",
    rank: 1,
    badge: "Best Premium Desk Light for Video Calls",
    name: "Logitech for Creators Litra Glow Premium LED Streaming Light - Graphite",
    price: "$54.31",
    rating: "4.5 stars from 3,366 Amazon ratings",
    reviews: "3,366 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21ZCgx+xmkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B097QZGRCQ?tag=theofficejournal-20",
    description:
      "Built by Logitech specifically for streaming and video calls, genuinely engineered diffusion designed to illuminate a face evenly without the harsh shadows a general-purpose desk lamp produces. Established brand with quality LED driver design, meaningfully reducing PWM flicker risk versus unbranded budget lights.\n\nSolid, well-established review base for a premium pick, real evidence of consistent performance across many video call setups.\n\nEstablished brand with quality driver design, lower PWM flicker risk. Set against that, higher price than generic ring lights. Both matter when comparing it to the other picks here.",
    specs: ["Premium LED streaming/video call light", "Engineered face-illumination diffusion", "Quality LED driver design", "Solid review base"],
    pros: ["Purpose-built diffusion for face illumination, not a general work-surface lamp", "Established brand with quality driver design, lower PWM flicker risk", "Solid, well-established review base", "Reasonable price for a premium branded light"],
    cons: ["Higher price than generic ring lights", "CRI not explicitly disclosed", "Smaller light surface than a large panel"],
    bestFor: "Buyers who want a premium, purpose-built video call light from an established brand",
  },
  {
    id: "litones-desklight",
    rank: 2,
    badge: "Best Dual-Purpose Desk Lamp and Video Light",
    name: "LitONES LED Desk Lamp for Home Office, Soft Edge-lit Design - Modern Style",
    price: "$64.99",
    rating: "4.8 stars from 895 Amazon ratings",
    reviews: "895 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414WSIzKGyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZMPX2PW?tag=theofficejournal-20",
    description:
      "Highest rating of any pick in this guide, a genuine dual-purpose design that works as a normal desk lamp for reading and tasks as well as ambient fill light during video calls, though it won't illuminate your face as directly as a purpose-built ring light or streaming panel.\n\nSoft edge-lit design genuinely reduces harsh shadow risk compared to a basic single-bulb desk lamp.\n\nA genuine advantage here is that genuine dual-purpose as both a desk lamp and video call light. The tradeoff is won't illuminate your face as directly as a purpose-built ring light.",
    specs: ["LED desk lamp, soft edge-lit design", "Dual-purpose: task lighting and video call fill light", "Modern style", "Highest rating in this guide"],
    pros: ["Highest rating of any pick in this guide", "Genuine dual-purpose as both a desk lamp and video call light", "Soft edge-lit design reduces harsh shadows", "Modern aesthetic fits a home office"],
    cons: ["Won't illuminate your face as directly as a purpose-built ring light", "Higher price than dedicated video lights", "Beam angle designed for desk surface, not face-forward like a streaming light"],
    bestFor: "Buyers who want one light that works well for both regular desk tasks and video calls",
  },
  {
    id: "zoomlighting-desklight",
    rank: 3,
    badge: "Best High-CRI Desk Light",
    name: "Zoom Lighting for Computer, Adjustable Desk Lighting for Video Calls, 30 Light Modes Video Conference Light, Desk Ring Light with Stand for Webcam, Meetings, Live Stream, Home Office. CRI 97.8",
    price: "$36.99",
    rating: "4.5 stars from 719 Amazon ratings",
    reviews: "719 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Phq+HhoVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2XMLRL3?tag=theofficejournal-20",
    description:
      "A disclosed CRI of 97.8, genuinely important for accurate skin tone rendering during video calls, combined with 30 light modes for granular brightness and temperature control. Explicitly designed and marketed for video call use.\n\nQuality LED design at this CRI level generally implies better dimming circuitry, reducing the PWM flicker risk more common in unbranded budget lights.\n\n30 light modes for granular control. On the other hand, higher price than basic ring lights. Neither should be a surprise once you know to look for it.",
    specs: ["CRI 97.8, 30 light modes", "Purpose-built for video calls", "Desk ring light with stand", "Solid review base"],
    pros: ["Explicit high CRI (97.8) for accurate skin tone rendering", "30 light modes for granular control", "Purpose-built video call design", "Solid review base"],
    cons: ["Higher price than basic ring lights", "Stand-mounted, less flexible than a desk lamp for general tasks", "PWM flicker not explicitly ruled out despite quality design"],
    bestFor: "Buyers who prioritize accurate color rendering for professional-looking video calls",
  },
  {
    id: "desk-ring-light-desklight",
    rank: 4,
    badge: "Best Proven Budget Desk Light",
    name: "Desk Ring Light with Stand for Computer, Desk Light for Video Recording",
    price: "$32.86",
    rating: "4.3 stars from 3,872 Amazon ratings",
    reviews: "3,872 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41r5nA1roKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B095741MZS?tag=theofficejournal-20",
    description:
      "A large, well-established review base at a genuinely affordable price for a purpose-built video call desk light with stand. Adjustable color temperature adds flexibility for matching room lighting.\n\nCRI and PWM flicker specs not disclosed, common gaps at this price point, but the large review volume suggests most buyers are satisfied with real-world performance.\n\nGenuinely affordable. That's a real strength, but weigh it against the flip side: cRI not disclosed.",
    specs: ["Desk ring light with stand", "Adjustable color temperature", "Large, well-established review base", "Budget-friendly"],
    pros: ["Large, well-established review base", "Genuinely affordable", "Adjustable color temperature", "Stand included"],
    cons: ["CRI not disclosed", "PWM flicker risk not addressed", "Lower rating than the premium picks"],
    bestFor: "Budget-conscious buyers who want a proven, purpose-built video call light",
  },
  {
    id: "raleno9in-desklight",
    rank: 5,
    badge: "Best Large-Panel Desk Light",
    name: "RALENO 9\" LED Video Light, 2500K-6500K Camera Light with Desk Stand",
    price: "$39.99",
    rating: "4.5 stars from 2,975 Amazon ratings",
    reviews: "2,975 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41WMggt9RXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B087CZ85GV?tag=theofficejournal-20",
    description:
      "A 9-inch panel design, genuinely more even facial illumination than a smaller ring light due to its larger diffusion surface. Wide 2500K-6500K color temperature range for matching varied room lighting.\n\nSolid review base, real-world evidence of consistent performance across this larger panel format.\n\nWorth calling out specifically: wide color temperature range. The catch is larger footprint than a compact clip-on or ring light.",
    specs: ["9-inch LED panel, desk stand", "2500K-6500K color temperature range", "Larger diffusion surface than compact ring lights", "Solid review base"],
    pros: ["Larger panel provides more even facial illumination", "Wide color temperature range", "Solid review base", "Desk stand included"],
    cons: ["Larger footprint than a compact clip-on or ring light", "CRI not explicitly disclosed", "Higher price than basic ring lights"],
    bestFor: "Buyers who want more even illumination from a larger panel design",
  },
  {
    id: "airlonv-desklight",
    rank: 6,
    badge: "Best Clamp-Mounted Desk Lamp",
    name: "Airlonv LED Desk Lamp with Clamp, 17\" Stepless Dimming Light, Black",
    price: "$20.98",
    rating: "4.6 stars from 8,121 Amazon ratings",
    reviews: "8,121 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/415a2-2URFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C4JTPPYY?tag=theofficejournal-20",
    description:
      "A traditional 17-inch clamp-mounted desk lamp with stepless dimming, genuinely useful as ambient fill light during video calls if positioned correctly, though its beam angle is designed for illuminating a desk surface, not your face directly, unlike a purpose-built video light.\n\nLarge, well-established review base and a strong rating, real evidence of reliable general-purpose desk lamp performance.\n\nStepless dimming for fine brightness control. Set against that, beam angle designed for desk surface, not face-forward illumination. Both matter when comparing it to the other picks here.",
    specs: ["17-inch clamp-mounted desk lamp", "Stepless dimming", "General-purpose beam angle", "Large, well-established review base"],
    pros: ["Large, well-established review base", "Stepless dimming for fine brightness control", "Very affordable", "Doubles as a genuinely useful task lamp beyond video calls"],
    cons: ["Beam angle designed for desk surface, not face-forward illumination", "No specific CRI or color temperature adjustability disclosed", "Not purpose-built for video call facial lighting"],
    bestFor: "Buyers who want a versatile desk lamp that also provides some video call fill light",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "PWM flicker risk as a real, rarely-disclosed concern", description: "Flagged that budget LED lights using PWM dimming can introduce flicker invisible to the eye but visible as banding on camera, and favored established brands with quality driver design where this risk is generally lower." },
  { title: "Purpose-built video lighting vs. general-purpose desk lamps", description: "Distinguished lights genuinely engineered to illuminate a face evenly (ring lights, streaming panels) from general-purpose desk lamps whose beam angle is designed for a work surface, not a face." },
  { title: "CRI and color temperature disclosure as real differentiators", description: "Prioritized picks disclosing a specific CRI rating or adjustable Kelvin range, since these matter more for a natural, accurate look on camera than brightness alone." },
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
          "LitONES LED Desk Lamp for Home Office"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Airlonv LED Desk Lamp with Clamp"
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
          "Under $21",
          "Airlonv LED Desk Lamp with Clamp"
        ],
        [
          "Up to $65",
          "LitONES LED Desk Lamp for Home Office"
        ]
      ]
    }
  },
  {
    "subheading": "Airlonv LED Desk Lamp with Clamp vs LitONES LED Desk Lamp for Home Office",
    "cards": [
      {
        "label": "Airlonv LED Desk Lamp with Clamp",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "LitONES LED Desk Lamp for Home Office",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Airlonv LED Desk Lamp with Clamp unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "Airlonv LED Desk Lamp with Clamp"
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
        "text": "Airlonv LED Desk Lamp with Clamp is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where LitONES LED Desk Lamp for Home Office's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Airlonv LED Desk Lamp with Clamp covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a desk light often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the desk light holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this desk light over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any desk light you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A desk light that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  { q: "What is PWM flicker and why does it matter for video calls?", a: "PWM (pulse-width modulation) is a dimming method some budget LED lights use that can introduce flicker invisible to the naked eye but visible as banding or strobing on camera, especially at lower brightness settings. Established brands with quality LED driver design generally carry lower risk." },
  { q: "Can I use a regular desk lamp for video calls instead of a dedicated light?", a: "You can, but a regular desk lamp's beam angle is designed to illuminate a work surface, not your face directly, unlike a purpose-built video light engineered with diffusion for even facial illumination without harsh shadows." },
  { q: "Do I need a light with a disclosed CRI rating?", a: "If accurate skin tone and color rendering on camera matters to you, yes, prioritize a disclosed high CRI rating (95+) over raw brightness or a large number of preset modes alone." },
  { q: "Is a dual-purpose desk lamp as good as a dedicated video light for calls?", a: "It can work well as ambient fill light, but won't illuminate your face as directly or evenly as a purpose-built ring light or streaming panel, since its beam angle is designed for general desk tasks, not face-forward video lighting." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-adjustable-temperature-video-lighting", title: "Best Adjustable-Temperature Video Lighting (2026)" },
  { href: "/guide/best-clip-on-video-lighting", title: "Best Clip-On Video Lighting (2026)" },
  { href: "/guide/best-battery-powered-video-lighting", title: "Best Battery-Powered Video Lighting (2026)" },
];
