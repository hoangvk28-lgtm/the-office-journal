import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-printer-stands-with-storage";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-printer-stands-with-storage",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight printer stands with drawers, shelves, and file storage ranked by review volume and buyer satisfaction. All picks are currently available on Amazon and suited for home office use.",
  "Most home office desks have no permanent place for a printer. It ends up on the desk surface, competing directly with your monitor, keyboard, and actual workspace. A printer stand with storage solves this by giving the printer its own dedicated floor footprint at the right height, with room underneath for paper reams, ink cartridges, and the spare cables that otherwise accumulate in random drawers.",
  "The harder decision is figuring out what kind of storage actually fits how you work. An open-shelf cart keeps everything visible but shows every item stored on it. A unit with enclosed drawers looks cleaner but adds a layer of friction when you need something quickly. A stand with a built-in power outlet removes the need for a separate extension cord running across the floor. Weight capacity matters too: a 20-pound inkjet and a 40-pound laser printer are very different loads, and not all carts are rated for the heavier option.",
  "Open shelves provide immediate visual access to stored items and no opening mechanism to break over time. Enclosed drawers conceal items for a cleaner appearance and protect paper from dust. Most printer stands in this roundup combine one or two drawers with open shelf tiers.",
  "A printer stand with a built-in power outlet eliminates the need for a separate power strip near the printer. The HOOBRO and YAOHUOO 3-Tier models include outlets and USB ports in this roundup. Useful when the printer area lacks a nearby wall outlet.",
  "Three-drawer rolling file cabinets sit at approximately 27 to 29 inches tall, close to standard desk height. Most home inkjet printers fit comfortably on a lateral file cabinet top surface. Confirm the weight capacity before placing a laser printer on top.",
  "Filter by size, storage type, and power outlet availability."
];

export default function Page() {
  return <RichGuidePage slug="best-printer-stands-with-storage" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
