import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stands-for-living-room";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stands-for-living-room",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A good living room TV stand does more than hold your screen. Its height, width, and storage layout need to match your sofa's seated eye line and the overall scale of the room, not just the TV's diagonal size.",
  "This guide covers seven living room TV stands ranked by stand height relative to seated eye level, storage layout, and TV fit, from a low-cost console under $60 to furniture-grade farmhouse and mid-century picks.",
  "See the full rankings above for all seven picks with pros, cons, and best-for summaries."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stands-for-living-room" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
