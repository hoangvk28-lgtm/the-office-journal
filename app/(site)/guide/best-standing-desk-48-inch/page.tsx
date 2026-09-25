import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-standing-desk-48-inch";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-standing-desk-48-inch",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A 48-inch standing desk is the most popular compact size, fitting comfortably in most bedrooms, studios, and small home offices while handling a single monitor or laptop plus peripherals.",
  "This guide covers eight 48-inch electric standing desks ranked by price, special features (drawer, power strip, USB ports), depth (24 vs 30 inch), and brand warranty."
];

export default function Page() {
  return <RichGuidePage slug="best-standing-desk-48-inch" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
