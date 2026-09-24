export const guideSlug = "best-office-chair-under-300";
export const guideTitle = "The Best Office Chairs Under $300 for Everyday Work";
export const breadcrumbLabel = "Best Office Chairs Under $300";
export const metaTitle = "Best Office Chairs Under $300 for Home Offices (2026)";
export const metaDescription =
  "We compared office chairs under $300 on seat height, lumbar and armrest adjustment, weight capacity and warranty to find the right fit for everyday home-office work.";
export const introParagraphs = [
  "Office-chair comfort starts with dimensions, not cushioning. If the seat can't drop low enough for your feet to rest flat, or rise high enough for your elbows to reach the desk, mesh and padding are unlikely to make up for it.",
  "Under $300, the differences between chairs come down to which adjustments you get. Cheaper chairs typically offer seat height, basic tilt and a fixed or cushion-style lumbar. As the price rises, you start to see adjustable lumbar, headrests, armrests that move in more than one direction and, on a few models, a stated warranty. Knowing which of those you actually need is most of the decision.",
  "The eight chairs below range from under $40 to just under $300 at the time of writing, and each covers a different situation, from a very small budget or a compact desk to taller users and people who want finer lumbar control. Our comparison is based on published specifications, adjustment ranges, stated weight capacity, warranty and price position, not hands-on testing.",
];
export const lastUpdated = "2026-07-11";
export const readTime = "10 min";
export const heroImage = `/images/guides/best-office-chair-under-300/hero.webp`;

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
  skipIf?: string;
  summary?: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export const products: GuideProduct[] = [
  {
    id: "bestoffice-under-40",
    rank: 1,
    badge: "Best Budget Choice",
    name: "BestOffice Ergonomic Chair",
    price: "$38.99",
    rating: "4.3 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81sLDLdB8CL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQDM23S4?tag=theofficejournal-20",
    summary:
      "The least expensive chair here, with a mesh back, a lumbar cushion and a stated 250 lb capacity.",
    description:
      "The BestOffice chair is here for one reason: it is the lowest-cost way in this guide to get a mesh-back chair with adjustable height, armrests and some lumbar support.\n\nIts seat height range of 15.7 to 19.3 inches runs lower than most chairs in this roundup, which is useful if you are on the shorter side or working at a desk below the usual 29 to 30 inches. Mesh is generally more breathable than padding, and BestOffice lists a 250 lb weight capacity.\n\nWhat you give up is adjustment. Lumbar support comes from a cushion rather than an adjustable mechanism, tilt is basic, and there is no headrest. That may be enough for a secondary or occasional-use desk. For a primary work chair, the adjustable lumbar on the SIHOO M18 or Hbada gives you more control.",
    specs: [
      "Seat height: 15.7–19.3\"",
      "Weight capacity: 250 lb",
      "Back: mesh",
      "Lumbar: cushion",
      "Armrests: adjustable",
      "Tilt: basic",
    ],
    pros: [
      "Lowest price in this guide by a wide margin",
      "Low minimum seat height suits shorter users",
      "Mesh back for breathability",
    ],
    cons: [
      "Lumbar support is a cushion, not an adjustable mechanism",
      "No headrest and only basic tilt",
      "Basic build quality",
    ],
    bestFor:
      "A spare or occasional-use desk, or anyone who needs a functional chair for as little money as possible.",
    skipIf:
      "It will be your primary work chair and adjustable lumbar matters to you; the SIHOO M18 or Hbada offers it.",
  },
  {
    id: "neo-chair-flip-arms",
    rank: 2,
    badge: "Best for Small Desks",
    name: "NEO CHAIR with Flip-Up Arms",
    price: "$59.98",
    rating: "4.3 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81lCJOQwKVL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGWZKVPX?tag=theofficejournal-20",
    summary:
      "Flip-up armrests let the chair slide fully under a compact desk when you're not using it.",
    description:
      "The NEO CHAIR earns its place through its armrests: they flip up out of the way, so the chair can tuck under a shallow or narrow desk instead of blocking a small room.\n\nThat is a real consideration in a bedroom office or a corner setup, where a chair with fixed arms often can't clear the desk edge. Flip-up arms can also let you sit closer to the desk. The limitation is adjustment: the arms fold away, but they don't move up, down or sideways like the 2D and 3D armrests further up this list.\n\nThe rest of the specification is straightforward for the price: a mesh back, lumbar support, tilt and a 15.5- to 19.5-inch seat height range, the lowest minimum here.",
    specs: [
      "Seat height: 15.5–19.5\"",
      "Armrests: flip-up",
      "Back: mesh",
      "Lumbar: built-in support",
      "Tilt: yes",
    ],
    pros: [
      "Armrests flip up so the chair fits under a small desk",
      "Lowest minimum seat height in this guide",
      "Mesh back at a low price",
    ],
    cons: [
      "Armrests fold away but don't adjust in height or width",
      "Minimal padding",
      "No headrest",
    ],
    bestFor:
      "A compact desk or shared room where the chair needs to disappear under the desktop between work sessions.",
    skipIf:
      "You rest your forearms on the armrests while typing; height-adjustable arms, like those on the SIHOO M57 or Marsail, are the better fit.",
  },
  {
    id: "hbada-ergonomic-under160",
    rank: 3,
    badge: "Best for Reclining Breaks",
    name: "Hbada Ergonomic Office Chair",
    price: "$111.14",
    rating: "4.0 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71h3GAsF7ML._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B085XQRBC5?tag=theofficejournal-20",
    summary:
      "A high-back mesh chair with a retractable footrest and a recline of up to 155 degrees.",
    description:
      "The Hbada is the chair to consider if you want to lean back and put your feet up between tasks; its retractable footrest and 90- to 155-degree recline make it the most flexible for resting of anything here.\n\nIt is also a capable desk chair on paper, with a high mesh back, adjustable lumbar support and a headrest. The seat height range of 17.5 to 21.5 inches suits average to taller users at a standard desk.\n\nThe footrest is worth being realistic about. It is designed for breaks rather than work: a deep recline moves you away from the keyboard, so for typing you would sit upright as in any other chair. If you rarely recline, the SIHOO M18 offers similar support without the extra mechanism.",
    specs: [
      "Seat height: 17.5–21.5\"",
      "Recline: 90–155°",
      "Footrest: retractable",
      "Back: high-back mesh",
      "Lumbar: adjustable",
      "Headrest: yes",
    ],
    pros: [
      "Retractable footrest for breaks",
      "Wide recline range",
      "Adjustable lumbar and headrest",
    ],
    cons: [
      "Reclined positions aren't suited to typing",
      "Weight capacity isn't listed in the specifications",
      "Armrest adjustment isn't specified",
    ],
    bestFor:
      "People who want to recline with their feet up between calls or tasks without leaving the desk.",
    skipIf:
      "You don't expect to recline; the SIHOO M18 gives similar back support with fewer moving parts.",
  },
  {
    id: "sihoo-m18-under140",
    rank: 4,
    badge: "Best for Most People",
    name: "SIHOO M18 High-Back Mesh Chair",
    price: "$132.99",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71-w+1c6JPL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07GNDDNMW?tag=theofficejournal-20",
    summary:
      "Adjustable lumbar, an adjustable headrest and a three-year warranty at a mid-range price.",
    description:
      "For most setups in this guide, we would start with the SIHOO M18: adjustable lumbar support, an adjustable headrest and a stated three-year warranty, at less than half the price of the most expensive chair here.\n\nThose are the three features we would prioritize in a primary work chair. Adjustable lumbar lets you move support closer to where your lower back curves, and a headrest can help when you lean back to read or take calls. The warranty is one of only three stated in this guide.\n\nThe armrests are the compromise. They are 2D, with fewer directions of adjustment than the 3D arms on the SIHOO M57 and Marsail. If you type with your forearms resting on the arms, or work at an angle to your desk, that difference is worth paying for.",
    specs: [
      "Seat height: 17.5–21\"",
      "Back: high-back mesh",
      "Lumbar: adjustable",
      "Headrest: adjustable",
      "Armrests: 2D",
      "Warranty: 3 years",
    ],
    pros: [
      "Adjustable lumbar and headrest at a mid-range price",
      "Three-year warranty",
      "High mesh back supports the upper back",
    ],
    cons: [
      "2D armrests are less flexible than the M57's 3D arms",
      "Weight capacity isn't listed in the specifications",
      "Minimum seat height may be high for shorter users at a standard desk",
    ],
    bestFor:
      "Someone choosing a primary home-office chair who wants adjustable lumbar support and a headrest without spending near $300.",
    skipIf:
      "You rely on armrests to support your forearms while typing; the SIHOO M57's 3D arms are the better fit.",
  },
  {
    id: "sihoo-m57-under200",
    rank: 5,
    badge: "Best Armrest Adjustment",
    name: "SIHOO M57 Ergonomic Mesh Chair",
    price: "$189.99",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71nLBIhG+0L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08XXNQT2Y?tag=theofficejournal-20",
    summary:
      "SIHOO's step up from the M18, adding 3D armrests and an S-curve back.",
    description:
      "The M57 is worth paying more than the M18 for one specific reason: its 3D armrests, which move in more directions and can be set closer to your keyboard and mouse.\n\nThat matters more than it might seem. Armrests that sit too wide or too far back can leave your forearms without support while you type. With a third axis of adjustment, the arms are more likely to meet you where you actually work, especially if your keyboard sits on a tray or your monitor is off-center.\n\nThe rest of the chair tracks closely with the M18: an S-curve high mesh back, adjustable lumbar, a headrest and a three-year warranty, with a slightly higher seat range of 17.7 to 21.7 inches. If you don't use armrests much, the M18 gives you most of the same chair for less.",
    specs: [
      "Seat height: 17.7–21.7\"",
      "Armrests: 3D",
      "Back: S-curve high-back mesh",
      "Lumbar: adjustable",
      "Headrest: yes",
      "Warranty: 3 years",
    ],
    pros: [
      "3D armrests can be set closer to the keyboard",
      "Adjustable lumbar and headrest",
      "Three-year warranty",
    ],
    cons: [
      "Costs noticeably more than the similar M18",
      "Weight capacity isn't listed in the specifications",
      "Higher minimum seat height than the budget chairs",
    ],
    bestFor:
      "People who rest their forearms on the armrests while typing, or whose keyboard and mouse aren't directly in front of them.",
    skipIf:
      "You rarely use armrests; the SIHOO M18 is nearly the same chair for less money.",
  },
  {
    id: "marsail-adaptive-lumbar",
    rank: 6,
    badge: "Best Adaptive Lumbar",
    name: "Marsail Ergonomic Mesh Chair",
    price: "$139.99",
    rating: "4.0 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/81rJG1VNeLL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DKP341VM?tag=theofficejournal-20",
    summary:
      "A lumbar system Marsail says adapts to your posture, plus 3D arms and a 300 lb capacity.",
    description:
      "The Marsail is the chair for people who don't want to keep fiddling with lumbar settings: the manufacturer describes its lumbar system as adaptive, adjusting to posture changes on its own rather than being set by hand.\n\nThat is a design approach more often found on expensive chairs, and it may suit anyone who shifts position a lot through the day. It is a manufacturer claim rather than something the specifications quantify, so how closely it follows your back is hard to judge from the listing alone.\n\nOn paper, the rest of the package is strong for the price. It has 3D armrests like the SIHOO M57, an adjustable headrest and a 17- to 21-inch seat range. At 300 lb, it also carries the highest stated weight capacity in this guide.",
    specs: [
      "Seat height: 17–21\"",
      "Weight capacity: 300 lb",
      "Lumbar: adaptive (per manufacturer)",
      "Armrests: 3D",
      "Back: high-back mesh",
      "Headrest: adjustable",
    ],
    pros: [
      "Highest stated weight capacity in this guide",
      "3D armrests at a mid-range price",
      "Lumbar designed to follow posture changes",
    ],
    cons: [
      "Adaptive lumbar performance isn't quantified in the specifications",
      "No stated warranty in the listing",
      "Lumbar can't be positioned as precisely as the Duramont's",
    ],
    bestFor:
      "People who move around in their chair often, and heavier users up to 300 lb who still want 3D armrests.",
    skipIf:
      "You know exactly where you want lumbar support; the Duramont lets you set its height and depth by hand.",
  },
  {
    id: "duramont-lumbar-control",
    rank: 7,
    badge: "Best Lumbar Adjustment",
    name: "Duramont Ergonomic Adjustable Chair",
    price: "$289.98",
    rating: "4.2 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/71crI8HDP9L._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0797HZ8W1?tag=theofficejournal-20",
    summary:
      "Lumbar support that adjusts in both height and depth, for precise placement.",
    description:
      "The Duramont is the most expensive chair in this guide, and the case for it rests on one feature: lumbar support you can adjust in both height and depth.\n\nMost chairs here let you move lumbar support up or down, or rely on a cushion. Adding depth control means you can also set how firmly it presses into your lower back. If you know where you want lumbar support, or find fixed lumbar either too firm or too faint, that control is the main reason to pay more.\n\nBeyond the lumbar mechanism, the Duramont is similar to the SIHOO M18: mesh high back, adjustable headrest, 2D armrests, a 17- to 21-inch seat range and a three-year warranty. That makes it hard to justify for people without a specific lumbar need, since the M18 costs less than half as much at the time of writing.",
    specs: [
      "Seat height: 17–21\"",
      "Lumbar: height and depth adjustable",
      "Back: high-back mesh",
      "Headrest: adjustable",
      "Armrests: 2D",
      "Warranty: 3 years",
    ],
    pros: [
      "Lumbar adjusts in both height and depth",
      "Adjustable headrest",
      "Three-year warranty",
    ],
    cons: [
      "Most expensive chair in this guide",
      "2D armrests at a price where 3D arms are available",
      "Otherwise similar to the much cheaper SIHOO M18",
    ],
    bestFor:
      "People with a particular lower-back support need who want to set lumbar position and firmness precisely.",
    skipIf:
      "You don't have a specific lumbar requirement; the SIHOO M18 covers the same basics for far less.",
  },
  {
    id: "gabrylly-big-tall-under300",
    rank: 8,
    badge: "Best for Taller Users",
    name: "GABRYLLY Big and Tall Mesh Chair",
    price: "$212.90",
    rating: "4.4 stars",
    reviews: "Verified ratings",
    imageUrl: "https://m.media-amazon.com/images/I/91bA1LZMqFL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07Y8BXBX8?tag=theofficejournal-20",
    summary:
      "The highest seat range here, up to 22 inches, on a wider mesh back rated for 280 lb.",
    description:
      "If you're tall, the GABRYLLY's 18- to 22-inch seat height range is the reason to look at it: it rises higher than any other chair in this guide, which may help taller users keep their thighs roughly level at a standard or taller desk.\n\nIt pairs that range with a wider mesh back, adjustable lumbar, a headrest and a stated 280 lb capacity. The listing calls it a big-and-tall chair, but its weight rating is actually a little lower than the Marsail's 300 lb, so heavier users who don't need the extra height may be better served there.\n\nThe armrests flip up rather than adjust, which helps the chair fit under a desk but gives less forearm support than the 3D arms on the M57 or Marsail. The listing also doesn't give a seat width, so if seat size is the main concern, check the manufacturer's dimensions before ordering.",
    specs: [
      "Seat height: 18–22\"",
      "Weight capacity: 280 lb",
      "Back: wider high-back mesh",
      "Lumbar: adjustable",
      "Headrest: yes",
      "Armrests: flip-up",
    ],
    pros: [
      "Highest seat range in this guide",
      "Wider mesh back than standard chairs",
      "Adjustable lumbar and headrest",
    ],
    cons: [
      "Weight rating is below the Marsail's despite the big-and-tall name",
      "Flip-up armrests don't adjust",
      "Seat width isn't specified",
    ],
    bestFor:
      "Taller people, especially at a desk above 30 inches, who need a seat that rises further than most budget chairs.",
    skipIf:
      "You're of average height and mainly need weight capacity; the Marsail is rated higher and costs less.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    criterion: "Match seat height to your desk, not a generic range",
    explanation:
      "Seat height only matters relative to your desk. A common guideline is to sit with your feet flat on the floor, thighs roughly level and elbows near desk height. Most chairs here cover roughly 17 to 21 inches, which suits many people at a standard desk of about 29 to 30 inches.\n\nShorter people, or anyone at a lower desk, can start with minimum height: the NEO CHAIR and BestOffice go down to about 15.5 and 15.7 inches. Taller people, or anyone at a higher desk, can start with the maximum, where the GABRYLLY reaches 22 inches.",
  },
  {
    criterion: "Check seat depth, even though few budget chairs adjust it",
    explanation:
      "Seat depth is the distance from the backrest to the front edge of the seat. Too deep, and the front edge can press behind your knees when your back is against the lumbar support; too shallow, and your thighs get less support.\n\nNone of the chairs in this guide list an adjustable seat depth, and most listings don't give a depth figure at all. If you are notably shorter or taller than average, check the manufacturer's dimensions and compare them with your thigh length while seated.",
  },
  {
    criterion: "Leave a margin on weight capacity",
    explanation:
      "We would choose a chair rated comfortably above your body weight rather than one that only just covers it.\n\nOnly three chairs here state a capacity: the BestOffice (250 lb), GABRYLLY (280 lb) and Marsail (300 lb). For the others, check the manufacturer's documentation before relying on them.",
  },
  {
    criterion: "Know what each material trades off",
    explanation:
      "Every chair in this guide uses a mesh back, which is generally more breathable than padding and can help in a warm room. Mesh can feel less contoured than a shaped, padded back, which is one reason we would look for adjustable lumbar support on a mesh chair.\n\nPadded seats and bonded or PU leather can look more substantial, but their surfaces can show wear over time. In a warm room, mesh is generally the cooler option.",
  },
  {
    criterion: "Count the adjustments, not the word \"adjustable\"",
    explanation:
      "Listings often say \"adjustable armrests\" or \"adjustable lumbar\" without saying how. Manufacturers don't use the 2D and 3D labels consistently, but more axes generally means more ways to position the arms; 3D armrests make it easier to bring them close to your keyboard than 2D ones. Lumbar may adjust in height only, in height and depth, or not at all if it's a cushion.\n\nIf you have a specific need, such as a keyboard tray, an angled monitor or lower-back discomfort, look for the exact adjustment in the specifications rather than the general claim.",
  },
];

export const howWeEvaluated: { title: string; description: string }[] = [
  {
    title: "Seat height range",
    description:
      "We compared each chair's listed minimum and maximum seat height against a standard 29- to 30-inch desk, and noted which chairs suit shorter or taller users at either end of the range.",
  },
  {
    title: "Lumbar and armrest adjustment",
    description:
      "We counted what actually adjusts, cushion versus adjustable lumbar, height-only versus height-and-depth lumbar, and 2D versus 3D versus flip-up armrests, rather than taking the word \"adjustable\" at face value.",
  },
  {
    title: "Weight capacity",
    description:
      "We recorded stated weight capacities where the manufacturer lists one and flagged chairs whose listings don't include it.",
  },
  {
    title: "Warranty",
    description:
      "We noted stated warranty length. Three chairs here list a three-year warranty; the others don't state one in their listings.",
  },
  {
    title: "Price position",
    description:
      "We compared what each price step adds, from a basic mesh chair under $40 to lumbar that adjusts in height and depth just under $300. Prices change often, so we treat them as relative position rather than fixed figures.",
  },
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
    subheading: "By priority",
    table: {
      headers: ["Priority", "Consider", "Why"],
      rows: [
        ["Lowest cost", "BestOffice Ergonomic Chair", "Mesh back, lumbar cushion and adjustable arms for the least money"],
        ["A small desk or shared room", "NEO CHAIR with Flip-Up Arms", "Arms flip up so the chair tucks under the desk"],
        ["A primary work chair on a mid-range budget", "SIHOO M18", "Adjustable lumbar, headrest and a three-year warranty"],
        ["Forearm support while typing", "SIHOO M57 or Marsail", "3D armrests that can move closer to the keyboard"],
        ["Precise lumbar placement", "Duramont", "Lumbar adjusts in height and depth"],
        ["Reclining with your feet up", "Hbada", "Retractable footrest and 90–155° recline"],
        ["Height", "GABRYLLY", "Seat rises to 22 inches, the highest here"],
        ["Weight capacity", "Marsail", "300 lb, the highest stated rating here"],
      ],
    },
  },
  {
    subheading: "By price at the time of writing",
    intro: "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    table: {
      headers: ["Price tier", "Chairs"],
      rows: [
        ["Under $60", "BestOffice, NEO CHAIR"],
        ["About $110–$140", "Hbada, SIHOO M18, Marsail"],
        ["About $190–$215", "SIHOO M57, GABRYLLY"],
        ["Just under $300", "Duramont"],
      ],
    },
  },
  {
    subheading: "First ergonomic chair or replacing one you've outgrown",
    cards: [
      {
        label: "First ergonomic chair",
        text: "We would prioritize the basics, seat height that fits your desk, adjustable lumbar and adjustable armrests, over extras like footrests. Extras are easier to judge once you know what a chair gets wrong for you.",
      },
      {
        label: "Replacing a chair",
        text: "Start from what your old chair got wrong. If the lumbar never sat in the right place, look at the Duramont or Marsail; if the arms were in the way, the SIHOO M57's 3D arms or the NEO CHAIR's flip-up arms solve different versions of that problem.",
      },
    ],
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Can you get a genuinely ergonomic office chair under $300?",
    a: "Yes, if you focus on adjustment rather than branding. In this price range you can find adjustable lumbar support, headrests, 3D armrests and, on some chairs, a three-year warranty. Compared with premium chairs, what you typically give up is warranty length, adjustable seat depth and more refined lumbar systems.",
  },
  {
    q: "What does a much more expensive chair add?",
    a: "Premium office chairs commonly add longer warranties, adjustable seat depth and more refined lumbar systems. Whether that is worth it depends on how much those specific features matter to you. The chairs here cover the core adjustments: seat height, lumbar and armrests.",
  },
  {
    q: "How long should an office chair under $300 last?",
    a: "The clearest guide is the warranty. Three chairs here, the SIHOO M18, SIHOO M57 and Duramont, list three years; the others don't state one. None of the listings here give a lifespan estimate, so treat the warranty as the most concrete indicator.",
  },
  {
    q: "Should I buy an office chair online without trying it?",
    a: "It is common, and specifications help. The most useful thing to check remotely is seat height: sit with your feet flat and measure from the floor to the back of your knee, then compare that with the chair's minimum and maximum. Check the return policy too, since fit is personal and hard to judge from photos.",
  },
  {
    q: "Is it worth spending close to $300 for occasional use?",
    a: "Not necessarily. For an occasional-use chair, we would prioritize adjustable height and some lumbar support, which the budget picks here cover. Spending more makes sense when you want a specific feature: adjustable lumbar (SIHOO M18), 3D armrests (SIHOO M57 or Marsail) or height-and-depth lumbar (Duramont).",
  },
];

export const bottomLine: string[] = [
  "For most setups in this guide, we would start with the SIHOO M18: adjustable lumbar, an adjustable headrest and a three-year warranty are the features we would prioritize in a primary work chair, at a mid-range price.",
  "The SIHOO M57 is the better fit if you rely on armrests while typing, and the Duramont if you want precise lumbar placement. The NEO CHAIR makes more sense for a compact desk, and the GABRYLLY is the one to look at if you're tall.",
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-office-chair-under-500", title: "Best Office Chairs Under $500 (2026)" },
  { href: "/guide/best-mesh-office-chair", title: "Best Mesh Office Chairs (2026)" },
  { href: "/guide/best-office-chair-for-back-pain", title: "Best Office Chairs for Back Pain (2026)" },
  { href: "/guide/best-office-chair-for-short-people", title: "Best Office Chairs for Short People (2026)" },
];
