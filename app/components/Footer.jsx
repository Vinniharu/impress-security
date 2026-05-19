import Link from "next/link";
import ShieldLogo from "./ShieldLogo";
import { footerNav } from "../lib/nav";
import { siteMeta } from "../lib/siteMeta";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-ink)] text-white/90">
      <div className="h-1 bg-lime-band" aria-hidden="true" />
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Home">
              <ShieldLogo size={40} />
              <span className="flex flex-col leading-tight">
                <span className="font-[family-name:var(--font-display)] uppercase tracking-wider text-base font-semibold text-white">Impress Security</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">Nigeria Limited</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">
              Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria.
            </p>
          </div>
          {Object.entries(footerNav).map(([heading, items]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-brand-lime)] font-semibold">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/80 hover:text-[color:var(--color-brand-lime)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 text-sm text-white/75">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-brand-lime)] font-semibold">Address</p>
            <p className="mt-2 leading-relaxed">
              {siteMeta.address.line1}<br/>
              {siteMeta.address.line2}<br/>
              {siteMeta.address.city}, {siteMeta.address.country}
            </p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-brand-lime)] font-semibold">Phone</p>
            <p className="mt-2 leading-relaxed">
              {siteMeta.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-[color:var(--color-brand-lime)] transition">{p}</a>
              ))}
            </p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-brand-lime)] font-semibold">Email</p>
            <a
              href={`mailto:${siteMeta.email}`}
              className="mt-2 block break-all hover:text-[color:var(--color-brand-lime)] transition"
            >
              {siteMeta.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
          <p>{siteMeta.rc} · NSCDC Category B Licensed · © {year} {siteMeta.legalName}</p>
          <p className="font-[family-name:var(--font-display)] uppercase tracking-[0.2em] text-[color:var(--color-brand-lime)]">
            We Secure Quietly. We Protect Effectively.
          </p>
        </div>
      </div>
    </footer>
  );
}
