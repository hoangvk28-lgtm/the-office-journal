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
    "q": "Which size actually fits in a jacket pocket?",
    "a": "5x11 in) both need a bag."
  },
  {
    "q": "Is this different from the small digital notebooks guide?",
    "a": "The product pool overlaps almost completely, but this guide specifically tests coat-pocket versus bag-pocket fit rather than just ranking by page size."
  },
  {
    "q": "Do I need a special pen?",
    "a": "Yes, Pilot FriXion pens, usually included. A standard pen will not erase off the page."
  },
  {
    "q": "Why include a full letter-size notebook in a pocket guide?",
    "a": "To show how much writing area you give up by choosing a pocket-size option, and because it's still one of the most relevant products in the same product line."
  },
  {
    "q": "How do I get notes off the page?",
    "a": "Scan or photograph each page with the Rocketbook app before wiping it with a damp cloth. There's no live wireless sync."
  }
];

export const guideSlug = "best-pocket-digital-notebooks";

export const guideTitle = "The Best Pocket Digital Notebooks for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg";

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
          "Rocketbook Fusion Hybrid Reusable Planner Notebook"
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
          "Rocketbook Core Reusable Smart Notebook"
        ],
        [
          "No firm budget ceiling, prioritizing storage or ecosystem",
          "Rocketbook Fusion Hybrid Reusable Planner Notebook"
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
          "Rocketbook Core Reusable Smart Notebook"
        ],
        [
          "",
          "Rocketbook Fusion Hybrid Reusable Planner Notebook"
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
        "text": "Rocketbook Mini Reusable Smart Notepad fits this specifically: fits a coat pocket, not just \"smaller\"."
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
        "text": "The main thing you'd be paying extra for elsewhere in this list is features or storage you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "5 in Mini passes this test."
  },
  {
    "title": "",
    "description": "For sizes that fail the coat-pocket test, we checked whether they fit a typical bag or backpack front pocket instead, since that's a different but still relevant use case."
  },
  {
    "title": "Writing area given up per size step",
    "description": "We tracked how much page space is lost going from letter size down to Executive down to Mini, so buyers can weigh portability against how often they'll need to scan and erase."
  },
  {
    "title": "Review volume as durability evidence",
    "description": "Because every product here is physically erased and reused hundreds of times, we weighted review count heavily as evidence the erase mechanism holds up."
  }
];

export const introParagraphs = [
  "This overlaps heavily with our small digital notebooks guide because the current product pool for both searches is the same: Rocketbook's reusable-paper lineup in different sizes. What we changed here is the test itself, instead of just ranking by page dimensions, we checked which sizes actually fit a real jacket pocket versus which ones only fit in a bag.",
  "Only one size in the entire lineup passes an actual coat-pocket test without the folio or cover adding bulk that defeats the purpose. Everything else here is a bag-pocket or backpack-pocket fit, which is a meaningfully different use case."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "pocket digital notebook";

export const metaDescription = "How 5 pocket digital notebooks compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Pocket Digital Notebooks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0dw9jz1mf-pocketdn",
    "rank": 1,
    "badge": "Only True Coat-Pocket Fit",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Gray",
    "price": "$17.99",
    "rating": "4.4",
    "reviews": "281",
    "imageUrl": "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW9JZ1MF?tag=theofficejournal-20",
    "description": "5 inches, this is the only product in the entire pocket-adjacent search results that fits a standard jacket breast pocket without a folio. It's thin enough that it doesn't print a visible bulge, which the Executive-size options below can't claim.\n\nFits a coat pocket, not just \"smaller\". On price, it's actually priced above Rocketbook Smart Reusable Notebook, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Not a screen-based device, it's a scan-and-erase paper system.",
    "specs": [
      "3.5 x 5.5 in",
      "Dotted pages, notepad format",
      "Reusable via damp-cloth erase",
      "Requires Pilot FriXion pen"
    ],
    "pros": [
      "fits a coat pocket, not just \"smaller\"",
      "Cheapest option in this comparison",
      "Thin enough to not print through a jacket"
    ],
    "cons": [
      "Small writing area limits notes to short entries per page",
      "Not a screen-based device, it's a scan-and-erase paper system"
    ],
    "bestFor": "Buyers who specifically need coat-pocket carry, not just a smaller notebook."
  },
  {
    "id": "b07czf628c-pocketdn",
    "rank": 2,
    "badge": "Most Field-Tested Small Option",
    "name": "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook, Midnight Blue",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "11,065",
    "imageUrl": "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CZF628C?tag=theofficejournal-20",
    "description": "Same mini footprint as the pick above but spiral-bound, which fits a bag pocket or backpack front pocket more comfortably than a coat pocket because the spiral adds a little rigidity and width.\n\nOn the other side, Better suited to a bag pocket than a coat pocket.",
    "specs": [
      "Mini spiral-bound size",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Lowest price here"
    ],
    "cons": [
      "Spiral binding adds bulk versus the notepad-format Mini",
      "Better suited to a bag pocket than a coat pocket"
    ],
    "bestFor": "Buyers who want the most field-tested pocket-size option and don't mind a bag pocket rather than a coat pocket."
  },
  {
    "id": "b0dp3hly4j-pocketdn",
    "rank": 3,
    "badge": "Best Bag-Pocket Compromise",
    "name": "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8, Black",
    "price": "$25.99",
    "rating": "4.5",
    "reviews": "226",
    "imageUrl": "https://m.media-amazon.com/images/I/41BvyAlSv+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3HLY4J?tag=theofficejournal-20",
    "description": "8 inches, but it fits comfortably in most bag pockets and gives meaningfully more writing area than the Mini sizes. Include this only if your actual use case is a backpack or tote pocket, not a jacket.\n\nOn the other side, Still needs a specific FriXion pen to erase.",
    "specs": [
      "6 x 8.8 in executive size",
      "Core dot-grid layout",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Much more writing room than the pocket-only Mini sizes",
      "Highest rating of the compact Rocketbook options"
    ],
    "cons": [
      "Does not fit a coat pocket",
      "Still needs a specific FriXion pen to erase"
    ],
    "bestFor": "Buyers whose \"pocket\" is a bag or backpack pocket rather than a jacket."
  },
  {
    "id": "b07zhyz32m-pocketdn",
    "rank": 4,
    "badge": "Best If You Want Planner Pages, Bag-Size",
    "name": "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8, Grey",
    "price": "$29.99",
    "rating": "4.4",
    "reviews": "23,751",
    "imageUrl": "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZHYZ32M?tag=theofficejournal-20",
    "description": "This is a bag-pocket size, not a coat-pocket size.\n\nThe real tradeoff against that pick: Not coat-pocket size.\n\nOn the other side, Costs more than the plain Core notebook at the same size.",
    "specs": [
      "6 x 8.8 in, planner templates built in",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Planner templates add function beyond blank pages"
    ],
    "cons": [
      "Not coat-pocket size",
      "Costs more than the plain Core notebook at the same size"
    ],
    "bestFor": "Buyers who want a proven, well-reviewed bag-size notebook with built-in planning pages."
  },
  {
    "id": "b0dp3jmp14-pocketdn",
    "rank": 5,
    "badge": "Disqualified From Coat-Pocket, Included for Contrast",
    "name": "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11, Black",
    "price": "$26.99",
    "rating": "4.5",
    "reviews": "100",
    "imageUrl": "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JMP14?tag=theofficejournal-20",
    "description": "Full letter size fails both the coat-pocket and most bag-pocket tests, it needs a full compartment or tote, not a pocket. We're including it so buyers can see exactly how much writing area they give up by going down to Mini or Executive size.\n\nOn the other side, Not a real \"pocket\" candidate; included for size contrast only.",
    "specs": [
      "8.5 x 11 in, standard letter size",
      "Core dot-grid layout",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Full writing area for detailed notes",
      "Same reusable mechanic and price range as the smaller sizes"
    ],
    "cons": [
      "Fails a genuine pocket-fit test at any size, coat or bag",
      "Not a real \"pocket\" candidate; included for size contrast only"
    ],
    "bestFor": "Buyers who actually need a full notebook and shouldn't be shopping the pocket category."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-digital-notebooks",
    "title": "Best Small Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-reusable-digital-notebooks",
    "title": "Best Reusable Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Pocket Digital Notebooks";
