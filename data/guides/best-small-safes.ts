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
    "q": "What's the best overall small safe?",
    "a": ""
  },
  {
    "q": "Do any of these have fire protection?",
    "a": "No, all eight picks here are basic steel security safes without a claimed fire or water rating. See our dedicated small fireproof safes guide for that protection type."
  },
  {
    "q": "Is there an option that bolts to the floor?",
    "a": "Yes, the Honeywell Bolt Down Small Safe Box is the only pick here with confirmed factory bolt-down support."
  },
  {
    "q": "What's the largest capacity option?",
    "a": ""
  },
  {
    "q": "Is there a kid-friendly option?",
    "a": "Yes, the PATRON Small Safe Box is explicitly marketed for kids alongside general home use."
  }
];

export const guideSlug = "best-small-safes";

export const guideTitle = "The Best Small Safes for a Cleaner, More Useful Desk";

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
          "Honeywell Safes & Door Locks"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Yuanshikj Small Steel Security Safe Box with Keypad",
        "text": ""
      },
      {
        "label": "Honeywell Safes & Door Locks",
        "text": "The higher-priced option, worth it if it offers real feature headroom above the cheaper pick."
      }
    ],
    "note": "Default to Yuanshikj Small Steel Security Safe Box with Keypad unless your specific needs call for the pricier pick's extra features."
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
        "text": "You're storing valuable or irreplaceable items, where Honeywell Safes & Door Locks's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Classified protection type before ranking",
    "description": "We separated basic steel security boxes (theft deterrence only) from any pick claiming fire or water resistance, and flagged bolt-down capability as a distinct anti-removal feature rather than assuming all small safes offer equivalent protection."
  },
  {
    "title": "Distinguished theft deterrence from certified burglary resistance",
    "description": "None of these listings claim a certified UL burglary rating. We're calling this basic theft deterrence, useful against casual access but not verified against determined forced entry."
  },
  {
    "title": "",
    "description": "Review counts here range from 0 to nearly 23,000. We treated that spread as a meaningful confidence signal, not a secondary detail."
  },
  {
    "title": "Flagged bolt-down support as a genuine anti-removal differentiator",
    "description": "Only one pick confirms factory bolt-down installation. A small, light safe without anchoring can simply be carried away regardless of how strong its lock is."
  }
];

export const introParagraphs = [
  "Small safes span different protection categories: basic steel security boxes, hideable fire-resistant safes, and bolt-down units all get grouped under the same search term. We classified each pick by its actual protection type first rather than ranking them on one undifferentiated scale.",
  "None of these listings had independently verified burglary-resistance ratings, so we're distinguishing basic theft deterrence, which most picks here offer, from certified burglary resistance, which none of them claim."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safes";

export const metaDescription = "A practical comparison of 8 small safes, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Small Safes for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0ckpf8gf9-sms",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    "price": "$52.24",
    "rating": "4.6",
    "reviews": "1326",
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    "description": "84 inches with a removable shelf, this is the roomiest safe in our top tier, built from SPCC steel with two 18mm-diameter locking bolts rather than the thinner single-bolt hardware some budget competitors use. The felt-lined bottom keeps jewelry and watch cases from scratching, and pre-drilled holes with two included expansion screws let you fix it inside a wall cabinet instead of leaving it freestanding. What actually sets it apart is the three-way access system: personal code, an emergency override key (two included), or a Type-C cable plugged into the battery box if the internal batteries die or you forget the code. That third option removes the single most common failure mode of keypad safes, being locked out with dead batteries and no backup plan. It's FCC certified and backed by manufacturer support, which matters more here than on a lockbox since you're trusting it with the largest capacity in this lineup.",
    "specs": [
      "0.6 cu ft (13.78×9.84×9.84 in), removable shelf",
      "Two 18mm steel locking bolts",
      "3 access methods: code, key, or USB-C emergency power"
    ],
    "pros": [
      "Largest usable capacity in this comparison with a removable shelf for organizing",
      "Type-C emergency power backup solves the dead-battery lockout problem entirely",
      "Felt-lined interior prevents scratching on jewelry or electronics"
    ],
    "cons": [
      "No claimed fire or water resistance, this is theft deterrence only",
      "Requires a power bank (not included) to use the USB-C backup access"
    ],
    "bestFor": "Buyers wanting the roomiest option here with a genuine backup plan if the keypad fails."
  },
  {
    "id": "b09sz6gpgr-sms",
    "rank": 2,
    "badge": "Best Reviewed",
    "name": "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    "price": "$31.99",
    "rating": "4.5",
    "reviews": "3167",
    "imageUrl": "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SZ6GPGR?tag=theofficejournal-20",
    "description": "This is the only safe in our top tier with an automatic interior light, the sensor turns it on for 30 seconds when you open the door via keypad, which helps if the safe lives on a low closet shelf or under a desk where you can't see inside easily. The keypad also gives visual feedback: an indicator light confirms whether your entry was correct, and it warns you with a red light before the batteries actually die, rather than leaving you guessing.\n\nSecurity-wise, it uses reinforced alloy steel with two enhanced bolts, pry-resistant concealed hinges, and a tamper-proof door, and it includes a separate waterproof/fireproof document bag inside for double protection on paper documents specifically (the safe body itself isn't rated fireproof). A three-wrong-entries lockout triggers a 5-minute cooldown, a real deterrent against someone just guessing codes. 5 inches exterior, this is meaningfully smaller than the Bonsaii pick above, so measure your intended contents before ordering.\n\nLow-battery warning prevents surprise lockouts. That said, smaller interior than the Bonsaii top pick, verify your items fit before buying.",
    "specs": [
      "0.23 cu ft (9×6.6×6.5 in exterior, 8.6×6.2×6.1 in interior)",
      "Auto interior light, low-battery warning light",
      "3-wrong-entry lockout (5 min), includes fireproof document bag"
    ],
    "pros": [
      "Auto interior light is a useful detail most competitors skip",
      "Low-battery warning prevents surprise lockouts",
      "Includes a separate fireproof/waterproof bag for paper documents"
    ],
    "cons": [
      "Smaller interior than the Bonsaii top pick, verify your items fit before buying",
      "The included bag protects documents, not the whole safe, from fire"
    ],
    "bestFor": "Buyers who want visual/light feedback on entry status and a documented low-battery warning."
  },
  {
    "id": "b078myjyd5-sms",
    "rank": 3,
    "badge": "Largest Review Base Overall",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "It also includes a magnetic auto-locking mechanism, so the door locks itself the moment you close it rather than requiring you to manually engage the bolts every time. 12 interior), it's compact, this is meant for cash, a passport, or jewelry, not binders or a laptop. Two emergency keys ship in the box for backup access if you forget your code, and pre-drilled mounting holes with included bolts mean wall or floor anchoring is possible out of the box rather than needing separately purchased hardware.",
    "specs": [
      "0.2 cu ft (9.05×6.69×6.69 in ext, 6.29×8.9×5.12 in int)",
      "Dual steel locking bolts, magnetic auto-lock door",
      "Pre-drilled mounting holes + bolts included"
    ],
    "pros": [
      "Magnetic auto-locking door means you can't accidentally leave it unlocked",
      "Mounting bolts included, no separate hardware purchase needed"
    ],
    "cons": [
      "Small interior, verify dimensions against your specific items before ordering",
      "No fire or water resistance claim"
    ],
    "bestFor": "Buyers wanting the single most proven small safe with self-locking convenience."
  },
  {
    "id": "b0d1x55sw4-sms",
    "rank": 4,
    "badge": "Strong Alternative Budget Pick",
    "name": "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    "price": "$29.99",
    "rating": "4.2",
    "reviews": "4957",
    "imageUrl": "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    "description": "6 liters, sized specifically to fit a closet, drawer, or under a table without dominating the space. Setup takes 4 documented steps (remove the override key cover, install 4 AA batteries, press reset, enter your new code within 15 seconds), which is more involved than a plug-and-go safe but means the process is fully documented rather than left to guesswork.\n\nAccess works two ways: a covered key plus turn-knob, or a personal/master code plus rotary knob, and it accepts two separate codes for multi-user access, useful if two household members each want their own code rather than sharing one. Hidden pry-resistant hinges and two live bolts back up the code system with actual physical resistance, and the package includes an anti-scratch carpet liner plus a full printed manual.\n\nSame steel-and-bolt construction as pricier picks at a lower price.",
    "specs": [
      "4.6L (6.7×9.0×6.7 in), SPCC steel, 18mm dual bolts",
      "2 separate access codes supported (multi-user)",
      "Includes anti-scratch carpet liner + detailed manual"
    ],
    "pros": [
      "Supports two independent codes for multi-user households",
      "Same steel-and-bolt construction as pricier picks at a lower price",
      "Hidden pry-resistant hinges add real physical security beyond the lock"
    ],
    "cons": [
      "4-step setup process is more involved than simpler competitors",
      "Battery type and change interval not independently confirmed"
    ],
    "bestFor": "Two-person households wanting independent access codes without paying for the largest capacity."
  },
  {
    "id": "b0crh68745-sms",
    "rank": 5,
    "badge": "Best Small Capacity Option",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "71-inch reinforcement bolts, and hidden hinges, and it keeps the same USB-C emergency power interface for when an external power bank can revive a dead battery instead of leaving you locked out.\n\nThe package includes two emergency keys, two expansion bolts for mounting, a floor mat, and a user manual, essentially the same accessory bundle as the larger Bonsaii model. This specific listing hadn't accumulated a confirmed review count in our data pull, so weigh the strong Bonsaii track record on the sister product against the fact that this exact SKU is comparatively unproven.\n\nThe standout detail is that full accessory bundle: keys, mounting bolts, floor mat, manual. Balancing that out, no confirmed review count for this specific listing yet.",
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
    "bestFor": "Buyers wanting the Bonsaii brand's backup-power convenience without the larger capacity."
  },
  {
    "id": "b0f62vkh88-sms",
    "rank": 6,
    "badge": "Newest Listing",
    "name": "[UPGRADED] Small Safes for Home, 0.30 Cuft Mini Safe Box",
    "price": "$35.99",
    "rating": "4.3",
    "reviews": "902",
    "imageUrl": "https://m.media-amazon.com/images/I/414LF-aE4zL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F62VKH88?tag=theofficejournal-20",
    "description": "3 cubic feet, positioned for cash, jewelry, passports, and a handful of documents rather than bulk storage. Security comes from two 20mm locking bolts and a notably thick 42mm door, and a solid matte black finish helps it blend into a closet or cabinet rather than announcing itself.\n\nThree differentiated features stand out here: an alarm that triggers after three wrong keypad entries (with a silent mode you can toggle by holding * then pressing 8, useful if the safe is in a bedroom), an automatic LED light that turns on when the door opens, and a backup-key replacement service tied to the safe's unique lock hole serial number if you lose your key entirely, something none of the other picks in this list explicitly offer. It ships with a separate fireproof bag for extra document protection, though the safe body itself carries no fire rating.\n\nManufacturer-backed backup key replacement via serial number if you lose your key.",
    "specs": [
      "0.3 cu ft (10.63×6.69×6.69 in), 42mm door thickness",
      "2× 20mm bolts, wrong-entry alarm with toggleable silent mode",
      "Serial-number-based backup key replacement service"
    ],
    "pros": [
      "Toggleable silent alarm mode is unique in this comparison, useful for bedroom placement",
      "Manufacturer-backed backup key replacement via serial number if you lose your key",
      "Auto LED light on open"
    ],
    "cons": [
      "Manufacturer explicitly states it's not built for bulkier items like binders",
      "Alarm and light features add complexity versus simpler competitors"
    ],
    "bestFor": "Buyers wanting an alarm deterrent with a silent-mode option and a real lost-key recovery path."
  },
  {
    "id": "b00csmv7be-sms",
    "rank": 7,
    "badge": "Best for Bolt-Down Security",
    "name": "Honeywell Safes & Door Locks - Bolt Down Small Safe Box with Digital Lock",
    "price": "$65.99",
    "rating": "4.4",
    "reviews": "2317",
    "imageUrl": "https://m.media-amazon.com/images/I/31i0vOFYG3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00CSMV7BE?tag=theofficejournal-20",
    "description": "This is the only safe in our lineup with pre-drilled mounting holes and all hardware included specifically for bolting to a floor or shelf, from a brand (Honeywell) with a longer institutional track record than most of the other manufacturers here. The cabinet and door are solid steel construction, backed by two solid steel live lock bolts and a programmable digital keypad, with two emergency override keys included in case the keypad ever fails. The scratch-resistant black powder coat finish is a small but real detail: cheaper powder coats chip and expose bare steel to rust over time, and Honeywell's listing specifically calls this out as scratch resistant rather than just painted., this is the most expensive pick in our top tier, but the price reflects genuine anti-removal capability none of the cheaper picks confirm as clearly: a determined thief can't simply pick the safe up and walk away once it's bolted down. Established safe brand with a longer institutional track record. Both are worth keeping in mind before deciding.",
    "specs": [
      "Bolt-down mounting hardware + pre-drilled holes included",
      "Solid steel cabinet and door, 2 solid steel live lock bolts",
      "Scratch-resistant black powder coat finish, 2 emergency keys"
    ],
    "pros": [
      "Only pick with confirmed factory bolt-down hardware included",
      "Established safe brand with a longer institutional track record"
    ],
    "cons": [
      "Highest price in this comparison",
      "Bolting down requires suitable flooring or shelving to anchor into"
    ],
    "bestFor": "Buyers wanting genuine anti-removal security through factory-supported anchoring, not just a lock."
  },
  {
    "id": "b0dwmhjghp-sms",
    "rank": 8,
    "badge": "Kid-Friendly Design",
    "name": "PATRON Small Safe Box for Money with Code and Keys, Solid Mini Safe for Kids",
    "price": "$28.99",
    "rating": "4.5",
    "reviews": "298",
    "imageUrl": "https://m.media-amazon.com/images/I/41iTPTu+ahL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DWMHJGHP?tag=theofficejournal-20",
    "description": "236 cubic feet, this is sized to sit in a drawer, cabinet, nightstand, or shelf without taking up much room, and the listing is explicit that emergency keys should never be stored inside the safe itself, a small but useful reminder for households setting this up for the first time. Access works two ways: digital password entry, or a documented manual process (remove the key cover on the left panel, turn the key counterclockwise while holding it, then rotate the knob clockwise).\n\nConstruction uses heavy-duty steel with a corrosion-resistant coating and two solid anti-pry bolts, and the package includes two emergency keys, two mounting bolts, a scratch-resistant carpet liner, and a manual, the same accessory completeness as the pricier picks here despite the lower price. While marketed toward kids, nothing about the construction is actually scaled down or simplified for that use case, it's the same security-grade hardware as the adult-focused picks, just positioned as a good first safe for teaching responsibility around a code and a key.",
    "specs": [
      "0.236 cu ft (6.7×9.0×6.7 in)",
      "2 anti-pry steel bolts, corrosion-resistant coating",
      "2 access methods: digital password or manual key turn"
    ],
    "pros": [
      "Full-strength steel and bolt construction despite kid-focused marketing",
      "Complete accessory bundle (keys, mounting bolts, liner, manual) at a lower price than comparable picks"
    ],
    "cons": [
      "No fire or water resistance claim"
    ],
    "bestFor": "Households wanting a secure (not toy-grade) first safe for kids, or general dual code/key access."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safes-for-home",
    "title": "Best Small Safes for Home (2026)"
  },
  {
    "href": "/guide/best-small-fireproof-safes",
    "title": "Best Small Fireproof Safes (2026)"
  },
  {
    "href": "/guide/best-small-safes-that-bolt-to-the-floor",
    "title": "Best Small Safes That Bolt to the Floor (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safes";
