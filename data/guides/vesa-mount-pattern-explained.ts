import type { Guide } from "@/data/guides";

export const vesaMountPatternExplainedGuide: Guide = {
  title: "VESA Mount Patterns Explained (75x75 vs 100x100)",
  slug: "vesa-mount-pattern-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "monitor-arms",
  description:
    "VESA mount pattern explained: what 75x75 and 100x100 mean, how to find your monitor's pattern, and how to handle monitors with no VESA holes at all.",
  mainKeyword: "vesa mount pattern explained",
  subKeywords: [
    "vesa 75x75 vs 100x100",
    "how to find monitor vesa pattern",
    "vesa mount adapter",
  ],
  heroImage: "https://images.unsplash.com/photo-1632064824547-e77c36851495?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1632064824547-e77c36851495?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "8 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "best-portable-monitors-with-vesa-mounts",
    "best-mini-pcs-with-vesa-mounts",
    "best-vesa-mini-pc-mounts",
    "under-desk-charging-station",
  ],
  faq: [
    {
      question: "What does VESA 75x75 mean?",
      answer:
        "VESA 75x75 describes four mounting holes on the back of a monitor arranged in a square pattern, spaced 75mm apart both horizontally and vertically. It's the standard set by the Video Electronics Standards Association for smaller monitors, typically 19-24 inches.",
    },
    {
      question: "What's the difference between VESA 75x75 and 100x100?",
      answer:
        "The number describes the hole spacing in millimeters. 75x75 is used on smaller monitors and some laptops, while 100x100 is the more common pattern on 22-32 inch monitors. A mount rated for 100x100 sometimes also supports 75x75 through an adapter plate, but not always automatically.",
    },
    {
      question: "How do I find my monitor's VESA pattern?",
      answer:
        "Check your monitor's spec sheet (search the model number plus 'VESA') or measure the four mounting holes on the back panel directly with a ruler, measuring hole-center to hole-center both horizontally and vertically.",
    },
    {
      question: "What if my monitor has no VESA holes at all?",
      answer:
        "Some budget or all-in-one monitors ship with no VESA mounting holes. A universal VESA adapter kit, which straps or clips onto the monitor's existing stand or bezel, can add mounting compatibility, though results vary by monitor shape and these adapters generally support lighter monitors only.",
    },
    {
      question: "Can I use a 100x100 arm on a monitor with 75x75 holes?",
      answer:
        "Only if the arm's mounting plate has slotted holes covering both patterns (many do, marked as '75/100mm compatible') or you use a separate VESA adapter plate. Check the specific arm's listing for explicit dual-pattern support before assuming it works with both.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** VESA mount numbers describe the spacing in millimeters between a monitor's four mounting holes. 75x75mm suits smaller monitors (19-24"); 100x100mm is the most common pattern for 22-32" monitors. Check your monitor's spec sheet or measure the holes directly to confirm which one you have.

## Common VESA Patterns by Monitor Size

| VESA Pattern | Typical Monitor Size | Notes |
|---|---|---|
| 75x75mm | 19-24" | Common on smaller and older monitors |
| 100x100mm | 22-32" | Most widely supported pattern |
| 100x200mm / 200x100mm | 27-40"+ ultrawide, large 4K | Requires an arm rated for this size |
| 200x200mm | Large TVs used as monitors | Rare for standard desk monitors |
| No VESA holes | Some budget/all-in-one monitors | Requires a universal adapter kit |`,
    },
    {
      heading: "How to Check Your Monitor's Actual Pattern",
      body: `1. **Check the spec sheet first.** Search your monitor's exact model number online along with "VESA," since most manufacturers list the supported pattern directly in the technical specifications.
2. **Measure the holes if no spec is available.** Turn the monitor around (with the stand removed if attached) and measure center-to-center distance between the four mounting holes, both horizontally and vertically, using a ruler in millimeters.
3. **Confirm the mount you're buying explicitly states support for that exact pattern**, since a mount rated only for 100x100 may not physically align with 75x75 holes without an adapter plate, even though both are common VESA sizes.`,
    },
    {
      heading: "What to Do If Patterns Don't Match",
      body: `A VESA adapter plate bridges the gap between a mount built for one pattern and a monitor with a different one, typically adding a secondary plate with both hole patterns pre-drilled. These are widely available separately and are the standard solution rather than needing to buy a different mount entirely.

For monitors with no VESA holes at all, a universal strap-on or clip-on adapter kit can work, but check the specific kit's weight rating and monitor shape compatibility carefully, since these solutions are less secure than a native VESA connection and generally aren't rated for heavier or larger monitors.`,
    },
  ],
};
