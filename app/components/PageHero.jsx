"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHero({ eyebrow, title, lead, breadcrumb }) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--color-brand-lime)] blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-[color:var(--color-brand-green-mid)] blur-3xl" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-lime-band" aria-hidden="true" />
      <div className="container-x relative py-20 md:py-28">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="text-[11px] uppercase tracking-[0.2em] text-white/70 flex items-center gap-2 mb-6"
          >
            <Link href="/" className="hover:text-[color:var(--color-brand-lime)]">Home</Link>
            <span>/</span>
            <span className="text-[color:var(--color-brand-lime)]">{breadcrumb}</span>
          </motion.nav>
        )}
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold mb-3"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] uppercase text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}
