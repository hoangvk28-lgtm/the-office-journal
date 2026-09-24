import type { Guide } from "@/data/guides";

export const screenSharingResolutionExplainedGuide: Guide = {
  title: "Screen Sharing Resolution Explained",
  slug: "screen-sharing-resolution-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "video-conferencing",
  description:
    "Screen sharing resolution guide explaining why shared screens often look blurrier than expected and how to optimize what you present during calls.",
  mainKeyword: "screen sharing resolution explained",
  subKeywords: [
    "why does screen share look blurry",
    "optimize screen for video call presentation",
    "screen sharing text readability",
    "resolution scaling screen share",
  ],
  heroImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "monitor-resolution-explained",
    "font-size-and-scaling-for-eye-comfort",
    "video-call-etiquette-technical-setup",
    "bandwidth-needs-for-remote-work",
  ],
  faq: [
    {
      question: "Why does my shared screen look blurrier to others than it does to me?",
      answer:
        "Most video call platforms compress screen share video significantly to conserve bandwidth, this compression particularly affects fine text and detailed graphics, meaning what looks crisp on your own high-resolution monitor can appear noticeably softer to viewers on the other end.",
    },
    {
      question: "Does increasing my own display resolution improve how my screen share looks to others?",
      answer:
        "Not necessarily, since the bottleneck is typically the platform's compression during transmission rather than your original display resolution, a higher-resolution source doesn't guarantee better perceived quality if the platform compresses it down regardless.",
    },
    {
      question: "How can I make text more readable during a screen share presentation?",
      answer:
        "Increase font sizes in whatever application you're presenting beyond what feels necessary on your own screen, since compression and the viewer's potentially smaller display both work against readability, erring toward larger text improves the actual viewing experience for participants.",
    },
    {
      question: "Should I close unnecessary windows and browser tabs before screen sharing?",
      answer:
        "Yes, beyond a professional appearance, reducing visual clutter helps viewers focus on the relevant content, and can slightly reduce the visual complexity the compression algorithm needs to process, potentially improving perceived quality of the actual content being shown.",
    },
    {
      question: "Does sharing a single application window instead of the full screen improve quality?",
      answer:
        "It can help focus available bandwidth and compression resources on the relevant content specifically, rather than the compression algorithm needing to process your entire desktop including irrelevant background elements, generally producing a cleaner result for the actual content being presented.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Video call platforms significantly compress screen share video to conserve bandwidth, causing fine text and details to look blurrier to viewers than on your own screen. Increase font sizes beyond what feels necessary, close unnecessary windows, and share a single application rather than your full screen for better perceived quality.

## Improving Screen Share Quality

| Adjustment | Why It Helps |
|---|---|
| Increase font sizes | Compensates for compression softening text |
| Close unnecessary windows/tabs | Reduces clutter, focuses viewer attention |
| Share single app vs full screen | Focuses compression on relevant content |
| Avoid assuming higher display resolution fixes it | Bottleneck is usually platform compression |`,
    },
    {
      heading: "Why Compression, Not Your Display, Is Usually the Actual Bottleneck",
      body: `It's a common but mistaken assumption that upgrading to a higher-resolution monitor or display will directly improve how your screen share looks to other call participants, in reality, most video call platforms apply significant compression to screen share video specifically to keep bandwidth usage manageable across varying participant connection speeds, this compression step, not your original display's resolution, is typically the actual limiting factor determining how sharp or blurry your shared content appears to viewers, understanding this helps set realistic expectations and points toward the actual effective solutions, larger text and simpler visual content, rather than display hardware upgrades.`,
    },
    {
      heading: "Why Erring Toward Larger Text Genuinely Improves the Viewing Experience",
      body: `Since compression specifically tends to soften fine details and small text more than bold, larger elements, deliberately increasing font sizes in whatever you're presenting, spreadsheets, documents, presentation slides, beyond what feels necessary when viewing on your own crisp, close-up monitor, compensates directly for this compression effect and for the reality that viewers may also be watching on a smaller or lower-resolution device than your own, this simple adjustment, planning presentation content with the actual compressed viewing experience in mind rather than your own local viewing experience, produces a meaningfully more readable result for your actual audience.`,
    },
  ],
};
