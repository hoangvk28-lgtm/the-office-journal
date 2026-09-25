import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-walnut-standing-desk";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-walnut-standing-desk",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A walnut standing desk adds a warm executive aesthetic to a home office at a fraction of the cost of solid walnut furniture, using walnut-tone laminate over MDF that looks similar at normal viewing distance.",
  "This guide covers eight walnut standing desks ranked by walnut tone (black, dark, special), size (32 to 79 inches), special features (drawers, L-shaped, 3-stage legs), and value."
];

export default function Page() {
  return <RichGuidePage slug="best-walnut-standing-desk" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
