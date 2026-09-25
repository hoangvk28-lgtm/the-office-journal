import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-rocking-footrests-under-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-rocking-footrests-under-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 rocking footrests ranked by Amazon buyer rating and verified review count.",
  "Static footrests reduce the fatigue of dangling feet but do not address the circulation issue that comes from holding the feet in one position for hours. Rocking footrests introduce a gentle back-and-forth movement that activates calf muscles and improves blood flow during sedentary work sessions.",
  "This guide covers eight rocking footrests ranked by Amazon buyer rating and verified review count, including wood balance boards, foam rockers, and three-position designs that include a flat static mode."
];

export default function Page() {
  return <RichGuidePage slug="best-rocking-footrests-under-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
