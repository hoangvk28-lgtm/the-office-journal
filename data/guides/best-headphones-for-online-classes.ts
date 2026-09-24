const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-headphones-for-online-classes";

export const guideTitle = "Top 6 Best Headphones for Online Classes: Clear Audio, Decent Mic, All-Day Comfort";
export const guideDescription =
  "Online classes have specific audio needs that general headphone reviews consistently miss. You need lecture clarity, a mic that works on Zoom, and comfort for multi-hour sessions -- the three things most reviews do not treat as priorities.";
export const metaTitle = "Best Headphones for Online Classes (2026)";
export const metaDescription =
  "6 headphones for online classes -- mic quality, ANC for dorms, comfort for long sessions, wired vs wireless, and Zoom/Chromebook compatibility.";
export const lastUpdated = "2026-06-04";
export const readTime = "11 min";
export const heroImage = `${BASE}/07-hero-best-headphones-for-online-classes.webp`;

export interface ClassHeadphone {
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

export const products: ClassHeadphone[] = [
  {
    id: "best-overall",
    rank: 1,
    badge: "Best Overall",
    name: "Sony WH-CH520 Wireless",
    brand: "Sony",
    bestFor: "Most students, any class type",
    price: "~$40-60",
    priceRange: "~$40--60",
    imageUrl: `${BASE}/01-best-overall-sony-wh-ch520-wireless.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BS1PRC4L?tag=theofficejournal-20",
    whyItWins: "The WH-CH520 hits the right combination for most students: lightweight on-ear design (lighter than most wireless headphones), 50-hour battery (charge once a week, not once a day), and a built-in microphone that handles Zoom participation adequately. The USB-C quick charge gives you 90 minutes of battery from a 3-minute charge -- the 'I forgot to charge it' emergency fix.",
    bodyParagraph: "For listening to lectures, the sound is clear and well-balanced without the exaggerated bass of many budget wireless headphones. Professors' voices cut through clearly without manual EQ adjustments. At 147g, significantly lighter than over-ear alternatives -- for 2--3 hour classes, on-ear pressure is less fatiguing.",
    specs: [
      { label: "Type", value: "Wireless on-ear Bluetooth" },
      { label: "Battery", value: "50 hours (+ quick charge: 90 min from 3 min)" },
      { label: "Mic", value: "Built-in, adequate for calls" },
      { label: "Weight", value: "147g" },
      { label: "Connectivity", value: "Bluetooth 5.2 + 3.5mm wired fallback" },
      { label: "Foldable", value: "Yes -- flat fold for bag storage" },
    ],
    pros: ["50-hour battery eliminates charging anxiety", "Lightest pick at 147g", "USB-C quick charge (90 min from 3 min)", "Foldable, Bluetooth 5.2", "Wired fallback via 3.5mm"],
    cons: ["On-ear (not over-ear) -- some find less comfortable over 3+ hours", "Built-in mic not as clear as boom mic"],
    bestForDetail: "Most students -- wireless flexibility, long battery, lightweight, adequate mic for participation.",
  },
  {
    id: "best-wired-mic",
    rank: 2,
    badge: "Best Wired + Best Mic",
    name: "Logitech H390 USB Headset",
    brand: "Logitech",
    bestFor: "Participation-heavy classes, Zoom calls",
    price: "~$25-35",
    priceRange: "~$25--35",
    imageUrl: `${BASE}/02-best-wired-best-mic-logitech-h390-usb-headset.webp`,
    amazonUrl: "https://www.amazon.com/dp/B000UXZQ42?tag=theofficejournal-20",
    whyItWins: "For small seminars, group discussions, language classes, or any class where you are frequently unmuted and speaking -- the dedicated noise-canceling boom mic on the H390 produces noticeably clearer voice than any built-in headphone mic in this price range. Proximity to the mouth is the reason: the boom positions 5--7cm from your lips, capturing voice directly rather than from 15--20cm away.",
    bodyParagraph: "The USB connection works on virtually all modern laptops and Chromebooks. No Bluetooth pairing, no battery -- plug in and use immediately. In-line controls (volume, mute) sit on the cable for quick access without reaching for your keyboard during class.",
    specs: [
      { label: "Type", value: "Wired USB headset with boom mic" },
      { label: "Mic", value: "Noise-canceling adjustable boom" },
      { label: "Connectivity", value: "USB-A (Chromebook certified, PC, Mac via USB)" },
      { label: "In-line controls", value: "Volume wheel + mute button" },
      { label: "Weight", value: "~165g" },
      { label: "Cable length", value: "~2.3m" },
    ],
    pros: ["Best mic clarity in this roundup (boom proximity)", "No charging ever -- plug and use", "In-line mute for quick silencing during class", "Chromebook certified, works everywhere", "Lowest-cost pick with serious mic quality"],
    cons: ["Wired only", "USB-A may need adapter on newer MacBooks", "Less comfortable for casual listening vs dedicated headphones"],
    bestForDetail: "Participation-heavy classes, language learning, group seminars, or anyone who frequently speaks on camera.",
  },
  {
    id: "best-anc",
    rank: 3,
    badge: "Best ANC (Noisy Dorm)",
    name: "Soundcore Anker Q20i",
    brand: "Soundcore / Anker",
    bestFor: "Shared rooms, loud environments",
    price: "~$35-50",
    priceRange: "~$35--50",
    imageUrl: `${BASE}/03-best-anc-soundcore-anker-q20i.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0C3HCD34R?tag=theofficejournal-20",
    whyItWins: "Active Noise Cancellation (ANC) is not just about music immersion -- for online classes in noisy environments, ANC blocks background before it reaches your ears: roommate on the phone, hallway noise, HVAC hum. The Q20i delivers hybrid ANC (feedforward + feedback mics) at a price where most competitors offer only basic noise isolation.",
    bodyParagraph: "The 40-hour ANC battery is generous -- most ANC headphones sacrifice battery for noise cancellation. Transparency mode lets you hear someone knock on your door or a professor make an announcement without removing the headphones.",
    specs: [
      { label: "Type", value: "Wireless over-ear with ANC" },
      { label: "ANC", value: "Hybrid (feedforward + feedback)" },
      { label: "Battery", value: "40 hours with ANC on (60 hours without)" },
      { label: "Transparency mode", value: "Yes" },
      { label: "Mic", value: "Built-in for calls" },
      { label: "Bluetooth", value: "5.0" },
    ],
    pros: ["Hybrid ANC blocks real dorm/shared-room noise", "40h ANC battery -- best value in this price range", "Transparency mode for quick awareness", "Over-ear comfort for long sessions", "Affordable ANC"],
    cons: ["Heavier than Sony CH520 (300g+)", "Built-in mic adequate but not exceptional", "No USB-C (micro-USB charging)"],
    bestForDetail: "Dorm rooms, shared apartments, library study pods, or any noisy environment where background noise affects lecture focus.",
  },
  {
    id: "best-budget",
    rank: 4,
    badge: "Best Budget Under $35",
    name: "JLab Studio Wireless",
    brand: "JLab",
    bestFor: "Tight budget, casual classes",
    price: "~$25-35",
    priceRange: "~$25--35",
    imageUrl: `${BASE}/04-best-budget-under-35-jlab-studio-wireless.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07R4BXTPS?tag=theofficejournal-20",
    whyItWins: "Under $35, most wireless headphone options involve either poor sound or uncomfortable build. The JLab Studio Wireless avoids both. It folds flat for bag storage, works 30+ hours on a charge, and handles Zoom participation adequately with its built-in mic.",
    bodyParagraph: "At this price point, expectations should be calibrated accordingly: no ANC, basic mic, basic sound. But for students who mostly listen to recorded lectures and attend occasional online sessions, this covers the requirements at the lowest cost.",
    specs: [
      { label: "Type", value: "Wireless on-ear Bluetooth" },
      { label: "Battery", value: "30+ hours" },
      { label: "Mic", value: "Built-in basic" },
      { label: "Foldable", value: "Yes -- compact for backpack" },
      { label: "Bluetooth", value: "5.0" },
    ],
    pros: ["Lowest-cost wireless pick", "Foldable for backpack", "30h battery", "Adequate for casual class use"],
    cons: ["No ANC", "Basic mic -- not ideal for heavy participation", "On-ear cushions less plush than Studio Pro"],
    bestForDetail: "Budget-first buyers who attend mostly lecture-style classes with minimal speaking.",
  },
  {
    id: "best-long-classes",
    rank: 5,
    badge: "Best for Long Classes",
    name: "JLab Studio Pro Wireless",
    brand: "JLab",
    bestFor: "3+ hour sessions, cloud foam cushions",
    price: "~$30-50",
    priceRange: "~$30--50",
    imageUrl: `${BASE}/05-best-for-long-classes-jlab-studio-pro-wireless.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08LMJS1TR?tag=theofficejournal-20",
    whyItWins: "The specific gap the JLab Studio Pro fills is comfort over long sessions. The cloud foam + faux leather ear cushions are noticeably softer than the standard foam used on most budget headphones, including the base JLab Studio. For a 3-hour lecture block or a study session that runs into the evening, this difference is felt literally.",
    bodyParagraph: "50-hour battery makes it one of the longest-running wireless headphones at this price. EQ3 sound lets you adjust between signature, bass boost, and balanced -- useful when switching between lecture audio and music during breaks.",
    specs: [
      { label: "Type", value: "Wireless over-ear Bluetooth" },
      { label: "Battery", value: "50+ hours" },
      { label: "Cushions", value: "Cloud foam + faux leather -- softer than competitors" },
      { label: "Mic", value: "Built-in with call controls" },
      { label: "EQ", value: "3 presets (EQ3)" },
      { label: "Foldable", value: "Yes" },
    ],
    pros: ["Most comfortable cushions in this roundup", "50h battery", "EQ3 presets for lecture vs music", "Foldable", "Over-ear design better for 3+ hour sessions"],
    cons: ["Slightly heavier than Sony CH520", "No ANC", "Built-in mic adequate but not exceptional"],
    bestForDetail: "Students with long class or study blocks where cushion comfort directly affects concentration.",
  },
  {
    id: "best-wired-audio",
    rank: 6,
    badge: "Best Wired No Charging",
    name: "Audio-Technica ATH-M20x (Wired, Studio-Grade)",
    brand: "Audio-Technica",
    bestFor: "Audio quality first, separate mic",
    price: "~$40-55",
    priceRange: "~$40--55",
    imageUrl: `${BASE}/06-best-wired-no-charging-audio-technica-ath-m20x.webp`,
    amazonUrl: "https://www.amazon.com/dp/B00HVLUR18?tag=theofficejournal-20",
    whyItWins: "If your priority is hearing lectures, music, and audio content with the best possible fidelity in this price range -- and you plan to use your laptop's built-in mic or a separate microphone for speaking -- the ATH-M20x delivers studio monitor-level accuracy at $40--55. No wireless, no built-in mic, no ANC -- just excellent sound.",
    bodyParagraph: "For music production students, audio engineering courses, or anyone who cares primarily about what they hear, this is the right tool. Pair it with a USB microphone for calls. The closed-back design provides good passive isolation from ambient noise.",
    specs: [
      { label: "Type", value: "Wired over-ear (closed-back)" },
      { label: "Driver", value: "40mm" },
      { label: "Frequency response", value: "15Hz--20kHz" },
      { label: "Impedance", value: "47Ω" },
      { label: "Mic", value: "None (use laptop mic or separate USB mic)" },
      { label: "Cable", value: "3m (designed for studio use)" },
    ],
    pros: ["Best audio accuracy in this roundup", "Closed-back passive isolation", "Studio-grade drivers -- accurate sound reproduction", "Durable professional build", "No charging ever"],
    cons: ["No mic -- need separate for class participation", "3m cable is long for desk use", "No wireless option"],
    bestForDetail: "Audio/music students, anyone prioritizing listening quality over mic quality, or those with a separate microphone for calls.",
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

export const headphoneVsHeadsetRows = [
  { feature: "Sound quality", headphone: "Better", headset: "OK" },
  { feature: "Mic quality for calls", headphone: "Adequate", headset: "Better" },
  { feature: "Wireless available", headphone: "Yes", headset: "Usually wired" },
  { feature: "Comfort for 3+ hours", headphone: "Better (lighter)", headset: "Varies" },
  { feature: "Best for", headphone: "Mostly listening (lectures, videos)", headset: "Heavy participation (seminars, group calls)" },
];

export const classByTypeRows = [
  { classType: "Lecture (mostly listen)", need: "Good audio, basic mic", pick: "Sony WH-CH520, JLab Studio Pro", id: "best-overall" },
  { classType: "Seminar / discussion", need: "Clear mic, participation", pick: "Logitech H390", id: "best-wired-mic" },
  { classType: "Noisy dorm / shared room", need: "ANC for focus", pick: "Soundcore Q20i", id: "best-anc" },
  { classType: "3+ hour blocks", need: "Max comfort cushions", pick: "JLab Studio Pro", id: "best-long-classes" },
  { classType: "Budget tight", need: "Wireless, covers basics", pick: "JLab Studio", id: "best-budget" },
  { classType: "Audio/music courses", need: "Best audio accuracy", pick: "ATH-M20x", id: "best-wired-audio" },
  { classType: "Chromebook user", need: "Plug-and-play wired", pick: "Logitech H390", id: "best-wired-mic" },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "What are the best headphones for online classes?",
    answer: "For most students, the Sony WH-CH520 covers the right balance: wireless, 50-hour battery, lightweight, adequate built-in mic. For classes with heavy participation, the Logitech H390 provides better mic clarity via its boom microphone.",
  },
  {
    question: "Do I need noise-canceling headphones for online classes?",
    answer: "Only if you study or attend class in a consistently noisy environment. ANC helps with constant background noise (dorm HVAC, street traffic). For a quiet room, standard headphones are sufficient. ANC handles HVAC and hallway hum well, but will not silence a nearby roommate having a full conversation.",
  },
  {
    question: "Which is better for online classes -- wired or wireless?",
    answer: "Both work. Wired (Logitech H390) is more reliable -- no battery risk, no Bluetooth latency. Wireless (Sony WH-CH520, JLab picks) is more flexible. If battery anxiety is a concern, go wired. If you prefer freedom of movement, go wireless and charge nightly.",
  },
  {
    question: "Can I use gaming headsets for online classes?",
    answer: "Yes, gaming headsets work for classes. Most have boom mics (good for calls) and decent audio. They tend to be heavier and bulkier than the picks in this guide, and the aggressive styling may be visually prominent on video calls. The Logitech H390 covers the mic quality benefit of gaming headsets without the gaming aesthetic.",
  },
  {
    question: "What headphones work best for Zoom classes?",
    answer: "Any headphone with a built-in mic works on Zoom. Use Zoom's 'Suppress background noise' setting (medium or high) in Audio settings to improve built-in mic performance. The Logitech H390 is the most reliable choice for consistent Zoom call quality.",
  },
];
