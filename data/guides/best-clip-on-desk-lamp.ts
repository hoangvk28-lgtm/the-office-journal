const BASE =
  "/images/media/guides/best-clip-on-desk-lamp";

export const guideSlug = "best-clip-on-desk-lamp";
export const guideTitle =
  "Best Clip-On Desk Lamp for Small Desks & Dorms (2026)";
export const guideDescription =
  "We evaluated 8 clip-on desk lamps specifically for small desks and dorm rooms -- rated on clamp strength, brightness range, cord management, and value. Zero surface footprint, targeted light.";
export const metaTitle = "Best Clip-On Desk Lamp (2026)";
export const metaDescription = "8 clip-on lamps for small desks and dorms -- rated on clamp strength, brightness, and value. Includes cordless and eye-care options. Zero surface footprint.";
export const lastUpdated = "2026-05-27";
export const readTime = "11 min";
export const heroImage = `${BASE}/voncerus-led-clamp-best-overall.webp`;

export type PowerSource = "usb" | "battery" | "plug-in";

export interface ClipLamp {
  rank: number;
  id: string;
  name: string;
  badge: string;
  score: number;
  price?: string;
  power: PowerSource;
  powerLabel: string;
  brightness: string;
  colorModes: string;
  armType: string;
  amazonUrl: string;
  imageUrl: string;
  standout: string;
  whyItWorks: string[];
  tradeoffs?: string[];
  bestFor: string;
  caveat?: string;
  specs: Array<{ label: string; value: string }>;
}

export const lamps: ClipLamp[] = [
  {
    rank: 1,
    id: "voncerus-led-clamp",
    name: "Voncerus LED Clamp Lamp",
    badge: "Best Overall",
    score: 9.1,
    power: "usb",
    powerLabel: "USB-A (adapter included)",
    brightness: "10 levels",
    colorModes: "3 modes (3000K / 4000K / 6000K)",
    armType: "Metal gooseneck + swing arm",
    amazonUrl: "https://www.amazon.com/dp/B0BB5ZBT42?tag=theofficejournal-20",
    imageUrl: `${BASE}/voncerus-led-clamp-best-overall.webp`,
    standout:
      "Long flexible metal gooseneck paired with a metal swing arm -- not the flimsy plastic that droops after two weeks. Clamp jaw opens wide enough for desks up to 2 inches thick.",
    whyItWorks: [
      "10 brightness levels + 3 color modes give real control, not just dim/bright",
      "USB-A runs off any power strip or USB charger -- no dedicated outlet needed",
      "Metal arm holds position without drooping over time",
      "Clamp fits desks up to 2 inches thick (covers most dorm and IKEA desks)",
    ],
    bestFor:
      "Anyone who wants one reliable lamp for studying, Zoom calls, and general desk lighting. The default recommendation for most people.",
    specs: [
      { label: "Power", value: "USB-A (adapter included)" },
      { label: "Brightness", value: "10 levels" },
      { label: "Color modes", value: "3 (3000K / 4000K / 6000K)" },
      { label: "Arm type", value: "Metal gooseneck + swing arm" },
      { label: "Clamp capacity", value: "Up to 2\" thick" },
    ],
  },
  {
    rank: 2,
    id: "dpower-48-led",
    name: "Dpower 48-LED Clip Light",
    badge: "Best Budget",
    score: 8.7,
    power: "usb",
    powerLabel: "USB",
    brightness: "10 levels",
    colorModes: "3 modes",
    armType: "360 flexible gooseneck",
    amazonUrl: "https://www.amazon.com/dp/B08T24FJC9?tag=theofficejournal-20",
    imageUrl: `${BASE}/dpower-48-led-best-budget.webp`,
    standout:
      "48-LED panel distributes light more evenly than single-bulb clip lamps -- less spotlight effect, more diffused task light. Easier on the eyes during long study sessions.",
    whyItWorks: [
      "48 LEDs spread light evenly -- no harsh spotlight hotspot",
      "10 brightness levels + 3 color modes at under $20",
      "USB-powered -- runs off laptop or power strip",
      "360 flexible gooseneck holds position reliably",
    ],
    bestFor:
      "Students who need a capable clip lamp under $20 and don't want to gamble on a $7 no-name model.",
    specs: [
      { label: "Power", value: "USB" },
      { label: "Brightness", value: "10 levels" },
      { label: "Color modes", value: "3" },
      { label: "Arm type", value: "360 flexible gooseneck" },
      { label: "LED count", value: "48" },
    ],
  },
  {
    rank: 3,
    id: "deeplite-battery-powered",
    name: "DEEPLITE Battery-Powered Clip Lamp",
    badge: "Best Cordless",
    score: 8.4,
    power: "battery",
    powerLabel: "Battery (USB rechargeable)",
    brightness: "Stepless (continuous)",
    colorModes: "3 modes",
    armType: "Flexible gooseneck",
    amazonUrl: "https://www.amazon.com/dp/B08RS1B9S8?tag=theofficejournal-20",
    imageUrl: `${BASE}/deeplite-battery-powered-best-cordless.webp`,
    standout:
      "Stepless dimming -- hold the touch button and brightness slides up or down continuously. No preset jumps. Makes finding the exact level that doesn't give you a headache at midnight actually possible.",
    whyItWorks: [
      "No outlet needed -- ideal when your power strip is already maxed out",
      "Stepless dimming (continuous, not stepped) -- smoother than most lamps",
      "Touch control cycles color modes and adjusts brightness with one button",
      "Memory function remembers last brightness setting on startup",
    ],
    tradeoffs: [
      "Battery life ~3-4 hours at maximum brightness; significantly longer at lower settings",
    ],
    bestFor:
      "Dorm rooms where outlet space is at a premium, or anyone who wants a completely cord-free desk surface.",
    caveat:
      "Battery life depends on brightness level. At maximum, expect roughly 3-4 hours per charge.",
    specs: [
      { label: "Power", value: "Battery (USB rechargeable)" },
      { label: "Brightness", value: "Stepless (continuous)" },
      { label: "Color modes", value: "3" },
      { label: "Arm type", value: "Flexible gooseneck" },
      { label: "Memory function", value: "Yes" },
    ],
  },
  {
    rank: 4,
    id: "10w-swing-arm",
    name: "10W Gooseneck Swing Arm Clamp",
    badge: "Best for Reading",
    score: 8.6,
    power: "plug-in",
    powerLabel: "AC adapter (plug-in)",
    brightness: "Touch dimmable",
    colorModes: "Warm white",
    armType: "Metal gooseneck swing arm",
    amazonUrl: "https://www.amazon.com/dp/B088GM7X4X?tag=theofficejournal-20",
    imageUrl: `${BASE}/10w-swing-arm-best-for-reading.webp`,
    standout:
      "At 10 watts, outputs more light than any other lamp on this list. Metal construction is noticeably sturdier than plastic gooseneck competitors. Rubber-padded clamp grips desks without scratching.",
    whyItWorks: [
      "10W is the brightest option on this list -- ideal for dense text or detailed work",
      "Metal swing arm holds position without drooping",
      "Rubber-padded clamp protects desk surface from scratches",
      "Touch dimming makes it easy to dial down for background light",
    ],
    bestFor:
      "Students who do a lot of reading from printed materials, or anyone whose dorm room has poor ambient lighting.",
    specs: [
      { label: "Power", value: "AC adapter (plug-in)" },
      { label: "Wattage", value: "10W" },
      { label: "Brightness", value: "Touch dimmable" },
      { label: "Arm type", value: "Metal gooseneck swing arm" },
      { label: "Color", value: "White" },
    ],
  },
  {
    rank: 5,
    id: "360-rotation-bunk",
    name: "360 Rotation Clip Lamp",
    badge: "Best for Bunk Beds",
    score: 8.2,
    power: "usb",
    powerLabel: "USB",
    brightness: "Adjustable",
    colorModes: "Multiple",
    armType: "360 gooseneck cable",
    amazonUrl: "https://www.amazon.com/dp/B08RBJCJZR?tag=theofficejournal-20",
    imageUrl: `${BASE}/360-rotation-best-for-bunk-beds.webp`,
    standout:
      "360 rotation lets you clip to a bed frame and rotate the head to shine down on your book without disturbing the person below. Cable-style gooseneck adapts to irregular mounting surfaces like headboard rails.",
    whyItWorks: [
      "360 head rotation -- position light precisely without moving the clamp",
      "Cable gooseneck snakes around obstacles better than rigid arms",
      "Works on desk, bed frame, headboard, or shelf rail",
      "USB-powered -- runs off any USB source",
    ],
    bestFor:
      "Top-bunk students, small bedrooms where the lamp needs to clip to a shelf or headboard rather than a desk.",
    specs: [
      { label: "Power", value: "USB" },
      { label: "Rotation", value: "360 head rotation" },
      { label: "Arm type", value: "Flexible gooseneck cable" },
      { label: "Use case", value: "Desk, bed, headboard, shelf" },
    ],
  },
  {
    rank: 6,
    id: "led-flexible-gooseneck",
    name: "LED Flexible Gooseneck Clamp",
    badge: "Best Ultra-Compact",
    score: 7.9,
    power: "usb",
    powerLabel: "USB",
    brightness: "Adjustable + night light mode",
    colorModes: "Standard + night light",
    armType: "360 flexible gooseneck",
    amazonUrl: "https://www.amazon.com/dp/B09WTX7S79?tag=theofficejournal-20",
    imageUrl: `${BASE}/led-flexible-gooseneck-ultra-compact.webp`,
    standout:
      "The smallest, lightest option on this list. Night-light mode dims way down for soft ambient light when you don't want to wake your roommate.",
    whyItWorks: [
      "Smallest profile -- barely takes up visual space on the desk",
      "Night-light mode for soft ambient use without waking roommates",
      "USB-powered, no extra outlet needed",
      "Works as a quick supplemental light for any corner of a setup",
    ],
    bestFor:
      "Minimalists, people who are on the fence about clip lamps, or anyone who needs occasional supplemental lighting on a very tight budget.",
    specs: [
      { label: "Power", value: "USB" },
      { label: "Arm type", value: "360 flexible gooseneck" },
      { label: "Special mode", value: "Night light" },
      { label: "Size", value: "Compact" },
    ],
  },
  {
    rank: 7,
    id: "eye-caring-gooseneck",
    name: "Eye-Caring 360 Gooseneck",
    badge: "Best for Eye Strain",
    score: 8.0,
    power: "usb",
    powerLabel: "USB",
    brightness: "Adjustable",
    colorModes: "360 gooseneck",
    armType: "360 flexible gooseneck",
    amazonUrl: "https://www.amazon.com/dp/B08XQY5LY6?tag=theofficejournal-20",
    imageUrl: `${BASE}/eye-caring-gooseneck-eye-strain.webp`,
    standout:
      "Flicker-free light output. Many cheap LED lamps flicker at 50-60Hz -- invisible to the naked eye but picked up by your visual system over long sessions, contributing to headaches and fatigue.",
    whyItWorks: [
      "Flicker-free certification -- reduces eye fatigue on 3+ hour study sessions",
      "Softer light quality compared to standard LED panels",
      "360 gooseneck for full positioning flexibility",
      "USB-powered -- runs off laptop or power strip",
    ],
    bestFor:
      "Students who study 4+ hours daily under artificial light, or anyone who gets headaches from their current desk lamp.",
    specs: [
      { label: "Power", value: "USB" },
      { label: "Rotation", value: "360 gooseneck" },
      { label: "Eye-care", value: "Flicker-reduction" },
      { label: "Mode", value: "Portable reading light" },
    ],
  },
  {
    rank: 8,
    id: "eazyclips-led",
    name: "Eazyclips LED Clip Lamp",
    badge: "Best Entry-Level",
    score: 7.5,
    power: "usb",
    powerLabel: "USB or AC",
    brightness: "2 levels",
    colorModes: "Standard",
    armType: "Flexible clip",
    amazonUrl: "https://www.amazon.com/dp/B01L4BL0E8?tag=theofficejournal-20",
    imageUrl: `${BASE}/eazyclips-led-entry-level.webp`,
    standout:
      "The simplicity. One switch, two settings. Plug in, turn on, use it. Works with both USB and AC power -- the most versatile power option on this list.",
    whyItWorks: [
      "USB or AC power -- works with any power source you have",
      "Dead simple to use -- one switch, two brightness levels",
      "Good as a second lamp for a specific desk area or shelf",
      "Low cost makes it practical as a gift or backup",
    ],
    bestFor:
      "Casual users, a second lamp for a specific spot, or a gift for someone who just needs something that works.",
    specs: [
      { label: "Power", value: "USB or AC" },
      { label: "Brightness", value: "2 levels" },
      { label: "Arm", value: "Flexible clip design" },
      { label: "Best use", value: "Supplemental lighting" },
    ],
  },
];

export const atAGlance = lamps.map((l) => ({
  rank: l.rank,
  id: l.id,
  name: l.name,
  badge: l.badge,
  score: l.score,
  imageUrl: l.imageUrl,
  amazonUrl: l.amazonUrl,
}));

export const evaluationCriteria = [
  { icon: "📐", label: "Small-Space Fit (25%)", body: "Zero desk footprint, compact clamp profile. The entire point of a clip-on lamp is to mount on the desk edge -- not a base that rests on the surface." },
  { icon: "💡", label: "Brightness Range (20%)", body: "Minimum 3 brightness levels; both focused reading mode and soft ambient mode. More levels = more flexibility to avoid eye strain." },
  { icon: "🔩", label: "Build Quality (20%)", body: "Clamp strength, arm stability, and material durability. Metal goosenecks hold position far better than plastic, which droops over weeks of use." },
  { icon: "👆", label: "Ease of Use (20%)", body: "Touch control, intuitive settings, cord management. We specifically evaluated clamp jaw width for desk compatibility and power source flexibility." },
  { icon: "💰", label: "Value (15%)", body: "Price-to-feature ratio vs. comparable options at each price tier. A $20 lamp with 48 LEDs and 3 color modes scores higher than a $30 lamp with fewer features." },
];

export const buyingCriteria = [
  {
    icon: "📏",
    title: "Clamp jaw width -- does it fit your desk?",
    body: "Most clip-on lamps clamp desks up to 1.5-2.5 inches thick. Standard dorm desks and IKEA tabletops are 0.75-1.25 inches -- all fine. Issues arise with thicker built-in desks or shelf rails. Measure your desk edge first if unsure. If clamping to a headboard rail, verify the clamp opens wide enough for round surfaces.",
  },
  {
    icon: "🔌",
    title: "Power source -- USB vs. battery vs. plug-in",
    body: "USB is most versatile: runs off your laptop, power strip, or any USB charger. Battery (rechargeable) is best when outlets are already maxed out -- recharge during the day, use at night. Plug-in AC is brightest and most consistent but needs a dedicated outlet slot.",
  },
  {
    icon: "☀️",
    title: "Color temperature -- warm vs. daylight",
    body: "2700-3000K warm white: easier on the eyes for evening reading, won't suppress melatonin. 4000K neutral white: all-purpose, good for any task at any time. 5000-6500K cool white: maximizes alertness for afternoon sessions. A lamp with all three modes gives full flexibility.",
  },
  {
    icon: "📐",
    title: "Gooseneck length and flexibility",
    body: "Look for at least 12 inches of flexible arm. Metal goosenecks hold position far better than plastic -- plastic fatigues and droops over weeks of use. Cable-style goosenecks (like the bunk bed pick) are more adaptable for irregular surfaces.",
  },
  {
    icon: "🌙",
    title: "Flicker-free LED",
    body: "Cheap LED lamps flicker at 50-60Hz -- invisible to the naked eye but detected by your visual system over long sessions, contributing to eye strain and headaches. If you study 3+ hours daily, look for flicker-free certification.",
  },
  {
    icon: "🛌",
    title: "Shared room and roommate etiquette",
    body: "Clip-on lamps are directional -- light stays focused on your workspace. Position the lamp facing your desk and away from your roommate's side. Use warm-white mode at low brightness. This combination is virtually invisible from the other side of a standard dorm room.",
  },
];

export const clipVsBase = [
  { situation: "Desk under 36 inches wide", pick: "Clip-on", reason: "Every inch of surface matters" },
  { situation: "Dorm room with limited outlets", pick: "Clip-on (battery)", reason: "No outlet needed" },
  { situation: "Bunk bed or headboard reading", pick: "Clip-on", reason: "Attaches to frame or headboard" },
  { situation: "Maximum brightness for art/detail work", pick: "Base lamp", reason: "More wattage options" },
  { situation: "Shared room, one person sleeps early", pick: "Clip-on", reason: "Directional light, less room spill" },
  { situation: "Permanent home office setup", pick: "Base lamp", reason: "More stable, no clamp wear" },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "How thick does my desk need to be for a clip-on lamp?",
    a: "Most clip-on lamps clamp desks up to 1.5-2.5 inches thick. Standard dorm desks, IKEA tabletops (like LINNMON), and most college-issued desks fall between 0.75-1.5 inches thick -- well within range. If your desk is unusually thick or you're clamping to a round surface like a headboard rail, check the specific clamp specs before buying.",
  },
  {
    q: "Can I use a clip-on lamp with a USB power bank?",
    a: "Yes -- any USB-powered clip lamp will run off a power bank. Useful if you're studying somewhere without an outlet. A 10,000mAh power bank will run most USB clip lamps for 15-20+ hours.",
  },
  {
    q: "Will a clip-on lamp damage my desk or leave marks?",
    a: "Good clip lamps have rubber or silicone padding on the clamp jaws. This prevents scratches on wood and composite surfaces. Avoid metal-jaw clamps with no padding on finished or lacquered desks.",
  },
  {
    q: "Do I need a specific color temperature for studying?",
    a: "For studying and reading, 4000K neutral white is the best all-around choice -- it mimics natural daylight without the harshness of cool blue-white light. If you study late at night, switch to 3000K warm white to minimize melatonin suppression and sleep disruption.",
  },
  {
    q: "Are USB clip lamps bright enough for serious work?",
    a: "Yes, for most tasks. USB (5V) lamps typically output 200-500 lumens, which is enough for reading, writing, and computer work. If you need more than 500 lumens (detailed art, technical drawing), look for a plug-in AC lamp with higher wattage.",
  },
  {
    q: "How long do LED clip lamps last?",
    a: "Quality LED chips are rated for 20,000-50,000 hours. At 4 hours of daily use, that's 13-34 years. The clamp mechanism and power cable will likely wear out before the LEDs do.",
  },
  {
    q: "My roommate goes to sleep early. Can I use a clip-on lamp without disturbing them?",
    a: "Yes -- this is one of the strongest arguments for a clip-on lamp. The directional nature keeps light focused on your workspace. Position it facing your desk and away from your roommate's side, and use warm-white mode at low brightness. This combination is virtually invisible from the other side of a standard dorm room.",
  },
];
