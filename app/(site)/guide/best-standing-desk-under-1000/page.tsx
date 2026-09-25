import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-standing-desk-under-1000";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-standing-desk-under-1000",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "The under $1000 range covers everything from reliable budget desks under $250 to commercial-grade BIFMA-certified options and premium bamboo frames approaching the $1000 ceiling.",
  "This guide covers eight standing desks under $1000 ranked by warranty, motor quality, surface material, and certification, starting at $208 and ending just under $1000."
];

export default function Page() {
  return <RichGuidePage slug="best-standing-desk-under-1000" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
