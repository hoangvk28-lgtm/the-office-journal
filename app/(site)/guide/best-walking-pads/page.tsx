import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-walking-pads";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-walking-pads",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Walking pads are compact under-desk treadmills designed for 1 to 4 mph walking during desk work or light cardio. They fold flat for storage under furniture, operate quietly enough for home and office use, and require minimal maintenance compared to full-size treadmills.",
  "This guide covers eight top-rated walking pads ranked by buyer feedback, noise level, weight capacity, incline capability, and value across all budgets from $89 to $400."
];

export default function Page() {
  return <RichGuidePage slug="best-walking-pads" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
