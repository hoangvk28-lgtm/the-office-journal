export const guideSlug = "best-personal-small-safes";
export const guideTitle = "8 Best Personal Small Safes in 2026";
export const metaTitle = "Best Personal Small Safes (2026)";
export const metaDescription =
  "8 safes compared for personal storage, passports, medication, and small valuables, in shared bedrooms, dorms, or offices where privacy matters most.";
export const mainKeyword = "personal small safes";
export const introParagraphs = [
  "Personal storage prioritizes discreet fit and individual access over institutional theft resistance, since the goal is usually privacy from roommates or family rather than defending against a break-in. We compared confirmed interior dimensions against realistic personal items, passports, wallets, medication, and evaluated access methods for a single user rather than a shared household.",
  "We also checked portability versus mounting, since a personal safe used in a dorm or rental may need to move with you rather than stay bolted in one place.",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b005k6jqxq-pss",
    rank: 1,
    badge: "Best for Travel and Dorm Portability",
    name: "Master Lock Small Travel Safe with Cable, Gray Combination Lock Box, 5900D",
    price: "$16.17",
    rating: "4.3",
    reviews: "18027",
    imageUrl: "https://m.media-amazon.com/images/I/41oN5m8A2mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B005K6JQXQ?tag=theofficejournal-20",
    description: "A tether cable secures this to a bed frame, desk, or radiator rather than requiring permanent mounting, genuinely useful for a dorm room or rental where you can't drill into a wall. A set-your-own four-digit combination avoids carrying a key that could be lost or borrowed.\n\nA dedicated ear bud or charging cable access port lets you charge a phone while it stays locked inside, and shock-absorbing foam construction is designed to be water-resistant for a bag or backpack.\n\nWorth calling out specifically: only pick here with a dedicated charging cable access port. The catch is tether-only anti-removal, not mounted like a fixed steel box.",
    specs: ["Travel safe with tether cable", "4-digit combination, no key needed", "Charging cable access port, water-resistant"],
    pros: ["Tether cable specifically fits dorm/rental settings without drilling", "Only pick here with a dedicated charging cable access port"],
    cons: ["Tether-only anti-removal, not mounted like a fixed steel box"],
    bestFor: "Students or renters needing a personal safe that moves with them.",
  },
  {
    id: "b077k1yh8z-pss",
    rank: 2,
    badge: "Best for Broad Personal Item Coverage",
    name: "Amazon Basics Portable Security Case Lock Box Safe with Combination Lock",
    price: "$17.84",
    rating: "4.4",
    reviews: "9964",
    imageUrl: "https://m.media-amazon.com/images/I/31iXiZaJiIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B077K1YH8Z?tag=theofficejournal-20",
    description: "Anti-pry steel construction with a foam-padded interior is explicitly rated for cash, jewelry, documents, and firearms together, a genuinely broad personal-item scope. A zinc alloy combination lock avoids managing a physical key.\n\nSmall enough to store discreetly in a closet or under a bed, and portable enough to relocate between a dorm room, apartment, or office desk drawer as your living situation changes.\n\nGenuinely portable between living situations. Set against that, portable design, not mountable for anti-removal security. Both matter when comparing it to the other picks here.",
    specs: ["Portable, anti-pry steel construction", "Foam-padded interior", "Zinc alloy combination lock"],
    pros: ["Explicitly rated for a broad range of personal item types", "Genuinely portable between living situations"],
    cons: ["Portable design, not mountable for anti-removal security"],
    bestFor: "Buyers wanting one safe covering a wide range of personal valuables across moves.",
  },
  {
    id: "b078myjyd5-pss",
    rank: 3,
    badge: "Best Self-Locking Design",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    description: "A magnetic auto-locking door closes and secures itself the instant you shut it, genuinely useful for personal privacy since there's no risk of leaving it accidentally unlocked in a shared bedroom or apartment. Reinforced solid steel wall construction with dual door locking bolts backs the physical security.\n\nPre-drilled mounting holes let you fix it in place if your living situation allows drilling, at a compact 9.05 x 6.69 x 6.69 inches suited to a closet shelf or desk drawer.\n\nThe standout detail is that self-locking door removes the risk of accidentally leaving personal items exposed. Balancing that out, compact interior, verify your specific personal items fit.",
    specs: ["0.2 cu ft, mountable steel construction", "Dual steel locking bolts, magnetic auto-lock door", "Pre-drilled mounting holes + bolts included"],
    pros: ["Self-locking door removes the risk of accidentally leaving personal items exposed"],
    cons: ["Compact interior, verify your specific personal items fit"],
    bestFor: "Buyers in a shared living space wanting a self-locking, hard-to-forget-to-lock design.",
  },
  {
    id: "b09sz6gpgr-pss",
    rank: 4,
    badge: "Best for Low-Light Personal Access",
    name: "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    price: "$31.99",
    rating: "4.5",
    reviews: "3167",
    imageUrl: "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SZ6GPGR?tag=theofficejournal-20",
    description: "An automatic interior light switches on for 30 seconds when opened via keypad, genuinely useful if this lives in a dim closet where you're accessing personal items like medication or documents without fumbling. The keypad confirms correct entries with an indicator light.\n\nAn included waterproof and fireproof document bag protects paper items like passports specifically, and a three-wrong-entries lockout adds a real deterrent if a roommate or family member tries guessing your code.\n\nLockout deters roommates or family members guessing your code. That's a real strength, but weigh it against the flip side: compact interior similar to other budget options.",
    specs: ["0.23 cu ft, mountable steel box", "Auto interior light, low-battery warning", "3-wrong-entry lockout (5 min)"],
    pros: ["Auto interior light genuinely helps with personal items in a dim closet", "Lockout deters roommates or family members guessing your code"],
    cons: ["Compact interior similar to other budget options"],
    bestFor: "Buyers wanting privacy protection against a roommate or family member attempting access.",
  },
  {
    id: "b0d1x55sw4-pss",
    rank: 5,
    badge: "Best for Individual + Shared Access",
    name: "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    price: "$29.99",
    rating: "4.2",
    reviews: "4957",
    imageUrl: "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    description: "Two separate access codes work simultaneously, useful for a personal safe that also needs occasional trusted access, a partner, roommate, or parent, without sharing your primary code. SPCC steel construction with 18mm dual locking bolts backs the physical security at a 4.6-liter capacity.\n\nHidden pry-resistant hinges reinforce privacy, and the package includes an anti-scratch carpet liner plus a full manual walking through the two-code setup.\n\nTwo independent codes support occasional trusted access without sharing your primary code. On the other hand, 4-step setup process is more involved than simpler competitors. Both are worth keeping in mind before deciding.",
    specs: ["4.6L, SPCC steel, mountable design", "2 independent access codes supported", "Includes anti-scratch carpet liner + manual"],
    pros: ["Two independent codes support occasional trusted access without sharing your primary code"],
    cons: ["4-step setup process is more involved than simpler competitors"],
    bestFor: "Buyers wanting primarily personal access with an occasional trusted second code.",
  },
  {
    id: "b0dwmhjghp-pss",
    rank: 6,
    badge: "Best Key-Storage Guidance",
    name: "PATRON Small Safe Box for Money with Code and Keys, Solid Mini Safe for Kids",
    price: "$28.99",
    rating: "4.5",
    reviews: "298",
    imageUrl: "https://m.media-amazon.com/images/I/41iTPTu+ahL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DWMHJGHP?tag=theofficejournal-20",
    description: "The listing carries an explicit, genuinely useful warning for personal safe use specifically: never store the emergency keys inside the box itself, a common mistake that defeats a safe's purpose. Two solid anti-pry bolts and a corrosion-resistant coating back the physical construction.\n\nA full accessory bundle, two emergency keys, two mounting bolts, a scratch-resistant carpet liner, and a manual, matches pricier picks at a lower cost, at 6.7 x 9.0 x 6.7 inches for a drawer, cabinet, or nightstand.\n\nA genuine advantage here is that explicit key-storage warning, genuinely useful for a first personal safe. The tradeoff is that compact capacity similar to other budget mountable options.",
    specs: ["0.236 cu ft, mountable design", "2 anti-pry steel bolts, corrosion-resistant coating", "Explicit warning against storing keys inside the box"],
    pros: ["Explicit key-storage warning, genuinely useful for a first personal safe"],
    cons: ["Compact capacity similar to other budget mountable options"],
    bestFor: "First-time buyers, including students, wanting clear personal-safe setup guidance.",
  },
  {
    id: "b0crh68745-pss",
    rank: 7,
    badge: "Best Backup Power for Reliable Personal Access",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    description: "A USB-C interface supporting an external power bank means you're never locked out of your own personal items over a dead battery, genuinely useful if you need something like medication urgently. Two 0.71-inch steel reinforcement bolts and hidden hinges back the mounting.\n\nPersonal password or emergency key both work for access, with pre-drilled installation holes to fix it under a closet, drawer, or table.\n\nUSB-C emergency power backup ensures reliable access to personal items like medication. That said, no confirmed usage history for this specific listing yet. Neither should be a surprise once you know to look for it.",
    specs: ["0.23 cu ft, mountable steel security box", "USB-C emergency power backup", "Pre-drilled installation holes"],
    pros: ["USB-C emergency power backup ensures reliable access to personal items like medication"],
    cons: ["No confirmed usage history for this specific listing yet"],
    bestFor: "Buyers wanting guaranteed access to personal items even on a dead battery.",
  },
  {
    id: "b0f7x326zf-pss",
    rank: 8,
    badge: "Best for Flat Personal Documents",
    name: "KYODOLED Safe Box with Digital Keypad Lock, Lock Box with Code for Personal Items",
    price: "$39.99",
    rating: "4.2",
    reviews: "93",
    imageUrl: "https://m.media-amazon.com/images/I/41oAH0K-frL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F7X326ZF?tag=theofficejournal-20",
    description: "Interior dimensions of 11.7\" x 9.12\" x 2.75\" give a wide, flat layout genuinely suited to personal documents like a passport, checkbook, or watch without folding or stacking awkwardly. A customizable 3-8 digit code plus 2 emergency keys cover daily and backup access.\n\nA soft sponge-lined interior protects delicate personal items like jewelry or a watch from scratches, though the manufacturer directly states the thin metal casing has limits under pry tools or blunt force, worth weighing for a personal rather than high-security use case.\n\nWorth calling out specifically: wide flat interior specifically suits passports and personal documents without folding. The catch is manufacturer discloses thin casing has limited force resistance.",
    specs: ["11.7×9.12×2.75 in wide flat interior", "3-8 digit customizable code + 2 emergency keys", "Sponge-lined interior for delicate items"],
    pros: ["Wide flat interior specifically suits passports and personal documents without folding"],
    cons: ["Manufacturer discloses thin casing has limited force resistance"],
    bestFor: "Buyers storing flat personal documents like a passport or checkbook.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Prioritized privacy from roommates or family over institutional theft resistance", description: "Personal safes are usually about discretion in a shared living space, not defending against a break-in. We weighted self-locking design, lockout deterrents, and discreet fit accordingly." },
  { title: "Checked portability for dorm, rental, and moving scenarios", description: "The Master Lock and Amazon Basics picks are genuinely portable via tether or carry design; the mountable steel options assume a more permanent personal storage location." },
  { title: "Verified interior dimensions against realistic personal items", description: "We checked confirmed interior measurements against passports, wallets, medication, and small jewelry rather than assuming any small safe fits a personal item set equally well." },
  { title: "Passed through manufacturer force-resistance disclosures honestly", description: "One listing directly states its thin casing has limits under pry tools. We flagged this since a personal safe's threat model (roommate curiosity) differs from a high-security threat model." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Protection Type",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fire or water resistance claimed",
          "Voncabay Money Safe Box for Home with Digital Keypad"
        ],
        [
          "Most-reviewed, strongest reliability signal",
          "Yuanshikj Small Steel Security Safe Box with Keypad"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $17",
          "Master Lock Small Travel Safe with Cable"
        ],
        [
          "Up to $40",
          "KYODOLED Safe Box with Digital Keypad Lock"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "Physical key",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: Master Lock Small Travel Safe with Cable, Amazon Basics Portable Security Case Lock Box Safe with Combination Lock, PATRON Small Safe Box for Money with Code and Keys."
      },
      {
        "label": "Electronic access",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: Yuanshikj Small Steel Security Safe Box with Keypad, Voncabay Money Safe Box for Home with Digital Keypad, Digital Electronic Money Safe, Bonsaii Small Safe Box with Electronic Keypad for Valuables, KYODOLED Safe Box with Digital Keypad Lock."
      }
    ],
    "note": "Most buyers should default to electronic access with a confirmed backup method unless simplicity is the top priority."
  },
  {
    "subheading": "By Fire Protection",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Fire resistance claimed",
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
        "label": "Look for",
        "text": "A confirmed interior dimension roomy enough for the actual items, plus a backup access method beyond just a keypad."
      },
      {
        "label": "In this comparison",
        "text": "Yuanshikj Small Steel Security Safe Box with Keypad is worth checking against its listed interior dimensions before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You're storing genuinely valuable or irreplaceable items, where KYODOLED Safe Box with Digital Keypad Lock's higher price buys real security or fire-protection headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just need basic theft deterrence for low-value items, where Master Lock Small Travel Safe with Cable covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Don't assume fire or water protection unless it's explicitly certified",
    "explanation": "A safe being made of steel doesn't automatically mean it protects contents from a house fire, most compact steel security safes are theft-deterrence only, with no fire or water rating at all, while a genuinely fireproof safe carries a specific certified time-and-temperature rating (for example, 30 minutes at 1550°F) tested by an independent lab.\n\nThis distinction matters a great deal if you're storing something irreplaceable like documents, passports, or family photos, since an uncertified safe offers essentially no protection if a real fire reaches it.\n\nCheck the listing specifically for a stated fire rating with a time and temperature figure, not just the word \"fireproof\" in the title, since that word alone isn't a verified claim."
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
    "explanation": "A 4.8-star rating from 12 reviews carries far less evaluation confidence than a 4.5-star rating from several thousand, since a small sample can be skewed by a handful of early, enthusiastic buyers before any long-term reliability issues would show up in later reviews.\n\nThis matters more for a safe than for many other product categories, since a lock or hinge failure often only becomes visible after months of real use, not in the first week.\n\nCheck both numbers together on the listing, and treat a high rating on a very small review count as a promising but unproven signal rather than the same level of confidence as a well-reviewed pick."
  }
];

export const faq: FaqItem[] = [
  { q: "What's the best personal safe for a dorm room?", a: "The Master Lock Small Travel Safe with Cable, which tethers to a fixed object without needing to drill into dorm walls." },
  { q: "Is there a self-locking option so I don't forget to lock it?", a: "Yes, the Yuanshikj Small Steel Security Safe Box uses a magnetic auto-locking door that secures itself the moment you close it." },
  { q: "Which pick best fits a passport without folding it?", a: "The KYODOLED Safe Box with Digital Keypad Lock, with a wide flat interior at 11.7 x 9.12 x 2.75 inches." },
  { q: "Is there an option for occasional trusted access by someone else?", a: "Yes, the Digital Electronic Money Safe supports two independent access codes." },
  { q: "Do these safes resist a determined break-in?", a: "Not necessarily. These are built primarily for privacy from roommates or family, not forced entry. For genuine high-security needs, look toward a heavier bolt-down safe." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-small-safes", title: "Best Portable Small Safes (2026)" },
  { href: "/guide/best-small-safes-for-dorm-rooms", title: "Best Small Safes for Dorm Rooms (2026)" },
  { href: "/guide/best-small-safe-lock-boxes", title: "Best Small Safe Lock Boxes (2026)" },
];
