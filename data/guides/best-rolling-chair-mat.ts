// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-rolling-chair-mat";

export const guideTitle = "The Best Rolling Chair Mats for Your Floor Type";

export const breadcrumbLabel = "Best Rolling Chair Mats";

export const metaTitle = "Best Rolling Chair Mats for Hard Floors and Carpet (2026)";

export const metaDescription = "We compared rolling chair mats in PVC, polycarbonate and tempered glass on floor compatibility, surface, size and load rating, for hard floors, carpet or both.";

export const mainKeyword = "rolling chair mat";

export const introParagraphs = [
  "The right chair mat depends first on what's underneath it. Hard floors need a mat with a smooth or grippy backing that won't slide; carpet needs cleats or spikes that anchor into the pile. Some rigid mats, in glass or thick polycarbonate, are listed for both.",
  "After that, the choice is about material and size. Thin PVC is inexpensive; polycarbonate and tempered glass cost more, carry stated load ratings of 1,000 lb or more, and don't curl. Size matters if you move around the desk a lot.",
  "The eight mats below range from a hard-floor PVC mat at about $21 to glass and polycarbonate mats at about $136, at the time of writing. Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41R0aNdrj4L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "sharewin-rolling-chair-mat-hardwood",
    "rank": 1,
    "badge": "Best Low-Cost Mat for Hard Floors",
    "name": "SHAREWIN Rolling Chair Mat for Hardwood Floors",
    "price": "$21.37",
    "rating": "4.2",
    "reviews": "12,138",
    "imageUrl": "https://m.media-amazon.com/images/I/41R0aNdrj4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07CBRY92M?tag=theofficejournal-20",
    "description": "The SHAREWIN is the least expensive way to protect a hard floor: a 36 x 47-inch, 1.5mm PVC mat for hardwood, tile or laminate, at the lowest price here at the time of writing.\n\nIts top has an anti-slip frosted texture, the underside is smooth to keep it from shifting, and SHAREWIN lists it as BPA-free.\n\nIt is the thinnest mat here, has no stated weight rating, and is not for carpet.",
    "specs": [
      "Size: 36 x 47\"",
      "Material: PVC, 1.5mm",
      "Top: frosted, anti-slip",
      "Floors: hardwood, tile, laminate",
      "BPA-free (per manufacturer)"
    ],
    "pros": [
      "Lowest price here at the time of writing",
      "Frosted top",
      "Smooth underside for hard floors"
    ],
    "cons": [
      "Thinnest mat here",
      "Hard floors only",
      "No stated weight rating"
    ],
    "bestFor": "Protecting a hard floor for as little as possible.",
    "summary": "A 36 x 47-inch, 1.5mm PVC mat with a frosted top, for hardwood, tile or laminate.",
    "skipIf": "You want a smoother surface; the Kuyal's smooth top is designed for low rolling drag."
  },
  {
    "id": "hon-ofm-rolling-chair-mat-low-pile",
    "rank": 2,
    "badge": "Best for Low-Pile Carpet",
    "name": "HON/OFM Essentials Rolling Chair Mat for Low Pile Carpet",
    "price": "$44.99",
    "rating": "4.0",
    "reviews": "54,421",
    "imageUrl": "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    "description": "The HON/OFM Essentials is the pick for low-pile carpet: its anchor bars grip carpet up to 1/4 inch, and its five-year warranty is the longest stated here.\n\nIt is 2.2mm PU vinyl, 36 x 48 inches plus an extended lip, with ramped edges that let the chair roll on and off without a bump and an anti-skid top.\n\nIt is not for hard floors or carpet thicker than 1/4 inch, and a textured, cleated carpet mat rolls with more resistance than a smooth hard-floor mat.",
    "specs": [
      "Size: 36 x 48\" + lip",
      "Material: PU vinyl, 2.2mm",
      "Grip: anchor bars",
      "Pile rating: up to 1/4\"",
      "Warranty: 5 years"
    ],
    "pros": [
      "Five-year warranty",
      "Ramped edges",
      "Lip for the desk well"
    ],
    "cons": [
      "Low pile only",
      "Not for hard floors",
      "More rolling resistance than smooth mats"
    ],
    "bestFor": "Low-pile office or bedroom carpet.",
    "summary": "A PU vinyl carpet mat with anchor bars, ramped edges and a five-year warranty.",
    "skipIf": "Your carpet is thicker than 1/4 inch; the GORILLA GRIP is rated up to 3/4 inch."
  },
  {
    "id": "kuyal-clear-rolling-chair-mat-hard-floor",
    "rank": 3,
    "badge": "Smoothest PVC for Hard Floors",
    "name": "Kuyal Clear Rolling Chair Mat for Hard Floors",
    "price": "$32.95",
    "rating": "4.2",
    "reviews": "10,646",
    "imageUrl": "https://m.media-amazon.com/images/I/51-SqFH4ZoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0893BD69B?tag=theofficejournal-20",
    "description": "The Kuyal is designed for easy rolling on hard floors: Kuyal says its smooth top lets both hard plastic and soft polyurethane casters roll with minimal drag.\n\nIt is 2mm PVC, 36 x 48 inches, with an anti-slide coating underneath and a dull polish finish that avoids glare. Kuyal lists it as odorless, BPA-free and free of lead and cadmium.\n\nIt costs a little more than the SHAREWIN, has no stated weight rating and isn't for carpet.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: PVC, 2mm",
      "Top: smooth, dull polish",
      "Underside: anti-slide coating",
      "Floors: hard floors only"
    ],
    "pros": [
      "Smooth rolling surface",
      "Low-glare finish",
      "Anti-slide underside"
    ],
    "cons": [
      "Hard floors only",
      "No stated weight rating",
      "Thin PVC"
    ],
    "bestFor": "Hard floors where easy rolling matters more than the lowest price.",
    "summary": "A 2mm PVC hard-floor mat with a smooth top, anti-slide underside and low-glare finish.",
    "skipIf": "You want a rigid mat that won't dent or curl; the GLSLAND glass mat is the step up."
  },
  {
    "id": "gorilla-grip-rolling-chair-mat-carpet",
    "rank": 4,
    "badge": "Best for Medium-Pile Carpet",
    "name": "GORILLA GRIP Slip Resistant Rolling Chair Mat for Carpet",
    "price": "$61.49",
    "rating": "4.2",
    "reviews": "1,956",
    "imageUrl": "https://m.media-amazon.com/images/I/51TD21JdBYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNPBMMKN?tag=theofficejournal-20",
    "description": "The GORILLA GRIP covers thicker carpet: hundreds of underside spikes grip medium or low pile up to 3/4 inch, a wider range than the HON/OFM.\n\nIt is 0.087-inch polycarbonate, 36 x 48 inches, ships flat rather than rolled and cleans with water.\n\nIts spikes make it a carpet-only mat, and it has no lip.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: polycarbonate, 0.087\"",
      "Grip: underside spikes",
      "Pile rating: up to 3/4\"",
      "Ships flat"
    ],
    "pros": [
      "Rated for thicker carpet",
      "Ships flat",
      "Easy to clean"
    ],
    "cons": [
      "Carpet only",
      "No lip",
      "Costs more than PVC carpet mats"
    ],
    "bestFor": "Medium-pile carpet that low-pile mats aren't rated for.",
    "summary": "A flat-shipped polycarbonate carpet mat rated for pile up to 3/4 inch.",
    "skipIf": "Your carpet is low pile and you want a lip; the HON/OFM is cheaper."
  },
  {
    "id": "muarts-crystal-clear-rolling-chair-mat-dual",
    "rank": 5,
    "badge": "Best Dual-Use Mat",
    "name": "MuArts Crystal Clear 5mm Rolling Chair Mat Dual-Use",
    "price": "$59.99",
    "rating": "4.4",
    "reviews": "19,765",
    "imageUrl": "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    "description": "The MuArts suits mixed floors: its rigid 5mm sheet is listed for both carpet and hard floors and is rated for 1,400 lb.\n\nAt 54 x 32 inches, it is wider but shallower than most mats here, which gives more side-to-side room but less depth.\n\nThe listing doesn't give a carpet pile rating, so check it suits your carpet, and rigid mats are less forgiving to move than flexible vinyl.",
    "specs": [
      "Size: 54 x 32\"",
      "Material: rigid sheet, 5mm",
      "Capacity: 1,400 lb",
      "Floors: carpet or hard floor"
    ],
    "pros": [
      "Works on carpet or hard floors",
      "1,400 lb rating",
      "Wide 54-inch footprint"
    ],
    "cons": [
      "Only 32 inches deep",
      "No pile rating listed",
      "Rigid and less easy to reposition"
    ],
    "bestFor": "Moving a desk between rooms with different floors.",
    "summary": "A rigid 5mm, 54 x 32-inch mat rated for 1,400 lb, for carpet or hard floors.",
    "skipIf": "You need depth behind the desk; the Koonmi glass mat is 46 x 55 inches."
  },
  {
    "id": "mesailup-polycarbonate-rolling-chair-mat-beveled",
    "rank": 6,
    "badge": "Highest Load Rating",
    "name": "MESAILUP Polycarbonate Rolling Chair Mat Beveled Edge",
    "price": "$135.99",
    "rating": "4.3",
    "reviews": "325",
    "imageUrl": "https://m.media-amazon.com/images/I/51UmZw+6dgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CY1SMF17?tag=theofficejournal-20",
    "description": "The MESAILUP has the highest load rating here, 1,500 lb, from a 0.12-inch polycarbonate and ceramic composite. Its beveled edge lets casters roll on and off rather than catching.\n\nMESAILUP lists 92 to 95% transparency, six anti-slip pads and use on carpet or hard floors, in a 36 x 48-inch size.\n\nIt was the most expensive mat here at the time of writing, at about the same price as the much larger Koonmi glass mat, and it has less buyer feedback than the top sellers.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: polycarbonate + ceramic composite, 0.12\"",
      "Capacity: 1,500 lb",
      "Edge: beveled",
      "Pads: 6 anti-slip",
      "Floors: carpet or hard floor"
    ],
    "pros": [
      "Highest load rating here",
      "Beveled edge",
      "Dual-use"
    ],
    "cons": [
      "Most expensive here at the time of writing",
      "Smaller than the similarly priced Koonmi",
      "Less buyer feedback"
    ],
    "bestFor": "Heavy chairs, where a beveled edge and the highest rating matter.",
    "summary": "A polycarbonate-ceramic composite mat rated for 1,500 lb, with a beveled edge.",
    "skipIf": "You want more floor coverage for the money; the Koonmi is about the same price and much larger."
  },
  {
    "id": "glsland-tempered-glass-rolling-chair-mat",
    "rank": 7,
    "badge": "Best Value Glass Mat",
    "name": "GLSLAND Tempered Glass Rolling Chair Mat",
    "price": "$60.99",
    "rating": "4.6",
    "reviews": "2,486",
    "imageUrl": "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    "description": "The GLSLAND is the least expensive glass mat here at the time of writing, at under half the Koonmi's price. Tempered glass has no texture or spikes to catch a caster, so it should roll smoothly.\n\nIt is 0.2 inches thick, 36 x 46 inches, rated for 1,200 lb, with four anti-slip pads, polished rounded corners and use on carpet or hard floors.\n\nGlass is heavy to move, and at 36 x 46 inches it is one of the smaller mats here.",
    "specs": [
      "Size: 36 x 46\"",
      "Material: tempered glass, 0.2\"",
      "Capacity: 1,200 lb",
      "Pads: 4 anti-slip",
      "Corners: polished, rounded",
      "Floors: carpet or hard floor"
    ],
    "pros": [
      "Lowest-priced glass mat here",
      "1,200 lb rating",
      "Smooth glass surface"
    ],
    "cons": [
      "Heavy to reposition",
      "Smaller footprint",
      "Glass can break if something heavy is dropped on it"
    ],
    "bestFor": "A smooth, rigid mat for hard floors or carpet at a mid-range price.",
    "summary": "A 36 x 46-inch tempered glass mat rated for 1,200 lb, with rounded corners.",
    "skipIf": "You roll around a large area; the Koonmi covers 46 x 55 inches."
  },
  {
    "id": "koonmi-tempered-glass-rolling-chair-mat",
    "rank": 8,
    "badge": "Largest Glass Mat",
    "name": "Koonmi Tempered Glass Rolling Chair Mat",
    "price": "$135.89",
    "rating": "4.7",
    "reviews": "1,085",
    "imageUrl": "https://m.media-amazon.com/images/I/41UO1C7z6QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXSFBQLH?tag=theofficejournal-20",
    "description": "The Koonmi is the pick for a large working area: at 46 x 55 inches, it is the largest glass mat here, useful if you roll between a desk and a return or shift position often.\n\nIt is 0.2-inch tempered glass rated for over 1,000 lb, with polished rounded corners, a detachable anti-slip pad and use on carpet or hard floors.\n\nIt is also the heaviest to move and needs a lot of floor space, and it costs more than twice as much as the GLSLAND at the time of writing.",
    "specs": [
      "Size: 46 x 55\"",
      "Material: tempered glass, 0.2\"",
      "Capacity: over 1,000 lb",
      "Pad: detachable anti-slip",
      "Floors: carpet or hard floor"
    ],
    "pros": [
      "Largest mat here",
      "Glass surface",
      "Dual-use"
    ],
    "cons": [
      "Heavy to move",
      "Needs a lot of floor space",
      "Among the most expensive here"
    ],
    "bestFor": "Large desk areas where you roll across a wide space.",
    "summary": "A 46 x 55-inch tempered glass mat rated over 1,000 lb, the largest here.",
    "skipIf": "Your space is compact; the GLSLAND is smaller and far cheaper."
  }
];

export const howWeEvaluated = [
  {
    "title": "Floor compatibility",
    "description": "We compared hard-floor, carpet and dual-use designations, and pile ratings for carpet mats."
  },
  {
    "title": "Material and surface",
    "description": "We noted material, thickness, surface texture and edges as listed."
  },
  {
    "title": "Size and load",
    "description": "We compared dimensions and stated load ratings."
  },
  {
    "title": "Price and warranty",
    "description": "We compared prices at the time of writing and stated warranties."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the mat to your floor",
    "explanation": "Hard-floor mats have smooth or coated backs; carpet mats use cleats, anchor bars or spikes, and a pile rating. Rigid glass or composite mats are listed for both."
  },
  {
    "criterion": "Choose a material",
    "explanation": "PVC is inexpensive and flexible. Polycarbonate is stiffer and can ship flat. Tempered glass is rigid, smooth and heavy."
  },
  {
    "criterion": "Size it to how you move",
    "explanation": "Measure the area your chair covers. Mats here range from 36 x 46 inches to 46 x 55 inches; the MuArts is wide but only 32 inches deep."
  },
  {
    "criterion": "Check load rating where it matters",
    "explanation": "PVC mats here don't state capacity; the glass and composite mats list 1,000 to 1,500 lb."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By floor and priority",
    "table": {
      "headers": [
        "Situation",
        "Consider"
      ],
      "rows": [
        [
          "Hard floor, lowest price",
          "SHAREWIN"
        ],
        [
          "Hard floor, smoother PVC",
          "Kuyal"
        ],
        [
          "Low-pile carpet",
          "HON/OFM Essentials"
        ],
        [
          "Medium-pile carpet",
          "GORILLA GRIP"
        ],
        [
          "Mixed floors",
          "MuArts or GLSLAND"
        ],
        [
          "Highest load rating",
          "MESAILUP"
        ],
        [
          "Large area",
          "Koonmi"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why does my chair roll poorly on a mat?",
    "a": "Cleated carpet mats and textured tops add some resistance compared with smooth surfaces. Caster type and condition also matter; if the mat suits your floor and rolling is still poor, check the casters."
  },
  {
    "q": "Smooth or textured?",
    "a": "On hard floors, smooth mats like the Kuyal or glass roll easily; a frosted top like the SHAREWIN's adds grip. On carpet, the underside grip matters more than the top."
  },
  {
    "q": "Can I use a carpet mat on a hard floor?",
    "a": "Not a spiked or cleated one like the GORILLA GRIP or HON/OFM; the spikes have nothing to grip and may mark the floor. Use a hard-floor or dual-use mat instead."
  },
  {
    "q": "What size do I need?",
    "a": "Measure the area your chair covers as you work, including any movement to a return or side table, and choose a mat that covers it with some margin."
  },
  {
    "q": "Is thicker always better?",
    "a": "No. Rigid mats help on carpet and carry higher load ratings, but on hard floors a thinner mat is easier to move and cheaper."
  }
];

export const bottomLine = [
  "On a hard floor, the SHAREWIN and Kuyal are inexpensive PVC options, and the GLSLAND is the step up to rigid glass. On carpet, choose the HON/OFM for low pile or the GORILLA GRIP for pile up to 3/4 inch.",
  "For mixed floors, the MuArts and glass mats are listed for both. The MESAILUP has the highest load rating, while the Koonmi covers the most floor for a similar price."
];

export const relatedGuides = [
  {
    "href": "/guide/best-chair-mat-high-pile-carpet",
    "title": "Best Chair Mats for High Pile Carpet (2026)"
  },
  {
    "href": "/guide/best-chair-mats-for-office",
    "title": "Best Chair Mats for Office Use (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-300",
    "title": "Best Office Chairs Under $300 (2026)"
  }
];
