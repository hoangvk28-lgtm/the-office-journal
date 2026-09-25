// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Check whether AI or handwriting-conversion features are included or require a subscription",
    "explanation": "Digital notebook brands take different approaches to their software features: some bundle handwriting-to-text conversion, document summarization, and cloud sync into the purchase price, while others, most notably reMarkable's Connect plan, gate the more advanced versions of these same features behind an ongoing monthly subscription that continues costing money long after the initial purchase.\n\nThis is a real total-cost-of-ownership difference that a one-time hardware price comparison completely misses, since a cheaper device with a required subscription can cost more over two or three years than a pricier device with everything included upfront.\n\nCheck the specific listing and manufacturer's website for whether the features you actually want are included in the base purchase or require an ongoing plan, and factor that recurring cost into your real comparison."
  },
  {
    "criterion": "Understand that \"AI\" and \"handwriting conversion\" mean different things across different devices",
    "explanation": "The marketing term \"AI\" gets applied to several different features across this product category: converting your handwriting into typed text, summarizing a long document or your own notes, organizing notes automatically by topic, or simply offering a chatbot-style writing assistant, and a device marketed heavily around \"AI\" doesn't necessarily include all, or even most, of these specific capabilities.\n\nThis matters because two devices can both claim AI features while actually doing completely different things, so a buyer specifically wanting handwriting-to-text conversion could end up with a device whose \"AI\" feature is actually a summarization tool that doesn't address their actual need at all.\n\nRead the specific feature list rather than the marketing headline, and confirm the device does the exact task you need (handwriting conversion specifically, not just \"AI\" generally) before buying."
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

export const faq = [
  {
    "q": "Does every digital notebook come with a pen?",
    "a": "No, some reusable paper notebooks sell the notebook and pen separately, always check the included-items section of the specific listing."
  },
  {
    "q": "Do I need to charge the pen?",
    "a": "Smart pens used in real-time digitizing sets typically need charging, while plain styluses for e-ink screens usually do not."
  },
  {
    "q": "What pen works with a Rocketbook notebook?",
    "a": "Rocketbook-style notebooks generally require a specific erasable pen, most commonly a Pilot Frixion, a regular ballpoint can permanently mark the page."
  },
  {
    "q": "Is the pen included with the reMarkable?",
    "a": "The reMarkable 2 and reMarkable Paper Pro listings referenced here include the Marker Plus stylus as part of the bundle."
  }
];

export const guideSlug = "best-digital-notebooks-with-pens";

export const guideTitle = "The Best Digital Notebooks with a Pen Included: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "What you need it for",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "",
          "SyncPen Digital Notebook Smart Pen Set"
        ],
        [
          "",
          "Amazon Kindle Scribe Colorsoft 64GB"
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
          "SyncPen Digital Notebook Smart Pen Set"
        ],
        [
          "",
          "Noteorius Smart Notebook with Pen and Folio"
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
        "label": "",
        "text": "AI note tools come with the purchase price, no ongoing cost. In this comparison: check each listing's terms directly."
      },
      {
        "label": "",
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: reMarkable 2 with Marker Plus, reMarkable Paper Pro with Marker Plus."
      }
    ],
    "note": "Check each specific listing for current subscription terms, since these change over time."
  },
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
          "ReMarkable 2 with Marker Plus"
        ],
        [
          "",
          "ReMarkable 2 with Marker Plus"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Explicit confirmation of handwriting-to-text conversion (not just \"AI\" generally), and whether that specific feature is included or requires a subscription."
      },
      {
        "label": "",
        "text": "ReMarkable Paper Pro with Marker Plus fits this specifically: Marker Plus stylus included."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Amazon Kindle Scribe Colorsoft 64GB offers: Pen included, no separate purchase. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "SyncPen Digital Notebook Smart Pen Set already covers the essentials: Pen included at the lowest price point here. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Pen inclusion confirmed from the listing",
    "description": "Only included products where the listing explicitly states a pen, marker, or stylus ships in the box, not products where a compatible pen must be purchased separately."
  },
  {
    "title": "Pen's role in the product understood per type",
    "description": "Distinguished between an e-ink stylus (an accessory to a screen device), a smart pen (the core mechanism of the product), and a bundled Rocketbook pen (a nice-to-have paired with an erasable notebook)."
  },
  {
    "title": "Total kit value assessed, not just the base price",
    "description": "Weighed whether the included pen adds meaningful value versus a listing that bundles a low-cost accessory to justify a higher price."
  },
  {
    "title": "Sync method verified against the pen type",
    "description": "Confirmed whether the pen enables real-time sync (smart pen sets) or is simply a writing instrument for a screen (e-ink devices)."
  }
];

export const introParagraphs = [
  "Not every digital notebook listing that mentions a pen actually includes one in the box, and the pen itself means something different depending on the product type: an e-ink device bundles a stylus, a smart pen set includes the sensor pen that makes the whole product work, and some Rocketbook-style notebooks bundle a Pilot Frixion pen while others sell it separately.",
  "We only included picks here where the listing explicitly states a pen, marker, or stylus is included, so you are not caught buying a notebook and discovering you need to order a compatible pen separately."
];

export const lastUpdated = "2026-08-05";

export const mainKeyword = "digital notebook with pen";

export const metaDescription = "A practical comparison of 7 digital notebooks with a pen included, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Digital Notebooks with a Pen Included (2026)";

export const products: GuideProduct[] = [
  {
    "id": "remarkable2-pen",
    "rank": 1,
    "badge": "Best E-Ink Notebook with Pen Included",
    "name": "reMarkable 2 with Marker Plus",
    "price": "$449.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "The reMarkable 2 ships with the Marker Plus stylus included, no separate purchase needed to start writing on the device. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nMarker Plus stylus included in the box. On price, it comes in below reMarkable Paper Pro with Marker Plus, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Black and white display only.",
    "specs": [
      "E-ink digital notebook device, Type 2",
      "Marker Plus stylus included",
      "Writes directly on the screen",
      "Weeks of battery life"
    ],
    "pros": [
      "Marker Plus stylus included in the box",
      "No batteries needed in the pen itself",
      "Genuine e-ink writing feel",
      "Long device battery life"
    ],
    "cons": [
      "Higher price than paper-based options",
      "Verify subscription requirements for full cloud sync",
      "Black and white display only"
    ],
    "bestFor": "Buyers who want a complete e-ink writing kit out of the box."
  },
  {
    "id": "remarkable-pro-pen",
    "rank": 2,
    "badge": "Best Premium Notebook with Pen Included",
    "name": "reMarkable Paper Pro with Marker Plus",
    "price": "$679.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/412wtt+9l5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DG9ZXWMK?tag=theofficejournal-20",
    "description": "The reMarkable Paper Pro includes the Marker Plus stylus alongside its color e-paper display, a complete premium writing kit in one box. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOn the other side, Overkill if you only need basic notes.",
    "specs": [
      "E-ink digital notebook device, Type 2",
      "Marker Plus included",
      "Color e-paper display",
      "Larger writing surface"
    ],
    "pros": [
      "Marker Plus stylus included",
      "Color e-paper display included",
      "No separate pen purchase required",
      "Larger screen than the standard reMarkable 2"
    ],
    "cons": [
      "Premium price point",
      "Verify current cloud subscription requirements",
      "Overkill if you only need basic notes"
    ],
    "bestFor": "Buyers wanting the most complete premium e-ink and pen bundle."
  },
  {
    "id": "kindle-scribe-pen",
    "rank": 3,
    "badge": "Best E-Reader Notebook with Pen Included",
    "name": "Amazon Kindle Scribe Colorsoft 64GB, 11 inch paper-like color display with front light, Pen included, Graphite",
    "price": "$679.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    "description": "The Kindle Scribe Colorsoft includes a pen in the box, letting you write and annotate immediately on its stated color paper-like display. This is a true e-ink digital notebook device (a standalone tablet with an e-paper screen you write on directly with a stylus, with files stored and synced digitally).\n\nOn the other side, Verify current handwriting conversion accuracy.",
    "specs": [
      "E-ink digital notebook device, Type 2",
      "Pen included",
      "Color paper-like display",
      "Combines reading and notes"
    ],
    "pros": [
      "Pen included, no separate purchase",
      "Color display stated on the listing",
      "Doubles as a full e-reader",
      "Large 11 inch writing surface"
    ],
    "cons": [
      "Premium price similar to reMarkable Paper Pro",
      "Best value for buyers already in the Kindle ecosystem",
      "Verify current handwriting conversion accuracy"
    ],
    "bestFor": "Buyers who want one pen-included device for both books and notes."
  },
  {
    "id": "noteorius-pen2",
    "rank": 4,
    "badge": "Best Smart Pen Set with Folio Included",
    "name": "Noteorius Smart Notebook with Pen and Folio, Reusable Digital Writing Pad",
    "price": "$199.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41+UCf2-LrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FM4K63P3?tag=theofficejournal-20",
    "description": "The Noteorius set includes both the sensor pen and a folio in the box, a complete real-time digitizing kit for paper-based writing. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe real tradeoff against that pick: Pen requires charging periodically.\n\nOn the other side, Verify current app compatibility.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Pen and folio included",
      "Real-time sync as you write",
      "App sync with cloud storage"
    ],
    "pros": [
      "Pen and folio included as standard",
      "Real-time sync while writing on real paper",
      "App sync with cloud storage",
      "Mid-range price for a complete kit"
    ],
    "cons": [
      "Pen requires charging periodically",
      "Smaller brand than Rocketbook or reMarkable",
      "Verify current app compatibility"
    ],
    "bestFor": "Buyers who want a complete paper-and-pen digitizing kit in one purchase."
  },
  {
    "id": "syncpen-pen2",
    "rank": 5,
    "badge": "Best Budget Smart Pen Set with Pen Included",
    "name": "SyncPen Digital Notebook Smart Pen Set, Real Time Sync from Paper to App",
    "price": "$79.00",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/41eM5RJPa2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F5P2186C?tag=theofficejournal-20",
    "description": "SyncPen includes its Bluetooth sensor pen as part of the set, the lowest-priced pen-included option in this guide. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nOn the other side, Pen requires periodic charging.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Bluetooth pen included",
      "OCR and audio recording",
      "Budget price point"
    ],
    "pros": [
      "Pen included at the lowest price point here",
      "Real-time sync plus OCR and audio recording",
      "Still writes on real paper",
      "Bluetooth connectivity"
    ],
    "cons": [
      "OCR accuracy should be verified through current reviews",
      "Smaller ecosystem than larger brands",
      "Pen requires periodic charging"
    ],
    "bestFor": "Budget-conscious buyers who still want a pen included in the box."
  },
  {
    "id": "ophayapen-pen2",
    "rank": 6,
    "badge": "Best Mid-Range Smart Pen with Handwriting Sync",
    "name": "Ophayapen Smart Pen for Note Taking with Digital Smart Notebook and Writing",
    "price": "$108.75",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/414TCBsOXsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CCV6XVX6?tag=theofficejournal-20",
    "description": "The Ophayapen set includes both the sensor pen and a companion notebook, with the listing specifically stating real-time handwriting conversion to text. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nOn the other side, Smaller brand, verify current support.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Pen and notebook included",
      "Real-time sync, converts to text",
      "Sharing via app on Android and IOS"
    ],
    "pros": [
      "Pen and notebook included together",
      "States real-time conversion to text",
      "Compatible with Android and IOS",
      "Mid-range price for the feature set"
    ],
    "cons": [
      "Verify current text-conversion accuracy through reviews",
      "Requires the specific paired notebook paper",
      "Smaller brand, verify current support"
    ],
    "bestFor": "Buyers wanting a complete pen-and-paper kit with app-based text conversion."
  },
  {
    "id": "yuan-pen2",
    "rank": 7,
    "badge": "Best Compact Smart Pen and Notebook Set",
    "name": "Yuan Digital Sync Pen with Notebook, Smart Writing Set for Note Taking",
    "price": "$79.99",
    "rating": "Verified Amazon listing",
    "reviews": "Verified Amazon listing",
    "imageUrl": "https://m.media-amazon.com/images/I/4114LI7TXAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DR2PZ5LC?tag=theofficejournal-20",
    "description": "The Yuan set bundles the sync pen with a matching notebook, a compact real-time digitizing kit. This is a smart pen and paper digitizer set (a sensor-equipped pen used with special dot-pattern paper that captures your handwriting in real time and syncs it to an app as you write).\n\nThe real tradeoff against that pick: Smaller brand, verify current app support.\n\nOn the other side, Pen requires periodic charging.",
    "specs": [
      "Smart pen and paper digitizer set, Type 3",
      "Pen and notebook included",
      "Real-time sync for note taking",
      "low-cost price"
    ],
    "pros": [
      "Pen and notebook included together",
      "low-cost for the smart pen category",
      "Real-time sync while writing",
      "Compact set, easy to carry"
    ],
    "cons": [
      "Smaller brand, verify current app support",
      "OCR and text conversion accuracy should be verified",
      "Pen requires periodic charging"
    ],
    "bestFor": "Buyers wanting an affordable complete smart pen and notebook kit."
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebook-tablets",
    "title": "Best Digital Notebook Tablets (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-with-handwriting-conversion",
    "title": "Best Digital Notebooks with Handwriting Conversion (2026)"
  }
];

export const breadcrumbLabel = "Best Digital Notebooks with a Pen Included";
