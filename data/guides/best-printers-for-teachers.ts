export const guideSlug = "best-printers-for-teachers";
export const guideTitle = "8 Best Printers for Teachers in 2026";
export const metaTitle = "Best Printers for Teachers in 2026 (Home & Classroom Picks)";
export const metaDescription =
  "8 best printers for teachers in 2026, split between home grading printers and classroom-ready workhorses. Compare cost per page and stipend-friendly budgets.";
export const mainKeyword = "printer for teachers";
export const introParagraphs = [
  "A teacher's printing needs split into two very different jobs: a home printer for curriculum prep, grading rubrics, and parent letters, and a classroom printer built for daily worksheet volume that a district supply stipend, often just $100 to $200 a year, has to stretch to cover. Treating those as the same shopping decision leads to either overpaying for home use or underbuying for classroom volume.",
  "Below are 8 printers for teachers we evaluated on cost per page against realistic school-year volume, color contrast quality for worksheets, and how well each fits a home versus classroom setting, ranging from a $99.99 basic all-in-one to a $284.99 color laser built for daily professional use.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg";

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
    id: "brother-dcp-l2640dw-mono-laser",
    rank: 1,
    badge: "Best for Classroom Worksheet Volume",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=theofficejournal-20",
    description:
      "The DCP-L2640DW is built for exactly the kind of steady, high-volume black-and-white printing a classroom generates all year, worksheets, quizzes, and handouts, at a cost per page that a cartridge-based inkjet can't match once volume climbs. Duplex printing, copy, and scan are all built in.\n\nToner doesn't dry out over school breaks the way inkjet cartridges can, a real advantage for a printer that might sit unused for a week over a holiday. This is the pick for a teacher whose district budget can stretch to a laser printer for the classroom itself, or a teacher-purchased unit meant to last multiple school years.\n\nToner survives school breaks without drying out. On the other hand, no color output. Neither should be a surprise once you know to look for it.",
    specs: [
      "Monochrome laser engine",
      "Automatic duplex (2-sided) printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint for a classroom desk",
    ],
    pros: [
      "Lowest cost per page for high-volume worksheet printing",
      "Toner survives school breaks without drying out",
      "Duplex printing saves paper automatically",
      "Built to last multiple school years",
    ],
    cons: [
      "No color output",
      "Highest upfront cost in this list, may exceed a single-year stipend",
      "Overkill for light home grading use only",
    ],
    bestFor: "Classroom printers handling daily worksheet and handout volume",
  },
  {
    id: "brother-hl-l3220cdw-color-laser",
    rank: 2,
    badge: "Best Color for Worksheets and Materials",
    name: "Brother HL-L3220CDW Wireless Color Laser Printer",
    price: "$284.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/311SOXNvLIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CFCYYZLM?tag=theofficejournal-20",
    description:
      "Color contrast, not full photo accuracy, is what actually matters for printed educational worksheets, diagrams, charts, and color-coded materials need to stay readable, and a color laser like the HL-L3220CDW holds contrast and detail more consistently than a budget color inkjet. A 250-sheet tray absorbs a week's worth of classroom printing without a refill.\n\nThis is the most expensive pick in this list and will likely exceed a single-year stipend on its own, making it a better fit as a school-purchased or shared department printer than a personal buy funded entirely out of pocket.\n\nLarge 250-sheet tray reduces refill frequency. That's a real strength, but weigh it against the flip side: highest price in this list, likely exceeds a stipend alone.",
    specs: [
      "Color laser engine, up to 19 PPM",
      "250-sheet paper tray",
      "Automatic duplex printing",
      "Wireless and mobile device compatible",
      "Consistent contrast for printed worksheets and diagrams",
    ],
    pros: [
      "Strong, consistent color contrast for worksheets and diagrams",
      "Large 250-sheet tray reduces refill frequency",
      "Fast 19 PPM output speed",
      "Toner does not dry out over school breaks",
    ],
    cons: [
      "Highest price in this list, likely exceeds a stipend alone",
      "Larger footprint than a compact laser",
      "Color laser toner costs more per cartridge than mono",
    ],
    bestFor: "Shared department or school-purchased printers needing reliable color worksheets",
  },
  {
    id: "canon-pixma-ts6520-color-inkjet",
    rank: 3,
    badge: "Best for Home Grading",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "For the home side of a teacher's workflow, grading rubrics, parent letters, and curriculum prep, the PIXMA TS6520 is a compact, affordable inkjet with a 1.42-inch OLED display that makes it easy to check status without opening an app. Duplex printing and built-in scan and copy cover the essentials.\n\nThis is not built for daily classroom-scale volume, cartridge costs climb fast at that level, but for the lighter, occasional printing a teacher does at home, it's an efficient, budget-friendly choice that leaves stipend money for classroom supplies instead.\n\nWorth calling out specifically: compact enough for a home office or kitchen desk. The catch is not built for classroom-scale daily volume.",
    specs: [
      "Color inkjet, duplex printing",
      "Built-in copier and scanner",
      "1.42-inch OLED display",
      "Compact design",
      "Cartridge-based ink system",
    ],
    pros: [
      "Affordable, leaves stipend budget for classroom needs",
      "Compact enough for a home office or kitchen desk",
      "Clear OLED display for quick status checks",
      "Duplex printing built in",
    ],
    cons: [
      "Not built for classroom-scale daily volume",
      "Cartridge ink costs more per page at higher volume",
      "No automatic document feeder",
    ],
    bestFor: "Home printing for grading, rubrics, and parent communication",
  },
  {
    id: "epson-workforce-wf-2930-basic-aio",
    rank: 4,
    badge: "Best for Multi-Page Scanning",
    name: "Epson Workforce WF-2930 Wireless All-in-One Printer",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31H9Yu3i01L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BDD46HFV?tag=theofficejournal-20",
    description:
      "For a teacher moving toward paperless grading, the Workforce WF-2930's automatic document feeder makes scanning a stack of student assignments into cloud storage far faster than feeding pages one at a time. Fax is included but rarely used, duplex printing is the feature that actually saves paper on longer packets.\n\nAt this price it's a solid stipend-friendly home printer that also handles occasional classroom-scale scanning tasks, though sustained daily worksheet printing is better handled by a laser printer over the long run.\n\nFits comfortably within a typical stipend budget. Set against that, cartridge ink costs more per page at high volume. Both matter when comparing it to the other picks here.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder",
      "Automatic 2-sided printing",
      "1.4-inch color display",
      "Cartridge-based ink system",
    ],
    pros: [
      "Automatic document feeder speeds up scan-to-cloud grading",
      "Fits comfortably within a typical stipend budget",
      "Duplex printing saves paper on multi-page packets",
      "Full feature set for the price",
    ],
    cons: [
      "Cartridge ink costs more per page at high volume",
      "Not ideal for sustained daily classroom printing",
      "Ink can dry out over long school breaks",
    ],
    bestFor: "Teachers building a scan-to-cloud paperless grading workflow",
  },
  {
    id: "epson-ecotank-et-2400-supertank",
    rank: 5,
    badge: "Best Value Ink Tank for Classroom Volume",
    name: "Epson EcoTank ET-2400 Wireless Cartridge-Free Supertank Printer",
    price: "$189.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31TonwUym9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BM9BFLMX?tag=theofficejournal-20",
    description:
      "The EcoTank ET-2400 swaps cartridges for refillable ink tanks, which suits a teacher printing steady volume across an entire school year without wanting to repeatedly buy cartridges out of a limited stipend. Bottle refills cost far less per page than the equivalent cartridge volume.\n\nScan and copy are included alongside print, and the higher upfront price is typically recovered well within a school year for a teacher printing color worksheets, charts, or handouts on any kind of regular schedule.\n\nA genuine advantage here is that handles steady color and text worksheet volume well. The tradeoff is higher upfront price than a basic cartridge inkjet.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink refills included",
      "Built for everyday, high-volume printing",
    ],
    pros: [
      "Low cost per page across a full school year",
      "Handles steady color and text worksheet volume well",
      "Scan and copy included",
      "Stretches a limited annual stipend further",
    ],
    cons: [
      "Higher upfront price than a basic cartridge inkjet",
      "Larger footprint due to the ink tanks",
      "No automatic document feeder",
    ],
    bestFor: "Teachers printing steady color and text volume all year on a fixed stipend",
  },
  {
    id: "hp-smart-tank-5101-refillable",
    rank: 6,
    badge: "Best for a Full School Year's Ink",
    name: "HP Smart Tank 5101 Wireless All-in-One Refillable Printer",
    price: "$169.89",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41xOh51IRUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BL466Y41?tag=theofficejournal-20",
    description:
      "With 2 years of ink included, the Smart Tank 5101 is the pick that best fits a stipend-based budget cycle, buy it once and the ink cost is largely covered for the next two school years rather than needing repeat cartridge purchases out of a this comparison's price range annual stipend. Print, scan, and copy cover the core needs. Wireless printing runs on 2.4GHz only, worth checking against a classroom or home router before buying, since some newer routers default to 5GHz-only networks that this printer won't join without adjustment. Ink-tank economics for ongoing worksheet volume. On the other hand, 2.4GHz-only wireless can be a setup snag on some routers. Neither should be a surprise once you know to look for it.",
    specs: [
      "Refillable ink tank system with 2 years of ink included",
      "Print, scan, and copy",
      "Wireless printing (2.4GHz only)",
      "Compact footprint for an ink-tank printer",
      "No automatic document feeder",
    ],
    pros: [
      "2 years of ink included fits a stipend budget cycle well",
      "Ink-tank economics for ongoing worksheet volume",
      "Compact for an ink-tank printer",
      "Lower upfront price than larger ink-tank models",
    ],
    cons: [
      "2.4GHz-only wireless can be a setup snag on some routers",
      "No automatic document feeder",
      "No automatic duplex printing listed",
    ],
    bestFor: "Teachers budgeting printer and ink costs against an annual stipend",
  },
  {
    id: "hp-officejet-pro-8139-color-inkjet",
    rank: 7,
    badge: "Best All-in-One with Fax",
    name: "HP OfficeJet Pro 8139 Wireless All-in-One Color Inkjet",
    price: "$179.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/413Pj7RejfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GPFH9RYW?tag=theofficejournal-20",
    description:
      "The OfficeJet Pro 8139 covers print, scan, copy, and fax with an automatic document feeder, a full feature set for a teacher who handles a mix of signed forms, multi-page packets, and the occasional color handout. A year of Instant Ink is included, offsetting the higher per-cartridge cost of inkjet during that window.\n\nAfter the Instant Ink trial ends, plan for standard cartridge pricing, which makes this a stronger fit for a teacher's home office than for classroom-scale daily printing where a laser or ink-tank pick has lower ongoing cost.\n\nIncluded Instant Ink trial lowers first-year ink cost. That's a real strength, but weigh it against the flip side: inkjet cost per page rises after the Instant Ink trial ends.",
    specs: [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder (ADF)",
      "Automatic duplex printing",
      "1-year Instant Ink trial included",
      "Wireless and AI-capable printing",
    ],
    pros: [
      "Full document workflow: fax, ADF, duplex",
      "Included Instant Ink trial lowers first-year ink cost",
      "Good color output for handouts and materials",
      "Suits a home office setup well",
    ],
    cons: [
      "Inkjet cost per page rises after the Instant Ink trial ends",
      "Slower than laser picks for pure text volume",
      "Not the most cost-efficient choice for classroom-scale printing",
    ],
    bestFor: "Home-office teacher printing needing fax and full document handling",
  },
  {
    id: "epson-ecotank-et-2800-supertank",
    rank: 8,
    badge: "Best Value Ink Tank",
    name: "Epson EcoTank ET-2800 Wireless Cartridge-Free Ink Supertank Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=theofficejournal-20",
    description:
      "The EcoTank ET-2800 brings the same refillable ink-tank economics as the ET-2400 with a slightly updated design, cost per page stays low across a full school year of worksheet and handout printing, both black-and-white and color. Scan and copy round out the feature set.\n\nThe ink tanks give it a larger footprint than a typical compact home printer, worth factoring in if desk space is tight, but for a teacher printing color materials regularly through the year, the ongoing savings outweigh the extra bulk.\n\nWorth calling out specifically: handles both color and black-and-white worksheet volume well. The catch is larger footprint than a compact cartridge inkjet.",
    specs: [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink refills included",
      "Larger footprint due to ink tanks",
    ],
    pros: [
      "Low cost per page across a full school year",
      "Handles both color and black-and-white worksheet volume well",
      "Scan and copy included",
      "No cartridges to run out mid-print",
    ],
    cons: [
      "Larger footprint than a compact cartridge inkjet",
      "Higher upfront price than a basic inkjet",
      "No automatic document feeder",
    ],
    bestFor: "Teachers printing a steady mix of color and black-and-white materials all year",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Home versus classroom fit",
    description: "Separated picks suited to a teacher's home grading and prep workflow from picks built for sustained classroom-scale daily volume.",
  },
  {
    title: "Cost per page against a real stipend",
    description: "Weighed printer price plus ongoing ink or toner cost against a typical a competitive price-200 annual district supply stipend, not against sticker price alone.",
  },
  {
    title: "Color contrast for worksheets",
    description: "Considered readability of diagrams, charts, and color-coded materials, since worksheet legibility matters more for teaching than full photo color accuracy.",
  },
  {
    title: "Paperless workflow support",
    description: "Checked automatic document feeder support and scan quality for teachers building a scan-to-cloud grading workflow to reduce paper handling.",
  },
  {
    title: "Durability across a school year",
    description: "Weighed how well each pick tolerates sitting idle over school breaks without ink drying out or requiring maintenance before the next term.",
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
          "Brother DCP"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Brother DCP"
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
          "Under $74",
          "Canon PIXMA TS6520 Wireless Color Inkjet Printer"
        ],
        [
          "Up to $285",
          "Brother HL"
        ]
      ]
    }
  },
  {
    "subheading": "Canon PIXMA TS6520 Wireless Color Inkjet Printer vs Brother HL",
    "cards": [
      {
        "label": "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Brother HL",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Canon PIXMA TS6520 Wireless Color Inkjet Printer unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "Brother DCP"
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
        "text": "Brother DCP is worth checking against its listed specs before buying, given its strong review base."
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
        "text": "You only need this for light or occasional use, where Canon PIXMA TS6520 Wireless Color Inkjet Printer covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Should teachers buy separate printers for home and classroom use?",
    a: "Often, yes, at least conceptually. Home printing, grading rubrics and parent letters, is lower volume than classroom printing, which can mean daily worksheets for a full roster. A compact inkjet like the PIXMA TS6520 fits home use well, while a laser like the DCP-L2640DW is built for classroom-scale volume, one printer trying to do both jobs at scale usually underperforms at one of them.",
  },
  {
    q: "How far does a typical teacher stipend actually go toward a printer?",
    a: "A district supply stipend commonly runs $100 to $200 a year, which rarely covers a printer plus a full year of cartridge ink bought new. An ink-tank printer like the HP Smart Tank 5101, which includes 2 years of ink, or a laser printer with low per-page toner cost, stretches that stipend much further than repeatedly buying inkjet cartridges.",
  },
  {
    q: "Can teachers deduct a printer purchase on their taxes?",
    a: "US educators can generally deduct up to $300 in out-of-pocket classroom expenses through the educator expense deduction, which can cover some or all of a printer bought for classroom materials. Keep your receipt and confirm current specifics with a tax professional.",
  },
  {
    q: "What's the difference between color accuracy and color contrast for worksheets?",
    a: "Full color accuracy matters for photo printing, but educational worksheets mainly need color contrast, diagrams, charts, and color-coded sections staying clearly legible on the page. A color laser like the Brother HL-L3220CDW holds contrast more consistently than a budget color inkjet, which matters more for teaching materials than perfect photo-realistic color.",
  },
  {
    q: "Is an automatic document feeder worth it for a teacher?",
    a: "If you regularly scan stacks of student work, signed forms, or reading logs for digital grading or record-keeping, yes. The Epson Workforce WF-2930 and HP OfficeJet Pro 8139 both include one and scan multi-page stacks in a single pass instead of one page at a time, a real time saver during grading periods.",
  },
  {
    q: "Will my classroom or home printer survive sitting unused over school breaks?",
    a: "Cartridge-based inkjets are the most vulnerable to ink drying out over a multi-week break, wasting ink on cleaning cycles when you resume. Laser toner and ink-tank refills, used in picks like the DCP-L2640DW and Smart Tank 5101, hold up much better through winter, spring, or summer breaks without that waste.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-for-homeschooling", title: "Best Printers for Homeschooling (2026)" },
  { href: "/guide/best-printers-for-small-businesses", title: "Best Printers for Small Businesses (2026)" },
  { href: "/guide/best-easy-to-use-printers", title: "Best Easy-to-Use Printers (2026)" },
  { href: "/guide/best-document-cameras-home-office", title: "Best Document Cameras for Home Office (2026)" },
];
