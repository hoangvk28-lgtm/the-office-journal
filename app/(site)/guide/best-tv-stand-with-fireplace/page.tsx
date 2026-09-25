import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-with-fireplace";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-with-fireplace",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A TV stand with a fireplace bundles an electric fireplace insert into the console itself, so unlike a standard media stand, the fireplace insert is usually included in the purchase rather than sold separately.",
  "Before buying, confirm the insert's clearance requirements, check the stand's top weight capacity against your TV and any soundbar you plan to add, and consider whether the fireplace will share an electrical circuit with other AV equipment.",
  "This guide covers eight fireplace TV stands ranked by insert size, TV weight capacity, cabinet style, and price, from budget corner units under $250 to solid wood premium consoles."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-with-fireplace" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
