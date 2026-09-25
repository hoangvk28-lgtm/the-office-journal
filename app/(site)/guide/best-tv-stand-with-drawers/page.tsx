import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-with-drawers";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-with-drawers",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A TV stand with drawers gives you enclosed, quick-access storage for remotes, cables, and controllers without the swing clearance a cabinet door needs.",
  "See the full rankings above for all seven picks with pros, cons, and best-for summaries."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-with-drawers" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
