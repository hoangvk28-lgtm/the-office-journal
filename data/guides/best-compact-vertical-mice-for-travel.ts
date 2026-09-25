// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Match the vertical angle to your actual hand size and grip",
    "explanation": "A vertical mouse's tilt angle, usually somewhere between 45 and 90 degrees from flat, is what actually reduces forearm rotation strain, but the ideal angle isn't the same for every hand, a mouse shaped for a larger hand can feel awkwardly steep and unstable in a smaller hand, and vice versa.\n\nThis matters because the entire ergonomic benefit depends on the mouse fitting your hand well enough to hold a natural, relaxed grip, a mismatched size can actually introduce new strain from over-gripping to keep the mouse stable.\n\nCheck the listing for hand-size guidance (often given in inches from wrist to middle fingertip) rather than assuming a single design fits all hand sizes equally well."
  },
  {
    "criterion": "Consider DPI range and sensor quality for your actual desk surface and use",
    "explanation": "DPI (dots per inch) determines cursor sensitivity, and while a wide adjustable DPI range sounds like a universal benefit, what actually matters is whether the sensor tracks accurately and consistently at the DPI level you'll realistically use, a mouse with an impressively high max DPI but a mediocre sensor can still feel imprecise in daily use.\n\nThis matters more for precision work like design or spreadsheet navigation than for basic web browsing, where sensor quality differences are less noticeable.\n\nCheck reviews specifically for mentions of tracking accuracy and cursor jitter, not just the advertised maximum DPI number, since the two don't always correlate."
  },
  {
    "criterion": "Weigh wireless connectivity type against your actual setup and battery expectations",
    "explanation": "A vertical mouse connects via Bluetooth, a proprietary RF USB dongle, or a wired cable, and each comes with real tradeoffs, Bluetooth avoids using a USB port but can have a small input lag some users notice, an RF dongle is generally more responsive but takes up a port and is easy to lose while traveling, and wired eliminates battery concerns entirely but limits desk placement flexibility.\n\nThis matters directly if you're already short on USB ports, travel frequently with the mouse, or care about minimal input latency for precise work.\n\nCheck the specific connectivity type and, for wireless options, the claimed battery life under real use, not just standby time, before assuming any wireless mouse fits your setup equally well."
  },
  {
    "criterion": "Check button placement and count against how you actually use a mouse day to day",
    "explanation": "Extra programmable buttons for back/forward navigation or DPI switching are only useful if they're placed where your thumb naturally rests during normal use, a button that requires shifting your grip to reach defeats its own ergonomic purpose.\n\nThis matters more for anyone doing heavy web browsing or navigation-heavy work where back/forward buttons get used constantly, less for someone doing simple pointing and clicking.\n\nCheck reviews specifically for mentions of thumb button reachability and accidental misclicks, not just the total button count listed in the specs."
  },
  {
    "criterion": "Factor in adjustment period and whether the design suits your actual daily tasks",
    "explanation": "Switching to a vertical mouse from a standard mouse involves a genuine adjustment period, typically one to two weeks, during which precision and speed can feel worse before the new grip becomes natural, this is a normal part of the transition, not a sign the mouse is a bad fit.\n\nThis matters most for anyone doing precision-dependent work like graphic design or gaming, where a temporary drop in accuracy during the adjustment period has a real short-term cost worth planning around.\n\nCheck reviews for mentions of how long the adjustment period took for reviewers with a similar use case to yours, and consider trying the new grip during a lower-stakes work period rather than a deadline crunch."
  }
];

export const faq = [
  {
    "q": "Do compact vertical mice offer the same ergonomic benefit as full-size ones?",
    "a": "Compactness often means a shallower angle and less hand support, so a compact vertical mouse may offer meaningfully less ergonomic benefit than a full-size one."
  },
  {
    "q": "Are folding or sliding travel mice durable for frequent packing?",
    "a": "Generally reasonable for occasional use, though moving parts like folding hinges or sliding mechanisms can wear over time with very frequent packing and unpacking."
  },
  {
    "q": "Should I check the charging cable type before buying a travel mouse?",
    "a": "Yes, a USB-C charging cable is more likely to overlap with cables you already pack for other devices than an older micro-USB cable, a real convenience factor."
  },
  {
    "q": "Do I need an adapter for a USB-A travel mouse dongle on a USB-C laptop?",
    "a": "Yes, unless the mouse uses Bluetooth or ships with a USB-C dongle, you'll need a separate USB-A to USB-C adapter."
  }
];

export const guideSlug = "best-compact-vertical-mice-for-travel";

export const guideTitle = "The Best Compact Vertical Mice for Travel: Our Picks";

export const heroImage = "https://m.media-amazon.com/images/I/31TnFhELhRL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
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
          "Bluetooth Wireless Arc Travel Mouse"
        ],
        [
          "",
          "ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse"
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
          ""
        ],
        [
          "",
          "Bluetooth Wireless Arc Travel Mouse"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "No recurring battery purchases, usually a USB-C charge cable does the job in downtime. In this comparison: ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse."
      },
      {
        "label": "",
        "text": "Simple to swap anywhere without carrying a charge cable, at the cost of ongoing battery purchases. In this comparison: Bluetooth Wireless Arc Travel Mouse, TECKNET Folding Wireless Mouse, DELUX Wireless Bluetooth Pocket Mouse, Luhaso Ergonomic Vertical Wireless Mouse, KUNSI Wired Ergonomic Mouse."
      }
    ],
    "note": "Default to rechargeable unless you specifically want to avoid ever plugging the mouse in to charge."
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
          "ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse"
        ]
      ]
    }
  },
  {
    "subheading": "For Wrist or Forearm Strain Specifically",
    "cards": [
      {
        "label": "",
        "text": "A pronounced vertical angle matched to your hand size, with reviews specifically mentioning strain relief after the adjustment period."
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
        "text": "You use a mouse for many hours daily and strain relief or sensor precision is the priority, where Bluetooth Wireless Arc Travel Mouse's higher price buys real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You only need occasional use, where KUNSI Wired Ergonomic Mouse covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Compact-versus-ergonomic design tension named explicitly",
    "description": "We were honest that a compact vertical mouse may offer meaningfully less ergonomic benefit than a full-size one, rather than claiming compactness with no tradeoff."
  },
  {
    "title": "Genuine compactness verified against the standard-size picks",
    "description": "We checked whether each pick is more compact than standard vertical mice, not just marginally smaller."
  },
  {
    "title": "",
    "description": "We considered how each design likely holds up to repeated packing and unpacking in a bag versus sitting permanently on a desk."
  },
  {
    "title": "Charging cable type and dongle adapter needs disclosed",
    "description": "We noted charging cable type where known and carried forward the USB-A to USB-C dongle adapter concern relevant to travel and laptop use."
  }
];

export const introParagraphs = [
  "There's an unavoidable design tension in this category worth naming directly: compactness reduces the very body size and angle that makes a vertical mouse ergonomically effective in the first place. A 'compact vertical mouse' may offer less ergonomic benefit than a full-size one, since a smaller body often means a shallower tilt and less room for your hand to rest naturally. We're honest here that this is a real compromise, not a solved problem, and picked products that manage that tradeoff reasonably rather than claiming a compact design with no downside.",
  "We also considered travel-specific durability, since a mouse that gets tossed into a bag repeatedly experiences different wear than one that sits on a desk permanently, and carried forward the same USB-A versus USB-C dongle adapter concern relevant to laptop use generally. Charging cable type is also a real travel-convenience factor: a USB-C charging cable is more likely to overlap with cables you're already packing for other devices than an older micro-USB cable would be."
];

export const lastUpdated = "2026-08-02";

export const mainKeyword = "best compact vertical mice for travel";

export const metaDescription = "How 6 compact vertical mice for travel compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Compact Vertical Mice for Travel (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b07zwt3q2y-tr",
    "rank": 1,
    "badge": "Best Compact Travel Pick",
    "name": "Bluetooth Wireless Arc Travel Mouse, Bluetooth 5.0/4.0 and 2.4G Tri-Mode",
    "price": "$32.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "674 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31TnFhELhRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZWT3Q2Y?tag=theofficejournal-20",
    "description": "4GHz dongle depending on what your travel setup needs that day.\n\nBeing built for travel rather than adapted from a desk-first design, this manages the compact-versus-ergonomic tradeoff better than most, though its vertical angle is naturally shallower than a full-size dedicated ergonomic mouse.\n\nThe standout detail is that compact body designed for packing. Balancing that out, shallower vertical angle than a full-size ergonomic mouse.",
    "specs": [
      "Tri-mode connectivity, Bluetooth and 2.4G",
      "Compact folding-style travel body",
      "Purpose-built for travel",
      "Mid-range price point"
    ],
    "pros": [
      "purpose-built for travel with flexible connectivity",
      "Compact body designed for packing",
      "Solid review rating",
      "Tri-mode connectivity covers most travel scenarios"
    ],
    "cons": [
      "Shallower vertical angle than a full-size ergonomic mouse",
      "Charging cable type should be confirmed in the current listing",
      "Smaller ergonomic benefit than dedicated full-size picks"
    ],
    "bestFor": "Frequent travelers who want a purpose-built compact mouse with flexible connectivity, understanding the ergonomic tradeoff."
  },
  {
    "id": "b07ycfylvx-tr",
    "rank": 2,
    "badge": "Best Budget Folding Travel Pick",
    "name": "TECKNET Folding Wireless Mouse, 2.4G Travel Mouse, 3 Adjustable DPI",
    "price": "$13.29",
    "rating": "4.4 stars from Amazon ratings",
    "reviews": "1,689 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41HPNeaiKoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07YCFYLVX?tag=theofficejournal-20",
    "description": "The folding mechanism trades some vertical angle for genuine flat-pack portability, so buyers prioritizing maximum ergonomic benefit should weigh this against the full-size guides elsewhere in this cluster.\n\nFolding design minimizes bag space.",
    "specs": [
      "Folding compact design",
      "2.4GHz wireless dongle",
      "3 adjustable DPI levels",
      "Budget price point"
    ],
    "pros": [
      "Lowest price in this guide",
      "Folding design minimizes bag space",
      "Adjustable DPI"
    ],
    "cons": [
      "Folding mechanism reduces vertical angle versus non-folding designs",
      "AA or coin battery type should be confirmed for travel weight",
      "Smaller ergonomic benefit than a full-size vertical mouse"
    ],
    "bestFor": "Budget-conscious travelers who prioritize minimal bag space over maximum ergonomic angle."
  },
  {
    "id": "b0f9kfsy9g-tr",
    "rank": 3,
    "badge": "Best 2-in-1 Sliding Design",
    "name": "DELUX Wireless Bluetooth Pocket Mouse, 2-in-1 Sliding Mouse",
    "price": "$31.99",
    "rating": "4.4 stars from Amazon ratings",
    "reviews": "60 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31Gy9aIft6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F9KFSY9G?tag=theofficejournal-20",
    "description": "A sliding 2-in-1 mechanism that expands from a pocket-sized form to a larger usable shape, a different approach to the compact-versus-ergonomic tension than a fixed-size compact mouse.\n\n4-star rating against the limited number of reviews, and confirm current charging cable type before buying.\n\nBoth are worth keeping in mind before deciding.",
    "specs": [
      "2-in-1 sliding expandable design",
      "Bluetooth connectivity",
      "Pocket-sized when collapsed",
      "Mid-range price point"
    ],
    "pros": [
      "Sliding mechanism offers a larger usable shape than a fixed compact body",
      "pocket-sized when collapsed",
      "Bluetooth connectivity",
      "Strong rating despite a small sample"
    ],
    "cons": [
      "Small review sample size, verify current feedback",
      "Sliding mechanism adds a moving part that could wear over time",
      "Vertical angle still shallower than a full-size ergonomic mouse"
    ],
    "bestFor": "Travelers who want a mouse that expands to a larger usable size from a pocket-sized collapsed form."
  },
  {
    "id": "b0cx18lhws-tr",
    "rank": 4,
    "badge": "Best Compact Pick With a More Pronounced Angle",
    "name": "ProtoArc EM11 NL Wireless Ergonomic Vertical Mouse, Rechargeable",
    "price": "$22.99",
    "rating": "4.4 stars from Amazon ratings",
    "reviews": "5,670 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31PGrLfkUxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CX18LHWS?tag=theofficejournal-20",
    "description": "Not purpose-built as a travel or folding mouse, but its smaller-than-full-size body and rechargeable USB-C-style charging make it a reasonable middle ground for buyers who want more ergonomic angle than the dedicated travel picks offer.\n\nConfirm current charging cable type and dongle storage before relying on this for frequent travel, since it's primarily marketed as a general compact ergonomic mouse rather than travel-specific.",
    "specs": [
      "Compact rechargeable body",
      "More pronounced vertical angle than folding travel mice",
      "2.4GHz wireless dongle",
      "Budget-to-mid price point"
    ],
    "pros": [
      "More pronounced ergonomic angle than dedicated folding travel mice",
      "Rechargeable battery",
      "Reasonably compact for occasional travel"
    ],
    "cons": [
      "Not purpose-built or marketed specifically for travel durability",
      "Confirm dongle storage before frequent travel use",
      "Bulkier than the dedicated folding or sliding travel picks"
    ],
    "bestFor": "Buyers who want more ergonomic angle than a dedicated travel mouse offers and only travel occasionally."
  },
  {
    "id": "b0gnmpgm7g-tr",
    "rank": 5,
    "badge": "Best Small-Hand Travel Pick",
    "name": "Luhaso Ergonomic Vertical Wireless Mouse, 57 degree, Small/Medium Hands",
    "price": "$19.99",
    "rating": "4.7 stars from Amazon ratings",
    "reviews": "57 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31ttLEqu0hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GNMPGM7G?tag=theofficejournal-20",
    "description": "Explicitly sized for small to medium hands, which naturally overlaps with the compact footprint travelers want, at a very strong review rating though on a small sample size.\n\nIt isn't purpose-built or marketed as a travel mouse specifically, so confirm dongle storage and current charging cable type on the listing before relying on this for frequent packing.\n\nThat said, small review sample size, verify current feedback.",
    "specs": [
      "Explicit small/medium hand sizing",
      "57-degree tilt angle",
      "Wireless connectivity",
      "Budget price point"
    ],
    "pros": [
      "sized for small to medium hands, naturally compact",
      "Very strong review rating",
      "low-cost price",
      "Disclosed tilt angle"
    ],
    "cons": [
      "Small review sample size, verify current feedback",
      "Not purpose-built or marketed specifically for travel durability",
      "Dongle storage should be confirmed for frequent packing"
    ],
    "bestFor": "Travelers with small to medium hands who want a compact, low-cost pick."
  },
  {
    "id": "b0f4jns3px-tr",
    "rank": 6,
    "badge": "Best Ultra-Budget Compact Pick",
    "name": "KUNSI Wired Ergonomic Mouse, USB Wired Vertical Mouse with adjustable DPI",
    "price": "$9.99",
    "rating": "4.1 stars from Amazon ratings",
    "reviews": "181 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41VQ8m4r1iL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F4JNS3PX?tag=theofficejournal-20",
    "description": "The lowest price in this guide, a wired compact mouse with adjustable DPI, useful for travelers who don't mind packing a cable in exchange for zero dongle-loss risk and no charging to manage.\n\n1-star rating is more moderate than the other picks here, and being wired rather than wireless is a real tradeoff against the freedom the other picks in this guide offer.\n\n1-star rating than other picks.",
    "specs": [
      "Wired USB connection",
      "Adjustable DPI",
      "Compact ergonomic body",
      "Ultra-budget price point"
    ],
    "pros": [
      "Lowest price in this guide",
      "No dongle to lose or battery to charge while traveling",
      "Adjustable DPI even at this price tier",
      "Compact body"
    ],
    "cons": [
      "Wired only, no wireless freedom of movement",
      "Smaller review sample size"
    ],
    "bestFor": "Budget-conscious travelers who don't mind a cable in exchange for zero dongle-loss risk."
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-vertical-mice-for-laptops",
    "title": "Best Vertical Mice for Laptops in 2026"
  },
  {
    "href": "/guide/best-vertical-mice-for-small-hands",
    "title": "Best Vertical Mice for Small Hands in 2026"
  },
  {
    "href": "/guide/best-usb-c-vertical-mice",
    "title": "Best USB-C Vertical Mice in 2026"
  }
];

export const breadcrumbLabel = "Best Compact Vertical Mice for Travel";
