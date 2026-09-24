import type { Guide } from "@/data/guides";

export const homeNetworkTroubleshootingGuide: Guide = {
  title: "Home Network Troubleshooting for Remote Work",
  slug: "home-network-troubleshooting",
  categorySlug: "desk-setup",
  subcategorySlug: "home-network",
  description:
    "Home network troubleshooting guide covering slow WiFi, dropped video calls, and intermittent connectivity, with fixes to try before calling your ISP.",
  mainKeyword: "home network troubleshooting remote work",
  subKeywords: [
    "wifi keeps dropping during video calls",
    "slow internet home office fix",
    "intermittent wifi connection fix",
    "router troubleshooting steps",
  ],
  heroImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "router-placement-explained",
    "bandwidth-needs-for-remote-work",
    "mesh-wifi-vs-single-router",
    "ethernet-vs-wifi-for-desk-setup",
  ],
  faq: [
    {
      question: "Why does my WiFi keep dropping specifically during video calls?",
      answer:
        "This often indicates congestion from other devices on the network, interference from other wireless devices, or being too far from the router, switching to ethernet for the call, or pausing other bandwidth-heavy activity during the call, are quick first steps to try.",
    },
    {
      question: "Why is my internet slow even though my plan advertises high speeds?",
      answer:
        "Run a speed test connected directly via ethernet to isolate whether the issue is your WiFi or your actual internet service, WiFi congestion, router placement, or too many connected devices can all create a gap between advertised and actual experienced speed.",
    },
    {
      question: "Why does my connection work fine sometimes but drop intermittently at other times?",
      answer:
        "Intermittent issues often correlate with specific times of day (network congestion from neighbors on shared infrastructure) or specific activities (another household member starting a large download), tracking when drops happen can help identify a pattern pointing to the actual cause.",
    },
    {
      question: "Should I restart my router regularly as routine maintenance?",
      answer:
        "Occasional restarts can clear minor software glitches that accumulate over weeks of continuous operation, if you experience recurring unexplained slowdowns, a router restart is a reasonable low-effort troubleshooting step before more involved diagnosis.",
    },
    {
      question: "When should I actually contact my internet service provider?",
      answer:
        "If speed tests consistently show results well below your paid plan's speed even via direct ethernet connection with no other explanation, or you experience frequent complete outages, contacting your provider is appropriate since the issue may be with their infrastructure or your account's service line.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Isolate WiFi issues from actual internet service issues by testing speed via a direct ethernet connection first. Video call drops often trace back to network congestion or distance from the router, easily tested by switching to ethernet or pausing other bandwidth use during the call.

## Troubleshooting Steps

| Step | Purpose |
|---|---|
| Speed test via ethernet | Isolates WiFi issues from actual internet service issues |
| Check for other devices using bandwidth | Identifies congestion as a possible cause |
| Test call quality via ethernet vs WiFi | Confirms whether WiFi specifically is the issue |
| Restart router | Clears minor accumulated software glitches |
| Contact ISP if speed consistently below plan | Confirms and escalates a service-level problem |`,
    },
    {
      heading: "Why Testing via Ethernet First Saves Significant Troubleshooting Time",
      body: `A direct ethernet connection to your router bypasses all the variables that can affect WiFi specifically, distance, interference, competing device traffic, so running a speed test this way tells you definitively whether your actual internet service is performing as expected. If ethernet speeds look correct but WiFi speeds are poor, the problem is isolated to your wireless network specifically, saving you from unnecessarily troubleshooting or contacting your ISP about an issue that's actually just a WiFi configuration or placement problem.`,
    },
    {
      heading: "Why Video Call Drops Deserve Specific, Targeted Troubleshooting",
      body: `Video calls are particularly sensitive to brief connection interruptions that might go unnoticed during regular browsing, since they require continuous, real-time data flow rather than tolerating brief pauses the way loading a webpage does. If drops happen specifically during calls, testing with ethernet instead of WiFi for your next important call, or asking household members to pause large downloads during your meeting times, directly tests whether congestion or WiFi reliability is the specific culprit before assuming a broader internet service problem.`,
    },
  ],
};
