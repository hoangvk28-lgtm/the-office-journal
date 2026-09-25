import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-clamp-on-desk-drawers";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-clamp-on-desk-drawers",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight clamp-on desk drawers ranked by review count and rating. Covers keyboard tray combos, pure storage drawers, swivel options, and sit-stand compatible picks. All mount without drilling using a C-clamp mechanism.",
  "If your desk has no built-in drawers and you do not want to drill holes or commit to permanent adhesive, a clamp-on drawer is the practical middle ground. It grips the desk edge with a C-clamp mechanism, requiring no tools beyond tightening a knob. The drawer installs in minutes and comes off the same way, which makes it suitable for renters, people who move their setup frequently, or anyone who wants to try under-desk storage without a permanent commitment.",
  "Two things trip up buyers in this category. 75 and 2 inches thick, but thick frames, beveled edges, or unusual desk profiles can fall outside that range. Measure your desk edge before buying. Second, the distinction between a keyboard tray with a small pencil drawer and a dedicated storage drawer is easy to miss in listings: two products in this guide are primarily keyboard trays while the rest are storage-first. If keyboard repositioning is not your goal, those are not the right picks.",
  "Two products in this roundup (VIVO and BONTEC) are primarily keyboard trays that also include a small pencil drawer. The other six are pure storage drawers designed for concealed item storage. Choose based on whether ergonomic keyboard repositioning is the priority or storage is.",
  "Standard clamp-on drawers may shift or loosen through repeated height adjustment cycles. The VIVO 22-inch and VIVO keyboard tray are the only products in this roundup explicitly rated for sit-stand desks. If you have a height-adjustable desk, check for this specification before purchasing.",
  "75 to 2 inches thick. Measure your desk thickness before purchasing. Desks with beveled edges, thick frames, or unusual profiles may fall outside the clamp range. Check the product specification for the exact clamp range measurement.",
  "No-drill options for renters and sit-stand compatible options available."
];

export default function Page() {
  return <RichGuidePage slug="best-clamp-on-desk-drawers" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
