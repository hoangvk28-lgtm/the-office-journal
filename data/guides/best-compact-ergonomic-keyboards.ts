// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Understand what split, curved, and vertical layouts each actually change about your hand position",
    "explanation": "A curved keyboard bends the key rows into an arc that reduces how far your fingers reach across the board but keeps both hands in a fixed relative position, a split keyboard physically separates the two halves so each hand and wrist can angle independently to a more natural position, and a fully vertical keyboard rotates the hands toward a handshake-like orientation that reduces forearm rotation (pronation) more aggressively than either curved or split designs.\n\nThese are meaningfully different interventions, not just cosmetic variations on the same idea, and the amount of adjustment period and the specific relief they provide differs: a curved board requires almost no adaptation, a split board requires learning a new hand spacing, and a vertical board requires the most significant adaptation period but addresses forearm rotation most directly.\n\nIf a specific pain type (wrist deviation, forearm rotation, shoulder width) has been identified, match the layout type to that specific issue rather than assuming any keyboard labeled \"ergonomic\" addresses the same problem."
  },
  {
    "criterion": "Check the key switch type, since it affects both typing feel and finger force required",
    "explanation": "Ergonomic keyboards commonly use one of three switch technologies: membrane (a soft rubber dome under each key, quiet and inexpensive but requiring the key to bottom out fully to register), scissor or low-profile (a shorter, more stable keystroke similar to a laptop keyboard), or mechanical (an individual physical switch per key with more configurable actuation force and travel distance, generally louder but often preferred for tactile feedback and reduced bottoming-out force).\n\nThis matters for anyone with existing wrist or finger strain specifically because mechanical switches can be selected for lighter actuation force, requiring less pressure to register a keystroke than a standard membrane keyboard, a genuine factor in repetitive strain rather than just a preference for typing feel.\n\nIf finger fatigue or strain is a specific concern, check for stated actuation force (measured in grams) rather than assuming all keyboards require the same finger pressure to type."
  },
  {
    "criterion": "Confirm wireless connection type matches your actual devices, and know the battery tradeoffs",
    "explanation": "4GHz USB receiver (generally lower latency and more reliable than Bluetooth, but requires a free USB port and the receiver can be lost), or wired USB (zero latency and no battery to manage, but no cable-free movement).\n\nMulti-device Bluetooth models that support pairing with several devices and switching between them are a genuine convenience for anyone alternating between a work laptop and a personal computer, but this feature isn't universal even among Bluetooth keyboards.\n\nCheck the specific connection type and, for wireless models, confirm multi-device pairing support explicitly if you need to switch between more than one computer regularly, and factor in that backlit wireless models draw more power and need more frequent charging than non-backlit equivalents."
  },
  {
    "criterion": "Check for a negative tilt option and separate wrist rest, since flat isn't always neutral",
    "explanation": "A truly neutral wrist position during typing involves the hands tilting slightly downward from the wrist toward the keys (negative tilt), which is the opposite of the upward tilt most standard and even many \"ergonomic\" keyboards default to with their built-in feet, and only some ergonomic models offer an actual negative-tilt adjustment or come with a design that achieves this angle by default.\n\nA separate, adequately sized wrist rest matters independently of the keyboard's own tilt, since resting the wrist (not just the palm) on a support surface during typing reduces the upward bend at the wrist that a raised keyboard back otherwise creates.\n\nCheck specifically for a stated negative tilt option or a naturally downward-sloping design, and confirm whether a wrist rest is included versus needing to be purchased separately, rather than assuming any \"ergonomic\" label includes proper tilt geometry."
  },
  {
    "criterion": "Weigh review volume against star rating, since some ergonomic keyboards share variants with different genuine track records",
    "explanation": "Ergonomic keyboards, especially from smaller brands, are frequently sold in multiple color or configuration variants that share the same underlying design and sometimes the same pooled review history despite being technically separate listings, which can make one specific variant's review count look artificially large or, conversely, leave a new design with almost no independent track record despite looking similar to an established model.\n\nA keyboard central to your daily work deserves a design with substantial, focused review history behind it, not just a plausible-looking rating built on a thin or shared sample.\n\nWhen comparing keyboards, especially similarly-designed variants from the same brand, check both the star rating and the review count together, and read a handful of reviews to confirm they describe the exact variant you're considering."
  }
];

export const faq = [
  {
    "q": "Do compact ergonomic keyboards sacrifice ergonomic benefit?",
    "a": "Sometimes, shrinking the footprint can mean losing the split or tenting features that provide real ergonomic benefit, verify whether a specific model retains genuine split design."
  },
  {
    "q": "Will I lose my number pad with a compact ergonomic keyboard?",
    "a": "Often yes, this is a separate functional tradeoff from any ergonomic design compromise, check both independently on the current listing."
  },
  {
    "q": "Are arrow keys usable on a compact ergonomic keyboard?",
    "a": "It varies, arrow key cluster size and placement is a separate consideration from number pad presence, worth checking specifically if you rely on arrow key navigation."
  },
  {
    "q": "Do Fn-layer shortcuts work well on compact keyboards?",
    "a": "Usability varies a lot by implementation, check current buyer feedback on Home, End, Page Up, and Page Down remapping before assuming a smooth experience."
  }
];

export const guideSlug = "best-compact-ergonomic-keyboards";

export const guideTitle = "The Best Compact Ergonomic Keyboards for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "note": "Every pick in this specific comparison uses a similar layout approach; check the product names above for the exact curve, split, or angle."
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
          "Arteck Ergonomic Keyboard with Cushioned Wrist Palm Rest"
        ],
        [
          "No firm budget ceiling, prioritizing switch quality or ergonomics",
          "Perixx PERIDUO-606II 2-in-1 Wireless Compact Ergonomic Keyboard"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Zero input latency and no battery to manage, including no backlight battery drain if illuminated. In this comparison: check each listing's connection type directly."
      },
      {
        "label": "",
        "text": "Cable-free desk setup, at the cost of battery management and, for Bluetooth, potentially more input latency. In this comparison: Logitech Wave Keys Wireless Ergonomic Keyboard, Logitech Wave Keys Wireless Ergonomic Keyboard, Arteck Split Ergonomic Keyboard with Palm Rest."
      }
    ]
  },
  {
    "subheading": "By Switch Type and Typing Feel",
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
          "Tactile feedback, lighter actuation force",
          "Perixx PERIDUO-606II 2-in-1 Wireless Compact Ergonomic Keyboard"
        ]
      ]
    }
  },
  {
    "subheading": "For Wrist Pain or Carpal Tunnel Specifically",
    "cards": [
      {
        "label": "",
        "text": "A genuine split or vertical layout (not just a curved surface), a negative tilt option or naturally downward-sloping design, and an included wrist rest sized for your hand."
      },
      {
        "label": "",
        "text": "Arteck Split Ergonomic Keyboard with Palm Rest fits this specifically: True split layout retains stronger ergonomic benefit."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what Perixx PERIDUO-606II 2-in-1 Wireless Compact Ergonomic Keyboard offers: Highest rating of any pick in this guide. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "Nulea Wireless Ergonomic Keyboard already covers the essentials: True split layout retains ergonomic benefit. The main thing you'd be paying extra for elsewhere in this list is adjustability you may not need."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Verified whether each compact keyboard retains real split or tenting benefit or is simply a smaller one-piece board, the same tension as the portability guide."
  },
  {
    "title": "Functional loss separate from ergonomic tradeoff",
    "description": "Addressed the functional loss of a number pad or navigation cluster as a distinct consideration from any ergonomic design compromise, since buyers may lose both."
  },
  {
    "title": "",
    "description": "Considered arrow key cluster size and placement usability separately from whether a number pad exists at all."
  },
  {
    "title": "",
    "description": "Noted that Home, End, Page Up, and Page Down usability via the Fn layer varies meaningfully across compact implementations."
  }
];

export const introParagraphs = [
  "Compact ergonomic keyboards face the same core tension as portable ones, shrinking the footprint sometimes means sacrificing the split or tenting features that provide real ergonomic benefit, worth verifying whether a specific compact model retains genuine split design or is simply a smaller one-piece board. It's also worth separating two different tradeoffs, the functional loss of a number pad or navigation cluster is a distinct issue from any ergonomic design compromise, you may lose specific functionality in addition to, not instead of, ergonomic tradeoffs.",
  "Arrow key cluster size and placement usability is worth checking too, distinct from whether a number pad exists at all, and Fn-layer remapped functions like Home, End, Page Up, and Page Down vary a lot in how usable they feel from one compact keyboard to the next."
];

export const lastUpdated = "2026-08-02";

export const mainKeyword = "compact ergonomic keyboard";

export const metaDescription = "We compared 7 compact ergonomic keyboards on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Compact Ergonomic Keyboards for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "logitech-wave-keys-graphite-compact",
    "rank": 1,
    "badge": "Best Overall Compact Pick",
    "name": "Logitech Wave Keys Wireless Ergonomic Keyboard - Graphite",
    "price": "$59.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "2,972 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/4114VdW9JcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BTNY72VD?tag=theofficejournal-20",
    "description": "A one-piece wave keyboard with a more compact footprint than a fully split design, though it sacrifices the split's larger ergonomic benefit since the frame can't be positioned shoulder-width apart.\n\nOn price, it comes in below Logitech Wave Keys Wireless Ergonomic Keyboard, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Cannot be positioned shoulder-width apart.",
    "specs": [
      "One-piece wave frame, compact footprint",
      "Cushioned attached palm rest",
      "Bluetooth or USB receiver"
    ],
    "pros": [
      "More compact than a fully split design",
      "Minimal adjustment period",
      "Reliable multi-device wireless"
    ],
    "cons": [
      "Less ergonomic benefit than a true split for the compactness gained",
      "Verify number pad/nav cluster inclusion on current listing",
      "Cannot be positioned shoulder-width apart"
    ],
    "bestFor": "Small-desk buyers who want the most reviewed compact ergonomic keyboard"
  },
  {
    "id": "logitech-wave-keys-rose-compact",
    "rank": 2,
    "badge": "Best Color Alternative Compact Pick",
    "name": "Logitech Wave Keys Wireless Ergonomic Keyboard - Rose",
    "price": "$59.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "2,972 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/418t+cQnsOL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BTNZWYT5?tag=theofficejournal-20",
    "description": "The identical Wave Keys hardware as the Graphite pick above, in a Rose colorway for buyers who want the same compact footprint in a different finish. The same tradeoffs apply, compact one-piece design over full split ergonomic benefit.\n\nOn the other side, Cannot be positioned shoulder-width apart.",
    "specs": [
      "One-piece wave frame, compact footprint",
      "Rose colorway",
      "Cushioned attached palm rest",
      "Bluetooth or USB receiver"
    ],
    "pros": [
      "Same compact footprint as the Graphite version",
      "Distinct Rose colorway option",
      "Minimal adjustment period"
    ],
    "cons": [
      "Less ergonomic benefit than a true split for the compactness gained",
      "Verify number pad/nav cluster inclusion on current listing",
      "Cannot be positioned shoulder-width apart"
    ],
    "bestFor": "Buyers who want the same compact Wave Keys design in a different colorway"
  },
  {
    "id": "arteck-split-2-4g-compact",
    "rank": 3,
    "badge": "Best Compact Split Pick",
    "name": "Arteck Split Ergonomic Keyboard with Palm Rest, 2.4G USB Wireless",
    "price": "$54.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "1,624 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41O4m5cUOVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BKKYRQ31?tag=theofficejournal-20",
    "description": "A split keyboard that still keeps a relatively compact combined footprint compared to full-size split alternatives, retaining more real ergonomic benefit than the one-piece wave picks above. Its built-in cushioned palm rest avoids a separate accessory purchase.\n\nOn the other side, Verify arrow key and Fn-layer usability on current listing.",
    "specs": [
      "Split, angled key layout, compact combined footprint",
      "Built-in cushioned palm rest",
      "2.4G USB wireless receiver",
      "Retains genuine split ergonomic benefit"
    ],
    "pros": [
      "True split layout retains stronger ergonomic benefit",
      "Built-in palm rest, no extra purchase",
      "Stable 2.4G connection",
      "Mid-range price for the design"
    ],
    "cons": [
      "Larger combined footprint than a one-piece compact design",
      "Fixed split angle, not tenting-adjustable",
      "Verify arrow key and Fn-layer usability on current listing"
    ],
    "bestFor": "Buyers who want genuine split ergonomic benefit while still keeping a relatively compact footprint"
  },
  {
    "id": "perixx-periduo-606ii-compact",
    "rank": 4,
    "badge": "Best 2-in-1 Compact Pick",
    "name": "Perixx PERIDUO-606II 2-in-1 Wireless Compact Ergonomic Keyboard",
    "price": "$69.99",
    "rating": "4.7 stars from Amazon ratings",
    "reviews": "21 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/3120zwwhcDL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMQMKVKF?tag=theofficejournal-20",
    "description": "A 2-in-1 compact keyboard design, high-rated though with a smaller review count, worth weighing that sample size against the larger-review picks above. Its compact footprint is purpose-built for small-desk use, verify the current listing for exactly what's integrated into the 2-in-1 design.\n\nThe real tradeoff against that pick: Smaller review sample size, verify current feedback.\n\nOn the other side, Higher price than some compact alternatives.",
    "specs": [
      "2-in-1 compact ergonomic design",
      "Highest rating among compact picks here",
      "Wireless connectivity",
      "Purpose-built small-desk footprint"
    ],
    "pros": [
      "Highest rating of any pick in this guide",
      "Purpose-built compact footprint",
      "2-in-1 design consolidates functionality",
      "Distinctive small-desk-focused product"
    ],
    "cons": [
      "Smaller review sample size, verify current feedback",
      "Verify exact 2-in-1 functionality on current listing",
      "Higher price than some compact alternatives"
    ],
    "bestFor": "Small-desk buyers wanting a purpose-built 2-in-1 compact design, comfortable with a smaller review sample"
  },
  {
    "id": "nulea-split-cushioned-compact",
    "rank": 5,
    "badge": "Best Cushioned Split Compact Pick",
    "name": "Nulea Wireless Ergonomic Keyboard, Split Keyboard with Cushioned Wrist Rest",
    "price": "$49.99",
    "rating": "4.2 stars from Amazon ratings",
    "reviews": "541 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41M-dFoGk+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F1TLPDWT?tag=theofficejournal-20",
    "description": "A split keyboard with a relatively compact combined footprint and a dedicated cushioned wrist rest, retaining real split ergonomic benefit at a lower price than the Arteck split pick above. Verify current listings for number pad and navigation cluster presence separately from its ergonomic layout, since it makes its own tradeoffs there.\n\nOn the other side, Verify number pad/nav cluster inclusion on current listing.",
    "specs": [
      "Split layout, compact combined footprint",
      "Cushioned wrist rest",
      "Wireless connectivity",
      "Mid-range price point"
    ],
    "pros": [
      "True split layout retains ergonomic benefit",
      "Dedicated cushioned wrist rest",
      "Reasonable mid-range price",
      "Wireless, no cable clutter"
    ],
    "cons": [
      "Larger combined footprint than a one-piece compact design",
      "Verify number pad/nav cluster inclusion on current listing"
    ],
    "bestFor": "Buyers who want genuine split benefit and a cushioned rest in a relatively compact footprint"
  },
  {
    "id": "arteck-cushioned-palm-multi-compact",
    "rank": 6,
    "badge": "Best Multi-Device Compact Pick",
    "name": "Arteck Ergonomic Keyboard with Cushioned Wrist Palm Rest, Multi-Device",
    "price": "$56.99",
    "rating": "4.3 stars from Amazon ratings",
    "reviews": "69 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41ersIiDGuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FPR2GR6F?tag=theofficejournal-20",
    "description": "A cushioned-palm-rest keyboard with multi-device pairing support, appropriate for compact-desk buyers who switch between a laptop and desktop. Its curved layout is compact but not a true split, worth comparing against the Arteck split pick above if genuine split ergonomic benefit matters more than multi-device switching.\n\nOn the other side, Verify number pad/nav cluster inclusion on current listing.",
    "specs": [
      "Cushioned wrist palm rest",
      "Multi-device pairing support",
      "Curved compact layout, not a true split",
      "Wireless connectivity"
    ],
    "pros": [
      "Cushioned palm rest included",
      "Multi-device pairing for switching between computers",
      "Compact curved layout",
      "Reasonable price for the feature set"
    ],
    "cons": [
      "Not a true split layout",
      "Verify number pad/nav cluster inclusion on current listing"
    ],
    "bestFor": "Compact-desk buyers who switch between multiple devices and want consistent cushioned support"
  },
  {
    "id": "protoarc-xk03-foldable-compact",
    "rank": 7,
    "badge": "Best Foldable Compact Pick",
    "name": "ProtoArc XK03 Ergonomic Foldable Keyboard for iPad, iPhone, Tablet, Laptop",
    "price": "$55.99",
    "rating": "4.4 stars from Amazon ratings",
    "reviews": "489 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41Qw9A3JiYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D3HG7XZL?tag=theofficejournal-20",
    "description": "A foldable keyboard that shrinks even further than the other compact picks in this guide when folded, appropriate for buyers whose small desk doubles as a travel or tablet-use setup.\n\nThe real tradeoff against that pick: Verify true split ergonomic benefit versus folding compactness.\n\nOn the other side, Verify number pad/nav cluster inclusion on current listing.",
    "specs": [
      "Foldable design for iPad, iPhone, tablet, and laptop",
      "Compact folded footprint",
      "Cross-device compatibility"
    ],
    "pros": [
      "Smallest folded footprint among compact picks here",
      "Works across tablets, phones, and laptops",
      "Reasonable mid-range price"
    ],
    "cons": [
      "Verify true split ergonomic benefit versus folding compactness",
      "Folding hinge adds some bulk",
      "Verify number pad/nav cluster inclusion on current listing"
    ],
    "bestFor": "Compact-desk buyers who also want a keyboard that folds smaller for travel or tablet use"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-ergonomic-keyboards",
    "title": "Best Portable Ergonomic Keyboards (2026)"
  },
  {
    "href": "/guide/best-ergonomic-keyboards-for-small-hands",
    "title": "Best Ergonomic Keyboards for Small Hands (2026)"
  },
  {
    "href": "/guide/best-tkl-ergonomic-keyboards",
    "title": "Best TKL Ergonomic Keyboards (2026)"
  }
];

export const breadcrumbLabel = "Best Compact Ergonomic Keyboards";
