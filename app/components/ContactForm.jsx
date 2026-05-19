"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../lib/services";
import { siteMeta } from "../lib/siteMeta";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const org = fd.get("organisation") || "";
    const service = fd.get("service") || "";
    const method = fd.get("method") || "";
    const message = fd.get("message") || "";

    const subject = encodeURIComponent(
      `Confidential enquiry — ${service || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nOrganisation: ${org}\nService of interest: ${service}\nPreferred contact method: ${method}\n\nBrief description:\n${message}\n\n— Sent from impresssecurities.ng enquiry form`
    );
    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="organisation" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] font-semibold">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            className="rounded-lg border border-black/15 bg-white px-4 py-3 text-[15px] focus:border-[color:var(--color-brand-green-deep)] focus:outline-none transition"
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="method" className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] font-semibold">
            Preferred contact method
          </label>
          <select
            id="method"
            name="method"
            className="rounded-lg border border-black/15 bg-white px-4 py-3 text-[15px] focus:border-[color:var(--color-brand-green-deep)] focus:outline-none transition"
            defaultValue=""
          >
            <option value="" disabled>Choose one</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="In person">In person</option>
          </select>
        </div>
      </div>
      <Field label="Email address" name="email" type="email" required />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] font-semibold">
          Brief description of need
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-black/15 bg-white px-4 py-3 text-[15px] focus:border-[color:var(--color-brand-green-deep)] focus:outline-none transition resize-y"
          placeholder="Tell us, in confidence, what you would like to protect."
        />
      </div>
      <p className="text-xs text-[color:var(--color-ink-muted)] leading-relaxed">
        Confidentiality notice — every enquiry is handled under strict non-disclosure. We do not share, sell, or repurpose your information.
      </p>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-mid)] transition-colors"
      >
        Send Confidential Enquiry
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </motion.button>
      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[color:var(--color-brand-green-deep)]"
        >
          Your mail client should now open. If it doesn’t, email us directly at {siteMeta.email}.
        </motion.p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] font-semibold">
        {label}{required && <span className="text-[color:var(--color-brand-green-mid)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-black/15 bg-white px-4 py-3 text-[15px] focus:border-[color:var(--color-brand-green-deep)] focus:outline-none transition"
      />
    </div>
  );
}
