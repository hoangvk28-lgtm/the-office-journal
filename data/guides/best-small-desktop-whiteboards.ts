export const guideSlug = "best-small-desktop-whiteboards";
export const guideTitle = "5 Best Small Desktop Whiteboards in 2026";
export const metaTitle = "Best Small Desktop Whiteboards (2026)";
export const metaDescription =
  "5 small desktop whiteboards we evaluated with actual stated dimensions, from 8x6 to 9x11 inches, to help you judge real writing capacity before buying.";
export const mainKeyword = "small desktop whiteboard";
export const introParagraphs = [
  "\"Small\" is a relative word that different listings use loosely, so instead of ranking by marketing labels, we pulled the actual stated dimensions for each pick below, ranging from 8x6 inches up to 9.5x6.7 and 9x11 inches, so you can judge real writing capacity rather than guessing from a product photo.",
  "If you want the absolute smallest option, see our dedicated guide to mini desktop whiteboards, which covers the smallest tier within this small category with an explicit dimension comparison against the picks here. This guide covers the broader small category suited to genuine note-taking, not just single reminders.",
];
export const lastUpdated = "2026-08-05";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/31xK08Bp9kL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b0b3qdbpqh-small-wb",
    rank: 1,
    badge: "Best Overall Small Whiteboard",
    name: "Desktop Black Glass Dry Erase Whiteboard with Reversible Wood Stand, Small (9.5\"x6.7\")",
    price: "$23.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/31xK08Bp9kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B3QDBPQH?tag=theofficejournal-20",
    description:
      "At 9.5x6.7 inches, this genuinely glass board sits at the larger end of what we're calling small, enough surface for a short list of tasks rather than only a single line.\n\nThe reversible wood stand and black glass finish give it a distinct look, and marker and eraser are included per the listing so it's ready to use immediately.",
    specs: ["9.5\" x 6.7\" glass writing surface", "Reversible wood stand", "Marker and eraser included", "Black glass finish"],
    pros: ["Largest writing area among our small picks, fits a short list", "Genuine glass surface for ghosting resistance", "Marker and eraser included per listing", "Reversible stand adds positioning flexibility"],
    cons: ["Largest of our small picks means less pocket-sized than the mini tier", "Glass adds fragility versus melamine", "Black glass may show more glare under bright lighting"],
    bestFor: "Buyers wanting the most writing room within the small category for short task lists.",
  },
  {
    id: "b089nl8qmn-small-wb",
    rank: 2,
    badge: "Best Pick with Storage",
    name: "TSJ OFFICE Small Desktop Whiteboard, Glass Dry Erase Board, Computer Keyboard Stand with Drawer",
    price: "$25.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description:
      "Explicitly labeled small in the listing, this genuinely glass board combines a compact writing surface with a keyboard stand and drawer, useful if you want small size plus storage in one unit.\n\nThe exact surface dimensions aren't broken out separately from the overall product size in the listing, so expect a footprint comparable to our other compact glass picks.",
    specs: ["Compact glass writing surface", "Built-in drawer for storage", "Doubles as keyboard stand", "Explicitly labeled \"small\" in listing"],
    pros: ["Explicitly labeled small, matches this category directly", "Genuine glass surface for ghosting resistance", "Built-in drawer adds storage utility", "Doubles as a keyboard stand"],
    cons: ["Exact writing surface dimensions aren't broken out in the listing", "Realistic content capacity is limited at this size, single tasks rather than a full plan", "Combined drawer weight adds stress on the stand"],
    bestFor: "Buyers wanting a compact glass board plus built-in storage in a small footprint.",
  },
  {
    id: "b01mfgicqt-small-wb",
    rank: 3,
    badge: "Best Established-Brand Small Pick",
    name: "Quartet Dry Erase White Board 9\"W x 11\"H Desktop Glass Pad with Removable Clip and Marker (GDE119)",
    price: "$25.62",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/21DN1-VtYsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01MFGICQT?tag=theofficejournal-20",
    description:
      "At 9x11 inches, this is actually taller than it is wide, genuinely glass, from established brand Quartet, with a removable clip for holding a sheet of paper alongside the writing surface.\n\nThe vertical orientation gives more room for a running list than a wide, short board of similar total area, worth considering if you write in a list format.",
    specs: ["9\" x 11\" glass writing surface", "Removable paper clip", "Includes marker", "Established Quartet brand"],
    pros: ["Vertical 9x11 orientation suits list-style writing", "Genuine glass surface for ghosting resistance", "Removable clip adds paper-holding flexibility", "Recognized Quartet brand quality"],
    cons: ["No stand included based on listing title", "No storage features unlike some competing picks", "Taller footprint may not suit very shallow desk space"],
    bestFor: "Buyers who want a vertically oriented small board for list-style note-taking.",
  },
  {
    id: "b09c1vt7x8-small-wb",
    rank: 4,
    badge: "Best Alternate Finish Small Pick",
    name: "Small Desktop Glass Whiteboard Dry-Erase Board, Computer Keyboard Stand with Drawer",
    price: "$27.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09C1VT7X8?tag=theofficejournal-20",
    description:
      "Explicitly labeled small in the listing, this genuinely glass board with a built-in drawer and keyboard stand is offered in a grey finish as an alternate style to our storage pick above.\n\nFunctionally the same small-plus-storage combination, so choose based on which finish fits your desk's look.",
    specs: ["Compact glass writing surface", "Built-in drawer for storage", "Doubles as keyboard stand", "Grey finish, explicitly labeled small"],
    pros: ["Explicitly labeled small, matches this category directly", "Genuine glass surface for ghosting resistance", "Built-in drawer adds storage", "Grey finish for a different desk look"],
    cons: ["Exact writing surface dimensions aren't broken out in the listing", "Realistic content capacity is limited at this size", "Functionally overlaps with our other storage pick"],
    bestFor: "Buyers wanting a compact glass board with storage in a grey finish.",
  },
  {
    id: "b09w5p5c5n-small-wb",
    rank: 5,
    badge: "Smallest Pick in This Guide",
    name: "Black Mini Desktop Pure Glass Whiteboard, Small Glass Dry-Erase Whiteboard, 8\"x6\" with 5 markers",
    price: "$15.18",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41StKUeQCkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09W5P5C5N?tag=theofficejournal-20",
    description:
      "At 8x6 inches, this is the smallest board in this guide, and it's the one product here also labeled \"mini\" by its own listing, so it effectively bridges into our separate mini whiteboard guide.\n\nRealistic capacity at this size is a single reminder or short status note rather than a running task list, but the low price and 5 included markers make it an easy low-commitment purchase.",
    specs: ["8\" x 6\" pure glass surface", "5 markers included per listing", "Black finish", "Smallest size in this guide"],
    pros: ["Smallest, most portable option in this guide", "5 markers included, no separate purchase needed", "Lowest price in this guide", "Genuine glass surface for durability"],
    cons: ["Smallest writing area here, single reminders only", "No stand mentioned in the listing", "Realistic capacity doesn't suit general planning, see our mini guide for this use case"],
    bestFor: "Buyers wanting the smallest option here, best suited to single reminders rather than lists; see our mini whiteboard guide for more in this size tier.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Ranked by actual stated dimensions, not marketing labels", description: "Pulled the real inches from each listing rather than trusting a generic \"small\" label, since sellers use that word inconsistently." },
  { title: "Assessed realistic writing capacity at each size", description: "Considered whether a size suits a short task list versus only a single reminder, based on the actual dimensions rather than assuming all small boards serve the same purpose." },
  { title: "Cross-referenced the mini tier explicitly", description: "Identified which pick also qualifies as mini (the smallest within small) and pointed to our dedicated mini guide rather than blending the two categories together." },
  { title: "Verified glass surface claims per listing", description: "Only credited genuine glass material where the listing explicitly states it, since that affects long-term ghosting resistance regardless of size." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Quantify \"Small\" With Actual Dimensions",
    note: "Sizes in this guide range from 8x6 inches up to 9.5x6.7 and 9x11 inches. That's a meaningful difference in usable writing space even though every board here gets labeled \"small\" by its listing.",
  },
  {
    subheading: "Realistic Writing Capacity at Small Sizes",
    note: "At the smaller end (around 8x6), expect single reminders or short status notes rather than a running task list. At the larger end of this guide (9.5x6.7 or 9x11), you get enough room for a short list. Match the size to your actual note-taking needs, not just the lowest price.",
  },
  {
    subheading: "Small vs. Mini: Where the Line Is",
    note: "This guide covers boards suited to genuine note-taking. Our mini whiteboard guide covers the smallest tier within this category, boards better suited to single-task reminders than general planning. If portability and footprint matter more than writing capacity, check that guide instead.",
  },
  {
    subheading: "Match Your Priority to a Specific Pick",
    table: {
      headers: ["Your priority", "Recommended pick"],
      rows: [
        ["Most writing room within the small category", "Black Glass Whiteboard 9.5\"x6.7\""],
        ["Small size plus storage", "TSJ OFFICE Glass Board with Drawer"],
        ["Vertical orientation for list-style writing", "Quartet GDE119 9\"x11\" Glass Pad"],
        ["Small size plus storage in grey", "Glass Board with Drawer, Grey"],
        ["Smallest, cheapest option with markers included", "Mini Pure Glass Whiteboard 8\"x6\""],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check actual stated dimensions, not the word \"small\"", explanation: "Listings use \"small\" inconsistently. The picks in this guide range from 8x6 to 9x11 inches, a real difference in usable space." },
  { criterion: "Match size to realistic writing capacity", explanation: "A 8x6 board suits single reminders; a 9x11 board suits a short list. Don't buy the smallest option if you actually need to write more than one or two lines." },
  { criterion: "Consider orientation, not just total area", explanation: "A 9x11 vertical board suits list-style writing differently than a wide, short board of similar area. Think about how you'll actually write on it." },
  { criterion: "Decide if you need the mini tier instead", explanation: "If portability matters more than writing capacity, check our dedicated mini whiteboard guide for the smallest options within this category." },
];

export const faq: FaqItem[] = [
  { q: "What counts as a \"small\" desktop whiteboard?", a: "There's no fixed standard, listings use the word loosely. In this guide, small ranges from about 8x6 inches up to 9.5x6.7 and 9x11 inches based on actual stated dimensions." },
  { q: "What's the difference between small and mini whiteboards?", a: "Mini is the smallest tier within small, generally better suited to single-task reminders than general note-taking. See our dedicated mini whiteboard guide for that comparison." },
  { q: "Can I fit a running task list on a small whiteboard?", a: "At the larger end of this guide's size range (9.5x6.7 or 9x11 inches), yes for a short list. At the smallest end (8x6 inches), expect capacity for single reminders only." },
  { q: "Are small whiteboards usually glass?", a: "Not always, but most picks in this guide are genuinely glass per their listings, which resists ghosting better than melamine over time." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-mini-desktop-whiteboards", title: "Best Mini Desktop Whiteboards (2026)" },
  { href: "/guide/best-glass-desktop-whiteboards", title: "Best Glass Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" },
];
