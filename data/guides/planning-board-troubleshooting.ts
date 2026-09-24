import type { Guide } from "@/data/guides";

export const planningBoardTroubleshootingGuide: Guide = {
  title: "Whiteboard and Corkboard Troubleshooting",
  slug: "planning-board-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "planning-boards",
  description:
    "Whiteboard and corkboard troubleshooting guide covering ghosting, stuck markers, and pin holes, with fixes before assuming you need a replacement.",
  mainKeyword: "whiteboard corkboard troubleshooting",
  subKeywords: [
    "whiteboard ghosting fix",
    "whiteboard marker won't erase",
    "corkboard pin holes visible",
    "whiteboard surface damage fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "glass-whiteboard-vs-melamine-whiteboard",
    "whiteboard-vs-corkboard",
    "whiteboard-size-guide",
    "magnetic-vs-non-magnetic-whiteboard",
  ],
  faq: [
    {
      question: "How do I fix ghosting on a whiteboard?",
      answer:
        "Try a dedicated whiteboard cleaner or isopropyl alcohol on a cloth for stubborn ghosting, dry erase marker traces sometimes respond to being colored over with a dry erase marker and then immediately erased, which can lift some residue that a standard eraser alone doesn't remove.",
    },
    {
      question: "Why won't my dry erase marker fully erase?",
      answer:
        "This can happen if content was left on the board too long, allowing it to partially bond with the surface, or if a permanent marker was used by mistake, isopropyl alcohol is generally more effective than water for removing marks a standard eraser can't fully lift.",
    },
    {
      question: "How do I deal with visible pin holes accumulating on a corkboard?",
      answer:
        "Some hole accumulation is a normal part of a cork surface's regular use, using pins in a somewhat consistent area or rotating pin placement across the board's surface helps distribute wear rather than concentrating holes in one heavily used spot.",
    },
    {
      question: "Can a scratched whiteboard surface be repaired?",
      answer:
        "Minor scratches usually don't significantly affect writing and erasing function, but deeper scratches can start trapping marker residue and contribute to permanent ghosting in that specific area, at which point replacement becomes the more practical option than attempting repair.",
    },
    {
      question: "How do I prevent ghosting from happening in the first place?",
      answer:
        "Erase content regularly rather than leaving it on the board for extended periods, and avoid using permanent markers by mistake, these preventative habits significantly reduce ghosting buildup compared to infrequent erasing of long-standing content.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Whiteboard ghosting responds well to isopropyl alcohol cleaning, and erasing content regularly (rather than leaving it for extended periods) prevents most buildup in the first place. Corkboard pin holes are a normal part of regular use, rotating pin placement helps distribute wear evenly.

## Common Problems and Fixes

| Problem | Cause | Fix |
|---|---|---|
| Whiteboard ghosting | Content left too long, surface absorption | Isopropyl alcohol cleaning |
| Marker won't fully erase | Long-standing content, wrong marker type | Try alcohol cleaner, check marker type |
| Corkboard pin holes accumulating | Normal wear from repeated pin use | Rotate pin placement across surface |
| Scratched whiteboard surface | Physical wear over time | Minor scratches usually fine, deep ones may need replacement |`,
    },
    {
      heading: "Why Isopropyl Alcohol Outperforms Standard Erasers for Stubborn Marks",
      body: `A standard whiteboard eraser or dry cloth removes fresh marker content effectively, but marks left on the surface for extended periods can partially bond with the writing surface in a way a dry eraser alone doesn't fully address, isopropyl alcohol's cleaning properties break down this residue more effectively than dry wiping, making it a reliable go-to for ghosting or stubborn marks that a normal eraser leaves behind.`,
    },
    {
      heading: "Why Prevention Is More Effective Than Fixing Ghosting After It Happens",
      body: `Ghosting becomes progressively harder to fully remove the longer content sits on a whiteboard before being erased, developing the habit of erasing regularly, rather than letting notes accumulate for weeks, meaningfully reduces how much ghosting builds up over the board's lifetime. This preventative habit, combined with using only genuine dry erase markers rather than accidentally reaching for a permanent marker, addresses the root causes of most whiteboard surface complaints before they become difficult to fix.`,
    },
  ],
};
