export const guideSlug = "best-all-in-one-printers-for-home-use";
export const guideTitle = "8 Best All-in-One Printers for Home Use in 2026";
export const metaTitle = "Best All-in-One Printers for Home Use in 2026";
export const metaDescription =
  "8 best all-in-one printers for home use in 2026. Compare print, scan, copy, ADF, and fax features so you don't pay for capability you'll never touch.";
export const mainKeyword = "all in one printer for home use";
export const introParagraphs = [
  "All-in-one doesn't mean every printer here does the same four things equally well. Print, scan, copy, and fax get bundled together on the box, but most home buyers only regularly use two of those four, and paying for a fax line and a 50-sheet automatic document feeder you'll never touch is money that could go toward better scan quality or ink savings instead.",
  "Below are 8 all-in-one printers we evaluated on which combination of features they actually deliver well, from bare-bones 2-in-1 units built for straightforward print-and-scan use to fuller 4-in-1 machines with automatic document feeders and fax lines still included for households that need them.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg";

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
    id: "hp-deskjet-4355-aio",
    rank: 1,
    badge: "Best Overall All-in-One",
    name: "HP DeskJet 4355 Wireless All-in-One Color Inkjet Printer",
    price: "$69.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GcHne8IoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GLD9K9LF?tag=theofficejournal-20",
    description:
      "The DeskJet 4355 covers the core all-in-one trio, print, scan, and copy, without piling on features most home buyers skip. Setup is quick over wireless, and the included 3-month Instant Ink trial removes the guesswork around cartridge buying for someone new to the printer.\n\nThis is a 3-in-1, not a 4-in-1, there's no automatic document feeder or fax line, so multi-page scanning means placing one sheet at a time on the flatbed glass. For most home buyers who scan the occasional single document, that's a fair trade for the lower price and simpler unit.\n\nFast, simple wireless setup. That's a real strength, but weigh it against the flip side: no automatic document feeder.",
    specs: [
      "Print, scan, copy (3-in-1)",
      "No automatic document feeder",
      "3-month Instant Ink trial included",
      "Simple wireless setup",
      "Compact, budget-friendly design",
    ],
    pros: [
      "Covers the 3 features most home users actually use",
      "Fast, simple wireless setup",
      "Low upfront price",
      "Instant Ink trial simplifies early ink purchasing",
    ],
    cons: [
      "No automatic document feeder",
      "No fax line",
      "Not built for high daily volume",
    ],
    bestFor: "Home buyers who only need print, scan, and copy without extras",
  },
  {
    id: "canon-pixma-ts4320-aio",
    rank: 2,
    badge: "Best Compact 3-in-1",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    description:
      "The PIXMA TS4320 packs print, scan, and copy plus built-in duplex printing into a single compact tray, a real convenience for two-sided documents without a fax line or ADF adding bulk. Easy setup and a 1-year limited warranty round out a straightforward home printer.\n\nThe flatbed scanner is fine for the occasional single-page scan or photo, but without an ADF, scanning a multi-page document means feeding pages one at a time, worth knowing before buying if you regularly scan longer stacks.\n\nWorth calling out specifically: compact single-tray footprint. The catch is no automatic document feeder.",
    specs: [
      "Print, scan, copy with duplex printing",
      "No automatic document feeder",
      "Compact single-tray design",
      "1-year limited warranty",
      "Easy setup process",
    ],
    pros: [
      "Built-in duplex printing",
      "Compact single-tray footprint",
      "Affordable price",
      "Simple setup",
    ],
    cons: [
      "No automatic document feeder",
      "No fax line",
      "Limited to Letter/A4 paper size",
    ],
    bestFor: "Small-space buyers who want duplex printing without extra bulk",
  },
  {
    id: "canon-pixma-ts6520-aio",
    rank: 3,
    badge: "Best Display and Controls",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "This is another 3-in-1, print, scan, and copy with duplex printing, distinguished by a 1.42-inch OLED display and intuitive control panel that make daily use noticeably easier than a printer relying on indicator lights alone. Copy scaling and basic scan options are easy to find without digging through menus.\n\nLike the TS4320, there's no automatic document feeder, so this is a better fit for occasional single-page scanning than for digitizing stacks of paper regularly.\n\nDuplex printing built in. Set against that, no automatic document feeder. Both matter when comparing it to the other picks here.",
    specs: [
      "Print, scan, copy with duplex printing",
      "1.42-inch OLED display",
      "Intuitive control panel",
      "No automatic document feeder",
      "Compact design",
    ],
    pros: [
      "Clear OLED display for status and settings",
      "Duplex printing built in",
      "Intuitive control panel",
      "Compact footprint",
    ],
    cons: [
      "No automatic document feeder",
      "No fax line",
      "Cartridge ink costs more at high volume",
    ],
    bestFor: "Buyers who want a clearer screen and easier daily controls",
  },
  {
    id: "canon-pixma-tr4720-fax",
    rank: 4,
    badge: "Best for Multi-Page Scanning",
    name: "Canon PIXMA TR4720 All-in-One Wireless Printer with ADF",
    price: "$69.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/415PuxvZ1wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09CDXKNB9?tag=theofficejournal-20",
    description:
      "The PIXMA TR4720 is a genuine 4-in-1, print, scan, copy, and a built-in fax line, plus an automatic document feeder that makes scanning a multi-page document far less tedious than feeding sheets one by one on a flatbed. That combination makes it the pick here for anyone who scans multi-page paperwork regularly, tax documents, old records, kids' school forms.\n\nMost home buyers won't touch the fax feature in 2026, but it doesn't complicate daily print, scan, and copy use. Mobile printing setup follows a short guided process for pairing a phone.\n\nA genuine advantage here is that full 4-in-1 feature set including fax. The tradeoff is fax feature adds a menu option most won't use.",
    specs: [
      "Print, scan, copy, fax (4-in-1)",
      "Automatic document feeder",
      "Mobile printing support",
      "Wireless connectivity",
      "Compact home printer design",
    ],
    pros: [
      "Automatic document feeder for multi-page scanning",
      "Full 4-in-1 feature set including fax",
      "Affordable given the feature count",
      "Guided mobile printing setup",
    ],
    cons: [
      "Fax feature adds a menu option most won't use",
      "Cartridge-based ink costs more at high volume",
      "Not built for sustained high-volume printing",
    ],
    bestFor: "Households that scan multi-page documents regularly and want a fax option too",
  },
  {
    id: "hp-officejet-pro-8125e",
    rank: 5,
    badge: "Best 4-in-1 for Home Offices",
    name: "HP OfficeJet Pro 8125e Wireless All-in-One Color Inkjet Printer",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/418KMpgzGBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CT8ZJ7ZC?tag=theofficejournal-20",
    description:
      "The OfficeJet Pro 8125e steps up to a full print, scan, copy setup with both an automatic document feeder and duplex printing, aimed at home-office use rather than occasional home printing. A 3-month Instant Ink trial softens the entry cost of ongoing ink.\n\nThis is the pick for a household that genuinely uses every feature on the box, ADF for scanning receipts and contracts, duplex for reports, and steady wireless printing from multiple devices. It costs more upfront than the simpler 3-in-1 picks in this list, which is worth it only if you'll use the extra capability.\n\nInstant Ink trial reduces early ink cost. That's a real strength, but weigh it against the flip side: higher upfront price than basic 3-in-1 picks.",
    specs: [
      "Print, scan, copy with ADF and duplex printing",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Home-office oriented design",
      "Wireless connectivity",
    ],
    pros: [
      "ADF and duplex printing both included",
      "Instant Ink trial reduces early ink cost",
      "Built for home-office volume",
      "Reliable wireless setup",
    ],
    cons: [
      "Higher upfront price than basic 3-in-1 picks",
      "Overkill if you only need print and occasional scan",
      "Cartridge costs return to normal after the trial",
    ],
    bestFor: "Home-office users who need ADF, duplex, and steady wireless printing together",
  },
  {
    id: "canon-pixma-tr8620a",
    rank: 6,
    badge: "Most Full-Featured Pick",
    name: "Canon PIXMA TR8620a All-in-One Printer",
    price: "$199.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/319DqCyLa3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09TRZLPXP?tag=theofficejournal-20",
    description:
      "The TR8620a is the fullest 4-in-1 in this list, print, copy, scan, fax, plus an automatic document feeder, AirPrint support, and Alexa compatibility for voice-triggered print jobs. It's also the most expensive pick here, so it only makes sense if you'll actually use most of that feature list.\n\nFor a household that wants photo printing quality alongside document handling and doesn't mind paying more for the full set of capabilities, this covers nearly everything a home all-in-one can do. Buyers who only need 2 or 3 of these features are better served by a cheaper pick above.\n\nWorth calling out specifically: airPrint and Alexa support. The catch is most expensive pick in this list.",
    specs: [
      "Print, copy, scan, fax, ADF",
      "AirPrint and Android compatible",
      "Works with Alexa",
      "Photo and document printing",
      "Wireless connectivity",
    ],
    pros: [
      "Fullest feature set of any pick in this list",
      "AirPrint and Alexa support",
      "Automatic document feeder included",
      "Strong photo printing alongside documents",
    ],
    cons: [
      "Most expensive pick in this list",
      "Overkill for buyers who only need 2-3 features",
      "Larger footprint than the 3-in-1 picks",
    ],
    bestFor: "Buyers who want nearly every all-in-one feature and will actually use them",
  },
  {
    id: "brother-inkvestment-4355",
    rank: 7,
    badge: "Best for Frequent Manual Feed Jobs",
    name: "Brother INKvestment 4355 Wireless Color Inkjet All-in-One Printer (MFC-J4355DW)",
    price: "$208.20",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31C067ZosFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FGCCWV6T?tag=theofficejournal-20",
    description:
      "Brother's INKvestment 4355 is an ink-tank-style all-in-one with a 1.8-inch color display and a dedicated manual feed slot, useful for occasionally printing on envelopes or cardstock without disturbing the main paper tray. A Refresh Subscription trial is included for the ink system.\n\nThe listing doesn't specifically confirm an automatic document feeder, so if fast multi-page scanning is a priority, verify that spec on the product page before buying rather than assuming it's included based on the MFC model name alone.\n\nInk-tank system reduces per-page cost over time. Set against that, automatic document feeder not confirmed in the listing, verify before buying if needed. Both matter when comparing it to the other picks here.",
    specs: [
      "Print, scan, copy, ink-tank system",
      "1.8-inch color display",
      "Manual feed slot for envelopes and cardstock",
      "Refresh Subscription ink trial included",
      "Wireless connectivity",
    ],
    pros: [
      "Manual feed slot for specialty paper",
      "Ink-tank system reduces per-page cost over time",
      "Color display for status and settings",
      "Ink subscription trial included",
    ],
    cons: [
      "Automatic document feeder not confirmed in the listing, verify before buying if needed",
      "Higher upfront price than basic 3-in-1 picks",
      "Ink-tank refills take longer than a cartridge swap",
    ],
    bestFor: "Buyers who regularly print on envelopes or specialty paper and want ink-tank economics",
  },
  {
    id: "hp-officejet-pro-8125",
    rank: 8,
    badge: "Best Value 4-in-1",
    name: "HP OfficeJet Pro 8125 Wireless All-in-One Color Inkjet Printer",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41MuruhvCqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GPFHCYK7?tag=theofficejournal-20",
    description:
      "The standard OfficeJet Pro 8125 offers the same ADF and duplex printing combination as the 8125e above, print, scan, copy with automatic document feeder and two-sided printing, at a slightly different price point depending on current promotions. It's built for home-office volume rather than occasional use.\n\nA 3-month Instant Ink trial is included here too, and the AI-capable printing features are optional extras rather than requirements for basic daily printing.\n\nA genuine advantage here is that instant Ink trial reduces early ink cost. The tradeoff is higher upfront price than basic 3-in-1 picks.",
    specs: [
      "Print, scan, copy with ADF and duplex printing",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Home-office oriented design",
      "Wireless connectivity",
    ],
    pros: [
      "ADF and duplex printing both included",
      "Instant Ink trial reduces early ink cost",
      "Built for home-office volume",
      "Comparable capability to the 8125e",
    ],
    cons: [
      "Higher upfront price than basic 3-in-1 picks",
      "Overkill if you only need print and occasional scan",
      "Cartridge costs return to normal after the trial",
    ],
    bestFor: "Buyers who want ADF and duplex printing at a competitive price",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Feature-to-need match",
    description: "Weighed how many of the 4 core all-in-one functions, print, scan, copy, and fax, each pick actually delivers versus how many a typical home buyer will use, to flag when a fuller feature set is worth the extra cost.",
  },
  {
    title: "Scan capability depth",
    description: "Compared flatbed-only scanning against automatic document feeder options, since single-page flatbed scanning and multi-page ADF scanning solve very different problems.",
  },
  {
    title: "Duplex printing availability",
    description: "Noted which picks include automatic two-sided printing versus requiring a manual page flip, a real time difference for anyone printing reports or forms regularly.",
  },
  {
    title: "Setup and daily use friction",
    description: "Considered wireless pairing steps, display quality, and how many steps a routine print, scan, or copy job takes on each unit.",
  },
  {
    title: "Price relative to feature count",
    description: "Assessed whether the price scales reasonably with the number of genuinely useful features included, rather than assuming a higher price always means a better all-in-one for a given household.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Understand duty cycle as a maximum ceiling, not a healthy day-to-day volume",
    "explanation": "A printer's rated duty cycle is the absolute maximum number of pages it can print in a month before risking premature wear, not a figure representing comfortable, sustained daily use, printing consistently near that ceiling month after month accelerates wear on the print mechanism well beyond what the same printer would experience at a more moderate, realistic volume.\n\nThis matters because buying a printer rated just barely above your expected monthly volume often means running it closer to its stress limit than its comfortable operating range.\n\nCheck the listed duty cycle figure, and target a printer rated at 3 to 5 times your actual expected monthly volume for genuinely comfortable long-term use, not a printer rated just above what you think you'll print."
  },
  {
    "criterion": "Match multi-user wifi sharing to how many people will actually print from it",
    "explanation": "A printer's wireless sharing capability varies in real-world reliability between models, some handle multiple simultaneous connection requests from different devices smoothly, while others can drop connections or queue print jobs unreliably when more than one person tries to print around the same time.\n\nThis matters directly for a shared home office or household with multiple people printing throughout the day, less for a single dedicated user.\n\nCheck reviews specifically for mentions of multi-device wifi reliability, not just whether wireless printing is listed as a supported feature, since the feature existing and working reliably under real multi-user load aren't the same thing."
  },
  {
    "criterion": "Check scan resolution against what you're actually digitizing, not just print quality",
    "explanation": "Print quality specs get most of the attention in printer listings, but scan resolution, measured in DPI, determines whether a scanned document stays genuinely readable when zoomed in or printed again later, and this spec is often buried or only briefly mentioned compared to print specs.\n\nThis matters more if you regularly scan contracts, receipts, or other documents where legibility of fine print matters, less if scanning is an occasional, low-stakes task.\n\nCheck the listed optical scan resolution in DPI specifically, not just the printer's overall feature list, if document scanning is a real part of your workflow."
  },
  {
    "criterion": "Weigh whether legacy features like fax are worth paying for in a 2026 home office",
    "explanation": "Many home-office printers still bundle a fax feature as a holdover from an earlier era, adding to the printer's cost and complexity even though most home offices in 2026 will genuinely never use it, having largely moved to email and digital document sharing entirely.\n\nThis matters for value, paying for a feature you'll never touch is a real, if often overlooked, inefficiency when a fax-free model at a lower price covers the same core printing and scanning needs.\n\nCheck whether fax is a genuine requirement for your specific situation before treating its presence as a meaningful selling point, and consider a fax-free model if it isn't."
  },
  {
    "criterion": "Consider ink versus toner cost per page for your actual print volume, not just the printer's price",
    "explanation": "An inkjet printer is typically cheaper to buy upfront but has a meaningfully higher cost per printed page than a laser printer using toner, a gap that adds up significantly over months of real use at moderate to high volume, while a laser printer costs more initially but can work out cheaper in total ownership cost if you print regularly.\n\nThis matters directly based on your actual expected volume, a low-volume occasional printer may never recoup a laser printer's higher upfront cost, while a high-volume home office likely will.\n\nCheck the manufacturer's stated or estimated cost-per-page for both ink and toner options, and weigh that against your realistic monthly print volume, not just the printer's sticker price."
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
          "HP DeskJet 4355 Wireless All"
        ],
        [
          "Largest review base, strongest reliability signal",
          "HP DeskJet 4355 Wireless All"
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
          "Up to $209",
          "Brother INKvestment 4355 Wireless Color Inkjet All"
        ]
      ]
    }
  },
  {
    "subheading": "Duplex vs Simplex Printing",
    "cards": [
      {
        "label": "Duplex (auto two-sided)",
        "text": "Prints both sides automatically, saves paper and time for double-sided documents. In this comparison: Canon PIXMA TS4320 Wireless Color Inkjet Printer, Canon PIXMA TS6520 Wireless Color Inkjet Printer, HP OfficeJet Pro 8125e Wireless All, HP OfficeJet Pro 8125 Wireless All."
      },
      {
        "label": "Simplex only",
        "text": "Usually cheaper, fine if you rarely need double-sided printing. In this comparison: HP DeskJet 4355 Wireless All, Canon PIXMA TR4720 All, Canon PIXMA TR8620a All, Brother INKvestment 4355 Wireless Color Inkjet All."
      }
    ],
    "note": "Default to duplex unless you're confident your printing is mostly single-sided."
  },
  {
    "subheading": "By Scan Resolution",
    "note": "Check each pick's listed optical scan resolution in DPI against how you'll actually use scanning before buying, not just print specs. HP DeskJet 4355 Wireless All is the most-reviewed option here if you want the safer bet."
  },
  {
    "subheading": "For Scanning Contracts or Receipts Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A disclosed optical scan resolution in DPI high enough to keep fine print legible, not just the printer's overall feature list."
      },
      {
        "label": "In this comparison",
        "text": "HP DeskJet 4355 Wireless All is worth checking against its listed scan resolution before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You print regularly at moderate to high volume, where Brother INKvestment 4355 Wireless Color Inkjet All's duty cycle and cost-per-page give real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only print occasionally at low volume, where Canon PIXMA TS4320 Wireless Color Inkjet Printer covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Do I need a 4-in-1 all-in-one printer, or is 2-in-1 or 3-in-1 enough?",
    a: "Most home buyers only regularly use print and occasional scan, which makes a 2-in-1 or 3-in-1 like the HP DeskJet 4355 or Canon PIXMA TS4320 enough. Reserve a 4-in-1 with ADF and fax for households that scan multi-page documents often or genuinely still need fax.",
  },
  {
    q: "Is an automatic document feeder worth paying extra for?",
    a: "Yes, if you regularly scan multi-page documents like tax returns, contracts, or old records. If your scanning is occasional and single-page, skip it and save $20-30 on a flatbed-only pick like the Canon PIXMA TS6520.",
  },
  {
    q: "Is the flatbed or the ADF better for scanning photos?",
    a: "Always the flatbed. AIO flatbed scanners commonly run around 1200dpi resolution suitable for photos and fine detail, while ADF scanning is typically lower resolution, closer to 300dpi, and built for speed on text documents rather than image quality.",
  },
  {
    q: "Should I buy an all-in-one or a separate scanner and printer?",
    a: "If scan quality matters more than convenience, a dedicated scanner paired with a basic printer like the HP DeskJet 4355 often beats an AIO's scan quality per dollar, since the AIO's scanner is a secondary feature rather than the main product. For balanced, moderate use, an AIO is simpler and usually sufficient.",
  },
  {
    q: "Do I actually need the fax feature on an all-in-one printer?",
    a: "Almost certainly not in 2026 unless you deal with a business, medical office, or government agency that specifically requires fax. Skipping fax-equipped models saves money without giving up anything most households will ever use.",
  },
  {
    q: "How do I scan documents directly to Google Drive or Dropbox?",
    a: "Most manufacturer apps, including HP Smart and Canon PRINT, support scan-to-cloud once you sign into your account within the app. Set this up right after unboxing so scanned receipts, contracts, or photos upload automatically instead of routing through your computer first.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-printers-for-home-use", title: "Best Printers for Home Use (2026)" },
  { href: "/guide/best-wireless-printers-for-home-offices", title: "Best Wireless Printers for Home Offices (2026)" },
  { href: "/guide/best-printers-with-automatic-document-feeders", title: "Best Printers with Automatic Document Feeders (2026)" },
  { href: "/guide/best-duplex-printers-for-home-offices", title: "Best Duplex Printers for Home Offices (2026)" },
];
