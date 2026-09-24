export const guideSlug = "best-usb-c-ethernet-adapters-for-linux";
export const guideTitle = "7 Best USB-C Ethernet Adapters for Linux";
export const metaTitle = "Best USB-C Ethernet Adapters for Linux";
export const metaDescription = "Linux compatibility depends on chipset and kernel driver support, not a generic vendor OS badge. We ranked by controller, not marketing claims.";
export const mainKeyword = "usb-c ethernet adapters for linux";
export const introParagraphs = [
  "Linux Ethernet adapter compatibility comes down to the specific controller chip and whether your kernel has an in-tree driver for it, and several adapters in this cluster are refreshingly specific about exact kernel version requirements rather than a vague \"Linux compatible\" claim.",
  "We ranked by documented chipset (RTL8153, RTL8156, RTL8157, RTL8159) and explicit kernel version requirements where published, since this level of detail is a genuine trust signal that a listing was written by someone who understands Linux driver support."
];
export const lastUpdated = "2026-08-13";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31qWnFxWYaL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-usb-c-ethernet-adapters-for-linux-1",
    rank: 1,
    badge: "Best Overall",
    name: "Anker USB-C to Ethernet Adapter",
    price: "$15.53",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31qWnFxWYaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08CK9X9Z8?tag=theofficejournal-20",
    description: "A 1Gbps USB-C to Ethernet adapter with a sleek aluminum exterior and braided nylon cable, at just over half an inch thick and roughly the weight of an AA battery.\n\nBacked by Anker's 18-month warranty and customer service. No specific driver or OS compatibility notes beyond standard USB-C 3.0 devices, a straightforward pick when you want a name-brand adapter without extra features.",
    specs: ["1Gbps, USB-C 3.0","Aluminum body + braided nylon cable","18-month warranty"],
    pros: ["Aluminum exterior and braided cable for durability","Extremely compact and lightweight design","Backed by Anker's established warranty and support","Simple, no-frills single-purpose adapter"],
    cons: ["No PD charging or extra ports","Requires CAT6+ cable to hit full 1Gbps"],
    bestFor: "buyers prioritizing 1gbps, usb-c 3.0",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-linux-2",
    rank: 2,
    badge: "Best Value",
    name: "uni USB-C to Ethernet Adapter 1Gbps",
    price: "$15.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/414juUaWOEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B077KXY71Q?tag=theofficejournal-20",
    description: "A driver-free 1Gbps adapter with a non-slip design for easier plugging, braided nylon cable, and premium aluminum casing for heat dissipation, explicitly designed not to block adjacent USB-C ports.\n\nLists extensive device compatibility including iPhone 15/16 Pro/Max and multiple MacBook generations, but is explicit it does NOT work with Nintendo Switch. Comes with an 18-month warranty and 24/7 customer service.",
    specs: ["1Gbps, driver-free on most OSes","Non-slip, port-clearing design","18-month warranty"],
    pros: ["Non-slip design keeps adjacent USB-C ports accessible","Broad device compatibility list including recent iPhones","Aluminum casing for better heat dissipation","24/7 customer support with fast response claim"],
    cons: ["Explicitly not compatible with Nintendo Switch","Requires CAT6+ cable to reach full 1Gbps"],
    bestFor: "buyers prioritizing 1gbps, driver-free on most oses",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-linux-3",
    rank: 3,
    badge: "Runner-Up",
    name: "UGREEN USB-C to Ethernet Adapter (1Gbps)",
    price: "$12.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41dlards86L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B082K62S48?tag=theofficejournal-20",
    description: "A driver-free 1Gbps adapter (Windows 11/10/8.1/8, macOS, Chrome OS, Android need no driver; Windows XP/7/Vista and Linux need one) with an aluminum alloy case for heat dissipation and an LED status indicator.\n\nUGREEN explicitly lists compatibility with Nintendo Switch and Steam Deck alongside standard laptops and phones, a notable differentiator since several competitors in this cluster exclude Switch support.",
    specs: ["1Gbps, driver-free on most OSes","Aluminum alloy case, LED status light","Nintendo Switch + Steam Deck compatible"],
    pros: ["Explicitly compatible with both Nintendo Switch and Steam Deck","Driver-free on the most common operating systems","Reinforced cable tail and wear-resistant port for durability","LED indicator shows connection status at a glance"],
    cons: ["Not driver-free on Windows XP/7/Vista or Linux","1Gbps ceiling, no multi-gig option in this specific model"],
    bestFor: "buyers prioritizing 1gbps, driver-free on most oses",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-linux-4",
    rank: 4,
    badge: "Best 5G for Linux",
    name: "Cable Matters USB-C to 5Gb Ethernet Adapter",
    price: "$28.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/411fuyCdRqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D3FM7Z4L?tag=theofficejournal-20",
    description: "Delivers 5000Mbps Ethernet speed with a rugged aluminum housing and braided pigtail cable, requiring a USB 3.2 Gen 2 (10Gbps) port or higher to achieve the full 5Gbps.\n\nSupports USB-C, USB4, Thunderbolt 5, Thunderbolt 4, and Thunderbolt 3 devices, though explicitly does not support Android. Recommends the Realtek RTL8157 driver on older Windows or certain Linux kernels.",
    specs: ["5000Mbps Ethernet, requires USB 3.2 Gen 2+","Aluminum housing, braided pigtail cable","Wide Thunderbolt 3/4/5 + USB4 support"],
    pros: ["Full plug-and-play on latest macOS and Windows","Wide Thunderbolt generation support (3, 4, and 5)","Aluminum housing with braided cable for durability","Works with NAS systems, routers, and network switches directly"],
    cons: ["Does not support Android devices","Requires a USB 3.2 Gen 2 (10Gbps) port to reach the full 5Gbps"],
    bestFor: "buyers prioritizing 5000mbps ethernet, requires usb 3.2 gen 2+",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-linux-5",
    rank: 5,
    badge: "Best 2.5G for Linux",
    name: "Cable Matters USB-C to 2.5Gb Ethernet Adapter",
    price: "$24.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41WgeE6v2BL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DHXLGC92?tag=theofficejournal-20",
    description: "A straightforward 2.5Gbps adapter with aluminum housing and braided pigtail cable for durability, working out of the box with plug-and-play installation on most systems.\n\nCable Matters recommends installing the latest Realtek USB 2.5G Ethernet Controller driver on older operating systems or certain Linux kernels for best speed, and notes it does not support Android devices.",
    specs: ["2.5Gbps Ethernet","Aluminum housing, braided pigtail cable","Supports Wake-on-LAN"],
    pros: ["Plug-and-play on most current systems without manual driver install","Aluminum housing with braided cable for long-term durability","Wide compatibility across Windows, macOS, Linux, ChromeOS, and iOS","Reasonable price for a 2.5Gbps adapter from an established brand"],
    cons: ["Does not support Android devices","Older OS versions or certain Linux kernels need a manual driver for best speed"],
    bestFor: "buyers prioritizing 2.5gbps ethernet",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-linux-6",
    rank: 6,
    badge: "Most Compact, Driver-Free on Ubuntu",
    name: "TP-Link UE300C USB-C to Ethernet Adapter",
    price: "$10.93",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21mcicfhKHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08HQBC678?tag=theofficejournal-20",
    description: "An ultra-compact (2.8 x 1.0 x 0.6in) foldable 1Gbps adapter, driver-free on Windows 11/10/8.1/8/7, macOS, Chrome OS, and Linux (Ubuntu), backed by TP-Link's status as a signatory of CISA's Secure-by-Design pledge.\n\nExplicitly lists compatibility with Dell XPS 13/15, Surface Laptop 3, Google Pixelbook, Lenovo ThinkPad X1 Carbon and Yoga models. The foldable design is a genuine space-saver for a laptop bag compared to rigid competitors.",
    specs: ["1Gbps, driver-free including Linux","2.8 x 1.0 x 0.6in foldable design","CISA Secure-by-Design pledge signatory"],
    pros: ["Foldable design is more compact than rigid competitors for travel","Driver-free on Linux (Ubuntu), not all competitors support this out of the box","CISA Secure-by-Design commitment is a real security signal","Explicit ThinkPad and Surface compatibility notes"],
    cons: ["1Gbps ceiling only, no multi-gig variant in this listing","No extra ports or PD charging"],
    bestFor: "buyers prioritizing 1gbps, driver-free including linux",
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
    "subheading": "Chipset Determines Linux Support",
    "table": {
      "headers": [
        "Chipset",
        "Linux driver situation"
      ],
      "rows": [
        [
          "Realtek RTL8153 (Gigabit)",
          "Well-supported in-kernel on most current distributions"
        ],
        [
          "Realtek RTL8156/8157 (2.5G/5G)",
          "Requires a reasonably recent kernel; UGREEN specifies Linux Kernel 5.17+ for its 5G model"
        ],
        [
          "Realtek RTL8159 (10G)",
          "Newest chipset, verify current kernel support before buying"
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
    "q": "Does 'driver-free on Linux' mean the same thing across all these adapters?",
    "a": "Not exactly. It means the chipset has an in-kernel driver already included in a reasonably current Linux distribution. Older distributions or older kernels may need a manual driver install even for chipsets that are technically \"in-kernel\" on newer releases."
  },
  {
    "q": "Which adapter has the most explicit Linux documentation?",
    "a": "TP-Link's UE300C explicitly lists Linux (Ubuntu) as driver-free in its own marketing copy, a level of specificity most competitors don't provide. UGREEN's 5G adapter is similarly specific, naming Linux Kernel 5.17 as its requirement."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-usb-c-ethernet-adapters-for-chromebooks","title":"7 Best USB-C Ethernet Adapters for Chromebooks"},{"href":"/guide/best-cable-matters-usb-c-ethernet-adapters","title":"6 Best Cable Matters USB-C Ethernet Adapters"},{"href":"/guide/best-usb-c-to-2-5gbe-ethernet-adapters","title":"8 Best USB-C to 2.5GbE Ethernet Adapters"}];
