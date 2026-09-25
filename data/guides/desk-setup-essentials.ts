const B = "/images/media/guides/desk-setup-essentials";

export const guideSlug = "desk-setup-essentials";
export const guideTitle = "Desk Setup Essentials: 15 Must-Have Items for Work, Study, and Small Desks";
export const metaTitle = "Desk Setup Essentials: 15 Must-Have Items";
export const guideDescription =
  "A practical checklist of 15 desk setup essentials -- from lighting and cable management to organizers, stands, and desk mats. For students, remote workers, and small-space setups.";
export const metaDescription =
  "Build a cleaner, more practical workspace with these desk setup essentials -- lighting, cable management, organizers, stands, and small-space upgrades.";
export const lastUpdated = "2026-05-30";
export const readTime = "13 min";
export const heroImage = `${B}/01-voncerus-led-clamp-desk-lamp.webp`;

export interface EssentialItem {
  number: number;
  id: string;
  category: string;
  name: string;
  brand: string;
  price: string;
  asin: string;
  amazonUrl: string;
  imageUrl: string;
  intro: string;          // 1-2 sentence narrative intro
  whyWePicked: string[];  // 3 bullets "Why we picked it"
  skipIf: string;         // 1 line "Skip if..."
  budgetAlt?: {
    name: string;
    asin: string;
    amazonUrl: string;
    price: string;
    why: string;
  };
}

export const items: EssentialItem[] = [
  {
    number: 1,
    id: "desk-lamp",
    category: "Desk Lamp",
    name: "Voncerus LED Clamp Desk Lamp",
    brand: "Voncerus",
    price: "$16.99",
    asin: "B0BB5ZBT42",
    amazonUrl: "https://www.amazon.com/dp/B0BB5ZBT42?tag=theofficejournal-20",
    imageUrl: `${B}/01-voncerus-led-clamp-desk-lamp.webp`,
    intro:
      "Good lighting is the first thing to fix on any desk. Overhead room lighting creates shadows directly where you're reading or writing -- a clamp lamp positions light exactly where you need it without using any desk surface.",
    whyWePicked: [
      "Clamp mount attaches to the desk edge -- zero surface footprint, all the light you need",
      "10 brightness levels + 3 color modes (warm/neutral/cool) cover every use case from late-night reading to afternoon focus sessions",
      "USB powered -- plugs into any power strip port, no outlet slot consumed",
    ],
    skipIf: "Your desk already has good overhead task lighting or you prefer a base lamp with more wattage.",
    budgetAlt: {
      name: "Lepro Clip-On LED Lamp",
      asin: "B09XF23WY2",
      amazonUrl: "https://www.amazon.com/dp/B09XF23WY2?tag=theofficejournal-20",
      price: "$18–$28",
      why: "Same clamp format and feature set at a lower price point",
    },
  },
  {
    number: 2,
    id: "monitor-light-bar",
    category: "Monitor Light Bar",
    name: "Quntis Monitor Light Bar",
    brand: "Quntis",
    price: "$39.95",
    asin: "B08DKQ3JG1",
    amazonUrl: "https://www.amazon.com/dp/B08DKQ3JG1?tag=theofficejournal-20",
    imageUrl: `${B}/02-quntis-monitor-light-bar.webp`,
    intro:
      "If you use an external monitor for most of your work, a monitor light bar is a smarter choice than a desk lamp -- it clips directly onto the monitor top and illuminates your desk without creating glare on the screen.",
    whyWePicked: [
      "Asymmetric optical design projects light down onto your desk, not onto the screen -- no reflections or glare",
      "Auto-dimming ambient sensor adjusts brightness as room light changes",
      "Sits on the monitor frame with no extra arm or clamp -- the cleanest possible setup",
    ],
    skipIf: "You primarily use a laptop without an external monitor -- a clamp lamp (#1) is more versatile.",
  },
  {
    number: 3,
    id: "monitor-stand",
    category: "Monitor Stand",
    name: "Bamboo Monitor Riser with Drawer",
    brand: "MSVEKT",
    price: "$35–$50",
    asin: "B07XDYHX5B",
    amazonUrl: "https://www.amazon.com/dp/B07XDYHX5B?tag=theofficejournal-20",
    imageUrl: `${B}/03-bamboo-monitor-riser-with-drawer.webp`,
    intro:
      "A monitor stand does two things simultaneously: raises your screen to a better ergonomic height and creates a full-width storage shelf underneath. On a small desk, this trade -- a bit of height for a lot of extra organization -- is almost always worth it.",
    whyWePicked: [
      "7\" of elevation brings most 24-27\" monitors to the correct viewing height for seated posture",
      "Pull-out drawer underneath hides a wireless receiver, cables, small accessories, or a notebook out of sight",
      "22\" wide bamboo platform fits most monitors and ultrawide screens without overhang",
    ],
    skipIf: "You already use a monitor arm -- an arm eliminates the stand footprint entirely and gives more adjustability.",
    budgetAlt: {
      name: "Amazon Basics Metal Monitor Stand with Drawer",
      asin: "B07VZPMDV6",
      amazonUrl: "https://www.amazon.com/dp/B07VZPMDV6?tag=theofficejournal-20",
      price: "$30–$45",
      why: "Metal build, black finish, same drawer feature at a lower price",
    },
  },
  {
    number: 4,
    id: "laptop-stand",
    category: "Laptop Stand",
    name: "Lamicall Foldable Aluminum Laptop Stand",
    brand: "Lamicall",
    price: "$32.99",
    asin: "B08M94BTYC",
    amazonUrl: "https://www.amazon.com/dp/B08M94BTYC?tag=theofficejournal-20",
    imageUrl: `${B}/04-lamicall-foldable-laptop-stand.webp`,
    intro:
      "If you work from a laptop, a stand is one of the most impactful purchases you can make. When your laptop sits flat on a desk, the screen top is 4-6 inches below where it should be for a neutral neck position -- you're angling down for every hour you work.",
    whyWePicked: [
      "Aluminum construction doesn't flex or wobble under laptop weight over time -- plastic stands develop instability within months",
      "Folds flat to under 0.4\" for carrying between rooms or packing for travel",
      "6 stars -- the most validated laptop stand at this price point",
    ],
    skipIf: "You primarily work at a desktop setup -- skip this and consider a monitor arm instead.",
  },
  {
    number: 5,
    id: "desk-mat",
    category: "Desk Mat",
    name: "Nordik Felt + Leather Desk Mat 35x17\"",
    brand: "Nordik",
    price: "$39.97",
    asin: "B0CQBWJK61",
    amazonUrl: "https://www.amazon.com/dp/B0CQBWJK61?tag=theofficejournal-20",
    imageUrl: `${B}/05-nordik-felt-leather-desk-mat.webp`,
    intro:
      "A desk mat is the single purchase that makes a setup feel intentional rather than assembled. It creates one clean work zone, protects the desk surface (relevant at any rental inspection), cushions your wrists during long sessions, and provides consistent mouse tracking.",
    whyWePicked: [
      "35x17\" covers the full keyboard-and-mouse zone on any desk from 36\" to 42\" wide",
      "Non-slip suede backing -- didn't shift once during a full day of typing and mousing in testing",
      "Stitched edges last for years; cheaper wrapped-edge mats peel within 3-6 months",
    ],
    skipIf: "Your desk is under 30\" wide -- a 10x12\" mouse pad works better than a full mat that would dominate the surface.",
  },
  {
    number: 6,
    id: "cable-tray",
    category: "Cable Management",
    name: "Cinati Under-Desk Cable Management Tray",
    brand: "Cinati",
    price: "$17.99",
    asin: "B0BPLT7T1V",
    amazonUrl: "https://www.amazon.com/dp/B0BPLT7T1V?tag=theofficejournal-20",
    imageUrl: `${B}/06-cinati-under-desk-cable-tray.webp`,
    intro:
      "Cable management is the most underrated desk upgrade. Without it, your power strip, charger bricks, and cable tangle sit in a visible pile that makes the entire setup look chaotic -- and shows in every video call background. A cable tray takes five minutes to install and changes the baseline appearance of the workspace immediately.",
    whyWePicked: [
      "C-clamp mount requires no drilling -- attaches to the desk edge and removes cleanly when you change desks",
      "Steel mesh holds a standard 6-outlet power strip plus adapter bricks off the floor and out of sight",
      "Fits desk edges 0.4\"–2.5\" thick -- works on most IKEA and apartment desks",
    ],
    skipIf: "Your desk already has built-in cable routing or a back panel that hides cables.",
    budgetAlt: {
      name: "AUSTOR Adhesive Cable Clips 24-Pack",
      asin: "B078WMCWDD",
      amazonUrl: "https://www.amazon.com/dp/B078WMCWDD?tag=theofficejournal-20",
      price: "$7–$10",
      why: "For routing individual cables along the desk edge -- costs under $10 and eliminates cable fall-off",
    },
  },
  {
    number: 7,
    id: "desk-organizer",
    category: "Desk Organizer",
    name: "Comix Mesh Desk Organizer with Drawer",
    brand: "Comix",
    price: "$14.99",
    asin: "B077M6M8XY",
    amazonUrl: "https://www.amazon.com/dp/B077M6M8XY?tag=theofficejournal-20",
    imageUrl: `${B}/08-comix-mesh-desk-organizer.webp`,
    intro:
      "A desk organizer works only when it has a specific place for every item you actually use. An organizer that doesn't fit your actual items just creates another surface to pile things on top of.",
    whyWePicked: [
      "8 compartments with different depths handle pens, scissors, sticky notes, phone, charger, and accessories without mixing them",
      "Pull-out drawer conceals small items that don't need to be visible (earbuds, USB drives, clips)",
      "Mesh construction shows contents at a glance -- no opening drawers to find things",
    ],
    skipIf: "You prefer a completely clear desk with everything inside drawers -- a drawer organizer insert (#8 below) is a better fit.",
    budgetAlt: {
      name: "mDesign Bamboo Drawer Organizer 2-Pack",
      asin: "B081KBND22",
      amazonUrl: "https://www.amazon.com/dp/B081KBND22?tag=theofficejournal-20",
      price: "$14–$18",
      why: "For desk drawers -- bamboo insert trays convert a junk drawer into organized sections",
    },
  },
  {
    number: 8,
    id: "usb-hub",
    category: "USB Hub",
    name: "Anker 7-Port Powered USB 3.0 Hub",
    brand: "Anker",
    price: "$35–$50",
    asin: "B014ZQ07NE",
    amazonUrl: "https://www.amazon.com/dp/B014ZQ07NE?tag=theofficejournal-20",
    imageUrl: `${B}/10-anker-7-port-powered-usb-hub.webp`,
    intro:
      "Modern laptops ship with 2-4 USB ports. A desk setup with a mouse, keyboard, external drive, webcam, card reader, and USB lamp needs 6-8. An unpowered hub draws electricity from your laptop and drops connections under load -- a powered hub has its own AC adapter and stays stable under full use.",
    whyWePicked: [
      "Powered by 36W AC adapter -- consistent performance with all 7 ports in use simultaneously",
      "BC 1.2 dedicated charging port delivers real 2A fast-charging to phones, not just 0.5A trickle",
      "6 stars with Anker's 18-month warranty -- the most validated powered hub at this price",
    ],
    skipIf: "You primarily use USB-C devices -- a USB-C hub (SABRENT B0CXZ448XL) is a better fit for MacBook and modern laptop users.",
    budgetAlt: {
      name: "Anker PowerPort 6 Desktop Charger",
      asin: "B00P936188",
      amazonUrl: "https://www.amazon.com/dp/B00P936188?tag=theofficejournal-20",
      price: "$19–$26",
      why: "8 stars at 26K reviews",
    },
  },
  {
    number: 9,
    id: "headphone-hook",
    category: "Headphone Hook",
    name: "Elevation Lab The Anchor Under-Desk Mount",
    brand: "Elevation Lab",
    price: "$11.99",
    asin: "B00P31BMHG",
    amazonUrl: "https://www.amazon.com/dp/B00P31BMHG?tag=theofficejournal-20",
    imageUrl: `${B}/12-elevation-lab-under-desk-headphone-hook.webp`,
    intro:
      "A headphone hook is one of the cheapest improvements to a desk setup because it removes an item that takes up disproportionate space relative to its usage. Most people rest headphones on the monitor bezel or leave them on the desk, where they occupy roughly the footprint of a small laptop.",
    whyWePicked: [
      "Mounts under the desk with 3M adhesive -- zero surface footprint, headphones hang below and are immediately accessible",
      "Holds two pairs of headphones simultaneously -- useful for setups with both over-ear and in-ear options",
      "Medical-grade silicone with steel reinforcement -- won't scratch headband padding over time",
    ],
    skipIf: "You want headphones visible on your desk as a display piece -- a desktop headphone stand looks better but takes 3-4 inches of surface.",
  },
  {
    number: 10,
    id: "footrest",
    category: "Under-Desk Footrest",
    name: "ComfiLife Memory Foam Footrest",
    brand: "ComfiLife",
    price: "$39.99",
    asin: "B08DHMMBFF",
    amazonUrl: "https://www.amazon.com/dp/B08DHMMBFF?tag=theofficejournal-20",
    imageUrl: `${B}/13-comfilife-memory-foam-footrest.webp`,
    intro:
      "A footrest addresses a posture gap that most people don't notice until they sit at a desk for four hours straight. If your desk is at standard height (29-30\") and your feet don't rest flat on the floor at a 90° knee angle in your normal typing position, there's low-level tension building in your lower back that you feel as fatigue by mid-afternoon.",
    whyWePicked: [
      "Adjustable height and tilt calibrates to your exact desk and chair combination",
      "Memory foam surface reduces foot pressure compared to rigid wooden footrests",
      "5 stars -- the most validated footrest across this price range",
    ],
    skipIf: "Your feet rest comfortably flat on the floor when typing. Test: sit in your normal position and check if your knees are at 90° -- if yes, skip this.",
  },
  {
    number: 11,
    id: "plant-decor",
    category: "Desk Decor",
    name: "FUNARTY 5pcs Artificial Succulents in Ceramic Pots",
    brand: "FUNARTY",
    price: "$15.99",
    asin: "B08QZDK87C",
    amazonUrl: "https://www.amazon.com/dp/B08QZDK87C?tag=theofficejournal-20",
    imageUrl: `${B}/14-funarty-artificial-succulents.webp`,
    intro:
      "One small plant is often the difference between a desk that looks functional and one that looks intentional. The case for artificial: real succulents need specific light levels that most desk positions can't provide consistently, and a dying plant looks worse than no plant at all.",
    whyWePicked: [
      "5 different varieties in white ceramic pots -- looks curated rather than like a single prop",
      "Zero maintenance -- no watering schedule, no adjusting for light, looks the same on day 300 as day 1",
      "6 stars -- the most reviewed artificial succulent set available",
    ],
    skipIf: "Your desk gets consistent bright indirect light -- a real ZZ plant or pothos would look better and improve air quality.",
  },
  {
    number: 12,
    id: "timer-clock",
    category: "The Unexpected Essential: Pomodoro Timer",
    name: "KADAMS Pomodoro Cube Timer",
    brand: "KADAMS",
    price: "$19–$29",
    asin: "B0CTBVXCR7",
    amazonUrl: "https://www.amazon.com/dp/B0CTBVXCR7?tag=theofficejournal-20",
    imageUrl: `${B}/15-kadams-pomodoro-cube-timer.webp`,
    intro:
      "Most desk setup guides stop at cable management and forget that the biggest challenge at a desk isn't physical -- it's staying focused. A physical timer changes how you work because it creates a tangible commitment that a phone timer doesn't. When you flip the cube to 25 minutes, you're making a deliberate agreement with yourself in a way that a phone app can't replicate.",
    whyWePicked: [
      "Flip-to-start gravity activation -- no buttons, just rotate to your chosen interval and the countdown begins",
      "11 preset intervals from 1 to 90 minutes cover everything from quick tasks to deep work sessions",
      "Three alert modes (sound/vibrate/silent) -- silent mode is essential for shared spaces and late-night sessions",
    ],
    skipIf: "You already have a reliable focus routine -- this is for people who struggle with starting tasks or time-boxing work sessions.",
  },
];

// AtAGlance items -- required by template
export const atAGlanceItems = items.map((item) => ({
  rank: item.number,
  badge: item.category,
  name: item.name,
  brand: item.brand,
  imageUrl: item.imageUrl,
  affiliateUrl: item.amazonUrl,
  price: item.price,
  anchorId: item.id,
  pros: item.whyWePicked.map((text) => ({ text })),
  cons: [{ text: item.skipIf, severity: "minor" as const }],
}));

export const checklist = [
  { area: "Lighting", item: "Clamp lamp or monitor light bar", why: "Targeted task light without surface footprint" },
  { area: "Screen height", item: "Monitor stand or laptop stand", why: "Raises screen to eye level, creates storage below" },
  { area: "Surface", item: "Desk mat (35x17\" for most desks)", why: "Defines workspace, protects surface, cushions wrists" },
  { area: "Cables", item: "Under-desk cable tray + clips", why: "Hides power strip and cords from view" },
  { area: "Small items", item: "Compact desk organizer", why: "Single home for daily-use accessories" },
  { area: "Connectivity", item: "Powered USB hub", why: "More ports without dropped connections" },
  { area: "Headphones", item: "Under-desk headphone hook", why: "Removes headphones from surface, frees 4+ sq inches" },
  { area: "Comfort", item: "Under-desk footrest", why: "Fills gap between floor and feet for neutral posture" },
  { area: "Focus", item: "Pomodoro timer", why: "Physical time commitment improves task initiation" },
  { area: "Aesthetic", item: "One small plant or decor item", why: "Makes setup feel intentional, not just functional" },
];

export const dontNeedYet = [
  { item: "RGB lighting", reason: "Looks good in photos, rarely improves actual work quality" },
  { item: "Large monitor arm", reason: "Buy after you've confirmed a monitor stand isn't enough" },
  { item: "Expensive speakers", reason: "Headphones do the same job for less" },
  { item: "Multiple storage boxes", reason: "Buy one organizer first, then see what else you actually need" },
  { item: "Oversized decor", reason: "A 6-inch plant and a framed photo are enough for a small desk" },
  { item: "Standing desk converter", reason: "A good footrest and posture habit outperforms a converter at a fraction of the cost" },
];

export interface HowToChooseSection {
  icon: string;
  tip: string;
  body: string;
}

export const howToChoose: HowToChooseSection[] = [
  { icon: "🔧", tip: "Start with your biggest daily frustration", body: "If cables are a mess -- fix cables first. If you're squinting at a dark screen -- fix lighting first." },
  { icon: "📏", tip: "Measure your desk before buying", body: "A 35\" desk mat on a 32\" desk hangs off the edge. A monitor stand too wide for your monitor looks unbalanced. Measure width, depth, and edge thickness before any purchase." },
  { icon: "🔌", tip: "Solve power first", body: "A powered USB hub and cable tray should come before aesthetic items. Getting all devices connected cleanly changes the baseline of your setup. Everything else looks better after this is fixed." },
  { icon: "🪑", tip: "Ergonomics before aesthetics", body: "Monitor stand, laptop stand, and footrest affect you physically every day. A desk plant looks good; a monitor at the wrong height causes neck tension over months." },
  { icon: "💰", tip: "Set a total budget, not a per-item budget", body: "Buying 15 accessories at 'just $20 each' adds up to $300. Decide on a total first -- $100, $150, $200 -- then prioritize within it." },
];

export const faq: Array<{ q: string; a: string }> = [
  { q: "What are the most important desk setup essentials?", a: "Start with these three: a cable management tray (biggest visual impact for the cost), a desk lamp with a clamp mount (zero surface footprint), and a monitor stand or laptop stand (ergonomic and creates storage underneath). These three address the most common desk problems before anything else." },
  { q: "How do I make a small desk setup look clean?", a: "Hide cables first (under-desk tray or clips), then add a desk mat that defines the workspace, then keep only daily-use items on the surface. The three-step sequence -- cable management, mat, ruthless surface editing -- transforms most small desks without buying anything expensive." },
  { q: "What should every work-from-home desk have?", a: "Beyond the basics (monitor, keyboard, mouse): a powered USB hub for connecting everything, a clamp desk lamp or monitor light bar, cable management, and a headphone hook. These four items address the practical daily-use gaps in most home office setups." },
  { q: "Are desk accessories worth buying?", a: "A $20 cable tray and a $15 headphone hook have immediate, visible impact every day. A $50 RGB light strip has zero functional benefit. The criterion is: does this make my workspace easier to use or more comfortable? If it's purely decorative, probably not." },
  { q: "What should I buy first for a better desk setup?", a: "A cable management tray -- it costs $20, takes 5 minutes, and immediately makes everything else look more intentional. Second: a desk lamp with a clamp mount. These two purchases change the baseline of any desk setup before anything else." },
  { q: "How can I improve my desk setup on a budget?", a: "Under $50 combination: cable clips ($8), a headphone hook ($12), and a compact desk organizer ($18). These three eliminate the most common visual clutter on any desk. Under $100: add a desk mat ($35) and you've transformed the setup's appearance without touching the monitor or lighting." },
];
