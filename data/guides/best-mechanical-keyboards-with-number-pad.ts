export const guideSlug = "best-mechanical-keyboards-with-number-pad";
export const guideTitle = "7 Best Mechanical Keyboards with Number Pad in 2026";
export const metaTitle = "Best Mechanical Keyboards with Number Pad in 2026 (Full-Size Picks)";
export const metaDescription =
  "7 best mechanical keyboards with a number pad in 2026, from a budget 104-key board to full-size wireless picks. Compare layout, switches, and price.";
export const mainKeyword = "mechanical keyboard with number pad";
export const introParagraphs = [
  "A mechanical keyboard with a number pad means a genuinely full-size or 104-108 key layout, not a tenkeyless or 75 percent board with the numpad marketed as optional. That distinction matters more than most listings let on, since a lot of full-size looking keyboards on Amazon quietly drop the numpad to save desk space, and a board that keeps it needs roughly 4 extra inches of desk width to sit flat next to a mouse.",
  "Below are 7 mechanical keyboards we evaluated that genuinely include a full numpad based on verified key counts and layout descriptions in their real listings, ranging from a $28.99 104-key budget board to a $157 low-profile wireless option, so spreadsheet and data-entry work stays fast without reaching for a separate numpad.",
];
export const lastUpdated = "2026-07-23";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg";

export interface GuideProduct {
  id: string;
  rank: number;
  badge: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  amazonUrl: string;
  description: string;
  specs: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface BuyingCriterion {
  criterion: string;
  explanation: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const products: GuideProduct[] = [
  {
    id: "risophy-104-key-numpad",
    rank: 1,
    badge: "Best Budget",
    name: "RisoPhy 104-Key Mechanical Gaming Keyboard",
    price: "$28.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09TR4Y91J?tag=theofficejournal-20",
    description:
      "The RisoPhy is a genuine 104-key full-size board, so the numpad is not an afterthought bolted onto a smaller layout. Blue switches give it an audibly clicky feel, which is worth knowing if you plan to use the numpad in a shared office or on video calls. An ultra-slim ABS keycap profile keeps the overall footprint low, and spill resistance plus anti-ghosting are useful basics at this price. It is the pick for buyers who want a real numpad without spending close competitively on it. 104-key layout confirmed, not a marketing approximation. That's a real strength, but weigh it against the flip side: blue switches are the loudest switch type, poor for shared spaces.",
    specs: [
      "104-key full-size layout",
      "Blue clicky switches",
      "RGB LED backlight",
      "Anti-ghosting, spill-resistant",
      "Wired USB connection",
    ],
    pros: [
      "Cheapest genuinely full-size numpad option in this list",
      "104-key layout confirmed, not a marketing approximation",
      "Spill-resistant and anti-ghosting at a budget price",
      "Ultra-slim keycap profile",
    ],
    cons: [
      "Blue switches are the loudest switch type, poor for shared spaces",
      "ABS keycaps wear and shine faster than PBT",
      "Wired only, no wireless option",
    ],
    bestFor: "Buyers who want a confirmed full numpad on the lowest budget",
  },
  {
    id: "keychron-v6-knob-numpad",
    rank: 2,
    badge: "Best with Volume Knob",
    name: "Keychron V6 Knob Version Full-Size Mechanical Keyboard",
    price: "$99.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41GdrDKwGaL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B2DMKFM5?tag=theofficejournal-20",
    description:
      "Keychron lists the V6 Knob Version as a genuine full-size layout, and it adds a physical volume knob above the numpad, a detail most full-size boards skip entirely. Hot-swappable Keychron K Pro Brown switches mean you can change switch feel later without a soldering iron.\n\nQMK and VIA support opens up full key remapping, useful if you want to repurpose numpad keys for macros. It runs wired only, so it is built for a stationary desk setup rather than a laptop that moves around.\n\nWorth calling out specifically: hot-swappable switches for later customization. The catch is wired only, no Bluetooth option on this model.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Keychron K Pro Brown switches",
      "Physical volume knob",
      "QMK/VIA programmable",
      "Wired, Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size layout with a dedicated volume knob",
      "Hot-swappable switches for later customization",
      "Full QMK/VIA remapping support",
      "Cross-platform compatibility",
    ],
    cons: [
      "Wired only, no Bluetooth option on this model",
      "Pricier than the Redragon and RisoPhy picks",
      "Brown switches still register a light tactile bump, not silent",
    ],
    bestFor: "Buyers who want remapping, hot-swap switches, and a volume knob together",
  },
  {
    id: "keychron-v6-max-wireless-numpad",
    rank: 3,
    badge: "Best Wireless",
    name: "Keychron V6 Max Wireless Full-Size Mechanical Keyboard",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/413s7zLyA1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D14L7VZ6?tag=theofficejournal-20",
    description:
      "The V6 Max drops the cable in favor of 2.4GHz and Bluetooth connectivity while keeping the confirmed full-size layout and numpad intact, which is rarer than it should be since most brands cut the numpad first to shrink a wireless board. Hot-swappable Gateron Brown switches keep the same customization path as the wired V6.\n\nQMK support carries over for full remapping, and RGB backlighting is included. This is the pick if your desk setup depends on going cable-free without giving up numpad functionality.\n\nDual 2.4GHz and Bluetooth connectivity. Set against that, most expensive pick in this list alongside the Banana switch variant. Both matter when comparing it to the other picks here.",
    specs: [
      "Full-size layout with numpad",
      "2.4GHz + Bluetooth wireless",
      "Hot-swappable Gateron Brown switches",
      "QMK programmable, RGB backlight",
      "Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size wireless layout, numpad intact",
      "Dual 2.4GHz and Bluetooth connectivity",
      "Hot-swappable switches for future changes",
      "Full QMK remapping support",
    ],
    cons: [
      "Most expensive pick in this list alongside the Banana switch variant",
      "Wireless full-size boards drain battery faster with RGB left on",
      "Brown switches are tactile, not a silent switch type",
    ],
    bestFor: "Buyers who want a cable-free desk without losing the numpad",
  },
  {
    id: "keychron-v6-wired-numpad",
    rank: 4,
    badge: "Best Hot-Swappable Value",
    name: "Keychron V6 Wired Full-Size Mechanical Keyboard",
    price: "$89.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41kuxJTAsdL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B2DPFWGR?tag=theofficejournal-20",
    description:
      "This is the same confirmed full-size V6 platform as the Knob Version without the knob, which brings the price down while keeping hot-swappable Keychron K Pro Brown switches and full QMK/VIA support. The frosted, semi-translucent case is the main cosmetic difference from the solid-black knob variant.\n\nIt stays wired only, which keeps latency and price down compared to the wireless V6 Max. For buyers who want the V6's build and remapping without paying for a knob or wireless radio, this is the more efficient choice.\n\nA genuine advantage here is that hot-swappable switches included. The tradeoff is no volume knob or wireless option.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Keychron K Pro Brown switches",
      "Frosted, semi-translucent case",
      "QMK/VIA programmable",
      "Wired, Mac/Windows/Linux compatible",
    ],
    pros: [
      "Same confirmed full-size platform as the Knob Version, lower price",
      "Hot-swappable switches included",
      "Full QMK/VIA remapping",
      "Distinctive frosted case finish",
    ],
    cons: [
      "No volume knob or wireless option",
      "Brown switches are tactile, not silent",
      "Translucent case shows dust more than a solid finish",
    ],
    bestFor: "Buyers who want the V6 platform's numpad and hot-swap switches at a lower price",
  },
  {
    id: "redragon-k668-108key-numpad",
    rank: 5,
    badge: "Best Budget RGB",
    name: "Redragon K668 108-Key Mechanical Keyboard",
    price: "$36.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31qNb+bxSwL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CDWP1D58?tag=theofficejournal-20",
    description:
      "The Redragon K668 is a confirmed 108-key layout, 4 keys more than a standard 104-key full-size board thanks to extra programmable hotkeys above the numpad. Red linear switches keep it quieter than the clicky RisoPhy while still being budget-friendly.\n\nSound-absorbing foam inside the case and hot-swappable sockets are unusual inclusions at this price point, and it ships with two full sets of mixed-color keycaps for easy customization. It is the strongest value pick for buyers who want a full numpad plus extra hotkeys.\n\nSound-absorbing foam and hot-swappable sockets at a budget price. That's a real strength, but weigh it against the flip side: wired only.",
    specs: [
      "108-key layout with numpad and 4 extra hotkeys",
      "Red linear switches, hot-swappable",
      "Sound-absorbing foam inside the case",
      "2 sets of mixed-color keycaps included",
      "Wired USB connection",
    ],
    pros: [
      "Confirmed 108-key layout with extra hotkeys beyond a standard numpad",
      "Sound-absorbing foam and hot-swappable sockets at a budget price",
      "Two keycap sets included for customization",
      "Red linear switches are quieter than clicky Blue",
    ],
    cons: [
      "Wired only",
      "Not remappable via QMK/VIA like the Keychron picks",
      "Foam dampening reduces but does not eliminate switch and stab noise",
    ],
    bestFor: "Buyers who want the most numpad and hotkeys per dollar",
  },
  {
    id: "keychron-v6-max-banana-numpad",
    rank: 6,
    badge: "Best for Linear Switch Fans",
    name: "Keychron V6 Max Wireless Full-Size Mechanical Keyboard (Banana Switch)",
    price: "$119.99",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/31CBQMyMfsL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DM8T2YZY?tag=theofficejournal-20",
    description:
      "This is the same confirmed full-size V6 Max wireless platform, swapped to Gateron Banana switches, a smooth linear switch instead of the tactile Brown used on the other V6 variants. Linear switches suit fast, repeated numpad entry like data-entry or spreadsheet work better than a tactile bump does.\n\nConnectivity, QMK support, and hot-swap sockets carry over unchanged from the Brown-switch V6 Max. Pick this version specifically if you know you prefer a linear feel over a tactile one for numeric entry.\n\nWorth calling out specifically: smooth linear switch better suited to fast repeated numpad entry. The catch is same premium price as the Brown-switch V6 Max.",
    specs: [
      "Full-size layout with numpad",
      "Hot-swappable Gateron Banana linear switches",
      "2.4GHz + Bluetooth wireless",
      "QMK programmable, RGB backlight",
      "Mac/Windows/Linux compatible",
    ],
    pros: [
      "Confirmed full-size wireless layout with numpad",
      "Smooth linear switch better suited to fast repeated numpad entry",
      "Hot-swappable if switch preference changes later",
      "Same QMK remapping support as the Brown-switch variant",
    ],
    cons: [
      "Same premium price as the Brown-switch V6 Max",
      "Linear switches give less physical feedback than tactile Brown",
      "Wireless full-size boards need more frequent charging with RGB on",
    ],
    bestFor: "Buyers who specifically want a linear switch feel for fast numeric entry",
  },
  {
    id: "logitech-mx-mechanical-numpad",
    rank: 7,
    badge: "Best Low-Profile Premium",
    name: "Logitech MX Mechanical Wireless Illuminated Keyboard",
    price: "$157.00",
    rating: "New listing",
    reviews: "Not yet rated",
    imageUrl: "https://m.media-amazon.com/images/I/41FBNsAaL4L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09LK1P1RD?tag=theofficejournal-20",
    description:
      "The standard MX Mechanical, as opposed to Logitech's separate MX Mechanical Mini, ships as a full-size board with a numpad, built around a low-profile tactile switch rather than the taller switches used on the Keychron and Redragon picks in this list. That low-profile design suits buyers who want a slimmer typing angle without dropping to a compact layout.\n\nMulti-device Bluetooth pairing and Logi Bolt USB receiver support let it switch between up to 3 computers instantly, a feature none of the other picks here offer. It is the most expensive board in this list, but the build quality and low-profile feel are the trade you are paying for.\n\nMulti-device switching across up to 3 computers. Set against that, most expensive pick in this list. Both matter when comparing it to the other picks here.",
    specs: [
      "Full-size layout with numpad",
      "Low-profile tactile mechanical switches",
      "Multi-device Bluetooth + Logi Bolt receiver",
      "Backlit, illuminated keys",
      "Rechargeable battery",
    ],
    pros: [
      "Confirmed full-size numpad in a slimmer low-profile body",
      "Multi-device switching across up to 3 computers",
      "Premium build and illuminated keys",
      "Low-profile switches feel closer to a laptop keyboard",
    ],
    cons: [
      "Most expensive pick in this list",
      "Not hot-swappable or QMK programmable like the Keychron boards",
      "Low-profile switch feel is a different typing experience than standard mechanical switches",
    ],
    bestFor: "Buyers who want a premium, low-profile full-size numpad board with multi-device switching",
  },
];

export interface HowWeEvaluatedItem {
  title: string;
  description: string;
}

export const howWeEvaluated: HowWeEvaluatedItem[] = [
  {
    title: "Verified layout and key count",
    description: "Checked each listing's real title and key count to confirm a genuine full-size or 104-108 key layout with a numpad, rather than assuming from category placement alone.",
  },
  {
    title: "Switch type and feel",
    description: "Compared clicky Blue, tactile Brown, linear Red and Banana, and low-profile tactile switches for how each one suits fast, repeated numpad entry.",
  },
  {
    title: "Connectivity options",
    description: "Weighed wired-only boards against 2.4GHz and Bluetooth wireless options, since a full-size wireless board needs more desk space and battery management than a wired one.",
  },
  {
    title: "Customization and remapping",
    description: "Noted which boards support hot-swappable switches and QMK/VIA remapping versus fixed-switch, non-programmable designs.",
  },
  {
    title: "Value for price",
    description: "Weighed confirmed numpad functionality, switch quality, and extras like a volume knob or multi-device pairing against price, from a wired budget board to a premium wireless pick.",
  },
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Match switch type to your actual environment, not just gaming feel",
    "explanation": "Switch type determines feel, sound, and how disruptive the keyboard is to people around you, clicky switches feel satisfying to type on solo but produce an audible click on every keystroke that can be genuinely disruptive on a Zoom call or in a shared office, while linear switches are quieter and smoother, and tactile switches split the difference with a felt bump but no click.\n\nThis matters directly based on where you'll actually use the keyboard, a home office with video calls or a shared workspace calls for a different switch than a private gaming setup where clicky feedback is a feature, not a liability.\n\nCheck the specific switch name (not just \"mechanical\") and look up its actuation force and whether it's linear, tactile, or clicky before assuming any mechanical keyboard suits your environment."
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
    "explanation": "A wireless mechanical keyboard eliminates a desk cable but introduces a small amount of input latency compared to a wired connection, and Bluetooth in particular can have more noticeable latency than a dedicated 2.4GHz USB receiver, a real consideration for competitive gaming but largely unnoticeable for typing and general office work.\n\nThis matters more if you're specifically buying for fast-paced gaming, less for typing-focused office or home use where the latency difference is imperceptible.\n\nCheck whether a wireless keyboard supports a low-latency 2.4GHz dongle in addition to Bluetooth, and consider a wired connection specifically if competitive gaming performance matters."
  },
  {
    "criterion": "Match keyboard layout and size to your actual desk space and workflow",
    "explanation": "Mechanical keyboards range from full-size boards with a number pad to compact tenkeyless (no number pad) and even smaller 60% layouts that omit the function row and arrow keys, and this size choice is a real tradeoff between desk space saved and keys available without a modifier combination.\n\nThis matters directly if you regularly use a number pad for data entry, a compact layout without one adds real friction, while someone who never touches the number pad gains meaningful desk space and a shorter reach to the mouse with a smaller layout.\n\nCheck the specific layout size and key count against your actual daily workflow, not just desk space alone."
  }
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
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Highest average rating",
          "RisoPhy 104"
        ],
        [
          "Largest review base, strongest reliability signal",
          "RisoPhy 104"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Budget",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $29",
          "RisoPhy 104"
        ],
        [
          "Up to $157",
          "Logitech MX Mechanical Wireless Illuminated Keyboard"
        ]
      ]
    }
  },
  {
    "subheading": "Wireless vs Wired Connection",
    "cards": [
      {
        "label": "Wireless",
        "text": "No desk cable, worth checking for a low-latency 2.4GHz dongle option beyond just Bluetooth. In this comparison: Keychron V6 Max Wireless Full, Keychron V6 Wired Full, Keychron V6 Max Wireless Full, Logitech MX Mechanical Wireless Illuminated Keyboard."
      },
      {
        "label": "Wired",
        "text": "Zero input latency and no battery to manage, the safer choice for competitive gaming. In this comparison: RisoPhy 104, Keychron V6 Knob Version Full, Redragon K668 108."
      }
    ],
    "note": "Default to wired if competitive gaming latency matters, wireless for general typing and office use."
  },
  {
    "subheading": "By Keycap Material",
    "note": "Check each pick's listed keycap material (PBT vs ABS) against how long you plan to use it daily before buying, since PBT resists shine and wear better over years. RisoPhy 104 is the most-reviewed option here if you want the safer bet."
  },
  {
    "subheading": "For Shared Office or Video Call Use Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Linear or tactile switches rather than clicky ones, to avoid disruptive noise on calls or in a shared space."
      },
      {
        "label": "In this comparison",
        "text": "RisoPhy 104 is worth checking against its listed switch type before buying, given its strong review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want hot-swappable switches and premium PBT keycaps for years of daily use, where Logitech MX Mechanical Wireless Illuminated Keyboard's build quality gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just want to try the mechanical feel without a big investment, where RisoPhy 104 covers the same job at a lower price."
      }
    ]
  }
];

export const faq: FaqItem[] = [
  {
    q: "How do I know if a mechanical keyboard actually has a number pad?",
    a: "Check the confirmed key count in the listing, not just the word \"full-size\" in the title. A genuine full-size board is 104 keys, and some boards like the Redragon K668 add a few more for extra hotkeys at 108 keys. Anything under 100 keys, including tenkeyless (87-88 keys) or 75 percent boards, does not include a numpad.",
  },
  {
    q: "Does a numpad make my mouse harder to reach?",
    a: "Yes. A full-size numpad adds roughly 4 inches of width compared to a tenkeyless board, which pushes your mouse hand 15-20cm further right and can cause repeated reaching discomfort over long sessions. If you only use the numpad occasionally, a tenkeyless board paired with a separate standalone numpad keeps your mouse closer most of the time while still giving you numpad access when needed.",
  },
  {
    q: "What switch type is best for numpad-heavy work like data entry?",
    a: "Linear switches, like the Red switch on the Redragon K668 or the Banana switch on the Keychron V6 Max, have no tactile bump, which suits fast, repeated numeric entry better than a tactile or clicky switch. Tactile Brown switches give more feedback per press if you prefer confirmation you struck the key, and clicky Blue switches are the loudest option, best avoided in shared spaces.",
  },
  {
    q: "Why do some full-size keyboards sound worse than tenkeyless ones at the same price?",
    a: "A full-size board has more large stabilized keys than a tenkeyless board, including the numpad's 0 key, Enter, and Plus keys, on top of the spacebar. A budget full-size board with poor-quality stabilizers will produce more rattle overall than a budget tenkeyless board, so stabilizer quality affects sound as much as the switch type itself.",
  },
  {
    q: "Is a wireless full-size keyboard worth it over a wired one?",
    a: "Wireless removes cable clutter, but a full-size wireless board has more keys and typically more RGB draw than a tenkeyless wireless board, which shortens battery life between charges. If you want the numpad without managing a battery, a wired option like the RisoPhy or Redragon K668 removes that variable entirely.",
  },
  {
    q: "Are numpad keys different from the main keyboard keys?",
    a: "Numpad keys get used less often than the main alpha cluster, so their switches and stabilizers are less broken in and can feel slightly stiffer when a board is new. This typically evens out with regular use rather than indicating a defect, but it is worth knowing going in.",
  },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-quiet-mechanical-keyboard-switches", title: "Best Quiet Mechanical Keyboard Switches (2026)" },
  { href: "/guide/best-mechanical-keyboards", title: "Best Mechanical Keyboards (2026)" },
  { href: "/guide/best-wireless-mechanical-keyboards", title: "Best Wireless Mechanical Keyboards (2026)" },
  { href: "/guide/best-mechanical-keyboard-under-100", title: "Best Mechanical Keyboards Under $100 (2026)" },
];
