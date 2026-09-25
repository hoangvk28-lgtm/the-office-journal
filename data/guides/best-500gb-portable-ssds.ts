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
    "q": "Is there a drive that is exactly 500GB?",
    "a": "Not in our verified research pool. 512GB is the closest genuine match, and two 1TB drives are included as nearby budget alternatives."
  },
  {
    "q": "Should I just buy 1TB instead of 512GB?",
    "a": "If the price gap is small, yes, most budget buyers get better long-term value from the extra headroom of 1TB."
  },
  {
    "q": "Are budget drives at this tier reliable?",
    "a": "Reasonably, for everyday use, though budget-tier drives are more likely to use DRAM-less controllers that can slow down under heavy multi-file operations."
  }
];

export const guideSlug = "best-500gb-portable-ssds";

export const guideTitle = "The Best Compact-Capacity Portable SSDs for Everyday Desk Work";

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
          "Everyday files, lowest cost per GB",
          ""
        ],
        [
          "Maximum speed headroom for large transfers",
          "KingSpec Z5 512GB External SSD"
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
          "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          ""
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
          ""
        ],
        [
          "",
          "KingSpec Z5 512GB External SSD"
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
        "text": "KingSpec Z5 512GB External SSD fits this specifically: closest capacity match to 500GB in our verified pool."
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
          "KingSpec Z5 512GB External SSD"
        ],
        [
          "",
          ""
        ]
      ]
    }
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Verified each drive's actual capacity and were explicit when a pick is 512GB or 1TB rather than exactly 500GB."
  },
  {
    "title": "",
    "description": "Led with the drive closest to 500GB in our verified pool rather than stretching a 1TB drive's marketing to fit."
  },
  {
    "title": "",
    "description": "Confirmed each pick sits in genuine budget territory consistent with what a 500GB-seeking buyer is typically shopping for."
  },
  {
    "title": "",
    "description": "Compared rated speed and interface across the group to help buyers weigh capacity against real transfer performance."
  }
];

export const introParagraphs = [
  "We want to be upfront about capacity here: our verified research pool did not include a drive that is exactly 500GB. The closest genuine match is a 512GB model, and we are also including two well-reviewed 1TB drives as nearby budget-tier alternatives, with actual capacities noted clearly in each description.",
  "If 500GB specifically, not 512GB or 1TB, is a hard requirement for your use case, treat that as a reason to check current listings directly rather than assume any drive in this guide hits that exact number."
];

export const lastUpdated = "2026-08-02";

export const mainKeyword = "best 500gb portable ssd";

export const metaDescription = "How 3 compact-capacity portable SSDs compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Compact-Capacity Portable SSDs for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0clv9gg54-p1",
    "rank": 1,
    "badge": "Closest Genuine Match to 500GB",
    "name": "KingSpec Z5 512GB External SSD - 2100MB/s, Portable Solid State Hard Drives with RGB Light, Zinc Alloy Case, USB 3.2 Gen2x2 Interface",
    "price": "$88.99",
    "rating": "4.6 stars from Amazon ratings",
    "reviews": "436 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31a33qlUGuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLV9GG54?tag=theofficejournal-20",
    "description": "Closest capacity match to 500GB in our verified pool. On price, it comes in below SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, RGB lighting and case material are a style choice, not a durability upgrade.",
    "specs": [
      "512GB capacity (closest verified match to 500GB)",
      "Up to 2100MB/s rated",
      "USB 3.2 Gen2x2",
      "Zinc alloy case with RGB lighting"
    ],
    "pros": [
      "closest capacity match to 500GB in our verified pool",
      "High rated speed for the price tier",
      "Lowest price in this group",
      "Distinctive RGB design for gaming setups"
    ],
    "cons": [
      "512GB, not exactly 500GB, confirm this works for your need",
      "RGB lighting and case material are a style choice, not a durability upgrade"
    ],
    "bestFor": "Buyers who specifically want the closest genuine match to a 500GB drive"
  },
  {
    "id": "b0bgl4shy8-p2",
    "rank": 2,
    "badge": "Nearby Budget Option, Actually 1TB",
    "name": "SSK Portable SSD 1TB External Solid State Hard Drive USB C Up to 1050MB/s",
    "price": "$143.99",
    "rating": "4.5 stars from Amazon ratings",
    "reviews": "3,542 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGL4SHY8?tag=theofficejournal-20",
    "description": "SSK's Portable SSD is actually a 1TB drive, not 500GB, but its low price puts it in similar budget territory, rated up to 1050MB/s over USB-C.\n\n2 Gen 2 speed rating. On the other side, No official IP rating.",
    "specs": [
      "1TB capacity (not 500GB, included as a nearby budget option)",
      "Up to 1050MB/s rated",
      "USB-C",
      "Budget price"
    ],
    "pros": [
      "Actually double the capacity of a 500GB drive at a similar budget price",
      "Solid USB 3.2 Gen 2 speed rating",
      "Compact, lightweight design",
      "Good value if 1TB rather than 500GB works for you"
    ],
    "cons": [
      "Not a 500GB drive, be clear on your actual capacity need",
      "No official IP rating"
    ],
    "bestFor": "Buyers open to 1TB at a budget price instead of exactly 500GB"
  },
  {
    "id": "b0c5jq68fy-p3",
    "rank": 3,
    "badge": "Nearby Budget Option with Broader Reliability",
    "name": "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    "price": "$164.99",
    "rating": "4.5 stars from Amazon ratings",
    "reviews": "10,968 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5JQ68FY?tag=theofficejournal-20",
    "description": "On the other side, No official IP rating.",
    "specs": [
      "1TB capacity (not 500GB, included as a nearby budget option)",
      "Up to 800MB/s rated",
      "USB-C, USB 3.2 Gen 2",
      "Established brand reliability"
    ],
    "pros": [
      "Actually double the capacity of 500GB",
      "Reliable brand with a long track record",
      "Good backup and everyday-file companion"
    ],
    "cons": [
      "Not a 500GB drive, be clear on your actual capacity need",
      "800MB/s ceiling trails the KingSpec Z5's rated speed",
      "No official IP rating"
    ],
    "bestFor": "Buyers who want established brand reliability over an exact 500GB match"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-budget-portable-ssds",
    "title": "Best Budget Portable SSDs in 2026"
  },
  {
    "href": "/guide/best-1tb-portable-ssds",
    "title": "Best 1TB Portable SSDs in 2026"
  }
];

export const breadcrumbLabel = "Best Compact-Capacity Portable SSDs";
