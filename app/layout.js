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
  metadataBase: new URL("https://impresssecurities.ng"),
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Impress Security Services Nigeria Limited",
    description:
      "Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria.",
    type: "website",
    url: "https://impresssecurities.ng",
    siteName: "Impress Security Services Nigeria Limited",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Impress Security Services Nigeria Limited - Professional, Discreet, Intelligence-Driven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impress Security Services Nigeria Limited",
    description:
      "Category B licensed security company in Lagos providing manned guarding, VIP protection, investigations, and security consultancy.",
    images: ["/og-image.jpg"],
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
  logo: "https://impresssecurities.ng/logo.png",
  image: "https://impresssecurities.ng/og-image.jpg",
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
