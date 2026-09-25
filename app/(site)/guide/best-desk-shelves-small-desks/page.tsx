import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-desk-shelves-small-desks";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-desk-shelves-small-desks",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Desk shelves for small home offices ranked by review count. Monitor risers, dual monitor risers with wood surfaces, adjustable organizer shelves, and desktop bookshelves compared. All picks are currently available on Amazon and suited for home office use.",
  "When a small desk is cluttered, the instinct is to buy more storage. But for most home office setups, the real problem is that everything is piled on one flat surface because there is nowhere else for it to go. A desk shelf adds a second level to your workspace without expanding the footprint, letting you separate what you look at from what you reach for. The question is which type of shelf actually fits your situation.",
  "The most common mismatch is buying a monitor riser when you need vertical storage, or a tall bookshelf when you only need to raise your screen a few inches. A monitor riser is a low platform, typically 3 to 6 inches tall, designed to bring a monitor to eye level while freeing keyboard storage underneath. A desktop bookshelf is a full vertical unit for books, binders, and supplies. They look similar in product photos but solve completely different problems. Width is the other issue to get right before buying: dual monitor risers run 31 to 42 inches across, and a desk under 48 inches wide will not fit one properly.",
  "A monitor riser is a low shelf (3 to 6 inches tall) that raises a monitor to a better viewing height while creating storage space underneath for a keyboard. A desktop bookshelf is a taller unit (24 to 37 inches) for books, binders, and decorative items. The right choice depends on whether monitor height or vertical storage capacity is the primary goal.",
  "Fixed-height risers (HUANUO) have a simpler design and lower price. Adjustable-height risers (WALI) let you dial in the exact height for your viewing angle and seating position. For most home office setups, an adjustable riser provides better long-term ergonomic value.",
  "Monitor risers under 15 inches wide suit desks of any size. 5 inches) require desks 48 inches or wider. Desktop bookshelves (36 to 37 inches) also require wider desks. 8 inches) is the most adaptable for different desk sizes.",
  "Monitor risers, dual risers, and desktop bookshelves."
];

export default function Page() {
  return <RichGuidePage slug="best-desk-shelves-small-desks" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
