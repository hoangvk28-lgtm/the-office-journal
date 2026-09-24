export const guideSlug = "best-mechanical-keyboards-under-100";
export const guideTitle = "4 Best Mechanical Keyboards Under $100 in 2026";
export const metaTitle = "Best Mechanical Keyboards Under $100";
export const metaDescription = "We compared mechanical keyboards under $100 by battery life, VIA programmability, and switch quality, since full-size wireless boards with big batteries appear.";
export const mainKeyword = "best mechanical keyboards under $100";
export const introParagraphs = [
  "Approaching $100, mechanical keyboards from Keychron and specialty brands add large 4000mAh batteries, VIA-based remapping, and transparent enthusiast-style designs, a genuine step up in features from the sub-$75 tier.",
  "We compared this lineup on battery capacity, remapping method, and switch lubrication quality, since these details determine whether a board genuinely serves daily multi-device use or is simply a pricier variant of a smaller keyboard's feature set."
];
export const lastUpdated = "2026-09-14";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41OIkZ+MM4L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-mechanical-keyboards-under-100-1",
    rank: 1,
    badge: "Best Overall",
    name: "Keychron K10 Pro Wireless Custom Mechanical Keyboard",
    price: "$91.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41OIkZ+MM4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B2DP88SD?tag=theofficejournal-20",
    description: "This board's full VIA and QMK programmability lets you remap any key or create macros through drag-and-drop, with keymaps working on both wireless and wired modes once configured in wired mode. Its 4000mAh battery, described as one of the biggest in mechanical keyboards, powers up to 3 simultaneous Bluetooth device connections at a 1000Hz polling rate.\n\nCompared to the standard Keychron K10 pick below, this Pro version adds sound-absorbing foam, a thick silicone dampening bottom pad, and a steel plate for a noticeably more refined typing sound. Pre-lubed tactile brown switches are hot-swappable with nearly any 3-pin or 5-pin MX-style switch on the market.\n\nBest for buyers who want full VIA programmability with a refined, sound-dampened typing experience.",
    specs: ["100% layout, VIA/QMK programmable, hot-swappable", "4000mAh battery, 3-device Bluetooth", "Sound-absorbing foam, steel plate"],
    pros: ["Full VIA and QMK programmability for complete key remapping", "One of the largest batteries in the mechanical keyboard category", "Sound-absorbing foam and steel plate refine the typing sound"],
    cons: ["Key remapping requires wired mode to configure", "Pricier than the standard K10 without the Pro sound upgrades"],
    bestFor: "buyers who want full VIA programmability with refined sound quality",
  },
  {
    id: "best-mechanical-keyboards-under-100-2",
    rank: 2,
    badge: "Best Battery Life",
    name: "Keychron K10 Full Size Wireless Mechanical Keyboard",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31ssMvj7kFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08MKSNYJD?tag=theofficejournal-20",
    description: "This board's 4000mAh battery lasts up to 240 hours with the backlight off, a battery life figure the pricier K10 Pro doesn't match at 100 hours even at its lowest brightness setting. Its Keychron Super switches carry the same 50 million click lifespan rating as other Keychron boards in this comparison series, with dedicated Screenshot, Siri, and Screen Lock keys for Mac users.\n\nCompared to the K10 Pro above, this standard version skips the sound-absorbing foam, silicone dampening pad, and VIA programmability in exchange for a meaningfully lower price and dramatically longer battery life between charges. It still connects to up to 3 devices via Bluetooth 5.1 with a wired USB-C fallback mode.\n\nBest for buyers who prioritize maximum battery life over sound refinement and VIA programmability.",
    specs: ["104 keys, full-size, Bluetooth/USB-C", "Up to 240 hours battery life, backlight off", "Dedicated Mac shortcut keys included"],
    pros: ["Up to 240 hours of battery life, longest in this comparison", "Dedicated Mac shortcut keys work out of the box", "Cheapest full-size wireless pick in this tier"],
    cons: ["No VIA or QMK programmability like the K10 Pro", "No sound-dampening foam or steel plate refinement"],
    bestFor: "buyers who prioritize maximum battery life over sound refinement",
  },
  {
    id: "best-mechanical-keyboards-under-100-3",
    rank: 3,
    badge: "Best Transparent Design",
    name: "GravaStar Mercury K1 Lite 75% Wireless Mechanical Keyboard",
    price: "$89.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/5118gkQ7QcL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DFXWQWB8?tag=theofficejournal-20",
    description: "This board's fully transparent PC chassis with clear keycaps creates a distinct exoskeleton aesthetic none of the other picks in this comparison offer, while custom GravaStar x BSUN linear switches with 40gf actuation and 2mm pre-travel deliver rapid, controlled keystrokes for competitive gaming. Its gasket-mounted structure with 5-layer foam dampening refines keystroke impact for stability during long sessions.\n\nCompared to the two Keychron K10 picks, this one uses a more compact 75% layout at 80 keys rather than a full 100% layout, trading a number pad for desk space savings and a more distinctive visual design. Tri-mode connectivity supports wired, Bluetooth, and 2.4GHz wireless for flexible multi-device use.\n\nBest for buyers who want a visually distinctive transparent design with competitive gaming switches.",
    specs: ["75% layout, 80 keys, transparent chassis", "40gf actuation switches, gasket-mounted", "Tri-mode connectivity, 4000mAh battery"],
    pros: ["Transparent chassis and clear keycaps offer a distinctive look", "Custom switches with fast 40gf actuation for competitive gaming", "Gasket-mount design with 5-layer foam dampening"],
    cons: ["Smaller 75% layout lacks a dedicated number pad", "Newer brand without the established track record of Keychron"],
    bestFor: "buyers who want a visually distinctive design with competitive gaming switches",
  },
  {
    id: "best-mechanical-keyboards-under-100-4",
    rank: 4,
    badge: "Best Silent Switches",
    name: "Keychron K8 Wireless Mechanical Keyboard, Silent Red Switch",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41KXqiMwAdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DT3F35D4?tag=theofficejournal-20",
    description: "This board's factory pre-lubed Keychron Silent K Pro Red switches deliver a soft, quiet typing feel specifically engineered for shared spaces or late-night use, a genuinely distinct switch category from the standard linear or tactile switches on the other three picks in this comparison. Its TKL 87-key layout with white LED shine-through keycaps balances desk space savings with visibility.\n\nCompared to the GravaStar pick above, this one connects to up to 3 devices via Bluetooth 5.1 or a wired USB-C mode with a 1000Hz polling rate, matching the connectivity flexibility while specifically prioritizing quiet operation over competitive gaming switch speed. Optimized native macOS multimedia keys with included Windows keycaps round out its cross-platform support.\n\nBest for buyers who specifically need quiet switches for shared spaces or late-night typing.",
    specs: ["87 keys, TKL, silent red switches", "Bluetooth 5.1, wired USB-C, 1000Hz polling", "Native macOS keys, Windows keycaps included"],
    pros: ["Silent switches specifically engineered for quiet operation", "TKL layout balances desk space with full functionality", "Native macOS optimization with included Windows keycaps"],
    cons: ["No hot-swap or VIA programmability like the K10 Pro", "Fewer keys than the full-size K10 picks in this tier"],
    bestFor: "buyers who specifically need quiet switches for shared or late-night use",
  }
];

export const howWeEvaluated = [
  { "title": "Battery Capacity and Life", "description": "Compared stated battery capacity and hours of use across wireless picks in this tier." },
  { "title": "Programmability Depth", "description": "Compared full VIA/QMK remapping against proprietary or no remapping support." },
  { "title": "Switch Type and Sound", "description": "Compared linear, tactile, and silent switch categories along with sound dampening design." },
  { "title": "Layout and Desk Footprint", "description": "Compared full-size, TKL, and 75% layouts against their respective feature tradeoffs." },
  { "title": "Design Distinctiveness", "description": "Checked for unique visual or material design elements beyond standard keyboard aesthetics." }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Primary Need",
    table: {
      headers: ["If you mainly need", "Recommended pick"],
      rows: [
        ["Full VIA programmability with refined sound", "Keychron K10 Pro Wireless Custom Mechanical Keyboard"],
        ["Maximum battery life between charges", "Keychron K10 Full Size Wireless Mechanical Keyboard"],
        ["A visually distinctive design with fast gaming switches", "GravaStar Mercury K1 Lite 75% Wireless Mechanical Keyboard"],
        ["Quiet switches for shared spaces or late-night use", "Keychron K8 Wireless Mechanical Keyboard, Silent Red Switch"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $85", "Keychron K10 or K8 (both $84.99)"],
        ["Under $90", "GravaStar Mercury K1 Lite ($89.95)"],
        ["Under $92", "Keychron K10 Pro ($91.99)"],
      ],
    },
  },
  {
    subheading: "VIA Programmability vs No Remapping Support",
    cards: [
      { label: "VIA/QMK programmable (Keychron K10 Pro)", text: "Lets you remap any key and create custom macros through an open standard, worth it if you want deep customization." },
      { label: "No remapping (K10 standard, GravaStar, K8)", text: "Skips advanced customization in favor of simplicity and, in the K10's case, dramatically better battery life." },
    ],
    note: "If deep key customization genuinely matters to your workflow, the K10 Pro's VIA support justifies its premium over the standard K10. If you just want reliable typing without remapping, the other three picks work fine without that added complexity.",
  },
  {
    subheading: "By Switch Category",
    table: {
      headers: ["Your switch preference", "Recommended pick"],
      rows: [
        ["Tactile, hot-swappable, sound-dampened", "Keychron K10 Pro"],
        ["Standard tactile brown switches", "Keychron K10 Full Size"],
        ["Fast linear switches for competitive gaming", "GravaStar Mercury K1 Lite"],
        ["Silent switches for quiet operation", "Keychron K8"],
      ],
    },
  },
  {
    subheading: "For a Shared Living Space or Late-Night Work Schedule Specifically",
    cards: [
      { label: "Look for", text: "Switches specifically marketed as 'silent' rather than just standard linear switches, since standard linear switches are quieter than clicky ones but still produce audible bottom-out noise." },
      { label: "In this comparison", text: "The Keychron K8's Silent K Pro Red switches are specifically engineered for quiet operation, unlike the standard linear or tactile switches on the other three picks." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You want full VIA programmability combined with refined sound dampening, where the Keychron K10 Pro delivers both at the top of this tier." },
      { label: "Save if", text: "You want maximum battery life without needing advanced remapping, where the standard Keychron K10 covers that for about $7 less." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "VIA and QMK Programmability Provides Genuinely Deeper Customization Than a Manufacturer's Proprietary Software",
    "explanation": "VIA is an open-source configuration tool built on the QMK firmware standard, letting the Keychron K10 Pro's key remapping and macro data live in a widely supported, non-proprietary format rather than being locked into one company's specific software that could eventually stop receiving updates. This matters if you're the type of buyer who customizes key layouts extensively and wants confidence that your configuration approach remains supported long-term, less so if you plan to use the keyboard with its default layout indefinitely. Check whether a board's remapping software specifically mentions VIA or QMK support versus a closed proprietary driver before assuming all 'programmable' keyboards offer equivalent long-term customization flexibility."
  },
  {
    "criterion": "Stated Battery Life Figures Depend Heavily on Backlight Usage and Should Be Compared Under the Same Conditions",
    "explanation": "The standard Keychron K10's stated 240-hour battery life is specifically measured with the backlight off, while the K10 Pro's 100-hour figure is measured at its lowest brightness setting rather than off entirely, meaning a direct comparison between these two numbers isn't quite apples-to-apples unless you account for that difference in testing conditions. This matters if extended cordless use between charges is a priority, where the actual real-world battery life you experience depends heavily on how much backlight brightness you typically run. Check the specific backlight condition a stated battery life figure was measured under before directly comparing two different keyboards' battery claims."
  },
  {
    "criterion": "A Transparent Chassis Trades Some Structural Rigidity for a Distinctive Visual Design, a Real Tradeoff to Consider",
    "explanation": "The GravaStar Mercury K1 Lite's transparent PC chassis, while durable, generally can't match the rigidity of a solid aluminum or reinforced plastic case since transparent polycarbonate construction has different structural properties, though the listing does specifically state it maintains structural stability for everyday competitive play. This matters if you prioritize maximum case rigidity above all else, where a solid-case design might feel marginally more solid under aggressive typing, though the practical difference is unlikely to be dramatic for most users. Consider whether a distinctive transparent aesthetic is worth accepting slightly different structural properties compared to a traditional solid-case keyboard."
  },
  {
    "criterion": "Silent Switches Reduce Bottom-Out Noise Specifically, Not the Physical Act of Typing Entirely",
    "explanation": "The Keychron K8's Silent K Pro Red switches use internal dampeners specifically to reduce the clacking sound when a key bottoms out at the end of its travel, but they don't eliminate typing sound entirely, since finger contact with the keycap and the overall mechanical action still produce some audible noise. This matters if your expectation is a completely silent typing experience, which no genuine mechanical switch fully achieves, versus a realistic expectation of meaningfully quieter operation than a standard clicky or even standard linear switch. Set realistic expectations for 'silent' switches as meaningfully quieter rather than completely noiseless before making a purchase decision based on noise concerns alone."
  },
  {
    "criterion": "Sound-Absorbing Foam and a Steel Plate Together Change Both the Sound and the Perceived Typing Quality",
    "explanation": "The Keychron K10 Pro's combination of sound-absorbing foam, a silicone dampening bottom pad, and a steel plate work together to both reduce hollow resonance and add a subtle weightiness to the typing feel that the standard K10 without these additions doesn't replicate, even though both boards use similar switch types. This matters if the overall typing experience, not just the switch feel alone, is important to you, since the surrounding case construction meaningfully shapes how any given switch actually sounds and feels in practice. Consider that two keyboards with the same stated switch type can still feel and sound noticeably different based on the surrounding case and dampening construction."
  }
];

export const faq = [
  { "q": "Does the K10 Pro's VIA programmability work if I only ever use the keyboard on wireless mode?", "a": "You need to connect via wired USB-C mode to initially configure your key remapping and macros, but once set, the resulting keymap works on both wireless and wired modes going forward without needing to reconnect the cable each time." },
  { "q": "What's the most common mistake buyers make when comparing battery life figures across wireless keyboards?", "a": "Comparing two stated battery life numbers without checking whether they were measured under the same backlight conditions, since a figure measured with the backlight off isn't directly comparable to one measured at a low brightness setting." },
  { "q": "Is the Keychron K10 Pro worth it over the cheaper standard K10?", "a": "If you specifically want VIA programmability and refined sound dampening, yes, but if maximum battery life matters more and you don't need advanced remapping, the standard K10 covers that for about $7 less with significantly longer battery life." },
  { "q": "How durable is the GravaStar's transparent chassis compared to a standard plastic case?", "a": "The listing specifically states the polycarbonate construction maintains structural stability for everyday competitive play, though a transparent chassis generally has somewhat different structural properties than a solid aluminum or reinforced case." },
  { "q": "Can the Keychron K8's silent switches still be heard at all, or are they completely quiet?", "a": "They're meaningfully quieter than standard clicky or linear switches due to internal dampeners reducing bottom-out noise, but no genuine mechanical switch eliminates typing sound entirely, so expect noticeably quieter rather than completely silent operation." },
  { "q": "Do any of these keyboards support connecting to a phone or tablet in addition to a computer?", "a": "Yes, the Keychron K10, K10 Pro, K8, and GravaStar picks all support Bluetooth connectivity to multiple device types including phones and tablets, in addition to their wired or 2.4GHz computer connections." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-mechanical-keyboards-under-75", "title": "Best Mechanical Keyboards Under $75" },
  { "href": "/guide/best-mechanical-keyboards-under-150", "title": "Best Mechanical Keyboards Under $150" },
  { "href": "/guide/best-office-chairs-under-200", "title": "Best Office Chairs Under $200" },
  { "href": "/guide/best-desk-hutches-under-100", "title": "Best Desk Hutches Under $100" }
];
