import type { Guide } from "@/data/guides";

export const ergonomicAssessmentChecklistGuide: Guide = {
  title: "Home Office Ergonomic Assessment Checklist",
  slug: "ergonomic-assessment-checklist",
  categorySlug: "desk-setup",
  subcategorySlug: "ergonomic-accessories",
  description:
    "A practical self-assessment checklist covering chair, desk, monitor, and keyboard positioning to identify your actual ergonomic problems before buying accessories.",
  mainKeyword: "home office ergonomic assessment checklist",
  subKeywords: [
    "diy ergonomic desk assessment",
    "checking desk setup ergonomics",
    "self assessment home office posture",
    "ergonomic checklist before buying accessories",
  ],
  heroImage: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "8 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "seat-cushion-vs-lumbar-pillow",
    "how-to-measure-office-chair-fit",
    "monitor-distance-and-height-for-eye-comfort",
    "ergonomic-accessories-troubleshooting",
  ],
  faq: [
    {
      question: "What should I check first in a home office ergonomic self-assessment?",
      answer:
        "Start with chair height and seat depth relative to your body, since these fundamentals affect how everything else, desk height relationship, keyboard position, monitor height, should be calibrated, getting this foundational element right first makes subsequent checks more meaningful.",
    },
    {
      question: "How do I check if my monitor is positioned correctly during a self-assessment?",
      answer:
        "Sit in your normal posture and check that the top of your screen sits at or slightly below eye level, and that you're positioned roughly an arm's length away, adjusting height and distance as needed based on what you observe.",
    },
    {
      question: "Should I do this assessment once or periodically?",
      answer:
        "Periodically is more valuable, since your posture habits, any new discomfort, or changes to your setup over time can shift what needs adjustment, a quick recheck every few months helps catch issues before they become significant problems.",
    },
    {
      question: "What if my self-assessment reveals multiple issues at once?",
      answer:
        "Address the most foundational issues first, typically chair and desk height relationship, before moving to monitor position and then keyboard/mouse positioning, fixing foundational elements first often naturally improves or clarifies the remaining issues.",
    },
    {
      question: "Does this self-assessment replace a professional ergonomic evaluation?",
      answer:
        "No, a self-assessment is a useful starting point for catching common, obvious issues, but if you're experiencing persistent pain or discomfort despite reasonable adjustments, a professional ergonomic assessment can identify more nuanced issues a self-check might miss.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Check chair height/seat depth first as the foundation, then monitor position (top of screen at or slightly below eye level, arm's length away), then keyboard/mouse positioning (elbows near 90 degrees, wrists neutral). Address foundational issues before moving to secondary adjustments, and repeat this check periodically.

## Self-Assessment Checklist

| Element | What to Check |
|---|---|
| Chair height | Feet flat, knees near 90 degrees |
| Seat depth | 2-4 inches clearance behind knee |
| Monitor height | Top of screen at or slightly below eye level |
| Monitor distance | Roughly arm's length away |
| Keyboard/mouse height | Elbows near 90 degrees, wrists neutral |
| Armrest height | Shoulders relaxed, not raised or hunched |`,
    },
    {
      heading: "Why Starting With Chair and Desk Height Relationship Makes Sense",
      body: `Chair height and its relationship to desk height forms the foundation that everything else in your ergonomic setup builds on, if this foundational relationship is off, your feet dangling or your desk sitting at the wrong height relative to your seated position, adjustments to monitor height or keyboard position are essentially compensating for a fundamentally incorrect starting point rather than fixing the actual root issue, this is why working through an ergonomic assessment in this specific order, foundation first, then building upward to monitor and peripheral positioning, produces more meaningful and lasting improvements than addressing elements in a random order.`,
    },
    {
      heading: "Why Periodic Rechecking Catches Drift That Happens Gradually",
      body: `Ergonomic setups don't necessarily stay correctly configured indefinitely once initially set up correctly, chairs can loosen or shift settings over time, monitor arms can droop, and perhaps most commonly, your own posture habits can gradually drift without you consciously noticing, since this drift happens slowly, it's easy to not notice you've gradually settled into a worse position over weeks or months, a periodic deliberate recheck against this kind of checklist catches this gradual drift before it becomes a significant, harder-to-reverse habit or contributes to genuine discomfort.`,
    },
  ],
};
