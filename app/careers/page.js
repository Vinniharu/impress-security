import Image from "next/image";
import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";
import { siteMeta } from "../lib/siteMeta";

export const metadata = {
  title: "Careers | Impress Security Services Nigeria Limited",
  description:
    "Join a security company that competes on discipline, ethics, and judgment. Vetted personnel, structured training, dignified work.",
};

const values = [
  { t: "Discipline", b: "Daily parade. Documented procedure. Reliable presence." },
  { t: "Integrity", b: "Zero tolerance for misconduct or compromise." },
  { t: "Discretion", b: "What happens at the post stays at the post." },
  { t: "Growth", b: "Structured training and clear progression." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumb="Careers"
        eyebrow="Careers"
        title="Quiet work. High standards."
        lead="We are always interested in personnel who can carry themselves with discipline, honesty, and judgment. Send a brief introduction and we will be in touch."
      />

      <section className="bg-white">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <SectionReveal>
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-[color:var(--color-ink)]">
              <Image
                src="/staff/pic6.jpeg"
                alt="Impress Security Officer in uniform"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--color-brand-green-deep)]/90 backdrop-blur text-[11px] uppercase tracking-[0.18em] font-semibold text-[color:var(--color-brand-lime)] border border-[color:var(--color-brand-lime)]/30">
                  Disciplined · Vetted · Dignified
                </span>
                <p className="mt-2 text-white font-[family-name:var(--font-display)] uppercase text-lg tracking-wide">
                  The Impress Standard
                </p>
              </div>
            </div>
          </SectionReveal>

          <div>
            <SectionReveal>
              <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Our Culture</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
                Built on discipline, integrity, and mutual respect.
              </h2>
              <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
                We take pride in our personnel. Every guard and operative is properly equipped, trained to international private security benchmarks, and treated with the professional dignity they deserve.
              </p>
            </SectionReveal>

            <SectionReveal stagger className="mt-8 grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <RevealItem key={v.t} className="card-shell rounded-2xl p-5">
                  <p className="font-[family-name:var(--font-display)] uppercase text-lg text-[color:var(--color-brand-green-deep)]">{v.t}</p>
                  <p className="mt-1.5 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">{v.b}</p>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24 text-center max-w-2xl mx-auto">
          <SectionReveal>
            <h2 className="font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Express interest in confidence.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              Please send a brief introduction and CV to our enquiries inbox. We respond as openings match.
            </p>
            <a
              href={`mailto:${siteMeta.email}?subject=${encodeURIComponent("Careers — Expression of interest")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-mid)] transition"
            >
              Email Careers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </SectionReveal>
        </div>
      </section>

      <CTABand
        eyebrow="Looking for security?"
        title="We're hiring — and serving — quietly."
        body="If you'd like to engage Impress for a deployment instead, our consultation line is always open."
      />
    </>
  );
}
