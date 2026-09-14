"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[color:var(--color-brand-green-deep)] text-white min-h-[88vh] flex items-center"
    >
      {/* Photographic background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/staff/pic4.jpeg"
          alt="Impress Security staff in parade formation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </motion.div>

      {/* Brand-gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(105deg, rgba(20,62,27,0.92) 0%, rgba(31,95,42,0.82) 40%, rgba(20,62,27,0.55) 70%, rgba(14,26,20,0.5) 100%)",
        }}
      />

      {/* Animated accent blobs */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-[color:var(--color-brand-lime)]/20 blur-3xl animate-drift" />
        <div className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-[color:var(--color-brand-green-mid)]/30 blur-3xl" />
      </motion.div>

      {/* Grid lines accent */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true"
           style={{
             backgroundImage:
               "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }}
      />

      <div className="container-x relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center py-20 md:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-[color:var(--color-brand-lime)] font-semibold"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-brand-lime)] animate-pulseDot" />
            Category B Licensed · NSCDC Approved
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-[family-name:var(--font-display)] uppercase text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            We Secure <span className="text-[color:var(--color-brand-lime)]">Quietly.</span><br />
            We Protect Effectively.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/85"
          >
            Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria. We protect lives, assets, and reputations — without intrusion into personal or professional life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-lime)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-[color:var(--color-ink)] hover:bg-white transition-colors"
            >
              Request a Confidential Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-white/70"
          >
            <span>RC1821921</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>NSCDC/PG/024/0001468</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Chairman: AIG (rtd) Aderenle Shinaba</span>
          </motion.div>
        </div>

        {/* Floating trust card */}
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative max-w-sm rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-2xl"
          >
            <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-lime)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-green-deep)] animate-pulseDot" />
              Trust
            </div>
            <p className="mt-3 font-[family-name:var(--font-display)] uppercase text-xl leading-snug text-white">
              Your trust is our valuable asset.
            </p>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Vetted personnel · Structured training · Documented procedures.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-brand-lime)] font-semibold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
              NSCDC Cat B Licensed
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
