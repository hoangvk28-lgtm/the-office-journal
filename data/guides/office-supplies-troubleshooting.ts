import type { Guide } from "@/data/guides";

export const officeSuppliesTroubleshootingGuide: Guide = {
  title: "Office Supplies Troubleshooting: Common Problems and Fixes",
  slug: "office-supplies-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "office-supplies",
  description:
    "Office supplies troubleshooting guide covering jammed staplers, dried out pens, and shredder jams, with quick fixes before assuming replacement.",
  mainKeyword: "office supplies troubleshooting",
  subKeywords: [
    "stapler jammed fix",
    "pen dried out fix",
    "paper shredder jam fix",
    "label maker not printing fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "stapler-types-explained",
    "paper-shredder-security-levels-explained",
    "gel-vs-ballpoint-pen-explained",
    "label-maker-worth-it-explained",
  ],
  faq: [
    {
      question: "Why does my stapler keep jamming?",
      answer:
        "Jamming often results from using the wrong staple size for your specific stapler, overloading beyond its rated sheet capacity, or a buildup of bent staples inside the mechanism, clearing out the staple channel and confirming correct staple size usually resolves this.",
    },
    {
      question: "Why does my pen stop writing even though it's not empty?",
      answer:
        "This often means the ink has dried at the tip from lack of use, or air has entered the ink cartridge, scribbling vigorously on scrap paper, or in some cases gently warming the tip, can sometimes restore flow, if not, the pen may need replacement despite appearing to have remaining ink.",
    },
    {
      question: "Why does my paper shredder keep jamming?",
      answer:
        "Exceeding the stated sheet capacity per pass is the most common cause, along with shredding paper with staples or paperclips still attached, which can damage the cutting mechanism, always check and respect your specific shredder's stated capacity and remove fasteners first.",
    },
    {
      question: "Why won't my label maker print clearly?",
      answer:
        "Check for a low or depleted tape cartridge first, then inspect the print head for any debris or adhesive residue buildup, which can be gently cleaned with a cotton swab, most print quality issues trace back to one of these two causes.",
    },
    {
      question: "Should I try to fix a jammed shredder myself or is it dangerous?",
      answer:
        "Always unplug or power off a shredder before attempting to clear a jam, most manufacturers include a reverse function specifically for clearing jams safely, check your model's manual for this feature rather than attempting to manually pull jammed paper from an active mechanism.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Stapler jams usually mean wrong staple size or overloaded capacity. Dried pens often respond to vigorous scribbling on scrap paper to restore ink flow. Shredder jams typically mean exceeded sheet capacity or an attached fastener like a staple, always power off before clearing any jam.

## Common Office Supply Problems and Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| Stapler jamming | Wrong staple size, overloaded | Clear channel, confirm correct staple size |
| Pen won't write | Dried ink at tip | Scribble vigorously on scrap paper |
| Shredder jamming | Exceeded capacity, attached fastener | Remove fasteners, respect stated capacity |
| Label maker print quality poor | Low tape, debris on print head | Replace tape, clean print head gently |`,
    },
    {
      heading: "Why Respecting Stated Capacity Prevents Most Jamming Issues",
      body: `Both staplers and shredders are engineered and rated for a specific maximum capacity, sheets of paper per staple or per shredding pass, and pushing beyond this rated capacity is the single most common cause of jamming for both devices, this isn't typically a sign of a defective unit, it's simply exceeding the mechanism's designed operating range. Checking and genuinely respecting the stated capacity, even when it feels like the device should handle "just a few more sheets," prevents the large majority of jamming frustrations with either type of equipment.`,
    },
    {
      heading: "Why a Dried-Out Pen Isn't Always Actually Empty",
      body: `A pen that suddenly stops writing despite feeling like it should still have ink remaining often has simply dried ink at the very tip of the ballpoint or gel mechanism, rather than a genuinely empty cartridge, this can happen from extended periods of non-use or exposure to air, vigorous scribbling on scrap paper frequently dislodges this dried plug and restores normal ink flow, worth trying before assuming the pen needs to be discarded and replaced.`,
    },
  ],
};
