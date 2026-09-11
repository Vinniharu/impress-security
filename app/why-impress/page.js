import Image from "next/image";
import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";

export const metadata = {
  title: "Why Impress | Our Distinction, Ethics & Commitment",
  description:
    "Our distinction, ethics & confidentiality, and commitment — calm, intelligent, non-intrusive security delivered to a single high standard.",
};

const distinction = [
  "Professional and disciplined personnel",
  "Intelligence-driven operations",
  "Ethical and confidential conduct",
  "Client-specific security solutions",
  "Calm, non-intrusive security presence",
  "Clear reporting and accountability",
];

const ethics = [
  "Absolute confidentiality",
  "Respect for client privacy",
  "Compliance with all applicable laws",
  "Zero tolerance for abuse, misconduct, or compromise",
];

const commitment = [
  "Protecting lives and property",
  "Upholding professionalism",
  "Maintaining discretion",
  "Acting with integrity at all times",
];

export default function WhyImpressPage() {
  return (
    <>
      <PageHero
        breadcrumb="Why Impress"
        eyebrow="Why Impress"
        title="The discreet, intelligence-driven alternative."
        lead="We compete on professionalism, ethics, and outcome — not on uniform visibility or aggressive posture."
      />

      {/* Distinction */}
      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Our Distinction</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              We do not overpromise. We deliver quietly and consistently.
            </h2>
          </SectionReveal>
          <SectionReveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {distinction.map((d, i) => (
              <RevealItem
                key={d}
                className="card-shell rounded-2xl p-6 flex items-start gap-4"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl text-[color:var(--color-brand-lime)] leading-none w-10">
                  0{i + 1}
                </span>
                <span className="text-[15px] leading-snug font-medium text-[color:var(--color-ink)]">{d}</span>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Ethics & confidentiality */}
      <section className="bg-[color:var(--color-ink)] text-white">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold">Ethics & Confidentiality</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Strict standards. Quietly enforced.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Impress Security Services operates under strict ethical standards across every engagement.
            </p>
            <ul className="mt-7 space-y-3">
              {ethics.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-lime)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E1A14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  <span className="text-[15px] text-white/90">{e}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[color:var(--color-ink)]">
              <Image
                src="/staff/pic2.jpeg"
                alt="Impress Security Officers on assignment"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-green-deep)]/90 via-[color:var(--color-ink)]/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#9ED93A" aria-hidden="true" className="opacity-90">
                  <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-3-6-7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-3-6-7z"/>
                </svg>
                <p className="mt-3 font-[family-name:var(--font-display)] uppercase text-2xl md:text-3xl text-white leading-tight">
                  Your trust is our valuable asset.
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--color-brand-lime)] font-semibold">
                  Discreet · Ethical · Uncompromising
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Our Commitment</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              An investment in peace of mind.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed italic">
              Security is not an expense. It is an investment in peace of mind.
            </p>
          </SectionReveal>
          <SectionReveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitment.map((c) => (
              <RevealItem
                key={c}
                className="bg-white rounded-2xl border border-black/5 p-6 text-center"
              >
                <p className="text-[15px] leading-snug font-medium text-[color:var(--color-ink)]">{c}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
