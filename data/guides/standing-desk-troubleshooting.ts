import type { Guide } from "@/data/guides";

export const standingDeskTroubleshootingGuide: Guide = {
  title: "Standing Desk Troubleshooting: Common Problems and Fixes",
  slug: "standing-desk-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "standing-desks",
  description:
    "Standing desk troubleshooting guide covering desks that won't raise, uneven lifting, memory setting failures, and wobbling, with fixes before calling for repair.",
  mainKeyword: "standing desk troubleshooting",
  subKeywords: [
    "standing desk not raising fix",
    "standing desk uneven lift fix",
    "standing desk memory settings not working",
    "standing desk wobble fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "single-motor-vs-dual-motor-standing-desk",
    "standing-desk-weight-capacity-explained",
    "standing-desk-cable-management",
    "standing-desk-height-chart",
  ],
  faq: [
    {
      question: "Why won't my standing desk raise at all?",
      answer:
        "Check that the desk is properly plugged in and the outlet is working, confirm the control panel isn't showing an error code, and verify the desk isn't overloaded beyond its weight capacity, which can trigger a safety cutoff on some models.",
    },
    {
      question: "Why does my standing desk raise unevenly on one side?",
      answer:
        "Uneven raising often points to unevenly distributed weight on the desk surface, a motor sync issue (common on some single-motor designs), or in some cases a need to recalibrate the desk following the manufacturer's reset procedure.",
    },
    {
      question: "Why do my saved height memory settings stop working?",
      answer:
        "This can happen after a power interruption or reset, most standing desks with memory presets require recalibration after being unplugged or losing power, check your desk's manual for the specific recalibration steps to restore saved settings.",
    },
    {
      question: "Why does my standing desk wobble at higher heights?",
      answer:
        "Some wobble at full height extension is normal for the desk category due to increased leverage on the legs, but excessive wobble may indicate loose leg bolts, an unlevel floor, or a desk near its weight capacity limit, check bolts and floor leveling first.",
    },
    {
      question: "Should I recalibrate my standing desk periodically?",
      answer:
        "Recalibration is mainly needed after a power loss, an error code, or noticeable performance changes like uneven lifting, rather than as routine scheduled maintenance, check your specific desk's manual for when recalibration is recommended.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Most standing desk issues trace back to power connection problems, weight distribution, or a need for recalibration rather than hardware failure. Check power and weight capacity for raising issues, and recalibrate following your manual's specific steps after any power interruption or persistent unevenness.

## Common Problems and Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| Won't raise at all | Power issue, overload, error code | Check power, verify weight capacity, check control panel |
| Uneven raising | Uneven load, motor sync issue | Redistribute weight, recalibrate per manual |
| Memory settings not working | Power interruption reset settings | Recalibrate following manufacturer steps |
| Excessive wobble at height | Loose bolts, uneven floor, near max weight | Check and tighten bolts, verify floor level |`,
    },
    {
      heading: "Why Recalibration Solves More Problems Than Expected",
      body: `Many standing desk issues that seem like hardware failures, lost memory presets, uneven raising, or a desk that stops responding correctly, are often resolved by the manufacturer's specific recalibration procedure, which resets the internal sensors tracking desk height and re-syncs dual motors if applicable. This procedure is typically documented in the desk's manual and involves a specific button sequence, checking this before assuming a more serious defect saves unnecessary troubleshooting or a premature warranty claim.`,
    },
    {
      heading: "Distinguishing Normal Wobble From an Actual Problem",
      body: `Some wobble at maximum standing height is a normal characteristic of the standing desk category generally, since the legs experience more leverage-related flex the higher and more extended they become, this isn't necessarily a defect. Excessive wobble, however, particularly if it's new or worsening, often traces back to loose leg bolts that work themselves loose over time with regular height adjustment, or an uneven floor that wasn't accounted for during initial setup, checking and tightening all leg bolts is a simple first step before assuming a more serious mechanical issue.`,
    },
  ],
};
