export const guideSlug = "best-portable-ssds-for-iphone";
export const guideTitle = "4 Best Portable SSDs for iPhone in 2026";
export const metaTitle = "Best Portable SSDs for iPhone in 2026";
export const metaDescription = "4 portable SSDs we evaluated for iPhone use, including ProRes recording speed requirements and older Lightning-port compatibility notes.";
export const mainKeyword = "best portable ssd for iphone";
export const introParagraphs = [
  "iPhone Pro models that support ProRes recording directly to an external drive require the drive to meet Apple's specific minimum sustained write speed, not every 'for iPhone' marketed drive actually meets this consistently, worth checking verified reviews for confirmed ProRes recording success.",
  "Older iPhones with a Lightning port, anything before iPhone 15, are not directly compatible with a USB-C drive without an adapter, a real compatibility gap worth checking before buying if you have not yet upgraded to a USB-C iPhone.",
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
    id: "b0dr381n86-p1",
    rank: 1,
    badge: "Best MagSafe Pick for iPhone",
    name: "Corsair EX400U 2TB USB4 Portable External Type-C SSD - Up to 4,000MB/s Read, 3,600MB/s Write, Thunderbolt 4, MagSafe, Includes 40Gbps Cable - Gray",
    price: "$399.99",
    rating: "4.1 stars from Amazon ratings",
    reviews: "382 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/21F-0rmbcOL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DR381N86?tag=theofficejournal-20",
    description: "Corsair's EX400U 2TB offers genuine MagSafe magnetic compatibility for hands-free attachment to a MagSafe-equipped iPhone, alongside USB4 and Thunderbolt 4 compatible speed up to 4000MB/s.\n\nIt earns the top spot in this comparison over Transcend ESD310 1TB External SSD for one main reason. Genuine MagSafe magnetic compatibility for iPhone. On price, it's actually priced above Transcend ESD310 1TB External SSD, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Strong sustained speed tier for demanding recording use. On the other side, Requires USB-C, not compatible with older Lightning iPhones without an adapter. That's the main tradeoff to weigh against everything above.",
    specs: ["2TB capacity","MagSafe compatible","Up to 4000MB/s read rated","USB4, Thunderbolt 4 compatible"],
    pros: ["Genuine MagSafe magnetic compatibility for iPhone","Strong sustained speed tier for demanding recording use","Includes a properly rated cable","Large 2TB capacity for extensive iPhone media"],
    cons: ["Confirm ProRes recording compatibility in current reviews before relying on it","Premium price versus standard iPhone-compatible drives","Requires USB-C, not compatible with older Lightning iPhones without an adapter"],
    bestFor: "iPhone Pro users who want MagSafe convenience and strong sustained speed",
  },
  {
    id: "b0c3b32h9m-p2",
    rank: 2,
    badge: "Best Dual-Connector Pick for iPhone",
    name: "Transcend ESD310 1TB External SSD, Up to 1,050MB/s, Dual USB Drive, 2-in-1 Type C & A, USB 3.2 Gen2 Portable SSD",
    price: "$239.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "2,340 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31HBU-HAxoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3B32H9M?tag=theofficejournal-20",
    description: "Transcend's ESD310 includes both USB-C and USB-A connectors in one drive, useful for buyers who move files between an iPhone, a USB-C laptop, and an older USB-A accessory.\n\nOne spot below Corsair EX400U 2TB USB4 Portable External Type-C SSD in this ranking, it's priced lower than Corsair EX400U 2TB USB4 Portable External Type-C SSD. The compromise here is straightforward: Not explicitly confirmed for ProRes direct recording. What you gain in return: Dual connector design adds real flexibility across devices. Whether that trade is worth it depends on which side matters more for your workflow.\n\nWorth knowing before you decide: Solid everyday speed for iPhone photo and video backups. On the other side, Smaller review base than mainstream single-connector drives. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Dual USB-C and USB-A connectors","Up to 1050MB/s rated","USB 3.2 Gen2"],
    pros: ["Dual connector design adds real flexibility across devices","Solid everyday speed for iPhone photo and video backups","Compact, travel-friendly design","Good value for the dual-connector convenience"],
    cons: ["Not explicitly confirmed for ProRes direct recording","Requires USB-C, not compatible with older Lightning iPhones without an adapter","Smaller review base than mainstream single-connector drives"],
    bestFor: "Buyers who want one drive that works across an iPhone and multiple other devices",
  },
  {
    id: "b08hn37xc1-p3",
    rank: 3,
    badge: "Best Rugged Pick for iPhone Photographers",
    name: "SANDISK 2TB Extreme Portable SSD (Old Model) - Up to 1050MB/s, USB-C, USB 3.2 Gen 2, IP65 Water and Dust Resistance, Updated Firmware - SDSSDE61-2T00-G25",
    price: "$299.99",
    rating: "4.6 stars from Amazon ratings",
    reviews: "91,365 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41eTFK7clfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HN37XC1?tag=theofficejournal-20",
    description: "SanDisk's Extreme pairs IP65 water and dust resistance with 1050MB/s USB-C speed, a sensible choice for iPhone photographers backing up shoots in the field.\n\nSitting just under Transcend ESD310 1TB External SSD, it costs more than Transcend ESD310 1TB External SSD. Here's the honest tradeoff: Requires USB-C, older Lightning iPhones need an adapter. And here's what it gets you instead: IP65 rating suits field use for iPhone photographers. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Large 2TB capacity for extensive photo libraries. On the other side, Older model, verify current firmware. That's the main tradeoff to weigh against everything above.",
    specs: ["2TB capacity","Up to 1050MB/s rated","USB-C, USB 3.2 Gen 2","IP65 water and dust resistance"],
    pros: ["IP65 rating suits field use for iPhone photographers","Large 2TB capacity for extensive photo libraries","Well-established, large review base","Realistic everyday speed ceiling"],
    cons: ["Requires USB-C, older Lightning iPhones need an adapter","Not explicitly confirmed for ProRes direct recording at this speed tier","Older model, verify current firmware"],
    bestFor: "iPhone photographers who want rugged field-use durability",
  },
  {
    id: "b0874xn4d8-p4",
    rank: 4,
    badge: "Best Slim Everyday Pick for iPhone",
    name: "Samsung T7 Portable SSD 1TB Titan Gray, USB 3.2 Gen 2, Up to 1,050MB/s",
    price: "$216.36",
    rating: "4.7 stars from Amazon ratings",
    reviews: "21,124 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31LdvAbumfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0874XN4D8?tag=theofficejournal-20",
    description: "Samsung's T7 offers a slim, lightweight USB-C drive rated up to 1050MB/s, a straightforward everyday backup companion for an iPhone's photo and video library.\n\nRanked just behind SANDISK 2TB Extreme Portable SSD, it's priced lower than SANDISK 2TB Extreme Portable SSD. The real tradeoff against that pick: Requires USB-C, older Lightning iPhones need an adapter. In exchange, it offers this instead: Slim, lightweight design pairs well with an iPhone on the go. That's the swap that decides whether this pick or the one above it is the better fit for your storage needs.\n\nWorth knowing before you decide: Reliable, widely reviewed platform. On the other side, No official IP rating. That's the main tradeoff to weigh against everything above.",
    specs: ["1TB capacity","Up to 1050MB/s rated","USB 3.2 Gen 2","Slim metal body"],
    pros: ["Slim, lightweight design pairs well with an iPhone on the go","Reliable, widely reviewed platform","Good everyday backup speed","Comes in multiple colors"],
    cons: ["Requires USB-C, older Lightning iPhones need an adapter","Not explicitly marketed for ProRes recording","No official IP rating"],
    bestFor: "Buyers who want a slim everyday iPhone backup companion",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "ProRes sustained speed requirement checked", description: "Noted which drives' sustained write speed tier is a realistic candidate for iPhone Pro ProRes direct recording, and where that needs independent verification." },
  { title: "Lightning versus USB-C compatibility flagged", description: "Flagged that all picks require USB-C, and that older Lightning-port iPhones before iPhone 15 need an adapter to connect directly." },
  { title: "Field durability for photography use", description: "Weighed IP ratings and build quality for buyers backing up iPhone photo and video shoots in real field conditions." },
  { title: "MagSafe compatibility where relevant", description: "Credited genuine MagSafe compatibility as a real convenience feature for hands-free iPhone attachment, not just a marketing label." }
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
          "Transcend ESD310 1TB External SSD"
        ],
        [
          "Large media libraries or video work",
          "SANDISK 2TB Extreme Portable SSD"
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
          "Under $217",
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "Mid-range",
          "SANDISK 2TB Extreme Portable SSD"
        ],
        [
          "No firm budget ceiling, prioritizing speed or NAND quality",
          "Corsair EX400U 2TB USB4 Portable External Type-C SSD"
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
          "SANDISK 2TB Extreme Portable SSD"
        ],
        [
          "Slimmest, lightest everyday carry",
          "Corsair EX400U 2TB USB4 Portable External Type-C SSD"
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
        "text": "SANDISK 2TB Extreme Portable SSD fits this specifically: IP65 rating suits field use for iPhone photographers."
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
          "Samsung T7 Portable SSD 1TB Titan Gray"
        ],
        [
          "Largest review base (more statistical confidence)",
          "SANDISK 2TB Extreme Portable SSD"
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
  { q: "Can I record ProRes directly to any external SSD from my iPhone?", a: "Only if the drive sustains Apple's specific minimum write speed requirement. Check verified reviews for confirmed ProRes recording success, not just the drive's peak rated speed." },
  { q: "Do I need an adapter to use these drives with my iPhone?", a: "If your iPhone is older than the 15 series with a Lightning port, yes, you will need a Lightning to USB-C adapter." },
  { q: "Is a MagSafe-compatible drive worth it?", a: "If you want hands-free attachment to a MagSafe iPhone for convenience, yes. Otherwise a standard non-magnetic drive with similar specs is usually cheaper." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-magnetic-portable-ssds", title: "Best Magnetic Portable SSDs in 2026" },
  { href: "/guide/best-portable-ssds-for-photo-storage", title: "Best Portable SSDs for Photo Storage in 2026" },
  { href: "/guide/best-ultra-compact-portable-ssds", title: "Best Ultra-Compact Portable SSDs in 2026" }
];
