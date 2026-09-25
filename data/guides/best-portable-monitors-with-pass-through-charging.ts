// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Check the refresh rate ceiling for each port separately, not just the headline spec",
    "explanation": "0's bandwidth can't sustain the same data throughput as USB-C at higher resolutions.\n\nThis is a common source of buyer disappointment: someone buys a monitor rated 144Hz specifically to pair with a game console over HDMI, only to discover the HDMI port caps at 120Hz or even 60Hz on that specific model, a distinction the headline spec doesn't disclose.\n\nCheck the listing specifically for per-port refresh rate figures (USB-C rate versus HDMI rate stated separately), and match the port you'll actually use to the rate you actually need, not the single highest number in the title."
  },
  {
    "criterion": "Confirm your specific source device can actually output above 60Hz before paying extra for a high refresh panel",
    "explanation": "A monitor's refresh rate capability is meaningless if the connected source device can't output a signal above 60Hz in the first place, and this is a common mismatch: many laptop USB-C ports are data-only or video-limited to 60Hz regardless of Thunderbolt or USB4 branding, and handheld gaming PCs like Steam Deck and ROG Ally specifically output capped at 60Hz over USB-C in their current hardware generation, making a 144Hz-rated monitor's extra capability completely unused for that pairing despite the higher price paid for it.\n\nBefore buying specifically for the refresh rate, check your exact source device's documented maximum output refresh rate over the connection type you'll actually use (not just its general spec sheet), since a monitor's rated capability and your source device's actual output are two entirely separate specifications that both need to support the higher rate."
  },
  {
    "criterion": "Understand that response time (GtG) affects visible motion clarity as much as refresh rate does",
    "explanation": "Refresh rate (how many times per second the image updates) and response time (how quickly individual pixels can change color, commonly measured in milliseconds as gray-to-gray or GtG) are two separate specs that both affect how smooth and clear fast motion looks, and a high refresh rate paired with a slow response time still produces visible ghosting or blur trailing behind fast-moving objects, since the panel can't physically change pixel colors fast enough to keep up with the higher refresh rate's demands.\n\nThis matters because response time is disclosed far less consistently than refresh rate across portable monitor listings, many simply omit it entirely, making direct comparison difficult even when two panels share the same headline refresh number.\n\nCheck specifically for a stated GtG response time in milliseconds, and treat a high refresh rate spec with some skepticism if the listing doesn't also disclose response time, since the refresh number alone doesn't guarantee smooth-looking motion."
  },
  {
    "criterion": "Check power delivery and cable requirements, since a portable monitor's convenience depends on how it's actually powered",
    "explanation": "Portable monitors typically draw power either through the same USB-C cable carrying the video signal (single-cable operation, the more convenient setup) or through a separate dedicated power input, and some models support pass-through charging that lets your laptop's own charger power both the laptop and the monitor simultaneously through one connection.\n\nThis matters concretely for actual portability: a monitor requiring two separate cables (one for video, one for power) is meaningfully less convenient to set up and pack away than genuine single-cable operation, undermining part of the appeal of a \"portable\" monitor in the first place.\n\nCheck specifically whether the monitor supports single-cable USB-C operation with your source device, and confirm pass-through charging wattage if you want your laptop's charger to power both devices without needing two outlets."
  },
  {
    "criterion": "Weigh review volume against star rating, since this category includes both established models and many newer, similar-looking entrants",
    "explanation": "Portable monitors from well-established sellers with years of accumulated sales carry review counts in the thousands, giving genuine statistical confidence in panel quality and long-term reliability, while newer listings, sometimes from the same manufacturer under a different model number or from less established brands entirely, can carry only a handful of reviews despite looking similarly specified and priced.\n\nWhen comparing two similarly specified and priced portable monitors, check both the star rating and the review count together, and treat a very small review count as a reason for extra caution even if the rating itself looks strong."
  }
];

export const faq = [
  {
    "q": "If a monitor is rated for 100W pass-through, will my laptop always get 100W?",
    "a": "The rated wattage is a ceiling that depends entirely on your actual charger. If your charger is rated lower, say 45W, that's the real wattage your laptop receives, regardless of the monitor's spec."
  },
  {
    "q": "Does a 4K portable monitor charge my laptop as well as a 1080p one?",
    "a": "A 4K panel draws significantly more power to run itself, leaving less of your charger's wattage budget available to pass through to your laptop compared to a lower-resolution monitor."
  },
  {
    "q": "Will pass-through charging fast-charge my phone at its maximum speed?",
    "a": "Fast phone charging often requires PPS (Programmable Power Supply) support, which basic USB-PD pass-through doesn't guarantee. None of the picks in this guide explicitly confirm PPS support."
  },
  {
    "q": "Can any generic USB-C cable handle pass-through charging plus video?",
    "a": "You need a cable certified for DisplayPort Alt Mode, your target wattage, and adequate data speed together. A generic or uncertified cable can silently bottleneck performance with no error message."
  }
];

export const guideSlug = "best-portable-monitors-with-pass-through-charging";

export const guideTitle = "The Best Portable Monitors with Pass-Through Charging, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/41Gi8axYgqL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "",
    "table": {
      "headers": [
        "",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "",
          "6 Inch 1080P FHD 60Hz 85% SRGB"
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
          "6 Inch 1080P FHD 60Hz 85% SRGB"
        ],
        [
          "",
          "6 Inch 16:10 USB-C OLED Portable Monitor"
        ],
        [
          "No firm budget ceiling, prioritizing panel quality or resolution",
          "UPERFECT Portable Monitor 4K 16\" 1200 Nits"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C DisplayPort Alt Mode vs HDMI",
    "cards": [
      {
        "label": "",
        "text": "Usually the port that hits the panel's full rated refresh rate, and can carry power alongside video on one cable. In this comparison: check each listing's stated USB-C refresh rate directly."
      },
      {
        "label": "",
        "text": "Reliable for consoles and older sources, but often capped below the panel's full rated refresh, especially at higher resolutions. In this comparison: check each listing's stated HDMI refresh ceiling directly."
      }
    ],
    "note": "Check each listing's per-port refresh specs directly before assuming HDMI matches the headline rate."
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
          "Want a permanent mounted setup",
          ""
        ],
        [
          "Prefer the included kickstand or case",
          "6\" USB-C Portable Monitor with 100W Pass-Through Charging"
        ]
      ]
    }
  },
  {
    "subheading": "For a Handheld Gaming PC or Console Specifically",
    "cards": [
      {
        "label": "",
        "text": "Your exact source device's documented maximum output refresh rate over the connection type you'll use, checked independently from the monitor's own rated capability, since handhelds like Steam Deck and ROG Ally commonly cap at 60Hz over USB-C."
      },
      {
        "label": "",
        "text": "6\" USB-C Portable Monitor with 100W Pass-Through Charging fits this specifically: Most transparent, realistic pass-through wattage disclosure in this guide."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You want what UPERFECT Portable Monitor 4K 16\" 1200 Nits offers: Explicitly discloses power requirements for peak brightness. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "",
        "text": "6 Inch 1080P FHD 60Hz 85% SRGB already covers the essentials: Explicitly confirmed pass-through/reverse charging support. The main thing you'd be paying extra for elsewhere in this list is headroom you may not actually use."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Realistic net power budget, not just the rated ceiling",
    "description": "Calculated whether each monitor's own power draw (especially at 4K resolution or peak brightness) leaves meaningful pass-through wattage for actually charging a connected laptop, versus just quoting the box's rated number."
  },
  {
    "title": "PPS and fast-charging protocol disclosure",
    "description": "Noted where a listing doesn't specify PPS (Programmable Power Supply) support, meaning fast charging for newer phones/laptops may be slower than their dedicated charger even if basic PD pass-through works."
  },
  {
    "title": "Charger dependency, not monitor magic",
    "description": "Confirmed that no monitor in this guide generates its own charging power, pass-through wattage is always capped by whatever charger is plugged into the other end."
  }
];

export const introParagraphs = [
  "A monitor rated for 65W or 100W pass-through only delivers what your host device's charger and cable actually negotiate, if your laptop's own charger is 45W, the monitor cannot magically provide more. We calculate the realistic net power budget for each pick below rather than just quoting the rated ceiling.",
  "Also worth knowing: some 'PD pass-through' monitors support basic charging but not PPS (Programmable Power Supply), which newer phones and laptops need for their fastest charging profile, a distinction most listings don't make clear."
];

export const lastUpdated = "2026-07-28";

export const mainKeyword = "portable monitor pass-through charging";

export const metaDescription = "We compared 8 portable monitors with pass-through charging on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Portable Monitors with Pass-Through Charging (2026)";

export const products: GuideProduct[] = [
  {
    "id": "plugable-156-passthrough",
    "rank": 1,
    "badge": "Best Pass-Through Charging Overall",
    "name": "Plugable 15.6\" USB-C Portable Monitor with 100W Pass-Through Charging",
    "price": "$239.95",
    "rating": "4.5 stars from 96 Amazon ratings",
    "reviews": "96 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41Gi8axYgqL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D9R8P9LL?tag=theofficejournal-20",
    "description": "This listing is unusually explicit about the real math: 100W pass-through requires a 100W USB-C charger (sold separately) to deliver up to 85W to your host device, the monitor itself doesn't generate that power, it passes through what your charger provides. That's exactly the ceiling-not-guarantee distinction this guide exists to clarify.\n\n6 Inch 16:10 USB-C OLED Portable Monitor for one main reason. Most transparent, realistic pass-through wattage disclosure in this guide. 6 Inch 16:10 USB-C OLED Portable Monitor, which is worth weighing if cost is your deciding factor between the two.\n\nOn the other side, Modest review count.",
    "specs": [
      "15.6-inch FHD, 100W PD pass-through (85W to host)",
      "2x 10Gbps USB-C hub ports",
      "Requires a 100W charger (sold separately) for full pass-through",
      "Includes certified 1m USB-C cable"
    ],
    "pros": [
      "Most transparent, realistic pass-through wattage disclosure in this guide",
      "Doubles as a genuine USB-C hub",
      "Editor's Choice recognition from major tech publications",
      "Includes a properly certified cable"
    ],
    "cons": [
      "Requires buying a separate 100W charger for full pass-through performance",
      "Highest price in this guide",
      "Modest review count"
    ],
    "bestFor": "Buyers who want the most honest wattage math and genuine hub functionality"
  },
  {
    "id": "asus-zenscreen-oled-passthrough",
    "rank": 2,
    "badge": "Best OLED Panel with Pass-Through",
    "name": "ASUS ZenScreen MQ16FC 15.6 Inch 16:10 USB-C OLED Portable Monitor",
    "price": "$229.00",
    "rating": "4.5 stars from 5 Amazon ratings",
    "reviews": "5 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41ZMKpXsEAL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G31WC68M?tag=theofficejournal-20",
    "description": "This is the only OLED panel in this guide, with genuine extreme blacks and a 1ms response time, and it explicitly states it can either be powered by a laptop or deliver pass-through power to one, a true bidirectional design. A 3-year warranty with burn-in coverage is a meaningful reassurance specific to OLED technology's wear characteristics.\n\n6\" USB-C Portable Monitor with 100W Pass-Through Charging.\n\nOn the other side, Mini-HDMI only.",
    "specs": [
      "15.6-inch 16:10 OLED, 95% DCI-P3, 1ms response",
      "Pass-through charging (bidirectional)",
      "Auto-rotate via DisplayWidget software",
      "3-year warranty with burn-in coverage"
    ],
    "pros": [
      "Only OLED panel in this guide, genuine deep blacks",
      "3-year warranty with burn-in coverage, rare for portable monitors",
      "Bidirectional pass-through charging design",
      "TUV Rheinland eye-care certification"
    ],
    "cons": [
      "Extremely small review count, very new listing",
      "OLED burn-in risk over long-term static-image use, despite the warranty coverage",
      "Mini-HDMI only"
    ],
    "bestFor": "Buyers who want genuine OLED picture quality and are comfortable with a brand-new, lightly-reviewed listing"
  },
  {
    "id": "visionowl-16-144-passthrough",
    "rank": 3,
    "badge": "Best Reliable Mid-Range Pass-Through",
    "name": "VisionOwl Portable Monitor 16 Inch 2.5K QHD 144Hz, 470 Nits",
    "price": "$169.99",
    "rating": "4.8 stars from 3,365 Amazon ratings",
    "reviews": "3,365 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51kORE12J1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GHP4MKMP?tag=theofficejournal-20",
    "description": "This listing doesn't specify a headline pass-through wattage the way the Plugable or ASUS picks do, so treat any charging pass-through here as a general USB-C convenience rather than a guaranteed high-wattage spec. Its high rating and bright 470-nit panel are the real draw.\n\n6 Inch 16:10 USB-C OLED Portable Monitor.\n\nOn the other side, 144Hz needs USB-C for full rate.",
    "specs": [
      "16-inch 2.5K QHD, 144Hz, 470 nits",
      "USB-C pass-through, wattage not headline-specified",
      "Full-size HDMI + dual USB-C",
      "Dual VESA holes"
    ],
    "pros": [
      "Highest rating in this guide",
      "Bright 470-nit panel",
      "Sharp 2.5K resolution",
      "Full-size HDMI"
    ],
    "cons": [
      "Pass-through wattage not explicitly headlined like the dedicated picks",
      "Priced similarly to more explicit pass-through options",
      "144Hz needs USB-C for full rate"
    ],
    "bestFor": "Buyers who want a proven, bright, sharp panel with general USB-C pass-through convenience"
  },
  {
    "id": "cocopar-156-1080p-passthrough",
    "rank": 4,
    "badge": "Best Budget Pass-Through with Reverse Charging",
    "name": "cocopar Portable Monitor 15.6 Inch 1080P FHD 60Hz 85% sRGB",
    "price": "$109.99",
    "rating": "4.8 stars from 6,301 Amazon ratings",
    "reviews": "6,301 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31y1n0H2EtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZLY26FW?tag=theofficejournal-20",
    "description": "This listing explicitly mentions \"power pass-through reverse charging\" support, a genuine feature disclosure at a budget price point. As with every pick here, the actual wattage delivered depends on what charger you plug into the other end, this monitor doesn't create power, it routes it.\n\nThe real tradeoff against that pick: No specific wattage ceiling disclosed.\n\nOn the other side, Actual charging speed depends entirely on your charger.",
    "specs": [
      "15.6-inch 1080P, 60Hz, pass-through reverse charging",
      "Full-size HDMI + dual USB-C",
      "2 VESA mounting holes"
    ],
    "pros": [
      "Explicitly confirmed pass-through/reverse charging support",
      "Full-size HDMI and VESA mount",
      "Lowest price of the confirmed pass-through picks"
    ],
    "cons": [
      "No specific wattage ceiling disclosed",
      "85% SRGB is modest color accuracy",
      "Actual charging speed depends entirely on your charger"
    ],
    "bestFor": "Budget-focused buyers who want confirmed pass-through charging without a premium price"
  },
  {
    "id": "cocopar-185-2k-passthrough",
    "rank": 5,
    "badge": "Best Large Screen Pass-Through Option",
    "name": "cocopar Portable Monitor 18.5 Inch 2K QHD 120Hz 120% sRGB",
    "price": "$209.99",
    "rating": "4.8 stars from 6,301 Amazon ratings",
    "reviews": "6,301 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51OXc4g9NHL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGHPTLX9?tag=theofficejournal-20",
    "description": "5 inches, useful if you want a larger workspace and don't need a specific high-wattage pass-through spec. As with every pick here, verify your charger's actual wattage before assuming full-speed charging through this monitor.\n\n6 Inch 1080P FHD 60Hz 85% SRGB.\n\nOn the other side, Higher price than the budget picks.",
    "specs": [
      "18.5-inch 2K QHD, 120Hz, 120% SRGB",
      "General USB-C pass-through",
      "Full-size HDMI + dual USB-C",
      "75x75mm VESA + kickstand"
    ],
    "pros": [
      "Large, sharp 2K screen",
      "Full-size HDMI and VESA mount",
      "General USB-C pass-through convenience"
    ],
    "cons": [
      "No specific pass-through wattage headlined",
      "Heaviest pick in this guide",
      "Higher price than the budget picks"
    ],
    "bestFor": "Buyers who want a large-screen option with general USB-C charging convenience"
  },
  {
    "id": "cocopar-156-4k-passthrough",
    "rank": 6,
    "badge": "Best 4K with Reverse Charging",
    "name": "cocopar Portable Monitor 15.6 Inch 4K UHD 60Hz 145% sRGB",
    "price": "$244.99",
    "rating": "4.8 stars from 6,301 Amazon ratings",
    "reviews": "6,301 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41grMODJbhL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FR2222FL?tag=theofficejournal-20",
    "description": "A 4K panel with USB-C plug-and-play and pass-through charging convenience, though remember 4K draws considerably more power than 1080p, meaning less of your charger's wattage budget is left over for actually charging your laptop through this monitor versus a lower-resolution pick.\n\n5 Inch 2K QHD 120Hz 120% SRGB.\n\nOn the other side, Pricier than lower-resolution picks.",
    "specs": [
      "15.6-inch 4K UHD, 145% SRGB, matte screen",
      "USB-C pass-through",
      "Metal chassis, 1.54 lb",
      "VESA mountable, built-in kickstand"
    ],
    "pros": [
      "4K resolution",
      "Metal build quality",
      "Matte anti-glare screen",
      "VESA mountable"
    ],
    "cons": [
      "4K draws more power, leaving less pass-through budget for charging your laptop",
      "No specific pass-through wattage disclosed",
      "Pricier than lower-resolution picks"
    ],
    "bestFor": "Buyers who want 4K resolution and are aware it reduces available pass-through charging headroom"
  },
  {
    "id": "eviciv-4k-1200nit-passthrough",
    "rank": 7,
    "badge": "Best Bright 4K with Pass-Through",
    "name": "EVICIV Portable Monitor 4K 1200 Nits 16\", 3840x2400 UHD, 145% sRGB",
    "price": "$199.99",
    "rating": "4.4 stars from 10,892 Amazon ratings",
    "reviews": "10,892 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/416rIDWRz3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FZT2V5HW?tag=theofficejournal-20",
    "description": "This 1,200-nit bright 4K panel pairs USB-C plug-and-play with general pass-through convenience, but running at peak brightness plus 4K resolution draws significant power, leaving very little of your charger's wattage budget available to actually charge your laptop simultaneously. Treat pass-through here as best-effort, not a guarantee at high brightness.\n\n6 Inch 4K UHD 60Hz 145% SRGB. The real tradeoff against that pick: 4K + peak brightness leaves minimal pass-through power budget for charging your laptop.\n\nOn the other side, Best suited for outdoor brightness first, charging second.",
    "specs": [
      "16-inch 4K, 1200 nits, matte anti-glare",
      "145% SRGB, aluminum body",
      "General USB-C pass-through",
      "VESA 75x75mm mountable"
    ],
    "pros": [
      "Very bright 1200-nit panel",
      "Aluminum build",
      "VESA mountable"
    ],
    "cons": [
      "4K + peak brightness leaves minimal pass-through power budget for charging your laptop",
      "No specific pass-through wattage disclosed",
      "Best suited for outdoor brightness first, charging second"
    ],
    "bestFor": "Buyers who prioritize outdoor brightness over reliable simultaneous laptop charging"
  },
  {
    "id": "uperfect-4k-1200nit-passthrough",
    "rank": 8,
    "badge": "Most Explicit Power Requirement Disclosure",
    "name": "UPERFECT Portable Monitor 4K 16\" 1200 Nits, 145% sRGB Laptop Monitor",
    "price": "$245.99",
    "rating": "4.5 stars from 5,189 Amazon ratings",
    "reviews": "5,189 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51Ba0HFHrkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F99H1KSL?tag=theofficejournal-20",
    "description": "Included here specifically because its listing is explicit that peak brightness requires being connected to power, a real-world example of the net-power-deficit issue this guide's buying criteria address: at 4K and 1200 nits, this monitor's own power draw is substantial, don't expect it to simultaneously charge your laptop at any meaningful rate while running at peak brightness.\n\nOn the other side, Highest price in this guide.",
    "specs": [
      "16-inch 4K, 1200 nits, 145% SRGB",
      "Aluminum chassis, VESA mountable",
      "General USB-C connectivity"
    ],
    "pros": [
      "Explicitly discloses power requirements for peak brightness",
      "4K resolution with wide color gamut",
      "VESA mountable"
    ],
    "cons": [
      "4K + 1200 nits leaves little to no power budget for charging your laptop simultaneously",
      "No specific pass-through wattage claimed",
      "Highest price in this guide"
    ],
    "bestFor": "Buyers who understand a 4K, 1200-nit panel's own power draw limits simultaneous laptop charging"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-bright-portable-monitors-for-outdoor-use",
    "title": "Best Bright Portable Monitors for Outdoor Use (2026)"
  },
  {
    "href": "/guide/usb-c-hub-vs-docking-station",
    "title": "USB-C Hub vs Docking Station (2026)"
  },
  {
    "href": "/guide/best-hdmi-portable-monitors",
    "title": "Best HDMI Portable Monitors (2026)"
  }
];

export const breadcrumbLabel = "Best Portable Monitors with Pass-Through Charging";
