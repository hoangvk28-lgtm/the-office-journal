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
    "q": "What's the best dorm safe if I can't drill into the walls?",
    "a": "The Master Lock Small Travel Safe with Cable, which tethers to a bed frame or desk rather than requiring wall mounting."
  },
  {
    "q": "Is there an option specifically marketed for dorm use?",
    "a": "Yes, the SentrySafe Small Safe with Combination Lock is explicitly marketed by the manufacturer for office or dorm use."
  },
  {
    "q": "What's easiest to move out at the end of the semester?",
    "a": "The Amazon Basics Portable Security Case, which requires no unmounting since it was never fixed in place."
  },
  {
    "q": "Is there an option specifically designed to deter roommates rather than burglars?",
    "a": "Yes, the Small Safe for Home is explicitly framed by the manufacturer around roommate, guest, and landlord access deterrence."
  },
  {
    "q": "Why does this list have 7 products instead of 8?",
    "a": "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data."
  }
];

export const guideSlug = "best-small-safes-for-dorm-rooms";

export const guideTitle = "The Best Small Safes for Dorm Rooms: Picks and Trade-offs";

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
          ""
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
          "Bonsaii Small Safe Box with Electronic Keypad for Valuables"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: Master Lock Small Travel Safe with Cable, Amazon Basics Portable Security Case Lock Box Safe with Combination Lock."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Small Safe, Small Safe for Home, Yuanshikj Small Steel Security Safe Box with Keypad, Digital Electronic Money Safe, Bonsaii Small Safe Box with Electronic Keypad for Valuables."
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
        "text": "You're storing valuable or irreplaceable items, where Bonsaii Small Safe Box with Electronic Keypad for Valuables's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Prioritized tether or portable designs over drilling-dependent mounting",
    "description": "Most dorm housing prohibits permanent wall drilling. We weighted tether-cable and portable picks accordingly, rather than assuming every buyer can freely install mounting hardware."
  },
  {
    "title": "Matched features to the actual dorm threat model: roommates and guests, not break-ins",
    "description": "One pick specifically frames its alarm deterrent around roommate and guest access. We recognized this as matching the real dorm security concern more than generic burglary resistance."
  },
  {
    "title": "Weighted move-out portability as a genuine dorm-specific factor",
    "description": "A safe that requires unmounting at semester's end is more friction than a portable one. We flagged this tradeoff directly."
  },
  {
    "title": "Excluded the inaccessible ASIN rather than fabricating its data",
    "description": "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing."
  }
];

export const introParagraphs = [
  "Dorm rooms usually prohibit permanent wall drilling, so we prioritized tether-cable and portable designs over mounting-hardware-dependent safes, and flagged where a pick's anchoring assumes permissions a dorm resident won't have. One original candidate ASIN was not accessible through the product catalog at research time.",
  "We also weighed roommate privacy specifically, since a dorm safe's main threat model is usually a roommate or visitor, not a break-in, which changes which features actually matter."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safes for dorm rooms";

export const metaDescription = "A practical comparison of 7 small safes for dorm rooms, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Small Safes for Dorm Rooms (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b005k6jqxq-ssfdr",
    "rank": 1,
    "badge": "Best for No-Drilling Dorm Rules",
    "name": "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    "price": "$16.17",
    "rating": "4.3",
    "reviews": "18027",
    "imageUrl": "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    "description": "A tether cable secures this to a bed frame, desk leg, or radiator, exactly the kind of anti-removal method that works within typical dorm no-drilling policies. A set-your-own four-digit combination avoids carrying a key a roommate could borrow and forget to return.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked and tethered, and shock-absorbing foam construction is designed to be water-resistant, useful for the general wear of dorm life.\n\nNo physical key that a roommate could borrow. That said, tether-only anti-removal, lighter than a mounted steel box.",
    "specs": [
      "Tether cable, works within no-drilling dorm rules",
      "4-digit combination, no key to lose or lend",
      "Charging cable access port"
    ],
    "pros": [
      "Tether cable specifically avoids needing permission to drill into dorm walls",
      "No physical key that a roommate could borrow"
    ],
    "cons": [
      "Tether-only anti-removal, lighter than a mounted steel box"
    ],
    "bestFor": "Students whose housing prohibits wall drilling but who still want anchored security."
  },
  {
    "id": "b004lamjvi-ssfdr",
    "rank": 2,
    "badge": "Best Compact Tethered Option",
    "name": "SentrySafe Small Safe, Black Lock Box with Combination Lock for Office or Dorm",
    "price": "$21.99",
    "rating": "4.3",
    "reviews": "2541",
    "imageUrl": "https://m.media-amazon.com/images/I/317kzwqRXbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B004LAMJVI?tag=theofficejournal-20",
    "description": "Explicitly marketed by SentrySafe for dorm use, a resettable three-digit mechanical combination needs no batteries, one less thing to manage during a busy semester. A tethering cable secures it to a fixed object rather than requiring drilling.\n\n0\" D exterior, sized for compact items like keys, cash, credit cards, and a USB drive, the realistic scope of what a student actually needs to secure.",
    "specs": [
      "Explicitly dorm-marketed, tethering cable",
      "Resettable 3-digit mechanical combination, no batteries",
      "Compact-item sized (2.6×5.9×8.0 in)"
    ],
    "pros": [
      "Explicitly marketed by the manufacturer for dorm use",
      "No-battery mechanical reliability during a busy semester"
    ],
    "cons": [
      "Small interior, compact items only, not for a laptop"
    ],
    "bestFor": "Students wanting a compact, no-battery, explicitly dorm-marketed safe."
  },
  {
    "id": "b077k1yh8z-ssfdr",
    "rank": 3,
    "badge": "Best for Move-Out Portability",
    "name": "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    "price": "$17.84",
    "rating": "4.4",
    "reviews": "9964",
    "imageUrl": "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077K1YH8Z?tag=theofficejournal-20",
    "description": "Anti-pry steel construction with a foam-padded interior is explicitly rated for cash, jewelry, documents, and firearms together, a broad scope for a student's actual belongings. A zinc alloy combination lock avoids managing a physical key across a semester's worth of moves in and out of the dorm.\n\nSmall enough to store discreetly and portable, this packs easily into a moving box or car at the end of the semester without needing to be unmounted first, unlike a bolted-down alternative.\n\nBroad item coverage for typical student belongings.",
    "specs": [
      "Portable, no unmounting needed at move-out",
      "Foam-padded interior, rated for firearms",
      "Zinc alloy combination lock"
    ],
    "pros": [
      "No unmounting required at semester's end, move-out friendly",
      "Broad item coverage for typical student belongings"
    ],
    "cons": [
      "No tether or mounting option, purely portable"
    ],
    "bestFor": "Students prioritizing easy move-out over anchored security."
  },
  {
    "id": "b0fx2969y8-ssfdr",
    "rank": 4,
    "badge": "Best Roommate Privacy Deterrent",
    "name": "Small Safe for Home, 6.69\"H Safe Box with Fireproof Waterproof Bag",
    "price": "$34.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41L5x2i66HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FX2969Y8?tag=theofficejournal-20",
    "description": "The manufacturer directly frames this as a deterrent against roommates, guests, and landlord access, exactly the threat model a dorm safe actually faces. A wrong password entered 3 times triggers a 60-second alarm with mute mode available for discreet use when you don't want to announce you're accessing valuables.\n\nThree unlocking ways, keypad, key, and external battery case, mean no risk of a roommate borrowing your key and forgetting to return it. Reserved anchor holes offer optional concealed mounting if your dorm allows it.\n\nThe standout detail is that alarm mute mode avoids announcing valuables in a shared room. Balancing that out, safe body itself is explicitly not fireproof.",
    "specs": [
      "10.63×6.69×6.69 in, roommate-privacy framed by manufacturer",
      "Alarm with mute mode, explicitly for shared-space deterrence",
      "3 unlocking ways, no risk of a borrowed-and-lost key"
    ],
    "pros": [
      "Manufacturer explicitly frames this for roommate/guest deterrence, matching the real dorm threat model",
      "Alarm mute mode avoids announcing valuables in a shared room"
    ],
    "cons": [
      "Safe body itself is explicitly not fireproof"
    ],
    "bestFor": "Students specifically concerned about roommate or guest access, not break-ins."
  },
  {
    "id": "b078myjyd5-ssfdr",
    "rank": 5,
    "badge": "Most Proven Budget Option",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "A magnetic auto-locking door means a student rushing to class doesn't need to remember to manually lock up, it secures itself the instant the door closes. Reinforced solid steel construction with dual door locking bolts backs the physical security.\n\nMountable if dorm policy allows, or usable as a portable cash box otherwise, with two emergency keys backing up the keypad, at the lowest price in this comparison for a student budget.\n\nLowest price in this comparison.",
    "specs": [
      "0.2 cu ft, self-locking door",
      "Mountable OR portable depending on dorm policy",
      "Lowest price in this comparison"
    ],
    "pros": [
      "Self-locking door suits a rushed student schedule",
      "Lowest price in this comparison"
    ],
    "cons": [
      "Compact interior, verify your specific items fit"
    ],
    "bestFor": "Budget-conscious students wanting a proven, self-locking safe."
  },
  {
    "id": "b0d1x55sw4-ssfdr",
    "rank": 6,
    "badge": "Best for Roommate-Shared Access",
    "name": "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    "price": "$29.99",
    "rating": "4.2",
    "reviews": "4957",
    "imageUrl": "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    "description": "Two separate access codes work simultaneously, useful if you and a trusted roommate want to share a safe without sharing one code.\n\nHidden pry-resistant hinges reinforce privacy, and two mounting pegs let you conceal it on a shelf or wall if your dorm allows light attachment, at a compact footprint suited to shared dorm space.\n\nTwo independent codes support shared roommate access. Both are worth keeping in mind before deciding.",
    "specs": [
      "4.6L, SPCC steel, peg-mounting for concealment",
      "2 independent access codes supported",
      "Fits closet, drawer, or under a desk"
    ],
    "pros": [
      "Two independent codes support shared roommate access"
    ],
    "cons": [
      "4-step setup process is more involved than simpler competitors"
    ],
    "bestFor": "Roommates wanting to share one safe with independent codes."
  },
  {
    "id": "b0crh68745-ssfdr",
    "rank": 7,
    "badge": "Best Dead-Battery Backup for Dorm Use",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "A USB-C interface supporting an external power bank is particularly useful for a dorm room, where a student might not have spare AA batteries on hand but almost certainly has a phone charger or power bank. 71-inch steel reinforcement bolts and hidden hinges back the mounting.\n\n61 inches of usable interior.",
    "specs": [
      "0.23 cu ft, mountable if dorm allows",
      "USB-C emergency power backup",
      "Pre-drilled installation holes"
    ],
    "pros": [
      "USB-C emergency power backup uses a phone charger a student already has on hand"
    ],
    "cons": [
      "No confirmed usage history for this specific listing yet"
    ],
    "bestFor": "Students wanting dead-battery protection using equipment they already own."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-personal-small-safes",
    "title": "Best Personal Small Safes (2026)"
  },
  {
    "href": "/guide/best-portable-small-safes",
    "title": "Best Portable Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-for-apartments",
    "title": "Best Small Safes for Apartments (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safes for Dorm Rooms";
