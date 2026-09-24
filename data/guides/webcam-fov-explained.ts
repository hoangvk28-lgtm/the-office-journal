import type { Guide } from "@/data/guides";

export const webcamFovExplainedGuide: Guide = {
  title: "Webcam Field of View (FOV) Explained",
  slug: "webcam-fov-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "webcams-lighting",
  description:
    "Webcam field of view explained, covering how a wider or narrower FOV changes what's visible in frame and which setting suits solo versus multi-person calls.",
  mainKeyword: "webcam fov explained",
  subKeywords: [
    "webcam field of view guide",
    "wide fov vs narrow fov webcam",
    "best webcam fov for video calls",
    "webcam fov for multiple people",
  ],
  heroImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "webcam-resolution-explained",
    "webcam-lighting-explained",
    "ring-light-vs-key-light",
    "best-webcam-for-video-calls",
  ],
  faq: [
    {
      question: "What field of view is best for solo video calls?",
      answer:
        "A narrower field of view, roughly 65-78 degrees, is best for solo calls since it keeps the frame focused on you without showing excessive background, a wider FOV at close range can create a distorted fisheye effect on your face.",
    },
    {
      question: "What field of view is best for multiple people in frame?",
      answer:
        "A wider field of view, 90 degrees or more, captures more of the room and multiple people sitting at a table, useful for a shared office or a desk regularly used for group calls.",
    },
    {
      question: "Does a wider FOV distort my face at close range?",
      answer:
        "Yes, a very wide FOV webcam positioned close to your face can create a subtle fisheye distortion, this is why webcams for solo desk use typically use a moderate FOV rather than the widest available option.",
    },
    {
      question: "Can I adjust field of view without buying a different webcam?",
      answer:
        "Some webcams offer software-adjustable FOV settings, cropping into the wider native lens to simulate a narrower field of view, check whether your specific webcam supports this before assuming you need different hardware.",
    },
    {
      question: "Does FOV affect how far I need to sit from the camera?",
      answer:
        "Yes, a narrower FOV requires slightly more distance to keep your whole head and shoulders in frame comfortably, while a wider FOV can capture the same framing from a closer sitting position, factor in your typical desk distance when choosing.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** A narrower FOV (65-78 degrees) suits solo video calls, keeping focus on you without background distortion. A wider FOV (90+ degrees) suits multiple people or a desk setup capturing more of the room, but can create fisheye distortion on a single face at close range.

## FOV by Use Case

| Use Case | Recommended FOV |
|---|---|
| Solo desk video calls | 65-78 degrees |
| Small group at a table | 78-90 degrees |
| Full room/multiple people | 90+ degrees |
| Content creation, close-up | Narrower, 60-70 degrees |`,
    },
    {
      heading: "Why Wider Isn't Automatically Better",
      body: `It's tempting to assume a wider field of view is a better spec, capturing more of the scene, but at typical desk viewing distance a very wide FOV webcam introduces noticeable distortion around the edges of the frame, including on your own face if you're sitting relatively close to the camera. This fisheye-like effect becomes more pronounced the wider the FOV and the closer you sit, which is why most solo desk setups benefit from a moderate rather than maximum FOV.`,
    },
    {
      heading: "Matching FOV to Your Actual Call Setup",
      body: `If your video calls are almost always solo, a moderate FOV webcam gives you a clean, undistorted frame without capturing unnecessary background. If your desk occasionally needs to show multiple people, like a shared home office or conference-style calls, a wider FOV webcam or one with adjustable software cropping gives you the flexibility to handle both situations without switching hardware.`,
    },
  ],
};
