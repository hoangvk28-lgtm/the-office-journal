export const guideSlug = "best-outdoor-poe-injector";
export const guideTitle = "4 Best Outdoor PoE Injectors in 2026";
export const metaTitle = "Best Outdoor PoE Injectors";
export const metaDescription = "We compared outdoor PoE injectors by real IP rating and surge protection, since an IP67 metal enclosure and 6kV surge protection matter more than wattage alone.";
export const mainKeyword = "best outdoor poe injector";
export const introParagraphs = [
  "An outdoor PoE injector needs a sealed IP67-rated enclosure and real surge protection to survive weather exposure and electrical fluctuations, requirements a standard indoor injector's plastic housing was never designed to meet.",
  "We compared this lineup on real IP rating and surge protection specs, since two listings here specifically state IK10 vandal resistance and 6kV surge protection for exposed installations, while the price range across this comparison spans from $115 to $155 based on power tier and included accessories."
];
export const lastUpdated = "2026-09-17";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/319BI3TUmCL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-outdoor-poe-injector-1",
    rank: 1,
    badge: "Best Overall",
    name: "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, TI-O119GI",
    price: "$154.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/319BI3TUmCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4YPS3HD?tag=theofficejournal-20",
    description: "This injector's listing specifically states industrial EMS certifications including ESD protection up to 8kV air and surge protection up to 6kV on signal lines, a more detailed compliance spec sheet than most competitors in this comparison provide. Its IP67 metal enclosure operates across a -40C to 75C range and delivers up to 95W to 802.3af, 802.3at, or 802.3bt devices.\n\nCompared to the Intellinet pick below, this one adds NDAA and TAA compliance and a higher stated 95W power ceiling, though its power supply is sold separately, an added cost to factor into the total price.\n\nBest for buyers who need NDAA compliance, the highest power ceiling in this comparison, and documented industrial EMS certifications.",
    specs: ["Up to 95W, 802.3af/at/bt, IP67", "NDAA + TAA compliant, -40C to 75C", "6kV surge, 8kV ESD protection"],
    pros: ["Highest stated power ceiling in this comparison at 95W", "NDAA and TAA compliance for institutional buyers", "Documented industrial EMS certifications beyond basic surge protection"],
    cons: ["Highest price in this comparison", "Power supply sold separately, an added cost"],
    bestFor: "buyers who need NDAA compliance and the highest power ceiling in this comparison",
  },
  {
    id: "best-outdoor-poe-injector-2",
    rank: 2,
    badge: "Best Vandal Resistant",
    name: "Intellinet Outdoor Gigabit PoE++ Injector, 60W, IP67, IK10",
    price: "$125.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31+j+EantBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SQ5T8BD?tag=theofficejournal-20",
    description: "This injector's listing specifically states an IK10 vandal-resistance rating alongside IP67 dust and waterproof protection, the only pick in this comparison combining both certifications explicitly. Its included mounting kit, earthing kit, and three IP67-rated cable glands create a genuinely sealed installation out of the box.\n\nCompared to the TRENDnet pick above, this one costs about $29 less while covering the more common 60W 802.3bt tier rather than the TRENDnet's higher 95W ceiling, and includes more mounting accessories in the box.\n\nBest for buyers installing in a location exposed to vandalism or physical impact who want a genuinely sealed, complete installation kit.",
    specs: ["60W, 802.3af/at/bt, IP67 + IK10", "Includes mounting kit, earthing kit, cable glands", "6kV surge, 8kV ESD protection"],
    pros: ["IK10 vandal resistance rating not stated on other picks", "Includes mounting and earthing kit plus cable glands", "60W covers the majority of outdoor PoE device needs"],
    cons: ["Lower power ceiling than the TRENDnet pick's 95W", "No stated NDAA compliance"],
    bestFor: "buyers installing in a location exposed to vandalism who want a complete sealed installation kit",
  },
  {
    id: "best-outdoor-poe-injector-3",
    rank: 3,
    badge: "Best for Solar Applications",
    name: "PROCET 10GbE 30W PoE+ Injector Outdoor IP67",
    price: "$115.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31U6PP3SfiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ZSPL8GL?tag=theofficejournal-20",
    description: "This injector's listing specifically states a 12-55V DC input with voltage boosting, making it possible to power from a solar application, a genuinely different power source flexibility than the AC-only picks above. Its support for 10/100/1000Mbps through 2.5G, 5G, and full 10Gbps data speeds is the highest stated speed ceiling in this comparison.\n\nCompared to the TRENDnet and Intellinet picks above, this one's DC input flexibility and 10GbE speed target a different use case, PTZ AI cameras and mmWave bridges on solar or remote power, rather than a standard grid-powered installation.\n\nBest for buyers powering an outdoor PTZ camera or wireless bridge from a solar or variable DC power source who need up to 10Gbps speed.",
    specs: ["30W, 10GbE up to 10Gbps", "12-55V DC input with voltage boosting", "Aluminum alloy, IP67, -40F to 149F"],
    pros: ["Only pick in this comparison accepting DC/solar power input", "Highest stated data speed ceiling at up to 10Gbps", "Named compatibility with Dahua/Axis PTZ cameras and mmWave bridges"],
    cons: ["Lower power ceiling at 30W compared to the 60W and 95W picks", "No stated IK vandal resistance rating"],
    bestFor: "buyers powering outdoor cameras or bridges from solar or variable DC power who need high-speed data",
  },
  {
    id: "best-outdoor-poe-injector-4",
    rank: 4,
    badge: "Best Value",
    name: "FASTCABLING Outdoor Industrial PoE++ Injector, 60W",
    price: "$146.26",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/310Vo+ngs5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJXW3J41?tag=theofficejournal-20",
    description: "This injector's listing specifically states a built-in power supply accepting 100-240V AC input directly, meaning no external power adapter is needed unlike the TRENDnet pick's separately sold supply. Its aluminum IK10 vandal-proof metal housing and IP67 waterproof rating operate across a -25C to 60C range.\n\nCompared to the Intellinet pick above, this one delivers the same 60W 802.3bt power tier and IK10 vandal resistance with a built-in power supply, at a similar overall total cost once the TRENDnet's separate power supply is factored in.\n\nBest for buyers who want a built-in AC power supply with no separate adapter purchase needed, at the 60W 802.3bt tier.",
    specs: ["60W, 802.3af/at/bt, IP67 + IK10", "Built-in 100-240V AC power supply", "Wide -25C to 60C operating range"],
    pros: ["Built-in power supply, no separate adapter purchase needed", "IK10 vandal-proof rating matches the Intellinet pick", "Wide operating temperature range for industrial use"],
    cons: ["No stated NDAA compliance", "No specific stated ESD kV rating unlike the Intellinet or TRENDnet picks"],
    bestFor: "buyers who want a built-in power supply with no separate adapter purchase at the 60W tier",
  }
];

export const howWeEvaluated = [
  { "title": "IP Rating Verification", "description": "Confirmed each listing explicitly states IP67 (or higher) waterproof and dustproof protection." },
  { "title": "Vandal Resistance", "description": "Compared stated IK-rating vandal resistance where listings provided it." },
  { "title": "Surge and ESD Protection", "description": "Compared specific stated kV ratings for surge and ESD protection." },
  { "title": "Power Source Flexibility", "description": "Compared standard AC-powered units against DC-input units built for solar or remote power." },
  { "title": "Included Accessories", "description": "Compared whether a listing bundles mounting kits, earthing kits, or cable glands versus a separately sold power supply." }
];

export const howToChoose = [
  {
    subheading: "By Installation Environment",
    table: {
      headers: ["Your installation", "Recommended pick"],
      rows: [
        ["High power need, institutional compliance", "TRENDnet Outdoor IP67 Gigabit PoE++ Injector"],
        ["Exposed to vandalism, complete sealed kit needed", "Intellinet Outdoor Gigabit PoE++ Injector"],
        ["Solar or remote DC power, high-speed data", "PROCET 10GbE 30W PoE+ Injector Outdoor"],
        ["Standard AC power, no separate adapter wanted", "FASTCABLING Outdoor Industrial PoE++ Injector"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $116", "PROCET 10GbE 30W PoE+ Injector ($115.00)"],
        ["Under $130", "Intellinet Outdoor Gigabit PoE++ Injector ($125.99)"],
        ["Under $150", "FASTCABLING Outdoor Industrial PoE++ Injector ($146.26)"],
        ["Under $160", "TRENDnet Outdoor IP67 Gigabit PoE++ Injector ($154.99)"],
      ],
    },
  },
  {
    subheading: "AC-Powered vs DC/Solar-Powered Outdoor Injectors",
    cards: [
      { label: "AC-powered (TRENDnet, Intellinet, FASTCABLING)", text: "Suits installations with standard grid power access nearby, offering higher wattage ceilings up to 95W for demanding devices." },
      { label: "DC/solar-powered (PROCET)", text: "Necessary for remote installations without grid power access, like solar-powered PTZ cameras or wireless bridges in areas without electrical infrastructure." },
    ],
    note: "Confirm your installation site's actual power access before choosing; a DC-input unit is only worth its tradeoffs if you genuinely lack standard AC power nearby.",
  },
  {
    subheading: "By Included Accessories",
    table: {
      headers: ["What you want included", "Recommended pick"],
      rows: [
        ["Mounting kit, earthing kit, cable glands", "Intellinet Outdoor Gigabit PoE++ Injector"],
        ["Built-in power supply, no separate purchase", "FASTCABLING Outdoor Industrial PoE++ Injector"],
        ["Power supply sold separately, higher power ceiling", "TRENDnet Outdoor IP67 Gigabit PoE++ Injector"],
      ],
    },
  },
  {
    subheading: "For a Remote Solar-Powered Camera Installation Specifically",
    cards: [
      { label: "Look for", text: "A wide DC input voltage range with voltage boosting, since solar and battery power sources fluctuate and a standard AC-only injector simply cannot connect to that kind of power source." },
      { label: "In this comparison", text: "The PROCET pick specifically states a 12-55V DC input with voltage boosting designed for solar applications, unlike the three AC-only picks." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You need the highest power ceiling, NDAA compliance, or documented industrial EMS certifications, where the TRENDnet pick's $154.99 price justifies those specific requirements." },
      { label: "Save if", text: "You need solid 60W IP67 protection without NDAA compliance, where the Intellinet or FASTCABLING picks deliver that for roughly $20-30 less." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "IP67 Alone Doesn't Tell You Everything About an Outdoor Injector's Real Durability",
    "explanation": "IP67 specifically means the enclosure is dust-tight and can withstand temporary immersion in up to 1 meter of water, which covers rain and dust exposure well, but says nothing about resistance to physical impact or vandalism, a separate IK rating (like IK10) that only some listings in this comparison state. This matters if your installation is in a publicly accessible location where physical tampering or accidental impact is a realistic risk, and matters less for a mounted, out-of-reach installation where weather is the only real concern. Check for both an IP rating for weather and dust and, separately, an IK rating if physical protection is also a consideration for your specific installation site."
  },
  {
    "criterion": "A Built-In Power Supply Versus a Separately Sold Power Supply Changes the Real Total Cost of an Outdoor Injector",
    "explanation": "Some outdoor injector listings, like the FASTCABLING pick, include a built-in 100-240V AC power supply so the stated price is the complete cost, while others, like the TRENDnet pick, sell the power supply as a separate accessory, meaning the listed price doesn't reflect what you'll actually spend to get a working installation. This matters for comparing prices fairly across different listings, since a lower headline price with a separate required accessory purchase can end up costing more than a higher headline price that includes everything needed. Check the listing specifically for whether a power supply is included or sold separately before comparing prices across outdoor injector options."
  },
  {
    "criterion": "DC Input Flexibility Is Essential for Remote or Solar Installations but Unnecessary Complexity for a Standard Grid-Powered Site",
    "explanation": "An outdoor injector designed to accept a wide DC voltage range with voltage boosting, like the PROCET pick, specifically enables solar panel or battery power for installations without grid electricity access, a genuinely different design purpose from a standard AC-powered unit. This matters significantly for remote PTZ cameras, wireless bridges, or radar signs installed away from existing electrical infrastructure, and matters not at all if your installation site already has standard AC power readily available. Confirm your specific installation site's actual power access before paying for DC input flexibility you won't use."
  },
  {
    "criterion": "Wide Operating Temperature Range Matters More in Extreme Climates Than Moderate Ones",
    "explanation": "The listings in this comparison range from a -25C to 60C operating range up to a -40C to 75C range, and this difference matters significantly if your installation is in a climate with genuine temperature extremes, like far northern winters or desert summers, where a narrower-rated unit could fail to operate reliably or degrade faster over time. This matters less in a moderate climate that rarely approaches either temperature extreme, where any of the outdoor-rated picks in this comparison would perform reliably. Check your local climate's actual temperature extremes against a listing's stated operating range before assuming any IP67-rated unit handles your specific conditions equally well."
  },
  {
    "criterion": "Included Mounting and Sealing Accessories Reduce Real Installation Complexity and Hidden Costs",
    "explanation": "A listing that includes a mounting kit, earthing kit, and IP67-rated cable glands, like the Intellinet pick, gives you everything needed for a genuinely sealed outdoor installation without sourcing additional parts separately, while a listing without these accessories may leave you needing to purchase compatible glands or grounding hardware on your own to achieve the same weatherproof result. This matters more for a DIY installation where sourcing compatible additional parts adds real time and cost, and matters less if you're working with an installer who already has standard mounting and sealing supplies on hand. Check the listing's included-items section specifically rather than assuming any IP67-rated unit comes complete for installation."
  }
];

export const faq = [
  { "q": "What's the real difference between IP67 and IK10 ratings on an outdoor PoE injector?", "a": "IP67 covers dust and water resistance, including temporary submersion, while IK10 is a separate rating for physical impact and vandal resistance, and a unit can have one rating without the other." },
  { "q": "Can I power an outdoor PoE injector from a solar panel?", "a": "Only if the specific unit is designed for DC input, like the PROCET pick in this comparison; standard AC-powered outdoor injectors cannot accept solar or battery power directly." },
  { "q": "Do I need NDAA compliance for a residential outdoor PoE injector installation?", "a": "No, NDAA and TAA compliance only matter for U.S. government and government-adjacent procurement requirements, and add no functional benefit for a residential or standard commercial installation." },
  { "q": "Is a higher wattage always better for an outdoor PoE injector?", "a": "No, match the injector's power ceiling to your specific device's actual draw; a 95W injector powering a 30W PTZ camera doesn't provide any extra benefit and typically costs more than a correctly matched lower-wattage unit." },
  { "q": "What happens if an outdoor PoE injector's power supply isn't included?", "a": "You'll need to purchase a compatible power supply separately, which adds to the real total cost of the installation beyond the listed injector price, so factor that into your budget comparison." },
  { "q": "How do I know if my climate requires a wider operating temperature range?", "a": "Check your local area's historical extreme low and high temperatures against the injector's stated operating range; a unit rated only to 60C maximum could struggle in an extremely hot desert installation compared to one rated to 75C." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-injector", "title": "Best PoE Injectors" },
  { "href": "/guide/best-90w-poe-injector", "title": "Best 90W PoE++ Injectors" },
  { "href": "/guide/best-poe-splitter-for-starlink-mini", "title": "Best PoE Splitters for Starlink Mini" },
  { "href": "/guide/best-outdoor-poe-splitter", "title": "Best Outdoor PoE Splitters" }
];
