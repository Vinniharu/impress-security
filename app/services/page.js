import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";
import SectionReveal from "../components/SectionReveal";
import FAQ from "../components/FAQ";
import { services } from "../lib/services";
import { servicesFaqs } from "../lib/faqs";
import { breadcrumbJsonLd, JsonLd } from "../lib/seo";

export const metadata = {
  title: "Security Services in Lagos & Nigeria",
  description:
    "Security services in Lagos and Nigeria: manned guarding, VIP protection, event security, background checks, private investigation and risk consultancy.",
  keywords: [
    "Security services Nigeria",
    "Manned guarding services Lagos",
    "VIP close protection Nigeria",
    "Private investigation services Lagos",
    "Background vetting services Nigeria",
    "Corporate security consultancy Lagos",
    "Event security crowd control Lagos",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Security Services | Impress Security Services Nigeria Limited",
    description:
      "Integrated, intelligence-driven private security services for corporate organisations and individuals across Nigeria.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Impress Security Services - Core Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Services | Impress Security Services",
    description: "Manned guarding, VIP protection, vetting, private investigations, and risk advisory in Nigeria.",
    images: ["/twitter-image"],
  },
};

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <PageHero
        breadcrumb="Services"
        eyebrow="Our Services"
        title="Six service lines, one standard."
        lead="Each engagement combines trained manpower, structured intelligence, ethical conduct, and client-specific solutions tailored to your environment."
      />
      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger>
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </SectionReveal>
        </div>
      </section>
      <FAQ faqs={servicesFaqs} title="Choosing the right security service." />
      <CTABand
        title="Not sure which service fits?"
        body="Tell us what you need to protect. We will assess, recommend, and quote — discreetly."
        primary={{ href: "/contact", label: "Request an Assessment" }}
        secondary={{ href: "/why-impress", label: "Why Impress" }}
      />
    </>
  );
}
