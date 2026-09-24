export const guideSlug = "best-chair-mats-for-carpet";
export const guideTitle = "8 Best Chair Mats for Carpet in 2026 (Commercial-Grade Picks)";
export const metaTitle = "Best Chair Mats for Carpet in 2026 (Commercial & Extra-High Pile)";
export const metaDescription =
  "8 best chair mats for carpet in 2026, including commercial-grade and extra-high-pile-rated picks, compared by pile height, capacity, and warranty.";
export const mainKeyword = "chair mats for carpet";
export const introParagraphs = [
  "Most chair mats sold for carpet only cover low pile, under 1/4 inch, which leaves a real gap for anyone with medium, high, or extra-high pile carpet (the kind with thick padding underneath). This guide leans into that gap with commercial-grade picks built for offices with heavier daily use, plus the one mat in this lineup actually rated for extra-high pile.",
  "Below are 8 chair mats for carpet we evaluated on pile-height rating, cleat and stud design, and long-term durability, ranging from a $28 clear PVC mat to commercial-grade vinyl mats built for medium and extra-high pile carpet.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "9 min";
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
    id: "hon-office-chair-mat-low-pile-lip",
    rank: 1,
    badge: "Most-Reviewed + Longest Warranty",
    name: "HON Office Chair Mat for Low Pile Carpet with Lip",
    price: "$44.99",
    rating: "4.0",
    reviews: "54,421",
    imageUrl: "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    description:
      "HON's PU vinyl mat runs 2.2mm thick in a 36x48 footprint with an extended lip, ramped edges, and anchor bars underneath built to grip low pile carpet up to 1/4 inch. The anti-skid top surface adds an extra layer of stability once the chair is rolling across it.\n\nA 5-year warranty backs this pick, the longest of any mat in this guide, which matters given how much daily rolling pressure a carpet chair mat absorbs over years of use.\n\nAnti-skid top surface. That's a real strength, but weigh it against the flip side: only rated for low pile carpet.",
    specs: [
      "36\"W x 48\"D, PU vinyl, 2.2mm thick",
      "Extended lip, ramped edges",
      "Anchor bars underside",
      "Rated for low pile carpet up to 1/4\"",
      "5-year warranty",
    ],
    pros: [
      "Longest warranty in this guide",
      "Anti-skid top surface",
      "Ramped lip smooths the transition onto carpet",
      "Extremely large review base",
    ],
    cons: [
      "Only rated for low pile carpet",
      "Not the thickest mat in this guide",
      "No commercial-grade sizing option",
    ],
    bestFor: "Low pile carpet where warranty length and proven track record matter most",
  },
  {
    id: "muarts-crystal-clear-heavy-duty",
    rank: 2,
    badge: "Highest Capacity Dual-Use",
    name: "MuArts Crystal Clear Heavy Duty Chair Mat 5mm",
    price: "$59.99",
    rating: "4.4",
    reviews: "19,765",
    imageUrl: "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    description:
      "This mat uses a rigid special material 5mm thick in a 54x32 footprint, and it's rated for 1,400 lbs, the highest capacity in this guide. Its rigidity keeps it flat rather than curling or sinking into carpet, an advantage over flexible vinyl mats on anything past the flattest pile.\n\nIt's dual-use on carpet or hard floor, so it holds its value if you relocate the setup later, and it's backed by a 12-month warranty.\n\nWorth calling out specifically: rigid construction resists sinking into carpet. The catch is shorter warranty than the HON pick.",
    specs: [
      "54\"W x 32\"D, special rigid material, 5mm thick",
      "Rated 1,400 lbs, highest in this guide",
      "Rigid, flat, dual-use on carpet or hard floor",
      "12-month warranty",
    ],
    pros: [
      "Highest weight capacity in this guide",
      "Rigid construction resists sinking into carpet",
      "Works on carpet or hard floor",
      "Strong 4.4-star rating",
    ],
    cons: [
      "Shorter warranty than the HON pick",
      "Heavier to reposition than flexible vinyl",
      "Not explicitly rated by pile height like the vinyl picks",
    ],
    bestFor: "Buyers who need the highest rated weight capacity in this guide",
  },
  {
    id: "gorilla-grip-slip-resistant-polycarbonate",
    rank: 3,
    badge: "Ships-Flat Polycarbonate",
    name: "GORILLA GRIP Slip Resistant Polycarbonate Chair Mat",
    price: "$61.49",
    rating: "4.2",
    reviews: "1,956",
    imageUrl: "https://m.media-amazon.com/images/I/51TD21JdBYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BNPBMMKN?tag=theofficejournal-20",
    description:
      "This 100% polycarbonate mat is 0.087 inches thick in a 36x48 footprint with hundreds of spikes across the underside for carpet grip. Unlike the rolled vinyl mats in this guide, it ships flat, so there's no waiting period before it lies fully flat.\n\nIt's rated for medium or low pile carpet up to 3/4 inch, a notably wider range than the entry-level PVC picks here, making it a solid middle-tier option between basic low-pile mats and the extra-high-pile pick further down this list.\n\nRated for a wider pile range than PVC picks. Set against that, no front lip. Both matter when comparing it to the other picks here.",
    specs: [
      "36\"W x 48\"D, polycarbonate, 0.087\" thick",
      "Hundreds of underside spikes",
      "Ships flat, no settling wait",
      "Rated for medium or low pile up to 3/4\"",
    ],
    pros: [
      "Ships flat, no relax time needed",
      "Rated for a wider pile range than PVC picks",
      "Polycarbonate resists impact better than PVC",
      "Strong grip from hundreds of spikes",
    ],
    cons: [
      "No front lip",
      "Not rated for extra-high pile",
      "Smaller review sample than the top picks",
    ],
    bestFor: "Medium pile carpet where a flat-shipped mat is preferred over a rolled one",
  },
  {
    id: "es-robbins-everlife-medium-pile",
    rank: 4,
    badge: "Largest Vinyl Mat + Lifetime Warranty",
    name: "ES Robbins EverLife Chair Mat Medium Pile",
    price: "$161.98",
    rating: "3.8",
    reviews: "1,234",
    imageUrl: "https://m.media-amazon.com/images/I/514JrwWuWeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00620W1U4?tag=theofficejournal-20",
    description:
      "ES Robbins builds this vinyl mat 0.13 inches thick in a 60x72 footprint, the largest single mat in this guide by a wide margin, rated for medium pile carpet up to 3/4 inch. AnchorBar cleats on the underside are designed to be safe underfoot rather than sharp spikes, a meaningful detail on a mat this large that may see bare feet nearby.\n\nIt's Made in USA, GREENGUARD certified, and backed by a lifetime 'No Crack' warranty, commercial-grade backing that reflects its higher price and larger commercial-office-style footprint.\n\nA genuine advantage here is that lifetime 'No Crack' warranty. The tradeoff is most expensive pick in this guide.",
    specs: [
      "60\"W x 72\"D, vinyl, 0.13\" thick",
      "AnchorBar cleats (safe underfoot design)",
      "Rated for medium pile carpet up to 3/4\"",
      "Made in USA, GREENGUARD certified",
      "Lifetime 'No Crack' warranty",
    ],
    pros: [
      "Largest single mat footprint in this guide",
      "Lifetime 'No Crack' warranty",
      "GREENGUARD certified and Made in USA",
      "Safe, rounded cleats rather than sharp spikes",
    ],
    cons: [
      "Most expensive pick in this guide",
      "Lowest star rating in this guide at 3.8",
      "Large footprint needs a genuinely spacious desk area",
    ],
    bestFor: "Large commercial-style desk setups on medium pile carpet needing a lifetime warranty",
  },
  {
    id: "es-robbins-extra-high-pile-lip",
    rank: 5,
    badge: "Only Extra-High-Pile-Rated Pick",
    name: "ES Robbins Extra High Pile Chair Mat with Lip",
    price: "$88.42",
    rating: "3.7",
    reviews: "922",
    imageUrl: "https://m.media-amazon.com/images/I/61Tqz6OiuCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B009LEIQXY?tag=theofficejournal-20",
    description:
      "This ES Robbins mat is 0.2 inches thick in a 36x48 footprint and is rated for extra-high pile carpet over 1 inch, including padding, the only pick in this entire guide rated for that pile category. Most competing mats top out at low or medium pile, leaving thick, plush, or padded carpet setups with almost no dedicated option, which this mat directly addresses.\n\nAnchorBar cleats keep it safe underfoot, and it's GREENGUARD Gold certified, phthalate and cadmium free, and Made in USA, with a lifetime warranty backing it.\n\nGREENGUARD Gold certified. On the other hand, lowest reviews-to-price ratio in this guide. Neither should be a surprise once you know to look for it.",
    specs: [
      "36\"W x 48\"D, vinyl, 0.2\" thick",
      "Rated for extra-high pile over 1\" (including padding)",
      "AnchorBar cleats",
      "GREENGUARD Gold certified, phthalate and cadmium free",
      "Made in USA, lifetime warranty",
    ],
    pros: [
      "Only pick in this guide rated for extra-high pile carpet",
      "GREENGUARD Gold certified",
      "Made in USA with a lifetime warranty",
      "Safe AnchorBar cleats, not sharp spikes",
    ],
    cons: [
      "Lowest reviews-to-price ratio in this guide",
      "3.7-star rating is the lowest here",
      "Smaller footprint than the ES Robbins EverLife pick",
    ],
    bestFor: "Extra-high pile or heavily padded carpet with no other mat in this guide rated to fit",
  },
  {
    id: "lorell-tempered-glass-chairmat",
    rank: 6,
    badge: "Most-Reviewed + Highest-Rated Glass",
    name: "Lorell Tempered Glass Chairmat",
    price: "Check current price",
    rating: "4.8",
    reviews: "10,717",
    imageUrl: "https://m.media-amazon.com/images/I/21V7PYvl22L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07K95V7X2?tag=theofficejournal-20",
    description:
      "Lorell's tempered glass mat is 6mm thick in a 46x36 footprint, rated for 1,000 lbs and for any floor type, including carpet, hard floor, or marble. Glass sidesteps the whole pile-height question entirely since it sits rigid on top of any carpet without sinking in, and it's scratch-resistant and backed by a 5-year warranty.\n\nAvailability on this specific listing can be limited at times, so confirm current stock and price before buying rather than relying on a fixed number. It's the most-reviewed and highest-rated pick in this guide by a wide margin.\n\nWorks on any carpet pile height without a rating ceiling. That's a real strength, but weigh it against the flip side: listing availability can be limited, confirm price before buying.",
    specs: [
      "46\"W x 36\"D, tempered glass, 6mm thick",
      "Rated 1,000 lbs",
      "Rated for any floor type",
      "Scratch-resistant, 5-year warranty",
    ],
    pros: [
      "Most-reviewed and highest-rated pick in this guide",
      "Works on any carpet pile height without a rating ceiling",
      "5-year warranty and scratch-resistant surface",
      "Easy to clean",
    ],
    cons: [
      "Listing availability can be limited, confirm price before buying",
      "Heaviest material in this guide to reposition",
      "Smaller footprint than the largest vinyl picks",
    ],
    bestFor: "Buyers who want a rigid mat unaffected by carpet pile height at all",
  },
  {
    id: "glsland-tempered-glass-chair-mat",
    rank: 7,
    badge: "Cheapest Tempered Glass",
    name: "GLSLAND Tempered Glass Chair Mat",
    price: "$60.99",
    rating: "4.6",
    reviews: "2,486",
    imageUrl: "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    description:
      "GLSLAND's tempered glass mat is 5mm thick in a 36x46 footprint, rated for 1,200 lbs, with 4 anti-slip pads underneath. Like the Lorell pick, glass avoids the pile-height rating question entirely since it stays rigid on top of the carpet rather than needing cleats to dig in. It's BPA-free, phthalate-free, and odorless, and it's dual-use on carpet or hard floor. It's the cheapest tempered glass pick in this guide, a solid entry point into the glass category. Worth calling out specifically: rigid, unaffected by carpet pile height. The catch is smaller footprint than the Lorell glass pick.",
    specs: [
      "36\"W x 46\"D, tempered glass, 5mm thick",
      "Rated 1,200 lbs",
      "4 anti-slip pads",
      "BPA-free, phthalate-free, odorless",
      "Dual-use on carpet or hard floor",
    ],
    pros: [
      "Cheapest tempered glass pick in this guide",
      "Rigid, unaffected by carpet pile height",
      "Dual-use on carpet or hard floor",
      "Strong 4.6-star rating",
    ],
    cons: [
      "Smaller footprint than the Lorell glass pick",
      "Anti-slip pads offer lighter grip than full cleats",
      "Heavier to move than vinyl mats",
    ],
    bestFor: "Buyers who want glass's pile-independent durability at the lowest glass price",
  },
  {
    id: "anji-mountain-rugd-jacquard",
    rank: 8,
    badge: "Most Stylish Woven Design",
    name: "Anji Mountain Rug'd Jacquard Office Chair Mat",
    price: "$92.99",
    rating: "4.7",
    reviews: "902",
    imageUrl: "https://m.media-amazon.com/images/I/514z0haVzTL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09RN8H3QD?tag=theofficejournal-20",
    description:
      "The Anji Mountain mat is jacquard-woven polyester over a PVC core, 0.25 inches thick in a 36x48 footprint, and it's the only pick in this entire guide that looks like a decorative rug rather than a plastic mat. Felt backing plus rubberized non-slip dots hold it in place, and it's hand-crafted rather than mass-molded like the vinyl and polycarbonate picks here.\n\nIt's water-resistant and stain-resistant, and it's rated for low pile carpet or hard surfaces. If blending the mat into the room's decor matters as much as function, this is the only pick in this guide built with that in mind.\n\nWater-resistant and stain-resistant. Set against that, only rated for low pile, not medium or high. Both matter when comparing it to the other picks here.",
    specs: [
      "36\"W x 48\"D, jacquard-woven polyester + PVC core, 0.25\" thick",
      "Felt backing + rubberized non-slip dots",
      "Water-resistant, stain-resistant",
      "Rated for low pile carpet or hard surfaces",
      "Hand-crafted",
    ],
    pros: [
      "Only decorative, rug-style pick in this guide",
      "Water-resistant and stain-resistant",
      "Strong 4.7-star rating",
      "Works on low pile carpet or hard surfaces",
    ],
    cons: [
      "Only rated for low pile, not medium or high",
      "Woven texture may not grip as firmly as cleated vinyl",
      "Smaller review sample than the top vinyl picks",
    ],
    bestFor: "Buyers who want a chair mat that doubles as a decorative rug",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Pile height coverage",
    description: "Prioritized picks that fill the gap most competitor lists ignore, medium, high, and especially extra-high pile carpet, alongside the standard low-pile options.",
  },
  {
    title: "Commercial-grade durability",
    description: "Weighed Made-in-USA sourcing, GREENGUARD certification, and lifetime or multi-year warranties as signals of long-term durability under daily commercial-style use.",
  },
  {
    title: "Underside grip design",
    description: "Compared cleats, AnchorBar systems, spikes, and anti-slip pads on how well each anchors into carpet fibers of varying thickness.",
  },
  {
    title: "Material category fit",
    description: "Considered vinyl, polycarbonate, and tempered glass separately, since glass sidesteps the pile-height rating question entirely by staying rigid on top of any carpet.",
  },
  {
    title: "Value for price",
    description: "Weighed footprint size, pile rating, and warranty against price, since this guide spans a basic mat up to a commercial-grade 60x72 mat.",
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
          "Lorell Tempered Glass Chairmat"
        ],
        [
          "Largest review base, strongest reliability signal",
          "HON Office Chair Mat for Low Pile Carpet with Lip"
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
          "Under $45",
          "HON Office Chair Mat for Low Pile Carpet with Lip"
        ],
        [
          "Up to $NaN",
          "Lorell Tempered Glass Chairmat"
        ]
      ]
    }
  },
  {
    "subheading": "HON Office Chair Mat for Low Pile Carpet with Lip vs Lorell Tempered Glass Chairmat",
    "cards": [
      {
        "label": "HON Office Chair Mat for Low Pile Carpet with Lip",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Lorell Tempered Glass Chairmat",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to HON Office Chair Mat for Low Pile Carpet with Lip unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "HON Office Chair Mat for Low Pile Carpet with Lip"
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
        "text": "HON Office Chair Mat for Low Pile Carpet with Lip is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Lorell Tempered Glass Chairmat's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where HON Office Chair Mat for Low Pile Carpet with Lip covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Is there a chair mat rated for extra-high pile or padded carpet?",
    a: "Yes, the ES Robbins Extra High Pile Chair Mat with Lip is the only pick in this guide rated for extra-high pile carpet over 1 inch, including padding. Most other chair mats, including the other picks here, only cover low to medium pile.",
  },
  {
    q: "What's the difference between the 2 ES Robbins mats in this guide?",
    a: "The ES Robbins EverLife is rated for medium pile carpet up to 3/4 inch in a large 60x72 commercial footprint with a lifetime 'No Crack' warranty. The ES Robbins Extra High Pile pick is smaller at 36x48 but is the only mat in this guide rated for extra-high pile carpet over 1 inch.",
  },
  {
    q: "Do tempered glass mats need a pile-height rating?",
    a: "Not in the same way vinyl or polycarbonate mats do. Because glass stays rigid and doesn't sink into carpet, picks like the Lorell and GLSLAND tempered glass mats in this guide work across a range of pile heights without a specific ceiling, though they come at a higher price and heavier weight.",
  },
  {
    q: "Why does the ES Robbins EverLife have a lower star rating than the cheaper picks in this guide?",
    a: "It sits at 3.8 stars, the lowest in this guide, despite its commercial-grade certifications and lifetime warranty. A lower average rating doesn't necessarily mean lower build quality, it can also reflect a larger, heavier, pricier product with higher buyer expectations, so weigh it alongside the mat's actual spec sheet.",
  },
  {
    q: "How long does a rolled chair mat take to lie flat?",
    a: "Around 24 hours lying flat at room temperature. Most 'my mat won't stay flat' complaints in the first day are just this normal settling period, not a defect.",
  },
  {
    q: "Which pick in this guide is best if I want the mat to look decorative rather than utilitarian?",
    a: "The Anji Mountain Rug'd Jacquard Office Chair Mat is the only pick here that looks like a woven decorative rug rather than a plastic or glass mat, while still being rated for low pile carpet or hard surfaces.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-chair-mat-for-carpet", title: "Best Chair Mat for Carpet (2026)" },
  { href: "/guide/best-chair-mats", title: "Best Chair Mats for Any Floor (2026)" },
  { href: "/guide/best-office-chair-under-100", title: "Best Office Chairs Under $100 (2026)" },
];
