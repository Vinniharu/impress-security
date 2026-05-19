"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ShieldLogo from "./ShieldLogo";
import { primaryNav } from "../lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Impress Security Services home">
          <motion.span
            initial={{ rotate: -8, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex"
          >
            <ShieldLogo size={scrolled ? 32 : 38} />
          </motion.span>
          <span className="flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-display)] uppercase tracking-wider text-[15px] md:text-[17px] text-[color:var(--color-brand-green-deep)] font-semibold">
              Impress Security
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
              Nigeria Limited
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] uppercase tracking-wider font-medium link-accent transition-colors ${
                  active
                    ? "text-[color:var(--color-brand-green-deep)]"
                    : "text-[color:var(--color-ink)] hover:text-[color:var(--color-brand-green-deep)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green-deep)] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-mid)] transition-colors"
          >
            Request Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-[color:var(--color-brand-green-deep)] hover:bg-black/5 transition"
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform ${open ? "translate-y-[10px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-transform ${open ? "-translate-y-[10px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[64px] bg-black/40 lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-[64px] z-50 h-[calc(100dvh-64px)] w-[88vw] max-w-sm bg-white shadow-xl flex flex-col lg:hidden"
              aria-label="Mobile primary"
            >
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col">
                  {primaryNav.map((item, i) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                        className="border-b border-black/5"
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between py-4 text-[15px] uppercase tracking-wider font-medium ${
                            active
                              ? "text-[color:var(--color-brand-green-deep)]"
                              : "text-[color:var(--color-ink)]"
                          }`}
                        >
                          {item.label}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-brand-green-deep)] px-5 py-3 text-[13px] font-semibold uppercase tracking-wider text-white"
                >
                  Request Consultation
                </Link>
              </div>
              <div className="border-t border-black/5 px-6 py-5 text-[12px] text-[color:var(--color-ink-muted)]">
                RC1821921 · NSCDC Cat B Licensed
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
