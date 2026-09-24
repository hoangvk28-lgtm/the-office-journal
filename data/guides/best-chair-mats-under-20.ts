export const guideSlug = "best-chair-mats-under-20";
export const guideTitle = "4 Best Chair Mats Under $20 in 2026";
export const metaTitle = "Best Chair Mats Under $20";
export const metaDescription = "We compared chair mats under $20 by floor compatibility, backing grip, and size, since hard-floor and carpet mats aren't interchangeable at this price point.";
export const mainKeyword = "best chair mats under $20";
export const introParagraphs = [
  "Under $20, chair mats are almost exclusively hard-floor mats sized for a single desk chair's rolling radius, with the real differentiator being backing grip and edge durability rather than size or thickness.",
  "We compared this lineup on floor-surface compatibility, anti-slip backing design, and stated size coverage, since a mat rated for the wrong floor type can slide underfoot or fail to protect the surface it's meant for."
];
export const lastUpdated = "2026-09-14";
export const readTime = "6 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ZDNb22h7L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-chair-mats-under-20-1",
    rank: 1,
    badge: "Best Overall",
    name: "Wansimoo Office Chair Mat for Hardwood and Tile Floor",
    price: "$18.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41ZDNb22h7L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G1RNTLF2?tag=theofficejournal-20",
    description: "This mat's rattan-like woven top surface is a genuine design departure from the plain clear PVC look of the other picks in this comparison, giving it a more finished appearance suited to visible home office spaces. Its rubber anti-slip backing delivers strong grip on hard floors including vinyl, stone, tile, wood, laminate, and concrete.\n\nCompared to the GORILLA GRIP pick below, this one adds waterproof and oil-resistant properties along with noise reduction from chair wheel movement, a detail useful in shared living spaces where quiet matters. At 36 by 48 inches, it covers a standard single-chair rolling area.\n\nBest for buyers who want a mat that looks intentional rather than purely functional in a visible space.",
    specs: ["36in x 48in, woven top surface", "Rubber anti-slip backing", "Waterproof, oil-resistant, noise-reducing"],
    pros: ["Woven top design looks more finished than plain clear mats", "Waterproof and oil-resistant for spill protection", "Reduces noise from chair wheels rolling on hard floors"],
    cons: ["Not usable on carpet, hard floors only", "Opaque design hides the floor underneath unlike clear picks"],
    bestFor: "buyers who want a finished-looking mat for a visible home office",
  },
  {
    id: "best-chair-mats-under-20-2",
    rank: 2,
    badge: "Best for Smooth Glide",
    name: "GORILLA GRIP Office Chair Mat for Hard Floors",
    price: "$21.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41GsmHV83OL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJ7D1YRW?tag=theofficejournal-20",
    description: "This mat's low profile design with reinforced edges specifically resists fraying, curling, and cracking over time, a durability detail backed by third-party scratch and crack resistance testing. Its slim construction lets chairs glide smoothly across the flat, seamless border without the mat shifting underfoot.\n\nCompared to the Wansimoo pick above, this one is 100 percent waterproof on its woven topside while trading the rattan aesthetic for a simpler black finish at 45 by 28 inches, a smaller footprint that suits tighter desk arrangements. The stain-resistant surface wipes clean quickly after spills.\n\nBest for buyers who specifically want third-party tested scratch and crack resistance.",
    specs: ["45in x 28in, low profile reinforced edges", "Third-party tested scratch and crack resistant", "100 percent waterproof woven topside"],
    pros: ["Third-party tested for scratch and crack resistance", "Reinforced edges resist fraying and curling over time", "Compact 45 by 28 inch size fits tighter desk spaces"],
    cons: ["Smaller coverage area than the Wansimoo pick", "Not usable on carpet, hard floors only"],
    bestFor: "buyers who want tested durability in a smaller footprint",
  },
  {
    id: "best-chair-mats-under-20-3",
    rank: 3,
    badge: "Best Clear Design",
    name: "Azadx Office Chair Mat for Hardwood Floor",
    price: "$23.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/517k2eNhAvL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07SBVXQ7B?tag=theofficejournal-20",
    description: "This mat's dual-sided design has a smooth bottom for placement stability and a grinding top surface that lets a rolling chair move easily without slipping, a genuine two-way approach the single-surface picks in this comparison don't offer. Its fully clear PVC construction lets the wood or texture flooring underneath show through completely.\n\nCompared to the GORILLA GRIP pick above, this one skips the opaque woven look entirely in favor of transparency, appealing to buyers who specifically want their existing floor visible rather than covered by a patterned mat. At 30 by 48 inches, it's sized for a compact single-chair area.\n\nBest for buyers who specifically want their hardwood or tile floor visible beneath the mat.",
    specs: ["30in x 48in, clear PVC construction", "Smooth bottom, textured grip top surface", "Suitable for wood, laminate, stone, tile, concrete"],
    pros: ["Fully transparent design shows the floor underneath", "Dual-sided design combines stability with easy rolling", "Easy to clean with just a cloth"],
    cons: ["Smallest coverage area in this comparison at 30x48", "Can take time to flatten fully after unpacking"],
    bestFor: "buyers who want their existing hardwood or tile floor visible",
  },
  {
    id: "best-chair-mats-under-20-4",
    rank: 4,
    badge: "Best for Larger Coverage",
    name: "Yecaye Office Chair Mat for Hardwood Floor",
    price: "$25.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/414FROmaZML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FCDNGYB?tag=theofficejournal-20",
    description: "This mat's 36 by 48 inch clear PVC surface matches the Wansimoo pick's coverage area while staying fully transparent, giving you a larger rolling radius than the compact Azadx pick without sacrificing floor visibility. Its durable PVC construction is built to resist scratches, scuffs, and discoloration without curling or cracking under normal daily use.\n\nCompared to the other three picks, this one is explicitly designed only for hard floors like wood, tile, or vinyl, with the listing specifically warning against carpet use, a restriction shared across this entire tier. The smooth gliding surface reduces leg and back strain during long work sessions.\n\nBest for buyers who want the largest clear coverage area in this tier.",
    specs: ["36in x 48in, clear PVC, hard floors only", "Smooth gliding surface", "Resists scratches, scuffs, discoloration"],
    pros: ["Largest clear coverage area in this tier at 36x48", "Durable PVC resists scratches and discoloration", "Smooth surface reduces leg and back strain"],
    cons: ["Most expensive pick in this tier", "Hard floors only, explicitly not for carpet"],
    bestFor: "buyers who want the largest clear coverage area available",
  }
];

export const howWeEvaluated = [
  { "title": "Floor Surface Compatibility", "description": "Checked whether each pick is rated for hard floors, carpet, or both, since this determines basic usability." },
  { "title": "Backing and Grip Design", "description": "Compared anti-slip backing materials and how each pick stays in place during chair movement." },
  { "title": "Size Coverage", "description": "Compared stated dimensions to determine typical single-chair rolling radius coverage." },
  { "title": "Durability Claims", "description": "Checked for third-party testing, scratch resistance, and anti-curl or anti-crack construction." },
  { "title": "Visual Design", "description": "Compared clear versus opaque woven designs and how each affects the look of the space underneath." }
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
        ["A finished look for a visible home office", "Wansimoo Office Chair Mat for Hardwood and Tile Floor"],
        ["Third-party tested scratch and crack resistance", "GORILLA GRIP Office Chair Mat for Hard Floors"],
        ["Your existing floor visible beneath the mat", "Azadx Office Chair Mat for Hardwood Floor"],
        ["The largest clear coverage area", "Yecaye Office Chair Mat for Hardwood Floor"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $19", "Wansimoo ($18.99)"],
        ["Under $22", "GORILLA GRIP ($21.99)"],
        ["Under $25", "Azadx ($23.98)"],
        ["Under $26", "Yecaye ($25.99)"],
      ],
    },
  },
  {
    subheading: "Woven Opaque vs Clear PVC Design",
    cards: [
      { label: "Woven opaque (Wansimoo)", text: "Adds a finished decorative look that hides the floor underneath, better if the mat itself should look intentional in a visible space." },
      { label: "Clear PVC (GORILLA GRIP, Azadx, Yecaye)", text: "Lets your existing hardwood or tile floor show through completely, better if you want the mat to be functionally invisible." },
    ],
    note: "If you'd rather the mat blend into the room's decor, the Wansimoo pick's woven design does that. If you want your actual floor to remain visible, any of the three clear PVC picks accomplish that.",
  },
  {
    subheading: "By Coverage Size",
    table: {
      headers: ["Your space needs", "Recommended pick"],
      rows: [
        ["Compact desk area", "Azadx (30in x 48in)"],
        ["Narrow but wide layout", "GORILLA GRIP (45in x 28in)"],
        ["Standard single-chair coverage", "Wansimoo or Yecaye (both 36in x 48in)"],
      ],
    },
  },
  {
    subheading: "For a Shared or Rented Space Specifically",
    cards: [
      { label: "Look for", text: "A fully clear, non-slip mat that protects the floor without altering its appearance, since landlords or roommates may object to a visibly different mat." },
      { label: "In this comparison", text: "The Azadx pick's fully transparent design specifically preserves the visible appearance of your existing hard floor while still protecting it." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You want third-party tested durability against scratching and cracking, where the GORILLA GRIP pick backs its claims with actual testing." },
      { label: "Save if", text: "You just need basic hard-floor protection without extra testing claims, where the Wansimoo pick covers that for about $3 less." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "Hard Floor and Carpet Mats Are Not Interchangeable, and Using the Wrong One Causes Real Problems",
    "explanation": "A hard-floor mat, like all four picks in this comparison, relies on a smooth or lightly textured underside to grip a flat surface like wood, tile, or laminate, while a carpet mat uses small spikes or studs on its underside to anchor into carpet fibers. Using a hard-floor mat on carpet means it will slide around uselessly since it has nothing to grip into fibers, while a spiked carpet mat placed on hardwood can actually scratch the floor it's meant to protect. Check the listing's title and feature bullets specifically for 'hard floor' versus 'carpet' compatibility before buying, since a mat's clear appearance alone doesn't tell you which surface it's designed for."
  },
  {
    "criterion": "Anti-Slip Backing Design Determines Whether the Mat Actually Stays in Place During Daily Use",
    "explanation": "Rubber anti-slip backing, like on the Wansimoo pick, uses friction against the floor surface to resist shifting, while a smooth-bottom design like the Azadx pick relies more on the mat's own weight and flatness once it settles. This matters because a mat that shifts every time you roll your chair back and forth becomes an annoyance rather than a convenience, especially on very smooth or waxed hard floors where friction is naturally lower. Check whether a listing specifically mentions rubber, anti-slip, or gripping backing material, and consider that mats shipped rolled may need a day or two to flatten and grip properly."
  },
  {
    "criterion": "Mat Thickness and Edge Design Affect How Smoothly Your Chair Transitions On and Off the Mat",
    "explanation": "A thicker mat with beveled or reinforced edges, like the GORILLA GRIP pick's reinforced border, creates a smoother transition when rolling on or off compared to a thin mat with a sharp edge that a chair caster can catch on repeatedly. This matters for daily comfort since catching a caster on a mat's edge dozens of times a day is a minor but real annoyance that adds up. Check the listing for mentions of 'beveled edge', 'reinforced edge', or 'ramped edge' if smooth transitions matter to you, since not every budget mat in this tier specifies this detail."
  },
  {
    "criterion": "Clear Versus Opaque Design Is a Genuine Tradeoff Between Floor Visibility and Decorative Integration",
    "explanation": "A fully clear PVC mat, like the Yecaye or Azadx picks, preserves the visual appearance of your existing floor completely, while an opaque woven design, like the Wansimoo pick, replaces that visual with its own pattern and texture. This matters if you have a hardwood or tile floor you specifically want visible versus a floor you'd rather not draw attention to, where a decorative mat can actually improve the room's look. Consider your specific flooring's condition and appearance before assuming clear is always the better choice, since a well-worn floor might look better under an opaque mat."
  },
  {
    "criterion": "Stated Coverage Dimensions Should Match Your Actual Chair's Rolling Radius, Not Just Your Desk Width",
    "explanation": "A mat's dimensions need to account for how far your chair actually rolls in daily use, including reaching to the side for a filing cabinet or leaning back significantly, not just the width of your desk itself. The picks in this tier range from a compact 30 by 48 inches on the Azadx pick to a fuller 36 by 48 inches on the Wansimoo and Yecaye picks, and a too-small mat means your chair rolls off the edge onto unprotected flooring during normal use. Measure your actual chair movement range, including how far back you roll and any side-to-side reaching, before choosing a mat size rather than just matching it to your desk's width."
  }
];

export const faq = [
  { "q": "Can I use a hard floor chair mat on top of a thin carpet or rug?", "a": "No, hard floor mats in this comparison rely on a flat, smooth surface to sit properly and grip via their backing, so placing one on carpet, even a thin one, causes it to slide around and won't provide proper protection." },
  { "q": "What's the most common mistake buyers make when choosing a chair mat under $20?", "a": "Not checking whether the mat is rated for their specific floor type before ordering, since a mat that looks identical in photos to a carpet mat may actually be designed exclusively for hard floors, or vice versa." },
  { "q": "Is the GORILLA GRIP pick worth it over the cheaper Wansimoo option?", "a": "If you specifically want third-party tested scratch and crack resistance in a more compact footprint, yes, but if you want a larger coverage area with a decorative woven look, the Wansimoo pick delivers that for about $3 less." },
  { "q": "How long does it take for these mats to flatten out after unpacking?", "a": "Most ship rolled and can take anywhere from a few hours to about 72 hours to flatten fully at room temperature, and placing heavy objects on the corners during that time speeds up the process." },
  { "q": "Can these chair mats be used under a standing desk that changes height?", "a": "Yes, since the mat sits on the floor rather than attaching to the desk itself, height adjustments don't affect the mat's function, though a taller chair-and-desk combination may mean your chair rolls further and needs a larger mat size." },
  { "q": "Do any of these mats work for both hardwood and tile floors?", "a": "Yes, all four picks in this comparison are rated for multiple hard floor types including hardwood, tile, laminate, vinyl, and concrete, though none are suitable for carpet use." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-chair-mats-under-30", "title": "Best Chair Mats Under $30" },
  { "href": "/guide/best-chair-mats-under-50", "title": "Best Chair Mats Under $50" },
  { "href": "/guide/best-desk-pegboards-under-20", "title": "Best Desk Pegboards Under $20" },
  { "href": "/guide/best-office-chairs-under-100", "title": "Best Office Chairs Under $100" }
];
