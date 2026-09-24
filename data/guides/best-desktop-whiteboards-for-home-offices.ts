export const guideSlug = "best-desktop-whiteboards-for-home-offices";
export const guideTitle = "5 Best Desktop Whiteboards for Home Offices in 2026";
export const metaTitle = "Best Desktop Whiteboards for Home Offices (2026)";
export const metaDescription =
  "5 desktop whiteboards ranked by usable writing area per square inch of desk footprint, since home-office desks are usually smaller than a corporate workstation.";
export const mainKeyword = "desktop whiteboard for home office";
export const introParagraphs = [
  "Home-office desks tend to be smaller and more crowded than a dedicated office workstation, so we specifically weighted usable writing area against footprint rather than just picking the largest or highest-rated board overall.",
  "We also factored in whether a product includes organizer features, since a home-office desk often needs to double as storage in a way a corporate desk doesn't.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b089nl8qmn-homeofficewb",
    rank: 1,
    badge: "Best Overall",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board Computer Keyboard Stand",
    price: "$25.99",
    rating: "4.7",
    reviews: "2,500",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description: "A compact keyboard-adjacent glass board with the largest review base in this comparison, fitting a small home-office desk without dominating it.",
    specs: ["Glass surface, keyboard-adjacent stand", "2,500 reviews at 4.7 stars"],
    pros: ["Largest review base in this comparison", "Compact footprint suited to smaller home-office desks"],
    cons: ["No built-in organizer, pure whiteboard functionality"],
    bestFor: "Buyers who want the most proven compact board for a small home-office desk.",
  },
  {
    id: "b09phht8dm-homeofficewb",
    rank: 2,
    badge: "Best With Storage",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    price: "$24.99",
    rating: "4.7",
    reviews: "723",
    imageUrl: "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PHHT8DM?tag=theofficejournal-20",
    description: "Combines whiteboard and organizer storage in a single footprint, useful for a home-office desk that needs to serve double duty.",
    specs: ["Glass surface with organizer", "723 reviews at 4.7 stars"],
    pros: ["Combines writing surface and storage in one product, saving desk space overall"],
    cons: ["Smaller review base than the top pick"],
    bestFor: "Buyers who want to consolidate whiteboard and storage into one desk item.",
  },
  {
    id: "b0dmzyk585-homeofficewb",
    rank: 3,
    badge: "Best Budget Organizer",
    name: "Amazon Basics Desktop Dry Erase Whiteboard with Organizer and Accessories",
    price: "$15.74",
    rating: "4.7",
    reviews: "279",
    imageUrl: "https://m.media-amazon.com/images/I/313bG76j1CL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DMZYK585?tag=theofficejournal-20",
    description: "The cheapest organizer-equipped board here, from a well-established general retail brand, good value for a budget home-office setup.",
    specs: ["Dry erase surface with organizer accessories", "279 reviews at 4.7 stars"],
    pros: ["Cheapest organizer-equipped option in this comparison"],
    cons: ["Smaller review base than the Varhomax or TSJ picks"],
    bestFor: "Budget-conscious home-office buyers who still want organizer functionality.",
  },
  {
    id: "b0bvm9yjcs-homeofficewb",
    rank: 4,
    badge: "Best Larger Board for Bigger Desks",
    name: "AMUSIGHT Double-Sided Magnetic White Board with Stand, 16\" x 12\"",
    price: "$18.99",
    rating: "4.6",
    reviews: "1,356",
    imageUrl: "https://m.media-amazon.com/images/I/41FLEFa9xDL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BVM9YJCS?tag=theofficejournal-20",
    description: "For home offices with more desk depth to work with, this offers the most writing area in this comparison at a reasonable price.",
    specs: ["16 x 12 in, double-sided, magnetic", "1,356 reviews at 4.6 stars"],
    pros: ["Most writing area in this comparison at a mid-range price"],
    cons: ["Larger footprint isn't suited to the smallest home-office desks"],
    bestFor: "Home offices with more desk space to dedicate to a whiteboard.",
  },
  {
    id: "b091y79cxz-homeofficewb",
    rank: 5,
    badge: "Smallest, Cheapest Option",
    name: "Small Dry Erase Board, 10\" X 10\" Small Whiteboard with Stand, Portable Magnetic",
    price: "$8.99",
    rating: "4.6",
    reviews: "307",
    imageUrl: "https://m.media-amazon.com/images/I/41sEyXE5tML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B091Y79CXZ?tag=theofficejournal-20",
    description: "The cheapest board in this comparison, portable and magnetic, suited to the smallest home-office corners where every inch of desk matters.",
    specs: ["10 x 10 in, portable, magnetic", "307 reviews at 4.6 stars"],
    pros: ["Cheapest option in this comparison", "Portable design if you need to move it around"],
    cons: ["Smaller review base than the more established picks"],
    bestFor: "Buyers with the tightest home-office desk space and budget.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Writing area relative to home-office desk footprint", description: "We weighted usable writing area against realistic home-office desk size, which tends to be smaller than a corporate workstation." },
  { title: "Organizer features for dual-purpose desks", description: "We noted where a board includes storage, since a home-office desk often needs to serve multiple functions in less space." },
  { title: "Price against home-office budgets", description: "We covered a wide price range, from at a budget-friendly price to premium since home-office spending varies more than corporate procurement." },
  { title: "Review volume as reliability evidence", description: "We weighted established review history for confidence in each pick's build quality and durability." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most proven compact option", "TSJ OFFICE Small Desktop Whiteboard"],
        ["Combined whiteboard and storage", "Varhomax Glass Desk Whiteboard with Storage"],
        ["Budget organizer option", "Amazon Basics Desktop Dry Erase Whiteboard"],
        ["More desk space, want a larger board", "AMUSIGHT Double-Sided Magnetic White Board"],
        ["Tightest budget and desk space", "Small Dry Erase Board 10x10"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Weigh writing area against your actual home-office desk size", explanation: "Home-office desks tend to be smaller than corporate workstations — measure your available space before choosing a larger board." },
  { criterion: "Consider a combined organizer if desk space is tight", explanation: "The Varhomax and Amazon Basics options combine whiteboard and storage, saving overall desk footprint." },
  { criterion: "Match price to your setup budget", explanation: "Options here range from under $10 to nearly $30 — pick based on what fits your overall home-office budget, not just the board alone." },
  { criterion: "Check glass vs. magnetic surface for your needs", explanation: "Glass resists ghosting best; magnetic surfaces add note-holding functionality if you reference printed materials." },
  { criterion: "Use review volume for build-quality confidence", explanation: "An established review base is useful evidence a board holds up to regular home-office use." },
];

export const faq: FaqItem[] = [
  { q: "What's the best board for a small home-office desk?", a: "The TSJ OFFICE Small Desktop Whiteboard, compact and keyboard-adjacent with the largest review base in this comparison." },
  { q: "Is there an option that saves desk space by combining storage?", a: "Yes, the Varhomax Glass Desk Whiteboard with Storage combines writing surface and organizer in one footprint." },
  { q: "What's the cheapest option?", a: "The Small Dry Erase Board 10x10 at $8.99." },
  { q: "Which has the most writing area for a bigger home-office desk?", a: "The AMUSIGHT Double-Sided Magnetic White Board at 16x12 inches." },
  { q: "Is there a budget option with an organizer?", a: "Yes, the Amazon Basics Desktop Dry Erase Whiteboard at $15.74." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboards-for-meetings", title: "Best Desktop Whiteboards for Meetings (2026)" },
  { href: "/guide/best-personal-desktop-whiteboards", title: "Best Personal Desktop Whiteboards (2026)" },
  { href: "/guide/best-glass-desktop-whiteboards-with-storage", title: "Best Glass Desktop Whiteboards with Storage (2026)" },
];
