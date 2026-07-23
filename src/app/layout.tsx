import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { contact, firm } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arvind B Reddy Law Chambers | Advocate & Legal Counsel in Bengaluru",
  description:
    "Arvind B Reddy Law Chambers — Adv. Arvind B. Reddy (B.E., LL.B.) provides trusted legal counsel in Bengaluru with 10+ years' experience. Civil, criminal, constitutional, commercial, property, family and arbitration matters. Enrolment KAR/1271/2015.",
  keywords: [
    "advocate Bengaluru",
    "lawyer Bangalore",
    "Arvind B Reddy Law Chambers",
    "Arvind B Reddy",
    "civil lawyer Bengaluru",
    "criminal lawyer Bangalore",
    "High Court Karnataka advocate",
    "law chambers MG Road",
    "constitutional lawyer Bangalore",
    "property lawyer Bengaluru",
    "family law advocate Bangalore",
  ],
  openGraph: {
    title: "Arvind B Reddy Law Chambers | Advocate & Legal Counsel in Bengaluru",
    description:
      "Precision advocacy for civil, criminal, constitutional, and commercial legal matters in Bengaluru.",
    type: "website",
    locale: "en_IN",
    url: firm.domain,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      name: firm.advocateName,
      jobTitle: firm.title,
      worksFor: {
        "@type": "LegalService",
        name: firm.name,
      },
      description: firm.subtitle,
      url: firm.domain,
      telephone: contact.phoneDisplay,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address.line1,
        addressLocality: "Bengaluru",
        postalCode: "560025",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: contact.geo.lat,
        longitude: contact.geo.lng,
      },
      areaServed: "Bengaluru",
      knowsLanguage: ["English", "Kannada", "Telugu", "Hindi"],
    },
    {
      "@type": "LegalService",
      name: firm.name,
      url: firm.domain,
      telephone: contact.phoneDisplay,
      email: contact.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address.line1,
        addressLocality: "Bengaluru",
        postalCode: "560025",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "6",
        bestRating: "5",
      },
    },
    {
      "@type": "LocalBusiness",
      name: firm.name,
      image: `${firm.domain}/images/optimized/hero-lawyer.webp`,
      telephone: contact.phoneDisplay,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address.line1,
        addressLocality: "Bengaluru",
        postalCode: "560025",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: contact.geo.lat,
        longitude: contact.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
