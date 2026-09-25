const BASE = "/images/guides/best-under-desk-storage-drawers";
export const guideSlug = "best-under-desk-storage-drawers";
export const guideTitle = "The Best Under Desk Storage Drawers for a Better Workspace";
export const metaTitle = "Best Under Desk Storage Drawers for Home Offices (2026)";
export const metaDescription =
  "How 9 under desk storage drawers compare on features, build and practical fit, with clear notes on who each one suits.";
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
    id: "yoousoo-2pack-adhesive",
    rank: 1,
    badge: "Best Adhesive Option by Review Count",
    name: "YOOUSOO 2-Pack Under Desk Storage Drawer, Hidden Slide Out, Self-Adhesive, White",
    price: "~$15.99",
    rating: "4.3 stars",
    reviews: "1,999 reviews",
    imageUrl: `${BASE}/yoousoo-2pack-adhesive.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08B3XHWJD?tag=theofficejournal-20",
    description:
      "This YOOUSOO drawer attaches to the underside of a desk using a self-adhesive strip rather than screws or clamps, which means installation requires no tools, no drilling, and no damage to the desk surface. The drawer slides out horizontally from beneath the desk to reveal a hidden storage compartment sized for everyday small items such as pens, sticky notes, a phone charger, or a small notebook. A two-pack is included in a single purchase, which allows one drawer near the keyboard for frequently accessed items and a second drawer elsewhere on the underside for less-used supplies.\n\nThe white finish blends with the underside of most light-colored desks and does not draw attention when the drawer is closed. This configuration is particularly suited to renters in apartments who cannot drill into furniture and need a fully reversible storage solution. The adhesive bond requires a smooth, flat desk underside to adhere properly; textured, rough, or porous surfaces may not provide a reliable hold.",
    specs: ["2-pack", "Self-adhesive", "No drill", "White"],
    pros: [
      "Most reviewed under desk drawer in roundup (1,999)",
      "2-pack at $15.99 lowest per-drawer cost",
      "No drilling ideal for renters",
      "White finish",
    ],
    cons: [
      "4.3 stars lowest rating in roundup",
      "Adhesive fails on rough or textured surfaces",
      "Lower weight limit than clamped alternatives",
    ],
    bestFor:
      "Renters with smooth-underside desks who need light storage for small everyday items at the lowest price",
  },
  {
    id: "lockable-double-drawer",
    rank: 2,
    badge: "Best Premium Option with Lock",
    name: "Under Desk Drawer Slide-Out, Lockable Metal Storage with Cable Management, Double Drawers",
    price: "~$99.99",
    rating: "4.5 stars",
    reviews: "1,329 reviews",
    imageUrl: `${BASE}/lockable-double-drawer.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DRDJ3PVQ?tag=theofficejournal-20",
    description:
      "This unit is the only under-desk drawer in this roundup that includes a lock, which means the contents can be secured against access by others sharing the space, a practical feature in shared home offices, co-working setups, or households with children. Two separate drawers slide out independently, giving twice the storage capacity of a single-drawer option without taking up additional desk space horizontally.\n\nIntegrated cable management channels run along the underside of the unit to route power or data cables cleanly so they do not drape loosely beneath the desk. The metal construction is more rigid than plastic drawer options and supports heavier loads without flexing. Installing this unit requires drilling into the desk underside for a permanent mount, making it appropriate for homeowners or long-term office setups rather than renters. Buyers who need basic pen-and-notepad storage and are not concerned with security may find the price difficult to justify, but for those who specifically need a lockable under-desk solution with dual storage and cable management in one unit, there is no direct competitor in this roundup.",
    specs: ["Lockable", "Cable management", "Double drawers", "Metal"],
    pros: [
      "Only lockable drawer in this roundup",
      "Cable management integrated",
      "Double drawer doubles storage",
      "4.5 stars 1,329 reviews",
    ],
    cons: [
      "$99.99 highest price by a wide margin",
      "Requires drilling, not renter-friendly",
      "Overkill for basic pen and notepad storage",
    ],
    bestFor:
      "permanent home offices where document or item security is a priority",
  },
  {
    id: "homeify-clamp-on",
    rank: 3,
    badge: "Best Clamp-On: No Drilling, No Adhesive",
    name: "Homeify Under Desk Drawer Organizer Clamp-On, Mesh Metal, 1 Drawer, No Drill, Black",
    price: "~$21.99",
    rating: "4.2 stars",
    reviews: "889 reviews",
    imageUrl: `${BASE}/homeify-clamp-on.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CKZJ43CR?tag=theofficejournal-20",
    description:
      "The Homeify drawer attaches by clamping onto the edge of the desk rather than using adhesive or drilling, which means it can be installed and removed without leaving any marks, residue, or holes on the desk surface. This makes it a strong option for renters who want something more secure than adhesive but cannot drill, or for users who need to move the drawer to a different desk occasionally. The metal mesh construction resists bending and provides more durability than plastic drawer alternatives, which can crack or warp over time with heavier loads.\n\nThe drawer slides out horizontally beneath the desk to store small accessories, stationery, and everyday items within reach. To use this drawer the desk must have an exposed edge that falls within the clamp's adjustable range; desks with very thick tops, a lipped edge, or a frame that blocks the underside edge may not be compatible. Users should measure their desk edge before purchasing to confirm the clamp will fit.",
    specs: ["Clamp-on", "No drill", "Mesh metal", "Removable"],
    pros: [
      "No drilling required, renter-friendly",
      "Removable without surface damage",
      "Metal mesh more durable than plastic",
      "No adhesive dependency",
    ],
    cons: [
      "4.2 stars second lowest in roundup",
      "Requires desk edge within clamp range",
      "Single drawer only",
    ],
    bestFor:
      "Renters with a desk edge within clamp range who want a removable under-desk drawer without adhesive",
  },
  {
    id: "bostitch-konnect-2pack",
    rank: 4,
    badge: "Best Value Adhesive with Dividers",
    name: "Bostitch Konnect Under Desk Drawer, Self-Adhesive, 4 Customizable Dividers, 2-Pack, Black",
    price: "~$11.97",
    rating: "4.6 stars",
    reviews: "806 reviews",
    imageUrl: `${BASE}/bostitch-konnect.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CJCJTVJ6?tag=theofficejournal-20",
    description:
      "The Bostitch Konnect drawer uses a self-adhesive mount to attach to the underside of a desk without drilling, and each drawer includes four removable dividers that can be arranged to create separate compartments for different item types such as pens, small scissors, erasers, and sticky note pads. The ability to customize the internal layout is a meaningful advantage over drawers with a single open cavity, because items do not shift around or pile on top of each other when the drawer is opened or closed. A two-pack is included, allowing two drawers to be installed at different positions under the same desk or on separate desks.\n\nBostitch is a brand with a history in office products, which gives this drawer more name recognition than most generic options in this category. The adhesive requires a smooth, flat underside to bond properly, and the weight the drawer can hold is limited by the strength of the adhesive bond rather than the drawer structure itself. This is the most affordable option in the roundup for buyers who want organized, divided under-desk storage rather than a single open tray.",
    specs: ["2-pack", "4 dividers", "Self-adhesive", "Black"],
    pros: [
      "Lowest price at $11.97 for 2 units",
      "4.6 stars highest among adhesive picks",
      "Bostitch recognized office brand",
      "4 customizable dividers per drawer",
    ],
    cons: [
      "Adhesive weight limits apply",
      "Requires smooth flat desk underside",
      "No lock",
    ],
    bestFor:
      "Buyers wanting organized divided under-desk storage at the lowest price from a recognizable office brand",
  },
  {
    id: "svnnelp-3pack-system",
    rank: 5,
    badge: "Best System Approach with Three Sizes",
    name: "SVNNELP Under Desk Drawer 3-Pack (Large, Medium, Small), Slide Out, Clear Black",
    price: "~$30.99",
    rating: "4.6 stars",
    reviews: "364 reviews",
    imageUrl: `${BASE}/svnnelp-3pack.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CX9GS4BC?tag=theofficejournal-20",
    description:
      "This SVNNELP set includes three drawers of different sizes in a single purchase, which means a large drawer for bulkier items like notepads and chargers, a medium drawer for pens and markers, and a small drawer for tiny accessories like earbuds or paper clips can all be installed under the same desk. Each drawer uses a self-adhesive mount that attaches to the flat underside without drilling or clamping. The clear panels on each drawer let the user see the contents at a glance without sliding the drawer open, which reduces the time spent searching for specific items. The three-size system is designed to be used together as an organized under-desk station rather than as standalone units, and buyers who want a single purchase that covers multiple storage categories will find this the most complete adhesive option in the roundup.\n\nEach unit needs its own smooth, flat adhesive contact point on the desk underside, so a desk with sufficient flat surface area beneath is required. The adhesive weight limits apply to all three units, so this system is suited for lightweight office supplies rather than heavier items.",
    specs: ["3-pack", "Three sizes", "Clear panels", "Self-adhesive"],
    pros: [
      "Three different sizes create an organized system",
      "4.6 stars matches highest adhesive rating",
      "Clear panels show contents without opening",
      "One purchase covers multiple storage needs",
    ],
    cons: [
      "364 reviews relatively small sample",
      "Adhesive limits apply to all three units",
      "Requires three smooth attachment points",
    ],
    bestFor:
      "Buyers wanting an organized under-desk system with different drawer sizes for different item types",
  },
  {
    id: "mofangtech-dual-tier",
    rank: 6,
    badge: "Best Dual-Tier at Mid-Range",
    name: "Mofangtech Dual-Tier Under Desk Drawer, 2 Layers, 15.3 x 9.8 x 5.1 inches, Metal, Black",
    price: "~$54.99",
    rating: "4.5 stars",
    reviews: "192 reviews",
    imageUrl: `${BASE}/mofangtech-dual-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0F2MD4L4X?tag=theofficejournal-20",
    description:
      "The Mofangtech drawer unit contains two separate storage layers stacked vertically within the same under-desk footprint, which doubles the number of items that can be stored compared to a single-layer drawer without occupying any additional horizontal space under the desk. 1 inches allow buyers to measure their under-desk clearance before purchasing and confirm there is enough vertical space between the desk underside and the user's legs for the unit to fit comfortably without interfering with leg movement. Metal construction throughout the unit provides rigidity and avoids the flex and looseness that can affect plastic under-desk drawers over time.\n\nInstallation requires drilling screws into the desk underside for a permanent bracket mount, which makes this appropriate for homeowners or long-term office setups. 1-inch total height is the most important measurement to verify, as desks with lower clearance or users who sit close to the desk surface may find this unit uncomfortably close to their knees.",
    specs: ["Dual-tier", "2 layers", "Metal", "Drill required"],
    pros: [
      "Dual-tier doubles storage capacity",
      "Known dimensions allow clearance planning",
      "Metal construction",
      "4.5 stars",
    ],
    cons: [
      "5.1-inch height requires sufficient under-desk clearance",
      "Requires drilling, not renter-friendly",
      "192 reviews small sample",
    ],
    bestFor:
      "Permanent home offices with sufficient under-desk clearance who want double the storage of a single drawer",
  },
  {
    id: "unitedpower-pullout",
    rank: 7,
    badge: "Best Single-Layer Metal Option",
    name: "UNITEDPOWER Under Desk Drawer Storage, Pull-Out Hidden Counter Drawer, Metal, Black",
    price: "~$39.99",
    rating: "4.6 stars",
    reviews: "167 reviews",
    imageUrl: `${BASE}/unitedpower-pullout.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BY8PNXJ1?tag=theofficejournal-20",
    description:
      "The UNITEDPOWER drawer is a single-layer pull-out unit that mounts to the underside of a desk via a bracket installation, providing a hidden storage compartment that slides out horizontally when needed and tucks completely out of sight when closed. The metal construction gives it more structural rigidity than plastic under-desk drawers and allows it to hold a reasonable load of office supplies without the drawer sagging or deforming over time. Because it is a single-layer design, the unit sits closer to the desk underside than dual-tier alternatives, which makes it a better fit for desks with limited vertical clearance between the underside and the user's legs. Installation requires drilling, so this is appropriate for homeowners or anyone in a permanent office setup who is comfortable with a fixed mount. The mid-range price point of a moderate amount positions this between the budget adhesive options and the premium lockable units in this roundup, making it the practical choice for a buyer who wants metal construction with a simple, clean single-drawer format without paying for a lock or dual tiers they do not need.",
    specs: ["Single layer", "Metal", "Pull-out", "Drill required"],
    pros: [
      "4.6 stars among highest initial ratings in roundup",
      "Metal construction competitive at price",
      "Compact single-layer format",
    ],
    cons: [
      "167 reviews small sample",
      "Requires drilling, not renter-friendly",
      "Single layer only",
    ],
    bestFor:
      "Buyers wanting metal construction and a high initial rating at mid-range price who own the desk",
  },
  {
    id: "vivo-16-dual-tier",
    rank: 8,
    badge: "Premium Dual-Tier from Recognized Brand",
    name: "VIVO 16 inch Slide Out Dual-Tier Desk Drawer, Under Desk 2-Layer Storage, Black",
    price: "~$89.99",
    rating: "4.2 stars",
    reviews: "157 reviews",
    imageUrl: `${BASE}/vivo-16-dual-tier.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CC6Y2L4K?tag=theofficejournal-20",
    description:
      "VIVO is a brand known across the desk accessory category for monitor arms, keyboard trays, and storage products, and this drawer unit carries that brand familiarity into under-desk storage for buyers who prefer purchasing from a name they recognize. The 16-inch width is the widest single under-desk drawer in this roundup, which provides more horizontal storage space per drawer than narrower alternatives and is better suited to users who need to store longer items such as rulers, scissors, or tablet pens. A dual-tier design stacks two storage layers within the same under-desk footprint, effectively doubling capacity compared to a single-layer unit. The unit mounts permanently via a drill-installed bracket, making it appropriate for permanent home offices. At a moderate amount this unit costs nearly as much as the lockable double-drawer option in this roundup, which also has a lock and cable management. Buyers who do not need a lock but specifically want VIVO's brand and the wider 16-inch drawer width will find this the fitting choice; those comparing purely on features per dollar should weigh both premium options carefully.",
    specs: ["16 inch width", "Dual-tier", "VIVO brand", "Drill required"],
    pros: [
      "VIVO established brand in desk accessories",
      "16-inch width largest storage area in roundup",
      "Dual-tier doubles capacity",
    ],
    cons: [
      "4.2 stars lowest in roundup",
      "$89.99 close to lockable option at $99.99 with fewer features",
      "157 reviews small sample",
    ],
    bestFor:
      "Buyers who specifically want the VIVO brand and need a wide dual-tier drawer without a lock",
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
    q: "Do I need to drill to install an under desk storage drawer?",
    a: "It depends on the type. Adhesive drawers (YOOUSOO, Bostitch Konnect, SVNNELP) require no drilling and no clamp, just a smooth underside. The Homeify clamp-on requires a desk edge but no drilling. Bracket-mount drawers (lockable double-drawer, Mofangtech, UNITEDPOWER, VIVO) require drilling for permanent installation.",
  },
  {
    q: "What is the weight limit for adhesive under desk drawers?",
    a: "Most adhesive drawers support 3 to 8 lbs of small items such as pens, notepads, and accessories. They are not suited for heavy items like books. Always check the specific product listing for the exact weight rating.",
  },
  {
    q: "Can I attach an under desk drawer to a glass desk?",
    a: "Adhesive options may not adhere safely to glass. Clamp-on options require a solid desk edge. Glass desks are generally incompatible with all three types. Contact the manufacturer before purchasing.",
  },
  {
    q: "Which under desk drawer is best for renters?",
    a: "Adhesive options (YOOUSOO, Bostitch, SVNNELP) and the Homeify clamp-on are the renter-friendly choices as they require no drilling. The lockable metal drawer and VIVO options require permanent installation.",
  },
  {
    q: "How much do under desk storage drawers cost?",
    a: "Range is $11.97 (Bostitch Konnect 2-pack) to $99.99 (lockable metal double-drawer). Adhesive options range from $11.97 to $30.99. The clamp-on Homeify is $21.99. Bracket-mount options range from $39.99 to $99.99.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  {
    href: "/guide/best-clamp-on-desk-drawers",
    title: "Best Clamp-On Desk Drawers (2026)",
  },
  {
    href: "/guide/small-desk-organization-ideas",
    title: "Small Desk Organization Ideas",
  },
  {
    href: "/guide/under-desk-cable-management",
    title: "Under Desk Cable Management Guide",
  },
  {
    href: "/guide/best-desk-shelves-small-desks",
    title: "Best Desk Shelves for Small Desks (2026)",
  },
];

export const introParagraphs: string[] = [
  "Under desk storage drawers add hidden compartment space below the desk surface without taking up floor or desktop area. This guide covers adhesive, clamp-on, and bracket-mount options ranked by review count and rating. Installation requirements differ by type.",
  "Most desks are sold without drawers, which means pens, charging cables, sticky notes, USB drives, and small accessories end up either on the desk surface or scattered across the room. Under-desk storage drawers reclaim the dead space between your desk surface and the floor. They mount to the underside of the desk and pull out when you need them, leaving the top clear and the floor below completely open.",
  "The mounting method is the decision that matters most and it is the one most buyers overlook. Adhesive drawers require a smooth, flat underside with no texture or paint irregularities, otherwise they fall. Clamp-on drawers grip the desk edge and can be moved or removed without any damage, which makes them the right choice for renters or anyone not sure about placement. Bracket-mount drawers screw into the underside for the most secure hold but leave holes behind. Each type also has a different weight limit, and most adhesive options max out around 5 to 8 pounds, which covers small accessories but not anything heavy.",
  "Adhesive drawers stick to the underside of the desk with no tools. Clamp-on drawers grip the desk edge with a C-clamp and no drilling. Bracket-mount drawers screw into the underside of the desk permanently. Renters should choose adhesive or clamp-on to avoid surface damage.",
  "Self-adhesive under desk drawers require a flat, smooth, and dry desk underside for the adhesive to bond reliably. Rough, textured, painted, or glass surfaces may prevent proper adhesion or cause the drawer to fall. Always test adhesion in a low-risk area first.",
  "Compare adhesive, clamp-on, and bracket-mount options."
];

export const howWeEvaluated: { title: string; description: string }[] = [];

export const howToChoose: { subheading: string }[] = [];

export const buyingCriteria: { criterion: string; explanation: string }[] = [];
