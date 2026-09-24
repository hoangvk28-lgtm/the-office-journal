import type { Guide } from "@/data/guides";

export const airPurifierCadrExplainedGuide: Guide = {
  title: "Air Purifier CADR Explained: What Rating Do You Need?",
  slug: "air-purifier-cadr-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "home-comfort",
  description:
    "Air purifier CADR rating explained, covering what the number means and how to match it to your room size for effective air cleaning at your desk.",
  mainKeyword: "air purifier cadr explained",
  subKeywords: [
    "what is cadr rating air purifier",
    "cadr rating for room size",
    "air purifier coverage area guide",
    "best cadr for small office",
  ],
  heroImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "humidifier-room-size-chart",
    "desk-fan-cfm-explained",
    "space-heater-room-size-chart",
    "space-heater-safety-explained",
  ],
  faq: [
    {
      question: "What does CADR stand for and measure?",
      answer:
        "CADR stands for Clean Air Delivery Rate, a standardized measurement of how quickly an air purifier filters a specific pollutant (smoke, dust, or pollen) from a room, expressed in cubic feet per minute of clean air produced.",
    },
    {
      question: "What CADR rating do I need for a home office?",
      answer:
        "For a typical home office around 150-200 square feet, look for a CADR rating of at least 100-150, higher CADR ratings clean the air faster and can also handle larger rooms effectively.",
    },
    {
      question: "Does a higher CADR always mean a better air purifier?",
      answer:
        "A higher CADR means faster air cleaning for a given room size, but also consider noise level and filter replacement cost, since a very high CADR unit isn't necessarily the best fit if it's louder or more expensive to maintain than your actual needs require.",
    },
    {
      question: "Are there separate CADR ratings for smoke, dust, and pollen?",
      answer:
        "Yes, most certified air purifiers list three separate CADR numbers, one each for smoke, dust, and pollen, since these particle types differ in size and filtering difficulty, check the specific rating relevant to your main concern.",
    },
    {
      question: "How is CADR different from just the purifier's room size claim?",
      answer:
        "A manufacturer's stated room size coverage is often based on the same CADR data but can vary in how conservatively it's calculated, checking the actual CADR number lets you compare purifiers more directly across brands than relying on room size claims alone.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** CADR (Clean Air Delivery Rate) measures how quickly a purifier cleans air for smoke, dust, and pollen separately. For a typical home office, look for a CADR of at least 100-150 for the pollutant type you're most concerned about.

## CADR by Room Size

| Room Size | Recommended CADR |
|---|---|
| Under 100 sq ft | 50-75 |
| 100-200 sq ft | 100-150 |
| 200-350 sq ft | 150-250 |
| Over 350 sq ft | 250+ or multiple units |`,
    },
    {
      heading: "Why Three Separate CADR Numbers Exist",
      body: `Smoke, dust, and pollen particles differ significantly in size, and a filter that's highly effective at capturing one type isn't automatically equally effective at another, which is why certified air purifiers list three distinct CADR numbers rather than one overall score. If your primary concern is a specific issue, like seasonal pollen allergies, check that specific CADR number rather than assuming a high smoke CADR automatically means equally strong pollen filtering.`,
    },
    {
      heading: "Balancing CADR Against Noise and Running Cost",
      body: `A purifier with a very high CADR relative to your room size will clean air faster, but often at the cost of higher fan noise on its higher speed settings and a filter that needs replacing more frequently given the higher airflow through it. For most home office needs, choosing a CADR that comfortably matches your room size, rather than significantly exceeding it, balances effective air cleaning against unnecessary noise and filter replacement cost.`,
    },
  ],
};
