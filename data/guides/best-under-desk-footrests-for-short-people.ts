const BASE = "/images/guides/best-under-desk-footrests-for-short-people";

export const guideSlug = "best-under-desk-footrests-for-short-people";
export const guideTitle = "The Best Under-Desk Footrests for Short People: Our Picks";
export const metaTitle = "Best Under-Desk Footrests for Short People (2026)";
export const metaDescription =
  "How 9 under-desk footrests for short people compare on features, comfort and practical fit, with clear notes on who each one suits.";
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
    id: "everlasting-comfort",
    rank: 1,
    badge: "Best Overall",
    name: "Everlasting Comfort Foot Rest Under Desk",
    price: "$29.78",
    rating: "4.6 stars",
    reviews: "28,108 reviews",
    imageUrl: `${BASE}/everlasting-comfort.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07PGLBCFG?tag=theofficejournal-20",
    description: "The Everlasting Comfort footrest works in both stationary and rocking modes depending on which side faces up, with a memory foam base that maintains its shape through extended use without flattening permanently. The removable washable cover handles spills and regular cleaning.\n\nFor shorter users, the standard height works well at most home desks. The dual-mode design lets users switch between a stable flat platform and a rocking surface without buying a second product.",
    specs: ["Memory foam","Dual-mode: flat + rocker","Non-slip base","Washable cover"],
    pros: ["4.6 star buyer rating","Dual flat and rocker modes","Memory foam cushioning","Washable cover"],
    cons: ["Fixed height suits most but not all users","Memory foam can feel warm in hot climates","Rocker mode less stable than dedicated rockers"],
    bestFor: "Short users who want a proven memory foam footrest at the lowest price point",
  },
  {
    id: "comfilife",
    rank: 2,
    badge: "Best Adjustable",
    name: "ComfiLife Adjustable Height Foot Rest Under Desk",
    price: "$39.99",
    rating: "4.6 stars",
    reviews: "13,977 reviews",
    imageUrl: `${BASE}/comfilife.webp`,
    amazonUrl: "https://www.amazon.com/dp/B08DHMMBFF?tag=theofficejournal-20",
    description: "The ComfiLife footrest adds height adjustment to the standard memory foam format, with three height settings that let shorter users raise the platform to meet their feet precisely without relying on the desk chair alone. The multi-purpose design covers flat, rocker, and knee support positions in a single unit. It costs more than the Everlasting Comfort but the adjustability makes it a better fit for users who work at variable-height desks or who share the footrest between multiple seating positions throughout the day.",
    specs: ["Adjustable height","Multi-purpose: rocker, knee, flat","Memory foam","Washable cover"],
    pros: ["Adjustable height for precise fit","13,977 reviews at 4.6 stars","Multiple use modes","Sciatica relief positioning"],
    cons: ["$34.19 is pricier than basic models","Height adjustment uses physical repositioning, not a slider","Bulkier than single-mode models"],
    bestFor: "Short users who need adjustable height to match different desk and chair combinations",
  },
  {
    id: "huanuo",
    rank: 3,
    badge: "Best with Massage Roller",
    name: "HUANUO Adjustable Foot Rest Under Desk",
    price: "$29.99",
    rating: "4.2 stars",
    reviews: "13,143 reviews",
    imageUrl: `${BASE}/huanuo.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07L3RVF7C?tag=theofficejournal-20",
    description: "The HUANUO footrest combines adjustable height with a built-in massage roller along the top surface, adding circulation benefits that fixed foam models do not provide. 7 inch range, which overlaps well with the foot placement needs of users in the 5'0\" to 5'4\" range.\n\nThe rocking motion on the HUANUO is more pronounced than memory foam rockers, which suits users who want active movement rather than just a stable platform. The massage texture adds sensory feedback during long seated sessions.",
    specs: ["3 height settings (4.3–6.7 in)","30-degree tilt","Massage texture + roller","Rocking motion"],
    pros: ["Massage roller for circulation","Three adjustable heights","Rocking motion encourages movement","Under $30"],
    cons: ["4.2 stars is lower than top picks","Massage texture can feel rough to bare feet","Rocker mechanism less smooth than ErgoFoam"],
    bestFor: "Short users who want an active footrest with massage feedback and height adjustment under $30",
  },
  {
    id: "ergofoam",
    rank: 4,
    badge: "Best Firm Foam",
    name: "ErgoFoam Ergonomic Foot Rest Under Desk",
    price: "$33.95",
    rating: "4.6 stars",
    reviews: "6,579 reviews",
    imageUrl: `${BASE}/ergofoam.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07C8836PN?tag=theofficejournal-20",
    description: "The ErgoFoam footrest uses a higher-density foam than the Everlasting Comfort, which makes it firmer and more resistant to compression over time. Chiropractor-endorsed positioning supports the natural foot angle for users who prefer a stable platform over a rocking surface. The velvet cover adds comfort over bare feet compared to hard plastic competitors. It is priced similarly to the ComfiLife but targets users who prefer firm support over soft memory foam.",
    specs: ["High-density foam","Velvet cover","Chiropractor-endorsed","17.3 x 11.5 inches"],
    pros: ["High-density foam resists compression","Chiropractor-endorsed positioning","Velvet cover comfortable bare-foot","4.6 stars"],
    cons: ["Firmer than memory foam models","Fixed height","Single-mode (rocker only, no flat option)"],
    bestFor: "Short users who want firm foam support that holds its shape longer than standard memory foam",
  },
  {
    id: "strongtek-wood",
    rank: 5,
    badge: "Best Wooden Pick",
    name: "StrongTek Ergonomic Wood Foot Rest",
    price: "$39.99",
    rating: "4.7 stars",
    reviews: "3,135 reviews",
    imageUrl: `${BASE}/strongtek-wood.webp`,
    amazonUrl: "https://www.amazon.com/dp/B07N1QCJGZ?tag=theofficejournal-20",
    description: "The StrongTek wooden footrest is a balance board-style rocker made from cherry wood, offering a natural alternative to foam footrests for users who prefer hard surfaces and visual warmth on their desk setup. The rocker base supports active micro-movements throughout the workday.\n\n7 stars it holds the highest rating in this roundup for short-person picks. Wooden footrests do not compress over time like foam, making them a longer-term investment for regular users.",
    specs: ["Cherry wood","Rocker balance board","350 lb capacity","18 inches wide"],
    pros: ["4.7 stars, highest-rated in roundup","Does not compress like foam","Warm natural aesthetic","350 lb load capacity"],
    cons: ["$39.99 higher than foam alternatives","Hard surface may be uncomfortable bare-foot","No height adjustment"],
    bestFor: "Short users who prefer a natural wood footrest with rocker motion and lasting build quality",
  },
  {
    id: "blistrends",
    rank: 6,
    badge: "Best Budget",
    name: "BlissTrends Foot Rest Under Desk",
    price: "$19.99",
    rating: "4.4 stars",
    reviews: "8,952 reviews",
    imageUrl: `${BASE}/blistrends.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0BFQX3YFY?tag=theofficejournal-20",
    description: "7 inches, suitable for shorter users who need modest lift without spending. The dual-layer foam uses different densities: a softer top layer for comfort and a firmer base layer for support. The washable cover and non-slip base are standard at this price point. For short users who need a basic height boost more than active features, the BlissTrends delivers the essentials.",
    specs: ["2 height settings (3.7–5.7 in)","Dual-layer foam","Non-slip base","Washable cover"],
    pros: ["Under $20","8,952 reviews at 4.4 stars","Two height settings","Washable cover"],
    cons: ["Only 2 height settings vs 3 on HUANUO","Dual-layer foam less plush than memory foam","No massage or rocker feature"],
    bestFor: "Short users who need basic adjustable-height foam at the lowest possible cost",
  },
  {
    id: "casazenith",
    rank: 7,
    badge: "Best Multi-Height",
    name: "CasaZenith Adjustable Foot Rest Under Desk",
    price: "$19.99",
    rating: "4.4 stars",
    reviews: "1,162 reviews",
    imageUrl: `${BASE}/casazenith.webp`,
    amazonUrl: "https://www.amazon.com/dp/B0CW1ZYZ7S?tag=theofficejournal-20",
    description: "3 inches, more adjustment range than any other footrest in this roundup. Four integrated massage rollers allow active foot movement similar to dedicated massage mats without a separate purchase. The ABS plastic housing is less cushioned than foam alternatives but the detachable top makes cleaning straightforward. For users who change height often throughout the day, the six settings give more precision than two or three-setting alternatives.",
    specs: ["6 height settings (3.1–7.3 in)","4 massage rollers","ABS construction","Detachable top"],
    pros: ["6 height settings for precise fit","Lowest height 3.1 inches for shorter users","4 massage rollers","Under $20"],
    cons: ["ABS plastic less cushioned than foam","Fewer reviews than top models","Louder massage rollers than foam"],
    bestFor: "Short users who want maximum height adjustability and massage rollers at a budget price",
  },
  {
    id: "ergofoam-xl",
    rank: 8,
    badge: "Best for High Chairs",
    name: "ErgoFoam XL Foot Rest for Stools and High Chairs",
    price: "$54.95",
    rating: "4.7 stars",
    reviews: "588 reviews",
    imageUrl: `${BASE}/ergofoam-xl.webp`,
    amazonUrl: "https://www.amazon.com/dp/B093RF1S5J?tag=theofficejournal-20",
    description: "The ErgoFoam XL targets users on bar stools, counter-height chairs, and high-seat workstations where feet hang significantly off the floor. 5 inches tall, it provides more lift than any standard footrest in this roundup and supports users in very high seating configurations where other footrests do not reach. It is the premium pick for a specific use case rather than a general-purpose buy. Short users who work at counter-height desks or standing-desk-converter setups benefit the most from the extra height.",
    specs: ["7.5 inches tall","2-in-1 flat + rocker","High-density foam","Non-slip base"],
    pros: ["7.5 inches for high seating","4.7 stars","For stools and high chairs specifically","Flat and rocker modes"],
    cons: ["$54.95 is the most expensive in roundup","Too tall for standard desk chairs","Lower review count at 588"],
    bestFor: "Short users on bar stools, counter-height chairs, or standing desk converters who need maximum lift",
  }
];

export const faq: { q: string; a: string }[] = [
  { q: "What height footrest do short people need?", a: "Users between 5'0\" and 5'4\" typically benefit from footrests in the 3 to 6 inch range. The correct height is whatever keeps the thighs parallel to the floor with feet flat. Adjustable-height models like the ComfiLife or CasaZenith let users find their precise height rather than estimating from a fixed-height pick." },
  { q: "Are rocking footrests better for circulation?", a: "Rocking or tilting footrests encourage passive movement in the calf muscles and ankles, which helps circulation during long seated sessions. Models like the HUANUO and StrongTek Wood provide active rocking motion compared to the stationary support of a flat foam block." },
  { q: "Can footrests help with lower back pain?", a: "Yes, but only as part of a complete ergonomic setup. A footrest that keeps feet flat and thighs parallel reduces the pelvic tilt that loads the lower back. Combined with proper chair height and lumbar support, the ergonomic benefit is significant. A footrest alone does not compensate for a chair set at the wrong height." },
  { q: "Should I get a foam or wooden footrest?", a: "Foam footrests are softer and better for bare feet. Wooden footrests like the StrongTek last longer without compression changes, suit users who prefer firm surfaces, and look warmer in natural-finish setups. For most users in standard desk chairs, foam is more comfortable. For users who prefer hard-surface balance boards, wood is the better long-term choice." },
  { q: "Are budget footrests worth it for short people?", a: "98 cover the basic needs: modest height lift and a non-slip base. They lack the massage features and multi-height adjustability of mid-range models. If the goal is simply to keep feet from dangling, budget options work. If active movement or precise height targeting matters, a $30-$40 adjustable model is worth the extra cost." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-adjustable-under-desk-footrests", title: "Best Adjustable Under-Desk Footrests (2026)" },
  { href: "/guide/best-under-desk-footrests", title: "Best Under-Desk Footrests (2026)" },
  { href: "/guide/best-rocking-footrests-under-desk", title: "Best Rocking Footrests Under Desk (2026)" },
  { href: "/guide/best-wooden-footrests-for-desk", title: "Best Wooden Footrests for Desk (2026)" }
];
