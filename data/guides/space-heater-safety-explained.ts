import type { Guide } from "@/data/guides";

export const spaceHeaterSafetyExplainedGuide: Guide = {
  title: "Space Heater Safety Explained: What to Check Before You Buy",
  slug: "space-heater-safety-explained",
  categorySlug: "desk-setup",
  subcategorySlug: "home-comfort",
  description:
    "Space heater safety features explained, covering tip-over shutoff, overheat protection, and placement rules to reduce fire risk in a home office setup.",
  mainKeyword: "space heater safety explained",
  subKeywords: [
    "space heater tip over shutoff",
    "space heater overheat protection",
    "is my space heater safe",
    "space heater fire risk",
  ],
  heroImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1200&auto=format&fit=crop",
  thumbnailImage: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800&auto=format&fit=crop",
  lastUpdated: "2026-09-09",
  author: "Jamie Cole",
  readTime: "7 min",
  recommendedProductIds: [],
  relatedGuideSlugs: [
    "space-heater-room-size-chart",
    "ceramic-vs-infrared-space-heater",
    "desk-fan-cfm-explained",
    "desk-lamp-lumens-guide",
  ],
  faq: [
    {
      question: "What is tip-over shutoff on a space heater?",
      answer:
        "Tip-over shutoff automatically cuts power to the heater if it's knocked over or tilted beyond a safe angle, a critical safety feature since an operating heater lying on its side against carpet or fabric is a real fire risk.",
    },
    {
      question: "What is overheat protection?",
      answer:
        "Overheat protection automatically shuts the heater off if its internal temperature exceeds a safe threshold, protecting against a malfunctioning heating element or blocked airflow that could otherwise continue heating dangerously.",
    },
    {
      question: "How much clearance does a space heater need from other objects?",
      answer:
        "Most manufacturers recommend at least 3 feet of clearance from furniture, curtains, papers, and any flammable material on all sides, this clearance requirement should be checked against your specific desk setup before placing a heater nearby.",
    },
    {
      question: "Is it safe to leave a space heater running unattended?",
      answer:
        "Manufacturers and fire safety organizations generally recommend never leaving a space heater running unattended or overnight, even with tip-over and overheat protection, since these features reduce risk but don't eliminate it entirely.",
    },
    {
      question: "Should I plug a space heater into a power strip?",
      answer:
        "No, most space heater manufacturers explicitly warn against using a power strip or extension cord, since a heater's high wattage draw can overheat a power strip not rated for that continuous load, plug directly into a wall outlet instead.",
    },
  ],
  sections: [
    {
      heading: "",
      body: `> **Quick answer:** Look for both tip-over shutoff and overheat protection as baseline safety features, non-negotiable for any space heater used near a desk. Keep at least 3 feet of clearance from flammable materials, plug directly into a wall outlet (never a power strip), and never leave a heater running unattended.

## Essential Safety Checklist

| Feature/Practice | Why It Matters |
|---|---|
| Tip-over shutoff | Cuts power if heater falls over |
| Overheat protection | Cuts power if internal temp exceeds safe limit |
| 3+ feet clearance | Reduces fire risk from nearby flammable materials |
| Direct wall outlet, no power strip | Prevents power strip overheating |
| Never unattended | Reduces risk from any undetected malfunction |`,
    },
    {
      heading: "Why These Two Features Are Non-Negotiable",
      body: `Tip-over shutoff and overheat protection address the two most common real-world causes of space heater fires: a heater knocked over onto carpet or fabric while still running, and a heater malfunctioning or having its airflow blocked while continuing to heat past a safe temperature. A space heater lacking either feature, particularly older or unbranded models, carries meaningfully more risk than modern heaters where these protections are now standard on most reputable products.`,
    },
    {
      heading: "Placement Matters as Much as the Heater Itself",
      body: `Even a heater with every safety feature still needs proper placement to be genuinely safe, keep it away from curtains, paper stacks, upholstered furniture, and cables, on a stable, flat, non-flammable surface. Under a desk, next to a trash can full of paper, or near loose cables are all common but risky placements worth reconsidering when setting up a heater in a home office.`,
    },
  ],
};
