import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-printer-stands-with-file-drawers";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-printer-stands-with-file-drawers",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight printer stands with file drawer capability ranked by review volume and buyer satisfaction. Lateral, vertical, fabric, and locking options compared.",
  "If you have both a printer and a pile of active documents with no good place for either, a printer stand with file drawers is one of the more space-efficient answers available. It puts the printer at a workable height while giving you hanging file storage directly below, in the same footprint. The result is a piece of furniture that earns its floor space by doing two jobs instead of one.",
  "The selection gets complicated fast. Not every rolling cabinet actually supports hanging files: some listings say \"file storage\" but mean open shelves sized for folders, not lateral hanging rails. The drawer orientation matters too. A lateral drawer gives you a wider top surface for your printer, while a vertical format is narrower but taller and may crowd the printer to one side. If locking drawers are important to you, that narrows the field further since most models at this price do not include a lock.",
  "Not all rolling cabinets support hanging files. Look for listings that explicitly state A4, Letter, or Legal file support. The VASAGLE CUSTOS models confirm this in their product titles. DEVAISE models list file hanging in the description, which should be verified in the current listing specs.",
  "Most rolling file cabinet printer stands in this price range do not include a lock. The VASAGLE 4-Drawer Vertical and Letaya metal cabinet are the two options with confirmed locking drawers. Consumer-grade cam locks are standard at this price, not high-security mechanisms.",
  "Filter by file format, drawer count, and finish."
];

export default function Page() {
  return <RichGuidePage slug="best-printer-stands-with-file-drawers" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
