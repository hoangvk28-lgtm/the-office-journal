const BASE = "/images/guides/best-rolling-carts-with-drawers";

export const guideSlug = "best-rolling-carts-with-drawers";
export const guideTitle = "The Best Rolling Carts with Drawers, Compared";
export const metaTitle = "Best Rolling Carts with Drawers (2026)";
export const metaDescription =
  "We compared 9 rolling carts with drawers on features, build and practical fit to help you choose the right one for your space.";
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
    id: "iris-usa-4-drawer",
    rank: 1,
    badge: "Best Overall by Trust Signal",
    name: "IRIS USA 4-Drawer Plastic Storage Organizer Rolling Cart, Clear Drawers, Divided Top, Made in USA",
    price: "~$33.99",
    rating: "4.6 stars",
    reviews: "7,851 reviews",
    imageUrl: `${BASE}/iris-usa-4-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07Q4FHWV9?tag=theofficejournal-20",
    description:
      "Four clear plastic drawers let you see exactly what is stored in each compartment without pulling them open, which saves time when multiple drawers hold similar-looking supplies like pens, cables, and sticky notes. A divided top tray adds a fifth open storage zone for items you reach for constantly, such as scissors or a stapler, so they stay accessible without taking up drawer space. The casters are removable, meaning the cart can be locked into a corner permanently without rolling underfoot if your workspace does not require it to move. Made in the USA, which is relevant for buyers who prefer domestically manufactured products as a proxy for material consistency and quality control. This sits in the mid-range for a four-drawer plastic cart, making it a reasonable choice for a home office that needs organized small-supply storage at desk level.",
    specs: ["4 drawers", "Clear drawers", "Made in USA", "Divided top"],
    pros: [
      "7,851 reviews at 4.6 stars most validated in roundup",
      "Made in USA quality signal",
      "Clear drawers plus divided top tray",
      "Removable casters for stationary option",
    ],
    cons: [
      "Plastic less durable than metal",
      "Black/Pearl color specific",
      "4 drawers fewer compartments than 10-drawer options",
    ],
    bestFor:
      "Home offices wanting the most-validated clear-drawer rolling cart from a Made in USA brand",
  },
  {
    id: "homz-3-tier-clear-360",
    rank: 2,
    badge: "Best 360-Degree Casters with Clear Drawers",
    name: "HOMZ 3-Tier Rolling Storage Cart, 3 Clear Removable Drawers, 360-Degree Casters, White",
    price: "~$49.99",
    rating: "4.6 stars",
    reviews: "7,224 reviews",
    imageUrl: `${BASE}/homz-3-tier-clear.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0823H3Z95?tag=theofficejournal-20",
    description:
      "Standard rolling carts only roll forward and backward, but this model uses 360-degree swivel casters that let you pull the cart sideways or diagonally out of a tight corner without repositioning yourself. This is particularly useful in compact home offices or closet setups where there is not enough clearance to roll a cart straight out. Three clear drawers allow you to identify contents at a glance from any angle, which is helpful when the cart is stored beside or under a desk at low eye level. The casters detach completely if you decide to convert the cart to a stationary unit once it is placed in a permanent spot. At roughly its price you are paying a premium over the four-drawer IRIS USA model for fewer drawers, so this cart suits buyers who specifically need omnidirectional mobility more than storage volume.",
    specs: ["360-degree casters", "Clear drawers", "Removable casters", "3 drawers"],
    pros: [
      "360-degree casters for corner and tight space maneuverability",
      "Clear drawers identify contents without opening",
      "7,224 reviews at 4.6 stars",
      "Removable casters for stationary use",
    ],
    cons: [
      "$49.99 higher than IRIS USA for fewer drawers",
      "Plastic construction",
      "3 drawers vs 4 on IRIS USA at lower price",
    ],
    bestFor:
      "Tight home offices or corner setups where 360-degree caster maneuverability is useful with clear drawer visibility",
  },
  {
    id: "iris-usa-10-drawer",
    rank: 3,
    badge: "Best for Maximum Compartmentalization",
    name: "IRIS USA 10-Drawer Plastic Storage Organizer Rolling Cart, Clear Drawers, Drawer Stops, Made in USA",
    price: "~$62.99",
    rating: "4.6 stars",
    reviews: "4,257 reviews",
    imageUrl: `${BASE}/iris-usa-10-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08S9RLZXC?tag=theofficejournal-20",
    description:
      "Ten individual clear drawers allow you to assign one drawer per supply category, which is useful for workers who manage a wide variety of small items such as different colored pens, binder clips, push pins, USB adapters, batteries, and tape, each in its own compartment. Built-in drawer stops prevent any drawer from being accidentally pulled completely out of the frame, which matters in a cart this tall where a falling drawer of small parts would scatter across the floor. Each drawer is shallow by design so that items do not pile on top of each other and get buried, making it easier to spot what you need quickly. Made in the USA using the same brand as the four-drawer version, so material quality is consistent.",
    specs: ["10 drawers", "Clear drawers", "Drawer stops", "Made in USA"],
    pros: [
      "10 drawers maximum supply category separation",
      "Drawer stops prevent accidental removal",
      "Clear drawers identify any of 10 compartments",
      "Made in USA",
    ],
    cons: [
      "$62.99 highest price among dedicated drawer carts",
      "Shallower drawers than 4-drawer alternatives",
      "More compartments than most home offices need",
    ],
    bestFor:
      "Home office workers managing a large variety of small supplies who want maximum organized compartmentalization",
  },
  {
    id: "goovilla-hybrid-124lb",
    rank: 4,
    badge: "Best Value for High Weight Capacity",
    name: "Goovilla 3-Tier Rolling Utility Cart, Removable Drawer, 124 lbs, Cups and Hooks, White",
    price: "~$23.99",
    rating: "4.6 stars",
    reviews: "3,559 reviews",
    imageUrl: `${BASE}/goovilla-hybrid.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DNFB8FHD?tag=theofficejournal-20",
    description:
      "This three-tier cart has one removable drawer for concealed storage and two open shelves that can bear significant weight, rated to 124 pounds total, which is enough to support a full-size inkjet or laser printer on the top shelf without flexing. Side-mounted cups hold pens or scissors, and the included hooks can hold headphones, a bag, or charging cables along the frame exterior, turning the side of the cart into usable vertical storage. The design combines a hybrid approach: the single drawer conceals small items you do not want visible while the open shelves keep larger items accessible without having to open anything. This is among the lowest-priced options in this guide. The main tradeoff is that only one drawer is included, so buyers who need to separate multiple categories of small supplies will find the storage options limited compared to four-drawer or ten-drawer alternatives.",
    specs: ["124 lbs capacity", "Removable drawer", "Cups and hooks", "$23.99"],
    pros: [
      "Lowest price at $23.99",
      "124-lb capacity highest for heavy printers",
      "Cups and hooks add accessory storage",
      "4.6 stars 3,559 reviews",
    ],
    cons: [
      "Single removable drawer limited compartmentalization",
      "Lockable wheels only, no removable option",
      "Open shelves for most storage",
    ],
    bestFor:
      "buyers needing a rolling cart to support a heavy printer at the lowest price",
  },
  {
    id: "sunally-waterproof-124lb",
    rank: 5,
    badge: "Best Waterproof Construction Option",
    name: "SUNALLY 3-Tier Rolling Cart with Drawer, 124 lbs, Waterproof PP Material, White",
    price: "~$22.99",
    rating: "4.5 stars",
    reviews: "1,971 reviews",
    imageUrl: `${BASE}/sunally-waterproof.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D34HFHZH?tag=theofficejournal-20",
    description:
      "The frame and shelves are made from polypropylene, a plastic known for resisting moisture without warping or degrading, which makes this cart appropriate for home offices in humid climates, basement workspaces, or rooms adjacent to kitchens and bathrooms where a standard particle-board cart would eventually absorb moisture and weaken. The 124-pound weight capacity matches heavier-duty carts in this guide and can support a printer or other heavy equipment on the top shelf. One removable drawer handles small concealed storage while two open shelves manage larger items. This is one of the most affordable options in the guide. Buyers who do not have a moisture concern and need more drawers will find the Goovilla or IRIS USA options better suited to pure office-supply organization.",
    specs: ["Waterproof PP", "124 lbs", "3 tiers", "$22.99"],
    pros: [
      "Lowest price at $22.99",
      "Waterproof PP for humid environments",
      "124-lb capacity matches Goovilla",
      "1,971 reviews at 4.5 stars",
    ],
    cons: [
      "Single drawer same limitation as Goovilla",
      "Open shelves for most storage",
      "No removable caster option",
    ],
    bestFor:
      "Budget buyers in humid environments where waterproof construction matters or for garages and wet areas",
  },
  {
    id: "yasonic-mesh-baskets",
    rank: 6,
    badge: "Highest Rated - Open Mesh Baskets, Not Drawers",
    name: "YASONIC 3-Tier Rolling Metal Cart, Mesh Baskets, Hanging Cups and Hooks, 66 lbs, Black",
    price: "~$32.99",
    rating: "4.7 stars",
    reviews: "1,773 reviews",
    imageUrl: `${BASE}/yasonic-mesh-baskets.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CRGNKHVW?tag=theofficejournal-20",
    description:
      "This cart uses open metal mesh baskets instead of enclosed drawers, meaning items placed inside are visible and accessible from all sides without needing to pull anything open, which suits buyers who prefer fast grab-and-go access over organized concealed storage. The metal frame and mesh construction make it considerably sturdier than the plastic drawer carts in this guide, and the per-shelf weight capacity of 66 pounds is roughly three times higher than typical plastic carts rated around 22 pounds per shelf. Side-mounted cups and hooks come included for storing pens, scissors, or accessories on the exterior of the cart frame.\n\nThe important distinction to understand before buying is that the baskets are not drawers: items are not hidden from view and will not be contained if the cart tips or if small items slip through the mesh openings. Buyers who want enclosed drawer storage for small loose supplies should choose a different option in this guide.",
    specs: ["4.7 stars", "66 lbs per shelf", "Mesh baskets", "Cups and hooks"],
    pros: [
      "4.7 stars highest rating in roundup",
      "66-lb capacity 3x standard carts",
      "Cups and hooks for accessories",
      "Metal more durable than plastic",
    ],
    cons: [
      "Open mesh baskets NOT enclosed drawers",
      "Black finish limits aesthetic flexibility",
      "Items visible from all sides",
    ],
    bestFor:
      "buyers who want the highest-rated rolling cart and open basket storage is acceptable",
  },
  {
    id: "aokitsink-wood-top",
    rank: 7,
    badge: "Best Premium Option with Wood Top",
    name: "Aokitsink 4-Drawer Rolling Storage Cart, 150 lbs, Metal Frame with Wood Top, Diamond Mesh",
    price: "~$59.99",
    rating: "4.4 stars",
    reviews: "267 reviews",
    imageUrl: `${BASE}/aokitsink-wood-top.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FDB2H7LD?tag=theofficejournal-20",
    description:
      "This cart combines a steel frame with a wood-finished top surface, which allows it to sit next to a wood desk or credenza without the visual mismatch that an all-plastic or all-metal cart would create in a furnished home office. The four drawers use a diamond mesh pattern rather than solid or clear panels, giving them an industrial aesthetic while still providing some visibility of larger items inside. The 150-pound weight capacity is the highest among all carts in this guide and can support heavy equipment including wide-format printers or stacked binders without stressing the frame. At roughly its price, and the premium over the plastic four-drawer alternatives reflects the wood top and metal construction rather than additional compartmentalization. Buyers should note that the wood surface requires care around moisture and should not be left wet, and the relatively small number of purchasers means less real-world feedback on long-term durability compared to the more established options in this guide.",
    specs: ["Wood top", "150 lbs", "4 drawers", "Metal frame"],
    pros: [
      "Only wood top in roundup for desk matching",
      "150-lb highest capacity in roundup",
      "Metal frame plus wood premium look",
      "Diamond mesh drawer design",
    ],
    cons: [
      "267 reviews small sample at $59.99",
      "Wood top requires moisture care",
      "Limited review validation",
    ],
    bestFor:
      "Home offices where the cart needs to visually match a wood desk and 150-lb capacity is needed",
  },
  {
    id: "costway-10-drawer-rainbow",
    rank: 8,
    badge: "Best for Creative Spaces with Color Options",
    name: "COSTWAY 10-Drawer Rolling Storage Cart, Galvanized Metal Frame, Rainbow or Black Option",
    price: "~$49.99",
    rating: "4.4 stars",
    reviews: "247 reviews",
    imageUrl: `${BASE}/costway-10-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BN4YD7M4?tag=theofficejournal-20",
    description:
      "This ten-drawer metal cart is offered in a rainbow color variant where each drawer is a different color, making it visually distinct from every other cart in this guide and suited for creative workspaces, art studios, children's homework areas, or craft rooms where color-coding storage by drawer is useful rather than purely decorative. The frame is made from galvanized steel, which resists rust better than standard untreated metal and is appropriate for slightly damp environments like garages or craft rooms. Individual drawers are removable so you can take an entire drawer to your workspace rather than bringing the whole cart. This competes on price with the IRIS USA ten-drawer but uses opaque drawers instead of clear ones, meaning you cannot see the contents without opening each compartment. Buyers who work in neutral or minimalist home office spaces will likely prefer the clear-drawer alternatives, while buyers in creative or colorful environments will find the rainbow variant a practical aesthetic choice.",
    specs: ["10 drawers", "Rainbow color option", "Galvanized metal", "Removable drawers"],
    pros: [
      "Rainbow color option unique in this category",
      "Galvanized metal rust-resistant",
      "Removable individual drawers",
      "10 drawers for maximum compartments",
    ],
    cons: [
      "247 reviews small sample",
      "IRIS USA 10-drawer has 17x more reviews at same price",
      "Opaque drawers no visibility",
    ],
    bestFor:
      "Creative workspaces or children homework stations where the rainbow color option is a deliberate aesthetic choice",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "What is the difference between a rolling cart with drawers and a rolling utility cart?",
    a: "A rolling cart with drawers has enclosed compartments that conceal items and require pulling to access. A utility cart has open shelves where items are visible from all sides. Drawer carts suit organized concealed storage. Utility carts suit frequently accessed items and heavier loads.",
  },
  {
    q: "How many drawers does a rolling cart need for home office use?",
    a: "For most home office supply storage, 3 to 4 drawers provides adequate separation of categories like paper, pens, tech accessories, and miscellaneous items. The 10-drawer options suit buyers managing a very large variety of small items.",
  },
  {
    q: "Are clear drawer rolling carts better than opaque?",
    a: "Clear drawers let you identify contents without opening each drawer, which saves time when multiple drawers look similar. The IRIS USA and HOMZ clear-drawer models are well-validated for this reason. Opaque drawers provide a cleaner visual appearance.",
  },
  {
    q: "Do rolling carts with drawers work as printer stands?",
    a: "The Goovilla and SUNALLY with 124-lb capacity can support any home office printer. Most other drawer carts in this roundup focus on supply organization and have lower weight capacities. Always verify the top surface weight limit before using any cart as a printer stand.",
  },
  {
    q: "Can I remove the wheels from these rolling carts?",
    a: "The IRIS USA 4-drawer and HOMZ 3-tier clear both offer removable casters for a stationary option. Most other carts in this roundup have fixed wheels. Check the product listing if stationary use is a requirement.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-rolling-carts-home-office", title: "Best Rolling Carts for Home Offices (2026)" },
  { href: "/guide/best-printer-stands-with-storage", title: "Best Printer Stands with Storage (2026)" },
  { href: "/guide/best-desk-shelves-small-desks", title: "Best Desk Shelves for Small Desks (2026)" },
  { href: "/guide/small-desk-organization-ideas", title: "Small Desk Organization Ideas" },
];

export const introParagraphs: string[] = [
  "Rolling carts with drawers ranked by review count. Clear-drawer options, 4-drawer and 10-drawer organizer carts, hybrid open-plus-drawer carts, and premium metal frame options covered. All picks are currently available on Amazon and suited for home office use.",
  "If your home office desk has accumulated a collection of loose supplies with no good place to put them, a rolling cart with drawers is one of the most practical fixes. It stores the things you reach for regularly, keeps them out of sight, and moves out of the way when you need floor space. The decision is about finding the right drawer format for what you actually need to store, not just picking the most popular option.",
  "The number of drawers and their depth matter more than most people expect. A 10-drawer cart gives you more categories but each compartment is shallow, which works for pens, sticky notes, and small office supplies but not for notebooks, cables, or anything bulky. A 4-drawer cart with deeper drawers handles a wider range of item sizes but requires more discipline to stay organized. Clear drawers versus opaque is also a real choice: clear lets you find things at a glance, opaque looks cleaner but means opening drawers to locate items.",
  "Carts with more drawers (10-drawer options) have shallower individual compartments. 4-drawer carts have deeper individual drawers that hold bulkier items. For mixed small supply storage, 4 deep drawers often organizes better than 10 shallow drawers.",
  "Filter by drawer count, material, and capacity."
];

export const howWeEvaluated: { title: string; description: string }[] = [];

export const howToChoose: { subheading: string }[] = [];

export const buyingCriteria: { criterion: string; explanation: string }[] = [];
