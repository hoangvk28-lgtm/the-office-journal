export const guideSlug = "best-printers-for-homeschooling";
export const guideTitle = "8 Best Printers for Homeschooling in 2026";
export const metaTitle = "Best Printers for Homeschooling in 2026 (Ink-Tank & Budget Picks)";
export const metaDescription =
  "8 best printers for homeschooling in 2026, from budget inkjets to ink-tank models built for high-volume worksheet printing. Compare cost and durability.";
export const mainKeyword = "printer for homeschool";
export const introParagraphs = [
  "A homeschooling household prints far more than the average home office, worksheets, answer keys, art projects, and reading materials can add up to hundreds of pages a month across even one or two kids, and that volume changes which printer actually makes sense. A printer built around occasional home use quickly turns into a cartridge-replacement treadmill once real homeschool volume hits it.",
  "Below are 8 printers for homeschooling we evaluated on cost per page at realistic homeschool volume, durability around kids, and wireless setup ease, ranging from a $59 basic inkjet to a $189.99 ink-tank model built for sustained daily printing.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg";

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
    id: "canon-pixma-ts6520-color-inkjet",
    rank: 1,
    badge: "Best Overall",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "The PIXMA TS6520 balances a compact design with a 1.42-inch OLED display that makes it simple for a parent to check status or clear an issue without pulling out a phone app mid-lesson. Duplex printing and built-in copy and scan cover the core homeschool workflow of printing worksheets and scanning completed work.\n\nAs a cartridge-based inkjet, cost per page will run higher than the ink-tank picks below once volume climbs into the hundreds of pages a month, so this fits a homeschool with lighter or more occasional printing needs best, or a household layering it with a shared printer for high-volume days.\n\nWorth calling out specifically: compact footprint fits a small homeschool desk. The catch is cartridge ink costs more per page at high volume.",
    specs: [
      "Color inkjet, duplex printing",
      "Built-in copier and scanner",
      "1.42-inch OLED display",
      "Compact design",
      "Cartridge-based ink system",
    ],
    pros: [
      "Clear OLED display simplifies daily use",
      "Compact footprint fits a small homeschool desk",
      "Duplex printing built in",
      "Lower upfront price than ink-tank options",
    ],
    cons: [
      "Cartridge ink costs more per page at high volume",
      "No automatic document feeder for multi-page scanning",
      "Ink can dry out during light summer-break use",
    ],
    bestFor: "Homeschools with moderate print volume who want a simple, low-cost starting printer",
  },
  {
    id: "epson-ecotank-et-2400-supertank",
    rank: 2,
    badge: "Best for High-Volume Worksheets",
    name: "Epson EcoTank ET-2400 Wireless Cartridge-Free Supertank Printer",
    price: "$189.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31TonwUym9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BM9BFLMX?tag=theofficejournal-20",
    description:
      "The EcoTank ET-2400 swaps disposable cartridges for refillable ink tanks, which is exactly the change that makes sense once a homeschool is printing several hundred pages a month across worksheets, coloring pages, and reading material. Bottle refills cost a fraction of what the equivalent cartridge volume would cost over the same stretch.\n\nWith 1 to 3 kids realistically generating 500 to 1,000 color pages a month plus a couple hundred more in black and white, the higher upfront price of an ink-tank printer typically pays itself back well within a homeschool year compared to sticking with cartridges at that volume.\n\nHandles hundreds of worksheet pages a month without cartridge swaps. Set against that, higher upfront price than a basic cartridge inkjet. Both matter when comparing it to the other picks here.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink refills included",
      "Built for everyday, high-volume printing",
    ],
    pros: [
      "Lowest cost per page of any pick in this list at real homeschool volume",
      "Handles hundreds of worksheet pages a month without cartridge swaps",
      "Scan and copy included",
      "No mid-print cartridge failures",
    ],
    cons: [
      "Higher upfront price than a basic cartridge inkjet",
      "Larger footprint due to the ink tanks",
      "No automatic document feeder",
    ],
    bestFor: "Homeschools with 1-3 kids generating high monthly worksheet and color volume",
  },
  {
    id: "hp-deskjet-4355-color-inkjet",
    rank: 3,
    badge: "Best Budget Pick",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    description:
      "The DeskJet 4355 keeps things simple with print, scan, and copy in a low-cost package, plus a 3-month Instant Ink trial that softens the early cartridge cost for a new homeschool setup still figuring out its actual print volume. It is one of the most affordable full all-in-ones in this list.\n\nOnce the Instant Ink trial ends, standard cartridge economics apply, so families printing more than light-to-moderate volume should plan to reassess after the trial period or budget for more frequent cartridge purchases.\n\nA genuine advantage here is that instant Ink trial softens early ink costs. The tradeoff is standard cartridge costs return after the trial period.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "AI-capable printing features",
      "Compact, budget-friendly design",
    ],
    pros: [
      "Very low upfront price",
      "Instant Ink trial softens early ink costs",
      "Scan and copy included",
      "Simple setup for a first-time homeschool printer",
    ],
    cons: [
      "Standard cartridge costs return after the trial period",
      "Not built for sustained high-volume printing",
      "No automatic document feeder",
    ],
    bestFor: "Budget-conscious homeschools just starting out and testing their real print volume",
  },
  {
    id: "canon-pixma-tr4720-white",
    rank: 4,
    badge: "Best with Auto Document Feeder",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31nVDhGd67L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXC13T?tag=theofficejournal-20",
    description:
      "The PIXMA TR4720 stands out among the budget picks in this list for including an automatic document feeder, genuinely useful for a homeschool parent scanning a stack of completed worksheets or grading records in one pass instead of feeding pages one at a time. Built-in fax is a legacy feature most households won't use, but it doesn't add meaningful cost.\n\nMobile printing lets a parent send a worksheet from a phone or tablet without walking to a desktop computer, a small convenience that matters during a busy lesson block.\n\nLow price for the included feature set. On the other hand, cartridge-based ink costs more at high volume. Neither should be a surprise once you know to look for it.",
    specs: [
      "Color inkjet all-in-one with auto document feeder",
      "Mobile printing support",
      "Built-in fax (legacy feature)",
      "Wireless connectivity",
      "Compact home printer design",
    ],
    pros: [
      "Auto document feeder speeds up scanning multi-page work",
      "Low price for the included feature set",
      "Mobile printing from phone or tablet",
      "Simple setup",
    ],
    cons: [
      "Cartridge-based ink costs more at high volume",
      "Fax feature is unnecessary for most households",
      "Not built for sustained daily high-volume printing",
    ],
    bestFor: "Parents who regularly scan stacks of completed worksheets or grading records",
  },
  {
    id: "epson-workforce-wf-2930-basic-aio",
    rank: 5,
    badge: "Best for Fax and Multi-Page Scanning",
    name: "Epson Workforce WF-2930 Wireless All-in-One Printer",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31H9Yu3i01L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BDD46HFV?tag=theofficejournal-20",
    description:
      "The Workforce WF-2930 packs an automatic document feeder, fax, duplex printing, and a small color display into a budget-friendly all-in-one, a fuller feature set than most printers at this price. Duplex printing helps cut paper use on longer reading assignments or multi-page lesson packets.\n\nLike the other cartridge-based picks in this list, cost per page will run higher than an ink-tank printer once volume climbs, making this best suited to a homeschool with moderate rather than heavy daily printing needs.\n\nDuplex printing saves paper on long assignments. That's a real strength, but weigh it against the flip side: cartridge ink costs more per page at high volume.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder",
      "Automatic 2-sided printing",
      "1.4-inch color display",
      "Cartridge-based ink system",
    ],
    pros: [
      "Full feature set for the price: ADF, fax, duplex",
      "Duplex printing saves paper on long assignments",
      "Simple color display for status checks",
      "Compact enough for a shared homeschool desk",
    ],
    cons: [
      "Cartridge ink costs more per page at high volume",
      "Not ideal for a homeschool with heavy daily printing",
      "Ink can dry out over slow weeks like summer break",
    ],
    bestFor: "Homeschools that need fax and multi-page scanning alongside moderate daily printing",
  },
  {
    id: "canon-pixma-mg3620-color-inkjet",
    rank: 6,
    badge: "Best for Tablet Printing",
    name: "Canon PIXMA MG3620 Wireless All-in-One Color Inkjet Printer",
    price: "$122.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31BXOlNqjZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B010A7TZ76?tag=theofficejournal-20",
    description:
      "The PIXMA MG3620 emphasizes mobile and tablet printing, a genuinely useful trait for homeschool curricula delivered as PDFs or apps on an iPad, letting a parent send a worksheet straight from the tablet a kid is already using for lessons. Wireless setup covers the basics for a shared home network.\n\nIt is a print, scan, copy all-in-one without an automatic document feeder or fax, which keeps the design simple but limits it for anyone needing to scan multi-page stacks regularly.\n\nWorth calling out specifically: simple print, scan, copy feature set. The catch is no automatic document feeder for multi-page scans.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy",
      "Mobile and tablet printing emphasis",
      "Wireless connectivity",
      "No automatic document feeder",
      "Cartridge-based ink system",
    ],
    pros: [
      "Strong tablet and mobile printing support",
      "Simple print, scan, copy feature set",
      "Reliable wireless setup",
      "Works well with iPad-based curricula",
    ],
    cons: [
      "No automatic document feeder for multi-page scans",
      "No fax",
      "Cartridge ink costs more at high volume than an ink tank",
    ],
    bestFor: "Homeschools running curricula primarily through a tablet or iPad",
  },
  {
    id: "brother-dcp-l2640dw-mono-laser",
    rank: 7,
    badge: "Best for High-Volume Text Worksheets",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=theofficejournal-20",
    description:
      "For a homeschool leaning heavily on black-and-white daily worksheets, math drills, spelling lists, reading comprehension pages, a monochrome laser like the DCP-L2640DW brings cost per page down further than even an ink-tank inkjet can manage for pure text. Duplex printing, copy, and scan are all built in.\n\nToner doesn't dry out over summer break the way inkjet ink can, a genuine advantage for a homeschool printer that might sit unused for weeks at a stretch. The trade-off is no color output at all, so pair it with a color-capable printer if art or science visuals are a regular part of your curriculum.\n\nToner survives summer break without drying out. Set against that, no color output at all. Both matter when comparing it to the other picks here.",
    specs: [
      "Monochrome laser engine",
      "Automatic duplex (2-sided) printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint for a homeschool desk",
    ],
    pros: [
      "Lowest cost per page for high-volume black-and-white worksheets",
      "Toner survives summer break without drying out",
      "Duplex printing saves paper automatically",
      "Built to last multiple school years",
    ],
    cons: [
      "No color output at all",
      "Highest upfront cost in this list",
      "Overkill for a homeschool with light or mostly color printing needs",
    ],
    bestFor: "Math-heavy or reading-heavy curricula with high-volume black-and-white daily worksheets",
  },
  {
    id: "hp-smart-tank-5101-refillable",
    rank: 8,
    badge: "Best Value Ink Tank",
    name: "HP Smart Tank 5101 Wireless All-in-One Refillable Printer",
    price: "$169.89",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41xOh51IRUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BL466Y41?tag=theofficejournal-20",
    description:
      "The Smart Tank 5101 brings ink-tank economics to a lower price than the EcoTank ET-2400, with 2 years of ink included, a meaningful head start for a homeschool budgeting print costs over an entire school year or more. Print, scan, and copy cover the essentials without extra bulk.\n\nWireless printing runs on 2.4GHz only, so check that against your home router setup, some newer routers default to 5GHz on their main network and need a 2.4GHz guest band enabled for this printer to join.\n\nA genuine advantage here is that ink-tank economics for high-volume printing. The tradeoff is 2.4GHz-only wireless can complicate setup on some routers.",
    specs: [
      "Refillable ink tank system with 2 years of ink included",
      "Print, scan, and copy",
      "Wireless printing (2.4GHz only)",
      "Compact footprint versus larger ink-tank models",
      "No automatic document feeder",
    ],
    pros: [
      "2 years of ink included offsets a full homeschool budget cycle",
      "Ink-tank economics for high-volume printing",
      "More compact than some other ink-tank models",
      "Lower upfront price than the EcoTank ET-2400",
    ],
    cons: [
      "2.4GHz-only wireless can complicate setup on some routers",
      "No automatic document feeder",
      "No automatic duplex printing listed",
    ],
    bestFor: "Homeschools wanting ink-tank savings on a tighter upfront budget",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Cost per page at real homeschool volume",
    description: "Weighed cartridge versus ink-tank economics specifically against homeschool print volume, which runs far higher than typical occasional home use.",
  },
  {
    title: "Kid-durability and ease of use",
    description: "Considered button layout simplicity and how forgiving each printer is of a curious kid pressing the wrong button or yanking paper mid-print.",
  },
  {
    title: "Document workflow fit",
    description: "Checked for automatic document feeders and duplex printing, both of which matter for scanning completed worksheets and printing long reading assignments efficiently.",
  },
  {
    title: "Mobile and tablet compatibility",
    description: "Evaluated wireless and app-based printing support, since many homeschool curricula are delivered as PDFs or apps on a shared family tablet.",
  },
  {
    title: "Value across a full school year",
    description: "Weighed upfront price against ink cost projected across a 9 to 10 month school year rather than a single month, which changes which pick is actually cheaper.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a printer often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the printer holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this printer over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any printer you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A printer that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
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
          "Canon PIXMA TS6520 Wireless Color Inkjet Printer"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Canon PIXMA TS6520 Wireless Color Inkjet Printer"
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
          "Under $70",
          "HP DeskJet 4355 Wireless All"
        ],
        [
          "Up to $210",
          "Brother DCP"
        ]
      ]
    }
  },
  {
    "subheading": "HP DeskJet 4355 Wireless All vs Brother DCP",
    "cards": [
      {
        "label": "HP DeskJet 4355 Wireless All",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Brother DCP",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to HP DeskJet 4355 Wireless All unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "Canon PIXMA TS6520 Wireless Color Inkjet Printer"
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
        "text": "Canon PIXMA TS6520 Wireless Color Inkjet Printer is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Brother DCP's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where HP DeskJet 4355 Wireless All covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How much do homeschool families actually print each month?",
    a: "It's higher than most people expect. 1 to 3 kids can realistically generate 500 to 1,000 color pages a month from worksheets, art projects, and reading material, plus another 200 to 400 black-and-white pages. That volume is genuinely high compared to typical occasional home printing, which is why an ink-tank printer often makes more financial sense for homeschooling than it would for a household that prints rarely.",
  },
  {
    q: "Is an ink-tank printer worth the extra upfront cost for homeschooling?",
    a: "Usually, yes, if your monthly volume is in the hundreds of pages. The Epson EcoTank ET-2400 and HP Smart Tank 5101 cost more upfront than a basic cartridge inkjet, but bottle refills at $15 to $20 typically last months even at high volume, versus $30 to $60 a month in cartridges at that same volume. Most homeschool households recover the price difference within a single school year.",
  },
  {
    q: "What should I do about wall charts, posters, or maps my curriculum requires?",
    a: "None of the compact printers built for a homeschool desk handle A3 or 11x17 large-format printing. For occasional large-format needs, using a local print shop is typically cheaper and more practical than buying a dedicated large-format printer that would otherwise sit unused most of the year.",
  },
  {
    q: "Will my printer's ink dry out over summer break?",
    a: "It can, for cartridge-based printers. Cartridges left idle for a few weeks or months can dry out, leading to wasted ink on auto-cleaning cycles when you resume printing in the fall. Ink-tank printers like the EcoTank ET-2400 or Smart Tank 5101 largely avoid this cost since bottle-fed ink doesn't dry out inside the printhead the way small cartridges do.",
  },
  {
    q: "Which printer is best for scanning completed worksheets in bulk?",
    a: "Look for an automatic document feeder, which lets you scan a stack of pages in one pass instead of feeding them one at a time. The Canon PIXMA TR4720 and Epson Workforce WF-2930 both include one, making them the better picks in this list for parents who regularly scan multi-page assignments or grading records.",
  },
  {
    q: "Do I need a printer with fax for homeschooling?",
    a: "Almost never. Fax is a legacy feature that shows up on a few all-in-ones in this list, including the PIXMA TR4720 and Workforce WF-2930, but it rarely gets used in a homeschool context. Don't let fax sway your decision, focus on cost per page, automatic document feeder support, and color needs instead.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-for-teachers", title: "Best Printers for Teachers (2026)" },
  { href: "/guide/best-printers-for-small-businesses", title: "Best Printers for Small Businesses (2026)" },
  { href: "/guide/best-easy-to-use-printers", title: "Best Easy-to-Use Printers (2026)" },
  { href: "/guide/best-small-printer-stands", title: "Best Small Printer Stands (2026)" },
];
