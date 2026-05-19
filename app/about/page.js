import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";
import { siteMeta } from "../lib/siteMeta";

export const metadata = {
  title: "About | Impress Security Services Nigeria Limited",
  description:
    "Who we are, our philosophy, leadership, and company brief. A Category B licensed private guard company committed to protecting lives, assets, and reputations.",
};

const focusAreas = [
  { k: "Prevention", v: "rather than response" },
  { k: "Intelligence", v: "rather than guesswork" },
  { k: "Discretion", v: "rather than noise" },
  { k: "Professional conduct", v: "rather than intimidation" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About Impress"
        title="Quiet professionals in a noisy industry."
        lead="We protect lives, assets, and reputations through trained manpower, structured intelligence, ethical conduct, and client-specific solutions tailored to today's complex security environment."
      />

      {/* Sub-nav */}
      <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur border-b border-black/5">
        <div className="container-x flex gap-6 overflow-x-auto py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-[color:var(--color-ink-muted)]">
          <a href="#who" className="whitespace-nowrap hover:text-[color:var(--color-brand-green-deep)]">Who We Are</a>
          <a href="#philosophy" className="whitespace-nowrap hover:text-[color:var(--color-brand-green-deep)]">Our Philosophy</a>
          <a href="#brief" className="whitespace-nowrap hover:text-[color:var(--color-brand-green-deep)]">Company Brief</a>
          <a href="#leadership" className="whitespace-nowrap hover:text-[color:var(--color-brand-green-deep)]">Leadership</a>
        </div>
      </div>

      {/* Who we are */}
      <section id="who" className="bg-white scroll-mt-32">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Who We Are</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Security & intelligence services, committed to the protection of lives, assets, and reputations.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              <p>
                Impress Security Services Limited is a professional security and intelligence services company committed to the protection of lives, assets, and reputations.
              </p>
              <p>
                The company operates on one guiding principle: <em className="text-[color:var(--color-ink)] not-italic font-medium">security is most effective when it is intelligent, discreet, and preventive rather than reactive.</em> The approach combines trained manpower, structured intelligence, ethical conduct, and client-specific solutions tailored to today's complex security environment.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-[color:var(--color-paper-warm)] scroll-mt-32">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Our Philosophy</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Security is more than presence.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed text-lg">
              True security is not merely about uniforms or visibility. It is about anticipation, information, discipline, and judgment.
            </p>
          </SectionReveal>
          <SectionReveal stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((a) => (
              <RevealItem key={a.k} className="bg-white rounded-2xl p-6 border border-black/5">
                <p className="font-[family-name:var(--font-display)] uppercase text-xl text-[color:var(--color-brand-green-deep)]">{a.k}</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{a.v}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Brief */}
      <section id="brief" className="bg-white scroll-mt-32">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Company Brief</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Vetted personnel. Integrated solutions. Standardised operations.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              {siteMeta.legalName} is a Category B licensed security company registered with {siteMeta.shareCapital} share capital with the Corporate Affairs Commission, Abuja (CAC Number: {siteMeta.rc}), to operate as a Limited Liability Company, specialised in the training, documentation, and deployment of vetted security personnel for both corporate organisations and individuals.
            </p>
            <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
              The company offers integrated security solutions and customised management services as part of every engagement.
            </p>
            <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
              We deploy security personnel and an operations team dedicated to consistent and standardised security duties in consonance with approved client requests and standard operating procedures (SOP).
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1} className="space-y-5">
            <div className="rounded-2xl border-l-4 border-[color:var(--color-brand-lime)] bg-[color:var(--color-paper-warm)] p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">Vision</p>
              <p className="mt-2 text-[color:var(--color-ink)] leading-relaxed">
                To be known and recognised in the provision of unique and robust security services with expertise.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-[color:var(--color-brand-green-deep)] bg-[color:var(--color-paper-warm)] p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">Mission</p>
              <p className="mt-2 text-[color:var(--color-ink)] leading-relaxed">
                To provide value to stakeholders through professionals with diligence, intelligence, courtesy, etiquette, efficiency, and effectiveness — with zero tolerance for crime in all client environments.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">Headquarters</p>
              <p className="mt-2 text-[color:var(--color-ink)] leading-relaxed">
                {siteMeta.address.line1}, {siteMeta.address.line2}, {siteMeta.address.city}.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-[color:var(--color-ink)] text-white scroll-mt-32">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <SectionReveal>
            <div className="aspect-square w-full max-w-sm rounded-2xl bg-brand-gradient flex items-center justify-center p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" aria-hidden="true"
                   style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(158,217,58,0.4), transparent 60%)" }} />
              <svg viewBox="0 0 24 24" width="120" height="120" fill="none" stroke="#9ED93A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
              </svg>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold">Board Chairman</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              {siteMeta.chairman}
            </h2>
            <p className="mt-4 text-[color:var(--color-brand-lime)] text-sm uppercase tracking-[0.18em] font-semibold">{siteMeta.chairmanRole}</p>
            <p className="mt-5 text-white/80 leading-relaxed max-w-xl">
              The chairmanship anchors the company's commitment to discipline, lawful conduct, and institutional standards — the foundation on which every deployment is built.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CTABand
        title="Work with a security partner you can trust."
        body="From corporate sites to private estates, our deployments begin with a confidential conversation."
      />
    </>
  );
}
