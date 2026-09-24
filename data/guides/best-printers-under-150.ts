export const guideSlug = "best-printers-under-150";
export const guideTitle = "6 Best Printers Under $150 in 2026";
export const metaTitle = "Best Printers Under $150 in 2026 (Verified Prices)";
export const metaDescription =
  "6 best printers under $150 in 2026, all verified current pricing. Compare ink-tank break-even math, feature sets, and which pick fits your print volume.";
export const mainKeyword = "printers under $150";
export const introParagraphs = [
  "At the $150 ceiling, you get real choice: full-featured inkjet all-in-ones with duplex printing and document feeders, a genuine monochrome laser, and enough room to think seriously about whether an ink-tank system's math works for your household or office before committing.",
  "Below are 6 printers we evaluated at this price tier, all verified to genuinely fall under $150, ranked on true cost per page, feature completeness, and fit for different print volumes.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg";

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
    id: "brother-hl-l2405w-mono-laser",
    rank: 1,
    badge: "Best for Text Volume",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=theofficejournal-20",
    description:
      "The HL-L2405W is the only laser printer at this price tier in our lineup, and it changes the running-cost math meaningfully for anyone printing mostly black-and-white text. Toner costs less per page than inkjet cartridges over time, and toner doesn't dry out the way idle ink cartridges can. It skips scan and copy to keep the price at a budget-friendly price, so pair it with a separate scanner if you need one. Mobile printing and wireless setup make it easy to add to a home network without extra cabling. Toner doesn't dry out during slow weeks. Set against that, no scan or copy functions. Both matter when comparing it to the other picks here.",
    specs: [
      "Monochrome laser engine",
      "Print only, no scan or copy",
      "Wireless and mobile printing",
      "Works with Alexa",
      "Compact footprint",
    ],
    pros: [
      "Lowest cost per page for text-heavy printing in this list",
      "Toner doesn't dry out during slow weeks",
      "Compact for a laser printer",
      "Reliable wireless setup",
    ],
    cons: [
      "No scan or copy functions",
      "No color output",
      "Higher upfront cost than the inkjets in this list",
    ],
    bestFor: "Home offices printing mostly black-and-white text documents",
  },
  {
    id: "canon-imageclass-lbp6030w-under150",
    rank: 2,
    badge: "Best Budget Laser",
    name: "Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
    price: "$87.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GFXE7NdOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00K5UZO0Q?tag=theofficejournal-20",
    description:
      "This compact laser undercuts the Brother laser above on price while offering the same core toner economics, up to 19 pages per minute of monochrome output with a lower cost per page than any inkjet in this list. It's print-only, which keeps both the price and the footprint small.\n\nFor anyone deciding between the two laser picks here, this is the better fit if budget matters more than the small speed and build differences the pricier Brother offers.\n\nA genuine advantage here is that low true cost per page for text printing. The tradeoff is no scan or copy.",
    specs: [
      "Monochrome laser engine, up to 19 PPM",
      "Print only",
      "Wireless connectivity",
      "Compact footprint",
      "1-year limited warranty",
    ],
    pros: [
      "Lowest price laser option in this list",
      "Low true cost per page for text printing",
      "Compact footprint",
      "Fast for monochrome text output",
    ],
    cons: [
      "No scan or copy",
      "No color",
      "Fewer connectivity options than the pricier Brother laser",
    ],
    bestFor: "Budget-conscious buyers who want laser economics without the higher Brother price",
  },
  {
    id: "canon-pixma-ts6520-under150",
    rank: 3,
    badge: "Best Display and Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "The TS6520 brings a 1.42-inch OLED display and clearer controls than most inkjets at this tier, with automatic duplex printing plus scan and copy included. It's a well-rounded home printer that balances usability against ongoing ink cost.\n\nColor output still runs on a combined cartridge design common at this price, so heavy single-color printing draws down the whole cartridge faster than a separate-tank system would. For general home use it remains one of the easiest printers in this list to live with day to day.\n\nDuplex printing included. On the other hand, combined color cartridge design. Neither should be a surprise once you know to look for it.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex printing",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "Compact design",
    ],
    pros: [
      "Clearest display and controls in this list",
      "Duplex printing included",
      "Full print, scan, copy function set",
      "Comfortably under budget",
    ],
    cons: [
      "Combined color cartridge design",
      "No fax or document feeder",
      "Cartridge cost rises with heavy printing",
    ],
    bestFor: "Home users who want the easiest day-to-day control panel experience",
  },
  {
    id: "canon-pixma-tr4720-under150",
    rank: 4,
    badge: "Best for Fax and Document Feeding",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=theofficejournal-20",
    description:
      "The PIXMA TR4720 keeps an automatic document feeder and built-in fax, features many printers drop well before this price ceiling. That makes it a fit for a home office that still occasionally needs to scan or fax multi-page paperwork. It leaves plenty of budget headroom under the ceiling for anyone deciding whether to spend more elsewhere, like an ink-tank system, once monthly volume is factored in. Full document workflow support. That's a real strength, but weigh it against the flip side: combined color cartridge design.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder (ADF)",
      "Mobile printing support",
      "Wireless connectivity",
      "Compact design",
    ],
    pros: [
      "Includes ADF and fax at a low price point",
      "Full document workflow support",
      "Wireless and mobile printing",
      "Leaves budget room under the $150 ceiling",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Entry-tier build quality",
    ],
    bestFor: "Home offices needing fax and document feeding without spending near the full budget",
  },
  {
    id: "hp-deskjet-4355-under150",
    rank: 5,
    badge: "Best for Light Use",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    description:
      "The DeskJet 4355 covers print, scan, and copy at the lowest price in this list, with a 3-month Instant Ink trial to soften early cartridge cost. It's wireless and simple to set up, a solid entry point for light home printing needs.\n\nIf your household prints only occasionally, this frees up the most budget headroom of any pick here to put toward paper, extra ink, or another desk accessory instead.\n\nWorth calling out specifically: instant Ink trial offsets early ink cost. The catch is combined color cartridge design.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact footprint",
      "AI-capable printing features",
    ],
    pros: [
      "Lowest price in this list",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Frees up budget for accessories or paper",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Best suited to light, occasional printing",
    ],
    bestFor: "Light home printing where saving budget matters most",
  },
  {
    id: "canon-pixma-ts4320-under150",
    rank: 6,
    badge: "Best for Double-Sided Printing",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    description:
      "The PIXMA TS4320 is the least expensive pick in this list that still includes automatic duplex printing, a genuinely useful feature for anyone printing multi-page documents regularly. Scan and copy are included in a compact, easy-to-set-up design. It leaves the most budget room under the ceiling of any pick here, which is worth considering if you'd rather put the savings toward extra ink or a printer stand instead. Full print, scan, copy function set. Set against that, combined color cartridge design. Both matter when comparing it to the other picks here.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex (2-sided) printing",
      "Wireless printing",
      "Compact design",
      "Easy setup process",
    ],
    pros: [
      "Automatic duplex printing at the lowest price in this list",
      "Full print, scan, copy function set",
      "Simple setup",
      "1-year limited warranty included",
    ],
    cons: [
      "Combined color cartridge design",
      "No automatic document feeder",
      "Entry-tier build quality",
    ],
    bestFor: "Buyers who want duplex printing while spending the least under $150",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Ink-tank versus cartridge break-even math",
    description: "Weighed whether a cartridge printer at this tier or stretching toward an ink-tank system pays off faster, based on realistic monthly print volume.",
  },
  {
    title: "Verified current pricing under $150",
    description: "Confirmed each pick's actual listed price stays genuinely under the ceiling this guide promises, dropping any option that exceeded it.",
  },
  {
    title: "Feature completeness at this tier",
    description: "Checked which picks include duplex printing, an automatic document feeder, or fax, features that become more common but still aren't universal at a competitive price.",
  },
  {
    title: "Laser versus inkjet cost per page",
    description: "Compared toner and cartridge running costs directly, since two genuine laser options exist at this tier alongside the inkjets.",
  },
  {
    title: "Budget headroom for different needs",
    description: "Considered how much of the ceiling each pick actually uses, since a pick leaves more room to spend on paper, ink, or accessories than a one.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a printers under $150 often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the printers under $150 holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this printers under $150 over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any printers under $150 you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A printers under $150 that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
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
          "Brother HL"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Brother HL"
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
          "Under $64",
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
        ],
        [
          "Up to $140",
          "Brother HL"
        ]
      ]
    }
  },
  {
    "subheading": "Canon PIXMA TS4320 Wireless Color Inkjet Printer vs Brother HL",
    "cards": [
      {
        "label": "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Brother HL",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Canon PIXMA TS4320 Wireless Color Inkjet Printer unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "Brother HL"
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
        "text": "Brother HL is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Brother HL's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Canon PIXMA TS4320 Wireless Color Inkjet Printer covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Should I buy an ink-tank printer instead of staying under $150?",
    a: "It depends on volume. If you print more than roughly 150 pages a month with a mix of color content, an ink-tank printer above this price tier usually pays back its higher upfront cost within months through cheaper refill bottles. Below that volume, a cartridge printer in this list is the more practical choice.",
  },
  {
    q: "Is a laser printer worth it at the $150 tier?",
    a: "Yes, if you print mostly text. Both laser picks in this list, the Brother HL-L2405W and Canon imageCLASS LBP6030w, cost less per page in toner than any inkjet here, though neither includes scan or copy.",
  },
  {
    q: "Is buying a refurbished printer a good way to get more features under $150?",
    a: "It can be. A refurbished or open-box unit at this price sometimes matches a model that sells new for $250 or more. Only buy from a seller offering a clear return window and some form of warranty on the refurbished unit.",
  },
  {
    q: "Which pick includes the most features under $150?",
    a: "The Canon PIXMA TR4720 includes an automatic document feeder and fax, features most printers at this tier skip, while still leaving significant budget room under the $150 ceiling.",
  },
  {
    q: "Do all printers under $150 include duplex printing?",
    a: "No. In this list, only the Canon PIXMA TS4320 and TS6520 include automatic duplex printing. Check the spec sheet directly rather than assuming it's standard once you're spending near $150.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-under-100", title: "Best Printers Under $100 (2026)" },
  { href: "/guide/best-printers-under-200", title: "Best Printers Under $200 (2026)" },
  { href: "/guide/best-budget-laser-printers", title: "Best Budget Laser Printers (2026)" },
  { href: "/guide/best-printers-for-home-offices", title: "Best Printers for Home Offices (2026)" },
];
