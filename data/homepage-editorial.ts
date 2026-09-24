// ── Homepage presentation mapping (The Office Journal) ───────────────────────
// PRESENTATION CONFIG ONLY. Every entry references an EXISTING guide or
// product by slug — nothing here creates records or content. Missing slugs are
// skipped at render time, and a guide is never shown twice on the page.
//
// FALLBACK NOTE: "mostRead" is an editorial selection, not analytics-driven —
// replace with real pageview ranking once a data source exists.

export type ArticleFormat = "Buying Guide" | "Review" | "Explainer" | "Ideas" | "How-To";

export interface HomepageArticleRef {
  slug: string;
  /** Optional eyebrow override; otherwise derived from the guide. */
  format?: ArticleFormat;
}

export const homepageEditorial = {
  /** First slug that exists wins. */
  featured: {
    candidates: ["best-office-chair-under-300", "best-mesh-office-chair", "best-ergonomic-chair-under-300"],
    eyebrow: "Featured Guide",
    headline: "The Best Office Chairs for Working From Home",
    dek: "We compare comfort, adjustability, build quality and long-term value to help you find the right chair for your workspace.",
    byline: "The Office Journal Editors",
  },
  latest: [
    { slug: "best-electric-standing-desk", format: "Buying Guide" },
    { slug: "best-monitor-arm-under-100", format: "Review" },
    { slug: "best-clip-on-desk-lamp", format: "Buying Guide" },
  ] as HomepageArticleRef[],
  mostRead: [
    { slug: "best-office-chair-for-back-pain" },
    { slug: "best-small-standing-desk" },
    { slug: "best-under-desk-footrests" },
    { slug: "best-ergonomic-chair-under-500" },
    { slug: "best-monitor-light-bars-for-curved-monitors" },
  ] as HomepageArticleRef[],
  departments: [
    {
      id: "office-furniture",
      title: "Office Furniture",
      href: "/office-furniture",
      topics: ["Office Chairs", "Desks", "Standing Desks", "Storage", "Footrests"],
      articles: [
        { slug: "best-standing-desk-under-500", format: "Buying Guide" },
        { slug: "best-executive-office-chair" },
        { slug: "best-office-chair-for-tall-person" },
        { slug: "best-wood-file-cabinets" },
        { slug: "best-adjustable-under-desk-footrests" },
      ] as HomepageArticleRef[],
    },
    {
      id: "desk-setup",
      title: "Desk Setup",
      href: "/desk-setup",
      topics: ["Monitors", "Monitor Arms", "Keyboards", "Laptop Stands", "Cable Management"],
      articles: [
        { slug: "ultrawide-vs-dual-monitor", format: "Explainer" },
        { slug: "best-mechanical-keyboard-under-100" },
        { slug: "best-vertical-laptop-stands" },
        { slug: "best-cable-management-boxes-for-desks" },
        { slug: "keyboard-size-chart", format: "Explainer" },
      ] as HomepageArticleRef[],
    },
    {
      id: "lighting",
      title: "Lighting",
      href: "/lighting",
      topics: ["Desk Lamps", "Monitor Light Bars", "Ambient Lighting", "Video Call Lighting"],
      articles: [
        { slug: "best-monitor-light-bars" },
        { slug: "desk-lamp-kelvin-color-temperature", format: "Explainer" },
        { slug: "dimmable-vs-fixed-brightness-desk-lamp", format: "Explainer" },
        { slug: "best-desk-lights-for-video-calls" },
      ] as HomepageArticleRef[],
    },
  ],
  workspaceIdeas: {
    title: "Workspace Ideas",
    href: "/workspace-ideas",
    articles: [
      { slug: "minimalist-desk-setup", format: "Ideas" },
      { slug: "small-desk-organization-ideas", format: "Ideas" },
      { slug: "best-standing-desk-for-dual-monitors", format: "Ideas" },
      { slug: "best-desk-shelves-small-desks", format: "Ideas" },
    ] as HomepageArticleRef[],
  },
  workBetter: {
    title: "Work Better",
    href: "/work-better",
    articles: [
      { slug: "ergonomic-desk-setup", format: "How-To" },
      { slug: "laptop-stand-height-chart", format: "How-To" },
      { slug: "20-20-20-rule-explained", format: "Explainer" },
      { slug: "desk-organizers-small-desks", format: "How-To" },
    ] as HomepageArticleRef[],
  },
  /** Used only when no featured deals come back from the database. */
  editorsPicksFallback: [
    { slug: "amazon-basics-low-back-office-chair-b01d7p5bfs", useCase: "For compact desks" },
    { slug: "huanuo-monitor-riser-desk", useCase: "For eye-level screens" },
    { slug: "hon-ofm-essentials-chair-mat-for-low-pile-carpet-b01n99xmm2", useCase: "For carpeted rooms" },
    { slug: "hoobro-height-adjustable-rolling-stool-b0fnwfywyl", useCase: "For counter-height desks" },
  ],
};

export const shoppingCategories = [
  { icon: "desk", label: "Desks", note: "Standing, compact, L-shaped", href: "/desks" },
  { icon: "chair", label: "Office Chairs", note: "Ergonomic, mesh, task", href: "/chairs" },
  { icon: "monitor-arm", label: "Monitor Arms", note: "Single, dual, heavy-duty", href: "/desk-setup" },
  { icon: "lamp", label: "Desk Lamps", note: "Task, ambient, smart", href: "/lighting" },
  { icon: "keyboard", label: "Keyboards", note: "Mechanical, ergonomic", href: "/desk-setup" },
  { icon: "ergonomics", label: "Ergonomics", note: "Footrests, wrist rests", href: "/ergonomics" },
  { icon: "accessories", label: "Accessories", note: "Cables, organizers", href: "/desk-setup" },
] as const;

export type CategoryIconName = (typeof shoppingCategories)[number]["icon"];
