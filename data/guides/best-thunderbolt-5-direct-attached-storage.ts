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
    "q": "Do I need special SSDs to hit Thunderbolt 5 speeds?",
    "a": "Yes, generally PCIe Gen4 or Gen5 NVMe SSDs rated for high sustained throughput. A slower or older NVMe SSD will bottleneck well below the enclosure's 80Gbps ceiling regardless of the Thunderbolt 5 connection."
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

export const guideSlug = "best-thunderbolt-5-direct-attached-storage";

export const guideTitle = "5 Best Thunderbolt 5 Direct-Attached Storage";

export const heroImage = "https://m.media-amazon.com/images/I/41LWoUFub-L._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "Confirm a Genuine Thunderbolt 5 Host",
    "note": "Every enclosure here remains backward compatible with Thunderbolt 3/4 and USB4 hosts, but performance drops to that host generation's ceiling, 40Gbps rather than the enclosure's full 80Gbps rating. Verify your specific Mac or PC has a genuine Thunderbolt 5 port before expecting the full speed tier."
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
  "Thunderbolt 5 DAS is now available, delivering 80Gbps bidirectional bandwidth for data through current multi-NVMe enclosures, a real step up from Thunderbolt 3/4's established 40Gbps ceiling.",
  "We required a genuine documented Thunderbolt 5 link rather than confusing display-oriented asymmetric bandwidth modes with normal storage bandwidth, and verified fallback behavior on older Thunderbolt 3/4 or USB4 hosts, since every current TB5 enclosure remains backward compatible at reduced speed."
];

export const lastUpdated = "2026-08-14";

export const mainKeyword = "thunderbolt 5 direct-attached storage";

export const metaDescription = "Thunderbolt 5 DAS is now commercially real at 80Gbps. We verified genuine TB5 host requirements and documented sustained speed.";

export const metaTitle = "Best Thunderbolt 5 DAS Storage";

export const products: GuideProduct[] = [
  {
    "id": "best-thunderbolt-5-direct-attached-storage-1",
    "rank": 1,
    "badge": "Best Overall (LCD Display)",
    "name": "MOKiN 80Gbps M.2 NVMe Enclosure with LCD Display",
    "price": "$151.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LWoUFub-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWC16GK6?tag=theofficejournal-20",
    "description": "MOKiN's enclosure uses an Intel JHL9480+RTL9210B chipset to hit up to 80Gbps over Thunderbolt 5 (included cable), fast enough to transfer 100GB in about 15 seconds, 6-7x faster than a typical 10Gbps SSD reader, supporting PCIe Gen5 SSDs up to 8TB.\n\nA built-in LCD screen shows real-time temperature status (Normal/Medium/High) and fan speed with clear overheating alerts, backed by an active 3-speed fan that starts at 40°C to prevent thermal throttling during intensive transfers.",
    "specs": [
      "M.2 NVMe enclosure, up to 80Gbps (TB5)",
      "LCD real-time temp/fan display",
      "PCIe Gen5 SSD support, up to 8TB"
    ],
    "pros": [
      "Real-time LCD temperature and fan-speed display is a genuine diagnostic feature",
      "80Gbps Thunderbolt 5 is at the current performance ceiling for DAS",
      "3-speed active fan actively prevents thermal throttling"
    ],
    "cons": [
      "Full 80Gbps requires a genuine Thunderbolt 5 port and cable",
      "Actual speed varies significantly by connected SSD and host generation"
    ],
    "bestFor": "2 nvme enclosure, up to 80gbps (tb5)"
  },
  {
    "id": "best-thunderbolt-5-direct-attached-storage-2",
    "rank": 2,
    "badge": "Best Quiet Multi-Bay NVMe",
    "name": "TerraMaster D4 SSD NVMe Enclosure, 40Gbps (Diskless)",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21YIBlIqgtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8BFGXK9?tag=theofficejournal-20",
    "description": "2 NVMe 2280 slots (8TB each).\n\nTerraMaster is explicit that there's no built-in hardware RAID, just four individual disks with optional third-party soft-RAID support. At just 19dB(A) in standby with temperature-controlled fans and four internal sensors, it's whisper-quiet, and the included TDAS mobile app and TPC Backupper software add wireless phone backup and scheduled Windows backup.",
    "specs": [
      "4-bay NVMe, up to 3,224MB/s (4 SSDs)",
      "40Gbps, Thunderbolt 5/4/3 + USB4",
      "19dB(A) standby noise"
    ],
    "pros": [
      "19dB(A) standby noise is whisper-quiet for a 4-bay NVMe array",
      "Documented real 4-SSD throughput, not just link-rate claims",
      "Includes both mobile backup app and scheduled Windows backup software"
    ],
    "cons": [
      "No built-in hardware RAID, soft-RAID only via third-party tools",
      "Diskless, all four NVMe SSDs sold separately"
    ],
    "bestFor": "Buyers prioritizing 4-bay nvme, up to 3,224mb/s (4 ssds)"
  },
  {
    "id": "best-thunderbolt-5-direct-attached-storage-3",
    "rank": 3,
    "badge": "Runner-Up NVMe Array",
    "name": "TerraMaster D4 SSD NVMe Enclosure, 40Gbps (Diskless)",
    "price": "$199.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21YIBlIqgtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F8BFGXK9?tag=theofficejournal-20",
    "description": "2 NVMe 2280 slots (8TB each).\n\nTerraMaster is explicit that there's no built-in hardware RAID, just four individual disks with optional third-party soft-RAID support. At just 19dB(A) in standby with temperature-controlled fans and four internal sensors, it's whisper-quiet, and the included TDAS mobile app and TPC Backupper software add wireless phone backup and scheduled Windows backup.",
    "specs": [
      "4-bay NVMe, up to 3,224MB/s (4 SSDs)",
      "40Gbps, Thunderbolt 5/4/3 + USB4",
      "19dB(A) standby noise"
    ],
    "pros": [
      "19dB(A) standby noise is whisper-quiet for a 4-bay NVMe array",
      "Documented real 4-SSD throughput, not just link-rate claims",
      "Includes both mobile backup app and scheduled Windows backup software"
    ],
    "cons": [
      "No built-in hardware RAID, soft-RAID only via third-party tools",
      "Diskless, all four NVMe SSDs sold separately"
    ],
    "bestFor": "Buyers prioritizing 4-bay nvme, up to 3,224mb/s (4 ssds)"
  },
  {
    "id": "best-thunderbolt-5-direct-attached-storage-4",
    "rank": 4,
    "badge": "Best 40Gbps Fallback-Compatible",
    "name": "UGREEN 40Gbps M.2 NVMe Enclosure (SSD Not Included)",
    "price": "$73.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41JHbCBZxkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F62NG7K3?tag=theofficejournal-20",
    "description": "0 hosts at correspondingly lower speeds.\n\nA double-sided fin design plus a three-dimensional cooling system delivers several times the heat dissipation of a standard enclosure without needing a fan, keeping operation silent. It supports 2230/2242/2260/2280 NVMe SSDs up to 8TB, explicitly excluding SATA NGFF or MSATA drives.",
    "specs": [
      "M.2 NVMe enclosure, up to 3,600MB/s",
      "ASM2464PD chip, Thunderbolt 3/4 + USB4",
      "Fanless double-sided fin cooling"
    ],
    "pros": [
      "3,600MB/s peak speed without a cooling fan",
      "Broad backward compatibility down to USB 2.0",
      "Compact and travel-friendly aluminum build"
    ],
    "cons": [
      "Full 3,600MB/s requires a genuine Thunderbolt 4 cable and host",
      "NVMe only, thick SSDs with pre-installed heatsinks may not fit"
    ],
    "bestFor": "2 nvme enclosure, up to 3,600mb/s"
  },
  {
    "id": "best-thunderbolt-5-direct-attached-storage-5",
    "rank": 5,
    "badge": "Best HDD Array Alternative",
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
    "id": "best-thunderbolt-5-direct-attached-storage-6",
    "rank": 6,
    "badge": "Best Compact Single-Drive",
    "name": "JEYI Wire-Free M.2 2230 NVMe Enclosure (10Gbps)",
    "price": "$15.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41FP472MV6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CP85BQKV?tag=theofficejournal-20",
    "description": "It's USB-powered with no external adapter needed and supports TRIM to avoid SSD write-amplification slowdowns over time, but is specifically limited to 2230-size NVMe SSDs only, not the more common 2242/2260/2280 sizes other enclosures support.",
    "specs": [
      "M.2 2230 NVMe enclosure only, 10Gbps",
      "JMS583 A3 chip, UASP + TRIM support",
      "Wire-free magnetic cover design"
    ],
    "pros": [
      "cable-free magnetic-cover design is unique in this category",
      "TRIM support prevents write-amplification slowdown over time",
      "Bus-powered, no external adapter needed"
    ],
    "cons": [
      "Limited to 2230-size NVMe SSDs only, not 2242/2260/2280",
      "Pocket-sized form factor trades capacity flexibility for portability"
    ],
    "bestFor": "2 2230 nvme enclosure only, 10gbps"
  },
  {
    "id": "best-thunderbolt-5-direct-attached-storage-7",
    "rank": 7,
    "badge": "Best Value JBOD Alternative",
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
    "id": "best-thunderbolt-5-direct-attached-storage-8",
    "rank": 8,
    "badge": "Best Compact RAID Alternative",
    "name": "TerraMaster D2-320 2-Bay USB RAID Enclosure (Diskless)",
    "price": "$103.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21z8JFkg6dL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C8GCZP5K?tag=theofficejournal-20",
    "description": "In RAID 1, a damaged drive can be replaced directly and data rebuilds automatically, a real mirrored-backup workflow rather than just individual disk exposure. The tool-free Push-Lock tray and intelligent temperature-controlled fan carry over from TerraMaster's larger D-series enclosures.",
    "specs": [
      "2-bay, hardware RAID 0/1/JBOD/Single",
      "Up to 1,075MB/s (SSD RAID 0)",
      "10Gbps USB 3.2 Gen 2"
    ],
    "pros": [
      "Genuine hardware RAID 1 with automatic rebuild on drive replacement",
      "Documented real throughput figures for both HDD and SSD RAID 0",
      "Compact 2-bay footprint for a mirrored backup setup"
    ],
    "cons": [
      "Max 44TB total (22TB x 2) capacity ceiling",
      "Diskless, drives sold separately"
    ],
    "bestFor": "Buyers prioritizing 2-bay, hardware raid 0/1/jbod/single"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-nvme-direct-attached-storage",
    "title": "8 Best NVMe Direct-Attached Storage"
  },
  {
    "href": "/guide/best-thunderbolt-direct-attached-storage",
    "title": "8 Best Thunderbolt Direct-Attached Storage"
  },
  {
    "href": "/guide/best-usb4-das-storage",
    "title": "8 Best USB4 DAS Storage Options"
  }
];
