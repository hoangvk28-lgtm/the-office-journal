// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-docking-stations-for-small-desks";

export const guideTitle = "The Best Compact Docking Stations for Small Desks";

export const breadcrumbLabel = "Best Docks for Small Desks";

export const metaTitle = "Best Compact Docking Stations for Small Desks (2026)";

export const metaDescription = "We compared compact laptop docks for small desks on size, display outputs, ports and charging, from a slim UGREEN hub to detachable and Mac-focused docks.";

export const mainKeyword = "docking station for small desk";

export const introParagraphs = [
  "On a small desk, a dock should add ports without adding clutter. Compact bar-shaped hubs sit beside the laptop or tuck under a stand; larger docks with power bricks take more space but can charge the laptop themselves.",
  "The other questions are the usual ones: how many monitors your laptop can actually drive through the dock (base MacBooks and many Windows laptops support fewer than a dock's outputs suggest), whether you need Ethernet or a card reader, and whether the dock passes through your charger's power or has its own.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $27 to $150 at the time of writing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41HZ73O5J4L._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "ugreen-revodok-pro-210-10-in-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "UGREEN Revodok Pro 210 10-in-1 USB C Docking Station",
    "price": "$39.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41HZ73O5J4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BXDQS4BD?tag=theofficejournal-20",
    "description": "The UGREEN Revodok Pro 210 is the sensible choice for a small desk: a compact 10-in-1 hub with two HDMI outputs listed for 4K 60Hz, gigabit Ethernet, an SD/TF reader, 5Gbps USB and 100W pass-through, for about $40 at the time of writing.\n\nIt is small enough to sit beside the laptop. Dual extended displays depend on your laptop.",
    "specs": [
      "Ports: 10-in-1",
      "Outputs: 2 x HDMI 4K 60Hz",
      "Gigabit Ethernet, SD/TF",
      "5Gbps USB",
      "Power pass-through: 100W"
    ],
    "pros": [
      "Compact",
      "Ethernet and card reader",
      "Low price"
    ],
    "cons": [
      "5Gbps data",
      "Dual display laptop-dependent"
    ],
    "bestFor": "Most small desks.",
    "summary": "A compact 10-in-1 hub with dual HDMI, Ethernet, SD/TF and 100W pass-through.",
    "skipIf": "You want the slimmest hub; the 7-in-1 is smaller."
  },
  {
    "id": "ugreen-revodok-pro-7-in-1",
    "rank": 2,
    "badge": "Slimmest Hub",
    "name": "UGREEN 7-in-1 Docking Station Dual Monitor",
    "price": "$26.96",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41e9eAIvbjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1XSKZRJ?tag=theofficejournal-20",
    "description": "The UGREEN 7-in-1 is the slimmest option, thin enough to slide under a laptop stand, with two HDMI outputs listed for 4K 60Hz, 10Gbps USB and 100W pass-through, for about $27 at the time of writing.\n\nIt drops Ethernet and the card reader.",
    "specs": [
      "Ports: 7-in-1",
      "Outputs: 2 x HDMI 4K 60Hz",
      "10Gbps USB-A/C",
      "Power pass-through: 100W",
      "Aluminum"
    ],
    "pros": [
      "Slim",
      "Lowest price",
      "Fast data"
    ],
    "cons": [
      "No Ethernet or SD"
    ],
    "bestFor": "Minimal desks.",
    "summary": "A thin aluminum 7-in-1 hub with dual 4K HDMI, 10Gbps data and 100W pass-through.",
    "skipIf": "You need Ethernet; the 10-in-1 has it."
  },
  {
    "id": "anker-nano-13-in-1-detachable",
    "rank": 3,
    "badge": "Best Detachable Dock",
    "name": "Anker Nano 13-in-1 Laptop Docking Station",
    "price": "$119.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/310OoVrsP4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCLC1RMM?tag=theofficejournal-20",
    "description": "The Anker Nano 13-in-1 splits into a compact core and a detachable 6-in-1 hub, so you can keep only what you use on the desk. It supports up to three displays (two HDMI and a DisplayPort), with 10Gbps USB-C, three USB-A, SD/TF, Ethernet and up to 100W power delivery.\n\nIt costs about $120 at the time of writing, and three displays depend on your laptop.",
    "specs": [
      "13-in-1 with detachable 6-in-1",
      "Displays: up to 3",
      "10Gbps USB-C, 3 x USB-A",
      "SD/TF, Ethernet",
      "Up to 100W"
    ],
    "pros": [
      "Modular",
      "Three displays",
      "Full ports"
    ],
    "cons": [
      "Costs more"
    ],
    "bestFor": "Small desks with multi-monitor needs.",
    "summary": "A 13-in-1 dock that splits into a core dock and a 6-in-1 hub, with up to three displays.",
    "skipIf": "You need one or two monitors; the UGREEN hubs cost far less."
  },
  {
    "id": "hp-usb-c-dock-g5",
    "rank": 4,
    "badge": "Best for Managed Laptops",
    "name": "HP USB-C Dock G5",
    "price": "$97.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31RkQ3P6p3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TQPTPCK?tag=theofficejournal-20",
    "description": "The HP G5 is a compact business dock with front-facing ports for everyday connections, listed for USB-C and Thunderbolt laptops, with remote management features for IT, for about $98 at the time of writing.\n\nIt uses its own power supply, which takes a little extra space.",
    "specs": [
      "Ports: 11-in-1",
      "USB-C and Thunderbolt laptops",
      "Front-facing ports",
      "Management features"
    ],
    "pros": [
      "Front ports",
      "Business support"
    ],
    "cons": [
      "Power brick"
    ],
    "bestFor": "Small office desks with managed laptops.",
    "summary": "HP's 11-in-1 G5 business dock with front-facing ports.",
    "skipIf": "You want the smallest footprint; a UGREEN hub is smaller."
  },
  {
    "id": "pulwtop-macbook-pro-dock",
    "rank": 5,
    "badge": "Best Compact Dock for MacBooks",
    "name": "PULWTOP MacBook Pro Docking Station Dual Monitor",
    "price": "$69.89",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/415xnkJZznL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GLXBNVJ5?tag=theofficejournal-20",
    "description": "The PULWTOP is aimed at MacBook Pro and Air owners who want two monitors: dual HDMI at 4K 60Hz, 10Gbps USB, Ethernet, SD/TF and power delivery, for about $70 at the time of writing.\n\nIt uses DisplayLink to add a second display on MacBooks with a one-display limit, so the DisplayLink driver is required.",
    "specs": [
      "Outputs: 2 x HDMI 4K 60Hz (DisplayLink)",
      "10Gbps USB",
      "Ethernet, SD/TF",
      "Power delivery"
    ],
    "pros": [
      "Two monitors on base MacBooks",
      "Compact"
    ],
    "cons": [
      "Driver required"
    ],
    "bestFor": "MacBook owners who need two screens on a small desk.",
    "summary": "A compact dual-HDMI dock aimed at MacBooks, with Ethernet and SD/TF.",
    "skipIf": "Your laptop drives two screens natively; a UGREEN hub avoids the driver."
  },
  {
    "id": "anker-8-in-1-dual-monitor",
    "rank": 6,
    "badge": "Budget Hub With Ethernet",
    "name": "Anker Laptop Docking Station Dual Monitor, 8-in-1",
    "price": "$53.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41jaFGKHJgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874M3KW4?tag=theofficejournal-20",
    "description": "The Anker 8-in-1 is a compact bar-shaped hub with two HDMI outputs, gigabit Ethernet, an SD reader and 85W pass-through, for about $54 at the time of writing.\n\nThe UGREEN 10-in-1 lists similar features for less.",
    "specs": [
      "Outputs: 2 x HDMI",
      "Gigabit Ethernet",
      "SD reader",
      "Power pass-through: 85W"
    ],
    "pros": [
      "Compact",
      "Ethernet"
    ],
    "cons": [
      "Costs more than the UGREEN 10-in-1"
    ],
    "bestFor": "Buyers who prefer Anker.",
    "summary": "An 8-in-1 hub with two HDMI ports, Ethernet, SD and 85W pass-through.",
    "skipIf": "Price matters; the UGREEN 10-in-1 is cheaper."
  },
  {
    "id": "acer-11-in-1-3-monitor",
    "rank": 7,
    "badge": "Best Budget Three-Monitor Hub",
    "name": "Acer Laptop Docking Station 3 Monitors, 11-in-1",
    "price": "$49.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41bDLWVyxLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G6ZNG8MG?tag=theofficejournal-20",
    "description": "The Acer 11-in-1 lists three monitor outputs, a DisplayPort rated up to 8K and HDMI at 4K 60Hz, with 10Gbps data, 100W power delivery, SD/TF and gigabit Ethernet, for about $50 at the time of writing.\n\nThree extended displays depend on your laptop supporting them; Macs generally will not extend across multiple outputs of a hub like this.",
    "specs": [
      "Displays: 3 (DP up to 8K, HDMI 4K 60Hz)",
      "10Gbps data",
      "Power delivery: 100W",
      "SD/TF, Ethernet"
    ],
    "pros": [
      "Three outputs at a low price",
      "Ethernet"
    ],
    "cons": [
      "Laptop-dependent",
      "Limited on Macs"
    ],
    "bestFor": "Windows laptops that support three displays.",
    "summary": "An Acer 11-in-1 with three outputs (DisplayPort up to 8K, HDMI 4K 60Hz), 100W and Ethernet.",
    "skipIf": "You use a MacBook; choose a DisplayLink dock."
  },
  {
    "id": "tobenone-18-in-2-mac-dock",
    "rank": 8,
    "badge": "Best Powered Mac Dock",
    "name": "TobenONE 18-in-2 Docking Station Dual Monitor for MacBook Pro/Air",
    "price": "$149.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31+9spHrv7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7C8Q9FX?tag=theofficejournal-20",
    "description": "The TobenONE 18-in-2 is the fuller Mac dock: a 150W power adapter, dual 4K 60Hz via DisplayLink, 2.5G Ethernet, seven USB ports and an SD 4.0 reader, for about $150 at the time of writing.\n\nIt is larger than the hubs and needs its adapter, which takes more space on a small desk.",
    "specs": [
      "Dual 4K 60Hz (DisplayLink)",
      "Adapter: 150W",
      "2.5GbE",
      "USB: 7; SD 4.0"
    ],
    "pros": [
      "2.5GbE",
      "Own power"
    ],
    "cons": [
      "Larger",
      "Driver required"
    ],
    "bestFor": "MacBook desks that want a full dock.",
    "summary": "A TobenONE DisplayLink dock with a 150W adapter, dual 4K, 2.5GbE and seven USB ports.",
    "skipIf": "Space is very tight; the PULWTOP is smaller."
  }
];

export const howWeEvaluated = [
  {
    "title": "Size",
    "description": "We favored compact designs and noted which need power bricks."
  },
  {
    "title": "Displays and ports",
    "description": "We compared listed outputs, display methods and extras."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Footprint",
    "explanation": "Bar-shaped hubs (UGREEN, Anker) take the least space; docks with power bricks take more."
  },
  {
    "criterion": "Displays",
    "explanation": "Check your laptop's external display support. MacBooks with a one-display limit need DisplayLink docks (PULWTOP, TobenONE) for two."
  },
  {
    "criterion": "Ports",
    "explanation": "Ethernet and card readers are the usual extras to check for."
  },
  {
    "criterion": "Power",
    "explanation": "Hubs pass through your charger; the HP and TobenONE supply their own power."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "Most small desks",
          "UGREEN Revodok Pro 210",
          "Ethernet, SD, compact"
        ],
        [
          "Slimmest",
          "UGREEN 7-in-1",
          "Under a laptop stand"
        ],
        [
          "MacBook, two monitors",
          "PULWTOP",
          "DisplayLink"
        ],
        [
          "Three monitors, Windows",
          "Acer 11-in-1",
          "Three outputs"
        ],
        [
          "Modular",
          "Anker Nano 13-in-1",
          "Detachable hub"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Docks"
      ],
      "rows": [
        [
          "About $27–$54",
          "UGREEN 7-in-1, UGREEN 10-in-1, Acer, Anker 8-in-1"
        ],
        [
          "About $70–$120",
          "PULWTOP, HP G5, Anker Nano 13-in-1"
        ],
        [
          "About $150",
          "TobenONE 18-in-2"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Can a compact hub run two monitors?",
    "a": "If your laptop supports two external displays over USB-C. Base MacBooks generally need a DisplayLink dock for a second screen."
  },
  {
    "q": "Will a hub charge my laptop?",
    "a": "Hubs pass through your charger's power up to their rated wattage."
  },
  {
    "q": "Where should a dock go on a small desk?",
    "a": "A slim hub can sit under a laptop stand or behind the monitor, keeping the surface clear."
  }
];

export const bottomLine = [
  "For most small desks, the UGREEN Revodok Pro 210 packs the essentials into a small body, and the UGREEN 7-in-1 is the slimmest, cheapest option.",
  "MacBook owners who need two screens should look at the PULWTOP, or the TobenONE for a full dock. The Acer suits Windows laptops that support three displays, and the Anker Nano 13-in-1 is the modular choice."
];

export const relatedGuides = [
  {
    "href": "/guide/best-docking-stations-for-desk-setup",
    "title": "Best Docking Stations for a Desk Setup (2026)"
  },
  {
    "href": "/guide/best-usb-c-docking-stations",
    "title": "Best USB-C Docking Stations (2026)"
  },
  {
    "href": "/guide/best-docking-stations-for-laptop-and-desktop",
    "title": "Best Docking Stations for Laptop and Desktop (2026)"
  }
];
