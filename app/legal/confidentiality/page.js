import PageHero from "../../components/PageHero";
import SectionReveal from "../../components/SectionReveal";
import { siteMeta } from "../../lib/siteMeta";

export const metadata = {
  title: "Confidentiality Statement | Impress Security Services",
  description: "Our binding commitment to client confidentiality.",
};

export default function ConfidentialityPage() {
  return (
    <>
      <PageHero
        breadcrumb="Confidentiality"
        eyebrow="Legal"
        title="Confidentiality Statement"
        lead="A binding commitment to discretion across every enquiry and engagement."
      />
      <section className="bg-white">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <SectionReveal>
            <div className="space-y-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              <p>
                {siteMeta.legalName} treats every client enquiry, engagement, and deployment as strictly confidential. We do not disclose client identities, sites, schedules, or operational details to third parties.
              </p>
              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Internal handling</h2>
              <p>Access to client information is restricted to personnel with a defined operational need. All staff are bound by individual non-disclosure obligations as a condition of employment.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Reporting</h2>
              <p>Investigation and surveillance reports are produced under sealed cover, delivered directly to the engaging client, and never retained on shared systems.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Regulatory disclosure</h2>
              <p>Where compelled by law or by a lawful regulatory request, disclosures are limited to the minimum required, and clients are notified where permitted.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Pull quote</h2>
              <p className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-brand-green-deep)] tracking-tight not-italic">
                Your trust is our valuable asset.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
