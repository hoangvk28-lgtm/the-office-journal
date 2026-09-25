import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-standing-desk-for-tall-person";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-standing-desk-for-tall-person",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A standing desk for tall people needs a maximum height of at least 50 inches to reach ergonomic standing angles for users 6'2\" and above - most standard desks cap at 47 to 48 inches.",
  "This guide covers eight standing desks for tall users ranked by maximum height (50 to 52 inches), motor stage count (2-stage vs 3-stage), surface width, and price."
];

export default function Page() {
  return <RichGuidePage slug="best-standing-desk-for-tall-person" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
