export const guideSlug = "best-chair-mats";
export const guideTitle = "8 Best Chair Mats in 2026";
export const metaTitle = "Best Chair Mats in 2026 (Carpet, Hard Floor & Glass)";
export const metaDescription =
  "8 best chair mats in 2026 for carpet, hard floor, and dual-use setups, from budget vinyl to tempered glass. Compare pile rating, capacity, and price.";
export const mainKeyword = "chair mats";
export const introParagraphs = [
  "The right chair mat depends almost entirely on 2 things most buyers skip past: what floor is underneath it and, if it's carpet, how thick the pile actually is. A mat built for hard floor has a smooth flat underside meant to protect the floor finish, while a mat built for carpet needs cleats or spikes to grip the fibers and a pile-height rating to match, and mixing the two up is the most common reason a chair mat underperforms.",
  "Below are 8 chair mats we evaluated across carpet, hard floor, and dual-use categories, spanning PVC, polycarbonate, and tempered glass, from a $32 clear hard-floor mat to a 46x55 glass mat rated for over 1,000 lbs.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg";

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

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "hon-ofm-essentials-chair-mat-low-pile",
    rank: 1,
    badge: "Most-Reviewed Overall",
    name: "HON/OFM Essentials Chair Mat for Low Pile Carpet",
    price: "$44.99",
    rating: "4.0",
    reviews: "54,421",
    imageUrl: "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    description:
      "This PU vinyl mat is 2.2mm thick in a 36x48 footprint with an extended lip and ramped edges so the carpet-to-mat transition doesn't create a lip that catches your casters. Molded anchor bars and cleats on the underside are built specifically to grip low pile carpet up to 1/4 inch, and the top has an anti-skid finish.\n\nIts 5-year warranty is the longest of any pick in this guide. It's a carpet-only mat, so if your floor is hardwood, tile, or laminate, look at one of the hard-floor or dual-use picks instead.\n\nRamped lip smooths the transition. On the other hand, carpet only, not usable on hard floor. Neither should be a surprise once you know to look for it.",
    specs: [
      "36\"W x 48\"D, PU vinyl, 2.2mm thick",
      "Rated for low pile carpet up to 1/4\"",
      "Extended lip with ramped edges",
      "Molded cleats + anchor bars underside",
      "5-year warranty",
    ],
    pros: [
      "Longest warranty in this guide at 5 years",
      "Ramped lip smooths the transition",
      "Anti-skid top surface",
      "Strong grip on low pile carpet",
    ],
    cons: [
      "Carpet only, not usable on hard floor",
      "Only rated for low pile carpet",
      "Ships rolled and needs settling time",
    ],
    bestFor: "Low pile carpet setups where warranty length matters most",
  },
  {
    id: "muarts-crystal-clear-heavy-duty",
    rank: 2,
    badge: "Highest Capacity Dual-Use",
    name: "MuArts Crystal Clear Heavy Duty Chair Mat",
    price: "$59.99",
    rating: "4.4",
    reviews: "19,765",
    imageUrl: "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    description:
      "MuArts uses a special rigid material 5mm thick in a 54x32 footprint that stays flat rather than curling, and it's rated for 1,400 lbs, the highest capacity in this guide. Because it's rigid instead of flexible vinyl, it performs the same whether it sits on carpet or hard floor.\n\nThat dual-use flexibility makes it a good pick if you move offices or rooms and aren't sure what floor the mat will end up on next. It carries a 12-month warranty, shorter than some of the vinyl carpet-only picks.\n\nWorks on both carpet and hard floor. That's a real strength, but weigh it against the flip side: shorter warranty than the top carpet pick.",
    specs: [
      "54\"W x 32\"D, special rigid material, 5mm thick",
      "Rated 1,400 lbs, highest in this guide",
      "Rigid, flat, dual-use on carpet or hard floor",
      "12-month warranty",
    ],
    pros: [
      "Highest weight capacity in this guide",
      "Works on both carpet and hard floor",
      "Stays flat, doesn't curl or sink",
      "Crystal clear finish blends into most rooms",
    ],
    cons: [
      "Shorter warranty than the top carpet pick",
      "Heavier to move or store",
      "Pricier than basic PVC mats",
    ],
    bestFor: "Buyers who need one mat that works on carpet or hard floor with high capacity",
  },
  {
    id: "kuyal-clear-chair-mat-hard-floors",
    rank: 3,
    badge: "Cheapest Clear Hard-Floor Pick",
    name: "Kuyal Clear Chair Mat for Hard Floors",
    price: "$32.95",
    rating: "4.2",
    reviews: "10,646",
    imageUrl: "https://m.media-amazon.com/images/I/51-SqFH4ZoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0893BD69B?tag=theofficejournal-20",
    description:
      "Kuyal's mat is 2mm PVC in a 36x48 footprint built specifically for hard floors, with a smooth top and an anti-slide coating on the underside rather than cleats, since hard floor doesn't need fiber grip the way carpet does. A dull polish finish keeps small scratches less visible over time compared to a glossy surface. It's odorless and BPA-free with no lead or cadmium, and at a budget-friendly price it's the cheapest clear hard-floor pick in this guide. Don't use it on carpet, its flat anti-slide coating isn't designed to anchor into carpet fibers. Worth calling out specifically: dull polish finish hides minor scratches. The catch is hard floor only, will not grip carpet.",
    specs: [
      "36\"W x 48\"D, PVC, 2mm thick",
      "Anti-slide coating underside (hard floor only)",
      "Dull polish top finish",
      "Odorless, BPA-free, no lead or cadmium",
    ],
    pros: [
      "Cheapest clear hard-floor pick in this guide",
      "Dull polish finish hides minor scratches",
      "Odorless, BPA-free construction",
      "Strong review base at over 10,000 ratings",
    ],
    cons: [
      "Hard floor only, will not grip carpet",
      "Thinner 2mm material than the rigid picks",
      "No lip for tucking under a desk",
    ],
    bestFor: "Budget hard-floor setups that just need basic floor protection",
  },
  {
    id: "floortex-ultimat-polycarbonate-carpet",
    rank: 4,
    badge: "Largest Polycarbonate Carpet Mat + Fire-Resistant",
    name: "Floortex Ultimat Polycarbonate Chair Mat for Carpet",
    price: "$101.99",
    rating: "4.0",
    reviews: "1,200",
    imageUrl: "https://m.media-amazon.com/images/I/31d9jTEL4sL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00272N7RM?tag=theofficejournal-20",
    description:
      "Floortex builds this polycarbonate mat 0.09 inches thick in a 48x60 footprint, the largest polycarbonate carpet mat in this guide, with a gripper back rated for carpet up to 1/2 inch, covering low and medium pile. Polycarbonate resists impact and wear better than standard PVC over years of daily rolling.\n\nIt's fire-resistant and GREENGUARD certified, both relevant if the mat sits in a shared or regulated workspace, and it carries a 5-year warranty, tied for the longest in this guide.\n\nRated for a wider pile range than most PVC picks. Set against that, most expensive polycarbonate pick in this guide. Both matter when comparing it to the other picks here.",
    specs: [
      "48\"W x 60\"D, polycarbonate, 0.09\" thick",
      "Gripper back",
      "Rated for carpet up to 1/2\" (low-medium pile)",
      "Fire-resistant, GREENGUARD certified",
      "5-year warranty",
    ],
    pros: [
      "Largest polycarbonate carpet mat in this guide",
      "Rated for a wider pile range than most PVC picks",
      "Fire-resistant and GREENGUARD certified",
      "5-year warranty",
    ],
    cons: [
      "Most expensive polycarbonate pick in this guide",
      "Not rated for high pile carpet",
      "Large footprint needs a spacious desk area",
    ],
    bestFor: "Larger desk setups on low-to-medium pile carpet needing a fire-resistant mat",
  },
  {
    id: "marvelux-heavy-duty-high-pile",
    rank: 5,
    badge: "Only High-Pile-Rated Polycarbonate",
    name: "Marvelux Heavy Duty Polycarbonate Mat for High Pile Carpets",
    price: "$121.99",
    rating: "4.0",
    reviews: "201",
    imageUrl: "https://m.media-amazon.com/images/I/51UDuDStG2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D96LWLZ7?tag=theofficejournal-20",
    description:
      "Marvelux's polycarbonate mat is 0.11 inches thick in a 48x60 footprint and rated for carpet up to 3/4 inch, the only pick in this guide's polycarbonate lineup rated for medium and high pile. Its rigidity means it doesn't sink into thick carpet the way a thinner mat would, and a studded underside keeps it anchored. It's made using 50% renewable energy and is 100% recyclable, a detail worth noting if sustainability factors into your purchase. It's the priciest pick in this guide, but it's also solving a problem most competitors don't address at all. A genuine advantage here is that rigid enough to avoid sinking into thick carpet. The tradeoff is most expensive pick in this guide.",
    specs: [
      "48\"W x 60\"D, polycarbonate, 0.11\" thick",
      "Rated for carpet up to 3/4\" (medium-high pile)",
      "Studded underside, rigid construction",
      "Lightly textured top",
      "50% renewable energy manufacturing, 100% recyclable",
    ],
    pros: [
      "Only polycarbonate pick in this guide rated for high pile",
      "Rigid enough to avoid sinking into thick carpet",
      "Made with renewable energy, fully recyclable",
      "Large 48x60 footprint",
    ],
    cons: [
      "Most expensive pick in this guide",
      "Smaller review sample than most other picks",
      "Large footprint may be more than smaller desks need",
    ],
    bestFor: "Medium to high pile carpet where no other polycarbonate mat is rated to work",
  },
  {
    id: "glsland-tempered-glass-chair-mat",
    rank: 6,
    badge: "Cheapest Tempered Glass",
    name: "GLSLAND Tempered Glass Chair Mat",
    price: "$60.99",
    rating: "4.6",
    reviews: "2,486",
    imageUrl: "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    description:
      "GLSLAND's tempered glass mat is 0.2 inches thick in a 36x46 footprint, rated for 1,200 lbs, with 4 anti-slip pads underneath rather than cleats or spikes. Glass is naturally the most durable material category of the 3 in this guide, PVC, polycarbonate, and glass, and it won't scratch, dent, or yellow the way plastic mats eventually do. It's dual-use on carpet or hard floor and BPA-free, phthalate-free, and odorless. It's the cheapest tempered glass pick in this guide, a reasonable entry point if you want glass's durability without the largest glass mat's price. Most durable material category, won't scratch or yellow. On the other hand, heaviest material to move or reposition. Neither should be a surprise once you know to look for it.",
    specs: [
      "36\"W x 46\"D, tempered glass, 0.2\" thick",
      "Rated 1,200 lbs",
      "4 anti-slip pads",
      "Polished rounded corners",
      "Dual-use on carpet or hard floor",
    ],
    pros: [
      "Cheapest tempered glass pick in this guide",
      "Most durable material category, won't scratch or yellow",
      "Works on carpet or hard floor",
      "Strong 4.6-star rating",
    ],
    cons: [
      "Heaviest material to move or reposition",
      "Smaller footprint than the largest glass pick",
      "Anti-slip pads, not full cleats, so grip is lighter than a cleated mat",
    ],
    bestFor: "Buyers who want glass's durability at the lowest glass price point",
  },
  {
    id: "koonmi-tempered-glass-chair-mat",
    rank: 7,
    badge: "Largest Tempered Glass",
    name: "Koonmi Tempered Glass Chair Mat",
    price: "$135.89",
    rating: "4.7",
    reviews: "1,085",
    imageUrl: "https://m.media-amazon.com/images/I/41UO1C7z6QL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CXSFBQLH?tag=theofficejournal-20",
    description:
      "Koonmi's tempered glass mat is 0.2 inches thick in a 46x55 footprint, the largest glass mat in this guide, and rated for over 1,000 lbs. A detachable anti-slip pad underneath lets you position grip exactly where the chair rolls most.\n\nLike the other glass pick in this guide, it's dual-use on carpet or hard floor and has polished rounded corners. Its larger footprint suits bigger desks or setups where the chair covers more ground, at a price that reflects the extra glass and size.\n\nHighest-rated pick in this guide at 4.7 stars. That's a real strength, but weigh it against the flip side: most expensive glass pick in this guide.",
    specs: [
      "46\"W x 55\"D, tempered glass, 0.2\" thick",
      "Rated over 1,000 lbs",
      "Detachable anti-slip pad",
      "Polished rounded corners",
      "Dual-use on carpet or hard floor",
    ],
    pros: [
      "Largest tempered glass mat in this guide",
      "Highest-rated pick in this guide at 4.7 stars",
      "Detachable, repositionable anti-slip pad",
      "Dual-use on carpet or hard floor",
    ],
    cons: [
      "Most expensive glass pick in this guide",
      "Heavy and harder to reposition given its size",
      "Fewer total reviews than the GLSLAND glass pick",
    ],
    bestFor: "Larger desk setups that want glass durability in a bigger footprint",
  },
  {
    id: "lorell-tempered-glass-chairmat-multi-surface",
    rank: 8,
    badge: "Most-Reviewed + Highest-Rated Glass",
    name: "Lorell Tempered Glass Chairmat Multi-Surface",
    price: "Check current price",
    rating: "4.8",
    reviews: "10,717",
    imageUrl: "https://m.media-amazon.com/images/I/21V7PYvl22L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07K95V7X2?tag=theofficejournal-20",
    description:
      "Lorell's tempered glass mat is 0.25 inches thick, the thickest glass in this guide, in a 46x36 footprint rated for 1,000 lbs and for any floor type, including carpet, hard floor, or even marble. Its scratch-resistant surface and 5-year warranty make it the strongest all-around glass pick in this list.\n\nAvailability on this listing can fluctuate, so confirm current stock and pricing before buying rather than assuming a fixed price. It's the most-reviewed and highest-rated pick in this entire guide, with nearly 10,700 ratings at 4.8 stars.\n\nWorth calling out specifically: thickest glass in this guide. The catch is listing availability can be limited, check price before buying.",
    specs: [
      "46\"W x 36\"D, tempered glass, 0.25\" thick (thickest in this guide)",
      "Rated 1,000 lbs",
      "Rated for any floor type: carpet, hard floor, marble",
      "5-year warranty, scratch-resistant",
    ],
    pros: [
      "Most-reviewed and highest-rated pick in this guide",
      "Thickest glass in this guide",
      "Rated for essentially any floor type",
      "5-year warranty",
    ],
    cons: [
      "Listing availability can be limited, check price before buying",
      "Smaller footprint than the largest glass pick",
      "Glass weight makes repositioning harder than plastic mats",
    ],
    bestFor: "Buyers who want the single most proven, highest-rated glass mat in this guide",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Floor-type suitability",
    description: "Separated picks by whether they're built for carpet, hard floor, or genuinely dual-use, since a mat designed for one floor type routinely underperforms or damages the other.",
  },
  {
    title: "Pile height rating (carpet picks)",
    description: "Compared each carpet-rated mat's stated pile-height ceiling, low, medium, or high, against its material and thickness to flag mats that overstate what pile they actually handle well.",
  },
  {
    title: "Material category trade-offs",
    description: "Weighed PVC, polycarbonate, and tempered glass against each other on durability, weight capacity, and price, since these 3 categories perform very differently over years of use.",
  },
  {
    title: "Weight capacity",
    description: "Compared stated capacity limits across all 8 picks, from 1,000 lbs up to the 1,400 lb ceiling on the highest-rated mat in this guide.",
  },
  {
    title: "Value for price",
    description: "Weighed thickness, floor compatibility, and warranty against price, since a hard-floor mat and a glass mat serve very different buyer situations.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a chair mat often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the chair mat holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this chair mat over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any chair mat you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A chair mat that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

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
          "Lorell Tempered Glass Chairmat Multi"
        ],
        [
          "Largest review base, strongest reliability signal",
          "HON/OFM Essentials Chair Mat for Low Pile Carpet"
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
          "Under $33",
          "Kuyal Clear Chair Mat for Hard Floors"
        ],
        [
          "Up to $NaN",
          "Lorell Tempered Glass Chairmat Multi"
        ]
      ]
    }
  },
  {
    "subheading": "Kuyal Clear Chair Mat for Hard Floors vs Lorell Tempered Glass Chairmat Multi",
    "cards": [
      {
        "label": "Kuyal Clear Chair Mat for Hard Floors",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Lorell Tempered Glass Chairmat Multi",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Kuyal Clear Chair Mat for Hard Floors unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "HON/OFM Essentials Chair Mat for Low Pile Carpet"
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
        "text": "HON/OFM Essentials Chair Mat for Low Pile Carpet is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Lorell Tempered Glass Chairmat Multi's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Kuyal Clear Chair Mat for Hard Floors covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Can I use a carpet chair mat on a hard floor, or vice versa?",
    a: "It's not recommended either way. A hard-floor mat's smooth, flat underside has nothing to grip carpet fibers with and will slide around, while a carpet mat's cleats or spikes can scratch a hardwood or laminate finish. Dual-use picks like the MuArts, GLSLAND, or Koonmi mats in this guide are built to genuinely work on either.",
  },
  {
    q: "Do I really need a chair mat if my hardwood floor is in good shape?",
    a: "Not necessarily. If your hard floor is well-maintained and your chair has quality, non-marking casters, a mat may not be needed purely for floor protection, though it can still make the chair roll more smoothly and reduce noise.",
  },
  {
    q: "How do I know my carpet's pile height before buying a mat?",
    a: "Low pile is under 1/4 inch, medium pile runs 1/4 to 1/2 inch, high pile is 1/2 to 3/4 inch or more, and extra-high pile with padding runs over 1 inch. Most standard office carpet mats, including several picks in this guide, are rated for low pile only, so measure or check your carpet spec sheet before assuming any mat will fit.",
  },
  {
    q: "Why is tempered glass so much more expensive than PVC or polycarbonate mats?",
    a: "Glass is the most durable of the 3 main material categories and the only one immune to scratching, denting, or yellowing over years of use, and it's dual-use on carpet or hard floor. That durability and versatility is reflected in the higher price of picks like the Koonmi and Lorell mats in this guide.",
  },
  {
    q: "Why won't my new chair mat lie flat?",
    a: "Mats shipped rolled up need roughly 24 hours lying flat to fully relax before they settle into shape. This is the most common cause of a 'defective' flatness complaint and usually resolves on its own within a day.",
  },
  {
    q: "Which mat in this guide is rated for the thickest carpet?",
    a: "The Marvelux Heavy Duty Polycarbonate Mat is the only pick in this guide's polycarbonate lineup rated for carpet up to 3/4 inch, covering medium and high pile. Most other carpet-rated picks here top out at low pile, under 1/4 inch.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-chair-mat-for-carpet", title: "Best Chair Mat for Carpet (2026)" },
  { href: "/guide/best-chair-mats-for-carpet", title: "Best Chair Mats for Carpet, Commercial-Grade Picks (2026)" },
  { href: "/guide/best-office-chair-under-100", title: "Best Office Chairs Under $100 (2026)" },
];
