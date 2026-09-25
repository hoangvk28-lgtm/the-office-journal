import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-on-wheels";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-on-wheels",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A TV stand on wheels lets you move your screen between rooms, reposition it for glare-free viewing, or roll it away entirely, something a fixed console or wall mount cannot do.",
  "This guide covers eight rolling TV carts ranked by weight capacity, height range, wheel locking design, and base stability, from budget picks under $100 to a heavy-duty 250 lb cart built for large-screen displays."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-on-wheels" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
