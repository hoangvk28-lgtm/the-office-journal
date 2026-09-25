import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-standing-desk-for-dual-monitors";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-standing-desk-for-dual-monitors",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A standing desk for dual monitors needs at least 55 inches of surface width, a stable frame that handles the combined monitor weight, and a height range that covers both your sitting and standing positions.",
  "This guide covers eight standing desks for dual monitors ranked by width (48 to 72 inches), surface depth, motor configuration, and special features like bamboo tops, risers, and drawers."
];

export default function Page() {
  return <RichGuidePage slug="best-standing-desk-for-dual-monitors" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
