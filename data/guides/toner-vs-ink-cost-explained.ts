import type { Guide } from "@/data/guides";

export const tonerVsInkCostExplainedGuide: Guide = {
  title: "Toner vs Ink Cost Explained: Calculating Your Real Cost Per Page",
  slug: "toner-vs-ink-cost-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "printers",
  description:
    "Toner vs ink cost explained, with a simple formula for calculating your actual cost per page so you can compare printers honestly before buying.",
  mainKeyword: "toner vs ink cost explained",
  subKeywords: [
    "cost per page calculation printer",
    "is toner cheaper than ink",
    "printer running cost comparison",
    "cheapest printer to run long term",
  ],
  heroImage: "https://images.unsplash.com/photo-1613395450289-e560907d9308?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1613395450289-e560907d9308?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "inkjet-vs-laser-printer",
    "printer-page-yield-explained",
    "printer-troubleshooting",
    "wifi-vs-usb-printer",
  ],
  faq: [
    {
      question: "How do I calculate cost per page for a printer?",
      answer:
        "Divide the cartridge's price by its stated page yield, for example a $60 toner cartridge rated for 3,000 pages costs 2 cents per page, compare this figure across printer models rather than comparing sticker price alone.",
    },
    {
      question: "Is toner always cheaper per page than ink?",
      answer:
        "Generally yes for standard text printing, laser toner cartridges typically yield thousands of pages compared to hundreds for inkjet cartridges, resulting in a lower cost per page despite toner's higher upfront price.",
    },
    {
      question: "Should I factor in printer purchase price, not just cartridge cost?",
      answer:
        "Yes, a full cost comparison should include the printer's purchase price divided across your expected print volume, a cheaper printer with expensive cartridges can cost more overall than a pricier printer with cheap high-yield cartridges, depending on how much you print.",
    },
    {
      question: "Do ink subscription services change this calculation?",
      answer:
        "Yes, some manufacturers offer ink subscription plans charging a flat monthly fee based on page volume rather than per-cartridge, these can be more economical for predictable print volumes but worth comparing against buying cartridges outright for your specific usage pattern.",
    },
    {
      question: "Does color printing cost more per page than black and white?",
      answer:
        "Yes, color printing draws from multiple ink or toner cartridges simultaneously, increasing cost per page substantially compared to black and white text, factor in how much color printing you actually do when calculating overall running cost.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Calculate cost per page by dividing cartridge price by its stated page yield. Include printer purchase price divided by expected total pages printed over its lifetime for a complete cost picture, not just cartridge price alone.

## Simple Cost-Per-Page Formula

| Step | Calculation |
|---|---|
| 1 | Cartridge price ÷ stated page yield = cost per page |
| 2 | Printer price ÷ expected total pages over its life = amortized printer cost per page |
| 3 | Add both figures for a more complete total cost per page |`,
    },
    {
      heading: "Why Sticker Price Is Misleading on Its Own",
      body: `A cheap printer with expensive, low-yield cartridges can end up costing significantly more over a year or two of regular use than a pricier printer designed around affordable high-yield cartridges. This is a well-known business model in the printer industry, printers are often sold near or below cost with the expectation that cartridge sales recoup the difference, so evaluating true cost requires looking past the printer's shelf price to its ongoing running cost.`,
    },
    {
      heading: "Doing the Math Before You Buy",
      body: `Before buying a printer, look up the price and page yield for its actual replacement cartridges, not just the starter cartridges included in the box, which are often lower-capacity than what you'll buy going forward. Multiply your expected monthly page count by the cost-per-page figure to estimate a realistic annual running cost, then compare that total across the printer models you're considering rather than comparing purchase price in isolation.`,
    },
  ],
};
