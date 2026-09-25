import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-glass-standing-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-glass-standing-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A glass standing desk adds a clean, open aesthetic to a home office while providing a smooth working surface. Tempered safety glass is the standard for all desks in this category.",
  "This guide covers eight glass standing desks ranked by glass type (clear, frosted, dry-erase white), built-in features (drawer, USB charging, monitor riser, RGB), and price."
];

export default function Page() {
  return <RichGuidePage slug="best-glass-standing-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
