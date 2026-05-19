"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serviceIcons = {
  "manned-guarding": (
    <>
      <path d="M12 2 L20 5 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V5 Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  "executive-vip-protection": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </>
  ),
  "event-crowd-security": (
    <>
      <circle cx="6" cy="10" r="2" />
      <circle cx="12" cy="8" r="2.5" />
      <circle cx="18" cy="10" r="2" />
      <path d="M2 20c0-3 2-5 4-5M22 20c0-3-2-5-4-5M8 20c0-3 2-5 4-5s4 2 4 5" />
    </>
  ),
  "background-checks-vetting": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M8 11h6M11 8v6" />
    </>
  ),
  "private-investigation-surveillance": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  "security-consultancy-risk-assessment": (
    <>
      <path d="M3 21l5-5M14 3l7 7-11 11H3v-7z" />
      <path d="M14 3l7 7" />
    </>
  ),
};

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="card-shell rounded-2xl overflow-hidden group flex flex-col"
    >
      <div className="relative aspect-[16/9] bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden="true"
             style={{
               backgroundImage:
                 "radial-gradient(circle at 30% 50%, rgba(158,217,58,0.5), transparent 60%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2), transparent 60%)",
             }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ED93A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {serviceIcons[service.slug]}
          </motion.svg>
        </div>
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-[10px] uppercase tracking-[0.18em] text-white/90 border border-white/20">
          0{index + 1}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-[family-name:var(--font-display)] uppercase text-xl tracking-tight text-[color:var(--color-ink)]">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)] flex-1">
          {service.summary}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-brand-green-deep)] group-hover:gap-3 transition-all"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
    </motion.div>
  );
}
