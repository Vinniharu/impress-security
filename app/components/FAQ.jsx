import SectionReveal from "./SectionReveal";
import { faqJsonLd, JsonLd } from "../lib/seo";

export default function FAQ({
  faqs,
  eyebrow = "Frequently Asked Questions",
  title = "Answers before you call.",
  className = "bg-white",
}) {
  return (
    <section className={className}>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container-x py-20 md:py-28 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <SectionReveal>
          <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05] text-[color:var(--color-ink)]">
            {title}
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1} className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-[family-name:var(--font-sans)] text-base md:text-lg font-semibold text-[color:var(--color-ink)]">
                  {f.q}
                </h3>
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-green-deep)] transition-transform group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ED93A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </summary>
              <p className="mt-3 pr-12 text-[color:var(--color-ink-muted)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
