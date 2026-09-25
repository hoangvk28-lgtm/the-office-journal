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
    "q": "Is every multi-bay enclosure an array?",
    "a": "Many multi-bay DAS enclosures present each drive independently (JBOD), with no RAID redundancy at all. A genuine array requires a hardware RAID controller or host software RAID actively managing the drives as one logical unit."
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

export const guideSlug = "best-direct-attached-storage-arrays";

export const guideTitle = "The Best Direct-Attached Storage Arrays for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41OiiopY9QL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "RAID-Managed Arrays vs Plain Multi-Bay",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "QNAP TR-004 or ORICO RAID 4/5-bay"
        ],
        [
          "",
          "Sabrent DS-SC4B/DS-SC5B or TerraMaster D-series"
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
  "Array implies genuine multi-drive protection, not just a box with several bays. We retargeted this list to enclosures with real RAID capability, where drive redundancy and rebuild behavior are documented, rather than plain JBOD enclosures that just happen to hold multiple drives.",
  "We checked whether RAID processing lives in the enclosure's own controller, in host software, or in a separate management app, since that distinction determines whether the array is portable to another host if the original controller ever fails."
];

export const lastUpdated = "2026-08-14";

export const mainKeyword = "direct-attached storage arrays";

export const metaDescription = "How 8 direct-attached storage arrays compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Direct-Attached Storage Arrays for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-direct-attached-storage-arrays-1",
    "rank": 1,
    "badge": "Best Non-RAID Multi-Bay",
    "name": "Sabrent 5-Bay USB-C 10Gbps Hard Drive Enclosure (DS-SC5B)",
    "price": "$279.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41OiiopY9QL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y4F5SCK?tag=theofficejournal-20",
    "description": "5-inch bays over a 10Gbps USB-C connection, with a rear USB-C port for daisy-chaining a second dock.\n\nA 120mm PWM temperature-controlled fan only ramps up as drives warm, keeping it quieter during light use while protecting drives during heavy transfers. Like the 4-bay model, it's JBOD-only DAS, not RAID and not a NAS, with a 1-year warranty extendable to 2 years.",
    "specs": [
      "5x 3.5in bays, 10Gbps USB-C",
      "Dedicated ASM1351 controller per bay",
      "Daisy-chain via rear USB-C port"
    ],
    "pros": [
      "PWM fan only ramps up under load, quieter at idle",
      "Daisy-chain port for expanding beyond one dock",
      "Internal auto-switching power supply, no external brick"
    ],
    "cons": [
      "No RAID, individual disks only",
      "Drives not included"
    ],
    "bestFor": "buyers prioritizing 5x 3.5in bays, 10gbps usb-c"
  },
  {
    "id": "best-direct-attached-storage-arrays-2",
    "rank": 2,
    "badge": "Best JBOD Alternative",
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
    "id": "best-direct-attached-storage-arrays-3",
    "rank": 3,
    "badge": "Best High-Capacity JBOD",
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
    "id": "best-direct-attached-storage-arrays-4",
    "rank": 4,
    "badge": "Best Hybrid Array",
    "name": "TerraMaster D8 Hybrid HDD+NVMe Enclosure (Diskless)",
    "price": "$224.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31+y9KLvYdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3YZSK95?tag=theofficejournal-20",
    "description": "2 2280 NVMe slots, for up to 152TB total (30TB x 4 HDD bays + 8TB x 4 NVMe slots), letting hot NVMe-speed data and cold HDD-capacity data live in the same enclosure.\n\n2 SSD reaches up to 980MB/s. TerraMaster's TPC Backupper software schedules backups, and power-loss recovery auto-restarts the unit after an outage for unattended operation.",
    "specs": [
      "4 HDD + 4 NVMe bays, up to 152TB",
      "Up to 980MB/s (NVMe)",
      "10Gbps USB 3.2 Gen 2"
    ],
    "pros": [
      "Hybrid HDD+NVMe design lets hot and cold data coexist in one box",
      "Power-loss recovery enables unattended server-like operation",
      "TPC Backupper software included for scheduled backups"
    ],
    "cons": [
      "10Gbps USB link caps aggregate throughput well below NVMe's raw potential",
      "Diskless, both HDDs and NVMe SSDs sold separately"
    ],
    "bestFor": "Buyers prioritizing 4 hdd + 4 nvme bays, up to 152tb"
  },
  {
    "id": "best-direct-attached-storage-arrays-5",
    "rank": 5,
    "badge": "Best Hardware RAID Array",
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
    "id": "best-direct-attached-storage-arrays-6",
    "rank": 6,
    "badge": "Best 4-Bay RAID Array",
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
    "id": "best-direct-attached-storage-arrays-7",
    "rank": 7,
    "badge": "Best 5-Bay RAID Array",
    "name": "ORICO RAID 5-Bay HDD Enclosure (110TB, Aluminum)",
    "price": "$199.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51QZ11oOYXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDX8PVH7?tag=theofficejournal-20",
    "description": "0 transfer speed and a built-in 150W power supply for stable multi-disk operation.\n\nAn 80mm silent cooling fan with front and rear vents handles the added thermal load of a fifth drive, and the same bracket-free, independently-locked tray design carries over from ORICO's smaller RAID enclosures.",
    "specs": [
      "5-bay RAID, 8 modes, up to 110TB",
      "235MB/s, built-in 150W power supply",
      "80mm cooling fan"
    ],
    "pros": [
      "8 RAID modes at a larger 5-bay capacity tier",
      "Built-in 150W power supply avoids a bulky adapter",
      "Independent locking mechanism per the bracket-free tray design"
    ],
    "cons": [
      "235MB/s ceiling limits sustained multi-drive throughput",
      "Back up data before switching RAID modes, per ORICO's own guidance"
    ],
    "bestFor": "Buyers prioritizing 5-bay raid, 8 modes, up to 110tb"
  },
  {
    "id": "best-direct-attached-storage-arrays-8",
    "rank": 8,
    "badge": "Budget RAID Array",
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
    "href": "/guide/best-raid-direct-attached-storage",
    "title": "8 Best RAID Direct-Attached Storage"
  },
  {
    "href": "/guide/best-direct-attached-storage-with-raid",
    "title": "8 Best Direct-Attached Storage With RAID"
  },
  {
    "href": "/guide/best-jbod-direct-attached-storage",
    "title": "8 Best JBOD Direct-Attached Storage"
  }
];

export const breadcrumbLabel = "Best Direct-Attached Storage Arrays";
