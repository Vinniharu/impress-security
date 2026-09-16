import Image from "next/image";
import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";
import { siteMeta } from "../lib/siteMeta";

export const metadata = {
  title: "About Us & Executive Leadership | Impress Security Services Nigeria Limited",
  description:
    "Learn about Impress Security Services Limited, our operational philosophy, our Board Chairman AIG Aderenle Shinaba (rtd), fdc, mni, and our CEO/MD Mr. Charles Fasuba. Category B licensed in Lagos, Nigeria.",
  keywords: [
    "About Impress Security",
    "AIG Aderenle Shinaba",
    "Mr Charles Fasuba",
    "Charles Fasuba CEO",
    "Security company CEO Lagos",
    "Board Chairman Impress Security",
    "Security company leadership Lagos",
    "Private security company profile Nigeria",
    "Licensed guard company Lagos",
    "Security services management Nigeria",
  ],
  alternates: {
    canonical: "https://impresssecurities.ng/about",
  },
  openGraph: {
    title: "About Us & Executive Leadership | Impress Security Services Nigeria Limited",
    description:
      "Corporate governance chaired by retired Assistant Inspector General of Police AIG Aderenle Shinaba (rtd) and executive direction by CEO/MD Mr. Charles Fasuba.",
    url: "https://impresssecurities.ng/about",
    type: "website",
    images: [
      {
        url: "/staff/ceo.jpeg",
        width: 750,
        height: 1000,
        alt: "Mr. Charles Fasuba - CEO/MD, Impress Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Executive Leadership | Impress Security Services",
    description: "Executive leadership, governance, and licensed security operations in Lagos, Nigeria.",
    images: ["/staff/ceo.jpeg"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://impresssecurities.ng/about/#webpage",
      url: "https://impresssecurities.ng/about",
      name: "About Impress Security Services Nigeria Limited",
      description: "Corporate brief, history, and executive leadership of Impress Security Services Limited.",
    },
    {
      "@type": "Person",
      "@id": "https://impresssecurities.ng/about/#chairman",
      name: siteMeta.chairman,
      jobTitle: "Board Chairman",
      worksFor: {
        "@type": "Organization",
        name: siteMeta.legalName,
      },
      description: "Retired Assistant Inspector General of Police (AIG). Chairman of the Board of Impress Security Services Nigeria Limited.",
      image: "https://impresssecurities.ng/staff/chairman-placeholder.jpg",
    },
    {
      "@type": "Person",
      "@id": "https://impresssecurities.ng/about/#ceo",
      name: siteMeta.ceo,
      jobTitle: siteMeta.ceoTitle,
      worksFor: {
        "@type": "Organization",
        name: siteMeta.legalName,
      },
      description: "Chief Executive Officer / Managing Director of Impress Security Services Nigeria Limited.",
      image: "https://impresssecurities.ng/staff/ceo.jpeg",
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
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

        <div className="container-x pb-20">
          <SectionReveal>
            <div className="relative aspect-[21/9] md:aspect-[3/1] w-full rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <Image
                src="/staff/pic4.jpeg"
                alt="Impress Security staff in formation"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <p className="text-white text-xs md:text-sm font-medium tracking-wide uppercase">
                  Disciplined Deployment &amp; Regulated Personnel
                </p>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] uppercase tracking-widest text-white border border-white/30">
                  Operations Squad
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-[color:var(--color-ink)] text-white scroll-mt-32">
        <div className="container-x pt-20 md:pt-24 pb-10">
          <SectionReveal className="max-w-3xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold">
              Executive Leadership &amp; Governance
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Guiding discipline. Driving operational rigor.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg">
              Our organisation combines seasoned law enforcement governance at the board level with proactive executive leadership to deliver reliable, regulated private security operations across Nigeria.
            </p>
          </SectionReveal>
        </div>

        <div className="container-x pb-20 md:pb-28 space-y-16 lg:space-y-24">
          {/* Chairman Section */}
          <div id="chairman" className="pt-8 border-t border-white/10 grid lg:grid-cols-[1fr_1.35fr] gap-12 items-center scroll-mt-36">
            <SectionReveal>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[color:var(--color-brand-green-deep)]">
                <Image
                  src="/staff/chairman-placeholder.jpg"
                  alt={siteMeta.chairman}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--color-brand-green-deep)]/90 backdrop-blur text-[11px] uppercase tracking-[0.18em] font-semibold text-[color:var(--color-brand-lime)] border border-[color:var(--color-brand-lime)]/30">
                    Board Chairman
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60 bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    Governance
                  </span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-lime)] font-semibold">
                <span>Board of Directors</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
                {siteMeta.chairman}
              </h3>
              <p className="mt-3 text-[color:var(--color-brand-lime)] text-sm uppercase tracking-[0.18em] font-semibold">
                {siteMeta.chairmanRole} · {siteMeta.chairmanTitle}
              </p>
              
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
                <p>
                  AIG Aderenle Shinaba (rtd) brings over three decades of distinguished leadership at the highest echelons of Nigerian law enforcement. His decorated career in the Nigeria Police Force culminated in his appointment as Assistant Inspector General of Police (AIG).
                </p>
                <p>
                  Throughout his tenure, AIG Shinaba commanded strategic, high-stakes state divisions—serving as the Commissioner of Police for Lagos State, the Federal Capital Territory (FCT, Abuja), and Kano State. Across these pivotal commands, he spearheaded major crime-prevention architectures, sensitive VIP protection protocols, and inter-agency security operations.
                </p>
                <p>
                  A fellow of the National Defence College (fdc) and alumnus of the prestigious National Institute for Policy and Strategic Studies (mni), his chairmanship anchors Impress Security Services in statutory compliance, institutional discipline, and rigorous security governance.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Former CP Lagos State</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Former CP FCT Abuja</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Fellow NDC (fdc)</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Member NIPSS (mni)</span>
              </div>
            </SectionReveal>
          </div>

          {/* CEO / MD Section */}
          <div id="ceo" className="pt-12 border-t border-white/10 grid lg:grid-cols-[1fr_1.35fr] gap-12 items-center scroll-mt-36">
            <SectionReveal>
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[color:var(--color-brand-green-deep)]">
                <Image
                  src="/staff/ceo.jpeg"
                  alt={`${siteMeta.ceo} - ${siteMeta.ceoRole}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-[color:var(--color-brand-lime)] backdrop-blur text-[11px] uppercase tracking-[0.18em] font-semibold text-[color:var(--color-brand-green-deep)] border border-[color:var(--color-brand-lime)]">
                    CEO / Managing Director
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/70 bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    Operations
                  </span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-lime)] font-semibold">
                <span>Executive Management</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.08]">
                {siteMeta.ceo}
              </h3>
              <p className="mt-3 text-[color:var(--color-brand-lime)] text-sm uppercase tracking-[0.18em] font-semibold">
                {siteMeta.ceoTitle}
              </p>
              
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm md:text-base">
                <p>
                  Mr. Charles Fasuba serves as the Chief Executive Officer and Managing Director of Impress Security Services Nigeria Limited, directing the company&apos;s corporate strategy, day-to-day operations, and nationwide growth.
                </p>
                <p>
                  With deep practical acumen spanning physical guard deployments, tactical operations, electronic surveillance integration, and threat vulnerability assessments, Mr. Fasuba oversees client service excellence, supervisor accountability, and guard training standards across all sectors.
                </p>
                <p>
                  Under his executive leadership, Impress Security fulfills its core commitment: &quot;We Impress You With Our Services&quot;—delivering quiet vigilance, prompt incident escalation, and dependable 24/7 security protection for corporate headquarters, industrial facilities, and high-net-worth clients throughout Nigeria.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Strategic Leadership</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Guard Force Oversight</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Client Operations</span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">Quality Assurance</span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Work with a security partner you can trust."
        body="From corporate sites to private estates, our deployments begin with a confidential conversation."
      />
    </>
  );
}
