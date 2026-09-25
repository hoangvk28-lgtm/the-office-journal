import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-cable-management-boxes-for-desks";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-cable-management-boxes-for-desks",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Cable management boxes hide power strips, surge protectors, and cable clusters from view, turning the tangled wire pile behind a desk into a clean organized unit. They work on desk surfaces, floors, and under desk surfaces via clamp-mount trays.",
  "This guide covers eight cable management boxes for desks ranked by size, design, safety features, and value, including on-desk boxes and under-desk clamp trays."
];

export default function Page() {
  return <RichGuidePage slug="best-cable-management-boxes-for-desks" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
