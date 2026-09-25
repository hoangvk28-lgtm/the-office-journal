const BASE_IMAGES = "/images/guides/best-mechanical-keyboard-under-100";

export const guideSlug = "best-mechanical-keyboard-under-100";
export const guideTitle =
  "The Best Mechanical Keyboards Under $100 for Home Office and Gaming, Compared";
export const metaTitle = "Best Mechanical Keyboards Under $100 for Home Office and Gaming (2026)";
export const metaDescription =
  "We compared 10 mechanical keyboards under $100 for home office and gaming on features, build and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-06-23";
export const readTime = "15 min";
export const heroImage = `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-hero.webp`;

export interface MechKeyboard100 {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  layout: string;
  wireless: string;
  switchType: string;
  hotSwap: string;
  mount: string;
  keycaps: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: MechKeyboard100[] = [
  {
    id: "epomaker-x-aula-f108-pro",
    rank: 1,
    badge: "Best Full-Size Wireless with Display",
    name: "EPOMAKER X Aula F108 PRO Wireless Gaming Keyboard with Screen",
    price: "~$89.99",
    layout: "Full-size 104-key",
    wireless: "Yes (Bluetooth / 2.4GHz / Wired)",
    switchType: "Hot-swappable (multiple options)",
    hotSwap: "Yes",
    mount: "Gasket-style with RGB backlight",
    keycaps: "Double-shot",
    imageUrl:
      "https://m.media-amazon.com/images/I/41Lei8oGwfL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F38DZG3J?tag=theofficejournal-20",
    whyItWorks:
      "The Aula F108 Pro is the only full-size, 104-key option in this guide, which matters for buyers who rely on a dedicated number pad for spreadsheet or accounting work rather than the TKL and 75% layouts the rest of this list favors. An 8000mAh battery is roughly double the capacity of the RK84's 4000mAh cell, and the built-in screen displays battery level, connection mode, and basic customization feedback without needing companion software running in the background. Hot-swappable sockets and a knob for quick volume or media control round out the feature set at just under $90.\n\n4GHz, and wired) covers most desk setups, and the RGB backlighting is fully programmable through the board's own controls. The main tradeoff against the 75% and TKL boards elsewhere in this guide is desk footprint: a full-size 104-key layout takes up several extra inches of desk width that a TKL or 75% board would free up.",
    tradeoffs: [
      "Full-size 104-key layout takes up more desk width than the TKL or 75% boards elsewhere in this guide",
      "8000mAh battery and screen add weight versus the more compact wireless options",
      "Verify current listing for exact switch options included at time of purchase",
    ],
    skipIf:
      "The RK Royal Kludge RK84 (75% layout) or Keychron C3 Pro (TKL) reclaim several inches of desk width if a number pad is not required.",
    pros: [
      "Full-size 104-key layout with dedicated number pad, the only one in this guide",
      "8000mAh battery, roughly double the capacity of the RK84",
      "Built-in screen for battery and mode feedback",
      "Hot-swappable switches and triple connectivity under $90",
    ],
    cons: [
      "Largest footprint in this guide, not suited to tight desks",
      "Heavier than the compact wireless options due to the battery and screen",
      "Confirm current switch options on the listing before ordering",
    ],
  },
  {
    id: "yscp-typewriter-style",
    rank: 2,
    badge: "Best Retro Typewriter-Style Design",
    name: "YSCP Typewriter Style Mechanical Gaming Keyboard, Blue Switch",
    price: "~$39.50",
    layout: "Full-size 104-key",
    wireless: "No (wired)",
    switchType: "Blue (clicky)",
    hotSwap: "No (soldered)",
    mount: "Tray mount",
    keycaps: "Round retro-style keycaps",
    imageUrl:
      "https://m.media-amazon.com/images/I/51BdRltoxHL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08LNFY8Y7?tag=theofficejournal-20",
    whyItWorks:
      "This is the only board in this guide built around a typewriter aesthetic, with round retro-profile keycaps and an RGB backlit case designed to stand out visually rather than to chase gasket-mount comfort or hot-swap flexibility. At under $40 it undercuts every other option on this list on price, which makes it a reasonable pick for buyers who want the mechanical-keyboard look and feel for a desk display or lighter-use setup without spending $50 or more.\n\nBlue switches mean an audible click on every keystroke, the same tradeoff flagged elsewhere in this guide's FAQ for anyone sharing a room or taking video calls. The tray mount and lack of hot-swap keep this firmly in budget-novelty territory rather than a daily-driver upgrade pick, but for the specific retro-look use case it fills a niche none of the other picks in this guide address.",
    tradeoffs: [
      "Blue switches click audibly on every keystroke, noticeable on video calls or in shared rooms",
      "No hot-swap, switch changes require soldering",
      "Tray mount gives a harsher, louder typing feel than the gasket-mount picks in this guide",
    ],
    skipIf:
      "You want a quieter switch for calls, or hot-swap flexibility. The Keychron C3 Pro at a similar price point adds both gasket mount and hot-swap.",
    pros: [
      "Lowest price in this guide at under $40",
      "Distinctive retro typewriter-style round keycaps and case design",
      "RGB backlighting included",
      "Full-size 104-key layout with number pad",
    ],
    cons: [
      "Blue switches are loud, not ideal for calls or shared spaces",
      "No hot-swap, soldering required to change switches",
      "Tray mount, harsher feel than gasket-mount alternatives in this guide",
    ],
  },
  {
    id: "asus-rog-strix-scope-ii-x",
    rank: 3,
    badge: "Best Pre-Lubed Hot-Swap Under $100",
    name: "ASUS ROG Strix Scope II X Wired Mechanical Gaming Keyboard",
    price: "~$94.99",
    layout: "Full-size 100%",
    wireless: "No (wired USB)",
    switchType: "ROG NX Snow V2 linear, pre-lubed (hot-swap)",
    hotSwap: "Yes",
    mount: "Gasket-mounted with sound dampening",
    keycaps: "PBT",
    imageUrl:
      "https://m.media-amazon.com/images/I/41v3KhzCFRL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FGGZK4X7?tag=theofficejournal-20",
    whyItWorks:
      "The ROG Strix Scope II X pairs factory pre-lubed ROG NX Snow V2 linear switches with hot-swap sockets and PBT keycaps, a combination that puts it near the top of this guide's feature list for buyers who want a full-size wired board with a premium switch feel out of the box. Pre-lubed switches mean smoother keystrokes without the aftermarket lubing process some enthusiasts do themselves on cheaper boards, and the gasket-mounted design with sound dampening foam is aimed at reducing the hollow, clacky resonance common on tray-mount boards at this price.\n\nAt just under $95, it is priced close to the ceiling of this guide's under-$100 range, competing directly with the Keychron V1 and Epomaker TH80 Pro for the higher end of the budget. The full-size 100% layout, rather than the 75% layout of the V1 and TH80 Pro, is the deciding factor for buyers who need a dedicated number pad and are willing to trade the smaller footprint for it.",
    tradeoffs: [
      "Full-size layout takes up more desk width than the 75% Keychron V1 or Epomaker TH80 Pro",
      "Wired only, no wireless option on this model",
      "Priced near the top of this guide's under-$100 range",
    ],
    skipIf:
      "Desk space is tight or a number pad is not needed. The Keychron V1 (75%) offers double-gasket mount and QMK/VIA in a smaller footprint for a similar price.",
    pros: [
      "Pre-lubed ROG NX Snow V2 linear switches, smoother out of the box than unlubed alternatives",
      "Hot-swap sockets with PBT keycaps",
      "Gasket-mounted with sound dampening foam",
      "Full-size 100% layout with dedicated number pad",
    ],
    cons: [
      "Full-size footprint, larger than the 75% picks elsewhere in this guide",
      "Wired only",
      "Near the top of this guide's price range",
    ],
  },
  {
    id: "redragon-k552",
    rank: 4,
    badge: "Best Budget Under $35",
    name: "Redragon K552",
    price: "~$28-35",
    layout: "TKL 87-key",
    wireless: "No (USB)",
    switchType: "Outemu Red or Blue",
    hotSwap: "No",
    mount: "Tray mount",
    keycaps: "ABS",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-redragon-k552.webp`,
    amazonUrl: "https://www.amazon.com/dp/B016MAK38U?tag=theofficejournal-20",
    whyItWorks:
      "The Redragon K552 has been the standard entry-level mechanical keyboard on Amazon since 2015. Tens of thousands of verified reviews. Metal top frame adds rigidity unusual at this price. Outemu switches are Cherry MX-compatible - keycap replacements work without modification. For a first mechanical keyboard under $35 with a proven track record, no competing option has more documented reliability.",
    tradeoffs: [
      "Tray mount - each keystroke vibrates directly into the case, louder and harsher feel than gasket",
      "Non-hot-swap - switch replacement requires soldering",
      "ABS keycaps develop sheen with extended use",
      "No RGB, single-color LED only on many variants",
    ],
    skipIf:
      "The Keychron C3 Pro adds gasket mount, hot-swap 3/5-pin, QMK/VIA, and RGB for $12 more - the feature gap is significant.",
    pros: [
      "Under $35 - lowest price in guide",
      "Proven since 2015 - tens of thousands of reviews",
      "Metal top frame for rigidity",
      "Cherry MX-compatible switches and keycaps",
      "Best first mechanical keyboard at this price",
    ],
    cons: [
      "Tray mount - harsh feel and louder",
      "No hot-swap - soldering required to change switches",
      "ABS keycaps shine over time",
      "Limited features vs $40+ options",
    ],
  },
  {
    id: "keychron-c3-pro",
    rank: 5,
    badge: "Best Value Wired Under $50",
    name: "Keychron C3 Pro",
    price: "~$40-50",
    layout: "TKL 87-key",
    wireless: "No (USB-C)",
    switchType: "K Pro Red/Brown/Blue (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "Gasket mount",
    keycaps: "ABS double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-keychron-c3-pro.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRDKQNQ5?tag=theofficejournal-20",
    whyItWorks:
      "Gasket mount, QMK/VIA programmability, and hot-swap 3/5-pin socket at $40 - a feature set that cost $120+ three years ago. QMK/VIA lets you remap any key using a free browser interface in under 5 minutes - changes persist on the keyboard. Hot-swap means switching from Blue to Brown costs $15-25 in replacement switches and 15 minutes, no soldering. The benchmark for budget mechanical keyboards in 2026.",
    tradeoffs: [
      "ABS keycaps - develop shiny surface in 6-12 months with heavy use",
      "TKL layout only - no compact 75% option in C3 Pro line",
      "Wired only - no wireless option in C3 Pro",
    ],
    skipIf:
      "4GHz + USB-C) for $20 more.",
    pros: [
      "Gasket mount at $40 - softer typing feel",
      "QMK/VIA programmable - remap any key in browser",
      "Hot-swap 3/5-pin at $40 - switch changes without soldering",
      "USB-C detachable cable",
      "Keychron brand reliability",
    ],
    cons: [
      "ABS keycaps - shines over time",
      "Wired only",
      "TKL 87% only - no 75% option",
    ],
  },
  {
    id: "akko-3087-horizon-ds",
    rank: 6,
    badge: "Best TKL with PBT Keycaps",
    name: "Akko 3087 Horizon DS",
    price: "~$55-70",
    layout: "TKL 87-key",
    wireless: "No (USB-C detachable)",
    switchType: "Akko CS Cream Blue or others",
    hotSwap: "No (soldered)",
    mount: "Tray mount",
    keycaps: "PBT double-shot dye-sub",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-akko-3087-horizon-ds.webp`,
    amazonUrl: "https://www.amazon.com/dp/B099F3DPBZ?tag=theofficejournal-20",
    whyItWorks:
      "Cherry-profile PBT double-shot keycaps ship with the board - aftermarket equivalents cost $40-60 separately. Akko CS switches come factory pre-lubed, delivering a smoother feel than the Outemu switches found in most boards at this price. Detachable USB-C cable means a damaged cable is a $5 replacement rather than a repair. The Horizon colorway (blue gradient) is a distinctive aesthetic option.",
    tradeoffs: [
      "Tray mount - harsher feel than gasket",
      "No hot-swap - soldering required for switch changes",
      "Higher price than C3 Pro without adding hot-swap or wireless",
    ],
    skipIf:
      "The Keychron V1 at $69-84 adds gasket mount and QMK/VIA to PBT keycaps for $15-30 more.",
    pros: [
      "PBT double-shot keycaps included - legends never fade",
      "Pre-lubed Akko CS switches - smoother factory feel",
      "Detachable USB-C cable",
      "Distinctive Horizon colorway",
      "Cherry-profile legends",
    ],
    cons: [
      "Tray mount",
      "No hot-swap",
      "Higher price than C3 Pro without wireless or hot-swap",
    ],
  },
  {
    id: "rk-royal-kludge-rk84",
    rank: 7,
    badge: "Best Wireless Mechanical Keyboard",
    name: "RK Royal Kludge RK84",
    price: "~$60-70",
    layout: "75% 84-key",
    wireless: "Yes (BT 5.0 / 2.4GHz / USB-C)",
    switchType: "RK Red/Brown/Blue (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "Tray mount",
    keycaps: "ABS double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-rk-royal-kludge-rk84.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08M3KPXV5?tag=theofficejournal-20",
    whyItWorks:
      "4GHz, and USB-C) with Bluetooth pairing for 3 devices simultaneously. 4000mAh battery provides 3-6 months of daily use with backlight off, or 1-3 weeks with RGB. 5 inches narrower than TKL - the best office compromise for cable-free desks. Hot-swap on a wireless board at this price is uncommon.",
    tradeoffs: [
      "Tray mount - harsher feel than gasket",
      "ABS keycaps - shines over time",
      "No QMK/VIA - proprietary remapping software only",
      "2.4GHz dongle required for fastest wireless response",
    ],
    skipIf:
      "Wired is acceptable and gasket mount or QMK/VIA matters most. The Keychron C3 Pro at $40-50 or V1 at $69-84 are better for typed-feel and programmability.",
    pros: [
      "Triple wireless (BT 5.0 + 2.4GHz + USB-C) with 3-device BT pairing",
      "4000mAh battery - months of use without backlight",
      "75% layout - compact but keeps F-row and arrows",
      "Hot-swap 3/5-pin on wireless board at $60-70",
      "Clean desk - no cable required",
    ],
    cons: [
      "Tray mount",
      "ABS keycaps shine over time",
      "No QMK/VIA",
      "Needs 2.4GHz dongle for lowest latency",
    ],
  },
  {
    id: "keychron-v1",
    rank: 8,
    badge: "Best Overall Wired Under $100",
    name: "Keychron V1",
    price: "~$69-84",
    layout: "75% 84-key",
    wireless: "No (USB-C)",
    switchType: "K Pro Red/Brown hot-swap",
    hotSwap: "Yes (3/5-pin)",
    mount: "Double-gasket mount",
    keycaps: "PBT double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-keychron-v1.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09NLWG6X1?tag=theofficejournal-20",
    whyItWorks:
      "Double-gasket mount, PBT double-shot keycaps, QMK/VIA programmability, and hot-swap 3/5-pin sockets in a 75% form factor. Double-gasket is two layers of silicone dampening - softer and bouncier typing feel than single-gasket designs. The difference is most apparent during 1-2+ hour typing sessions. PBT double-shot legends are a second layer of plastic, not ink or dye - they cannot fade. Most recommended wired mechanical keyboard under $100 for home office daily use.",
    tradeoffs: [
      "Wired only - V1 Max adds wireless at ~$109",
      "Highest price wired option in guide at $69-84",
      "Red/Brown switches only in standard V1 (Blue in separate V1 Blue variant)",
    ],
    skipIf:
      "The Epomaker TH80 Pro at $75-90 or RK Royal Kludge RK84 at $60-70 add triple-mode wireless.",
    pros: [
      "Double-gasket mount - softest typing feel in guide",
      "PBT double-shot - legends never fade",
      "QMK/VIA programmable - best key customization",
      "Hot-swap 3/5-pin",
      "75% layout - compact with full F-row and arrows",
    ],
    cons: [
      "Wired only (V1 Max ~$109 for wireless)",
      "Highest wired price at $69-84",
      "Red/Brown switch options only in V1 (Blue is separate model)",
    ],
  },
  {
    id: "epomaker-th80-pro",
    rank: 9,
    badge: "Best Wireless with Premium Features",
    name: "Epomaker TH80 Pro",
    price: "~$75-90",
    layout: "75% 80-key",
    wireless: "Yes (BT 5.0 / 2.4GHz / USB-C)",
    switchType: "Gateron Pro Red or others (hot-swap)",
    hotSwap: "Yes (3/5-pin)",
    mount: "PCB-mount with silicone foam",
    keycaps: "PBT double-shot",
    imageUrl: `${BASE_IMAGES}/keyboard-best-mechanical-keyboard-under-100-hero.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BML2S3PQ?tag=theofficejournal-20",
    whyItWorks:
      "Adds three features the RK84 lacks: PBT double-shot keycaps, a physical volume knob, and south-facing RGB LEDs. South-facing LEDs shine through the front of keycaps rather than directly into the user's eyes - more visible legends under the light. Silicone dampening foam reduces hollow resonance. Gateron Pro switches are factory pre-lubed. For wireless buyers who want PBT keycaps plus volume knob plus best feature set under $100, this is the pick.",
    tradeoffs: [
      "Not a true gasket mount - PCB + silicone foam is softer than tray but not as soft as double-gasket",
      "Higher price at $75-90 than RK84",
      "No QMK/VIA - proprietary remapping only",
      "Slightly less hot-swap compatible switch brand variety than Keychron",
    ],
    skipIf:
      "Wired use only and QMK/VIA matters. The Keychron V1 at $69-84 has better typing feel and full QMK/VIA without wireless premium.",
    pros: [
      "PBT double-shot + wireless - rare combination under $100",
      "Physical volume knob",
      "South-facing RGB - better keycap illumination",
      "Silicone foam dampening",
      "Gateron Pro pre-lubed switches",
    ],
    cons: [
      "Not true gasket mount",
      "No QMK/VIA",
      "Higher price than RK84",
      "Limited Gateron Pro hot-swap variety",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  layout: string;
  wireless: string;
  switchType: string;
  price: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  layout: p.layout,
  wireless: p.wireless,
  switchType: p.switchType,
  price: p.price,
}));

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "What is the best mechanical keyboard under $100 for home office work?",
    a: "Keychron V1 ($69-84) for wired use - double-gasket mount, PBT keycaps, QMK/VIA, and hot-swap make it the most complete wired option. For wireless, the RK Royal Kludge RK84 ($60-70) is the most complete triple-mode wireless pick, or the Epomaker TH80 Pro ($75-90) adds PBT keycaps and a volume knob.",
  },
  {
    q: "What mechanical keyboard should I buy under $50?",
    a: "Gasket mount, QMK/VIA programmability, hot-swap 3/5-pin, and USB-C detachable cable at $40. The only trade-off is ABS keycaps that will develop a sheen over 6-12 months. No other keyboard at $50 or under offers this combination of features.",
  },
  {
    q: "Is the Redragon K552 still worth buying in 2026?",
    a: "For a first mechanical keyboard under $35, yes - it has the longest track record at this price and metal construction. For $12 more, the Keychron C3 Pro adds gasket mount, hot-swap, QMK/VIA, and RGB. If the budget is hard-capped at $35, the K552 is a solid choice. If $40-50 is possible, the C3 Pro is a more capable keyboard.",
  },
  {
    q: "Are Blue switches good for home office use?",
    a: "Blue switches produce an audible click on every keystroke - clearly audible to other participants on video calls even with noise suppression active. Brown (tactile bump, no click) or Red (smooth linear, no click) are more appropriate for home office and shared spaces. Blue switches are designed for typing satisfaction, not office environments.",
  },
  {
    q: "What is QMK/VIA and do I need it?",
    a: "QMK is open-source keyboard firmware. VIA is a browser-based graphical interface to remap any key without programming. Common uses: Caps Lock to Escape, media controls on an Fn layer, macro keys. Takes 5 minutes, changes persist on the keyboard through battery cycles and USB reconnects. Keychron C3 Pro and V1 include QMK/VIA. RK84 and Epomaker TH80 Pro use proprietary remapping software only.",
  },
];

export const relatedGuides = [
  {
    href: "/guide/best-standing-desk-under-200",
    title: "Best Standing Desk Under $200",
  },
  {
    href: "/guide/best-monitor-arm-under-100",
    title: "Best Monitor Arm Under $100",
  },
  {
    href: "/guide/standard-desk-height",
    title: "Standard Desk Height Guide",
  },
  {
    href: "/guide/ultrawide-vs-dual-monitor",
    title: "Ultrawide vs Dual Monitor",
  },
];
