// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Confirm whether your device needs passive PoE, active PoE, or neither",
    "explanation": "3af/at standard), which negotiates power delivery electronically and is used by most modern PoE security cameras and access points. 3af/at negotiation, even though both use the same RJ45 connector. 3at\" before assuming any PoE-labeled UPS output will work with it."
  },
  {
    "criterion": "Understand what LiFePO4 battery chemistry actually trades off",
    "explanation": "Most mini UPS units use standard lithium-ion battery cells, but a smaller number use LiFePO4 (lithium iron phosphate) instead, a different chemistry that generally tolerates more full charge-discharge cycles before capacity degrades and runs at a lower internal temperature during use. If you plan to cycle the battery frequently over several years (repeated outages in an area with unreliable power), the longer cycle life of LiFePO4 is worth the larger footprint; for occasional backup use, standard lithium-ion is a reasonable and more compact choice."
  },
  {
    "criterion": "Add up your actual connected device wattage against the unit's max rating",
    "explanation": "Every mini UPS lists a maximum total output wattage, and exceeding it, by connecting multiple devices whose combined power draw is higher than that rating, can cause the unit to shut down protectively or fail to deliver stable power to any connected device. Your router's and modem's individual wattage is usually printed on their own power adapters (for example, \"12V 1A\" works out to roughly 12 watts). Add up the wattage of everything you plan to connect simultaneously and compare it against the UPS's stated max output before assuming a single unit can back up multiple devices at once."
  },
  {
    "criterion": "Check whether status feedback is a real screen or just an indicator light",
    "explanation": "Some mini UPS units include a small LCD screen showing an actual battery percentage and which outputs are currently active, while most rely on a simpler LED light that only signals a rough state (fully charged, low, or running on battery) through color or blink pattern. An LCD screen gives you more precise, actionable information, useful if you want to know exactly how much runtime is left during an extended outage rather than just a vague \"battery low\" signal. This is a genuine convenience difference worth a few extra dollars if you'll be checking status regularly, though it doesn't affect the unit's actual backup performance."
  },
  {
    "criterion": "Decide if you need single-device or multi-device simultaneous backup",
    "explanation": "Most mini UPS units in this category are built with a router or modem in mind as a single device, offering one or two output ports at each voltage, while a smaller number explicitly state dual-device support with duplicate ports at the same voltage so a router and a separate modem can both draw power at once. If your home network setup uses a single combined modem-router gateway device, single-device support covers you fully. If you have separate modem and router units that both need backup power, check specifically for a listing that states dual simultaneous device support and confirms enough total wattage headroom for both."
  }
];

export const faq = [
  {
    "q": "What's the difference between passive PoE and the PoE my security camera uses?",
    "a": "3af/at standard, which negotiates power electronically. 3af/at camera, so check your camera's specific PoE type before buying."
  },
  {
    "q": "Is LiFePO4 battery chemistry worth paying more for?",
    "a": "It depends on how often you expect to cycle the battery. LiFePO4 generally handles more full charge-discharge cycles over its lifetime and runs cooler than standard lithium-ion, at the cost of being physically bulkier for the same capacity. For occasional backup use during infrequent outages, standard lithium-ion is a reasonable, more compact choice."
  },
  {
    "q": "Can one of these units power both my modem and my router at the same time?",
    "a": "Only if it's specifically built for it. Most units in this comparison are designed around a single device, while one pick explicitly states dual simultaneous device support with duplicate output ports. Check the specific listing for that language before assuming any unit here supports two devices at once."
  },
  {
    "q": "How do I know if my router's power needs exceed a unit's max wattage rating?",
    "a": "Check your router's power adapter label for its wattage (often shown as voltage times amperage, like \"12V 1A\" for roughly 12 watts). Add up the wattage of every device you plan to connect at once and compare that total against the mini UPS's stated maximum output rating before buying."
  },
  {
    "q": "Do these units work as regular power banks when I'm not using them for backup?",
    "a": "Several picks in this comparison explicitly double as a standard USB power bank via their USB output ports when they're not actively backing up networking equipment. Check the specific listing's USB output rating to confirm how fast it'll charge a phone or tablet."
  },
  {
    "q": "Will my router restart when the mini UPS switches to battery power?",
    "a": "It depends on the specific unit's switchover speed. At least one pick in this comparison specifically states a zero-second switchover with no restart needed, while others don't make that claim explicitly. If avoiding any restart is important to you, prioritize a listing that states this directly."
  }
];

export const guideSlug = "best-mini-dc-ups-for-wifi-routers-under-90";

export const guideTitle = "The Best Mini DC UPS for WiFi Routers Under $90, Compared";

export const heroImage = "https://m.media-amazon.com/images/I/31yaJir8URL._SL500_.jpg";

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
          "Passive PoE output for a fiber ONT or access point",
          "ALFOINE 48Wh UPS Battery Backup"
        ],
        [
          "",
          "RGTTOTG Power Systems Mini UPS"
        ],
        [
          "Longer battery cycle life (LiFePO4)",
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
          "Yuuki Power LCD pick or TalentCell 27000mAh"
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "Passive PoE vs No PoE",
    "cards": [
      {
        "label": "Passive PoE output (ALFOINE, RGTTOTG, CHINTE, Yuuki)",
        "text": "Necessary specifically for fiber ONT/ONU boxes and passive-PoE networking gear that has no separate DC power input at all."
      },
      {
        "label": "No PoE output (TalentCell, dual-router pick)",
        "text": "Fine for standard routers and modems that use a normal DC barrel power connector, which covers most home networking setups."
      }
    ],
    "note": "Check your specific device: if it only has an Ethernet cable and no separate DC power port, you need a PoE-capable pick; otherwise any DC-output pick here works."
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
          "Longer cycle life, don't mind extra bulk",
          "CHINTE Mini UPS 16000mAh (LiFePO4)"
        ],
        [
          "Smaller footprint, standard lithium-ion is fine",
          "ALFOINE, RGTTOTG, Yuuki, TalentCell, or the dual-router pick"
        ]
      ]
    }
  },
  {
    "subheading": "For a Combined Modem-and-Router Setup Specifically",
    "cards": [
      {
        "label": "",
        "text": "A unit explicitly stating it can power two devices simultaneously, with at least two matching-voltage DC output ports, not just a single port at each voltage."
      },
      {
        "label": "",
        "text": "The 20000mAh dual-router-support pick is the only one here that explicitly states dual-device simultaneous backup in its listing."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "99) is the only one here built specifically for that, with 60W max output across dual 12V ports."
      },
      {
        "label": "",
        "text": "99) cover PoE and standard DC voltages without paying for TalentCell's larger, PoE-less capacity."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "3af/at PoE, or neither, since these standards aren't interchangeable and a mismatch means the connected device simply won't power on."
  },
  {
    "title": "",
    "description": "We noted which picks use standard lithium-ion versus LiFePO4 chemistry, since LiFePO4 generally offers a longer cycle life at the cost of a bulkier physical size for the same capacity."
  },
  {
    "title": "Max wattage and port count",
    "description": "We compared total rated wattage and the number of simultaneous output ports, since a unit's max wattage caps how many devices it can realistically power at once without exceeding its rating."
  },
  {
    "title": "",
    "description": "We distinguished units with a real LCD status screen from ones relying on a simple LED indicator light, since a screen gives more precise information about remaining capacity."
  },
  {
    "title": "",
    "description": "Every pick had to be in stock and priced at or under $90 on the date this guide was checked; units that only hit this tier during a temporary sale were excluded."
  }
];

export const introParagraphs = [
  "Past the $40 mark, mini UPS units start adding features basic backup batteries skip entirely: Passive PoE output for fiber ONTs and IP phones, LiFePO4 battery chemistry instead of standard lithium-ion, and higher total wattage ratings that support powering a router and a modem simultaneously.",
  "3af/at active PoE standard used by many PoE cameras and access points are not interchangeable, and at least one listing in this price range is explicit that it only supports the passive variety."
];

export const lastUpdated = "2026-09-09";

export const mainKeyword = "mini dc ups for wifi router under $90";

export const metaDescription = "We compared 6 mini DC UPS for WiFi routers under $90 on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Mini DC UPS for WiFi Routers Under $90 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "ALFOINE 48Wh UPS Battery Backup with Passive PoE",
    "price": "$48.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/21xJ+03Si1L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GJBWXM66?tag=theofficejournal-20",
    "description": "ALFOINE covers the widest output spread in this comparison at its price: standard 5V/9V/12V DC plus Passive PoE at both 24V and 48V, aimed specifically at ISP-style networking gear like fiber ONT/ONU boxes and passive PoE access points that a plain DC-only UPS can't power at all.\n\n3af/at active PoE standard used by many PoE security cameras, so confirming your specific device's PoE type before buying matters more here than on most picks in this comparison.\n\nBest for buyers with a fiber ONT/ONU or passive-PoE networking device specifically, who need output beyond standard DC voltages and are confident their equipment uses passive rather than active PoE.",
    "specs": [
      "Passive PoE 24V/48V plus DC 5V/9V/12V",
      "48Wh (9.6V/5000mAh) battery",
      "30W max total output"
    ],
    "pros": [
      "Only pick here with Passive PoE output built in",
      "Covers all three standard DC voltages too",
      "Compact design built for ISP-style equipment"
    ],
    "cons": [
      "Does not support active 802.3af/at PoE cameras",
      "30W max output is lower than some competitors"
    ],
    "bestFor": "Buyers with a fiber ONT/ONU or passive-PoE device who need voltage options beyond standard DC"
  },
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-2",
    "rank": 2,
    "badge": "Best for PoE Cameras",
    "name": "RGTTOTG Power Systems Mini UPS with PoE Output DC24V",
    "price": "$48.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31CNQauTYFL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CP693BWD?tag=theofficejournal-20",
    "description": "RGTTOTG names a specific, useful capability the ALFOINE pick above doesn't call out: zero-second switchover with no restart needed when mains power drops, meaning a connected router or camera keeps running through the transition rather than briefly rebooting.\n\nAgainst ALFOINE, this pick lists compatibility with a broader device spread including laptops and switches alongside the usual routers and cameras, though it doesn't distinguish passive versus active PoE compatibility as explicitly.\n\nBest for buyers who specifically want a documented zero-downtime power transition and a slightly broader stated device compatibility list, at the same price as the ALFOINE pick.",
    "specs": [
      "PoE 24V, DC 12V/9V, USB 5V outputs",
      "8000mAh (29.6Wh) lithium-ion battery",
      "Zero-second switchover, no restart needed"
    ],
    "pros": [
      "Zero-second power switchover, no device restart",
      "Four protection circuits (short circuit, overcurrent, etc.)",
      "Broad stated device compatibility list"
    ],
    "cons": [
      "Doesn't specify passive vs active PoE support",
      "Lower Wh capacity than the pricier picks here"
    ],
    "bestFor": "Buyers who want a documented zero-downtime power switchover for routers or cameras"
  },
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-3",
    "rank": 3,
    "badge": "Best Battery Chemistry",
    "name": "CHINTE Mini UPS 16000mAh with PoE 15V/24V",
    "price": "$53.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31pHhSDy6PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GWC8GVGZ?tag=theofficejournal-20",
    "description": "CHINTE is the only pick in this comparison built around a LiFePO4 (lithium iron phosphate) battery rather than standard lithium-ion, a chemistry that generally handles more charge cycles over its lifespan and runs cooler, at the cost of being physically larger for the same capacity.\n\nAgainst the ALFOINE and RGTTOTG picks, CHINTE adds a wider PoE voltage range (15V and 24V, versus ALFOINE's 24V/48V) plus a full six-way protection system and an LED capacity indicator most competitors here don't include.\n\nBest for buyers who specifically want the longer-cycle-life LiFePO4 chemistry over standard lithium-ion, and who need 15V PoE output specifically for compatible IP phones or networking gear.",
    "specs": [
      "LiFePO4 battery, 16000mAh, up to 36W",
      "PoE 15V/1A and 24V/0.6A outputs",
      "LED battery capacity indicator"
    ],
    "pros": [
      "LiFePO4 chemistry for longer cycle life",
      "Six-way safety protection system",
      "LED indicator shows exact remaining capacity"
    ],
    "cons": [
      "36W max output caps what it can power at once",
      "Bulkier than lithium-ion competitors at similar capacity"
    ],
    "bestFor": "Buyers who specifically want LiFePO4 battery chemistry and 15V PoE output support"
  },
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-4",
    "rank": 4,
    "badge": "Best with Status Display",
    "name": "Yuuki Power Mini UPS for WiFi Router with LCD Screen",
    "price": "$54.44",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31zzzW2SW3L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FCV2Q8TB?tag=theofficejournal-20",
    "description": "Yuuki is the only pick in this comparison with a clear LCD screen showing real-time status, rather than a simple LED indicator light, so you can see exact battery percentage and active output at a glance rather than guessing from a color-coded light.\n\nAgainst the CHINTE pick above, Yuuki adds USB-C PD fast charging support on top of standard USB-A, useful if you're also using it to top up a phone or tablet, though its PoE output tops out lower at 15V/24V with a lower max wattage per port.\n\nBest for buyers who want at-a-glance visibility into exact battery status via a real screen, and who'll appreciate USB-C PD charging as a secondary use case.",
    "specs": [
      "Clear LCD real-time status screen",
      "USB-An and USB-C PD fast charging",
      "10400mAh (32Wh), 24W max total output"
    ],
    "pros": [
      "LCD screen shows real-time status, not just an LED",
      "USB-C PD fast charging included",
      "Covers PoE 15V/24V alongside standard DC"
    ],
    "cons": [
      "24W max output is on the lower side for this tier",
      "Smaller battery capacity than the CHINTE and TalentCell picks"
    ],
    "bestFor": "Buyers who want a real LCD status screen instead of a simple indicator light"
  },
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-5",
    "rank": 5,
    "badge": "Best High-Capacity Pick",
    "name": "TalentCell Mini UPS 27000mAh with USB-C PD",
    "price": "$64.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31yaJir8URL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WLD32RP?tag=theofficejournal-20",
    "description": "2Wh) rating is more than double most competitors in this comparison, built from 12 individual lithium-ion cells rather than a single larger pack, which the listing states directly.\n\nAgainst the CHINTE and Yuuki picks, TalentCell trades PoE output entirely (it doesn't offer one) for that much larger capacity and a stated 18W USB-C PD output, plus explicit short-circuit, over-current, and over-charge protection.\n\nBest for buyers who specifically want the largest available capacity in this tier and don't need PoE support, particularly for longer outages or powering multiple standard DC devices at once.",
    "specs": [
      "27000mAh (97.2Wh), 12-cell design",
      "4x DC 12V, 1x DC 9V, 2x USB 5V outputs",
      "18W USB-C PD output"
    ],
    "pros": [
      "Largest battery capacity in this comparison",
      "Recognized brand name in portable power",
      "Explicit short-circuit and over-charge protection"
    ],
    "cons": [
      "No PoE output at all",
      "Cannot continuously power loads over 37W"
    ],
    "bestFor": "Buyers who want the largest capacity in this tier and don't need PoE support"
  },
  {
    "id": "best-mini-dc-ups-for-wifi-routers-under-90-6",
    "rank": 6,
    "badge": "Best for Dual Devices",
    "name": "Mini UPS Battery Backup, 20000mAh, Dual Router Support",
    "price": "$84.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/312p5-wC-LL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FF9QS7LK?tag=theofficejournal-20",
    "description": "This is the only pick in this comparison whose listing specifically states it can power a router and a modem at the same time, rather than just listing individual device compatibility, thanks to its 60W max output split across five separate ports (USB, 5V DC, 9V DC, and two 12V DC).\n\nAgainst the TalentCell pick above, the 20000mAh (74Wh) capacity is smaller, but the dual 12V DC port design is the real differentiator if your setup needs to back up two separate pieces of equipment from one unit rather than a single high-capacity device.\n\nBest for buyers whose home network setup includes both a modem and a separate router that both need backup power simultaneously, rather than a single combined gateway device.",
    "specs": [
      "60W max output, dual 12V DC ports",
      "20000mAh (74Wh) battery pack",
      "Doubles as a standard USB power bank"
    ],
    "pros": [
      "Dual 12V ports for powering router and modem together",
      "60W max output, higher than most picks here",
      "Doubles as a phone power bank when idle"
    ],
    "cons": [
      "Priciest pick in this comparison",
      "No PoE output option"
    ],
    "bestFor": "Buyers with a separate router and modem that both need backup power at once"
  }
];

export const readTime = "10 min";

export const relatedGuides = [
  {
    "href": "/guide/best-mini-dc-ups-for-wifi-routers-under-40",
    "title": "Best Mini DC UPS for WiFi Routers Under $40"
  },
  {
    "href": "/guide/best-usb-c-to-2-5gbe-ethernet-adapters-under-50",
    "title": "Best USB-C to 2.5GbE Ethernet Adapters Under $50"
  }
];

export const breadcrumbLabel = "Best Mini DC UPS for WiFi Routers Under $90";
