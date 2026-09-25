import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-dual-vertical-laptop-stands";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-dual-vertical-laptop-stands",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 dual vertical laptop stands ranked by Amazon buyer rating and verified review count.",
  "A dual vertical laptop stand stores two devices in portrait orientation simultaneously, combining the footprint of two devices into the footprint of one side-by-side unit. For users who manage a work laptop and a personal laptop or a laptop and tablet, a dual stand is more efficient than two single stands.",
  "This guide covers eight dual vertical laptop stands ranked by Amazon buyer rating and verified review count, from affordable plastic two-slot options to premium aluminum designs and hub-integrated units.",
  "8 stars, two independent adjustable slots and lifetime warranty."
];

export default function Page() {
  return <RichGuidePage slug="best-dual-vertical-laptop-stands" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
