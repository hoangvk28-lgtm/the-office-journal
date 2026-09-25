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
    "q": "Will a desk phone arm damage my desk surface?",
    "a": "All the picks in this guide use silicone or EVA padding at the clamp contact points to reduce marking risk, but very high clamp torque on soft wood finishes can still leave faint marks over time. Check felt pads for glass or lacquered desks specifically."
  },
  {
    "q": "Can these arms hold a phone with a thick case?",
    "a": "The LISEN and MAGIPEA picks have wider clip tolerances built for case-equipped phones. 3in) so check your case-inclusive width before buying."
  },
  {
    "q": "What's the difference between a gooseneck arm and a magic arm?",
    "a": "A gooseneck bends via a flexible or stiff internal wire and holds shape through material rigidity. A magic arm uses discrete ball-joint segments locked by a friction knob, which holds position more reliably under repeated use."
  },
  {
    "q": "Do I need a magic arm if I just want to watch videos in bed?",
    "a": "A basic gooseneck like the SAIJI or MAGIPEA pick is sufficient for passive viewing. Magic arms are worth the extra cost mainly for content creators who need rock-solid positioning for filming or video calls."
  },
  {
    "q": "Can I mount a webcam or ring light instead of a phone on these arms?",
    "a": "The SMALLRIG and NEEWER magic arms both use standard 1/4-20 threads and can swap between a phone clip, webcam, or small light. The gooseneck picks are phone-clip only."
  }
];

export const guideSlug = "best-desk-phone-arms";

export const guideTitle = "The Best Desk Phone Arms for a Better Desk Setup";

export const heroImage = "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg";

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
          "Overhead for filming or recipes",
          "LISEN Cell Phone Holder for Bed Desk"
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
        "text": "Bends into one position and stays, simpler and usually cheaper. In this comparison: LISEN Cell Phone Holder for Bed Desk, SAIJI Gooseneck Bed Phone Holder, MAGIPEA Gooseneck Phone Holder for Bed, SMALLRIG 22\" Magic Arm Clamp."
      },
      {
        "label": "",
        "text": "Repositions across a wider range of angles, worth it if you switch use cases throughout the day. In this comparison: NEEWER 22\" Magic Arm with Desk C Clamp."
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
    "title": "Clamp weight capacity with a case",
    "description": "We checked whether each arm's rated capacity and clip design account for a phone plus a protective case, not just a bare phone."
  },
  {
    "title": "",
    "description": "We compared arm construction (stiff-core, spring-tensioned, or friction-locked) for how well it resists shifting when you tap or swipe the mounted screen."
  },
  {
    "title": "",
    "description": "We noted each clamp's opening range against common desk, bed frame, and nightstand edge thicknesses."
  },
  {
    "title": "",
    "description": "We compared arm length and rotation range for genuine flexibility across different desk layouts and overhead recording setups."
  }
];

export const introParagraphs = [
  "A desk phone arm clamps to your desk edge and holds your phone at eye level or overhead, freeing your hands for video calls, recipe following, or overhead recording. The category spans simple gooseneck clamps under $15 to full articulating magic arms built for content creators.",
  "We researched clamp weight capacity against a phone plus protective case (not a bare phone), desk edge thickness compatibility, and stability under touch interaction, since tapping a mounted phone's screen creates lateral force a passively displayed device never experiences."
];

export const lastUpdated = "2026-08-08";

export const mainKeyword = "desk phone arms";

export const metaDescription = "We compared 5 desk phone arms on compatibility, build, features and price to help you choose the right one for your space.";

export const metaTitle = "Best Desk Phone Arms for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "b0ckys81t4-dpa",
    "rank": 1,
    "badge": "Best Overall Pick",
    "name": "LISEN Cell Phone Holder for Bed Desk, Overhead Phone Mount",
    "price": "$19.68",
    "rating": "4.4",
    "reviews": "2,655",
    "imageUrl": "https://m.media-amazon.com/images/I/515BergNltL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CKYS81T4?tag=theofficejournal-20",
    "description": "This third-generation LISEN arm uses a steel body with shock-absorbing springs and a tension knob at each joint, addressing the sagging problem that plagues cheaper gooseneck arms once a phone's weight settles in. \\n\\nThe bi-directional base clamps to desks, bed frames, or nightstands, and the whole arm folds flat for storage. It is the most structurally reinforced pick here, appropriate for buyers who plan to leave a phone mounted overhead for extended video sessions.\n\nIt leads this comparison mainly on build reinforcement and how well it holds a phone steady during touch interaction, worth weighing directly against the SAIJI Gooseneck Bed Phone Holder.",
    "specs": [
      "Steel body, spring-tensioned joints",
      "One-touch spring clip with silicone pad",
      "Bi-directional clamp base",
      "Foldable for storage"
    ],
    "pros": [
      "Reinforced joints resist sagging under phone weight",
      "Case-friendly spring clip",
      "Works on desks, beds, and nightstands",
      "Folds flat when not in use"
    ],
    "cons": [
      "Bulkier than simple gooseneck arms",
      "Higher price than basic clamp stands",
      "Overkill for occasional, short-duration use"
    ],
    "bestFor": "Buyers who want the most stable overhead arm for extended video calls or filming."
  },
  {
    "id": "b07p2vk93p-dpa",
    "rank": 2,
    "badge": "Best Budget Pick",
    "name": "SAIJI Gooseneck Bed Phone Holder, Flexible Long Arm Phone Mount",
    "price": "$12.99",
    "rating": "4.3",
    "reviews": "32,606",
    "imageUrl": "https://m.media-amazon.com/images/I/31+F3sAWSTL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07P2VK93P?tag=theofficejournal-20",
    "description": "5mm aluminum alloy, long enough to reach from a desk edge clamp to well above eye level. \\n\\nAt this price it is the most popular pick by review volume, though buyers with larger phones plus a thick case should check the clip's width tolerance before assuming a snug fit. It comes with a 12-month replacement warranty.\n\nSet against the LISEN Cell Phone Holder for Bed Desk, the tradeoff here comes down to arm reach and clamp range versus price, not a straightforward upgrade or downgrade either way.",
    "specs": [
      "33.46in flexible aluminum arm",
      "360° rotation",
      "Fits phones 4.0-6.3in wide",
      "Anti-slip silicone base"
    ],
    "pros": [
      "Very affordable",
      "Long reach for flexible positioning",
      "Durable aluminum construction",
      "12-month warranty"
    ],
    "cons": [
      "Clip width may be tight with bulky cases",
      "Fixed clamp height range of 0-2.75in",
      "No tension knobs like the LISEN pick"
    ],
    "bestFor": "Budget buyers who want a reliable, long-reach gooseneck arm without paying for extra reinforcement."
  },
  {
    "id": "b079qy6rfq-dpa",
    "rank": 3,
    "badge": "Best for Overhead Recording",
    "name": "MAGIPEA Gooseneck Phone Holder for Bed, Flexible Overhead Mount",
    "price": "$14.99",
    "rating": "4.4",
    "reviews": "23,326",
    "imageUrl": "https://m.media-amazon.com/images/I/31sVYQbspmL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B079QY6RFQ?tag=theofficejournal-20",
    "description": "MAGIPEA uses a high-density aluminum alloy core that the listing describes as intentionally stiff to prevent drooping, meaning you bend it into position with both hands rather than expecting one-handed micro-adjustment. The base clamp opens to 3 inches, wide enough for thick bed frames or desk edges.\n\nRelative to the SAIJI Gooseneck Bed Phone Holder, this pick leans toward a different priority, whether that's a lower price, a longer reach, or a mounting style suited to a different desk edge.\n\nWide clamp fits thick desk edges.",
    "specs": [
      "Stiff-core aluminum gooseneck",
      "360° rotation clamp",
      "3in wide base clamp",
      "Fits 3.5-7in devices"
    ],
    "pros": [
      "Stiff arm resists sagging by design",
      "Wide clamp fits thick desk edges",
      "EVA pads protect furniture",
      "Fits larger phones up to 7in"
    ],
    "cons": [
      "Requires two hands to reposition",
      "Similar price/feature tier to SAIJI",
      "Bulkier clamp than slim clip-on designs"
    ],
    "bestFor": "Buyers doing overhead cooking or craft recording who want a stiff arm that holds position without drift."
  },
  {
    "id": "b0d5yj42cx-dpa",
    "rank": 4,
    "badge": "Best for Content Creators",
    "name": "SMALLRIG 22\" Magic Arm Clamp, Overhead Phone Mount Holder Stand",
    "price": "$33.90",
    "rating": "4.4",
    "reviews": "1,732",
    "imageUrl": "https://m.media-amazon.com/images/I/419C11rQcXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0D5YJ42CX?tag=theofficejournal-20",
    "description": "This is a genuine magic arm, not a bendable gooseneck, using double-ball clamp joints at each segment that lock with a single friction knob rather than relying on stiff material to hold a bent shape. 5mm and includes silicone padding at twelve contact points to protect both the clamp and whatever it holds. This is built for content creators mounting phones, webcams, or small lights interchangeably, not exclusively phone display.\n\nCompared with the MAGIPEA Gooseneck Phone Holder for Bed above, this pick trades some of that pick's reach or reinforcement for a different balance of price and simplicity, worth weighing against your own desk setup.\n\nMulti-device compatible (phone, webcam, light).",
    "specs": [
      "22in double-ball-joint magic arm",
      "600g (21oz) load capacity",
      "Crab clamp opens to 63.5mm",
      "1/4-20 mount, phone clamp included"
    ],
    "pros": [
      "Locks at any angle via friction knob, no sagging",
      "Multi-device compatible (phone, webcam, light)",
      "Sturdy anti-deflection clamp interface",
      "Genuine 21oz load rating disclosed"
    ],
    "cons": [
      "Most expensive pick in this guide",
      "Overkill if you only need basic phone viewing",
      "Requires occasionally re-tightening the friction knob"
    ],
    "bestFor": "Content creators who want one arm that can swap between phone, webcam, and light mounting."
  },
  {
    "id": "b0dn1c9rh2-dpa",
    "rank": 5,
    "badge": "Best for Multi-Device Mounting",
    "name": "NEEWER 22\" Magic Arm with Desk C Clamp, Overhead Camera Mount",
    "price": "$33.99",
    "rating": "4.5",
    "reviews": "988",
    "imageUrl": "https://m.media-amazon.com/images/I/31jBgnNJK5L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DN1C9RH2?tag=theofficejournal-20",
    "description": "NEEWER's magic arm competes directly with the SMALLRIG pick above, with anti-twist pins at each mounting interface to keep the connection secure during shooting. \\n\\nIts wider device compatibility list (action cameras, ring lights, field monitors) makes it a slightly more flexible buy than a phone-only arm, at a nearly identical price to the SMALLRIG option.\n\nSet against the SMALLRIG 22\" Magic Arm Clamp, the tradeoff here comes down to arm reach and clamp range versus price, not a straightforward upgrade or downgrade either way.",
    "specs": [
      "22in magic arm with C clamp",
      "Anti-twist mounting pins",
      "1/4in and 3/8in threads",
      "Phone holder fits 2.2-3.2in width"
    ],
    "pros": [
      "Anti-twist pins prevent connection slippage",
      "Wide device compatibility",
      "Non-slip clamp pads",
      "Comparable quality to SMALLRIG at similar price"
    ],
    "cons": [
      "Same premium price tier as SMALLRIG",
      "Phone clip is a separate accessory piece",
      "Larger footprint than a simple gooseneck"
    ],
    "bestFor": "Buyers who want a magic arm that doubles for cameras, lights, and microphones beyond just phone viewing."
  }
];

export const readTime = "8 min";

export const relatedGuides = [
  {
    "href": "/guide/best-desk-mounted-phone-arms",
    "title": "Best Desk-Mounted Phone Arms (2026)"
  },
  {
    "href": "/guide/best-flexible-gooseneck-phone-arms",
    "title": "Best Flexible Gooseneck Phone Arms (2026)"
  },
  {
    "href": "/guide/best-overhead-phone-arms-for-desks",
    "title": "Best Overhead Phone Arms for Desks (2026)"
  }
];

export const breadcrumbLabel = "Best Desk Phone Arms";
