const BASE = "/images/media/guides/ergonomic-desk-setup";

export const guideTitle = "Ergonomic Desk Setup: The Correct Way to Position Everything (2026)";
export const guideDescription =
  "Most people adjust their chair to match their desk. That's backwards -- and it's why neck pain, wrist strain, and eye fatigue are so common in home offices. Here is the correct order.";
export const metaTitle = "Ergonomic Desk Setup: Position Everything Correctly (2026)";
export const metaDescription =
  "Learn how to set up an ergonomic desk the right way -- monitor height, chair position, keyboard placement, and the products that help. A research-based guide.";
export const lastUpdated = "May 2026";
export const readTime = "12 min";
export const heroImage = `${BASE}/01-monitor-riser-with-storage-shelf.webp`;

export interface ErgoProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  solves: string;
  price: string;
  priceRange: string;
  score: number;
  imageUrl: string;
  amazonUrl: string;
  pros: string[];
  cons: { text: string; severity: "major" | "minor" }[];
  skipIf: string;
}

export const products: ErgoProduct[] = [
  {
    id: "monitor-riser",
    name: "HUANUO Monitor Stand Riser",
    brand: "HUANUO",
    category: "Monitor Riser",
    solves: "Screen too low -- neck strain",
    price: "$12.99",
    priceRange: "$25–30",
    score: 8.8,
    imageUrl: `${BASE}/01-monitor-riser-with-storage-shelf.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07H4DMLVH?tag=theofficejournal-20",
    pros: [
      "3 adjustable heights (3.9\", 4.7\", 5.5\") -- covers most monitor gaps",
      "Storage space underneath for keyboard, accessories",
      "Vented metal platform -- better airflow for laptops",
      "No tools needed, assembles in minutes",
    ],
    cons: [
      { text: "Fixed height increments -- not infinitely adjustable", severity: "minor" },
      { text: "Plastic feet can slide on very smooth desks", severity: "minor" },
    ],
    skipIf: "You need precise height dialing or frequently change your monitor position -- use a monitor arm instead.",
  },
  {
    id: "monitor-arm",
    name: "VIVO Dual Monitor Desk Mount",
    brand: "VIVO",
    category: "Dual Monitor Arm",
    solves: "Two screens -- no desk space or correct angle",
    price: "$34.99",
    priceRange: "$38–50",
    score: 8.7,
    imageUrl: `${BASE}/02-dual-monitor-articulating-arm.webp`,
    amazonUrl: "https://www.amazon.com/dp/B009S750LA?tag=theofficejournal-20",
    pros: [
      "Infinite height + tilt + depth adjustment for both screens",
      "Clears full desk surface beneath monitors",
      "Handles two monitors independently -- different angles each",
      "C-clamp fits desks up to 3.25\" thick",
    ],
    cons: [
      { text: "Requires desk edge at least 1\" thick to clamp securely", severity: "major" },
      { text: "IKEA LINNMON and thin MDF tops can crack under sustained clamp pressure", severity: "major" },
    ],
    skipIf: "Your desk top is thin MDF or glass -- use a grommet mount or monitor riser instead.",
  },
  {
    id: "laptop-stand",
    name: "Lamicall Adjustable Laptop Stand",
    brand: "Lamicall",
    category: "Foldable Laptop Stand",
    solves: "Laptop screen too low -- neck strain",
    price: "$32.99",
    priceRange: "$25–32",
    score: 9.1,
    imageUrl: `${BASE}/03-foldable-aluminum-laptop-stand.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08M94BTYC?tag=theofficejournal-20",
    pros: [
      "6 height positions -- brings screen to monitor level",
      "Folds flat in seconds, portable and lightweight",
      "Open vented design improves laptop thermals",
      "Rubber grips prevent sliding on desk and laptop",
    ],
    cons: [
      { text: "Requires separate external keyboard and mouse to be usable", severity: "minor" },
      { text: "Lightweight frame can shift slightly when adjusting laptop lid", severity: "minor" },
    ],
    skipIf: "You use a docking station with an external monitor -- raising the laptop screen adds no ergonomic value if it's not your main display.",
  },
  {
    id: "footrest",
    name: "ComfiLife Memory Foam Footrest",
    brand: "ComfiLife",
    category: "Memory Foam Footrest",
    solves: "Feet dangling -- lower back chain reaction",
    price: "$39.99",
    priceRange: "$30–40",
    score: 9.0,
    imageUrl: `${BASE}/04-memory-foam-footrest.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08DHMMBFF?tag=theofficejournal-20",
    pros: [
      "Corrects dangling feet at any fixed-height desk",
      "Adjustable angle (15° to 30°) for different height gaps",
      "Non-slip bottom stays in position during the day",
      "Slides under desk when not in use",
    ],
    cons: [
      { text: "Takes up floor space in tight rooms", severity: "minor" },
      { text: "Memory foam compresses 10--20% after 12--18 months of daily use", severity: "minor" },
    ],
    skipIf: "You already use a height-adjustable standing desk with a chair that sets independently correct positioning.",
  },
  {
    id: "desk-mat",
    name: "Nordik Felt + Leather Desk Mat",
    brand: "Nordik",
    category: "Desk Mat 35x17\"",
    solves: "Keyboard and mouse out of position -- wrist strain",
    price: "$39.97",
    priceRange: "$40–55",
    score: 9.1,
    imageUrl: `${BASE}/05-desk-mat-35x17.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CQBWJK61?tag=theofficejournal-20",
    pros: [
      "Physically defines the keyboard + mouse zone -- enforces correct side-by-side positioning",
      "Felt surface cushions wrists during rest between typing",
      "35\" length covers keyboard and mouse in one surface",
      "Non-slip base keeps layout stable",
    ],
    cons: [
      { text: "Felt surface absorbs stains -- not suitable for eating at desk", severity: "minor" },
      { text: "Premium price for a mat", severity: "minor" },
    ],
    skipIf: "You use a keyboard tray mounted below the desk -- the mat's positioning benefit is already handled by the tray.",
  },
  {
    id: "monitor-light-bar",
    name: "Quntis Monitor Light Bar",
    brand: "Quntis",
    category: "Monitor Light Bar",
    solves: "Eye strain from screen glare and uneven desk lighting",
    price: "$39.95",
    priceRange: "$35–45",
    score: 9.0,
    imageUrl: `${BASE}/06-monitor-light-bar.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08DKQ3JG1?tag=theofficejournal-20",
    pros: [
      "Asymmetric lens lights the desk without reflecting on the screen",
      "Zero desk footprint -- clips directly on monitor top",
      "USB-A powered from monitor -- no extra cables",
      "Touch control for brightness and color temperature",
    ],
    cons: [
      { text: "Requires flat monitor top -- does not fit curved monitors", severity: "major" },
      { text: "USB-A only -- no USB-C or direct outlet option", severity: "minor" },
    ],
    skipIf: "You use a curved monitor or your monitor is under 17 inches -- the clip may not seat correctly.",
  },
  {
    id: "desk-lamp",
    name: "BenQ e-Reading Desk Lamp",
    brand: "BenQ",
    category: "Wide-Angle Desk Lamp",
    solves: "Insufficient ambient lighting -- eye strain from contrast",
    price: "$100",
    priceRange: "$100–115",
    score: 9.3,
    imageUrl: `${BASE}/07-wide-angle-desk-lamp-auto-dimming.webp`,
    amazonUrl: "https://www.amazon.com/dp/B06Y1VF9GV?tag=theofficejournal-20",
    pros: [
      "Built-in ambient light sensor auto-dims to match room brightness",
      "35\" wide beam covers full desk without hot spots",
      "CRI 95 -- accurate color rendering, less eye fatigue",
      "Dual smart modes: reading mode and relax mode",
    ],
    cons: [
      { text: "Premium price -- highest cost item in the setup", severity: "minor" },
      { text: "Base footprint is 6x6\" -- takes desk space unlike a clamp lamp", severity: "minor" },
    ],
    skipIf: "Your desk already has adequate ambient lighting or you primarily use a monitor light bar -- the BenQ adds value mainly when the room itself is poorly lit.",
  },
];

export const atAGlanceItems = products.map((p) => ({
  rank: products.indexOf(p) + 1,
  badge: p.category,
  name: p.name,
  brand: p.brand,
  imageUrl: p.imageUrl,
  affiliateUrl: p.amazonUrl,
  price: p.price,
  anchorId: p.id,
  pros: p.pros.slice(0, 3).map((text) => ({ text })),
  cons: [{ text: p.skipIf.split("--")[0].trim(), severity: "minor" as const }],
}));

export const auditChecklist = [
  { label: "Top of monitor at or below eye level?", fix: "Raise with a monitor riser or arm" },
  { label: "Elbows at ~90° when typing?", fix: "Adjust chair height first, then desk accessories" },
  { label: "Feet flat on floor (or a footrest)?", fix: "Add a footrest if feet dangle" },
  { label: "Screen 20–28 inches from your eyes?", fix: "Move monitor back or use a riser to push it further" },
  { label: "Wrists neutral -- not bent up or down when typing?", fix: "Lower keyboard or use a wrist rest when resting" },
];

export const diagramRows = [
  { position: "Monitor height", correct: "Top of screen at eye level or 1–2 inches below" },
  { position: "Monitor distance", correct: "20–28 inches (arm's length from seated position)" },
  { position: "Chair height", correct: "Elbows at 90°, thighs parallel to floor" },
  { position: "Keyboard height", correct: "Wrists neutral, elbows at 90–110° (slightly open)" },
  { position: "Mouse position", correct: "Same surface level as keyboard, close to the body" },
  { position: "Feet", correct: "Flat on floor or footrest -- no dangling" },
  { position: "Back", correct: "Lumbar supported, slight recline 100–110°" },
  { position: "Neck", correct: "Neutral, not forward-leaning -- head over shoulders" },
];

export const budgetTiers = [
  {
    label: "Under $60",
    products: ["Laptop Stand ($30)", "Footrest ($33)"],
    note: "Solves the two most common ergonomic problems: screen too low and feet dangling.",
  },
  {
    label: "Under $120",
    products: ["+ Monitor Riser ($26)", "+ Monitor Light Bar ($35)"],
    note: "Adds correct monitor height and removes screen glare from your setup.",
  },
  {
    label: "Full setup",
    products: ["+ Desk Mat ($42)", "+ BenQ Desk Lamp ($100)"],
    note: "Complete ergonomic baseline: positioning, lighting, and keyboard zone all addressed.",
  },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What is the correct ergonomic desk setup?",
    answer:
      "The correct setup follows five positions: (1) monitor top at eye level, (2) screen 20--28 inches away, (3) chair adjusted so elbows are at 90° with thighs parallel to the floor, (4) keyboard and mouse at elbow height with wrists neutral, and (5) feet flat on the floor or a footrest. The most common mistake is adjusting the chair to match the desk instead of the other way around.",
  },
  {
    question: "How high should my monitor be for ergonomics?",
    answer:
      "The top of your screen should be at or slightly below eye level -- about 1 to 2 inches below. Your eyes naturally rest looking slightly downward (around 15°), so placing the screen top exactly at eye level is correct. To measure: sit in your normal working position, look straight ahead, and note where your eye line hits the monitor. If it lands below the top third, the monitor needs to go up.",
  },
  {
    question: "Can I have an ergonomic setup without an ergonomic chair?",
    answer:
      "Yes. A dedicated ergonomic chair helps but is not the first priority. A memory foam footrest ($30--40) fixes the most common seated posture issue -- dangling feet. A lumbar cushion ($20--30) supports the lower back on a flat chair. Combined with a correctly positioned monitor, these two additions address roughly 80% of the ergonomic problems caused by poor seating.",
  },
  {
    question: "What is the best ergonomic desk setup for a small desk?",
    answer:
      "For small desks, prioritize: (1) a foldable laptop stand or monitor riser with storage to gain height without bulk, (2) a footrest that slides under the desk, and (3) a monitor light bar instead of a base lamp to eliminate desk footprint. A laptop stand plus external keyboard is the most space-efficient ergonomic combo for narrow desks.",
  },
  {
    question: "How do I set up an ergonomic desk with two monitors?",
    answer:
      "Place the primary monitor directly in front of you at eye level. Position the secondary monitor 30° to the side so you turn your head slightly -- not your whole body. If you use both monitors equally throughout the day, center them and meet them at the midpoint of your natural gaze. Avoid placing both monitors directly ahead side by side, which forces constant lateral neck movement.",
  },
  {
    question: "Can a bad desk setup cause carpal tunnel syndrome?",
    answer:
      "A bad setup does not directly cause carpal tunnel syndrome, but sustained wrist extension -- wrists bent upward while typing -- is a recognized risk factor. If your keyboard sits on top of a high desk and you type with bent wrists for several hours daily, that sustained pressure on the median nerve contributes to cumulative strain over months and years. Keeping wrists neutral while typing and using a wrist rest only during breaks (not while actively typing) significantly reduces that risk.",
  },
];
