export const guideSlug = "best-desktop-whiteboards-for-meetings";
export const guideTitle = "5 Best Desktop Whiteboards for Meetings in 2026";
export const metaTitle = "Best Desktop Whiteboards for Meetings (2026)";
export const metaDescription =
  "5 whiteboards evaluated for video-call camera visibility and quick erase-and-reset between meetings, drawing from our broader desktop whiteboard research.";
export const mainKeyword = "desktop whiteboard for meetings";
export const introParagraphs = [
  "Meeting use adds requirements beyond general desk writing: the board needs to read clearly on a webcam feed, and it needs to erase and reset quickly between back-to-back calls without leaving ghosting that distracts on camera.",
  "We prioritized glass surfaces, which show less glare and ghosting under typical webcam/ring-light setups than melamine boards.",
];
export const lastUpdated = "2026-08-08";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b089nl8qmn-meetingwb",
    rank: 1,
    badge: "Best Overall",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board Computer Keyboard Stand",
    price: "$25.99",
    rating: "4.7",
    reviews: "2,500",
    imageUrl: "https://m.media-amazon.com/images/I/41+-w5AGGrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B089NL8QMN?tag=theofficejournal-20",
    description: "Positioned right behind the keyboard, easily within webcam framing for video calls, with the largest review base in this comparison.",
    specs: ["Glass surface, keyboard-adjacent position", "2,500 reviews at 4.7 stars"],
    pros: ["Largest review base in this comparison", "Naturally positioned within webcam frame"],
    cons: ["Compact size limits how much can be written before erasing"],
    bestFor: "Buyers who want the most-reviewed keyboard-adjacent option visible on camera.",
  },
  {
    id: "b09c1vt7x8-meetingwb",
    rank: 2,
    badge: "Highest Rated",
    name: "Small Desktop Glass Whiteboard Dry-Erase-Board - Computer Keyboard Stand",
    price: "$27.99",
    rating: "4.8",
    reviews: "1,524",
    imageUrl: "https://m.media-amazon.com/images/I/41aTFk156tL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09C1VT7X8?tag=theofficejournal-20",
    description: "The highest rating in this comparison, similarly positioned for webcam visibility, at a slightly higher price than the top pick.",
    specs: ["Glass surface, keyboard-adjacent position", "1,524 reviews at 4.8 stars"],
    pros: ["Highest rating in this comparison"],
    cons: ["Slightly more expensive than the largest-review-base option"],
    bestFor: "Buyers who want the highest-rated keyboard-adjacent option for meetings.",
  },
  {
    id: "b07rt4lwyy-meetingwb",
    rank: 3,
    badge: "Most Room for Diagrams",
    name: "Tankee Dry Erase Board 16x12 Inches Double Sided Magnetic Small Whiteboard",
    price: "$23.99",
    rating: "4.8",
    reviews: "2,486",
    imageUrl: "https://m.media-amazon.com/images/I/41caJzrXfNL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07RT4LWYY?tag=theofficejournal-20",
    description: "The largest writing area in this comparison, useful for sketching diagrams or process flows during a call that requires more than quick notes.",
    specs: ["16 x 12 in, double-sided, magnetic", "2,486 reviews at 4.8 stars"],
    pros: ["Largest writing area for in-meeting diagrams or process flows"],
    cons: ["Larger footprint may need to be angled for good webcam framing"],
    bestFor: "Buyers who sketch diagrams or complex ideas during video calls.",
  },
  {
    id: "b09phht8dm-meetingwb",
    rank: 4,
    badge: "Best With Organizer for Meeting Notes",
    name: "Varhomax Glass Desk Whiteboard with Storage, Desktop Organizer",
    price: "$24.99",
    rating: "4.7",
    reviews: "723",
    imageUrl: "https://m.media-amazon.com/images/I/31W4Q2LBraL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09PHHT8DM?tag=theofficejournal-20",
    description: "Combines the meeting-notes whiteboard with an organizer section, useful for keeping meeting materials nearby without extra desk clutter.",
    specs: ["Glass surface with organizer", "723 reviews at 4.7 stars"],
    pros: ["Organizer section keeps meeting materials within reach"],
    cons: ["Smaller review base than the top picks"],
    bestFor: "Buyers who want organizer storage alongside their meeting whiteboard.",
  },
  {
    id: "b09mz5zd4n-meetingwb",
    rank: 5,
    badge: "Best Budget Option",
    name: "TSJ OFFICE Small Desktop Whiteboard - Glass Dry Erase Board 8 X 6 Inches",
    price: "$16.99",
    rating: "4.7",
    reviews: "1,191",
    imageUrl: "https://m.media-amazon.com/images/I/4180Al3c9zL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09MZ5ZD4N?tag=theofficejournal-20",
    description: "A cheaper, smaller glass board for quick meeting reminders rather than detailed notes, with a high rating despite the compact size.",
    specs: ["8 x 6 in, glass surface", "1,191 reviews at 4.7 stars"],
    pros: ["Cheapest option in this comparison", "Glass resists ghosting better than melamine on camera"],
    cons: ["Small writing area limits use to brief reminders rather than detailed notes"],
    bestFor: "Budget-focused buyers who just need quick meeting reminders visible on camera.",
  },
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Webcam visibility and typical framing", description: "We favored keyboard-adjacent products that naturally sit within standard webcam framing during a video call." },
  { title: "Glass surface for reduced glare and ghosting on camera", description: "We prioritized glass boards, which show less glare under ring lights and resist ghosting better than melamine over repeated meetings." },
  { title: "Writing area for diagram-heavy use", description: "We noted where a board offers meaningfully more room for sketching process flows or diagrams during calls." },
  { title: "Review volume as reliability evidence", description: "We weighted established review history for confidence in each pick's long-term durability under frequent meeting use." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "Choose by Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Most-reviewed keyboard-adjacent option", "TSJ OFFICE Small Desktop Whiteboard"],
        ["Highest rating", "Small Desktop Glass Whiteboard, Keyboard Stand"],
        ["Room for diagrams", "Tankee Dry Erase Board 16x12"],
        ["Organizer for meeting materials", "Varhomax Glass Desk Whiteboard with Storage"],
        ["Cheapest option", "TSJ OFFICE Glass Dry Erase Board 8x6"],
      ],
    },
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  { criterion: "Check camera visibility with your actual webcam setup", explanation: "Test a candidate board's position against your webcam framing before committing, since desk and camera angles vary." },
  { criterion: "Favor glass for reduced glare and ghosting on camera", explanation: "Glass surfaces show less glare under typical office lighting and resist ghosting better than melamine over repeated meetings." },
  { criterion: "Match writing area to how you actually use it in meetings", explanation: "Quick reminders need less space than sketched diagrams — pick size accordingly." },
  { criterion: "Consider an organizer if meeting materials clutter your desk", explanation: "The Varhomax option combines whiteboard and storage for meeting-related items." },
  { criterion: "Weigh review volume for confidence in long-term durability", explanation: "Frequent meeting use means more erase cycles — an established review base is useful evidence of durability." },
];

export const faq: FaqItem[] = [
  { q: "Will a small whiteboard actually show up on a video call?", a: "Keyboard-adjacent products like the top picks here are positioned to sit within typical webcam framing, but test your specific setup before relying on it." },
  { q: "Should I get glass or a magnetic board?", a: "Glass shows less glare and ghosting on camera. Magnetic boards add the ability to hold notes, useful if you reference printed materials during calls." },
  { q: "What's the best option for sketching diagrams during calls?", a: "The Tankee Dry Erase Board at 16x12 inches, the largest writing area in this comparison." },
  { q: "Is there an option with storage for meeting materials?", a: "Yes, the Varhomax Glass Desk Whiteboard with Storage." },
  { q: "What's the cheapest meeting-friendly option?", a: "The TSJ OFFICE 8x6 glass board at $16.99." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-desktop-whiteboards-for-home-offices", title: "Best Desktop Whiteboards for Home Offices (2026)" },
  { href: "/guide/best-personal-desktop-whiteboards", title: "Best Personal Desktop Whiteboards (2026)" },
  { href: "/guide/best-desktop-whiteboards", title: "Best Desktop Whiteboards (2026)" },
];
