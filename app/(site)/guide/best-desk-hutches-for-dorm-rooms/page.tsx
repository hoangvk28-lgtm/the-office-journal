import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-desk-hutches-for-dorm-rooms";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-desk-hutches-for-dorm-rooms",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight desk hutches for dorm rooms ranked by buyer rating and review count. Covers compact open-shelf models, units with drawers, LED-lit bookcases with power outlets, and tall shelf designs for maximizing vertical space on a tight dorm desk.",
  "Dorm desks present a specific set of constraints that most hutch designs do not account for. The desk is small, the room is shared, and the setup needs to handle textbooks, a laptop, a monitor, and a charging setup without taking over the entire surface. A hutch that works for a home office is often too wide, too deep, or too visually heavy for a dorm.",
  "The most useful dorm hutches add vertical storage above the monitor without extending past the desk edges, include at least one drawer for supplies you do not want visible, and use a white or neutral finish that does not clash with standard dorm furniture. LED-lit models with built-in power outlets solve the dorm charging problem without adding a separate power strip.",
  "Standard dorm desks range from 30 to 48 inches wide. A hutch wider than the desk extends past the desk edge and reduces usable surface. Hutches in the 31 to 38-inch range fit most dorm desks without overhanging. Measure the desk width and the monitor width before choosing a hutch. A hutch that matches the desk width looks intentional rather than overcrowded.",
  "The HOOBRO bookcase in this roundup includes a built-in LED light strip, two AC outlets, and two USB ports. For dorm rooms where charging options are limited, this eliminates the need for a separate power strip on the desk. The LED strip adds ambient lighting without requiring a desk lamp. If your dorm has adequate outlets nearby, the LED and outlet feature adds cost with less benefit.",
  "White finishes are the most common choice for dorm hutches because they match standard dorm furniture and brighten small spaces. Rustic brown adds warmth but can clash with standard institutional dorm furniture. Black finishes work in dark-themed setups but make small rooms feel smaller. For shared dorm rooms, a neutral white or wood-tone finish is the least likely to conflict with a roommate's aesthetic.",
  "Filter by width, finish, and shelf count."
];

export default function Page() {
  return <RichGuidePage slug="best-desk-hutches-for-dorm-rooms" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
