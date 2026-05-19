import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";
import { siteMeta } from "../lib/siteMeta";

export const metadata = {
  title: "Compliance & Licensing | Impress Security Services",
  description:
    "CAC Certificate of Incorporation, NSCDC Private Guard Companies Act Licence, and NSCDC Approval Letter. Operating under the Private Guard Companies Act.",
};

const documents = [
  {
    name: "Certificate of Incorporation",
    issuer: "Corporate Affairs Commission, Abuja",
    refLabel: "CAC Registration",
    ref: siteMeta.rc,
    date: "Issued 27th July 2021",
    signed: "Signed by A. G. Abubakar, Registrar-General.",
    tone: "deep",
  },
  {
    name: "Private Guard Companies Act Licence",
    issuer: "Federal Ministry of Interior",
    refLabel: "Licence No.",
    ref: siteMeta.nscdc,
    date: "Category 'B' · Form B, Section 3",
    signed: `Signed 27/8/2025 by ${siteMeta.licensingAuthority}.`,
    tone: "mid",
  },
  {
    name: "NSCDC Approval Letter",
    issuer: "Nigeria Security and Civil Defence Corps",
    refLabel: "Reference",
    ref: "FMI/NSCDC/PGC/3023/107/VOL I",
    date: "Dated 27th March 2025",
    signed: "Signed by Samuel Peter Maigeri, fsi, ACG (PGC), for the Commandant-General.",
    tone: "lime",
  },
];

const commitments = [
  "Adequate medical treatment for guards injured in service, at company expense",
  "Compensation for permanent incapacitation or loss of life",
  "Strict compliance with the national minimum wage policy and labour laws",
  "Mandatory registration of all guards with NSCDC via Form 'D'",
  "Complete records kept and available for NSCDC inspection",
  "Annual licence renewal three months before expiry",
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        breadcrumb="Compliance"
        eyebrow="Compliance & Licensing"
        title="Operating under the Private Guard Companies Act."
        lead="Regulatory documents establishing legitimacy under CAP 367 / CAP P.30 Laws of the Federation of Nigeria 2010, and the standards we commit to in writing."
      />

      <section className="bg-white">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Regulatory Documents</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Verified. Current. On file.
            </h2>
          </SectionReveal>

          <SectionReveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {documents.map((d) => (
              <RevealItem key={d.name} className="card-shell rounded-2xl overflow-hidden flex flex-col">
                <div className={`relative aspect-[3/4] ${
                  d.tone === "deep" ? "bg-[color:var(--color-brand-green-deep)]"
                  : d.tone === "mid" ? "bg-[color:var(--color-brand-green-mid)]"
                  : "bg-lime-band"
                } flex items-center justify-center p-8`}>
                  <div className="absolute inset-6 border-2 border-white/40 rounded" aria-hidden="true" />
                  <div className="relative text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={d.tone === "lime" ? "#1F5F2A" : "#9ED93A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mx-auto">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M9 14l2 2 4-4" />
                    </svg>
                    <p className={`mt-4 font-[family-name:var(--font-display)] uppercase text-base tracking-wider ${d.tone === "lime" ? "text-[color:var(--color-ink)]" : "text-white"}`}>
                      Official Document
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white flex-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">
                    {d.issuer}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] uppercase text-xl text-[color:var(--color-ink)]">{d.name}</h3>
                  <dl className="mt-4 space-y-2 text-sm">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">{d.refLabel}</dt>
                      <dd className="text-[color:var(--color-ink)] font-medium">{d.ref}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">Status</dt>
                      <dd className="text-[color:var(--color-ink)]">{d.date}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs text-[color:var(--color-ink-muted)] leading-relaxed">{d.signed}</p>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">NSCDC Commitments</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Commitments we are bound to — in writing.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              The NSCDC approval letter sets out the standards we are required to maintain. We treat them as floor, not ceiling.
            </p>
          </SectionReveal>
          <SectionReveal stagger className="grid gap-4">
            {commitments.map((c, i) => (
              <RevealItem key={c} className="bg-white rounded-xl border border-black/5 p-5 flex items-start gap-4">
                <span className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-brand-lime)] leading-none w-10 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-[15px] leading-snug text-[color:var(--color-ink)]">{c}</span>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTABand
        title="Engage a licensed, accountable partner."
        body="Every commitment above is a contractual promise carried into every deployment."
      />
    </>
  );
}
