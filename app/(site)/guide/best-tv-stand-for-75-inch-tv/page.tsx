import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-for-75-inch-tv";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-for-75-inch-tv",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A 75-inch TV puts more demand on a stand than smaller screens: the base footprint is wider, the panel is heavier, and a stand rated for a 55-inch TV will often be too narrow or under-rated to safely hold it.",
  "Before buying, check the stand's width against your TV's actual base foot spread (not just diagonal size), and confirm the weight capacity has margin for the TV plus a soundbar or media console."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-for-75-inch-tv" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
