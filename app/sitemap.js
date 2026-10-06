import { services } from "./lib/services";
import { absoluteUrl } from "./lib/seo";

// Bump a page's date when its content meaningfully changes — Google trusts
// lastmod only when it reflects real edits, not every build.
const CONTENT_UPDATED = "2026-10-06";

// Only photos without GPS/address stamps belong here; pic1–pic5 carry
// client-site location overlays and stay out of Google Images until cropped.
const pages = [
  { path: "/", images: ["/logo.png"] },
  { path: "/about", images: ["/staff/boardchairman.jpeg", "/staff/ceo.jpeg"] },
  { path: "/services" },
  { path: "/why-impress" },
  { path: "/training" },
  { path: "/contact" },
  { path: "/careers", images: ["/staff/pic6.jpeg"] },
  { path: "/legal/confidentiality" },
  { path: "/legal/privacy" },
  { path: "/legal/terms" },
];

export default function sitemap() {
  const servicePages = services.map((service) => ({ path: `/services/${service.slug}` }));

  return [...pages, ...servicePages].map(({ path, images, lastModified }) => ({
    url: absoluteUrl(path),
    lastModified: lastModified || CONTENT_UPDATED,
    ...(images && { images: images.map(absoluteUrl) }),
  }));
}
