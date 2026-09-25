const BASE = "/images/guides/best-wooden-footrests-for-desk";

export const guideSlug = "best-wooden-footrests-for-desk";
export const guideTitle = "The Best Wooden Footrests for Desk, Compared";
export const metaTitle = "Best Wooden Footrests for Desk (2026)";
export const metaDescription =
  "We compared 9 wooden footrests for desk on features, comfort and practical fit to help you choose the right one for your space.";
export const lastUpdated = "2026-07-08";
export const readTime = "10 min";
export const heroImage = `${BASE}/hero.webp`;

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "strongtek-cherry",
    rank: 1,
    badge: "Best Cherry Wood",
    name: "StrongTek Ergonomic Wood Foot Rest",
    price: "$39.99",
    rating: "4.7 stars",
    reviews: "3,135 reviews",
    imageUrl: `${BASE}/strongtek-cherry.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07N1QCJGZ?tag=theofficejournal-20",
    description:
      "The StrongTek cherry wood footrest uses a curved rocker base that delivers active balance board movement rather than a static platform. Cherry wood provides structural hardness and visual warmth that foam cannot replicate. 7 stars it is the established choice for a quality wood rocker at a reasonable price. The 350-pound capacity and no-assembly design reflect the straightforward build quality of this model.",
    specs: ["Cherry wood", "Rocker balance board", "350 lb capacity", "18 inches wide"],
    pros: ["4.7 stars highest in roundup", "Active rocking motion", "Cherry wood aesthetic", "No assembly required"],
    cons: ["Fixed height", "Hard surface for bare feet", "Rocking only no flat mode"],
    bestFor: "Users who want a highly-rated cherry wood rocker as a straightforward starting point",
  },
  {
    id: "strongtek-adjustable",
    rank: 2,
    badge: "Best Adjustable Wood",
    name: "StrongTek Adjustable Wood Footrest",
    price: "$39.99",
    rating: "4.4 stars",
    reviews: "1,406 reviews",
    imageUrl: `${BASE}/strongtek-adjustable.webp`,
    amazonUrl: "https://www.amazon.com/dp/B09X1RQSPL?tag=theofficejournal-20",
    description:
      "The StrongTek adjustable wood footrest adds height settings to the hardwood platform format, using lauan hardwood plywood with three adjustable height positions. The 400-pound capacity reflects sturdier construction than the cherry wood rocker, and anti-slip rubber feet prevent movement on hard floors.\n\nFor users who need a wooden footrest that adapts to different desk and chair heights, the adjustable model provides the flexibility of height adjustment without switching to foam.",
    specs: ["Lauan hardwood plywood", "3 height settings", "400 lb capacity", "Anti-slip rubber feet"],
    pros: ["Adjustable heights in wood format", "400 lb capacity strongest in roundup", "Three height settings", "Anti-slip rubber"],
    cons: ["4.4 stars lower than cherry model", "No rocker mode", "Plywood vs solid cherry"],
    bestFor: "Users who want a wooden footrest with height adjustment rather than fixed rocking motion",
  },
  {
    id: "strongtek-stepstool",
    rank: 3,
    badge: "Best Multi-Angle",
    name: "StrongTek 7 inch Wood Step Stool Footrest",
    price: "$38.99",
    rating: "4.6 stars",
    reviews: "542 reviews",
    imageUrl: `${BASE}/strongtek-stepstool.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0985NVG8L?tag=theofficejournal-20",
    description:
      "The StrongTek 7-inch step stool footrest provides three fixed angle settings at 0, 12, and 17 degrees, offering a different type of adjustment than height settings. The 7-inch height makes it one of the tallest wooden footrests in this roundup and suits users on higher seats who need more significant lift. It is the most affordable StrongTek model with angle adjustment. The multi-purpose design works as both a footrest and a step stool, adding utility beyond the desk setup.",
    specs: ["7 inches tall", "3 angle settings", "Solid wood", "350 lb capacity"],
    pros: ["Three angle settings for tilt", "7-inch height for higher seats", "Multi-purpose as step stool", "4.6 stars"],
    cons: ["No rocking motion", "Fixed height at 7 inches", "Less refined aesthetically"],
    bestFor: "Users on higher chairs who need a tall wooden footrest with angle adjustment options",
  },
  {
    id: "strongtek-rocking",
    rank: 4,
    badge: "Best Hardwood Rocker",
    name: "StrongTek Ergonomic Rocking Foot Rest 3 Positions",
    price: "$36.99",
    rating: "4.4 stars",
    reviews: "262 reviews",
    imageUrl: `${BASE}/strongtek-rocking.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CZ5YDV1L?tag=theofficejournal-20",
    description:
      "The StrongTek three-position rocking footrest adds a flat static mode alongside forward and backward rocking, making it more versatile than the single-mode cherry wood rocker. The hardwood construction provides the same durability benefits as other StrongTek models.\n\nFor users who want rocking motion during active work but a stable platform during focused tasks, the three-position design avoids needing to switch between two separate footrests.",
    specs: ["3 positions: fwd rock, bwd rock, flat", "Hardwood", "Non-slip pads", "No assembly"],
    pros: ["Three modes including flat static", "Hardwood durability", "More versatile than single-mode", "No assembly"],
    cons: ["262 reviews smaller sample", "4.4 stars vs 4.7 for cherry model", "Mode change requires manual adjustment"],
    bestFor: "Users who want a hardwood rocker with a flat mode option for switching between active and stable positioning",
  },
  {
    id: "huanuo-bamboo",
    rank: 5,
    badge: "Best Bamboo",
    name: "HUANUO Bamboo Under Desk Footrest",
    price: "$28.49",
    rating: "4.5 stars",
    reviews: "251 reviews",
    imageUrl: `${BASE}/huanuo-bamboo.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DQTJ21TX?tag=theofficejournal-20",
    description:
      "89 inches and a pebble massage surface. The combination of bamboo material, height adjustment, and massage surface makes this the most feature-rich bamboo option in the roundup. It is the most affordable bamboo footrest with adjustable height. For users who want an eco-friendly material with practical functionality, the HUANUO bamboo model delivers more than a basic bamboo platform.",
    specs: ["Bamboo", "4 heights (3.15 to 6.89 in)", "Pebble massage surface", "Adjustable angle"],
    pros: ["Sustainable bamboo", "4 height settings", "Pebble massage surface", "Under $30"],
    cons: ["251 reviews only", "Massage pebbles may be uncomfortable", "4.5 stars"],
    bestFor: "Users who want eco-friendly bamboo with height adjustment and a massage surface under $30",
  },
  {
    id: "amazer-bamboo-cushion",
    rank: 6,
    badge: "Best Bamboo Rocker with Cushion",
    name: "Amazer Bamboo Footrest with Cushion 3-in-1",
    price: "$31.34",
    rating: "4.6 stars",
    reviews: "226 reviews",
    imageUrl: `${BASE}/amazer-bamboo-cushion.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DXFK7HNP?tag=theofficejournal-20",
    description:
      "The Amazer bamboo footrest with cushion adds a reversible washable cushion cover to the bamboo rocking design, making the surface comfortable for bare feet without sacrificing the eco-friendly material. The 3-in-1 design covers rocking, static, and multi-angle positions.\n\nFor users who want bamboo aesthetics but find bare bamboo too firm for extended bare-foot use, the cushion version provides a direct solution while keeping the bamboo structure.",
    specs: ["Bamboo with cushion cover", "3-in-1 rock static multi-angle", "Washable cover", "250 lb capacity"],
    pros: ["Bamboo with comfortable cushion", "Washable cover included", "Three positions", "4.6 stars"],
    cons: ["226 reviews only", "Cushion requires washing maintenance", "$31.34 mid-range"],
    bestFor: "Users who want bamboo aesthetics with a removable cushion for bare-foot comfort",
  },
  {
    id: "amazer-bamboo",
    rank: 7,
    badge: "Best Budget Bamboo",
    name: "Amazer Bamboo Footrest 2-in-1",
    price: "$19.99",
    rating: "4.6 stars",
    reviews: "226 reviews",
    imageUrl: `${BASE}/amazer-bamboo.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0DXFGXJK7?tag=theofficejournal-20",
    description:
      "The Amazer 2-in-1 bamboo footrest without cushion offers reversible rocking and stationary modes at a lower price than the cushion version. The golden ratio arc design provides smooth rocking motion while non-slip strips keep the footrest in place on hard floors. It is the most affordable bamboo footrest in this roundup. Users who are comfortable with bare bamboo surfaces do not need to pay more for the cushion version.",
    specs: ["Bamboo", "2-in-1 rocking and stationary", "Non-slip strips", "Eco bamboo"],
    pros: ["Under $20 bamboo option", "4.6 stars", "Rocking and stationary modes", "Eco-friendly material"],
    cons: ["No cushion", "226 reviews only", "Rocking on hard floors may be loud"],
    bestFor: "Users who want the most affordable bamboo footrest with basic rocking and static modes",
  },
  {
    id: "humanscale-fr300",
    rank: 8,
    badge: "Best Premium Rocker",
    name: "Humanscale FR300 Foot Rocker",
    price: "$135.00",
    rating: "4.4 stars",
    reviews: "558 reviews",
    imageUrl: `${BASE}/humanscale-fr300.webp`,
    amazonUrl: "https://www.amazon.com/dp/B000HVI1RG?tag=theofficejournal-20",
    description:
      "The Humanscale FR300 combines a solid wood frame with a steel-bearing roller mechanism that provides smoother rocking motion than balance board designs. The 3-inch adjustable height range lets users fine-tune positioning without repositioning the entire unit. It is the premium commercial-grade pick for users who spend 8 or more hours at a desk and want the highest-quality wood rocker mechanism available.",
    specs: ["Solid wood with steel frame", "Ball-bearing rollers", "3-inch adjustable height", "Commercial grade"],
    pros: ["Smooth ball-bearing roller mechanism", "Commercial-grade durability", "Adjustable height", "558 reviews"],
    cons: ["$118.99 is three times more than other models", "4.4 stars not highest in roundup", "Price hard to justify for casual users"],
    bestFor: "Professional users who spend 8 or more hours daily at a desk and want the smoothest wood rocker mechanism available",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Are wooden footrests better than foam footrests?",
    a: "Wooden footrests last longer without compression changes and maintain consistent rocking feel over years of use. Foam footrests are softer underfoot, quieter, and better for bare-foot users. Wood is the better long-term investment for users who prioritize durability. Foam is better for immediate comfort and bare-foot use.",
  },
  {
    q: "What is the difference between bamboo and hardwood footrests?",
    a: "Bamboo is a fast-growing grass that behaves like hardwood in finished products. It is slightly lighter than most hardwoods and has an eco-friendly appeal due to faster growth cycles. In terms of durability and rocking performance, bamboo and hardwood are comparable for desk footrest use.",
  },
  {
    q: "Do wooden footrests scratch hardwood floors?",
    a: "Wood rockers on bare hardwood floors can leave marks over time, particularly at the contact points of the curved base. Placing a thin desk mat or floor protector under the footrest prevents this. Models with rubber feet or pads reduce direct wood-on-floor contact.",
  },
  {
    q: "Is cherry wood the best option for desk footrests?",
    a: "Cherry wood is a mid-hardness hardwood that is durable, visually warm, and commonly used in desk furniture. The choice between cherry and lauan plywood affects aesthetics more than performance. Solid cherry wood tends to be more visually refined than plywood alternatives.",
  },
  {
    q: "What does a 350 lb capacity mean for a footrest?",
    a: "The 350-pound capacity on StrongTek models reflects the maximum weight load the footrest can support without structural failure. For standard desk use, the relevant load is the weight of the user's feet, which is a small fraction of total body weight. A high capacity rating indicates structural robustness.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-rocking-footrests-under-desk", title: "Best Rocking Footrests Under Desk (2026)" },
  { href: "/guide/best-under-desk-footrests", title: "Best Under-Desk Footrests (2026)" },
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
  { href: "/guide/best-under-desk-footrests-for-short-people", title: "Best Under-Desk Footrests for Short People (2026)" },
];
