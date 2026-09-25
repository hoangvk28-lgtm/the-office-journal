// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a printers under $100 often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the printers under $100 holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this printers under $100 over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any printers under $100 you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A printers under $100 that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq = [
  {
    "q": "Is a printer under $100 worth buying, or should I spend more?",
    "a": "It depends on your print volume. For light, occasional home printing, a sub-$100 printer like the ones in this list is a fine choice. If you regularly print more than 100 pages a month, a pricier ink-tank printer often costs less over a full year once ink is factored in."
  },
  {
    "q": "What features do budget printers under $100 usually cut?",
    "a": "Automatic duplex printing, an automatic document feeder, and fax are the most commonly cut features at this price tier, and most budget inkjets use a single combined color cartridge instead of separate color tanks, which raises cost per color page."
  },
  {
    "q": "How long does a printer under $100 typically last?",
    "a": "Expect roughly 2 to 3 years of steady use from an entry-tier printer at this price, compared to 5 or more years for a mid-tier model. That's a reasonable tradeoff for the lower cost as long as you budget for eventual replacement."
  },
  {
    "q": "Is a laser printer worth it under $100?",
    "a": "Yes, if you print mostly text. The Canon imageCLASS LBP6030w has the highest upfront price in this list but the lowest cost per page thanks to toner, which can make it cheaper than an inkjet over a year of steady text printing."
  },
  {
    "q": "Why do so many budget printers use one combined color cartridge?",
    "a": "It's a common cost-cutting design at this price tier. A combined cartridge holds cyan, magenta, and yellow in one unit, so printing heavy amounts of a single color drains the whole cartridge faster than a separate-tank design would."
  }
];

export const guideSlug = "best-printers-under-100";

export const guideTitle = "The Best Printers Under $100: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg";

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
          "HP DeskJet 4355 Wireless All"
        ],
        [
          "",
          "HP DeskJet 4355 Wireless All"
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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
        ],
        [
          "",
          "Canon imageCLASS LBP6030w Compact Wireless Laser Printer"
        ]
      ]
    }
  },
  {
    "subheading": "Canon PIXMA TS4320 Wireless Color Inkjet Printer vs Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
    "cards": [
      {
        "label": "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to Canon PIXMA TS4320 Wireless Color Inkjet Printer unless your specific need calls for the pricier pick's extra headroom."
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
        "text": "You need real durability and feature depth for regular use, where Canon imageCLASS LBP6030w Compact Wireless Laser Printer's build gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You only need this for light or occasional use, where Canon PIXMA TS4320 Wireless Color Inkjet Printer covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "True first-year cost, not just sticker price",
    "description": "Weighed ink or toner cartridge cost against the purchase price, since a cheap budget-tier printer can cost more over a year of use than a pricier ink-tank alternative."
  },
  {
    "title": "",
    "description": "Checked which common features, duplex printing, ADF, fax, are cut at this price tier so buyers know exactly what they're giving up before purchase, not after."
  },
  {
    "title": "",
    "description": "Set expectations around the typical 2-3 year lifespan of an entry-tier printer at this price versus the 5-plus years a mid-tier model can offer."
  },
  {
    "title": "Verified current pricing under $100",
    "description": "Confirmed each pick's actual listed price stays under the ceiling this guide promises, rather than assuming a printer belongs on price alone."
  },
  {
    "title": "Fit for light-to-moderate home use",
    "description": "Assessed each pick against realistic home printing volume, occasional documents and photos, rather than sustained business-level output this price tier isn't built for."
  }
];

export const introParagraphs = [
  "A printer under $100 can absolutely handle everyday home or light office printing, but the price tag hides a real tradeoff most listings never explain: the sticker price is rarely the true first-year cost once ink is factored in, and features like duplex printing or an automatic document feeder are often cut entirely to hit this price point.",
  "Below are 5 printers we compared that sell under $100, ranked on true running cost, honest feature disclosure, and realistic lifespan expectations rather than sticker price alone."
];

export const lastUpdated = "2026-07-25";

export const mainKeyword = "printers under $100";

export const metaDescription = "How 5 printers under $100 compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Printers Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "hp-deskjet-4355-wireless-aio",
    "rank": 1,
    "badge": "Best Overall",
    "name": "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    "price": "$69.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    "description": "The DeskJet 4355 covers print, scan, and copy in one compact unit, with a 3-month Instant Ink trial included to soften the early cartridge cost that hits every budget inkjet eventually. Wireless setup connects it to a home network without extra cabling. At this price, expect a single combined color cartridge design common to entry printers, meaning printing any single color still draws down the whole cartridge. It's a solid fit for light home printing but plan for standard cartridge pricing once the trial ends. Instant Ink trial offsets early ink cost.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy",
      "3-month Instant Ink trial included",
      "Wireless printing",
      "Compact home-office footprint",
      "AI-capable printing features"
    ],
    "pros": [
      "Lowest-priced all-in-one in this list with scan and copy",
      "Instant Ink trial offsets early ink cost",
      "Simple wireless setup",
      "Compact enough for a small desk"
    ],
    "cons": [
      "Combined color cartridge raises cost once any single color runs low",
      "No automatic duplex printing",
      "Cartridge cost rises after the Instant Ink trial ends"
    ],
    "bestFor": "Light home printing where budget matters more than advanced features"
  },
  {
    "id": "canon-pixma-ts4320-duplex",
    "rank": 2,
    "badge": "Best for Double-Sided Printing",
    "name": "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    "price": "$64.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    "description": "The PIXMA TS4320 is the cheapest printer in this list that still includes automatic duplex printing, a feature many budget-tier printers cut entirely to hit their price point. That alone cuts paper use roughly in half for anyone regularly printing multi-page documents. Scan and copy round out the feature set in a compact design built for easy home setup. Expect the typical entry-tier lifespan of 2 to 3 years of steady use rather than the 5-plus years a mid-tier model can offer, a fair tradeoff at this price.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex (2-sided) printing",
      "Wireless printing",
      "Compact design",
      "Easy setup process"
    ],
    "pros": [
      "Automatic duplex printing at the lowest price in this list",
      "Full print, scan, copy function set",
      "Simple setup for first-time buyers",
      "1-year limited warranty included"
    ],
    "cons": [
      "Entry-tier build quality, expect 2-3 years of steady use",
      "Combined color cartridge design",
      "No automatic document feeder"
    ],
    "bestFor": "Home users who print double-sided documents regularly on a tight budget"
  },
  {
    "id": "canon-pixma-tr4720-fax-adf",
    "rank": 3,
    "badge": "Best for Document Feeding and Fax",
    "name": "Canon PIXMA TR4720 All-in-One Wireless Printer",
    "price": "$69.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09CDXKNB9?tag=theofficejournal-20",
    "description": "The PIXMA TR4720 is the rare budget-tier printer that keeps an automatic document feeder and built-in fax, two features most budget printers cut first. That makes it useful for anyone who still needs to scan or fax multi-page documents without paying for a mid-tier multifunction unit. Mobile printing rounds out a feature set that punches above its price, though as with any entry-tier printer, expect the tradeoffs common at this cost: a combined color cartridge and a shorter realistic lifespan than its price-plus model. Full document workflow support for home offices.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy, fax",
      "Automatic document feeder (ADF)",
      "Mobile printing support",
      "Wireless connectivity",
      "Compact home-office design"
    ],
    "pros": [
      "Includes ADF and fax, rare at this price",
      "Full document workflow support for home offices",
      "Wireless and mobile printing",
      "Competitive price for the feature set"
    ],
    "cons": [
      "Combined color cartridge design",
      "No automatic duplex printing",
      "Entry-tier build, expect 2-3 years of reliable use"
    ],
    "bestFor": "Home offices that still need fax and document feeding on a budget"
  },
  {
    "id": "canon-imageclass-lbp6030w-mono-laser",
    "rank": 4,
    "badge": "Best for Low Cost Per Page",
    "name": "Canon imageCLASS LBP6030w Compact Wireless Laser Printer",
    "price": "$87.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41GFXE7NdOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00K5UZO0Q?tag=theofficejournal-20",
    "description": "This is the only laser printer in this list, and it changes the true first-year cost math significantly since toner costs less per page than inkjet cartridges over time. It prints monochrome only, at up to 19 pages per minute, making it the fastest text printer here. It skips scan and copy entirely, print only, which is the tradeoff for staying with laser toner economics. For anyone printing mostly text documents rather than color images, the higher upfront price relative to the inkjets here can still work out cheaper by the end of year one. Fastest print speed here for text documents.",
    "specs": [
      "Monochrome laser engine, up to 19 PPM",
      "Print only, no scan or copy",
      "Wireless connectivity",
      "Compact footprint",
      "1-year limited warranty"
    ],
    "pros": [
      "Lowest true cost per page in this list thanks to toner",
      "Fastest print speed here for text documents",
      "Compact for a laser printer",
      "Toner doesn't dry out like idle inkjet cartridges"
    ],
    "cons": [
      "No scan or copy functions",
      "No color output",
      "Highest upfront price in this list, though often cheaper over a year of use"
    ],
    "bestFor": "Text-heavy home printing where first-year total cost matters most"
  },
  {
    "id": "canon-pixma-ts6520-oled-display",
    "rank": 5,
    "badge": "Best Display and Controls",
    "name": "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    "price": "$74.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    "description": "42-inch OLED display and a more intuitive control panel than the other inkjets in this list, useful for anyone who finds tiny budget-printer screens frustrating to navigate. Duplex printing is included alongside scan and copy in a compact design. This is a well-rounded pick for home use that balances usability against the usual budget-tier tradeoffs, a combined color cartridge and a shorter expected lifespan than mid-tier models, but the clearer display improves day-to-day use.",
    "specs": [
      "Color inkjet all-in-one: print, scan, copy",
      "Automatic duplex printing",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "Compact design"
    ],
    "pros": [
      "Clearest, most intuitive display in this list",
      "Duplex printing included",
      "Full print, scan, copy function set",
      "Compact footprint for a home desk"
    ],
    "cons": [
      "Combined color cartridge design",
      "Entry-tier lifespan expectation, 2-3 years of steady use",
      "No fax or document feeder"
    ],
    "bestFor": "Home users who want an easier-to-navigate control panel on a budget"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-printers-under-150",
    "title": "Best Printers Under $150 (2026)"
  },
  {
    "href": "/guide/best-printers-under-200",
    "title": "Best Printers Under $200 (2026)"
  },
  {
    "href": "/guide/best-budget-laser-printers",
    "title": "Best Budget Laser Printers (2026)"
  },
  {
    "href": "/guide/best-printers-for-home-use",
    "title": "Best Printers for Home Use (2026)"
  }
];

export const breadcrumbLabel = "Best Printers Under $100";
