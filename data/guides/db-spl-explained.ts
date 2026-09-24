import type { Guide } from "@/data/guides";

export const dbSplExplainedGuide: Guide = {
  title: "dB SPL Explained: Understanding Speaker and Headphone Volume Specs",
  slug: "db-spl-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "audio-gear",
  description:
    "dB SPL explained in plain terms, covering what sound pressure level ratings mean for speakers and headphones and how to compare volume specs across products.",
  mainKeyword: "db spl explained",
  subKeywords: [
    "what is db spl",
    "sound pressure level headphones",
    "speaker db rating meaning",
    "how loud is 100db spl",
  ],
  heroImage: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "headphone-impedance-chart",
    "studio-monitors-vs-regular-speakers",
    "open-back-vs-closed-back-headphones",
    "latency-explained",
  ],
  faq: [
    {
      question: "What does dB SPL actually measure?",
      answer:
        "dB SPL (sound pressure level) measures how loud a sound actually is at a given volume, distinct from a product's dB/mW sensitivity spec, which measures how efficiently it converts power into volume rather than the volume itself.",
    },
    {
      question: "What SPL level is considered safe for extended listening?",
      answer:
        "Sustained exposure above 85 dB SPL over several hours is generally considered risky for hearing health, while short bursts up to 100 dB SPL are more tolerable, which is why many headphones and apps include volume warnings around these thresholds.",
    },
    {
      question: "Does a higher dB/mW sensitivity spec mean louder sound?",
      answer:
        "It means the headphone or speaker produces more volume per unit of power, so a higher sensitivity spec reaches a given loudness with less amplifier power, not that its maximum possible volume is necessarily higher.",
    },
    {
      question: "Why do some headphones sound quiet even with volume maxed out?",
      answer:
        "This usually points to a mismatch between the headphone's impedance and sensitivity and the power output of the device driving them, low-sensitivity or high-impedance headphones connected to a weak source (like a phone) often can't reach a satisfying volume.",
    },
    {
      question: "How is dB SPL different from decibels used for microphones?",
      answer:
        "The underlying decibel scale is the same logarithmic unit, but the context differs: SPL describes how loud output sound is, while a microphone's dB SPL rating (often listed as max SPL) describes the loudest input sound the mic can handle before distorting.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** dB SPL measures actual sound loudness. A speaker or headphone's sensitivity spec (dB/mW or dB/V) measures how efficiently it converts power into that loudness, not the loudness itself. Sustained listening above 85 dB SPL risks hearing damage over time.

## Common SPL Reference Points

| Sound Pressure Level | Example |
|---|---|
| 60 dB SPL | Normal conversation |
| 70 dB SPL | Typical office background noise |
| 85 dB SPL | Upper limit for safe extended listening |
| 100 dB SPL | Loud music, short exposure tolerable |
| 120+ dB SPL | Painful, immediate hearing risk |`,
    },
    {
      heading: "Sensitivity Spec vs Actual Loudness",
      body: `A headphone or speaker's sensitivity rating (typically listed as dB/mW for headphones or dB/W/m for speakers) tells you how loud it gets for a given amount of power, not its absolute maximum volume. Two headphones with the same sensitivity rating driven by the same amplifier at the same volume setting will produce roughly the same actual SPL, but a lower-sensitivity headphone paired with a weak power source (like a phone's headphone jack) may never reach a comfortable listening volume at all, regardless of the volume slider position.`,
    },
    {
      heading: "Why This Matters When Buying Audio Gear",
      body: `If you're buying headphones to use directly from a phone or laptop without a dedicated amplifier, check the sensitivity spec, since low-sensitivity, high-impedance headphones designed for dedicated amp setups may sound noticeably quieter from a phone than the same volume setting on amplified gear. For general listening safety, most modern devices cap output well below dangerous SPL levels, but sustained listening near maximum volume on any device is worth moderating over long sessions.`,
    },
  ],
};
