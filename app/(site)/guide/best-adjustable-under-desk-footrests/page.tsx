import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-adjustable-under-desk-footrests";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-adjustable-under-desk-footrests",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "8 adjustable under-desk footrests ranked by Amazon buyer rating and verified review count.",
  "A fixed-height footrest works well when the desk and chair height never change. For users who adjust their desk height throughout the day, share a desk with another person, or switch between a standard office chair and a drafting stool, a fixed footrest creates a different ergonomic problem every time the setup changes.",
  "This guide covers eight adjustable under-desk footrests ranked by Amazon buyer rating and verified review count, focusing on models with meaningful height or angle adjustment rather than fixed single-position designs.",
  "4 stars, two height settings with massage surface."
];

export default function Page() {
  return <RichGuidePage slug="best-adjustable-under-desk-footrests" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
