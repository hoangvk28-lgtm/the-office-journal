const BASE = "/images/guides/best-standing-desks-for-short-people";

export const guideSlug = "best-standing-desks-for-short-people";
export const guideTitle = "8 Best Standing Desks for Short People in 2026";
export const metaTitle = "Best Standing Desks for Short People 2026, Low Height Picks";
export const metaDescription =
  "Best standing desks for short people in 2026, ranked by minimum sitting height and low-range fit, with a formula to calculate the height you actually need.";
export const lastUpdated = "2026-07-25";
export const readTime = "11 min";
export const heroImage = `${BASE}/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const products: GuideProduct[] = [
  {
    id: "ergear-low-height-kids",
    rank: 1,
    badge: "Lowest Minimum Height",
    name: "ErGear 35 x 20 Inch Low Height Electric Standing Desk",
    price: "$109.99",
    rating: "4.6 stars from 19 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/ergear-low-height-kids.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0GDDH14P5?tag=theofficejournal-20",
    description: "ErGear designed this desk with a lower starting height than standard adult standing desks, which makes it the best fit in this guide for shorter adults or anyone under about 5'2\" who finds typical desks bottom out too high even at their lowest setting. The 35x20 inch top is compact, suited to a laptop or a single small monitor.\n\nThe review count here is still small since this is a newer listing, so weigh the low-height advantage against a shorter track record than the more established picks below. It's electric with height memory, not a manual crank.\n\nElectric height adjustment. On the other hand, small review count so far. Neither should be a surprise once you know to look for it.",
    specs: ["35x20 in top", "Electric", "Low starting height", "Natural finish"],
    pros: ["Lowest minimum height in this guide", "Electric height adjustment", "Compact top for tight rooms"],
    cons: ["Small review count so far", "Compact top limits dual-monitor setups", "Lower weight capacity than full-size desks"],
    bestFor: "Shorter adults who need the lowest achievable sitting height a standard desk can offer.",
  },
  {
    id: "huanuo-32-small-electric",
    rank: 2,
    badge: "Best Overall",
    name: "HUANUO 32-Inch Small Electric Standing Desk",
    price: "$75.99",
    rating: "4.6 stars from 2,226 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/huanuo-32-small-electric.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0F9X3FDYY?tag=theofficejournal-20",
    description: "HUANUO's 32-inch desk combines a compact top with 4 memory height presets, which matters if you share the desk with a taller household member since you can save your ideal low setting and switch back to it instantly. The price is low relative to its feature set.\n\nAt 32 inches wide it fits tight bedrooms or dorm corners without dominating the room, though it limits you to a laptop and maybe one small monitor. Strong review volume backs up its reliability at this price.\n\nStrong review count. That's a real strength, but weigh it against the flip side: narrow top limits multi-monitor setups.",
    specs: ["32 in wide", "Electric", "4 memory presets", "Compact footprint"],
    pros: ["4 memory presets for shared use", "Strong review count", "Compact 32-inch top", "Budget-friendly price"],
    cons: ["Narrow top limits multi-monitor setups", "Not the absolute lowest minimum height", "Single motor on a small frame"],
    bestFor: "Short users who want a proven, budget-friendly compact desk with saved height presets.",
  },
  {
    id: "topsky-dual-motor-frame",
    rank: 3,
    badge: "Best Frame-Only Flexibility",
    name: "TOPSKY Dual Motor Electric Standing Desk Frame",
    price: "$150.99",
    rating: "4.6 stars from 4,345 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/topsky-dual-motor-frame.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B08C2LC3H2?tag=theofficejournal-20",
    description: "This frame-only option lets you pair it with whatever desktop size and thickness suits your room, up to 70.8x31.5 inches, and dual motors keep the lift even at low heights where single-motor desks can feel less stable. Since you supply the desktop, you can choose a thinner top to shave a bit more off the effective minimum sitting height.\n\nBuying frame-only means an extra purchase and assembly step for the desktop, and you'll want to measure the frame's minimum height with your chosen desktop thickness added on top before assuming it reaches low enough for you.\n\nWorth calling out specifically: dual motor stability. The catch is desktop sold separately.",
    specs: ["Frame only", "Dual motor", "Fits tops up to 70.8x31.5 in", "225 lb capacity"],
    pros: ["Pair with any desktop for a custom fit", "Dual motor stability", "225 lb capacity", "High review count"],
    cons: ["Desktop sold separately", "Final sitting height depends on desktop thickness chosen", "Higher total cost once desktop is added"],
    bestFor: "Buyers who want to control desktop thickness to fine-tune their minimum sitting height.",
  },
  {
    id: "flexispot-e6-standard",
    rank: 4,
    badge: "Best with Memory Presets",
    name: "FLEXISPOT E6 3-Stage Dual Motor Standing Desk 55x28",
    price: "$284.99",
    rating: "4.4 stars from 311 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/flexispot-e6-standard.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BVQMQMY2?tag=theofficejournal-20",
    description: "FLEXISPOT's E6 uses a 3-stage dual-motor frame, which typically reaches a lower minimum height than 2-stage frames because the extra telescoping stage lets the columns nest more compactly. This matters directly for short users, since a lower minimum height means less risk of the desk bottoming out above a comfortable sitting position.\n\nAt 55x28 inches it fits a dual-monitor setup comfortably, larger than the compact picks above. It holds up to 220 lbs and includes memory presets, useful if the desk is shared.\n\nFull-size 55x28 in top. Set against that, higher price than compact picks. Both matter when comparing it to the other picks here.",
    specs: ["55x28 in top", "3-stage dual motor", "220 lb capacity", "Memory presets", "One-piece desktop"],
    pros: ["3-stage frame reaches lower minimum height", "Full-size 55x28 in top", "220 lb capacity", "Memory presets for shared use"],
    cons: ["Higher price than compact picks", "Ships in 2 boxes, longer assembly", "Larger footprint than compact desks"],
    bestFor: "Short users who need a full-size desktop without sacrificing a low minimum height.",
  },
  {
    id: "flexispot-e6-bamboo",
    rank: 5,
    badge: "Best Bamboo Desktop",
    name: "FlexiSpot E6 Bamboo 3-Stage Dual Motor Standing Desk 55x28",
    price: "$329.99",
    rating: "4.4 stars from 763 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/flexispot-e6-bamboo.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B09DYF1SRQ?tag=theofficejournal-20",
    description: "This is the bamboo-top version of the E6 above, with the same 3-stage dual-motor frame that reaches a lower minimum height than standard 2-stage desks. Solid bamboo adds a warmer look and slightly more rigidity than the laminate desktop on the standard E6.\n\nThe bamboo desktop is a bit thicker than laminate, which can add a small amount to the effective sitting height compared to a thin desktop on a frame-only build. It carries the same 220 lb capacity and memory presets as the standard E6.\n\nA genuine advantage here is that solid bamboo desktop. The tradeoff is higher price than the laminate E6.",
    specs: ["55x28 in bamboo top", "3-stage dual motor", "220 lb capacity", "Memory presets"],
    pros: ["3-stage frame for a lower minimum height", "Solid bamboo desktop", "220 lb capacity", "Memory presets"],
    cons: ["Higher price than the laminate E6", "Bamboo thickness adds slightly to sitting height", "Ships in 2 boxes"],
    bestFor: "Short users who want the E6's low-height frame with a premium bamboo top.",
  },
  {
    id: "qzmdsm-rolling-desk",
    rank: 6,
    badge: "Best Budget Rolling Desk",
    name: "QZMDSM Portable Rolling Desk on Wheels, 32 Inch",
    price: "$49.99",
    rating: "4.4 stars from 1,899 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/qzmdsm-rolling-desk.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0BVR3RKLZ?tag=theofficejournal-20",
    description: "This manually adjustable rolling desk is the lowest-cost option here and rolls on wheels for easy repositioning, useful in a small shared space. Manual height adjustment means no motor to reach a minimum height, and the range on compact manual desks like this often sits lower than electric competitors.\n\nBecause adjustment is manual rather than push-button, switching height between users takes more effort than an electric desk with memory presets. It includes storage shelves, adding function beyond just a work surface.\n\nRolls for easy repositioning. On the other hand, manual adjustment, no memory presets. Neither should be a surprise once you know to look for it.",
    specs: ["32 in top", "Manual height adjustment", "Rolling wheels", "Storage shelves"],
    pros: ["Lowest price in this guide", "Rolls for easy repositioning", "Includes storage shelves", "Compact 32-inch top"],
    cons: ["Manual adjustment, no memory presets", "Lower weight capacity than electric desks", "Smaller work surface"],
    bestFor: "Tight budgets that want a low, rolling desk without paying for an electric motor.",
  },
  {
    id: "aconcept-desk-converter",
    rank: 7,
    badge: "Best Converter for a Low Existing Desk",
    name: "Aconcept Extra-Slim 24 x 14 Inch Standing Desk Converter",
    price: "$49.99",
    rating: "4.0 stars from 61 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/aconcept-desk-converter.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B0D1C9LBN5?tag=theofficejournal-20",
    description: "Rather than replacing your desk, this converter sits on top of an existing low desk and lifts a monitor or laptop for standing use, which sidesteps the minimum-height problem entirely since your existing desk sets the base height. It's manually adjustable and extra-slim to fit a compact desk surface.\n\nBecause it sits on top of your current desk, the combined resting height when lowered depends on your desk's own height, so this only works well if your existing desk is already at a comfortable seated height for you.\n\nSidesteps the minimum-height frame problem. That's a real strength, but weigh it against the flip side: requires your base desk to already be a good seated height.",
    specs: ["24x14 in platform", "Manual lift", "Extra-slim design", "Monitor/laptop compatible"],
    pros: ["Works with your existing low desk", "Sidesteps the minimum-height frame problem", "Compact, slim footprint", "Budget price"],
    cons: ["Requires your base desk to already be a good seated height", "Smaller platform than a full desk", "Manual adjustment only"],
    bestFor: "Short users who already have a good low desk and just need standing capability added.",
  },
  {
    id: "techni-mobili-laptop-cart",
    rank: 8,
    badge: "Best Rolling Laptop Cart",
    name: "Techni Mobili Sit-to-Stand Rolling Laptop Cart",
    price: "$28.80",
    rating: "4.5 stars from 7,239 Amazon ratings",
    reviews: "Amazon verified ratings",
    imageUrl: `${BASE}/techni-mobili-laptop-cart.jpg`,
    amazonUrl: "https://www.amazon.com/dp/B003M96GY0?tag=theofficejournal-20",
    description: "This rolling cart is the lowest-priced pick here and a strong option for laptop-only setups, with adjustable height and casters for moving it between rooms. Its compact 22x16 inch top isn't meant for a full multi-monitor setup, but for a short user who just needs a laptop station that adjusts low enough, it's an easy budget entry point.\n\nWith the highest review count in this guide, it's a well-proven choice, though the narrow top and lack of memory presets mean it's best suited to single-device use rather than a full workstation.\n\nWorth calling out specifically: highest review count here. The catch is small top fits laptop only.",
    specs: ["22x16 in top", "Manual height adjustment", "Rolling casters", "Laptop-focused"],
    pros: ["Lowest price in this guide", "Highest review count here", "Rolls between rooms easily", "Compact for tight spaces"],
    cons: ["Small top fits laptop only", "Manual adjustment, no presets", "Not suited to dual monitors"],
    bestFor: "Short users who need a budget laptop-only standing station that rolls between rooms.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a 8 best standing desk often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the 8 best standing desk holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this 8 best standing desk over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any 8 best standing desk you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A 8 best standing desk that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Minimum sitting height", description: "We prioritized desks and converters with the lowest stated minimum height, since that's the binding constraint for shorter users, not maximum standing height." },
  { title: "Adjustment type and presets", description: "Electric desks were assessed on memory preset count for shared-desk convenience; manual desks were assessed on adjustment ease." },
  { title: "Desktop size vs. footprint", description: "We weighed desktop width against typical small-room space, since compact desks suited to short users often trade surface area for a lower frame." },
  { title: "Stability at low height", description: "Dual-motor and 3-stage frames were favored for steadier lift at low settings versus single-motor 2-stage frames." },
  { title: "Value and buyer feedback", description: "Price was weighed against verified Amazon rating volume and consistency across each listing." },
];

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
          "ErGear 35 x 20 Inch Low Height Electric Standing Desk"
        ],
        [
          "Largest review base, strongest reliability signal",
          "ErGear 35 x 20 Inch Low Height Electric Standing Desk"
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
          "Under $29",
          "Techni Mobili Sit"
        ],
        [
          "Up to $330",
          "FlexiSpot E6 Bamboo 3"
        ]
      ]
    }
  },
  {
    "subheading": "Techni Mobili Sit vs FlexiSpot E6 Bamboo 3",
    "cards": [
      {
        "label": "Techni Mobili Sit",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "FlexiSpot E6 Bamboo 3",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Techni Mobili Sit unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "ErGear 35 x 20 Inch Low Height Electric Standing Desk"
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
        "text": "ErGear 35 x 20 Inch Low Height Electric Standing Desk is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where FlexiSpot E6 Bamboo 3's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Techni Mobili Sit covers the same job at a lower price."
      }
    ]
  }
];

export const faq: { q: string; a: string }[] = [
  { q: "How do I calculate the right standing desk height for a short person?", a: "A rough formula is to divide your height in inches by 5.5 and add 1, which estimates the desk height that keeps your elbows near 90 degrees while typing standing. For example, a 5'2\" (62 in) user gets roughly 12.3 as the result of that formula, used as a starting point for the desk's typing surface height. Fine-tune from there based on how it feels." },
  { q: "Do all standing desks go low enough for shorter users?", a: "No. Many standard standing desks have a minimum height around 28 to 29 inches, which can still feel too high for users under about 5'2\". Desks with a 3-stage frame, or dedicated low-height models, reach lower minimum settings than typical 2-stage electric desks." },
  { q: "Why does my keyboard tray feel too low when my desk is set for my height?", a: "At a desk set near its lowest setting, around 22 inches, a keyboard tray mounted underneath can drop to 18 to 20 inches, below the roughly 23-inch height that's comfortable for typing. If you're using a desk set unusually low, consider skipping the tray and typing directly on the desktop instead." },
  { q: "Do I need a monitor arm if I'm short and my desk is set low?", a: "Likely yes. When the desk surface sits low to match a shorter user's ergonomic typing height, a monitor resting directly on the desktop can end up below eye level, forcing the neck to bend down. A monitor arm raises the screen independently of the desk height and avoids that strain." },
  { q: "Can I just use a desk converter instead of buying a new standing desk?", a: "Yes, if your existing desk is already at a comfortable seated height for you. A converter sits on top of your current desk and lifts a monitor or laptop for standing use, which avoids the problem of a full standing-desk frame not reaching low enough, since your existing desk sets the base height." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-standing-desks-with-storage", title: "Best Standing Desks with Storage (2026)" },
  { href: "/guide/best-4-leg-standing-desks", title: "Best 4-Leg Standing Desks (2026)" },
  { href: "/guide/best-small-standing-desk", title: "Best Small Standing Desks (2026)" },
  { href: "/guide/best-standing-desk-for-tall-person", title: "Best Standing Desks for Tall People (2026)" },
];
