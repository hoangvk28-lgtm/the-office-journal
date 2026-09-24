export const guideSlug = "best-portable-ssds-under-200";
export const guideTitle = "4 Best Portable SSDs Under $200 in 2026";
export const metaTitle = "Best Portable SSDs Under $200 (2026)";
export const metaDescription = "We compared portable SSDs under $200 by real capacity per dollar, USB standard, and brand track record at the 1TB tier specifically.";
export const mainKeyword = "best portable ssds under $200";
export const introParagraphs = [
  "Under $200, 1TB becomes the realistic default capacity rather than a stretch, and the picks separate mainly on speed, brand, and how much of the price ceiling they actually use.",
  "We compared this lineup on price per gigabyte at the 1TB tier specifically, documented speed and health features, and brand track record, rather than ranking by price alone."
];
export const lastUpdated = "2026-09-11";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41wIe7KK-mL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-portable-ssds-under-200-1",
    rank: 1,
    badge: "Best Overall",
    name: "Sandisk 1TB Portable SSD (New Model)",
    price: "$159.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41wIe7KK-mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0H4H1SNMY?tag=theofficejournal-20",
    description: "This is Sandisk's newer 1TB model in this comparison, rated at up to 1000MB/s with a stated 2-meter drop protection figure, combining an established brand name with genuinely current specs rather than an older model still on shelves. At roughly $20 less than the SSK 1TB pick below, it undercuts a similarly specced competitor while keeping Sandisk's longer public track record.\n\nThe listing frames itself partly around AI-generated content storage, reflecting current buyer needs, but the core value proposition is the same as any 1TB SSD: fast, no-moving-parts storage in a pocket-sized body. Compared to the older Sandisk model at $182.90 also available in this price range, this new model offers the same or better specs for less, making the older listing worth avoiding if this newer one is in stock.\n\nBest for buyers who want a 1TB drive from an established brand at the best available price within that brand's own current lineup.",
    specs: ["1TB capacity, up to 1000MB/s read", "2-meter drop protection, no moving parts", "USB-C ready, pocket-sized design"],
    pros: ["Established Sandisk brand at a lower price than the SSK alternative", "Newer model than an older, pricier Sandisk 1TB listing", "Stated 2-meter drop protection figure"],
    cons: ["Slightly slower rated speed than the SSK and Lexar 1TB picks", "No documented S.M.A.R.T. or TRIM support unlike the SSK pick"],
    bestFor: "buyers who want an established brand's current 1TB model at the best price within that lineup",
  },
  {
    id: "best-portable-ssds-under-200-2",
    rank: 2,
    badge: "Best for Speed",
    name: "SSK Portable SSD 1TB",
    price: "$169.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31PngdJb7FL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BGL4SHY8?tag=theofficejournal-20",
    description: "This 1TB drive is rated at up to 1050MB/s, faster than the Sandisk pick above, and documents S.M.A.R.T. health diagnostics plus adaptive TRIM alongside a specific stated peak case temperature of 105.58 degrees F, details the Sandisk listing doesn't provide. It also explicitly supports 4K60Hz ProRes video capture direct from iPhone, a specific use case called out by name.\n\nAgainst the Sandisk pick, the roughly $10 price premium buys a faster rated speed and more documented health features, a reasonable trade for buyers who value those specifics over brand name alone. At 36.6g it's also notably light for a 1TB drive.\n\nBest for buyers who want the fastest documented speed at 1TB in this comparison along with explicit health monitoring support.",
    specs: ["1TB capacity, up to 1050MB/s read", "S.M.A.R.T. diagnostics and adaptive TRIM documented", "Explicit iPhone ProRes 4K60Hz support"],
    pros: ["Fastest rated speed among the 1TB picks in this comparison", "Documents S.M.A.R.T. and TRIM explicitly", "Named support for iPhone ProRes 4K video capture"],
    cons: ["Slightly pricier than the Sandisk 1TB alternative", "Less established brand recognition than Sandisk"],
    bestFor: "buyers who want the fastest documented 1TB drive with explicit health monitoring",
  },
  {
    id: "best-portable-ssds-under-200-3",
    rank: 3,
    badge: "Also Worth Considering",
    name: "Lexar ES3 1TB Portable SSD",
    price: "$179.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21RG2dX41kL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DYDHLN81?tag=theofficejournal-20",
    description: "This drive stands out for its slim, stylish 10.5mm profile, described as thinner than a standard card, weighing just 42g, alongside a documented 256-bit AES encryption software feature the other picks in this comparison don't offer. Rated up to 1050MB/s matching the SSK pick, it specifically lists iPhone 17 series compatibility while noting iPhone 14 and older aren't supported.\n\nThe encryption software is a genuine differentiator for buyers specifically concerned about data security on a portable drive, not just raw transfer speed or capacity. At the top of this trio's price range, the tradeoff is roughly $10-20 more than the Sandisk and SSK picks for that added security software and slimmer form factor.\n\nBest for buyers who specifically want built-in encryption software and the thinnest form factor among the 1TB options here.",
    specs: ["1TB capacity, up to 1050MB/s read", "256-bit AES encryption software included", "10.5mm thin, 42g weight"],
    pros: ["Only pick here with documented AES encryption software", "Thinnest and lightest 1TB drive in this comparison", "Matches the SSK pick's top rated speed"],
    cons: ["Priciest of the 1TB options in this specific comparison", "Explicitly doesn't support iPhone 14 and older models"],
    bestFor: "buyers who specifically want built-in encryption software on their 1TB drive",
  },
  {
    id: "best-portable-ssds-under-200-4",
    rank: 4,
    badge: "Skip This One",
    name: "Sandisk 1TB Portable SSD (Old Model)",
    price: "$182.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41wIe7KK-mL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C5JQ68FY?tag=theofficejournal-20",
    description: "This is an older Sandisk 1TB model rated at up to 800MB/s, slower than the newer Sandisk model in this same comparison while costing roughly $23 more, a rare case where the same brand's older listing is a genuinely worse deal than its own replacement. It's included here specifically because both listings are commonly visible in Amazon search results together, and buyers can easily miss which one is the current, better-priced model.\n\nUnless this specific listing goes on a temporary sale that undercuts the newer model, there's no scenario in this comparison where choosing it makes more sense than the newer Sandisk 1TB pick above at a lower price and faster speed.\n\nBest for buyers only if this specific listing happens to be discounted below the newer Sandisk model's price at the time of purchase, otherwise skip it in favor of the newer version.",
    specs: ["1TB capacity, up to 800MB/s read (older model)", "2-meter drop protection", "Superseded by a faster, cheaper newer model"],
    pros: ["Still a genuine Sandisk SSD with drop protection", "Occasionally appears in flash sales below its list price"],
    cons: ["Slower and pricier than Sandisk's own newer 1TB model", "No clear reason to choose this over the newer listing at full price"],
    bestFor: "buyers only if this specific listing is discounted below the newer Sandisk model's price",
  }
];

export const howWeEvaluated = [
  { "title": "Price Per Gigabyte at 1TB", "description": "Compared price specifically among 1TB options at this tier, since capacity is largely a solved variable here and the real differences are speed, features, and brand." },
  { "title": "Same-Brand Model Comparison", "description": "Checked for cases where a brand's own older and newer models both appear in search results, flagging when the older listing is a worse deal than its own replacement." },
  { "title": "Documented Security Features", "description": "Noted which listings specifically include encryption software versus those that don't mention any data security feature beyond basic storage." },
  { "title": "Health Monitoring Documentation", "description": "Distinguished listings that explicitly name S.M.A.R.T. and TRIM support from those that only describe general durability or speed claims." },
  { "title": "Real USB Bandwidth", "description": "Verified the documented USB generation and rated speed for each 1TB drive, since even within this narrow price band speed varies from 800MB/s to 1050MB/s." }
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
        ["An established brand at the best price", "Sandisk 1TB Portable SSD, New Model"],
        ["The fastest documented speed with health monitoring", "SSK Portable SSD 1TB"],
        ["Built-in encryption software", "Lexar ES3 1TB Portable SSD"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["$155-$165", "Sandisk 1TB Portable SSD, New Model ($159.99)"],
        ["$165-$175", "SSK Portable SSD 1TB ($169.99)"],
        ["$175-$185", "Lexar ES3 1TB Portable SSD ($179.99)"],
      ],
    },
  },
  {
    subheading: "New Model vs Old Model From the Same Brand",
    cards: [
      { label: "New Sandisk 1TB Model", text: "Faster at 1000MB/s and $23 cheaper than the older Sandisk 1TB listing also available in this price range. There's no scenario where the old model is the better pick at full price." },
      { label: "Old Sandisk 1TB Model", text: "Slower at 800MB/s and pricier, kept in this comparison only to flag the trap of accidentally buying the older, worse-value listing when both appear in search results." },
    ],
    note: "Always check the model name and stated speed carefully when a brand has two similarly named listings, since the newer one isn't always priced higher.",
  },
  {
    subheading: "By Feature Priority",
    table: {
      headers: ["Feature priority", "Recommended pick"],
      rows: [
        ["Encryption software for sensitive files", "Lexar ES3 1TB Portable SSD"],
        ["Health monitoring for long-term reliability tracking", "SSK Portable SSD 1TB"],
      ],
    },
  },
  {
    subheading: "For iPhone Video Work Specifically",
    cards: [
      { label: "Look for", text: "Explicit ProRes or 4K video capture support named in the listing, and confirmation of which iPhone models are supported, since older iPhones aren't always compatible." },
      { label: "In this comparison", text: "The SSK Portable SSD 1TB explicitly names 4K60Hz ProRes support, while the Lexar ES3 1TB Portable SSD confirms iPhone 17 compatibility but excludes iPhone 14 and older." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You specifically want the Lexar ES3 1TB Portable SSD's built-in encryption software for sensitive files, a feature none of the other picks in this comparison offer." },
      { label: "Save if", text: "You just need reliable 1TB storage without extra software features, where the Sandisk 1TB Portable SSD, New Model covers the need at the lowest price in this comparison." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "Watch for a Brand's Own Older Model Being a Worse Deal",
    "explanation": "It's genuinely possible for the same brand to have two similarly named listings live at once, an older model and its replacement, where the older one is both slower and more expensive than the newer version, as this comparison found with two Sandisk 1TB listings. Amazon's search results don't always sort by which model is current, so check the exact model name, stated release context (\"new model\" versus no such label), and rated speed carefully before assuming a higher-ranked search result is the better choice."
  },
  {
    "criterion": "Encryption Software Is a Genuine Differentiator, Not a Given",
    "explanation": "Built-in encryption software, like the 256-bit AES encryption on the Lexar pick in this comparison, protects files if the physical drive is lost or stolen, a real security benefit that most budget and mid-range portable SSDs simply don't include. If you're storing sensitive documents, financial records, or client data on a portable drive, check specifically for a named encryption feature rather than assuming any SSD offers this protection by default."
  },
  {
    "criterion": "1TB Speed Still Varies Meaningfully in This Price Band",
    "explanation": "Even among similarly priced 1TB drives, rated speed in this comparison ranges from 800MB/s up to 1050MB/s, roughly a 30 percent difference that matters for large file transfers like 4K video exports. Don't assume that landing in the same rough price range means landing in the same speed tier; check the specific rated MB/s figure for each 1TB option you're considering."
  },
  {
    "criterion": "Named Device Compatibility Beats General \"Works with iPhone\" Claims",
    "explanation": "Some listings specify exactly which device generations they support, like the Lexar pick explicitly confirming iPhone 17 while excluding iPhone 14 and older, rather than making a blanket compatibility claim. If you have an older device, a specific exclusion listed in the product details is far more useful and honest than a vague universal compatibility claim, and it's worth checking carefully before assuming your exact device model works."
  },
  {
    "criterion": "Health Monitoring Features Aren't Automatically Included at Higher Prices",
    "explanation": "Paying more within this specific price band doesn't guarantee S.M.A.R.T. health diagnostics or TRIM support, some pricier picks in this comparison document these features explicitly while a cheaper one in the same lineup doesn't mention them at all. If tracking your drive's long-term health matters, look for the specific feature name in the listing rather than assuming price alone signals which drives include it."
  }
];

export const faq = [
  { "q": "How do I know if I'm buying the newer or older version of a drive when both show up in search?", "a": "Check the exact model name for labels like \"new model\" and compare the stated rated speed and price across listings that look similar. In this comparison, an older Sandisk 1TB listing was both slower and more expensive than the brand's own newer version, so don't assume a higher price or a top search position means the better or more current product." },
  { "q": "Is encrypted software worth paying extra for on a portable SSD?", "a": "If you store sensitive files, like financial documents or client data, on a portable drive, built-in encryption software provides real protection if the physical drive is ever lost or stolen. For general file transfer and backup without sensitive content, it's a nice-to-have rather than a necessity." },
  { "q": "Does a 1TB SSD at this price still need TRIM and S.M.A.R.T. support?", "a": "These features aren't strictly necessary for the drive to function, but they help maintain consistent performance and let you monitor the drive's health over time. Not every 1TB drive in this price range documents them, so check specifically if long-term reliability tracking matters to you." },
  { "q": "Will these 1TB drives work with my older iPhone?", "a": "Check the specific listing carefully. Some drives explicitly exclude older iPhone models, like the Lexar pick in this comparison which doesn't support iPhone 14 and older, while others may work more broadly. Don't assume a general \"works with iPhone\" claim covers your exact model without confirming." },
  { "q": "What's the real speed difference between 800MB/s and 1050MB/s in daily use?", "a": "For everyday documents and photos, the difference is barely noticeable. For large files like 4K video exports or big game installs, the faster drive can save meaningful time, roughly 20 to 30 percent faster on large sequential transfers, though real-world results depend on your computer's own port speed too." },
  { "q": "Should I buy from a less established brand if it offers a lower price at the same specs?", "a": "It can be a reasonable choice if the specs and documented features genuinely match, but an established brand's longer track record provides more confidence for buyers who've had reliability issues with unfamiliar brands before. Weigh this against how much the price difference actually matters to you." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-portable-ssds-under-150", "title": "Best Portable SSDs Under $150" },
  { "href": "/guide/best-portable-ssds-under-300", "title": "Best Portable SSDs Under $300" },
  { "href": "/guide/best-1tb-portable-ssds", "title": "Best 1TB Portable SSDs" },
  { "href": "/guide/best-encrypted-portable-ssds", "title": "Best Encrypted Portable SSDs" }
];
