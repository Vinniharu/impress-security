import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteMeta } from "./lib/siteMeta";
import { services } from "./lib/services";
import { organizationId, websiteId, lagosAreas, JsonLd } from "./lib/seo";

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
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: "Impress Security Services | Security Company in Lagos, Nigeria",
    template: "%s | Impress Security Services",
  },
  description:
    "Licensed private security company in Lagos, Nigeria: manned guarding, VIP protection, event security, investigations, vetting and risk consultancy, 24/7.",
  applicationName: siteMeta.shortName,
  keywords: [
    "Impress Security",
    "Impress Security Services",
    "Impress Security Services Nigeria Limited",
    "Impress Securities",
    "Impress Security Lagos",
    "Security company Lagos",
    "Security company in Lagos",
    "Private guard company Nigeria",
    "Licensed security services Lagos",
    "Category B security company Nigeria",
    "NSCDC licensed security company",
    "VIP protection Nigeria",
    "Executive protection Lagos",
    "Corporate security Lagos",
    "Manned guarding Lagos",
    "Background checks Nigeria",
    "Private investigation Lagos",
    "Event crowd security Nigeria",
    "Security consultancy Lagos",
    "Risk assessment Nigeria",
    "Security company Ojodu Berger Lagos",
    "Security companies in Nigeria",
    "Best security company in Lagos",
    "Private security company Nigeria",
    "Security guard company Lagos",
    "Security services in Lagos",
  ],
  authors: [{ name: "Impress Security Services Nigeria Limited", url: siteMeta.siteUrl }],
  creator: "Impress Security Services Nigeria Limited",
  publisher: "Impress Security Services Nigeria Limited",
  category: "Security & Investigations",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
  openGraph: {
    title: "Impress Security Services | Security Company in Lagos, Nigeria",
    description:
      "Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria. Category B licensed under the Private Guard Companies Act.",
    type: "website",
    url: "/",
    siteName: siteMeta.shortName,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impress Security Services | Security Company in Lagos, Nigeria",
    description:
      "Category B licensed security company in Lagos providing manned guarding, VIP protection, investigations, and security consultancy.",
  },
};

const organizationJsonLd = {
  "@type": ["SecurityService", "LocalBusiness", "Organization"],
  "@id": organizationId,
  name: siteMeta.legalName,
  alternateName: [
    siteMeta.shortName,
    "Impress Security",
    "Impress Security Services",
    "Impress Security Lagos",
    "Impress Securities Services",
  ],
  url: siteMeta.siteUrl,
  // Add Google Business Profile, LinkedIn, Facebook, etc. URLs here once they exist.
  sameAs: [],
  foundingDate: "2021-07-27",
  logo: {
    "@type": "ImageObject",
    url: `${siteMeta.siteUrl}/logo.png`,
    caption: "Impress Security Services Nigeria Limited Logo",
  },
  image: `${siteMeta.siteUrl}/opengraph-image`,
  description:
    "Category B licensed private guard and security company in Lagos, Nigeria. Specialised in manned guarding, executive & VIP protection, private investigations, vetting, and security consultancy.",
  slogan: siteMeta.promise,
  telephone: siteMeta.phones,
  email: siteMeta.email,
  priceRange: "$$",
  currenciesAccepted: "NGN",
  paymentAccepted: "Bank Transfer, Cheque",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteMeta.address.line1}, ${siteMeta.address.line2}`,
    addressLocality: siteMeta.address.city,
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.6433,
    longitude: 3.3642,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Lagos State",
    },
    ...lagosAreas.map((name) => ({ "@type": "Place", name: `${name}, Lagos` })),
    {
      "@type": "Country",
      name: "Nigeria",
    },
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Corporate Affairs Commission Registration (RC)",
      value: siteMeta.rc,
    },
    {
      "@type": "PropertyValue",
      name: "NSCDC Operating Licence",
      value: siteMeta.nscdc,
    },
    {
      "@type": "PropertyValue",
      name: "Tax Identification Number (TIN)",
      value: siteMeta.tin,
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${siteMeta.siteUrl}/services/${service.slug}`,
      },
    })),
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteMeta.phones[0],
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: siteMeta.phones[1],
      contactType: "operations & emergency dispatch",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  ],
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteMeta.siteUrl,
  name: siteMeta.shortName,
  alternateName: ["Impress Security", siteMeta.legalName, "Impress Securities Services"],
  inLanguage: "en-NG",
  publisher: { "@id": organizationId },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [websiteJsonLd, organizationJsonLd],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-NG"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={jsonLd} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
