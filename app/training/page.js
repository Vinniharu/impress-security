import Image from "next/image";
import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";

export const metadata = {
  title: "Security Training & Tactical Drills",
  description:
    "Rigorous security guard training in Nigeria. Daily parades, physical conditioning, emergency response, and tactical drills that prepare Impress Security personnel for high-stakes deployment.",
  alternates: {
    canonical: "https://impresssecurities.ng/training",
  },
  keywords: [
    "security guard training Nigeria",
    "tactical drills security guards Lagos",
    "private security guard conditioning",
    "parade training security personnel Nigeria",
    "certified guard academy Lagos",
    "emergency response training security guards",
  ],
  openGraph: {
    title: "Security Training Academy | Impress Security Services",
    description:
      "Physical and tactical conditioning, structured drills, and situational awareness training for corporate and industrial security guards in Nigeria.",
    url: "https://impresssecurities.ng/training",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Impress Security Guard Training Drills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Training & Tactical Drills | Impress Security",
    description: "Daily parades and tactical drills conditioning elite security guards in Nigeria.",
    images: ["/og-image.jpg"],
  },
};

const pillars = [
  { title: "Discipline", body: "Daily parade and inspection — the bedrock of consistent conduct on every site." },
  { title: "Situational Awareness", body: "Drills that train personnel to read environments, anticipate change, and respond calmly." },
  { title: "Standardised Drills", body: "Documented procedures so every deployment performs to the same operating standard." },
  { title: "Tactical Conditioning", body: "Continuous physical and tactical conditioning to maintain readiness in real-world scenarios." },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Training"
        eyebrow="Training"
        title="Early morning parades. Standardised drills."
        lead="Personnel undergo continuous physical and tactical conditioning, with emphasis on discipline, situational awareness, and standardised drills before deployment."
      />

      <section className="bg-white">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Training Philosophy</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Readiness is built quietly, every morning.
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
              Early morning warm-up parades and structured training sessions sit at the core of our operational readiness. The objective is not theatre — it is the steady, repeated rehearsal of judgment under pressure.
            </p>
            <p className="mt-4 text-[color:var(--color-ink-muted)] leading-relaxed">
              We measure readiness in posture, in punctuality, in the quality of a single observation written into a report.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-[color:var(--color-ink)]">
              <Image
                src="/staff/pic4.jpeg"
                alt="Impress Security staff on early morning parade"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-[center_35%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/85 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="text-white font-[family-name:var(--font-display)] uppercase tracking-wider text-lg">
                    Early Morning Parade &amp; Drills
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-brand-lime)] font-semibold">
                    Standardised Tactical Conditioning
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] uppercase tracking-widest text-white border border-white/30">
                  Daily Regimen
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[color:var(--color-paper-warm)]">
        <div className="container-x py-20 md:py-24">
          <SectionReveal className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">Four Training Anchors</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
              The standards every officer carries to the post.
            </h2>
          </SectionReveal>
          <SectionReveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <RevealItem key={p.title} className="bg-white rounded-2xl border border-black/5 p-6 relative">
                <div className="absolute top-0 left-6 h-1 w-12 rounded-b-full bg-[color:var(--color-brand-lime)]" />
                <p className="font-[family-name:var(--font-display)] uppercase text-xl text-[color:var(--color-brand-green-deep)]">
                  {String(i + 1).padStart(2, "0")} · {p.title}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)] leading-relaxed">{p.body}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTABand
        title="Partner with personnel trained to one standard."
        body="Every Impress officer reports to the same training and operational benchmark — before they ever step onto your site."
      />
    </>
  );
}
