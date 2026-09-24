export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  avatarUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  credentials: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

export const authors: Author[] = [
  {
    slug: "jamie-cole",
    name: "Jamie Cole",
    role: "Lead Product Researcher & Editor",
    isPerson: true,
    avatarUrl: "", // user will provide after creating profile
    bio: "Jamie Cole spent four years in a 180 sq ft dorm and two in a studio apartment before obsessing over small workspaces. Lead researcher at WorkCocoon.",
    longBio:
      "Jamie Cole started researching small-space products out of personal necessity. Four years in a 180 sq ft college dorm taught a hard lesson: most buying guides are written for people with real home offices, not for students trying to fit a monitor, a lamp, and a keyboard on a 48-inch IKEA desk without losing the ability to eat dinner.\n\nAfter graduating, two years in a studio apartment meant every desk setup purchase required solving the same constraint — what's the smallest footprint that solves the actual problem? That question became the foundation for every evaluation at WorkCocoon.\n\nJamie's research process prioritizes verified buyer feedback patterns over spec sheets, specifically looking at 1–3 star reviews to surface failure modes that don't appear in aggregate ratings. Every score on WorkCocoon reflects this methodology: real constraints, real trade-offs, and honest disclaimers about what the research can and can't tell you.",
    expertise: [
      "Small-space workspace design",
      "Consumer electronics research",
      "Dorm room and studio apartment setups",
      "Product specification analysis",
      "Amazon buyer review pattern analysis",
    ],
    credentials: [
      { label: "Products evaluated", value: "500+" },
      { label: "Guides published", value: "13+" },
      { label: "Years researching", value: "4+" },
      { label: "Scoring dimensions", value: "5 weighted criteria" },
    ],
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/jamie-cole-deskfinds", // user will update with real URL
        label: "Jamie Cole on LinkedIn",
      },
    ],
    editorial: {
      process:
        "Each evaluation starts with defining the exact small-space context — dorm, studio, or compact home office — before a single product is assessed. Products are scored across five weighted criteria derived from specs, verified buyer patterns, and use-case fit. Guides are updated when better products emerge or buyer sentiment shifts significantly.",
      independence:
        "No brand pays for inclusion, ranking position, or favorable scores. Affiliate commissions from Amazon help fund the site, but the five-dimension scoring rubric applies equally to every product. Low-scoring products are excluded regardless of commission rate.",
    },
  },
  {
    slug: "deskfinds-editorial-team",
    name: "WorkCocoon Editorial Team",
    role: "Product Researchers & Editors",
    avatarUrl: "/images/media/authors/deskfinds-editorial-team/avatar.png",
    bio: "We research and compare Amazon products for small spaces — dorm rooms, compact desks, and budget offices. Built on specs and verified buyer data, not sponsorship.",
    longBio:
      "WorkCocoon was built for people who live and work in tight spaces: studio apartments, college dorms, and compact home offices where every square inch counts. Our editorial team evaluates products across five weighted criteria — small-space fit, build quality, ease of use, value for money, and buyer feedback — and publishes structured buying guides that show the trade-offs clearly.\n\nWe do not accept payment for placement. Affiliate commissions from Amazon help keep the site running, but they do not influence which products we recommend or how we rank them. If a product scores poorly on our rubric, it does not appear in our top picks — regardless of commission rate.",
    expertise: [
      "Desk Setup & Organization",
      "Dorm Room Essentials",
      "Small Room Storage",
      "Compact Home Office",
    ],
    credentials: [
      { label: "Guides published", value: "13+" },
      { label: "Products evaluated", value: "80+" },
      { label: "Scoring criteria", value: "5 weighted dimensions" },
      { label: "Update frequency", value: "Reviewed every 6 months" },
    ],
    social: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/deskfinds",
        label: "WorkCocoon on LinkedIn",
      },
    ],
    editorial: {
      process:
        "Each guide starts with keyword and buyer-intent research to identify what people actually need. We then collect product specs, cross-reference verified Amazon buyer reviews, and score each product on our five-dimension rubric. Guides are updated when new products launch or when buyer feedback patterns shift significantly.",
      independence:
        "No brand pays for inclusion or ranking position. Affiliate links generate commissions that fund the site — but our scoring rubric applies equally to all products, and low-scoring products are excluded regardless of commission rate.",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
