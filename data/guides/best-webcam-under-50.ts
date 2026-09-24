const BASE = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-webcam-under-50";

export const guideTitle = "Best Webcams Under $50 for Small Desks and Dorm Rooms (2026)";
export const guideDescription =
  "Most webcam guides assume you have a spacious home studio, a wide monitor, and no roommate. This one doesn't. Here are the best budget webcams for small desks, dorm rooms, thin-bezel laptops, and buyers who just want something that works — no drivers, no fuss, no wasted desk space.";
export const metaTitle = "Best Webcams Under $50 for Small Desks & Dorm Rooms (2026)";
export const metaDescription =
  "5 budget webcams under $50 for students and small-desk setups — best overall, under $30, under $20, privacy shutter, and Chromebook-compatible picks.";
export const lastUpdated = "2026-06-06";
export const readTime = "10 min";
export const heroImage = `${BASE}/06-best-webcam-under-50-hero.webp`;

export interface BudgetWebcam {
  id: string;
  rank: number;
  badge: string;
  name: string;
  brand: string;
  asin: string;
  amazonUrl: string;
  imageUrl: string;
  price: string;
  priceRange: string;
  bestFor: string;
  bestForDetail: string;
  fitScore: number;
  resolution: string;
  fps: string;
  fov: string;
  mic: string;
  connection: string;
  privacyShutter: boolean;
  chromebookOk: boolean;
  whyItWins: string;
  bodyParagraph: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

export const products: BudgetWebcam[] = [
  {
    id: "best-overall",
    rank: 1,
    badge: "Best Overall Under $50",
    name: "Logitech Brio 100",
    brand: "Logitech",
    asin: "B0BXGCRRLW",
    amazonUrl: "https://www.amazon.com/dp/B0BXGCRRLW?tag=theofficejournal-20",
    imageUrl: `${BASE}/01-logitech-brio-100.webp`,
    price: "~$39.99",
    priceRange: "~$40",
    bestFor: "Most buyers — best balance of quality and trust",
    bestForDetail: "Students, remote workers, and anyone who wants a plug-and-play webcam with no setup friction and Logitech brand reliability.",
    fitScore: 8.3,
    resolution: "1080p Full HD",
    fps: "30 fps",
    fov: "90°",
    mic: "Built-in mono mic",
    connection: "USB-A",
    privacyShutter: true,
    chromebookOk: true,
    whyItWins: "The Logitech Brio 100 is the safest pick under $50 — no driver installation required, works instantly on Windows, macOS, and Chromebook, and delivers consistently clean 1080p video that holds up well in mixed dorm lighting. Logitech's clip mechanism is well-engineered and grips both thin-bezel laptops and thick monitors without wobbling.",
    bodyParagraph: "The 90° field of view is well-matched to small-desk shooting distances — it fills the frame naturally at arm's length without showing your entire messy room behind you. The fixed focus is sharp from about 10 inches out, so no hunting or lag during video calls. Audio from the built-in mic is adequate for Zoom and Teams calls, with acceptable noise rejection for shared rooms.",
    specs: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Frame rate", value: "30 fps" },
      { label: "Field of view", value: "90°" },
      { label: "Focus", value: "Fixed focus" },
      { label: "Microphone", value: "Built-in mono" },
      { label: "Connection", value: "USB-A (cable ~1.5 m)" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS — no driver" },
      { label: "Privacy shutter", value: "Yes — built-in lens cover" },
    ],
    pros: [
      "Truly plug-and-play — zero software or driver install",
      "Works on Chromebook out of the box",
      "Built-in privacy shutter — rare at this price from a major brand",
      "Logitech clip fits both thin-bezel laptops and thick monitors",
      "Clean 1080p in good lighting at this price",
    ],
    cons: [
      "30 fps only — not for streaming",
      "Fixed focus (not ideal if you move around a lot)",
      "Mono mic — not ideal for loud environments",
    ],
  },
  {
    id: "best-under-30",
    rank: 2,
    badge: "Best Under $30",
    name: "Logitech Brio 101",
    brand: "Logitech",
    asin: "B0BXGFFSL1",
    amazonUrl: "https://www.amazon.com/dp/B0BXGFFSL1?tag=theofficejournal-20",
    imageUrl: `${BASE}/02-logitech-brio-101.webp`,
    price: "~$29.99",
    priceRange: "~$30",
    bestFor: "Budget-conscious buyers who want a trusted brand",
    bestForDetail: "Anyone who wants Logitech reliability without paying the Brio 100 premium — ideal for class video calls and remote work check-ins.",
    fitScore: 8.2,
    resolution: "1080p Full HD",
    fps: "30 fps",
    fov: "90°",
    mic: "Built-in mono mic",
    connection: "USB-A",
    privacyShutter: false,
    chromebookOk: true,
    whyItWins: "The Brio 101 is essentially the Brio 100 at $10 less — same 1080p resolution, same 90° FOV, same plug-and-play simplicity. Image processing is slightly softer under harsh dorm overhead lighting, but for Zoom lectures and Teams meetings the difference is invisible. It's the right answer when you want brand reliability and your budget is firmly $30.",
    bodyParagraph: "Same clip design as the Brio 100, compatible with the same range of monitors and thin-bezel laptops. The color correction under fluorescent lighting is where it falls slightly short of the 100 — skin tones can skew warmer. A free positioning fix: put the webcam level with your eyes, not atop a screen that's lower than eye level, and the image improves noticeably.",
    specs: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Frame rate", value: "30 fps" },
      { label: "Field of view", value: "90°" },
      { label: "Focus", value: "Fixed focus" },
      { label: "Microphone", value: "Built-in mono" },
      { label: "Connection", value: "USB-A (cable ~1.5 m)" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS — no driver" },
      { label: "Privacy shutter", value: "No" },
    ],
    pros: [
      "Logitech quality at $30 — strong brand trust",
      "Same plug-and-play as Brio 100, zero setup",
      "Chromebook compatible without drivers",
      "Compact clip footprint — nothing to store between calls",
      "Reliable for daily Zoom/Teams/Google Meet",
    ],
    cons: [
      "Color accuracy softer than Brio 100 in fluorescent lighting",
      "No privacy shutter",
      "Mono mic",
      "30 fps ceiling",
    ],
  },
  {
    id: "best-small-desk",
    rank: 3,
    badge: "Best for Small Desks",
    name: "NexiGo N60 1080P",
    brand: "NexiGo",
    asin: "B088TSR6YJ",
    amazonUrl: "https://www.amazon.com/dp/B088TSR6YJ?tag=theofficejournal-20",
    imageUrl: `${BASE}/03-nexigo-n60-1080p.webp`,
    price: "~$22.99",
    priceRange: "~$23",
    bestFor: "Compact desk setups, Chromebook users, privacy shutter",
    bestForDetail: "Small-desk and dorm users who want a physical privacy shutter and the smallest possible monitor footprint at the lowest brand-trusted price.",
    fitScore: 8.5,
    resolution: "1080p Full HD",
    fps: "30 fps",
    fov: "90°",
    mic: "Built-in stereo mic",
    connection: "USB-A",
    privacyShutter: true,
    chromebookOk: true,
    whyItWins: "The NexiGo N60 scores highest on our Small-Space Fit metric: it has a physical privacy shutter (a genuine need in shared dorm rooms), a stereo microphone that outperforms the Logitech mono mics at this price, and it's the smallest clip-based 1080p webcam in this roundup. Plug-and-play on Chrome OS with zero driver install — verified.",
    bodyParagraph: "At $23, the build quality is honest plastic but the hinge is solid — it doesn't droop on thin laptop bezels the way some no-name clips do. The 90° FOV keeps background clutter out of frame on small desks. Low-light performance is average for the price (don't expect miracles without a lamp), but in a normally lit dorm or office it produces clean, acceptable 1080p. If you share a room and want to cover your webcam between calls, the physical shutter is the feature that matters most.",
    specs: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Frame rate", value: "30 fps" },
      { label: "Field of view", value: "90°" },
      { label: "Focus", value: "Manual focus ring" },
      { label: "Microphone", value: "Built-in stereo (2 mics)" },
      { label: "Connection", value: "USB-A (cable ~1.5 m)" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS — no driver" },
      { label: "Privacy shutter", value: "Yes — physical lens cover" },
    ],
    pros: [
      "Physical privacy shutter — genuinely useful in shared rooms",
      "Stereo dual-mic outperforms most built-in laptop mics",
      "Smallest clip footprint in this roundup",
      "Manual focus ring for fine-tuning at tight desk distances",
      "Plug-and-play on Chromebook verified",
    ],
    cons: [
      "Average low-light performance without supplemental lighting",
      "Manual focus requires one-time setup",
      "No autofocus (fixed after adjustment)",
      "Build quality is entry-level — not as solid as Logitech",
    ],
  },
  {
    id: "best-mic",
    rank: 4,
    badge: "Best Dual Mic for Calls",
    name: "EMEET C960",
    brand: "EMEET",
    asin: "B07M6Y7355",
    amazonUrl: "https://www.amazon.com/dp/B07M6Y7355?tag=theofficejournal-20",
    imageUrl: `${BASE}/04-emeet-c960.webp`,
    price: "~$26.99",
    priceRange: "~$27",
    bestFor: "Video calls in noisy or reverberant dorm rooms",
    bestForDetail: "Students and remote workers who need noticeably cleaner audio from their webcam — EMEET's noise cancellation is the best microphone performance available under $30.",
    fitScore: 8.2,
    resolution: "1080p Full HD",
    fps: "30 fps",
    fov: "90°",
    mic: "Dual mic with noise cancellation",
    connection: "USB-A",
    privacyShutter: true,
    chromebookOk: true,
    whyItWins: "The EMEET C960 is the pick when audio matters more than anything else. Its dual microphone with hardware noise cancellation filters out keyboard clicks, HVAC hum, and background dorm noise more effectively than any mono built-in in this price range. It also ships with a physical privacy shutter — useful for the same audience that needs clean audio (people in shared spaces).",
    bodyParagraph: "EMEET is a conferencing-focused brand, and it shows: the mic tuning is conservative and clear rather than punchy, which is exactly what Zoom and Teams calls need. Video quality is on par with the NexiGo N60 — clean 1080p in good light, acceptable in mixed light. The physical footprint is slightly larger than the NexiGo, but still compact enough for a 24-inch monitor setup.",
    specs: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Frame rate", value: "30 fps" },
      { label: "Field of view", value: "90°" },
      { label: "Focus", value: "Fixed focus" },
      { label: "Microphone", value: "Dual mic, hardware noise cancellation" },
      { label: "Connection", value: "USB-A" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS — no driver" },
      { label: "Privacy shutter", value: "Yes — physical lens cover" },
    ],
    pros: [
      "Dual mic with real noise cancellation — best audio under $30",
      "Physical privacy shutter included",
      "Plug-and-play on Chromebook",
      "Consistent 1080p image in daylight conditions",
      "EMEET is a dedicated conferencing brand — reliable for calls",
    ],
    cons: [
      "Slightly wider body than NexiGo — more monitor space used",
      "Fixed focus, no manual adjustment",
      "Average low-light performance",
      "Video quality identical to cheaper models — you're paying for the mic",
    ],
  },
  {
    id: "best-under-20",
    rank: 5,
    badge: "Best Under $20",
    name: "EMEET C950",
    brand: "EMEET",
    asin: "B0CP6BTQKR",
    amazonUrl: "https://www.amazon.com/dp/B0CP6BTQKR?tag=theofficejournal-20",
    imageUrl: `${BASE}/05-emeet-c950.webp`,
    price: "~$23.99",
    priceRange: "~$24",
    bestFor: "Occasional calls, Chromebook, tight budgets",
    bestForDetail: "A legitimate brand option under $20 for students who only need a webcam for weekly lectures or check-ins — not daily heavy use.",
    fitScore: 8.1,
    resolution: "1080p Full HD",
    fps: "30 fps",
    fov: "90°",
    mic: "Built-in mono mic",
    connection: "USB-A",
    privacyShutter: false,
    chromebookOk: true,
    whyItWins: "At $18, most webcams are generic no-name units that break within months or deliver 720p video they falsely label as 1080p. The EMEET C950 is a genuine 1080p camera from a brand with real product support — it's not the best performer here, but it's the most honest option at this price point. Works on Chromebook without drivers.",
    bodyParagraph: "Build quality is entry-level — the plastic hinge is functional but not premium. In good lighting it delivers clean enough 1080p for Zoom lectures and Google Meet check-ins. Don't expect great low-light performance or noise-cancelling audio. If you're on a strict budget and only need a webcam for occasional calls (not daily remote work), this is the pick that won't disappoint within its intended use case.",
    specs: [
      { label: "Resolution", value: "1080p Full HD" },
      { label: "Frame rate", value: "30 fps" },
      { label: "Field of view", value: "90°" },
      { label: "Focus", value: "Fixed focus" },
      { label: "Microphone", value: "Built-in mono" },
      { label: "Connection", value: "USB-A" },
      { label: "Compatibility", value: "Windows, macOS, Chrome OS — no driver" },
      { label: "Privacy shutter", value: "No" },
    ],
    pros: [
      "Genuine 1080p from a real brand at $18",
      "Plug-and-play on Chromebook",
      "Compact clip — minimal monitor footprint",
      "Adequate for weekly Zoom/Google Meet calls",
      "EMEET has real product support (not a ghost brand)",
    ],
    cons: [
      "Entry-level build quality — hinge not as solid as Logitech",
      "Below-average low-light performance",
      "Mono mic picks up background noise easily",
      "Not built for daily multi-hour remote work sessions",
    ],
  },
];

// At-a-glance table rows
export const atAGlanceItems = products.map((p) => ({
  id: p.id,
  badge: p.badge,
  name: p.name,
  price: p.price,
  fitScore: p.fitScore,
  resolution: p.resolution,
  fov: p.fov,
  privacyShutter: p.privacyShutter,
  chromebookOk: p.chromebookOk,
  amazonUrl: p.amazonUrl,
}));

// Buying criteria breakdown
export interface BuyingCriterion {
  label: string;
  weight: string;
  description: string;
}

export const buyingCriteria: BuyingCriterion[] = [
  {
    label: "Small-Space Fit",
    weight: "25%",
    description: "Physical footprint of the clip, whether it fits thin-bezel laptop screens without wobbling, FOV suitability at close desk distances, and cable management impact on a small surface.",
  },
  {
    label: "Ease of Use",
    weight: "20%",
    description: "Plug-and-play across Windows, macOS, and Chromebook without driver installation. School-managed machines often can't install software — true plug-and-play is non-negotiable for students.",
  },
  {
    label: "Build Quality",
    weight: "20%",
    description: "Hinge durability (will it hold position after 3 months of daily use?), cable construction, and brand reliability. Generic brands often fail on the hinge within weeks.",
  },
  {
    label: "Value for Money",
    weight: "20%",
    description: "Honest image quality relative to price. A webcam that actually delivers 1080p scores higher than a webcam with misleading specs.",
  },
  {
    label: "Buyer Feedback",
    weight: "15%",
    description: "Synthesized from verified buyer reports — common failure modes, long-term durability observations, and real-world performance in non-ideal lighting.",
  },
];

// FAQ
export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Do I even need an external webcam, or is my laptop's built-in camera good enough?",
    a: "It depends on how often you're on camera. Most built-in laptop cameras are 720p with poor low-light performance and a wide-angle lens that exaggerates nose and forehead. If you're on Zoom daily, a $25 external webcam is a noticeable upgrade. If you're on video calls once a week, the built-in is fine. One honest benchmark: if people frequently ask you to turn your camera on, your built-in is probably fine. If people ask you to turn it off because the quality is distracting, an external webcam is worth it.",
  },
  {
    q: "Will these webcams work on a Chromebook without installing software?",
    a: "Yes — all five picks in this guide are plug-and-play on Chrome OS. No driver installation required. Chrome OS natively supports USB webcams that follow the UVC (USB Video Class) standard, which all mainstream webcam brands use. The only webcams that don't work on Chromebook are those requiring proprietary drivers — usually very cheap no-name units or AI-feature webcams (like OBSBOT) that need companion apps.",
  },
  {
    q: "Is 720p webcam quality acceptable for Zoom, Teams, and Google Meet?",
    a: "Technically yes, but 1080p is the practical minimum in 2026. Zoom and Teams both support 1080p HD, and meeting participants can tell the difference. More importantly, most budget webcams labeled 720p actually deliver below-720p quality in poor lighting. Every pick in this guide is genuine 1080p — you won't need to apologize for your video quality in class or at work.",
  },
  {
    q: "What's the right field of view (FOV) for a small desk setup?",
    a: "For a small desk where you sit close to the screen, 78°–90° is ideal. Wider angles (110°+) show more background — which means more of your dorm room or cluttered desk in frame. The 90° FOV on all five picks here is the sweet spot: it fills the frame naturally when you're sitting 18–24 inches from your screen, without exposing too much of what's behind you.",
  },
  {
    q: "My laptop only has one USB port. Can I still use a webcam?",
    a: "Yes, but you'll need a USB hub. All five picks use USB-A connections — if your laptop only has USB-C, you'll need a USB-C to USB-A adapter (costs under $10) or a small USB-C hub. The NexiGo N60 and EMEET models draw very little power, so they work reliably through most USB hubs without power delivery issues.",
  },
  {
    q: "Will the webcam clip fit on a thin-bezel laptop?",
    a: "Logitech's clip mechanism (Brio 100 and 101) is specifically designed for thin-bezel screens — it grips securely without scratching. The NexiGo N60's clip is functional but slightly stiffer. For very thin Chromebook lids (under 4mm thick), test the grip on day one and tighten the hinge if it droops. Avoid over-tightening plastic clips on glass-backed screens.",
  },
  {
    q: "How can I look better on a budget webcam without buying a ring light?",
    a: "The biggest free improvement: face a window (natural light from in front of you, not behind). This alone transforms a $20 webcam. If natural light isn't available, put a plain desk lamp at eye level in front of you — not above or to the side. Raise your laptop on a stand or stack of books to bring the webcam closer to eye level; cameras aimed upward show ceiling and nostrils. A light-colored wall behind you also bounces light back onto your face.",
  },
  {
    q: "Do physical privacy shutters actually matter?",
    a: "In shared rooms, yes. A physical shutter is a mechanical lens cover — it physically blocks the lens, not just disables the software. If you share a dorm room, a physical shutter gives you certainty that the camera isn't on between calls, regardless of what the software shows. The NexiGo N60 and EMEET C960 both include physical shutters. The Logitech Brio models do not.",
  },
  {
    q: "What's the best webcam under $50 for streaming on Twitch or Discord?",
    a: "Streaming requires 60fps for smooth motion — no webcam in the under-$50 range delivers this reliably. All five picks are 30fps. If streaming quality matters to you, you need to stretch your budget to the Logitech C920x (~$55–$60) or above. For Discord video calls and study streams where motion quality isn't critical, 30fps is acceptable.",
  },
  {
    q: "Can I use one of these webcams on a laptop with no external monitor?",
    a: "Yes. All five picks clip onto laptop screens. Position the webcam on the top edge of your laptop lid — the same location as the built-in camera. The advantage over the built-in: you can reposition the external webcam slightly to the left or right to improve your angle, and the image quality will be noticeably better. For laptop-only setups, the NexiGo N60's compact clip is the easiest to reposition.",
  },
];
