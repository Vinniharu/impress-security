"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const items = [
  { value: 24, suffix: "/7", label: "Operations Coverage" },
  { value: 100, suffix: "%", label: "Vetted Personnel" },
  { value: 6, suffix: "", label: "Core Service Lines" },
  { value: 2021, suffix: "", label: "Incorporated" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[color:var(--color-paper-warm)] border-y border-black/5">
      <div className="container-x py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-[color:var(--color-brand-green-deep)] tracking-tight">
                <CountUp end={it.value} />
                <span className="text-[color:var(--color-brand-lime)]">{it.suffix}</span>
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] font-medium">
                {it.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
