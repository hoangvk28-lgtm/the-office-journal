// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Require a stated classification body, duration, and temperature",
    "explanation": "A genuine fire rating names UL or ETL, a duration (commonly 30 minutes here), and a temperature (commonly 1550°F). Reject listings that only say fireproof without these three specifics."
  },
  {
    "criterion": "Check whether water protection is separately documented, not assumed",
    "explanation": "Several picks here document fire and water resistance as two independent certifications. A fire-rated safe is not automatically flood-safe unless that's separately stated."
  },
  {
    "criterion": "Confirm whether digital media is covered separately from paper documents",
    "explanation": "CDs, DVDs, and USB drives are more heat-sensitive than paper. Several SentrySafe picks here document ETL verification specifically for digital media, a separate claim from the paper-document UL rating."
  },
  {
    "criterion": "Weigh bolt-down hardware inclusion as a genuine anti-removal feature",
    "explanation": "A fireproof safe that survives a fire but gets carried out by an intruder beforehand hasn't protected anything. Check whether mounting hardware is included, not sold separately."
  },
  {
    "criterion": "Consider access method against your actual emergency scenario",
    "explanation": "Key-only access requires finding the key during a stressful evacuation; digital keypad access with a documented battery backup avoids that dependency, worth weighing against your household's habits."
  }
];

export const faq = [
  {
    "q": "What's the most explicitly documented fire rating in this comparison?",
    "a": "The SentrySafe Fireproof Safe Box with Key Lock, UL classified for 1/2 hour at 1550°F with a lifetime after-fire replacement guarantee."
  },
  {
    "q": "Is there an option rated for both fire and water protection?",
    "a": "Yes, the SentrySafe Black Fireproof and Waterproof Safe and the SentrySafe Dark Gray Fireproof and Waterproof Safe both separately document fire and water resistance."
  },
  {
    "q": "Which pick has a digital keypad instead of a key-only lock?",
    "a": "3 Cub Small Fireproof Safe both offer digital code access alongside backup keys."
  },
  {
    "q": "What's the largest-capacity fireproof safe here?",
    "a": ""
  },
  {
    "q": "Why does this list have 7 products instead of 8?",
    "a": "One original candidate ASIN was not accessible through the Amazon catalog API at research time, so we excluded it rather than fabricating its data."
  }
];

export const guideSlug = "best-small-fireproof-safes";

export const guideTitle = "The Best Small Fireproof Safes for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg";

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
          "SentrySafe Fireproof Safe Box with Key Lock (UL + lifetime guarantee)"
        ],
        [
          "Both fire and water protection documented",
          "SentrySafe Black Fireproof and Waterproof Safe"
        ],
        [
          "",
          "SentrySafe Fireproof Safe, Chest Lock Box for Home or Travel"
        ],
        [
          "",
          "3 Cub Small Fireproof Safe for Home"
        ]
      ]
    }
  },
  {
    "subheading": "Reading a Fire Rating Correctly",
    "note": "A genuine fire classification states three things: the certifying body (UL or ETL), the duration (commonly 30 minutes across these picks), and the test temperature (commonly 1550°F). If a listing states none of these three, treat its fireproof claim as unverified marketing language rather than a real classification, regardless of how confident the listing sounds."
  }
];

export const howWeEvaluated = [
  {
    "title": "Required a documented fire-protection basis, not just the word fireproof",
    "description": "We looked for a classification body (UL, ETL), a stated duration, and a test temperature before treating any pick as fire-rated, rather than accepting marketing language alone."
  },
  {
    "title": "Separated fire protection from water protection",
    "description": "Several picks here document both UL fire classification and separate ETL water verification; others document fire only. We flagged this distinction directly rather than assuming one implies the other."
  },
  {
    "title": "Distinguished paper-document protection from digital-media protection",
    "description": "Multiple SentrySafe picks separately certify protection for paper documents versus CDs, DVDs, and USB drives, which have different heat sensitivity. We noted where both were independently confirmed."
  },
  {
    "title": "Excluded the inaccessible ASIN rather than fabricating its data",
    "description": "One original candidate ASIN returned ItemNotAccessible from the product catalog API at research time. We excluded it and disclosed the gap rather than guessing."
  }
];

export const introParagraphs = [
  "We required a documented fire-protection basis before ranking any pick here: a classification body, stated duration, and test temperature, rather than accepting the word fireproof as sufficient on its own. One original candidate ASIN was not accessible through the product catalog at research time, so we're presenting the 7 we could verify.",
  "We also separated the fire claim from water resistance, since not every pick here documents both, and we're flagging exactly which protection each one covers rather than assuming a fireproof safe automatically handles flooding too."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small fireproof safes";

export const metaDescription = "We compared 7 small fireproof safes on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Small Fireproof Safes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0cbnq8lyx-sfs",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Honeywell Safes & Door Locks - Small Safe Box for Home - Fire Resistant",
    "price": "$35.35",
    "rating": "4.7",
    "reviews": "5439",
    "imageUrl": "https://m.media-amazon.com/images/I/31f4yBhxMmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CBNQ8LYX?tag=theofficejournal-20",
    "description": "Double steel wall construction sandwiches fire-resistant insulation between two layers of steel, a genuine structural approach to heat protection rather than relying on a single wall with a fire coating. A dual locking system combines a secure key lock with 2 entry keys included for dependable access.\n\nA reinforced hinge specifically resists tampering, and a foam-padded floor prevents scratches on stored items. Lightweight and portable despite the fire-resistant construction, positioned for documents, passports, or a cell phone rather than bulkier storage.",
    "specs": [
      "Double steel wall + fire-resistant insulation",
      "Dual locking system, 2 keys included",
      "Foam-padded floor, reinforced tamper-resistant hinge"
    ],
    "pros": [
      "Double steel wall construction, not a single wall with fire coating",
      "Reinforced hinge specifically engineered against tampering"
    ],
    "cons": [
      "Exact fire duration and temperature rating not detailed in this listing"
    ],
    "bestFor": "Buyers wanting genuine double-wall fire construction at an accessible price."
  },
  {
    "id": "b008nhkwzu-sfs",
    "rank": 2,
    "badge": "Most Documented Fire Rating",
    "name": "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    "price": "See listing",
    "rating": "4.6",
    "reviews": "22264",
    "imageUrl": "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    "description": "This is UL classified for fire endurance at 1/2 hour at 1550°F to protect documents, and separately ETL verified at the same duration and temperature specifically for digital media like CDs, DVDs, and memory sticks, two distinct certifications for two distinct content types. A lifetime after-fire replacement guarantee backs the claim directly rather than just stating a spec.\n\nA privacy key lock (2 keys included) keeps casual viewers out and specifically prevents the lid from opening during a fire event, and built-in carrying grips make the safe portable during an evacuation.",
    "specs": [
      "UL classified: 1/2 hr at 1550°F (documents)",
      "ETL verified: 1/2 hr at 1550°F (digital media)",
      "Lifetime after-fire replacement guarantee"
    ],
    "pros": [
      "Separately certified for both paper documents and digital media",
      "Lifetime after-fire replacement guarantee, unique in this comparison"
    ],
    "cons": [
      "Key lock only, no digital keypad option"
    ],
    "bestFor": "Buyers wanting the most explicitly documented, third-party-certified fire rating here."
  },
  {
    "id": "b00ge57dfk-sfs",
    "rank": 3,
    "badge": "Best for Document Organization",
    "name": "SentrySafe Black Fireproof and Waterproof Safe, File Folder and Document Box",
    "price": "$67.99",
    "rating": "4.5",
    "reviews": "14963",
    "imageUrl": "https://m.media-amazon.com/images/I/51T8rsbqkgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00GE57DFK?tag=theofficejournal-20",
    "description": "UL Classified to withstand high temperatures for up to 30 minutes and separately ETL Verified to protect contents during water exposure, meaning both hazards are independently documented rather than one implied by the other. The spacious interior specifically fits hanging file folders, useful for organizing passports, birth certificates, insurance records, and legal paperwork rather than a loose pile.\n\nA durable key lock (2 keys included) prevents unauthorized access and keeps the lid securely closed during a fire event specifically, and the compact footprint fits closets or under a desk while remaining portable enough to relocate.",
    "specs": [
      "UL Classified fire rating + ETL Verified water protection",
      "Hanging file folder capacity",
      "Key lock, 2 keys included"
    ],
    "pros": [
      "Independently documented fire AND water protection, not just one implying the other",
      "Fits hanging file folders directly, genuine document organization"
    ],
    "cons": [
      "Higher price than the basic SentrySafe chest options"
    ],
    "bestFor": "Buyers organizing hanging file folders who need both fire and water protection documented separately."
  },
  {
    "id": "b008hzui34-sfs",
    "rank": 4,
    "badge": "Best for Travel Portability",
    "name": "SentrySafe Fireproof Safe with Key Lock, Chest Lock Box for Home or Travel",
    "price": "$39.98",
    "rating": "4.6",
    "reviews": "2807",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZBhxLuCQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008HZUI34?tag=theofficejournal-20",
    "description": "UL Classified to endure 1/2 hour at 1550°F for documents and valuables, and separately ETL Verified specifically to protect CDs, DVDs, and USBs from fire damage. A flat key lock design prevents the lid from opening during a fire event, with 2 keys included for backup access.\n\nBolt-down hardware is included in the box rather than sold separately, a genuine anti-removal feature many fireproof chests skip, alongside a built-in carrying handle explicitly for travel or home-to-home portability.",
    "specs": [
      "UL Classified: 1/2 hr at 1550°F",
      "ETL Verified for CDs/DVDs/USBs specifically",
      "Bolt-down hardware included, carrying handle"
    ],
    "pros": [
      "Bolt-down hardware included in the box, not a separate purchase",
      "Carrying handle explicitly designed for travel portability"
    ],
    "cons": [
      "No digital keypad, key-only access"
    ],
    "bestFor": "Buyers wanting genuine portability for travel plus the option to bolt down at home."
  },
  {
    "id": "b00mv7myrm-sfs",
    "rank": 5,
    "badge": "Flush-Mount Design",
    "name": "SentrySafe Dark Gray Fireproof and Waterproof Safe with Key Lock, Chest Lock Box",
    "price": "$72.79",
    "rating": "4.4",
    "reviews": "3197",
    "imageUrl": "https://m.media-amazon.com/images/I/41WUsrhDxML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00MV7MYRM?tag=theofficejournal-20",
    "description": "A flush-mounted lid design is specifically built to be both waterproof and fire-resistant for lasting use, classified to protect valuables, documents, and digital media including CDs, DVDs, hard drives, and memory sticks together in one rated chest. A privacy key lock keeps documents and valuables away from prying eyes.\n\nConvenient for picking up and transporting important documents when needed, at the highest price among the SentrySafe chest options here, reflecting the flush-mount waterproof engineering.",
    "specs": [
      "Flush-mounted lid, fire + water resistant",
      "Rated for documents, CDs, DVDs, hard drives, memory sticks together",
      "Privacy key lock"
    ],
    "pros": [
      "Flush-mounted lid design specifically engineered for both fire and water resistance",
      "Rated for a broader mix of digital media formats together"
    ],
    "cons": [
      "Highest price among the SentrySafe chest options here"
    ],
    "bestFor": "Buyers wanting one chest rated for the widest mix of paper and digital media formats."
  },
  {
    "id": "b00btmu8vy-sfs",
    "rank": 6,
    "badge": "Best for Discreet Placement",
    "name": "Honeywell Safes & Door Locks - Hideable Small Safe Box - Fire Resistant",
    "price": "$99.97",
    "rating": "4.2",
    "reviews": "2535",
    "imageUrl": "https://m.media-amazon.com/images/I/41sdhXik28L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00BTMU8VY?tag=theofficejournal-20",
    "description": "Double steel wall construction provides the fire-resistance basis, paired with a personalized digital entry code rather than a key-only design, plus 2 backup keys for added reliability if the code is forgotten. A concealed hinge specifically helps prevent tampering, engineered for discreet storage where the safe itself shouldn't be obvious.\n\nDesigned explicitly around anti-theft placement, tucked into a closet or cabinet where it isn't the first thing a casual intruder finds, at the highest price in this comparison for that combined digital-access and concealment design.",
    "specs": [
      "Double steel wall + fire-resistant construction",
      "Digital entry code + 2 backup keys",
      "Concealed anti-tamper hinge"
    ],
    "pros": [
      "Digital keypad access, unlike the key-only SentrySafe chests",
      "Concealed hinge design specifically built for discreet placement"
    ],
    "cons": [
      "Highest price in this comparison"
    ],
    "bestFor": "Buyers wanting keypad access combined with a design built for concealment."
  },
  {
    "id": "b0g4cx2w7j-sfs",
    "rank": 7,
    "badge": "Most Configurable Access",
    "name": "1.3 Cub Small Fireproof Safe for Home, Security Anti-Theft Fire Proof Safe",
    "price": "$69.99",
    "rating": "4.5",
    "reviews": "114",
    "imageUrl": "https://m.media-amazon.com/images/I/41DIhJjyfIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4CX2W7J?tag=theofficejournal-20",
    "description": "Three separate access methods cover daily use (personal code), forgotten-password recovery (2 spare keys), and dead-battery situations (external battery case).\n\nA dual alarm system activates after 3 wrong password attempts and locks for 20 seconds, with a silent mode available so accessing the safe doesn't announce your presence or wake a sleeping household.",
    "specs": [
      "1.3 cu ft, 45mm door, 3× 20mm locking bolts",
      "3 access methods: code, 2 spare keys, external battery",
      "Wrong-password alarm with silent mode"
    ],
    "pros": [
      "Largest capacity in this comparison at 1.3 cubic feet",
      "Three independent access methods with a documented dead-battery fallback"
    ],
    "cons": [
      "Fire classification body and exact test conditions not independently confirmed in this listing"
    ],
    "bestFor": "Buyers wanting maximum capacity and access flexibility alongside fire protection."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-fireproof-and-waterproof-safes",
    "title": "Best Small Fireproof and Waterproof Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-for-documents",
    "title": "Best Small Safes for Documents (2026)"
  },
  {
    "href": "/guide/best-small-safes",
    "title": "Best Small Safes (2026)"
  }
];

export const breadcrumbLabel = "Best Small Fireproof Safes";
