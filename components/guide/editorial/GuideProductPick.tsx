import type { GuideProduct } from "@/components/guide/RichGuidePage";
import { withAmazonTag } from "@/lib/affiliate";
import { SafeImage } from "@/components/editorial/SafeImage";

function splitVerdict(description: string) {
  const paras = description.split("\n\n").map((p) => p.trim()).filter(Boolean);
  const first = paras[0] ?? "";
  const m = first.match(/^(.+?[.!?])(\s+|$)([\s\S]*)$/);
  const verdict = m ? m[1] : first;
  const rest = [m?.[3]?.trim(), ...paras.slice(1)].filter((p): p is string => !!p);
  return { verdict, rest };
}

const toList = (v?: string | string[]) => (Array.isArray(v) ? v : v ? [v] : []);

function Label({ children }: { children: React.ReactNode }) {
  return <h4 className="font-[family-name:var(--font-body)] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink">{children}</h4>;
}

/**
 * One product recommendation in editorial form: large image (~38%) beside the
 * verdict and reasoning (~62%). Stacks image → info → pros/cons → CTA on
 * phones. Exactly one commerce CTA per product.
 */
export function GuideProductPick({ product: p, total }: { product: GuideProduct; total: number }) {
  const { verdict, rest } = splitVerdict(p.description);
  const skipIf = toList(p.skipIf);

  return (
    <article id={p.id} aria-labelledby={`${p.id}-name`} className="scroll-mt-32 border-t border-border py-10 first:border-t-0 first:pt-2 lg:scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-[38fr_62fr] md:gap-10">
        <div>
          <div className="relative aspect-square overflow-hidden bg-surface md:sticky md:top-28">
            {p.imageUrl && (
              <SafeImage src={p.imageUrl} alt={p.name} fill sizes="(max-width: 768px) 100vw, 320px" className="object-contain p-6" unoptimized />
            )}
          </div>
        </div>

        <div className="min-w-0">
          <p className="eyebrow">
            {p.badge}
            <span className="ml-2 font-medium tracking-normal normal-case text-ink-secondary">
              {p.rank} of {total}
            </span>
          </p>
          <h3 id={`${p.id}-name`} className="mt-2 text-[1.625rem] leading-tight sm:text-[1.875rem]">
            {p.name}
          </h3>

          {verdict && (
            <p className="mt-4 border-l-2 border-ink pl-4 font-[family-name:var(--font-display)] text-[1.1875rem] leading-snug !text-ink">
              {verdict}
            </p>
          )}

          <dl className={`mt-6 grid gap-4 border-y border-border py-5 ${skipIf.length > 0 ? "sm:grid-cols-2 sm:gap-6" : ""}`}>
            {p.bestFor && (
              <div>
                <dt><Label>Best for</Label></dt>
                <dd className="mt-1.5 text-base leading-relaxed text-ink-secondary">{p.bestFor}</dd>
              </div>
            )}
            {skipIf.length > 0 && (
              <div>
                <dt><Label>Skip if</Label></dt>
                <dd className="mt-1.5 text-base leading-relaxed text-ink-secondary">{skipIf.join(" ")}</dd>
              </div>
            )}
          </dl>

          {rest.length > 0 && (
            <section className="mt-6">
              <Label>Why we like it</Label>
              <div className="mt-2 space-y-4">
                {rest.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </section>
          )}

          {p.specs.length > 0 && (
            <section className="mt-6">
              <Label>Key dimensions &amp; specs</Label>
              <ul className="mt-2 divide-y divide-border border-y border-border">
                {p.specs.map((s, i) => (
                  <li key={i} className="py-2 text-[0.9375rem] leading-snug text-ink">{s}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {p.pros.length > 0 && (
              <section>
                <Label>Pros</Label>
                <ul className="mt-2 space-y-2">
                  {p.pros.map((t, i) => (
                    <li key={i} className="flex gap-2.5 text-base leading-snug text-ink">
                      <span aria-hidden className="mt-px font-semibold text-olive">+</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {p.cons.length > 0 && (
              <section>
                <Label>Cons</Label>
                <ul className="mt-2 space-y-2">
                  {p.cons.map((t, i) => (
                    <li key={i} className="flex gap-2.5 text-base leading-snug text-ink">
                      <span aria-hidden className="mt-px font-semibold text-ink-secondary">−</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="mt-8">
            <a
              href={withAmazonTag(p.amazonUrl)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex min-h-12 items-center gap-2 bg-brand px-6 text-[0.9375rem] font-semibold !text-white transition-colors hover:bg-brand-dark focus-ring"
            >
              Check price on Amazon
              <span className="sr-only"> for {p.name} (opens in a new tab)</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
