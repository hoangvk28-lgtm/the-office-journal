// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
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
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this printer over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any printer you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A printer that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq = [
  {
    "q": "What is the maximum cardstock weight a home printer can handle?",
    "a": "Most standard trays top out around 65lb to 80lb cardstock, while a rear straight-through feed slot, when a printer has one, can often handle up to 100lb to 110lb because the paper travels in a straight line rather than curving through rollers. None of the printers in this list advertise a dedicated heavy-media slot, so 80lb is a practical ceiling for reliable results."
  },
  {
    "q": "Does laser or inkjet work better for cardstock?",
    "a": "Inkjet generally has an edge for cardstock because it uses a cooler mechanical process, avoiding the heat-warping risk that a laser printer's fuser can cause on stock over roughly 80lb. Laser, like the Brother DCP-L2640DW in this list, still works well for lighter black-and-white cardstock where crisp, smudge-proof text matters more than color."
  },
  {
    "q": "Why does my printer jam or refuse to pull cardstock?",
    "a": "Some printers have an internal paper-thickness lever or gap setting that needs adjusting before thick stock will feed correctly, and skipping this step is a common cause of jams. Also check that you're using the correct tray or feed path, since a curved standard tray struggles more with thick stock than a straight-through path."
  },
  {
    "q": "Do I need a special printer setting for cardstock?",
    "a": "Yes, selecting the cardstock or heavy-media option in your print driver instead of plain paper adjusts ink volume and drying behavior appropriately. Skipping this step, especially on inkjet, can result in under-saturated colors or ink that takes longer to dry and smudges when stacked."
  },
  {
    "q": "Is an ink-tank printer worth it for cardstock printing?",
    "a": "If you print cardstock regularly, yes. Cardstock projects use more ink per page than plain paper due to larger solid-color areas, and a refillable ink-tank printer like the EcoTank ET-2800 or MegaTank G3270 keeps per-page cost low compared to cartridge-based inkjets, which get expensive fast at volume."
  },
  {
    "q": "Should I test cardstock before printing a full batch of invitations?",
    "a": "Yes, always print one test sheet of your specific cardstock first. Feed reliability, color output, and drying time can vary by texture, coating, and humidity even on printers rated to handle cardstock well, and a single test sheet catches problems before they cost you a whole batch of paper."
  }
];

export const guideSlug = "best-printers-for-cardstock";

export const guideTitle = "The Best Printers for Cardstock: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg";

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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
        ],
        [
          "",
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
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
          ""
        ]
      ]
    }
  },
  {
    "subheading": "Canon PIXMA TS4320 Wireless Color Inkjet Printer vs Brother DCP",
    "cards": [
      {
        "label": "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "",
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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer"
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
        "text": "You only need this for light or occasional use, where Canon PIXMA TS4320 Wireless Color Inkjet Printer covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Print engine type and warping risk",
    "description": "Weighed inkjet's cooler mechanical process against laser's heated fuser, since fuser heat is the main cause of cardstock warping on heavier stock."
  },
  {
    "title": "Feed path and tray design",
    "description": "Checked whether each model offers a standard tray only or additional straight-through feed options, since curved feed paths are more prone to jamming on thick stock."
  },
  {
    "title": "Ink or toner economics at cardstock volume",
    "description": "Compared cartridge, ink-tank, and toner running costs, since cardstock projects use more ink or toner per page than plain paper printing."
  },
  {
    "title": "Media-type control and duplex support",
    "description": "Considered whether a model makes it easy to select the correct media type in the driver and whether duplex printing is available for two-sided cards."
  },
  {
    "title": "Honest fit for cardstock vs general use",
    "description": "Distinguished true cardstock-capable inkjets from general all-in-one printers included as budget alternatives, rather than presenting every pick as a specialist."
  }
];

export const introParagraphs = [
  "Printing on cardstock is not the same task as printing on plain paper, and a printer that handles standard 20lb office paper without issue can jam, smudge, or simply refuse to pull heavier 65lb to 110lb stock through its rollers. The right pick depends on how the printer feeds thick paper, whether it uses ink or toner, and how far you can adjust the print head clearance for very heavy stock.",
  ""
];

export const lastUpdated = "2026-07-25";

export const mainKeyword = "printer for cardstock";

export const metaDescription = "How 8 printers for cardstock compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Printers for Cardstock (2026)";

export const products: GuideProduct[] = [
  {
    "id": "canon-pixma-ts4320-cardstock",
    "rank": 1,
    "badge": "Best Budget Pick for Light Cardstock",
    "name": "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    "price": "$64.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    "description": "The PIXMA TS4320 is a compact color inkjet that handles occasional cardstock projects like greeting cards and light invitations through its standard tray, with duplex printing for two-sided cards. Inkjet's mechanical print process is gentler on thick stock than a laser fuser, so cards come out flat rather than warped.\n\nIt is a general-purpose home printer rather than a cardstock specialist, so buyers running frequent heavy stock jobs should expect to check the manual for the maximum supported weight before loading anything past standard cardstock. At this price it is best treated as a starter option for occasional craft projects, not a daily invitation-printing workhorse.",
    "specs": [
      "Color inkjet, duplex printing",
      "Standard paper tray feed",
      "Copier and scanner built in",
      "Compact home printer footprint",
      "Wireless printing"
    ],
    "pros": [
      "Lowest price in this list",
      "Inkjet avoids the heat-warping risk of laser on thick stock",
      "Duplex printing for two-sided cards",
      "Easy setup for occasional use"
    ],
    "cons": [
      "No rear straight-feed slot for heavier stock",
      "Not built for high-volume cardstock runs",
      "General AIO printer rather than a cardstock specialist"
    ],
    "bestFor": "Occasional greeting cards and light invitations on a budget"
  },
  {
    "id": "canon-pixma-tr4720-cardstock",
    "rank": 2,
    "badge": "Best with Auto Document Feeder",
    "name": "Canon PIXMA TR4720 All-in-One Wireless Printer",
    "price": "$69.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09CDXKNB9?tag=theofficejournal-20",
    "description": "The PIXMA TR4720 adds an automatic document feeder to the same basic inkjet formula, useful if cardstock printing is only part of your workload and you also scan or copy multi-page documents regularly. It handles light to medium cardstock through its main tray without excessive smudging thanks to inkjet's cooler print process.\n\nLike other general AIO printers in this list, it is not marketed as a dedicated cardstock or specialty-media printer, so buyers planning heavier stock projects like textured invitation cardstock should stick to lighter weights or verify compatibility before a large print run.\n\nInkjet handles light cardstock without warping.",
    "specs": [
      "Color inkjet all-in-one with ADF",
      "Mobile printing and built-in fax",
      "Standard tray paper feed",
      "Compact home office design",
      "Wireless connectivity"
    ],
    "pros": [
      "Auto document feeder useful beyond cardstock projects",
      "Inkjet handles light cardstock without warping",
      "Affordable entry price",
      "Fax included for document workflows"
    ],
    "cons": [
      "No dedicated rear feed for thick stock",
      "General AIO, not a cardstock specialist",
      "Best kept to lighter cardstock weights"
    ],
    "bestFor": "Buyers who need light cardstock printing plus document scanning"
  },
  {
    "id": "hp-deskjet-4355-cardstock",
    "rank": 3,
    "badge": "Best for Mixed Photo and Card Projects",
    "name": "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    "price": "$69.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    "description": "The DeskJet 4355 covers print, scan, and copy in a small chassis and is a reasonable choice for buyers splitting their cardstock projects with occasional photo printing, since both benefit from inkjet's smoother color gradients. A 3-month Instant Ink trial is included, though cardstock printing typically uses more ink per page than plain paper.\n\nAs with the other budget inkjets here, it is a general-purpose AIO rather than a printer engineered specifically for heavy stock, so buyers should stay within light to medium cardstock weights and check the printer's manual for its tray thickness limit before a large batch job.\n\nIncluded Instant Ink trial offsets initial ink cost.",
    "specs": [
      "Color inkjet all-in-one",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Standard tray feed",
      "Compact home design"
    ],
    "pros": [
      "Good for mixed photo and cardstock projects",
      "Included Instant Ink trial offsets initial ink cost",
      "Inkjet output avoids laser warping on thick stock",
      "Simple wireless setup"
    ],
    "cons": [
      "No rear straight-feed slot mentioned",
      "General AIO printer, not a cardstock specialist",
      "Ink cost rises after the trial period ends"
    ],
    "bestFor": "Buyers who want one printer for both cardstock crafts and photos"
  },
  {
    "id": "canon-pixma-ts6520-cardstock",
    "rank": 4,
    "badge": "Best with OLED Display",
    "name": "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    "price": "$74.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    "description": "42-inch OLED display for easier menu navigation and duplex printing for two-sided cards and invitations. Its inkjet engine handles light cardstock cleanly, and the intuitive control panel makes it easier to select media type settings when switching between plain paper and cardstock.\n\nMedia type settings matter more than most buyers realize, since selecting the correct paper type in the driver adjusts ink volume and drying behavior for thicker stock. It remains a general home AIO printer rather than a specialty cardstock printer, so heavier stock beyond typical greeting-card weight is not guaranteed to feed reliably.",
    "specs": [
      "Color inkjet, duplex printing",
      "1.42-inch OLED display",
      "Copier and scanner included",
      "Compact design with intuitive controls",
      "Wireless printing"
    ],
    "pros": [
      "OLED display simplifies selecting the correct media type",
      "Duplex printing for two-sided cards",
      "Inkjet avoids heat-warping thick stock",
      "1-year limited warranty included"
    ],
    "cons": [
      "Still a general AIO, not a dedicated cardstock printer",
      "No confirmed rear straight-feed slot",
      "Best for light to medium cardstock only"
    ],
    "bestFor": "Buyers who want easier media-type control for occasional card projects"
  },
  {
    "id": "brother-dcp-l2640dw-cardstock",
    "rank": 5,
    "badge": "Best Laser Option (Light Stock Only)",
    "name": "Brother DCP-L2640DW Wireless Compact Monochrome Laser",
    "price": "$209.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CPLFTPCV?tag=theofficejournal-20",
    "description": "The DCP-L2640DW is a monochrome laser printer, and laser printers use a heated fuser to bond toner to paper, which means cardstock run through a laser engine carries a real risk of heat warping compared to inkjet's cooler process. It suits buyers printing black-and-white cardstock inserts, program booklets, or index-card-style materials where color is not needed.\n\nThis is the pick to choose only if you specifically want laser's crisp, smudge-proof text on lighter cardstock weights and understand the warping tradeoff on heavier stock. For color cardstock projects like invitations, one of the inkjet or ink-tank picks in this list is the safer choice.",
    "specs": [
      "Monochrome laser engine",
      "Automatic duplex printing",
      "Copy and scan built in",
      "Wireless and mobile printing",
      "Compact footprint"
    ],
    "pros": [
      "Crisp, smudge-proof black text on light cardstock",
      "Duplex printing built in",
      "Toner does not smear like wet ink",
      "Reliable for text-heavy card inserts"
    ],
    "cons": [
      "Heat from the laser fuser risks warping thicker cardstock",
      "No color output",
      "Higher price than the inkjet picks in this list"
    ],
    "bestFor": "Black-and-white cardstock inserts and booklets where warping risk on lighter stock is acceptable"
  },
  {
    "id": "epson-ecotank-et-2800-cardstock",
    "rank": 6,
    "badge": "Best for Frequent Cardstock Projects",
    "name": "Epson EcoTank ET-2800 Wireless Color All-in-One Supertank Printer",
    "price": "$199.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31eKmxnpbkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B096N8DN2H?tag=theofficejournal-20",
    "description": "The EcoTank ET-2800 replaces disposable cartridges with refillable ink tanks, which matters for anyone printing cardstock regularly, since cardstock projects use more ink per page than plain paper and cartridge costs add up quickly on a craft or small-business card business. Inkjet output keeps thick stock flat rather than heat-warped.\n\nIt does not advertise a dedicated thick-media rear slot, so buyers running heavier invitation or specialty cardstock should test a single sheet through the standard tray first and watch for feed resistance before committing to a full batch.",
    "specs": [
      "Cartridge-free EcoTank refillable ink system",
      "Color print, scan, and copy",
      "Wireless printing",
      "Bottled ink included",
      "Designed for frequent, regular-volume printing"
    ],
    "pros": [
      "Ink bottle refills cost far less per page for high cardstock volume",
      "Inkjet output avoids laser warping",
      "Scan and copy included",
      "Good fit for a recurring card-making hobby or small shop"
    ],
    "cons": [
      "No confirmed dedicated thick-media feed slot",
      "Larger footprint than basic inkjets",
      "Higher upfront cost than budget inkjets"
    ],
    "bestFor": "Frequent cardstock projects and small card-making businesses watching ink cost"
  },
  {
    "id": "epson-ecotank-et-4800-cardstock",
    "rank": 7,
    "badge": "Best with ADF and Ethernet",
    "name": "Epson EcoTank ET-4800 Wireless All-in-One Supertank Printer",
    "price": "$199.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31G4p897b8L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P45LR5T?tag=theofficejournal-20",
    "description": "The ET-4800 pairs EcoTank's low-cost-per-page ink system with an automatic document feeder, fax, and Ethernet, useful for a home office that mixes cardstock projects with regular document work. The ink-tank system keeps per-sheet cost manageable for anyone printing cardstock in volume.\n\nAs with the ET-2800, there is no advertised dedicated straight-through slot built specifically for very heavy stock, so test a sample sheet before a full run of thicker specialty cardstock, and expect the best results on standard 65lb to 80lb weights rather than the heaviest options on the market.\n\nADF and fax useful for a mixed home office workload.",
    "specs": [
      "Cartridge-free EcoTank refillable ink system",
      "Automatic document feeder and fax",
      "Ethernet and wireless connectivity",
      "Color print, scan, and copy",
      "Designed for home office use"
    ],
    "pros": [
      "Ink-tank economics for high cardstock volume",
      "ADF and fax useful for a mixed home office workload",
      "Ethernet option for a stable wired connection",
      "Inkjet keeps cardstock flat"
    ],
    "cons": [
      "Largest footprint in this list",
      "No confirmed heavy-stock straight-feed path",
      "Higher price than basic inkjets"
    ],
    "bestFor": "Home offices mixing frequent cardstock printing with document scanning and faxing"
  },
  {
    "id": "canon-megatank-g3270-cardstock",
    "rank": 8,
    "badge": "Best MegaTank Value Pick",
    "name": "Canon MegaTank G3270 All-in-One Wireless Inkjet Printer",
    "price": "$159.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31jPKfRqWSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BSMSYM9N?tag=theofficejournal-20",
    "description": "The MegaTank G3270 brings refillable ink-tank economics to a lower price point than the EcoTank picks above, a reasonable option for cardstock and craft printing where ink volume adds up over time. Inkjet's cooler print process keeps cardstock flat, and the tank system avoids the cost spiral of cartridges on ink-heavy card designs.\n\nIt covers print, scan, and copy without a document feeder or fax, so it suits a dedicated crafting or card-printing setup more than a full home-office workflow. As with the other inkjets here, verify a sample sheet's feed before printing a large batch of unusually thick or textured cardstock.\n\nInk-tank economics for volume cardstock printing.",
    "specs": [
      "MegaTank refillable ink system",
      "Print, scan, and copy",
      "Wireless printing",
      "Compact for an ink-tank printer",
      "Home use design"
    ],
    "pros": [
      "Lower entry price than the EcoTank ink-tank picks",
      "Ink-tank economics for volume cardstock printing",
      "Inkjet avoids heat warping",
      "Good dedicated crafting printer"
    ],
    "cons": [
      "No document feeder or fax",
      "No confirmed thick-media rear slot",
      "Best suited to standard cardstock weights, not the heaviest specialty stock"
    ],
    "bestFor": "Dedicated card-making and craft setups prioritizing ink-tank savings"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-printers-for-envelopes",
    "title": "Best Printers for Envelopes (2026)"
  },
  {
    "href": "/guide/best-photo-printers-for-home-use",
    "title": "Best Photo Printers for Home Use (2026)"
  },
  {
    "href": "/guide/best-printers-for-home-use",
    "title": "Best Printers for Home Use (2026)"
  },
  {
    "href": "/guide/best-easy-to-use-printers",
    "title": "Best Easy-to-Use Printers (2026)"
  }
];

export const breadcrumbLabel = "Best Printers for Cardstock";
