import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { lagosAreas } from "../lib/seo";

export default function AreasServed() {
  return (
    <section className="bg-[color:var(--color-paper-warm)]">
      <div className="container-x py-20 md:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <SectionReveal>
          <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-green-mid)] font-semibold">
            Areas We Serve
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05] text-[color:var(--color-ink)]">
            Security services across Lagos and Nigeria.
          </h2>
          <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
            From our head office in Ojodu Berger, Lagos, we deploy guards, close-protection officers and investigators across Lagos State — and to clients across Nigeria on request.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-green-deep)]"
          >
            Check coverage for your site
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <ul className="flex flex-wrap gap-2.5">
            {lagosAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[color:var(--color-ink)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-green-mid)]" aria-hidden="true" />
                {area}
              </li>
            ))}
            <li className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-4 py-2 text-sm font-semibold text-[color:var(--color-brand-lime)]">
              Nationwide on request
            </li>
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
