export type AccessoryCategory = "organization" | "cables" | "ergonomics" | "tech";

export interface DeskAccessory {
  rank: number;
  category: AccessoryCategory;
  categoryLabel: string;
  badge?: string;
  name: string;
  score: number;
  price: string;
  footprint: string;
  bestFor: string;
  amazonUrl: string;
  description: string;
  whyItWorks: string[];
  tradeoffs: string[];
}

export const guideSlug = "best-small-desk-accessories";
export const guideTitle = "The Best Small Desk Accessories That Actually Save Space for a Better Workspace";
export const metaTitle = "Best Small Desk Accessories That Actually Save Space for Home Offices (2026)";
export const metaDescription = "How 12 small desk accessories that actually save space compare on features, build and practical fit, with clear notes on who each one suits.";
export const guideDescription =
  "Twelve desk accessories evaluated for compact desks under 48 inches, dorm setups, and tiny home offices. Scored on footprint, build quality, and value - with honest tradeoffs and direct Amazon links.";
export const mainKeyword = "small desk accessories";
export const lastUpdated = "2026-05-27";
export const readTime = "11 min";
export const heroImage =
  "/images/media/guides/best-small-desk-accessories-thumbnail.jpg";

export const accessories: DeskAccessory[] = [
  // Organization & Storage
  {
    rank: 1,
    category: "organization",
    categoryLabel: "Organization and Storage",
    badge: "Best Overall",
    name: "Bamboo Monitor Riser with Drawer",
    score: 9.2,
    price: "$35–$45",
    footprint: "22 x 9 inches",
    bestFor: "Overall use on any small desk",
    amazonUrl: "https://www.amazon.com/s?k=bamboo+monitor+riser+drawer&tag=theofficejournal-20",
    description:
      "If you only buy one small desk accessory, make it a monitor riser with built-in storage. 5 inches of monitor height while reclaiming the dead space underneath for keyboards, notebooks, and small office supplies. The drawer holds pens, sticky notes, and cables you would otherwise scatter across the desk.",
    whyItWorks: [
      "22-inch width fits desks as narrow as 36 inches",
      "Sliding drawer adds storage without adding footprint",
      "Bamboo finish looks intentional and hides desk surface scratches",
    ],
    tradeoffs: [
      "Not adjustable in height - measure your monitor first",
      "Drawer is shallow at 1.5 inches - will not fit thicker items",
    ],
  },
  {
    rank: 2,
    category: "organization",
    categoryLabel: "Organization and Storage",
    badge: "Best Budget",
    name: "Compact Mesh Desk Organizer",
    score: 8.7,
    price: "$12–$18",
    footprint: "4 x 6 inches",
    bestFor: "Budget setups, first desk accessories purchase",
    amazonUrl:
      "https://www.amazon.com/s?k=mesh+desk+organizer+compact&tag=theofficejournal-20",
    description:
      "The cheapest accessory on this list and one of the most effective. A simple 6-slot mesh organizer keeps pens, scissors, sticky notes, and phone cables in one place. At roughly 4 x 6 inches, it fits in the corner of even the smallest desk without crowding the working surface.",
    whyItWorks: [
      "Sub-$20 entry point with no real downside",
      "Mesh design lets you see what is inside at a glance",
      "Stackable if you need more storage later",
    ],
    tradeoffs: [
      "Mesh can shed small items like paper clips through the gaps",
      "Not the most premium-looking option for aesthetics-focused setups",
    ],
  },
  {
    rank: 3,
    category: "organization",
    categoryLabel: "Organization and Storage",
    name: "Drawer-Style Under-Desk Organizer",
    score: 8.4,
    price: "$22–$28",
    footprint: "0 (mounted under desk surface)",
    bestFor: "Storage maximalists, desks where the surface is already maxed out",
    amazonUrl:
      "https://www.amazon.com/s?k=under+desk+drawer+organizer&tag=theofficejournal-20",
    description:
      "This adhesive-mounted drawer hangs underneath your desk surface, adding storage without consuming any desktop real estate. Holds pens, notepads, charging cables, and small electronics. Well suited to small desk setups where the top surface is already at capacity.",
    whyItWorks: [
      "Zero desktop footprint - pure bonus storage",
      "Adhesive mount works on most desk materials (skip glass desktops)",
      "Closes out of sight for a cleaner visual look",
    ],
    tradeoffs: [
      "Adhesive can fail on textured or rough surfaces over time",
      "Limited weight capacity at around 3 pounds",
    ],
  },

  // Cable Management
  {
    rank: 4,
    category: "cables",
    categoryLabel: "Cable Management",
    badge: "Best for Cables",
    name: "Under-Desk Cable Management Tray",
    score: 9.0,
    price: "$25–$32",
    footprint: "0 (mounted under desk surface)",
    bestFor: "Anyone with a visible cable nest on or around their desk",
    amazonUrl: "https://www.amazon.com/s?k=under+desk+cable+tray&tag=theofficejournal-20",
    description:
      "The single best upgrade for a small desk is hiding power strips and cable nests underneath the surface. This metal tray clamps to most desk edges and holds a standard power strip plus 6 to 8 cable bundles. Once installed, the desktop stops looking like a server room.",
    whyItWorks: [
      "Removes power strip from desktop entirely",
      "Clamp-on installation - no drilling required",
      "Supports up to 22 pounds, enough for power strips and chargers",
    ],
    tradeoffs: [
      "Installation takes 15 to 20 minutes",
      "Does not fit desks thicker than 1.5 inches at the edge",
    ],
  },
  {
    rank: 5,
    category: "cables",
    categoryLabel: "Cable Management",
    name: "Magnetic Adhesive Cable Clips",
    score: 8.5,
    price: "$8–$14",
    footprint: "0 (mounts on desk edges)",
    bestFor: "Charging cables that fall off the desk repeatedly",
    amazonUrl: "https://www.amazon.com/s?k=magnetic+cable+clips&tag=theofficejournal-20",
    description:
      "A simple problem-solver: phone chargers, USB cables, and headphone cords fall off the desk every time you move them. Adhesive cable clips solve this for. Stick them to the side of your desk and cables stay in reach without sprawling across the surface.",
    whyItWorks: [
      "Sub-$15 fix for a daily annoyance",
      "Does not take desktop space - mounts on edges and undersides",
      "Magnetic clips release cables one-handed",
    ],
    tradeoffs: [
      "Cheap adhesive on budget versions can fail after 6 months",
      "Plastic clips can crack if cables are yanked rather than released",
    ],
  },
  {
    rank: 6,
    category: "cables",
    categoryLabel: "Cable Management",
    name: "Cable Management Box (Compact)",
    score: 8.3,
    price: "$18–$25",
    footprint: "12 x 5 inches",
    bestFor: "Glass desks or rentals where under-desk mounting is not possible",
    amazonUrl:
      "https://www.amazon.com/s?k=cable+management+box+small&tag=theofficejournal-20",
    description:
      "For setups where under-desk mounting is not possible (glass desks, rental restrictions), a desktop cable box hides power strips and cable nests inside a clean enclosure. The compact 12-inch version fits behind monitors on most small desks without intruding on the working area.",
    whyItWorks: [
      "No installation required - just plug in and close the lid",
      "Slim profile fits behind monitors with minimal footprint",
      "Vented to prevent overheating of power strips inside",
    ],
    tradeoffs: [
      "Still takes 12 x 5 inches of surface space",
      "Larger power strips or brick adapters may not fit inside",
    ],
  },

  // Ergonomics & Comfort
  {
    rank: 7,
    category: "ergonomics",
    categoryLabel: "Ergonomics and Comfort",
    badge: "Best for Ergonomics",
    name: "Memory Foam Wrist Rest Set",
    score: 8.6,
    price: "$15–$22",
    footprint: "8 x 9 inches (mouse rest)",
    bestFor: "Long typing and mouse sessions, 3 or more hours per day",
    amazonUrl:
      "https://www.amazon.com/s?k=memory+foam+wrist+rest+set&tag=theofficejournal-20",
    description:
      "Wrist strain builds up over time without obvious warning signs. This set includes one keyboard wrist rest and one mouse pad with built-in wrist support - both made from memory foam with non-slip backing. The compact mouse pad version at 8 x 9 inches fits small desks where full gaming-size pads do not.",
    whyItWorks: [
      "Mouse rest is compact rather than the oversized gaming-style pad",
      "Non-slip backing means no sliding during fast mouse movements",
      "Set covers both keyboard and mouse wrist strain in one purchase",
    ],
    tradeoffs: [
      "Memory foam compresses and flattens after 12 to 18 months of daily use",
      "Fabric covers can stain from skin contact over time",
    ],
  },
  {
    rank: 8,
    category: "ergonomics",
    categoryLabel: "Ergonomics and Comfort",
    badge: "Best for Aesthetics",
    name: "Compact Felt and Cork Desk Mat",
    score: 8.9,
    price: "$20–$28",
    footprint: "24 x 12 inches",
    bestFor: "Aesthetic-focused setups, desks with visible surface damage",
    amazonUrl: "https://www.amazon.com/s?k=felt+cork+desk+mat&tag=theofficejournal-20",
    description:
      "A desk mat does two things at once: it protects the desk surface and visually unifies the setup. The 24 x 12 inch size fits small desks perfectly, large enough for keyboard and mouse but small enough not to overwhelm a 36-inch desk. The combination of felt and cork materials stands out from standard rubber-backed gaming mats.",
    whyItWorks: [
      "Felt side feels premium under hands and wrists during extended use",
      "Cork backing prevents any sliding on smooth desk surfaces",
      "Reversible design extends usable life significantly",
    ],
    tradeoffs: [
      "Felt collects dust and shows pet hair visibly",
      "Spills can stain the felt side - it is not water-resistant",
    ],
  },
  {
    rank: 9,
    category: "ergonomics",
    categoryLabel: "Ergonomics and Comfort",
    name: "Adjustable Footrest for Small Spaces",
    score: 8.2,
    price: "$25–$35",
    footprint: "0 (stows under desk when not in use)",
    bestFor: "Users whose chair height leaves feet unsupported at current desk height",
    amazonUrl:
      "https://www.amazon.com/s?k=adjustable+footrest+small&tag=theofficejournal-20",
    description:
      "If your chair is too tall or your desk is too high for your seated position, a footrest corrects the angle without expensive furniture replacement. This adjustable model rocks slightly for active sitting and stows compactly under most desks when not in use.",
    whyItWorks: [
      "Stows under the desk - zero impact on small floor space when not needed",
      "Adjustable tilt accommodates different leg lengths and sitting positions",
      "Textured top surface keeps shoes from sliding during use",
    ],
    tradeoffs: [
      "Plastic construction feels less solid than metal alternatives",
      "Tilt mechanism can develop a squeak after a few months of use",
    ],
  },

  // Tech & Productivity
  {
    rank: 10,
    category: "tech",
    categoryLabel: "Tech and Productivity",
    badge: "Best for Gaming Desks",
    name: "Slim Headphone Stand with USB Hub",
    score: 8.8,
    price: "$30–$40",
    footprint: "3 x 4 inches",
    bestFor: "Over-ear headphone users, gaming setups",
    amazonUrl:
      "https://www.amazon.com/s?k=headphone+stand+usb+hub&tag=theofficejournal-20",
    description:
      "If you have over-ear headphones, they are either taking up desk space or hanging off your monitor awkwardly. A combined headphone stand and USB hub solves two problems with one footprint - ideal for small gaming desks where every inch matters.",
    whyItWorks: [
      "Vertical orientation reclaims desk surface versus laying headphones flat",
      "4-port USB hub eliminates the need for a separate accessory",
      "Optional LED accent fits gaming desk aesthetics without extra cables",
    ],
    tradeoffs: [
      "USB hub is data-only on most models - no fast charging output",
      "Base footprint is still 3 x 4 inches and cannot be eliminated",
    ],
  },
  {
    rank: 11,
    category: "tech",
    categoryLabel: "Tech and Productivity",
    name: "Magnetic Phone Mount for Monitors",
    score: 8.5,
    price: "$12–$20",
    footprint: "0 (mounts on monitor bezel)",
    bestFor: "Users who need phone visible during work without it on the desk",
    amazonUrl:
      "https://www.amazon.com/s?k=magnetic+phone+monitor+mount&tag=theofficejournal-20",
    description:
      "Your phone does not need a permanent spot on a small desk, but you do need to see it. A magnetic mount clips to the side of your monitor, keeping the phone visible at eye level without using any desktop space at all.",
    whyItWorks: [
      "Removes the phone from the desktop entirely",
      "MagSafe-compatible models work with iPhone 12 and newer with zero setup",
      "Easy to detach when you leave the desk or need to take a call",
    ],
    tradeoffs: [
      "Adhesive mount can leave residue on monitor bezels when removed",
      "Older phones without MagSafe need a magnetic ring sticker added",
    ],
  },
  {
    rank: 12,
    category: "tech",
    categoryLabel: "Tech and Productivity",
    name: "Flip-Style Pomodoro Timer",
    score: 8.4,
    price: "$18–$28",
    footprint: "3 x 3 inches",
    bestFor: "Focus work, study sessions, avoiding phone distraction",
    amazonUrl: "https://www.amazon.com/s?k=flip+pomodoro+timer&tag=theofficejournal-20",
    description:
      "Phones make terrible timers because they are a distraction waiting to happen. A dedicated flip-style Pomodoro timer keeps focus sessions visible without opening another app or unlocking a screen. Most models are roughly the size of a deck of cards, fitting even the most space-starved setup.",
    whyItWorks: [
      "Tiny footprint at roughly 3 x 3 inches",
      "Silent countdown with a gentle alarm that does not disturb neighbors",
      "Pre-set intervals of 5, 15, 25, and 30 minutes cover most focus methods",
    ],
    tradeoffs: [
      "Limited customization on budget models for non-standard interval lengths",
      "Battery-dependent - no plug-in option on most units",
    ],
  },
];

export const quickPicks = accessories.filter((a) => a.badge !== undefined);

export const categoryOrder: AccessoryCategory[] = [
  "organization",
  "cables",
  "ergonomics",
  "tech",
];

export const categoryMeta: Record<
  AccessoryCategory,
  { label: string; icon: string; description: string }
> = {
  organization: {
    label: "Organization and Storage",
    icon: "🗂️",
    description:
      "These three accessories tackle the core small desk problem: vertical storage instead of horizontal sprawl.",
  },
  cables: {
    label: "Cable Management",
    icon: "🔌",
    description:
      "Cables are the silent enemy of small desk setups. Three picks that earn their footprint.",
  },
  ergonomics: {
    label: "Ergonomics and Comfort",
    icon: "✋",
    description:
      "You spend hours at a small desk. These accessories make that sustainable.",
  },
  tech: {
    label: "Tech and Productivity",
    icon: "💻",
    description:
      "The accessories most people skip - and the ones that consistently get mentioned after the fact.",
  },
};

export const badgeColors: Record<string, { bg: string; text: string }> = {
  "Best Overall": { bg: "#7c9068", text: "#fff" },
  "Best Budget": { bg: "#5f7a4a", text: "#fff" },
  "Best for Cables": { bg: "#0891b2", text: "#fff" },
  "Best for Aesthetics": { bg: "#7c3aed", text: "#fff" },
  "Best for Gaming Desks": { bg: "#dc2626", text: "#fff" },
  "Best for Ergonomics": { bg: "#c9a876", text: "#fff" },
};

export const setupCombos = [
  {
    label: "Under $50 - Bare Essentials",
    price: "~$42 total",
    tagline: "Saves roughly 40% of visible desktop clutter",
    items: [
      { name: "Compact mesh desk organizer", price: "$12" },
      { name: "Magnetic cable clips", price: "$10" },
      { name: "Compact desk mat", price: "$20" },
    ],
  },
  {
    label: "$50 to $120 - Balanced Setup",
    price: "~$101 total",
    tagline: "Fundamentally transforms how a small desk feels to use",
    items: [
      { name: "Bamboo monitor riser with drawer", price: "$40" },
      { name: "Under-desk cable tray", price: "$28" },
      { name: "Memory foam wrist rest set", price: "$18" },
      { name: "Magnetic phone mount", price: "$15" },
    ],
  },
  {
    label: "$120 to $200 - Complete Compact Setup",
    price: "~$180 total",
    tagline: "Equivalent to a full home office upgrade",
    items: [
      { name: "Bamboo monitor riser with drawer", price: "$40" },
      { name: "Under-desk cable tray", price: "$28" },
      { name: "Felt and cork desk mat", price: "$25" },
      { name: "Headphone stand with USB hub", price: "$35" },
      { name: "Adjustable footrest", price: "$30" },
      { name: "Flip Pomodoro timer", price: "$22" },
    ],
  },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What should I put on a small desk?",
    a: "Prioritize accessories that serve double duty: a monitor riser with built-in storage, a desk mat that also functions as a mouse pad, a cable tray that also holds a power strip. Avoid single-purpose decorative items on desks under 48 inches. Vertical and under-desk accessories earn their place; surface-level items need to justify their footprint.",
  },
  {
    q: "How do I make a small desk look bigger?",
    a: "Three quick visual upgrades: (1) hide cables with an under-desk cable tray or cable box, (2) lift the monitor with a riser to clear usable desk space underneath, (3) add a desk mat to visually unify the surface. The desk looks larger because the eye sees less clutter and more intentional organization.",
  },
  {
    q: "Are desk accessories worth it for small spaces?",
    a: "The right ones, yes - especially monitor risers, cable management, and desk mats. These pay back their footprint immediately by adding vertical or under-desk storage or by hiding visual clutter. Skip purely decorative items unless your desk is over 48 inches wide and has room to spare.",
  },
  {
    q: "What are the best desk accessories for a dorm room?",
    a: "For a dorm desk (typically 40 to 48 inches wide): a bamboo monitor riser with drawer, an under-desk cable tray, a compact desk mat, and a magnetic phone mount. These cover storage, cables, ergonomics, and tech without overwhelming the limited surface area or requiring any permanent installation.",
  },
  {
    q: "How much should I spend on small desk accessories?",
    a: "Most people are well served by an $80 to $120 total budget covering 4 to 5 accessories. Spending more tends to mean buying accessories that overlap in function or take footprint you do not have. The $40 monitor riser with drawer and the $28 cable tray alone cover most small desk problems.",
  },
  {
    q: "What desk accessories actually save space instead of adding clutter?",
    a: "The footprint-saving accessories are: monitor risers (use vertical space under the screen), under-desk cable trays (use below-desk space), monitor-mounted phone holders (use bezel space), adhesive cable clips (use edge space), and under-desk drawer organizers (use the underside of the desk surface). Anything that sits on the desktop adds to clutter unless it also performs a daily function.",
  },
];
