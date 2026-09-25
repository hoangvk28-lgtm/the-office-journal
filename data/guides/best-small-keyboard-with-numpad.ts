const BASE = "/guides/best-small-keyboard-with-numpad";

export const guideSlug = "best-small-keyboard-with-numpad";
export const guideTitle =
  "The Best Small Keyboards with Numpad in 2026: 96% Layout and Separate Numpad Options, Compared";
export const guideDescription =
  "Most small keyboard guides tell you to give up the numpad. But the numpad is not a luxury for people who use it for data entry, Excel, or invoicing. This guide covers 7 options that keep the numpad: six 96% integrated keyboards from $25 to $200, and one separate wireless numpad that adds numpad capability to any existing compact keyboard.";
export const metaTitle = "Best Small Keyboards with Numpad in 2026: 96% Layout and Separate Numpad Options (2026)";
export const metaDescription =
  "We compared 8 small keyboards with numpad in 2026: 96% layout and separate numpad options on features, build and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-06-17";
export const readTime = "12 min";
export const heroImage = `${BASE}/00-hero-best-small-keyboard-with-numpad.webp`;

export interface NumpadKeyboard {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  layout: string;
  widthCm: string;
  wireless: string;
  mechanical: boolean;
  hotSwap: boolean;
  qmkVia: boolean;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: NumpadKeyboard[] = [
  {
    id: "keychron-v5-max",
    rank: 1,
    badge: "Best Overall",
    name: "Keychron V5 Max",
    price: "~$115-$130",
    layout: "96%",
    widthCm: "~39 cm",
    wireless: "Tri-mode",
    mechanical: true,
    hotSwap: true,
    qmkVia: true,
    imageUrl: `${BASE}/01-keychron-v5-max-small-keyboard-with-numpad.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CR16D8R2?tag=theofficejournal-20",
    whyItWorks:
      "1 up to 3 devices, USB-C wired), hot-swappable switches, and QMK/VIA for full key remapping. The 96% layout fits a full numpad in a frame about 4 to 5 cm narrower than full-size. Works on Mac, Windows, and Linux out of the box.",
    tradeoffs: [
      "No rotary knob on this ASIN",
      "Banana switch may not suit linear-focused users (Red switch variant available)",
    ],
    skipIf:
      "You want full aluminum build quality. The Keychron Q5 Max at $180 to $200 adds a CNC aluminum body and double-gasket mounting.",
    pros: [
      "Tri-mode wireless with 1000 Hz polling",
      "QMK/VIA programmable",
      "Hot-swappable switches",
      "Works on Mac and Windows",
      "96% layout with full numpad",
    ],
    cons: [
      "No rotary knob",
      "Higher price tier for this roundup",
      "Banana switch is specific preference",
    ],
  },
  {
    id: "keychron-q5-max",
    rank: 2,
    badge: "Best Premium Build",
    name: "Keychron Q5 Max",
    price: "~$180-$200",
    layout: "96%",
    widthCm: "~39 cm",
    wireless: "Tri-mode",
    mechanical: true,
    hotSwap: true,
    qmkVia: true,
    imageUrl: `${BASE}/02-keychron-q5-max-small-keyboard-with-numpad.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CR7HN22S?tag=theofficejournal-20",
    whyItWorks:
      "Full aluminum CNC-machined body with double-gasket mounting system reduces typing vibration and noise significantly compared to standard plate-mounted keyboards. At about 2 kg, it gives a premium desk feel. QMK/VIA programmability means every key is remappable. All three wireless modes are included. Same 96% layout as the V5 Max but with premium materials throughout.",
    tradeoffs: [
      "High price at $180 to $200",
      "Heavy at about 2 kg (not portable)",
      "Premium over V5 Max is mainly build feel, not features",
    ],
    skipIf:
      "The Keychron V5 Max delivers the same layout and wireless at $115 to $130.",
    pros: [
      "Full aluminum CNC body",
      "Double-gasket mounting (quieter typing)",
      "QMK/VIA",
      "Tri-mode wireless",
      "Hot-swappable",
    ],
    cons: [
      "Highest price in roundup",
      "Heavy and not portable",
      "Premium mainly in build materials",
    ],
  },
  {
    id: "amazon-basics-wireless",
    rank: 3,
    badge: "Best Budget Wireless",
    name: "Amazon Basics Modern Wireless Keyboard",
    price: "~$25-$35",
    layout: "Compact full with numpad",
    widthCm: "~40 cm",
    wireless: "2.4 GHz",
    mechanical: false,
    hotSwap: false,
    qmkVia: false,
    imageUrl: `${BASE}/03-amazon-basics-wireless-keyboard-numpad.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07WV5WN7B?tag=theofficejournal-20",
    whyItWorks:
      "Only option in this roundup making a full compact numpad layout accessible at a minimal budget. 4 GHz wireless with plug-and-play USB receiver, compact layout with numpad included. Works out of the box with no software, no setup, and no subscription. Clean quiet low-profile membrane keys for shared workspaces.",
    tradeoffs: [
      "Membrane keys with no tactile feedback",
      "Windows-optimized layout with limited Mac support",
      "No multi-device Bluetooth",
      "No backlight",
    ],
    skipIf:
      "You want mechanical switch feedback or Mac support. The Keychron K4 at $80 to $100 adds mechanical switches and Bluetooth for Mac.",
    pros: [
      "Lowest price in roundup",
      "Wireless with numpad included",
      "Zero-setup plug-and-play",
      "Compact layout",
    ],
    cons: [
      "Membrane only",
      "Windows-optimized",
      "No backlight",
      "No multi-device Bluetooth",
    ],
  },
  {
    id: "perixx-periboard-536b",
    rank: 4,
    badge: "Best Ergonomic",
    name: "Perixx PERIBOARD-536B",
    price: "~$40-$50",
    layout: "Ergonomic split with numpad",
    widthCm: "~41 cm",
    wireless: "Wired only",
    mechanical: false,
    hotSwap: false,
    qmkVia: false,
    imageUrl: `${BASE}/04-perixx-periboard-536b-ergonomic-keyboard.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D6VWPGPB?tag=theofficejournal-20",
    whyItWorks:
      "Solves a problem none of the other picks address: wrist and forearm strain from extended typing. The split ergonomic layout angles both halves outward keeping wrists in a more natural position. The built-in numpad is on the right half and fully integrated. Detachable wrist rest is included. Silent membrane switches are appropriate for shared workspaces.",
    tradeoffs: [
      "Wired only (no wireless)",
      "Split layout requires an adjustment period",
      "Not for mechanical switch fans",
    ],
    skipIf:
      "You have no wrist strain concerns and prefer wireless. The Keychron V5 Max is the better all-around 96% pick.",
    pros: [
      "Ergonomic split design reduces wrist strain",
      "Silent keys for shared offices",
      "Built-in numpad",
      "Detachable wrist rest included",
      "Compact vs standard ergonomic keyboards",
    ],
    cons: [
      "Wired only",
      "Split layout adjustment period",
      "Membrane keys only",
    ],
  },
  {
    id: "logitech-mk470",
    rank: 5,
    badge: "Best Keyboard and Mouse Combo",
    name: "Logitech MK470",
    price: "~$50-$65",
    layout: "Compact full with numpad",
    widthCm: "~38 cm",
    wireless: "2.4 GHz",
    mechanical: false,
    hotSwap: false,
    qmkVia: false,
    imageUrl: `${BASE}/05-logitech-mk470-slim-keyboard-mouse.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07VD4Q84X?tag=theofficejournal-20",
    whyItWorks:
      "Pairs a compact slim keyboard with numpad with a matching wireless mouse in one USB receiver. For a small desk being built from scratch, the combo eliminates needing to source a compatible mouse separately. Low-profile scissor-switch keys are quiet (Logitech rates them 90% quieter than standard keyboard). Both the keyboard and mouse share one USB port.",
    tradeoffs: [
      "Windows-optimized with limited Mac key labeling",
      "No Bluetooth (single receiver only)",
      "No RGB",
      "Not mechanical",
    ],
    skipIf:
      "You already have a mouse or need Mac support. The keyboard alone is not sold separately with this combo.",
    pros: [
      "Complete keyboard plus mouse in one purchase",
      "One USB receiver for both devices",
      "Quiet scissor-switch keys",
      "Compact layout with numpad",
      "Reliable Logitech build",
    ],
    cons: [
      "Windows-optimized",
      "No Bluetooth",
      "Not mechanical",
      "No RGB",
    ],
  },
  {
    id: "keychron-k4",
    rank: 6,
    badge: "Best Mid-Range Wireless",
    name: "Keychron K4",
    price: "~$80-$100",
    layout: "96%",
    widthCm: "~39 cm",
    wireless: "Bluetooth",
    mechanical: true,
    hotSwap: true,
    qmkVia: false,
    imageUrl: `${BASE}/06-keychron-k4-small-mechanical-keyboard-numpad.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07WS7KSGT?tag=theofficejournal-20",
    whyItWorks:
      "One of the first widely available 96% wireless mechanical keyboards. 1 connects up to 3 devices. Mac and Windows are both supported with included keycap sets. Hot-swappable sockets on newer versions. 4000 mAh battery rated at up to 240 hours without backlight. Sits between the Amazon Basics and the premium Q5 Max, offering mechanical switches and wireless.",
    tradeoffs: [
      "Older model (V2), limited updates vs V5 Max",
      "Bluetooth only wireless (no 2.4 GHz)",
      "White LED only on this model (no RGB)",
      "Verify current stock before purchasing",
    ],
    skipIf:
      "4 GHz wireless or RGB. The Keychron V5 Max at $115 to $130 adds both and has a higher polling rate.",
    pros: [
      "Mechanical switches at mid-range price",
      "3-device Bluetooth",
      "Mac and Windows support",
      "240-hour battery",
      "Hot-swappable version available",
    ],
    cons: [
      "Bluetooth only (no 2.4 GHz)",
      "White LED only",
      "Older model with limited updates",
    ],
  },
  {
    id: "nulea-wireless-numpad",
    rank: 7,
    badge: "Best Separate Numpad Add-On",
    name: "Nulea Wireless Number Pad",
    price: "~$25-$35",
    layout: "Standalone 34-key numpad",
    widthCm: "~10 cm",
    wireless: "Bluetooth + 2.4 GHz",
    mechanical: false,
    hotSwap: false,
    qmkVia: false,
    imageUrl: `${BASE}/07-nulea-wireless-number-pad.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DZGJ5XSX?tag=theofficejournal-20",
    whyItWorks:
      "Built for a completely different scenario: you already have a compact keyboard you like (TKL, 65%, or any layout without numpad) and want to add numpad capability without replacing it. The 34 keys cover all standard numpad functions plus arithmetic operators. Place it to the right when doing data entry and store it in a drawer when not needed.",
    tradeoffs: [
      "Separate device to manage (charging and pairing)",
      "Not integrated with main keyboard",
      "Small form factor means occasional misplacement",
    ],
    skipIf:
      "You need a numpad available at all times. A 96% keyboard with integrated numpad is a more seamless solution for frequent numpad users.",
    pros: [
      "Adds numpad to any existing keyboard",
      "Dual wireless (Bluetooth plus 2.4 GHz)",
      "USB-C rechargeable",
      "Stores away when not needed",
      "Works with Mac and Windows",
    ],
    cons: [
      "Separate device to charge and pair",
      "Not integrated",
      "Only useful if you already have a compact keyboard",
    ],
  },
];

export const atAGlanceRows = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  layout: p.layout,
  wireless: p.wireless,
  mechanical: p.mechanical,
  price: p.price,
}));

export const faq = [
  {
    q: "What is a 96% keyboard?",
    a: "A 96% keyboard includes all the keys of a full-size 104-key keyboard including the numpad in a more compact frame. It achieves this by eliminating the gaps between key clusters and slightly tightening the navigation section. The result is a keyboard about 4 to 6 cm narrower than a standard full-size layout while retaining every key including the number pad.",
  },
  {
    q: "Is a 96% keyboard good for small desks?",
    a: "A full-size keyboard with numpad typically measures 44 cm wide. A 96% keyboard measures about 38 to 40 cm. That 4 to 6 cm difference is meaningful on a 60 to 80 cm desk. For comparison, a TKL without numpad is about 36 cm, so the trade-off for keeping the numpad in a 96% layout is only about 2 to 4 cm wider than TKL.",
  },
  {
    q: "Can I add a numpad to my existing TKL keyboard?",
    a: "4 GHz and functions as an independent number pad. You place it to the right of your keyboard when needed and store it when not. This is the most flexible option if you already own a compact keyboard you are happy with.",
  },
  {
    q: "Which compact keyboard with numpad is best for Mac?",
    a: "The Keychron V5 Max and K4 both ship with Mac and Windows keycap sets and are designed for dual-OS use. The Logitech MK470 and Amazon Basics are Windows-optimized. For Mac users, Keychron is the cleaner choice with proper key labeling and Fn mapping.",
  },
  {
    q: "What is the difference between a numpad and a number row?",
    a: "The number row (keys 1 to 0 across the top of the keyboard) requires the Shift key for symbols and a longer finger reach. The numpad is a dedicated 17-key cluster in a calculator layout allowing fast single-hand numeric entry. For Excel, accounting, invoicing, or any data-heavy work, the numpad is significantly faster for number input than the number row.",
  },
  {
    q: "What is the difference between a 96% keyboard and a full-size keyboard?",
    a: "A full-size keyboard has 104 keys spread across dedicated clusters with spacing between them, typically about 44 cm wide. A 96% keyboard has the same keys but removes the gaps between clusters, bringing the total width to about 38 to 40 cm. The 96% saves about 4 to 6 cm of desk width without losing any keys.",
  },
];

export const relatedGuides = [
  { href: "/guide/best-small-keyboards", title: "Best Small Keyboards" },
  { href: "/guide/best-compact-keyboard-under-50", title: "Best Compact Keyboards Under $50" },
  { href: "/guide/best-small-desk-accessories", title: "Best Small Desk Accessories" },
];
