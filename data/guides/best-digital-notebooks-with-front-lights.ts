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
    "q": "Does the reMarkable 2 have a front light?",
    "a": "It requires external room lighting for low-light use, unlike the Kindle Scribe and BOOX options in this comparison."
  },
  {
    "q": "Which devices confirm front-light hardware?",
    "a": "The Kindle Scribe (both base and Colorsoft) and the BOOX Note Air 5 C, which typically includes warm/cool adjustment."
  },
  {
    "q": "Is the XPPen's lighting the same as an E Ink front light?",
    "a": "No, it uses standard LCD backlighting technology, different from E Ink front-light hardware, though it still works in low light."
  },
  {
    "q": "Can I adjust the light color temperature?",
    "a": "Typically yes on the BOOX Note Air lineup, verify the current listing's exact spec before purchase."
  },
  {
    "q": "Which is the best value with a confirmed front light?",
    "a": "99, which shares the same front-light technology as the pricier Colorsoft model."
  }
];

export const guideSlug = "best-digital-notebooks-with-front-lights";

export const guideTitle = "The Best Digital Notebooks with Front Lights, Compared";

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
        "text": "Amazon Kindle Scribe Colorsoft 64GB fits this specifically: Front light confirmed via Kindle's established e-reader technology lineage."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Amazon Kindle Scribe Colorsoft 64GB offers: Front light confirmed via Kindle's established e-reader technology lineage. That's a real functional upgrade over the budget picks here, not just a brand markup."
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
    "title": "Confirmed front-light hardware, not assumed",
    "description": "We checked whether front-light technology is confirmed for each product line rather than assuming every E Ink device has one."
  },
  {
    "title": "Honest disclosure where a device lacks a front light",
    "description": "We stated directly that the reMarkable 2 has no front light, rather than omitting that limitation."
  },
  {
    "title": "",
    "description": "We noted where a device offers adjustable light temperature, a real usability feature beyond basic brightness."
  },
  {
    "title": "Distinguished E Ink front lights from LCD backlighting",
    "description": "We separated true E Ink front-light technology from standard LCD backlighting on the XPPen, since they're different technologies with different low-light characteristics."
  }
];

export const introParagraphs = [
  "A front light illuminates the E Ink display from the front edge, the same technology used in Kindle e-readers, letting you write and read in dim rooms without an external lamp. Not every device in this category has one.",
  "We prioritized confirmed front-light hardware and flagged where a device's low-light usability is less certain, rather than assuming every E Ink notebook has this feature."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "digital notebook with front light";

export const metaDescription = "We compared 5 digital notebooks with front lights on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Digital Notebooks with Front Lights (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0fc1vjjfp-frontlightdn",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Amazon Kindle Scribe Colorsoft 64GB",
    "price": "$679.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/31TxeKtPWwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FC1VJJFP?tag=theofficejournal-20",
    "description": "Kindle devices have used front-light technology for years across their e-reader lineup, and the Scribe carries this forward with adjustable brightness for low-light note-taking and reading.\n\nFront light confirmed via Kindle's established e-reader technology lineage. On price, it's actually priced above Amazon Kindle Scribe, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Highest price in this comparison.",
    "specs": [
      "Adjustable front light",
      "Color E Ink display",
      "64GB storage"
    ],
    "pros": [
      "Front light confirmed via Kindle's established e-reader technology lineage",
      "Color display for low-light note review"
    ],
    "cons": [
      "Highest price in this comparison"
    ],
    "bestFor": "Buyers who want the most established front-light technology with color and max storage."
  },
  {
    "id": "b0cz9vfqp-frontlightdn",
    "rank": 2,
    "badge": "Best Value",
    "name": "Amazon Kindle Scribe (16GB)",
    "price": "$399.99",
    "rating": "n/a",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/316t+ALq6FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZ9VFQ2P?tag=theofficejournal-20",
    "description": "Same established front-light technology as the Colorsoft, without color, at a significantly lower price.\n\nOn the other side, No color display.",
    "specs": [
      "Adjustable front light",
      "16GB storage",
      "Monochrome E Ink display"
    ],
    "pros": [
      "Lower price than the Colorsoft for the same front-light functionality"
    ],
    "cons": [
      "No color display"
    ],
    "bestFor": "Buyers who want front-light functionality without paying for color."
  },
  {
    "id": "b0fr4kxmkf-frontlightdn",
    "rank": 3,
    "badge": "Best Color E Ink With Light",
    "name": "BOOX Note Air 5 C, 10.3\" Color E Ink Tablet",
    "price": "$529.99",
    "rating": "4.3",
    "reviews": "310",
    "imageUrl": "https://m.media-amazon.com/images/I/41BunSeRP3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR4KXMKF?tag=theofficejournal-20",
    "description": "BOOX's Note Air lineup includes adjustable front lighting with warm/cool tone control on most models, verify the current listing's exact lighting spec before buying if this is a priority.\n\nOn the other side, Verify exact front-light spec on the current listing before purchase.",
    "specs": [
      "Front light with warm/cool adjustment, verify current spec",
      "Color E Ink display"
    ],
    "pros": [
      "Warm/cool light adjustment typical of the BOOX Note Air lineup",
      "Color E Ink display"
    ],
    "cons": [
      "Verify exact front-light spec on the current listing before purchase"
    ],
    "bestFor": "Buyers who want adjustable warm/cool lighting alongside color E Ink."
  },
  {
    "id": "b08hdl3xjr-frontlightdn",
    "rank": 4,
    "badge": "Most Proven, No Front Light",
    "name": "reMarkable 2 with Marker Plus",
    "price": "$449.00",
    "rating": "4.4",
    "reviews": "1,354",
    "imageUrl": "https://m.media-amazon.com/images/I/31x5OLmX1ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HDL3XJR?tag=theofficejournal-20",
    "description": "Being direct here: the reMarkable 2 does not have a front light, and needs external lighting in dim rooms. Included as the honest \"no\" case for buyers assuming every premium E Ink device has one.\n\nThe real tradeoff against that pick: No front light, requires external lighting for low-light use.\n\nOn the other side, No front light, requires external lighting for low-light use.",
    "specs": [
      "No front light",
      "Marker Plus stylus included"
    ],
    "pros": [
      "Largest, most proven review base in this comparison"
    ],
    "cons": [
      "No front light, requires external lighting for low-light use"
    ],
    "bestFor": "Buyers who prioritize the reMarkable ecosystem and will always use it with adequate room lighting."
  },
  {
    "id": "b0dx234nwp-frontlightdn",
    "rank": 5,
    "badge": "Verify Current Lighting Spec",
    "name": "XPPen 3 in 1 Color Digital Notebook 10.95\"",
    "price": "$299.98",
    "rating": "4.3",
    "reviews": "329",
    "imageUrl": "https://m.media-amazon.com/images/I/41StVO0JWOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX234NWP?tag=theofficejournal-20",
    "description": "As an LCD-based color display rather than E Ink, this uses backlighting technology (like a normal tablet) rather than a front light specifically, verify current specs if front-light-style E Ink lighting is important to your use case.\n\nOn the other side, Different lighting technology than a true E Ink front light, verify this matches your expectations.",
    "specs": [
      "LCD backlight, not E Ink front light",
      "Color display"
    ],
    "pros": [
      "Lowest price in this comparison",
      "Standard tablet-style backlighting works in low light too"
    ],
    "cons": [
      "Different lighting technology than a true E Ink front light, verify this matches your expectations"
    ],
    "bestFor": "Buyers who want low-light usability but don't need E Ink-specific front-light technology."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-that-feel-like-paper",
    "title": "Best Digital Notebooks That Feel Like Paper (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks-for-handwriting",
    "title": "Best Digital Notebooks for Handwriting (2026)"
  }
];

export const breadcrumbLabel = "Best Digital Notebooks with Front Lights";
