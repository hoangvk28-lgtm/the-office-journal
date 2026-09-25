import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-rolling-carts-with-drawers";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-rolling-carts-with-drawers",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Rolling carts with drawers ranked by review count. Clear-drawer options, 4-drawer and 10-drawer organizer carts, hybrid open-plus-drawer carts, and premium metal frame options covered. All picks are currently available on Amazon and suited for home office use.",
  "If your home office desk has accumulated a collection of loose supplies with no good place to put them, a rolling cart with drawers is one of the most practical fixes. It stores the things you reach for regularly, keeps them out of sight, and moves out of the way when you need floor space. The decision is about finding the right drawer format for what you actually need to store, not just picking the most popular option.",
  "The number of drawers and their depth matter more than most people expect. A 10-drawer cart gives you more categories but each compartment is shallow, which works for pens, sticky notes, and small office supplies but not for notebooks, cables, or anything bulky. A 4-drawer cart with deeper drawers handles a wider range of item sizes but requires more discipline to stay organized. Clear drawers versus opaque is also a real choice: clear lets you find things at a glance, opaque looks cleaner but means opening drawers to locate items.",
  "Carts with more drawers (10-drawer options) have shallower individual compartments. 4-drawer carts have deeper individual drawers that hold bulkier items. For mixed small supply storage, 4 deep drawers often organizes better than 10 shallow drawers.",
  "Filter by drawer count, material, and capacity."
];

export default function Page() {
  return <RichGuidePage slug="best-rolling-carts-with-drawers" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
