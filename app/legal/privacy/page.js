import PageHero from "../../components/PageHero";
import SectionReveal from "../../components/SectionReveal";
import { siteMeta } from "../../lib/siteMeta";

export const metadata = {
  title: "Privacy Policy",
  description: "How Impress Security Services Nigeria Limited collects, uses, protects, and retains client and visitor enquiry data.",
  alternates: {
    canonical: "https://impresssecurities.ng/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacy"
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we collect, use, and retain information you submit through this website."
      />
      <section className="bg-white">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <SectionReveal>
            <div className="prose prose-neutral max-w-none space-y-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">What we collect</h2>
              <p>We collect only the information you choose to submit through our enquiry form: name, organisation, email address, preferred contact method, service of interest, and a brief description of your need.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">How we use it</h2>
              <p>Information is used solely to respond to your enquiry, to scope a potential engagement, and to keep an internal record of correspondence. We do not share, sell, or repurpose enquiry data for marketing.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Retention</h2>
              <p>Enquiry records are retained for a maximum of 24 months from the date of last contact unless required for an ongoing engagement, after which they are securely deleted.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Confidentiality</h2>
              <p>All enquiries and engagements are handled under strict non-disclosure. Internal access is restricted to personnel who require it to respond.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Contact</h2>
              <p>To request deletion of your enquiry record, email <a href={`mailto:${siteMeta.email}`} className="text-[color:var(--color-brand-green-deep)] underline">{siteMeta.email}</a>.</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
