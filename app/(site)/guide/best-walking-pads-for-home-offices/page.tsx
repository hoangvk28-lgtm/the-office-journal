import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-walking-pads-for-home-offices";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-walking-pads-for-home-offices",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Home-office walking pads face different requirements than gym treadmills: quiet enough for video calls, compact enough for room aesthetics, and reliable enough for daily use without maintenance interruptions.",
  "This guide covers eight walking pads for home offices ranked by noise level, daily-use durability, app connectivity, and value, including options under $100 and premium quiet-motor models."
];

export default function Page() {
  return <RichGuidePage slug="best-walking-pads-for-home-offices" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
