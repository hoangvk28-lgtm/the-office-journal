import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-desk-hutches";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-desk-hutches",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight desk hutches ranked by buyer rating and review count. Covers wall-mounted floating hutches, floor-to-desk units with drawers, bookcase-style hutches, and standard above-desk storage models across a range of prices and finishes.",
  "A desk hutch is the simplest way to add vertical storage above a desk surface without committing to wall mounting or a new desk entirely. The hutch sits on the desk itself and adds shelves, drawers, and compartments where there was previously empty air. The main tradeoff is that it reduces usable desk depth below the hutch, which matters more on desks under 24 inches deep.",
  "The most useful hutches keep the width at or under the desk width, include at least one enclosed compartment or drawer for items you do not want permanently visible, and use a construction material that does not flex or wobble under book or monitor weight. White and natural wood finishes are the most versatile across different room styles.",
  "Above-desk hutches sit on the desk surface and require no wall attachment. Wall-mounted floating hutches (like the TANGKULA unit in this roundup) attach directly to the wall at desk height and leave the desk surface completely clear below them. Wall-mounted units require wall anchoring and studs or wall anchors rated for the load, but they do not reduce desk depth at all. Above-desk hutches require no installation beyond placement.",
  "A hutch wider than your desk extends past the desk edges and looks unintentional. Match hutch width to desk width, or go slightly narrower. Depth is less critical for above-desk hutches since they sit at the back of the desk, but hutches deeper than 12 inches start to noticeably reduce forward desk space. Most standard hutches in this roundup are 9 to 12 inches deep.",
  "Hutches in the $40 to $80 range use particle board or MDF with laminate finish. The difference in quality comes from connector design: cam locks and wooden dowels stay tight longer than simple screws in particle board. Furinno models use a tube-in-socket system that is extremely simple to assemble and stays stable for lighter loads. Sorbus and ChooChoo models use traditional panel-and-cam construction that handles heavier book loads better.",
  "Filter by size, finish, and shelf count."
];

export default function Page() {
  return <RichGuidePage slug="best-desk-hutches" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
