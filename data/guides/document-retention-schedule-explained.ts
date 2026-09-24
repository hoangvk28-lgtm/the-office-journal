import type { Guide } from "@/data/guides";

export const documentRetentionScheduleExplainedGuide: Guide = {
  title: "Document Retention Schedule Explained",
  slug: "document-retention-schedule-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "document-storage",
  description:
    "Document retention schedule guide explaining general timeframes for keeping tax records, receipts, and statements before safely discarding them.",
  mainKeyword: "document retention schedule explained",
  subKeywords: [
    "how long to keep tax documents",
    "when to shred old bank statements",
    "document retention timeframe guide",
    "how long keep receipts records",
  ],
  heroImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "document-scanning-vs-physical-storage",
    "paper-shredder-security-levels-explained",
    "filing-cabinet-vs-file-box",
    "fireproof-document-storage-explained",
  ],
  faq: [
    {
      question: "How long should I generally keep tax-related documents?",
      answer:
        "A commonly cited general guideline suggests keeping tax returns and supporting documents for around 3-7 years depending on your specific circumstances, since audit timeframes vary, consulting current official tax authority guidance or a tax professional gives the most accurate answer for your specific situation.",
    },
    {
      question: "How long should I keep bank and credit card statements?",
      answer:
        "For statements without tax-relevant transactions, a shorter retention period of about a year is commonly sufficient for reference purposes, statements containing tax-deductible expenses should generally be kept alongside your other tax documents for that longer retention period instead.",
    },
    {
      question: "Do I need to keep receipts for every purchase indefinitely?",
      answer:
        "No, only receipts relevant to warranties, tax deductions, or major purchases you might need to reference for insurance or resale purposes generally warrant longer-term retention, routine everyday purchase receipts can typically be discarded once any return window has passed.",
    },
    {
      question: "Should retention schedules differ for digital versus physical copies of the same document?",
      answer:
        "Generally the retention timeframe applies to the document itself regardless of format, though keeping a digital copy even after discarding the physical original (for documents that don't require physical retention) can provide continued reference access without maintaining physical storage.",
    },
    {
      question: "What documents should I never discard regardless of any retention schedule?",
      answer:
        "Permanent records like birth certificates, social security cards, property deeds, and marriage or divorce certificates should generally be retained indefinitely, these fall outside typical retention schedules since they represent permanent identity or ownership records.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Tax-related documents generally warrant 3-7 years of retention depending on your circumstances, non-tax-relevant bank statements around 1 year, and routine receipts only as long as needed for returns or warranties. Permanent identity and ownership records like birth certificates and property deeds should be retained indefinitely, falling outside typical retention schedules entirely.

## General Retention Guidelines by Document Type

| Document Type | General Retention Period |
|---|---|
| Tax returns and supporting documents | 3-7 years (verify current official guidance) |
| Bank/credit statements (non-tax-relevant) | About 1 year |
| Routine purchase receipts | Until return window passes |
| Permanent records (birth certificate, deeds) | Indefinitely |`,
    },
    {
      heading: "Why Retention Periods Vary by Document Type Rather Than a Single Universal Rule",
      body: `The reasoning behind different retention periods for different document types comes down to how long that specific document might realistically need to be referenced or produced, tax documents need longer retention because tax authorities can, within certain timeframes, request supporting documentation for past filings, while a routine grocery receipt has essentially no ongoing reference value once any return period has passed, understanding this underlying logic, matching retention duration to actual realistic future need rather than applying one blanket rule to all paperwork, helps make more informed decisions about documents that don't fit neatly into a commonly cited category.`,
    },
    {
      heading: "Why Permanent Records Require an Entirely Different Mental Category",
      body: `Documents representing fundamental identity or ownership status, birth certificates, property deeds, marriage certificates, aren't really subject to a "retention schedule" in the same sense as financial paperwork, since they don't have a point at which they become obsolete or unnecessary to retain, treating these as a permanently retained category from the start, rather than accidentally including them in a periodic document purge alongside genuinely disposable paperwork, prevents the serious mistake of discarding something that can be extremely difficult or costly to replace later.`,
    },
  ],
};
