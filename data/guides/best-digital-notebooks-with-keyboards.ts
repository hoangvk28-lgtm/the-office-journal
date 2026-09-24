export const guideSlug = "best-digital-notebooks-with-keyboards";
export const guideTitle = "5 Best Digital Notebooks with Keyboards in 2026";
export const metaTitle = "Best Digital Notebooks with Keyboards (2026)";
export const metaDescription =
  "Honest finding: no current E Ink notebook in our research ships with a first-party keyboard. We ranked the 5 devices by whether their operating system actually supports a Bluetooth keyboard at all.";
export const mainKeyword = "digital notebook with keyboard";
export const introParagraphs = [
  "We need to be upfront about what we found: none of the current leading E Ink notebooks, Kindle Scribe, reMarkable, XPPen, ship with a first-party keyboard or official keyboard folio at time of writing. \"Digital notebook with keyboard\" searches don't currently have a clean, purpose-built hardware match.",
  "What we could honestly evaluate is whether each device's operating system supports pairing a separate Bluetooth keyboard at all, since that's the realistic path to typing on any of these. Closed ecosystems (Kindle Scribe, reMarkable) generally don't support this the way an open Android-based device does.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0dx234nwp-keyboarddn",
    rank: 1,
    badge: "Most Likely to Support a Bluetooth Keyboard",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    price: "$299.98",
    rating: "4.3",
    reviews: "329",
    imageUrl: "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DX234NWP?tag=theofficejournal-20",
    description: "This is not sold with a keyboard, but XPPen's note-taking tablets are more likely to run an open enough OS to support a paired Bluetooth keyboard than the closed Kindle Scribe or reMarkable ecosystems, verify current OS/app support before assuming typing works as expected.\n\nIt earns the top spot in this comparison over XPPen 3 in 1 Color Digital Notebook 10.95\" for one main reason. Lowest price in this comparison. On price, it comes in below XPPen 3 in 1 Color Digital Notebook 10.95\", which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: More open software ecosystem than Kindle or reMarkable. On the other side, Bluetooth keyboard support should be verified on the current listing before buying for that purpose. That's the main tradeoff to weigh against everything above.",
    specs: ["10.95 inch color display","16384 pressure levels","329 reviews at 4.3 stars"],
    pros: ["Lowest price in this comparison","More open software ecosystem than Kindle or reMarkable"],
    cons: ["No official keyboard accessory currently bundled or sold","Bluetooth keyboard support should be verified on the current listing before buying for that purpose"],
    bestFor: "Buyers who want the best odds of pairing a keyboard, understanding it's not an official supported accessory.",
  },
  {
    id: "b0g2shl3dh-keyboarddn",
    rank: 2,
    badge: "Same Hardware, Alternate Bundle",
    name: "XPPen 3 in 1 Color Digital Notebook 10.95\" (Alternate Bundle)",
    price: "$324.95",
    rating: "4.2",
    reviews: "180",
    imageUrl: "https://m.media-amazon.com/images/I/31dwpvU+C7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2SHL3DH?tag=theofficejournal-20",
    description: "Same core hardware as the pick above at a slightly higher price. Neither XPPen listing includes a keyboard; check the current listing for exact accessory bundle differences.\n\nOne spot below XPPen 3 in 1 Color Digital Notebook 10.95\" in this ranking, it costs more than XPPen 3 in 1 Color Digital Notebook 10.95\". The compromise here is straightforward: Costs more with a lower rating than the other XPPen listing. What you gain in return: Same underlying hardware as the lower-priced XPPen option. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Same underlying hardware as the lower-priced XPPen option. On the other side, No official keyboard bundled. That's the main tradeoff to weigh against everything above.",
    specs: ["10.95 inch color display","16384 pressure levels","180 reviews at 4.2 stars"],
    pros: ["Same underlying hardware as the lower-priced XPPen option"],
    cons: ["Costs more with a lower rating than the other XPPen listing","No official keyboard bundled"],
    bestFor: "Buyers comparing XPPen bundle options, check current inclusions before paying more here.",
  },
  {
    id: "b0fc1vjjfp-keyboarddn",
    rank: 3,
    badge: "Best If You Only Need Occasional Typing",
    name: "Amazon Kindle Scribe Colorsoft 64GB",
    price: "$679.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    description: "Kindle's closed ecosystem does not support a general Bluetooth keyboard for note-taking the way an Android-based device might. Included here as the honest \"no\" case: if you need real typing, this is not the device, regardless of its other strengths.\n\nSitting just under XPPen 3 in 1 Color Digital Notebook 10.95\", it costs more than XPPen 3 in 1 Color Digital Notebook 10.95\". Here's the honest tradeoff: No keyboard support of any kind for note-taking. And here's what it gets you instead: Excellent note and reading device on its own merits. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Excellent note and reading device on its own merits. On the other side, No keyboard support of any kind for note-taking. That's the main tradeoff to weigh against everything above.",
    specs: ["64GB storage","Color E Ink display","Closed Amazon ecosystem, no general Bluetooth keyboard support"],
    pros: ["Excellent note and reading device on its own merits"],
    cons: ["No keyboard support of any kind for note-taking"],
    bestFor: "Buyers who want AI notes and color E Ink and don't need keyboard input at all.",
  },
  {
    id: "b0cz9vfqp-keyboarddn",
    rank: 4,
    badge: "Same Ecosystem Limitation, Lower Price",
    name: "Amazon Kindle Scribe (16GB)",
    price: "$399.99",
    rating: "n/a",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=theofficejournal-20",
    description: "Same closed ecosystem and lack of keyboard support as the Colorsoft above, at a lower price without color display or extra storage.\n\nRanked just behind Amazon Kindle Scribe Colorsoft 64GB, it's priced lower than Amazon Kindle Scribe Colorsoft 64GB. The real tradeoff against that pick: No keyboard support, same as the Colorsoft model. In exchange, it offers this instead: Lower cost entry into the Kindle Scribe lineup. That's the swap that decides whether this pick or the one above it is the better fit for your note-taking needs.\n\nWorth knowing before you decide: Lower cost entry into the Kindle Scribe lineup. On the other side, No keyboard support, same as the Colorsoft model. That's the main tradeoff to weigh against everything above.",
    specs: ["16GB storage","Monochrome E Ink display","Closed Amazon ecosystem, no general Bluetooth keyboard support"],
    pros: ["Lower cost entry into the Kindle Scribe lineup"],
    cons: ["No keyboard support, same as the Colorsoft model"],
    bestFor: "Buyers who've already decided keyboard support doesn't matter and want the cheaper Kindle Scribe.",
  },
  {
    id: "b08hdl3xjr-keyboarddn",
    rank: 5,
    badge: "Most Proven, Same Keyboard Limitation",
    name: "reMarkable 2 with Marker Plus",
    price: "$449.00",
    rating: "4.4",
    reviews: "1,354",
    imageUrl: "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    description: "reMarkable's Type Folio keyboard accessory exists for other models in their lineup, but check the current listing to confirm compatibility with this specific reMarkable 2 configuration before assuming it will work.\n\nOne spot below Amazon Kindle Scribe in this ranking, it costs more than Amazon Kindle Scribe. The compromise here is straightforward: Keyboard folio compatibility varies by specific reMarkable model, confirm before buying. What you gain in return: ReMarkable does sell an official keyboard folio accessory for some models in its lineup. Whether that trade is worth it depends on which side matters more for how you'll actually use it.\n\nWorth knowing before you decide: Largest, highest-rated review base in this comparison. On the other side, Keyboard accessory sold separately, not bundled. That's the main tradeoff to weigh against everything above.",
    specs: ["Marker Plus stylus included","reMarkable Type Folio may be compatible, verify current model support","1,354 reviews at 4.4 stars"],
    pros: ["reMarkable does sell an official keyboard folio accessory for some models in its lineup","Largest, highest-rated review base in this comparison"],
    cons: ["Keyboard folio compatibility varies by specific reMarkable model, confirm before buying","Keyboard accessory sold separately, not bundled"],
    bestFor: "Buyers considering the reMarkable ecosystem who should specifically verify Type Folio compatibility before assuming keyboard support.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Honest disclosure of missing keyboard hardware", description: "We did not find a current E Ink notebook that ships with a bundled first-party keyboard, and said so directly rather than forcing a false top-5 keyboard-notebook narrative." },
  { title: "OS openness to a paired keyboard", description: "We distinguished closed ecosystems (Kindle, reMarkable's core OS) from more open ones (XPPen), since that determines whether typing is realistically possible at all." },
  { title: "Official accessory availability, verified per model", description: "Where a brand (reMarkable) sells an official keyboard folio for some models, we flagged that compatibility needs confirming for the specific model rather than assuming it applies across the whole lineup." },
  { title: "Review volume where relevant", description: "We still weighted established review history for overall device quality, even though it doesn't speak directly to keyboard support." },
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
          "XPPen 3 in 1 Color Digital Notebook 10.95\""
        ],
        [
          "AI-assisted or document-heavy work",
          "Amazon Kindle Scribe Colorsoft 64GB"
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
          "Under $300",
          "XPPen 3 in 1 Color Digital Notebook 10.95\""
        ],
        [
          "Mid-range",
          "Amazon Kindle Scribe"
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "Amazon Kindle Scribe Colorsoft 64GB"
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
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: none explicitly confirmed in this specific roundup, check the listing before assuming."
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
          "reMarkable 2 with Marker Plus"
        ],
        [
          "Largest review base (more statistical confidence)",
          "reMarkable 2 with Marker Plus"
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
        "text": "XPPen 3 in 1 Color Digital Notebook 10.95\" fits this specifically: Lowest price in this comparison."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what Amazon Kindle Scribe Colorsoft 64GB offers: Excellent note and reading device on its own merits. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "XPPen 3 in 1 Color Digital Notebook 10.95\" already covers the essentials: Lowest price in this comparison. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
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
  { q: "Does any current E Ink notebook come with a keyboard?", a: "No. None of the leading options, Kindle Scribe, reMarkable, XPPen, currently ship with a bundled first-party keyboard." },
  { q: "Can I pair a Bluetooth keyboard with any of these?", a: "More realistic on open, Android-based devices like the XPPen. Closed ecosystems like Kindle Scribe don't support general Bluetooth keyboard pairing for notes." },
  { q: "Does reMarkable sell a keyboard accessory?", a: "reMarkable sells a Type Folio keyboard for some models in its lineup, but compatibility varies, confirm it works with the specific reMarkable model you're buying." },
  { q: "Should I buy one of these expecting to type on it regularly?", a: "Not recommended as your primary plan. If regular typing is essential, a standard tablet with a keyboard case is likely a better fit than an E Ink notebook." },
  { q: "Why include Kindle Scribe if it has no keyboard support?", a: "To give an honest, complete picture, buyers should know explicitly that this device has no keyboard path, not just see it omitted without explanation." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-digital-notebooks", title: "Best Digital Notebooks (2026)" },
  { href: "/guide/best-digital-notebooks-that-feel-like-paper", title: "Best Digital Notebooks That Feel Like Paper (2026)" },
  { href: "/guide/best-digital-notebooks-for-handwriting", title: "Best Digital Notebooks for Handwriting (2026)" },
];
