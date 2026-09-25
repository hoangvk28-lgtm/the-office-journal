export const guideSlug = "best-tv-stand-light-wood";
export const guideTitle = "The Best Light Wood TV Stands for Everyday Use";
export const metaTitle = "Best Light Wood TV Stands for Home Offices (2026)";
export const metaDescription =
  "A practical comparison of 7 light wood TV stands, focused on features, build and practical fit, and the trade-offs between them.";
export const mainKeyword = "tv stand light wood";
export const introParagraphs = [
  "Light wood finishes bring a brighter, airier feel to a living room than darker walnut or espresso tones, and natural oak grain has become one of the most requested looks for 2026 furniture shopping.",
  "Below are 6 light wood TV stands we compared on storage layout, TV size fit, and finish quality, ranging from a budget boho rattan design to a nearly 300-pound-capacity cabinet built for very large TVs.",
];
export const lastUpdated = "2026-07-17";
export const readTime = "10 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rnAJOsBYL._SL500_.jpg";

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

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "okd-70-natural-oak-fluted",
    rank: 1,
    badge: "Best Overall",
    name: "OKD 70\" Mid Century Fluted Soft-Close TV Stand",
    price: "$199.99",
    rating: "4.7",
    reviews: "157",
    imageUrl: "https://m.media-amazon.com/images/I/41rnAJOsBYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQV27LCS?tag=theofficejournal-20",
    description:
      "The OKD 70 inch Mid Century Fluted Soft-Close TV Stand fits TVs up to 75 inches and pairs true fluted mid-century paneling with quiet soft-close doors, so the doors ease shut instead of slamming. A wide top surface leaves room to display decor, and adjustable interior shelves let you reconfigure storage as your gear changes.\n\nThe minimalist natural oak styling pairs well with mid-century or Scandinavian-leaning rooms. For anyone with a TV larger than 65 inches who still wants a light oak finish, this is the strongest fit.",
    specs: [
      "Fits TV up to 75 inches",
      "70\" W x 15.75\" D x 20\" H",
      "2 soft-close doors",
      "Adjustable interior shelves",
      "Fluted mid-century paneling",
      "Natural oak finish",
    ],
    pros: [
      "Quiet soft-close doors prevent slamming",
      "Fits TVs up to 75 inches",
      "True fluted mid-century detail",
      "Wide display top and flexible adjustable shelving",
    ],
    cons: [
      "Smaller review sample (157 ratings) than the top pick",
      "Pricier than the sub-$150 options here",
      "70 inch width needs a larger wall footprint",
    ],
    bestFor: "Buyers with TVs up to 75 inches who want soft-close doors on a true fluted oak design",
  },
  {
    id: "okd-70-light-knotty-oak-open",
    rank: 2,
    badge: "Best Weight Capacity",
    name: "OKD 70\" Light Knotty Oak Open Storage TV Stand",
    price: "$249.99",
    rating: "4.7",
    reviews: "398",
    imageUrl: "https://m.media-amazon.com/images/I/41gu+B6y7VL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FDGKNN4N?tag=theofficejournal-20",
    description:
      "The OKD 70 inch Light Knotty Oak Open Storage TV Stand fits TVs up to 80 inches and stands the tallest in this list at 33 inches, with a 300 pound weight capacity, well above every other pick here. Two enclosed side cabinets flank an open center shelf, giving a mix of concealed and display storage.\n\n7 stars, it has a well-established track record for a taller design. 5 inch plinth base adds stability. For anyone who wants to stack heavier gear or a very large TV, this is the pick with the most margin.\n\nTallest stand here at 33 inches.",
    specs: [
      "Fits TV up to 80 inches",
      "70\" W x 16\" D x 33\" H",
      "300 lb weight capacity",
      "2 side cabinets + open center shelf",
      "Reinforced 3.5\" plinth base",
      "4 cable routing holes",
    ],
    pros: [
      "Highest weight capacity in this list at 300 lbs",
      "Tallest stand here at 33 inches",
      "Distinctive knotty oak grain texture",
      "Fits TVs up to 80 inches",
    ],
    cons: [
      "Most expensive pick in this list",
      "Extra height takes up more vertical wall space",
      "Knotty grain may look busier than plainer natural oak finishes",
    ],
    bestFor: "Buyers who want maximum weight capacity and height for a very large TV and stacked gear",
  },
  {
    id: "vingli-55-natural-oak-fluted-4door",
    rank: 3,
    badge: "Best Storage Doors",
    name: "VINGLI 55\" Natural Oak Fluted 4-Door TV Stand",
    price: "$149.99",
    rating: "4.5",
    reviews: "233",
    imageUrl: "https://m.media-amazon.com/images/I/51mT11GbcIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H1W6JKZW?tag=theofficejournal-20",
    description:
      "The VINGLI 55 inch Natural Oak Fluted 4-Door TV Stand fits TVs up to 65 inches and offers 4 separate fluted cabinet doors, more individual storage compartments than most stands in this list. Adjustable interior shelves let you configure each section, and the 30 inch height puts the screen at a more comfortable eye line for sofa viewing.\n\n5 stars, it holds a solid mid-pack rating. The bright natural oak grain and clean mid-century lines pair well with a range of room styles, and the 4-door layout makes it easier to organize gear by type rather than piling everything into one or two cabinets. For buyers who want the most individual storage doors, this is the standout.\n\nTaller 30 inch height for comfortable sofa viewing.",
    specs: [
      "Fits TV up to 65 inches",
      "55\" L x 15.4\" D x 30\" H",
      "4 fluted cabinet doors",
      "Adjustable interior shelves",
      "30 inch height",
      "Natural oak fluted finish",
    ],
    pros: [
      "4 individual fluted cabinet doors for organized storage",
      "Taller 30 inch height for comfortable sofa viewing",
      "Bright natural oak grain with clean mid-century lines",
      "Flexible adjustable shelving in each section",
    ],
    cons: [
      "Max TV size of 65 inches",
      "Smaller review sample than the top picks",
      "Narrower 55 inch width limits display surface",
    ],
    bestFor: "Buyers who want the most individual storage doors to organize gear by type",
  },
  {
    id: "linsy-home-70-oak-sliding",
    rank: 4,
    badge: "Best for TVs up to 80 Inches",
    name: "LINSY HOME 70\" Fluted Sliding Door Oak TV Stand",
    price: "$202.99",
    rating: "4.6",
    reviews: "148",
    imageUrl: "https://m.media-amazon.com/images/I/41WINKtMMWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FWJZ1PH7?tag=theofficejournal-20",
    description:
      "The LINSY HOME 70 inch Fluted Sliding Door Oak TV Stand fits TVs up to 80 inches, the widest supported range in this list, and combines a space-saving fluted sliding door with 4 open shelves for flexible display and storage. Solid wood legs anchor the base, and a gentle curved silhouette softens the overall look.\n\n6 stars, it's built a solid track record as a newer listing. Cable routing keeps wiring tidy behind the unit, and the warm light oak tone pairs the fluted panel look with a practical sliding-door format that saves clearance space. For anyone with a very large TV, this is the light wood pick built to fit it.",
    specs: [
      "Fits TV up to 80 inches",
      "70\" L x 15.7\" W x 21.7\" H",
      "1 sliding door + 4 open shelves",
      "Solid wood legs",
      "Cable routing",
      "Light oak finish",
    ],
    pros: [
      "Widest TV size range in this list, supports up to 80 inches",
      "Solid wood legs rather than pressboard",
      "4 flexible open shelves plus a space-saving sliding door",
      "Curved silhouette softens the overall look",
    ],
    cons: [
      "Smaller review sample (148 ratings)",
      "Open shelves offer less concealed storage than fully enclosed cabinets",
      "Highest price in this list alongside the OKD open storage pick",
    ],
    bestFor: "Buyers with a large TV up to 80 inches who still want a light oak fluted sliding-door design",
  },
  {
    id: "superjare-boho-rattan-oak",
    rank: 5,
    badge: "Best Budget Pick",
    name: "SUPERJARE Boho Rattan Natural Oak TV Stand",
    price: "$84.99",
    rating: "4.4",
    reviews: "989",
    imageUrl: "https://m.media-amazon.com/images/I/51WMzKM-PrL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BF8PCQWS?tag=theofficejournal-20",
    description:
      "The SUPERJARE Boho Rattan Natural Oak TV Stand fits TVs up to 65 inches and stands out with woven rattan cabinet doors instead of the fluted or slatted panels found elsewhere in this list, giving it a distinctly boho look. Six solid wood legs support the frame, and adjustable interior shelves let you configure the storage layout.\n\n4 stars, it has a solid track record. At just 42 pounds, it's noticeably lighter than most other picks here, making it easy to reposition. Four cable routing holes keep wiring tidy. For buyers on a budget who want a distinctive natural-wood boho look, this is the standout.\n\n6 solid wood legs for a sturdy base.",
    specs: [
      "Fits TV up to 65 inches",
      "53.9\" L x 15.7\" W x 19.7\" H",
      "Rattan cabinet doors",
      "Adjustable interior shelves",
      "6 solid wood legs",
      "4 cable routing holes",
    ],
    pros: [
      "Distinctive boho rattan door design",
      "6 solid wood legs for a sturdy base",
      "Lightweight at 42 lbs for easy repositioning",
      "Affordable price relative to most other picks",
    ],
    cons: [
      "Max TV size of 65 inches",
      "Rattan styling may not suit more minimalist or mid-century rooms",
      "Lower rating than the top-tier picks",
    ],
    bestFor: "Budget-focused buyers who want a distinctive boho rattan look in a natural light wood tone",
  },
  {
    id: "tribewood-71-solid-fir",
    rank: 6,
    badge: "Best Solid Wood Construction",
    name: "TRIBEWOOD 71\" 100% Solid Fir Wood TV Stand",
    price: "$199.99",
    rating: "4.6",
    reviews: "6",
    imageUrl: "https://m.media-amazon.com/images/I/41XGcp3GnIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GTPWB2F2?tag=theofficejournal-20",
    description:
      "The TRIBEWOOD 71 inch 100% Solid Fir Wood TV Stand fits TVs up to 85 inches, the largest supported size in this list, and is built from solid fir wood rather than engineered MDF or particleboard. That means each unit has a one-of-a-kind natural grain pattern rather than a uniform printed finish.\n\nThe tabletop surface is scratch-resistant, and assembly is simple since the design uses leg-only construction rather than complex panel assembly. At just 35 pounds, it's also the lightest large-format stand in this list. For buyers who specifically want genuine solid wood rather than an engineered wood finish, this is the pick.",
    specs: [
      "Fits TV up to 85 inches",
      "71\" W x 15\" D x 23.65\" H",
      "2 open shelves",
      "100% solid fir wood",
      "Scratch-resistant tabletop",
      "Simple leg-only assembly",
    ],
    pros: [
      "Genuinely 100% solid fir wood, not engineered material",
      "Fits the largest TVs in this list, up to 85 inches",
      "One-of-a-kind natural grain pattern",
      "Lightweight at 35 lbs with simple leg-only assembly",
    ],
    cons: [
      "Very small review sample (6 ratings) since it's a newer listing",
      "Open shelves only, no enclosed storage",
      "Solid wood grain variation means each unit looks slightly different",
    ],
    bestFor: "Buyers who want genuine solid wood construction and support for very large TVs up to 85 inches",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for a tv stand light wood often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the tv stand light wood holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this tv stand light wood over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any tv stand light wood you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "A tv stand light wood that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq: FaqItem[] = [
  {
    q: "What is the best light wood TV stand overall?",
    a: "7 stars with quiet soft-close doors and true fluted mid-century detail.",
  },
  {
    q: "Which light wood TV stand fits the largest TVs?",
    a: "The TRIBEWOOD 71 inch 100% Solid Fir Wood TV Stand (Pick 6) fits TVs up to 85 inches, the largest range in this list, followed by the OKD Light Knotty Oak (Pick 2) and LINSY HOME (Pick 4), both rated to 80 inches.",
  },
  {
    q: "What is the most affordable light wood TV stand in this list?",
    a: "The SUPERJARE Boho Rattan Natural Oak TV Stand (Pick 5) is the most affordable at $84.99, with a distinctive rattan door design and nearly 1,000 ratings backing it up.",
  },
  {
    q: "Which light wood TV stand has the highest weight capacity?",
    a: "The OKD 70 inch Light Knotty Oak Open Storage TV Stand (Pick 2) has the highest rated weight capacity in this list at 300 lbs, useful if you plan to stack a heavier TV along with a soundbar or other media equipment on top.",
  },
  {
    q: "Is solid wood better than engineered wood for a TV stand?",
    a: "Solid wood, like the TRIBEWOOD fir stand (Pick 6), generally holds up longer and offers unique natural grain, but it's often heavier and pricier per pound of material. Engineered wood with a wood-look veneer, used in most other picks here, is lighter and more low-cost while still looking convincingly like real wood.",
  },
  {
    q: "Do light wood TV stands show scuffs more than dark wood stands?",
    a: "Light finishes can show scuffs and dark marks more visibly than darker tones, though most of the picks here use a durable, scratch-resistant surface coating that minimizes this. Wiping down with a soft cloth periodically keeps the finish looking fresh.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-tv-stand-oak", title: "Best Oak TV Stands in 2026" },
  { href: "/guide/best-tv-stand-solid-wood", title: "Best Solid Wood TV Stands in 2026" },
  { href: "/guide/best-tv-stand-dark-wood", title: "Best Dark Wood TV Stands in 2026" },
];
