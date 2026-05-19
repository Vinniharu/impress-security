import PageHero from "../components/PageHero";
import SectionReveal, { RevealItem } from "../components/SectionReveal";
import CTABand from "../components/CTABand";

export const metadata = {
  title: "Training | Impress Security Services Nigeria Limited",
  description:
    "Early morning parades, structured drills, and continuous physical and tactical conditioning before any deployment.",
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
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-gradient">
              <div className="absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true"
                   style={{
                     backgroundImage:
                       "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                     backgroundSize: "40px 40px",
                   }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="grid grid-cols-4 gap-4 w-full">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-md bg-[color:var(--color-brand-lime)]/20 border border-[color:var(--color-brand-lime)]/40 flex items-end justify-center pb-2">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9ED93A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="7" r="3" />
                        <path d="M5 21c0-3 3-5 7-5s7 2 7 5" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <p className="absolute bottom-4 left-6 text-white/90 font-[family-name:var(--font-display)] uppercase tracking-wider text-sm">
                Early Morning Parade
              </p>
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
