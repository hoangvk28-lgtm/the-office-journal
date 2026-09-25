// Editorial rewrite for The Office Journal (docs/editorial-guide.md).
// Commerce fields (ids, ranks, prices, images, affiliate URLs) are carried over unchanged.
import type { GuideProduct, HowToChooseSection } from "@/components/guide/RichGuidePage";

export const guideSlug = "best-magnetic-desk-pads";

export const guideTitle = "The Best Magnetic Desk Pads for Cable Control, Charging and Organizers";

export const breadcrumbLabel = "Best Magnetic Desk Pads";

export const metaTitle = "Best Magnetic Desk Pads: Cable, Charging and Organizer Mats (2026)";

export const metaDescription = "\"Magnetic\" desk pads do different things: hold cables, attach organizers or charge a phone. We compared eight on what the magnets do, size, surface and extras.";

export const mainKeyword = "desk pad magnetic";

export const introParagraphs = [
  "A magnetic desk pad can mean three quite different things. Some embed a magnetic strip or plate to hold cables and small accessories; some are systems where organizers snap onto the mat; and some use magnets to align a phone on a built-in wireless charger. Decide which you want before comparing sizes.",
  "Size still matters as with any desk pad: measure your keyboard and mouse side by side and choose a pad that covers both. Surface matters too: PU leather wipes clean, while fabric mouse surfaces are designed for smoother tracking but absorb spills more readily.",
  "Our comparison is based on published specifications and listed features, not hands-on testing. One pick, a small magnetic project mat, is for holding screws and parts rather than covering a desk."
];

export const lastUpdated = "2026-08-31";

export const readTime = "11 min";

export const heroImage = "https://m.media-amazon.com/images/I/416mGg8nzrL._SL500_.jpg";

export const products: GuideProduct[] = [
  {
    "id": "best-magnetic-desk-pads-1",
    "rank": 1,
    "badge": "Best Paper-Stashing Desk Pad",
    "name": "elago Smart Magnetic Desk Pad for Office and Home",
    "price": "$35.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/416mGg8nzrL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CZK3JRZ8?tag=theofficejournal-20",
    "description": "The elago Smart Magnetic Desk Pad is designed to organize the desktop, and its standout listed feature is a place to stash papers within the mat itself. elago says its products are designed in house.\n\nThe listing summary gives few measurable details, such as size, surface material or what the magnets hold, so check the product page before buying.",
    "specs": [
      "Feature: paper storage in the mat",
      "Magnetic organization (details on listing)",
      "Size and surface: check listing"
    ],
    "pros": [
      "Built-in paper storage",
      "Designed for desk organization",
      "Mid-range price"
    ],
    "cons": [
      "Few specifications in the listing summary",
      "Size not stated here",
      "Magnet function not detailed"
    ],
    "bestFor": "Keeping loose papers tucked away on a tidy desk.",
    "summary": "elago's magnetic desk pad, designed in house, with a place to stash papers in the mat.",
    "skipIf": "You want clearly listed specifications; the Spigen states material, size and magnet type."
  },
  {
    "id": "best-magnetic-desk-pads-2",
    "rank": 2,
    "badge": "Best Large Mat with Wrist Support",
    "name": "Magnetic Desk Mat System with Wrist Support 80×40cm",
    "price": "$49.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UbY8P5ijL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGRBXFKM?tag=theofficejournal-20",
    "description": "This magnetic mat system combines a large 80 x 40 cm surface with a wrist support, and its magnets are designed to secure cables, notes, clips and small tools. The listing describes it as waterproof and easy to clean.\n\nIt was one of the more expensive pads here at the time of writing, and the brand isn't named in the listing title.",
    "specs": [
      "Size: 80 x 40 cm",
      "Wrist support: included",
      "Magnetic hold: cables, notes, clips, tools",
      "Waterproof, easy to clean (per listing)"
    ],
    "pros": [
      "Large surface",
      "Wrist support",
      "Holds several small items"
    ],
    "cons": [
      "Costs more than most here",
      "Brand unclear",
      "Magnet strength not quantified"
    ],
    "bestFor": "A large desk where you want cables and small items held in place.",
    "summary": "An 80 x 40 cm magnetic mat system with wrist support, designed to hold cables, notes and small tools.",
    "skipIf": "You don't need wrist support; the Spigen is a simpler cable-magnet pad."
  },
  {
    "id": "best-magnetic-desk-pads-3",
    "rank": 3,
    "badge": "Best Leather Cable-Magnet Pad",
    "name": "Spigen PU Leather Desk Pad with Built-in Cable Magnets 35.4\"x15.7\"",
    "price": "$39.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/31-A9h5IKtL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0B3SGGRLY?tag=theofficejournal-20",
    "description": "The Spigen is the straightforward choice for cable control: a 35.4 x 15.7-inch vegan leather pad with an embedded magnetic plate, water-resistant and easy to clean.\n\nA rubber-padded base keeps it from sliding and protects the desk. It has no charging or organizers, which keeps it simple.",
    "specs": [
      "Size: 35.4 x 15.7\"",
      "Material: vegan (velo) leather",
      "Magnets: embedded plate for cables",
      "Base: rubber, non-slip",
      "Water-resistant"
    ],
    "pros": [
      "Clearly specified",
      "Wipe-clean leather",
      "Non-slip base"
    ],
    "cons": [
      "No charging",
      "No organizers",
      "Leather surface is less ideal for some mice"
    ],
    "bestFor": "Keeping charging cables at the desk edge on a clean, simple pad.",
    "summary": "A 35.4 x 15.7-inch vegan leather pad with an embedded magnetic plate for cables and a rubber base.",
    "skipIf": "You want to charge your phone on the pad; the charging mouse pads here do that."
  },
  {
    "id": "best-magnetic-desk-pads-4",
    "rank": 4,
    "badge": "Best Value Charging Mat",
    "name": "Magnetic Wireless Charging Mouse Pad",
    "price": "$31.98",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DWDdDX2PL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0FHJYYNH8?tag=theofficejournal-20",
    "description": "This charging mouse pad puts wireless charging into the mat: magnets align a compatible iPhone for 15W charging, and a slot charges AirPods at 5W. Its micro-woven fabric surface is designed for smooth mouse tracking.\n\nAt 27.5 x 11.8 inches it's smaller than most pads here, and it needs a power connection. Check phone compatibility on the listing.",
    "specs": [
      "Size: 27.5 x 11.8\"",
      "Charging: 15W magnetic phone + 5W earbuds",
      "Surface: micro-woven fabric",
      "Compatibility: iPhone 12–17 (per listing)"
    ],
    "pros": [
      "Phone and earbud charging",
      "Lower price than the other charging mat",
      "Smooth fabric surface"
    ],
    "cons": [
      "Smaller than most here",
      "Needs power",
      "Fabric absorbs spills"
    ],
    "bestFor": "Charging a phone and earbuds on the mat itself.",
    "summary": "A 27.5 x 11.8-inch fabric mat with 15W magnetic phone charging and 5W earbud charging.",
    "skipIf": "You need a larger surface; the premium charging mat is 31.5 x 15.8 inches."
  },
  {
    "id": "best-magnetic-desk-pads-5",
    "rank": 5,
    "badge": "Best Modular Organizer Set",
    "name": "KDD Desk Pad Mat Set",
    "price": "$34.95",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41v9DX0m7VL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0CH9Y1K2N?tag=theofficejournal-20",
    "description": "The KDD set turns the desk pad into an organizer: magnetic pen holders, a card case, a cup holder and a foldable tablet stand can be placed where you want them on the 31.5 x 14-inch PU leather pad.\n\nThat suits a desk that needs organizing more than cable control. The accessories take up surface space, so a smaller desk may feel crowded.",
    "specs": [
      "Size: 31.5 x 14\"",
      "Material: PU leather",
      "Accessories: pen holders, card case, cup holder, tablet stand (magnetic)"
    ],
    "pros": [
      "Modular accessories",
      "PU leather wipes clean",
      "Moderate price"
    ],
    "cons": [
      "Accessories use desk space",
      "Magnet strength not stated",
      "No charging"
    ],
    "bestFor": "Organizing pens, cards and a tablet on one mat.",
    "summary": "A 31.5 x 14-inch PU leather pad with repositionable magnetic pen, card, cup and tablet holders.",
    "skipIf": "You only want cable control; the Spigen is simpler."
  },
  {
    "id": "best-magnetic-desk-pads-6",
    "rank": 6,
    "badge": "Best Full-Size Charging Mat",
    "name": "Wireless Charging Mouse Pad with Magnetic Phone Stand",
    "price": "$64.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41bw96L5GuL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GSQQJN3G?tag=theofficejournal-20",
    "description": "This premium mat combines an extra-large 31.5 x 15.8-inch surface with a magnetic wireless charging stand that charges two devices at once, and an anti-slip natural rubber base.\n\nThe listing says it replaces a separate mouse pad, charging stand, earbud charger and wall adapter. It was the most expensive pad here at the time of writing.",
    "specs": [
      "Size: 31.5 x 15.8\" (800 x 400 mm)",
      "Charging: magnetic stand, 2 devices simultaneously",
      "Base: natural rubber, anti-slip"
    ],
    "pros": [
      "Large surface",
      "Charges two devices",
      "Phone stand"
    ],
    "cons": [
      "Most expensive here",
      "Needs power",
      "Charging wattage not stated in this summary"
    ],
    "bestFor": "A full-size desk mat with charging built in.",
    "summary": "An 800 x 400 mm mat with magnetic wireless charging, a phone stand and two-device charging.",
    "skipIf": "A smaller mat is fine; the 27.5-inch charging pad costs about half as much."
  },
  {
    "id": "best-magnetic-desk-pads-7",
    "rank": 7,
    "badge": "Parts Mat, Not a Desk Pad",
    "name": "Magnetic Mat Magnetic Project Mat with Waterproof Surface & Dry Erase Pen",
    "price": "$8.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41UJ4T4KPXL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B07WKXH5B3?tag=theofficejournal-20",
    "description": "This magnetic project mat is a different product: an 11.8 x 9.8-inch flexible, waterproof PVC mat with a grid and dry-erase marker, designed to hold screws, drill bits and small electronic parts during repairs.\n\nIt was by far the cheapest item here, but it won't cover a keyboard and mouse.",
    "specs": [
      "Size: 11.8 x 9.8\"",
      "Material: flexible waterproof PVC",
      "Grid with dry-erase marker",
      "Use: holding screws and small parts"
    ],
    "pros": [
      "Very low price",
      "Keeps small parts from rolling",
      "Write-on grid"
    ],
    "cons": [
      "Not a desk pad",
      "Too small for keyboard or mouse",
      "Different use case"
    ],
    "bestFor": "Electronics or PC repair at the desk.",
    "summary": "An 11.8 x 9.8-inch magnetic grid mat with dry-erase surface for screws and small parts.",
    "skipIf": "You want a desk pad; any other pick here covers a work surface."
  },
  {
    "id": "best-magnetic-desk-pads-8",
    "rank": 8,
    "badge": "Best Double-Sided Pad",
    "name": "Promattoo Desk Mat, Double-Sided Vegan Leather & Felt",
    "price": "$37.99",
    "rating": null,
    "reviews": null,
    "imageUrl": "https://m.media-amazon.com/images/I/41DvTZrE7HL._SL500_.jpg",
    "amazonUrl": "https://www.amazon.com/dp/B0GGT5GR96?tag=theofficejournal-20",
    "description": "The Promattoo is reversible, with vegan leather on one side and felt on the other, and adds a magnetic cable organizer and a file storage section.\n\nThe leather side is listed as waterproof and oil-resistant, and a non-slip bottom keeps it in place. Its size isn't stated in the listing summary.",
    "specs": [
      "Surface: vegan leather / felt (reversible)",
      "Magnetic cable organizer",
      "File storage section",
      "Non-slip bottom"
    ],
    "pros": [
      "Two surfaces",
      "Cable organizer",
      "File storage"
    ],
    "cons": [
      "Size not stated here",
      "Magnet details limited",
      "Felt side absorbs spills"
    ],
    "bestFor": "Switching between a wipe-clean and a softer surface.",
    "summary": "A reversible vegan leather and felt pad with a magnetic cable organizer and file storage.",
    "skipIf": "You want a stated size; the Spigen lists 35.4 x 15.7 inches."
  }
];

export const howWeEvaluated = [
  {
    "title": "Magnetic function",
    "description": "We grouped pads by what their magnets do."
  },
  {
    "title": "Size and surface",
    "description": "We compared dimensions and materials as listed."
  },
  {
    "title": "Extras",
    "description": "We noted charging, organizers, wrist support and storage."
  },
  {
    "title": "Price",
    "description": "We compared prices at the time of writing."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Decide what the magnets should do",
    "explanation": "Cable-holding plates (Spigen, Promattoo), snap-on organizers (KDD), or magnetic phone charging (the two charging mats) solve different problems."
  },
  {
    "criterion": "Size for keyboard and mouse",
    "explanation": "Pads here run from 27.5 to about 35 inches wide. Measure your keyboard and mouse side by side."
  },
  {
    "criterion": "Choose the surface",
    "explanation": "PU leather wipes clean; fabric is designed for mouse tracking but absorbs spills."
  },
  {
    "criterion": "Check charging details",
    "explanation": "Charging mats need power and work with specific phones; check compatibility and wattage."
  }
];

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By need",
    "table": {
      "headers": [
        "Need",
        "Consider"
      ],
      "rows": [
        [
          "Cable control, simple",
          "Spigen PU leather pad"
        ],
        [
          "Large mat with wrist rest",
          "80 x 40 cm magnetic mat system"
        ],
        [
          "Desk organizers",
          "KDD Desk Pad Mat Set"
        ],
        [
          "Phone charging, value",
          "27.5\" magnetic charging mouse pad"
        ],
        [
          "Phone charging, full size",
          "Charging mouse pad with magnetic stand"
        ],
        [
          "Reversible surfaces",
          "Promattoo"
        ],
        [
          "Paper storage",
          "elago"
        ],
        [
          "Repair parts",
          "Magnetic project mat"
        ]
      ]
    }
  }
];

export const faq = [
  {
    "q": "What does a magnetic desk pad do?",
    "a": "Depending on the model, magnets hold cables or small tools, attach organizers, or align a phone for wireless charging."
  },
  {
    "q": "What size do I need?",
    "a": "Measure your keyboard and mouse side by side and allow some margin; full-size pads here are about 31 to 35 inches wide."
  },
  {
    "q": "Leather or fabric?",
    "a": "Leather and PU wipe clean; fabric surfaces are designed for mouse tracking but absorb spills more readily."
  },
  {
    "q": "Do charging mats need power?",
    "a": "Yes. They connect to power, and phone compatibility varies by model."
  },
  {
    "q": "Will a desk pad slide?",
    "a": "Rubber or non-slip bases, like the Spigen's and the premium charging mat's, help keep it in place."
  }
];

export const bottomLine = [
  "For cable control, the Spigen is the clearly specified, simple option, and the Promattoo adds a reversible surface. The KDD set suits a desk that needs organizers more than cable management.",
  "If you want charging built in, the 27.5-inch charging pad is the value choice and the larger charging mat covers a full desk. The small project mat is for holding repair parts, not covering a desk."
];

export const relatedGuides = [
  {
    "href": "/guide/best-leather-desk-pads",
    "title": "Best Leather Desk Pads"
  },
  {
    "href": "/guide/best-large-desk-pads",
    "title": "Best Large Desk Pads"
  },
  {
    "href": "/guide/best-desk-pads-with-wrist-support",
    "title": "Best Desk Pads with Wrist Support"
  }
];
