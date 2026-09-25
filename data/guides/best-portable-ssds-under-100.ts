// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "At This Tier, 1TB and 500GB Can Cost the Same",
    "explanation": "Unlike lower price tiers where capacity scales predictably with price, right around the $100 mark it's possible to find a genuine 1TB drive at the same price as some 500GB options, as this comparison shows. This makes capacity-per-dollar the single most important number to check here rather than assuming a higher price always buys more storage. Compare the exact price of every drive you're considering against its actual capacity before assuming any one option is the better deal."
  },
  {
    "criterion": "A Specific Durability Figure Beats General Language",
    "explanation": "Some listings state an exact drop-protection height, like 2 meters, or a specific IP rating for dust and water resistance, while others just describe a drive as \"durable\" or \"shockproof\" without a number attached. A stated figure gives you something concrete to compare across products and to judge against your actual use case, like tossing a drive in a bag versus using it in rough conditions. Treat vague durability language as less informative than a listing willing to cite a specific tested number."
  },
  {
    "criterion": "Health Monitoring Documentation Varies Even at the Same Price",
    "explanation": "Monitoring (which reports drive health) aren't universal even among similarly priced drives. Some listings in this price range explicitly document both, others don't mention either. If long-term reliability tracking matters to you, prioritize a listing that specifically names these features rather than assuming every SSD in this price range includes them by default."
  },
  {
    "criterion": "Brand Track Record Is a Real Factor at Similar Price and Specs",
    "explanation": "When two drives offer similar specs at a similar price, an established storage brand's longer public track record can be a legitimate tiebreaker, particularly for buyers who've had reliability issues with less familiar brands before. This doesn't mean unfamiliar brands are automatically worse, several perform well, but it's a reasonable factor to weigh when specs alone don't clearly favor one option."
  },
  {
    "criterion": "USB Generation Still Sets the Real Speed Ceiling",
    "explanation": "2 Gen 2) determines the realistic speed ceiling regardless of how the drive is marketed. A rated 1050MB/s figure only holds if your computer's own port and the cable used both support that same standard. Check the specific USB generation named in the listing, not just the top speed number, before assuming you'll see the full advertised performance."
  }
];

export const faq = [
  {
    "q": "Is it worth buying a 1TB drive over a 500GB one if they're the same price?",
    "a": "Monitoring that the 1TB alternative doesn't mention, or a stronger preference for an established brand name."
  },
  {
    "q": "Why does my 500GB drive show closer to 465GB in Windows?",
    "a": "This is expected and explained directly by some manufacturers: it's a result of decimal versus binary gigabyte calculation, not a defect or missing storage. A 500GB drive typically reports around 465GB in Windows while macOS may show closer to the full 500GB depending on how it calculates capacity."
  },
  {
    "q": "Does a faster rated speed matter if I'm mostly transferring documents and photos?",
    "a": "The speed difference between a 600MB/s and 1050MB/s drive is most noticeable with large files like 4K video or big batches of RAW photos. For documents, spreadsheets, and typical photos, either speed tier feels close to instant, so prioritize capacity or price over chasing the highest MB/s number for this use case."
  },
  {
    "q": "Should I trust a newer, less familiar SSD brand at this price?",
    "a": "It depends on your risk tolerance. Newer brands can offer competitive specs and pricing, as seen with the capacity advantage of the nusyn pick in this comparison, but an established brand carries a longer public track record if you've been burned by unfamiliar electronics brands before."
  },
  {
    "q": "Do I need to buy a separate cable or adapter for these drives?",
    "a": "Check each listing specifically, some include both a USB-C cable and a USB-A adapter or cable in the box, while others include only a single USB-C cable. If you regularly use an older USB-A device, confirm the box contents before assuming an adapter is included."
  },
  {
    "q": "How much of a difference does drop protection actually make for a desk-bound drive?",
    "a": "If the drive mostly stays on a desk and rarely travels, stated drop protection matters less than if you're carrying it in a bag daily. It's still a reasonable feature to prefer when available at a similar price, since accidental desk-edge drops happen even in a stationary setup."
  }
];

export const guideSlug = "best-portable-ssds-under-100";

export const guideTitle = "The Best Portable SSDs Under $100: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/31i6F9sbEYL._SL500_.jpg";

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
          "A full 1TB at the lowest possible price",
          "Nusyn NSU53 1TB External SSD"
        ],
        [
          "Documented health monitoring and thermal specs",
          ""
        ],
        [
          "An established brand name at the lowest price",
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
        "label": "500GB (SSK, both Sandisk picks)",
        "text": "Comfortable for photos, documents, and moderate video, backed by established brands and documented specs in this comparison. Best if brand familiarity or documented health monitoring matters more than raw space."
      },
      {
        "label": "",
        "text": "Double the room at essentially the same price, the better default for anyone regularly working with 4K video or large game files. Best if capacity is the deciding factor over brand history."
      }
    ],
    "note": "Most buyers should default to the nusyn 1TB pick for the capacity-per-dollar advantage unless brand track record specifically matters more to you."
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
          "Fastest rated speed in this comparison",
          "SSK Portable SSD 500GB or nusyn NSU53 1TB External SSD (both up to 1050MB/s)"
        ],
        [
          "Lowest price, speed less critical",
          "Sandisk 500GB Portable Drive (600MB/s)"
        ]
      ]
    }
  },
  {
    "subheading": "For 4K Video Offloading Specifically",
    "cards": [
      {
        "label": "",
        "text": "A listing that explicitly names iPhone ProRes or 4K video support and a capacity that comfortably fits a full shoot, not just a fast MB/s number in isolation."
      },
      {
        "label": "",
        "text": "The nusyn NSU53 1TB External SSD combines the largest capacity with explicit iPhone 15+ and PS4/PS5 4K support, making it the clearest fit for video-heavy workflows."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "And TRIM support alongside a full 1TB, which typically requires stepping up past $100 to something like a Samsung T7 or SSK 1TB model rather than staying at this exact price ceiling."
      },
      {
        "label": "",
        "text": "500GB is enough for your files, where the Sandisk 500GB Portable Drive covers the need for under $90 without paying for capacity you won't use."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Compared price against actual usable capacity at each tier, since a 1TB drive at the same price as a 500GB drive is a materially different value proposition, not just a bigger number."
  },
  {
    "title": "",
    "description": "Checked the documented USB generation and rated speed for each drive rather than assuming similar-sounding marketing language means similar real-world performance."
  },
  {
    "title": "",
    "description": "Support versus those that only describe general durability in vague terms."
  },
  {
    "title": "",
    "description": "Prioritized listings that cite a specific drop-height or protection figure over those using only general \"durable\" or \"shockproof\" language without a number attached."
  },
  {
    "title": "",
    "description": "Weighed established storage brand names against newer, less familiar brands, since reliability history is harder to verify on unfamiliar brands even when specs look similar."
  }
];

export const introParagraphs = [
  "Under $100 is where a genuine 1TB portable SSD first becomes realistic, alongside 500GB drives that trade capacity for a lower price within the same budget.",
  "Monitoring, rather than ranking by capacity or price alone."
];

export const lastUpdated = "2026-09-11";

export const mainKeyword = "best portable ssds under $100";

export const metaDescription = "A practical comparison of 4 portable SSDs under $100, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best Portable SSDs Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-portable-ssds-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "nusyn NSU53 1TB External SSD",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31i6F9sbEYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GY5ZX7G7?tag=theofficejournal-20",
    "description": "2 Gen 2 with both USB-C and USB-A connectors built into the same body so you can switch ports without flipping cables. The listing specifically calls out iPhone 15 and newer along with PS4 and PS5 as supported devices, aimed at creators offloading 4K footage or game clips.\n\nAgainst the 500GB picks below, this doubles the capacity for roughly the same or only slightly higher price, making it the clear capacity-per-dollar leader in this comparison. The aluminum and plastic housing is described as resisting drops and protecting against electromagnetic interference, a detail aimed at keeping transfer speeds stable during sustained 4K work rather than just surviving a drop.\n\nBest for buyers who specifically want 1TB of real capacity without exceeding $100, especially anyone regularly offloading 4K video from a phone or game console.",
    "specs": [
      "1TB capacity, up to 1050MB/s over USB 3.2 Gen 2",
      "Dual USB-C and USB-A connectors, no flipping needed",
      "Aluminum and plastic housing, drop resistant"
    ],
    "pros": [
      "1TB capacity at essentially the same price as 500GB alternatives",
      "Explicitly supports iPhone 15+ and PS4/PS5 4K offloading",
      "Dual connector design avoids needing a separate adapter"
    ],
    "cons": [
      "Newer, less established brand than Sandisk or Samsung",
      "No stated drop-height or IP rating figure, just general durability language"
    ],
    "bestFor": "Buyers who want 1TB of real capacity without exceeding $100"
  },
  {
    "id": "best-portable-ssds-under-100-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "SSK Portable SSD 500GB",
    "price": "$92.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31kL-skas-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BGKXX9TK?tag=theofficejournal-20",
    "description": "Health diagnostics and adaptive TRIM, features the cheaper picks in this comparison don't mention. 58 degrees F thanks to a 2mm thick aluminum alloy shell.\n\nIt directly addresses the capacity-display confusion every SSD buyer eventually hits: a 500GB drive typically shows closer to 465GB in Windows due to decimal versus binary GB calculation, a detail SSK states outright rather than leaving buyers to discover it after purchase. 6g, it's also the lightest drive in this comparison by a meaningful margin.\n\nBest for buyers who prioritize documented health monitoring and thermal performance over raw capacity, and who don't need a full terabyte.",
    "specs": [
      "500GB capacity, up to 1050MB/s read",
      "S.M.A.R.T. diagnostics and adaptive TRIM documented",
      "36.6g weight, stated peak temperature of 105.58 degrees F"
    ],
    "pros": [
      "Matches the top pick's speed at half the capacity and lower price",
      "Documents S.M.A.R.T. and TRIM, uncommon at this tier",
      "Explicitly explains the capacity-display gap before you hit it"
    ],
    "cons": [
      "Half the capacity of the nusyn 1TB pick for a similar price",
      "500GB fills up faster with 4K video than the 1TB alternative"
    ],
    "bestFor": "Buyers who want documented health monitoring and don't need a full terabyte"
  },
  {
    "id": "best-portable-ssds-under-100-3",
    "rank": 3,
    "badge": "Best Budget Pick",
    "name": "Sandisk 500GB Portable Drive",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UT8mRtwQL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H8Z5GY7T?tag=theofficejournal-20",
    "description": "This is the cheapest drive in this comparison from an established storage brand, rated at up to 600MB/s, noticeably slower than the SSK and nusyn picks but still roughly four times faster than an old mechanical portable hard drive by Sandisk's own comparison. It states a specific 2-meter drop protection figure, a real number rather than vague durability language.\n\nCompared to the pricier Sandisk 500GB pick below (rated 1000MB/s), this is the same brand's more basic model, trading speed for a lower price within the same 500GB capacity and USB-C connector. It's marketed partly around AI-generated content workflows, framing itself as fast enough for downloading AI edits and clips rather than professional 4K video work specifically.\n\nBest for buyers who want a recognized brand name at the lowest price in this comparison and don't need the fastest possible transfer speed.",
    "specs": [
      "500GB capacity, up to 600MB/s read",
      "Stated 2-meter drop protection",
      "USB-C ready, no drivers needed"
    ],
    "pros": [
      "Cheapest drive here from an established storage brand",
      "States a specific 2-meter drop protection figure",
      "USB-C plug and play with no setup"
    ],
    "cons": [
      "Slowest rated speed in this comparison at 600MB/s",
      "Half the capacity of the nusyn 1TB pick for a similar price gap"
    ],
    "bestFor": "Buyers who want a recognized brand name at the lowest price here"
  },
  {
    "id": "best-portable-ssds-under-100-4",
    "rank": 4,
    "badge": "Also Worth Considering",
    "name": "Sandisk 500GB Portable SSD (New Model)",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41wIe7KK-mL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H4HKMBB4?tag=theofficejournal-20",
    "description": "This is Sandisk's faster 500GB model in this comparison, rated at up to 1000MB/s read, close to the SSK pick's speed while carrying the same brand recognition as the cheaper Sandisk pick above. It states the same 2-meter drop protection figure and USB-C plug-and-play setup, positioning itself as the higher-speed step up within Sandisk's own lineup at this capacity.\n\n99 price as the nusyn 1TB pick, the tradeoff here is capacity versus brand familiarity, this drive holds half the storage but comes from a more established name with a longer public track record. For buyers who've had reliability concerns with less familiar brands, that tradeoff can be worth it even at half the capacity.\n\nBest for buyers who specifically want Sandisk's faster 500GB model and are comfortable trading capacity for a more established brand name at the same price as the 1TB top pick.",
    "specs": [
      "500GB capacity, up to 1000MB/s read",
      "2-meter drop protection, no moving parts",
      "USB-C ready, pocket-sized design"
    ],
    "pros": [
      "Faster than Sandisk's cheaper 500GB model in this comparison",
      "Established brand name at the same price as the 1TB pick",
      "Stated 2-meter drop protection figure"
    ],
    "cons": [
      "Half the capacity of the nusyn 1TB pick at the same price",
      "Not a meaningful speed advantage over the SSK 500GB pick"
    ],
    "bestFor": "Buyers who want Sandisk's faster 500GB model over an unfamiliar-brand 1TB alternative"
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-portable-ssds-under-50",
    "title": "Best Portable SSDs Under $50"
  },
  {
    "href": "/guide/best-1tb-portable-ssds",
    "title": "Best 1TB Portable SSDs"
  },
  {
    "href": "/guide/best-500gb-portable-ssds",
    "title": "Best 500GB Portable SSDs"
  },
  {
    "href": "/guide/best-fast-portable-ssds",
    "title": "Best Fast Portable SSDs"
  }
];

export const breadcrumbLabel = "Best Portable SSDs Under $100";
