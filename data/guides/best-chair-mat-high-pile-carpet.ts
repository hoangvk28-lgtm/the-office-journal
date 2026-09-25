// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-chair-mat-high-pile-carpet";

export const guideTitle = "The Best Chair Mats for High-Pile and Extra-Thick Carpet";

export const breadcrumbLabel = "Best Chair Mats for High Pile Carpet";

export const metaTitle = "Best Chair Mats for High Pile Carpet: Pile Ratings Compared (2026)";

export const metaDescription = "We compared chair mats for thick carpet by pile rating, cleat design, rigidity, size and warranty, and explain which mats are rated for extra-high pile and which only reach 3/4 inch.";

export const mainKeyword = "chair mat for high pile carpet";

export const introParagraphs = [
  "On thick carpet, a standard chair mat sinks almost as soon as you sit down, and the casters end up pressing into the fibers rather than rolling. A mat for deep carpet needs either long cleats that reach through the pile to grip the backing, or enough rigidity to bridge the pile without flexing, and ideally a pile rating that matches your carpet.",
  "Pile ratings are the key number, and they vary more than product names suggest. Only two mats here, both from ES Robbins, are rated for extra-high pile over 1 inch including padding. Several others are rated up to 3/4 inch, and the glass and 5mm rigid mats rely on stiffness rather than a specific pile rating.",
  "Our comparison is based on published specifications, including pile rating, size, thickness, capacity and warranty, plus price position, not hands-on testing. Measure your carpet before choosing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/61Tqz6OiuCL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "es-robbins-extra-high-pile-lip",
    "rank": 1,
    "badge": "Best for Extra-High Pile",
    "name": "ES Robbins Extra High Pile Chair Mat with Lip",
    "price": "$88.42",
    "rating": "3.7",
    "reviews": "922",
    "imageUrl": "https://m.media-amazon.com/images/I/61Tqz6OiuCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B009LEIQXY?tag=theofficejournal-20",
    "description": "The ES Robbins Extra High Pile mat is the one to start with if your carpet is genuinely deep: it is rated for extra-high pile over 1 inch including padding, and its AnchorBar cleats are designed to reach through to the backing.\n\nIt is 0.2-inch vinyl in a standard 36 x 48-inch size with a lip, and adds a beveled edge. ES Robbins lists GREENGUARD Gold certification, US manufacturing and a lifetime warranty.\n\nThe standard size may feel tight at a large desk; the Everlife version is larger at a higher price.",
    "specs": [
      "Size: 36 x 48\" plus lip",
      "Material: vinyl, 0.2\"",
      "Rated for: extra-high pile over 1\" including padding",
      "AnchorBar cleats, beveled edge",
      "GREENGUARD Gold",
      "Warranty: lifetime"
    ],
    "pros": [
      "Rated for the deepest carpet",
      "Lifetime warranty",
      "GREENGUARD Gold"
    ],
    "cons": [
      "Standard size",
      "Vinyl rather than rigid polycarbonate"
    ],
    "bestFor": "Standard desks on extra-high pile or padded carpet.",
    "summary": "A 36 x 48-inch vinyl mat with a lip, rated for pile over 1 inch including padding, with a lifetime warranty.",
    "skipIf": "Your chair covers a wider area; the Everlife extra-high pile mat is 45 x 53 inches."
  },
  {
    "id": "es-robbins-everlife-extra-high-pile-large",
    "rank": 2,
    "badge": "Best Large Extra-High-Pile Mat",
    "name": "ES Robbins Everlife Extra High Pile Chair Mat",
    "price": "$113.48",
    "rating": "3.8",
    "reviews": "123",
    "imageUrl": "https://m.media-amazon.com/images/I/61oh0YQV+uL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004DRB4OC?tag=theofficejournal-20",
    "description": "The ES Robbins Everlife extra-high pile mat carries the same over-1-inch rating as the standard version in a larger 45 x 53-inch size with a 25 x 12-inch lip.\n\nOn deep pile, a larger mat gives the chair more room before a caster drops off the edge. ES Robbins describes it as built for multi-shift use and backs it with a lifetime \"No Crack\" warranty. It uses the same AnchorBar cleats and beveled edge.\n\nIt costs about $25 more than the standard size at the time of writing and has fewer buyer reviews.",
    "specs": [
      "Size: 45 x 53\" plus 25 x 12\" lip",
      "Material: vinyl, 0.2\"",
      "Rated for: extra-high pile over 1\"",
      "AnchorBar cleats, beveled edge",
      "Warranty: lifetime 'No Crack'"
    ],
    "pros": [
      "Largest extra-high-pile mat here",
      "Lifetime warranty",
      "More rolling room"
    ],
    "cons": [
      "Costs more than the standard size",
      "Fewer buyer reviews"
    ],
    "bestFor": "Larger desks on extra-high pile carpet.",
    "summary": "The same extra-high pile rating in a 45 x 53-inch size with a large lip.",
    "skipIf": "A 36 x 48-inch mat covers your chair's range; the standard ES Robbins costs less."
  },
  {
    "id": "es-robbins-everlife-medium-pile-large",
    "rank": 3,
    "badge": "Largest Mat for Medium Pile",
    "name": "ES Robbins EverLife Carpet ChairMat Medium Pile",
    "price": "$161.98",
    "rating": "3.8",
    "reviews": "1,234",
    "imageUrl": "https://m.media-amazon.com/images/I/514JrwWuWeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00620W1U4?tag=theofficejournal-20",
    "description": "The ES Robbins EverLife medium-pile mat is for large work areas rather than deep carpet: at 60 x 72 inches it is the biggest mat here, but it is rated for carpet only up to 3/4 inch.\n\nThat suits a shared desk, an L-shaped desk or a chair that moves between two work surfaces. It has AnchorBar cleats, GREENGUARD certification, US manufacturing and a lifetime \"No Crack\" warranty.\n\nIt is the most expensive mat here at the time of writing and needs a lot of floor. Measure your carpet: if it is deeper than 3/4 inch, choose one of the extra-high-pile mats.",
    "specs": [
      "Size: 60 x 72\"",
      "Material: vinyl, 0.13\"",
      "Rated for: carpet up to 3/4\"",
      "AnchorBar cleats",
      "GREENGUARD certified",
      "Warranty: lifetime 'No Crack'"
    ],
    "pros": [
      "Largest mat here",
      "Lifetime warranty",
      "GREENGUARD certified"
    ],
    "cons": [
      "Not rated for pile over 3/4\"",
      "Most expensive mat here",
      "Needs a large floor area"
    ],
    "bestFor": "Large or shared work areas on carpet up to 3/4 inch.",
    "summary": "A 60 x 72-inch vinyl mat for carpet up to 3/4 inch, for shared or large work areas.",
    "skipIf": "Your carpet is deeper than 3/4 inch; the ES Robbins extra-high-pile mats are rated for it."
  },
  {
    "id": "muarts-crystal-clear-high-pile",
    "rank": 4,
    "badge": "Best Budget Rigid Mat",
    "name": "MuArts Crystal Clear 5mm Heavy Duty Chair Mat",
    "price": "$59.99",
    "rating": "4.4",
    "reviews": "19,765",
    "imageUrl": "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    "description": "The MuArts is the lowest-cost option here: a 5mm rigid panel that relies on stiffness rather than cleats to avoid sinking, with a listed 1,400 lb capacity.\n\nIt works on carpet or hard floors, which helps if you move rooms. The listing does not give a pile rating, and without cleats it is better suited to medium or moderately thick carpet than to very deep pile.\n\nIts 54 x 32-inch shape is wide but shallow, so check how far your chair rolls back from the desk.",
    "specs": [
      "Size: 54 x 32\"",
      "Thickness: 5mm, rigid",
      "Capacity: 1,400 lb (listed)",
      "No cleats",
      "Use: carpet or hard floor"
    ],
    "pros": [
      "Lowest price here",
      "Highest listed capacity",
      "Works on hard floors too"
    ],
    "cons": [
      "No pile rating listed",
      "No cleats",
      "Shallow depth"
    ],
    "bestFor": "Medium or moderately thick carpet on a budget.",
    "summary": "A 5mm rigid clear mat rated for 1,400 lb that relies on stiffness rather than cleats.",
    "skipIf": "Your carpet is over 1 inch deep; the ES Robbins extra-high-pile mats are designed for it."
  },
  {
    "id": "gorilla-grip-polycarbonate-high-pile",
    "rank": 5,
    "badge": "Best Ships-Flat Mat for Carpet up to 3/4 Inch",
    "name": "GORILLA GRIP Polycarbonate Chair Mat for Carpet",
    "price": "$61.49",
    "rating": "4.2",
    "reviews": "1,956",
    "imageUrl": "https://m.media-amazon.com/images/I/51TD21JdBYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNPBMMKN?tag=theofficejournal-20",
    "description": "The Gorilla Grip polycarbonate mat suits carpet at the top of the medium range: a 36 x 48-inch mat with hundreds of underside spikes, rated for low and medium pile up to 3/4 inch.\n\nIt ships flat rather than rolled, so there is no waiting for it to settle, and the semi-transparent finish shows the carpet through.\n\nIt is not rated for pile deeper than 3/4 inch, and at 0.087 inches it is thinner than the Marvelux.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: polycarbonate, 0.087\"",
      "Rated for: carpet up to 3/4\"",
      "Spiked underside",
      "Ships flat"
    ],
    "pros": [
      "Ships flat",
      "Spiked grip",
      "Moderate price"
    ],
    "cons": [
      "Not rated beyond 3/4\"",
      "Thinner than the Marvelux"
    ],
    "bestFor": "Carpet up to 3/4 inch at a standard desk.",
    "summary": "A 36 x 48-inch spiked polycarbonate mat that ships flat, for carpet up to 3/4 inch.",
    "skipIf": "Your carpet is deeper than 3/4 inch; choose an extra-high-pile ES Robbins mat."
  },
  {
    "id": "marvelux-polycarbonate-heavy-duty-high-pile",
    "rank": 6,
    "badge": "Best Large Polycarbonate Mat",
    "name": "Marvelux Heavy-Duty Polycarbonate Chair Mat",
    "price": "$121.99",
    "rating": "4.0",
    "reviews": "201",
    "imageUrl": "https://m.media-amazon.com/images/I/51UDuDStG2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D96LWLZ7?tag=theofficejournal-20",
    "description": "The Marvelux is the larger, thicker polycarbonate option: 48 x 60 inches at 0.11 inches, with a studded underside and a lightly textured top, rated for carpet up to 3/4 inch.\n\nPolycarbonate's stiffness helps on thick carpet, and the larger size gives more room to roll. Marvelux states it is made using 50 percent renewable energy and is recyclable.\n\nLike the Gorilla Grip, it is not rated beyond 3/4 inch, and it has fewer buyer reviews than the vinyl mats.",
    "specs": [
      "Size: 48 x 60\"",
      "Material: polycarbonate, 0.11\"",
      "Rated for: carpet up to 3/4\"",
      "Studded underside",
      "Recyclable (manufacturer claim)"
    ],
    "pros": [
      "Large, rigid polycarbonate",
      "Studded grip"
    ],
    "cons": [
      "Not rated beyond 3/4\"",
      "Fewer buyer reviews"
    ],
    "bestFor": "Larger desk areas on carpet up to 3/4 inch.",
    "summary": "A 48 x 60-inch, 0.11-inch polycarbonate mat with studs, rated for carpet up to 3/4 inch.",
    "skipIf": "Your carpet is deeper than 3/4 inch; the ES Robbins extra-high-pile mats are rated for it."
  },
  {
    "id": "koonmi-tempered-glass-high-pile",
    "rank": 7,
    "badge": "Best Large Glass Mat",
    "name": "Koonmi Tempered Glass Chair Mat",
    "price": "$135.89",
    "rating": "4.7",
    "reviews": "1,085",
    "imageUrl": "https://m.media-amazon.com/images/I/41UO1C7z6QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXSFBQLH?tag=theofficejournal-20",
    "description": "The Koonmi is the glass option for a large area: 46 x 55 inches of 5mm tempered glass, rated for over 1,000 lb, with a detachable anti-slip pad and rounded corners.\n\nGlass is stiff enough to bridge carpet without flexing and works on hard floors too. On very deep or uneven pile, though, a heavy rigid panel may be harder to keep level than a cleated mat, and the listing gives no pile rating.\n\nIt is one of the more expensive mats here at the time of writing.",
    "specs": [
      "Size: 46 x 55\"",
      "Material: tempered glass, 5mm",
      "Capacity: 1,000+ lb (listed)",
      "Detachable anti-slip pad",
      "Use: carpet or hard floor"
    ],
    "pros": [
      "Largest glass mat here",
      "Works on either floor",
      "Scratch-resistant surface"
    ],
    "cons": [
      "No pile rating",
      "Heavy",
      "Among the pricier mats"
    ],
    "bestFor": "Large desk areas on medium carpet where a glass surface is preferred.",
    "summary": "A 46 x 55-inch tempered glass mat with a repositionable anti-slip pad.",
    "skipIf": "Your carpet is extra-high pile; a cleated ES Robbins mat is designed for it."
  },
  {
    "id": "glsland-tempered-glass-high-pile",
    "rank": 8,
    "badge": "Best Budget Glass Mat",
    "name": "GLSLAND Tempered Glass Chair Mat",
    "price": "$60.99",
    "rating": "4.6",
    "reviews": "2,486",
    "imageUrl": "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    "description": "The GLSLAND is the lower-cost glass mat: 36 x 46 inches of 5mm tempered glass rated for 1,200 lb, with four anti-slip pads.\n\nIt works on carpet or hard floors and is listed as BPA- and phthalate-free. It costs about the same as the MuArts at the time of writing.\n\nLike the Koonmi, it gives no pile rating and relies on stiffness, so it is better suited to medium carpet than to the deepest pile.",
    "specs": [
      "Size: 36 x 46\"",
      "Material: tempered glass, 5mm",
      "Capacity: 1,200 lb (listed)",
      "4 anti-slip pads",
      "Use: carpet or hard floor"
    ],
    "pros": [
      "Low price for glass",
      "Works on either floor"
    ],
    "cons": [
      "No pile rating",
      "Smaller than the Koonmi",
      "Heavy"
    ],
    "bestFor": "Budget buyers on medium carpet who want a glass surface.",
    "summary": "A 36 x 46-inch tempered glass mat rated for 1,200 lb.",
    "skipIf": "Your carpet is over 1 inch deep; choose an extra-high-pile ES Robbins mat."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pile rating",
    "description": "We recorded each mat's stated pile rating and flagged where none is given."
  },
  {
    "title": "Grip and rigidity",
    "description": "We compared cleat and stud designs against rigid and glass construction."
  },
  {
    "title": "Size and capacity",
    "description": "We compared dimensions and stated capacities."
  },
  {
    "title": "Warranty and price",
    "description": "We recorded warranties and compared what each step up in price adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Pile rating against your carpet",
    "explanation": "Measure the carpet to the backing, including any padding. Here, only the two ES Robbins extra-high-pile mats are rated beyond 1 inch; the Gorilla Grip, Marvelux and ES Robbins medium-pile mats top out at 3/4 inch; the glass and MuArts mats give no rating."
  },
  {
    "criterion": "Cleats or rigidity",
    "explanation": "Cleated vinyl grips through the pile; rigid polycarbonate, glass and 5mm panels resist flexing. On very deep carpet, a mat rated for that depth is the safer choice."
  },
  {
    "criterion": "Size",
    "explanation": "On thick carpet, rolling off the edge is harder to recover from, so a larger mat helps. Sizes here run from 36 x 46 inches to 60 x 72 inches."
  },
  {
    "criterion": "Warranty and certification",
    "explanation": "The ES Robbins mats list lifetime warranties and GREENGUARD certification; check other listings for warranty terms."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By carpet depth",
    "table": {
      "headers": [
        "Carpet",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Over 1\" including padding",
          "ES Robbins Extra High Pile (standard or Everlife large)",
          "Only mats rated for extra-high pile"
        ],
        [
          "Up to 3/4\", standard desk",
          "Gorilla Grip polycarbonate",
          "Ships flat, spiked underside"
        ],
        [
          "Up to 3/4\", larger area",
          "Marvelux or ES Robbins medium pile",
          "48 x 60 or 60 x 72 inches"
        ],
        [
          "Medium carpet, budget",
          "MuArts or GLSLAND",
          "Rigid panel or glass, about $60"
        ],
        [
          "Medium carpet, large glass",
          "Koonmi",
          "46 x 55 inches"
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
        "Mats"
      ],
      "rows": [
        [
          "About $60",
          "MuArts, GLSLAND, Gorilla Grip"
        ],
        [
          "About $88–$122",
          "ES Robbins Extra High Pile, ES Robbins Everlife large, Marvelux"
        ],
        [
          "About $136–$162",
          "Koonmi, ES Robbins medium pile 60 x 72"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "How do I know if my carpet counts as high pile?",
    "a": "Push a ruler into the carpet until it meets the backing and measure. Include any padding if the mat's rating does. Compare that figure directly with each mat's pile rating rather than relying on labels like \"thick\" or \"plush\"."
  },
  {
    "q": "Why did my regular mat stop working on thicker carpet?",
    "a": "A mat designed for low pile is thin, with short cleats. On deeper carpet it flexes and sinks, so the chair has nothing firm to roll on."
  },
  {
    "q": "Do I need a special mat for shag carpet?",
    "a": "Yes. Choose a mat explicitly rated for extra-high pile, such as the ES Robbins Extra High Pile mats here. Thickness alone does not guarantee a mat will work on very deep carpet."
  },
  {
    "q": "Is glass or polycarbonate better for thick carpet?",
    "a": "Both are rigid. The polycarbonate mats here state pile ratings up to 3/4 inch; the glass mats do not state a rating and are heavy, so they are better suited to medium carpet. For the deepest carpet, a mat rated for extra-high pile is the more predictable choice."
  },
  {
    "q": "Is office carpet different from home carpet?",
    "a": "Often. Commercial office carpet tends to be low pile, while home carpet can be much thicker, especially with padding. Measure rather than assuming a mat sold for offices will suit a home office."
  },
  {
    "q": "What size mat do I need on thick carpet?",
    "a": "Cover the whole area your chair moves through, with some margin. The ES Robbins Everlife extra-high-pile mat (45 x 53 inches) and medium-pile mat (60 x 72 inches) are the largest options here."
  }
];

export const bottomLine = [
  "If your carpet is over 1 inch deep including padding, the ES Robbins Extra High Pile mats are the only ones here rated for it; choose the standard size for a typical desk or the Everlife for more rolling room.",
  "For carpet up to 3/4 inch, the Gorilla Grip and Marvelux polycarbonate mats are rated for the job, and the 60 x 72-inch ES Robbins suits large or shared desks. The MuArts and glass mats are reasonable on medium carpet, but they do not state pile ratings, so we would not rely on them for the deepest pile."
];

export const relatedGuides = [
  {
    "href": "/guide/best-rolling-chair-mat",
    "title": "Best Rolling Chair Mats (2026)"
  },
  {
    "href": "/guide/best-chair-mats-for-office",
    "title": "Best Chair Mats for Office Use (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-500",
    "title": "Best Office Chairs Under $500 (2026)"
  }
];
