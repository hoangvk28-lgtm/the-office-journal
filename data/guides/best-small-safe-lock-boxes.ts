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
    "q": "What's the best overall mountable lock box?",
    "a": "The Yuanshikj Small Steel Security Safe Box, with genuine mounting hardware and a magnetic auto-locking door."
  },
  {
    "q": "Is there an option designed for travel?",
    "a": "Yes, the Master Lock Small Travel Safe with Cable is built specifically for securing valuables to a fixed object in a hotel room or similar setting."
  },
  {
    "q": "Is there a lock box explicitly rated for firearm storage?",
    "a": "Yes, the Amazon Basics Portable Security Case explicitly names firearms alongside cash, jewelry, and documents."
  },
  {
    "q": "Does any listing disclose its own security limitations?",
    "a": "Yes, the KYODOLED Safe Box with Digital Keypad Lock directly states its metal casing may be compromised under pry tools or blunt force, an honest disclosure we're passing along."
  },
  {
    "q": "Which pick has a backup power option if the battery dies?",
    "a": "The Bonsaii Small Safe Box confirms a USB-C interface supporting an external power bank for emergency access."
  }
];

export const guideSlug = "best-small-safe-lock-boxes";

export const guideTitle = "The Best Small Safe Lock Boxes for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg";

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
          "Master Lock Small Travel Safe with Cable"
        ],
        [
          "",
          "Bonsaii Safe Box with Electronic Keypad for Home Office"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: Master Lock Small Travel Safe with Cable, Amazon Basics Portable Security Case Lock Box Safe with Combination Lock, PATRON Small Safe Box for Money with Code and Keys."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: Yuanshikj Small Steel Security Safe Box with Keypad, Bonsaii Small Safe Box with Electronic Keypad for Valuables, Digital Electronic Money Safe, Bonsaii Safe Box with Electronic Keypad for Home Office, KYODOLED Safe Box with Digital Keypad Lock."
      }
    ],
    "note": "Most buyers should default to electronic access with a confirmed backup method unless simplicity is the top priority."
  },
  {
    "subheading": "",
    "note": "Check each pick's listed interior dimensions, not just the cubic-footage figure, against what you're actually planning to store before buying."
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
        "text": "You're storing valuable or irreplaceable items, where Bonsaii Safe Box with Electronic Keypad for Home Office's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Separated mountable steel boxes from portable travel lock boxes",
    "description": "Several picks here include mounting hardware for real anchoring, while others (the Master Lock and Amazon Basics picks) are explicitly built for portability and travel with a tether cable rather than mounting bolts."
  },
  {
    "title": "Passed through manufacturer disclosures about force-resistance limits honestly",
    "description": "One listing directly states its thin metal casing may be compromised under pry tools or blunt force. We passed that disclosure along rather than smoothing it over into generic security language."
  },
  {
    "title": "Checked for tether or anchor options on the travel-oriented picks specifically",
    "description": "The Master Lock travel safe confirms a tether cable, a meaningfully different anti-removal approach than mounting bolts, useful in settings like hotel rooms where drilling isn't an option."
  },
  {
    "title": "Compared access-recovery methods across all eight picks",
    "description": "We noted which picks confirm USB-C backup power, dual codes, or simple key backup, since a lock box with no recovery plan can leave you fully locked out."
  }
];

export const introParagraphs = [
  "Lock boxes are generally lighter and easier to remove than a fixed, anchored safe, so we're evaluating tether or mounting options and carry weight directly rather than treating every lock box as equally theft-resistant. We're also disclosing where a listing itself states its steel construction has limits under pry tools or blunt force.",
  "Several picks here are portable, built for travel or temporary use, while others are mountable steel boxes closer to a fixed safe. We're separating the two rather than ranking them on one undifferentiated scale."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safe lock boxes";

export const metaDescription = "We compared 8 small safe lock boxes on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Small Safe Lock Boxes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b078myjyd5-sslb",
    "rank": 1,
    "badge": "Best Overall Mountable Lock Box",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "Reinforced solid steel wall construction with dual door locking bolts resists casual removal once mounted, backed by pre-drilled holes and included bolts to actually anchor it rather than leave it as a portable box. A magnetic auto-locking door closes and secures itself the moment you shut it.\n\nGenuine mounting hardware, closer to a fixed safe than a portable lock box.",
    "specs": [
      "0.2 cu ft, mountable steel construction",
      "Dual steel locking bolts, magnetic auto-lock door",
      "Pre-drilled mounting holes + bolts included"
    ],
    "pros": [
      "Genuine mounting hardware, closer to a fixed safe than a portable lock box"
    ],
    "cons": [
      "Compact interior, not designed for travel portability"
    ],
    "bestFor": "Buyers wanting a mountable, anchored lock box rather than a portable one."
  },
  {
    "id": "b005k6jqxq-sslb",
    "rank": 2,
    "badge": "Best for Travel Tethering",
    "name": "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    "price": "$16.17",
    "rating": "4.3",
    "reviews": "18027",
    "imageUrl": "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    "description": "This is built for travel, with a tether cable to secure it to a fixed object rather than mounting hardware for a wall or floor, an explicit design choice for a hotel room or rental car rather than a permanent installation. A set-your-own four-digit combination avoids needing to carry a key.\n\nA dedicated ear bud or charging cable access port lets you charge or listen to devices while they stay locked inside, and shock-absorbing foam construction is designed to be water-resistant, useful for travel conditions a mountable steel box isn't built for.\n\nTether cable specifically designed for hotel/travel security. Both are worth keeping in mind before deciding.",
    "specs": [
      "Travel safe with tether cable (not mountable)",
      "4-digit combination, no key needed",
      "Charging cable access port, water-resistant"
    ],
    "pros": [
      "Only pick here with a dedicated charging cable access port for locked-in device charging",
      "Tether cable specifically designed for hotel/travel security"
    ],
    "cons": [
      "Not mountable, tether-only anti-removal, lighter than a steel security box"
    ],
    "bestFor": "Travelers wanting to secure a phone, passport, or cash to a fixed object in a hotel room."
  },
  {
    "id": "b077k1yh8z-sslb",
    "rank": 3,
    "badge": "Best for Firearm-Adjacent Storage",
    "name": "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    "price": "$17.84",
    "rating": "4.4",
    "reviews": "9964",
    "imageUrl": "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077K1YH8Z?tag=theofficejournal-20",
    "description": "Made with premium anti-pry steel and a foam-padded interior, this is explicitly rated for cash, jewelry, documents, and firearms together, a broader stated use case than most lock boxes in this comparison. A zinc alloy combination lock adds security without needing a key.\n\nSmall enough to store discreetly and portable for travel, the compact design trades mounting capability for the ability to move it between locations easily.",
    "specs": [
      "Portable, anti-pry steel construction",
      "Foam-padded interior, explicitly rated for firearms",
      "Zinc alloy combination lock"
    ],
    "pros": [
      "Explicitly rated for firearm storage, a broader stated use case than most picks here"
    ],
    "cons": [
      "Portable design, not mountable for anti-removal security"
    ],
    "bestFor": "Buyers wanting portable, foam-padded storage rated for firearms alongside valuables."
  },
  {
    "id": "b0crh68745-sslb",
    "rank": 4,
    "badge": "Best Mountable Box With Backup Power",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "71-inch steel reinforcement bolts and hidden hinges back a mountable design, with pre-drilled installation holes to fix it under a closet, drawer, or table rather than leaving it portable. A USB-C interface supporting an external power bank avoids a dead-battery lockout, a genuine backup access method.\n\n61 inches of usable interior for cash, jewelry, or documents.\n\nUSB-C emergency power backup, unique dead-battery solution among these lock boxes. That said, no confirmed usage history for this specific listing yet.",
    "specs": [
      "0.23 cu ft, mountable steel security box",
      "USB-C emergency power backup",
      "Pre-drilled installation holes"
    ],
    "pros": [
      "USB-C emergency power backup, unique dead-battery solution among these lock boxes"
    ],
    "cons": [
      "No confirmed usage history for this specific listing yet"
    ],
    "bestFor": "Buyers wanting a mountable lock box with a genuine dead-battery recovery plan."
  },
  {
    "id": "b0d1x55sw4-sslb",
    "rank": 5,
    "badge": "Best for Two-Person Access",
    "name": "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    "price": "$29.99",
    "rating": "4.2",
    "reviews": "4957",
    "imageUrl": "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    "description": "6 liters to fit a closet, drawer, or under a table. It accepts two separate access codes, useful if two people each want an independent code rather than sharing one.\n\nHidden pry-resistant hinges back up the code system, and the package includes an anti-scratch carpet liner to protect the mounting surface plus a full printed manual.",
    "specs": [
      "4.6L, SPCC steel, mountable design",
      "2 independent access codes supported",
      "Includes anti-scratch carpet liner + manual"
    ],
    "pros": [
      "Supports two independent codes for multi-user access"
    ],
    "cons": [
      "4-step setup process is more involved than simpler competitors"
    ],
    "bestFor": "Two-person households or offices wanting independent access codes on a mountable box."
  },
  {
    "id": "b0ckpf8gf9-sslb",
    "rank": 6,
    "badge": "Largest Capacity, Most Access Methods",
    "name": "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    "price": "$52.24",
    "rating": "4.6",
    "reviews": "1326",
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    "description": "6 cubic feet, this is the largest mountable box in this comparison, with a removable shelf for splitting valuables into layers and a felt-lined bottom to prevent scratching stored items. Two 18mm steel locking bolts back the pre-drilled mounting holes and two included expansion screws.\n\nThree access methods, personal code, emergency override key, or Type-C cable into the battery box, mean multiple recovery paths rather than a single point of failure if you're locked out.\n\nThree independent access methods including dead-battery recovery.",
    "specs": [
      "0.6 cu ft, removable shelf, mountable design",
      "Two 18mm steel locking bolts",
      "3 access methods: code, key, or USB-C emergency power"
    ],
    "pros": [
      "Largest capacity mountable box in this comparison",
      "Three independent access methods including dead-battery recovery"
    ],
    "cons": [
      "Highest price among the mountable steel options here"
    ],
    "bestFor": "Buyers wanting the roomiest mountable lock box with a real backup access plan."
  },
  {
    "id": "b0f7x326zf-sslb",
    "rank": 7,
    "badge": "Honest Disclosure: Limited Force Resistance",
    "name": "KYODOLED Safe Box with Digital Keypad Lock, Lock Box with Code for Personal Items",
    "price": "$39.99",
    "rating": "4.2",
    "reviews": "93",
    "imageUrl": "https://m.media-amazon.com/images/I/41oAH0K-frL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F7X326ZF?tag=theofficejournal-20",
    "description": "This listing directly discloses its own limitation: the metal casing offers essential protection, but its thickness is limited and may be compromised under extreme force like pry tools or blunt impact, an honest statement we're passing along rather than glossing over. 75\" give a wide, flat storage layout with a spring-loaded lid.\n\nA customizable 3-8 digit code plus 2 emergency keys cover daily and backup access, and a soft sponge-lined interior protects delicate items like jewelry or electronics from scratches during transport.\n\nThe standout detail is that manufacturer directly discloses force-resistance limitations rather than overstating security. Balancing that out, manufacturer explicitly states thin metal casing may be compromised under pry tools or blunt force.",
    "specs": [
      "11.7×9.12×2.75 in wide flat interior, spring-loaded lid",
      "3-8 digit customizable code + 2 emergency keys",
      "Sponge-lined interior for delicate items"
    ],
    "pros": [
      "Wide, flat interior layout well-suited to a spread of documents or flat items",
      "Manufacturer directly discloses force-resistance limitations rather than overstating security"
    ],
    "cons": [
      "Manufacturer explicitly states thin metal casing may be compromised under pry tools or blunt force"
    ],
    "bestFor": "Buyers storing flat items who want a wide interior and value the manufacturer's honest disclosure over marketing claims."
  },
  {
    "id": "b0dwmhjghp-sslb",
    "rank": 8,
    "badge": "Best Key-Storage Guidance",
    "name": "PATRON Small Safe Box for Money with Code and Keys, Solid Mini Safe for Kids",
    "price": "$28.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41iTPTu+ahL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWMHJGHP?tag=theofficejournal-20",
    "description": "A mountable design with pre-drilled holes and two included expansion screws, and the listing carries an explicit, useful warning: never store the emergency keys inside the box itself. Two solid anti-pry bolts and a corrosion-resistant coating back the physical construction.\n\n7 inches for a drawer, cabinet, or nightstand.\n\nExplicit key-storage warning, a useful detail most listings skip.",
    "specs": [
      "0.236 cu ft, mountable design",
      "2 anti-pry steel bolts, corrosion-resistant coating",
      "Explicit warning against storing keys inside the box"
    ],
    "pros": [
      "Explicit key-storage warning, a useful detail most listings skip"
    ],
    "cons": [
      "Compact capacity similar to other budget mountable options"
    ],
    "bestFor": "First-time buyers who'll appreciate the explicit setup and key-storage guidance."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safe-boxes",
    "title": "Best Small Safe Boxes (2026)"
  },
  {
    "href": "/guide/best-portable-small-safes",
    "title": "Best Portable Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-with-keys",
    "title": "Best Small Safes With Keys (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safe Lock Boxes";
