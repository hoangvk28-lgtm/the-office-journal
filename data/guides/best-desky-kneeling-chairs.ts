// Light editorial pass for The Office Journal (scripts/editorial/light.ts).
// Commerce fields are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const buyingCriteria = [
  {
    "criterion": "Weight Distribution Between Seat and Shins",
    "explanation": "A kneeling chair works by tilting the seat forward and letting the shins rest on a lower pad, which shifts part of your body weight off your lower back and onto your knees instead. This forward-tilted position naturally opens the angle between your torso and thighs, which research on ergonomic seating links to about a 20% reduction in lumbar disc pressure compared to a standard upright chair. Check the seat tilt angle and shin pad cushioning specifically in the listing, since a thin or poorly angled shin pad concentrates pressure on a small area of your knees rather than spreading it evenly."
  },
  {
    "criterion": "No Backrest Means No Passive Rest Position",
    "explanation": "The lack of a backrest is central to how a kneeling chair works, it keeps your core engaged and discourages slouching, but it also removes any option to passively lean back when your muscles need a break. Because of this, ergonomists typically suggest starting with 20 to 30 minute sessions and building up toward 2 to 4 hours at a stretch, then rotating back to a normal chair rather than using a kneeling chair for a full workday. Check the specific listing for whether it includes a backrest option, since a handful of hybrid models do, and plan to keep a regular chair within reach either way."
  },
  {
    "criterion": "Knee and Circulation Health Before Buying",
    "explanation": "Because a kneeling chair puts sustained pressure on your shins and knees rather than your seat bones, it is generally not recommended for anyone with existing knee injuries, chronic knee pain, or circulation problems in the legs, including varicose veins or swelling. The sustained kneeling angle can aggravate these conditions in a way a standard chair's seat cushion does not. If you have any of these conditions, or you're unsure, check with a doctor or physical therapist before switching to a kneeling chair as your primary seat, rather than assuming it's a safe universal upgrade."
  },
  {
    "criterion": "Adjustability Range vs Your Own Proportions",
    "explanation": "A kneeling chair's adjustability is usually limited to seat height, and some of the cheapest models skip even that, so the chair is effectively designed around a specific, assumed range of body proportions. If your own leg length or torso-to-leg ratio falls outside that range, a fixed-angle model gives you no way to compensate, unlike an office chair with independent seat height, tilt, and lumbar adjustments. Check the actual listed height range against your own measurements rather than trusting the word adjustable alone, and lean toward a rocking model if your proportions are on the tall or short end, since rocking designs allow more real-time postural adjustment."
  },
  {
    "criterion": "The 50/25/25 Rule for Realistic Daily Use",
    "explanation": "Ergonomists who study active sitting generally recommend a rough 50/25/25 split across a workday: roughly half the time in a traditional supportive chair, a quarter kneeling, and a quarter standing or walking, rather than committing to any single seating style all day. Treating a kneeling chair as a full replacement for your office chair skips this rotation and risks the fatigue and knee strain that come from sustained kneeling posture without a break. Plan to keep your existing chair or a standing desk setup in the same space, and treat the kneeling chair as one rotation option among several, not a wholesale replacement."
  }
];

export const faq = [
  {
    "q": "Are kneeling chairs actually good for your back?",
    "a": "They can help by reducing lumbar disc pressure by roughly 20% compared to sitting upright in a standard chair, since the forward tilt shifts weight onto your shins, but they are not a treatment for existing conditions like a herniated disc or sciatica, and they work best as part of a seating rotation, not a full-time replacement chair."
  },
  {
    "q": "How long can I sit in a kneeling chair each day?",
    "a": "Ergonomists generally recommend starting with 20 to 30 minute sessions and building up toward 2 to 4 hours at a stretch, then switching to a regular chair, following a rough 50/25/25 split between a normal chair, kneeling, and standing or walking across the day."
  },
  {
    "q": "Who should avoid using a kneeling chair?",
    "a": "Anyone with an existing knee injury, chronic knee pain, or leg circulation issues like varicose veins or swelling should check with a doctor first, since the sustained pressure on the shins can aggravate those conditions in a way a standard chair's flat seat doesn't."
  },
  {
    "q": "What's the difference between a rocking and a fixed kneeling chair?",
    "a": "A fixed kneeling chair holds one set tilt angle, while a rocking model lets you shift your weight and angle in real time, which helps compensate if your proportions fall outside the chair's originally assumed range and generally reduces fatigue over longer sessions."
  },
  {
    "q": "Do I need a kneeling chair with a backrest?",
    "a": "Most kneeling chairs skip the backrest entirely by design, to encourage active sitting, but a small number of hybrid models do include one; if you plan to use the chair for extended sessions, a backrest option gives you a passive rest position the classic design doesn't."
  },
  {
    "q": "Can a kneeling chair replace my office chair completely?",
    "a": "Ergonomists suggest rotating a kneeling chair with a traditional supportive chair and standing or walking breaks across the day, since sustained kneeling posture without a break leads to muscle fatigue and unnecessary knee strain over a full workday."
  }
];

export const guideSlug = "best-desky-kneeling-chairs";

export const guideTitle = "The Best Desky Kneeling Chairs for Comfortable Workdays";

export const heroImage = "https://m.media-amazon.com/images/I/418ipZlHWlL._SL500_.jpg";

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By How Long You'll Sit",
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
          "Regular rotation through the day",
          "Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned"
        ],
        [
          "",
          "NYPOT Ergonomic Kneeling Chair with Adjustable Seats"
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
          ""
        ],
        [
          "",
          "Desky Ergonomic Grey Kneeling Chair, Adjustable Wooden Frame with Cushioned"
        ],
        [
          "",
          "NYPOT Ergonomic Kneeling Chair with Adjustable Seats"
        ]
      ]
    }
  },
  {
    "subheading": "Fixed Tilt vs Rocking Design",
    "cards": [
      {
        "label": "",
        "text": "Simpler and usually cheaper, works well if your proportions match the assumed range."
      },
      {
        "label": "NYPOT Ergonomic Kneeling Chair with Adjustable Seats)",
        "text": "Lets you shift angle in real time, better if your proportions fall outside a typical range."
      }
    ],
    "note": "If you're notably tall or short, a rocking model gives you more real range of motion to compensate."
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
          "Want a passive rest option",
          "Check for a hybrid model with backrest"
        ],
        [
          "Fine with the classic backless design",
          "Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned"
        ]
      ]
    }
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "An adjustable shin pad and seat tilt, since a fixed, poorly-angled pad can concentrate pressure rather than relieve it."
      },
      {
        "label": "",
        "text": "Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned is worth checking against its specific tilt and cushioning spec before assuming it fits your back pain needs."
      }
    ]
  },
  {
    "subheading": "",
    "cards": [
      {
        "label": "",
        "text": "You plan to sit for longer stretches and want a genuine rocking mechanism and better cushioning, where NYPOT Ergonomic Kneeling Chair with Adjustable Seats justifies the extra cost."
      },
      {
        "label": "",
        "text": "You're rotating in short sessions and just want the basic kneeling posture benefit, where VEVOR Ergonomic Kneeling Chair already covers the job at the lowest price here."
      }
    ]
  }
];

export const howWeEvaluated = [
  {
    "title": "Weight Distribution Between Seat and Shins",
    "description": "A kneeling chair works by tilting the seat forward and letting the shins rest on a lower pad, which shifts part of your body weight off your lower back and onto your knees instead."
  },
  {
    "title": "No Backrest Means No Passive Rest Position",
    "description": "The lack of a backrest is central to how a kneeling chair works, it keeps your core engaged and discourages slouching, but it also removes any option to passively lean back when your muscles need a break."
  },
  {
    "title": "Knee and Circulation Health Before Buying",
    "description": "Because a kneeling chair puts sustained pressure on your shins and knees rather than your seat bones, it is generally not recommended for anyone with existing knee injuries, chronic knee pain, or circulation problems in the legs, including varicose veins or swelling."
  },
  {
    "title": "Adjustability Range vs Your Own Proportions",
    "description": "A kneeling chair's adjustability is usually limited to seat height, and some of the cheapest models skip even that, so the chair is effectively designed around a specific, assumed range of body proportions."
  },
  {
    "title": "The 50/25/25 Rule for Realistic Daily Use",
    "description": "Ergonomists who study active sitting generally recommend a rough 50/25/25 split across a workday: roughly half the time in a traditional supportive chair, a quarter kneeling, and a quarter standing or walking, rather than committing to any single seating style all day."
  }
];

export const introParagraphs = [
  "Across best desky kneeling chairs, range widely in real adjustability, given that differences show up in the fine print.",
  "What separates these picks is documented range and rocking capability, since these details matter more than claims."
];

export const lastUpdated = "2026-08-31";

export const mainKeyword = "desky kneeling chair";

export const metaDescription = "How 8 desky kneeling chairs compare on seat height, adjustment, support and warranty, with clear notes on who each one suits.";

export const metaTitle = "Best Desky Kneeling Chairs for Home Offices (2026)";

export const products: GuideProduct[] = [
  {
    "id": "best-desky-kneeling-chairs-1",
    "rank": 1,
    "badge": "Best Overall",
    "name": "Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned",
    "price": "$79.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418ipZlHWlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DX3G8M9R?tag=theofficejournal-20",
    "description": "Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned is the strongest all-around choice here. Designed to shift weight forward and open the hips, helping to improve spinal posture and reduce pressure on the lower back. 90° seat angle tilts the pelvis forward to engage your core and promote a more upright sitting position.\n\nDesky Ergonomic Grey Kneeling Chair, Adjustable Wooden Frame with Cushioned lands in a similar spot overall, but the deciding factor between the two is pneumatic lift system lets you easily adjust seat height to match your desk and body posture.\n\nGo with this pick if you want the strongest all-around pick in this comparison and would rather not keep shopping around. Without a backrest there's no passive rest position when muscles need relief, so alternating with a regular chair across the day matters more than the chair itself.",
    "specs": [
      "Designed to shift weight forward and open the hips",
      "90° seat angle tilts the pelvis forward to engage",
      "Pneumatic lift system lets you easily adjust seat height"
    ],
    "pros": [
      "Designed to shift weight forward and open the hips",
      "90° seat angle tilts the pelvis forward to engage",
      "Pneumatic lift system lets you easily adjust seat height",
      "Dual-layer foam in both the seat and knee pads"
    ],
    "cons": [
      "No backrest for passive resting during long sessions",
      "Not ideal for anyone with knee or circulation issues"
    ],
    "bestFor": "Buyers who want the strongest all-around pick in this comparison and would rather not keep shopping around"
  },
  {
    "id": "best-desky-kneeling-chairs-2",
    "rank": 2,
    "badge": "Also Worth Considering",
    "name": "Desky Ergonomic Grey Kneeling Chair, Adjustable Wooden Frame with Cushioned",
    "price": "$79.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/418ipZlHWlL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0C4WXJBNG?tag=theofficejournal-20",
    "description": "Desky Ergonomic Grey Kneeling Chair, Adjustable Wooden Frame with Cushioned is a strong alternative worth comparing directly against the top pick. Heavy-duty construction supports up to 265 lbs and resists wobbling or frame flex under daily use. Equipped with swivel casters for easy movement around your desk without straining or interrupting workflow.\n\nIdeal for home offices, minimalist setups, and shared workspaces, slides easily under desks when not in use, a detail worth checking closely before choosing between this and Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned.\n\nGo with this pick if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Anyone with knee injuries, circulation issues, or varicose veins should check with a doctor first, since the kneeling position puts sustained pressure on the shins.",
    "specs": [
      "Heavy-duty construction supports up to 265 lbs and resists",
      "Swivel casters for easy movement around your desk",
      "Ideal for home offices, minimalist setups, and shared workspaces"
    ],
    "pros": [
      "Heavy-duty construction supports up to 265 lbs and resists",
      "Swivel casters for easy movement around your desk",
      "Ideal for home offices, minimalist setups, and shared workspaces",
      "Soft, woven fabric is comfortable against the skin"
    ],
    "cons": [
      "Not ideal for anyone with knee or circulation issues",
      "No backrest for passive resting during long sessions"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desky-kneeling-chairs-3",
    "rank": 3,
    "badge": "Solid Alternative",
    "name": "Easyego Kneeling Chair Ergonomic Posture Chair",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41XrKY3QGdL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CSYPT8NR?tag=theofficejournal-20",
    "description": "Easyego Kneeling Chair Ergonomic Posture Chair is a strong alternative worth comparing directly against the top pick. It can be tailored to individual height is indeed beneficial for providing personalized comfort and support. The obtuse angle of the seat on kneeling chair ergonomic for office encourages a more natural and open posture.\n\nIt engagement of the core muscles helps to relieve pressure, also promotes better stability, a detail worth checking closely before choosing between this and Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned.\n\nThis fits best if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Without a backrest there's no passive rest position when muscles need relief, so alternating with a regular chair across the day matters more than the chair itself.",
    "specs": [
      "Angle adjustment",
      "Correct posture",
      "Better than traditional chair"
    ],
    "pros": [
      "Angle adjustment",
      "Correct posture",
      "Better than traditional chair",
      "Durability & comfort"
    ],
    "cons": [
      "No backrest for passive resting during long sessions",
      "Not ideal for anyone with knee or circulation issues"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desky-kneeling-chairs-4",
    "rank": 4,
    "badge": "Best Premium Pick",
    "name": "NYPOT Ergonomic Kneeling Chair with Adjustable Seats",
    "price": "$189.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41AxbTnXbuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B09TR668V5?tag=theofficejournal-20",
    "description": "NYPOT Ergonomic Kneeling Chair with Adjustable Seats is the priciest pick in this lineup. The ergonomic cushioned seat adjusts smoothly to support different user heights, helping you find a comfortable sitting position. This ergonomic kneeling chair encourages a more upright sitting position by helping you distribute weight between your hips and legs.\n\nDesky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned covers similar ground, though this kneeling office chair features a gentle rocking motion that helps shift pressure points and reduces stiffness from long sitting sessions is what tips the choice one way or the other.\n\nIt's worth picking this one if you are willing to spend the most in this comparison for the fuller feature set that comes with it. Anyone with knee injuries, circulation issues, or varicose veins should check with a doctor first, since the kneeling position puts sustained pressure on the shins.",
    "specs": [
      "Adjustable height",
      "Improve posture",
      "Kneeling office chair features a gentle rocking motion"
    ],
    "pros": [
      "Adjustable height",
      "Improve posture",
      "Kneeling office chair features a gentle rocking motion",
      "Modern ergonomic design, this kneeling chair can be used"
    ],
    "cons": [
      "Not ideal for anyone with knee or circulation issues",
      "No backrest for passive resting during long sessions"
    ],
    "bestFor": "Buyers who are willing to spend the most in this comparison for the fuller feature set that comes with it"
  },
  {
    "id": "best-desky-kneeling-chairs-5",
    "rank": 5,
    "badge": "Runner-Up Pick",
    "name": "GIANTEX Ergonomic Kneeling Chair for Office",
    "price": "$79.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41rqAquo+CL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FJM9TWC9?tag=theofficejournal-20",
    "description": "GIANTEX Ergonomic Kneeling Chair for Office is a strong alternative worth comparing directly against the top pick. The mobile ergonomic kneeling chair comes with a padded kneeling cushion, which offers substantial knee support and eases the pressure off your lower back. The posture correction chair features a gas rod adjustment mechanism, making it easily customizable to suit various heights and desk configurations.\n\nSide by side with Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned, the real difference worth noting is with 4-inch thick padded cushions made from high-density sponge, the ergonomic kneeling chair promises not only ultimate comfort but a form-fitting support that contours perfectly to your body.\n\nThis makes sense for anyone who want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Without a backrest there's no passive rest position when muscles need relief, so alternating with a regular chair across the day matters more than the chair itself.",
    "specs": [
      "Ergonomic seating option",
      "Flexible height adjustment",
      "Comfortable cushions"
    ],
    "pros": [
      "Ergonomic seating option",
      "Flexible height adjustment",
      "Comfortable cushions",
      "Mobility & stability enhancements"
    ],
    "cons": [
      "No backrest for passive resting during long sessions",
      "Not ideal for anyone with knee or circulation issues"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desky-kneeling-chairs-6",
    "rank": 6,
    "badge": "Worth a Look",
    "name": "DRAGONN by VIVO Ergonomic Kneeling Chair with Back Support",
    "price": "$139.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41ZahdRw4-L._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B089DQ1YKC?tag=theofficejournal-20",
    "description": "DRAGONN by VIVO Ergonomic Kneeling Chair with Back Support is a strong alternative worth comparing directly against the top pick. Heavy duty - this ergonomic kneeling stool is designed with a strong metal base and is constructed to last, your new rolling kneeling chair supports up to 250 lbs. Your new kneeling stool is ideal fit for your home, office, classroom, or anywhere you need a little extra support.\n\nSet next to Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned, the two land close enough on paper that it's worth comparing both listings directly on the spec that matters most for your setup.\n\nIt's worth picking this one if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Anyone with knee injuries, circulation issues, or varicose veins should check with a doctor first, since the kneeling position puts sustained pressure on the shins.",
    "specs": [
      "Better posture while tilted - there is no reason",
      "Heavy duty - this ergonomic kneeling stool is designed",
      "Your new kneeling stool is ideal fit"
    ],
    "pros": [
      "Better posture while tilted - there is no reason",
      "Heavy duty - this ergonomic kneeling stool is designed",
      "Your new kneeling stool is ideal fit",
      "Height adjustable - you can adjust the dragonn chair"
    ],
    "cons": [
      "Not ideal for anyone with knee or circulation issues",
      "No backrest for passive resting during long sessions"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desky-kneeling-chairs-7",
    "rank": 7,
    "badge": "Great Alternative",
    "name": "GIANTEX Ergonomic Kneeling Desk Chair",
    "price": "$72.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/51oe0VTOdkL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0DTK2212L?tag=theofficejournal-20",
    "description": "GIANTEX Ergonomic Kneeling Desk Chair is a strong alternative worth comparing directly against the top pick. The ergonomic kneeling chair helps maintain an upright posture, reduces pressure on the spine, and alleviates back and neck pain caused by long hours of working. Dynamic swing in the office helps to reduce the stiffness of the body, enhance blood circulation, while naturally supporting the body to maintain a correct posture.\n\nWeighing this against Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned, the frame made of solid wood ensures your safety when using, and can bear up to 330 pounds ends up being the detail that matters most for most buyers.\n\nThis one is the right call if you want a genuine alternative to the top pick with a different tradeoff worth comparing directly. Without a backrest there's no passive rest position when muscles need relief, so alternating with a regular chair across the day matters more than the chair itself.",
    "specs": [
      "Ergonomic design",
      "Dynamic rocking motion",
      "High quality solid wood frame"
    ],
    "pros": [
      "Ergonomic design",
      "Dynamic rocking motion",
      "High quality solid wood frame",
      "Comfort experience"
    ],
    "cons": [
      "No backrest for passive resting during long sessions",
      "Not ideal for anyone with knee or circulation issues"
    ],
    "bestFor": "Buyers who want a genuine alternative to the top pick with a different tradeoff worth comparing directly"
  },
  {
    "id": "best-desky-kneeling-chairs-8",
    "rank": 8,
    "badge": "Best Value",
    "name": "VEVOR Ergonomic Kneeling Chair",
    "price": "$66.90",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41vaIyf03XL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GMTG799S?tag=theofficejournal-20",
    "description": "VEVOR Ergonomic Kneeling Chair is the most affordable pick here that still clears the capability floor for this category. Adjust our kneeling desk chair with side screws to fit different heights and desk setups, rocking base helps reduce stiff sitting so you can read, think, or work with more ease. Solid wood frame with 265 lbs/120 kg load capacity, bottom strips add grip to help limit sliding or tipping and help avoid floor scratches.\n\nUse this kneeling chair as a posture chair, meditation chair, office chair, or study chair, great for a home office or study area, supports active sitting for working, reading, or relaxing with better focus, which is the main thing that distinguishes this pick from Desky Ergonomic Black Kneeling Chair, Adjustable Wooden Frame with Cushioned.\n\nChoose this if you want a capable pick without paying for headroom you won't use. Anyone with knee injuries, circulation issues, or varicose veins should check with a doctor first, since the kneeling position puts sustained pressure on the shins.",
    "specs": [
      "Adjustable design",
      "Thick cushions",
      "Stable frame"
    ],
    "pros": [
      "Adjustable design",
      "Thick cushions",
      "Stable frame",
      "Multi-purpose use"
    ],
    "cons": [
      "Not ideal for anyone with knee or circulation issues",
      "No backrest for passive resting during long sessions"
    ],
    "bestFor": "Buyers who want a capable pick without paying for headroom you won't use"
  }
];

export const readTime = "11 min";

export const relatedGuides = [
  {
    "href": "/guide/best-kneeling-chairs",
    "title": "Best Kneeling Chairs"
  },
  {
    "href": "/guide/best-ergonomic-kneeling-chairs",
    "title": "Best Ergonomic Kneeling Chairs"
  },
  {
    "href": "/guide/best-drafting-chairs",
    "title": "Best Drafting Chairs"
  }
];

export const breadcrumbLabel = "Best Desky Kneeling Chairs";
