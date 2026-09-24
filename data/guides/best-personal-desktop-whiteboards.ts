export const guideSlug = "best-personal-desktop-whiteboards";
export const guideTitle = "5 Best Personal Desktop Whiteboards in 2026";
export const metaTitle = "Best Personal Desktop Whiteboards (2026)";
export const metaDescription =
  "5 desktop whiteboards for single-user desk placement, overlapping with our compact whiteboards guide but focused on keyboard-adjacent positioning and organizer features for one person's workflow.";
export const mainKeyword = "personal desktop whiteboard";
export const introParagraphs = [
  "This product pool overlaps substantially with our compact desktop whiteboards guide, since both draw from small glass and magnetic boards sized for a single desk. The distinction we're drawing here is specifically keyboard-adjacent placement and personal organizer features (storage trays, to-do sections) rather than pure footprint.",
  "Several products here are explicitly designed to sit behind or beside a keyboard, which is a meaningfully different placement consideration than the general compact-board comparison.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b09c1vt7x8-personalwb",
    rank: 1,
    badge: "Best Overall",
    name: "Small Desktop Glass Whiteboard Dry-Erase-Board - Computer Keyboard Stand",
    price: "$27.99",
    rating: "4.8",
    reviews: "1,524",
    imageUrl: "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09C1VT7X8?tag=theofficejournal-20",
    description: "Purpose-built to sit behind a keyboard on a single desk, with the highest rating and largest review base of any product in this specific comparison.",
    specs: ["Glass surface, keyboard-stand design", "1,524 reviews at 4.8 stars"],
    pros: ["Highest rating and largest review base in this comparison", "Purpose-built for keyboard-adjacent placement"],
    cons: ["Highest price in this comparison"],
    bestFor: "Buyers who want the most proven personal keyboard-adjacent whiteboard.",
  },
  {
    id: "b089nl8qmn-personalwb",
    rank: 2,
    badge: "Best Value",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board Computer Keyboard Stand",
    price: "$25.99",
    rating: "4.7",
    reviews: "2,500",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description: "The largest review base in this entire comparison at 2,500 reviews, slightly cheaper than the top pick with a nearly identical keyboard-stand design.",
    specs: ["Glass surface, keyboard-stand design", "2,500 reviews at 4.7 stars"],
    pros: ["Largest review base in this comparison", "Slightly cheaper than the top pick with a nearly identical design"],
    cons: ["Marginally lower rating than the top pick"],
    bestFor: "Buyers who want the most-reviewed option and a slightly lower price than the top pick.",
  },
  {
    id: "b093b83zsn-personalwb",
    rank: 3,
    badge: "Best With Built-In Organizer",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer to-do List",
    price: "$24.99",
    rating: "4.8",
    reviews: "1,020",
    imageUrl: "https://m.media-amazon.com/images/I/41KvzD4pxFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B093B83ZSN?tag=theofficejournal-20",
    description: "Combines the whiteboard with a built-in storage organizer for personal desk items, tied for the highest rating in this comparison.",
    specs: ["Glass surface with storage organizer", "To-do list section", "1,020 reviews at 4.8 stars"],
    pros: ["Tied for highest rating in this comparison", "Built-in organizer adds personal desk storage"],
    cons: ["Smaller review base than the top two picks"],
    bestFor: "Buyers who want combined whiteboard and personal desk organizer functionality.",
  },
  {
    id: "b09phht8dm-personalwb",
    rank: 4,
    badge: "Same Organizer Concept, Alternate Listing",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    price: "$24.99",
    rating: "4.7",
    reviews: "723",
    imageUrl: "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PHHT8DM?tag=theofficejournal-20",
    description: "Same core storage-organizer concept as the pick above at an identical price — check the current listing for exact feature differences before choosing between them.",
    specs: ["Glass surface with storage organizer", "723 reviews at 4.7 stars"],
    pros: ["Same organizer concept as the higher-rated listing above at the same price"],
    cons: ["Smaller review base and slightly lower rating than the other Varhomax listing"],
    bestFor: "Buyers comparing Varhomax listings — check current feature differences before choosing.",
  },
  {
    id: "b0dmzyk585-personalwb",
    rank: 5,
    badge: "Best Budget Organizer Option",
    name: "Amazon Basics Desktop Dry Erase Whiteboard with Organizer and Accessories",
    price: "$15.74",
    rating: "4.7",
    reviews: "279",
    imageUrl: "https://m.media-amazon.com/images/I/313bG76j1CL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DMZYK585?tag=theofficejournal-20",
    description: "The cheapest organizer-equipped whiteboard in this comparison, from a well-established general retail brand, with a smaller review base as it's a newer listing.",
    specs: ["Dry erase surface with organizer accessories", "279 reviews at 4.7 stars"],
    pros: ["Cheapest organizer-equipped option here"],
    cons: ["Smaller review base than the Varhomax or TSJ options"],
    bestFor: "Budget-focused buyers who still want organizer accessories included.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Keyboard-adjacent placement design", description: "We prioritized products specifically designed to sit behind or beside a keyboard on a single desk, since that's the real \"personal\" use case distinguishing this from a general compact board." },
  { title: "Built-in organizer features", description: "We noted where a product combines whiteboard surface with storage, trays, or to-do sections, since that adds real personal-desk value beyond just writing space." },
  { title: "Overlap disclosure with our compact whiteboards guide", description: "We flagged the significant product overlap so buyers don't treat these as entirely separate purchases." },
  { title: "Review volume as primary evidence between near-identical listings", description: "For products with nearly identical designs (the two Varhomax listings), we used review count and rating to differentiate rather than assuming they're interchangeable." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "This Overlaps With Our Compact Whiteboards Guide",
    note: "If you don't need keyboard-adjacent placement or built-in organizer features specifically, check our compact desktop whiteboards guide for a broader product range including smaller and cheaper options.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm keyboard-adjacent fit if that's your placement plan", explanation: "Several products here are specifically designed to sit behind a keyboard — check dimensions against your actual desk setup." },
  { criterion: "Decide if you need a built-in organizer", explanation: "The Varhomax and Amazon Basics options add storage/to-do features; the TSJ and top pick are pure whiteboard surfaces." },
  { criterion: "Compare near-identical listings by review data", explanation: "Some products here use very similar designs from the same brand — use review count and rating to pick between them rather than assuming they're the same." },
  { criterion: "Check overlap with our compact whiteboards guide", explanation: "If keyboard placement and organizer features aren't essential, a broader compact-board comparison may surface cheaper options." },
  { criterion: "Weigh glass surface durability against price", explanation: "All the top picks here use glass, which resists ghosting better than cheaper melamine boards over time." },
];

export const faq: FaqItem[] = [
  { q: "How is this different from your compact desktop whiteboards guide?", a: "This guide focuses specifically on keyboard-adjacent placement and personal organizer features, while the compact guide covers a broader range of small boards generally." },
  { q: "Which has the most reviews?", a: "The TSJ OFFICE Small Desktop Whiteboard, with 2,500 reviews at 4.7 stars." },
  { q: "Do any of these include storage?", a: "Yes, the Varhomax listings and the Amazon Basics option include built-in storage or organizer features alongside the whiteboard surface." },
  { q: "What's the cheapest option here?", a: "The Amazon Basics Desktop Dry Erase Whiteboard at $15.74, which includes organizer accessories." },
  { q: "Are the two Varhomax listings different products?", a: "They appear to be very similar designs at the same price — check the current listing for exact feature differences before choosing between them." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-compact-desktop-whiteboards", title: "Best Compact Desktop Whiteboards (2026)" },
  { href: "/guide/best-glass-desktop-whiteboards-with-storage", title: "Best Glass Desktop Whiteboards with Storage (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" },
];
