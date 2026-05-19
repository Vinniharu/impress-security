import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteMeta } from "./lib/siteMeta";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title:
    "Impress Security Services Nigeria Limited | Licensed Private Guard Company in Lagos",
  description:
    "Category B licensed security company in Lagos providing manned guarding, VIP protection, investigations, and security consultancy. Professional, discreet, intelligence-driven.",
  keywords: [
    "Security company Lagos",
    "Private guard company Nigeria",
    "Licensed security services Lagos",
    "VIP protection Nigeria",
    "Corporate security Lagos",
    "Background checks Nigeria",
    "Private investigation Lagos",
  ],
  openGraph: {
    title: "Impress Security Services Nigeria Limited",
    description:
      "Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteMeta.legalName,
  description:
    "Category B licensed private guard company providing manned guarding, VIP protection, investigations, and security consultancy in Lagos, Nigeria.",
  telephone: siteMeta.phones,
  email: siteMeta.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteMeta.address.line1}, ${siteMeta.address.line2}`,
    addressLocality: siteMeta.address.city,
    addressCountry: siteMeta.address.country,
  },
  areaServed: "Nigeria",
  identifier: siteMeta.rc,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        <a href="#main" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
