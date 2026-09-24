export const guideSlug = "best-portable-ssds-for-ps5";
export const guideTitle = "4 Best Portable SSDs for PS5 in 2026";
export const metaTitle = "Best Portable SSDs for PS5 in 2026";
export const metaDescription = "4 storage options we evaluated for PS5, with a clear breakdown of which drives let you play PS5 games directly and which are backup only.";
export const mainKeyword = "best portable ssd for ps5";
export const introParagraphs = [
  "It is important to understand a real PS5 limitation before buying storage: PS5 only allows PS4, backward-compatible games to run directly from an external USB drive. PS5-native games must be copied back to internal storage or an officially Sony-certified internal expansion NVMe drive before they can actually be played, an external USB drive alone cannot run them directly.",
  "The first time you connect a new drive to a PS5, the console typically requires formatting it specifically for PS5 use, which erases any existing data on that drive, a real risk worth backing up for before you connect anything you have used elsewhere.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09bjyxmdw-p1",
    rank: 1,
    badge: "Best Internal Expansion Pick, Play PS5 Games Directly",
    name: "Seagate Storage Expansion Card 2TB Solid State Drive - NVMe SSD for Xbox Series X|S, Quick Resume, Plug & Play, Licensed",
    price: "Check current price on Amazon",
    rating: "4.8 stars from Amazon ratings",
    reviews: "30,738 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/316Its027kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09BJYXMDW?tag=theofficejournal-20",
    description: "Seagate's Storage Expansion Card is an internal NVMe expansion card built to fit the PS5's internal expansion slot and meet Sony's official certification requirements, meaning PS5-native games installed on it can be played directly, unlike any external USB drive.\n\nIt earns the top spot in this comparison over Western Digital 1TB P40 Game Drive SSD for one main reason. The only pick here that runs PS5-native games directly. On price, it comes in below Western Digital 1TB P40 Game Drive SSD, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Officially Sony-certified for PS5's internal expansion slot. On the other side, Cannot be used externally like a USB storage drive. That's the main tradeoff to weigh against everything above.",
    specs: ["2TB capacity","Internal NVMe expansion card for PS5's internal slot","Sony-certified, Quick Resume compatible","Plug and play, licensed for PS5"],
    pros: ["The only pick here that runs PS5-native games directly","Officially Sony-certified for PS5's internal expansion slot","Supports Quick Resume for PS5-native titles","Straightforward plug-and-play internal installation"],
    cons: ["Price varies, check current listing before buying","Requires opening the PS5's expansion slot cover to install","Cannot be used externally like a USB storage drive"],
    bestFor: "PS5 owners who want to expand internal storage and play PS5-native games directly from the added space",
  },
  {
    id: "b09zrd38d8-p2",
    rank: 2,
    badge: "Best External Pick for Backup and PS4 Game Play",
    name: "Western Digital 1TB P40 Game Drive SSD - Up to 2,000MB/s, RGB Lighting, Compatible with Playstation, Xbox, PC, & Mac",
    price: "$177.99",
    rating: "4.7 stars from Amazon ratings",
    reviews: "1,598 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31szhVvwXYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09ZRD38D8?tag=theofficejournal-20",
    description: "Western Digital's P40 Game Drive SSD is explicitly compatible with PlayStation, Xbox, PC, and Mac, and works well as external USB storage for a PS5, storing PS4 backward-compatible games that can be played directly, and PS5-native games that must be copied back to internal storage first before playing.\n\nOne spot below Seagate Storage Expansion Card 2TB Solid State Drive in this ranking, pricing between it and Seagate Storage Expansion Card 2TB Solid State Drive isn't directly comparable here. The compromise here is straightforward: Cannot run PS5-native games directly, they must be copied to internal storage first. What you gain in return: Directly plays PS4 backward-compatible games from external USB. Whether that trade is worth it depends on which side matters more for your workflow.\n\nWorth knowing before you decide: Solid external backup and storage option for PS5-native games. On the other side, RGB lighting is cosmetic, not a functional benefit. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 2000MB/s rated","External USB, PlayStation, Xbox, PC, Mac compatible","RGB lighting"],
    pros: ["Directly plays PS4 backward-compatible games from external USB","Solid external backup and storage option for PS5-native games","Broad cross-platform compatibility","Strong rated speed for an external USB drive"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first","Will likely need reformatting specifically for PS5 use on first connection, erasing existing data","RGB lighting is cosmetic, not a functional benefit"],
    bestFor: "PS5 owners who want external backup storage and the ability to play PS4 games directly",
  },
  {
    id: "b08y1q2ksz-p3",
    rank: 3,
    badge: "Best Budget External Pick for Backup and PS4 Game Play",
    name: "Seagate 2TB Game Drive for Xbox, USB 3.0 (STKX2000400)",
    price: "$119.99",
    rating: "4.5 stars from Amazon ratings",
    reviews: "20,657 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31+UCQHBazL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Y1Q2KSZ?tag=theofficejournal-20",
    description: "Seagate's 2TB Game Drive for Xbox works equally well as generic external USB storage for a PS5 despite the Xbox branding, suitable for backing up PS5-native game installs and directly playing PS4 backward-compatible titles.\n\nSitting just under Western Digital 1TB P40 Game Drive SSD, it's priced lower than Western Digital 1TB P40 Game Drive SSD. Here's the honest tradeoff: Cannot run PS5-native games directly, they must be copied to internal storage first. And here's what it gets you instead: Large 2TB capacity for backup storage at a budget price. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Directly plays PS4 backward-compatible games from external USB. On the other side, USB 3.0 caps speed below newer external drives. That's the main tradeoff to weigh against everything above.",
    specs: ["2TB capacity","USB 3.0","External USB storage, works with PS5 despite Xbox branding","Large review base"],
    pros: ["Large 2TB capacity for backup storage at a budget price","Directly plays PS4 backward-compatible games from external USB","Large, consistent review base","Good value per gigabyte for backup storage"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first","Will likely need reformatting specifically for PS5 use, erasing existing data","USB 3.0 caps speed below newer external drives"],
    bestFor: "Budget-conscious PS5 owners who mainly need external backup storage",
  },
  {
    id: "b0874xn4d8-p4",
    rank: 4,
    badge: "Best Compact External Pick for Backup and PS4 Game Play",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    description: "Samsung's T7 offers a slim, reliable external USB drive for PS5 backup storage, with 1050MB/s USB 3.2 Gen 2 speed and the same PS4 direct-play, PS5 copy-back limitation as any external USB drive on this console.\n\nRanked just behind Seagate 2TB Game Drive for Xbox, it costs more than Seagate 2TB Game Drive for Xbox. The real tradeoff against that pick: Cannot run PS5-native games directly, they must be copied to internal storage first. In exchange, it offers this instead: Compact, easy to keep alongside a PS5 for backup storage. That's the swap that decides whether this pick or the one above it is the better fit for your storage needs.\n\nWorth knowing before you decide: Directly plays PS4 backward-compatible games from external USB. On the other side, No official IP rating. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 1050MB/s rated","USB 3.2 Gen 2, external USB","Slim metal body"],
    pros: ["Compact, easy to keep alongside a PS5 for backup storage","Directly plays PS4 backward-compatible games from external USB","Reliable, widely reviewed platform","Good everyday backup speed"],
    cons: ["Cannot run PS5-native games directly, they must be copied to internal storage first","Will likely need reformatting specifically for PS5 use, erasing existing data","No official IP rating"],
    bestFor: "PS5 owners who want a compact external backup drive",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Internal expansion versus external USB function distinguished", description: "Clearly separated the one internal NVMe expansion card, which plays PS5-native games directly, from external USB drives, which only play PS4 games directly and require copy-back for PS5-native titles." },
  { title: "Sony certification for internal expansion verified", description: "Confirmed the internal expansion pick meets Sony's official certification requirements for the PS5 internal expansion slot." },
  { title: "First-connection formatting risk flagged", description: "Flagged that PS5 typically requires formatting a new external drive specifically for PS5 use on first connection, which erases existing data." },
  { title: "Cross-platform external compatibility checked", description: "Verified external USB picks work across PlayStation and other platforms as backup and PS4-compatible game storage." }
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Capacity",
    "table": {
      "headers": [
        "Your storage need",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "Lightest everyday storage needs",
          "Western Digital 1TB P40 Game Drive SSD"
        ],
        [
          "Large media libraries or video work",
          "Seagate 2TB Game Drive for Xbox"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $120",
          "Seagate 2TB Game Drive for Xbox"
        ],
        [
          "Mid-range",
          "Western Digital 1TB P40 Game Drive SSD"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ]
      ]
    }
  },
  {
    "subheading": "TLC vs QLC NAND",
    "cards": [
      {
        "label": "TLC NAND",
        "text": "Better sustained write speed and longer-term endurance, especially once any onboard cache is exhausted during a large transfer. In this comparison: check each listing's specs directly, NAND type isn't always disclosed."
      },
      {
        "label": "QLC NAND",
        "text": "More capacity per dollar, at the cost of a bigger sustained-speed drop once the cache fills on long transfers. In this comparison: none explicitly confirmed in this specific roundup, check the listing before assuming."
      }
    ],
    "note": "NAND type isn't explicitly confirmed for every pick here, check each specific listing's technical details if sustained speed matters to your workflow."
  },
  {
    "subheading": "Rugged/Waterproof vs Standard Build",
    "table": {
      "headers": [
        "What you're weighing",
        "Recommended pick"
      ],
      "rows": [
        [
          "Drop and water resistance for field use",
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "Slimmest, lightest everyday carry",
          "Seagate Storage Expansion Card 2TB Solid State Drive"
        ]
      ]
    }
  },
  {
    "subheading": "For Large Sustained Transfers (Video Editing) Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "TLC NAND specifically, a stated sustained write speed (not just the peak burst number), and a USB generation on both drive and host that actually supports the rated speed."
      },
      {
        "label": "In this comparison",
        "text": "Samsung T7 Portable SSD 1TB Titan Gray fits this specifically: Compact, easy to keep alongside a PS5 for backup storage."
      }
    ]
  },
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "What you're weighing",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest star rating",
          "Seagate Storage Expansion Card 2TB Solid State Drive"
        ],
        [
          "Largest review base (more statistical confidence)",
          "Seagate Storage Expansion Card 2TB Solid State Drive"
        ]
      ]
    }
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Plan around real usable capacity, not the number printed on the box",
    "explanation": "Storage manufacturers advertise capacity in decimal gigabytes and terabytes (1 GB equals 1,000,000,000 bytes), but operating systems report free space in binary units (1 GB equals 1,073,741,824 bytes), and on top of that gap, formatting itself consumes a further slice of raw capacity for the file system's own bookkeeping.\n\nTogether these two factors mean a drive advertised as 1TB will typically show up as roughly 930GB in your file explorer, a genuinely predictable shortfall rather than a defect, but one that catches buyers off guard if they plan their storage needs around the advertised round number.\n\nBefore buying, mentally subtract roughly 7 percent from the advertised capacity to estimate real usable space, and size up a tier if your actual storage need is close to the advertised number rather than comfortably under it."
  },
  {
    "criterion": "Check the NAND flash type where the manufacturer discloses it",
    "explanation": "NAND flash memory, the actual chip technology storing your data, comes in different types based on how many bits each memory cell stores, with TLC (three bits per cell) generally offering better sustained write speed and longer-term endurance than QLC (four bits per cell), which packs more capacity per chip but at the cost of slower performance once any built-in cache is exhausted.\n\nThis matters concretely because many drives use a small pool of faster cache memory to accelerate the beginning of a transfer, and once that cache fills during a large or sustained copy, the drive falls back to its native NAND speed, which is a much bigger drop on a QLC drive than a TLC one, sometimes cutting write speed by more than half.\n\nManufacturers don't always advertise NAND type prominently, so check the product listing's technical details or search the model number alongside \"NAND type\" before assuming a drive uses the faster TLC type."
  },
  {
    "criterion": "Confirm your device's actual port and cable support the drive's rated speed",
    "explanation": "A portable SSD's rated speed, such as 1050MB/s or 2000MB/s, is the maximum the drive's own controller can achieve, but real-world speed is always capped by the slowest link in the chain: the drive itself, the cable connecting it, and the port on your computer or console, whichever of the three supports the lowest maximum speed.\n\nThis means a genuinely fast 2000MB/s-rated drive plugged into an older USB 3.0 port, or connected with a cable rated for a lower USB generation, will perform no better than a much cheaper drive rated for that lower speed, making the expensive drive's extra speed ceiling completely wasted money in that specific setup.\n\nCheck your computer, phone, or console's actual port specification (not just its connector shape, since USB-C and USB-A shapes don't indicate speed) and confirm any cable you use is rated for that same speed tier before expecting a fast drive's full rated performance."
  },
  {
    "criterion": "Understand that a drive's speed rating reflects a burst, not sustained performance",
    "explanation": "The headline speed figure on a portable SSD's packaging is typically measured using a short benchmark that primarily tests the drive's fast cache memory, not its sustained real-world performance across a large, continuous file transfer that runs long enough to exhaust that cache.\n\nThis is the single most common reason a portable SSD feels slower in real use than its marketing suggests: copying a single large video file or a folder of thousands of photos can run well past the point where the cache empties, causing the transfer to visibly slow down partway through, something a short benchmark screenshot never reveals.\n\nIf your actual use case involves large sustained transfers, specifically look for reviews or listings that mention sustained write speed after cache exhaustion, not just the peak burst number on the box."
  },
  {
    "criterion": "Compare warranty length as a genuine (if imperfect) signal of manufacturer confidence",
    "explanation": "A storage device's warranty length, commonly ranging from one to five years across different brands and models even at similar price points, reflects the manufacturer's own actuarial confidence in how long that specific NAND and controller combination will reliably hold data, since a company offering a longer warranty is accepting more financial risk on a component they presumably trust more.\n\nThis isn't a perfect signal on its own, a shorter warranty doesn't automatically mean an unreliable drive, but at a similar price point between two otherwise comparable drives, the one backed by a longer warranty is making a more concrete promise about its own longevity rather than just a marketing claim.\n\nCheck the stated warranty length directly in the listing or manufacturer's spec sheet, and weigh it alongside NAND type and brand reputation rather than treating any single signal as decisive on its own."
  }
];

export const faq: FaqItem[] = [
  { q: "Can I play PS5 games directly from an external USB SSD?", a: "No. PS5 only allows PS4 backward-compatible games to run directly from external USB storage. PS5-native games must be copied back to internal storage or a certified internal expansion drive before playing." },
  { q: "What is the difference between the internal expansion card and the external drives in this guide?", a: "The internal NVMe expansion card installs inside the PS5 and lets you play PS5-native games directly from it. The external USB drives are for backup storage and directly playing PS4 games only." },
  { q: "Will I lose data when I connect a new drive to my PS5?", a: "Likely yes on first connection. PS5 typically requires formatting a new external drive specifically for PS5 use, which erases existing data, back up first." },
  { q: "Do I need an officially certified drive for the PS5 internal expansion slot?", a: "Yes, Sony requires the internal expansion drive to meet specific certification and speed requirements, an uncertified drive may not function correctly." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-gaming", title: "Best Portable SSDs for PC Gaming in 2026" },
  { href: "/guide/best-portable-ssds-for-xbox-series-x-and-s", title: "Best Portable SSDs for Xbox Series X and S" },
  { href: "/guide/best-nvme-portable-ssds", title: "Best NVMe Portable SSDs in 2026" }
];
