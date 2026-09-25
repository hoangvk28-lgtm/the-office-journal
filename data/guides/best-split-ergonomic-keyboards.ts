// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-split-ergonomic-keyboards";

export const guideTitle = "The Best Split Ergonomic Keyboards, from First Split to Fully Programmable";

export const breadcrumbLabel = "Best Split Ergonomic Keyboards";

export const metaTitle = "Best Split Ergonomic Keyboards (2026)";

export const metaDescription = "Split keyboards range from one-piece curved boards to fully separate, tented mechanical designs. We compared eight on separation, tenting, layout, connection and price.";

export const mainKeyword = "ergonomic split keyboard";

export const introParagraphs = [
  "A split keyboard divides the keys so your hands can sit further apart and straighter than on a standard board. How much it changes depends on the design: fixed or hinged splits keep one body; fully separable halves let you set the distance; tenting raises the middle.",
  "Layout matters for the learning curve. Row-staggered splits keep standard key positions; column-staggered designs like the Kinesis Advantage360 take longer to adapt to. If you have pain or a medical condition, speak to a clinician; this guide compares features, not health outcomes.",
  "Our comparison is based on published specifications, not hands-on testing."
];

export const lastUpdated = "2026-07-23";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "logitech-ergo-k860-split",
    "rank": 1,
    "badge": "Best One-Piece Split Keyboard",
    "name": "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    "price": "$148.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZWK2TQT?tag=theofficejournal-20",
    "description": "The Logitech Ergo K860 is the easiest step into a split layout: the keys are divided and angled on one curved, domed body, with negative tilt available and a cushioned palm rest attached. It connects over Bluetooth or a USB receiver and pairs with multiple devices.\n\nThe halves don't separate, so you can't adjust the distance between them, and it has a large footprint.",
    "specs": [
      "Layout: fixed split, row-staggered",
      "Shape: domed, negative tilt option",
      "Palm rest: attached, cushioned",
      "Connection: Bluetooth + USB receiver",
      "Multi-device"
    ],
    "pros": [
      "Familiar row-staggered layout",
      "Negative tilt",
      "Wireless multi-device"
    ],
    "cons": [
      "Halves don't separate",
      "Large footprint",
      "Not mechanical"
    ],
    "bestFor": "First-time split users who want wireless convenience.",
    "summary": "Logitech's wireless curved split-layout keyboard with negative tilt and an attached palm rest.",
    "skipIf": "You want adjustable separation; the Kinesis Freestyle2 splits fully."
  },
  {
    "id": "kinesis-advantage360-professional",
    "rank": 2,
    "badge": "Best Fully Programmable Split",
    "name": "KINESIS Advantage360 Professional Split Ergonomic Keyboard",
    "price": "$479.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31j7o6HXFTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CT444BH6?tag=theofficejournal-20",
    "description": "The Kinesis Advantage360 Professional is the most thoroughly ergonomic design here: fully separate halves, column-staggered keys in contoured wells, adjustable tenting, quiet mechanical switches and fully programmable open-source firmware, over Bluetooth.\n\nIt was by far the most expensive keyboard here at the time of writing, and the column-staggered, key-well layout takes time to learn.",
    "specs": [
      "Layout: fully split, column-staggered",
      "Keys: contoured wells, quiet mechanical",
      "Tenting: adjustable",
      "Firmware: programmable, open-source",
      "Connection: Bluetooth"
    ],
    "pros": [
      "Most adjustable here",
      "Fully programmable",
      "Contoured key wells"
    ],
    "cons": [
      "Most expensive here",
      "Steep learning curve",
      "Large"
    ],
    "bestFor": "Heavy typists ready to relearn for a fully ergonomic layout.",
    "summary": "Kinesis's fully separable, column-staggered keyboard with contoured key wells, tenting and open-source firmware.",
    "skipIf": "You want a familiar layout; the Freestyle2 keeps standard key positions."
  },
  {
    "id": "kinesis-freestyle2-9inch",
    "rank": 3,
    "badge": "Best Entry-Level True Split",
    "name": "KINESIS Freestyle2 Ergonomic Keyboard for PC (9\" Separation)",
    "price": "$95.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41V9ZhVnSZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B00CMALD3E?tag=theofficejournal-20",
    "description": "The Kinesis Freestyle2 is the affordable fully split keyboard: two low-profile halves joined by a cable that allows up to 9 inches of separation, with a standard row-staggered layout, wired USB and no software required.\n\nIt lies flat out of the box; tenting needs an accessory kit such as the VIP3 lifters.",
    "specs": [
      "Layout: split, row-staggered",
      "Separation: up to 9\"",
      "Connection: wired USB",
      "Software: none required",
      "Profile: low"
    ],
    "pros": [
      "Adjustable separation",
      "Familiar layout",
      "No software"
    ],
    "cons": [
      "Flat without accessories",
      "Wired",
      "No palm rest included"
    ],
    "bestFor": "Trying a true split without a big spend.",
    "summary": "Kinesis's cable-connected split keyboard with up to 9 inches between halves, wired, no software needed.",
    "skipIf": "You want tenting included; the Freestyle2 with VIP3 lifters adds it."
  },
  {
    "id": "logitech-wave-keys-sand-entry",
    "rank": 4,
    "badge": "Gentlest Starting Point (Not Split)",
    "name": "Logitech Wave Keys Wireless Ergonomic Keyboard with Cushioned Palm - Sand",
    "price": "$59.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41t-gi6gelL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GVQ99JB5?tag=theofficejournal-20",
    "description": "The Logitech Wave Keys is included as a gentler starting point: a one-piece keyboard with a wave-shaped key layout and cushioned palm rest, compact, powered by AAA batteries, over Bluetooth or USB receiver.\n\nIt isn't a split keyboard, so it doesn't separate or angle the halves, but it may suit someone who wants a small change from a standard board.",
    "specs": [
      "Layout: one-piece wave",
      "Palm rest: built in",
      "Power: AAA batteries",
      "Connection: Bluetooth or USB receiver"
    ],
    "pros": [
      "Little adjustment needed",
      "Compact",
      "Low price"
    ],
    "cons": [
      "Not a split",
      "No separation or tenting",
      "Battery-powered"
    ],
    "bestFor": "A modest step up from a flat keyboard.",
    "summary": "A one-piece wave-layout wireless keyboard with cushioned palm rest, not a split.",
    "skipIf": "You want a real split; the Nulea or Freestyle2 separates the keys."
  },
  {
    "id": "nulea-wireless-split",
    "rank": 5,
    "badge": "Best Budget Wireless Split",
    "name": "Nulea Wireless Ergonomic Keyboard, Split Keyboard with Cushioned Wrist Rest",
    "price": "$49.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41nJBsy2cuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3PCSK8B?tag=theofficejournal-20",
    "description": "The Nulea is the lowest-cost split here: a row-staggered layout on a hinged body, so the halves angle apart, with a cushioned wrist rest, Bluetooth and USB-C wireless, and a rechargeable battery. It works with Windows and Mac.\n\nA hinge limits how far apart the halves can go compared with a fully separable design.",
    "specs": [
      "Layout: hinged split, row-staggered",
      "Wrist rest: cushioned",
      "Connection: Bluetooth + USB-C wireless",
      "Battery: rechargeable USB-C"
    ],
    "pros": [
      "Lowest price here",
      "Wireless and rechargeable",
      "Wrist rest"
    ],
    "cons": [
      "Limited separation",
      "Less established brand",
      "No tenting listed"
    ],
    "bestFor": "Trying a split layout wirelessly on a small budget.",
    "summary": "A hinged split keyboard with cushioned wrist rest, Bluetooth and rechargeable USB-C.",
    "skipIf": "You want tenting; the Arteck adjusts it."
  },
  {
    "id": "arteck-split-ergonomic-tenting",
    "rank": 6,
    "badge": "Best Budget Split with Tenting",
    "name": "Arteck Split Ergonomic Keyboard with Cushioned Wrist and Palm Rest",
    "price": "$54.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BKKYRQ31?tag=theofficejournal-20",
    "description": "The Arteck adds adjustable tenting to a low-cost hinged split, raising the middle of the keyboard, with a cushioned wrist and palm rest and a 2.4GHz USB receiver.\n\nArteck lists Windows desktop and laptop compatibility; Bluetooth isn't mentioned.",
    "specs": [
      "Layout: hinged split, row-staggered",
      "Tenting: adjustable",
      "Rest: cushioned wrist/palm",
      "Connection: 2.4GHz USB receiver",
      "OS: Windows"
    ],
    "pros": [
      "Tenting at a low price",
      "Wrist rest",
      "Familiar layout"
    ],
    "cons": [
      "No Bluetooth listed",
      "Windows-focused",
      "Limited separation"
    ],
    "bestFor": "Budget buyers who want tenting.",
    "summary": "A hinged split keyboard with adjustable tenting and a cushioned wrist and palm rest.",
    "skipIf": "You use a Mac; the Nulea lists Mac compatibility."
  },
  {
    "id": "kinesis-freestyle2-vip3-lifters",
    "rank": 7,
    "badge": "Best Split with Tenting Kit",
    "name": "KINESIS Freestyle2 USB-A Ergonomic Keyboard w/ VIP3 Lifters",
    "price": "$141.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/310QWdQ0GbL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0089ZLENA?tag=theofficejournal-20",
    "description": "This bundle pairs the Freestyle2 split keyboard with Kinesis's VIP3 lifters, which add adjustable tenting to the otherwise flat halves. It's wired USB-A with no software required.\n\nIt costs about $45 more than the Freestyle2 alone at the time of writing.",
    "specs": [
      "Layout: split, row-staggered",
      "Tenting: VIP3 lifters (adjustable)",
      "Connection: wired USB-A",
      "Software: none required"
    ],
    "pros": [
      "Tenting included",
      "Adjustable separation",
      "Familiar layout"
    ],
    "cons": [
      "Wired",
      "Costs more than the base Freestyle2",
      "No palm rest listed"
    ],
    "bestFor": "Freestyle2 buyers who want tenting from the start.",
    "summary": "The Kinesis Freestyle2 split with VIP3 lifters for adjustable tenting.",
    "skipIf": "You don't want tenting; the base Freestyle2 is cheaper."
  },
  {
    "id": "kinesis-freestyle-edge-rgb",
    "rank": 8,
    "badge": "Best Mechanical Split",
    "name": "KINESIS Freestyle Edge RGB Plus Split Mechanical Keyboard",
    "price": "$199.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41DqykmZM+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FKCYLM55?tag=theofficejournal-20",
    "description": "The Freestyle Edge RGB is a split mechanical keyboard for typing and gaming: cable-connected halves, hot-swappable linear switches, RGB lighting, full programmability and a detachable palm support. It includes Mac keycaps and a lift kit.\n\nLinear switches suit some typists more than others, and it costs more than the Freestyle2.",
    "specs": [
      "Layout: split, row-staggered",
      "Switches: hot-swappable linear mechanical",
      "Lighting: RGB",
      "Programmable",
      "Included: palm support, Mac keycaps, lift kit"
    ],
    "pros": [
      "Mechanical and hot-swappable",
      "Programmable",
      "Lift kit included"
    ],
    "cons": [
      "Costs more than the Freestyle2",
      "Linear switches aren't for everyone",
      "Wired"
    ],
    "bestFor": "Mechanical keyboard users who want a split.",
    "summary": "Kinesis's split mechanical keyboard with hot-swappable linear switches, RGB and programmability.",
    "skipIf": "You want quiet switches; the Advantage360 lists quiet mechanical switches."
  }
];

export const howWeEvaluated = [
  {
    "title": "Split design",
    "description": "We compared fixed, hinged and separable designs."
  },
  {
    "title": "Adjustment",
    "description": "We noted tenting, tilt and separation."
  },
  {
    "title": "Layout and switches",
    "description": "We compared stagger and switch type."
  },
  {
    "title": "Connection and price",
    "description": "We compared connectivity and prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Choose a split type",
    "explanation": "Fixed (K860), hinged (Nulea, Arteck) or fully separable (Freestyle2, Advantage360)."
  },
  {
    "criterion": "Decide on tenting",
    "explanation": "Built-in or add-on tenting (Arteck, Advantage360, VIP3 kit) raises the middle."
  },
  {
    "criterion": "Consider layout",
    "explanation": "Row-staggered is familiar; column-staggered takes time to learn."
  },
  {
    "criterion": "Wired or wireless",
    "explanation": "The Freestyle2 models are wired; Logitech, Nulea and Advantage360 are wireless."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By experience",
    "table": {
      "headers": [
        "Situation",
        "Consider"
      ],
      "rows": [
        [
          "Small step from a flat board",
          "Logitech Wave Keys"
        ],
        [
          "First split, wireless",
          "Logitech Ergo K860"
        ],
        [
          "Budget split",
          "Nulea (wireless) or Arteck (tenting)"
        ],
        [
          "True split, low cost",
          "Kinesis Freestyle2"
        ],
        [
          "True split with tenting",
          "Freestyle2 + VIP3"
        ],
        [
          "Mechanical split",
          "Kinesis Freestyle Edge RGB"
        ],
        [
          "Fully programmable",
          "Kinesis Advantage360"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What's the difference between split types?",
    "a": "Fixed splits angle the keys on one body; hinged ones pivot; separable halves can be placed apart."
  },
  {
    "q": "How long does it take to adjust?",
    "a": "It varies by person and layout; column-staggered keyboards generally take longer."
  },
  {
    "q": "Do I need tenting?",
    "a": "It's a preference; some find a raised middle more comfortable. Several options here offer it."
  },
  {
    "q": "Are split keyboards good for gaming?",
    "a": "The Freestyle Edge RGB is designed for it; others are typing-focused."
  },
  {
    "q": "Will a split keyboard fix wrist pain?",
    "a": "We can't say; consult a clinician about symptoms."
  }
];

export const bottomLine = [
  "For a first split, the Logitech Ergo K860 is the wireless, low-effort option, and the Nulea or Arteck cost least. The Kinesis Freestyle2 is the affordable fully separable choice, with the VIP3 kit adding tenting.",
  "For mechanical keys, the Freestyle Edge RGB is the split to consider, and the Advantage360 is worth paying more for only if you want full programmability and a contoured layout."
];

export const relatedGuides = [
  {
    "href": "/guide/best-ergonomic-keyboards",
    "title": "Best Ergonomic Keyboards (2026)"
  },
  {
    "href": "/guide/best-ergonomic-keyboard-and-mouse-combos",
    "title": "Best Ergonomic Keyboard and Mouse Combos (2026)"
  },
  {
    "href": "/guide/best-small-keyboards",
    "title": "Best Small Keyboards for Small Desks (2026)"
  }
];
