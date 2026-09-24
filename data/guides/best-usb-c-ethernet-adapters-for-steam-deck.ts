export const guideSlug = "best-usb-c-ethernet-adapters-for-steam-deck";
export const guideTitle = "6 Best USB-C Ethernet Adapters for Steam Deck";
export const metaTitle = "Best Ethernet Adapters for Steam Deck";
export const metaDescription = "This guide covers both dedicated Steam Deck docks with Ethernet and standalone USB-C adapters that work with Steam Deck's SteamOS.";
export const mainKeyword = "usb-c ethernet adapters for steam deck";
export const introParagraphs = [
  "Valve's official Steam Deck Dock includes Gigabit Ethernet, proving the wired-networking use case for handheld gaming, but plenty of third-party docks and standalone adapters also work well on SteamOS, often at a lower price or with extra features like 4K@120Hz output.",
  "We covered both dedicated gaming-handheld docks (JSAUX, UGREEN, Anker) built specifically around Steam Deck's charging and display needs, and general-purpose USB-C Ethernet adapters that work fine on Steam Deck's Linux-based SteamOS without being marketed as gaming products."
];
export const lastUpdated = "2026-08-13";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41HZb8S6DNL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-usb-c-ethernet-adapters-for-steam-deck-1",
    rank: 1,
    badge: "Best Overall Dock (4K@120Hz)",
    name: "JSAUX 6-in-1 Docking Station for Steam Deck",
    price: "$35.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41HZb8S6DNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B7HVZNMB?tag=theofficejournal-20",
    description: "Built for gaming handhelds with 4K@120Hz HDMI 2.1 output, 100W PD charging, 3x USB-A 3.0 ports, and Gigabit Ethernet, now supporting ROG Ally X and Legion Go S alongside Steam Deck.\n\nJSAUX is explicit this does NOT work with ROG Xbox Ally or Xbox Ally X. The 100W charging fully supports ROG Ally's 30W Turbo Mode, though a 100W charger is recommended for best results.",
    specs: ["4K@120Hz HDMI 2.1, Gigabit Ethernet, 100W PD, 3x USB-A","Steam Deck, ROG Ally X, Legion Go S compatible","Not for ROG Xbox Ally/Xbox Ally X"],
    pros: ["4K@120Hz HDMI 2.1, double the refresh rate of most competing docks","Explicit ROG Ally X and Legion Go S compatibility added in this revision","Gigabit Ethernet for lag-free online gaming","Full 100W charging supports ROG Ally's Turbo Mode"],
    cons: ["Explicitly incompatible with ROG Xbox Ally and Xbox Ally X","Higher price than JSAUX's own 5-in-1 model"],
    bestFor: "buyers prioritizing 4k@120hz hdmi 2.1, gigabit ethernet, 100w pd, 3x usb-a",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-steam-deck-2",
    rank: 2,
    badge: "Best with VRR/FreeSync/G-Sync",
    name: "UGREEN Steam Deck Dock 6-in-1",
    price: "$31.97",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41zbjHOvkQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F249TYWY?tag=theofficejournal-20",
    description: "Supports 4K@120Hz HDMI 2.1 with VRR, FreeSync, and G-Sync alongside 100W PD 3.0 charging with built-in TVS, ESD, and over-current circuit protection.\n\nUGREEN's foldable aluminum alloy and PC+ABS stand design is genuinely portable, but explicitly notes it is NOT compatible with Nintendo Switch 2 despite broad handheld support otherwise.",
    specs: ["4K@120Hz HDMI 2.1 with VRR/FreeSync/G-Sync","100W PD 3.0 with TVS/ESD/over-current protection","Foldable aluminum + PC+ABS stand"],
    pros: ["VRR, FreeSync, and G-Sync support for tear-free gaming on compatible displays","Built-in circuit protection (TVS, ESD, over-current) for safety","Foldable stand design doubles as a handheld holder","Plug-and-play across Windows, macOS, Linux, and SteamOS"],
    cons: ["Explicitly not compatible with Nintendo Switch 2","Gigabit Ethernet only, not multi-gig"],
    bestFor: "buyers prioritizing 4k@120hz hdmi 2.1 with vrr/freesync/g-sync",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-steam-deck-3",
    rank: 3,
    badge: "Best Budget Dock",
    name: "JSAUX 5-in-1 Docking Station for Steam Deck",
    price: "$24.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41fS0ZzJhQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B28PCDM2?tag=theofficejournal-20",
    description: "A lighter version of JSAUX's 6-in-1 dock, dropping to dual USB-A 2.0 ports but keeping the 4K@120Hz HDMI 2.1 output, 100W PD charging, and reliable wired Ethernet.\n\nSame handheld compatibility as the 6-in-1 (Steam Deck, ROG Ally/Ally X, Legion Go/Go S), excluding ROG Xbox Ally, at a notably lower price point.",
    specs: ["4K@120Hz HDMI 2.1, Gigabit Ethernet, 100W PD, 2x USB-A 2.0","Same handheld compatibility as JSAUX 6-in-1","Lower price than the 6-in-1 model"],
    pros: ["Same 4K@120Hz HDMI 2.1 output as the pricier 6-in-1 model","Lower price point for buyers who don't need the extra USB-A port speed","Reliable wired Ethernet with low-latency performance","Full 100W PD charging support"],
    cons: ["USB-A ports downgraded to 2.0 speed versus the 6-in-1's 3.0 ports","Explicitly incompatible with ROG Xbox Ally/Xbox Ally X"],
    bestFor: "buyers prioritizing 4k@120hz hdmi 2.1, gigabit ethernet, 100w pd, 2x usb-a 2.0",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-steam-deck-4",
    rank: 4,
    badge: "Best Anker Dock",
    name: "Anker Steam Deck Dock 6-in-1",
    price: "$35.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31d9Ntso2PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CS6BWL4Q?tag=theofficejournal-20",
    description: "A dedicated Steam Deck dock with 100W PD-IN charging, 4K@60Hz HDMI, 1Gbps Ethernet, and 2 USB-A ports plus 1 USB-C port at 5Gbps each.\n\nAnker notes the USB-C data port does not support screen mirroring (only the HDMI port does), and includes a built-in 220mm USB-C cable in the box, backed by an 18-month warranty.",
    specs: ["4K@60Hz HDMI, 1Gbps Ethernet, 100W PD-IN, 3x 5Gbps USB","Built-in 220mm USB-C cable","18-month warranty"],
    pros: ["Built-in cable means nothing extra to carry for handheld gaming setups","1,000 Mbps Ethernet specifically positioned for competitive online play","Backed by Anker's established warranty and support","All three USB ports run at a full 5Gbps"],
    cons: ["4K@60Hz HDMI, not the 120Hz some competing docks offer","USB-C data port explicitly does not support screen mirroring"],
    bestFor: "buyers prioritizing 4k@60hz hdmi, 1gbps ethernet, 100w pd-in, 3x 5gbps usb",
  },
  {
    id: "best-usb-c-ethernet-adapters-for-steam-deck-5",
    rank: 5,
    badge: "Best Standalone Adapter",
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
    id: "best-usb-c-ethernet-adapters-for-steam-deck-6",
    rank: 6,
    badge: "Best Standalone Multiport Hub",
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
    "subheading": "Dedicated Dock vs Standalone Adapter",
    "cards": [
      {
        "label": "Docked, TV-connected gaming setup",
        "text": "A dedicated dock like JSAUX's or UGREEN's adds 4K HDMI output alongside Ethernet and charging, built specifically for this use case."
      },
      {
        "label": "Just want wired internet, no TV output needed",
        "text": "A standalone adapter like UGREEN's basic 1Gbps model is lighter and cheaper if you don't need HDMI."
      }
    ]
  },
  {
    "subheading": "Console Compatibility Gaps to Check",
    "note": "Several docks in this cluster explicitly exclude ROG Xbox Ally and Xbox Ally X despite supporting Steam Deck, ROG Ally, and Legion Go. Always verify your exact handheld model against the listing before buying."
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
    "q": "Does Steam Deck need a special Ethernet adapter, or will any USB-C one work?",
    "a": "SteamOS is Linux-based, so any USB-C Ethernet adapter with solid Linux driver support (like UGREEN's or Cable Matters' models) generally works fine. Dedicated Steam Deck docks add gaming-specific extras like HDMI output and higher-wattage charging tuned for the handheld's power draw."
  },
  {
    "q": "Why do some docks not support ROG Xbox Ally?",
    "a": "It comes down to how each dock's chipset negotiates power delivery and video output with that specific handheld's hardware. JSAUX and UGREEN both explicitly flag ROG Xbox Ally/Xbox Ally X as unsupported, even though they support Steam Deck, ROG Ally, and Legion Go."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-usb-c-multiport-adapters-with-ethernet","title":"7 Best USB-C Multiport Adapters With Ethernet"},{"href":"/guide/best-usb-c-to-gigabit-ethernet-adapters","title":"8 Best USB-C to Gigabit Ethernet Adapters"},{"href":"/guide/best-usb-c-ethernet-adapters-with-power-delivery","title":"7 Best USB-C Ethernet Adapters With Power Delivery"}];
