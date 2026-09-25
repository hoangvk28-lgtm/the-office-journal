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
    "q": "What's the best overall small safe for home?",
    "a": "The Bonsaii Safe Box with Electronic Keypad, with the largest confirmed capacity among the top-rated picks in this comparison."
  },
  {
    "q": "Is there a fireproof option?",
    "a": "3 Cub Small Fireproof Safe for Home is the only pick here that specifically claims fire protection."
  },
  {
    "q": "Which pick has the most proven track record?",
    "a": ""
  },
  {
    "q": "Is there an option that bolts down for anti-removal security?",
    "a": "Yes, the Honeywell Bolt Down Small Safe Box is the only pick here with confirmed factory bolt-down support."
  },
  {
    "q": "Is there a kid-friendly option?",
    "a": "Yes, the PATRON Small Safe Box is explicitly marketed for households with kids."
  }
];

export const guideSlug = "best-small-safes-for-home";

export const guideTitle = "The Best Small Safes for Home: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg";

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
          "Voncabay Money Safe Box for Home with Digital Keypad"
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
          "Yuanshikj Small Steel Security Safe Box with Keypad"
        ],
        [
          "",
          "3 Cub Small Fireproof Safe for Home"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. 3 Cub Small Fireproof Safe for Home, [UPGRADED] Small Safes for Home."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: Bonsaii Safe Box with Electronic Keypad for Home Office, Yuanshikj Small Steel Security Safe Box with Keypad, Voncabay Money Safe Box for Home with Digital Keypad, Honeywell Safes & Door Locks, Bonsaii Small Safe Box with Electronic Keypad for Valuables, PATRON Small Safe Box for Money with Code and Keys."
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
          "Voncabay Money Safe Box for Home with Digital Keypad"
        ],
        [
          "Theft deterrence only, no fire claim",
          "Bonsaii Safe Box with Electronic Keypad for Home Office"
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
        "text": "3 Cub Small Fireproof Safe for Home's higher price buys real security or fire-protection headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need basic theft deterrence for low-value items, where Yuanshikj Small Steel Security Safe Box with Keypad covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Separated the one confirmed fireproof pick from basic security safes",
    "description": "3 cubic foot pick) claims fire protection. We flagged this clearly rather than implying the other seven offer equivalent disaster protection."
  },
  {
    "title": "Weighed anchoring for households wanting anti-removal security",
    "description": "Only the Honeywell bolt-down pick confirms factory anchor support, a meaningful differentiator for households worried about a small, light safe being carried away."
  },
  {
    "title": "Matched capacity against realistic home placement",
    "description": "3 cubic foot capacity directly, since household document and cash storage needs vary meaningfully by family size and use case."
  },
  {
    "title": "Noted kid-inclusive design as a genuine household differentiator",
    "description": "The PATRON pick specifically markets to households with kids, a distinct use case from the general security-focused picks."
  }
];

export const introParagraphs = [
  "A home safe needs to fit realistically in a closet, cabinet, or bedroom, with an access plan the whole household can actually use. We compared confirmed capacity, access method, and protection type across these picks, and flagged the one listing here that specifically claims fire resistance versus the others that only offer basic theft deterrence.",
  "None of these listings had independently verified anchoring instructions specific to common home substrates like drywall over wood studs, so we're noting that as something to confirm directly before installation."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safes for home";

export const metaDescription = "A practical comparison of 8 small safes for home, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Small Safes for Home (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0ckpf8gf9-ssfh",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    "price": "$52.24",
    "rating": "4.6",
    "reviews": "1326",
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    "description": "84 inches with a removable interior shelf for splitting valuables into layers. It's built from SPCC steel with two 18mm locking bolts, and pre-drilled holes with two included expansion screws let you actually fix it inside a wall cabinet, so it isn't just sitting loose in a closet.\n\nThe household-relevant detail is the three-way access: personal code for daily use, an emergency override key for backup, or a Type-C cable into the battery box if the internal batteries die and no one in the house has the code memorized. That third path matters specifically for shared home use, where a dead battery at an inconvenient moment (say, needing a passport before a flight) shouldn't mean being locked out entirely.\n\nUSB-C emergency power backup prevents a full lockout if batteries die. That said, no claimed fire or water resistance, theft deterrence only.",
    "specs": [
      "0.6 cu ft (13.78×9.84×9.84 in), removable shelf",
      "Two 18mm steel locking bolts",
      "3 access methods: code, key, or USB-C emergency power"
    ],
    "pros": [
      "Largest capacity here, fits passports, jewelry, and documents together",
      "USB-C emergency power backup prevents a full lockout if batteries die",
      "Wall-cabinet mounting holes and screws included"
    ],
    "cons": [
      "No claimed fire or water resistance, theft deterrence only",
      "Needs a separately owned power bank to use the USB-C backup"
    ],
    "bestFor": "Households wanting one roomy safe for mixed valuables with a real backup-access plan."
  },
  {
    "id": "b078myjyd5-ssfh",
    "rank": 2,
    "badge": "Most Proven Overall",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "It's built from reinforced solid steel with dual door locking bolts and a corrosion-resistant powder coat finish, which matters if the safe ends up in a garage, basement, or humid closet rather than climate-controlled.\n\nThe magnetic auto-locking door is the standout household feature: it locks itself the instant you close it, so there's no risk of a kid or guest finding it accidentally left open. 69 inches exterior, it's compact, sized for cash, a passport, or jewelry rather than a stack of files, and two emergency keys ship in the box in case someone in the household forgets the code.",
    "specs": [
      "0.2 cu ft (9.05×6.69×6.69 in ext, 6.29×8.9×5.12 in int)",
      "Dual steel locking bolts, magnetic auto-lock door",
      "Pre-drilled mounting holes + bolts included"
    ],
    "pros": [
      "Self-locking door removes the risk of an accidentally unsecured safe",
      "Mounting hardware included for wall or floor anchoring"
    ],
    "cons": [
      "Compact interior, verify your household's specific items fit before buying",
      "No fire or water resistance claim"
    ],
    "bestFor": "Budget-conscious households wanting the single most proven small safe available."
  },
  {
    "id": "b09sz6gpgr-ssfh",
    "rank": 3,
    "badge": "Best Reviewed Budget Option",
    "name": "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    "price": "$31.99",
    "rating": "4.5",
    "reviews": "3167",
    "imageUrl": "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SZ6GPGR?tag=theofficejournal-20",
    "description": "The automatic interior light here is a practical household feature: it switches on for 30 seconds when the keypad opens the door, useful if the safe lives on a low closet shelf or in a dim corner where digging around for a passport or jewelry by feel isn't ideal. The keypad also gives clear feedback, an indicator light confirms whether your code was entered correctly, and it warns with a red light before the batteries actually run out.\n\nBuilt from reinforced alloy steel with pry-resistant concealed hinges and a tamper-proof door, it also includes a separate waterproof and fireproof document bag inside, useful for birth certificates or a passport specifically, even though the safe body itself isn't fire-rated. A three-wrong-entries lockout (5-minute cooldown) adds a real deterrent if a curious kid tries guessing the code repeatedly.\n\nLow-battery warning avoids a surprise lockout.",
    "specs": [
      "0.23 cu ft (9×6.6×6.5 in exterior, 8.6×6.2×6.1 in interior)",
      "Auto interior light, low-battery warning light",
      "3-wrong-entry lockout (5 min), includes fireproof document bag"
    ],
    "pros": [
      "Auto interior light helps in a dim closet or cabinet",
      "Low-battery warning avoids a surprise lockout",
      "Includes a fireproof/waterproof bag for critical paper documents"
    ],
    "cons": [
      "Smaller interior than the Bonsaii top pick",
      "The included bag protects documents specifically, not the whole safe, from fire"
    ],
    "bestFor": "Households wanting light-assisted access in a dim storage spot plus a documented low-battery warning."
  },
  {
    "id": "b00csmv7be-ssfh",
    "rank": 4,
    "badge": "Best for Anti-Removal Security",
    "name": "Honeywell Safes & Door Locks - Bolt Down Small Safe Box with Digital Lock",
    "price": "$65.99",
    "rating": "4.4",
    "reviews": "2317",
    "imageUrl": "https://m.media-amazon.com/images/I/31i0vOFYG3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00CSMV7BE?tag=theofficejournal-20",
    "description": "For a household specifically worried about a break-in rather than just casual access by family members, this is the pick that actually addresses that threat model: it ships with pre-drilled mounting holes and all hardware needed to bolt it to a closet floor or shelf. A locked-but-unanchored safe can simply be picked up and carried out by an intruder; this one is designed to be physically fixed in place first.\n\nBeyond the anchoring, it's solid steel cabinet and door construction with two solid steel live lock bolts and a programmable digital keypad, backed by two emergency override keys. The scratch-resistant black powder coat finish is a small durability detail worth noting: it resists the chipping that exposes bare steel to rust on cheaper painted safes over years of household use.\n\nThe standout detail is that established brand with a longer institutional track record. Balancing that out, highest price in this comparison.",
    "specs": [
      "Bolt-down mounting hardware + pre-drilled holes included",
      "Solid steel cabinet and door, 2 solid steel live lock bolts",
      "Scratch-resistant black powder coat finish, 2 emergency keys"
    ],
    "pros": [
      "Only pick here with confirmed factory bolt-down hardware for genuine anti-removal security",
      "Established brand with a longer institutional track record"
    ],
    "cons": [
      "Highest price in this comparison",
      "Requires suitable flooring or shelving to bolt into"
    ],
    "bestFor": "Households whose primary concern is a break-in, not just casual access by family members."
  },
  {
    "id": "b0g4cx2w7j-ssfh",
    "rank": 5,
    "badge": "Only Fireproof Option",
    "name": "1.3 Cub Small Fireproof Safe for Home, Security Anti-Theft Fire Proof Safe",
    "price": "$69.99",
    "rating": "4.5",
    "reviews": "114",
    "imageUrl": "https://m.media-amazon.com/images/I/41DIhJjyfIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G4CX2W7J?tag=theofficejournal-20",
    "description": "3 cubic feet with a removable shelf and soft felt-lined flooring to keep items from scratching each other. Solid steel construction includes three round 20mm locking bolts, a 45mm reinforced pry-resistant door, and internal concealed hinges.\n\nThe household-specific features are thoughtful: a dual alarm system triggers after three wrong password attempts (with a silent mode so it doesn't wake a sleeping household), and an automatic LED light activates for visibility in low light. Three access paths, code, spare keys, or external battery case, mean no single point of failure locks a family out, and anchoring hardware is included for wall or floor mounting.\n\nSilent alarm mode avoids waking a sleeping household.",
    "specs": [
      "1.3 cu ft, 45mm door, 3× 20mm locking bolts",
      "Claimed fire resistance, removable shelf, felt-lined interior",
      "3 access methods, dual alarm with silent mode, auto LED light"
    ],
    "pros": [
      "Only pick with a claimed fire protection rating, largest capacity too",
      "Silent alarm mode avoids waking a sleeping household",
      "Three independent access paths (code, key, external battery)"
    ],
    "cons": [
      "Exact fire rating duration/temperature not independently confirmed in our data"
    ],
    "bestFor": "Households prioritizing document and heirloom protection from fire, not just theft deterrence."
  },
  {
    "id": "b0f62vkh88-ssfh",
    "rank": 6,
    "badge": "Moderate Capacity Option",
    "name": "[UPGRADED] Small Safes for Home, 0.30 Cuft Mini Safe Box",
    "price": "$35.99",
    "rating": "4.3",
    "reviews": "902",
    "imageUrl": "https://m.media-amazon.com/images/I/414LF-aE4zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F62VKH88?tag=theofficejournal-20",
    "description": "It uses two 20mm locking bolts and a 42mm-thick door, thicker than several cheaper competitors, in a matte black finish designed to blend into a closet rather than stand out.\n\nTwo household-relevant details push it above a generic budget safe: a wrong-entry alarm with a toggleable silent mode (hold * then press 8), useful if the safe sits in a bedroom and you don't want an alarm blaring at 2am over a mistyped code, and a backup-key replacement service tied to the safe's unique serial number if a household member ever loses the physical key entirely. It also includes a separate fireproof bag, though the safe body itself isn't rated.\n\nSerial-number key replacement service if the physical key is lost. Both are worth keeping in mind before deciding.",
    "specs": [
      "0.3 cu ft (10.63×6.69×6.69 in), 42mm door thickness",
      "2× 20mm bolts, wrong-entry alarm with toggleable silent mode",
      "Serial-number-based backup key replacement service"
    ],
    "pros": [
      "Toggleable silent alarm avoids waking the household over a mistyped code",
      "Serial-number key replacement service if the physical key is lost",
      "Thicker 42mm door than several cheaper competitors"
    ],
    "cons": [
      "Manufacturer states it's not built for bulkier items like binders",
      "No fire rating on the safe body itself, only the included bag"
    ],
    "bestFor": "Households wanting an alarm deterrent that won't disturb sleep, plus a real lost-key recovery path."
  },
  {
    "id": "b0crh68745-ssfh",
    "rank": 7,
    "badge": "Same Trusted Brand, Compact Size",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "71-inch reinforcement bolts, hidden hinges, and, importantly, the same USB-C emergency power interface, so a dead battery still doesn't mean a full lockout if a household member has a power bank on hand.\n\nThe accessory bundle matches the larger model: two emergency keys, two expansion bolts for mounting, a floor mat, and a manual. This specific listing hadn't accumulated a confirmed review count in our data pull at research time, so weigh the strong track record of the sister Bonsaii product against the fact that this exact compact SKU is comparatively unproven.",
    "specs": [
      "0.23 cu ft (9.06×6.69×6.69 in ext, 8.98×6.46×6.61 in int)",
      "SPHC steel, two 0.71-inch reinforcement bolts, hidden hinges",
      "USB-C emergency power backup, same as the larger Bonsaii pick"
    ],
    "pros": [
      "Same trusted Bonsaii construction and USB-C backup access in a smaller footprint",
      "Full accessory bundle: keys, mounting bolts, floor mat, manual"
    ],
    "cons": [
      "No confirmed review count for this specific listing yet"
    ],
    "bestFor": "Households wanting the Bonsaii brand's backup-power convenience in a more compact size."
  },
  {
    "id": "b0dwmhjghp-ssfh",
    "rank": 8,
    "badge": "Best for Kid-Inclusive Households",
    "name": "PATRON Small Safe Box for Money with Code and Keys, Solid Mini Safe for Kids",
    "price": "$28.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41iTPTu+ahL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWMHJGHP?tag=theofficejournal-20",
    "description": "236 cubic feet, this fits easily in a drawer, nightstand, or shelf, and the listing carries an explicit, useful reminder: never store the emergency keys inside the safe itself. That's a common household mistake this listing specifically calls out rather than leaving buyers to figure out on their own.\n\nConstruction is heavy-duty steel with a corrosion-resistant coating and two solid anti-pry bolts, the same security-grade hardware as the adult-focused picks here despite the kid-friendly marketing angle. The full accessory bundle, two emergency keys, two mounting bolts, a scratch-resistant carpet liner, and a manual, matches pricier competitors at a lower cost, making it a reasonable pick for a household wanting a secure first safe for a kid's allowance or small valuables, not a toy-grade lockbox.\n\nExplicit reminder against storing keys inside the safe, a common household mistake.",
    "specs": [
      "0.236 cu ft (6.7×9.0×6.7 in)",
      "2 anti-pry steel bolts, corrosion-resistant coating",
      "2 access methods: digital password or manual key turn"
    ],
    "pros": [
      "Full-strength steel and bolt construction despite kid-focused marketing",
      "Explicit reminder against storing keys inside the safe, a common household mistake",
      "Complete accessory bundle at a lower price than comparable picks"
    ],
    "cons": [
      "No fire or water resistance claim"
    ],
    "bestFor": "Households wanting a secure (not toy-grade) first safe for a kid, or a second unit for shared family use."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safes",
    "title": "Best Small Safes (2026)"
  },
  {
    "href": "/guide/best-small-fireproof-safes",
    "title": "Best Small Fireproof Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-for-closets",
    "title": "Best Small Safes for Closets (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safes for Home";
