import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-with-mount";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-with-mount",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A TV stand with mount builds the wall-mount look into the furniture itself: a steel bracket or pole on the back panel holds the TV a few inches above the console top, so the screen appears to float without any wall drilling.",
  "This guide covers eight built-in mount consoles ranked by VESA compatibility, mount weight rating, swivel and tilt range, and storage, from budget corner units under $60 to furniture-grade cabinets with power outlets and LED lighting."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-with-mount" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
