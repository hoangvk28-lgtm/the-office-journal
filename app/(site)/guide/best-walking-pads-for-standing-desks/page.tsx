import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-walking-pads-for-standing-desks";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-walking-pads-for-standing-desks",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "5 mph you can type accurately and join video calls while covering 3 to 5 miles over a full work day.",
  "This guide covers eight walking pads for standing desks ranked by motor power, incline capability, noise level, and weight capacity, covering budget options under $150 and premium 2-in-1 models up to $400."
];

export default function Page() {
  return <RichGuidePage slug="best-walking-pads-for-standing-desks" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
