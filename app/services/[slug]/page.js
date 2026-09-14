import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import CTABand from "../../components/CTABand";
import SectionReveal, { RevealItem } from "../../components/SectionReveal";
import { services, getService } from "../../lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};

  const pageUrl = `https://impresssecurities.ng/services/${slug}`;

  return {
    title: `${s.title} | Impress Security Services Nigeria Limited`,
    description: `${s.summary} ${s.lead}`,
    keywords: [
      s.title,
      `${s.title} Lagos`,
      `${s.title} Nigeria`,
      "Impress Security Services",
      "Licensed security services Lagos",
      ...(s.deployBullets || []),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${s.title} | Impress Security Services`,
      description: s.summary,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: s.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${s.title} - Impress Security Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.title} | Impress Security Services`,
      description: s.summary,
      images: [s.image || "/og-image.jpg"],
    },
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} - Impress Security Services`,
    description: `${service.summary} ${service.lead}`,
    provider: {
      "@type": "SecurityService",
      name: "Impress Security Services Nigeria Limited",
      url: "https://impresssecurities.ng",
      telephone: "0803 920 9495",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    url: `https://impresssecurities.ng/services/${slug}`,
    image: service.image ? `https://impresssecurities.ng${service.image}` : "https://impresssecurities.ng/og-image.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        breadcrumb={service.title}
        eyebrow="Service"
        title={service.title}
        lead={service.summary}
      />

      <section className="bg-white">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Overview</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              How we deliver this service.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed text-lg">
              {service.lead}
            </p>

            {service.serviceBullets && (
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">What we provide</p>
                <ul className="mt-4 space-y-3">
                  {service.serviceBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-green-deep)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ED93A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                      </span>
                      <span className="text-[15px] text-[color:var(--color-ink)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SectionReveal>

          <div className="space-y-8">
            {service.image && (
              <SectionReveal delay={0.05}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-[color:var(--color-ink)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-[center_30%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-white text-xs font-medium uppercase tracking-wider">
                      {service.title} Deployment
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[color:var(--color-brand-green-deep)] text-[10px] uppercase tracking-wider text-[color:var(--color-brand-lime)] border border-[color:var(--color-brand-lime)]/30">
                      Active
                    </span>
                  </div>
                </div>
              </SectionReveal>
            )}

            {service.deployBullets && (
              <SectionReveal delay={0.1}>
                <div className="rounded-2xl bg-[color:var(--color-paper-warm)] border border-black/5 p-7">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">Where we deploy</p>
                  <ul className="mt-4 grid gap-2.5">
                    {service.deployBullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[15px] text-[color:var(--color-ink)]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-lime)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-mid)] transition"
                  >
                    Discuss your deployment
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Related Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              You may also need
            </h2>
          </SectionReveal>
          <SectionReveal stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <RevealItem key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="card-shell block rounded-2xl p-6 h-full"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green-mid)] font-semibold">Service</p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] uppercase text-xl text-[color:var(--color-ink)]">{r.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{r.summary}</p>
                </Link>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
