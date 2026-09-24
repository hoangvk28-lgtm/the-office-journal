export const guideSlug = "best-document-scanners-under-200";
export const guideTitle = "4 Best Document Scanners Under $200 in 2026";
export const metaTitle = "Best Document Scanners Under $200";
export const metaDescription = "We compared document scanners under $200 by duplex support, scan speed, and portability, since duplex scanning finally becomes available at this tier.";
export const mainKeyword = "best document scanners under $200";
export const introParagraphs = [
  "Under $200, genuine duplex scanning, capturing both sides of a page in a single pass, becomes available for the first time in this budget range, a real functional upgrade over the simplex-only mobile scanners at lower price tiers.",
  "We compared this lineup on duplex support, scan speed, and portability, since a duplex scanner cuts real time off any two-sided document workflow, while the simplex mobile picks remain relevant for buyers who prioritize size and weight above all else."
];
export const lastUpdated = "2026-09-11";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/218Q14ube6L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-document-scanners-under-200-1",
    rank: 1,
    badge: "Best Overall",
    name: "Canon imageFORMULA R10 Portable Document Scanner",
    price: "$183.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/218Q14ube6L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08FBHTD9B?tag=theofficejournal-20",
    description: "This is the first genuinely duplex-capable scanner in this comparison, scanning both sides of a document simultaneously in color or black-and-white at up to 12 pages per minute with a 20-sheet automatic document feeder, a real functional leap over the simplex, single-sheet designs at lower price tiers. It's USB powered with no separate adapter needed, drawing 2.5W or less, and its built-in scanning software requires no separate installation.\n\nIt handles receipts, business cards, plastic or embossed cards, reports, and legal documents, and Canon rates it ENERGY STAR certified with a suggested daily volume of 500 scans, a figure aimed at light office use rather than heavy commercial throughput.\n\nBest for buyers who specifically need duplex scanning in a genuinely portable, USB-powered body.",
    specs: ["Duplex, 20-sheet ADF, up to 12ppm", "USB powered, built-in software, no install needed", "ENERGY STAR certified, rated 500 scans/day"],
    pros: ["Genuine duplex scanning, both sides in one pass", "20-sheet automatic feeder, faster than single-sheet designs", "Built-in software requires no separate installation"],
    cons: ["12ppm duplex speed is modest compared to desktop scanners", "Rated for light daily volume, not heavy office throughput"],
    bestFor: "buyers who need portable duplex scanning without a desktop-class price",
  },
  {
    id: "best-document-scanners-under-200-2",
    rank: 2,
    badge: "Best Ultra-Portable",
    name: "Epson Workforce ES-50 Compact Mobile Document Scanner",
    price: "$146.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21YnTPRESJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07KQZWPYN?tag=theofficejournal-20",
    description: "Epson markets this as the fastest and lightest mobile single-sheet-fed scanner in its class, scanning a single page in as quickly as 5.5 seconds, and it handles documents up to 8.5 by 72 inches, useful for receipts as well as unusually long pages. It's fully USB-powered with no batteries or external adapter needed, and its automatic feeding mode combines multiple single-sheet scans into one file.\n\nIncluded Epson ScanSmart software and Nuance OCR create searchable PDFs and editable Word or Excel files, and a TWAIN driver adds compatibility with most other imaging software.\n\nBest for buyers who want the lightest, most genuinely pocketable scanner and don't need duplex or automatic sheet feeding.",
    specs: ["Single-sheet-fed, scans a page in 5.5 seconds", "Handles paper up to 8.5 x 72 in", "USB powered, includes OCR software"],
    pros: ["Fastest single-page scan speed in this comparison", "Handles extra-long pages up to 72 inches", "No batteries or external power supply required"],
    cons: ["Simplex only, no duplex support", "No automatic document feeder for stacks of pages"],
    bestFor: "buyers who want the lightest, fastest single-page mobile scanner",
  },
  {
    id: "best-document-scanners-under-200-3",
    rank: 3,
    badge: "Best Budget Duplex Alternative",
    name: "Brother DS-640 Compact Mobile Document Scanner",
    price: "$134.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31Bx7Z39uKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B083R36CY4?tag=theofficejournal-20",
    description: "At under a foot long and about 1.5 pounds, this mobile scanner scans color and black-and-white documents at the same speed, up to 16ppm, and powers entirely through an included micro USB 3.0 cable. It undercuts both the Canon and Epson picks above on price while remaining genuinely pocketable.\n\nIts free iPrint&Scan software supports scanning to PC, network, cloud services, email, or OCR across Windows, Mac, and Linux, the broadest operating system coverage in this comparison.\n\nBest for buyers who want the lowest price in this tier and don't specifically need duplex scanning or an automatic feeder.",
    specs: ["Sheet-fed, up to 16ppm color and mono", "USB 3.0 powered, no separate power adapter needed", "Windows, Mac, and Linux compatible via iPrint&Scan"],
    pros: ["Lowest price in this comparison", "Same scan speed in color as black-and-white", "Broadest OS compatibility including Linux"],
    cons: ["Simplex only, no duplex or automatic feeder", "12ppm-class duplex scanners above offer more throughput per session"],
    bestFor: "buyers who want the lowest price in this tier without needing duplex scanning",
  },
  {
    id: "best-document-scanners-under-200-4",
    rank: 4,
    badge: "Best for Wide Paper Sizes",
    name: "HP HPPS100 Mobile Document & Photo Scanner",
    price: "$139.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/4143ozv-CML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0C6NL3HFX?tag=theofficejournal-20",
    description: "This sheet-fed scanner pulls each page through automatically at up to 15 pages per minute, one-sided at up to 1200 DPI, and it accepts an unusually wide paper size range from 2 by 2.9 inches up to 8.5 by 14 inches, covering everything from small cards to legal-length pages. Its free HP WorkScan software adds auto-crop, size detection, and background cleanup.\n\nCompared to the Canon R10's duplex capability, it remains simplex only, but it costs roughly $44 less while still offering automatic sheet feeding rather than a fully manual process.\n\nBest for buyers who want automatic feeding and wide paper size support without paying for duplex capability.",
    specs: ["Sheet-fed, 15ppm, up to 1200 DPI", "Accepts 2x2.9 in to 8.5x14 in paper sizes", "HP WorkScan software with auto-crop and cleanup"],
    pros: ["Automatic sheet feeding at a lower price than duplex picks", "Wide paper size range from small cards to legal-length", "Free WorkScan software adds auto-crop and cleanup"],
    cons: ["Simplex only, needs a second pass for two-sided pages", "No 20-sheet feeder like the Canon R10 above"],
    bestFor: "buyers who want automatic feeding and wide paper size support at a lower price than duplex models",
  }
];

export const howWeEvaluated = [
  { "title": "Duplex vs Simplex Scanning", "description": "Distinguished genuine two-sided-in-one-pass duplex scanning from simplex designs requiring a manual second pass." },
  { "title": "Automatic Feeding and Feeder Capacity", "description": "Compared automatic document feeder sheet capacity and scan speed across the lineup." },
  { "title": "Portability", "description": "Checked weight, power source, and physical size to judge real-world portability." },
  { "title": "Paper Size Flexibility", "description": "Compared accepted paper size ranges, including support for unusually long or small-format pages." },
  { "title": "Software and Daily Volume Rating", "description": "Checked included software features and any manufacturer-stated daily scan volume rating." }
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
        ["Genuine duplex scanning in a portable body", "Canon imageFORMULA R10 Portable Document Scanner"],
        ["The lightest, fastest single-page scanner", "Epson Workforce ES-50 Compact Mobile Document Scanner"],
        ["The lowest price in this tier", "Brother DS-640 Compact Mobile Document Scanner"],
        ["Wide paper size support with automatic feeding", "HP HPPS100 Mobile Document & Photo Scanner"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $135", "Brother DS-640 ($134.99)"],
        ["Under $150", "Epson ES-50 ($146.00) or HP HPPS100 ($139.99)"],
        ["Under $200", "Canon imageFORMULA R10 ($183.90)"],
      ],
    },
  },
  {
    subheading: "Duplex vs Simplex Scanning",
    cards: [
      { label: "Duplex (Canon imageFORMULA R10)", text: "Captures both sides of a page in one pass, saving real time on two-sided documents, at a roughly $44-49 premium over the simplex picks." },
      { label: "Simplex (Epson ES-50, Brother DS-640, HP HPPS100)", text: "Scans one side per pass, requiring a manual flip for two-sided pages, but costs less and in the Epson's case is faster per single page." },
    ],
    note: "If you regularly scan two-sided paperwork, the Canon R10's duplex feeder pays for itself in saved time. If you mostly scan single-sided pages or receipts, a simplex pick saves money without a real workflow cost.",
  },
  {
    subheading: "By Feeder Capacity",
    table: {
      headers: ["Your scanning volume", "Recommended pick"],
      rows: [
        ["Occasional single pages", "Epson ES-50 or Brother DS-640"],
        ["Small stacks needing automatic feeding", "HP HPPS100 or Canon imageFORMULA R10"],
      ],
    },
  },
  {
    subheading: "For Scanning Long Receipts or Extended Pages Specifically",
    cards: [
      { label: "Look for", text: "A stated maximum page length well beyond standard letter size, since many scanners cap out around 14 inches." },
      { label: "In this comparison", text: "The Epson ES-50 explicitly supports pages up to 72 inches long, far beyond any other pick here." },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      { label: "Spend more if", text: "You regularly handle two-sided documents, where the Canon imageFORMULA R10's genuine duplex feeder saves real manual re-scanning time." },
      { label: "Save if", text: "You mostly scan single-sided pages occasionally, where the Brother DS-640 delivers solid performance at the lowest price in this comparison." },
    ],
  },
];

export const buyingCriteria = [
  {
    "criterion": "Genuine Duplex Scanning Requires Simultaneous Two-Sided Capture, Not Just Two-Sided Paper Handling",
    "explanation": "The Canon imageFORMULA R10 captures both sides of a page in a single feed pass using two internal sensors, a real time-saver over a simplex scanner where you manually flip the page and run it through twice. Some listings use ambiguous language like \"two-sided\" without clarifying whether that means true simultaneous duplex capture or simply that the scanner can physically accept a page in either orientation. Look specifically for the word \"duplex\" alongside a stated scan speed for both sides, since that combination confirms genuine simultaneous capture rather than a manual workaround."
  },
  {
    "criterion": "Automatic Document Feeder Capacity Determines How Much Manual Babysitting a Multi-Page Scan Job Needs",
    "explanation": "The Canon R10's 20-sheet automatic feeder lets you load a stack and walk away, while a scanner without an ADF, like the Epson ES-50 in this comparison, requires you to feed each page individually even though it scans that single page quickly. If you regularly scan multi-page documents rather than one-off single sheets, the feeder capacity number matters more than the per-page scan speed alone. Check the specific sheet count stated for the automatic feeder, not just whether a feeder exists at all."
  },
  {
    "criterion": "Maximum Supported Page Length Varies Far More Than Most Buyers Expect",
    "explanation": "The Epson ES-50 explicitly supports pages up to 72 inches long, useful for scanning long receipts or oversized documents, while the other picks in this comparison cap out around 14 inches, standard for typical office paperwork. If your actual use case includes unusually long, narrow items like register receipts or architectural strip drawings, this spec matters more than any other in the entire comparison. Check the maximum page length explicitly stated in a listing rather than assuming any mobile scanner handles extra-long paper."
  },
  {
    "criterion": "Manufacturer-Stated Daily Scan Volume Signals the Duty Cycle a Scanner Is Actually Built For",
    "explanation": "The Canon R10 lists a suggested daily volume of 500 scans, a figure aimed at light personal or small-office use rather than a high-volume commercial operation running thousands of scans daily. Exceeding a manufacturer's suggested duty cycle regularly can shorten a scanner's working lifespan even if it doesn't fail immediately. Check whether a listing states a suggested or maximum daily volume, and compare that figure honestly against your actual expected usage before assuming any mobile scanner can handle heavy daily throughput."
  },
  {
    "criterion": "Wide Paper Size Acceptance Ranges Matter More If You Scan Cards or Receipts Alongside Standard Documents",
    "explanation": "The HP HPPS100 explicitly accepts paper from 2 by 2.9 inches up to 8.5 by 14 inches, a wider range than scanners built primarily around standard letter-sized documents. This matters if your scanning needs mix small items like business cards or receipts with standard paperwork, since a scanner not rated for small formats can jam or produce a poor scan on undersized paper. Check the specific minimum and maximum paper dimensions stated in a listing rather than assuming any document scanner handles small-format items equally well."
  }
];

export const faq = [
  { "q": "Does the Canon imageFORMULA R10 require driver installation to work?", "a": "No, its scanning software is built in and requires no separate installation, so it's ready to use as soon as you connect it via USB." },
  { "q": "What's the most common mistake buyers make when comparing duplex and simplex mobile scanners?", "a": "Assuming a higher per-page scan speed on a simplex scanner outweighs duplex capability, when in reality a duplex scanner often finishes a stack of two-sided documents faster overall since it eliminates the need for a manual second pass." },
  { "q": "Is the Canon imageFORMULA R10 worth the price jump over the Brother DS-640?", "a": "If you regularly scan two-sided documents, yes, the genuine duplex feeder and 20-sheet capacity save real time, but if you mostly scan single-sided pages occasionally, the Brother DS-640 covers that need at a lower price." },
  { "q": "How do I scan an unusually long document like a register receipt with these scanners?", "a": "The Epson ES-50 is specifically rated for pages up to 72 inches long, making it the only pick in this comparison suited to that task, since the other scanners cap out around standard letter or legal length." },
  { "q": "Can the HP HPPS100 handle small items like business cards without jamming?", "a": "Yes, its stated minimum paper size of 2 by 2.9 inches specifically covers small-format items like business cards and receipts, a wider range than a scanner built only for standard letter-sized paper." },
  { "q": "Is the Canon R10 suitable for high-volume daily scanning in a busy office?", "a": "Its manufacturer-suggested daily volume of 500 scans is aimed at light office or personal use, so a much higher-volume commercial operation should look toward a desktop-class scanner built for heavier duty cycles instead." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-document-scanners-under-150", "title": "Best Document Scanners Under $150" },
  { "href": "/guide/best-document-scanners-under-300", "title": "Best Document Scanners Under $300" },
  { "href": "/guide/best-printers-under-200", "title": "Best Printers Under $200" },
  { "href": "/guide/best-das-storage-under-200", "title": "Best DAS Storage Under $200" }
];
