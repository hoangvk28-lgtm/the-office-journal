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
    "q": "Do any portable SSDs have a built-in SD card reader?",
    "a": "Genuine combo drives are a small, limited category, verify a specific listing actually includes an integrated card slot before assuming it from the product name alone."
  },
  {
    "q": "What should I look for in a separate card reader?",
    "a": "Match the reader's speed tier, such as UHS-II, to your card type, and consider a multi-format reader if you shoot on more than one card type."
  },
  {
    "q": "Is a standalone SSD plus a separate reader worse than a combo unit?",
    "a": "Not necessarily, a well-matched separate reader and destination drive can perform just as well, and often gives you more flexibility to upgrade each piece independently."
  }
];

export const guideSlug = "best-portable-ssds-with-sd-card-readers";

export const guideTitle = "Best Portable SSDs (and When to Add a Card Reader)";

export const heroImage = "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg";

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
          "Samsung T7 Portable SSD 1TB Titan Gray"
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
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "",
          "Transcend ESD310 1TB External SSD"
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
          "Samsung T7 Portable SSD 1TB Titan Gray"
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
        "text": "SANDISK 2TB Extreme Portable SSD fits this specifically: Reliable destination drive for offloaded camera media."
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
    "title": "Honest disclosure of a limited product category",
    "description": "Verified that genuine SD-card-reader-and-SSD combo drives had limited verified options in our research pool, and disclosed this clearly rather than mislabeling standalone drives."
  },
  {
    "title": "Standalone drive quality as a destination for offloaded media",
    "description": "Evaluated each standalone pick specifically as a destination drive for media offloaded via a separate card reader."
  },
  {
    "title": "Connector flexibility for field kits",
    "description": "Weighed dual-connector designs as a genuine convenience for buyers assembling a field kit with a separate card reader."
  },
  {
    "title": "",
    "description": "Compared IP ratings and build quality relevant to photographers and videographers working in the field alongside a card reader."
  }
];

export const introParagraphs = [
  "We want to be upfront: our verified research pool did not include a genuine SD-card-reader-and-SSD combo drive, that specific product category had limited verified options at the time of writing, so we are not going to claim any of the drives below have a built-in card reader when they do not.",
  "Instead, this guide features three well-reviewed standalone portable SSDs, and practical advice for pairing one with a separate dedicated card reader if you cannot find a genuine combo unit that meets your needs."
];

export const lastUpdated = "2026-08-02";

export const mainKeyword = "portable ssd with sd card reader";

export const metaDescription = "Verified SD card reader combo SSDs were limited at research time, so we cover 3 standalone portable SSDs and when to add a separate reader.";

export const metaTitle = "Best Portable SSDs and Card Readers";

export const products: GuideProduct[] = [
  {
    "id": "b08hn37xc1-p1",
    "rank": 1,
    "badge": "Best Standalone Pick to Pair with a Card Reader",
    "name": "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    "price": "$299.99",
    "rating": "4.6 stars from Amazon ratings",
    "reviews": "91,365 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HN37XC1?tag=theofficejournal-20",
    "description": "SanDisk's Extreme delivers reliable 1050MB/s speed with IP65 durability, a strong standalone destination drive for photos and video offloaded from a separate SD card reader.\n\nReliable destination drive for offloaded camera media. On price, it's actually priced above Samsung T7 Portable SSD 1TB Titan Gray, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Sustained speed can dip once cache fills.",
    "specs": [
      "2TB capacity",
      "Up to 1050MB/s rated",
      "USB-C, USB 3.2 Gen 2",
      "IP65 water and dust resistance",
      "No built-in SD card reader"
    ],
    "pros": [
      "Reliable destination drive for offloaded camera media",
      "IP65 rating suits field use alongside a card reader",
      "Large 2TB capacity for extensive photo and video libraries"
    ],
    "cons": [
      "No built-in SD card reader, a separate reader is required",
      "Older model, verify current firmware",
      "Sustained speed can dip once cache fills"
    ],
    "bestFor": "Photographers and videographers who want a reliable destination drive paired with a separate card reader"
  },
  {
    "id": "b0874xn4d8-p2",
    "rank": 2,
    "badge": "Best Slim Standalone Pick",
    "name": "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    "price": "$216.36",
    "rating": "4.7 stars from Amazon ratings",
    "reviews": "21,124 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    "description": "Samsung's T7 offers a slim, lightweight standalone SSD well suited to a minimal field kit alongside a compact separate card reader.\n\nOn the other side, 1TB may be limiting for large video libraries.",
    "specs": [
      "1TB capacity",
      "Up to 1050MB/s rated",
      "USB 3.2 Gen 2",
      "Slim metal body",
      "No built-in SD card reader"
    ],
    "pros": [
      "Slim design pairs well with a compact separate card reader in a field kit",
      "Reliable, widely reviewed platform",
      "Good everyday speed for offloaded media",
      "Comes in multiple colors"
    ],
    "cons": [
      "No built-in SD card reader, a separate reader is required",
      "No official IP rating",
      "1TB may be limiting for large video libraries"
    ],
    "bestFor": "Buyers who want the slimmest possible standalone destination drive"
  },
  {
    "id": "b0c3b32h9m-p3",
    "rank": 3,
    "badge": "Best Dual-Connector Standalone Pick",
    "name": "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    "price": "$239.99",
    "rating": "4.6 stars from Amazon ratings",
    "reviews": "2,340 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C3B32H9M?tag=theofficejournal-20",
    "description": "Transcend's ESD310 includes both USB-C and USB-A connectors, useful flexibility when your separate card reader and computer use different connector types.\n\n2 Gen2 tier, not the fastest available.",
    "specs": [
      "1TB capacity",
      "Dual USB-C and USB-A connectors",
      "Up to 1050MB/s rated",
      "No built-in SD card reader"
    ],
    "pros": [
      "Dual connectors reduce adapter clutter in a field kit",
      "Solid everyday speed for offloaded camera media",
      "Compact, travel-friendly design",
      "Good value for the dual-connector convenience"
    ],
    "cons": [
      "No built-in SD card reader, a separate reader is still required",
      "USB 3.2 Gen2 tier, not the fastest available"
    ],
    "bestFor": "Buyers who want connector flexibility across their card reader and other devices"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-ssds-for-photo-storage",
    "title": "Best Portable SSDs for Photo Storage in 2026"
  },
  {
    "href": "/guide/best-rugged-portable-ssds",
    "title": "Best Rugged Portable SSDs in 2026"
  },
  {
    "href": "/guide/best-portable-ssds",
    "title": "Best Portable SSDs in 2026"
  }
];
