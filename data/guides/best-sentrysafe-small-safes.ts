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
    "q": "Are all eight picks in this comparison actually SentrySafe products?",
    "a": "No, only five are genuine SentrySafe models. Three (marked clearly) are Bonsaii and Yuanshikj products included honestly for comparison."
  },
  {
    "q": "What's the best genuine SentrySafe model overall?",
    "a": "The SentrySafe Fireproof Safe Box with Key Lock, with the most explicitly documented fire certification and a lifetime after-fire replacement guarantee."
  },
  {
    "q": "Does SentrySafe make a digital keypad model?",
    "a": "Yes, the SentrySafe Shelf Safe with Digital Keypad Lock, though it's explicitly not fireproof and is California DOJ certified as a gun safe instead."
  },
  {
    "q": "Is there a genuine SentrySafe option with no batteries needed?",
    "a": "Yes, the SentrySafe Small Safe with Combination Lock uses a resettable three-digit mechanical combination requiring no batteries."
  },
  {
    "q": "Why include non-SentrySafe products in a SentrySafe guide?",
    "a": ""
  }
];

export const guideSlug = "best-sentrysafe-small-safes";

export const guideTitle = "Best SentrySafe Small Safes: An Honest Guide";

export const heroImage = "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
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
          "SentrySafe Fireproof Safe Box with Key Lock"
        ],
        [
          "",
          "SentrySafe Shelf Safe with Digital Keypad Lock"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: SentrySafe Black Fireproof and Waterproof Safe, SentrySafe Fireproof Safe with Key Lock."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Fireproof Safe Box with Key Lock, SentrySafe Shelf Safe with Digital Keypad Lock, SentrySafe Small Safe, Bonsaii Safe Box with Electronic Keypad for Home Office, Yuanshikj Small Steel Security Safe Box with Keypad, Bonsaii Small Safe Box with Electronic Keypad for Valuables."
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
        "text": "You're storing valuable or irreplaceable items, where SentrySafe Shelf Safe with Digital Keypad Lock's higher price buys real security or fire-protection headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need basic theft deterrence for low-value items, where SentrySafe Fireproof Safe Box with Key Lock covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Verified brand before including any pick in a SentrySafe-specific guide",
    "description": "Three of our eight original candidate ASINs turned out to be Bonsaii or Yuanshikj products, not SentrySafe. We disclosed this directly rather than presenting all eight as genuine SentrySafe models."
  },
  {
    "title": "Mapped the genuine SentrySafe lineup by protection category",
    "description": "SentrySafe's current small-safe range spans fireproof chests, a hanging-file document box, a digital keypad shelf safe, and a compact combination lock box. We grouped the five confirmed picks by these categories rather than one undifferentiated ranking."
  },
  {
    "title": "Compared the non-SentrySafe alternatives on their own merits",
    "description": ""
  },
  {
    "title": "Verified fire, water, and gun-safe certifications specifically for each genuine SentrySafe model",
    "description": "We checked UL/ETL classifications and California DOJ gun-safe certification individually per model rather than assuming brand-wide consistency."
  }
];

export const introParagraphs = [
  "We need to be direct here: three of our eight original candidate ASINs are not SentrySafe products at all, they're from Bonsaii and Yuanshikj. We're presenting the 5 genuine SentrySafe models first, mapped by protection category, and disclosing the other three honestly rather than including them under a SentrySafe brand guide they don't belong to.",
  "SentrySafe's current small-safe lineup spans fireproof chest safes, a hanging-file document box, and a digital keypad shelf safe, so we grouped the 5 genuine picks by category rather than ranking them on one undifferentiated scale."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "SentrySafe small safes";

export const metaDescription = "Honest finding: only 5 of our 8 candidate ASINs are actually SentrySafe products. We map the genuine current SentrySafe lineup and disclose the mismatch.";

export const metaTitle = "Best SentrySafe Small Safes (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b008nhkwzu-sss",
    "rank": 1,
    "badge": "Best Overall, Most Documented Fire Rating",
    "name": "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    "price": "See listing",
    "rating": "4.6",
    "reviews": "22264",
    "imageUrl": "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    "description": "UL classified for fire endurance at 1/2 hour at 1550°F for documents, with a separate ETL verification for digital media like CDs, DVDs, and memory sticks, two distinct certifications SentrySafe documents independently. A lifetime after-fire replacement guarantee backs the claim directly, a genuine brand-specific assurance.\n\nA privacy key lock (2 keys included) specifically prevents the lid from opening during a fire event, and built-in carrying grips make it portable during an evacuation.\n\nLifetime after-fire replacement guarantee, a genuine brand assurance.",
    "specs": [
      "UL classified: 1/2 hr at 1550°F (documents)",
      "ETL verified: digital media protection",
      "Lifetime after-fire replacement guarantee"
    ],
    "pros": [
      "Most explicitly documented fire certification in SentrySafe's current small-safe lineup",
      "Lifetime after-fire replacement guarantee, a genuine brand assurance"
    ],
    "cons": [
      "Key lock only, no digital keypad option"
    ],
    "bestFor": "Buyers wanting SentrySafe's most rigorously certified fire protection."
  },
  {
    "id": "b00ge57dfk-sss",
    "rank": 2,
    "badge": "Best for Hanging File Documents",
    "name": "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    "price": "$67.99",
    "rating": "4.5",
    "reviews": "14963",
    "imageUrl": "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00GE57DFK?tag=theofficejournal-20",
    "description": "The only SentrySafe model in this comparison specifically organized for hanging file folders, a genuine organizational advantage. UL Classified to withstand high temperatures for up to 30 minutes and separately ETL Verified to protect contents during water exposure, both hazards independently documented.\n\nA durable key lock (2 keys included) prevents unauthorized access, and the compact footprint fits a closet or under a desk while remaining portable enough to relocate during an emergency.\n\nThe standout detail is that independently documented fire AND water protection. Balancing that out, higher price than the basic chest options.",
    "specs": [
      "Hanging file folder capacity, key lock",
      "UL Classified fire + ETL Verified water protection",
      "2 keys included"
    ],
    "pros": [
      "Only current SentrySafe model here organized for hanging file folders",
      "Independently documented fire AND water protection"
    ],
    "cons": [
      "Higher price than the basic chest options"
    ],
    "bestFor": "Buyers wanting SentrySafe's hanging-folder document organization with dual fire/water protection."
  },
  {
    "id": "b008hzui34-sss",
    "rank": 3,
    "badge": "Best for Travel Portability",
    "name": "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    "price": "$39.98",
    "rating": "4.6",
    "reviews": "2807",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    "description": "UL Classified to endure 1/2 hour at 1550°F and separately ETL Verified for CDs, DVDs, and USBs, with a flat key lock design preventing the lid from opening during a fire. Bolt-down hardware ships included, letting you anchor it at home rather than leaving it portable only.\n\nA built-in carrying handle explicitly supports travel or home portability, useful for a SentrySafe model that needs to move between locations while keeping the same key-lock access.\n\nCarrying handle for genuine travel portability.",
    "specs": [
      "UL Classified: 1/2 hr at 1550°F",
      "Bolt-down hardware included, carrying handle",
      "2 keys included"
    ],
    "pros": [
      "Bolt-down hardware included for at-home anchoring",
      "Carrying handle for genuine travel portability"
    ],
    "cons": [
      "No digital keypad, key-only access"
    ],
    "bestFor": "Buyers wanting one SentrySafe model that works both anchored at home and while traveling."
  },
  {
    "id": "b000z8r73u-sss",
    "rank": 4,
    "badge": "Best Digital Keypad SentrySafe",
    "name": "SentrySafe Shelf Safe with Digital Keypad Lock, Steel Safe with Interior Light",
    "price": "$101.96",
    "rating": "4.4",
    "reviews": "3891",
    "imageUrl": "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000Z8R73U?tag=theofficejournal-20",
    "description": "The only SentrySafe model in this comparison with a digital keypad rather than a key lock, plus a confirmed interior light, useful for dim closet or shelf placement. This is directly stated as not a fireproof or waterproof safe, a basic security safe with two live-locking bolts and bolt-down hardware.\n\n9\"), it fits laptops alongside cash and small valuables, and it's California DOJ certified as a gun safe, a distinct credential from the fire-rated chest safes above.\n\nWidest interior, fits a laptop alongside documents. Both are worth keeping in mind before deciding.",
    "specs": [
      "Digital keypad, confirmed interior light",
      "0.78 cu ft, widest interior in this comparison",
      "CA DOJ certified gun safe, NOT fireproof"
    ],
    "pros": [
      "Only SentrySafe pick here with a digital keypad and confirmed interior light",
      "Widest interior, fits a laptop alongside documents"
    ],
    "cons": [
      "Explicitly not fireproof or waterproof",
      "Highest price among the genuine SentrySafe picks here"
    ],
    "bestFor": "Buyers wanting SentrySafe's keypad-accessed model with laptop-sized storage."
  },
  {
    "id": "b004lamjvi-sss",
    "rank": 5,
    "badge": "Most Compact, Tetherable SentrySafe",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "A resettable three-digit mechanical combination offers keyless, no-battery convenience, and a tethering cable secures it to a fixed object, explicitly marketed by SentrySafe for campus, coffee shop, or office use rather than permanent installation. Solid steel construction backs the physical protection.\n\n6\" interior), this is SentrySafe's most portable small model, sized for compact items like keys, cash, credit cards, and USB drives.",
    "specs": [
      "Resettable 3-digit mechanical combination, no batteries",
      "Tethering cable, most portable SentrySafe model here",
      "Compact-item sized (2.6×5.9×8.0 in exterior)"
    ],
    "pros": [
      "Genuine mechanical combination, zero battery dependency",
      "SentrySafe's most portable and lowest-priced current small model here"
    ],
    "cons": [
      "Smallest interior among the genuine SentrySafe picks here"
    ],
    "bestFor": "Students or office workers wanting SentrySafe's compact, tetherable, no-battery option."
  },
  {
    "id": "b0ckpf8gf9-sss",
    "rank": 6,
    "badge": "Not SentrySafe: Bonsaii Alternative",
    "name": "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    "price": "$52.24",
    "rating": "4.6",
    "reviews": "1326",
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    "description": "We're disclosing this honestly: this is a Bonsaii product, not SentrySafe, included here since it surfaced in our research alongside genuine SentrySafe candidates. 6 cu ft) than any genuine SentrySafe model here, with a removable shelf and three access methods including USB-C emergency power.\n\nIf you specifically want the SentrySafe brand, choose from the five genuine picks above instead; this is a reasonable alternative if brand isn't the deciding factor.\n\nLarger capacity than any genuine SentrySafe model here. That said, not actually a SentrySafe product despite appearing in this research.",
    "specs": [
      "Not a SentrySafe product, Bonsaii brand",
      "0.6 cu ft, largest capacity in this comparison",
      "3 access methods including USB-C backup"
    ],
    "pros": [
      "Larger capacity than any genuine SentrySafe model here"
    ],
    "cons": [
      "Not actually a SentrySafe product despite appearing in this research"
    ],
    "bestFor": "Buyers open to a non-SentrySafe brand for more capacity or USB-C backup power."
  },
  {
    "id": "b078myjyd5-sss",
    "rank": 7,
    "badge": "Not SentrySafe: Yuanshikj Alternative",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "Also disclosed honestly: this is a Yuanshikj product, not SentrySafe. A magnetic auto-locking door and reinforced solid steel construction back the security, at the lowest price in this entire comparison.\n\nIf brand specifically matters, the SentrySafe Small Safe with Combination Lock above is the closest genuine SentrySafe alternative at a similar price point.",
    "specs": [
      "Not a SentrySafe product, Yuanshikj brand",
      "Lowest price in this comparison",
      "Magnetic auto-lock door"
    ],
    "pros": [
      "Lowest price in this comparison"
    ],
    "cons": [
      "Not actually a SentrySafe product despite appearing in this research"
    ],
    "bestFor": "Budget-conscious buyers open to a non-SentrySafe brand."
  },
  {
    "id": "b0crh68745-sss",
    "rank": 8,
    "badge": "Not SentrySafe: Bonsaii Compact Alternative",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "Also not SentrySafe, a compact Bonsaii model with the same USB-C emergency power backup as its larger sibling above. 71-inch steel reinforcement bolts and hidden hinges back the mounting.\n\nWe're including it here purely for honest comparison against the SentrySafe SentrySafe Small Safe with Combination Lock, which occupies a similar compact-and-affordable niche within the genuine SentrySafe lineup.\n\nUSB-C emergency power backup, a feature no genuine SentrySafe pick here confirms.",
    "specs": [
      "Not a SentrySafe product, Bonsaii brand",
      "USB-C emergency power backup",
      "0.23 cu ft, compact footprint"
    ],
    "pros": [
      "USB-C emergency power backup, a feature no genuine SentrySafe pick here confirms"
    ],
    "cons": [
      "Not actually a SentrySafe product despite appearing in this research"
    ],
    "bestFor": "Buyers open to a non-SentrySafe brand specifically for USB-C dead-battery backup."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-honeywell-small-safes",
    "title": "Best Honeywell Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-fireproof-safes",
    "title": "Best Small Fireproof Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-with-keypads",
    "title": "Best Small Safes With Keypads (2026)"
  }
];
