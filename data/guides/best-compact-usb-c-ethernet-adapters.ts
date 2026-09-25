// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "USB-C is a connector, not a speed",
    "explanation": "A USB-C port can carry anywhere from 1Gbps to 10Gbps of Ethernet depending on the adapter's chipset and your host's actual USB generation. Check the exact Ethernet speed and required USB mode before assuming any USB-C adapter matches your needs."
  },
  {
    "criterion": "Multi-gig speeds need a fast enough USB port",
    "explanation": "0 (5Gbps) port will not reach its rated Ethernet speed. 2 Gen 2 (10Gbps) port or Thunderbolt/USB4 host."
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
    "q": "Does a smaller adapter mean worse performance?",
    "a": "Not necessarily for Gigabit-tier adapters, they're simple enough that size doesn't meaningfully affect thermal performance. 5G/5G/10G speeds, where a larger aluminum body can help dissipate heat during sustained transfers."
  }
];

export const guideSlug = "best-compact-usb-c-ethernet-adapters";

export const guideTitle = "The Best Compact USB-C Ethernet Adapters for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/31qWnFxWYaL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "intro": "6in), letting you confirm it fits your travel bag or laptop sleeve exactly. Other adapters describe themselves as \"compact\" without a number to verify."
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "5G/5G/10G) and, where published, the specific Realtek, Marvell, or other controller chip driving it, rather than assuming USB-C connector shape implies a speed tier."
  },
  {
    "title": "",
    "description": "2 Gen 2 vs Thunderbolt/USB4) and confirmed OS support, since several products in this cluster have real exclusions (Android, Nintendo Switch, older Apple silicon)."
  },
  {
    "title": "",
    "description": "Favored listings that publish honest real-world throughput or explicit host-speed caveats over ones that only quote the theoretical link rate."
  },
  {
    "title": "",
    "description": "Weighed braided cable construction, aluminum housing, and reinforced connectors, since these adapters see frequent plug/unplug cycles in daily use."
  },
  {
    "title": "",
    "description": "Prioritized real differences like Wake-on-LAN, PXE boot, PD passthrough wattage, and multiport expansion over marketing language that repeats across nearly identical adapters."
  }
];

export const introParagraphs = [
  "6in and folds flat, while several competitors don't publish exact dimensions at all, making direct size comparison difficult without physically measuring.",
  "We prioritized adapters with published exact dimensions and favored foldable or non-slip designs that specifically address not blocking an adjacent port, a real problem on ultraportable laptops with closely-spaced USB-C ports."
];

export const lastUpdated = "2026-08-13";

export const mainKeyword = "compact usb-c ethernet adapters";

export const metaDescription = "We compared 5 compact USB-C ethernet adapters on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Compact USB-C Ethernet Adapters for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-compact-usb-c-ethernet-adapters-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Anker USB-C to Ethernet Adapter",
    "price": "$15.53",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31qWnFxWYaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08CK9X9Z8?tag=theofficejournal-20",
    "description": "A 1Gbps USB-C to Ethernet adapter with a sleek aluminum exterior and braided nylon cable, at just over half an inch thick and roughly the weight of an AA battery.\n\nBacked by Anker's 18-month warranty and customer service. 0 devices, a straightforward pick when you want a name-brand adapter without extra features.",
    "specs": [
      "1Gbps, USB-C 3.0",
      "Aluminum body + braided nylon cable",
      "18-month warranty"
    ],
    "pros": [
      "Aluminum exterior and braided cable for durability",
      "Extremely compact and lightweight design",
      "Backed by Anker's established warranty and support",
      "Simple, no-frills single-purpose adapter"
    ],
    "cons": [
      "No PD charging or extra ports",
      "Requires CAT6+ cable to hit full 1Gbps"
    ],
    "bestFor": "buyers prioritizing 1gbps, usb-c 3.0"
  },
  {
    "id": "best-compact-usb-c-ethernet-adapters-2",
    "rank": 2,
    "badge": "Most Compact (Published Dimensions)",
    "name": "TP-Link UE300C USB-C to Ethernet Adapter",
    "price": "$10.93",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21mcicfhKHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08HQBC678?tag=theofficejournal-20",
    "description": "1/8/7, macOS, Chrome OS, and Linux (Ubuntu), backed by TP-Link's status as a signatory of CISA's Secure-by-Design pledge.\n\nExplicitly lists compatibility with Dell XPS 13/15, Surface Laptop 3, Google Pixelbook, Lenovo ThinkPad X1 Carbon and Yoga models. The foldable design is a genuine space-saver for a laptop bag compared to rigid competitors.",
    "specs": [
      "1Gbps, driver-free including Linux",
      "2.8 x 1.0 x 0.6in foldable design",
      "CISA Secure-by-Design pledge signatory"
    ],
    "pros": [
      "Foldable design is more compact than rigid competitors for travel",
      "Driver-free on Linux (Ubuntu), not all competitors support this out of the box",
      "CISA Secure-by-Design commitment is a real security signal",
      "Explicit ThinkPad and Surface compatibility notes"
    ],
    "cons": [
      "1Gbps ceiling only, no multi-gig variant in this listing",
      "No extra ports or PD charging"
    ],
    "bestFor": "Buyers prioritizing 1gbps, driver-free including linux"
  },
  {
    "id": "best-compact-usb-c-ethernet-adapters-3",
    "rank": 3,
    "badge": "Best Non-Slip Design",
    "name": "uni USB-C to Ethernet Adapter 1Gbps",
    "price": "$15.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/414juUaWOEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B077KXY71Q?tag=theofficejournal-20",
    "description": "A driver-free 1Gbps adapter with a non-slip design for easier plugging, braided nylon cable, and premium aluminum casing for heat dissipation, explicitly designed not to block adjacent USB-C ports.\n\nLists extensive device compatibility including iPhone 15/16 Pro/Max and multiple MacBook generations, but is explicit it does NOT work with Nintendo Switch. Comes with an 18-month warranty and 24/7 customer service.",
    "specs": [
      "1Gbps, driver-free on most OSes",
      "Non-slip, port-clearing design",
      "18-month warranty"
    ],
    "pros": [
      "Non-slip design keeps adjacent USB-C ports accessible",
      "Broad device compatibility list including recent iPhones",
      "Aluminum casing for better heat dissipation",
      "24/7 customer support with fast response claim"
    ],
    "cons": [
      "Explicitly not compatible with Nintendo Switch",
      "Requires CAT6+ cable to reach full 1Gbps"
    ],
    "bestFor": "Buyers prioritizing 1gbps, driver-free on most oses"
  },
  {
    "id": "best-compact-usb-c-ethernet-adapters-4",
    "rank": 4,
    "badge": "Strong Alternative",
    "name": "BENFEI USB-C to Ethernet Adapter",
    "price": "$9.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DQZgg+g2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XTGKP5M?tag=theofficejournal-20",
    "description": "A 1Gbps Thunderbolt 3/4 compatible adapter with braided nylon cable and aluminum casing for heat insulation, backed by BENFEI's 18-month unconditional warranty.\n\nLike the uni adapter, BENFEI is explicit that this does NOT work with Nintendo Switch, despite otherwise broad compatibility with recent iPhones, MacBooks, and Samsung devices.",
    "specs": [
      "1Gbps, Thunderbolt 3/4 compatible",
      "Braided nylon cable, aluminum casing",
      "18-month unconditional warranty"
    ],
    "pros": [
      "18-month unconditional warranty with responsive customer service",
      "Braided cable and aluminum casing for durability",
      "Broad compatibility across iPhone, MacBook, and Samsung devices",
      "Snug USB-C connector fit for stable signal transfer"
    ],
    "cons": [
      "Explicitly not compatible with Nintendo Switch",
      "Requires CAT6+ cable for full 1Gbps"
    ],
    "bestFor": "Buyers prioritizing 1gbps, thunderbolt 3/4 compatible"
  },
  {
    "id": "best-compact-usb-c-ethernet-adapters-5",
    "rank": 5,
    "badge": "Runner-Up",
    "name": "UGREEN USB-C to Ethernet Adapter (1Gbps)",
    "price": "$12.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dlards86L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082K62S48?tag=theofficejournal-20",
    "description": "1/8, macOS, Chrome OS, Android need no driver; Windows XP/7/Vista and Linux need one) with an aluminum alloy case for heat dissipation and an LED status indicator.\n\nUGREEN explicitly lists compatibility with Nintendo Switch and Steam Deck alongside standard laptops and phones, a notable differentiator since several competitors in this cluster exclude Switch support.",
    "specs": [
      "1Gbps, driver-free on most OSes",
      "Aluminum alloy case, LED status light",
      "Nintendo Switch + Steam Deck compatible"
    ],
    "pros": [
      "Explicitly compatible with both Nintendo Switch and Steam Deck",
      "Driver-free on the most common operating systems",
      "Reinforced cable tail and wear-resistant port for durability",
      "LED indicator shows connection status at a glance"
    ],
    "cons": [
      "Not driver-free on Windows XP/7/Vista or Linux",
      "1Gbps ceiling, no multi-gig option in this specific model"
    ],
    "bestFor": "Buyers prioritizing 1gbps, driver-free on most oses"
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-usb-c-ethernet-adapters-for-macbook-air",
    "title": "8 Best USB-C Ethernet Adapters for MacBook Air"
  },
  {
    "href": "/guide/best-usb-c-to-gigabit-ethernet-adapters",
    "title": "8 Best USB-C to Gigabit Ethernet Adapters"
  },
  {
    "href": "/guide/best-usb-c-to-ethernet-adapters",
    "title": "8 Best USB-C to Ethernet Adapters in 2026"
  }
];

export const breadcrumbLabel = "Best Compact USB-C Ethernet Adapters";
