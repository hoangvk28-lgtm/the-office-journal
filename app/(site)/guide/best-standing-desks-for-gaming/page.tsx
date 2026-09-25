import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-standing-desks-for-gaming";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-standing-desks-for-gaming",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A standing desk for gaming lets you alternate between sitting and standing during long sessions, reducing fatigue and back strain without changing your gaming position.",
  "This guide covers eight standing desks for gaming ranked by shape (wing, L-shaped, straight), RGB features, weight capacity, and price, from budget options under $130 to premium $1,000+ battlestation desks."
];

export default function Page() {
  return <RichGuidePage slug="best-standing-desks-for-gaming" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
