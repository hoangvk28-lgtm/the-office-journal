const BASE = "/images/media/guides/under-desk-charging-station";

export const guideTitle = "Best Under-Desk Charging Stations and Mounts for Cleaner Setups";
export const guideDescription =
  "The cleanest possible desk has nothing on it except your monitor, keyboard, and mouse. Under-desk charging makes this achievable -- power strips clamped to the edge, wireless chargers built into the surface, everything hidden.";
export const metaTitle = "Best Under-Desk Charging Stations (2026)";
export const metaDescription =
  "5 under-desk charging solutions: clamp, through-desk wireless, grommet, and screw-mount. With desk materials compatibility table and 3 installation guides.";
export const lastUpdated = "2026-06-04";
export const readTime = "13 min";
export const heroImage = `${BASE}/07-hero-bai-8-under-desk-charging.webp`;
export const cableManagementImage = `${BASE}/06-under-desk-charging-cable-management.webp`;

export interface UnderDeskProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  brand: string;
  mountType: string;
  charging: string;
  price: string;
  priceRange: string;
  imageUrl: string;
  amazonUrl: string;
  whyItWins: string;
  bodyParagraphs: string[];
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export const products: UnderDeskProduct[] = [
  {
    id: "best-clamp",
    rank: 1,
    badge: "Best Clamp Station",
    name: "Anker Nano Power Strip (10-in-1, 70W)",
    brand: "Anker",
    mountType: "Clamp (0.6--1.8\")",
    charging: "6x AC + 2x USB-C + 2x USB-A",
    price: "~$70",
    priceRange: "~$70",
    imageUrl: `${BASE}/01-best-clamp-anker-nano-10-in-1-clamp-70w.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FFGZH2S2?tag=theofficejournal-20",
    whyItWins: "Released April 2026, the Anker Nano Clamp is the best-designed under-desk charging station available. It clamps to the desk edge -- no screws, no drilling, no permanent modification -- and splits into two zones: two USB-A ports and two USB-C ports (70W combined) sit above the desk surface for easy device access, while four AC outlets hang below the surface out of sight. One 5-foot power cord routes to the wall.",
    bodyParagraphs: [
      "The clamp fits desk thicknesses from 0.6 to 1.8 inches (15--45mm), covering virtually every standard desk. Silicone pads on both clamp surfaces prevent scratching. The 1,500-joule surge protection handles the inevitable power spike.",
      "The design is the headline: above-deck USB ports for phones and quick plugs, below-deck AC outlets for laptop adapters and power bricks. The only cable leaving the unit is the power cord.",
    ],
    specs: [
      { label: "Total output", value: "70W" },
      { label: "Upper zone", value: "2x USB-C (45W + 25W split), 2x USB-A (12W each), 2x AC" },
      { label: "Lower zone", value: "4x AC outlets" },
      { label: "Surge protection", value: "1,500 joules" },
      { label: "Desk fit", value: "0.6--1.8 inch thickness (15--45mm)" },
      { label: "Power cord", value: "5 ft" },
    ],
    pros: [
      "Zero permanent desk modification -- clamps on and off",
      "Above-deck USB for device access + below-deck AC for hidden power bricks",
      "70W USB-C handles most laptop charging",
      "1,500J surge protection",
      "Works on sit/stand desks -- moves with the desk",
    ],
    cons: [
      "70W total -- tight if two USB-C laptops charge simultaneously",
      "Clamp adds ~10mm visible hardware at desk edge",
      "No wireless charging",
    ],
    bestFor: "Renters, sit-stand desk users, or anyone who wants hidden charging without drilling. The cleanest non-permanent under-desk solution available in 2026.",
  },
  {
    id: "best-budget-clamp",
    rank: 2,
    badge: "Best Budget Clamp",
    name: "Tessan 14-in-1 Desk Clamp Power Strip",
    brand: "Tessan",
    mountType: "Clamp (adjustable)",
    charging: "10x AC + 2x USB-C + 2x USB-A",
    price: "~$14-25",
    priceRange: "~$14--25",
    imageUrl: `${BASE}/02-best-budget-clamp-tessan-14-in-1-desk-clamp.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0FB37PSC7?tag=theofficejournal-20",
    whyItWins: "At $14--25, the Tessan 14-in-1 Desk Clamp delivers the same core concept as the Anker -- AC outlets and USB ports accessible from a clamp-mount position -- at less than a quarter of the price. Three AC outlets, two USB-C ports (PD 20W each), and two QC 3.0 USB-A ports (18W each) cover the standard desk charging needs.",
    bodyParagraphs: [
      "The adjustable clamp fits most standard desk thicknesses. The build quality is noticeably lighter than the Anker, and the surge protection is basic, but for a secondary desk, a rental apartment setup, or anyone testing the under-desk concept before committing to a premium option, it works.",
    ],
    specs: [
      { label: "Ports", value: "3x AC, 2x USB-C (PD 20W each), 2x USB-A (QC 3.0 18W each)" },
      { label: "Total USB", value: "~80W combined" },
      { label: "Clamp", value: "Adjustable, fits standard desks" },
      { label: "Surge protection", value: "Basic" },
    ],
    pros: [
      "$14--25 -- lowest price in this guide",
      "Covers AC + USB-C + USB-A from one clamp unit",
      "Quick Charge 3.0 on USB-A ports",
      "No drilling required",
    ],
    cons: [
      "Lighter build than premium options",
      "No split above/below desk zones like Anker",
      "Basic surge protection",
      "USB-C 20W -- not enough for laptop fast charging",
    ],
    bestFor: "Budget setups, secondary desks, or a low-risk way to test whether under-desk clamping works for your setup before upgrading.",
  },
  {
    id: "best-wireless",
    rank: 3,
    badge: "Best Through-Desk Wireless",
    name: "Humanscale NeatCharge",
    brand: "Humanscale",
    mountType: "Adhesive under-desk",
    charging: "10W Qi (through surface)",
    price: "~$120-150",
    priceRange: "~$120--150",
    imageUrl: `${BASE}/03-best-through-desk-wireless-humanscale-neatcharge.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BZ9LNMG5?tag=theofficejournal-20",
    whyItWins: "The NeatCharge is installed under the desk surface with adhesive -- the charging pad is entirely invisible from above. Your phone charges when you set it in the right spot on your desk surface, with zero hardware visible from any angle. The result is genuinely magical in practice: a desk with no charging hardware anywhere.",
    bodyParagraphs: [
      "The 5.14-inch diameter pad delivers 10W Qi wireless charging through wood surfaces up to 30mm thick. A position marker (included) goes on the desk surface above the charger -- a small dot or line to indicate where to place the phone.",
      "At ~$120--150, it is the most expensive pick in this guide. But no other product removes charging hardware from the visual field of the desk more completely.",
    ],
    specs: [
      { label: "Output", value: "10W Qi wireless (through desk surface)" },
      { label: "Max surface thickness", value: "30mm wood" },
      { label: "Pad diameter", value: "5.14 inches (130mm)" },
      { label: "Mount", value: "Adhesive under-desk surface" },
      { label: "Cable", value: "USB-C connection to power source" },
      { label: "Position marker", value: "Included" },
    ],
    pros: [
      "Completely invisible -- zero hardware on desk surface",
      "Charges through wood up to 30mm thick",
      "No drilling required -- adhesive mount",
      "Works with any Qi-enabled phone",
    ],
    cons: [
      "Most expensive pick (~$120--150)",
      "10W max -- standard Qi, not Qi2 15W",
      "Phone must be placed precisely over hidden pad",
      "Only works through wood, stone, laminate -- not metal desk tops",
      "Does not charge Apple Watch or AirPods separately",
    ],
    bestFor: "Minimalist desk setups where the goal is zero visible charging hardware, and the desk surface is wood or laminate (not metal).",
  },
  {
    id: "best-grommet",
    rank: 4,
    badge: "Best In-Desk Grommet",
    name: "i-VALUX In-Desk Wireless Charger (15W)",
    brand: "i-VALUX",
    mountType: "Grommet hole (80mm / 3.15\")",
    charging: "15W Qi fast charge",
    price: "~$35-55",
    priceRange: "~$35--55",
    imageUrl: `${BASE}/04-best-grommet-i-valux-in-desk-wireless-15w.webp`,
    amazonUrl: "https://www.amazon.com/dp/B083QJ8BZV?tag=theofficejournal-20",
    whyItWins: "Many desks come with a circular grommet hole -- typically 80mm (3.15 inches) -- for cable routing. The i-VALUX In-Desk Wireless Charger converts that unused hole into a flush-mounted wireless charger. The top surface sits level with the desk, looking like a premium inset pad rather than a product bolted on. At 15W Qi fast charging, it delivers more speed than many through-desk competitors.",
    bodyParagraphs: [
      "Compatible with iPhone 17/16/15/14/13/12/11 and Samsung Galaxy S-series. This is the most elegant single-product desk upgrade if your desk already has an 80mm grommet hole and you want to put it to use. No adhesive, no clamp -- just drop it in.",
    ],
    specs: [
      { label: "Wireless charging", value: "15W Qi fast charge (iPhone 8+, Samsung Galaxy, all Qi devices)" },
      { label: "Fits", value: "Standard 80mm (3.15\") desk grommet hole" },
      { label: "Mount", value: "Grommet drop-in (no tools for most installations)" },
      { label: "Surface", value: "Flush with desk top -- no raised edges" },
    ],
    pros: [
      "Uses existing grommet hole -- zero drilling required",
      "Flush surface -- looks intentional, not retrofitted",
      "15W Qi fast charging -- faster than most through-desk options",
      "Wide device compatibility (iOS + Android)",
      "Easy drop-in installation",
    ],
    cons: [
      "Requires standard 80mm grommet hole -- measure your desk first",
      "Not compatible with metal desks (blocks wireless charging)",
      "Phone must be placed directly on the inset pad",
      "No USB ports for wired charging accessories",
    ],
    bestFor: "Desks with an existing 80mm grommet hole that want to upgrade it to a flush wireless charger with no modification.",
  },
  {
    id: "best-permanent",
    rank: 5,
    badge: "Best Screw-Mount Strip",
    name: "QBA 8-in-1 Under-Desk Mount Power Strip",
    brand: "QBA",
    mountType: "Screw / adhesive mount",
    charging: "4x AC + 2x USB-C + 2x USB-A",
    price: "~$25-35",
    priceRange: "~$25--35",
    imageUrl: `${BASE}/05-best-screw-mount-qba-8-in-1-desk-mount-strip.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0D5HLTHJ8?tag=theofficejournal-20",
    whyItWins: "For a permanent desk setup where you want maximum power and USB ports completely hidden, the QBA 8-in-1 screw-mount strip gives the most port coverage in the least visible footprint. It mounts flat against the underside of the desk with included screws, all cables route along the underside to a single wall cord, and the desk surface is completely clear.",
    bodyParagraphs: [
      "The port lineup is genuinely useful: 4 AC outlets, 1 PD 20W USB-C, 1 QC 3.0 USB-A, and 2 standard USB-A -- covering a laptop adapter plus phone and accessories simultaneously. ETL listed for safety. The 6-foot cord gives enough reach from the desk underside to the nearest wall outlet.",
    ],
    specs: [
      { label: "AC outlets", value: "4" },
      { label: "USB ports", value: "1x USB-C PD 20W, 1x USB-A QC 3.0, 2x USB-A standard" },
      { label: "Mount", value: "Screw-mount bracket (screws included)" },
      { label: "Power cord", value: "6 ft" },
      { label: "Safety", value: "ETL listed, surge protection, overload protection" },
    ],
    pros: [
      "Completely hidden -- flush against desk underside",
      "No edge hardware visible from desk surface or sides",
      "USB-C PD 20W and QC 3.0 for fast phone charging",
      "ETL listed -- third-party safety certification",
      "Permanent, does not shift or lose grip",
    ],
    cons: [
      "Requires drilling/screwing -- permanent modification",
      "Cable routing to wall must be planned before mounting",
      "Not suitable for renters",
      "USB-C limited to 20W -- not laptop-charging speed",
    ],
    bestFor: "Owned desks, permanent home office setups, or anyone committed to the cleanest possible desk surface and willing to do a one-time 30-minute installation.",
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

export const typesTable = [
  { type: "Clamp station", mount: "Clamps to desk edge (no tools)", does: "AC outlets + USB above and below desk", bestFor: "Renters, adjustable desks" },
  { type: "Screw-mount power strip", mount: "Screws under desk surface", does: "AC outlets + USB, fully hidden", bestFor: "Permanent setups" },
  { type: "Through-desk wireless pad", mount: "Adhesive under desk surface", does: "Charges phone through desk top", bestFor: "Minimalist surface" },
  { type: "In-desk grommet charger", mount: "Fits in standard grommet hole", does: "Wireless charging flush with desk", bestFor: "Desks with existing grommet" },
  { type: "Under-desk dock mount", mount: "Attaches dock to underside", does: "Hides docking station + routes cables", bestFor: "Laptop dock users" },
];

export const materialsTable = [
  { material: "Solid wood (up to 30mm)", works: true, notes: "Best material -- signal passes cleanly" },
  { material: "Laminate / MDF (up to 30mm)", works: true, notes: "Standard IKEA desk tops: fine" },
  { material: "Plywood (up to 30mm)", works: true, notes: "Thin ply: excellent" },
  { material: "Glass", works: true, notes: "Signal passes through glass" },
  { material: "Quartz / stone", works: true, notes: "Stone does not block magnetic fields" },
  { material: "Bamboo (up to 30mm)", works: true, notes: "" },
  { material: "Metal (steel, aluminium)", works: false, notes: "Metal desks: under-desk wireless does not work" },
  { material: "Metal frame inside wood", works: null, notes: "Wood above metal frame: check frame location vs. pad placement" },
  { material: "Thick solid wood (30mm+)", works: null, notes: "35--40mm: charges slowly; 45mm+: likely won't charge" },
];

export const faq: { question: string; answer: string }[] = [
  {
    question: "Can wireless charging work through a wooden desk?",
    answer: "Yes -- Qi and Qi2 wireless charging works through wood up to approximately 30mm thick. Most standard desk tops (18--25mm) work reliably at full charging speed. The desk material must be non-metallic: wood, laminate, MDF, glass, stone, or bamboo all work. Metal desk tops block wireless charging completely.",
  },
  {
    question: "How do I mount a charging station under my desk without drilling?",
    answer: "Use a clamp-style station -- the Anker Nano 10-in-1 Clamp or Tessan 14-in-1 both clamp to the desk edge without screws. For wireless charging, the NeatCharge adhesive pad requires no drilling either. Only the screw-mount power strip requires drilling.",
  },
  {
    question: "What is the best way to hide a charging station on a desk?",
    answer: "Three options in order of visibility reduction: (1) Clamp station at the back desk edge -- hardware visible only from behind. (2) Screw-mount strip under the desk -- completely hidden. (3) Through-desk wireless pad -- charging hardware is entirely invisible.",
  },
  {
    question: "Does under-desk mounting damage the desk?",
    answer: "Clamp mounts: no damage if silicone pads are used. Adhesive pads: removable without damage if removed carefully within 6 months (longer adhesion can leave residue). Screw mounts: small pilot holes remain -- only suitable for owned furniture.",
  },
  {
    question: "Will an under-desk clamp work on a sit-stand desk?",
    answer: "Yes -- clamp stations like the Anker Nano move with the desk as it raises and lowers. The power cord should have enough slack for the full height range. For most sit-stand desks with a 70--120cm height range, a 5-foot power cord is sufficient.",
  },
];
