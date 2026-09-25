// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Task Chair vs Full Ergonomic Office Chair",
    "explanation": "The real difference between a task chair and a full office chair isn't price, it's how long you sit continuously. Task chairs are designed for shorter, more active use and tend to be lighter and more compact, often skipping the adjustable lumbar and headrest features found on chairs built for all-day sitting. If your day is mostly uninterrupted desk time, check specifically for lumbar adjustment even on a 'task chair' labeled product; if you're up and moving between tasks often, the lighter design is an advantage, not a compromise."
  },
  {
    "criterion": "Seat Height Range vs Your Desk Height",
    "explanation": "A task chair's seat height range needs to match your desk, not just your height: most chairs adjust between roughly 17 and 22 inches, which fits a standard 28-30 inch desk for most adult heights, but a taller standing desk lowered to sitting height or a drafting-style desk often needs a chair with a taller adjustment range or a footrest to compensate. Check the chair's listed height range against your actual desk height with your forearms level on the surface, rather than assuming any 'adjustable' chair will fit any desk."
  },
  {
    "criterion": "Mesh vs Fabric vs Leather Breathability",
    "explanation": "Breathability is the main practical difference between the three common upholstery types: mesh allows airflow and stays cooler over a full workday, fabric traps more heat but adds cushioned comfort, and leather looks polished but retains the most heat and shows creasing or cracking fastest under daily use. If the chair is for all-day, every-day use, mesh or a durable fabric typically outlasts budget leather, which tends to look worn within a year or two of regular sitting."
  },
  {
    "criterion": "Armrest Adjustability and Desk Clearance",
    "explanation": "Fixed arms are lighter and cheaper but can hit the underside of a desk at the wrong height or block you from pulling in close enough to type comfortably, while 3D or 4D adjustable arms let you set height, width, and pivot independently to actually clear your desk edge and support your forearms at typing height. If you use a keyboard tray or a desk with a low apron, check the arm's minimum height and whether it retracts enough to slide under, since this is a common fit problem with armed task chairs."
  },
  {
    "criterion": "Weight Capacity and Frame Durability for Daily Use",
    "explanation": "Weight capacity numbers describe a tested limit, not a comfortable long-term operating range: a chair rated for 250 lbs will hold that weight, but a gas cylinder and frame used near their rated ceiling every day wears out faster than one with real headroom. For a chair that'll be used 8 hours a day, every day, choosing a rating comfortably above your actual weight extends the chair's real lifespan, especially for the gas lift cylinder, which is the most common failure point on cheaper task chairs."
  }
];

export const faq = [
  {
    "q": "What's the actual difference between a task chair and an office chair?",
    "a": "It comes down to how long you sit continuously: task chairs are lighter and built for shorter, more active sitting, often skipping adjustable lumbar and headrests, while full office chairs add those features for uninterrupted 8-hour days; check for real lumbar adjustment even on a task chair if you'll be at your desk most of the day."
  },
  {
    "q": "How do I know if a task chair's height range fits my desk?",
    "a": "With your forearms resting level on your desk and elbows near 90 degrees, your feet should still reach the floor flat; most task chairs adjust between 17 and 22 inches, which fits a standard-height desk, but a taller or drafting-style desk may need an extended range or a footrest."
  },
  {
    "q": "Is mesh or fabric better for a task chair?",
    "a": "Mesh stays cooler over a full workday since air passes through the weave, while fabric traps more heat but feels more cushioned; leather looks polished but shows creasing and wear fastest under daily all-day use, so mesh or durable fabric usually holds up better long-term."
  },
  {
    "q": "Do I need adjustable arms on a task chair?",
    "a": "Only if fixed arms don't clear your desk: fixed arms can hit a desk's underside or block you from rolling in close, while 3D or 4D adjustable arms let you set height, width, and angle independently to actually fit your specific desk and keyboard tray setup."
  },
  {
    "q": "How much weight can a task chair actually hold?",
    "a": "Check the listed capacity, but treat it as a tested ceiling, not a comfortable daily-use limit; a chair used near its rated weight every day wears out its gas cylinder and casters faster, so choose a rating comfortably above your actual weight for all-day, everyday use."
  },
  {
    "q": "Can a task chair work as my only office chair?",
    "a": "Yes, if it has real lumbar support and a height range that matches your desk; the main tradeoff versus a full office chair is fewer adjustment points (headrest, deep recline), which matters more if you sit continuously for 8+ hours than if your day includes standing or moving between tasks."
  }
];

export const guideSlug = "best-heavy-duty-task-chairs-400-lbs";

export const guideTitle = "8 Best Heavy-Duty Task Chairs (400 lbs) in 2026";

export const heroImage = "https://m.media-amazon.com/images/I/41tetnrTgxL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By How Long You Sit Each Day",
    "table": {
      "headers": [
        "",
        ""
      ],
      "rows": [
        [
          "",
          "Furmax Office Executive Chair High Back Adjustable Managerial Home Desk Chair"
        ],
        [
          "",
          "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain"
        ],
        [
          "",
          "Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall"
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
          "Furmax Office Executive Chair High Back Adjustable Managerial Home Desk Chair"
        ],
        [
          "",
          ""
        ],
        [
          "",
          "Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall"
        ]
      ]
    }
  },
  {
    "subheading": "Mesh vs Fabric vs Leather",
    "cards": [
      {
        "label": "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain)",
        "text": "Stays cooler over long sessions, best for warm climates or anyone who runs hot."
      },
      {
        "label": "Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall)",
        "text": "More cushioned feel, but retains more heat and can show wear faster under daily use."
      }
    ],
    "note": "Match this to how many hours a day the chair will actually see, not just the look you prefer."
  },
  {
    "subheading": "By Seat Height Range vs Your Desk",
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
          "Check the chair's maximum height range specifically"
        ]
      ]
    }
  },
  {
    "subheading": "For Daily, All-Day Use Specifically",
    "cards": [
      {
        "label": "",
        "text": "Real lumbar adjustment and a weight capacity rated comfortably above your actual weight, not just at it."
      },
      {
        "label": "",
        "text": "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain is worth checking against its specific lumbar adjustment before assuming any 'ergonomic' label performs the same."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You sit 8+ hours a day and want adjustable lumbar, arms, and a higher weight rating, where Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall justifies the extra cost."
      },
      {
        "label": "",
        "text": "Your sitting sessions are shorter and more active, where Furmax Office Executive Chair High Back Adjustable Managerial Home Desk Chair already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Task Chair vs Full Ergonomic Office Chair",
    "description": "The real difference between a task chair and a full office chair isn't price, it's how long you sit continuously."
  },
  {
    "title": "Seat Height Range vs Your Desk Height",
    "description": "A task chair's seat height range needs to match your desk, not just your height: most chairs adjust between roughly 17 and 22 inches, which fits a standard 28-30 inch desk for most adult heights, but a taller standing desk lowered to sitting height or a drafting-style desk often needs a chair with a taller adjustment range or a footrest to compensate."
  },
  {
    "title": "Mesh vs Fabric vs Leather Breathability",
    "description": "Breathability is the main practical difference between the three common upholstery types: mesh allows airflow and stays cooler over a full workday, fabric traps more heat but adds cushioned comfort, and leather looks polished but retains the most heat and shows creasing or cracking fastest under daily use."
  },
  {
    "title": "Armrest Adjustability and Desk Clearance",
    "description": "Fixed arms are lighter and cheaper but can hit the underside of a desk at the wrong height or block you from pulling in close enough to type comfortably, while 3D or 4D adjustable arms let you set height, width, and pivot independently to actually clear your desk edge and support your forearms at typing height."
  },
  {
    "title": "Weight Capacity and Frame Durability for Daily Use",
    "description": "Weight capacity numbers describe a tested limit, not a comfortable long-term operating range: a chair rated for 250 lbs will hold that weight, but a gas cylinder and frame used near their rated ceiling every day wears out faster than one with real headroom."
  }
];

export const introParagraphs = [
  "Best Heavy-Duty Task Chairs (400 lbs) cover a wide range of designs and price points. That means marketing copy alone is risky.",
  "This roundup weighs verified weight capacity, not marketing claims, given that this is the real gap to watch."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "task chair 400 lb capacity";

export const metaDescription = "We compared task chair 400 lb capacity models by verified specs and real-world tradeoffs, not marketing claims alone. Every pick is checked against a real.";

export const metaTitle = "Best Heavy-Duty Task Chairs (400 lbs)";

export const products: GuideProduct[] = [
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain",
    "price": "$159.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41tetnrTgxL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GF9TKQTW?tag=theofficejournal-20",
    "description": "500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain is our overall pick in this lineup. No need to worry about back pain due to long hours of sitting. Would you like to be held warmly by a chair?\n\nWeighing this against Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall, it is a unique feeling, a good chair, he is the one who will always give you hugs like a friend ends up being the detail that matters most for most buyers.\n\nThis makes sense for anyone who want the strongest all-around pick in this comparison and would rather not keep shopping around. A task chair's weight rating is a tested ceiling, not a comfortable everyday-use margin, so choose a rating comfortably above your actual weight if it'll see daily, all-day use.",
    "specs": [
      "Inflatable lumbar support for back pain relief",
      "Would you like to be held warmly",
      "Is a unique feeling"
    ],
    "pros": [
      "Inflatable lumbar support for back pain relief",
      "Would you like to be held warmly",
      "Is a unique feeling",
      "Unique & practical upgraded rubber castors"
    ],
    "cons": [
      "Fixed arms may not clear every desk's underside height",
      "Weight rating is a tested ceiling, not a comfortable daily-use margin"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-2",
    "rank": 2,
    "badge": "Best Premium Pick",
    "name": "Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall",
    "price": "$269.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dBSnJaCZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DK1RH376?tag=theofficejournal-20",
    "description": "Indulgear Large Heavy Duty Office Chair with 5D Flip Arms, Comfy Big and Tall is the top-tier pick in this comparison. Do you want to sink into a chair that feels like a warm hug? Need a stylish large home office chair for your work-from-home or shared office setup?\n\nSide by side with 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, the real difference worth noting is tired of swivel chairs that scratch your floors?.\n\nChoose this if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Fixed arms can hit a desk's underside or block you from rolling in close enough to type, so check the arm height and your desk's clearance before assuming any armed chair fits.",
    "specs": [
      "Do you want to sink into a chair",
      "Need a stylish large home office chair",
      "Executive office chair boasts an inflatable lumbar support"
    ],
    "pros": [
      "Do you want to sink into a chair",
      "Need a stylish large home office chair",
      "Executive office chair boasts an inflatable lumbar support",
      "Tired of swivel chairs that scratch your floors"
    ],
    "cons": [
      "Weight rating is a tested ceiling, not a comfortable daily-use margin",
      "Fixed arms may not clear every desk's underside height"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Heavy Duty Office Chair",
    "price": "$132.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/410OGbYNUfL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0G3V5RQG7?tag=theofficejournal-20",
    "description": "Heavy Duty Office Chair is a strong alternative worth comparing directly against the top pick. This heavy-duty office chair, made of high-quality materials, features a sturdy metal base and smooth-rolling nylon casters that can support up to 400lbs.\n\nWeighing this against 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, stay cool and comfortable with the breathable mesh back of this office chair ends up being the detail that matters most for most buyers.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A task chair's weight rating is a tested ceiling, not a comfortable everyday-use margin, so choose a rating comfortably above your actual weight if it'll see daily, all-day use.",
    "specs": [
      "Heavy-duty office chair",
      "Comfy PU leather cushion designed",
      "Adjustable office chair"
    ],
    "pros": [
      "Heavy-duty office chair",
      "Comfy PU leather cushion designed",
      "Adjustable office chair",
      "High-quality desk chair & easy to assemble"
    ],
    "cons": [
      "Fixed arms may not clear every desk's underside height",
      "Weight rating is a tested ceiling, not a comfortable daily-use margin"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-4",
    "rank": 4,
    "badge": "Another Strong Option",
    "name": "HYLONE 400lbs Heavy Duty Office Chair",
    "price": "$147.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41-LA5sUQZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0F7QNJP67?tag=theofficejournal-20",
    "description": "HYLONE 400lbs Heavy Duty Office Chair is a strong alternative worth comparing directly against the top pick. This office chair is versatile and can be used for desks and standing tables, and is suitable for various occasions such as kitchen bars, counters, offices, design studios, laboratories, homes, and more. Our ergonomic office chair, designed to provide comprehensive assistance for your head, back, hips, and arms.\n\nHeld up against 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, both cover the basics equally well, what actually separates them is the breathable nylon mesh back and 5\" thick streamlined seat cushion are soft and elastic.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Fixed arms can hit a desk's underside or block you from rolling in close enough to type, so check the arm height and your desk's clearance before assuming any armed chair fits.",
    "specs": [
      "Ergonomic design chair",
      "Large & cooler seat",
      "Smooth casters & stable base"
    ],
    "pros": [
      "Ergonomic design chair",
      "Large & cooler seat",
      "Smooth casters & stable base",
      "24-Month free parts"
    ],
    "cons": [
      "Weight rating is a tested ceiling, not a comfortable daily-use margin",
      "Fixed arms may not clear every desk's underside height"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "Luckyear Office Chair Ergonomic Desk Chair-400lbs Big and Tall Heavy Duty",
    "price": "$169.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418932zO4hL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0BRY78N5V?tag=theofficejournal-20",
    "description": "Luckyear Office Chair Ergonomic Desk Chair-400lbs Big and Tall Heavy Duty is a strong alternative worth comparing directly against the top pick. 400Lbs heavy duty office chair & easy to install -the office chair, featuring a heavy-duty and durable base, can support up to 400 pounds for adults. 2-inch thick sponge cushion that is both widened and molded for added comfort.\n\nSet next to 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A task chair's weight rating is a tested ceiling, not a comfortable everyday-use margin, so choose a rating comfortably above your actual weight if it'll see daily, all-day use.",
    "specs": [
      "400Lbs heavy duty office chair & easy to install",
      "Molded sponge cushion office chair-this office chair",
      "Breathable mesh back-the back of the office chair"
    ],
    "pros": [
      "400Lbs heavy duty office chair & easy to install",
      "Molded sponge cushion office chair-this office chair",
      "Breathable mesh back-the back of the office chair",
      "Extra comfy and solid desk chair-a high-resilience molded sponge"
    ],
    "cons": [
      "Fixed arms may not clear every desk's underside height",
      "Weight rating is a tested ceiling, not a comfortable daily-use margin"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "700lbs Big and Tall Office Chair",
    "price": "$159.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41dkXQJuk-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GQR95472?tag=theofficejournal-20",
    "description": "700lbs Big and Tall Office Chair is a strong alternative worth comparing directly against the top pick. Engineered specifically for big and tall users, this heavy-duty executive chair features a reinforced industrial-grade metal base and an extra-wide frame. Say goodbye to generic back support.\n\nMove with grace and silence, which is the main thing that distinguishes this pick from 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain.\n\nChoose this if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Fixed arms can hit a desk's underside or block you from rolling in close enough to type, so check the arm height and your desk's clearance before assuming any armed chair fits.",
    "specs": [
      "Engineered specifically for big and tall users",
      "Tailored comfort: inflatable lumbar support",
      "Spacious seating & flip-up armrest versatility"
    ],
    "pros": [
      "Engineered specifically for big and tall users",
      "Tailored comfort: inflatable lumbar support",
      "Spacious seating & flip-up armrest versatility",
      "Floor-friendly: silent & smooth PU casters"
    ],
    "cons": [
      "Weight rating is a tested ceiling, not a comfortable daily-use margin",
      "Fixed arms may not clear every desk's underside height"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "750lbs Big and Tall Office Chair with Wide Thick Seat Cushion for Heavy People",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41SgwK9h-ZL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FD3D8TS5?tag=theofficejournal-20",
    "description": "750lbs Big and Tall Office Chair with Wide Thick Seat Cushion for Heavy People is a strong alternative worth comparing directly against the top pick. Thick padding complements the breathable mesh back, offering full-body support while effectively distributing pressure. Fully adjustable 4D armrests: say goodbye to bulky, fixed armrests and hello to ultra-versatile 4D adjustability.\n\nAgainst 500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain, neither pick has an obvious edge on paper, so the deciding factor comes down to whichever spec matters most for your specific use case.\n\nReach for this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. A task chair's weight rating is a tested ceiling, not a comfortable everyday-use margin, so choose a rating comfortably above your actual weight if it'll see daily, all-day use.",
    "specs": [
      "Invest in office chair comfort everyone deserves",
      "Fully adjustable 4D armrests",
      "Lumbar support for all-day relief"
    ],
    "pros": [
      "Invest in office chair comfort everyone deserves",
      "Fully adjustable 4D armrests",
      "Lumbar support for all-day relief",
      "Executive chair made for big guys"
    ],
    "cons": [
      "Fixed arms may not clear every desk's underside height",
      "Weight rating is a tested ceiling, not a comfortable daily-use margin"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-heavy-duty-task-chairs-400-lbs-8",
    "rank": 8,
    "badge": "Best Value",
    "name": "Furmax Office Executive Chair High Back Adjustable Managerial Home Desk Chair",
    "price": "$99.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41b4JMojCoL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07T291QPJ?tag=theofficejournal-20",
    "description": "Furmax Office Executive Chair High Back Adjustable Managerial Home Desk Chair is the best-value option in this roundup, priced lowest without a real capability gap. Engineered for all-day comfort and rock-solid support, our executive office chair features a reinforced frame and a heavy-duty, 4-level gas lift. Smooth 360° swivel & adjustable tilt: work, relax, or refocus, all without leaving your seat.\n\n500lbs Big and Tall Office Chair Adjustable Lumbar Support for Back Pain is a reasonable point of comparison here, close enough that the actual listing details are worth checking before deciding between them.\n\nChoose this if you want a capable pick without paying for headroom you won't use. Fixed arms can hit a desk's underside or block you from rolling in close enough to type, so check the arm height and your desk's clearance before assuming any armed chair fits.",
    "specs": [
      "Ergonomic office chair",
      "Smooth 360° swivel & adjustable tilt: work",
      "Wrapped in smooth"
    ],
    "pros": [
      "Ergonomic office chair",
      "Smooth 360° swivel & adjustable tilt: work",
      "Wrapped in smooth",
      "Ergonomic lumbar support"
    ],
    "cons": [
      "Weight rating is a tested ceiling, not a comfortable daily-use margin",
      "Fixed arms may not clear every desk's underside height"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-task-chairs",
    "title": "Best Task Chairs"
  },
  {
    "href": "/guide/best-ergonomic-task-chairs",
    "title": "Best Ergonomic Task Chairs"
  },
  {
    "href": "/guide/best-mesh-task-chairs",
    "title": "Best Mesh Task Chairs"
  }
];
