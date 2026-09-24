import type { Guide } from "@/data/guides";

export const deskLampTroubleshootingGuide: Guide = {
  title: "Desk Lamp Troubleshooting: Common Problems and Fixes",
  slug: "desk-lamp-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "task-lighting",
  description:
    "Desk lamp troubleshooting guide covering flickering, dimming that won't adjust, and a lamp that won't stay in position, with fixes before replacing it.",
  mainKeyword: "desk lamp troubleshooting",
  subKeywords: [
    "desk lamp flickering fix",
    "led lamp dimmer not working",
    "lamp arm won't stay in position",
    "desk lamp clamp loose fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1560890264-4b92305ee66e?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1560890264-4b92305ee66e?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "led-vs-halogen-desk-lamp",
    "dimmable-vs-fixed-brightness-desk-lamp",
    "desk-lamp-arm-reach-explained",
    "clamp-lamp-vs-base-lamp",
  ],
  faq: [
    {
      question: "Why does my desk lamp flicker occasionally?",
      answer:
        "Flickering often points to a loose connection at the bulb or power cord, an incompatible dimmer switch not designed for LED bulbs, or in some cases a failing driver component inside the lamp itself, check connections first before assuming the lamp needs replacement.",
    },
    {
      question: "Why won't my lamp's dimmer adjust brightness anymore?",
      answer:
        "This can indicate a failing internal dimming component, or if using a separate dimmer switch, incompatibility with the specific bulb type installed, confirm the bulb and dimmer are rated compatible with each other before assuming lamp failure.",
    },
    {
      question: "Why does my lamp's arm keep drooping or won't stay in the position I set it?",
      answer:
        "This typically means the arm's joint tension has loosened over time from repeated adjustment, some lamps have a tension adjustment screw at the joints that can be tightened to restore proper holding position.",
    },
    {
      question: "Why is my clamp lamp loose on my desk?",
      answer:
        "Check that the clamp's tightening mechanism is fully engaged and matches your desk's actual edge thickness, a clamp too large for your desk edge, even if physically attachable, won't hold as securely as one properly matched to the thickness.",
    },
    {
      question: "Should I replace the bulb or the whole lamp if the light won't turn on?",
      answer:
        "Try replacing the bulb first if it's a replaceable type, this resolves the issue in many cases, if the lamp uses a non-replaceable integrated LED and won't light up, the lamp itself likely needs replacement or repair.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Most desk lamp issues trace back to loose connections, bulb-dimmer incompatibility, or loosened arm joint tension rather than complete lamp failure. Check connections and bulb compatibility for flickering or dimming issues, and tighten joint tension screws for a drooping arm before assuming replacement is necessary.

## Common Problems and Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| Flickering | Loose connection, dimmer incompatibility | Check connections, verify dimmer/bulb compatibility |
| Dimmer won't adjust | Failing component or incompatible bulb | Check bulb/dimmer compatibility |
| Arm drooping/won't hold position | Loosened joint tension | Tighten tension adjustment screw if available |
| Clamp loose on desk | Clamp size mismatch, not fully tightened | Verify desk thickness compatibility, fully tighten |
| Won't turn on at all | Bulb failure or lamp electrical fault | Replace bulb first if replaceable type |`,
    },
    {
      heading: "Why Dimmer and Bulb Compatibility Causes Confusing Issues",
      body: `Not every dimmer switch is designed to work with every type of bulb, particularly LED bulbs, which require dimmers specifically rated for LED compatibility rather than older dimmer technology designed for incandescent or halogen bulbs. Using an incompatible combination can cause flickering, a limited dimming range, or a dimmer that doesn't respond smoothly, checking that both components are explicitly rated compatible with each other resolves many dimming-related complaints that might otherwise be mistaken for a defective lamp.`,
    },
    {
      heading: "Why Arm Joints Loosen Over Time and How to Address It",
      body: `A lamp arm's joints rely on friction or tension mechanisms to hold a set position against the arm's own weight, repeated adjustment over months or years gradually loosens this tension, resulting in an arm that slowly droops or won't hold the angle you set it to. Many quality lamps include a small tension adjustment screw at each joint specifically for this reason, checking your lamp's manual for this feature and periodically retightening as needed extends the lamp's useful positioning life without needing full replacement.`,
    },
  ],
};
