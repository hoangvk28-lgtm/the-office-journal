// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-chair-mats";

export const guideTitle = "The Best Chair Mats for Carpet, Hard Floors and Both";

export const breadcrumbLabel = "Best Chair Mats";

export const metaTitle = "Best Chair Mats for Carpet and Hard Floors: Vinyl, Polycarbonate and Glass (2026)";

export const metaDescription = "We compared chair mats by floor type, carpet pile rating, material, size and warranty, from clear PVC for hard floors to polycarbonate for thick carpet and tempered glass for either.";

export const mainKeyword = "chair mats";

export const introParagraphs = [
  "The right chair mat depends first on the floor underneath it. Hard-floor mats have a smooth or lightly coated underside; carpet mats use cleats to grip the pile and need to be rigid enough not to sink into it. Buy the wrong type and the mat either slides around or dents and cracks.",
  "For carpet, the second question is pile height: most vinyl carpet mats are rated only for low pile, while thicker carpet needs a stiffer mat rated for it. After that, the choice is between materials. PVC is cheapest, polycarbonate is stiffer and often better warrantied, and tempered glass works on either floor at a higher price and weight.",
  "Our comparison is based on published specifications, including floor and pile ratings, size, thickness, capacity and warranty, plus price position, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "hon-ofm-essentials-chair-mat-low-pile",
    "rank": 1,
    "badge": "Best for Low-Pile Carpet",
    "name": "HON/OFM Essentials Chair Mat for Low Pile Carpet",
    "price": "$44.99",
    "rating": "4.0",
    "reviews": "54,421",
    "imageUrl": "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    "description": "The HON/OFM Essentials mat is the sensible choice for a typical office carpet: a 2.2mm vinyl mat with molded cleats and anchor bars for low-pile carpet up to 1/4 inch, and a five-year warranty.\n\nThe extended lip reaches under the desk, and ramped edges make it easier to roll on and off. The top has an anti-skid finish.\n\nIt is carpet only and rated only for low pile; for thicker carpet, the Floortex or Marvelux are the options here. Like most vinyl mats, it ships rolled and may need time to flatten.",
    "specs": [
      "Size: 36 x 48\" with lip",
      "Material: vinyl, 2.2mm",
      "Rated for: low-pile carpet up to 1/4\"",
      "Underside: cleats and anchor bars",
      "Warranty: 5 years"
    ],
    "pros": [
      "Five-year warranty",
      "Ramped lip",
      "Moderate price"
    ],
    "cons": [
      "Carpet only",
      "Low pile only",
      "Ships rolled"
    ],
    "bestFor": "Standard low-pile office carpet.",
    "summary": "A 36 x 48-inch vinyl mat with cleats, a ramped lip and a five-year warranty for low-pile carpet.",
    "skipIf": "Your carpet is thicker than 1/4 inch; the Floortex or Marvelux are rated for more."
  },
  {
    "id": "muarts-crystal-clear-heavy-duty",
    "rank": 2,
    "badge": "Best Rigid Mat for Either Floor",
    "name": "MuArts Crystal Clear Heavy Duty Chair Mat",
    "price": "$59.99",
    "rating": "4.4",
    "reviews": "19,765",
    "imageUrl": "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    "description": "The MuArts is the rigid plastic option for anyone who may move the mat between carpet and hard floors: at 5mm, MuArts says it stays flat on either surface.\n\nIt lists a 1,400 lb capacity, the highest here, in a wide 54 x 32-inch shape, with a 12-month warranty.\n\nIt costs more than basic vinyl, is heavier to move, and its warranty is shorter than the five years on the HON, Floortex and Lorell mats. Check the shallow 32-inch depth against how far your chair rolls back.",
    "specs": [
      "Size: 54 x 32\"",
      "Thickness: 5mm, rigid",
      "Use: carpet or hard floor",
      "Capacity: 1,400 lb (listed)",
      "Warranty: 12 months"
    ],
    "pros": [
      "Works on carpet or hard floor",
      "Highest listed capacity",
      "Clear"
    ],
    "cons": [
      "12-month warranty",
      "Shallow depth",
      "Heavier than vinyl"
    ],
    "bestFor": "Buyers who move between rooms or are not sure which floor the mat will end up on.",
    "summary": "A 5mm rigid clear mat rated for 1,400 lb that works on carpet or hard floors.",
    "skipIf": "You need more depth behind the desk; a 36 x 48-inch or larger mat covers more."
  },
  {
    "id": "kuyal-clear-chair-mat-hard-floors",
    "rank": 3,
    "badge": "Best Budget Hard-Floor Mat",
    "name": "Kuyal Clear Chair Mat for Hard Floors",
    "price": "$32.95",
    "rating": "4.2",
    "reviews": "10,646",
    "imageUrl": "https://m.media-amazon.com/images/I/51-SqFH4ZoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0893BD69B?tag=theofficejournal-20",
    "description": "The Kuyal is the low-cost choice for hardwood, tile or laminate: a 2mm clear PVC mat with an anti-slide coating underneath instead of cleats, for about $33 at the time of writing.\n\nThe dull polish finish should make small scratches less noticeable than on a glossy mat, and Kuyal lists it as odorless and BPA-free. It is widely reviewed.\n\nIt is for hard floors only and will not grip carpet, and it is much thinner than the rigid and glass mats.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: PVC, 2mm",
      "Underside: anti-slide coating",
      "Dull polish finish",
      "BPA-free (manufacturer claim)"
    ],
    "pros": [
      "Lowest price here",
      "Matte finish hides light scratches",
      "Widely reviewed"
    ],
    "cons": [
      "Hard floor only",
      "Thin",
      "No lip"
    ],
    "bestFor": "Budget hard-floor setups that need basic protection.",
    "summary": "A 36 x 48-inch clear PVC mat with an anti-slide underside for hard floors.",
    "skipIf": "You have carpet; choose a cleated or rigid mat."
  },
  {
    "id": "floortex-ultimat-polycarbonate-carpet",
    "rank": 4,
    "badge": "Best for Medium-Pile Carpet",
    "name": "Floortex Ultimat Polycarbonate Chair Mat for Carpet",
    "price": "$101.99",
    "rating": "4.0",
    "reviews": "1,200",
    "imageUrl": "https://m.media-amazon.com/images/I/31d9jTEL4sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00272N7RM?tag=theofficejournal-20",
    "description": "The Floortex Ultimat is the step up for thicker carpet and larger desk areas: a 48 x 60-inch polycarbonate mat with a gripper back, rated for carpet up to 1/2 inch.\n\nPolycarbonate is stiffer than vinyl, which helps on medium pile. Floortex lists fire resistance and GREENGUARD certification, useful in shared or regulated workplaces, and a five-year warranty.\n\nIt costs about twice the HON at the time of writing, and it is not rated for high-pile carpet.",
    "specs": [
      "Size: 48 x 60\"",
      "Material: polycarbonate, 0.09\"",
      "Rated for: carpet up to 1/2\"",
      "Gripper back",
      "Fire-resistant, GREENGUARD certified",
      "Warranty: 5 years"
    ],
    "pros": [
      "Rated for low and medium pile",
      "Large coverage",
      "Five-year warranty and certifications"
    ],
    "cons": [
      "Not for high pile",
      "Large footprint"
    ],
    "bestFor": "Larger desk areas on low- to medium-pile carpet.",
    "summary": "A large 48 x 60-inch polycarbonate carpet mat rated for pile up to 1/2 inch, with a five-year warranty.",
    "skipIf": "Your carpet is thicker than 1/2 inch; the Marvelux is rated to 3/4 inch."
  },
  {
    "id": "marvelux-heavy-duty-high-pile",
    "rank": 5,
    "badge": "Best for High-Pile Carpet",
    "name": "Marvelux Heavy Duty Polycarbonate Mat for High Pile Carpets",
    "price": "$121.99",
    "rating": "4.0",
    "reviews": "201",
    "imageUrl": "https://m.media-amazon.com/images/I/51UDuDStG2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D96LWLZ7?tag=theofficejournal-20",
    "description": "The Marvelux is the mat for thick carpet: a 0.11-inch polycarbonate mat with a studded underside, rated for carpet up to 3/4 inch, the deepest pile rating here.\n\nIts rigidity is the point, since a thin mat on thick carpet tends to sink and dent. Marvelux states it is made using 50 percent renewable energy and is fully recyclable.\n\nIt is one of the more expensive mats here and has fewer buyer reviews than most.",
    "specs": [
      "Size: 48 x 60\"",
      "Material: polycarbonate, 0.11\"",
      "Rated for: carpet up to 3/4\"",
      "Studded underside",
      "Recyclable (manufacturer claim)"
    ],
    "pros": [
      "Deepest pile rating here",
      "Rigid for thick carpet",
      "Large coverage"
    ],
    "cons": [
      "Among the most expensive mats here",
      "Fewer buyer reviews"
    ],
    "bestFor": "Medium- to high-pile carpet.",
    "summary": "A 48 x 60-inch polycarbonate mat rated for carpet up to 3/4 inch.",
    "skipIf": "Your carpet is low pile; the HON or Floortex cost less."
  },
  {
    "id": "glsland-tempered-glass-chair-mat",
    "rank": 6,
    "badge": "Best Budget Glass Mat",
    "name": "GLSLAND Tempered Glass Chair Mat",
    "price": "$60.99",
    "rating": "4.6",
    "reviews": "2,486",
    "imageUrl": "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    "description": "The GLSLAND is the lowest-priced glass mat here: 0.2-inch tempered glass in a 36 x 46-inch size, rated for 1,200 lb, with four anti-slip pads underneath.\n\nGlass is scratch-resistant, does not yellow like some plastics, and works on either floor type. The polished, rounded corners are a sensible safety detail. GLSLAND lists it as BPA- and phthalate-free.\n\nIt is heavy to move, and pads give lighter grip than cleats. It costs about the same as the MuArts rigid plastic mat at the time of writing.",
    "specs": [
      "Size: 36 x 46\"",
      "Material: tempered glass, 0.2\"",
      "Capacity: 1,200 lb (listed)",
      "4 anti-slip pads",
      "Use: carpet or hard floor"
    ],
    "pros": [
      "Lowest glass price here",
      "Works on either floor",
      "Scratch-resistant, does not yellow"
    ],
    "cons": [
      "Heavy",
      "Pads rather than cleats"
    ],
    "bestFor": "Buyers who want glass without paying the most.",
    "summary": "A 36 x 46-inch tempered glass mat rated for 1,200 lb, for carpet or hard floors.",
    "skipIf": "You need a larger area; the Koonmi is 46 x 55 inches."
  },
  {
    "id": "koonmi-tempered-glass-chair-mat",
    "rank": 7,
    "badge": "Best Large Glass Mat",
    "name": "Koonmi Tempered Glass Chair Mat",
    "price": "$135.89",
    "rating": "4.7",
    "reviews": "1,085",
    "imageUrl": "https://m.media-amazon.com/images/I/41UO1C7z6QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXSFBQLH?tag=theofficejournal-20",
    "description": "The Koonmi is the glass mat for bigger desk areas: 0.2-inch tempered glass in a 46 x 55-inch size, rated for over 1,000 lb.\n\nIts detachable anti-slip pad can be repositioned under the area where the chair rolls most, and it has polished, rounded corners. It works on carpet or hard floors.\n\nIt is the most expensive mat here at the time of writing and, given its size, the heaviest to handle.",
    "specs": [
      "Size: 46 x 55\"",
      "Material: tempered glass, 0.2\"",
      "Capacity: 1,000+ lb (listed)",
      "Detachable anti-slip pad",
      "Use: carpet or hard floor"
    ],
    "pros": [
      "Largest glass mat here",
      "Repositionable pad",
      "Works on either floor"
    ],
    "cons": [
      "Most expensive mat here",
      "Heavy to handle"
    ],
    "bestFor": "Large desk areas that want glass coverage.",
    "summary": "The largest glass mat here, 46 x 55 inches, with a repositionable anti-slip pad.",
    "skipIf": "A 36 x 46-inch area is enough; the GLSLAND costs less than half as much."
  },
  {
    "id": "lorell-tempered-glass-chairmat-multi-surface",
    "rank": 8,
    "badge": "Best Glass Mat With a Long Warranty",
    "name": "Lorell Tempered Glass Chairmat Multi-Surface",
    "price": "Check current price",
    "rating": "4.8",
    "reviews": "10,717",
    "imageUrl": "https://m.media-amazon.com/images/I/21V7PYvl22L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07K95V7X2?tag=theofficejournal-20",
    "description": "The Lorell is the glass mat to consider if warranty matters: 0.25-inch tempered glass, the thickest here, rated for 1,000 lb and for carpet, hard floors or marble, with a five-year warranty.\n\nIts 46 x 36-inch size is similar to the GLSLAND's, and it is the most widely reviewed glass mat in this guide.\n\nAvailability and price vary on this listing, so check the current price before comparing it with the other glass mats.",
    "specs": [
      "Size: 46 x 36\"",
      "Material: tempered glass, 0.25\"",
      "Capacity: 1,000 lb (listed)",
      "Use: carpet, hard floor, marble",
      "Warranty: 5 years"
    ],
    "pros": [
      "Thickest glass here",
      "Five-year warranty",
      "Widely reviewed"
    ],
    "cons": [
      "Availability varies",
      "Heavy"
    ],
    "bestFor": "Buyers who want a glass mat with a long warranty from an office-supply brand.",
    "summary": "The thickest glass here at 0.25 inches, with a five-year warranty.",
    "skipIf": "It is out of stock or priced well above the GLSLAND when you buy."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor and pile rating",
    "description": "We grouped mats by the floor types and carpet pile heights their listings support."
  },
  {
    "title": "Material and thickness",
    "description": "We compared PVC, vinyl, polycarbonate and glass, and listed thickness."
  },
  {
    "title": "Size, capacity and warranty",
    "description": "We recorded dimensions, stated capacities and warranty terms."
  },
  {
    "title": "Price position",
    "description": "We compared what each step up in price adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Floor type",
    "explanation": "Hard-floor mats (Kuyal) have no cleats; carpet mats (HON, Floortex, Marvelux) do. The MuArts and the glass mats are designed for either."
  },
  {
    "criterion": "Carpet pile rating",
    "explanation": "Pile ratings here run from 1/4 inch (HON) to 1/2 inch (Floortex) and 3/4 inch (Marvelux). Measure your carpet before buying; a mat rated for less will tend to sink."
  },
  {
    "criterion": "Material",
    "explanation": "PVC and vinyl are cheapest; polycarbonate is stiffer; tempered glass is scratch-resistant and works on any floor but is heavy."
  },
  {
    "criterion": "Size and shape",
    "explanation": "Sizes range from 36 x 46 inches to 48 x 60 inches, plus the wide, shallow 54 x 32-inch MuArts. Cover the full area your chair rolls through."
  },
  {
    "criterion": "Warranty",
    "explanation": "The HON, Floortex and Lorell list five years; the MuArts lists 12 months."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By floor",
    "table": {
      "headers": [
        "Floor",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Hard floor, budget",
          "Kuyal",
          "Clear PVC, anti-slide underside"
        ],
        [
          "Low-pile carpet",
          "HON/OFM Essentials",
          "Cleats, lip, five-year warranty"
        ],
        [
          "Medium-pile carpet",
          "Floortex Ultimat",
          "Rated to 1/2 inch, 48 x 60"
        ],
        [
          "High-pile carpet",
          "Marvelux",
          "Rated to 3/4 inch"
        ],
        [
          "Either floor, plastic",
          "MuArts",
          "5mm rigid, 1,400 lb"
        ],
        [
          "Either floor, glass",
          "GLSLAND, Lorell or Koonmi",
          "Budget, five-year warranty, or largest size"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated. The Lorell's price varied when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Mats"
      ],
      "rows": [
        [
          "About $33–$45",
          "Kuyal, HON/OFM Essentials"
        ],
        [
          "About $60",
          "MuArts, GLSLAND"
        ],
        [
          "About $100–$136",
          "Floortex, Marvelux, Koonmi"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Can I use a carpet mat on a hard floor, or the reverse?",
    "a": "It is not recommended. A hard-floor mat has nothing to grip carpet with and will slide, while carpet cleats can mark a hard floor. The MuArts and the glass mats here are designed for either."
  },
  {
    "q": "Do I need a chair mat on a hard floor in good condition?",
    "a": "Not necessarily. Soft casters designed for hard floors may be enough. A mat still protects against grit and can make rolling smoother."
  },
  {
    "q": "How do I check my carpet's pile height?",
    "a": "Press a ruler into the carpet to the backing and measure the fibers. As a rough guide, low pile is under about 1/4 inch and high pile is noticeably deeper. Compare the measurement with the mat's rating."
  },
  {
    "q": "Why is glass more expensive than plastic?",
    "a": "Glass mats are heavier to make and ship, work on any floor type, and resist scratching and yellowing. Whether that is worth the price depends on how long you plan to keep the mat."
  },
  {
    "q": "Why won't my new mat lie flat?",
    "a": "Mats shipped rolled often need time to relax. Laying the mat flat in a warm room usually helps; check the manufacturer's instructions."
  },
  {
    "q": "Which mat here is rated for the thickest carpet?",
    "a": "The Marvelux, rated for carpet up to 3/4 inch. The Floortex covers up to 1/2 inch and the HON up to 1/4 inch."
  }
];

export const bottomLine = [
  "Start with your floor. For hard floors on a budget, the Kuyal covers the basics. For carpet, match the pile: the HON/OFM Essentials for low pile, the Floortex for medium and the Marvelux for high pile.",
  "If you want one mat for any floor, the MuArts is the rigid plastic option with the highest capacity, and glass is worth paying more for if you want scratch resistance and a long life: the GLSLAND is the budget glass mat, the Lorell adds a five-year warranty and the Koonmi covers the largest area."
];

export const relatedGuides = [
  {
    "href": "/guide/best-chair-mat-for-carpet",
    "title": "Best Chair Mat for Carpet (2026)"
  },
  {
    "href": "/guide/best-chair-mats-for-carpet",
    "title": "Best Chair Mats for Carpet, Commercial-Grade Picks (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-100",
    "title": "Best Office Chairs Under $100 (2026)"
  }
];
