import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-small-printer-stands";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-small-printer-stands",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Small printer stands keep the printer accessible without adding bulk to a compact workspace. This guide covers 2-tier and 3-tier carts under 23 inches wide, ranked by review count. Dimensions and weight capacity are listed for each pick.",
  "In a small home office or a shared room, a standard printer stand can feel like too much furniture. You need the printer off your desk but you do not have floor space to spare. A compact printer stand solves this by keeping the printer accessible at the right height while fitting in the gaps a larger cart cannot, such as beside a bookshelf, in a closet corner, or at the end of a narrow desk run.",
  "The size decision is less obvious than it looks. Width alone does not tell the whole story: a 14-inch-wide cart might fit your footprint but be too shallow front-to-back for a wide-format printer. Weight capacity varies widely across compact models, which matters if you have a laser printer rather than an inkjet. Some small stands include built-in power outlets, which eliminates an extension cord from the equation. Others are low-profile enough to slide under a desk entirely, turning dead floor space into printer storage without adding height.",
  "2-tier carts have a printer shelf and a lower storage tier. 3-tier carts add a middle tier, useful for a scanner or paper supplies. Most compact printer stands in this roundup are 2-tier. The 3-tier options (HOOBRO 3-Tier, VYUOL) cost slightly more but add useful surface area.",
  "Home inkjet printers weigh 5 to 15 lbs. Laser printers range from 20 to 50 lbs. Most compact carts in this roundup have 44 to 99 lbs per shelf. If you have a laser printer, verify the weight capacity matches your specific model before purchasing.",
  "Three picks in this roundup include built-in power outlets and USB ports: the HOOBRO 3-Tier, TUTOTAK, and HOOBRO Charging Station. All three are under $35, making this a low-cost feature upgrade if your printer area lacks a nearby wall outlet.",
  "Filter by size, power outlet, and finish."
];

export default function Page() {
  return <RichGuidePage slug="best-small-printer-stands" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
