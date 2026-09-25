import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-white-desk-hutches";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-white-desk-hutches",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight white desk hutches ranked by buyer rating and review count. Covers open-shelf white hutches, white hutches with drawers, and premium white hutches with doors for clean-look desk setups.",
  "White hutches are the most popular finish choice for home desk setups because they brighten small spaces, work with a wider range of furniture colors, and create a clean aesthetic that suits both minimalist and traditional desk setups. White laminate is also easier to wipe down than wood finishes and does not yellow significantly under normal lighting.",
  "The main consideration for white hutches is finish consistency. A white hutch from one brand will not match perfectly with a white desk from another brand. The Tangkula and Snughome models in this roundup use warm white finishes that read as off-white in daylight. The Bush Furniture Cabot model uses a pure white that is closer to a bright white finish. Viewing product photos in the same lighting as your desk setup helps set expectations.",
  "Not all white finishes are the same. Bright white (pure white, RGB 255/255/255) works best in modern or Scandinavian-style setups. Warm white (slightly cream or off-white) matches better with traditional wooden furniture. Most Amazon product listings show photos under studio lighting that makes whites appear brighter. Reading buyer review photos gives a more accurate sense of the in-room appearance.",
  "Several hutches in this roundup combine white panels with wood-tone accents. The Tangkula 3-tier white hutch uses white shelves with natural wood trim. This hybrid approach is popular because it adds warmth to an otherwise flat white finish and is more forgiving when paired with non-white desk furniture. Pure white hutches look cleaner but show fingerprints and scuffs more visibly.",
  "White laminate edges can chip during assembly if panels are forced together or connector holes are not pre-drilled accurately. The Bush Furniture Cabot model uses pre-drilled holes and cam lock connectors that minimize chip risk. Furinno and Snughome use a tube-in-socket assembly that avoids drilling altogether, which prevents edge damage on the white finish.",
  "Filter by size, drawer count, and shelf style."
];

export default function Page() {
  return <RichGuidePage slug="best-white-desk-hutches" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
