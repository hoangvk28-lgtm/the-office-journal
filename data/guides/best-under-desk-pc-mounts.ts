export const guideSlug = "best-under-desk-pc-mounts";
export const guideTitle = "4 Best Under-Desk PC Mounts in 2026";
export const metaTitle = "Best Under-Desk PC Mounts (2026)";
export const metaDescription =
  "4 under-desk PC mounts we evaluated for real weight capacity, rear-IO cable access once installed, and airflow, not just spec-sheet claims.";
export const mainKeyword = "under desk pc mount";
export const introParagraphs = [
  "Weight capacity numbers on most under-desk PC mounts are calculated against a generic mid-tower assumption, worth checking your actual tower's weight with drives, a full-size power supply, and any extra cards installed before trusting a rated figure, since a case that looks mid-tower-sized can weigh well beyond what a budget mount is rated to hold.",
  "Rear-IO and cable access matters far more once the PC is actually mounted and in daily use than a mount's static weight rating ever reflects, worth checking whether a mount lets you reach the ports to plug in a new peripheral or troubleshoot a cable without fully unmounting the tower first, since under-desk placement also traps warm air near the floor with limited airflow compared to open desk-side placement.",
];
export const lastUpdated = "2026-08-02";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/41GmNtILiJL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "vivo-mount-pc01",
    rank: 1,
    badge: "Best Under-Desk PC Mount Overall",
    name: "VIVO Black Under Desk and Wall Office PC Mount, MOUNT-PC01",
    price: "$34.99",
    rating: "4.3 stars from Amazon ratings",
    reviews: "2,617 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41GmNtILiJL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01MEDE9WO?tag=theofficejournal-20",
    description:
      "By far the largest review base of any pick in this guide, this VIVO mount uses a straightforward under-desk or wall-mount bracket appropriate for a standard mid-tower case rather than an oversized modern build.\\n\\nThe budget price makes it an easy first pick, but verify your specific tower's actual loaded weight, including drives and power supply, against the rated capacity rather than assuming any mid-tower-sized case qualifies.\n\nIt leads this comparison on the strength of its balance between price and disclosed capacity, and it's worth weighing directly against the VIVO Heavy Duty Adjustable Under before deciding.\n\nWorth knowing before you decide: Lowest price in this guide. On the other side, Rated capacity assumes a standard mid-tower, verify against your actual loaded case weight. That's the main tradeoff to weigh against your specific case and desk setup.",
    specs: ["Under-desk or wall mount","Budget price point","Standard mid-tower fit","Massive review base"],
    pros: ["Largest review base of any pick, strong long-term reliability signal","Lowest price in this guide","Works as either under-desk or wall mount","Simple, proven bracket design"],
    cons: ["Rated capacity assumes a standard mid-tower, verify against your actual loaded case weight","Rear-IO access is limited once mounted, plan cable routing before install","Steel bracket adds some weight to the desk itself"],
    bestFor: "Buyers with a standard mid-tower case wanting the most-proven budget mount",
  },
  {
    id: "vivo-mount-pc04b",
    rank: 2,
    badge: "Best High-Capacity Pick",
    name: "VIVO Heavy Duty Adjustable Under-Desk PC Mount, Supports up to 66 lbs, MOUNT-PC04B",
    price: "$59.99",
    rating: "4.4 stars from Amazon ratings",
    reviews: "222 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31t8nBX+HEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DBB2W47P?tag=theofficejournal-20",
    description:
      "A disclosed 66-pound capacity gives real headroom for a heavier modern tower with multiple drives or a large power supply, closer to what a genuinely loaded case weighs than the generic mid-tower assumption most budget mounts are rated against.\\n\\nThe secure locking mechanism is worth noting for stability, though rear-IO access still requires some planning since the case sits closer to the desk underside once locked in place.\n\nSet against the VIVO Black Under Desk and Wall Office PC Mount, the tradeoff here comes down to price versus disclosed weight capacity, not a straightforward upgrade or downgrade either way.\n\nWorth knowing before you decide: Secure locking beyond simple friction. On the other side, Higher price than the most basic mounts. That's the main tradeoff to weigh against your specific case and desk setup.",
    specs: ["Up to 66 lbs capacity","Secure locking mechanism","Adjustable design","Mid-range price"],
    pros: ["66lb capacity covers realistic loaded modern tower weights","Secure locking beyond simple friction","Adjustable fit for varied case sizes","Solid review base and rating"],
    cons: ["Higher price than the most basic mounts","Rear-IO access still requires some cable-routing planning at install","Locking mechanism adds a small extra step versus a simple clamp"],
    bestFor: "Buyers with a heavier modern tower needing real headroom above generic mid-tower ratings",
  },
  {
    id: "heavy-duty-77lb-black",
    rank: 3,
    badge: "Best Value Heavy-Capacity Pick",
    name: "Heavy Duty Under Desk PC Holder, Up to 77 lbs Load Capacity, Adjustable Computer Tower Holder",
    price: "$49.90",
    rating: "4.6 stars from Amazon ratings",
    reviews: "433 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/31DzC4Wn1JL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0DGQR4DNJ?tag=theofficejournal-20",
    description:
      "A 77-pound rated capacity at a mid-range price gives genuine room above what most mid-tower cases weigh even when fully loaded with drives and a full-size power supply.\\n\\nThe adjustable design accommodates a range of case widths, and the strong rating across a sizable review base is worth weighing against the more basic budget picks that carry lower disclosed capacities.\n\nRelative to the VIVO Heavy Duty Adjustable Under, this pick leans toward a different priority, whether that's a higher capacity rating, a lower price, or a mounting method suited to a different install situation.\n\nWorth knowing before you decide: Strong 4.6-star rating across a sizable review base. On the other side, Verify rear-IO reach with your specific case orientation once mounted. That's the main tradeoff to weigh against your specific case and desk setup.",
    specs: ["Up to 77 lbs capacity","Adjustable width design","Strong review rating","Mid-range price"],
    pros: ["77lb capacity is the highest disclosed rating in this guide","Strong 4.6-star rating across a sizable review base","Adjustable fit for varied case widths","Reasonable price for the stated capacity"],
    cons: ["Verify rear-IO reach with your specific case orientation once mounted","Steel construction adds meaningful weight to the desk underside","Adjustment mechanism should be checked for holding position under full load"],
    bestFor: "Buyers wanting the highest disclosed weight capacity at a reasonable price",
  },
  {
    id: "heavy-duty-66lb-black",
    rank: 4,
    badge: "Best Compact Heavy-Duty Pick",
    name: "Heavy Duty Under Desk PC Mount, Height Adjustable, Max Load 66 lbs, Black",
    price: "$45.58",
    rating: "4.8 stars from Amazon ratings",
    reviews: "49 ratings",
    imageUrl: "https://m.media-amazon.com/images/I/41uzdCGRrbL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0G6YWLKQH?tag=theofficejournal-20",
    description:
      "The highest average rating in this guide, though from a smaller review base, this mount offers a 66-pound capacity with height adjustment for varied case sizes.\\n\\nGiven the smaller sample size, weigh the strong rating against the larger, more proven review bases of the top two picks before assuming equivalent long-term reliability.\n\nCompared with the Heavy Duty Under Desk PC Holder above, this pick trades some of that pick's proven track record for a different balance of price and capacity, worth weighing against your own priorities.\n\nWorth knowing before you decide: 66lb capacity covers most loaded mid-tower cases. On the other side, Smaller review base limits confidence versus the top two picks. That's the main tradeoff to weigh against your specific case and desk setup.",
    specs: ["Max 66 lbs capacity","Height adjustable","Highest average rating","Smaller review base"],
    pros: ["Highest average rating of any pick in this guide","66lb capacity covers most loaded mid-tower cases","Height adjustable for varied case sizes","Compact footprint under the desk"],
    cons: ["Smaller review base limits confidence versus the top two picks","Verify rear-IO access for your specific case orientation","Height adjustment range should be checked against your desk clearance"],
    bestFor: "Buyers prioritizing the strongest available rating on a compact, capable mount",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Weight capacity checked against realistic loaded tower weight", description: "Cross-checked disclosed capacity ratings against what a genuinely loaded modern tower, with drives, a full-size power supply, and extra cards, actually weighs, not the generic mid-tower assumption most spec sheets use." },
  { title: "Rear-IO and cable access considered post-installation", description: "Weighed how reachable rear ports are once the PC is actually mounted and in daily use, not just how easy the initial mounting process looks." },
  { title: "Under-desk airflow and thermal impact noted", description: "Noted that under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, a consideration a mount's weight-capacity spec never addresses." },
  { title: "Mount material and desk-load impact weighed", description: "Weighed steel versus lighter-gauge material construction, since a heavier mount bracket itself adds real load to the desk underside beyond the PC's own weight." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Disclosed Weight Capacity",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around 77 lbs capacity",
          "Heavy Duty Under Desk PC Holder"
        ],
        [
          "Around 66 lbs capacity",
          "VIVO Heavy Duty Adjustable Under"
        ],
        [
          "Around 66 lbs capacity",
          "Heavy Duty Under Desk PC Mount"
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
          "Under $35",
          "VIVO Black Under Desk and Wall Office PC Mount"
        ],
        [
          "Up to $60",
          "VIVO Heavy Duty Adjustable Under"
        ]
      ]
    }
  },
  {
    "subheading": "Heavy Duty Under Desk PC Holder vs Heavy Duty Under Desk PC Mount",
    "cards": [
      {
        "label": "Heavy Duty Under Desk PC Holder",
        "text": "Rated for a higher disclosed weight capacity, worth it if your tower is a heavier modern build with multiple drives or a full power supply."
      },
      {
        "label": "Heavy Duty Under Desk PC Mount",
        "text": "A lighter-duty rating that's still enough for a standard mid-tower case, usually at a lower price."
      }
    ],
    "note": "Most buyers with a standard mid-tower should default to Heavy Duty Under Desk PC Mount unless their case is genuinely heavier than average."
  },
  {
    "subheading": "By Disclosed Weight Capacity",
    "table": {
      "headers": [
        "Your priority",
        "Recommended pick"
      ],
      "rows": [
        [
          "Around 77 lbs capacity",
          "Heavy Duty Under Desk PC Holder"
        ],
        [
          "Around 66 lbs capacity",
          "VIVO Heavy Duty Adjustable Under"
        ]
      ]
    }
  },
  {
    "subheading": "For a Heavier Modern Tower Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A disclosed weight capacity meaningfully above the generic mid-tower assumption, ideally with the tested figure stated in pounds, not a vague marketing term."
      },
      {
        "label": "In this comparison",
        "text": "Heavy Duty Under Desk PC Holder discloses the highest capacity at 77 lbs."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "Your tower is a heavier modern build with multiple drives or a discrete GPU, where VIVO Heavy Duty Adjustable Under's higher price buys real capacity headroom over the cheaper picks."
      },
      {
        "label": "Save if",
        "text": "Your case is a genuinely lightweight, standard mid-tower, where VIVO Black Under Desk and Wall Office PC Mount covers the same job at a lower price."
      }
    ]
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Weigh your loaded tower, not its size category",
    "explanation": "A mount's weight rating is a number on a spec sheet, and it's almost always tested against a generic mid-tower case with nothing installed, not the fully loaded tower you actually own once drives, a full-size power supply, and any add-in cards are factored in.\n\nThat gap matters because a case that looks like a standard mid-tower on the shelf can weigh well beyond a budget mount's rated capacity once it's actually built out, and an overloaded mount risks failing or sagging over time rather than failing outright on day one.\n\nBefore buying, weigh or estimate your tower's real loaded weight, and check the mount's listing for the exact tested capacity figure rather than trusting a vague phrase like \"heavy duty\" with no number attached."
  },
  {
    "criterion": "Check the mounting method against your desk's construction",
    "explanation": "Under-desk mounts attach in one of two ways: screwed directly into the underside of the desk, or clamped on without any drilling.\n\nWhich one applies to you depends on whether you're allowed to drill into the desk at all, a real constraint for renters, office furniture, or a desk you don't want to damage, and clamp-on designs solve that but generally top out at a lower weight capacity than a screwed bracket.\n\nCheck the listing for the desk thickness range a clamp-on mount actually supports, since a desktop that's thicker or thinner than the clamp's rated range simply won't grip securely."
  },
  {
    "criterion": "Plan rear-IO and cable access before you mount, not after",
    "explanation": "Once a tower is mounted under the desk, reaching the rear panel to plug in a new peripheral, swap a cable, or troubleshoot a connection becomes meaningfully harder than it was when the case sat in the open on the desk-side floor.\n\nThis is worth thinking through before installation, not after, because the fix at that point is usually a full unmount rather than a quick adjustment.\n\nDecide which direction the case's rear panel will face relative to where you sit, and favor a mount that lets you slide or swivel the tower out partway without fully removing it."
  },
  {
    "criterion": "Factor in the thermal tradeoff of under-desk placement",
    "explanation": "Moving a tower off the desktop and into the enclosed space under the desk changes its airflow environment, since that space traps warmer air near the floor with less open circulation than desk-side placement gets.\n\nThis tradeoff matters more for a build generating real heat, a discrete GPU or several drives under sustained load, and less for a lighter general-use machine that rarely pushes hard.\n\nCheck whether the mount design leaves open space around the case rather than boxing it in tightly, since that gap is what keeps the thermal impact manageable."
  },
  {
    "criterion": "Confirm the bracket adjustability matches your case dimensions",
    "explanation": "An adjustable mount uses sliding rails or an expandable frame so it can grip cases across a range of widths and heights, rather than fitting only one exact case size.\n\nThis matters because a fixed-size bracket that's a poor match for your tower either won't close securely around it or will grip with too much slack, and either failure mode risks the case shifting or dropping over time.\n\nCheck the listing for the actual adjustable range in inches, and measure your tower's width and depth against that range before assuming any mount labeled \"adjustable\" will automatically fit."
  }
];

export const faq: FaqItem[] = [
  { q: "Is my mid-tower case actually within a mount's rated weight capacity?", a: "Don't assume so from the case size category alone, weigh or estimate your tower's real loaded weight including drives and power supply, then compare it against the mount's disclosed rating." },
  { q: "Can I still reach the rear ports once my PC is mounted under the desk?", a: "It depends on the mount and orientation, plan where the rear panel will face relative to your seated position before installing, since access gets meaningfully harder once mounted." },
  { q: "Does mounting a PC under the desk affect its temperatures?", a: "It can, under-desk placement traps warm air near the floor with more limited airflow than open desk-side placement, which matters most for towers generating meaningful heat under load." },
  { q: "Does the mount itself add noticeable weight to my desk?", a: "Yes, especially steel-construction mounts, worth factoring into your desk's total load alongside the PC's own weight." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-heavy-duty-under-desk-pc-mounts", title: "Best Heavy-Duty Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-adjustable-under-desk-pc-mounts", title: "Best Adjustable Under-Desk PC Mounts (2026)" },
  { href: "/guide/best-under-desk-pc-mount-brackets", title: "Best Under-Desk PC Mount Brackets (2026)" },
];
