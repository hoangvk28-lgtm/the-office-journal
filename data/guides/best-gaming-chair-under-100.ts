// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-gaming-chair-under-100";

export const guideTitle = "The Best Gaming Chairs Under $100 for Capacity, Recline and Cushioning";

export const breadcrumbLabel = "Best Gaming Chairs Under $100";

export const metaTitle = "Best Gaming Chairs Under $100: Recline, Capacity, Cushioning (2026)";

export const metaDescription = "Under $100, gaming chairs differ most in weight rating, recline range, cushion type and upholstery. We compared eight, including a big-and-tall model and a floor rocker.";

export const mainKeyword = "gaming chair under 100";

export const introParagraphs = [
  "Under $100, almost every gaming chair promises the same list: a pull-out footrest, a massage lumbar pillow and a reclining back. What actually separates them is less visible: the rated weight capacity, how far the back reclines, whether the seat uses pocket springs or foam, and whether it is covered in PU leather or fabric.",
  "Expect budget hardware. Several chairs here list a Class 3 gas lift rather than the Class 4 lifts found on some pricier chairs, and the lumbar support comes from strap-on pillows rather than an adjustable built-in mechanism.",
  "The eight picks below include seven desk-height chairs and one floor rocker. Our comparison is based on published specifications, listed features and price position, not hands-on testing."
];

export const lastUpdated = "2026-07-16";

export const readTime = "10 min";

export const heroImage = "https://m.media-amazon.com/images/I/416C7AvAoJL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "homall-white-massage-footrest",
    "rank": 1,
    "badge": "Best All-Round Pick",
    "name": "Homall Gaming Chair (White, Footrest + Massage, 330 lbs)",
    "price": "$80.74",
    "rating": "4.3 stars",
    "reviews": "3,517 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/416C7AvAoJL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4Q7M3VC?tag=theofficejournal-20",
    "description": "The Homall White covers the most for the money: a USB massage lumbar pillow, a pull-out footrest, a BIFMA-certified base and a 330 lb rating, at one of the lower prices here at the time of writing.\n\nIt reclines to 135 degrees, uses high-density foam and a Class 3 gas lift. Homall describes assembly as simple.\n\nThe 135-degree recline is shallower than the Homall Black's 160 degrees or the LEMBERI's 155, and white upholstery is less forgiving of marks than black.",
    "specs": [
      "Capacity: 330 lb",
      "Recline: up to 135°",
      "Lumbar: USB massage pillow",
      "Footrest: pull-out",
      "Base: BIFMA-certified",
      "Gas lift: Class 3"
    ],
    "pros": [
      "330 lb rating",
      "BIFMA-certified base",
      "Lower price than most chairs here at the time of writing"
    ],
    "cons": [
      "135° recline is shallower than some picks",
      "Class 3 gas lift",
      "White upholstery shows marks"
    ],
    "bestFor": "A desk gaming chair with the common comfort features and a solid weight rating for less.",
    "summary": "Massage lumbar, footrest and a BIFMA-certified base, with a 330 lb rating at a lower price than most here.",
    "skipIf": "You want to lie back further; the Homall Black reclines to 160 degrees."
  },
  {
    "id": "homall-black-massage-footrest",
    "rank": 2,
    "badge": "Deepest Recline",
    "name": "Homall Gaming Chair (Black, Footrest + Massage, 300 lbs)",
    "price": "$89.99",
    "rating": "4.3 stars",
    "reviews": "6,203 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/31lPfyAUonL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07ZVKCPZN?tag=theofficejournal-20",
    "description": "The Homall Black is the pick for lying back between sessions: its 90- to 160-degree recline is the widest range here.\n\nIt keeps the massage lumbar pillow and pull-out footrest of the White model, on a five-star steel base with 360-degree swivel.\n\nIts 300 lb rating is lower than the White's 330 lb, and the listing doesn't mention the BIFMA-certified base the White and Dark Black models list.",
    "specs": [
      "Capacity: 300 lb",
      "Recline: 90–160°",
      "Lumbar: massage pillow",
      "Footrest: pull-out",
      "Base: five-star steel, 360° swivel"
    ],
    "pros": [
      "Widest recline range here",
      "Footrest and massage lumbar",
      "Steel base"
    ],
    "cons": [
      "300 lb rating, lower than the White",
      "No BIFMA base listed",
      "Deep recline needs space behind the chair"
    ],
    "bestFor": "Lounging or resting between games, where recline matters more than capacity.",
    "summary": "The widest recline here, 90 to 160 degrees, with footrest and massage lumbar.",
    "skipIf": "You need more than 300 lb; the LEMBERI is rated to 400 lb."
  },
  {
    "id": "homall-dark-black-upgraded",
    "rank": 3,
    "badge": "Homall's Upgraded Version",
    "name": "Homall Gaming Chair (Dark Black, Footrest + Massage, 300 lbs)",
    "price": "$94.99",
    "rating": "4.3 stars",
    "reviews": "3,517 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41yasuwFb+L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DFWG7D4M?tag=theofficejournal-20",
    "description": "The Dark Black is Homall's upgraded version of its classic chair, listing a BIFMA-certified base and a Class 3 gas lift alongside the massage lumbar pillow and pull-out footrest.\n\nIt reclines to 135 degrees and is rated for 300 lb.\n\nOn paper, it is hard to separate from the cheaper Homall White, which lists the same certified base, gas lift class and recline with a higher 330 lb rating. We would choose it mainly if you prefer the dark finish.",
    "specs": [
      "Capacity: 300 lb",
      "Recline: up to 135°",
      "Base: BIFMA-certified",
      "Gas lift: Class 3",
      "Lumbar: massage pillow",
      "Footrest: pull-out"
    ],
    "pros": [
      "BIFMA-certified base",
      "Massage lumbar and footrest",
      "Dark finish hides marks"
    ],
    "cons": [
      "Most expensive Homall here at the time of writing",
      "Lower rating than the cheaper White",
      "135° recline"
    ],
    "bestFor": "Readers who want the Homall White's features in a dark finish.",
    "summary": "Homall's upgraded model, with a BIFMA-certified base and Class 3 gas lift, rated to 300 lb.",
    "skipIf": "Finish doesn't matter to you; the Homall White lists more capacity for less."
  },
  {
    "id": "lemberi-big-tall-400",
    "rank": 4,
    "badge": "Best for Big and Tall",
    "name": "LEMBERI Big & Tall Gaming Chair (Red, 400 lbs)",
    "price": "$99.50",
    "rating": "4.4 stars",
    "reviews": "10,743 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41rkQ70Jb6L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09B3FJHHT?tag=theofficejournal-20",
    "description": "The LEMBERI is the chair to choose if capacity matters: its 400 lb rating is the highest here by a wide margin, and LEMBERI lists a reinforced footrest to match.\n\nIt adds memory foam, linkage armrests that move with the backrest, a recline to 155 degrees, a massage lumbar pillow and casters LEMBERI rates for 1,000 miles.\n\nThe big-and-tall frame is bulkier than the others, the red finish won't suit every room, and it sits right at the $100 ceiling at the time of writing.",
    "specs": [
      "Capacity: 400 lb",
      "Recline: up to 155°",
      "Armrests: linkage",
      "Foam: memory foam",
      "Footrest: reinforced",
      "Casters: rated 1,000 miles (per manufacturer)"
    ],
    "pros": [
      "Highest weight rating here",
      "Linkage armrests",
      "Deep 155° recline"
    ],
    "cons": [
      "Bulkier frame",
      "Red finish",
      "At the top of the budget"
    ],
    "bestFor": "Larger users who need a higher weight rating without leaving the under-$100 range.",
    "summary": "A 400 lb rating, reinforced footrest, linkage armrests and a 155-degree recline.",
    "skipIf": "You don't need the capacity; a smaller chair like the GTPLAYER takes less space."
  },
  {
    "id": "gtplayer-mist-blue-spring",
    "rank": 5,
    "badge": "Best Soft Cushion",
    "name": "GTPLAYER Gaming Chair (Mist-Blue, Pocket Spring + Footrest, 350 lbs)",
    "price": "$89.94",
    "rating": "4.4 stars",
    "reviews": "2,943 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41cb-2iThUL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FZH918XB?tag=theofficejournal-20",
    "description": "The GTPLAYER Mist-Blue is the pick if seat softness matters most: it uses a pocket-spring cushion layered with memory foam, which should feel closer to a sofa than the flat foam of the Homall chairs.\n\nIt is upholstered in breathable fabric rather than PU leather, reclines to 135 degrees, has a pull-out footrest and is rated for 350 lb, with a one-year warranty.\n\nThe recline is shallower than the Homall Black or LEMBERI, and light-colored fabric shows stains more readily than dark upholstery.",
    "specs": [
      "Capacity: 350 lb",
      "Seat: pocket spring + memory foam",
      "Upholstery: breathable fabric",
      "Recline: up to 135°",
      "Footrest: pull-out",
      "Warranty: 1 year"
    ],
    "pros": [
      "Pocket-spring cushioning",
      "Fabric instead of PU leather",
      "350 lb rating"
    ],
    "cons": [
      "135° recline",
      "Light fabric shows stains",
      "No massage lumbar listed"
    ],
    "bestFor": "Readers who prefer a softer seat and fabric over leather-look upholstery.",
    "summary": "A pocket-spring seat layered with memory foam, in breathable fabric, rated to 350 lb.",
    "skipIf": "You want a dark, mesh-style fabric; the GTPLAYER Black is the same chair class in black."
  },
  {
    "id": "gtplayer-black-spring-mesh",
    "rank": 6,
    "badge": "Most Breathable Upholstery",
    "name": "GTPLAYER Gaming Chair (Black, Pocket Spring + Footrest, 350 lbs)",
    "price": "$89.96",
    "rating": "4.5 stars",
    "reviews": "581 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41fC1Jf3TBL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FG2LWB5N?tag=theofficejournal-20",
    "description": "The GTPLAYER Black suits warm rooms: GTPLAYER says its mesh fabric is twice as breathable as PU leather, which is used on most chairs here.\n\nIt layers a 45D pocket-spring cushion with 30D memory foam, reclines to 135 degrees, has a pull-out footrest, and is rated for 350 lb with a one-year warranty.\n\nIt is essentially the dark counterpart of the Mist-Blue, priced within a few cents at the time of writing, and it has less buyer feedback than most chairs here.",
    "specs": [
      "Capacity: 350 lb",
      "Seat: 45D pocket spring + 30D memory foam",
      "Upholstery: mesh fabric (2x breathability claimed vs PU)",
      "Recline: up to 135°",
      "Footrest: pull-out",
      "Warranty: 1 year"
    ],
    "pros": [
      "Mesh fabric for airflow",
      "Pocket-spring cushioning",
      "Dark finish"
    ],
    "cons": [
      "135° recline",
      "Less buyer feedback than most here",
      "Largely overlaps with the Mist-Blue"
    ],
    "bestFor": "Warmer rooms, where PU leather would feel hot.",
    "summary": "Pocket springs over memory foam in a mesh fabric GTPLAYER rates as twice as breathable as PU leather.",
    "skipIf": "You want the deepest recline; the Homall Black reaches 160 degrees."
  },
  {
    "id": "yaheetech-full-black-headrest",
    "rank": 7,
    "badge": "Best for Built-In Storage",
    "name": "Yaheetech Gaming Chair (Full Black, Massage + Headrest, 300 lbs)",
    "price": "$89.99",
    "rating": "4.4 stars",
    "reviews": "20 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41LT1VDTr5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FZS637BF?tag=theofficejournal-20",
    "description": "The Yaheetech is the only chair here with a built-in storage pocket, useful for a controller, remote or phone, and it adds linkage armrests and a USB massage lumbar.\n\nIt uses ventilated PU leather and an SGS-rated gas lift, reclines to 135 degrees and is rated for 300 lb.\n\nIt is a newer listing with very little buyer feedback so far, so there is less to go on than for the Homall or LEMBERI chairs.",
    "specs": [
      "Capacity: 300 lb",
      "Recline: up to 135°",
      "Armrests: linkage",
      "Lumbar: USB massage",
      "Storage: built-in pocket",
      "Gas lift: SGS-rated"
    ],
    "pros": [
      "Built-in storage pocket",
      "Linkage armrests",
      "Ventilated PU leather"
    ],
    "cons": [
      "Very little buyer feedback so far",
      "300 lb rating",
      "No footrest listed"
    ],
    "bestFor": "Keeping a controller or phone within reach at the desk.",
    "summary": "A massage lumbar chair with linkage armrests, ventilated PU and the only built-in storage pocket here.",
    "skipIf": "You want a pull-out footrest; the Homall chairs include one."
  },
  {
    "id": "gtplayer-floor-rocker",
    "rank": 8,
    "badge": "Best Floor Seat",
    "name": "GTPLAYER Floor Rocker (Blue/Black, Ultra-Light 8.6 lbs)",
    "price": "$44.99",
    "rating": "4.1 stars",
    "reviews": "8,705 ratings",
    "imageUrl": "https://m.media-amazon.com/images/I/41T4HDG0aiL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GYDTT3K8?tag=theofficejournal-20",
    "description": "The GTPLAYER Floor Rocker is not a desk chair: it sits on the floor and rocks, which suits console gaming in front of a TV.\n\nAt 8.6 lb, it is easy to move, needs no power, and was the lowest-priced seat here at the time of writing, at under half the price of the desk chairs.\n\nIts 200 lb rating is the lowest here, and it won't work at a desk.",
    "specs": [
      "Type: floor rocker",
      "Weight: 8.6 lb",
      "Power: none required",
      "Capacity: 200 lb"
    ],
    "pros": [
      "Lowest price here at the time of writing",
      "Very light and portable",
      "No power needed"
    ],
    "cons": [
      "Not usable at a desk",
      "Lowest weight rating here",
      "No adjustments"
    ],
    "bestFor": "Console gaming from the floor, or a spare seat for visitors.",
    "summary": "An 8.6 lb floor rocker for console gaming, not a desk chair, rated to 200 lb.",
    "skipIf": "You game or work at a desk; any of the other seven chairs is the right category."
  }
];

export const howWeEvaluated = [
  {
    "title": "Capacity",
    "description": "We compared listed weight ratings and any reinforced components."
  },
  {
    "title": "Recline and adjustments",
    "description": "We compared recline ranges, armrest types and footrests as listed."
  },
  {
    "title": "Seat and upholstery",
    "description": "We noted cushion construction (pocket spring, memory foam, high-density foam) and PU leather versus fabric."
  },
  {
    "title": "Hardware and price",
    "description": "We recorded gas-lift class, base certifications and warranties where listed, and compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check the weight rating first",
    "explanation": "Ratings here range from 200 lb for the floor rocker to 400 lb for the LEMBERI. Choose a chair rated comfortably above your weight, particularly if you'll use the recline."
  },
  {
    "criterion": "Decide how far you need to recline",
    "explanation": "Most chairs here recline to about 135 degrees; the LEMBERI reaches 155 and the Homall Black 160. A deep recline needs room behind the chair."
  },
  {
    "criterion": "Choose upholstery for your room",
    "explanation": "PU leather wipes clean but can feel warm; fabric and mesh, like the GTPLAYER chairs, are designed to breathe better."
  },
  {
    "criterion": "Treat lumbar pillows as pillows",
    "explanation": "Budget gaming chairs provide lumbar support through strap-on pillows, some with a massage function, rather than an adjustable built-in mechanism. If lumbar adjustability matters to you, consider an ergonomic office chair instead."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By priority",
    "table": {
      "headers": [
        "Priority",
        "Consider"
      ],
      "rows": [
        [
          "Most features for the money",
          "Homall White"
        ],
        [
          "Deepest recline",
          "Homall Black"
        ],
        [
          "Highest weight rating",
          "LEMBERI Big & Tall"
        ],
        [
          "Softer seat, fabric upholstery",
          "GTPLAYER Mist-Blue or Black"
        ],
        [
          "Storage pocket",
          "Yaheetech"
        ],
        [
          "Floor gaming",
          "GTPLAYER Floor Rocker"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "Can a gaming chair under $100 have a massage feature?",
    "a": "Yes. The Homall chairs, the LEMBERI and the Yaheetech include a massage lumbar pillow. It is a small vibrating add-on rather than a structural support feature."
  },
  {
    "q": "Is a Class 3 gas lift good enough?",
    "a": "Class 3 lifts are common on budget chairs, including several here. Class 4 lifts are generally rated for heavier loads. If you're close to a chair's weight rating, a model with more capacity margin is the more cautious choice."
  },
  {
    "q": "Which chair has the highest weight rating?",
    "a": "The LEMBERI Big & Tall, rated to 400 lb. The GTPLAYER chairs are rated to 350 lb and the Homall White to 330 lb."
  },
  {
    "q": "Are pocket-spring cushions better than foam?",
    "a": "They feel different rather than better: pocket springs layered with memory foam are designed to feel softer, while high-density foam is typically firmer. The listings don't give evidence that either lasts longer."
  },
  {
    "q": "Is the floor rocker a replacement for a desk chair?",
    "a": "No. It sits on the floor, so it suits console gaming in front of a TV rather than desk work."
  }
];

export const bottomLine = [
  "For a desk gaming chair under $100, the Homall White gives the most for its price: massage lumbar, footrest, a BIFMA base and a 330 lb rating. Choose the Homall Black if you want to recline almost flat, or the LEMBERI if you need a 400 lb rating.",
  "If seat feel matters more than recline, the GTPLAYER pocket-spring chairs add softer cushioning and fabric upholstery, with the Black's mesh better suited to warm rooms. The GTPLAYER Floor Rocker is a different category, for console gaming on the floor."
];

export const relatedGuides = [
  {
    "href": "/guide/best-gaming-chair-with-massage",
    "title": "Best Gaming Chairs with Massage (2026)"
  },
  {
    "href": "/guide/best-gaming-chair-for-big-tall",
    "title": "Best Gaming Chairs for Big & Tall (2026)"
  },
  {
    "href": "/guide/best-gaming-chair-with-footrest",
    "title": "Best Gaming Chairs with Footrest (2026)"
  },
  {
    "href": "/guide/best-office-chair-under-100",
    "title": "Best Office Chairs Under $100 (2026)"
  }
];
