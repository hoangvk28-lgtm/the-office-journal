const BASE = "/images/guides/best-small-printer-stands";
export const guideSlug = "best-small-printer-stands";
export const guideTitle = "The Best Small Printer Stands for Home Offices: Picks and Trade-offs";
export const metaTitle = "Best Small Printer Stands for Home Offices (2026)";
export const metaDescription =
  "A practical comparison of 9 small printer stands for home offices, focused on features, build and practical fit, and the trade-offs between them.";
export const lastUpdated = "2026-07-03";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "huanuo-narrow-14in",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "HUANUO Printer Stand with Cable Management and Storage Drawer, 2-Tier, 14.1 inch Wide, Black",
    price: "~$33.99",
    rating: "4.5 stars",
    reviews: "6,293 reviews",
    imageUrl: `${BASE}/huanuo-14in-narrow.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07CBV7YJ8?tag=theofficejournal-20",
    description:
      "1-inch wide footprint is noticeably narrower than most printer stands on the market, making it a practical choice when the available gap beside a desk is tight. Two steel mesh tiers stack the printer on top while leaving the lower shelf open for paper reams, a small scanner, or a power strip. A pull-out storage drawer beneath the lower shelf provides a concealed spot for ink cartridges, USB cables, and small printer accessories that would otherwise clutter the desk surface. Cable management channels on the frame route printer power and data cables downward so they do not hang loosely or snag when the cart is repositioned.\n\nFour locking wheels allow the stand to be rolled out for paper loading or maintenance and then locked firmly in place so it does not drift when you press print. Home office workers, apartment dwellers, and anyone with a narrow alcove or tight corner next to a desk will find this cart sized appropriately for spaces where a wider stand simply will not fit.",
    specs: ["14.1 inch wide", "Cable management", "Locking casters", "Storage drawer"],
    pros: [
      "6,293 reviews at 4.5 stars strongest trust signal in roundup",
      "14.1-inch narrow width suits tight spaces",
      "Cable management built in",
      "Locking casters",
    ],
    cons: [
      "No power outlet",
      "Black steel mesh may not suit warm office aesthetics",
      "Single small drawer only",
    ],
    bestFor:
      "Narrow spaces where width is the constraint and cable management is needed at the lowest price",
  },
  {
    id: "vasagle-under-desk",
    rank: 2,
    badge: "Best Under-Desk Option",
    name: "4 inches, 99 lbs Capacity, Ebony Black",
    price: "~$35.99",
    rating: "4.7 stars",
    reviews: "1,784 reviews",
    imageUrl: `${BASE}/vasagle-industrial-ebony.webp`,
    amazonUrl: "https://www.amazon.com/dp/B075SWRC34?tag=theofficejournal-20",
    description:
      "4 inches tall, this cart is built specifically to slide completely under a standard desk rather than sitting beside it, which is a fundamental difference from nearly every other printer stand on the market. Most desks sit 29 to 30 inches off the floor, and the VASAGLE's low profile fits within the open space beneath the desktop, keeping the printer entirely out of view and out of the way until needed. The 99-pound weight capacity per shelf is high enough to support heavy laser printers, which commonly weigh between 20 and 40 pounds but can reach heavier ranges in all-in-one models. Two tiers give you one surface for the printer and a second level below for paper reams or a small accessory tray.\n\nThis stand suits people who have underused space beneath their desk and want to free up the desktop surface entirely rather than dedicating a side area to printing equipment.",
    specs: ["13.4 inch height", "99 lbs capacity", "Ebony black", "2 tiers"],
    pros: [
      "4.7 stars highest rating in roundup",
      "13.4-inch height fits under standard desks",
      "99-lb capacity handles heavy laser printers",
      "Under $36",
    ],
    cons: [
      "No drawer or concealed storage",
      "No cable management",
      "Ebony black only, no color options",
    ],
    bestFor:
      "Buyers who specifically need a printer stand that slides completely under the desk",
  },
  {
    id: "hoobro-2-tier-rustic",
    rank: 3,
    badge: "Best Rustic Brown 2-Tier",
    name: "HOOBRO 2-Tier Printer Stand, Industrial Under Desk Cart with Shelf, 88 lbs, Rustic Brown",
    price: "~$32.99",
    rating: "4.5 stars",
    reviews: "2,359 reviews",
    imageUrl: `${BASE}/hoobro-2-tier-rustic.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08BR5JJQF?tag=theofficejournal-20",
    description:
      "This two-tier rolling cart combines an industrial steel frame with rustic brown wood-look shelves, which allows it to blend into home offices furnished with warm wood desks, walnut credenzas, or natural wood shelving rather than looking like a utility cart dropped into a living space. Each shelf holds up to 88 pounds, which is sufficient for any standard inkjet or laser printer used in a home setting, and the lower shelf accommodates a full ream of paper or a second device such as a small shredder. Four rolling casters allow you to pull the stand out for paper loading or to move it between rooms and then push it back into position when done.\n\nThe open-shelf design provides good airflow around the printer base, which is beneficial for inkjet printers that warm up during use. People who have invested in a warm wood desk setup and want a printer stand that complements rather than clashes with that aesthetic will find this cart the most compatible option in its price range. There is no built-in power outlet or cable management, so outlet access needs to be planned separately.",
    specs: ["88 lbs per shelf", "Rustic brown", "2 tiers", "Rolling casters"],
    pros: [
      "2,359 reviews at 4.5 stars strong validation",
      "88-lb capacity handles standard home printers",
      "Rustic brown pairs with warm wood desks",
      "Under $33",
    ],
    cons: [
      "No drawer or concealed storage",
      "No power outlet",
      "Open shelves only",
    ],
    bestFor:
      "Small home offices with warm wood tones needing a rustic brown rolling printer cart",
  },
  {
    id: "hoobro-3-tier-power",
    rank: 4,
    badge: "Best 3-Tier with Power Access",
    name: "HOOBRO 3-Tier Mobile Printer Table, Rolling Cart with Power Outlet and USB Ports, Rustic Brown",
    price: "~$34.99",
    rating: "4.5 stars",
    reviews: "976 reviews",
    imageUrl: `${BASE}/hoobro-3-tier-power.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BVHYLM57?tag=theofficejournal-20",
    description:
      "This three-tier cart addresses a specific problem common in apartments and small home offices: the nearest wall outlet is not close enough to where the printer needs to sit. A built-in power outlet and two USB ports are integrated into the cart frame, so the printer, a charging cable, and a small lamp can all be powered from the cart itself rather than requiring extension cords run across the floor. Three open shelves create distinct zones for the printer on top, paper supplies on the middle shelf, and a scanner or office accessories on the bottom shelf, which helps users who need to store more than just a printer.\n\nSide hooks provide additional hanging points for lightweight accessories such as a headphone or cable organizer. The rustic brown finish matches the two-tier HOOBRO cart, making it a compatible pair for users who want a matching set. Each shelf supports up to 44 pounds, which covers most inkjet printers but should be checked against the weight of heavier laser models before purchasing.",
    specs: ["Power outlet", "USB ports", "3 tiers", "44 lbs per shelf"],
    pros: [
      "3 tiers plus power outlet under $35",
      "Power outlet and 2 USB ports",
      "Side hooks for accessory storage",
      "4.5 stars",
    ],
    cons: [
      "44-lb capacity limit requires weight verification",
      "No drawer",
      "976 reviews smaller than top picks",
    ],
    bestFor:
      "Apartments and small offices lacking a nearby outlet where 3 storage tiers are more useful than a single drawer",
  },
  {
    id: "tutotak-white-power",
    rank: 5,
    badge: "Best White Finish with Power Outlets",
    name: "TUTOTAK 2-Tier Printer Stand, Rolling Cart with Power Outlets and USB Ports, White",
    price: "~$26.99",
    rating: "4.4 stars",
    reviews: "780 reviews",
    imageUrl: `${BASE}/tutotak-white-power.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D1K1462B?tag=theofficejournal-20",
    description:
      "White printer stands are uncommon in this product category, where most options default to black or rustic brown, so this TUTOTAK cart fills a specific gap for people working in light-colored or Scandinavian-style home offices where a black steel cart would stand out visually. The two-tier frame provides one surface for the printer and a lower shelf for paper, and the built-in power outlet with USB ports means the printer does not need its own dedicated wall socket. Locking wheels let you roll the cart to reload paper or clean underneath, then lock it securely while printing.\n\nThe white finish pairs naturally with white IKEA desks, light gray setups, and Scandinavian-influenced workspaces where color cohesion across furniture matters. This is the most affordable option in the roundup that combines a power outlet with a white finish, making it the practical pick for light-colored offices on a budget. Buyers should verify the outlet count and shelf weight limit on the current listing before purchasing, as specifications can vary between production batches.",
    specs: ["Power outlet", "USB ports", "White finish", "Locking wheels"],
    pros: [
      "Lowest price with power outlet integration",
      "White finish uncommon in this category",
      "Locking wheels included",
      "4.4 stars",
    ],
    cons: [
      "780 reviews smaller sample",
      "Verify outlet count and weight capacity on listing",
      "2-tier only with no drawer",
    ],
    bestFor:
      "Light-colored home office setups needing power outlet access at the lowest possible price",
  },
  {
    id: "hoobro-charging-station",
    rank: 6,
    badge: "Best Compact Charging Cart",
    name: "HOOBRO 2-Tier Printer Stand with Charging Station, 1 Outlet and 2 USB Ports, Rustic Brown",
    price: "~$26.99",
    rating: "4.4 stars",
    reviews: "708 reviews",
    imageUrl: `${BASE}/hoobro-charging-station.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CCV5YC4L?tag=theofficejournal-20",
    description:
      "This compact two-tier cart includes a built-in charging station with one power outlet and two USB ports integrated into the side frame, allowing a printer, a phone, and a small device to charge from the cart without requiring a separate power strip. The rustic brown wood-look shelves and black metal frame give it the same warm industrial aesthetic as the other HOOBRO models in this roundup, which suits home offices decorated with natural wood tones. The two-tier layout puts the printer at working height on the top shelf while the lower shelf holds paper or a small scanner.\n\nLocking wheels allow the cart to be moved for paper loading and then secured in place during printing operations. The weight capacity is 44 pounds per shelf, which covers most consumer inkjet printers but should be confirmed against heavier devices before buying. Buyers who specifically need more than one power outlet should note that only one outlet is included and plan accordingly.",
    specs: ["1 outlet", "2 USB ports", "Rustic brown", "2 tiers"],
    pros: [
      "$26.99 lowest price in roundup with power outlet",
      "Rustic brown pairs with warm wood desks",
      "Compact 2-tier format",
      "1 outlet and 2 USB built in",
    ],
    cons: [
      "44-lb capacity excludes some heavier printers",
      "708 reviews smaller sample",
      "Only 1 outlet, not 2",
    ],
    bestFor:
      "Buyers wanting rustic brown aesthetics with power outlet access at the lowest price point",
  },
  {
    id: "yaohuoo-22x15-fabric",
    rank: 7,
    badge: "Best for Larger Printers",
    name: "YAOHUOO 22x15 Printer Stand with Fabric Drawer, 2-Tier Rolling Cart, 88 lbs Per Shelf",
    price: "~$39.98",
    rating: "4.5 stars",
    reviews: "924 reviews",
    imageUrl: `${BASE}/yaohuoo-22x15-fabric.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CGHMP9BH?tag=theofficejournal-20",
    description:
      "Modern all-in-one inkjet printers commonly measure 18 to 22 inches wide due to their scanning bed, paper tray, and output tray, and this cart's 22-by-15-inch top surface is sized to support those wider devices safely without leaving the printer hanging over the edge. Every other stand in this roundup tops out at 15 to 18 inches wide, which is insufficient for the largest consumer all-in-one models. An 88-pound capacity per shelf means even heavier multi-function laser printers used in small offices are well within the supported range.\n\nA fabric-lined pull-out drawer on the lower section stores ink cartridges, cleaning supplies, or USB cables out of sight. Four casters with locks allow the cart to be repositioned for paper loading and then secured during printing. Users who own a wide all-in-one printer and have been struggling to find a stand that actually fits the footprint without overhanging will find this the most functionally appropriate option in the roundup, at the cost of a wider overall floor footprint.",
    specs: ["22x15 inch surface", "88 lbs per shelf", "Fabric drawer", "2 tiers"],
    pros: [
      "22-inch top surface fits wide all-in-one printers",
      "88-lb per shelf high capacity",
      "Fabric drawer for concealed storage",
      "4.5 stars 924 reviews",
    ],
    cons: [
      "22-inch width is the largest footprint in this roundup",
      "No power outlet",
      "Fabric drawer lighter than wood construction",
    ],
    bestFor:
      "Buyers with a wide all-in-one inkjet printer that would not fit safely on a narrower compact stand",
  },
  {
    id: "vyuol-3-tier-dual-rod",
    rank: 8,
    badge: "Best Structural Design for Stability",
    name: "VYUOL 3-Tier Printer Stand with Fabric Drawer, Dual-Rod Support, Rustic Brown",
    price: "~$27.99",
    rating: "4.7 stars",
    reviews: "228 reviews",
    imageUrl: `${BASE}/vyuol-3-tier-dual-rod.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DQ55HR7H?tag=theofficejournal-20",
    description:
      "The VYUOL uses a dual-rod frame construction, meaning two vertical support rods run along each side of the cart rather than the single rod used in most budget printer stands. This additional rod reduces the lateral flex and wobble that single-rod carts exhibit when a printer vibrates during a print job, which is a practical difference for users who have had lighter carts shift or tip slightly while printing. Three tiers give this stand the most storage levels of any option in the roundup at its price point, allowing the top shelf for the printer, the middle shelf for a scanner or router, and the lower shelf for paper supplies or a small shredder. A fabric pull-out drawer sits below the bottom shelf for storing ink cartridges, cables, and small accessories. The rustic brown and black finish matches the broader HOOBRO and similar industrial-style carts. For a three-tier design with a stability-focused frame and a drawer, this is the most feature-complete budget option, though buyers who need power outlet access will need to use a separate power strip.",
    specs: ["Dual-rod frame", "3 tiers", "Fabric drawer", "Rustic brown"],
    pros: [
      "4.7 stars tied highest rating in roundup",
      "Dual-rod frame reduces wobble during printing",
      "3 tiers for printer plus scanner plus supplies",
      "$27.99 budget-friendly",
    ],
    cons: [
      "228 reviews small sample for confident recommendation",
      "Fabric drawer lighter construction",
      "No power outlet",
    ],
    bestFor:
      "Buyers prioritizing structural stability who want a 3-tier rustic brown cart at a budget price",
  },
];

export interface AtAGlanceRow {
  id: string;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
}

export const atAGlanceRows: AtAGlanceRow[] = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  rating: p.rating,
  reviews: p.reviews,
}));

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the best small printer stand under $35?",
    a: "99 are all under $35.",
  },
  {
    q: "How low does a printer stand need to be to fit under a desk?",
    a: "Standard desk height is 29 to 30 inches. 4-inch model is the only one in this roundup specifically rated for under-desk use. Most 2-tier stands are 19 to 23 inches tall and will not fit under a standard desk.",
  },
  {
    q: "Which small printer stand supports the heaviest printers?",
    a: "The VASAGLE rates at 99 lbs per shelf, the highest in this roundup. The YAOHUOO 22x15 and HOOBRO 2-Tier both rate at 88 lbs per shelf. These three handle any standard home laser printer.",
  },
  {
    q: "Do any of these small printer stands include power outlets?",
    a: "The HOOBRO 3-Tier, TUTOTAK, and HOOBRO Charging Station all include built-in power outlets and USB ports. 99 is the lowest-cost option with power access.",
  },
  {
    q: "What is the narrowest compact printer stand option?",
    a: "7 inches is the second narrowest.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-printer-stands-with-storage",
    title: "Best Printer Stands with Storage (2026)",
  },
  {
    href: "/guide/best-printer-stands-with-file-drawers",
    title: "Best Printer Stands with File Drawers (2026)",
  },
  {
    href: "/guide/best-under-desk-storage-drawers",
    title: "Best Under Desk Storage Drawers (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
];

export const introParagraphs: string[] = [
  "Small printer stands keep the printer accessible without adding bulk to a compact workspace. This guide covers 2-tier and 3-tier carts under 23 inches wide, ranked by review count. Dimensions and weight capacity are listed for each pick.",
  "In a small home office or a shared room, a standard printer stand can feel like too much furniture. You need the printer off your desk but you do not have floor space to spare. A compact printer stand solves this by keeping the printer accessible at the right height while fitting in the gaps a larger cart cannot, such as beside a bookshelf, in a closet corner, or at the end of a narrow desk run.",
  "The size decision is less obvious than it looks. Width alone does not tell the whole story: a 14-inch-wide cart might fit your footprint but be too shallow front-to-back for a wide-format printer. Weight capacity varies widely across compact models, which matters if you have a laser printer rather than an inkjet. Some small stands include built-in power outlets, which eliminates an extension cord from the equation. Others are low-profile enough to slide under a desk entirely, turning dead floor space into printer storage without adding height.",
  "2-tier carts have a printer shelf and a lower storage tier. 3-tier carts add a middle tier, useful for a scanner or paper supplies. Most compact printer stands in this roundup are 2-tier. The 3-tier options (HOOBRO 3-Tier, VYUOL) cost slightly more but add useful surface area.",
  "Home inkjet printers weigh 5 to 15 lbs. Laser printers range from 20 to 50 lbs. Most compact carts in this roundup have 44 to 99 lbs per shelf. If you have a laser printer, verify the weight capacity matches your specific model before purchasing.",
  "Three picks in this roundup include built-in power outlets and USB ports: the HOOBRO 3-Tier, TUTOTAK, and HOOBRO Charging Station. All three are under $35, making this a low-cost feature upgrade if your printer area lacks a nearby wall outlet.",
  "Filter by size, power outlet, and finish."
];

export const howWeEvaluated: { title: string; description: string }[] = [];

export const howToChoose: { subheading: string }[] = [];

export const buyingCriteria: { criterion: string; explanation: string }[] = [];
