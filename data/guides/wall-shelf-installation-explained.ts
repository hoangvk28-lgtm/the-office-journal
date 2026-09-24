import type { Guide } from "@/data/guides";

export const wallShelfInstallationExplainedGuide: Guide = {
  title: "Wall Shelf Installation Explained",
  slug: "wall-shelf-installation-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "shelving",
  description:
    "Wall shelf installation guide covering finding studs, choosing anchors, and leveling correctly, so your shelf stays securely mounted under real load.",
  mainKeyword: "wall shelf installation explained",
  subKeywords: [
    "how to install a wall shelf",
    "finding studs for shelf mounting",
    "drywall anchor for shelf",
    "leveling a wall shelf",
  ],
  heroImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "shelf-weight-capacity-explained",
    "floating-shelf-vs-bookcase",
    "open-shelving-vs-closed-cabinet",
    "whiteboard-size-guide",
  ],
  faq: [
    {
      question: "How do I find a wall stud before installing a shelf?",
      answer:
        "A stud finder tool detects the denser wood behind drywall, once located, tap the wall to confirm a solid rather than hollow sound, and consider drilling a small test hole in an inconspicuous spot to visually confirm before committing to the final mounting position.",
    },
    {
      question: "What if there's no stud where I want to mount my shelf?",
      answer:
        "Use heavy-duty drywall anchors specifically rated for your shelf's expected load, standard picture-hanging anchors aren't sufficient for a loaded shelf, check the anchor packaging for its specific weight rating before relying on it.",
    },
    {
      question: "How do I make sure my shelf is level during installation?",
      answer:
        "Use a small level tool placed on the shelf bracket or the shelf itself during installation, adjusting before fully tightening screws, a shelf installed even slightly unlevel becomes visually obvious and can cause items to slide toward the lower end.",
    },
    {
      question: "Should I pre-drill holes before installing shelf brackets?",
      answer:
        "Yes, pre-drilling pilot holes slightly smaller than your screws prevents the wood or drywall from splitting or cracking during installation, and makes it easier to drive screws straight and accurately into the intended mounting points.",
    },
    {
      question: "How many mounting points does a shelf typically need?",
      answer:
        "This depends on shelf length and expected load, a short, lightly loaded shelf may need only two mounting points, while a longer or heavily loaded shelf benefits from three or more points distributed across its width for more even weight support.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Locate wall studs with a stud finder and mount into them whenever possible, use heavy-duty rated anchors specifically if no stud is available, level the shelf during installation before fully tightening, and pre-drill pilot holes to avoid splitting and ensure accurate screw placement.

## Installation Steps

| Step | Action |
|---|---|
| 1 | Locate studs with a stud finder, confirm with test tap or small hole |
| 2 | Mark level mounting points using a level tool |
| 3 | Pre-drill pilot holes slightly smaller than screws |
| 4 | Install into studs when possible, heavy-duty anchors otherwise |
| 5 | Recheck level before fully tightening all screws |`,
    },
    {
      heading: "Why Confirming Stud Location Beyond a Stud Finder Alone Is Worth the Extra Step",
      body: `Stud finders are generally reliable but not infallible, occasionally producing false positives from other dense material behind a wall like pipes or existing hardware, confirming a suspected stud location with a small test hole in an inconspicuous spot, or simply tapping to listen for a solid versus hollow sound, provides an additional confirmation layer before committing to the final mounting holes, especially important for a shelf that will carry meaningful weight.`,
    },
    {
      heading: "Why Leveling During, Not After, Installation Matters",
      body: `Checking and adjusting level before fully tightening mounting screws is significantly easier than attempting to fix an unlevel shelf after installation is complete, since correcting it afterward often means removing and re-drilling new holes. Taking the extra few minutes to verify level at each stage of installation, rather than only checking once everything is fully secured, prevents the need for rework and ensures both a professional appearance and even weight distribution across the shelf once loaded.`,
    },
  ],
};
