import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Authentic Pakistani Catering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pakistani catering",
    "Pakistani catering Medway",
    "Pakistani catering Kent",
    "buffet catering Medway",
    "tray catering Kent",
    "Pakistani catering Maidstone",
    "Pakistani catering Gravesend",
    "Pakistani catering Dartford",
    "Tawaa Fresh",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Authentic Pakistani Catering`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Authentic Pakistani Catering`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo/tawaa-fresh-logo.png`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    servesCuisine: "Pakistani",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.town,
      addressRegion: siteConfig.location.county,
      addressCountry: "GB",
    },
    areaServed: siteConfig.serviceAreas,
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
