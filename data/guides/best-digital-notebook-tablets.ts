export const guideSlug = "best-digital-notebook-tablets";
export const guideTitle = "8 Best Digital Notebook Tablets in 2026";
export const metaTitle = "Best Digital Notebook Tablets (2026)";
export const metaDescription =
  "8 e-ink digital notebook tablets we evaluated, standalone screen-based devices you write on directly, distinct from paper-based reusable notebooks.";
export const mainKeyword = "digital notebook tablet";
export const introParagraphs = [
  "\"Digital notebook tablet\" specifically points to standalone hardware with an e-ink or e-paper screen, the kind you write on directly with a stylus, as opposed to a Rocketbook-style paper notebook you scan with your phone or a smart pen set used with special paper. If you're picturing a device with a screen, this is the right category to compare.",
  "Every pick below is genuine hardware with a display, files are stored and synced digitally rather than requiring any camera scanning step. We evaluated stated screen type, battery claims, and pen inclusion rather than claiming hands-on testing.",
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
    id: "boox-noteair-tab",
    rank: 1,
    badge: "Best Established E-Ink Tablet Line",
    name: "BOOX Note Air 10.3 E Ink Tablet, ePaper, Android 10, Front Light, G-Sensor, Digital Paper, E Ink Notepad",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+shKsz0LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08H83GCBT?tag=theofficejournal-20",
    description: "The BOOX Note Air 10.3 is a standalone Android-powered e-ink tablet with a front light and G-sensor, from one of the more established lines in this hardware category. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nIt earns the top spot in this comparison over BOOX Tablet Note Air 4C for one main reason. Runs Android for broader app flexibility. On price, it's priced at Check current price on Amazon, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Front light for use in dim rooms. On the other side, Not a color display. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","10.3 inch ePaper display","Android 10 with front light","G-sensor for auto-rotation"],
    pros: ["Runs Android for broader app flexibility","Front light for use in dim rooms","Established product line with a track record","G-sensor auto-rotation"],
    cons: ["Verify current price and battery specs from the listing","Android interface adds complexity versus a single-purpose device","Not a color display"],
    bestFor: "Buyers who want an Android-based e-ink tablet with more app flexibility.",
  },
  {
    id: "boox-4c-tab",
    rank: 2,
    badge: "Best Color E-Ink Tablet Under $65 RAM Class",
    name: "BOOX Tablet Note Air 4C, 6G 64G E Ink Tablet Color ePaper Notebook",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31EchKlKb3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT3Q52PN?tag=theofficejournal-20",
    description: "The BOOX Note Air 4C brings a stated color ePaper display to the standalone tablet category, with 6GB RAM and 64GB storage for a genuinely capable Android e-ink device. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below BOOX Note Air 10.3 E Ink Tablet in this ranking, pricing between it and BOOX Note Air 10.3 E Ink Tablet isn't directly comparable here. The compromise here is straightforward: Color e-ink panels trade some contrast versus black-and-white. What you gain in return: Color ePaper display stated on the listing. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: 6GB RAM and 64GB storage for genuine multitasking. On the other side, Android interface has a learning curve. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Color ePaper display","6GB RAM, 64GB storage","Android-based"],
    pros: ["Color ePaper display stated on the listing","6GB RAM and 64GB storage for genuine multitasking","Runs Android for app flexibility","Part of an established BOOX product line"],
    cons: ["Color e-ink panels trade some contrast versus black-and-white","Verify current price on the listing","Android interface has a learning curve"],
    bestFor: "Buyers wanting a color e-ink tablet with genuine Android app support.",
  },
  {
    id: "boox-5c-tab",
    rank: 3,
    badge: "Best Newer-Generation Color E-Ink Tablet",
    name: "BOOX Tablet 10.3in Note Air 5 C, 6G 64G E Ink Tablet Color ePaper Notebook",
    price: "$529.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FR4L5XMV?tag=theofficejournal-20",
    description: "The BOOX Note Air 5 C is the newer-generation color e-ink tablet in the same line, with a 10.3 inch display and matching 6GB RAM, 64GB storage configuration. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nSitting just under BOOX Tablet Note Air 4C, pricing between it and BOOX Tablet Note Air 4C isn't directly comparable here. Here's the honest tradeoff: Still a step below reMarkable Paper Pro in brand ecosystem polish. And here's what it gets you instead: Newer-generation hardware and software refinement. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Color ePaper display. On the other side, Verify current battery life claims. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","10.3 inch color ePaper display","6GB RAM, 64GB storage","Android-based"],
    pros: ["Newer-generation hardware and software refinement","Color ePaper display","10.3 inch writing surface","Mid-range price relative to premium color e-ink devices"],
    cons: ["Still a step below reMarkable Paper Pro in brand ecosystem polish","Android interface adds some complexity","Verify current battery life claims"],
    bestFor: "Buyers wanting the latest BOOX color e-ink tablet generation.",
  },
  {
    id: "remarkable-pro-tab",
    rank: 4,
    badge: "Best Premium Color Notebook Tablet",
    name: "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    price: "$779.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGBDR2PM?tag=theofficejournal-20",
    description: "The reMarkable Paper Pro pairs a color e-paper display with the brand's polished single-purpose software, bundled with a folio and the Marker Plus stylus. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nRanked just behind BOOX Tablet 10.3in Note Air 5 C, it costs more than BOOX Tablet 10.3in Note Air 5 C. The real tradeoff against that pick: The most expensive tablet in this guide. In exchange, it offers this instead: Color e-paper display. That's the swap that decides whether this pick or the one above it is the better fit for your note-taking needs.\n\nWorth knowing before you decide: Marker Plus stylus and folio included. On the other side, Less app flexibility than an Android-based BOOX tablet. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Color e-paper display","Marker Plus and folio included","Largest screen in this guide"],
    pros: ["Color e-paper display","Marker Plus stylus and folio included","Focused, distraction-free single-purpose interface","Largest screen among these picks"],
    cons: ["The most expensive tablet in this guide","Verify current cloud subscription requirements","Less app flexibility than an Android-based BOOX tablet"],
    bestFor: "Buyers prioritizing a polished, focused writing experience over app flexibility.",
  },
  {
    id: "remarkable-pro-tab2",
    rank: 5,
    badge: "Best Premium Color Tablet Without Folio",
    name: "reMarkable Paper Pro with Marker Plus",
    price: "$679.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/412wtt+9l5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DG9ZXWMK?tag=theofficejournal-20",
    description: "This is the same reMarkable Paper Pro hardware without the bundled Basalt Book Folio, a lower-cost way into the same color e-ink tablet if you don't need the case included. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below reMarkable Paper Pro with Marker Plus and Basalt Book Folio in this ranking, it's priced lower than reMarkable Paper Pro with Marker Plus and Basalt Book Folio. The compromise here is straightforward: No case included, a separate purchase if needed. What you gain in return: Same color e-paper display as the folio bundle. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Marker Plus stylus included. On the other side, Verify current cloud subscription requirements. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Color e-paper display","Marker Plus included","No folio bundled"],
    pros: ["Same color e-paper display as the folio bundle","Marker Plus stylus included","Lower cost than the folio-included version","Polished, single-purpose interface"],
    cons: ["No case included, a separate purchase if needed","Still a premium price overall","Verify current cloud subscription requirements"],
    bestFor: "Buyers who want the Paper Pro tablet but plan to source their own case.",
  },
  {
    id: "remarkable2-tab",
    rank: 6,
    badge: "Best Mid-Range E-Ink Tablet Overall",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    description: "The reMarkable 2 remains a strong mid-range entry into standalone e-ink tablets, black and white but with a genuinely paper-like writing feel and long battery life. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nSitting just under reMarkable Paper Pro with Marker Plus, it's priced lower than reMarkable Paper Pro with Marker Plus. Here's the honest tradeoff: Black and white display only. And here's what it gets you instead: Long battery life measured in weeks. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Marker Plus stylus included. On the other side, Fewer apps than an Android-based tablet. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Marker Plus included","Black and white e-paper display","Weeks of battery life"],
    pros: ["Long battery life measured in weeks","Marker Plus stylus included","Genuinely paper-like writing feel","Lower price than color e-ink tablets"],
    cons: ["Black and white display only","Verify current cloud subscription requirements","Fewer apps than an Android-based tablet"],
    bestFor: "Buyers wanting the best balance of price and writing quality without needing color.",
  },
  {
    id: "remarkable2-tab-folio",
    rank: 7,
    badge: "Best Mid-Range Tablet with Case Included",
    name: "reMarkable 2 with Marker Plus and Basalt Book Folio",
    price: "Check current price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31yGU6PCN2L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8Z354YW?tag=theofficejournal-20",
    description: "This reMarkable 2 bundle adds the Basalt Book Folio to the same tablet and Marker Plus pairing, a complete kit for buyers who want a case from day one. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nRanked just behind reMarkable 2 with Marker Plus, it's priced lower than reMarkable 2 with Marker Plus. The real tradeoff against that pick: Costs more than the tablet-only bundle. In exchange, it offers this instead: Folio case included alongside the Marker Plus. That's the swap that decides whether this pick or the one above it is the better fit for your note-taking needs.\n\nWorth knowing before you decide: Same long battery life as the base model. On the other side, Verify current cloud subscription requirements. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","Marker Plus and Basalt folio included","Black and white e-paper display","Weeks of battery life"],
    pros: ["Folio case included alongside the Marker Plus","Same long battery life as the base model","Genuinely paper-like writing feel","Complete kit out of the box"],
    cons: ["Costs more than the tablet-only bundle","Black and white display only","Verify current cloud subscription requirements"],
    bestFor: "Buyers wanting a complete mid-range e-ink tablet and case kit in one purchase.",
  },
  {
    id: "kindle-scribe-tab",
    rank: 8,
    badge: "Best Notebook Tablet That Doubles as an E-Reader",
    name: "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    price: "$679.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    description: "The Kindle Scribe Colorsoft is a standalone e-ink tablet with a stated color paper-like display, and it doubles as a full Kindle e-reader alongside its notebook function. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOne spot below reMarkable 2 with Marker Plus and Basalt Book Folio in this ranking, pricing between it and reMarkable 2 with Marker Plus and Basalt Book Folio isn't directly comparable here. The compromise here is straightforward: Premium price similar to reMarkable Paper Pro. What you gain in return: Color display stated on the listing. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Pen included in the box. On the other side, Verify current handwriting conversion accuracy. That's the main tradeoff to weigh against everything above.",
    specs: ["E-ink digital notebook device, Type 2","11 inch color paper-like display","Pen included","Combines notebook and Kindle library"],
    pros: ["Color display stated on the listing","Pen included in the box","Doubles as a full e-reader","Large 11 inch writing surface"],
    cons: ["Premium price similar to reMarkable Paper Pro","Best value if you're already in the Kindle ecosystem","Verify current handwriting conversion accuracy"],
    bestFor: "Buyers wanting one screen-based device for both books and notes.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Confirmed genuine screen-based hardware only", description: "Excluded reusable paper notebooks and smart pen sets from this guide, every pick here is a standalone device with an e-ink or e-paper display." },
  { title: "Screen type and resolution class noted per listing", description: "Distinguished black-and-white e-paper panels from color ePaper panels based only on what each specific listing states." },
  { title: "Pen inclusion and ecosystem noted", description: "Checked whether a stylus ships in the box and whether the device runs Android (broader app support) or a closed single-purpose interface." },
  { title: "Price weighed against total cost of ownership", description: "Considered whether a cloud subscription is required for full feature access on premium models, rather than comparing sticker price alone." },
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
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: reMarkable Paper Pro with Marker Plus and Basalt Book Folio, reMarkable Paper Pro with Marker Plus, reMarkable 2 with Marker Plus."
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
        "text": "BOOX Note Air 10.3 E Ink Tablet fits this specifically: Runs Android for broader app flexibility."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what reMarkable Paper Pro with Marker Plus and Basalt Book Folio offers: Color e-paper display. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "reMarkable 2 with Marker Plus already covers the essentials: Long battery life measured in weeks. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
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
  { q: "Is a digital notebook tablet the same as a Rocketbook?", a: "No, a digital notebook tablet is standalone hardware with a screen you write on directly, while a Rocketbook is a reusable paper notebook you scan with your phone." },
  { q: "Do digital notebook tablets need a subscription?", a: "Some premium models have historically required a subscription for full cloud sync features, verify current requirements on the specific product listing." },
  { q: "Are color e-ink tablets worth the extra cost?", a: "If you rely on color-coded notes or document markup, yes, otherwise a black-and-white model like the reMarkable 2 offers a lower entry price with the same core writing feel." },
  { q: "Which digital notebook tablet has the best battery life?", a: "E-ink tablets generally last weeks per charge since the screen only draws power when it changes, verify the specific battery claim on each listing." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-e-ink-digital-notebooks", title: "Best E-Ink Digital Notebooks (2026)" },
  { href: "/guide/best-color-digital-notebooks", title: "Best Color Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-with-pens", title: "Best Digital Notebooks with Pens (2026)" },
];
