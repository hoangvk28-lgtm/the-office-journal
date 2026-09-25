import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-monitor-light-bars";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-monitor-light-bars",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Eight monitor light bars ranked by buyer rating and review count across all price tiers. Covers budget USB bars, premium BenQ options with auto-dimming dials, curved monitor bars, and Govee RGB gaming models.",
  "Monitor light bars solve a specific problem that desk lamps and overhead lighting cannot: illuminating the keyboard and desk surface without casting glare on the monitor. A light bar clips to the top edge of the monitor and directs light downward and forward using an asymmetric lens. The monitor itself blocks the forward-facing light from reaching the screen, which is the mechanism that prevents glare.",
  "The category ranges from $25 auto-dimming USB bars to $250 BenQ options with wireless dials, ambient backlights, and adaptive brightness. For most home office setups, a mid-range bar with auto-dimming and a remote in the $40 to $60 range covers all practical needs. Premium models justify their cost mainly through build quality, longer bar length for ultrawide coverage, and desk-dial controls that avoid reaching up to touch the bar.",
  "An asymmetric lens focuses light downward (onto the desk) and at a slight forward angle (toward the user), but not backward (toward the screen). This is the defining feature that separates monitor light bars from desk lamps. Any bar that claims no screen glare uses this lens design. Cheaper bars use simpler lens designs that may allow some light scatter onto the monitor surface, reducing the glare benefit.",
  "Auto-dimming uses an ambient light sensor to reduce brightness when the room is already well lit and increase it when room lighting is low. This is useful for setups where room lighting changes significantly through the day, such as setups near windows. If your room maintains consistent lighting, manual brightness control is sufficient and saves cost.",
  "Touch control requires reaching up to the bar. A wireless remote sits on the desk and allows control without reaching. A desk dial (BenQ ScreenBar Plus exclusive) is a wired puck on the desk that controls both brightness and color temperature via physical rotation. Desk dial controls are the most ergonomic for frequent adjustments but are only available on BenQ models. Remotes are a practical middle ground for non-BenQ bars.",
  "Filter by price, features, and monitor size compatibility."
];

export default function Page() {
  return <RichGuidePage slug="best-monitor-light-bars" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
