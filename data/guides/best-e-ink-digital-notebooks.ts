export const guideSlug = "best-e-ink-digital-notebooks";
export const guideTitle = "8 Best E-Ink Digital Notebooks in 2026";
export const metaTitle = "Best E-Ink Digital Notebooks (2026)";
export const metaDescription =
  "8 e-ink digital notebooks we evaluated for glare-free writing, week-long battery life, and reduced eye strain compared to a typical LCD tablet.";
export const mainKeyword = "e-ink digital notebook";
export const introParagraphs = [
  "E-ink, or e-paper, display technology is the actual differentiator behind this category: it looks and reads like paper under normal light with no glare, draws power only when the screen changes rather than continuously, and generally causes less eye strain over long writing or reading sessions than a backlit LCD screen.",
  "Every pick below is standalone hardware built around an e-ink display, not a paper notebook or smart pen set. We evaluated the stated display type, battery claims, and included accessories rather than claiming hands-on testing.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41+shKsz0LL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "boox-noteair-eink",
    rank: 1,
    badge: "Best Glare-Free Reading and Writing Combo",
    name: "BOOX Note Air 10.3 E Ink Tablet, ePaper, Android 10, Front Light, G-Sensor, Digital Paper, E Ink Notepad",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+shKsz0LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08H83GCBT?tag=theofficejournal-20",
    description: "The e-ink panel on the BOOX Note Air 10.3 reads glare-free even in bright light, a genuine advantage of e-paper technology over an LCD tablet screen. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nIt earns the top spot in this comparison over BOOX Tablet 10.3in Note Air 5 C for one main reason. Glare-free e-ink display readable in bright light. On price, it comes in below BOOX Tablet 10.3in Note Air 5 C, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Front light for low-light use without switching to LCD. On the other side, Android adds some interface complexity. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","10.3 inch ePaper display","Front light for low-light use","Android-based, G-sensor"],
    pros: ["Glare-free e-ink display readable in bright light","Front light for low-light use without switching to LCD","Android app flexibility","Established product line"],
    cons: ["Not a color display","Verify current price and battery specs","Android adds some interface complexity"],
    bestFor: "Buyers who want glare-free reading and writing with Android app access.",
  },
  {
    id: "boox-5c-eink",
    rank: 2,
    badge: "Best Color E-Ink for Reduced Eye Strain",
    name: "BOOX Tablet 10.3in Note Air 5 C, 6G 64G E Ink Tablet Color ePaper Notebook",
    price: "$529.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4L5XMV?tag=theofficejournal-20",
    description: "The BOOX Note Air 5 C brings color to the same glare-free e-paper technology, useful for color-coded notes without the eye strain of a backlit color LCD. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below BOOX Note Air 10.3 E Ink Tablet in this ranking, pricing between it and BOOX Note Air 10.3 E Ink Tablet isn't directly comparable here. The compromise here is straightforward: Color e-ink panels have less contrast than black-and-white. What you gain in return: Color ePaper display with genuine glare-free reading. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Long standby battery life from the e-ink panel. On the other side, Premium price relative to black-and-white e-ink. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","10.3 inch color ePaper display","6GB RAM, 64GB storage","Weeks of standby battery life"],
    pros: ["Color ePaper display with genuine glare-free reading","Long standby battery life from the e-ink panel","Newer-generation hardware","Android app support"],
    cons: ["Color e-ink panels have less contrast than black-and-white","Verify current price on the listing","Premium price relative to black-and-white e-ink"],
    bestFor: "Buyers wanting color notes without giving up e-ink's glare-free, low-strain reading.",
  },
  {
    id: "remarkable2-eink",
    rank: 3,
    badge: "Best Battery Life in This Guide",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    description: "The reMarkable 2's e-ink screen only draws power when the display changes, giving it battery life measured in weeks rather than the daily charging cycle of a typical LCD tablet. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nSitting just under BOOX Tablet 10.3in Note Air 5 C, it's priced lower than BOOX Tablet 10.3in Note Air 5 C. Here's the honest tradeoff: Black and white display only. And here's what it gets you instead: Long battery life, a direct benefit of e-ink's power model. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Glare-free display reduces eye strain over long sessions. On the other side, Premium price versus paper-based notebooks. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Marker Plus included","Weeks of battery life","Black and white e-paper display"],
    pros: ["Long battery life, a direct benefit of e-ink's power model","Glare-free display reduces eye strain over long sessions","Marker Plus stylus included","Refined, distraction-free interface"],
    cons: ["Black and white display only","Verify current cloud subscription requirements","Premium price versus paper-based notebooks"],
    bestFor: "Buyers who most value e-ink's battery life and glare-free reading.",
  },
  {
    id: "remarkable-pro-eink",
    rank: 4,
    badge: "Best Premium Color E-Ink Display",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=theofficejournal-20",
    description: "The reMarkable Paper Pro's color e-paper display retains e-ink's glare-free readability in bright daylight, a real advantage over a color LCD tablet outdoors or under strong light. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nRanked just behind reMarkable 2 with Marker Plus, it costs more than reMarkable 2 with Marker Plus. The real tradeoff against that pick: The most expensive pick in this guide. In exchange, it offers this instead: Color e-paper display, still glare-free in bright light. That's the swap that decides whether this pick or the one above it is the better fit for your note-taking needs.\n\nWorth knowing before you decide: Marker Plus stylus and folio included. On the other side, Color e-ink still trades some contrast versus black-and-white. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Color e-paper display","Marker Plus and folio included","Glare-free even in daylight"],
    pros: ["Color e-paper display, still glare-free in bright light","Marker Plus stylus and folio included","Larger screen than the standard reMarkable 2","E-ink battery efficiency retained with color"],
    cons: ["The most expensive pick in this guide","Verify current cloud subscription requirements","Color e-ink still trades some contrast versus black-and-white"],
    bestFor: "Buyers wanting the best color e-ink display with glare-free reading in any light.",
  },
  {
    id: "remarkable-pro-eink2",
    rank: 5,
    badge: "Best Color E-Ink Without the Folio",
    name: "reMarkable Paper Pro with Marker Plus",
    price: "$679.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/412wtt+9l5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DG9ZXWMK?tag=theofficejournal-20",
    description: "This is the same color e-paper display and glare-free daylight readability as the folio bundle, just without the included case. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below reMarkable Paper Pro with Marker Plus and Basalt Book Folio in this ranking, it's priced lower than reMarkable Paper Pro with Marker Plus and Basalt Book Folio. The compromise here is straightforward: No case included. What you gain in return: Same color e-paper display as the folio bundle. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Marker Plus included. On the other side, Verify current cloud subscription requirements. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Color e-paper display","Marker Plus included","Glare-free daylight readability"],
    pros: ["Same color e-paper display as the folio bundle","Marker Plus included","Lower price than the folio-included version","Long e-ink battery life"],
    cons: ["No case included","Still a premium price overall","Verify current cloud subscription requirements"],
    bestFor: "Buyers wanting the Paper Pro display without paying for a case they may not need.",
  },
  {
    id: "remarkable2-eink-folio",
    rank: 6,
    badge: "Best Mid-Range E-Ink Kit with Case Included",
    name: "reMarkable 2 with Marker Plus and Basalt Book Folio",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31yGU6PCN2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8Z354YW?tag=theofficejournal-20",
    description: "This reMarkable 2 bundle pairs the same glare-free, long-battery-life e-ink screen with an included folio case for a complete kit. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nSitting just under reMarkable Paper Pro with Marker Plus, it's priced lower than reMarkable Paper Pro with Marker Plus. Here's the honest tradeoff: Costs more than the tablet-only bundle. And here's what it gets you instead: Complete kit with folio included. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Long battery life from the e-ink display. On the other side, Verify current cloud subscription requirements. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Marker Plus and folio included","Black and white e-paper display","Long standby battery life"],
    pros: ["Complete kit with folio included","Long battery life from the e-ink display","Glare-free, low-eye-strain writing surface","Marker Plus stylus included"],
    cons: ["Costs more than the tablet-only bundle","Black and white display only","Verify current cloud subscription requirements"],
    bestFor: "Buyers wanting a complete mid-range e-ink kit including a case.",
  },
  {
    id: "kindle-scribe-eink",
    rank: 7,
    badge: "Best E-Ink Notebook for Reading Sessions",
    name: "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    price: "$679.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    description: "The Kindle Scribe Colorsoft's e-ink display is built for exactly this kind of long reading and writing session, with a front light and stated color paper-like screen that avoids LCD glare and eye strain. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nRanked just behind reMarkable 2 with Marker Plus and Basalt Book Folio, pricing between it and reMarkable 2 with Marker Plus and Basalt Book Folio isn't directly comparable here. The real tradeoff against that pick: Premium price similar to reMarkable Paper Pro. In exchange, it offers this instead: Color paper-like display tuned for reading comfort. That's the swap that decides whether this pick or the one above it is the better fit for your note-taking needs.\n\nWorth knowing before you decide: Front light for low-light sessions. On the other side, Verify current handwriting conversion accuracy. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","11 inch color paper-like display","Front light included","Pen included"],
    pros: ["Color paper-like display tuned for reading comfort","Front light for low-light sessions","Pen included","Long e-ink battery life"],
    cons: ["Premium price similar to reMarkable Paper Pro","Best suited to buyers who also want an e-reader","Verify current handwriting conversion accuracy"],
    bestFor: "Buyers who spend long sessions reading and writing and want minimal eye strain.",
  },
  {
    id: "android-epaper-eink",
    rank: 8,
    badge: "Best Budget-Adjacent E-Ink Tablet",
    name: "Android E-Ink ePaper Tablet, Paperwhite eBook Reader Digital Notebook for Notes, with Stylus and Case, Cloud Sync",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41E5eVmzxxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D5Y7DLXQ?tag=theofficejournal-20",
    description: "This Android-based e-paper tablet offers the same core glare-free, low-eye-strain e-ink display as the pricier names in this guide, with a stylus and case included. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below Amazon Kindle Scribe Colorsoft 64GB in this ranking, it's priced lower than Amazon Kindle Scribe Colorsoft 64GB. The compromise here is straightforward: Less established brand, verify current reviews. What you gain in return: Stylus and case included. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Cloud sync and screen casting stated on the listing. On the other side, Software polish may lag behind reMarkable or BOOX. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Paper-white e-paper display","Stylus and case included","Cloud sync and screen casting"],
    pros: ["Stylus and case included","Cloud sync and screen casting stated on the listing","Same core e-ink glare-free display benefits","More accessible price than premium brand-name devices"],
    cons: ["Less established brand, verify current reviews","Verify current price on the listing","Software polish may lag behind reMarkable or BOOX"],
    bestFor: "Buyers wanting e-ink's core display benefits at a more accessible price.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Confirmed genuine e-ink or e-paper display technology", description: "Verified each pick uses an actual e-ink or e-paper panel rather than a standard LCD screen marketed loosely as a notebook." },
  { title: "Battery life claims tied to the e-ink power model", description: "Explained why e-ink batteries last longer, the screen only draws power when content changes, rather than treating the spec as an isolated number." },
  { title: "Glare and eye strain considered as a genuine display benefit", description: "Weighed e-ink's glare-free readability in bright light and lower eye strain over long sessions as a real differentiator versus a typical tablet screen." },
  { title: "Color vs black-and-white distinguished per listing", description: "Only credited a color e-ink display when explicitly stated, since color and black-and-white e-paper panels have different contrast tradeoffs." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Use Case",
    "table": {
      "headers": [
        "What you need it for",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "Everyday note-taking and reading",
          "reMarkable 2 with Marker Plus"
        ],
        [
          "AI-assisted or document-heavy work",
          "reMarkable Paper Pro with Marker Plus and Basalt Book Folio"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $449",
          "reMarkable 2 with Marker Plus"
        ],
        [
          "Mid-range",
          "reMarkable Paper Pro with Marker Plus"
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "reMarkable Paper Pro with Marker Plus and Basalt Book Folio"
        ]
      ]
    }
  },
  {
    "subheading": "AI Features Included vs Subscription-Gated",
    "cards": [
      {
        "label": "Included, No Subscription",
        "text": "AI note tools come with the purchase price, no ongoing cost. In this comparison: check each listing's terms directly."
      },
      {
        "label": "Subscription-Gated",
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: reMarkable 2 with Marker Plus, reMarkable Paper Pro with Marker Plus and Basalt Book Folio, reMarkable Paper Pro with Marker Plus."
      }
    ],
    "note": "Check each specific listing for current subscription terms, since these change over time."
  },
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "What you're weighing",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest star rating",
          "BOOX Note Air 10.3 E Ink Tablet"
        ],
        [
          "Largest review base (more statistical confidence)",
          "BOOX Note Air 10.3 E Ink Tablet"
        ]
      ]
    }
  },
  {
    "subheading": "For Handwriting-to-Text Conversion Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Explicit confirmation of handwriting-to-text conversion (not just \"AI\" generally), and whether that specific feature is included or requires a subscription."
      },
      {
        "label": "In this comparison",
        "text": "BOOX Note Air 10.3 E Ink Tablet fits this specifically: Glare-free e-ink display readable in bright light."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what reMarkable Paper Pro with Marker Plus and Basalt Book Folio offers: Color e-paper display, still glare-free in bright light. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "reMarkable 2 with Marker Plus already covers the essentials: Long battery life, a direct benefit of e-ink's power model. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Check whether AI or handwriting-conversion features are included or require a subscription",
    "explanation": "Digital notebook brands take genuinely different approaches to their software features: some bundle handwriting-to-text conversion, document summarization, and cloud sync into the purchase price, while others, most notably reMarkable's Connect plan, gate the more advanced versions of these same features behind an ongoing monthly subscription that continues costing money long after the initial purchase.\n\nThis is a real total-cost-of-ownership difference that a one-time hardware price comparison completely misses, since a cheaper device with a required subscription can cost more over two or three years than a pricier device with everything included upfront.\n\nCheck the specific listing and manufacturer's website for whether the features you actually want are included in the base purchase or require an ongoing plan, and factor that recurring cost into your real comparison."
  },
  {
    "criterion": "Understand that \"AI\" and \"handwriting conversion\" mean different things across different devices",
    "explanation": "The marketing term \"AI\" gets applied to several genuinely different features across this product category: converting your handwriting into typed text, summarizing a long document or your own notes, organizing notes automatically by topic, or simply offering a chatbot-style writing assistant, and a device marketed heavily around \"AI\" doesn't necessarily include all, or even most, of these specific capabilities.\n\nThis matters because two devices can both claim AI features while actually doing completely different things, so a buyer specifically wanting handwriting-to-text conversion could end up with a device whose \"AI\" feature is actually a summarization tool that doesn't address their actual need at all.\n\nRead the specific feature list rather than the marketing headline, and confirm the device does the exact task you need (handwriting conversion specifically, not just \"AI\" generally) before buying."
  },
  {
    "criterion": "Confirm the stylus situation: included, sold separately, or requiring a specific model",
    "explanation": "Some digital notebooks include a compatible stylus in the box as part of the purchase price, while others sell the device and stylus as separate purchases, or require a specific proprietary stylus model that isn't interchangeable with a generic capacitive pen, and this distinction can add a meaningful hidden cost on top of the listed device price if you assumed a stylus was included.\n\nBeyond just the cost, stylus quality itself varies in pressure sensitivity, tilt detection, and palm rejection quality, features that matter significantly more for sketching and detailed note-taking than for simple text entry.\n\nCheck the listing specifically for whether a stylus ships in the box, and if writing feel matters to you, look for mentions of pressure levels and palm rejection quality rather than assuming any included stylus performs the same as another."
  },
  {
    "criterion": "Check the export and sync ecosystem, since notes trapped on one device have limited long-term value",
    "explanation": "A digital notebook's real usefulness depends heavily on getting your notes and documents off the device and into a format you can actually use elsewhere, whether that's cloud sync to a phone or computer, export to PDF or Word, or direct integration with a note-taking platform like OneNote or Google Drive, and devices differ meaningfully in which of these paths they actually support natively versus not at all.\n\nThis matters concretely for anyone using the device for professional or academic work where notes need to end up in a shared document, an email, or a specific software ecosystem, since a device with limited export options can leave your handwritten notes effectively stranded on the device itself.\n\nCheck the manufacturer's stated export formats and sync options against the specific software or workflow you actually need to feed notes into, rather than assuming any device syncs to everything."
  },
  {
    "criterion": "Weigh review volume against star rating, especially for newer AI-branded entrants",
    "explanation": "Established digital notebook brands with years on the market carry review counts in the thousands, giving genuine statistical confidence in their ratings, while newer devices, especially ones marketing themselves heavily around AI features to ride current interest in the category, sometimes carry only a few dozen or a few hundred reviews, which is a meaningfully thinner sample to judge long-term reliability and whether the marketed features actually work as claimed.\n\nThis doesn't mean a newer, less-reviewed device is automatically worse, but it does mean the claims on its listing carry less independently verified weight than a device with years of real-world feedback behind it.\n\nWhen comparing an established brand against a newer AI-branded entrant, check both the star rating and the review count together, and weigh a smaller but heavily AI-marketed device's claims more skeptically until more real-world feedback accumulates."
  }
];

export const faq: FaqItem[] = [
  { q: "Why does e-ink last so much longer on a charge than a normal tablet?", a: "E-ink displays only draw power when the screen content changes, unlike an LCD screen that continuously refreshes and backlights, so an e-ink device can sit idle for weeks without meaningful battery drain." },
  { q: "Is e-ink easier on the eyes than a regular tablet screen?", a: "Many people find it so, since e-ink reflects ambient light like paper rather than emitting its own backlight, reducing glare and eye strain over long sessions." },
  { q: "Do e-ink digital notebooks come in color?", a: "Some do, models like the BOOX Note Air 4C and 5 C, reMarkable Paper Pro, and Kindle Scribe Colorsoft state color e-paper displays, verify this on the specific listing before assuming." },
  { q: "Can I read in direct sunlight on an e-ink notebook?", a: "Yes, that is one of e-ink's core advantages, the display reflects ambient light rather than washing out like an LCD screen in bright light." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebook-tablets", title: "Best Digital Notebook Tablets (2026)" },
  { href: "/guide/best-color-digital-notebooks", title: "Best Color Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-for-writers", title: "Best Digital Notebooks for Writers (2026)" },
];
