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
    "q": "What actually makes a screen \"feel like paper\"?",
    "a": "A textured E Ink display combined with a friction-tip stylus, which together replicate the drag of pen on paper. All five products here have both; a standard glass touchscreen device does not, regardless of marketing."
  },
  {
    "q": "Is color E Ink worth the extra cost?",
    "a": "Only if you specifically need color for your notes or PDF annotations. Color E Ink is still visibly less saturated than an LCD screen, so it's a real tradeoff, not a straightforward upgrade."
  },
  {
    "q": "Do I need a subscription to use these?",
    "a": "Core writing and reading works offline on all five without a subscription. Some advanced features, particularly on reMarkable, are behind a paid Connect plan, check the current listing for specifics."
  },
  {
    "q": "Which has the most independent evidence the writing feel is good?",
    "a": "4 stars, has by far the largest tested base of any product in this comparison."
  },
  {
    "q": "Can these replace a Kindle for reading books?",
    "a": "The Kindle Scribe can, since it runs Amazon's full e-reader ecosystem. The reMarkable and BOOX are built around notes and PDF documents rather than a book storefront."
  }
];

export const guideSlug = "best-digital-notebooks-that-feel-like-paper";

export const guideTitle = "The Best Digital Notebooks That Feel Like Paper for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg";

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
          "ReMarkable Paper Pure with Marker"
        ],
        [
          "",
          "ReMarkable Paper Pro with Marker Plus and Basalt Book Folio"
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
          "ReMarkable Paper Pure with Marker"
        ],
        [
          "",
          "ReMarkable 2 with Marker Plus"
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "ReMarkable Paper Pro with Marker Plus and Basalt Book Folio"
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
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: reMarkable Paper Pure with Marker, reMarkable 2 with Marker Plus."
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
        "text": "Amazon Kindle Scribe fits this specifically: Doubles as a full Kindle e-reader, not just a notebook."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what reMarkable Paper Pro with Marker Plus and Basalt Book Folio offers: Bundles accessories (folio, upgraded pen) that are sold separately for other models. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "ReMarkable Paper Pure with Marker already covers the essentials: Purpose-built for a paper-like writing feel, not a repurposed e-reader. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Genuine textured E Ink hardware, not just marketing claims",
    "description": "We only included devices with an actual friction-tip stylus and textured E Ink screen, the two hardware features that produce a paper-like writing feel, rather than glass-touchscreen devices that describe themselves as paper-like."
  },
  {
    "title": "",
    "description": "Only the BOOX and the top-tier reMarkable Paper Pro offer color E Ink, and we noted that color E Ink still looks visibly less saturated than an LCD rather than implying it matches a normal tablet screen."
  },
  {
    "title": "Review volume as evidence for a subjective claim",
    "description": "\"Feels like paper\" is inherently subjective, so we weighted review count and rating heavily since a large base of independent testers is the best available evidence for a tactile claim."
  },
  {
    "title": "Ecosystem lock-in and subscription dependence",
    "description": "We flagged where advanced features require a paid cloud subscription (reMarkable Connect) versus what works fully offline out of the box."
  }
];

export const introParagraphs = [
  "This is a real, distinct product category from reusable paper notebooks: every product here is an E Ink tablet with a textured display and a friction-tip stylus, engineered specifically to replicate the drag and resistance of pen on paper rather than the frictionless glass of a normal touchscreen.",
  "The five products span a genuine price range from $299 to $779, and the price difference tracks real hardware differences: screen size, color E Ink versus monochrome, pressure-sensitivity levels, and whether the pen or a protective folio is bundled in."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "digital notebook that feels like paper";

export const metaDescription = "We compared 5 digital notebooks that feel like paper on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Digital Notebooks That Feel Like Paper for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0cz9vfqp-feelpaper",
    "rank": 1,
    "badge": "Best Overall Value",
    "name": "Amazon Kindle Scribe (16GB)",
    "price": "$399.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=theofficejournal-20",
    "description": "Kindle Scribe combines the textured E Ink display with Amazon's e-reader ecosystem, so it's the pick for anyone who wants to read books and annotate PDFs on the same device they take notes on. It undercuts the comparable reMarkable Paper Pure at the same price point while adding e-book library access reMarkable doesn't have. Doubles as a full Kindle e-reader, not just a notebook. On value, it's actually priced above reMarkable Paper Pure with Marker, which is worth weighing if cost is your deciding factor between the two. On the other side, Verify current pen bundle on the live listing before ordering.",
    "specs": [
      "16GB storage",
      "E Ink display with textured writing surface",
      "Includes Premium Pen (check current listing)",
      "Kindle e-reader ecosystem built in"
    ],
    "pros": [
      "Doubles as a full Kindle e-reader, not just a notebook",
      "Competitively priced against similarly specced competitors",
      "Integrates with Amazon's existing content library"
    ],
    "cons": [
      "Tied to Amazon's ecosystem for book purchases",
      "Verify current pen bundle on the live listing before ordering"
    ],
    "bestFor": "Buyers who already read on Kindle and want note-taking on the same device."
  },
  {
    "id": "b0gvkbljk2-feelpaper",
    "rank": 2,
    "badge": "Most Paper-Focused Design",
    "name": "reMarkable Paper Pure with Marker",
    "price": "$399.00",
    "rating": "4.1",
    "reviews": "18",
    "imageUrl": "https://m.media-amazon.com/images/I/31KAykcDD+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVKBLJK2?tag=theofficejournal-20",
    "description": "ReMarkable built its whole product line around the paper-feel promise and doesn't sell e-books or run distracting apps, which keeps the device singularly focused on writing and reading documents. On the other side, Some features require a paid reMarkable Connect subscription.",
    "specs": [
      "Marker stylus included",
      "No backlight on this model, check current specs",
      "Distraction-free interface, no app store",
      "reMarkable cloud subscription available for extra features"
    ],
    "pros": [
      "Purpose-built for a paper-like writing feel, not a repurposed e-reader",
      "No app-store distractions"
    ],
    "cons": [
      "Smaller review count than more established models in this lineup",
      "Some features require a paid reMarkable Connect subscription"
    ],
    "bestFor": "Buyers who want a distraction-free writing device without e-reader or app features pulling focus."
  },
  {
    "id": "b08hdl3xjr-feelpaper",
    "rank": 3,
    "badge": "Most Proven Track Record",
    "name": "reMarkable 2 with Marker Plus",
    "price": "$449.00",
    "rating": "4.4",
    "reviews": "1,354",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "4 rating, which matters when you're evaluating a claim as subjective as \"feels like paper\", this is the model most buyers have actually tested against their expectations.\n\nOn the other side, Some advanced features are behind a subscription.",
    "specs": [
      "Marker Plus stylus included",
      "10.3 inch textured E Ink display",
      "reMarkable cloud subscription optional"
    ],
    "pros": [
      "Marker Plus stylus included at this price, not sold separately"
    ],
    "cons": [
      "No backlight, so it's not usable in low light without an external light source",
      "Some advanced features are behind a subscription"
    ],
    "bestFor": "Buyers who want the most field-tested paper-feel device with the most independent verification of the writing experience."
  },
  {
    "id": "b0fr4kxmkf-feelpaper",
    "rank": 4,
    "badge": "Best Color E Ink Option",
    "name": "BOOX Note Air 5 C, 10.3\" 6GB/64GB E Ink Tablet",
    "price": "$529.99",
    "rating": "4.3",
    "reviews": "310",
    "imageUrl": "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR4KXMKF?tag=theofficejournal-20",
    "description": "This is the only color E Ink display in this comparison, the reMarkable and base Kindle Scribe are monochrome. Color E Ink still has visibly lower saturation and contrast than an LCD, which is a real tradeoff to understand before paying the premium, but it's the honest option if color matters for your notes or PDFs.\n\nThe real tradeoff against that pick: Color E Ink has noticeably less vibrant color than an LCD screen.\n\nOn the other side, Android app support adds complexity most single-purpose notebooks don't have.",
    "specs": [
      "6GB RAM / 64GB storage",
      "10.3 inch color E Ink display",
      "Runs Android, supports third-party apps"
    ],
    "pros": [
      "Only true color E Ink display in this comparison",
      "Runs Android apps, unlike the closed reMarkable and Kindle ecosystems"
    ],
    "cons": [
      "Color E Ink has noticeably less vibrant color than an LCD screen",
      "Android app support adds complexity most single-purpose notebooks don't have"
    ],
    "bestFor": "Buyers who specifically need color note-taking or PDF annotation and accept the tradeoffs of color E Ink."
  },
  {
    "id": "b0dgbdr2pm-feelpaper",
    "rank": 5,
    "badge": "Most Premium, Highest Cost",
    "name": "reMarkable Paper Pro with Marker Plus and Basalt Book Folio",
    "price": "$779.00",
    "rating": "4.2",
    "reviews": "540",
    "imageUrl": "https://m.media-amazon.com/images/I/41yKUd9lhbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DGBDR2PM?tag=theofficejournal-20",
    "description": ", this is nearly double the price of the base reMarkable 2, bundling color display, the upgraded Marker Plus stylus, and a physical folio. It's the flagship of the lineup, but the price jump is real and buyers should confirm the color and larger screen actually matter to them before paying the premium over the reMarkable 2. On the other side, Rating is slightly lower than the established reMarkable 2, worth weighing against the price premium.",
    "specs": [
      "Color display",
      "Marker Plus stylus included",
      "Basalt Book Folio included"
    ],
    "pros": [
      "Bundles accessories (folio, upgraded pen) that are sold separately for other models",
      "Color display without the Android app complexity of the BOOX"
    ],
    "cons": [
      "Significantly more expensive than the reMarkable 2 for a color upgrade",
      "Rating is slightly lower than the established reMarkable 2, worth weighing against the price premium"
    ],
    "bestFor": "Buyers who want the top-of-line reMarkable experience with color and don't mind the price premium."
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-for-handwriting",
    "title": "Best Digital Notebooks for Handwriting (2026)"
  },
  {
    "href": "/guide/best-ai-digital-notebooks",
    "title": "Best AI Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Digital Notebooks That Feel Like Paper";
