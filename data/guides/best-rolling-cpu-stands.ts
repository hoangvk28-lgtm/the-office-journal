// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-rolling-cpu-stands";

export const guideTitle = "The Best Rolling CPU Stands and Tower Carts";

export const breadcrumbLabel = "Best Rolling CPU Stands";

export const metaTitle = "Best Rolling CPU Stands and PC Tower Carts (2026)";

export const metaDescription = "We compared rolling CPU stands, from low adjustable-width dollies to desk-height ZUAVIALA carts with a power outlet, on fit, height, casters and features.";

export const mainKeyword = "rolling cpu stand";

export const introParagraphs = [
  "A rolling CPU stand gets a desktop tower off the carpet and lets you pull it out to reach cables or clean. There are two kinds here: low stands, a few inches high, that sit under the desk; and taller ZUAVIALA carts that raise the tower toward desk height and add surface space.",
  "For the low stands, compare the width range with your case and look for side rails. None of the listings here state a weight capacity, so check your tower's weight with the seller if it is heavy.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $15 to $46 at the time of writing."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41R2fUTfTqL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-rolling-cpu-stands-1",
    "rank": 1,
    "badge": "Best Desk-Height Cart",
    "name": "ZUAVIALA Computer Tower Stand",
    "price": "$40.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41R2fUTfTqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9VHJCP?tag=theofficejournal-20",
    "description": "The ZUAVIALA is the pick if you want the tower within reach: a metal cart that adjusts from 21.34 to 28.3 inches high with a knob, bringing the PC close to desk height and adding surface space beside the desk.\n\nThat makes ports and power buttons easier to reach and keeps the tower away from floor dust.\n\nIt takes more floor space than a low stand, and the listing does not state a weight capacity or caster details.",
    "specs": [
      "Height: 21.34–28.3\" adjustable",
      "Construction: metal",
      "Adds surface space",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Tower at desk height",
      "Adds surface space"
    ],
    "cons": [
      "Larger footprint",
      "Capacity not stated"
    ],
    "bestFor": "Desks where the tower should sit beside you, not under the desk.",
    "summary": "A metal tower cart adjustable from 21.34 to 28.3 inches high that doubles as extra desk space.",
    "skipIf": "You want the tower hidden under the desk; a low stand suits that."
  },
  {
    "id": "best-rolling-cpu-stands-2",
    "rank": 2,
    "badge": "Best Budget Low Stand",
    "name": "Adjustable Mobile CPU Stand with 4 Caster Wheels",
    "price": "$14.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ucXl47Z0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CX576YPM?tag=theofficejournal-20",
    "description": "This mobile stand is the budget pick: adjustable width, four caster wheels and a metal and PS plastic frame designed to work on hard floors and carpet, for about $15 at the time of writing.\n\nThe listing does not give the width range or a weight capacity, so check your case size.",
    "specs": [
      "Adjustable width (range not stated)",
      "Casters: 4",
      "Metal and PS plastic",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Lowest price",
      "Works on carpet"
    ],
    "cons": [
      "Width range not stated",
      "Plastic parts"
    ],
    "bestFor": "Lighter towers on a budget.",
    "summary": "An adjustable-width metal and plastic stand with four casters for about $15.",
    "skipIf": "You have a heavy tower; choose a steel stand."
  },
  {
    "id": "best-rolling-cpu-stands-3",
    "rank": 3,
    "badge": "Best for Carpet",
    "name": "Pc Stand, Adjustable Computer Tower Stand for Carpet Fits Most PC-Black",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sn9jzQPHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH28XGY5?tag=theofficejournal-20",
    "description": "This PC stand lifts the tower 1.75 inches off the floor, which the seller says protects it from dust, spills, carpet fibers and moisture, with adjustable width for most cases and casters for mobility.\n\nIt costs about $16 at the time of writing. The width range and weight rating are not stated.",
    "specs": [
      "Lift: 1.75\"",
      "Adjustable width",
      "Rolling",
      "Weight capacity: not stated"
    ],
    "pros": [
      "Stated lift height",
      "Low price"
    ],
    "cons": [
      "Width range not stated"
    ],
    "bestFor": "Carpeted rooms.",
    "summary": "An adjustable-width stand that lifts the PC 1.75 inches off carpet.",
    "skipIf": "You want side rails; the Hovadova has them."
  },
  {
    "id": "best-rolling-cpu-stands-4",
    "rank": 4,
    "badge": "Rolling Stand With Rails",
    "name": "Adjustable Computer Tower Stand",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sb0MsVmIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C89RMK9B?tag=theofficejournal-20",
    "description": "This stand has protective rails on both sides to stop the case sliding off and four 360-degree wheels, for about $25 at the time of writing.\n\nIt lists no dimensions or weight capacity, and the brand is not named.",
    "specs": [
      "Side rails",
      "Casters: 4 x 360°",
      "Dimensions and capacity: not stated"
    ],
    "pros": [
      "Side rails"
    ],
    "cons": [
      "No dimensions or capacity",
      "Unbranded"
    ],
    "bestFor": "Standard towers that need rails.",
    "summary": "An unbranded stand with side rails and four swivel wheels.",
    "skipIf": "The Hovadova has rails and stated widths for less."
  },
  {
    "id": "best-rolling-cpu-stands-5",
    "rank": 5,
    "badge": "Best Cart With Power Outlet",
    "name": "ZUAVIALA Computer Tower Stand with Power Outlet",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413pQoF8IoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9MY1TL?tag=theofficejournal-20",
    "description": "This ZUAVIALA cart adds a power outlet to the desk-height tower cart design, so you can plug in the PC or accessories at the cart.\n\nIt is the most expensive option here at about $46 at the time of writing. The listing does not state surge protection, height range or weight capacity; the plain ZUAVIALA lists 21.34 to 28.3 inches.",
    "specs": [
      "Type: tower cart",
      "Built-in power outlet",
      "Metal construction",
      "Surge protection and capacity: not stated"
    ],
    "pros": [
      "Power at the cart",
      "Tower near desk height"
    ],
    "cons": [
      "Most expensive",
      "Surge protection not stated"
    ],
    "bestFor": "Setups where a nearby outlet is useful.",
    "summary": "The ZUAVIALA tower cart with a built-in power outlet.",
    "skipIf": "You do not need an outlet; the plain ZUAVIALA costs less."
  },
  {
    "id": "best-rolling-cpu-stands-6",
    "rank": 6,
    "badge": "Best Mid-Tower Cart",
    "name": "VIVO Computer Mid-Tower Case",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3121PRR4uFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B074P76TBW?tag=theofficejournal-20",
    "description": "The VIVO mid-tower cart is a low-profile steel cart on four casters, from an established desk-accessory brand, for about $25 at the time of writing.\n\nIt is sized for mid-tower cases; the listing does not give dimensions or a weight capacity.",
    "specs": [
      "Fits: mid-tower cases",
      "Construction: steel",
      "Casters: 4",
      "Low profile"
    ],
    "pros": [
      "Steel",
      "Established brand"
    ],
    "cons": [
      "Dimensions and capacity not stated"
    ],
    "bestFor": "Mid-tower PCs.",
    "summary": "A low-profile steel VIVO cart for mid-tower cases.",
    "skipIf": "You have a full ATX tower; the larger VIVO fits it."
  },
  {
    "id": "best-rolling-cpu-stands-7",
    "rank": 7,
    "badge": "Best for Large ATX Towers",
    "name": "VIVO Large Computer Tower Desktop ATX-Case",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31DOiz9vjAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRDCFQ3K?tag=theofficejournal-20",
    "description": "The larger VIVO cart is the same low-profile steel design sized for larger ATX towers, for about $30 at the time of writing.\n\nThe listing does not give dimensions or capacity, so confirm your case fits.",
    "specs": [
      "Fits: large ATX towers",
      "Construction: steel",
      "Casters: 4",
      "Low profile"
    ],
    "pros": [
      "Steel",
      "Sized for large cases"
    ],
    "cons": [
      "Dimensions and capacity not stated"
    ],
    "bestFor": "Large ATX towers.",
    "summary": "VIVO's larger steel cart for full ATX cases.",
    "skipIf": "Your case is a mid-tower; the smaller VIVO costs less."
  },
  {
    "id": "best-rolling-cpu-stands-8",
    "rank": 8,
    "badge": "Best Stated-Size Stand",
    "name": "Hovadova Computer Tower Stand",
    "price": "$19.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41A13obhQPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6G47BW7?tag=theofficejournal-20",
    "description": "The Hovadova is the low stand with the clearest specifications: 7.87 to 10.23 inches wide, 16.9 inches long, with side rails and a ventilated frame, for about $20 at the time of writing.\n\nThe listing does not state a weight capacity.",
    "specs": [
      "Width: 7.87–10.23\"",
      "Length: 16.9\"",
      "Side rails",
      "Ventilated"
    ],
    "pros": [
      "Stated dimensions",
      "Side rails",
      "Low price"
    ],
    "cons": [
      "Capacity not stated",
      "Fixed length"
    ],
    "bestFor": "Standard towers within its width range.",
    "summary": "A Hovadova stand with side rails, 7.87–10.23 inches wide, for about $20.",
    "skipIf": "Your case is wider than about 10 inches."
  }
];

export const howWeEvaluated = [
  {
    "title": "Type and fit",
    "description": "We separated low stands from tall carts and recorded stated sizes."
  },
  {
    "title": "Features",
    "description": "We noted rails, casters, height adjustment and power outlets."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Low stand or tall cart",
    "explanation": "Low stands hide the tower under the desk; ZUAVIALA carts raise it toward desk height and add surface."
  },
  {
    "criterion": "Fit",
    "explanation": "Measure your case's width and length. The Hovadova lists 7.87–10.23 inches wide; VIVO sells mid-tower and ATX sizes."
  },
  {
    "criterion": "Weight capacity",
    "explanation": "None of these listings state one. Confirm with the seller for a heavy tower."
  },
  {
    "criterion": "Rails and casters",
    "explanation": "Side rails help keep the case in place; casters ease cleaning and cable access."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Tower beside the desk",
          "ZUAVIALA cart",
          "21.34–28.3\" high"
        ],
        [
          "Cart with power",
          "ZUAVIALA with outlet",
          "Built-in outlet"
        ],
        [
          "Large ATX tower",
          "VIVO large",
          "Steel, ATX-sized"
        ],
        [
          "Stated size, rails",
          "Hovadova",
          "About $20"
        ],
        [
          "Lowest cost",
          "Mobile CPU stand",
          "About $15"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Products"
      ],
      "rows": [
        [
          "About $15–$20",
          "Mobile stand, carpet stand, Hovadova"
        ],
        [
          "About $25–$30",
          "Railed stand, VIVO mid-tower, VIVO large"
        ],
        [
          "About $41–$46",
          "ZUAVIALA, ZUAVIALA with outlet"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why put a PC on a rolling stand?",
    "a": "It keeps the tower off carpet and dust, helps airflow, and lets you roll it out to reach cables or clean."
  },
  {
    "q": "How much weight can these hold?",
    "a": "None of the listings here state a capacity. Check with the seller for a heavy tower."
  },
  {
    "q": "Will my case fit?",
    "a": "Compare your case's width and length with the stand's range, or choose a VIVO sized for mid-tower or ATX cases."
  }
];

export const bottomLine = [
  "For a tower under the desk, the Hovadova is the low stand with the clearest specifications, and the VIVO carts suit mid-tower and large ATX cases from an established brand.",
  "If you want the PC beside you at desk height, the ZUAVIALA cart does that and adds surface space, with a power-outlet version for a few dollars more."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-mobile-cpu-stands",
    "title": "Best Mobile CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-bottom-stands",
    "title": "Best CPU Bottom Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-for-gaming-pcs",
    "title": "Best CPU Stands for Gaming PCs in 2026"
  }
];
