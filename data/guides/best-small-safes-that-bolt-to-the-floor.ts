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
    "q": "Which picks explicitly confirm floor bolt-down installation?",
    "a": "Three: the SentrySafe Shelf Safe, the Amazon Basics Steel Security Safe, and the Yuanshikj Small Steel Security Safe Box."
  },
  {
    "q": "Do the other picks not have any mounting hardware?",
    "a": "Most confirm wall, cabinet, or under-furniture mounting, just not floor installation specifically. Verify directly with the manufacturer if floor bolting is your exact requirement."
  },
  {
    "q": "Is there a fire-rated safe that also bolts to the floor?",
    "a": "Not confirmed in this comparison. The strongest fire-rated pick here (SentrySafe Fireproof Safe Box) emphasizes portability instead of confirmed mounting hardware."
  },
  {
    "q": "What's the heaviest, most substantial floor-boltable pick?",
    "a": ""
  },
  {
    "q": "Does floor bolting alone guarantee theft resistance?",
    "a": "It's a strong anti-removal method, but combine it with adequate safe weight and construction quality for the best real-world resistance."
  }
];

export const guideSlug = "best-small-safes-that-bolt-to-the-floor";

export const guideTitle = "The Best Small Safes That Bolt to the Floor for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg";

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
          "SentrySafe Shelf Safe with Digital Keypad Lock"
        ],
        [
          "",
          "SentrySafe Shelf Safe with Digital Keypad Lock"
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
          "SentrySafe Fireproof Safe Box with Key Lock"
        ]
      ]
    }
  },
  {
    "subheading": "Physical Key vs Electronic Access",
    "cards": [
      {
        "label": "",
        "text": "No batteries to fail, but a lost key means a lockout with no backup. In this comparison: SentrySafe Fireproof Safe Box with Key Lock."
      },
      {
        "label": "",
        "text": "More convenient day to day, worth checking for a backup access method in case the battery dies. In this comparison: SentrySafe Shelf Safe with Digital Keypad Lock, Amazon Basics Steel Security Safe and Lock Box with Electronic Keypad, Yuanshikj Small Steel Security Safe Box with Keypad, Bonsaii Safe Box with Electronic Keypad for Home Office, Digital Electronic Money Safe, Voncabay Money Safe Box for Home with Digital Keypad, Bonsaii Small Safe Box with Electronic Keypad for Valuables."
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
          "SentrySafe Shelf Safe with Digital Keypad Lock"
        ],
        [
          "Theft deterrence only, no fire claim",
          "Amazon Basics Steel Security Safe and Lock Box with Electronic Keypad"
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
        "text": "You're storing valuable or irreplaceable items, where SentrySafe Fireproof Safe Box with Key Lock's higher price buys real security or fire-protection headroom over the cheaper picks."
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
    "title": "Required explicit floor bolt-down language, not just general mounting",
    "description": "Only 3 of 8 picks here explicitly state floor mounting in their listings. We flagged the other 5 as confirming wall, cabinet, or general installation holes without specifically stating floor bolt-down capability."
  },
  {
    "title": "Weighed safe weight against the value of floor anchoring",
    "description": "A heavier safe benefits more from floor bolting since it's already harder to move; we noted weight where confirmed to give context on how much anchoring adds."
  },
  {
    "title": "Distinguished carrying-handle portable designs from mountable ones entirely",
    "description": "One pick explicitly emphasizes carrying grips over any mounting hardware, a meaningfully different design intent from the floor-boltable picks."
  },
  {
    "title": "Recommended direct manufacturer verification where floor mounting wasn't explicit",
    "description": "For picks confirming wall, cabinet, or peg mounting without explicitly stating floor compatibility, we recommended verifying directly rather than assuming equivalence."
  }
];

export const introParagraphs = [
  "We required explicit floor bolt-down language in each listing before treating a pick as floor-anchorable, since several safes confirm wall or cabinet mounting without specifically stating floor installation. We're disclosing which picks explicitly support floor bolting versus general mounting.",
  "Floor anchoring is the strongest anti-removal method for a lightweight safe, since a determined thief typically can't simply lift a floor-bolted safe the way they could an unmounted or wall-only mounted one."
];

export const lastUpdated = "2026-08-09";

export const mainKeyword = "small safes that bolt to the floor";

export const metaDescription = "How 8 small safes that bolt to the floor compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Small Safes That Bolt to the Floor for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b000z8r73u-ssbf",
    "rank": 1,
    "badge": "Best Overall Confirmed Floor Bolt-Down",
    "name": "SentrySafe Shelf Safe with Digital Keypad Lock, Steel Safe with Interior Light",
    "price": "$101.96",
    "rating": "4.4",
    "reviews": "3891",
    "imageUrl": "https://m.media-amazon.com/images/I/31NRp-xRm+S._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B000Z8R73U?tag=theofficejournal-20",
    "description": "This listing explicitly confirms bolt down hardware included, genuine factory-supported floor anchoring rather than implied mounting capability. 78 cubic feet, this is substantial enough to benefit meaningfully from floor bolting, a lighter safe gains less from anchoring since it's easier to pry loose regardless.\n\nA carpeted floor protects contents, and concealed hinges resist tampering. Digital keypad access with 2 override keys covers recovery, though this is explicitly stated as not a fireproof safe, security-focused rather than disaster protection.\n\nThe standout detail is that explicitly confirmed floor bolt-down hardware, not just implied mounting. Balancing that out, explicitly not fireproof, largest footprint among these picks.",
    "specs": [
      "Confirmed bolt down hardware, 17 lbs, 0.78 cu ft",
      "Carpeted floor, concealed hinges",
      "Digital keypad + 2 override keys, NOT fireproof"
    ],
    "pros": [
      "Explicitly confirmed floor bolt-down hardware, not just implied mounting"
    ],
    "cons": [
      "Explicitly not fireproof, largest footprint among these picks"
    ],
    "bestFor": "Buyers wanting the most substantial confirmed floor-boltable safe here."
  },
  {
    "id": "b00ug9hb1q-ssbf",
    "rank": 2,
    "badge": "Best Reconfigurable Floor-Bolted Safe",
    "name": "Amazon Basics Steel Security Safe and Lock Box with Electronic Keypad",
    "price": "$57.74",
    "rating": "4.5",
    "reviews": "8214",
    "imageUrl": "https://m.media-amazon.com/images/I/41RK6qkncSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00UG9HB1Q?tag=theofficejournal-20",
    "description": "This listing explicitly confirms mounting to wall, floor, or shelf with four included expansion bolts, genuine floor bolt-down support alongside other placement options. An adjustable, removable interior shelf lets you reconfigure the layout for what you're actually storing.\n\nThree operation indicator lights confirm keypad status, and a carpeted floor protects items from scratches. Two emergency override keys back up the keypad, requiring 4 AA batteries not included.\n\nExplicitly confirmed floor mounting option alongside wall/shelf flexibility.",
    "specs": [
      "Confirmed floor, wall, or shelf mounting, 4 expansion bolts",
      "Adjustable removable interior shelf",
      "3 operation indicator lights"
    ],
    "pros": [
      "Explicitly confirmed floor mounting option alongside wall/shelf flexibility"
    ],
    "cons": [
      "Requires separately purchased AA batteries"
    ],
    "bestFor": "Buyers wanting confirmed floor bolt-down flexibility with a reconfigurable interior."
  },
  {
    "id": "b078myjyd5-ssbf",
    "rank": 3,
    "badge": "Best Value Confirmed Floor Mounting",
    "name": "Yuanshikj Small Steel Security Safe Box with Keypad, Key, 0.23 CuFt, Black",
    "price": "$23.99",
    "rating": "4.4",
    "reviews": "22969",
    "imageUrl": "https://m.media-amazon.com/images/I/413jIpPxMOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B078MYJYD5?tag=theofficejournal-20",
    "description": "This listing explicitly states wall or floor mounting with pre-drilled holes and included bolts, confirmed floor bolt-down support at the lowest price in this comparison. A magnetic auto-locking door closes and secures itself the instant you shut it.\n\nReinforced solid steel construction with dual door locking bolts backs the physical security, and the corrosion-resistant finish holds up wherever the safe is floor-mounted, including a garage or basement.\n\nExplicitly confirmed floor mounting at the lowest price in this comparison. Both are worth keeping in mind before deciding.",
    "specs": [
      "Confirmed wall OR floor mounting explicitly stated",
      "Magnetic auto-lock door",
      "Lowest price in this comparison"
    ],
    "pros": [
      "Explicitly confirmed floor mounting at the lowest price in this comparison"
    ],
    "cons": [
      "Compact interior, verify your specific items fit"
    ],
    "bestFor": "Budget-conscious buyers wanting confirmed floor anchoring."
  },
  {
    "id": "b0ckpf8gf9-ssbf",
    "rank": 4,
    "badge": "Cabinet/Wall Mounting Confirmed (Floor Not Explicit)",
    "name": "Bonsaii Safe Box with Electronic Keypad for Home Office, 0.6 Cu.Ft",
    "price": "$52.24",
    "rating": "4.6",
    "reviews": "1326",
    "imageUrl": "https://m.media-amazon.com/images/I/41Q5YDqAEdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKPF8GF9?tag=theofficejournal-20",
    "description": "We're disclosing this honestly: this listing confirms mounting inside a wall cabinet with pre-drilled holes and expansion screws, but doesn't specifically state floor installation the way several other picks here do. A removable shelf splits contents at the largest capacity in this comparison.\n\nThree access methods, personal code, emergency override key, or Type-C emergency power, mean multiple recovery paths, though verify floor mounting compatibility directly with the manufacturer if that's specifically what you need.",
    "specs": [
      "Confirmed cabinet/wall mounting, floor NOT explicitly confirmed",
      "0.6 cu ft, removable shelf",
      "3 access methods including USB-C backup"
    ],
    "pros": [
      "Largest capacity in this comparison among the confirmed-mountable picks"
    ],
    "cons": [
      "Floor bolt-down not explicitly confirmed in this listing, verify directly if that's required"
    ],
    "bestFor": "Buyers wanting cabinet or wall anchoring at larger capacity, who will verify floor compatibility directly."
  },
  {
    "id": "b0d1x55sw4-ssbf",
    "rank": 5,
    "badge": "Peg-Mounting Confirmed (Floor Not Explicit)",
    "name": "Digital Electronic Money Safe, Steel Security Lock Box with Keypad, Office",
    "price": "$29.99",
    "rating": "4.2",
    "reviews": "4957",
    "imageUrl": "https://m.media-amazon.com/images/I/41JIC2u6yIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1X55SW4?tag=theofficejournal-20",
    "description": "This listing confirms a peg-mounting system for shelf, wall, or cabinet placement, useful for concealment, but doesn't explicitly confirm floor bolt-down installation.\n\nTwo separate access codes support shared access, and hidden pry-resistant hinges reinforce the concealment approach, worth confirming floor compatibility directly if that's specifically required.\n\nPeg-mounting system offers genuine concealment even without confirmed floor bolting. That said, floor bolt-down not explicitly confirmed, verify directly if required.",
    "specs": [
      "Confirmed peg-mounting for shelf/wall/cabinet, floor NOT explicitly confirmed",
      "2 independent access codes supported",
      "Hidden pry-resistant hinges"
    ],
    "pros": [
      "Peg-mounting system offers genuine concealment even without confirmed floor bolting"
    ],
    "cons": [
      "Floor bolt-down not explicitly confirmed, verify directly if required"
    ],
    "bestFor": "Buyers wanting concealed mounting who don't strictly require floor anchoring."
  },
  {
    "id": "b09sz6gpgr-ssbf",
    "rank": 6,
    "badge": "Mounting Not Explicitly Confirmed",
    "name": "Voncabay Money Safe Box for Home with Digital Keypad, 0.23 Cu. Ft., Black",
    "price": "$31.99",
    "rating": "4.5",
    "reviews": "3167",
    "imageUrl": "https://m.media-amazon.com/images/I/41QPOblOKSL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09SZ6GPGR?tag=theofficejournal-20",
    "description": "We're disclosing this directly: this listing's features don't explicitly confirm mounting hardware, floor or otherwise, despite the strong security construction. An automatic interior light and low-battery warning support daily use, and a three-wrong-entries lockout deters code guessing.\n\nReinforced alloy steel with pry-resistant concealed hinges backs the security, but if floor anchoring is your specific requirement, verify mounting hardware inclusion directly with the seller before ordering.",
    "specs": [
      "Mounting hardware NOT explicitly confirmed in this listing",
      "Auto interior light, low-battery warning",
      "3-wrong-entry lockout (5 min)"
    ],
    "pros": [
      "Strong keypad feedback features (entry confirmation, low-battery warning)"
    ],
    "cons": [
      "Mounting hardware, floor or otherwise, not explicitly confirmed in this listing"
    ],
    "bestFor": "Buyers not requiring confirmed floor mounting who value keypad feedback features."
  },
  {
    "id": "b0crh68745-ssbf",
    "rank": 7,
    "badge": "Installation Holes Confirmed (Floor Not Explicit)",
    "name": "Bonsaii Small Safe Box with Electronic Keypad for Valuables, 0.23 Cu.Ft",
    "price": "$37.99",
    "rating": "4.6",
    "reviews": "0",
    "imageUrl": "https://m.media-amazon.com/images/I/41H5aPFQ4kL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CRH68745?tag=theofficejournal-20",
    "description": "This listing confirms pre-drilled installation holes for mounting under a closet, drawer, or table, but doesn't explicitly state floor bolt-down as several other picks here do directly. A USB-C interface supporting an external power bank avoids a dead-battery lockout.\n\n61 inches of usable interior, worth confirming floor-specific compatibility if that's your exact requirement.\n\nUSB-C emergency power backup, a genuine dead-battery solution.",
    "specs": [
      "Confirmed installation holes (under furniture), floor NOT explicitly confirmed",
      "USB-C emergency power backup",
      "8.98×6.46×6.61 in interior"
    ],
    "pros": [
      "USB-C emergency power backup, a genuine dead-battery solution"
    ],
    "cons": [
      "Floor bolt-down not explicitly confirmed, verify directly if required"
    ],
    "bestFor": "Buyers wanting under-furniture mounting with dead-battery backup."
  },
  {
    "id": "b008nhkwzu-ssbf",
    "rank": 8,
    "badge": "No Confirmed Mounting Hardware",
    "name": "SentrySafe Fireproof Safe Box with Key Lock, Chest Safe with Carrying Handle",
    "price": "See listing",
    "rating": "4.6",
    "reviews": "22264",
    "imageUrl": "https://m.media-amazon.com/images/I/41DOhkXmzOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B008NHKWZU?tag=theofficejournal-20",
    "description": "We're disclosing this honestly: this listing emphasizes carrying grips for portability rather than confirming any mounting hardware, floor or otherwise. UL classified for fire endurance at 1550°F remains strong, and a lifetime after-fire replacement guarantee backs the safe directly.\n\nIncluded here for its fire protection credentials, but if floor anchoring specifically matters, this is not the pick, choose one of the confirmed-mountable options above instead.\n\nThe standout detail is that strongest documented fire protection in this comparison. Balancing that out, no confirmed mounting hardware at all, portable design instead.",
    "specs": [
      "No confirmed mounting hardware, carrying grips instead",
      "UL classified: 1/2 hr at 1550°F",
      "Lifetime after-fire replacement guarantee"
    ],
    "pros": [
      "Strongest documented fire protection in this comparison"
    ],
    "cons": [
      "No confirmed mounting hardware at all, portable design instead"
    ],
    "bestFor": "Buyers prioritizing fire protection over floor anchoring specifically."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-small-safes-for-closets",
    "title": "Best Small Safes for Closets (2026)"
  },
  {
    "href": "/guide/best-desktop-safes",
    "title": "Best Desktop Safes (2026)"
  },
  {
    "href": "/guide/best-hidden-small-safes",
    "title": "Best Hidden Small Safes (2026)"
  }
];

export const breadcrumbLabel = "Best Small Safes That Bolt to the Floor";
