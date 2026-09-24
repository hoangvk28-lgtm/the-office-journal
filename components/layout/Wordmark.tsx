import Link from "next/link";

/** Text wordmark — stays sharp at any size; swap for an SVG later if needed. */
export function Wordmark({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <Link prefetch={false} href="/" aria-label="The Office Journal — home" className="group inline-flex flex-col focus-ring">
      <span
        className={`font-[family-name:var(--font-display)] whitespace-nowrap font-semibold uppercase leading-none tracking-[0.01em] text-ink ${
          size === "md" ? "text-[1.125rem] min-[360px]:text-[1.375rem] sm:text-[1.625rem] lg:text-[1.375rem] xl:text-[1.75rem]" : "text-lg"
        }`}
      >
        The Office Journal
      </span>
      {size === "md" && (
        <span className="mt-1 hidden whitespace-nowrap text-[0.5625rem] font-medium uppercase tracking-[0.32em] text-ink-secondary sm:block lg:hidden xl:block">
          Better spaces. Brighter work days.
        </span>
      )}
    </Link>
  );
}
