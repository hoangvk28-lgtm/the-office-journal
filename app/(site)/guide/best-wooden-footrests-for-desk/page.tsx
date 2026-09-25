import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-wooden-footrests-for-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-wooden-footrests-for-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 wooden footrests for desk ranked by Amazon buyer rating and verified review count.",
  "Wood footrests occupy a different position in the market than foam alternatives. The material does not compress over time, provides a firmer rocking surface, and matches the aesthetic of wood desks and natural material desk setups. The trade-off is that wood is harder underfoot, louder when rocking, and not suited for bare-foot use.",
  "This guide covers eight wooden footrests ranked by Amazon buyer rating and verified review count, including cherry wood rockers, lauan hardwood adjustable platforms, bamboo options, and a premium steel-roller wood rocker."
];

export default function Page() {
  return <RichGuidePage slug="best-wooden-footrests-for-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
