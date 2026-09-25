const BASE = "/guides/best-compact-keyboard-under-50";

export const guideSlug = "best-compact-keyboard-under-50";
export const guideTitle =
  "The Best Compact Keyboards Under $50 in 2026: 60%, 65%, 75%, and TKL Picks, Compared";
export const metaTitle = "Best Compact Keyboards Under $50 in 2026: 60%, 65%, 75%, and TKL Picks (2026)";
export const metaDescription =
  "We compared 8 compact keyboards under $50 in 2026: 60%, 65%, 75%, and TKL picks on features, build and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-06-17";
export const readTime = "12 min";
export const heroImage = `${BASE}/00-hero-best-compact-keyboard-under-50.webp`;

export interface CompactKeyboard {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  layout: string;
  widthCm: string;
  wireless: string;
  hotSwap: boolean;
  qmkVia: boolean;
  keycaps: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: CompactKeyboard[] = [
  {
    id: "rk-rk61",
    rank: 1,
    badge: "Best Overall",
    name: "RK Royal Kludge RK61",
    price: "~$40-$45",
    layout: "60%",
    widthCm: "~29 cm",
    wireless: "Tri-mode",
    hotSwap: true,
    qmkVia: true,
    keycaps: "ABS",
    imageUrl: `${BASE}/01-rk-royal-kludge-rk61-compact-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B089GN2KBT?tag=theofficejournal-20",
    whyItWorks:
      "4 GHz, USB-C wired), hot-swappable switches, QMK/VIA programmability, and RGB backlight all under $45. Connects to three Bluetooth devices simultaneously. Maximum compactness at 60% footprint eliminates cables while saving the most desk space.",
    tradeoffs: [
      "No dedicated arrow keys or function row, both accessed via Fn layers",
      "60% layout requires relearning muscle memory for arrow keys",
      "ABS keycaps develop shine faster than PBT over time",
    ],
    skipIf:
      "You use arrow keys frequently in spreadsheets, text editing, or navigation. Move to the RK68 Plus for dedicated arrows.",
    pros: [
      "Tri-mode wireless on a 60% layout",
      "Hot-swappable switches",
      "QMK/VIA programmable",
      "RGB backlight",
      "Under $45",
    ],
    cons: [
      "No dedicated arrow keys",
      "No dedicated function row",
      "ABS keycaps",
    ],
  },
  {
    id: "keychron-c3-pro",
    rank: 2,
    badge: "Best Typing Feel",
    name: "Keychron C3 Pro",
    price: "~$35-$40",
    layout: "TKL 87%",
    widthCm: "~36 cm",
    wireless: "Wired only",
    hotSwap: true,
    qmkVia: true,
    keycaps: "PBT",
    imageUrl: `${BASE}/02-keychron-c3-pro-tkl-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRDKQNQ5?tag=theofficejournal-20",
    whyItWorks:
      "Gasket mounting at this price delivers noticeably reduced typing vibration and a premium sound profile that plastic-plate keyboards cannot match. QMK/VIA programmability, hot-swappable switches, and double-shot PBT keycaps at $35 to $40. TKL layout keeps all arrow keys, function row, and navigation cluster. Mac and Windows both supported with included keycap sets.",
    tradeoffs: [
      "Wired only, no Bluetooth or 2.4 GHz wireless",
      "TKL is the widest layout in this roundup at ~36 cm",
    ],
    skipIf:
      "The Keychron C3 Pro is wired-only, which rules it out for cable-free setups.",
    pros: [
      "Gasket mounting (rare under $50)",
      "QMK/VIA programmable",
      "Hot-swappable switches",
      "Double-shot PBT keycaps",
      "Mac and Windows compatible",
    ],
    cons: ["Wired only", "Widest layout at ~36 cm", "No wireless option"],
  },
  {
    id: "rk-rk68-plus",
    rank: 3,
    badge: "Best 65% with Arrow Keys",
    name: "RK Royal Kludge RK68 Plus",
    price: "~$40-$50",
    layout: "65%",
    widthCm: "~31 cm",
    wireless: "Tri-mode",
    hotSwap: true,
    qmkVia: false,
    keycaps: "ABS",
    imageUrl: `${BASE}/03-rk-royal-kludge-rk68-plus-65-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09DWFDVCH?tag=theofficejournal-20",
    whyItWorks:
      "Adds dedicated arrow keys and a few navigation keys over the RK61 in only 2 cm of extra width while keeping tri-mode wireless and hot-swap. 65% is the practical sweet spot for users who need arrows daily without a full TKL footprint. Some versions include USB passthrough ports for additional connectivity on a small desk.",
    tradeoffs: [
      "No dedicated function row (Fn layer required)",
      "Software occasionally inconsistent on Mac",
      "No QMK/VIA support",
    ],
    skipIf:
      "You rely heavily on the function row for F-keys. Consider the Epomaker TH80 SE for a 75% layout with F-row.",
    pros: [
      "Dedicated arrow keys in 65% footprint",
      "Tri-mode wireless",
      "Hot-swappable",
      "USB passthrough on some versions",
    ],
    cons: [
      "No QMK/VIA",
      "No dedicated function row",
      "Mac software can be inconsistent",
    ],
  },
  {
    id: "logitech-k380s",
    rank: 4,
    badge: "Best for Mac and Multi-Device",
    name: "Logitech Pebble Keys 2 K380s",
    price: "~$35-$40",
    layout: "Compact 79-key",
    widthCm: "~27 cm",
    wireless: "Bluetooth only",
    hotSwap: false,
    qmkVia: false,
    keycaps: "Scissor",
    imageUrl: `${BASE}/04-logitech-pebble-keys-2-k380s.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BT4DP7SC?tag=theofficejournal-20",
    whyItWorks:
      "Only pick in this roundup designed explicitly for cross-platform and multi-device use. Connects to three Bluetooth devices simultaneously and switches between them with a single key press. 4 GHz receiver also supported for low-latency connection. 36-month battery life on two AAA batteries eliminates charging management. Narrowest footprint in this list at 27 cm. Designed for macOS, IOS, and iPadOS alongside Windows with correct key labeling.",
    tradeoffs: [
      "Not mechanical (scissor switches)",
      "No RGB backlight",
      "No hot-swap or QMK/VIA programmability",
    ],
    skipIf:
      "You want mechanical switch feedback or RGB. The K380s is built for quiet multi-device productivity, not typist customization.",
    pros: [
      "3-device Bluetooth switching",
      "Narrowest footprint at ~27 cm",
      "36-month battery",
      "Quiet scissor switches",
      "Designed for Mac and iOS",
    ],
    cons: [
      "Not mechanical",
      "No RGB",
      "Bluetooth only, no 2.4 GHz for primary device",
    ],
  },
  {
    id: "redragon-k552p",
    rank: 5,
    badge: "Best Budget Wired",
    name: "Redragon K552P",
    price: "~$30-$38",
    layout: "TKL 87%",
    widthCm: "~36 cm",
    wireless: "Wired only",
    hotSwap: true,
    qmkVia: false,
    keycaps: "ABS",
    imageUrl: `${BASE}/05-redragon-k552p-tkl-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B019O9BLVY?tag=theofficejournal-20",
    whyItWorks:
      "Metal top plate adds rigidity that is very rarely found under $35. Hot-swappable switches let you replace or swap without soldering. N-key rollover for full simultaneous keypress registration. Lowest price in this roundup while maintaining a build quality above its price tier.",
    tradeoffs: [
      "Wired only",
      "Windows-optimized layout with limited Mac support",
      "Outemu switches are functional but not premium",
      "No QMK/VIA",
    ],
    skipIf:
      "You need wireless or Mac support. The Redragon K552P is primarily a Windows wired keyboard.",
    pros: [
      "Metal top plate under $35",
      "Hot-swappable switches",
      "N-key rollover",
      "RGB backlight",
      "Most affordable in roundup",
    ],
    cons: ["Wired only", "Windows-optimized", "Outemu switches", "No QMK/VIA"],
  },
  {
    id: "epomaker-th80-se",
    rank: 6,
    badge: "Best 75% Wireless",
    name: "Epomaker TH80 SE",
    price: "~$40-$50",
    layout: "75%",
    widthCm: "~32 cm",
    wireless: "Tri-mode",
    hotSwap: true,
    qmkVia: false,
    keycaps: "ABS",
    imageUrl: `${BASE}/06-epomaker-th80-se-75-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BRZXLTRD?tag=theofficejournal-20",
    whyItWorks:
      "Most feature-complete keyboard in this roundup. Gasket mounting, NKRO, tri-mode wireless, 4000 mAh battery, Poron and EVA foam dampening layers, south-facing RGB LEDs, and a metal rotary volume knob. 75% layout keeps both the function row and dedicated arrow keys in a frame only 1 cm wider than 65%. Pricing fluctuates and frequent Amazon sales bring it to $40 to $45.",
    tradeoffs: [
      "Price can exceed $50 at non-sale pricing, verify before buying",
      "No QMK/VIA support",
      "Software can be inconsistent",
    ],
    skipIf:
      "Current price is above $50. Check before purchasing as pricing varies week to week.",
    pros: [
      "Gasket mount and foam dampening at this price",
      "Metal rotary volume knob",
      "Tri-mode wireless",
      "4000 mAh battery",
      "75% keeps function row and arrow keys",
    ],
    cons: [
      "No QMK/VIA",
      "Price fluctuates above $50",
      "Software inconsistency reported",
    ],
  },
  {
    id: "tecware-phantom-elite",
    rank: 7,
    badge: "Best Wireless TKL",
    name: "Tecware Phantom+ Elite",
    price: "~$45-$55",
    layout: "TKL 87%",
    widthCm: "~36 cm",
    wireless: "Tri-mode",
    hotSwap: true,
    qmkVia: false,
    keycaps: "PBT",
    imageUrl: `${BASE}/07-tecware-phantom-plus-elite-tkl-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BQ2ZFVNN?tag=theofficejournal-20",
    whyItWorks:
      "Brings tri-mode wireless to the TKL layout at under $55, which is hard to find at this price. 5-pin hot-swappable sockets, double-shot PBT keycaps, and dampened case for a thocky sound profile. For users who want the familiar TKL layout with wireless freedom without paying $80 to $100 for Keychron wireless options.",
    tradeoffs: [
      "Near or slightly above $50 depending on current pricing",
      "Wraith switches are proprietary and less widely reviewed",
      "No QMK/VIA",
    ],
    skipIf:
      "Budget is strictly $50 or less. The Tecware may push slightly over depending on the listing.",
    pros: [
      "Wireless TKL under $55 (rare)",
      "5-pin hot-swap",
      "Double-shot PBT keycaps",
      "Thocky dampened case",
      "Tri-mode connectivity",
    ],
    cons: ["Can exceed $50", "Proprietary Wraith switches", "No QMK/VIA"],
  },
];

export const atAGlanceRows = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  layout: p.layout,
  wireless: p.wireless,
  hotSwap: p.hotSwap,
  price: p.price,
}));

export const faq = [
  {
    q: "Is a compact keyboard better for a small desk?",
    a: "Yes for desk space management. A TKL saves about 8 cm vs a full-size keyboard. A 65% saves about 13 cm. On a 70 to 90 cm desk that difference is real, with more room for mouse movement, notebook, or a less cluttered surface. The trade-off is losing keys you may use depending on layout.",
  },
  {
    q: "What is the best compact mechanical keyboard under $50?",
    a: "For typing feel, the Keychron C3 Pro at about $35 with gasket mounting and QMK/VIA is exceptional. For wireless flexibility, the RK61 with tri-mode wireless and hot-swap under $45 is the better pick. Choose based on whether wireless is essential to your setup.",
  },
  {
    q: "Are wireless keyboards under $50 reliable?",
    a: "4 GHz wireless which is reliable for desk use. Bluetooth adds multi-device flexibility but with marginally higher latency. For typing and productivity, either is fine.",
  },
  {
    q: "What is the difference between 60% and TKL keyboards?",
    a: "A 60% keyboard (61 keys, about 29 cm wide) removes the numpad, function row, navigation cluster, and arrow keys, all accessible via Fn layers. A TKL (87 keys, about 36 cm) removes only the numpad, keeping everything else dedicated. TKL is much easier to adapt to; 60% requires a relearning period.",
  },
  {
    q: "Do I need hot-swappable switches under $50?",
    a: "If this is a long-term board (1 to 3 years or more), hot-swap lets you replace individual broken switches without soldering and experiment with different switch feels. If it is a short-term or secondary keyboard, hot-swap is a nice addition rather than essential.",
  },
  {
    q: "Which compact keyboard under $50 works best for Mac?",
    a: "The Logitech K380s is designed explicitly for macOS and iPadOS with correct key labeling, proper Fn mapping, and 3-device Bluetooth for switching between Mac, iPad, and iPhone. The Keychron C3 Pro also includes Mac keycaps and a system toggle but is wired-only.",
  },
];

export const relatedGuides = [
  { href: "/guide/best-small-keyboards", title: "Best Small Keyboards" },
  {
    href: "/guide/best-small-keyboard-with-numpad",
    title: "Best Small Keyboards with Numpad",
  },
  {
    href: "/guide/best-small-desk-accessories",
    title: "Best Small Desk Accessories",
  },
];
