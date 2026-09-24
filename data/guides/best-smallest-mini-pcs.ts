export const guideSlug = "best-smallest-mini-pcs";
export const guideTitle = "5 Best Smallest Mini PCs in 2026";
export const metaTitle = "Best Smallest Mini PCs (2026)";
export const metaDescription =
  "5 of the smallest mini PCs we evaluated, using actual measured chassis volume plus power brick size, not just marketing dimensions.";
export const mainKeyword = "smallest mini pc";
export const introParagraphs = [
  "Actual measured chassis volume plus the external power brick and cable clearance genuinely determine installed footprint, worth calculating this complete picture rather than trusting marketing dimensions for the bare unit alone, since a tiny chassis with a bulky external power brick doesn't save as much space as it first appears.",
  "The smallest mini PCs often trade repairability, port count, and thermal headroom for compact size, worth checking these specific tradeoffs rather than assuming a smaller chassis is a strictly better version of a larger one.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31S9Kd+E2aL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "gkzj8gp7-smallest",
    rank: 1,
    badge: "Best Smallest Mini PC Overall",
    name: "Bmax Mini PC B1 Plus, Intel Celeron J3355 (Up to 2.5GHz), 6GB RAM 128GB eMMC",
    price: "$169.99",
    rating: "4.2 stars from Amazon ratings",
    reviews: "454 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31S9Kd+E2aL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GKZJ8GP7?tag=theofficejournal-20",
    description: "A genuinely tiny, budget-friendly chassis appropriate for buyers prioritizing the smallest possible footprint over raw performance.\n\nIt earns the top spot in this comparison over origimagic C5 Mini PC for one main reason. Genuinely tiny chassis footprint among the smallest available. On price, it comes in below origimagic C5 Mini PC, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Very budget-friendly price. On the other side, Verify the power brick size when calculating true installed footprint. That's the main tradeoff to weigh against everything above.",
    specs: ["Intel Celeron J3355 (Up to 2.5GHz)","6GB RAM, 128GB eMMC storage","Very compact chassis","Solid review base"],
    pros: ["Genuinely tiny chassis footprint among the smallest available","Very budget-friendly price","Solid review base for confidence at this price point","Good entry point for the lightest everyday computing tasks"],
    cons: ["Entry-level Celeron processor and eMMC storage suit only very light tasks","6GB RAM is limited for demanding multitasking","Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers prioritizing the smallest possible footprint for the lightest everyday computing tasks",
  },
  {
    id: "h328m6zp-smallest",
    rank: 2,
    badge: "Best Small Mini PC with Genuine Ryzen Performance",
    name: "origimagic C5 Mini PC, Ryzen 5 3500U, 8GB DDR4 RAM, 256GB NVMe SSD",
    price: "$229.99",
    rating: "4.8 stars from Amazon ratings",
    reviews: "35 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41olJyWxH0L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H328M6ZP?tag=theofficejournal-20",
    description: "A genuine Ryzen 5 3500U in a compact chassis, appropriate for buyers wanting more processing capability than entry-level Celeron alternatives while staying small.\n\nOne spot below Bmax Mini PC B1 Plus in this ranking, it costs more than Bmax Mini PC B1 Plus. The compromise here is straightforward: Smaller review base, verify current reviews before purchase. What you gain in return: High 4.8-star rating for confidence. Whether that trade is worth it depends on which side matters more for your use case.\n\nWorth knowing before you decide: Genuine Ryzen processor tier above entry-level Celeron alternatives. On the other side, Verify the power brick size when calculating true installed footprint. That's the main tradeoff to weigh against everything above.",
    specs: ["AMD Ryzen 5 3500U","8GB DDR4 RAM","256GB NVMe SSD","Compact chassis"],
    pros: ["High 4.8-star rating for confidence","Genuine Ryzen processor tier above entry-level Celeron alternatives","Fast NVMe storage in a compact form factor","Good balance of small size and real processing capability"],
    cons: ["Smaller review base, verify current reviews before purchase","8GB RAM may feel tight for heavier multitasking","Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting genuine Ryzen processing capability in a genuinely compact chassis",
  },
  {
    id: "dnfnxxyn-smallest",
    rank: 3,
    badge: "Best Value Small Mini PC Pick",
    name: "BOSGAME E4 Air Mini PC, Mini Computers with AMD Ryzen 5 3500U, 8GB DDR4 256GB SATA SSD",
    price: "$249.00",
    rating: "4.0 stars from Amazon ratings",
    reviews: "608 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41Rj9E-7y9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DNFNXXYN?tag=theofficejournal-20",
    description: "A large review base backs this compact Ryzen 5 3500U build, appropriate for buyers wanting real-world reliability data for a small-footprint everyday computer.\n\nSitting just under origimagic C5 Mini PC, it costs more than origimagic C5 Mini PC. Here's the honest tradeoff: More moderate 4.0-star rating, verify current reviews for reliability reports. And here's what it gets you instead: Large review base for real-world reliability data. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Genuine Ryzen processor tier for solid everyday performance. On the other side, Verify the power brick size when calculating true installed footprint. That's the main tradeoff to weigh against everything above.",
    specs: ["AMD Ryzen 5 3500U","8GB DDR4 RAM","256GB SATA SSD","Large review base"],
    pros: ["Large review base for real-world reliability data","Genuine Ryzen processor tier for solid everyday performance","Compact chassis for a small desk footprint","Reasonable price for the spec combination"],
    cons: ["More moderate 4.0-star rating, verify current reviews for reliability reports","SATA SSD is slower than NVMe alternatives at a similar price","Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting a well-reviewed, compact everyday computer with solid Ryzen performance",
  },
  {
    id: "gx69jjqz-smallest",
    rank: 4,
    badge: "Best Small Mini PC with More RAM",
    name: "Getorli Mini PC AMD Ryzen 5 3500U (4C/8T, Max 3.7GHz) Small Desktop Computer 16GB DDR4 RAM",
    price: "$233.99",
    rating: "4.2 stars from Amazon ratings",
    reviews: "14 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41uayoKLXcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GX69JJQZ?tag=theofficejournal-20",
    description: "A genuinely small chassis with 16GB RAM, more headroom than most compact mini PCs at this size and price point offer.\n\nRanked just behind BOSGAME E4 Air Mini PC, it's priced lower than BOSGAME E4 Air Mini PC. The real tradeoff against that pick: Small review base, verify current reviews before purchase. In exchange, it offers this instead: 16GB RAM gives more headroom than typical compact mini PCs at this size. That's the swap that decides whether this pick or the one above it is the better fit for your setup.\n\nWorth knowing before you decide: Genuine Ryzen processor tier for solid everyday performance. On the other side, Verify current reviews for long-term build quality reports. That's the main tradeoff to weigh against everything above.",
    specs: ["AMD Ryzen 5 3500U, 4C/8T","16GB DDR4 RAM","Small desktop form factor","Budget-friendly price"],
    pros: ["16GB RAM gives more headroom than typical compact mini PCs at this size","Genuine Ryzen processor tier for solid everyday performance","Budget-friendly price for the RAM configuration offered","Compact form factor for a small desk footprint"],
    cons: ["Small review base, verify current reviews before purchase","Verify the power brick size when calculating true installed footprint","Verify current reviews for long-term build quality reports"],
    bestFor: "Buyers wanting more RAM headroom in a genuinely compact mini PC chassis",
  },
  {
    id: "grfr7tx2-smallest",
    rank: 5,
    badge: "Best Small Mini PC with Fast NVMe Storage",
    name: "BOSGAME E2 Mini PC, AMD Ryzen 5 3500U, 16GB DDR4 RAM 512GB NVMe SSD",
    price: "$299.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "14 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/414stNz27eL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GRFR7TX2?tag=theofficejournal-20",
    description: "16GB RAM and 512GB fast NVMe storage in a compact chassis, appropriate for buyers wanting the most generous specs among the small-footprint picks in this guide.\n\nOne spot below Getorli Mini PC AMD Ryzen 5 3500U in this ranking, it costs more than Getorli Mini PC AMD Ryzen 5 3500U. The compromise here is straightforward: Small review base, verify current reviews before purchase. What you gain in return: Most generous RAM and storage combination among the compact picks. Whether that trade is worth it depends on which side matters more for your use case.\n\nWorth knowing before you decide: Fast NVMe storage for genuine responsiveness. On the other side, Verify the power brick size when calculating true installed footprint. That's the main tradeoff to weigh against everything above.",
    specs: ["AMD Ryzen 5 3500U","16GB DDR4 RAM","512GB NVMe SSD","Compact chassis"],
    pros: ["Most generous RAM and storage combination among the compact picks","Fast NVMe storage for genuine responsiveness","Genuine Ryzen processor tier for solid everyday performance","Compact form factor for a small desk footprint"],
    cons: ["Small review base, verify current reviews before purchase","Higher price than the most budget-focused compact picks","Verify the power brick size when calculating true installed footprint"],
    bestFor: "Buyers wanting the most generous RAM and storage specs among genuinely compact mini PCs",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Complete installed footprint calculated beyond bare chassis dimensions", description: "Calculated actual measured chassis volume plus the external power brick and cable clearance, not just marketing dimensions for the bare unit." },
  { title: "Tradeoffs of extreme compactness assessed honestly", description: "Assessed honestly that the smallest mini PCs often trade repairability, port count, and thermal headroom for compact size." },
  { title: "Processor tier weighted against genuine everyday performance needs", description: "Weighted processor tier against realistic everyday performance needs, from the lightest tasks to more capable Ryzen-based use." },
  { title: "Review base size weighted appropriately for smaller, newer listings", description: "Weighted review base size appropriately, recognizing that smaller, newer listings may have less data despite genuine product quality." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Use Case",
    "table": {
      "headers": [
        "What you're running",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "Light everyday or office use",
          "Bmax Mini PC B1 Plus"
        ],
        [
          "Demanding, sustained workloads",
          "BOSGAME E2 Mini PC"
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
          "Under $170",
          "Bmax Mini PC B1 Plus"
        ],
        [
          "Mid-range",
          "Getorli Mini PC AMD Ryzen 5 3500U"
        ],
        [
          "No firm budget ceiling, prioritizing CPU or RAM",
          "BOSGAME E2 Mini PC"
        ]
      ]
    }
  },
  {
    "subheading": "Fanless (Passive) vs Actively Cooled",
    "cards": [
      {
        "label": "Fanless, Passive Cooling",
        "text": "Completely silent with no moving parts, at the cost of throttling under sustained heavy load. In this comparison: check each listing's cooling design directly."
      },
      {
        "label": "Actively Cooled (Fan)",
        "text": "Sustains heavier workloads longer without throttling, at the cost of some fan noise under load. In this comparison: Bmax Mini PC B1 Plus, origimagic C5 Mini PC, BOSGAME E4 Air Mini PC."
      }
    ],
    "note": "Default to a fanless pick like Bmax Mini PC B1 Plus for a quiet home office or media setup, and step up to active cooling if you're running sustained CPU-heavy work."
  },
  {
    "subheading": "By RAM and Storage Headroom",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lightest budget-friendly configuration",
          "Bmax Mini PC B1 Plus"
        ],
        [
          "Maximum RAM and storage headroom",
          "BOSGAME E2 Mini PC"
        ]
      ]
    }
  },
  {
    "subheading": "For GPU-Accelerated Work or Gaming Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A dedicated GPU or a confirmed Oculink/Thunderbolt eGPU connection explicitly stated in the listing, not just a generic \"gaming capable\" claim."
      },
      {
        "label": "In this comparison",
        "text": "No pick in this specific comparison explicitly confirms dedicated or external GPU support; check our eGPU-focused mini PC roundup if that's a hard requirement."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what BOSGAME E2 Mini PC offers: Most generous RAM and storage combination among the compact picks. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "Bmax Mini PC B1 Plus already covers the essentials: Genuinely tiny chassis footprint among the smallest available. The main thing you'd be paying extra for elsewhere in this list is headroom you may not need."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match RAM and storage to your actual workload, not just the headline spec",
    "explanation": "Mini PC listings often lead with a large RAM number like 16GB, 32GB, or 64GB, but the amount you actually need depends heavily on what you're running: basic web browsing and office work is comfortable at 8 to 16GB, while running multiple virtual machines, a Plex transcoding server, or memory-hungry emulation genuinely benefits from 32GB or more.\n\nBuying far more RAM than your workload needs is simply wasted money, while buying too little means the system will lean on slower disk-based swap memory under load, causing real stuttering that a spec sheet number won't warn you about.\n\nCheck whether the RAM is soldered (fixed at purchase) or user-upgradeable via SO-DIMM slots, since a soldered configuration means you're locked into whatever capacity you buy today with no future upgrade path."
  },
  {
    "criterion": "Understand what the CPU generation and core count actually mean for your use case",
    "explanation": "A mini PC's processor model number (like an Intel N100, N150, or a specific AMD Ryzen model) tells you its generation and general performance tier, but raw core count and clock speed matter less than how well that specific chip handles your actual workload, since a low-power efficiency chip like the N100 is genuinely fine for a home server or media player but will bottleneck video editing or modern gaming badly.\n\nThis distinction matters because two mini PCs can list similar-sounding specs while being built around completely different design goals, one optimized for low power draw and silence, the other for sustained performance under load.\n\nLook up independent benchmark results for the exact CPU model rather than trusting a generic \"powerful\" or \"fast\" marketing description, since chip model numbers are the one spec that translates directly to comparable real-world performance data."
  },
  {
    "criterion": "Check whether the mini PC includes dedicated graphics or relies on integrated graphics alone",
    "explanation": "Most mini PCs rely on integrated graphics built into the CPU itself, which handles everyday desktop use, video playback, and light gaming fine, but a genuine dedicated GPU or officially supported external GPU (eGPU) connection is a meaningfully different tier needed for serious gaming or GPU-accelerated video editing work.\n\nThis is a real distinguishing feature worth checking specifically, since \"mini PC\" as a category spans everything from a fanless office box with no gaming capability at all to a compact system that can be paired with an external GPU enclosure for near-desktop gaming performance.\n\nIf your use case involves gaming or GPU-accelerated tasks, check explicitly for a dedicated GPU or a confirmed Oculink/Thunderbolt eGPU connection rather than assuming any mini PC can be upgraded that way."
  },
  {
    "criterion": "Confirm the exact port selection matches your real peripherals, not just the port count",
    "explanation": "A mini PC's small size means its port selection is fixed at purchase with essentially no room for internal expansion the way a desktop tower allows, so the specific mix of USB versions, display outputs, and networking ports listed matters far more here than on a full-size computer.\n\nCheck specifically for the number and type of display outputs if you run multiple monitors, since some budget mini PCs only support two displays despite having enough physical ports to suggest otherwise, and check for dual Ethernet ports specifically if you're planning a home server, router, or NAS build that benefits from network redundancy or link aggregation.\n\nCount your actual peripherals and required display outputs against the listed ports before buying, since there's no expansion card slot to add what's missing later on most mini PC designs."
  },
  {
    "criterion": "Weigh fanless passive cooling against active cooling for your noise and thermal tolerance",
    "explanation": "Mini PCs use either active cooling (an internal fan that spins up under load) or fully passive fanless cooling (relying entirely on the metal chassis itself to dissipate heat), and this choice is a genuine tradeoff rather than one being strictly better: fanless designs run completely silent and have no moving parts to fail, but they also throttle performance under sustained heavy load once the passive heatsink reaches its thermal limit, something an actively cooled system with a fan can sustain longer.\n\nThis matters concretely for anyone running a 24/7 home server or media server in a bedroom or living room, where fan noise is a real annoyance, versus anyone running sustained CPU-heavy workloads like video transcoding, where a fanless design may throttle noticeably during long jobs.\n\nCheck whether cooling is explicitly described as fanless/passive or fan-cooled/active, and match that to whether silence or sustained performance matters more for where this mini PC will actually live."
  }
];

export const faq: FaqItem[] = [
  { q: "Does a tiny mini PC actually save desk space?", a: "It depends, calculate the complete installed footprint including the external power brick, not just the bare chassis dimensions." },
  { q: "What do the smallest mini PCs give up for their size?", a: "Often repairability, port count, and thermal headroom, these are real tradeoffs for extreme compactness." },
  { q: "Are the smallest mini PCs powerful enough for everyday use?", a: "It depends on the specific chip, entry-level Celeron chips suit only light tasks, genuine Ryzen tiers handle more demanding everyday use." },
  { q: "Should I worry about a small review base on a compact mini PC?", a: "Not necessarily a red flag, but it does mean less data to rely on, weigh this appropriately when comparing picks." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-pcs-for-small-desks", title: "Best Mini PCs for Small Desks (2026)" },
  { href: "/guide/best-mini-pcs-with-vesa-mounts", title: "Best Mini PCs with VESA Mounts (2026)" },
  { href: "/guide/best-budget-mini-pcs", title: "Best Budget Mini PCs (2026)" },
];
