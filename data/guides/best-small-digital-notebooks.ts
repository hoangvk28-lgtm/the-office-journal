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
    "q": "Is a \"small digital notebook\" an E Ink tablet or a reusable paper notebook?",
    "a": "Based on current search results, it's almost always a Rocketbook reusable paper notebook. Compact E Ink tablets with a real screen don't currently exist in a pocket-size format, the smallest common E Ink devices are built around a 10-11 inch display."
  },
  {
    "q": "Which size actually fits in a pocket?",
    "a": "5x11 in) is a normal notebook footprint."
  },
  {
    "q": "Do I need a special pen for these?",
    "a": "Yes, Rocketbook notebooks erase only with Pilot FriXion pens, which are typically included in the box. A standard ballpoint or gel pen will not wipe off the page."
  },
  {
    "q": "Why is a letter-size planner included in a \"small\" notebook guide?",
    "a": ""
  },
  {
    "q": "How do these sync notes to my phone?",
    "a": "You scan or photograph each page using the Rocketbook app before erasing it. There's no live wireless sync, the page has to be physically captured first."
  }
];

export const guideSlug = "best-small-digital-notebooks";

export const guideTitle = "The Best Small Digital Notebooks for Everyday Desk Work";

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
          "Rocketbook Fusion Reusable Undated Productivity Planner"
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
          "Rocketbook Fusion Reusable Undated Productivity Planner"
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
          "Rocketbook Fusion Reusable Undated Productivity Planner"
        ],
        [
          "",
          "Rocketbook Fusion Reusable Undated Productivity Planner"
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
        "text": "Rocketbook Mini Reusable Smart Notepad fits this specifically: Actually fits a jacket pocket, unlike letter-size competitors."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Rocketbook Fusion Reusable Undated Productivity Planner offers: Highest rating and by far the largest review count in this entire comparison. That's a real functional upgrade over the budget picks here, not just a brand markup."
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
    "description": ""
  },
  {
    "title": "Product category, not just page size",
    "description": "We flagged that every result here is a reusable-paper Rocketbook, not an E Ink tablet, since the two solve different problems and buyers searching \"small digital notebook\" may actually want either."
  },
  {
    "title": "Review volume as a durability signal",
    "description": "For a reusable notebook, the erase cycle and page coating are the parts most likely to wear out. We weighted review count as evidence of how many people have put a given size through repeated use."
  },
  {
    "title": "",
    "description": "We ranked from most pocket-friendly to least, so buyers can see exactly how much page space they give up at each size step down."
  }
];

export const introParagraphs = [
  "Every current product that shows up for \"small digital notebook\" turned out to be a Rocketbook reusable-paper notebook in a different size, not a compact E Ink tablet. That's a real finding, not a coincidence: E Ink devices like the reMarkable and Kindle Scribe are built around a fixed 10-11 inch writing surface, so \"small\" in this category almost always means a smaller reusable paper notebook you erase with a damp cloth, not a smaller electronic screen.",
  "We set a real size cutoff instead of just repeating whichever product had \"small\" in the title: to qualify here, a notebook has to be pocket- or bag-friendly on its own, not merely smaller than the largest option in the lineup."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "small digital notebook";

export const metaDescription = "How 5 small digital notebooks compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Small Digital Notebooks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0dw9jz1mf-smalldn",
    "rank": 1,
    "badge": "Smallest Overall",
    "name": "Rocketbook Mini Reusable Smart Notepad, Dotted Pages, 3.5x5.5, Gray",
    "price": "$17.99",
    "rating": "4.4",
    "reviews": "281",
    "imageUrl": "https://m.media-amazon.com/images/I/41uG7qo+QwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW9JZ1MF?tag=theofficejournal-20",
    "description": "5 inches this is pocket-sized, not just smaller than a full letter pad. It's a reusable paper notepad: you write with a Pilot FriXion pen, scan pages into the Rocketbook app, then wipe the page clean with a damp cloth to reuse it. There's no screen and no battery to charge, which is the tradeoff for the small size and low price.\n\nActually fits a jacket pocket, unlike letter-size competitors. On price, it's actually priced above Rocketbook Smart Reusable Notebook, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Not a true digital display, it's a scan-and-erase paper system.",
    "specs": [
      "3.5 x 5.5 in dotted pages",
      "Reusable via damp-cloth erase",
      "Requires Pilot FriXion pen (included)",
      "Scans to Rocketbook app"
    ],
    "pros": [
      "Actually fits a jacket pocket, unlike letter-size competitors",
      "Lowest price in this comparison",
      "No battery or charging needed"
    ],
    "cons": [
      "Writing area is small enough to limit note length per page",
      "Requires a specific pen type to erase correctly",
      "Not a true digital display, it's a scan-and-erase paper system"
    ],
    "bestFor": "Buyers who want something they can carry in a coat pocket for quick notes."
  },
  {
    "id": "b07czf628c-smalldn",
    "rank": 2,
    "badge": "Best Spiral-Bound Small Option",
    "name": "Rocketbook Smart Reusable Notebook, Mini Spiral Notebook, Midnight Blue",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "11,065",
    "imageUrl": "https://m.media-amazon.com/images/I/41E9SFRPDeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CZF628C?tag=theofficejournal-20",
    "description": "The most reviewed product in this comparison by a wide margin, which matters for a reusable-paper product where the erase mechanism and page durability need to hold up over many cycles. Spiral binding makes it lie flatter on a small surface than the Mini's notepad format.\n\nOn the other side, Spiral wire can catch on bag pockets over time.",
    "specs": [
      "Mini spiral-bound size",
      "Reusable via damp-cloth erase",
      "Same FriXion-pen erase system as other Rocketbook sizes"
    ],
    "pros": [
      "Lowest price in this comparison",
      "Spiral binding lies flat for writing"
    ],
    "cons": [
      "Same scan-and-erase limitation as the rest of the Rocketbook lineup",
      "Spiral wire can catch on bag pockets over time"
    ],
    "bestFor": "Buyers who want the most field-tested small reusable notebook rather than a newer, less-reviewed size."
  },
  {
    "id": "b0dp3hly4j-smalldn",
    "rank": 3,
    "badge": "Best Mid-Size Compromise",
    "name": "Rocketbook Core Reusable Smart Notebook, Executive Size 6x8.8, Black",
    "price": "$25.99",
    "rating": "4.5",
    "reviews": "226",
    "imageUrl": "https://m.media-amazon.com/images/I/41BvyAlSv+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3HLY4J?tag=theofficejournal-20",
    "description": "8 in) is the middle ground between the pocket-only Mini and a full letter pad: still small enough for most bags, but with meaningfully more writing area per page than the Mini. This is the Core line, Rocketbook's standard dot-grid notebook rather than the planner-formatted Fusion line.\n\nOn the other side, Still requires the specific FriXion pen to erase properly.",
    "specs": [
      "6 x 8.8 in executive size",
      "Core (dot-grid) page layout",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Noticeably more writing area than the Mini without becoming bag-unfriendly",
      "Highest rating of the small-format Rocketbook options",
      "Standard dot-grid works for both notes and light sketching"
    ],
    "cons": [
      "Not pocket-size, needs a bag, not just a coat pocket",
      "Still requires the specific FriXion pen to erase properly"
    ],
    "bestFor": "Buyers who found the Mini's writing area too cramped but still want something bag-portable."
  },
  {
    "id": "b0dp3jmp14-smalldn",
    "rank": 4,
    "badge": "Best If You Want a Full Page",
    "name": "Rocketbook Core Reusable Smart Notebook, Letter Size 8.5x11, Black",
    "price": "$26.99",
    "rating": "4.5",
    "reviews": "100",
    "imageUrl": "https://m.media-amazon.com/images/I/41RhAqe3azL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DP3JMP14?tag=theofficejournal-20",
    "description": "This is the honest disqualifier pick: full letter size is what most people picture when they search \"digital notebook,\" but it is not actually small by any physical measure. We're including it so buyers can see exactly how much writing area they're giving up by choosing the Mini or Executive sizes above, and so anyone who really needs full-page notes doesn't end up with something too cramped.\n\nThe real tradeoff against that pick: Does not fit in a coat pocket or most small bags.\n\nOn the other side, Doesn't meet a genuine \"small\" bar, included only for size comparison.",
    "specs": [
      "8.5 x 11 in, standard letter size",
      "Core (dot-grid) page layout",
      "Reusable via damp-cloth erase",
      "Same erase system as the smaller sizes"
    ],
    "pros": [
      "Full writing area for detailed notes or diagrams",
      "Same low price and reusable mechanic as the smaller sizes"
    ],
    "cons": [
      "Does not fit in a coat pocket or most small bags",
      "Doesn't meet a genuine \"small\" bar, included only for size comparison"
    ],
    "bestFor": "Buyers who searched \"small\" but actually just want an affordable reusable notebook and are fine with a normal notebook footprint."
  },
  {
    "id": "b07zhz82dk-smalldn",
    "rank": 5,
    "badge": "Best for Planning in a Compact Format",
    "name": "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    "price": "$34.99",
    "rating": "4.6",
    "reviews": "26,593",
    "imageUrl": "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZHZ82DK?tag=theofficejournal-20",
    "description": "It's included because it shows the ceiling of what this product family can do (calendar pages, to-do templates, goal trackers built into the reusable pages), which the truly small formats above don't offer.\n\nOn the other side, Planner templates add cost most small-notebook buyers don't need.",
    "specs": [
      "Letter size, undated planner layout",
      "Fusion line: built-in planner/calendar page templates",
      "Reusable via damp-cloth erase"
    ],
    "pros": [
      "Highest rating and by far the largest review count in this entire comparison",
      "Built-in planning templates beyond plain dot-grid pages"
    ],
    "cons": [
      "Full letter size, not compact",
      "Planner templates add cost most small-notebook buyers don't need"
    ],
    "bestFor": "Buyers who want the most proven product in the Rocketbook lineup and don't actually need a small footprint."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-pocket-digital-notebooks",
    "title": "Best Pocket Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-reusable-digital-notebooks",
    "title": "Best Reusable Digital Notebooks (2026)"
  }
];

export const breadcrumbLabel = "Best Small Digital Notebooks";
