import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-vertical-macbook-stands";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-vertical-macbook-stands",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 vertical MacBook stands ranked by Amazon buyer rating and verified review count.",
  "A vertical MacBook stand stores the laptop in portrait orientation on the desk surface while connected to an external monitor in clamshell mode. The stand frees desk space equal to the laptop footprint and positions the laptop where cable connections are deliberate rather than ad hoc.",
  "This guide covers eight vertical MacBook stands ranked by Amazon buyer rating and verified review count, including passive aluminum holders, model-specific arc designs, combined hub-stands, and Thunderbolt 4 docking stations.",
  "8 stars, lifetime warranty and universal fit for all MacBook models."
];

export default function Page() {
  return <RichGuidePage slug="best-vertical-macbook-stands" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
