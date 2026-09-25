import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-lap-desks-for-laptops";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-lap-desks-for-laptops",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 lap desks for laptops ranked by Amazon buyer rating and verified review count.",
  "A lap desk for laptop use is not just a cushion board — it is a protective platform that keeps laptop vents clear, provides a stable typing surface, and shields legs from laptop-generated heat. The primary function is thermal protection for the laptop and comfort for the user.",
  "This guide covers eight lap desks for laptop use ranked by Amazon buyer rating and verified review count, including hard-surface cushion boards, ventilated platforms, models with USB cooling fans, and adjustable height options for different working positions.",
  "7 stars, hard surface with integrated mouse pad and dual bolster cushion."
];

export default function Page() {
  return <RichGuidePage slug="best-lap-desks-for-laptops" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
