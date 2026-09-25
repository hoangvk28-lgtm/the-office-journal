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
    "q": "Does write speed matter for gaming performance?",
    "a": "Most of a game's load-time benefit from an external SSD comes from read speed and random access, not write speed."
  },
  {
    "q": "Can I move installed Steam games to an external SSD without reinstalling?",
    "a": "Yes, Steam's library migration tool, along with Epic's equivalent, can move installed games between drives without a full reinstall."
  },
  {
    "q": "How much capacity do I need for a PC game library?",
    "a": "Plan around modern titles regularly exceeding 100GB each, a 1TB drive typically holds roughly 8 to 10 large modern games alongside smaller titles."
  }
];

export const guideSlug = "best-portable-ssds-for-gaming";

export const guideTitle = "The Best Portable SSDs for PC Gaming: Our Picks";

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
          "Seagate 2TB Game Drive for Xbox"
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
          "Seagate 2TB Game Drive for Xbox"
        ],
        [
          "",
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          "Samsung T7 Shield Portable SSD 1TB"
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
          "Samsung T7 Shield Portable SSD 1TB"
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
        "text": "SANDISK 1TB Portable SSD fits this specifically: low-cost way to expand a PC game library."
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
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ]
      ]
    }
  }
];

export const howWeEvaluated = [
  {
    "title": "Read speed and random access weighted for load times",
    "description": "Prioritized real-world read speed and random access performance over marketed write-speed numbers, since read speed drives most of a game's load-time benefit."
  },
  {
    "title": "Modern game library size planning",
    "description": "Weighed capacity against realistic modern game sizes, with many current titles now exceeding 100GB each."
  },
  {
    "title": "Steam and Epic library migration compatibility",
    "description": "Confirmed each pick works with standard Steam and Epic library migration tools that move installed games without a full reinstall."
  },
  {
    "title": "Price per gigabyte for library expansion",
    "description": "Compared price per gigabyte specifically for the use case of expanding an existing PC game library rather than general file storage."
  }
];

export const introParagraphs = [
  "Most of a PC game's load-time benefit comes from read speed and random access, not the write-speed numbers heavily marketed elsewhere, worth weighing a drive's real-world read performance more heavily than a headline write speed figure when shopping specifically for gaming.",
  "Modern game library sizes with 100GB or larger titles now common mean capacity planning matters as much as speed, and checking whether your specific game platform's library migration tool can move installed games without a full reinstall is worth doing before you buy."
];

export const lastUpdated = "2026-08-02";

export const mainKeyword = "best portable ssd for pc gaming";

export const metaDescription = "How 4 portable SSDs for PC gaming compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Portable SSDs for PC Gaming (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0874xn4d8-p1",
    "rank": 1,
    "badge": "Best Overall Pick for PC Gaming Libraries",
    "name": "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    "price": "$216.36",
    "rating": "4.7 stars from Amazon ratings",
    "reviews": "21,124 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    "description": "Samsung's T7 pairs reliable 1050MB/s speed with a slim, desk-friendly design, a solid all-around choice for PC gamers who want to offload part of a Steam or Epic library.\n\nSolid read speed for real-world load-time improvement. On price, it comes in below Samsung T7 Shield Portable SSD 1TB, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, 1TB fills quickly with modern 100GB-plus game titles.",
    "specs": [
      "1TB capacity",
      "Up to 1050MB/s rated",
      "USB 3.2 Gen 2",
      "Slim metal body"
    ],
    "pros": [
      "Solid read speed for real-world load-time improvement",
      "Slim design fits well in a PC gaming desk setup",
      "Reliable, widely reviewed platform",
      "Compatible with Steam's library migration tool"
    ],
    "cons": [
      "1050MB/s ceiling trails the fastest gaming-oriented drives",
      "No official IP rating",
      "1TB fills quickly with modern 100GB-plus game titles"
    ],
    "bestFor": "PC gamers wanting a reliable all-around library expansion drive"
  },
  {
    "id": "b09vlk9w3s-p2",
    "rank": 2,
    "badge": "Best Rugged Pick for a Gaming Setup That Travels",
    "name": "Samsung T7 Shield Portable SSD 1TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    "price": "$286.88",
    "rating": "4.7 stars from Amazon ratings",
    "reviews": "16,380 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09VLK9W3S?tag=theofficejournal-20",
    "description": "Samsung's T7 Shield adds rugged protection to the same reliable 1050MB/s speed, useful for PC gamers who bring a laptop and external drive to LAN events or a friend's setup.\n\nOn the other side, 1TB fills quickly with modern large game titles.",
    "specs": [
      "1TB capacity",
      "Up to 1050MB/s rated",
      "USB 3.2 Gen 2",
      "Rugged shield"
    ],
    "pros": [
      "Rugged shell suits PC gamers who travel with their setup",
      "Solid read speed for real-world load-time improvement",
      "Reliable, well-reviewed platform",
      "Compatible with Steam and Epic library migration tools"
    ],
    "cons": [
      "Bulkier than the non-shielded T7",
      "Premium price versus non-rugged alternatives",
      "1TB fills quickly with modern large game titles"
    ],
    "bestFor": "PC gamers who bring their setup to LAN events or travel"
  },
  {
    "id": "b0c5jq68fy-p3",
    "rank": 3,
    "badge": "Best Budget Pick for Expanding a PC Game Library",
    "name": "SANDISK 1TB Portable SSD - Up to 800MB/s, USB-C, USB 3.2 Gen 2, Updated Firmware - SDSSDE30-1T00-G26",
    "price": "$164.99",
    "rating": "4.5 stars from Amazon ratings",
    "reviews": "10,968 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C5JQ68FY?tag=theofficejournal-20",
    "description": "SanDisk's standard Portable SSD offers a low-cost way to expand a PC game library, rated up to 800MB/s, sufficient for most game read-speed needs even without top-tier numbers.\n\nOn the other side, No official IP rating.",
    "specs": [
      "1TB capacity",
      "Up to 800MB/s rated",
      "USB-C, USB 3.2 Gen 2",
      "Budget price"
    ],
    "pros": [
      "low-cost way to expand a PC game library",
      "Sufficient read speed for real-world load-time needs",
      "Good value per gigabyte for capacity planning"
    ],
    "cons": [
      "800MB/s ceiling trails the fastest picks here",
      "1TB capacity fills quickly with modern large titles",
      "No official IP rating"
    ],
    "bestFor": "Budget-conscious PC gamers expanding their library capacity"
  },
  {
    "id": "b08y1q2ksz-p4",
    "rank": 4,
    "badge": "Best Large-Capacity Pick for Big PC Game Libraries",
    "name": "Seagate 2TB Game Drive for Xbox, USB 3.0 (STKX2000400)",
    "price": "$119.99",
    "rating": "4.5 stars from Amazon ratings",
    "reviews": "20,657 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31+UCQHBazL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08Y1Q2KSZ?tag=theofficejournal-20",
    "description": "Seagate's 2TB Game Drive offers real headroom for a large PC game library made up of modern 100GB-plus titles, at a reasonable price for the added capacity.\n\nOn the other side, Best for capacity-first buyers over speed-first.",
    "specs": [
      "2TB capacity",
      "USB 3.0",
      "Large capacity for big libraries"
    ],
    "pros": [
      "Real headroom for large modern PC game libraries",
      "Reduces how often you need to manage installed games",
      "Good value per gigabyte at 2TB"
    ],
    "cons": [
      "USB 3.0 caps read speed below newer USB 3.2 Gen 2 drives",
      "Bulkier design than slim ultraportables",
      "Best for capacity-first buyers over speed-first"
    ],
    "bestFor": "PC gamers with large modern libraries who prioritize capacity over peak speed"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-ssds-for-ps5",
    "title": "Best Portable SSDs for PS5 in 2026"
  },
  {
    "href": "/guide/best-portable-ssds-for-xbox-series-x-and-s",
    "title": "Best Portable SSDs for Xbox Series X and S"
  },
  {
    "href": "/guide/best-portable-ssds-for-steam-deck",
    "title": "Best Portable SSDs for Steam Deck"
  }
];

export const breadcrumbLabel = "Best Portable SSDs for PC Gaming";
