import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RichGuidePage, type RichGuidePageProps } from "@/components/guide/RichGuidePage";
import * as data from "@/data/guides/best-monitor-light-bars-for-gaming";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: "/guide/best-monitor-light-bars-for-gaming",
  image: data.heroImage,
  type: "article",
});

// Intro copy carried over from the previous hand-authored page.
const introParagraphs: string[] = [
  "Nine monitor light bars for gaming setups ranked by buyer rating and review count. Covers Govee smart RGBIC bars, Razer Chroma-compatible options, RGB backlight models, and Philips Hue Play integration.",
  "Gaming monitor light bars differ from standard home office bars in two main ways: RGB and smart ecosystem integration. A standard work bar provides white light for desk illumination. A gaming bar adds RGB backlight modes, reactive color effects synchronized with games, and integration with ecosystems like Razer Chroma, Govee Home, or Philips Hue. These features are largely aesthetic for the gaming environment rather than functional for visibility.",
  "The practical benefit a gaming bar shares with any light bar is the same: reducing eye strain by illuminating the desk surface and reducing contrast between the bright screen and the darker room. RGB effects add ambient mood lighting without requiring a separate LED strip. For setups where visual presentation matters for streaming or recording, a gaming bar with backlight effects is the most efficient way to add both desk lighting and background atmosphere in one unit.",
  "Standalone RGB bars (like the Quntis RGB model) cycle through preset color modes via touch control without requiring an app or hub. Smart ecosystem bars (Govee G1, Razer Aether, Philips Hue Play) connect to an app or hub and can sync lighting effects across multiple devices, react to game events, or respond to music. Smart ecosystem bars have higher up-front cost and a dependency on the ecosystem app remaining supported, but offer significantly more control.",
  "Razer Chroma integrates with Razer peripherals and a range of third-party games for reactive lighting. Govee uses its own app with Matter protocol for smart home integration and wide device range. Philips Hue Play requires a Hue Bridge and is the most expensive ecosystem but offers the most reliable smart home integration via Matter and HomeKit. Choosing the ecosystem should align with your existing smart devices or peripheral brand.",
  "The front-facing white light illuminates the desk surface for visibility during gaming. The rear RGB backlight projects color onto the wall behind the monitor, creating ambient atmosphere. Both can be used simultaneously, but the white front light is more important functionally. Some gaming bars (like the Govee Gaming Monitor Light G1) focus primarily on backlight effects and have less powerful front white illumination than office-focused bars.",
  "Filter by RGB type, smart ecosystem, and gaming setup compatibility."
];

export default function Page() {
  return <RichGuidePage slug="best-monitor-light-bars-for-gaming" {...(data as unknown as Omit<RichGuidePageProps, "slug">)} introParagraphs={introParagraphs} />;
}
