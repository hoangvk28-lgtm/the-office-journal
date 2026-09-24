import type { Guide } from "@/data/guides";

export const humidifierRoomSizeChartGuide: Guide = {
  title: "Humidifier Room Size Chart by Tank Capacity",
  slug: "humidifier-room-size-chart",
  categorySlug: "desk-setup",
  subcategorySlug: "home-comfort",
  description:
    "Humidifier room size chart matching tank capacity and output to square footage so you choose a humidifier that actually maintains comfortable humidity.",
  mainKeyword: "humidifier room size chart",
  subKeywords: [
    "humidifier size for room",
    "how big humidifier do i need",
    "humidifier tank capacity guide",
    "best humidifier for small office",
  ],
  heroImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "space-heater-room-size-chart",
    "desk-fan-cfm-explained",
    "space-heater-safety-explained",
    "desk-lamp-lumens-guide",
  ],
  faq: [
    {
      question: "What size humidifier do I need for a small home office?",
      answer:
        "A small humidifier with a 0.5-1 gallon tank comfortably covers a home office up to roughly 250 square feet, larger rooms or open-plan spaces need a larger tank capacity to maintain consistent humidity without frequent refilling.",
    },
    {
      question: "Does tank size determine how well a humidifier covers a room?",
      answer:
        "Tank size mainly determines how often you need to refill it rather than raw coverage area, coverage area is more directly tied to the unit's rated output and fan strength, though larger tanks are typically paired with units built for larger rooms.",
    },
    {
      question: "Can a small humidifier work in a larger room?",
      answer:
        "It can run continuously in a larger room but likely won't maintain a stable target humidity level as effectively, and you'll need to refill more frequently relative to the space it's trying to cover.",
    },
    {
      question: "How often should I refill a small humidifier tank?",
      answer:
        "A small 0.5-1 gallon tank running continuously typically needs refilling once or twice per day depending on humidity output setting and room dryness, larger tanks extend this interval to several days between refills.",
    },
    {
      question: "Does room humidity level affect how big a humidifier I need?",
      answer:
        "Yes, a very dry climate or heating season requires more consistent output to maintain comfortable humidity than a moderately humid environment, so consider your local climate alongside room size when choosing capacity.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Match humidifier coverage rating (not just tank size) to your room's square footage. A small 0.5-1 gallon unit suits a home office up to roughly 250 square feet, larger open spaces need a higher-output unit with a larger tank to avoid constant refilling.

## Humidifier Size by Room

| Room Size | Recommended Tank Capacity |
|---|---|
| Under 150 sq ft | 0.5 gallon |
| 150-250 sq ft | 0.5-1 gallon |
| 250-400 sq ft | 1-2 gallons |
| Over 400 sq ft | 2+ gallons or multiple units |`,
    },
    {
      heading: "Why Coverage Rating Matters More Than Tank Size Alone",
      body: `Tank capacity mainly determines refill frequency, the actual room coverage depends more on the unit's rated output, how much moisture it can add to the air per hour. A humidifier with a large tank but weak output will still struggle to raise humidity in a larger room even though it needs refilling less often, always check the manufacturer's stated square footage coverage rather than assuming tank size alone tells the full story.`,
    },
    {
      heading: "Adjusting for Climate and Heating Season",
      body: `A humidifier appropriately sized for a room in a moderate climate may struggle to keep up during a dry winter heating season, when indoor air dries out significantly faster. If you live somewhere with a pronounced dry season, consider sizing up slightly from the standard room-size chart, or plan to run the humidifier at a higher output setting during those months.`,
    },
  ],
};
