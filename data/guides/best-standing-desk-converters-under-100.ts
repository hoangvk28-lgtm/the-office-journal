// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-standing-desk-converters-under-100";

export const guideTitle = "The Best Standing Desk Converters Under $100 for a Single-Screen Desk";

export const breadcrumbLabel = "Best Standing Desk Converters Under $100";

export const metaTitle = "Best Standing Desk Converters Under $100 (2026)";

export const metaDescription = "Around $100, standing desk converters are manual and compact. We compared six on platform width, profile and price, and flag which sat just above $100 when we checked.";

export const mainKeyword = "standing desk converters under $100";

export const introParagraphs = [
  "A converter under $100 is a way to try standing without replacing your desk, but the budget sets clear limits. Every converter here is manual rather than electric, and the platforms are 24 to 30 inches wide, which suits one monitor or a laptop plus a keyboard rather than a dual-monitor setup.",
  "Before comparing models, measure two things: your desk's depth, since the converter's base needs room, and your desk's height, since even at its lowest setting a converter raises your keyboard.",
  "Prices move around $100: three VIVO models were listed at $99.99 at the time of writing, while two picks were above $100 and one was well under. Our comparison is based on published specifications and price position, not hands-on testing."
];

export const lastUpdated = "2026-08-09";

export const readTime = "8 min";

export const heroImage = "https://m.media-amazon.com/images/I/41Eh8j3wCSL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "b09vmnymy3-under100",
    "rank": 1,
    "badge": "Most Established (Just Over $100)",
    "name": "VIVO Black 26 in Standing Desk Converter, DESK-V026KB",
    "price": "$107.99",
    "rating": "4.6",
    "reviews": "15,583",
    "imageUrl": "https://m.media-amazon.com/images/I/41Eh8j3wCSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09VMNYMY3?tag=theofficejournal-20",
    "description": "The VIVO DESK-V026KB is the most established converter here, with the largest base of buyer feedback, but it was listed at about $108 at the time of writing, slightly above the budget.\n\nIts 26-inch platform suits a single monitor or laptop.\n\nIf it drops under $100 when you shop, it is a sensible default; otherwise, the VIVO 28-inch or 29-inch model is within budget.",
    "specs": [
      "Platform: 26\" wide",
      "Lift: manual"
    ],
    "pros": [
      "Most established model here",
      "Compact platform",
      "Extensive buyer feedback"
    ],
    "cons": [
      "Slightly above $100 at the time of writing",
      "Single-monitor width",
      "Listing summary gives few specifications"
    ],
    "bestFor": "Readers who can stretch slightly past $100 for the most established model.",
    "summary": "VIVO's 26-inch converter, the most widely purchased here, listed slightly above $100 at the time of writing.",
    "skipIf": "Your budget is firm; the VIVO 28-inch was listed at $99.99."
  },
  {
    "id": "b07k8wz19k-under100",
    "rank": 2,
    "badge": "Widest VIVO Within Budget",
    "name": "VIVO Black 29 in Single Top Standing Desk Converter, DESK-V000U",
    "price": "$99.99",
    "rating": "4.5",
    "reviews": "632",
    "imageUrl": "https://m.media-amazon.com/images/I/41Br1CxfavL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07K8WZ19K?tag=theofficejournal-20",
    "description": "The VIVO DESK-V000U gives the widest VIVO platform within budget: a 29-inch single-top surface at $99.99 at the time of writing.\n\nA single top holds the monitor and keyboard on one surface, which is simpler but places the keyboard at the same height as the monitor base.\n\nIt sits right at the ceiling with no margin, so a small price change could push it over.",
    "specs": [
      "Platform: 29\" single top",
      "Lift: manual"
    ],
    "pros": [
      "Widest VIVO platform in budget",
      "Single-surface simplicity",
      "At $99.99 at the time of writing"
    ],
    "cons": [
      "No price margin under $100",
      "No separate keyboard tier",
      "Few specifications in the listing summary"
    ],
    "bestFor": "One monitor and a full-size keyboard on a single surface.",
    "summary": "A 29-inch single-top VIVO converter at $99.99.",
    "skipIf": "You want a slimmer profile; the VIVO Ultra-Slim is designed for that."
  },
  {
    "id": "b0f8114738-under100",
    "rank": 3,
    "badge": "Best Value Within Budget",
    "name": "VIVO Black 28 in Standing Desk Converter, DESK-V028S",
    "price": "$99.99",
    "rating": "4.6",
    "reviews": "2,127",
    "imageUrl": "https://m.media-amazon.com/images/I/41KPjLPGisL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8114738?tag=theofficejournal-20",
    "description": "The VIVO DESK-V028S is the value pick within a firm $100 budget: a 28-inch platform at $99.99 at the time of writing, with somewhat more positive buyer feedback than the 29-inch VIVO.\n\nIt suits a single monitor or laptop.\n\nLike the other VIVO models at $99.99, it sits right at the ceiling.",
    "specs": [
      "Platform: 28\" wide",
      "Lift: manual"
    ],
    "pros": [
      "Within budget at the time of writing",
      "Positive buyer feedback",
      "Mid-size platform"
    ],
    "cons": [
      "No price margin under $100",
      "Single-monitor width",
      "Few specifications in the listing summary"
    ],
    "bestFor": "A single-monitor setup within a firm $100 budget.",
    "summary": "A 28-inch VIVO converter at $99.99, with slightly more positive buyer feedback than the 29-inch model.",
    "skipIf": "You need a very low profile; the VIVO Ultra-Slim is thinner."
  },
  {
    "id": "b08gkxxt22-under100",
    "rank": 4,
    "badge": "Best Slim Profile",
    "name": "VIVO Ultra-Slim Single Top Height Adjustable Standing Desk Riser, Compact",
    "price": "$99.99",
    "rating": "4.5",
    "reviews": "1,243",
    "imageUrl": "https://m.media-amazon.com/images/I/412VP8wOKyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08GKXXT22?tag=theofficejournal-20",
    "description": "The VIVO Ultra-Slim is the pick if you're worried about a converter raising your seated keyboard height: its low-profile design is intended to add as little height as possible when lowered.\n\nIt is a compact single-top riser, $99.99 at the time of writing.\n\nThe compact platform leaves limited room for more than a laptop or one small monitor and a keyboard.",
    "specs": [
      "Design: ultra-slim, single top",
      "Size: compact",
      "Lift: manual"
    ],
    "pros": [
      "Low profile when lowered",
      "Compact",
      "Within budget at the time of writing"
    ],
    "cons": [
      "Small surface",
      "No price margin under $100",
      "Exact dimensions not in the listing summary"
    ],
    "bestFor": "Desks already at a comfortable seated height, where every inch of added height matters.",
    "summary": "VIVO's ultra-slim single-top riser at $99.99, designed to add as little height as possible.",
    "skipIf": "You need more surface; the VIVO 29-inch is wider."
  },
  {
    "id": "b0765bq7rn2-under100",
    "rank": 5,
    "badge": "Widest Platform (Over Budget)",
    "name": "Mount-It! Height Adjustable Standing Desk Converter, Compact 30 Inch Wide Tabletop",
    "price": "$128.97",
    "rating": "4.5",
    "reviews": "282",
    "imageUrl": "https://m.media-amazon.com/images/I/41EwRQZYUsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKGL1M7P?tag=theofficejournal-20",
    "description": "The Mount-It! converter offers the widest platform here, 30 inches, with a gas-spring lift, but it was listed at about $129 at the time of writing, well above the budget.\n\nMount-It! specializes in ergonomic mounts and stands.\n\nConsider it only if the extra width matters or it goes on sale below $100.",
    "specs": [
      "Platform: 30\" wide",
      "Lift: gas spring"
    ],
    "pros": [
      "Widest platform here",
      "Gas-spring lift",
      "Specialist brand"
    ],
    "cons": [
      "Well above $100 at the time of writing",
      "Still single-monitor width",
      "Few specifications in the listing summary"
    ],
    "bestFor": "Readers who want the extra width and can wait for a sale.",
    "summary": "A 30-inch gas-spring converter from Mount-It!, listed well above $100 at the time of writing.",
    "skipIf": "You need to stay under $100; the VIVO 29-inch is close in width."
  },
  {
    "id": "b0d1c9lbn5-under100",
    "rank": 6,
    "badge": "Lowest Price",
    "name": "Aconcept Extra-Slim 24 x 14 inch Black Lift Standing Desk Converter, Manual",
    "price": "$49.99",
    "rating": "4.1",
    "reviews": "64",
    "imageUrl": "https://m.media-amazon.com/images/I/418VudppzfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1C9LBN5?tag=theofficejournal-20",
    "description": "The Aconcept Extra-Slim is the lowest-cost way to try standing: a 24 x 14-inch manual converter at about $50 at the time of writing, half the price of the VIVO models.\n\nIts extra-slim design should add little height when lowered.\n\nThe small platform fits a laptop more comfortably than a monitor and keyboard, and buyer feedback is less extensive and less positive than for the VIVO options.",
    "specs": [
      "Platform: 24 x 14\"",
      "Design: extra-slim",
      "Lift: manual"
    ],
    "pros": [
      "Lowest price here",
      "Slim profile",
      "Small footprint"
    ],
    "cons": [
      "Smallest platform here",
      "Less buyer feedback than VIVO",
      "Suits a laptop more than a monitor"
    ],
    "bestFor": "Trying a standing setup with a laptop for as little as possible.",
    "summary": "A 24 x 14-inch extra-slim manual converter at about half the price of the VIVOs.",
    "skipIf": "You use a monitor and full keyboard; the VIVO 28-inch gives more room."
  }
];

export const howWeEvaluated = [
  {
    "title": "Price position",
    "description": "We compared prices at the time of writing and flagged picks above $100."
  },
  {
    "title": "Platform and profile",
    "description": "We compared platform widths and slim designs as listed."
  },
  {
    "title": "Lift type",
    "description": "We noted manual and gas-spring lifts."
  },
  {
    "title": "Buyer feedback",
    "description": "We considered the extent of buyer feedback to separate otherwise similar VIVO models, alongside specifications."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Measure your desk's height",
    "explanation": "A converter adds height even when lowered. Check its lowest platform height against your seated keyboard height; slim designs like the VIVO Ultra-Slim and Aconcept add less."
  },
  {
    "criterion": "Match platform width to your setup",
    "explanation": "Platforms here run from 24 to 30 inches, which suits a laptop or one monitor plus keyboard. Dual monitors generally need a wider converter than this budget allows."
  },
  {
    "criterion": "Check your desk's depth",
    "explanation": "The base can be deeper than the platform. Measure desk depth and check the listing's base dimensions."
  },
  {
    "criterion": "Expect manual lifts",
    "explanation": "Every converter here is manual. Electric converters typically cost more than $100."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider"
      ],
      "rows": [
        [
          "Firm $100 budget, one monitor",
          "VIVO 28-inch"
        ],
        [
          "Widest within budget",
          "VIVO 29-inch"
        ],
        [
          "Low added height",
          "VIVO Ultra-Slim"
        ],
        [
          "Lowest price, laptop",
          "Aconcept Extra-Slim"
        ],
        [
          "Most established, slight stretch",
          "VIVO 26-inch"
        ],
        [
          "Widest, over budget",
          "Mount-It! 30-inch"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What's the best value under $100?",
    "a": "The VIVO 28-inch (DESK-V028S), listed at $99.99 at the time of writing, with positive buyer feedback."
  },
  {
    "q": "What's the cheapest?",
    "a": "The Aconcept Extra-Slim, at about $50 at the time of writing."
  },
  {
    "q": "Can a converter under $100 hold two monitors?",
    "a": "The platforms here, 24 to 30 inches wide, are better suited to one monitor or a laptop. Dual monitors generally need a wider platform."
  },
  {
    "q": "Are any of these electric?",
    "a": "No. All the converters here use manual or gas-spring lifts."
  },
  {
    "q": "Will a converter make my desk too high when seated?",
    "a": "It can. Check the converter's lowest height; the slim models here are designed to add less."
  }
];

export const bottomLine = [
  "Within a firm $100 budget, the VIVO 28-inch is the sensible default for one monitor, the 29-inch gives a little more width, and the Ultra-Slim adds the least height to a desk that's already the right seated height.",
  "The Aconcept Extra-Slim halves the cost for a laptop setup. The VIVO 26-inch and Mount-It! were above $100 when we checked, so consider them only if their prices drop."
];

export const relatedGuides = [
  {
    "href": "/guide/best-budget-standing-desk-converters",
    "title": "Best Budget Standing Desk Converters (2026)"
  },
  {
    "href": "/guide/best-compact-standing-desk-converters",
    "title": "Best Compact Standing Desk Converters (2026)"
  },
  {
    "href": "/guide/best-standing-desk-converters",
    "title": "Best Standing Desk Converters (2026)"
  }
];
