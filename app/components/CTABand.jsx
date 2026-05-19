"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABand({
  eyebrow = "Confidential Consultation",
  title = "Start a quiet conversation about your security.",
  body = "Security is not an expense. It is an investment in peace of mind. Tell us what you need to protect — we'll take it from there.",
  primary = { href: "/contact", label: "Request a Consultation" },
  secondary = { href: "/services", label: "Explore Services" },
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ink)] text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-[color:var(--color-brand-green-mid)] blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[color:var(--color-brand-lime)]/60 blur-3xl" />
      </div>
      <div className="container-x relative py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] uppercase text-3xl md:text-5xl tracking-tight leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-lime)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] hover:bg-white transition-colors"
            >
              {primary.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
