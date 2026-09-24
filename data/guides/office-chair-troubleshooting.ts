import type { Guide } from "@/data/guides";

export const officeChairTroubleshootingGuide: Guide = {
  title: "Office Chair Troubleshooting: Common Problems and Fixes",
  slug: "office-chair-troubleshooting",
  categorySlug: "seating",
  subcategorySlug: "task-chairs",
  description:
    "Office chair troubleshooting guide covering chair sinking, tilting to one side, squeaking, and locked recline, with practical fixes for each common problem.",
  mainKeyword: "office chair troubleshooting",
  subKeywords: [
    "office chair sinking fix",
    "office chair squeaking fix",
    "office chair leaning to one side",
    "office chair recline stuck",
  ],
  heroImage: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "office-chair-weight-capacity-explained",
    "chair-tilt-mechanisms-explained",
    "office-chair-caster-types-explained",
    "office-chair-size-chart",
  ],
  faq: [
    {
      question: "Why does my office chair slowly sink while sitting?",
      answer:
        "A slowly sinking chair almost always means a worn or failing gas cylinder that's lost its ability to hold pressure, this is a common wear issue after years of use and is typically fixed by replacing the gas cylinder rather than the whole chair.",
    },
    {
      question: "Can I fix a sinking office chair myself?",
      answer:
        "Yes, replacement gas cylinders are widely available and sized to fit standard chair stems, the process involves removing the old cylinder from the base and seat plate and pressing in a new one, a straightforward fix without needing to buy a new chair.",
    },
    {
      question: "Why does my chair lean to one side?",
      answer:
        "A chair leaning to one side is often caused by uneven tilt tension, a worn spot in the mechanism, or a caster that rolls differently than the others, check for visible wear or damage on the base and mechanism before assuming the chair needs replacement.",
    },
    {
      question: "What causes squeaking in an office chair?",
      answer:
        "Squeaking usually comes from dry metal joints in the tilt mechanism, armrest hinges, or the base connection points, a few drops of silicone or lithium grease on the moving metal parts often resolves it without needing any replacement parts.",
    },
    {
      question: "Why is my chair's recline stuck in one position?",
      answer:
        "A stuck recline can mean the tilt lock lever is engaged (check for a lever near the tilt tension knob), or in some cases a worn mechanism has seized, try cycling the lock lever fully before assuming a mechanical failure.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Sinking means a worn gas cylinder (replaceable). Leaning to one side often means uneven tilt tension or an inconsistent caster. Squeaking usually means dry metal joints needing lubrication. A stuck recline often just means the tilt lock lever is engaged.

## Common Problems and Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| Chair sinks while sitting | Worn gas cylinder | Replace the cylinder |
| Leans to one side | Uneven tension or worn caster | Check mechanism, replace caster |
| Squeaking noises | Dry metal joints | Apply silicone or lithium grease |
| Recline stuck | Tilt lock engaged or seized mechanism | Cycle the lock lever, inspect mechanism |
| Armrest wobbles | Loose mounting screws | Tighten screws underneath the armrest |`,
    },
    {
      heading: "Replacing a Gas Cylinder Without Buying a New Chair",
      body: `A sinking chair is one of the most common office chair complaints, and it's almost always the gas cylinder losing its ability to hold pressure over years of daily compression and release. Universal replacement cylinders are inexpensive and sized to fit standard chair stems, the swap involves removing the old cylinder (often by tapping it out from the base) and pressing a new one into place, a repair well worth attempting before assuming the entire chair needs replacing.`,
    },
    {
      heading: "When a Problem Signals It's Time to Replace the Chair",
      body: `Some issues, like a persistently squeaking mechanism after lubrication, or a frame that visibly flexes or cracks under normal weight, point to a deeper structural problem rather than a simple wear-and-tear fix. If a chair has multiple compounding issues after several years of daily use, or the mechanism itself has visibly seized or cracked, replacement is generally more practical than continuing to chase individual repairs.`,
    },
  ],
};
