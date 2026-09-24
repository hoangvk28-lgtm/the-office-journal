export const guideSlug = "best-usb-c-ethernet-adapters-with-power-delivery";
export const guideTitle = "7 Best USB-C Ethernet Adapters With Power Delivery";
export const metaTitle = "Best USB-C Ethernet Adapters with PD";
export const metaDescription = "PD passthrough creates a genuine one-port workflow. We separated charger input rating from what actually reaches your device.";
export const mainKeyword = "usb-c ethernet adapters with power delivery";
export const introParagraphs = [
  "Power Delivery passthrough lets a single USB-C port handle both wired networking and charging at once, a genuinely useful workflow for thin laptops and tablets with limited ports, but the PD wattage printed on the box is a ceiling, not a guarantee without a matching charger.",
  "We separated charger input rating from what these adapters actually deliver to your device after their own power consumption, since several listings are explicit that a portion of the rated wattage is reserved for the adapter's own Ethernet and hub functions."
];
export const lastUpdated = "2026-08-13";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/31FhV4XIAyL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-1",
    rank: 1,
    badge: "Best 2.5G + 100W PD",
    name: "Plugable USB-C to 2.5Gb Ethernet with 100W PD",
    price: "$29.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31FhV4XIAyL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CZYSGKS6?tag=theofficejournal-20",
    description: "Recognized by MacWorld as the \"Best simple, budget adapter for 2.5GbE,\" combining 2.5Gbps Ethernet with 100W USB-C Power Delivery passthrough for simultaneous charging and networking.\n\nWorks with Thunderbolt, USB4, and USB-C hosts running Windows 10+, M1-M5 and Neo MacBooks with macOS 11+, and ChromeOS, plus mobile devices like iPhone 15/16 Pro/Pro Max.",
    specs: ["2.5Gbps + 100W PD passthrough","MacWorld-recognized budget pick","Windows 10+/macOS 11+/ChromeOS"],
    pros: ["MacWorld-recognized as a top budget 2.5GbE adapter","100W Power Delivery passthrough alongside 2.5Gbps networking","Broad Mac compatibility from M1 through M5 chips","Plugable's 2-year warranty with lifetime support"],
    cons: ["2.5Gbps ceiling, not a multi-gig upgrade path to 5G/10G","Requires a separate PD charger to use the 100W passthrough"],
    bestFor: "buyers prioritizing 2.5gbps + 100w pd passthrough",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-2",
    rank: 2,
    badge: "Best 1G + 100W PD",
    name: "uni USB-C to Ethernet Adapter with 100W PD",
    price: "$21.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41gsxkEO0sL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C3GHBLB6?tag=theofficejournal-20",
    description: "Combines 1000Mbps Ethernet with a 100W USB-C charging port so you don't have to choose between networking and charging on a single-port laptop.\n\nuni notes actual Ethernet speed depends on the host device, cable, and network environment, and specifically advises against using this to charge a phone. Compatible across Windows 11/10/8.1/8, macOS, iPadOS, Chrome OS, and Android.",
    specs: ["1000Mbps Ethernet + 100W PD","Braided nylon cable, aluminum casing","18-month warranty"],
    pros: ["Simultaneous 100W charging and Gigabit Ethernet from one port","Broad OS support including iPadOS and Android","Braided cable and aluminum casing for durability","18-month warranty with 24/7 support"],
    cons: ["Explicitly not recommended for charging phones","Requires CAT6+ cable to hit full 1Gbps"],
    bestFor: "buyers prioritizing 1000mbps ethernet + 100w pd",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-3",
    rank: 3,
    badge: "Best Compact + 100W PD",
    name: "Belkin USB-C Ethernet + Charge Adapter 100W",
    price: "$34.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21gprZfbepL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D3FRMNW5?tag=theofficejournal-20",
    description: "A genuine 2-in-1 design letting you connect Ethernet while simultaneously charging a device at up to 100W Power Delivery, gaining a wired port without giving up your only USB-C port for charging.\n\nBelkin notes the housing is made from a minimum of 75% post-consumer recycled plastic, backed by 2-year coverage. A compact, pocket-friendly design for buyers who need both networking and charging from one adapter.",
    specs: ["Gigabit Ethernet + 100W Power Delivery passthrough","75%+ post-consumer recycled plastic housing","2-year warranty"],
    pros: ["Genuine simultaneous Ethernet and 100W charging in one adapter","Made from majority post-consumer recycled plastic","2-year warranty, longer than most competitors","Compact, pocket-friendly design"],
    cons: ["Higher price than Ethernet-only adapters","100W charging requires a compatible PD charger, sold separately"],
    bestFor: "buyers prioritizing gigabit ethernet + 100w power delivery passthrough",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-4",
    rank: 4,
    badge: "Budget 1G + 100W PD",
    name: "BENFEI USB-C to Ethernet with 100W PD",
    price: "$17.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31NOwNVG2bL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D3GZMN8X?tag=theofficejournal-20",
    description: "Combines Gigabit Ethernet with 100W Power Delivery charging, backward compatible down to 100Mbps/10Mbps/1Mbps networks for maximum host flexibility.\n\nBENFEI explicitly lists Nintendo Switch and Steam Deck compatibility alongside recent iPhones and MacBooks, backed by an 18-month unconditional warranty.",
    specs: ["Gigabit Ethernet + 100W PD","Nintendo Switch + Steam Deck compatible","18-month unconditional warranty"],
    pros: ["Explicitly compatible with both Nintendo Switch and Steam Deck","Simultaneous 100W charging and Gigabit Ethernet","18-month unconditional warranty","Braided cable and aluminum casing for durability"],
    cons: ["Note if charging isn't reaching maximum rate, host protocol support should be checked first","Requires CAT6+ cable for full Gigabit speed"],
    bestFor: "buyers prioritizing gigabit ethernet + 100w pd",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-5",
    rank: 5,
    badge: "Best 140W Charging",
    name: "Cable Matters USB-C Ethernet Adapter with 140W Charging",
    price: "$19.19",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/419xD92DGmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F8TDL49F?tag=theofficejournal-20",
    description: "Pairs full Gigabit Ethernet with a substantial 140W (28V/5A) Power Delivery passthrough, enough to charge high-performance laptops like the MacBook Pro or Dell XPS through the same port.\n\nNotably also compatible with Chromecast with Google TV (2020+) for a wired connection up to 480Mbps, a use case few competitors mention. Lightweight aluminum housing with a flexible braided pigtail cable.",
    specs: ["Gigabit Ethernet + 140W PD (28V/5A)","Chromecast with Google TV compatible","Aluminum housing, braided pigtail cable"],
    pros: ["140W Power Delivery is enough for high-performance laptop charging","Explicit Chromecast with Google TV compatibility","Works across Windows, macOS, iPadOS, ChromeOS, and Linux","Aluminum housing with flexible braided pigtail cable"],
    cons: ["140W charging requires a compatible high-wattage charger, sold separately","Higher price than basic Gigabit-only adapters"],
    bestFor: "buyers prioritizing gigabit ethernet + 140w pd (28v/5a)",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-6",
    rank: 6,
    badge: "Most Affordable",
    name: "Aibilangose USB-C to Ethernet with 100W PD",
    price: "$15.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41dWhud2MGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D2RHMDTP?tag=theofficejournal-20",
    description: "A budget 2-in-1 Ethernet plus 100W PD charging adapter supporting 10/100/1000Mbps speeds, with an LED indicator for network status and a compact, lightweight design for travel.\n\nExplicitly lists Chromecast with Google TV compatibility and works across Windows, Android, macOS, and Linux, though it notes it is NOT compatible with Nintendo Switch.",
    specs: ["10/100/1000Mbps + 100W PD","LED network status indicator","Chromecast with Google TV compatible"],
    pros: ["Lowest price among the 100W PD Ethernet adapters in this cluster","LED indicator shows network status at a glance","Explicit Chromecast with Google TV compatibility","Durable nylon cable and aluminum exterior"],
    cons: ["Explicitly not compatible with Nintendo Switch","Fewer brand-warranty details published than Cable Matters or Belkin"],
    bestFor: "buyers prioritizing 10/100/1000mbps + 100w pd",
  },
  {
    id: "best-usb-c-ethernet-adapters-with-power-delivery-7",
    rank: 7,
    badge: "Best Multiport Hub with PD",
    name: "UGREEN Revodok 6-in-1 USB-C Hub",
    price: "$17.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41WgtcXJZYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BW2TLQ8S?tag=theofficejournal-20",
    description: "Turns a single USB-C port into 6: 4K@30Hz HDMI, Gigabit Ethernet, 100W PD charging (85W passthrough to the host), and 3x USB-A 3.0 ports at up to 5Gbps.\n\nUGREEN notes 15W of the 100W input is reserved for hub operation, and the USB-C port itself only supports charging, not data or video. A genuinely multi-function hub rather than a single-purpose dongle.",
    specs: ["6-in-1: 4K@30Hz HDMI, Gigabit Ethernet, 100W PD, 3x USB-A","85W passthrough to host laptop","5Gbps USB-A data transfer"],
    pros: ["Combines Ethernet with HDMI, charging, and three USB-A ports in one hub","85W passthrough charging keeps the laptop powered","5Gbps USB-A ports for fast peripheral transfers","Reduces desk clutter versus separate single-purpose dongles"],
    cons: ["HDMI capped at 4K@30Hz, not 60Hz","USB-C port itself is charging-only, no data or video passthrough"],
    bestFor: "buyers prioritizing 6-in-1: 4k@30hz hdmi, gigabit ethernet, 100w pd, 3x usb-a",
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
    "subheading": "100W vs 140W: What You Actually Need",
    "intro": "140W is only meaningfully better than 100W if you're charging a high-draw laptop like a 16-inch MacBook Pro under heavy load.",
    "table": {
      "headers": [
        "Device you're charging",
        "PD tier needed"
      ],
      "rows": [
        [
          "Phone or tablet",
          "100W is more than enough"
        ],
        [
          "Standard 13-15in laptop",
          "100W covers this comfortably"
        ],
        [
          "16in MacBook Pro or similar high-draw laptop",
          "140W avoids any charging bottleneck under load"
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
    "q": "Does the PD wattage rating include power for the Ethernet adapter itself?",
    "a": "Some do reserve a portion. UGREEN's multiport hub explicitly reserves 15W of its 100W input for the hub's own operation, delivering up to 85W to your device. Single-purpose Ethernet-plus-charging adapters like Belkin's and Cable Matters' generally pass through closer to the full rated wattage."
  },
  {
    "q": "Do I need a special charger to get the full PD wattage?",
    "a": "Yes. The adapter's PD rating is the maximum it can pass through, but you still need a charger and cable both rated for that wattage. A 65W charger plugged into a 140W-rated adapter will only deliver 65W."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-usb-c-ethernet-adapters-with-100w-charging","title":"7 Best USB-C Ethernet Adapters With 100W Charging"},{"href":"/guide/best-cable-matters-usb-c-ethernet-adapters","title":"6 Best Cable Matters USB-C Ethernet Adapters"},{"href":"/guide/best-usb-c-multiport-adapters-with-ethernet","title":"7 Best USB-C Multiport Adapters With Ethernet"}];
