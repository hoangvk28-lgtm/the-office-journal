export const guideSlug = "best-phone-holder-arms-for-desks";
export const guideTitle = "5 Best Phone Holder Arms for Desks in 2026";
export const metaTitle = "Best Phone Holder Arms for Desks (2026)";
export const metaDescription =
  "5 desk phone holder arms researched for reach, clamp stability, and case compatibility, covering both simple goosenecks and locking magic arms.";
export const mainKeyword = "phone holder arms for desks";
export const introParagraphs = [
  "\"Phone holder arm\" is largely interchangeable with \"phone arm\" and \"phone mount\" in how people search, and the product set overlaps heavily with our other desk phone arm guides. We keep this guide focused on holder-style clips specifically, meaning the spring or clamp mechanism that grips the phone itself.",
  "Below are five verified picks ranging from simple spring-clip goosenecks to locking magic arms, evaluated on how securely the holder clip grips a phone with a case attached, not just a bare phone.",
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
    id: "b07p2vk93p-phad",
    rank: 1,
    badge: "Best Overall Pick",
    name: "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    price: "$12.99",
    rating: "4.3",
    reviews: "32,606",
    imageUrl: "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07P2VK93P?tag=theofficejournal-20",
    description:
      "The holder clip on this arm fits phones from 4.0 to 6.3 inches wide and is the most widely proven grip mechanism in this comparison by review volume. The 33.46 inch aluminum arm gives ample reach from a desk clamp to eye level.\n\nBuyers with a larger phone and a thick case should double check the clip width tolerance, since 6.3 inches is measured for a bare or lightly-cased device.\n\nLong reach. That's a real strength, but weigh it against the flip side: clip may be tight with bulky cases.",
    specs: ["Holder clip fits 4.0-6.3in phones", "33.46in aluminum arm", "Anti-slip base clamp", "12-month warranty"],
    pros: ["Most proven grip clip in this comparison", "Long reach", "Affordable", "Warranty included"],
    cons: ["Clip may be tight with bulky cases", "No tension adjustment", "Two-handed repositioning"],
    bestFor: "Buyers who want the most proven, affordable phone holder clip.",
  },
  {
    id: "b079qy6rfq-phad",
    rank: 2,
    badge: "Best Wide-Fit Clip",
    name: "MAGIPEA Gooseneck Phone Holder, Flexible Overhead Mount for Desk",
    price: "$14.99",
    rating: "4.4",
    reviews: "23,326",
    imageUrl: "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B079QY6RFQ?tag=theofficejournal-20",
    description:
      "This holder clip accepts devices from 3.5 to 7 inches wide with soft TPE inner pads, the widest fit range in this comparison, genuinely accommodating larger phones with thick cases attached. The semi-enclosed clamp design grips more securely than a simple spring clip.",
    specs: ["Holder clip fits 3.5-7in devices", "TPE soft inner pads", "Semi-enclosed safety clamp", "360° rotation clamp"],
    pros: ["Widest case-inclusive fit range", "Soft pads prevent scratches", "Secure semi-enclosed grip", "Good for larger phones"],
    cons: ["Stiff arm needs two hands to bend", "Similar price to SAIJI with less review history", "Bulkier clamp base"],
    bestFor: "Buyers with larger phones or thick cases who need the widest holder clip.",
  },
  {
    id: "b0ckys81t4-phad",
    rank: 3,
    badge: "Best Adjustable Grip",
    name: "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    price: "$19.68",
    rating: "4.4",
    reviews: "2,655",
    imageUrl: "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKYS81T4?tag=theofficejournal-20",
    description:
      "This holder uses a one-touch release spring clip with a built-in silicone pad and matches its bite force to the phone's size, addressing the too-tight or too-loose grip common on cheaper clips. Tension adjustment knobs let you fine-tune the hold for your specific phone and case.",
    specs: ["One-touch spring clip", "Silicone-padded grip", "Adjustable tension per joint", "Steel body"],
    pros: ["Adjustable, self-matching bite force", "Easy one-touch release", "Reinforced steel construction", "Case-friendly padding"],
    cons: ["Higher price than basic clip arms", "Bulkier overall design", "More setup to dial in tension"],
    bestFor: "Buyers who want a fine-tunable, secure grip for a specific phone and case combination.",
  },
  {
    id: "b0d5yj42cx-phad",
    rank: 4,
    badge: "Best Locking Clip",
    name: "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    price: "$33.90",
    rating: "4.4",
    reviews: "1,732",
    imageUrl: "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5YJ42CX?tag=theofficejournal-20",
    description:
      "The phone clamp accessory included with this magic arm fits devices 5.5-8.5cm wide and locks via friction rather than spring tension alone, holding steady even under repeated touch interaction. It is the most secure holder mechanism in this comparison, at a premium price.",
    specs: ["Phone clamp fits 5.5-8.5cm width", "Friction-locked holder", "600g load capacity", "1/4-20 mount interface"],
    pros: ["Most secure locking holder mechanism", "Rated load capacity disclosed", "Multi-device compatible clamp", "Scratch-protective padding"],
    cons: ["Most expensive pick here", "Phone clip is a separate accessory", "Overkill for casual use"],
    bestFor: "Buyers who want the most secure, non-slip holder grip regardless of price.",
  },
  {
    id: "b0b9n41mcs-phad",
    rank: 5,
    badge: "Best Nylon-Braided Arm",
    name: "Lamicall Nylon Braided Gooseneck Phone Holder for Bed",
    price: "$24.99",
    rating: "4.3",
    reviews: "11,813",
    imageUrl: "https://m.media-amazon.com/images/I/31HD++Czq5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9N41MCS?tag=theofficejournal-20",
    description:
      "This Lamicall arm uses a nylon-braided outer sleeve over its 38 inch gooseneck, adding abrasion resistance the plain-metal arms in this comparison lack, useful if the arm will rub against a desk edge or bed frame regularly. The holder clip itself is a standard spring clamp.\n\nAt 38 inches it is also the longest reach in this comparison, suited to buyers who need to route the arm around obstacles to reach their preferred phone position.\n\nWorth calling out specifically: braided sleeve resists abrasion. The catch is standard clip, no tension adjustment.",
    specs: ["38in nylon-braided gooseneck", "Standard spring holder clip", "Longest reach in this comparison", "Clamp base mount"],
    pros: ["Longest reach for routing around obstacles", "Braided sleeve resists abrasion", "Reputable brand with strong review count", "Flexible positioning"],
    cons: ["Standard clip, no tension adjustment", "Longer arm can sag more under weight", "Mid-range price for a basic clip"],
    bestFor: "Buyers who need the longest reach to route the arm around desk obstacles.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Holder clip width range", description: "We compared each clip's stated width tolerance against a phone plus a typical protective case, not just the bare device." },
  { title: "Grip security", description: "We evaluated spring-clip versus friction-locked holder mechanisms for how securely they grip during touch interaction." },
  { title: "Padding and scratch protection", description: "We checked for silicone or TPE padding inside the holder clip to prevent scratching the phone or case." },
  { title: "Overlap with related phone arm guides", description: "We confirmed which picks are genuinely distinct holder-clip designs versus overlapping arm-length or clamp-base comparisons covered elsewhere." },
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
    "explanation": "Listings for a phone holder arm often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the phone holder arm holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this phone holder arm over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any phone holder arm you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A phone holder arm that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  { q: "How is this different from your general desk phone arms guide?", a: "This guide focuses specifically on the holder clip mechanism and case-compatible width, while the general guide compares full arm designs. There is meaningful product overlap between the two." },
  { q: "Will the clip scratch my phone case?", a: "The MAGIPEA and LISEN picks use soft TPE or silicone padding inside the clip specifically to prevent scratching. Check for padding before buying if your case has a delicate finish." },
  { q: "What's the widest phone the clip on these arms can hold?", a: "The MAGIPEA pick's clip fits up to 7 inches wide, the widest range in this comparison, suited to larger phones with thick cases." },
  { q: "Do I need a magic arm instead of a simple spring clip?", a: "Only if you need the most secure grip for frequent touch interaction or heavier accessory swapping. For casual phone viewing, a spring clip holder is sufficient." },
  { q: "Which arm has the longest reach?", a: "The Lamicall nylon-braided gooseneck reaches 38 inches, the longest in this comparison, useful for routing around desk obstacles." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desk-phone-arms", title: "Best Desk Phone Arms (2026)" },
  { href: "/guide/best-desk-mounted-phone-arms", title: "Best Desk-Mounted Phone Arms (2026)" },
  { href: "/guide/best-iphone-desk-arms", title: "Best iPhone Desk Arms (2026)" },
];
