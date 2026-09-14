import PageHero from "../../components/PageHero";
import SectionReveal from "../../components/SectionReveal";
import { siteMeta } from "../../lib/siteMeta";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of the Impress Security Services Nigeria Limited website.",
  alternates: {
    canonical: "https://impresssecurities.ng/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Terms"
        eyebrow="Legal"
        title="Terms of Service"
        lead="Terms governing the use of this website. These do not constitute a service contract."
      />
      <section className="bg-white">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <SectionReveal>
            <div className="space-y-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Use of this site</h2>
              <p>This website is provided for informational purposes about {siteMeta.legalName} and its services. By using the site you agree to use it lawfully and only for legitimate enquiry purposes.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">No service contract</h2>
              <p>Nothing on this site constitutes a service contract. Engagements are formed only by a signed agreement between you and {siteMeta.legalName}.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Intellectual property</h2>
              <p>All content, marks, and design on this site are the property of {siteMeta.legalName} unless otherwise stated.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Disclaimers</h2>
              <p>The site is provided on an &ldquo;as is&rdquo; basis. We make reasonable efforts to keep the site accurate but make no warranties as to availability or completeness.</p>

              <h2 className="font-[family-name:var(--font-display)] uppercase text-2xl text-[color:var(--color-ink)] tracking-tight">Governing law</h2>
              <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
