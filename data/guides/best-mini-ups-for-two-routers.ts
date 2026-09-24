export const guideSlug = "best-mini-ups-for-two-routers";
export const guideTitle = "6 Best Mini UPS for Two Routers in 2026";
export const metaTitle = "Best Mini UPS for Two Routers 2026";
export const metaDescription = "Two routers on one UPS needs real simultaneous outputs, not just a splitter cable. We compared units with genuine dual-output support.";
export const mainKeyword = "mini ups for two routers";
export const introParagraphs = [
  "Running two routers off a single mini UPS is possible, but only if the unit provides genuinely independent simultaneous outputs at sufficient combined wattage, a splitter cable on a single rail doesn't guarantee either router gets the current it needs, especially if both routers draw current near the rail's maximum rating.",
  "We prioritized units with either two separate 12V rails or documented headroom well above what a single router needs, since that's what actually determines whether two routers can share one UPS safely."
];
export const lastUpdated = "2026-08-13";
export const readTime = "8 min";
export const heroImage = "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-mini-ups-for-two-routers-1",
    rank: 1,
    badge: "Best Overall",
    name: "Mini UPS Battery Backup 20000mAh 74Wh",
    price: "$84.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FF9QS7LK?tag=theofficejournal-20",
    description: "A larger-capacity sibling to the 10,000mAh aluminum-housed model in this lineup, this one packs 20,000mAh (74Wh) into the same aluminum-alloy shell and same five-rail layout: 5V USB, 5V DC, 9V DC, and two separate 12V DC outputs, rated for a combined 60W.\n\nHaving two independent 12V DC rails (each sharing a 5A budget) is the practical differentiator here, it's built to run a router and a modem off the same unit simultaneously rather than forcing a choice between one 12V device and the 9V rail. Like its sibling, the battery isn't sold as a standalone spare.\n\nWorth calling out specifically: 74Wh is a genuine step up from the 37Wh entry model. The catch is same 60W combined ceiling as the smaller sibling despite more capacity.",
    specs: ["20,000mAh / 74Wh built-in","Dual 12V DC rails + 9V + 5V USB","60W max combined output"],
    pros: ["Two independent 12V DC rails for router + modem","74Wh is a genuine step up from the 37Wh entry model","Same aluminum-alloy build quality as the smaller sibling","Five-layer protection circuitry included"],
    cons: ["Same 60W combined ceiling as the smaller sibling despite more capacity","Battery isn't sold as a standalone replacement part","No PoE output"],
    bestFor: "two independent 12V rails, each with its own current budget",
  },
  {
    id: "best-mini-ups-for-two-routers-2",
    rank: 2,
    badge: "Best with AVR",
    name: "SKE DC20000 Plus Altair Mini DC UPS",
    price: "$73.69",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41CH0ulmnKL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CQR5GMN4?tag=theofficejournal-20",
    description: "20,000mAh with 5V, 9V, and 12V DC outputs plus USB and Type-C charging ports, and it's one of the few in this cluster that specifically calls out AVR (automatic voltage regulation) to keep output stable rather than just listing raw capacity.\n\nThe LED battery indicator shows remaining charge at a glance, useful during an extended outage when you're deciding whether to keep the router running or conserve the pack for a security camera instead. SKE markets this as a home-or-travel unit given its slim form factor, but doesn't publish a hard output-wattage ceiling the way TalentCell or CHINTE do.\n\n5V/9V/12V plus USB and Type-C charging in one unit. Set against that, no published maximum wattage ceiling. Both matter when comparing it to the other picks here.",
    specs: ["20,000mAh with AVR regulation","5V/9V/12V DC + USB + Type-C","LED battery indicator"],
    pros: ["Built-in AVR for stable output voltage","5V/9V/12V plus USB and Type-C charging in one unit","LED indicator makes remaining charge easy to check at a glance","Slim form factor fits tight spaces"],
    cons: ["No published maximum wattage ceiling","LED indicator only, no detailed status display","No PoE output for camera setups"],
    bestFor: "regulated output helps when two devices draw simultaneously",
  },
  {
    id: "best-mini-ups-for-two-routers-3",
    rank: 3,
    badge: "Highest Combined Headroom",
    name: "TalentCell Mini UPS 27000mAh 97.2Wh",
    price: "$64.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31yaJir8URL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07WLD32RP?tag=theofficejournal-20",
    description: "The largest battery in this roundup by a wide margin: a 12-cell 11.1V/8800mAh pack rated at 97.2Wh, wired to four DC 12V ports, one DC 9V port, and two USB ports (one with 18W PD). TalentCell caps continuous draw at 37W and is explicit that pushing past it will drain the pack fast rather than protect the load.\n\nThe DC ports use a 5.5x2.1mm barrel, which fits most routers but not all; TalentCell tells buyers up front to check their device's port size before ordering since a mismatched connector needs a separate cable. It ships with two DC 5.5x2.1mm male-to-male cables and a 12.6V/2A charger, no USB-C PD cable included despite the USB-C port.\n\nThe standout detail is that four separate 12V ports for multi-device setups. Balancing that out, 37W continuous limit is lower than its capacity might suggest.",
    specs: ["27,000mAh / 97.2Wh (12-cell)","4x DC 12V, 1x DC 9V, 2x USB","37W continuous ceiling"],
    pros: ["Highest capacity in this cluster at 97.2Wh","Four separate 12V ports for multi-device setups","18W USB-C PD port charges phones and small electronics too","Ships with two DC cables and a charger in the box"],
    cons: ["37W continuous limit is lower than its capacity might suggest","5.5x2.1mm barrel only, other connector sizes need a separate cable","No PoE output"],
    bestFor: "four 12V ports under a 37W ceiling",
  },
  {
    id: "best-mini-ups-for-two-routers-4",
    rank: 4,
    badge: "Best with Mixed Voltage",
    name: "CHINTE Mini UPS 16000mAh with Passive PoE",
    price: "$53.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31pHhSDy6PL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GWC8GVGZ?tag=theofficejournal-20",
    description: "Built around a 16,000mAh LiFePO4 cell (a longer-cycle-life chemistry than the lithium-ion packs most competitors use) with a 36W output ceiling across DC 12V-2A, 9V-2A, 5V-2A, USB-A, USB-C, and passive PoE at 15V-1A or 24V-0.6A. The PoE output can carry both power and data over a single Ethernet run for supported gear.\n\nCHINTE is explicit that total draw must stay under 36W (voltage times current), so a 12V device pulling near 2A leaves little headroom for a second load on another rail. It backs the unit with a 12-month warranty and lists a compact 6.22 x 3.2 x 2.7in footprint meant for a desk, shelf, or cabinet.\n\nPassive PoE (15V/24V) plus full DC rail lineup. That's a real strength, but weigh it against the flip side: 36W ceiling is tighter than the TalentCell or 74Wh sibling.",
    specs: ["16,000mAh LiFePO4 battery","Passive PoE 15V/24V + DC rails","36W max, 12-month warranty"],
    pros: ["LiFePO4 chemistry rated for longer cycle life than lithium-ion","Passive PoE (15V/24V) plus full DC rail lineup","12-month warranty with lifetime technical support","Compact 6.22 x 3.2 x 2.7in footprint"],
    cons: ["36W ceiling is tighter than the TalentCell or 74Wh sibling","Passive PoE only, incompatible with active 802.3af/at gear"],
    bestFor: "two routers on different voltages (9V + 12V)",
  },
  {
    id: "best-mini-ups-for-two-routers-5",
    rank: 5,
    badge: "Best for Router + PoE Router",
    name: "ALFOINE 48Wh UPS with Passive PoE 24V/48V",
    price: "$48.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/21xJ+03Si1L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GJBWXM66?tag=theofficejournal-20",
    description: "A 48Wh (9.6V/5000mAh) pack purpose-built around passive PoE at both 24V and 48V (1000Mbps) alongside the usual DC 12V/2A, 9V/1.5A, 5V/2A, and USB-A/USB-C rails, with a 30W combined ceiling. ALFOINE is explicit that this is passive PoE only, it does not support 802.3af/at active PoE, so confirm your ONT/ONU or CPE uses passive injection before buying.\n\nIt ships with a 12V/3A adapter, a DC5521 cable, and eight interchangeable DC connector tips, which covers most US router/ONU barrel sizes without a separate purchase. At 6.1 x 4.3 x 1.4in and 1.01lb, it's the most compact multi-rail unit in this cluster.\n\nShips with 8 DC connector tips covering most router/ONU barrels. On the other hand, 30W ceiling is the lowest among the PoE-capable units. Both are worth keeping in mind before deciding.",
    specs: ["48Wh (9.6V/5000mAh) battery","Passive PoE 24V & 48V (1000Mbps)","30W max, ships with 8 DC tips"],
    pros: ["Only unit here with both 24V and 48V passive PoE output","Ships with 8 DC connector tips covering most router/ONU barrels","Compact 6.1 x 4.3 x 1.4in and just 1.01lb","Overcharge, over-discharge, and short-circuit protection built in"],
    cons: ["30W ceiling is the lowest among the PoE-capable units","Passive PoE only, not compatible with active PoE cameras/switches"],
    bestFor: "one standard router plus one PoE-powered router",
  },
  {
    id: "best-mini-ups-for-two-routers-6",
    rank: 6,
    badge: "Budget Two-Router Pick",
    name: "VISLONE Mini UPS Battery Backup 13500mAh",
    price: "$31.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/317XD3klVpL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G2QWNVCK?tag=theofficejournal-20",
    description: "A straightforward 13,500mAh pack with 12V, 9V, and 5V DC output ports and a power-indicator LED for checking remaining charge without connecting to an app or display. VISLONE markets it across routers, cameras, switches, ONU, and modems without a stated wattage ceiling in the listing.\n\nThe compact, lightweight build is aimed as much at portable/travel charging as at fixed router backup, so buyers who need a documented maximum continuous output for load planning should look at CHINTE or TalentCell instead, which both publish explicit wattage caps.\n\nA genuine advantage here is that compact and portable enough for travel use. The tradeoff is that no stated wattage ceiling for load planning.",
    specs: ["13,500mAh battery","12V / 9V / 5V DC output ports","LED power indicator"],
    pros: ["Simple 12V/9V/5V layout covers most routers without extra research","Compact and portable enough for travel use","Power indicator LED shows remaining charge at a glance","13,500mAh is a solid mid-tier capacity"],
    cons: ["No stated wattage ceiling for load planning","LED indicator only, no detailed charge percentage","No PoE output"],
    bestFor: "a lower-cost option for two low-draw routers",
  }
];

export const howWeEvaluated = [
  {
    "title": "Output Voltage & Current Match",
    "description": "Checked each unit's published output rails against common router, modem, and ONU power requirements (5V, 9V, 12V) rather than assuming any DC barrel plug is interchangeable."
  },
  {
    "title": "Battery Energy (Wh, Not Just mAh)",
    "description": "Normalized battery capacity to watt-hours wherever the listing or official spec sheet provided pack voltage, since mAh alone is not comparable across products with different cell configurations."
  },
  {
    "title": "Combined Output Ceiling",
    "description": "Looked for an explicit maximum continuous wattage figure, since routers and secondary devices (modems, cameras) sharing one UPS need headroom under that ceiling, not just individually rated ports."
  },
  {
    "title": "Connector & Protection Documentation",
    "description": "Favored listings that specify exact connector size, polarity, and safety protections (short-circuit, overcharge, over-discharge, temperature) over listings that only market broad 'wide compatibility' claims."
  },
  {
    "title": "Real Feature Differentiators",
    "description": "Weighed genuine differentiators, PoE output, LCD status displays, dual charging inputs, LiFePO4 battery chemistry, over marketing language that repeats across nearly identical products."
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
    "subheading": "By Watt-Hour Capacity",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around 97.2Wh capacity",
          "TalentCell Mini UPS 27000mAh 97.2Wh"
        ],
        [
          "Around 74Wh capacity",
          "Mini UPS Battery Backup 20000mAh 74Wh"
        ],
        [
          "Around 48Wh capacity",
          "ALFOINE 48Wh UPS with Passive PoE 24V/48V"
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
          "Under $32",
          "VISLONE Mini UPS Battery Backup 13500mAh"
        ],
        [
          "Up to $85",
          "Mini UPS Battery Backup 20000mAh 74Wh"
        ]
      ]
    }
  },
  {
    "subheading": "PoE Output vs DC-Only Rails",
    "cards": [
      {
        "label": "PoE output",
        "text": "Can back up a router and a PoE camera off one unit over a single Ethernet run, worth checking passive vs active PoE compatibility. In this comparison: CHINTE Mini UPS 16000mAh with Passive PoE, ALFOINE 48Wh UPS with Passive PoE 24V/48V."
      },
      {
        "label": "DC rails only",
        "text": "Simpler and covers standard router power needs without PoE complexity. In this comparison: Mini UPS Battery Backup 20000mAh 74Wh, SKE DC20000 Plus Altair Mini DC UPS, TalentCell Mini UPS 27000mAh 97.2Wh, VISLONE Mini UPS Battery Backup 13500mAh."
      }
    ],
    "note": "Default to DC-only unless you specifically need to back up a PoE device from the same unit."
  },
  {
    "subheading": "By Battery Chemistry",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Longer cycle life, LiFePO4 chemistry",
          "CHINTE Mini UPS 16000mAh with Passive PoE"
        ],
        [
          "Standard lithium-ion is fine",
          "Mini UPS Battery Backup 20000mAh 74Wh"
        ]
      ]
    }
  },
  {
    "subheading": "For Router Plus Modem Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Two independent output rails at different voltages, or a confirmed combined wattage ceiling that covers both devices' actual draw without a Y-splitter."
      },
      {
        "label": "In this comparison",
        "text": "Mini UPS Battery Backup 20000mAh 74Wh is worth checking against its listed dual-rail output before buying."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Outages regularly exceed an hour or you're backing up multiple devices, where Mini UPS Battery Backup 20000mAh 74Wh's higher capacity gives real headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "You just need a short bridge through brief flickers for a single router, where VISLONE Mini UPS Battery Backup 13500mAh covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "Match voltage before comparing battery capacity",
    "explanation": "Every router's power adapter is labeled with a specific output voltage, usually 5V, 9V, or 12V, and current draw in amps, and a mini UPS supplying the wrong voltage can damage the router even when the connector physically plugs in fine, since the barrel connector shape doesn't guarantee the electrical output matches.\n\nThis matters more than almost any other spec on the listing, since a capacity mismatch just means shorter runtime, but a voltage mismatch is a real damage risk to your router.\n\nCheck your router's power adapter label for its exact voltage and amperage before comparing any mini UPS options by capacity or price."
  },
  {
    "criterion": "Convert mAh to watt-hours to compare capacity fairly across products",
    "explanation": "Raw mAh (milliamp-hour) figures aren't directly comparable between products built around different cell voltages, a 20,000mAh unit built on a 3.7V cell and a 10,400mAh unit built on a higher-voltage pack can carry genuinely similar real energy despite the very different headline number.\n\nThis matters because ranking mini UPS options purely by the mAh figure printed largest on the box can be misleading, the number that actually predicts runtime is watt-hours (Wh), not mAh alone.\n\nLook for a stated Wh figure in the listing, or calculate it yourself by multiplying mAh by the pack's voltage and dividing by 1000, before ranking products by capacity claims."
  },
  {
    "criterion": "Confirm connector size and polarity match your specific router",
    "explanation": "Most mini UPS units for routers use a common 5.5mm x 2.1mm DC barrel connector, but not every product does, and center-pin polarity, whether the tip is positive or negative, varies between brands even at the identical voltage and connector size.\n\nThis matters directly because a mismatched polarity can damage your router the very first time you plug it in, even though the physical connector fit seemed fine.\n\nCheck both the connector diameter and the stated polarity against your router's original power adapter, not just the voltage number, before ordering."
  },
  {
    "criterion": "Check the combined wattage ceiling, not each port's individual maximum rating",
    "explanation": "A mini UPS with multiple output ports rarely guarantees that every port can deliver its individually listed maximum rating simultaneously, the unit has one shared total wattage ceiling that all active ports draw from together.\n\nThis matters directly if you're powering more than one device, a router and a modem or camera, off the same unit, since adding up each device's wattage and comparing that sum against the unit's total output ceiling is the only way to confirm it can actually run everything at once without undervolting.\n\nCheck the listing specifically for a stated total wattage ceiling, and add up your actual devices' combined draw before assuming any multi-port unit handles your full setup."
  },
  {
    "criterion": "Treat advertised runtime hours as a best case, not a guarantee",
    "explanation": "Manufacturer runtime claims like \"up to 5 hours\" are typically measured against a specific, often quite low, wattage load that may not match your actual router's real power draw, a router pulling 10-15W under normal operation will drain the same battery meaningfully faster than the manufacturer's lighter test load implies.\n\nThis matters because comparing units purely by advertised runtime hours can be misleading when the underlying test conditions aren't disclosed or standardized across brands.\n\nCheck your router's actual rated power draw in watts, and treat any published runtime figure as an optimistic upper bound rather than what you'll experience during a real outage."
  }
];

export const faq = [
  {
    "q": "Can I just use a DC splitter cable to power two routers from one port?",
    "a": "You can, but a splitter divides one rail's current between two devices rather than giving each router its own independent supply. If either router draws current close to the rail's rated maximum, splitting it can leave both routers underpowered. A unit with two genuinely separate rails is safer."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-mini-ups-for-routers-and-modems","title":"7 Best Mini UPS for Routers and Modems in 2026"},{"href":"/guide/best-mini-ups-for-routers-and-onus","title":"6 Best Mini UPS for Routers and ONUs in 2026"},{"href":"/guide/best-12v-mini-ups-for-routers","title":"6 Best 12V Mini UPS for Routers in 2026"}];
