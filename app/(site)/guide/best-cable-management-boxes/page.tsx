import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-cable-management-boxes";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-cable-management-boxes",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Cable management boxes solve the most visible desk organization problem: the power strip and cable tangle that accumulates behind every desk, entertainment center, and workstation. The right box hides the clutter, protects children and pets from live cables, and integrates into the desk aesthetic rather than looking like an organizer product.",
  "This guide covers eight top-rated cable management boxes ranked by buyer feedback, size, material, safety features, and value, including plastic boxes, wood-lid options, under-desk trays, and natural rattan designs."
];

export default function Page() {
  return <RichGuidePage slug="best-cable-management-boxes" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
