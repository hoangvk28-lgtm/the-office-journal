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
    "q": "How loud are mechanical keyboards compared to normal conversation?",
    "a": "It varies significantly by switch type. Clicky switches, like the RisoPhy or Logitech G PRO in this list, produce the sharpest, most audible sound on every press, comparable to or louder than normal conversation at close range. Linear and low-profile switches, like the Corsair K70 CORE or Logitech G515, are noticeably quieter and better suited to shared spaces."
  },
  {
    "q": "What's the difference between Hall effect, optical, and mechanical switches?",
    "a": "Standard mechanical switches, used in every pick in this list, register a keypress through a physical metal contact at a fixed point of travel. Hall effect switches use a magnet to sense position, and optical switches use a light beam, both allowing adjustable actuation points and rapid trigger, a feature aimed at competitive gaming rather than typing. None of the picks in this list are Hall effect or optical."
  },
  {
    "q": "Will a mechanical keyboard be picked up by my microphone on video calls?",
    "a": "Clicky switches are the most likely to be picked up by a nearby condenser microphone or headset mic. Linear or low-profile switches, like the Corsair K70 CORE TKL or Logitech G515, produce meaningfully less noise and are a safer choice for frequent video calls."
  },
  {
    "q": "PBT keycap material actually mean for me?",
    "a": "ABS keycaps are cheaper to produce but develop a visible shine on frequently pressed keys within a few months of daily use. PBT keycaps, found on the Redragon Hot-Swappable pick in this list, resist this wear far longer and keep their texture and color for years, though they add cost."
  },
  {
    "q": "Is a wireless mechanical keyboard too laggy for gaming?",
    "a": "4GHz or Bluetooth wireless at roughly 1ms of added latency, which is effectively indistinguishable from a wired connection for both typing and the vast majority of gaming use cases."
  },
  {
    "q": "What does hot-swappable mean and is it worth paying for?",
    "a": "A hot-swappable keyboard has sockets under the keycaps that let you remove and replace individual switches without soldering. Both Redragon picks in this list support hot-swapping, which is worth prioritizing on a budget keyboard since it lets you change the feel or noise level later without buying an entirely new board."
  }
];

export const guideSlug = "best-mechanical-keyboards";

export const guideTitle = "The Best Mechanical Keyboards for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg";

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
          "Clicky switches for tactile feedback",
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
          "Logitech G515 Lightspeed TKL Wireless Gaming Keyboard"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "4GHz dongle option beyond just Bluetooth. In this comparison: Keychron K4 96% Layout Wireless Bluetooth/Wired Mechanical Keyboard, Keychron C2 Full Size Wired Mechanical Keyboard, Logitech G515 Lightspeed TKL Wireless Gaming Keyboard."
      },
      {
        "label": "",
        "text": "Zero input latency and no battery to manage, the safer choice for competitive gaming. In this comparison: RisoPhy Mechanical Gaming Keyboard, Corsair K70 CORE TKL RGB Tenkeyless Mechanical Wired Gaming Keyboard, Logitech G PRO Mechanical TKL Tenkeyless Gaming Keyboard, Redragon Mechanical Gaming Keyboard, Redragon K668 RGB Gaming Keyboard."
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
        "text": "You want hot-swappable switches and premium PBT keycaps for years of daily use, where Logitech G515 Lightspeed TKL Wireless Gaming Keyboard's build quality gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just want to try the mechanical feel without a big investment, where Redragon Mechanical Gaming Keyboard covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Compared clicky, tactile, linear, and low-profile switches on feedback style and noise output, since switch type is the single biggest factor in how a mechanical keyboard sounds and feels."
  },
  {
    "title": "Noise profile for shared spaces",
    "description": "Weighed each keyboard's likely noise level against typical work-from-home and office scenarios, flagging which switch types risk being picked up by a nearby microphone on a video call."
  },
  {
    "title": "",
    "description": "Checked whether keycaps were ABS, which shines and wears within months of heavy use, or PBT, which holds its texture and color far longer, and weighed that against price."
  },
  {
    "title": "",
    "description": "4GHz and Bluetooth mechanical keyboards run at roughly 1ms of added latency, effectively unnoticeable versus wired."
  },
  {
    "title": "Upgrade path and hot-swap support",
    "description": "Noted which boards offer hot-swappable switch sockets, letting a buyer change switch feel later without soldering, extending the useful life of a budget keyboard."
  }
];

export const introParagraphs = [
  "A mechanical keyboard swaps the rubber dome under a standard keyboard for individual mechanical switches, which changes how it feels, sounds, and holds up over years of typing. That switch choice matters more than most buyers realize going in, clicky switches feel great solo but can be disruptive on a Zoom call, while linear or Hall effect switches suit different needs entirely for gaming versus office work.",
  "99 Hall effect keyboard with true rapid trigger. Each pick is matched to a specific use case, gaming, office, or work-from-home Zoom calls, rather than ranked as one universal best."
];

export const lastUpdated = "2026-07-23";

export const mainKeyword = "mechanical keyboard";

export const metaDescription = "How 8 mechanical keyboards compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Mechanical Keyboards for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "risophy-rgb-104-blue-switch",
    "rank": 1,
    "badge": "Best Budget Pick",
    "name": "RisoPhy Mechanical Gaming Keyboard, RGB 104 Keys with Blue Switch",
    "price": "$28.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09TR4Y91J?tag=theofficejournal-20",
    "description": "The RisoPhy is a full 104-key layout built on blue clicky switches, the loudest and most tactile switch type in this list, with anti-ghosting and spill resistance for basic peace of mind at a low price. Blue switches produce a distinct click sound on every keypress, which some typists love for the feedback but which is disruptive if you're on frequent voice calls nearby.\n\nABS keycaps keep costs down but will show shine and wear faster than PBT over a year of regular use. This is a reasonable entry point for someone curious about mechanical switches who is not yet ready to spend on a premium board.\n\nFull 104-key layout with number pad.",
    "specs": [
      "104-key full layout",
      "Blue clicky switches",
      "RGB LED backlight",
      "ABS keycaps",
      "Anti-ghosting, spill-resistant"
    ],
    "pros": [
      "Lowest price in this list",
      "Full 104-key layout with number pad",
      "Distinct tactile click feedback",
      "RGB backlighting included"
    ],
    "cons": [
      "Blue switches are the loudest option here, poor fit for shared spaces or Zoom calls",
      "ABS keycaps will show shine within months of regular use",
      "Not hot-swappable, switches cannot be changed"
    ],
    "bestFor": "Budget buyers who want a taste of clicky mechanical feedback"
  },
  {
    "id": "keychron-k4-96-percent-brown",
    "rank": 2,
    "badge": "Best Wireless Value",
    "name": "Keychron K4 96% Layout Wireless Bluetooth/Wired Mechanical Keyboard",
    "price": "$59.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41-A9KzCP3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WS7KSGT?tag=theofficejournal-20",
    "description": "The K4 packs a near-full 100-key layout into a 96% frame that trims excess bezel space, and it runs on Keychron's brown tactile switches, a quieter middle ground between clicky and fully linear. 1 wireless on a mechanical keyboard runs at roughly 1ms of added latency, which is effectively indistinguishable from a wired connection for typing and most gaming.\n\nIt supports both wireless and wired USB modes, so battery anxiety isn't a dealbreaker, you can plug in when needed. White LED backlighting and N-key rollover round out a well-specced board for the price.",
    "specs": [
      "96% compact full-size layout",
      "Brown tactile switches",
      "Bluetooth 5.1 or wired USB",
      "White LED backlight",
      "N-key rollover"
    ],
    "pros": [
      "Tactile brown switches are quieter than clicky blue switches",
      "Wireless latency is effectively unnoticeable at roughly 1ms",
      "Compact 96% layout saves desk space over a full 104-key board",
      "Wired fallback avoids battery dependency"
    ],
    "cons": [
      "Not hot-swappable on this version",
      "ABS keycaps wear faster than PBT over time",
      "Backlight is single-color white, not RGB"
    ],
    "bestFor": "Buyers who want reliable wireless mechanical typing without gaming-tier pricing"
  },
  {
    "id": "keychron-c2-full-size-brown",
    "rank": 3,
    "badge": "Best Full-Size Wired",
    "name": "Keychron C2 Full Size Wired Mechanical Keyboard",
    "price": "$43.31",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31QS87iIEQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09JG7KRC7?tag=theofficejournal-20",
    "description": "The C2 is a straightforward wired full-size 104-key board using Keychron's brown switches, aimed at buyers who want a proven tactile feel without wireless complexity or added cost. A braided USB-C cable improves durability over a basic rubber cord, a small but real detail on a keyboard that gets moved or plugged in daily.\n\nRetro-style ABS keycaps give it a distinct look, though as with any ABS set, expect visible shine on the most-used keys after a year of daily typing versus a PBT equivalent.\n\nBraided USB-C cable resists fraying.",
    "specs": [
      "104-key full-size layout",
      "Brown tactile switches",
      "Wired USB-C with braided cable",
      "Mac and Windows compatible",
      "Retro color ABS keycaps"
    ],
    "pros": [
      "Simple, reliable wired connection",
      "Braided USB-C cable resists fraying",
      "Full number pad for spreadsheet-heavy work",
      "Compatible across Mac and Windows"
    ],
    "cons": [
      "ABS keycaps will show wear over a year of use",
      "No RGB or wireless option on this model",
      "Full-size footprint takes up more desk space"
    ],
    "bestFor": "Buyers who want a dependable full-size wired board without gaming extras"
  },
  {
    "id": "logitech-g515-lightspeed-tkl-tactile",
    "rank": 4,
    "badge": "Best Low-Profile Gaming",
    "name": "Logitech G515 Lightspeed TKL Wireless Gaming Keyboard (Tactile)",
    "price": "$124.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31OJJVgcA9L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D1DSW8TF?tag=theofficejournal-20",
    "description": "The G515 uses a low-profile tenkeyless design that removes the number pad for a more compact desk footprint while keeping Logitech's Lightspeed wireless, which delivers the same near-zero latency as a wired connection. Low-profile switches have shorter travel than standard mechanical switches, which reduces both noise and finger fatigue during long sessions.\n\nTactile feedback here comes without the sharp click of a blue switch, making it a reasonable pick for anyone who wants a low-profile gaming board that won't be as disruptive on a shared call as a louder clicky keyboard.",
    "specs": [
      "Tenkeyless (TKL) low-profile layout",
      "Tactile low-profile switches",
      "Lightspeed wireless, roughly 1ms latency",
      "Compact footprint without number pad",
      "Aluminum top plate"
    ],
    "pros": [
      "Low-profile switches reduce noise and finger travel",
      "Lightspeed wireless is effectively as fast as wired",
      "TKL layout frees up desk space for mouse movement",
      "Aluminum build feels sturdier than plastic-only boards"
    ],
    "cons": [
      "Higher price than the wired picks in this list",
      "No number pad for spreadsheet-heavy work",
      "Low-profile switches are not hot-swappable on this model"
    ],
    "bestFor": "Gamers who want a compact, quieter, low-latency wireless board"
  },
  {
    "id": "corsair-k70-core-tkl-linear",
    "rank": 5,
    "badge": "Best for Sound Dampening",
    "name": "Corsair K70 CORE TKL RGB Tenkeyless Mechanical Wired Gaming Keyboard",
    "price": "$99.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41j4+Pxjo0L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D7J5XVXG?tag=theofficejournal-20",
    "description": "The K70 CORE TKL uses pre-lubed MLX Red linear switches, smooth and quiet with no tactile bump or click, plus factory sound dampening foam that reduces the hollow resonance common on unmodded keyboards. Linear switches like these are a solid choice for both gaming, where consistent, low-noise keypresses help, and shared office space, where a clicky switch would stand out.\n\nA 1000Hz polling rate keeps input response tight for gaming, while double-shot ABS keycaps and SOCD input handling round out a board built with competitive use in mind but quiet enough for daily office typing.\n\n1000Hz polling rate suits competitive gaming.",
    "specs": [
      "Tenkeyless layout",
      "Pre-lubed MLX Red linear switches",
      "Factory sound dampening foam",
      "1000Hz polling rate",
      "SOCD input handling, double-shot ABS keycaps"
    ],
    "pros": [
      "Linear switches plus dampening foam are notably quieter than clicky boards",
      "1000Hz polling rate suits competitive gaming",
      "Pre-lubed switches feel smoother out of the box",
      "TKL layout saves desk space"
    ],
    "cons": [
      "Wired only, no wireless option",
      "Linear switches lack tactile feedback some typists prefer",
      "RGB adds some cost over a non-RGB equivalent"
    ],
    "bestFor": "Buyers who want quiet linear switches without giving up gaming-grade response"
  },
  {
    "id": "logitech-g-pro-tkl-clicky",
    "rank": 6,
    "badge": "Best Clicky Switch for Enthusiasts",
    "name": "Logitech G PRO Mechanical TKL Tenkeyless Gaming Keyboard (Clicky)",
    "price": "$119.00",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41nJY8zgznL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07QQB9VCV?tag=theofficejournal-20",
    "description": "The G PRO TKL uses genuine clicky switches tuned for competitive gaming feedback, giving the sharpest, most audible confirmation of any keypress in this list. That distinct clicky sound profile, sometimes described as a crisp click compared to the deeper thock of some linear boards, is a major factor for typists who specifically want tactile and audible confirmation.\n\nA compact TKL body and detachable cable make it easy to travel with for LAN events or moving between a desk and a laptop setup, but the loud switch profile makes it a poor fit for open-plan offices or frequent video calls.",
    "specs": [
      "Tenkeyless layout",
      "Clicky mechanical switches",
      "Detachable USB cable",
      "Compact, travel-friendly design",
      "Built for competitive gaming feedback"
    ],
    "pros": [
      "Sharp, distinct clicky feedback for tactile typists",
      "Detachable cable simplifies transport",
      "Compact TKL footprint",
      "Proven Logitech switch durability"
    ],
    "cons": [
      "Loudest switch type here alongside the RisoPhy, disruptive on calls",
      "Wired only",
      "Not hot-swappable"
    ],
    "bestFor": "Enthusiasts who specifically want loud, crisp clicky feedback for solo use"
  },
  {
    "id": "redragon-hot-swappable-red-25",
    "rank": 7,
    "badge": "Best Hot-Swappable Budget",
    "name": "Redragon Mechanical Gaming Keyboard, Hot-Swappable Red Switch",
    "price": "$25.49",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41khzfsV4mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CF3VGQFL?tag=theofficejournal-20",
    "description": "This Redragon board pairs quiet-ish red linear switches with hot-swappable sockets at the lowest price in this list, meaning you can pop out the stock switches and try different ones later without soldering. That upgrade path matters for the value proposition, hot-swap support extends a budget keyboard's useful life well past its stock switch feel.\n\nDouble-shot PBT keycaps here are a genuine upgrade over the ABS keycaps found on most keyboards in this price range, resisting shine and wear far better over a year of daily use.\n\nPBT keycaps resist shine better than the ABS on similarly priced boards.",
    "specs": [
      "Red linear switches, hot-swappable",
      "Double-shot PBT keycaps",
      "11 programmable RGB backlit modes",
      "Anti-ghosting",
      "Wired connection"
    ],
    "pros": [
      "Hot-swappable sockets allow future switch upgrades",
      "PBT keycaps resist shine better than the ABS on similarly priced boards",
      "Very low price for hot-swap support",
      "11 RGB lighting modes included"
    ],
    "cons": [
      "Wired only, no wireless option",
      "Build materials are basic outside the keycaps",
      "Stock switches are unbranded, not a premium switch brand"
    ],
    "bestFor": "Budget buyers who want room to experiment with different switches later"
  },
  {
    "id": "redragon-k668-hot-swap-108",
    "rank": 8,
    "badge": "Best Full-Size Hot-Swappable",
    "name": "Redragon K668 RGB Gaming Keyboard, 108 Keys, Hot-Swappable Red Switch",
    "price": "$36.99",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31qNb+bxSwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CDWP1D58?tag=theofficejournal-20",
    "description": "The K668 extends the Redragon hot-swap formula to a full 108-key layout with 4 extra hotkeys, built-in sound-absorbing foam to reduce hollow resonance, and red linear switches for a quiet, consistent keypress. Two included sets of mixed-color keycaps let you customize the look without buying a separate keycap set.\n\nLike its smaller sibling, hot-swap sockets mean the stock red switches can be replaced later, extending the board's usefulness as your switch preferences change over time.",
    "specs": [
      "108-key full layout with 4 extra hotkeys",
      "Red linear switches, hot-swappable",
      "Sound-absorbing foam",
      "2 included keycap sets, mixed colors",
      "Wired connection"
    ],
    "pros": [
      "Full-size layout with extra hotkeys for media/macro control",
      "Sound-absorbing foam reduces hollow keyboard resonance",
      "Hot-swap sockets allow future switch changes",
      "Two keycap sets included at no extra cost"
    ],
    "cons": [
      "Wired only",
      "Larger footprint than the TKL picks in this list",
      "Keycaps included are ABS, not the PBT found on the smaller Redragon pick"
    ],
    "bestFor": "Buyers who want a full-size hot-swappable board with extra hotkeys"
  }
];

export const readTime = "10 min";

export const relatedGuides = [
  {
    "href": "/guide/best-wireless-mechanical-keyboards",
    "title": "8 Best Wireless Mechanical Keyboards (2026)"
  },
  {
    "href": "/guide/best-ergonomic-keyboards-for-wrist-pain-carpal-tunnel",
    "title": "8 Best Ergonomic Keyboards for Wrist Pain and Carpal Tunnel (2026)"
  },
  {
    "href": "/guide/best-mechanical-keyboard-under-100",
    "title": "Best Mechanical Keyboards Under $100 (2026)"
  }
];

export const breadcrumbLabel = "Best Mechanical Keyboards";
