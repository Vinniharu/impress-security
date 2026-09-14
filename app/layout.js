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
  title: {
    default:
      "Impress Security Services Nigeria Limited | Licensed Private Guard Company in Lagos",
    template: "%s | Impress Security Services Nigeria Limited",
  },
  description:
    "Category B licensed security company in Lagos providing manned guarding, VIP protection, investigations, and security consultancy. Professional, discreet, intelligence-driven.",
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
  ],
  authors: [{ name: "Impress Security Services Nigeria Limited", url: "https://impresssecurities.ng" }],
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
  openGraph: {
    title: "Impress Security Services Nigeria Limited | Licensed Private Guard Company in Lagos",
    description:
      "Professional, discreet, intelligence-driven security services for corporate organisations and individuals across Nigeria. Category B licensed under the Private Guard Companies Act.",
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
  "@type": ["SecurityService", "LocalBusiness", "Organization"],
  "@id": "https://impresssecurities.ng/#organization",
  name: siteMeta.legalName,
  alternateName: [
    siteMeta.shortName,
    "Impress Security",
    "Impress Security Services",
    "Impress Security Lagos",
  ],
  url: "https://impresssecurities.ng",
  logo: {
    "@type": "ImageObject",
    url: "https://impresssecurities.ng/logo.png",
    caption: "Impress Security Services Nigeria Limited Logo",
  },
  image: "https://impresssecurities.ng/og-image.jpg",
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
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manned Guarding",
          description: "Disciplined, vetted personnel deployed across corporate, residential, and industrial sites.",
          url: "https://impresssecurities.ng/services/manned-guarding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive & VIP Protection",
          description: "Discreet close-protection for executives, high-net-worth individuals, and visiting dignitaries.",
          url: "https://impresssecurities.ng/services/executive-vip-protection",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event & Crowd Security",
          description: "Comprehensive security planning, crowd control, and emergency response for high-profile gatherings.",
          url: "https://impresssecurities.ng/services/event-crowd-security",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Background Checks & Vetting",
          description: "Discreet integrity, employment, tenant, and domestic staff vetting.",
          url: "https://impresssecurities.ng/services/background-checks-vetting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Investigation & Surveillance",
          description: "Legal, ethical surveillance, asset tracing, fraud, and corporate inquiries.",
          url: "https://impresssecurities.ng/services/private-investigation-surveillance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Security Consultancy & Risk Assessment",
          description: "Practical risk audits, vulnerability identification, and crisis preparedness advisory.",
          url: "https://impresssecurities.ng/services/security-consultancy-risk-assessment",
        },
      },
    ],
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
