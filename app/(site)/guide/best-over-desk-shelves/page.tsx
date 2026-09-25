import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-over-desk-shelves";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-over-desk-shelves",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Over desk shelves attach to the desk edge via C-clamps, floating above the surface without occupying any desk footprint. This guide covers single-side clamp-on shelves, a desktop hutch, and a desk extender. Products are ranked by review count.",
  "If your desk surface is full and there is no room for a riser or bookshelf, an over desk shelf solves the problem differently. Instead of sitting on top of the desk, these shelves clamp to the edge and extend outward or hang above the surface, adding storage without using any of the area you work on. That makes them one of the few options that reclaims space rather than just reorganizing it.",
  "Two things catch buyers off guard. 5 to 2 inches thick, and many modern desks, especially thick solid wood or standing desk frames, sit outside that range. Check your desk edge thickness before buying. Second, weight limits on wide shelves are often lower than expected. The VIVO 30-inch wide shelf is rated at only 11 lbs per shelf despite its size, which means it works for lightweight accessories but not for a printer or stack of books. Width and capacity do not scale together in this category.",
  "Clamp-on shelves attach to the desk edge and float above or below without using desk surface area. Surface-mount shelves like the Snughome hutch sit on the desk surface and use desk space as their footprint. For a small desk, clamp-on options preserve the primary work area.",
  "Most standard clamp-on shelves can loosen over time from repeated sit-stand height adjustments. Only the VIVO 13-inch and VIVO 16-inch Industrial Pipe in this roundup are explicitly rated as sit-stand compatible. If you have a sit-stand desk, prioritize these two options.",
  "Wider shelves (16 to 30 inches) provide more surface area but may require two clamp points for stability. The 12 to 13-inch narrow options are better suited for small side accessories. The ARES WING at 44 lbs is the highest capacity among the clamp-on options. The VIVO 30-inch has only 11 lbs per shelf despite its width.",
  "Clamp-on shelving, desk extenders, and desktop hutches."
];

export default function Page() {
  return <RichGuidePage slug="best-over-desk-shelves" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
