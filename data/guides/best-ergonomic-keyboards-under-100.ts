// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-ergonomic-keyboards-under-100";

export const guideTitle = "The Best Ergonomic Keyboards Under $100, From Split to Curved";

export const breadcrumbLabel = "Best Ergonomic Keyboards Under $100";

export const metaTitle = "Best Ergonomic Keyboards Under $100: Split and Curved Picks (2026)";

export const metaDescription = "We compared ergonomic keyboards under $100 by layout, connection, palm rest and backlighting, and explain what a split design changes compared with a curved one-piece board.";

export const mainKeyword = "ergonomic keyboard under 100";

export const introParagraphs = [
  "Under $100, the word \"ergonomic\" covers very different keyboards. A split keyboard separates the two halves of the key area so each hand can angle more naturally; a curved or wave-shaped one-piece keyboard changes the shape of the key rows but keeps your hands in a fixed position. Both are sold under the same label.",
  "The first decision is how much change you want. Split layouts ask more of you at first, since you need to relearn where some keys sit, while one-piece curved boards feel closer to a standard keyboard. After that come connection type, a palm rest and backlighting.",
  "Our comparison is based on published specifications, included accessories and price position, not hands-on testing. Prices shift often at this level, so check the live price before ordering."
];

export const lastUpdated = "2026-08-02";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "perixx-periboard-512b-under100",
    "rank": 1,
    "badge": "Best Split Keyboard",
    "name": "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard with Wrist Rest",
    "price": "$44.99",
    "rating": "4.4 stars from Amazon ratings",
    "reviews": "9,553 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B075GZVD4T?tag=theofficejournal-20",
    "description": "The Perixx PERIBOARD-512B is the straightforward way to try a split layout without spending much: a wired keyboard with a fixed split angle and a padded wrist rest for about $45 at the time of writing.\n\nBeing wired, it has no batteries or receiver to manage. The split angle is fixed and the listing does not mention tenting, so you cannot fine-tune the geometry.\n\nIf you want a wireless split board, the Arteck 2.4G model costs about $10 more.",
    "specs": [
      "Layout: split, fixed angle",
      "Connection: wired USB",
      "Padded wrist rest included"
    ],
    "pros": [
      "Genuine split layout",
      "Wrist rest included",
      "No batteries"
    ],
    "cons": [
      "Fixed split angle, no tenting listed",
      "Warranty length not listed"
    ],
    "bestFor": "First-time buyers who want to try a split layout at a low price.",
    "summary": "A wired split keyboard with a padded wrist rest for well under $50.",
    "skipIf": "You want a cable-free desk; the Arteck 2.4G split keyboard is wireless."
  },
  {
    "id": "logitech-wave-keys-graphite-under100",
    "rank": 2,
    "badge": "Best Gentle Introduction",
    "name": "Logitech Wave Keys Wireless Ergonomic Keyboard - Graphite",
    "price": "$59.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "2,972 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BTNY72VD?tag=theofficejournal-20",
    "description": "The Logitech Wave Keys is the pick for someone who wants a more comfortable shape without relearning a split layout: a one-piece wave-shaped keyboard with an attached cushioned palm rest and wireless connection.\n\nBecause the keys stay in a familiar arrangement, it should take less getting used to than the split boards. Logitech supports multi-device wireless use.\n\nIt does less to change hand position than a split keyboard, since your hands cannot be spread apart, and it costs more than the Perixx.",
    "specs": [
      "Layout: one-piece wave shape",
      "Connection: wireless, multi-device",
      "Cushioned palm rest attached"
    ],
    "pros": [
      "Familiar layout",
      "Wireless with multi-device support",
      "From an established brand"
    ],
    "cons": [
      "Hands stay in a fixed position",
      "Costs more than the split Perixx"
    ],
    "bestFor": "Buyers who want a gentler ergonomic shape and a wireless desk.",
    "summary": "A wireless wave-shaped one-piece keyboard with a cushioned palm rest.",
    "skipIf": "You specifically want your hands further apart; choose one of the split keyboards."
  },
  {
    "id": "arteck-split-2-4g-under100",
    "rank": 3,
    "badge": "Best Wireless Split Keyboard",
    "name": "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless",
    "price": "$54.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "1,624 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BKKYRQ31?tag=theofficejournal-20",
    "description": "The Arteck 2.4G is the choice for a split layout without the cable: it connects through a USB receiver and includes a built-in cushioned palm rest.\n\nLike the Perixx, it uses a fixed split angle with no tenting listed. A 2.4GHz receiver is generally a steadier connection than Bluetooth but occupies a USB port.\n\nIt costs about $10 more than the wired Perixx at the time of writing.",
    "specs": [
      "Layout: split, fixed angle",
      "Connection: 2.4GHz USB receiver",
      "Built-in cushioned palm rest"
    ],
    "pros": [
      "Wireless split layout",
      "Palm rest included",
      "Receiver connection rather than Bluetooth pairing"
    ],
    "cons": [
      "Fixed split angle",
      "Needs a free USB port",
      "Batteries or charging to manage"
    ],
    "bestFor": "Buyers who want a split layout and a cable-free desk.",
    "summary": "A split keyboard with a 2.4GHz receiver and a built-in palm rest.",
    "skipIf": "You would rather avoid batteries; the wired Perixx or Arteck backlit model need none."
  },
  {
    "id": "arteck-split-wired-backlit-under100",
    "rank": 4,
    "badge": "Best Backlit Split Keyboard",
    "name": "Arteck Split Ergonomic Keyboard with Palm Rest, USB Wired Backlit Keyboard",
    "price": "$53.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "1,166 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51mIgAEAexL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CGL8X4H6?tag=theofficejournal-20",
    "description": "The Arteck wired backlit model is the split keyboard to choose if you work in dim light: it adds backlit keys and, being wired, never needs charging for them.\n\nIt shares the fixed split angle and built-in palm rest of the wireless Arteck and costs about the same at the time of writing.\n\nIf you do not need backlighting, the Perixx is a cheaper wired split option.",
    "specs": [
      "Layout: split, fixed angle",
      "Connection: wired USB",
      "Backlit keys",
      "Built-in cushioned palm rest"
    ],
    "pros": [
      "Backlit keys",
      "No charging",
      "Palm rest included"
    ],
    "cons": [
      "Fixed split angle",
      "Costs more than the Perixx"
    ],
    "bestFor": "Anyone who wants a split keyboard with backlighting for evening work.",
    "summary": "A wired split keyboard with backlit keys and a built-in palm rest.",
    "skipIf": "Backlighting does not matter to you; the Perixx is cheaper."
  },
  {
    "id": "protoarc-ekm01-plus-under100",
    "rank": 5,
    "badge": "Best Keyboard and Mouse Set",
    "name": "ProtoArc EKM01 Plus Wireless Ergonomic Keyboard Mouse Combo, Gray Black",
    "price": "$76.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "872 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31nNQhQDCpL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DZ6DR13F?tag=theofficejournal-20",
    "description": "The ProtoArc EKM01 Plus is the pick if you want to replace keyboard and mouse together: it pairs a wireless ergonomic keyboard with an ergonomic mouse for about $77 at the time of writing.\n\nThat is the highest price here, but it covers two devices. The listing does not make clear whether both share a single receiver, so check the current listing if USB ports are scarce.\n\nIf you already have a mouse you like, one of the keyboards alone costs less.",
    "specs": [
      "Includes keyboard and mouse",
      "Connection: wireless",
      "Ergonomic design on both devices"
    ],
    "pros": [
      "Two matched devices in one purchase",
      "Wireless",
      "Still under $100"
    ],
    "cons": [
      "Highest price here",
      "Receiver setup not clearly listed"
    ],
    "bestFor": "Buyers replacing both keyboard and mouse on one budget.",
    "summary": "A matched wireless ergonomic keyboard and mouse for under $80.",
    "skipIf": "You only need a keyboard; the split options cost less."
  },
  {
    "id": "x9-wired-ergonomic-under100",
    "rank": 6,
    "badge": "Best Budget Curved Keyboard",
    "name": "X9 Wired Ergonomic Keyboard - Comfortable Typing, Ergonomic Full Size",
    "price": "$29.99",
    "rating": "4.5 stars from Amazon ratings",
    "reviews": "1,141 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41LVGOn5JLL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08G1WNS6F?tag=theofficejournal-20",
    "description": "The X9 is the low-cost way to try a curved one-piece keyboard: a full-size, wired board for about $30 at the time of writing.\n\nA curved layout needs little adjustment compared with a split board, and there are no batteries to manage. It does less than a split design to change hand position.\n\nThe RECCAZR costs about the same and includes an attached wrist rest; the listing for the X9 does not mention one.",
    "specs": [
      "Layout: one-piece curved, full-size",
      "Connection: wired USB"
    ],
    "pros": [
      "Low price",
      "Familiar full-size layout",
      "No batteries"
    ],
    "cons": [
      "Not a split design",
      "No wrist rest listed"
    ],
    "bestFor": "Buyers who want a low-risk first step toward an ergonomic shape.",
    "summary": "A full-size wired curved keyboard for about $30.",
    "skipIf": "You want a wrist rest included; the RECCAZR includes one for the same price."
  },
  {
    "id": "reccazr-wired-under100",
    "rank": 7,
    "badge": "Best Budget Pick With Wrist Rest",
    "name": "RECCAZR Ergonomic Keyboard, Wired Computer USB Keyboard with Wrist Rest",
    "price": "$29.98",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "280 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/419u8a5c96L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DMDJB6G2?tag=theofficejournal-20",
    "description": "The RECCAZR is the X9's direct alternative: a wired curved keyboard at the same price at the time of writing, with an attached wrist rest.\n\nIf you would otherwise buy a wrist rest separately, that makes it the better value of the two. It is still a one-piece design, so it changes hand position less than a split keyboard.\n\nIt has fewer buyer reviews than the other picks here.",
    "specs": [
      "Layout: one-piece curved",
      "Connection: wired USB",
      "Attached wrist rest"
    ],
    "pros": [
      "Wrist rest included",
      "Low price",
      "Plug-and-play"
    ],
    "cons": [
      "Not a split design",
      "Fewer buyer reviews"
    ],
    "bestFor": "Budget buyers who want a curved keyboard and wrist rest in one purchase.",
    "summary": "A wired curved keyboard with an attached wrist rest for about $30.",
    "skipIf": "You want a split layout; the Perixx costs about $15 more."
  },
  {
    "id": "wired-rgb-gaming-membrane-under100",
    "rank": 8,
    "badge": "Best Compact Budget Keyboard",
    "name": "Wired RGB Gaming Membrane Keyboard, 100 Percent Mini Creamy LED",
    "price": "$22.90",
    "rating": "4.6 stars from Amazon ratings",
    "reviews": "53 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41yeJ-XPp7L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F66LFC8Q?tag=theofficejournal-20",
    "description": "This compact RGB membrane keyboard is the cheapest option here, but it is not an ergonomic keyboard in layout: it has a flat, standard key arrangement rather than a split or curved frame.\n\nWhat it offers is a small footprint, which keeps the mouse closer to the keyboard, plus RGB backlighting and a wired connection.\n\nIf wrist angle is your reason for shopping, one of the split or curved keyboards above is the better fit.",
    "specs": [
      "Layout: compact, flat",
      "Connection: wired USB",
      "RGB backlighting",
      "Membrane keys"
    ],
    "pros": [
      "Lowest price here",
      "Compact footprint",
      "Backlit"
    ],
    "cons": [
      "No split or curved layout",
      "Not designed for wrist-angle relief"
    ],
    "bestFor": "Small desks where a compact footprint matters more than an ergonomic layout.",
    "summary": "A compact wired RGB membrane keyboard; not an ergonomic layout.",
    "skipIf": "You want wrist or hand-position relief; choose a split or curved keyboard."
  }
];

export const howWeEvaluated = [
  {
    "title": "Layout",
    "description": "We separated genuinely split keyboards from one-piece curved and flat designs."
  },
  {
    "title": "Connection and power",
    "description": "We recorded wired, 2.4GHz and multi-device wireless connections."
  },
  {
    "title": "Included accessories",
    "description": "We noted palm rests, backlighting and, for the combo, the included mouse."
  },
  {
    "title": "Price position",
    "description": "We compared what each step up in price adds. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Split, curved or flat",
    "explanation": "A split keyboard lets each hand angle independently; a curved one-piece board changes row shape but keeps your hands together; a flat compact board mainly saves space. Split designs take the most getting used to."
  },
  {
    "criterion": "Wired or wireless",
    "explanation": "Wired boards need no batteries. A 2.4GHz receiver is generally steady but uses a USB port; Bluetooth needs no receiver. If you switch between computers, check for multi-device support."
  },
  {
    "criterion": "Palm or wrist rest",
    "explanation": "The Perixx, Logitech, both Arteck models and the RECCAZR include one. Buying separately adds cost."
  },
  {
    "criterion": "Tilt",
    "explanation": "Some ergonomics guidance favors a flat or slightly downward-sloping keyboard over one propped up on its rear feet. None of the listings here mention negative tilt or tenting."
  },
  {
    "criterion": "Backlighting",
    "explanation": "Useful in dim rooms. The wired Arteck and the compact RGB keyboard include it; on a wired board it has no battery cost."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "A split layout for less",
          "Perixx PERIBOARD-512B",
          "Wired split with wrist rest"
        ],
        [
          "Split and wireless",
          "Arteck 2.4G split",
          "Receiver connection and palm rest"
        ],
        [
          "Split and backlit",
          "Arteck wired backlit split",
          "Backlighting with no charging"
        ],
        [
          "Minimal adjustment",
          "Logitech Wave Keys",
          "Wave shape, familiar layout, wireless"
        ],
        [
          "Keyboard and mouse together",
          "ProtoArc EKM01 Plus",
          "Matched wireless set"
        ],
        [
          "Lowest-cost curved board",
          "X9 or RECCAZR",
          "About $30; the RECCAZR adds a wrist rest"
        ],
        [
          "A compact footprint",
          "Compact RGB membrane keyboard",
          "Small and cheap, not ergonomic in layout"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Keyboards"
      ],
      "rows": [
        [
          "About $23–$30",
          "Compact RGB, RECCAZR, X9"
        ],
        [
          "About $45–$60",
          "Perixx, Arteck wired backlit, Arteck 2.4G, Logitech Wave Keys"
        ],
        [
          "About $77",
          "ProtoArc EKM01 Plus (with mouse)"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Will these prices stay under $100?",
    "a": "They were under $100 at the time of writing, but keyboard prices change often. Check the live price before ordering."
  },
  {
    "q": "Can I get a genuine split keyboard under $100?",
    "a": "Yes. The Perixx and both Arteck keyboards here are split designs, all well under $100 at the time of writing."
  },
  {
    "q": "Is build quality lower under $100?",
    "a": "It can be. The listings here say little about materials or warranty, so we would check the current listing for warranty terms and read recent buyer feedback."
  },
  {
    "q": "How long does it take to adjust to a split keyboard?",
    "a": "It varies from person to person. Expect a slower typing speed at first while you get used to the key positions. Curved one-piece keyboards usually take less adjustment."
  }
];

export const bottomLine = [
  "If you want a genuine change in hand position, start with a split keyboard. The Perixx is the low-cost wired option, the Arteck 2.4G removes the cable, and the Arteck backlit model adds lighting. All three have fixed split angles and include a rest.",
  "If you would rather ease in, the Logitech Wave Keys offers a gentler wave shape with wireless convenience, and the X9 and RECCAZR are about $30 curved alternatives. The ProtoArc suits anyone replacing a mouse at the same time; the compact RGB keyboard is only worth it if space, not ergonomics, is the priority."
];

export const relatedGuides = [
  {
    "href": "/guide/best-budget-ergonomic-keyboards",
    "title": "Best Budget Ergonomic Keyboards (2026)"
  },
  {
    "href": "/guide/best-wired-ergonomic-keyboards",
    "title": "Best Wired Ergonomic Keyboards (2026)"
  },
  {
    "href": "/guide/best-wireless-ergonomic-keyboard-and-mouse-combos",
    "title": "Best Wireless Ergonomic Keyboard and Mouse Combos (2026)"
  }
];
