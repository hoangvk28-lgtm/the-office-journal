import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-wood-cable-management-boxes";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-wood-cable-management-boxes",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Wood cable management boxes bring natural material aesthetics to desk organization, matching premium wood desks and styled home offices far better than plastic alternatives. Solid wood, bamboo, and handwoven rattan options provide distinct aesthetic profiles for different desk styles.",
  "This guide covers eight wood cable management boxes ranked by material quality, interior size, lid mechanism, and value, from budget bamboo picks to premium handcrafted mango wood."
];

export default function Page() {
  return <RichGuidePage slug="best-wood-cable-management-boxes" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
