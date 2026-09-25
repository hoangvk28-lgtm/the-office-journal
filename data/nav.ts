export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

// Legacy The Office Journal nav — no longer rendered by the header; kept for reference.
export const mainNav: NavItem[] = [
  {
    label: "Workspace Ideas",
    href: "/categories/compact-home-office",
    children: [
      { label: "Workspace", href: "/categories/compact-home-office", description: "Full home office setup ideas" },
      { label: "Compact Essentials", href: "/categories/dorm-essentials", description: "Space-saving picks for tighter setups" },
    ],
  },
  { label: "Desk Setup", href: "/categories/desk-setup" },
  {
    label: "Shop by Category",
    href: "/categories",
    children: [
      { label: "Chairs", href: "/categories/chairs", description: "Task, ergonomic, and kneeling chairs" },
      { label: "Monitors", href: "/categories/monitors", description: "4K, USB-C, and gaming monitors, arms & stands" },
      { label: "Lighting", href: "/categories/lighting", description: "Desk lamps and ring lights" },
      { label: "Accessories", href: "/categories/accessories", description: "Cable management, keyboards & more" },
    ],
  },
  { label: "Work Better", href: "/work-better" },
  { label: "Compare", href: "/compare" },
];

export const footerNav = {
  categories: [
    { label: "Desk Setup", href: "/categories/desk-setup" },
    { label: "Workspace", href: "/categories/compact-home-office" },
    { label: "Chairs", href: "/categories/chairs" },
    { label: "Monitors", href: "/categories/monitors" },
    { label: "Lighting", href: "/categories/lighting" },
    { label: "Accessories", href: "/categories/accessories" },
    { label: "Work Better", href: "/work-better" },
    { label: "Storage & Organization", href: "/categories/small-room-storage" },
    { label: "Compact Essentials", href: "/categories/dorm-essentials" },
  ],
  company: [
    { label: "About Us", href: "/about-workcocoon" },
    { label: "How We Review", href: "/how-we-review" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// ── The Office Journal editorial navigation ──────────────────────────────────
// Primary departments are topical. Reviews / Buying Guides / Deals are content
// formats and live in the secondary nav only.
export const departmentNav: { label: string; href: string; description: string }[] = [
  { label: "Office Furniture", href: "/office-furniture", description: "Chairs, desks, storage and footrests" },
  { label: "Desk Setup", href: "/desk-setup", description: "Monitors, arms, keyboards and cables" },
  { label: "Lighting", href: "/lighting", description: "Desk lamps, light bars and video lighting" },
  { label: "Workspace Ideas", href: "/workspace-ideas", description: "Layouts and inspiration for real rooms" },
  { label: "Ergonomics", href: "/ergonomics", description: "Posture, comfort and healthier setups" },
  { label: "Work Better", href: "/work-better", description: "Focus, habits and working from home" },
];

export const secondaryNav: { label: string; href: string }[] = [
  { label: "Reviews", href: "/reviews" },
  { label: "Buying Guides", href: "/guide" },
  { label: "Deals", href: "/deals" },
];

export const companyNav: { label: string; href: string }[] = [
  { label: "About", href: "/about-workcocoon" },
  { label: "How We Review", href: "/how-we-review" },
  { label: "Editorial Policy", href: "/how-we-review#editorial-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/privacy-policy#terms" },
];
