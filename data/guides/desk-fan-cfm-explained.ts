import type { Guide } from "@/data/guides";

export const deskFanCfmExplainedGuide: Guide = {
  title: "Desk Fan CFM Explained: How Much Airflow Do You Need?",
  slug: "desk-fan-cfm-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "home-comfort",
  description:
    "Desk fan CFM explained in plain terms, covering what the rating means for airflow strength and how much CFM you actually need for a desk-sized space.",
  mainKeyword: "desk fan cfm explained",
  subKeywords: [
    "what is cfm fan rating",
    "how much cfm for desk fan",
    "desk fan airflow guide",
    "usb fan cfm comparison",
  ],
  heroImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "space-heater-room-size-chart",
    "ceramic-vs-infrared-space-heater",
    "desk-lamp-lumens-guide",
    "space-heater-safety-explained",
  ],
  faq: [
    {
      question: "What does CFM mean on a fan spec sheet?",
      answer:
        "CFM stands for cubic feet per minute, a measure of how much air the fan moves in that time, a higher CFM rating means stronger, more noticeable airflow at the same fan speed setting.",
    },
    {
      question: "How much CFM do I need for a desk fan?",
      answer:
        "For personal desk cooling within a few feet, a fan rated 15-30 CFM provides noticeable comfortable airflow, larger room-circulation fans rated 100+ CFM are meant to move air across a wider space, not just at your immediate desk area.",
    },
    {
      question: "Does a higher CFM fan mean it's louder?",
      answer:
        "Often yes, since moving more air generally requires either a larger fan blade or faster motor speed, both of which tend to increase noise, though blade design and motor quality also affect how much noise a given CFM rating actually produces.",
    },
    {
      question: "Is CFM the only spec that matters for a desk fan?",
      answer:
        "No, noise level (measured in decibels) and the fan's actual size and blade design also affect real-world comfort, a high-CFM fan that's uncomfortably loud may be worse for a quiet office than a moderate-CFM fan with quieter blade design.",
    },
    {
      question: "Do USB desk fans have meaningfully lower CFM than plug-in fans?",
      answer:
        "Generally yes, USB-powered desk fans are limited by the lower power draw available from a USB port, resulting in lower maximum CFM compared to a similarly sized plug-in fan with access to more power.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** CFM measures how much air a fan moves per minute. For personal desk cooling, 15-30 CFM provides noticeable comfortable airflow within a few feet. Higher CFM ratings move more air but often come with more noise, so balance CFM against your noise tolerance for a shared or quiet workspace.

## CFM by Use Case

| Use Case | Recommended CFM |
|---|---|
| Small USB desk fan, close range | 10-20 CFM |
| Standard desk fan | 15-30 CFM |
| Small room circulation | 50-100 CFM |
| Whole small room cooling | 100+ CFM |`,
    },
    {
      heading: "Why CFM Alone Doesn't Tell You Everything",
      body: `CFM measures raw airflow volume, but how that airflow actually feels depends on additional factors like how focused or spread out the airflow is, and how far you sit from the fan. A high-CFM fan with wide-spread airflow across a room can feel less directly cooling at your specific desk position than a lower-CFM fan aimed precisely at you from a shorter distance, so consider fan placement and airflow direction alongside the raw CFM number.`,
    },
    {
      heading: "Balancing Airflow Against Noise in a Shared Space",
      body: `If you work in a shared office or take frequent calls, a fan's noise level matters as much as its CFM rating, since a genuinely strong airflow fan running constantly in the background can become a real distraction during calls. Check the decibel rating alongside CFM when comparing options, and consider a moderate-CFM fan with quieter blade design over a maximum-CFM model if noise is a concern in your specific workspace.`,
    },
  ],
};
