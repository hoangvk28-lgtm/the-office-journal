export const guideSlug = "best-small-safes-for-documents";
export const guideTitle = "8 Best Small Safes for Documents in 2026";
export const metaTitle = "Best Small Safes for Documents (2026)";
export const metaDescription =
  "8 safes compared on flat letter-size fit, fire protection duration, and organizational layout, from a soft fireproof organizer to a hanging-file steel safe.";
export const mainKeyword = "small safes for documents";
export const introParagraphs = [
  "Document storage changes what actually matters: whether letter-size papers, passports, and folders fit flat without bending, and whether fire protection is documented specifically, not implied. We compared confirmed interior geometry and fire-rating specifics across these picks rather than assuming any small safe handles documents equally well.",
  "We also separated genuinely fireproof document storage from basic steel security boxes without a fire rating, since a document safe's core job (surviving a fire) differs from a general valuables safe's job (deterring theft).",
];
export const lastUpdated = "2026-08-09";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b00ge57dfk-ssfd",
    rank: 1,
    badge: "Best Overall for Hanging File Folders",
    name: "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    price: "$67.99",
    rating: "4.5",
    reviews: "14963",
    imageUrl: "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00GE57DFK?tag=theofficejournal-20",
    description: "The interior is specifically sized for hanging file folders, a genuine organizational advantage over a flat compartment where documents can slide and bend. UL Classified to withstand high temperatures for up to 30 minutes and separately ETL Verified for water exposure, both hazards independently documented.\n\nA durable key lock (2 keys included) prevents unauthorized access, and the compact footprint fits a closet or under a desk while remaining portable enough to grab during an evacuation.\n\nA genuine advantage here is that independently documented fire AND water protection. The tradeoff is that higher price than the basic chest options.",
    specs: ["Hanging file folder capacity", "UL Classified fire + ETL Verified water protection", "Key lock, 2 keys included"],
    pros: ["Only pick here specifically organized for hanging file folders", "Independently documented fire AND water protection"],
    cons: ["Higher price than the basic chest options"],
    bestFor: "Buyers wanting genuine hanging-folder organization for passports, insurance records, and legal paperwork.",
  },
  {
    id: "b008nhkwzu-ssfd",
    rank: 2,
    badge: "Most Documented Fire Rating",
    name: "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    price: "See listing",
    rating: "4.6",
    reviews: "22264",
    imageUrl: "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    description: "UL classified for fire endurance at 1/2 hour at 1550°F specifically for documents, with a separate ETL verification for digital media like CDs, DVDs, and memory sticks, two distinct certifications for the two content types a document safe typically holds. A lifetime after-fire replacement guarantee backs the claim directly.\n\nA privacy key lock (2 keys included) specifically prevents the lid from opening during a fire event, and built-in carrying grips make it genuinely portable during an evacuation.\n\nLifetime after-fire replacement guarantee. That said, no confirmed hanging-folder organization like the top pick. Neither should be a surprise once you know to look for it.",
    specs: ["UL classified: 1/2 hr at 1550°F (documents)", "ETL verified: 1/2 hr at 1550°F (digital media)", "Lifetime after-fire replacement guarantee"],
    pros: ["Most explicitly documented fire certification in this comparison", "Lifetime after-fire replacement guarantee"],
    cons: ["No confirmed hanging-folder organization like the top pick"],
    bestFor: "Buyers wanting the most rigorously certified fire protection for mixed paper and digital documents.",
  },
  {
    id: "b0crr524vk-ssfd",
    rank: 3,
    badge: "Highest Temperature Rating, Soft Case",
    name: "DocSafe 5200°F Fireproof Document Organizer Box with Lock, Heat Insulated",
    price: "$31.33",
    rating: "4.5",
    reviews: "312",
    imageUrl: "https://m.media-amazon.com/images/I/51xzFNOAeLL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRR524VK?tag=theofficejournal-20",
    description: "This is genuinely a soft fireproof organizer rather than a steel safe, made of thickened silicone-coated fireproof cotton with 8 layers and an aluminum foil lining, claimed to withstand up to 5200°F. The large-capacity interior includes 8 passport mesh bags, 16 card slots, 4 USB drive pockets, and 7 folder layers, genuinely deep organization a steel box doesn't offer.\n\nA combination lock secures the bag closed, and waterproof zippers are rated to withstand a high-speed fire hose spray. Lighter and easier to carry than a steel safe, though it's a soft bag rather than a rigid box, worth weighing against your specific durability needs.\n\nWorth calling out specifically: extensive dedicated organization (passport bags, card slots, folder layers) unmatched by steel safes. The catch is soft bag construction, not a rigid steel box, offers less physical impact resistance.",
    specs: ["Soft fireproof organizer, claimed 5200°F resistance", "8 passport bags, 16 card slots, 4 USB pockets, 7 folder layers", "Combination lock, waterproof zippers"],
    pros: ["Highest claimed temperature resistance in this comparison", "Extensive dedicated organization (passport bags, card slots, folder layers) unmatched by steel safes"],
    cons: ["Soft bag construction, not a rigid steel box, offers less physical impact resistance"],
    bestFor: "Buyers wanting maximum document organization in a lightweight, portable fireproof bag rather than a steel box.",
  },
  {
    id: "b008hzui34-ssfd",
    rank: 4,
    badge: "Best for Travel Document Portability",
    name: "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    price: "$39.98",
    rating: "4.6",
    reviews: "2807",
    imageUrl: "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    description: "UL Classified to endure 1/2 hour at 1550°F for documents and separately ETL Verified for CDs, DVDs, and USBs, with a flat key lock design preventing the lid from opening during a fire. Bolt-down hardware ships included, letting you anchor important documents at home rather than leaving the safe portable only.\n\nA built-in carrying handle explicitly supports travel or moving documents between home and another location, useful if you need to grab critical paperwork during a trip.\n\nCarrying handle supports genuine travel document portability. Set against that, no hanging-folder organization. Both matter when comparing it to the other picks here.",
    specs: ["UL Classified: 1/2 hr at 1550°F", "ETL Verified for CDs/DVDs/USBs specifically", "Bolt-down hardware included, carrying handle"],
    pros: ["Bolt-down hardware included for at-home document security", "Carrying handle supports genuine travel document portability"],
    cons: ["No hanging-folder organization"],
    bestFor: "Buyers wanting the flexibility to anchor documents at home or carry them while traveling.",
  },
  {
    id: "b000z8r73u-ssfd",
    rank: 5,
    badge: "Best for Combined Documents + Electronics",
    name: "SentrySafe Shelf Safe with Digital Keypad Lock, Steel Safe with Interior Light",
    price: "$101.96",
    rating: "4.4",
    reviews: "3891",
    imageUrl: "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B000Z8R73U?tag=theofficejournal-20",
    description: "This is directly stated as not a fireproof safe, a basic security safe with digital combination access, two live-locking bolts, and bolt-down hardware, worth weighing honestly against the fire-rated picks above if fire protection is your actual priority. It's rated for laptops, cash, and small valuables alongside documents, and California DOJ certified as a gun safe.\n\nAt 16.9\" W x 14.6\" D x 7.1\" H exterior (16.8\" x 11.6\" x 6.9\" interior), this is the widest, most laptop-friendly interior in this comparison, useful if your document storage overlaps with securing a device too.\n\nThe standout detail is that cA DOJ gun safe certification, a distinct security credential. Balancing that out, explicitly not a fireproof or waterproof safe, security-only design.",
    specs: ["16.9×14.6×7.1 in exterior, 0.78 cu ft, NOT fireproof", "Digital combination, 2 live-locking bolts, bolt-down hardware", "CA DOJ certified gun safe"],
    pros: ["Widest interior in this comparison, fits documents alongside a laptop", "CA DOJ gun safe certification, a distinct security credential"],
    cons: ["Explicitly not a fireproof or waterproof safe, security-only design"],
    bestFor: "Buyers wanting to combine document storage with laptop or device security, without fire protection as a requirement.",
  },
  {
    id: "b0ckpf8gf9-ssfd",
    rank: 6,
    badge: "Best General Steel Box for Documents",
    name: "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    price: "$52.24",
    rating: "4.6",
    reviews: "1326",
    imageUrl: "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    description: "A removable shelf lets you separate documents from cash or jewelry onto different layers rather than mixing everything together, at the largest capacity among the non-fireproof security boxes here. No fire rating is documented for this listing, so weigh it as a security-focused document box rather than a disaster-protection one.\n\nThree access methods, personal code, emergency key, or Type-C emergency power, mean multiple recovery paths if you need a document urgently and face a dead battery.\n\nRemovable shelf helps separate documents from other valuables. That's a real strength, but weigh it against the flip side: no documented fire protection, security-only design.",
    specs: ["0.6 cu ft, removable shelf for organizing", "No documented fire resistance", "3 access methods: code, key, or USB-C emergency power"],
    pros: ["Removable shelf helps separate documents from other valuables"],
    cons: ["No documented fire protection, security-only design"],
    bestFor: "Buyers wanting general document security without requiring fire protection.",
  },
  {
    id: "b078myjyd5-ssfd",
    rank: 7,
    badge: "Most Proven General Steel Box",
    name: "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    price: "$23.99",
    rating: "4.4",
    reviews: "22969",
    imageUrl: "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    description: "A magnetic auto-locking door and reinforced solid steel construction with dual door locking bolts provide basic security for documents, though this listing doesn't document fire protection either. Interior dimensions of 6.29\" x 8.9\" x 5.12\" fit standard documents without hanging-folder organization.\n\nTwo emergency keys back up the keypad if you forget your code, and pre-drilled mounting holes with included bolts let you anchor it, at the lowest price in this comparison for a mountable steel option.\n\nLowest price among the mountable steel options here. On the other hand, no documented fire protection, security-only design. Both are worth keeping in mind before deciding.",
    specs: ["0.2 cu ft, mountable, no documented fire resistance", "6.29×8.9×5.12 in interior", "Magnetic auto-lock door"],
    pros: ["Lowest price among the mountable steel options here"],
    cons: ["No documented fire protection, security-only design"],
    bestFor: "Budget-conscious buyers wanting basic document security without fire protection.",
  },
  {
    id: "b0crh68745-ssfd",
    rank: 8,
    badge: "Best Backup Access for Urgent Document Needs",
    name: "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    price: "$37.99",
    rating: "4.6",
    reviews: "0",
    imageUrl: "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    description: "A USB-C interface supporting an external power bank means you're not locked out of an urgently needed document, like a passport before a flight, over a dead battery. Two 0.71-inch steel reinforcement bolts and hidden hinges back the mounting, though this listing doesn't document fire protection.\n\nPre-drilled installation holes let you fix it under a closet, drawer, or table, at 8.98 x 6.46 x 6.61 inches of usable interior.\n\nA genuine advantage here is that uSB-C emergency power backup ensures access to urgently needed documents. The tradeoff is that no documented fire protection, security-only design.",
    specs: ["0.23 cu ft, mountable, no documented fire resistance", "USB-C emergency power backup", "Pre-drilled installation holes"],
    pros: ["USB-C emergency power backup ensures access to urgently needed documents"],
    cons: ["No documented fire protection, security-only design"],
    bestFor: "Buyers prioritizing guaranteed access to documents over fire protection.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Required a fireproof interior geometry check, not just cubic feet", description: "We looked at whether hanging file folders, passports, and letter-size paper fit flat without bending, a genuine organizational factor a raw capacity number doesn't capture." },
  { title: "Separated fireproof document safes from basic steel security boxes honestly", description: "Three picks here explicitly document no fire rating; we labeled these as security-only rather than blending them into a fireproof-document ranking." },
  { title: "Compared soft fireproof organizers against rigid steel safes", description: "The DocSafe soft organizer claims a higher temperature rating with extensive internal organization but offers less physical impact resistance than a steel box. We flagged that genuine tradeoff." },
  { title: "Noted digital media protection separately from paper document protection", description: "Several picks separately certify CD/DVD/USB protection alongside paper documents, since digital media has different heat sensitivity." },
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
          "SentrySafe Black Fireproof and Waterproof Safe"
        ],
        [
          "Genuine anti-removal, bolt-down support",
          "SentrySafe Fireproof Safe with Key Lock"
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
          "Under $68",
          "SentrySafe Black Fireproof and Waterproof Safe"
        ],
        [
          "Up to $102",
          "SentrySafe Shelf Safe with Digital Keypad Lock"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "Physical key",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: SentrySafe Black Fireproof and Waterproof Safe, SentrySafe Fireproof Safe with Key Lock."
      },
      {
        "label": "Electronic access",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Fireproof Safe Box with Key Lock, DocSafe 5200°F Fireproof Document Organizer Box with Lock, SentrySafe Shelf Safe with Digital Keypad Lock, Bonsaii Safe Box with Electronic Keypad for Home Office, Yuanshikj Small Steel Security Safe Box with Keypad, Bonsaii Small Safe Box with Electronic Keypad for Valuables."
      }
    ],
    "note": "Most buyers should default to electronic access with a confirmed backup method unless simplicity is the top priority."
  },
  {
    "subheading": "By Interior Capacity",
    "note": "Check each pick's listed interior dimensions, not just the cubic-footage figure, against what you're actually planning to store before buying. Yuanshikj Small Steel Security Safe Box with Keypad is the most-reviewed option here if you want the safer bet."
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
        "text": "You're storing genuinely valuable or irreplaceable items, where SentrySafe Shelf Safe with Digital Keypad Lock's higher price buys real security or fire-protection headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just need basic theft deterrence for low-value items, where SentrySafe Black Fireproof and Waterproof Safe covers the same job at a lower price."
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
  { q: "What's the best safe for hanging file folders specifically?", a: "The SentrySafe Black Fireproof and Waterproof Safe, with an interior specifically sized for hanging file folders." },
  { q: "Is there a soft, portable fireproof document organizer?", a: "Yes, the DocSafe 5200°F Fireproof Document Organizer Box is a soft bag with extensive internal organization, lighter than a steel safe." },
  { q: "Are all these picks actually fireproof?", a: "No, three picks here explicitly don't document fire protection, they're security-focused document boxes. Check our comparison table for which picks have a genuine UL or ETL fire rating." },
  { q: "Is there an option that also fits a laptop alongside documents?", a: "Yes, the SentrySafe Shelf Safe with Digital Keypad Lock has the widest interior in this comparison, though it's explicitly not fireproof." },
  { q: "Which pick has the highest claimed fire temperature resistance?", a: "The DocSafe 5200°F Fireproof Document Organizer Box, though as a soft bag it offers less physical impact resistance than a steel safe." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-fireproof-safes", title: "Best Small Fireproof Safes (2026)" },
  { href: "/guide/best-small-fireproof-and-waterproof-safes", title: "Best Small Fireproof and Waterproof Safes (2026)" },
  { href: "/guide/best-small-safe-boxes", title: "Best Small Safe Boxes (2026)" },
];
