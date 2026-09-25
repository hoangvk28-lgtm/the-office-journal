import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-white";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-white",
  image: data.heroImage,
  type: "article",
});

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-white" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} />;
}
