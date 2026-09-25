import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-for-85-inch-tv";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-for-85-inch-tv",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "An 85 inch TV can weigh 80 to 100+ lbs on its own, well beyond what a generic universal TV stand is rated to hold, and its foot spread often exceeds the width many \"large screen\" consoles were actually designed around.",
  "This guide covers six extra-wide TV stands ranked by top weight capacity, console width, and storage layout, from a 129 dollar budget pick up to a 118 inch extra-wide console rated for 270 lbs.",
  "See the full rankings above for all six picks with pros, cons, and best-for summaries."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-for-85-inch-tv" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
