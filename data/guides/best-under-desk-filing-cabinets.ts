// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Verify actual steel gauge, not just \"metal\" in the listing",
    "explanation": "A filing cabinet described as \"metal\" can still be built with a thin metal face over a particleboard or MDF core rather than genuine steel construction throughout, and even among fully steel cabinets, gauge thickness (a lower number means thicker, sturdier steel) varies meaningfully between products that look nearly identical in listing photos.\n\nThis matters directly for how the cabinet holds up to years of drawer use and how well it resists denting or flexing under a fully loaded drawer's weight.\n\nCheck the listing specifically for a stated steel gauge number, and be skeptical of the word \"metal\" alone without a gauge figure or a clear description of full-steel versus metal-faced construction."
  },
  {
    "criterion": "Check for full-extension versus partial-extension drawer slides",
    "explanation": "Full-extension drawer slides let a drawer pull completely out of the cabinet body, giving access to files at the very back, while partial-extension slides only pull the drawer out part way, leaving files at the rear harder to reach without leaning or reaching awkwardly into the cabinet.\n\nThis distinction matters a lot for daily usability, especially for a deep drawer holding hanging files toward the back, but rarely gets mentioned clearly in listing bullet points that focus on drawer count instead.\n\nCheck the listing specifically for \"full-extension\" language, and check reviews for mentions of how far drawers actually pull out in practice."
  },
  {
    "criterion": "Confirm anti-tip safety features if you have kids, pets, or plan a fully loaded cabinet",
    "explanation": "A filing cabinet with multiple drawers can tip forward if more than one drawer is pulled open at once while loaded with paper, a real safety hazard, and better-designed cabinets include an anti-tip interlock mechanism that physically prevents opening a second drawer while another is already open.\n\nThis matters more in a household with kids or pets who might pull on drawers, or if you plan to keep the cabinet fully loaded with heavy paper files rather than lightly used.\n\nCheck the listing specifically for a stated anti-tip or interlock safety feature, since this detail is frequently omitted from budget cabinet listings entirely."
  },
  {
    "criterion": "Match hanging file compatibility to your actual folder sizes",
    "explanation": "Not every filing cabinet drawer accommodates both letter-size and legal-size hanging files, some are sized for letter only, and a drawer that looks roomy in a photo may not actually fit the wider legal-size folders many home offices and small businesses still use for certain documents.\n\nThis matters directly if any portion of your filing includes legal-size paperwork, buying based on drawer count or overall cabinet size alone without checking hanging-file compatibility is a common and easily avoidable mistake.\n\nCheck the listing specifically for stated letter and/or legal-size hanging file compatibility, not just the general drawer dimensions."
  },
  {
    "criterion": "Weigh assembly requirements and real delivered weight before ordering",
    "explanation": "Filing cabinets range from fully assembled units shipped ready to use to flat-packed kits requiring meaningful assembly time and, for a heavy steel cabinet, more than one person to safely maneuver into place.\n\nThis matters because assembly difficulty and real shipped weight are easy to underestimate from a product photo, and a fully assembled cabinet costs more but eliminates that setup friction and the risk of a DIY assembly not being as sturdy as a factory-built one.\n\nCheck the listing for whether the cabinet ships assembled or requires assembly, and check the stated shipping weight against how much lifting and maneuvering you're actually prepared to handle at delivery."
  }
];

export const faq = [
  {
    "q": "How much under-desk clearance do I actually need?",
    "a": "These cabinets typically stand 24 to 28 inches tall, so measure the actual gap from your floor to the underside of your desktop at your normal sitting or standing height. A standing desk left at sitting height may only offer 22 to 28 inches of clearance, tighter than many buyers assume from the desk's maximum height rating."
  },
  {
    "q": "Is the Letaya lateral cabinet a good under-desk option?",
    "a": "It's included in this guide as a wider alternative rather than a like-for-like pedestal pick. At roughly 28 inches wide with a side-loading design, it's better suited to placement beside a desk with open floor space than squeezed into a tight under-desk gap the way the narrower Letaya 3 Drawer or SISESOL are built for."
  },
  {
    "q": "Which drawer should hold heavier files, the top or the bottom?",
    "a": "The heavier letter or legal file drawer should sit on the bottom, keeping the cabinet's center of gravity low and stable. Check the listing images for drawer labeling before ordering, since some budget units invert this order."
  },
  {
    "q": "Can I use the top of a filing cabinet as extra desk space?",
    "a": "Not comfortably for typing or writing. A pedestal cabinet top typically sits 24 to 28 inches high, lower than a standard desk surface at 28 to 30 inches. It works fine as a spot for a printer or supplies, which is exactly how the GYIIYUO's extended top and the DEVAISE open-shelf model are meant to be used."
  },
  {
    "q": "Does a rolling cabinet or a stationary one work better under my desk?",
    "a": "A rolling cabinet suits an L-shaped desk well, since it can tuck into the corner space and roll out for drawer access. A straight desk with a fixed under-desk gap is usually just as well served by a stationary cabinet, which tends to feel more solid when fully loaded with files."
  },
  {
    "q": "Why do two of the cabinets in this list not show a price?",
    "a": "Both DEVAISE models were listed without current pricing at the time of research. Check Amazon directly for current pricing before comparing them against the other cabinets in this list."
  }
];

export const guideSlug = "best-under-desk-filing-cabinets";

export const guideTitle = "The Best Under-Desk Filing Cabinets for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Letaya 3 Drawer Mobile File Cabinet with Lock"
        ],
        [
          "",
          "Letaya 3 Drawer Mobile File Cabinet with Lock"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "SISESOL 2 Drawer File Cabinet with Lock"
        ],
        [
          "",
          "DEVAISE 2 Drawer Mobile File Cabinet"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Genuine security for sensitive documents, worth it if the cabinet sits in a shared or semi-public space. In this comparison: Letaya 3 Drawer Mobile File Cabinet with Lock, Letaya 2 Drawer File Cabinet with Lock, SISESOL 2 Drawer File Cabinet with Lock, SteeLoong 2 Drawer File Cabinets, BYNSOE 2 Drawer File Cabinet with Lock."
      },
      {
        "label": "",
        "text": "Simpler and usually cheaper, fine for a private home office. In this comparison: GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop, DEVAISE Mobile File Cabinet, DEVAISE 2 Drawer Mobile File Cabinet."
      }
    ],
    "note": "Default to locking unless the cabinet stays in a fully private, controlled-access space."
  },
  {
    "subheading": "",
    "note": "Check each pick's listed drawer count and interior dimensions against your actual filing volume before buying."
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Confirmed letter and legal-size hanging file compatibility, not just general drawer dimensions."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need real steel construction, anti-tip safety, and full-extension drawers, where DEVAISE 2 Drawer Mobile File Cabinet's higher price buys real build-quality headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need light, occasional storage for a small volume of documents, where SISESOL 2 Drawer File Cabinet with Lock covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Checked each listing for an explicit under-desk claim, and separately assessed whether the physical footprint, pedestal versus lateral, is realistically likely to clear a typical under-desk gap regardless of marketing language."
  },
  {
    "title": "",
    "description": "Noted drawer counts and, where stated, drawer order, since a heavier file drawer positioned above a lighter box drawer is a less stable configuration than file-on-bottom."
  },
  {
    "title": "",
    "description": "Compared rolling caster models against stationary designs, since a rolling cabinet fits an L-shaped desk's corner positioning better than a fixed cabinet, while a stationary unit suits a straight desk just as well."
  },
  {
    "title": "Material and drawer front durability",
    "description": "Weighed all-metal construction against fabric drawer fronts, since fabric keeps weight and cost down but wears faster than metal under years of daily opening and closing."
  },
  {
    "title": "Value for price at each capacity tier",
    "description": "Weighed drawer count, confirmed under-desk fit, and included extras like a top shelf or extended surface against price across the range of price points in this comparison in this list."
  }
];

export const introParagraphs = [
  "A filing cabinet marketed as under-desk still needs to clear the space beneath your specific desk, and that gap varies more than most listings account for. Standing desks at sitting height often provide only 22 to 28 inches of clearance, while these cabinets typically stand 24 to 28 inches tall themselves, so measuring your actual clearance before ordering matters more than trusting the word under-desk in a title.",
  "This guide compares 7 compact pedestal and mobile filing cabinets built for tight under-desk spaces, plus one wider lateral cabinet included as a larger-footprint alternative rather than a like-for-like pick. 99, with two models currently listed without a price."
];

export const lastUpdated = "2026-07-25";

export const mainKeyword = "best under-desk filing cabinet";

export const metaDescription = "We compared 8 under-desk filing cabinets on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Under-Desk Filing Cabinets for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "letaya-3drawer-under-desk-cabinet",
    "rank": 1,
    "badge": "Best Overall Pedestal Fit",
    "name": "Letaya 3 Drawer Mobile File Cabinet with Lock, Under Desk Metal Filing Cabinet, Fully Assembled",
    "price": "$99.99",
    "rating": "4.5 stars from 1,373 Amazon ratings",
    "reviews": "4.5 stars from 1,373 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31Nz-Myx-1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09YVJN8R7?tag=theofficejournal-20",
    "description": "This Letaya explicitly markets itself as under-desk in its listing title and ships fully assembled, a genuine pedestal-style build with three drawers and a lock, well suited to sliding beneath a standing or sitting-height desk. The narrower pedestal footprint compared to a lateral cabinet makes it easier to fit into the tight space most desks actually leave underneath.\n\nBefore ordering, measure your desk's actual clearance from floor to the underside of the desktop at your typical sitting height, since a pedestal cabinet still needs 24 or more inches of vertical room even when marketed as under-desk. Fully assembled construction also means no setup time once it arrives.\n\nFully assembled, no setup required. That said, highest price alongside the Letaya lateral cabinet.",
    "specs": [
      "3 drawers with lock",
      "Fully assembled on arrival",
      "Metal construction",
      "Under-desk pedestal footprint",
      "Fits letter, legal, and A4 documents"
    ],
    "pros": [
      "compact under-desk pedestal design",
      "Fully assembled, no setup required",
      "Locking drawers for document security"
    ],
    "cons": [
      "Highest price alongside the Letaya lateral cabinet",
      "Still requires measuring your desk's actual clearance",
      "Three drawers add more height than a two-drawer pedestal"
    ],
    "bestFor": "Buyers who want a genuine pedestal-style cabinet explicitly built for under-desk use"
  },
  {
    "id": "gyiiyuo-2drawer-extended-desktop-cabinet",
    "rank": 2,
    "badge": "Best with Extra Work Surface",
    "name": "GYIIYUO 2 Drawer File Cabinet with 24 Inch Extended Desktop, Mobile Filing Cabinet with Side Bag",
    "price": "$56.99",
    "rating": "4.2 stars from 1,425 Amazon ratings",
    "reviews": "4.2 stars from 1,425 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41Aix6uWuJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DBZ98D94?tag=theofficejournal-20",
    "description": "The GYIIYUO adds a 24 inch extended top surface to a compact two-drawer mobile cabinet, though its own top sits at pedestal height, roughly 24 to 28 inches, lower than a standard desk surface of 28 to 30 inches, so treat that extended top as a printer stand or side shelf rather than a true secondary work surface. A side storage bag adds a small amount of extra organization for loose items.\n\nRolling casters make it easy to reposition, useful if your desk is L-shaped and benefits from a cabinet that can slide into a corner rather than staying fixed in one spot. Fabric drawer fronts keep the price down compared to an all-metal build.",
    "specs": [
      "2 drawers plus 24 inch extended top",
      "Rolling casters",
      "Fabric drawer fronts",
      "Side storage bag",
      "Fits letter and A4 documents"
    ],
    "pros": [
      "Extended top adds a spot for a printer or supplies",
      "Rolling casters for repositioning around an L-shaped desk",
      "Reasonable mid-range price",
      "Side bag adds extra small-item storage"
    ],
    "cons": [
      "Extended top sits lower than a standard desk surface",
      "Fabric drawer fronts less durable than metal",
      "Not the most compact option in this list"
    ],
    "bestFor": "L-shaped desk setups that want a rolling cabinet with a bit of extra top surface"
  },
  {
    "id": "letaya-2drawer-lateral-cabinet",
    "rank": 3,
    "badge": "Wider Lateral Alternative, Not Pedestal-Style",
    "name": "Letaya 2 Drawer File Cabinet with Lock, Metal Lateral Filing Cabinet, Hanging Letter/Legal/A4",
    "price": "$99.99",
    "rating": "4.2 stars from 1,671 Amazon ratings",
    "reviews": "4.2 stars from 1,671 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31ukHwAN+yL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTNJY2HB?tag=theofficejournal-20",
    "description": "We're including this Letaya as a wider lateral alternative rather than a like-for-like pedestal pick. Lateral cabinets orient drawers side to side across a wider body, roughly 28 inches wide by this listing's stated dimensions, which is a different footprint than the narrower front-facing pedestal cabinets that fit most easily into tight under-desk gaps.\n\nIf your desk has generous side clearance rather than a narrow center gap, a lateral cabinet like this can still work well and offers a stable, wide base for hanging letter, legal, or A4 files. But measure carefully before assuming it slides under a standard desk the way a pedestal cabinet does, since lateral cabinets are typically built for standalone placement beside a desk rather than tucked directly beneath it.\n\nLocking drawers for document security.",
    "specs": [
      "2 drawers with lock",
      "Lateral (side-loading) orientation",
      "Metal construction",
      "Approx. 28 inches wide",
      "Fits hanging letter, legal, A4 files"
    ],
    "pros": [
      "Stable, wide base for hanging files",
      "Locking drawers for document security",
      "Metal construction"
    ],
    "cons": [
      "Wider footprint may not clear a narrow under-desk gap",
      "Built more for beside-desk placement than under-desk tuck-in",
      "Same price as the more compact Letaya pedestal pick"
    ],
    "bestFor": "Buyers with generous side clearance who want a stable lateral cabinet rather than a narrow pedestal"
  },
  {
    "id": "sisesol-2drawer-under-desk-cabinet",
    "rank": 4,
    "badge": "Most Affordable Confirmed Under-Desk Fit",
    "name": "SISESOL 2 Drawer File Cabinet with Lock, Narrow Vertical Filing Cabinet, Under Desk File Cabinet",
    "price": "$44.99",
    "rating": "4.2 stars from 616 Amazon ratings",
    "reviews": "4.2 stars from 616 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31cXnfFFSML._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQL795FX?tag=theofficejournal-20",
    "description": "The SISESOL is the lowest priced cabinet in this list that also explicitly states under desk in its listing title, describing a narrow vertical design meant to fit into a tight gap rather than sit beside the desk. Its narrower profile compared to the lateral pick makes it a safer bet for tight under-desk clearance.\n\nEasy assembly is stated in the listing, worth factoring in if you'd rather not deal with a fully knocked-down build.\n\nThe standout detail is that narrow vertical profile suits tight clearance.",
    "specs": [
      "2 drawers with lock",
      "Narrow vertical, under-desk profile",
      "Metal construction",
      "Easy assembly",
      "Fits letter, A4, legal size"
    ],
    "pros": [
      "Lowest price among confirmed under-desk picks",
      "Narrow vertical profile suits tight clearance",
      "Locking drawers",
      "Easy assembly stated in listing"
    ],
    "cons": [
      "Two drawers offer less capacity than the Letaya 3 Drawer",
      "Still requires measuring exact desk clearance before buying"
    ],
    "bestFor": "Budget buyers who want a confirmed narrow under-desk fit"
  },
  {
    "id": "steeloong-2drawer-cabinet",
    "rank": 5,
    "badge": "Basic Compact Pedestal",
    "name": "SteeLoong 2 Drawer File Cabinets, Metal Office File Cabinet with Lock, Black",
    "price": "$64.99",
    "rating": "4.0 stars from 382 Amazon ratings",
    "reviews": "4.0 stars from 382 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31IIIyTZ29L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2QSQZ1X?tag=theofficejournal-20",
    "description": "The SteeLoong is a general two-drawer metal pedestal cabinet without an explicit under-desk claim in its listing, though its compact two-drawer size is consistent with the pedestal footprint that typically fits under most desks.\n\nA basic metal build with a lock covers the essentials without extra features like an extended top or side storage. If a confirmed under-desk claim matters to you, the Letaya 3 Drawer or SISESOL are safer choices at similar or lower prices.",
    "specs": [
      "2 drawers with lock",
      "Metal construction",
      "Compact pedestal footprint",
      "Black finish",
      "Fits standard file sizes"
    ],
    "pros": [
      "Compact two-drawer pedestal size",
      "Metal construction with lock",
      "Simple black finish",
      "Mid-range price"
    ],
    "cons": [
      "Lowest rating in this list",
      "No explicit under-desk claim in the listing"
    ],
    "bestFor": "Buyers who want a basic compact metal pedestal cabinet without extra features"
  },
  {
    "id": "bynsoe-2drawer-vertical-cabinet",
    "rank": 6,
    "badge": "Steel Vertical Cabinet",
    "name": "BYNSOE 2 Drawer File Cabinet with Lock, Vertical Filing Storage Cabinet, Steel, Assembly Required",
    "price": "$64.99",
    "rating": "4.0 stars from 1,303 Amazon ratings",
    "reviews": "4.0 stars from 1,303 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31VM3xK++PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9XYD75W?tag=theofficejournal-20",
    "description": "The BYNSOE is a vertical steel two-drawer cabinet, again without an explicit under-desk claim, but its vertical rather than lateral orientation puts it closer to the pedestal footprint that clears most under-desk gaps. Assembly is required, unlike the fully assembled Letaya 3 Drawer, so factor in setup time.\n\nBoth are worth keeping in mind before deciding.",
    "specs": [
      "2 drawers with lock",
      "Vertical steel construction",
      "Assembly required",
      "Standard file cabinet footprint",
      "Fits letter size documents"
    ],
    "pros": [
      "Vertical orientation suits most under-desk gaps",
      "Steel construction with lock",
      "Reasonable mid-range price"
    ],
    "cons": [
      "Assembly required, unlike the fully assembled Letaya",
      "No explicit under-desk claim in the listing",
      "Same rating as the SteeLoong"
    ],
    "bestFor": "Buyers comfortable measuring clearance themselves for a general-purpose vertical steel cabinet"
  },
  {
    "id": "devaise-open-shelf-printer-stand",
    "rank": 7,
    "badge": "Best with Open Shelf for a Printer",
    "name": "DEVAISE Mobile File Cabinet, Rolling Printer Stand with Open Storage Shelf, Fabric Vertical Filing Cabinet",
    "price": "Not currently listed",
    "rating": "4.3 stars from 1,947 Amazon ratings",
    "reviews": "4.3 stars from 1,947 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/419tPkjAfvL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09KT9RG1M?tag=theofficejournal-20",
    "description": "The DEVAISE combines a compact rolling file drawer with an open storage shelf on top, effectively doubling as a printer stand that still tucks into an under-desk or beside-desk gap. Rolling casters make repositioning easy, useful for pulling it out from under a desk when you need to access the open shelf.\n\nFabric drawer fronts keep the design lightweight but are less durable than an all-metal build over years of heavy use. Its price wasn't listed at the time of research, so check current Amazon pricing directly before comparing it against the other picks here.",
    "specs": [
      "Rolling file drawer plus open top shelf",
      "Fabric vertical filing cabinet",
      "Rolling casters",
      "Doubles as printer stand",
      "Fits A4 or letter size"
    ],
    "pros": [
      "Open top shelf doubles as printer stand space",
      "Rolling casters for easy repositioning",
      "Compact enough for most under-desk gaps"
    ],
    "cons": [
      "Price not currently listed",
      "Fabric drawer fronts less durable than metal",
      "Open shelf offers no lock or dust protection"
    ],
    "bestFor": "Buyers who want a rolling cabinet that doubles as a compact printer stand"
  },
  {
    "id": "devaise-2drawer-woodgrain-cabinet",
    "rank": 8,
    "badge": "Best Wood-Grain Aesthetic",
    "name": "DEVAISE 2 Drawer Mobile File Cabinet, Rolling Printer Stand, Fabric Vertical Filing Cabinet, Charcoal Black Wood Grain",
    "price": "Not currently listed",
    "rating": "4.1 stars from 2,403 Amazon ratings",
    "reviews": "4.1 stars from 2,403 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41UqyQ9zIGL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09ZXSY378?tag=theofficejournal-20",
    "description": "This DEVAISE sibling swaps the open shelf for a two-drawer configuration in a charcoal black wood-grain print, a more finished look for a home office that wants the cabinet to blend in visually rather than read as purely utilitarian metal. It shares the same rolling mobile base and compact vertical footprint as the open-shelf version.\n\nLike its sibling, the fabric drawer fronts trade some durability for a lighter build and lower cost, and current pricing wasn't listed at the time of research, so verify on Amazon directly before comparing against the metal picks in this list.\n\nThat said, price not currently listed.",
    "specs": [
      "2 drawers, fabric vertical filing cabinet",
      "Charcoal black wood grain print",
      "Rolling mobile base",
      "Compact vertical footprint",
      "Fits A4 or letter size"
    ],
    "pros": [
      "Wood-grain finish blends into home office decor",
      "Rolling mobile base",
      "Compact footprint"
    ],
    "cons": [
      "Price not currently listed",
      "Fabric drawer fronts less durable than metal",
      "No lock feature stated"
    ],
    "bestFor": "Buyers who want a rolling cabinet with a wood-grain look instead of plain metal"
  }
];

export const readTime = "10 min";

export const relatedGuides = [
  {
    "href": "/guide/best-lateral-wood-file-cabinets",
    "title": "Best Lateral Wood File Cabinets (2026)"
  },
  {
    "href": "/guide/best-2-drawer-wood-file-cabinets",
    "title": "Best 2-Drawer Wood File Cabinets (2026)"
  },
  {
    "href": "/guide/best-rolling-carts-with-drawers",
    "title": "Best Rolling Carts with Drawers (2026)"
  }
];

export const breadcrumbLabel = "Best Under-Desk Filing Cabinets";
