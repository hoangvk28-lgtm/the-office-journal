import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-desk-hutches-for-small-desks";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-desk-hutches-for-small-desks",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight desk hutches for small desks ranked by review count and rating. Covers open-shelf hutches, pegboard models, and adjustable-width designs from 16 to 40 inches. Each pick evaluated for width fit, shelf count, and suitability for desks under 40 inches.",
  "Finding a desk hutch that fits a small desk without overwhelming it is harder than it looks. Most hutches are designed for large L-shaped desks or executive workstations, and a 48-inch hutch on a 32-inch desk creates more problems than it solves. The right hutch for a small desk has to fit the width precisely, add meaningful vertical storage, and leave enough clear desk surface to actually work.",
  "The key variables are width, shelf count, and whether a pegboard panel adds value for your specific accessories. Adjustable-width models solve the fit problem but often sacrifice shelf count. Fixed-width models offer more shelf options but require measuring the desk before buying. Neither format is universally better.",
  "A desk hutch wider than your monitor creates visual framing and leaves shelf space on both sides. A hutch narrower than the monitor blocks it or requires positioning the hutch off to one side. For a 24-inch monitor, a 37-inch hutch gives clearance on both sides. 6-inch hutch is a closer fit. Always measure the monitor width alongside the desk width before choosing a hutch size.",
  "Pegboard hutches add a hook-ready panel to the back of the unit for hanging headphones, cables, scissors, and small tools. They cost $5-10 more than equivalent plain-shelf models and are worth the premium if you regularly need to store hanging accessories. If your main storage need is books and binders, the extra cost adds no functional benefit over a standard open-shelf hutch.",
  "Filter by width, shelf count, and finish."
];

export default function Page() {
  return <RichGuidePage slug="best-desk-hutches-for-small-desks" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
