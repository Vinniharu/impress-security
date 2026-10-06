import { siteMeta } from "./siteMeta";

export const organizationId = `${siteMeta.siteUrl}/#organization`;
export const websiteId = `${siteMeta.siteUrl}/#website`;

// Lagos areas we deploy to most often. Shown on the home page and used as areaServed.
export const lagosAreas = [
  "Ikeja",
  "Ojodu Berger",
  "Maryland",
  "Lekki",
  "Victoria Island",
  "Ikoyi",
  "Ajah",
  "Yaba",
  "Surulere",
  "Apapa",
  "Ikorodu",
  "Festac",
];

export function absoluteUrl(path = "/") {
  return path === "/" ? siteMeta.siteUrl : `${siteMeta.siteUrl}${path}`;
}

// items: [{ name, path }] — Home is prepended automatically.
export function breadcrumbJsonLd(items) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
