export const guideSlug = "best-5-bay-direct-attached-storage";
export const guideTitle = "6 Best 5-Bay Direct-Attached Storage";
export const metaTitle = "Best 5-Bay Direct-Attached Storage";
export const metaDescription = "5-bay DAS has a credible SATA/RAID product pool useful for RAID 5-style capacity planning. We compared the current lineup.";
export const mainKeyword = "5-bay direct-attached storage";
export const introParagraphs = [
  "5-bay enclosures suit RAID 5-style planning well, one parity drive across five bays gives you real redundancy while sacrificing less capacity proportionally than RAID 5 on a smaller array, alongside strong non-RAID options for buyers who just want more independent bays.",
  "We compared ORICO's non-RAID and RAID 5-bay lines against Sabrent's dedicated-controller 5-bay dock, since these represent genuinely different engineering approaches to the same bay count."
];
export const lastUpdated = "2026-08-14";
export const readTime = "11 min";
export const heroImage = "https://m.media-amazon.com/images/I/41OiiopY9QL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-5-bay-direct-attached-storage-1",
    rank: 1,
    badge: "Best Non-RAID, Dedicated Per-Bay Controller",
    name: "Sabrent 5-Bay USB-C 10Gbps Hard Drive Enclosure (DS-SC5B)",
    price: "$279.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41OiiopY9QL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Y4F5SCK?tag=theofficejournal-20",
    description: "Sabrent's 5-bay dock steps up from its 4-bay sibling with the same dedicated ASMedia ASM1351 controller per bay, supporting up to 100TB total (5x20TB) of empty 3.5-inch bays over a 10Gbps USB-C connection, with a rear USB-C port for daisy-chaining a second dock.\n\nA 120mm PWM temperature-controlled fan only ramps up as drives warm, keeping it quieter during light use while protecting drives during heavy transfers. Like the 4-bay model, it's JBOD-only DAS, not RAID and not a NAS, with a 1-year warranty extendable to 2 years.",
    specs: ["5x 3.5in bays, 10Gbps USB-C","Dedicated ASM1351 controller per bay","Daisy-chain via rear USB-C port"],
    pros: ["PWM fan only ramps up under load, quieter at idle","Daisy-chain port for expanding beyond one dock","Internal auto-switching power supply, no external brick"],
    cons: ["No RAID, individual disks only","Drives not included"],
    bestFor: "buyers prioritizing 5x 3.5in bays, 10gbps usb-c",
  },
  {
    id: "best-5-bay-direct-attached-storage-2",
    rank: 2,
    badge: "Best 4-Bay Alternative",
    name: "Sabrent 4-Bay USB-C 10Gbps Hard Drive Enclosure (DS-SC4B)",
    price: "$229.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41rmuqxnscL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Y3WDHLD?tag=theofficejournal-20",
    description: "Sabrent's 4-bay dock gives every drive its own dedicated ASMedia ASM1351 controller rather than sharing one bridge chip, so each of the four 3.5-inch SATA bays gets a stable, independent connection up to 80TB total (4x20TB) over a single 10Gbps USB-C port.\n\nDrives ship empty and mount individually, JBOD-style, not hardware RAID. Tool-free trays, a locking key, a Kensington slot, and a 92mm active-cooling fan round out a build meant for 24/7 desk use, backed by a 1-year warranty extendable to 2 years.",
    specs: ["4x 3.5in bays, 10Gbps USB-C","Dedicated ASM1351 controller per bay","JBOD only, no RAID"],
    pros: ["Independent controller per bay avoids one bad drive taking down the bus","Tool-free trayless hot-swap with lockable bays","92mm active cooling for sustained 24/7 use"],
    cons: ["No RAID, individual disks only","Drives not included"],
    bestFor: "buyers prioritizing 4x 3.5in bays, 10gbps usb-c",
  },
  {
    id: "best-5-bay-direct-attached-storage-3",
    rank: 3,
    badge: "Budget Non-RAID",
    name: "ORICO 5-Bay Hard Drive Enclosure (5Gbps USB 3.0)",
    price: "$109.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31kD7ZF4zgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0734G79FW?tag=theofficejournal-20",
    description: "ORICO's 5-bay enclosure uses magnetic, tool-free covers that recognize inserted drives in about 3 seconds, supporting both 2.5 and 3.5-inch SATA HDD/SSDs up to 110TB total (22TB per drive) over a USB 3.0 Type-B connection at up to 5Gbps.\n\nA 60mm double-ball-bearing fan plus honeycomb rear venting handles cooling, and multi-layer protection (over-voltage, over-current, overheat, short-circuit) guards the drives. ORICO notes that on Linux, multi-bay enclosures like this one can only read one drive at a time, a real platform limitation worth knowing before a Linux-based NAS-replacement plan.",
    specs: ["5-bay, 2.5/3.5in, up to 110TB total","USB 3.0 Type-B, 5Gbps","60mm cooling fan"],
    pros: ["Magnetic tool-free covers recognize drives in ~3 seconds","Multi-layer electrical protection built in","Supports both 2.5in and 3.5in drives in the same bays"],
    cons: ["Linux limited to reading one drive at a time","5Gbps USB 3.0 Type-B, not the newer 10Gbps Type-C tier"],
    bestFor: "buyers prioritizing 5-bay, 2.5/3.5in, up to 110tb total",
  },
  {
    id: "best-5-bay-direct-attached-storage-4",
    rank: 4,
    badge: "Best USB-C Non-RAID",
    name: "ORICO 5-Bay Hard Drive Enclosure (USB-C, 5Gbps)",
    price: "$114.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31kD7ZF4zgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07VMK6ND7?tag=theofficejournal-20",
    description: "This ORICO 5-bay model mirrors the USB 3.0 version's magnetic tool-free design and 110TB total capacity (22TB per drive), but swaps to a USB 3.1 Gen 1 Type-C interface, still capped at 5Gbps but with the newer connector shape.\n\nThe same 60mm cooling fan, honeycomb venting, and multi-layer electrical protection carry over, and ORICO again notes the same Linux one-drive-at-a-time limitation across its multi-bay enclosure line.",
    specs: ["5-bay, 2.5/3.5in, up to 110TB total","USB 3.1 Gen 1 Type-C, 5Gbps","60mm cooling fan"],
    pros: ["USB-C connector for broader modern host compatibility","Same fast 3-second drive recognition as ORICO's USB-A model","Multi-layer electrical protection built in"],
    cons: ["Still capped at 5Gbps despite the USB-C connector","Linux limited to reading one drive at a time"],
    bestFor: "buyers prioritizing 5-bay, 2.5/3.5in, up to 110tb total",
  },
  {
    id: "best-5-bay-direct-attached-storage-5",
    rank: 5,
    badge: "Best Push-Open Design",
    name: "ORICO 5-Bay USB 3.1 Hard Drive Enclosure (110TB, 12V/10A)",
    price: "$129.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41agniKNNuL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FH16Z53L?tag=theofficejournal-20",
    description: "This ORICO 5-bay model uses a push-to-open mechanism for a sleeker, more compact exterior than ORICO's magnetic-cover models, supporting the same 110TB total capacity (22TB per drive) across 2.5 and 3.5-inch SATA drives.\n\nA 12V/10A power supply, notably higher-current than ORICO's other 5-bay models, supports simultaneous read/write across all 5 drives at up to 5Gbps (260MB/s real-world), with an 80mm quiet fan for cooling and extended device longevity.",
    specs: ["5-bay, push-to-open design, up to 110TB","12V/10A power supply","5Gbps, 260MB/s real-world"],
    pros: ["Push-to-open design is more compact and modern-looking than magnetic covers","Higher-current 12V/10A supply for stable 5-drive simultaneous operation","260MB/s documented real-world speed, not just link-rate claim"],
    cons: ["Still capped at 5Gbps USB 3.1 Gen 1, not the newer 10Gbps tier","Same Linux one-drive-at-a-time limitation as ORICO's other multi-bay units"],
    bestFor: "buyers prioritizing 5-bay, push-to-open design, up to 110tb",
  },
  {
    id: "best-5-bay-direct-attached-storage-6",
    rank: 6,
    badge: "Best RAID 5-Bay",
    name: "ORICO RAID 5-Bay HDD Enclosure (110TB, Aluminum)",
    price: "$199.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51QZ11oOYXL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DDX8PVH7?tag=theofficejournal-20",
    description: "This ORICO 5-bay RAID enclosure matches the 4-bay model's 8 RAID modes (0/1/3/5/10/JBOD/CLONE/CLEAR) but scales to 110TB total (22TB per drive) with the same 235MB/s USB 3.0 transfer speed and a built-in 150W power supply for stable multi-disk operation.\n\nAn 80mm silent cooling fan with front and rear vents handles the added thermal load of a fifth drive, and the same bracket-free, independently-locked tray design carries over from ORICO's smaller RAID enclosures.",
    specs: ["5-bay RAID, 8 modes, up to 110TB","235MB/s, built-in 150W power supply","80mm cooling fan"],
    pros: ["8 RAID modes at a larger 5-bay capacity tier","Built-in 150W power supply avoids a bulky adapter","Independent locking mechanism per the bracket-free tray design"],
    cons: ["235MB/s ceiling limits sustained multi-drive throughput","Back up data before switching RAID modes, per ORICO's own guidance"],
    bestFor: "buyers prioritizing 5-bay raid, 8 modes, up to 110tb",
  },
  {
    id: "best-5-bay-direct-attached-storage-7",
    rank: 7,
    badge: "Best High-Capacity RAID",
    name: "ORICO 5-Bay RAID Enclosure with 150W Built-In Power (110TB)",
    price: "$199.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41vXSYxonbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GXY8C9JR?tag=theofficejournal-20",
    description: "This ORICO 5-bay RAID station uses hardware switches (not software) to configure RAID 0, 1, 3, 5, 10, JBOD, Clone, or Clear across up to 110TB total capacity (22TB per drive), targeting large backup projects, video editing, and media libraries.\n\nThe built-in 150W power supply keeps voltage stable across 5 simultaneously-running mechanical drives without a bulky external adapter, and a rugged aluminum alloy shell with an 80mm silent fan plus honeycomb venting is engineered for 24/7 long-term operation.",
    specs: ["5-bay RAID, hardware switches, up to 110TB","150W built-in power supply","Up to 230MB/s USB 3.0"],
    pros: ["Hardware-switch RAID configuration, no software dependency","150W built-in supply keeps a creative studio desk clean and stable","Engineered specifically for 24/7 long-term operation"],
    cons: ["230MB/s USB 3.0 ceiling is modest by current multi-gig standards","Requires physical hardware-switch access for RAID reconfiguration"],
    bestFor: "buyers prioritizing 5-bay raid, hardware switches, up to 110tb",
  },
  {
    id: "best-5-bay-direct-attached-storage-8",
    rank: 8,
    badge: "Best Budget RAID Alternative",
    name: "ORICO 4-Bay RAID Hard Drive Enclosure (88TB, Aluminum)",
    price: "$179.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51wHCBQoDhL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4QJZL6X?tag=theofficejournal-20",
    description: "ORICO's 4-bay RAID enclosure supports the same 8 RAID modes as its 5-bay sibling (0/1/3/5/10/JBOD/CLONE/CLEAR) for up to 88TB total (22TB per drive), reaching 235MB/s over a USB 3.0 interface matched to SATA 6Gbps drives.\n\nA built-in 150W power supply avoids a bulky external adapter even with 4 high-consumption mechanical drives running simultaneously, and an 80mm silent cooling fan with front/rear vents handles sustained heat load. A tray-less design with an independent safety lock secures drives against accidental ejection.",
    specs: ["4-bay RAID, 8 modes, up to 88TB","235MB/s, built-in 150W power supply","80mm cooling fan, tray-less lock design"],
    pros: ["Built-in 150W power supply eliminates a bulky external brick","8 RAID modes cover backup, capacity, and redundancy use cases","Independent safety lock prevents accidental drive ejection"],
    cons: ["235MB/s ceiling is modest for a RAID-capable 4-bay unit","22TB per-drive limit caps total capacity below newer competitors"],
    bestFor: "buyers prioritizing 4-bay raid, 8 modes, up to 88tb",
  }
];

export const howWeEvaluated = [
  {
    "title": "Connection & Drive Architecture",
    "description": "Verified whether each product is genuinely direct-attached storage (USB, Thunderbolt, or SAS to one host) and whether drives mount individually, in JBOD, or under real hardware RAID, rather than assuming any multi-bay box works the same way."
  },
  {
    "title": "Real Interface Speed",
    "description": "Checked the documented USB generation, Thunderbolt generation, or SAS link speed against real sustained throughput figures where manufacturers publish them, rather than repeating theoretical link-rate marketing numbers."
  },
  {
    "title": "RAID/JBOD Implementation",
    "description": "Distinguished hardware-controller RAID from host-software RAID from plain JBOD/individual-disk presentation, since these have very different failure, portability, and rebuild behavior."
  },
  {
    "title": "Build, Cooling & Serviceability",
    "description": "Weighed tool-free tray design, hot-swap support, fan noise where documented, and daisy-chain or expansion options against the product's likely desk, closet, or rack environment."
  },
  {
    "title": "Total Ownership Cost",
    "description": "Considered that most DAS enclosures ship diskless, factoring in drive cost, cables, and RAID software where relevant rather than judging price on the empty enclosure alone."
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
    "subheading": "RAID 5 Capacity Math at 5 Bays",
    "note": "RAID 5 across 5 equal-size drives gives you 4 drives' worth of usable capacity, only 20% lost to parity versus 25% on a 4-drive RAID 5 array or 50% on RAID 1. This capacity efficiency is the real argument for 5-bay over 4-bay when redundancy matters."
  }
];

export const buyingCriteria = [
  {
    "criterion": "DAS means direct host attachment, not RAID",
    "explanation": "USB, Thunderbolt, and enterprise SAS storage can all be DAS. The term describes how the storage connects to a host, not whether it has RAID, what drive type it uses, or how many bays it has. Check those separately."
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
    "criterion": "RAID is not backup",
    "explanation": "RAID 1 or RAID 5 protects against a single drive failure, not against accidental deletion, ransomware, fire, or theft. Keep a genuine separate backup copy of anything irreplaceable, regardless of how much RAID redundancy your DAS provides."
  },
  {
    "criterion": "Diskless enclosures need drives budgeted separately",
    "explanation": "Most multi-bay DAS enclosures ship completely empty. Factor in 2-8 hard drives or SSDs at your target capacity before comparing the enclosure's sticker price against a similarly-priced preconfigured external drive."
  }
];

export const faq = [
  {
    "q": "Do I need all 5 bays filled to use RAID 5?",
    "a": "For RAID 5 specifically, you need a minimum of 3 drives; a 5-bay enclosure lets you configure RAID 5 across any 3, 4, or 5 populated bays depending on the specific controller's flexibility, though check the exact enclosure's supported minimum before assuming partial-bay RAID 5 works."
  },
  {
    "q": "Does RAID replace the need for a separate backup?",
    "a": "No. RAID protects against a single drive's hardware failure, but it does not protect against accidental deletion, ransomware, fire, theft, or a controller failure that affects the whole array at once. Keep a genuine separate backup copy of anything you can't afford to lose."
  },
  {
    "q": "Do DAS enclosures come with drives included?",
    "a": "Most multi-bay DAS enclosures in this category ship completely diskless, you supply your own 2.5in or 3.5in SATA HDDs/SSDs or M.2 NVMe SSDs depending on the model. Budget for drive cost separately when comparing total price against a preconfigured external drive."
  },
  {
    "q": "Will any USB-C or Thunderbolt cable give me full DAS speed?",
    "a": "No. Cable quality and rated bandwidth matter as much as the port. A basic charging-only USB-C cable can bottleneck a 10Gbps or faster enclosure well below its rated speed. Use the cable included with the enclosure, or one explicitly rated for the matching USB or Thunderbolt generation."
  },
  {
    "q": "Can I add or remove drives from a DAS enclosure without powering it down?",
    "a": "Only if the specific enclosure documents hot-swap support, which most tool-free tray designs in this category do. Always check your specific product's hot-swap capability before removing a drive live, since not every budget enclosure supports it, especially some fixed-RAID-mode units."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-4-bay-das-storage","title":"8 Best 4-Bay DAS Storage Options"},{"href":"/guide/best-6-bay-direct-attached-storage","title":"6 Best 6-Bay Direct-Attached Storage"},{"href":"/guide/best-raid-direct-attached-storage","title":"8 Best RAID Direct-Attached Storage"}];
