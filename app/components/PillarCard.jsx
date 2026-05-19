"use client";

import { motion } from "framer-motion";

const icons = {
  professional: (
    <path d="M12 2 L19 5 V12 C19 17 15.5 20.5 12 22 C8.5 20.5 5 17 5 12 V5 Z" />
  ),
  discreet: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  intelligence: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
};

export default function PillarCard({ icon, title, body, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="card-shell relative rounded-2xl p-7 md:p-8"
    >
      <div className="absolute top-0 left-7 h-1 w-12 rounded-b-full bg-[color:var(--color-brand-lime)]" />
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand-green-deep)] text-[color:var(--color-brand-lime)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icons[icon]}
        </svg>
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-display)] uppercase text-2xl tracking-tight text-[color:var(--color-ink)]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {body}
      </p>
    </motion.article>
  );
}
