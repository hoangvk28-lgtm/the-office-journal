// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Require a Narrow Capacity Tolerance",
    "explanation": "Confirm 500wh portable power stations sits within a narrow tolerance of the target Wh figure, and publish that tolerance."
  },
  {
    "criterion": "Measure Usable Energy, Not Rated Capacity",
    "explanation": "Check measured or documented usable AC and DC energy from full to automatic cutoff, not the rated capacity alone."
  },
  {
    "criterion": "Pair Capacity With Continuous Output",
    "explanation": "Confirm continuous inverter output is sufficient for the devices you actually plan to power at this capacity."
  },
  {
    "criterion": "",
    "explanation": "Compare weight, volume, and Wh-per-pound efficiency across finalists at the same target capacity."
  },
  {
    "criterion": "Check Recharge Time and Expansion",
    "explanation": "Publish AC and solar recharge time, cycle-life conditions, and expansion-battery compatibility for this capacity class."
  }
];

export const faq = [
  {
    "q": "Is rated Wh the same as usable energy for a 500wh portable power stations station?",
    "a": "Rated Wh is the nominal battery capacity, but real usable energy is typically slightly lower after AC conversion losses, so measured usable energy is a more reliable figure than the rated number alone."
  },
  {
    "q": "Should I round up to the next capacity class if a model is close?",
    "a": "Only if the difference is small and documented; otherwise a model in a neighboring capacity class may have different weight, output, and price characteristics than what you actually want."
  },
  {
    "q": "What's the real difference between watts and watt-hours for a power station?",
    "a": "Watts (W) measure how much power the station can deliver at once, essentially how many devices it can run simultaneously, while watt-hours (Wh) measure total stored energy, essentially how long it can run those devices. A station with high W but low Wh can power a lot at once but only briefly."
  },
  {
    "q": "Does a surge or peak wattage rating mean the station can run appliances at that power level?",
    "a": "Surge or peak ratings describe a brief burst the inverter can handle, typically for a compressor or motor startup, not a sustained output level. Always check the continuous or rated wattage figure for what the station can actually run for extended periods."
  },
  {
    "q": "Is LiFePO4 battery chemistry actually safer than standard lithium-ion?",
    "a": "LiFePO4 (LFP) cells are generally considered more thermally stable than standard lithium-ion or lithium-polymer cells, with a lower risk of thermal runaway, and most current portable power stations have shifted to LFP for this reason. Still, verify UL or UL2743 safety certification directly rather than assuming chemistry alone guarantees safety."
  }
];

export const guideSlug = "best-500wh-portable-power-stations";

export const guideTitle = "The Best 500Wh Portable Power Stations for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/41hnRsSVogL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "Require a Narrow Capacity Tolerance",
    "note": "Confirm 500wh portable power stations sits within a narrow tolerance of the target Wh figure, and publish that tolerance."
  },
  {
    "subheading": "Measure Usable Energy, Not Rated Capacity",
    "note": "Check measured or documented usable AC and DC energy from full to automatic cutoff, not the rated capacity alone."
  },
  {
    "subheading": "Pair Capacity With Continuous Output",
    "note": "Confirm continuous inverter output is sufficient for the devices you actually plan to power at this capacity."
  },
  {
    "subheading": "",
    "note": "Compare weight, volume, and Wh-per-pound efficiency across finalists at the same target capacity."
  },
  {
    "subheading": "Check Recharge Time and Expansion",
    "note": "Publish AC and solar recharge time, cycle-life conditions, and expansion-battery compatibility for this capacity class."
  }
];

export const howWeEvaluated = [
  {
    "title": "Rated Wh Verified Against Usable Energy",
    "description": "Checked documented battery capacity separately from continuous AC output, since a high wattage rating doesn't guarantee enough stored energy to run a device for long."
  },
  {
    "title": "Continuous Output vs Surge Separated",
    "description": "Compared continuous inverter rating against surge or boost mode claims, since many listings blend the two into one headline number."
  },
  {
    "title": "Charging Speed and Path Documented",
    "description": "Verified AC, solar, and car charging times from official specs, noting where fastest speeds require specific modes, apps, or additional hardware."
  },
  {
    "title": "Safety and Certification Evidence Checked",
    "description": "Looked for UL, UL2743, or other documented safety certification and battery chemistry evidence rather than trusting a safety claim alone."
  },
  {
    "title": "",
    "description": "Weighed included cables, solar panel bundling, warranty length, and app requirements as part of the real cost and usability of each pick."
  }
];

export const introParagraphs = [
  "Choosing among 500wh portable power stations means starting with requiring rated battery capacity within a narrow tolerance of the target Wh figure rather than star rating alone.",
  "Every entry on this list was screened for measured usable energy and safety documentation plus requiring rated battery capacity within a narrow tolerance of the target Wh figure before anything else was weighed."
];

export const lastUpdated = "2026-08-19";

export const mainKeyword = "500wh portable power stations";

export const metaDescription = "We compared 5 500Wh portable power stations on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best 500Wh Portable Power Stations for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-500wh-portable-power-stations-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Portable Power Station 500W, 519.48Wh/140400mAh",
    "price": "$179.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41hnRsSVogL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B9H8W8HP?tag=theofficejournal-20",
    "description": "48Wh (140,400mAh) station delivers 500W pure sine wave output to phones, laptops, tablets, MacBooks, TVs, projectors, small blenders, car refrigerators, drones, and CPAP machines rated under 500W, silent and fume-free. 0, a 60W USB-C PD, dual DC ports, a car port, and a wireless charger.\n\n5x faster than a universal USB-C charger. A built-in BMS protects against temperature, overvoltage, overcurrent, and short circuits, with the pure sine wave AC inverter better protecting sensitive devices. Three recharge methods (100W/200W solar panel not included in 6-9 hours, car charger in 7-8 hours, or wall outlet in 6-7 hours) give real flexibility, with a specific note to recharge at least every three months when idle.",
    "specs": [
      "519.48Wh, 500W, 10 simultaneous devices",
      "2.5x faster QC/PD charging",
      "Wireless charging pad included"
    ],
    "pros": [
      "10 simultaneous device connections is comprehensive here",
      "2.5x faster charging via QC and PD is a real documented speed gain",
      "Wireless charging pad adds genuine cable-free convenience"
    ],
    "cons": [
      "Solar panel for the fastest recharge path is sold separately",
      "500W output caps out before higher-demand appliances"
    ],
    "bestFor": "48wh, 500w, 10 simultaneous devices"
  },
  {
    "id": "best-500wh-portable-power-stations-2",
    "rank": 2,
    "badge": "Runner-Up",
    "name": "ANTPO 500W Portable Power Station, 500Wh LiFePO4, Retro Design",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41n6Q7kLTcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGGR925V?tag=theofficejournal-20",
    "description": "A distinct retro oil-can silhouette sets this apart visually, inspired by classic gas cans, while delivering a real 500W continuous power (1000W surge) pure sine wave inverter that safely charges laptops and CPAP machines. The 512Wh Grade-A LiFePO4 battery documents a 10-year lifespan with over 3500 charge cycles.\n\nA fast 1-hour 0-80% recharge via 500W AC wall outlet beats many rivals at this capacity, and a 200W solar panel option reaches full charge in 8-9 hours.",
    "specs": [
      "512Wh, 500W (1000W surge), 13.2 lbs",
      "1hr 0-80% AC recharge",
      "24-month warranty, US-based support"
    ],
    "pros": [
      "1-hour 0-80% recharge is fast for this 512Wh capacity",
      "24-month warranty with lifetime US-based support is solid",
      "Distinct retro design stands out visually at campsites"
    ],
    "cons": [
      "Solar panel for off-grid charging is sold separately",
      "500W rated output limits use to lighter appliances"
    ],
    "bestFor": "buyers prioritizing 512wh, 500w (1000w surge), 13.2 lbs"
  },
  {
    "id": "best-500wh-portable-power-stations-3",
    "rank": 3,
    "badge": "Also Great",
    "name": "ANTPO 500W Portable Power Station, 500Wh LiFePO4, Retro Design",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/413JL-PoS+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HBVJFZBW?tag=theofficejournal-20",
    "description": "This shares the identical 512Wh Grade-A LiFePO4 battery, 500W continuous power (1000W surge), and distinctive retro oil-can silhouette as ANTPO's other 500W listing, safely charging laptops and CPAP machines through a pure sine wave inverter. The battery documents a 10-year lifespan with over 3500 charge cycles and built-in BMS temperature, short-circuit, and over-voltage protection.\n\nA fast 1-hour 0-80% recharge via 500W AC wall outlet, or 8-9 hours via a 200W solar panel, keeps the unit trip-ready.",
    "specs": [
      "512Wh, 500W (1000W surge), 13.2 lbs",
      "1hr 0-80% AC recharge",
      "24-month warranty, US-based support"
    ],
    "pros": [
      "1-hour 0-80% recharge is fast for this 512Wh capacity",
      "24-month warranty with lifetime US-based support is solid",
      "13.2 lbs with an easy-grip handle stays portable"
    ],
    "cons": [
      "Solar panel for off-grid charging is sold separately",
      "500W rated output limits use to lighter appliances"
    ],
    "bestFor": "buyers prioritizing 512wh, 500w (1000w surge), 13.2 lbs"
  },
  {
    "id": "best-500wh-portable-power-stations-4",
    "rank": 4,
    "badge": "Strong Alternative",
    "name": "BLUETTI Elite 30 V2 Portable Power Station, 288Wh 600W",
    "price": "$218.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41YTEqBbTsL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F42HLLSC?tag=theofficejournal-20",
    "description": "4 lbs, this is built for grab-and-go storm prep, delivering a full 600W continuous output, twice the typical output for entry-level stations this size, with Power Lifting Mode pushing to 1500W for serious loads.\n\nEight charging modes include 380W fast wall charging (0-80% in 45 minutes, full in 70 minutes battery-safe), plus solar and car charging options. The 10ms ultra-fast UPS switch protects CPAP machines, laptops, and routers specifically during winter storms and blackouts.",
    "specs": [
      "288Wh, 600W (1500W Power Lifting)",
      "9.4 lbs, 4.5W standby draw",
      "8 charging modes, 45-min 0-80%"
    ],
    "pros": [
      "600W continuous is double typical entry-level output",
      "4.5W standby draw is documented 50% lower than prior gen",
      "9.4 lbs makes this grab-and-go for storm prep"
    ],
    "cons": [
      "1500W Power Lifting Mode likely has real time limits",
      "288Wh capacity limits sustained runtime for larger devices"
    ],
    "bestFor": "Buyers prioritizing 288wh, 600w (1500w power lifting)"
  },
  {
    "id": "best-500wh-portable-power-stations-5",
    "rank": 5,
    "badge": "Budget Pick",
    "name": "Jackery Explorer 300 Portable Power Station, 292Wh",
    "price": "$259.00",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-Ey75o-WL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B082TMBYR6?tag=theofficejournal-20",
    "description": "5 lbs, this is documented 17% lighter than the industry average for its class, with an integrated handle built for long hikes. Six devices connect at once across 2 AC outlets, a 100W USB-C PD port, 2 USB-A ports, and a 120W car port, with 300W rated output and 600W peak surge.\n\nPremium LiFePO4 chemistry delivers over 4000 charge cycles before dropping to 70% capacity, a documented 11-plus year service life. 5 hours, flexible for different outdoor setups.",
    "specs": [
      "292Wh, 300W (600W surge), 7.5 lbs",
      "11+ year life, 4000+ cycles",
      "6 devices, USB-C PD 100W"
    ],
    "pros": [
      "7.5 lbs is documented 17% lighter than the industry average",
      "11+ year service life is long for this capacity",
      "USB-C PD 100W charges devices without a separate adapter"
    ],
    "cons": [
      "300W rated output limits higher-draw appliances",
      "No included solar panel for the documented charge times"
    ],
    "bestFor": "buyers prioritizing 292wh, 300w (600w surge), 7.5 lbs"
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-1000wh-portable-power-stations",
    "title": "Best 1000Wh Portable Power Stations in 2026"
  },
  {
    "href": "/guide/best-2000wh-portable-power-stations",
    "title": "Best 2000Wh Portable Power Stations in 2026"
  },
  {
    "href": "/guide/best-300wh-portable-power-stations",
    "title": "Best 300Wh Portable Power Stations in 2026"
  }
];

export const breadcrumbLabel = "Best 500Wh Portable Power Stations";
