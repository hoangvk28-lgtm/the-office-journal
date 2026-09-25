// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "A PoE HAT's Isolation Rating Determines Its Safety Margin With Non-Compliant or Passive PoE Sources",
    "explanation": "The LoveRPi pick specifically states 3KV galvanic isolation designed for switches and power sourcing equipment that don't provide their own PSE-side isolation, a notably higher protection margin than a standard isolated SMPS design without a specifically stated isolation voltage. 3af/at switch with its own proper isolation. Check a PoE HAT's specifically stated isolation voltage rating if your PoE source is passive or non-standard, rather than assuming any 'isolated' claim provides equivalent protection."
  },
  {
    "criterion": "A HAT's Physical Size Directly Affects Whether It Fits Inside Your Specific Raspberry Pi Case",
    "explanation": "The UCTRONICS pick specifically states a 65mm by 44mm by 13mm footprint, nearly half the size of the official Raspberry Pi PoE HAT, a real space consideration if you're using a compact case that the larger official HAT or the similarly-sized waveshare pick wouldn't fit inside without modification. This matters if you've already selected a specific compact case for your Pi project, and matters less if you're using an open frame or a case specifically designed to accommodate the official HAT's larger dimensions. Measure your specific case's internal clearance against a HAT's stated dimensions before assuming any PoE HAT fits your particular enclosure."
  },
  {
    "criterion": "Additional Output Ports on a PoE HAT Can Power Accessories Beyond Just the Raspberry Pi Itself",
    "explanation": "The waveshare pick specifically includes both 5V USB-An and 12V header outputs beyond just powering the Pi, letting you connect and power an additional external device like a fan, sensor, or display from the same HAT without a separate power source. This matters if your project includes accessories that need their own power beyond what the Pi itself draws, and matters less if your setup only needs to power the bare Raspberry Pi board. Check whether a PoE HAT offers additional output ports if your specific project includes accessories requiring separate power delivery."
  },
  {
    "criterion": "The Raspberry Pi Zero Series Requires a Fundamentally Different HAT Than the Pi 4B or 3B+ Due to No Native Ethernet",
    "explanation": "The Waveshare PoE Ethernet USB HUB HAT is specifically designed for the Pi Zero, Zero W, and Zero 2 W boards, which have no native Ethernet port at all, meaning this HAT must add both Ethernet connectivity and PoE power simultaneously, a fundamentally different requirement than the Pi 4B/3B+ HATs that only need to add power since those boards already have built-in Ethernet. This matters significantly since a standard Pi 4B/3B+ PoE HAT physically won't work with the Zero series' different GPIO layout and lack of Ethernet hardware. Verify your specific Raspberry Pi model (Zero series versus 4B/3B+) before purchasing a PoE HAT, since these two HAT categories are not interchangeable."
  },
  {
    "criterion": "Active Cooling Fans on a PoE HAT Address Real Heat Generation That Passive Designs Require External Ventilation to Manage",
    "explanation": "The waveshare pick specifically includes an onboard active cooling fan for better heat dissipation, while the UCTRONICS pick explicitly recommends ensuring adequate air circulation since it becomes hot during normal operation without its own fan, a real difference in thermal management approach between the two HATs. This matters if you're installing the Pi in an enclosed case with limited airflow, where an onboard fan provides more reliable cooling, and matters less if your Pi sits in an open, well-ventilated location where passive cooling is adequate. Check whether a HAT includes active cooling or relies on your case providing adequate passive airflow before finalizing your case and cooling setup together."
  }
];

export const faq = [
  {
    "q": "Do I need a PoE HAT or a separate PoE splitter box for my Raspberry Pi?",
    "a": "A PoE HAT mounts directly onto the Pi's GPIO header without a separate box, the more common and integrated solution for Pi 4B/3B+ specifically, while a separate splitter with a USB-C or Micro USB cable is a more universal option that also works with non-Pi devices."
  },
  {
    "q": "What's the most common mistake buyers make when choosing a PoE HAT for Raspberry Pi?",
    "a": "Assuming any PoE HAT fits any Raspberry Pi model, when the Pi Zero series requires a fundamentally different HAT design that adds both Ethernet and power, incompatible with the standard Pi 4B/3B+ HATs in this comparison."
  },
  {
    "q": "Is the LoveRPi HAT worth it for just a single Raspberry Pi, not a cluster?",
    "a": "The LoveRPi's cluster-oriented design and 3KV isolation work fine for a single Pi too, and its lower price makes it a reasonable choice even for non-cluster use, though the waveshare or UCTRONICS picks may better suit specific single-board needs like accessory power or compact size."
  },
  {
    "q": "Can I use these PoE HATs with a passive PoE injector instead of a standard switch?",
    "a": "3af/at switches, making it the most flexible choice in this comparison for passive PoE sources."
  },
  {
    "q": "Does a PoE HAT need active cooling to work reliably?",
    "a": "The waveshare pick includes an onboard fan for active cooling, while the UCTRONICS and LoveRPi picks specifically recommend ensuring adequate case ventilation since they can run hot without their own fan, so checking your case's airflow before installation is worth doing."
  },
  {
    "q": "Will a Raspberry Pi 4B PoE HAT work with my Raspberry Pi Zero?",
    "a": "No, the Pi Zero series has a different form factor and no native Ethernet port, requiring a specifically designed HAT like the Waveshare PoE Ethernet USB HUB HAT rather than a standard Pi 4B/3B+ PoE HAT."
  }
];

export const guideSlug = "best-poe-splitter-for-raspberry-pi";

export const guideTitle = "The Best PoE Splitters for Raspberry Pi, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/41dwyh3OFxL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "To power additional accessories alongside the Pi",
          "Waveshare Power Over Ethernet (PoE) HAT"
        ],
        [
          "The smallest HAT footprint for a compact case",
          "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+"
        ],
        [
          "Higher isolation for a multi-board cluster deployment",
          "LoveRPi Power-Over-Ethernet (PoE) HAT, 3KV Isolated"
        ],
        [
          "PoE power plus new Ethernet/USB for a Pi Zero",
          "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          ""
        ],
        [
          "",
          ""
        ],
        [
          "",
          ""
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "Single-Board Convenience vs Multi-Board Cluster Design",
    "cards": [
      {
        "label": "",
        "text": "Both are optimized for a single Raspberry Pi 4B or 3B+, with the waveshare adding accessory power output and UCTRONICS prioritizing a compact footprint."
      },
      {
        "label": "",
        "text": "Specifically built and marketed for powering five, ten, or twenty Pi boards from one PoE switch, with higher 3KV isolation for that demanding use case."
      }
    ],
    "note": "If you're running a single Raspberry Pi, the waveshare or UCTRONICS picks fit that need well. If you're building a Pi cluster with multiple boards on one PoE switch, the LoveRPi's cluster-specific design and higher isolation are worth prioritizing."
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "Raspberry Pi 4B or 3B+",
          "Waveshare, UCTRONICS, or LoveRPi HAT"
        ],
        [
          "Raspberry Pi Zero/Zero W/2 W",
          "Waveshare PoE Ethernet USB HUB HAT"
        ],
        [
          "Multiple Pi 4B units in a cluster",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "For a Raspberry Pi Zero Project Specifically",
    "cards": [
      {
        "label": "",
        "text": "A HAT that adds genuine Ethernet connectivity, not just power, since the Pi Zero series has no native Ethernet port at all unlike the Pi 4B or 3B+."
      },
      {
        "label": "",
        "text": "The Waveshare PoE Ethernet USB HUB HAT specifically adds an RJ45 Ethernet port and 3 USB ports to the Pi Zero, solving both the power and connectivity gap at once."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "99 price is justified by solving both needs at once."
      },
      {
        "label": "",
        "text": "01, the lowest price in this comparison."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Compared standard isolated SMPS designs against higher galvanic isolation ratings like 3KV."
  },
  {
    "title": "Power Budget and Output Options",
    "description": "Compared total wattage and whether the HAT offers additional output ports beyond just powering the Pi."
  },
  {
    "title": "",
    "description": "Compared Pi 4B/3B+ compatibility against Pi Zero series support."
  },
  {
    "title": "",
    "description": "Compared onboard active cooling fans against passive designs requiring external ventilation."
  },
  {
    "title": "",
    "description": "Compared features specifically relevant to deploying many Pi boards from one PoE switch."
  }
];

export const introParagraphs = [
  "For Raspberry Pi specifically, a PoE HAT that mounts directly onto the board's GPIO header is the more common solution than a separate splitter box and cable, delivering power directly without an external adapter cluttering your setup, but the isolation rating and power budget vary enough to matter for reliability and multi-board deployments.",
  "We compared this lineup on real isolation rating and power budget, since one listing specifically reaches 3KV galvanic isolation designed to exceed the official Raspberry Pi PoE HAT's power delivery standards, built specifically for cluster deployments running many boards from one PoE switch."
];

export const lastUpdated = "2026-09-16";

export const mainKeyword = "best poe splitter for raspberry pi";

export const metaDescription = "We compared 4 PoE splitters for raspberry pi on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best PoE Splitters for Raspberry Pi (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-poe-splitter-for-raspberry-pi-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "waveshare Power Over Ethernet (PoE) HAT",
    "price": "$24.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dwyh3OFxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0928ZD7QQ?tag=theofficejournal-20",
    "description": "This HAT's listing specifically states an onboard high-speed active cooling fan combined with 5V USB-An and 12V header outputs, letting it power additional external devices beyond just the Raspberry Pi itself, a more versatile output configuration than a single-output HAT. Its fully isolated switch mode power supply (SMPS) with an MP8676 buck chip provides real electrical isolation.\n\nCompared to the UCTRONICS and LoveRPi picks below, this one's dual output design specifically supporting both USB-An and 12V header connections gives it flexibility to power a fan, display, or other accessory alongside the Pi.\n\nBest for buyers who want to power additional external accessories alongside the Raspberry Pi from the same HAT.",
    "specs": [
      "802.3af/at compliant, isolated SMPS",
      "5V USB-A + 12V header dual outputs",
      "Onboard active cooling fan, MP8676 buck chip"
    ],
    "pros": [
      "Dual output design powers additional accessories beyond the Pi",
      "Onboard active cooling fan improves heat dissipation",
      "Supports both 802.3af and higher-power 802.3at standards"
    ],
    "cons": [
      "Highest price in this comparison at $24.99",
      "Larger footprint than the compact UCTRONICS pick"
    ],
    "bestFor": "Buyers who want to power additional external accessories alongside the Raspberry Pi"
  },
  {
    "id": "best-poe-splitter-for-raspberry-pi-2",
    "rank": 2,
    "badge": "Best Compact Design",
    "name": "UCTRONICS PoE HAT for Raspberry Pi 4B/3B+",
    "price": "$18.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Mx4-8ByUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082ZLDMZ6?tag=theofficejournal-20",
    "description": "This HAT's listing specifically states a compact 65mm by 44mm by 13mm size, nearly half the official Raspberry Pi PoE HAT's dimensions, saving genuine space for other hardware inside a Pi case. Its update to compatibility with 48V non-standard switches broadens support beyond strictly IEEE-compliant PoE sources.\n\nCompared to the waveshare pick above, this one's smaller footprint fits inside more Raspberry Pi cases without modification, though its listing specifically recommends adequate air circulation since it can run hot without the waveshare's onboard fan.\n\nBest for buyers who need the smallest HAT footprint to fit inside a compact Raspberry Pi case.",
    "specs": [
      "65x44x13mm, nearly half the official HAT's size",
      "5V/2.5A output, 12.5W total power budget",
      "IEEE 802.3af compliant, 48V non-standard switch support"
    ],
    "pros": [
      "Nearly half the size of the official Raspberry Pi PoE HAT",
      "Compatible with 48V non-standard switches for broader support",
      "Lower price than the waveshare pick above"
    ],
    "cons": [
      "No onboard cooling fan, requires adequate ventilation",
      "Lower 12.5W power budget than the LoveRPi cluster-oriented pick"
    ],
    "bestFor": "Buyers who need the smallest HAT footprint to fit inside a compact Raspberry Pi case"
  },
  {
    "id": "best-poe-splitter-for-raspberry-pi-3",
    "rank": 3,
    "badge": "Best for Cluster Deployments",
    "name": "LoveRPi Power-Over-Ethernet (PoE) HAT, 3KV Isolated",
    "price": "$15.01",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41Q1t9q0pPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07XB5PR9J?tag=theofficejournal-20",
    "description": "3at, and passive DC 48V network switches, a notably higher isolation rating built specifically for applications with non-compliant switches lacking their own PSE-side isolation. Its listing specifically frames the product around powering five, ten, or twenty Raspberry Pi boards through a single PoE switch for cluster node deployments.\n\nCompared to the waveshare and UCTRONICS picks above, this one's explicit cluster-computing framing and 3KV isolation target buyers building an on-premise Pi cluster rather than a single standalone board.\n\nBest for buyers building a multi-board Raspberry Pi cluster who need higher isolation and simplified cable management.",
    "specs": [
      "3KV galvanic isolation, 802.3af/at/passive DC 48V",
      "Built for multi-board cluster deployments",
      "Lowest price in this comparison"
    ],
    "pros": [
      "Lowest price in this comparison at $15.01",
      "3KV isolation rating exceeds standard HAT designs",
      "Specifically designed and marketed for multi-board cluster deployments"
    ],
    "cons": [
      "Requires removing non-essential heatsinks before installation",
      "Explicitly needs a ventilated case with active cooling fan"
    ],
    "bestFor": "Buyers building a multi-board Raspberry Pi cluster who need higher isolation"
  },
  {
    "id": "best-poe-splitter-for-raspberry-pi-4",
    "rank": 4,
    "badge": "Best for Raspberry Pi Zero",
    "name": "Waveshare PoE Ethernet USB HUB HAT for Raspberry Pi Zero",
    "price": "$33.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41W9cwDwbIL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09PZY3HGV?tag=theofficejournal-20",
    "description": "This HAT's listing specifically states compatibility with the Raspberry Pi Zero, Zero W, and Zero 2 W boards, a different Pi form factor than the Pi 4B/3B+ HATs in this comparison, since the compact Zero series has no native Ethernet or PoE support of its own.\n\nCompared to the Pi 4/3B+ HATs above, this one includes a quality ABS case with two interchangeable lids, adding both PoE power and new Ethernet and USB connectivity that the Zero series doesn't natively have.\n\nBest for Raspberry Pi Zero owners who need to add both PoE power and Ethernet connectivity in one HAT.",
    "specs": [
      "For Raspberry Pi Zero/Zero W/2 W",
      "Adds RJ45 Ethernet + 3 USB 2.0/1.1 ports",
      "802.3af compliant, includes ABS case with 2 lids"
    ],
    "pros": [
      "Specifically designed for the Pi Zero series, which lacks native Ethernet",
      "Adds both PoE power and new Ethernet/USB connectivity in one HAT",
      "Includes a case with interchangeable lids"
    ],
    "cons": [
      "Highest price in this comparison at $33.99",
      "Not compatible with Pi 4B/3B+ boards, only the Zero series"
    ],
    "bestFor": "Raspberry Pi Zero owners who need to add both PoE power and Ethernet connectivity"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-poe-splitter",
    "title": "Best PoE Splitters"
  },
  {
    "href": "/guide/best-5v-poe-splitter",
    "title": "Best 5V USB PoE Splitters"
  },
  {
    "href": "/guide/best-usb-c-poe-splitter",
    "title": "Best USB-C PoE Splitters"
  },
  {
    "href": "/guide/best-gigabit-poe-splitter",
    "title": "Best Gigabit PoE Splitters"
  }
];

export const breadcrumbLabel = "Best PoE Splitters for Raspberry Pi";
