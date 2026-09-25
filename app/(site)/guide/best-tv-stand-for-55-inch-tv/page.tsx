import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-tv-stand-for-55-inch-tv";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-tv-stand-for-55-inch-tv",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Choosing a TV stand for a 55 inch TV comes down to three things competitors rarely explain clearly: whether the top surface actually supports your TV plus a soundbar and streaming gear, whether a corner or floating design fits your specific room layout, and how much enclosed versus open storage you actually need for the equipment behind the screen.",
  "This guide covers seven 55 inch TV stands ranked by weight capacity, storage style, and real clearance considerations, spanning a budget console under $60, a floating wall-mount option, two corner-fit designs, a modern LED gaming stand, and a fireplace-equipped console.",
  "See the full rankings above for all seven picks with pros, cons, and best-for summaries."
];

export default function Page() {
  return <RichGuidePage slug="best-tv-stand-for-55-inch-tv" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
