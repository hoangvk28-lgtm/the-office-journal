import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-monitor-light-bars-for-curved-monitors";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-monitor-light-bars-for-curved-monitors",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight monitor light bars specifically designed or verified for curved monitor compatibility, ranked by buyer rating and review count. Covers ultrawide curved, 1000R, 1500R, and standard curved panels.",
  "Most monitor light bars are designed for flat monitors. The clip mechanism on a flat-monitor bar assumes a vertical or near-vertical top edge to grip. On a curved monitor, the top edge is angled inward, which can cause a flat-bar clip to sit at an angle, direct light unevenly, or fail to grip securely. Bars designed for curved monitors use a wider clip base, a weighted counterbalance, or a flexible clip that accommodates the inward taper of a curved top edge.",
  "The curvature radius matters: 1500R (common gaming curves) is less aggressive than 1000R (tight curves on ultrawide gaming monitors). Most bars marketed as curved-compatible handle 1500R reliably. For 1000R and tighter, verify the specific bar lists your curvature radius in its compatibility documentation.",
  "Monitor curvature is measured in millimeters: 1800R is a gentle curve, 1500R is a moderate gaming curve, and 1000R is the tightest common consumer curve. A bar listed as curved-monitor compatible that does not specify radius may only work reliably on 1800R or 1500R panels. The BenQ ScreenBar Halo and Quntis backlight model both explicitly support curved panels and are the most validated options in this roundup for curved compatibility.",
  "Ultrawide curved monitors (21:9 or 32:9) have a wider top edge than standard 16:9 curved monitors. 7-inch light bar undercovers a 34-inch or wider ultrawide panel. 7 inches and ultrawide-specific bars provide better coverage for panels above 32 inches wide. 7-inch bar is typically sufficient.",
  "Bias lighting (backlight) on a curved monitor projects onto the curved surface behind the screen. The curve can cause the backlight to spread unevenly on the wall behind, depending on the radius and the angle of the wall. The BenQ ScreenBar Halo with its rear backlight is designed specifically for this scenario with adjustable backlight direction. Simpler backlight bars may produce inconsistent wall spread on tight curved panels.",
  "Filter by curvature radius and monitor size compatibility."
];

export default function Page() {
  return <RichGuidePage slug="best-monitor-light-bars-for-curved-monitors" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
