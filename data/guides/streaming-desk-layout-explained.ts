import type { Guide } from "@/data/guides";

export const streamingDeskLayoutExplainedGuide: Guide = {
  title: "Streaming Desk Layout Explained",
  slug: "streaming-desk-layout-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "streaming-setup",
  description:
    "Streaming desk layout guide covering camera positioning, cable routing, and equipment placement to build a functional and visually clean streaming setup.",
  mainKeyword: "streaming desk layout explained",
  subKeywords: [
    "how to arrange streaming desk",
    "camera position for streaming desk",
    "streaming setup cable management",
    "desk layout for content creator",
  ],
  heroImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "webcam-mount-types-explained",
    "microphone-arm-reach-chart",
    "audio-mixer-vs-audio-interface",
    "cable-management-types-explained",
  ],
  faq: [
    {
      question: "Where should my camera be positioned relative to my monitor for streaming?",
      answer:
        "Position the camera as close to eye level and centered with your primary monitor as possible, since this keeps your eyeline looking naturally toward the camera while you glance at on-screen content, rather than appearing to look away throughout the stream.",
    },
    {
      question: "How should I route cables in a streaming desk setup with lots of equipment?",
      answer:
        "Group cables by device and route them along the back and underside of the desk using clips or a cable raceway, keeping the visible front and top of the desk clear both for a cleaner on-camera appearance and to avoid cables snagging on frequently used equipment.",
    },
    {
      question: "Should equipment be visible on camera or kept out of frame?",
      answer:
        "This is largely a personal and content style choice, some streamers intentionally showcase their setup as part of their brand, while others prefer a cleaner, more minimal frame, either approach works as long as the visible items are deliberately arranged rather than looking cluttered by accident.",
    },
    {
      question: "How much desk depth do I need for a full streaming setup?",
      answer:
        "A streaming setup with a monitor, boom arm microphone, webcam or camera, and possibly a mixer or additional peripherals generally benefits from a desk depth of at least 30 inches to comfortably accommodate everything without feeling cramped.",
    },
    {
      question: "Does lighting placement affect overall desk layout decisions?",
      answer:
        "Yes, lighting needs to be positioned in front of you without appearing directly in frame, which affects where other equipment like monitor arms or shelving can be placed without physically blocking the light's path to your face.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Position your camera at eye level, centered with your primary monitor, to maintain natural eyeline. Route cables along the back and underside of the desk to keep the visible front and top clear. Plan for at least 30 inches of desk depth to comfortably fit a full streaming setup without feeling cramped.

## Streaming Desk Layout Priorities

| Element | Placement Guidance |
|---|---|
| Camera | Eye level, centered with primary monitor |
| Cables | Routed along back/underside, out of view |
| Lighting | In front of you, not blocking camera or in frame |
| Microphone arm | Positioned for reach without blocking camera view |`,
    },
    {
      heading: "Why Camera Position Relative to Your Monitor Affects Perceived Eye Contact",
      body: `Viewers perceive eye contact based on where you appear to be looking relative to the camera, if your camera sits far to the side of your primary monitor, you'll frequently appear to be looking away or to the side whenever you glance at your screen's content, chat, or notes. Centering the camera as closely as possible with your primary monitor, or at least keeping it close to your natural eyeline, maintains a more consistent sense of direct engagement with viewers throughout the stream.`,
    },
    {
      heading: "Why Cable Routing Affects Both Appearance and Practical Function",
      body: `Beyond the visual benefit of a clean on-camera appearance, properly routed cables along the back and underside of a streaming desk also serve a practical function, preventing cables from being in the way of frequently used equipment like a microphone boom arm's range of motion or a webcam's positioning adjustments. Planning cable routes as part of the initial desk layout, rather than as an afterthought once equipment is already placed, avoids needing to redo routing later when a cable turns out to interfere with equipment movement.`,
    },
  ],
};
