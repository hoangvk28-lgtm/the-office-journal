import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-bookshelf-l-shaped";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-bookshelf-l-shaped",
  image: data.heroImage,
  type: "article",
});

export default function Page() {
  return <RichGuidePage slug="best-bookshelf-l-shaped" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} />;
}
