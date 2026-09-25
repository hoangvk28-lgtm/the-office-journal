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
    "q": "What's the best portable safe for a hotel room?",
    "a": "The Master Lock Small Travel Safe with Cable, which tethers to a fixed object like a bed frame or luggage rack."
  },
  {
    "q": "Is there a portable safe rated for firearms?",
    "a": "Yes, the Amazon Basics Portable Security Case explicitly rates for firearms alongside cash, jewelry, and documents."
  },
  {
    "q": "Is there a portable option with genuine fire protection?",
    "a": "Yes, both SentrySafe picks here confirm UL fire classification alongside portable carrying handles."
  },
  {
    "q": "What's the lightest option for traveling with a lot of documents?",
    "a": "The DocSafe 5200°F Fireproof Document Organizer, a soft bag with extensive document-specific organization."
  },
  {
    "q": "Why does this list have 7 products instead of 8?",
    "a": "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data."
  }
];

export const guideSlug = "best-portable-small-safes";

export const guideTitle = "The Best Portable Small Safes for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg";

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
          ""
        ],
        [
          "",
          "Master Lock Small Travel Safe with Cable"
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
          "Master Lock Small Travel Safe with Cable"
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
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: Master Lock Small Travel Safe with Cable, Amazon Basics Portable Security Case Lock Box Safe with Combination Lock, SentrySafe Small Safe."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: Small Safe for Home, DocSafe 5200°F Fireproof Document Organizer Box with Lock, SentrySafe Fireproof Safe Box with Key Lock, SentrySafe Fireproof Safe with Key Lock."
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
          ""
        ],
        [
          "Theft deterrence only, no fire claim",
          "Master Lock Small Travel Safe with Cable"
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
        "text": "You just need basic theft deterrence for low-value items, where Master Lock Small Travel Safe with Cable covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Verified tether or carry-specific features rather than assuming portable means less secure",
    "description": "We checked for confirmed tether cables, carrying handles, and travel-specific details (like a suitcase-handle-compatible carry design) rather than treating every portable pick identically."
  },
  {
    "title": "Separated fire-rated portable safes from combination-lock-only travel boxes",
    "description": "Two picks here confirm genuine UL fire classification alongside portability; the lighter combination-lock boxes offer theft deterrence and convenience but no documented fire protection."
  },
  {
    "title": "Noted where a portable design also offers an optional anchor point",
    "description": "One pick includes reserved holes for optional wall or cabinet mounting despite its compact, semi-portable size, a genuine middle ground worth flagging."
  },
  {
    "title": "Excluded the inaccessible ASIN rather than fabricating its data",
    "description": "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing."
  }
];

export const introParagraphs = [
  "Portability trades off against anti-removal security by definition: a safe light enough to carry easily is also light enough for someone else to carry away. We compared confirmed tether options, carry handles, and travel-specific features across these picks rather than treating portable as automatically less secure without qualification.",
  "One original candidate ASIN was not accessible through the product catalog at research time, so we're presenting the 7 we could verify."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "portable small safes";

export const metaDescription = "How 7 portable small safes compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Portable Small Safes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b005k6jqxq-pss2",
    "rank": 1,
    "badge": "Best for Hotel/Rental Tethering",
    "name": "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    "price": "$16.17",
    "rating": "4.3",
    "reviews": "18027",
    "imageUrl": "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    "description": "A tether cable is the core of this portable design: secure it to a bed frame, radiator, or luggage rack in a hotel room rather than a permanent mount, addressing the exact tradeoff portable safes face. A set-your-own four-digit combination avoids carrying a key that could be lost while traveling.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked and cabled in place, and shock-absorbing foam construction is designed to be water-resistant for a bag or backpack during transit.\n\nOnly pick here with a dedicated charging cable access port.",
    "specs": [
      "Tether cable for hotel/rental anchoring",
      "4-digit combination, no key to lose",
      "Charging cable access port, water-resistant"
    ],
    "pros": [
      "Tether cable directly addresses the portability-versus-removal tradeoff",
      "Only pick here with a dedicated charging cable access port"
    ],
    "cons": [
      "Tether-only anti-removal, lighter than a fixed steel box"
    ],
    "bestFor": "Travelers wanting to secure valuables to a fixed object in a hotel room or rental."
  },
  {
    "id": "b077k1yh8z-pss2",
    "rank": 2,
    "badge": "Best for Broad Travel Item Coverage",
    "name": "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    "price": "$17.84",
    "rating": "4.4",
    "reviews": "9964",
    "imageUrl": "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077K1YH8Z?tag=theofficejournal-20",
    "description": "Anti-pry steel construction with a foam-padded interior is explicitly rated for cash, jewelry, documents, and firearms together, a broad travel-item scope. A zinc alloy combination lock avoids managing a physical key while moving between locations.\n\nSmall enough to store discreetly in a suitcase or vehicle, and lightweight for carrying, the compact design trades mounting capability entirely for ease of transport between a car, hotel, or temporary living situation.\n\nThe standout detail is that lightweight and easy to pack. Balancing that out, no tether or mounting option, purely portable.",
    "specs": [
      "Portable, anti-pry steel construction",
      "Foam-padded interior, explicitly rated for firearms",
      "Zinc alloy combination lock"
    ],
    "pros": [
      "Explicitly rated for a broad range of travel-relevant items including firearms",
      "lightweight and easy to pack"
    ],
    "cons": [
      "No tether or mounting option, purely portable"
    ],
    "bestFor": "Buyers wanting one lightweight case covering a wide range of travel valuables."
  },
  {
    "id": "b0fx2969y8-pss2",
    "rank": 3,
    "badge": "Best for Roommate/Shared-Space Deterrence",
    "name": "Small Safe for Home, 6.69\"H Safe Box with Fireproof Waterproof Bag",
    "price": "$34.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41L5x2i66HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX2969Y8?tag=theofficejournal-20",
    "description": "69\" H, this fits tiny apartment or dorm spaces, and reserved holes inside let you secure it in a concealed cabinet or on a wall, a middle ground between fully portable and fully mounted. A wrong password entered 3 times triggers a 60-second alarm with mute mode for discreet use, specifically framed by the manufacturer as a deterrent against roommates or guests.\n\nThree unlocking ways, keypad, key, and external battery case, mean no single point of failure if you're moving between locations frequently. Two steel lock bolts provide physical protection, though the safe body itself is not fireproof despite the included fireproof bag.\n\nReserved anchor holes offer optional semi-permanent security.",
    "specs": [
      "10.63×6.69×6.69 in, semi-portable with optional anchoring",
      "Alarm system with mute mode, explicitly for shared-space deterrence",
      "3 unlocking ways: keypad, key, external battery"
    ],
    "pros": [
      "Alarm deterrent specifically framed for roommate or guest access scenarios",
      "Reserved anchor holes offer optional semi-permanent security"
    ],
    "cons": [
      "Safe body itself is explicitly not fireproof"
    ],
    "bestFor": "Buyers in shared housing wanting a portable option with an active deterrent, not just a lock."
  },
  {
    "id": "b004lamjvi-pss2",
    "rank": 4,
    "badge": "Best Compact Travel Tether",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "A resettable three-digit combination provides keyless convenience with no batteries, useful for portable use where you don't want to track a physical key. A tethering cable secures it to a fixed object, explicitly marketed for campus, coffee shops, or office use, settings where you're not the one controlling the walls.\n\n0\" D exterior, solid steel construction handles compact items like keys, cash, credit cards, and USB drives, small enough to travel in a bag.\n\nBoth are worth keeping in mind before deciding.",
    "specs": [
      "Resettable 3-digit combination, no batteries",
      "Tethering cable for public/shared spaces",
      "Compact-item sized, solid steel"
    ],
    "pros": [
      "Purpose-built for public and semi-public spaces (campus, coffee shops)",
      "No-battery mechanical reliability"
    ],
    "cons": [
      "Small interior, compact items only"
    ],
    "bestFor": "Students or remote workers needing a compact tetherable safe in public spaces."
  },
  {
    "id": "b0crr524vk-pss2",
    "rank": 5,
    "badge": "Best for Travel Document Bulk",
    "name": "DocSafe 5200°F Fireproof Document Organizer Box with Lock, Heat Insulated",
    "price": "$31.33",
    "rating": "4.5",
    "reviews": "312",
    "imageUrl": "https://m.media-amazon.com/images/I/51xzFNOAeLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRR524VK?tag=theofficejournal-20",
    "description": "A soft-bag design is lighter and easier to pack than any steel safe in this comparison, with a strong handle specifically designed to insert into a suitcase handle sleeve for travel. Waterproof zippers seal the bag closed with a combination lock.\n\nInternal organization includes 8 passport mesh bags, 16 card slots, 4 USB drive pockets, and 7 folder layers, the most travel-document-specific organization here, useful if you're carrying passports, cards, and files together while moving.",
    "specs": [
      "Soft bag, suitcase-handle-compatible carry design",
      "8 passport bags, 16 card slots, 4 USB pockets, 7 folder layers",
      "Waterproof zippers, combination lock"
    ],
    "pros": [
      "Lightest, most travel-packable design in this comparison",
      "Most extensive document-specific organization for travel"
    ],
    "cons": [
      "Soft bag construction offers less physical impact resistance than a steel box"
    ],
    "bestFor": "Travelers carrying a large volume of documents, cards, and files who want organized, lightweight portability."
  },
  {
    "id": "b008nhkwzu-pss2",
    "rank": 6,
    "badge": "Best Portable Fire Protection",
    "name": "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    "price": "See listing",
    "rating": "4.6",
    "reviews": "22264",
    "imageUrl": "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    "description": "Built-in carrying grips make this portable while still delivering UL classified fire endurance at 1550°F for documents, unlike the lighter-duty combination lock boxes here. A separate ETL verification covers digital media specifically.\n\nA privacy key lock (2 keys included) prevents unauthorized access, and a lifetime after-fire replacement guarantee backs the safe directly, a meaningful assurance for a portable safe you might be relying on during an actual emergency.\n\nThat said, heavier than the lighter combination-lock travel boxes here.",
    "specs": [
      "Carrying grips, UL Classified: 1/2 hr at 1550°F",
      "ETL Verified for digital media",
      "Lifetime after-fire replacement guarantee"
    ],
    "pros": [
      "Only portable-friendly pick here with a genuine fire classification",
      "Lifetime after-fire replacement guarantee"
    ],
    "cons": [
      "Heavier than the lighter combination-lock travel boxes here"
    ],
    "bestFor": "Buyers wanting portable fire protection, not just theft deterrence, for documents on the move."
  },
  {
    "id": "b008hzui34-pss2",
    "rank": 7,
    "badge": "Best Portable Fire Protection With Bolt-Down Option",
    "name": "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    "price": "$39.98",
    "rating": "4.6",
    "reviews": "2807",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    "description": "This is explicitly marketed for both home and travel use, with a built-in carrying handle for portability and bolt-down hardware included for when it's staying put at home instead. UL Classified fire endurance and ETL digital-media verification match the sibling SentrySafe pick above.\n\nA flat key lock design specifically prevents the lid from opening during a fire, with 2 keys included, useful whether this safe is traveling with you or anchored at home for a season.",
    "specs": [
      "Carrying handle + bolt-down hardware for dual use",
      "UL Classified: 1/2 hr at 1550°F",
      "2 keys included"
    ],
    "pros": [
      "Only pick here offering both genuine portability AND a bolt-down option for the same unit"
    ],
    "cons": [
      "Heavier than the lighter combination-lock travel boxes here"
    ],
    "bestFor": "Buyers wanting one safe that moves between traveling and anchored home use."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safe-lock-boxes",
    "title": "Best Small Safe Lock Boxes (2026)"
  },
  {
    "href": "/guide/best-personal-small-safes",
    "title": "Best Personal Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-for-dorm-rooms",
    "title": "Best Small Safes for Dorm Rooms (2026)"
  }
];

export const breadcrumbLabel = "Best Portable Small Safes";
