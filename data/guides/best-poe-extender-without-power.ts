export const guideSlug = "best-poe-extender-without-power";
export const guideTitle = "4 Best PoE Extenders That Need No Local Power in 2026";
export const metaTitle = "Best PoE Extenders With No Local Power";
export const metaDescription = "We compared passthrough PoE extenders drawing power from the upstream switch, since a local outlet requirement can rule out mounting spots you need.";
export const mainKeyword = "best poe extender without power";
export const introParagraphs = [
  "A passthrough PoE extender draws all the power it needs directly from your upstream PoE switch or injector, meaning it can be mounted anywhere along the cable run without needing a nearby electrical outlet, a real installation advantage over an extender requiring its own local power adapter.",
  "We compared this lineup on real per-port wattage draw from the upstream source, VLAN isolation features, and physical mounting flexibility, since one listing specifically supports a dedicated 60W output port drawing from a 90W input, letting a single passthrough unit power a higher-wattage device alongside standard ones."
];
export const lastUpdated = "2026-09-15";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31vGyUPsb6L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-poe-extender-without-power-1",
    rank: 1,
    badge: "Best Overall",
    name: "YuanLey 4 Port PoE Extender Gigabit",
    price: "$26.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31vGyUPsb6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVR3C92S?tag=theofficejournal-20",
    description: "This extender's listing specifically states it requires no local power, drawing all operation directly from the upstream PoE source through a single network cable, and provides PoE power to up to three separate devices from that one input. Its VLAN isolation on all four ports prevents data leakage between connected devices, a genuine network security feature at this price point.\n\nCompared to the LINOVISION and passthrough switch picks below, this one's 3-level cascade support reaching up to 1312ft total distance gives it the longest documented total extension range in this comparison while still requiring zero local power at any point in the chain.\n\nBest for buyers who want to power three separate devices with VLAN isolation, all drawing from one upstream PoE source.",
    specs: ["No local power required, draws from upstream PoE only", "1 in 3 out, VLAN isolation on all ports", "3-level cascade for up to 1312ft total distance"],
    pros: ["Genuinely no local power needed at any point in the extension chain", "VLAN isolation on all output ports improves network security", "Powers three separate devices from a single upstream input"],
    cons: ["Max output per port is limited to standard 30W, not higher-wattage devices", "Compact size means fewer total ports than some passthrough switch alternatives"],
    bestFor: "buyers who want to power three separate devices with VLAN isolation from one upstream source",
  },
  {
    id: "best-poe-extender-without-power-2",
    rank: 2,
    badge: "Best for Harsh Environments",
    name: "LINOVISION 2 Ports Gigabit PoE Passthrough Switch",
    price: "$29.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21eQsnFb-XL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMK1TTS3?tag=theofficejournal-20",
    description: "This extender's listing specifically states an IP53 metal enclosure with a wide operating temperature range of -22F to 149F, designed for genuinely harsh environments while still requiring no local power connection. Its compact 1.02-inch by 3.26-inch by 2.09-inch size fits into wall-mount brackets, junction boxes, and other outdoor waterproof enclosures for flexible installation.\n\nCompared to the YuanLey pick above, this one's specifically stated 4kV surge protection and enhanced metal casing with heat dissipation give it a more industrial-grade build quality aimed at DIN-rail mounted installations in demanding settings.\n\nBest for buyers who need no local power in a genuinely harsh or industrial-grade installation environment.",
    specs: ["No local power required, IP53 metal enclosure", "-22F to 149F wide operating temperature range", "4kV surge protection, DIN-rail mounting"],
    pros: ["4kV surge protection is a concrete industrial-grade safeguard", "IP53 metal enclosure with wide temperature tolerance suits harsh settings", "Compact size fits into junction boxes and outdoor enclosures"],
    cons: ["Only splits to 2 outputs, fewer than the YuanLey or passthrough switch picks", "Higher price than the 4-port PoE Passthrough Switch pick below"],
    bestFor: "buyers who need no local power in a genuinely harsh or industrial-grade environment",
  },
  {
    id: "best-poe-extender-without-power-3",
    rank: 3,
    badge: "Best Value",
    name: "PoE Passthrough Switch, 1 in 4 Out Extender",
    price: "$19.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31eMZ6-UhWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRB3THFS?tag=theofficejournal-20",
    description: "This switch's listing specifically states it's powered entirely by the PoE network with no AC power supply required, splitting a single 90W IEEE 802.3bt input into one dedicated 60W output port and three standard 30W output ports. Its VLAN mode, controlled by a dipswitch, isolates output ports 2 through 5 from each other for improved network security.\n\nCompared to the YuanLey and LINOVISION picks above, this one's lowest price in this comparison and dedicated 60W output port together deliver genuine value for buyers needing to power one higher-wattage device alongside standard ones, all without local power.\n\nBest for buyers who want the lowest price with a dedicated high-power port and zero local power requirement.",
    specs: ["No local power required, 90W input to 4 outputs", "One 60W port + three 30W ports (IEEE 802.3bt/at)", "VLAN mode via dipswitch, 3-level cascading"],
    pros: ["Lowest price in this comparison at $19.99", "Dedicated 60W output port supports one higher-power device", "VLAN mode isolates ports for improved network security"],
    cons: ["Explicitly does not support 24V passive PoE devices", "100Mbps port speed is lower than the Gigabit-rated picks above"],
    bestFor: "buyers who want the lowest price with a dedicated high-power port and zero local power requirement",
  },
  {
    id: "best-poe-extender-without-power-4",
    rank: 4,
    badge: "Best for Outdoor No-Power Installations",
    name: "Gigabit PoE Passthrough Switch, 1 in 3 Out Extender",
    price: "$29.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31M4KL1mDvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BWMSPLLF?tag=theofficejournal-20",
    description: "This switch's listing specifically states it's powered by the PoE network with no AC power supply required, offering a Gigabit-speed 1 in 3 out configuration where connected devices show LED port status without any configuration needed. Its 3-level cascading support extends PoE coverage at low cost across multiple hops, all without a single local power connection anywhere in the chain.\n\nCompared to the 100Mbps PoE Passthrough Switch pick above, this one maintains full Gigabit speed across its ports, better suited for higher-bandwidth devices like modern 4K IP cameras that benefit from more than 100Mbps throughput.\n\nBest for buyers who want Gigabit speed passthrough extension with zero local power at any point in an outdoor installation.",
    specs: ["No local power required, Gigabit 1000Mbps rate", "1 in 3 out, LED port status display", "3-level cascading, wall or DIN-rail mount"],
    pros: ["Maintains full Gigabit speed unlike the 100Mbps passthrough switch pick", "LED port status display helps with quick troubleshooting", "3-level cascading extends coverage at low cost, no local power anywhere"],
    cons: ["Explicitly does not support 24V passive PoE devices", "Average 8W per port output is lower than the dedicated 60W port on other picks"],
    bestFor: "buyers who want Gigabit speed passthrough extension with zero local power anywhere in the chain",
  }
];

export const howWeEvaluated = [
  { "title": "Genuine No-Local-Power Operation", "description": "Compared whether each unit draws 100% of its power from the upstream PoE source with no local outlet needed." },
  { "title": "Per-Port Wattage and Standard Support", "description": "Compared IEEE 802.3af/at/bt support and per-port wattage for different device power needs." },
  { "title": "VLAN and Network Security Features", "description": "Compared VLAN isolation availability across output ports." },
  { "title": "Physical Build for Installation Flexibility", "description": "Compared enclosure material, size, and mounting options for different installation environments." },
  { "title": "Speed and Cascade Support", "description": "Compared Gigabit versus Fast Ethernet speeds and multi-unit cascading distance." }
];

export const howToChoose = [
  {
    subheading: "By Primary Need",
    table: {
      headers: ["If you mainly need", "Recommended pick"],
      rows: [
        ["To power three devices with VLAN isolation, no local power", "YuanLey 4 Port PoE Extender Gigabit"],
        ["No local power in a genuinely harsh, industrial setting", "LINOVISION 2 Ports Gigabit PoE Passthrough Switch"],
        ["The lowest price with a dedicated high-power port", "PoE Passthrough Switch, 1 in 4 Out Extender"],
        ["Gigabit speed with zero local power anywhere in the chain", "Gigabit PoE Passthrough Switch, 1 in 3 Out Extender"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $20", "PoE Passthrough Switch, 1 in 4 Out ($19.99)"],
        ["Under $27", "YuanLey 4 Port PoE Extender ($26.98)"],
        ["Under $30", "LINOVISION 2 Ports Passthrough ($29.99) or Gigabit Passthrough Switch ($29.99)"],
      ],
    },
  },
  {
    subheading: "Gigabit Speed vs Dedicated High-Power Port",
    cards: [
      { label: "Gigabit speed (YuanLey, Gigabit Passthrough Switch)", text: "Both maintain full 1000Mbps throughput, better suited to bandwidth-hungry devices like 4K IP cameras, though neither has a dedicated port above standard 30W." },
      { label: "Dedicated high-power port (100Mbps Passthrough Switch)", text: "Trades Gigabit speed for a dedicated 60W output port, better suited to a single higher-wattage device like a PTZ camera alongside standard ones." },
    ],
    note: "If your devices need high bandwidth more than high wattage, the Gigabit-rated picks are the better fit. If you specifically need to power one higher-wattage device without local power, the 100Mbps pick's dedicated 60W port is worth the speed tradeoff.",
  },
  {
    subheading: "By Installation Environment",
    table: {
      headers: ["Your installation", "Recommended pick"],
      rows: [
        ["Indoor office or home network closet", "YuanLey 4 Port PoE Extender or PoE Passthrough Switch"],
        ["Harsh industrial or outdoor enclosure", "LINOVISION 2 Ports Gigabit PoE Passthrough Switch"],
        ["DIN-rail mounted network cabinet", "Any of the four picks support DIN-rail mounting"],
      ],
    },
  },
  {
    subheading: "For a Location With No Nearby Electrical Outlet Specifically",
    cards: [
      { label: "Look for", text: "An extender explicitly described as passthrough or requiring no AC power supply, confirming it draws 100% of its operating power from the upstream PoE cable rather than needing a separate local outlet." },
      { label: "In this comparison", text: "All four picks specifically confirm no local power requirement, making any of them suitable for a location with no nearby electrical outlet." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You're installing in a genuinely harsh industrial environment and need surge protection and a wide temperature range, where the LINOVISION pick's $29.99 price is justified by its industrial-grade build." },
      { label: "Save if", text: "You want a dedicated high-power port with zero local power requirement, where the PoE Passthrough Switch delivers that for $19.99, the lowest price in this comparison." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "A True Passthrough Design Draws 100% of Its Power From the Upstream PoE Source, Not Just Most of It",
    "explanation": "All four picks in this comparison specifically confirm they require no local AC power supply, drawing their entire operating power directly through the incoming PoE cable from an upstream switch or injector, a genuinely different design from an extender that needs its own wall adapter for at least some of its operation. This matters significantly if you're installing in a location with no nearby electrical outlet, like inside a wall cavity, above a drop ceiling, or in an outdoor junction box, since a local-power-dependent extender simply wouldn't work in that location at all. Check a listing specifically for language confirming zero local power requirement, rather than assuming any 'PoE extender' label means fully passthrough operation."
  },
  {
    "criterion": "A Passthrough Extender's Total Output Wattage Is Limited by Its Upstream Input, Not an Independent Power Source",
    "explanation": "The PoE Passthrough Switch pick specifically states its 90W input splits into one 60W port and three 30W ports, meaning the total power available across all four outputs is capped by whatever the upstream PoE switch can actually deliver, unlike a locally-powered device that has its own independent power budget. This matters if you're connecting multiple higher-wattage devices simultaneously, since the combined draw could exceed what your upstream PoE source can supply even if each individual port's rating seems adequate on paper. Check your upstream PoE switch's total power budget against the combined wattage of all devices you plan to connect through a passthrough extender, not just each port's individual maximum rating."
  },
  {
    "criterion": "VLAN Isolation on Output Ports Prevents Connected Devices From Seeing Each Other's Network Traffic",
    "explanation": "The YuanLey and 100Mbps PoE Passthrough Switch picks both specifically include VLAN isolation on their output ports, meaning devices connected to different ports can't see or interfere with each other's network traffic even though they share the same physical extender, a real security benefit in a shared or multi-tenant installation. This matters if you're connecting devices belonging to different security zones or different users through the same extender, and matters less if all connected devices already trust each other on the same private network. Check whether a passthrough extender specifically names VLAN isolation as a feature if network segmentation matters for your particular installation."
  },
  {
    "criterion": "An Industrial-Grade Metal Enclosure With a Wide Temperature Range Matters More for Genuinely Harsh Deployment Environments",
    "explanation": "The LINOVISION pick's specifically stated IP53 metal enclosure and -22F to 149F operating range, combined with 4kV surge protection, target genuinely harsh industrial or outdoor environments more robustly than a standard plastic-enclosure extender rated for typical indoor or moderate outdoor use. This matters if your installation faces real temperature extremes, dust, or electrical surge risk, and matters less for a climate-controlled indoor network closet where a standard enclosure performs adequately. Check a passthrough extender's specific enclosure material, temperature range, and any stated surge protection rating if your deployment environment is genuinely demanding, rather than assuming any 'industrial' label means the same protection level."
  },
  {
    "criterion": "24V Passive PoE Devices May Not Work With a Standard IEEE 802.3af/at/bt Passthrough Extender",
    "explanation": "Two of the picks in this comparison explicitly state they do not support 24V passive PoE, meaning a device using that less common power standard, rather than the more prevalent IEEE 802.3af, 802.3at, or 802.3bt standards, simply won't receive power through these particular passthrough extenders. This matters significantly if you're not certain which PoE standard your existing device uses, since connecting an unsupported 24V passive device could result in it not powering on at all despite the extender otherwise functioning correctly for other devices. Verify your specific device's exact PoE standard against a passthrough extender's explicitly stated compatibility before purchasing, rather than assuming all PoE-labeled devices work interchangeably."
  }
];

export const faq = [
  { "q": "Do passthrough PoE extenders really need zero local power at all?", "a": "Yes, all four picks in this comparison specifically confirm they draw their entire operating power from the upstream PoE cable, requiring no local AC power adapter or outlet at the extender's own installation location." },
  { "q": "What's the most common mistake buyers make when choosing a passthrough PoE extender?", "a": "Assuming any port on a passthrough extender can power any device, when several extenders specifically exclude 24V passive PoE devices and only support the more common IEEE 802.3af/at/bt standards." },
  { "q": "Is the LINOVISION passthrough switch worth the higher price over the basic YuanLey extender?", "a": "If you're installing in a genuinely harsh industrial or outdoor environment and need surge protection and a wide temperature range, the LINOVISION's higher price is justified, but for a standard indoor installation, the YuanLey pick's lower price and similar core functionality make it the better value." },
  { "q": "Can I power a higher-wattage device like a PTZ camera through a passthrough extender with no local power?", "a": "Yes, but only through a pick with a dedicated higher-wattage port like the 100Mbps PoE Passthrough Switch's 60W output, since a standard 30W-only passthrough extender may not adequately power a higher-draw device." },
  { "q": "Will a passthrough extender work if my upstream switch doesn't provide enough total PoE power?", "a": "No, since a passthrough extender has no independent power source, its total available output wattage is limited by whatever your upstream PoE switch or injector can actually supply, so checking your switch's total power budget against your connected devices' combined draw is important." },
  { "q": "Do I need VLAN isolation for a simple home network with just a couple of security cameras?", "a": "VLAN isolation matters more in shared or multi-tenant installations where different devices need to be kept from seeing each other's traffic; for a simple home network with trusted devices, it's a nice-to-have feature rather than a strict requirement." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-outdoor-poe-extender", "title": "Best Outdoor and Waterproof PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" },
  { "href": "/guide/best-gigabit-poe-extender", "title": "Best Gigabit PoE Extenders" }
];
