const BASE_IMAGES = "/images/guides/best-standing-desk-under-200";

export const guideSlug = "best-standing-desk-under-200";
export const guideTitle =
  "6 Best Electric Standing Desks Under $200 in 2026: Picks That Are Actually Good";
export const metaTitle = "6 Best Electric Standing Desks Under $200 in 2026";
export const metaDescription =
  "Best electric standing desks under $200: FlexiSpot EN1, FEZIBO, SHW, Marsail, SMUG. Height by user size, weight limits, and when to upgrade to the $300 tier.";
export const lastUpdated = "2026-06-23";
export const readTime = "12 min";
export const heroImage = `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-hero.webp`;

export interface StandingDesk200 {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  motor: string;
  heightRange: string;
  capacity: string;
  desktopSize: string;
  presets: string;
  warranty: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWorks: string;
  tradeoffs: string[];
  skipIf: string;
  pros: string[];
  cons: string[];
}

export const products: StandingDesk200[] = [
  {
    id: "flexispot-en1",
    rank: 1,
    badge: "Best Overall",
    name: "FlexiSpot EN1 48x24",
    price: "~$150-180",
    motor: "Single",
    heightRange: '28.3"-47.6"',
    capacity: "176 lbs",
    desktopSize: '48x24"',
    presets: "4",
    warranty: "3yr frame / 2yr motor",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-flexispot-en1-48x24.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DJ2XKJJT?tag=theofficejournal-20",
    whyItWorks:
      "FlexiSpot's 3-year frame and 2-year motor warranty is 2-3x longer than competitors at this price tier. The 1-inch thick seamless desktop is sturdier than the 0.75-inch boards on comparable desks. 4 memory presets and anti-collision sensor are standard on EN1. FlexiSpot has a documented US customer support track record spanning multiple product generations.",
    tradeoffs: [
      'Single motor - some lateral movement at 47" max height',
      "One-piece top cannot be swapped for a different surface",
      "May run $150-180 vs $120-150 for budget alternatives",
    ],
    skipIf:
      "Budget is strictly under $130. The FEZIBO Basic or Marsail at $120-150 deliver the same core standing desk function with a 1-year warranty.",
    pros: [
      "3-year frame / 2-year motor warranty - 2-3x longer than competitors",
      "1-inch seamless desktop thicker than 0.75-inch alternatives",
      "4 memory presets + anti-collision sensor",
      "FlexiSpot brand reliability and US support",
      "Multiple color combinations available",
    ],
    cons: [
      "Single motor",
      "1-piece top not swappable",
      "Priced $30-50 higher than budget alternatives",
    ],
  },
  {
    id: "fezibo-basic-48x24",
    rank: 2,
    badge: "Best Budget 48x24",
    name: "FEZIBO Basic 48x24",
    price: "~$120-150",
    motor: "Single",
    heightRange: '28.5"-46.5"',
    capacity: "176 lbs",
    desktopSize: '48x24"',
    presets: "3",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-fezibo-basic-48x24-rustic-brown.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08CBVGXZC?tag=theofficejournal-20",
    whyItWorks:
      "Most affordable 48x24 electric standing desk consistently in stock across major retailers. Core standing desk functionality at $120-150 - single motor, 3 presets, anti-collision, 176 lb capacity. Available in Rustic Brown, White, Maple, and Black. The 46.5-inch max height covers users up to approximately 6 feet 1 inch at standing ergonomic position.",
    tradeoffs: [
      "1-year warranty vs EN1's 3-year / 2-year",
      '46.5" max height - users over 6\'1" should check other options',
      "3 presets vs 4 on EN1",
    ],
    skipIf:
      "You want the best warranty coverage. The FlexiSpot EN1 at $150-180 adds a 3-year frame warranty and a sturdier desktop for $30-50 more.",
    pros: [
      "Lowest price 48x24 desk in this guide at $120-150",
      "176 lb capacity at budget price",
      "Anti-collision sensor included",
      "Multiple color options including Rustic Brown and White",
      "Consistently in stock",
    ],
    cons: [
      "1-year warranty only",
      '46.5" max height limit',
      "3 memory presets vs 4",
    ],
  },
  {
    id: "shw-48x24-drawer",
    rank: 3,
    badge: "Best with Built-In Storage",
    name: "SHW 48x24 with Drawer",
    price: "~$140-170",
    motor: "Single",
    heightRange: '28"-45.5"',
    capacity: "110 lbs",
    desktopSize: '48x24" + drawer',
    presets: "4",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-shw-48x24-drawer-oak.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07GVRKCWP?tag=theofficejournal-20",
    whyItWorks:
      "Built-in drawer and cable management tray at the same price as competing desks without storage. For setups where a desk must also serve as storage - small rooms, bedrooms, apartments - the built-in drawer eliminates the need for a separate drawer unit. Available in Oak, Black, Maple, and Walnut finishes.",
    tradeoffs: [
      "110 lb capacity - lowest in this guide due to drawer mechanism",
      '45.5" max height - 2 inches lower than most competitors',
      "Single motor",
      "Drawer mechanism adds assembly complexity",
    ],
    skipIf:
      "You plan to load two heavy monitors plus a desktop PC. Verify total weight stays under 110 lbs. Standard setups with two 27-inch monitors and peripherals typically total 35-45 lbs, well within the limit.",
    pros: [
      "Built-in drawer - no separate storage unit needed",
      "Cable management tray included",
      "4 memory presets",
      "Multiple wood-finish color options",
      "Eliminates need for additional furniture",
    ],
    cons: [
      "110 lb capacity - lowest in this guide",
      '45.5" max height',
      "Added assembly complexity",
      "Single motor",
    ],
  },
  {
    id: "marsail-48x24",
    rank: 4,
    badge: "Best Value with Accessories",
    name: "Marsail 48x24",
    price: "~$120-150",
    motor: "Single",
    heightRange: '28.3"-46.5"',
    capacity: "176 lbs",
    desktopSize: '48x24"',
    presets: "4",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-marsail-48x24.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BRQFPFX2?tag=theofficejournal-20",
    whyItWorks:
      "Includes a storage bag and headphone hook at no additional cost - accessories that typically run $15-25 separately. 176 lb capacity and 4 memory presets match the FlexiSpot EN1's specs at $30-50 less. For buyers who want the best-equipped desk at the lowest price and are comfortable with a 1-year warranty from a newer brand, Marsail delivers the most included accessories per dollar.",
    tradeoffs: [
      "1-year warranty vs FlexiSpot 3-year / 2-year",
      "Newer brand with shorter track record than FlexiSpot",
      "Black, White, Natural only - fewer colors than FEZIBO",
    ],
    skipIf:
      "Brand track record and warranty length matter most. The FlexiSpot EN1 at $150-180 has a 3-year warranty and longer market history.",
    pros: [
      "Storage bag + headphone hook included",
      "4 memory presets + 176 lb capacity at $120-150",
      "Anti-collision sensor",
      "Competitive pricing vs similarly-spec'd desks",
      "Best accessory package at this price",
    ],
    cons: [
      "1-year warranty",
      "Newer brand - shorter reliability track record",
      "Limited color options",
    ],
  },
  {
    id: "fezibo-40x24",
    rank: 5,
    badge: "Best for Small Spaces",
    name: "FEZIBO 40x24",
    price: "~$100-130",
    motor: "Single",
    heightRange: '28.5"-46.5"',
    capacity: "176 lbs",
    desktopSize: '40x24"',
    presets: "3",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-fezibo-40x24.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08D73C9FH?tag=theofficejournal-20",
    whyItWorks:
      "8 inches narrower than the standard 48-inch desks, making it the right choice for rooms where a 48-inch footprint does not fit. Maintains 176 lb capacity despite the smaller size. Lowest price in this guide at $100-130. The 40-inch surface area works well for single-monitor setups with keyboard and mouse. Not ideal for dual-monitor setups where the 48-inch surface is the minimum recommendation.",
    tradeoffs: [
      '40x24" surface is tight for dual monitors',
      "Black only - no color options",
      "3 memory presets vs 4",
    ],
    skipIf:
      "You plan to run two monitors. 40 inches is too narrow for comfortable dual-monitor positioning. Go to the 48x24 options above.",
    pros: [
      "Lowest price in guide at $100-130",
      "Fits rooms where 48-inch width does not work",
      "176 lb capacity despite smaller size",
      "Anti-collision sensor",
      "Ideal for dorm rooms and compact setups",
    ],
    cons: [
      "Too narrow for dual monitors",
      "Black only",
      "3 memory presets",
      "Less future-proof than 48-inch surface",
    ],
  },
  {
    id: "smug-48x24",
    rank: 6,
    badge: "Best Aesthetics",
    name: "SMUG 48x24",
    price: "~$150-170",
    motor: "Single",
    heightRange: '27.6"-46.9"',
    capacity: "176 lbs",
    desktopSize: '48x24"',
    presets: "4",
    warranty: "1 year",
    imageUrl: `${BASE_IMAGES}/standing-desk-best-standing-desk-under-200-hero.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C8MDMX3D?tag=theofficejournal-20",
    whyItWorks:
      "27.6-inch minimum seated height is the lowest in this guide - relevant for users under 5 feet 3 inches who need a lower sitting position than most desks allow. The Natural colorway provides a clean light-wood aesthetic that reads as furniture-grade rather than typical budget desk. Available in White, Natural, and Black.",
    tradeoffs: [
      "1-year warranty",
      "Higher price than FEZIBO or Marsail for comparable specs",
      "Limited availability in some regions",
    ],
    skipIf:
      "You are over 5 feet 4 inches and do not prioritize the low minimum height or Natural colorway. The Marsail or FEZIBO deliver the same capacity at lower cost.",
    pros: [
      "27.6-inch minimum height - lowest in guide, for users under 5'3\"",
      "Natural colorway - furniture-grade aesthetic",
      "White/white-frame option cleanest monochrome setup",
      "4 memory presets + 176 lb capacity",
      "Anti-collision sensor",
    ],
    cons: [
      "1-year warranty",
      "Higher price for same spec as Marsail",
      "Limited regional availability",
    ],
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  motor: string;
  heightRange: string;
  capacity: string;
  price: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  motor: p.motor,
  heightRange: p.heightRange,
  capacity: p.capacity,
  price: p.price,
}));

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Are standing desks under $200 worth it?",
    a: "Yes for a single-monitor home office or study setup. The core benefit - effortless transitions between sitting and standing - is fully present at this price tier. The trade-offs (single motor, 1-year warranty, particle board desktop) do not eliminate that value for light to moderate use. For dual large-monitor setups or users over 6 feet 2 inches, the under-$300 tier addresses those specific limitations.",
  },
  {
    q: "What is the best standing desk under $200?",
    a: "FlexiSpot EN1 for best overall reliability - its 3-year frame warranty is 2-3x longer than all competitors at this price. For pure budget, the FEZIBO Basic 48x24 or Marsail at $120-150 deliver the same core electric desk function with 176 lb capacity and 4 presets.",
  },
  {
    q: "Do standing desks under $200 wobble?",
    a: "Yes - all single-motor 2-stage electric desks have some wobble at maximum extension. This is a structural characteristic of the 2-stage column design. For a single-monitor setup the motion is generally slow and not distracting. For two 32-inch or larger monitors, the combined weight and leverage makes wobble more noticeable. Dual-motor desks starting around $280-300 address this for heavy setups.",
  },
  {
    q: "Is 48x24 big enough for a standing desk?",
    a: "A 48x24 desk is comfortable for a single-monitor setup with keyboard, mouse, and laptop. It becomes tight for two 27-inch or larger monitors side by side, and the 24-inch depth places large monitors closer than some ergonomics guides recommend. For a dual large-monitor setup, check 55-inch or 60-inch desks in the $300 tier.",
  },
  {
    q: "What is the weight limit for these desks?",
    a: "Most desks in this guide are rated at 176 lbs, well above any realistic home office setup. The exception is the SHW 48x24 with Drawer at 110 lbs due to its built-in drawer mechanism. A typical home office load - two 27-inch monitors (12-15 lbs each), a laptop (4-5 lbs), keyboard, mouse, and accessories (5-10 lbs) - totals roughly 35-45 lbs, well within the 110 lb SHW limit for standard setups.",
  },
];

export const relatedGuides = [
  {
    href: "/guide/best-standing-desk-under-300",
    title: "Best Standing Desk Under $300",
  },
  {
    href: "/guide/best-standing-desk-under-500",
    title: "Best Standing Desk Under $500",
  },
  {
    href: "/guide/standard-desk-height",
    title: "Standard Desk Height Guide",
  },
  {
    href: "/guide/best-monitor-arm-under-100",
    title: "Best Monitor Arm Under $100",
  },
];
