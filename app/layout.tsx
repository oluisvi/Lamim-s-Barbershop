import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business } from "@/data/business";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Barbearia Lamim's | Entre na Lamim's",
  description:
    "Conheça a Barbearia Lamim's em uma experiência imersiva. Explore o ambiente, serviços, equipe e agende pelo Fresha.",
  keywords: ["barbearia em Jacareí", "Barbearia Lamim's", "barbeiro Jacareí", "corte de cabelo Jacareí", "barba Jacareí"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Barbearia Lamim's | Entre na Lamim's",
    description: "Uma porta digital para conhecer a Lamim's antes da sua próxima visita.",
    type: "website",
    locale: "pt_BR"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d0c0a"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: "BR"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.fresha.rating,
      reviewCount: business.fresha.reviewCount
    },
    sameAs: [business.instagram, business.fresha.venueUrl]
  };

  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
