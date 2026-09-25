import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-corner-standing-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-corner-standing-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A corner standing desk maximizes your available wall space by using two walls simultaneously, giving you more surface area than a straight desk of the same listed width.",
  "This guide covers eight L-shaped electric standing desks ranked by frame stability, motor configuration, desktop size, and price, from budget options under $200 to heavy-duty triple-motor frames."
];

export default function Page() {
  return <RichGuidePage slug="best-corner-standing-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
