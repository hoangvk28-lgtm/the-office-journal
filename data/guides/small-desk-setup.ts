const BASE = "/images/media/guides/small-desk-setup";

export const guideTitle = "Small Desk Setup Ideas: 15 Smart Ways to Build a Better Workspace";
export const guideDescription =
  "A small desk does not have to feel cramped. With the right layout, lighting, storage, and accessories, even a compact workspace can feel clean, comfortable, and easy to use.";
export const metaTitle = "Small Desk Setup Ideas for a Cleaner, Smarter Workspace";
export const metaDescription =
  "Make the most of a small desk with practical ideas for lighting, storage, cable management, monitor stands, laptop stands, and compact workspace upgrades.";
export const lastUpdated = "May 2026";
export const readTime = "9 min";
export const heroImage = `${BASE}/01-clamp-desk-lamp.webp`;

export interface SetupIdea {
  id: string;
  number: number;
  title: string;
  imageUrl: string;
  summary: string;
  body: string[];
  productName: string;
  productType: string;
  price: string;
  amazonUrl: string;
  whyItHelps: string[];
  skipIf: string;
  internalLink?: { href: string; anchor: string; text: string };
}

export const ideas: SetupIdea[] = [
  {
    id: "clamp-lamp",
    number: 1,
    title: "Use a Clamp Lamp Instead of a Base Lamp",
    imageUrl: `${BASE}/01-clamp-desk-lamp.webp`,
    summary: "A clamp lamp attaches to the desk edge and frees up the entire surface from a bulky base.",
    body: [
      "A traditional base lamp takes up a footprint of six to twelve inches on a small desk. A clamp lamp mounts directly to the desk edge, sits above the work surface, and leaves the desktop completely clear. This single swap can feel like gaining a quarter of your desk back.",
      "Look for a lamp with a flexible gooseneck so you can direct light exactly where you need it. Models with a built-in USB charging port on the base add extra value on a small desk where outlet access can be limited.",
    ],
    productName: "Voncerus LED Clamp Desk Lamp",
    productType: "Clamp desk lamp",
    price: "$16.99",
    amazonUrl: "https://www.amazon.com/dp/B0BB5ZBT42?tag=theofficejournal-20",
    whyItHelps: ["Frees up full desk surface", "Flexible gooseneck for precise lighting", "Often includes USB charging port"],
    skipIf: "You need very bright overhead-style lighting for detailed tasks like drawing or soldering.",
    internalLink: { href: "/guide/best-clip-on-desk-lamp", anchor: "best-clip-on-desk-lamp", text: "best clip-on desk lamps" },
  },
  {
    id: "monitor-light-bar",
    number: 2,
    title: "Try a Monitor Light Bar for Glare-Free Lighting",
    imageUrl: `${BASE}/02-monitor-light-bar.webp`,
    summary: "A monitor light bar sits on top of the screen and illuminates the desk without any glare on the display.",
    body: [
      "A monitor light bar rests on the top edge of any flat-panel monitor and uses an asymmetric lens to light the desk surface without reflecting back into the screen. The result is a bright, even workspace with zero desk footprint and zero screen glare.",
      "This is especially useful for anyone doing video calls or working with a second monitor, where a side lamp can cause uneven lighting in the frame. Most models are USB-powered directly from the monitor, so there is no extra cable to manage.",
    ],
    productName: "Quntis Monitor Light Bar",
    productType: "Monitor light bar",
    price: "$39.95",
    amazonUrl: "https://www.amazon.com/dp/B08DKQ3JG1?tag=theofficejournal-20",
    whyItHelps: ["Zero desk footprint", "No screen glare from asymmetric lens", "USB-powered from monitor"],
    skipIf: "You use a curved monitor or a monitor smaller than 17 inches -- the clip may not fit securely.",
  },
  {
    id: "monitor-stand",
    number: 3,
    title: "Raise Your Screen With a Monitor Stand",
    imageUrl: `${BASE}/03-monitor-stand.webp`,
    summary: "Elevating the monitor to eye level prevents neck strain and creates usable storage space underneath.",
    body: [
      "Placing a monitor at eye level is one of the most impactful ergonomic changes you can make. But a monitor stand also does something practical for a small desk: it turns the space underneath into storage. A riser with a built-in drawer can hold pens, sticky notes, charging cables, and small accessories that would otherwise be scattered across the desktop.",
      "Bamboo models work well in small setups because they look clean without adding visual weight. Choose a riser that matches the width of your monitor rather than the full desk width to keep the proportions balanced.",
    ],
    productName: "Bamboo Monitor Riser With Drawer",
    productType: "Monitor stand with storage",
    price: "$36",
    amazonUrl: "https://www.amazon.com/dp/B07XDYHX5B?tag=theofficejournal-20",
    whyItHelps: ["Creates under-stand storage space", "Raises screen to eye level", "Bamboo looks clean on small desks"],
    skipIf: "You use an adjustable monitor arm -- the arm already handles height, and a riser would block the space the arm needs.",
    internalLink: { href: "/guide/monitor-stands-small-desks", anchor: "monitor-stand-small-desk", text: "best monitor stands for small desks" },
  },
  {
    id: "laptop-stand",
    number: 4,
    title: "Use a Foldable Laptop Stand to Free Up Desk Space",
    imageUrl: `${BASE}/04-laptop-stand.webp`,
    summary: "A foldable laptop stand raises the screen and tucks away when not in use, which a fixed riser cannot do.",
    body: [
      "If you work from a laptop on a small desk, propping it flat on the surface wastes vertical space and forces you to look downward. A foldable laptop stand solves both problems: it raises the screen to a better height and folds completely flat when you close up for the day, leaving the desk surface clear.",
      "Pair the stand with a compact wireless keyboard and mouse for a dual-screen feel without adding much footprint. On a very small desk, a portable stand that weighs under a pound and collapses into a thin profile is often more practical than a heavy metal riser.",
    ],
    productName: "Lamicall Foldable Laptop Stand",
    productType: "Foldable laptop stand",
    price: "$32.99",
    amazonUrl: "https://www.amazon.com/dp/B08M94BTYC?tag=theofficejournal-20",
    whyItHelps: ["Folds flat when not in use", "Raises screen to ergonomic height", "Lightweight and portable"],
    skipIf: "You already use a docking station with an external monitor -- raising the laptop screen is less useful if it is not your main display.",
  },
  {
    id: "desk-mat",
    number: 5,
    title: "Lay Down a Desk Mat to Define Your Work Zone",
    imageUrl: `${BASE}/05-desk-mat.webp`,
    summary: "A desk mat visually unifies the workspace and protects the surface while making the setup feel more intentional.",
    body: [
      "On a small desk, visual clutter is amplified by the limited surface area. A desk mat gives the workspace a defined boundary and pulls all the items on it into a cohesive zone. Even on a plain white desk, a dark or neutral mat immediately makes the setup look more considered.",
      "Beyond aesthetics, a mat protects the desk surface from scratches and provides a smoother writing and mousing surface. Choose a mat that covers roughly 60 to 80 percent of the desk width rather than one that overhangs the edges, which can look oversized on a narrow desk.",
    ],
    productName: "Nordik Felt Leather Desk Mat",
    productType: "Desk mat",
    price: "$39.97",
    amazonUrl: "https://www.amazon.com/dp/B0CQBWJK61?tag=theofficejournal-20",
    whyItHelps: ["Creates a clean, unified work zone", "Protects desk surface", "Felt + leather looks minimal and premium"],
    skipIf: "You frequently eat at your desk -- felt mats absorb stains and are harder to clean than silicone or PU leather options.",
    internalLink: { href: "/guide/best-desk-mat-for-small-desk", anchor: "desk-mat-small-desk", text: "best desk mats for small desks" },
  },
  {
    id: "cable-tray",
    number: 6,
    title: "Mount a Cable Tray Under the Desk",
    imageUrl: `${BASE}/06-cable-tray.webp`,
    summary: "A under-desk cable tray hides power strips, excess cables, and adapters completely out of sight.",
    body: [
      "Visible cables are the single biggest contributor to a cluttered-looking small desk. An under-desk cable tray mounts beneath the desktop and holds your power strip, excess cable length, and adapters out of sight. From the front, the desk looks clean even if the cables are still there.",
      "Metal mesh trays are the most durable option and allow airflow around charging bricks. Look for a tray that mounts with screws rather than adhesive, since adhesive brackets can pull away under the weight of a full power strip over time.",
    ],
    productName: "Cinati Under-Desk Cable Tray",
    productType: "Under-desk cable tray",
    price: "$17.99",
    amazonUrl: "https://www.amazon.com/dp/B0BPLT7T1V?tag=theofficejournal-20",
    whyItHelps: ["Hides power strip and excess cables completely", "Metal mesh allows airflow", "Screw-mount is more secure than adhesive"],
    skipIf: "Your desk is glass or has a very thin top panel where screws would not hold -- use an adhesive cable box on the wall instead.",
    internalLink: { href: "/guide/best-under-desk-cable-trays", anchor: "cable-tray-small-desk", text: "best under-desk cable trays" },
  },
  {
    id: "cable-clips",
    number: 7,
    title: "Use Adhesive Cable Clips Along the Desk Edge",
    imageUrl: `${BASE}/07-cable-clips.webp`,
    summary: "Cable clips route individual cables along the desk edge so they stay off the surface and off the floor.",
    body: [
      "Even with a cable tray, the cables running from the tray to the monitor, keyboard, and other devices need to be guided. Adhesive cable clips stick to the back or underside of the desk and hold individual cables in place so they run in a straight line rather than coiling loosely on the surface.",
      "These clips are inexpensive and reversible -- most peel off cleanly if you change the layout later. Apply them in a row along the rear edge of the desk to guide cables down the back leg and toward the cable tray, keeping the entire desktop surface free.",
    ],
    productName: "Austor Adhesive Cable Clips",
    productType: "Adhesive cable clips",
    price: "$9",
    amazonUrl: "https://www.amazon.com/dp/B078WMCWDD?tag=theofficejournal-20",
    whyItHelps: ["Keeps cables routed neatly along desk edge", "Adhesive is removable and reusable", "Works on wood, metal, and laminate surfaces"],
    skipIf: "You frequently swap out cables -- repeated removal and reinstallation reduces the adhesive's hold after a few cycles.",
  },
  {
    id: "desk-organizer",
    number: 8,
    title: "Add One Compact Organizer -- Not Five",
    imageUrl: `${BASE}/08-desk-organizer.webp`,
    summary: "One well-chosen organizer consolidates small items without adding more surface clutter than it removes.",
    body: [
      "The mistake most people make is buying multiple organizers -- a pen cup, a phone stand, a sticky note holder, a business card tray -- and placing them all on a small desk. The result is more items on the desk, not fewer. One compact multi-compartment organizer that consolidates all of these is almost always the better choice.",
      "Mesh organizers work well because they are visually lightweight -- you can see through them, which keeps the desk feeling open. Aim for something no wider than 10 inches so it does not dominate a narrow desk.",
    ],
    productName: "Comix Mesh Desk Organizer",
    productType: "Compact desk organizer",
    price: "$14.99",
    amazonUrl: "https://www.amazon.com/dp/B077M6M8XY?tag=theofficejournal-20",
    whyItHelps: ["Consolidates pen, phone, and small items in one unit", "Mesh is visually lightweight", "Compact footprint under 10 inches"],
    skipIf: "You rarely keep loose items on the desk -- an organizer adds footprint without benefit if the desktop is already minimal.",
    internalLink: { href: "/guide/small-desk-organization-ideas", anchor: "desk-organizer-ideas", text: "small desk organization ideas" },
  },
  {
    id: "usb-hub",
    number: 9,
    title: "Replace Multiple Adapters With One USB Hub",
    imageUrl: `${BASE}/09-usb-hub.webp`,
    summary: "A single USB hub replaces the tangle of individual adapters and dongles scattered around the desk.",
    body: [
      "A small desk often has limited outlets, and adding a separate charging brick for each device creates a mess of adapters and cables. A powered USB hub with six or seven ports consolidates all of this into one unit, which can then be mounted under the desk or placed at the back corner, out of the main work area.",
      "Choose a hub with individual power switches per port so you can turn off charging for unused devices without unplugging them. This reduces standby draw and keeps the power strip cleaner.",
    ],
    productName: "Anker 7-Port Powered USB Hub",
    productType: "Powered USB hub",
    price: "$35",
    amazonUrl: "https://www.amazon.com/dp/B014ZQ07NE?tag=theofficejournal-20",
    whyItHelps: ["Replaces multiple adapters with one unit", "Per-port switches for power control", "Can be placed under desk or at rear corner"],
    skipIf: "You only charge one or two devices -- a standard dual-port charging brick is simpler and smaller than a full hub.",
    internalLink: { href: "/guide/best-usb-hub-for-desk", anchor: "usb-hub-small-desk", text: "best USB hubs for desk setups" },
  },
  {
    id: "footrest",
    number: 10,
    title: "Add a Footrest for Posture Without Adjusting the Chair",
    imageUrl: `${BASE}/10-footrest.webp`,
    summary: "A compact footrest improves sitting posture at a fixed-height desk without requiring a new chair.",
    body: [
      "Most small desks are fixed-height, which means the chair height is often a compromise between elbow position and foot placement. If the desk height is correct for your arms, your feet may not rest flat on the floor. A footrest solves this by raising the floor to meet your feet rather than forcing you to choose between a hunched back and dangling legs.",
      "Memory foam footrests are quieter and more comfortable than hard plastic ones, and they sit low enough to slide under the desk when not in use. Look for one with a non-slip bottom so it does not creep forward during the day.",
    ],
    productName: "ComfiLife Memory Foam Footrest",
    productType: "Memory foam footrest",
    price: "$39.99",
    amazonUrl: "https://www.amazon.com/dp/B08DHMMBFF?tag=theofficejournal-20",
    whyItHelps: ["Corrects posture at fixed-height desks", "Slides under the desk when not in use", "Non-slip base stays in position"],
    skipIf: "You already use an adjustable-height desk and chair combination that lets you set proper ergonomic positioning independently.",
  },
  {
    id: "headphone-hook",
    number: 11,
    title: "Mount a Headphone Hook Under the Desk",
    imageUrl: `${BASE}/11-headphone-hook.webp`,
    summary: "A headphone hook mounts under the desk and keeps headphones off the surface without any drilling.",
    body: [
      "Headphones left on the desk take up a surprising amount of space, especially over-ear models. An under-desk headphone hook uses an adhesive or clamp mount to hang them directly beneath the desk edge, where they are easy to grab but completely out of the work zone.",
      "This also prevents headphones from being knocked off the desk, which is a common cause of driver damage. Most hooks hold up to 15 pounds, which is more than enough for any over-ear headphones or a lightweight headset.",
    ],
    productName: "Elevation Lab Under-Desk Headphone Hook",
    productType: "Under-desk headphone hook",
    price: "$11.99",
    amazonUrl: "https://www.amazon.com/dp/B00P31BMHG?tag=theofficejournal-20",
    whyItHelps: ["Removes headphones from the desktop entirely", "Adhesive mount requires no drilling", "Keeps headphones within arm's reach"],
    skipIf: "You use a monitor stand with a built-in hook -- adding a separate mount is redundant.",
  },
  {
    id: "succulents",
    number: 12,
    title: "Add One Small Plant or Succulent",
    imageUrl: `${BASE}/12-artificial-succulents.webp`,
    summary: "A single small plant adds life to a minimal desk setup without adding visual clutter.",
    body: [
      "A small desk looks intentional and lived-in when it includes one personal element. A small succulent or potted plant is the most practical choice because it is compact, slow-growing, and requires minimal care. It also works well visually in any color palette -- green reads as neutral on a desk.",
      "If you work in a room with limited natural light, artificial succulents are a completely reasonable alternative. Quality faux succulents are nearly indistinguishable from real ones at desk distance, and they require no watering, no soil, and no sunlight.",
    ],
    productName: "Funarty Artificial Succulents",
    productType: "Artificial succulents",
    price: "$15.99",
    amazonUrl: "https://www.amazon.com/dp/B08QZDK87C?tag=theofficejournal-20",
    whyItHelps: ["Adds warmth without visual clutter", "Works in any lighting condition", "No maintenance required"],
    skipIf: "Your desk already has a color-forward item like a bright lamp or a bold mat -- adding a plant can tip the balance from curated to busy.",
  },
  {
    id: "rolling-cart",
    number: 13,
    title: "Use a Slim Rolling Cart Beside the Desk",
    imageUrl: `${BASE}/13-rolling-cart.webp`,
    summary: "A rolling cart provides extra storage adjacent to the desk and rolls away when not needed.",
    body: [
      "When a small desk simply does not have enough surface or drawer space, a slim rolling cart placed beside it effectively extends the desk's storage without adding to its footprint. The cart becomes a side table for the monitor, a printer stand, or extra drawer space, and it rolls out of the way when the room needs to serve a different purpose.",
      "Three-tier carts work best because they provide storage at three heights: the top tier for active items, the middle for reference materials, and the bottom for heavier items like notebooks or a laptop bag. Look for a cart no wider than 12 inches so it fits alongside a narrow desk without blocking movement.",
    ],
    productName: "SONGMICS 3-Tier Rolling Storage Cart",
    productType: "Slim rolling cart",
    price: "$17.99",
    amazonUrl: "https://www.amazon.com/dp/B07QRH2PZS?tag=theofficejournal-20",
    whyItHelps: ["Extends storage without occupying desk space", "Rolls away when the room is used for other purposes", "Three tiers separate active and archived items"],
    skipIf: "Your room does not have floor space beside the desk -- a rolling cart needs at least 14 inches of clearance to be useful.",
  },
  {
    id: "pegboard",
    number: 14,
    title: "Install a Wall Pegboard Above the Desk",
    imageUrl: `${BASE}/14-pegboard.webp`,
    summary: "A wall pegboard adds flexible vertical storage without using any desk surface at all.",
    body: [
      "The wall above a small desk is almost always unused space. A pegboard mounted directly above the desk transforms that area into customizable storage for headphones, cables, stationery, a small shelf, or a hook for a bag. Because pegboard hooks are repositionable, the layout can change as the desk setup evolves.",
      "This is particularly useful for setups where the desk is pushed against a wall. The pegboard also acts as a visual backdrop that can make the overall setup look more intentional, especially when the hooks and accessories are color-matched to the rest of the desk.",
    ],
    productName: "Kinpaw Wall Pegboard Organizer",
    productType: "Wall pegboard",
    price: "$9.99",
    amazonUrl: "https://www.amazon.com/dp/B0FRMXKLYJ?tag=theofficejournal-20",
    whyItHelps: ["Uses wall space instead of desk space", "Hooks are repositionable and customizable", "Creates a polished visual backdrop"],
    skipIf: "You rent and cannot make wall holes -- command strip pegboards are available but hold significantly less weight than screw-mounted versions.",
  },
  {
    id: "desktop-shelf",
    number: 15,
    title: "Add a Raised Desktop Shelf for a Second Layer",
    imageUrl: `${BASE}/15-desktop-shelf.webp`,
    summary: "A desktop shelf creates a raised platform at the back of the desk for monitors, speakers, or books, freeing the lower surface.",
    body: [
      "A desktop shelf is different from a monitor stand: instead of lifting just the screen, it creates an elevated platform across the back portion of the desk that can hold the monitor, a small speaker, a plant, or books, while the desk surface below remains usable for active work. This effectively gives a small desk two work planes instead of one.",
      "Choose a shelf with an open design (two legs rather than a solid panel) so you can tuck items underneath it. This keeps the desk feeling open rather than adding a wall of storage at the back.",
    ],
    productName: "SimpleHouseware Desktop Shelf Organizer",
    productType: "Desktop shelf riser",
    price: "$24",
    amazonUrl: "https://www.amazon.com/dp/B09GM126DP?tag=theofficejournal-20",
    whyItHelps: ["Creates a second work plane on a small desk", "Open leg design lets you store items below it", "Works for monitor + plant + speaker at once"],
    skipIf: "You already use a monitor arm that lifts the screen -- the arm accomplishes the same height goal and the shelf would just be redundant clutter.",
  },
];

export const atAGlanceItems = ideas.map((idea) => ({
  rank: idea.number,
  badge: `Idea ${idea.number}`,
  name: idea.title,
  brand: idea.productType,
  imageUrl: idea.imageUrl,
  affiliateUrl: idea.amazonUrl,
  price: idea.price,
  anchorId: idea.id,
  pros: idea.whyItHelps.map((text) => ({ text })),
  cons: [{ text: idea.skipIf, severity: "minor" as const }],
}));

export const checklistRows = [
  { area: "Lighting", what: "Clamp lamp or monitor light bar", why: "Frees up full desk surface" },
  { area: "Screen height", what: "Monitor stand or laptop stand", why: "Creates usable space underneath" },
  { area: "Storage", what: "One compact desk organizer", why: "Consolidates small items in one place" },
  { area: "Cables", what: "Cable tray and adhesive clips", why: "Eliminates visual clutter below and behind" },
  { area: "Surface", what: "Desk mat", why: "Defines the work zone and unifies the look" },
  { area: "Vertical space", what: "Pegboard or desktop shelf", why: "Adds storage without touching the desk surface" },
  { area: "Extras", what: "Headphone hook + USB hub", why: "Removes two common desk clutter sources" },
];

export const mistakes = [
  { title: "Buying too many accessories at once", body: "Add one item, live with it, then decide if the next one is actually needed." },
  { title: "Using a lamp with a large base", body: "A base lamp can occupy 30 to 50 square inches of desk space. A clamp lamp or light bar uses none." },
  { title: "Leaving cables visible on the surface", body: "Even a neat desk looks messy if cables are loose. Route them first before adding anything else." },
  { title: "Choosing accessories that are too wide", body: "A monitor stand or shelf that spans the full desk width can make the setup feel enclosed rather than open." },
  { title: "Ignoring the wall above the desk", body: "A pegboard or floating shelf can double usable storage without touching the desk at all." },
  { title: "Skipping the desk mat", body: "Without a mat, the desk looks like a collection of objects. With a mat, it looks like a workspace." },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What should I put on a small desk?",
    answer:
      "Keep only daily essentials on the surface: a monitor or laptop, a keyboard and mouse, a lamp, and one organizer. Everything else -- cables, phone, notebook, chargers -- belongs off the surface or inside a drawer or organizer.",
  },
  {
    question: "How do I make a small desk setup look clean?",
    answer:
      "Route cables under the desk with a cable tray and clips, use a desk mat to unify the surface visually, and keep only three to five items on the desktop. A single color palette across accessories also makes a significant difference.",
  },
  {
    question: "What is the best layout for a small desk?",
    answer:
      "Push the monitor to the back third of the desk and keep the front two-thirds clear for active work. If possible, mount the monitor on a stand with a drawer to gain under-screen storage without using desk depth.",
  },
  {
    question: "How do I organize cables on a small desk?",
    answer:
      "Start by routing power cables under the desk using a cable tray. Then use adhesive clips along the rear edge to guide device cables down the back. A powered USB hub consolidates charging cables into one.",
  },
  {
    question: "Can a small desk work for both a monitor and a laptop?",
    answer:
      "Use a laptop stand to raise the laptop to monitor height and connect a single external keyboard and mouse. Both screens can then be used at eye level without either taking over the main work surface.",
  },
  {
    question: "How can I add storage to a small desk without making it cluttered?",
    answer:
      "Use vertical space: a monitor stand with a drawer handles small items, a desktop shelf adds a second layer at the rear, and a pegboard uses the wall. These approaches add storage without expanding the desk's horizontal footprint.",
  },
];
