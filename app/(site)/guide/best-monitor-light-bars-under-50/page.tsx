import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-monitor-light-bars-under-50";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-monitor-light-bars-under-50",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight monitor light bars under $50 ranked by buyer rating and review count. Covers auto-dimming USB bars, RGB backlight models with remotes, and budget options with CRI 95 for accurate desk illumination.",
  "The under-$50 monitor light bar market is dominated by Quntis, LYMAX, and YEELIGHT models that deliver the core benefits of the category at accessible price points. Auto-dimming, CRI 95 or higher, and touch control are all available under $40. Wireless remote control and backlight features are available under $50. Smart ecosystem features (Govee, Razer) are not available in this price range.",
  "The biggest performance gap between budget and premium bars is build quality and control ergonomics. Budget bars use plastic clips and touch controls that require reaching up to the bar. Premium bars use weighted counterbalance clips, desk dials, or wireless pucks that control from the desk surface without reaching. For home office setups where infrequent brightness adjustment is fine, a $40 budget bar covers the practical requirements with acceptable build quality.",
  "At the $25 to $50 range, buyers can expect: asymmetric no-glare lens, CRI 95 or higher, auto-dimming sensor on mid-range models, touch or remote control, USB-An or USB-C power, and compatibility with most flat monitors. What this range does not typically provide: desk dial control (BenQ exclusive), smart ecosystem integration, built-in USB hub, or warranty longer than 1 year.",
  "No other brand in this price range comes close to that review count, which makes it the default choice when validation is the primary decision factor. Competitors like LYMAX and YEELIGHT offer comparable specifications at slightly lower prices but with far fewer buyer reviews to validate their consistency.",
  "Both include the standard white front task light plus rear RGB or backlight color. The white-only options (standard Quntis, YEELIGHT, LYMAX) are simpler and have higher review counts in this price range, indicating they are the more common purchase.",
  "Filter by price, features, and compatibility."
];

export default function Page() {
  return <RichGuidePage slug="best-monitor-light-bars-under-50" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
