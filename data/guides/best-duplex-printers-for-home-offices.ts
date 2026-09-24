export const guideSlug = "best-duplex-printers-for-home-offices";
export const guideTitle = "8 Best Duplex Printers for Home Offices in 2026";
export const metaTitle = "Best Duplex Printers for Home Offices in 2026";
export const metaDescription =
  "8 best duplex printers for home offices in 2026. Real duplex speed penalties, print vs. scan duplex, paper limits, and the actual dollar savings explained.";
export const mainKeyword = "duplex printer for home office";
export const introParagraphs = [
  "Duplex printing saves paper, but it also comes with a speed penalty that's rarely stated clearly, flipping the page internally adds roughly 5 to 10 seconds per sheet, so a printer rated at 20 pages per minute single-sided often runs closer to 10 pages per minute effective in duplex mode. Duplex printing and duplex scanning are also different features that get conflated constantly, a printer can auto-print both sides while still requiring a manual flip to scan both sides of a page.",
  "Below are 8 printers we evaluated specifically for duplex print capability, distinguishing confirmed duplex printing from picks where the listing doesn't explicitly state it, so you're not guessing at a feature that may not be there.",
];
export const lastUpdated = "2026-07-25";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/418KMpgzGBL._SL500_.jpg";

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
    id: "hp-officejet-pro-8125e-duplex",
    rank: 1,
    badge: "Best Overall Duplex Pick",
    name: "HP OfficeJet Pro 8125e Wireless All-in-One with Duplex Printing",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/418KMpgzGBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CT8ZJ7ZC?tag=theofficejournal-20",
    description:
      "The OfficeJet Pro 8125e confirms both duplex printing and an ADF in its listing, meaning it handles two-sided output automatically without a manual flip. Expect the real-world duplex speed to run notably slower than the single-sided rated speed, the printer pauses to flip each sheet internally before printing the second side.\n\nA 3-month Instant Ink trial helps offset ink cost on a printer built for steadier home-office use than the budget picks in this list. If paper savings from duplex printing matter to you, this is a straightforward, confirmed choice.\n\nADF included for document scanning too. That's a real strength, but weigh it against the flip side: duplex mode runs slower than single-sided rated speed.",
    specs: [
      "Confirmed duplex printing",
      "Automatic document feeder",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Wireless connectivity",
    ],
    pros: [
      "Duplex printing explicitly confirmed",
      "ADF included for document scanning too",
      "Instant Ink trial reduces early ink cost",
      "Built for steady home-office volume",
    ],
    cons: [
      "Duplex mode runs slower than single-sided rated speed",
      "Higher upfront price than the cheapest duplex picks",
      "Cartridge costs return to normal after the trial",
    ],
    bestFor: "Home offices wanting confirmed duplex printing plus ADF scanning together",
  },
  {
    id: "canon-pixma-ts4320-duplex",
    rank: 2,
    badge: "Best Budget Confirmed Duplex",
    name: "Canon PIXMA TS4320 Wireless Color Inkjet Printer for Duplex Printing",
    price: "$64.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21igSrZPOwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBGXC2C?tag=theofficejournal-20",
    description:
      "Canon markets the TS4320 specifically for duplex printing in its listing title, the lowest-priced confirmed duplex pick in this list. A compact single-tray design keeps daily two-sided printing simple without extra trays to manage.\n\nStandard weight paper is the safe zone for the duplex mechanism, thicker cardstock generally can't go through the auto duplex path and needs a manual single-sided print instead. For a home office wanting confirmed duplex on a budget, this is the clearest low-cost match.\n\nWorth calling out specifically: duplex printing explicitly named in the listing. The catch is no automatic document feeder.",
    specs: [
      "Confirmed duplex printing",
      "Copier/scanner built in",
      "Compact single-tray design",
      "1-year limited warranty",
      "Easy setup",
    ],
    pros: [
      "Lowest price of any confirmed duplex pick in this list",
      "Duplex printing explicitly named in the listing",
      "Compact single-tray footprint",
      "Simple setup",
    ],
    cons: [
      "No automatic document feeder",
      "Thick paper can't go through the duplex path",
      "Limited to Letter/A4 paper size",
    ],
    bestFor: "Budget-conscious buyers who specifically want confirmed duplex printing",
  },
  {
    id: "canon-pixma-ts6520-duplex",
    rank: 3,
    badge: "Best Display for Duplex Status",
    name: "Canon PIXMA TS6520 Wireless Color Inkjet Printer with Duplex Printing",
    price: "$74.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21U5jLy1DeL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBTJLX6?tag=theofficejournal-20",
    description:
      "The TS6520 confirms duplex printing in its listing alongside a 1.42-inch OLED display that makes print status easier to follow, useful since duplex jobs take longer and benefit from clear on-screen feedback about progress. Built-in scan and copy round out the feature set.\n\nLike the TS4320, this uses a standard-weight paper path for duplex, so thicker stock should be printed single-sided instead. The display is the main differentiator over the cheaper TS4320 for buyers who want more visibility into what the printer is doing.\n\nOLED display shows clear print status. Set against that, no automatic document feeder. Both matter when comparing it to the other picks here.",
    specs: [
      "Confirmed duplex printing",
      "1.42-inch OLED display",
      "Built-in copier and scanner",
      "Intuitive control panel",
      "Compact design",
    ],
    pros: [
      "Duplex printing explicitly confirmed",
      "OLED display shows clear print status",
      "Intuitive control panel",
      "Compact footprint",
    ],
    cons: [
      "No automatic document feeder",
      "Thick paper can't go through the duplex path",
      "Cartridge ink costs more at high volume",
    ],
    bestFor: "Buyers who want confirmed duplex printing with clearer on-screen status",
  },
  {
    id: "brother-dcp-l2640dw-duplex",
    rank: 4,
    badge: "Best Duplex Laser Pick",
    name: "Brother DCP-L2640DW Wireless Compact Monochrome Laser Printer with Duplex",
    price: "$209.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41Pb1fcUXbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CPLFTPCV?tag=theofficejournal-20",
    description:
      "This is the only confirmed duplex laser printer in this list, its listing explicitly names duplex printing alongside copy and scan. Laser duplex mechanisms tend to handle sustained two-sided printing more reliably at volume than inkjet duplex paths.\n\nAs a monochrome-only printer, it's built for text-heavy home office documents rather than color output. A Refresh Subscription toner trial is included, and it works with Alexa for voice-triggered print jobs.\n\nA genuine advantage here is that laser reliability for sustained two-sided text volume. The tradeoff is monochrome only, no color printing.",
    specs: [
      "Confirmed duplex printing",
      "Compact monochrome laser printer",
      "Copy and scan built in",
      "Refresh Subscription toner trial included",
      "Works with Alexa",
    ],
    pros: [
      "Duplex printing explicitly confirmed",
      "Laser reliability for sustained two-sided text volume",
      "Compact footprint for a laser printer",
      "Toner trial included",
    ],
    cons: [
      "Monochrome only, no color printing",
      "Higher upfront price than inkjet duplex picks",
      "No automatic document feeder",
    ],
    bestFor: "Text-heavy home offices wanting reliable duplex printing at higher volume",
  },
  {
    id: "hp-officejet-pro-8125-duplex",
    rank: 5,
    badge: "Best Value Confirmed Duplex",
    name: "HP OfficeJet Pro 8125 Wireless All-in-One with Duplex Printing",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41MuruhvCqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GPFHCYK7?tag=theofficejournal-20",
    description:
      "The standard OfficeJet Pro 8125 shares the confirmed duplex printing and ADF combination of the 8125e above at a similar price point. A 3-month Instant Ink trial is included, and it's built for consistent home-office print volume rather than occasional use.\n\nExpect the same real-world duplex speed penalty as any two-sided printing on this platform, the printer pauses to flip each sheet, so budget more time for a large duplex job than the single-sided rated speed suggests.\n\nADF included for document scanning too. That's a real strength, but weigh it against the flip side: duplex mode runs slower than single-sided rated speed.",
    specs: [
      "Confirmed duplex printing",
      "Automatic document feeder",
      "3-month Instant Ink trial included",
      "AI-capable printing features",
      "Wireless connectivity",
    ],
    pros: [
      "Duplex printing explicitly confirmed",
      "ADF included for document scanning too",
      "Instant Ink trial reduces early ink cost",
      "Comparable capability to the 8125e",
    ],
    cons: [
      "Duplex mode runs slower than single-sided rated speed",
      "Higher upfront price than the cheapest duplex picks",
      "Cartridge costs return to normal after the trial",
    ],
    bestFor: "Home offices wanting confirmed duplex printing at a competitive price",
  },
  {
    id: "canon-pixma-tr8620a-duplex",
    rank: 6,
    badge: "Alternate Pick, Duplex Print Not Confirmed",
    name: "Canon PIXMA TR8620a All-in-One Printer",
    price: "$199.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/319DqCyLa3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09TRZLPXP?tag=theofficejournal-20",
    description:
      "The TR8620a's listing highlights its ADF, AirPrint support, and Alexa compatibility, but it does not explicitly state duplex printing in the title. It includes plenty else worth considering, photo printing quality, fax, and voice-triggered printing, but if automatic two-sided printing is your specific requirement, verify that spec directly on the product page before buying.\n\nWe're including it here as a secondary option given how strong its other features are for a home office, not as a confirmed duplex pick on par with the models above.\n\nWorth calling out specifically: automatic document feeder included. The catch is duplex printing not explicitly confirmed, verify before buying if required.",
    specs: [
      "Automatic document feeder",
      "AirPrint and Android compatible",
      "Works with Alexa",
      "Photo and document printing",
      "Duplex printing not confirmed in listing",
    ],
    pros: [
      "Strong overall feature set beyond duplex",
      "Automatic document feeder included",
      "AirPrint and Alexa support",
      "Good photo printing quality",
    ],
    cons: [
      "Duplex printing not explicitly confirmed, verify before buying if required",
      "Most expensive inkjet pick in this list",
      "Larger footprint than compact picks",
    ],
    bestFor: "Buyers prioritizing AirPrint, Alexa, and photo quality who will verify duplex separately",
  },
  {
    id: "brother-inkvestment-4355-duplex",
    rank: 7,
    badge: "Alternate Pick, Duplex Print Not Confirmed",
    name: "Brother INKvestment 4355 Wireless Color Inkjet All-in-One (MFC-J4355DW)",
    price: "$208.20",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31C067ZosFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FGCCWV6T?tag=theofficejournal-20",
    description:
      "This Brother INKvestment model's listing emphasizes its 1.8-inch color display and manual feed slot for envelopes and cardstock, but doesn't explicitly confirm duplex printing in the title. Its ink-tank system and Refresh Subscription trial are solid features on their own.\n\nWe're including it as a secondary alternative given its manual feed slot flexibility, not as a confirmed duplex pick. If two-sided printing is a must-have, verify this specific spec on the full product listing before purchasing.\n\nInk-tank system reduces per-page cost over time. Set against that, duplex printing not explicitly confirmed, verify before buying if required. Both matter when comparing it to the other picks here.",
    specs: [
      "1.8-inch color display",
      "Manual feed slot for envelopes and cardstock",
      "Ink-tank system",
      "Refresh Subscription trial included",
      "Duplex printing not confirmed in listing",
    ],
    pros: [
      "Manual feed slot for specialty paper",
      "Ink-tank system reduces per-page cost over time",
      "Color display for status and settings",
      "Ink subscription trial included",
    ],
    cons: [
      "Duplex printing not explicitly confirmed, verify before buying if required",
      "Higher upfront price than confirmed duplex picks",
      "Ink-tank refills take longer than a cartridge swap",
    ],
    bestFor: "Buyers wanting manual feed flexibility who will confirm duplex separately",
  },
  {
    id: "brother-inkvestment-5010-duplex",
    rank: 8,
    badge: "Confirmed Duplex Scan and Copy, Verify Duplex Print",
    name: "Brother INKvestment 5010 Wireless Color Inkjet All-in-One (MCF-J5010DW)",
    price: "$249.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41wQemMt6wL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTN9ZGRS?tag=theofficejournal-20",
    description:
      "This model's listing confirms automatic 2-sided copy and scan with a 2.7-inch color touchscreen, a genuinely useful feature for double-sided documents. It's worth noting that duplex printing and duplex scanning are different capabilities, and the title here specifically confirms the scan and copy side rather than stating duplex printing outright.\n\nIf duplex printing specifically is your requirement, confirm that spec on the full product page rather than assuming it from the 2-sided copy and scan claim alone. The confirmed duplex scan and copy feature on its own is still a real time-saver for double-sided paperwork.\n\nA genuine advantage here is that color touchscreen for easier navigation. The tradeoff is duplex printing specifically not confirmed separately from duplex scan and copy.",
    specs: [
      "Confirmed automatic 2-sided copy and scan",
      "2.7-inch color touchscreen",
      "Ink-tank system",
      "Wireless connectivity",
      "Duplex printing not separately confirmed in listing",
    ],
    pros: [
      "Confirmed duplex scan and copy saves time on double-sided documents",
      "Color touchscreen for easier navigation",
      "Ink-tank system reduces per-page cost over time",
      "Full-featured all-in-one",
    ],
    cons: [
      "Duplex printing specifically not confirmed separately from duplex scan and copy",
      "Higher price than basic confirmed duplex-print picks",
      "Ink-tank refills take longer than a cartridge swap",
    ],
    bestFor: "Buyers who specifically need duplex scanning and copying for double-sided paperwork",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Confirmed duplex print vs. unconfirmed",
    description: "Separated picks whose listing explicitly states duplex printing from those where it isn't clearly stated, rather than assuming an all-in-one printer automatically includes it.",
  },
  {
    title: "Duplex print vs. duplex scan distinction",
    description: "Checked whether each pick's confirmed two-sided capability applies to printing, scanning, or both, since these are frequently conflated but are functionally different features.",
  },
  {
    title: "Real-world duplex speed penalty",
    description: "Factored in the roughly 5 to 10 second per-page flip delay duplex printing adds, meaning effective duplex speed runs meaningfully below the single-sided rated page-per-minute figure.",
  },
  {
    title: "Paper weight compatibility with the duplex path",
    description: "Noted that standard weight paper is the safe zone for automatic duplex mechanisms across inkjet and laser picks alike, with thicker cardstock generally requiring single-sided printing instead.",
  },
  {
    title: "Price relative to confirmed capability",
    description: "Weighed whether each pick's price is justified by its confirmed feature set, rather than assuming a higher price always means confirmed duplex printing is included.",
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
          "HP OfficeJet Pro 8125e Wireless All"
        ],
        [
          "Largest review base, strongest reliability signal",
          "HP OfficeJet Pro 8125e Wireless All"
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
          "Canon PIXMA TS4320 Wireless Color Inkjet Printer for Duplex Printing"
        ],
        [
          "Up to $250",
          "Brother INKvestment 5010 Wireless Color Inkjet All"
        ]
      ]
    }
  },
  {
    "subheading": "Color vs Monochrome",
    "cards": [
      {
        "label": "Color",
        "text": "Handles graphics and color documents, worth it if you regularly print more than plain text. In this comparison: Canon PIXMA TS4320 Wireless Color Inkjet Printer for Duplex Printing, Canon PIXMA TS6520 Wireless Color Inkjet Printer with Duplex Printing, Brother INKvestment 4355 Wireless Color Inkjet All, Brother INKvestment 5010 Wireless Color Inkjet All."
      },
      {
        "label": "Monochrome",
        "text": "Usually cheaper to buy and run, fine if you mostly print plain text documents. In this comparison: HP OfficeJet Pro 8125e Wireless All, Brother DCP, HP OfficeJet Pro 8125 Wireless All, Canon PIXMA TR8620a All."
      }
    ],
    "note": "Default to monochrome for text-heavy home office use unless color output genuinely matters."
  },
  {
    "subheading": "By Wireless Sharing",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Multi-device wifi sharing",
          "HP OfficeJet Pro 8125e Wireless All"
        ],
        [
          "Single wired connection is fine",
          "Canon PIXMA TR8620a All"
        ]
      ]
    }
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
        "text": "HP OfficeJet Pro 8125e Wireless All is worth checking against its listed scan resolution before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You print regularly at moderate to high volume, where Brother INKvestment 5010 Wireless Color Inkjet All's duty cycle and cost-per-page give real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You only print occasionally at low volume, where Canon PIXMA TS4320 Wireless Color Inkjet Printer for Duplex Printing covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How much slower is duplex printing than single-sided printing?",
    a: "Expect roughly 5 to 10 seconds added per page for the internal flip, so a printer rated at 20 pages per minute single-sided often runs closer to 10 pages per minute effective in duplex mode. Budget extra time for large two-sided print jobs accordingly.",
  },
  {
    q: "Is duplex printing the same as duplex scanning?",
    a: "No, these are different features that are frequently conflated. Duplex printing means the printer automatically prints both sides of a page. Duplex scanning means the ADF automatically scans both sides of a page. A printer can have one without the other, we've flagged where a listing confirms scan/copy duplex but not print duplex, and vice versa, in this guide.",
  },
  {
    q: "Can I duplex print on cardstock?",
    a: "Generally no. The automatic duplex mechanism on most printers is built for standard weight paper, roughly 20-24 lb, and cardstock or heavier stock typically can't go through that path without jamming. Print cardstock single-sided instead.",
  },
  {
    q: "Does duplex printing actually save much money?",
    a: "The real savings are modest, roughly $10 a year at typical home-office volume around 500 pages a month. It's a genuine and easy saving on paper, but don't expect it to significantly offset your overall printing costs, ink or toner remains the bigger expense.",
  },
  {
    q: "Why does duplex-printed text sometimes show through the page?",
    a: "Thinner paper is more transparent, so content on one side can faintly show through the other, more noticeable on recycled or colored paper than standard bright white copier paper. Use a slightly heavier paper weight for duplex jobs where this would be distracting.",
  },
  {
    q: "How do I know if a printer's duplex printing is actually confirmed?",
    a: "Check the product listing and spec sheet directly for the word \"duplex\" or \"two-sided printing\" stated explicitly. Several capable all-in-one printers, like the Canon PIXMA TR8620a and Brother INKvestment 4355 in this guide, don't state it clearly in their listings, so we've included them only as secondary alternatives rather than confirmed duplex picks.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-all-in-one-printers-for-home-use", title: "Best All-in-One Printers for Home Use (2026)" },
  { href: "/guide/best-printers-with-automatic-document-feeders", title: "Best Printers with Automatic Document Feeders (2026)" },
  { href: "/guide/best-wireless-printers-for-home-offices", title: "Best Wireless Printers for Home Offices (2026)" },
  { href: "/guide/best-printers-for-small-businesses", title: "Best Printers for Small Businesses (2026)" },
];
