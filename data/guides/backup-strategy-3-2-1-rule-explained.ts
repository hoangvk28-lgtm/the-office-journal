import type { Guide } from "@/data/guides";

export const backupStrategy321RuleExplainedGuide: Guide = {
  title: "The 3-2-1 Backup Rule Explained",
  slug: "backup-strategy-3-2-1-rule-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "storage",
  description:
    "The 3-2-1 backup rule explained in plain terms, covering how many copies of your data to keep and where, so a single failure never means total data loss.",
  mainKeyword: "3-2-1 backup rule explained",
  subKeywords: [
    "what is the 3-2-1 backup rule",
    "how many backup copies do i need",
    "offsite backup explained",
    "external drive backup strategy",
  ],
  heroImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "external-ssd-vs-hdd",
    "external-drive-storage-size-chart",
    "usb4-nvme-enclosure-explained",
    "thunderbolt-vs-usb-c-explained",
  ],
  faq: [
    {
      question: "What does the 3-2-1 backup rule actually mean?",
      answer:
        "It means keeping 3 total copies of your data, on 2 different types of storage media, with 1 copy stored offsite away from your primary location, this structure protects against hardware failure, media-specific issues, and local disasters simultaneously.",
    },
    {
      question: "Why do I need 2 different types of storage media?",
      answer:
        "Different storage media types (like an internal drive and an external drive, or cloud storage and a physical drive) fail for different reasons, using two different types reduces the chance that a single type of failure, like a specific hard drive model defect, wipes out all your copies at once.",
    },
    {
      question: "Does cloud storage count as an offsite backup?",
      answer:
        "Yes, cloud storage is a common and convenient way to satisfy the offsite requirement, since your data physically exists on servers in a different location, protecting against local disasters like fire, theft, or flooding that could destroy all local copies.",
    },
    {
      question: "Is 2 backup copies enough instead of 3?",
      answer:
        "Two copies (your working copy plus one backup) leaves you with no backup at all if that single backup fails or is unavailable when needed, the 3-2-1 rule's extra copy specifically protects against this exact scenario.",
    },
    {
      question: "How often should I update my backups?",
      answer:
        "This depends on how frequently your data changes and how much data loss you could tolerate, daily automated backups are common for actively changing work files, while less frequently changing data can be backed up on a longer schedule.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** The 3-2-1 rule means keeping 3 total copies of your data, on 2 different storage media types, with 1 copy offsite. This structure protects against hardware failure, media-specific defects, and local disasters all at once, rather than relying on a single backup that could fail alongside your original data.

## The 3-2-1 Rule Broken Down

| Component | What It Means | Example |
|---|---|---|
| 3 copies | Original plus 2 backups | Working file, external drive backup, cloud backup |
| 2 media types | Different storage technologies | Internal SSD plus external HDD |
| 1 offsite | Physically separate location | Cloud storage or a drive kept elsewhere |`,
    },
    {
      heading: "Why a Single Backup Isn't Actually Safe",
      body: `Many people believe having one backup copy is sufficient protection, but this leaves you exposed if that single backup fails at the same time you need it, whether due to drive failure, corruption, or simply being unavailable. The 3-2-1 rule's extra layer specifically accounts for this scenario, ensuring that even if your primary backup fails, a second independent copy still exists to recover from.`,
    },
    {
      heading: "Why the Offsite Requirement Addresses a Different Risk Entirely",
      body: `Keeping all your backup copies in the same physical location, even on different drives, means a local disaster like a fire, flood, or theft could destroy every copy simultaneously regardless of how many backups you made. The offsite requirement, whether satisfied through cloud storage or a drive physically kept at a different location, protects specifically against this class of risk that no amount of local redundancy alone can address.`,
    },
  ],
};
