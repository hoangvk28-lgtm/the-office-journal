export const guideSlug = "best-iphone-desk-arms";
export const guideTitle = "5 Best iPhone Desk Arms in 2026";
export const metaTitle = "Best iPhone Desk Arms (2026)";
export const metaDescription =
  "5 desk arms we checked for real iPhone width compatibility across base, Plus, and Pro Max models, plus Lightning vs USB-C charging notes.";
export const mainKeyword = "iPhone desk arms";
export const introParagraphs = [
  "None of the arms in this comparison are marketed as iPhone-exclusive; they are general phone arms whose clip width happens to accommodate the current iPhone lineup. Since iPhone models vary meaningfully in size, from the compact base model to the wider Pro Max, clip width compatibility is the main thing worth checking here.",
  "We also note charging cable compatibility, since Apple's Lightning to USB-C transition means the mounted position and cable routing can differ depending on which iPhone generation you own.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b07p2vk93p-ida",
    rank: 1,
    badge: "Best Overall Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=theofficejournal-20",
    description:
      "This clip's 4.0-6.3 inch width range comfortably fits the base iPhone through the Pro Max without a case, though buyers with a thick case on the wider Pro Max models should double check the actual cased width before assuming a snug fit. It is not MagSafe compatible, this is a physical spring clip.\n\nAt this price and review volume, it remains the most proven basic option for mounting any current iPhone at a desk.\n\nAffordable. Set against that, not MagSafe, physical clip only. Both matter when comparing it to the other picks here.",
    specs: ["Clip fits 4.0-6.3in, covers current iPhone lineup bare", "Standard spring clip, not MagSafe", "33.46in reach", "Anti-slip base"],
    pros: ["Covers the full current iPhone width range bare", "Affordable", "Long reach", "Proven track record"],
    cons: ["Not MagSafe, physical clip only", "Case-inclusive width may be tight on Pro Max", "No charging pass-through"],
    bestFor: "Buyers who want an affordable physical clip that fits any current iPhone model bare.",
  },
  {
    id: "b079qy6rfq-ida",
    rank: 2,
    badge: "Best for Cases",
    name: "MAGIPEA Gooseneck Phone Holder, Compatible with iPhone 17 16 15 Pro Max",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=theofficejournal-20",
    description:
      "MAGIPEA explicitly lists compatibility with the iPhone 17, 16, and 15 Pro Max lines, and its 3.5-7 inch clip range is generous enough to hold a Pro Max with most protective cases attached, unlike narrower clips in this comparison. This is again a physical clip, not a MagSafe magnetic mount.",
    specs: ["Explicitly lists iPhone 17/16/15 Pro Max fit", "3.5-7in clip range with TPE pads", "Not MagSafe", "360° rotation"],
    pros: ["Widest case-inclusive fit for Pro Max models", "Explicit current-generation iPhone compatibility listed", "Soft pads protect the case", "Stable stiff-core arm"],
    cons: ["Not MagSafe magnetic mounting", "Two-handed repositioning", "Slightly pricier than SAIJI"],
    bestFor: "Pro Max owners with a thick case who need the widest clip range.",
  },
  {
    id: "b0ckys81t4-ida",
    rank: 3,
    badge: "Best Adjustable Fit",
    name: "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=theofficejournal-20",
    description:
      "The one-touch spring clip on this arm matches its bite force to the phone size automatically, addressing the too-tight grip risk on a Pro Max with a bulky MagSafe-compatible case. Tension knobs let you fine-tune further for your specific iPhone and case combination.",
    specs: ["Self-matching bite-force clip", "Silicone-padded grip", "Adjustable tension per joint", "Not MagSafe"],
    pros: ["Adjustable grip suited to any iPhone size", "Case-friendly padding", "Reinforced steel build", "One-touch release"],
    cons: ["No MagSafe magnetic option", "Higher price than basic clips", "Bulkier design"],
    bestFor: "Buyers who want a fine-tunable physical grip for a specific iPhone and case.",
  },
  {
    id: "b0d5yj42cx-ida",
    rank: 4,
    badge: "Best for Video Calls",
    name: "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=theofficejournal-20",
    description:
      "This magic arm's phone clamp fits 5.5-8.5cm wide, enough for a cased iPhone Pro Max, and locks via friction for a position that won't drift during a video call, a real consideration for Face ID unlock and camera framing that benefits from a stable, repeatable angle.\n\nIt is not a MagSafe mount, and the phone clamp is a separate attachment rather than integrated into the arm.\n\nA genuine advantage here is that fits cased Pro Max models. The tradeoff is most expensive pick here.",
    specs: ["Phone clamp fits 5.5-8.5cm width", "Friction-locked, no drift", "600g load capacity", "Not MagSafe"],
    pros: ["Stable, repeatable position for Face ID and video calls", "Fits cased Pro Max models", "Multi-device compatible arm", "Rated load capacity"],
    cons: ["Most expensive pick here", "No MagSafe magnetic mounting", "Phone clip is a separate piece"],
    bestFor: "Buyers who want a stable, non-drifting position for video calls or Face ID framing.",
  },
  {
    id: "b0b9n41mcs-ida",
    rank: 5,
    badge: "Best Long-Reach Pick",
    name: "Lamicall Nylon Braided Gooseneck Phone Holder for Bed",
    price: "$24.99",
    rating: "4.3",
    reviews: "11,813",
    imageUrl: "https://m.media-amazon.com/images/I/31HD++Czq5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9N41MCS?tag=theofficejournal-20",
    description:
      "At 38 inches this is the longest arm in this comparison, useful for positioning an iPhone farther from a cramped desk clamp point. The clip itself is a standard spring design without MagSafe, sized for typical iPhone widths including cased models.",
    specs: ["38in nylon-braided gooseneck", "Standard spring clip, not MagSafe", "Abrasion-resistant sleeve", "Clamp base mount"],
    pros: ["Longest reach in this comparison", "Braided sleeve resists wear", "Fits cased iPhones", "Reputable brand"],
    cons: ["No MagSafe option", "Longer arm can sag more under sustained weight", "Standard clip, no tension adjustment"],
    bestFor: "Buyers who need to position an iPhone far from a limited desk clamp point.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "iPhone width compatibility", description: "We checked each clip's stated range against current iPhone base, Plus, and Pro Max dimensions, both bare and with a typical case." },
  { title: "MagSafe honesty", description: "We confirmed none of these picks are genuine MagSafe magnetic mounts, and disclosed this clearly rather than implying magnetic compatibility." },
  { title: "Charging cable routing", description: "We considered whether the mounted angle allows a Lightning or USB-C cable to route comfortably without straining the port." },
  { title: "Face ID and camera framing", description: "We evaluated whether the mounted angle and position stability support comfortable Face ID unlock and video call framing." },
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
          "MAGIPEA Gooseneck Phone Holder"
        ],
        [
          "Largest review base, strongest reliability signal",
          "SAIJI Gooseneck Bed Phone Holder"
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
          "Under $13",
          "SAIJI Gooseneck Bed Phone Holder"
        ],
        [
          "Up to $34",
          "SMALLRIG 22\" Magic Arm Clamp"
        ]
      ]
    }
  },
  {
    "subheading": "SAIJI Gooseneck Bed Phone Holder vs SMALLRIG 22\" Magic Arm Clamp",
    "cards": [
      {
        "label": "SAIJI Gooseneck Bed Phone Holder",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "SMALLRIG 22\" Magic Arm Clamp",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to SAIJI Gooseneck Bed Phone Holder unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "SAIJI Gooseneck Bed Phone Holder"
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
        "text": "SAIJI Gooseneck Bed Phone Holder is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where SMALLRIG 22\" Magic Arm Clamp's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where SAIJI Gooseneck Bed Phone Holder covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a iphone desk arm often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the iphone desk arm holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this iphone desk arm over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any iphone desk arm you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A iphone desk arm that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  { q: "Are any of these arms MagSafe compatible?", a: "No. All five picks use a physical spring or friction clip rather than magnetic MagSafe mounting. If you want magnetic attachment, look for a product explicitly labeled MagSafe." },
  { q: "Will these fit an iPhone Pro Max with a case?", a: "The MAGIPEA pick's 3.5-7 inch clip range is the most generous for a cased Pro Max in this comparison. Check your exact cased width against each clip's stated range before buying." },
  { q: "Can I charge my iPhone while it's mounted?", a: "Yes, all these arms leave the charging port accessible. Check that your mounted angle doesn't create an awkward cable bend at the Lightning or USB-C port." },
  { q: "Which pick is best for video calls?", a: "The SMALLRIG magic arm's friction-locked clamp holds the most stable, non-drifting position, useful for consistent Face ID unlock and camera framing during calls." },
  { q: "Do I need a different arm for an older Lightning iPhone versus a newer USB-C model?", a: "No, the clip mechanism itself is agnostic to charging port type. Just verify your cable routes comfortably at your chosen mount angle regardless of connector type." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-phone-arms", title: "Best Desk Phone Arms (2026)" },
  { href: "/guide/best-phone-holder-arms-for-desks", title: "Best Phone Holder Arms for Desks (2026)" },
  { href: "/guide/best-overhead-phone-arms-for-desks", title: "Best Overhead Phone Arms for Desks (2026)" },
];
