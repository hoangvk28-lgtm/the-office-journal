import type { Guide } from "@/data/guides";

export const polarPatternsExplainedGuide: Guide = {
  title: "Microphone Polar Patterns Explained: Cardioid vs Omnidirectional",
  slug: "polar-patterns-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "audio-gear",
  description:
    "Microphone polar pattern guide explaining cardioid, omnidirectional, and bidirectional pickup patterns so you can choose the right setting for solo or multi-person recording.",
  mainKeyword: "microphone polar patterns explained",
  subKeywords: [
    "cardioid vs omnidirectional microphone",
    "microphone pickup pattern guide",
    "bidirectional microphone pattern",
    "best polar pattern for podcast",
  ],
  heroImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "8 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "best-usb-condenser-microphones",
    "best-usb-microphones",
    "dynamic-vs-condenser-microphone",
    "best-usb-microphone-kits",
  ],
  faq: [
    {
      question: "What polar pattern is best for solo podcasting?",
      answer:
        "Cardioid is the best pattern for solo podcasting since it picks up sound primarily from directly in front of the mic while rejecting sound from the sides and rear, minimizing room echo and background noise.",
    },
    {
      question: "What is omnidirectional pattern used for?",
      answer:
        "Omnidirectional picks up sound equally from all directions, making it useful for recording a group seated around a single microphone or capturing natural room ambience, but it also picks up more background noise than a directional pattern.",
    },
    {
      question: "What is a bidirectional (figure-8) pattern used for?",
      answer:
        "Bidirectional, also called figure-8, picks up sound equally from the front and rear while rejecting sound from the sides, making it the standard choice for a face-to-face interview with two people sharing one microphone.",
    },
    {
      question: "Can one microphone switch between polar patterns?",
      answer:
        "Some multi-pattern condenser microphones let you switch between cardioid, omnidirectional, and bidirectional through a physical switch or software control, while most budget USB microphones ship fixed to a single pattern, usually cardioid.",
    },
    {
      question: "Does polar pattern affect background noise pickup?",
      answer:
        "Yes significantly. A cardioid pattern rejects far more off-axis background noise than an omnidirectional pattern, which is why cardioid is the default recommendation for most home recording setups without acoustic treatment.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Cardioid picks up sound from the front and rejects the sides/rear, best for solo recording in untreated rooms. Omnidirectional picks up sound from all directions, best for group recording around one mic. Bidirectional picks up front and rear while rejecting the sides, best for two-person face-to-face interviews.

## Polar Patterns at a Glance

| Pattern | Pickup Area | Best For |
|---|---|---|
| Cardioid | Front only, rejects sides/rear | Solo podcasting, streaming, voiceover |
| Omnidirectional | All directions equally | Group recording, room ambience |
| Bidirectional (Figure-8) | Front and rear, rejects sides | Two-person face-to-face interview |
| Supercardioid | Narrower front, tighter than cardioid | Noisy environments, tight isolation |`,
    },
    {
      heading: "Why Cardioid Is the Default for Most Home Setups",
      body: `A cardioid pattern's rejection of side and rear sound is specifically useful in an untreated home office or bedroom, since it minimizes pickup of room echo bouncing off walls and background noise from outside the direct recording zone. This is why the large majority of USB microphones marketed for podcasting and streaming ship fixed to cardioid rather than offering pattern switching, it's simply the most broadly useful pattern for a single person talking directly into the mic.`,
    },
    {
      heading: "Choosing a Pattern for Your Specific Setup",
      body: `If you're recording solo, cardioid is almost always the right call. If you're recording two people facing each other across a table sharing one microphone, bidirectional captures both voices while rejecting side noise from the room. If you're capturing a small group seated around a single central mic, omnidirectional avoids the awkwardness of angling a cardioid mic toward whoever's speaking, though it does trade away background noise rejection to do so.`,
    },
  ],
};
