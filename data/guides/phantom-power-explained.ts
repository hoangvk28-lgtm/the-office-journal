import type { Guide } from "@/data/guides";

export const phantomPowerExplainedGuide: Guide = {
  title: "Phantom Power Explained: Do You Need 48V?",
  slug: "phantom-power-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "audio-gear",
  description:
    "Phantom power explained in plain terms, covering which microphones need 48V, why USB mics don't need it, and how to check if your interface supplies it.",
  mainKeyword: "phantom power explained",
  subKeywords: [
    "do i need 48v phantom power",
    "phantom power microphone",
    "what is phantom power",
    "audio interface phantom power",
  ],
  heroImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1634041323797-b9fdef9d18f7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "best-audio-interfaces-for-microphones",
    "xlr-vs-usb-microphone",
    "dynamic-vs-condenser-microphone",
    "audio-interface-channels-chart",
  ],
  faq: [
    {
      question: "Do all condenser microphones need phantom power?",
      answer:
        "Most XLR condenser microphones need 48V phantom power to operate, since their internal capsule requires an electrical charge to function. USB condenser microphones don't need external phantom power because that power is supplied internally through the USB connection instead.",
    },
    {
      question: "Do dynamic microphones need phantom power?",
      answer:
        "No, dynamic microphones generate their own electrical signal from sound pressure alone and don't require phantom power. Supplying phantom power to most dynamic mics won't damage them, but it also does nothing since they don't use it.",
    },
    {
      question: "How do I know if my audio interface supplies phantom power?",
      answer:
        "Check for a button or switch labeled 48V or a phantom power icon near the XLR input on your audio interface, this is standard on nearly all interfaces with XLR inputs but always worth confirming in the product listing before buying.",
    },
    {
      question: "Can phantom power damage a microphone?",
      answer:
        "Modern dynamic and ribbon microphones are generally safe with phantom power applied, but older or vintage ribbon microphones can be damaged by phantom power, so check your specific microphone's documentation before engaging it if you're using an older ribbon mic.",
    },
    {
      question: "Why don't USB microphones need phantom power?",
      answer:
        "A USB condenser microphone has its own internal circuitry that converts power from the USB connection into what the capsule needs, essentially building phantom power supply into the microphone itself rather than requiring a separate external source.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Phantom power (typically 48V) is required by most XLR condenser microphones to power their internal capsule. Dynamic microphones don't need it, and USB microphones supply their own equivalent power internally, so you only need to think about phantom power if you're using an XLR condenser mic with a separate audio interface.

## Which Microphones Need Phantom Power

| Microphone Type | Needs Phantom Power |
|---|---|
| XLR condenser microphone | Yes, typically 48V |
| XLR dynamic microphone | No |
| USB condenser microphone | No, supplied internally |
| USB dynamic microphone | No |
| Ribbon microphone (most modern) | Usually no, check documentation |`,
    },
    {
      heading: "What Phantom Power Actually Does",
      body: `A condenser microphone's capsule works by holding an electrical charge across a thin diaphragm, a mechanism that requires continuous external power to function at all. Phantom power delivers this charge (conventionally 48 volts, sent through the same XLR cable that carries the audio signal) from the audio interface or mixer to the microphone. Without it, an XLR condenser microphone simply won't produce any signal, which is a common troubleshooting step when a new XLR condenser mic appears to not be working at all.`,
    },
    {
      heading: "Checking Compatibility Before You Buy",
      body: `If you're buying an XLR condenser microphone, confirm your audio interface has a 48V phantom power switch, since not every budget interface includes it, particularly some very basic 1-2 channel units built primarily for instrument or dynamic-mic recording. If you're buying a USB microphone instead, phantom power isn't a consideration at all, since the microphone handles its own power needs through the USB connection.`,
    },
  ],
};
