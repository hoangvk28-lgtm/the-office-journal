import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-rolling-carts-home-office";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-rolling-carts-home-office",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight rolling carts for home offices ranked by review count. Covers metal utility carts, plastic drawer carts, and a mobile file cabinet. Weight capacities from 22 lbs to 124 lbs per shelf. Each pick evaluated for printer stand use, supply storage, and file storage needs.",
  "A rolling cart for a home office seems simple until you realize how many different problems people are trying to solve with one. Some need a printer stand that can also hold paper reams. Others want a mobile supply station they can pull out from under the desk. Others need something that moves between rooms without tipping. The product category covers all of these, but any individual cart only solves one or two of them well.",
  "The most important variable is what you will actually put in or on the cart and how heavy it will be. An open utility cart with wire shelves handles a heavy printer on top but offers no concealed storage. A cart with plastic drawers organizes small supplies well but may flex under a 20-lb laser printer. Weight capacity and drawer format are not interchangeable, and many listings blur the distinction between the two. Lockable casters also vary: two locking wheels are enough to keep a cart stationary during printing, but if you need to park the cart permanently on uneven flooring, all four matter.",
  "Open shelf carts give immediate visual access to stored items. Drawer carts conceal items for a cleaner appearance. Open carts are better for frequently accessed supplies and as printer stands. Drawer carts are better for organization where hiding clutter matters.",
  "Most utility carts rate at 22 lbs per shelf, sufficient for inkjet printers. Laser printers can weigh 30 to 50 lbs. The Goovilla at 124 lbs and YASONIC at 66 lbs have the highest capacities in this roundup. Always verify your specific printer weight before using any cart as a printer stand.",
  "Lockable casters prevent the cart from rolling when parked. Most carts in this roundup include 2 lockable casters. For printer stand use, 2 lockable casters are sufficient to keep the cart from drifting during printing. Verify lockable casters are included before purchasing if stability is required.",
  "Filter by open shelf, drawer, and weight capacity."
];

export default function Page() {
  return <RichGuidePage slug="best-rolling-carts-home-office" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
