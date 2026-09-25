const BASE = "/guides/best-headphones-under-30";

export const guideSlug = "best-headphones-under-30";
export const guideTitle =
  "The Best Headphones Under $30 in 2026: Earbuds, Wireless and Wired Picks: Picks and Trade-offs";
export const metaTitle = "Best Headphones Under $30 in 2026: Earbuds, Wireless and Wired Picks (2026)";
export const metaDescription =
  "A practical comparison of 8 headphones under $30 in 2026: earbuds, wireless and wired picks, focused on features, build and practical fit, and the trade-offs between them.";
export const lastUpdated = "2026-06-18";
export const readTime = "11 min";
export const heroImage = `${BASE}/00-hero-best-headphones-under-30.webp`;

export interface Budget30Headphone {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  type: string;
  anc: boolean;
  wireless: boolean;
  battery: string;
  waterproof: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: Budget30Headphone[] = [
  {
    id: "soundcore-p20i",
    rank: 1,
    badge: "Best Overall",
    name: "Soundcore P20i",
    price: "~$20",
    type: "True wireless earbuds (ANC)",
    anc: true,
    wireless: true,
    battery: "30h total (6h earbuds + 24h case)",
    waterproof: "IPX5",
    imageUrl: `${BASE}/01-soundcore-p20i-earbuds.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BTYCRJSS?tag=theofficejournal-20",
    whyItWorks:
      "3; 30 hours combined battery covers a full week of daily use on one charge; the only pick at this price with real ANC that actually works.",
    tradeoffs: [
      "ANC reduces ambient noise, does not eliminate it fully",
      "IPX5 splash-proof but not submersible for swimming",
      "Fit depends on choosing the right ear tip size",
    ],
    skipIf:
      "You primarily use headphones at a fixed desk and care most about sound quality. The Koss KPH30i at $20 sounds significantly better.",
    pros: [
      "Hybrid ANC that works at this price",
      "USB-C charging",
      "30h combined battery",
      "Bluetooth 5.3",
      "Compact case",
    ],
    cons: [
      "ANC limited vs $100+ options",
      "IPX5 not waterproof",
      "Ear tip fit critical",
    ],
  },
  {
    id: "tozo-t10",
    rank: 2,
    badge: "Best Waterproof",
    name: "TOZO T10",
    price: "~$25",
    type: "True wireless earbuds",
    anc: false,
    wireless: true,
    battery: "55h total (6h earbuds + 49h case)",
    waterproof: "IPX8",
    imageUrl: `${BASE}/02-tozo-t10-earbuds.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07J2Z5DBM?tag=theofficejournal-20",
    whyItWorks:
      "IPX8 waterproofing at $25 means fully submersible up to 1 meter; sweat, rain, and accidental water contact are all safe; wireless charging case is exceptionally rare at this price tier; 55 hours combined battery is the highest of any pick in this guide; 32 EQ presets via the TOZO app let you tune the sound signature; for gym use, outdoor commutes, and all-weather reliability, nothing at this price comes close.",
    tradeoffs: [
      "No ANC",
      "Default tuning is bass-heavy (adjustable via app)",
      "Mic quality average for calls",
    ],
    skipIf:
      "You need ANC for studying in noisy environments. The Soundcore P20i is the pick for noise reduction.",
    pros: [
      "IPX8 fully submersible",
      "55h combined battery",
      "Wireless charging case",
      "32 EQ presets",
      "Bluetooth 5.3",
    ],
    cons: ["No ANC", "Bass-heavy default tuning", "Average mic quality"],
  },
  {
    id: "skullcandy-dime-3",
    rank: 3,
    badge: "Best for Calls and Classes",
    name: "Skullcandy Dime 3",
    price: "~$25",
    type: "True wireless earbuds",
    anc: false,
    wireless: true,
    battery: "20h total (6h earbuds + 14h case)",
    waterproof: "IPX4",
    imageUrl: `${BASE}/03-skullcandy-dime-3-earbuds.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CFCQVZS6?tag=theofficejournal-20",
    whyItWorks:
      "Best microphone quality of the three earbud picks; voices come through clearly without muffling; multipoint Bluetooth keeps the earbuds connected to laptop and phone simultaneously so you never manually switch when a call comes in; built-in Tile tracking lets you find the case if misplaced; USB-C charging; designed for students who take lots of online classes and Zoom calls.",
    tradeoffs: [
      "20h combined battery is the lowest of the earbud picks",
      "No ANC",
      "IPX4 only, not submersible",
    ],
    skipIf:
      "Battery life is a top priority. The TOZO T10 at 55h is the better pick for maximum runtime.",
    pros: [
      "Best mic quality of earbud picks",
      "Multipoint Bluetooth (2 devices)",
      "Tile tracking built-in",
      "USB-C charging",
      "Integrated lanyard loop on case",
    ],
    cons: ["Lowest battery (20h total)", "No ANC", "IPX4 only"],
  },
  {
    id: "koss-kph30i",
    rank: 4,
    badge: "Best Audio Quality",
    name: "Koss KPH30i",
    price: "~$20",
    type: "Wired on-ear",
    anc: false,
    wireless: false,
    battery: "N/A",
    waterproof: "N/A",
    imageUrl: `${BASE}/04-koss-kph30i-headphones.webp`,
    amazonUrl: "https://www.amazon.com/dp/B075FBRYM1?tag=theofficejournal-20",
    whyItWorks:
      "Audio quality significantly above the $20 price point; uses the same 60-ohm driver architecture as the legendary Koss Porta Pro, producing detail, soundstage width, and midrange clarity that no wireless headphone under $50 can match; open-back design gives natural, spacious sound; at 60g it weighs almost nothing; inline mic and remote included; no battery to charge or die mid-session; the best-sounding pair of headphones for the money in this guide.",
    tradeoffs: [
      "Open-back design leaks sound, not suitable for quiet shared spaces or libraries",
      "Wired 3.5mm only, no wireless",
      "60 Ohm impedance benefits from a DAC/amp",
    ],
    skipIf:
      "You need wireless freedom or use headphones in a quiet shared space. Open-back sound leakage is a problem in libraries and study rooms.",
    pros: [
      "Best audio quality in the guide at $20",
      "Extremely lightweight (60g)",
      "Inline mic and remote included",
      "No battery to manage",
      "Audiophile-grade drivers at this price",
    ],
    cons: ["Open-back leaks sound", "Wired only", "Not ideal for commuting"],
  },
  {
    id: "sony-mdr-zx110ap",
    rank: 5,
    badge: "Best Budget Under $15",
    name: "Sony MDR-ZX110AP",
    price: "~$12-$15",
    type: "Wired on-ear",
    anc: false,
    wireless: false,
    battery: "N/A",
    waterproof: "N/A",
    imageUrl: `${BASE}/05-sony-mdr-zx110ap-headphones.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00OUX6U6G?tag=theofficejournal-20",
    whyItWorks:
      "Sony brand reliability at under $15; meaningful quality control guarantee at a price where most alternatives are no-name units; folds flat for bag storage; inline mic for calls; clear balanced audio adequate for online classes and study sessions; 30mm drivers produce functional sound without any battery or pairing required.",
    tradeoffs: [
      "Most basic audio quality of the wired picks",
      "Thin headband padding on long sessions",
      "No carrying case",
    ],
    skipIf:
      "The Koss KPH30i at $20 sounds significantly better and weighs less.",
    pros: [
      "Lowest price in the guide at $12-$15",
      "Sony build quality at entry price",
      "Inline mic included",
      "Folds flat for storage",
      "No battery required",
    ],
    cons: [
      "Most basic audio quality",
      "Thin headband padding",
      "No carrying case",
    ],
  },
  {
    id: "skullcandy-riff-wireless-2",
    rank: 6,
    badge: "Best Wireless On-Ear",
    name: "Skullcandy Riff Wireless 2",
    price: "~$30",
    type: "Wireless on-ear",
    anc: false,
    wireless: true,
    battery: "34h per charge",
    waterproof: "N/A",
    imageUrl: `${BASE}/06-skullcandy-riff-wireless-2-headphones.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0B75MQJQR?tag=theofficejournal-20",
    whyItWorks:
      "5mm AUX cable means the headphones still work when battery hits zero; multipoint Bluetooth keeps connection to both laptop and phone simultaneously; plush ear cushions and foldable design make these comfortable for long desk sessions; USB-C charging.",
    tradeoffs: [
      "No ANC",
      "Slightly bulky for commuting vs earbuds",
      "Price occasionally pushes just above $30",
    ],
    skipIf:
      "You need ANC for studying in noisy environments. Consider the TOZO HT2 in the under-$50 guide for hybrid ANC wireless.",
    pros: [
      "34h battery per charge",
      "Included 3.5mm AUX cable as wired backup",
      "Multipoint Bluetooth (2 devices)",
      "Folds flat for storage",
      "Plush ear cushions for all-day comfort",
    ],
    cons: [
      "No ANC",
      "Slightly bulky vs earbuds",
      "Price fluctuates near $30 ceiling",
    ],
  },
  {
    id: "koss-porta-pro-classic",
    rank: 7,
    badge: "Best Lifetime Warranty",
    name: "Koss Porta Pro Classic",
    price: "~$27-$30",
    type: "Wired on-ear (collapsible)",
    anc: false,
    wireless: false,
    battery: "N/A",
    waterproof: "N/A",
    imageUrl: `${BASE}/07-koss-porta-pro-classic-headphones.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00001P4ZH?tag=theofficejournal-20",
    whyItWorks:
      "Has been in continuous production since 1984; Koss lifetime warranty repairs or replaces any Porta Pro at no charge regardless of age or cause; 60mm equivalent Koss drivers produce warm natural sound that outperforms wireless options costing 2 to 3 times more; collapsible design folds into a compact disc-shaped package; no inline mic on standard model but the sound quality justifies the price for desk listening; Koss will keep supporting this product indefinitely.",
    tradeoffs: [
      "No inline mic on standard model (mic version sold separately)",
      "Open-back design leaks sound",
      "Retro aesthetic is polarizing",
    ],
    skipIf:
      "You need an inline mic for calls. The KPH30i includes an inline mic and costs the same or less.",
    pros: [
      "Koss lifetime warranty (no questions asked)",
      "Best portable wired audio under $30",
      "Collapsible disc-fold design",
      "In production since 1984 - proven longevity",
      "60g weight, open spacious sound",
    ],
    cons: [
      "No inline mic (standard model)",
      "Open-back leaks sound",
      "Retro design not for everyone",
    ],
  },
];

export const atAGlanceRows = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  type: p.type,
  anc: p.anc,
  wireless: p.wireless,
  price: p.price,
}));

export const faq = [
  {
    q: "Can you get good headphones under $30?",
    a: "Yes, with the right expectations. For ANC, the Soundcore P20i at $20 is a genuine exception. For audio quality, the Koss KPH30i beats wireless options at $50 to $60. For waterproofing, the TOZO T10 with IPX8 at $25 is fully submersible. Trade-offs exist: no multipoint Bluetooth on most, no premium materials, limited ANC strength. But for daily studying, commuting, and calls, all seven picks deliver reliably.",
  },
  {
    q: "What is the best wireless headphone under $30?",
    a: "The Skullcandy Riff Wireless 2 at about $30 for all-day desk use with 34h battery and multipoint Bluetooth. For earbuds, the Soundcore P20i at $20 adds ANC. For gym and outdoor use, the TOZO T10 at $25 delivers IPX8 waterproofing with a wireless charging case.",
  },
  {
    q: "Do any headphones under $30 have active noise cancellation?",
    a: "Yes, the Soundcore P20i at about $20 has hybrid ANC. It is the only pick in this guide with real ANC. It reduces ambient noise by a meaningful amount for studying in dorms and blocking out background chatter. It does not eliminate noise the way $150 headphones do, but it is a genuine improvement over passive isolation alone.",
  },
  {
    q: "Are wired headphones better than wireless under $30?",
    a: "For audio quality, wired wins. The Koss KPH30i and Porta Pro Classic both outperform wireless options at two to three times their price because the full budget goes to drivers rather than a Bluetooth chip and battery. For convenience at a desk or commute, wireless is more practical. The right choice depends on whether you prioritize sound or freedom of movement.",
  },
  {
    q: "What is the best headphone under $30 for online classes?",
    a: "The Skullcandy Dime 3 for best microphone quality and multipoint Bluetooth (connect laptop and phone simultaneously). The Skullcandy Riff Wireless 2 for all-day comfort with 34h battery and a built-in mic. Either handles online classes reliably.",
  },
  {
    q: "Is the TOZO T10 waterproof enough for swimming?",
    a: "Yes, IPX8 means submersible to 1 meter, which covers swimming in shallow water. However, TOZO does not specifically market the T10 as swimming earbuds, so use appropriate judgment for extended underwater use. For casual gym use, outdoor running in the rain, and accidental water contact, IPX8 is fully reliable.",
  },
];

export const relatedGuides = [
  {
    href: "/guide/best-headphones-for-online-classes",
    title: "Best Headphones for Online Classes",
  },
  {
    href: "/guide/best-headphones-for-working-out",
    title: "Best Headphones for Working Out",
  },
  {
    href: "/guide/best-small-desk-accessories",
    title: "Best Small Desk Accessories",
  },
];
