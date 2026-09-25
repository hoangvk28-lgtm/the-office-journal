// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "DAS means direct host attachment, not RAID",
    "explanation": "USB, Thunderbolt, and enterprise SAS storage can all be DAS. The term describes how the storage connects to a host, not whether it has RAID, what drive type it uses, or how many bays it has."
  },
  {
    "criterion": "Bay count is not usable capacity",
    "explanation": "An 8-bay enclosure with 8x20TB drives does not give you 160TB of usable space in RAID 5 or RAID 6, parity drives eat real capacity. Calculate usable capacity under your intended RAID mode, not raw bay count times drive size."
  },
  {
    "criterion": "Hardware RAID and host software RAID are not interchangeable",
    "explanation": "Hardware/enclosure RAID keeps the array portable across hosts and survives an OS reinstall; host software RAID (or SoftRAID on Mac) ties the array to specific software but is often more flexible and doesn't depend on one controller chip surviving."
  },
  {
    "criterion": "The interface link rate is not your real transfer speed",
    "explanation": "A 10Gbps USB-C enclosure with 5 mechanical HDDs running simultaneously will bottleneck well below 10Gbps once you account for real sustained HDD throughput, typically 150-250MB/s per drive. Multi-drive aggregate speed matters more than the port's rated maximum."
  },
  {
    "criterion": "",
    "explanation": "RAID 1 or RAID 5 protects against a single drive failure, not against accidental deletion, ransomware, fire, or theft. Keep a genuine separate backup copy of anything irreplaceable, regardless of how much RAID redundancy your DAS provides."
  },
  {
    "criterion": "Diskless enclosures need drives budgeted separately",
    "explanation": "Most multi-bay DAS enclosures ship completely empty. Factor in 2-8 hard drives or SSDs at your target capacity before comparing the enclosure's sticker price against a similarly-priced preconfigured external drive."
  }
];

export const faq = [
  {
    "q": "How much usable capacity do I get from 4 drives in RAID 5?",
    "a": "RAID 5 across 4 equal-size drives gives you 3 drives' worth of usable capacity, the 4th is consumed by parity data that enables recovery from a single drive failure. Four 8TB drives in RAID 5 yields roughly 24TB usable, not 32TB."
  },
  {
    "q": "Does RAID replace the need for a separate backup?",
    "a": "RAID protects against a single drive's hardware failure, but it does not protect against accidental deletion, ransomware, fire, theft, or a controller failure that affects the whole array at once. Keep a genuine separate backup copy of anything you can't afford to lose."
  },
  {
    "q": "Do DAS enclosures come with drives included?",
    "a": "2 NVMe SSDs depending on the model. Budget for drive cost separately when comparing total price against a preconfigured external drive."
  },
  {
    "q": "Will any USB-C or Thunderbolt cable give me full DAS speed?",
    "a": "Cable quality and rated bandwidth matter as much as the port. A basic charging-only USB-C cable can bottleneck a 10Gbps or faster enclosure well below its rated speed. Use the cable included with the enclosure, or one explicitly rated for the matching USB or Thunderbolt generation."
  },
  {
    "q": "Can I add or remove drives from a DAS enclosure without powering it down?",
    "a": "Only if the specific enclosure documents hot-swap support, which most tool-free tray designs in this category do. Always check your specific product's hot-swap capability before removing a drive live, since not every budget enclosure supports it, especially some fixed-RAID-mode units."
  }
];

export const guideSlug = "best-4-bay-direct-attached-storage";

export const guideTitle = "8 Best 4-Bay Direct-Attached Storage";

export const heroImage = "https://m.media-amazon.com/images/I/41rmuqxnscL._SL500_.jpg";

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
          "Just want 4 independent bays",
          ""
        ],
        [
          "",
          "QNAP TR-004 or CENMATE RAID model"
        ],
        [
          "Offline drive cloning without a PC",
          ""
        ]
      ]
    }
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Verified whether each product is direct-attached storage (USB, Thunderbolt, or SAS to one host) and whether drives mount individually, in JBOD, or under real hardware RAID, rather than assuming any multi-bay box works the same way."
  },
  {
    "title": "",
    "description": "Checked the documented USB generation, Thunderbolt generation, or SAS link speed against real sustained throughput figures where manufacturers publish them, rather than repeating theoretical link-rate marketing numbers."
  },
  {
    "title": "",
    "description": "Distinguished hardware-controller RAID from host-software RAID from plain JBOD/individual-disk presentation, since these have very different failure, portability, and rebuild behavior."
  },
  {
    "title": "",
    "description": "Weighed tool-free tray design, hot-swap support, fan noise where documented, and daisy-chain or expansion options against the product's likely desk, closet, or rack environment."
  },
  {
    "title": "",
    "description": "Considered that most DAS enclosures ship diskless, factoring in drive cost, cables, and RAID software where relevant rather than judging price on the empty enclosure alone."
  }
];

export const introParagraphs = [
  "4 bays is arguably the sweet spot in DAS: enough capacity headroom for a real backup or media library without the size and cost of an 8-bay unit. Current products span everything from plain JBOD enclosures to genuine hardware RAID docks at this exact bay count.",
  "We counted usable drive bays, confirmed whether all 4 bays support the same drive type and speed, and separated hardware RAID from individual-disk JBOD before ranking, since this bay count spans both architectures."
];

export const lastUpdated = "2026-08-14";

export const mainKeyword = "4-bay direct-attached storage";

export const metaDescription = "4-bay is DAS's strongest capacity tier. We verified true usable bay count, drive type, and RAID/JBOD mode before ranking.";

export const metaTitle = "Best 4-Bay Direct-Attached Storage";

export const products: GuideProduct[] = [
  {
    "id": "best-4-bay-direct-attached-storage-1",
    "rank": 1,
    "badge": "Best Overall JBOD",
    "name": "Sabrent 4-Bay USB-C 10Gbps Hard Drive Enclosure (DS-SC4B)",
    "price": "$229.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rmuqxnscL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y3WDHLD?tag=theofficejournal-20",
    "description": "5-inch SATA bays gets a stable, independent connection up to 80TB total (4x20TB) over a single 10Gbps USB-C port.\n\nDrives ship empty and mount individually, JBOD-style, not hardware RAID. Tool-free trays, a locking key, a Kensington slot, and a 92mm active-cooling fan round out a build meant for 24/7 desk use, backed by a 1-year warranty extendable to 2 years.",
    "specs": [
      "4x 3.5in bays, 10Gbps USB-C",
      "Dedicated ASM1351 controller per bay",
      "JBOD only, no RAID"
    ],
    "pros": [
      "Independent controller per bay avoids one bad drive taking down the bus",
      "Tool-free trayless hot-swap with lockable bays",
      "92mm active cooling for sustained 24/7 use"
    ],
    "cons": [
      "No RAID, individual disks only",
      "Drives not included"
    ],
    "bestFor": "buyers prioritizing 4x 3.5in bays, 10gbps usb-c"
  },
  {
    "id": "best-4-bay-direct-attached-storage-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "TerraMaster D4-320 4-Bay USB DAS Enclosure (Diskless)",
    "price": "$151.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21z94zz6wGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CTTL9R7Z?tag=theofficejournal-20",
    "description": "2 Gen 2's 10Gbps link, and supports drives up to 30TB each for 120TB total.\n\nIt's explicitly 4 individual disks with no RAID function, using TerraMaster's tool-free Push-Lock tray design and hot-swap support. An intelligent temperature-controlled fan plus sound-absorbing panels cut noise up to 50% versus the prior generation, dropping under 21dB(A) in standby.",
    "specs": [
      "4-bay, up to 1,016MB/s combined",
      "USB 3.2 Gen 2, 30TB/drive max",
      "No RAID, individual disks only"
    ],
    "pros": [
      "Documented real-world throughput, not just link-rate marketing",
      "Under 21dB(A) standby noise is quiet",
      "Push-Lock tray design prevents accidental drive ejection"
    ],
    "cons": [
      "No RAID function despite 4 bays",
      "Diskless, drives sold separately"
    ],
    "bestFor": "Buyers prioritizing 4-bay, up to 1,016mb/s combined"
  },
  {
    "id": "best-4-bay-direct-attached-storage-3",
    "rank": 3,
    "badge": "Best Hardware RAID",
    "name": "QNAP TR-004 4-Bay USB-C DAS with Hardware RAID (Diskless)",
    "price": "$219.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310l7keevAS._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07K4RC7X9?tag=theofficejournal-20",
    "description": "5-inch SATA bays, connected via USB Type-C for use as either standalone external storage or QNAP NAS backup expansion.\n\nQNAP is explicit about a real limitation: the TR-004's storage pool cannot be combined into a connected NAS's own pool, and drives can only migrate between TR-004 units, not to a different NAS model, a genuine gotcha worth knowing before buying it purely as NAS expansion.",
    "specs": [
      "4x 3.5in bays, hardware RAID 0/1/5/JBOD",
      "USB Type-C",
      "Lockable drive bays"
    ],
    "pros": [
      "True hardware RAID controller, not host software RAID",
      "Doubles as standalone DAS or NAS backup expansion",
      "Lockable bays for physical security"
    ],
    "cons": [
      "Storage pool cannot merge into a connected NAS's own pool",
      "Drive migration limited to other TR-004 units only"
    ],
    "bestFor": "5in bays, hardware raid 0/1/5/jbod"
  },
  {
    "id": "best-4-bay-direct-attached-storage-4",
    "rank": 4,
    "badge": "Budget Pick",
    "name": "CENMATE Aluminum 4-Bay Hard Drive Enclosure (5Gbps)",
    "price": "$119.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41VaMoSo3VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DD3GSSCX?tag=theofficejournal-20",
    "description": "0 at up to 5Gbps under UASP, with hot-swap and tool-free tray installation.\n\nThe company is upfront that its 2-inch cooling fan runs around 40-50 decibels, a real noise consideration for a desk setup, and this is explicitly a DAS unit with no RAID or NAS function, drives mount individually with a stable DC 12V power adapter.",
    "specs": [
      "4-bay, 2.5/3.5in, up to 80TB total",
      "USB A/C 3.0, 5Gbps under UASP",
      "No RAID/NAS, individual disks"
    ],
    "pros": [
      "Hot-swap and tool-free tray design",
      "Stable dedicated DC power adapter for multi-drive reliability",
      "Honest fan noise disclosure (40-50dB) upfront"
    ],
    "cons": [
      "Fan noise may bother sound-sensitive desk setups",
      "No RAID despite 4 bays"
    ],
    "bestFor": "5in, up to 80tb total"
  },
  {
    "id": "best-4-bay-direct-attached-storage-5",
    "rank": 5,
    "badge": "Best with Display Output",
    "name": "WAVLINK 4-Bay Hard Drive Enclosure with 4K HDMI (128TB)",
    "price": "$121.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uunv0w7TL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYCJJQFL?tag=theofficejournal-20",
    "description": "2 Type-C port for daisy-chaining, on top of 4 SATA bays supporting up to 128TB total (4x32TB) over a 10Gbps USB-C connection.\n\nDual built-in fans activate automatically at 48°C, and each of the 4 bays has an independent ON/OFF power switch for hot-swapping without powering down the whole unit. WAVLINK includes phone and email support with a 12-month warranty.",
    "specs": [
      "4-bay, up to 128TB, 4K@60Hz HDMI",
      "10Gbps USB-C, daisy-chain port",
      "Per-bay independent power switches"
    ],
    "pros": [
      "4K HDMI output doubles as a display dock, not just storage",
      "Per-bay power switches enable true hot-swap flexibility",
      "Dual auto-activating fans at 48°C threshold"
    ],
    "cons": [
      "HDMI requires host USB-C port with video output support",
      "2.5in drives need a separate mounting bracket, not included"
    ],
    "bestFor": "Buyers prioritizing 4-bay, up to 128tb, 4k@60hz hdmi"
  },
  {
    "id": "best-4-bay-direct-attached-storage-6",
    "rank": 6,
    "badge": "Best RAID + eSATA",
    "name": "CENMATE Aluminum 4-Bay Hardware RAID Enclosure (eSATA+USB)",
    "price": "$129.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41kWVoXPWgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CXPD9J6X?tag=theofficejournal-20",
    "description": "Unlike CENMATE's non-RAID 4-bay model, this version adds a genuine hardware RAID controller (JMS567+JMB393 chip) supporting 8 modes: RAID 0/1/3/5/10, CLONE, LARGE, and NORMAL, switched via a physical toggle and reset-button sequence rather than software.\n\n0 plus an ESATA output for an alternate connection path, at up to 5Gbps. CENMATE notes macOS has no RAID software support for this unit and warns that switching RAID modes can cause data loss, back up first.",
    "specs": [
      "4-bay hardware RAID, 8 modes, up to 80TB",
      "USB 3.0 + ESATA, 5Gbps",
      "Physical DIP-switch RAID mode selection"
    ],
    "pros": [
      "Genuine hardware RAID controller with 8 selectable modes",
      "Dual USB/ESATA connectivity options",
      "150W-class stable power design for multi-drive RAID"
    ],
    "cons": [
      "No macOS RAID software support",
      "RAID mode switching risks data loss if not backed up first"
    ],
    "bestFor": "Buyers prioritizing 4-bay hardware raid, 8 modes, up to 80tb"
  },
  {
    "id": "best-4-bay-direct-attached-storage-7",
    "rank": 7,
    "badge": "Best Budget RAID",
    "name": "ORICO 4-Bay RAID Hard Drive Enclosure (88TB, Aluminum)",
    "price": "$179.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51wHCBQoDhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4QJZL6X?tag=theofficejournal-20",
    "description": "0 interface matched to SATA 6Gbps drives.\n\nA built-in 150W power supply avoids a bulky external adapter even with 4 high-consumption mechanical drives running simultaneously, and an 80mm silent cooling fan with front/rear vents handles sustained heat load. A tray-less design with an independent safety lock secures drives against accidental ejection.",
    "specs": [
      "4-bay RAID, 8 modes, up to 88TB",
      "235MB/s, built-in 150W power supply",
      "80mm cooling fan, tray-less lock design"
    ],
    "pros": [
      "Built-in 150W power supply eliminates a bulky external brick",
      "8 RAID modes cover backup, capacity, and redundancy use cases",
      "Independent safety lock prevents accidental drive ejection"
    ],
    "cons": [
      "235MB/s ceiling is modest for a RAID-capable 4-bay unit",
      "22TB per-drive limit caps total capacity below newer competitors"
    ],
    "bestFor": "Buyers prioritizing 4-bay raid, 8 modes, up to 88tb"
  },
  {
    "id": "best-4-bay-direct-attached-storage-8",
    "rank": 8,
    "badge": "Best with Offline Clone",
    "name": "Sabrent 4-Bay USB 3.0 Hard Drive Docking Station with Clone (DS-U3B4)",
    "price": "Check price",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/310Pc7YY3gL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07H11KXCL?tag=theofficejournal-20",
    "description": "5-inch SATA drives with a useful offline drive-to-drive Clone function that works without a connected computer.\n\nLED indicators display clone progress in real time during the standalone copy process, and trayless drive insertion keeps setup tool-free when the dock is powered off, with an external power adapter for stable multi-drive operation.",
    "specs": [
      "4-bay, USB 3.0, 5Gbps",
      "Offline drive-to-drive Clone function",
      "Trayless tool-free insertion"
    ],
    "pros": [
      "Offline Clone function works without a connected computer, useful for drive migration",
      "LED progress indicators during standalone cloning",
      "Trayless design for quick tool-free swaps"
    ],
    "cons": [
      "5Gbps USB 3.0 ceiling, not the newer 10Gbps tier",
      "No RAID, individual disks and cloning only"
    ],
    "bestFor": "buyers prioritizing 4-bay, usb 3.0, 5gbps"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-4-bay-das-storage",
    "title": "8 Best 4-Bay DAS Storage Options"
  },
  {
    "href": "/guide/best-8-bay-direct-attached-storage",
    "title": "6 Best 8-Bay Direct-Attached Storage"
  },
  {
    "href": "/guide/best-raid-direct-attached-storage",
    "title": "8 Best RAID Direct-Attached Storage"
  }
];
