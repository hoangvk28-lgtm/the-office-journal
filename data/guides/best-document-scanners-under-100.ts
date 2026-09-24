export const guideSlug = "best-document-scanners-under-100";
export const guideTitle = "4 Best Document Scanners Under $100 in 2026";
export const metaTitle = "Best Document Scanners Under $100";
export const metaDescription = "We compared document scanners under $100 by scan method, portability, and resolution, since a flatbed and a handheld wand suit very different setups.";
export const mainKeyword = "best document scanners under $100";
export const introParagraphs = [
  "Under $100, the document scanner field is still dominated by flatbed and handheld wand designs rather than the sheet-fed office scanners that show up at higher price tiers, so the real decision is portability versus scan consistency.",
  "We compared this lineup on scan method, resolution options, and how each device handles storage and power, since these details, not brand name, determine whether a scanner fits your actual workflow at this price."
];
export const lastUpdated = "2026-09-11";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/31PFgs9o70S._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-document-scanners-under-100-1",
    rank: 1,
    badge: "Best Overall",
    name: "Canon Canoscan Lide 300 Scanner",
    price: "$69.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31PFgs9o70S._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07G5XZVLQ?tag=theofficejournal-20",
    description: "This flatbed scanner lays documents flat under a lid for a consistent, evenly lit scan, a real step up in reliability from a hand-dragged wand for anyone scanning at a fixed desk location. Its Auto Scan Mode automatically detects what's on the glass and adjusts settings without manual input, whether it's a document, receipt, or photo.\n\nAt under $70 it undercuts every handheld pick in this comparison on price while offering the more consistent scan method, a genuine tradeoff of portability for reliability.\n\nBest for buyers scanning primarily at a desk who want consistent results without a hand-steadying learning curve.",
    specs: ["Flatbed scanner, USB connection", "Auto Scan Mode, automatic content detection", "Supports PDF, copy, and send functions"],
    pros: ["Cheapest pick in this comparison despite being a flatbed", "Auto Scan Mode removes manual setting adjustments", "Consistent, evenly lit scans without hand-steadying"],
    cons: ["Not portable, needs a flat desk surface", "Single-page scanning only, no automatic document feeder"],
    bestFor: "buyers who want a reliable desk-based flatbed scanner at the lowest price",
  },
  {
    id: "best-document-scanners-under-100-2",
    rank: 2,
    badge: "Best Portable Simplex",
    name: "HP HPPS100 Mobile Document & Photo Scanner",
    price: "$139.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/4143ozv-CML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6NL3HFX?tag=theofficejournal-20",
    description: "Unlike the handheld wand scanners in the lower price tier, this is a true sheet-fed scanner: you feed a single page in and it pulls the sheet through automatically at up to 15 pages per minute, a meaningfully faster and more hands-off process than dragging a wand. It scans one-sided at up to 1200 DPI and handles paper sizes from 2 by 2.9 inches up to 8.5 by 14 inches.\n\nIts free HP WorkScan software adds auto-scan and size detection along with cropping and background cleanup, features none of the flatbed or wand scanners in this comparison offer.\n\nBest for buyers who want automatic sheet feeding rather than manual page handling, even at a simplex, single-sided scan.",
    specs: ["Sheet-fed, 15ppm, up to 1200 DPI", "One-sided simplex scanning, USB 2.0 powered", "HP WorkScan software with auto-crop and cleanup"],
    pros: ["Automatic sheet feeding, no manual page dragging needed", "15ppm scan speed, faster than any wand scanner", "Free WorkScan software adds auto-crop and cleanup"],
    cons: ["Simplex only, can't scan both sides in one pass", "Priciest pick in this comparison at $139.99"],
    bestFor: "buyers who want automatic sheet feeding without paying for duplex scanning",
  },
  {
    id: "best-document-scanners-under-100-3",
    rank: 3,
    badge: "Best Budget Portable",
    name: "Hczrc Portable Handheld Scanner",
    price: "$53.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51XgbfqXXFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BBVQ2HN5?tag=theofficejournal-20",
    description: "This handheld wand scanner needs no software installation, running on 2 AA batteries and saving files directly to an included 16GB micro SD card, making it usable anywhere a memory card reader exists. Dragging it across a page in one steady pass triggers the scan, with a green indicator light confirming completion.\n\nIt offers three resolution modes, 300, 600, and 900 DPI, letting you balance file size against detail, and saves output as either JPEG or PDF.\n\nBest for buyers who want the lowest possible price and are comfortable with a manual, hand-steadied scanning technique.",
    specs: ["Handheld wand, up to 900 DPI, 3 resolution modes", "16GB micro SD card included, JPEG/PDF output", "Powered by 2 AA batteries, no software required"],
    pros: ["Lowest price in this comparison by a wide margin", "No software installation, standalone SD card operation", "Three resolution modes for size versus detail tradeoffs"],
    cons: ["Requires steady hand-dragging technique for clean scans", "No automatic sheet feeding like the HP pick above"],
    bestFor: "buyers who want the cheapest possible option and don't mind manual technique",
  },
  {
    id: "best-document-scanners-under-100-4",
    rank: 4,
    badge: "Best for Book Pages",
    name: "AOZBZ Portable Handheld Document Scanner",
    price: "$56.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/212A1PjdNIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CKLJ9BQH?tag=theofficejournal-20",
    description: "This wand scanner specifically suits bound book pages, since dragging it by hand across a curved or open-book surface works where a flatbed or sheet-fed scanner physically cannot. It shares the Hczrc pick's three resolution tiers of 300, 600, and 900 DPI but supports up to a 32GB micro SD card, doubling the storage headroom.\n\nAt roughly 0.31 pounds it's genuinely light enough for a bag, and it runs on the same 2 AA battery power source as the Hczrc for straightforward field use.\n\nBest for buyers who specifically need to digitize book pages or bound documents no other pick in this comparison can handle.",
    specs: ["Handheld wand, up to 900 DPI, 3 resolution modes", "Supports up to 32GB micro SD card, JPEG/PDF output", "0.31 lb weight, powered by 2 AA batteries"],
    pros: ["Only pick here designed for scanning bound book pages", "Supports larger 32GB SD cards for bulk scanning", "Very lightweight at 0.31 lb for travel"],
    cons: ["Same manual hand-steadying skill as any wand scanner", "No automatic feeding, unlike the HP sheet-fed pick"],
    bestFor: "buyers who need to scan book pages or bound documents specifically",
  }
];

export const howWeEvaluated = [
  { "title": "Scan Method", "description": "Distinguished flatbed, handheld wand, and automatic sheet-fed designs, since each handles paper very differently." },
  { "title": "Scan Speed and Automation", "description": "Compared automatic sheet feeding against manual, hand-operated scanning approaches." },
  { "title": "Resolution and Format Support", "description": "Checked maximum DPI, selectable resolution modes, and output file formats across the lineup." },
  { "title": "Portability and Power Source", "description": "Compared weight, size, and whether each scanner runs on batteries or USB power." },
  { "title": "Storage and Software Requirements", "description": "Noted memory card capacity where applicable and whether companion software is required or optional." }
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
    subheading: "By Scan Method",
    table: {
      headers: ["If you need", "Recommended pick"],
      rows: [
        ["A reliable flatbed scan at the lowest price", "Canon Canoscan Lide 300 Scanner"],
        ["Automatic sheet feeding without manual dragging", "HP HPPS100 Mobile Document & Photo Scanner"],
        ["The cheapest possible portable option", "Hczrc Portable Handheld Scanner"],
        ["A wand that handles bound book pages", "AOZBZ Portable Handheld Document Scanner"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $57", "Hczrc ($53.99) or AOZBZ ($56.99)"],
        ["Under $70", "Canon Canoscan Lide 300 ($69.99)"],
        ["Under $140", "HP HPPS100 ($139.99)"],
      ],
    },
  },
  {
    subheading: "Automatic Feeding vs Manual Scanning",
    cards: [
      { label: "Automatic feed (HP HPPS100)", text: "Pulls a single page through the scanner mechanically at 15ppm, faster and more consistent than manual technique, but simplex only." },
      { label: "Manual scanning (Canon flatbed, Hczrc, AOZBZ)", text: "Either lays a page flat under a lid or requires a hand-dragged wand pass, both slower per page but cheaper." },
    ],
    note: "If you regularly scan multi-page stacks, the HP's automatic feed saves real time despite its higher price and simplex limitation.",
  },
  {
    subheading: "By Resolution Needs",
    table: {
      headers: ["Your use case", "Recommended pick"],
      rows: [
        ["Quick reference copies of receipts", "Hczrc or AOZBZ at 300 DPI mode"],
        ["Documents needing clear detail later", "HP HPPS100 at 1200 DPI"],
        ["General desk-based document and photo scanning", "Canon Canoscan Lide 300 Scanner"],
      ],
    },
  },
  {
    subheading: "For Scanning Multi-Page Stacks Specifically",
    cards: [
      { label: "Look for", text: "Automatic sheet feeding rather than a manual flatbed or wand process that requires handling each page individually." },
      { label: "In this comparison", text: "The HP HPPS100 is the only pick with true automatic sheet feeding at 15 pages per minute." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You want faster, hands-off multi-page scanning, where the HP HPPS100's automatic feed justifies its higher price over the manual picks." },
      { label: "Save if", text: "You mainly scan single pages occasionally, where the Canon Canoscan Lide 300 delivers a reliable flatbed scan for under $70." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "Automatic Sheet Feeding Changes the Actual Scanning Workflow, Not Just the Speed",
    "explanation": "A sheet-fed scanner like the HP HPPS100 pulls a page through mechanically once you insert it, so you don't need to hold the device steady or reposition anything mid-scan, unlike a flatbed where you lift a lid and place a page or a wand where you drag by hand. This matters most if you're scanning several separate pages in one sitting, since a mechanical feed removes the repetitive manual step each page would otherwise require. Check whether a listing says \"auto document feed\" or \"sheet-fed\" versus \"flatbed\" or \"handheld,\" since these terms describe fundamentally different physical processes."
  },
  {
    "criterion": "Simplex Versus Duplex Scanning Determines Whether Two-Sided Documents Need a Second Pass",
    "explanation": "Simplex scanning captures only one side of a page per pass, meaning a two-sided document requires manually flipping the page and scanning again, while duplex scanning captures both sides in a single feed. None of the picks in this specific price tier support duplex scanning, so if you frequently scan two-sided documents, budget for a second manual pass or look to a higher price tier for genuine duplex support. Check the listing specifically for the word \"duplex\" or \"two-sided,\" since \"double-sided\" claims sometimes just mean the scanner can physically accept either orientation, not that it captures both sides at once."
  },
  {
    "criterion": "DPI Resolution Determines Whether Fine Print Stays Legible After Scanning",
    "explanation": "A 300 DPI scan is adequate for a quick reference copy but can blur small text if you zoom in later, while a 900 or 1200 DPI setting captures far more detail at the cost of a larger file size. The HP pick's stated 1200 DPI maximum is the highest resolution figure in this comparison, worth prioritizing if you'll be reading fine print off the scanned file rather than just archiving it. Check for the specific DPI number stated in the listing rather than trusting a vague \"high resolution\" claim."
  },
  {
    "criterion": "A Wand Scanner's Battery Dependency Is a Real Ongoing Cost, Not a One-Time Purchase Decision",
    "explanation": "The Hczrc and AOZBZ handheld scanners both run on 2 AA batteries that aren't included in the box, meaning you're responsible for keeping spares on hand indefinitely rather than paying once for a rechargeable built-in battery. This keeps the unit cheap and the batteries are universally available, but it's a genuine ongoing cost and inconvenience worth weighing against a USB-powered option like the flatbed pick in this comparison, which never needs batteries at all."
  },
  {
    "criterion": "Included Software Can Add Real Functionality Beyond Raw Scanning",
    "explanation": "The HP HPPS100 includes free WorkScan software with auto-crop, size detection, and background cleanup, features that meaningfully improve the usability of the raw scan without extra editing steps elsewhere. The handheld wand scanners in this comparison, by contrast, require no software but also offer none of these automatic cleanup features, saving the file exactly as captured. Check whether a listing bundles software and what that software actually does, rather than assuming all scanners in a price range offer comparable post-scan processing."
  }
];

export const faq = [
  { "q": "Can the HP HPPS100 scan both sides of a page automatically?", "a": "No, it's a simplex, one-sided scanner, so you'll need to manually flip the page and run it through a second time to capture both sides." },
  { "q": "What's the most common mistake buyers make when choosing between a wand and a sheet-fed scanner at this price?", "a": "Assuming a handheld wand will be as fast as automatic sheet feeding, when in reality a wand requires a steady manual pass per page and is meaningfully slower for scanning multiple documents in one sitting." },
  { "q": "Is the HP HPPS100 worth the price jump over the Canon Canoscan Lide 300 flatbed?", "a": "If you regularly scan multi-page stacks and want automatic feeding, yes, but if you mostly scan single pages or photos occasionally, the Canon flatbed's lower price and evenly lit scan quality make more sense." },
  { "q": "How do I get the best results from a handheld wand scanner like the Hczrc or AOZBZ?", "a": "Drag the wand across the page at a slow, steady, even pace in one continuous motion, since inconsistent speed is the most common cause of warped or streaky scans." },
  { "q": "Do I need to buy anything extra to use the Hczrc or AOZBZ scanners out of the box?", "a": "Yes, both require 2 AA batteries that aren't included, though both do ship with a micro SD card for storage already included." },
  { "q": "Can I use the AOZBZ wand scanner to digitize an open book without damaging the spine?", "a": "Yes, since you drag the wand by hand across the open page rather than feeding it through rollers, it avoids the strain a sheet-fed or flatbed scanner could put on a book's binding." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-document-scanners-under-75", "title": "Best Document Scanners Under $75" },
  { "href": "/guide/best-document-scanners-under-150", "title": "Best Document Scanners Under $150" },
  { "href": "/guide/best-printers-under-100", "title": "Best Printers Under $100" },
  { "href": "/guide/best-das-storage-under-200", "title": "Best DAS Storage Under $200" }
];
