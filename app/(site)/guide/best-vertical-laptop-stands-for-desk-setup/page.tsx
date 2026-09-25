import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-vertical-laptop-stands-for-desk-setup";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-vertical-laptop-stands-for-desk-setup",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 vertical laptop stands for desk setup ranked by Amazon buyer rating and verified review count.",
  "A vertical laptop stand in a desk setup context serves a different purpose than a basic vertical holder. In a dedicated desk setup, the stand position relative to the monitor, cable routing, and aesthetic consistency with other desk accessories all matter alongside basic holding function.",
  "This guide covers eight vertical laptop stands evaluated for desk setup use, ranked by Amazon buyer rating and verified review count. Options include minimal aluminum stands, hub-integrated units for cable management, and premium Thunderbolt 4 dock-stands.",
  "8 stars, lifetime warranty and the cleanest aluminum profile for minimal desk setups."
];

export default function Page() {
  return <RichGuidePage slug="best-vertical-laptop-stands-for-desk-setup" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
