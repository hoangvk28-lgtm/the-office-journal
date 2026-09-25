// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";
export type { GuideProduct };

export const buyingCriteria = [
  {
    "criterion": "Check clamp weight capacity against a phone plus its protective case, not a bare phone",
    "explanation": "A phone arm's rated weight capacity is often demonstrated with a bare, caseless phone in marketing photos, which understates the real load once you factor in a protective case, especially a chunky battery case or an otter-style rugged case that can add meaningful extra weight.\n\nThis matters because a clamp rated just barely above a bare phone's weight can sag or slowly droop over hours of real use once a case is added, a common complaint on budget gooseneck arms.\n\nCheck the listing for the stated weight capacity, and add your phone's actual case weight to your phone's weight before comparing that total against the arm's rating."
  },
  {
    "criterion": "Confirm clamp desk-edge compatibility for your specific desk thickness",
    "explanation": "Every clamp-on phone arm has a maximum and minimum desk edge thickness it can grip securely, and this range varies meaningfully between products even at a similar price, some fit only a standard desktop edge while others accommodate a thicker standing-desk edge or a rounded lip.\n\nThis matters directly because a clamp too narrow for your desk simply won't close securely, and one that's mismatched for a thin edge won't grip firmly, risking the whole arm slipping under the phone's weight.\n\nMeasure your desk edge thickness in inches and compare it against the exact clamp range stated in the product specs before ordering."
  },
  {
    "criterion": "Weigh stability under touch interaction, not just static holding power",
    "explanation": "Tapping a mounted phone's screen creates real lateral force that a passively displayed device sitting still never experiences, and an arm that holds a phone steady when undisturbed can still wobble noticeably every time you tap to answer a call, scroll a recipe, or adjust a video during a call.\n\nThis matters more for any use case involving regular screen taps, like following a recipe or using the phone as a secondary touch display, less if the phone is purely for passive viewing like a video call where you rarely touch the screen.\n\nCheck reviews specifically for mentions of wobble during tapping or touch interaction, not just how stable the arm looks when the phone is simply mounted and untouched."
  },
  {
    "criterion": "Match arm reach and joint count to your actual desk layout and viewing angle needs",
    "explanation": "A simple gooseneck arm bends into one general position and stays there, while a fully articulating arm with multiple joints lets you reposition the phone to a wide range of angles and distances, useful if you need to switch between overhead recording, eye-level video calls, and side-mounted reference viewing throughout the day.\n\nThis matters more if your desk setup needs that flexibility, less if the phone will sit in roughly the same spot and angle every time you use it.\n\nCheck the listed reach and joint configuration against how many different positions you'll realistically need, since more joints and reach usually mean a bulkier, pricier arm."
  },
  {
    "criterion": "Consider overhead versus side-mounted positioning for your specific use case",
    "explanation": "Overhead phone arms position the phone facing straight down, ideal for filming a desk workspace, following a recipe laid flat on the counter, or scanning documents, while side-mounted or eye-level arms position the phone facing forward or angled slightly down, better suited to video calls or watching content while working.\n\nThis distinction matters directly for matching the arm to your actual use case, an overhead arm mounted for filming is the wrong angle for a video call, and vice versa.\n\nCheck the listing's intended positioning and mounting angle range against your specific use case before assuming any \"phone arm\" covers every use equally well."
  }
];

export const faq = [
  {
    "q": "Is this guide different from your general desk phone arm guide?",
    "a": "They overlap substantially, since most desk phone arms are clamp-mounted by default. This guide focuses more narrowly on desk-edge clamp compatibility across desk types."
  },
  {
    "q": "Will the clamp fit a thick standing-desk top?",
    "a": "The MAGIPEA pick has the widest clamp opening in this cluster at 3 inches, making it the best fit for thicker standing-desk edges."
  },
  {
    "q": "Can I use these arms on a glass desk?",
    "a": "Yes, as long as the clamp includes protective padding, which all five picks here do. Avoid over-tightening a metal clamp directly against glass without the padding in place."
  },
  {
    "q": "Do I need a friction-locked clamp instead of a spring clamp?",
    "a": "Only if you reposition the arm frequently or mount a heavier device. For occasional phone viewing, a spring clamp like the SAIJI or MAGIPEA pick holds fine."
  },
  {
    "q": "Which pick is best if I want to move the arm between my desk and bed?",
    "a": "The LISEN pick's bi-directional clamp base is specifically designed for multi-surface use, including desks, bed frames, and nightstands."
  }
];

export const guideSlug = "best-desk-mounted-phone-arms";

export const guideTitle = "The Best Desk-Mounted Phone Arms for Everyday Desk Work";

export const heroImage = "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg";

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
          "NEEWER 22\" Magic Arm with Desk C Clamp"
        ],
        [
          "",
          "SAIJI Gooseneck Bed Phone Holder"
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
          "SAIJI Gooseneck Bed Phone Holder"
        ],
        [
          "",
          "NEEWER 22\" Magic Arm with Desk C Clamp"
        ]
      ]
    }
  },
  {
    "subheading": "Gooseneck vs Articulating Multi-Joint Arm",
    "cards": [
      {
        "label": "",
        "text": "Bends into one position and stays, simpler and usually cheaper. In this comparison: SAIJI Gooseneck Bed Phone Holder, MAGIPEA Gooseneck Phone Holder."
      },
      {
        "label": "",
        "text": "Repositions across a wider range of angles, worth it if you switch use cases throughout the day. In this comparison: LISEN Cell Phone Holder for Bed Desk, SMALLRIG 22\" Magic Arm Clamp, NEEWER 22\" Magic Arm with Desk C Clamp."
      }
    ],
    "note": "Default to a gooseneck unless you need to reposition the phone often for different tasks."
  },
  {
    "subheading": "",
    "note": "Check each pick's listed weight capacity against your phone plus its actual case weight before buying, not just a bare-phone rating."
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "Reinforced joints and a tension knob that resist wobble when tapping the screen, not just static holding power when the phone sits undisturbed."
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
        "text": "You need extended, stable positioning for filming or long video calls, where NEEWER 22\" Magic Arm with Desk C Clamp's reinforcement gives real headroom over the cheaper picks."
      },
      {
        "label": "",
        "text": "You just need occasional, light positioning for a bare phone, where SAIJI Gooseneck Bed Phone Holder covers the same job at a lower price."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "",
    "description": "We compared each clamp's opening range against common desk thicknesses, including thicker standing-desk tops."
  },
  {
    "title": "",
    "description": "We checked for silicone, EVA, or rubber padding at clamp contact points to reduce marking risk on wood, glass, or laminate desks."
  },
  {
    "title": "",
    "description": "We compared spring-based versus friction-locked clamp mechanisms for how securely they hold the desk edge over repeated repositioning."
  },
  {
    "title": "Overlap with our general phone arm guide",
    "description": "We confirmed which picks are desk-clamp-specific versus multi-surface arms, to keep this guide's focus distinct."
  }
];

export const introParagraphs = [
  "\"Desk-mounted\" specifically means a clamp or screw-base arm that attaches to a desk edge, as opposed to a floor stand or wall bracket. This overlaps substantially with our general best desk phone arms guide, since nearly every arm in that category is already desk-clamped by default.",
  "This narrower guide exists for buyers specifically comparing clamp mounting hardware. The picks below are the same clamp-based arms, evaluated here with more focus on desk-edge compatibility across glass, wood, and standing-desk surfaces."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "desk-mounted phone arms";

export const metaDescription = "How 5 desk-mounted phone arms compare on compatibility, build, features and price, with clear notes on who each one suits.";

export const metaTitle = "Best Desk-Mounted Phone Arms for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b07p2vk93p-dmpa",
    "rank": 1,
    "badge": "Best Overall Pick",
    "name": "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    "price": "$12.99",
    "rating": "4.3",
    "reviews": "32,606",
    "imageUrl": "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07P2VK93P?tag=theofficejournal-20",
    "description": "This gooseneck arm clamps to desk edges via an anti-slip silicone base pad that the listing specifies will not mark furniture, a genuine desk-mounting concern this narrower guide focuses on. 3 inch phone width tolerance should be checked against your phone plus case combined.\n\nIt leads this comparison mainly on build reinforcement and how well it holds a phone steady during touch interaction, worth weighing directly against the MAGIPEA Gooseneck Phone Holder.",
    "specs": [
      "33.46in flexible aluminum arm",
      "Anti-slip silicone desk clamp",
      "Fits phones 4.0-6.3in wide",
      "360° rotation"
    ],
    "pros": [
      "Widely proven desk clamp design",
      "Non-marking silicone base pad",
      "Affordable",
      "Long reach"
    ],
    "cons": [
      "Narrower clip width than some alternatives",
      "No tension knobs for fine-tuning",
      "Can require two hands to reposition"
    ],
    "bestFor": "Buyers who want a proven, affordable desk-clamped arm without extra features."
  },
  {
    "id": "b079qy6rfq-dmpa",
    "rank": 2,
    "badge": "Best for Thick Desk Edges",
    "name": "MAGIPEA Gooseneck Phone Holder, Flexible Overhead Mount for Desk",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "23,326",
    "imageUrl": "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079QY6RFQ?tag=theofficejournal-20",
    "description": "MAGIPEA's clamp opens to 3 inches, wider than most competitors in this cluster, making it a better fit for thick standing-desk tops or desks with a raised edge lip. \\n\\nThe arm itself uses a stiff aluminum core rather than a spring, so repositioning takes two hands, but the tradeoff is minimal sag over time once set.\n\nSet against the SAIJI Gooseneck Bed Phone Holder, the tradeoff here comes down to arm reach and clamp range versus price, not a straightforward upgrade or downgrade either way.",
    "specs": [
      "3in wide clamp opening",
      "Stiff-core aluminum gooseneck",
      "EVA desk-protective pads",
      "Fits 3.5-7in devices"
    ],
    "pros": [
      "Widest clamp opening in this cluster",
      "Minimal long-term sagging",
      "EVA pads protect desk finish",
      "Fits larger phones"
    ],
    "cons": [
      "Two-handed repositioning",
      "Similar price to the SAIJI pick with less proven track record",
      "Bulkier clamp footprint"
    ],
    "bestFor": "Buyers with thick desk edges or standing desks who need a wider clamp opening."
  },
  {
    "id": "b0ckys81t4-dmpa",
    "rank": 3,
    "badge": "Best for Multi-Surface Use",
    "name": "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    "price": "$19.68",
    "rating": "4.4",
    "reviews": "2,655",
    "imageUrl": "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKYS81T4?tag=theofficejournal-20",
    "description": "This LISEN arm's bi-directional clamp base is designed to work equally well on a desk, bed frame, or nightstand, useful if you move the arm between locations rather than leaving it permanently desk-mounted. Tension knobs at each joint let you dial in exact clip firmness for your phone and case combination.\n\nRelative to the MAGIPEA Gooseneck Phone Holder, this pick leans toward a different priority, whether that's a lower price, a longer reach, or a mounting style suited to a different desk edge.",
    "specs": [
      "Bi-directional clamp base",
      "Tension-adjustable joints",
      "Steel body construction",
      "Foldable for storage"
    ],
    "pros": [
      "Works across multiple surface types",
      "Adjustable tension per joint",
      "Reinforced steel build",
      "Folds for portability"
    ],
    "cons": [
      "Higher price than dedicated desk-only arms",
      "Bulkier than a simple clamp",
      "More assembly to dial in tension"
    ],
    "bestFor": "Buyers who want one arm that moves reliably between a desk and other surfaces."
  },
  {
    "id": "b0d5yj42cx-dmpa",
    "rank": 4,
    "badge": "Best Locking Clamp",
    "name": "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    "price": "$33.90",
    "rating": "4.4",
    "reviews": "1,732",
    "imageUrl": "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5YJ42CX?tag=theofficejournal-20",
    "description": "5mm and locks via a friction knob rather than spring tension alone, giving it the most secure desk-edge grip in this cluster. Twelve silicone contact points protect both the clamp and the desk surface from scratches.\n\nCompared with the LISEN Cell Phone Holder for Bed Desk above, this pick trades some of that pick's reach or reinforcement for a different balance of price and simplicity, worth weighing against your own desk setup.\n\nProtects desk surface at 12 contact points.",
    "specs": [
      "Crab clamp opens to 63.5mm",
      "Friction-knob locking",
      "600g load capacity",
      "12 anti-slip/scratch points"
    ],
    "pros": [
      "Most secure locking clamp mechanism",
      "Protects desk surface at 12 contact points",
      "Multi-device compatible",
      "Rated load capacity disclosed"
    ],
    "cons": [
      "Most expensive pick in this cluster",
      "Bulkier than a simple gooseneck clamp",
      "Overkill for basic phone viewing"
    ],
    "bestFor": "Buyers who want the most secure, scratch-protective clamp regardless of price."
  },
  {
    "id": "b0dn1c9rh2-dmpa",
    "rank": 5,
    "badge": "Best Value Magic Arm",
    "name": "NEEWER 22\" Magic Arm with Desk C Clamp, Overhead Camera Mount",
    "price": "$33.99",
    "rating": "4.5",
    "reviews": "988",
    "imageUrl": "https://m.media-amazon.com/images/I/31jBgnNJK5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN1C9RH2?tag=theofficejournal-20",
    "description": "NEEWER's C clamp uses anti-twist mounting pins at each interface, keeping the connection secure specifically at the desk-edge attachment point even under repeated adjustment. It carries the highest rating of this cluster's magic arms, at a nearly identical price to the SMALLRIG pick.\n\nSet against the SMALLRIG 22\" Magic Arm Clamp, the tradeoff here comes down to arm reach and clamp range versus price, not a straightforward upgrade or downgrade either way.",
    "specs": [
      "C clamp with anti-twist pins",
      "1/4in and 3/8in threads",
      "Non-slip clamp pads",
      "Phone holder fits 2.2-3.2in"
    ],
    "pros": [
      "Anti-twist desk clamp connection",
      "Multi-device threading",
      "Non-slip desk pads"
    ],
    "cons": [
      "Same premium price as SMALLRIG",
      "Phone clip sold as separate attachment piece",
      "Large footprint versus simple goosenecks"
    ],
    "bestFor": "Buyers comparing magic arms who want the highest-rated desk clamp option."
  }
];

export const readTime = "7 min";

export const relatedGuides = [
  {
    "href": "/guide/best-desk-phone-arms",
    "title": "Best Desk Phone Arms (2026)"
  },
  {
    "href": "/guide/best-clamp-on-phone-arms-for-desks",
    "title": "Best Clamp-On Phone Arms for Desks (2026)"
  },
  {
    "href": "/guide/best-flexible-gooseneck-phone-arms",
    "title": "Best Flexible Gooseneck Phone Arms (2026)"
  }
];

export const breadcrumbLabel = "Best Desk-Mounted Phone Arms";
