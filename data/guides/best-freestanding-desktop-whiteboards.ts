export const guideSlug = "best-freestanding-desktop-whiteboards";
export const guideTitle = "5 Best Freestanding Desktop Whiteboards in 2026";
export const metaTitle = "Best Freestanding Desktop Whiteboards (2026)";
export const metaDescription =
  "5 whiteboards that stand upright on their own base without needing a wall mount, compared for base stability under actual writing pressure.";
export const mainKeyword = "freestanding desktop whiteboard";
export const introParagraphs = [
  "We required genuine self-supporting upright stands here, excluding flat pads and anything needing wall mounting. Base stability matters more for freestanding boards than for pad-format products, since an unstable stand will wobble or tip under normal writing pressure.",
  "Every product in this comparison includes its own stand as part of the purchase.",
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
    id: "b09c1vt7x8-freestandwb",
    rank: 1,
    badge: "Best Overall",
    name: "Small Desktop Glass Whiteboard Dry-Erase-Board - Computer Keyboard Stand",
    price: "$27.99",
    rating: "4.8",
    reviews: "1,524",
    imageUrl: "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09C1VT7X8?tag=theofficejournal-20",
    description: "A genuine freestanding glass board with the highest rating and largest review base among the compact options in this comparison.",
    specs: ["Glass surface, self-supporting stand", "1,524 reviews at 4.8 stars"],
    pros: ["Highest rating in this comparison", "Genuine freestanding stand, not a flat pad"],
    cons: ["Compact size, not the largest writing area here"],
    bestFor: "Buyers who want the most proven compact freestanding board.",
  },
  {
    id: "b089nl8qmn-freestandwb",
    rank: 2,
    badge: "Most Reviewed",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board Computer Keyboard Stand",
    price: "$25.99",
    rating: "4.7",
    reviews: "2,500",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description: "The largest review base in this entire comparison, a similarly compact glass freestanding board at a slightly lower price.",
    specs: ["Glass surface, self-supporting stand", "2,500 reviews at 4.7 stars"],
    pros: ["Largest review base in this comparison"],
    cons: ["Slightly lower rating than the top pick"],
    bestFor: "Buyers who want the most-reviewed compact freestanding option.",
  },
  {
    id: "b07rt4lwyy-freestandwb",
    rank: 3,
    badge: "Largest Writing Area",
    name: "Tankee Dry Erase Board 16x12 Inches Double Sided Magnetic Small Whiteboard",
    price: "$23.99",
    rating: "4.8",
    reviews: "2,486",
    imageUrl: "https://m.media-amazon.com/images/I/41caJzrXfNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07RT4LWYY?tag=theofficejournal-20",
    description: "The largest freestanding board here at 16x12 inches, double-sided, magnetic, with a nearly identical rating to the top glass picks.",
    specs: ["16 x 12 in, freestanding, double-sided, magnetic", "2,486 reviews at 4.8 stars"],
    pros: ["Largest writing area among the freestanding options", "Nearly matches the top-rated compact picks"],
    cons: ["Larger footprint uses more desk space than the compact options"],
    bestFor: "Buyers who want a large freestanding board with substantial writing area.",
  },
  {
    id: "b0bvm9yjcs-freestandwb",
    rank: 4,
    badge: "Best Value for Large Format",
    name: "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    price: "$18.99",
    rating: "4.6",
    reviews: "1,356",
    imageUrl: "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVM9YJCS?tag=theofficejournal-20",
    description: "The same large 16x12 footprint as the Tankee pick above at a lower price, with its own stand for genuine freestanding use.",
    specs: ["16 x 12 in, freestanding, double-sided, magnetic", "1,356 reviews at 4.6 stars"],
    pros: ["Cheapest of the large freestanding options here"],
    cons: ["Slightly lower rating than the Tankee equivalent"],
    bestFor: "Budget-focused buyers who still want a large freestanding board.",
  },
  {
    id: "b09mz5zd4n-freestandwb",
    rank: 5,
    badge: "Most Compact Freestanding Option",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,191",
    imageUrl: "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MZ5ZD4N?tag=theofficejournal-20",
    description: "A genuine freestanding stand at the smallest footprint in this comparison, with a high rating and strong review base.",
    specs: ["8 x 6 in, freestanding stand", "1,191 reviews at 4.7 stars"],
    pros: ["Smallest freestanding footprint here", "High rating and strong review base"],
    cons: ["Small writing area compared to the larger picks"],
    bestFor: "Buyers who want a genuinely freestanding board with minimal desk footprint.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Required a genuine self-supporting stand", description: "We excluded flat pads and anything needing a wall mount, keeping this comparison to boards that stand on their own." },
  { title: "Base stability under writing pressure", description: "We favored well-reviewed products where base movement under normal writing pressure isn't a common complaint in the review data." },
  { title: "Writing area against footprint", description: "We compared compact and larger freestanding options separately, since both serve genuinely different desk-space needs." },
  { title: "Review volume as reliability evidence", description: "We weighted established review history for confidence in each specific stand's stability over time." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Compact vs. Large Freestanding Boards",
    cards: [
      { label: "Compact (8-inch glass boards)", text: "Minimal desk footprint, ideal when space is tight." },
      { label: "Large (16x12 in magnetic boards)", text: "More writing area, better for extended sessions, uses more desk space." },
    ],
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Confirm the board genuinely stands on its own", explanation: "This guide excludes flat pads and wall-mounted products, keeping to boards with a real self-supporting stand." },
  { criterion: "Weigh writing area against desk footprint", explanation: "Compact freestanding boards save desk space; larger ones give more room per writing session." },
  { criterion: "Check for double-sided design", explanation: "Several picks here are double-sided, effectively doubling usable writing area within the same footprint." },
  { criterion: "Use review volume as evidence of base stability", explanation: "An established review base is the best available evidence a stand doesn't wobble under normal writing pressure." },
  { criterion: "Match glass vs. magnetic surface to your needs", explanation: "Glass resists ghosting best over time; magnetic surfaces add the ability to hold notes with magnets." },
];

export const faq: FaqItem[] = [
  { q: "What makes a board \"freestanding\"?", a: "It stands upright on its own base without needing a wall mount, unlike flat pads or wall-hung boards." },
  { q: "Which has the most writing area?", a: "The Tankee Dry Erase Board at 16x12 inches, double-sided and magnetic." },
  { q: "Which is the most compact freestanding option?", a: "The TSJ OFFICE 8x6 glass board, with a real self-supporting stand at a small footprint." },
  { q: "Which has the most reviews?", a: "The TSJ OFFICE Small Desktop Whiteboard (keyboard-stand version), with 2,500 reviews." },
  { q: "What's the cheapest large freestanding option?", a: "The AMUSIGHT Double-Sided Magnetic White Board at $18.99." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboard-pads", title: "Best Desktop Whiteboard Pads (2026)" },
  { href: "/guide/best-compact-desktop-whiteboards", title: "Best Compact Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" },
];
