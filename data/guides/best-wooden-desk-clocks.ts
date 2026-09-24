export const guideSlug = "best-wooden-desk-clocks";
export const guideTitle = "2 Best Wooden Desk Clocks in 2026";
export const metaTitle = "Best Wooden Desk Clocks (2026)";
export const metaDescription =
  "An honest, short guide to genuinely wood-material desk clocks. Only two verified real-wood picks turned up in our research, here they are.";
export const mainKeyword = "wooden desk clock";
export const introParagraphs = [
  "Many desk clocks marketed with a wood-look or walnut-style finish are actually plastic or composite material printed to resemble wood grain, which makes shopping for a genuinely wood-material clock harder than it should be. Rather than pad this guide with wood-look products we couldn't verify as real wood, we're covering only the two clocks in our research pool with confirmed wood construction.",
  "Both picks below take different approaches, a small minimalist analog clock built entirely from wood, and a flip clock that pairs a wood base with an electronic display. If neither fits your style, our modern and vintage desk clock guides cover a wider range of materials and finishes.",
];
export const lastUpdated = "2026-08-06";
export const readTime = "5 min";
export const heroImage = "https://m.media-amazon.com/images/I/41-TkueeUEL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: string; reviews: string;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}
export interface BuyingCriterion { criterion: string; explanation: string; }
export interface FaqItem { q: string; a: string; }

export const products: GuideProduct[] = [
  {
    id: "b093wgr49d-wood",
    rank: 1,
    badge: "Best Overall Wooden Desk Clock",
    name: "Navaris Small Modern Desk Clock, 4-3/8 Inch Diameter Real Wood Analog Clock for Shelf, Table, Desktop, Silent Tick Battery Operated Clock, Light Brown",
    price: "See price on Amazon",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41-TkueeUEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B093WGR49D?tag=theofficejournal-20",
    description: "This is a genuinely wood-built clock, the listing confirms real wood construction rather than a printed wood-look finish, at a compact 4-3/8 inch diameter. The light brown tone shows real wood grain in a way plastic alternatives cannot replicate.\n\nIt earns the top spot in this comparison over FOSA Flip Desk Clock for one main reason. Confirmed real wood material, not a printed finish. On price, it's priced at an unlisted price you'll need to confirm on Amazon, which is worth weighing if cost is your deciding factor between the two.\n\nWorth knowing before you decide: Silent movement, no ticking distraction. On the other side, Verify current review data on the listing. That's the main tradeoff to weigh against everything above. The price wasn't listed at the time of research, so confirm current cost on Amazon before deciding.",
    specs: ["4-3/8 inch diameter","Real wood construction","Silent tick analog movement","Battery operated"],
    pros: ["Confirmed real wood material, not a printed finish","Silent movement, no ticking distraction","Compact size for tight desks","Genuine wood grain visible in the finish"],
    cons: ["Small face limits visual impact from a distance","Fewer wood-tone options available at this size","Verify current review data on the listing"],
    bestFor: "Buyers wanting a genuinely wood-built, compact, silent analog clock.",
  },
  {
    id: "b0crbjj6w4-wood",
    rank: 2,
    badge: "Best Wood-Base Flip Clock",
    name: "FOSA Flip Desk Clock, Black",
    price: "$51.99",
    rating: "Verified Amazon listing",
    reviews: "Verified Amazon listing",
    imageUrl: "https://m.media-amazon.com/images/I/41yZW1xjgmL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRBJJ6W4?tag=theofficejournal-20",
    description: "Unlike the fully wood-built pick above, this flip clock pairs a walnut wood base with a black flip display and electronic movement, so the wood construction covers the base rather than the entire housing. It still gives real wood material presence on a desk, just combined with a different display style.\n\nOne spot below Navaris Small Modern Desk Clock in this ranking, pricing between it and Navaris Small Modern Desk Clock isn't directly comparable here. The compromise here is straightforward: Wood covers only the base, not the full housing. What you gain in return: Confirmed wood base material. Whether that trade is worth it depends on which side matters more to you.\n\nWorth knowing before you decide: Silent movement, no mechanical click. On the other side, Verify current review data on the listing. That's the main tradeoff to weigh against everything above.",
    specs: ["Walnut wood base","Silent electronic movement","Black flip display","Desk placement"],
    pros: ["Confirmed wood base material","Silent movement, no mechanical click","Combines wood material with flip-clock styling","Distinct look from a fully wood clock"],
    cons: ["Wood covers only the base, not the full housing","Higher price than the fully wood pick above","Verify current review data on the listing"],
    bestFor: "Buyers wanting wood material combined with flip-clock display styling rather than a fully analog wood clock.",
  }
];

export interface HowWeEvaluatedItem { title: string; description: string; }
export const howWeEvaluated: HowWeEvaluatedItem[] = [
  { title: "Verified genuine wood material from listing details before including any product", description: "Confirmed real wood construction claims in the product listing rather than assuming a wood-look finish or wood-toned plastic qualifies." },
  { title: "Declined to pad the list with wood-look plastic clocks", description: "Kept this guide to only the two confirmed wood-material products in our research pool rather than stretching wood-toned finishes to inflate the count." },
  { title: "Distinguished full wood construction from a wood base or accent", description: "Called out clearly which pick is entirely wood-built versus which uses wood only as a base component." },
  { title: "Compared movement type and noise level for both picks", description: "Checked silent movement on both clocks, since a genuinely wood-material clock is often sat close to a desk where noise matters." },
];

export interface HowToChooseSection { subheading: string; intro?: string; table?: { headers: string[]; rows: string[][] }; cards?: { label: string; text: string }[]; note?: string; }
export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "By Movement Type",
    "table": {
      "headers": [
        "What you want",
        "Recommended pick in this comparison"
      ],
      "rows": [
        [
          "A quiet, non-ticking movement",
          "Navaris Small Modern Desk Clock"
        ],
        [
          "A digital, fully silent display",
          "FOSA Flip Desk Clock"
        ],
        [
          "Maximum visual personality (flip or mechanical action)",
          "FOSA Flip Desk Clock"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $52",
          "FOSA Flip Desk Clock"
        ]
      ]
    }
  },
  {
    "subheading": "Battery-Powered vs Corded",
    "cards": [
      {
        "label": "Battery-Powered",
        "text": "Runs on batteries alone, so it can sit anywhere on a desk or shelf with no cord in the way, at the cost of an eventual battery swap. In this comparison: Navaris Small Modern Desk Clock, FOSA Flip Desk Clock."
      },
      {
        "label": "Corded (Plug-In)",
        "text": "Draws continuous power from a wall outlet, often adding features like USB charging ports or a battery backup for outages, but it has to sit within cord length of a plug. In this comparison: none in this specific roundup, since most picks here are battery powered."
      }
    ],
    "note": "Most buyers should default to a battery-powered pick like FOSA Flip Desk Clock unless you specifically want the USB charging or dimmer features that typically come with corded models."
  },
  {
    "subheading": "By Purpose: Everyday Use vs Gift",
    "table": {
      "headers": [
        "Your purpose",
        "Recommended pick"
      ],
      "rows": [
        [
          "Everyday functional desk use",
          "Navaris Small Modern Desk Clock"
        ],
        [
          "A gift or milestone piece",
          "FOSA Flip Desk Clock"
        ]
      ]
    }
  },
  {
    "subheading": "For Buying as a Gift Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "Genuine material language, such as hand carved, real marble, or real crystal, rather than a marble-look or crystal-look plastic finish, plus a stated production or engraving lead time if personalization is involved."
      },
      {
        "label": "In this comparison",
        "text": "FOSA Flip Desk Clock fits this specifically: Confirmed wood base material. That's the kind of detail that signals a deliberate gift rather than a purely functional purchase."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "note": "Every pick in this specific comparison sits in a similar price range, so the decision here comes down to style and features rather than a budget-versus-premium tradeoff. Check the pros and cons above for what actually differs between them."
  }
];

export const buyingCriteria: BuyingCriterion[] = [
  {
    "criterion": "Decide whether ticking noise matters to you",
    "explanation": "A standard quartz movement advances its second hand once per second and produces an audible tick you can hear from a few feet away, while a silent sweep or silent electronic movement moves continuously with no tick at all.\n\nThis matters more than it sounds like it should: a clock that ticks audibly for eight hours a day within arm's reach of where you work becomes a genuine background irritant for a lot of people, even if they don't consciously register it as a complaint until the clock is removed or replaced.\n\nTo check this before buying, search the listing for the words \"silent,\" \"non-ticking,\" or \"sweep movement\" specifically, since a listing that doesn't mention noise at all is very likely a standard audible-tick quartz movement."
  },
  {
    "criterion": "Match the face or display size to real viewing distance",
    "explanation": "The size printed in a listing, usually in inches, measures the clock's case or face diameter, but that number alone doesn't tell you how easily you'll actually be able to read the time from where you sit.\n\nA 3 to 4 inch face reads fine from arm's length at a desk but becomes genuinely hard to read from across a room or a doorway, which matters if the clock's real job is to be glanced at from a distance rather than up close.\n\nCheck the listing's stated dimensions against your actual distance from where the clock will sit, and for digital models, look specifically for the digit height in inches rather than the overall unit size, since a large plastic housing can still contain small digits."
  },
  {
    "criterion": "Confirm the power source before you plan where it goes",
    "explanation": "Desk clocks are either battery powered, meaning they can sit anywhere with no cord in the way, or corded and plugged into a wall outlet, sometimes with a battery backup that keeps the display running briefly during an outage.\n\nThis is a genuinely practical constraint, not a minor spec: a corded clock needs to sit within cord-length of an outlet, which can rule out the center of a desk or a shelf far from a plug, while a battery clock can go anywhere but will eventually need a battery swap.\n\nLook for \"battery operated\" versus \"plug-in\" or \"AC powered\" directly in the listing title or bullet points, and treat advertised USB charging ports as a strong signal the unit is corded rather than battery-only."
  },
  {
    "criterion": "Separate gift-tier materials from everyday functional clocks",
    "explanation": "Clocks made from marble or crystal, or featuring custom engraving, are priced and designed first as a gift or a statement object, with everyday timekeeping treated as secondary, while clocks built from plastic or basic wood with digital or simple analog displays are priced for everyday practical use.\n\nBuying a hand-carved marble clock expecting the same day-to-day practicality as a basic digital clock with a dimmer and USB ports will lead to disappointment, since these are genuinely different product categories that happen to share a name.\n\nCheck whether the listing emphasizes material and craftsmanship language (hand carved, polished, engraved) versus functional language (auto DST, dual alarms, temperature display) to quickly tell which tier a given clock falls into."
  },
  {
    "criterion": "Check for lead time if the piece is personalized or engraved",
    "explanation": "Custom engraving or personalization isn't applied instantly at a warehouse the way a standard product ships; it typically requires a separate production step after you submit your design or text, which the seller has to complete before the item even enters the shipping queue.\n\nThis means a personalized clock ordered as a last-minute gift can easily miss a deadline that a standard, non-personalized clock would have made with days to spare, since the engraving step alone commonly adds several business days on top of normal shipping time.\n\nBefore ordering a personalized piece for a specific date, check the listing's stated production or processing time, which is separate from shipping time, and order with enough buffer for both steps to finish before you need it."
  }
];

export const faq: FaqItem[] = [
  { q: "Why does this guide only have two products?", a: "Genuinely wood-material desk clocks, confirmed real wood rather than a wood-look plastic finish, are a small category in our verified research. We chose accuracy over padding the list." },
  { q: "How do I know if a desk clock is really made of wood?", a: "Check the listing for explicit language like real wood or solid wood construction. A wood-look or wood-style description often means a printed plastic or composite finish instead." },
  { q: "Is the FOSA flip clock fully made of wood?", a: "No, only its base is wood, the display housing above it is a separate electronic flip mechanism." },
  { q: "What if I want more wood clock options?", a: "Our research didn't turn up additional confirmed wood-material desk clocks at this time, check our modern or marble desk clock guides for other genuine material options." },
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-modern-desk-clocks", title: "Best Modern Desk Clocks (2026)" },
  { href: "/guide/best-flip-desk-clocks", title: "Best Flip Desk Clocks (2026)" },
  { href: "/guide/best-marble-desk-clocks", title: "Best Marble Desk Clocks (2026)" },
];
