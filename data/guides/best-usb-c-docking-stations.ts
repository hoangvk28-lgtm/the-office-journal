// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-usb-c-docking-stations";

export const guideTitle = "The Best USB-C Docking Stations for Everyday Desks";

export const breadcrumbLabel = "Best USB-C Docking Stations";

export const metaTitle = "Best USB-C Docking Stations: Budget Hubs to HP Business Docks (2026)";

export const metaDescription = "We compared USB-C docking stations on display outputs, charging, ports and business features, from a $27 UGREEN hub to HP's G5 and 100W G6 docks.";

export const mainKeyword = "docking station usb c";

export const introParagraphs = [
  "A USB-C dock lets one cable connect a laptop to monitors, peripherals and network. The main split is between inexpensive hubs that pass through your laptop charger's power and powered docks, like the HP G5 and G6 and Anker Prime, that supply their own and suit a permanent desk.",
  "How many monitors you can run depends on the laptop's USB-C port, not just the dock's outputs; many laptops support fewer external displays than a hub offers, and some mirror rather than extend. Check your laptop's documentation.",
  "Our comparison is based on published specifications and price position, not hands-on testing. Prices range from about $27 to $195 at the time of writing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41e9eAIvbjL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "ugreen-7in1-revodok-pro",
    "rank": 1,
    "badge": "Best Budget Hub",
    "name": "UGREEN 7-in-1 Docking Station (Revodok Pro)",
    "price": "$26.96",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41e9eAIvbjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1XSKZRJ?tag=theofficejournal-20",
    "description": "The UGREEN Revodok Pro 7-in-1 is the lowest-priced dock here at about $27 at the time of writing: two HDMI outputs listed for 4K 60Hz, 10Gbps data ports and 100W pass-through in an aluminum body.\n\nIt has no Ethernet or card reader.",
    "specs": [
      "Outputs: 2 x HDMI 4K 60Hz",
      "10Gbps data",
      "Power pass-through: 100W",
      "Aluminum"
    ],
    "pros": [
      "Lowest price",
      "Fast data",
      "100W pass-through"
    ],
    "cons": [
      "No Ethernet or SD"
    ],
    "bestFor": "Two-monitor desks on a budget.",
    "summary": "An aluminum 7-in-1 hub with dual 4K 60Hz HDMI, 10Gbps data and 100W pass-through.",
    "skipIf": "You need Ethernet; the Anker 8-in-1 has it."
  },
  {
    "id": "anker-laptop-docking-station-8in1",
    "rank": 2,
    "badge": "Best Budget Hub With Ethernet",
    "name": "Anker Laptop Docking Station 8-in-1",
    "price": "$53.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41jaFGKHJgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874M3KW4?tag=theofficejournal-20",
    "description": "The Anker 8-in-1 adds gigabit Ethernet and an SD slot to two HDMI outputs listed for dual 4K, with 85W pass-through, for about $54 at the time of writing.",
    "specs": [
      "Outputs: 2 x HDMI",
      "Gigabit Ethernet",
      "Power pass-through: 85W",
      "SD slot"
    ],
    "pros": [
      "Ethernet",
      "SD slot"
    ],
    "cons": [
      "85W pass-through"
    ],
    "bestFor": "Desks that need wired networking.",
    "summary": "An 8-in-1 hub with two HDMI ports, gigabit Ethernet, 85W pass-through and SD.",
    "skipIf": "You do not need Ethernet; the UGREEN is cheaper."
  },
  {
    "id": "acer-usb-c-docking-station-9in1",
    "rank": 3,
    "badge": "Budget Hub (Few Specs)",
    "name": "Acer USB-C Docking Station 9-in-1",
    "price": "$34.98",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41Zt6JO09EL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DW85W3FV?tag=theofficejournal-20",
    "description": "The Acer 9-in-1 offers two HDMI outputs in a compact hub for about $35 at the time of writing.\n\nThe listing does not detail power delivery, data speed or Ethernet, so check before buying.",
    "specs": [
      "Ports: 9-in-1",
      "Outputs: 2 x HDMI"
    ],
    "pros": [
      "Low price",
      "Compact"
    ],
    "cons": [
      "Few specifications listed"
    ],
    "bestFor": "Simple two-monitor setups.",
    "summary": "An Acer 9-in-1 hub with two HDMI ports for about $35.",
    "skipIf": "You want stated specifications."
  },
  {
    "id": "anker-nano-laptop-docking-station-8in1",
    "rank": 4,
    "badge": "Most Compact Hub",
    "name": "Anker Nano Laptop Docking Station 8-in-1",
    "price": "$29.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/415StnCe4ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWH4ZZ7T?tag=theofficejournal-20",
    "description": "The Anker Nano 8-in-1 packs 4K 60Hz HDMI, 10Gbps USB-C, two USB-A ports, an SD/TF reader and 85W pass-through into a small body, for about $30 at the time of writing.",
    "specs": [
      "HDMI 4K 60Hz",
      "10Gbps USB-C, 2 x USB-A",
      "SD/TF",
      "Power pass-through: 85W"
    ],
    "pros": [
      "Compact",
      "Card reader"
    ],
    "cons": [
      "No Ethernet"
    ],
    "bestFor": "Travel and small desks.",
    "summary": "A compact 8-in-1 with 4K HDMI, 10Gbps USB-C, SD/TF and 85W pass-through.",
    "skipIf": "You need Ethernet."
  },
  {
    "id": "anker-prime-docking-station-14-port",
    "rank": 5,
    "badge": "Best Powered Dock",
    "name": "Anker Prime Docking Station 14-Port",
    "price": "$169.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31ptzq7E2JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CW9249DK?tag=theofficejournal-20",
    "description": "The Anker Prime is the high-power option: 14 ports and up to 160W total output, which suits higher-wattage laptops that 85W hubs may not fully charge, with dual 4K and 10Gbps data.\n\nIt costs about $170 at the time of writing.",
    "specs": [
      "Ports: 14",
      "Output: up to 160W",
      "Dual 4K",
      "10Gbps data"
    ],
    "pros": [
      "Most power and ports"
    ],
    "cons": [
      "Expensive"
    ],
    "bestFor": "Power-hungry laptops and busy desks.",
    "summary": "A 14-port dock with up to 160W output, dual 4K and 10Gbps data.",
    "skipIf": "You have a light ultrabook; a hub is enough."
  },
  {
    "id": "anker-nano-13in1-laptop-docking-station",
    "rank": 6,
    "badge": "Best for Three Displays",
    "name": "Anker Nano 13-in-1 Laptop Docking Station",
    "price": "$119.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/310OoVrsP4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCLC1RMM?tag=theofficejournal-20",
    "description": "The Anker Nano 13-in-1 supports three displays (two HDMI and one DisplayPort), with 10Gbps USB-C and up to 100W power delivery, plus a detachable 6-in-1 module for travel.\n\nThree displays depend on your laptop.",
    "specs": [
      "Displays: up to 3",
      "10Gbps USB-C",
      "Power delivery: up to 100W",
      "Detachable 6-in-1"
    ],
    "pros": [
      "Three displays",
      "Travel module"
    ],
    "cons": [
      "Laptop-dependent"
    ],
    "bestFor": "Three-monitor desks.",
    "summary": "A 13-in-1 dock with 2 HDMI + DisplayPort and a detachable 6-in-1 travel hub.",
    "skipIf": "You use two monitors or fewer."
  },
  {
    "id": "hp-usb-c-dock-g5-11in1",
    "rank": 7,
    "badge": "Best Business Dock",
    "name": "HP USB-C Dock G5 11-in-1",
    "price": "$97.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31RkQ3P6p3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TQPTPCK?tag=theofficejournal-20",
    "description": "The HP USB-C Dock G5 is a powered 11-in-1 business dock that works with USB-C laptops beyond HP's own, with firmware update support, for about $98 at the time of writing.\n\nIt sits between the consumer hubs and the Anker Prime in price.",
    "specs": [
      "Ports: 11-in-1",
      "Powered",
      "Firmware updates",
      "Broad USB-C compatibility"
    ],
    "pros": [
      "Powered",
      "Business support"
    ],
    "cons": [
      "Charging wattage not stated here"
    ],
    "bestFor": "Office and managed business laptops.",
    "summary": "HP's powered 11-in-1 G5 dock with firmware update support.",
    "skipIf": "You want the most charging power; the G6 lists 100W."
  },
  {
    "id": "hp-usb-c-100w-g6-dock",
    "rank": 8,
    "badge": "Best HP Dock for Higher-Wattage Laptops",
    "name": "HP USB-C 100W G6 Dock",
    "price": "$195.04",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31hvjotuUPL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGTQ2KDQ?tag=theofficejournal-20",
    "description": "The HP G6 is HP's current business dock with 100W power delivery, suited to higher-wattage business laptops, with firmware update support.\n\nIt costs about $195 at the time of writing, about twice the G5. Other port details are not listed here.",
    "specs": [
      "Power delivery: 100W",
      "HP G6 business dock",
      "Firmware updates"
    ],
    "pros": [
      "100W charging",
      "Current HP generation"
    ],
    "cons": [
      "Expensive",
      "Port details not listed here"
    ],
    "bestFor": "HP business fleets and higher-wattage laptops.",
    "summary": "HP's current-generation G6 dock with 100W power delivery.",
    "skipIf": "The G5 meets your needs for half the price."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power",
    "description": "We recorded pass-through and output wattage."
  },
  {
    "title": "Displays and ports",
    "description": "We compared listed outputs, data speeds and extras."
  },
  {
    "title": "Price position",
    "description": "Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Hub or powered dock",
    "explanation": "Hubs pass through your charger; powered docks (HP G5/G6, Anker Prime) supply their own power."
  },
  {
    "criterion": "Charging wattage",
    "explanation": "Match your laptop charger: 85W to 160W here."
  },
  {
    "criterion": "Displays",
    "explanation": "Check how many external displays your laptop supports over USB-C."
  },
  {
    "criterion": "Ports and management",
    "explanation": "Ethernet, SD readers and, for business, firmware updates."
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
          "Cheapest",
          "UGREEN 7-in-1",
          "About $27"
        ],
        [
          "Ethernet",
          "Anker 8-in-1",
          "Gigabit"
        ],
        [
          "Travel",
          "Anker Nano 8-in-1",
          "Compact"
        ],
        [
          "Three monitors",
          "Anker Nano 13-in-1",
          "2 HDMI + DP"
        ],
        [
          "Business laptop",
          "HP G5 or G6",
          "Powered, firmware support"
        ],
        [
          "High-wattage laptop",
          "Anker Prime",
          "160W"
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
          "UGREEN, Anker Nano 8-in-1, Acer, Anker 8-in-1"
        ],
        [
          "About $98–$120",
          "HP G5, Anker Nano 13-in-1"
        ],
        [
          "About $170–$195",
          "Anker Prime, HP G6"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Will a USB-C dock charge my laptop?",
    "a": "Powered docks do; hubs pass through your charger's power up to their rated wattage."
  },
  {
    "q": "Why does my second monitor mirror?",
    "a": "Some laptops cannot extend to multiple displays over one USB-C port. Check your laptop's documentation."
  },
  {
    "q": "Is an HP dock only for HP laptops?",
    "a": "HP lists the G5 as compatible with USB-C laptops broadly, though some features are designed around HP business laptops."
  }
];

export const bottomLine = [
  "For most desks, the UGREEN 7-in-1 is the budget choice, the Anker 8-in-1 adds Ethernet, and the Anker Nano 13-in-1 handles three displays.",
  "For a permanent business desk, the HP G5 is the sensible powered dock and the G6 adds 100W; the Anker Prime suits power-hungry laptops with many peripherals."
];

export const relatedGuides = [
  {
    "href": "/guide/best-docking-station-for-dual-monitor-multi-monitor-setups",
    "title": "Best Docking Stations for Dual Monitor Setups (2026)"
  },
  {
    "href": "/guide/best-docking-stations-for-macbook-pro",
    "title": "Best Docking Stations for MacBook Pro (2026)"
  },
  {
    "href": "/guide/usb-c-hub-vs-docking-station",
    "title": "USB-C Hub vs Docking Station: What's the Difference?"
  }
];
