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
    "q": "Does a 12-bay USB JBOD enclosure need a special controller card?",
    "a": "2 Gen 2 Type-C with no HBA or special controller required, unlike enterprise SAS shelves which do require a compatible HBA or RAID controller in the host server."
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

export const guideSlug = "best-12-bay-direct-attached-storage";

export const guideTitle = "5 Best 12-Bay Direct-Attached Storage";

export const heroImage = "https://m.media-amazon.com/images/I/218PLPWYmML._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "USB JBOD vs Enterprise SAS at 12 Bays",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "QNAP TL-R1200C-RP (USB, redundant 250W PSU)"
        ],
        [
          "",
          "HPE D3610 or Dell PowerVault MD2412 (requires HBA)"
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
  "12 bays appears in two very different product categories: enterprise SAS shelves requiring an HBA and rack infrastructure, and USB-connected rackmount JBOD enclosures that plug directly into a workstation or NAS with no SAS controller needed.",
  "We split these two architectures explicitly, since a 12-bay HPE D3610 SAS shelf and a 12-bay QNAP TL-R1200C-RP USB JBOD solve the same capacity problem through completely different host requirements and management models."
];

export const lastUpdated = "2026-08-14";

export const mainKeyword = "12-bay direct-attached storage";

export const metaDescription = "12-bay DAS spans enterprise SAS shelves and rackmount USB JBOD. We separated the two architectures before ranking.";

export const metaTitle = "Best 12-Bay Direct-Attached Storage";

export const products: GuideProduct[] = [
  {
    "id": "best-12-bay-direct-attached-storage-1",
    "rank": 1,
    "badge": "Best USB Rackmount JBOD",
    "name": "QNAP TL-R1200C-RP 12-Bay Rackmount JBOD Enclosure",
    "price": "$899.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/218PLPWYmML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086WCRH3C?tag=theofficejournal-20",
    "description": "2 Gen 2 Type-C port, backed by a 250W redundant power supply unit for real uptime protection against a single PSU failure.\n\nIt's built for storage expansion of QNAP NAS units, Windows computers, and servers, a rack-scale JBOD option that bridges the gap between desktop DAS enclosures and full enterprise SAS disk shelves.",
    "specs": [
      "12-bay rackmount, 250W redundant PSU",
      "10Gbps USB 3.2 Gen 2 Type-C",
      "3.5in SATA 6Gb/s"
    ],
    "pros": [
      "Redundant 250W PSU protects against single power-supply failure",
      "12-bay rackmount density bridges desktop DAS and enterprise SAS",
      "Single USB-C connection simplifies host cabling versus SAS HBA setups"
    ],
    "cons": [
      "USB connection, not multipath SAS, for genuine enterprise redundancy",
      "Requires rack space and 250W-class power infrastructure"
    ],
    "bestFor": "Buyers prioritizing 12-bay rackmount, 250w redundant psu"
  },
  {
    "id": "best-12-bay-direct-attached-storage-2",
    "rank": 2,
    "badge": "Best 8-Bay Desktop Alternative",
    "name": "QNAP TL-D810TC4-US 8-Bay Desktop DAS/JBOD Expansion",
    "price": "$799.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31tqzxU-VlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H3VYZDFH?tag=theofficejournal-20",
    "description": "5-inch SATA 6Gb/s drives, positioned as plug-and-play DAS expansion for QNAP NAS units as well as Windows, macOS, and Ubuntu/Linux workstations.\n\nThe free QNAP JBOD Manager utility (or QTS/QuTS hero's Storage & Snapshots app when attached to a QNAP NAS) monitors drive health and manages JBOD configurations, giving genuine software-level visibility that generic third-party enclosures lack.",
    "specs": [
      "8-bay desktop, up to 10Gbps",
      "QNAP JBOD Manager software support",
      "3.5in/2.5in SATA 6Gb/s"
    ],
    "pros": [
      "QNAP JBOD Manager gives real drive-health monitoring software",
      "Works across QNAP NAS, Windows, macOS, and Linux workstations",
      "Genuine QNAP build quality at 8-bay density"
    ],
    "cons": [
      "JBOD/DAS expansion only, not hardware RAID",
      "Best software experience requires a QNAP NAS host"
    ],
    "bestFor": "Buyers prioritizing 8-bay desktop, up to 10gbps"
  },
  {
    "id": "best-12-bay-direct-attached-storage-3",
    "rank": 3,
    "badge": "Best 4-Bay Alternative",
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
    "id": "best-12-bay-direct-attached-storage-4",
    "rank": 4,
    "badge": "Best RAID Alternative",
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
    "id": "best-12-bay-direct-attached-storage-5",
    "rank": 5,
    "badge": "Best RAID + ESATA Alternative",
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
    "id": "best-12-bay-direct-attached-storage-6",
    "rank": 6,
    "badge": "Budget Alternative",
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
    "id": "best-12-bay-direct-attached-storage-7",
    "rank": 7,
    "badge": "Best 6-Bay Alternative",
    "name": "TerraMaster D6-320 6-Bay USB DAS Enclosure (Diskless)",
    "price": "$239.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31ONkXRfq7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BZHSK29B?tag=theofficejournal-20",
    "description": "TerraMaster explicitly notes the D6-320 does not support RAID arrays, working only with individual disks. 2, Thunderbolt 3, and Thunderbolt 4 hosts.",
    "specs": [
      "6-bay, up to 132TB total",
      "1,030MB/s combined (6x HDD)",
      "No RAID, individual disks only"
    ],
    "pros": [
      "Broad host compatibility across USB and Thunderbolt generations",
      "Documented sustained throughput with all 6 bays populated",
      "Hot-swap without powering down the enclosure"
    ],
    "cons": [
      "No RAID function despite 6 bays",
      "Diskless, drives sold separately"
    ],
    "bestFor": "Buyers prioritizing 6-bay, up to 132tb total"
  },
  {
    "id": "best-12-bay-direct-attached-storage-8",
    "rank": 8,
    "badge": "Budget RAID Alternative",
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
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-8-bay-das-storage",
    "title": "6 Best 8-Bay DAS Storage Options"
  },
  {
    "href": "/guide/best-sas-das-storage",
    "title": "6 Best SAS DAS Storage Solutions"
  },
  {
    "href": "/guide/best-qnap-das-storage",
    "title": "4 Best QNAP DAS Storage Options"
  }
];
