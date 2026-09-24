export const guideSlug = "best-portable-ssds-under-300";
export const guideTitle = "4 Best Portable SSDs Under $300 in 2026";
export const metaTitle = "Best Portable SSDs Under $300 (2026)";
export const metaDescription = "We compared portable SSDs under $300 by real capacity per dollar at the 2TB tier, USB generation, and brand track record.";
export const mainKeyword = "best portable ssds under $300";
export const introParagraphs = [
  "Under $300, 2TB becomes the realistic default capacity, and the meaningful differences shift toward USB generation (Gen 2 versus Gen 2x2), brand, and price per terabyte rather than whether 2TB is affordable at all.",
  "We compared this lineup on price per terabyte at the 2TB tier, documented USB generation, and brand track record, rather than ranking by price or capacity alone."
];
export const lastUpdated = "2026-09-11";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41PUPJ4-ZWL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-portable-ssds-under-300-1",
    rank: 1,
    badge: "Best Overall",
    name: "SSK 2TB Portable SSD",
    price: "$239.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31j5yeNAFYL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DPQ5Y3SP?tag=theofficejournal-20",
    description: "This 2TB drive lands well under this tier's ceiling at $239.99, rated at up to 550MB/s with both USB-C cable and USB-A adapter included, and documents S.M.A.R.T. monitoring plus TRIM support, features not every 2TB drive in this range specifies. It's also upfront about the same decimal-versus-binary capacity display gap SSK notes on its smaller drives, stating a 2TB drive typically shows around 1863GB on Windows.\n\nAgainst the fanxiang pick below, the tradeoff is speed, roughly a quarter of fanxiang's rated 2000MB/s, in exchange for a meaningfully lower price at the same 2TB capacity. For buyers whose workflow doesn't require the fastest possible large-file transfers, this represents the best capacity-per-dollar option in this comparison.\n\nBest for buyers who want 2TB of documented, health-monitored storage at the lowest price in this comparison and don't need top-tier transfer speeds.",
    specs: ["2TB capacity, up to 550MB/s", "S.M.A.R.T. monitoring and TRIM documented", "Includes both USB-C cable and USB-A adapter"],
    pros: ["Cheapest 2TB option in this comparison by a wide margin", "Documents S.M.A.R.T. and TRIM support", "Includes both USB-C and USB-A connectivity out of the box"],
    cons: ["Roughly a quarter of the fanxiang pick's rated top speed", "550MB/s is noticeably slower than several other 2TB options at this tier"],
    bestFor: "buyers who want the most 2TB capacity for the least money without needing top-tier speed",
  },
  {
    id: "best-portable-ssds-under-300-2",
    rank: 2,
    badge: "Best for Speed",
    name: "fanxiang 2TB External SSD",
    price: "$246.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41PUPJ4-ZWL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CM8VY1RQ?tag=theofficejournal-20",
    description: "At almost the same price as the SSK pick, this drive rates up to 2000MB/s read and 1800MB/s write over USB 3.2 Gen 2x2, nearly four times the SSK's rated speed for a $7 difference. It ships in a genuinely compact 85x50x8.6mm body weighing 1.6 ounces, with a 2-in-1 data cable covering both Type C-to-C and Type C-to-A connections.\n\nThe listing backs this with a stated 5-year service commitment or 1024TBW (terabytes written) rating, a specific longevity figure most competing listings in this comparison don't provide. For buyers regularly moving large 4K or RAW files, the nearly 4x speed advantage over the SSK pick at essentially the same price makes this the stronger overall value if your files are large enough to benefit.\n\nBest for buyers who regularly transfer large video or RAW photo files and want meaningfully faster real-world speed without paying significantly more than the budget 2TB option.",
    specs: ["2TB capacity, up to 2000MB/s over USB 3.2 Gen 2x2", "5-year service or 1024TBW rating stated", "Compact 85x50x8.6mm, 1.6oz body"],
    pros: ["Nearly 4x the SSK pick's rated speed for almost the same price", "Stated 1024TBW longevity rating, a specific figure to compare against", "Genuinely compact and lightweight body"],
    cons: ["Full 2000MB/s speed requires a 20Gbps-capable host device", "Less established brand than Sandisk or Samsung"],
    bestFor: "buyers who regularly move large video or RAW photo files and want meaningfully faster speed for almost the same price",
  },
  {
    id: "best-portable-ssds-under-300-3",
    rank: 3,
    badge: "Also Worth Considering",
    name: "Sandisk 2TB Portable SSD (Old Model)",
    price: "$277.95",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41-T4nAAufL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JNWF58?tag=theofficejournal-20",
    description: "This drive brings Sandisk's established brand name to the 2TB tier at $277.95, rated at up to 800MB/s with a stated 2-meter drop protection figure and a tough rubber hook for securing it to a belt loop or backpack, a physical carry feature the other picks here don't mention. Sandisk positions it around professional photographer use specifically.\n\nCompared to both the SSK and fanxiang picks, this costs meaningfully more for a rated speed that sits between the two, slower than fanxiang but faster than SSK, making the brand name itself the main differentiator rather than a clear specs advantage in either direction. For buyers specifically wanting Sandisk's track record at 2TB, this is the option, though it isn't the strongest value on paper within this comparison.\n\nBest for buyers who specifically want Sandisk's established brand name at the 2TB tier and value the physical carry hook for attaching to a bag.",
    specs: ["2TB capacity, up to 800MB/s read", "2-meter drop protection, rubber carry hook", "Established Sandisk brand"],
    pros: ["Established Sandisk brand name at the 2TB tier", "Stated 2-meter drop protection figure", "Rubber hook for securing to a bag or belt loop"],
    cons: ["Costs more than both faster and slower alternatives in this comparison", "No documented S.M.A.R.T. or TRIM support unlike the SSK pick"],
    bestFor: "buyers who specifically want Sandisk's brand name at 2TB and the physical carry hook feature",
  },
  {
    id: "best-portable-ssds-under-300-4",
    rank: 4,
    badge: "Skip Unless You Need Extra Speed",
    name: "Lexar ES3 2TB Portable SSD",
    price: "$299.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21tLuKTwQpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FMJ8Y9WT?tag=theofficejournal-20",
    description: "This is the priciest pick in this comparison at the very top of the tier, rated at up to 1050MB/s, slower than the fanxiang pick at a higher price, but it carries the same 256-bit AES encryption software as Lexar's 1TB model, a feature none of the other 2TB picks here include. Its 10.5mm, 42g body remains the thinnest and lightest in this comparison even at 2TB.\n\nFor buyers specifically wanting encryption software on a 2TB drive, this is the only option in this comparison that offers it, making the higher price a genuine tradeoff for a specific feature rather than a pure premium on brand name alone.\n\nBest for buyers who specifically need built-in encryption software on a 2TB drive and are willing to pay the top of this tier for that feature.",
    specs: ["2TB capacity, up to 1050MB/s read", "256-bit AES encryption software included", "10.5mm thin, 42g weight"],
    pros: ["Only 2TB pick in this comparison with encryption software", "Thinnest and lightest 2TB drive here", "Consistent speed with the 1TB Lexar model in this lineup"],
    cons: ["Priciest pick in this comparison at the top of the tier", "Slower rated speed than the similarly priced fanxiang pick"],
    bestFor: "buyers who specifically need encryption software on a 2TB drive",
  }
];

export const howWeEvaluated = [
  { "title": "Price Per Terabyte at 2TB", "description": "Compared price specifically among 2TB options at this tier, since capacity is a solved variable and speed, brand, and features are the real differentiators." },
  { "title": "USB Generation Gap", "description": "Distinguished USB 3.2 Gen 2 drives from Gen 2x2 drives, since this comparison spans nearly a 4x speed difference despite similar pricing at points." },
  { "title": "Stated Longevity Figures", "description": "Noted which listings cite a specific TBW (terabytes written) rating or service length versus those that don't provide a comparable longevity figure." },
  { "title": "Documented Security Features", "description": "Checked which listings specifically include encryption software versus those offering only basic storage without a security feature." },
  { "title": "Brand Track Record", "description": "Weighed established storage brand names against newer entrants, particularly relevant at this higher price point where buyers have more to lose from a reliability issue." }
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
    subheading: "By Primary Use Case",
    table: {
      headers: ["If you mainly need", "Recommended pick"],
      rows: [
        ["2TB at the lowest price with health monitoring", "SSK 2TB Portable SSD"],
        ["The fastest 2TB drive for large file transfers", "fanxiang 2TB External SSD"],
        ["Built-in encryption software at 2TB", "Lexar ES3 2TB Portable SSD"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $250", "SSK 2TB Portable SSD ($239.99) or fanxiang 2TB External SSD ($246.99)"],
        ["$270-$280", "Sandisk 2TB Portable SSD, Old Model ($277.95)"],
        ["$290-$300", "Lexar ES3 2TB Portable SSD ($299.99)"],
      ],
    },
  },
  {
    subheading: "USB 3.2 Gen 2 vs Gen 2x2",
    cards: [
      { label: "Gen 2 (SSK, Sandisk, Lexar)", text: "Rated between 550MB/s and 1050MB/s, sufficient for most everyday transfers and moderate video work. Best if your host device doesn't support the faster Gen 2x2 standard anyway." },
      { label: "Gen 2x2 (fanxiang)", text: "Rated up to 2000MB/s, nearly 4x the SSK's speed, but only reaches that ceiling with a host device that also supports the 20Gbps standard. Best for heavy 4K or RAW workflows on a modern computer." },
    ],
    note: "Check your computer's actual USB port specification before paying extra for Gen 2x2 speed, since an older port caps you at the lower standard regardless of the drive's rating.",
  },
  {
    subheading: "By Feature Priority",
    table: {
      headers: ["Feature priority", "Recommended pick"],
      rows: [
        ["Encryption software for sensitive files", "Lexar ES3 2TB Portable SSD"],
        ["Documented longevity rating (TBW)", "fanxiang 2TB External SSD"],
      ],
    },
  },
  {
    subheading: "For Professional Photography Specifically",
    cards: [
      { label: "Look for", text: "A stated drop-protection figure and a physical carry option like a belt or bag hook, since a photographer's drive travels more than a desk-bound one." },
      { label: "In this comparison", text: "The Sandisk 2TB Portable SSD, Old Model specifically markets itself around professional photographer use with a stated 2-meter drop rating and rubber carry hook." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You need the fanxiang 2TB External SSD's Gen 2x2 speed for heavy 4K workflows, or the Lexar ES3 2TB Portable SSD's encryption software for sensitive files, both genuine capability upgrades over the base SSK pick." },
      { label: "Save if", text: "You just need reliable 2TB storage without a speed or security premium, where the SSK 2TB Portable SSD covers the need at the lowest price in this comparison with documented health monitoring." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "USB 3.2 Gen 2 vs Gen 2x2 Is a Real, Large Speed Gap",
    "explanation": "At the 2TB tier, the speed difference between standard USB 3.2 Gen 2 (topping out around 1050MB/s) and Gen 2x2 (up to 2000MB/s) is nearly 4x, a far bigger gap than typically separates drives at lower capacity tiers. This distinction matters specifically for buyers who regularly move very large files like 4K video projects, but it only delivers real benefit if your computer's own port also supports the faster standard. Check both the drive's rated generation and your host device's actual port specification before paying a premium for Gen 2x2 speed you can't fully use."
  },
  {
    "criterion": "A Stated TBW Rating Gives You a Concrete Longevity Number",
    "explanation": "TBW, or terabytes written, is a manufacturer's stated estimate of how much total data a drive can reliably write over its lifetime before performance may degrade. Not every listing provides this figure, but when one does, like the 1024TBW rating on the fanxiang pick in this comparison, it gives you something concrete to compare against your actual expected usage, rather than relying on vague reliability language. A drive without a stated TBW isn't necessarily less durable, but you have less to verify that claim against."
  },
  {
    "criterion": "Encryption Software Becomes More Relevant as Capacity Grows",
    "explanation": "A 2TB drive holds meaningfully more sensitive data than a smaller drive simply by virtue of storing more files, making built-in encryption software, like the 256-bit AES encryption on the Lexar pick in this comparison, a more consequential feature at this capacity tier than it might be on a small transfer drive. If you're storing client work, financial records, or other sensitive material at this capacity, prioritize a listing that explicitly names an encryption feature."
  },
  {
    "criterion": "Brand Premium Isn't Always Backed by a Specs Advantage",
    "explanation": "At this price tier, an established brand name doesn't automatically come with faster speed or more features, in this comparison, the branded Sandisk pick costs more than both a faster and a slower alternative without a clear specs win in either direction. This means paying more for brand recognition at 2TB is a legitimate but explicit tradeoff, not something you should assume comes bundled with better performance."
  },
  {
    "criterion": "Physical Carry Features Matter More at Higher Capacities",
    "explanation": "A drive holding 2TB of irreplaceable files is worth protecting during actual transport, not just during use, which is why features like a rubber carry hook for a belt loop or bag, as seen on the Sandisk pick in this comparison, become more relevant here than on a smaller everyday-carry drive. If your 2TB drive will regularly travel with you, weigh physical attachment options alongside the core speed and capacity specs."
  }
];

export const faq = [
  { "q": "Is a Gen 2x2 drive's 2000MB/s speed worth paying for if my laptop only has a standard USB-C port?", "a": "Only partially. If your laptop's port doesn't support the full 20Gbps Gen 2x2 standard, you'll still get a real speed benefit over a slower drive, but you won't reach the full advertised 2000MB/s. Check your laptop's actual port specification before assuming you'll see the full rated speed." },
  { "q": "What does a 1024TBW rating actually mean for how long my drive will last?", "a": "TBW estimates total data written over the drive's useful life before performance may start to decline, not a hard failure point. A 1024TBW rating means you could write roughly 1024 terabytes total, which for most users represents years of typical daily use, though heavy, continuous write workloads would reach that figure faster." },
  { "q": "Should I pay extra for a Sandisk or Samsung 2TB drive over a lesser-known brand with similar specs?", "a": "It depends on your risk tolerance and past experience. In this comparison, the branded Sandisk 2TB pick doesn't outperform the cheaper, faster fanxiang alternative on speed, so the extra cost is mainly buying brand track record and support history rather than better raw capability." },
  { "q": "Do I need encryption software on a portable SSD, or can I add it myself later?", "a": "You can add third-party encryption software to most drives yourself, but built-in encryption like the Lexar pick's 256-bit AES feature is typically easier to set up and manage than configuring a separate tool. If security is a priority and you'd rather not configure it manually, prioritize a drive with the feature built in." },
  { "q": "Why do some 2TB drives include a carry hook or belt loop attachment?", "a": "This is aimed at buyers, like professional photographers, who need to physically secure a valuable drive during travel or fieldwork rather than just carrying it loose in a bag. If your drive stays on a desk most of the time, this feature matters less than the core speed and capacity specs." },
  { "q": "Is 2TB overkill for most people, or is 1TB usually enough?", "a": "It depends on your file types and workflow. For general document and photo storage, 1TB is often plenty, but for video editing, large game libraries, or extensive RAW photo archives, 2TB provides meaningfully more comfortable headroom without needing to manage storage as actively." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-portable-ssds-under-200", "title": "Best Portable SSDs Under $200" },
  { "href": "/guide/best-portable-ssds-under-500", "title": "Best Portable SSDs Under $500" },
  { "href": "/guide/best-encrypted-portable-ssds", "title": "Best Encrypted Portable SSDs" },
  { "href": "/guide/best-fast-portable-ssds", "title": "Best Fast Portable SSDs" }
];
