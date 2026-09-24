import type { Guide } from "@/data/guides";

export const externalDriveStorageSizeChartGuide: Guide = {
  title: "External Drive Storage Size Chart: How Much Do You Need?",
  slug: "external-drive-storage-size-chart",
  categorySlug: "desk-setup",
  subcategorySlug: "storage",
  description:
    "External drive storage size chart matching common use cases to the right capacity, so you don't overpay for unused space or run out too soon.",
  mainKeyword: "external drive storage size chart",
  subKeywords: [
    "how much external storage do i need",
    "external hard drive size guide",
    "storage capacity for photo backup",
    "external ssd size for video editing",
  ],
  heroImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "6 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "external-ssd-vs-hdd",
    "usb4-nvme-enclosure-explained",
    "thunderbolt-vs-usb-c-explained",
    "printer-page-yield-explained",
  ],
  faq: [
    {
      question: "How much external storage do I need for basic document backup?",
      answer:
        "500GB to 1TB comfortably covers basic document, spreadsheet, and general file backup for most individual users, this is generally more storage than plain text and office documents alone would ever fill.",
    },
    {
      question: "How much storage do I need for photo backup?",
      answer:
        "1-2TB is a reasonable range for a substantial personal photo library, especially if shooting in RAW format, which produces significantly larger files than standard JPEG images, heavy photographers may need more.",
    },
    {
      question: "How much storage do I need for video editing?",
      answer:
        "Video editing benefits from 2TB or more given how quickly raw video footage consumes space, especially at 4K resolution or higher, professional or frequent video editors often need 4TB or more for active project storage.",
    },
    {
      question: "Should I buy more storage than I currently need?",
      answer:
        "A reasonable buffer above current needs is sensible since storage needs tend to grow over time, but buying dramatically more than any foreseeable need wastes money on capacity that may go unused for years.",
    },
    {
      question: "Is it better to buy one large drive or multiple smaller drives?",
      answer:
        "This depends on your backup strategy, a single large drive is simpler to manage, while multiple smaller drives provide redundancy since a single drive failure only affects part of your data, consider your specific backup and redundancy needs.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Match storage capacity to your actual content type: 500GB-1TB for documents and basic backup, 1-2TB for photo libraries (especially RAW format), 2-4TB+ for video editing given how quickly footage consumes space. Buy a reasonable buffer above current needs, not dramatically more.

## Storage Size by Use Case

| Use Case | Recommended Capacity |
|---|---|
| Documents, basic backup | 500GB-1TB |
| Photo library (JPEG) | 1TB |
| Photo library (RAW) | 2TB+ |
| Video editing, 4K footage | 2-4TB+ |
| Professional video/heavy multimedia | 4TB+ |`,
    },
    {
      heading: "Why File Type Matters More Than File Count",
      body: `The type of content you're storing matters far more than simply how many files you have, a thousand text documents take up a trivial amount of space compared to a single hour of 4K video footage, which can consume tens of gigabytes on its own. Before estimating your storage needs, consider the actual file types you work with most, RAW photos and video footage in particular consume space far faster than most people initially expect.`,
    },
    {
      heading: "Planning for Growth Without Overbuying",
      body: `Storage needs generally grow over time as you accumulate more files, so buying a modest buffer above your current actual usage is a reasonable practical approach, buying dramatically more capacity than any foreseeable need, however, ties up money in unused storage capacity that could instead go toward a faster or more durable drive at your actually needed capacity.`,
    },
  ],
};
