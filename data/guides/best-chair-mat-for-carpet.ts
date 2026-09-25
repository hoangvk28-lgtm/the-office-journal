// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-chair-mat-for-carpet";

export const guideTitle = "The Best Chair Mats for Carpet, Matched to Pile Height";

export const breadcrumbLabel = "Best Chair Mats for Carpet";

export const metaTitle = "Best Chair Mats for Carpet by Pile Height (2026)";

export const metaDescription = "A carpet chair mat has to grip the pile and match its height. We compared eight on pile rating, underside grip, material, thickness, lip design and warranty.";

export const mainKeyword = "chair mat for carpet";

export const introParagraphs = [
  "A chair mat for carpet is only as good as its match to your carpet. Each mat is rated for a pile height, and a mat rated for flat or low pile may not suit thicker carpet. The underside matters too: cleats, spikes or studs anchor the mat into the fibers so it doesn't creep as the chair rolls.",
  "Most mats here are rated for low pile up to 1/4 inch; one is rated only for flat pile up to 1/8 inch, and one polycarbonate mat for up to 3/4 inch. Check your carpet before comparing anything else.",
  "Beyond that, the choice comes down to material (PVC, polycarbonate or a rigid sheet), whether you want a lip that extends under the desk, and warranty length. Our comparison is based on published specifications, pile ratings and warranties, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "hon-ofm-essentials-chair-mat-low-pile",
    "rank": 1,
    "badge": "Best Warranty on Low Pile",
    "name": "HON/OFM Essentials Chair Mat for Low Pile Carpet",
    "price": "$44.99",
    "rating": "4.0",
    "reviews": "54,421",
    "imageUrl": "https://m.media-amazon.com/images/I/310m+F+gY5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01N99XMM2?tag=theofficejournal-20",
    "description": "The HON/OFM Essentials mat is the safe choice for low-pile carpet, and its five-year warranty is the longest stated among the mats with a fixed-term warranty here.\n\nIt is 2.2mm PU vinyl, 36 x 48 inches, with an extended lip and ramped edges so casters roll on and off rather than catching. Molded cleats and anchor bars grip carpet up to 1/4 inch, and the top has an anti-skid texture.\n\nIt is rated for low pile only, and it ships rolled, so allow time for it to lie flat.",
    "specs": [
      "Size: 36 x 48\" with lip",
      "Material: PU vinyl, 2.2mm",
      "Pile rating: low, up to 1/4\"",
      "Grip: molded cleats + anchor bars",
      "Warranty: 5 years"
    ],
    "pros": [
      "Five-year warranty",
      "Ramped edges",
      "Anchor bars for low pile"
    ],
    "cons": [
      "Low pile only",
      "Thinner than the 0.25-inch mats",
      "Ships rolled"
    ],
    "bestFor": "Standard low-pile office carpet, where a long warranty matters.",
    "summary": "A 36 x 48-inch PU vinyl mat with anchor bars, ramped edges and a five-year warranty.",
    "skipIf": "Your carpet is thicker than 1/4 inch; the GORILLA GRIP is rated up to 3/4 inch."
  },
  {
    "id": "dimex-office-chair-mat-low-pile-lip",
    "rank": 2,
    "badge": "Thickest PVC with a Lip",
    "name": "Dimex Office Chair Mat for Low Pile Carpet with Lip",
    "price": "$44.99",
    "rating": "4.1",
    "reviews": "19,120",
    "imageUrl": "https://m.media-amazon.com/images/I/312JmZc6DqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07BZCYM9X?tag=theofficejournal-20",
    "description": "The Dimex is the pick if you want thickness in a PVC mat: at 0.25 inches, it ties the Staples mat as the thickest vinyl here, and it is rated for pile up to 1/4 inch.\n\nIt measures 36 x 48 inches with a 20 x 10-inch front lip for the desk well, has cleated backing and rounded corners, and is made in the USA.\n\nThe thickness makes it heavier to reposition, and at the time of writing it cost the same as the HON/OFM, which has a longer stated warranty.",
    "specs": [
      "Size: 36 x 48\"",
      "Lip: 20 x 10\"",
      "Material: PVC, 0.25\"",
      "Pile rating: up to 1/4\"",
      "Made in USA; rounded corners"
    ],
    "pros": [
      "0.25-inch PVC",
      "Made in USA",
      "Rounded corners"
    ],
    "cons": [
      "Low pile only",
      "Heavier to move",
      "Warranty not stated in the listing summary"
    ],
    "bestFor": "Low-pile carpet where you want a thick, sturdy-feeling vinyl mat.",
    "summary": "A 0.25-inch-thick, Made in USA PVC mat with a desk lip and rounded corners.",
    "skipIf": "A long warranty matters more than thickness; the HON/OFM lists five years at the same price."
  },
  {
    "id": "muarts-crystal-clear-heavy-duty",
    "rank": 3,
    "badge": "Best Rigid Mat for Heavy Loads",
    "name": "MuArts Crystal Clear Heavy Duty Chair Mat",
    "price": "$59.99",
    "rating": "4.4",
    "reviews": "19,765",
    "imageUrl": "https://m.media-amazon.com/images/I/51umupvRX3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSKKMDSP?tag=theofficejournal-20",
    "description": "The MuArts is the choice for heavy chairs or loads: its rigid 5mm sheet is rated for 1,400 lb, the only mat here with a stated capacity, and it stays flat instead of flexing into the pile.\n\nIt measures 54 x 32 inches, wider but shallower than most here, and works on carpet or hard floor. It has a 12-month warranty.\n\nThe listing doesn't describe underside grip or a pile rating, so check that it suits your carpet. It has no lip, is harder to move or trim than flexible vinyl, and costs more than most mats here at the time of writing.",
    "specs": [
      "Size: 54 x 32\"",
      "Material: rigid sheet, 5mm (0.2\")",
      "Capacity: 1,400 lb",
      "Use: carpet or hard floor",
      "Warranty: 12 months"
    ],
    "pros": [
      "1,400 lb rating",
      "Rigid, doesn't sink into pile",
      "Works on carpet or hard floor"
    ],
    "cons": [
      "No pile rating or grip details listed",
      "No lip; 32-inch depth",
      "Harder to move or trim"
    ],
    "bestFor": "Heavy chairs, or a desk that moves between carpet and hard floor.",
    "summary": "A rigid 5mm sheet rated for 1,400 lb that works on carpet or hard floor.",
    "skipIf": "You want a lip for the desk well; the Dimex or HON/OFM includes one."
  },
  {
    "id": "beswin-office-chair-mat-low-pile",
    "rank": 4,
    "badge": "Best Lifetime Warranty for Less",
    "name": "BesWin Office Chair Mat for Low Pile Carpet",
    "price": "$29.99",
    "rating": "4.0",
    "reviews": "5,626",
    "imageUrl": "https://m.media-amazon.com/images/I/51aIF9KY80L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CC1ZLDL2?tag=theofficejournal-20",
    "description": "The BesWin stands out for its lifetime warranty at a low price: it cost about $30 at the time of writing.\n\nIt is 2.2mm PVC with 3mm spikes on the underside to grip carpet, pleated corners to help it lie flat, and BesWin lists it as BPA-free, phthalate-free and odorless.\n\nAt 30 inches wide, it is narrower than most mats here, and it has no lip. Like any rolled mat, give it time to flatten before judging it.",
    "specs": [
      "Size: 30 x 48\"",
      "Material: PVC, 2.2mm",
      "Grip: 3mm spikes",
      "BPA- and phthalate-free (per manufacturer)",
      "Warranty: lifetime"
    ],
    "pros": [
      "Lifetime warranty",
      "Low price at the time of writing",
      "Spiked underside"
    ],
    "cons": [
      "Narrower 30-inch width",
      "No lip",
      "Thin PVC"
    ],
    "bestFor": "A smaller desk area on low-pile carpet, on a budget.",
    "summary": "A 30 x 48-inch PVC mat with 3mm spikes, BPA- and phthalate-free, with a lifetime warranty.",
    "skipIf": "You want coverage into the desk well; the Evolve/Dimex has a lip for slightly less."
  },
  {
    "id": "evolve-dimex-clear-chair-mat-rounded",
    "rank": 5,
    "badge": "Lowest-Priced Mat with a Lip",
    "name": "Evolve/Dimex 36x48 Clear Chair Mat Rounded Corners",
    "price": "$28.41",
    "rating": "4.3",
    "reviews": "5,334",
    "imageUrl": "https://m.media-amazon.com/images/I/31IK+GtR-sL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07C1VP5Z1?tag=theofficejournal-20",
    "description": "The Evolve/Dimex is the least expensive mat here at the time of writing, and it still includes a tapered lip, 24.7 inches wide and 9.2 inches deep, for the space under the desk.\n\nIt is 0.11-inch PVC, 36 x 48 inches, rated for low pile up to 1/4 inch, with rounded corners, made in the USA and covered by a one-year warranty.\n\nThe warranty is short compared with the HON/OFM's five years or the BesWin's lifetime cover, and it is thinner than the 0.25-inch Dimex.",
    "specs": [
      "Size: 36 x 48\"",
      "Lip: 24.7 x 9.2\", tapered",
      "Material: PVC, 0.11\"",
      "Pile rating: low, up to 1/4\"",
      "Made in USA; 1-year warranty"
    ],
    "pros": [
      "Lowest price here at the time of writing",
      "Wide tapered lip",
      "Made in USA"
    ],
    "cons": [
      "One-year warranty",
      "Low pile only",
      "Thinner than the 0.25-inch PVC mats"
    ],
    "bestFor": "Covering a standard desk area on low-pile carpet for the least money.",
    "summary": "The lowest-priced mat here, with a tapered 24.7-inch lip, made in the USA.",
    "skipIf": "You want longer warranty cover; the BesWin offers a lifetime warranty for about $1.50 more."
  },
  {
    "id": "gorilla-grip-slip-resistant-polycarbonate",
    "rank": 6,
    "badge": "Best for Medium Pile",
    "name": "GORILLA GRIP Slip Resistant Chair Mat for Carpet",
    "price": "$61.49",
    "rating": "4.2",
    "reviews": "1,956",
    "imageUrl": "https://m.media-amazon.com/images/I/51TD21JdBYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BNPBMMKN?tag=theofficejournal-20",
    "description": "The GORILLA GRIP is the mat to choose for thicker carpet: it is rated for medium to low pile up to 3/4 inch, the widest pile range here.\n\nIt is 0.087-inch polycarbonate, 36 x 48 inches, with hundreds of spikes on the underside. It ships flat rather than rolled, so there is no waiting for it to relax.\n\nIt has no lip, is not rated for high pile, and was the most expensive mat here at the time of writing.",
    "specs": [
      "Size: 36 x 48\"",
      "Material: polycarbonate, 0.087\"",
      "Pile rating: medium to low, up to 3/4\"",
      "Grip: underside spikes",
      "Ships flat"
    ],
    "pros": [
      "Widest pile rating here",
      "Ships flat",
      "Polycarbonate construction"
    ],
    "cons": [
      "Most expensive here at the time of writing",
      "No lip",
      "Not rated for high pile"
    ],
    "bestFor": "Medium-pile carpet that low-pile mats aren't rated for.",
    "summary": "A polycarbonate mat rated for pile up to 3/4 inch that ships flat.",
    "skipIf": "Your carpet is low pile; the TONOS is polycarbonate with a lip for about half the price."
  },
  {
    "id": "staples-clear-chair-mat-lip",
    "rank": 7,
    "badge": "Best for Flat Carpet",
    "name": "Staples Clear Chair Mat with Lip",
    "price": "$34.99",
    "rating": "4.1",
    "reviews": "4,591",
    "imageUrl": "https://m.media-amazon.com/images/I/21yIdI78BnL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1R227SY?tag=theofficejournal-20",
    "description": "The Staples mat suits very flat carpet, such as commercial loop pile: it is rated for flat pile up to 1/8 inch, and it is the only GREENGUARD-certified mat here.\n\nIt is 0.25-inch clear vinyl, 36 x 48 inches with a 20-inch lip, and uses rounded AnchorBar cleats rather than sharp spikes, which are gentler if bare feet or pets are around.\n\nIts pile rating is the narrowest here, so it is not the pick for anything beyond very flat carpet.",
    "specs": [
      "Size: 36 x 48\"",
      "Lip: 20\"",
      "Material: clear vinyl, 0.25\"",
      "Pile rating: flat, up to 1/8\"",
      "Grip: rounded AnchorBar cleats",
      "GREENGUARD certified"
    ],
    "pros": [
      "GREENGUARD certification",
      "Rounded cleats",
      "0.25-inch vinyl"
    ],
    "cons": [
      "Narrowest pile rating here",
      "Unsuitable for low pile above 1/8 inch",
      "Less buyer feedback than the top picks"
    ],
    "bestFor": "Flat commercial carpet, or a bedroom office where certification matters to you.",
    "summary": "A GREENGUARD-certified 0.25-inch vinyl mat with rounded cleats, for flat pile up to 1/8 inch.",
    "skipIf": "Your carpet is thicker than 1/8 inch; the HON/OFM or Dimex is rated to 1/4 inch."
  },
  {
    "id": "tonos-chair-mat-low-pile-lip",
    "rank": 8,
    "badge": "Best Polycarbonate for Less",
    "name": "TONOS Chair Mat for Low Pile Carpet with Lip",
    "price": "$29.95",
    "rating": "4.0",
    "reviews": "1,397",
    "imageUrl": "https://m.media-amazon.com/images/I/51zlFzzlTaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C8M2JCHR?tag=theofficejournal-20",
    "description": "The TONOS offers polycarbonate for close to the price of PVC: it cost under $30 at the time of writing, about half the GORILLA GRIP.\n\nIt is 0.1-inch polycarbonate, 47.5 x 35.5 inches with an extended lip, with enhanced cleats and studs underneath and a semi-transparent surface that wipes clean.\n\nIt is rated for low pile only, and a semi-transparent top can show dust.",
    "specs": [
      "Size: 47.5 x 35.5\" with lip",
      "Material: polycarbonate, 0.1\"",
      "Pile rating: low",
      "Grip: cleats and studs"
    ],
    "pros": [
      "Polycarbonate at a low price",
      "Includes a lip",
      "Wide 47.5-inch footprint"
    ],
    "cons": [
      "Low pile only",
      "Shows dust",
      "Warranty not stated in the listing summary"
    ],
    "bestFor": "Low-pile carpet where you want polycarbonate rather than PVC.",
    "summary": "A 47.5 x 35.5-inch polycarbonate mat with a lip, cleats and studs, at a low price.",
    "skipIf": "Your carpet is medium pile; the GORILLA GRIP is rated up to 3/4 inch."
  }
];

export const howWeEvaluated = [
  {
    "title": "Pile rating",
    "description": "We compared each mat's stated pile-height rating."
  },
  {
    "title": "Grip and material",
    "description": "We noted underside grip design, material and thickness as listed."
  },
  {
    "title": "Size and lip",
    "description": "We compared dimensions and lip sizes for fit under a desk."
  },
  {
    "title": "Warranty and price",
    "description": "We recorded stated warranties and certifications, and compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match the pile rating",
    "explanation": "Check your carpet's pile height and choose a mat rated for it. Most here are rated to 1/4 inch; the Staples to 1/8 inch; the GORILLA GRIP to 3/4 inch."
  },
  {
    "criterion": "Check the underside",
    "explanation": "Cleats, spikes, anchor bars or studs grip carpet fibers so the mat stays put. Rounded cleats, like the Staples', are gentler underfoot."
  },
  {
    "criterion": "Choose the material",
    "explanation": "PVC is the least expensive; polycarbonate is typically stiffer and can ship flat; a rigid sheet like the MuArts resists flexing into the pile."
  },
  {
    "criterion": "Decide on a lip",
    "explanation": "A lip extends under the desk where your feet and chair move. Measure your desk opening; lips here range from 20 to 24.7 inches wide."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By carpet and priority",
    "table": {
      "headers": [
        "Situation",
        "Consider"
      ],
      "rows": [
        [
          "Flat pile up to 1/8\"",
          "Staples Clear Chair Mat"
        ],
        [
          "Low pile, long warranty",
          "HON/OFM Essentials or BesWin"
        ],
        [
          "Low pile, lowest price with lip",
          "Evolve/Dimex"
        ],
        [
          "Low pile, polycarbonate",
          "TONOS"
        ],
        [
          "Medium pile up to 3/4\"",
          "GORILLA GRIP"
        ],
        [
          "Heavy loads, carpet or hard floor",
          "MuArts rigid mat"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Why won't my new mat lie flat?",
    "a": "Mats that ship rolled need time to relax; the BesWin listing suggests about 24 hours. The GORILLA GRIP ships flat, which avoids the wait."
  },
  {
    "q": "How do I know my carpet's pile height?",
    "a": "Push a ruler into the carpet to the backing and measure to the top of the fibers. Compare that with the mat's pile rating, and if you're between ratings, choose the mat rated for the thicker pile."
  },
  {
    "q": "Do I need cleats or spikes on carpet?",
    "a": "Yes. A smooth-backed mat has nothing to grip carpet fibers and is likely to shift as the chair rolls. All the mats here list cleats, spikes, anchor bars or studs, except the MuArts, whose listing doesn't describe its underside."
  },
  {
    "q": "PVC or polycarbonate?",
    "a": "PVC is typically cheaper and more flexible. Polycarbonate is stiffer and, in the GORILLA GRIP's case, ships flat. The TONOS brings polycarbonate close to PVC prices at the time of writing."
  },
  {
    "q": "Which mat has the highest weight rating?",
    "a": "The MuArts is rated for 1,400 lb; the other listings don't state a capacity."
  }
];

export const bottomLine = [
  "Start with your carpet: for low pile up to 1/4 inch, the HON/OFM Essentials offers a five-year warranty and ramped edges, the BesWin a lifetime warranty for less, and the Evolve/Dimex the lowest price with a lip.",
  "For medium pile up to 3/4 inch, the GORILLA GRIP is the only mat rated for it here. For very flat carpet, the Staples adds GREENGUARD certification, and for heavy loads or mixed floors, the rigid MuArts is the alternative."
];

export const relatedGuides = [
  {
    "href": "/guide/best-chair-mats",
    "title": "Best Chair Mats for Any Floor (2026)"
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
