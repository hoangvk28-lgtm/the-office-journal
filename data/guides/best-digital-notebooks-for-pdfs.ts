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
    "q": "Which device has the most storage for a large PDF library?",
    "a": "The Kindle Scribe Colorsoft, with 64GB, the largest in this comparison."
  },
  {
    "q": "Do I need color for PDF annotation?",
    "a": "Only if you specifically review highlighted or color-coded documents. The monochrome Kindle Scribe and reMarkable 2 handle plain annotation well at a lower cost."
  },
  {
    "q": "Can I install my own PDF reader app?",
    "a": "Yes, on the BOOX Note Air 5 C, since it runs Android and supports third-party apps."
  },
  {
    "q": "What's the cheapest option for PDF work?",
    "a": ""
  },
  {
    "q": "Which has the most proven annotation tools?",
    "a": ""
  }
];

export const guideSlug = "best-digital-notebooks-for-pdfs";

export const guideTitle = "The Best Digital Notebooks for PDFs: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg";

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
          ""
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
          ""
        ],
        [
          "",
          "ReMarkable 2 with Marker Plus"
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
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: reMarkable 2 with Marker Plus."
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
        "text": "Amazon Kindle Scribe Colorsoft 64GB fits this specifically: Largest storage capacity of any device in this comparison."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Amazon Kindle Scribe Colorsoft 64GB offers: Largest storage capacity of any device in this comparison. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "95\" already covers the essentials: Lowest price in this comparison. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Storage capacity for real document libraries",
    "description": "We weighted storage more heavily than in general note-taking guides, since PDFs consume storage much faster than handwritten notes alone."
  },
  {
    "title": "Confirmed PDF annotation, not just viewing",
    "description": "We required actual markup tools, not just the ability to display a PDF file."
  },
  {
    "title": "Screen size and color for document readability",
    "description": "We noted where color display helps for reviewing highlighted or annotated documents."
  },
  {
    "title": "Third-party app flexibility on open platforms",
    "description": "We flagged where an Android-based device opens up dedicated third-party PDF readers beyond built-in tools."
  }
];

export const introParagraphs = [
  "PDF reading and annotation puts different demands on a device than plain note-taking: screen size for readability, storage for a real document library, and annotation tools that actually mark up the PDF rather than just floating notes on top of it.",
  "We weighted storage capacity more heavily here than in our general notebook guides, since a document-heavy workflow fills storage faster than handwritten notes alone."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "digital notebook for PDF reading and annotation";

export const metaDescription = "How 5 digital notebooks for PDFs compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Digital Notebooks for PDFs (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0fc1vjjfp-pdfdn",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Amazon Kindle Scribe Colorsoft 64GB",
    "price": "$679.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    "description": "64GB of storage for a large PDF library, color display for reviewing marked-up documents, and PDF annotation tools built into Amazon's reading ecosystem.\n\nLargest storage capacity of any device in this comparison. On price, it's actually priced above Amazon Kindle Scribe, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Highest price in this comparison.",
    "specs": [
      "64GB storage",
      "Color E Ink display",
      "PDF annotation tools included"
    ],
    "pros": [
      "Largest storage capacity of any device in this comparison",
      "Color display for reviewing highlighted documents"
    ],
    "cons": [
      "Highest price in this comparison"
    ],
    "bestFor": "Buyers with a large PDF library who want ample storage and color annotation review."
  },
  {
    "id": "b0cz9vfqp-pdfdn",
    "rank": 2,
    "badge": "Best Value",
    "name": "Amazon Kindle Scribe (16GB)",
    "price": "$399.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=theofficejournal-20",
    "description": "Same PDF annotation toolset as the Colorsoft without color or the larger storage tier, at a significantly lower price for buyers with a smaller document library.\n\nOn the other side, 16GB fills up faster than the Colorsoft's 64GB with a large PDF library.",
    "specs": [
      "16GB storage",
      "PDF annotation tools included",
      "Monochrome E Ink display"
    ],
    "pros": [
      "Lower price than the Colorsoft for the same annotation tools"
    ],
    "cons": [
      "16GB fills up faster than the Colorsoft's 64GB with a large PDF library"
    ],
    "bestFor": "Buyers with a moderate PDF library who don't need color or maximum storage."
  },
  {
    "id": "b08hdl3xjr-pdfdn",
    "rank": 3,
    "badge": "Most Proven PDF Annotation",
    "name": "reMarkable 2 with Marker Plus",
    "price": "$449.00",
    "rating": "4.4",
    "reviews": "1,354",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "On the other side, Full cloud document organization requires reMarkable Connect subscription.",
    "specs": [
      "Marker Plus stylus included",
      "PDF annotation tools"
    ],
    "pros": [
      "Largest, most proven review base in this comparison"
    ],
    "cons": [
      "Full cloud document organization requires reMarkable Connect subscription"
    ],
    "bestFor": "Buyers who want the most field-tested PDF annotation experience."
  },
  {
    "id": "b0dx234nwp-pdfdn",
    "rank": 4,
    "badge": "Best Budget PDF Option",
    "name": "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    "price": "$299.98",
    "rating": "4.3",
    "reviews": "329",
    "imageUrl": "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX234NWP?tag=theofficejournal-20",
    "description": "95 inch display, though verify current PDF app support before buying if that's your primary use case.",
    "specs": [
      "10.95 inch color display",
      "PDF viewing and annotation"
    ],
    "pros": [
      "Lowest price in this comparison",
      "Full color for reviewing marked-up documents"
    ],
    "cons": [
      "Smaller review base specifically for PDF workflows than Kindle Scribe or reMarkable"
    ],
    "bestFor": "Budget-focused buyers who want color PDF annotation at the lowest cost."
  },
  {
    "id": "b0fr4kxmkf-pdfdn",
    "rank": 5,
    "badge": "Most Flexible via Android",
    "name": "BOOX Note Air 5 C, 10.3\" Color E Ink Tablet",
    "price": "$529.99",
    "rating": "4.3",
    "reviews": "310",
    "imageUrl": "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR4KXMKF?tag=theofficejournal-20",
    "description": "Running Android means you can install dedicated third-party PDF readers with advanced organization tools beyond the built-in options on closed ecosystems.\n\nOn the other side, More expensive than the base Kindle Scribe or XPPen options.",
    "specs": [
      "Color E Ink display",
      "Runs Android for third-party PDF apps"
    ],
    "pros": [
      "Access to dedicated third-party PDF apps via Android",
      "Color E Ink for annotation review"
    ],
    "cons": [
      "More expensive than the base Kindle Scribe or XPPen options"
    ],
    "bestFor": "Buyers who want the flexibility of choosing their own PDF app rather than a built-in tool."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-with-expandable-storage",
    "title": "Best Digital Notebooks with Expandable Storage (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-that-sync-with-onenote",
    "title": "Best Digital Notebooks That Sync with OneNote (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Digital Notebooks for PDFs";
