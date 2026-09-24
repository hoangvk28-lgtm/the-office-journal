import type { Guide } from "@/data/guides";

export const monitorVesaCompatibilityExplainedGuide: Guide = {
  title: "Monitor VESA Compatibility Explained",
  slug: "monitor-vesa-compatibility-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "monitors",
  description:
    "Monitor VESA compatibility explained, covering standard mount hole patterns and how to check if your monitor works with a monitor arm or wall mount.",
  mainKeyword: "monitor vesa compatibility explained",
  subKeywords: [
    "vesa mount pattern monitor",
    "is my monitor vesa compatible",
    "100x100 vesa vs 75x75",
    "monitor arm vesa adapter",
  ],
  heroImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "vesa-mount-pattern-explained",
    "monitor-arm-size-chart",
    "monitor-arm-weight-capacity-chart",
    "how-to-measure-desk-for-monitor-arm",
  ],
  faq: [
    {
      question: "How do I know if my monitor is VESA compatible?",
      answer:
        "Check the back of your monitor for four threaded mounting holes in a square pattern, or check the manufacturer's spec sheet for a listed VESA pattern like 75x75mm or 100x100mm, most monitors 22 inches and larger include VESA mounting.",
    },
    {
      question: "What's the difference between 75x75 and 100x100 VESA patterns?",
      answer:
        "These numbers refer to the distance in millimeters between mounting holes, 75x75mm is common on smaller monitors while 100x100mm is standard on most monitors 24 inches and larger, a monitor arm needs to match or adapt to your monitor's specific pattern.",
    },
    {
      question: "Can I mount a monitor without VESA holes on a monitor arm?",
      answer:
        "Some monitor arms include a clamp-style adapter tray for monitors without VESA holes, but this is less secure and less common than a direct VESA mount, check whether your specific arm supports a non-VESA adapter before assuming compatibility.",
    },
    {
      question: "Do all monitor arms support both 75x75 and 100x100 patterns?",
      answer:
        "Many monitor arms include mounting plates with both hole patterns built in, but not all, always check the specific arm's supported VESA patterns against your monitor's pattern before buying to avoid a mismatch.",
    },
    {
      question: "Is a larger VESA pattern better or worse?",
      answer:
        "Neither inherently, the pattern size mainly needs to match between your monitor and your mount or arm, larger monitors often use 100x100 or even 200x100mm patterns simply because their larger, heavier panels benefit from wider-spaced mounting points for stability.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** VESA compatibility means your monitor has four threaded mounting holes in a standard square pattern, commonly 75x75mm or 100x100mm. Check your monitor's spec sheet or the back panel directly, then confirm your monitor arm or mount supports that same pattern before buying.

## Common VESA Patterns

| Pattern | Typical Monitor Size | Notes |
|---|---|---|
| 75x75mm | Smaller monitors, under 24" | Less common on modern larger displays |
| 100x100mm | 24-32" monitors | Most common standard |
| 200x100mm | Larger or ultrawide monitors | Wider spacing for heavier panels |`,
    },
    {
      heading: "Checking Compatibility Before Buying a Monitor Arm",
      body: `Before buying a monitor arm, confirm two things: your monitor's VESA pattern (found in its spec sheet or by measuring the hole spacing directly) and the arm's supported patterns (most arms explicitly list which patterns they accommodate, often multiple). A mismatch means the mounting plate's screw holes won't align with your monitor's holes at all, making the arm unusable without an adapter plate.`,
    },
    {
      heading: "What to Do If Your Monitor Lacks VESA Holes",
      body: `Some ultra-thin or budget monitors skip VESA mounting entirely. In this case, look specifically for a monitor arm that includes a non-VESA adapter tray or clamp designed to secure a monitor without mounting holes, though this mounting method is generally considered less stable than a direct VESA connection and worth checking user reviews on before relying on it for a heavier monitor.`,
    },
  ],
};
