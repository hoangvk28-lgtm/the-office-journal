import type { Guide } from "@/data/guides";

export const taskLightingVsAmbientLightingGuide: Guide = {
  title: "Task Lighting vs Ambient Lighting for a Desk Setup",
  slug: "task-lighting-vs-ambient-lighting",
  categorySlug: "desk-setup",
  subcategorySlug: "task-lighting",
  description:
    "Task lighting vs ambient lighting explained, covering why a desk needs both types and how to layer them properly to avoid glare and eye strain.",
  mainKeyword: "task lighting vs ambient lighting",
  subKeywords: [
    "desk lamp vs room lighting",
    "layering light for office",
    "task light versus overhead light",
    "best lighting setup for desk work",
  ],
  heroImage: "https://images.unsplash.com/photo-1560890264-4b92305ee66e?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1560890264-4b92305ee66e?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "desk-lamp-lumens-guide",
    "desk-lamp-kelvin-color-temperature",
    "monitor-brightness-and-eye-strain",
    "screen-glare-reduction-explained",
  ],
  faq: [
    {
      question: "What's the difference between task lighting and ambient lighting?",
      answer:
        "Task lighting is focused, direct light aimed at a specific work area like a desk surface, while ambient lighting is the general overall light filling a room, a desk setup benefits from having both working together rather than relying on just one.",
    },
    {
      question: "Can I rely on overhead ambient lighting alone for desk work?",
      answer:
        "Overhead lighting alone often leaves the desk surface underlit relative to a comfortable reading or writing brightness, and can cast shadows from your own body or monitor, a dedicated task light fills this gap that ambient lighting alone doesn't fully address.",
    },
    {
      question: "Does having only a desk lamp without ambient lighting cause problems?",
      answer:
        "Yes, a bright desk lamp in an otherwise dark room creates a high contrast between the lit work area and the dark surroundings, which can contribute to eye strain from your eyes constantly readjusting between the two brightness levels.",
    },
    {
      question: "How do I balance task and ambient lighting properly?",
      answer:
        "Aim for the desk lamp to be noticeably brighter than the room but not dramatically so, roughly a moderate contrast rather than an extreme one, this keeps the work surface well lit without creating jarring brightness differences with the surrounding room.",
    },
    {
      question: "Does natural light count as ambient lighting?",
      answer:
        "Yes, daylight through a window is a form of ambient lighting, though it changes throughout the day, supplementing with artificial ambient lighting for evening hours or overcast days keeps the room's overall brightness more consistent alongside your task lighting.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Task lighting focuses bright, direct light on your work surface, while ambient lighting fills the overall room. A desk setup needs both working together, task lighting alone creates harsh contrast with a dark room, and ambient lighting alone often leaves the desk surface underlit.

## Task vs Ambient Lighting at a Glance

| Factor | Task Lighting | Ambient Lighting |
|---|---|---|
| Coverage | Focused on desk surface | Fills the whole room |
| Source | Desk lamp, adjustable arm light | Overhead fixtures, natural light |
| Purpose | Bright, direct work illumination | General visibility and comfort |
| Used alone | Creates harsh contrast with dark room | Leaves desk surface underlit |`,
    },
    {
      heading: "Why Extreme Contrast Between the Two Causes Eye Strain",
      body: `When a desk lamp creates a small, very bright pool of light surrounded by an otherwise dark room, your eyes must constantly readjust between that bright focal area and the darker periphery as your gaze naturally shifts around the room, this repeated adjustment is a genuine contributor to visual fatigue during long work sessions. Maintaining reasonable ambient light in the room alongside task lighting reduces this contrast and the associated eye strain.`,
    },
    {
      heading: "Layering Both for a Genuinely Comfortable Workspace",
      body: `The most comfortable desk lighting setups treat task and ambient lighting as complementary layers rather than either-or choices, ambient lighting establishes a comfortable overall room brightness, while task lighting adds focused illumination specifically where detailed work, reading, or writing happens. Adjusting each independently, dimming ambient lighting in the evening while keeping task lighting consistent, for example, gives more control over comfort throughout different times of day than a single light source ever could.`,
    },
  ],
};
