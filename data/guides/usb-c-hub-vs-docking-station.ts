// ─── Compare: USB-C Hub vs Docking Station ───────────────────────────────────

const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/usb-c-hub-vs-docking-station";

export const compareSlug = "usb-c-hub-vs-docking-station";
export const compareTitle = "USB-C Hub vs Docking Station: Which One Does Your Desk Actually Need?";
export const compareDescription =
  "USB-C hub vs docking station — we compare ports, power delivery, display support, and price with 5 picks, plus a decision flowchart for laptops and WFH setups.";
export const lastUpdated = "2026-06-06";
export const readTime = "12 min";
export const heroImage = `${BASE}/06-usb-c-hub-vs-docking-station-hero.webp`;
export const sapo =
  "If your laptop only has one or two USB-C ports, you've faced this decision: pick up a $30 hub, or invest in a proper docking station? The answer depends entirely on how many screens you run, whether you commute, and how many peripherals you connect daily. This guide breaks down exactly where each option wins — and which one fits your setup.";


// ─── Types ────────────────────────────────────────────────────────────────────

export type CompareCategory = "hub" | "dock";

export interface ComparePick {
  rank: number;
  id: string;
  category: CompareCategory;
  name: string;
  badge?: string;
  score: number;
  price: string;
  ports: string;
  powerDelivery: string;
  amazonUrl: string;
  imageUrl: string;
  whyItWorks: string[];
  tradeoffs: string[];
  redditNote?: string;
}

export interface HeadToHead {
  criterion: string;
  winner: CompareCategory | "tie";
  winnerLabel: string;
  summary: string;
  hubSummary: string;
  dockSummary: string;
}

export interface Scenario {
  title: string;
  pick: CompareCategory;
  pickLabel: string;
  productName: string;
  productId: string;
  price: string;
  detail: string;
  exception?: string;
}

export interface FlowStep {
  question: string;
  yesAnswer: CompareCategory | null;
  yesLabel: string;
  noLabel: string;
  terminal?: boolean;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export const picks: ComparePick[] = [
  {
    rank: 1,
    id: "anker-341-hub",
    category: "hub",
    name: "Anker 341 USB-C Hub (7-in-1)",
    badge: "Best Value Hub",
    score: 9.0,
    price: "$28–$40",
    ports: "4K HDMI, 2× USB-A 3.0, USB-C PD, SD/microSD",
    powerDelivery: "85W pass-through",
    amazonUrl: `https://www.amazon.com/dp/B09GJMRSCY?tag=theofficejournal-20`,
    imageUrl: `${BASE}/01-anker-341-hub-7-in-1.webp`,
    whyItWorks: [
      "7 ports covers most laptop workflows (display + USB + card reader)",
      "4K@30Hz HDMI for crisp monitor output",
      "85W PD keeps your laptop charged while working",
      "Compact bus-powered — no separate power brick needed",
    ],
    tradeoffs: [
      "One HDMI only — no dual-display support",
      "USB-A ports share bandwidth at heavy loads",
      "No Ethernet port",
    ],
    redditNote:
      "Consistently recommended in r/laptops and r/MacBookPro for everyday WFH use. Praised for reliability over years of daily use.",
  },
  {
    rank: 2,
    id: "anker-555-hub",
    category: "hub",
    name: "Anker 555 USB-C Hub (8-in-1)",
    badge: "Best Mid-Range Hub",
    score: 9.2,
    price: "$50–$70",
    ports: "4K HDMI, 2× USB-A 3.0, USB-C PD, Ethernet, SD/microSD",
    powerDelivery: "100W pass-through",
    amazonUrl: `https://www.amazon.com/dp/B087QZVQJX?tag=theofficejournal-20`,
    imageUrl: `${BASE}/02-anker-555-hub-8-in-1.webp`,
    whyItWorks: [
      "Adds Ethernet over the 341 — faster, more stable internet",
      "100W PD handles power-hungry 15-inch MacBooks",
      "Still compact enough for a laptop bag",
      "Well-built aluminum housing runs cool",
    ],
    tradeoffs: [
      "Single HDMI — no dual-monitor setup",
      "More expensive than most 7-in-1 hubs",
    ],
  },
  {
    rank: 3,
    id: "anker-575-dock-13in1",
    category: "dock",
    name: "Anker 575 USB-C Docking Station (13-in-1)",
    badge: "Best Overall Dock",
    score: 9.1,
    price: "$120–$150",
    ports: "2× HDMI 4K, DisplayPort, 3× USB-A, 2× USB-C, Ethernet, SD, Audio",
    powerDelivery: "85W laptop charging",
    amazonUrl: `https://www.amazon.com/dp/B088F7SY6S?tag=theofficejournal-20`,
    imageUrl: `${BASE}/03-anker-575-dock-13-in-1.webp`,
    whyItWorks: [
      "Dual 4K HDMI + DisplayPort for triple-display setups",
      "13 ports — replaces every dongle on your desk",
      "Own power adapter — no bandwidth throttling",
      "Works as a permanent desk hub, just swap the laptop cable",
    ],
    tradeoffs: [
      "Requires a power outlet — not truly portable",
      "$120+ investment vs a $35 hub",
      "Overkill for single-monitor setups",
    ],
  },
  {
    rank: 4,
    id: "anker-575-hub-triple",
    category: "dock",
    name: "Anker 575 USB-C Hub (12-in-1, Triple Display)",
    badge: "Best for Dual Monitors",
    score: 9.0,
    price: "$130–$160",
    ports: "2× HDMI, DisplayPort, 3× USB-A, 2× USB-C, Ethernet, SD/microSD, Audio",
    powerDelivery: "100W pass-through",
    amazonUrl: `https://www.amazon.com/dp/B0BNZ4RY3D?tag=theofficejournal-20`,
    imageUrl: `${BASE}/04-anker-575-hub-12-in-1-triple-display.webp`,
    whyItWorks: [
      "Supports dual 4K@60Hz output — for power users",
      "100W PD covers the most demanding laptops",
      "Compact for a triple-display dock",
      "Anker reliability backing a premium feature set",
    ],
    tradeoffs: [
      "Pricier than the 575 13-in-1 for fewer total ports",
      "Requires compatible Thunderbolt 3/4 or USB4 laptop for full dual-4K",
    ],
  },
  {
    rank: 5,
    id: "anker-travel-hub",
    category: "hub",
    name: "Anker 7-in-1 Travel USB-C Hub",
    score: 8.8,
    price: "$35–$50",
    ports: "4K HDMI, 2× USB-A 3.0, USB-C PD, SD/microSD, USB-C data",
    powerDelivery: "100W pass-through",
    amazonUrl: `https://www.amazon.com/dp/B0BMXR7B2Q?tag=theofficejournal-20`,
    imageUrl: `${BASE}/05-anker-7-in-1-travel-hub.webp`,
    whyItWorks: [
      "Slim profile fits a laptop sleeve or shirt pocket",
      "100W PD for fast charging on the go",
      "Folds away cleanly — no dangling cables",
      "All-metal body survives daily pack/unpack cycles",
    ],
    tradeoffs: [
      "No Ethernet — Wi-Fi only on the road",
      "4K@30Hz only (not 60Hz)",
    ],
  },
];

// ─── Head-to-head criteria ─────────────────────────────────────────────────────

export const headToHead: HeadToHead[] = [
  {
    criterion: "Port Count",
    winner: "dock",
    winnerLabel: "Docking Station wins",
    summary:
      "Hubs top out at 7–8 ports. Docks start at 10 ports and go up to 13+, covering display, USB, Ethernet, SD, audio, and PD simultaneously without sharing bandwidth.",
    hubSummary: "7–8 ports typical. Covers most daily tasks.",
    dockSummary: "10–13 ports. One cable to desk; everything connects at once.",
  },
  {
    criterion: "Display Support",
    winner: "dock",
    winnerLabel: "Docking Station wins",
    summary:
      "Hubs support one external display at 4K@30Hz. Docks support 2–3 displays at 4K@60Hz. For single-monitor users, a hub is enough; dual monitors require a dock.",
    hubSummary: "Single 4K display, usually 30Hz.",
    dockSummary: "Dual or triple 4K@60Hz — depends on model and laptop.",
  },
  {
    criterion: "Portability",
    winner: "hub",
    winnerLabel: "USB-C Hub wins",
    summary:
      "Hubs are bus-powered and pocket-sized — drop them in a bag without thinking. Docks need a power adapter and desktop placement. If you commute, a hub is the only practical choice.",
    hubSummary: "Pocket-sized, bus-powered, carry everywhere.",
    dockSummary: "Desktop appliance — requires a power outlet and a permanent spot.",
  },
  {
    criterion: "Power Delivery",
    winner: "dock",
    winnerLabel: "Docking Station wins",
    summary:
      "Docks deliver true 85–100W via their own power adapter. Hubs share the host laptop's power budget — heavy loads can reduce effective PD to 60–70W.",
    hubSummary: "85–100W pass-through but depends on laptop's USB-C controller.",
    dockSummary: "Full 85–100W from dedicated adapter — no bottlenecks.",
  },
  {
    criterion: "Price",
    winner: "hub",
    winnerLabel: "USB-C Hub wins",
    summary:
      "A capable hub costs $30–$55. A capable dock starts at $100. The price gap is real — justify it only if you need dual displays or a truly permanent desk setup.",
    hubSummary: "Excellent quality from $28. Lower ceiling.",
    dockSummary: "Quality starts at $100. Justifiable for power users.",
  },
  {
    criterion: "Setup Simplicity",
    winner: "hub",
    winnerLabel: "USB-C Hub wins",
    summary:
      "Both are plug-and-play, but hubs have fewer cables and no power adapter to route. Docks require power cable + laptop cable + peripherals — more cable management needed.",
    hubSummary: "One cable from laptop. Minimal desk clutter.",
    dockSummary: "Power brick + laptop cable + peripherals. More cable management.",
  },
];

// ─── Decision flowchart steps ─────────────────────────────────────────────────

export const flowSteps: FlowStep[] = [
  {
    question: "Do you use two or more external monitors?",
    yesAnswer: "dock",
    yesLabel: "Yes, dual or triple monitors",
    noLabel: "No, one monitor",
  },
  {
    question: "Do you carry your laptop between home and office daily?",
    yesAnswer: "hub",
    yesLabel: "Yes, daily commuter",
    noLabel: "No, mostly desk-based",
  },
  {
    question: "Do you need Gigabit Ethernet for video calls or large file transfers?",
    yesAnswer: null,
    yesLabel: "Yes",
    noLabel: "No",
  },
  {
    question: "Is your budget under $60?",
    yesAnswer: "hub",
    yesLabel: "Yes",
    noLabel: "No, $100+ is fine",
  },
  {
    question: "Do you plug in 6+ peripherals at the same time (headset, external SSD, keyboard, mouse, printer...)?",
    yesAnswer: "dock",
    yesLabel: "Yes",
    noLabel: "No, 3–4 peripherals max",
  },
  {
    question: "Do you want a one-cable desk setup — plug in one USB-C and everything connects?",
    yesAnswer: "dock",
    yesLabel: "Yes, one-cable desk",
    noLabel: "No, a few cables is fine",
    terminal: true,
  },
];

// ─── Scenarios ─────────────────────────────────────────────────────────────────

export const scenarios: Scenario[] = [
  {
    title: "Daily Commuter / Hybrid Worker",
    pick: "hub",
    pickLabel: "USB-C Hub",
    productName: "Anker 7-in-1 Travel Hub",
    productId: "anker-travel-hub",
    price: "$35–$50",
    detail:
      "Slim enough for a shirt pocket, 100W PD for all-day charging, and 4K output for a meeting room projector or home monitor. Pack it without thinking.",
  },
  {
    title: "WFH / Single-Monitor Home Office",
    pick: "hub",
    pickLabel: "USB-C Hub",
    productName: "Anker 555 USB-C Hub (8-in-1)",
    productId: "anker-555-hub",
    price: "$50–$70",
    detail:
      "Ethernet for stable video calls, 4K monitor output, and 100W PD — everything a single-monitor WFH setup needs without a power-brick dock.",
  },
  {
    title: "Dual-Monitor Power User",
    pick: "dock",
    pickLabel: "Docking Station",
    productName: "Anker 575 USB-C Docking Station (13-in-1)",
    productId: "anker-575-dock-13in1",
    price: "$120–$150",
    detail:
      "Dual 4K displays, 13 ports, full PD — one cable connects your laptop to the entire desk. The upgrade is justified once you need two screens.",
  },
  {
    title: "Small Desk / Minimal Setup",
    pick: "hub",
    pickLabel: "USB-C Hub",
    productName: "Anker 341 USB-C Hub (7-in-1)",
    productId: "anker-341-hub",
    price: "$28–$40",
    detail:
      "The Anker 341 sits flat under a monitor or clips out of sight. Adds 4K output, USB-A ports, and card reader for $28–$40 without cluttering a compact desk.",
  },
];

// ─── Common mistakes ──────────────────────────────────────────────────────────

export const mistakes = [
  {
    title: "Buying a hub expecting dual-monitor support",
    body: "Most USB-C hubs support one HDMI output only. If you plan to run two monitors, you need a docking station with dual display outputs and a Thunderbolt 3/4 or USB4 laptop. Verify your laptop spec before buying.",
  },
  {
    title: "Ignoring your laptop's USB-C controller",
    body: "Not all USB-C ports are equal. Some carry only data and charging — not video. DisplayPort Alt Mode or Thunderbolt is required for external monitor output. Check your laptop's spec sheet for the ports labeled 'Thunderbolt' or 'DP'.",
  },
  {
    title: "Over-buying a dock for a portable lifestyle",
    body: "A $120 dock requires a power adapter and a fixed desk spot. If you commute daily or work from different locations, a $35–$50 travel hub does 90% of the job and fits in your pocket.",
  },
  {
    title: "Assuming all hubs charge at the rated wattage",
    body: "A hub rated '100W PD' still shares the laptop's USB-C power budget. Under heavy GPU or CPU load, effective charging may drop to 60–70W. For MacBook Pro 16-inch or gaming laptops, verify the hub's active PD delivery with reviews.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is the difference between a USB-C hub and a docking station?",
    a: "A USB-C hub is bus-powered (draws power from your laptop), portable, and handles 4–8 ports. A docking station has its own power adapter, sits permanently on a desk, and handles 10–13+ ports including dual monitor outputs. Hubs are for portability; docks are for permanent desk setups.",
  },
  {
    q: "Can a USB-C hub support dual monitors?",
    a: "Most cannot. Standard USB-C hubs support one external display via HDMI or DisplayPort. Dual-display support requires a docking station (or a USB4/Thunderbolt hub with MST support, which costs dock prices anyway).",
  },
  {
    q: "Is a docking station worth it?",
    a: "Yes, if you have a fixed desk and want one-cable convenience — plug in a single USB-C and your monitor, keyboard, mouse, Ethernet, and audio all connect. The productivity gain is real once you cross 4+ daily peripherals. The $100–$150 cost is a one-time desk upgrade.",
  },
  {
    q: "Will a USB-C hub work with any laptop?",
    a: "With any laptop that has a USB-C port, yes — for data and charging. For video output, your laptop needs a USB-C port that supports DisplayPort Alt Mode or Thunderbolt 3/4. Most MacBooks and recent Windows laptops do; older budget laptops may not.",
  },
  {
    q: "What is the best USB-C hub for MacBook?",
    a: "The Anker 555 (8-in-1) is a top choice for MacBook Air and Pro users — it adds Ethernet, a 4K display, USB-A ports, and 100W PD charging. For MacBook Pro 16-inch, consider a dock if you use dual monitors, since MacBook Pro supports up to three external displays with Thunderbolt.",
  },
  {
    q: "Can I use a USB-C hub with a gaming laptop?",
    a: "Yes for data, charging, and display. However, gaming laptops with high TDP may require 100W+ to charge under gaming load — verify the hub's PD wattage. The Anker 555 or 575 dock handles most gaming laptops at idle to moderate load.",
  },
];

// ─── Summary table ─────────────────────────────────────────────────────────────

export const summaryTable = [
  { factor: "Price", hub: "$28–$70", dock: "$100–$160" },
  { factor: "Portability", hub: "Pocket-sized, bus-powered", dock: "Desktop appliance" },
  { factor: "Display support", hub: "Single 4K (usually 30Hz)", dock: "Dual/triple 4K@60Hz" },
  { factor: "Port count", hub: "7–8 ports", dock: "12–13 ports" },
  { factor: "Power delivery", hub: "85–100W (shared budget)", dock: "85–100W (dedicated adapter)" },
  { factor: "Best for", hub: "Commuters, small desks", dock: "Power users, permanent setups" },
];
