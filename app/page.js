import Link from "next/link";
import HomeHero from "./components/HomeHero";
import PillarCard from "./components/PillarCard";
import ServiceCard from "./components/ServiceCard";
import TrustStrip from "./components/TrustStrip";
import CTABand from "./components/CTABand";
import SectionReveal, { RevealItem } from "./components/SectionReveal";
import { services } from "./lib/services";

const pillars = [
  {
    icon: "professional",
    title: "Professional",
    body: "Disciplined personnel, structured training, documented procedures. Every shift, every site, every report — held to the same standard.",
  },
  {
    icon: "discreet",
    title: "Discreet",
    body: "Non-intrusive presence and absolute confidentiality. We secure quietly, with respect for client privacy and dignity.",
  },
  {
    icon: "intelligence",
    title: "Intelligence-Driven",
    body: "Prevention over response, anticipation over reaction. We work from information, not assumption.",
  },
];

const distinctions = [
  "Professional and disciplined personnel",
  "Intelligence-driven operations",
  "Ethical and confidential conduct",
  "Client-specific security solutions",
  "Calm, non-intrusive security presence",
  "Clear reporting and accountability",
];

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Three pillars */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <SectionReveal className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">
              Three Pillars
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05] text-[color:var(--color-ink)]">
              Security is most effective when it is intelligent, discreet, and preventive.
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
              We compete on professionalism, ethics, and outcome — not on uniform visibility or aggressive posture.
            </p>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Services snapshot */}
      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-28">
          <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">
                Our Core Services
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05] text-[color:var(--color-ink)]">
                Integrated security, delivered without noise.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-green-deep)]"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </SectionReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Impress */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Why Impress</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05] text-[color:var(--color-ink)]">
                We do not overpromise. We deliver quietly and consistently.
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
                True security is not merely about uniforms or visibility. It is about anticipation, information, discipline, and judgment.
              </p>
              <Link
                href="/why-impress"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-5 py-3 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-mid)] transition-colors"
              >
                Read our distinction
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </SectionReveal>

            <SectionReveal stagger className="grid sm:grid-cols-2 gap-4">
              {distinctions.map((d) => (
                <RevealItem
                  key={d}
                  className="rounded-xl border border-black/5 bg-[color:var(--color-paper-warm)] p-5 flex items-start gap-3"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-green-deep)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ED93A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  <span className="text-sm leading-snug font-medium text-[color:var(--color-ink)]">{d}</span>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative bg-brand-gradient text-white overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-lime-band" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-lime-band" aria-hidden="true" />
        <div className="container-x py-20 md:py-28">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#9ED93A" className="mx-auto opacity-70" aria-hidden="true">
              <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-3-6-7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-3-6-7z"/>
            </svg>
            <p className="mt-6 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Your trust is our valuable asset.
            </p>
            <p className="mt-5 text-white/80 italic">
              Security is not an expense. It is an investment in peace of mind.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
