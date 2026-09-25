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
    "q": "Is the refurbished Kindle Scribe actually a good deal?",
    "a": "99 costs less than the new 16GB base model while offering four times the storage, making it the clearest value case in this comparison."
  },
  {
    "q": "Is the refurbished reMarkable 2 worth it over buying new?",
    "a": "4) than the new listing, worth reading current reviews carefully before choosing refurbished here."
  },
  {
    "q": "What does \"Like-New\" actually mean?",
    "a": "Grading standards vary by seller, but it generally permits light cosmetic wear while guaranteeing full functionality. Check the specific listing's terms."
  },
  {
    "q": "Do refurbished units come with a warranty?",
    "a": "Often, but terms vary and may be shorter than a new unit's warranty. Verify this on the current listing before buying."
  },
  {
    "q": "Should I get 32GB or 64GB refurbished?",
    "a": "The price gap between the two refurbished Kindle Scribe options is only about $21, so 64GB is the better value for most buyers."
  }
];

export const guideSlug = "best-refurbished-digital-notebooks";

export const guideTitle = "The Best Refurbished Digital Notebooks for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/31vXCSmH+ML._SL500_.jpg";

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
          "ReMarkable 2 with Marker Plus"
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
          ""
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "ReMarkable 2 with Marker Plus"
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
        "text": "Advanced AI features require an ongoing paid plan on top of the hardware price. In this comparison: none explicitly confirmed in this specific roundup, check the listing before assuming."
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
        "text": "Like-New Amazon Kindle Scribe fits this specifically: More storage than the new base model for meaningfully less money."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "Like-New Amazon Kindle Scribe already covers the essentials: Lowest price of any Kindle Scribe option here. The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Direct price comparison against the new-condition equivalent",
    "description": "We placed refurbished listings next to their new-condition counterparts so the actual dollar savings (or lack thereof) is visible, rather than assuming refurbished always means a big discount."
  },
  {
    "title": "Rating and review count as refurbished-specific evidence",
    "description": ""
  },
  {
    "title": "Storage-to-price value within the refurbished tier",
    "description": "We compared 32GB and 64GB refurbished Kindle Scribe options directly, since the price gap between them turned out to be small enough to change the recommendation."
  },
  {
    "title": "",
    "description": "We noted that \"Like-New\" still permits light cosmetic wear under most sellers' grading systems, verify the specific listing's terms before buying."
  }
];

export const introParagraphs = [
  "99 is actually cheaper than the new 32GB base model in some configurations, which is the kind of pricing quirk worth checking before assuming more storage always costs more.",
  "We compared each refurbished listing's price directly against its new-condition counterpart rather than just listing them as generically discounted, so you can see the actual savings."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "refurbished digital notebook";

export const metaDescription = "A practical comparison of 5 refurbished digital notebooks, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Refurbished Digital Notebooks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0d4jkm1s7-refurbdn",
    "rank": 1,
    "badge": "Best Value",
    "name": "Like-New Amazon Kindle Scribe (64GB)",
    "price": "$323.99",
    "rating": "4.3",
    "reviews": "425",
    "imageUrl": "https://m.media-amazon.com/images/I/31vXCSmH+ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D4JKM1S7?tag=theofficejournal-20",
    "description": "64GB of storage for its price in Like-New condition, which undercuts the new 16GB base Kindle Scribe's its price while offering four times the storage. This is the clearest value pick in the entire refurbished comparison. More storage than the new base model for meaningfully less money. On value, it's actually priced above Like-New Amazon Kindle Scribe, which is worth weighing if cost is your deciding factor between the two. On the other side, Like-New condition means light cosmetic wear is possible, check the listing's specific grading terms.",
    "specs": [
      "64GB storage",
      "Like-New certified condition"
    ],
    "pros": [
      "More storage than the new base model for meaningfully less money"
    ],
    "cons": [
      "Like-New condition means light cosmetic wear is possible, check the listing's specific grading terms"
    ],
    "bestFor": "Buyers who want the most storage for the least money and are comfortable with Like-New condition."
  },
  {
    "id": "b0d4jhqgw2-refurbdn",
    "rank": 2,
    "badge": "Best Lower-Storage Option",
    "name": "Like-New Amazon Kindle Scribe (32GB)",
    "price": "$302.39",
    "rating": "4.3",
    "reviews": "425",
    "imageUrl": "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D4JHQGW2?tag=theofficejournal-20",
    "description": "The cheapest Kindle Scribe in this comparison, though the price gap to the 64GB Like-New model above is small enough that most buyers should size up unless storage doesn't matter to them. On the other side, Only a modest amount cheaper than the 64GB Like-New model, which is a much better value at that small price gap.",
    "specs": [
      "32GB storage",
      "Like-New certified condition"
    ],
    "pros": [
      "Lowest price of any Kindle Scribe option here"
    ],
    "cons": [
      "Only $21.60 cheaper than the 64GB Like-New model, which is a much better value at that small price gap"
    ],
    "bestFor": "Buyers on the tightest possible budget who are certain 32GB is enough storage."
  },
  {
    "id": "b0d7bthtps-refurbdn",
    "rank": 3,
    "badge": "Best Refurbished reMarkable",
    "name": "reMarkable 2 Tablet with 10.3\" Digital Paper Display, Marker Plus Pen",
    "price": "$418.90",
    "rating": "3.7",
    "reviews": "26",
    "imageUrl": "https://m.media-amazon.com/images/I/31-hgq49eJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7BTHTPS?tag=theofficejournal-20",
    "description": "7) and much smaller review count (26) than the new reMarkable 2 listing, worth reading current reviews carefully before choosing this over buying new. On the other side, Worth verifying current seller and condition grading before buying.",
    "specs": [
      "10.3 inch digital paper display",
      "Marker Plus pen included"
    ],
    "pros": [
      "Discount versus the new reMarkable 2 price",
      "Includes the Marker Plus pen"
    ],
    "cons": [
      "Worth verifying current seller and condition grading before buying"
    ],
    "bestFor": "Buyers who specifically want the reMarkable ecosystem and are comfortable with the lower rating relative to buying new."
  },
  {
    "id": "b08hdl3xjr-refurbdn",
    "rank": 4,
    "badge": "New, Included for Price Comparison",
    "name": "reMarkable 2 with Marker Plus (New)",
    "price": "$449.00",
    "rating": "4.4",
    "reviews": "1,354",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "The real tradeoff against that pick: Costs more than the refurbished option, though the gap is smaller than you might expect. On the other side, Costs more than the refurbished option, though the gap is smaller than you might expect.",
    "specs": [
      "Marker Plus stylus included",
      "New condition"
    ],
    "pros": [
      "Full manufacturer warranty as a new unit"
    ],
    "cons": [
      "Costs more than the refurbished option, though the gap is smaller than you might expect"
    ],
    "bestFor": "Buyers who see the small price gap to the refurbished option and decide the much better rating and warranty are worth it."
  },
  {
    "id": "b0cz9vfqp-refurbdn",
    "rank": 5,
    "badge": "New Kindle Scribe, Price Reference",
    "name": "Amazon Kindle Scribe (16GB, New)",
    "price": "$399.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=theofficejournal-20",
    "description": "Included as the direct new-condition comparison point: the Like-New 64GB refurbished Kindle Scribe above costs a bit less than this new 16GB base model while offering four times the storage, which is the clearest reason to consider refurbished in this entire comparison. On the other side, Costs more than the Like-New 64GB refurbished option for a quarter of the storage.",
    "specs": [
      "16GB storage",
      "New condition, full warranty"
    ],
    "pros": [
      "Full manufacturer warranty as a new unit"
    ],
    "cons": [
      "Costs more than the Like-New 64GB refurbished option for a quarter of the storage"
    ],
    "bestFor": "Buyers who specifically want a full new-unit warranty and are willing to pay more for less storage to get it."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-under-200",
    "title": "Best Digital Notebooks Under $200 (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-that-feel-like-paper",
    "title": "Best Digital Notebooks That Feel Like Paper (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Refurbished Digital Notebooks";
