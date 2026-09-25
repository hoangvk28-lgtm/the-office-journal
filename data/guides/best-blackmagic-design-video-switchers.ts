// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Input Count vs Your Real Camera and Source Count",
    "explanation": "Input count on a video switcher needs to cover every source in your actual production, cameras plus any laptop, graphics overlay, or playback device you'll switch to, not just camera count alone. Buying a switcher sized exactly to your current camera count often leaves no room for a title overlay or a second presentation source later."
  },
  {
    "criterion": "",
    "explanation": "HDMI is simpler and cheaper for short cable runs typical of a home or small studio setup, while SDI supports much longer cable runs, up to 300 feet uncompressed, and locks more securely, which matters for a live event where a cable being bumped loose is a real risk. Match the connector type to your actual camera outputs and cable run distances before buying."
  },
  {
    "criterion": "NDI Adds Network Bandwidth to Plan For",
    "explanation": "NDI routing over your network is a real convenience for scaling a production without running new cables, but each full-quality NDI stream can consume well over 100 Mbps of bandwidth, which adds up fast with multiple sources on a typical home or small-office network. Budget for a dedicated network switch if NDI is central to your plan, not just your existing Wi-Fi."
  },
  {
    "criterion": "ISO Recording for Post-Production Flexibility",
    "explanation": "ISO recording, capturing each individual camera input separately in addition to your final switched program output, matters most if you plan to re-edit footage afterward or if a camera lacks its own internal recording capability. Without ISO recording, you're stuck with only the live-switched result, no ability to fix a bad cut in post. Check specifically for this feature if post-production flexibility matters to your workflow."
  },
  {
    "criterion": "Latency and Real-Time Switching Feel",
    "explanation": "How a switcher actually feels to operate live comes down to switching latency, the real delay between your button press and the cut appearing on screen, which matters far more during a fast-paced live event than in a spec comparison. Hardware switchers tend to offer more consistent low latency than software-based alternatives, so check independent hands-on reviews rather than a bare spec claim."
  }
];

export const faq = [
  {
    "q": "How many inputs do I actually need on a video switcher?",
    "a": "Count every source you'll switch between, cameras plus any laptop, graphics overlay, or playback device, not just your camera count; a 4-input switcher fills up fast once a single overlay source is added to two cameras."
  },
  {
    "q": "Should I choose HDMI or SDI for my setup?",
    "a": "HDMI works well for short cable runs typical of a home or small studio, while SDI supports much longer runs and locks more securely, which matters more for live events where cables get bumped."
  },
  {
    "q": "Does NDI require a special network setup?",
    "a": "Not necessarily for one or two sources, but each full-quality NDI stream can consume 100+ Mbps of bandwidth, so a dedicated network switch is worth budgeting for if NDI is central to a larger production."
  },
  {
    "q": "What is ISO recording and do I need it?",
    "a": "ISO recording captures each individual camera input separately alongside your switched program output, which matters if you plan to re-edit footage afterward; without it, you're locked into whatever was live-switched in the moment."
  },
  {
    "q": "Can I use a video switcher without a computer?",
    "a": "Yes, most hardware video switchers operate standalone and only need a computer if you're streaming directly to a platform or doing NDI routing over a network; recording to an SD card or SSD typically works without one."
  },
  {
    "q": "What's the difference between a video switcher and a capture card?",
    "a": "A capture card brings one video source into a computer for software-based switching or recording, while a hardware video switcher lets you cut between multiple live sources in real time using physical or on-screen controls, independent of software."
  }
];

export const guideSlug = "best-blackmagic-design-video-switchers";

export const guideTitle = "The Best Blackmagic Design Video Switchers for a Cleaner, More Useful Desk";

export const heroImage = "https://m.media-amazon.com/images/I/41bMCiM-aUL._SL500_.jpg";

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
          "Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’"
        ],
        [
          "4 sources including an overlay",
          "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher"
        ],
        [
          "",
          "Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’"
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
          "Lowest price in this lineup",
          "Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’"
        ],
        [
          "",
          "Blackmagic Design ATEM Mini Extreme HDMI Switcher"
        ],
        [
          "",
          "Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’)",
        "text": "Simpler and cheaper for short cable runs typical of a home or small studio setup."
      },
      {
        "label": "Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’)",
        "text": "Supports much longer cable runs and a more secure locking connector, better suited to live events or larger venues."
      }
    ],
    "note": "Match connector type to your actual cameras and cable run distances."
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
          "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher"
        ],
        [
          "",
          "Check specifically for NDI support and plan real network bandwidth"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "ISO recording support, which captures each individual camera separately so you can re-edit footage after the fact."
      },
      {
        "label": "",
        "text": "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher is worth checking against its specific ISO recording spec before assuming any switcher supports it."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need more inputs, SDI connectivity, or ISO recording for a growing production, where Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’ justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're running a simple 2-3 camera setup, where Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’ already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Input Count vs Your Real Camera and Source Count",
    "description": "Input count on a video switcher needs to cover every source in your actual production, cameras plus any laptop, graphics overlay, or playback device you'll switch to, not just camera count alone."
  },
  {
    "title": "",
    "description": "HDMI is simpler and cheaper for short cable runs typical of a home or small studio setup, while SDI supports much longer cable runs, up to 300 feet uncompressed, and locks more securely, which matters for a live event where a cable being bumped loose is a real risk."
  },
  {
    "title": "NDI Adds Network Bandwidth to Plan For",
    "description": "NDI routing over your network is a real convenience for scaling a production without running new cables, but each full-quality NDI stream can consume well over 100 Mbps of bandwidth, which adds up fast with multiple sources on a typical home or small-office network."
  },
  {
    "title": "ISO Recording for Post-Production Flexibility",
    "description": "ISO recording, capturing each individual camera input separately in addition to your final switched program output, matters most if you plan to re-edit footage afterward or if a camera lacks its own internal recording capability."
  },
  {
    "title": "Latency and Real-Time Switching Feel",
    "description": "How a switcher actually feels to operate live comes down to switching latency, the real delay between your button press and the cut appearing on screen, which matters far more during a fast-paced live event than in a spec comparison."
  }
];

export const introParagraphs = [
  "Best Blackmagic Design Video Switchers span basic to broadcast-grade rigs, which is exactly why connection type changes real performance.",
  "We compared this lineup on verified specs, not marketing claims, since this is where the decision gets made."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "blackmagic video switcher";

export const metaDescription = "A practical comparison of 8 blackmagic design video switchers, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Blackmagic Design Video Switchers for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-blackmagic-design-video-switchers-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher",
    "price": "$349.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bMCiM-aUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B086R79PBC?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher is the top pick in this comparison. Includes 4-camera multiview; cut, mix, dip, wipe, and dve transitions; luma, linear, chroma, and pattern upstream keys; downstream keyer; and a built-in 6-input, 2-channel audio mixer. Multicamera live streaming to the internet or broadcast applications.\n\n5mm stereo analog audio; 1 x rj45 ethernet.\n\nThis one is the right call if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Input count fills up faster than expected once cameras, overlays, and playback sources are all counted, so plan with real margin.",
    "specs": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2"
    ],
    "pros": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2",
      "1 x HDMI type a (10-bit 4:2:2"
    ],
    "cons": [
      "Input count fills up fast with cameras plus overlays",
      "NDI routing adds real network bandwidth demands"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-blackmagic-design-video-switchers-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’",
    "price": "$589.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41uAKwUwxVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08SMP5RPV?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM Mini Pro ISO HDMI Live Stream Switcher Bundle with 6’ is a strong alternative worth comparing directly against the top pick. Multicamera live streaming to the internet or broadcast applications. 5mm stereo analog audio; 1 x rj45 ethernet.\n\n1 gen 1 (webcam out, panel connection external drive recording).\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. NDI routing adds real network bandwidth and latency considerations, so plan your network setup before assuming NDI just works out of the box.",
    "specs": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2"
    ],
    "pros": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2",
      "1 x HDMI type a (10-bit 4:2:2"
    ],
    "cons": [
      "NDI routing adds real network bandwidth demands",
      "Input count fills up fast with cameras plus overlays"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-blackmagic-design-video-switchers-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Blackmagic Design ATEM Mini Extreme HDMI Switcher",
    "price": "$1,249.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41zrBsQKPJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08WWXFZ5W?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM Mini Extreme HDMI Switcher is a strong alternative worth comparing directly against the top pick., 2 channel embedded audio. Frame rate and format converters: on all 8 HDMI inputs.\n\nSet next to Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Input count fills up faster than expected once cameras, overlays, and playback sources are all counted, so plan with real margin.",
    "specs": [
      "Total video inputs",
      "Total outputs",
      "HDMI video inputs"
    ],
    "pros": [
      "Total video inputs",
      "Total outputs",
      "HDMI video inputs",
      "Video input re-sync"
    ],
    "cons": [
      "Input count fills up fast with cameras plus overlays",
      "NDI routing adds real network bandwidth demands"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-blackmagic-design-video-switchers-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher Bundle with 6’ HDMI",
    "price": "$353.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51QEK5fajjL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08NCLXMSB?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher Bundle with 6’ HDMI is a strong alternative worth comparing directly against the top pick. Camera multiview; includes cut, mix, dip, wipe, dve transitions; luma, linear, chroma, pattern upstream keys; downstream keyer; built-in 6-input 2-channel audio mixer. Multicamera live streaming to the internet or broadcast applications.\n\n5mm stereo analog audio; 1 x rj45 ethernet, which is the main thing that distinguishes this pick from Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. NDI routing adds real network bandwidth and latency considerations, so plan your network setup before assuming NDI just works out of the box.",
    "specs": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2"
    ],
    "pros": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2",
      "1 x HDMI type a (10-bit 4:2:2"
    ],
    "cons": [
      "NDI routing adds real network bandwidth demands",
      "Input count fills up fast with cameras plus overlays"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-blackmagic-design-video-switchers-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Blackmagic Design ATEM Mini Pro ISO HDMI Switcher",
    "price": "$585.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bWjRulzkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B08F16FVCR?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM Mini Pro ISO HDMI Switcher is a strong alternative worth comparing directly against the top pick. Multicamera live streaming to the internet or broadcast applications. 5mm stereo analog audio; 1 x rj45 ethernet.\n\n1 gen 1 (webcam out, panel connection external drive recording).\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Input count fills up faster than expected once cameras, overlays, and playback sources are all counted, so plan with real margin.",
    "specs": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2"
    ],
    "pros": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "4 x HDMI type a (10-bit 4:2:2",
      "1 x HDMI type a (10-bit 4:2:2"
    ],
    "cons": [
      "Input count fills up fast with cameras plus overlays",
      "NDI routing adds real network bandwidth demands"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-blackmagic-design-video-switchers-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "Blackmagic Design ATEM SDI Live Production Switcher (SWATEMMXEP)",
    "price": "$389.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41157E0RoFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B778GH27?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM SDI Live Production Switcher (SWATEMMXEP) is a strong alternative worth comparing directly against the top pick. Experience pristine broadcast visuals with 4 x 3g-SDI inputs, each supporting 10-bit HD, ensuring seamless switching and professional-grade clarity for your live productions. Benefit from robust ethernet control, enabling effortless software updates, direct panel connections, and network panel integration for uninterrupted, dependable performance.\n\n0 interface for instant webcam output, simplifying setup and ensuring compatibility with various platforms for hassle-free live streaming.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. NDI routing adds real network bandwidth and latency considerations, so plan your network setup before assuming NDI just works out of the box.",
    "specs": [
      "Experience pristine broadcast visuals with 4 x",
      "Benefit from robust ethernet control, enabling effortless",
      "Utilize the USB type-c 2.0 interface"
    ],
    "pros": [
      "Experience pristine broadcast visuals with 4 x",
      "Benefit from robust ethernet control, enabling effortless",
      "Utilize the USB type-c 2.0 interface",
      "Fine-tune your audio with a 6-input mixer"
    ],
    "cons": [
      "NDI routing adds real network bandwidth demands",
      "Input count fills up fast with cameras plus overlays"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-blackmagic-design-video-switchers-7",
    "rank": 7,
    "badge": "Best Premium Pick",
    "name": "Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’",
    "price": "$1,719.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/518LfETB9YL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BBXSS8GX?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM SDI Extreme ISO Live Stream Switcher Bundle with 8’ is the priciest pick in this lineup. 264 video streams in real time! Multicamera live streaming to the internet or broadcast applications.\n\n1 gen 1 for external drive recording, webcam out, software control and panel connection.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Input count fills up faster than expected once cameras, overlays, and playback sources are all counted, so plan with real margin.",
    "specs": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "8 x 3g-SDI, 10-bit HD switchable"
    ],
    "pros": [
      "Feature rich",
      "Multicamera live streaming to the internet",
      "8 x 3g-SDI, 10-bit HD switchable",
      "4 x 3g-SDI; 1 x 3.5mm TRS"
    ],
    "cons": [
      "Input count fills up fast with cameras plus overlays",
      "NDI routing adds real network bandwidth demands"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-blackmagic-design-video-switchers-8",
    "rank": 8,
    "badge": "Also Worth Considering",
    "name": "Blackmagic Design ATEM SDI Pro ISO Live Stream Switcher (SWATEMMXEPBPRISO)",
    "price": "$895.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41mwY2Lj+JL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B776W3XR?tag=theofficejournal-20",
    "description": "Blackmagic Design ATEM SDI Pro ISO Live Stream Switcher (SWATEMMXEPBPRISO) is a strong alternative worth comparing directly against the top pick. Experience pristine broadcasts with 4 x 3g-SDI inputs, each featuring frame rate and format converters for seamless integration of diverse HD sources, ensuring professional-grade visuals. Stream directly via ethernet or utilize a shared mobile internet connection through USB-C, supporting RTMP for uninterrupted live broadcasts, ensuring your content reaches your audience flawlessly.\n\nManage your production effortlessly with the built-in control panel or the included atem software control panel, compatible with mac and windows, offering intuitive command over every aspect, which is the main thing that distinguishes this pick from Blackmagic Design ATEM Mini Pro HDMI Live Stream Switcher.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. NDI routing adds real network bandwidth and latency considerations, so plan your network setup before assuming NDI just works out of the box.",
    "specs": [
      "Experience pristine broadcasts with 4 x 3g-SDI",
      "Stream directly via ethernet or utilize",
      "Manage your production effortlessly with the built-in"
    ],
    "pros": [
      "Experience pristine broadcasts with 4 x 3g-SDI",
      "Stream directly via ethernet or utilize",
      "Manage your production effortlessly with the built-in",
      "Achieve well suited sound with a 6-input audio"
    ],
    "cons": [
      "NDI routing adds real network bandwidth demands",
      "Input count fills up fast with cameras plus overlays"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-video-switchers",
    "title": "Best Video Switchers"
  },
  {
    "href": "/guide/best-video-switchers-for-live-streaming",
    "title": "Best Video Switchers for Live Streaming"
  },
  {
    "href": "/guide/best-streaming-mixers",
    "title": "Best Streaming Mixers"
  }
];

export const breadcrumbLabel = "Best Blackmagic Design Video Switchers";
