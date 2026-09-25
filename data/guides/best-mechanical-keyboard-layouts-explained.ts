// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Match switch type to your actual environment, not just gaming feel",
    "explanation": "Switch type determines feel, sound, and how disruptive the keyboard is to people around you, clicky switches feel satisfying to type on solo but produce an audible click on every keystroke that can be disruptive on a Zoom call or in a shared office, while linear switches are quieter and smoother, and tactile switches split the difference with a felt bump but no click.\n\nThis matters directly based on where you'll actually use the keyboard, a home office with video calls or a shared workspace calls for a different switch than a private gaming setup where clicky feedback is a feature, not a liability.\n\nCheck the specific switch name (not just \"mechanical\") and look up its actuation force and whether it's linear, tactile, or clicky before assuming any mechanical keyboard suits your environment."
  },
  {
    "criterion": "Check hot-swappable sockets if you want to change switches later without soldering",
    "explanation": "A hot-swappable keyboard lets you physically remove and replace individual switches without any soldering, meaning you can try different switch types or replace a failed switch years later without needing to be a hobbyist with a soldering iron.\n\nThis matters directly if you're not fully certain which switch feel you'll prefer long-term, or if you want the option to upgrade switches later without replacing the whole keyboard.\n\nCheck the listing specifically for \"hot-swappable\" and the specific socket type (3-pin or 5-pin) it supports, since not every hot-swap socket accepts every switch type."
  },
  {
    "criterion": "Consider keycap material for both feel and long-term durability",
    "explanation": "Keycap material affects both the tactile feel under your fingers and how well the keycaps resist shine and wear over years of typing, PBT plastic is generally more durable and resists the glossy shine that ABS plastic keycaps develop after months of oil and friction from typing.\n\nThis matters more for a keyboard you'll type on daily for years, less for occasional or gaming-only use where keycap longevity matters less.\n\nCheck the listing specifically for PBT versus ABS keycap material, since this detail is sometimes buried in the specs rather than featured prominently."
  },
  {
    "criterion": "Weigh wireless convenience against connection latency for your actual use case",
    "explanation": "4GHz USB receiver, a real consideration for competitive gaming but largely unnoticeable for typing and general office work.\n\nThis matters more if you're specifically buying for fast-paced gaming, less for typing-focused office or home use where the latency difference is imperceptible.\n\n4GHz dongle in addition to Bluetooth, and consider a wired connection specifically if competitive gaming performance matters."
  },
  {
    "criterion": "Match keyboard layout and size to your actual desk space and workflow",
    "explanation": "Mechanical keyboards range from full-size boards with a number pad to compact tenkeyless (no number pad) and even smaller 60% layouts that omit the function row and arrow keys, and this size choice is a real tradeoff between desk space saved and keys available without a modifier combination.\n\nThis matters directly if you regularly use a number pad for data entry, a compact layout without one adds real friction, while someone who never touches the number pad gains meaningful desk space and a shorter reach to the mouse with a smaller layout.\n\nCheck the specific layout size and key count against your actual daily workflow, not just desk space alone."
  }
];

export const faq = [
  {
    "q": "What's the difference between TKL and 75% keyboard layouts?",
    "a": "TKL (tenkeyless, also 80%) drops only the numpad, keeping the F-row and navigation cluster in their standard full-size positions. A 75% layout keeps the same keys as TKL but compresses them into a tighter cluster with less spacing, resulting in a smaller footprint but a slightly steeper adjustment period and more limited aftermarket keycap set compatibility."
  },
  {
    "q": "Do I need a numpad on a mechanical keyboard?",
    "a": "Only if your daily workflow includes regular numeric entry, like spreadsheets, accounting, or data entry. If you rarely type numbers outside the top row, a TKL or 75% layout saves desk space and reduces mouse reach without costing you anything you'd actually use day to day."
  },
  {
    "q": "Why isn't there a 60% or 65% keyboard in this guide's picks?",
    "a": "This guide only includes real, verified mechanical keyboards from the source product list, and the 8 that were mechanical and verifiable landed on full-size, TKL, or 75% layouts, none were true 60% or 65% boards. Rather than force an unrelated product into those categories, we explained what 60% and 65% layouts offer in the educational section above without a mismatched pick attached."
  },
  {
    "q": "Does keyboard layout size actually affect shoulder comfort?",
    "a": "A full-size keyboard with a numpad pushes your mouse roughly 15 to 20cm further from your body's center compared to a TKL layout, requiring more shoulder extension on every reach. Dropping from full-size to TKL is the single biggest ergonomic gain available from layout choice alone."
  },
  {
    "q": "Will my old keycap set fit a 75% keyboard?",
    "a": "A 75% layout's right-side cluster (Delete, Home, Page Up, Page Down) is often positioned differently than on a full-size or TKL board, and many aftermarket keycap sets don't include correctly shaped keys for that compressed cluster. Always check that a keycap set specifically lists 75% layout support before buying it for a board like the AULA F75 Pro."
  },
  {
    "q": "What are Alice and ortholinear layouts?",
    "a": "An Alice layout splits and angles the key columns outward from a single connected frame for a more natural wrist angle, while an ortholinear layout arranges keys in a straight grid instead of the staggered rows on nearly every standard keyboard. Both are growing in availability but remain a smaller niche than standard full-size, TKL, 75%, 65%, and 60% layouts."
  }
];

export const guideSlug = "best-mechanical-keyboard-layouts-explained";

export const guideTitle = "The Best Mechanical Keyboard Layouts Explained + Picks for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg";

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
          "Logitech G413 TKL SE Mechanical Gaming Keyboard"
        ],
        [
          "",
          "Logitech G413 TKL SE Mechanical Gaming Keyboard"
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
          ""
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "4GHz dongle option beyond just Bluetooth. In this comparison: AULA F75 Pro Wireless Mechanical Keyboard, Keychron V6 Max Wireless, Keychron V6 Max Wireless."
      },
      {
        "label": "",
        "text": "Zero input latency and no battery to manage, the safer choice for competitive gaming. In this comparison: Logitech G413 TKL SE Mechanical Gaming Keyboard, RisoPhy Mechanical Gaming Keyboard, Redragon K668 RGB Gaming Keyboard, Keychron V6 Wired Custom Mechanical Keyboard, Keychron V6 Wired."
      }
    ],
    "note": "Default to wired if competitive gaming latency matters, wireless for general typing and office use."
  },
  {
    "subheading": "",
    "note": "Check each pick's listed keycap material (PBT vs ABS) against how long you plan to use it daily before buying, since PBT resists shine and wear better over years."
  },
  {
    "subheading": "For Shared Office or Video Call Use Specifically",
    "cards": [
      {
        "label": "",
        "text": "Linear or tactile switches rather than clicky ones, to avoid disruptive noise on calls or in a shared space."
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
        "text": "You want hot-swappable switches and premium PBT keycaps for years of daily use, where Keychron V6 Max Wireless's build quality gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just want to try the mechanical feel without a big investment, where RisoPhy Mechanical Gaming Keyboard covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Verified layout size per real listing",
    "description": "Checked each product's actual key count and description, not the search term it appeared under, to confirm its true layout size, full-size, TKL/80%, or 75%."
  },
  {
    "title": "",
    "description": "Noted whether a layout uses standard key positions compatible with common aftermarket keycap sets, and whether firmware is open-source QMK/VIA or brand-proprietary."
  },
  {
    "title": "Mouse reach and shoulder ergonomics",
    "description": "Weighed how far each layout's footprint pushes the mouse from center, since a full-size board with a numpad adds roughly 15 to 20cm of reach compared to a TKL layout."
  },
  {
    "title": "",
    "description": "Checked which picks offer hot-swappable sockets and what switch feel, linear or tactile, ships installed by default."
  },
  {
    "title": "",
    "description": "Weighed layout, hot-swap capability, wireless connectivity, and firmware openness against price, from the budget full-size pick to the wireless V6 Max."
  }
];

export const introParagraphs = [
  "Picking a mechanical keyboard layout starts with a question almost no buying guide actually asks you: what keys do you use every single day. Someone doing daily spreadsheet work needs a numpad, so a 65% layout is the wrong call. A developer who leans on F-keys for debugging needs those keys accessible, so a 60% layout with no dedicated F-row is the wrong call. The layout name on the box matters less than whether it matches your actual workflow.",
  "Below we explain what each major layout size actually gives up as it shrinks, then map 8 real mechanical keyboards we compared to their true layout size based on their real listings, from a 108-key full-size board with extra macro keys down to a tenkeyless 80% option, so you can match a layout to your workflow and then buy the matching pick immediately."
];

export const lastUpdated = "2026-07-23";

export const mainKeyword = "mechanical keyboard layout";

export const metaDescription = "We compared 8 mechanical keyboard layouts explained + picks on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Mechanical Keyboard Layouts Explained + Picks for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "logitech-g413-tkl-se",
    "rank": 1,
    "badge": "Best TKL/80%",
    "name": "Logitech G413 TKL SE Mechanical Gaming Keyboard",
    "price": "$65.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31hUfgJWI9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08Z7J4KV3?tag=theofficejournal-20",
    "description": "This is the only true tenkeyless (TKL, also called 80%) pick in this list, dropping the numpad while keeping every other key in its standard full-size position, including a full F-row and dedicated arrow, Home, End, Page Up, and Page Down keys. Because the arrow cluster and navigation keys stay in their normal spots, there is essentially no relearning curve moving from a full-size board.\n\nDropping the numpad also pulls the mouse roughly 4 to 6 inches closer to center compared to a full-size keyboard, meaningfully reducing shoulder extension on long sessions. It is the layout most people should default to if they don't specifically need a numpad.\n\nPulls the mouse noticeably closer to center than full-size.",
    "specs": [
      "TKL/80% layout, no numpad",
      "Full F-row, dedicated arrow and navigation cluster",
      "Wired mechanical switches",
      "Aluminum-alloy top case",
      "Logitech G HUB software support"
    ],
    "pros": [
      "No numpad-dependent relearning, everything else stays in place",
      "Pulls the mouse noticeably closer to center than full-size",
      "Full F-row and dedicated navigation keys retained",
      "Standard keycap compatibility, no oddly placed keys"
    ],
    "cons": [
      "No numpad for spreadsheet-heavy workflows",
      "Still wider than a 75% or 65% board",
      "Wired only, no wireless option"
    ],
    "bestFor": "Buyers who want the easiest transition away from full-size without losing navigation keys"
  },
  {
    "id": "aula-f75-pro-75-percent",
    "rank": 2,
    "badge": "Best 75% (Wireless, Hot-Swap)",
    "name": "AULA F75 Pro Wireless Mechanical Keyboard, 75% Hot Swappable",
    "price": "$66.49",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14N2QZF?tag=theofficejournal-20",
    "description": "A 75% layout keeps the F-row and a compressed right-side cluster of arrow, Delete, Home, and Page Up/Down keys, but stacks them closer together than a TKL board to shrink the overall footprint. That compression is the tradeoff to know about before buying, aftermarket keycap sets don't always include correctly positioned keys for a 75% board's right-side cluster, so check keycap compatibility before ordering a replacement set.\n\n0 connectivity, features that are uncommon together at this price on any layout size.",
    "specs": [
      "75% layout, compressed right-side cluster",
      "Hot-swappable, pre-lubed switches",
      "2.4GHz / USB-C / Bluetooth 5.0",
      "RGB backlighting, rotary volume knob",
      "PBT side-printed keycaps"
    ],
    "pros": [
      "Keeps F-row and navigation cluster in a smaller footprint than TKL",
      "Hot-swap sockets with pre-lubed switches out of the box",
      "3 wireless connection modes",
      "Rotary knob adds physical volume control"
    ],
    "cons": [
      "Compressed right-side cluster limits aftermarket keycap set compatibility",
      "Moderate transition curve if used to full-size key spacing",
      "Above the strict $60 budget line"
    ],
    "bestFor": "Buyers who want F-row and navigation keys in a smaller, hot-swappable wireless board"
  },
  {
    "id": "risophy-104-full-size",
    "rank": 3,
    "badge": "Most Affordable Full-Size",
    "name": "RisoPhy Mechanical Gaming Keyboard, RGB 104 Keys",
    "price": "$28.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09TR4Y91J?tag=theofficejournal-20",
    "description": "At 104 keys, the RisoPhy is a standard full-size layout, a complete numpad, F-row, and navigation cluster in one continuous board with no keys relocated or combined. If your daily workflow includes entering numbers regularly, whether for spreadsheets, accounting, or data entry, a full-size layout like this one is the correct call, not a smaller layout that requires a function-layer workaround for numbers.\n\nThis is the cheapest full-size pick in this list if budget is the deciding factor.\n\nComplete numpad for daily numeric entry.",
    "specs": [
      "Full-size 104-key layout with numpad",
      "Blue switch, wired USB connection",
      "Anti-ghosting, spill-resistant",
      "ABS keycaps",
      "RGB backlighting"
    ],
    "pros": [
      "Cheapest full-size pick in this list",
      "Complete numpad for daily numeric entry",
      "Standard 104-key layout, wide keycap set compatibility",
      "Anti-ghosting and spill resistance at a budget price"
    ],
    "cons": [
      "Full-size footprint pushes the mouse furthest right of any pick here",
      "ABS keycaps wear faster than PBT",
      "Wired only"
    ],
    "bestFor": "Numpad-dependent daily workflows on a tight budget"
  },
  {
    "id": "redragon-k668-108-full-size",
    "rank": 4,
    "badge": "Full-Size with Extra Macro Keys",
    "name": "Redragon K668 RGB Gaming Keyboard, 108 Keys",
    "price": "$36.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31qNb+bxSwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CDWP1D58?tag=theofficejournal-20",
    "description": "At 108 keys, the Redragon K668 is a full-size layout plus 4 extra dedicated hotkeys beyond the standard 104-key count, still keeping the complete numpad and F-row a heavy spreadsheet or numeric workflow needs. Those extra hotkeys sit outside the standard layout, so if you plan to buy an aftermarket keycap set later, expect those 4 keys specifically to be left uncovered.\n\nIt ships with 2 sets of mixed color keycaps and an upgraded hot-swappable socket, features not typical at this price on a full-size board, and sound-absorbing foam inside the case reduces the hollow, tinny sound common on inexpensive full-size keyboards.",
    "specs": [
      "Full-size 108-key layout (104 + 4 extra hotkeys)",
      "Hot-swappable socket, red switch",
      "2 sets of mixed color PBT keycaps included",
      "Sound-absorbing foam inside the case",
      "Wired USB connection"
    ],
    "pros": [
      "Full numpad plus 4 extra dedicated hotkeys",
      "Hot-swappable at a budget price point",
      "2 keycap sets included in the box",
      "Sound-absorbing foam reduces case ping"
    ],
    "cons": [
      "The 4 extra hotkeys won't be covered by most aftermarket keycap sets",
      "Widest footprint of any pick in this list",
      "Wired only"
    ],
    "bestFor": "Numpad users who also want a few extra dedicated macro keys"
  },
  {
    "id": "keychron-v6-wired-brown-knob",
    "rank": 5,
    "badge": "Full-Size Wired with Knob",
    "name": "Keychron V6 Wired Custom Mechanical Keyboard, Knob Version",
    "price": "$99.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41GdrDKwGaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B2DMKFM5?tag=theofficejournal-20",
    "description": "Another full-size layout, the Keychron V6 pairs the complete 104-plus key numpad and F-row with QMK/VIA open-source firmware support, meaning every key on this board stays fully remappable indefinitely rather than depending on a smaller brand's software that could be discontinued down the line. A rotary knob handles volume without dedicating a key to it.\n\nHot-swappable Keychron K Pro Brown switches ship pre-installed, so it's ready to type on immediately but still open to switch experimentation later, and the wired connection means no battery to manage on a board this size.",
    "specs": [
      "Full-size layout with numpad and rotary knob",
      "QMK/VIA open-source firmware",
      "Hot-swappable Keychron K Pro Brown switches",
      "Wired USB-C connection",
      "Mac and Windows compatible"
    ],
    "pros": [
      "Open-source QMK/VIA firmware won't be abandoned by the brand",
      "Hot-swappable despite full-size footprint",
      "Rotary knob for volume without losing a key",
      "Cross-platform Mac and Windows support"
    ],
    "cons": [
      "Full-size footprint pushes the mouse further right",
      "Wired only, no wireless option",
      "Pricier than the RisoPhy or Redragon full-size picks"
    ],
    "bestFor": "Numpad users who want long-term remappable firmware and hot-swap in one board"
  },
  {
    "id": "keychron-v6-max-wireless-banana",
    "rank": 6,
    "badge": "Full-Size Wireless (Linear Switch)",
    "name": "Keychron V6 Max Wireless, Gateron Banana Switch",
    "price": "$119.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31CBQMyMfsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DM8T2YZY?tag=theofficejournal-20",
    "description": "1 instead of a fixed cable, useful if your desk setup already has a wired full-size board's cable clutter to avoid. Gateron Banana switches are a linear feel, smooth and consistent keypresses without a tactile bump.\n\nBoth the V6 Max variants in this list share the same full-size hot-swap frame, so the choice between this one and the Brown switch version below comes down entirely to whether you prefer a linear or tactile keypress feel.",
    "specs": [
      "Full-size layout, wireless",
      "Gateron Banana linear switch, hot-swappable",
      "2.4GHz / Bluetooth 5.1",
      "QMK/VIA open-source firmware",
      "RGB backlight"
    ],
    "pros": [
      "Full-size layout without a wired tether",
      "Linear Gateron Banana switch feel, smooth keypresses",
      "Open-source QMK/VIA firmware",
      "Hot-swappable despite wireless build"
    ],
    "cons": [
      "Most expensive pick in this list",
      "Full-size footprint pushes the mouse further right",
      "Linear feel may not suit buyers who prefer tactile feedback"
    ],
    "bestFor": "Buyers who want a wireless full-size board with a smooth linear switch feel"
  },
  {
    "id": "keychron-v6-max-wireless-brown",
    "rank": 7,
    "badge": "Full-Size Wireless (Tactile Switch)",
    "name": "Keychron V6 Max Wireless, Gateron Brown Switch",
    "price": "$119.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/413s7zLyA1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14L7VZ6?tag=theofficejournal-20",
    "description": "This is the tactile counterpart to the Banana switch V6 Max above, same full-size wireless QMK/VIA frame, but Gateron Brown switches add a subtle bump partway through each keypress instead of a smooth linear travel. That tactile feedback helps some typists feel confirmation of a keystroke without bottoming out every key.\n\n1, hot-swap sockets, and open-source firmware, so pick this one specifically if you know you prefer tactile switches over linear.\n\nTactile Gateron Brown switch feel for keystroke confirmation.",
    "specs": [
      "Full-size layout, wireless",
      "Gateron Brown tactile switch, hot-swappable",
      "2.4GHz / Bluetooth 5.1",
      "QMK/VIA open-source firmware",
      "RGB backlight"
    ],
    "pros": [
      "Full-size layout without a wired tether",
      "Tactile Gateron Brown switch feel for keystroke confirmation",
      "Open-source QMK/VIA firmware",
      "Hot-swappable despite wireless build"
    ],
    "cons": [
      "Same high price as the linear version",
      "Full-size footprint pushes the mouse further right",
      "Tactile bump may feel unnecessary to linear-switch typists"
    ],
    "bestFor": "Buyers who want a wireless full-size board with tactile switch feedback"
  },
  {
    "id": "keychron-v6-wired-frosted-black",
    "rank": 8,
    "badge": "Most Affordable Keychron Full-Size",
    "name": "Keychron V6 Wired, Frosted Black-Translucent",
    "price": "$89.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41kuxJTAsdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B2DPFWGR?tag=theofficejournal-20",
    "description": "This is a lower-cost wired V6 variant without the rotary knob, still a full-size layout with the same hot-swappable Keychron K Pro Brown tactile switches and open-source QMK/VIA firmware as the knob version, in a frosted black-translucent case that shows a hint of the internals underneath. Dropping the knob keeps the price a moderate amount lower than the knob version while keeping every other feature identical, worth choosing if you don't need a dedicated volume dial and would rather save the cost.",
    "specs": [
      "Full-size layout, no rotary knob",
      "Hot-swappable Keychron K Pro Brown switches",
      "QMK/VIA open-source firmware",
      "Wired USB-C connection",
      "Frosted black-translucent case"
    ],
    "pros": [
      "Cheapest wired full-size Keychron pick in this list",
      "Same hot-swap sockets and firmware as the pricier knob version",
      "Frosted translucent case adds visual distinction",
      "Cross-platform Mac and Windows support"
    ],
    "cons": [
      "No rotary knob for physical volume control",
      "Full-size footprint pushes the mouse further right",
      "Wired only"
    ],
    "bestFor": "Buyers who want the Keychron V6 hot-swap experience without paying for a knob"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-ergonomic-keyboards-amazon-best-sellers",
    "title": "Best Ergonomic Keyboards Amazon Best Sellers (2026)"
  },
  {
    "href": "/guide/best-mechanical-keyboards-under-60-100-budget",
    "title": "Best Mechanical Keyboards Under $60/$100 Budget (2026)"
  },
  {
    "href": "/guide/60-vs-65-vs-75-keyboard",
    "title": "60% vs 65% vs 75% Keyboard (2026)"
  },
  {
    "href": "/guide/tkl-vs-full-size-keyboard",
    "title": "TKL vs Full-Size Keyboard (2026)"
  },
  {
    "href": "/guide/keyboard-size-chart",
    "title": "Keyboard Size Chart (2026)"
  }
];

export const breadcrumbLabel = "Best Mechanical Keyboard Layouts Explained + Picks";
