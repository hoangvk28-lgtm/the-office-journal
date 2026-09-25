// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-gaming-chair-400-lb";

export const guideTitle = "The Best 400 lb Gaming Chairs, Compared by Gas Lift, Seat and Recline";

export const breadcrumbLabel = "Best 400 lb Gaming Chairs";

export const metaTitle = "Best Gaming Chairs with a 400 lb Weight Capacity (2026)";

export const metaDescription = "Every chair here is rated for 400 lb, so we compared what backs that figure: gas lift class, base certification, seat width, cushioning, recline and warranty.";

export const mainKeyword = "gaming chair 400 lb weight capacity";

export const introParagraphs = [
  "All eight chairs in this guide list a 400 lb capacity, so the rating alone doesn't separate them. What does is the evidence behind it and the fit: whether the gas lift is a Class 3 or Class 4 unit, whether the base has BIFMA testing, how wide the seat is, and how the cushion is built.",
  "Class 4 gas lifts are generally rated for heavier loads than Class 3; several chairs here specify one, and two also list BIFMA-tested bases. Where a listing doesn't specify either, treat the 400 lb figure with a little more caution.",
  "Our comparison is based on published specifications and certifications, not hands-on testing. Prices ranged from about $80 to $230 at the time of writing."
];

export const lastUpdated = "2026-07-16";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/41lDR7qjYlL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "gtracing-big-tall-saddle-400",
    "rank": 1,
    "badge": "Most Established 400 lb Chair",
    "name": "GTRACING Big & Tall Gaming Chair (400 lbs, 3D Saddle, Matte-Black, Wingback)",
    "price": "$179.47",
    "rating": "4.5 stars",
    "reviews": "34,164 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41lDR7qjYlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXTWTCWS?tag=theofficejournal-20",
    "description": "The GTRACING Big & Tall is the most established chair here, with by far the largest and a very positive base of buyer feedback. That track record is its main advantage over newer listings with similar specifications.\n\nIt has a 3D saddle cushion designed to spread weight, a dual-spring lumbar, a two-sided wingback, height-adjustable armrests, a chrome metal frame, a footrest and a 90- to 150-degree recline.\n\nThe listing doesn't specify gas lift class or base certification, it costs more than several alternatives, and the frame is bulky.",
    "specs": [
      "Cushion: 3D saddle",
      "Lumbar: dual spring",
      "Recline: 90–150°",
      "Footrest: yes",
      "Frame: chrome metal",
      "Gas lift class: not stated"
    ],
    "pros": [
      "Extensive, positive buyer feedback",
      "Built-in spring lumbar",
      "Footrest"
    ],
    "cons": [
      "Gas lift class not stated",
      "Bulky",
      "Costs more than several alternatives"
    ],
    "bestFor": "Buyers who value a long track record over certifications.",
    "summary": "A wingback chair with 3D saddle cushion, dual-spring lumbar and footrest, with extensive buyer feedback.",
    "skipIf": "You want a stated Class 4 lift for less; the LEMBERI has one."
  },
  {
    "id": "lemberi-big-tall-pu-leather-400",
    "rank": 2,
    "badge": "Best Value with Class 4 Lift",
    "name": "LEMBERI Big & Tall Gaming Chair (400 lbs, PU Leather, Linkage Arms, Footrest)",
    "price": "$99.50",
    "rating": "4.4 stars",
    "reviews": "10,743 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41rkQ70Jb6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B3FJHHT?tag=theofficejournal-20",
    "description": "The LEMBERI pairs a Class 4 gas lift with a price under $100 at the time of writing, and it has a large base of buyer feedback.\n\nIt has a 52.9-inch back, a thick steel frame, massage lumbar, synchronized linkage armrests, a footrest, a 90- to 155-degree recline and casters LEMBERI rates for 1,000 miles.\n\nIt is PU leather, and the listing doesn't mention a BIFMA-tested base.",
    "specs": [
      "Gas lift: Class 4",
      "Backrest: 52.9\"",
      "Recline: 90–155°",
      "Lumbar: massage pillow",
      "Armrests: linkage",
      "Footrest: yes"
    ],
    "pros": [
      "Class 4 lift under $100",
      "Tall backrest",
      "Deep recline"
    ],
    "cons": [
      "PU leather",
      "No BIFMA base listed",
      "Massage pillow adds a cable"
    ],
    "bestFor": "A tall, heavier user on a budget.",
    "summary": "A 52.9-inch high-back chair with Class 4 gas lift, massage lumbar and footrest, under $100.",
    "skipIf": "You want fabric; the GTPLAYER VN-GT829 is upholstered in it."
  },
  {
    "id": "gtplayer-vn-gt829-triple-pad-400",
    "rank": 3,
    "badge": "Best Fabric Chair",
    "name": "GTPLAYER VN-GT829 Gaming Chair (400 lbs, Fabric, Triple-Pad, Linkage Arms)",
    "price": "$125.97",
    "rating": "4.4 stars",
    "reviews": "399 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51f-ATx+PEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H14F136K?tag=theofficejournal-20",
    "description": "The GTPLAYER VN-GT829 is the fabric option: breathable fabric over a triple-pad spring seat GTPLAYER calls cloud-like, with a 52-inch back and embroidery details.\n\nIt has linkage armrests, a pull-out footrest, an SGS Class 3 gas lift, an FSC-certified wood frame and a one-year warranty.\n\nIts gas lift is Class 3 rather than Class 4, and it has less buyer feedback than the top picks.",
    "specs": [
      "Upholstery: fabric",
      "Seat: triple-pad spring",
      "Backrest: 52\"",
      "Gas lift: SGS Class 3",
      "Footrest: yes",
      "Warranty: 1 year"
    ],
    "pros": [
      "Breathable fabric",
      "Layered spring seat",
      "Tall back"
    ],
    "cons": [
      "Class 3 lift",
      "Less buyer feedback",
      "Embroidery won't suit every room"
    ],
    "bestFor": "Heavier users who prefer fabric over PU leather.",
    "summary": "A breathable fabric chair with a triple-pad spring seat, 52-inch back and footrest.",
    "skipIf": "A Class 4 lift matters to you; the LEMBERI or GTPLAYER CH6MK530 has one."
  },
  {
    "id": "gtplayer-ch6mk530-embossing-400",
    "rank": 4,
    "badge": "Best Certified Leather Chair",
    "name": "GTPLAYER CH6MK530 Gaming Chair (400 lbs, PU Leather, Embossing, Pocket Spring)",
    "price": "$159.88",
    "rating": "4.3 stars",
    "reviews": "1,735 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/413HCPrWx5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHB3CG9X?tag=theofficejournal-20",
    "description": "The GTPLAYER CH6MK530 has the strongest stated hardware here: an SGS Class 4 gas lift and a BIFMA-tested base.\n\nIt has a pocket-spring lumbar, embossed four-leaf-clover leather, a wingback with a wide wingless seat for hip room, a footrest, a 90- to 150-degree recline, FSC-certified wood and a one-year warranty.\n\nIt shares its design and certifications with the COMHOMA CH511 at a lower price at the time of writing.",
    "specs": [
      "Gas lift: SGS Class 4",
      "Base: BIFMA-tested",
      "Seat: wide, wingless",
      "Lumbar: pocket spring",
      "Recline: 90–150°",
      "Warranty: 1 year"
    ],
    "pros": [
      "Class 4 lift and BIFMA base",
      "Wide seat",
      "Cheaper than the COMHOMA twin"
    ],
    "cons": [
      "Costs more than the LEMBERI",
      "One-year warranty",
      "Embossed style is specific"
    ],
    "bestFor": "Buyers who want certified hardware and a wider seat.",
    "summary": "An embossed leather chair with Class 4 gas lift, BIFMA-tested base and wide wingless seat.",
    "skipIf": "You want the larger track record of the identical design; the COMHOMA CH511 has more feedback."
  },
  {
    "id": "comhoma-ch511-embossing-400",
    "rank": 5,
    "badge": "Same Design, More Buyer Feedback",
    "name": "COMHOMA CH511 Gaming Chair (400 lbs, Embossing Leather, Pocket Spring)",
    "price": "$229.99",
    "rating": "4.2 stars",
    "reviews": "6,112 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41crmkDqAXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWFX3B8R?tag=theofficejournal-20",
    "description": "The COMHOMA CH511 matches the GTPLAYER CH6MK530's embossed leather, pocket-spring lumbar, wide wingless seat, SGS Class 4 gas lift and BIFMA-tested metal base.\n\nIts advantage is a much larger base of buyer feedback. It has a footrest, a 90- to 150-degree recline, FSC-certified wood and a one-year warranty.\n\nIt was the most expensive chair here at the time of writing, about $70 more than the GTPLAYER version, and its feedback is somewhat less positive than most here.",
    "specs": [
      "Gas lift: SGS Class 4",
      "Base: BIFMA-tested metal",
      "Seat: wide, wingless",
      "Lumbar: pocket spring",
      "Recline: 90–150°",
      "Warranty: 1 year"
    ],
    "pros": [
      "Class 4 lift and BIFMA base",
      "Larger buyer feedback than its twin",
      "Wide seat"
    ],
    "cons": [
      "Most expensive here at the time of writing",
      "Less positive feedback than most here",
      "One-year warranty"
    ],
    "bestFor": "Readers who want the certified embossed design with more buyer feedback.",
    "summary": "The same embossed design, Class 4 lift and BIFMA-tested base as the GTPLAYER CH6MK530, with more feedback.",
    "skipIf": "Price matters; the GTPLAYER CH6MK530 is the same design for less."
  },
  {
    "id": "ngen-nyx-05-pocket-spring-400",
    "rank": 6,
    "badge": "Budget Pocket-Spring Chair",
    "name": "N-GEN GAMING NYX-05 Gaming Chair (400 lbs, Pocket Spring, Next-Day Delivery)",
    "price": "$99.95",
    "rating": "4.4 stars",
    "reviews": "52 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41QaOa1TIgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H262PKQ1?tag=theofficejournal-20",
    "description": "The N-GEN NYX-05 offers a pocket-spring cushion, stainless steel frame, synchronized linked armrests and a footrest under $100 at the time of writing.\n\nIt has an SGS Class 3 gas lift, a 90- to 135-degree recline and a one-year warranty.\n\nIts recline is among the shallowest here, its lift is Class 3, and buyer feedback is limited so far.",
    "specs": [
      "Cushion: pocket spring",
      "Frame: stainless steel",
      "Gas lift: SGS Class 3",
      "Recline: 90–135°",
      "Footrest: yes",
      "Warranty: 1 year"
    ],
    "pros": [
      "Low price",
      "Pocket-spring cushion",
      "Footrest"
    ],
    "cons": [
      "Class 3 lift",
      "135° recline",
      "Limited buyer feedback"
    ],
    "bestFor": "A softer seat on a budget.",
    "summary": "A pocket-spring chair with stainless steel frame, linked armrests and footrest, under $100.",
    "skipIf": "You want a Class 4 lift at a similar price; the LEMBERI has one."
  },
  {
    "id": "jecqcupg-7point-support-400",
    "rank": 7,
    "badge": "Lowest Price, Wide Seat",
    "name": "JECQCUPG 7-Point Support Gaming Chair (400 lbs, Extra-Wide Seat, PU Leather)",
    "price": "$79.99",
    "rating": "4.9 stars",
    "reviews": "327 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41I1NCqlnRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H6SD9317?tag=theofficejournal-20",
    "description": "The JECQCUPG is the least expensive chair here at the time of writing, and it has an extra-wide 51cm (about 20-inch) seat of pocket springs and foam, with what JECQCUPG calls 7-point ergonomic support.\n\nIt has synchronized armrests, an SGS-rated gas lift, PU leather and a 90- to 135-degree recline. Buyer feedback is very positive, from a moderate number of reviews.\n\nIts gas lift class isn't specified, and the recline is shallow.",
    "specs": [
      "Seat: 51cm, pocket spring + foam",
      "Support: 7-point (per manufacturer)",
      "Gas lift: SGS-rated (class not stated)",
      "Recline: 90–135°",
      "Upholstery: PU leather"
    ],
    "pros": [
      "Lowest price here",
      "Wide seat",
      "Very positive buyer feedback"
    ],
    "cons": [
      "Gas lift class not stated",
      "135° recline",
      "Moderate number of reviews"
    ],
    "bestFor": "A wide seat for the least money.",
    "summary": "The lowest-priced chair here, with a 51cm extra-wide seat and 7-point support system.",
    "skipIf": "You want certified hardware; the GTPLAYER CH6MK530 lists Class 4 and BIFMA."
  },
  {
    "id": "hesl-massage-heat-400",
    "rank": 8,
    "badge": "Best for Massage, Heat and Recline",
    "name": "HESL Massage + Heat Gaming Chair (400 lbs, 6-Point Vibration, 160° Recline)",
    "price": "$199.99",
    "rating": "4.4 stars",
    "reviews": "1,068 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41AiE958EXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D6VH31C1?tag=theofficejournal-20",
    "description": "The HESL combines the most features here: 6-point vibration massage, heating HESL lists to 120°F, memory foam, and the deepest recline in this guide at 90 to 160 degrees.\n\nIt has self-adjusting armrests, a footrest, an SGS-rated gas lift and a 365-day parts warranty. HESL quotes about 15 minutes of assembly.\n\nIt was the second most expensive chair here at the time of writing, and massage and heat add wiring and parts.",
    "specs": [
      "Massage: 6-point vibration",
      "Heat: up to 120°F (per manufacturer)",
      "Cushion: memory foam",
      "Recline: 90–160°",
      "Gas lift: SGS-rated",
      "Warranty: 365 days (parts)"
    ],
    "pros": [
      "Deepest recline here",
      "Massage and heat",
      "Footrest"
    ],
    "cons": [
      "Second most expensive here",
      "Extra electronics",
      "Gas lift class not stated"
    ],
    "bestFor": "Lounging with massage and heat.",
    "summary": "A chair with 6-point vibration massage, heating, memory foam and a 160-degree recline.",
    "skipIf": "You don't need massage or heat; the LEMBERI reclines to 155 degrees for half the price."
  }
];

export const howWeEvaluated = [
  {
    "title": "Load evidence",
    "description": "We compared gas lift class and base certifications as listed."
  },
  {
    "title": "Seat and cushion",
    "description": "We compared seat width and cushion construction."
  },
  {
    "title": "Recline and features",
    "description": "We compared recline ranges, footrests, massage and heat."
  },
  {
    "title": "Warranty and price",
    "description": "We compared warranties and prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Look for evidence behind the rating",
    "explanation": "A Class 4 gas lift (LEMBERI, GTPLAYER CH6MK530, COMHOMA CH511) and a BIFMA-tested base (the last two) add confidence to a 400 lb figure."
  },
  {
    "criterion": "Check seat width",
    "explanation": "The JECQCUPG lists a 51cm seat; the GTPLAYER CH6MK530 and COMHOMA describe wide wingless seats. Several listings don't give a width."
  },
  {
    "criterion": "Compare recline",
    "explanation": "Ranges run from 135 degrees (JECQCUPG, N-GEN) to 160 (HESL)."
  },
  {
    "criterion": "Choose upholstery",
    "explanation": "Most chairs here use PU leather; the GTPLAYER VN-GT829 uses fabric."
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
          "Longest track record",
          "GTRACING"
        ],
        [
          "Class 4 lift under $100",
          "LEMBERI"
        ],
        [
          "Fabric",
          "GTPLAYER VN-GT829"
        ],
        [
          "Class 4 + BIFMA for less",
          "GTPLAYER CH6MK530"
        ],
        [
          "Same, more feedback",
          "COMHOMA CH511"
        ],
        [
          "Lowest price, wide seat",
          "JECQCUPG"
        ],
        [
          "Massage, heat, deep recline",
          "HESL"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is a Class 4 gas lift worth it?",
    "a": "For a chair used near its rated load, a Class 4 lift is generally rated for heavier loads than Class 3. The LEMBERI, GTPLAYER CH6MK530 and COMHOMA CH511 specify one."
  },
  {
    "q": "Which reclines furthest?",
    "a": "The HESL, from 90 to 160 degrees. The JECQCUPG and N-GEN NYX-05 stop at 135."
  },
  {
    "q": "Which is cheapest?",
    "a": "The JECQCUPG, at about $80 at the time of writing."
  },
  {
    "q": "Is the LEMBERI a good alternative to the GTRACING?",
    "a": "It costs less and specifies a Class 4 lift the GTRACING listing doesn't mention; the GTRACING has more buyer feedback."
  },
  {
    "q": "What's the difference between the GTPLAYER CH6MK530 and COMHOMA CH511?",
    "a": "On paper, the same design and certifications. The COMHOMA has more buyer feedback and costs more."
  }
];

export const bottomLine = [
  "For value, the LEMBERI is the 400 lb chair to consider first: a Class 4 lift, tall back and footrest under $100. The GTPLAYER CH6MK530 adds a BIFMA-tested base and wide seat for more, and the GTRACING offers the longest track record.",
  "The JECQCUPG is the lowest-cost route to a wide seat, the GTPLAYER VN-GT829 the fabric option, and the HESL the pick for massage, heat and the deepest recline."
];

export const relatedGuides = [
  {
    "href": "/guide/best-gaming-chair-350-lb",
    "title": "Best Gaming Chairs with 350 lb Weight Capacity (2026)"
  },
  {
    "href": "/guide/best-gaming-chair-for-big-tall",
    "title": "Best Gaming Chairs for Big & Tall (2026)"
  }
];
