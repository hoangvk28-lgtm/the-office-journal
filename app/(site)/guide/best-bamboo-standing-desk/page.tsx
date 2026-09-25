import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-bamboo-standing-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-bamboo-standing-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A bamboo standing desk replaces MDF or laminate with FSC-certified bamboo - a surface that is harder, more moisture-resistant, and grown from one of the fastest-renewing raw materials in furniture production.",
  "This guide covers eight bamboo electric standing desks ranked by FSC certification, bamboo construction (one-piece vs laminate), motor type (single vs dual), height range, and price."
];

export default function Page() {
  return <RichGuidePage slug="best-bamboo-standing-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
