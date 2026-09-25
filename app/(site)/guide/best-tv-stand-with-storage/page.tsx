import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-with-storage";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-with-storage",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A TV stand with real storage does more than hold a screen. It hides cable boxes, game consoles, and cords behind closed doors or drawers while still leaving room for a soundbar or streaming device to work properly.",
  "This guide covers eight TV stands ranked by storage type, weight capacity, and how well their doors handle remote signals, from low-cost drawer consoles to wide, reinforced cabinets built for large TVs."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-with-storage" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
