import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import ContactForm from "../components/ContactForm";
import { siteMeta } from "../lib/siteMeta";
import { breadcrumbJsonLd, JsonLd } from "../lib/seo";

export const metadata = {
  title: "Contact Us | Hire Security Guards in Lagos",
  description:
    "Hire security guards in Lagos. Contact Impress Security Services in confidence: head office in Ojodu Berger, Lagos, with direct phone lines and email.",
  keywords: [
    "Contact Impress Security",
    "Security company Lagos contact",
    "Hire security guards Lagos",
    "Security company Ojodu Berger",
    "Private security quote Nigeria",
    "Impress Security phone number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Hire Security Guards in Lagos",
    description:
      "Start a confidential security conversation. Head office in Ojodu Berger, Lagos. Every enquiry is handled under strict non-disclosure.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Impress Security Services Nigeria Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Impress Security Services",
    description: "Request a confidential security assessment or manned guarding deployment in Lagos, Nigeria.",
    images: ["/twitter-image"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteMeta.siteUrl}/contact/#webpage`,
  url: `${siteMeta.siteUrl}/contact`,
  name: "Contact Impress Security Services Nigeria Limited",
  description: "Confidential security consultations, office directions, and direct telephone lines in Lagos, Nigeria.",
  mainEntity: {
    "@type": "SecurityService",
    name: siteMeta.legalName,
    telephone: siteMeta.phones,
    email: siteMeta.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteMeta.address.line1}, ${siteMeta.address.line2}`,
      addressLocality: siteMeta.address.city,
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero
        breadcrumb="Contact"
        eyebrow="Confidential Consultation"
        title="Start a quiet conversation."
        lead="Tell us, in confidence, what you would like to protect. Our team will respond directly and discreetly."
      />

      <section className="bg-white">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Enquiry Form</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              We respond to every enquiry.
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
              All fields marked with <span className="text-[color:var(--color-brand-green-mid)]">*</span> are required.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl bg-[color:var(--color-ink)] text-white p-7 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[color:var(--color-brand-green-mid)]/40 blur-2xl" aria-hidden="true" />
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold">Head Office</p>
              <p className="mt-3 leading-relaxed">
                {siteMeta.address.line1}<br/>
                {siteMeta.address.line2}<br/>
                {siteMeta.address.city}, {siteMeta.address.country}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Phone</p>
              <ul className="mt-3 space-y-2 text-[color:var(--color-ink)]">
                {siteMeta.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[color:var(--color-brand-green-deep)] transition">{p}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-7">
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Email</p>
              <a
                href={`mailto:${siteMeta.email}`}
                className="mt-3 inline-block break-all text-[color:var(--color-ink)] hover:text-[color:var(--color-brand-green-deep)] transition"
              >
                {siteMeta.email}
              </a>
            </div>
            <div className="rounded-2xl bg-[color:var(--color-paper-warm)] border border-black/5 p-7">
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Confidentiality</p>
              <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                Every enquiry is handled under strict non-disclosure. We do not share, sell, or repurpose your information.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
