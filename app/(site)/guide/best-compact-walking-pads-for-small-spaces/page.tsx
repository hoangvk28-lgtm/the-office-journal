import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-compact-walking-pads-for-small-spaces";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-compact-walking-pads-for-small-spaces",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Compact walking pads solve the space problem of standard treadmills by folding to 4 to 6 inches thin for storage under beds and sofas, or folding in half for closet storage. Many measure under 35 inches long, fitting under desks in alcoves and tight spaces.",
  "This guide covers eight compact walking pads ranked by folded profile, belt width, noise level, and value for apartment users and small home offices."
];

export default function Page() {
  return <RichGuidePage slug="best-compact-walking-pads-for-small-spaces" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
