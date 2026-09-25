// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a printers under $200 often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the printers under $200 holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this printers under $200 over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any printers under $200 you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A printers under $200 that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq = [
  {
    "q": "Should I buy an inkjet all-in-one or an ink-tank printer at $200?",
    "a": "It depends on print volume. An ink-tank printer like the Epson EcoTank ET-2800 costs more upfront but drops cost per page significantly if you print more than roughly 100 pages a month. A cartridge inkjet like the HP OfficeJet Pro 8125e costs less upfront and suits lighter, occasional printing."
  },
  {
    "q": "Is the Brother DCP-L2640DW really under $200?",
    "a": "99, slightly over this guide's $200 ceiling. We include it as a clearly flagged stretch pick because its toner economics and duplex printing can be worth the extra cost for high-volume text printing, not as a claim that it fits strictly under $200."
  },
  {
    "q": "Do printers at this price include an automatic document feeder?",
    "a": "In this list, the Epson EcoTank ET-4800 and HP OfficeJet Pro 8125e include an ADF, while the other picks do not. Check the spec sheet directly if document feeding matters to your workflow."
  },
  {
    "q": "Which ink-tank printer at this tier is the cheapest?",
    "a": "00 is the least expensive ink-tank pick in this list, though it skips the ADF and fax features found on the pricier Epson EcoTank ET-4800."
  },
  {
    "q": "Why does the Epson ET-4800 cost the same as the ET-2800 despite having more features?",
    "a": "The ET-4800 adds an automatic document feeder, fax, and Ethernet on top of the same ink-tank system as the ET-2800, so there's no price penalty for choosing the more feature-complete model."
  }
];

export const guideSlug = "best-printers-under-200";

export const guideTitle = "The Best Printers Under $200, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "HP DeskJet 4355 Wireless All"
        ],
        [
          "",
          ""
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
        "label": "",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to HP DeskJet 4355 Wireless All unless your specific need calls for the pricier pick's extra headroom."
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Buyer Specifically",
    "cards": [
      {
        "label": "",
        "text": "Clear, specific dimensions or capacity and a real, established review history, not just marketing language."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need real durability and feature depth for regular use, where Brother DCP's build gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You only need this for light or occasional use, where HP DeskJet 4355 Wireless All covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Inkjet all-in-one vs entry ink-tank tradeoff",
    "description": "Compared print speed and upfront cost of cartridge-based inkjets against the long-run cost-per-page advantage of entry ink-tank models available at this tier."
  },
  {
    "title": "Verified current pricing near the $200 ceiling",
    "description": "Checked each pick's actual listed price against the ceiling, flagging any pick that ran over rather than silently misstating its price tier."
  },
  {
    "title": "",
    "description": "Benchmarked duplex printing, automatic document feeder, and wireless support against price, since these features are common but still not universal."
  },
  {
    "title": "Fit for household vs home-office workload",
    "description": "Separated picks suited to light occasional home printing from those built for a busier home-office document workflow."
  },
  {
    "title": "True cost per page across ink systems",
    "description": "Weighed cartridge, ink-tank, and toner running costs directly against each other, since all three technologies appear in this price tier."
  }
];

export const introParagraphs = [
  "At $200 you can finally choose between a well-specced inkjet all-in-one and an entry-level ink-tank printer, a real tradeoff between upfront price, print speed, and long-run ink cost that lower price tiers don't offer. Duplex printing and an automatic document feeder start showing up more often here too, though still not on every model.",
  "Below are 7 printers we compared at this price tier, ranked on true cost per page, feature completeness, and how well each one fits either occasional home use or a busier home office."
];

export const lastUpdated = "2026-07-25";

export const mainKeyword = "printers under $200";

export const metaDescription = "We compared 7 printers under $200 on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Printers Under $200 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "epson-ecotank-et-2800-supertank",
    "rank": 1,
    "badge": "Best Ink-Tank Value",
    "name": "Epson EcoTank ET-2800 Wireless Color All-in-One Supertank Printer",
    "price": "$199.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096N8DN2H?tag=theofficejournal-20",
    "description": "The ET-2800 brings genuine ink-tank economics right at the ceiling, replacing disposable cartridges with refillable tanks that cut cost per page dramatically for anyone printing regularly. Scan and copy are included alongside print in a compact home-office design. This is the pick that makes the strongest case against a cheaper cartridge printer once you run the math on a year of moderate-to-heavy home printing, the higher upfront cost pays back steadily as cartridge refills would have added up.",
    "specs": [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink refills included",
      "Compact home-office design"
    ],
    "pros": [
      "Lowest ongoing cost per page in this list",
      "Scan and copy included",
      "No cartridges to run dry mid-print",
      "fits under the $200 ceiling"
    ],
    "cons": [
      "Higher upfront cost than the cartridge inkjets in this list",
      "No fax or automatic document feeder",
      "Larger footprint than a compact cartridge inkjet"
    ],
    "bestFor": "Households or small offices printing regularly who want the lowest long-run ink cost"
  },
  {
    "id": "epson-ecotank-et-4800-supertank-adf",
    "rank": 2,
    "badge": "Best Ink-Tank with ADF and Fax",
    "name": "Epson EcoTank ET-4800 Wireless All-in-One Supertank Printer",
    "price": "$199.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31G4p897b8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P45LR5T?tag=theofficejournal-20",
    "description": "The ET-4800 matches the ET-2800's ink-tank economics but adds an automatic document feeder, fax, and Ethernet connectivity, features that matter more for a home office handling multi-page paperwork than a household printing occasionally. It's built for a busier workload. At the same price as the simpler ET-2800, this is the better pick whenever the extra document-handling features are actually useful, since there's no cost penalty for the added functionality. ADF and fax included at no extra cost.",
    "specs": [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder (ADF)",
      "Print, scan, copy, and fax",
      "Ethernet and wireless connectivity",
      "Built for home office workloads"
    ],
    "pros": [
      "Same ink-tank economics as the ET-2800 with more features",
      "ADF and fax included at no extra cost",
      "Ethernet option for a stable wired connection",
      "fits under the $200 ceiling"
    ],
    "cons": [
      "Larger footprint than the simpler ET-2800",
      "Overkill if you don't need ADF or fax",
      "Higher upfront cost than the cartridge inkjets in this list"
    ],
    "bestFor": "Home offices needing ink-tank economics plus document feeding and fax"
  },
  {
    "id": "hp-smart-tank-5101-under200",
    "rank": 3,
    "badge": "Best Compact Ink-Tank",
    "name": "HP Smart Tank 5101 Wireless All-in-One Refillable Printer",
    "price": "$169.89",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41xOh51IRUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BL466Y41?tag=theofficejournal-20",
    "description": "The Smart Tank 5101 brings ink-tank savings to a smaller footprint than the Epson EcoTank picks, with 2 years of ink included in the box, a meaningful early cost offset. Print, scan, and copy cover the core needs of most households.\n\n4GHz only, worth checking against your router setup before buying since some newer routers default to a 5GHz-only guest network that this printer won't join without adjustment.\n\nCompact for an ink-tank printer. 4GHz-only wireless can be a setup snag on some routers.",
    "specs": [
      "Refillable ink tank system with 2 years of ink included",
      "Print, scan, and copy",
      "Wireless printing (2.4GHz only)",
      "Compact footprint versus larger ink-tank models",
      "No fax or automatic document feeder"
    ],
    "pros": [
      "2 years of ink included lowers early running cost",
      "Compact for an ink-tank printer",
      "Comfortably under the $200 ceiling",
      "Low cost per page once the included ink is factored in"
    ],
    "cons": [
      "2.4GHz-only wireless can be a setup snag on some routers",
      "No fax or document feeder",
      "No automatic duplex printing listed"
    ],
    "bestFor": "Buyers wanting ink-tank savings in a smaller footprint with ink included upfront"
  },
  {
    "id": "canon-megatank-g3270-under200",
    "rank": 4,
    "badge": "Best for Photo and Document Mix",
    "name": "Canon MegaTank G3270 All-in-One Wireless Inkjet Printer",
    "price": "$159.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31jPKfRqWSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BSMSYM9N?tag=theofficejournal-20",
    "description": "Canon's MegaTank system covers print, scan, and copy with refillable ink tanks at a lower price than the Epson EcoTank picks in this list, a genuine low-cost entry into ink-tank ownership. It handles mixed document and photo printing reasonably well for a tank-based system. This is worth considering if you want ink-tank economics but don't need the fax or ADF features the pricier Epson ET-4800 includes, saving on cost while keeping the core cost-per-page benefit.",
    "specs": [
      "MegaTank refillable ink system",
      "Print, scan, and copy",
      "Wireless printing",
      "Home-use design",
      "Lower entry price than other ink-tank picks here"
    ],
    "pros": [
      "Cheapest ink-tank pick in this list",
      "Handles mixed document and photo printing",
      "Low ongoing cost per page",
      "Comfortable margin under the $200 ceiling"
    ],
    "cons": [
      "No fax or automatic document feeder",
      "Slower than dedicated cartridge inkjets for quick single documents",
      "Larger footprint than a compact cartridge printer"
    ],
    "bestFor": "Budget-conscious buyers wanting ink-tank economics without paying for ADF or fax"
  },
  {
    "id": "hp-officejet-pro-8125e-under200",
    "rank": 5,
    "badge": "Best Cartridge All-in-One with ADF",
    "name": "HP OfficeJet Pro 8125e Wireless All-in-One Color Inkjet Printer",
    "price": "$99.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/418KMpgzGBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CT8ZJ7ZC?tag=theofficejournal-20",
    "description": "The OfficeJet Pro 8125e packs an automatic document feeder and duplex printing into a cartridge-based inkjet well under the ceiling, leaving significant budget room compared to the ink-tank picks in this list. A 3-month Instant Ink trial helps offset early cartridge cost. This is the pick for anyone who wants ADF and duplex without committing to ink-tank ownership, though cartridge costs will run higher per page over time than any of the tank-based options here. Instant Ink trial softens early cartridge cost.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic document feeder (ADF)",
      "Automatic duplex printing",
      "3-month Instant Ink trial included",
      "AI-enabled printing features"
    ],
    "pros": [
      "ADF and duplex printing at less than half the $200 ceiling",
      "Instant Ink trial softens early cartridge cost",
      "Full print, scan, copy function set",
      "Leaves the most budget room in this list"
    ],
    "cons": [
      "Cartridge cost per page runs higher than ink-tank picks over time",
      "No fax",
      "Cartridge ink can dry out with infrequent use"
    ],
    "bestFor": "Buyers who want ADF and duplex printing without ink-tank ownership"
  },
  {
    "id": "hp-deskjet-4355-under200",
    "rank": 6,
    "badge": "Best for Light Use",
    "name": "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    "price": "$69.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    "description": "The DeskJet 4355 is the simplest, lowest-priced pick in this list, covering print, scan, and copy for light home use with a 3-month Instant Ink trial included. It leaves the most budget headroom under the ceiling of any option here. For a household that prints only occasionally, there's little reason to spend closer to the ceiling, this covers the basics reliably at a fraction of the price.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact footprint",
      "AI-capable printing features"
    ],
    "pros": [
      "Lowest price in this list by a wide margin",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Frees up the most budget for other office needs"
    ],
    "cons": [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Best suited to light, occasional printing only"
    ],
    "bestFor": "Light home printing where saving budget matters most"
  },
  {
    "id": "brother-dcp-l2640dw-stretch-pick",
    "rank": 7,
    "badge": "Worth the Stretch (Slightly Over Budget)",
    "name": "Brother DCP-L2640DW Wireless Compact Monochrome Laser Printer",
    "price": "$209.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPLFTPCV?tag=theofficejournal-20",
    "description": ", this Brother laser runs slightly over the ceiling of this guide, so we're including it as a stretch pick rather than claiming it fits the budget outright. For anyone printing high volumes of black-and-white text, duplex printing, copy, and scan built into one compact laser unit can be worth the extra ten dollars. Toner-based printing keeps cost per page low compared to every inkjet in this list, and duplex printing cuts paper use automatically. If your printing is almost entirely text and you don't mind stepping just past its price this is the strongest text-focused option here.",
    "specs": [
      "Monochrome laser engine",
      "Automatic duplex (2-sided) printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint"
    ],
    "pros": [
      "Low cost per page for high-volume text printing",
      "Duplex printing built in",
      "Copy and scan included, unlike the pure-laser picks in this list",
      "Toner doesn't dry out during slow weeks"
    ],
    "cons": [
      "Priced slightly above this guide's $200 ceiling",
      "No color output",
      "Larger footprint than the compact cartridge inkjets here"
    ],
    "bestFor": "High-volume text printing where a slightly-over-budget laser pays off in running cost"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-printers-under-150",
    "title": "Best Printers Under $150 (2026)"
  },
  {
    "href": "/guide/best-printers-under-100",
    "title": "Best Printers Under $100 (2026)"
  },
  {
    "href": "/guide/best-printers-for-small-businesses",
    "title": "8 Best Printers for Small Businesses (2026)"
  },
  {
    "href": "/guide/best-printers-for-home-offices",
    "title": "Best Printers for Home Offices (2026)"
  }
];

export const breadcrumbLabel = "Best Printers Under $200";
