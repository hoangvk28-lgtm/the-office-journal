export const guideSlug = "best-compact-printers-for-small-desks";
export const guideTitle = "8 Best Compact Printers for Small Desks in 2026";
export const metaTitle = "Best Compact Printers for Small Desks in 2026";
export const metaDescription =
  "8 best compact printers for small desks in 2026, compared on real footprint, paper tray capacity, and setup ease so you know exactly what fits.";
export const mainKeyword = "compact printer";
export const introParagraphs = [
  "A compact printer for a small desk needs to solve a math problem most listings never show you: a printer footprint of roughly 17 inches wide can eat well over half of a 30-inch-wide desk before you even open the paper tray. Compact inkjets, all-in-ones, and mono laser printers all measure compact differently, and a printer marketed as small can still be the wrong fit once the tray extends forward or the scanner lid needs headroom.",
  "Below are 8 compact printers we evaluated on footprint against common small-desk widths, paper tray capacity, print technology, and how straightforward wireless setup actually is out of the box, ranging from a $53.97 inkless travel printer to a $199.99 ink-tank all-in-one.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg";

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
    id: "canon-pixma-ts4320",
    rank: 1,
    badge: "Best Overall Compact Pick",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    description:
      "The PIXMA TS4320 packs printing, copying, and scanning into a compact inkjet body that sits comfortably on a 30-inch desk without dominating it. Duplex printing is built in, so double-sided documents don't require manually flipping pages, and the setup process pairs with the Canon PRINT app over wifi in a few guided steps.\n\nLike most compact inkjet AIOs, its paper tray holds well under a standard 500-sheet ream, so frequent small-batch users will refill more often than they would with a full-size printer. Letter and A4 are supported, but legal and tabloid sizes are not, which is worth checking before buying if you occasionally print larger documents.\n\nAuto duplex printing built in. That's a real strength, but weigh it against the flip side: small paper tray needs frequent refills.",
    specs: [
      "Compact color inkjet all-in-one",
      "Auto duplex (2-sided) printing",
      "Wireless with Canon PRINT mobile app",
      "Print, copy, scan",
      "Letter/A4 only, no legal or tabloid",
    ],
    pros: [
      "Genuinely compact footprint for a full AIO",
      "Auto duplex printing built in",
      "Straightforward Canon PRINT app pairing",
      "Lowest price in this list",
    ],
    cons: [
      "Small paper tray needs frequent refills",
      "No legal or tabloid paper size support",
      "Inkjet cartridges can dry out with infrequent use",
    ],
    bestFor: "Buyers who want the smallest reasonable footprint for a full print/copy/scan AIO",
  },
  {
    id: "canon-pixma-ts6520",
    rank: 2,
    badge: "Best Display & Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "The TS6520 adds a 1.42-inch OLED display and a more intuitive control panel on top of the same compact-desk-friendly footprint as Canon's smaller PIXMA models. That screen makes checking ink levels, wifi status, and print settings possible without opening a phone app every time.\n\nIt keeps the same duplex printing and compact inkjet AIO formula, so the tradeoffs are similar: a modest paper tray relative to a full-size printer, and letter/A4-only paper support. The OLED panel is the clearest reason to pick this over the TS4320 if you'd rather glance at a small screen than pull out your phone.\n\nWorth calling out specifically: intuitive control panel layout. The catch is still a small tray relative to a full ream.",
    specs: [
      "Compact color inkjet all-in-one",
      "1.42\" OLED display",
      "Auto duplex printing",
      "Wireless setup via Canon PRINT app",
      "Print, copy, scan",
    ],
    pros: [
      "Built-in OLED screen for quick status checks",
      "Intuitive control panel layout",
      "Auto duplex printing included",
      "Compact footprint suits a small desk",
    ],
    cons: [
      "Still a small tray relative to a full ream",
      "No legal or tabloid support",
      "Slightly pricier than the base PIXMA TS4320",
    ],
    bestFor: "Buyers who want on-printer status checks without opening a mobile app",
  },
  {
    id: "hp-deskjet-4355",
    rank: 3,
    badge: "Best for AI-Assisted Printing",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    description:
      "HP's DeskJet 4355 is a compact all-in-one with print, scan, and copy in one small-footprint body, plus a 3-month HP Instant Ink trial that softens the early cost of cartridges. The AI-capable label refers to HP's smart printing features that help route mobile print jobs and manage settings through the HP Smart app.\n\nFirst-time setup runs through the HP Smart app, and like most compact inkjet AIOs it favors footprint over paper capacity, so plan on refilling more often than a business-class printer. It's a straightforward pick if you're already comfortable pairing devices through a phone app.\n\nCompact body fits small desks easily. Set against that, small paper tray by full-size printer standards. Both matter when comparing it to the other picks here.",
    specs: [
      "Compact color inkjet all-in-one",
      "3-month HP Instant Ink trial included",
      "HP Smart app pairing",
      "Print, scan, copy",
      "AI-assisted print management features",
    ],
    pros: [
      "Includes a 3-month Instant Ink trial",
      "Compact body fits small desks easily",
      "HP Smart app guides first-time setup",
      "Competitive price for a full AIO",
    ],
    cons: [
      "Small paper tray by full-size printer standards",
      "Instant Ink subscription cost kicks in after the trial",
      "First-time app pairing can trip up non-tech users",
    ],
    bestFor: "Buyers who want a low upfront cost softened by a starter ink trial",
  },
  {
    id: "epson-ecotank-et-2800",
    rank: 4,
    badge: "Best for Low Cost-Per-Page (Larger Footprint)",
    name: "Epson EcoTank ET-2800 Wireless Color All-in-One Printer",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B096N8DN2H?tag=theofficejournal-20",
    description:
      "The EcoTank ET-2800 trades a cartridge system for refillable ink tanks, which cuts cost per page dramatically for anyone printing more than an occasional page. Worth noting honestly: the ink tank housing on the side of the printer body makes the ET-2800 noticeably larger than the cartridge-based compact printers in this list, so it is not the most compact option here even though it is genuinely small-desk-workable.",
    specs: [
      "Cartridge-free ink supertank system",
      "Wireless print, scan, copy",
      "Larger footprint than cartridge-based compact printers",
      "Higher upfront cost, lower cost per page",
      "Letter/A4 support",
    ],
    pros: [
      "Cartridge-free ink tanks cut long-term ink cost",
      "No cartridges drying out from infrequent printing",
      "Full print/scan/copy functionality",
      "Tanks hold enough for months of typical home use",
    ],
    cons: [
      "Largest footprint among the picks in this list",
      "Highest upfront price in this list",
      "Ink tank refills take longer than a cartridge swap",
    ],
    bestFor: "Buyers who print often enough that ink-tank economics beat cartridge cost, and have desk room to spare",
  },
  {
    id: "canon-pixma-tr4720",
    rank: 5,
    badge: "Best with Auto Document Feeder",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31nVDhGd67L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXC13T?tag=theofficejournal-20",
    description:
      "The PIXMA TR4720 is one of the few compact printers in this list with an auto document feeder, letting you scan or fax multi-page documents without lifting the lid and repositioning pages one at a time. Built-in fax support is included too, useful for home offices that still occasionally need it.\n\nIts footprint stays desk-friendly despite the added ADF hardware, and mobile printing setup follows the same Canon PRINT app pairing as the rest of the PIXMA line. If you rarely scan multi-page documents, the ADF is nice-to-have rather than essential, and the TS4320 covers the basics for less.\n\nA genuine advantage here is that built-in fax for occasional home-office use. The tradeoff is aDF adds bulk versus the simplest flatbed-only models.",
    specs: [
      "Auto document feeder (ADF) included",
      "Built-in fax",
      "Wireless with Canon PRINT app",
      "Compact all-in-one body",
      "Mobile printing supported",
    ],
    pros: [
      "Rare compact pick with an auto document feeder",
      "Built-in fax for occasional home-office use",
      "Compact footprint despite the added ADF hardware",
      "Same easy Canon PRINT app setup as other PIXMA models",
    ],
    cons: [
      "ADF adds bulk versus the simplest flatbed-only models",
      "Fax is a feature few buyers actually use in 2026",
      "Small paper tray typical of compact inkjets",
    ],
    bestFor: "Buyers who regularly scan or fax multi-page documents",
  },
  {
    id: "canon-pixma-ts3720",
    rank: 6,
    badge: "Best Budget Basic Pick",
    name: "Canon PIXMA TS3720 Wireless All-in-One Printer",
    price: "$59.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31-ZgpCGxiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1DV6FV5?tag=theofficejournal-20",
    description:
      "The PIXMA TS3720 strips things down to the basics: print, copy, scan, and wireless connectivity in a small, no-frills body built for basic home printing rather than heavier document workflows. It's the cheapest full all-in-one in this list, which makes it a sensible pick if you print occasionally and don't need an ADF, a screen, or duplex printing.\n\nBecause it skips the extra hardware found on pricier PIXMA models, it also has one of the smallest footprints here, a genuine advantage on a truly tight desk. Just budget for more frequent refills given its small tray, and expect basic single-sided printing rather than automatic duplex.\n\nOne of the smallest footprints here. On the other hand, no automatic duplex printing. Neither should be a surprise once you know to look for it.",
    specs: [
      "Basic compact color all-in-one",
      "Print, copy, scan",
      "Wireless via Canon PRINT app",
      "No auto duplex printing",
      "Small, no-frills footprint",
    ],
    pros: [
      "Cheapest full all-in-one in this list",
      "One of the smallest footprints here",
      "Simple setup with no extra features to configure",
      "Covers the print/copy/scan basics reliably",
    ],
    cons: [
      "No automatic duplex printing",
      "No display screen for status checks",
      "Basic feature set won't suit heavier document needs",
    ],
    bestFor: "Buyers who print occasionally and want the lowest-cost, smallest-footprint AIO",
  },
  {
    id: "brother-hl-l2405w",
    rank: 7,
    badge: "Best Compact Mono Laser",
    name: "Brother HL-L2405W Wireless Compact Monochrome Laser Printer",
    price: "$139.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31n0Y8gzpfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPL7HRQN?tag=theofficejournal-20",
    description:
      "Mono laser printers like the HL-L2405W can actually have a smaller physical footprint than compact inkjet AIOs, since they skip the scanner bed and ink cartridge housing entirely, a distinction most compact-printer guides never draw. Toner also doesn't dry out the way inkjet cartridges do, which matters if the printer sits idle between print jobs on a small desk.\n\nThis is a print-only device with no scan or copy function, so it fits buyers who mainly need fast, no-fuss text output rather than a full AIO. Wireless setup and mobile printing are supported, and it works with Alexa for voice-triggered print commands.\n\nToner never dries out from infrequent printing. That's a real strength, but weigh it against the flip side: no scanning or copying capability.",
    specs: [
      "Compact monochrome laser, print-only",
      "Wireless with mobile printing",
      "Alexa compatible",
      "No scan or copy function",
      "Toner does not dry out between uses",
    ],
    pros: [
      "Smaller footprint than most compact inkjet AIOs",
      "Toner never dries out from infrequent printing",
      "Fast mono laser output for text documents",
      "Alexa voice print support",
    ],
    cons: [
      "No scanning or copying capability",
      "Monochrome only, no color printing",
      "Higher upfront price than the compact inkjets here",
    ],
    bestFor: "Buyers who mainly print text and want the smallest true footprint plus toner that never dries out",
  },
  {
    id: "inkless-portable-thermal-printer",
    rank: 8,
    badge: "Most Compact (Specialty Inkless Pick)",
    name: "Inkless Portable Bluetooth Thermal Printer (MT610Pro)",
    price: "$53.97",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/51zPjelEtML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DZC56ZH4?tag=theofficejournal-20",
    description:
      "This inkless thermal printer is the smallest and lightest device in this list by a wide margin, small enough to tuck in a drawer rather than occupy permanent desk space. It supports full 8.5 x 11-inch US Letter and A4 pages via 300 DPI thermal printing and pairs over Bluetooth with iOS, Android, and laptops.\n\nBecause it uses heat-sensitive thermal paper instead of ink or toner, print quality and longevity are not comparable to an inkjet or laser printer, and this is best framed honestly as a specialty travel and light-duty pick rather than a primary home-office printer. If your desk truly cannot spare any footprint, this is the pick, but a Canon PIXMA or Brother laser will serve better as a daily-use primary printer.\n\nWorth calling out specifically: genuinely portable for travel or car use. The catch is requires proprietary thermal paper, not standard copy paper.",
    specs: [
      "Inkless thermal printing, 300 DPI",
      "Supports 8.5 x 11\" Letter and A4",
      "Bluetooth pairing with iOS/Android/laptop",
      "Smallest, lightest device in this list",
      "Requires special thermal paper, not standard copy paper",
    ],
    pros: [
      "By far the smallest footprint of any pick here",
      "Genuinely portable for travel or car use",
      "No ink or toner cartridges required",
      "Simple Bluetooth pairing",
    ],
    cons: [
      "Requires proprietary thermal paper, not standard copy paper",
      "Print quality trails inkjet or laser output",
      "Not a realistic primary printer for daily home-office volume",
    ],
    bestFor: "Buyers who need occasional printing in a space with zero room for a standard printer",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Footprint vs. small-desk width",
    description: "Compared each printer's stated dimensions against common small-desk widths of 24-36 inches to flag which picks realistically leave room for a keyboard and monitor.",
  },
  {
    title: "Paper tray capacity honesty",
    description: "Checked tray capacity against a standard 500-sheet ream rather than assuming compact means adequate, since most compact printers hold well under a full ream.",
  },
  {
    title: "Print technology fit",
    description: "Weighed inkjet AIO, ink-tank, mono laser, and thermal designs against real footprint and cost-per-page differences rather than treating all compact printers as interchangeable.",
  },
  {
    title: "Wireless setup difficulty",
    description: "Considered how each printer pairs over wifi or Bluetooth, since app-based pairing (Canon PRINT, HP Smart) is not always frictionless for first-time users.",
  },
  {
    title: "Value for price",
    description: "Weighed upfront price against paper size support, duplex printing, and added hardware like an ADF or display screen to judge whether the extra cost buys real function.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a compact printer often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the compact printer holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a genuinely useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this compact printer over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "A high star rating built on a small number of reviews carries meaningfully less confidence than a slightly lower rating built on a large, established review base, since a small sample can be skewed by a handful of early, enthusiastic buyers before any longer-term issues would show up in later reviews.\n\nThis matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any compact printer you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A compact printer that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
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
          "Under $54",
          "Inkless Portable Bluetooth Thermal Printer"
        ],
        [
          "Up to $200",
          "Epson EcoTank ET"
        ]
      ]
    }
  },
  {
    "subheading": "Inkless Portable Bluetooth Thermal Printer vs Epson EcoTank ET",
    "cards": [
      {
        "label": "Inkless Portable Bluetooth Thermal Printer",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Epson EcoTank ET",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Inkless Portable Bluetooth Thermal Printer unless your specific need genuinely calls for the pricier pick's extra headroom."
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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
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
        "text": "Canon PIXMA TS4320 Wireless Color Inkjet Printer is worth checking against its listed specs before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real durability and feature depth for regular use, where Epson EcoTank ET's build gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only need this for light or occasional use, where Inkless Portable Bluetooth Thermal Printer covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How do I know if a compact printer will actually fit my small desk?",
    a: "Measure your actual available desk width, not just the space between your keyboard and monitor, then compare it against the printer's listed width plus 2-4 inches for the paper tray or output tray extending forward. A printer around 17 inches wide, like most of the AIOs in this list, needs meaningfully more clearance than its boxed dimensions suggest once it's in use.",
  },
  {
    q: "Is a compact inkjet or a compact mono laser printer smaller?",
    a: "It depends on the model, but mono laser printers like the Brother HL-L2405W can actually have a smaller physical footprint than compact inkjet all-in-ones, since they skip the scanner bed and ink cartridge housing entirely. If you don't need scanning, a laser-only printer is worth comparing against a compact AIO on footprint alone, not just print quality.",
  },
  {
    q: "Why do compact printers need paper refills so often?",
    a: "Compact printers trade paper tray size for a smaller body, so most hold well under a standard 500-sheet ream, sometimes closer to 60-100 sheets. If you print in larger batches regularly, budget for more frequent refills as the tradeoff for the smaller footprint, or consider a printer with a larger tank like the Epson EcoTank ET-2800.",
  },
  {
    q: "Do compact printers support legal or tabloid-size paper?",
    a: "Generally no. Every pick in this list supports Letter and A4 paper sizes only, with no legal or tabloid support. If you occasionally need to print larger documents, plan to use a print shop or a different printer for those jobs rather than expecting a compact printer to cover it.",
  },
  {
    q: "Is first-time wireless setup difficult on these printers?",
    a: "It's rarely instant. Canon and HP models pair through their respective mobile apps (Canon PRINT, HP Smart), which typically involves creating an account, connecting to wifi, and running a test print, usually about 10 minutes for a first-time setup. The inkless thermal printer pairs over Bluetooth directly and tends to be the fastest to get running.",
  },
  {
    q: "Are ink-tank printers worth the larger footprint on a small desk?",
    a: "If you print regularly, yes, the Epson EcoTank ET-2800's refillable ink tanks meaningfully lower cost per page compared to cartridge-based printers, and tanks don't dry out the way idle cartridges can. But it is honestly the largest printer in this list due to the tank housing, so it's only the right tradeoff if you have a bit of extra desk width to spare.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-printers-for-home-offices", title: "Best Small Printers for Home Offices (2026)" },
  { href: "/guide/best-printers-for-small-spaces", title: "Best Printers for Small Spaces (2026)" },
  { href: "/guide/best-small-printer-stands", title: "Best Small Printer Stands (2026)" },
];
