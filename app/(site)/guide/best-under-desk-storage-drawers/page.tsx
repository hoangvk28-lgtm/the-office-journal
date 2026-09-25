import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-under-desk-storage-drawers";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-under-desk-storage-drawers",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Under desk storage drawers add hidden compartment space below the desk surface without taking up floor or desktop area. This guide covers adhesive, clamp-on, and bracket-mount options ranked by review count and rating. Installation requirements differ by type.",
  "Most desks are sold without drawers, which means pens, charging cables, sticky notes, USB drives, and small accessories end up either on the desk surface or scattered across the room. Under-desk storage drawers reclaim the dead space between your desk surface and the floor. They mount to the underside of the desk and pull out when you need them, leaving the top clear and the floor below completely open.",
  "The mounting method is the decision that matters most and it is the one most buyers overlook. Adhesive drawers require a smooth, flat underside with no texture or paint irregularities, otherwise they fall. Clamp-on drawers grip the desk edge and can be moved or removed without any damage, which makes them the right choice for renters or anyone not sure about placement. Bracket-mount drawers screw into the underside for the most secure hold but leave holes behind. Each type also has a different weight limit, and most adhesive options max out around 5 to 8 pounds, which covers small accessories but not anything heavy.",
  "Adhesive drawers stick to the underside of the desk with no tools. Clamp-on drawers grip the desk edge with a C-clamp and no drilling. Bracket-mount drawers screw into the underside of the desk permanently. Renters should choose adhesive or clamp-on to avoid surface damage.",
  "Self-adhesive under desk drawers require a flat, smooth, and dry desk underside for the adhesive to bond reliably. Rough, textured, painted, or glass surfaces may prevent proper adhesion or cause the drawer to fall. Always test adhesion in a low-risk area first.",
  "Compare adhesive, clamp-on, and bracket-mount options."
];

export default function Page() {
  return <RichGuidePage slug="best-under-desk-storage-drawers" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
