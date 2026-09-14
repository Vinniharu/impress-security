import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";
import SectionReveal from "../components/SectionReveal";
import { services } from "../lib/services";

export const metadata = {
  title: "Security Services | Manned Guarding, VIP Protection, Investigations & Consultancy",
  description:
    "Explore our 6 core security disciplines: Manned Guarding, Executive & VIP Protection, Event Security, Background Checks & Vetting, Private Investigation, and Risk Consultancy across Nigeria.",
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
    canonical: "https://impresssecurities.ng/services",
  },
  openGraph: {
    title: "Security Services | Impress Security Services Nigeria Limited",
    description:
      "Integrated, intelligence-driven private security services for corporate organisations and individuals across Nigeria.",
    url: "https://impresssecurities.ng/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
};

export default function ServicesIndex() {
  return (
    <>
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
      <CTABand
        title="Not sure which service fits?"
        body="Tell us what you need to protect. We will assess, recommend, and quote — discreetly."
        primary={{ href: "/contact", label: "Request an Assessment" }}
        secondary={{ href: "/why-impress", label: "Why Impress" }}
      />
    </>
  );
}
