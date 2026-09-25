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
    "q": "Why are there only 2 picks in this budget mechanical keyboard guide?",
    "a": "We checked all 8 candidate listings under the mechanical keyboard cheap search against their real Amazon titles and descriptions. Several were membrane keyboards mislabeled as mechanical, and several others were ergonomic split or wave keyboards rather than standard mechanical boards. Only 2 were mechanical and verifiably priced under $100, so we kept the guide honest rather than padding it with mismatched products."
  },
  {
    "q": "How do I know if a cheap mechanical keyboard listing is actually membrane?",
    "a": "Check the switch specification in the listing itself, not just the title. Terms like membrane, rubber dome, or scissor switch in the description mean it isn't mechanical, even if mechanical appears in the product title. Both picks in this list explicitly specify true mechanical switches in their listings."
  },
  {
    "q": "Is a $56 mechanical keyboard actually worth it, or should I spend more?",
    "a": "The roughly $60 tier, like the Logitech G413 SE, typically gets solid full-size functionality and established brand software support, but skips hot-swap sockets and wireless. The $80 to $100 tier, like the AULA F75 Pro, adds hot-swap and multiple wireless modes. The extra $20 to $40 is worth it mainly if you want to experiment with switches or need wireless."
  },
  {
    "q": "What is stabilizer rattle and should I worry about it on a budget board?",
    "a": "Stabilizer rattle is a loose, clicky feel on the spacebar and enter key caused by unlubricated stabilizers, and it's a very common complaint at the budget tier. It's fixable with stabilizer lubing, a modding step, so factor that into your decision if you're not willing to open the board and lube the stabilizers yourself."
  },
  {
    "q": "Does hot-swap mean I can change switches on any budget mechanical keyboard?",
    "a": "Only if the listing explicitly says hot-swappable, like the AULA F75 Pro. A board without hot-swap sockets, like the Logitech G413 SE, has switches soldered directly to the board, meaning switch changes would require desoldering rather than a simple swap."
  },
  {
    "q": "Do budget wireless mechanical keyboards have a lower polling rate than premium ones?",
    "a": "Budget wireless keyboards commonly poll at 125Hz or 250Hz, while premium wireless boards can reach up to 1000Hz for 1ms response. This mostly matters for competitive gaming rather than typing, and polling rate isn't always disclosed in budget listings, so check the specs closely if gaming responsiveness matters to you."
  }
];

export const guideSlug = "best-mechanical-keyboards-under-60-100-budget";

export const guideTitle = "The Best Mechanical Keyboards Under $60/$100 Budget Worth Considering";

export const heroImage = "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg";

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
          "AULA F75 Pro Wireless Mechanical Keyboard"
        ],
        [
          "",
          "AULA F75 Pro Wireless Mechanical Keyboard"
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
          "AULA F75 Pro Wireless Mechanical Keyboard"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "4GHz dongle option beyond just Bluetooth. In this comparison: AULA F75 Pro Wireless Mechanical Keyboard."
      },
      {
        "label": "",
        "text": "Zero input latency and no battery to manage, the safer choice for competitive gaming. In this comparison: Logitech G413 SE Full."
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
        "text": "You want hot-swappable switches and premium PBT keycaps for years of daily use, where AULA F75 Pro Wireless Mechanical Keyboard's build quality gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just want to try the mechanical feel without a big investment, where Logitech G413 SE Full covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Mechanical, verified per listing",
    "description": "Cross-checked each product's real Amazon title and description to confirm true mechanical switches rather than a membrane board using the word mechanical loosely, a common mislabeling at this price tier."
  },
  {
    "title": "Switch and hot-swap socket quality",
    "description": "Noted whether switches ship pre-lubed and whether the board offers hot-swap sockets at all, since cheap sockets can develop loose contact after repeated swaps."
  },
  {
    "title": "Verified price under the $100 ceiling",
    "description": "Confirmed each listed price sits at time of research, and separately flagged which pick also clears the stricter its price line."
  },
  {
    "title": "",
    "description": "Weighed established-brand software support against smaller-brand proprietary tools, which are more likely to be abandoned within a couple of years."
  },
  {
    "title": "",
    "description": "Weighed connection flexibility, hot-swap capability, and layout against price across the two picks that survived the mechanical-vs-membrane filtering."
  }
];

export const introParagraphs = [
  "A lot of Amazon listings labeled mechanical keyboard cheap are actually membrane boards using the word loosely, and switch quality at the true budget tier is rarely discussed honestly, lesser-known or clone switches can feel inconsistent even when the spec sheet says mechanical. So this list only includes the picks that are mechanical per their real product listings and verifiably priced under $100, rather than padding the count with membrane keyboards mislabeled as mechanical.",
  "49 hot-swappable wireless 75% board, both mechanical and both under the $100 ceiling."
];

export const lastUpdated = "2026-07-23";

export const mainKeyword = "mechanical keyboard cheap";

export const metaDescription = "How 2 mechanical keyboards under $60/$100 budget compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Mechanical Keyboards Under $60/$100 Budget (2026)";

export const products: GuideProduct[] = [
  {
    "id": "aula-f75-pro-hotswap",
    "rank": 1,
    "badge": "Best Hot-Swap Wireless Under $100",
    "name": "AULA F75 Pro Wireless Mechanical Keyboard, 75% Hot Swappable",
    "price": "$66.49",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/41gvYA4qsmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D14N2QZF?tag=theofficejournal-20",
    "description": "The AULA F75 Pro sits in the this comparison's price range tier and adds features that are rare at this price, hot-swappable sockets, pre-lubed switches from the factory, and a rotary knob for volume control. Pre-lubing at this price point is a real differentiator since budget hot-swap sockets can otherwise develop loose contact or bent pins after a few switch swaps. 0, giving it more flexibility than most budget boards that only offer one connection type. The 75% layout keeps arrow keys and a few navigation keys while trimming the numpad, a smaller learning curve than a 60% board if you're used to a full-size layout. 3 connection modes in one board.",
    "specs": [
      "75% layout, hot-swappable sockets",
      "Pre-lubed Reaper switches",
      "2.4GHz / USB-C / Bluetooth 5.0",
      "RGB backlighting, rotary volume knob",
      "PBT side-printed keycaps"
    ],
    "pros": [
      "hot-swappable with pre-lubed switches out of the box",
      "3 connection modes in one board",
      "75% layout keeps arrow keys, easier transition than 60%",
      "Rotary knob adds physical volume control"
    ],
    "cons": [
      "Above the $60 tier, closer to the $100 ceiling",
      "Fewer keycap set options for the compact right-side cluster",
      "Wireless polling rate for gaming is not specified in the listing"
    ],
    "bestFor": "Buyers who want hot-swap flexibility and wireless in one budget board"
  },
  {
    "id": "logitech-g413-se-full-size",
    "rank": 2,
    "badge": "Best Wired Full-Size Under $60",
    "name": "Logitech G413 SE Full-Size Mechanical Gaming Keyboard",
    "price": "$56.79",
    "rating": "New listing",
    "reviews": "Not yet rated",
    "imageUrl": "https://m.media-amazon.com/images/I/31rtIUUw7bL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08Z6X4NK3?tag=theofficejournal-20",
    "description": "The Logitech G413 SE is the cheaper of these 2 picks and the only one under the line, a solid full-size mechanical board from an established brand with a track record for firmware and driver support that smaller budget brands often can't match. That established support matters more than it sounds, community and proprietary software from lesser-known brands is frequently abandoned after a couple of years, while Logitech's software footprint has stayed maintained for years. It is wired only and does not offer hot-swap sockets, so the switches are fixed for the life of the board, a tradeoff worth knowing if you want to experiment with switch feel later. In exchange, you get a full numpad and dedicated arrow keys with zero learning curve if you're moving from any standard full-size keyboard.",
    "specs": [
      "Full-size layout with numpad",
      "Wired USB connection",
      "Fixed mechanical switches, no hot-swap",
      "Aluminum-alloy top case",
      "Logitech G HUB software support"
    ],
    "pros": [
      "Cheapest mechanical pick in this list",
      "Full-size layout, no learning curve for numpad users",
      "Backed by an established brand's longer-term software support",
      "Aluminum-alloy top case at this price point"
    ],
    "cons": [
      "No hot-swap sockets, switches are fixed",
      "Wired only, no wireless option",
      "Full-size footprint pushes the mouse further right"
    ],
    "bestFor": "Buyers who want the cheapest reliable full-size mechanical board with established software support"
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-mechanical-keyboard-layouts-explained",
    "title": "Mechanical Keyboard Layouts Explained + Picks (2026)"
  },
  {
    "href": "/guide/best-ergonomic-keyboards-amazon-best-sellers",
    "title": "Best Ergonomic Keyboards Amazon Best Sellers (2026)"
  },
  {
    "href": "/guide/best-mechanical-keyboard-under-100",
    "title": "Best Mechanical Keyboards Under $100 (2026)"
  },
  {
    "href": "/guide/best-mechanical-keyboards",
    "title": "Best Mechanical Keyboards (2026)"
  }
];

export const breadcrumbLabel = "Best Mechanical Keyboards Under $60/$100 Budget";
