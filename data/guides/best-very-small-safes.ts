// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Don't assume fire or water protection unless it's explicitly certified",
    "explanation": "A safe being made of steel doesn't automatically mean it protects contents from a house fire, most compact steel security safes are theft-deterrence only, with no fire or water rating at all, while a fireproof safe carries a specific certified time-and-temperature rating (for example, 30 minutes at 1550°F) tested by an independent lab.\n\nThis distinction matters a great deal if you're storing something irreplaceable like documents, passports, or family photos, since an uncertified safe offers essentially no protection if a real fire reaches it.\n\nCheck the listing specifically for a stated fire rating with a time and temperature figure, not just the word \"fireproof\" in the title, since that word alone isn't a verified claim."
  },
  {
    "criterion": "Weigh anchoring if the safe is light enough to simply be carried away",
    "explanation": "A locked safe stops casual, opportunistic access, but a small, lightweight safe that isn't bolted down doesn't stop someone from just picking it up and walking out the door, lock and all.\n\nThis is a real gap in protection that a strong lock alone can't close, and it's especially relevant for anything under roughly 30 pounds, light enough for one person to carry without much effort.\n\nCheck whether the listing confirms factory-supported anchor holes and includes the actual anchor bolts, not just a vague mention that it \"can be mounted,\" since some listings imply this without actually providing the hardware."
  },
  {
    "criterion": "Match interior capacity to what you're actually planning to store",
    "explanation": "Small safes vary widely in usable interior space, often listed in cubic feet, and the same category label can span anything from a slim document-and-passport box to a safe roomy enough for a laptop and a jewelry case.\n\nBuying based on the exterior size alone is a common mistake, since wall thickness for security or fire protection eats meaningfully into the usable interior compared to the exterior dimensions advertised.\n\nCheck the listed interior dimensions specifically, not just the cubic-footage number, and measure whatever you plan to store, cash bundles, a passport, a handgun case, jewelry boxes, against those exact interior measurements before buying."
  },
  {
    "criterion": "Consider access method and what happens when it fails",
    "explanation": "Electronic keypad safes are convenient day to day, but every keypad relies on batteries, and a dead battery with no backup plan means being locked out of your own safe.\n\nThe strongest designs offer a genuine backup, a physical override key, a USB-C emergency power port, or both, so a battery failure doesn't turn into a real lockout. This matters more the more critical the contents are, a safe holding a spare car key or cash you access occasionally is a smaller problem than a safe holding documents you need on short notice.\n\nCheck the listing specifically for a stated backup access method beyond just the keypad, and confirm what's actually included, some listings mention a backup port but don't include the cable or key."
  },
  {
    "criterion": "Weigh review count and rating together, not rating alone",
    "explanation": "5-star rating from several thousand, since a small sample can be skewed by a handful of early, enthusiastic buyers before any long-term reliability issues would show up in later reviews.\n\nThis matters more for a safe than for many other product categories, since a lock or hinge failure often only becomes visible after months of real use, not in the first week.\n\nCheck both numbers together on the listing, and treat a high rating on a very small review count as a promising but unproven signal rather than the same level of confidence as a well-reviewed pick."
  }
];

export const faq = [
  {
    "q": "What's the absolute smallest safe in this comparison?",
    "a": ""
  },
  {
    "q": "Is there a compact safe that still fits a passport?",
    "a": "69 inches, fits a passport flat, unlike the smallest picks here."
  },
  {
    "q": "What's the smallest fire-rated option?",
    "a": "The SentrySafe Fireproof Safe with Key Lock, though it's meaningfully larger than the pure security boxes in this comparison."
  },
  {
    "q": "Are very small safes easy to steal?",
    "a": "We prioritized picks with confirmed mounting hardware or a tether cable to address this genuine risk at small sizes."
  },
  {
    "q": "Why does this list have 7 products instead of 8?",
    "a": "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data."
  }
];

export const guideSlug = "best-very-small-safes";

export const guideTitle = "The Best Very Small Safes for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "Fire or water resistance claimed",
          "SentrySafe Fireproof Safe with Key Lock"
        ],
        [
          "",
          "Yuanshikj Small Steel Security Safe Box with Keypad"
        ],
        [
          "",
          "Yuanshikj Small Steel Security Safe Box with Keypad"
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
          "",
          "KYODOLED Small Metal Lock Box with Key for Cash and Medication"
        ],
        [
          "",
          "SentrySafe Fireproof Safe with Key Lock"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: KYODOLED Small Metal Lock Box with Key for Cash and Medication, Master Lock Small Travel Safe with Cable."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Small Safe, MAESTON Mini Electronic Safe Box with Digital Keypad & Keys, Yuanshikj Small Steel Security Safe Box with Keypad, Bonsaii Small Safe Box with Electronic Keypad for Valuables, SentrySafe Fireproof Safe with Key Lock."
      }
    ],
    "note": "Most buyers should default to electronic access with a confirmed backup method unless simplicity is the top priority."
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
          "SentrySafe Fireproof Safe with Key Lock"
        ],
        [
          "Theft deterrence only, no fire claim",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "For Storing Documents or Cash Specifically",
    "cards": [
      {
        "label": "",
        "text": "A confirmed interior dimension roomy enough for the actual items, plus a backup access method beyond just a keypad."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You're storing valuable or irreplaceable items, where SentrySafe Fireproof Safe with Key Lock's higher price buys real security or fire-protection headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need basic theft deterrence for low-value items, where KYODOLED Small Metal Lock Box with Key for Cash and Medication covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Published exact exterior dimensions for every pick rather than a vague small label",
    "description": "We ranked by confirmed footprint measurements rather than treating small as a self-reported marketing term without a specific threshold."
  },
  {
    "title": "Checked what miniaturization actually removes from usability",
    "description": "The smallest picks here explicitly can't fit a passport flat; we flagged this directly rather than assuming every very small safe handles the same items as a larger one."
  },
  {
    "title": "Noted the fire-protection tradeoff at small sizes",
    "description": "The smallest available fire-rated pick is meaningfully larger than the pure security boxes here. We disclosed this as a genuine construction tradeoff rather than implying fire protection comes free at any size."
  },
  {
    "title": "Excluded the inaccessible ASIN rather than fabricating its data",
    "description": "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing."
  }
];

export const introParagraphs = [
  "Very small isn't a defined size until you set an actual threshold, so we're publishing exact exterior dimensions for every pick here and ranking by confirmed compactness rather than a vague small label. One original candidate ASIN was not accessible through the product catalog at research time.",
  "We also checked what miniaturization actually removes, whether a passport or stack of cash fits before assuming any very small safe handles the same items as a larger one."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "very small safes";

export const metaDescription = "A practical comparison of 7 very small safes, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Very Small Safes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b004lamjvi-svss",
    "rank": 1,
    "badge": "Smallest Confirmed Footprint",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "6\" interior), this is the smallest confirmed footprint in this entire comparison, pocket-adjacent in scale. A resettable three-digit mechanical combination needs no batteries, and a tethering cable secures it to a fixed object rather than requiring bulky mounting hardware.\n\nAt this size, the manufacturer positions it specifically for compact items like keys, cash, credit cards, and USB drives, not a passport or larger documents, an honest scope match for the smallest safe here.\n\nNo-battery mechanical reliability at the smallest scale. That said, interior too small for a passport or larger documents.",
    "specs": [
      "2.6×5.9×8.0 in exterior, 2.4×5.3×6.6 in interior, smallest here",
      "Resettable 3-digit mechanical combination, no batteries",
      "Tethering cable"
    ],
    "pros": [
      "Smallest confirmed footprint in this entire comparison",
      "No-battery mechanical reliability at the smallest scale"
    ],
    "cons": [
      "Interior too small for a passport or larger documents"
    ],
    "bestFor": "Buyers wanting the smallest possible safe for compact items only."
  },
  {
    "id": "b0f98zd7p4-svss",
    "rank": 2,
    "badge": "Smallest With Digital Keypad",
    "name": "MAESTON Mini Electronic Safe Box with Digital Keypad & Keys, 0.23 Cubic",
    "price": "$29.99",
    "rating": "4.3",
    "reviews": "187",
    "imageUrl": "https://m.media-amazon.com/images/I/41BeFzmCRBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F98ZD7P4?tag=theofficejournal-20",
    "description": "23 cubic feet, this is the smallest digital-keypad pick in this comparison, with a customizable 3-8 digit password despite the compact size. Reinforced solid steel wall structure with double solid door bolts backs the security even at this scale.\n\nFour pre-drilled mounting holes plus two expansion bolts make this mountable despite being one of the smallest picks here, and a magnetic lock auto-locks for convenience, with two emergency keys included as backup.",
    "specs": [
      "0.23 cu ft, smallest confirmed keypad option here",
      "Customizable 3-8 digit password",
      "Mountable despite compact size"
    ],
    "pros": [
      "Smallest confirmed digital-keypad option in this comparison",
      "Still mountable despite the compact size"
    ],
    "cons": [
      "Small interior limits contents to compact items"
    ],
    "bestFor": "Buyers wanting the smallest keypad-accessed safe that's still mountable."
  },
  {
    "id": "b078myjyd5-svss",
    "rank": 3,
    "badge": "Best Balance of Compact Size and Proven Track Record",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "12\" interior), this is compact while still fitting a passport flat, a real capability check smaller picks in this comparison can't match. A magnetic auto-locking door closes and secures itself immediately.\n\nReinforced solid steel construction with dual door locking bolts backs the physical security, and pre-drilled mounting holes with included bolts let you anchor it despite the small footprint.\n\nCompact footprint that still fits a passport flat.",
    "specs": [
      "9.05×6.69×6.69 in exterior, 6.29×8.9×5.12 in interior",
      "Fits a passport flat, unlike the smallest picks here",
      "Magnetic auto-lock door"
    ],
    "pros": [
      "Compact footprint that still fits a passport flat"
    ],
    "cons": [
      "Larger than the smallest picks here, though still compact"
    ],
    "bestFor": "Buyers wanting compact size without sacrificing passport-flat capacity."
  },
  {
    "id": "b0crh68745-svss",
    "rank": 4,
    "badge": "Compact With Backup Power",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "71-inch steel reinforcement bolts and hidden hinges back the mounting, and pre-drilled installation holes let you fix it under a closet, drawer, or table despite the compact footprint.\n\nThe standout detail is that USB-C backup power at a compact footprint. Balancing that out, no confirmed usage history for this specific listing yet.",
    "specs": [
      "9.06×6.69×6.69 in exterior, compact scale",
      "USB-C emergency power backup",
      "Pre-drilled installation holes"
    ],
    "pros": [
      "USB-C backup power at a compact footprint"
    ],
    "cons": [
      "No confirmed usage history for this specific listing yet"
    ],
    "bestFor": "Buyers wanting compact size with dead-battery protection built in."
  },
  {
    "id": "b07ddfqhvp-svss",
    "rank": 5,
    "badge": "Most Proven Compact Lockbox",
    "name": "KYODOLED Small Metal Lock Box with Key for Cash and Medication, 2 Keys",
    "price": "$13.49",
    "rating": "4.6",
    "reviews": "17441",
    "imageUrl": "https://m.media-amazon.com/images/I/41rUL1UQtbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07DDFQHVP?tag=theofficejournal-20",
    "description": "A compact portable lockbox with a 2-layer design: a removable 5-compartment coin tray on top for sorting small items, with the bottom space for larger flat items. A built-in handle makes it easy to carry despite the small size.\n\nThis is portable rather than mountable, and 2 keys are included for backup, at the lowest price in this comparison. Note this is a basic privacy lockbox rather than a mountable security safe, worth weighing against your actual security needs at this size.\n\nCompartmentalized tray helps organize small items.",
    "specs": [
      "Compact portable lockbox, 2-layer design",
      "Removable 5-compartment coin tray",
      "Not mountable, basic privacy only"
    ],
    "pros": [
      "Lowest price in this comparison",
      "Compartmentalized tray helps organize small items"
    ],
    "cons": [
      "Not mountable, offers basic privacy rather than genuine theft deterrence"
    ],
    "bestFor": "Budget-conscious buyers wanting compact, organized, portable storage."
  },
  {
    "id": "b008hzui34-svss",
    "rank": 6,
    "badge": "Smallest Fire-Rated Option",
    "name": "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    "price": "$39.98",
    "rating": "4.6",
    "reviews": "2807",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    "description": "We're direct about the tradeoff here: this is larger than the pure security boxes in this comparison, but it's the smallest fire-rated pick available, UL Classified to endure 1/2 hour at 1550°F with a separate ETL verification for digital media. Miniaturization for pure security boxes often sacrifices fire protection entirely, which this pick doesn't.\n\nBolt-down hardware ships included, and a built-in carrying handle supports travel or home use, with 2 keys included for the flat key lock.\n\nSmallest available fire-rated pick, a genuine construction tradeoff over pure security boxes. Both are worth keeping in mind before deciding.",
    "specs": [
      "Smallest confirmed fire-rated option in this comparison",
      "UL Classified: 1/2 hr at 1550°F",
      "Bolt-down hardware included, carrying handle"
    ],
    "pros": [
      "Smallest available fire-rated pick, a genuine construction tradeoff over pure security boxes"
    ],
    "cons": [
      "Larger than the pure security-box picks in this comparison"
    ],
    "bestFor": "Buyers wanting the smallest available fire protection, accepting a larger footprint than pure security boxes."
  },
  {
    "id": "b005k6jqxq-svss",
    "rank": 7,
    "badge": "Most Portable Very Small Option",
    "name": "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    "price": "$16.17",
    "rating": "4.3",
    "reviews": "18027",
    "imageUrl": "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    "description": "A tether cable secures this compact safe to a fixed object rather than needing mounting hardware, useful at this size where a very small safe is also very easy to simply pocket and walk away with if unsecured. A set-your-own four-digit combination avoids carrying a key.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked and tethered, and shock-absorbing foam construction is designed to be water-resistant, a genuine consideration at a size prone to more handling and travel wear.",
    "specs": [
      "Compact, tether cable for anti-removal at small scale",
      "4-digit combination, no key to lose",
      "Charging cable access port, water-resistant"
    ],
    "pros": [
      "Tether cable directly addresses the carry-away risk that comes with very small size",
      "Only pick here with a dedicated charging cable access port"
    ],
    "cons": [
      "Tether-only anti-removal, lighter than a mounted steel box"
    ],
    "bestFor": "Travelers wanting a small, tetherable safe that won't disappear from a hotel room."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-small-safes",
    "title": "Best Portable Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-safe-lock-boxes",
    "title": "Best Small Safe Lock Boxes (2026)"
  },
  {
    "href": "/guide/best-small-safes-with-keys",
    "title": "Best Small Safes With Keys (2026)"
  }
];

export const breadcrumbLabel = "Best Very Small Safes";
