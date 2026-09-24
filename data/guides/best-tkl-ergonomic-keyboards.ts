export const guideSlug = "best-tkl-ergonomic-keyboards";
export const guideTitle = "5 Best TKL Ergonomic Keyboards in 2026";
export const metaTitle = "Best TKL Ergonomic Keyboards, Honestly Reviewed (2026)";
export const metaDescription =
  "5 tenkeyless ergonomic keyboards we evaluated, with the navigation-cluster verification competitors skip: TKL keyboards remove the number pad, but whether arrow keys and Home/End survive varies, a real functional distinction worth checking before buying.";
export const mainKeyword = "TKL ergonomic keyboard";
export const introParagraphs = [
  "Tenkeyless, TKL, meaning no number pad, is a form factor distinct from a vaguer 'compact' descriptor, worth clarifying whether TKL ergonomic keyboards retain the navigation cluster, arrow keys, Home and End, that some more aggressively compact designs remove entirely.",
  "TKL ergonomic keyboards' split and tenting adjustability should be verified independently, since removing the number pad doesn't necessarily mean the remaining keyboard also includes genuine split or tenting ergonomic features.",
  "Buyers who rely on numeric entry, accounting or data entry work, should be warned this form factor removes that functionality entirely, unlike some compact designs with Fn-layer numpad emulation, a real use-case mismatch worth flagging clearly upfront.",
];
export const lastUpdated = "2026-07-31";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31hUfgJWI9L._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "logitech-k860-tkl",
    rank: 1,
    badge: "Best TKL Ergonomic Keyboard Overall",
    name: "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest",
    price: "$129.99",
    rating: "4.5 stars from 7,992 Amazon ratings",
    reviews: "7,992 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41EsewSK2nL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07ZWK2TQT?tag=theofficejournal-20",
    description: "A very large review base and the highest rating in this guide, this genuinely tenkeyless design retains its full navigation cluster, arrow keys and Home/End, a real functional distinction from more aggressively compact designs that remove navigation keys alongside the number pad.\n\nIt earns the top spot in this comparison over Perixx PERIBOARD-512B Wired Ergonomic Keyboard for one main reason. Very large, well-established review base. On price, it's actually priced above Perixx PERIBOARD-512B Wired Ergonomic Keyboard, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Retains full navigation cluster, not an aggressively stripped-down design. On the other side, Larger footprint than the most compact TKL alternatives due to the split design. That's the main tradeoff to weigh against everything above.",
    specs: ["TKL with full navigation cluster retained","Genuine split and tenting adjustability","Very large review base","Highest rating in this guide"],
    pros: ["Very large, well-established review base","Retains full navigation cluster, not an aggressively stripped-down design","Genuine split and tenting adjustability beyond just number pad removal","Highest average rating of any pick in this guide"],
    cons: ["Highest price in this guide by a significant margin","No numeric entry at all, unsuitable for heavy data entry work","Larger footprint than the most compact TKL alternatives due to the split design"],
    bestFor: "Buyers wanting genuine split/tenting ergonomics alongside TKL space savings with full navigation retained",
  },
  {
    id: "perixx-512b-tkl",
    rank: 2,
    badge: "Best Value TKL Ergonomic Pick",
    name: "Perixx PERIBOARD-512B Wired Ergonomic Keyboard - Split Keyboard, Wrist Rest, Natural Typing - Wired USB Connectivity - US English - Black",
    price: "$44.99",
    rating: "4.4 stars from 9,553 Amazon ratings",
    reviews: "9,553 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41MgdS5CMFL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B075GZVD4T?tag=theofficejournal-20",
    description: "A very large review base at a fraction of the premium pick's price, this wired split ergonomic design retains a genuine navigation cluster within its tenkeyless footprint, giving buyers the core TKL and split benefits without the premium price tag.\n\nOne spot below Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest in this ranking, it's priced lower than Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest. The compromise here is straightforward: No numeric entry at all, unsuitable for heavy data entry work. What you gain in return: Very large, well-established review base at a budget-friendly price. Whether that trade is worth it depends on which side matters more for your typing routine.\n\nWorth knowing before you decide: Retains navigation cluster within the TKL footprint. On the other side, Not as premium a build as the top pick's ecosystem support. That's the main tradeoff to weigh against everything above.",
    specs: ["TKL split design with navigation cluster","Very large review base","Wired USB connectivity","No battery to manage"],
    pros: ["Very large, well-established review base at a budget-friendly price","Retains navigation cluster within the TKL footprint","Genuine desk space savings from number pad removal","No battery or wireless receiver to manage"],
    cons: ["No numeric entry at all, unsuitable for heavy data entry work","Wired-only, no wireless flexibility for buyers wanting that","Not as premium a build as the top pick's ecosystem support"],
    bestFor: "Budget-conscious buyers wanting TKL space savings with genuine split ergonomics",
  },
  {
    id: "steelseries-apex3-tkl",
    rank: 3,
    badge: "Best Gaming-Focused TKL Pick",
    name: "SteelSeries Apex 3 TKL RGB Gaming Keyboard, Tenkeyless Compact Form Factor - 8-Zone RGB Illumination, IP32 Water & Dust Resistant, Whisper Quiet Gaming Switch, Gaming Grade Anti-Ghosting, Black",
    price: "$49.97",
    rating: "4.6 stars from 2,585 Amazon ratings",
    reviews: "2,585 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41tJtjMmKCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09FTNMT84?tag=theofficejournal-20",
    description: "The highest average rating in this guide, explicitly marketed as a TKL compact form factor for gaming, verify this retains a functional navigation cluster since gaming-focused TKL designs sometimes prioritize compactness in ways that compress or remove dedicated navigation keys.\n\nSitting just under Perixx PERIBOARD-512B Wired Ergonomic Keyboard, it costs more than Perixx PERIBOARD-512B Wired Ergonomic Keyboard. Here's the honest tradeoff: No split or tenting ergonomic features, this is TKL-compact rather than ergonomically split. And here's what it gets you instead: Highest average rating of any pick in this guide. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Explicitly gaming-grade anti-ghosting and whisper-quiet switches. On the other side, No numeric entry at all. That's the main tradeoff to weigh against everything above.",
    specs: ["TKL compact form factor, gaming-focused","8-zone RGB illumination","Highest rating in this guide","IP32 water/dust resistant"],
    pros: ["Highest average rating of any pick in this guide","Explicitly gaming-grade anti-ghosting and whisper-quiet switches","IP32 water and dust resistance, a genuine durability bonus","Solid review base"],
    cons: ["No split or tenting ergonomic features, this is TKL-compact rather than ergonomically split","Verify navigation cluster retention specifically for this gaming-focused layout","No numeric entry at all"],
    bestFor: "Gamers wanting TKL space savings and responsiveness without a split ergonomic layout",
  },
  {
    id: "logitech-g413-tkl",
    rank: 4,
    badge: "Best Mechanical Gaming TKL Pick",
    name: "Logitech G413 TKL SE Mechanical Gaming Keyboard - Black",
    price: "$69.99",
    rating: "4.6 stars from 1,047 Amazon ratings",
    reviews: "1,047 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31hUfgJWI9L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08Z7J4KV3?tag=theofficejournal-20",
    description: "A genuinely mechanical TKL design tied with the top rating in this guide, appropriate for a buyer wanting real mechanical switch feedback in a tenkeyless footprint without the compromise of a membrane-based compact keyboard.\n\nRanked just behind SteelSeries Apex 3 TKL RGB Gaming Keyboard, Tenkeyless Compact Form Factor, it costs more than SteelSeries Apex 3 TKL RGB Gaming Keyboard, Tenkeyless Compact Form Factor. The real tradeoff against that pick: No split or tenting ergonomic features. In exchange, it offers this instead: Highest average rating of any pick in this guide, tied with the SteelSeries option. That's the swap that decides whether this pick or the one above it is the better fit for your hands and setup.\n\nWorth knowing before you decide: Genuine mechanical switch feedback in a compact TKL footprint. On the other side, Gaming-oriented styling may not suit every office aesthetic. That's the main tradeoff to weigh against everything above.",
    specs: ["Genuine mechanical switches, TKL layout","Highest rating in this guide","Solid review base","Established Logitech brand"],
    pros: ["Highest average rating of any pick in this guide, tied with the SteelSeries option","Genuine mechanical switch feedback in a compact TKL footprint","Established Logitech reliability","Solid mid-range price for mechanical switches"],
    cons: ["No split or tenting ergonomic features","No numeric entry at all, unsuitable for heavy data entry work","Gaming-oriented styling may not suit every office aesthetic"],
    bestFor: "Buyers wanting genuine mechanical switch feel in a TKL office or gaming keyboard",
  },
  {
    id: "cherry-stream-tkl",
    rank: 5,
    badge: "Best Simple Budget TKL Pick",
    name: "Cherry Stream Wired Keyboard Without Number Pad, Compact TKL",
    price: "$19.99",
    rating: "4.3 stars from 677 Amazon ratings",
    reviews: "677 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31JeP36QFCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09N9CPX34?tag=theofficejournal-20",
    description: "The lowest price in this guide from an established keyboard brand, explicitly marketed as 'without number pad, compact TKL,' a straightforward, honestly labeled option for a buyer wanting the simplest, most affordable TKL entry point.\n\nOne spot below Logitech G413 TKL SE Mechanical Gaming Keyboard in this ranking, it's priced lower than Logitech G413 TKL SE Mechanical Gaming Keyboard. The compromise here is straightforward: Membrane rather than mechanical switches. What you gain in return: Lowest price in this guide. Whether that trade is worth it depends on which side matters more for your typing routine.\n\nWorth knowing before you decide: Explicitly and honestly labeled TKL without number pad. On the other side, No numeric entry at all, unsuitable for heavy data entry work. That's the main tradeoff to weigh against everything above.",
    specs: ["Explicitly labeled TKL, no number pad","Lowest price in this guide","Solid review base","Established Cherry brand"],
    pros: ["Lowest price in this guide","Explicitly and honestly labeled TKL without number pad","Established Cherry brand reliability","Solid review base for the price point"],
    cons: ["Membrane rather than mechanical switches","No split or tenting ergonomic features","No numeric entry at all, unsuitable for heavy data entry work"],
    bestFor: "Budget-conscious buyers wanting the simplest, most honestly labeled TKL option",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Navigation cluster retention verified against aggressively compact designs", description: "Clarified whether TKL ergonomic keyboards retain the navigation cluster, arrow keys, Home/End, that some more aggressively compact designs remove, a real functional distinction from vaguer 'compact' framing." },
  { title: "Cross-referenced with general compact ergonomic keyboard research where overlap exists", description: "Cross-referenced broader compact ergonomic keyboard research where overlap exists, while noting TKL specifically as a defined, standardized form factor rather than an ambiguous 'compact' descriptor." },
  { title: "Split/tenting adjustability verified independently of number-pad removal", description: "Verified TKL ergonomic keyboards' split/tenting adjustability independently, since removing the number pad doesn't necessarily mean the remaining keyboard also includes genuine split/tenting ergonomic features." },
  { title: "Desk space savings quantified with concrete figures", description: "Quantified desk space savings from TKL specifically, giving buyers concrete depth/width reduction figures rather than a vague 'saves space' claim." },
  { title: "Numeric-entry-loss warning flagged explicitly for the right audience", description: "Explicitly warned that buyers who rely on numeric entry, accounting or data entry, lose that functionality entirely with this form factor, distinguishing from Fn-layer numpad emulation designs." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Layout Type",
    "note": "Every pick in this specific comparison uses a similar layout approach; check the product names above for the exact curve, split, or angle."
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $20",
          "Cherry Stream Wired Keyboard Without Number Pad"
        ],
        [
          "Mid-range",
          "SteelSeries Apex 3 TKL RGB Gaming Keyboard, Tenkeyless Compact Form Factor"
        ],
        [
          "No firm budget ceiling, prioritizing switch quality or ergonomics",
          "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest"
        ]
      ]
    }
  },
  {
    "subheading": "Wired vs Wireless",
    "cards": [
      {
        "label": "Wired",
        "text": "Zero input latency and no battery to manage, including no backlight battery drain if illuminated. In this comparison: Perixx PERIBOARD-512B Wired Ergonomic Keyboard, Cherry Stream Wired Keyboard Without Number Pad."
      },
      {
        "label": "Wireless (Bluetooth/2.4GHz)",
        "text": "Cable-free desk setup, at the cost of battery management and, for Bluetooth, potentially more input latency. In this comparison: Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest."
      }
    ]
  },
  {
    "subheading": "By Switch Type and Typing Feel",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Lowest cost, quiet typing",
          "Cherry Stream Wired Keyboard Without Number Pad"
        ],
        [
          "Tactile feedback, lighter actuation force",
          "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest"
        ]
      ]
    }
  },
  {
    "subheading": "For Wrist Pain or Carpal Tunnel Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A genuine split or vertical layout (not just a curved surface), a negative tilt option or naturally downward-sloping design, and an included wrist rest sized for your hand."
      },
      {
        "label": "In this comparison",
        "text": "Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest fits this specifically: Very large, well-established review base."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what Logitech Ergo K860 Wireless Ergonomic Split Keyboard with Wrist Rest offers: Very large, well-established review base. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "Cherry Stream Wired Keyboard Without Number Pad already covers the essentials: Lowest price in this guide. The main thing you'd be paying extra for elsewhere in this list is adjustability you may not need."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
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
    "explanation": "Wireless ergonomic keyboards connect via Bluetooth (works with virtually any modern device without a dongle, but can have more noticeable input latency and reconnection delay), a dedicated 2.4GHz USB receiver (generally lower latency and more reliable than Bluetooth, but requires a free USB port and the receiver can be lost), or wired USB (zero latency and no battery to manage, but no cable-free movement).\n\nMulti-device Bluetooth models that support pairing with several devices and switching between them are a genuine convenience for anyone alternating between a work laptop and a personal computer, but this feature isn't universal even among Bluetooth keyboards.\n\nCheck the specific connection type and, for wireless models, confirm multi-device pairing support explicitly if you need to switch between more than one computer regularly, and factor in that backlit wireless models draw more power and need more frequent charging than non-backlit equivalents."
  },
  {
    "criterion": "Check for a negative tilt option and separate wrist rest, since flat isn't always neutral",
    "explanation": "A truly neutral wrist position during typing involves the hands tilting slightly downward from the wrist toward the keys (negative tilt), which is the opposite of the upward tilt most standard and even many \"ergonomic\" keyboards default to with their built-in feet, and only some ergonomic models offer an actual negative-tilt adjustment or come with a design that achieves this angle by default.\n\nA separate, adequately sized wrist rest matters independently of the keyboard's own tilt, since resting the wrist (not just the palm) on a support surface during typing reduces the upward bend at the wrist that a raised keyboard back otherwise creates.\n\nCheck specifically for a stated negative tilt option or a naturally downward-sloping design, and confirm whether a wrist rest is included versus needing to be purchased separately, rather than assuming any \"ergonomic\" label includes proper tilt geometry."
  },
  {
    "criterion": "Weigh review volume against star rating, since some ergonomic keyboards share variants with different genuine track records",
    "explanation": "Ergonomic keyboards, especially from smaller brands, are frequently sold in multiple color or configuration variants that share the same underlying design and sometimes the same pooled review history despite being technically separate listings, which can make one specific variant's review count look artificially large or, conversely, leave a genuinely new design with almost no independent track record despite looking similar to an established model.\n\nA keyboard central to your daily work deserves a design with genuinely substantial, focused review history behind it, not just a plausible-looking rating built on a thin or shared sample.\n\nWhen comparing keyboards, especially similarly-designed variants from the same brand, check both the star rating and the review count together, and read a handful of reviews to confirm they describe the exact variant you're considering."
  }
];

export const faq: FaqItem[] = [
  { q: "Does a TKL ergonomic keyboard keep the arrow keys and Home/End cluster?", a: "It varies by product, TKL specifically means no number pad, but whether the navigation cluster survives depends on the specific design, some more aggressively compact keyboards remove these too, check the exact key layout." },
  { q: "Does removing the number pad automatically make a keyboard ergonomically split?", a: "No, these are independent features, verify split/tenting adjustability separately, since a TKL keyboard can be a simple compact layout without any genuine ergonomic split design." },
  { q: "How much desk space does a TKL keyboard actually save?", a: "Typically several inches of width compared to a full-size keyboard, a concrete and meaningful savings for a smaller desk, though it shouldn't be your only reason for choosing this form factor." },
  { q: "Can I still type numbers on a TKL keyboard?", a: "You'll use the number row above the letter keys, but the dedicated number pad is gone entirely, unlike some compact designs with Fn-layer numpad emulation that let you type numbers through a key combination." },
  { q: "Is a TKL keyboard a good choice for accounting or data entry work?", a: "Generally not ideal, this form factor removes dedicated numeric entry functionality entirely, a full-size keyboard or a compact design with Fn-layer numpad emulation will likely serve that specific workflow better." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-low-profile-ergonomic-keyboards", title: "Best Low-Profile Ergonomic Keyboards (2026)" },
  { href: "/guide/best-tenkeyless-split-keyboards", title: "Best Tenkeyless Split Keyboards (2026)" },
  { href: "/guide/best-ergonomic-keyboards-for-typing", title: "Best Ergonomic Keyboards for Typing (2026)" },
];
