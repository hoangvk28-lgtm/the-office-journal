// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "The Phrase 'Mechanical Feeling' Is a Red Flag Indicating a Membrane Keyboard, Not a Genuine Mechanical Switch",
    "explanation": "Many budget keyboards under $30 use the phrase 'mechanical feeling' or 'mechanical feel' in their listing title specifically because they use membrane switches designed to mimic mechanical typing sensation without the actual individual spring-and-switch mechanism underneath each key that defines a true mechanical keyboard. This matters because membrane keyboards generally have a shorter lifespan, less consistent keystroke registration, and a mushier feel than genuine mechanical switches, even though they're priced similarly. Check the listing for a specific named switch type, like 'red switch', 'blue switch', or a brand name like Cherry, Gateron, or Kailh, rather than accepting vague 'mechanical feeling' language as confirmation of a genuine mechanical keyboard."
  },
  {
    "criterion": "Linear, Tactile, and Clicky Switch Types Produce Different Typing Experiences Worth Understanding Before Buying",
    "explanation": "A linear switch, like the red switches on the MageGee and Redragon picks, moves smoothly from top to bottom with no bump or click, favored for fast gaming inputs, while a clicky switch, like the blue switches on the RisoPhy and 60% Wired picks, has a distinct tactile bump and audible click that many typists prefer for accuracy feedback but which can be distracting in shared spaces. This matters because switching between these feels is a different experience, not just a marketing distinction, and picking the wrong type for your use case can make typing less comfortable or gaming less responsive. Consider whether you're mostly gaming, mostly typing, or sharing a workspace with others before choosing based on switch color alone."
  },
  {
    "criterion": "N-Key Rollover Support Determines Whether Complex Simultaneous Key Combinations Actually Register Correctly",
    "explanation": "N-key rollover, confirmed on all four picks in this comparison, means the keyboard can accurately detect and register every key pressed simultaneously, no matter how many, which matters directly for gaming scenarios requiring multiple simultaneous inputs like strafing while jumping and shooting, or for touch typists who naturally overlap keystrokes during fast typing. A keyboard without full N-key rollover might only register a limited number of simultaneous presses correctly, dropping inputs during complex combinations. Check the listing specifically for '100% anti-ghosting' or 'N-key rollover' language, since a board advertising only 'anti-ghosting' without the N-key rollover specification might have more limited simultaneous key support."
  },
  {
    "criterion": "A 60% or Compact Layout Requires Learning Function-Key Shortcuts for Keys That Aren't Physically Present",
    "explanation": "The 60% Wired pick's compact 61-key layout omits dedicated arrow keys, function row, and number pad entirely, requiring you to learn an Fn+Space shortcut just to access basic directional navigation, a real adjustment period for anyone used to a full-size or even TKL layout. This matters if you frequently use arrow keys for navigation or editing tasks, where the extra step of holding a function key combination adds friction to routine actions. Consider your actual daily typing and navigation habits honestly before choosing the smallest layout purely for its desk-space savings, since the adjustment period can be frustrating for some workflows."
  },
  {
    "criterion": "Warranty Length at This Price Point Varies More Than Buyers Expect and Signals Manufacturer Confidence",
    "explanation": "The Redragon pick's stated 24-month warranty is double the more typical 1-year coverage found on many budget mechanical keyboards, a detail that can matter if a switch or key fails after the standard return window closes but before the keyboard has seen significant use. This matters more for a first mechanical keyboard purchase where you're still learning what to expect from the category and want a safety net if something goes wrong early on. Check the specific warranty length stated in the listing rather than assuming all budget keyboards carry the same coverage period, since this detail varies meaningfully even among similarly priced options."
  }
];

export const faq = [
  {
    "q": "How do I know if a cheap keyboard listing is using real mechanical switches or just marketing language?",
    "a": "Look for a specific named switch type like 'red switch', 'blue switch', or a recognized brand name in the listing, and be cautious of listings that only say 'mechanical feeling' or 'mechanical feel' without naming an actual switch type, since that phrasing typically indicates a membrane keyboard."
  },
  {
    "q": "What's the most common mistake buyers make when choosing between linear and clicky switches at this price?",
    "a": "Choosing a clicky blue switch for a shared office or dorm environment without considering the noise level, since the audible click on every keystroke can be disruptive to people nearby, making a quieter linear red switch the better choice for shared spaces."
  },
  {
    "q": "Is the Redragon pick worth it over the cheaper 60% Wired option?",
    "a": "If you want hot-swappable switch customization and a full-size layout, yes, but if you just want the smallest footprint with genuine mechanical switches at the lowest price, the 60% Wired pick covers that for about $7 less."
  },
  {
    "q": "Can I replace the switches on the MageGee or RisoPhy keyboards if they're not hot-swappable?",
    "a": "Not without soldering, since only the Redragon pick in this comparison explicitly supports tool-free hot-swapping, so if switch customization matters to you, that's the pick to choose from this tier."
  },
  {
    "q": "Do any of these budget mechanical keyboards work without installing software?",
    "a": "Yes, all four picks in this comparison are plug-and-play with no required drivers or software for basic function, though the Redragon pick's macro editing feature does require its included software to access that specific customization."
  },
  {
    "q": "How long do genuine mechanical switches typically last compared to membrane keys at this price point?",
    "a": "Genuine mechanical switches, like the ones confirmed on all four picks here, are generally rated for tens of millions of keystrokes, meaningfully longer than typical membrane keyboard lifespans, which is part of why confirming a real switch type matters even at a budget price."
  }
];

export const guideSlug = "best-mechanical-keyboards-under-30";

export const guideTitle = "The Best Mechanical Keyboards Under $30: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/41idr1+lvwL._SL500_.jpg";

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
          "Confirmed genuine switches with full N-key rollover",
          "MageGee 75% Mechanical Gaming Keyboard, Red Switch"
        ],
        [
          "",
          "Redragon Mechanical Gaming Keyboard, Hot-Swappable Red Switch"
        ],
        [
          "A full-size layout with genuine clicky switches",
          "RisoPhy Mechanical Gaming Keyboard, Blue Switch"
        ],
        [
          "The smallest footprint and lowest price",
          "60% Wired Mechanical Gaming Keyboard, Blue Switches"
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
        "text": "Lets you replace individual switches without soldering, useful if you want to try different switch feels later without buying a new board."
      },
      {
        "label": "Fixed switches (MageGee, RisoPhy, 60% Wired)",
        "text": "Locks in the switch type at purchase, simpler for buyers who already know they want linear or clicky feel and don't plan to experiment."
      }
    ],
    "note": "If you're new to mechanical keyboards and might want to try different switches later, the Redragon's hot-swap feature is worth having even at this price. If you already know your preferred switch feel, any of the fixed-switch picks work fine."
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
          "Maximum desk space, compact typing",
          ""
        ],
        [
          "Balanced compact layout with arrows",
          ""
        ],
        [
          "Full number pad and function row",
          "RisoPhy or Redragon (104 keys)"
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Mechanical Keyboard Buyer Specifically",
    "cards": [
      {
        "label": "",
        "text": "A listing that explicitly names a real switch type like 'red', 'blue', or 'brown' mechanical switches, rather than the ambiguous phrase 'mechanical feeling', which typically indicates a membrane keyboard."
      },
      {
        "label": "",
        "text": "All four picks explicitly confirm genuine named mechanical switches, unlike many similarly priced boards on the market that use misleading 'mechanical feeling' language."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want hot-swappable switch customization to experiment with different feels over time, where the Redragon pick delivers that at the top of this tier."
      },
      {
        "label": "",
        "text": "You just want the smallest possible footprint with genuine mechanical switches, where the 60% Wired pick covers that for about $7 less."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Confirmed each pick uses named genuine mechanical switches rather than vague 'mechanical feeling' marketing language."
  },
  {
    "title": "Layout Size and Key Count",
    "description": "Compared full-size, TKL, and 60% layouts against desk space tradeoffs."
  },
  {
    "title": "",
    "description": "Checked N-key rollover and anti-ghosting support across all four picks."
  },
  {
    "title": "",
    "description": "Checked which picks allow switch replacement without soldering versus fixed switches."
  },
  {
    "title": "",
    "description": "Compared metal frames, drainage holes, and warranty length across the lineup."
  }
];

export const introParagraphs = [
  "Under $30, the market is flooded with 'mechanical feel' keyboards that are actually membrane switches marketed misleadingly, so the real differentiator in this tier is confirming genuine mechanical switches with a named type before comparing features.",
  "We compared this lineup on verified switch type, layout size, and anti-ghosting capability, since a budget board with a real mechanical switch and full N-key rollover beats a similarly priced board with vague 'mechanical feeling' marketing language."
];

export const lastUpdated = "2026-09-14";

export const mainKeyword = "best mechanical keyboards under $30";

export const metaDescription = "A practical comparison of 4 mechanical keyboards under $30, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Mechanical Keyboards Under $30 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-mechanical-keyboards-under-30-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "MageGee 75% Mechanical Gaming Keyboard, Red Switch",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41idr1+lvwL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B097BDWXHM?tag=theofficejournal-20",
    "description": "This board's 87-key tenkeyless layout retains dedicated arrow keys and F1-F12 function keys while freeing up desk space, and it uses genuine linear red mechanical switches confirmed in the listing rather than the vague 'mechanical feeling' language common at this price. All 87 keys support N-key rollover, meaning every simultaneous keypress registers accurately even during fast typing or gaming.\n\nCompared to the Redragon pick below, this one skips hot-swappable switches but adds a sturdy metal panel and adjustable two-step kickstands for typing angle comfort. Its 16 backlight modes with adjustable brightness and speed via FN combinations give you real lighting customization without needing separate software.\n\nBest for buyers who want a confirmed genuine mechanical switch with full N-key rollover at the lowest price.",
    "specs": [
      "87 keys, TKL layout, red switches",
      "N-key rollover, full anti-ghosting",
      "Metal panel, adjustable kickstands"
    ],
    "pros": [
      "Genuine linear red mechanical switches confirmed in the listing",
      "Full N-key rollover across all 87 keys",
      "Metal panel construction adds sturdiness at this price"
    ],
    "cons": [
      "Switches are not hot-swappable, unlike the Redragon pick",
      "Wired only, no wireless connectivity option"
    ],
    "bestFor": "Buyers who want confirmed genuine mechanical switches at the lowest price"
  },
  {
    "id": "best-mechanical-keyboards-under-30-2",
    "rank": 2,
    "badge": "Best Hot-Swappable",
    "name": "Redragon Mechanical Gaming Keyboard, Hot-Swappable Red Switch",
    "price": "$29.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41khzfsV4mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CF3VGQFL?tag=theofficejournal-20",
    "description": "This board's hot-swappable linear red switches let you replace individual switches without soldering, and it ships with 4 spare switches and two red keycaps for testing or replacement, a genuine customization option none of the other picks in this comparison include at this price. Its macro editing support lets you remap keys and combine functions through included software.\n\nCompared to the MageGee pick above, this one matches the price while adding switch-level customization, though it uses a full-size layout rather than the space-saving TKL design. The 24-month warranty is notably longer than the 1-year coverage typical at this price point.\n\nBest for buyers who want hot-swappable switch customization at the lowest price in this tier.",
    "specs": [
      "Hot-swappable red switches, full-size layout",
      "Macro editing via software",
      "24-month warranty"
    ],
    "pros": [
      "Hot-swappable switches allow customization without soldering",
      "Includes 4 spare switches and extra keycaps",
      "24-month warranty exceeds the typical 1-year coverage"
    ],
    "cons": [
      "Full-size layout takes more desk space than TKL options",
      "RGB color itself can't be changed, only brightness and speed"
    ],
    "bestFor": "Buyers who want hot-swappable switch customization at the lowest price"
  },
  {
    "id": "best-mechanical-keyboards-under-30-3",
    "rank": 3,
    "badge": "Best Full-Size Value",
    "name": "RisoPhy Mechanical Gaming Keyboard, Blue Switch",
    "price": "$28.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rjOMIKrmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09TR4Y91J?tag=theofficejournal-20",
    "description": "This board's 104-key full-size layout with genuine clicky blue switches gives you a complete number pad and function row at the cheapest price point among full-size boards in this comparison. Its 4 hydrophobic drainage holes help prevent liquid spill damage, a specific safety feature the other picks don't call out.\n\nCompared to the Redragon pick above, this one is slightly cheaper while trading hot-swappable switches for a fixed switch design, positioning it as a straightforward full-size option without customization ambitions. The keycap puller included makes basic maintenance and cleaning simple.\n\nBest for buyers who want a full-size layout with genuine clicky switches at the lowest price.",
    "specs": [
      "104 keys, full-size, blue switches",
      "4 hydrophobic drainage holes",
      "100% anti-ghosting, N-key rollover"
    ],
    "pros": [
      "Cheapest full-size layout with genuine clicky blue switches",
      "Hydrophobic drainage holes help prevent spill damage",
      "100% anti-ghosting works across all keys simultaneously"
    ],
    "cons": [
      "No hot-swap support, switches are fixed",
      "No metal frame like the MageGee pick"
    ],
    "bestFor": "Buyers who want a full-size layout with genuine switches at the lowest price"
  },
  {
    "id": "best-mechanical-keyboards-under-30-4",
    "rank": 4,
    "badge": "Best Compact Pick",
    "name": "60% Wired Mechanical Gaming Keyboard, Blue Switches",
    "price": "$22.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/417BPbuDvaL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09P4Q7K9X?tag=theofficejournal-20",
    "description": "This board's ultra-compact 61-key, 60% layout frees up the most desk space of any pick in this comparison, using a detachable Type-C cable specifically for safe travel packing. Its genuine blue mechanical switches provide a tactile click, and a dedicated Fn+Space shortcut switches to directional arrow key mode since the compact layout omits dedicated arrows.\n\nCompared to the RisoPhy pick above, this one is the cheapest board in this entire tier while sacrificing the most keys, a real tradeoff for buyers who specifically want maximum desk space over full functionality. Full anti-ghosting still ensures all keys register correctly during simultaneous presses.\n\nBest for buyers who want the smallest footprint and lowest price, and can adapt to a 60% layout.",
    "specs": [
      "61 keys, 60% layout, blue switches",
      "Detachable Type-C cable",
      "Full anti-ghosting"
    ],
    "pros": [
      "Cheapest pick in this entire comparison",
      "Smallest footprint frees up the most desk space",
      "Detachable cable makes travel packing safer"
    ],
    "cons": [
      "No dedicated arrow keys, requires Fn shortcut to access them",
      "Fewest keys of any pick in this comparison"
    ],
    "bestFor": "Buyers who want the smallest footprint and lowest price"
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-mechanical-keyboards-under-50",
    "title": "Best Mechanical Keyboards Under $50"
  },
  {
    "href": "/guide/best-mechanical-keyboards-under-75",
    "title": "Best Mechanical Keyboards Under $75"
  },
  {
    "href": "/guide/best-office-chairs-under-100",
    "title": "Best Office Chairs Under $100"
  },
  {
    "href": "/guide/best-desk-hutches-under-50",
    "title": "Best Desk Hutches Under $50"
  }
];

export const breadcrumbLabel = "Best Mechanical Keyboards Under $30";
