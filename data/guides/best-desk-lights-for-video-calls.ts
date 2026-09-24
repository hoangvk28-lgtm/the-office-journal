// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-desk-lights-for-video-calls";

export const guideTitle = "The Best Desk Lights for Looking Clear on Video Calls";

export const breadcrumbLabel = "Best Desk Lights for Video Calls";

export const metaTitle = "Best Desk Lights for Video Calls and Webcams (2026)";

export const metaDescription = "We compared video-call lights and desk lamps on how they light a face, color temperature control, disclosed CRI and footprint, and explain when a regular lamp is enough.";

export const mainKeyword = "desk light for video calls";

export const introParagraphs = [
  "The usual video-call problem is not brightness but direction. A ceiling light or a desk lamp aimed at the keyboard lights the top of your head and the desk, leaving your face in shadow; a window behind you turns you into a silhouette. A light for calls needs to reach your face from the front, evenly and without glare.",
  "That splits this guide into two kinds of product: purpose-built video lights (a streaming light, ring lights and a panel) that face you, and desk lamps that light the work surface and add fill light on camera. The first group does the camera job better; the second is more useful when the call ends.",
  "Our comparison is based on published specifications, including color temperature range, disclosed CRI and mounting, plus price position, not hands-on testing. One caveat applies to every pick: none of the listings state whether dimming is flicker-free, which can matter on camera."
];

export const lastUpdated = "2026-07-30";

export const readTime = "9 min";

export const heroImage = "https://m.media-amazon.com/images/I/414WSIzKGyL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "logitech-litraglow-desklight",
    "rank": 1,
    "badge": "Best Streaming Light",
    "name": "Logitech for Creators Litra Glow Premium LED Streaming Light - Graphite",
    "price": "$54.31",
    "rating": "4.5 stars from 3,366 Amazon ratings",
    "reviews": "3,366 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/21ZCgx+xmkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B097QZGRCQ?tag=theofficejournal-20",
    "description": "The Logitech Litra Glow is the most straightforward choice for calls: it is a compact light designed by Logitech for streaming and video, meant to sit near the monitor and light your face with diffused output.\n\nThe practical advantage over a desk lamp is direction. It faces you, so it addresses the shadowed-face problem directly rather than adding spill light. It costs more than the generic ring lights here but less than the LitONES lamp at the time of writing.\n\nThe listing does not disclose a CRI figure, and the light surface is smaller than the 9-inch RALENO panel. If you want a disclosed CRI, the Zoom Lighting ring light lists one for less.",
    "specs": [
      "Type: streaming and video-call light",
      "Diffused face lighting (manufacturer description)",
      "CRI: not disclosed"
    ],
    "pros": [
      "Purpose-built to light a face",
      "Compact enough to sit by a monitor",
      "From an established peripherals brand"
    ],
    "cons": [
      "CRI not disclosed",
      "Smaller light surface than a panel",
      "Costs more than the ring lights here"
    ],
    "bestFor": "Anyone who wants a compact, dedicated call light that sits by the monitor.",
    "summary": "A purpose-built streaming light from Logitech, designed to light a face rather than a desk.",
    "skipIf": "Accurate color rendering is your priority; the Zoom Lighting ring light discloses a CRI of 97.8."
  },
  {
    "id": "litones-desklight",
    "rank": 2,
    "badge": "Best Desk Lamp for Calls",
    "name": "LitONES LED Desk Lamp for Home Office, Soft Edge-lit Design - Modern Style",
    "price": "$64.99",
    "rating": "4.8 stars from 895 Amazon ratings",
    "reviews": "895 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/414WSIzKGyL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZMPX2PW?tag=theofficejournal-20",
    "description": "The LitONES is the pick if you want one light that serves the desk all day and helps on camera, rather than a dedicated video light.\n\nIts soft edge-lit design should produce less harsh light than a basic single-bulb lamp, and the modern styling suits a visible home-office desk. It is still a desk lamp, though: the beam is aimed at the work surface, so it will light your face less directly than the Litra Glow or a ring light.\n\nIt is also the most expensive light here at the time of writing. If calls are the main job, a dedicated light does more for less.",
    "specs": [
      "Type: LED desk lamp",
      "Soft edge-lit design",
      "Beam aimed at the desk surface"
    ],
    "pros": [
      "Useful as a task lamp as well as fill light",
      "Soft edge-lit output",
      "Modern styling"
    ],
    "cons": [
      "Lights your face less directly than a video light",
      "Highest price in this guide",
      "CRI and color temperature range not disclosed"
    ],
    "bestFor": "People who want a single desk lamp that also improves their lighting on calls.",
    "summary": "An edge-lit desk lamp that works for everyday tasks and adds soft fill light on calls.",
    "skipIf": "Calls are the priority; the Litra Glow or a ring light face you directly for less."
  },
  {
    "id": "zoomlighting-desklight",
    "rank": 3,
    "badge": "Best for Color Accuracy",
    "name": "Zoom Lighting for Computer, Adjustable Desk Lighting for Video Calls, 30 Light Modes Video Conference Light, Desk Ring Light with Stand for Webcam, Meetings, Live Stream, Home Office. CRI 97.8",
    "price": "$36.99",
    "rating": "4.5 stars from 719 Amazon ratings",
    "reviews": "719 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41Phq+HhoVL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D2XMLRL3?tag=theofficejournal-20",
    "description": "The Zoom Lighting ring light is the only pick that discloses a CRI figure, listed at 97.8, which makes it the choice if natural-looking skin tones on camera matter to you.\n\nThe listing also describes 30 light modes, giving plenty of control over brightness and color temperature, and it comes with a desk stand. A high CRI describes color rendering only; it does not tell you whether the dimming is flicker-free, which the listing does not state.\n\nAs a stand-mounted ring light it is less useful than a desk lamp once the call ends.",
    "specs": [
      "CRI: 97.8 (listed)",
      "Light modes: 30",
      "Type: desk ring light with stand"
    ],
    "pros": [
      "Disclosed high CRI",
      "Fine control with 30 modes",
      "Stand included"
    ],
    "cons": [
      "Less useful as a general desk lamp",
      "Flicker performance not stated",
      "Costs a little more than the basic ring light"
    ],
    "bestFor": "Anyone who presents often and wants accurate color rendering on camera.",
    "summary": "A desk ring light with a disclosed CRI of 97.8 and 30 light modes.",
    "skipIf": "You want a light that also works as a desk lamp; the LitONES or Airlonv do both jobs."
  },
  {
    "id": "desk-ring-light-desklight",
    "rank": 4,
    "badge": "Best Budget Ring Light",
    "name": "Desk Ring Light with Stand for Computer, Desk Light for Video Recording",
    "price": "$32.86",
    "rating": "4.3 stars from 3,872 Amazon ratings",
    "reviews": "3,872 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41r5nA1roKL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B095741MZS?tag=theofficejournal-20",
    "description": "This desk ring light is the budget way to get a dedicated, face-forward light for calls, with adjustable color temperature and a stand included.\n\nIt costs a few dollars less than the Zoom Lighting model at the time of writing, but it does not disclose a CRI, a color temperature range or anything about flicker. The saving is small, so the Zoom Lighting light may be the better value if color accuracy matters to you.\n\nIt is still a sensible choice for someone who simply wants to stop looking shadowed on calls.",
    "specs": [
      "Type: desk ring light with stand",
      "Adjustable color temperature",
      "CRI: not disclosed"
    ],
    "pros": [
      "Low price for a dedicated call light",
      "Adjustable color temperature",
      "Stand included"
    ],
    "cons": [
      "CRI not disclosed",
      "Flicker performance not stated",
      "Little saving over the Zoom Lighting model"
    ],
    "bestFor": "Budget buyers who want a dedicated front light for calls.",
    "summary": "A low-cost desk ring light with adjustable color temperature and a stand.",
    "skipIf": "You care about color rendering; the Zoom Lighting ring light lists a CRI for slightly more."
  },
  {
    "id": "raleno9in-desklight",
    "rank": 5,
    "badge": "Best Panel Light",
    "name": "RALENO 9\" LED Video Light, 2500K-6500K Camera Light with Desk Stand",
    "price": "$39.99",
    "rating": "4.5 stars from 2,975 Amazon ratings",
    "reviews": "2,975 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41WMggt9RXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B087CZ85GV?tag=theofficejournal-20",
    "description": "The RALENO is the pick for a larger, flatter light source: a 9-inch panel on a desk stand with a listed color temperature range of 2500K to 6500K.\n\nA larger surface generally spreads light more softly than a small source at the same distance, and the wide Kelvin range makes it easier to match warm lamps or cool daylight in the room.\n\nIt takes more desk space than a compact light, and the listing does not disclose a CRI figure.",
    "specs": [
      "Panel size: 9\"",
      "Color temperature: 2500K–6500K",
      "Desk stand included",
      "CRI: not disclosed"
    ],
    "pros": [
      "Larger light surface",
      "Wide listed color temperature range",
      "Stand included"
    ],
    "cons": [
      "Larger footprint",
      "CRI not disclosed"
    ],
    "bestFor": "People who want softer, broader front light and can spare the desk space.",
    "summary": "A 9-inch LED panel with a 2500K–6500K range and a desk stand.",
    "skipIf": "Your desk is small; the Litra Glow is more compact."
  },
  {
    "id": "airlonv-desklight",
    "rank": 6,
    "badge": "Best Low-Cost Clamp Lamp",
    "name": "Airlonv LED Desk Lamp with Clamp, 17\" Stepless Dimming Light, Black",
    "price": "$20.98",
    "rating": "4.6 stars from 8,121 Amazon ratings",
    "reviews": "8,121 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/415a2-2URFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4JTPPYY?tag=theofficejournal-20",
    "description": "The Airlonv is the lowest-cost option and the most useful as an everyday lamp: a 17-inch clamp-mounted lamp with stepless dimming that frees desk space.\n\nFor calls, it can add fill light if you aim it toward the wall or your face, but its beam is designed for a work surface, so it will not match a dedicated video light. The listing does not mention color temperature adjustment or a CRI figure.\n\nIt makes sense if you need a desk lamp anyway and want a small improvement on camera rather than a dedicated call light.",
    "specs": [
      "Mount: clamp",
      "Arm length: 17\"",
      "Stepless dimming",
      "Color temperature adjustment: not listed"
    ],
    "pros": [
      "Lowest price here",
      "Clamp mount saves desk space",
      "Useful as a task lamp"
    ],
    "cons": [
      "Not designed for face lighting",
      "No color temperature adjustment or CRI listed"
    ],
    "bestFor": "Anyone who needs a task lamp first and occasional fill light for calls second.",
    "summary": "A 17-inch clamp desk lamp with stepless dimming, for task light and some fill on calls.",
    "skipIf": "You want your face lit evenly on camera; a ring light or the Litra Glow is designed for that."
  }
];

export const howWeEvaluated = [
  {
    "title": "Light direction",
    "description": "We separated lights designed to face the user from lamps designed to light a desk."
  },
  {
    "title": "Color control and CRI",
    "description": "We recorded listed color temperature ranges and CRI figures, and noted where listings omit them."
  },
  {
    "title": "Flicker disclosure",
    "description": "We checked whether listings state flicker-free dimming. None do, so we flag it rather than rank on it."
  },
  {
    "title": "Footprint and price",
    "description": "We compared size, mounting and price position. Prices change often, so we treat them as relative position."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Video light or desk lamp",
    "explanation": "Video lights (the Litra Glow, the ring lights and the RALENO panel) face you. Desk lamps (the LitONES and Airlonv) light the work surface and only add indirect fill on camera. Decide which job matters more."
  },
  {
    "criterion": "Color temperature control",
    "explanation": "Being able to shift between warm and cool light helps you match other light in the room, so your face does not look orange or blue. The RALENO lists 2500K to 6500K; the other listings mention adjustment without a range, or none at all."
  },
  {
    "criterion": "Disclosed CRI",
    "explanation": "CRI describes how accurately a light renders color, including skin tones. Only the Zoom Lighting ring light discloses one (97.8). A missing figure does not mean a poor light, only that you cannot compare it on paper."
  },
  {
    "criterion": "Flicker",
    "explanation": "Some LED lights dim by switching rapidly on and off (PWM). This can be invisible to the eye but show up as banding on camera, especially at low brightness. None of the listings here state how they dim, so if you see banding, try a higher brightness setting."
  },
  {
    "criterion": "Size and mounting",
    "explanation": "A larger panel spreads light more softly but takes more space. Clamp mounts save desk surface; stands are easier to reposition."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider",
        "Why"
      ],
      "rows": [
        [
          "A compact dedicated call light",
          "Logitech Litra Glow",
          "Designed to light a face from beside the monitor"
        ],
        [
          "Accurate skin tones",
          "Zoom Lighting ring light",
          "Only pick with a disclosed CRI (97.8)"
        ],
        [
          "Softer, broader light",
          "RALENO 9\" panel",
          "Larger surface and 2500K–6500K range"
        ],
        [
          "Lowest-cost call light",
          "Desk ring light with stand",
          "Dedicated front light at a budget price"
        ],
        [
          "One lamp for work and calls",
          "LitONES",
          "Edge-lit desk lamp that adds fill light"
        ],
        [
          "A task lamp first",
          "Airlonv",
          "Clamp mount and stepless dimming"
        ]
      ]
    }
  },
  {
    "subheading": "By price at the time of writing",
    "intro": "Prices change frequently; these tiers reflect typical prices when this guide was updated.",
    "table": {
      "headers": [
        "Price tier",
        "Lights"
      ],
      "rows": [
        [
          "About $20",
          "Airlonv"
        ],
        [
          "About $33–$40",
          "Desk ring light, Zoom Lighting, RALENO"
        ],
        [
          "About $55–$65",
          "Logitech Litra Glow, LitONES"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What is PWM flicker and why does it matter for video calls?",
    "a": "PWM (pulse-width modulation) is a dimming method that switches LEDs on and off rapidly. The flicker may be invisible to the eye but can appear as banding or strobing on camera, especially at lower brightness. None of the listings in this guide state how they dim, so if you notice banding, raising the brightness or changing the webcam's frame rate may help."
  },
  {
    "q": "Can I use a regular desk lamp for video calls?",
    "a": "You can, especially if you bounce it off a wall in front of you. But a desk lamp is designed to light a work surface, so it will usually light your face less evenly than a light designed to face you."
  },
  {
    "q": "Do I need a light with a disclosed CRI rating?",
    "a": "Not necessarily. A disclosed high CRI, such as the 97.8 listed for the Zoom Lighting ring light, tells you the light should render skin tones accurately. If a listing omits CRI, you simply have less to go on."
  },
  {
    "q": "Is a dual-purpose desk lamp as good as a dedicated video light?",
    "a": "For calls, usually not. It can add ambient fill light, but it will not light your face as directly or evenly as a ring light, panel or streaming light."
  }
];

export const bottomLine = [
  "If calls are the reason you are buying, choose a light that faces you. The Logitech Litra Glow is the compact option, the Zoom Lighting ring light is the one to pick for its disclosed CRI, and the RALENO panel suits anyone who wants softer light and has the space. The basic desk ring light is fine on a tight budget but saves little over the Zoom Lighting model.",
  "If you need a desk lamp anyway, the LitONES and Airlonv both add some fill light on camera. The LitONES is the better-looking, softer option; the Airlonv is far cheaper and clamps out of the way. Neither replaces a dedicated video light for even face lighting."
];

export const relatedGuides = [
  {
    "href": "/guide/best-adjustable-temperature-video-lighting",
    "title": "Best Adjustable-Temperature Video Lighting (2026)"
  },
  {
    "href": "/guide/best-clip-on-video-lighting",
    "title": "Best Clip-On Video Lighting (2026)"
  },
  {
    "href": "/guide/best-battery-powered-video-lighting",
    "title": "Best Battery-Powered Video Lighting (2026)"
  }
];
