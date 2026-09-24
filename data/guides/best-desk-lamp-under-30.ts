const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-desk-lamp-under-30";

export const guideTitle = "Best Desk Lamp Under $30: Bright Enough, Small Enough, Dorm-Friendly";
export const guideDescription =
  "Most desk lamp guides are written for people with large desks, dedicated offices, and no roommates. This guide is for everyone else: small desks, shared rooms, limited outlets, and a budget that has better places to be.";
export const metaTitle = "Best Desk Lamp Under $30 for Students (2026)";
export const metaDescription =
  "5 desk lamps under $30 for students -- clamp vs standing, color temp for studying, USB-powered options, and dorm roommate-friendly picks under $22.";
export const lastUpdated = "2026-06-04";
export const readTime = "9 min";
export const heroImage = `${BASE}/06-hero-best-desk-lamp-under-30.webp`;

export interface BudgetLamp {
  id: string;
  rank: number;
  badge: string;
  name: string;
  brand: string;
  bestFor: string;
  price: string;
  priceRange: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWins: string;
  bodyParagraph: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  bestForDetail: string;
}

export const products: BudgetLamp[] = [
  {
    id: "best-overall",
    rank: 1,
    badge: "Best Overall",
    name: "Lepro LED Desk Lamp (5x5 modes)",
    brand: "Lepro",
    bestFor: "Most students, general study",
    price: "~$20-28",
    priceRange: "~$20--28",
    imageUrl: `${BASE}/01-best-overall-lepro-led-desk-lamp.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08LMPCX3D?tag=theofficejournal-20",
    whyItWins: "The Lepro is the Forbes Vetted pick and consistently appears in independent desk lamp roundups for good reason: 5 color temperature modes x 5 brightness levels = 25 light combinations, covering every study scenario from late-night warm reading to bright afternoon note-taking. The 800-lumen output is strong for this price -- bright enough to illuminate a full desk workspace without a second lamp.",
    bodyParagraph: "The diffused LED panel (not a bare bulb) reduces glare and hotspots -- important for extended sessions. Touch controls on the base are responsive without being accidental.",
    specs: [
      { label: "Light output", value: "800 lumens, 9.5W" },
      { label: "Color temperatures", value: "5 modes (2700K--6500K)" },
      { label: "Brightness levels", value: "5 per color mode (25 combinations)" },
      { label: "Panel", value: "Diffused LED (no glare)" },
      { label: "Power", value: "USB-A powered" },
      { label: "Controls", value: "Touch" },
    ],
    pros: ["25 light combinations -- covers every study scenario", "800lm strong output for the price", "Diffused panel eliminates hotspots and glare", "Forbes vetted, widely recommended", "USB-powered -- no outlet needed"],
    cons: ["Freestanding base (~12 cm footprint)", "No USB charging port on lamp", "No timer function"],
    bestForDetail: "Students with desk space who want the most lighting flexibility per dollar.",
  },
  {
    id: "best-clamp",
    rank: 2,
    badge: "Best Clamp (Zero Footprint)",
    name: "iVict 56-LED Clip Desk Light",
    brand: "iVict",
    bestFor: "Small desks, zero footprint",
    price: "~$15-22",
    priceRange: "~$15--22",
    imageUrl: `${BASE}/02-best-clamp-ivict-56-led-clip-desk-light.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C462K8S4?tag=theofficejournal-20",
    whyItWins: "The iVict clips to the desk edge and takes zero surface area. The 56 LED chips spread across the lamp head provide even coverage, and the 360° flexible gooseneck positions the light precisely over the work area. Three color temperatures x 10 brightness levels = 30 combinations.",
    bodyParagraph: "The clip opens to 6 cm -- fitting most standard desks (typically 18--25 mm thick). Foam pads on the clip protect the desk finish. For a 60--70 cm desk where every centimeter of surface matters, this eliminates the lamp-base problem entirely.",
    specs: [
      { label: "LEDs", value: "56 chips" },
      { label: "Color temps", value: "3 modes (warm, neutral, cool)" },
      { label: "Brightness levels", value: "10 per mode (30 combinations)" },
      { label: "Blue light", value: "Blocks 99.95% harmful blue light" },
      { label: "Clamp range", value: "Up to 6 cm desk thickness" },
      { label: "Gooseneck", value: "360° adjustable" },
      { label: "Power", value: "USB-A powered" },
    ],
    pros: ["Zero desk footprint -- clips to edge", "360° flexible arm for precise positioning", "30 light combinations", "Clip pads protect desk finish", "USB-powered"],
    cons: ["Arm can drift slightly on very flexible goosenecks", "Smaller light panel than freestanding options"],
    bestForDetail: "Any desk under 80 cm wide, or setups where every centimeter of surface counts.",
  },
  {
    id: "best-usb-charging",
    rank: 3,
    badge: "Best with USB Charging",
    name: "LED Desk Lamp + Dual USB Hub",
    brand: "Generic",
    bestFor: "Charging phone while studying",
    price: "~$18-25",
    priceRange: "~$18--25",
    imageUrl: `${BASE}/03-best-with-usb-charging-led-desk-lamp-dual-usb-hub.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08923SXXP?tag=theofficejournal-20",
    whyItWins: "The core problem with most desk lamps is they use an outlet without giving anything back. This pick adds dual USB ports (USB-A + USB-C) to the lamp base -- meaning the lamp charges your phone while it lights your desk from the same power source. In a dorm or apartment where every outlet is contested, this combination is genuinely useful.",
    bodyParagraph: "5 color modes x 3 brightness levels with a touch control panel, plus a small nightlight mode for the base.",
    specs: [
      { label: "Color temps", value: "5 modes" },
      { label: "Brightness levels", value: "3 per mode" },
      { label: "USB ports", value: "1x USB-A (5V/2.1A) + 1x USB-C" },
      { label: "Nightlight", value: "Built-in base glow" },
      { label: "Controls", value: "Touch panel" },
      { label: "Power", value: "Wall plug (outlet required)" },
    ],
    pros: ["Charges phone + powers lamp from one outlet", "USB-C port charges modern devices", "5 color modes", "Nightlight function", "Consolidates lamp + charger"],
    cons: ["Requires wall outlet (not purely USB-powered)", "Base footprint ~12 cm"],
    bestForDetail: "Students who are always hunting for a charging spot and want to consolidate lamp + phone charger into one unit.",
  },
  {
    id: "best-dorm",
    rank: 4,
    badge: "Best for Dorm Rooms",
    name: "iVict Gooseneck Clamp 27-Mode",
    brand: "iVict",
    bestFor: "Warm light, directional, dorm use",
    price: "~$18-25",
    priceRange: "~$18--25",
    imageUrl: `${BASE}/04-best-for-dorm-ivict-gooseneck-clamp-27-mode.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BLK6RFGH?tag=theofficejournal-20",
    whyItWins: "The iVict gooseneck clamp is the most versatile pick for shared room use. 27 lighting modes (9 color temps x 3 brightness) give you extreme fine-tuning over the light environment -- crucial when you need 'warm, dim, directional' for midnight studying next to a sleeping roommate.",
    bodyParagraph: "The monitor-bar style head focuses light down and forward, not upward into the room. The clamp mount keeps it off the desk surface. This combination of focused light + warm dimming + zero desk footprint makes it the pick most specifically designed for dorm use.",
    specs: [
      { label: "Light modes", value: "27 (9 color temps x 3 brightness levels)" },
      { label: "Style", value: "Monitor bar / gooseneck clamp" },
      { label: "Focus", value: "Directional downward beam" },
      { label: "Power", value: "USB-A powered" },
      { label: "Clamp", value: "Desk edge or monitor top compatible" },
    ],
    pros: ["27 modes including very warm/dim settings", "Directional beam -- does not spill upward into room", "Zero desk footprint", "Clamp mount, USB-powered", "Best for roommate-considerate lighting"],
    cons: ["Lower total lumens than Lepro -- not ideal as sole lamp in dark room", "Fewer brightness levels per color mode"],
    bestForDetail: "Dorm rooms, shared bedrooms, or any late-night study situation where light direction and warmth matter.",
  },
  {
    id: "best-budget",
    rank: 5,
    badge: "Best Budget Under $20",
    name: "LE Dimmable 7-Level LED",
    brand: "LE",
    bestFor: "Tight budget, reliable basics",
    price: "~$12-18",
    priceRange: "~$12--18",
    imageUrl: `${BASE}/05-best-budget-under-20-le-dimmable-7-level-led.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00MHLIGCY?tag=theofficejournal-20",
    whyItWins: "When the budget ceiling is $15--18, most options involve compromises. The LE Dimmable does not pretend to offer 25 lighting modes -- it offers one color (daylight white), seven brightness levels, and reliable LED operation. Simple, functional, and bright.",
    bodyParagraph: "The 7-level touch dimmer is smooth and responsive. The daylight-white color temperature (5000K) is appropriate for focused study. No USB charging, no color modes -- just a clean, reliable desk lamp at a low price.",
    specs: [
      { label: "Color", value: "Daylight white (5000K, one temperature)" },
      { label: "Brightness levels", value: "7" },
      { label: "Controls", value: "Touch sensitive dimmer" },
      { label: "Power", value: "USB-A powered" },
    ],
    pros: ["Lowest price in roundup (~$12--18)", "Simple to use -- 7 brightness levels", "Smooth touch dimmer", "USB-powered"],
    cons: ["Single color temperature only (no warm option)", "No USB charging pass-through"],
    bestForDetail: "Budget-first buyers who need reliable study lighting without extra features.",
  },
];

export const atAGlanceItems = products.map((p) => ({
  rank: p.rank,
  badge: p.badge,
  name: p.name,
  brand: p.brand,
  imageUrl: p.imageUrl,
  affiliateUrl: p.amazonUrl,
  price: p.price,
  anchorId: p.id,
  pros: p.pros.slice(0, 3).map((text) => ({ text })),
  cons: [{ text: p.cons[0], severity: "minor" as const }],
}));

export const clampVsStandingRows = [
  { type: "Freestanding (Lepro, LE)", footprint: "12--15 cm base", bestFor: "Desks 100 cm+ with space to spare" },
  { type: "Clamp/clip (iVict)", footprint: "0 cm on desk surface", bestFor: "Small desks under 80 cm" },
  { type: "Monitor bar", footprint: "0 cm on desk, mounts on monitor", bestFor: "Only if you have an external monitor" },
];

export const colorTempGuide = [
  { range: "Warm (2700--3000K)", description: "Amber/orange tone. Relaxing -- lower alertness, easier on eyes at night. Good for reading novels, winding down, or late-night study sessions when you do not want to disrupt your sleep cycle." },
  { range: "Neutral/natural (4000--4500K)", description: "Closest to daylight. Good for general desk work -- writing, reading, online classes. Not harsh, not sleepy." },
  { range: "Cool/daylight (5500--6500K)", description: "Bright white-blue tone. Maximum alertness and focus. Good for active problem-solving and early-morning study sessions. Can cause eye strain if used all evening." },
];

export const studySituationRows = [
  { situation: "Small desk (< 80 cm)", need: "Zero footprint", pick: "iVict Clamp B0C462K8S4", id: "best-clamp" },
  { situation: "Dorm, shared room", need: "Directional + warm options", pick: "iVict Gooseneck B0BLK6RFGH", id: "best-dorm" },
  { situation: "Need to charge phone too", need: "USB charging + lamp", pick: "B08923SXXP", id: "best-usb-charging" },
  { situation: "General study, best value", need: "Most light modes", pick: "Lepro B08LMPCX3D", id: "best-overall" },
  { situation: "Tight budget (< $18)", need: "Reliable basics", pick: "LE Dimmable B00MHLIGCY", id: "best-budget" },
  { situation: "Online classes on camera", need: "Cool white available", pick: "Any pick with 5000K+ mode", id: "best-overall" },
];

export const brightnessGuideRows = [
  { task: "Reading printed text", brightness: "300--500 lux at desk", colorTemp: "4000--5000K" },
  { task: "Laptop / screen work", brightness: "200--400 lux (supplement monitor)", colorTemp: "4000--5000K" },
  { task: "Handwriting notes", brightness: "400--600 lux", colorTemp: "4000--5500K" },
  { task: "Late-night reading", brightness: "150--300 lux (eyes adjusted)", colorTemp: "2700--3000K" },
  { task: "Video call (camera)", brightness: "300+ lux on your face", colorTemp: "5000--6500K" },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What is the best desk lamp under $30 for studying?",
    answer: "The Lepro (B08LMPCX3D) is the best for general studying -- 800 lumens, 25 light combinations, diffused panel. For small desks where footprint matters, the iVict clamp (B0C462K8S4) is the better practical choice.",
  },
  {
    question: "What desk lamp is best for a dorm room?",
    answer: "The iVict Gooseneck Clamp (B0BLK6RFGH) -- directional beam, warm dimming options, USB-powered, zero desk footprint. It does not spill light across the room when your roommate is sleeping.",
  },
  {
    question: "Do I need a lamp with color temperature options?",
    answer: "For studying, yes. A warm option (2700K--3000K) for evening sessions reduces blue light exposure before sleep. A cool option (5000K+) for active morning studying improves alertness. Single-temperature lamps lock you into one mode regardless of time of day.",
  },
  {
    question: "Are USB-powered desk lamps bright enough?",
    answer: "Yes for most study purposes. The Lepro at 9.5W delivers 800 lumens -- more than adequate for a desk workspace. USB power limits the maximum wattage, but modern LED efficiency means 5--10W USB lamps are genuinely bright.",
  },
  {
    question: "Which desk lamp is best for video calls?",
    answer: "Any lamp with a 5000K--6500K cool/daylight setting placed at eye level or slightly above. The cool-white light makes faces appear cleaner on camera. Warm light (2700K) can make you look orange-toned in video. The Lepro and B08923SXXP both have 5000K+ modes.",
  },
];
