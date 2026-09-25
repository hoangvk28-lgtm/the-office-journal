// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Match actual size and capacity to your real need, not the category label alone",
    "explanation": "Listings for an office chair often use a size or capacity label (\"compact,\" \"large,\" \"heavy-duty\") that isn't standardized across brands, so the same label can mean meaningfully different actual dimensions or capacity from one product to the next.\n\nThis matters because buying based on the category label rather than the specific listed dimensions or capacity is a common way to end up with something that doesn't actually fit your space or handle your real load.\n\nCheck the listing for exact measurements or a stated capacity figure, and compare that directly against your actual space or need, not just the marketing size category."
  },
  {
    "criterion": "Verify build material and construction quality from reviews, not just spec-sheet claims",
    "explanation": "A product description can describe material or construction in flattering terms that don't always hold up under real, sustained use, and the gap between a listing's claimed quality and its actual durability only shows up in how the product performs after weeks or months of real use, not in day-one photos.\n\nThis matters more for anything you'll use daily or under real load, less for occasional light use where durability matters less.\n\nCheck reviews specifically for mentions of how the office chair holds up over time, not just unboxing-day impressions, and treat a listing's own quality claims as a starting point to verify, not a guarantee."
  },
  {
    "criterion": "Confirm any headline feature actually works as advertised, not just that it's listed",
    "explanation": "A feature appearing in a product's bullet points doesn't guarantee it performs well in practice, some features are functional but limited, and a few are closer to a marketing checkbox than a useful capability.\n\nThis matters directly if a specific feature is the main reason you're choosing this office chair over a simpler, cheaper alternative, since a feature that underperforms in practice undermines the whole reason for paying more.\n\nCheck reviews specifically for real-world experiences with the exact feature that matters most to you, not just whether the feature is listed at all."
  },
  {
    "criterion": "Weigh review count alongside rating, not rating alone",
    "explanation": "This matters more for a purchase you're relying on to perform consistently over time, less for a low-stakes, easily replaceable item.\n\nCheck both the star rating and the review count together for any office chair you're considering, and treat a high rating on a very small review count as a promising but less-proven signal."
  },
  {
    "criterion": "Check compatibility and fit with your existing setup before ordering",
    "explanation": "An office chair that looks like a straightforward fit in photos can still have a compatibility detail, a connector type, a mounting requirement, a size threshold, that doesn't match your existing setup, and this kind of mismatch is one of the most common and avoidable reasons for a return.\n\nThis matters directly if the product needs to physically connect to, mount on, or otherwise integrate with something you already own.\n\nCheck the listing's specific compatibility details against your exact existing setup, not just the general product category, before ordering."
  }
];

export const faq = [
  {
    "q": "Why should I buy a chair rated well above my actual body weight?",
    "a": "Sitting down, shifting position, and standing up repeatedly creates dynamic impact that can add 30 to 50 percent more stress on a chair frame than your static body weight alone. Buying at least 50 pounds above your actual weight builds in a real safety margin instead of running a chair right at its marketed limit every day."
  },
  {
    "q": "Which chairs in this list have the highest stated capacity?",
    "a": "The 500lbs Extra Wide Executive and the Indulgear both state a 500 pound capacity, the highest in this list. Applying the 50 pound buffer rule, that puts a comfortable safety margin around 450 pounds of actual body weight for either pick."
  },
  {
    "q": "What does a thickened steel frame actually tell me?",
    "a": "A listing that explicitly states a thickened or reinforced steel frame, like the LEMBERI, is a genuine durability signal, since heavier gauge steel tends to correlate with a heavier empty chair weight, often in the 40 to 55 pound range. It's not the same as an exact gauge specification, but it's more informative than generic heavy-duty marketing language alone."
  },
  {
    "q": "What is cylinder class and why does it matter for heavier users?",
    "a": "Gas cylinders are rated in classes, and Class 4 cylinders are built specifically for heavier users around 250 pounds and above, while a standard Class 3 cylinder is more likely to fail sooner under sustained heavier loads. None of the chairs in this guide state their cylinder class explicitly, so ask the seller directly if this is a priority for you."
  },
  {
    "q": "Is thick padding the same as durable foam?",
    "a": "5 pounds per cubic foot or higher, is what actually determines how well a seat holds its support over years of daily heavier use. None of the listings in this guide state an exact foam density figure."
  },
  {
    "q": "What should I do if a chair doesn't list a specific weight capacity?",
    "a": "Two chairs in this list, the GABRYLLY and the second TRALT model, are marketed toward bigger users or general home office use without stating an exact numeric capacity. Don't assume big and tall marketing alone guarantees a specific safe weight, contact the seller to confirm an actual rating before ordering."
  }
];

export const guideSlug = "best-office-chairs-for-heavy-people";

export const guideTitle = "The Best Office Chairs for Heavy People Worth Considering";

export const heroImage = "https://m.media-amazon.com/images/I/41lDR7qjYlL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Rating Confidence: Highest Rated vs Most Reviewed",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain"
        ],
        [
          "",
          "GTPLAYER Big and Tall Gaming Chair 400lbs Heavy Duty Office Chair with Foot Rest and Ergonomic Pocket Spring Lumbar Support"
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
          "LEMBERI Big and Tall Gaming Chair 400lb Capacity"
        ],
        [
          "",
          ""
        ]
      ]
    }
  },
  {
    "subheading": "LEMBERI Big and Tall Gaming Chair 400lb Capacity vs GABRYLLY Ergonomic Office Chair",
    "cards": [
      {
        "label": "LEMBERI Big and Tall Gaming Chair 400lb Capacity",
        "text": "The lower-priced option in this comparison, worth checking its actual specs and review history against your specific need before assuming it's enough."
      },
      {
        "label": "",
        "text": "The higher-priced option, worth it if it offers real, checkable headroom in build quality, capacity, or features over the cheaper pick."
      }
    ],
    "note": "Default to LEMBERI Big and Tall Gaming Chair 400lb Capacity unless your specific need calls for the pricier pick's extra headroom."
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
          "GTPLAYER Big and Tall Gaming Chair 400lbs Heavy Duty Office Chair with Foot Rest and Ergonomic Pocket Spring Lumbar Support"
        ]
      ]
    }
  },
  {
    "subheading": "For a First-Time Buyer Specifically",
    "cards": [
      {
        "label": "",
        "text": "Clear, specific dimensions or capacity and a real, established review history, not just marketing language."
      },
      {
        "label": "",
        "text": ""
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You need real durability and feature depth for regular use, where GABRYLLY Ergonomic Office Chair's build gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You only need this for light or occasional use, where LEMBERI Big and Tall Gaming Chair 400lb Capacity covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Stated capacity vs the 50 lb buffer rule",
    "description": "Applied a 50 pound buffer between each chair's stated weight capacity and a recommended actual body weight, since dynamic impact from sitting down and shifting adds meaningfully more stress than a static rating implies."
  },
  {
    "title": "Frame and steel gauge signals",
    "description": "Noted where a listing explicitly states a thickened or reinforced steel frame as a durability proxy, without inventing an exact steel gauge number the listings themselves don't provide."
  },
  {
    "title": "",
    "description": "Distinguished between a listing's comfort claims, like thickened cushion or pocket spring, and an actual stated foam density figure, since none of these listings provide a specific density number."
  },
  {
    "title": "",
    "description": "Flagged directly where a listing markets a chair as big and tall or heavy-duty without stating a specific numeric weight capacity, since marketing language alone isn't a substitute for a verified rating."
  },
  {
    "title": "",
    "description": "Weighed price against stated capacity, review volume, and any explicitly stated frame or material reinforcement, not marketing language or price alone."
  }
];

export const introParagraphs = [
  "Buying a chair for a heavier body means paying closer attention to stated weight capacity than most listings encourage. A marketed capacity number is typically a static or best-case rating, and the actual dynamic load on a chair frame, cylinder, and casters rises when you sit down, shift, lean, or stand up repeatedly through the day. The safest approach is to buy at least 50 pounds above your actual body weight, not right up to the marketed limit.",
  "We don't have manufacturer data on exact steel gauge, cylinder class, or foam density for these listings, so where a spec isn't explicitly stated we say so rather than inventing a number."
];

export const lastUpdated = "2026-07-26";

export const mainKeyword = "best office chair for heavy people";

export const metaDescription = "How 8 office chairs for heavy people compare on seat height, adjustment, support and warranty, with clear notes on who each one suits.";

export const metaTitle = "Best Office Chairs for Heavy People (2026)";

export const products: GuideProduct[] = [
  {
    "id": "gtplayer-big-tall-400lbs",
    "rank": 1,
    "badge": "400 lb Capacity, Best Overall",
    "name": "GTPLAYER Big and Tall Gaming Chair 400lbs Heavy Duty Office Chair with Foot Rest and Ergonomic Pocket Spring Lumbar Support, High Back 3D Saddle Shaped Cushion for Back Pain Relief, Matte-Black",
    "price": "$179.47",
    "rating": "4.5 stars from 34,180 Amazon ratings",
    "reviews": "4.5 stars from 34,180 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41lDR7qjYlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DXTWTCWS?tag=theofficejournal-20",
    "description": "Applying the 50 pound buffer rule, this chair is a reasonable fit for users up to roughly 350 pounds, leaving margin for the dynamic load of sitting down and shifting weight repeatedly.\n\nThe pocket spring lumbar support and 3D saddle shaped cushion suggest attention to seat comfort at this size, and the included foot rest is a nice addition for longer sessions. The listing does not state exact foam density or cylinder class, so treat thick padding as a comfort feature rather than a guaranteed durability signal on its own.",
    "specs": [
      "400 lb stated weight capacity",
      "Pocket spring lumbar support",
      "3D saddle shaped cushion",
      "High back design",
      "Includes foot rest"
    ],
    "pros": [
      "Strong stated capacity with the largest safety margin at 350 lb actual body weight",
      "Pocket spring lumbar support",
      "Includes foot rest"
    ],
    "cons": [
      "Foam density and cylinder class not stated in listing",
      "Bulkier footprint than slim task chairs",
      "Higher price than several other picks"
    ],
    "bestFor": "Heavy users up to roughly 350 lbs who want the most-reviewed option in this list"
  },
  {
    "id": "500lbs-extra-wide-executive",
    "rank": 2,
    "badge": "500 lb Capacity, Widest Seat",
    "name": "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, Extra Wide Seat Executive Office Chair Thick Armrest Pad, Heavy Duty Base and Upgraded Wheels, Ergonomic Comfy Computer Desk Chair",
    "price": "$143.98",
    "rating": "4.6 stars from 165 Amazon ratings",
    "reviews": "4.6 stars from 165 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41tetnrTgxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GF9TKQTW?tag=theofficejournal-20",
    "description": "This chair carries the highest stated weight capacity in this entire list at 500 pounds, along with an explicitly extra wide seat, which matters as much as raw capacity for larger body types who need actual hip and thigh clearance, not just a frame rated to hold weight. Applying the 50 pound buffer rule, that puts a comfortable safety margin at up to roughly 450 pounds of actual body weight.\n\nThe heavy duty base and upgraded wheels are called out directly in the listing, a reasonable signal of attention to frame durability at this capacity tier, though the review pool here is much smaller than the top pick's, so weigh the higher capacity number against less real-world feedback volume.\n\nExtra wide seat for actual body clearance, not just frame rating.",
    "specs": [
      "500 lb stated weight capacity",
      "Extra wide seat",
      "Thick armrest pad",
      "Heavy duty base and upgraded wheels",
      "Adjustable lumbar support"
    ],
    "pros": [
      "Highest stated capacity in this list",
      "Extra wide seat for actual body clearance, not just frame rating",
      "Heavy duty base and upgraded wheels called out directly",
      "Highest rating in this list"
    ],
    "cons": [
      "Much smaller review pool than the top picks",
      "Higher price than several other options",
      "Cylinder class and foam density not stated"
    ],
    "bestFor": "The heaviest users in this list who need both maximum capacity and genuine seat width"
  },
  {
    "id": "fizzin-400lbs-mesh",
    "rank": 3,
    "badge": "400 lb Capacity, Breathable Mesh",
    "name": "Fizzin Ergonomic Office Chair, 400 LBS Computer Chairs with Adjustable Lumbar Support, Breathable Mesh Desk Chair Ergonomic with Thickened Cushion, Comfy Home Office Desk Chair, Black",
    "price": "$109.99",
    "rating": "4.4 stars from 546 Amazon ratings",
    "reviews": "4.4 stars from 546 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41k6biuoUcL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F62NG547?tag=theofficejournal-20",
    "description": "The Fizzin states a 400 pound capacity with breathable mesh construction, a useful combination for heavier users who also run warm during long sitting sessions, since mesh ventilates better than a fully padded or leather seat at this size. Applying the 50 pound buffer rule keeps actual body weight recommendations around 350 pounds for a comfortable safety margin.\n\nThe listing describes a thickened cushion, which is a comfort claim worth noting but not the same as a stated foam density figure, so treat it as padding depth rather than a guaranteed long-term support signal. Adjustable lumbar support is included, useful for extended desk sessions.",
    "specs": [
      "400 lb stated weight capacity",
      "Breathable mesh construction",
      "Thickened cushion",
      "Adjustable lumbar support",
      "Ergonomic desk chair design"
    ],
    "pros": [
      "Breathable mesh suits heavier users who run warm",
      "400 lb stated capacity with a reasonable safety margin",
      "Adjustable lumbar support",
      "Mid-range price for the capacity"
    ],
    "cons": [
      "Cushion thickness described but not a stated foam density",
      "Smaller review pool than the top picks",
      "Cylinder class not specified"
    ],
    "bestFor": "Heavy users up to roughly 350 lbs who want breathable mesh over leather or PU"
  },
  {
    "id": "lemberi-400lb-steel-frame",
    "rank": 4,
    "badge": "400 lb Capacity, Reinforced Steel Frame",
    "name": "LEMBERI Big and Tall Gaming Chair 400lb Capacity, Heavy-Duty Office Chair with Reinforced Footrest, Wide Seat High Back PC Desk Chair with Linkage Armrests, Thickened Steel Frame, PU Leather, Red",
    "price": "$99.50",
    "rating": "4.4 stars from 10,760 Amazon ratings",
    "reviews": "4.4 stars from 10,760 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41rkQ70Jb6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B3FJHHT?tag=theofficejournal-20",
    "description": "This LEMBERI chair explicitly states a thickened steel frame in its listing, which is a useful detail since heavier-gauge steel is a reasonable proxy for durability at higher body weights even without an exact gauge number stated. A reinforced footrest and linkage armrests round out a feature set clearly aimed at bigger and taller users, at the lowest price in this list.\n\nApplying the 50 pound buffer rule, its 400 pound stated capacity supports actual body weight up to roughly 350 pounds comfortably.\n\nLowest price in this list.",
    "specs": [
      "400 lb stated weight capacity",
      "Thickened steel frame",
      "Reinforced footrest",
      "Linkage armrests",
      "PU leather upholstery"
    ],
    "pros": [
      "Thickened steel frame explicitly stated, a durability proxy",
      "Lowest price in this list",
      "Reinforced footrest included"
    ],
    "cons": [
      "PU leather runs warmer than mesh over long sessions",
      "Exact steel gauge not specified numerically",
      "Cylinder class not stated"
    ],
    "bestFor": "Budget-conscious heavy users who want an explicitly reinforced steel frame"
  },
  {
    "id": "indulgery-500lbs-quiet",
    "rank": 5,
    "badge": "500 lb Capacity, Quiet Casters",
    "name": "Indulgear 500lbs Big and Tall Office Chair, Heavy Duty Office Chair for Heavy People, High Back Executive Desk Chair with Adjustable Lumbar Support, Quiet Rubber Wheel, Pocket Spring Cushion",
    "price": "$169.98",
    "rating": "4.3 stars from 555 Amazon ratings",
    "reviews": "4.3 stars from 555 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41kNDnGgiRL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CDCQMGSH?tag=theofficejournal-20",
    "description": "The Indulgear matches the highest stated capacity in this list at 500 pounds and is marketed specifically for heavy people rather than a general big and tall audience, along with quiet rubber wheels that matter for shared office or apartment settings. Applying the 50 pound buffer rule puts a comfortable safety margin around 450 pounds of actual body weight.\n\nPocket spring cushioning and adjustable lumbar support round out the feature set, and the high back executive design gives more upper body coverage than a mid-back alternative. The review pool is on the smaller side, so weigh the strong capacity claim against less accumulated buyer feedback than the top picks in this list.\n\nQuiet rubber wheels suit shared spaces.",
    "specs": [
      "500 lb stated weight capacity",
      "Quiet rubber wheel casters",
      "Pocket spring cushion",
      "Adjustable lumbar support",
      "High back executive design"
    ],
    "pros": [
      "Matches the highest stated capacity in this list",
      "Quiet rubber wheels suit shared spaces",
      "Pocket spring cushion",
      "Marketed specifically for heavy users"
    ],
    "cons": [
      "Smaller review pool than the top picks",
      "Foam density and cylinder class not stated",
      "Higher price relative to its review volume"
    ],
    "bestFor": "Heavy users who want a top-tier capacity claim plus quiet casters for shared spaces"
  },
  {
    "id": "gabrylly-headrest-flip-arms",
    "rank": 6,
    "badge": "Big and Tall, Headrest and Tilt Lock",
    "name": "GABRYLLY Ergonomic Office Chair, High Back Home Desk Chair with Headrest, Flip-Up Arms, 90-120 Degree Tilt Lock and Wide Cushion, Big and Tall Mesh Chairs for Man Woman, Black Task Chair",
    "price": "$212.90",
    "rating": "4.4 stars from 14,478 Amazon ratings",
    "reviews": "4.4 stars from 14,478 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41TqMt5cRYL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07Y8BXBX8?tag=theofficejournal-20",
    "description": "The GABRYLLY is the highest priced chair in this list and marketed as big and tall, but its listing does not state a specific numeric weight capacity the way most other picks here do, so we can't apply the buffer rule to an exact figure for this one. It does include a confirmed headrest, flip-up arms, and a 90 to 120 degree tilt lock, a strong feature set for buyers who value adjustability alongside a bigger frame.",
    "specs": [
      "Marketed as big and tall, no numeric capacity stated",
      "Confirmed headrest",
      "Flip-up arms",
      "90-120 degree tilt lock",
      "Wide cushion"
    ],
    "pros": [
      "Confirmed headrest and flip-up arms",
      "Wide tilt lock range for reclining",
      "Wide cushion for bigger frames"
    ],
    "cons": [
      "No specific numeric weight capacity stated in listing",
      "Highest price in this list",
      "Verify actual capacity with the seller before buying for a heavier body weight"
    ],
    "bestFor": "Buyers who want confirmed headrest and tilt features but should verify capacity directly with the seller"
  },
  {
    "id": "tralt-330lb-mesh",
    "rank": 7,
    "badge": "330 lb Capacity, Lower Tier",
    "name": "TRALT Office Chair Ergonomic Desk Chair, 330 LBS Home Mesh Office Desk Chairs with Wheels, Comfortable Gaming Chairs, Black",
    "price": "$125.99",
    "rating": "4.3 stars from 6,155 Amazon ratings",
    "reviews": "4.3 stars from 6,155 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/51lpZXXyViL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CG6V2XGS?tag=theofficejournal-20",
    "description": "This TRALT chair states the lowest capacity in this list at 330 pounds, which applying the 50 pound buffer rule means it's best suited to actual body weights up to roughly 280 pounds rather than users at the higher end of what this guide otherwise covers. Mesh construction helps with breathability over long sessions.\n\nWe're including it because it's part of the same product set and still marketed toward this use case, but buyers closer to 300 pounds and above should look toward the 400 and 500 pound rated picks in this list instead for a safer margin.",
    "specs": [
      "330 lb stated weight capacity",
      "Mesh construction",
      "Rolling wheels",
      "Ergonomic desk chair design",
      "Lowest stated capacity in this list"
    ],
    "pros": [
      "Mesh construction for breathability",
      "Lower price than the highest capacity picks",
      "Simple, straightforward design"
    ],
    "cons": [
      "Lowest stated capacity in this list",
      "Buffer rule puts comfortable body weight around 280 lbs, lower than other picks here",
      "Foam density and cylinder class not stated"
    ],
    "bestFor": "Buyers at the lighter end of this guide's range, roughly up to 280 lbs actual body weight"
  },
  {
    "id": "tralt-lumbar-no-capacity",
    "rank": 8,
    "badge": "Capacity Not Stated, Verify Before Buying",
    "name": "TRALT Office Chair, Ergonomic Desk Chair with Adjustable Lumbar Support, Mesh Computer Chair, Executive Chairs for Home Office Comfortable Lumbar Support, Black",
    "price": "$107.99",
    "rating": "4.3 stars from 4,362 Amazon ratings",
    "reviews": "4.3 stars from 4,362 Amazon ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/412WYSRjpfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CQD3K8PJ?tag=theofficejournal-20",
    "description": "This second TRALT model does not state a numeric weight capacity in its listing at all, unlike its sibling above and most other picks in this guide, so we're flagging that directly rather than assuming it shares a similar rating. Adjustable lumbar support and mesh construction are reasonable general features, but without a stated capacity we can't apply the buffer rule to it with any confidence.\n\nIf you're specifically shopping for a heavy-user chair, treat this one as unverified for that purpose and confirm actual weight capacity with the seller before ordering, or choose one of the picks above with an explicitly stated number instead.",
    "specs": [
      "No numeric weight capacity stated",
      "Adjustable lumbar support",
      "Mesh construction",
      "Executive styling"
    ],
    "pros": [
      "Adjustable lumbar support",
      "Mesh construction for breathability",
      "Reasonable price"
    ],
    "cons": [
      "No stated weight capacity, can't apply the buffer rule",
      "Not verifiably suited to heavier body weights without seller confirmation",
      "Cylinder class and foam density not stated"
    ],
    "bestFor": "General home office use where a specific heavy-capacity rating isn't required, pending seller confirmation"
  }
];

export const readTime = "10 min";

export const relatedGuides = [
  {
    "href": "/guide/best-office-chairs-for-big-and-tall-users",
    "title": "Best Office Chairs for Big and Tall Users (2026)"
  },
  {
    "href": "/guide/best-office-chairs-with-adjustable-lumbar-support",
    "title": "Best Office Chairs with Adjustable Lumbar Support (2026)"
  },
  {
    "href": "/guide/best-reclining-office-chairs-with-footrests",
    "title": "Best Reclining Office Chairs with Footrests (2026)"
  }
];

export const breadcrumbLabel = "Best Office Chairs for Heavy People";
