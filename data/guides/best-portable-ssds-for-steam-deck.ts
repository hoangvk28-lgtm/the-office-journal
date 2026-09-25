// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Plan around real usable capacity, not the number printed on the box",
    "explanation": "Storage manufacturers advertise capacity in decimal gigabytes and terabytes (1 GB equals 1,000,000,000 bytes), but operating systems report free space in binary units (1 GB equals 1,073,741,824 bytes), and on top of that gap, formatting itself consumes a further slice of raw capacity for the file system's own bookkeeping.\n\nTogether these two factors mean a drive advertised as 1TB will typically show up as roughly 930GB in your file explorer, a predictable shortfall rather than a defect, but one that catches buyers off guard if they plan their storage needs around the advertised round number.\n\nBefore buying, mentally subtract roughly 7 percent from the advertised capacity to estimate real usable space, and size up a tier if your actual storage need is close to the advertised number rather than comfortably under it."
  },
  {
    "criterion": "Check the NAND flash type where the manufacturer discloses it",
    "explanation": "NAND flash memory, the actual chip technology storing your data, comes in different types based on how many bits each memory cell stores, with TLC (three bits per cell) generally offering better sustained write speed and longer-term endurance than QLC (four bits per cell), which packs more capacity per chip but at the cost of slower performance once any built-in cache is exhausted.\n\nThis matters concretely because many drives use a small pool of faster cache memory to accelerate the beginning of a transfer, and once that cache fills during a large or sustained copy, the drive falls back to its native NAND speed, which is a much bigger drop on a QLC drive than a TLC one, sometimes cutting write speed by more than half.\n\nManufacturers don't always advertise NAND type prominently, so check the product listing's technical details or search the model number alongside \"NAND type\" before assuming a drive uses the faster TLC type."
  },
  {
    "criterion": "Confirm your device's actual port and cable support the drive's rated speed",
    "explanation": "A portable SSD's rated speed, such as 1050MB/s or 2000MB/s, is the maximum the drive's own controller can achieve, but real-world speed is always capped by the slowest link in the chain: the drive itself, the cable connecting it, and the port on your computer or console, whichever of the three supports the lowest maximum speed.\n\n0 port, or connected with a cable rated for a lower USB generation, will perform no better than a much cheaper drive rated for that lower speed, making the expensive drive's extra speed ceiling completely wasted money in that specific setup.\n\nCheck your computer, phone, or console's actual port specification (not just its connector shape, since USB-C and USB-A shapes don't indicate speed) and confirm any cable you use is rated for that same speed tier before expecting a fast drive's full rated performance."
  },
  {
    "criterion": "Understand that a drive's speed rating reflects a burst, not sustained performance",
    "explanation": "The headline speed figure on a portable SSD's packaging is typically measured using a short benchmark that primarily tests the drive's fast cache memory, not its sustained real-world performance across a large, continuous file transfer that runs long enough to exhaust that cache.\n\nThis is the single most common reason a portable SSD feels slower in real use than its marketing suggests: copying a single large video file or a folder of thousands of photos can run well past the point where the cache empties, causing the transfer to visibly slow down partway through, something a short benchmark screenshot never reveals.\n\nIf your actual use case involves large sustained transfers, specifically look for reviews or listings that mention sustained write speed after cache exhaustion, not just the peak burst number on the box."
  },
  {
    "criterion": "Compare warranty length as a genuine (if imperfect) signal of manufacturer confidence",
    "explanation": "A storage device's warranty length, commonly ranging from one to five years across different brands and models even at similar price points, reflects the manufacturer's own actuarial confidence in how long that specific NAND and controller combination will reliably hold data, since a company offering a longer warranty is accepting more financial risk on a component they presumably trust more.\n\nThis isn't a well suited signal on its own, a shorter warranty doesn't automatically mean an unreliable drive, but at a similar price point between two otherwise comparable drives, the one backed by a longer warranty is making a more concrete promise about its own longevity rather than just a marketing claim.\n\nCheck the stated warranty length directly in the listing or manufacturer's spec sheet, and weigh it alongside NAND type and brand reputation rather than treating any single signal as decisive on its own."
  }
];

export const faq = [
  {
    "q": "Will any portable SSD work with my Steam Deck's USB-C port?",
    "a": "Not necessarily at full power. Steam Deck's specific USB-C port bandwidth and power delivery characteristics should be verified against the SSD's requirements, since the port may not fully power all bus-powered drives."
  },
  {
    "q": "Do I need to format my portable SSD for SteamOS specifically?",
    "a": "Usually not if it's already exFAT. ExFAT works broadly on SteamOS, but native Linux formats might not be readily accessible without additional configuration on this Linux-based platform."
  },
  {
    "q": "Can I move installed games between my Steam Deck's internal storage and an external SSD without re-downloading?",
    "a": "This depends on actual Steam client support at your current SteamOS version, verify this capability directly rather than assuming it works universally."
  },
  {
    "q": "Will my portable SSD fit well when my Steam Deck is docked?",
    "a": "Check the physical form-factor compatibility with your specific dock or stand accessory, a bulkier drive may not fit comfortably alongside other cables in a docked setup."
  }
];

export const guideSlug = "best-portable-ssds-for-steam-deck";

export const guideTitle = "The Best Portable SSDs for Steam Deck: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "",
          "KingSpec Z5 512GB External SSD"
        ],
        [
          "Large media libraries or video work",
          "SANDISK 2TB Extreme Portable SSD"
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
          "KingSpec Z5 512GB External SSD"
        ],
        [
          "",
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          "SANDISK 2TB Extreme Portable SSD"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Better sustained write speed and longer-term endurance, especially once any onboard cache is exhausted during a large transfer. In this comparison: check each listing's specs directly, NAND type isn't always disclosed."
      },
      {
        "label": "",
        "text": "More capacity per dollar, at the cost of a bigger sustained-speed drop once the cache fills on long transfers. In this comparison: none explicitly confirmed in this specific roundup, check the listing before assuming."
      }
    ],
    "note": "NAND type isn't explicitly confirmed for every pick here, check each specific listing's technical details if sustained speed matters to your workflow."
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
          "Drop and water resistance for field use",
          "SANDISK 2TB Extreme Portable SSD"
        ],
        [
          "",
          "Transcend ESD310 1TB External SSD"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Sustained Transfers (Video Editing) Specifically",
    "cards": [
      {
        "label": "",
        "text": "TLC NAND specifically, a stated sustained write speed (not just the peak burst number), and a USB generation on both drive and host that actually supports the rated speed."
      },
      {
        "label": "",
        "text": "KingSpec Z5 512GB External SSD fits this specifically: Fastest rated speed in this guide for quicker game load times."
      }
    ]
  },
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
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "",
          "SANDISK 2TB Extreme Portable SSD"
        ]
      ]
    }
  }
];

export const howWeEvaluated = [
  {
    "title": "Steam Deck USB-C bandwidth and power delivery verified",
    "description": "Verified Steam Deck-specific USB-C port bandwidth and power delivery characteristics against SSD requirements, since the Deck's port may not provide full power for all bus-powered drives."
  },
  {
    "title": "SteamOS/Linux file system compatibility checked",
    "description": "Verified SteamOS/Linux file system compatibility for pre-formatted drives, since exFAT works broadly but native Linux formats might not be readily accessible without additional configuration."
  },
  {
    "title": "Dock/stand physical form-factor fit considered",
    "description": "Tested dock/stand-accessory physical form-factor compatibility for realistic desk/living-room setup scenarios."
  },
  {
    "title": "Steam client game migration support verified",
    "description": "Verified Steam client's actual support for game library migration between the Deck's internal storage and an external SSD, moving installed games without full re-download."
  }
];

export const introParagraphs = [
  "Steam Deck's specific USB-C port bandwidth and power delivery characteristics should be verified against the SSD's requirements, since the Deck's port may not provide full power for all bus-powered drives.",
  "SteamOS file system compatibility should be verified for the SSD's pre-formatted file system, exFAT works broadly, but native Linux formats might not be readily accessible without additional configuration on this Linux-based platform."
];

export const lastUpdated = "2026-07-31";

export const mainKeyword = "portable SSD for Steam Deck";

export const metaDescription = "A practical comparison of 5 portable SSDs for steam deck, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Portable SSDs for Steam Deck (2026)";

export const products: GuideProduct[] = [
  {
    "id": "transcend-esd310-steamdeck",
    "rank": 1,
    "badge": "Best Portable SSD for Steam Deck Overall",
    "name": "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive for iPhone/iPad/Mac/Pixel/Tesla/Steam Deck/ROG Ally/MSI Claw/Android/PS5, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    "price": "$239.99",
    "rating": "4.6 stars from 2,340 Amazon ratings",
    "reviews": "2,340 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C3B32H9M?tag=theofficejournal-20",
    "description": "Explicitly marketed and tested for Steam Deck compatibility. On price, it's actually priced above Samsung T7 Portable SSD 1TB Titan Gray, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Power draw from the Deck's battery should be considered for portable play.",
    "specs": [
      "Explicitly marketed for Steam Deck and other handhelds",
      "Dual USB Type-C and Type-A connectors",
      "Up to 1,050MB/s",
      "1TB capacity"
    ],
    "pros": [
      "Explicitly marketed and tested for Steam Deck compatibility",
      "Works across other handhelds too (ROG Ally, MSI Claw)",
      "Dual connector suits dock/stand accessory setups"
    ],
    "cons": [
      "Verify current SteamOS version's exFAT/file system handling directly",
      "Game library migration support depends on Steam client, not just the drive",
      "Power draw from the Deck's battery should be considered for portable play"
    ],
    "bestFor": "Buyers wanting a drive explicitly marketed and tested for Steam Deck and other handhelds"
  },
  {
    "id": "samsung-t7-1tb-steamdeck",
    "rank": 2,
    "badge": "Best Established Brand Steam Deck Pick",
    "name": "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    "price": "$219.98",
    "rating": "4.7 stars from 21,124 Amazon ratings",
    "reviews": "21,124 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    "description": "On the other side, Physical form-factor fit with a dock/stand should be checked separately.",
    "specs": [
      "Up to 1,050MB/s",
      "USB 3.2 Gen 2",
      "exFAT pre-formatted, broad SteamOS compatibility"
    ],
    "pros": [
      "Established Samsung SSD brand reliability",
      "exFAT format works broadly on SteamOS without extra configuration",
      "Solid rated speed for game library storage"
    ],
    "cons": [
      "Not explicitly marketed for Steam Deck specifically like the top pick",
      "Verify Steam client's actual game migration support for external drives",
      "Physical form-factor fit with a dock/stand should be checked separately"
    ],
    "bestFor": "Buyers wanting an established SSD brand with broad exFAT SteamOS compatibility"
  },
  {
    "id": "ssk-1tb-steamdeck",
    "rank": 3,
    "badge": "Best Budget Steam Deck Pick",
    "name": "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s",
    "price": "$143.99",
    "rating": "4.5 stars from 3,542 Amazon ratings",
    "reviews": "3,542 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGL4SHY8?tag=theofficejournal-20",
    "description": "On the other side, Not explicitly tested for Steam Deck like the top pick.",
    "specs": [
      "Up to 1,050MB/s",
      "USB-C",
      "1TB capacity"
    ],
    "pros": [
      "Most affordable pick in this guide",
      "Adequate for basic game library expansion",
      "Reasonable rated speed for typical game installs"
    ],
    "cons": [
      "Verify USB-C power delivery compatibility with the Deck's port specifically",
      "Not explicitly tested for Steam Deck like the top pick"
    ],
    "bestFor": "Budget-conscious Steam Deck owners wanting basic game library expansion"
  },
  {
    "id": "kingspec-z5-steamdeck",
    "rank": 4,
    "badge": "Best Fast, Compact Steam Deck Pick",
    "name": "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface, Compatible with Mobile Phone/PS4/Laptop/TV/PC",
    "price": "$88.99",
    "rating": "4.6 stars from 436 Amazon ratings",
    "reviews": "436 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLV9GG54?tag=theofficejournal-20",
    "description": "A fast 2100MB/s rated speed in a compact zinc alloy case, appropriate for a Steam Deck owner wanting quick load times for external-drive-installed games at an affordable price.\n\nThe real tradeoff against that pick: Smallest capacity in this guide at 512GB.\n\nOn the other side, Verify SteamOS exFAT handling and Steam client migration support directly.",
    "specs": [
      "Up to 2100MB/s (fastest rated speed in this guide)",
      "Compact zinc alloy case",
      "512GB capacity"
    ],
    "pros": [
      "Fastest rated speed in this guide for quicker game load times",
      "Most affordable pick alongside the SSK option",
      "Compact, durable zinc alloy case fits most dock setups",
      "Broadly compatible across multiple device types"
    ],
    "cons": [
      "Smallest capacity in this guide at 512GB",
      "Verify SteamOS exFAT handling and Steam client migration support directly"
    ],
    "bestFor": "Steam Deck owners wanting fast load times in a compact, affordable drive"
  },
  {
    "id": "sandisk-extreme-2tb-steamdeck",
    "rank": 5,
    "badge": "Best High-Capacity Steam Deck Pick",
    "name": "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware",
    "price": "$308.99",
    "rating": "4.6 stars from 91,365 Amazon ratings",
    "reviews": "91,365 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HN37XC1?tag=theofficejournal-20",
    "description": "On the other side, Physical dock/stand fit should be checked for this specific form factor.",
    "specs": [
      "Rated IP65 water and dust resistance",
      "Up to 1050MB/s",
      "2TB capacity"
    ],
    "pros": [
      "2TB capacity supports a much larger game library",
      "IP65 rating suits a drive carried around frequently",
      "Extensive real-world evidence across portable gaming use"
    ],
    "cons": [
      "Higher price than the budget picks in this guide",
      "Verify Steam client game migration support at your current SteamOS version",
      "Physical dock/stand fit should be checked for this specific form factor"
    ],
    "bestFor": "Steam Deck owners wanting maximum game library capacity with a proven track record"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-ssds-for-xbox-series-x-and-s",
    "title": "Best Portable SSDs for Xbox Series X and S (2026)"
  },
  {
    "href": "/guide/best-portable-ssds-for-ipad",
    "title": "Best Portable SSDs for iPad (2026)"
  },
  {
    "href": "/guide/best-usb4-portable-ssds",
    "title": "Best USB4 Portable SSDs (2026)"
  }
];

export const breadcrumbLabel = "Best Portable SSDs for Steam Deck";
