// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "USB-C is a connector, not a speed",
    "explanation": "A USB-C port can carry 10, 20, 40, or 80Gbps depending on the underlying protocol. Require the exact USB/Thunderbolt protocol and link rate from the listing, not USB-C wording alone, before assuming an enclosure matches your host's real speed."
  },
  {
    "criterion": "Check the bridge controller, not just the interface label",
    "explanation": "Two enclosures with the same 40Gbps label can behave differently depending on the bridge chip (ASM2464PD, JHL7440, RTL9210, and others each have different real-world characteristics). Where a listing names its controller, treat that as a real signal of build quality."
  },
  {
    "criterion": "Verify NVMe-only versus NVMe+SATA support",
    "explanation": "Some enclosures in this category support only NVMe M-Key SSDs, others add SATA/NGFF support via M+B Key. Confirm which protocol your specific SSD uses before buying, since a mismatch means the drive simply won't work."
  },
  {
    "criterion": "Separate peak benchmark speed from sustained performance",
    "explanation": "A short benchmark can hit peak speed even on a design that throttles heavily during long transfers. Favor listings that publish tested read/write numbers with a named SSD and host over theoretical link-rate claims alone."
  },
  {
    "criterion": "2 size and keying before buying",
    "explanation": "2230, 2242, 2260, and 2280 SSDs are not interchangeable in every enclosure, and M-Key versus B+M Key compatibility varies by product."
  },
  {
    "criterion": "Cable and host requirements can silently cap speed",
    "explanation": "A USB-C cable rated below the enclosure's maximum speed, or a host port that doesn't support the exact protocol claimed, will cap real throughput well below the advertised number. Check both before assuming full speed."
  }
];

export const faq = [
  {
    "q": "Does a faster enclosure automatically mean faster real-world transfers?",
    "a": "Real throughput depends on the SSD's own generation and speed, the bridge controller inside the enclosure, cable quality, and whether the host port actually supports the claimed protocol. A 40Gbps enclosure with a slow SSD won't outperform a 10Gbps enclosure with a fast one by much."
  },
  {
    "q": "2 NVMe SSD in any enclosure in this list?",
    "a": ""
  },
  {
    "q": "Why does my enclosure run slower than its advertised speed?",
    "a": "2 Gen 2x2 at 10Gbps, for example), an underrated USB-C cable, or sustained thermal throttling on a fanless design during a long transfer."
  }
];

export const guideSlug = "best-thunderbolt-5-ssd-enclosure-docks";

export const guideTitle = "The Best Thunderbolt 5 SSD Enclosure Docks for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/31trD9enlbL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "Match the Interface to Your Host",
    "intro": "Before buying, check your computer's exact port protocol, not just whether it has a USB-C connector.",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Any 10Gbps-rated pick above works at full speed"
        ],
        [
          "",
          "Confirm the enclosure specifically states Gen 2x2 support, not just USB-C"
        ],
        [
          "Thunderbolt / USB4 40Gbps or higher",
          "Check for genuine Thunderbolt/USB4 certification, not just a compatible claim"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "intro": "Interface speed, bridge controller sophistication, and cooling design all scale price in this category.",
    "cards": [
      {
        "label": "",
        "text": "A 10Gbps pick from this list covers most casual thunderbolt 5 ssd enclosure docks needs without paying for bandwidth you won't use."
      },
      {
        "label": "Video editing or large sustained transfers",
        "text": "Step up to a 40Gbps USB4/Thunderbolt pick with active cooling to avoid thermal throttling mid-transfer."
      },
      {
        "label": "",
        "text": "An 80Gbps Thunderbolt 5 enclosure or a RAID-capable multi-bay design is worth the premium if downtime or data loss has real cost."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Interface Protocol & Link Rate",
    "description": "Verified the exact USB/Thunderbolt protocol and rated speed from each listing rather than assuming USB-C connector shape implies a specific bandwidth tier."
  },
  {
    "title": "Bridge Controller & Host Compatibility",
    "description": "Checked which bridge chip each enclosure uses where published, and cross-referenced explicit host compatibility statements (Mac generation, Thunderbolt version, USB4 V1 vs V2) against real-world limitations sellers disclosed."
  },
  {
    "title": "2 Size, Keying & SSD Compatibility",
    "description": "2 lengths (2230/2242/2260/2280), keying (M-Key vs B+M Key), and NVMe-versus-SATA protocol support rather than assuming universal compatibility."
  },
  {
    "title": "Thermal Design & Sustained Performance",
    "description": "Weighed published tested throughput figures, fan trigger temperatures, and passive-versus-active cooling design over marketing language that repeats across nearly identical products."
  },
  {
    "title": "",
    "description": "Prioritized genuine differentiators, RAID mode support, write-lock switches, health-monitoring displays, magnetic attachment systems, over generic \"fast and durable\" claims with nothing behind them."
  }
];

export const introParagraphs = [
  "2 NVMe slot, and all of these functions share the same host bandwidth and power budget, meaning SSD performance can change when displays and other I/O are simultaneously active.",
  "We required a real NVMe slot inside the dock, not just external-drive passthrough, and checked what each dock actually shares: UGREEN's Maxidok packs 17 total ports on one Thunderbolt 5 link, while HyperDrive's unique Thunderbolt Share feature lets two PCs share the dock's resources entirely."
];

export const lastUpdated = "2026-08-13";

export const mainKeyword = "thunderbolt 5 ssd enclosure docks";

export const metaDescription = "We compared 5 thunderbolt 5 SSD enclosure docks on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Thunderbolt 5 SSD Enclosure Docks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-thunderbolt-5-ssd-enclosure-docks-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "UGREEN Maxidok Thunderbolt 5 Dock",
    "price": "$369.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31trD9enlbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FRM8Q873?tag=theofficejournal-20",
    "description": "2 slot for 2230-2280 SSDs up to 8TB, positioned as a full workstation hub rather than a pure storage enclosure.\n\nAI smart cooling with a 60mm fan keeps noise below 30dB under heavy load, though UGREEN notes SSDs with a heatsink wider than 24mm (including several popular models) are not compatible.",
    "specs": [
      "120Gbps Thunderbolt 5, 17 ports total",
      "Built-in NVMe Gen4x4 slot, up to 8TB",
      "240W system power, 2.5GbE Ethernet"
    ],
    "pros": [
      "Intel-certified Thunderbolt 5 at up to 120Gbps, among the fastest hosts in this cluster",
      "17 total ports covers nearly every peripheral need in one dock",
      "Built-in 2.5GbE Ethernet for fast, stable wired networking",
      "240W total system power for multi-device charging"
    ],
    "cons": [
      "Explicitly incompatible with several popular heatsink-equipped SSDs wider than 24mm",
      "Storage is one feature among many, a poor fit if you only need NVMe storage"
    ],
    "bestFor": "Buyers prioritizing 120gbps thunderbolt 5, 17 ports total"
  },
  {
    "id": "best-thunderbolt-5-ssd-enclosure-docks-2",
    "rank": 2,
    "badge": "Runner-Up",
    "name": "Satechi Thunderbolt 5 CubeDock",
    "price": "$399.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31Pkc+S9DWL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7VZKXPZ?tag=theofficejournal-20",
    "description": "2 storage at up to 6,000MB/s, directly from the dock with no separate external drive needed.\n\nSupports single 8K@144Hz, dual 8K@120Hz, or triple 8K@60Hz displays on Windows, or dual 6K@60Hz on macOS M3/M4/M5, no drivers or DisplayLink required. Adaptive cooling keeps fan noise between 20-40dB(A) even during long renders or backups, backed by Satechi's 2-year warranty.",
    "specs": [
      "120Gbps Thunderbolt 5, built-in NVMe up to 6,000MB/s",
      "Up to 8TB M.2 storage, PCIe 4x4",
      "Triple 8K display support (Windows)"
    ],
    "pros": [
      "Built-in NVMe storage at up to 6,000MB/s avoids needing a separate external drive",
      "140W host charging alongside 120Gbps data and display output",
      "Triple 8K display support on Windows without drivers or DisplayLink",
      "2-year Satechi warranty"
    ],
    "cons": [
      "Cube form factor is desk-first, not designed for portability",
      "Premium price reflects the combined dock-plus-storage feature set, not a dedicated storage value"
    ],
    "bestFor": "Buyers prioritizing 120gbps thunderbolt 5, built-in nvme up to 6,000mb/s"
  },
  {
    "id": "best-thunderbolt-5-ssd-enclosure-docks-3",
    "rank": 3,
    "badge": "Also Great",
    "name": "HyperDrive Next Thunderbolt 5 Dock",
    "price": "$319.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31A6WwQw03L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GR6SQYNS?tag=theofficejournal-20",
    "description": "2 PCIe Gen4 x4 and Gen 3 slot, distinguished by Thunderbolt Share: connecting two PCs to share files, devices, and control with low latency and no network required, letting one keyboard and mouse control both computers.\n\n5G Ethernet and both Nano and Standard security lock slots for physical theft deterrence in shared office settings.",
    "specs": [
      "120Gbps Thunderbolt 5, built-in M.2 PCIe Gen4x4 slot",
      "Thunderbolt Share: control 2 PCs from 1 keyboard/mouse",
      "Triple 4K@60Hz or single 8K@144Hz display support"
    ],
    "pros": [
      "Thunderbolt Share is a unique feature, no other dock in this cluster offers cross-PC control",
      "Both Nano and Standard security lock slots for shared/office environments",
      "Supports high-capacity NVMe SSDs plus PCIe-based AI accelerator modules",
      "2.5G Ethernet included"
    ],
    "cons": [
      "macOS and Chrome OS are limited to two displays versus three on Windows",
      "Thunderbolt Share requires two compatible PCs to be useful, a narrower use case"
    ],
    "bestFor": "buyers prioritizing 120gbps thunderbolt 5, built-in m.2 pcie gen4x4 slot"
  },
  {
    "id": "best-thunderbolt-5-ssd-enclosure-docks-4",
    "rank": 4,
    "badge": "Strong Alternative",
    "name": "MOKiN 80Gbps NVMe Enclosure with LCD Display",
    "price": "$151.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41LWoUFub-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FWC16GK6?tag=theofficejournal-20",
    "description": "Combines the Intel JHL9480 and RTL9210B chipset for PCIe Gen5 SSD support at up to 80Gbps, transferring 100GB in about 15 seconds, which MOKiN says is 6-7x faster than a 10Gbps reader. A unique LCD screen shows real-time temperature status (Normal/Medium/High) and fan speed.\n\nThe active fan starts at 40°C across three speed levels (Low/Medium/High) to prevent thermal throttling. 0, though 80Gbps specifically requires a Thunderbolt 5 port and cable.",
    "specs": [
      "Up to 80Gbps via JHL9480+RTL9210B, PCIe Gen5",
      "LCD display shows temp status + fan speed",
      "3-speed active fan (40°C trigger)"
    ],
    "pros": [
      "Only enclosure in this cluster with an LCD status display, not just LEDs",
      "Dual-chip design supports PCIe Gen5 SSDs",
      "3-speed fan control gives finer thermal management than auto-only designs",
      "Works across Thunderbolt 5/4/3 and USB4 for broad host compatibility"
    ],
    "cons": [
      "Full 80Gbps requires a genuine Thunderbolt 5 port and cable",
      "Higher price than single-chip 40Gbps alternatives"
    ],
    "bestFor": "Buyers prioritizing up to 80gbps via jhl9480+rtl9210b, pcie gen5"
  },
  {
    "id": "best-thunderbolt-5-ssd-enclosure-docks-5",
    "rank": 5,
    "badge": "Budget Pick",
    "name": "ACASIS 80Gbps Thunderbolt 5 Enclosure",
    "price": "$152.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/415akCu3nZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXF5SV2L?tag=theofficejournal-20",
    "description": "4-or-higher SSD is needed to exceed 3,000MB/s). The smart cooling fan auto-starts at 55°C and stops at 40°C, with a manual override via a 1-second button hold.\n\n0, but ACASIS explicitly states it is NOT compatible with Thunderbolt 3 devices. Ships with the 80Gbps cable, silicone stoppers, an SSD size adapter, and thermal pads.",
    "specs": [
      "Up to 6,000MB/s via JHL9480, USB4 V2.0/80Gbps",
      "Smart auto fan (55°C on, 40°C off)",
      "Not compatible with Thunderbolt 3"
    ],
    "pros": [
      "Smart auto-cooling fan with a manual override switch",
      "Ships with a complete accessory kit (cable, stoppers, SSD adapter, thermal pads)",
      "Supports PCIe 5.0 SSDs for future-proofing",
      "6,000MB/s rated throughput"
    ],
    "cons": [
      "Explicitly incompatible with Thunderbolt 3 hosts",
      "Needs a PCIe 4.0 x4 NVMe 1.4+ SSD to exceed 3,000MB/s"
    ],
    "bestFor": "buyers prioritizing up to 6,000mb/s via jhl9480, usb4 v2.0/80gbps"
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-thunderbolt-5-ssd-enclosures",
    "title": "6 Best Thunderbolt 5 SSD Enclosures in 2026"
  },
  {
    "href": "/guide/best-thunderbolt-5-nvme-enclosures",
    "title": "6 Best Thunderbolt 5 NVMe Enclosures in 2026"
  },
  {
    "href": "/guide/best-thunderbolt-3-ssd-enclosures",
    "title": "4 Best Thunderbolt 3 SSD Enclosures in 2026"
  }
];

export const breadcrumbLabel = "Best Thunderbolt 5 SSD Enclosure Docks";
