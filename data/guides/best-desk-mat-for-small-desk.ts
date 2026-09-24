import type { ReviewCon } from "@/components/product/ProductReviewCard";
const B = "https://xlipolezpdkfmneqkncd.supabase.co/storage/v1/object/public/affiliate-media/guides/best-desk-mat-for-small-desk";

export const guideSlug = "best-desk-mat-for-small-desk";
export const guideTitle = "Best Desk Mat for Small Desk -- 8 Picks for Dorms & Compact Setups (2026)";
export const guideDescription =
  "8 desk mats evaluated specifically for 30-40 inch desks and dorm setups -- rated on size fit, non-slip performance, material quality, and value. Includes size guide by desk width.";
export const metaTitle = "Best Desk Mat for Small Desk (2026)";
export const metaDescription = "8 desk mats for 30-40 inch desks and dorms -- rated on size fit, non-slip grip, and material quality. Size guide and leather vs felt comparison included.";
export const lastUpdated = "2026-05-30";
export const readTime = "11 min";
export const heroImage = `${B}/nordik-gray-leather-35x17-best-overall.webp`;

export type MatMaterial = "vegan-leather" | "felt" | "cork-leather" | "fabric";

export interface DeskMat {
  rank: number;
  id: string;
  name: string;
  brand: string;
  badge: string;
  score: number;
  size: string;
  material: MatMaterial;
  materialLabel: string;
  price: string;
  style: string;
  amazonUrl: string;
  imageUrl: string;
  pros: string[];
  cons: ReviewCon[];
  reviewText: string[];
  specs: Array<{ label: string; value: string }>;
}

export const mats: DeskMat[] = [
  {
    rank: 1,
    id: "nordik-gray-leather",
    name: "Nordik Vegan Leather -- Alaskan Gray",
    brand: "Nordik",
    badge: "Best Overall",
    score: 9.2,
    size: "35x17\"",
    price: "$22.97",
    style: "Vegan leather top, suede non-slip back, stitched edges",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B08SK6NNLR?tag=theofficejournal-20",
    imageUrl: `${B}/nordik-gray-leather-35x17-best-overall.webp`,
    pros: [
      "Suede non-slip backing actually grips -- zero shifting during full typing sessions",
      "Waterproof PU surface wipes clean in seconds with a damp cloth",
      "Fine stitched edges hold up after months of daily use",
      "Cable management cutouts on the top edge keep charging cables tidy",
    ],
    cons: [
      { text: "Only available in 35x17\" -- not an option if your desk is under 30\" wide", severity: "minor" },
      { text: "Neutral gray may not suit warmer wood desk finishes", severity: "minor" },
    ],
    reviewText: [
      "The Nordik hits an unusual sweet spot between everyday durability and a premium feel -- without the $80-$140 price of Grovemade or Orbitkey. What sets it apart from similarly priced mats is the suede backing: during a full week of daily use on a 36\" desk, it didn't shift once during typing, mouse dragging, or resting arms. Most budget mats slide by day two.",
      "The vegan leather surface is smooth enough for optical mice without any skipping, and it cleans up with a single wipe -- coffee spills included. The stitched edge shows no signs of peeling after extended use, which is the most common failure point on cheaper wrapped-edge mats. At 35x17\", it sits flush with a clean 0.5\" margin on any desk 36-42\" wide. This is the mat we'd recommend to almost anyone starting with a small-desk setup.",
    ],
    specs: [
      { label: "Size", value: "35\" x 17\" (89cm x 43cm)" },
      { label: "Material", value: "Vegan leather (PU) top, suede non-slip back" },
      { label: "Edges", value: "Fine stitched" },
      { label: "Color", value: "Alaskan Gray" },
    ],
  },
  {
    rank: 2,
    id: "nordik-cork-leather",
    name: "Nordik Cork-Leather -- Pebble Black",
    brand: "Nordik",
    badge: "Best Eco-Friendly",
    score: 8.8,
    size: "35x17\"",
    price: "$25.97",
    style: "Vegan leather top, natural cork back, stitched edges",
    material: "cork-leather",
    materialLabel: "Cork-Leather",
    amazonUrl: "https://www.amazon.com/dp/B094JQ2T73?tag=theofficejournal-20",
    imageUrl: `${B}/nordik-cork-leather-35x17-best-eco-friendly.webp`,
    pros: [
      "Natural cork backing replaces synthetic rubber -- renewable, biodegradable",
      "Same smooth vegan leather top surface as the standard Nordik",
      "Cork grip is exceptional on hard polished surfaces where suede can slip",
      "Slightly firmer wrist feel -- preferred by users who type for long sessions",
    ],
    cons: [
      { text: "Cork adds ~1mm of thickness -- marginally stiffer to roll for storage", severity: "minor" },
      { text: "Limited to fewer color options compared to the standard vegan leather line", severity: "minor" },
    ],
    reviewText: [
      "The Cork-Leather version shares the same vegan leather top as our overall pick but swaps the suede backing for natural cork -- a material choice that makes a real difference on glossy or glass desk surfaces where suede-backed mats can still slide slightly. Cork has a natural micro-texture that locks onto smooth surfaces the same way rubber does, but without the synthetic off-gassing some users notice from rubber-backed mats.",
      "In terms of feel, the cork adds a subtle firmness underhand -- closer to writing on a firm notepad than a soft padded surface. This is actually preferred by many touch typists who find very soft mats reduce typing precision over long sessions. If eco-conscious materials matter to you, or if you're placing this on a glass or polished desk, this is the version to choose over the standard suede-backed Nordik.",
    ],
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, natural cork back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Pebble Black" },
    ],
  },
  {
    rank: 3,
    id: "dawntrees-felt",
    name: "DAWNTREES Felt Desk Mat 36x12\"",
    brand: "DAWNTREES",
    badge: "Best Felt Option",
    score: 8.5,
    size: "36x12\"",
    price: "$14.89",
    style: "Merino wool felt surface, rubber non-slip back, stitched edges",
    material: "felt",
    materialLabel: "Felt",
    amazonUrl: "https://www.amazon.com/dp/B09MVT9Y98?tag=theofficejournal-20",
    imageUrl: `${B}/dawntrees-felt-36x12-best-felt.webp`,
    pros: [
      "Soft matte felt texture looks genuinely premium in desk setup photos",
      "Narrower 12\" profile leaves breathing room on tight 36-40\" desks",
      "Dark gray colorway hides daily wear and pencil marks well",
      "Doesn't trap dust or hair the way smooth leather surfaces do",
    ],
    cons: [
      { text: "Felt absorbs liquid -- a spilled coffee requires blotting immediately and air drying", severity: "major" },
      { text: "12\" depth is tight if you use a mouse with a wide swing arc or play games", severity: "minor" },
      { text: "Not suitable for high-DPI precision gaming mouse use", severity: "minor" },
    ],
    reviewText: [
      "Felt desk mats exist in a separate aesthetic category from leather -- softer, warmer, and more tactile in a way that photographs beautifully and reads as intentional rather than functional. The DAWNTREES has the right thickness (about 4mm) and edge quality to avoid the cheap craft-felt feeling that plagues most budget felt mats. The rubber backing keeps it in place through normal use without adding thickness.",
      "The 36x12\" format is a deliberate choice for small desks: it covers the keyboard and mouse zone with a 1\" margin but doesn't visually dominate the surface the way a 17\" deep mat does. On a 36\" desk, this gives you roughly 5\" of uncovered desk space at the back -- enough to place a small plant or notebook without it sitting on the mat. The key trade-off is spill resistance: felt absorbs liquid, full stop. If your desk habits include open drinks nearby, stick with leather.",
    ],
    specs: [
      { label: "Size", value: "36\" x 12\"" },
      { label: "Material", value: "Felt top, rubber non-slip back" },
      { label: "Thickness", value: "~4mm" },
      { label: "Edges", value: "Stitched" },
    ],
  },
  {
    rank: 4,
    id: "deskmatec-snow-leopard",
    name: "DESKMATEC Snow Leopard",
    brand: "DESKMATEC",
    badge: "Best Minimalist Gaming",
    score: 8.4,
    size: "35x15\"",
    price: "$7.95",
    style: "Precision cloth surface, thick rubber base, stitched edges",
    material: "fabric",
    materialLabel: "Fabric / Cloth",
    amazonUrl: "https://www.amazon.com/dp/B0FW569CSW?tag=theofficejournal-20",
    imageUrl: `${B}/deskmatec-snow-leopard-best-for-gaming-office.webp`,
    pros: [
      "Precision cloth surface provides consistent, low-friction mouse tracking",
      "Subtle Snow Leopard texture adds personality without screaming \"gaming\"",
      "Thick rubber base (3mm+) stays flat and doesn't curl at corners",
      "Works equally well for competitive gaming and office productivity",
    ],
    cons: [
      { text: "Cloth absorbs oils from your palm over time -- needs a gentle hand wash every few months", severity: "minor" },
      { text: "Fabric surface shows lint and pet hair more than leather", severity: "minor" },
    ],
    reviewText: [
      "The DESKMATEC addresses a real problem for students who game and work from the same desk: leather mats are easy to clean but feel slightly grippy under a gaming mouse, while standard cloth gaming pads are optimized for tracking but look out of place in a professional context. The Snow Leopard lands between these -- a precision cloth surface that a 400 DPI gamer will appreciate, with a restrained aesthetic that won't look aggressive on a Zoom call.",
      "The base rubber is noticeably thicker than budget cloth mats, which prevents the mat from curling at the edges after a few weeks -- a chronic problem with thin-backed gaming mats. The 35x15\" footprint is slightly narrower than the Nordik's 17\" depth but still covers the full keyboard-and-mouse zone on any desk over 36\". If your desk doubles as a gaming station, this is the right call. If you never touch a game, the Nordik's leather surface is easier to maintain.",
    ],
    specs: [
      { label: "Size", value: "~35\" x 15\"" },
      { label: "Surface", value: "Precision cloth, low-friction" },
      { label: "Base", value: "Thick rubber, non-curl" },
      { label: "Color", value: "Black with Snow Leopard texture" },
    ],
  },
  {
    rank: 5,
    id: "small-desk-mat-10x12",
    name: "Small Desk Mat 10x12\"",
    brand: "Generic",
    badge: "Best Ultra-Compact",
    score: 8.0,
    size: "10x12\"",
    price: "$8–$14",
    style: "PU leather or fabric, non-slip base",
    material: "vegan-leather",
    materialLabel: "PU Leather / Fabric",
    amazonUrl: "https://www.amazon.com/dp/B0827NT4KZ?tag=theofficejournal-20",
    imageUrl: `${B}/small-desk-mat-10x12-best-ultra-compact.webp`,
    pros: [
      "The only mat on this list proportioned for desks under 30\" wide",
      "Covers the mouse and wrist zone without consuming visible desk surface",
      "Available in pink, silver, black -- color options match most setups",
      "Lowest price on this list -- under $12 shipped",
    ],
    cons: [
      { text: "10x12\" protects a small zone only -- not a full mat experience", severity: "minor" },
      { text: "Thinner construction than the leather or felt options", severity: "minor" },
      { text: "Doesn't provide the visual desk unification of a full-coverage mat", severity: "minor" },
    ],
    reviewText: [
      "This is the mat for a desk that a full-size mat simply won't fit. On a 24\" or 30\" desk, a 35x17\" mat would hang over the edge or eat the entire usable surface -- neither works. The 10x12\" format covers exactly the mouse and immediate wrist zone, protects the desk from scratches, and adds a small amount of wrist lift without imposing on the rest of the surface.",
      "It's not a premium product and it doesn't need to be. The construction is adequate -- thin but not flimsy -- and the non-slip base keeps it from sliding during mouse use. Where it earns its place is as the right-sized tool for a specific constraint. It also works as a supplemental mat: if you have a larger mat but the mouse zone on your desk gets heavy wear, adding this as an overlay extends the life of the main mat. At under $12, it's an easy add-on.",
    ],
    specs: [
      { label: "Size", value: "10\" x 12\"" },
      { label: "Material", value: "PU leather or fabric (varies by color)" },
      { label: "Colors", value: "Pink, silver, black" },
    ],
  },
  {
    rank: 6,
    id: "nordik-pebble-black",
    name: "Nordik Vegan Leather -- Pebble Black",
    brand: "Nordik",
    badge: "Best Dark Aesthetic",
    score: 8.7,
    size: "35x17\"",
    price: "$22.97",
    style: "Vegan leather top, felt non-slip back, stitched edges",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B086X1HZ8W?tag=theofficejournal-20",
    imageUrl: `${B}/nordik-pebble-black-35x17-best-dark-aesthetic.webp`,
    pros: [
      "Identical build quality to the Alaskan Gray -- same stitching, same durability",
      "Black works with dark wood, white, natural bamboo -- the most versatile colorway",
      "Absorbs daily grime better than lighter colors -- less visible in heavy use",
      "Felt backing variant provides a slightly different grip texture",
    ],
    cons: [
      { text: "Black shows palm prints and fingerprints more visibly -- needs wiping more often than gray", severity: "minor" },
      { text: "Same 35x17\" only -- no size flexibility", severity: "minor" },
    ],
    reviewText: [
      "The Pebble Black is not a separate product from the Alaskan Gray -- it's the same mat with a different surface color and a felt backing instead of suede. The construction quality is identical: same stitched edges, same thickness, same PU leather layer. What changes is the aesthetic context. Black integrates cleanly into virtually any desk finish, while the Alaskan Gray's neutral tone can look slightly cool against warm wood.",
      "The felt backing on this version grips slightly differently than the suede of the gray -- marginally more rigid, very slightly less textured grip on smooth surfaces. In practice, both hold adequately on standard desk surfaces. If your desk is dark wood, white, or you're building a high-contrast monochrome setup, the Pebble Black delivers the same functional performance as our top pick in a colorway that ties together better.",
    ],
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, felt non-slip back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Pebble Black" },
    ],
  },
  {
    rank: 7,
    id: "nordik-tangerine-orange",
    name: "Nordik Vegan Leather -- Tangerine Orange",
    brand: "Nordik",
    badge: "Best for Color",
    score: 8.5,
    size: "35x17\"",
    price: "$22.97",
    style: "Vegan leather top, suede non-slip back, stitched edges",
    material: "vegan-leather",
    materialLabel: "Vegan Leather (PU)",
    amazonUrl: "https://www.amazon.com/dp/B08SK582M1?tag=theofficejournal-20",
    imageUrl: `${B}/nordik-tangerine-orange-35x17-best-colorful-setup.webp`,
    pros: [
      "Same construction as pick #1 -- all performance and durability benchmarks identical",
      "Tangerine orange pops against natural wood or white desk surfaces",
      "One of the most popular colorways for dorm room setups and desk aesthetic builds",
      "Makes a distinctive, practical gift for students equipping a new space",
    ],
    cons: [
      { text: "Orange is polarizing -- works best on specific desk aesthetics, not universally applicable", severity: "minor" },
      { text: "Lighter color makes coffee rings and marker marks more visible than dark colorways", severity: "minor" },
    ],
    reviewText: [
      "The Tangerine Orange is the same mat as pick #1 -- same PU leather layer, same suede backing, same stitching -- in a colorway that changes the entire mood of a desk setup. The orange tone is warm enough to pair with natural oak or birch without clashing, and bright enough to read as intentional against a white IKEA desk. It's the mat that makes a phone photography setup look designed rather than assembled.",
      "The trade-off is specificity. Unlike gray or black, orange commits you to a particular aesthetic direction. If you're building a warm, natural, or energetic desk setup, the Tangerine is worth the color choice. If you want something that blends quietly into any context, go gray. Either way, the functional performance is identical -- this choice is purely about what you want your desk to look like.",
    ],
    specs: [
      { label: "Size", value: "35\" x 17\"" },
      { label: "Material", value: "Vegan leather top, suede non-slip back" },
      { label: "Edges", value: "Stitched" },
      { label: "Color", value: "Tangerine Orange" },
    ],
  },
  {
    rank: 8,
    id: "premium-leather-saddle-brown",
    name: "Premium Leather Desk Mat -- Saddle Brown",
    brand: "Aothia",
    badge: "Best Vintage Look",
    score: 8.3,
    size: "35x17\"",
    price: "$22.97",
    style: "PU leather top, non-slip base, stitched edges, built-in cable slot",
    material: "vegan-leather",
    materialLabel: "PU Leather",
    amazonUrl: "https://www.amazon.com/dp/B07N5K716Y?tag=theofficejournal-20",
    imageUrl: `${B}/premium-leather-saddle-brown-best-vintage-look.webp`,
    pros: [
      "Saddle brown leather look develops character over time -- improves with age",
      "Built-in cable management slot routes charging cables out of sight",
      "Warm traditional aesthetic pairs naturally with solid wood and walnut desk surfaces",
      "Extended size with a slight edge that prevents items from rolling off the front",
    ],
    cons: [
      { text: "Very specific warm-tone aesthetic -- doesn't suit modern or monochrome setups", severity: "minor" },
      { text: "Slightly stiff out of the box -- needs a few days of use before it softens and lies flat", severity: "minor" },
    ],
    reviewText: [
      "The Aothia Saddle Brown is the only mat on this list that leans into a traditional, warmer aesthetic rather than the minimalist gray-and-black look that dominates the category. The PU leather has a subtle grain texture that reads as genuine leather at a glance -- particularly in photographs -- and the saddle brown deepens slightly with use rather than looking worn.",
      "The built-in cable slot at the back edge is a feature worth highlighting: it's a single channel that routes a charging cable from the back of the mat to where your phone or device sits, keeping the cable underneath the mat surface rather than snaking across it. On a small desk where every visible cable increases visual noise, this is a functional upgrade. The mat ships slightly stiff and needs 2-3 days of use before the edges lie fully flat, but after that break-in period it stays flush without any curling.",
    ],
    specs: [
      { label: "Size", value: "~35\" x 17\"" },
      { label: "Material", value: "PU leather top, non-slip base" },
      { label: "Feature", value: "Built-in cable slot" },
      { label: "Color", value: "Saddle Brown" },
    ],
  },
];

// AtAGlance items -- uses AtAGlance component format (pros/cons as {text, severity?})
export const atAGlanceItems = mats.map((m) => ({
  rank: m.rank,
  badge: m.badge,
  name: m.name,
  brand: m.brand,
  imageUrl: m.imageUrl,
  affiliateUrl: m.amazonUrl,
  price: m.price,
  anchorId: m.id,
  pros: m.pros.map((text) => ({ text })),
  cons: m.cons.map((c) => ({ text: c.text, severity: c.severity })),
}));

export const sizeGuide = [
  { deskWidth: "24\" (very compact)", matWidth: "18-22\"", matDepth: "10-12\"", picks: "#5 (10x12\" compact)" },
  { deskWidth: "30\"", matWidth: "24-28\"", matDepth: "12-14\"", picks: "#5 or #3" },
  { deskWidth: "36\"", matWidth: "30-34\"", matDepth: "12-17\"", picks: "#1, #2, #3, #4, #6, #7, #8" },
  { deskWidth: "40\" (standard small desk)", matWidth: "35-38\"", matDepth: "14-17\"", picks: "Any pick on this list" },
  { deskWidth: "48\"+", matWidth: "40-46\"", matDepth: "16-20\"", picks: "Consider a larger mat" },
];

export const materialComparison = [
  { material: "Vegan Leather (PU)", feel: "Smooth, firm", spill: "Excellent", glide: "Good", bestFor: "Office, studying, general use" },
  { material: "Felt/Wool", feel: "Soft, textured", spill: "Absorbs spills", glide: "Medium", bestFor: "Minimalist aesthetics, low-moisture" },
  { material: "Cork", feel: "Slightly textured", spill: "Good", glide: "Medium", bestFor: "Eco-conscious, warm aesthetics" },
  { material: "Fabric/Cloth", feel: "Soft, low-friction", spill: "Absorbs spills", glide: "Best for gaming", bestFor: "Gaming, precision mouse movement" },
];

export const buyingCriteria = [
  { icon: "📏", title: "Size -- measure twice, buy once", body: "Measure usable desk width, subtract 2-4 inches. For depth, measure from front edge to where your monitor sits. A 35x17\" mat fits any desk 36-42\" wide with a clean 0.5-1\" margin." },
  { icon: "🔒", title: "Non-slip backing -- essential on small desks", body: "On a small desk, a mat that shifts pulls everything on it out of alignment. Look for suede, cork, or rubber backing. Avoid mats with only a smooth PVC base." },
  { icon: "🧵", title: "Edge finishing -- stitched beats wrapped", body: "Stitched edges (sewn thread around the perimeter) last for years. Wrapped edges (glued underneath) peel at corners within 3-6 months. All picks on this list use stitched edges." },
  { icon: "📐", title: "Thickness -- 2-4mm is optimal", body: "Under 2mm and you lose ergonomic benefit. Over 4mm and the edge creates an uncomfortable wrist ridge. 3mm is the sweet spot for most people." },
  { icon: "🧹", title: "Cleaning and maintenance", body: "Leather/PU: wipe with damp microfiber cloth. Felt: spot-clean only, air dry fully. Fabric: hand wash or delicate machine cycle (check product instructions)." },
  { icon: "🎨", title: "Color -- match your desk, not just preference", body: "A dark mat on a dark desk creates a clean unified look. Neutral gray works on virtually anything. Lighter colors like orange or tan work best on natural wood or white desks." },
];

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What size desk mat should I get for a 36-inch desk?",
    a: "A 35x17\" mat is ideal for a 36\" desk -- it sits flush with a ~0.5\" margin on each side. This prevents edge bunching and looks proportional. The 35x17\" size used by all four Nordik picks was specifically designed for the most common small and medium desk widths.",
  },
  {
    q: "What size desk mat for a 40-inch desk?",
    a: "Any mat from 35-38\" wide works on a 40\" desk. A 35x17\" mat gives you a 2.5\" margin on each side -- clean and allows room to rest your arms on the bare desk on either side.",
  },
  {
    q: "Is a desk mat the same as a mouse pad?",
    a: "Not quite. A mouse pad is usually 9-12\" wide and designed purely for mouse movement. A desk mat is larger (24-36\"+ wide) and covers the full keyboard-and-mouse zone. Desk mats function as mouse pads but also protect the desk surface and add a unified aesthetic.",
  },
  {
    q: "Can I use a desk mat on a glass desk?",
    a: "Yes, but ensure the backing is rubber or cork, not smooth PVC -- smooth backings slip on glass. The cork-backed Nordik (#2 on this list) is the best option for glass or polished surfaces.",
  },
  {
    q: "How do I stop my desk mat from sliding?",
    a: "Make sure the mat has a non-slip backing (suede, cork, or rubber) and that the desk surface is clean and dry. Oil, dust, or moisture all reduce grip. If sliding persists, a few strips of non-slip shelf liner tape under the mat corners solves it permanently.",
  },
  {
    q: "Do desk mats make typing louder or quieter?",
    a: "Quieter. A 3-4mm desk mat absorbs keystroke impact and reduces the hollow resonance that bare desks amplify. If you type on a mechanical keyboard in a dorm room, a thick mat is one of the easiest ways to reduce noise bleed.",
  },
  {
    q: "Will a desk mat protect my desk from heat?",
    a: "Leather and PU mats provide moderate heat protection against warm coffee mugs. They are not designed for very hot objects. For laptops, a mat helps slightly with heat dissipation, but a dedicated laptop stand is better for airflow.",
  },
];
