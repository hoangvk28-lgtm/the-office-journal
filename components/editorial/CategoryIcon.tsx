import type { CategoryIconName } from "@/data/homepage-editorial";

// 1.25px line icons drawn on a 32px grid — deliberately plain, no fills.
const paths: Record<CategoryIconName, React.ReactNode> = {
  desk: (
    <>
      <path d="M3 10h26M5 10v17M27 10v17M5 16h9v11" />
      <path d="M7 19h5" />
    </>
  ),
  chair: (
    <>
      <path d="M10 4h12v11H10zM8 17h16M11 17v4h10v-4M16 21v4M9 28l7-3 7 3M9 11H7v5M23 11h2v5" />
    </>
  ),
  "monitor-arm": (
    <>
      <rect x="4" y="5" width="18" height="12" rx="1" />
      <path d="M13 17v3l9 4M22 24v4M17 28h10M22 11h4l2 13" />
    </>
  ),
  lamp: (
    <>
      <path d="M8 28h12M14 28V17l-5-6M9 11l6-6M11 7l8 8-6 2z" />
      <path d="M16 20l2 2M19 18l2 1" />
    </>
  ),
  keyboard: (
    <>
      <rect x="3" y="10" width="26" height="13" rx="1" />
      <path d="M7 14h1M11 14h1M15 14h1M19 14h1M23 14h2M7 18h1M11 18h10M24 18h1" />
    </>
  ),
  ergonomics: (
    <>
      <circle cx="17" cy="5" r="2" />
      <path d="M17 8l-2 9h7l2 9M15 17l-4 1-2 8M13 11l6 1M22 26h4" />
    </>
  ),
  accessories: (
    <>
      <path d="M5 13h22v14H5zM5 18h22M14 15.5h4M14 22.5h4M9 13V6h14v7" />
    </>
  ),
};

export function CategoryIcon({ name, className = "h-8 w-8" }: { name: CategoryIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
