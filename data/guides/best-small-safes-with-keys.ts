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
    "q": "What's the best overall key-only safe?",
    "a": "The Bonsaii Security Safe Box with Key Lock, with explicit spare-key storage guidance and pry-resistant construction."
  },
  {
    "q": "Which key-lock safe organizes cash the best?",
    "a": "The KYODOLED Small Metal Lock Box, with a removable 5-compartment coin tray, at the lowest price in this comparison."
  },
  {
    "q": "Are any picks here actually combination locks, not physical keys?",
    "a": "Yes, the DocSafe Fireproof Document Organizer and the SentrySafe Small Safe with Combination Lock both use combination locks rather than physical keys, disclosed here for transparency."
  },
  {
    "q": "What should I do with the spare key?",
    "a": "Store it somewhere separate from the safe itself, never taped to or stored inside the safe, which defeats the purpose of the lock."
  },
  {
    "q": "Is there a fire-rated safe with a key lock?",
    "a": "Yes, several SentrySafe picks here use a key lock specifically engineered to keep the lid shut during a fire event, alongside UL fire classification."
  }
];

export const guideSlug = "best-small-safes-with-keys";

export const guideTitle = "The Best Small Safes With Keys, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/51iNMIzAY4L._SL500_.jpg";

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
          "SentrySafe Fireproof Safe Box with Key Lock"
        ],
        [
          "",
          "SentrySafe Fireproof Safe with Key Lock"
        ],
        [
          "",
          "SentrySafe Fireproof Safe Box with Key Lock"
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
          "SentrySafe Black Fireproof and Waterproof Safe"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: Bonsaii Security Safe Box with Key Lock, Yuanshikj Steel Small Safe Lock Box with Key Security, KYODOLED Small Metal Lock Box with Key for Cash and Medication, SentrySafe Black Fireproof and Waterproof Safe, DocSafe 5200°F Fireproof Document Organizer Box with Lock, SentrySafe Small Safe."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Fireproof Safe Box with Key Lock, SentrySafe Fireproof Safe with Key Lock."
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
          "SentrySafe Fireproof Safe Box with Key Lock"
        ],
        [
          "Theft deterrence only, no fire claim",
          "Bonsaii Security Safe Box with Key Lock"
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
        "text": "You're storing valuable or irreplaceable items, where SentrySafe Black Fireproof and Waterproof Safe's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Distinguished genuine physical-key locks from combination locks in this search category",
    "description": "Two picks here surfaced in a key-lock search but actually use a combination lock, not a physical key. We disclosed this honestly rather than blending them into a key-only ranking."
  },
  {
    "title": "Separated theft-deterrent key locks from fire-safety key locks",
    "description": "Several key locks here are specifically engineered to keep a safe's lid shut during a fire event, a different purpose from a security box's theft-deterrent key lock, though both use the same mechanism."
  },
  {
    "title": "Checked spare-key guidance and included key count",
    "description": "We noted where a listing explicitly recommends storing the spare key separately, and confirmed how many keys ship in the box (typically 2)."
  },
  {
    "title": "Compared portable versus mountable key-lock designs",
    "description": "Some picks here are portable cash boxes; others include mounting hardware for fixed installation. We flagged this distinction directly."
  }
];

export const introParagraphs = [
  "A key-only lock avoids battery dependency entirely, but it shifts the reliability question to key custody: where you keep the spare, how exposed the keyway is, and what happens if you lose the only copy. We compared confirmed key-count, spare-key availability, and physical lock construction across these picks rather than treating key access as a single undifferentiated feature.",
  "Several picks here are fire-rated chest safes with key locks specifically to keep the lid closed during a fire event, a distinct engineering purpose from a security-box key lock meant to deter theft."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safes with keys";

export const metaDescription = "We compared 8 small safes with keys on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Small Safes With Keys (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0crh4r471-sswk",
    "rank": 1,
    "badge": "Best Overall Key-Only Security Box",
    "name": "Bonsaii Security Safe Box with Key Lock, 0.23 Cu.Ft for Cash Jewelry Home",
    "price": "$29.99",
    "rating": "4.5",
    "reviews": "612",
    "imageUrl": "https://m.media-amazon.com/images/I/51iNMIzAY4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH4R471?tag=theofficejournal-20",
    "description": "Durable SPCC steel with a pry-resistant door and hidden hinges keeps unwanted viewers out, and a classic flat-key design is simple to use, insert, turn, done, with no code to remember or batteries to replace. The listing directly advises storing the spare key in a separate location from the safe itself.\n\n61\" interior), pre-drilled installation holes on the back and bottom let you mount it under a closet, drawer, or table for genuine anti-removal security.\n\nSimple flat-key design with no code or batteries to manage. Both are worth keeping in mind before deciding.",
    "specs": [
      "0.23 cu ft, mountable, flat-key lock design",
      "Pry-resistant door, hidden hinges",
      "Explicit spare-key storage guidance"
    ],
    "pros": [
      "Explicit guidance to store the spare key separately from the safe",
      "Simple flat-key design with no code or batteries to manage"
    ],
    "cons": [
      "Key-only, no digital backup access method"
    ],
    "bestFor": "Buyers wanting the simplest reliable key-only security box."
  },
  {
    "id": "b0f2931wmq-sswk",
    "rank": 2,
    "badge": "Best Versatile Placement",
    "name": "Yuanshikj Steel Small Safe Lock Box with Key Security, 0.23 Cu Ft, Black",
    "price": "$22.99",
    "rating": "4.4",
    "reviews": "389",
    "imageUrl": "https://m.media-amazon.com/images/I/31MabNsZGWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F2931WMQ?tag=theofficejournal-20",
    "description": "The listing directly recommends locking the door promptly after storing items, a small but practical reminder for a key-only design where there's no auto-lock feature to fall back on. High-strength steel with scratch-resistant, stain-resistant powder coating protects against damage and rust.\n\n3\" interior), versatile for either fixed or portable use.",
    "specs": [
      "0.23 cu ft, wall/floor/cabinet mountable OR portable",
      "2 unique keys included",
      "Scratch and stain-resistant powder coating"
    ],
    "pros": [
      "versatile between fixed mounting and portable cash-box use"
    ],
    "cons": [
      "No auto-lock feature, requires manually locking after each use"
    ],
    "bestFor": "Buyers wanting the flexibility to mount it or carry it as a portable cash box."
  },
  {
    "id": "b07ddfqhvp-sswk",
    "rank": 3,
    "badge": "Best for Cash Organization",
    "name": "KYODOLED Small Metal Lock Box with Key for Cash and Medication, 2 Keys",
    "price": "$13.49",
    "rating": "4.6",
    "reviews": "17441",
    "imageUrl": "https://m.media-amazon.com/images/I/41rUL1UQtbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07DDFQHVP?tag=theofficejournal-20",
    "description": "A 2-layer design specifically organizes what you're storing: the upper removable tray has 5 compartments for sorting coins and small bills, while the bottom space holds checks, receipts, or larger bills. Remove the tray entirely for extra room when needed.\n\n2 keys ship included for backup use so losing one isn't catastrophic, and a built-in handle makes this a portable box rather than a fixed installation, at the lowest price in this entire comparison.\n\nLowest price in this comparison by a wide margin. That said, portable design, not mountable for anti-removal security.",
    "specs": [
      "Portable, 2-layer design with removable 5-compartment coin tray",
      "2 keys included for backup",
      "Built-in carry handle"
    ],
    "pros": [
      "Best cash-specific organization of any key-lock pick here",
      "Lowest price in this comparison by a wide margin"
    ],
    "cons": [
      "Portable design, not mountable for anti-removal security"
    ],
    "bestFor": "Buyers wanting organized, portable cash storage at the lowest price here."
  },
  {
    "id": "b008nhkwzu-sswk",
    "rank": 4,
    "badge": "Best Fire-Rated Key Lock",
    "name": "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    "price": "See listing",
    "rating": "4.6",
    "reviews": "22264",
    "imageUrl": "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    "description": "This key lock serves a distinct purpose beyond theft deterrence: it specifically prevents the lid from opening in the event of a fire, working alongside a UL classification for 30-minute fire endurance at 1550°F. A separate ETL verification covers digital media like CDs and USB drives.\n\nTwo keys are included, and a lifetime after-fire replacement guarantee backs the safe directly. Built-in carrying grips assist portability, useful if you need to grab this safe during an evacuation.",
    "specs": [
      "Key lock specifically prevents lid opening during fire",
      "UL Classified: 1/2 hr at 1550°F",
      "Lifetime after-fire replacement guarantee, 2 keys included"
    ],
    "pros": [
      "Key lock engineered specifically to stay closed during a fire event, not just deter theft",
      "Lifetime after-fire replacement guarantee"
    ],
    "cons": [
      "No digital keypad alternative if you'd prefer code access"
    ],
    "bestFor": "Buyers wanting a fire-rated safe where the key lock's job is staying shut during a fire."
  },
  {
    "id": "b008hzui34-sswk",
    "rank": 5,
    "badge": "Best for Travel Key Lock",
    "name": "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    "price": "$39.98",
    "rating": "4.6",
    "reviews": "2807",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    "description": "A flat key lock design specifically prevents the lid from opening during a fire event, with the same UL classification and ETL digital-media verification as SentrySafe's other chest safes.\n\nBolt-down hardware ships in the box for at-home anchoring, and a built-in carrying handle explicitly supports travel use, letting the key-locked safe move between a home and a trip while keeping the same physical key access throughout.\n\nBolt-down hardware plus travel handle covers both fixed and portable key-lock use.",
    "specs": [
      "Flat key lock, UL Classified: 1/2 hr at 1550°F",
      "Bolt-down hardware included, carrying handle",
      "2 keys included"
    ],
    "pros": [
      "Bolt-down hardware plus travel handle covers both fixed and portable key-lock use"
    ],
    "cons": [
      "No digital keypad alternative"
    ],
    "bestFor": "Buyers wanting one key-locked safe that works both at home and while traveling."
  },
  {
    "id": "b00ge57dfk-sswk",
    "rank": 6,
    "badge": "Best for Hanging File Key Storage",
    "name": "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    "price": "$67.99",
    "rating": "4.5",
    "reviews": "14963",
    "imageUrl": "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00GE57DFK?tag=theofficejournal-20",
    "description": "A durable key lock keeps the lid securely closed during a fire event specifically, on a safe whose interior is organized for hanging file folders, a real organizational advantage over the more basic key-lock chests here. UL Classified fire protection pairs with separate ETL water-resistance verification.\n\nTwo keys are included, and the compact footprint fits a closet or under a desk while remaining portable enough to relocate, at the highest price among the key-lock picks in this comparison.\n\nThe standout detail is that independently documented fire AND water protection. Balancing that out, highest price among the key-lock picks here.",
    "specs": [
      "Hanging file folder capacity, key lock",
      "UL Classified fire + ETL Verified water protection",
      "2 keys included"
    ],
    "pros": [
      "Only key-lock pick here specifically organized for hanging file folders",
      "Independently documented fire AND water protection"
    ],
    "cons": [
      "Highest price among the key-lock picks here"
    ],
    "bestFor": "Buyers wanting key-locked, hanging-folder document organization with dual fire/water protection."
  },
  {
    "id": "b0crr524vk-sswk",
    "rank": 7,
    "badge": "Combination Lock, Not Key-Only",
    "name": "DocSafe 5200°F Fireproof Document Organizer Box with Lock, Heat Insulated",
    "price": "$31.33",
    "rating": "4.5",
    "reviews": "312",
    "imageUrl": "https://m.media-amazon.com/images/I/51xzFNOAeLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRR524VK?tag=theofficejournal-20",
    "description": "We're disclosing this honestly: this actually uses a combination password lock rather than a physical key, included here since document-organizer searches surface it alongside key-lock options. Made of thickened silicone-coated fireproof cotton with 8 layers, claimed to withstand up to 5200°F.\n\nThe soft-bag interior includes 8 passport mesh bags, 16 card slots, 4 USB drive pockets, and 7 folder layers, extensive organization no key-lock steel box here matches, closed with waterproof zippers rated for a high-speed fire hose spray.\n\nExtensive document organization unmatched by the key-lock steel boxes here.",
    "specs": [
      "Combination lock, NOT a physical key",
      "Claimed 5200°F fire resistance, soft bag construction",
      "8 passport bags, 16 card slots, 4 USB pockets, 7 folder layers"
    ],
    "pros": [
      "Extensive document organization unmatched by the key-lock steel boxes here"
    ],
    "cons": [
      "Uses a combination lock, not an actual physical key, despite surfacing in this search category"
    ],
    "bestFor": "Buyers wanting extensive document organization who are open to a combination lock instead of a key."
  },
  {
    "id": "b004lamjvi-sswk",
    "rank": 8,
    "badge": "Combination Lock, Not Key-Only (Tethered)",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "Also honestly disclosed: this uses a resettable three-digit mechanical combination, not a physical key, though it shares the key-free reliability advantage of no batteries needed. A tethering cable secures it to a fixed object for campus, coffee shop, or office use.\n\n0\" D exterior, best suited to compact items like keys, cash, credit cards, and USB drives.\n\nNo-battery mechanical reliability, similar advantage to a key-only design. Both are worth keeping in mind before deciding.",
    "specs": [
      "Resettable 3-digit combination, NOT a physical key",
      "Tethering cable, solid steel construction",
      "Compact-item sized (2.6×5.9×8.0 in exterior)"
    ],
    "pros": [
      "No-battery mechanical reliability, similar advantage to a key-only design"
    ],
    "cons": [
      "Uses a mechanical combination, not an actual physical key, despite surfacing in this search category"
    ],
    "bestFor": "Buyers wanting no-battery reliability without managing a physical key, in a compact tethered box."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-combination-small-safes",
    "title": "Best Combination Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-safe-lock-boxes",
    "title": "Best Small Safe Lock Boxes (2026)"
  },
  {
    "href": "/guide/best-small-fireproof-safes",
    "title": "Best Small Fireproof Safes (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safes With Keys";
