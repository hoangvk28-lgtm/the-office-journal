// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-chair-mats-for-carpet";

export const guideTitle = "The Best Chair Mats for Carpet, Including Medium and Extra-High Pile";

export const breadcrumbLabel = "Best Chair Mats for Carpet";

export const metaTitle = "Best Chair Mats for Carpet: Low, Medium and High Pile (2026)";

export const metaDescription = "Most carpet chair mats only cover low pile. We compared eight vinyl, polycarbonate, glass and woven mats, including options rated for medium and extra-high pile.";

export const mainKeyword = "chair mats for carpet";

export const introParagraphs = [
  "Most chair mats sold for carpet are rated only for low pile, under about 1/4 inch. That leaves few options if your carpet is thicker or sits on heavy padding, where a thin flexible mat is more likely to sink and crack.",
  "This guide covers the range: low-pile vinyl, a polycarbonate mat for medium pile, two commercial-grade ES Robbins mats (one rated for extra-high pile over 1 inch), two tempered glass mats and a woven rug-style mat. Rigid glass and composite mats sit on top of the pile rather than relying on a pile rating, though their listings don't give one.",
  "Our comparison is based on published specifications, pile ratings, certifications and warranties, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "hon-office-chair-mat-low-pile-lip",
    "rank": 1,
    "badge": "Best for Low Pile",
    "name": "HON Office Chair Mat for Low Pile Carpet with Lip",
    "price": "$44.99",
    "rating": "4.0",
    "reviews": "54,421",
    "imageUrl": "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    "description": "The HON mat is the sensible choice for standard low-pile carpet: its anchor bars grip pile up to 1/4 inch, its ramped edges and extended lip let the chair roll on smoothly, and it has a five-year warranty.\n\nIt is 2.2mm PU vinyl, 36 x 48 inches, with an anti-skid top, and it has an extensive base of buyer feedback.\n\nIt is rated for low pile only, and the ES Robbins mats offer lifetime warranties at higher prices.",
    "specs": [
      "Size: 36 x 48\" + lip",
      "Material: PU vinyl, 2.2mm",
      "Grip: anchor bars",
      "Pile rating: low, up to 1/4\"",
      "Warranty: 5 years"
    ],
    "pros": [
      "Low price for a five-year warranty",
      "Ramped edges and lip",
      "Extensive buyer feedback"
    ],
    "cons": [
      "Low pile only",
      "Thinner than the ES Robbins mats",
      "Ships rolled"
    ],
    "bestFor": "Low-pile office or home carpet.",
    "summary": "A 2.2mm PU vinyl mat with anchor bars, ramped edges, a lip and a five-year warranty.",
    "skipIf": "Your carpet is thicker than 1/4 inch; the GORILLA GRIP or ES Robbins mats are rated higher."
  },
  {
    "id": "muarts-crystal-clear-heavy-duty",
    "rank": 2,
    "badge": "Best Rigid Mat for Heavy Loads",
    "name": "MuArts Crystal Clear Heavy Duty Chair Mat 5mm",
    "price": "$59.99",
    "rating": "4.4",
    "reviews": "19,765",
    "imageUrl": "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    "description": "The MuArts is the rigid option for heavy chairs: its 5mm sheet is rated for 1,400 lb, the highest here, and stays flat instead of flexing into the pile.\n\nIt measures 54 x 32 inches, works on carpet or hard floor and has a 12-month warranty.\n\nThe listing doesn't give a pile rating, so check it suits your carpet. It has no lip, is only 32 inches deep and is heavier to move than vinyl.",
    "specs": [
      "Size: 54 x 32\"",
      "Material: rigid sheet, 5mm",
      "Capacity: 1,400 lb",
      "Floors: carpet or hard floor",
      "Warranty: 12 months"
    ],
    "pros": [
      "Highest load rating here",
      "Rigid, doesn't flex into pile",
      "Dual-use"
    ],
    "cons": [
      "No pile rating listed",
      "Shallow 32-inch depth",
      "Short warranty"
    ],
    "bestFor": "Heavy chairs, or a setup that may move to a hard floor.",
    "summary": "A rigid 5mm, 54 x 32-inch mat rated for 1,400 lb, for carpet or hard floor.",
    "skipIf": "You want a stated pile rating; the ES Robbins mats list theirs."
  },
  {
    "id": "gorilla-grip-slip-resistant-polycarbonate",
    "rank": 3,
    "badge": "Best for Medium Pile Under $100",
    "name": "GORILLA GRIP Slip Resistant Polycarbonate Chair Mat",
    "price": "$61.49",
    "rating": "4.2",
    "reviews": "1,956",
    "imageUrl": "https://m.media-amazon.com/images/I/51TD21JdBYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNPBMMKN?tag=theofficejournal-20",
    "description": "The GORILLA GRIP is the lower-cost route to medium pile: it is rated for medium or low pile up to 3/4 inch, and ships flat rather than rolled.\n\nIt is 0.087-inch polycarbonate, 36 x 48 inches, with hundreds of spikes on the underside.\n\nIt has no lip and isn't rated for high or extra-high pile.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: polycarbonate, 0.087\"",
      "Grip: underside spikes",
      "Pile rating: up to 3/4\"",
      "Ships flat"
    ],
    "pros": [
      "Medium-pile rating at a moderate price",
      "Ships flat",
      "Spiked underside"
    ],
    "cons": [
      "No lip",
      "Not for high pile",
      "Warranty not stated in the listing summary"
    ],
    "bestFor": "Medium-pile carpet at a standard desk.",
    "summary": "A flat-shipped polycarbonate mat with spikes, rated for pile up to 3/4 inch.",
    "skipIf": "You need a large area or lifetime warranty; the ES Robbins EverLife covers both."
  },
  {
    "id": "es-robbins-everlife-medium-pile",
    "rank": 4,
    "badge": "Best Large Commercial Mat",
    "name": "ES Robbins EverLife Chair Mat Medium Pile",
    "price": "$161.98",
    "rating": "3.8",
    "reviews": "1,234",
    "imageUrl": "https://m.media-amazon.com/images/I/514JrwWuWeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00620W1U4?tag=theofficejournal-20",
    "description": "The ES Robbins EverLife covers the largest area here by far: 60 x 72 inches, enough for an L-shaped desk or a lot of rolling. It is rated for medium pile up to 3/4 inch.\n\nIt is 0.13-inch vinyl with rounded AnchorBar cleats rather than sharp spikes, made in the USA, GREENGUARD certified and covered by a lifetime 'No Crack' warranty.\n\nIt was the most expensive mat here with a listed price at the time of writing, and buyer feedback is less positive than for most mats here, which is worth reading before you buy.",
    "specs": [
      "Size: 60 x 72\"",
      "Material: vinyl, 0.13\"",
      "Grip: AnchorBar cleats",
      "Pile rating: medium, up to 3/4\"",
      "GREENGUARD certified; Made in USA",
      "Warranty: lifetime 'No Crack'"
    ],
    "pros": [
      "Largest mat here",
      "Lifetime warranty",
      "GREENGUARD certified"
    ],
    "cons": [
      "Most expensive listed price here",
      "Less positive buyer feedback",
      "Needs a large space"
    ],
    "bestFor": "Large or L-shaped desks on medium-pile carpet.",
    "summary": "A 60 x 72-inch vinyl mat for medium pile, GREENGUARD certified, with a lifetime 'No Crack' warranty.",
    "skipIf": "You only need a standard 36 x 48-inch area; the GORILLA GRIP covers medium pile for less."
  },
  {
    "id": "es-robbins-extra-high-pile-lip",
    "rank": 5,
    "badge": "Best for Extra-High Pile",
    "name": "ES Robbins Extra High Pile Chair Mat with Lip",
    "price": "$88.42",
    "rating": "3.7",
    "reviews": "922",
    "imageUrl": "https://m.media-amazon.com/images/I/61Tqz6OiuCL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B009LEIQXY?tag=theofficejournal-20",
    "description": "The ES Robbins Extra High Pile mat is the one to choose for thick or heavily padded carpet: it is the only mat here rated for pile over 1 inch, including padding.\n\nIt is 0.2-inch vinyl, 36 x 48 inches with a lip, with AnchorBar cleats. It is GREENGUARD Gold certified, listed as phthalate- and cadmium-free, made in the USA and covered by a lifetime warranty.\n\nBuyer feedback is the least positive here, so read recent reviews, and at 36 x 48 inches it covers a standard area only.",
    "specs": [
      "Size: 36 x 48\" + lip",
      "Material: vinyl, 0.2\"",
      "Pile rating: extra-high, over 1\" incl. padding",
      "Grip: AnchorBar cleats",
      "GREENGUARD Gold; Made in USA",
      "Warranty: lifetime"
    ],
    "pros": [
      "Only extra-high-pile rating here",
      "Lifetime warranty",
      "GREENGUARD Gold certified"
    ],
    "cons": [
      "Least positive buyer feedback here",
      "Standard 36 x 48-inch size",
      "Costs more than low-pile mats"
    ],
    "bestFor": "Plush or thickly padded carpet.",
    "summary": "The only mat here rated for extra-high pile over 1 inch including padding, with a lifetime warranty.",
    "skipIf": "Your carpet is low pile; the HON costs about half as much."
  },
  {
    "id": "lorell-tempered-glass-chairmat",
    "rank": 6,
    "badge": "Best Glass Mat",
    "name": "Lorell Tempered Glass Chairmat",
    "price": "Check current price",
    "rating": "4.8",
    "reviews": "10,717",
    "imageUrl": "https://m.media-amazon.com/images/I/21V7PYvl22L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07K95V7X2?tag=theofficejournal-20",
    "description": "The Lorell is the glass mat with the strongest buyer feedback here: 6mm tempered glass, 46 x 36 inches, rated for 1,000 lb and, according to Lorell, for any floor type including carpet.\n\nGlass sits rigidly on top of the pile rather than depending on cleats, is scratch-resistant and easy to clean, and has a five-year warranty.\n\nAvailability and price on this listing vary, so check the current price. Glass is heavy to move, and 36 inches of depth is modest.",
    "specs": [
      "Size: 46 x 36\"",
      "Material: tempered glass, 6mm",
      "Capacity: 1,000 lb",
      "Floors: any (per manufacturer)",
      "Warranty: 5 years"
    ],
    "pros": [
      "Strong buyer feedback",
      "Scratch-resistant glass",
      "Five-year warranty"
    ],
    "cons": [
      "Availability and price vary",
      "Heavy to move",
      "Modest 36-inch depth"
    ],
    "bestFor": "A long-term rigid mat on carpet of uncertain pile height.",
    "summary": "A 6mm tempered glass mat rated for 1,000 lb and any floor type, with a five-year warranty.",
    "skipIf": "The listing is unavailable or expensive when you shop; the GLSLAND is the alternative."
  },
  {
    "id": "glsland-tempered-glass-chair-mat",
    "rank": 7,
    "badge": "Best Value Glass Mat",
    "name": "GLSLAND Tempered Glass Chair Mat",
    "price": "$60.99",
    "rating": "4.6",
    "reviews": "2,486",
    "imageUrl": "https://m.media-amazon.com/images/I/51Dfg8DnF5S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08PD3ZHJT?tag=theofficejournal-20",
    "description": "The GLSLAND is the lower-cost glass option: 5mm tempered glass, 36 x 46 inches, rated for 1,200 lb, with four anti-slip pads and use on carpet or hard floor.\n\nIt is listed as BPA-free, phthalate-free and odorless.\n\nIts pads grip more lightly than cleats, and it's slightly smaller than the Lorell.",
    "specs": [
      "Size: 36 x 46\"",
      "Material: tempered glass, 5mm",
      "Capacity: 1,200 lb",
      "Pads: 4 anti-slip",
      "Floors: carpet or hard floor"
    ],
    "pros": [
      "Lower-cost glass",
      "1,200 lb rating",
      "Dual-use"
    ],
    "cons": [
      "Pads, not cleats",
      "Smaller than the Lorell",
      "Heavy to move"
    ],
    "bestFor": "A glass mat on a moderate budget.",
    "summary": "A 5mm tempered glass mat rated for 1,200 lb, with four anti-slip pads.",
    "skipIf": "You want a longer stated warranty; the Lorell lists five years."
  },
  {
    "id": "anji-mountain-rugd-jacquard",
    "rank": 8,
    "badge": "Best Rug-Style Mat",
    "name": "Anji Mountain Rug'd Jacquard Office Chair Mat",
    "price": "$92.99",
    "rating": "4.7",
    "reviews": "902",
    "imageUrl": "https://m.media-amazon.com/images/I/514z0haVzTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09RN8H3QD?tag=theofficejournal-20",
    "description": "The Anji Mountain Rug'd is the mat for a room where a plastic sheet would look out of place: it is jacquard-woven polyester over a PVC core, and looks like a rug.\n\nIt is 0.25 inches thick, 36 x 48 inches, with felt backing and rubberized non-slip dots, and it is water- and stain-resistant. Anji Mountain describes it as hand-crafted.\n\nIt is rated for low pile or hard surfaces only, and a woven surface may not roll as freely as smooth vinyl.",
    "specs": [
      "Size: 36 x 48\"",
      "Construction: jacquard polyester over PVC core, 0.25\"",
      "Backing: felt + rubberized dots",
      "Water- and stain-resistant",
      "Floors: low pile or hard surfaces"
    ],
    "pros": [
      "Rug-like appearance",
      "Water- and stain-resistant",
      "Works on low pile or hard floors"
    ],
    "cons": [
      "Low pile only",
      "Woven surface may roll less freely",
      "Costs more than basic vinyl"
    ],
    "bestFor": "Living rooms and bedrooms where the mat is on display.",
    "summary": "A jacquard-woven polyester mat over a PVC core that looks like a rug, for low pile or hard floors.",
    "skipIf": "Your carpet is medium pile or thicker; the GORILLA GRIP or ES Robbins mats are rated for it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pile rating",
    "description": "We grouped mats by stated pile rating and noted where none is given."
  },
  {
    "title": "Material and grip",
    "description": "We compared vinyl, polycarbonate, glass and woven construction and underside grip."
  },
  {
    "title": "Size and load",
    "description": "We compared dimensions and stated load ratings."
  },
  {
    "title": "Warranty, certification and price",
    "description": "We noted warranties and certifications and compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the pile rating",
    "explanation": "Low pile (up to about 1/4 inch): HON, Anji Mountain. Medium (up to 3/4 inch): GORILLA GRIP, ES Robbins EverLife. Extra-high (over 1 inch including padding): ES Robbins Extra High Pile."
  },
  {
    "criterion": "Consider rigid mats for uncertain pile",
    "explanation": "Glass and the MuArts rigid sheet sit on top of the carpet. Only the Lorell lists 'any floor type'; the others don't give a pile rating."
  },
  {
    "criterion": "Size for your desk",
    "explanation": "Most mats here are about 36 x 48 inches; the ES Robbins EverLife is 60 x 72 for large or L-shaped setups."
  },
  {
    "criterion": "Check warranty and certification",
    "explanation": "The ES Robbins mats carry lifetime warranties and GREENGUARD certification; HON and Lorell list five years."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By carpet",
    "table": {
      "headers": [
        "Carpet",
        "Consider"
      ],
      "rows": [
        [
          "Low pile",
          "HON (or Anji Mountain for a rug look)"
        ],
        [
          "Medium pile, standard area",
          "GORILLA GRIP"
        ],
        [
          "Medium pile, large area",
          "ES Robbins EverLife 60 x 72"
        ],
        [
          "Extra-high or padded",
          "ES Robbins Extra High Pile"
        ],
        [
          "Uncertain pile, want rigid",
          "Lorell or GLSLAND glass"
        ],
        [
          "Heavy chair",
          "MuArts"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is there a mat for extra-high pile carpet?",
    "a": "Yes. The ES Robbins Extra High Pile mat is rated for pile over 1 inch, including padding, the only one here."
  },
  {
    "q": "What's the difference between the two ES Robbins mats?",
    "a": "The EverLife is 60 x 72 inches and rated for medium pile up to 3/4 inch. The Extra High Pile mat is 36 x 48 inches and rated for pile over 1 inch."
  },
  {
    "q": "Do glass mats need a pile rating?",
    "a": "Glass stays rigid on top of the carpet, so it doesn't depend on cleats. Lorell lists its mat for any floor type; GLSLAND lists carpet or hard floor without a pile rating."
  },
  {
    "q": "How do I measure pile height?",
    "a": "Push a ruler into the carpet to the backing and read the height of the fibers. If the carpet feels spongy because of thick padding, treat it as higher pile."
  },
  {
    "q": "How long does a rolled mat take to lie flat?",
    "a": "Rolled mats need time to relax; about a day is a common guideline. The GORILLA GRIP and glass mats ship flat."
  }
];

export const bottomLine = [
  "For low pile, the HON is the straightforward choice with a five-year warranty; the Anji Mountain is the alternative if the mat needs to look like a rug. For medium pile, the GORILLA GRIP covers a standard area and the ES Robbins EverLife a large one.",
  "For extra-high or padded carpet, the ES Robbins Extra High Pile mat is the only rated option here. If you'd rather avoid pile ratings altogether, the Lorell and GLSLAND glass mats sit rigidly on top, with the MuArts as the heavy-load alternative."
];

export const relatedGuides = [
  {
    "href": "/guide/best-chair-mat-for-carpet",
    "title": "Best Chair Mat for Carpet (2026)"
  },
  {
    "href": "/guide/best-chair-mats",
    "title": "Best Chair Mats for Any Floor (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-100",
    "title": "Best Office Chairs Under $100 (2026)"
  }
];
