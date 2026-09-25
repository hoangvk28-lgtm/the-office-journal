// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-cpu-stands-with-wheels";

export const guideTitle = "The Best Rolling CPU Stands for Moving a PC Tower Easily";

export const breadcrumbLabel = "Best CPU Stands with Wheels";

export const metaTitle = "Best CPU Stands with Wheels (2026)";

export const metaDescription = "Rolling CPU stands let you pull a tower out for cleaning or cable changes. We compared eight on fit, locking casters, rails and extras like a built-in power outlet.";

export const mainKeyword = "cpu stand with wheels";

export const introParagraphs = [
  "A CPU stand with wheels does two jobs: it lifts the tower off the floor, which can help keep carpet fibers and dust away from the intakes, and it lets you roll the PC out to reach cables or clean behind it.",
  "The details that separate them are fit (width and sometimes length adjustment), whether the casters lock so the stand doesn't drift, and side rails that keep the case from slipping. One pick here is a desk-height tower cart with a power outlet.",
  "Most were under $35 at the time of writing. Our comparison is based on published specifications, not hands-on testing; few listings state a weight capacity, so check before loading a heavy tower."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41ucXl47Z0L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-cpu-stands-with-wheels-1",
    "rank": 1,
    "badge": "Best Value Rolling Stand",
    "name": "Adjustable Mobile CPU Stand with 4 Caster Wheels",
    "price": "$14.59",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ucXl47Z0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CX576YPM?tag=theofficejournal-20",
    "description": "This stand is the simple, low-cost rolling option: a metal and PS-plastic frame with adjustable width and four caster wheels, listed as suitable for hard floors and carpet.\n\nThe listing summary doesn't give dimensions, capacity or whether the casters lock.",
    "specs": [
      "Material: metal + PS",
      "Width: adjustable",
      "Casters: 4",
      "Floors: hard or carpet (per listing)"
    ],
    "pros": [
      "Lowest price here, near-tied",
      "Adjustable width",
      "Works on carpet (per listing)"
    ],
    "cons": [
      "Dimensions not stated here",
      "Locking not mentioned",
      "Brand not named"
    ],
    "bestFor": "Getting a standard tower rolling for little money.",
    "summary": "A low-cost, width-adjustable metal and PS stand with four casters, listed for floors and carpet.",
    "skipIf": "You want locking wheels; the Hovadova adjustable stand has them."
  },
  {
    "id": "best-cpu-stands-with-wheels-2",
    "rank": 2,
    "badge": "Best with Locking Wheels",
    "name": "Adjustable Computer Tower Stand",
    "price": "$16.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/318IsyAsPXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4T42TPC?tag=theofficejournal-20",
    "description": "The Hovadova adjustable stand adds locking wheels to the basics: four 360-degree casters, two of which lock, with tool-free setup. Hovadova says it lifts the tower away from dust, spills, carpet fibers and moisture.\n\nIt was under $17 at the time of writing. Dimensions aren't given in the listing summary.",
    "specs": [
      "Casters: 4, 360°, locking",
      "Setup: tool-free",
      "Width: adjustable"
    ],
    "pros": [
      "Locking wheels",
      "Tool-free",
      "Low price"
    ],
    "cons": [
      "Dimensions not stated here",
      "Capacity not stated",
      "Rails not mentioned"
    ],
    "bestFor": "Hard floors, where locking wheels stop drift.",
    "summary": "Hovadova's adjustable stand with four 360-degree casters, locking wheels and tool-free setup.",
    "skipIf": "You need side rails; the Hovadova Extra Large has them."
  },
  {
    "id": "best-cpu-stands-with-wheels-3",
    "rank": 3,
    "badge": "Best Low-Profile Steel Cart",
    "name": "VIVO Computer Mid-Tower Case",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/3121PRR4uFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B074P76TBW?tag=theofficejournal-20",
    "description": "The VIVO is a low-profile steel cart for mid-tower cases, with four caster wheels. Steel construction and VIVO's established desk-accessory range are its main appeal.\n\nThe listing summary doesn't mention width adjustment or locking wheels, so check it fits your case.",
    "specs": [
      "Material: steel",
      "Casters: 4",
      "Profile: low",
      "Fit: mid-tower"
    ],
    "pros": [
      "Steel build",
      "Low profile",
      "Established brand"
    ],
    "cons": [
      "Adjustment not mentioned",
      "Locking not mentioned",
      "Mid-tower only"
    ],
    "bestFor": "A standard mid-tower that should sit low.",
    "summary": "VIVO's low-profile steel mid-tower cart with four casters.",
    "skipIf": "Your case is large; the Liitrton or AGPTEK adjusts length."
  },
  {
    "id": "best-cpu-stands-with-wheels-4",
    "rank": 4,
    "badge": "Desk-Height Cart with Power",
    "name": "ZUAVIALA Computer Tower Stand with Power Outlet",
    "price": "$45.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413pQoF8IoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH9MY1TL?tag=theofficejournal-20",
    "description": "The ZUAVIALA is a different product: a tower cart whose top adjusts from 21.34 to 28.3 inches, so it can sit beside a desk as extra surface, with a built-in power outlet and a metal frame.\n\nIt was the most expensive option here at the time of writing and takes more floor space than a low stand.",
    "specs": [
      "Height: 21.34–28.3\" adjustable",
      "Power outlet: built in",
      "Frame: metal",
      "Wheels: yes"
    ],
    "pros": [
      "Desk-height top",
      "Built-in outlet",
      "Height adjustable"
    ],
    "cons": [
      "Most expensive here",
      "Larger footprint",
      "Tower dimensions not stated"
    ],
    "bestFor": "Keeping a tower and power beside a desk that lacks space.",
    "summary": "ZUAVIALA's height-adjustable tower cart (21.34 to 28.3 inches) with a built-in power outlet.",
    "skipIf": "You just want the tower off the floor; a low stand costs a third as much."
  },
  {
    "id": "best-cpu-stands-with-wheels-5",
    "rank": 5,
    "badge": "Best Adjustable Length and Width for Less",
    "name": "Liitrton Mobile CPU Stand Adjustable Computer Tower Stand Fits Most PC",
    "price": "$14.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31hxCzq3j0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B083DMYKC9?tag=theofficejournal-20",
    "description": "The Liitrton adjusts both length (from 16.93 inches) and width to fit most towers, with four 360-degree casters, at under $15 at the time of writing.\n\nThat makes it the low-cost alternative to the AGPTEK for longer cases. Locking isn't mentioned in the listing summary.",
    "specs": [
      "Length: adjustable from 16.93\"",
      "Width: adjustable",
      "Casters: 4, 360°"
    ],
    "pros": [
      "Length and width adjust",
      "Low price",
      "Rolling"
    ],
    "cons": [
      "Locking not mentioned",
      "Full range not in summary",
      "Capacity not stated"
    ],
    "bestFor": "Longer cases on a small budget.",
    "summary": "Liitrton's stand with adjustable length and width and four 360-degree casters.",
    "skipIf": "You need a stated range; the AGPTEK lists 6.3–11.8 x 15.7–20 inches."
  },
  {
    "id": "best-cpu-stands-with-wheels-6",
    "rank": 6,
    "badge": "Widest Adjustment Range",
    "name": "AGPTEK Adjustable CPU Stand",
    "price": "$32.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sf7YBwzFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D53MPF7X?tag=theofficejournal-20",
    "description": "The AGPTEK has the widest stated ranges here: 6.3 to 11.8 inches wide and 15.7 to 20 inches long, fitting slim cases through large towers, on four 360-degree casters.\n\nIt costs about twice the basic stands at the time of writing.",
    "specs": [
      "Width: 6.3–11.8\"",
      "Length: 15.7–20\"",
      "Casters: 4, 360°"
    ],
    "pros": [
      "Widest stated range",
      "Fits unusual cases",
      "Rolling"
    ],
    "cons": [
      "Costs more than basic stands",
      "Locking not mentioned",
      "Capacity not stated"
    ],
    "bestFor": "Unusual or very large cases.",
    "summary": "AGPTEK's stand adjusting 6.3 to 11.8 inches wide and 15.7 to 20 inches long.",
    "skipIf": "Your case is standard; the Hovadova adjustable is cheaper."
  },
  {
    "id": "best-cpu-stands-with-wheels-7",
    "rank": 7,
    "badge": "Low-Rise Carpet Stand",
    "name": "Pc Stand, Adjustable Computer Tower Stand for Carpet Fits Most PC-Black",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Sn9jzQPHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FH28XGY5?tag=theofficejournal-20",
    "description": "This stand raises the tower 1.75 inches off the floor, enough to clear carpet pile, with an adjustable width for most cases and free-rolling wheels.\n\nThe brand isn't named, and locking and capacity aren't stated in the listing summary.",
    "specs": [
      "Lift: 1.75\"",
      "Width: adjustable",
      "Wheels: yes",
      "Use: carpet"
    ],
    "pros": [
      "Stated lift height",
      "Designed for carpet",
      "Low price"
    ],
    "cons": [
      "Brand not named",
      "Locking not mentioned",
      "Low lift"
    ],
    "bestFor": "Clearing carpet pile under a standard tower.",
    "summary": "A width-adjustable stand that lifts the PC 1.75 inches, designed for carpet.",
    "skipIf": "You want more clearance; the ZUAVIALA or taller stands lift higher."
  },
  {
    "id": "best-cpu-stands-with-wheels-8",
    "rank": 8,
    "badge": "Best for Large Cases with Rails",
    "name": "Hovadova Extra Large Computer Tower Stand",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413u6H16yJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C89JQV8Y?tag=theofficejournal-20",
    "description": "The Hovadova Extra Large suits bigger towers, with protective rails on both sides to keep the case from slipping off and four 360-degree wheels.\n\nIt costs more than Hovadova's standard stand at the time of writing, and dimensions aren't given in the listing summary.",
    "specs": [
      "Size: extra large (check listing)",
      "Side rails: yes",
      "Wheels: 4, 360°"
    ],
    "pros": [
      "Side rails",
      "Larger platform",
      "Rolling"
    ],
    "cons": [
      "Dimensions not stated here",
      "Locking not mentioned",
      "Costs more than the standard Hovadova"
    ],
    "bestFor": "Large gaming or full towers.",
    "summary": "Hovadova's extra-large rolling stand with side rails and four 360-degree wheels.",
    "skipIf": "Your case is mid-size; the standard Hovadova is cheaper."
  }
];

export const howWeEvaluated = [
  {
    "title": "Fit",
    "description": "We compared adjustment ranges where listed."
  },
  {
    "title": "Mobility",
    "description": "We noted caster count, rotation and locks."
  },
  {
    "title": "Build and extras",
    "description": "We noted materials, rails, lift height and outlets."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Measure your case",
    "explanation": "Compare case width and depth with the stand's range; the AGPTEK lists the widest."
  },
  {
    "criterion": "Prefer locking wheels on hard floors",
    "explanation": "They stop drift; the Hovadova adjustable lists them."
  },
  {
    "criterion": "Side rails",
    "explanation": "Rails help keep the case on the stand when rolling; the Hovadova Extra Large has them."
  },
  {
    "criterion": "Check capacity",
    "explanation": "Most listings here don't state one; ask before loading a heavy tower."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider"
      ],
      "rows": [
        [
          "Lowest price",
          "Adjustable Mobile CPU Stand"
        ],
        [
          "Locking wheels",
          "Hovadova adjustable"
        ],
        [
          "Low steel cart",
          "VIVO"
        ],
        [
          "Desk-height cart with outlet",
          "ZUAVIALA"
        ],
        [
          "Longer case, low cost",
          "Liitrton"
        ],
        [
          "Widest range",
          "AGPTEK"
        ],
        [
          "Carpet clearance",
          "1.75\" carpet stand"
        ],
        [
          "Large case with rails",
          "Hovadova Extra Large"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why put a PC on wheels?",
    "a": "To lift it off the floor and roll it out for cleaning or cable changes."
  },
  {
    "q": "Do I need locking wheels?",
    "a": "They help, especially on hard floors where a stand can drift."
  },
  {
    "q": "Will it work on carpet?",
    "a": "Several are listed for carpet; larger casters roll more easily on thick pile."
  },
  {
    "q": "How much weight can they hold?",
    "a": "Most listings here don't say; check before loading a heavy full tower."
  },
  {
    "q": "What's the ZUAVIALA for?",
    "a": "It's a desk-height tower cart with an outlet, useful as a side surface beside the desk."
  }
];

export const bottomLine = [
  "For a standard tower, the Hovadova adjustable stand adds locking wheels for very little, and the Liitrton or AGPTEK adjusts length for larger cases. The VIVO is a simple steel option.",
  "For big cases, the Hovadova Extra Large adds rails, and the ZUAVIALA is the pick if you want a desk-height cart with power."
];

export const relatedGuides = [
  {
    "href": "/guide/best-cpu-stands",
    "title": "Best CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-for-small-pc-towers",
    "title": "Best CPU Stands for Small PC Towers in 2026"
  },
  {
    "href": "/guide/best-heavy-duty-cpu-stands",
    "title": "Best Heavy-Duty CPU Stands in 2026"
  },
  {
    "href": "/guide/best-cpu-stands-under-100",
    "title": "Best CPU Stands Under $100 in 2026"
  }
];
