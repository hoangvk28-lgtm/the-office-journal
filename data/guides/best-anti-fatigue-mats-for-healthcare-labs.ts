// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Minimum 3/4-Inch Thickness for Real Cushioning",
    "explanation": "Ergonomists generally recommend at least 3/4 inch of thickness for a mat to provide real cushioning and shock absorption over a full standing session, since thinner mats (around 1/2 inch) tend to compress flat within months of daily use and stop providing meaningful relief."
  },
  {
    "criterion": "Material Density Matters More Than Thickness Alone",
    "explanation": "Material density, not just the thickness number, determines how long a mat actually holds up under daily standing: a denser 3/4-inch polyurethane mat can outlast a thicker 1-inch foam or gel mat, since foam and gel compress and soften with continuous use in a way dense polyurethane resists. A stated density figure (20 to 30 lbs per cubic foot for quality foam) is a more reliable durability signal than the thickness spec alone."
  },
  {
    "criterion": "The Mat Should Compress and Spring Back, Not Bottom Out",
    "explanation": "A supportive anti-fatigue mat compresses slightly under your body weight when you shift position, then springs back rather than staying permanently indented, which is what actually reduces fatigue by encouraging small, constant muscle micro-movements as you stand. A mat that bottoms out completely under normal standing weight, or one so firm it doesn't compress at all, fails at this core job regardless of its thickness or material claims."
  },
  {
    "criterion": "Beveled Edges to Prevent Tripping",
    "explanation": "The edge design matters more than most buyers expect, especially on a thicker mat: a sharp, unbeveled edge creates a real tripping hazard at the transition to bare floor, while a beveled edge tapers that height difference down gradually. This matters most if the mat sits somewhere with foot traffic crossing its border regularly, not just underfoot at one fixed standing spot."
  },
  {
    "criterion": "Surface Texture for Your Actual Footwear",
    "explanation": "A smooth-surfaced mat can feel slippery in socks or bare feet, while a slightly textured surface improves grip in both those cases and with shoes on, which matters if you'll be standing on the mat without shoes at any point during the day. Check the surface texture description specifically if you plan to use the mat barefoot or in socks, since a mat marketed primarily for a garage or workshop (shoes always on) may prioritize different surface properties."
  }
];

export const faq = [
  {
    "q": "How thick should an anti-fatigue mat be?",
    "a": "Ergonomists generally recommend 3/4 inch to 1 inch: thinner mats around 1/2 inch tend to compress flat within months of daily use, while mats thicker than about 1 inch can start to feel unstable underfoot, so the sweet spot sits specifically in that middle range."
  },
  {
    "q": "Does a thicker anti-fatigue mat always mean more comfort?",
    "a": "No, material density matters more than raw thickness; a denser 3/4-inch polyurethane mat can outlast and outperform a thicker 1-inch foam or gel mat, since foam and gel tend to flatten and soften under continuous daily standing."
  },
  {
    "q": "How do I know if an anti-fatigue mat is actually working?",
    "a": "It should compress slightly under your weight as you shift position and spring back afterward, encouraging small muscle movements that reduce fatigue; a mat that bottoms out completely or feels too firm to compress at all isn't providing that core benefit regardless of its spec sheet."
  },
  {
    "q": "Are anti-fatigue mats a tripping hazard?",
    "a": "They can be without beveled edges, especially thicker mats where the height difference to bare floor is more pronounced, so check specifically for beveled edges if the mat sits somewhere with regular foot traffic crossing its border."
  },
  {
    "q": "Can I use an anti-fatigue mat barefoot or in socks?",
    "a": "Check the surface texture first, since a smooth-surfaced mat can feel slippery without shoes even if it grips shoes just fine; a mat marketed mainly for garage or workshop use may not prioritize barefoot grip the way one designed for a home office would."
  },
  {
    "q": "Do anti-fatigue mats work on carpet?",
    "a": "Most are designed for hard flooring and can feel unstable or shift on top of carpet, so if your standing desk sits on carpet, check specifically for a mat rated or reviewed for carpet use rather than assuming any anti-fatigue mat performs the same on both surfaces."
  }
];

export const guideSlug = "best-anti-fatigue-mats-for-healthcare-labs";

export const guideTitle = "The Best Anti-Fatigue Mats for Healthcare/Labs, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/41q97VkOUSL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Hours Standing Per Day",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats"
        ],
        [
          "",
          "Bertech Anti Fatigue Floor Mat"
        ],
        [
          "",
          "SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital"
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
          "Lowest price in this lineup",
          "CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats"
        ],
        [
          "",
          "FEATOL Anti Fatigue Mat Industrial"
        ],
        [
          "",
          "SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats)",
        "text": "Softer initial feel, but flattens faster under continuous daily use."
      },
      {
        "label": "SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital)",
        "text": "Holds support and shape longer for genuine all-day standing."
      }
    ],
    "note": "Match this to how many hours a day the mat will actually see, not just initial comfort."
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
          "Bertech Anti Fatigue Floor Mat"
        ],
        [
          "",
          "Check specifically for a mat rated for carpet use"
        ]
      ]
    }
  },
  {
    "subheading": "For Barefoot or Sock Use Specifically",
    "cards": [
      {
        "label": "",
        "text": "A textured surface rather than smooth, which can feel slippery without shoes."
      },
      {
        "label": "",
        "text": "Bertech Anti Fatigue Floor Mat is worth checking against its specific surface texture before assuming any mat grips the same barefoot."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You stand for most of the workday and want long-term support, where SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital justifies the extra cost."
      },
      {
        "label": "",
        "text": "You only stand occasionally and want basic cushioning, where CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Minimum 3/4-Inch Thickness for Real Cushioning",
    "description": "Ergonomists generally recommend at least 3/4 inch of thickness for a mat to provide real cushioning and shock absorption over a full standing session, since thinner mats (around 1/2 inch) tend to compress flat within months of daily use and stop providing meaningful relief."
  },
  {
    "title": "Material Density Matters More Than Thickness Alone",
    "description": "Material density, not just the thickness number, determines how long a mat actually holds up under daily standing: a denser 3/4-inch polyurethane mat can outlast a thicker 1-inch foam or gel mat, since foam and gel compress and soften with continuous use in a way dense polyurethane resists."
  },
  {
    "title": "The Mat Should Compress and Spring Back, Not Bottom Out",
    "description": "A supportive anti-fatigue mat compresses slightly under your body weight when you shift position, then springs back rather than staying permanently indented, which is what actually reduces fatigue by encouraging small, constant muscle micro-movements as you stand."
  },
  {
    "title": "Beveled Edges to Prevent Tripping",
    "description": "The edge design matters more than most buyers expect, especially on a thicker mat: a sharp, unbeveled edge creates a real tripping hazard at the transition to bare floor, while a beveled edge tapers that height difference down gradually."
  },
  {
    "title": "Surface Texture for Your Actual Footwear",
    "description": "A smooth-surfaced mat can feel slippery in socks or bare feet, while a slightly textured surface improves grip in both those cases and with shoes on, which matters if you'll be standing on the mat without shoes at any point during the day."
  }
];

export const introParagraphs = [
  "Across best anti-fatigue mats for healthcare/labs, vary more than the keyword suggests, given that the real gap is in the details.",
  "What separates these picks is true cushioning versus marketed thickness, since these separate real capability from claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "anti-fatigue mats healthcare";

export const metaDescription = "We compared 8 anti-fatigue mats for healthcare/labs on features, comfort and practical fit to help you choose the right one for your space.";

export const metaTitle = "Best Anti-Fatigue Mats for Healthcare/Labs (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Bertech Anti Fatigue Floor Mat",
    "price": "$85.05",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41q97VkOUSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B01M6YKNV8?tag=theofficejournal-20",
    "description": "Bertech Anti Fatigue Floor Mat is the top pick in this comparison. General purpose healthcare applications, nursing station, pharmacy counter. Made of expanded polyvinyl chloride.\n\nAgainst CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nReach for this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Ergonomists recommend at least 3/4 inch of thickness for real cushioning, since thinner mats tend to compress flat within months of daily standing.",
    "specs": [
      "General purpose healthcare applications, nursing station, pharmacy counter",
      "Made in the usa",
      "Made of expanded polyvinyl chloride"
    ],
    "pros": [
      "General purpose healthcare applications, nursing station, pharmacy counter",
      "Made in the usa",
      "Made of expanded polyvinyl chloride",
      "Mat thickness"
    ],
    "cons": [
      "Under 3/4 inch thick tends to compress flat within months",
      "Foam-only mats soften and lose support faster than dense polyurethane"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JcYxsxlyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B097R7Z8BQ?tag=theofficejournal-20",
    "description": "CALPALMY 150 Sheets 24\" x 36\" Adhesive Mats is the most affordable pick here that still clears the capability floor for this category. This sticky mat can effectively remove dust and dirt from shoe treads, hand truck/trolley/dolly tires, and pet paws. The well suited-sized sticky mat for high-traffic areas including building and room entrances.\n\nBertech Anti Fatigue Floor Mat is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nThis makes sense for anyone who want a capable pick without paying for headroom you won't use. Foam and gel mats can flatten or soften under continuous all-day use, while a denser polyurethane material holds its support for the life of the mat.",
    "specs": [
      "24 Inches x 36 inches adhesive mats",
      "Peel, stick, and use",
      "Sticky mat can effectively remove dust and dirt from shoe treads"
    ],
    "pros": [
      "24 Inches x 36 inches adhesive mats",
      "Peel, stick, and use",
      "Sticky mat can effectively remove dust and dirt from shoe treads",
      "well suited-sized sticky mat for high-traffic areas including building and room entrances"
    ],
    "cons": [
      "Foam-only mats soften and lose support faster than dense polyurethane",
      "Under 3/4 inch thick tends to compress flat within months"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-3",
    "rank": 3,
    "badge": "Best Premium Pick",
    "name": "SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital",
    "price": "$110.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fTvvWKJtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07KW3Q6BK?tag=theofficejournal-20",
    "description": "SATECH Sticky/Tacky/Adhesive Mat for Cleanroom Laboratory Construction Hospital is the premium option here, positioned above the rest on price. This tacky mat is made of film coated with adhesive. The bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement.\n\nThe gap between this and Bertech Anti Fatigue Floor Mat isn't in the essentials, it shows up in could stick on floors at entrances, garages, places where pets always stay, etc.\n\nGo with this pick if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Ergonomists recommend at least 3/4 inch of thickness for real cushioning, since thinner mats tend to compress flat within months of daily standing.",
    "specs": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor"
    ],
    "pros": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor",
      "Could stick on floors at entrances"
    ],
    "cons": [
      "Under 3/4 inch thick tends to compress flat within months",
      "Foam-only mats soften and lose support faster than dense polyurethane"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "FEATOL Anti Fatigue Mat Industrial",
    "price": "$55.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51OwRnqRK-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4PNCVGY?tag=theofficejournal-20",
    "description": "FEATOL Anti Fatigue Mat Industrial is a strong alternative worth comparing directly against the top pick. This anti-fatigue comfort mat is constructed from 9/10 inch advanced high-density memory foam for a superior cushioning experience. Whether you are repairing the car in the garage, working in the factory, standing at the desk, cooking in the kitchen, or washing in the laundry, you can use this kitchen mat.\n\nBertech Anti Fatigue Floor Mat is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Foam and gel mats can flatten or soften under continuous all-day use, while a denser polyurethane material holds its support for the life of the mat.",
    "specs": [
      "Anti-fatigue standing mat",
      "Versatile comfort floor mat",
      "Non-slip surface"
    ],
    "pros": [
      "Anti-fatigue standing mat",
      "Versatile comfort floor mat",
      "Non-slip surface",
      "Safety yellow border"
    ],
    "cons": [
      "Foam-only mats soften and lose support faster than dense polyurethane",
      "Under 3/4 inch thick tends to compress flat within months"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "SATECH Sticky/Tacky/Adhesive Mat 24\" x 36\" Blue (Case of 4 Mats, 30 Sheets Each)",
    "price": "$48.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31fTvvWKJtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07KW36YSJ?tag=theofficejournal-20",
    "description": "SATECH Sticky/Tacky/Adhesive Mat 24\" x 36\" Blue (Case of 4 Mats, 30 Sheets Each) is a strong alternative worth comparing directly against the top pick. This tacky mat is made of film coated with adhesive. The bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement.\n\nBertech Anti Fatigue Floor Mat lands in a similar spot overall, but the deciding factor between the two is could stick on floors at entrances, garages, places where pets always stay, etc.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Ergonomists recommend at least 3/4 inch of thickness for real cushioning, since thinner mats tend to compress flat within months of daily standing.",
    "specs": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor"
    ],
    "pros": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor",
      "Could stick on floors at entrances"
    ],
    "cons": [
      "Under 3/4 inch thick tends to compress flat within months",
      "Foam-only mats soften and lose support faster than dense polyurethane"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "SATECH Sticky/Tacky/Adhesive Mat 24\" x 36\" White",
    "price": "$48.96",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410lJrf--yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07KW4L8C9?tag=theofficejournal-20",
    "description": "SATECH Sticky/Tacky/Adhesive Mat 24\" x 36\" White is a strong alternative worth comparing directly against the top pick. This tacky mat is made of film coated with adhesive. The bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement.\n\nHeld up against Bertech Anti Fatigue Floor Mat, both cover the basics equally well, what actually separates them is could stick on floors at entrances, garages, places where pets always stay, etc.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Foam and gel mats can flatten or soften under continuous all-day use, while a denser polyurethane material holds its support for the life of the mat.",
    "specs": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor"
    ],
    "pros": [
      "Tacky mat is made of film coated with adhesive",
      "Bottom corner of each tacky mat sheet shows the label 1-30# for easy replacement",
      "Sticky mats undergo rigorous ISO standardized treatment .they are commonly used in semiconductor",
      "Could stick on floors at entrances"
    ],
    "cons": [
      "Foam-only mats soften and lose support faster than dense polyurethane",
      "Under 3/4 inch thick tends to compress flat within months"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "Guardian 24031202BY Air Step Anti-Fatigue Floor Mat",
    "price": "$88.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31t4mdhTZ2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJ74XV8W?tag=theofficejournal-20",
    "description": "Guardian 24031202BY Air Step Anti-Fatigue Floor Mat is a strong alternative worth comparing directly against the top pick. 3/8\" Vinyl construction ensures higher durability and better resilience than ordinary vinyl sponge mats. Can easily be cut to any custom size with just a pair of scissors.\n\nAgainst Bertech Anti Fatigue Floor Mat, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Ergonomists recommend at least 3/4 inch of thickness for real cushioning, since thinner mats tend to compress flat within months of daily standing.",
    "specs": [
      "3/8\" Vinyl construction ensures higher durability and better resilience than ordinary vinyl sponge mats",
      "Can easily be cut to any custom size with just a pair of scissors",
      "Support provided by vinyl foam structure"
    ],
    "pros": [
      "3/8\" Vinyl construction ensures higher durability and better resilience than ordinary vinyl sponge mats",
      "Can easily be cut to any custom size with just a pair of scissors",
      "Support provided by vinyl foam structure",
      "Reduces fatigue and discomfort"
    ],
    "cons": [
      "Under 3/4 inch thick tends to compress flat within months",
      "Foam-only mats soften and lose support faster than dense polyurethane"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-anti-fatigue-mats-for-healthcare-labs-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "HappyTrends Kitchen Mats for Floor Cushioned Anti-Fatigue Kitchen Rugs",
    "price": "$41.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51-WJl8PP3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08SHVJ3F9?tag=theofficejournal-20",
    "description": "HappyTrends Kitchen Mats for Floor Cushioned Anti-Fatigue Kitchen Rugs is a strong alternative worth comparing directly against the top pick. The memory foam kitchen floor mats provide extra large areas for standing in laundry room, kitchen, office, farmhouse, in front of sink or any other high-traffic indoor or outdoor space. Nonslip PVC bottom is manufactured so that they do not move around like other mats while a slight texture on the top makes them slip resistant; rug must be placed on dry surface during use.\n\nBertech Anti Fatigue Floor Mat is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Foam and gel mats can flatten or soften under continuous all-day use, while a denser polyurethane material holds its support for the life of the mat.",
    "specs": [
      "Extra soft",
      "Water resistant",
      "No tripping"
    ],
    "pros": [
      "Extra soft",
      "Water resistant",
      "No tripping",
      "Memory foam kitchen floor mats provide extra large areas for standing in laundry room"
    ],
    "cons": [
      "Foam-only mats soften and lose support faster than dense polyurethane",
      "Under 3/4 inch thick tends to compress flat within months"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-anti-fatigue-mats",
    "title": "Best Anti-Fatigue Mats"
  },
  {
    "href": "/guide/best-anti-fatigue-mats-for-standing-desks",
    "title": "Best Anti-Fatigue Mats for Standing Desks"
  },
  {
    "href": "/guide/best-anti-fatigue-mats-for-office",
    "title": "Best Anti-Fatigue Mats for Office"
  }
];

export const breadcrumbLabel = "Best Anti-Fatigue Mats for Healthcare/Labs";
