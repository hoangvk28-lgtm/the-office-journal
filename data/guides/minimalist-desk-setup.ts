const BASE = "/images/media/guides/minimalist-desk-setup";

export const guideTitle = "Minimalist Desk Setup: 10 Clean, Clutter-Free Workspaces (2026)";
export const guideDescription =
  "A minimalist desk setup is not about removing everything from your workspace. It is about keeping only the items that make your desk easier to use, easier to clean, and easier to focus on.";
export const metaTitle = "Minimalist Desk Setup Ideas for a Clean, Clutter-Free Workspace";
export const metaDescription =
  "Build a minimalist desk setup with 10 clean workspace ideas, including desk mats, slim organizers, cable trays, wireless chargers, and simple accessories.";
export const lastUpdated = "May 2026";
export const readTime = "10 min";
export const heroImage = `${BASE}/11-hero-image.webp`;

export interface MinimalIdea {
  id: string;
  number: number;
  title: string;
  imageUrl: string;
  summary: string;
  body: string[];
  productName: string;
  productBrand: string;
  productType: string;
  price: string;
  amazonUrl: string;
  whyItBelongs: string[];
  altProduct?: { name: string; amazonUrl: string; price: string; type: string };
  internalLink?: { href: string; text: string };
  noProductCta?: boolean;
}

export const ideas: MinimalIdea[] = [
  {
    id: "clear-surface",
    number: 1,
    title: "Start With a Clear Desk Surface",
    imageUrl: `${BASE}/01-desk-mat.webp`,
    summary: "Before buying anything, clear the desk completely and bring items back only if they earn their place.",
    body: [
      "Before buying anything new, remove every item from the desk and set it on the floor. Then bring things back one at a time, only if they serve a clear daily purpose. Most people discover that roughly half of what was on their desk can stay off permanently.",
      "A minimalist desk setup works best when the surface has one clear job: giving you enough space to work. A desk mat placed at this stage helps define the working zone and makes everything that stays feel more intentional.",
    ],
    productName: "Nordik Felt + Leather Desk Mat",
    productBrand: "Nordik",
    productType: "Desk mat",
    price: "$39.97",
    amazonUrl: "https://www.amazon.com/dp/B0CQBWJK61?tag=theofficejournal-20",
    whyItBelongs: ["Defines work zone without adding objects", "Neutral color works with any setup", "Protects desk surface"],
    internalLink: { href: "/guide/best-desk-mat-for-small-desk", text: "best desk mats for small desks" },
  },
  {
    id: "desk-mat",
    number: 2,
    title: "Use a Desk Mat to Visually Anchor the Setup",
    imageUrl: `${BASE}/14-small-desk-minimalist-setup.webp`,
    summary: "A desk mat makes the workspace feel intentional by unifying everything on the surface into one clean zone.",
    body: [
      "A desk mat is one of the easiest minimalist upgrades because it makes the setup feel intentional without adding extra objects. Choose a neutral color -- charcoal, slate, beige, or black -- a simple texture, and a size that fits your keyboard and mouse without covering the full desk.",
      "A mat also makes it immediately obvious when something does not belong. Items that sit on the mat are part of the setup. Everything else can be stored, hidden, or removed.",
    ],
    productName: "Nordik Felt + Leather Desk Mat",
    productBrand: "Nordik",
    productType: "Desk mat",
    price: "$39.97",
    amazonUrl: "https://www.amazon.com/dp/B0CQBWJK61?tag=theofficejournal-20",
    whyItBelongs: ["Single object that visually organizes the entire surface", "Felt + leather looks clean on any desk color", "Defines keyboard and mouse zone automatically"],
    internalLink: { href: "/guide/best-desk-mat-for-small-desk", text: "best desk mats for small desks" },
  },
  {
    id: "slim-organizer",
    number: 3,
    title: "Replace Multiple Containers With One Slim Organizer",
    imageUrl: `${BASE}/02-minimal-organizer.webp`,
    summary: "One well-chosen organizer consolidates everything without the visual weight of multiple containers.",
    body: [
      "The most common clutter mistake on a minimalist desk is using five separate containers when one would do. A pen cup, a sticky note tray, a cable box, a business card holder, and a small basket each take up individual footprint and visual attention. A single slim organizer with compartments handles all of them in one object.",
      "For a minimal look, choose an organizer with a natural material -- bamboo or wood -- or a single neutral color. Avoid chrome, heavily branded, or multi-color options that fight for attention against everything else on the desk.",
    ],
    productName: "Sorbus Bamboo Desk Organizer",
    productBrand: "Sorbus",
    productType: "Minimal desk organizer",
    price: "$40.99",
    amazonUrl: "https://www.amazon.com/dp/B077G87NPS?tag=theofficejournal-20",
    whyItBelongs: ["Bamboo material is visually quiet and natural", "3 drawers replace multiple separate containers", "Compact footprint under 12 inches wide"],
    internalLink: { href: "/guide/small-desk-organization-ideas", text: "small desk organization ideas" },
  },
  {
    id: "cable-tray",
    number: 4,
    title: "Hide Cables Before Adding More Accessories",
    imageUrl: `${BASE}/03-cable-tray.webp`,
    summary: "A minimalist setup can look messy even with beautiful objects if cables are visible -- fix cables first.",
    body: [
      "Cables are the fastest way to ruin a minimalist desk setup. Even with a good desk mat and clean accessories, loose cables behind the monitor or hanging off the side of the desk immediately signal disorder. The fix is not buying more cable organizers to put on the desk -- it is routing cables completely out of sight.",
      "An under-desk cable tray mounted beneath the desktop keeps the power strip, excess cable length, and adapters invisible. From the front, the desk looks clean regardless of how many devices are connected. Do this before adding any other accessories.",
    ],
    productName: "Cinati Under-Desk Cable Tray",
    productBrand: "Cinati",
    productType: "Under-desk cable tray",
    price: "$17.99",
    amazonUrl: "https://www.amazon.com/dp/B0BPLT7T1V?tag=theofficejournal-20",
    whyItBelongs: ["Moves power strip and cables completely off the desk surface", "Metal mesh allows airflow around adapters", "Screw-mount is more secure than adhesive over time"],
    internalLink: { href: "/guide/best-under-desk-cable-trays", text: "best under-desk cable trays" },
  },
  {
    id: "wireless-charger",
    number: 5,
    title: "Choose a Wireless Charger to Reduce Cable Clutter",
    imageUrl: `${BASE}/04-wireless-charger.webp`,
    summary: "A slim wireless charging pad replaces one or two loose cables with a single flat object on the mat.",
    body: [
      "If your phone and earbuds support wireless charging, a slim pad can replace the most persistent source of desk cable clutter. Instead of a cable that needs to be plugged and unplugged throughout the day, a flat charger sits in a fixed position and the device simply lands on it.",
      "For a minimalist desk, choose a flat pad rather than a vertical stand -- it has a lower profile and less visual weight. Keep it at the rear corner of the desk mat so it does not interrupt the main working area.",
    ],
    productName: "Belkin Wireless Charging Pad 10W",
    productBrand: "Belkin",
    productType: "Slim wireless charger",
    price: "$16.08",
    amazonUrl: "https://www.amazon.com/dp/B094YXZ71J?tag=theofficejournal-20",
    whyItBelongs: ["Replaces daily charging cable with one fixed, flat object", "Slim profile stays below desk mat level visually", "Belkin is Qi-certified -- reliable across phone brands"],
  },
  {
    id: "slim-keyboard",
    number: 6,
    title: "Use a Slim Keyboard and Compact Mouse",
    imageUrl: `${BASE}/05-slim-keyboard.webp`,
    summary: "Low-profile keyboard and compact mouse create open space around the hands and reduce visual weight.",
    body: [
      "A full-size keyboard with a number pad on a minimalist desk occupies roughly 18 inches of width and signals a busy, utilitarian setup. A tenkeyless or compact wireless keyboard removes about 4 inches of horizontal space and, more importantly, changes the visual weight of the entire surface.",
      "Pair a slim keyboard with a compact wireless mouse and place both on the desk mat to keep the layout contained. For a clean look, choose a keyboard and mouse in matching neutral colors -- black, white, or gray. Avoid backlit or gaming-style designs with visible LEDs.",
    ],
    productName: "Logitech MX Keys Mini",
    productBrand: "Logitech",
    productType: "Slim wireless keyboard",
    price: "$89.99",
    amazonUrl: "https://www.amazon.com/dp/B098JPSVKY?tag=theofficejournal-20",
    whyItBelongs: ["Marketed as 'Minimalist' -- compact layout, no numpad", "Backlit keys for dim environments, Bluetooth multi-device", "Metal build looks premium without being flashy"],
    altProduct: {
      name: "Logitech M330 Silent Mouse",
      type: "Compact silent mouse",
      amazonUrl: "https://www.amazon.com/dp/B01JPOLKDW?tag=theofficejournal-20",
      price: "$25",
    },
  },
  {
    id: "monitor-stand",
    number: 7,
    title: "Raise Your Screen With a Simple Monitor Stand",
    imageUrl: `${BASE}/07-monitor-stand.webp`,
    summary: "A monitor stand creates vertical space and a hidden storage zone that keeps the main desk area open.",
    body: [
      "A monitor resting flat on the desk takes up depth and makes the surface feel more occupied than it needs to be. A simple monitor stand raises the screen and creates usable space underneath for a keyboard when not in use, a small notebook, or nothing -- which still looks cleaner than a monitor sitting directly on the desk.",
      "For a minimal setup, choose a riser with a natural material or a single solid color. Avoid risers with visible mesh patterns or branding. The stand should disappear visually rather than draw attention.",
    ],
    productName: "Bamboo Monitor Riser With Drawer",
    productBrand: "Bamboo",
    productType: "Monitor stand",
    price: "$36",
    amazonUrl: "https://www.amazon.com/dp/B07XDYHX5B?tag=theofficejournal-20",
    whyItBelongs: ["Bamboo looks natural and minimal -- not industrial", "Built-in drawer hides small items under the monitor", "Raises screen without requiring tools or drilling"],
    internalLink: { href: "/guide/small-desk-setup", text: "small desk setup ideas" },
  },
  {
    id: "clamp-lamp",
    number: 8,
    title: "Pick a Clamp Lamp Instead of a Bulky Base Lamp",
    imageUrl: `${BASE}/08-monitor-light-bar.webp`,
    summary: "A monitor light bar or clamp lamp keeps lighting focused without a base occupying desk space.",
    body: [
      "Lighting is essential, but a standard lamp base takes 30 to 50 square inches of desk space and adds vertical bulk that competes with the monitor. A clamp lamp attaches to the desk edge, and a monitor light bar clips to the top of the screen -- both provide focused task lighting with zero desk footprint.",
      "For the most minimal look, a monitor light bar is the better choice: it has no visible body on the desk at all and illuminates the work surface with an asymmetric lens that does not reflect back on the screen.",
    ],
    productName: "Quntis Monitor Light Bar",
    productBrand: "Quntis",
    productType: "Monitor light bar",
    price: "$39.95",
    amazonUrl: "https://www.amazon.com/dp/B08DKQ3JG1?tag=theofficejournal-20",
    whyItBelongs: ["Zero desk footprint -- clips on monitor top", "Asymmetric lens lights desk without screen glare", "USB-powered from monitor -- no extra adapter"],
    altProduct: {
      name: "Voncerus LED Clamp Desk Lamp",
      type: "Clamp desk lamp",
      amazonUrl: "https://www.amazon.com/dp/B0BB5ZBT42?tag=theofficejournal-20",
      price: "$28",
    },
    internalLink: { href: "/guide/best-clip-on-desk-lamp", text: "best clip-on desk lamps" },
  },
  {
    id: "headphone-hook",
    number: 9,
    title: "Move Headphones Off the Desktop",
    imageUrl: `${BASE}/09-headphone-hook.webp`,
    summary: "An under-desk headphone hook removes one of the most visually bulky objects from the desktop.",
    body: [
      "Headphones left on the desk take up a surprising amount of visual space. Over-ear headphones are large, irregular in shape, and hard to place neatly. An under-desk headphone hook mounts beneath the desk edge with adhesive and holds the headphones out of sight but within arm's reach.",
      "This single change often has a disproportionate impact on how clean the desk looks. It also prevents headphones from being knocked off the desk accidentally, which is a common source of driver damage.",
    ],
    productName: "Elevation Lab Under-Desk Headphone Hook",
    productBrand: "Elevation Lab",
    productType: "Headphone hook",
    price: "$11.99",
    amazonUrl: "https://www.amazon.com/dp/B00P31BMHG?tag=theofficejournal-20",
    whyItBelongs: ["Removes the largest irregular object from the desktop", "Adhesive mount -- no drilling", "Holds up to 15 lbs and keeps headphones within reach"],
  },
  {
    id: "minimal-decor",
    number: 10,
    title: "Add One Personal Touch, Not Ten",
    imageUrl: `${BASE}/10-minimal-decor.webp`,
    summary: "One small, intentional decor piece makes the setup feel personal without becoming clutter.",
    body: [
      "A minimalist desk does not have to feel empty or corporate. One small plant, a framed photo, a simple clock, or a minimal succulent adds personality without creating clutter. The rule is one, not several -- the moment decorative items outnumber functional ones, the setup loses its minimal character.",
      "Artificial succulents are a practical choice for desks with limited natural light. They look the same year-round, require no water or soil, and do not shed. Place them at the corner of the desk mat rather than in the main working area.",
    ],
    productName: "Funarty Artificial Succulents",
    productBrand: "Funarty",
    productType: "Minimal desk decor",
    price: "$15.99",
    amazonUrl: "https://www.amazon.com/dp/B08QZDK87C?tag=theofficejournal-20",
    whyItBelongs: ["Adds organic warmth without any maintenance", "Works in any lighting condition", "Small enough to live at the desk edge without occupying work area"],
  },
];

export const atAGlanceItems = ideas.map((idea) => ({
  rank: idea.number,
  badge: idea.productType,
  name: idea.productName,
  brand: idea.productBrand,
  imageUrl: idea.imageUrl,
  affiliateUrl: idea.amazonUrl,
  price: idea.price,
  anchorId: idea.id,
  pros: idea.whyItBelongs.map((text) => ({ text })),
  cons: [{ text: "Skip if you already have this covered in your current setup.", severity: "minor" as const }],
}));

export const checklistRows = [
  { item: "Desk mat", why: "Defines the workspace and makes setup feel intentional", bestFor: "Cleaner visual layout" },
  { item: "Slim organizer", why: "Replaces multiple containers with one object", bestFor: "Pens, sticky notes, chargers" },
  { item: "Cable tray", why: "Hides power strip and excess cables under the desk", bestFor: "Clean desk look" },
  { item: "Wireless charger", why: "Removes daily charging cables from the surface", bestFor: "Phone and earbuds" },
  { item: "Slim keyboard", why: "Saves desk space and reduces visual weight", bestFor: "Laptop or monitor setups" },
  { item: "Compact mouse", why: "Matches keyboard scale and keeps surface proportional", bestFor: "Any minimal setup" },
  { item: "Monitor stand", why: "Raises screen and creates hidden storage underneath", bestFor: "Small desks" },
  { item: "Clamp lamp or light bar", why: "Provides focused lighting with zero desk footprint", bestFor: "Study and work lighting" },
  { item: "Headphone hook", why: "Removes the largest irregular item from the desktop", bestFor: "Audio users" },
  { item: "One decor piece", why: "Adds personality without becoming clutter", bestFor: "Cozy minimal setups" },
];

export const whatNotRows = [
  { item: "Multiple pen cups or trays", reason: "One organizer does the job -- the rest is clutter multiplied" },
  { item: "Oversized speakers on the desk surface", reason: "Bluetooth speakers visible on the desktop break visual balance unless audio is a priority" },
  { item: "Large lamp base", reason: "Takes 30--50 sq inches of prime desk space -- switch to clamp or light bar" },
  { item: "Visible power bricks or adapters", reason: "These belong under the desk in a cable tray, not on the surface" },
  { item: "Random notebooks you rarely open", reason: "One notebook is fine; a stack is not" },
  { item: "Unused charging cables left plugged in", reason: "A wireless charger or cable clip removes these from sight entirely" },
  { item: "Decor that blocks your working area", reason: "Anything between you and the keyboard is in the wrong place" },
  { item: "More than one personal item", reason: "One plant, one photo, or one clock -- not all three" },
];

export const useCaseRows = [
  { use: "Small desk", focus: "Surface space above everything", products: "Cable tray, slim organizer, clamp lamp" },
  { use: "Laptop setup", focus: "Screen height and fewer cables", products: "Laptop stand, wireless charger, USB hub" },
  { use: "Monitor setup", focus: "Vertical organization", products: "Monitor stand, desk mat, cable tray" },
  { use: "Study desk", focus: "Open writing surface", products: "Desk mat, lamp, one pen organizer" },
  { use: "Work from home", focus: "Daily comfort and clean look", products: "Monitor stand, slim keyboard, footrest" },
  { use: "Bedroom desk", focus: "Visual calm for sleep environment", products: "Warm clamp lamp, neutral mat, hidden cables" },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What is a minimalist desk setup?",
    answer:
      "A minimalist desk setup keeps only the items that serve a clear, daily purpose. It is not about having an empty desk -- it is about removing low-value objects so the ones that remain feel intentional. The typical minimalist setup includes a desk mat, one organizer, hidden cables, a compact keyboard, a lamp with no base, and one personal item.",
  },
  {
    question: "How do I make my desk look minimalist?",
    answer:
      "Start by removing everything from the desk. Put back only items you use every day. Add a desk mat to define the work zone. Route cables under the desk with a cable tray. Replace separate containers with one organizer. The setup should look clean after these four steps -- then add accessories only if they solve a specific problem.",
  },
  {
    question: "What should I keep on a minimalist desk?",
    answer:
      "Keep the monitor or laptop, keyboard, mouse, a lamp, one organizer, and one personal item. Everything else -- chargers, notebooks, headphones, bags -- should either be stored, mounted under the desk, or removed entirely. A wireless charger and a headphone hook handle two of the most common surface clutter sources.",
  },
  {
    question: "What should I remove from my desk first?",
    answer:
      "Start with anything you have not touched in a week. Then remove all visible cables and replace them with wireless charging and cable management. Then remove duplicate containers -- if you have two pen cups, keep one. Most people find that clearing cables and consolidating storage makes the biggest visible difference.",
  },
  {
    question: "How do I hide cables in a minimalist desk setup?",
    answer:
      "Mount an under-desk cable tray to hold the power strip and excess cable length. Use adhesive cable clips along the rear edge of the desk to guide individual cables toward the tray. Replace charging cables with a wireless charger pad where possible. A USB hub consolidates multiple device cables into one.",
  },
  {
    question: "What colors work best for a minimalist desk setup?",
    answer:
      "The most common minimalist palettes are white and wood, black and walnut, beige and cream, and gray and silver. The key is using no more than two accent colors across all accessories. A neutral desk mat ties the palette together. Avoid brightly colored accessories or matching themed sets, which draw attention to individual items rather than the setup as a whole.",
  },
  {
    question: "Is a minimalist desk setup good for small spaces?",
    answer:
      "Yes -- a minimal setup is especially effective on small desks because it maximizes usable surface area. A clamp lamp, slim organizer, and hidden cables free up the most space. A monitor stand with a storage shelf adds a second layer without expanding the desk footprint. See our guide to small desk setup ideas for more.",
  },
];
