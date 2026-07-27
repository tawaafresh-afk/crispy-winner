import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Pakistani Catering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pakistani catering",
    "Asian wedding catering",
    "halal catering UK",
    "walima catering",
    "mehndi catering",
    "luxury catering Birmingham",
    "Tawaa Fresh",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Pakistani Catering`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Pakistani Catering`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    servesCuisine: "Pakistani",
    priceRange: "£28-£58",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.tiktok],
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
