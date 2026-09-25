import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-vertical-laptop-stands";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-vertical-laptop-stands",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 vertical laptop stands ranked by Amazon buyer rating and verified review count.",
  "A vertical laptop stand holds a closed laptop in portrait orientation, freeing the desk surface occupied by a flat laptop. The freed space returns to usable work area when the laptop is connected to an external monitor, keyboard, and mouse in clamshell mode.",
  "This guide covers eight vertical laptop stands ranked by Amazon buyer rating and verified review count, from the most reviewed budget aluminum options to Mac-specific premium stands and Thunderbolt 4 docking stations.",
  "8 stars, lifetime warranty and widest adjustment range in this roundup."
];

export default function Page() {
  return <RichGuidePage slug="best-vertical-laptop-stands" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
