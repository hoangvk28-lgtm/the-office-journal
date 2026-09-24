import type { Guide } from "@/data/guides";

export const videoConferencingTroubleshootingGuide: Guide = {
  title: "Video Conferencing Troubleshooting: Common Problems and Fixes",
  slug: "video-conferencing-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "video-conferencing",
  description:
    "Video conferencing troubleshooting guide covering audio delay, camera not detected, and frozen video, with fixes to try before restarting everything.",
  mainKeyword: "video conferencing troubleshooting",
  subKeywords: [
    "video call audio out of sync fix",
    "camera not detected video call fix",
    "video freezing during call fix",
    "microphone not working zoom fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "echo-cancellation-explained",
    "screen-sharing-resolution-explained",
    "webcam-troubleshooting",
    "home-network-troubleshooting",
  ],
  faq: [
    {
      question: "Why is my audio out of sync with my video during a call?",
      answer:
        "This often indicates a processing delay or bandwidth issue, closing other bandwidth-heavy applications, checking your internet connection speed, or restarting the call application can resolve temporary sync issues that develop during a session.",
    },
    {
      question: "Why isn't my camera being detected by my video call software?",
      answer:
        "Check that your operating system's camera privacy permissions allow the specific application access, verify no other application is currently using the camera exclusively, and confirm the camera is properly connected if using an external webcam.",
    },
    {
      question: "Why does my video keep freezing or becoming choppy during calls?",
      answer:
        "This typically points to insufficient bandwidth, either from your own connection or network congestion, closing other internet-heavy applications, switching to a wired connection if possible, or lowering your video quality setting within the call software can help.",
    },
    {
      question: "Why does my microphone show as connected but isn't picking up any audio?",
      answer:
        "Check that the correct microphone is selected in both your operating system's sound settings and the specific call application's audio settings, sometimes these two settings don't match, causing the application to listen to the wrong (or no) audio source.",
    },
    {
      question: "Why does a call work fine on one device but have problems on another?",
      answer:
        "This points to a device-specific issue rather than a network or account problem, check for outdated software or drivers on the problematic device, and confirm hardware (camera, microphone) permissions are correctly configured specifically on that device.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Audio/video sync issues and freezing usually point to bandwidth problems, addressed by closing other applications or switching to wired connection. Camera and microphone detection issues usually trace back to permission settings or wrong device selection in both OS and application settings, check both.

## Common Video Conferencing Problems and Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| Audio/video out of sync | Bandwidth or processing delay | Close other apps, check connection, restart app |
| Camera not detected | Permission denied, camera in use elsewhere | Check OS permissions, close other apps using camera |
| Video freezing/choppy | Insufficient bandwidth | Wired connection, lower video quality, close other apps |
| Microphone shows connected but silent | Wrong device selected in OS or app settings | Verify matching selection in both settings locations |`,
    },
    {
      heading: "Why Checking Both OS and Application Settings Resolves Many Microphone Issues",
      body: `A frequent, confusing microphone issue occurs when the operating system's default audio input device doesn't match what the specific call application has selected internally, this means a microphone can show as properly connected and even work in other applications, while a particular video call platform still isn't receiving its audio, because it's actually listening to a different, possibly disconnected, audio source, checking and explicitly matching the selected microphone in both your operating system's general sound settings and the specific call application's own audio settings resolves this common mismatch that isn't obvious from either setting alone.`,
    },
    {
      heading: "Why Bandwidth-Related Issues Often Masquerade as Other Problems",
      body: `Insufficient available bandwidth can manifest as several seemingly different symptoms, audio and video falling out of sync, video becoming choppy or freezing, or even audio dropping out entirely, all stemming from the same underlying cause of the connection struggling to transmit data fast enough for smooth real-time communication, recognizing bandwidth as a common root cause for this range of different-looking symptoms helps focus troubleshooting efforts on connection-related fixes, closing other bandwidth-consuming applications, switching to a wired connection, or lowering video quality settings, rather than treating each symptom as requiring an entirely separate diagnosis and solution.`,
    },
  ],
};
