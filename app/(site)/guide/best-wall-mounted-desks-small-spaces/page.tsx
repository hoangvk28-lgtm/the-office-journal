import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-wall-mounted-desks-small-spaces";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-wall-mounted-desks-small-spaces",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Wall-mounted desks eliminate floor footprint by mounting directly to the wall. Fold-down Murphy desks create zero floor presence when closed. Ladder desks provide vertical storage in a narrow standing footprint. This guide covers all three types, ranked by review count.",
  "When a room is too small for a freestanding desk, a wall-mounted option is often the only viable path. It is not primarily about aesthetics or minimalism. It is about fitting a functional workspace into a room where every square foot is already committed to something else, whether that is a bedroom, a studio apartment, or a narrow hallway nook. The decision you are making is which type of wall-mounted desk fits how and when you actually work.",
  "The most important distinction is between a fold-down desk and a fixed floating desk. A fold-down desk folds flat against the wall when not in use, recovering the full floor area at the end of the workday. A fixed floating desk stays extended permanently and behaves like a conventional desk that happens to be wall-mounted. The fold-down option is the right choice for part-time use in a shared room; the fixed option is better for a dedicated workspace where you need permanent surface area. Beyond that, depth is frequently overlooked: most fold-down desks are 11 to 14 inches deep when open, which is enough for a laptop but tight for a monitor, keyboard, and mouse together. And all of these products must be anchored into wall studs, not just drywall.",
  "A Murphy desk (fold-down) folds flat against the wall when not in use, creating zero floor footprint when closed. A floating wall desk is permanently extended and cannot be folded. For small rooms where every square foot matters, a fold-down desk recovers the full floor area when the workday ends.",
  "All wall-mounted desks must be anchored into wall studs, not just drywall. A fold-down desk supports active typing load plus monitor weight. Drywall anchors alone will fail under regular use. Use a stud finder before installation and follow the manufacturer anchoring instructions for every product in this guide.",
  "Most fold-down desks are 11 to 14 inches deep when open. A standard 15-inch laptop sits flush or slightly overhangs at 12 inches. 8 inches is the shallowest option; verify your device dimensions before buying. The Modway Render at 24 inches is the deepest and most comfortable for extended desk work.",
  "Fold-down Murphy desks, floating wall desks, and ladder desks."
];

export default function Page() {
  return <RichGuidePage slug="best-wall-mounted-desks-small-spaces" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
