import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import {
  guideTitle,
  metaTitle,
  metaDescription,
  lastUpdated,
  readTime,
  heroImage as fallbackHeroImage,
  products,
  faq,
  relatedGuides,
  type GuideProduct,
} from "@/data/guides/best-monitor-light-bars-for-gaming";

export const revalidate = 604800;

export const metadata: Metadata = buildMetadata({
  title: metaTitle,
  description: metaDescription,
  path: "/guide/best-monitor-light-bars-for-gaming",
  image: fallbackHeroImage,
  type: "article",
});

function ProductSection({ product }: { product: GuideProduct }) {
  return (
    <section id={product.id} className="mb-14 scroll-mt-20">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-brand shrink-0">{product.badge}</span>
        <h2 className="text-2xl font-bold text-ink tracking-tight min-w-0 break-words">{product.name}</h2>
      </div>
      <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-card">
        <div className="flex flex-col sm:flex-row gap-5 p-5">
          <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 flex items-center justify-center w-full sm:w-60 h-52 rounded-xl border border-border bg-gray-50 overflow-hidden hover:opacity-90 transition-opacity">
            <Image src={product.imageUrl} alt={product.name} width={220} height={200} className="object-cover w-full h-full" unoptimized />
          </a>
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 text-ink-secondary font-medium">{spec}</span>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">About this pick</p>
              {product.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-ink-secondary leading-relaxed">{para}</p>
              ))}
            </div>
            <p className="text-xs text-ink-muted"><span className="font-semibold text-ink">Best for:</span> {product.bestFor}</p>
            <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity w-fit mt-auto" style={{ background: "#FF9900" }}>
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.26 18.36C9.18 20.34 4.76 21.38 1 20.16c-.38-.13-.33-.44.08-.35 3.47.67 7.77-.07 10.6-1.82.47-.27.87.17.58.37zm1.06-1.17c-.43-.56-2.85-.27-3.94-.13-.33.04-.38-.25-.08-.46 1.93-1.36 5.1-.97 5.47-.51.37.46-.1 3.63-1.91 5.14-.28.23-.54.11-.42-.2.41-.98 1.32-3.28.88-3.84z" /></svg>
              Check price on Amazon
            </a>
          </div>
        </div>
        <div className="border-t border-border grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-cta mb-3">Pros</p>
            <ul className="space-y-1.5">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-ink">
                  <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-cta-light text-cta flex items-center justify-center shrink-0 font-bold text-[9px]">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent-dark mb-3">Cons</p>
            <ul className="space-y-1.5">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-ink">
                  <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 font-bold text-[9px]">&minus;</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function BestMonitorLightBarsGamingPage() {
  const heroImg = fallbackHeroImage;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guideTitle,
    description: metaDescription,
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    author: { "@type": "Person", name: "Jamie Cole", url: `${SITE_URL}/author/jamie-cole` },
    publisher: { "@type": "Organization", name: "WorkCocoon", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guide/best-monitor-light-bars-for-gaming` },
    about: [{ "@type": "Thing", name: "Gaming Monitor Light Bar" }, { "@type": "Thing", name: "RGB Desk Lighting" }, { "@type": "Thing", name: "Gaming Setup Accessories" }],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Buying Guides", item: `${SITE_URL}/guide` },
      { "@type": "ListItem", position: 3, name: "Best Monitor Light Bars for Gaming", item: `${SITE_URL}/guide/best-monitor-light-bars-for-gaming` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: guideTitle,
    description: metaDescription,
    numberOfItems: products.length,
    itemListElement: products.map((p) => ({ "@type": "ListItem", position: p.rank, name: `${p.name} - ${p.badge}`, url: `${SITE_URL}/guide/best-monitor-light-bars-for-gaming#${p.id}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Container className="py-12 max-w-4xl">
        <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-6">
          <Link prefetch={false} href="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <Link prefetch={false} href="/guide" className="hover:text-brand transition-colors">Buying Guides</Link>
          <span>/</span>
          <span className="text-ink">Best Monitor Light Bars for Gaming</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">Buying Guide</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">{readTime} read</span>
            <span className="text-ink-muted">&middot;</span>
            <span className="text-xs text-ink-muted">Updated July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight mb-4">{guideTitle}</h1>
          <p className="text-lg text-ink-secondary leading-relaxed max-w-3xl">
            Nine monitor light bars for gaming setups ranked by buyer rating and review count.
            Covers Govee smart RGBIC bars, Razer Chroma-compatible options, RGB backlight
            models, and Philips Hue Play integration.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-ink-secondary">
              <div className="w-7 h-7 rounded-full bg-brand-muted flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </div>
              <span>Jamie Cole, Lead Product Researcher</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              9 monitor light bars evaluated
            </div>
          </div>
        </header>

        <div className="mb-8 p-4 rounded-xl bg-bg border border-border text-xs text-ink-secondary">
          <strong className="text-ink">Quick note:</strong> This page contains affiliate links. If you buy through our links, we may earn a small commission at no extra cost to you. As an Amazon Associate, WorkCocoon earns from qualifying purchases.{" "}
          <Link prefetch={false} href="/affiliate-disclosure" className="text-brand hover:underline">Affiliate disclosure</Link>.
        </div>

        <div className="rounded-2xl overflow-hidden border border-border mb-10 bg-bg">
          <Image src={heroImg} alt="Best monitor light bars for gaming" width={900} height={420} className="w-full h-auto object-contain" priority unoptimized />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-4 tracking-tight">Quick Picks</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="text-left px-4 py-3 font-semibold">Pick</th>
                  <th className="text-left px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={product.id} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                    <td className="px-4 py-3"><a href={`#${product.id}`} className="text-xs font-bold text-brand hover:underline">{product.badge}</a></td>
                    <td className="px-4 py-3 font-semibold text-ink text-xs">{product.name}</td>
                    <td className="px-4 py-3">
                      <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-xs font-bold px-3 py-1.5 rounded-lg text-white whitespace-nowrap inline-block" style={{ background: "#FF9900" }}>Check price</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 space-y-4 text-base text-ink-secondary leading-relaxed">
          <p>
            Gaming monitor light bars differ from standard home office bars in two main ways:
            RGB and smart ecosystem integration. A standard work bar provides white light
            for desk illumination. A gaming bar adds RGB backlight modes, reactive color
            effects synchronized with games, and integration with ecosystems like Razer
            Chroma, Govee Home, or Philips Hue. These features are largely aesthetic for
            the gaming environment rather than functional for visibility.
          </p>
          <p>
            The practical benefit a gaming bar shares with any light bar is the same: reducing
            eye strain by illuminating the desk surface and reducing contrast between the bright
            screen and the darker room. RGB effects add ambient mood lighting without requiring
            a separate LED strip. For setups where visual presentation matters for streaming
            or recording, a gaming bar with backlight effects is the most efficient way to
            add both desk lighting and background atmosphere in one unit.
          </p>
          <p>
            This guide covers nine gaming light bars ranked by rating and buyer count. For
            the full light bar category, see our{" "}
            <Link prefetch={false} href="/guide/best-monitor-light-bars" className="text-brand hover:underline">best monitor light bars</Link>{" "}
            guide. For curved gaming monitors, see{" "}
            <Link prefetch={false} href="/guide/best-monitor-light-bars-for-curved-monitors" className="text-brand hover:underline">best light bars for curved monitors</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-ink mb-5 tracking-tight">What to Know Before Buying</h2>
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-border bg-white">
              <h3 className="text-base font-bold text-ink mb-2">Smart Ecosystem vs Standalone RGB</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Standalone RGB bars (like the Quntis RGB model) cycle through preset color
                modes via touch control without requiring an app or hub. Smart ecosystem bars
                (Govee G1, Razer Aether, Philips Hue Play) connect to an app or hub and can
                sync lighting effects across multiple devices, react to game events, or respond
                to music. Smart ecosystem bars have higher up-front cost and a dependency on
                the ecosystem app remaining supported, but offer significantly more control.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-white">
              <h3 className="text-base font-bold text-ink mb-2">Razer Chroma vs Govee vs Philips Hue</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Razer Chroma integrates with Razer peripherals and a range of third-party
                games for reactive lighting. Govee uses its own app with Matter protocol for
                smart home integration and wide device range. Philips Hue Play requires a
                Hue Bridge and is the most expensive ecosystem but offers the most reliable
                smart home integration via Matter and HomeKit. Choosing the ecosystem should
                align with your existing smart devices or peripheral brand.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-white">
              <h3 className="text-base font-bold text-ink mb-2">RGB Backlight vs Front Light for Gaming</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                The front-facing white light illuminates the desk surface for visibility during
                gaming. The rear RGB backlight projects color onto the wall behind the monitor,
                creating ambient atmosphere. Both can be used simultaneously, but the white
                front light is more important functionally. Some gaming bars (like the Govee
                Gaming Monitor Light G1) focus primarily on backlight effects and have less
                powerful front white illumination than office-focused bars.
              </p>
            </div>
          </div>
        </section>

        <nav className="mb-12 p-4 rounded-xl bg-bg border border-border">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Jump to pick</p>
          <div className="flex flex-wrap gap-2">
            {products.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-border text-ink-secondary hover:text-brand hover:border-brand transition-colors">
                #{p.rank} {p.badge}
              </a>
            ))}
            <a href="#buying-guide" className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-border text-ink-secondary hover:text-brand hover:border-brand transition-colors">Buying Guide</a>
            <a href="#faq" className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-border text-ink-secondary hover:text-brand hover:border-brand transition-colors">FAQ</a>
          </div>
        </nav>

        <h2 className="text-2xl font-bold text-ink mb-8 tracking-tight">9 Best Monitor Light Bars for Gaming</h2>

        {products.map((product) => (
          <ProductSection key={product.id} product={product} />
        ))}

        <section className="mb-12 scroll-mt-20" id="buying-guide">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">How to Choose a Gaming Monitor Light Bar</h2>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-ink mb-3">Gaming Light Bar Comparison</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand text-white">
                    <th className="text-left px-4 py-3 font-semibold">Bar</th>
                    <th className="text-left px-4 py-3 font-semibold">Ecosystem</th>
                    <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">RGB Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bar: "Govee Gaming G1", ecosystem: "Govee Home app", rgb: "RGBIC backlight" },
                    { bar: "Razer Aether", ecosystem: "Razer Chroma", rgb: "Full RGB rear light" },
                    { bar: "Philips Hue Play", ecosystem: "Hue Bridge / Matter", rgb: "Hue color backlight" },
                    { bar: "Quntis RGB 24-mode", ecosystem: "Standalone", rgb: "24 preset RGB modes" },
                    { bar: "BenQ ScreenBar Halo", ecosystem: "Standalone", rgb: "White backlight only" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                      <td className="px-4 py-3 font-medium text-ink text-xs">{row.bar}</td>
                      <td className="px-4 py-3 text-ink-secondary text-xs">{row.ecosystem}</td>
                      <td className="px-4 py-3 text-ink-secondary text-xs hidden sm:table-cell">{row.rgb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-ink mb-6 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-white">
                <p className="font-bold text-ink text-sm mb-2">{item.q}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 p-6 rounded-2xl border border-border bg-white">
          <h2 className="text-xl font-bold text-ink mb-5 tracking-tight">Bottom Line</h2>
          <div className="space-y-4">
            {[
              { context: "Best overall gaming", id: "govee-gaming-g1", name: "Govee Gaming Monitor Light G1", verdict: " - 400 reviews at 4.6 stars, $59.99, best gaming-focused bar with smart app." },
              { context: "Best Razer Chroma", id: "razer-aether", name: "Razer Aether Monitor Light", verdict: " - 168 reviews at 4.5 stars, $99.99, Chroma reactive gaming integration." },
              { context: "Best standalone RGB", id: "quntis-rgb-backlight", name: "Quntis RGB 24-mode Backlight", verdict: " - 1,188 reviews at 4.5 stars, $31.99, most affordable RGB option." },
              { context: "Best Govee budget", id: "govee-monitor-bar", name: "Govee Monitor Light Bar Basic", verdict: " - Govee app integration at lower price point." },
              { context: "Best Philips Hue", id: "philips-hue-play-bar", name: "Philips Hue Play Monitor Bar", verdict: " - Hue ecosystem, Matter support, most reliable smart home integration." },
              { context: "Best wide gaming", id: "benq-screenbar-halo-gaming", name: "BenQ ScreenBar Halo", verdict: " - 4,108 reviews at 4.5 stars, $219.99, premium white backlight for serious setups." },
              { context: "Best budget gaming RGB", id: "quntis-rgb-gaming-budget", name: "Quntis with Backlight and Remote", verdict: " - 971 reviews at 4.7 stars, $49.99, remote plus backlight under $50." },
              { context: "Best desk dial gaming", id: "yeelight-pro-gaming", name: "Yeelight Monitor Light Bar Pro", verdict: " - 3,826 reviews at 4.5 stars, wireless dial, gaming-compatible aesthetics." },
              { context: "Best streaming setup", id: "baseus-gaming-rgb", name: "Baseus Gaming RGB Monitor Bar", verdict: " - 1,432 reviews at 4.5 stars, $45.99, clean RGB for streaming backgrounds." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand mt-2 shrink-0" />
                <p className="text-sm text-ink-secondary">
                  <strong className="text-ink">{item.context}:</strong>{" "}
                  <a href={`#${item.id}`} className="font-bold text-ink hover:text-brand transition-colors">{item.name}</a>
                  {item.verdict}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 p-6 rounded-2xl flex flex-col items-center text-center" style={{ background: "linear-gradient(135deg, #FF9900 0%, #e68900 100%)" }}>
          <h2 className="text-xl font-bold text-white mb-2">Browse gaming monitor light bars on Amazon</h2>
          <p className="text-white/90 text-sm mb-5">Filter by RGB type, smart ecosystem, and gaming setup compatibility.</p>
          <a href="https://www.amazon.com/s?k=gaming+monitor+light+bar+rgb&tag=theofficejournal-20" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white font-bold text-sm hover:bg-gray-50 transition-colors" style={{ color: "#FF9900" }}>
            Shop on Amazon &rarr;
          </a>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-4 tracking-tight">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedGuides.map((g) => (
              <Link prefetch={false} key={g.href} href={g.href} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white hover:border-brand transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-muted flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <div><p className="font-bold text-ink text-sm group-hover:text-brand transition-colors">{g.title}</p></div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-ink-muted mt-4 text-center">Last updated: July 2026. Verify current Amazon prices before purchasing.</p>
        </section>
      </Container>
    </>
  );
}
