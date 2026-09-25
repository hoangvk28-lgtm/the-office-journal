import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-lap-desks-for-bed";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-lap-desks-for-bed",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 lap desks for bed ranked by Amazon buyer rating and verified review count.",
  "Using a laptop in bed without a lap desk puts the device directly on soft bedding that blocks bottom vents and causes overheating. A lap desk provides a hard surface that elevates the laptop above the mattress, keeps vents clear, and protects legs from the heat the laptop generates.",
  "This guide covers eight lap desks for bed use ranked by Amazon buyer rating and verified review count, including cushioned flat boards, adjustable-angle designs, height-adjustable models, and foldable options for small bedroom storage.",
  "7 stars, five heights plus four angles for every in-bed working position."
];

export default function Page() {
  return <RichGuidePage slug="best-lap-desks-for-bed" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
