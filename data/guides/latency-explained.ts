import type { Guide } from "@/data/guides";

export const latencyExplainedGuide: Guide = {
  title: "Audio Latency Explained: Why There's a Delay and How to Fix It",
  slug: "latency-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "audio-gear",
  description:
    "Audio latency explained, covering why you hear a delay when recording or monitoring live audio, and practical settings to reduce it on your setup.",
  mainKeyword: "audio latency explained",
  subKeywords: [
    "what causes audio latency",
    "how to reduce microphone latency",
    "audio interface buffer size latency",
    "usb microphone delay fix",
  ],
  heroImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "sample-rate-bit-depth-explained",
    "audio-interface-channels-chart",
    "xlr-vs-usb-microphone",
    "best-audio-interfaces-for-microphones",
  ],
  faq: [
    {
      question: "What causes audio latency when recording?",
      answer:
        "Latency comes from the time it takes for audio to travel from your microphone through the interface, into your computer's processing, and back out to your speakers or headphones, a delay caused mainly by buffer size and the software processing chain.",
    },
    {
      question: "What is buffer size and how does it affect latency?",
      answer:
        "Buffer size determines how much audio data is processed at once, a smaller buffer size reduces latency but demands more from your computer's processor, while a larger buffer size reduces processing strain but increases the delay you hear.",
    },
    {
      question: "Does a USB microphone have more latency than an XLR setup?",
      answer:
        "Not inherently, latency depends more on your buffer size settings and computer processing than the connection type itself, though direct hardware monitoring (available on many audio interfaces) can bypass software processing delay entirely for near-zero latency monitoring.",
    },
    {
      question: "What is direct monitoring and does it fix latency?",
      answer:
        "Direct monitoring routes the microphone's signal straight to your headphones through the interface's own hardware, bypassing your computer's software processing entirely, which eliminates the latency you'd otherwise hear when monitoring yourself while recording.",
    },
    {
      question: "How much latency is noticeable to a listener?",
      answer:
        "Most people start noticing a distracting delay somewhere around 10-20 milliseconds when monitoring their own voice while speaking or singing, which is why reducing buffer size or using direct hardware monitoring matters specifically for real-time self-monitoring.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Latency is the delay between making a sound and hearing it back through your monitoring setup, caused mainly by buffer size and software processing. Lower the buffer size for less delay, or use direct hardware monitoring on your audio interface to bypass software latency entirely.

## Buffer Size vs Latency Tradeoff

| Buffer Size | Latency | CPU Load |
|---|---|---|
| 32-64 samples | Very low | High |
| 128-256 samples | Low, usually comfortable | Moderate |
| 512 samples | Noticeable delay | Lower |
| 1024+ samples | High, distracting for monitoring | Lowest |`,
    },
    {
      heading: "Why Lowering Buffer Size Isn't a Free Fix",
      body: `A smaller buffer size processes audio in smaller chunks more frequently, which reduces the delay you hear but demands more continuous processing power from your computer. Set the buffer size too low for your computer's capability and you'll get audio glitches, pops, or dropouts instead of a clean low-latency signal, so the right buffer size is a balance specific to your computer's actual processing headroom, not just the lowest available setting.`,
    },
    {
      heading: "Using Direct Monitoring to Sidestep the Problem Entirely",
      body: `Many audio interfaces include a direct monitoring feature that routes your microphone signal straight to your headphone output through the interface's own hardware, completely bypassing your computer's software processing chain. This means you hear yourself with effectively zero latency regardless of your buffer size setting, making it the most reliable fix for anyone who finds software monitoring delay distracting while recording or streaming.`,
    },
  ],
};
