import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-lap-desks-with-cushion";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-lap-desks-with-cushion",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 lap desks with cushion ranked by Amazon buyer rating and verified review count.",
  "The cushion base on a lap desk serves two functions: it distributes the hard surface pressure away from the legs and creates a slight air gap that reduces heat transfer from the laptop. Without a cushion, a hard lap desk board puts concentrated pressure on the thighs and transfers laptop heat directly.",
  "This guide covers eight cushion lap desks ranked by Amazon buyer rating and verified review count, from standard pillow foam bases and bean bag fill to memory foam options and premium adjustable models with cushion bases.",
  "7 stars, integrated mouse pad and dual bolster cushion base."
];

export default function Page() {
  return <RichGuidePage slug="best-lap-desks-with-cushion" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
