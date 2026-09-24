export const guideSlug = "best-desktop-whiteboards";
export const guideTitle = "6 Best Desktop Whiteboards in 2026";
export const metaTitle = "Best Desktop Whiteboards (2026)";
export const metaDescription =
  "6 desktop whiteboards we evaluated across glass and melamine surfaces, sizes, and stand types to help you pick the right one for your desk.";
export const mainKeyword = "best desktop whiteboards";
export const introParagraphs = [
  "A desktop whiteboard's surface material matters more than its listed size once you account for the frame border eating into usable writing area. Melamine surfaces tend to \"ghost\" (retain faint marker residue) after repeated use, while porcelain and glass resist ghosting far longer, a spec most general roundups never decode, so we noted the material for each pick below where the listing states it.",
  "Freestanding desktop whiteboards depend on their stand holding steady while you actually write on them, not just while sitting on a shelf for a photo. Listing data can't confirm stand stability under real writing pressure, so treat that as a buyer-advisory check worth reading current reviews for before buying, especially for glass boards where any wobble is more noticeable.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41ofaC4xQiL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b08r3v1ytb-desk-wb",
    rank: 1,
    badge: "Best Overall Desktop Whiteboard",
    name: "White Board with Stand, Small Dry Erase Board, 16\"x12\" Magnetic Whiteboard",
    price: "$17.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41ofaC4xQiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08R3V1YTB?tag=theofficejournal-20",
    description:
      "A 16x12 inch magnetic dry erase board with a stand, sized for general note-taking, task lists, or a small planning surface without taking over the whole desk.\n\nThe magnetic surface adds flexibility for holding notes or small magnets alongside written content, and the stand keeps it upright without wall mounting.",
    specs: ["16\" x 12\" writing surface", "Magnetic dry erase surface", "Includes stand", "Material not stated in listing"],
    pros: ["Balanced 16x12 size works for most desk setups", "Magnetic surface adds note-holding flexibility", "Includes a stand, no wall mounting needed", "Straightforward, budget-friendly price"],
    cons: ["Surface material isn't specified, verify erasability expectations via reviews", "Stand stability under writing pressure isn't confirmed by listing data", "Actual writable area is smaller than 16x12 once the frame border is subtracted"],
    bestFor: "Buyers wanting a balanced, general-purpose desktop whiteboard for everyday notes and lists.",
  },
  {
    id: "b0bvm9yjcs-desk-wb",
    rank: 2,
    badge: "Best Double-Sided Pick",
    name: "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    price: "$19.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVM9YJCS?tag=theofficejournal-20",
    description:
      "Same 16x12 footprint as the pick above but double-sided, giving you two writing surfaces without adding desk footprint, useful for separating a task list from a running note or sketch area.\n\nThe magnetic finish works the same way on both sides based on the listing, though we recommend checking product images to see whether either side includes any printed template.",
    specs: ["16\" x 12\" writing surface, double-sided", "Magnetic dry erase surface", "Includes stand", "Two usable writing faces"],
    pros: ["Two writing surfaces without extra desk footprint", "Magnetic on both sides per listing", "Same compact 16x12 size as our overall pick", "Stand included"],
    cons: ["Whether either side has a printed template isn't confirmed, check listing images", "Rotation mechanism durability under repeated flips isn't specified", "Material composition not detailed in listing"],
    bestFor: "Buyers who want two independent writing surfaces in one compact footprint.",
  },
  {
    id: "b01mfgicqt-desk-wb",
    rank: 3,
    badge: "Best Small Glass Pick",
    name: "Quartet Dry Erase White Board 9\"W x 11\"H Desktop Glass Pad with Removable Clip and Marker (GDE119)",
    price: "$25.62",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/21DN1-VtYsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01MFGICQT?tag=theofficejournal-20",
    description:
      "A genuinely glass 9x11 inch pad from Quartet, a recognized office-supply brand, with a removable clip for holding a sheet of paper alongside the dry erase surface.\n\nGlass resists ghosting far better than melamine over repeated use, making this a durable pick despite its compact size, and it includes a marker per the listing.",
    specs: ["9\" x 11\" glass writing surface", "Removable paper clip", "Includes marker", "Quartet brand, established office supplier"],
    pros: ["Genuine glass surface resists ghosting long-term", "Removable clip adds paper-holding versatility", "Marker included per listing", "Recognized brand with consistent build quality expectations"],
    cons: ["Compact 9x11 size limits how much you can write at once", "No stand included based on listing title", "Glass adds some weight and fragility versus melamine"],
    bestFor: "Buyers who want a durable, ghost-resistant glass surface in a compact size.",
  },
  {
    id: "b089nl8qmn-desk-wb",
    rank: 4,
    badge: "Best Pick with Storage",
    name: "TSJ OFFICE Small Desktop Whiteboard, Glass Dry Erase Board, Computer Keyboard Stand with Drawer",
    price: "$25.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description:
      "Combines a glass whiteboard with a keyboard stand and built-in drawer, functioning as a small desk organizer as much as a writing surface.\n\nThe glass face means better ghosting resistance than melamine over time, and the drawer gives a place for markers, notes, or small supplies without a separate accessory.",
    specs: ["Glass dry erase surface", "Built-in drawer for storage", "Doubles as keyboard stand", "Compact desktop footprint"],
    pros: ["Genuine glass surface for long-term ghosting resistance", "Built-in drawer adds real storage utility", "Doubles as a keyboard stand, saves desk space", "Multi-function design for small desks"],
    cons: ["Combined structure stability with drawer weight isn't independently confirmable, check reviews", "Glass adds fragility versus a melamine board", "Smaller writing area once the keyboard stand function is factored in"],
    bestFor: "Buyers wanting a whiteboard that also organizes keyboard placement and small supplies.",
  },
  {
    id: "b0774y814b-desk-wb",
    rank: 5,
    badge: "Best Large-Format Pick",
    name: "Quartet Glass Whiteboard Desktop Panel, Magnetic, 17\"x23\", Dry Erase, with Accessory Trays and Magnets (GDP1723W)",
    price: "$117.49",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31tgGY53X0S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0774Y814B?tag=theofficejournal-20",
    description:
      "A genuinely large 17x23 inch glass panel from Quartet, well beyond the small note-board category, with accessory trays and included magnets for task cards or notes.\n\nThe biggest surface area in this roundup, making it the pick for buyers who actually need to track multiple ongoing items rather than jot single reminders.",
    specs: ["17\" x 23\" glass writing surface", "Magnetic surface with included magnets", "Accessory trays included", "Includes 1 marker per listing"],
    pros: ["Largest genuine writing surface in this roundup", "Magnetic surface with magnets included, good for task cards", "Accessory trays keep markers and supplies at hand", "Established Quartet brand quality"],
    cons: ["Significantly higher price than the compact picks", "Larger footprint requires more desk or wall space", "Weight and size make it less suited to small, cramped desks"],
    bestFor: "Buyers who need real surface area for tracking multiple ongoing tasks or projects.",
  },
  {
    id: "b09vl1ql8f-desk-wb",
    rank: 6,
    badge: "Best Budget Pick",
    name: "MaxGear Dry Erase Board with Stand, 16\"x12\" Double-Sided Magnetic Whiteboard, Portable",
    price: "$12.62",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/4139fisIqSL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09VL1QL8F?tag=theofficejournal-20",
    description:
      "The lowest price in this roundup for a 16x12 double-sided magnetic board with a stand, a reasonable entry point if you just want a basic desktop whiteboard without paying for glass or built-in storage.\n\nSame general size class as our overall pick, making it a fair budget substitute if the material and ghosting-resistance tradeoffs of a non-glass surface are acceptable for your use.",
    specs: ["16\" x 12\" writing surface, double-sided", "Magnetic dry erase surface", "Includes stand", "Lowest price in this roundup"],
    pros: ["Lowest price of any pick in this guide", "Double-sided for two writing surfaces", "Portable, includes stand", "Magnetic surface for note-holding flexibility"],
    cons: ["Material not stated, likely more prone to ghosting than glass over time", "Stand stability under writing pressure not confirmed by listing", "Basic feature set with no storage or accessory trays"],
    bestFor: "Budget-conscious buyers who want a functional double-sided board without extra features.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Surface material decoded from listing data", description: "Noted glass, magnetic, or unspecified material for each pick, since this determines real long-term ghosting resistance rather than assuming any dry erase surface performs the same." },
  { title: "Real writable area versus stated dimensions", description: "Flagged that the frame border eats into the stated overall size, so the actual writing area is smaller than the headline dimension." },
  { title: "Stand and storage features verified against listing text", description: "Only credited a stand, drawer, or accessory tray where the listing explicitly states it, rather than assuming a feature because similar products commonly include it." },
  { title: "Price spread weighed against feature set", description: "Compared price against confirmed features like glass surface, storage, and size rather than ranking purely on price or purely on size." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Decode the Surface Material Before You Buy",
    note: "Melamine surfaces tend to ghost (retain faint marker residue) after repeated use, while glass and porcelain resist ghosting far longer. If the listing states glass, that's a genuine durability advantage worth the usual price premium; if material isn't stated, budget for the board wearing faster.",
  },
  {
    subheading: "Real Writing Area Is Smaller Than the Headline Size",
    note: "A board listed at 16x12 inches doesn't give you a full 16x12 of usable writing space once the frame border is subtracted. If you need a specific amount of writable room, size up slightly from what you think you need.",
  },
  {
    subheading: "Check Stand Stability Before You Write, Not After",
    note: "A freestanding board's stand needs to hold steady under actual writing pressure, not just while sitting on a shelf. This can't be verified from listing data alone, so check current buyer reviews for stability reports before buying, especially for heavier glass boards.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Balanced general-purpose board", "White Board with Stand 16\"x12\""],
        ["Two independent writing surfaces", "AMUSIGHT Double-Sided 16\"x12\""],
        ["Ghost-resistant glass in a small size", "Quartet GDE119 9\"x11\" Glass Pad"],
        ["Built-in storage and keyboard stand", "TSJ OFFICE Glass Board with Drawer"],
        ["Maximum surface area for tracking tasks", "Quartet GDP1723W 17\"x23\" Glass Panel"],
        ["Lowest price, basic function", "MaxGear 16\"x12\" Double-Sided"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the surface material before buying", explanation: "Glass and porcelain resist ghosting far longer than melamine. If the listing doesn't state material, assume standard melamine and expect faster wear." },
  { criterion: "Account for frame border eating into writable area", explanation: "A board's stated overall dimensions include the frame, so the real writing surface is smaller than the headline number. Size up if you need a specific amount of usable space." },
  { criterion: "Check stand stability via reviews, not just listing photos", explanation: "A stand that looks stable in a product photo may wobble under real writing pressure. Read recent reviews specifically for stability complaints before buying." },
  { criterion: "Decide if you need storage or just a writing surface", explanation: "Boards with built-in drawers or trays add real utility but also add bulk and cost. Skip this if you just need a flat writing surface." },
  { criterion: "Size the board to your actual task volume", explanation: "A compact 9x11 board suits single reminders; a 17x23 panel suits tracking multiple ongoing projects. Oversizing wastes desk space, undersizing forces constant erasing." },
];

export const faq: FaqItem[] = [
  { q: "Does glass really resist ghosting better than melamine?", a: "Yes, glass and porcelain-coated surfaces resist ghosting (faint marker residue buildup) far longer than melamine surfaces under repeated use." },
  { q: "Is the writable area the same as the stated board size?", a: "No, the frame border reduces usable writing space, so the actual writable area is smaller than the stated overall dimensions." },
  { q: "Do all desktop whiteboards include a stand?", a: "No, only buy expecting a stand if the listing explicitly states one is included, as we noted for each pick above." },
  { q: "Is a bigger whiteboard always better?", a: "Not necessarily. A large panel suits tracking multiple ongoing tasks, but a compact board is easier to fit on a small desk if you only need quick reminders." },
  { q: "Can I verify stand stability before buying?", a: "Not from listing data alone. Check current buyer reviews specifically for stability reports under actual writing pressure." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-glass-desktop-whiteboards", title: "Best Glass Desktop Whiteboards (2026)" },
  { href: "/guide/best-small-desktop-whiteboards", title: "Best Small Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards-with-storage", title: "Best Desktop Whiteboards with Storage (2026)" },
];
