export const guideSlug = "best-10gbe-usb-c-ethernet-adapters";
export const guideTitle = "4 Best 10GbE USB-C Ethernet Adapters";
export const metaTitle = "Best 10GbE USB-C Ethernet Adapters";
export const metaDescription = "True 10GbE over USB-C now exists, but the host needs enough bandwidth and the adapter can run hot. Here is what to check first.";
export const mainKeyword = "10gbe usb-c ethernet adapters";
export const introParagraphs = [
  "True 10GbE over USB-C is now real, but every product in this cluster is explicit that it requires Thunderbolt 3/4/5 or USB4, not a standard USB-C or USB 3.x port, a hard requirement that trips up buyers who assume any USB-C port works.",
  "We required a documented 10GbE controller and checked how honestly each listing represents real-world throughput versus the theoretical link rate, since heat and driver requirements vary meaningfully across this tier."
];
export const lastUpdated = "2026-08-13";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41AAHil5qUL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-10gbe-usb-c-ethernet-adapters-1",
    rank: 1,
    badge: "Best Overall (WoL + PXE)",
    name: "Sabrent Thunderbolt & USB4 10GbE Adapter (NT-P10G)",
    price: "$129.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41AAHil5qUL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMBLFTWW?tag=theofficejournal-20",
    description: "A true 10GbE adapter that explicitly requires Thunderbolt 3/4/5 or USB4 Type-C, Sabrent is clear it will NOT work on regular USB-C or USB 3.2/3.1/3.0 ports. Auto-negotiates down to 5GbE, 2.5GbE, 1GbE, and 100Mbps.\n\nThe aluminum housing doubles as a heatsink and runs warm during sustained transfers, which Sabrent says is normal for 10GbE. Supports Wake-on-LAN and PXE boot, with jumbo frames and receive-buffer tuning available for maximum throughput.",
    specs: ["True 10GbE, requires Thunderbolt 3/4/5 or USB4","Aluminum heatsink housing","WoL + PXE boot support"],
    pros: ["Genuine 10GbE with WoL and PXE boot for IT/pro environments","Aluminum housing doubles as a heatsink for sustained transfers","Auto-negotiates cleanly down through 5G/2.5G/1G/100M","Bus-powered, no separate power brick needed"],
    cons: ["Will not work at all on standard USB-C or USB 3.x-only ports, Thunderbolt/USB4 required","Windows/Linux need the separate Marvell AQC113 driver"],
    bestFor: "buyers prioritizing true 10gbe, requires thunderbolt 3/4/5 or usb4",
  },
  {
    id: "best-10gbe-usb-c-ethernet-adapters-2",
    rank: 2,
    badge: "Best for Low Heat",
    name: "Cable Matters USB-C to 10Gb Ethernet Adapter",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41fiXhBRCvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G1WJFR5V?tag=theofficejournal-20",
    description: "Built around the Realtek RTL8159 USB 10G controller specifically to address the heat concerns common with other 10GbE adapters, with an integrated thermal silicone pad and heat sink.\n\nCable Matters is transparent that real-world Windows throughput is typically ~7Gbps and macOS may report only a 5Gb link rate depending on the Mac model, rather than overselling the theoretical 10Gbps link rate.",
    specs: ["10G/5G/2.5G/1G/100M auto-negotiation via RTL8159","Real-world ~7Gbps Windows, ~5Gbps macOS documented","Integrated thermal silicone + heat sink"],
    pros: ["RTL8159 chip specifically engineered to reduce heat versus competing 10GbE adapters","Transparent, honest real-world throughput documentation rather than only advertising link rate","Braided pigtail cable adds strain relief for dock setups","Continuously validated macOS performance with published notes"],
    cons: ["Not for Android or Xbox One S","Best results require a USB 3.2 Gen 2x2 (20Gbps) port or higher"],
    bestFor: "buyers prioritizing 10g/5g/2.5g/1g/100m auto-negotiation via rtl8159",
  },
  {
    id: "best-10gbe-usb-c-ethernet-adapters-3",
    rank: 3,
    badge: "Most Affordable",
    name: "10GbE USB-C Adapter with RTL8159 Chip (Generic)",
    price: "$70.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41LRJYlKP9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FY4RVJNM?tag=theofficejournal-20",
    description: "Built on the same RTL8159 chipset as Cable Matters' 10G adapter for low heat and stable 10Gbps speeds, but explicitly requires a driver install on Windows to unlock full speed, without it, speed is capped at 100Mbps.\n\nRequires USB 3.2 Gen 2x2 (20Gbps) or Thunderbolt 3/4 for true 10Gbps; standard USB 3.0/3.1 ports cap at 5Gbps. Auto-negotiates across 5 speed tiers with a premium aluminum heatsink housing.",
    specs: ["10G via RTL8159, requires driver on Windows","USB 3.2 Gen 2x2 or TB3/4 required for full speed","5-speed auto-negotiation"],
    pros: ["Lower price than Sabrent's or WAVLINK's 10GbE options","RTL8159 chip for low-heat stable operation","5-speed auto-negotiation (10G/5G/2.5G/1G/100M)","Premium aluminum heatsink housing"],
    cons: ["Windows speed caps at 100Mbps without installing the driver first, an easy trap for unaware buyers","Standard USB 3.0/3.1 ports cap this at 5Gbps, not the full 10G"],
    bestFor: "buyers prioritizing 10g via rtl8159, requires driver on windows",
  },
  {
    id: "best-10gbe-usb-c-ethernet-adapters-4",
    rank: 4,
    badge: "Best Chipset (AQC113)",
    name: "WAVLINK USB4 to 10Gbps Ethernet Adapter (AQC113)",
    price: "$119.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51ow329LAnL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQJ7J8DR?tag=theofficejournal-20",
    description: "Built specifically for USB4 and Thunderbolt 3/4/5, using the AQC113-B1 chipset from Marvell (AQtion) for consistent throughput and low latency under heavy workloads, with macOS including native drivers.\n\nWAVLINK is explicit this is not compatible with Windows hosts that only have USB 3.2/3.1/3.0/2.0, or with mobile phones or tablets. Windows and Linux require manual driver installation with instructions included.",
    specs: ["10Gbps via AQC113-B1 (Marvell AQtion) chip","USB4/Thunderbolt 3/4/5 only, not USB 3.x-only hosts","Dual LED status indicators"],
    pros: ["AQC113-B1 chipset is a proven, high-performance controller for sustained 10G workloads","macOS includes native drivers, no manual install needed","Dual LED indicators show link speed and activity separately","Compact aluminum design with passive heat dissipation"],
    cons: ["Not compatible with USB 3.2/3.1/3.0/2.0-only hosts, or phones/tablets","Windows and Linux require manual driver installation"],
    bestFor: "buyers prioritizing 10gbps via aqc113-b1 (marvell aqtion) chip",
  }
];

export const howWeEvaluated = [
  {
    "title": "Ethernet Speed & Chipset",
    "description": "Verified the actual rated Ethernet speed (1G/2.5G/5G/10G) and, where published, the specific Realtek, Marvell, or other controller chip driving it, rather than assuming USB-C connector shape implies a speed tier."
  },
  {
    "title": "Host & OS Compatibility",
    "description": "Checked explicit USB generation requirements (USB 3.0 vs USB 3.2 Gen 2 vs Thunderbolt/USB4) and confirmed OS support, since several products in this cluster have real exclusions (Android, Nintendo Switch, older Apple silicon)."
  },
  {
    "title": "Real-World Documentation",
    "description": "Favored listings that publish honest real-world throughput or explicit host-speed caveats over ones that only quote the theoretical link rate."
  },
  {
    "title": "Build Quality & Durability",
    "description": "Weighed braided cable construction, aluminum housing, and reinforced connectors, since these adapters see frequent plug/unplug cycles in daily use."
  },
  {
    "title": "Genuine Feature Differentiators",
    "description": "Prioritized real differences like Wake-on-LAN, PXE boot, PD passthrough wattage, and multiport expansion over marketing language that repeats across nearly identical adapters."
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
    "subheading": "Confirm Your Host Before Buying",
    "intro": "Every adapter here requires Thunderbolt 3/4/5 or USB4. A standard USB-C laptop port without one of these will not work at all, not just run slower.",
    "note": "If you're not sure which port type your laptop has, check its exact model specs before buying any 10GbE adapter, since these are the most host-restrictive products in this entire category."
  },
  {
    "subheading": "Windows Driver Trap",
    "intro": "The budget 10GbE adapter (B0FY4RVJNM) caps at 100Mbps on Windows until you manually install its driver, an easy trap for buyers expecting true plug-and-play.",
    "table": {
      "headers": [
        "Priority",
        "Best pick"
      ],
      "rows": [
        [
          "True plug-and-play on Mac and PC",
          "Sabrent NT-P10G (macOS/most TB4/USB4 systems)"
        ],
        [
          "Lowest heat during sustained transfers",
          "Cable Matters (RTL8159, engineered for low heat)"
        ],
        [
          "Lowest price, willing to install a driver",
          "Budget RTL8159 10GbE adapter"
        ]
      ]
    }
  }
];

export const buyingCriteria = [
  {
    "criterion": "USB-C is a connector, not a speed",
    "explanation": "A USB-C port can carry anywhere from 1Gbps to 10Gbps of Ethernet depending on the adapter's chipset and your host's actual USB generation. Check the exact Ethernet speed and required USB mode before assuming any USB-C adapter matches your needs."
  },
  {
    "criterion": "Multi-gig speeds need a fast enough USB port",
    "explanation": "A 2.5G, 5G, or 10G adapter plugged into a basic USB 3.0 (5Gbps) port will not reach its rated Ethernet speed. 2.5G generally works on 5Gbps ports; 5G and 10G typically need a USB 3.2 Gen 2 (10Gbps) port or Thunderbolt/USB4 host."
  },
  {
    "criterion": "Check OS and driver requirements before buying",
    "explanation": "Most Gigabit adapters are driver-free on Windows, macOS, and ChromeOS, but multi-gig adapters often need a manufacturer driver on Windows or specific Linux kernel versions, and some models exclude older Apple silicon chips entirely."
  },
  {
    "criterion": "Confirm your specific device isn't excluded",
    "explanation": "Several adapters in this cluster explicitly do not work with Nintendo Switch, Android, or specific Mac chip generations. Read the compatibility list carefully rather than assuming a USB-C connector guarantees your device will work."
  },
  {
    "criterion": "A CAT6 cable matters as much as the adapter",
    "explanation": "Even a genuine Gigabit-capable adapter will fall back to slower speeds over an old CAT5 cable. Use CAT6 or better for Gigabit, and CAT6A for 5G/10G speeds, to actually realize the adapter's rated performance."
  },
  {
    "criterion": "PD passthrough wattage isn't automatically usable",
    "explanation": "An adapter rated for 100W or 140W Power Delivery passthrough only delivers that much power if you also supply a charger and cable rated for it. The adapter's rating is a ceiling, not a guarantee, without the matching charger."
  }
];

export const faq = [
  {
    "q": "Can I use a 10GbE adapter on a regular USB-C laptop port?",
    "a": "No, not with any product in this cluster. All four require Thunderbolt 3/4/5 or USB4 specifically. Sabrent's listing is explicit that it will not work at all on standard USB-C or USB 3.2/3.1/3.0 ports."
  },
  {
    "q": "Will I actually get 10Gbps in real-world use?",
    "a": "Rarely at the full theoretical rate. Cable Matters documents roughly 7Gbps real-world on Windows and around 5Gbps on macOS, still a major upgrade over Gigabit, but worth knowing before you buy expecting the full 10Gbps number."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-5gbe-usb-c-ethernet-adapters","title":"5 Best 5GbE USB-C Ethernet Adapters"},{"href":"/guide/best-sabrent-usb-c-ethernet-adapters","title":"Best Sabrent USB-C Ethernet Adapters in 2026"},{"href":"/guide/best-cable-matters-usb-c-ethernet-adapters","title":"6 Best Cable Matters USB-C Ethernet Adapters"}];
