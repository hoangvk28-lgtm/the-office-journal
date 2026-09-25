import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-for-65-inch-tv";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-for-65-inch-tv",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A 65 inch TV sits between the compact 55 inch class and the largest 75 inch and up sets, which means the right stand needs enough top width and weight capacity for a heavier panel without oversizing your wall run.",
  "This guide covers seven TV stands sized for 65 inch TVs, ranked by base fit, storage style, weight capacity, and price, from a budget LED console under $65 to a fireplace-equipped stand near $320.",
  "See the full rankings above for all seven picks with pros, cons, and best-for summaries."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-for-65-inch-tv" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
