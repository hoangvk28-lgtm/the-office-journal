const BASE_IMAGES = "/images/guides/best-monitor-arm-under-100";

export const guideSlug = "best-monitor-arm-under-100";
export const guideTitle =
  "The Best Monitor Arms Under $100 in 2026: Picks for Every Desk Size: Our Picks";
export const metaTitle = "Best Monitor Arms Under $100 in 2026: Picks for Every Desk Size (2026)";
export const metaDescription =
  "How 8 monitor arms under $100 in 2026: picks for every desk size compare on features, build and practical fit, with clear notes on who each one suits.";
export const lastUpdated = "2026-06-23";
export const readTime = "15 min";
export const heroImage = `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-hero.webp`;

export interface MonitorArm100 {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  weightCap: string;
  screenSize: string;
  springType: string;
  mount: string;
  warranty: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: MonitorArm100[] = [
  {
    id: "huanuo-flowlift-single",
    rank: 1,
    badge: "Best Overall",
    name: "HUANUO FlowLift Single Monitor Arm",
    price: "~$35-50",
    weightCap: "4.4-19.8 lbs",
    screenSize: '13-32"',
    springType: "Gas spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-huanuo-flowlift-single.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07T3KCQ94?tag=theofficejournal-20",
    whyItWorks:
      "Best-selling monitor arm on Amazon with aerospace-grade aluminum construction 20% thicker than standard budget arms. The wide tilt range (-50 to +85 degrees) accommodates standing desk height changes without needing to readjust. Ships with both C-clamp and grommet mount options. Installation requires only a hex key included in the box.",
    tradeoffs: [
      '19.8 lb max - not rated for heavy 34"+ monitors over 18 lbs',
      "Cable routing uses external clips, not enclosed channels",
      "1-year warranty standard for this price tier",
    ],
    skipIf:
      "Your monitor weighs over 18 lbs. The VIVO STAND-V101G1 handles up to 33 lbs for $90-99.",
    pros: [
      "Top-selling monitor arm on Amazon - millions of verified buyers",
      "Aerospace-grade aluminum - rigid above price class",
      "Wide -50 to +85 degree tilt covers standing desk use",
      "C-clamp + grommet both included",
      "Simple hex key installation",
    ],
    cons: [
      "19.8 lb max capacity",
      "External cable clips vs enclosed routing",
      "1-year warranty",
    ],
  },
  {
    id: "north-bayou-f80",
    rank: 2,
    badge: "Best Budget Under $35",
    name: "North Bayou F80",
    price: "~$29-35",
    weightCap: "4.4-19.8 lbs",
    screenSize: '17-30"',
    springType: "Spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-north-bayou-f80.webp`,
    amazonUrl: "https://www.amazon.com/dp/B01AI2YGK4?tag=theofficejournal-20",
    whyItWorks:
      "5 stars - the most reviewed monitor arm at this price. First reliable monitor arm under $35 that has maintained consistent quality across multiple production batches.",
    tradeoffs: [
      '30" screen maximum excludes ultrawides',
      "Tilt range -15 to +15 degrees - limited for standing desk height adjustments",
      "Spring tension (not gas) requires readjustment if monitor weight changes",
    ],
    skipIf:
      "You have a standing desk or plan to switch seated/standing frequently. The HUANUO FlowLift has an 85 degree tilt range for $5-15 more.",
    pros: [
      "17,000+ Amazon reviews at 4.5 stars",
      "Most reviewed arm under $35",
      "Steel construction - rigid",
      "Both mounting options included",
      "Proven reliability across batches",
    ],
    cons: [
      '30" screen size limit',
      "Narrow tilt range limits standing desk use",
      "Spring tension not as smooth as gas",
    ],
  },
  {
    id: "vivo-stand-v001",
    rank: 3,
    badge: "Best Value - Ultrawide Compatible",
    name: "VIVO STAND-V001",
    price: "~$30-45",
    weightCap: "22 lbs",
    screenSize: '13-38" ultrawide',
    springType: "Gas spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-vivo-stand-v001.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00B21TLQU?tag=theofficejournal-20",
    whyItWorks:
      "8 lb) and 38\" ultrawide screen support at the same price tier. Built-in cable routing channels keep desk cleaner than external clips. VIVO is a US-based brand with established product support and consistent quality.",
    tradeoffs: [
      "Slightly bulkier arm joint than HUANUO",
      "Black colorway only in this model",
    ],
    skipIf:
      "You want a white monitor arm to match a white desk. The VIVO STAND-V001W is the identical product in white.",
    pros: [
      "22 lb capacity - 10% more than most budget arms",
      'Supports ultrawides up to 38"',
      "Built-in cable management channels",
      "US-based VIVO brand support",
      "Gas spring motion",
    ],
    cons: ["Black only", "Slightly bulkier joint"],
  },
  {
    id: "vivo-stand-v001w",
    rank: 4,
    badge: "Best White Monitor Arm",
    name: "VIVO STAND-V001W",
    price: "~$35-45",
    weightCap: "22 lbs",
    screenSize: '13-38" ultrawide',
    springType: "Gas spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-vivo-stand-v001w.webp`,
    amazonUrl: "https://www.amazon.com/dp/B083G7G5PK?tag=theofficejournal-20",
    whyItWorks:
      "White monitor arms under $50 are rare - nearly all budget arms ship in black only. The V001W is the white version of the VIVO V001 with identical specs: 22 lb capacity, 38\" ultrawide support, built-in cable channels. Natural pairing for IKEA white desks, FEZIBO white frames, or white desk accessories.",
    tradeoffs: [
      "$5-10 more than the black V001",
      "Same 1-year warranty as the black model",
    ],
    skipIf:
      "You have a black or dark desk. Save $5-10 with the V001 in black.",
    pros: [
      "Only white gas-spring arm with 22 lb capacity under $50",
      "Matches white IKEA, FEZIBO, and SMUG desk setups",
      'Same 38" ultrawide support as V001',
      "Built-in cable channels",
      "Gas spring motion",
    ],
    cons: [
      "$5-10 premium over black V001",
      "Limited to white colorway only",
    ],
  },
  {
    id: "vivo-stand-v101g1",
    rank: 5,
    badge: "Best for Ultrawide Up to 49 Inches",
    name: "VIVO STAND-V101G1",
    price: "~$90-99",
    weightCap: "33 lbs",
    screenSize: 'Up to 49"',
    springType: "Pneumatic gas spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-vivo-stand-v101g1.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07L8MLTGS?tag=theofficejournal-20",
    whyItWorks:
      "33 lb pneumatic gas spring capacity - the only arm in this guide rated for heavy 34\" and 49\" superultrawide monitors. One-finger adjustment even with a 30 lb 49\" panel. Substantial safety margin for 34\" monitors typically weighing 15-22 lbs. VIVO US support covers this category with consistency.",
    tradeoffs: [
      "Highest price at $90-99",
      "Larger arm footprint - more visible on desk",
      "VESA max 100x100 - verify your ultrawide's VESA before ordering",
    ],
    skipIf:
      'Your monitor is 32" or under and weighs under 20 lbs. The VIVO V001 handles 38" ultrawides at $30-45.',
    pros: [
      "33 lb capacity - only arm in guide for heavy ultrawides",
      'Supports 49" superultrawide panels',
      "Pneumatic gas spring - one-finger adjustment",
      "Genuine safety margin for 34\" monitors",
      "VIVO US brand support",
    ],
    cons: [
      "Highest price at $90-99",
      "Larger arm footprint",
      "VESA max 100x100 - check ultrawide compatibility",
    ],
  },
  {
    id: "amazon-basics-lift-engine",
    rank: 6,
    badge: "Best Premium Under $100",
    name: "Amazon Basics Lift Engine Arm",
    price: "~$65-99",
    weightCap: "5-25 lbs",
    screenSize: '13-34"',
    springType: "Lift engine gas spring",
    mount: "C-clamp + grommet",
    warranty: "Standard Amazon",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-amazon-basics-lift-engine-arm.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00MIBN16O?tag=theofficejournal-20",
    whyItWorks:
      "Manufactured by the same OEM as the Ergotron LX - the mechanism is identical, the cost is $65-99 vs $140-180 for the Ergotron branded version. Integrated cable management channel (not clips). If the primary concern is motion quality - the smoothest one-finger movement at this price - this is the pick.",
    tradeoffs: [
      "5 lb minimum - unusually light monitors may not hold position correctly",
      "Amazon warranty vs Ergotron's 15-year warranty",
      "Not officially sold as Ergotron OEM - cannot claim Ergotron warranty",
    ],
    skipIf:
      "The Ergotron LX at $140-180 carries a 15-year warranty vs Amazon standard. The motion mechanism is identical.",
    pros: [
      "Same OEM mechanism as Ergotron LX at 60% of the price",
      "Integrated cable management (not clips)",
      "Smoothest motion quality in this guide",
      "Aluminum construction",
      "Trusted Amazon Basics reliability",
    ],
    cons: [
      "5 lb minimum - incompatible with lightest monitors",
      "Amazon standard warranty vs 15-year Ergotron",
      "No official Ergotron association",
    ],
  },
  {
    id: "huanuo-flowlift-dual",
    rank: 7,
    badge: "Best Dual Monitor Arm Under $100",
    name: "HUANUO FlowLift Dual Monitor Arm",
    price: "~$80-100",
    weightCap: "19.8 lbs per arm",
    screenSize: '13-32" per arm',
    springType: "Gas spring",
    mount: "C-clamp + grommet",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/monitor-arm-best-monitor-arm-under-100-huanuo-flowlift-dual.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07T5SY43L?tag=theofficejournal-20",
    whyItWorks:
      "Dual monitor arm under $100 is rare - most dual arms start at $130-150. Shared center post reduces desk footprint vs two separate arms. Independent arm positioning allows asymmetric setups (one monitor straight, one angled). 8 lb per arm covers virtually all standard 27\" monitors.",
    tradeoffs: [
      "19.8 lb per arm - not for heavy 27\" 4K monitors over 18 lbs",
      "Swivel limited to 90 degrees per arm vs 360 on single arms",
      "Center post requires desk edge access for both arms",
    ],
    skipIf:
      "Either monitor weighs over 18 lbs. Use two separate HUANUO single arms instead - same price range with full weight rating per arm.",
    pros: [
      "Dual monitors on one arm under $100 - rare at this price",
      "Shared center post saves desk space vs two separate arms",
      "Independent arm positioning",
      "Same HUANUO build quality as single version",
      "Gas spring on both arms",
    ],
    cons: [
      "19.8 lb per arm limit",
      "90 degree swivel only (not 360)",
      "Shared post limits arm separation range",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  weightCap: string;
  screenSize: string;
  price: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  weightCap: p.weightCap,
  screenSize: p.screenSize,
  price: p.price,
}));

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Do I need a monitor arm for a standing desk?",
    a: "When you raise a standing desk from sitting to standing height (typically 15-20 inches), a fixed monitor stand moves with the desk but the monitor position does not adjust to maintain eye-level ergonomics. A monitor arm with a 50+ degree tilt range lets you set the monitor angle correctly at both heights without readjusting.",
  },
  {
    q: "What VESA size do I need?",
    a: "Most monitors use 100x100mm VESA - check your monitor's spec sheet or the back panel. Ultrawide monitors occasionally use 200x100mm, which requires verifying arm compatibility. Standard budget arms in this guide support 75x75 and 100x100mm. The VIVO V101G1 for heavy ultrawides supports up to 100x100mm.",
  },
  {
    q: "Will a monitor arm work on an IKEA desk?",
    a: "9 inch range of standard C-clamps. For IKEA LACK or other hollow-core tops, use the grommet mount option (passes through a pre-drilled hole) to distribute weight more safely than a surface clamp.",
  },
  {
    q: "Is the Amazon Basics arm the same as the Ergotron LX?",
    a: "The OEM mechanism is widely reported to be identical - same smooth gas spring, same cable channel, same aluminum construction. The practical difference is warranty: Ergotron offers a 15-year warranty, Amazon Basics offers standard Amazon return policy. At $65-99 vs $140-180, the Amazon Basics is the value choice if warranty is not a priority.",
  },
  {
    q: "Will a monitor arm work with an ultrawide?",
    a: 'Yes, with capacity matching. Standard budget arms (HUANUO, North Bayou, V001) support 29-inch ultrawides under 22 lbs. For 34-inch ultrawides, use the VIVO V001 (38", 22 lbs) or the VIVO V101G1 (49", 33 lbs). Always verify your monitor\'s weight and VESA pattern before ordering.',
  },
];

export const relatedGuides = [
  { href: "/guide/ultrawide-vs-dual-monitor", title: "Ultrawide vs Dual Monitor" },
  { href: "/guide/best-standing-desk-under-200", title: "Best Standing Desk Under $200" },
  { href: "/guide/standard-desk-height", title: "Standard Desk Height Guide" },
  { href: "/guide/best-27-inch-monitor-under-200", title: "Best 27-Inch Monitor Under $200" },
];
