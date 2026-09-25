// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "VESA Pattern Is About Hole Spacing, Not Screen Size",
    "explanation": "VESA compatibility refers to the distance in millimeters between your TV's rear mounting holes, measured horizontally by vertically, like 400x200mm, and it doesn't map perfectly to screen size the way you might assume. A 55 inch TV from one manufacturer and a 55 inch TV from another can use different VESA patterns entirely. Before buying, measure your TV's actual mounting hole spacing, or find the VESA spec in your TV's manual, and check it against the stand's stated range rather than relying on the screen-size number alone to confirm compatibility."
  },
  {
    "criterion": "Weight Capacity Is a Separate Spec From Screen-Size Fit",
    "explanation": "A stand advertised as fitting your TV's screen size can still be under-rated for your TV's actual weight, and these are separate specifications that a buyer needs to check independently. Some budget stands cap out around 88 lbs, comfortably fine for most TVs at 60 inches and under, but insufficient for some older or larger heavy panels. Look up your specific TV's actual weight, listed in its spec sheet or manual, and confirm the stand's stated capacity clears it with meaningful headroom, not just barely."
  },
  {
    "criterion": "Anti-Tip Anchoring Is a Best Practice, Not a Legal Requirement for TV Stands",
    "explanation": "It's worth being precise here: the mandatory anti-tip safety standard many people associate with furniture, ASTM F2057 and the related STURDY Act, legally applies specifically to freestanding clothing storage furniture like dressers and chests over 27 inches tall, not to TV stands or media consoles. That means a TV stand won't ship with a mandated anti-tip strap the way a dresser might. Adding your own anti-tip strap or bracket is still a sound safety practice for any tall furniture holding a TV, especially with children in the home, even though no specific mandatory standard requires it for this furniture category."
  },
  {
    "criterion": "Cable Routing Holes Beat an Add-On Clip",
    "explanation": "Cable management on budget TV stands ranges from useful to purely decorative. A stand with actual drilled or molded routing holes in the back panel lets cords run behind the unit and stay hidden long-term, while a stand that only includes a small plastic clip on the side tends to look tidy on day one and cluttered within a few weeks as more devices get added. Check product photos or the description specifically for routing holes or channels, not just a general mention of \"cable management\" in the title."
  },
  {
    "criterion": "Floor Clearance Matters Beyond Just Robot Vacuums",
    "explanation": "A stand's clearance from the floor affects more than robot vacuum compatibility, it also determines how easily you can clean underneath manually and whether larger cable bundles or a game console box can fit in that gap. \" Prefer a stated number when this matters to your setup rather than assuming a vague description guarantees enough room."
  },
  {
    "criterion": "Console Storage Trades Size Range for Enclosed Space",
    "explanation": "Nearly every console-style TV stand under $100 covers a narrower TV size range, typically 43 to 60 inches, than the wider-range freestanding floor stands, which commonly cover 50 to 100 inches. This isn't a quality difference, it's a structural tradeoff: enclosed cabinets and a fixed console shape don't scale to very large screens as easily as an adjustable floor mount does. If you have a TV over 65 inches, check the stand's stated maximum size carefully rather than assuming a console stand automatically works just because it's a popular style."
  }
];

export const faq = [
  {
    "q": "How do I know if a TV stand's VESA mount will fit my TV?",
    "a": "Measure the horizontal and vertical distance between your TV's rear mounting holes in millimeters, then compare that against the stand's listed VESA range, such as up to 400x400mm. Screen size alone doesn't guarantee a VESA match, since different manufacturers use different hole patterns even at the same screen size."
  },
  {
    "q": "My TV stand fits my TV's screen size but still feels unstable, why?",
    "a": "Screen-size compatibility and weight-capacity rating are separate specifications. A stand can be listed as fitting your TV's size while still being under-rated for that TV's actual weight, since some budget stands cap out around 88 lbs. Check your TV's actual weight against the stand's stated capacity rather than assuming a size match means a weight match."
  },
  {
    "q": "Should I get a floor stand or a console-style TV stand?",
    "a": "Floor stands are simpler, generally cheaper, require no wall drilling, and typically cover a wider TV size range with a higher weight capacity, making them a good fit for renters or large TVs. Console-style stands add enclosed cabinet storage and more furniture presence but usually cover a narrower TV size range and lower weight capacity."
  },
  {
    "q": "Is my TV stand required to have an anti-tip strap by law?",
    "a": "The mandatory anti-tip standard, ASTM F2057 and the related STURDY Act, applies specifically to freestanding clothing storage furniture like dressers, not to TV stands or media consoles. It's still a reasonable safety practice to add your own anti-tip strap, especially with children in the home, but it isn't a legal requirement for this furniture category."
  },
  {
    "q": "What cable management features actually matter on a budget TV stand?",
    "a": "Look for actual drilled or molded routing holes in the back panel that let cords run behind the unit out of sight long-term. A general mention of \"cable management\" without specific routing holes often just means an add-on plastic clip, which tends to look tidy at first but cluttered again within a few weeks."
  },
  {
    "q": "Will a robot vacuum fit underneath my TV stand?",
    "a": "It depends on the stand's stated floor clearance. 3 inch clearance, which you can check directly against your robot vacuum's height. Others only describe the underside in general terms like \"open design,\" which doesn't confirm a specific vacuum will actually clear it, so prefer a stand with a stated clearance figure if this matters to you."
  }
];

export const guideSlug = "best-tv-stand-under-100";

export const guideTitle = "The Best TV Stands Under $100: Picks and Trade-offs";

export const heroImage = "https://m.media-amazon.com/images/I/41nNwJMgVeL._SL500_.jpg";

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
          "PRAISUN 54 Inch Fluted TV Stand"
        ],
        [
          "",
          "DUMOS TV Stand or HAPPYMONT TV Stand"
        ],
        [
          "",
          "Heavy Duty Floor TV Stand for 50-100 Inch TVs"
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
    "subheading": "Floor Stand vs Console Stand",
    "cards": [
      {
        "label": "Floor Stand (Heavy Duty Floor TV Stand)",
        "text": "No wall drilling required, wider TV size range, and a much higher weight capacity, but no enclosed storage, only an open accessory shelf. Best for renters or anyone with a large TV."
      },
      {
        "label": "Console Stand (DUMOS, PRAISUN, HAPPYMONT)",
        "text": "Enclosed cabinets keep gear out of sight and add real furniture presence to a room, but cover a narrower TV size range and generally lower weight capacity. Best for a fixed living room or bedroom setup."
      }
    ],
    "note": "Most buyers with a TV over 65 inches should default to a floor stand, while those with a 55-60 inch TV wanting storage should pick a console style."
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
          "Moving the TV between rooms regularly",
          ""
        ],
        [
          "Fixed placement in one room",
          "Any of the console-style stands"
        ]
      ]
    }
  },
  {
    "subheading": "For Robot Vacuum Owners Specifically",
    "cards": [
      {
        "label": "",
        "text": "A specific stated floor clearance in inches, not just a general \"open underneath\" description, since vague wording doesn't confirm your specific robot vacuum's height will actually clear it."
      },
      {
        "label": "",
        "text": "3 inch clearance, giving a concrete number to check against your vacuum's height, more useful than the DUMOS pick's general robot-vacuum-friendly claim."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You have a large TV, 65 inches or bigger, where the Heavy Duty Floor TV Stand's 220 lb capacity and wide VESA range provide real safety margin that a cheaper, lower-rated console stand doesn't."
      },
      {
        "label": "",
        "text": "Your TV is 60 inches or smaller and you don't need enclosed storage, where the PERLESMITH Rolling TV Stand covers the need at roughly half the price of the pricier console options."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "Compared each stand's stated VESA mounting pattern range against common TV mount hole spacing at different screen sizes, rather than relying on screen-size claims alone."
  },
  {
    "title": "Weight Capacity vs Typical TV Weight",
    "description": "Checked stated weight capacity against realistic TV weights for each stand's advertised screen-size range, flagging where capacity runs closer to the edge than others."
  },
  {
    "title": "",
    "description": "Distinguished stands with actual routing holes or channels from those only offering a general open shelf, since routed cable paths hold up better over time than an add-on clip."
  },
  {
    "title": "Floor Stand vs Console Tradeoffs",
    "description": "Weighed the mobility and no-drilling benefit of freestanding floor mounts against the enclosed storage benefit of console-style cabinets, rather than treating one format as universally better."
  },
  {
    "title": "",
    "description": "Noted adjustable feet, leg count, and floor-clearance details relevant to uneven flooring and robot vacuum compatibility, since these affect real day to day stability beyond the base weight rating."
  }
];

export const introParagraphs = [
  "Under $100, TV stand listings mostly compete on the same screen-size range, but the details that actually determine whether your TV fits and stays stable, VESA pattern and weight rating, vary a lot more than the price tag suggests.",
  "We compared this lineup on VESA compatibility range, stated weight capacity against typical TV weights at each screen size, and real cable management features, rather than ranking by price or maximum screen size alone."
];

export const lastUpdated = "2026-09-11";

export const mainKeyword = "best tv stand under $100";

export const metaDescription = "A practical comparison of 5 TV stands under $100, focused on compatibility, build, features and price, and the trade-offs between them.";

export const metaTitle = "Best TV Stands Under $100 (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-tv-stand-under-100-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Heavy Duty Floor TV Stand for 50-100 Inch TVs",
    "price": "$89.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41nNwJMgVeL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYLP8Q9K?tag=theofficejournal-20",
    "description": "This is the only stand in this comparison rated for TVs up to 100 inches, with a VESA range spanning 100x100mm up to 800x600mm, wide enough to cover nearly every mounting pattern from a 50 inch TV up through a large screen. The 220 lb weight capacity built on a steel frame is well above what most TVs in this size range actually weigh, giving real headroom rather than a rating that barely clears a typical TV.\n\nAgainst the console-style stands below, this is a freestanding floor mount rather than an enclosed cabinet, meaning no wall drilling is required, which the listing specifically markets toward renters and offices where drilling isn't an option. It includes a height-adjustable design and an adjustable storage shelf for a soundbar or streaming device, though it doesn't offer the enclosed cabinet storage the wood console stands below provide.\n\nBest for buyers with a large TV, 65 inches or bigger, who want a stable stand without wall mounting, particularly renters or anyone who wants to avoid drilling into a wall.",
    "specs": [
      "Fits 50-100 inch TVs, VESA 100x100mm to 800x600mm",
      "220 lb weight capacity, steel frame",
      "Height-adjustable with an adjustable accessory shelf"
    ],
    "pros": [
      "Only stand here rated for TVs up to 100 inches",
      "220 lb capacity well above typical TV weight at this size",
      "No wall drilling required, ideal for renters"
    ],
    "cons": [
      "No enclosed cabinet storage like the console-style picks",
      "Larger footprint takes up more floor space than a compact console"
    ],
    "bestFor": "Buyers with a large TV who want stability without wall mounting or drilling"
  },
  {
    "id": "best-tv-stand-under-100-2",
    "rank": 2,
    "badge": "Best Value",
    "name": "PERLESMITH Rolling TV Stand",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41pQCzvkpmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B084SW7WFY?tag=theofficejournal-20",
    "description": "At half the price of the top pick, this rolling stand covers a 23 to 60 inch range with a tighter but still practical VESA range up to 400x400mm, and it's built specifically around mobility rather than fixed placement, with lockable wheels for moving the TV between rooms and a tilt adjustment (5 degrees up, 10 degrees down) most fixed stands in this price range don't offer.\n\nThe tradeoff against the floor stand above is a lower weight capacity, 88 lbs versus 220 lbs, which comfortably covers most TVs at 60 inches and under but rules out very large or older, heavier screens. Its cold-rolled steel construction is specifically called out for load-bearing strength relative to the price, and the PU wheel material is noted to avoid the loud rolling noise cheaper caster wheels produce.\n\nBest for buyers who want to move a TV between rooms, like from a bedroom to a living room, or who specifically want tilt adjustment for glare reduction, and whose TV is 60 inches or smaller.",
    "specs": [
      "Fits 23-60 inch TVs, VESA up to 400x400mm",
      "88 lb weight capacity, lockable wheels",
      "Tilt adjustment: 5 degrees up, 10 degrees down"
    ],
    "pros": [
      "Cheapest stand in this comparison at half the top pick's price",
      "Genuine mobility with lockable wheels, not just a stationary base",
      "Tilt adjustment for glare reduction, uncommon at this price"
    ],
    "cons": [
      "88 lb capacity rules out very large or older heavy TVs",
      "Maximum 60 inch screen size, smaller range than the floor stand"
    ],
    "bestFor": "Buyers who need to move a TV between rooms or want tilt adjustment on a 60 inch or smaller screen"
  },
  {
    "id": "best-tv-stand-under-100-3",
    "rank": 3,
    "badge": "Best Console with Storage",
    "name": "DUMOS TV Stand for 55-60 Inch TV",
    "price": "$75.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418KWx6jpkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0HCT9TPC8?tag=theofficejournal-20",
    "description": "This is a console-style stand built for 55 or 60 inch TVs specifically, trading the wider size range of the floor stands above for enclosed storage: two cabinets plus a center open shelf with 3 height settings for a soundbar, game console, or router. Each cabinet includes a rear cable hole to route wires out of sight, a detail that matters more than it sounds, since a stand without dedicated cable routing tends to look cluttered within weeks regardless of how clean the furniture itself looks.\n\nThe 5-leg design with adjustable feet is specifically built to stay stable on uneven or older flooring, and the clearance underneath is called out as compatible with most robot vacuums, a small but useful detail for anyone running automated cleaning. Compared to the PRAISUN pick below, the core features are close, cabinets, adjustable shelf, cable holes, so the decision mostly comes down to finish and available color.\n\nBest for buyers who want enclosed cabinet storage rather than open shelving, and specifically want a stand that accommodates a robot vacuum running underneath it.",
    "specs": [
      "Fits 55-60 inch TVs",
      "2 cabinets plus 3-level adjustable center shelf",
      "Rear cable routing holes, robot-vacuum clearance"
    ],
    "pros": [
      "Enclosed cabinet storage keeps gear out of sight",
      "Dedicated cable routing holes in each cabinet",
      "Clearance underneath fits most robot vacuums"
    ],
    "cons": [
      "Narrower size fit than the floor stands, only 55-60 inch TVs",
      "Lower weight capacity than the dedicated floor mounts"
    ],
    "bestFor": "Buyers who want enclosed storage and cable management for a 55-60 inch TV"
  },
  {
    "id": "best-tv-stand-under-100-4",
    "rank": 4,
    "badge": "Best for Robot Vacuums",
    "name": "PRAISUN 54 Inch Fluted TV Stand",
    "price": "$94.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/411PF6NC9LL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GTM5JRWT?tag=theofficejournal-20",
    "description": "3 inch floor clearance built for robot vacuums to pass underneath without needing to move the furniture, a more specific and higher clearance number than most console stands in this range state outright. Two cabinets use magnetic doors for dust protection, and the open center compartment includes a 3-level adjustable shelf.\n\nIts fluted panel front is a genuine style differentiator from the flatter designs on the other console stands here, and it's built from FSC-certified wood, a sourcing detail not every budget stand discloses. Four cable management holes on the back panel route cords behind the unit, matching the DUMOS pick's cable handling.\n\nBest for buyers who specifically want a stated, high robot-vacuum clearance number rather than a vague \"open underneath\" description, and who want a more distinctive fluted panel look than a standard flat-front console.",
    "specs": [
      "Fits 43-55 inch TVs",
      "5.3 inch floor clearance for robot vacuums",
      "Magnetic cabinet doors, FSC-certified wood"
    ],
    "pros": [
      "States an exact 5.3 inch robot vacuum clearance, not vague wording",
      "FSC-certified wood sourcing disclosed",
      "Distinctive fluted panel design stands out from flat consoles"
    ],
    "cons": [
      "Smallest maximum TV size in this comparison at 55 inches",
      "Priciest console-style pick here, near the top pick's price"
    ],
    "bestFor": "Buyers who want a specific, stated robot-vacuum clearance and a distinctive fluted design"
  },
  {
    "id": "best-tv-stand-under-100-5",
    "rank": 5,
    "badge": "Also Worth Considering",
    "name": "HAPPYMONT TV Stand for 55-60 Inch TV",
    "price": "$64.97",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41lb4Au5qrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0H7RXSDXF?tag=theofficejournal-20",
    "description": "This mid-century style console covers the same 55 to 60 inch range as the DUMOS pick at a lower price, with two cabinets on soft-close hinges and rear cable holes for the same basic wire management. Its open undercarriage is specifically marketed for easy cleaning underneath with a dry or damp cloth, framed more around manual cleaning access than robot vacuum clearance specifically.\n\nThe central shelf offers 3 adjustable levels similar to the other console picks, and an adjustable middle leg is built to keep the unit balanced on uneven flooring, the same core stability feature the DUMOS and PRAISUN picks include under different marketing language. At roughly $11 less than the DUMOS pick with a very similar feature set, this is the value option among the console-style stands here.\n\nBest for buyers who want the same console-with-storage format as the other picks here but at the lowest price among the enclosed-cabinet options.",
    "specs": [
      "Fits 55-60 inch TVs, 53.54\"W x 15.75\"D x 18.9\"H",
      "2 cabinets with soft-close hinges",
      "3-level adjustable center shelf, rear cable holes"
    ],
    "pros": [
      "Cheapest console-style stand with cabinet storage in this lineup",
      "Soft-close hinges avoid loud cabinet door slamming",
      "Adjustable leg keeps the unit level on uneven floors"
    ],
    "cons": [
      "Doesn't state a specific robot-vacuum clearance number",
      "Same 55-60 inch range as pricier alternatives here"
    ],
    "bestFor": "Buyers who want console-style cabinet storage at the lowest price in this comparison"
  }
];

export const readTime = "9 min";

export const relatedGuides = [
  {
    "href": "/guide/best-tv-stand-for-55-inch-tv",
    "title": "Best TV Stand for 55 Inch TV"
  },
  {
    "href": "/guide/best-tv-stand-with-storage",
    "title": "Best TV Stand with Storage"
  },
  {
    "href": "/guide/best-tv-stand-on-wheels",
    "title": "Best TV Stand on Wheels"
  },
  {
    "href": "/guide/best-tv-stand-heavy-duty",
    "title": "Best Heavy Duty TV Stand"
  }
];

export const breadcrumbLabel = "Best TV Stands Under $100";
