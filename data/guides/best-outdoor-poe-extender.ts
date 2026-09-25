// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "IP66 and IP67 Waterproof Ratings Sound Similar but Certify Different Levels of Water Protection",
    "explanation": "An IP66 rating, like the YuanLey pick's, certifies protection against powerful water jets from any direction, while an IP67 rating, like the LINOVISION and Cudy picks', adds certified protection against temporary submersion in up to 1 meter of water, a meaningfully higher standard that most buyers don't realize is a real, different certification level rather than a marketing variation. This matters significantly if your installation location could face standing water or flooding risk, and matters less for a wall-mounted unit under an eave that only faces rain and spray. Check the exact IP rating number on a listing rather than assuming any 'waterproof' or 'weatherproof' label means the same level of protection across different products."
  },
  {
    "criterion": "A Dedicated High-Wattage Output Port Is Necessary for Devices Like PTZ Cameras That Exceed Standard PoE Power",
    "explanation": "This matters significantly if any device in your outdoor installation is a higher-power PTZ camera or similar device, since connecting it to a standard 30W-only extender could result in the device failing to power on or operating in a reduced-power mode. Check your specific outdoor device's power requirements against an extender's per-port wattage rating, not just its total combined output figure, before assuming any port will adequately power any device."
  },
  {
    "criterion": "Cascade Distance Figures Represent a Multi-Unit Configuration, Not the Distance Achievable From a Single Extender",
    "explanation": "The YuanLey and Cudy picks both specifically state their maximum 1312ft distance is achieved through 3-level cascading, meaning three separate extender units chained together, not the distance a single unit alone provides. This matters if you're comparing extenders based on their headline maximum distance figure, since a single unit's actual individual extension range (330ft in this case) is meaningfully shorter than the multi-unit cascade total advertised as the product's maximum capability. Check whether a stated maximum distance requires purchasing and cascading multiple units, or whether it's achievable from a single extender alone, before budgeting for your actual installation."
  },
  {
    "criterion": "Explicit Surge Protection Adds Real Value in Storm-Exposed Locations but Isn't Universal Across Similarly Priced Extenders",
    "explanation": "The Cudy pick specifically discloses built-in surge protection, a real electrical safeguard against transient voltage spikes from nearby lightning or power fluctuations, a feature not explicitly stated on the lower-priced YuanLey or Tliffpaco picks in this comparison. This matters significantly if your installation is in a location exposed to storms or electrical surge risk, and matters less for a sheltered installation with stable power infrastructure nearby. Check whether a listing specifically names surge protection as a feature, rather than assuming any outdoor-rated extender includes this safeguard by default."
  },
  {
    "criterion": "A Longer Warranty and Named Technical Support Commitment Provide Real Recourse for an Outdoor Installation That's Harder to Access",
    "explanation": "The LINOVISION pick's specifically stated lifetime 24/7 US local and global technical support goes beyond a standard 1-year warranty, providing ongoing help for an outdoor installation that may be mounted somewhere harder to physically access or troubleshoot than an indoor device. This matters if your extender will be mounted in a hard-to-reach outdoor location where diagnosing an issue yourself is more difficult, and matters less for an easily accessible installation where you're comfortable troubleshooting hardware issues independently. Check whether a listing specifically names an ongoing support commitment beyond just a warranty period, if remote troubleshooting help matters for your specific installation's accessibility."
  }
];

export const faq = [
  {
    "q": "Is an IP66 rating good enough for a wall-mounted outdoor PoE extender?",
    "a": "For most wall-mounted installations under an eave or overhang facing rain and spray, an IP66 rating like the YuanLey pick's is generally adequate, though an IP67 rating adds real additional protection if your location could face standing water or flooding."
  },
  {
    "q": "What's the most common mistake buyers make when choosing an outdoor PoE extender?",
    "a": "Assuming a stated maximum cascade distance is achievable from a single extender unit, when several listings specifically require chaining 2 to 3 units together to reach their full advertised maximum distance figure."
  },
  {
    "q": "Is the Cudy extender worth the higher price over the YuanLey pick?",
    "a": "If you're installing in a storm-prone or adverse climate and want explicit surge protection alongside IP67 waterproofing, the Cudy's higher price is justified, but for a more moderate outdoor environment, the YuanLey's lower price and IP66 rating are likely sufficient."
  },
  {
    "q": "Can I power a PTZ security camera with a standard 30W PoE extender port?",
    "a": "3bt output is worth doing before connecting a PTZ camera."
  },
  {
    "q": "Do these outdoor PoE extenders need their own power supply?",
    "a": "No, all four picks in this comparison are unmanaged extenders that draw power directly from the upstream PoE source, requiring no separate local power supply or outlet at the extender's installation location."
  },
  {
    "q": "How do I know if I need cascade support for my outdoor installation?",
    "a": "If your device is farther than a single extender's stated individual range (typically around 330ft), you'll need cascade support to chain multiple units together, so checking your actual required distance against a single unit's base range before assuming you only need one extender is worth doing."
  }
];

export const guideSlug = "best-outdoor-poe-extender";

export const guideTitle = "4 Best Outdoor and Waterproof PoE Extenders in 2026";

export const heroImage = "https://m.media-amazon.com/images/I/31BfkGDfQ1L._SL500_.jpg";

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
          "To power three devices at the lowest price",
          "YuanLey Outdoor Gigabit PoE Extender 1 in 3 Out"
        ],
        [
          "A dedicated high-power port for a PTZ camera",
          "Tliffpaco Outdoor Gigabit PoE Extender, 5 Port"
        ],
        [
          "Long-term technical support and honest documentation",
          "LINOVISION Gigabit Outdoor PoE Extender"
        ],
        [
          "Explicit surge protection in an adverse climate",
          "Cudy Outdoor Gigabit PoE+ Extender (POE15)"
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
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "IP66 vs IP67 Waterproof Rating",
    "cards": [
      {
        "label": "",
        "text": "Protects against powerful water jets from any direction but is not certified for temporary submersion, adequate for most wall-mounted outdoor installations under an eave or overhang."
      },
      {
        "label": "",
        "text": "Adds certified protection against temporary submersion in up to 1 meter of water for a limited time, a meaningfully higher standard for installations in flood-prone or heavy-rain-exposed locations."
      }
    ],
    "note": "If your extender will be mounted under cover and only exposed to rain and spray, the YuanLey's IP66 rating is sufficient. If it could face standing water or heavy flooding risk, the IP67-rated LINOVISION or Cudy picks offer real additional protection."
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
          "Standard PoE devices at 30W or less",
          "YuanLey Outdoor Gigabit PoE Extender"
        ],
        [
          "A PTZ camera or device needing up to 60W",
          "Tliffpaco Outdoor Gigabit PoE Extender, 5 Port"
        ],
        [
          "Standard PoE devices with surge protection",
          "Cudy Outdoor Gigabit PoE+ Extender"
        ]
      ]
    }
  },
  {
    "subheading": "For a Coastal or Storm-Exposed Installation Specifically",
    "cards": [
      {
        "label": "",
        "text": "An IP67 rating combined with explicit surge protection, since coastal and storm-prone locations face both heavy water exposure and elevated electrical surge risk from frequent storms."
      },
      {
        "label": "",
        "text": "The Cudy pick specifically combines IP67 waterproofing with built-in surge protection, making it the strongest fit for adverse coastal or storm-exposed conditions."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "99 price is justified by those combined protections."
      },
      {
        "label": "",
        "text": "98, the lowest price in this comparison."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": ""
  },
  {
    "title": "Port Count and Power Output",
    "description": "Compared how many devices each extender can power and at what wattage per port."
  },
  {
    "title": "",
    "description": "Compared documented multi-unit cascade configurations and their total extended distance."
  },
  {
    "title": "",
    "description": "Compared warranty length and the specificity of ongoing technical support offered."
  },
  {
    "title": "",
    "description": "Compared whether each listing explicitly discloses surge protection for outdoor electrical exposure."
  }
];

export const introParagraphs = [
  "An outdoor PoE extender needs to survive rain, temperature swings, and in some installations, being wall-mounted in direct weather exposure for years, but the exact IP waterproof rating and port count that best fits your setup varies more than the generic 'outdoor rated' label on most listings suggests.",
  "We compared this lineup on exact IP rating, total port count, and cascade support, since one listing specifically supports up to 3-level cascading for a total of 1312ft of extended PoE and data transmission from a single starting point."
];

export const lastUpdated = "2026-09-15";

export const mainKeyword = "best outdoor poe extender";

export const metaDescription = "We compared outdoor PoE extenders by exact IP rating and port count, since IP66 and IP67 differ in real water resistance despite sounding similar.";

export const metaTitle = "Best Outdoor Waterproof PoE Extenders";

export const products: GuideProduct[] = [
  {
    "id": "best-outdoor-poe-extender-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "YuanLey Outdoor Gigabit PoE Extender 1 in 3 Out",
    "price": "$23.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31BfkGDfQ1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DQNMHM64?tag=theofficejournal-20",
    "description": "This extender's listing specifically states it provides PoE power to up to three separate devices from one input, with VLAN isolation on its three output ports to prevent data leakage between connected devices, a useful network security feature at this price point. Its IP66-rated unibody housing is specifically designed to withstand harsh outdoor environments.\n\nCompared to the Tliffpaco and LINOVISION picks below, this one's 3-level cascade support, reaching up to 1312ft total PoE and data transmission, gives it the longest documented total extension distance in this comparison at the lowest price.\n\nBest for buyers who want to power three separate outdoor devices from one extender with VLAN isolation at the lowest price.",
    "specs": [
      "1 in 3 out, IP66 waterproof, VLAN isolation",
      "IEEE 802.3af/at, up to 30W max output",
      "3-level cascade for up to 1312ft total distance"
    ],
    "pros": [
      "Lowest price in this comparison at $23.98",
      "VLAN isolation on output ports prevents data leakage between devices",
      "Powers three separate devices from one extender unit"
    ],
    "cons": [
      "IP66 rating offers less water resistance than the IP67 picks in this comparison",
      "Total power output capped below the Tliffpaco pick's higher wattage"
    ],
    "bestFor": "Buyers who want to power three separate outdoor devices from one extender at the lowest price"
  },
  {
    "id": "best-outdoor-poe-extender-2",
    "rank": 2,
    "badge": "Best for High-Power Devices",
    "name": "Tliffpaco Outdoor Gigabit PoE Extender, 5 Port",
    "price": "$27.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31e9EQsIf5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CLM62ZR3?tag=theofficejournal-20",
    "description": "3af/at ports found on most competing extenders. Its industrial-grade ABS polymer housing is specifically described as waterproof, dust-proof, and snow-proof for outdoor and indoor use.\n\nCompared to the YuanLey pick above, this one's dedicated 60W output port specifically targets higher-power devices like PTZ cameras or larger access points that a standard 30W port can't adequately power.\n\nBest for buyers who need to power at least one higher-wattage device like a PTZ camera alongside standard PoE devices.",
    "specs": [
      "1 in 4 out, one 60W port + three 30W ports",
      "IEEE 802.3af/at/bt, 90W max input",
      "3-level cascade, waterproof ABS polymer housing"
    ],
    "pros": [
      "Dedicated 60W output port supports higher-power devices like PTZ cameras",
      "IEEE 802.3bt support handles more demanding power needs than af/at alone",
      "One-year replacement warranty rather than a repair-only policy"
    ],
    "cons": [
      "Requires an active PoE upstream switch, doesn't support passive PoE",
      "Higher price than the YuanLey pick, though still low-cost overall"
    ],
    "bestFor": "Buyers who need to power at least one higher-wattage device like a PTZ camera"
  },
  {
    "id": "best-outdoor-poe-extender-3",
    "rank": 3,
    "badge": "Best Warranty and Support",
    "name": "LINOVISION Gigabit Outdoor PoE Extender",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21JNvbL-ifL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CJJ8852M?tag=theofficejournal-20",
    "description": "This extender's listing specifically states a 1-year warranty backed by lifetime 24/7 US local and global technical support, a level of ongoing support commitment not matched by the other picks in this comparison. Its IP67 waterproof rating and wide -10C to 50C operating range are built for harsh outdoor environments.\n\nCompared to the YuanLey and Tliffpaco picks above, this one specifically discloses that bandwidth lowers to 10Mbps over 850ft in its 2-level cascade configuration, an honest disclosure of the real speed-versus-distance tradeoff at its documented 1300ft maximum cascade distance.\n\nBest for buyers who value long-term technical support alongside honest distance-versus-bandwidth documentation.",
    "specs": [
      "IP67 waterproof, -10C to 50C operating range",
      "1-year warranty, lifetime 24/7 US and global support",
      "2-level cascade, up to 1300ft total distance"
    ],
    "pros": [
      "Lifetime 24/7 US local and global technical support included",
      "Higher IP67 waterproof rating than the YuanLey pick's IP66",
      "Honest bandwidth-versus-distance disclosure at maximum cascade range"
    ],
    "cons": [
      "Higher price than the YuanLey or Tliffpaco picks in this comparison",
      "Bandwidth drops to 10Mbps at longer cascade distances"
    ],
    "bestFor": "Buyers who value long-term technical support alongside honest documentation"
  },
  {
    "id": "best-outdoor-poe-extender-4",
    "rank": 4,
    "badge": "Best Surge Protection",
    "name": "Cudy Outdoor Gigabit PoE+ Extender (POE15)",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51SuzSXgIUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B085S1R5NX?tag=theofficejournal-20",
    "description": "This extender's listing specifically states built-in surge protection alongside its IP67 protection rating, an explicit electrical safeguard not commonly disclosed on the other picks in this comparison at this price point. Its waterproof connectors at both input and output ends, plus an operating temperature range of -25C to 55C, are specifically built to withstand adverse weather conditions.\n\nCompared to the YuanLey, Tliffpaco, and LINOVISION picks above, this one's daisy chain support connects up to 3 extenders for a total 1312ft extension, matching the YuanLey's maximum documented distance while adding explicit surge protection the cheaper picks don't disclose.\n\nBest for buyers who want explicit surge protection alongside waterproof connectors for an adverse outdoor environment.",
    "specs": [
      "IP67 waterproof, built-in surge protection",
      "Waterproof connectors, -25C to 55C operating range",
      "Daisy-chain up to 3 units for 1312ft total"
    ],
    "pros": [
      "Explicit surge protection not disclosed on the cheaper picks in this comparison",
      "Waterproof connectors at both input and output ends",
      "Wide -25C to 55C operating range suits adverse climates"
    ],
    "cons": [
      "Highest price in this comparison by a significant margin",
      "Listing explicitly states not to submerge or bury the unit"
    ],
    "bestFor": "Buyers who want explicit surge protection for an adverse outdoor environment"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-poe-extender",
    "title": "Best PoE Extenders"
  },
  {
    "href": "/guide/best-long-range-poe-extender",
    "title": "Best Long-Range PoE Extenders"
  },
  {
    "href": "/guide/best-poe-extender-for-ip-camera",
    "title": "Best PoE Extenders for IP Cameras and CCTV"
  },
  {
    "href": "/guide/best-2-port-poe-extender",
    "title": "Best 2-Port and 1-in-2-out PoE Extenders"
  }
];
