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
    "q": "What makes this different from your digital notebooks with calendars guide?",
    "a": "The product pool overlaps substantially, but this guide requires both free-write note pages and planning templates together, not just a calendar grid."
  },
  {
    "q": "Which is the most proven combo notebook?",
    "a": ""
  },
  {
    "q": "Do I need a special pen?",
    "a": "Yes, Pilot FriXion pens, required for the pages to erase and reuse correctly."
  },
  {
    "q": "Is there a more compact combo option?",
    "a": "8 in), with nearly the same scale of proven reviews as the letter-size version."
  },
  {
    "q": "Should I get the newer Fusion Plus instead?",
    "a": "Worth checking current buyer feedback before choosing it over the more established standard Fusion."
  }
];

export const guideSlug = "best-digital-notebook-and-planner-combos";

export const guideTitle = "5 Best Digital Notebook and Planner Combos in 2026";

export const heroImage = "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg";

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
          "Rocketbook Fusion Hybrid Reusable Planner Notebook"
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
          "Rocketbook Fusion Hybrid Reusable Planner Notebook"
        ],
        [
          "",
          "Rocketbook Fusion Plus Reusable Notebook Planner"
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
        "text": "Rocketbook Fusion Reusable Undated Productivity Planner fits this specifically: Most proven product in this entire category."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Rocketbook Fusion Reusable Undated Productivity Planner offers: Most proven product in this entire category. That's a real functional upgrade over the budget picks here, not just a brand markup."
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
    "description": "We only included products with both free-write note pages and structured planning templates in the same notebook, not plain notebooks or calendar-only products."
  },
  {
    "title": "",
    "description": "We flagged the substantial product overlap with our digital notebooks with calendars guide, since both draw from the same Rocketbook Fusion lineup."
  },
  {
    "title": "Review volume as reliability evidence",
    "description": ""
  },
  {
    "title": "",
    "description": "We compared letter-size against the more compact Executive size for how much room each gives the planning templates."
  }
];

export const introParagraphs = [
  "This overlaps with our digital notebooks with calendars guide, since the same Rocketbook Fusion lineup is the real product match for both searches. The distinction we're drawing here is a true notebook-planner combo: handwriting note pages plus dated or undated planning pages in the same reusable notebook, not just a calendar grid.",
  "We excluded plain Core-line notebooks entirely from this list, since they don't include any planning structure, those belong in our plain reusable notebooks guide instead."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "digital notebook and planner";

export const metaDescription = "5 reusable notebooks that combine handwriting pages with built-in planner templates, from the Rocketbook Fusion line, which is the actual product match for this search.";

export const metaTitle = "Best Digital Notebook and Planner Combos (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b07zhz82dk-plannercombo",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Rocketbook Fusion Reusable Undated Productivity Planner, Letter Size",
    "price": "$34.99",
    "rating": "4.6",
    "reviews": "26,593",
    "imageUrl": "https://m.media-amazon.com/images/I/41DUQEUXetL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZHZ82DK?tag=theofficejournal-20",
    "description": "Most proven product in this entire category. On price, it's actually priced above Rocketbook Fusion Hybrid Reusable Planner Notebook, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Full letter size, not compact.",
    "specs": [
      "Letter size",
      "Mix of note pages and undated planning templates"
    ],
    "pros": [
      "Most proven product in this entire category",
      "combines free-write pages and planning structure"
    ],
    "cons": [
      "Full letter size, not compact"
    ],
    "bestFor": "Buyers who want the most proven notebook-planner combo available."
  },
  {
    "id": "b07zhyz32m-plannercombo",
    "rank": 2,
    "badge": "Best Compact Combo",
    "name": "Rocketbook Fusion Hybrid Reusable Planner Notebook, Executive 6x8.8",
    "price": "$29.99",
    "rating": "4.4",
    "reviews": "23,751",
    "imageUrl": "https://m.media-amazon.com/images/I/41VG6OVaZCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZHYZ32M?tag=theofficejournal-20",
    "description": "Same note-page-plus-planner-template combo in a smaller, bag-friendly footprint, with nearly the same scale of review evidence.\n\nOn the other side, Smaller page reduces room per planning template.",
    "specs": [
      "6 x 8.8 in",
      "Mix of note pages and planning templates"
    ],
    "pros": [
      "More portable than the letter-size Fusion"
    ],
    "cons": [
      "Smaller page reduces room per planning template"
    ],
    "bestFor": "Buyers who want the same combo concept in a more portable size."
  },
  {
    "id": "b0clppzzjl-plannercombo",
    "rank": 3,
    "badge": "Newest Template Set",
    "name": "Rocketbook Fusion Plus Reusable Notebook Planner, Executive 6x8.8",
    "price": "$31.99",
    "rating": "4.4",
    "reviews": "3,200",
    "imageUrl": "https://m.media-amazon.com/images/I/416XcHl7ssL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLPPZZJL?tag=theofficejournal-20",
    "description": "An updated combo of note pages and planning templates at the same Executive size, with a smaller review base since it's the newer revision.\n\nSitting just under Rocketbook Fusion Hybrid Reusable Planner Notebook, it costs more than Rocketbook Fusion Hybrid Reusable Planner Notebook. Here's the honest tradeoff: Meaningfully smaller review base than the standard Fusion Hybrid. And here's what it gets you instead: Newest template revision. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Newest template revision. On the other side, Meaningfully smaller review base than the standard Fusion Hybrid. That's the main tradeoff to weigh against everything above.",
    "specs": [
      "6 x 8.8 in",
      "Updated note-and-planner template mix"
    ],
    "pros": [
      "Newest template revision"
    ],
    "cons": [
      "Meaningfully smaller review base than the standard Fusion Hybrid"
    ],
    "bestFor": "Buyers who want the newest template layout in the combo format."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-digital-notebooks-with-calendars",
    "title": "Best Digital Notebooks with Calendars (2026)"
  },
  {
    "href": "/guide/best-reusable-digital-notebooks",
    "title": "Best Reusable Digital Notebooks (2026)"
  },
  {
    "href": "/guide/best-digital-notebooks",
    "title": "Best Digital Notebooks (2026)"
  }
];
