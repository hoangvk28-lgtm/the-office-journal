import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-adjustable-vertical-laptop-stands";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-adjustable-vertical-laptop-stands",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 adjustable vertical laptop stands ranked by Amazon buyer rating and verified review count.",
  "A fixed vertical stand works well when you only have one laptop of one specific thickness. An adjustable vertical stand slides to fit different laptop thicknesses and accommodates households or offices where multiple devices share the same stand. The adjustment mechanism is the defining feature.",
  "This guide covers eight adjustable vertical laptop stands ranked by Amazon buyer rating and verified review count, from budget ABS models to premium aluminum with smooth slide mechanisms.",
  "71 inch adjustment range covering all consumer laptop thicknesses."
];

export default function Page() {
  return <RichGuidePage slug="best-adjustable-vertical-laptop-stands" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
