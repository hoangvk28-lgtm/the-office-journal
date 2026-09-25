import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-under-desk-footrests";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-under-desk-footrests",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 under-desk footrests ranked by Amazon buyer rating and verified review count.",
  "An under-desk footrest addresses one of the most common seated ergonomics problems: feet that do not rest flat on the floor. When the feet dangle, the thigh pressure on the seat edge cuts off circulation and adds tension to the lower back. A footrest restores the natural foot-to-floor angle without lowering the desk or chair.",
  "This guide covers eight under-desk footrests ranked by Amazon buyer rating and verified review count, including memory foam, rocker, wood, and mesh options that cover the main footrest types at different price points.",
  "5 stars, most reviewed under-desk footrest in the category."
];

export default function Page() {
  return <RichGuidePage slug="best-under-desk-footrests" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
