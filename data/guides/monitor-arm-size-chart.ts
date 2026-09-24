import type { Guide } from "@/data/guides";

export const monitorArmSizeChartGuide: Guide = {
  title: "Monitor Arm Reach Chart: VESA Sizes and Clamp Range",
  slug: "monitor-arm-size-chart",
  categorySlug: "desk-setup",
  subcategorySlug: "monitor-arms",
  description:
    "Monitor arm reach chart covering VESA mount sizes, clamp width ranges, and horizontal/vertical extension by arm type. Compare single, dual, and gas-spring arms.",
  mainKeyword: "monitor arm size chart",
  subKeywords: [
    "monitor arm vesa size",
    "monitor arm clamp range",
    "monitor arm reach distance",
    "monitor arm weight capacity",
  ],
  heroImage: "https://images.unsplash.com/photo-1632064824547-e77c36851495?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1632064824547-e77c36851495?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "9 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "best-monitor-arm-desk-mounts",
    "best-ultrawide-monitor-arm",
    "best-monitor-arms",
    "best-dual-monitor-arms",
  ],
  faq: [
    {
      question: "What is the most common VESA mount size for monitor arms?",
      answer:
        "75x75mm and 100x100mm are the two standard VESA hole patterns most monitor arms support, covering the vast majority of monitors from 13 to 32 inches. Larger ultrawide and 4K monitors sometimes use 200x100mm or 200x200mm, which requires an arm rated for that pattern or a VESA adapter plate.",
    },
    {
      question: "How wide of a desk edge can a monitor arm clamp fit?",
      answer:
        "Most C-clamp monitor arms accept desk edges from 0.4 to 3.5 inches thick, though budget arms sometimes cap out closer to 2.5 inches. Check the specific listing's clamp range against your desk's actual edge thickness before buying.",
    },
    {
      question: "How far can a monitor arm extend horizontally?",
      answer:
        "Single monitor arms typically extend 15 to 20 inches from the clamp point, while some long-reach arms extend up to 25 inches. Dual and triple arms usually have shorter individual reach per arm to keep the overall footprint manageable.",
    },
    {
      question: "How much weight can a monitor arm hold?",
      answer:
        "Standard monitor arms are rated for 4.4 to 19.8 lbs (2-9kg), covering most 19 to 32 inch monitors. Ultrawide and larger 4K monitors, which can weigh 15-25 lbs, need an arm specifically rated for that higher weight range, often using a gas spring mechanism.",
    },
    {
      question: "Do all monitor arms fit a grommet-mounted desk hole?",
      answer:
        "Most monitor arms include both a C-clamp and a grommet mount base in the box, letting you choose based on whether your desk has a pre-drilled cable grommet hole. Check the listing specifically confirms both mounting options if you're unsure which your desk supports.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Most monitor arms support 75x75mm or 100x100mm VESA patterns, clamp to desk edges 0.4-3.5" thick, extend 15-20" horizontally, and hold 4.4-19.8 lbs. Ultrawide and heavier 4K monitors need an arm specifically rated for higher weight and larger VESA patterns.

## Monitor Arm Reach and Capacity Chart

| Arm Type | VESA Support | Clamp Range | Horizontal Reach | Weight Capacity |
|---|---|---|---|---|
| Single standard arm | 75x75, 100x100mm | 0.4-3.5" | 15-20" | 4.4-19.8 lbs |
| Single heavy-duty / gas spring | 75x75, 100x100, 200x100mm | 0.4-3.5" | 15-22" | 15-33 lbs |
| Dual monitor arm | 75x75, 100x100mm (per arm) | 0.4-3.5" | 12-18" per arm | 4.4-17.6 lbs per arm |
| Long-reach arm | 75x75, 100x100mm | 0.4-3.5" | 20-25" | 4.4-19.8 lbs |
| Ultrawide-rated arm | 100x100, 200x100mm | 0.4-3.5" | 15-20" | 15-33 lbs |

Ranges reflect typical specs across widely sold monitor arms, not a universal standard. Always confirm your specific monitor's weight, VESA pattern, and desk edge thickness against the exact listing before ordering.`,
    },
    {
      heading: "VESA Pattern Explained",
      body: `VESA mount size refers to the spacing (in millimeters) between the four mounting holes on the back of your monitor. The number describes the pattern as width x height: a 100x100mm pattern has holes spaced 100mm apart horizontally and vertically.

**75x75mm** is common on smaller monitors (19-24 inches) and some laptops with VESA adapter mounts.

**100x100mm** is the most widely supported pattern, found on most 22-32 inch monitors, and the pattern most monitor arms are built around by default.

**200x100mm and larger** patterns appear on bigger ultrawide and professional monitors. Not every monitor arm supports this size directly; check for an explicit 200x100mm rating or a compatible adapter plate before assuming a standard arm fits.

Check your monitor's own spec sheet or the back panel directly (the four screw holes) to confirm its VESA pattern before choosing an arm.`,
    },
    {
      heading: "Matching Reach and Weight Capacity to Your Monitor",
      body: `A monitor arm's horizontal reach determines how far the screen can extend from the clamp point toward you, useful for adjusting distance without moving the whole desk setup. Longer reach isn't automatically better: an arm extended to its maximum length has less stability and more visible sag over time than one used within the middle of its range.

Weight capacity matters more than most buyers expect, since exceeding an arm's rated capacity causes it to droop or fail to hold position, even if the monitor physically attaches. Check your monitor's exact weight (usually listed in its spec sheet, often 8-15 lbs for a standard 24-27" monitor and up to 25 lbs for larger 4K or ultrawide panels) against the arm's stated capacity range, not just its maximum size compatibility.`,
    },
  ],
};
