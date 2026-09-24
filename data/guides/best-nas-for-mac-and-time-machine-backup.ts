export const guideSlug = "best-nas-for-mac-and-time-machine-backup";
export const guideTitle = "8 Best NAS for Mac and Time Machine Backup in 2026";
export const metaTitle = "Best NAS for Mac and Time Machine Backup in 2026 (SMB3-Ready Picks)";
export const metaDescription =
  "8 best NAS devices for Mac and Time Machine backup in 2026, verified for SMB3 support ahead of Apple's AFP removal. Compare quotas, RAM, and multi-Mac setup.";
export const mainKeyword = "nas for time machine backup";
export const introParagraphs = [
  "A NAS built for Time Machine has one requirement that overrides everything else right now: it must run Time Machine over SMB3 with Bonjour advertising, since Apple is removing AFP (Apple Filing Protocol) support starting in macOS 27, and any NAS still depending on AFP for Time Machine will simply stop working after that update. Past that non-negotiable, the differences come down to how well each NAS manages sparse bundle growth, multiple Macs on one box, and initial backup speed.",
  "Below are 8 NAS devices we evaluated on SMB3 readiness, per-Mac quota management, RAM for running Time Machine alongside other services, and true cost with drives included, ranging from a $199.99 diskless 2-bay for a single MacBook to a $619.99 five-core 4-bay built for a household running Time Machine on several Macs at once.",
];
export const lastUpdated = "2026-07-18";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/21VvdqtKHoL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "synology-ds223-time-machine",
    rank: 1,
    badge: "Best Time Machine Integration",
    name: "Synology DS223 Home & Office Backup Hub",
    price: "$284.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21VvdqtKHoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BRNBVTJK?tag=theofficejournal-20",
    description:
      "The Synology DS223 offers the most mature Time Machine setup workflow in this list, with DSM's Shared Folder wizard including a dedicated Time Machine toggle that configures SMB3 and Bonjour advertising automatically. Setting a per-Mac backup quota is a built-in option in the same wizard rather than a separate manual step.\n\nAs a 2-bay diskless unit, it needs its own drives and RAID 1 configured before it holds real redundancy for your backup history, and 2024+ DSM firmware can flag non-Synology drives with a compatibility warning even though they still work. For a household with 2-3 Macs wanting the smoothest Time Machine setup experience, it's the strongest overall pick.\n\nPer-Mac quota built directly into shared folder creation. That's a real strength, but weigh it against the flip side: diskless, needs 2 drives purchased separately.",
    specs: [
      "2-bay diskless NAS",
      "Built-in Time Machine shared folder wizard (SMB3 + Bonjour)",
      "Per-Mac quota setting in the same setup flow",
      "RAID 1 support",
      "Fixed RAM, not user-upgradeable",
    ],
    pros: [
      "Most streamlined Time Machine setup wizard in this list",
      "Per-Mac quota built directly into shared folder creation",
      "RAID 1 protects backup history from a single drive failure",
      "Best-documented Time Machine troubleshooting resources",
    ],
    cons: [
      "Diskless, needs 2 drives purchased separately",
      "2024+ DSM shows compatibility warnings for third-party drives",
      "Soldered RAM limits multitasking beyond backup duty",
    ],
    bestFor: "Households with 2-3 Macs who want the easiest Time Machine setup experience",
  },
  {
    id: "ugreen-dxp2800-time-machine",
    rank: 2,
    badge: "Best for Large Time Machine Archives",
    name: "UGREEN NAS DXP2800",
    price: "$369.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ccz6M7cCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D22HBFK1?tag=theofficejournal-20",
    description:
      "The DXP2800's content-creator-tier CPU handles a large, fast-growing Time Machine sparse bundle without slowing down, which matters if your Mac's internal drive is 1TB or larger and generates a sizable backup history within the first year. UGREEN OS supports SMB3 shares with Time Machine compatibility for macOS clients.\n\nIt costs more than the entry-level 2-bay picks here, so it makes the most sense for a MacBook Pro with a large internal SSD rather than a lightly used MacBook Air. Confirm SMB3 is active in the sharing settings before your first backup, since AFP is being phased out across the industry, not just on Synology.\n\nWorth calling out specifically: snapshot versioning adds protection beyond Time Machine alone. The catch is priciest 2-bay pick in this list.",
    specs: [
      "2-bay NAS, content-creator tier hardware",
      "SMB3-based Time Machine share support",
      "Snapshot-based versioning",
      "Higher-performance CPU for large sparse bundles",
      "UGREEN OS app ecosystem",
    ],
    pros: [
      "Strong CPU headroom for large, fast-growing backup archives",
      "Snapshot versioning adds protection beyond Time Machine alone",
      "SMB3 support keeps it compatible as AFP is phased out",
      "Handles concurrent backup plus other services well",
    ],
    cons: [
      "Priciest 2-bay pick in this list",
      "Overkill for a single lightly used MacBook",
      "Time Machine setup is less turnkey than Synology's dedicated wizard",
    ],
    bestFor: "MacBook Pro owners with large internal drives generating sizable backup archives",
  },
  {
    id: "ugreen-dh2300-time-machine",
    rank: 3,
    badge: "Best Budget Pick",
    name: "UGREEN NAS DH2300",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ACKzpdVoL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FNWHSPXF?tag=theofficejournal-20",
    description:
      "The DH2300 is the cheapest diskless 2-bay in this list while still supporting up to 64TB total capacity, giving a single-Mac household room to grow the Time Machine archive over several years without swapping the enclosure. It supports SMB3 shares for Time Machine compatibility through UGREEN's standard OS tools. Its entry-level CPU and RAM keep it best suited to Time Machine as its primary job rather than layering on Plex or surveillance alongside it. For one Mac's automatic backup on a budget, it covers everything Time Machine actually needs. Supports high total capacity for future backup growth. Set against that, entry-level CPU limits running multiple simultaneous services. Both matter when comparing it to the other picks here.",
    specs: [
      "2-bay diskless NAS",
      "Up to 64TB total supported capacity",
      "SMB3 Time Machine share support",
      "Entry-level CPU and RAM tier",
      "Budget-friendly diskless enclosure",
    ],
    pros: [
      "Cheapest diskless 2-bay in this list",
      "Supports high total capacity for future backup growth",
      "Simple setup focused on Time Machine",
      "Good starting point for a single-Mac household",
    ],
    cons: [
      "Entry-level CPU limits running multiple simultaneous services",
      "Diskless, needs drives purchased separately",
      "Time Machine SMB3 setup requires more manual configuration than Synology's wizard",
    ],
    bestFor: "Single-Mac households who want Time Machine backup on a tight budget",
  },
  {
    id: "qnap-ts264-8g-time-machine",
    rank: 4,
    badge: "Best RAM for Multi-Mac Households",
    name: "QNAP TS-264-8G-US 2-Bay Desktop NAS",
    price: "$489.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21+Y7Nr2xAL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTWWJK9V?tag=theofficejournal-20",
    description:
      "The TS-264 ships with 8GB of RAM, more than any other 2-bay in this list, which matters when you're running separate Time Machine shared folders for multiple Macs at once, each with its own quota and sparse bundle growing independently. QNAP's QTS handles SMB3 Time Machine shares cleanly for each configured Mac. It costs more than double most 2-bay picks here, which makes sense mainly if you have 2 or more Macs backing up simultaneously and want headroom so neither backup slows the other down. For a single Mac, a cheaper pick in this list does the same job for less. A genuine advantage here is that 2.5GbE speeds up first-time full backups on a matching network. The tradeoff is most expensive 2-bay pick in this list.",
    specs: [
      "2-bay desktop NAS",
      "8GB RAM (highest in this list for a 2-bay)",
      "2.5GbE networking",
      "SMB3 Time Machine shares, multiple Macs supported",
      "QNAP QTS with full app store",
    ],
    pros: [
      "8GB RAM handles multiple simultaneous Time Machine backups smoothly",
      "2.5GbE speeds up first-time full backups on a matching network",
      "Full QNAP app ecosystem for future expansion",
      "Each Mac gets its own independently managed shared folder",
    ],
    cons: [
      "Most expensive 2-bay pick in this list",
      "Overkill for a single Mac's backup needs",
      "Diskless, drives add to total cost",
    ],
    bestFor: "Households with 2+ Macs backing up to Time Machine at the same time",
  },
  {
    id: "qnap-ts216g-time-machine",
    rank: 5,
    badge: "Best for Faster First Backup",
    name: "QNAP TS-216G-US 2-Bay 2.5GbE Desktop NAS",
    price: "$299.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/21lrHwmtuBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GN3YJN2F?tag=theofficejournal-20",
    description:
      "The TS-216G's 2.5GbE port meaningfully shortens the first full Time Machine backup, which can otherwise take 8-24 hours over standard gigabit for a 512GB Mac depending on your router. If you have or plan to add a 2.5GbE-capable router or switch, that first backup finishes noticeably faster here than on the gigabit-only picks in this list.\n\nWithout a matching 2.5GbE network, it performs like any standard gigabit 2-bay NAS, so the port only pays off if the rest of your network supports it. Either way, running that first backup over Ethernet rather than Wi-Fi is worth doing regardless of which NAS you choose.\n\nQNAP's app store adds flexibility beyond pure backup. That's a real strength, but weigh it against the flip side: 2.5GbE benefit requires a matching router or switch, an extra cost.",
    specs: [
      "2-bay desktop NAS",
      "2.5GbE network port",
      "SMB3 Time Machine share support",
      "QNAP QTS operating system",
      "Standard 2-bay RAID support",
    ],
    pros: [
      "2.5GbE meaningfully speeds up the first full Time Machine backup",
      "QNAP's app store adds flexibility beyond pure backup",
      "Reasonable price for a 2.5GbE-equipped 2-bay",
      "Solid choice for a MacBook with a large first backup",
    ],
    cons: [
      "2.5GbE benefit requires a matching router or switch, an extra cost",
      "On a standard gigabit network, speed matches non-2.5GbE picks",
      "Diskless, drives sold separately",
    ],
    bestFor: "Buyers with a 2.5GbE network who want the fastest possible first Time Machine backup",
  },
  {
    id: "asustor-drivestor2-time-machine",
    rank: 6,
    badge: "Best Entry-Level Value",
    name: "Asustor Drivestor 2 Gen 2 AS1202T",
    price: "$199.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/319qh9SJhIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FTFSGBB1?tag=theofficejournal-20",
    description:
      "The Drivestor 2 Gen 2 pairs a quad-core 1.7GHz CPU with 2.5GbE networking at the same price as the UGREEN DH2300, giving Mac buyers a faster network port for the first backup without paying more. ADM OS supports SMB3-based Time Machine shares for macOS clients out of the box. Its 1GB of DDR4 RAM is on the lighter side, which is fine for Time Machine running on its own schedule but leaves little headroom for other always-on apps at the same time. As a first NAS focused on Time Machine specifically, it's a well-balanced budget option. Worth calling out specifically: quad-core CPU handles Time Machine's sparse bundle writes smoothly. The catch is 1GB RAM limits running much beyond Time Machine and light file sharing.",
    specs: [
      "2-bay NAS, quad-core 1.7GHz CPU",
      "2.5GbE networking",
      "1GB DDR4 RAM",
      "ADM OS with SMB3 Time Machine share support",
      "4K media server support",
    ],
    pros: [
      "2.5GbE networking at entry-level pricing",
      "Quad-core CPU handles Time Machine's sparse bundle writes smoothly",
      "SMB3 support built in for macOS compatibility",
      "Good value against similarly priced 2-bay options",
    ],
    cons: [
      "1GB RAM limits running much beyond Time Machine and light file sharing",
      "Smaller app ecosystem than Synology or QNAP",
      "Diskless, drives sold separately",
    ],
    bestFor: "First-time NAS buyers who want 2.5GbE speed for Time Machine without paying more",
  },
  {
    id: "terramaster-f2-425-time-machine",
    rank: 7,
    badge: "Best CPU for Concurrent Services",
    name: "TERRAMASTER F2-425",
    price: "$239.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31ejB5cFDGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FHVZ53RN?tag=theofficejournal-20",
    description:
      "The F2-425's Intel x86 quad-core CPU and 4GB of RAM give it more headroom than the ARM-based budget picks here, so Time Machine can run in the background while the NAS also handles file sharing or a light media app without either job bogging down. It includes 2.5GbE networking and supports SMB3 Time Machine shares.\n\nTERRAMASTER's TOS software covers standard Time Machine setup, though its app ecosystem and community documentation are smaller than Synology's or QNAP's. For buyers who want Intel-class CPU headroom without paying 4-bay prices, it's a solid middle-tier choice.\n\n2.5GbE networking included. Set against that, smaller software ecosystem than Synology or QNAP. Both matter when comparing it to the other picks here.",
    specs: [
      "2-bay NAS, Intel x86 quad-core CPU",
      "4GB RAM",
      "2.5GbE LAN",
      "SMB3 Time Machine share support",
      "Diskless enclosure",
    ],
    pros: [
      "Intel x86 CPU and 4GB RAM outclass ARM-based budget rivals",
      "2.5GbE networking included",
      "Handles Time Machine plus light extra services comfortably",
      "Competitive price for the hardware tier",
    ],
    cons: [
      "Smaller software ecosystem than Synology or QNAP",
      "Diskless, drives sold separately",
      "Less brand-name community support for Time Machine troubleshooting",
    ],
    bestFor: "Buyers who want Intel-class CPU headroom for Time Machine plus other light services",
  },
  {
    id: "ugreen-dxp4800-plus-time-machine",
    rank: 8,
    badge: "Best for Multiple Macs",
    name: "UGREEN NAS DXP4800 Plus",
    price: "$619.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31vNev8kUwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D22JRHZB?tag=theofficejournal-20",
    description:
      "The DXP4800 Plus is the only 4-bay in this list, built around an Intel Pentium Gold 8505 5-core CPU that comfortably runs Time Machine for several Macs at once, each with its own dedicated shared folder and quota, without one Mac's backup slowing another's. Four bays also allow RAID configurations with better usable-capacity ratios than any 2-bay here.\n\nIt is the most expensive pick in this list before drives are factored in, and 4 matching drives add meaningful cost on top of the enclosure. For a household running Time Machine on 3 or more Macs, the extra bays and CPU headroom are what justify the price.\n\nA genuine advantage here is that 4 bays allow RAID 5/6/10 for better redundancy than a 2-bay. The tradeoff is most expensive enclosure in this list.",
    specs: [
      "4-bay diskless NAS",
      "Intel Pentium Gold 8505 5-core CPU",
      "Supports RAID 5/6/10 configurations",
      "Handles multiple simultaneous Time Machine shares",
      "Highest total capacity ceiling in this list",
    ],
    pros: [
      "5-core Intel CPU handles multiple simultaneous Time Machine backups easily",
      "4 bays allow RAID 5/6/10 for better redundancy than a 2-bay",
      "Highest total capacity ceiling in this list",
      "Room to add other services without impacting backup performance",
    ],
    cons: [
      "Most expensive enclosure in this list",
      "Needs 4 matching drives, a significant added cost",
      "More setup complexity than a simple 2-bay for a single Mac",
    ],
    bestFor: "Households running Time Machine on 3+ Macs who want RAID flexibility",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "SMB3 and Bonjour readiness",
    description: "Verified each platform configures Time Machine over SMB3 with Bonjour/mDNS advertising rather than legacy AFP, since AFP support is being removed from macOS.",
  },
  {
    title: "Per-Mac quota and multi-Mac handling",
    description: "Checked how easily each NAS sets a backup quota per Mac and whether multiple Macs can each get their own isolated Time Machine shared folder.",
  },
  {
    title: "RAM headroom for sparse bundle growth",
    description: "Weighed RAM against the ability to run Time Machine's growing sparse bundle alongside other always-on NAS services without slowdown.",
  },
  {
    title: "Network speed for first backup duration",
    description: "Compared standard gigabit against 2.5GbE ports, since network speed is the biggest factor in how long a first full Time Machine backup takes.",
  },
  {
    title: "True total cost including drives",
    description: "Factored diskless enclosure price against the real drive cost needed to make each pick fully operational for Time Machine, not just the sticker price.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Remember every listed NAS here is diskless, budget drives separately",
    "explanation": "The price shown for a NAS enclosure covers the hardware chassis, CPU, and RAM only, not the actual storage drives, NAS-grade drives built for 24/7 operation like Seagate IronWolf or WD Red still need to be budgeted on top, often adding $80 to $200 or more per bay depending on capacity and drive type.\n\nThis matters because comparing NAS units purely by enclosure price without factoring in drive cost gives a misleading picture of the real total investment, a cheaper enclosure with more bays to fill can end up costing more overall than a pricier enclosure with fewer bays.\n\nCheck whether a listing is diskless or ships with drives included, and add realistic per-bay drive costs to the enclosure price before comparing total cost across options."
  },
  {
    "criterion": "Weigh CPU class and RAM over bay count for real day-to-day performance",
    "explanation": "Bay count determines maximum storage capacity, but CPU architecture (Intel, AMD, or ARM) and RAM amount determine how well the NAS actually handles real workloads, running apps, transcoding media on the fly, or serving multiple simultaneous users, and a higher bay count with a weak CPU can bottleneck performance regardless of how much raw storage it holds.\n\nThis matters more the more the NAS will do beyond simple file storage, like Plex transcoding or running multiple docker containers, less if it's purely a basic backup target.\n\nCheck the specific CPU model and RAM amount (and whether RAM is upgradeable) rather than choosing primarily by bay count."
  },
  {
    "criterion": "Understand RAID as a rebuild-time safety net, not a substitute for real backup",
    "explanation": "RAID configurations protect against a single drive failure by letting the array rebuild from redundant data, but RAID is not a backup, it does nothing to protect against accidental deletion, ransomware, theft, fire, or a controller failure that affects the whole array at once.\n\nThis distinction matters because treating RAID redundancy as sufficient backup protection is a common and genuinely risky misunderstanding, a real backup strategy needs a copy of critical data stored somewhere physically separate from the NAS itself.\n\nCheck what RAID level a given NAS supports, and separately plan an actual backup strategy, ideally following a 3-2-1 approach, rather than relying on RAID redundancy alone."
  },
  {
    "criterion": "Match drive type (HDD vs SSD/NVMe) to your actual access pattern",
    "explanation": "Traditional hard drives offer the lowest cost per terabyte for bulk storage like media libraries or backups, while SSD or NVMe-based NAS storage costs significantly more per terabyte but delivers much faster random access speeds, genuinely useful for frequently-accessed files, active project work, or serving as a fast cache tier.\n\nThis matters directly based on how you'll actually use the storage, a media library accessed sequentially benefits little from SSD speed, while an active working file share benefits considerably.\n\nCheck whether the NAS supports the drive type you need, and weigh the real cost-per-terabyte difference against how much you'll actually benefit from faster random access."
  },
  {
    "criterion": "Consider noise level if the NAS will run continuously in a shared living or office space",
    "explanation": "A NAS that runs 24/7 generates continuous fan and drive noise, and that noise profile varies meaningfully between models, some use larger, slower-spinning fans that stay genuinely quiet, while others rely on smaller, faster fans that produce a persistent whine noticeable in a quiet room.\n\nThis matters a great deal if the NAS will sit in a bedroom, living room, or shared home office rather than a dedicated closet or basement out of earshot.\n\nCheck reviews specifically for real-world noise level mentions during continuous operation, not just idle noise, since drive activity and fan speed both increase under load."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "Synology DS223 Home & Office Backup Hub"
        ],
        [
          "Largest review base, strongest reliability signal",
          "Synology DS223 Home & Office Backup Hub"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $200",
          "UGREEN NAS DH2300"
        ],
        [
          "Up to $620",
          "UGREEN NAS DXP4800 Plus"
        ]
      ]
    }
  },
  {
    "subheading": "Diskless Enclosure vs Drives Included",
    "cards": [
      {
        "label": "Diskless enclosure",
        "text": "Lets you choose your own NAS-grade drives and capacity, but budget $80-200+ per bay separately. In this comparison: Synology DS223 Home & Office Backup Hub, UGREEN NAS DH2300, TERRAMASTER F2, UGREEN NAS DXP4800 Plus."
      },
      {
        "label": "Drives included",
        "text": "Ready to use out of the box, simpler for a first NAS purchase. In this comparison: UGREEN NAS DXP2800, QNAP TS, QNAP TS, Asustor Drivestor 2 Gen 2 AS1202T."
      }
    ],
    "note": "Default to diskless if you want control over drive choice and capacity, drives-included for the simplest setup."
  },
  {
    "subheading": "By Drive Type Support",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "SSD/NVMe for fast random access",
          "UGREEN NAS DXP2800"
        ],
        [
          "HDD for bulk storage is enough",
          "Synology DS223 Home & Office Backup Hub"
        ]
      ]
    }
  },
  {
    "subheading": "For Media Streaming or Plex Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A CPU capable of hardware transcoding and enough RAM to handle multiple simultaneous streams, not just total bay count."
      },
      {
        "label": "In this comparison",
        "text": "Synology DS223 Home & Office Backup Hub is worth checking against its listed CPU and RAM before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need real multi-user performance, media transcoding, or business-critical reliability, where UGREEN NAS DXP4800 Plus's CPU and RAM give real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just need simple backup storage for one or two users, where UGREEN NAS DH2300 covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "Will my Time Machine backups stop working because AFP is being removed?",
    a: "If your NAS is still configured to use AFP, yes, backups will silently stop once your Mac updates past macOS 27. Every NAS in this list supports SMB3 with Bonjour/mDNS advertising, which is the protocol combination Apple is standardizing on, but confirm SMB3 is actually enabled in your sharing settings rather than assuming it by default.",
  },
  {
    q: "Why does my Time Machine backup keep growing and filling up the NAS?",
    a: "Time Machine stores backups in a sparse bundle disk image that expands automatically over time, and without a manually set quota it will keep growing until it consumes all available NAS space. Set a quota in the NAS admin panel during initial setup, a common recommendation is roughly 1.5x your Mac's internal storage capacity.",
  },
  {
    q: "Can multiple Macs back up to the same NAS with Time Machine?",
    a: "Yes, but each Mac needs its own separate shared folder with its own quota. Using a single shared folder for more than one Mac's Time Machine backup will corrupt the backup history for both machines, so set up a dedicated folder per Mac even within the same household.",
  },
  {
    q: "How long does the first Time Machine backup take over a NAS?",
    a: "For a 512GB Mac, an initial full Time Machine backup over Wi-Fi can take 8-24 hours depending on your router, and considerably less over a wired Ethernet connection. Run the first backup wired if at all possible; incremental backups afterward are small enough to run comfortably over Wi-Fi.",
  },
  {
    q: "How do I know my Time Machine backup will actually restore if I need it?",
    a: "A backup can appear to complete successfully for months while quietly failing to produce a restorable image due to RAID errors or file corruption. Periodically, at least once a quarter, test an actual file or folder restore from the backup rather than relying on Time Machine's success indicator alone.",
  },
  {
    q: "Do drive compatibility warnings mean I bought the wrong drive?",
    a: "Not necessarily. Some 2024-and-newer Plus-tier NAS models show a compatibility warning in the admin panel for any drive that isn't the manufacturer's own branded line, even when a reputable third-party NAS drive like Seagate IronWolf or WD Red works fine. It's worth knowing before you buy so the warning doesn't seem like a hardware failure.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-nas-for-automatic-computer-backup", title: "Best NAS for Automatic Computer Backup (2026)" },
  { href: "/guide/best-nas-for-plex-media-servers", title: "Best NAS for Plex Media Servers (2026)" },
  { href: "/guide/best-nas-storage-for-home-office", title: "Best NAS Storage for Home Office (2026)" },
];
