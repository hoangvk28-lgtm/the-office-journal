// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-docking-stations-with-2-5gb-ethernet";

export const guideTitle = "The Best Docking Stations with 2.5Gb Ethernet, and Which Ones Confirm It";

export const breadcrumbLabel = "Best Docking Stations with 2.5Gb Ethernet";

export const metaTitle = "Best Docking Stations with 2.5Gb Ethernet (2026)";

export const metaDescription = "Only some docks sold as 2.5GbE list it clearly. We compared seven on confirmed Ethernet speed, displays, charging and ports, and flag the ones to check.";

export const mainKeyword = "docking station 2.5gb ethernet";

export const introParagraphs = [
  "A 2.5Gb Ethernet port only helps if your network supports it: a 2.5GbE router or switch, or a fast NAS. On a standard Gigabit network, a 2.5GbE dock runs at Gigabit speed.",
  "Of the seven docks here, only two listings clearly state 2.5GbE: the UGREEN Revodok Max 213 (Thunderbolt 4) and the TobenONE 16-in-1 (USB-C). The others don't confirm the speed in their summaries, and the Plugable is described elsewhere as Gigabit, so check before buying.",
  "Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/31caYnrDSLL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "ugreen-13-in-1-thunderbolt-4-revodok-max",
    "rank": 1,
    "badge": "Best Thunderbolt 4 Dock with 2.5GbE",
    "name": "UGREEN 13-in-1 Thunderbolt 4 Dock, 40Gbps (Revodok Max 213)",
    "price": "$239.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31caYnrDSLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQWJNJ21?tag=theofficejournal-20",
    "description": "The UGREEN Revodok Max 213 combines Thunderbolt 4 with 2.5 Gigabit Ethernet, the feature this guide is about, plus dual 4K at 60Hz or a single 8K display, 90W charging and a UHS-II-class SD/TF 4.0 reader.\n\nIt was the most expensive dock here at the time of writing, and 90W is below the 100W some laptops use.",
    "specs": [
      "Connection: Thunderbolt 4, 40Gbps",
      "Ethernet: 2.5GbE",
      "Displays: dual 4K@60Hz or 8K",
      "Charging: 90W",
      "Card reader: SD/TF 4.0"
    ],
    "pros": [
      "2.5GbE confirmed",
      "Thunderbolt 4",
      "Fast card reader"
    ],
    "cons": [
      "Most expensive here",
      "90W charging",
      "Needs Thunderbolt/USB4 for full use"
    ],
    "bestFor": "Thunderbolt laptops on a 2.5GbE network.",
    "summary": "A 13-in-1 Thunderbolt 4 dock with 2.5 Gigabit Ethernet, dual 4K@60Hz or 8K, 90W and an SD 4.0 reader.",
    "skipIf": "Your laptop has plain USB-C; the TobenONE 16-in-1 lists 2.5GbE over USB-C."
  },
  {
    "id": "plugable-thunderbolt-4-dock-tbt-udm",
    "rank": 2,
    "badge": "Thunderbolt 4 Dock (Ethernet Speed to Confirm)",
    "name": "Plugable Thunderbolt 4 Dock for M4/M5 MacBook Air & Pro (TBT-UDM)",
    "price": "$199.95",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31mqa4FsYcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FGFW5FVD?tag=theofficejournal-20",
    "description": "The Plugable TBT-UDM is a certified Thunderbolt 4 dock with 100W charging, dual 4K or single 6K output, six USB ports, SD and Ethernet, driverless on Mac and Windows.\n\nIn other listings its Ethernet port is described as Gigabit, not 2.5GbE; confirm the speed before buying it for a 2.5GbE network.",
    "specs": [
      "Certification: Thunderbolt 4",
      "Charging: up to 100W",
      "Displays: dual 4K or single 6K",
      "Ports: 6x USB, SD, Ethernet",
      "Setup: driverless (Mac, Windows)"
    ],
    "pros": [
      "Thunderbolt 4 certified",
      "Driverless on Mac and Windows",
      "SD and Ethernet"
    ],
    "cons": [
      "Ethernet may be Gigabit, not 2.5GbE",
      "Two displays maximum",
      "Needs a Thunderbolt/USB4 port"
    ],
    "bestFor": "Thunderbolt and recent MacBook users who want dependable dual-display docking.",
    "summary": "A Thunderbolt 4 certified dock with 100W charging, dual 4K or single 6K output, SD and Ethernet.",
    "skipIf": "2.5GbE is essential; the UGREEN Revodok Max 213 confirms it."
  },
  {
    "id": "tobenone-16-in-1-triple-4k",
    "rank": 3,
    "badge": "Best USB-C Dock with 2.5GbE",
    "name": "TobenONE 16-in-1 Laptop Docking Station, Triple 4K Monitor",
    "price": "$152.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41iCjrE+NKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G7CYPZGW?tag=theofficejournal-20",
    "description": "The TobenONE 16-in-1 confirms 2.5Gbps Ethernet on a USB-C dock and adds three HDMI outputs for triple 4K, seven USB ports and a 150W power supply.\n\nThe listing summary doesn't state how the three displays are driven or their refresh rate; on Macs and some laptops, three displays may require DisplayLink or not be possible.",
    "specs": [
      "Ethernet: 2.5Gbps",
      "Displays: 3x HDMI, 4K",
      "USB: 7 ports",
      "Power supply: 150W"
    ],
    "pros": [
      "2.5GbE confirmed",
      "Three HDMI outputs",
      "Lower price than the UGREEN"
    ],
    "cons": [
      "Display method/refresh not detailed",
      "Laptop charging wattage not stated",
      "Less established brand"
    ],
    "bestFor": "USB-C laptops on a 2.5GbE network with several monitors.",
    "summary": "A 16-in-1 dock with 2.5Gbps Ethernet, three 4K HDMI outputs, 7 USB ports and a 150W power supply.",
    "skipIf": "You use a Mac; the TobenONE 18-in-2 targets MacBooks."
  },
  {
    "id": "anker-prime-dl7400-displaylink",
    "rank": 4,
    "badge": "Triple 4K DisplayLink (Ethernet Speed to Confirm)",
    "name": "Anker Prime Docking Station (DL7400), 14-Port with DisplayLink",
    "price": "$227.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31hyr0S1C9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTSZC5Y7?tag=theofficejournal-20",
    "description": "The Anker Prime DL7400 drives three 4K displays at 60Hz through DisplayLink, which is uncommon, with 140W total output, a built-in cooling fan and a display status indicator.\n\nAnker lists it for Windows laptops with the latest DisplayLink driver installed. It isn't Thunderbolt certified.",
    "specs": [
      "Displays: triple 4K@60Hz via DisplayLink",
      "Output: 140W max",
      "Cooling: built-in fan",
      "Ports: 14",
      "OS: Windows (driver required)"
    ],
    "pros": [
      "Three 4K 60Hz displays",
      "140W",
      "Cooling fan"
    ],
    "cons": [
      "Ethernet speed not stated in summary",
      "Driver required",
      "Windows-focused"
    ],
    "bestFor": "Windows laptops driving three 4K monitors.",
    "summary": "A 14-port DisplayLink dock with triple 4K at 60Hz, 140W output and a cooling fan.",
    "skipIf": "2.5GbE is essential; confirm the Ethernet speed first, or choose the UGREEN or TobenONE 16-in-1."
  },
  {
    "id": "tobenone-18-in-1-triple-4k",
    "rank": 5,
    "badge": "Most Ports (Ethernet Speed to Confirm)",
    "name": "TobenONE USB C Docking Station 3 Monitors, 18-in-1 Triple 4K Display",
    "price": "$151.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/416CtEXAO2L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9NQGRR3?tag=theofficejournal-20",
    "description": "The TobenONE 18-in-1 offers the most ports here: eight USB ports up to 10Gbps, triple 4K output across HDMI, DisplayPort and USB-C, and a 150W adapter with a 20W fast-charge port. It lists Windows and ChromeOS compatibility.\n\nThe listing summary doesn't confirm 2.5GbE, so check the Ethernet speed.",
    "specs": [
      "Displays: triple 4K (HDMI/DP/USB-C)",
      "USB: 8 ports up to 10Gbps",
      "Power: 150W adapter + 20W port",
      "OS: Windows, ChromeOS"
    ],
    "pros": [
      "Many ports",
      "Triple 4K",
      "Lowest price here"
    ],
    "cons": [
      "2.5GbE not confirmed",
      "Mac not listed",
      "Less established brand"
    ],
    "bestFor": "Windows or Chromebook desks needing many ports.",
    "summary": "An 18-in-1 dock with triple 4K via HDMI/DP/USB-C, 8 USB ports up to 10Gbps and a 150W adapter.",
    "skipIf": "2.5GbE is essential; the TobenONE 16-in-1 confirms it."
  },
  {
    "id": "tobenone-18-in-2-macbook",
    "rank": 6,
    "badge": "MacBook-Focused Dock (Ethernet Speed to Confirm)",
    "name": "TobenONE 18-in-2 MacBook Docking Station, Dual Monitor 4K@60Hz",
    "price": "$161.49",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41CyL83mD6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DDBV6BG7?tag=theofficejournal-20",
    "description": "The TobenONE 18-in-2 is aimed at MacBooks, connecting over two cables to support dual 4K at 60Hz, with many USB and data ports and a 150W adapter.\n\nThe listing summary doesn't confirm 2.5GbE or give exact port details.",
    "specs": [
      "Connection: 2 cables (18-in-2)",
      "Displays: dual 4K@60Hz",
      "Power: 150W adapter",
      "Focus: MacBook"
    ],
    "pros": [
      "MacBook-focused",
      "Dual 4K@60Hz",
      "Many ports"
    ],
    "cons": [
      "2.5GbE not confirmed",
      "Uses two ports on the Mac",
      "Details not in summary"
    ],
    "bestFor": "MacBooks needing two 4K displays.",
    "summary": "A MacBook-focused 18-in-2 dock with dual 4K@60Hz and a 150W adapter.",
    "skipIf": "2.5GbE is essential; confirm it first."
  },
  {
    "id": "baseus-spacemate-11-in-1",
    "rank": 7,
    "badge": "Compact Triple-Display Dock (Ethernet Speed to Confirm)",
    "name": "Baseus Spacemate Laptop Docking Station, 11-in-1",
    "price": "$159.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31FDtj7T0ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F634PRY7?tag=theofficejournal-20",
    "description": "The Baseus Spacemate is a compact 11-in-1 dock with triple display output over 4K HDMI and DisplayPort, 10Gbps USB-C and USB-A, Ethernet, audio and 100W charging, with a power adapter included.\n\nThe listing summary doesn't confirm 2.5GbE.",
    "specs": [
      "Displays: triple (4K HDMI + DP)",
      "Data: 10Gbps USB-C/A",
      "Charging: 100W PD",
      "Ethernet: speed not stated"
    ],
    "pros": [
      "Compact",
      "100W",
      "10Gbps data"
    ],
    "cons": [
      "2.5GbE not confirmed",
      "Triple display depends on laptop",
      "Fewer ports than TobenONE"
    ],
    "bestFor": "A compact multi-display desk.",
    "summary": "An 11-in-1 Baseus dock with triple display, 10Gbps USB, Ethernet and 100W PD.",
    "skipIf": "2.5GbE is essential; the UGREEN or TobenONE 16-in-1 confirms it."
  }
];

export const howWeEvaluated = [
  {
    "title": "Ethernet",
    "description": "We checked whether 2.5GbE is stated."
  },
  {
    "title": "Displays",
    "description": "We compared outputs and refresh rates."
  },
  {
    "title": "Charging and ports",
    "description": "We compared power and port counts."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Confirm 2.5GbE in the listing",
    "explanation": "Only the UGREEN 213 and TobenONE 16-in-1 state it here."
  },
  {
    "criterion": "Check your network",
    "explanation": "You need 2.5GbE on the router, switch or NAS to benefit."
  },
  {
    "criterion": "Match the port",
    "explanation": "Thunderbolt docks need a Thunderbolt/USB4 port for full bandwidth."
  },
  {
    "criterion": "Check displays and charging",
    "explanation": "Displays and wattage vary; triple display depends on your laptop."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider"
      ],
      "rows": [
        [
          "Confirmed 2.5GbE, Thunderbolt",
          "UGREEN Revodok Max 213"
        ],
        [
          "Confirmed 2.5GbE, USB-C",
          "TobenONE 16-in-1"
        ],
        [
          "Most ports",
          "TobenONE 18-in-1 (confirm Ethernet)"
        ],
        [
          "MacBook, dual 4K",
          "TobenONE 18-in-2 (confirm Ethernet)"
        ],
        [
          "Triple 4K, Windows",
          "Anker DL7400 (confirm Ethernet)"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Do I need 2.5GbE?",
    "a": "Only if your network supports it and you move large files, for example to a NAS."
  },
  {
    "q": "Will it work on a Gigabit network?",
    "a": "Yes, at Gigabit speed."
  },
  {
    "q": "Which docks confirm 2.5GbE?",
    "a": "The UGREEN Revodok Max 213 and TobenONE 16-in-1."
  },
  {
    "q": "Is Thunderbolt required?",
    "a": "No. The TobenONE 16-in-1 offers 2.5GbE over USB-C."
  },
  {
    "q": "Can I use Wi-Fi instead?",
    "a": "Yes, but wired Ethernet is typically more consistent for large transfers."
  }
];

export const bottomLine = [
  "If 2.5GbE is the priority, choose a dock that states it: the UGREEN Revodok Max 213 for Thunderbolt laptops, or the TobenONE 16-in-1 over USB-C for less.",
  "The other docks here may suit your displays and ports, but confirm their Ethernet speed before buying for a 2.5GbE network."
];

export const relatedGuides = [
  {
    "href": "/guide/best-usb-c-docking-stations",
    "title": "Best USB-C Docking Stations (2026)"
  },
  {
    "href": "/guide/best-docking-station-for-dual-monitor-multi-monitor-setups",
    "title": "Best Docking Stations for Dual & Multi-Monitor Setups (2026)"
  },
  {
    "href": "/guide/best-docking-stations-for-macbook-pro",
    "title": "Best Docking Stations for MacBook Pro (2026)"
  }
];
