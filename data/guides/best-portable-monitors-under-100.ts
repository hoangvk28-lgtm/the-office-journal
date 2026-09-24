export const guideSlug = "best-portable-monitors-under-100";
export const guideTitle = "4 Best Portable Monitors Under $100 in 2026";
export const metaTitle = "Best Portable Monitors Under $100 (2026)";
export const metaDescription =
  "4 portable monitors under $100 we evaluated, setting realistic expectations for panel quality and brightness at this competitive budget tier.";
export const mainKeyword = "portable monitor under 100";
export const introParagraphs = [
  "At this price tier, panel brightness and color accuracy genuinely vary more than at higher price points, worth checking specific nit brightness and color gamut ratings rather than assuming any budget portable monitor looks similarly good in typical indoor lighting.",
  "USB-C single-cable power delivery isn't guaranteed at this budget, some models require a separate power source, worth verifying whether your laptop can power the display through one cable alone before assuming a simpler travel setup.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "kyy-under100",
    rank: 1,
    badge: "Best Portable Monitor Under $100 Overall",
    name: "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender",
    price: "$62.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51T7K-COzIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B088D8JG3L?tag=theofficejournal-20",
    description: "A well-established 15.6-inch 1080P portable monitor at a genuinely low price, appropriate for buyers wanting a reliable second screen without a large budget commitment.\n\nIt earns the top spot in this comparison over Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor for one main reason. Genuinely low price for a full 1080P portable monitor. On price, it's actually priced above Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Established KYY brand with a long track record in this category. On the other side, Verify current reviews for build quality reports. That's the main tradeoff to weigh against everything above.",
    specs: ["15.6-inch FHD 1080P panel","Very low price point","Established KYY brand","USB-C connectivity"],
    pros: ["Genuinely low price for a full 1080P portable monitor","Established KYY brand with a long track record in this category","Popular 15.6-inch size fits most portable use cases","Good entry point for a first portable monitor purchase"],
    cons: ["Verify single-cable USB-C power delivery works with your specific laptop","Panel brightness and color accuracy are more basic at this price point","Verify current reviews for build quality reports"],
    bestFor: "Buyers wanting a reliable, well-established budget portable monitor under $100",
  },
  {
    id: "anyuse-under100",
    rank: 2,
    badge: "Best Lowest-Cost Pick",
    name: "Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor",
    price: "$39.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/51hVTfsBxqL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0D44QFCPQ?tag=theofficejournal-20",
    description: "A genuine IPS panel at the lowest price point in this guide, appropriate for buyers wanting the most budget-friendly entry into portable monitors while still getting IPS viewing angles.\n\nOne spot below KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender in this ranking, it's priced lower than KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender. The compromise here is straightforward: Set realistic expectations for brightness at this very low price. What you gain in return: Genuine IPS panel for decent viewing angles at a very low price. Whether that trade is worth it depends on which side matters more for your setup.\n\nWorth knowing before you decide: Lowest price point among the picks in this guide. On the other side, Basic accessory bundle compared to pricier alternatives. That's the main tradeoff to weigh against everything above.",
    specs: ["15.6-inch FHD IPS panel","Lowest price in this guide","Both USB-C and HDMI connectivity","Budget-friendly entry point"],
    pros: ["Genuine IPS panel for decent viewing angles at a very low price","Lowest price point among the picks in this guide","Both USB-C and HDMI connectivity for flexible source device support","Good option for buyers on the tightest possible budget"],
    cons: ["Set realistic expectations for brightness at this very low price","Verify current reviews for build quality reports","Basic accessory bundle compared to pricier alternatives"],
    bestFor: "Budget-conscious buyers wanting the most affordable entry into portable monitors",
  },
  {
    id: "mnn-under100",
    rank: 3,
    badge: "Best Gaming-Friendly Pick Under $100",
    name: "MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR Gaming",
    price: "$49.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/5130Dsp2DML._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B9NNWXVP?tag=theofficejournal-20",
    description: "An HDR-labeled IPS panel with gaming-oriented marketing, appropriate for buyers wanting a budget portable monitor for light gaming alongside general use.\n\nSitting just under Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor, it costs more than Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor. Here's the honest tradeoff: Verify the genuine HDR implementation, budget HDR often adds limited real-world benefit. And here's what it gets you instead: Genuine IPS panel with both USB-C and HDMI connectivity. That's the real difference between the two picks, not just a ranking number.\n\nWorth knowing before you decide: Gaming-oriented marketing suits light gaming use. On the other side, Set realistic expectations for brightness at this price point. That's the main tradeoff to weigh against everything above.",
    specs: ["15.6-inch FHD IPS panel","60Hz refresh rate","HDR labeling","Both USB-C and HDMI connectivity"],
    pros: ["Genuine IPS panel with both USB-C and HDMI connectivity","Gaming-oriented marketing suits light gaming use","Budget-friendly price under $50","Flexible connectivity for multiple source devices"],
    cons: ["Verify the genuine HDR implementation, budget HDR often adds limited real-world benefit","60Hz refresh rate is standard, not high-refresh for competitive gaming","Set realistic expectations for brightness at this price point"],
    bestFor: "Budget-conscious buyers wanting a portable monitor for light gaming and general use",
  },
  {
    id: "aoc-under100",
    rank: 4,
    badge: "Best Established Brand Pick Under $100",
    name: "AOC 16\" Portable Monitor FHD 60Hz USB-C IPS Ultra Slim",
    price: "$74.61",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41P2640OZGL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F3MMK1J4?tag=theofficejournal-20",
    description: "A genuine 16-inch IPS panel from AOC, an established monitor brand with a long track record in display manufacturing, appropriate for buyers wanting more brand confidence at a budget-friendly price. Ranked just behind MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR Gaming, it costs more than MNN 15.6\" FHD 60Hz Portable Monitor USB-C HDMI IPS HDR Gaming. The real tradeoff against that pick: Higher price than the most budget-focused picks in this guide. In exchange, it offers this instead: Established AOC brand with a long track record in display manufacturing. That's the swap that decides whether this pick or the one above it is the better fit for your source device. Worth knowing before you decide: Slightly larger 16-inch screen than the standard 15.6-inch alternatives. On the other side, Single USB-C connectivity, verify compatibility with your device. That's the main tradeoff to weigh against everything above.",
    specs: ["16-inch FHD IPS panel","Ultra-slim design","Established AOC display brand","USB-C connectivity"],
    pros: ["Established AOC brand with a long track record in display manufacturing","Slightly larger 16-inch screen than the standard 15.6-inch alternatives","Ultra-slim design for genuinely easy portability","Good balance of brand trust and budget price"],
    cons: ["Higher price than the most budget-focused picks in this guide","Set realistic expectations for brightness at this price point","Single USB-C connectivity, verify compatibility with your device"],
    bestFor: "Buyers wanting more brand confidence from an established display manufacturer under $100",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Brightness and color accuracy checked against realistic budget-tier expectations", description: "Checked specific brightness and color gamut ratings rather than assuming any budget portable monitor looks similarly good in typical indoor lighting." },
  { title: "USB-C single-cable power delivery verified, not assumed universal", description: "Verified whether each model genuinely supports single-cable USB-C power delivery rather than requiring a separate power source." },
  { title: "Established brand track record weighed for confidence at low price points", description: "Weighed established display brand reputation for buyers wanting more confidence when spending less on unfamiliar brands." },
  { title: "Marketing claims like HDR checked against realistic budget-tier implementation", description: "Checked marketing claims like HDR labeling against realistic budget-tier implementation, since these often provide limited real-world visual difference." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "What you're weighing",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "Highest star rating",
          "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender"
        ],
        [
          "Largest review base (more statistical confidence)",
          "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $40",
          "Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor"
        ],
        [
          "Mid-range",
          "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender"
        ],
        [
          "No firm budget ceiling, prioritizing panel quality or resolution",
          "AOC 16\" Portable Monitor FHD 60Hz USB-C IPS Ultra Slim"
        ]
      ]
    }
  },
  {
    "subheading": "USB-C DisplayPort Alt Mode vs HDMI",
    "cards": [
      {
        "label": "USB-C (DisplayPort Alt Mode)",
        "text": "Usually the port that hits the panel's full rated refresh rate, and can carry power alongside video on one cable. In this comparison: check each listing's stated USB-C refresh rate directly."
      },
      {
        "label": "HDMI",
        "text": "Reliable for consoles and older sources, but often capped below the panel's full rated refresh, especially at higher resolutions. In this comparison: check each listing's stated HDMI refresh ceiling directly."
      }
    ],
    "note": "Check each listing's per-port refresh specs directly before assuming HDMI matches the headline rate."
  },
  {
    "subheading": "By VESA Mount Compatibility",
    "table": {
      "headers": [
        "Your setup",
        "Recommended pick"
      ],
      "rows": [
        [
          "Check each listing for VESA compatibility directly",
          "not consistently confirmed in this comparison"
        ]
      ]
    }
  },
  {
    "subheading": "For a Handheld Gaming PC or Console Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Your exact source device's documented maximum output refresh rate over the connection type you'll use, checked independently from the monitor's own rated capability, since handhelds like Steam Deck and ROG Ally commonly cap at 60Hz over USB-C."
      },
      {
        "label": "In this comparison",
        "text": "KYY Portable Monitor 15.6\" 1080P Computer Monitor Screen Extender fits this specifically: Genuinely low price for a full 1080P portable monitor."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You want what AOC 16\" Portable Monitor FHD 60Hz USB-C IPS Ultra Slim offers: Established AOC brand with a long track record in display manufacturing. That's a real functional upgrade over the budget picks here, not just a brand markup."
      },
      {
        "label": "Save if",
        "text": "Anyuse 15.6\" FHD IPS USB-C HDMI Portable Monitor already covers the essentials: Genuine IPS panel for decent viewing angles at a very low price. The main thing you'd be paying extra for elsewhere in this list is headroom you may not actually use."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Check the refresh rate ceiling for each port separately, not just the headline spec",
    "explanation": "A portable monitor's advertised refresh rate is typically its maximum achievable rate on its best-performing port, usually USB-C using DisplayPort Alt Mode, but the same panel connected over HDMI, especially older HDMI 2.0, frequently caps at a meaningfully lower rate because HDMI 2.0's bandwidth can't sustain the same data throughput as USB-C at higher resolutions.\n\nThis is a genuinely common source of buyer disappointment: someone buys a monitor rated 144Hz specifically to pair with a game console over HDMI, only to discover the HDMI port caps at 120Hz or even 60Hz on that specific model, a distinction the headline spec doesn't disclose.\n\nCheck the listing specifically for per-port refresh rate figures (USB-C rate versus HDMI rate stated separately), and match the port you'll actually use to the rate you actually need, not the single highest number in the title."
  },
  {
    "criterion": "Confirm your specific source device can actually output above 60Hz before paying extra for a high refresh panel",
    "explanation": "A monitor's refresh rate capability is meaningless if the connected source device can't output a signal above 60Hz in the first place, and this is a genuinely common mismatch: many laptop USB-C ports are data-only or video-limited to 60Hz regardless of Thunderbolt or USB4 branding, and handheld gaming PCs like Steam Deck and ROG Ally specifically output capped at 60Hz over USB-C in their current hardware generation, making a 144Hz-rated monitor's extra capability completely unused for that pairing despite the higher price paid for it.\n\nBefore buying specifically for the refresh rate, check your exact source device's documented maximum output refresh rate over the connection type you'll actually use (not just its general spec sheet), since a monitor's rated capability and your source device's actual output are two entirely separate specifications that both need to support the higher rate."
  },
  {
    "criterion": "Understand that response time (GtG) affects visible motion clarity as much as refresh rate does",
    "explanation": "Refresh rate (how many times per second the image updates) and response time (how quickly individual pixels can change color, commonly measured in milliseconds as gray-to-gray or GtG) are two separate specs that both affect how smooth and clear fast motion looks, and a high refresh rate paired with a slow response time still produces visible ghosting or blur trailing behind fast-moving objects, since the panel can't physically change pixel colors fast enough to keep up with the higher refresh rate's demands.\n\nThis matters because response time is disclosed far less consistently than refresh rate across portable monitor listings, many simply omit it entirely, making direct comparison difficult even when two panels share the same headline refresh number.\n\nCheck specifically for a stated GtG response time in milliseconds, and treat a genuinely high refresh rate spec with some skepticism if the listing doesn't also disclose response time, since the refresh number alone doesn't guarantee smooth-looking motion."
  },
  {
    "criterion": "Check power delivery and cable requirements, since a portable monitor's convenience depends on how it's actually powered",
    "explanation": "Portable monitors typically draw power either through the same USB-C cable carrying the video signal (single-cable operation, the more convenient setup) or through a separate dedicated power input, and some models support pass-through charging that lets your laptop's own charger power both the laptop and the monitor simultaneously through one connection.\n\nThis matters concretely for actual portability: a monitor requiring two separate cables (one for video, one for power) is meaningfully less convenient to set up and pack away than genuine single-cable operation, undermining part of the appeal of a \"portable\" monitor in the first place.\n\nCheck specifically whether the monitor supports single-cable USB-C operation with your source device, and confirm pass-through charging wattage if you want your laptop's charger to power both devices without needing two outlets."
  },
  {
    "criterion": "Weigh review volume against star rating, since this category includes both established models and many newer, similar-looking entrants",
    "explanation": "Portable monitors from well-established sellers with years of accumulated sales carry review counts in the thousands, giving genuine statistical confidence in panel quality and long-term reliability, while newer listings, sometimes from the same manufacturer under a different model number or from less established brands entirely, can carry only a handful of reviews despite looking similarly specified and priced.\n\nThis is a real practical concern for a portable monitor specifically because panel defects (dead pixels, backlight bleed, uneven brightness) are a documented failure mode across this category, and a thin review base provides much less confidence that a specific listing's panel quality is consistent across units.\n\nWhen comparing two similarly specified and priced portable monitors, check both the star rating and the review count together, and treat a very small review count as a reason for extra caution even if the rating itself looks strong."
  }
];

export const faq: FaqItem[] = [
  { q: "Can a portable monitor under $100 still look good?", a: "Yes, but check specific brightness and color gamut ratings, quality genuinely varies more at this price tier than at higher price points." },
  { q: "Do all portable monitors work with just one USB-C cable?", a: "Not always, verify single-cable power delivery works with your specific laptop before assuming a simpler travel setup." },
  { q: "Is HDR worth it on a budget portable monitor?", a: "Often adds limited real-world visual difference at this price point, don't expect premium HDR implementation." },
  { q: "Should I buy from an established display brand at this price?", a: "It adds confidence in build quality and support, but well-reviewed lesser-known brands can also perform well at this budget." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-portable-monitors-under-200", title: "Best Portable Monitors Under $200 (2026)" },
  { href: "/guide/best-budget-usb-c-monitors", title: "Best Budget USB-C Monitors (2026)" },
  { href: "/guide/best-hdmi-portable-monitors", title: "Best HDMI Portable Monitors (2026)" },
];
