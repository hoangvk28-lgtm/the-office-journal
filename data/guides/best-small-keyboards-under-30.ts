export const guideSlug = "best-small-keyboards-under-30";
export const guideTitle = "6 Best Small Keyboards Under $30 in 2026";
export const metaTitle = "Best Small Keyboards Under $30";
export const metaDescription = "We compared small keyboards under $30 by connection type and battery setup, since a compact layout alone doesn't guarantee comfortable typing.";
export const mainKeyword = "small keyboard under $30";
export const introParagraphs = [
  "Dropping the number pad is what makes these keyboards small, but that single change affects more than desk space: without a numpad, your mouse sits closer to the keyboard's main keys, which most ergonomics guidance points to as a more natural shoulder position for long typing sessions.",
  "We looked past \"compact\" as a marketing word to compare actual connection type (2.4GHz USB dongle versus true Bluetooth), key travel style, and battery arrangement, since these three details vary more between picks in this price range than the small footprint itself does."
];
export const lastUpdated = "2026-09-09";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/31JeP36QFCL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-small-keyboards-under-30-1",
    rank: 1,
    badge: "Best Overall",
    name: "Cherry Stream Wired Keyboard Without Number Pad, Compact TKL",
    price: "$24.83",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31JeP36QFCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09N9CPX34?tag=theofficejournal-20",
    description: "Cherry names its own SX scissor switch technology directly in this listing, a mechanism built around a precise, consistent pressure point rather than a generic membrane switch, and backs it with an independently verified GS \"Tested Safety\" certification most competitors don't mention.\n\nAgainst the cheaper Rii and Lumsburry picks below, Cherry adds two rubberized fold-out feet plus an integrated metal plate specifically for stability, a detail suggesting a sturdier build than the lighter plastic keyboards at the bottom of this price range.\n\nBest for buyers who type frequently throughout the day and want a documented switch mechanism and certified build quality over the cheapest possible compact keyboard.",
    specs: ["Cherry SX scissor switch technology", "GS \"Tested Safety\" certified", "Wired USB, integrated metal stability plate"],
    pros: ["Documented Cherry SX switch mechanism", "Independently certified for safety testing", "Metal plate and fold-out feet add stability"],
    cons: ["Wired only, no wireless option", "Priciest pick in this comparison"],
    bestFor: "frequent typists who want a documented switch mechanism and certified build quality",
  },
  {
    id: "best-small-keyboards-under-30-2",
    rank: 2,
    badge: "Best Battery Life",
    name: "Arteck 2.4G Wireless Keyboard, Ultra Slim and Compact",
    price: "$21.84",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41cX5w-iywL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08SK9QT1T?tag=theofficejournal-20",
    description: "Arteck uses a built-in rechargeable lithium battery rather than swappable AAA batteries, rated for 6 months on a single charge based on 2 hours of daily use, and includes the USB-C charging cable needed to top it up in the box.\n\nAgainst the TECKNET pick below, which relies on 2.4GHz USB connection with disposable AAA batteries, Arteck's rechargeable design means no ongoing battery purchases, though it does require remembering to recharge periodically rather than swapping in fresh batteries instantly.\n\nBest for buyers who'd rather recharge occasionally than keep buying replacement batteries, and who want a full-size key layout despite the compact overall footprint.",
    specs: ["Built-in rechargeable battery, 6-month life", "2.4GHz nano USB receiver", "24-month warranty included"],
    pros: ["Rechargeable, no disposable batteries needed", "24-month warranty stated directly", "Full-size keys despite compact footprint"],
    cons: ["Needs periodic recharging rather than instant battery swap", "2.4GHz only, no Bluetooth option"],
    bestFor: "buyers who prefer recharging over buying replacement batteries and want full-size keys",
  },
  {
    id: "best-small-keyboards-under-30-3",
    rank: 3,
    badge: "Best Value",
    name: "TECKNET 2.4G Wireless Mini Compact Keyboard",
    price: "$15.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31kj9-NHA-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B072N471V4?tag=theofficejournal-20",
    description: "TECKNET states exact dimensions (11.5 x 4.9 inches, 10.4 ounces) directly in the listing, genuinely one of the smaller and lighter footprints in this comparison, plus a stated 36-month warranty with registration, longer than most competitors here mention.\n\nThe listing is upfront about a real tradeoff worth knowing before buying: this keyboard uses a different Enter key layout than standard full-size keyboards, meaning touch typists accustomed to a standard layout may need an adjustment period.\n\nBest for buyers who prioritize the smallest physical footprint and a longer stated warranty, and who don't mind a short adjustment period for a non-standard Enter key layout.",
    specs: ["11.5 x 4.9 inches, 10.4 ounces", "2.4GHz USB connection, no Bluetooth", "36-month warranty with registration"],
    pros: ["Genuinely compact stated dimensions", "36-month warranty, longest in this comparison", "Quiet, low key travel typing feel"],
    cons: ["Non-standard Enter key layout needs adjustment", "USB-A receiver required, no Bluetooth option"],
    bestFor: "buyers who want the smallest physical footprint and the longest stated warranty here",
  },
  {
    id: "best-small-keyboards-under-30-4",
    rank: 4,
    badge: "Best Keyboard and Mouse Combo",
    name: "Macally Small Wireless Keyboard and Mouse Combo",
    price: "$29.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/4113h5+aQlL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B081549BN2?tag=theofficejournal-20",
    description: "This is the only pick in this comparison that bundles a matching compact mouse in the same purchase, connected through a single USB dongle rather than needing two separate receivers, with the mouse offering 3 selectable DPI modes (800/1200/1600).\n\nAgainst the standalone keyboards above, Macally's 78-key layout is more compressed than TECKNET's or Arteck's, and the company states up to a 2-year warranty plus lifetime support, among the longer coverage terms in this comparison.\n\nBest for buyers setting up a new small-desk workstation from scratch who want a matched keyboard and mouse pair from one purchase rather than sourcing them separately.",
    specs: ["78-key compact layout plus matching mouse", "Single USB dongle for both devices", "Up to 2-year warranty, lifetime support"],
    pros: ["Keyboard and mouse in one matched purchase", "Single dongle powers both devices", "Long stated warranty and support terms"],
    cons: ["Most compressed key layout in this comparison", "Priciest pick here, though it includes a mouse"],
    bestFor: "buyers setting up a new small-desk workstation who want a matched keyboard and mouse pair",
  },
  {
    id: "best-small-keyboards-under-30-5",
    rank: 5,
    badge: "Best Wired Budget Pick",
    name: "Lumsburry Computer Keyboard, 87 Keys Compact Wired",
    price: "$12.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Gk-P-OjkL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07THJFXJN?tag=theofficejournal-20",
    description: "Lumsburry adds adjustable rainbow LED backlighting, a feature none of the pricier picks in this comparison include, with both brightness and light mode adjustable to your preference, useful for typing in dim lighting without needing a separate desk lamp aimed at the keyboard.\n\nAgainst the similarly priced Rii pick below, Lumsburry trades some of that simplicity for the backlight feature and 12 dedicated multimedia shortcut keys across the F1-F12 row.\n\nBest for buyers who want backlit keys for low-light typing without paying the premium of a full mechanical gaming keyboard.",
    specs: ["87-key compact layout, wired USB", "Adjustable rainbow LED backlighting", "12 multimedia shortcut keys (F1-F12)"],
    pros: ["Adjustable backlighting, rare at this price", "12 dedicated multimedia shortcut keys", "Simple plug-and-play, no driver needed"],
    cons: ["Wired only, no wireless option", "Backlight adds a small amount of power draw over USB"],
    bestFor: "buyers who want backlit keys for low-light typing at a genuinely low price",
  },
  {
    id: "best-small-keyboards-under-30-6",
    rank: 6,
    badge: "Best Budget Pick",
    name: "Rii RK907 Ultra-Slim Compact USB Wired Keyboard",
    price: "$9.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Ps56lk6hL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0BXNGJ2LD?tag=theofficejournal-20",
    description: "Rii's RK907 is the cheapest pick in this entire comparison at under $10, using low-profile keys for a quieter, more comfortable keystroke than a taller-key design, with a splash-resistant desktop-centric build for everyday office use.\n\nAgainst the pricier Lumsburry and Cherry picks, this skips backlighting and any certified switch technology, keeping things to the essential plug-and-play function at the lowest possible price in this comparison.\n\nBest for buyers who want the absolute lowest price for a genuinely compact, quiet-typing keyboard without any extra features beyond the core function.",
    specs: ["Low-profile keys, splash-resistant design", "Simple USB plug-and-play, wired", "Cheapest pick in this comparison"],
    pros: ["Lowest price in this comparison", "Low-profile keys feel quiet and comfortable", "Splash-resistant build for everyday office use"],
    cons: ["No backlighting or certified switch tech", "Basic feature set compared to pricier picks"],
    bestFor: "buyers who want the lowest possible price for a genuinely compact, comfortable-typing keyboard",
  }
];

export const howWeEvaluated = [
  {
    title: "Connection type verification",
    description: "we distinguished true Bluetooth from 2.4GHz USB-dongle wireless and wired USB connections, since each has real, different tradeoffs for device compatibility and setup."
  },
  {
    title: "Key switch and travel comparison",
    description: "we noted which listings name a specific switch mechanism (like Cherry's SX scissor switches) versus a generic membrane design, since named switch technology is a real, checkable quality signal."
  },
  {
    title: "Battery arrangement check",
    description: "for wireless picks, we identified whether each uses a built-in rechargeable battery or standard disposable batteries, since this affects long-term ownership cost and convenience differently."
  },
  {
    title: "Stated warranty comparison",
    description: "we compared each listing's stated warranty term directly, since coverage varied meaningfully across similarly priced picks in this comparison."
  },
  {
    title: "Live price gate",
    description: "every pick had to be in stock and priced at or under $30 on the date this guide was checked; keyboards that only hit this tier during a temporary sale were excluded."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    subheading: "By Priority",
    table: {
      headers: ["If you mainly need", "Recommended pick"],
      rows: [
        ["A documented switch mechanism and certified safety", "Cherry Stream Wired Keyboard Without Number Pad"],
        ["Rechargeable battery, no disposables", "Arteck 2.4G Wireless Keyboard"],
        ["A matched keyboard and mouse combo", "Macally Small Wireless Keyboard and Mouse Combo"],
        ["The lowest possible price", "Rii RK907 Ultra-Slim Compact USB Wired Keyboard"],
      ],
    },
  },
  {
    subheading: "By Budget",
    table: {
      headers: ["Price range", "Recommended pick"],
      rows: [
        ["Under $16", "Rii RK907 ($9.99), Lumsburry ($12.99), or TECKNET ($15.99)"],
        ["Up to $30", "Arteck ($21.84), Cherry Stream ($24.83), or Macally combo ($29.98)"],
      ],
    },
  },
  {
    subheading: "Wired vs Wireless",
    cards: [
      {
        label: "Wired (Cherry Stream, Lumsburry, Rii)",
        text: "No batteries to manage and typically the most reliable connection, at the cost of one more cable on your desk.",
      },
      {
        label: "Wireless (TECKNET, Arteck, Macally)",
        text: "Cleaner desk setup with no cable, but requires either battery swaps or periodic recharging depending on the specific model.",
      },
    ],
    note: "If a completely clutter-free desk matters more than avoiding battery management, Arteck's rechargeable design splits the difference well.",
  },
  {
    subheading: "By Feature Priority",
    table: {
      headers: ["Priority", "Recommended pick"],
      rows: [
        ["Backlit keys for low-light typing", "Lumsburry Computer Keyboard"],
        ["Longest stated warranty", "TECKNET (36 months) or Macally (up to 2 years)"],
        ["Certified switch technology", "Cherry Stream Wired Keyboard"],
      ],
    },
  },
  {
    subheading: "For a New Small-Desk Setup Specifically",
    cards: [
      {
        label: "Look for",
        text: "A matched keyboard and mouse bundle using a single USB dongle, so you're not sourcing and pairing two separate devices for a brand-new desk.",
      },
      {
        label: "In this comparison",
        text: "The Macally combo is the only pick here that bundles a matching mouse using one shared dongle.",
      },
    ],
  },
  {
    subheading: "When to Spend More",
    cards: [
      {
        label: "Spend more if",
        text: "You type for hours daily and want a documented switch mechanism and certified safety testing: Cherry Stream ($24.83) is the only pick here with named switch technology.",
      },
      {
        label: "Save if",
        text: "You just need basic compact typing without extra features: Rii RK907 ($9.99) covers the core function at the lowest price in this comparison.",
      },
    ],
  },
];

export const buyingCriteria = [
  {
    criterion: "Understand what removing the number pad actually changes about your posture",
    explanation: "A small keyboard's defining feature is dropping the number pad found on full-size keyboards, and the real benefit isn't just desk space, it's that your mouse can sit directly next to the keyboard's main key cluster instead of several inches further right where a numpad would otherwise be. Ergonomics guidance generally points to this closer mouse position as reducing shoulder strain during long sessions, since you're not reaching as far to the side repeatedly throughout the day. If you frequently use a numeric keypad for data entry work, factor in that a small keyboard removes that function entirely rather than just shrinking it, so check whether your actual workflow needs numpad access before switching."
  },
  {
    criterion: "Check the actual connection type, not just \"wireless\" as a label",
    explanation: "Wireless small keyboards in this price range use one of two genuinely different connection methods: a 2.4GHz USB dongle that plugs into a USB-A port, or true Bluetooth that pairs directly without an extra dongle taking up a port. A 2.4GHz dongle keyboard won't connect to a device with no USB-A port at all (some newer laptops and tablets), while true Bluetooth works on any Bluetooth-capable device but can sometimes have a marginally less instant wake-up response than a dedicated USB dongle. Check the listing specifically for \"Bluetooth\" versus \"2.4GHz USB receiver\" language, and confirm your target device has the right kind of port or wireless support before buying."
  },
  {
    criterion: "Decide between disposable batteries and a built-in rechargeable battery",
    explanation: "Wireless keyboards in this category power themselves either through standard disposable batteries (typically AA or AAA) that you replace when they run out, or a built-in rechargeable battery that you top up via a USB or USB-C cable periodically. Disposable batteries mean an instant swap when they die with no waiting, but an ongoing cost and occasional need to have spares on hand, while a rechargeable battery eliminates that ongoing purchase but requires remembering to charge it before it fully depletes, and generally can't be swapped instantly if it dies mid-use. If you want zero downtime and don't mind buying batteries occasionally, disposable is the safer choice; if you'd rather avoid battery purchases and can plan ahead for charging, rechargeable works well."
  },
  {
    criterion: "Look for a named switch mechanism if typing feel matters to you",
    explanation: "Most keyboards in this price range use generic membrane or scissor-switch mechanisms without naming a specific technology, while at least one listing in this comparison names a specific branded switch mechanism (Cherry's own SX scissor switches) directly, giving you a real, comparable spec rather than a vague \"comfortable typing\" claim. A named switch mechanism from an established keyboard manufacturer generally signals more engineering attention to consistent key feel and durability than an unnamed generic switch, though unnamed switches can still feel perfectly comfortable for casual use. If typing feel and long-term key durability matter to you specifically, prioritize a listing that names its actual switch technology."
  },
  {
    criterion: "Check for a stated key layout difference before assuming standard touch-typing compatibility",
    explanation: "Compressing a keyboard down in size sometimes means the manufacturer adjusts less commonly used keys, like the Enter key or the arrangement around it, to fit the smaller footprint, and at least one listing in this comparison explicitly warns that its Enter key layout differs from a standard full-size keyboard. If you're a fast touch typist who relies on muscle memory for key positions, this kind of layout change can genuinely slow you down for an adjustment period after switching. Check the listing's description and any layout diagram images carefully for mentions of a non-standard key arrangement before assuming any compact keyboard matches a standard full-size layout exactly."
  }
];

export const faq = [
  {
    q: "Will I lose functionality by switching from a full-size keyboard to a small one?",
    a: "The main functional loss is the dedicated number pad, useful for fast numeric data entry. Every other standard key, including function keys and arrow keys, is typically retained on a small keyboard; only the numpad itself is removed to save desk space."
  },
  {
    q: "Is a 2.4GHz USB dongle keyboard better than a Bluetooth one?",
    a: "Neither is universally better; they suit different situations. A 2.4GHz dongle needs a free USB-A port but often has a very reliable, low-latency connection. Bluetooth needs no extra port and works with more device types, including tablets, but check that your target device actually has Bluetooth support first."
  },
  {
    q: "How long do disposable batteries typically last in these keyboards?",
    a: "It varies by model and usage, but several listings in this comparison state figures around 6 to 12 months of typical daily use before needing a battery change or recharge. Check the specific listing's stated battery life figure rather than assuming a standard duration across all wireless keyboards."
  },
  {
    q: "Do small keyboards work the same on Mac and Windows?",
    a: "Most wired and wireless small keyboards in this comparison state broad compatibility across Windows, Mac, and Linux systems, though a few keys (like special media or Windows-specific shortcut keys) may not have an equivalent function on macOS. Check the specific listing's stated OS compatibility if cross-platform use matters to you."
  },
  {
    q: "Will a backlit compact keyboard drain a wireless battery faster?",
    a: "Yes, generally. Backlighting requires additional power beyond the keyboard's basic wireless signal, so a backlit wireless keyboard typically has shorter battery life between charges or battery swaps than an otherwise similar non-backlit model. If maximizing battery life matters most, a non-backlit pick is the safer choice."
  },
  {
    q: "Can I use a small keyboard and a separate full-size numeric keypad together?",
    a: "Yes, this is a common setup for buyers who want the ergonomic mouse-positioning benefit of a small keyboard while still occasionally needing numeric entry. A separate USB or wireless numeric keypad accessory can be added alongside any of the keyboards in this comparison without conflict."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { href: "/guide/best-small-keyboard-with-numpad", title: "Best Small Keyboards with Numpad" },
  { href: "/guide/best-ergonomic-keyboards", title: "Best Ergonomic Keyboards" },
];
