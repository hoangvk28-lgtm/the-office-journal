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
    "q": "Which picks here are mechanical, no batteries needed?",
    "a": "Only 3: the Master Lock Small Travel Safe, the Amazon Basics Portable Security Case, and the SentrySafe Small Safe with Combination Lock."
  },
  {
    "q": "Are the rest of the picks not really combination locks?",
    "a": "They use digital keypads, which function similarly by entering a numeric code, but require batteries rather than a mechanical dial. We labeled this distinction directly."
  },
  {
    "q": "Is there a mechanical option with a tether cable for travel?",
    "a": "Yes, the Master Lock Small Travel Safe with Cable."
  },
  {
    "q": "Which digital keypad pick warns before the battery dies?",
    "a": "The Voncabay Money Safe Box specifically includes a low-battery warning light."
  },
  {
    "q": "Is there a mechanical pick suitable for a full range of valuables including firearms?",
    "a": "Yes, the Amazon Basics Portable Security Case explicitly rates for firearms alongside cash, jewelry, and documents, with a genuine mechanical combination lock."
  }
];

export const guideSlug = "best-combination-small-safes";

export const guideTitle = "The Best Combination Small Safes for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg";

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
          "Voncabay Money Safe Box for Home with Digital Keypad"
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
          "Master Lock Small Travel Safe with Cable"
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Master Lock Small Travel Safe with Cable",
        "text": ""
      },
      {
        "label": "",
        "text": "The higher-priced option, worth it if it offers real feature headroom above the cheaper pick."
      }
    ],
    "note": "Default to Master Lock Small Travel Safe with Cable unless your specific needs call for the pricier pick's extra features."
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
          "Voncabay Money Safe Box for Home with Digital Keypad"
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
        "text": "You're storing valuable or irreplaceable items, where Small Safe for Home's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Distinguished true mechanical combination locks from digital keypads honestly",
    "description": "Only 3 of our 8 confirmed picks use a genuine mechanical dial or button combination with zero battery dependency. We labeled the other 5 clearly as digital keypad designs, even though both function via entering a numeric code."
  },
  {
    "title": "Verified no-battery reliability specifically for the mechanical picks",
    "description": "The Master Lock, Amazon Basics, and SentrySafe combination picks require no batteries at all, a genuine reliability advantage we confirmed directly from their described mechanism."
  },
  {
    "title": "Noted electronic-specific advantages the digital keypad picks offer in exchange",
    "description": "Several digital keypad picks offer features a mechanical lock can't, like multi-code support, low-battery warnings, or alarm deterrents, which we weighed as a real tradeoff, not just a downside."
  },
  {
    "title": "Checked dead-battery recovery paths specifically for the digital keypad picks",
    "description": "Since 5 of 8 picks require batteries, we verified whether each confirms a key backup or external power option for when those batteries fail."
  }
];

export const introParagraphs = [
  "We need to be direct here: combination safe searches surface a mix of true mechanical dial or button locks and digital electronic keypads, and they're not the same mechanism. Of our 8 confirmed picks, only 3 use a genuine mechanical combination lock, no batteries required. We're disclosing this split rather than presenting all 8 as mechanical.",
  "For buyers who specifically want no-battery reliability, we're flagging the 3 true mechanical picks clearly, and for the 5 digital keypad picks, we're noting they function similarly but do require batteries."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "combination small safes";

export const metaDescription = "How 8 combination small safes compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Combination Small Safes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b005k6jqxq-css",
    "rank": 1,
    "badge": "Best True Mechanical Combination (Travel)",
    "name": "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    "price": "$16.17",
    "rating": "4.3",
    "reviews": "18027",
    "imageUrl": "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    "description": "This is a genuine mechanical combination, set-your-own four-digit combination with no batteries required, from Master Lock, a brand specializing in mechanical locking hardware. A tether cable secures it to a fixed object rather than mounting hardware.\n\nA dedicated ear bud or charging cable access port lets you charge devices while locked inside, and shock-absorbing foam construction is designed to be water-resistant, useful for travel where a dead battery would otherwise be a real risk.\n\nTether cable specifically fits travel and dorm settings.",
    "specs": [
      "True mechanical 4-digit combination, no batteries",
      "Tether cable (not mountable)",
      "Charging cable access port, water-resistant"
    ],
    "pros": [
      "Genuine mechanical combination, zero battery dependency",
      "Tether cable specifically fits travel and dorm settings"
    ],
    "cons": [
      "Tether-only anti-removal, not mounted like a fixed steel box"
    ],
    "bestFor": "Travelers wanting a genuine no-battery mechanical combination lock."
  },
  {
    "id": "b077k1yh8z-css",
    "rank": 2,
    "badge": "Best True Mechanical Combination (Portable)",
    "name": "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    "price": "$17.84",
    "rating": "4.4",
    "reviews": "9964",
    "imageUrl": "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077K1YH8Z?tag=theofficejournal-20",
    "description": "A zinc alloy combination lock provides the second genuine mechanical, no-battery locking mechanism in this comparison, paired with anti-pry steel construction and a foam-padded interior. Explicitly rated for cash, jewelry, documents, and firearms together.\n\nSmall enough to store discreetly and portable for travel, this trades mounting capability for the ability to relocate the safe easily between homes or living situations, with no battery to ever run out.\n\nExplicitly rated for a broad range of items including firearms. Both are worth keeping in mind before deciding.",
    "specs": [
      "True mechanical zinc alloy combination lock, no batteries",
      "Anti-pry steel, foam-padded interior",
      "Portable, explicitly rated for firearms"
    ],
    "pros": [
      "Genuine mechanical combination lock with no battery dependency",
      "Explicitly rated for a broad range of items including firearms"
    ],
    "cons": [
      "Portable design, not mountable for anti-removal security"
    ],
    "bestFor": "Buyers wanting mechanical no-battery reliability with broad item coverage."
  },
  {
    "id": "b004lamjvi-css",
    "rank": 3,
    "badge": "Best True Mechanical Combination (Tethered)",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "A resettable three-digit mechanical combination provides keyless, battery-free convenience, our third genuine mechanical pick, and a tethering cable secures it to a fixed object for campus, coffee shop, or office use. Solid steel construction backs the physical protection.\n\n6\" interior), this is best suited to compact items like keys, cash, credit cards, and USB drives rather than bulkier valuables.",
    "specs": [
      "True mechanical 3-digit combination, no batteries",
      "Tethering cable, solid steel construction",
      "2.6×5.9×8.0 in exterior, compact-item sized"
    ],
    "pros": [
      "Genuine mechanical combination, resettable and battery-free",
      "Tethering cable specifically fits campus or office desk security"
    ],
    "cons": [
      "Small interior, suited to compact items only, not a full valuables safe"
    ],
    "bestFor": "Students or office workers wanting a compact, mechanical, tetherable combination lock."
  },
  {
    "id": "b078myjyd5-css",
    "rank": 4,
    "badge": "Digital Keypad, Not Mechanical",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "We're including this honestly as a digital keypad design, not a true mechanical combination, since it functions similarly (entering a numeric code) but requires batteries rather than a mechanical dial. A magnetic auto-locking door and reinforced solid steel construction with dual door locking bolts back the physical security.\n\nPre-drilled mounting holes let you anchor it, and two emergency keys back up the keypad if the code is forgotten or batteries die, at the lowest price among the mountable steel options here.\n\nLowest price among the mountable steel options here. That said, digital keypad requires batteries, not a true no-battery mechanical combination.",
    "specs": [
      "Digital keypad (battery-powered), not mechanical",
      "Mountable steel construction, magnetic auto-lock door",
      "2 emergency keys included"
    ],
    "pros": [
      "Lowest price among the mountable steel options here"
    ],
    "cons": [
      "Digital keypad requires batteries, not a true no-battery mechanical combination"
    ],
    "bestFor": "Buyers comfortable with a digital keypad who don't specifically need mechanical, battery-free operation."
  },
  {
    "id": "b09sz6gpgr-css",
    "rank": 5,
    "badge": "Digital Keypad, Not Mechanical",
    "name": "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    "price": "$31.99",
    "rating": "4.5",
    "reviews": "3167",
    "imageUrl": "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SZ6GPGR?tag=theofficejournal-20",
    "description": "Also a digital keypad design rather than a true mechanical combination, but with useful electronic-specific features a mechanical lock can't offer: an automatic interior light and a low-battery warning light before the batteries actually die. A three-wrong-entries lockout adds a real deterrent.\n\nReinforced alloy steel with pry-resistant concealed hinges backs the security, and an included waterproof/fireproof document bag adds protection for cash or paper items bundled inside.",
    "specs": [
      "Digital keypad (battery-powered), not mechanical",
      "Auto interior light, low-battery warning",
      "3-wrong-entry lockout (5 min)"
    ],
    "pros": [
      "Low-battery warning specifically avoids the surprise-lockout risk of digital keypads"
    ],
    "cons": [
      "Digital keypad requires batteries, not a true no-battery mechanical combination"
    ],
    "bestFor": "Buyers wanting keypad convenience with an early warning before batteries die."
  },
  {
    "id": "b0d1x55sw4-css",
    "rank": 6,
    "badge": "Digital Keypad, Multi-Code Access",
    "name": "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    "price": "$29.99",
    "rating": "4.2",
    "reviews": "4957",
    "imageUrl": "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    "description": "A digital keypad design, not mechanical, but it supports two separate access codes simultaneously, useful if two people need independent access rather than sharing one combination. SPCC steel construction with 18mm dual locking bolts backs the physical security.\n\nHidden pry-resistant hinges reinforce the code system, and the package includes an anti-scratch carpet liner plus a full manual walking through the two-code setup.\n\nSupports two independent codes, a feature mechanical combination locks don't typically offer.",
    "specs": [
      "Digital keypad (battery-powered), not mechanical",
      "2 independent access codes supported",
      "Includes anti-scratch carpet liner + manual"
    ],
    "pros": [
      "Supports two independent codes, a feature mechanical combination locks don't typically offer"
    ],
    "cons": [
      "Digital keypad requires batteries, not a true no-battery mechanical combination"
    ],
    "bestFor": "Two-person households wanting multi-code access, accepting battery dependency for that flexibility."
  },
  {
    "id": "b0fx2969y8-css",
    "rank": 7,
    "badge": "Digital Keypad With Alarm Deterrent",
    "name": "Small Safe for Home, 6.69\"H Safe Box with Fireproof Waterproof Bag",
    "price": "$34.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41L5x2i66HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX2969Y8?tag=theofficejournal-20",
    "description": "Digital keypad access, not mechanical, but with a useful shared-living-space feature: a wrong password entered 3 times triggers a 60-second alarm with a mute mode available for discreet use. Two steel lock bolts and embedded doors provide physical protection, and reserved anchoring holes let you secure it in a cabinet or wall.\n\nThree unlocking ways, keypad, key, and external battery case, prevent a full lockout, though the listing directly states this is NOT fireproof despite including a separate fireproof bag for documents.\n\nThe standout detail is that alarm deterrent with mute mode specifically addresses shared-living-space privacy. Balancing that out, digital keypad requires batteries, not a true no-battery mechanical combination.",
    "specs": [
      "Digital keypad (battery-powered), not mechanical",
      "Alarm deterrent with mute mode, 3 unlock methods",
      "NOT fireproof, includes separate fireproof bag"
    ],
    "pros": [
      "Alarm deterrent with mute mode specifically addresses shared-living-space privacy"
    ],
    "cons": [
      "Digital keypad requires batteries, not a true no-battery mechanical combination",
      "Safe body itself is explicitly not fireproof"
    ],
    "bestFor": "Buyers in shared living spaces wanting an alarm deterrent against repeated code-guessing."
  },
  {
    "id": "b0f98zd7p4-css",
    "rank": 8,
    "badge": "Digital Keypad, Compact and Mountable",
    "name": "MAESTON Mini Electronic Safe Box with Digital Keypad & Keys, 0.23 Cubic",
    "price": "$29.99",
    "rating": "4.3",
    "reviews": "187",
    "imageUrl": "https://m.media-amazon.com/images/I/41BeFzmCRBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F98ZD7P4?tag=theofficejournal-20",
    "description": "A digital keypad design, not mechanical, with a customizable 3-8 digit password for flexible code length rather than a fixed 3-4 digit format. Reinforced solid steel wall structure with double solid door bolts and pry-proof steel doors backs the security.\n\nTwo expansion bolts and four pre-drilled mounting holes make this mountable, and a magnetic lock auto-locks for convenience, at the smallest confirmed footprint among the digital keypad picks here.\n\nCustomizable 3-8 digit code length, more flexible than fixed-length competitors.",
    "specs": [
      "Digital keypad (battery-powered), 3-8 digit customizable code",
      "Mountable, magnetic auto-lock door",
      "4 pre-drilled mounting holes + 2 expansion bolts"
    ],
    "pros": [
      "Customizable 3-8 digit code length, more flexible than fixed-length competitors"
    ],
    "cons": [
      "Digital keypad requires batteries, not a true no-battery mechanical combination"
    ],
    "bestFor": "Buyers wanting flexible password length on a compact, mountable keypad safe."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safes-with-keypads",
    "title": "Best Small Safes With Keypads (2026)"
  },
  {
    "href": "/guide/best-small-safes-with-keys",
    "title": "Best Small Safes With Keys (2026)"
  },
  {
    "href": "/guide/best-portable-small-safes",
    "title": "Best Portable Small Safes (2026)"
  }
];

export const breadcrumbLabel = "Best Combination Small Safes";
