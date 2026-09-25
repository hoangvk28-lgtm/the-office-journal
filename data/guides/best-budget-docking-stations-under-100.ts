// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-budget-docking-stations-under-100";

export const guideTitle = "The Best Budget Docking Stations Under $100 for a One-Cable Desk";

export const breadcrumbLabel = "Best Docking Stations Under $100";

export const metaTitle = "Best Budget Docking Stations Under $100: Hubs and Powered Docks (2026)";

export const metaDescription = "We compared docking stations under $100 on display outputs, port mix, power design and laptop compatibility, and explain the difference between a USB-C hub and a self-powered dock.";

export const mainKeyword = "budget docking station under 100";

export const introParagraphs = [
  "Under $100, most \"docking stations\" are USB-C hubs: they take power from the laptop and, at most, pass through power from your laptop's own charger. Only one product here, the HP USB-C Dock G5, comes with its own power adapter. That difference matters more than port count if you want one cable to both charge the laptop and run your desk.",
  "The second question is displays. How many external monitors a dock can drive, and at what refresh rate, depends on your laptop as much as the dock; many laptops support only one or two external displays over USB-C, and Macs with base M-series chips are more limited still. Check your laptop's documentation before paying for extra video ports.",
  "Our comparison is based on published specifications, port configurations, power design and price position, not hands-on testing. Prices range from about $27 to $98 at the time of writing."
];

export const lastUpdated = "2026-07-18";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41e9eAIvbjL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "ugreen-revodok-pro-7-in-1",
    "rank": 1,
    "badge": "Best Budget Hub for One Monitor",
    "name": "UGREEN Revodok Pro 7-in-1 USB-C Docking Station",
    "price": "$26.96",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41e9eAIvbjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1XSKZRJ?tag=theofficejournal-20",
    "description": "The UGREEN Revodok Pro 7-in-1 is the sensible starting point if you need one external monitor and a few extra ports: a compact aluminum hub for about $27 at the time of writing.\n\nAluminum should shed heat better than a plastic shell. It connects over a single USB-C cable and is powered from the laptop, so treat it as a port expander rather than a charging solution; check the listing for power pass-through details.\n\nIt supports one external display only. If you run two monitors, the Anker Nano or UGREEN 10-in-1 is the step up.",
    "specs": [
      "Ports: 7-in-1",
      "Display outputs: 1",
      "Housing: aluminum",
      "Power: from laptop (bus-powered)",
      "Connection: USB-C"
    ],
    "pros": [
      "Lowest price here",
      "Aluminum housing",
      "Compact"
    ],
    "cons": [
      "One display only",
      "No dedicated power supply",
      "Basic port mix"
    ],
    "bestFor": "Single-monitor desks that need a few extra ports for little money.",
    "summary": "A compact aluminum 7-in-1 hub with one display output for about $27.",
    "skipIf": "You run two monitors; choose the UGREEN 10-in-1 or Anker 8-in-1."
  },
  {
    "id": "anker-nano-8-in-1",
    "rank": 2,
    "badge": "Best Compact Dual-Monitor Hub",
    "name": "Anker Nano 8-in-1 USB-C Docking Station",
    "price": "$29.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/415StnCe4ML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWH4ZZ7T?tag=theofficejournal-20",
    "description": "The Anker Nano is the pick for people who carry their dock between desk and bag: an 8-in-1 hub small enough to pocket, with dual monitor support and a card reader, for about $30 at the time of writing.\n\nIts small shell has less surface to shed heat, so it may suit shorter sessions better than an all-day docked setup. It is bus-powered.\n\nDual-display support depends on your laptop, so check that it can drive two external screens over USB-C.",
    "specs": [
      "Ports: 8-in-1",
      "Dual display support",
      "Card reader",
      "Power: from laptop (bus-powered)",
      "Compact, portable"
    ],
    "pros": [
      "Very compact",
      "Dual display support at a low price",
      "Card reader"
    ],
    "cons": [
      "Small shell for heat",
      "Fewer USB-A ports than larger docks",
      "No dedicated power"
    ],
    "bestFor": "Laptop users who move between locations and want dual-monitor support.",
    "summary": "A pocket-size 8-in-1 hub with dual display support and a card reader.",
    "skipIf": "The dock will stay on your desk all day; the full-size Anker 8-in-1 is designed for that."
  },
  {
    "id": "ugreen-10-in-1-dual-hdmi",
    "rank": 3,
    "badge": "Best for Dual 4K at 60Hz",
    "name": "UGREEN 10-in-1 USB-C Docking Station, Dual HDMI 4K@60Hz",
    "price": "$39.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41HZ73O5J4L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BXDQS4BD?tag=theofficejournal-20",
    "description": "The UGREEN 10-in-1 is the budget choice for two 4K monitors: UGREEN lists both HDMI ports at 4K 60Hz, where many budget docks drop to 30Hz when running two displays.\n\nIt adds USB-A ports and an SD/TF card reader. Your laptop still has to support two external displays at that resolution over USB-C for the full specification to apply.\n\nIt is bus-powered, has no Ethernet port, and the plastic housing may run warm under sustained dual-4K use.",
    "specs": [
      "Ports: 10-in-1",
      "Display: dual HDMI, 4K 60Hz (listed)",
      "USB-A, SD/TF card reader",
      "Power: from laptop (bus-powered)"
    ],
    "pros": [
      "Listed 4K 60Hz on both outputs",
      "Wide port mix",
      "Card reader"
    ],
    "cons": [
      "No Ethernet",
      "Bus-powered",
      "Plastic housing"
    ],
    "bestFor": "Dual 4K monitor desks on a budget, with a laptop that supports them.",
    "summary": "A 10-in-1 hub that lists dual HDMI at 4K 60Hz, for about $40.",
    "skipIf": "You need wired Ethernet; check the 14-in-1 or HP Dock G5."
  },
  {
    "id": "generic-14-in-1-dual-monitor-dell-lenovo-hp",
    "rank": 4,
    "badge": "Most Ports Under $50",
    "name": "14-in-1 USB-C Laptop Docking Station for Dell / Lenovo / HP",
    "price": "$44.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/5190VfU0ZEL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2BW24HM?tag=theofficejournal-20",
    "description": "This 14-in-1 dock is the pick if port count is the priority: it has the most ports under $50 here, with dual HDMI output, and it is marketed as compatible with Dell, Lenovo and HP laptops.\n\nIt is bus-powered, so it does not add charging capacity, and with many ports in use it may run warm.\n\nIt is sold under a generic name, with less established support than Anker, UGREEN or HP.",
    "specs": [
      "Ports: 14-in-1",
      "Display: dual HDMI",
      "Marketed for Dell, Lenovo, HP",
      "Power: from laptop (bus-powered)"
    ],
    "pros": [
      "Most ports under $50",
      "Dual HDMI",
      "Broad compatibility claims"
    ],
    "cons": [
      "Generic brand",
      "Bus-powered",
      "Heat with many ports in use"
    ],
    "bestFor": "Business laptop users who need many ports and two monitors.",
    "summary": "A 14-in-1 hub with dual HDMI output, marketed for Dell, Lenovo and HP laptops.",
    "skipIf": "Brand support matters; the Anker 8-in-1 or HP Dock G5 are from established makers."
  },
  {
    "id": "anker-8-in-1-dual-monitor",
    "rank": 5,
    "badge": "Best Hub for All-Day Desk Use",
    "name": "Anker 8-in-1 USB-C Docking Station, Dual Monitor",
    "price": "$53.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41jaFGKHJgL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0874M3KW4?tag=theofficejournal-20",
    "description": "The full-size Anker 8-in-1 is the hub to choose if it will stay on your desk all day: Anker describes a sturdier housing designed to handle heat better than smaller hubs, with dual monitor output.\n\nIt costs more than the 14-in-1 while offering fewer ports, so you are paying for the build and the brand.\n\nIt is still bus-powered, like every dock here except the HP.",
    "specs": [
      "Ports: 8-in-1",
      "Dual display output",
      "Reinforced housing (manufacturer description)",
      "Power: from laptop (bus-powered)"
    ],
    "pros": [
      "Sturdier build",
      "Established brand",
      "Dual display"
    ],
    "cons": [
      "Fewer ports than the 14-in-1",
      "Bus-powered"
    ],
    "bestFor": "Buyers who have had trouble with cheap hubs and want a steadier daily dock.",
    "summary": "A full-size Anker 8-in-1 with dual display support and a sturdier build.",
    "skipIf": "You need the most ports for the money; the 14-in-1 costs less."
  },
  {
    "id": "selore-triple-4k-3-monitor",
    "rank": 6,
    "badge": "Best for Three Monitors",
    "name": "Selore Laptop Docking Station, 3 Monitors Triple 4K Display",
    "price": "$69.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41iZIRUZlQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GKP61LKH?tag=theofficejournal-20",
    "description": "The Selore is the only dock here built around three external 4K displays, for about $70 at the time of writing.\n\nWhether it can drive three screens depends on your laptop. Many laptops cannot output three external displays over USB-C, and some docks use DisplayLink software to work around that; the listing should say which method it uses. Check both before buying.\n\nIt is bus-powered, and running three displays increases heat and bandwidth demands.",
    "specs": [
      "Display: triple 4K (listed)",
      "Connection: single USB-C",
      "USB-A ports",
      "Power: from laptop (bus-powered)"
    ],
    "pros": [
      "Three-display support at a budget price",
      "Single-cable setup"
    ],
    "cons": [
      "Depends on laptop support",
      "Bus-powered",
      "More heat with three displays"
    ],
    "bestFor": "Desks with three monitors and a laptop confirmed to support them.",
    "summary": "A single-cable dock listed for three 4K displays, for about $70.",
    "skipIf": "Your laptop supports only one or two external displays."
  },
  {
    "id": "hp-usb-c-dock-g5",
    "rank": 7,
    "badge": "Best Self-Powered Dock",
    "name": "HP USB-C Dock G5, 11-in-1 Adapter",
    "price": "$97.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31RkQ3P6p3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08TQPTPCK?tag=theofficejournal-20",
    "description": "The HP USB-C Dock G5 is the one self-powered dock here: it ships with its own power adapter, so it can charge the laptop and run peripherals without drawing everything from the laptop.\n\nThat makes it the best fit for a dock that stays on the desk permanently and replaces the laptop's charger. HP builds it for business use, and its 11-in-1 configuration covers displays and peripherals.\n\nIt costs about $98 at the time of writing, near the $100 ceiling, and is bulkier than the hubs.",
    "specs": [
      "Ports: 11-in-1",
      "Power: dedicated external adapter",
      "Connection: USB-C",
      "Business-oriented design"
    ],
    "pros": [
      "Own power supply",
      "Charges the laptop",
      "Business-grade build"
    ],
    "cons": [
      "Highest price here",
      "Bulkier than hubs"
    ],
    "bestFor": "A permanent desk setup where one cable should charge the laptop and connect everything.",
    "summary": "HP's 11-in-1 business dock with its own power adapter.",
    "skipIf": "You only need a monitor and a few ports; a UGREEN hub costs a fraction as much."
  }
];

export const howWeEvaluated = [
  {
    "title": "Power design",
    "description": "We separated self-powered docks from bus-powered hubs."
  },
  {
    "title": "Display output",
    "description": "We recorded the number of display outputs and listed resolution and refresh rate."
  },
  {
    "title": "Ports and build",
    "description": "We compared port mix and housing, and treated build claims as manufacturer claims."
  },
  {
    "title": "Price position",
    "description": "We compared what each step up in price adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Self-powered or bus-powered",
    "explanation": "A self-powered dock (HP Dock G5) has its own adapter and can charge the laptop. Bus-powered hubs draw from the laptop; some pass through power from your laptop charger. Check the listing's power delivery wattage against your laptop charger."
  },
  {
    "criterion": "How many displays your laptop supports",
    "explanation": "A dock's video ports only help if the laptop can drive them. Check your laptop's documented maximum number of external displays over USB-C before buying a dual- or triple-display dock."
  },
  {
    "criterion": "Resolution and refresh rate",
    "explanation": "\"4K support\" can mean 30Hz. The UGREEN 10-in-1 lists 4K 60Hz on both HDMI ports; check other listings for the refresh rate."
  },
  {
    "criterion": "Port mix",
    "explanation": "Count the ports you actually use: USB-A, card readers, Ethernet. More ports do not help if you do not need them."
  },
  {
    "criterion": "Heat and build",
    "explanation": "Compact plastic hubs can run warm under sustained use. Aluminum or larger housings, like the Anker 8-in-1's, may cope better."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By setup",
    "table": {
      "headers": [
        "Setup",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "One monitor, lowest cost",
          "UGREEN Revodok Pro 7-in-1",
          "About $27, aluminum"
        ],
        [
          "Two monitors, portable",
          "Anker Nano 8-in-1",
          "Pocket-size"
        ],
        [
          "Two 4K monitors at 60Hz",
          "UGREEN 10-in-1",
          "Listed 4K 60Hz on both HDMI"
        ],
        [
          "Most ports under $50",
          "14-in-1 dock",
          "Dual HDMI, 14 ports"
        ],
        [
          "All-day desk hub",
          "Anker 8-in-1",
          "Sturdier build"
        ],
        [
          "Three monitors",
          "Selore",
          "Triple 4K, if your laptop supports it"
        ],
        [
          "Charge the laptop from the dock",
          "HP USB-C Dock G5",
          "Own power adapter"
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
          "About $27–$40",
          "UGREEN Revodok Pro, Anker Nano, UGREEN 10-in-1"
        ],
        [
          "About $45–$70",
          "14-in-1, Anker 8-in-1, Selore"
        ],
        [
          "About $98",
          "HP USB-C Dock G5"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Is a $30 dock reliable enough?",
    "a": "For basic single- or dual-monitor use, a budget hub from an established brand like UGREEN or Anker is a reasonable choice. For demanding setups or all-day use with several displays, a sturdier hub or the self-powered HP is the more cautious option."
  },
  {
    "q": "Why does my monitor run at 4K 30Hz instead of 60Hz?",
    "a": "Many budget docks support 4K only at 30Hz over HDMI, or drop to 30Hz with two displays. Your laptop's USB-C bandwidth also matters. Check the dock's listed refresh rate; the UGREEN 10-in-1 lists 60Hz on both HDMI outputs."
  },
  {
    "q": "What's the difference between a USB-C hub and a docking station?",
    "a": "Sellers use the terms loosely. In this guide, the HP Dock G5 is the only product with its own power supply; the others are hubs that draw power from the laptop."
  },
  {
    "q": "Why do my devices disconnect after a while?",
    "a": "Overheating and power limits are common causes with small bus-powered hubs. Try fewer connected devices, better ventilation, or a self-powered dock."
  },
  {
    "q": "Is a cable included?",
    "a": "Check the listing. Some hubs have a short fixed cable, which keeps the hub close to the laptop; others need a separate cable."
  },
  {
    "q": "Can a dock under $100 charge my laptop?",
    "a": "The HP Dock G5 can, using its own adapter. Most hubs here only pass through power from your laptop's charger, if they support pass-through at all; check the listed wattage."
  }
];

export const bottomLine = [
  "For a simple desk, a UGREEN hub is enough: the Revodok Pro for one monitor, or the 10-in-1 for two 4K monitors at 60Hz. The Anker Nano suits people who carry their dock, and the full-size Anker 8-in-1 is the steadier choice for all-day use.",
  "The HP USB-C Dock G5 is worth paying more for if you want one cable to charge the laptop and run everything. The Selore is the only route to three monitors here, provided your laptop supports it."
];

export const relatedGuides = [
  {
    "href": "/guide/best-usb-c-docking-stations",
    "title": "Best USB-C Docking Stations (2026)"
  },
  {
    "href": "/guide/usb-c-hub-vs-docking-station",
    "title": "USB-C Hub vs. Docking Station"
  },
  {
    "href": "/guide/best-docking-stations-for-desk-setup",
    "title": "Best Docking Stations for Desk Setup (2026)"
  }
];
