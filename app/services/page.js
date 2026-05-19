import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTABand from "../components/CTABand";
import SectionReveal from "../components/SectionReveal";
import { services } from "../lib/services";

export const metadata = {
  title: "Services | Impress Security Services Nigeria Limited",
  description:
    "Manned guarding, executive protection, event security, vetting, investigation, and risk consultancy — integrated and intelligence-driven.",
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
