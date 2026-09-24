export const guideSlug = "best-portable-ssds-for-mac-and-macbook";
export const guideTitle = "4 Best Portable SSDs for Mac and MacBook in 2026";
export const metaTitle = "Best Portable SSDs for Mac in 2026";
export const metaDescription = "4 portable SSDs we evaluated for Mac and MacBook, covering Time Machine reformatting needs and realistic sustained backup speed.";
export const mainKeyword = "best portable ssd for mac";
export const introParagraphs = [
  "Most portable SSDs ship pre-formatted in NTFS or exFAT, Windows-oriented formats, so Mac buyers who specifically want to use a drive for Time Machine backups will typically need to reformat it to APFS first through Disk Utility.",
  "Time Machine backups benefit more from sustained write consistency over time than from a drive's peak burst speed, worth weighing reviews that specifically discuss long-term backup reliability rather than just headline transfer numbers.",
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
    id: "b09vlk9w3s-p1",
    rank: 1,
    badge: "Best Overall Pick for Mac",
    name: "Samsung T7 Shield Portable SSD 1TB, USB 3.2 Gen 2, Up to 1,050 MB/s",
    price: "$286.88",
    rating: "4.7 stars from Amazon ratings",
    reviews: "16,380 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21mARCvUWxL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VLK9W3S?tag=theofficejournal-20",
    description: "Samsung's T7 Shield pairs a rugged shell with genuine 1050MB/s USB 3.2 Gen 2 speed, a reliable everyday companion for MacBook users who want durability alongside solid transfer performance.\n\nIt earns the top spot in this comparison over Corsair EX400U Survivor 1TB USB4 External SSD for one main reason. Rugged shell suits MacBook users on the go. On price, it's actually priced above Corsair EX400U Survivor 1TB USB4 External SSD, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Reliable, well-reviewed platform. On the other side, Sustained speed can dip once cache fills. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 1050MB/s rated","USB 3.2 Gen 2","Rugged shield"],
    pros: ["Rugged shell suits MacBook users on the go","Reliable, well-reviewed platform","Realistic USB 3.2 Gen 2 speed ceiling","Good sustained-speed reputation among reviewers"],
    cons: ["Ships pre-formatted for Windows, needs APFS reformatting for Time Machine","Bulkier than the non-shielded T7","Sustained speed can dip once cache fills"],
    bestFor: "MacBook users who want everyday durability alongside solid backup speed",
  },
  {
    id: "b0fvmgfpht-p2",
    rank: 2,
    badge: "Best Fast USB4 Pick for Mac",
    name: "Corsair EX400U Survivor 1TB USB4 External SSD - Up to 4000 MB/s, IP55 Rugged Drive, Plug & Play for PC, Mac & iPad - Black",
    price: "$238.58",
    rating: "4.8 stars from Amazon ratings",
    reviews: "60 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21K3rg5MWlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FVMGFPHT?tag=theofficejournal-20",
    description: "Corsair's EX400U Survivor uses a genuine USB4 bridge rated up to 4000MB/s, a speed tier that MacBooks with Thunderbolt or USB4 ports can genuinely take advantage of.\n\nOne spot below Samsung T7 Shield Portable SSD 1TB in this ranking, it's priced lower than Samsung T7 Shield Portable SSD 1TB. The compromise here is straightforward: Needs a genuine Thunderbolt or USB4 MacBook port to matter. What you gain in return: Genuinely fast USB4 speed for Thunderbolt-equipped MacBooks. Whether that trade is worth it depends on which side matters more for your workflow.\n\nWorth knowing before you decide: IP55 rating adds real everyday durability. On the other side, Requires APFS reformatting for native Time Machine use. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 4000MB/s rated","USB4 bridge","IP55 rugged rating"],
    pros: ["Genuinely fast USB4 speed for Thunderbolt-equipped MacBooks","IP55 rating adds real everyday durability","Compact for the speed and durability tier","Strong sustained-speed reputation among reviewers"],
    cons: ["Needs a genuine Thunderbolt or USB4 MacBook port to matter","Smaller review base than mainstream picks","Requires APFS reformatting for native Time Machine use"],
    bestFor: "MacBook users with Thunderbolt or USB4 ports who want top-tier speed",
  },
  {
    id: "b0874xn4d8-p3",
    rank: 3,
    badge: "Best Slim Everyday Pick for Mac",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    description: "The standard Samsung T7 offers the same 1050MB/s USB 3.2 Gen 2 speed as the Shield in a slimmer, lighter body better suited to minimalist MacBook setups.\n\nSitting just under Corsair EX400U Survivor 1TB USB4 External SSD, it's priced lower than Corsair EX400U Survivor 1TB USB4 External SSD. Here's the honest tradeoff: No official IP rating. And here's what it gets you instead: Slim, lightweight design pairs well with a MacBook. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Reliable, widely reviewed platform. On the other side, 1050MB/s ceiling is not the fastest tier available. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 1050MB/s rated","USB 3.2 Gen 2","Slim metal body"],
    pros: ["Slim, lightweight design pairs well with a MacBook","Reliable, widely reviewed platform","Good sustained speed for everyday backup use","Comes in multiple colors"],
    cons: ["No official IP rating","Ships pre-formatted for Windows, needs APFS reformatting","1050MB/s ceiling is not the fastest tier available"],
    bestFor: "MacBook users who want the slimmest everyday drive",
  },
  {
    id: "b0f3377jbn-p4",
    rank: 4,
    badge: "Best High-Speed Pick for Video Work on Mac",
    name: "Crucial X10 1TB Portable SSD, Up to 2,100MB/s, USB 3.2 USB-C, Durable Storage for Games, Photos & Files, Blue",
    price: "$207.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,363 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/312gFk3+1CL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F3377JBN?tag=theofficejournal-20",
    description: "Crucial's X10 rates up to 2100MB/s over USB 3.2, a genuine step up for MacBook users doing video work who do not have a Thunderbolt or USB4 port.\n\nRanked just behind Samsung T7 Portable SSD 1TB Titan Gray, it's priced lower than Samsung T7 Portable SSD 1TB Titan Gray. The real tradeoff against that pick: Needs a matching high-speed MacBook port to hit rated speed. In exchange, it offers this instead: Faster rated bridge than standard Gen 2 drives. That's the swap that decides whether this pick or the one above it is the better fit for your storage needs.\n\nWorth knowing before you decide: Durable casing for mobile MacBook use. On the other side, Ships pre-formatted for Windows, needs APFS reformatting. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 2100MB/s rated","USB 3.2 Type-C","Durable casing"],
    pros: ["Faster rated bridge than standard Gen 2 drives","Durable casing for mobile MacBook use","Competitive price for the speed tier","Good fit for MacBook video work without Thunderbolt"],
    cons: ["Needs a matching high-speed MacBook port to hit rated speed","Newer entrant with a smaller review base","Ships pre-formatted for Windows, needs APFS reformatting"],
    bestFor: "MacBook users doing video work without a Thunderbolt port",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "APFS reformatting requirement flagged", description: "Noted that every pick ships pre-formatted for Windows and needs a one-time APFS reformat through Disk Utility for native Time Machine use." },
  { title: "Sustained speed for backup consistency", description: "Weighted sustained write consistency over peak burst speed, since Time Machine backups benefit more from steady performance over time." },
  { title: "Mac port compatibility", description: "Compared each drive's required interface tier against typical MacBook USB-C, USB4, and Thunderbolt port capabilities." },
  { title: "Everyday durability for mobile Mac use", description: "Weighed build quality and IP or rugged ratings for MacBook users who carry a drive between locations." }
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
          "Samsung T7 Shield Portable SSD 1TB"
        ],
        [
          "Large media libraries or video work",
          "Crucial X10 1TB Portable SSD"
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
          "Under $208",
          "Crucial X10 1TB Portable SSD"
        ],
        [
          "Mid-range",
          "Corsair EX400U Survivor 1TB USB4 External SSD"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          "Samsung T7 Shield Portable SSD 1TB"
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
          "Samsung T7 Shield Portable SSD 1TB"
        ],
        [
          "Slimmest, lightest everyday carry",
          "Samsung T7 Portable SSD 1TB Titan Gray"
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
        "text": "Corsair EX400U Survivor 1TB USB4 External SSD fits this specifically: Genuinely fast USB4 speed for Thunderbolt-equipped MacBooks."
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
          "Corsair EX400U Survivor 1TB USB4 External SSD"
        ],
        [
          "Largest review base (more statistical confidence)",
          "Samsung T7 Portable SSD 1TB Titan Gray"
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
  { q: "Do I need to reformat a new SSD to use it with my Mac?", a: "For Time Machine specifically, yes, reformat to APFS through Disk Utility. For general file transfer, the default exFAT format already works fine on Mac." },
  { q: "What speed do I actually need for Time Machine?", a: "Sustained write consistency matters more than peak speed. A standard USB 3.2 Gen 2 drive rated around 1050MB/s is sufficient for most Time Machine setups." },
  { q: "Can I use the same drive for both Mac and Windows?", a: "Yes, if you keep it formatted in exFAT, though Time Machine specifically requires APFS, which is not natively readable on Windows." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-ssds-for-macbook-pro", title: "Best Portable SSDs for MacBook Pro in 2026" },
  { href: "/guide/best-thunderbolt-portable-ssds", title: "Best Thunderbolt Portable SSDs in 2026" },
  { href: "/guide/best-portable-ssds-for-video-editing", title: "Best Portable SSDs for Video Editing in 2026" }
];
