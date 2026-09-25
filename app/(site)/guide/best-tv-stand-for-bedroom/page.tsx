import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-for-bedroom";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-for-bedroom",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "A bedroom TV stand has different priorities than a living room console: lower profile so the screen sits at a comfortable lying-down viewing angle, a smaller footprint for tighter rooms, and often extra storage since bedrooms rarely have a separate dresser and media unit.",
  "Before buying, measure the space between your bed and the wall the stand will sit against, and check whether a dresser-combo design actually gives you the drawer capacity you need."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-for-bedroom" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
