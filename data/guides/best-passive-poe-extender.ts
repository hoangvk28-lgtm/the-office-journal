export const guideSlug = "best-passive-poe-extender";
export const guideTitle = "4 Best Passive PoE Extenders in 2026";
export const metaTitle = "Best Passive PoE Extenders";
export const metaDescription = "We compared passive PoE splitter kits by real voltage compatibility and speed limits, since one listing warns that non-standard PoE can overvolt a device.";
export const mainKeyword = "best passive poe extender";
export const introParagraphs = [
  "A passive PoE extender or splitter adds power-over-Ethernet capability to a device that doesn't natively support it, using simple DC jack connectors rather than the intelligent negotiation chip found in an active IEEE 802.3af/at extender, but that simplicity comes with real voltage and safety tradeoffs worth understanding.",
  "We compared this lineup on documented voltage range, speed limits, and safety disclosures, since one listing specifically warns that connecting a non-standard passive PoE source to a device expecting proper negotiation can overvolt and damage it."
];
export const lastUpdated = "2026-09-16";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51H1OHxiP-L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-passive-poe-extender-1",
    rank: 1,
    badge: "Best Overall",
    name: "5 Pairs Passive PoE Injector and Splitter Kit",
    price: "$9.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51H1OHxiP-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07F82YK6P?tag=theofficejournal-20",
    description: "This kit's listing specifically states support for any DC voltage up to 60V through standard 5.5mm by 2.1mm DC jacks, a genuinely wide voltage range for transforming non-PoE devices into PoE-enabled equipment at the lowest price in this comparison. Its 5-pair package includes both DC male and female ends, ten pieces total, covering multiple device setups from a single purchase.\n\nCompared to the Coaxuhf and LUORNG picks below, this one's higher 60V maximum voltage tolerance gives it broader compatibility across different device power requirements without needing to verify a narrower voltage window.\n\nBest for buyers who want the widest voltage compatibility and the most pairs per purchase at the lowest price.",
    specs: ["Up to 60V DC compatibility, 5.5x2.1mm connectors", "10Mbps network speed", "5-pair kit (10 pieces total)"],
    pros: ["Lowest price in this comparison at $9.98", "Widest voltage compatibility up to 60V DC", "Five pairs included for multiple device setups"],
    cons: ["Limited to 10Mbps network speed, not suitable for high-bandwidth devices", "No stated maximum transmission distance"],
    bestFor: "buyers who want the widest voltage compatibility and the most pairs per purchase",
  },
  {
    id: "best-passive-poe-extender-2",
    rank: 2,
    badge: "Best Build Quality",
    name: "Coaxuhf Passive PoE Injector 5 Pairs Kit",
    price: "$9.49",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/4151MjS9d8L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G3L2M32P?tag=theofficejournal-20",
    description: "This kit's listing specifically states durable ABS housing with copper-core conductors and metal connectors, supporting clear signal transmission for devices up to 5 megapixels, a more detailed build quality disclosure than the other picks in this comparison. Its documented 30-meter (98ft) maximum transmission distance gives buyers a concrete distance expectation upfront.\n\nCompared to the 60V pick above, this one's 12V to 48V voltage range with optimal performance specifically at 12V/1.0A targets a narrower but common device voltage window for security and network applications.\n\nBest for buyers who want documented build materials and a concrete maximum transmission distance.",
    specs: ["12V-48V DC range, optimal at 12V/1.0A", "ABS housing with copper-core conductors", "30m (98ft) max distance, 10Mbps speed"],
    pros: ["Documented copper-core conductors and metal connectors for build quality", "Concrete 30-meter maximum distance disclosure", "Supports clear signal for devices up to 5 megapixels"],
    cons: ["Narrower 48V maximum voltage than the 60V pick above", "Limited to 10Mbps network speed"],
    bestFor: "buyers who want documented build materials and a concrete maximum transmission distance",
  },
  {
    id: "best-passive-poe-extender-3",
    rank: 3,
    badge: "Best for Raspberry Pi and USB Devices",
    name: "UCTRONICS PoE Splitter Gigabit 5V",
    price: "$14.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31h8hliWOsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07CNKX14C?tag=theofficejournal-20",
    description: "This splitter's listing specifically states 5V/2.4A output with full Gigabit 1000Mbps data transfer, purpose-built for powering micro-USB devices like a Raspberry Pi 3B+ or security cameras without needing a nearby AC outlet. Its explicit warning that non-standard passive PoE switches can overvolt and damage connected devices, requiring a genuine IEEE 802.3af/at compliant source, is a notably transparent safety disclosure not found on the other picks in this comparison.\n\nCompared to the wider-voltage passive picks above, this one specifically targets 5V micro-USB devices with full Gigabit speed rather than the 10Mbps limit typical of simple DC-jack passive splitters.\n\nBest for buyers powering a Raspberry Pi or other micro-USB device who need full Gigabit speed alongside power.",
    specs: ["5V/2.4A output, full Gigabit 1000Mbps", "Requires genuine IEEE 802.3af/at compliant source", "Extends power up to 400ft"],
    pros: ["Full Gigabit speed, unlike the 10Mbps limit on typical passive splitters", "Explicit safety warning about non-standard PoE overvolting risk", "Purpose-built for Raspberry Pi and other micro-USB devices"],
    cons: ["Requires a genuine 802.3af/at compliant PoE source, not just any passive injector", "Highest price in this comparison"],
    bestFor: "buyers powering a Raspberry Pi or other micro-USB device who need full Gigabit speed",
  },
  {
    id: "best-passive-poe-extender-4",
    rank: 4,
    badge: "Best Budget Single Pair",
    name: "LUORNG POE Splitter Injector Kit (1 Pair)",
    price: "$6.96",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/3136GQSauYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BZ74M6WD?tag=theofficejournal-20",
    description: "This kit's listing specifically states it uses idle lines in an existing network cable to power a network camera without modifying the wiring, a genuinely practical explanation of how the passive splitter works for a single-device setup. Its ABS and copper core wire construction is specifically noted for high temperature and high pressure resistance with flame retardancy.\n\nCompared to the 5-pair kits above, this one's single-pair package at the lowest price in this comparison suits a buyer who only needs to convert one device rather than purchasing a multi-pair kit they won't fully use.\n\nBest for buyers who only need to power a single device and want the lowest price for exactly one pair.",
    specs: ["12V supply voltage, 5.5x2.1mm DC connector", "ABS and copper core wire construction", "1 pair (single device) kit, 160mm cable length"],
    pros: ["Lowest price in this comparison at $6.96", "Uses existing idle network cable lines without rewiring", "Flame-retardant ABS and copper core construction"],
    cons: ["Single pair only, not suited for multiple devices without additional purchases", "Fixed 12V voltage, less flexible than the wider-range picks above"],
    bestFor: "buyers who only need to power a single device and want the lowest price",
  }
];

export const howWeEvaluated = [
  { "title": "Documented Voltage Range", "description": "Compared stated DC voltage compatibility and optimal operating voltage across listings." },
  { "title": "Safety Disclosure", "description": "Compared how transparently each listing discloses risks of non-standard passive PoE use." },
  { "title": "Speed and Bandwidth", "description": "Compared 10Mbps standard passive splitters against Gigabit-capable options." },
  { "title": "Build Quality and Materials", "description": "Compared documented housing materials and conductor quality." },
  { "title": "Kit Size and Value", "description": "Compared single-pair versus multi-pair kit packaging for different device counts." }
];

export const howToChoose = [
  {
    subheading: "By Primary Need",
    table: {
      headers: ["If you mainly need", "Recommended pick"],
      rows: [
        ["The widest voltage compatibility with the most pairs", "5 Pairs Passive PoE Injector and Splitter Kit"],
        ["Documented build quality and a concrete distance spec", "Coaxuhf Passive PoE Injector 5 Pairs Kit"],
        ["Full Gigabit speed for a Raspberry Pi or USB device", "UCTRONICS PoE Splitter Gigabit 5V"],
        ["The lowest price for exactly one device", "LUORNG POE Splitter Injector Kit (1 Pair)"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $7", "LUORNG POE Splitter Injector Kit ($6.96)"],
        ["Under $10", "Coaxuhf ($9.49) or 5 Pairs Kit ($9.98)"],
        ["Under $15", "UCTRONICS PoE Splitter Gigabit 5V ($14.98)"],
      ],
    },
  },
  {
    subheading: "10Mbps DC-Jack Splitters vs Gigabit Micro-USB Splitter",
    cards: [
      { label: "10Mbps DC-jack splitters (5 Pairs, Coaxuhf, LUORNG)", text: "All three use simple 5.5x2.1mm DC connectors at 10Mbps, sufficient for basic IP cameras and access points that don't need high bandwidth." },
      { label: "Gigabit micro-USB splitter (UCTRONICS)", text: "Delivers full 1000Mbps alongside 5V power specifically for micro-USB devices like a Raspberry Pi, where both power and fast data matter." },
    ],
    note: "If you're powering a basic IP camera or access point, the DC-jack passive splitters cover that need at a lower price. If you're powering a Raspberry Pi or similar device that also needs fast data transfer, the UCTRONICS pick is purpose-built for that combination.",
  },
  {
    subheading: "By Kit Size Needed",
    table: {
      headers: ["Number of devices to power", "Recommended pick"],
      rows: [
        ["Just one device", "LUORNG POE Splitter Injector Kit (1 Pair)"],
        ["Multiple devices (up to 5)", "5 Pairs Passive PoE Injector Kit or Coaxuhf 5 Pairs Kit"],
        ["A Raspberry Pi or micro-USB device specifically", "UCTRONICS PoE Splitter Gigabit 5V"],
      ],
    },
  },
  {
    subheading: "For Safety-Conscious Buyers Specifically",
    cards: [
      { label: "Look for", text: "An explicit warning about voltage negotiation risks, since passive PoE sends power without the negotiation that active IEEE 802.3af/at devices use, which can overvolt and damage a device expecting proper negotiation." },
      { label: "In this comparison", text: "The UCTRONICS pick specifically discloses this exact risk and states its requirement for a genuine IEEE 802.3af/at compliant source, the most transparent safety disclosure here." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You're powering a Raspberry Pi or micro-USB device and need full Gigabit data alongside power, where the UCTRONICS pick's $14.98 price is justified by that specific capability." },
      { label: "Save if", text: "You just need to power one basic non-PoE device, where the LUORNG single-pair kit delivers that for $6.96, the lowest price in this comparison." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "Passive PoE Sends Power Without the Negotiation That Active PoE Standards Use, Creating a Real Overvolt Risk",
    "explanation": "The UCTRONICS pick specifically warns that non-standard passive PoE switches deliver power without negotiation, which can overvolt and damage a device expecting a properly negotiated IEEE 802.3af/at connection, a genuine safety risk distinct from active PoE's built-in device detection and voltage negotiation. This matters significantly if you're connecting a device that specifically expects standard negotiated PoE, since a mismatched passive power source could cause real damage, and matters less if your device is specifically designed for a known, fixed passive voltage. Verify your exact device's PoE compatibility (passive versus negotiated active PoE) before connecting it to any passive splitter, rather than assuming any PoE-labeled adapter is safe for any PoE-labeled device."
  },
  {
    "criterion": "Documented Voltage Range Determines Which Devices a Passive Splitter Can Actually Power Safely",
    "explanation": "The picks in this comparison range from a fixed 12V (LUORNG) to a wide 12V-48V range (Coaxuhf) to up to 60V (5 Pairs Kit), a real difference in which devices each splitter can safely power, since connecting a device requiring a voltage outside a splitter's supported range could result in inadequate power or potential damage. This matters if your specific device requires a voltage at the edge of or outside a splitter's documented range, and matters less if your device's voltage requirement falls comfortably within any of these ranges. Check your specific device's required voltage against a passive splitter's documented range before assuming any passive PoE splitter works with any device."
  },
  {
    "criterion": "10Mbps Speed Limits on Most Passive Splitters Make Them Unsuitable for Bandwidth-Intensive Devices",
    "explanation": "Three of the four picks in this comparison specifically cap network speed at 10Mbps, adequate for basic IP cameras and simple network devices but genuinely limiting for anything requiring higher bandwidth, while the UCTRONICS pick specifically delivers full Gigabit 1000Mbps alongside its power function. This matters significantly if you're powering a device that also needs fast data transfer, like a Raspberry Pi running network-intensive applications, and matters less for a basic camera or sensor with modest bandwidth needs. Check a passive splitter's stated network speed against your specific device's actual bandwidth requirement before assuming any PoE splitter delivers adequate data throughput."
  },
  {
    "criterion": "Passive Splitters Reusing Idle Network Cable Lines Avoid Rewiring but Require Compatible Existing Cabling",
    "explanation": "The LUORNG pick specifically explains that its splitter uses idle lines within an existing network cable to power a device without modifying the wiring, a genuinely convenient approach that only works if your existing cable run actually has those idle lines available and in good condition. This matters if you're retrofitting PoE capability onto an existing camera or device installation with cable already run, and matters less for a fresh installation where you're running new cable anyway. Confirm your existing cable run has functional idle pairs available before assuming a passive splitter can add PoE capability without any rewiring."
  },
  {
    "criterion": "A Multi-Pair Kit's Per-Unit Cost Only Delivers Value if You Actually Need to Power That Many Devices",
    "explanation": "The 5 Pairs Kit and Coaxuhf pick both bundle five splitter pairs at a similar total price to buying a single pair alone would cost proportionally, delivering real value only if you have that many devices needing passive PoE conversion, while the LUORNG single-pair kit avoids paying for unused pairs if you only have one device. This matters if you're specifically converting multiple devices at once, where the multi-pair kits offer better per-unit value, and matters less if you only need to power a single device, where a single-pair kit avoids unnecessary spending. Count your actual number of devices needing passive PoE conversion before choosing between a multi-pair kit and a single-pair purchase."
  }
];

export const faq = [
  { "q": "Is a passive PoE splitter safe to use with any PoE device?", "a": "Not necessarily; the UCTRONICS pick specifically warns that non-standard passive PoE can overvolt and damage a device expecting proper negotiated power, so verifying your specific device's passive PoE compatibility before connecting it is important." },
  { "q": "What's the most common mistake buyers make when choosing a passive PoE extender?", "a": "Assuming any passive PoE splitter is interchangeable with an active, negotiated PoE source, when passive splitters deliver power without the voltage negotiation that protects a device from receiving an incompatible or excessive voltage." },
  { "q": "Is the UCTRONICS splitter worth the higher price over the basic DC-jack kits?", "a": "If you're specifically powering a Raspberry Pi or another micro-USB device that also needs full Gigabit data speed, the UCTRONICS pick's higher price is justified, but for a basic IP camera needing only 10Mbps, the cheaper DC-jack kits deliver adequate performance." },
  { "q": "Can I use a passive PoE splitter to power a device that doesn't natively support PoE?", "a": "Yes, that's specifically the purpose of these passive splitters, converting non-PoE devices like standard IP cameras or access points into PoE-enabled equipment using their DC jack connectors." },
  { "q": "How many devices can I power with a 5-pair passive PoE kit?", "a": "A 5-pair kit like the 5 Pairs Passive PoE Injector and Splitter Kit or the Coaxuhf pick includes enough components to convert up to five separate devices, each requiring its own injector and splitter pair." },
  { "q": "Do I need special tools to install a passive PoE splitter kit?", "a": "No, these kits are specifically designed for plug-and-play installation using standard DC jack and RJ45 connectors, requiring no special tools or network configuration beyond connecting the included components." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-extender", "title": "Best PoE Extenders" },
  { "href": "/guide/best-mini-poe-extender", "title": "Best Mini PoE Extenders" },
  { "href": "/guide/best-1-port-poe-extender", "title": "Best 1-Port PoE Extenders" },
  { "href": "/guide/best-2-port-poe-extender", "title": "Best 2-Port and 1-in-2-out PoE Extenders" }
];
