import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-under-desk-footrests-for-short-people";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-under-desk-footrests-for-short-people",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 under-desk footrests for short people ranked by Amazon buyer rating and verified review count.",
  "Under-desk footrests are not one-size-fits-all products. For shorter users whose feet do not comfortably reach the floor from a standard chair, the footrest height requirement is greater than for average-height users. A footrest that provides 2 inches of lift for a 5-foot-8 user may provide insufficient lift for a 5-foot user on the same chair.",
  "This guide covers eight footrests selected for suitability with shorter users, evaluated for height range, adjustability, and surface dimensions appropriate for smaller feet. All picks are ranked by Amazon buyer rating and verified review count.",
  "5 stars, memory foam with adjustable height options."
];

export default function Page() {
  return <RichGuidePage slug="best-under-desk-footrests-for-short-people" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
